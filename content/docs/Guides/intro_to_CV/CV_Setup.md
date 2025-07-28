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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VFUCJD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC15GxWKocbfjempZhMohgoaHcj4L9Q32%2Be3zlEctot%2FQIhAMWEUsD0M37TmBWx%2BVVuVxbj0umVT5eLuLwbfHhZiZDRKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUsmkQnAxCTs29s8cq3AOcHAdPxeBTmRpUEPu4UllCsUFVzLHenaJoyCm%2FWvmwt12FchYe1pov7gwfd5W%2BFAggN%2BZqqlLO04wjvzzf1EdJpE%2BOdf%2FOi8CDwi%2BjbhzeMswEmj%2FEu5720TFvYPMRs%2FIMle0i2UxDkEN%2BDoLjI%2FE%2F0oU5fUoiRAoZ2LygNjrdUZumMnEvNodBDuNE1xYNr%2FDjTQAQZVmqQUPw5P9sJ%2FMMiWmDuzUwz6wFxnQ%2BboN6%2FQGU4bFBzuGS7KLToa2fGWWloCXCH6ELsaIcCS3lsju2tuvjiSyZv8GeHSeUlGaHc5pD131hukh1uTwsC8HcjhNhhnZYi%2FWkCJXZB6Jp%2FRdJNwyu24po8%2Bo%2FrhjC3Jl%2FsiFrsrPCM6pv6zs9Fytqm5YTEUOeamBOTBl77Op3Su37OyY32kdFEyNDcO8RIHNo7uO%2BLR%2BUm6pDKUCGvtwg3XW4VNb99pPV9exeH1AnwLKYv3aDJONZQdG5F%2FMRkray%2BKFVZuRJG0CgR0KGCtGmE5o7jObWu7u%2BOvEtIQVTFxUcsfBJrzU3pb1v5AssVuX3%2FNFP90a9qGeHGztJ6goRKP%2BzrXquEwkCGC%2FtsJmxOYW2ZRKemuzbzwIjjOdV4FxCgfP0ItTd7ewIRIs0%2FDDmip%2FEBjqkAShieFmRfj1H6MS1QqvmyWLqGg4iNshWMg2JRa8MsBrZ8AzY2Er2rR1MNYLaoPtAtdK9%2FWuTxaicYtUXFB%2BfGPQTXnJQGqQoV9662l1f7VxhqTqpry5IQKVtdtDpmOIEw2AYWclAYAbuHIZFzqhG%2BadK3yAuDu6bXxuPIApbEReSBsLDWmatk5Kw10RYqATDn1n4zwurLu9oSchv78ovH6VlIG2u&X-Amz-Signature=be01d6e55b164082e75d3b322ded8cf40e82a8c9631d2d68d8ee7656f18d277c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLJILEU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAt3BSRla8jfKIbaP5izI8EvsEX7G41YvhUm2DKNnoooAiEA4lwEPtn%2F3wYVzFIW0%2Fvut5hoo4q8Se7ZQYXcFzVInv4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMyD9dvYPDUuCHRBCrcAxla765IBFz0XCUMGtulef9b6Bk5Xg0FXTdcwZQBMyC2EQXEU%2FOtExWH0UrAJY52Cou22i4TT2qedrGx5WVtz6D81YUYT%2BWR%2BOV%2BRvjy8DzzYvLTEbiA6yOptvZfDwYEPs%2Bhj5lNTyidIIV%2FemJ0hak9XgLTkU2kyT6xJGAWj3R%2BnwwouuEFEMOMkxDIrbbLhfpbNxohY%2B%2B1RqJTXY1Dyj8jWkUGglyRbc45cOPbcQYR%2BiZWM5Lz8xDc3YAn1iKa6KjX7HJefwX5tW4HtVYjxhqYcT1vq2GQWHYlS2JLNoUapV6Q4t4CYx2mzcyuYOzamPI4jMIpgBjNY7w1zaJ7k4urVOUkooZsHS4XGJHUaOZe3oMeoGKYX0Ku8X8sT8zlv6FVvj%2FyuZ%2BXKnMnk5d1eqfVOocBjzAQYCLKk1RvNBc31LIMF%2Fj2lWfQdTbqgapuGcfSQ5Vgl8%2B2zlJ5SHuq8zSp7mMokM4qCP66ld7bV%2FcOUznLDuJJg%2BkXK7yfuoGb2HCeYB6xTRR0QkgJxDyXGzDEUt37a7JXzpTNXrouTzTrtUSQ6%2Bx7pwDha2CsAyGAFyV%2BRHa6e%2FOVgSd%2BsuLunw4tROFfAT7v%2FH%2FzXpnJ4QJBrMg8AllYdjTeWha6MJOLn8QGOqUBAq0xLFPD33CiXBOAR5j%2FRPmHJxSHodgYhm9bHkyFmyNXm9r2EwhB%2Fw%2B3wlhc5HwBYIc2xj7gqO6na7WVHhzxPQtoS%2Fy2Blm7gfk4QlCwc%2FUQIvSd8t99ywWafWtJZ4y1GZRC34B1PRTRmpzs8iuXlV5cwrVqbTu%2FCaYJci7WuJpcEsoWTQ83%2BQhnV%2BTLEuOGEtfVDGC9bPARb7UQe6Yw%2BEuhxyqU&X-Amz-Signature=f9f43d984497597e8e04b334066b83a014ec5b5cf0209b5b092dc46d690d8dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
