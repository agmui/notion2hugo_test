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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ON4ANJY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG%2BiYuv6voX%2BkQ3MEvWdkWAOwan3Glo3M4Xg27lgelPJAiBc6MjLrZz4EvJZIUoErPRSpckPYknQRxDehZlsTktASCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMDqBzHNrO962s%2F7EsKtwDHd5ntFqV1rKhcQeLq8wzNcmH16MMU39ZMjmLzqW7hLeCGPQ1%2B6uKyr06%2BoDIKCWPlo5iZUpZ%2FOOCUV33BwVLXMP5QqhKz7SxqKTVNBUXGFUUl8jMGArvW2Knr%2FRxSgnb9d7a5rAcG9Rsgt%2FKitQ8kK3D%2BlbB5UcTSzcc4LmYkmCB%2FJuU%2BD96SaY%2FhQaycFPbBf4O%2Fzd0vjDDzSeWt%2FguKGa5D9KwKSgQ3%2F%2BPsIrQLiFToeorCwiavCCTCo6pNBngKuP%2FvmGaYXMwqiSNNosnqhDceUwCtRcWTkMe08CEGQp1f95bw64I3zRzgSXz0MCIoBxrzt%2BFy7fEcoAIHtQmKwJEVMzrW2oS7YYAQiL%2FPEHF3hzt8IQUHAbsKdlQy735fMqacoXe83lsl0sAeOiWmmVmz4WMmpN69EWCXKvJhFq%2FgGb6CNt29%2FGJZTqC5f2jMX%2FrMzVvZ%2FVaN1MeGSHLRTj3l3Ztwu1CV0QQfq566M6wxwcsKlzSryNz76sDmBU9QKCPFRp57EbRWx5WJj6ymz7J5VypuCt2ayzIsfmGvtsdQ%2FYjiFxdrt1LfDiAuWOAVJn6p5jKUgHNclnd4r6IwhgVpCdgLfEC3OXCaCMSL9iw2N4T9Q8TxrSscd4wi%2B%2BJwgY6pgHgSguN30%2BQWj87I080jp6FmupUJxNaDLa1qLH79oZ3%2FIsHDtzM1p%2Ba%2Fb4NF2gy1Z%2FF%2FeMr5nbEWx5d4aI8ZuGoasD3CtD9JOdZaQc32roFWFlWa2qHaRx029Lrt1ETM%2B3ThMmrRWMUaBtSPMfaQwFQUK2w7mtom4yM0wZkoanx0C3iYdGjb9TPqhwwigOGODIqqS6bmhALO6XQ5M6lN%2FRPOED%2B6I7w&X-Amz-Signature=0252e168daa1f8d3e9b8044b8612190d85c0f226daa8578cc22ef2d863d95ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ON4ANJY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG%2BiYuv6voX%2BkQ3MEvWdkWAOwan3Glo3M4Xg27lgelPJAiBc6MjLrZz4EvJZIUoErPRSpckPYknQRxDehZlsTktASCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMDqBzHNrO962s%2F7EsKtwDHd5ntFqV1rKhcQeLq8wzNcmH16MMU39ZMjmLzqW7hLeCGPQ1%2B6uKyr06%2BoDIKCWPlo5iZUpZ%2FOOCUV33BwVLXMP5QqhKz7SxqKTVNBUXGFUUl8jMGArvW2Knr%2FRxSgnb9d7a5rAcG9Rsgt%2FKitQ8kK3D%2BlbB5UcTSzcc4LmYkmCB%2FJuU%2BD96SaY%2FhQaycFPbBf4O%2Fzd0vjDDzSeWt%2FguKGa5D9KwKSgQ3%2F%2BPsIrQLiFToeorCwiavCCTCo6pNBngKuP%2FvmGaYXMwqiSNNosnqhDceUwCtRcWTkMe08CEGQp1f95bw64I3zRzgSXz0MCIoBxrzt%2BFy7fEcoAIHtQmKwJEVMzrW2oS7YYAQiL%2FPEHF3hzt8IQUHAbsKdlQy735fMqacoXe83lsl0sAeOiWmmVmz4WMmpN69EWCXKvJhFq%2FgGb6CNt29%2FGJZTqC5f2jMX%2FrMzVvZ%2FVaN1MeGSHLRTj3l3Ztwu1CV0QQfq566M6wxwcsKlzSryNz76sDmBU9QKCPFRp57EbRWx5WJj6ymz7J5VypuCt2ayzIsfmGvtsdQ%2FYjiFxdrt1LfDiAuWOAVJn6p5jKUgHNclnd4r6IwhgVpCdgLfEC3OXCaCMSL9iw2N4T9Q8TxrSscd4wi%2B%2BJwgY6pgHgSguN30%2BQWj87I080jp6FmupUJxNaDLa1qLH79oZ3%2FIsHDtzM1p%2Ba%2Fb4NF2gy1Z%2FF%2FeMr5nbEWx5d4aI8ZuGoasD3CtD9JOdZaQc32roFWFlWa2qHaRx029Lrt1ETM%2B3ThMmrRWMUaBtSPMfaQwFQUK2w7mtom4yM0wZkoanx0C3iYdGjb9TPqhwwigOGODIqqS6bmhALO6XQ5M6lN%2FRPOED%2B6I7w&X-Amz-Signature=43f64f4f01b7081830e77de5f6bacf0ec4fb2b1cc7ed3fb54a5b4c00f51bf283&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ON4ANJY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG%2BiYuv6voX%2BkQ3MEvWdkWAOwan3Glo3M4Xg27lgelPJAiBc6MjLrZz4EvJZIUoErPRSpckPYknQRxDehZlsTktASCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMDqBzHNrO962s%2F7EsKtwDHd5ntFqV1rKhcQeLq8wzNcmH16MMU39ZMjmLzqW7hLeCGPQ1%2B6uKyr06%2BoDIKCWPlo5iZUpZ%2FOOCUV33BwVLXMP5QqhKz7SxqKTVNBUXGFUUl8jMGArvW2Knr%2FRxSgnb9d7a5rAcG9Rsgt%2FKitQ8kK3D%2BlbB5UcTSzcc4LmYkmCB%2FJuU%2BD96SaY%2FhQaycFPbBf4O%2Fzd0vjDDzSeWt%2FguKGa5D9KwKSgQ3%2F%2BPsIrQLiFToeorCwiavCCTCo6pNBngKuP%2FvmGaYXMwqiSNNosnqhDceUwCtRcWTkMe08CEGQp1f95bw64I3zRzgSXz0MCIoBxrzt%2BFy7fEcoAIHtQmKwJEVMzrW2oS7YYAQiL%2FPEHF3hzt8IQUHAbsKdlQy735fMqacoXe83lsl0sAeOiWmmVmz4WMmpN69EWCXKvJhFq%2FgGb6CNt29%2FGJZTqC5f2jMX%2FrMzVvZ%2FVaN1MeGSHLRTj3l3Ztwu1CV0QQfq566M6wxwcsKlzSryNz76sDmBU9QKCPFRp57EbRWx5WJj6ymz7J5VypuCt2ayzIsfmGvtsdQ%2FYjiFxdrt1LfDiAuWOAVJn6p5jKUgHNclnd4r6IwhgVpCdgLfEC3OXCaCMSL9iw2N4T9Q8TxrSscd4wi%2B%2BJwgY6pgHgSguN30%2BQWj87I080jp6FmupUJxNaDLa1qLH79oZ3%2FIsHDtzM1p%2Ba%2Fb4NF2gy1Z%2FF%2FeMr5nbEWx5d4aI8ZuGoasD3CtD9JOdZaQc32roFWFlWa2qHaRx029Lrt1ETM%2B3ThMmrRWMUaBtSPMfaQwFQUK2w7mtom4yM0wZkoanx0C3iYdGjb9TPqhwwigOGODIqqS6bmhALO6XQ5M6lN%2FRPOED%2B6I7w&X-Amz-Signature=67f4bfd919acc3b45988315ab71a1853c94fda6eb4c2696df6d269184d0c1ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSDCJIQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7iqiltRfkR83z0d5jkMERflbHXmw2h7vKjxJQs2k2BAiBXNKJlDnREZryMWOvHax5pdiEwJrlsumImgD8Zj3ndBir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMjBeAGk3drLoSgXZOKtwDtrJ1bK4OMnU%2FcxuseRls817o0ltxv%2FXaJxMAzpfqqypbIKTqgN0907GP5Wh%2BmMCR%2BoY8Fr5duyI90s6tJf9yRc0ZtwY6uNIcicRIDJb9Cg%2F%2FxoEIWp4ASLPwM2U2ivcx5OXSnOXYr01nalila8GT2cnNTIYGH6B%2FlxEV0wo0PYEzPXhXQnV%2BLZS4%2BJrlTeHDTaR%2F%2F1VhBkl%2BjyajQ%2BMSVuyage%2B86ArsiLhkYvlcPZ37fryEvjqQ1eCGXQcSTzD7woZTnPRjzpFACPYqYyV8IXoyUSkFX%2BA2MDSJT0vhS6O%2BFkORicBUzfZcAqnDOrWkrVbSwVK1Tcouw9DZiXvoG71UcqOHYMhl2CapbGrvOaLKGeZlSIVlmnx4YkjrAihjKloFzyhDhQByV0T6%2BEDqcwm42nPQCbNvurc5O6jnWeV%2Fx%2FUH5thcZuohlSYaXHRBUxvKaDGwqPSCRjZyflR3gJvrO%2FlNjc5rsrhAGBmwaqFuWKtSn4SQG%2FL%2FH9i66mm7nDk4AHSt67SxVSyDuevDfLmbzHNPg9YoTwbhgbU19wo03U62rOde5djAaOAHmAg2k9FSW9IjAUHOGSPmk8KnwBkdDznqHr7oOLaIsuOSugqSv4o26544TLlGjSwwsryKwgY6pgE6Rk%2BY4bIHMB40HIEZ%2FT9trYxOfqwmACAvFoGaTiDUNi3UbG5GMPOLjWy9VchzZB0%2BjBU8ff%2B2gxZOw1Q5YCHD86AkETHlUKzbC4pqmmjvdCgCYdxnjIxz5yWXTNGM6VBebpyAdZp1i3wqoncDWLSMkW0nTHuYXx9eokax1FZ2MU3sl3QbZih%2BG1U4dV1fIpUrCGNIcLikcXsZVrbmrkTxEVWOpjEh&X-Amz-Signature=7d796277632081a821b22575a6934b64426ff111785271e937694ad87612f703&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466572AW2BO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHvyhoclSJsiEt1DkSqs3SB%2BwcOoNOo3%2BhlQk2%2F3Q0hcAiAckMtgpoMmz9MV5L1yZq8ditnFROmKDqXWdpTYlAEPWyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMKtMNyh5S1CTE11vaKtwDYeAzXPke7ilGQ5b%2BJoFYR5cj44rrnVVlDYQFc16YwVOS8zfi8ajOEy43vqA6VFejRYnM6sx0e4P%2FjAP91J4fhutPu0DwYV%2BUFhIHGRKAXwBztgh2cLgk5bBHOQw8nHQkxU3wFTF6YWFU8%2BTxtvt%2Bj4ooRho6YOIURx2yPluyw4067E3LqiiRjeY1YRFkBFlpomZ2H9ysg%2FIs5SgxQv7DjaYAa0WibkcZsCYkgEFNqmAf2A%2BjNVAfM5YeMn3PRtRYaWkqUbuHnAiNOGCKXeYqWNZ5ApADAKU2kUSvbRNzBpNLN3YA2f1FkcxPwXJXtCfhXk7hGyCi9bButDesBlZGB3wmHocFqHigzyTkU5F40vy9uXshzRKdkI%2F2iiw%2FkSLCKruP1XxL76lQvaO%2F2jnca%2FKg3UhsmnI%2F5gV84CCropP4fNDy7q3Hfj07HuSKZZT0hSvLvzFfz9pXBtLYGgmALv6JkLWUvnUB6QuwNFc7rkTkSKC81M9w2N1knbkqR5L3JkobBENWeYV%2F3HFif2X15NHxP%2BM8DCy3E%2Bv%2BOSBdmFWCNI62b2EgQh3I5QSCPbYek39a3Qs1QbtCRUUGOdndFrs3m5y3n4fqTQAkpVODb0QS6NG73PYMRQ%2FKVwowg5OKwgY6pgH7jpsmpmF%2BPUgDjqVnIF4p9bW3JojL06pqufewcYLVMDvwZohyDMBNNwfx3NhAgZ32LCZk3HYhvNtHs7TnleM6yuudRERxR9mh%2F%2F1eGCWrvRAev%2BKvvTOaKrhzn%2BtiB1PnA0kaSaDUY%2B%2BCIakcnh%2Bd4IOOtnlgOuuVhTdtoaa4PTrRMKFrDATmN%2BjcjTtpYnWzu%2Bec17PWke483QeP%2BTroqd9u%2B5Sj&X-Amz-Signature=cb114c932cc26611041ce2d480ea003727ad5ee6515912a91cd1e244d1d555c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ON4ANJY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG%2BiYuv6voX%2BkQ3MEvWdkWAOwan3Glo3M4Xg27lgelPJAiBc6MjLrZz4EvJZIUoErPRSpckPYknQRxDehZlsTktASCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMDqBzHNrO962s%2F7EsKtwDHd5ntFqV1rKhcQeLq8wzNcmH16MMU39ZMjmLzqW7hLeCGPQ1%2B6uKyr06%2BoDIKCWPlo5iZUpZ%2FOOCUV33BwVLXMP5QqhKz7SxqKTVNBUXGFUUl8jMGArvW2Knr%2FRxSgnb9d7a5rAcG9Rsgt%2FKitQ8kK3D%2BlbB5UcTSzcc4LmYkmCB%2FJuU%2BD96SaY%2FhQaycFPbBf4O%2Fzd0vjDDzSeWt%2FguKGa5D9KwKSgQ3%2F%2BPsIrQLiFToeorCwiavCCTCo6pNBngKuP%2FvmGaYXMwqiSNNosnqhDceUwCtRcWTkMe08CEGQp1f95bw64I3zRzgSXz0MCIoBxrzt%2BFy7fEcoAIHtQmKwJEVMzrW2oS7YYAQiL%2FPEHF3hzt8IQUHAbsKdlQy735fMqacoXe83lsl0sAeOiWmmVmz4WMmpN69EWCXKvJhFq%2FgGb6CNt29%2FGJZTqC5f2jMX%2FrMzVvZ%2FVaN1MeGSHLRTj3l3Ztwu1CV0QQfq566M6wxwcsKlzSryNz76sDmBU9QKCPFRp57EbRWx5WJj6ymz7J5VypuCt2ayzIsfmGvtsdQ%2FYjiFxdrt1LfDiAuWOAVJn6p5jKUgHNclnd4r6IwhgVpCdgLfEC3OXCaCMSL9iw2N4T9Q8TxrSscd4wi%2B%2BJwgY6pgHgSguN30%2BQWj87I080jp6FmupUJxNaDLa1qLH79oZ3%2FIsHDtzM1p%2Ba%2Fb4NF2gy1Z%2FF%2FeMr5nbEWx5d4aI8ZuGoasD3CtD9JOdZaQc32roFWFlWa2qHaRx029Lrt1ETM%2B3ThMmrRWMUaBtSPMfaQwFQUK2w7mtom4yM0wZkoanx0C3iYdGjb9TPqhwwigOGODIqqS6bmhALO6XQ5M6lN%2FRPOED%2B6I7w&X-Amz-Signature=92bee35abba8b0fa9972bfb1862d057be7bdea7c00ede41830f83d2eab79b1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
