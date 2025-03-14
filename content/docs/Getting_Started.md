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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=bdc1c8aba2a8e2176df9f80fb9aa27b2a28ea07900a1d9a23d647e33bf679b30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=61f624208b12620bbdabd026f722329a15f4de759dcee2d281189c70bd2a9be1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTQMWDB6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAoOxQTFJnZV2aAp3vC1uM9AGOrEiq%2B4lS3DNo2vehpAiAHxNu3FD1ws6%2F%2F0cVB67tmo%2BdEv7KlApJmsIS5a0rWXSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF00IUHLK4EUbaCIOKtwD5RUVmVffYgJDgt0eq4hgSeLsoBgqU6SbgDipGNS1jJA9a2AaqG29IXnsgqc85DG3yPwj6HBTpnBTe0Y2sGK8HQg71bTExluLAb8mZ%2FpD1%2Buu1O8noRUgw09nV%2FkPp0IeOynqW5mThaYEOXPhakSLOWOZq3k6zKeTjmbuIYHULTjAnBNa30QdHnpUEUjZcjuNTYFOUDZuDz49Io7S%2B4L7U6IEGqkQVahRfL5mdS71hdAQeNQkySzIb35FoeaMZwZdZ67njZiPhMvBe%2Buy1yiG8J0uyy%2B5AdVr8iJK4jYjmsQoXNsR4UgHEdaDebRsJ4wllL97S%2F024uqdhpJpqIT3JacFDHnRYbI%2B5A4Jw9B%2FXaq3TWhoHRA%2Fl81CqMgsRBajhjExgteMNCAb2DAE6BmimCu5WUKhRRJNdYh%2BC5xxmKpkyunNVzaoFRs07%2BPBEdzUXhOH%2F7BFrcC1hjb%2BfCTkTc5CyOV7s1ZmP5yfmP%2F4sz%2FnREKoG8QH3%2BjPpjTmSYheygrWPsbNK0Kwqpy0bAeFzj74x%2FFpKipb6Gmlchgz%2FTml9%2BnMX08G3sIg7v1b8RvcwHT3leQXHE%2F2ibPkPD5g6r0L3lVBSkfdddLev1GfUaK8NKdOi0llCHkZ6YMw1ovPvgY6pgGngJb6jywo2CyjWvvEDw1aU601rFJ8hRx%2BmqbUIrXb9fqqQrbKTYdz6gGnQBeWP3mQM%2FnQ4hQRK%2FpUvcLnaUZyVEsme0ef4b2C1EhzA7Y5WU9EPOCZzrdcmLwQ2rvUC9eiIRcaWxh6odAAiL4ECxygQHtLrCAHUx%2FQOeOQxYGXVkDrVBG4pI0ThPRsuuw9PsxR%2BQe9PylUnT07UWEvs4RlKqZLFTES&X-Amz-Signature=ab83970a07176a682eeb34e07481173b47a4868c2eb0b2283656b54f6cae21c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXFVJH77%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmft8GaEqWJ10BkFRXHWzSsmS5y%2FADsiptRJioG8O43AiASen%2FfSBkaN6ubZwtN8qOkY6RZdOt1sSM7QzwlQTedaSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSeyMxMMxC0sq%2BfE1KtwD1Xaa6s8c1TjscLhTBGEDG4vfZtPJs%2B7kCh%2BYSitjVDWP6mNlJWUEaxqwOmDSKnheXtHsyOsGd9dR8qVQI6xqRqV8j4L29f0xPxdY%2FCL0%2FZtEDsptpiu7s8Ar6gYLzkqRMCj7ENH%2BiB%2BeyVUmKnKPbyVOytWPWcayySoaY6HvdgcVIKJsD68%2FpsvNToQpdn8%2BbJqiovjSnWnA0M%2FF1kiJosslJqt%2B0jlCk9IUv6aynnoWMrHyG8Kdfsa5Mq51wzmrucyfEy9uwqunI8y4SSTaou1U7okSJdkVNQi3EvdZGiK%2FRPHH3iMiBfU6RsR036n%2F3kuaOqV1rZdIqsuuwfuKa8Ci6UgQ%2F2bxJtRt4wcoyaWEoqHRL7yk0pUl7UwFP%2FHbUBOKhf3EEysyBrnIh%2BmIDHxlMruVkoJ6%2Fy6mfTGV0WT2QmIpLJWHjw8gOB%2B%2B%2FQ5flS4F7b9UcJvR91hkyDpW06SjMO33JID5RkXvEgSB%2FuWA2srOyPpydKjmAIwzazn7siR14AsJwB2i8u4w1kIy9%2Fc7rkAVhj%2F7k9vtuA90gRL2hujijLoVHNilTq82hOijFq8JK9SDedFEvtUsaXOgsv1ATWlxtmbMMw7y0pJgbFPhCdV6NPjryXTr%2Fbsw9ovPvgY6pgFTJbRjmCNq5gQBDj9%2FrhHMi6BTbDy1wLyMQV8H%2F%2BtzIndDFIchBT2wRrTjKtdxCaWIFD0wmEzYWy8EKXyP70SxGNaDoRe%2BNDdeZLFXXiBkVd2rDftVpxjj%2BhRjJ4shjH8S6PhNZu5nmBl3l9Tf%2FNpzOgqg74GuIb%2BnVLP8X4%2FtYJ6Vbb2WCofyTsw68hU%2Byn9E9fUlVB4VbzYJ5Iya7gBp3QtGXogI&X-Amz-Signature=dcbda8b1bcd294aadd607af6d4b31188e5b375fe343b204324284eb18ba2a64d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=7b34136f0a820645c64f68ed3eed26454b50aa628a9764571f5b7747adce4e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
