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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJSS3BD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC9a9Uig1jvGPmDrBIWRkhcnxhIVpArn0AZaEr4RDdH4gIhAIUkOiSPwYv09OZdWL5x%2FUP97mGHrfAWT2plDSooh17fKv8DCD0QABoMNjM3NDIzMTgzODA1IgyYsnBi%2Fa8rN6mSrMwq3AM%2BwhPtBvGP6V0witQbT3NDw%2FdmY6wG9Em2P3VBMKhOlVc2nJ0ItVIhnTP4ImGPI7zwb17FWfBrq5DNql2BrBn6agSoI4X1tD6t8cuDNERRbzKqGooQBNyXT4av6W2x93puD%2F2TrX8IeV%2FwxYlb5UrKRpuNoHyFIw3Td29vaZWxQdwRJJ2qooV%2BHBDiiXAM3NTArI87xnUH6CIV3fd6sRDqej3wUGAKOzacFJ1gTmNdKW8COcDs%2B4bIdUb0su9evnYC6nRu2D2rf2zV2XS4q8S%2BpYog6K31H%2Bx4kYBIzeqDcJxQj29roUlkQoppZ5tBAURonydv3iXjnT%2BomS6oYNlQCqHStLm5cWZN1QUzmKUWEqYIltaNu15Mw%2Fk6MVN4X4eN8jG9O6DK9yADHMzkj5MiXJYeNiUCcjVooJEv7r%2Bf%2FNBKEdkH3ck%2B%2B%2Fnepfbt%2F5dn0oiNGu5FUaIIHMPHyrrppLTro2OrSdDx1nIy0ELzSo0k1yzDJdyBLeC42MgftB56jnbLyq%2Fh7vz3uDKWiE%2BNhqJCdkGf%2B3uVKn%2FVPpkLaLVSQaly7otjc2fBf0PzllEEp4Xz%2FoKyPNXP90jck0TAODXQmR5JCBGIWiPFibWKvsntAwJqO83UAh1SjDCP6cDEBjqkAdrKzF87j6e%2F%2FC4QK8LXbXoVgJOGc9o%2BBz4mAvVuRBy28t1KuCOFEixDiQP%2BatlidtCcFuHNaMnetDNX7ZTs4CQY0ekzgAvDooxsW4QvbzRz7fF%2FZ7Jc2bQhDOn%2BOLYZXi%2FoaBiFkG9yCtphUpvplhpZSMEVwRzNloSO2fnPL65Qqc1LJ9VkHZpkuqI9Wtna%2B6idVYPSDlXS6hNNTiGRzgalBx1Z&X-Amz-Signature=be810f9a1d7c2a17ad048f6c6b624a1ccffdf0f5898bd1e4b89f86189a9d751a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POVFOMP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAHYArOBNDDUOQcCSNb26k0CszrYhY8K0EBHCBLYEHKJAiAQtjiv%2BbGT%2BXAdq4NOqsNvgkor6851ExOSxw7%2FzWsvnCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMph54HyURqJodQuIFKtwDlpiADhVz28T9AzOZShvUv3TyK6D4hf4CzmDuT74UhllEW7DPwXbkXCFbi30V%2FabwrbirKrtPIb3iJ3fi%2F7E5oCFlbjoULez50r5LF0Do0Qy3LQyTgjl8RuYZXw8KzC19rD5I07ui4aY%2Fo42CJSPPFcXQ2AFonWfrO4Eoej7POuT0kyZnDF4IQkwD4psmKGXU4XIA3lTKQS3pH0F0VumF3WCrLiLJQLxwA%2F4OHlwFADZOnx1FKu0ZNyvMXr4xLVGwVgGj2a7G4fTJpDeLNROCIhJoCW2tq%2FCF4V9Izr6t0rvpe3DM%2BiGZDGZ9K3bKIeVEuRQlaKrohLteXyKC%2BtrxdF1B3RsSrxA5oLh%2BKgrFTf6ozUt4j0XMLAbg%2BjZN4LX0SpOt%2BQ5Yn7%2BI8zypFf7VVlFyTX1Y4CK%2BTb2hBztMhPadtysMu13r2Kv%2F%2BJFb2SJbAu6Voe2mH7rE7a80b8E0LX7ZlLMU7Ipo3p8VcctnpsLbjCto994XbzZafdN7JpBGhTuqMSg6VJE4jAxCDvUNemFWMkqOmF3%2BhQBSIAriwuP8mE8IMPcYDmLzDlV8TJz21sxgblqdXHFb60OjfBkU9hQjYQ9qSh09Ep9QXcHSXhRDvp%2BIktE4nXFL%2BH8w%2FujAxAY6pgGUnrhT30mscapQayAs1svHrPACo4xGbSZLmbRp6tyf1HozuvpYYMyhE5x%2FjybkOB4aQ5gzef%2FHy2Md8Ua7seCB78xOO5lWqdBVXXgDhRkVtf%2F%2BdurSwZbDjZsPonxEfy7qKKO1qr9HiamDtiDXpc7GYvUuZKNFAdfZTghlcCs4nBmp2awZ8qRGtZNNO%2Fetb3cfmfSWfAFm%2FojceTVAmFCTKKzSXyOo&X-Amz-Signature=21b84bd5b8e349526988a3ed85ba00a97958e1966d5022eefe6150db73d8c4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
