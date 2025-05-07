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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXDC4S%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYzXyRFfqQRa2dgO9TJHgL1dcgJND7x2K%2FYM%2FVRL%2F8rgIgdFWCzpla4ZMJJdscFxFuTMLwodt0dj1Ryc%2FIqrnfKNIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJEgtRLaiICutTelHyrcAzYtvM65qE0Vg%2Fvozn3bHKfTGOcyZk1mV5KURF3MonT%2FYO0qt6j0kCyA99GCSDxkl08MJGcGTyEiuIbw%2FJ6x1SHhgyxJQ9JO%2FVdHvazHDvTPIaFOqQvYYepP02vMW0ibnTZ5H%2FQO1xISVkO5XzxeX2uF%2BDkSnbBE7bRr965kPyc6Rmxh91igNk6fhhAkjNqB0wDwCpDRiM0K4h0sjjPZhB7Uvbyu1BsWA3QIuJGe%2Bn1tZ2vW37kK8I6Ex15oi5UU23xJQZQ1ppMUb7o0VpHoUCsls2kc%2BE83%2FP5gpwb6XrWaqFyAqZJ90ZME1EC3s4a5BRhCsp7O2qAABPbXKD3i%2FcFXRgD9PNdYKtJTPcGyjsfme%2BVJCr5HQN1810g8HW75cs97b52y1PowoVFahlc%2BfGrZ4dFh6pYK%2FGJc8S0b9Nu3YNnBjJzSk7LJSO9fo1F84CCwNeCmSNwWvOKF86SySmAz6xsBPjTDFWJ7uE45GFlJplNLeIA7umcnWO5ogVN5xcQK5sQK%2BcRFsGw2wlF0dO3hZQQpOUe76nwZLD1KIHYpm8GDn9Xfua063AHXFLMqpf8PEM7j67htgEup28A61mRNt0PDyYyUcmAAn4mqDaRLlaLaXOyT60%2FMHmowMOaw7MAGOqUByGCXpLSu8TLjIdXSr9PBScuV1zLr%2BNWGGCwr5IKNzXvSADsmWz5sXSTOnMpoIWQlTke4DfNm8q%2BslGw4tiQ80dGOJLcwq2LzNE%2Ff03KMQ5gX9t4LeSTBEndeC8OCO%2FRHj47uxHoaw1gbpthh%2FIha9Kaeh1DhtrauC6EfgeYTSeMzYbDaTq4Pj%2BuIfjeY9bN7nxjy8%2FfoD29BDXo2QdAICcVnyiJj&X-Amz-Signature=142b6e9a05ff94839d30d497324e1f4ef94d82a35ff35f07a29ae6636771a602&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQQFU3I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeuZLu0UrNxhzPG7tsxRO1WIcU2F1PyF3b9Lc9hjTHGQIgO7bOJOkUMWCZYYg7U%2BZ02udgQ9L7eqANMSfkTsQdYlgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN%2BRTvGjXd6LiI%2B%2BCyrcA%2F1Rdb8xdYg6AgfQyNFEMRQp2Qv%2BqIMmYrwRwcAcn5YnsQW7zWZDbt0XI6h55L3gu6WsmUEeowf1QLsbzb1%2FXsc4oasp8%2BlNvvZyLZuNZsuVuVFQ%2Bz48ZpvfsXO5uDCfTtD9oqJ1PuDPGWGOncxqSaJX54CjVEMuQaW2tPIyTndYubE3Cz7u579R84bC%2FoC9338tW2CDHP0xXp4lTpFcgFtRt5twOMxQGDOOiPZYqkmOUTwngP7jjxKf2L5HS3cIWEA78yOg%2BSlILhDfrrCYNc%2BWjqMDq1YLY41ZxwcHY1xmpykc4H78JqB8IGo5Ieh9L36TaGbANaIjjkl%2Baxfn4dtl%2B40pFDFhRFPkVwNS70sQ2%2FWh7JLZw65ufWwQ2rRb%2FRalRD4tOxaL%2FG8jskMc3htXcQDxAl1nlzLTFY1qtBAVsovU5JzzjzxGM0bbo%2BL6HhVuVtfpVBsp6bj4S7e%2B6q%2Bk4h9IpNDHb09WGdJ6XBoL07VqKMI0pK%2Fwp0a4fQIwuwsFD3efisDya8KL8rutA%2F%2BZIrCyE5rh3Iiy%2FqQmVNo2Ib0i8fJBozR95nejN0vgbeV4Abc9toT7K2W6JD%2BfnDf%2Fb%2BJ%2FkuvAUeFrhxp3sOrCaHy2FTj%2F58zcUuT5MM6x7MAGOqUBHL7RwgMEtip2k2%2BoxB6Ce7Y7QgTxsE5J%2FhYa%2FJxQQ6HB2kj1%2F5NPDZcv5ciLnZBb9T3UloTdoEbceUGAQkWoZHlt6uF%2BTdazkILRd4bwHdJ4Z5ByR%2FgbHh94jQN4jUynoD6nYEwZy5fRZ1gGBHz8Sp52NuDp4VAz%2BTGre1MLRm9KQjV%2FXAOyJQKjiPjfXsmbYugPxHd32FranAazk%2FwIyYKLZgUR&X-Amz-Signature=353821dec7185946afd17dbed5fbea0f7d9aa976ba6b0755fe479b24b0df78d8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
