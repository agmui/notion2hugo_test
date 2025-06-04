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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3XSC7Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCjEsbiHNHtOWXq%2FvpKm7wInFbAeuhPp541%2FqPwePTMIwIgbIW2v5jZP7B16vN2JCom5lZvfjbJKrV6j5rcBym08osq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPVJngd%2FAFw67wmd5ircA5VE554ENWRMSMH9qU4bVW%2FVtx3FnNUzy%2Fh3D8H8S%2Bn4b3WGLt0c0PgTGpXXyXAqj%2B%2B4oagCaUV4svc%2F1FkDhYt01mhm%2B1RxIvZs8UjSt%2BoxMhNZHXj0f4hMYLsdgYcTZTK%2BkuTuZkcmOmve6MvU4adpL6oWiTuLsc7w2NztVonPkD4ARWouBqMKx63y7R2naWnd1t0j99HflVvO0Jwar%2F7SK%2F7kxvL9539WT7ukHwRt3WURIC9Zgt%2Fjzh6H9cDNQ3t4VFu4PqKJGTJeG9e7qW4iMhJqFCzdjLqNdZJtTwzNzRLK98Po21OcDuGGap3dbXv3015N9NBpPhzx29zZg758wnwpF89MBBPyhyi%2FL%2B2cIIIzEXA4TnucZbXJPqUrqpofaC3oNxqKg2cznLabJjqR%2BLDUTI%2BrEF%2F8Sqsz1V3LcuokI7l4KPefWgQgj8BM%2FfixHfl2u4MbImoKvbrdZuE%2Fb%2FXp3SzNOIFZllvqkSK5P7OolfTzJSMspg9iGXR7f2tgUYw5jxQHeQOCzl8HqTiec76UgG2GpOAUNjzR7renO4sEQN8I6w9zRKFzVIDHdnWQtMwBI8SCE%2Fi7aA%2F7BYR5rQenSeacd9H8Da2m3Iz2TECn96tz%2Bn48RnoEMJmAgcIGOqUBjZs9pykMTryR7QpmakZuXeeF3ed7X6uym8BKYLzM%2BSaJ5bALGOa%2BaIskefqdCabqqQlQlWCAXXqEAB0WRQxaXbtjvlRrXTC4VnbksiQ%2BA%2FY3liLSFfUsQJhIjFlcZ9JSyta1OrhuVZFG3SXX%2FDR8OmRLpRUtvGuxIVbhH6XN%2BfA7h%2FDK1sgv%2BODideT35CsNiqVFxOyLvafr0HY%2FNEMtHKWUHzi5&X-Amz-Signature=a4e1696118c46cabd9173a4fe3e13d507aefcb3901faf6b97d524e24aab78f50&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3XSC7Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCjEsbiHNHtOWXq%2FvpKm7wInFbAeuhPp541%2FqPwePTMIwIgbIW2v5jZP7B16vN2JCom5lZvfjbJKrV6j5rcBym08osq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPVJngd%2FAFw67wmd5ircA5VE554ENWRMSMH9qU4bVW%2FVtx3FnNUzy%2Fh3D8H8S%2Bn4b3WGLt0c0PgTGpXXyXAqj%2B%2B4oagCaUV4svc%2F1FkDhYt01mhm%2B1RxIvZs8UjSt%2BoxMhNZHXj0f4hMYLsdgYcTZTK%2BkuTuZkcmOmve6MvU4adpL6oWiTuLsc7w2NztVonPkD4ARWouBqMKx63y7R2naWnd1t0j99HflVvO0Jwar%2F7SK%2F7kxvL9539WT7ukHwRt3WURIC9Zgt%2Fjzh6H9cDNQ3t4VFu4PqKJGTJeG9e7qW4iMhJqFCzdjLqNdZJtTwzNzRLK98Po21OcDuGGap3dbXv3015N9NBpPhzx29zZg758wnwpF89MBBPyhyi%2FL%2B2cIIIzEXA4TnucZbXJPqUrqpofaC3oNxqKg2cznLabJjqR%2BLDUTI%2BrEF%2F8Sqsz1V3LcuokI7l4KPefWgQgj8BM%2FfixHfl2u4MbImoKvbrdZuE%2Fb%2FXp3SzNOIFZllvqkSK5P7OolfTzJSMspg9iGXR7f2tgUYw5jxQHeQOCzl8HqTiec76UgG2GpOAUNjzR7renO4sEQN8I6w9zRKFzVIDHdnWQtMwBI8SCE%2Fi7aA%2F7BYR5rQenSeacd9H8Da2m3Iz2TECn96tz%2Bn48RnoEMJmAgcIGOqUBjZs9pykMTryR7QpmakZuXeeF3ed7X6uym8BKYLzM%2BSaJ5bALGOa%2BaIskefqdCabqqQlQlWCAXXqEAB0WRQxaXbtjvlRrXTC4VnbksiQ%2BA%2FY3liLSFfUsQJhIjFlcZ9JSyta1OrhuVZFG3SXX%2FDR8OmRLpRUtvGuxIVbhH6XN%2BfA7h%2FDK1sgv%2BODideT35CsNiqVFxOyLvafr0HY%2FNEMtHKWUHzi5&X-Amz-Signature=1ebf68454cebbbe37ca41b7db86ed9908539e77efe1c113b1a191f89c9991017&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3XSC7Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCjEsbiHNHtOWXq%2FvpKm7wInFbAeuhPp541%2FqPwePTMIwIgbIW2v5jZP7B16vN2JCom5lZvfjbJKrV6j5rcBym08osq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPVJngd%2FAFw67wmd5ircA5VE554ENWRMSMH9qU4bVW%2FVtx3FnNUzy%2Fh3D8H8S%2Bn4b3WGLt0c0PgTGpXXyXAqj%2B%2B4oagCaUV4svc%2F1FkDhYt01mhm%2B1RxIvZs8UjSt%2BoxMhNZHXj0f4hMYLsdgYcTZTK%2BkuTuZkcmOmve6MvU4adpL6oWiTuLsc7w2NztVonPkD4ARWouBqMKx63y7R2naWnd1t0j99HflVvO0Jwar%2F7SK%2F7kxvL9539WT7ukHwRt3WURIC9Zgt%2Fjzh6H9cDNQ3t4VFu4PqKJGTJeG9e7qW4iMhJqFCzdjLqNdZJtTwzNzRLK98Po21OcDuGGap3dbXv3015N9NBpPhzx29zZg758wnwpF89MBBPyhyi%2FL%2B2cIIIzEXA4TnucZbXJPqUrqpofaC3oNxqKg2cznLabJjqR%2BLDUTI%2BrEF%2F8Sqsz1V3LcuokI7l4KPefWgQgj8BM%2FfixHfl2u4MbImoKvbrdZuE%2Fb%2FXp3SzNOIFZllvqkSK5P7OolfTzJSMspg9iGXR7f2tgUYw5jxQHeQOCzl8HqTiec76UgG2GpOAUNjzR7renO4sEQN8I6w9zRKFzVIDHdnWQtMwBI8SCE%2Fi7aA%2F7BYR5rQenSeacd9H8Da2m3Iz2TECn96tz%2Bn48RnoEMJmAgcIGOqUBjZs9pykMTryR7QpmakZuXeeF3ed7X6uym8BKYLzM%2BSaJ5bALGOa%2BaIskefqdCabqqQlQlWCAXXqEAB0WRQxaXbtjvlRrXTC4VnbksiQ%2BA%2FY3liLSFfUsQJhIjFlcZ9JSyta1OrhuVZFG3SXX%2FDR8OmRLpRUtvGuxIVbhH6XN%2BfA7h%2FDK1sgv%2BODideT35CsNiqVFxOyLvafr0HY%2FNEMtHKWUHzi5&X-Amz-Signature=c902af4b86b6c8c2f760215a12dfcdac9533edf54cc547992be2a2ee01f4262a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLH3TNXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDv%2BH1V4%2BHvwiSnKW9TkyKpF5H66dLzRlxVTFDmuJBbBAiAXEeZ1LJkYLsZ8wOrVGHsk2fnq15Rk23fgwbkdsqFIuSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMXBIubfvGDXa4XiJFKtwD5VHC6LLYCPdwjmd1Rk91qb38Q5QKMaWqZS5If1wCV0WhdqpLFfVArd28BHnhpqjo9%2FCro0G8zcZkIlscoc0HOocqURC3PvNzFXEapbmwsXZi5oUy1iQJlHJmCgNWThZtI3dAJDbBvARWFOVN178VaffDke8Rbxmku1D3XDGkt8%2BCjVriH3p8TNqVh8PHNOgkK3ttm4%2BMo9kz8ckNWv5tfnyJvgm3nP0VkbZNx2u2WmTbQApSyWB46cNLgZ%2BFUwF7EfOqRqKs%2Bxujyhu%2BdBCfpPHsq7w1cKnjJJXdmwp2WBvFUWGhD%2BM6uYIjcpurDjCZVBwfTEHVcdZwqexbneleOBkAM3gVpviierGT95JFd8ompum3saj6hFmqqmOjdpUTaImBLLdrOkJOLxzj%2FvmOPqha8v69jZ9fTe24Ur6u%2FIJPi5AtgbBOe%2Bis%2F0TPOIRla8mF9g%2FZQIJhz7EUACAfOev%2FLehRjPXkuiRbtfXnFc2pCxKnq2bH1F3%2BPcBZN2iDvjX6ChZi%2FiYw8X%2FpMIwJCr01LW67dok9J9bGURxrgS7qggRMdyI2S%2BV1blrcZyWe4Brl3wN4y6hLgo3Tulx1QQQFaB8qKvAaKRbAhpO5w%2B8gPi1YDEXlGMbtmX4wz4CBwgY6pgGvTDZ3opScBkOCeGofE1OPtUo%2BAZeNJ6Wk7yOPgIJrF8OI0b7icJ9wTkgpySAIbLPdsOg0z1Ydahe2zBjKm0sw6nKClNUwHFgTWtMQsZKZadckb4JSfatD8jidtMGh4EtItrcH851k3MAQ5Kwce8gwKczzJpO0yEnZoot%2F5rSwiZTNIsrYHzd%2FChZmUsVgEQoIaj7cJbOHrWwbotUGDZhC5EWHaZCl&X-Amz-Signature=038ff0bc116465a4461aefd7e1b72d88b628a7c563b815ab303ef5dd25dd00db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XFC2ED%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBgg286sr6ak6%2F8l5et60eaK087NL6kBBHruutedwm2LAiBylbdBSZ6JyAyM4WhLQQ%2FySJlLSPUJh22OGlGoarOmMCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMUC3qVhLTYDmzrSrOKtwDfBrY8tWWQUd%2FSZQLp0am3lHNLHA7dwR%2BZPB%2F4YksMUwSzzzY9ZSzHXa%2Bnvv%2FxBWPhrqq2Qf1XqBJtPU8AuuDNUC3edAbbM6rXMHPVmYHneSozS7UrawusfsSCDxThrvI%2Fp1Hpx54SNNvKZ6wu9PjTk%2BK1EsHvhUfUEVStMujM%2Bv8gaouIGydqvvPtb4CYWh2FxXfMhSdoupmrJwdEkvIc9Q3Ohd8YJI%2BPBRGdcZeIgKjwAKd83wInTtjbEMBrAJ6Vd1xpmd0osz%2BFdUx0t%2B6xol3as5efkSrRWL0Fbg%2FhrWlGcXs6MwhAFTKYDQXyFEXH1iu2d9xShtoEbmpBrFxwh%2BLQzuE33BRykYq9JZ2uwRfKnERxCe1J3hF6eGDD%2BZyZIIecXwQAdX2iyLvV6ZGjxMdOt60VaGQO1YrRDv6fMs3qYjbiRiq6%2FefryM8yZihOJ8mQlOafttX0dsVa76B7OPkFpZphz7v%2BfQoe1y2reJOOeLOR0JaOleTdmey3Lws%2FaZP3IZHCEyAJ6AbmgNxEE8egH%2BadUEH%2Fcz3%2FYHp7XQKcsZ1sVlRJTvRkxfAT0%2BwcTnC6R7m3e4r%2B57RPEQHJnceiWLsEssNn%2BEA3CDiBZiiuYO%2FO1wv06mXuU4wsYCBwgY6pgHyzvUSoSw9X0BuPrDjf3cAV4EuOzvW46z4CQwWPA1KDaGLIoLVCqiY%2FKfEsbdnWIHsccC8BB9nz3WLWI03dj%2B%2Fq%2FFHwYqCdH5GTmQStm2BFMksQ1Fk4tvS9CQJi%2BGGi68BE8vy%2FAgSiRIE%2BFx3euH%2FS5%2FZCNSpoTxDiyTm%2BeLgvGQt2Pt%2BHfJZoD9%2BH47ZN4oJf25Fni6Ben6MKjhGIQ4d1z7bLcs6&X-Amz-Signature=edf82c7b6a2199d22ab579e648382fca3f80f70d6973b6dc223aee778a9ac9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3XSC7Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCjEsbiHNHtOWXq%2FvpKm7wInFbAeuhPp541%2FqPwePTMIwIgbIW2v5jZP7B16vN2JCom5lZvfjbJKrV6j5rcBym08osq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPVJngd%2FAFw67wmd5ircA5VE554ENWRMSMH9qU4bVW%2FVtx3FnNUzy%2Fh3D8H8S%2Bn4b3WGLt0c0PgTGpXXyXAqj%2B%2B4oagCaUV4svc%2F1FkDhYt01mhm%2B1RxIvZs8UjSt%2BoxMhNZHXj0f4hMYLsdgYcTZTK%2BkuTuZkcmOmve6MvU4adpL6oWiTuLsc7w2NztVonPkD4ARWouBqMKx63y7R2naWnd1t0j99HflVvO0Jwar%2F7SK%2F7kxvL9539WT7ukHwRt3WURIC9Zgt%2Fjzh6H9cDNQ3t4VFu4PqKJGTJeG9e7qW4iMhJqFCzdjLqNdZJtTwzNzRLK98Po21OcDuGGap3dbXv3015N9NBpPhzx29zZg758wnwpF89MBBPyhyi%2FL%2B2cIIIzEXA4TnucZbXJPqUrqpofaC3oNxqKg2cznLabJjqR%2BLDUTI%2BrEF%2F8Sqsz1V3LcuokI7l4KPefWgQgj8BM%2FfixHfl2u4MbImoKvbrdZuE%2Fb%2FXp3SzNOIFZllvqkSK5P7OolfTzJSMspg9iGXR7f2tgUYw5jxQHeQOCzl8HqTiec76UgG2GpOAUNjzR7renO4sEQN8I6w9zRKFzVIDHdnWQtMwBI8SCE%2Fi7aA%2F7BYR5rQenSeacd9H8Da2m3Iz2TECn96tz%2Bn48RnoEMJmAgcIGOqUBjZs9pykMTryR7QpmakZuXeeF3ed7X6uym8BKYLzM%2BSaJ5bALGOa%2BaIskefqdCabqqQlQlWCAXXqEAB0WRQxaXbtjvlRrXTC4VnbksiQ%2BA%2FY3liLSFfUsQJhIjFlcZ9JSyta1OrhuVZFG3SXX%2FDR8OmRLpRUtvGuxIVbhH6XN%2BfA7h%2FDK1sgv%2BODideT35CsNiqVFxOyLvafr0HY%2FNEMtHKWUHzi5&X-Amz-Signature=3ce7effe3cd131eae8cba02b2d9344d1b25ee9b05f584d504b5eed16f48921ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
