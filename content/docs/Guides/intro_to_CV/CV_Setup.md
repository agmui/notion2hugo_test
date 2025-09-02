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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSF6Q4%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCURQzopCNri24yRWxQC%2B1hPr%2BQnn0su5Bg5NAwEAggzgIhAJ7wTGzhgywmom2XbI20dFfwewsg6rc5B480okV%2F%2BZgjKv8DCCIQABoMNjM3NDIzMTgzODA1IgzwHZoSTRK8euqXBQ8q3AOGoRKLKbH5cSg3paSX3M2udxi%2BmrIgtKBkfCLLAlCugEFUBCPqdx3rDaTCwx600DkSedTRZBVyh%2FCjsGjqPEQbrAV0qektQDNcATSkRK8KBHXguUgzj7lvLueLUuYVcV254w%2Fbrn7Bqyo%2FINea4RbVYVpfPgP1HIiSmclVs974KkmKOXclkH82Ls%2BV%2FzENrEbnY5VVLFDvdsRw5NeQGtSxd1neT6M44UoG3ic4nU0F5ldudjJQWQTw515glScqbgRB2v2ifjNY1Ug8daDCCMOmGnliryRlAFLCqN2seeSYiCcYyc8JipLSXM2%2B2MRsJeq6Q1yoYphcIYW6mZnfmZ92UN7ZqYH5hpqf0UjZeolZaiJjDd1BrTgRSWJ047C47WsKEqnCceQPoNttmFUqg3DgE29NhZsVBflTJEnvTcqtDPSHI19WQvb%2BX2gd9FsdJcqKkGlRUsPbDebqKBN0dZt6hO8TPegKaUDjLLEC9WC%2FH3CiqgQufZ09AFTG0YBXJqRfWWEC7vL1j%2BMws96GwVNYUT6zKrYc%2BQ%2FgnqL%2FMAiEwpHaV0OoBDlmspCNRQoqBKPeSsNzxZmy5EBO1R3uxMBHesxUbuD1YSsUpCT27fbMMICSbPAg7XCXjmtymzDei9nFBjqkAeUOhToHbjt0dAdtFGVHDudD5WQkUrFnulTNnE4iyMvnvmvFv7TpXy1e8t9USR2Id2bdfCt9i5yHjuP4FFcqn9cibqf5EngaaGGDYa0XuW04m6ToLJai1MX5MZ5P8Nhf%2BqmYctyFnyZpsGbxK7eLpMX%2Ff0EEWLUvPfy3lg%2BmikZ8CWDUWVEDL6L1rv66vniKc2%2F5yo%2F9jpGhkQjCgWkzzzQh9BlT&X-Amz-Signature=60ab0b46ef4dcade0023932f24d51371a8d31918f360ad745ae1092d64a57ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=fdd5fbc4c70c52ee9456b1d1287dfa5f665212c542bf953629b74766ce6d9d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
