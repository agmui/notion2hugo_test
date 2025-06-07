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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGE5HN4E%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDAeP9xvw9yx1iXGMAkQCiG5E%2BotdmwChn0Of795%2FbIAiEA0XJNAcKcNB19yMs1grMLNZsQi9zN86ezqtGLOldf7n0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNWvdfJo0aRpodok9CrcAwWZCe%2BNlO8Vnob%2BSvy0rIXkqHd0XeUPvVF9PvQGINHV%2FErFHm3P6cbt%2B72aRyHI9b5Jk50On%2FhfP5OI81RlcwPNV3g0XivyvuDaRslLtLa5KyhNNgu%2B%2FDUwmt9QX54Rde3mxceQX%2BugkZ7gUR50JTUUPn0hGEDE1%2BSFHsJ87BNLXSELvT4QFeQ6ODr7%2FKhtAgdnVHyCTdtd%2F%2B02RxXYNWERiZGsdNR9ooCJNgkAjdzoHdc0U0KAjU1f1o2sOLM8hxgbPdl37AmoVvOezY5%2FejhfEhggNwU39W2QUT1s0%2FgNlx3ek7%2BW4P6YyWSM9dFOYKJsdOmrFS4yqZ22gMuBx6yNfOp4XwW3romKoyTXDB0OzNhVmro%2BZrHt6YP5GX29W6BOvanmx9Bu9WLV2jJRQHq%2FXSuSCLIRDe%2FWEQ4GLa2ijcSbdG9YEo1elSTJzfdIYrtbRrj4RokLHhjweIsPw763CChwIqY%2F1WzCLLk9x5rs2J1VO%2B5JF3NvixBFXBzArXX08yj79ju6ynp52voxXusN5Sj%2BENp1NC0yYVFAkPFQp5w%2BvDXex8L3beJ3GTOVSsEDByGyoYPNsIIHF9yv%2BpnoK68fcB%2BY6g8Y78ivDRzjL2EgSbanyP3%2FAs7tMN76j8IGOqUB6JZ1nil5vaEtgYNqGXedVjK9tFuxvWqx6SElMwBb1bcD834IrRM3CI4PCzhQgqusgVKWnI2CrKBMpJX%2BKF4pgkoa%2FIdVeRRSWGuNXQ2nvopgOSMQQnfJYu%2FImu10ArzooD2XfJeHeyawRQ997Q9tOATmO8k8IcvELNzE3bEP%2FmEzkfCdrItak5l5CD750veJny%2FEoVPIOgj8q1BoULdJ2qCwL1xe&X-Amz-Signature=cd7576ffff6674310781d8035be707ade66bf8e5fafc028f1e2e0b1f708885cb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNYJEZ4S%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJR9dtJamsrQtYx0CqzXZmiFMq32AKvX3id%2FJ2suopGwIhAP6OEi9YUEYkrqYSKImhI9%2BCns6%2B4sVhDu5txZyLWgy1Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyqXYvkoxJnbGkioOkq3AMJyb%2Br8TK9LSsaLlv3eZmlGAN6w6XQzedHqr3O5zKjzFnmh0rd7L%2BpzERbiQm%2FhA8b08o7IWAajpT0zoNMoDhSx9R%2FW09q%2BKQf7lgcb8lIH%2FKs0buoAr1u98sUj8Qg0%2B5STsSSVS%2BZ3sf%2FZHZtiaPzvjvAQ0Y%2Br0o3E3U6XBwe7ALZt7G1f%2FY8KJzbRQyu%2FZn2qRblGfzm09uEstRrD%2FOkSKl%2FpPjTsvjnBRD2CNd4vC9PZzfDIg6NEMvfiwUQId2fYZ8DdnNFpZyCvQHkSBoIhV0RQuWqnKt%2BRAmJebxZ%2Bl43kk70j2YT3NOpkXOmvxL4flh8EMOk%2Bdsi%2FNKxVw6IqjL%2BDsVr26%2Fu6Frj8oExqtAdElU%2FO6gKOBiTbmT5Z0gdddnSrbQ7BLOYWHTH7735FX%2BmWI1Q8XUBnYcFBQLbD3U9oFGbI1wbYtlBPoaUxU6b48ABbHnZnzIjRdeSmH2PHF9OrBaHY5kirUQq2Z12xpryNlmk8kPLlsz%2FMMmNwlBTdMGVsuKZbkgzhleInSu9bAQ1XgqRFTCjLpmZbK0coJKt7%2BrbUw0tWbO8SRTp2iA9VUy9bBWy0FaCP2HjId6qmzXndahpfNpYauUIN%2BUlrUZhVE%2FVvV6B%2FEaivTDf%2Bo%2FCBjqkATVk6nkRrw5l6TqGp4U4CM1BCt%2FmknyMtpEg7KiVXzC9BtmqwVDlACb3qas5qbfYH8fP7%2BAAnewYAei0p8SAvmztByeBHuKFaIQx8LhE1BKtedJtq0ob%2F3wNBEu8eztjF9qLLuxiCiaEC6pd8gXY55qVuOtcrpywqF2hXpRJ3tlmAZde3YziCdwnXLIU7QFLaowKD41ZYvStXxTB3vmOb5NNurKD&X-Amz-Signature=59738632045a2ab04506ba8472efd6861087ad66d494365fdc7b19ab49aa3b01&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
