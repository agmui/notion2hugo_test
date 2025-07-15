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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSBMSVH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIG%2FooSdgeDPkx5RZF95hamkVRqu4nQxTLUKXeU2r2snYAiAxOJN9FSvanLW9DddS%2FEv9MuiMSYEtmX4WdpylNHNaSir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMgt92%2BVjhsTVBjjbUKtwDbGbanzQS%2FaoIMsBIJuoUDgIQwKp1fh4AWlAPkC8dun0d%2BrHn2nUYdFNBHh9uB5mo3O6junRPKmNNQ4jNKvN8aa%2F6bwyZz4g78pASX6p0Vh9i8bacPFxe73gUZBIr0iTNW8I2dA3hpxEgVV7zNFnzEeDpzVywj%2BfkoCpgLoq2i8SpoW9cIpbyTJyA4gHOCz0GGRIq3QaZF0Gagh%2BDSnqQc3G4vzOVzk8YR2AYNEhsLgpgnhsVDk%2FhapxoMAUOhIb8Loc2bcmWUxRPHD6cqOaa04u4NMibJWzsYKGYfpJ8I5eo2YlVD9T3F7C9b6LajXebbsfk3ZWdqwgU2LskZFBFPeneskZTahZ6Od5EawUdFokIlzHn5aA%2B7aHTA%2BBMWXrDmmloiSW8TyOK%2B%2B101rQMzzQyasMfoqRW1y%2BoegIAqv15drt%2F6dq6SbcWMM1dARLoXspr3WmMjTx08gseRh48hYwrPBQPjA35AMLjtAsUX4gNIQ%2FZ06JlAluBy1zvpHMTB5Ym9ITiUIH71olD8Jjks%2BziLUiMbZGt0w0JumQo3F17mZ7FZeu86TSQPg2zMZuR1nna6dvHeo3GTPhv5AHNuiuXCf7MzyPs6rDj16QjPU5NhHeG8Js6oxCIxVQwztnZwwY6pgGWza%2Bfdth8pjnsSjO2AyQKdx0Im6wxjOMh56y3zsCJak7K2mu0%2BGLR6%2BjMA0BhF3fBYuFylxpPWDRNGUjFo8c%2FieycR6h3%2BI4nkGRkDSceWaBIjsT5BpDSTZPWsHjginbF9SCupn%2FalDCISMcghgpq8tj8q4bC3HBI6v%2FP7ThSbA%2B17heW94fvTMOGUQEiXDW1WG3OlhndCVGG0WUXi9zQN43adR6t&X-Amz-Signature=98c3dc70afb4da690550c383ca45843637b2bbca93fb73c54742e4bfe138430e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQWUFX3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGQb21SV%2B4vT%2FWo3h6MDaXBPwsP3htXz5tztIZX3ZrGgAiEAmfqDpW2C0jO%2FC3CeQBRgKmAMk%2FetIkIUeQyolalCSYQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJ7jrl%2BDjGe%2B%2Fa5obyrcAxW1DUqVDYXIn%2F0nSx5GCLBL2QCW%2Bcr4iOsfhuDH%2FmeWnj4TRj11Ldzn0uke1xhedmA3x91HpjGtyaNjsbaXCo3iIOhiDmdxIcVAgOri5Dtg0wJ67KEruIOqP3uwf9HAUzjmDsG6rvI8%2FCEgjqjzWu0FsMQfxsTdepwrkRpxtfsbPOxNHgqZr67yPEDFCbNuDPwg2AUNY5Hw7b8nlSz3w5NAppa7F44TsGK9UBBjk2A6tGFOKlw1HnvpHeMHj2HpLxqU%2Bei2dienVI8cWU5KYl7tizLGDf4W2fUhxg8GxeeFBZE5qfF4Tw8y%2FtIjDmLFZeHdXyr22Hh8WgPegz8yrUj2xEtYuwEh8Y32vV44xRmQ8LzXTMX3aXptwB8VKVwmgckY3qc5wYyUZaaGRp15U7606j5%2F6Tq71uxPmaY%2FHR7Sk2OJ8VV3NmJGtN2jRD88%2F%2BGonASYYgJKvzlbKJamcOk33mdc8%2FVaMDHOJkRviM7XVD%2BYnAeo%2Fz6w8aatQYRFQkPlhrDa1EchmQIFozFRVWf%2BIOCX6o2NEajI3jO7VgrvnBWa36T6YgmeP6XuGy05%2FOpCaJHw4YURE9cRTbQi33M%2FqweW6FFZl1mm7rrlZUHWPaQfEcApAQy7tPmUMOTa2cMGOqUBXxUe%2Bhnx2Eis5RlvagILxOvIs0ftQP5s8EKVaBIjPssSizkQQTxd8d8dhyuWIepR6uTVfojaf5TfRC3Ue9iUEo%2BFKrlpjzlmw8TLlGNtnTSRJ%2BNCwWw17%2FmsKIl4jggfciZjN3uZS%2F2yKFA4b2AaMunv62pdYa58OrivFwUw4h7eZGuVF1txWd9L0Cq8WiRg0i%2Fvc5eCQT9NIVkJIKJbA6DOqifa&X-Amz-Signature=71315a00fda8a4e8f45b96636c71ce7e9851effef8a911e1d11e68941c554ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
