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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUQTDUU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIADP1qYQhXXqPWpTnrKb7BQXltOiw8YPFYRIbmoIpTapAiEA%2BUJvCQi7L59okxs4SVKfLFw8wS8FzdZ0n53H%2FjzWdlIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FtrK1RGGTSNBusMSrcA%2FIo%2FG7W2ZYzSfc%2BZcq7XGCacm1Xcgg%2FXky4RRdlJIcAjYc47GDDZk0liIRa9TMCGf%2BYoMC3yS8xGXKzOF6qGyO48n%2FeTJsCrMC%2FyVrJwMFgOGCzlDk0koICXgV7JGPNTM7p1jJZajX58MqN%2FZyFvlEWJ%2F29FnT2XxszkEMS0ual0GNbm3k7amlCnGxbdlgFhbDNlOB%2FelVwFPnmc%2FOM8NjbPoVlDW%2FEIR9tu6pTfKm9PsDu8fK8%2FfA%2Bv3I6ItBtbpmbfyVCAn8zuQMD6fyT%2BBv0IV0nCdhYmSPOYt05OF2AME5tboe1U%2BRN9XHUO58bglnZS5jQ2g7dLbxvnGlqHJbuAKIfD6VAYMSMmetkfBPENWoZZwN8E2kjKcOxBqpkIh40zUVRsSUR63N5dfnU5vkrsHomHqm%2FRzB1hSbzyyOGihh5HleZeHsx%2BQscPlu9ah%2FUB5AtVZNTjDQ3OYSUfMQBYZidDrZdJWcoJSb7b%2B%2FHECKA6hUCItVbSl2zmy2WHbak6J9YZ5c%2FszBP%2Be3VF4np9ZLmvFotbV1E4CwVnYCLtesf21dwlPlj48MFak%2ByGfpECrRfMH45TwZ1wXwDoJKZzZL7AkubqnFKhzVqNKMi3RYp5CUd1JzPH9dTMIa4578GOqUBlzRxA%2Fowmyy6nqrncWkR9oSivJhJ8kwfSXJxOTn1CHa6P2fUXIvBIY0B3vI6o2SVar4h93Qwas6Ut2leFrtAFK8t5%2FuDbfgZ3LeD7kcTBi8WGEJYNblyJL3RHHhACHOegfmN3tTA2p5VOqkxfSbfkEnk3eC0fU%2F8v3OYTYpmaX61SbfS5LoeN1RGlJVekVsIU7e1q%2BjkSXIgFREk4U4y%2FDXm6XZu&X-Amz-Signature=deb7f6af5b7bc69675d9de533e71bf9546d8d5d92fa0ccaeeef9eb6b0aaad17f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUQTDUU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIADP1qYQhXXqPWpTnrKb7BQXltOiw8YPFYRIbmoIpTapAiEA%2BUJvCQi7L59okxs4SVKfLFw8wS8FzdZ0n53H%2FjzWdlIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FtrK1RGGTSNBusMSrcA%2FIo%2FG7W2ZYzSfc%2BZcq7XGCacm1Xcgg%2FXky4RRdlJIcAjYc47GDDZk0liIRa9TMCGf%2BYoMC3yS8xGXKzOF6qGyO48n%2FeTJsCrMC%2FyVrJwMFgOGCzlDk0koICXgV7JGPNTM7p1jJZajX58MqN%2FZyFvlEWJ%2F29FnT2XxszkEMS0ual0GNbm3k7amlCnGxbdlgFhbDNlOB%2FelVwFPnmc%2FOM8NjbPoVlDW%2FEIR9tu6pTfKm9PsDu8fK8%2FfA%2Bv3I6ItBtbpmbfyVCAn8zuQMD6fyT%2BBv0IV0nCdhYmSPOYt05OF2AME5tboe1U%2BRN9XHUO58bglnZS5jQ2g7dLbxvnGlqHJbuAKIfD6VAYMSMmetkfBPENWoZZwN8E2kjKcOxBqpkIh40zUVRsSUR63N5dfnU5vkrsHomHqm%2FRzB1hSbzyyOGihh5HleZeHsx%2BQscPlu9ah%2FUB5AtVZNTjDQ3OYSUfMQBYZidDrZdJWcoJSb7b%2B%2FHECKA6hUCItVbSl2zmy2WHbak6J9YZ5c%2FszBP%2Be3VF4np9ZLmvFotbV1E4CwVnYCLtesf21dwlPlj48MFak%2ByGfpECrRfMH45TwZ1wXwDoJKZzZL7AkubqnFKhzVqNKMi3RYp5CUd1JzPH9dTMIa4578GOqUBlzRxA%2Fowmyy6nqrncWkR9oSivJhJ8kwfSXJxOTn1CHa6P2fUXIvBIY0B3vI6o2SVar4h93Qwas6Ut2leFrtAFK8t5%2FuDbfgZ3LeD7kcTBi8WGEJYNblyJL3RHHhACHOegfmN3tTA2p5VOqkxfSbfkEnk3eC0fU%2F8v3OYTYpmaX61SbfS5LoeN1RGlJVekVsIU7e1q%2BjkSXIgFREk4U4y%2FDXm6XZu&X-Amz-Signature=bba89f86514184e09cb448856db235d2ea9591b745825edcfb51dc4a86d7ac0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEXTNEX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCo%2Bh6SyfzijLvQQRA%2BumT%2BpIA85pIbPV25Or3d1tIaTAIhAJ1wUYA5KZzuTNzo%2FR14NxeO8r3vq8sBOajt6jdBe29HKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwakNsee5OKDjU6zAwq3AMFsOF41Xvbp2F%2FhomQ7wwBadkpwU5RF95hc1SrhV3hM6UIQ%2B7zQCtRFb%2FDVQ3GBTJ2x%2F6qSphp2LdIQKVv4KRPh2i%2F5YLBP6L9Uv4Nax9xLw159lkjzrCvaEvGvASyhnVadLgHorRf%2BMjBNC%2BWfJg%2BShJjNdul%2Bcj6HZz%2B6YHLlwgQskF2fxdhvKj19wKRgeTfORa%2F6g9YyS3QGTlg0SriG7pveye6WOePkUjvOiNzxY%2BAdWZtH0PJt12CiGJJsB3396dd8%2Btn%2BxPxwaPh2EvdyWFqkG%2Bl2gP8zKpHXZ26jskYZaLKPxlq0%2BQ1oYdGy97M9RxPalFtFiZpgQRUwKvFEdCi0ob1iGL%2BIp8Eo0QQ%2F%2Bdc1BVcP9dwhkmjuoO0dO8lpxkvKvPgmYuZNWcyydiiKSHTqDvXTBLi2HYA7sMakyHzh5DwhQhwauBL0B%2BIQWY8sCK%2BxHBNJAzBk%2Fri0U49eoaQ5E5JhyIEAtbfo745kLNzpjRmbk%2BI00NHvjVZR6FlPFPmXWqGYrKGDs8gSoKGBlg0tkYXsBHdzO%2FVHfQlw%2F4G6%2Fkt4Fw67AQEvyZcZ2RD%2BT0dbyKuD4n0uY0CxhygkTsnvfIBWHXHrfzGInUoZO1FqyYW%2BMEtoX23rjCMt%2Be%2FBjqkAXHwD44bkzTcHuaruTuC85iRp4ic37Ozg15GrEDRJCD96NtmLsodRP5yf7vRzxHNVsX9y45zR5snwOHHAHMaCAHiL4gZE103I%2BQqjfVEcwmal%2Byt5ROs8FKqiT1ISk%2Bt9ML8E1yicsBkZeB1W2qCd2SQC8ccPZ66GzfdIPm3llw95pZdLlZ8Dt0asPUSdiMfNVvjjwAWwZWxvO20I9ChmEkBv2Uv&X-Amz-Signature=aef5b238a6ef02100325c1b42460b9f413bdbf87980adc274005c834aa99701b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXTRLVM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFd0TtdkBw20%2FVy5lHHYSeNHMhx4f7%2BHigNhULRWAV9vAiEA2qzHJVjH1LgYH8%2BkcVjfQ66FrwRa0OkBk8ENjwPwA7sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiT30%2BPMoqs1fzwBircA9a2S3UNiNK1RK9ZqkvWyEjBKKPGEyrR3a1Yua6oiJHizfH0Eh%2Bl%2FyoJ7Y9DftxVvJOz5zJ05ebuPUnVi9k6Xv%2F1oj83JjuhGGOBx8bJlndZN2hJdKjhawSEIw%2FQyx5ilc%2FBZip05bQsuplEcg94WVLA59k2WgsHVM7Jv1nABl6NxD3hiBPrDaOtfUiuMdqAnbebISQ8ZB0j1mnlam1OAgTJQdFfd1nBw2pBQgNyXFZmGxSMiwCYM1fFakQ%2BGD0R7dvCMkelDMjPJ8eGoGarIMLiMWbbGn5AHVm8Z8Wb5NM4UAIlfwFrEtsngCVveSbboVSM%2B9Im4296qXV4HVP9cD%2BkJaau5V10AH7kMNf7KJPt6tBNX%2B13CYG2%2FWvsdsA4DbUQ77BZeB2eBH3x0aak1xaBcOGkPneX7kuCCj9PxtdUtycpTV5mOtm2XJnADTXih0Wh%2BJnwl%2BcWupvuqdSSRuvc8pi7FzUsIJO2POTpn2TNFgUntySdIDoZ%2FERmpgqHGjHK8sF%2BlPiwwlYQQ8yZ0d7%2BN7O%2BCDvgvCSJaiTcuKm%2BZXVRW0deF%2Bd1qvFm3b5FKTc5dt%2BhLDdpp782ROhXU%2BDOQNBKEmhgtmN%2BrmhWcUbvjG%2BfxhaaeQK6bSI3MJK3578GOqUBtqWndCmEjsK2WWnLSk%2BeKBV06gJcJyd5SzQ6BqmOC0Xhby2hNfP1slNvU0z4C0F%2BRIhuG2oGkY%2B4G979VB%2BzJZodA6azBXnuOks63KsH%2F1aKpDFrY3Rab%2BugL9LQ9avtmh9fwV83LSY6ntuQX7kdvCV8HmahBbu97it0RfCDNmqkXdXKUULJjJF081MX0gjfDKq1d9Dj5mn2k6KT%2BzHMUaOy5IOS&X-Amz-Signature=fe3ca1792fbf648930ddb0605d20af1553c29e5626685b27dfe2c58f9d411180&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUQTDUU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIADP1qYQhXXqPWpTnrKb7BQXltOiw8YPFYRIbmoIpTapAiEA%2BUJvCQi7L59okxs4SVKfLFw8wS8FzdZ0n53H%2FjzWdlIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FtrK1RGGTSNBusMSrcA%2FIo%2FG7W2ZYzSfc%2BZcq7XGCacm1Xcgg%2FXky4RRdlJIcAjYc47GDDZk0liIRa9TMCGf%2BYoMC3yS8xGXKzOF6qGyO48n%2FeTJsCrMC%2FyVrJwMFgOGCzlDk0koICXgV7JGPNTM7p1jJZajX58MqN%2FZyFvlEWJ%2F29FnT2XxszkEMS0ual0GNbm3k7amlCnGxbdlgFhbDNlOB%2FelVwFPnmc%2FOM8NjbPoVlDW%2FEIR9tu6pTfKm9PsDu8fK8%2FfA%2Bv3I6ItBtbpmbfyVCAn8zuQMD6fyT%2BBv0IV0nCdhYmSPOYt05OF2AME5tboe1U%2BRN9XHUO58bglnZS5jQ2g7dLbxvnGlqHJbuAKIfD6VAYMSMmetkfBPENWoZZwN8E2kjKcOxBqpkIh40zUVRsSUR63N5dfnU5vkrsHomHqm%2FRzB1hSbzyyOGihh5HleZeHsx%2BQscPlu9ah%2FUB5AtVZNTjDQ3OYSUfMQBYZidDrZdJWcoJSb7b%2B%2FHECKA6hUCItVbSl2zmy2WHbak6J9YZ5c%2FszBP%2Be3VF4np9ZLmvFotbV1E4CwVnYCLtesf21dwlPlj48MFak%2ByGfpECrRfMH45TwZ1wXwDoJKZzZL7AkubqnFKhzVqNKMi3RYp5CUd1JzPH9dTMIa4578GOqUBlzRxA%2Fowmyy6nqrncWkR9oSivJhJ8kwfSXJxOTn1CHa6P2fUXIvBIY0B3vI6o2SVar4h93Qwas6Ut2leFrtAFK8t5%2FuDbfgZ3LeD7kcTBi8WGEJYNblyJL3RHHhACHOegfmN3tTA2p5VOqkxfSbfkEnk3eC0fU%2F8v3OYTYpmaX61SbfS5LoeN1RGlJVekVsIU7e1q%2BjkSXIgFREk4U4y%2FDXm6XZu&X-Amz-Signature=7564524d4fab574f38c4afb3d1a5cee4a5bfc3ea1040649cc3986363957fcf4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
