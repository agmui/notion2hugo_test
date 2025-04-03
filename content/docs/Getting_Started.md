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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGVIZZF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBFDWtJINcKMtX114Y3CrCLTOcjKhGwwwJmF5LI3yhZsAiEApz%2BAFcmdOcqCtRSEWY30aBXYXh78ubwq6hTdDwakRkUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrMU2uMuQfQXjNnIircA%2Fx9D%2FJWZrf5KK2RGMOAs0ETpgpcCrtts%2BEwRTlO32uvPIcPJ0ukeX9abSNTUEdJzBmI8RA6sS7TCy4xlI3Nv8k0jIBJkA6jBzERZ8IaYu%2BLJ7P3CNSL5VdcRoeiHW6%2FX%2BMTqjWNrQdNDZ5scvq4yYuiryx1ryZ23gw838zJnxS%2BLsxhYM6V5JclBtMflNgnkWIvjRowi%2FYAgphLAiT81fRK%2B8Rwx36m8AuVJkY%2FSX3OHnoMkqwrQV9HTXnwsA1YiXxZXx1Nazg%2BUnoweyg55RQGGKmnhdJBTfQdA%2BOO91S7FPwe8izRp7GweoQPuXm0O%2FBTNPd03BnOBlTaoyxtbadoJ4gpszbXlsabodqZ7NZTtraUB9b%2FGFMGpnKixOdMTfj8jpL%2FX0nv96XVujCR2BR5OaTd7kSOhRzI%2FelFXEVJ1S9Wr1FeLP6sRTbMgei6UQHyYUwDM7FKeXwloeU6eOJ5a%2B49WFNU2jiVdpWi599G2mZ3Cr%2F%2Bn5pH0IcgOdAJSxW%2BQ4poc20UDfQjNSENvrFAJ%2BzRc3JyEzHgiB0SdpVqM4ovQJNTK9zB7yagPfKhHtvfLONCA9MJCzMpkHGCNfIw6pM%2FJAmSjxhJ7%2FYHy58%2FkowRnKxedMi%2B4SE7MM7It78GOqUBCuPalbf6S6cUuPaxD1yjnoZEzwd88obv4nRG9BfZqZShH3n89Uauk8Kg63OymyBDzxWQ4xDpAaaEF6%2B2hqPxH86AtNUxzG%2FiEMyP2qMae%2B7NAGoyBeFnK7XCd17n35QcYNiwJfnmzwg%2BM8dkuMP%2FjRAiPeTl1cfcQmPQV6%2BThkNoW846sz0rlJNFCEeWQ%2FznT8fUWOb1pUHhWBg09JiLJnQsSm2%2B&X-Amz-Signature=da10514f26d390fe31aadc333dde1c86fa6e6bbc621b04848049874ecf972fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGVIZZF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBFDWtJINcKMtX114Y3CrCLTOcjKhGwwwJmF5LI3yhZsAiEApz%2BAFcmdOcqCtRSEWY30aBXYXh78ubwq6hTdDwakRkUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrMU2uMuQfQXjNnIircA%2Fx9D%2FJWZrf5KK2RGMOAs0ETpgpcCrtts%2BEwRTlO32uvPIcPJ0ukeX9abSNTUEdJzBmI8RA6sS7TCy4xlI3Nv8k0jIBJkA6jBzERZ8IaYu%2BLJ7P3CNSL5VdcRoeiHW6%2FX%2BMTqjWNrQdNDZ5scvq4yYuiryx1ryZ23gw838zJnxS%2BLsxhYM6V5JclBtMflNgnkWIvjRowi%2FYAgphLAiT81fRK%2B8Rwx36m8AuVJkY%2FSX3OHnoMkqwrQV9HTXnwsA1YiXxZXx1Nazg%2BUnoweyg55RQGGKmnhdJBTfQdA%2BOO91S7FPwe8izRp7GweoQPuXm0O%2FBTNPd03BnOBlTaoyxtbadoJ4gpszbXlsabodqZ7NZTtraUB9b%2FGFMGpnKixOdMTfj8jpL%2FX0nv96XVujCR2BR5OaTd7kSOhRzI%2FelFXEVJ1S9Wr1FeLP6sRTbMgei6UQHyYUwDM7FKeXwloeU6eOJ5a%2B49WFNU2jiVdpWi599G2mZ3Cr%2F%2Bn5pH0IcgOdAJSxW%2BQ4poc20UDfQjNSENvrFAJ%2BzRc3JyEzHgiB0SdpVqM4ovQJNTK9zB7yagPfKhHtvfLONCA9MJCzMpkHGCNfIw6pM%2FJAmSjxhJ7%2FYHy58%2FkowRnKxedMi%2B4SE7MM7It78GOqUBCuPalbf6S6cUuPaxD1yjnoZEzwd88obv4nRG9BfZqZShH3n89Uauk8Kg63OymyBDzxWQ4xDpAaaEF6%2B2hqPxH86AtNUxzG%2FiEMyP2qMae%2B7NAGoyBeFnK7XCd17n35QcYNiwJfnmzwg%2BM8dkuMP%2FjRAiPeTl1cfcQmPQV6%2BThkNoW846sz0rlJNFCEeWQ%2FznT8fUWOb1pUHhWBg09JiLJnQsSm2%2B&X-Amz-Signature=75fb07fffcf3ff5a5525694df6b4c5f7e7e8983f535f557607bccc6662416619&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRSMFDY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU54lKFBJJc%2F%2FsfqiysXhed7CSM8SjnJXy%2BD9XBEu8OQIhAND6Hp7sZ8r1EMxW5sNICENBFXUfF0vUyrRG5ED86KCBKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qolOAh8KkynYsrwq3AMdPB%2BIqh4MouSLLpDRfkzfAZ9%2F%2BX1ZnCzdBoRHm%2BRl%2Bb2%2FV3tZiEmcACCQ3Qch3bYbubwVlw8bMlmq2gKiJ4lIsAHnOkl6rQUXK3z%2BL3%2Bgz4qWi0veMScGlPhtbs7S1fMDjqoMvl2cFVXhTl3Xsp0HfCd10x2J7ioN5xzKV5FRaXXF8RvATwr3FJmmPpCYUGECPQ7FTYzw483kgOKtIdSmXDcEGKSVEeNwktqL1udQ%2BVOG6GYnsKBiousWmMPbulqda7eIS%2FD63lnJLDgWCXCFtF2ayK2t9B2v%2BgUHtRJ4pkrptGEvJCEM%2FIq5xUX8ffaVloMQqLIU8FJJrUFOUYK2AOzt6DUQzUfRjzoVYk7lTCtt756GLhE2ZE923Ja7sZB1QvKtwvnNHcOws4XGuXhZcawzxxt7TcL1UKmTcdmYKeHEAbyRL5m2xgEg4Mipuc%2FQH5YlFtnL%2FrITK6yb7%2BPCfIaUXIz%2B8EDrIq6lzWPJuNv0chMROuSSfg1TvGm53gqNmkvde7aOJG3wzClrSv1XiA%2FSXEzlkBMOtmSXI%2Fl5xaZJ1r8irmV6YD2gIMEMB1e3N4JuStIQPpT1Q%2FHgofNhJkpiQg1gdoUNAhS0Bqk0pftn26oDIflsdh5q%2FzDsyLe%2FBjqkAVPlWENHo7SonazoEya3WN8ArgW4llv8FnpmjXeTMZ6o533gasavlQlaXrHtFLqfbhYDRhbDGrlZRHEeCfcoBQAVtFLIGWLXoFXIFD87LAmY3upIQF0FFiweHNEg8%2BBqOId0ZT2LdoZCPqlYUP%2BcIWh0X32ltKHqGeoYGPigBzSIzdttM4SyZ%2FrX2gWTBY3UAXrouiWDOcaoRSwn%2FX4onqeYT6zV&X-Amz-Signature=a2a44e99c7977b257fad188e6b240be1ab49826d36daadc1b866366608c76178&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZCKCDWM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBrh5S%2Fz5bBNewfDa6P5BvMYflEPiBPuCIA%2Bg5GWa8dXAiBtz2D%2Bn65B2X5TDeC8lXtA5oA7Jjdzd30fH4QbuwtG%2FSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5fZY0WZ0foE3xa0KtwD34keM5Bo%2Fc%2BQEqr02Lr1KcTGc4irkbdMD%2FDsOgpVY1Ld5FQU%2BZACgC2b9dvNqHtCsypkPRWODRPdxx0d4sKydQQdGkPgVHc%2Fapux1u%2BnBHZwAW9P2l56YG6jAqdwF0RqRI%2F3z1gnX%2BHAx6po9e4QRIL6Hnd8eLygKH24OD9i9r5Eh3Xcxvx0Rt8qEVUBIccBNtilC0ENN4Z%2B1tXRajZA%2F3ovKRtTYcpAEz4Ex0LcdOIgVWA88svRbTDFv3NLWpM9a42pxZUooJlw%2F%2BKjHaBRSs95S6xHtska0nXZfDz40XebuzrrrcF00EAqRY%2BLlwZ2OVvQoJ0fK0hRFPmFf706Owa1BqGUzFNl6Fki9v3nmAnbEwB1l%2F4xgyDV4hK81z17GLB5eGvLGKDNYf7EIS3kOyt3MWRAP8K4SsO7G7%2FZ4ZA7cS2Lv4ZyvdjR%2FF%2Fb8K1Mt87o6EWmyBGIChNBIgl%2FQSibZ6nYzIR%2FzdYbJOBWiMvEGSViiJWOJlzQbDU%2FrCdkhNN%2FmbMVYWlNN0iVo0mHgyWMnhQ7pc453SRgA5mgkqVamEF4n2110i5ZgZniWvKsZVEvMVTGh%2FB03qGHxWpuiQBJy8Iggepe%2BvkuymNuVx4qIGa8hP357tVrP4Ew5Mi3vwY6pgFvvrLXZdHaSFnMrpukCqlIuTcLEnVTZpYXlU4t4HeqKVMDwk1XbzD2PMQPyfOYuRETo1N1hyHasFYJpHKgoQfT%2BuTcA%2BN3fWGzPV%2BKfGJh9c87ZCwItx9mAMuDsnymhva2VENNjQ1St8llX3wq878419R0OMsltfe4CjJjvz32KJ9nWUaGhbIvPnmOZufUHmMkFRRJDH35aQhV8sRY%2F0%2FQL3wmJayK&X-Amz-Signature=7cf6fcc770bb4bb26bd474924995fb129a7649419e93e45899281aeec9d5a22e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGVIZZF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBFDWtJINcKMtX114Y3CrCLTOcjKhGwwwJmF5LI3yhZsAiEApz%2BAFcmdOcqCtRSEWY30aBXYXh78ubwq6hTdDwakRkUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrMU2uMuQfQXjNnIircA%2Fx9D%2FJWZrf5KK2RGMOAs0ETpgpcCrtts%2BEwRTlO32uvPIcPJ0ukeX9abSNTUEdJzBmI8RA6sS7TCy4xlI3Nv8k0jIBJkA6jBzERZ8IaYu%2BLJ7P3CNSL5VdcRoeiHW6%2FX%2BMTqjWNrQdNDZ5scvq4yYuiryx1ryZ23gw838zJnxS%2BLsxhYM6V5JclBtMflNgnkWIvjRowi%2FYAgphLAiT81fRK%2B8Rwx36m8AuVJkY%2FSX3OHnoMkqwrQV9HTXnwsA1YiXxZXx1Nazg%2BUnoweyg55RQGGKmnhdJBTfQdA%2BOO91S7FPwe8izRp7GweoQPuXm0O%2FBTNPd03BnOBlTaoyxtbadoJ4gpszbXlsabodqZ7NZTtraUB9b%2FGFMGpnKixOdMTfj8jpL%2FX0nv96XVujCR2BR5OaTd7kSOhRzI%2FelFXEVJ1S9Wr1FeLP6sRTbMgei6UQHyYUwDM7FKeXwloeU6eOJ5a%2B49WFNU2jiVdpWi599G2mZ3Cr%2F%2Bn5pH0IcgOdAJSxW%2BQ4poc20UDfQjNSENvrFAJ%2BzRc3JyEzHgiB0SdpVqM4ovQJNTK9zB7yagPfKhHtvfLONCA9MJCzMpkHGCNfIw6pM%2FJAmSjxhJ7%2FYHy58%2FkowRnKxedMi%2B4SE7MM7It78GOqUBCuPalbf6S6cUuPaxD1yjnoZEzwd88obv4nRG9BfZqZShH3n89Uauk8Kg63OymyBDzxWQ4xDpAaaEF6%2B2hqPxH86AtNUxzG%2FiEMyP2qMae%2B7NAGoyBeFnK7XCd17n35QcYNiwJfnmzwg%2BM8dkuMP%2FjRAiPeTl1cfcQmPQV6%2BThkNoW846sz0rlJNFCEeWQ%2FznT8fUWOb1pUHhWBg09JiLJnQsSm2%2B&X-Amz-Signature=0071f0dc6eeee497c90ac3436f94facbd0939da50fd716ef0c565572bc9b32ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
