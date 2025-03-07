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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQSNX3BY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArOT95F6CFJMxRYNaXKO9OtwhYTq7RCvXHg2RMUXn6hAiEAplpbocjyl19vvBEHxxIE5yqyoghAzcI%2BRQn%2BUNfwsgEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPSKH2AOSgVXmK0f4yrcA2ZIxdd3dZf%2F3M592X%2FygvAB2d%2Bw0D1P8JzYdhiCnlFth7%2BdNr%2FZN1Z4WrUJvk0%2B%2BMuBpdquI6fFGbd9Ual3%2BY0JYDRObcht5D66BTMEbsVgsTRbUQT4Uhc6ZCf4qTgJb%2BQ8kKhSwe1Xp6sZdgJwxhhDawTelktIoCa7tzOu7QRk%2FRzHS%2BXJUP0p%2FkPqRjea289mHpHvvaEH5uapGnWRbnHm7lyWBWVoMn9710z5IpMuMxl10BHNbUvwfhI3WPYoTkCNDG7kxivy4tNP92gaIhQmqgkus%2BaqUZptMxtYidtVoasdpLMmXzzwN1oqFMB2CKY%2BrWLpyIJEYgIon8ACn0Ph7tqAKttONDE7kCn1vp6Shn9C7JRJUEq9m%2BebpkQP8Vln0%2Bu5Uc6hnEfFCq1QtK5KPhWHnDRJPGnrEYU3KUXjM0DGT5eZSBc91QR7JDcEB3jloJ5%2ByUr5K%2BTVKkwYppUT893%2FmULaYf%2BZtqqMFJuZxc3AwnSRK%2F8Dd4Hqye%2BlH0zfUREQW2Ex342Ej%2FYQFvs%2B%2Fv%2F0nHZnfcSXVu%2BNxCdor1uBBrvgF7Wwrcgzrpy2tjCD4deuW9TD%2B%2B6vij2nh%2BbjW51fEOsOWYYXZGhYa64Qes4H2jkwC0lKT2LEMOCHq74GOqUB9eUdXnaGAO1kpgknt5BBhcj6GC%2FS2dDapG4iNUuJD26kt%2BpZqKrw8oo6%2B%2Ba%2FeELNK6ftNed9q%2F34oQ4kyyCadoTDBORfNYejVurkPqgFC1%2BserFe3rwC906SQhai3ah2RZiPPxWQj291VzjmuWNC9jMqUvgjr0w5trbiHJy7FMjlhMFPz4DbMix63KKVeN4%2FJc%2Fnc7txOML5Sczep1VL%2FfWNvmnv&X-Amz-Signature=7085d504e569108ace1648ae7b11977f755e514f615b31fca854ccbc38d48c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQSNX3BY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArOT95F6CFJMxRYNaXKO9OtwhYTq7RCvXHg2RMUXn6hAiEAplpbocjyl19vvBEHxxIE5yqyoghAzcI%2BRQn%2BUNfwsgEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPSKH2AOSgVXmK0f4yrcA2ZIxdd3dZf%2F3M592X%2FygvAB2d%2Bw0D1P8JzYdhiCnlFth7%2BdNr%2FZN1Z4WrUJvk0%2B%2BMuBpdquI6fFGbd9Ual3%2BY0JYDRObcht5D66BTMEbsVgsTRbUQT4Uhc6ZCf4qTgJb%2BQ8kKhSwe1Xp6sZdgJwxhhDawTelktIoCa7tzOu7QRk%2FRzHS%2BXJUP0p%2FkPqRjea289mHpHvvaEH5uapGnWRbnHm7lyWBWVoMn9710z5IpMuMxl10BHNbUvwfhI3WPYoTkCNDG7kxivy4tNP92gaIhQmqgkus%2BaqUZptMxtYidtVoasdpLMmXzzwN1oqFMB2CKY%2BrWLpyIJEYgIon8ACn0Ph7tqAKttONDE7kCn1vp6Shn9C7JRJUEq9m%2BebpkQP8Vln0%2Bu5Uc6hnEfFCq1QtK5KPhWHnDRJPGnrEYU3KUXjM0DGT5eZSBc91QR7JDcEB3jloJ5%2ByUr5K%2BTVKkwYppUT893%2FmULaYf%2BZtqqMFJuZxc3AwnSRK%2F8Dd4Hqye%2BlH0zfUREQW2Ex342Ej%2FYQFvs%2B%2Fv%2F0nHZnfcSXVu%2BNxCdor1uBBrvgF7Wwrcgzrpy2tjCD4deuW9TD%2B%2B6vij2nh%2BbjW51fEOsOWYYXZGhYa64Qes4H2jkwC0lKT2LEMOCHq74GOqUB9eUdXnaGAO1kpgknt5BBhcj6GC%2FS2dDapG4iNUuJD26kt%2BpZqKrw8oo6%2B%2Ba%2FeELNK6ftNed9q%2F34oQ4kyyCadoTDBORfNYejVurkPqgFC1%2BserFe3rwC906SQhai3ah2RZiPPxWQj291VzjmuWNC9jMqUvgjr0w5trbiHJy7FMjlhMFPz4DbMix63KKVeN4%2FJc%2Fnc7txOML5Sczep1VL%2FfWNvmnv&X-Amz-Signature=2fbcce3ebbb7e902f26f78076409e1f5db7cf843ff245e167a13bd4ed1aef406&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5XWOVB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUiUijmcTl9r32cd5PjTxoyA2xEoBNE3twX%2BQ98BvJRAiEA4DY54Y7FfpKEd8YlfuIE6eMdFXncTnAjzkUp26XNFpoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOwvIAT2X%2F0sssM0gyrcAxOSBU1qnMhadzSG%2BoH3zWaHBsA2K9jR8kA3fTwqn7vQiBhe3LsxdRKROq%2BiyO7JU8Bop4ewRWR5hK65RP2wMi9P4r9Q8rg6SNs9aDAFNid%2BfrsjlFVej6Ve4%2B62Q%2Faghgsg2yPVsg29MCF3L1x3M62CDj%2FuAaAdTqj50LvOr%2B%2BGwMinGTkHghPqDze7k%2BSP2mbPbTwaT7NrC8P%2BboIFi%2BQjcFQlzAhhsSZxlgGXg4TeWmxbrMvnlvqvhkn1Jw7nwobu2DBGmeo%2BUguZFwY%2B8uc5%2FOYKoezA7ObQYWUXcKk0ErHJrQQr3%2Fhyig%2B5lB0v%2BK5xKHW4WAlhxqXoys4CIj%2BmuaMTW0tm5mY%2FdI91BpcippMnrlFv%2FoOyEsHAXmFb4g4J3WBiPwFjDUF%2BDYeTmv%2BzpGQKp2M2WpfEapWkvx57mdIpLPIKyhMzEccS%2FSKTSAkNpanTk5luLVGNOe6fOQhP2wa21VhmVTPdnT5ckMUQ0UktsVAzP1wP67V%2FnEEsmz6EE0ie8Lt2kWK7bCFx5d%2FyOd2UNGarn2I8%2B0tVg%2BxmPlo%2FROx4adhm9X2meak9lrH1uqi5ZA3JWU0UZR5o%2FMS7dAVXJth54Bc1hox8Dfj1PS%2BKNCGu8uXkoP2wMO6Hq74GOqUBoFBepOKM3ujWzTj6XGj07bp5%2B1S%2B1UEBt1tQeOWG6ZJdTvf8e8%2Bw%2Bt8gLT7unMzMljrWWZJGEna41xGQA1pi2fU08OUqlDrMHDjOZxdgoTF5NCf2TekDkS0WiSI01M8l8omuyjfPvOmsuoiWuIGZsZnkNfqYjRwubp4zYKBNXSA7NRDl28iiCnE%2FBNvdS%2FDkkTjRTtdmpZKiXmmQflZ%2FKMFQhd9K&X-Amz-Signature=6211e0fc7153d236dd01ffccf36e4ad8a149e9880dad6211c8484f5fe29ee1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LFJGIS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNasajLvDSIkpDpJcvpN9eYtHtUVN21EkLxxAaUrmygAiA4XrHUW7bbIJlqj5kotrT6fUn5jxowitAUabrp8Bwosyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMi7ELm3u062J2b5UEKtwDSOkI%2BKjteIGMrBKjvg58SdagzZGDEOv%2F2js5VYOUXQVMZdUlAf11ZIwF%2F4QEUyN5GwL5UNZgflbFlRbluJUVrlEQ%2FSop7DdA%2BkhSu6DQb9doCixkuRgAZagmYM78DrjzxW1Z%2BhUsONqR6Yxc%2BaHr%2FBmMqFcKPj44Y0xx1QaHuddYt4RU4NaEqOXv1ADYG0q1q7J1lqVc2CTqcUjopd2ISU5CYNQzkugNpelm8x%2BgW6kL8Lfq0e3TJkbefyiWEOLTfBCuWztNqDU%2FgdFaRKFf9%2BlnsOv%2BkPGlfGf5t9Rak73lIAvz3XAyRcuzbfq0EMP1Dxlzt9X99RS4YMWsAYI3x5iAQrFax1dYgB4r6AYVdZrEzcD2s2RC5%2BwNxmuN%2Bi4CopLYPm72ur5ThnT7YrnQ%2B5Fs5AWToLILEgX5SvI62R1FpgjGZE28FVu1y0EgmyszHOS3mQCriEqd3U62n%2BSIZRotJqyCk9FDBQ%2BRKQrm3moe3E5N2rl7nOL9unosqlVjxccxDUvdredWgdK7hAEx5ciMlKJ6EG%2FZvNcBBI0TuYPHHcQ6m0wd3x1TRvjup3C49dUCqgkueUIsnTbWM1PNv01kUE0jtnE1Y%2F5zoFtIagmmHrWZjNvAPuGdZWYwlIirvgY6pgHPM3eVNzUOveE7NIRitmu2LW%2F7f6wPjHbUGOdjfa5mfrSzT9c3sWEknTswlZLUxLs5C98Z%2F4Y7HbAeTjvk%2FOF1jgdVzuDk6TzsHRFbzkfPcIeosMstowUHaBaWTu4xamG5Aq0jPrEcjb96pS1OJLozpRcGUCWwzOLwCJnrgS2goe4Qe%2FA46DoPwcDRc9q6RvPlJvsL3N4EyE1%2FFbgt%2BDhbn0XtncAX&X-Amz-Signature=f6eeff142fe03d4f65772f262f3f87bdb3fd1b253cec6171e71c5459c0fd1f24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQSNX3BY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArOT95F6CFJMxRYNaXKO9OtwhYTq7RCvXHg2RMUXn6hAiEAplpbocjyl19vvBEHxxIE5yqyoghAzcI%2BRQn%2BUNfwsgEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPSKH2AOSgVXmK0f4yrcA2ZIxdd3dZf%2F3M592X%2FygvAB2d%2Bw0D1P8JzYdhiCnlFth7%2BdNr%2FZN1Z4WrUJvk0%2B%2BMuBpdquI6fFGbd9Ual3%2BY0JYDRObcht5D66BTMEbsVgsTRbUQT4Uhc6ZCf4qTgJb%2BQ8kKhSwe1Xp6sZdgJwxhhDawTelktIoCa7tzOu7QRk%2FRzHS%2BXJUP0p%2FkPqRjea289mHpHvvaEH5uapGnWRbnHm7lyWBWVoMn9710z5IpMuMxl10BHNbUvwfhI3WPYoTkCNDG7kxivy4tNP92gaIhQmqgkus%2BaqUZptMxtYidtVoasdpLMmXzzwN1oqFMB2CKY%2BrWLpyIJEYgIon8ACn0Ph7tqAKttONDE7kCn1vp6Shn9C7JRJUEq9m%2BebpkQP8Vln0%2Bu5Uc6hnEfFCq1QtK5KPhWHnDRJPGnrEYU3KUXjM0DGT5eZSBc91QR7JDcEB3jloJ5%2ByUr5K%2BTVKkwYppUT893%2FmULaYf%2BZtqqMFJuZxc3AwnSRK%2F8Dd4Hqye%2BlH0zfUREQW2Ex342Ej%2FYQFvs%2B%2Fv%2F0nHZnfcSXVu%2BNxCdor1uBBrvgF7Wwrcgzrpy2tjCD4deuW9TD%2B%2B6vij2nh%2BbjW51fEOsOWYYXZGhYa64Qes4H2jkwC0lKT2LEMOCHq74GOqUB9eUdXnaGAO1kpgknt5BBhcj6GC%2FS2dDapG4iNUuJD26kt%2BpZqKrw8oo6%2B%2Ba%2FeELNK6ftNed9q%2F34oQ4kyyCadoTDBORfNYejVurkPqgFC1%2BserFe3rwC906SQhai3ah2RZiPPxWQj291VzjmuWNC9jMqUvgjr0w5trbiHJy7FMjlhMFPz4DbMix63KKVeN4%2FJc%2Fnc7txOML5Sczep1VL%2FfWNvmnv&X-Amz-Signature=98a8479850a75ac28c256dea5a0c1ac3889b6f992c6b1190082ab2cef693b930&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
