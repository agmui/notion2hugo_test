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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWINBDM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCtCOgmeZ%2FhmovOYZsZaUSSdMWHYp2Qbv6ypw6ishLUoQIhAKgQcpOAO2rxpP3UDo9PcBz73QrrYRTrQHH2hW00CrIaKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjaddpP4B2ym4UMWMq3AMf%2F3qXish05ghW3%2Fc6tGOnjZm5UIY%2FyKDlYClkz5Owg3Zp491Z%2ByOkvbExwq5C%2FMAAL5F42nB7Fi%2B%2F4nXrOMmYkRqHsMreY4RpsC%2BGfAjbJa2zfQaQH%2Bi4ZppQz%2F8cTxyNEQBhnNcZFEmj2v58QXRzh1T6fl7DisbZMH9CYaBV9%2F7B5DaQMj%2BNv%2FtgFy7rDN8G9wox2Y%2FLIhQI1Y6xKdirMIL2PygFhJDeKorRhkTAVFGBpkPirsrRlGjd81i%2B4KnTTRaxXEvrfNldtE4IzNY5OhZVmxkZw06SZEjcq8%2BDZPKJ5qzW8mc7ZBkKUsxJvkChwbKq%2FREq0MX8z1iGI3cVZGSRWSKcaTh3QS%2B%2FWOlbqvj5hAFpIG3ddBYSHa6orER3Bwy8fti6v3wVf4LnubFqzK6RV1eo0Fc6CS4BQyyovxocs8UoS6jh7bxiv5QT3GY%2FtpPJoIIjcr%2BUQnbV0wwfstBDwMdwK8y47HgUnl6H3lIV2uW79JZunVz90v3xxNr%2FibHU1Ie7EEEZlTuiQkS483wWTHWva8WYgpsP4ynlXQdN5pCBz93JMCDbNZ1k6ENlyp4E%2B4XPQ%2FumC0Nov089ZispAN%2BqDXILVyzXDWZXGTKRlrMUsM5e545%2FBTCe%2FvbBBjqkAfMMkI8XLk6Mdt0iwK3Cz6kWScsR3XG%2Bg8pZ53kYZwp61UvgqYzypBJH1LzJmJ%2BN9xkUdVSo6Z1rNWrhhh2UEhnqGs7rs6xG%2BvLcX8zg7CwzhefbvinF0uBHbyVqPZKAk8nIBuy2Cua3dmwwHhRu%2BU7FqwkjK9Os010pH8gZj0lHEnDQHEIAhYEbXrI%2BL2z05blUWKg659Y8w1si21Ilj2iNkajJ&X-Amz-Signature=108b85c4ac21a3542d5b4f68be2cf46e776482b3a99bff9ec30c88a8d3c656fb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YB6F5QP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCe38SNns3vO2GjcWhlAp4xzpM4qHv16HdKx4ll%2Bo%2F0uwIgXOxafE2WueusF3qBZ4KqeUgJ6sBaug5FKuVox5ZjUbAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbUXP0IjIxwm6B14CrcA%2FDYX%2Bvh5B8b8x0MTIfsEuCAtdnWUTlFZGashtMERX%2FJ7Mb0xXshCu6dcL0aQZQIZbWiy3TF1j2p3JqhTP%2F6DEzSpAgu0ziKNkY%2F2AbELdMWRpe94NKr5ssn%2BNIxu%2F%2FiWVDjlrngquyLF%2B4EA%2FUotg7sJlkPnFcer7ABtJlnOptFPR8RGg9dq3MtiwY3LKg%2B8oCzkThlMGlGpD%2FWS0eyz0yDuXWvvGUr9rmFoDN2rivNhNbB9lm8iXVLhj55%2BjRHoE%2BbLAGmufIW0Fvk4z%2BGbR%2B%2FupmZzsT6yvJD5sE1EqvDfNJJoYzoo11MJKg3i0nWKWpmAygARaapk0BDzEYevEdA1eD9Maa2e%2FPHHiPcfV7w4GkVpKQlJf6ZVmp7RH8nCtSzzt3oTdmcgN4j2H9OQ3t15K8cd7SKNSu3LkRagJ0CH1%2FXJ7VE1WzgNqbxZUT8Fr0fWLkLbVdZeH5RlWGhVHjSMoPHzJexN6MsxfJLTfJB8x%2BJHM27EnjO8Z%2FqZXGhENhxuo%2Fzde%2FGNE%2BeU%2FroR4EiaLeDUOzZD%2BvrFjDymoQzBBRx50vH%2BwpHgFc6l9uTTQEINeO%2Fb1miYf7rmr9epJfmn1J%2FcKn69ddybqOoDEj1u9NimBmGKSgxgTftMLX99sEGOqUB4FzQypA%2B5zjyPUyURPlqX5qQF%2FCE%2FCMqVnTA8f58p1EssJ7CdikU%2BncCXp9sOcboNBdkVl%2FtooLqcPDvzHA4hEu0umL7RXTb4GTWcPzqi7bW9GpA708sJXEc0KoIowhwstp03o%2FaRwtp9HZET6Wk4FAuTzKo7RVw%2BWdPxL4GjoYflSnsxJi4PcI7Pj8An1xevIujGZ%2FM3M8fjjQZtI8a%2F8mpzYHb&X-Amz-Signature=bd604abace6de434691d4a972a26af43f55757b2e1bc2c5082cc15a9b4c87915&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
