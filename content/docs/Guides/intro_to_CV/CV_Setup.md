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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKCORZS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDh4HrCERoXBOeeX70L3VXhn0CglySlMVeG6fgp%2FsRJUwIhAMI57SXz%2FsgksWZetACg2Mfcdb3Wd0YgQYvu75H1iLsHKv8DCC4QABoMNjM3NDIzMTgzODA1IgzrE60g20jjQWci3kQq3ANkfptlpZ3BoTO6wMWbPnjmDceZR64T%2Ff85u6vjG4PfWN8O%2B3CU5EQtwzlNSKaRczzN6PNWUi2owj1R6%2Fj%2FaFFOHWnTqYRpPqQM4msv0HFuE6dAZ6BJ1DYxcTVfCYUURjnBO7yXYm54uvhA2gjuH%2BJo%2BnA%2BYLs5Pt5WVwPM7QQeFXpcCdTWK91RLk2fx6W4BBacmr81m4UhYZGegGYBPOI1a4TDI2St5hlABMdza93kjSjRJFJtaGoPcO5GQDp73o6ZSn33CFGeVDmbx4xsE2xbOpgLAMnsLoa2OaU8QV87pNp%2FnTbiw1m7%2FcHAKCWbcikB0mDbwmRzAZZg0w0SSGp2op%2FIYPpd5Y6z7nsVPkHzauZcytEd35TzFghuJNE8TfFNvq8YFMkcCQEVtDxOApt3VuUi5BmDl%2FmGFZAO%2BQpxSPizrvYB60sB4eunv6UpkvDTuKwfGErPiZGMvVPZvultYetdZUC1mSchCz%2FR0HRSStp24pYzpA4%2B3Gvl554n%2FvANK9dK4DgaGkDTxypSgT66oMQKeMceNjqVOnanvlYaWlSut%2FXnAT4vbxY9QvZ%2F5ukWffDppTjQhoFzOaPwUtgb1Z3gaYI0xRF7UQBHFwNAIBD7FOTS4ePUB4hgXjCFn4i9BjqkAbAuhSS1EWMwDBu1LK01Wer9WK75wDJSwYFK9nfXxFooRNVIUrLN0B3DgeI4O5ZyjD0sy1641rivZftIevffpKsK8wR2sk8vBA9h6UfgiIItD7D1FH%2FgCtfkDuiCjGZRmNcUKbRm5h0%2Fxv7AweavXUWBV05M5l6ib9v6k0CCPxa3Iey6Fn6Y5bOiLJkgkEjOdEnRm65jp3NCoo2bealRpI03htl9&X-Amz-Signature=483cac5400d8ffebf80edcde5df2af8381628a053f01877d4179e642fac0e108&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCSJ2QCA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCcKEie%2FpZm3vAlQxv3rQIGL%2BeGOzzNcsY%2BT%2BW78Zg1eAIhAPQjDUSVedqOggdIgAY0IAnBytNO08FBGbK%2F1Q%2FrYAubKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6KRy%2BA6%2Bg%2Fs8Sk%2BEq3AM3TJc1WuKS2udGJQgwzamMb1dJVlyfvs%2FF3ppwlvABoNLbo3UzJ0AHibu3QKgoT%2FEvETDUNR7tXkGLCYLqRi%2FK6P3TGgx26O%2B3%2F7f79Vk6ATNwrhRP8xXHJiTd8u6Osq5zOhnoBMLUhRfFnDG7SgAsfZMO21UuAKF2Z%2Bo%2Bdsrt2RMf18tQcq7kuL3LlGHRi71Mko%2Byu0KzKD5pzzWOIZHtga2lsR6lLypNygzTusC%2FQJcnLSR3PZp7R1zAPtCOJylix5uherscSVaymqnuFsGFUPc6knGX4Ua3WGRj4Y4fh1nWkN%2BVY0cu5OkliBvsHYcs4vfImt9S5zE92azyjU%2FYh46f%2B4HkbX%2BNbWPASAy5WCmcgLQz9x9LHG0mtwq7Qml0xmr%2BZub1a2GuMo173AXlIKyayPUy5VLPpEt2TYQMiwLpgjaj2k3PEfRiUu4Do%2B5ErVV%2FcfsfY3IgpBkpUDsB1pI3vHPHgz0NKwg0DOjoGdJNt2ui7Y%2FonKAKtP2ZNX2hFcTRnYiwyeuBrmbHVaMN0tXSTMPDQKHTbQZ40ohux53rBH0S8wf3rVbhYIK8uqlrjzYPc2eK%2FdT28qpU7h29ZTkVtOZXvjCbuJCeSolsYDjEBWKt8Z066RJcLDCMn4i9BjqkAZENu0vHdQNS4am8DbohIFCGTX2uhmzA4Ten0UnwWs7OZZv2Y2AF107jcowfNE4KNdi%2FoY%2BLAjVMC8AZ03bFIS%2F4lNpw7ykrD8NSuGcVQM4HpXyHCHDB3yn5UVKdjsG2%2FH%2FLivFxYYfIR7foQ9txxGt9piBVhxh4FNXrOtDtP4dEvtHhvj70koJ%2BRPE3dM3gxkDOXTo7hBwL%2BMhowp%2FWu5C0Oxuw&X-Amz-Signature=328f617f94d8ded315b447cda1f3ff2f3598151c1f886b2e3fdcc2cc823f7436&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
