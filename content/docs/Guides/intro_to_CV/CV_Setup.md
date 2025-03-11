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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGLTMKT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGAnZQII3n5CsMErAK1GD1bkOSDXV3u4rJ4SLkExBMMFAiBX3mKB9GWWDqBFP8jhatDKdeezU%2FmSaBpl8GEIK9NQvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEeeILcoAjcxsuRXKtwD4GWRxIlYfzZ3rnlXXNC46%2FZsGQNUf60Hp8mgaHoNgW2XcR0CLT4eK%2FZm4ntLOHSYDKhC4jL%2BduasMgH%2BKVBKybdI7lACaMH2t5P3Ur3mx8Y83P896hH7Y1mBTH8GPCMDwfRWx79KSMT8l%2F2nyzqegZ%2FgxGWA2EciFLmkDBkKTwdCegHmuteA5dUL4EhM0Kcei8NA%2FHiRe62QgmehVsHEWUTLu7zSsQmvS46HrnK6hSFAk%2B2WHy%2BNzPGxlVeedPhczK2jteGAUXZrxzz2Qtw0UWBDNdaxWnmh%2B7yepIBEh%2BX4Qh%2Fikq%2BvX9tR5ID0Aw9Z96%2BXB6h43e8QDAYHgQ5hNhp41WzWbD8OXNb6auHt%2FZwX8Pl7V3q6xzfJIU1RM6ZsSEk36v2ThBTti%2BQKC%2BXEKqbn3EWDYfE2aHOKiB1pDyxxH5qmg1Y3k5o1zMqdte4JcXMFD%2FE46SGE4R5PTbjeDChEGP7zyfTn9GbBs2RxvGbXfepLRfy3eiUCbpnLBxfFjxU2PbFUCDJM%2BXCtAidL5AtV6SyOJVCzzKL1avZe53iFv4s4hE5TUYQrx%2FZDMDYhNmBGIJ%2BeiKrxCZh0qKaaCcaxWBIwHZ2MXAD%2FwxV%2BqKtDUgSymUnmCloCbrIw5M%2B%2BvgY6pgGmbGzVsqozkebfBKLXYq0F%2BJRd9cNXeihFb1HHNIQyEgpUByoy8%2FgJs1CYCGGscyCgOgDt82hY2gWhSm%2Ftq%2B5os7HxtlHYYD8WsxLU1enNP0BTHl24Tq%2FYntp7rEQkgUcd%2BrGrkIkHs%2Bbk5Wwqv0Ix9JWBvs4SelM%2FEIJr97r%2BhZ1kKaIAiGIYy%2BfeCsx0AXhXNN9fjOjgYSjxn4K7mZWyHWzXj4WN&X-Amz-Signature=cb1a52f083df1f4d09388eb5c5e962e266c11589cb9bfd47e66495a11639e537&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6X4WEGI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGaHPqmBQOtBs%2BHfPguEfBjLa8tbPpV8szm%2BuJOaf3zFAiA1SvTO8gTiWJvvvV5%2ByCSzbyT%2BYvWn9GbxonkkvXHLPyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP1bYGJROpzxftD7wKtwDWC19t9qeBsQSj%2BAw6h7hAZs6gDRBxCKpMspXwKHC3uhaItq0DHeAdVkplQceGnGgiZ3AqEo8OK44KSpiIBdVdoS4VTqf%2BoWgAabMKL3aZSUKDNa7560WVUNrKrcYE4DNJNxphwBnzUFz9%2FDBJqggWS2qTV95ETgQ38WIkMOFxv0gjTqtGUmNQKE%2B1hj%2Bd5yPb10Jkap4HJnYLBgP2qEjSMVRsDYsu7ahK9oFJpY17e6hshojeDDikWqyMQf9WURWwVZwhds7RRRreUDKID0l60vOUdnNHgrjI5b7qZ13yMFkNOybTDO%2F5NUD3vhpJDNsOmZ0aIZwyd%2FJGUPUuafWjCYWtfdHUCCDmwapepI8ixqfQJF3yK6D4WfIA7A6tsp%2FJt1HuoXIhHAVc%2Fr0a33l4fpc2pR8i31JiR86LfmvS1Dyn05GJx%2B0RXrqIfoFVWiw5ldMXRf8eiDlxZSyxAB80q6IY77GoUnBpXkUHJ9DDvgLIppSGrI%2BDtuGp6BllRdgLgLXZzG6X1Bww0YPPLZ%2F7opty%2FnKSsEf3smoyIlBpc2dn5DnpPbtrxjLOJak%2BOtA0Ir5uru4C%2Fryp9689Wps5Ut%2FwZIW3Vmbd1ISQ2P37qgl1KFChv%2FxKTraeNww%2Bc%2B%2BvgY6pgFb4eIRqoKQnT5Umk41zrhZQpeW%2FQbP4wJfgmhjKKB2AgSThac7pOi5YRA5o0jbplkigHWJ717Pc3iUD7djEDNuMv%2F8Do1bOZlJsyUHN3j21jZwOrUuuGXa0ifsH8wDZW7WFz855Z5CG%2BbKUbPz%2BF2ZrsP6PefXOnr9wWzxqMPO%2BKoP1x%2B4mnintQWeAxV1zKZ2IA4IdmJ9zHrAVf7ZtPHNKGXy4lbq&X-Amz-Signature=8c05df7b2eae81c1f403e42dfcb31a38cbe205fe31c2e65414abaa24bcb37acf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
