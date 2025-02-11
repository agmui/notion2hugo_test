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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYPTMRU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFzxeMTa%2FzEZ%2Fsgudtrph8Hf5EnCQgP6wSqttjjoV%2BwIhAM0SYi05WMn%2F5eA60gMexAqwlx%2FnLWgNsfrTpwzOcQNQKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSUEVYuJZVs4W2Fgwq3AOhhFgWm6A7UVTsGoBIGaPXdQJ8h5PM4RqwE76MCcbGUDkuOuFkGaKXoNt1BSm73%2F2tv%2BsdF1XoWJw5E%2B2B8uP2eiBUC55L9MWni5sT%2Fu5mDfcfSdxgi0rJoUVZxCRM4HDikWvcAB5PC%2FpGEjDKSLuU685ZE7eM8PWivpq6Ch0LZnJ7q3EAqZEY5a5S5GVga%2B2WiFib8In0XvdoYcUPfFhHOIAZDQMXlbDJISPdRu36j2zPWqnREJrCKCwxbxKMdpJQh4rTNttlS4GqPikr3jO%2Ff4Nhnl16Or%2BKyBndBYJA7UmPipQUVxbmGNh2Xy4HGzt50VW3KEpQedYygQ0HKzuNsuavzxxFGsfZQWMPDadRVDvhu5jb1yC1Og37VlnD5caOZyPRcIbQa9q9iQXXZZ5rRiAqmjpYS%2BelGAJlV6k8bm4Resv3%2B406AhW%2F1jVWdkD0bJki%2FkzBwTTj5gKudjxpCtqGMyzjNz8lcvVIXv%2B3q6ml2n5n6VtVkk3QgGIUSP16LWolIB60j3TUBr9fq2uJNk34P3aYuwXSLXUmbZDGvdtoUAxkDIEvrKgZRi3IZtp5umd056sH3YctZmpVwc5VCR4I2jI2xfbqDs%2BmqImrcepCXBH2mwghBfkIKTCx9qq9BjqkAdGDTvnv3TxS%2BAs9hWObNSkRjaSkG%2F24kotT8cdElDIo33HjocOzwCC8RAcyNGF5EGW05nZ3StaV%2BnTclYL7cs4rLmGqidKIUcSgtgTLSLhWMcVJwQUa%2Flojpvc%2BQ3RKvx86AWKFHAph1DzaYdBQimvT4l9D%2B6hw6VZ8719nDnhvA%2FpUt3XmjoqIujoSsBlODRI9AaQhQ8f1RO88ltByiquy2nvD&X-Amz-Signature=9c87662f3a58c53baa114f55fc089b4d4c148a1654effcba21474af169161fd8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VW6FA5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOmMjC%2BZHg9dhzSesL7oT2Vwtz3lLew7jv6UvqxLBc1AiBIOFwXnmbkmmTyhx%2F6M0jgbY4hpmrkwlb3JmIGJq1MJSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCXa1A%2FW5Xv6mxrpLKtwDWRG6HOPmztxdX%2Fh%2FXq32NQ9f8WfsuglMz6x9%2FPB9pVRyIJ0xpdg6aqTHzw7yqNmuk3zbFGuutsYKeA3GbxNMtx3yVwqvIMuHBnbUhkJXaunAUYmyDsTswvTGXcXzDRyx%2Bms%2FLLnGj%2Bt9YyQC1%2BDdG9SX7o6uiqemcD%2BySxdxCUzTK6dSonA37FL%2BbEZty46HWfAFluwFYQ8KTLoqyDjsSxs5dbf7CGQ37gof%2B9iKlyLXAWn9n2dIdTpdK78w3iYh7UPT02a%2BFXiKqmSUPQgBcPak7%2By4O%2FYqqauUSP5CCFKknQYiiuRLoh6cwCBNGUsuJs9RU0j1NSIkHD8AxZVhiBB2coCDiV7tkK%2B3FUvbiRpVcwvhP84mLWp6x1%2BUNMZGR7IL%2FG5%2Fi63hG%2FU8e6nt0%2BRSUQQpC2awbHu5EczRN%2FQEofkslXFb4Aw8BjRHxpEjlhx5zKFxOJ4jwZ3S%2FDRFSGpHxWn%2FJjkN8iPwBr5HABAUP7mL4o4%2FmVJPUlRhDkJ7cyQYEgrRcOAQBJK1PT0ThqLd%2FpCU3ohWHTpwFiX6BddjKn4nvylg404qYkTi5ypPFG3fI1P8Ao%2FvoXWA4xL0acfJoO%2FqQfIwg12ImKOOIDv3PVewPjfVcr2Zn3IwsvaqvQY6pgFl0wJjcvU75r74jahvvOFaEouNLs20%2F7sRkrNV9785b2kh1x%2Fg0aOO52Y4DAWXCZJA2r%2BXz2e6%2Fqid0l5WDvzroQ3nhZQ2%2BW9Er9y0M7Kx0PPmg3bZKMmiBsIbVWLn6pIJE40bo64vPIImMubui0Ry8Yxk2vv0vfCwUrLXkXjYr60KgbipWBvUuM6pNf8gIhU8cRpmx%2BtKIDhzx%2FmAJ5mAPP7yea9d&X-Amz-Signature=e8d20e38b9f92cdab2d9e4598a04ab1cb934896b9577a5e83282295c7d7bb937&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
