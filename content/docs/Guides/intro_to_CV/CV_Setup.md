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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5UCIB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCMi4a%2FxspKstTOOt03GW3Y0ptuRxJc%2B3vLH6MlJ7XCWQIgbQBOtzN5RMS0SEG1S%2BjXyiLgdxN3eh9VKn3BZALU7F0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJR9yFk5n6TdF4TkqircA3lj5gaV9zOklXKeBE5nfpV9JMl8Pkxi0JqBAehvubRxgkU6sAW11g0efmpSLlY2jKRgWHhsF2jZE%2FasEDbu9dbBtWalPiAN1jPK4R5idKx%2BOhl0HKyXexVi7XTxywPh9hEWKg8UJpu9wTKiRi4SS%2BV8Z3NZ37zZGc1QkWvRr%2B4DJyiaXVUomUsDohc%2FG%2BQ9Ykl0CVPH7wVdcfq0MdLFJT2aa7kg%2Fo57PfpWhE8OWXvweo6HddTFY%2BCDnZ09BX%2F0jf2mVMIrdnZZsWqcQ7vMyMkipjjJw8QuQITzljvHL0jz1709mqXSAdLErScvddqX95MFGpItTB30zOJU5cyhnHKdESu%2Bm5OCsdRwCsdOC1av85CHAsEuDMBBrxlUfN%2BtFz81GctQlWi2GMIU1e5pE%2BXIU1XVL0TjOOQKpogqxU3qJxDdD3nPvpVVKLZFQhZHUhL5ze4LZ5%2BIdKXEDKEsSsGBQZlrAczdUUUqd4FehtZigYlHnFT65o4Zd4S%2FEGL41mgjdpCoeHcasjYH9I2nKgC4SrtjTVvq5R2z4B3TM1oh%2FTkdEvvPfx5JoKx2co7epAwxeuVu5fM6W846xuSroMRUwnFsjl0HlKn8PsjCEzTqChzN4lQTae0SDso5MNj6vb0GOqUB7V2DQDZpumH3L8tUeHqbm2H9pQ3SiFlAkWiHfkVzMKQmcNDXKbzjpTe9jaB1yrjV%2Bocoabs3dO4S6LauQuuPK6XsLLkjFDXMRM9eOYAZg%2F%2BDrCCXwvaFPFlr8n5sgWk839oPVlFZbdDfqzau%2F0HX15Kgbqrul2HQClD11Y5ynB%2F0XaUo0Jpe7ABmwhKxcUYDImi2f6cxIgfFZ8hIymSYzl%2Fr8sC5&X-Amz-Signature=35fc4b1440d9397ced10c54abcd94eed1d884f4481d345b5987a5902412d5027&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMI7M6B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOtAKmlDUrUmdiZSA7PMM%2Fl8EZKnz8kki7RKBclJxaMgIhAPNPz%2FpnsV2hiKAh1MBJgnR2s51YWNHVsrfeXCqryCjtKv8DCDMQABoMNjM3NDIzMTgzODA1Igy%2FgpOP5srBRoT61BUq3AM%2BYxjVWlNVkJeSmEWp6ZVoUvoN2qNH46Dbdmb2mi%2BvmJ0hVsvYzZUaxxMTnurKUBrao8Ej8zVLa3UwtPA3e0m0R4GXtUPmeNMHliFr5iCy5HbBTK6RTDlAKWmAYkbH0WfW0Tsn%2F9bnTK7yErL4dky48%2FkJlO6cqcx%2BYsCFlHhwCb5svmIarCh%2FPJ1b0N0O%2BmonWobe5whvh0ahudvZcsdRTz7YLVfPO0BOsTmx3HxPB87Ik5yA%2Bsbe7OfvYAOR0jSS2QNyw%2FkhTMN%2B%2BT3ozmSy1Ga1FTrbHPPqJhf5N4YPIVXtBNNMh72gWBzQdw9BpH%2B6lRZI%2F221oIPUHag2wqPe4KBZKrYl7T3ybBA8nFLjbaF0j4MaidZxa3WGm%2Fr0v2gFbW96pZhnKE7CLqbW1c2qIFLIrS6IraCY8sxzGOkWDPv1wSkQVQDn8QN2bCCewsqhxmLQJXzwLVSOqIPyOec0oSzoZTHIZVCTDHeARnbY7KB%2BiBWppL5twlrVm%2FNCjQ7lm2yqh9IRJwqtRU9%2B6Ppga0Om7HyLvUD8n02%2Bh5jR4g13wJNVsny46GsEwLzNgEIYgCBf0hJBoStTLGsbG7Dw5zmxWf3UsdLcqBs70a3a6BJBpzgyJVlZ%2BJoU7TCn%2FL29BjqkAX8NurfJ0Y6AXbQydkVvzVTgG%2Bff%2Bt%2BmCFoBitZSXtXbl6Siu1MDAQwTN7bdf5wJzTbHyZXCqC%2FFoWjIBbBj021z8p1OIAjnLgukLrFCxdC65k8Fb8cZY439%2BsusAjaAb3DPd2KEX318qvvVXwyH86GAbxo4K%2BdCrdiwvx2HZJ8k6nIS6QRl5nc4E%2B8FtsEZXM5jJXl4d6q6I560Kj6OGfESwIWL&X-Amz-Signature=9b80f7a063e811a14f617e306986434476617a9d057d4b4d32ca8ac81cded6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
