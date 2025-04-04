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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHWDGFU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRx3tTNqf%2F9fOZDtl2ig22NhTmY1dl7Fvd6wyetSHJRAiEAwyewk5N2p83a9QrJuIVaxYFbCSiMwghqKcoaryY2g%2FsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQK8lsNq7c6I7eDvyrcAxSUFFq3dTX2U7W62sfaqAQr1pqo1Tanm2ObmHTn%2F9N%2FhN777767g42ZwlwBUFvg7z76wW0EIc1ceUsGdNQuNCY5pHjL99rPMxcBqi7pXHGLd3x7YVn%2BsvOcRbqev5Ma2WkKHzDSgYOjd0IzQhxdpiAMhwpLGBigEHYEhMzLXCqbw2F74XW75x%2BCXCiXAISvFtFb%2FcmLBciWEtPkrmm7h31J%2FENhYaoKP4aqs1MEZeNUQXn1Sm9cbdK68HccWND9dizfu52x3Z2AihgBaPV2i5Jc%2FDNQKBMjLjUbsum%2B3F6urSeAR%2FMvvNThTmKaYLKwNWAV%2FISbp6PHdrAzFlra9dzzuMDTintTvoOKYsv8tRVprP6IF%2FH93jm%2B3SajGowo85ElxsbSS77znBP2lr9KgdEwAgCT8i4FGBkfQZ8tkUHuhvOPIr9cy5K8w2FmT%2Byh37oGIDvqmcWMIZEC6FcsDIoxgHIf8WTsZOJz%2FPkGYnXWzjQJwN8qt0H%2BAibYezoL6YIZT9u4crMmPlk00SMWByfaNgJ5majCUX%2BygCTSPkxioXI7ZmG%2FZXU7ygJJPGYR6CczTIlVa0w2HPlG3zZnChFdU%2Bcs%2BBrzEDOWBIbY%2B8WWWy8XpDl2%2Bb%2BEv0HkMIPfvb8GOqUBey2bx4xCzUx7qNPZ6BBBp7zYkVGck8u1EoBM7mDdtLEyOA3JK6Xkc6xqh4DxqigMp1rbFk%2FbFhW57wjR1j%2FKbQgGU89E3EAm6HESEKaX%2FwDMWqKyxwZF4P8dsns1HC9hC52EF2w1PgqCA56Xsk0yZyS4GLYuSMJ01%2BWTbN1CbDauhBVnKckrsprjPLhHvGr5Rulgg%2FQUX2M%2BZdxFvdjpPv0iLkOI&X-Amz-Signature=bc1bb487e011381257c48ef6f8167d409ddda8521a2d1d77891dcf7a686c9f43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHWDGFU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRx3tTNqf%2F9fOZDtl2ig22NhTmY1dl7Fvd6wyetSHJRAiEAwyewk5N2p83a9QrJuIVaxYFbCSiMwghqKcoaryY2g%2FsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQK8lsNq7c6I7eDvyrcAxSUFFq3dTX2U7W62sfaqAQr1pqo1Tanm2ObmHTn%2F9N%2FhN777767g42ZwlwBUFvg7z76wW0EIc1ceUsGdNQuNCY5pHjL99rPMxcBqi7pXHGLd3x7YVn%2BsvOcRbqev5Ma2WkKHzDSgYOjd0IzQhxdpiAMhwpLGBigEHYEhMzLXCqbw2F74XW75x%2BCXCiXAISvFtFb%2FcmLBciWEtPkrmm7h31J%2FENhYaoKP4aqs1MEZeNUQXn1Sm9cbdK68HccWND9dizfu52x3Z2AihgBaPV2i5Jc%2FDNQKBMjLjUbsum%2B3F6urSeAR%2FMvvNThTmKaYLKwNWAV%2FISbp6PHdrAzFlra9dzzuMDTintTvoOKYsv8tRVprP6IF%2FH93jm%2B3SajGowo85ElxsbSS77znBP2lr9KgdEwAgCT8i4FGBkfQZ8tkUHuhvOPIr9cy5K8w2FmT%2Byh37oGIDvqmcWMIZEC6FcsDIoxgHIf8WTsZOJz%2FPkGYnXWzjQJwN8qt0H%2BAibYezoL6YIZT9u4crMmPlk00SMWByfaNgJ5majCUX%2BygCTSPkxioXI7ZmG%2FZXU7ygJJPGYR6CczTIlVa0w2HPlG3zZnChFdU%2Bcs%2BBrzEDOWBIbY%2B8WWWy8XpDl2%2Bb%2BEv0HkMIPfvb8GOqUBey2bx4xCzUx7qNPZ6BBBp7zYkVGck8u1EoBM7mDdtLEyOA3JK6Xkc6xqh4DxqigMp1rbFk%2FbFhW57wjR1j%2FKbQgGU89E3EAm6HESEKaX%2FwDMWqKyxwZF4P8dsns1HC9hC52EF2w1PgqCA56Xsk0yZyS4GLYuSMJ01%2BWTbN1CbDauhBVnKckrsprjPLhHvGr5Rulgg%2FQUX2M%2BZdxFvdjpPv0iLkOI&X-Amz-Signature=0f86c135b6ce7efe71aed543446f6dd8b563e6eb1f14396b74d27268683e57e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYRBVCT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClsIZkriXJ4y%2BMflnV2sGKpRv2jkwuwXGwRexC4p100AiAoHMNNCorEFP7W%2Fx1sDO9Tl0ncPZBOfdTf2f1HX%2FAJBCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHLaaA%2F3TaUE5HgapKtwDkf3LoMRuFUea4x2xkICUkVOz7QtZBCasdrNTGiqYIQ5Mh8KcnD3xWqM%2B2yR9YFFroA2YL13SahK7yspB%2FHrD6XReyOAUHqNmyEIkVHQAzTw6ToH2vFzRPLrRwncHR1L71C3mCLZ4QjCK%2FOy%2BYpfXWBzEEOgCLmhx6fubbss2ZLT07DHyrniEpEbs5wUwsPuMpgPFjdl8C1L1rsFoVrjWRANLbunJEdNXUgS2oAiFmhlTdug416bjceNmo1OiRGCX%2Bj1nrnpRVSKfe76pIKaBsvYdxEqP3W3tvdBUO%2F1zlexvk8paB8%2BzrbjYh2y7Cu8wlP%2FmAVLTr%2B1o8xL98yK7cPjEtFGycHvoAuJA3nUJM%2FRCMyrkrVX8Uvc4IXCBy5PztbAii19GSUy5aAcB%2BEHQwYqrLEgo9NtyPWFVJk5C8lKavnp5S0WJNIsM5g%2FSkGW2Dld2Dlyz9BFd3U%2BB4AZzzcmybedZZRou1JHI9DSZU7wrb1xFV4TO%2B%2BYwg5DNNnuqoVoXKXiLDv%2Fmdp463C22xHYXDrgB39ZAJq5gMsNIs%2Bs3xkxT4AW9rpujhP47AnLYjXFJgfBOfuqrCBBZH0XLmk8SEjLxqTHs1t3HeV5GYhG1JJWfAajmKoqHTP8wwd%2B9vwY6pgFW4mcjjW%2FoX5NEoNnGYuHvp9gghbe3SuLXpbqa7O9xk%2B8ckej1RFE8j6Vb2%2FO9f2%2BRxSRQPiHJczLctjVW5hDUXIOvw%2B%2FC%2FbXuDSzm3si%2Fa%2B4zW0pdWl2UXNPQpWFge8fEebClpxNXm8FcYSV8%2BwTJztaaigCuSl1XoFdwg5qqxVcA9Gf6%2BHZUOlVntm5AH8mrzZdAvL0CQaEgQNPEC%2Bmrf7bHOHQr&X-Amz-Signature=2fe7647ae5dc3dcc6d7753e5421dc3fca719ec09c8b96cbd726bce5f36004b19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUB2XZS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvm7OK6pyAYXJ5i4K%2FGV0NBrBk1GDGpmjhK2RQ%2FpFbyQIgHshJHoeePNn%2FXouCsUSmyTLgAF8MrQfqRVU3uSl2N0UqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9gf%2FWxUHSoPnl7ySrcAwH%2BbtmVjDgq5Lije8rsHOitF66jkgRbvMq2T8YvSOWvgnFVduPqPMtsiFZN5Ry6zFnpyghh7r2fF5JhtKPg%2FB7mta9qgILF%2FvKRv%2F2cUef2MtFXh3QY8pJg99xAfWz2eAWzrDLijBIF6Fbi60QwwEFFBYDYRvMmxZTBBG1xDAEYFSrPj%2FLBGQQ1JoeA47pBFypqPAxxAgCM9ejGSffy3ZB7BOq%2BIkJP%2BmB64wTby29tLbFExbWRBeHsSd3Whfkj5Om1Ayrk9pEASZFL3B5Izhw5BZet%2BKK2dlzVxE%2BPoj93bmE1YZRb4PVicVFi99DkNgxco%2BvzksMYtspfh3N4AV3afoM4wrHmsxt6kkEd1H%2BEpX0KkR6lLU3VFtkWRVrmiUzsaHksB8syRxDXKxaVqZyMLypCCB0DKH70gfMexnFtJPTAEOvYbiWxnepLcTjshYJdWUQysBGgrPovIRM1TvyDEmL7DJobPsvOWC5TDGN%2FNLglvDtnvbPqfkCFBi6iqP9GcgZuZ9ZNGMcyJWFEMk0mt5I0dl%2BnNnI48P5J1YTwL2k3%2FRA3F44SNDej5dgwYby8c6V4KEIwCHbhDHDZr0oWwApANkoE9LvJm6sJla5iWYkjkLucIHlacntuMMHevb8GOqUBzoyOyALo%2Be2f7h%2FXlM8MuwPLu7ZWWcZLbroWTNkOlA4YjXfcJFZdkoqJyrJb31aN1Kexfbx%2B6pmXfbnAH3XLReg%2B0eGr0tjGTUB%2BJ8CBa8xND39dQGQhi9dSBUDuT8qLZm7mdaIVfAo9%2FvNg3fxNdT84SWNyVGh1f8a0TQkSGL9L24OZ3ZezxOs3xBSgUbzYCAPOd30LnxlSUC6RLdrfhl5lc1sT&X-Amz-Signature=ca60be92b0a8a3b571857e08eeabfd2955febcb94eec4c1c77cf48c181d2003a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHWDGFU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRx3tTNqf%2F9fOZDtl2ig22NhTmY1dl7Fvd6wyetSHJRAiEAwyewk5N2p83a9QrJuIVaxYFbCSiMwghqKcoaryY2g%2FsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQK8lsNq7c6I7eDvyrcAxSUFFq3dTX2U7W62sfaqAQr1pqo1Tanm2ObmHTn%2F9N%2FhN777767g42ZwlwBUFvg7z76wW0EIc1ceUsGdNQuNCY5pHjL99rPMxcBqi7pXHGLd3x7YVn%2BsvOcRbqev5Ma2WkKHzDSgYOjd0IzQhxdpiAMhwpLGBigEHYEhMzLXCqbw2F74XW75x%2BCXCiXAISvFtFb%2FcmLBciWEtPkrmm7h31J%2FENhYaoKP4aqs1MEZeNUQXn1Sm9cbdK68HccWND9dizfu52x3Z2AihgBaPV2i5Jc%2FDNQKBMjLjUbsum%2B3F6urSeAR%2FMvvNThTmKaYLKwNWAV%2FISbp6PHdrAzFlra9dzzuMDTintTvoOKYsv8tRVprP6IF%2FH93jm%2B3SajGowo85ElxsbSS77znBP2lr9KgdEwAgCT8i4FGBkfQZ8tkUHuhvOPIr9cy5K8w2FmT%2Byh37oGIDvqmcWMIZEC6FcsDIoxgHIf8WTsZOJz%2FPkGYnXWzjQJwN8qt0H%2BAibYezoL6YIZT9u4crMmPlk00SMWByfaNgJ5majCUX%2BygCTSPkxioXI7ZmG%2FZXU7ygJJPGYR6CczTIlVa0w2HPlG3zZnChFdU%2Bcs%2BBrzEDOWBIbY%2B8WWWy8XpDl2%2Bb%2BEv0HkMIPfvb8GOqUBey2bx4xCzUx7qNPZ6BBBp7zYkVGck8u1EoBM7mDdtLEyOA3JK6Xkc6xqh4DxqigMp1rbFk%2FbFhW57wjR1j%2FKbQgGU89E3EAm6HESEKaX%2FwDMWqKyxwZF4P8dsns1HC9hC52EF2w1PgqCA56Xsk0yZyS4GLYuSMJ01%2BWTbN1CbDauhBVnKckrsprjPLhHvGr5Rulgg%2FQUX2M%2BZdxFvdjpPv0iLkOI&X-Amz-Signature=0a6dabd296dc542b757fddd32f4000e13165a6d00ca7844944c4f8ea91b9675c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
