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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFVBLF5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqnqvvZltRXj%2Faoz7dZbhaOuiGs7RBx7JlJ5eyN7M6hwIhAIpv4LGlksjJtVWMzjapHOl7Z6Y51gLDQNJOklx4PhitKv8DCGwQABoMNjM3NDIzMTgzODA1Igy4ww80XLVbY5Tqlt4q3AMLISyKbQ7bjQfKB2IuNzytfMEtiMCUcepeMkq%2FFd8k1et1q%2BXVx6GooUedIdTtP1Zf59Ia6zsbD2iqWRG74R8SIqcLc2RcLE0jRpRfYIJ%2BJ9aPQyq0TAun6XQwKJY6j6%2BdQrm%2BjA23ZW4NL1f2u4ajWlyG%2BXL3G6GHV35ZMiCpGkr6iPjPLxr%2BubmFt8UwjlgZtdff8y25n4MzfiO2zdEtYLXcwula4rLDDSz3qXNm74eHtlVcBEUt3%2BeShaKALDZgnu5uGp81k5O4JZHbtaGUYQvRXhiIbkZwciSs3aNNdF4Pawvmb%2B6iUFHmTYQTtxWqEWBTgnHaK%2BapF3Ab7TfTfh4BrBbbKxp9NHfO1FkUqW59VEqC1giiu%2BWFlGDZCJx9UzuT7e1pBH87%2FlaVMarfRjIrarocj4G07T4ZcItoA6jpTqz4MqomX%2FlvADtX0FXosLwEYJZBbJzgRo3OQjhdCMZPVCEAxSG5Z173Jjq3ooLgyMj5xydoCPu2CPC3pJtqg%2FsCpZ%2BmC92XPchDYQE6BL%2FvIpf121VTFEF9spY4Sbt6duVapWVcbww1lvwS53q1PZ9MQDbpXcYicaOolWY3OHjEba%2Fz1FHLz3wYNBw%2FdqecKZ2h%2FOni3r7DszDVn%2FjCBjqkATQN7v07C757YeBjHrT4DULCfW%2FDiKLwG%2FS3pvBPk3QpVtk7MC205J%2FcnjCDzRLxoCl1xdTgJplfVdvPaauGv5raPKB1Umkb9Ely6b3%2BuLsKFqsUA6vqvHD1C1X5Eas7K9rWCd9E5uafZ2Gyq2RJCc5Fk9dYXY4W2EtVy4yik7mkbrW8fRG3lpz1liyeYKMqidMKoOyIbFE1bCVE4BYMPhcm%2B3r5&X-Amz-Signature=37825d131db3660f80afe88c7548dd817482a6b5d65961aaebcf5c192eb6047a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJZW7DJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDwt%2FmvZ9yddlrqSJlOTx9CjBY%2Fs3j4zgMmC1%2FZK%2FwyWQIgGY1G7s%2BNWjsNpS4%2FDFhN1iWcuUsS5YbNXDZWASFP7mYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFGN6CMJZDs62sKuoCrcA76RLbHu2H%2BFSwbmNc0FX5rpwFxfczttileHqgzZROu5yU6aAHxrfw2adUEYqSjcmvSs3Ig07wkbFiT5qNgqPnZnSHuidF7AfEjYug796DWTMauzTbHskBdpArXQ6cinAAttG9Q2AXk248leUs6bKFRpzoJd2xKWEY3zmSscMNa4cSpF1I1y95fddej4CJ67sDDbe2puqyAnjSkqMGHAynVOc7CNByYZEoX9eubdh1WvUwi4WUcQFah8Kl2L5gxZPSRiK5dTNbTrQeRSPHNyv2SesaCLbRZC%2BrjwCzqk6cmwHUyr8gZxaMSsiol4nZaDTfP%2BKqoQRJN2NF6xAMP3%2BuLYb7PTlNRg5w4wa61ZzoT4BjfCr7zlXU12KiPojBCAra6LHprInwrYda3F4lZ%2Fvf08O0jZGxTJTLOHA3sokbYxRhbB81NSqZLgiMeIt9fSs7SfsP8dlFal%2B4trf%2FNxcnbvaRC7gtEkZaxbcxeYNtWcmTS8%2BTe%2FUjtR2RjScyCNumycmHpgmjVDCd8j6BcbyB7jWcUtrUnPHWw2WekbP7Flb%2FD89YQ3cV79tIZtWZP8BwnjHBQfqTKrdvygHoexRXY8bqWrroyZSJMexVzoa%2FpywA2gkgC6m18RvaOOMKCg%2BMIGOqUBVAV86c2r56ApTwIAlB1Ct34s0hqysPvfZKUlguwxDUw2QLbYBtkSisrkZxK4B9M1iz83H1itFEA%2BOxZhO%2BRbrq4%2BBAw%2FncAzkJcVNsoCateEeAYQQ4MChfQDl3TR4mftdoZKl6HRWSKgY5XFcRZJLMYJDYILE3KvioxbNWzY%2FlhX1dAVPadmcQAuoiWDTcXKNJMJ2CP8peWKWIr3L27MSLaOi%2B9f&X-Amz-Signature=0393c7f5fabfe53512922c85e28535dcb435d427524f631d8577baa7ca2868be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
