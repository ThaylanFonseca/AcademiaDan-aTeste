
<?php 
include 'includes/header.php';

    $server = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "bdform";


    $conexao = new mysqli($server, $usuario, $senha, $banco);

    if ($conexao->connect_error) {
        die("Falha na conexão" . $conexao->connect_error);
    }


    $sql = "SELECT nome, email, assunto, mensage FROM formulario";
    $result = $conexao->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/admin.css">
    <title>Administrador</title>
</head>
<body>
<main>
    <section>
        <h1 id="h1">Painel do Administrador</h1>
        <table id="table">
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Assunto</th>
                <th>Mensagem</th>
            </tr>

            <?php 

            if ($result->num_rows > 0) {
                while ($linha = $result->fetch_assoc()) {

                    echo "<tr>
                            <td>" . $linha['nome'] . "</td>
                            <td>" . $linha['email'] . "</td>
                            <td>" . $linha['assunto'] . "</td>
                            <td>" . $linha['mensage'] . "</td>
                        </tr>"; 
                }
            }else {
                echo "<tr><td colspan='4'>Nenhum usuário cadastrado</td></tr>";
            }

            $conexao->close();

            ?>

        </table>
    </section> 
</main>
<?php 
    include 'includes/footer.php';
?>
</body>
</html>