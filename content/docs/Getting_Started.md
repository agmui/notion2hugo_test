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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ILO6YPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2Fq2nLrPNnw876z9LgJO63ye74k1jgOOk0kqW6rsDcwIgFwxOnd%2B%2FgF2bpm7iLWx6OjyWnL4mCqVUg%2FksD6xpW3cq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH%2FZ%2BsUDcrCnSw87bircA3179VWXj5%2Fls7A42G9DZNWoOTrzrSsaspoTcrw8nfiGy7C0GwysboyBD67kYWayVVS7gPk27aSE%2FNvRzfGWqT4Zn8Luov%2BNW16tmwtKZG%2BYGSqVawm6FXSq%2FVS3Z5wW5mUArxIv8nlKHE67bBREfPUsr3xqTpoU4%2FCh1lIUTOY5Fdv25AB8RSFszwnX8HT%2BhJXEGuTCcKXlBF%2FKUMlsbl0G8JYtkxpqUaD13KygYh6sp6rdj%2FA4DrwAOnwOmaOvWJNT5kmG8sqVTo5uq5kSVeqiN48TgdDIptA%2FO7nvMJXgYj959U%2F%2BSgibd5oBOY4RhLOuOIEBkDsy03fSCbBtgT0xFWqmqN%2FVeE4XUluTBpm%2Fhf2eTAoY2ZSmPBms9ioYNid26bGL0pYm9lew9Gk0qo%2FHXDYg164b2l5Aknv8FcrJgdJeQRvib8HlYDvI88FkAzNKnwdKbfm1RGZU3ApsdF8N%2FeFMOUEWMtJKter%2BA%2B%2Ba3d3Ix%2F%2Fi2RZWO0cnAUVwzryEbUwj%2BZ9tFjocJCuWMiQc6JYkocfJhlxfnmCVtyTic4XuqXmmuhnUBLjexj%2Fr8pS39nt13jTMw6%2BCDsM9nqptS1oA7vQcAzExhF5CX3U9tlUI%2FF3Xb0Z5bb4%2BMLev9sQGOqUB7z51iWJgDM9TG94mFtbILOpEUC0qjLVC73S%2BgXZghzubAgOkt%2BC31f0SHnFGHN4Ozid5LzYNkyeMzalFo4s3CXteVFy1GfTmq%2FKliSPNX2MZKvc5p0lclKzNBoFk%2B6ZIdga%2Bu1EbnCHJi4vG2unGveY554PrwGzVw5R1MSENtJC4hduzIHYY1bdj5zN1HrgnQoWmqXL2ByDa7e1xa0aZmDcENMkH&X-Amz-Signature=dee7b9a81dcc31107b45745c8cf69aa42a8a84a79e31e95e428558aa6042e8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ILO6YPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2Fq2nLrPNnw876z9LgJO63ye74k1jgOOk0kqW6rsDcwIgFwxOnd%2B%2FgF2bpm7iLWx6OjyWnL4mCqVUg%2FksD6xpW3cq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH%2FZ%2BsUDcrCnSw87bircA3179VWXj5%2Fls7A42G9DZNWoOTrzrSsaspoTcrw8nfiGy7C0GwysboyBD67kYWayVVS7gPk27aSE%2FNvRzfGWqT4Zn8Luov%2BNW16tmwtKZG%2BYGSqVawm6FXSq%2FVS3Z5wW5mUArxIv8nlKHE67bBREfPUsr3xqTpoU4%2FCh1lIUTOY5Fdv25AB8RSFszwnX8HT%2BhJXEGuTCcKXlBF%2FKUMlsbl0G8JYtkxpqUaD13KygYh6sp6rdj%2FA4DrwAOnwOmaOvWJNT5kmG8sqVTo5uq5kSVeqiN48TgdDIptA%2FO7nvMJXgYj959U%2F%2BSgibd5oBOY4RhLOuOIEBkDsy03fSCbBtgT0xFWqmqN%2FVeE4XUluTBpm%2Fhf2eTAoY2ZSmPBms9ioYNid26bGL0pYm9lew9Gk0qo%2FHXDYg164b2l5Aknv8FcrJgdJeQRvib8HlYDvI88FkAzNKnwdKbfm1RGZU3ApsdF8N%2FeFMOUEWMtJKter%2BA%2B%2Ba3d3Ix%2F%2Fi2RZWO0cnAUVwzryEbUwj%2BZ9tFjocJCuWMiQc6JYkocfJhlxfnmCVtyTic4XuqXmmuhnUBLjexj%2Fr8pS39nt13jTMw6%2BCDsM9nqptS1oA7vQcAzExhF5CX3U9tlUI%2FF3Xb0Z5bb4%2BMLev9sQGOqUB7z51iWJgDM9TG94mFtbILOpEUC0qjLVC73S%2BgXZghzubAgOkt%2BC31f0SHnFGHN4Ozid5LzYNkyeMzalFo4s3CXteVFy1GfTmq%2FKliSPNX2MZKvc5p0lclKzNBoFk%2B6ZIdga%2Bu1EbnCHJi4vG2unGveY554PrwGzVw5R1MSENtJC4hduzIHYY1bdj5zN1HrgnQoWmqXL2ByDa7e1xa0aZmDcENMkH&X-Amz-Signature=8b5958966341093c127ce7a432d7baf0a33fd3cc61ebffa84f0c1b61c9631e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ILO6YPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2Fq2nLrPNnw876z9LgJO63ye74k1jgOOk0kqW6rsDcwIgFwxOnd%2B%2FgF2bpm7iLWx6OjyWnL4mCqVUg%2FksD6xpW3cq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH%2FZ%2BsUDcrCnSw87bircA3179VWXj5%2Fls7A42G9DZNWoOTrzrSsaspoTcrw8nfiGy7C0GwysboyBD67kYWayVVS7gPk27aSE%2FNvRzfGWqT4Zn8Luov%2BNW16tmwtKZG%2BYGSqVawm6FXSq%2FVS3Z5wW5mUArxIv8nlKHE67bBREfPUsr3xqTpoU4%2FCh1lIUTOY5Fdv25AB8RSFszwnX8HT%2BhJXEGuTCcKXlBF%2FKUMlsbl0G8JYtkxpqUaD13KygYh6sp6rdj%2FA4DrwAOnwOmaOvWJNT5kmG8sqVTo5uq5kSVeqiN48TgdDIptA%2FO7nvMJXgYj959U%2F%2BSgibd5oBOY4RhLOuOIEBkDsy03fSCbBtgT0xFWqmqN%2FVeE4XUluTBpm%2Fhf2eTAoY2ZSmPBms9ioYNid26bGL0pYm9lew9Gk0qo%2FHXDYg164b2l5Aknv8FcrJgdJeQRvib8HlYDvI88FkAzNKnwdKbfm1RGZU3ApsdF8N%2FeFMOUEWMtJKter%2BA%2B%2Ba3d3Ix%2F%2Fi2RZWO0cnAUVwzryEbUwj%2BZ9tFjocJCuWMiQc6JYkocfJhlxfnmCVtyTic4XuqXmmuhnUBLjexj%2Fr8pS39nt13jTMw6%2BCDsM9nqptS1oA7vQcAzExhF5CX3U9tlUI%2FF3Xb0Z5bb4%2BMLev9sQGOqUB7z51iWJgDM9TG94mFtbILOpEUC0qjLVC73S%2BgXZghzubAgOkt%2BC31f0SHnFGHN4Ozid5LzYNkyeMzalFo4s3CXteVFy1GfTmq%2FKliSPNX2MZKvc5p0lclKzNBoFk%2B6ZIdga%2Bu1EbnCHJi4vG2unGveY554PrwGzVw5R1MSENtJC4hduzIHYY1bdj5zN1HrgnQoWmqXL2ByDa7e1xa0aZmDcENMkH&X-Amz-Signature=9476e40d42e60a6e1e1a7464aa18e412669db5b72ce16a43009a1c159675aee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEFYYO5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC92VSdAK1F219JcxB9D%2B8jlKv13mliLGS6Qep258DhDwIhAJF%2BeVZJph8iygbrhDcZyQEfGtNgGF7o6p3t%2BWsst7LBKv8DCEEQABoMNjM3NDIzMTgzODA1IgwGew4D%2ByZ8l3dKi2Eq3AM5Xw6Lrx2RP1uVKptPR2umMmZrT40I5cyKV38tCU1SYu5K%2Fwj4GY%2Fev7Lcm8%2FfqHPzCbvT8ZIBQatXZSJSNDddao%2Fx2AHjoif8%2Bh39sS4kW94GdAqYV%2FIDFtL5bXytnFrJUokc6%2F5Oix4vYjEGr1lQcz6lqnxtammaHXQcsOZa57yRDtoz3Ibvj5%2F0gjFDwU61zrFwJgIi%2Bw%2BIE9RxIfQkflmAxcPFGUQ0%2BXw3DjdUPjYTcVQIfc%2FUYKlSN2X4ny1K%2B9ItyvD6IBxRvzkXfqMAxEmw%2BguuPQN62CBnQ2ljnPNL5itUS%2FPZRvdqBE2a6ZPZW8INl16lgCRsOzOPrHzUlkqt1GgfyWbzdCZ3lixxR%2Fea678chtDcmeXJ2%2B7oj8wGjPJC1yrs4ecxak%2F1yEFhsPqE%2FzZmXi3dSQaJszFnUYRqKN7WwXrIXh9A9nMZrc5kdl0z8LinCxq%2B1cFBGy8T%2Fp3HxDFitb9bTuX82mVZX%2FFwyV9Ej8h3V2zVUqSIce6az0XsMe7TfOPP4ZPvE%2FhDafbs5ifzZ%2Bl8eyXO1Ub03Pwa%2B0FnbHC2ZjVd06uWljrdYrj1H1R6c4hqU4Nhh9rQWUWfPj%2F8V%2BCX6bbCMGiH4gIS3fCHfHgdIxBUSzCHrvbEBjqkAakJKpEQfJVpfv7%2F0Mj1U6YYDlL%2FGvTGjvJKJ52mXIW%2FhdJVaNvWLQWvsRxN9iBxYj0yepQeWT6Y2%2FXNNSs2YqIEAd1S92zUokU63%2BtmEXUTO3%2B%2B8FGqd8benU%2F3dUq1LZYNlnSRjWjn358JXl7fMdJ00NPKZLeRwSSn%2B76I1dmcNXnHDX923VvVbWhm7WnEA%2FDeoI%2FikPND0QlHpVfeLfMnezbe&X-Amz-Signature=906161edfcc52f1ee5ffb6abcf5ea5d6129fd1e74dea150e0fd6423cb96f06f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGIMR64%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnfh7VvySYcwRCiX1ZPJmmF7bBaf97OR9HrbVzX0%2B3%2FgIhAO6mZd9g3%2FoeTIFbg5%2FlJZBQYpKtLNquWbHL4BnP1yKqKv8DCEEQABoMNjM3NDIzMTgzODA1Igz5DtDzIT13%2BxM5G%2BUq3APOYQk3VvtQJcomR0qm7x5NwV9cXVRacZHM70J%2FyGKQI1QdAQoALs%2BkaIwwizr1CERr9e6xmv9B4gIpooYpWBdKiQoP8n2AZJUswWC%2B48FJZKb4Akk%2Fku%2FZcRQ6hx5eyApRxfdc8ThtKyvesBiUqZQEuB7FjwQ1cHvwcs39vGnuKvsntxlZD1qLeMSUi6CR9wF6gTWBKxWKjrLKiEqqgVY3g%2FIZJ9xnukH5ON1cyxgYYJi5t6GPz3ApROZgIHcAj70elEX4Q2NouEAnumQBWkfWDgE600aN%2BvYeWItDZH6TgPKNWyKVWZn35%2BL%2FeCRodLrDBmHUGt6gP5NeHDN%2FrSongUa2e1F55nkZ91KhEeYvuuYZ7%2FB35Gs0rrFgjkBL6cdDJLdFU0wt9PPeMN5YP9kWY1cydHCib2LBvFm%2FCNYkaQiBqfBDw3W2ezBLv2hCrMbqmeA9AGoaxykME%2Fc6tqWO4Y6fO63EhsT6FALRr8pNDQa%2FJOmuIvvk0e%2F86jkHK2CNyyRRShNw2PgUuY3wz1KNG3uEJSZUchLriRTqb0BkUD4wFh4PxL3HVVo5vsK330L5Ualt4z2owxPdwxwsXUwkI57yrUmdj1WDvrHBtOKc0oaLiBDkAcsqgdAKHTCur%2FbEBjqkAQhOc%2B3cUR%2FXgoJN8SdrjqcVte53qaPS6zm4XXATqQGCq8HVAgbB0T1kMd4wxU1D88jEhWlXYPNAji2zog5oAZoQSD9b0kQ1GAwuBlqaw9kXd2rdfSWjst%2FFj%2BT7c%2BT37wsNpijlduTNXj0dBW7ZpFwMTIZbGH%2FbgT5s7OBej3qfidn%2B8a79iM35fEHH%2F%2Fc86NYhd%2BJD%2F7bRj5Jxet4OtLrIpuo%2B&X-Amz-Signature=edb0fe3c98d6ecac1572799184dd052488a79a93ff64beeba600d706f05857be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ILO6YPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2Fq2nLrPNnw876z9LgJO63ye74k1jgOOk0kqW6rsDcwIgFwxOnd%2B%2FgF2bpm7iLWx6OjyWnL4mCqVUg%2FksD6xpW3cq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH%2FZ%2BsUDcrCnSw87bircA3179VWXj5%2Fls7A42G9DZNWoOTrzrSsaspoTcrw8nfiGy7C0GwysboyBD67kYWayVVS7gPk27aSE%2FNvRzfGWqT4Zn8Luov%2BNW16tmwtKZG%2BYGSqVawm6FXSq%2FVS3Z5wW5mUArxIv8nlKHE67bBREfPUsr3xqTpoU4%2FCh1lIUTOY5Fdv25AB8RSFszwnX8HT%2BhJXEGuTCcKXlBF%2FKUMlsbl0G8JYtkxpqUaD13KygYh6sp6rdj%2FA4DrwAOnwOmaOvWJNT5kmG8sqVTo5uq5kSVeqiN48TgdDIptA%2FO7nvMJXgYj959U%2F%2BSgibd5oBOY4RhLOuOIEBkDsy03fSCbBtgT0xFWqmqN%2FVeE4XUluTBpm%2Fhf2eTAoY2ZSmPBms9ioYNid26bGL0pYm9lew9Gk0qo%2FHXDYg164b2l5Aknv8FcrJgdJeQRvib8HlYDvI88FkAzNKnwdKbfm1RGZU3ApsdF8N%2FeFMOUEWMtJKter%2BA%2B%2Ba3d3Ix%2F%2Fi2RZWO0cnAUVwzryEbUwj%2BZ9tFjocJCuWMiQc6JYkocfJhlxfnmCVtyTic4XuqXmmuhnUBLjexj%2Fr8pS39nt13jTMw6%2BCDsM9nqptS1oA7vQcAzExhF5CX3U9tlUI%2FF3Xb0Z5bb4%2BMLev9sQGOqUB7z51iWJgDM9TG94mFtbILOpEUC0qjLVC73S%2BgXZghzubAgOkt%2BC31f0SHnFGHN4Ozid5LzYNkyeMzalFo4s3CXteVFy1GfTmq%2FKliSPNX2MZKvc5p0lclKzNBoFk%2B6ZIdga%2Bu1EbnCHJi4vG2unGveY554PrwGzVw5R1MSENtJC4hduzIHYY1bdj5zN1HrgnQoWmqXL2ByDa7e1xa0aZmDcENMkH&X-Amz-Signature=f44b3bf828e4a8de486a5ad4b9ed00a821f6ec6eac672e7b2a1c64e922f380da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
