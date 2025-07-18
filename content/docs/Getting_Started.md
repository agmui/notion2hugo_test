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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75Q2SC3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFWoh5aNg1MJLGm%2Bk5nmb8cAD2aKuq2E9IrOS9b%2FtdL3AiBhikgKKn8NqqqBQGFFRI%2FnIze3zpFwDf5Zz%2F0zjbT6MSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhdENxBlBi%2BNlnsiKtwDv8Mn1kIgFaX0jTCGzsiVjvwCRluw6AbMy2SV%2FLtLMQx1m6SaF9PX%2Bi9XPd4r7YVf6zbPfBsSawCQCPx3UpqR6tgvybshiMqqr9w9EyF9gDAL3PPFynpvGkgl%2FgjNX%2B2cvwArkauCsyr91Pi1W%2FKnEWh79FrJHdl2T594HZ6Q6C3SgMXEL3MJudTCgFx7IsyYP4qASdyqUIh0yHw8bH%2BO6pwST4wQ6%2F7kzA%2FlRjcQCYz3YVxonbSWmYcPZ3w8LVRKZShXFH5A2PoVBTL9ZliA%2BVKAXpSdy8j53tU6E1ObaGnY71VYCuiW0ChH2t0dparUwpXczjV6s6gxTT6u30ikyqYnPdnYyFfRwAV6D7eeMPKzjYY17wpDdHJdThVo4swIcaLHOZrhLjs%2BLl08cqvb9quF%2FIz8nF6o9gswwSp0SMyycw2sqDjolZZAIuaBwhzAkjXPTzyKOOGZGBugtQ%2BAJSGUdMuSuzzd9AQ9wkRPRpDdcdA4q9fI4UFBVVczz82fQ9GzxoJlBBR%2B1lz4UgXUFkxlYB1Mdys8XWBcMGBrhfp4N79jQxASit6zjN9dk0N9rXrR2AuK3nK%2FViG5sgzP5SNK4QMVsPHZhSA3krSq5X5p6c5vBHOj17F7FFUwvJnqwwY6pgEWiUa13zc6SMg%2Fym1L%2BdaE8w1KKYCrdI6JbXawYJlpr8xK5bo%2B8xAeS1Nn8VcX6G6HW8IND1LnYY2nLd6yUsbWMtXkDZNSKohOsH62XNNgRqiOXS6hlJvT2nighBTR6nB04k2xtuA0tUpvmdSnGHZYM2Hr3pfgLQUV1hYN7AISlQ19gCiCW7p1s4xw05%2BERu5hi2G766KogtOo%2B5bxnxjJpXULEQY4&X-Amz-Signature=927bada70e0e42284efec4614e86d15eca8ca8decde6a925daabc047be661dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75Q2SC3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFWoh5aNg1MJLGm%2Bk5nmb8cAD2aKuq2E9IrOS9b%2FtdL3AiBhikgKKn8NqqqBQGFFRI%2FnIze3zpFwDf5Zz%2F0zjbT6MSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhdENxBlBi%2BNlnsiKtwDv8Mn1kIgFaX0jTCGzsiVjvwCRluw6AbMy2SV%2FLtLMQx1m6SaF9PX%2Bi9XPd4r7YVf6zbPfBsSawCQCPx3UpqR6tgvybshiMqqr9w9EyF9gDAL3PPFynpvGkgl%2FgjNX%2B2cvwArkauCsyr91Pi1W%2FKnEWh79FrJHdl2T594HZ6Q6C3SgMXEL3MJudTCgFx7IsyYP4qASdyqUIh0yHw8bH%2BO6pwST4wQ6%2F7kzA%2FlRjcQCYz3YVxonbSWmYcPZ3w8LVRKZShXFH5A2PoVBTL9ZliA%2BVKAXpSdy8j53tU6E1ObaGnY71VYCuiW0ChH2t0dparUwpXczjV6s6gxTT6u30ikyqYnPdnYyFfRwAV6D7eeMPKzjYY17wpDdHJdThVo4swIcaLHOZrhLjs%2BLl08cqvb9quF%2FIz8nF6o9gswwSp0SMyycw2sqDjolZZAIuaBwhzAkjXPTzyKOOGZGBugtQ%2BAJSGUdMuSuzzd9AQ9wkRPRpDdcdA4q9fI4UFBVVczz82fQ9GzxoJlBBR%2B1lz4UgXUFkxlYB1Mdys8XWBcMGBrhfp4N79jQxASit6zjN9dk0N9rXrR2AuK3nK%2FViG5sgzP5SNK4QMVsPHZhSA3krSq5X5p6c5vBHOj17F7FFUwvJnqwwY6pgEWiUa13zc6SMg%2Fym1L%2BdaE8w1KKYCrdI6JbXawYJlpr8xK5bo%2B8xAeS1Nn8VcX6G6HW8IND1LnYY2nLd6yUsbWMtXkDZNSKohOsH62XNNgRqiOXS6hlJvT2nighBTR6nB04k2xtuA0tUpvmdSnGHZYM2Hr3pfgLQUV1hYN7AISlQ19gCiCW7p1s4xw05%2BERu5hi2G766KogtOo%2B5bxnxjJpXULEQY4&X-Amz-Signature=2f64fbf8ef33810cb50e7859f75110e9bb811d144684b1be06a1d0ff4b183e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75Q2SC3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFWoh5aNg1MJLGm%2Bk5nmb8cAD2aKuq2E9IrOS9b%2FtdL3AiBhikgKKn8NqqqBQGFFRI%2FnIze3zpFwDf5Zz%2F0zjbT6MSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhdENxBlBi%2BNlnsiKtwDv8Mn1kIgFaX0jTCGzsiVjvwCRluw6AbMy2SV%2FLtLMQx1m6SaF9PX%2Bi9XPd4r7YVf6zbPfBsSawCQCPx3UpqR6tgvybshiMqqr9w9EyF9gDAL3PPFynpvGkgl%2FgjNX%2B2cvwArkauCsyr91Pi1W%2FKnEWh79FrJHdl2T594HZ6Q6C3SgMXEL3MJudTCgFx7IsyYP4qASdyqUIh0yHw8bH%2BO6pwST4wQ6%2F7kzA%2FlRjcQCYz3YVxonbSWmYcPZ3w8LVRKZShXFH5A2PoVBTL9ZliA%2BVKAXpSdy8j53tU6E1ObaGnY71VYCuiW0ChH2t0dparUwpXczjV6s6gxTT6u30ikyqYnPdnYyFfRwAV6D7eeMPKzjYY17wpDdHJdThVo4swIcaLHOZrhLjs%2BLl08cqvb9quF%2FIz8nF6o9gswwSp0SMyycw2sqDjolZZAIuaBwhzAkjXPTzyKOOGZGBugtQ%2BAJSGUdMuSuzzd9AQ9wkRPRpDdcdA4q9fI4UFBVVczz82fQ9GzxoJlBBR%2B1lz4UgXUFkxlYB1Mdys8XWBcMGBrhfp4N79jQxASit6zjN9dk0N9rXrR2AuK3nK%2FViG5sgzP5SNK4QMVsPHZhSA3krSq5X5p6c5vBHOj17F7FFUwvJnqwwY6pgEWiUa13zc6SMg%2Fym1L%2BdaE8w1KKYCrdI6JbXawYJlpr8xK5bo%2B8xAeS1Nn8VcX6G6HW8IND1LnYY2nLd6yUsbWMtXkDZNSKohOsH62XNNgRqiOXS6hlJvT2nighBTR6nB04k2xtuA0tUpvmdSnGHZYM2Hr3pfgLQUV1hYN7AISlQ19gCiCW7p1s4xw05%2BERu5hi2G766KogtOo%2B5bxnxjJpXULEQY4&X-Amz-Signature=b21ecc27fbd49c2e0756dbae04445e55c47af2b1a7abd053fc18881a0c83857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMULZOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD1UOSSguUoSYaFcielTnS9tb9hmO0E1XyFKCIBdlPywwIhAKLkmAX2xSrWZColPN1%2B%2BpoOnGhjG3IE0hxWXRfP4KcSKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL5jTG2mjQDYXO2Ioq3APvaKmT15CeX4VAiWBJX6uuyXPR37tc%2BaXZ2GNAl7rH3VOrzLAkuc6Q09%2FcXQ4u9bFvCC1Ban3VI%2Fe620GjdTKVIJheCs8R562qOk4kGI%2FHC2FzFTkbqyonctneeDwx%2BFdEffP8qHDtBZZAp7g46hi7c0sTZr13%2BUuUNLEcQp6yDbf6LWITPyOgapBkCrPKlecENiX2Msw%2BoKAXLq6WgPqXhDa9GU4DwDA52%2BZk7aAfZiGsZRbcTAfljxGe%2Ffd%2Baz5GPPGaqhTwKSProNXqdAq%2FkLX%2FOKwVBejqWIQiOEZqDV281a0RYkuUoSkc6uEaMa3MslMbBzRGvzrZO%2FmBKG%2BSd95kYx2AOGaVTYvTASuvaTPgLooFL0DavTPROCwc2WhNtDJLtB4Fq3spxAkE1URqH6agrrFUCshRQakzYDgl4yvYXjwqnXQHE479IFAZREE%2FFWKtBCbO76c4BKXWC5ARRg%2BN%2BKibML5D93rvThs3g5OG%2B52bOAcgupBwMfkfOwRqu7nmGlsuwd2y1EoDZVZq64ZwLHXVHgsouWtEtgWQPTAymd1OM5e%2Fnolt%2BdpgDk377uymlGy27Bd0N%2B02xsph%2B1xLv1Mk3Q16uOadBvO1Yox%2F3jKg72tz2gTYkjDJmerDBjqkAXjOJi4S4rarJRL19VQKau5yJ8dYDXRN5oXJEtTE0YSolZ4D0m%2BblUTA%2FJkFqNdqIzlXS8GGOEWnm%2BGw44UNv%2BCWSaiOH3EOvpQLv3pKktBTJ4iuthkqrPBzCqvxxUYwayq88HKSxr2xG4Bhfbkdnw95dnsM%2BnHJFno9NFXyCYP%2BqmZpwzPanWjbw7rM3bLtPxzKj%2Bj%2F4LML6nVAhQP4kv9dcBXe&X-Amz-Signature=8ca6811c0f89875f6101e2bb9980c88e6fce63f9091c05247acf8cfcb8326972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWZBAQA5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBS%2F%2F3g4VPIWYqlGVzUsPJR1Fosbi%2BmyI8M3E5Fto4wHAiEAgFkmdWzJ6eZMrKJq9y1bxeX15SPs6bRVTOjL55k%2B7uwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM79UhU3IrPuiKV4yircA8IKEKxvkpP5yzYolY1Ib0NrcV3rw2u%2FstUyCoefm5%2BqqsyGy48azIHcz7JNVdU2BfE76ClNMJHK3O%2FM0hNhCr4eDjUrwOutOW4Ykz27oLi4%2F19pE4EJI9Tm%2FuUxtDKJgaOmcLhnxvZ6VqyBQNU8OearEpP7j1szgLaRkAPav%2Fe9MvExk7sufK%2Byz2T%2F1GjZypolJA6RTYCc7mRxA972miocBzS6eQrCS4k0DNYzxI8ULfrEfSzhGALEcQ8iNJ3fE5Z5hDyqWrUdUX4ZLpaKs0tHpIGDnlNyGlOqqRT9EO5oKTzwFK9CiUlTXWBdeNXz0d%2FGUuRuLgeOlA5PTw2dw8UYDXsFB7%2FMWkodwSBR6xwBYhcRln8TuMRVFakvftgJb9D%2Bxtu49ABIdHO%2B5xvDHU3lbmK73C8PNEtn3CEwBW0t07QqgGDNluPl%2F0cg21KrviTjehJGZ12mbM6%2Bi7psBu8JK9BpoKc%2F5t8fMkjzq3cXuLZoBhstRF9aNpxJ0Nu3I20AScmnF3v1lnwpqZbO5x5PJLKHf1jXw2%2FoPKo5gkV9GIE%2BRezsW5dfkp%2BVHomexUdQCiyNLE6XL%2FL8o%2F4q2nHTDKGzrg7im1rCk0Fp3rbIwQDJceDM7Ho86CefMJOa6sMGOqUByoCO3lzNt4J6LbmICZeQjDoORjni68CICrxsf4kDjuPT8p4vXIPkrz4C078RgPZxlTpRY%2FE%2BB%2Bk0LLzLY7DKpS2vtJOVYGrQerX%2FSn%2BHleB9ad8Zpa3uKFQXusaPQ%2BsHl2ySRjsq%2B5aDcAOgyAiNDx7VY6YXVXJPmnjFQlv%2Fk19AgP5HddgxQxz2OvGzn%2F3Ylu8S50SZc8gBZsK1hh2Kc3PvGp8N&X-Amz-Signature=b4628fcb5b079170180e1e0b559700fd8ced47735237240a6021a36756bf7677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75Q2SC3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFWoh5aNg1MJLGm%2Bk5nmb8cAD2aKuq2E9IrOS9b%2FtdL3AiBhikgKKn8NqqqBQGFFRI%2FnIze3zpFwDf5Zz%2F0zjbT6MSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhdENxBlBi%2BNlnsiKtwDv8Mn1kIgFaX0jTCGzsiVjvwCRluw6AbMy2SV%2FLtLMQx1m6SaF9PX%2Bi9XPd4r7YVf6zbPfBsSawCQCPx3UpqR6tgvybshiMqqr9w9EyF9gDAL3PPFynpvGkgl%2FgjNX%2B2cvwArkauCsyr91Pi1W%2FKnEWh79FrJHdl2T594HZ6Q6C3SgMXEL3MJudTCgFx7IsyYP4qASdyqUIh0yHw8bH%2BO6pwST4wQ6%2F7kzA%2FlRjcQCYz3YVxonbSWmYcPZ3w8LVRKZShXFH5A2PoVBTL9ZliA%2BVKAXpSdy8j53tU6E1ObaGnY71VYCuiW0ChH2t0dparUwpXczjV6s6gxTT6u30ikyqYnPdnYyFfRwAV6D7eeMPKzjYY17wpDdHJdThVo4swIcaLHOZrhLjs%2BLl08cqvb9quF%2FIz8nF6o9gswwSp0SMyycw2sqDjolZZAIuaBwhzAkjXPTzyKOOGZGBugtQ%2BAJSGUdMuSuzzd9AQ9wkRPRpDdcdA4q9fI4UFBVVczz82fQ9GzxoJlBBR%2B1lz4UgXUFkxlYB1Mdys8XWBcMGBrhfp4N79jQxASit6zjN9dk0N9rXrR2AuK3nK%2FViG5sgzP5SNK4QMVsPHZhSA3krSq5X5p6c5vBHOj17F7FFUwvJnqwwY6pgEWiUa13zc6SMg%2Fym1L%2BdaE8w1KKYCrdI6JbXawYJlpr8xK5bo%2B8xAeS1Nn8VcX6G6HW8IND1LnYY2nLd6yUsbWMtXkDZNSKohOsH62XNNgRqiOXS6hlJvT2nighBTR6nB04k2xtuA0tUpvmdSnGHZYM2Hr3pfgLQUV1hYN7AISlQ19gCiCW7p1s4xw05%2BERu5hi2G766KogtOo%2B5bxnxjJpXULEQY4&X-Amz-Signature=742d2e8237d512c42567438311d9f925755b58998c9cd5ae2cc4e87475ba994f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
