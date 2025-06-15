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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA4S7ZEH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCalPQqNuTlPbRgqnu1zHcYdpQ9IoJRCIbkk22r1QFJrQIgaMEnIHuz1QWgnzYg%2FqnGW%2BYWbR2GDg1J11qNhJCSXJwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMu0Bg7c8xV%2FuXY96ircA6t3NkDzGn3mt%2Fm3S2SqjhXFztKk6kFNSWeElhdo7jrBVwZZ8aLM5zVH3e%2FB%2B328mIUZ4SmBhPIlLsOcRHOEF6bsw78BuAeCkOZhAz8VI8Vjo%2BW5PHaHBY8ALXT135tmgrZ7TjQOuukpmhsIs7Yw3POzsQ%2F%2F0hO6GdL0E%2FL%2BO%2Bt5Fe9Po3kuob1EaqvmX05P7bSryjvYY1vVttHEqXHsbdtjjzjXEtAJDUBv0Gq%2BLgbEEuIYRgqBfctl%2FYXAF%2FwiuRUoTdWbPxRtO32N8PxqS75jLp60oFVkez%2BnWBlezQatQAYXOVab4yUElE%2Fg853Vivc1SNUNICFEkVMrQvGsOZztP9f8u0%2FLrW5k%2FrOAgoZ%2BJs%2BaLXJPiNdIK4ustPg6FilAPZsnMvWhTFcFcikPezMxnBfDCaGRCL%2BEayg33FvENO%2FXLWFMfCYgDHeVpdUR%2BqphNdOzJBNMkDhbpUKzVf0os2TE%2FE%2B6Vtq%2FeXY8MF%2Fy%2FcmLQIMBAWxu4AFcAOjqR1fsAPOyr4%2BqurGyQqRzjjR1yqkltu7MMozxddXMNm9M75rxOfrgNEnOFNxKvfUA8RC1ijpjMnXVuuCWe%2BRlMNQz8rlnyDDnSwp99VmBQ0CrvJK1a9GdIiDsMGLsMKyFusIGOqUBCg3Teag0Y27lyoYpGMMRTsciwWfsKT4IHNVqh%2BLTtSCUqrNdo%2BYrkmL0LDdWa5Qyqmt%2BEkoOro3tvapiu8BH%2FhsdEjreoFFEGJB3CiamLQyaC8mtGcb80ZJJRLXH0lceaA5104HB7D8wWyeukQfQfi7zUHBuG71rnG7vgxl2FJPcyxWTt8emZwdp1ae0xqDooIDRTAjdE1T3UM1o9pLc%2BlcFnAg1&X-Amz-Signature=979e7bd0b05512a4fd48b6189baa46200305365cc50c3e395c2845c97f700701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA4S7ZEH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCalPQqNuTlPbRgqnu1zHcYdpQ9IoJRCIbkk22r1QFJrQIgaMEnIHuz1QWgnzYg%2FqnGW%2BYWbR2GDg1J11qNhJCSXJwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMu0Bg7c8xV%2FuXY96ircA6t3NkDzGn3mt%2Fm3S2SqjhXFztKk6kFNSWeElhdo7jrBVwZZ8aLM5zVH3e%2FB%2B328mIUZ4SmBhPIlLsOcRHOEF6bsw78BuAeCkOZhAz8VI8Vjo%2BW5PHaHBY8ALXT135tmgrZ7TjQOuukpmhsIs7Yw3POzsQ%2F%2F0hO6GdL0E%2FL%2BO%2Bt5Fe9Po3kuob1EaqvmX05P7bSryjvYY1vVttHEqXHsbdtjjzjXEtAJDUBv0Gq%2BLgbEEuIYRgqBfctl%2FYXAF%2FwiuRUoTdWbPxRtO32N8PxqS75jLp60oFVkez%2BnWBlezQatQAYXOVab4yUElE%2Fg853Vivc1SNUNICFEkVMrQvGsOZztP9f8u0%2FLrW5k%2FrOAgoZ%2BJs%2BaLXJPiNdIK4ustPg6FilAPZsnMvWhTFcFcikPezMxnBfDCaGRCL%2BEayg33FvENO%2FXLWFMfCYgDHeVpdUR%2BqphNdOzJBNMkDhbpUKzVf0os2TE%2FE%2B6Vtq%2FeXY8MF%2Fy%2FcmLQIMBAWxu4AFcAOjqR1fsAPOyr4%2BqurGyQqRzjjR1yqkltu7MMozxddXMNm9M75rxOfrgNEnOFNxKvfUA8RC1ijpjMnXVuuCWe%2BRlMNQz8rlnyDDnSwp99VmBQ0CrvJK1a9GdIiDsMGLsMKyFusIGOqUBCg3Teag0Y27lyoYpGMMRTsciwWfsKT4IHNVqh%2BLTtSCUqrNdo%2BYrkmL0LDdWa5Qyqmt%2BEkoOro3tvapiu8BH%2FhsdEjreoFFEGJB3CiamLQyaC8mtGcb80ZJJRLXH0lceaA5104HB7D8wWyeukQfQfi7zUHBuG71rnG7vgxl2FJPcyxWTt8emZwdp1ae0xqDooIDRTAjdE1T3UM1o9pLc%2BlcFnAg1&X-Amz-Signature=7c22530a094ed37953ddbdb19628e5706eb3cb0f529f777a264f3bde95332f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA4S7ZEH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCalPQqNuTlPbRgqnu1zHcYdpQ9IoJRCIbkk22r1QFJrQIgaMEnIHuz1QWgnzYg%2FqnGW%2BYWbR2GDg1J11qNhJCSXJwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMu0Bg7c8xV%2FuXY96ircA6t3NkDzGn3mt%2Fm3S2SqjhXFztKk6kFNSWeElhdo7jrBVwZZ8aLM5zVH3e%2FB%2B328mIUZ4SmBhPIlLsOcRHOEF6bsw78BuAeCkOZhAz8VI8Vjo%2BW5PHaHBY8ALXT135tmgrZ7TjQOuukpmhsIs7Yw3POzsQ%2F%2F0hO6GdL0E%2FL%2BO%2Bt5Fe9Po3kuob1EaqvmX05P7bSryjvYY1vVttHEqXHsbdtjjzjXEtAJDUBv0Gq%2BLgbEEuIYRgqBfctl%2FYXAF%2FwiuRUoTdWbPxRtO32N8PxqS75jLp60oFVkez%2BnWBlezQatQAYXOVab4yUElE%2Fg853Vivc1SNUNICFEkVMrQvGsOZztP9f8u0%2FLrW5k%2FrOAgoZ%2BJs%2BaLXJPiNdIK4ustPg6FilAPZsnMvWhTFcFcikPezMxnBfDCaGRCL%2BEayg33FvENO%2FXLWFMfCYgDHeVpdUR%2BqphNdOzJBNMkDhbpUKzVf0os2TE%2FE%2B6Vtq%2FeXY8MF%2Fy%2FcmLQIMBAWxu4AFcAOjqR1fsAPOyr4%2BqurGyQqRzjjR1yqkltu7MMozxddXMNm9M75rxOfrgNEnOFNxKvfUA8RC1ijpjMnXVuuCWe%2BRlMNQz8rlnyDDnSwp99VmBQ0CrvJK1a9GdIiDsMGLsMKyFusIGOqUBCg3Teag0Y27lyoYpGMMRTsciwWfsKT4IHNVqh%2BLTtSCUqrNdo%2BYrkmL0LDdWa5Qyqmt%2BEkoOro3tvapiu8BH%2FhsdEjreoFFEGJB3CiamLQyaC8mtGcb80ZJJRLXH0lceaA5104HB7D8wWyeukQfQfi7zUHBuG71rnG7vgxl2FJPcyxWTt8emZwdp1ae0xqDooIDRTAjdE1T3UM1o9pLc%2BlcFnAg1&X-Amz-Signature=6ce38fedf1b3824d15bbe9443a7f922b71f48f0d37b672bb5ea7803e3a6dc278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJC2YBJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBwRTxScQgDps5qjUNcAb3uXQT8Zp0kfKcTdQha9FALJAiBh5A%2B0MnJ3SNOHUVADDfByN77BSg%2Bu48McW0rBezCDyyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMQYIBoPxhAobu3%2BTYKtwDM7LKUeEQRJHYLxKC9wfSjQhTnDYx5YIswLv6ecu5Z6Cz7I%2B42wd5e28%2FBAowd20Bap0ljcil3APqfYjHkAk4d9WGAp%2BTFLdKfFrG5O%2FnlJSYDpvV9qhL4oxnSTJzXpNRkbm728a1OWOvUoHQjQ5m7OHywoOqJvtVcoKK1Aiv3mHT2GaXablPo%2BMffKd%2FAMR1FwsgsK%2BqpYoiOd44ez%2Fb4d8PGCtnyHNpvmlcPPtJx%2BqoOH%2BeRSfF4OIVKUeMUZGziNiXv13KBPpabjyKcjO1rObEO5A567%2Bsv%2BpBfB6I%2FlGAG6%2BkMtWYaee%2F74MVfnFbKasSOghlh%2FmJsL%2FVWmIM9xWkQGD%2BpywNJYW7kTVBbz5aK4k%2B0toSYIqpUdQq6464V2XI4lxmCcaVOJIZarUNOIy8yrY19BW%2Bpg%2B9Bxt4TTGsgbQoOImMDs3x%2FRFMmRJQsIRa3UYsio0PPNf57yS8k5I9wZV2mlRzvQglATSS92l8Y3RsuTnDgiWO%2F6DoLdaJSLQyLvyFuw6ItMJyGvywA9SayqtAtr2AnekLXpPPshDYEkFXv%2Bv7rFXN3V25ouai7%2Bwp3Em64DecMJKbJ8G7W%2FH8rknXcPhWHgq5HjjI%2FOY0AaArrQXMZLjvw7Uwk4W6wgY6pgFwyKOe%2BtPwsccXUMeLvOgUkC%2FlfLjAXOoVMO1m1wQefBBJE1Kug1H3sJBttrJktL5kusGmfILbnq4kHbl8ARwwSHOtz%2BfZs3zCevacbPdbALWrHt9alGR6lOZ9n%2B%2BwnTZV%2B6SdP92f8f%2BJ2ninUojVuv58hl7TenmgA5j4%2B82Gwgg%2Bh2lZoaCrGTbHOzzEfPFF63gmvXuuunweT9xt0Z4iaWWciwPI&X-Amz-Signature=9af1603d5e8d277d569c10149b1bfaa2b42b235b47c28f78ad4ec35bd7693875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7E7BDY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCvDWhjqT7YoK4mAXZDXRSn1O3ExokZgywPAg8Id1r7gwIgIyDZCMksgUiZddhwtJJVsbLhZ3j09AErp4QEq3GnvaUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNUbgpYwp1zzFckepCrcA%2BOdi0A735EC1qDb016H0eVMpbBtp0Gr3gAwSwPgFYzrGIAknC0nK9lzG6Nk07VMBhvN32DW96XMLSvoRxKh9Xqul6mw1RLkhGBMa1An3vNNVEhW64WafbOitTWkPhGuzgvhJ10EPIMaE%2Fhp1GDXYMJpEkqSZeJQZRd99%2Fz%2FvSaYNQRajsNjCA%2Fg1ORV7leoq29iaKWLJKw6aY9KhvTMkUkmBFmEQMrsku9cpHQENFqD28M4%2Bm3Y%2FLwaKsyhAmOz8LVs0vnKsdBA7JJqOHrw7jyyXJL5KuxDOaSk5PHR%2Fj3pDT4r8LAvXknqEo8EdYQMWTyg5vh5a2RzhFwlU5pWPv4cY2%2BUb69uov%2Fx3xznjQB9EPl%2B%2BfWJWX%2Fi8ghQLuTp649rQL77ZWHoGusg153HOI%2Blmt6UJ0Lz9qAyKIk%2FtZ2UF%2FPVEUi%2B5Y5VZAUp2oq30fEi0wUd2T9g%2B853uUZaS1JZeZz2FAf%2FX0pKnnBQcbBsoU0pj2kBDtxcQkkG6cwsYuB0%2Fgl2ou4L7YDSe1LUWc6r6pbLGGxCR2NxsFInpyKyNm1lkdKkEhy3krU0cPaBSDHMm34sOV9U9JytpRaoNc%2BHtIX9AoQgicdgXYXZNIOKysGjo4AF3xDChoWaMOmEusIGOqUBWIKKnpelKK64z1iUwNTVENSqvdhogAqkqMazBkrGxB3LL2YpUO%2F0S8R5jH1h8AH0NWfZXQTrqr20yN0oSb6J%2B91z1uIpZgc84y8jmPFvAdaGO4osU7btYINbYyv7ExaTIK2HpvmswzFpnRBRynlsoGzH3rclSDSvYHVQmi8x%2BAJxmg0HtpEOnfgvJS5p7aZ2vMgZbTArJSgtGiQnlDjyqNAfa%2Fxq&X-Amz-Signature=178a1cc704344c4e9b8667a4b8006079e1da1afdd8cbe058bd9b06ea07f85032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA4S7ZEH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCalPQqNuTlPbRgqnu1zHcYdpQ9IoJRCIbkk22r1QFJrQIgaMEnIHuz1QWgnzYg%2FqnGW%2BYWbR2GDg1J11qNhJCSXJwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMu0Bg7c8xV%2FuXY96ircA6t3NkDzGn3mt%2Fm3S2SqjhXFztKk6kFNSWeElhdo7jrBVwZZ8aLM5zVH3e%2FB%2B328mIUZ4SmBhPIlLsOcRHOEF6bsw78BuAeCkOZhAz8VI8Vjo%2BW5PHaHBY8ALXT135tmgrZ7TjQOuukpmhsIs7Yw3POzsQ%2F%2F0hO6GdL0E%2FL%2BO%2Bt5Fe9Po3kuob1EaqvmX05P7bSryjvYY1vVttHEqXHsbdtjjzjXEtAJDUBv0Gq%2BLgbEEuIYRgqBfctl%2FYXAF%2FwiuRUoTdWbPxRtO32N8PxqS75jLp60oFVkez%2BnWBlezQatQAYXOVab4yUElE%2Fg853Vivc1SNUNICFEkVMrQvGsOZztP9f8u0%2FLrW5k%2FrOAgoZ%2BJs%2BaLXJPiNdIK4ustPg6FilAPZsnMvWhTFcFcikPezMxnBfDCaGRCL%2BEayg33FvENO%2FXLWFMfCYgDHeVpdUR%2BqphNdOzJBNMkDhbpUKzVf0os2TE%2FE%2B6Vtq%2FeXY8MF%2Fy%2FcmLQIMBAWxu4AFcAOjqR1fsAPOyr4%2BqurGyQqRzjjR1yqkltu7MMozxddXMNm9M75rxOfrgNEnOFNxKvfUA8RC1ijpjMnXVuuCWe%2BRlMNQz8rlnyDDnSwp99VmBQ0CrvJK1a9GdIiDsMGLsMKyFusIGOqUBCg3Teag0Y27lyoYpGMMRTsciwWfsKT4IHNVqh%2BLTtSCUqrNdo%2BYrkmL0LDdWa5Qyqmt%2BEkoOro3tvapiu8BH%2FhsdEjreoFFEGJB3CiamLQyaC8mtGcb80ZJJRLXH0lceaA5104HB7D8wWyeukQfQfi7zUHBuG71rnG7vgxl2FJPcyxWTt8emZwdp1ae0xqDooIDRTAjdE1T3UM1o9pLc%2BlcFnAg1&X-Amz-Signature=c4a9914ab471bb3561b291fddffe4e49431467116456f746db06d84ffd54a5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
