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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIBPQF2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzVj0XDtYkMRkNG7p6DAWzLjNc8vE6gMq7qQ%2BJjX08yAiEA8oecaZv0pT7Sbzo%2BKXDmd%2B9unXXN0CER8VWx5awDU5MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6eIqhZIPDP%2FQi%2FCircA0kLyQ7ZfnzmjVJAqzzRfFu%2BAHElqrbyJuaPoWYAfK7JzvbD2gHcVbziTImZQ14r6D69QYoJp5aVjDqHEMcVPnq7Eocxe9m9Zs8dT3zcDkjTFEECcZ7M4Sqoj9D0KCHxEYZJ2RFS38P78KEZG%2B2pbubyaFvXtOnGrfmDM5rXupON79bYJnxQfnpq3Nw5hAOXo1T6XbiBfxOsreTrPadeOExQulpXQBktRGqP8UKNt4PZRL%2FpqzqLQf92Un1f7qa%2FH10fGbWbBWNGCAFNYskDiD9P2Vgdpr7bYJBZpNGvPTQAN7Af1rAFN9gR%2FWwUzfriJn0FSjWV1AKRs92CrNwiaTh9K6kSi%2B4y%2FXZ2ZhMCUmySduEHE9WXGn8FCVEidxg7XnuG9radW8MdeUWII2ufwxnJT6AQGgEzgOOn4F9cKP59o%2BANhO0li1rnLPzTJYQn%2B%2FqLEyxwaN8AP2AwTgtZDYY7RtbA2Ddq31r3lcQwrYixGTmZb7djroFMlFJkZFzOU%2FGtqWXzSXAZF9NE5aBcyb6zPngBR5LXMiv5Rqup%2BsdBvOZlXkHcZwx4ZJieKYGu0MWY6xW29MvqCExC6E13IKJ8WzDv8SLsCCfYe7EyhtLAdBy8oFRfkOovQ4QXMP7%2B5MEGOqUBm5VPZssfNf4r8yhzNDyvKLkcpD2RcDQDQS0Kq9GuPwG6BuywZUHhDrlg28imvkvJ8ZC6KWLICMCSzVCw7mMBNX%2F1xgdfcGGYN0dOF1rnJChyRgAhQDxvxvsUgZkpyL6Sgj3EuoNQNF%2F5HM6%2FwefHhE%2BwMk4bkBlP8Ra89h8JSVsNKV%2F9Ujn7cfND%2BZdLRKvkyBPPst%2BObgmQdVM3JmnWFirRJZhk&X-Amz-Signature=654b189ded446475a23aecd155dc9e80c3eef1eb1ccacb29031ef7842235f58b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HW6QAQZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0MQVXW5pGfn1dMuqYNMxcabxY9%2B2ZQ%2FqobUOUTTZlagIgCfutlCRI0AzHbGssLj0Tv7bZ%2FxIC4MP5LHGFPfef0N8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEJqkDywwLX7nZTPyrcAyvSofektxlrYtgSinPVKFn3Ww8isV5dMRVvEcZ7q%2B6Lz5hnrWzEGrQ8Mm3%2FFybqZGAowsZT8ulox27PYy732OwORBHUtEiC27X404EKAesv3R%2FE8qHXtpB5k1boCdU31lRKU%2F7vJoKVKUBRDQQgmRsUNuNPxR7ki8XYRVrIDLvyYbl09blqyLOFyahN1qIuJShTsSSZVq0s5LSGhs6yKUDB%2FC2GuNAblUg6iXnXvWEs430ZTgV1c%2B4Nj9qe7ZxpMhP89%2FE6aL%2FrmOx0XAaS8kPBDPcEhwQYMUVPFxYFDSlaVUZRcF5iwjNb%2FvudjxttHkiN%2Byz1wCZ1Ql%2BZJEOwkAGR2%2BBw3smxY0YNPbqCU6whsiO5q15aYT8%2Bw3uVbWZS3FRMw9gywr5xae1u9X1siX%2FGjTTU16eSsC1JFcSuVfHSywX2YSd95E%2BZB3dRqHp3eGifCNgMm4JYedM15yQkDhy9NbTJNpI%2BS5fjGfTOLb1ImxhFkpP7y3KoNvzMQPKPOx44P8mW8tBEq%2BjN4703GzqhrxZYWVYJFvv1OMMIbQ0mkZhkZztcvKqZZjK8zhn5Oe4EZkalqKyTSGxq5vAbk3zovNIwsjzkje%2BIuR3ujY9BMtHML7x4Xg%2BnQJj5MLH%2F5MEGOqUBoY2I8ns6vqvUYcazWSsBbmShKUMaB7TK%2BnYDAUHIHPg8Mhv43OwKmRX4HYlOrSqPTEgbDo4WgZVGcpWjTMGh%2Bff2KVk06Leoy%2F3ENXw2ntfm49%2FbccI8eGPZrK0VhIOi%2F%2F%2BLeStmRde9jaqcuqdb5rjg7qBzEU%2F4%2Bft8NpeMtGFug300cR%2FQeGV3lQ94pVKAecuR1gvxeZ2KVeZu3zRTl5o5dqY4&X-Amz-Signature=b377b8095b1f7c417e6cfcc8f30cc1737cfedd527901f958f54d1964be6a4e80&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
