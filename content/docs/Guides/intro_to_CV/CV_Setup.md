---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBFRVFZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEZBDp3PcH5xDXernK0JNpasj9XvjZYpyP2L6YgDhxYHAiBS69trYDqEQn2CxrBdwQpt9X8hy6dWBkco47C2VSZrsCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMu1cPPlb2lTKtjKfPKtwD9qYj%2Ft3Vl96Uw8d1hYcbTbD%2BO3Q9acDmgVmDfS6pOTHMFf6iIVcnQw3Z84k%2BWHm%2BRUKB8fbbWvCo8PqazpVaJ2na2Ax0AKc6dtTcRmNHmGMCPNvysnbSBrIo1EvuOvoO5njIzKuxyXENIlFE8W4Qe51MHxlRxzubsOFXueTXvQ1YjPVdEtkZ6eZlVd5Qjbt06gI%2Bfcf9kUh7BvXmHQeyvqEIjOlGgiu2G2WAEFX4QBMVPLX%2FY7Rwyvz7xGj8Zlyqwy9a%2BKJBhLe3QdSWmxp9z6VHD4RLil2O%2Fyd95mhBZ1KuN1hhwjSrCjaJtnI2Ds6RuZTBNUsYAYUO13rSGd6QZGjbZSkixTMZHCEJEKcxcbfjvGsXd6mjk%2FkLLm01Jp261JVvkbbMXv49PqRPw1m9Je9D%2FoCrOMFdOz2FWD67O9oFMuJ8an5FI%2B7%2BT4rY96IloVCtFJmrEwSrOxfgpwh8KmKNDVOiQZPLGpV1gDm6FD3RHqgmXF%2BDDbgXneu7JbByoga4Nyj2BwxfRPleh1JAPJl9Qs0yfnF5fXWm0jJA2hx3A2JOPefUChHxwgsMWFYePl9X7DuAq52kV5Qj7vWldKe05TI7OW4N69AvIE0T9ZHBHm83S%2FzSc%2FpG5wcwrYjTwwY6pgGiUwKC5ez1%2F5vCCqhKn36ZE26sfCV0WjSfghdUe0qgUpexGBWz7kj4ZbgxBYCRUtF7pKfmkkts9WissQmY24OjAaK1vXbzsBn7yLCAj1a9MkkTOQZz7TGAV%2FUoGyeGHy3LR%2FWvhGNNrdJ%2FSp6JY4LF5mpDNIYCpGIcnb%2F0d2LZPFF8BwjDY8sDlq7p7fmw2TXeETqYC7JXygt8xXcxQK1g%2FyCrXIkP&X-Amz-Signature=6e16d8eaf8663b5fbd33e4bbe4dfc59ccf753e46619669957efa6e89e131e26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JV2YUQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCCTdgwM9V5wKNo9U1Jc2O4sbtBJuX0nD6kjwYWPgJjjgIgDI1eVc39uKJiHm9gWVBEoSYkwapDz8PirVnhO%2F2ejMoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAGnWHSLQRWrvgVCGircA6tug0u0ChhBugEmdH6nftjkkZsHPRy%2Bylz6cokku8T64FVobkvazxel50fkrjIeF64cjL0gSNmMtJ2%2FgW8ZSLbqWdFCoG7ecKT2WLPcQKNZmBO07VgmehHIuDtlGBNG%2FKSd9q5HrvlKpUXFVnBXJW1g9ymZX4Y5BC8FGuG2s%2Fx7%2BhLImJ%2FuuH%2FIinplpC2ox348%2FSa4q2%2BuR%2ByKvs6uf%2BgCN5GoyGYd9CJiz1JGRJRKcDe1%2FBoH0cliAqbaQybCkCs22enWOXydAUWTpL%2F8XnxwHgTacTofl04IkPr4rl1Nt7qVhRXdcaqlUGnyEgKZGGEsLcNuu1g4C8fOEidlzTBfB%2F9e6rU7f%2FD8JNl8JK26XGNvws83zb3dvnyG8%2BDIJ13KLtY63WSLOH6xF19RQ7kpME4%2F9FkumfxztAwtfiKtRciPryTzsezhszqQeVF%2BREnxH7DJk0YlPDkdDTureLDxyQP74PG0o3koQDdT%2B0pHRCrKrN8Q48KKmLFchDcP7K0CqPLRHKx4XMQME5yJV18MiJxycnvwP526eFxySIXib%2Fiv%2FH6LGKWCu2Iqo6w%2Fgc%2BfKOfn8d5RE8FjOWnmsuolRiV8PUcqIWN66NLvcJLhPu%2BrtofPFigy0oyoMMqH08MGOqUBdpcOMhhmc1E5xj3h2gGLi36lb0PhpbcH1YWxnW7ymcE4Ce1VsCTmVTpY1339ZrYrIF7h%2FyLZohvNakuAcc5EHgAE42uTggBs3swQqGU4N8YfwfJy1YyRGl%2BJnK9w0lEq3lCD%2Fk7FJIsccS6oILbGI8IRPyDxXnvzkr9lqvz1K3Al7dtJcg%2BHS4OJyjy7YeyyHztg%2FQIklTBa2wAWEMcrtxDTOHa8&X-Amz-Signature=bd44e7b6c792aaf9aff67f91e9710dba7d30e8c84ac2cf52bbffe6292170ae97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
