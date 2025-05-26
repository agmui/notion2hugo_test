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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZF7CDY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFuSNCDSjP%2BO4Tl1wVOL5AVb0hXiWLUeONXid1WjBGeYAiAKsXoy%2FRwwApkZhuYpPG8dv3loO0hPegjnOE0f4PLhcir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMMTcec4Bc1pBFcQO6KtwD2%2Fx8X0T7CDyNUCoQ2G8Zrv9DP7R7cF%2BTM6x72dVkDzK1RRT4Q%2BxGe%2Fd8HyerG1Cj7rM1u2OMQCFA5ZpxzRZ8fW2T7YtsNuRELXZQz8PRPQ%2BtGTKlvontDzQ0TbeN1Ur8jYSr9wGqLrAwd6kUfopJ5f6AR3YBzsyZbQKnBLAsMhvzDHnXX%2FXdEzNckkpSfUfhkaTauqT%2F9AWBgYNDqXTpwaCeato8DLG9gc79QhWaGsI2g7mB6m0lzbXzrFwhRr87taH4Bmqtwy6aILL645R6Hb%2F7pnm9mrObeZTVZLDCbuoc%2BBozs0M0kjVQ7V3V6o5hc%2FjsAZ4FKHQVzil0CAiOhSut9s6AbpxyX5VaSX1xPly%2BSP7TfNdoCS7j2rcau4V5gzcTFSa5yHWZit22z5OuacjkbpjR9hE6YUkMfSG9m1i%2BkSjGbtY3BzU6QXrLxBad28lpVEl4cE6nwGw3s0KsQwM%2Ft4Y1HK5w6QnoOJG%2BgxzaR3TOYqQ%2FoBo%2F1oYUzu3VaJw5ARAZMB5YFEuiNkKtIiYD%2B1vUowMuTPtI020tSQ2kDkXw1Fh5tfA7ZeT372uPOBrbGmrHK5%2Ft8zv9PgzdBpSB8JeUrQZ%2F9k8v88faKWhXY94V3UuwfqTYpesw%2F%2BbRwQY6pgHtcyYQbfvNTrJfEtcelitjBxuPN7%2FNvZj0tmM9f1eMm13EyC2RnQHOinRK%2Foa8KTcO4NbMPtjbi9S1fLx3Ln9y0NNIjbLczRTV47MdVPknoEzDZMQSL3sEL7%2F2IK9YbhlgVCk%2FTEUJL0Wl9hscWlvXDJGTEiTGOtuBGv1wco6pruDu%2FPw8LDCfn0HHsUJCm6JyYk%2BA3rLy1HsNa29hlvayAz82w%2FEe&X-Amz-Signature=d60ab6404c4844ca364609d428dcdbf46ac573cd7f073930f5ae8185119b51cf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVHG7HD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNRGkQXTgRBbTOkGx8PHibXUz1NlH1%2FZDLAwAIsi%2ByHAIhAO3Q8fuXiKA7QfnzGWZxfSDG9RQWytOSdgeQ2i34oBW%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgwATgv%2F1qpKWEDmJDUq3ANnsoipPms%2Ba24RnZ8f%2By4dN4cUEzUVXuKMvLZ2P3dZsXxwHWKri2hyfpEY1KIcuuILsCVW1e5bJJQFZxOLXruXRVLROOf3fOpKaJvmFucTrySjs9R%2FwNDB2%2BH%2B05hOE7GiOyIOq%2BOlV0kCuQ1MCv9AvcgYW8od0JvWc6J9%2FTuEvSH8nVlLde2AVCyl%2FK51egRKOM%2BjJXDcDTe27sfDy1210awgi1lM5MbfTXMJXKFrBZXxI6Kvm9BkDNNs%2B9yXG%2F4lzJ6jm3p%2Fg5YRqdDYaWbyBW31b1HrweNgYKbrijNepBHRG65WTfJwbD%2Fnvy%2F5YmgG7elDoxrmnlnPw7XmZ6GC40r9fzKYpY188ISsPZLFxNuBumpRAeMyn%2FLINr45hhXjbpQWaDVlasHseiDJQEjM1nC%2BT4W3Jgv1VNyGHgKGUWTjTSVlTk24F8%2FnOa4l2ERLjgQKigeVPP4kDYUsNLavpKH6XBh1HEKyP2IJgCFDRIBSLS7VOxyXw002XCcE%2FURVBbH86mJQkkjucmQSJ11BfznM89csA%2B5Sftaa65MyoJFeH2yBDmDiNgTKF4ENRCb4EhylyoEEaNgfEuSFtqVBfNfwUMBl8si3%2B3FvZ%2F2HKl%2FVftuxKP6foM4c1DD05dHBBjqkAcEXWWblqhXWvNSNC85VHDFT53Z3or3nitJRGayCaB6ZNgehQ2eYWSeJilWIHnU%2F94bgNCCwFVmMXAbqa9LFNT5qVk0m4FDMKEeF3oUFoMQQX00N6I4aZeb7waShv81wZwDcWWixUEpvnLAYGlDw9cgVVPPaeS6K1yATbR%2Bc%2BgsczLc1fVZJMSbmRlGJUGHY3u5wFvS4morGZI0ZtgP%2B8HkDQ4ds&X-Amz-Signature=d42cfd579215ef49ed29a9793a6bdc92df6fabc79a0f572b3227ca6775f6f2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
