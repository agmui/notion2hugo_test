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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO6AO3RQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEnyHc6rodMfkls%2FzrufA3LD1fEqlwH0Ot9wCN6P2mg9AiEAiZ%2FSoUhFLTmD%2FSXdUf5K%2BV92Ell8hcOjv9IFPEopGsoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDURoaOnltEyUIDiircA2Iz5JdryjrQFF2loRk2mE%2BJSe6L%2FxpEhkbXuCPVM1SqSPSEos604nvFYM33rLwxtnXilzvHUhfJs1PCEhEQtRdWmsPP1AwghlfOZPLqyyBhmrn%2FoQX%2BbylWzvDDJWQcaA%2F30PEMgmdxxbdoxlbGTG6QmK%2BpjzMhTVT6EuTOGYaAHEcuWZ7Xx7NOkWQEDYKlTatm1uK0WQwbqd2gCtMy8QNnG2395wXjKBtq1SIGuoTknI02aN3gZc72HveeWE83ukwgr3FMNWtaZxZZ%2B9tyFKBz2DTLFioiAnsaMu%2FyhbXSdvyY5J5QqHSF6n7xgM6Q6oNHpVOF4FU7ud0oXPZwuarMla330djwvy%2B7kESt4WkBcvksXijQzvQI7FWCz9ywzvSmC3Ejd5ec96zySnl3h07JgwJGX3tmGsJwKb%2FPtPRhtBvvGGrDlBp9Lz9tD8WMlY9brWTNMDWNiCt4439rVJj5OEVfcKlEIU1MlwsiJXGxC64SE13WyIm%2FA%2FNEi%2BHDp3AcF7%2Bfmp8kXMT2Awi%2BhGnfEfoBmexgxmDc7lDYHGLK5c9NmpL7W5jWAMzkyd%2B4KE7rI4k9goFktLp2c1%2BuPyDldNqr4uE4DfMdf%2FPhh9kWWCMapxalNj2a04laMJ6FhsEGOqUBGgnLiMvDX7efUoOCb%2BH%2FO46%2BTSG%2FupIztzvysQtWGK%2BQdk9B0SAWSPRq5F0ps4otHRumWKba8VDIHWb5yRnmnCbOYcB%2BPwbZvNSB6zBvhT1ZI1Y5O15Zch94zH5bdG%2BESz2mRNKUmhMUh0%2FMM10Sx67vv5%2BcrW%2FP%2BTC2L7nON8GYmtYIP8vFXcSksIy2Qr7VujSHIsBVFASTnhXJsppXpuOFbn4m&X-Amz-Signature=2da39231c14053e7acb0be5663a3d5746da9f6d1c3fb29e23a9b807b1203297a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4W4WEYI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDPbvXhjChyc25vJ9KqgO%2BHKd5L724iaslxP7gpors2xAiBmmlyT5u5KqA7XcSTisRjC35yjOp8AbxoNobBGGZz73yqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwy3Y%2FmyWvgBIVexKtwDgRVEZgyv6SlcQOdixkF9yE5AEomN7JO4qYFzdUTBSHkktK2V332znyrJ4cDmLy84sPAMS5AMSj%2F7uIMcXKByRpyX%2BdLhaRr3VOKxZauZ4yxtKAmxhuTNQWKjflEEmLKvLvzSVr1dlF5%2Fr%2FClgYaSk5WFFvDfNVNrNF8XZmM3kjGBDFNEE%2BSCweca6o7cjt7NLY%2B6aAVmUAZm3A1CMwD4rK5iSYE6v4QY9g%2FVRiYSFX55gzgH15ioAkgHMxaUBp7WKBNeFvZkOhq5jwZBHxHHTZ%2BPLG3GijxQPUmDcXq4WTeEZi3dc58PAOoDAzzzwR3Uy7EzpN02MEsFaRBu379DI5aNhCWd39oCwJQsL6q7uiM6NYzkfOlk1qAqZsZZi63Lj4GX39%2FEbhnrew7RTNnj1v7F8OznaNnGtTOVPpblZL0qmLcbd6T%2BHCSCaCMy2mWJPQFEIjw5b4MraBJv%2BaoaBf1Txv8Es1reyQVDbAzWd%2BRTXmRwB0UR%2F0jS2eRjTktZRcNcmufBRMQ9cLVAnxYEasf7M%2BE6yj5je%2FdaMAbO6o%2F7ZsufgAfKFvpk%2FsUSIGl8VOoCYesj1%2FWRFwA0ABFg9bqWeh8SjfDrM4mNkdY7a8TzoRAYrn6%2FWRhQkxwwp4SGwQY6pgFTM4C65%2Fo2cQuUf9AqtX22MIZy55LLZr4lmDFB1FMJDuDPow60TbTPQs8O8664z632fjdGWi474Z96M77S%2Fgoi22Xh4jyn4iHIQhsgceTrteH0DHuUjHIQcWHPDX%2BDcMZICicvzq4OGyJeP%2FLxDdXZmBDNhZswKHY5RqYfOQRu9XCrLp%2FDzGsfsgqG6qvHPSrDRLG6WXy2AmnjkTJST2IXUeAVr4j2&X-Amz-Signature=7ecf0a535035202d8c6f2cea908ffea4fb8ef47d240a44c7763393c4a6f7f3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
