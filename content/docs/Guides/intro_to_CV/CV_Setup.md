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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3EOMIZV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICObOMioClAuLLtXxeznkdImqkvu4IhfPTkP2ZbVaeMmAiEA%2F1VAmc3UwVS6qW98kmHLZ9kzxxugH%2B2Bf1E%2FBxWhnXgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAzuZ%2FrnImFGE%2FiiqyrcA0ZMrHykFNyl9fK8bYh5nMqIKT7giJe0eQ67z57z3KjpERNBz%2FqczIwx9FyQsAQqiKTA8Xu7ZWy%2Fw3D%2BRXvgLMaHpzCOXZa88wpUujvPKRoD6RCj%2BPI0hRQyiOoQLW38914h%2BmKvbJNZUmNyBPOQoZMDzlUzcMScbcAocZ%2Bg8acpRcvxzMJ1FpUsfVw%2FX%2Fa8rPtcVRjx1kJP84NnHfr1Tlhy60IFU3woEpVRwh4P2cstB92p9xLKiKsBGUEBHoF8a9cYqX3fvPKGhmP2OMR1v%2F2AD2XZxWPmFZ6QqtZL7MHOVVSYzMxmqpP1RDXZ8h8elK%2F4QFPSY5ZVS3Al7Tm%2BmpfgopMvftjL%2F2Bf1%2FdA4DgrKn5EIbQrwcE7nE4jMzsE02moivg9ZV%2BtdMMQuL6m6CCKcgJgoXeKGlzJuw1q%2FoLAjNYQYDKY%2FILonchT54PkRdEDpX36XI05fCKhxeDZUxIuvFDZrk%2FRRu33D4IhofZINly6eSk7z0umE4hbwa1a3HEbHmbmyTKG7bKUAg57RxnJeOiD6jvpxpZ7app%2Bouoa%2BZ1Sbyc2O52ucKFUqf9SBP8Eg2RecdIaFRicMnyOI3giwC%2F92frGKznUP8p%2FZD5cZj8EnUWiMLrYMTBlMNe8jsQGOqUB%2FefvMgqtqAwgNQh%2BkCRXA%2ByADvj4kP4N1ZTFhaj7Trp81mz9uwuVHujSV4iWbmd1A7oRQDz7fZPK9jN30A4Rj1llK85%2BEgU2vGsPv9nAObxr4S9r6CQxmg6zjuTqt%2BXvqfvirCxJdJXm9SfOU1UChEmqpyCQcIpEpD2r6RuRvigiarzAMnpd9YbWgVOyOCuXsV1K%2BpBFVomLh0mf6SEHymizgpT9&X-Amz-Signature=ea16062526af4934a17409685f273c314608b210d3827353afa2853c91bb453a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54JUZTV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA0UpSC7cEElFagRVzcp3ZSC0J%2FYlPO8U12NCr3lllUeAiEAmPwZHo9ZFB7B9iNKurzIzTam6%2BLBI6MVha6Qp4FfKZoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNblv%2BWA%2FoknvldSUircAwVdFpfDPR%2BhwczxH%2Fm2Sp2ksnimLU088Dhg6PTTJdfzFjjS0sDC%2BXFycFDsUB%2BqrCX8dESVgcF0jifh38PY%2BbrfzxiEk1LcNGFQyuM3sqeorf35epZnYp%2BaVlbPHwHIaJTqR5FzN7UMuLSGdTSPJwO2cpzX1LqpDCFSBPdeujoK%2BpsVZ1w6WFErdSaAjawiQqjojPzpAph96ayOsHq4iPF1S%2FxuNtjgR5rsI1ueUOd1%2BPEZjSVLu4sWYVfGSi52Jl25j06Jlf2ItHSvZAd4xxEThqqV4%2FoQFjFeuBOTVqNsd9tOUsyrYm9QiznSygAPmu3kmislANyPeley9pEJGmugbTHxRBOmbSM7DNWMiW%2FiT7OZU9CN6BdSwMCXPaiREZZXpXSD4YYLBU7960c%2Fc0jp3LSIuf3DPM%2Bh%2BWrZj4qhql8MA%2B%2FeDLszYsRlDdF3t%2FM53XhSKjCz%2BM40%2Bg8hGabeStvhwUdwPv7BJuQUa8%2Fe5SqQ4%2FVNit8pnyxT1DcPx0garamkaSzWooJqmf%2BltcbKREcmIBhuRihwK3N9U9mX9mdWghFx45hKPSpi11mFHLqPCJMhlyIqUEpCtvezyFgXbbDCfHxNrhg%2BlYjctWuhBEeiQTGqr8wwc6KzMPC8jsQGOqUBTU0FVh1KQ9xKE19reVUo0ckhK9L6Z%2BJnReK0prNlz0F9WIkOgToSCsSwouiiuph9RFsqYuKT8Bc6c7oAUQWcgJIlmVMTl9psOB2iZMHh9SgY2N4T3kUYlLQt8JEULnMF1fZRft6H1H0nbtdrl%2BseQaxgJnPBbfvMEKfyqPhFI5rftfdelrR7RwQVjr5No77fDkVXGWPUytwPmcnyux6uIQS184qa&X-Amz-Signature=9bf629110ba2e2f3b26768b94927888a20233ce6c35597f310026d3fffead689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
