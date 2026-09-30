
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            width: 320px;
            padding: 20px;
            background: #222;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        #display {
            width: 100%;
            height: 70px;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 30px;
            text-align: right;
            border: none;
            border-radius: 10px;
            background: #fff;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            height: 60px;
            font-size: 22px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: #444;
            color: white;
        }

        button:hover {
            background: #666;
        }

        .operator {
            background: #ff9500;
        }

        .operator:hover {
            background: #ffb340;
        }

        .clear {
            background: #e74c3c;
        }

        .equal {
            background: