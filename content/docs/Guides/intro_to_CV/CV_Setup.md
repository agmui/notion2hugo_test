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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66AVW7J%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIESTX%2BDAH8Jh9exrOxrZv07SOSlRYPdlCsLRAyXOkTtkAiB%2Bve37Q0eNkwMKett3xEy0M1csYjBVnyu%2FAVHhM6sC7SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx1PFWwelqQNk5c62KtwDI1fxrIAfyrFNQ9RNAx%2Bt1vAXcC6%2ByATadyIoa8SVWJMh6pvo%2Bc2I1rKKO%2FXVS%2FdHH2JuiHLblJem1TWYrU2How7abv69zSK5FqXYME7dEl86Z6lHMjHZ1n6YlNMifnlpyOzlpgX8558nZG2i1jfxHiWL%2B8fS5pYjTINUrL9R74yV%2BPcFWDBBbvSdst0XUbCABRpoEPusJ9Up9iAyyiCKG80%2FPCSqwuwyhP52yzmxgSRBqHLhy%2B65h0JdB0RFWL6Np%2BGNwy3IlipaLzGJRHNw26MmmZcq3HnD9HKdMNYl%2BVXK7SNfWc5OmWfameupQqlpcoK0f77u0BBuoM%2BQmb7Qc7WK3fSveHSEgZiI%2Be%2FPe70XeQ0aWLF9Ui7j0%2BJDVsQiWCfrLnqddjqlVyxDxdrk9mtn2%2FbV%2BRcW0zUGlsEgSzE5tM%2F0ASTFGAoVx7cL6sQfgVsVsof67qFxO3pv5MXsHM6TilC7Zd6x%2F2nT7xc0N1NiTaeE4HaTUPYQQH4f84EIcnmwKIgJ%2BCSrJVKCTibLvbDQq6plBJJE91eeg4P%2BpoPpjuRkYr1cYpUPHMqU3oX8uuF8B63VM7GX2BOHHPiw4dlmofx%2FdqHhMtXVAdPtaKo1iMQPgkqzUSt80Jww4e2HwQY6pgGHoreh5y3zcgv0HIuQRzFhKEo4BkY%2BLEyYAyvdHP02eWyM4Io%2B9BYvV%2BkVpwhMqeUT4AHyQQ1fkmBTfcGXzpNfnS9S3vSdsYDq17uMGZj33pLiScDmECS13Hcaca0CO19Hhc5y1mmUe1W7nWeeJvPgfNVg5VHpJQmC5%2BbtrGZGAIjz%2BOGXw13GQednAcpktOXKafUqEknzo63I%2B2LCQx7IMWWSDgK%2B&X-Amz-Signature=e2710ccac324d507a2347220fab1c8e985910d031d3cf7a2800803bc971af0e5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBD3W4RS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHA2AMNGzgt5J6HNgjYpgdaKm49jUjCLh1tFk9Qkqd9CAiBweW31BSSMmoDmow2qD11QWqncD8DL1VapSBc3IqlMnyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigYO4Dshsb77B4zJKtwD7QxnlgbKfRuAWclGNgYJI5J1T36a8pUQOEpi6vhG9p1DcShB7yZWNE2bX6mjmBNRgD95NS1h%2F4YHcbGdSqJa%2FOMo%2B3pFHsTKQfA9323iBCv2oYSu9Wf4TpitOgbekHWZWjuDSic7M3BjR9dEtj%2FceamND6gIWEQupZsohrGYctz6MkXb7ACk8NnbFBlvF9Yh2z3hNJxSJhjK0cypXvG3GxTm48rEyyKofC17l%2Bpmqim8Cuj9CoqiOOLm%2FddDC2a6xMDavcD7wuSl8kET%2FKV%2F6VCLGcd9FNWufzLENSKNVzlIRzbcVAqjlo09U8jEEYwaQceyXjAEGXb65CXPx5eUpvkWsRiUXzI3u1rsVcGnpKk7WvvO7O5VUgfn8Vp%2FFnvOAsBkfcZSU%2Foy%2F6%2FfgZoEi7FzA%2FyogBobxeK%2BSWbaffZN1a5KkuZ3i%2FTInXJ3n6Io4NJJQXW3CtIJm4ApKdvtwL6jCNFJYB1DIJqDvX0eIZFO6jgx%2B1fuowERP9mNftaSMVU2Yl8ZHYrJ0Q4%2BcfcbC9l1mn0TVQlxZdqg1xxRZdnEmpEDG73y057HdMeFmgpNwdcKMuukEfc8%2Bk6VHHp63Jt4PEYPLeKT5NfaDjj%2BNpqWXVjJzORY47VvWtUwhOyHwQY6pgHqZA6CTB1MEGjzzYUkGja2JhjCnE8wGnotYnoIqVvcRGmlJnC8vXxRsyjESzqT%2FeqBgrFRyrewpy0%2BS17FJk2XlJrpeJLCYfDihUz98WkFap3ikA1EgyE9Nhy5Fp%2FHdCxS9hKN5B420uCVRArsmiTDPOfJEyLm02HCmD9tBZZEPQoTCIgKNMuVCNVYoh%2Fnu29TzaLyrK4A4kL97AHKxVKfwppC3jH8&X-Amz-Signature=1d210d5b2fefd183304be8692d8891d29d34e04f1b8d2624c07f1e308c23ac13&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
