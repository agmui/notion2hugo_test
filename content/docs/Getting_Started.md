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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWPPARQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa2JUg7P5UtVTFVFRAMQ14%2BxseTUmHfli11FoOUZiSEAiBA3AHasCdNux4zbq6gvBGNkeSSAzVfj4kWsHuXZgnQsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9d4%2B8iQFwuyxfmeGKtwDx%2F6AxcDr1X8ThXDHPWayggaLKiMLcNRFb1j1pTad2CRBjzndIw2XpkEnK%2BuFm19WwVCXnQ7DJ%2FCig5Q7%2BT7%2FHzeypBz%2BX6PZsmdsjoSW5S1KM64aLGPBKkkz6PTLmcbBtK4ECTi0B3GcDlC4MUQ6o9AkEOWSAQXsrcO5OmdDT6pS0fq5DYKU3VuFPS0t9xmNBmTwHj4ti0WISwlYCHlFIZVc%2BNHOPhN2QBZFs6PzmOa6%2BOHwhvFYbN07zMG7JDWNL%2B7H2CAAGH2ea4ALq9wuQWjyrm2h3uocQB8RyXQEUt4hXnzmIfN%2Bum4G3Kka1OQXJrKkhQWaiadsp2hVv4d3UuaEaKsSytheS2R07xMbf4G1iSurTpbzRDNqmRVLiUoqDnXKZ9rb%2FedVTspcVd1y0jrVRL9PhB3lRFPURDRMhUo9kEPT5Dlu4qCqJ9qf3Ubv9%2BxeDJgbqZTgnnQs%2BKPp4kJNgrkxpHPAns%2BhhS5UzHTgpMHCJakhCHUtdVo7RS6HIZqqqjpI2akmKVc7dKhaRPftPt4zkHGFecj4oMZrjcG83SvAMHJjBka0FzvcN7ai%2Bkstt9QxY2TfUncTT%2BW50RxlzJxKrzBXkVqwtoh2e%2FTgGhvcBXUNQwHyvtcw1vbyvAY6pgH2Rhln3YuqEDeTIlAoGkXoi3pGsEI306ezOVnChALZdtB%2FKtDZKStdaQcGwsanbHA2m1Ne4XJOIhXWIICbgUKfnbq1lE4VL718AxZz8R9hdHfZX7DAPlSMNB2%2FinqGMI4gTRNYEE5RT8SSZQDaQx9fVX%2Bfv3a6DYVPOt93dEtp8IZP%2Bjn2ZS1f3132hPfYPd58CiyD0SL23a4NEkJwDXJ1xkXR9wIz&X-Amz-Signature=e199eb3ab8f2741ba2cbe97d3f3ab1b283f6dce02ab8859dc8380f2cab6ab22a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWPPARQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa2JUg7P5UtVTFVFRAMQ14%2BxseTUmHfli11FoOUZiSEAiBA3AHasCdNux4zbq6gvBGNkeSSAzVfj4kWsHuXZgnQsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9d4%2B8iQFwuyxfmeGKtwDx%2F6AxcDr1X8ThXDHPWayggaLKiMLcNRFb1j1pTad2CRBjzndIw2XpkEnK%2BuFm19WwVCXnQ7DJ%2FCig5Q7%2BT7%2FHzeypBz%2BX6PZsmdsjoSW5S1KM64aLGPBKkkz6PTLmcbBtK4ECTi0B3GcDlC4MUQ6o9AkEOWSAQXsrcO5OmdDT6pS0fq5DYKU3VuFPS0t9xmNBmTwHj4ti0WISwlYCHlFIZVc%2BNHOPhN2QBZFs6PzmOa6%2BOHwhvFYbN07zMG7JDWNL%2B7H2CAAGH2ea4ALq9wuQWjyrm2h3uocQB8RyXQEUt4hXnzmIfN%2Bum4G3Kka1OQXJrKkhQWaiadsp2hVv4d3UuaEaKsSytheS2R07xMbf4G1iSurTpbzRDNqmRVLiUoqDnXKZ9rb%2FedVTspcVd1y0jrVRL9PhB3lRFPURDRMhUo9kEPT5Dlu4qCqJ9qf3Ubv9%2BxeDJgbqZTgnnQs%2BKPp4kJNgrkxpHPAns%2BhhS5UzHTgpMHCJakhCHUtdVo7RS6HIZqqqjpI2akmKVc7dKhaRPftPt4zkHGFecj4oMZrjcG83SvAMHJjBka0FzvcN7ai%2Bkstt9QxY2TfUncTT%2BW50RxlzJxKrzBXkVqwtoh2e%2FTgGhvcBXUNQwHyvtcw1vbyvAY6pgH2Rhln3YuqEDeTIlAoGkXoi3pGsEI306ezOVnChALZdtB%2FKtDZKStdaQcGwsanbHA2m1Ne4XJOIhXWIICbgUKfnbq1lE4VL718AxZz8R9hdHfZX7DAPlSMNB2%2FinqGMI4gTRNYEE5RT8SSZQDaQx9fVX%2Bfv3a6DYVPOt93dEtp8IZP%2Bjn2ZS1f3132hPfYPd58CiyD0SL23a4NEkJwDXJ1xkXR9wIz&X-Amz-Signature=b7cc5038daaac9bff4f9e37a8d5460e664f5da3ca88789cd68801d30566babcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSK2ZAT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKIAYhaEFeJJ%2B0lXzzTacdD4l5EwTN1FvY1b54F0AkCgIgHei06IXmdN3DumarL%2FGkbRek7UC28BhzcRmw%2BflG23cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxA7OlfP53D3Nll1CrcA1EdBQ%2BhRgqENM7nW8EBlAFrxpjBknp9ucbU06WM61TosF2f4MAwoPJ%2B6CzdYTmO4gdb1l3wu0MXK8nkm7rvD5Z9rQDv96Se7%2F4SbGEkNa%2FERPixGD7Oc%2F196mbD3JLnpB9Uuk9FKt2WzPh2eK2G5LOHyb91PAPpsPAjS4crivMW5DV5CLb99aqpaZ79fzv9z%2BOc8aNi6fmJK05ierOc2Lsi5KxdtghtqV55GmbTgGQZ2mkz5BxZtEoIM1Juo50VFjY6pgDF7pob42RxArbV5MBEEM8Zwo83O0tvPIwuvqkf%2F34tFRQywE8JPEVmUlzJtN7NVMdzf1fjkShxbQxqTJI9sG3%2BpW6bSX4IMZB3SOPJraoGSX0XhaI3qR48uoAuDR4Ki%2FhLa5TPane%2BebQ0F2E5QUKgZ6%2BVyLO2koMROcrnOabsDSkh24O9eE0dLj1PZib%2BsworJdf88mjNnTrvQ2cPIyhL4M8lTeZRYF8Huy57wOEwgc0QyZpt0HhYMCiRWCFGm9cbBhkaIVuz%2FreoepZjPIzc2a04zAGtUEfSSF0is16AlqiXXKpzf6VMhWj2taberyWjrDoOV7hsVuK9wU51BdAjWE8fEtgRQWpwMQSrbNXO0F9RiFzMqgSsMN328rwGOqUB3p3eFN8%2FdjWImV0AqZXPrd%2BY95EPKvQP0zLytcnbJAzgyTotoAE7wcZS%2BJ3YqzP35tUoOcVBhpP21RWdBtdBL5W6GTOO30UIUUPlkZ222NosxHH9CGfqvGkppztGPHYCj1AkzHNrUSJfZxr5buqZ1bi%2FFVZ6Hcli22iqIRx68Sgy4eReTB0mrNL%2B9oHftFlMWqRfqVpjXNiHQvDLNlNBesPioR53&X-Amz-Signature=9464be2842d3b6f97706fa264b1c1409168f2d6a977748dfdb98a449460c5b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDH5JEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZH1%2FgWzn9ItRm%2FuIZPo5yqtDxgI5nwcT9XHLsiN%2B8QIgTCiqVMz2GDAMFGA5avpUGpJAqbGE88O1dabp%2B31hApEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfw%2BD%2F7aDMEVQ%2FOSyrcA52GmPeyGkIha4k59xOYZz6K8eo2zKwImS1nDC2oCG9doFY8le4AiYb9tPpC6cdfkCZLQ8iS6D4DddXevi0FZcDONZmjqc%2FsYSRPqRi6nDhYN1k5Ts4e9FwdTLUVTccb28OX2X1Wm%2Ftc4TO1r5Y2aKII1SZ0M5YmIQbsTLfN5n1zGfgJstxh90fSbp%2BIodwI8AkRgqXWO49ooHcc9Em%2FUlkyLo6smn6ATHSIKrjtTB8XSpjWso%2B2itPE%2BAA5GS6gGp3jmLjf3LHZm4KyeKQA4D5xzPHfF4Ssolo%2Bu%2F3H2ZEw0ZsTSg2f3Uxgx5bh%2FIrJXAPV0kKibWQqOJZ7bb5UflH4Se6Fp65EDn3OYZT5%2FyWexbCbpK2nHT0cbqIqbW3%2FcavBzA94a7YuAAama3JcoZKVoBvdw8Xd53CtjlodCE%2B7NW9NqlP2pat09dmAVzO5FZMaDBmYXi9aMu2NTaYC2IXxNmZqSsc7YIO0Y8ug6kQaNj25wloOQJRjRR5kWd0O6GM27k9vclliE2zAdQ2%2BYRxi9J3SRLEvYbOlzBvFsUJpv%2FUDCnWpDhrbshDDhET3EA3fkzFJsaOrunCKDyJgWXOaE%2FXEDNsX2FqujADFFJZrDrOMFmY8PQ0zS%2FB2MP328rwGOqUBrUXuAqUGdtFwAiyuLp7wnvh%2FY%2FhE9wFA0Yr9mzKYh3XnwxZ9U3rBCH2m88O7g5uC6VOBlw4HjheRua68wH2tBcIl8eNAbhn3%2FHgFZNpBW2bLL%2FHNbMiH%2B7CB3GeGXJO4sFsbP%2FCMU5N6BbQh0bz82pjVJL3fjcOy1slsDidpmHPQUTeVI853vLRsDLqWkTgfgjNLnwyMjYlRO81oaQc3wQ9GuWqH&X-Amz-Signature=15d1b27dd151359077ae16e92ce9a81ff56e3e0ca1b6bb3d3768028c3ebc45b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWPPARQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa2JUg7P5UtVTFVFRAMQ14%2BxseTUmHfli11FoOUZiSEAiBA3AHasCdNux4zbq6gvBGNkeSSAzVfj4kWsHuXZgnQsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9d4%2B8iQFwuyxfmeGKtwDx%2F6AxcDr1X8ThXDHPWayggaLKiMLcNRFb1j1pTad2CRBjzndIw2XpkEnK%2BuFm19WwVCXnQ7DJ%2FCig5Q7%2BT7%2FHzeypBz%2BX6PZsmdsjoSW5S1KM64aLGPBKkkz6PTLmcbBtK4ECTi0B3GcDlC4MUQ6o9AkEOWSAQXsrcO5OmdDT6pS0fq5DYKU3VuFPS0t9xmNBmTwHj4ti0WISwlYCHlFIZVc%2BNHOPhN2QBZFs6PzmOa6%2BOHwhvFYbN07zMG7JDWNL%2B7H2CAAGH2ea4ALq9wuQWjyrm2h3uocQB8RyXQEUt4hXnzmIfN%2Bum4G3Kka1OQXJrKkhQWaiadsp2hVv4d3UuaEaKsSytheS2R07xMbf4G1iSurTpbzRDNqmRVLiUoqDnXKZ9rb%2FedVTspcVd1y0jrVRL9PhB3lRFPURDRMhUo9kEPT5Dlu4qCqJ9qf3Ubv9%2BxeDJgbqZTgnnQs%2BKPp4kJNgrkxpHPAns%2BhhS5UzHTgpMHCJakhCHUtdVo7RS6HIZqqqjpI2akmKVc7dKhaRPftPt4zkHGFecj4oMZrjcG83SvAMHJjBka0FzvcN7ai%2Bkstt9QxY2TfUncTT%2BW50RxlzJxKrzBXkVqwtoh2e%2FTgGhvcBXUNQwHyvtcw1vbyvAY6pgH2Rhln3YuqEDeTIlAoGkXoi3pGsEI306ezOVnChALZdtB%2FKtDZKStdaQcGwsanbHA2m1Ne4XJOIhXWIICbgUKfnbq1lE4VL718AxZz8R9hdHfZX7DAPlSMNB2%2FinqGMI4gTRNYEE5RT8SSZQDaQx9fVX%2Bfv3a6DYVPOt93dEtp8IZP%2Bjn2ZS1f3132hPfYPd58CiyD0SL23a4NEkJwDXJ1xkXR9wIz&X-Amz-Signature=0a8c1ac13acd92a314a07a2bef72421988766a63649cfe6f7628fbcbf8e9cb9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
