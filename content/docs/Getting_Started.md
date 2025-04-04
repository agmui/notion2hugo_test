---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKFMU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0r7UGsfuEFmyATjoJOe0sOKWYGSYC5Kw5InS25dhTjAIgNi3yQL30HebVPOnE5pzO2HmtrcR4jvgiaDhV%2Ben9G2Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGFlR15220rsIKWHCircA4SuBvGnkHw1i4T%2Fpr1NnSr%2FYGnfuCIdBX24VozEXuMco4W%2BoL3vPLkYeCM4grHevQTv%2B77GURVGKrlTjv8HL9THak5uvI6HS1LZ%2Bsa7KQ1pDkGHmKS3P%2F%2FUoDyXqdqHL0BYSo4oYAcCH6hQsZOaZ9Sx7wuVROPxHhuisyrypoV9Mlb2Mi629zPGtavZRPnT9kd9HC9%2F5x5yVoy7q2A4qIuwRQWTX%2FFLrKW6usyGI0wqSPNhodQ3%2BtsX0VPi%2FzSPuiuxL8qgmRnln9Zamd6gtouSclrMvkdDV8BzPeTO9QZkTUuuJNilo43thX4%2BS8yff4MxpOjJtESbihZbY%2BYfedGDeQDjQDmuUchFLPzhzpdJSR%2Fe8f4%2BmvPZ%2FMOn6QMF3DjJNOZFxasKwe%2B%2Br50KhcJxplmm30N3yH%2BLpfxstVXh52BjTdDoRbPKxZsuwCZgNoXTZN4H3urSwOZHcTwC2%2F1S0RqLk5z8HesbUShCLrU8RdDOaWvwusul9oKzlytQHMgO51dBwNyJOg3uZL%2B0PmkfqTRBU5YhR2m2OQxiVvnqZC0%2F8otFM4wFVbPhGcwwLrtw4Atfc8AfdL%2F4bDJHGVKWqu0yR4cgoLHClCCsUtMIrfm9gOkU0ivkq9ckMJ2Tvr8GOqUB%2B1fYy9Ld91Pq97r3IfsKWiNqKdrVxlhBeZpMotDf10x%2B5i9BSGu5j3kXhJ3lduIW7L8SHNhBIpy6UZlZrcw8f26MS7ZNfjTv%2Bvp3y11kmw50ufAJbnrycNWDY0xPb0jo9QcyS%2B4J3KHbVFN6FXI2BXVoDORy3KWzUFj9L%2FZ%2F4M1Lo%2BeDQrlkWSY66QRi5rDiBB4YUrtj68q7QwhRIPV00wdPIZ3V&X-Amz-Signature=2ac2e198c5ac5fe13fc790306c958b25327b27df56197f6d4c25927c8e3d68c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKFMU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0r7UGsfuEFmyATjoJOe0sOKWYGSYC5Kw5InS25dhTjAIgNi3yQL30HebVPOnE5pzO2HmtrcR4jvgiaDhV%2Ben9G2Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGFlR15220rsIKWHCircA4SuBvGnkHw1i4T%2Fpr1NnSr%2FYGnfuCIdBX24VozEXuMco4W%2BoL3vPLkYeCM4grHevQTv%2B77GURVGKrlTjv8HL9THak5uvI6HS1LZ%2Bsa7KQ1pDkGHmKS3P%2F%2FUoDyXqdqHL0BYSo4oYAcCH6hQsZOaZ9Sx7wuVROPxHhuisyrypoV9Mlb2Mi629zPGtavZRPnT9kd9HC9%2F5x5yVoy7q2A4qIuwRQWTX%2FFLrKW6usyGI0wqSPNhodQ3%2BtsX0VPi%2FzSPuiuxL8qgmRnln9Zamd6gtouSclrMvkdDV8BzPeTO9QZkTUuuJNilo43thX4%2BS8yff4MxpOjJtESbihZbY%2BYfedGDeQDjQDmuUchFLPzhzpdJSR%2Fe8f4%2BmvPZ%2FMOn6QMF3DjJNOZFxasKwe%2B%2Br50KhcJxplmm30N3yH%2BLpfxstVXh52BjTdDoRbPKxZsuwCZgNoXTZN4H3urSwOZHcTwC2%2F1S0RqLk5z8HesbUShCLrU8RdDOaWvwusul9oKzlytQHMgO51dBwNyJOg3uZL%2B0PmkfqTRBU5YhR2m2OQxiVvnqZC0%2F8otFM4wFVbPhGcwwLrtw4Atfc8AfdL%2F4bDJHGVKWqu0yR4cgoLHClCCsUtMIrfm9gOkU0ivkq9ckMJ2Tvr8GOqUB%2B1fYy9Ld91Pq97r3IfsKWiNqKdrVxlhBeZpMotDf10x%2B5i9BSGu5j3kXhJ3lduIW7L8SHNhBIpy6UZlZrcw8f26MS7ZNfjTv%2Bvp3y11kmw50ufAJbnrycNWDY0xPb0jo9QcyS%2B4J3KHbVFN6FXI2BXVoDORy3KWzUFj9L%2FZ%2F4M1Lo%2BeDQrlkWSY66QRi5rDiBB4YUrtj68q7QwhRIPV00wdPIZ3V&X-Amz-Signature=db506922e2324d0bec04d397fa6b5936a3aa7cae8309345506afdce62fce4ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMY7CNEM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5usP3xGxwYDpd4r44S6V6ywC6DrFHdNdlV9eh1rDggIgMzVRuKfIVq7Nl08tpAPdSSDZB9tSYYLWLhCGYhRDMHYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDI1erTZLt8i3W4TJzCrcA4%2BfoX1pX2ZeZq%2Bct1Smeur9yIdlEBMmL711dxEl4t8JmIBSwwh%2BNH4Ql9wikuLfjcSXi8xUspBwJyMTaPA2BauEbfRCN9yZqPa0ySTaEQgt3FWXYWbvPJz%2F7i9SkbzIGrpTP8REztWHLE%2B261Ps4Q0yMbaQakoAUwx6ef0Sfn9VDULIKZxN9leYKO8UDa77UKACQiCj8LBVKV8p82J0bh%2Femjc%2FCFhM6lhhHKcftIZrRjoqyPPVSlfcBf6HcAIll7YanHvSq6jcq4hZnD03YDj8oVyzW9Jm11PDn3Mc2RMdpIKzP67T5AtZWQvBxg0ekOkbr8Dzytj9Pq8eh5M5Bb6UJtdL99sV1EK%2F6sbh2FuMdLV6LhgRQAKi%2BGNasz%2BxQGxkRE8rfXwEBRnsS%2BnwaqWvaigTvSMKeR0GM6AFUdDpGe1x%2FhAe2qfhp9n6iLIv6DO7i5T%2BKM6A6JV8LNtyqCFN%2BUZec2%2F1WOrY1WHxTDEEgDKs4sKFyUUh%2BdDHkwLvdLqfIRlOjrZkIeSYVgABYvfV3gx9jZ595Z4RNwP%2B58nSpQEOsSVVtyvQjiv1avLGaCHRYsI%2FVZS6yJ4oeGxfjEw8fuDXCQE0sjWK3%2FKTKxvCVLdquiz0NWDRk9rAMJuTvr8GOqUBxcfgUarIpoekMltJb%2FTMB9smYT8Kw7SN9oCDocbCEXqss9J%2Fq06gFpK1OrLUmfiFHAuZeLUMnd8ptVuGXWJl2zTVJULfjlt4Xeku0%2F%2FjRe8q%2F3Gce1em%2FBFGlgBPknCSBLv5J4zW9cbLRDhXs2DxCMpS82pYCINPCGSVnIjvd%2BlV1Q6pDEnCrVy6NWu2zzlUDBfjPE%2BsfskBGxM0GxTcglXuAB1q&X-Amz-Signature=8885d96ff1488bf349b78b461b617a19cbd5a8e35fc1a8007613394ffa63ed32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLOY3Q2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmW6Bj%2F57ghhw4vCzwgLA3Jnkm%2Fn9uemrdtEnINlSo9AiEAuIQ9PUWj7b38lUNE8QJPiqyap%2FzY4QJjeSULTpsQZBsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKKd4qL966W%2BcGxZjyrcA11vBF5hOLJ2tL46MuLl3hE%2FdV9OqTL5TSk4zTZUWcI7YKeCaN4tDXhV0HHNkHpvVwEDIFU4XbPpcqeDc5GDUnsKZkdWT8LHf9d4WgfELl9BkqDlxML7%2FYHwxIZDIPQouXcD2NO0bgjzzY9YxMBKLwwPAur7afrChceYPWkBTGluQ5lL1kl55jRbNfMdJjplsUsFj8rKb5VdigTT7ZNcB4s7L76iURuSRL%2FFUmIsTdMB7R4YuFEp%2Bumovx4vQPdw82EeERn09gVYjYC9OlTc3Ow308qdNvIdwygujbuxmLt6Z2QGFXUIWqbbiUkZX9o3ezKz5nVYyscCs7i%2FeoBBlfgXUqv%2BVoh7zpJ%2FmgO65iT6X6VB5HFtJt%2BUdVk%2Bv5RH718scVZoneh2JWNa7txr%2BYBx6mTsUZyFtp%2F9xHUizNkDWEV2J%2FOba2koA1GCf5N3aYl695qbQlrGAL8lY3OSUjdH%2FFlUKXjQLeji3FUbofTKOYucKTX8D0mTddUcuJNF6k%2F67m4RJUXQemOPUp%2B%2F17cCm%2Bv0EJrBLbQMW23wN%2BM2a%2BaCQ9FOCN%2FJO08IgCyra50wyOaop1iDoGKCqUoy%2BWp%2Bs59GBtH3nJ7lhEylwD2tsL5J5%2Biz3ctweZSrMKOTvr8GOqUBOnXDDfvsajH8UTNMCvSni651vMbM%2FUF0JCF2OlfMAh8%2FOf1tqMvuvqd%2FvtL9qr9Ae%2FJuBc7OWaMupgwiQpmoJuXXS2wYCILcH8UQiejJflKtnoXBiRa%2BECavu80LuNlOVCSo74SbFf2MEkpIfRX1N7DbBlwtMHjuqY%2Bwm3v7SG0gq62jD2xWnqCoFYH60smAPRtrh%2B%2BB3N2oHPkD99APKP%2BlE6vA&X-Amz-Signature=7f5422f78b78735f261c9c031d5d5e0d2ca2fde318c77086f38f251488dd2f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKFMU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0r7UGsfuEFmyATjoJOe0sOKWYGSYC5Kw5InS25dhTjAIgNi3yQL30HebVPOnE5pzO2HmtrcR4jvgiaDhV%2Ben9G2Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGFlR15220rsIKWHCircA4SuBvGnkHw1i4T%2Fpr1NnSr%2FYGnfuCIdBX24VozEXuMco4W%2BoL3vPLkYeCM4grHevQTv%2B77GURVGKrlTjv8HL9THak5uvI6HS1LZ%2Bsa7KQ1pDkGHmKS3P%2F%2FUoDyXqdqHL0BYSo4oYAcCH6hQsZOaZ9Sx7wuVROPxHhuisyrypoV9Mlb2Mi629zPGtavZRPnT9kd9HC9%2F5x5yVoy7q2A4qIuwRQWTX%2FFLrKW6usyGI0wqSPNhodQ3%2BtsX0VPi%2FzSPuiuxL8qgmRnln9Zamd6gtouSclrMvkdDV8BzPeTO9QZkTUuuJNilo43thX4%2BS8yff4MxpOjJtESbihZbY%2BYfedGDeQDjQDmuUchFLPzhzpdJSR%2Fe8f4%2BmvPZ%2FMOn6QMF3DjJNOZFxasKwe%2B%2Br50KhcJxplmm30N3yH%2BLpfxstVXh52BjTdDoRbPKxZsuwCZgNoXTZN4H3urSwOZHcTwC2%2F1S0RqLk5z8HesbUShCLrU8RdDOaWvwusul9oKzlytQHMgO51dBwNyJOg3uZL%2B0PmkfqTRBU5YhR2m2OQxiVvnqZC0%2F8otFM4wFVbPhGcwwLrtw4Atfc8AfdL%2F4bDJHGVKWqu0yR4cgoLHClCCsUtMIrfm9gOkU0ivkq9ckMJ2Tvr8GOqUB%2B1fYy9Ld91Pq97r3IfsKWiNqKdrVxlhBeZpMotDf10x%2B5i9BSGu5j3kXhJ3lduIW7L8SHNhBIpy6UZlZrcw8f26MS7ZNfjTv%2Bvp3y11kmw50ufAJbnrycNWDY0xPb0jo9QcyS%2B4J3KHbVFN6FXI2BXVoDORy3KWzUFj9L%2FZ%2F4M1Lo%2BeDQrlkWSY66QRi5rDiBB4YUrtj68q7QwhRIPV00wdPIZ3V&X-Amz-Signature=6d75a73550a94d4072e4641a48c08291f4a7168f794e065e5545d567f67aaa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
