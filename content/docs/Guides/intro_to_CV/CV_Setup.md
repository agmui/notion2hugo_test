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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKOAXZL7%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK15sygeh%2B7pdfobkIAs9RRsfLdAXLQsqVAU7aYnHU1AIgCnY2192V3T7N5JoZeJj%2Bl4Ayv%2FrSZxeTL3ozVL3Ua8EqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfTeGNyLeBlvH9UPCrcAwJRegxld4RtljP0JqBcx%2FljR0jGuQGkDIHDCHhBWkMBlcDTm8ChvzjjjL%2Fj08bkTEoBzXbhA6qAjqptDuCSZHTggNELvGu9pBTeaKHmYzNY%2B%2Bwab1tGV820gzU1S789QmZjtewLpe%2BV9jL%2BgD1Mx5xleC0d51EMxrxVnGwU%2FFhCbnAwTw2KdRCZ1VPSghDl8tcGS5jKfY3GnYwZpPvJ70NrRvbVS01oT%2F4boQtKQl4dJPJfPum%2BgW04z04kF3hIobjHS8eJvoQlwiPPM6fizMmlpF0dH2oUgc%2FvL7bi2u7Zb0OJG9%2BZRmi1SSAXOaA11sGDFqTZ21in0GftVqb3zkcQxNXf5gG%2BzGH6S%2FEpGxLeWy78o8Lr0LeEW63zniXUWhep6Sk8%2FHuc1HTBjGadBTJlM3L%2BxVE5FuRMKh67yHull1D7EymX4mAfvBIpjhSstbwc4620TulAEWBefmT2zz0WZnUzs6HW9lZP5SRlSIVfnu4yKBJCLtPC7pNNmj1JcioSNJJ4slVK9PNL0jzGWogc0VaasODFw2lfGaDjnNc7Fm%2BcHgUYMDj0tBF%2FM6lpoKYAbh%2Fat5A3xCesqMn9Yjum7Cbm8eB2tlZ%2Fs%2FtDLqK5M0838bnL7FqnathZMMqdksMGOqUBab0unJI18Z3Qjwa25Tx3vAyS%2F4DqJMjx%2B6%2F4%2FnHlRVMW6wdPX3hwnrU5KRMHkImejLnG4HxidRQGyDsoUDlA4nybGQ6OQAfvQ0tzB%2FOeYzk6v4JovkJ7E9tdJ0sifbR1N76iGKNgorUoyuFT87lsT0%2BCZtU4kANvcJ3EkEYBg4lXSOg5Z8McJqu43%2F4Fe7avMXmKSyhdRQZdvbiTmmKROzvn5Gzy&X-Amz-Signature=51f149425da637ebacd4e9a7e23d531ca7cda055bb2a79cdad44058a185e7f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDARYBQW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJNwmR%2BL3VJwOeDztMUBcezrMC1SaEYx32qI%2FizStOeAiEAnl1umGUa9WUcdM0WssBc0%2FRx8qEtIrdCLCPUoiLDKeUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWgDq4854cGA2bRDSrcAx9xARjiUVTQFztB91ykI1EusCvq5iW9V9XVcEuSSh%2Bup6UaKx5hVY8Jq36bWMiSuxaAHAUjAh8rIKR8IKThKH2XkU%2BYV8PMBssnQKT1ckOWf7UEaxLoonwTsYe3qWoJYtLyb%2BVSW%2B8YaA6meiGH%2BIZRqrDiBDJ3XdPjJZX3xlAg80zFJkGRhdE%2BMurNvHfLSZbqReE7LskkM9%2FVxtrE4KSYbikJc%2B1kWHlGICNEJC%2FGBlWB34Zg6%2Ftd3dkXZ6MuDCe2sBASwqkwF9q%2BYUqkelEktDq1kqjbamdYc%2FLHHjzrC18IymEsmGvnQz9LRf5%2Fqi3QZhfG7M7LtjRYUKkM9yKNa2aiWvC8sW65m4JlufIfknJRBtcQHVLDrxO5NsLud4SvWcogknceNqBPRGF3dlJP2iFvg80u6KG3JZqhIH8nXzXMFLtUpl%2Fu%2BmTJ8Cp6bCMfEDUrjzWvPY%2FWXhd3BLPXWGX3KTxDr7Usg%2BrhmeMmxYnzOrwUzhK1ffj%2FDydcD80FjscIVQu65ryFBoKUMqNxFMxLGhOm7w84shi4sJdqGZgs26LtNMzUWPa1YWgPA7D6EFQ7EJUhPsTxELMlBb%2FoPjgwLls81wJgo539MDjLLHMo8W6T3iFrZYXoMIefksMGOqUBt6YSfdKHJqwhc4TDBgBj5rBJydxh9BGziEQf6OIgMzrd4B%2B6W4CQM74pUYJk3vQkUIh4b4j7OoHOWYsqBiAOMQguFd32rblUWqoRZ8Dx8xTwcjYwblIEeWzB5qf%2FpoSoe%2B%2BxTSNWDM7Vdc637kmsecvKBhgeRZOH%2FUOu8%2FgUiGbxQfMlfT%2B9MGv7VoJstnLDzQncMmICVtoIVrsHRnZbG5j3v%2Fzg&X-Amz-Signature=411482ff3c2af7d99d737f02da30def1907db08f4ddac4a19e720571c1f48ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
