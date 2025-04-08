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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24DA2MI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDbRrjX5Pd69x5iU2binQWhm%2FAesfQXwna4SIOO4aCZWQIhAIb1dzStiEaa0hz2o7nFl%2Fk6kgX9QPbOzMgDtsThOL3eKv8DCHwQABoMNjM3NDIzMTgzODA1IgwCsbJlsdMXLnoALlMq3AMw5%2B0YWblr8N1uMkdYeAQkyv%2BtbUpgQlKpSuRNXPvefkCbFPcfcRjQv%2FDSq72JKgZF7YWjoqavCuC6W8VMAGHHoSif1Zo0Kq33JBG68L2uaM8ooCUVLWLhZPeEMOyBnlpAKbL27m2v0ftmlp%2F7OcXzUqy6uqdQESoXAjYDpG1dOWjpreSt7ALp6bBQhuynUwGgFhSS8qw8ZF7S8BB7DdorSlQmlgEStL1d2LGATBZmxKREVMmVlSKgLntPE24V5r2aj2sTi06t%2BXxizDLBZeADkLj%2F%2Fl59pKadpx6q0oSKmZSQ1tHaTiTjc4VLepJUNDrvLMweGBerh%2F0kmZj2JAPtX3EooXV%2BEGNYGoIGEbIt%2BQd4J%2BrNklC2Bkf0A42FdYVRnH%2BFny3CJvKth7ZkwhEi4RejKPEWD63NqlzGFLI%2BLkd0fymOtp3dI7yyJ4mu0bFUcF2S3bLMoOInMglJ1Wa30J7WIJd7fUMyCZ5KNOrZyBgjDYhdrr6eyrXjTP8LKY%2FXHLNVr8PqDmrXX4h8ja9ayuJw6LSoqqwgV5lyqF45WotKQPYh2d3%2FN7QLjBwVHvc0n5A8Y9hyFDH8KlnTLp1FN8Y%2BJ8w%2B8z3O5sQrYOmQU2b%2BCATCi8vWrCfGHjC31dW%2FBjqkAXub5xgLGFUm0d8ZtxeRbSHhO1Z%2FN1bn0jHWbysAbKGaLtnQLn17AKfNDzXrwsL7iLwgYQjm164Vhevisin4cy%2BWg85hYZWstulAjFfV5rBRTHz9V8Mup%2Fvz%2FK45LrR2dzze7A2S4MwJvZRd1LMtSNjCWZbjFcNnqaLbZvIkABEiLNMhdCkUUV284Yl21XdT%2BlumAlRF8B%2FeeyujR3IifhSwoWsv&X-Amz-Signature=51bccbd9b0912ca321e51f537a9c8c5845983a375d477712bf966dcbe6b45121&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIROJAMA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDVkdxlrgvdo3ffqRITU7Y68zzxiRgx22W8w5B%2FZkS3bgIgXsvdJO8wSdK4Lv%2FT%2FjkdPZdLnyvq4PrELqzXBMp4k%2BYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDP%2Fmi1mmo%2FXUbDi4AircAwnHYEJtRm0QADi9uSvAiumqAD6GzAHx2tSEEYD1bmi1iHR755EiVV3YeoVfli0ZdJiszBCleMOjuHejvX9Ely5BHsONQmYLTsO5fLylcCU9xg%2FSaxxjYCWlhAkzd03pISnIvQQu9UoMBeq1VoEGPem6h75T1t14n%2Bxd94dDTwv1eHgB9yL5crTaao3jobl7IMoUFCyCLR9mMP4r6GjA77zuPGf5hKU6GPf7vZ5NU2wlQFLwRXJ5pF0%2FqYfJXf%2BA%2FLFSrDtutn4XF%2BFLEBn%2BnHRis3NG%2BwpxTGHnbH23yf%2FsU2OH5Jd5pIeRhpNIqcVqJ9%2F7M8Pp1mVCJU18KmhahlXrIA3CiG63AcuJo%2FrwFRdm4y3aLzCnhFI4booLbZXfgVbq%2F7RDBoXRHyf51w14MjR7yFR4K3AFbgdDLqHCqI4fqXZSFmYjrHwevEBM5cWHAddRuZEZioa7cKnAwqyNEX31XZe5kWRyhHZ5t9GdO7AIpXf%2B88W7xeaChBfWZ2Q%2FyoPCi0%2FltitvJD0%2Fs3gZBzoAZq5fQfma9ORYRgqsjn5Olu4qHKKSyOmWoGVKLVoBwB8mpZWCCR7GjMLHVaQubwATbESyPsjezYy5uLF9dsL6kBSQMHAdE7c8yp4DMMjV1b8GOqUBNiprkmCd9iH8xE4%2B5TjdvZLSL8QRsTvz9rAcyg9FfTqba98paA%2FYH1LlLyKwAIR76Uy%2Bf7XfEhlpzJ1jQ00%2B%2BOBPDtTu5V1FEEQFqZWLCkBKSD6tDcNSvnMBzjL4hedD3wLLu7YuHOQL%2FZcYIymEnSrnjDg7CV3HEv4q%2Bo4YspwFeXHXRJesjhk2NEdP%2B%2FMl8CZtt1kuW5bSw%2FafUg9PzX5XQ%2BYl&X-Amz-Signature=5b7247b1fa1e49a00f5abfb84437091ec37aee1f4a71d89162c8977d699928cd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
