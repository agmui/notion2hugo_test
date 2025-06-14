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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWSYKBQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIA%2F0qUS1PUaTppbuPU%2Fm0PhPhuZ2lfpURzy5YGd5OFL1AiBQPnAhVF0Yh1FcMdu31gYab%2BaZ28LPW9KoIfXmm54jvir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZCG7f789UP3SgFtyKtwDycM3tk37%2BSu%2FIzjX0gcunQFYR9wFZf8yo9VRlK%2FBvVxDpwpYYtyE6ydArmpprxJwks%2BFU3vF3myvMrKL9JMzpBPEpwGAIem2CtYa5k3IV2QLYhA2kkTtZKB4bwjLdyDlUps%2FzfiK58NtXOIYukFLztBei0pChYqcACFkw3YYuv%2B9mVYkFKe391lCYFWAWUwYbSXiq7Q7JRiSmV%2BmIirt5ERo2jqyFYGyvLgskL8a5uwj7mZr8lWKHNxIhP77jevcG52NyPiHpMRwhs8aIY0O%2Fuc90DZjnJNcniHPfGtmZ3UOMZOG3t9dxdGtzaw0mX3bS4fSyctoy1P6cW8D6D4di3AF7sSWLmvAg0fkU8y%2Beqv%2Fm3GP%2BCIBpqQJ64QTx6xjpZohwqwZuqauBXfPcXckgCuDsnT5EVWvjJfuRdW19wYIFXVf1ssveoG6YY3Bj3%2FplaWMUF1wDbecvluO37%2FeUY3EWg3U37btxOic4pI7rQqyp5fPp7WYzGh3xWHfxRBDFjAUxHzBGP%2B7VfeXuu79RiGy%2FIcLSH5JaMtav6huRQ3BB8lL2rRpMZaSQVjMuPlY9Ky3RqHMa6VI76ms3T%2FeEOICe0g5kMS%2F1%2BWZMvhbat6HI9CtELsniylYX%2FUwvdyywgY6pgGr0eQZvqmME8JUQUFjgZs3o51PE%2FxgaH9dN0xb6o93n1%2BY%2BNcD7u8PTpdeg6WwXIrOg6b%2FKzpQz4DT2Q0hUr2hVggqIdJVlgwnvFv%2BKwVqmQsNnmAgMb0%2B2Q%2BlUnbigspNpvrgVZhoelJ8cvi1hzl42KvE0iRq2K6bMg26ZnpbtXopIr9xN2mNVw0FsPoozCV16VfuBl0Qjeq2c%2BfXtyDTIm0TLCdI&X-Amz-Signature=5ed4c82ce079b774ad18206b8613024eecd7c71a8f5d1680be4f70a66f47c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5RNEOS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIH%2ByTWwrbuDgAFx3izfxdmvqR4CpwbthwYM0%2BeRk7BlaAiEAleRxqO3dOOlYqaltvz4FgDo0fAuLXs6MLtwOhYfmHQYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV3maGimtz7gNXaiSrcA4G83yn1TBtTulQarhFBs4oy6anHZancdzY2ft0AMGHCCDzQTxrNnGNoCcEaME1bC9sz9MXvzE2ErdRlxSC%2Bz%2FJwlbBlRMeOoDqD7OyQhtL3YbML%2Bd3EpvaybyTitepoH2PI0PZ3pHjDXSY4tnPSO%2FNVhvYa28SzBb7JAL%2BjDkkcT4%2F53mo2ouus9VBFpgWSnNEMEcP5BDuCVGwTLuirSZDSZceduh%2BaWHK0A%2Fy%2FvmeIwDE6bHlqeVf7%2FheTgMuNuCHM7MAALMiN3Fu3tgNJU7JZzDBaA9FdOhxpQfGuRPbniGns8jr8OSavzUpOeMwWKhvMQySM28t90vihRW7pDHdwwzGNSafA3QJi7cvf5DSPw3%2B85JpyxSxSSB4BPXluGuIT2kD547WoN6xxb0%2FBSNca%2Fu41j4PJuh6dgHP4YCeoWK%2FX9vC%2FUHyjZahAw3FdGNLSynhCU6wO%2BM2ooAyxTxJ0cqzGCATXQtWIQoX1rA8mRrXDrwRSE%2B2xGmILdw32nLzrFxMfz90MAtGyRDOtKZ428zDxetYCn2g64YD6NAsetHg%2BqYl7RemGiZTd3GW3pmRbpj0ivXeA5AQtyRq9iw3B7iOD08gcvt3uRNLHRyY%2FH3FRbd4w%2B6Y5%2BQrBMPzbssIGOqUBogTJS6J1XHSDuqYG%2BD%2FbUGybu3t9qpxvM3PPmr9Zyocg65Oi8YWRjdjDbn8YDQYIVY31%2Br5O%2Byp4TXFi80Rt2SfwP5v2ENMqzIxhOYStN7mJBS0KrvZ4wqOFdz9C1fNf0umeI1uzp%2FFlnn5B%2BHUkdHbJroB1QJ4k43YampkZgc0%2F3UnGBqI4n%2BWnQEHyrrjtMLneQVy1mmfYmmz%2FuVXXkhFeNXwL&X-Amz-Signature=b2c9bf6afae65a3abc0641d5f32ca463c5eea987befaef23626dbe1944604586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
