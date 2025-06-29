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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIUFUT4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoW7nzC1Fd4flc2w8bJwfpI4tgSOW3OOdLniLXGE36wIhALl2mlX0iZ5J62KL9OjfbLhFYmeKYkA%2BTkJj%2FPLaB8tdKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybpjGq6qizkUt%2FzX0q3ANGDE%2BcMPpMHAzeM9imBOBha%2Fa2fA0vxSK5fkgA7EBeq4Mp%2BgWyn7KolwZ9UJZ0CrphxLdyp0yNkwXqrKLOEu%2BbqiDpQNwdEg27spgZxOwjxwe9Y4jy0t%2BRTvvx7yHJ2bMD1oaJ1dwUrwWTo6r77Gezz0%2BHAPZWbV3ZQQmIjLqXuiuzxG38BrPm3o8E%2ByP%2FafvG5hkMGiYDA3fWAGFb57uTyREL0DNjTr6e6l%2BFGRIdMpjs6GFRmnsaqEdu7HcxYHyIoAZfRgnoxPfl%2F3Id5EGSgBjQt4uH8S7zvpwLnbU%2FSseATxq%2FK0yFS223zTgYeAKrF6PZZFbTEf3aCMZBejNObShfw90UllBuDQtbWJazDRaCIOKOIHJ3KS9VaWKflkBWABEyxbU6R0WQrexkoWbEy3XaQWjaiMfs7JY1U5CBkDbC3xat6p7O8w0XwGuIdGbQkImLDieGUkOeKUD0NbTRAZseopnqyOLxvs7pYOtNwmxjVjYrxpiFqwluzJTQId%2FG2VzlkKmt9fogqOleCdfbYoYkS6%2Bx5Atad1Q%2Fp0GHkQu3k4wQ6VUdafGBqI62nBiape7IOixVIoijpsqkRnRt486vTBloO69sMtMlU8cr18OsiRNGgVonMIu3rjC9j4LDBjqkAZTjiEjeOAh5ENvKsIc6kqfgtXqZxqnQCNqIG5DCm9gvWxh248FjJ4qsAHBlqy3RP7AB9NHs0FECoMdBkpVUibzffOCCKWfanQroYZQRmsnBXWis1OQy0DTvgTcg%2FgaBgHfxtWgv1pB%2BkLs0g3ngnsq5o0VfzYHwZOIYDlQMfUztSAZlhV6u%2Bf6G6PLPKS3%2BnY5Tr7Yf4Z0iqQxO0fjvj4dkfw8u&X-Amz-Signature=9ddc51e3d0a237febaeb8ead030df6a4282d4f52fd39e0054717f7bbb732cd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIUFUT4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoW7nzC1Fd4flc2w8bJwfpI4tgSOW3OOdLniLXGE36wIhALl2mlX0iZ5J62KL9OjfbLhFYmeKYkA%2BTkJj%2FPLaB8tdKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybpjGq6qizkUt%2FzX0q3ANGDE%2BcMPpMHAzeM9imBOBha%2Fa2fA0vxSK5fkgA7EBeq4Mp%2BgWyn7KolwZ9UJZ0CrphxLdyp0yNkwXqrKLOEu%2BbqiDpQNwdEg27spgZxOwjxwe9Y4jy0t%2BRTvvx7yHJ2bMD1oaJ1dwUrwWTo6r77Gezz0%2BHAPZWbV3ZQQmIjLqXuiuzxG38BrPm3o8E%2ByP%2FafvG5hkMGiYDA3fWAGFb57uTyREL0DNjTr6e6l%2BFGRIdMpjs6GFRmnsaqEdu7HcxYHyIoAZfRgnoxPfl%2F3Id5EGSgBjQt4uH8S7zvpwLnbU%2FSseATxq%2FK0yFS223zTgYeAKrF6PZZFbTEf3aCMZBejNObShfw90UllBuDQtbWJazDRaCIOKOIHJ3KS9VaWKflkBWABEyxbU6R0WQrexkoWbEy3XaQWjaiMfs7JY1U5CBkDbC3xat6p7O8w0XwGuIdGbQkImLDieGUkOeKUD0NbTRAZseopnqyOLxvs7pYOtNwmxjVjYrxpiFqwluzJTQId%2FG2VzlkKmt9fogqOleCdfbYoYkS6%2Bx5Atad1Q%2Fp0GHkQu3k4wQ6VUdafGBqI62nBiape7IOixVIoijpsqkRnRt486vTBloO69sMtMlU8cr18OsiRNGgVonMIu3rjC9j4LDBjqkAZTjiEjeOAh5ENvKsIc6kqfgtXqZxqnQCNqIG5DCm9gvWxh248FjJ4qsAHBlqy3RP7AB9NHs0FECoMdBkpVUibzffOCCKWfanQroYZQRmsnBXWis1OQy0DTvgTcg%2FgaBgHfxtWgv1pB%2BkLs0g3ngnsq5o0VfzYHwZOIYDlQMfUztSAZlhV6u%2Bf6G6PLPKS3%2BnY5Tr7Yf4Z0iqQxO0fjvj4dkfw8u&X-Amz-Signature=b571d6c6564f6de38919bd6bd1504267d1cc648d32ea6df8cca1e22be1c7c159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIUFUT4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoW7nzC1Fd4flc2w8bJwfpI4tgSOW3OOdLniLXGE36wIhALl2mlX0iZ5J62KL9OjfbLhFYmeKYkA%2BTkJj%2FPLaB8tdKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybpjGq6qizkUt%2FzX0q3ANGDE%2BcMPpMHAzeM9imBOBha%2Fa2fA0vxSK5fkgA7EBeq4Mp%2BgWyn7KolwZ9UJZ0CrphxLdyp0yNkwXqrKLOEu%2BbqiDpQNwdEg27spgZxOwjxwe9Y4jy0t%2BRTvvx7yHJ2bMD1oaJ1dwUrwWTo6r77Gezz0%2BHAPZWbV3ZQQmIjLqXuiuzxG38BrPm3o8E%2ByP%2FafvG5hkMGiYDA3fWAGFb57uTyREL0DNjTr6e6l%2BFGRIdMpjs6GFRmnsaqEdu7HcxYHyIoAZfRgnoxPfl%2F3Id5EGSgBjQt4uH8S7zvpwLnbU%2FSseATxq%2FK0yFS223zTgYeAKrF6PZZFbTEf3aCMZBejNObShfw90UllBuDQtbWJazDRaCIOKOIHJ3KS9VaWKflkBWABEyxbU6R0WQrexkoWbEy3XaQWjaiMfs7JY1U5CBkDbC3xat6p7O8w0XwGuIdGbQkImLDieGUkOeKUD0NbTRAZseopnqyOLxvs7pYOtNwmxjVjYrxpiFqwluzJTQId%2FG2VzlkKmt9fogqOleCdfbYoYkS6%2Bx5Atad1Q%2Fp0GHkQu3k4wQ6VUdafGBqI62nBiape7IOixVIoijpsqkRnRt486vTBloO69sMtMlU8cr18OsiRNGgVonMIu3rjC9j4LDBjqkAZTjiEjeOAh5ENvKsIc6kqfgtXqZxqnQCNqIG5DCm9gvWxh248FjJ4qsAHBlqy3RP7AB9NHs0FECoMdBkpVUibzffOCCKWfanQroYZQRmsnBXWis1OQy0DTvgTcg%2FgaBgHfxtWgv1pB%2BkLs0g3ngnsq5o0VfzYHwZOIYDlQMfUztSAZlhV6u%2Bf6G6PLPKS3%2BnY5Tr7Yf4Z0iqQxO0fjvj4dkfw8u&X-Amz-Signature=4d4d0c90f12527c7783d5cf403da048e819d00a479f75c8eeaa38e282a1e5d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5X3SLC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqVaUVQcEaCEAFWcKpydRfcrswNPdWf1wZOKx3uL2OwIgd6nZFFq3JgYddWKlW%2Fu6PqTYIdHtmKzkW7YueNefq%2FwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzrJ0u%2BXPMOV26lnircA3CksUEISM97KCgxVbwZ5ls%2BwNNjafDa0nxrWKJUz3Y%2Bg3fjJDVVNfvAZiOp0XZHqD%2BxnRLxa7LsArc9qdv%2F62m66SEEmgcKcX4kTGCL2L9TaR4RgjG6tVgnmnnnhsGFM8Kud75PqwNkNRxOsOR%2Bi144gXt%2Fp2DHW%2BL1Kjy8%2BOZq7cuIzEngx8bIkftUIldWuvj%2FG0F88aHcyr3Qj5DN4ZOcuc9NLDd%2BvdfxvHQrkctKqa6tReQvUxBwdADmxoc3Mbq7PT4gIWQUVDieJ8Gsou9xIPaNSDYuN1IO0AAFmGfLNc%2BJYTRZ6qj7mN59rIqsUHM%2BVyHH06U1d0zQs1Ux7okZiP%2B0s6DMHx3yrd%2BE20haXUqMmmB2KVH4YeXSFMgADfa2ckOrCQ%2FTDwm0GiMSut1Wj3OV56JljKrzazqWT7Z1D9bcFksx6Ug9y2anG7n8%2BDYuhDw2fb9A%2Ffh2bcHXBossh0Ioxzq77b1QkMAYV%2FbT4MJrjIIENPV1zfDlsKTmQpxh1za7zBzlNytXkH40wt70JsvdQpRXa6qSddh2Ur9JdXS1te9y6qY5M2Xay7Zxy8N7BtUYeBXV9xBaav1sDYdE%2FrQN8y0Yn8Doh7f9F6ZCW6FamPYkq%2FNFdkMvMI6ZgsMGOqUBnBzU2ck2jsD75KplwsC1lLEGmjI8MOJqYSeY3zOxMccO%2BTsrCPFkG7O9J%2BB%2BTLRjIaPLLZKZKDqTQrhrb17M9o9tvL8qmRu0l2YWOMxMAsI1VrJUzi9OdiFWGHYC46MJSK6Gh8BIOQWCWZVp1HSn5slFScc70OCoNEOBTbz0eILgXPLYWfwmhFIQAlIdtYB266tz2XiT0g9t9i%2BoRTeWV5yydx1x&X-Amz-Signature=839c7c21d50ec34c275b9ef967517762f8e87cc12329b13b8a297d84eb3b57dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEB5ZTPK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK4M3b3F0qrFs0VeFaXHy8cRw277Jn59OavCDrKb%2BZpgIgLbtFwwdCqpJN4FDCnFTkYJdsd9yPsOYlRX%2FTV7hSdSMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMgzDCgfVFmiJLZkSrcA05LHryT5g8DXPcZqncRLt%2FRovo3kLhXnvTm6xo9I2bbf3AiIWBnAZAPTGyobORKun1earVa8g54p8zaFc9iPWl6Y%2B%2FvS18M%2Bo4IXDK1TrM7VcTdlTHtk%2BklV0kycP7bNky8cVDHV54%2FJoSmktSCQ5%2BS48rcqDEJKnLcCAN%2FlSz%2Flmp3LIfjjdDP1TZ9ZsSQ78BH%2BYm4xC8mc9EuZeNYsLpYwiIf%2BDC%2ByVQIa%2BTs%2FPW3laCRg1XszHCH8jVLa1fayrhFJ%2BJf3KpuiV00Vf%2BGnwK0UDQvud7rl53k%2Bwvmvizlyap9j35rxoJWddM2e1pKtzeAokhpWrjro9IQ%2BuVbwbGpehbOBzjLk%2FgY4k%2FnJWXJ%2FrtGxDB%2BR9WiSd0AEJZ6AmvhdTIa6yApjh8nr3vO8DYzDtS7CpLqGeXwJP%2Fc3SQLTZ0fO4MkiMvofJvPI082ztizF1LxQQFYjvN1Hed93Ts3Q3s0P54wT2QJehYAC6B%2BOuiCZbVR7wks73d4%2B0a%2F72hrPYmKp7RjLOXeFL6TW3Q8ZFxAT1HbTAJAzMN%2BIKty9dWnOgZy%2F5TmeEVca81VWnPzYTSJ1yY5BkLBho9QAxMuz6oIO4TJiJgRziAN9wJPT0rzB7LUVZl3qg%2BwMKmRgsMGOqUBlWlYgRXj4ioKYSQyCZSlP1iKf3AtvUN2MtzrSAyTi5p4x%2B%2BAINRLF%2BStAL5AOIwQUZH3JhYR9%2Fjzq0%2BTV2R8WURPei5wNYcodjrKImTIGkr0vbzh1g%2BY9YbUIYh3JKeOW6odjQI6apMmfXCWmNHR7I0mQ0nlVSAUa%2FUUvYqz09SVad2JIu7592k%2Fq%2BZBAUCQlcba1SFmfPUeipI%2BG5JZ%2FFh%2FQjYK&X-Amz-Signature=2374cb933e83120aaffd991be2e23ab2d5437a69fc0dd106f89bd3bdb10076c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIUFUT4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpoW7nzC1Fd4flc2w8bJwfpI4tgSOW3OOdLniLXGE36wIhALl2mlX0iZ5J62KL9OjfbLhFYmeKYkA%2BTkJj%2FPLaB8tdKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybpjGq6qizkUt%2FzX0q3ANGDE%2BcMPpMHAzeM9imBOBha%2Fa2fA0vxSK5fkgA7EBeq4Mp%2BgWyn7KolwZ9UJZ0CrphxLdyp0yNkwXqrKLOEu%2BbqiDpQNwdEg27spgZxOwjxwe9Y4jy0t%2BRTvvx7yHJ2bMD1oaJ1dwUrwWTo6r77Gezz0%2BHAPZWbV3ZQQmIjLqXuiuzxG38BrPm3o8E%2ByP%2FafvG5hkMGiYDA3fWAGFb57uTyREL0DNjTr6e6l%2BFGRIdMpjs6GFRmnsaqEdu7HcxYHyIoAZfRgnoxPfl%2F3Id5EGSgBjQt4uH8S7zvpwLnbU%2FSseATxq%2FK0yFS223zTgYeAKrF6PZZFbTEf3aCMZBejNObShfw90UllBuDQtbWJazDRaCIOKOIHJ3KS9VaWKflkBWABEyxbU6R0WQrexkoWbEy3XaQWjaiMfs7JY1U5CBkDbC3xat6p7O8w0XwGuIdGbQkImLDieGUkOeKUD0NbTRAZseopnqyOLxvs7pYOtNwmxjVjYrxpiFqwluzJTQId%2FG2VzlkKmt9fogqOleCdfbYoYkS6%2Bx5Atad1Q%2Fp0GHkQu3k4wQ6VUdafGBqI62nBiape7IOixVIoijpsqkRnRt486vTBloO69sMtMlU8cr18OsiRNGgVonMIu3rjC9j4LDBjqkAZTjiEjeOAh5ENvKsIc6kqfgtXqZxqnQCNqIG5DCm9gvWxh248FjJ4qsAHBlqy3RP7AB9NHs0FECoMdBkpVUibzffOCCKWfanQroYZQRmsnBXWis1OQy0DTvgTcg%2FgaBgHfxtWgv1pB%2BkLs0g3ngnsq5o0VfzYHwZOIYDlQMfUztSAZlhV6u%2Bf6G6PLPKS3%2BnY5Tr7Yf4Z0iqQxO0fjvj4dkfw8u&X-Amz-Signature=b80352443653ed5a3a8b2de26b7bf2bec3eba760e6be16485074b93e92e9b5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
