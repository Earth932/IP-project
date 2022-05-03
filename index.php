<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    
    <style>
        .wrapper {
            width: 650px;
            margin: 0 auto;
        }
        .page-header h2 {
            margin-top:0;
        }
        table tr td:last-child a {
            margin-right: 15px;
        }
    </style>

    <script>
        $(document).ready(function(){
                $('[data-toggle="tooltip"]').tooltip();
        });
    </script>
</head>
<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header clearfix">
                        <h2 class="pull-left">person</h2>
                        <a href="create.php" class="btn btn-success pull-right">add new person</a>
                    <div>
                    <?php
                        require_once 'person.php';

                        $sql = "SELECT * FROM person" ;
                        if($result = mysqli_query($link, $sql)) {
                            if(mysqli_num_rows($result) > 0){
                                echo "<table class='table table-bordered table-striped'>";
                                    echo "<thead>";
                                        echo "<tr>";
                                            echo "<th>#</th>";
                                            echo "<th>Firstname</th>";
                                            echo "<th>Lastname</th>";
                                            echo "<th>Email</th>";
                                            echo "<th>Password</th>";
                                            echo "<th>Addrees</th>";
                                            echo "<th>Tel.</th>";
                                            echo "<th>Edit</th>";
                                        echo "</tr>";
                                    echo "</thead>";
                                    echo "<tbody>";
                                    while($row = mysqli_fetch_array($result)){
                                        echo "<tr>";
                                            echo "<td>" . $row['id'] . "</td>";
                                            echo "<td>" . $row['firstname'] . "</td>";
                                            echo "<td>" . $row['lastname'] . "</td>";
                                            echo "<td>" . $row['email'] . "</td>";
                                            echo "<td>" . $row['password'] . "</td>";
                                            echo "<td>" . $row['address'] . "</td>";
                                            echo "<td>" . $row['tel'] . "</td>";
                                            echo "<td>";   
                                                echo '<a href="read.php?id='. $row['id'] .'" class="mr-3" title="View Record" 
                                                data-toggle="tooltip"><span class="fa fa-eye"></span></a>';
                                                echo '<a href="update.php?id='. $row['id'] .'" class="mr-3" title="Update Record" 
                                                data-toggle="tooltip"><span class="fa fa-pencil"></span></a>';
                                                // echo '<a href="delete.php?id='. $row['id'] .'" title="Delete Record" 
                                                // data-toggle="tooltip"><span class="fa fa-trash"></span></a>';
                                            echo "</td>";
                                        echo "</tr>";
                                    }
                                    echo "</tbody>";
                                echo "</table>";
                                mysqli_free_result($result);
                            } else {
                                echo "<p class='lead'><em>No records were found.</em></p>";
                            }
                            mysqli_close($link);
                        }
                    
                    ?>    
                    </div>         
                    </div>  
                </div>
            </div>
        </div>
    </div>
</body>
</html>