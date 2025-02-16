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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWBYZAX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHf7X5wxazd5Z7uy%2Fh75Nx1cxQPOkJvOo8OP5lNySYleAiEAsSeP1LxJ5O0aFEjOvrCfpe7l06y2XJ5A0OmFKnQmnv8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJWW6G2JztlCU8kYrSrcA7c0y6AXbms5OeGl3WUEI06K9DziJZwsYOOIbyybhXGTaNQSf6AlPPAhFpFE1ocCUEoWyM2LawaLKh1PeqN%2BmsaMM063%2FxNH%2BYSv8VaJndyeS7gUEUSijtAqq3KEkZGiW9SwY4YT0c5uy68VP6KjL9RtKkjSpw6ZjYgKYzms6JRebmMi%2BbBKXp8DkLSO7A%2BG8xPCbMxdBMsaULUepK43REl6h1eFLI18QUsX1urnw55iWSDjtZX8UbvTXifDPBvup8z8JiQtBvS6nJWKaTmopdupnYEDFQn0wg0FOC3CBTmMPS9skmSo%2FXlhvAtjsGDqIcoOqszsjvHdFz3BC5n0IBm9%2BU8hKaMCLzq616WtxCha3KKairoASIFWcMnfBGU2iAautol5XGQZ1%2BR5gRcI7erwI%2FAPU4KogpR5dnzwJB%2BkfGuhbv7mzFTX7hElfDtUJMi0b3KR%2BbEWTcEIbjllZPrWa8rgVSGAgaUhe7yNtQ45yZbvLWb3bUpP26Go9xvqGRveHMQco7czUFFGziWwRvyLOXiBvWhTtfs7kXWPWjFFxYHcV25sS8Jvmr6RKvK5FZPpAsxNyP8DITFe2NoSbgPzzsTbT%2BGX12w1BZ0XV3qh29XsNXigBl3GEFw7MI3Exb0GOqUBVLHlNbK7a8x1KA2Net1SMTTfkXZQdkW3PjHdRPYGlqW1OnItgzBL%2FmpDHQtdxwfjq5Hj1D%2BjWmSjqKizXAR78PzUDYkhuc81loo4pHxeJx6l0tds3Er30YdFPitkX7pPnJICLsblTuD128oiseo2fDx0%2FKYVTZJtrsq6Y3tGGxKEsWsgQNp65FkqxVsF4ohCMaB8Pcxsk7wr%2FcEdamuoz1uRS4rP&X-Amz-Signature=b0791a8743bb249a3cf5cb18843fd2b042238ae2801d6dc4761bb809e4ee6f5a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQIU7IZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCXkokNnBLjEIhG4JPob6AGgIaDkhoYguhvPM5lesbckQIgYgVXhYd1v6l7yyGes%2BoSZ2Dqb5%2BWzZMwJ3p9rIHYtJEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMg9v%2B32ZYDogaJeMircAzBVhnwd2lVKhZS64QiNWnGm6RHIShuUEtAvsPwizgEOUYQm7MPxK9iqalwyQ6QerE8%2F%2FGoPyKSDKCL1GYGH%2FF5eeblEP2jOF6H4%2BlDxrmTTcxaNNOJYB1JCx%2FSaec%2BLPbS%2BGOXnjmFLb04SrfXGBWV%2FJlu2om134JGeCzLmeAmtdeqiBIfkMkHfBaApLKOXOwDS02%2FmvuzmYcXNDupUXUzdyW%2BB%2F%2Bj7VS%2Fx2JpVUuQLyDwozP2%2Bd5d9MCeZHKf7QTG9%2BJ4A8CADXvQ%2BplIEU1780UN0pd3ergjPDYbvlPimssPyTSBorgiqNa7lIbn2fmHB9U8iJrv%2BDVfFY3afSF0405mzylSbyj81daezanWRuaJm0O%2BiTVhqHRZEUQqSORFSKk42baoduk4Qxs9D5Dd2Y9UytIUg97BjwhR48IXcHJSOCNEXRZOPhwvekFwoXgnt%2BXhAMw6J%2FBTTJ2kHWu9kQoJ8F0VGqYOS2MgwnRdaA8aZbjY8Au0iZqwH5JB9H1G1%2BiZFOorWyu745AvsoZI4N5RMBkegFzWxb19hKFIbGGGRzRoLTdDhVMR0xAHLPVtDf1fCBGKTotyzb8g9etKiEKgeZPkf6fWihs37qvHH1XwtgUbBzDfdiujxMLTDxb0GOqUBzWBhgiDG65%2Bp6b7dQFG2FUlHSmOmnIBQC%2B2aqDoHgBkEiHOHVwL0y6bFJ%2BqYp%2B12rprNhM6%2FfzXd6%2F1PwQGCCNhAtmK%2FZNXXNxjqITTA3w46gMzzqEuEEcsPMKdsm4FBnRu1LtATS2oisSzVraESPfUczT0DYdc0%2BxzkyCE%2BenI7tknzRnoAO%2BFqjhzbF8BpiyEHRcLAY2f5oiQjStTOYMhxd2Mb&X-Amz-Signature=da7151086c148701760b19c9cf1329f244ccf555fbbce72c7cf1a9d0c6c29134&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
