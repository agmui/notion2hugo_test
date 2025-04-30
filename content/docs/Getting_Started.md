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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTKP6JR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAZ%2BmahBm69%2B2%2BU7JTiKPYCzaa6OwXeyrZZ5it%2Bi6YEEAiBgh8sezO6YJEoxIuOFB60bikQCBGKtaB%2F6QsoO2MYnFyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FriWs1qpyY0Lv8HvKtwDz8nOIoH4I6rIzqJU0DGC15DFHc5LWkDbbjEPBxK4Csl7XEqdm%2BCbuJBHb6yVj0hfERkpxYeKRr0Raezs7VV2Tizyc8MFNzHriaRx%2BS7lhPbdv88%2BPfL1p57DhARmlOYHql%2Fp22Iwj3XqYPa2GYWM9yus8kSXyWo%2FSUuMHyOgbZuhbN8WX9cuj6xanSyM1Bdny40szzIKTY88185VrcLkRclTiKBRDUSpzoXChnLuzC6lNa6IitQl52Mgw24GTC9rx1O0nP2fz9RN7ktnJMhqGEp4arxye73yuE5aSX%2BZPi5xqfL1bAOE1hyFvNzrmzRh%2FQpZbEOEyxmK0oxthHsK6L9L9dsz5DI3GgLA2IFeDszrfuNrd2QEpFlMXLagnByfkrPVAMB%2FE97qNG%2Fnt1c5l44R63zf%2FqCEvVaJfqZi3qwFGWRL50pSOWAen9E07kBP4P%2BkGtE0RfCgNx6uZhJyE0la0t1FoWknct7C%2BW1f84usuxBcvhDX6lzEUo1szd%2BHw%2FFshb1L8%2Fc%2Fd1h7NMumC9gPc3KdGdcSL%2FqTTsKNFHpzK53H6EhbYHXV%2Bt5WcCaqMxa4F6IcYTZnv04m%2FVknYX1AQ1Ge6YJabK0Se1z8IW5oRXSFV%2FzxrHNT5oAwo4fGwAY6pgHKuBy8lbEScPVlsYFDChn%2BeVA%2BnD%2B9q2G9IFwrMFCehHki8iwSvqRsB6yK8%2FKEMVZkakGVBCLGZYcW%2FpXxhpdnFIcG2uFYUkL8xlOD4bI964AB9ltQ2SOo%2F5SroJUW5XWgb1LeyJ9dIpjQ2jhKeHo%2FogMX2vPRNTuTknyO7ROOH1b7U7vKMENXhoUSj%2BARmdsBpZrttW7%2ByohZWz1APVIdWMxvFCHA&X-Amz-Signature=bc12fd5aac7658c8345d949f434e782357d3afd7960ed4fa015b5e61858a5f30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTKP6JR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAZ%2BmahBm69%2B2%2BU7JTiKPYCzaa6OwXeyrZZ5it%2Bi6YEEAiBgh8sezO6YJEoxIuOFB60bikQCBGKtaB%2F6QsoO2MYnFyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FriWs1qpyY0Lv8HvKtwDz8nOIoH4I6rIzqJU0DGC15DFHc5LWkDbbjEPBxK4Csl7XEqdm%2BCbuJBHb6yVj0hfERkpxYeKRr0Raezs7VV2Tizyc8MFNzHriaRx%2BS7lhPbdv88%2BPfL1p57DhARmlOYHql%2Fp22Iwj3XqYPa2GYWM9yus8kSXyWo%2FSUuMHyOgbZuhbN8WX9cuj6xanSyM1Bdny40szzIKTY88185VrcLkRclTiKBRDUSpzoXChnLuzC6lNa6IitQl52Mgw24GTC9rx1O0nP2fz9RN7ktnJMhqGEp4arxye73yuE5aSX%2BZPi5xqfL1bAOE1hyFvNzrmzRh%2FQpZbEOEyxmK0oxthHsK6L9L9dsz5DI3GgLA2IFeDszrfuNrd2QEpFlMXLagnByfkrPVAMB%2FE97qNG%2Fnt1c5l44R63zf%2FqCEvVaJfqZi3qwFGWRL50pSOWAen9E07kBP4P%2BkGtE0RfCgNx6uZhJyE0la0t1FoWknct7C%2BW1f84usuxBcvhDX6lzEUo1szd%2BHw%2FFshb1L8%2Fc%2Fd1h7NMumC9gPc3KdGdcSL%2FqTTsKNFHpzK53H6EhbYHXV%2Bt5WcCaqMxa4F6IcYTZnv04m%2FVknYX1AQ1Ge6YJabK0Se1z8IW5oRXSFV%2FzxrHNT5oAwo4fGwAY6pgHKuBy8lbEScPVlsYFDChn%2BeVA%2BnD%2B9q2G9IFwrMFCehHki8iwSvqRsB6yK8%2FKEMVZkakGVBCLGZYcW%2FpXxhpdnFIcG2uFYUkL8xlOD4bI964AB9ltQ2SOo%2F5SroJUW5XWgb1LeyJ9dIpjQ2jhKeHo%2FogMX2vPRNTuTknyO7ROOH1b7U7vKMENXhoUSj%2BARmdsBpZrttW7%2ByohZWz1APVIdWMxvFCHA&X-Amz-Signature=6bb79925b55da7df2613d3891c43d98a60e1e7f539c7a7183f43cc05bf4ffa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTKP6JR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAZ%2BmahBm69%2B2%2BU7JTiKPYCzaa6OwXeyrZZ5it%2Bi6YEEAiBgh8sezO6YJEoxIuOFB60bikQCBGKtaB%2F6QsoO2MYnFyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FriWs1qpyY0Lv8HvKtwDz8nOIoH4I6rIzqJU0DGC15DFHc5LWkDbbjEPBxK4Csl7XEqdm%2BCbuJBHb6yVj0hfERkpxYeKRr0Raezs7VV2Tizyc8MFNzHriaRx%2BS7lhPbdv88%2BPfL1p57DhARmlOYHql%2Fp22Iwj3XqYPa2GYWM9yus8kSXyWo%2FSUuMHyOgbZuhbN8WX9cuj6xanSyM1Bdny40szzIKTY88185VrcLkRclTiKBRDUSpzoXChnLuzC6lNa6IitQl52Mgw24GTC9rx1O0nP2fz9RN7ktnJMhqGEp4arxye73yuE5aSX%2BZPi5xqfL1bAOE1hyFvNzrmzRh%2FQpZbEOEyxmK0oxthHsK6L9L9dsz5DI3GgLA2IFeDszrfuNrd2QEpFlMXLagnByfkrPVAMB%2FE97qNG%2Fnt1c5l44R63zf%2FqCEvVaJfqZi3qwFGWRL50pSOWAen9E07kBP4P%2BkGtE0RfCgNx6uZhJyE0la0t1FoWknct7C%2BW1f84usuxBcvhDX6lzEUo1szd%2BHw%2FFshb1L8%2Fc%2Fd1h7NMumC9gPc3KdGdcSL%2FqTTsKNFHpzK53H6EhbYHXV%2Bt5WcCaqMxa4F6IcYTZnv04m%2FVknYX1AQ1Ge6YJabK0Se1z8IW5oRXSFV%2FzxrHNT5oAwo4fGwAY6pgHKuBy8lbEScPVlsYFDChn%2BeVA%2BnD%2B9q2G9IFwrMFCehHki8iwSvqRsB6yK8%2FKEMVZkakGVBCLGZYcW%2FpXxhpdnFIcG2uFYUkL8xlOD4bI964AB9ltQ2SOo%2F5SroJUW5XWgb1LeyJ9dIpjQ2jhKeHo%2FogMX2vPRNTuTknyO7ROOH1b7U7vKMENXhoUSj%2BARmdsBpZrttW7%2ByohZWz1APVIdWMxvFCHA&X-Amz-Signature=13b57fbf904883a5ff20e63f0c872c7cf73fca4fd397d1ece8238c1b680dfff9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKAJMNH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2BGHmAWTBGfMbRTa2SQdmt9l77I7XVUhrESdOGg2qi8AiEAlsDBJQ4vju5B67Pf77TBj5HQdgtjOm94mDTXZ71qEuIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyg9fMMh0w9P6NYmyrcA1zfkZX4%2Bnp2htJff7kh%2BooeSI0qN8CEvhbnSDF51Wukdsiji2X3CYhFLgxl1wvNOO5ug45HQ21I5NOlH5siOLAI8jGAbRM179EjxNlJ9QcNDkNtsVkIDAUeM3b50kosZaOJGAsMgJOU%2BcVJdR%2F87BbEr%2F5Q%2F3AuJtBojQdmdjUZa4reLUqokuNWZ95zpOlXTxhGNfc5vkyJDSHXR6fuAx4LAMdv30%2BwdVc8uNivgI9mIkD4sv468t8aC2bAP0W36i0HyW3w9f9Rm2OUc%2FCJwIKssQLm50lymO3rHc21OHOi6qhwuVMdNYljIQI5%2F0doMwfhDAapr6t09XbiAD8oUt8NWzZMHVT%2BK2qoHYcLdd2nB7dah10BGghJ3%2FFQadgThxecYb4kojyBUhjVg1ytAM2kZ6oDPrhz3%2FdhvsRRmwAkmZiwjfQLW7PSVoUaJY5J%2FfeV1QWOnwlu6yruujbgDE%2Faq26eiQRrIeOIPsIthVusxqQauUzPYBekXCAaWNXbBIva0nqy70NGQBaHdVqDlck10kcsy51%2F93nFhZbmy9%2FTvcpvRJqEYu0g689HHR9xH8%2BDUC%2BYwiJwmD6k%2BqkmL%2BNNR6PzQmTkrUmS%2Bk4SB4Z%2FoF7yr%2B2cVgE%2F2TcrMK6HxsAGOqUBbKqUV%2FykqIFO5uJB9EFrdcd1av64pZXmoar%2FSLlTTPFZBeymtiArwJaxWM%2BM%2F%2FYlWMH18h%2BC3Fn7DmcYPg5f86%2Fap7MXuqhGAMPc2yelUJugUqQyGct5MkK0rN2KfMkU%2FfAwbEWlR2HWrVMcqppiZfGqHK9o0WhZw60h9Af8rX1aystozdLkgif665e4VZzGephKe9Xm2ktnXrW9ZYWr4YpnQIpV&X-Amz-Signature=0dd2446e13af3013cf309c69871dc219de82b4d2d20e0225d5d50484da7318de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LDEFLL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCXIX2ChCNq3yFt8v1n8qlu5reSKcRWjAeGD4t19s1R0wIgYSoU7%2Brl4eJboatdtMgGRiVsdKBhKVsgGJeFYj38Tp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmzTl5Mi7kI%2FWllGircA00IK7QKizqzZhaY2z85GwTYX5ekbc%2B6yhczR9ak1QK3OGN8wlJb2AB%2BpdyR0c1TvGCtyJdJWRZ0ME%2FZ2dIR1XhLz8PN026pfpeJvA%2FWhba6YAcLc0W2vWoJoKmUgyixPOAIZXTFYuT1S0GhUoYwhiWHcfD8huYiIT67lFyojocF%2B%2FvAzeBKjfwcsQ0MQPEPd%2BE2oQ%2BCkS9qC2fRXnD3mCdA5K%2FGs1x7CeU%2BGeE8cLtAYUqMXNhF6hA5N8GGpqpiubxNrgwkMWgrCVLw4R%2FyoT%2Fsg71Q0hVEUpO%2FdKfNH7Qm8NvgH4E24fbnXC2gkfGJQd4E7p8rBsdG%2FBhg1TIXXLZCq192s6hUJAoXp3ngeIoRwXRDNf45h8HMUCMk0WsOPiE7gSTYYomsjpz%2BVubvpzRB2j%2Fb%2FMlLx2R1w7AnFcjUdeqqhJ1n5YaSQsqvgnEi6BOEEtWfaE%2BO5FWGsIAzVPC7FhtZHfuL7hWiNJnqJ0U3VXwrPZJehFOdobQ7qDECWn92InanrbIERDZUCb5u40qXeCzKNoRtjeWCPIip5zQz%2FITxU0XUPpyL7u%2FyQskTT2GRRanP%2F7Y6IJI4IlDtkb2DfVIe7lavKxeq87MAHLHgVhZiri3m%2BqnlZWBEMMyHxsAGOqUB6N8WjZcp9t%2FvN5ByPhM%2BwqnpMz7VxSQojz7txclGSwytmT64cF21tTtxT%2FRisshoM9ZKnRacbz%2BqzzklacbPSbJM60S5tBy3KGgC3d3uSQdrmJRFS82sWsWfXvzXXaTWmRF8SV6zbpaHEzHVp%2F7mdogiM4AZUcln7ANIYsG82%2BdHjh6rldCNxPraFKyR5DJMDXX6rfICQOKXn8G75pJSYOZsnIEP&X-Amz-Signature=79c86b2c69f767228561bcd6e1c4281232b2594fb71d60ce1c0f5f1414ab4d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTKP6JR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAZ%2BmahBm69%2B2%2BU7JTiKPYCzaa6OwXeyrZZ5it%2Bi6YEEAiBgh8sezO6YJEoxIuOFB60bikQCBGKtaB%2F6QsoO2MYnFyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FriWs1qpyY0Lv8HvKtwDz8nOIoH4I6rIzqJU0DGC15DFHc5LWkDbbjEPBxK4Csl7XEqdm%2BCbuJBHb6yVj0hfERkpxYeKRr0Raezs7VV2Tizyc8MFNzHriaRx%2BS7lhPbdv88%2BPfL1p57DhARmlOYHql%2Fp22Iwj3XqYPa2GYWM9yus8kSXyWo%2FSUuMHyOgbZuhbN8WX9cuj6xanSyM1Bdny40szzIKTY88185VrcLkRclTiKBRDUSpzoXChnLuzC6lNa6IitQl52Mgw24GTC9rx1O0nP2fz9RN7ktnJMhqGEp4arxye73yuE5aSX%2BZPi5xqfL1bAOE1hyFvNzrmzRh%2FQpZbEOEyxmK0oxthHsK6L9L9dsz5DI3GgLA2IFeDszrfuNrd2QEpFlMXLagnByfkrPVAMB%2FE97qNG%2Fnt1c5l44R63zf%2FqCEvVaJfqZi3qwFGWRL50pSOWAen9E07kBP4P%2BkGtE0RfCgNx6uZhJyE0la0t1FoWknct7C%2BW1f84usuxBcvhDX6lzEUo1szd%2BHw%2FFshb1L8%2Fc%2Fd1h7NMumC9gPc3KdGdcSL%2FqTTsKNFHpzK53H6EhbYHXV%2Bt5WcCaqMxa4F6IcYTZnv04m%2FVknYX1AQ1Ge6YJabK0Se1z8IW5oRXSFV%2FzxrHNT5oAwo4fGwAY6pgHKuBy8lbEScPVlsYFDChn%2BeVA%2BnD%2B9q2G9IFwrMFCehHki8iwSvqRsB6yK8%2FKEMVZkakGVBCLGZYcW%2FpXxhpdnFIcG2uFYUkL8xlOD4bI964AB9ltQ2SOo%2F5SroJUW5XWgb1LeyJ9dIpjQ2jhKeHo%2FogMX2vPRNTuTknyO7ROOH1b7U7vKMENXhoUSj%2BARmdsBpZrttW7%2ByohZWz1APVIdWMxvFCHA&X-Amz-Signature=1617ac2f2269de039e452b3804c9fe2d66faaed6a0ccc4055d4c776fc9b34940&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
