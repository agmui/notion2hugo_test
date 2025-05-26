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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJTZQN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIwrnhzmruaDBjiHUwGs8CuCGvXGumiSQbf8l%2BqFcdAiEAuV7wFGm0Mn7J%2BDqPtti0Pu1tSXi4ejTeAJbb9JfJ%2FdEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDC5TBg0RyXj2bWG2CircA%2B7xQVWgESp0ASsRPTIw%2Bh7tIjYkyxgueO2%2F0BGIBmRNYTXPoBjnRRHfSC6gOiefWzcf7Y8n5TuC17BTs5a%2BsSxNOxlJlxnMsMHQfry%2BRC9EjNj%2F7Po9jr7jVSf1bpr2r24k2CuauiH6C%2BqEEpS9CB4YHmiqFJfAloAHhx3mvvQ7ciPO7IKNpIJSsg9UeKcGOpAGJSrUab0hTJAuF0jy0vFurSOHdj%2FwXezBDXZqVDQKkCzMy2pDU07EdT3YEeQThej4YAHgOF8fLnTKasQFEm3nAwMy2qD4ssxVNsWUMh2kWl4fL3iid9c0BX4uMp%2FxPCXpI7SdL79u7i4nwsUjvW%2BxViTHMZK0dHaEqfw9mJIpwUK%2BHcYG0oNzvHhSXIBo6QOyZKpYpnyRoPjP6arOY6xazipKyjheAhARq5%2FHZcj9QYK1iuO3T54JEiMEWH38Xtc4WGnx2aVUrz65cVBNeUjNOEkvpP4HyIR8FxAhT7R1HXegMLlioSQHvRzb1eP6XonkveVgNRQFyXsjsMsiCumQ%2FEKwtBkexLdmucir3OoJEswMpWD8TxVVOvecCuJBjnauiHG5hTwvfoYzY8c3rogbIb5V0MmA3kxmf0lWT21bq%2BFZ6Si%2BQRfAJLjBMJTi08EGOqUBBPLRbRQ4lbcDMa28vV1N%2BEhFu6OVt9enJljLSSCGEanL5wrRGWy8z%2BuCdV%2FLsZG01X6DR%2BN3r%2FMfJiBy8rPzMedID1F%2BoJaA1fUL%2BgdvjOIwUP5VJj6OUvyTH9p0x6%2BwgcH0ExNcYj04G4g0eyfxXq0b8JKhmPLOA2sUHPwphg7sXkNow%2F2pPN5Z2yMmhRA%2Bz633Fm61I5NBxy%2BVh1rmwRf0wpTl&X-Amz-Signature=e4fbaba960e4d92828ae2d0a0c99df9b79b3cc77f0d0d30c6c237b74306a994f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJTZQN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIwrnhzmruaDBjiHUwGs8CuCGvXGumiSQbf8l%2BqFcdAiEAuV7wFGm0Mn7J%2BDqPtti0Pu1tSXi4ejTeAJbb9JfJ%2FdEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDC5TBg0RyXj2bWG2CircA%2B7xQVWgESp0ASsRPTIw%2Bh7tIjYkyxgueO2%2F0BGIBmRNYTXPoBjnRRHfSC6gOiefWzcf7Y8n5TuC17BTs5a%2BsSxNOxlJlxnMsMHQfry%2BRC9EjNj%2F7Po9jr7jVSf1bpr2r24k2CuauiH6C%2BqEEpS9CB4YHmiqFJfAloAHhx3mvvQ7ciPO7IKNpIJSsg9UeKcGOpAGJSrUab0hTJAuF0jy0vFurSOHdj%2FwXezBDXZqVDQKkCzMy2pDU07EdT3YEeQThej4YAHgOF8fLnTKasQFEm3nAwMy2qD4ssxVNsWUMh2kWl4fL3iid9c0BX4uMp%2FxPCXpI7SdL79u7i4nwsUjvW%2BxViTHMZK0dHaEqfw9mJIpwUK%2BHcYG0oNzvHhSXIBo6QOyZKpYpnyRoPjP6arOY6xazipKyjheAhARq5%2FHZcj9QYK1iuO3T54JEiMEWH38Xtc4WGnx2aVUrz65cVBNeUjNOEkvpP4HyIR8FxAhT7R1HXegMLlioSQHvRzb1eP6XonkveVgNRQFyXsjsMsiCumQ%2FEKwtBkexLdmucir3OoJEswMpWD8TxVVOvecCuJBjnauiHG5hTwvfoYzY8c3rogbIb5V0MmA3kxmf0lWT21bq%2BFZ6Si%2BQRfAJLjBMJTi08EGOqUBBPLRbRQ4lbcDMa28vV1N%2BEhFu6OVt9enJljLSSCGEanL5wrRGWy8z%2BuCdV%2FLsZG01X6DR%2BN3r%2FMfJiBy8rPzMedID1F%2BoJaA1fUL%2BgdvjOIwUP5VJj6OUvyTH9p0x6%2BwgcH0ExNcYj04G4g0eyfxXq0b8JKhmPLOA2sUHPwphg7sXkNow%2F2pPN5Z2yMmhRA%2Bz633Fm61I5NBxy%2BVh1rmwRf0wpTl&X-Amz-Signature=1b0d438dadc5e7bfb9d654cfe4808dc732a6adf4c481926ba5f33adde4a5ef6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJTZQN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIwrnhzmruaDBjiHUwGs8CuCGvXGumiSQbf8l%2BqFcdAiEAuV7wFGm0Mn7J%2BDqPtti0Pu1tSXi4ejTeAJbb9JfJ%2FdEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDC5TBg0RyXj2bWG2CircA%2B7xQVWgESp0ASsRPTIw%2Bh7tIjYkyxgueO2%2F0BGIBmRNYTXPoBjnRRHfSC6gOiefWzcf7Y8n5TuC17BTs5a%2BsSxNOxlJlxnMsMHQfry%2BRC9EjNj%2F7Po9jr7jVSf1bpr2r24k2CuauiH6C%2BqEEpS9CB4YHmiqFJfAloAHhx3mvvQ7ciPO7IKNpIJSsg9UeKcGOpAGJSrUab0hTJAuF0jy0vFurSOHdj%2FwXezBDXZqVDQKkCzMy2pDU07EdT3YEeQThej4YAHgOF8fLnTKasQFEm3nAwMy2qD4ssxVNsWUMh2kWl4fL3iid9c0BX4uMp%2FxPCXpI7SdL79u7i4nwsUjvW%2BxViTHMZK0dHaEqfw9mJIpwUK%2BHcYG0oNzvHhSXIBo6QOyZKpYpnyRoPjP6arOY6xazipKyjheAhARq5%2FHZcj9QYK1iuO3T54JEiMEWH38Xtc4WGnx2aVUrz65cVBNeUjNOEkvpP4HyIR8FxAhT7R1HXegMLlioSQHvRzb1eP6XonkveVgNRQFyXsjsMsiCumQ%2FEKwtBkexLdmucir3OoJEswMpWD8TxVVOvecCuJBjnauiHG5hTwvfoYzY8c3rogbIb5V0MmA3kxmf0lWT21bq%2BFZ6Si%2BQRfAJLjBMJTi08EGOqUBBPLRbRQ4lbcDMa28vV1N%2BEhFu6OVt9enJljLSSCGEanL5wrRGWy8z%2BuCdV%2FLsZG01X6DR%2BN3r%2FMfJiBy8rPzMedID1F%2BoJaA1fUL%2BgdvjOIwUP5VJj6OUvyTH9p0x6%2BwgcH0ExNcYj04G4g0eyfxXq0b8JKhmPLOA2sUHPwphg7sXkNow%2F2pPN5Z2yMmhRA%2Bz633Fm61I5NBxy%2BVh1rmwRf0wpTl&X-Amz-Signature=8d71c34b39f07f35033626900a884a93d9fbae01399aed27480070573f641480&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GB3QFA5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs8yt1gnehELAHEBXSohOuuqGSzeXzM4i5qnGAX0Ip8AiEAq04srvdXjapw1%2BUEcYeVVj3fZ56ymC7yMoDJbFvlQ7Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7oy0%2BNNqZDtPzlSyrcAwYSM65p8DURa9WgsX6%2BauaIZLkV5m%2B8QDn3N56zCqZEEbUbf1r0bz8Hi8ABOCapDKpSL7wgWHmwmovHMs3c5GF4hBeZQxa4lSk3QtafrM0hFGgykGQ1a1ZurBRC%2BOZWVflX0HqsL%2F8Nay98DjBkDNzX0nIwb1XTOssJo%2B6YBJBzOmBJ3ErFEsCzg1ysPeCCuFoK1IN2GVmcbMF5fw8AWprMJi4myzyMndmjoUoQERZMiTxyhujjOHZPXmLLSt1tNjuk3pVLsk5uCdNWrhZI5saDACM2u%2FmwNfKGa61f8iW8xRy6xDH3mCmoIuTNWj%2Bso9lAsirUxrrHYRnRcHoPC6DKiGHFLQed1JAna4ZbZa%2FKQ5atql1I32C6%2B33Lf8X7oAIQL4Yz510tLdOafnozjgXFEonaZfYo9vZ2V0SK0SXWncy8AOiqaz2deSgnnulChQUApo9hLl3ehg1ehM%2F1OHcmiw0SAQz528j8voO%2B%2BZzN%2FPdN22HB6hc0UkZW4GSAbPdf0cap0Xg9SnOmsGn8mFhV6d7mgFxG22vWxdxbKy%2FZCXXdc9m8QtJ1Zs%2FwRS1b4t%2BuxaT8JvAykx%2FO5%2FGBJlW1ZH%2FFqUh%2B9kLBOz48DwH4oFXC%2FyggBymOYpa3MN%2FT08EGOqUBmueDLLySnrm5fw5I6EZon16TeBCQBkxdbq8dUyGSK3O8N8OcDZG1gwKu555FOu41ej%2BER9cs64eelqJHNJmSMjuST%2B8xjfGPqMDLJGxI%2Bgr9t2D20aVu8kFXto%2Bth2f7TBBWpKVzrgNmgErkN5bAZAacqvwxmwj1o3FknTz%2F6zXv7py3p9I1Jq1ZGQL5ZC34VBXorYFMOqI5Hwbg4Awx1ELQTZSi&X-Amz-Signature=6c5c033fd3a3cb4978c759e4135e5afbccb7a2d2fac273d0c20b976996bf8123&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5AK5WOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQzq563YKTBjk4UaYjWZN%2BFZ3WhLVk0wMhhWGMml586AiAhYT5bv7z%2BrZ%2B%2FUKvBGFed6hMUxe9gPHwaoMwM%2BKCvWCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMCCG3cVGpk9fX4x5EKtwDxEg96P6UjSGf8fileQU%2F8UnsqZf65JlSIDfND2oK1jnYqlY5nm%2BSgIJYDaN2fECJnVNawNgzbjjUl0ykTDe9b0%2BfGCTIvuUQVP2TWLspnEyGSjlIisExpoxEE7IG5KQSfhG8TH30ZG%2F1R5ja3mU7SO%2B4ucO7DoIc4g5idAyJp%2F46qjjwN2dHNJ6hy5mVp6IukAiOFjHWXUt4CM45Y97gPOK5a2wwcanibrZSCJjfS3MDf0ivyzUgnAobD0jGJhBJpAyEY5sUeD0gM1ryez9TnohuAuSOco7pP0QIjQjTSKWLp92tfPIu4mTMhjjf2ezj1ovFK0fO5NINFC4jihmdxPFWahtN6j7BEezmB0RXQ8Ia4MiW1KEyfvq3yWWNa5LEe0dhc4hglu%2BRdzUbrAFwbt71OVEnqy2TZkGMvzg8%2FH%2FZjtwmegK0OS%2FnclFSxJuEPzYo5GBUlNi3C0UEcsQ4E3LLLgTekIt8ILm%2BEDkyLcMbTGexZbW3Rgd7ZZ53z9aK%2BvpPMcPDqAirZztBFH87BOWrA4LyV4MtrL2fiyRH62UEKCUhh%2Foe7FF4vcetgX05BTSFFxjZrDZEWxgK0RJpNqXPxTMVsReF35SK7eeXY2vNeBjVC9z3eecDArcwnNPTwQY6pgEeh2Ea6C5GJZO%2FZaZhzR0IygW%2BNSugcpRO2AcKrM035jYuHDRh1E9QohqSXmFUu%2B7avKlC3a%2BhiZmH7APnzLMbIIg40y%2BqR08tixCbX5BKWgi%2Fr06P4DS3qj6gr%2BtVdSRQSfu1Z3atMcjEtbVnQE6Z0X%2BaQT9vOhCvBMWFUw8QdI15w%2BxPOv4JlFU3Y4ixWMfeMFYoYbTzHU7LMN8V4sKeDnugoVvr&X-Amz-Signature=f749e645d531637eeba1bc517dcf9bf888fe1786ebab6fb27146601ed5afbea6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJTZQN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIwrnhzmruaDBjiHUwGs8CuCGvXGumiSQbf8l%2BqFcdAiEAuV7wFGm0Mn7J%2BDqPtti0Pu1tSXi4ejTeAJbb9JfJ%2FdEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDC5TBg0RyXj2bWG2CircA%2B7xQVWgESp0ASsRPTIw%2Bh7tIjYkyxgueO2%2F0BGIBmRNYTXPoBjnRRHfSC6gOiefWzcf7Y8n5TuC17BTs5a%2BsSxNOxlJlxnMsMHQfry%2BRC9EjNj%2F7Po9jr7jVSf1bpr2r24k2CuauiH6C%2BqEEpS9CB4YHmiqFJfAloAHhx3mvvQ7ciPO7IKNpIJSsg9UeKcGOpAGJSrUab0hTJAuF0jy0vFurSOHdj%2FwXezBDXZqVDQKkCzMy2pDU07EdT3YEeQThej4YAHgOF8fLnTKasQFEm3nAwMy2qD4ssxVNsWUMh2kWl4fL3iid9c0BX4uMp%2FxPCXpI7SdL79u7i4nwsUjvW%2BxViTHMZK0dHaEqfw9mJIpwUK%2BHcYG0oNzvHhSXIBo6QOyZKpYpnyRoPjP6arOY6xazipKyjheAhARq5%2FHZcj9QYK1iuO3T54JEiMEWH38Xtc4WGnx2aVUrz65cVBNeUjNOEkvpP4HyIR8FxAhT7R1HXegMLlioSQHvRzb1eP6XonkveVgNRQFyXsjsMsiCumQ%2FEKwtBkexLdmucir3OoJEswMpWD8TxVVOvecCuJBjnauiHG5hTwvfoYzY8c3rogbIb5V0MmA3kxmf0lWT21bq%2BFZ6Si%2BQRfAJLjBMJTi08EGOqUBBPLRbRQ4lbcDMa28vV1N%2BEhFu6OVt9enJljLSSCGEanL5wrRGWy8z%2BuCdV%2FLsZG01X6DR%2BN3r%2FMfJiBy8rPzMedID1F%2BoJaA1fUL%2BgdvjOIwUP5VJj6OUvyTH9p0x6%2BwgcH0ExNcYj04G4g0eyfxXq0b8JKhmPLOA2sUHPwphg7sXkNow%2F2pPN5Z2yMmhRA%2Bz633Fm61I5NBxy%2BVh1rmwRf0wpTl&X-Amz-Signature=80088453c19fa710c7044f02c02d9fa8ad92d157d15ac9a54ca9e2e87cac9236&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
