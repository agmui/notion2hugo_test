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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5E4QFYS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEAHvZSdkZVq4oiT%2FlGu9vFuf853tbnztlYVPdm%2FcebwAiA3%2BzB%2BcoiMCUSSjmCAo88ln%2FAV7JGwj%2BHa7JN%2BZBT%2B0Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrlT9uhAv6u0JeBCYKtwDTs%2Bl7TMKI1E5qButMUUSofA2z3%2FsSTNc93aNYMfrbKQPiEJVKen6jyFKjmpo%2BF9djxP3XcoizMpKJDt4JaREWW6xDIs%2BzR%2BAuJk4%2FuvAYf8d14nzN7qI9dugTF6UxW9hLvSsxL85eVbkvJ9tdr7w5xmkbKybimZusnsrdf5GVUI3wKf2%2BQSeWKUnDpX2atdEMw55oUpqC63V9eO%2FM5GnqWE%2BbdecCbaDevxz%2BunuiPnNuwU%2BfgZUCWLX5GA8619FxXEI%2BQZyWhHgceyNN5Zc7kgobuL4YYMZWbGkeMzUeBv4Fx%2BAe2ciWXrQKaslOI5UIo%2FXzfUJakTDRq%2BpFbV%2FVy6uvPg9rr7dbcIsrChAaLDQOpEeDMK5ddSiBub5eMd%2FnSHc8ghkqfVtIM4bFub6S59Q0qSMY547T80CiR7%2FZrj%2BlMOQQyj1bREgogEBkAqAVB2SywfXDaGZyJleGWheGS3Tz%2F%2BGqKxDVmNS7wcSjMxhI%2FvsHIq2YWlOS9JhVauT2m57QAa3yNg0cjSgQ5Mr3lXAQ3e0BftD0fh%2Ft7eFSbzXjbVirNnUX2s4D7OVqkAxjoJq9nUEOMXMXfA1eT0yf2PU7%2BbkDkbgvMEZKTiGxs9OOBG5dWcvQHQ66Osw44XUwwY6pgFLhyhJ9sVFo2yx3xz3kNGRmp1mxnaG5DghNPar850s1sLHKdOir947JOPuBCzdtMu82JsGHUVA44YKibfgox0iJYGs5LFhdJzLUDOdfATdE4IfJNGqffvdw0tz4VDxlBnD4eBIhw9LkpLeIRRgVc6%2FDlHCElqwSnFbkTHqcH%2FGKaYR4UMrb8z0PKMGnLsDXLZCT%2BWT%2FErIkBMd6X5sqXBbjdqHvb%2Fm&X-Amz-Signature=67877546066c7bbf0f7702d34c86e18a20693a59bc21bb32e28d1620d255b786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EGP6RF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGRxcdN8kz8Px02RYxkyXzNQk0R5%2FxCXLO6VhlipnnQsAiBTC%2Fw%2F61c2BaEREHHgADAOZzbgTjsEqh074t8YNF1skCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM51AJDEMN1lKAwdGiKtwDdzs2LBLw639HoR0KfFVpb13Ii3mTKPW22wZAanGy4rXUR03ZqyFCJBYkY8yFXXh3WjMbqx40oCxSou4nLweCRFsndOZ8M4wCEGpCwvdsTBPmdeOsxc9zqtFX12udBWjKud6fjgF3JxN%2Fzdhn%2FigtxYNCsB86O9%2FZbg2%2F10i1cE943GfLjzyo0NsB47%2BrzgSAABvtaldHlth0KGSlkIS%2FLkb0X2yWKlIgyG6vCpoMPRyO3rkx5kuTLI5Zt9%2BS6X6TZMqU4jKImbdxdF2pTJfeW1eEKpYT8jIvt42eABBQ0vT213hIhYHejb3zQRPrGxZxraUMlZpdiacIrRcNsPwc9qLOB3%2BJ08SaG7Bv0FB6b5UowiCnQS2Ok%2Bh0w5bbLVpvMTp%2F2%2BnlETU2JQYvNsbyKQi%2Fsg9Uuli%2BbLVUE%2FJz94uT9fI2r%2Bwn2POezGP7P%2F35Artqcsmu08siIonvF%2B1jvSCmItKl7x0Gp7o467KpNFDshIFUm6L5Kj6%2FwUKAGUW9Vfv2eMhuZChIVpApHzkJI9zXy%2BToPlsxJdoBxJM%2B7ChQPZcMg0GSj%2BuX8fA%2FQ7I1ShbEg6jFflJbV9lCSvgfk0qvhNaqqXViZHuz80VAS%2FdVomoFwmCBZ%2Bd1cKYw7ITUwwY6pgEZ7tPa7X6vKapRZ14ZAIhvFD%2BxX69IKTKPWO74BF6Y5zHE5QWu69dqJxuIzhU6ni09xchQ6s%2FVfp2tulUhNdIrJiYoOO8jd3qkWsgc%2BRlkKfmwWP18oy04kOK8S1tIiOXCBrSFyRtXgcu3VkKDusgen7U6sJEO87lzykZRN7XGNuCI4ehd5bzBHDvCuX%2FpYz%2F%2BMI24EDWtSzNUQh%2BXBRZmEYXQ6tol&X-Amz-Signature=51c0b890b516cb4eb5e394e64dcbc3eafca5c29ce6f32c1267db4c631cabd010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
