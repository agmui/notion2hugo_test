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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6RNLGW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC6L%2F52gnK1EVwco6oAo6ilesLLt2OHPy3dgtonMsfflgIgF%2B%2ByR5%2BpCcZZaW36GtSmKI%2FP0ohAL%2Bl7z7SjlQvoWagqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnnEv4eXcXVQ1AnSSrcAzZYhkYd%2Bi64tXNDxDoaihSKlc4oTIEQIdNIinkj1huQ9KeOBnuikpQmNhw5qQnxM%2Bo%2BUFxOzVNa%2BGsgGnaYWyAJSXlXIlrTpQpfGNMF76rJ1cQR3hB5R4t2pX8irIrg56gSRjtCilzrDVG%2B6s376I8cVs6jHM6%2BWyXxCWOJhSYQrFKMCkoq68n68ZN6KbxKh846R8%2FHMKw8kSQ%2FYHjUqRhychU8je4cLuZbgG%2FqisWP4bBt%2BQOU6QsynRVBUPu6iaMyHGjThon4mUOM32p0QIueA8KHMQrA59XSt8P4M9iXQY9Tg8P4Q3bXUwybyOnlVEOc5eXjMYhtQfElYvn1sZFtpGohHHDZ7GeagK16r%2BUGo%2BwroB2EtcUXL7CnnUjhKXUjI2mrv8gcnw9WaSWpCSgWj6Ih6HzsTdB1JeV1MDGBHO37hRXU58%2BiuSMKUUnFmhg2JgpDcBNPgwdImwEpZCLS2qDYmAPKImkI8NlE7hvs3ZQQClVa9%2FNeui2QL%2Fi9PNFtHtZ5dzR2przox%2Fj38xo1DK4rVz1yJVZxqTom0uC4enVbvFueOOEL04GPKIOEDVw9bG%2Fs656MqGlwbXNQNQU6veqcWXU%2FrXFingu15Zll%2FzsdYaWiDJreTiKUMPix0r0GOqUBAJpFJex6uhwu8E7WARiDKGCXWC1%2FHeDRRTKG%2FF1qk%2BgthxL1%2FCs5KvM1IQU3%2FK8IFNbCt48sGD%2FerkIyQUcgHybF1%2B%2FRpOwNLWv7M9jcv%2F9SqufUTgCw2wI7rf9g9vp6KXDvLFVqJDmtqYK0g2B14%2BbAnHAR5ULCj7ZtDVqt4MRaqDK%2FukSUf3QuWB9kikHC2djTTGZKfIovJF%2BEmbK9HkAeoyFq&X-Amz-Signature=cb0b7c828e8f64f0f496c732e51414d03556d473fb3d61271e2dc6e0ff9ebe49&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3APAG7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2FEFkh9xSw1de25mY1Xatz%2BZp1iYF1zA%2BlQMQ2cRiGcAIhAOV5CTi9OjWMZPtcHbVjNfaZINojXL70%2F4YgHsn4AIBYKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyarfV5ar7aU71tjOIq3AMnLsKK5z3D2Q6R0y%2F6d%2BQc8F3jC8Ygq66htur61FLf9y35MYbSgt6jP4lavi4cobWQMVsLS%2FKJQ1Rfns%2BftzrwpsRYiNROS2qpCESEBiXyA2tGq2Cv8L%2BOgCU1k33cMt2F1n%2FRMWQ6l%2BuJkvpKIxdp1EM3f%2BswLUgA43gra5x3Om0THzPTAOlU770eAhcGJc9nhxqihjhyzHC6GkEu%2Fg1LCp7NttqI7aGItTq5i7bg%2BHlec2UUTSJtnL06CTgmTsMp8SOHRRFt0hAcTWLymaH965McglY0D7qTjpPEJiw%2Fb8qUjrPWYYIqjzjOIZf%2FyqnAppi0S8QqaOFONWIRhCmchjhTl5zWtX6Uar6o%2BGzQz%2B5HSChCAawg2phW7QoLhXvTh1VZXvuTb8r9uBe8vzomb0ORflBD0Au0gSIJIf1jUZ7xX9by9%2BHhg7ywfVZC7CBokG6O9tS7PMt36JYK8JcGyk%2B6%2FHqod3p%2FINJ3ANUeJ1xZJp%2FycfVbsNcY692aD%2BvHUp6yfuzs%2BGAFwIzlbNk72LZlSUJBEup8vFl%2BjtFr4EnNDwuygkjQ6WRhFVfAB5bfRnMCksCNphbCBSD1%2BYtfDZmr02LcN40ZM6bS7KvisiskbWD65%2FCC6qwz4TCsstK9BjqkAWCWTcJel65DMBSls6a3MzCeAgjh6Q7V%2FpFRI47xvPT24IE6k28F2UP%2BBRmz81fU78SgiSYWzcrLghn10wHE0qI9%2FSdnfFePflBEaEiN1KDN%2FVRqgI3TJgsR4mG4xG%2BxZpKgoc6a%2B%2FAth3Hn4qfSzB37GRQX%2BektGlKxu6yTis2CSgrTbIiztG4cIC%2FK6skSRzJ36ta8pAx6h1%2B1BiqZKubVSk25&X-Amz-Signature=3d45d91b2d66e3a47274606cceaa67f4d59cbf89c03a83c8b185c9ddd58535a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
