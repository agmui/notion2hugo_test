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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUBA2L6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEIWUunebnxa6St93lRs%2BQ4pj1Tat68OihulVavecLnQAiB3u9rL39aKG68iuQF9TuvY88IKWjsSHl8w984wNk38gir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMMtjpDhUW8zDJFynIKtwD73W8fQWZ3Pw%2F%2BgYZ5Tu%2B70orV%2BeZ2nL8SCrhtCcJPs27ZoS5DabeNWELJ8Ai%2B4D3CcoJCFEgUl6qAJfZPOSmAyzqv33bsSDACvGrG1sfs0ulULVtsEaclfIbIljHGg%2FfKMbrFKkjbnLHvONQuSs1XJqcUii%2F4gmXc%2B9CQwh2AE8E4in37IrhNYsWBXxB4UnHR8BHT8kaaxi4d%2BPg0iR7JZuAJL9aF4EUUrOgBR9Hywmy42Uy5jBTmoD%2FccCHmcQim71M%2F6NgK0R6cW76e%2BTjbsTotOQwitQj2EUTVr6YU6UBupbDpjQx6z6PxeIpca7DaL3Pt30mMmCjDCEc3b5OJreiR%2FDK%2FV%2BBQzIm327oOnPvabHrv9ZEaddBRir%2BjmMhlXoR8B51LGFUnvU3dXkCNRapnl2fxiFg0mr2ZnrZEdFxKyWaLdHxhULWhD46Sf73ysXc8%2F6g%2FAnJGHCHDXzqa8M%2FmRKNUw0FQ%2BaXToEfpPIHIjI0msZPYm%2Ftm4gpV%2BOmqUrAP3J%2FulJILTufOOpcyrDh3fnhRGGFV4frF91QqFiD4agvpmKB3qS2VJ38c05L8w1%2BoV3La7nlOgfYUTIVrt33K4nn5VYAmSX%2F4kthcM4snlN9nZEzSR04KaYwmoPhwAY6pgFntwqYRsbA%2Bz0A%2B5l6aajmHdntK4YPzYGLCtfAschbvf9K9MQmzWG3bYkZxRidwa1Y5P57JULaoiz50cQq1As%2BKUQSDTCHlzzNkneqclEijkqwoXFdNbf67Gx3RMcVEdxfUHK0JoDLdybkN2BiZZWpiDtyZjnwyl9uN6EhY1WB0XnCWTDxrI8D6g530Uo3dSgfTJ8r%2BEwZrbL8ZIfpYoamJtwv%2FjJc&X-Amz-Signature=c50b4a0a89044b446c5c1c59321f6fa7371db426119218823ab5843eaa3b13f5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD2NLMPA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCWFuguIH%2BvujQ%2FjwLwKWWDVNPPS1i%2BsMtpSJXwDZKlMAIhAP30vhoM4Q3wdtWbHa%2BMRCRkpDwZ6K5W0yhkhMvdJXtVKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDQmYa3uqqfRS0j%2Fgq3AMrBoaQRJvBIV791LI7sdRaqo%2FeIr8YsHuvRV1cESO8mkvCF92sOb3qRK3CMz4MozBuAj0hy3ftt2DCLnOSj6l2aaAU%2Fmvm4FT9dmLYASQ16iaA5tcK5ntXW0eIoXWSS8L%2Bc2S%2B%2FBxOH%2B5%2Bbx7kbxbviNrOS43XIc%2Fr2ENYMKwfZNXcJYboWokYFJjXQtQWcMRtgMQ7N%2F8N%2FVbYMVNOhEVhILaTP61yb9OfwKyPOuY%2FJ3a5%2B4Fjnx25txZ1pjGPC0SdZ%2FQcA2FPtMM9LI1kNuKH0mgPvbwuwiZfNEK1CJhL080h%2BM5FN3klgkXoPO9%2FlKeo0bHgAkeP%2FKbscwuDUHt%2BMhZebS0xCaNF9DMbPA0LM%2Fenvh86EAVaoPVQ5sCQW3Cvw5b3wUWxq0GFZIxfWZ%2ByVhoDh05%2BBFm2YLuMJ7qgK9oSFGMbpDDmGyaYErjZHD7I5cI%2F5WEIPdGKzvSZY9n9zCTaDxqWWK6bo%2FrKbhcRi17tbbz12M%2F2we5WX3yiwYifbTr%2FIQsPqHXl40A6j%2FBONmUzba2HNIQwfAOUGISC7TuPM7pdngSNQVzqOKvM4uaXRV0oA2G0ZBLRa5vt5Wmx%2BhlTQi3XhzFsT02PDy8AbYEpRWJeAENsytwNETD9guHABjqkARJyh5UqVoE0mGDyb2ezk2XNFv31%2F8NP%2FNxtFf2TMmw%2FcDw7b2KD3cu0bdOrJAqtr0zlnHTM4lqb0hE32SSk5jwNBLfqrsj9FMU%2Bbr2Q5TGC0GpGIhcwJS%2B2qa3K2xOgqP1Ji6LkF162XCRIGdtU8NkDbf4Fy%2B1z82DfsCdA63EV8YDp87hleP199kDRen1PMVMrbPtR2RzOfXCZg0CHX%2F87FpqN&X-Amz-Signature=2cc3d0ab89477a7abcbad81b851d499d5097c740623f9446240301a1720eb135&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
