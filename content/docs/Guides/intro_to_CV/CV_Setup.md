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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSKBVZM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIG%2BLSkWp%2BSR29X8ENCWMy7POCV3aICODZu4f3IL9JdZnAiEAzt0%2FRx0kNwBFSWELX5fE1X4Xo9wmnMrF9krPa4o7JScqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUYX%2BI%2FHb9nKyJ2%2BSrcA9FRyZ3QcqRY%2B9d1Qng8A7cL3O%2BdcYy1z3R7qlDsv3HZF36UX8ntGSH0eyOTksfn0Q3loweZVRoKyipgl2OnPlvBFEjI983k6RSF3WtPmskziblNAJo5TWrZS3KnFC3Q8BAxjaj7GkhgEkbtmhS2GVo11rGCIo79VhOP6KJO6Cd1D39vM8OZPTl78fJ6Mp0gTrenchrdoMuE4dwR1ugmhb1y8sBLWBPWTfaYkVqzz2sf6FGr%2FAQn3Nxp%2B%2FtSEIpiePVVLqLMUqGYs1pdjYsVFpvSc52lgx8tIH5s1KNgT8m616lpUM3xaRGkVMHnginnJ%2BVAAHW18Tb0OIMtSvCFl9J%2Fv4Vi78eNc1j795viL%2BIz3Em6xrgAHr5phIc0A7CnACxuF%2FIJDjiE71qwxUn1BQ4uZWTePgLp7SZjIw0tdU2mDd8gBW4m3ikxahV7rOk5F7TRE2cneLep2lhJdE2ertKVtrYVbv0S6URnjeJSvWZUfXehDlLRGRUiSTXeTUCzbN2zEfGepDNvEdCI9mCSipyN%2BW8mU%2Bwr0ObHh%2B8Q2yra0gd1MM4%2BOWiqFgrIAAGMypbjvfYpX5fvs9kdgVeO5dAQmEguN4BosmS5ubdZQgyFgg71sG3EfItI6JIOMM3Qvr4GOqUBwCes8biM%2BPx39aZhVMFqMwT3KaUxvEVxYFZU28MjZtTvNynBaJQaZt6ZzzfOaaftJjpsF9lsUnlxz26ye0kPdyIcRvy3NnCCdcJDaZgMpz9fPgpY9hSdssTXijMAF1f9ocqeXCfIKK96YIi1dE8spLVAu7p8u0oKqC5NS1L%2BwRRsLMQHPq3lNteedpLL9%2FCCvP4YhtgX1fMpFHW%2Faa1j0snjeUkU&X-Amz-Signature=2d30e95e57ba3b1ed0f2572769b19c4cc3bdbc3f4b053e37aa7659c659fff49e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5QPDFS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB35xWbPZGp2Vj3bY%2BmBw%2F%2FzbSlwckRtng5leLxnb%2F76AiBQEVAHti2T5cEKW5tsjrVnh3CmQ%2FD10GylQTVn0CzqGSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Vs64NdrvwkPpFPkKtwDOJKLwqw1Kk33jloCNnDz%2Fx9SKaQU3EW%2BOI8pY%2Ba9JXSzOuvAujhZb7iaqY5JxehwZISF7%2Bo1489VyF5AS%2FbLHgNOxsv%2BLk9KNnt9jDFU3someIk7GmeHSRxZfI62bBVMt8ctnYiGysYubDa4iIcUSAeK6ukPUw3AcYMMpfxPd2hGFXIgcSiKfcc5ENOYNDlUZubyiKUg2GXuJ85gvmTmXF%2BJ%2B3%2Fhzq9q5wr42AJGL2Y08mlUqp6mN3tqXqim0AFzWgDTabSM%2BPfXElIT4Tc%2B01qSULDxAEMoRKzzahkR2Qy4%2FjODqiMV9a8sUhbhwhzVAP1P%2BYk%2FQD%2FoTE7e%2FCogWyKTtPC8QsVuZVmrJUcsp56ZBV17vmus%2BV30PR%2FNbCELlFQWTJCecZ3VJE2e2Lib5RS9NcneJU2IqgbVtdQlWv9GhQ%2BvS45AVOdi7BmlkzoSgsXyAUhqrW4cHsIMZ7E18wbVvEpjACcm%2Fw5qQXF1hQQlzzQtzq8iTjFZDPmAENYax3Hfv6gO4QQIG1m6TcDneemH7BuF1vdTtAK5oDHTHqn8cP%2FSVPpxehdFY%2F13tqB8LLGNJqj2J6Ih%2FPTMs8eC3vMvivIlAATpSUWz16NllY5g3n207qca%2FK0FakIw78%2B%2BvgY6pgEAbEsRtdJSzqOtppmpa%2F5NyvnOP2fcNukI7l8%2BiokynqcJnXEhoIiPpx7zLDBrNjdatUQWoaIP9Lzaj%2B71ws8lYRUkulgUW9MrwW5YiuJS7iX5ptAI5ZAtETvK6TIyBwR1oXw1vVGprk7H37QGcHJJ9VePjoeI0n7OVYRzviwv1yG4ycH43Va6o%2BvOGaULwrpRjaIuGgGcVWmIJc09c4SvWS44ymND&X-Amz-Signature=fafa557b98c28a90f04a729144b15072cb160aea3f9c2a185b13b8f009e380e8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
