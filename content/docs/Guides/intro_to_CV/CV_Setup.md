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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYLSUES%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8FcepyCvrtyBTqWSKGzkkstoGb%2Bl1oABqXaEYqDzaFAiEA4bz42qDw17K9DlZgp64MA4hseigSHiZMpRFJUYYJJXUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVCCWERG7R8GaUqAyrcAx5XORth%2BYsrtPXBvtpAZ8C5DqEuT42u%2FYg3twiIHGPnYQidSbwaPqjxKlY29Gkxbpfv5cGyp01Sv5u2gAU2xsqfNRA2alwFJWuuQ9VoYYDSsUqhHpm8zhvzUQpPVRt3iQnwTxErY14Xlg%2BiJz%2FYy38dfgobgXhRicl6v%2B4sBeqaFfC2CGZFw1taVYx3yU2y3jmAHcEK9KPXbQYp3XhrfiBq7THeZuPxEcp6obGRztkoogXBI60nIaOeaT3rUwRaBFjZaLQ9nBpMrhqLyxNl%2FppEugFwvRHKWbLYeCbLRAGMtHPPtECmvUGc%2FpIuZ%2BSnT508sZAegR4qTzx8lZq9NAUz164%2B7rN6dbgjRJQJo0ES3Xjpw%2FRGxKTDhwI2MGcQpeUsHbd0bfoWAGYGsVmVQHmSdPxLSwunuc5EWYxsU4OOCd8BzHw770YXdK9ZTp%2B90dyt%2FkS%2FoLlzJUPwQ%2BrYPJHAKJx%2FmKg6Xar1zgtSHEkNTCOlsdnR9dPYJs3MIizi7N52QsAyo9bE95C%2F775cppI8FecbAk7dGDspP%2Br03uXy8sE31ggDWHBoG6hKg47gycnjac3wv8OKde%2BNGjjEV0rYJIbJyIS30jRKvxtrQ8b%2BCTKrQGNly0tPTcagMILP2cIGOqUB3W07i%2FTdW%2BTOcsxLqULT2IIfC%2F4hjRPuQjjqOnHEj0vKn2GO4vrJs6lsUA2IYYw0chwAC4qKZhnClCx4ibG4L%2FVjBUXh9QOyTilwlw9H9tiHm4I6yaj2oNbvf2vNuPpb6ZU7MXTyVUwAwB0icLsVBtMKpvkGyco1%2B7mzPJ9SQPYhVhP5gnlZahcn5roJXLxEMObvV2IzExunhlkYSK8hubowbXTM&X-Amz-Signature=be6ec873e441955270c4f7dd30145eb225c354629ce254812ab00648d0bcfe18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KBUOGB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6janDVXR4X55K3nsrOz9qgWcJm6m6nZrEzoR2up%2FUlAiBvlhmmZITZE8FoQIdIkXPLIat%2Fx1zfUfRD%2Bk1K%2BOTHiSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3V%2FJJeXULPHjEpboKtwDFVTMIGICLOJKqTWfY0%2Bg2V69eyGwZWvKC9nSjMcXnqrYpdz8QpYfjIovO4GTuucBRyDCl5IIMmdY1CFr5gMXDaQrfFpm7tL9eVcytqUA4bYDi%2BGlqaFJDfDrqLhpvIsVnh3yKrtTnFMLaIhMpop36%2BiM3Y23wknLHycMRkmKqE9%2FWQblCUFtHpBU8j534OAMm%2FQdeRlwoeboPoqd%2FwXpSfKrZ3eSN3nDBC%2BbAUEtpLaYC7%2FwzHxCmlwy3dbjMVp4vH06H1acRRD70ZRIf1boNA9%2B16mKwBLGuMsn6ygxvbITS9cY9DffVyS%2FfI01G%2BiKiq6AezCHNuUTcTb4bJPs7bBqWGzHQxO8p9cSM7v2xBRYEMCNPLx9pqH47EQa2WjccBOcFVCxX2JaxaTyaD%2FKuKh5c%2FO0VMjwQofzCxB%2FZFPOCC0iyvqhhVzqAwslqcV6Xja9vLDxWpYYQJwxcMyb86V8UAnpd854fwnzWoNJTxy3yvvscsOgsj%2FNEV6b80EL42M0w9gRq3Sfur0MCRQpRY8A2za8Nt7wLKZsbz2134l%2B9hcKrbjluvYD5qWNaC2%2BKEpAoGq7Kt44pfHnT%2BNcFfFUyneeSqz6M6joeaVrQGUtQUoX39zOlsPURK0w5MvZwgY6pgFCJwSGTzaUPKLAXrQUYGQEBc3FD9VYnqehx3TxojZFR9X1B2n4Zhhp%2B%2BkV%2Fx6FFAQSK8qq9J%2BkneWvGHIb0IUYDRTO4tGCsF33Gkiiu%2BP4dX1%2BPm9y7Cixt0n%2FjIAnU8o%2Fr6vvj5J96ZNUzyR6027lBbFwzS5RnUS6TGFhkZq1P2RZlo3Pa9Cu7ElwJMofUs5ibPFMw1UmtjhimNO%2BanVHyUCOHebL&X-Amz-Signature=2e107be3dacb9ca1c03eb85829c71757314ae526dc5b32094f0cfdf1a34c1029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
