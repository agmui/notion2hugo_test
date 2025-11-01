---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVFF4GK%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDfWLfC66U53k3cbu6Fappg%2FhrXnrelrGQA3Z2hAmzv0wIhAM1eEePtI6uyW4jghaIi8yDFXj9Q5UKSaZBQKouS0ta7Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwX6DFT3VUQJtycrtQq3APmMaUQ78mKqQnsSJ2VXoZ94nyFk%2B75V6oTgQz1hSklZZBPvyY3MX6EZcBcx9kdWLClztIydsVFR%2FrTHM71ijbRBtway7rqic8KN8q1FrSAyi7Anl7gv2jEgmJ3Wy3uaqG%2FL0NlRfXtkKixAKnQV7FDPNLjxwVgKa6MfkM9lpsGCtc4JmP%2BmhoLxCVZ7oGOfY3ax4DzhMSTu54Gn9jMaIBMCPbNRfiNSmDwuDpttjnJacPJ4UBWZlIiWiKTGH6gLWYw48aARbuNatfrOAiJIcExIBfmt22TAHW%2FzuF87IINlpdV%2BOfAW3ekExzt1DPf9vdhBX1McMRw1ZvUuQoyq7vbuYGBZFEUMhPyJHg6W8XwY1KEj3ID7%2FPHVciJfzj5g4ZuqTc1fh4yia0AwGVw4KtDNDjwuCeq02vV1P3vVE%2BvPQrnML%2B%2F7AW75P27pqAoieZcgKASnYnXEoIjMBy9FTMIMa2BIC3uppjCwEm3GGlU5zsts%2Fu3TtCRUT%2F6%2FA59DVD1ozHEL0UDmb5NEmKyEq5KnpY5XWvDQntIcyzWVbvlhleUoJ3jKDLHUBLJgpKELR9x1HUdH9QUT%2BrBNfbdgB0V0WYj0xbNkYDh3m0H5NOiSa5ngAjLCNE0hJYxTTC7%2BpTIBjqkAftltBsMChNPiuFPmnZ1BKzxXX38JZIgQy2%2FJDnUEaSQAOv8XFl9O9pDso8gqx2Ej07huEg%2F4KNlZeSBuqsih4p6oEJCfB3v2U2ZWDkMBU1X1gShnsfslLtuU3ieIQS5K%2FOwXlb%2BZ%2F2i0X7fV13DiqlwNTOBe5luKkBQZ6pAgtnF2mgaREE1xBUEi5xk0P%2BK7MgqW9PExHcwBcnH7Fco2cmZieLq&X-Amz-Signature=5e339c6bb363a2c80f8a769f90b94595b9cb95574ec152779f1b767c94411a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZWRD35%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFRm778558fhte5ZGyVKeWGNeNCt3G6wQiG9E%2FBTAc5cAiAT1s6jIRIa%2FjlzETyC%2BgoOzK8ktt6CcLcmGp8IEK0Rtir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM1lsAk%2BZ2Ui8N38gaKtwDmoqGFX3unjN7%2FMlW6FB0s8YWbFDqrKKbBogHZWM3Lf6E9Jjt9MT1oMEwu%2FmUwXXnCtzLrn3wcrjMwP%2B%2Fg0AR6%2BsomJG26IXCjM48tsd3VALfoCVeCUZY1iSwml7EdM6BHkSu8YEewmjZxUBBg%2FCH6ptX3V7HTST3D5QY6TJGdSbm8w6tIMRV92Uvrwbg31bTgZI2%2BZ89rzq4GZBJ2XeQnflbWDLhU%2FRaU80o%2FtQ4F%2BpAfeWz5IxuYodMalPKIk%2B4IrUdXtxCmIBrmAXYF2%2Fo7NoBIJvSrgFPg2PP7zrOfMiNMp6JJxiUErxGxV9u8TsWne5f39CmnPju7Xd%2BzTWASz%2FSxadiPLt3B7Rsy7oCs%2FWX0sfmiOMeR0qfL6IJInUleWWEPakr03mGEi941hm7%2ByJloChc3NdZxdTMsgtKpLd2N0Z1BvouOf8sTEMx5kNmyVEQMl1lhKDcHYcqdDD6rovM3cVQX7uG9germtYG%2FP01sdnVbMplbun4LNSfeOVw5UXL5Gz5bObgSTWyk3DTW2gir8esbAH4ME13nZXJaNSm%2Fb1Xnu%2FXGjOCjEi%2BTJpqPeTc83etJUVVav33Q0d8ssQCoPTy1E7%2BjeXlLTF9VHD4qFyHC1Wzjy8%2BEJwwu%2FqUyAY6pgFK5BNH%2FEa2BuhyAAmlWngCkQxWskZWKrCMtuKk5443LHlrsRs8j42L3oLEHDK8RbPxXzpajq%2FnWQ2eUt9dzSLFxqx8V3vPPwtxP8wRsetcCTRev9QPi1ePrwPGqI9SbdtXO6d1Z526jgxTv3yKs881QfSAOy4U%2Bst%2Bqvq0Bs2CUxekvxP6SywvxFqjcdf8DZIaFs7mZbzC66EEmSfpBsPMqtHghlLC&X-Amz-Signature=6f4a94888681a7f531c506b0a498cac92da070d1653432773409367757c3b816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
