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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDTUL7O%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD6Is26m1QGnz9h9sglWPxthBVkTuLRfhwMg4T75JbjmQIgf9X7prkVViKKbTrztQ8bEK%2FwYUNnEHh0MyGRHmkVk4Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJjHw7xLkOwYMZgemSrcA%2BJ5BTq4IVenkXTKXoyry7s%2BVH6KTGXaJejvB2h05q86HXA0RskCy8FozA4XiT8385eN6ukVsjljn3EMZfJkV5kQDLtKZ54emLiSgs6%2B92gmkmbe5wHwz25woV%2Bp8kXjKYiL%2FyBIiPnZo1nJnhnji72ps0SeuvzljsmISKRQiCFYQbF1pdp9W8DJgALRpXhkgg5mXDQP%2BQ7zk%2BA9VCbceVFY7dWFNFFycgK2U6bbcUTio62nrdPX%2BEzA9UPUGRj9MGoedMIQyHKZe54VTgeIHZewWMMBEgr3DTmVUAuoOremPhpOb8VGuacbygpCmkE%2BWnjUh93g2oAd9Bk3BKck59K%2FFI4LEwCR0jTxlB%2F6oJl1CwgpH473o2uXz3PJkp7zkQkqKH8RxPm8BCSEFQcK1SFY3apuNaZR%2Bf7H9Vg9T81KmfhsKfls9xPKulus%2BQtAzEPU8OH%2BifbxFNfGeRUqaixL9CnMmuI5%2BHp1hWdY%2Bzdrs%2Fa9K8D2G1L12xn8NC3zrc7v95FRHXMUIaspb4jp8wqmKx0YnIJZTZVotW4g2YR5PeK0MwCHH2k%2FcWJDpotr5PsTZxmv1mVad%2B2R5z1uvbnNL8%2BO%2BfyvRMl7hwPu7iPIm%2BZwihIY2mmx%2FKTSMMGKob8GOqUB35ZnOwYda5sLMO7txC1OGY28IMjlqeyYS%2FHoq0ClF0WfjGBqRuLI2cW9w4lqMKjeIG9xKatxLpvZcVQ8e9RL80vSaLb53dEpoYJMyTeQOcr3FimASDaP04oGZhRztpJIwKdQHVX2C8lwclxUj9EeYW98aj5c4NPc6orRiQ6f1rOvjj3hvLt38iKLXMUG%2FTpPe5KhXSX3lOW%2F5YRJAkZYpmPc5evs&X-Amz-Signature=a9ce3ee084f8c7c2b998851bb6a349ddfe12888fb9009e0bcdd389e700bfadfc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYEZ3DE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDewoluryytnCj8IQAcH2scb3AXX9TSN2x3B%2BdZKAIBPAiBCkZiegLtJjW7GvlGAe3n8p%2BQ4YWxGR2AZlIPW9Jramyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyY%2FR578Qpx5RW8kmKtwDWkvSybUY6njcD8OgWQ8Ra8vV1hXZLc7AEIfDhxdesK%2Fzvk4cyF9hhg7ZVutJIOfAnVGauvHh90Q2AqmTL1kociYvUCaNIMGmi18COmFFJjf5Ta5Ija%2Btpt13gyZjt9i2wQoP3yxfqxsRqaSm6fm3WjZtnuGUnCxsXnaGJQDMBsTA9eK%2FdvpPNiw3VKxbzQtVwD3U2FvGjyj2O3zK8Jg3KuR80Hz3U8WOm1jnZKAA3eE0iDMvtXefb3sSClYHF%2Fzha7ObkUS%2BhX9m6WfQqfWRNsl7IVB8aVtUqX9NJU1DdLg75T2uoXf4g0qTrqksX%2BwCV6x5bss7QFxUlYHhUTVMqZpV4xH9m8UMOmQcuDDuvOafwm5Kq6fUBDXg7xts9x7gyDEfLqJzsNHu0WMO4fKrtJfVmhpMRlsXqN%2F0EiykaRphudUTd9UtvDWfD7q0IHRTSKBb5qUh%2B4yvWaD35XUevBDwCF1G%2BYP14mYp%2BcpeY6pFXhb71qzpsK6UssiV7RhfFqup7Jm5kM5Gx7kQjuSgt1gKi8mHyywhTGFHphD9AXKUM6eV%2BRHbSDd3jsIO7vqbRkqiYX38RrhIUj%2BNwvUv0sSxwfPcVTlmh1kfMPdemgAdJWykaYEOqwwphPYwt4qhvwY6pgG2VW269X16hJxLUgbGasjCxIgZXcyNQ7nc6Kzv6b2oY4prdLMyeayepdmSNuFR1vWffw%2BjldHqTB%2FTFv9SFeEaGtC4ttWTrt%2FbJHoIYmmC5sL2h1EjGUUU%2FeIvI4fEVGkYGg1M0SoraWoi1yt2y1%2F5Bayge9Xpe3QQG3RyUMjklq9WNw063iwUo%2BZ1lnNFVXBMhznm9pCEBJhyPTv5GKIFFyQA7si6&X-Amz-Signature=6d73a870f68bdcf3a3eaec4e7a04dea6a1bc95dc11911377cbd14bba2b0534ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
