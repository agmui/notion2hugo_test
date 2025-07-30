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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BBQQDH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHtVLIp3j9vp0NVWCsQ5KZck5vfD9t7KctvEPpaKDOkAiB%2Bd1OZPx9nuItaG4J68GZeKvn3jBGYucsk%2FXDDSi7UQCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FdkBJz%2BRRWQ3pmOKtwDwNheG3w8GPYIreiz2ndrvtDY4mtAffHmMMY52wm520X1uLG5W4y5SmM%2BDZfhzvM5fYDfg8v0h91uKDbNPsoPH%2BaBsEs0KUCb%2BOy8HaRP9dvmYnPdSmFCeZh87zxQonbQVVhwz8d7VNvIzuW%2F8Y3ivzWWcFVpMci3yA3iWtm0WZHlHrzPMfeQMQyHoWIKaBf3sHGdE4ux6%2BYA%2FBarpf5tVWxYwgTITuIxxAa6PjoMdzNrOiDCB8XJDpgNt7R0%2B6ei5POj26rPxm3SAVqOERxzUTugskMdMZuOseTRS9k3muARxVNfjIDe44E4kb16lpwBEGog%2FoGbOFtu5Ps4X3c8aMBjdy747%2B6YcgA0Hz2hJOI%2FdLfpSVidJvhIf6o3S10KsXoJt2U8%2F11GEPyWFeBxUCXkld5OCY3RwUz1acdw2bi38RERcs4K3WPXdqK2LxNjEWm%2BrleZQ4O3FZfR0EqPygJ%2FpufMxr9F9fd%2FxWOuDYPsc730ptJ%2FEIWAc5YLBequK3IR7fVRXtMae1Ge9K9AidYOPzxyHx4QCYmxi8F4d9Of1rAIxHOQsYjTg8E9io3csSS%2BEfKi1t%2FX8pVKHlc7JEFjEfO8h5IlIGnbC9L2Hz0o%2BdjczjxkLWe53K0w4cGnxAY6pgGHjVKHa%2FocOsinBxgwwBfnms0t2rUhJb9F2L5viw4n0ZifPUH7l%2FEA4n8nYF%2F9ui3bOTgoVjOCVyEuqFWIA%2FwANh%2B%2BHMALoUKo21UleJk3zNqRwgWaX7VBDWYYFVHfy6cpZaVzXabSVXhDlkzEcfN6Ylb7RIHBJifRFsVzriofcy10t03w0WP95AHd8K%2BOFysKCRtz4fzMvC8qwvFYh0PtEsGhCglK&X-Amz-Signature=16cf368b0c73fadc577bc25ac8f03c643bac52ac108818c552df141d2b8dc324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BBQQDH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHtVLIp3j9vp0NVWCsQ5KZck5vfD9t7KctvEPpaKDOkAiB%2Bd1OZPx9nuItaG4J68GZeKvn3jBGYucsk%2FXDDSi7UQCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FdkBJz%2BRRWQ3pmOKtwDwNheG3w8GPYIreiz2ndrvtDY4mtAffHmMMY52wm520X1uLG5W4y5SmM%2BDZfhzvM5fYDfg8v0h91uKDbNPsoPH%2BaBsEs0KUCb%2BOy8HaRP9dvmYnPdSmFCeZh87zxQonbQVVhwz8d7VNvIzuW%2F8Y3ivzWWcFVpMci3yA3iWtm0WZHlHrzPMfeQMQyHoWIKaBf3sHGdE4ux6%2BYA%2FBarpf5tVWxYwgTITuIxxAa6PjoMdzNrOiDCB8XJDpgNt7R0%2B6ei5POj26rPxm3SAVqOERxzUTugskMdMZuOseTRS9k3muARxVNfjIDe44E4kb16lpwBEGog%2FoGbOFtu5Ps4X3c8aMBjdy747%2B6YcgA0Hz2hJOI%2FdLfpSVidJvhIf6o3S10KsXoJt2U8%2F11GEPyWFeBxUCXkld5OCY3RwUz1acdw2bi38RERcs4K3WPXdqK2LxNjEWm%2BrleZQ4O3FZfR0EqPygJ%2FpufMxr9F9fd%2FxWOuDYPsc730ptJ%2FEIWAc5YLBequK3IR7fVRXtMae1Ge9K9AidYOPzxyHx4QCYmxi8F4d9Of1rAIxHOQsYjTg8E9io3csSS%2BEfKi1t%2FX8pVKHlc7JEFjEfO8h5IlIGnbC9L2Hz0o%2BdjczjxkLWe53K0w4cGnxAY6pgGHjVKHa%2FocOsinBxgwwBfnms0t2rUhJb9F2L5viw4n0ZifPUH7l%2FEA4n8nYF%2F9ui3bOTgoVjOCVyEuqFWIA%2FwANh%2B%2BHMALoUKo21UleJk3zNqRwgWaX7VBDWYYFVHfy6cpZaVzXabSVXhDlkzEcfN6Ylb7RIHBJifRFsVzriofcy10t03w0WP95AHd8K%2BOFysKCRtz4fzMvC8qwvFYh0PtEsGhCglK&X-Amz-Signature=23eb1bd6a4b1319a3680ee475c50ed0bf6ded240d07c810b0614869c720053c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BBQQDH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHtVLIp3j9vp0NVWCsQ5KZck5vfD9t7KctvEPpaKDOkAiB%2Bd1OZPx9nuItaG4J68GZeKvn3jBGYucsk%2FXDDSi7UQCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FdkBJz%2BRRWQ3pmOKtwDwNheG3w8GPYIreiz2ndrvtDY4mtAffHmMMY52wm520X1uLG5W4y5SmM%2BDZfhzvM5fYDfg8v0h91uKDbNPsoPH%2BaBsEs0KUCb%2BOy8HaRP9dvmYnPdSmFCeZh87zxQonbQVVhwz8d7VNvIzuW%2F8Y3ivzWWcFVpMci3yA3iWtm0WZHlHrzPMfeQMQyHoWIKaBf3sHGdE4ux6%2BYA%2FBarpf5tVWxYwgTITuIxxAa6PjoMdzNrOiDCB8XJDpgNt7R0%2B6ei5POj26rPxm3SAVqOERxzUTugskMdMZuOseTRS9k3muARxVNfjIDe44E4kb16lpwBEGog%2FoGbOFtu5Ps4X3c8aMBjdy747%2B6YcgA0Hz2hJOI%2FdLfpSVidJvhIf6o3S10KsXoJt2U8%2F11GEPyWFeBxUCXkld5OCY3RwUz1acdw2bi38RERcs4K3WPXdqK2LxNjEWm%2BrleZQ4O3FZfR0EqPygJ%2FpufMxr9F9fd%2FxWOuDYPsc730ptJ%2FEIWAc5YLBequK3IR7fVRXtMae1Ge9K9AidYOPzxyHx4QCYmxi8F4d9Of1rAIxHOQsYjTg8E9io3csSS%2BEfKi1t%2FX8pVKHlc7JEFjEfO8h5IlIGnbC9L2Hz0o%2BdjczjxkLWe53K0w4cGnxAY6pgGHjVKHa%2FocOsinBxgwwBfnms0t2rUhJb9F2L5viw4n0ZifPUH7l%2FEA4n8nYF%2F9ui3bOTgoVjOCVyEuqFWIA%2FwANh%2B%2BHMALoUKo21UleJk3zNqRwgWaX7VBDWYYFVHfy6cpZaVzXabSVXhDlkzEcfN6Ylb7RIHBJifRFsVzriofcy10t03w0WP95AHd8K%2BOFysKCRtz4fzMvC8qwvFYh0PtEsGhCglK&X-Amz-Signature=e47535dc69230d403a673a1221628fe49559b93504d16e03f0b63a9084f26861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZHBBWK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATIwbfk4ns8cfwxFINjd3U3xskBY1w0%2BH1N2IEBsweWAiEAo2Yo%2BuNLZ9uhyWYfvBSNoZOReBd1ExJ8BwSjf65ni%2FwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2GzuYka8SId0almSrcA2MnmmKqpf%2F%2BicC7Zn06BfuW1luqiW7baOU4bLQBOQYNvs6ff%2BKua%2BYznBRmfxw1AzHmIVZVo18ZHvahhbRWjBThh7iEs8%2F3V%2FhpF1lSBZ73HcWpiAQwUfIahg%2FruZBkV0zB6gjTXc3ie3alTtIQVWKojdYp3w6xLPfCNry%2F7AnHzJKR5jmXNWSQH3KO8arXX%2BGFRogVHsuMz%2F2lbETntZcy%2FR9utFu%2Fy6wTWAOI3pmAl5ZxiRI5wQCMRKbBnVZs4NRD3OsvqXp15IxRCT1jI%2FCI%2BqrEdYxb6lH%2ButOCs5rRV7TBLUPvIPSK39hKrtVWqZcTzZqf8XFerCoNmisVrlx93rbztWpYjb2TZ2odqoSwZY5U7L%2BD0fMWEZKwsMzrYt%2BH66WGSgWcU6%2FoJOeWlCa2O5GGYc2jfbnBM0u8ZH4tZFSZv170MU6nbZTXvGt3wj%2FiKXvS2htoqsfxOBQhtR9XGcGUzObZE9%2FbrCvzjbUCf2N%2FyjiRq7e94RT%2BH5RWqq84uQmMhrmiLY6gsli4Ue%2Fj%2FEtAIjE7Ef2%2B9sxl3WyDVFjXskFo%2FWvHk5m%2BXTVRsznnsO1nFRDYk7QjGOsHnCd0SBj466NDtB8idRA75lVA0IKi2bxf94N4aAEqMKvBp8QGOqUB5vBaLFMXp0pDASNJUkHJupkG%2FpxE%2Fy6PbG0a1sKHY2A3Epmm7wuh1NdySPfJNx2gZcIJdeKKTON5rUn0e5g5TA3IVvcZOHvFqmxAbBtCagVhos3nFDoyDT9XKI1Jm3%2B68baTSyJo20TpQG8wHZE9FqyyKYpQ8lNRxOa03jBfACjFOv1HwaQ0N12E3q5yIpO2%2FVae7JdrhX74XU1xZCOEPc%2FjzMmH&X-Amz-Signature=316d7b3022c2d84838e319dbdee6b50f7495daffef70ed0a5ee4ebbfd8c905ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MNFDHR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFJanIPB4291gV39xIL8ISDy3BJzfuoj2Bv7xNcmv2RAiEAxjkmqJhcfYNr24G9K4%2FmWw0V5PNCu5ti0%2B7EBgwgJO4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHAvsGDCmHitNwqayrcA2kSuUR7YGUrla%2FG61V3Ctlmarqs9gbfBOvaqrgdnqRjt%2F2Spnd9FN90N3wgRreaXNW8zv0Kfof8ctjdyAqejlO7vUAa9%2FlVh3nIemBd2idlFlO%2BB7lQaicxgXPzu6vrUF9je8prmyFC9zHHDqY%2FMBLcP5zI5y%2BFGZ2iLnFFDmIQIqSjMUMYb%2FyTD3uc4wqvBvb7KIn%2F9UGuYW7cEzLT0m%2FwravZWYRPmpMrCAO05kV1lGtzNYrBwC43zLcVWKvC%2B2OWsubBCGhEl5m0k3V2WwPi0JHsyoH%2B8U5YB3VCpVAmFmNA%2BD2qp3wm3pd2et6SaHHOdAdIaq8ZAWTO5AznC4NUZVEQfV7vEsOKxcitxrmCyd%2BUfo6%2BKx0KhPy1bUSyrpHHQFMNAayGg27Zy1OTEbwUDlINpTCl%2BV20k%2BZrJwDmTOtUCpkhYw5cI8kaXZqQH0Bbe%2F%2FBRQtBl1TxsmnTfZgvftzfQDoXo6DlPTXCcaJhF%2Fcyp0Aj0vngFfHJZsLo0zpwMIhXbpCGAtKSswmusWZi73YPJkM0aBJcCrtjNZJOK6GcBaojQzXzKrKntBHChvhTlvFANN4B02EJ7rL7eEVmVNmAYgWUUNyTkD1XB5EilcTHiGDL7PzGSASiMMfBp8QGOqUBU6e5%2BzwKbOdqb2hffremAMb58RtVOZDp2NQz%2BE4SkXD54fUprSKv%2BmlWrKKqzO9h1O%2Bz%2FMHBN2woVWY5RBZPlMQxs5cICImVYW7%2FuI%2Faq3dDit9wWgJTGH2WUd6I12piBYUDKn1qXHZfHXvHkAxUToaBjOKgzlrA8f%2BfZDk0MPBGp%2FDdJyglyt3sMVxRygqvUCUy4UhwHMIc0beMPqTbNm%2F4NzH%2F&X-Amz-Signature=acaa058aec4e977aebd5beb32062a1d2982b12e63b2c606fd21b217a8b099e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BBQQDH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHtVLIp3j9vp0NVWCsQ5KZck5vfD9t7KctvEPpaKDOkAiB%2Bd1OZPx9nuItaG4J68GZeKvn3jBGYucsk%2FXDDSi7UQCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2FdkBJz%2BRRWQ3pmOKtwDwNheG3w8GPYIreiz2ndrvtDY4mtAffHmMMY52wm520X1uLG5W4y5SmM%2BDZfhzvM5fYDfg8v0h91uKDbNPsoPH%2BaBsEs0KUCb%2BOy8HaRP9dvmYnPdSmFCeZh87zxQonbQVVhwz8d7VNvIzuW%2F8Y3ivzWWcFVpMci3yA3iWtm0WZHlHrzPMfeQMQyHoWIKaBf3sHGdE4ux6%2BYA%2FBarpf5tVWxYwgTITuIxxAa6PjoMdzNrOiDCB8XJDpgNt7R0%2B6ei5POj26rPxm3SAVqOERxzUTugskMdMZuOseTRS9k3muARxVNfjIDe44E4kb16lpwBEGog%2FoGbOFtu5Ps4X3c8aMBjdy747%2B6YcgA0Hz2hJOI%2FdLfpSVidJvhIf6o3S10KsXoJt2U8%2F11GEPyWFeBxUCXkld5OCY3RwUz1acdw2bi38RERcs4K3WPXdqK2LxNjEWm%2BrleZQ4O3FZfR0EqPygJ%2FpufMxr9F9fd%2FxWOuDYPsc730ptJ%2FEIWAc5YLBequK3IR7fVRXtMae1Ge9K9AidYOPzxyHx4QCYmxi8F4d9Of1rAIxHOQsYjTg8E9io3csSS%2BEfKi1t%2FX8pVKHlc7JEFjEfO8h5IlIGnbC9L2Hz0o%2BdjczjxkLWe53K0w4cGnxAY6pgGHjVKHa%2FocOsinBxgwwBfnms0t2rUhJb9F2L5viw4n0ZifPUH7l%2FEA4n8nYF%2F9ui3bOTgoVjOCVyEuqFWIA%2FwANh%2B%2BHMALoUKo21UleJk3zNqRwgWaX7VBDWYYFVHfy6cpZaVzXabSVXhDlkzEcfN6Ylb7RIHBJifRFsVzriofcy10t03w0WP95AHd8K%2BOFysKCRtz4fzMvC8qwvFYh0PtEsGhCglK&X-Amz-Signature=41847e721b0a4fc9b1fbcb11a401c2b79a75b9f61ae6a4cc960438a9d7242a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
