---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=7f1ae2ed04678155ae88a0808639ac65cc2d3fc0c5c6ff2b6c031c5114318752&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=5d1dc2703700b14b5876bc0e16663781d8020d9c96c21c9c7210ce2d7d511139&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=61754f3abe470f8b383235097f840472a98eb54af62ab7783f9b5550b81e4421&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ46JNC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCXm2Z1TuwpwiGrxKRxBMhIqyO7nWhQ9hpRdGaxq97MeQIhALUy0WfitYuT2ZP77xDdHIBG9kAdAvRD%2FXpsaQ%2BcvZBAKv8DCCcQABoMNjM3NDIzMTgzODA1IgzqmPZEpuQbvaWJtAwq3AMDtUf%2F23hXgp3DcFmATUydyPN0t3oK4UKcJGT9tyEBIkEADnqmjvazEqWZRIZZ5P9K%2BVcTnyfb6zfqWK18Gcx15Uf%2Brzaog4iq%2B6xdV67JAa4lmxlBHiNR52xBEh50ULbHgUMEB6WPedX4C9zxpmnoLbulV4aUiEQWq13C1vQwA9uWdkiIWOhHYxBOl0PR97LnnUgH1BCenQbLgmM03SSWktpY4gs8xkXkj1FZcUqyshFkkFPe6sGpZedxlDLSIs4k1BH7JdXYMXdU4hDhmHG5dOiRpDHPLzCp6sLe1Upt%2FOBj%2B3Q9HD73XPkK1hkL1XKWd1FnUQGljFAJQ4OheaOMJRKnfqtugQs1gxQ5DhXk903CdDabAtI3VR9BF5z0aNrxl01shJaoiNhN5DHaFK034rOzfBHCyZ4bETRkypghI4PSXAxtfrsN5v3XgVyQtU%2BRnYHtTJKU3Z2IGLPaL%2F1VLE17WcOq6F4spbeCAO19SfxjJT0J%2FBPFcUmkuJEwWmdeAePmTtA7OglL47A3lBLXYTv%2BDrsjcRyffbKRaKJYfDA4Qj%2BfNTWsERsJ3vMzxRfl21Z1cVFa7uu7VWHnjPNXtkOS2O9bxXG5IVZUR2YroLnpFyc5TrsD5xAQCjCB3crBBjqkARbV3ZX7vG%2FOv1AZx8FRiwndVKuDq2U%2BLdrFjcKqo5bRUrYKPVdSvHzYa8gvVNlEBRcgWQE2Rtx8AzGqjzL4EiBV2rxkgd2DQ2KtlKG79EKDNMNMdFdjfQNOCiPXgtQguSXj7U8tvIqiAzfetG3owtLPpuhy6ucGaVCL9U6YGfAqWy5Esjk2uRJYCl6rPaert8O8CiaftSW4h1imJdcFBmluu2rO&X-Amz-Signature=027c9871ee761fb9f61f660eaef96d1d2907d79b7e6b95abf430c6a325b7400d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P5MZOV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCID1q1r8vwYBQ12aVBnc9D8TeVs8zuhjQowyoU5Q8K0kOAiEA%2BQM7xT3J%2FyyDBTTjjP%2Fta2%2FvBfnL0HZ4MAAq%2FewjTFgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMa4h4H26fjsHOwNIircAxzuMlrlk5A6UZS4euL4IK2p0z1I%2FcxRKSr0CWctPP2dC2WWgVmCYQ0MPvbrRb58rLj2LvU1sjc7ZxW2%2FxKdrxyNBfyoZPyTAyr52lyU1E8%2FVIm3SXCwJKBb20yo6fI4ii%2F8IDnGbjkJta6ZnNQ3493FOMRRbdZ7STjjas%2FqVbmBiDVJElwc7s4VMlItF4QQFLzpNn4H%2BCkse4JdkzMppO1zlD8x27GY1AH8O8KGEnpoGLqUjBz1XwecEghHUU%2FkzffRi6KSawzS55t0trLzTF80CQU9Uzt1Zk2QaaBE3nnFohqGtI%2FwPgsvRQ7mHqbsf3D5ZRYBa06XGqcKLx0XOWaeVlfgrL4Im8tJZKChraB4BI%2FwOSkj0vtHGPwwdIQLY0FWVdkWoTV41vjT3R5IbWpTL%2Br3MYQNVruDqPUGtfvR4UWNJyjiD0pIx6dA2WuSJ8C%2FOedS%2Fp84ymL%2BV5O8lv2a0V32V%2B8KaNf7P%2FOxQ7X5gb4fkqk24jrVmU1SzurTBlPFKNvpiix4U7MmaQuZZSzlOh0Ye6qZ4B%2F81t4%2FWbhPgoRj1%2FueRz%2BizyUc0%2Fui7tyG7c1%2FatqzN0xAugHyt8rhNjqvWj4MEoLabKRFsQ5yrV62JnlWgI9cLxwMMPS5ysEGOqUBdO2p4E40EBRRU9Pui8A3%2BvsayhskYq07nOVd1W94r8%2BfErkqa%2BQ3ittOXcjTHsF44z4lKdIGh7IwYkZx5FIJ5nFVHMN%2FHKenES1VSR9GOPEgXl8Vo7O4kIOEOq1MGcN2VPJro1BhjtoIFjs1K2%2FxVqsRHleAFOOsg7A6KXV4JLGRi6eVIyjnBJCcp6foqyY3RDFeZzS4oGF3l3NdY8KTTa62yYMy&X-Amz-Signature=42fa3205d404516382ddba0251bdd15fb314fcdfd2eedfe5d445e2926235653f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3AVLO5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDHXCM3jlZerCC9m2zjv2m8FM000sMLQCw63k0TEJR8hwIhAI3Vl0M9LkHgoqFvbVjVgwWB5jDwYvO85RQ%2BRhSZ03%2FlKv8DCCcQABoMNjM3NDIzMTgzODA1IgzW7BiPLENdZzxKezUq3AN2C67wcrJt%2FeaHiYvy7yjqq3oz%2BhR6ruTqqL5mvYc8trRDPp3s3fHRfmPBgQHG0JvzBT2ktDcDOr1W2KqibzSSl4lb%2BPVDXrZrnVpJYkjxOp3eL5P3sUpZ7kxB%2B%2FEsOruYlXYgTGwz%2Bq%2BnbG2tjlw0dh3bRf1GgP7UiubL9Vjlo%2BfSt%2Bcdh98BJYETqJw3EUjyIy%2BvuqVjB3VMmWatrbNee%2BJ6PmjauOlUtcNwdSs8thuN%2BKE63ENe00xbyj128qnJJTGvnMGI42Oq9YHp0W6T1kC5YJFulnQS3%2BFGLlofJAjjate97RG0%2B%2BaCA85R51FsBP%2FUokdQDA%2FbKCrmzblxFkqb43IAXOHikQ%2B7kZZSixWCX7mOJqfl7NyRyqMvsMzEci1dsrg1rhJaMtHq50sp6YoT4P70E%2ByBCH0RE%2FgAvBMOWl9bQ0kuiUJ74LXRaGsN5SkTyEfP4Zg9g3apRb3mnkvC35ZeYKvBmsPtJCgZ3nU0p0lGqCSpAkQmG47JSm2ziCmlOUkl46JZOeQHkKL5DFwK%2FgfUkUrm9WUUwcbj1nmIeDUwXUt8NOqYzqVA34gfHxe5R2EHeD6WQgRdwIF%2Fbze83BrzjIYDHxeicb9mtE8gdNE1f9bmLGfHtDDL1MrBBjqkATYJKFpR%2Br0Ysa%2FczQbcx%2F6Dd86HMXNvQonnL5IX7R%2FSC5yxKFuQOBCGY%2Biln9CYB%2BH28JyGlK8lYSv%2FuSqwoRiOuZdw2Ut%2FikoKFaM%2BPzE9qkPG8DuMQ8lV%2FtLI0AJ3u9HiJd%2BW8aR8WdsEYRvoiFLluTk6Ne8ZtEQP7nWSZWRYbC8AsbQuVvGrGjgETiIgNodzMOqSeFB0iEsvEWhANABLwApR&X-Amz-Signature=4d5c34b4adcda08ed89092c1f84fdfb540263667cece3483c77e99e49b13f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
