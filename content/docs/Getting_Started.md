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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7DNW34%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FEP9FdQpurzgMxsmFCy7mDpCPO1lHH9Rajo4T91kapAiEA1GHHRQb4kXvHorH883hzGT8g3Ana2Jty1St%2BPC0yZxYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt3kaldid86UEiADCrcAzYiRWOtIka02%2FOsPPLA5Xy5MDwjma%2BkECuMQSaNag4ILU56AN0NBMAthmJOhpyxnAK9fH8wdIpce796t%2BdP%2B5bM8GRT03TmbgpZpChhZBgn%2B0k6pC6AvZ%2Fa1hSj8nStSv2DmLka%2F7Bw5GgE1xDu1G%2F3nXyfxd0atuzxF7UuQJly9ygkBp32oWP1rQIAE5csMjosgZkRGKxM7nhhBGGa0mr72QODOKsK1PTUA2x1brC%2B%2FiINTes2eeF8Mde6gyXgNuL4BpNs85kmSEiPypsTK%2BTDU0YSzI%2Bj7Ljj5VXVwTuhIrrqhNwM59%2F%2Bga4J0JjHJeIqu7nzZDCcrhFFANwP0KN%2BE7ILNSK%2BNhMwYKA0bBBTABuhQG7h83wlN%2BxszpmfJYnZvHQoBYfzwr31r%2Fx7w3WzeWLUsb4a2%2FSwCYSvaLS61ZkSc3Cs6895uLSgMBFwf7QJ2wIiydtzSIt6WAwCpvYZQJEVzaA4eEaJlIHg48cGcF1TTmK8sWJreiUTUDrexmuXsfuezxEOB7zDGMZZmCBXNVAIyiMalq2o0CwGKK%2BRmLDAJQTV2g3NV62tFxi6IidOxV8jPXR39zibJttHrSWxOlIxRuZ58fxbC3kgaIf3k%2FKBhCPxHBe4p3RpMMHxsL0GOqUB1Co4fX%2B3MT97CfWPHKM%2BTG%2BU3mWBHDutd3%2FhQ%2BVX%2FQe5miYSe05kvW7mS66fWZNM2HldAm0pDAeeiINdktuZJZIkD8oDIKpfPOR%2BW8lk5u2SbZOZGfzK%2BHQE9vijQ844%2BfKgL6uiaIWWUTbCAYDxm72kuCh8g9GUSNheWhWDr1Vxb1B%2BFz%2BF%2FkM0NuyguVGycDkUQqSCdzH9tHAH%2FKksFkZjGevn&X-Amz-Signature=ec829f1210e268db2aeb32d057119b2cefb9d41b04c24cc211c729d5fd0bd9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7DNW34%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FEP9FdQpurzgMxsmFCy7mDpCPO1lHH9Rajo4T91kapAiEA1GHHRQb4kXvHorH883hzGT8g3Ana2Jty1St%2BPC0yZxYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt3kaldid86UEiADCrcAzYiRWOtIka02%2FOsPPLA5Xy5MDwjma%2BkECuMQSaNag4ILU56AN0NBMAthmJOhpyxnAK9fH8wdIpce796t%2BdP%2B5bM8GRT03TmbgpZpChhZBgn%2B0k6pC6AvZ%2Fa1hSj8nStSv2DmLka%2F7Bw5GgE1xDu1G%2F3nXyfxd0atuzxF7UuQJly9ygkBp32oWP1rQIAE5csMjosgZkRGKxM7nhhBGGa0mr72QODOKsK1PTUA2x1brC%2B%2FiINTes2eeF8Mde6gyXgNuL4BpNs85kmSEiPypsTK%2BTDU0YSzI%2Bj7Ljj5VXVwTuhIrrqhNwM59%2F%2Bga4J0JjHJeIqu7nzZDCcrhFFANwP0KN%2BE7ILNSK%2BNhMwYKA0bBBTABuhQG7h83wlN%2BxszpmfJYnZvHQoBYfzwr31r%2Fx7w3WzeWLUsb4a2%2FSwCYSvaLS61ZkSc3Cs6895uLSgMBFwf7QJ2wIiydtzSIt6WAwCpvYZQJEVzaA4eEaJlIHg48cGcF1TTmK8sWJreiUTUDrexmuXsfuezxEOB7zDGMZZmCBXNVAIyiMalq2o0CwGKK%2BRmLDAJQTV2g3NV62tFxi6IidOxV8jPXR39zibJttHrSWxOlIxRuZ58fxbC3kgaIf3k%2FKBhCPxHBe4p3RpMMHxsL0GOqUB1Co4fX%2B3MT97CfWPHKM%2BTG%2BU3mWBHDutd3%2FhQ%2BVX%2FQe5miYSe05kvW7mS66fWZNM2HldAm0pDAeeiINdktuZJZIkD8oDIKpfPOR%2BW8lk5u2SbZOZGfzK%2BHQE9vijQ844%2BfKgL6uiaIWWUTbCAYDxm72kuCh8g9GUSNheWhWDr1Vxb1B%2BFz%2BF%2FkM0NuyguVGycDkUQqSCdzH9tHAH%2FKksFkZjGevn&X-Amz-Signature=6b32dc7497cbf7b4e71ee5f8d92af728ab77e4b98196403478408a9a00bbd5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPCRLYP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiI4tNHwsINettauTi%2BMPnzKRgEGfw28nucm8VcabZkQIhAJGfkPFUN7W%2B247GuEkcGn7gTPMg7mqN95heqL%2F5cZBwKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0k0oK2pyWVndMiYq3AN4CQs8kJsxBfew11uo%2Bm14lVHn7RrL42Z25eTR8x01ZbeJL2HP4HdLV5aIDWCvUN2YaP9o2GDRI8Xct2hP2ocm%2FzIiB19NsqdTKIfs2lW51n5sBVjtlS1E%2BMZUyC9Y%2F9ihu3kQ1oXJ0eSPyzUhTaKtNp774g1i%2B8rjXo14BKcLEBrT6S1zKz7s0fxovNYKD5HegBhZxBn3JNq%2BGVkMqkHoSejVDxKHVde0t39D7lAY2q%2Fz2KKSZPa5SIF9kS%2BidwOrS4TM%2BQ777poicvR7X7hBcXPjTfP8CP4Lt1BNIH2v6H6EzwkH5etGvUVYJ%2BVXZZslj9NTAsi%2FivDVnbS9y4Ab1tKd7fPmz4mKgzsRCHGaA76ShdAv81Auf%2FRbkT6LYP7qyn5zU27HQ95kcy13YsEBnBUFyHbh3beVdJAS3UR3sAfW9CLYGgQF7BOQzDRhKsRpZtcEPLSInEkd9qeD5io9BoSKryvx2UtdgYznagLSTYCRkjmXtnHMRLVa5XVUIvuDO2Ldt4Spb4Vhri2kttW2Ol5oRpE6Ol3CitRyUEuHAvHK1cd3sWIDS3%2B6v26s8VM3oODIIKCpKWg0cl7az1wlS2klhpvKiMVKxr9tZ2PJDjFiYe76V3xk%2Bd7jsDCpjrG9BjqkAQkTVOCWGacXeSRbWRZzIc%2BfoeEeNGvUcjU56idjKiW%2Fo6wCobT3BGy4rRapJMXK%2BTVYd%2BQVFkMv3UXkaxyZpUnZYJqG2mqvNRsjXvjgLGGco8Uf9olaGMgZ0cXdZxIJVJ%2BADPi6vbKK4BLaOAB5Ftv5RV9eUoWPYukj%2B73wRrSUV2TWUx6RCACnUKZu3941IjCkfOJcUHrcR0s5GsE8Zpgbu1ma&X-Amz-Signature=52087a0b464437c4bfd09bdad562cea8c2223981f2ed15c8f702acabef746087&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSCECRV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuVVWHeqx797zBQ7y00QreDEVXUB0XMOPRgHC3MauQaAiAJNGdEE0yxvv1ryO9fvwS4U%2FudWDEKfBamEHQ5xWGo7CqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf2Aw9dme%2BGRBnY2UKtwDk39jUOWrorESpJRSZPztzSPeKKidmK6Svr2fW3pSkXBAMVRaApGH8bOT4NSZGevS2nuJnzdvsxrBzzINsci5J5dy3xq5IYAiV1Vvmc7GDPUU24exAuZW5ZqBY7rlS5vwq3QakvHluUeWCDzJ0DX%2BzLT48aK%2BF1RJdQ9nRe1simrSbEk4KXSqikUrK8o1Xsr4qYDT80qweboaVo7ab2RzMN1Pdk4vfrFBqRri9x2AifumBeRPXjTVTd4jNuBrqXwNWH5NAPBKQ2JH0vt3NQpWxAN%2FZwGANd5WQFIG%2FRhuYeYRCtJlJFIzN0SJjP2iER0AQojuw%2F%2BADjgohIZNWaw5mK2f6l86moU2TpjLN1zGnxnlwlg7heVA%2FuCGVzI1P5IEe2ojBaj7HSI7xa7JHzCytTyHg9qT%2BHT6gEcAAZsH11ZwLzVcEHlTWHZxPTaoKY%2Bc2mD8HQvSYxbSAPsCllT79f1hZM%2FvGhGm9ofie83VANjKiVVJcioaM3SgjcpCrX6poETKYgLwuBFNaxtxY0EqajKanG%2FBs2oK3pQKsQLIq8o6CpJpS2jlBL3dRyF8dbHWVwCmTxM9ZXgZrvy6G2QDgVb2bNnc1uFs1lDVxn72mje75GtenAEU2SVtPf8w44yxvQY6pgGsyKSclt0KdvOX%2FcXt%2FIydxZunlJsrFnGa1pnuvkSnCSmN0HmayD8rOuqLSoIWSeGcebjZL9RPF3LJcc4W9cbStM%2FdLGMNKnbgJLReapwdWEg23%2BdikH61Ey1DCcpkgmWLKFMGrPEVjQ6%2F0dV4YaTuvf%2FhU4SUbrUN4omvMIzIUCrMoNZzlf0MLs7sTN5FOBISDiWYq5pg4fmFPDLzQapV3jMnokmi&X-Amz-Signature=86001475e833f069f955d6dfd2de09b6934a95d1d57883731d8ade4de92e749a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7DNW34%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FEP9FdQpurzgMxsmFCy7mDpCPO1lHH9Rajo4T91kapAiEA1GHHRQb4kXvHorH883hzGT8g3Ana2Jty1St%2BPC0yZxYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt3kaldid86UEiADCrcAzYiRWOtIka02%2FOsPPLA5Xy5MDwjma%2BkECuMQSaNag4ILU56AN0NBMAthmJOhpyxnAK9fH8wdIpce796t%2BdP%2B5bM8GRT03TmbgpZpChhZBgn%2B0k6pC6AvZ%2Fa1hSj8nStSv2DmLka%2F7Bw5GgE1xDu1G%2F3nXyfxd0atuzxF7UuQJly9ygkBp32oWP1rQIAE5csMjosgZkRGKxM7nhhBGGa0mr72QODOKsK1PTUA2x1brC%2B%2FiINTes2eeF8Mde6gyXgNuL4BpNs85kmSEiPypsTK%2BTDU0YSzI%2Bj7Ljj5VXVwTuhIrrqhNwM59%2F%2Bga4J0JjHJeIqu7nzZDCcrhFFANwP0KN%2BE7ILNSK%2BNhMwYKA0bBBTABuhQG7h83wlN%2BxszpmfJYnZvHQoBYfzwr31r%2Fx7w3WzeWLUsb4a2%2FSwCYSvaLS61ZkSc3Cs6895uLSgMBFwf7QJ2wIiydtzSIt6WAwCpvYZQJEVzaA4eEaJlIHg48cGcF1TTmK8sWJreiUTUDrexmuXsfuezxEOB7zDGMZZmCBXNVAIyiMalq2o0CwGKK%2BRmLDAJQTV2g3NV62tFxi6IidOxV8jPXR39zibJttHrSWxOlIxRuZ58fxbC3kgaIf3k%2FKBhCPxHBe4p3RpMMHxsL0GOqUB1Co4fX%2B3MT97CfWPHKM%2BTG%2BU3mWBHDutd3%2FhQ%2BVX%2FQe5miYSe05kvW7mS66fWZNM2HldAm0pDAeeiINdktuZJZIkD8oDIKpfPOR%2BW8lk5u2SbZOZGfzK%2BHQE9vijQ844%2BfKgL6uiaIWWUTbCAYDxm72kuCh8g9GUSNheWhWDr1Vxb1B%2BFz%2BF%2FkM0NuyguVGycDkUQqSCdzH9tHAH%2FKksFkZjGevn&X-Amz-Signature=0aee8012012f9c0c8bac3ea6e2385d959571688728ef5b5a9575614095a1330d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
