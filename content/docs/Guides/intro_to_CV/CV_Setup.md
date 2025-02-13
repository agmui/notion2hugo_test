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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZ536QM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY8IPxkJBGxd57hbkB38oDBhmjTp8%2FIKBbSahxXL263gIhANINGlHTxa%2BrJizbiNVJiD6Ein%2BG2kV%2BoeQ%2FFAi1QVD9Kv8DCBEQABoMNjM3NDIzMTgzODA1IgwXdDICBfeBPyOyKEYq3APzuTUj8OLfemHCXWkf6e28w%2F8v%2BV96hmCOLMqX3Y%2FSNkBtXwVZvgpOzt3iTpCCwR0jJQecrGWT%2FxZjoobEAJMkLvd7mZ3N0jLGIel52Uod%2Fw5bx%2BSCyiKnuuVhlN0oA72BPO%2FMbeEr1c3aXItZM9yfTleFsPi1cJw3UUtZ2gQFoIQOCNOZ%2BsxW8ZofHHrWh20ZEc283zJFHM5Yjda2NGB%2FdWRMGaITMKQPPQAQM49cS9Y%2BTAU9tNXMyTi9RTiPb8BGUtwo5plG%2FiDDxK9kqNw1IdtVbTAqstDUJH5Yh4E5CwaXgJcIZUAsKKlWg8F0UWnNE7wN0a9U3klGIWPb31Y5zwFkHZAbPEnZeanp0zX7Vhwv38pFmp1OUTHD8wvFSmhHKB62lKuR2Sp3ybcdiSxe4zp6sPZlfxW6RPGDCP%2F7kr7ratFVjofH2ox9rQY5Fg9R6DgweXrS64TUOuh1FoomfwEtTPxgemZb%2BmYOO1vl6pS%2BEkYNbTm0nmve659%2B7R1CVoNlfuCy3LfCfw1AhBwn30NrBzATJ%2F8lg7ZPVrwGJ7BZMt7dbMlWgYo2vN5oBqmujr%2BRZVTzS5YGXUfn%2BS7ZfRQ74UtVXIC12qsNNR7Nq0E3LZ3Iw7TxEi3GvjC%2Byba9BjqkAQlhr9Ixapj2bY3qEYc0vQemDLGe9c3iF81fJMaOL%2BFxs4HgaI3hb%2F42amwntrUTn4JQn2chAXWeCfRUHK8p7Gc8H02iKtezuxVWXLDlGkD%2BhKvX4%2Bo9RKX0AaUXm8DBF0cOs89HoemJdkzYY5CX2oAIeNcZUQYOKxHi1uS6nQXll%2Fd59IqRUn6iM3Plw%2FF7Xwxy9fKVCpSobNhJ6js8lEyClZas&X-Amz-Signature=1d3a99cb4a3fb3f0a702f1bb629ab8c651dca4af5b93fc163a19e5a230c971b6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQS3AFK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTFMkTgcKkrQroT3X1pNOnfDJy9IE952sZ553G8ku7KQIgSHkCmw6gYFVvEu7063oZTYf12qayuLIaNIz%2FUD19Ca8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPClejNUSafxfDNg%2BSrcA3%2Bz4MgDAhfs%2FL62hYdpqNvUQOMF6lku33i4rUuZuKBsVxPOPYQibGNNQXEj%2FUYZmZ%2F4hckhkoR3a4GE6PageXNSTr5DN2v56%2FyGl0Rx14aNrWHzRFptm2TD9%2FKxptz8JO5SRSVltyOX6Grg%2FhYaxLRLjfKUJ20YalR8dbdMkfD7qyzrjBgAWNUX0Ezigk8jrkF9CTJP4KQF%2FinwYXGRV9uG3n1%2BxaJB4eKnCkGrqD9Cw7L9xcJBdwca0JrPvad5GpBYmPqzcelcAhyBMvSqfMXpRGZCR6HJ8Dlfu7n5kgFPFNjGmoe3Dbb8HsFhRYus5%2FWtSMssca89oloSyQ00f6brfgIFKpycKnS3cyD4k6ZqOAUc5L2lupOeT4CVzFSE7TefSvn2Zh9%2BSk%2BYTsgMMfkov3F8sG27bQnrpfNEfDWK%2FGn6XuO%2Ftqn2JPjMCwPCpOPBXLOtfjhghA2OBJuojhc8C9VtEEQY%2BcAipv8NwLnkRpDRcZ1e0LGNRN6BDRFN9jmtTcqxTcW8KW2VnwJCBMgAdWljPySCmOtz55NpYbcRaNLnfYHCFABqkwhTey1m9ir%2B9FYHQJwWEjr5laDUnusBta9EX9ofltyMU0xzLj7m4UZxiSw0bftsxN9bMJbKtr0GOqUB0KqaPxNm6uwLWMVFNARl1Cn0QnijTIw8sFfftXWaQ1q2FLAnON5Jk9o6RnjeR2apC95bKLZTwyvmJd50hYTwU0wVvzY9SM2aKt8m6H%2Bqa%2F7OBjaXoopd4KjEZ7%2FreQiZp8GbKvXq2D0%2B9ODPGD%2Bcq37E9eJvDn0pw46SlwhfBE7U9AQDXbX2WsoED54GyQ1aiirKxcG7DSXJP9vQYfYB9mJ0d0iS&X-Amz-Signature=a736e67049b7faaf8c73adf919ea2e64b6fbdde67e6237db2fe842a13a291dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
