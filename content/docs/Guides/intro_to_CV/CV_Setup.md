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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJ5YSWV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIHNROQ7C30qCDrYCWiBIX9KuEl8cw%2BHXCVtwrrOqkGgSAiBlz%2FO%2FV0Z6pBIHXTw5k1sFqA%2BVx8vNiE7ji1x7azSjlir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM2pVSCo4ItxA%2B07tCKtwDnIh2aNtmfbettC5q13ZwPCoesdGhjLKerhgbwmDgkYSfMP7zHpBYcquWcpLIie3hGAfes6%2F99IjM%2Blcq6%2FQdZKcuH6UjkgsyVFrkAIeMDA0fPzw666A2HfzUm9dSbKCr7XG124ADaw1u9MYNNIV5cHVJI5La5EYb9j7NCgnDSzItw5M6F1296kLRyqyANheOFzLoqeN%2BcQqWVfoHZmGhKc2hgPcZRLwt%2B371clXrXW%2BX3rg4UTxmhYQmAuBBBppiDq%2FUw9tlQR%2BSTZMXcl7cN61y245eJFlt6xB%2FToIoSZX5DYhwRtLInU7JD9VypGcpYw4rpa%2BeRTeLX1SBpmQjKEyoTCKfuBL7pN27AGOJ7pHSbtw4%2BWhnlZU0N6dapKby%2FWlcqi%2FHXwojK4tUEHSqapQNE2htxpccQ1%2F51lRzMsEmfXaX%2Bp3EkYR2BsokCQMDEMY5ys1x5Dr50y5%2BZDNTtN8JU8VkCpagLX6gTDqhu2iFqrjTe6juxrrD%2B1pUf28hQ46gl4146hZsXTGirnacce67ior%2B%2FKfljZ6LbwSpREruZzROTPq%2FGgKhDh8nbLRZ3XDWqN%2BXh%2FnNs4PmXqkCC56s0fBYZXT4qP%2BOqeMNIsVR0nNJiX%2FbzNER1x4wy5DvwgY6pgHKXsIM1eDre%2FTPyU6nPZ2FlxDaRdkcKFSfz7FDgDtYAA4iytBbBfQgbNt%2BDvDBWHERqYs0TBFz7DsjrLj2%2BjtPMzsJsJ%2FO4wpQtQ24%2BD4O2XKhQ8V8vrDw8flY14lY8vmIZH034VuW1UESaehvCeYeFqAF21SL4UMdceE8jrQ%2FZIiXF3egGDR6h0V1QhGK3bAj7DYHDxbnJgPRz1YhkSnaHfQ3hxES&X-Amz-Signature=d3f2e62ec509b1d170e8bf5f468ff1a9fe0182c133268aeb72ccd0b9d8cdfc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7SYVRD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIC4YR5MzmcWU7z%2Bcwgg5XSQppiuH1j3TiqB5wsI3zlLZAiEAwRjv9Z6kC%2FalPQ0rmSqhqYxVT1hYuIb12NUk%2FgBjBKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKneSaV1V7UeT34WiyrcA%2BbGYJ%2FOeNXmofZvzLp5udA%2BwyfUr0yHkiXutR8eLApjOVM64ekj8nBdbdMX6n6Mae4dQWSUbkm%2BS7LBokAsNf3PASx6Kz80lrK4dkIedsSxmmG9geeT23%2BW6CNPRvPc44GBaggRfALvZlXVJYuBAZceAO4VEVhcZYvcoV6%2F6lFfMV30T1xPxUgi1coRGAGH85crclaVB5QQMPuwftUWGdLHuatc%2F2Lsgnxjzxbsnk6Mx7%2FKIUQAsRDTeqH2bWmgb3jVz2bh%2By89CLeal2IPSICBCKMdPXdkFFFUumzXRAylkC7rnj6KUbG9B7VQQMvrwsPQ%2FpnBPGITvFT%2FRdWKyqOrkECDoxwFPolW5xvglHDhZYnvDcjDSs2VqYdRV5KV9O04oaSaZwlKm5oSZHyJ5VmEExIpl9dSmfqjVjjeu5rLRXfLmfMjBzopOFPKy2pT6JE4ptkfmTD6StZI3xaP0yzGKYEf8NcaHwjZqoNu5O40OAkPIZWz48wZGAmU8JBt7u9h769WgdS1mjs7PLnarndr7GcmsyaMOgpaHlVEX28kbIN2uro2qksnlDXBdf33BarSnf2xbMDh4b9Ex%2FfbAOSFDEvJg%2FX89taEGT1aXbS6AmNOCjEOLlk5%2B5sCML6P78IGOqUBXjM96SnRlxLplaICznRceMRjcpTMi58JhO%2Ft%2FAtEnpkKxyKTsXH9SR%2FGQwr9SCCXXY%2FFGvW%2BbjXkJG3JOpx54mSkZ7X%2F40F0zHnj6xaniW3kYK9nqq7StpUpF%2BNaYO2wiYATRdj2Fb7h9Th2QMuMRtOBDztDm7W0YOx4D7%2B2lQMfzmlLLBPz8J%2BcquJUY0GlY%2B3oy3t4Hul5NVr8JZKAzKpITMbr&X-Amz-Signature=bd3cd1a692677ffe2ebfe59e8d3f774f48dabb4a9aec04d0a21788384226a3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
