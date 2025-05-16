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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWK44NE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6s3MpoygNafPRjfDYP%2B3He%2B5Vp%2B4n45ClD3fhV8PE%2FAiBiP7E1N4x1yJ%2B8ulXKD%2BWhV7mQmqCDmXUg1wLBQYdZ4Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMMVON4yvd5UgPC0yIKtwDUJ5sgi137bDBuOsG%2B4oxos3SntF285hAuGB2u5I4%2Bg55iBrIgt7D%2F362vfb7pxM7z6KHQA5zE9WYHaP%2BbbkXpGLCZk%2FMXR1tBjSOCQ6P8bplrygkpXYqKE5E8a69Ois4IlbKayKKd%2BJ7Kee%2B%2BJUq%2FZHGfH0LhV4FlfJcc%2FhcwPv75ejD7OMrlO4H%2F0gbyqpf9Ljc9E5BLxS8%2FVLJ8FrkbftZV%2FuP6gPz2idIllqGAJL4J2EnE5mFzw8V1DiQTVHMc79JKgOoJ9VepStUVnaQsJvlwlUSZHEF%2B2XTZ2VuWjzau3b%2B10BMeuDN9Ss%2B8tK899yrX5092OROji%2FaXUuIWdS5UW6LRpkKdTguUZGe%2FeADy7WU3m%2FiapHdNMj8Lj26itt9rv1RrxhBdgQiiPdnDYJOPZ7D8gVPA35JXLiZm7x4X2wAXz7tNRkaxQAL2rgDA4cBOVAgi651WohOI73kPOl7aRjlWDYyAVh1gO2gUTS3pJ9D1l3nbEwTJHZdXi%2Bg%2FqXhfl12PTigDjvARfJ5x3ZFGw2qN33T9bXCGSELUtNA0WshX%2BFBlIKf6JGiPjQxyidZKACqOsBrVnfZjnx%2FepCL1mQ9JI%2BEX75la%2FDqgLQFP0JheoI6V9ygsQUwubSdwQY6pgE5czgoy9IZWlMXl4d3QBOYMjGBlP5e0%2BgHtTxvkW9tEwj1OlmzrH74wSEQ7OQM%2BEhwZDjwbPBmBhHNM%2B8vhDhvD%2B4rjB308UpXNjDpRi8Rx07%2FQvGzJaTQl32Enwl8Yjnk5%2Fr5bp8dgVJ%2FfgJBeHLAO1W%2FQSnInJvB5rGlQTxrl7wbh7voSNSVTBT5WFtUz7AS93JhrD2Lc7kl6%2BkDDpA5QfneFPrm&X-Amz-Signature=8b7ea18ddedfd2d7c25e163d7faefe4096a167f3f6b67baec4df2339eda1870c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WHTK4RK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSuKO2AhiDKAR5uDJ6kNEQvGt92NTOVOPUqWZthQbsZwIgUbbDdQRqSeq6%2FOkP05Kpo90%2B7EjR%2B5cQcvX6Qrbs6wsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIX3BIJNxz95of0yhircA6jTS%2Fl0NRupiwIM%2BeSZ6iGZV66tuZS2qAQ556hnBCic1sKyRcbVEt4GrUlTxi6paMEEoy1rwy0vF5ab61IXe4QqvkYz%2Bmxmi3%2BVuy2Bf59WHjnfU30OveVdBf2qYv59DzLTMcR8v39ao2thPhu287Vw6R12isUUhWxfdyPRHPyjiXopiGQcDAE6A799Yj5Fi1dKWtoi9%2BhmIsfIFamVNBM995Zv0lcvM7Fi7JziKpv%2FI1aT1bZn%2B94OV%2BXuDQceUOTup%2F6H8aO6QkyWKfbUTQujNnINZPA3srP7%2B%2BlyhzRZmW%2BhBHAOsydKBh%2FqHPTWQe0p%2F2qrBGKFTWxTpY2yLMBDCa2yvVw9QzIKFTp%2BX5gI2pkt2YMLUDHfB8STr7hIAXR3OO%2FwmAEy5YT%2Bja4ZYqlZK5buI%2B3nsQIrEQm2fDyis54UaxgVMsm71rjdpXVVyZc9FwwZFUN11D1EpZH2sNh1LA1dB0ufkcf3linW8J1CmZmsjdXfLVBkjwSwvDaBRkRi9er2PfP%2F5vtXhliLiRNPCqRPPaqM9aWuu7tdcVlMi%2FDLgTFuwCCCR2Sc%2BuAiAtfX580C%2BDEVxPfcZ%2FhnUWQwPioNNnSdpSwxwAqW4B41BPxq1vPErbNTPoNmMOG0ncEGOqUBGzy64Jni0m08UVwpK04Z91lm6wuiPdqwk1RbS476Tr1sAJmW2ZCy25hU95UV9j032kHrxNVPxV8kk9sZWLZMTtJUuar%2FYYst%2FXkS%2BbGauEggTT3Onvr3jsVXx1rS%2FADfZ0dCdRuVFyEwnU1v8Li6YZUWrBMkp1xXCgyNwMNeWGnJj0m3tGoVwQHbIEm5fhF5XeVQbEnwT%2B6lxCXESWUiZBpAAMlC&X-Amz-Signature=66783501feefb5988047cef0376d90a4f52d4db53b1cce6c4bf66d57fa75da7d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
