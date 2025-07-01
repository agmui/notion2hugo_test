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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6OYNJ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41kbi0S%2BGf4qfuxeFqI8Gtb1zSALoSHxV%2FEf8D4SgdAiEAmfgTZiZgKHpr9CPCl2dEio%2BZKBMUteLZfjnONqZTcXcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVpYstq528vKaJXBCrcA8wVZGhY%2F6UnhMDdj%2FQlMbJh%2FgFNiheDHahhGXdNfe50CzeCLv7g0Zpn2E6d5qrtaZ2q8F%2F81XmYicIY2bK05162HbpYQWvdtFi5%2B0YtH8gd0J0MChSqP1%2BmtONt5X62T5D45rxA%2BdCVN6SNCN4ZEN9extnyvNVEgmLdiZqaZjyQgrbweZpPa4Mf00pKx%2BGRPfms%2BHJtD7JGlhUnc0djGpsjLDCtSjC047kL%2BmxSteZW1TyEdW92HrCDm0amj9CU6kfG2AyQ14Rhm1q40slEf5dIqed18rDwOTYUGQn4Yg94v0Tzqqd8NoPUju8MHc3b2Zi7YPEy7hPffm86Qhpb0Ic%2F7FeHcReTqBOl2rv8Yp9MHCcuL4KTTRwKjMs8cIp7v0ZbSs5ZiCasXjg0sRluDmeZgN2IpB70YDO0OOZBs20Kz0CcRynYDGqRk%2FWBGw5NJS0wFpFJdpmgOGVPG18OKS%2FDPdVnS49X4mn0NGLYbONhWKaboa91MMqNABzv7LxBNllA25nZA3BWWtKDXeZBYx5bxMLKibcMCOfaAS1aq3em7NFw31rLuFW6Yj%2FZWlpSeAMFyNArE3gJor8qhwmDLym7RuaTNiwdSLNY201EAIJuVpNbQFTU9vMrBau5MOyGjsMGOqUB3huYcui8yU%2Bp%2FeVW4XetpyEPcoX2yBdcyaplp%2Bx5dnH8GQ2c9la0ZR1Or3XkzxEvg7jGF433HUtjhbWkmDgHze3DKsU8CKft1xFrMH%2BrmXCLWulfRVirx%2FBqjUHUjDx6qm2N5p5LLXGpuiSH9PYar7qtTHNOVBbDPR6wPAp%2F5Uk406YdpUcHEjgrJqecxWiBR33VNIFtqy%2B%2Fn0fZVjMdtON3FqQn&X-Amz-Signature=e7e54fbda654d1424d22e1edf534acd8386bc413ecc307c2f32de3247f1af59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6OYNJ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41kbi0S%2BGf4qfuxeFqI8Gtb1zSALoSHxV%2FEf8D4SgdAiEAmfgTZiZgKHpr9CPCl2dEio%2BZKBMUteLZfjnONqZTcXcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVpYstq528vKaJXBCrcA8wVZGhY%2F6UnhMDdj%2FQlMbJh%2FgFNiheDHahhGXdNfe50CzeCLv7g0Zpn2E6d5qrtaZ2q8F%2F81XmYicIY2bK05162HbpYQWvdtFi5%2B0YtH8gd0J0MChSqP1%2BmtONt5X62T5D45rxA%2BdCVN6SNCN4ZEN9extnyvNVEgmLdiZqaZjyQgrbweZpPa4Mf00pKx%2BGRPfms%2BHJtD7JGlhUnc0djGpsjLDCtSjC047kL%2BmxSteZW1TyEdW92HrCDm0amj9CU6kfG2AyQ14Rhm1q40slEf5dIqed18rDwOTYUGQn4Yg94v0Tzqqd8NoPUju8MHc3b2Zi7YPEy7hPffm86Qhpb0Ic%2F7FeHcReTqBOl2rv8Yp9MHCcuL4KTTRwKjMs8cIp7v0ZbSs5ZiCasXjg0sRluDmeZgN2IpB70YDO0OOZBs20Kz0CcRynYDGqRk%2FWBGw5NJS0wFpFJdpmgOGVPG18OKS%2FDPdVnS49X4mn0NGLYbONhWKaboa91MMqNABzv7LxBNllA25nZA3BWWtKDXeZBYx5bxMLKibcMCOfaAS1aq3em7NFw31rLuFW6Yj%2FZWlpSeAMFyNArE3gJor8qhwmDLym7RuaTNiwdSLNY201EAIJuVpNbQFTU9vMrBau5MOyGjsMGOqUB3huYcui8yU%2Bp%2FeVW4XetpyEPcoX2yBdcyaplp%2Bx5dnH8GQ2c9la0ZR1Or3XkzxEvg7jGF433HUtjhbWkmDgHze3DKsU8CKft1xFrMH%2BrmXCLWulfRVirx%2FBqjUHUjDx6qm2N5p5LLXGpuiSH9PYar7qtTHNOVBbDPR6wPAp%2F5Uk406YdpUcHEjgrJqecxWiBR33VNIFtqy%2B%2Fn0fZVjMdtON3FqQn&X-Amz-Signature=3f6ee7e96b187a81563377183d7e622cb2fd5f46602733b67eb17d459ba58a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6OYNJ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41kbi0S%2BGf4qfuxeFqI8Gtb1zSALoSHxV%2FEf8D4SgdAiEAmfgTZiZgKHpr9CPCl2dEio%2BZKBMUteLZfjnONqZTcXcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVpYstq528vKaJXBCrcA8wVZGhY%2F6UnhMDdj%2FQlMbJh%2FgFNiheDHahhGXdNfe50CzeCLv7g0Zpn2E6d5qrtaZ2q8F%2F81XmYicIY2bK05162HbpYQWvdtFi5%2B0YtH8gd0J0MChSqP1%2BmtONt5X62T5D45rxA%2BdCVN6SNCN4ZEN9extnyvNVEgmLdiZqaZjyQgrbweZpPa4Mf00pKx%2BGRPfms%2BHJtD7JGlhUnc0djGpsjLDCtSjC047kL%2BmxSteZW1TyEdW92HrCDm0amj9CU6kfG2AyQ14Rhm1q40slEf5dIqed18rDwOTYUGQn4Yg94v0Tzqqd8NoPUju8MHc3b2Zi7YPEy7hPffm86Qhpb0Ic%2F7FeHcReTqBOl2rv8Yp9MHCcuL4KTTRwKjMs8cIp7v0ZbSs5ZiCasXjg0sRluDmeZgN2IpB70YDO0OOZBs20Kz0CcRynYDGqRk%2FWBGw5NJS0wFpFJdpmgOGVPG18OKS%2FDPdVnS49X4mn0NGLYbONhWKaboa91MMqNABzv7LxBNllA25nZA3BWWtKDXeZBYx5bxMLKibcMCOfaAS1aq3em7NFw31rLuFW6Yj%2FZWlpSeAMFyNArE3gJor8qhwmDLym7RuaTNiwdSLNY201EAIJuVpNbQFTU9vMrBau5MOyGjsMGOqUB3huYcui8yU%2Bp%2FeVW4XetpyEPcoX2yBdcyaplp%2Bx5dnH8GQ2c9la0ZR1Or3XkzxEvg7jGF433HUtjhbWkmDgHze3DKsU8CKft1xFrMH%2BrmXCLWulfRVirx%2FBqjUHUjDx6qm2N5p5LLXGpuiSH9PYar7qtTHNOVBbDPR6wPAp%2F5Uk406YdpUcHEjgrJqecxWiBR33VNIFtqy%2B%2Fn0fZVjMdtON3FqQn&X-Amz-Signature=8daf31239d1975b06e14103209d27a38bac85b93046f5cdeb17d124eb6f503a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7XDUG3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfthOcWHMHMZZXehXOYOvPNNWwX4ncC4H%2FJK51UJ5JBAiBhSwWb0gTc7uTq62ZGLBW3ksFD2Awlw7xiSFtjbv7ZgSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCv9vUnpKnMJ8q2xKtwD0eJV%2B4AMeqKt%2F1sDgpx%2B1ttn%2BFNj%2BCTRSwkBa7hVmeoKltmhk6l11tV9b%2BphgjQPZk1I8sKa%2Fbqw55xJxeMKTBow5UVjAkCfGOxcuuj5pZfRWbG3JNYpLGaB5mPlBOmSF30sGkahSN93EPy2B7PRL9L2OO1dOCVqPk11Au9nSKMfkgL4w2Yd4EHumlbdhJwz3LZbUqSpsiZWUR1WcAo8ud9wD1ORi%2BmCBzLwNSe%2BbUwktEv8QQR9VL2JkvCHoCJewezpchPKCq4zyyfNZMg85UKUO9Eht2DjSGexniugAvNa4bP%2FIXCDFmU9RH6lr%2FrGSzWjRLEHrUu%2BSHgyqfefgP7eUqPosnXZbiHsDHalPvycRFM6Mjd%2F%2FikJFuGIZvHX83DqLbPlSjt45GG%2BKR6xps%2F02GG1SecouBI6SRDe30qoRf09kKr8N6fppfftVh%2Fjg5VzL2JIIgFU%2BB1hRpdTVHXQLN%2BXHlcabDvpL2N8m35orrSqkqi%2BVbW2Y9PoKBVpd2DBdmNuOfaHmuZ2gr4dej1WoIU4W93VyDAnU3mp8%2F4ZyRVBuSrfnfUNHx6IGeuGTWitPZ22wDivK4cA%2B2PjjoHiWqB6EkbbuQ%2B%2B4UFGqUOzFoCbVn236WI7vrUwmoaOwwY6pgHdj7XdiTklHVWXKXKTmIt%2FxbRDvuP2dA1DXAJ0Q8GwyEEHq9JtB8ZkWhynN8W19J7mzk3xgPeGY8nc%2BZw2yllFiGZd%2F49jmrsBBP1%2BfAXGAOD6%2FMY96ppNa1VE3bdKPKzXa3%2FFo0wyRn4wZQ2%2BoCuIcDDWLc4C5TYORzqrxOc7NK9QMmW%2FhNiZBcTkVN26fYL94Kj3RJ2uz3K2tyqtP69AC96YvV%2FZ&X-Amz-Signature=70c53286370e504851c548ad71464fb234be386a4f6f085fe03daebe4a9e046a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q5JH7R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTk%2F85bMfVcuQRG%2BSdzw0BWxXYCCZDyB9W4aHtdM99DAiEA0IoL5kKzuxHUCnQUWa%2B0y0pBOM1lpuHpcBMKnYtN3tUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3i1OkVgv1lIwR8MyrcAyQsvTBAHyihJzJli6pZxyClsNx8RJe5Bzq1y0MMqc%2B44peDrdF%2BUMzGgo9gLoEOl4TKMF8Xgil9z%2FArCJ9yaJ4tqBymbHadzDvzXkjNqC02pv6q9cMZgdh0ams%2BK%2FA%2BcAExxctOyvZPcRNVSPPadnSyy6mv%2B%2BMOvByqd5v2sUyUUkgMNwP0tsQ8x8ljHXsbQTjAoumxVqlZ6Mm8Uc%2F2JbU39oKcP2Qg5eK%2B%2F7uU%2Fxj3c08HqNDif61ZjhWN7vG58sY0jKjoS6ZdoXI9LTfc6NPXBuJGJ6Tir4W69gEdyy8rVwkjgWXGjs8Qv9NFItHvFtCWOb0KuTStZbkDAi6FWPYbY1guxDSmxMbW1ITEDBioQZ4N436s4V1V%2FfPWos2OL5qG11SbD%2B%2F9%2BqoHb%2FpmD9yam6nvLleTvubqOrGHgpbLIkSvY7yGj5opub7Ad7xVXCaKuajJQA7guzr15cQVU6LlngARwT9BZ3hqNRyzONNBWwybWLWf0PRW3I3jeVTzlncpAH4GiIymr924tw3U8iocLbVo8hNSx7P5PjiNmmqWCzd%2Foi0UmD18tpi%2FtO2ZjV4PkCTUp6vG94%2FzXj0gdyz2QcFMlaBI8Y9JlYCVedAx9HejtEGbXzfnr1N1MMaGjsMGOqUBRz2Z9uRCK2RfahTUT8LKeuGcDB%2F47r%2FwIt3r0nKEyhNF5v0LdS59E%2F8omYyOx0wm1vUe21RgdS8Eq1W9Jbtsv%2FV5q0X36pyeH96ccx2UALNNgcX0x6VEjdgjcywTRwZiaMvIzzTk7aKmdgxSOr5Q8z2OtCYTTP7sBLRFDVE3dsLZQg%2BxAq%2F3JbcrgfIz3E8IK5I89Tw198e1csvIIHUcP4tHhT54&X-Amz-Signature=3bd0c084de67a8f482f48af323f767ad56a68a04d5e09fa933882ad5ec59ebfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6OYNJ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41kbi0S%2BGf4qfuxeFqI8Gtb1zSALoSHxV%2FEf8D4SgdAiEAmfgTZiZgKHpr9CPCl2dEio%2BZKBMUteLZfjnONqZTcXcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVpYstq528vKaJXBCrcA8wVZGhY%2F6UnhMDdj%2FQlMbJh%2FgFNiheDHahhGXdNfe50CzeCLv7g0Zpn2E6d5qrtaZ2q8F%2F81XmYicIY2bK05162HbpYQWvdtFi5%2B0YtH8gd0J0MChSqP1%2BmtONt5X62T5D45rxA%2BdCVN6SNCN4ZEN9extnyvNVEgmLdiZqaZjyQgrbweZpPa4Mf00pKx%2BGRPfms%2BHJtD7JGlhUnc0djGpsjLDCtSjC047kL%2BmxSteZW1TyEdW92HrCDm0amj9CU6kfG2AyQ14Rhm1q40slEf5dIqed18rDwOTYUGQn4Yg94v0Tzqqd8NoPUju8MHc3b2Zi7YPEy7hPffm86Qhpb0Ic%2F7FeHcReTqBOl2rv8Yp9MHCcuL4KTTRwKjMs8cIp7v0ZbSs5ZiCasXjg0sRluDmeZgN2IpB70YDO0OOZBs20Kz0CcRynYDGqRk%2FWBGw5NJS0wFpFJdpmgOGVPG18OKS%2FDPdVnS49X4mn0NGLYbONhWKaboa91MMqNABzv7LxBNllA25nZA3BWWtKDXeZBYx5bxMLKibcMCOfaAS1aq3em7NFw31rLuFW6Yj%2FZWlpSeAMFyNArE3gJor8qhwmDLym7RuaTNiwdSLNY201EAIJuVpNbQFTU9vMrBau5MOyGjsMGOqUB3huYcui8yU%2Bp%2FeVW4XetpyEPcoX2yBdcyaplp%2Bx5dnH8GQ2c9la0ZR1Or3XkzxEvg7jGF433HUtjhbWkmDgHze3DKsU8CKft1xFrMH%2BrmXCLWulfRVirx%2FBqjUHUjDx6qm2N5p5LLXGpuiSH9PYar7qtTHNOVBbDPR6wPAp%2F5Uk406YdpUcHEjgrJqecxWiBR33VNIFtqy%2B%2Fn0fZVjMdtON3FqQn&X-Amz-Signature=ef12cabe4f502e44cf85539a3a5cb2da71c175d7765d83974d6bb43f6d4eeab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
