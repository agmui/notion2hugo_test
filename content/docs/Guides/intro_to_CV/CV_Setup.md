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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCX6J3EQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIH%2FsRhYFqBp4z35z066SzfeZZXcTvdkzSkEX8so4ZOOFAiEAwXvEOHfU7uiLk655Uo6Mu9jDpzo9sPpYD6eaG0GMicEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIj3zmTrQeODKrxgCrcA%2B8A0drRTthzpg1Ryyksj5zWBwspfUuJfWu5Gx31cvcW54IZuQCVPXtMqYKvAaYv5Xb4YW3UrdM1bWIFjAt%2Bsiaf6bu07xeqRi4vpXV6WIA3H0IiPoPi%2FUP6T%2BYHCba%2FShD%2B%2FoikeLdOeUj5VrAYzN4YvEm0ssUMrbF1ylPY96shLbo1tXqqyKX7QaDxBpVLJAhV2uFthfLtZhw2i4VsW2vPC8%2B5x4c1VPbeEE%2Fr46vq14kaTWKTSs78FRoRQxb6raXQ%2F1oHfp%2FbhHfZL4N6cL01mnikECFJqLZZUDofRpLfVf81h2uQDIy4x6UA98FGNXPrtxw9S9umdq99w4yHmxibjGGC9ddy6OM%2Bds0TeFqccINbbxnz4CAnwKq%2Bq7IZxCUMI1Ak2rJ2KOCLerYClzQAC57%2BFV5%2BuCbOM6pCLm1zrRtxom8JLGAIt8XPaj%2B3gbC2QYpr2SiB4UxsYk6DC9ni2tcY60VC4o%2BY8scG3eZ3fAs5V8mIEbX8fzfUIXna3VQEMDg1%2F3GalsHRrYOo7MbVbqIt8nruRS7xQrZOWzRHHxcPa85R%2FWwe%2FZLvCEjNBv0CG5TxBaRxxgH6nxaR44l4bcgWzCqbpiIGJeNHHetVkeiL2UIvJ8A3cp%2FgMMGpjsEGOqUBrT6%2Fq%2B7Z%2BjYzgxSt%2F%2FDqU%2FwVZgC9isIcZzXk7hIFS0usVdCiXYflcBZaw5TEZ2mbuCSaaXU929CyqlBgW2tCdhCbowGnu4v85r5skWb%2FbqspGc06ZF5pxdR26gkkzwoiiqHl5Yuh8ozt7Bea8S5zbyVNnc75JcYYD31GZnC%2FBMXYHuKt4F%2BgKGmjxva%2BV5d63F0v23WBZbYu5YgYGjS94i3D%2Fxni&X-Amz-Signature=63d719f5b8399d3d278bc76965c6eaa90b094dcc11f0b4ead0062c43047eca74&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV5W24X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDRRj6xX6rKXQaJkWvdkxkvnJhkfrSarV%2FEyH4nLLcBowIga3J%2Fc05iQcw5QIFW11X%2FeO7xH2ehg%2B4%2FyasLzmiMBsIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMf79WQk%2Bp3oxg8wCrcA2OmuI1uShCK97Zty7dDBZIqCQ0b2rquHupO9Orr1kW12Cvj1iHs%2FNuMzwSIWoGI2N%2F3zOxu5Gtq%2F2jLH2%2FShh5o%2Bv3rehksVlb5TQyEd2QHItCai5cKHfdMldMOiYAOMA%2BVoisOfVpGfGmxgbhGfWECkcezvR3kxQZCmfOPlRw8wIx4iB55hyc%2BP0AMxdJ74NmEd3iKerV4QR1%2FxQnmAoZhCVFQEdh%2BykBGHGPKU8sDvZk9uwz8cXEtLjk1bg3AJui1Zs%2BN%2Bt%2FXclnBDYPhhvkLdXezupc6SGb3c2l622GwKKIAFXsDqBThCb73Zp4VxusNfoBGjmSz0tgSldQu1MkvcRr5%2F46C46EZ2MDLHVRzsKbwOpt51K3QMj3New7g%2BtDQKozIbKHwiSOhjlQkCPmGLsoIUG5Ldupp%2F0FbLEgTg4VfMXrQHjscaIqNTJSnsGQGHfBj18ndTsbymNTXLW9Vv3uFRT4CvC%2Fc6p%2BGDSgTLKWOG6r96iKFdQXtGiOmZKL2%2BX2FzPSzzszWeYgcsFmMCSwJ8ZxR4L0Y5ZR%2BLj%2BOOIt1S%2Byo16Gi7QyDOkwRd8TyPQUbAEegBFmahtvAMsE2ucYECPqdZ0m%2F6RjR17MtHLuTomPGhT90JnVXMLeqjsEGOqUB4jZs3DU1XGzZ3E08AIGKG6ztvtNdEeLGcc3knjxUsItyHdiL2kozx4Jg4t50ibXlvcNHy5iHghcX7IDSjPRFXAyg4TtrZ0mNMA0vuheQm8UeGVWaNukdDltj0lJ2FJTqRTKFhFrsrDu8fxK2xPnLe5QFcBkzbfEjgEIDY9odv71vbZmj2wnWYFhkbfrB2uB%2B9PBb5Ff9JU0sKljDdT%2BrXWvEm0F1&X-Amz-Signature=63a8a062e14f29d2621b3aee078f257a61179da4de5da0556696936a45706abf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
