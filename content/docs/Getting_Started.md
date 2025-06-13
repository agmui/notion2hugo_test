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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UHNDV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDtOiYr0vrbTpETOzpUC0qnxWKuR%2B9mhD%2FClCqezUtIngIgREJ4VZmYKiFhsSqUQKkR5LiQWUEw9o9czMV5EYPaO1wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJE%2FjMLQDgZCcZ8%2BnircA7k4%2FfpAKZHKeZE1ilhheXxZy%2BoakQQrV10pZp8nT1oZZlQW2qTNnbAkJjShdgOaNvT9gptaF1BXATibT7PL8VzBYBtxOcYN3vCBaGYecyVo9RHNQ8CiC3eDZnG4v8A0wKaiF0s9I1ps55rJFHrM0btGA8GY9XfBpbcZ5xvOJmZU%2Fe9EfbHCHdc6KbKIQ07ik481jSw2fuIWKnQCGoj1aUt%2FgGVn6fXgKtZv%2FumQMdx5uR2ohUgTXtokqhG6WzEL8pC946I9W3quFE2%2FbNAp%2FfVN53yN4%2BmggWcORDrDUV4MvYnXyRuczx4y5ehi7HDXFgN6nk0Q7XicaEKEZMANH6DP4SOxfma4%2FW6OSEheUjwnTdKz4imIPxH4TTZrN8NKyBmUtuUhs1k2kjZkkkFjavEJeIAG3cOb5XQXH%2Bf%2Fmq8lIwBovpqqJbJFzbkXfH0QEl2j7K6vCmxn48jERmXv8beTNMTWkdAAIN7hYyMzz8JAe0PIfy6sIVm75yYGRJ5rywHS8QKP9nEE4TTNYO%2BQHtRfgAV5CZUcw6UkoaqSjTLS2i01ldew1DnALrP%2Fxv6%2BQDrT46OAgd0b8pgmN26%2B0XFEuszODdSv6MXY7U9%2Bf7uLQph6ZtetqN9q67nHMOvSscIGOqUBEV0X5em6jd2dIDajfXSO8mjg4IhhJjeAeG04ZaKsDRvdixCOv%2F5%2BXQW5aLaUh2lgj1Bm0EbX2wE17vvpGMA5mGUcymwh5A03EbKcITZ424qs2P%2BHT%2B5kd9xzxx%2Bmm47NL0y2IzwrJp6CgTX84V5oMs5o9m35PPLtK0orIjSxBHrTPYm977%2B9nWFPbWbUm5rHt%2FoeTIu2odhmxXeZ14Y8oMeu%2BcFq&X-Amz-Signature=2aab7cb324d07c26518669e6d12562e9872e57cbb0ec69823210f9c369400c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UHNDV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDtOiYr0vrbTpETOzpUC0qnxWKuR%2B9mhD%2FClCqezUtIngIgREJ4VZmYKiFhsSqUQKkR5LiQWUEw9o9czMV5EYPaO1wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJE%2FjMLQDgZCcZ8%2BnircA7k4%2FfpAKZHKeZE1ilhheXxZy%2BoakQQrV10pZp8nT1oZZlQW2qTNnbAkJjShdgOaNvT9gptaF1BXATibT7PL8VzBYBtxOcYN3vCBaGYecyVo9RHNQ8CiC3eDZnG4v8A0wKaiF0s9I1ps55rJFHrM0btGA8GY9XfBpbcZ5xvOJmZU%2Fe9EfbHCHdc6KbKIQ07ik481jSw2fuIWKnQCGoj1aUt%2FgGVn6fXgKtZv%2FumQMdx5uR2ohUgTXtokqhG6WzEL8pC946I9W3quFE2%2FbNAp%2FfVN53yN4%2BmggWcORDrDUV4MvYnXyRuczx4y5ehi7HDXFgN6nk0Q7XicaEKEZMANH6DP4SOxfma4%2FW6OSEheUjwnTdKz4imIPxH4TTZrN8NKyBmUtuUhs1k2kjZkkkFjavEJeIAG3cOb5XQXH%2Bf%2Fmq8lIwBovpqqJbJFzbkXfH0QEl2j7K6vCmxn48jERmXv8beTNMTWkdAAIN7hYyMzz8JAe0PIfy6sIVm75yYGRJ5rywHS8QKP9nEE4TTNYO%2BQHtRfgAV5CZUcw6UkoaqSjTLS2i01ldew1DnALrP%2Fxv6%2BQDrT46OAgd0b8pgmN26%2B0XFEuszODdSv6MXY7U9%2Bf7uLQph6ZtetqN9q67nHMOvSscIGOqUBEV0X5em6jd2dIDajfXSO8mjg4IhhJjeAeG04ZaKsDRvdixCOv%2F5%2BXQW5aLaUh2lgj1Bm0EbX2wE17vvpGMA5mGUcymwh5A03EbKcITZ424qs2P%2BHT%2B5kd9xzxx%2Bmm47NL0y2IzwrJp6CgTX84V5oMs5o9m35PPLtK0orIjSxBHrTPYm977%2B9nWFPbWbUm5rHt%2FoeTIu2odhmxXeZ14Y8oMeu%2BcFq&X-Amz-Signature=5e21c4ff0e2ade481697d2d56a4090125c744458c94d572ecc346aba1b818ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UHNDV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDtOiYr0vrbTpETOzpUC0qnxWKuR%2B9mhD%2FClCqezUtIngIgREJ4VZmYKiFhsSqUQKkR5LiQWUEw9o9czMV5EYPaO1wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJE%2FjMLQDgZCcZ8%2BnircA7k4%2FfpAKZHKeZE1ilhheXxZy%2BoakQQrV10pZp8nT1oZZlQW2qTNnbAkJjShdgOaNvT9gptaF1BXATibT7PL8VzBYBtxOcYN3vCBaGYecyVo9RHNQ8CiC3eDZnG4v8A0wKaiF0s9I1ps55rJFHrM0btGA8GY9XfBpbcZ5xvOJmZU%2Fe9EfbHCHdc6KbKIQ07ik481jSw2fuIWKnQCGoj1aUt%2FgGVn6fXgKtZv%2FumQMdx5uR2ohUgTXtokqhG6WzEL8pC946I9W3quFE2%2FbNAp%2FfVN53yN4%2BmggWcORDrDUV4MvYnXyRuczx4y5ehi7HDXFgN6nk0Q7XicaEKEZMANH6DP4SOxfma4%2FW6OSEheUjwnTdKz4imIPxH4TTZrN8NKyBmUtuUhs1k2kjZkkkFjavEJeIAG3cOb5XQXH%2Bf%2Fmq8lIwBovpqqJbJFzbkXfH0QEl2j7K6vCmxn48jERmXv8beTNMTWkdAAIN7hYyMzz8JAe0PIfy6sIVm75yYGRJ5rywHS8QKP9nEE4TTNYO%2BQHtRfgAV5CZUcw6UkoaqSjTLS2i01ldew1DnALrP%2Fxv6%2BQDrT46OAgd0b8pgmN26%2B0XFEuszODdSv6MXY7U9%2Bf7uLQph6ZtetqN9q67nHMOvSscIGOqUBEV0X5em6jd2dIDajfXSO8mjg4IhhJjeAeG04ZaKsDRvdixCOv%2F5%2BXQW5aLaUh2lgj1Bm0EbX2wE17vvpGMA5mGUcymwh5A03EbKcITZ424qs2P%2BHT%2B5kd9xzxx%2Bmm47NL0y2IzwrJp6CgTX84V5oMs5o9m35PPLtK0orIjSxBHrTPYm977%2B9nWFPbWbUm5rHt%2FoeTIu2odhmxXeZ14Y8oMeu%2BcFq&X-Amz-Signature=9a79b97f05072df02c20e5c064df186c569ea732597952399fe7098074c85e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPW7JIG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCUEn3eX5uCx3yndVCpkOiViFRkqw%2BoSmX8hpjRMsLqSQIhAMb%2FS0AXFG3xIvN44h%2B5MUJUiizrAkSwTtp1X0jUmSMJKv8DCBsQABoMNjM3NDIzMTgzODA1IgxCJPpxz9TZZbASNIAq3AP7o8cXqTRq4e%2BwydXnkfDF4xbbchG7nm%2BRNMVFyktHP9JCHWOiY8sFup%2BUUSjDK20FGyqG3855g%2Bn2F9btF8T18Nq58KpPgrSkx7DPtjJ%2BHcRbcmL%2FwSuFAWZmPtfbNLDqHVlG6SR5yreNTMzuxM2uYzk0vmjILCMPQ3LYwEEs3bvnSW2S13%2BXSq3goGgx%2BHgD%2BG1Wra5BPFXWPBlZBKKtEflqRE8UwI8wVuf8HF4R9JXKsEUV04Ylo6slsr0trqiakk3lZQcGocFMmrSFHl7XKZyjsvcAFZGzEGyIBfhWrYWP5ZXhgMHhi0pVYguXyXbUgyux0H7Qc%2BnRIt%2B7tDBIZ8B7oERCqJtDifSfjp%2FOLyce5GUlf4uEuChk98%2BD9Q%2FKqbP1Js%2FFs349FrPBpmS2qv9wumEKdYKg2Dh8SpdngldtixZixfMBBRzcH9HOdWcyW9YRaViK3mdAyNYMo221L1jH2ZckdZ8vP4TOewkvvqKIN4hp8UkVQEbZTGkkOq3YaaBTEdO1IAaJXdBARAj1zXikh3U5aslI9HFQ7KXTsbau9OJ%2FUHvqcpOrNe49cVBT5etiodR7NozqJ%2F4mGCZdUi7r9onb82pero6FjNR7I%2BP3DEJTCRGKwguabjDI0rHCBjqkAfBAnzQGpbkFHTo7ER778cKGCAaMhYKddDkqokqUxzppjXIfLaUTzMT0TMyIWvK9u7RiIdukGd9edNIfSX60QsFLDlzG2A594at%2BAo9vOuZxR9d5E61LzNZiI%2B9HuOUvKYs493IpqQUgK9yrIJ20H%2FynTV5h889DtH%2B21HilZUPHL5s%2FIt9N8OMxty5eUu5nEPGgmUCiRVJNnegBiHD6xIA4fa8m&X-Amz-Signature=3b3e94baf90097646aab3b856f5d28175d5f6a7ed4955b2391a1055188ff871f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK3WA6J5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDBmHcdKAtiJAyBYjXpKSDXcyKwlrUf2Ij%2BSAXk4zcqmAIgY%2Bn0xtIYCY4gJ0NFXBtSpWko9Hd5OAR89jasEuRphtAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBBzt00NspdfAaPzdCrcA590tvPQ5jWv6oO4a03rJ7TuuazIHz7NxPkG8cm17veTgiucth%2FP2vL0dWiPHqxUN1mVQovldARm1U8d%2FOXEXEmimmSUBNImUAru2Vm4KD%2FSLQZHihxl%2FMuvBl7abBa8heC5xuQ7WpwwG18sk882Qxaj00JqrH4V1ODmou9Dxry4cfbGyufiFfmFiBGRmiLhZqBcLvclIDVvv%2F5fd4owemYIw2WOZCXbkUkLB0hPErD071Nm0FfX5StkKalgoGFTC1lL2DBnUF7pu6nskStJJ7NkydlXiUygrNvgSnpUgW6VrdYxeuJSbum2N0tLgbA6isLvotNN0ojcO%2BaMvUFmW6GdmveCHmcSSGJA1id06%2BFQltoMD6jAOKf0X4UxJjOtKHID5XWQnKljuLByIY%2B2sDp3uM5Rwq2J7neXL8f0q14%2BP7kF0jPgzMsVsYrJHx49spBvyITaP0RkrpTGIF2yhGSL14usGU%2Ffemk1tdLb%2FJyze8QxUAoTl7r4i5kMBSewIt7IRD5djH8otAyJf0LA3G5y1A4A9n9%2Bf7cQqdw8cOaJgOY3tUdD4W9oYW0c%2FXt8GeCpKC0imNRk4vtI3carJLbfB1mljZGk17Rx3wyTI1vxsT%2F%2BmT8W1RP7KV6DMLvSscIGOqUB9QIzqejOz7x4PwUzPdEGmfS9Sd1IfcnrtJBw4k%2FvSUD86ZMScc18Ks4zYkyto4553jtF5vvMUygRCCQtsnJbgn50nhBPK3bwJOoVp2rIrJtd3cA1jkE3pHyaPVdZHtqmSGLb1LE9adtVieuMi%2Bo52GIDV8OLFx%2FVYdMa32jyAuheETHIJAKHOqaJDUwGuiATnhCfdbRXFF0KOsCh%2FsmhZpdHMSob&X-Amz-Signature=46dc8534393a6f77b553569b218e59804965af7c6944f48958056bec3b313079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UHNDV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDtOiYr0vrbTpETOzpUC0qnxWKuR%2B9mhD%2FClCqezUtIngIgREJ4VZmYKiFhsSqUQKkR5LiQWUEw9o9czMV5EYPaO1wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJE%2FjMLQDgZCcZ8%2BnircA7k4%2FfpAKZHKeZE1ilhheXxZy%2BoakQQrV10pZp8nT1oZZlQW2qTNnbAkJjShdgOaNvT9gptaF1BXATibT7PL8VzBYBtxOcYN3vCBaGYecyVo9RHNQ8CiC3eDZnG4v8A0wKaiF0s9I1ps55rJFHrM0btGA8GY9XfBpbcZ5xvOJmZU%2Fe9EfbHCHdc6KbKIQ07ik481jSw2fuIWKnQCGoj1aUt%2FgGVn6fXgKtZv%2FumQMdx5uR2ohUgTXtokqhG6WzEL8pC946I9W3quFE2%2FbNAp%2FfVN53yN4%2BmggWcORDrDUV4MvYnXyRuczx4y5ehi7HDXFgN6nk0Q7XicaEKEZMANH6DP4SOxfma4%2FW6OSEheUjwnTdKz4imIPxH4TTZrN8NKyBmUtuUhs1k2kjZkkkFjavEJeIAG3cOb5XQXH%2Bf%2Fmq8lIwBovpqqJbJFzbkXfH0QEl2j7K6vCmxn48jERmXv8beTNMTWkdAAIN7hYyMzz8JAe0PIfy6sIVm75yYGRJ5rywHS8QKP9nEE4TTNYO%2BQHtRfgAV5CZUcw6UkoaqSjTLS2i01ldew1DnALrP%2Fxv6%2BQDrT46OAgd0b8pgmN26%2B0XFEuszODdSv6MXY7U9%2Bf7uLQph6ZtetqN9q67nHMOvSscIGOqUBEV0X5em6jd2dIDajfXSO8mjg4IhhJjeAeG04ZaKsDRvdixCOv%2F5%2BXQW5aLaUh2lgj1Bm0EbX2wE17vvpGMA5mGUcymwh5A03EbKcITZ424qs2P%2BHT%2B5kd9xzxx%2Bmm47NL0y2IzwrJp6CgTX84V5oMs5o9m35PPLtK0orIjSxBHrTPYm977%2B9nWFPbWbUm5rHt%2FoeTIu2odhmxXeZ14Y8oMeu%2BcFq&X-Amz-Signature=a782a5ca4f03458c52ba063339fe81d83c1880c86d6b493cbe0953b4c321ed9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
