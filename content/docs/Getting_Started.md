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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIGDNYF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDBx2ntfqNhRIphvnTyH%2FxUGyyD2FVjxB9Irhy1BWGAiEAq1JkA6o6Kuphtm1I7XUnqij7w4kxWuzDcouXdECiGREqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv03ZY5VXi60s3P7CrcA9p6D%2FJWdCQFCV4te3yIkHeS7%2BtYeuyk3b2h0ii3QEgWxdOnPQhwTeSEK8LLi76yqifQE03CZJUdn9Yw097TlFHV3WUJiHCbPzTVklW5ijMIEOrkEpul58aZlFPoLfc0y1X1Rhe97lUYwi30wkI4Z1b0tYVAvWO2EF9yQ7E5EUsv0Yr%2BuXdC3XX1ngfnC8ab%2Bh8pIjJfikYbtwUxUvuPaBFJGjl0BHwB41D%2B9ffMHPtJbqPE%2FIU7Wfhvd2ydZ90iZACvLscYtqXsTP33kbexRxFG%2BOPgFuj%2BHQwwk0Is9MFoy6ZPKkGnDmTdAl%2BGU7Ru3hTbOWX%2BHt9QKd2C38Q%2BC3eZTVXhcMbEOmCEi%2FNMLrkIJkF08TM3ex7uzjcv%2BSx7qaZehtnR7O3QfEBLXypk89lRLwZF%2FUnUS59rclNXra1E3xBfem9h3tC8SsrPu75fL447XY8G9srsBU0YNxwlqkdLv4I4apP1p6LTGyyU4UXDkQQ3M900Q%2F7HI%2FzyvmUMdp8OK6eJ%2BeFTs5FWgLophOt6hWFOiJ%2Bzp8pHqVPj9R3AkaURetZ6krjX8NZE73j7WuHzjUC3i1tvLlZ03n8C0mqt5N%2BRgGezT1dO25Fo3J8y5%2BnPPW25bnaUWkC%2FMLaQ8r8GOqUBNpZ5HTzm7NL2LE8bUTD3O6KbOv6KkM8CjoPDfjG%2BP6qn6l%2B7ZHeR%2Frw9dtDL1WzxJJ5WvWrDGHovpB%2F3K7XY4aqhO7ZibCb%2FwUA7CnAPiA%2FlvVfDyuKlr5EWXKC6WN8mL6AsbHNdYW6bqrBAdhqYgsZCbSE73OLLBwK3BQHYeJLC0dFl1CXjJBYX7sn9m0346atsvmiY%2Bj5nuAbDlDBNFsnrrJ9v&X-Amz-Signature=12c359d25841aaf304c66ab9573a2dd7c6d7948f31b876222b52e7f146051475&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIGDNYF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDBx2ntfqNhRIphvnTyH%2FxUGyyD2FVjxB9Irhy1BWGAiEAq1JkA6o6Kuphtm1I7XUnqij7w4kxWuzDcouXdECiGREqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv03ZY5VXi60s3P7CrcA9p6D%2FJWdCQFCV4te3yIkHeS7%2BtYeuyk3b2h0ii3QEgWxdOnPQhwTeSEK8LLi76yqifQE03CZJUdn9Yw097TlFHV3WUJiHCbPzTVklW5ijMIEOrkEpul58aZlFPoLfc0y1X1Rhe97lUYwi30wkI4Z1b0tYVAvWO2EF9yQ7E5EUsv0Yr%2BuXdC3XX1ngfnC8ab%2Bh8pIjJfikYbtwUxUvuPaBFJGjl0BHwB41D%2B9ffMHPtJbqPE%2FIU7Wfhvd2ydZ90iZACvLscYtqXsTP33kbexRxFG%2BOPgFuj%2BHQwwk0Is9MFoy6ZPKkGnDmTdAl%2BGU7Ru3hTbOWX%2BHt9QKd2C38Q%2BC3eZTVXhcMbEOmCEi%2FNMLrkIJkF08TM3ex7uzjcv%2BSx7qaZehtnR7O3QfEBLXypk89lRLwZF%2FUnUS59rclNXra1E3xBfem9h3tC8SsrPu75fL447XY8G9srsBU0YNxwlqkdLv4I4apP1p6LTGyyU4UXDkQQ3M900Q%2F7HI%2FzyvmUMdp8OK6eJ%2BeFTs5FWgLophOt6hWFOiJ%2Bzp8pHqVPj9R3AkaURetZ6krjX8NZE73j7WuHzjUC3i1tvLlZ03n8C0mqt5N%2BRgGezT1dO25Fo3J8y5%2BnPPW25bnaUWkC%2FMLaQ8r8GOqUBNpZ5HTzm7NL2LE8bUTD3O6KbOv6KkM8CjoPDfjG%2BP6qn6l%2B7ZHeR%2Frw9dtDL1WzxJJ5WvWrDGHovpB%2F3K7XY4aqhO7ZibCb%2FwUA7CnAPiA%2FlvVfDyuKlr5EWXKC6WN8mL6AsbHNdYW6bqrBAdhqYgsZCbSE73OLLBwK3BQHYeJLC0dFl1CXjJBYX7sn9m0346atsvmiY%2Bj5nuAbDlDBNFsnrrJ9v&X-Amz-Signature=685c149efc3ef989b2427e410ed66bdf48fdcdaf516f257d93e8be13dd938081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3XGIFSA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKreLe08Kdoxcsw1ddJnvePzZO2zB9FF%2BVKanfBhvEgIhAMxfv8i78xKUSnmML7u%2FBo0E5pYOVNBqIqaCrv602xYGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY5bjC8907qIPI%2F%2F0q3AMVdyqLRSrGOPtTBnvqSyV48iK0woiDj%2FxX%2Bh%2Fn9xRGfOgxI6ivU6YZC3AkXWaxhZ7yrumtbiJ7LEAG2R0ss4x2SwnEUf0k5TS%2BaYQWQRW6ROSIAl3RLNq39PucyoVufy1E9thp8iGGXerp%2BtGAwuJ1e3CTpr2aMIbQY%2Be%2BqIuulVPY23WheB35ksXCXh3wsvBfwrcs3pFlsEmDokiXHseoHfjp3Be%2BDrSFPl62gb8N01V%2FLbjONZWdVBN8a0cvXMFsr%2FCWPivvU5FxF5xqJDH57BHvHXR%2F9%2BwdwSk9GePBPOYoQZf9Q3Wgbc96DoX2QcO%2FUcAc2G6%2BgjyzTgl2clUNZGPX19wRCuzapPy1y9lIOjmJBhkoBefTzp1DuwBFw01I9EKcuTdQAbTp6LCWJEpx%2FL%2BZeW9OcO%2FP3MVTB2o8vnBDZsUWxFtfvNJn%2BLSxJk6E5Zhx%2FDVZiPYxAzqAM%2FwmdP2u7MOpyDD9URo3Z9EWKol6KfRuLJIlq5BMN%2FbbHVDJerQRAlQ0wy5x6lHoX8SPPUtfkdsuKfYXzaJYebL%2FUywyj4rjEaUQODXhALyG8lhY%2BH1z3GxFhrSbWW%2FC2C6btzrVegXmJ6E7fOpWV216%2FzS4BpSzInOAFCJBfTCBkPK%2FBjqkAajpglSlVY2FLhooxQ0gVQe1cz%2F18akpdLeAaUsecncIv7U4BPuc948xXrI6kFvhc57LOlkvUGXAXX0sN0uToFiY8cPNlZRlbkaaSLreRqRwNhdQej3gDuqggLOPIQ3gAgmy6PG6u40MJZ2qJoKZ8z47Nyi7y2JPwDpCsdIX8%2F681GQcmDI8CYJvd8vu3wswbLRnKSWV1SPy3Mfx78C2S%2BgXF24H&X-Amz-Signature=8fc689936754ed6bd6de3d4f296a87cd78f08f3e3028c9cbf96e22176d01ec2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKZEWB5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXZAKpnCTuj3Exb7AyJaGFHNcEaMVzfPv2QDpbfM5ANAiAIUlnxBKB%2BxCuFmXYwx9WLj7qEkAuj2URQmFRtJWeyYSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl5XKK1eYyhrm8GY7KtwDA%2F8XIMhUZY6dAsvX%2BVCpcubFj5LqEWs7qgPHvLeMsTAYE2CZV2JN%2BxwAY2FLYiMzSFYMbvqEMgdQKqI9vZXU2SFu5N0xooDh1S9iZOeOxmRWMZV8HZ0Cy7cysVYE6bdXwp%2BdFezmQiwYCx%2Ffu2n76tfrAfBaE5O8JiltnLvzLyGzuyoQ%2FmPGF5tX5htI6t5WjY%2Bkz1hmOjOZOuUirxEiqJkxwQbR2JurGZxlx9xKuoFUBYDJptjp8EJEsS8S2bXrjvnFxfJT9KfzS8eTjUqsJOjNOAJlsij%2BOjZexNmxB1FOXCoKd5pW6ePrS2XdANnHh93dYvKjuj47B0i8Riv7fciLa2t7sL8E7CaOb8IzgOD8x2l5ylsZpJeeKJSE2a%2FVGduTjjTepmTFO39M48wT2goYWMO3A%2B585wHpbz9TxVgarKyECT%2BFwfaxNQMUK8l3%2BX4oHUo4RCCoEB%2Be7LIiYYVIm23NncywGnFFXb31vR2k9oos35bOp%2FtAN1KP4Dwo0ubAp1JZHU3Nc6CTQHrvW5mu8PIvPoigGiCKGX5ZSk4UESlyfzz3EVyaVZoMxTdRpmiLXUHJbgceayO2yhnPdbOjboClVa4fIZvw%2FmvnRwd0lP%2FxozjM1RmXISQw4ZDyvwY6pgFMTs5kHdGCxVVTQRUnlompLR48D1W8FPgB3yDUzgoVyxYFqYVVT%2Fc3Wh%2Foq%2B6X5SvPDXsZ8WEHlbewVwQmKERh63DaK6iaft%2FZG09FlPS4iHWGOJdMPUdLJMqFA2uwvbHa1mkqEBtXCKZSDfji8SawybGLdywNsZ2jGdmu3wIoVL8ojvyUn19fg80lFf5eMCNkNYnLqAUQqAKP5faybdMdwsRkEoZn&X-Amz-Signature=e3e0ec7ad858049d9fa26c50d2cb88a8bb4cb16477f52efd41320f68f5d1a36e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIGDNYF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDBx2ntfqNhRIphvnTyH%2FxUGyyD2FVjxB9Irhy1BWGAiEAq1JkA6o6Kuphtm1I7XUnqij7w4kxWuzDcouXdECiGREqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv03ZY5VXi60s3P7CrcA9p6D%2FJWdCQFCV4te3yIkHeS7%2BtYeuyk3b2h0ii3QEgWxdOnPQhwTeSEK8LLi76yqifQE03CZJUdn9Yw097TlFHV3WUJiHCbPzTVklW5ijMIEOrkEpul58aZlFPoLfc0y1X1Rhe97lUYwi30wkI4Z1b0tYVAvWO2EF9yQ7E5EUsv0Yr%2BuXdC3XX1ngfnC8ab%2Bh8pIjJfikYbtwUxUvuPaBFJGjl0BHwB41D%2B9ffMHPtJbqPE%2FIU7Wfhvd2ydZ90iZACvLscYtqXsTP33kbexRxFG%2BOPgFuj%2BHQwwk0Is9MFoy6ZPKkGnDmTdAl%2BGU7Ru3hTbOWX%2BHt9QKd2C38Q%2BC3eZTVXhcMbEOmCEi%2FNMLrkIJkF08TM3ex7uzjcv%2BSx7qaZehtnR7O3QfEBLXypk89lRLwZF%2FUnUS59rclNXra1E3xBfem9h3tC8SsrPu75fL447XY8G9srsBU0YNxwlqkdLv4I4apP1p6LTGyyU4UXDkQQ3M900Q%2F7HI%2FzyvmUMdp8OK6eJ%2BeFTs5FWgLophOt6hWFOiJ%2Bzp8pHqVPj9R3AkaURetZ6krjX8NZE73j7WuHzjUC3i1tvLlZ03n8C0mqt5N%2BRgGezT1dO25Fo3J8y5%2BnPPW25bnaUWkC%2FMLaQ8r8GOqUBNpZ5HTzm7NL2LE8bUTD3O6KbOv6KkM8CjoPDfjG%2BP6qn6l%2B7ZHeR%2Frw9dtDL1WzxJJ5WvWrDGHovpB%2F3K7XY4aqhO7ZibCb%2FwUA7CnAPiA%2FlvVfDyuKlr5EWXKC6WN8mL6AsbHNdYW6bqrBAdhqYgsZCbSE73OLLBwK3BQHYeJLC0dFl1CXjJBYX7sn9m0346atsvmiY%2Bj5nuAbDlDBNFsnrrJ9v&X-Amz-Signature=12c8467ed5c67025165e0ff2b783934025d91e06ae5af0115579e0500181ed76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
