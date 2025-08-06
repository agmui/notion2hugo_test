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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZSTU7Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIC574h1%2B6Yp1u8hZTBMH1PQUTVO1PS5HXEwkO8%2FtEf%2BPAiBQZO1CN%2F4lNn%2BmO47P8CpsyyA%2BtwUwjbIebEOJbduW2ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2BI9IMXYbI4Fajv59KtwDtAE6nVOI3tvLvVfff8yHBMYnSwlAwKGPwbonLCHx5dqL4ntARhdPBc8v%2B7uwTVQKd1WdfHLjoRLd8hzalOuYXKWbVjxLQPNLmZZCENz9m6Gan0qBaKXjgPAVqNOuBXZ0NpvKsOCuoOTwpIW6wDqYayGkrDo3SQGhNAmyIJ0DHDTfTg7H71Z1KCjyi7BPOCostYDyeF3n%2BK10YEsBnT2Gm8bYHhobNkX0wqeIenNWtfhHzCnb0ukuCnW%2FeCYsNfmX239qRzzP%2FbNGz8nvdTIBYNQOs4NbTPcLPjweqPlPMFJKh7M%2B3QqVQBWQkgQKB8WlB6BjN3UW4eg%2BRQ8IxHho7MZiYBXulfTNW1%2FOMQGKVtA5MHJHy8uMViAoSI%2BHbNFZVH2qtxzeqynuGcMJPO0QP9nf36A3j13FIy5pacGYchaIKoNGr9LiqS5dnNQw5C7ZCFEfjAQJtZGohWjg49tNJH8iauf7gc10oCHCFpt6wWGeWYMx4EetEjAA9v6vjWD7rSiSnCx23V8T1DtPHYPs%2FRN%2FleKS%2BWPAUxnLjuaf1EbpYeo1Tgp3rZZBsbMlwrln%2FvuPu6HsJE7nnkUP7RROqBTldW0POzVagKP6j5MbnDA3GT1QD5%2F%2BEXfScawwkMvLxAY6pgFSv3Nyz3FPnq5u4RPFk4UyZX802SJz16oIvjUQ0Ov9WZHkicmeqg4Ahes39%2FFbOhXZkxMY%2FIr84itJBfLsZnn1x4Usgg4UFiWqDvTZ5o7ZEx91ygEJv8iGJ9vU8nfJsSfMmVr74ITdwUqoSlwMrE1O9qud%2BwhdGhPYVDEtrJCvFHp%2BVZ%2FlhMvKBOhiKF9HSIVYvVLyRIb%2F%2BQdvT1r%2FiQFrX6%2BseMTs&X-Amz-Signature=fd412c9376646869cee8f1dcbf25b08e68611aa172309ae27ac3d2fc21d75860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75VBPTE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGW00smt9iKY4KnXiK%2BDy8vLutkDsPz4VR77UcvLER4KAiAb9gv%2FCixxjONwTV%2FxS%2BtE951Bd1uK1fu8MYzODUzCACr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMraVWWUP4cwkAVXPAKtwD3ku%2FzIyyoftnBLOeEVpPChQEVJvlrZ3s%2FJfNPic48YnA%2Fef90YrMyoDnewujFlxQj4m0Oug5MYKlJ3GCmbTJQekpcHYI%2FiDZliRaqc4H%2F57STIQedbfHMiCWel%2FeTMLcIG%2BQ9YEGo2kd%2B3JhAmfwEz8ahppCr9E2NpkDqvOORbgPF9HihVE0xGdeGdzbfKx9n1c8NBNS4EveHzgSDa2DNRoQ7gb%2BBjVIdOcVqBDBiMu8VQw7eeJi9oK36u2buwr7ROnVBfKqvOJ7r3HsAjUuqKVr9G2QzJE49F9kHHbt63NE8NS8pIZpqvuv2T%2FbkU11qMjg5EODu%2Faii0jbPRiJ5Kjd7uovEVrdDqQjPP5XXahs5%2FT8owwSer4SCgoc2Hbcg4YHzQB8rSWFJ9IBuAUB2ooN1%2FHIwN8QDSvqrr852fFUzBOBsBmbdKg%2FRpP1dqWrUDRFPbI73ovQ8tdOGMTliW1szLBOpfjwCsuHgx%2FvVxfb0TbrWDxDbDbBEdpLge9iN703QwRgbQSX1GBckCCf9whtp137Lvz42e6V9ej2lOFYXOHZq3FAKhirLjQkdhnjqHo6UZbs0Fnizi%2B%2F6Kxq%2BEEO%2BoWfhhNEifqt2gILfQqlPYrGM11ZXLxoOeYwtcvLxAY6pgFfffDvb9Ng0Sa2Uo9h5D88Edzgq2OwL8pZFIKy7jjbhj3X6WdFmCT8QnpVZD9o3slbcMqOVZcSuH8B3uGdZWGvtA3eGzxvbHgBAENYpkWHu3wQaZfHlw3V%2BtBS8%2BWNYxZq3MlANcYN90UkEXnLXUugajaAcXPUIpapyoia48NdBqgaRGCy0AxA6Qwm49v7v3mUw4lszARGmWvKSdBPiprXNpsf9GRn&X-Amz-Signature=135492fb629b4d9e91689f75611d606d859b3c954881a5f7508d769c4695d74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
