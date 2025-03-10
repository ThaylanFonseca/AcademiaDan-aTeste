<?php

$server = "localhost";
$usuario = "root";
$senha = "";
$banco = "bdform";


$conexao = new mysqli($server, $usuario, $senha, $banco);

if($conexao->connect_error){
    die("Falha na conexão: " . $conexao->connect_error);
}

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $assunto = trim($_POST['assunto']);
    $mensagem = trim($_POST['mensagem']);

}

$stmt = $conexao->prepare("INSERT INTO formulario (nome, email, assunto, mensage) VALUES (?,?,?,?)") ;
$stmt->bind_param("ssss", $nome, $email, $assunto, $mensagem);

if($stmt->execute()){
    echo"cadastro realizado com sucesso";
}else{
    echo"erro ao cadastrar";
}
$stmt->close();
$conexao->close();

?>