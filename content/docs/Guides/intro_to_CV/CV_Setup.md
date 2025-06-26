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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJPHXQB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA8Yq8pV37N0VEAHBSe3EocmHbrL9cdB3Ad1qkuIrbUNAiEAmfZQrDMEJDXK6z%2BGddgi6%2FiQE63MBQFMEq8m5DitWm0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOS2Whn5DV0kRNfQgyrcAyh%2BXikR%2FsdprERDHHEHsU2YYkdhtq3oe6SkKI62l1gip2Cnh8Ivak10llSCw1weljaFwRzZW3InULurRbCWszub6tmjsasge7LIgbXTSDdHBtLYli9mPnRPBmINX18%2FM4j02UuMUdnaEXrICZtuHI7TWoM98FJdWO3RUmUovq2d8rPHifQDTfXt5Hl3QSB%2BiKw81GMoNS45aH8gk1F27NgYwMxiSPAH6ZGdP2vcTGD45aA27L%2Be9WORW%2BCZVR7uo3d12tuyC68Jiwl8IP7Uzhrm%2Fc%2Fxpaj6YTYie%2BQBpIqTwUm%2BpsP8mXG1HZqW2wZMHdxFQ7Q4gPg9CCSLGYbmwAoXIYs0R0WlpOqBph15y0flKmv2fl9JnoTfespetMwoQ7ln1yAdLxmSKFNB%2B02169ICuSfvU15TkYrdqNZuP%2F%2F%2FI0NNZsjK%2BcARjltigg%2FKnW9zSpkJTwkc6k3GqOiyTcza8%2BXGNz4tk%2BYctGLPHnJayJIs78NC6st1gdOqdWSmwyETK%2BVrYWH%2FxuCCwhhxMndQ5nVBIqfq7yzQiP3PvZy60vhbIfYxW85wwg62ohPuPsM5EAT9UKUtsbQs6sXaP5C5i7rNqW4zhz4pEtBQ51DhLiMoXB1kG5oFUptuMP%2BV9MIGOqUB9SvO1h7Tp%2FwcZnJHIsP8ywD2hTA0IHJqIyDCRdGSJ5I%2Bj3U76Vn%2F0b%2Fsi7Uv0AgzNF8rfxFEJH0pPtf01qDJy1OET1aqf0zDKl3RtysSRwFCrTq%2Fp8Ykf6gS5IbG0MMgqu2O6QLqWe2%2FTYtr9K8hucn%2Bh6Yz2hE8sSJl2AGrx60gz3IBIuBiZY7QXFX6N%2BNUdvIh5mZ3dUwXQggq3fNzTJ%2FTj1a9&X-Amz-Signature=5710ed529fc432db00e2ff88adad23df466e64ac56c642cb988a583e81dad133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTTYH22%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDCBP0rZtvi%2FcenxL9cczzoxe0IgvqEAyfqrDXDg3Y8OAiBVMK1AgzHEC1ZabbHbTJjzzhHnFcuAhEZtj7Aqs1iQpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMebOzAVjG5jzg2qxoKtwD3blSz98i0jgu64v6FnNBm7SDsVwTE%2BeYwPUVcHc%2BXmoU32fMOs9TUEJuyNI7Dd%2F7ZMb4sGoXA5TVyUXB5y%2BhA0lPmvvIkokONfnEksTeFjyNusMyUC2OJHbBSu%2F%2FeZtzCdZcR0PkmmG%2B%2BrBkQ8dUpd2lKp0NOyypwK8%2BSFTXAc%2B%2BXsCoXoO81T3C8%2BzB3mECGez075To3MXGucaRuYlnBJy7tnmhlFVisk9VgCor5UGgWQVwL70dYfRKIVnRHSrb40i790qw%2B3Alt%2BaiuPh6b7OdhblREEJzjlC60Qad8GsvIjDRL2ohPmzgTF%2BeHJ151j3nXnYcKmqi2RE72dOX2S5T9EhpiHTaanQ68c1FlOXGie8Jj0QZgNzrvw%2FXEPGXuOwmbC1J1N0h7mbuWQYNnx95S8lUxX9o6XzondW%2BG6XnO4H%2F5Eu1ytjuCXqdVCsQQP%2FPpWnxMuz1WV6p0205TUfKySRAdFdQ5h%2FTXqjbhRXo1Lhb%2BxTuFFC%2BaREkNjME1rw26wjwjzwclPQT7CedVNiqZwZKEnucFPx2fNiNgPVSwuPkS0KyUu6kfDfWr4ify4rruaN07ZJ7XsbtScDej%2FHAwqG8bEIvoOKQ3GVzMEf1%2B0PO6fFvt3lS0LwwjJb0wgY6pgGKHRbCGU2ru0bm7f3MTxF382AjZyRK0Gvj3yDtBfReE4F9gdfban%2FLTuYRRrA3RJQLdjISlrlk%2FOI%2FIQTOxlmM8wQlJyse2lzzmpgck%2FURl4ooF3Z7k3lf3pwzSr1Ovy4mRxcSgXpJQ63fOUUIkemcqfSNAO1kDRTN4DhGgSbdB08i0HOjDh%2Bu6BxfTFhwyH21%2F2Pps0Ktc0sDGCvnDub3u07IP3GR&X-Amz-Signature=36c8330f054e2de2a3003c480b847a69348711aa03d3994ea8b2e03006cbc865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
