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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK265HS7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV8SDgSQnwKZ0PIWsVf%2BGxfWMFzB8NoTZg7G4vvKirIAiAW0Yehqa4HQeEZHd5xRxSIQbDvTEASiSUoe%2B0QRZeXWSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5hpy55U%2BDVWgjgyKtwDa%2BwDU6MDfoDKy5pgHUQz3X5nF0eebrZst7lWZZsbQilFgBvtv0gVNSln6hZg%2FH0di%2BB1ZbfuPsFyTSnLJhfEgZhHNQnRVbAfrA%2BvluQnNmIb4jNIHiNkIx4MH%2F%2B8PMCqCQlgIEw%2FGcDgI86ChyPDUpgSfuNwt9Mtm4%2BP2sQnoaJLVkCXWqjyphIsSlSX1rD4leEtxCwngkTILgzb5YbLZDfKuOS8q7eK2tPDHMAOpFepVYypcwkV2sqJyG6k4NYBoP30jIe9WuGHmh4BioJOuefrBl5gkccyYe%2FYxyCc7BM3qd5RbJ9BXxGSN45WjpfP9y1SGqxJU0OHFe20oahm1GWQVCXNgMwYe0wPT7xDw1XjSIe7F8rBFxc%2F4WenC%2FDEKqAZ2sv8w%2B4pWHpibY7UjsECvkacYZF2lruS8%2Bkzh3sN%2FIuuqz7OlanbkS13Lo1btBZHd00Csk4GtaBvUkWvNGgXTx6JzW5N6Ze%2BWOVInmHyxrnzJI1a%2FuKod3fMEFBKKJJTPoMQpp2%2BGsMG%2FLyGbDoJz5tsJWZXMoowL%2BGnGugBiaNjJyLw%2BPrTRnvISynhofXaj8AbBbh7LPDVHCaKVPwSCTRW%2FNuIlqZSHpiHeR8asHHsNHo3V2CV%2FQkwnM66vwY6pgFuf%2FdHaoj2YMjgI6i9yKUWiX45UoDgXxuEmAKVA0cOwFPvBI6f%2FGRGnYZvbSA95isH96XiRsGmYtAedYoHqQlfFm0RtSNjFhJLglVN4UmWuM2OJnO3ZZLoYolJhQ2MutXqekVunXI2%2FtsOHSR3WFaN9ulZ6nwydCWVo8f94thz%2FSTJS%2BrbBK5wlpQPks3BCv0tz0ZtKXb0NnLt7jvaJIfT9lXwNbtI&X-Amz-Signature=af22e8150fa2ba321b397d2bf896e7d6ec9c266813e06f8abf9ead718b276903&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFHNSGJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FYA6HLqfyWoIMpRRBuNa8gcJPrCyB8A8zynAQZ4CLngIhAJCFu4HINboYji6HQPxtubquadhdOi%2BUbP0tlNhHtmOPKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYT%2Fp46%2F6Fmb7PWJgq3AN8d8FM%2FafuxYviwvGRydmZltbLzUKY%2F6qg0ic8kkrvmhtBUb2Yg2uNRFRTOk54tPQD2eiVAG90IwuRQOWDv2kUxkEbssT2kXH%2FBsyfxmP7mrskJQypaGK9c9%2BfMGfT2kicuvF87H6W2N%2BQpQvKrStCpEh9eFFHH7SMAZixyyG%2Fcf3ZRmqlcw1cfv3Ny6pumPWNNytU1dN07ztQNQO%2BGvPn9%2B6zv6ubv4vzZvUNq9FWsafRI8Qa%2BqXaCSO0mER6Kx6mTKmer5VXFjE8sB4uL9%2FPkcUE3byISUIWw2YWccy055%2FzV9fC%2BTwaDVVMEt3SRG1R24%2F1hXyLdFdt5H1%2BJFgXstwf%2B27ab7E0ImoL21%2FkujdH2KSuD06UzyjLYpATfpsnOnNSphAmM01ZbTa698ZlBPlpCtak1YhzXgqjgyQPCj8UPwPHAh9iWswKAta1YYx1Hyy4SkCNWGFN887aR%2BlJ4WVgxpaHGOY8gVgXXrfDATFfTxy3iSPdcdKDbhJ5qsLzqeiOVKcuZvhE%2FrP%2BOT2eJAP%2B0x87%2F620rfVfGIS2nSCVeg9j0GPrLOErnc5QOpyJS8G9ntDh24VVK6CHBcyFpuLkMJ7HeuOVha3kN1kMZIfaeqnjz5AI78UlvzCjzrq%2FBjqkARBqeD6yezVj7ylDdBUVHpNJjYD0QgmXta9ird9p6SsFfBPMHSzQdf8Ut%2FYv8aB5sHQk5rrV3%2BifXngvNNiO0L43Sy2IcOWg4ssyPWoK6aFzfnv%2BXdeMb6xDyEgIp45FqhPaz8PrTjVMGtqa67jxBys8gdylLmpktpKr%2FIFGU5L2t%2FGAK3NArFLBZEBMBKFPc5IH68ltNzuHhPN%2BxsFAEzkN0wy%2B&X-Amz-Signature=e9f2187ea054175553e52edaaa9ffadbc4c1074b5667fbe7226dc6eb51fd0b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
