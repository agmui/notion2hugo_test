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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTOLTUY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qCRCSmI72gx%2BHkc2JXbt0Y%2BAjIoDhEnwNLlrwlhg9wIgMa2ib3yRXergDMn6%2B03%2FymxvuuGM%2FebKlO2XxGkGqQQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDWCxqE3zjfth4SmUCrcAxDfS5YydtHCtiXGKYd%2BfVdk7oCWofgehWK%2FseiC4oSevXqAEKUEwKPHOi9BJ7VMy8nNLg9J1q3coA%2BVbT%2Flpa2dNKDq0cLI0p8abOuTKGuuXroIopybRqZ%2FVeSdpvgepvDyUDDNO3bNs6PX%2FqQSr2y5r8A0sOOOJYp5mzN7Gajg1xOKYkbuayl%2BZAUhooH7Gtqed2ZE4Psz%2ByPhiv9Q6Eaz586Hssil4QPYbkg5MENpTpUGP8M1x5F81AV4JZP0TIt28ihReMxUscL5p3R163fEgP6phRiwcb4bRjgdIIm04QeK4fggsbgv68DikEooMnZrDspo77duImZ2Q8DT%2B0hVTRiShsNxpzaPDTDHIcgtoIL1JSVQDSm%2BRpU%2B1vxGfhCWZFg2X%2FHY4rvXThd7Uw3NIqQS4LV54GEluDcqYRyQ7rlnNz2a7ormEBjcyoencHf2Gnv8Hkl6dpC%2FGFct0VEjzHHLIVXurrD4BVuXf9pH2VumYalme3fQpNyzkTdzLmuD4cjhcp%2Bt1E0JNQGm1ydmHmoCd1KTvwWplZNLe%2FfJdQ9FWYp%2BGTrhXjbw%2FJFyqXJm0WYDGFusBZwVQ2uOlCDa1KwLqbA7KJ55BHRGqtoYxgsP%2BnKkfc%2FHMcuXMMnMs8AGOqUBzmYSmFndhDLNGcxopjN7Kxwr%2F9Oy4RMigjaXdOI3oSXtSYcty2mwQTWu6Hn8qp0L0VAN1Fl2i5FpEfdfTA5Bezp2WQLnLSYyKytA7vCcD84bDY2bFMMT8gMBZylTu5M4CFTDxOJKfkBcWCCJdWXJVE1ZOGqDCjUypakvSfBKvcKShxie7Jq5FV6xMAYepI4dgFlBxaBmlOd2riaMyMShKzcRgYyF&X-Amz-Signature=33d55489ddb794b83c2558c5e5468988bc6639c9609e9a43b10a4276ae62c443&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTOLTUY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qCRCSmI72gx%2BHkc2JXbt0Y%2BAjIoDhEnwNLlrwlhg9wIgMa2ib3yRXergDMn6%2B03%2FymxvuuGM%2FebKlO2XxGkGqQQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDWCxqE3zjfth4SmUCrcAxDfS5YydtHCtiXGKYd%2BfVdk7oCWofgehWK%2FseiC4oSevXqAEKUEwKPHOi9BJ7VMy8nNLg9J1q3coA%2BVbT%2Flpa2dNKDq0cLI0p8abOuTKGuuXroIopybRqZ%2FVeSdpvgepvDyUDDNO3bNs6PX%2FqQSr2y5r8A0sOOOJYp5mzN7Gajg1xOKYkbuayl%2BZAUhooH7Gtqed2ZE4Psz%2ByPhiv9Q6Eaz586Hssil4QPYbkg5MENpTpUGP8M1x5F81AV4JZP0TIt28ihReMxUscL5p3R163fEgP6phRiwcb4bRjgdIIm04QeK4fggsbgv68DikEooMnZrDspo77duImZ2Q8DT%2B0hVTRiShsNxpzaPDTDHIcgtoIL1JSVQDSm%2BRpU%2B1vxGfhCWZFg2X%2FHY4rvXThd7Uw3NIqQS4LV54GEluDcqYRyQ7rlnNz2a7ormEBjcyoencHf2Gnv8Hkl6dpC%2FGFct0VEjzHHLIVXurrD4BVuXf9pH2VumYalme3fQpNyzkTdzLmuD4cjhcp%2Bt1E0JNQGm1ydmHmoCd1KTvwWplZNLe%2FfJdQ9FWYp%2BGTrhXjbw%2FJFyqXJm0WYDGFusBZwVQ2uOlCDa1KwLqbA7KJ55BHRGqtoYxgsP%2BnKkfc%2FHMcuXMMnMs8AGOqUBzmYSmFndhDLNGcxopjN7Kxwr%2F9Oy4RMigjaXdOI3oSXtSYcty2mwQTWu6Hn8qp0L0VAN1Fl2i5FpEfdfTA5Bezp2WQLnLSYyKytA7vCcD84bDY2bFMMT8gMBZylTu5M4CFTDxOJKfkBcWCCJdWXJVE1ZOGqDCjUypakvSfBKvcKShxie7Jq5FV6xMAYepI4dgFlBxaBmlOd2riaMyMShKzcRgYyF&X-Amz-Signature=0516ac4f60837fc29b3787f49c944384c521e5e711f5218427e20b37fc1cd67d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2IC33B%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGTbF1Xpp9MgEScqiMcF0s6WA%2B5h8lfJp34iNXFaSa4QIhAMpKe3D2gijTcmwqJHFLvx5Hmp%2BZJwhLPHg4ngW%2FDcOEKv8DCEcQABoMNjM3NDIzMTgzODA1IgzHZ6%2BX3lcX7j1S%2Bu0q3AMi%2BYmNqi9j9Nz0uY7GwZUTxAzfgc4fy4RaB5Hfprh5QKBnAhn5nAf4BjBYnNBV%2FG1%2BF52p2pxwk5SDPKkfH6OnYv4709yQzOEB8wuuxbR0E96d9m8CQ8kiakfKpq8d96Inb5%2BKOPYm%2FbfDDiAkdG%2Fn0yU9EOU71651ArS%2BMzOW7HaGQQhSK95zLmmo7SzyXmZJxH%2BnPqZ%2BEuQ9s7J2R2J3acGZNtgO9ckSJhMJRzNQZs3arpEgRuwqt%2B4N8xf%2BCq%2BEc%2FjrI5L9FSj3p2%2FoVhvRDIiH1TAcXNI7a8Dl4utle8Q9kaAFFOBfVdvjgBdAbowxdQmSlZG32RljdHqU477dtJp7CrCEnP5Sv7o058lvGGPbi1hmfMez3gfPOzOGHjyixGBi0574uGDOC2gc810ObtCReX7y%2FdrIv9fRS5D32Qdt8059fmCl7%2BaLm7txBEPf%2BdQ0PogDz6g3uZA6vSveMrQR7APfa2LNQEgWHRVFoUAUpS1wCaB1T0ZXQrlOxNZi3ojba6oEy5XktkSCavzpxSByX97XIxh0YKSm2YTbHah43AQLH4K1HYbxOBh31Rn5EUyDH8OXSTTbEli0%2F44zbUs7FKaTANC2nV1TO2gCkfAw6OeN4NCO6MdXczCvzLPABjqkAYV3WskImfbXbBrAHr5TQ0xCSkjiUr0YRvgl1gvnHAkvJa%2FJ21jF6KX0QIfBd3ZfPUUbSKeEOF6sU%2BNm6j%2F3ahd2e4Pgmq2pwuNhy5WEa%2B4ZtqfkUX0qAPJqrq4dfn3C25FT7PXha4GVp4otcVAqh0cVGLloF6HnuqJpnAJ529vkD%2Ffa1Xj%2FYwtOADLu%2BfB8RBJ%2BQOB5UoEi%2BuWiOU%2F%2F4e%2BfRVtu&X-Amz-Signature=07b0d72ee65c02e8a0f76d61a27011af769da41dd527c8056206aff70c246777&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GYGYFJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDX8oOd55cmVfrhRbwqqQ5GnHqwaEejHhFV3xOl7yhASAiEAobWVf22KKGaMvmjIqu4FBnD03NLplg6Tk0xt8UOD7CYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMJ5vfleYVxdQoSIVyrcA880aNzx9H%2BAcoUuxbLQjGOLfF22rr74QZptxSDWYZ9qysIT6VkRiU3jySvOeb4sq2Qp4vA8fcNYihm1hYHd%2B24qPNugV9OHxk5ifPgAs50YY9BlWUkjKTu1GD729uRyyH5FxbXNufpTlQOMCYehGHqSGrHZgMoRL2YfB2z4kOdG5kwRg25jUQP4i%2F4FqlvBCbgOeCcmSmXHUwVjZ2dt823P6AV11FnxI8%2BukTEWMnfAf%2FMHXeVKDhe%2Bwrij%2Bk1OT3cnLtYpEtelXwzMs50Q6GkkdsYwVValKMQeXpEd%2BVkhZ5%2BGg2mhGtITlQ9cNsCx%2FCgVFBCTT2NqxarUFjxDO2uo4CJWGBdIx3rC3vkyXoYM%2BcQMpvHhnz9XH9xNTehCd0IzTl7xxrnAhaW%2BnomzIYVQ8z%2FdmQcjr0zzxOUHOOCVpBYIyjMjaj32V48o0jwhXc5l%2FuNxo2buFcgDFtWSB5CDXEmJFx2s1wejkTxQgMctWC6LQtz8VYQaMnIl2m1riCmUlk4qviivcuLYdpNp3C4y1%2BDS92yEI6LbDJHzfirT3TKdcERAwNqOY7mva6Z8g4rr6%2F1ig1y1XzHQByd7V%2FmRoVLzYdkHOlOenhYr7D%2FrlpElEvoCbTcHnt1BMJfMs8AGOqUBch4vcaV3c4VaeyMDiEEUs1r9Sm%2By05s9KcaDS67pEL%2FASBv82VeA35%2FH6qtKYOwC%2ForXPe47rJhmCBZiySxOkAWHRfvPhCUL4V0rr%2Fuvt5yySnjOxMS7d7kOpwe8KsW%2B%2BivODbXe%2BXOkv3yVD4icVZx5y7zZ9wbhevazfqJ1%2By3jXNJYZdnKi6Cn9jLWRFInAO4TvHn6rC9RdfJE090rOiPazRFd&X-Amz-Signature=2753d112cef8d89a25fbe7b2c026c2ce1cfc48e6b024b79afb523f5d4baf5ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTOLTUY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qCRCSmI72gx%2BHkc2JXbt0Y%2BAjIoDhEnwNLlrwlhg9wIgMa2ib3yRXergDMn6%2B03%2FymxvuuGM%2FebKlO2XxGkGqQQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDWCxqE3zjfth4SmUCrcAxDfS5YydtHCtiXGKYd%2BfVdk7oCWofgehWK%2FseiC4oSevXqAEKUEwKPHOi9BJ7VMy8nNLg9J1q3coA%2BVbT%2Flpa2dNKDq0cLI0p8abOuTKGuuXroIopybRqZ%2FVeSdpvgepvDyUDDNO3bNs6PX%2FqQSr2y5r8A0sOOOJYp5mzN7Gajg1xOKYkbuayl%2BZAUhooH7Gtqed2ZE4Psz%2ByPhiv9Q6Eaz586Hssil4QPYbkg5MENpTpUGP8M1x5F81AV4JZP0TIt28ihReMxUscL5p3R163fEgP6phRiwcb4bRjgdIIm04QeK4fggsbgv68DikEooMnZrDspo77duImZ2Q8DT%2B0hVTRiShsNxpzaPDTDHIcgtoIL1JSVQDSm%2BRpU%2B1vxGfhCWZFg2X%2FHY4rvXThd7Uw3NIqQS4LV54GEluDcqYRyQ7rlnNz2a7ormEBjcyoencHf2Gnv8Hkl6dpC%2FGFct0VEjzHHLIVXurrD4BVuXf9pH2VumYalme3fQpNyzkTdzLmuD4cjhcp%2Bt1E0JNQGm1ydmHmoCd1KTvwWplZNLe%2FfJdQ9FWYp%2BGTrhXjbw%2FJFyqXJm0WYDGFusBZwVQ2uOlCDa1KwLqbA7KJ55BHRGqtoYxgsP%2BnKkfc%2FHMcuXMMnMs8AGOqUBzmYSmFndhDLNGcxopjN7Kxwr%2F9Oy4RMigjaXdOI3oSXtSYcty2mwQTWu6Hn8qp0L0VAN1Fl2i5FpEfdfTA5Bezp2WQLnLSYyKytA7vCcD84bDY2bFMMT8gMBZylTu5M4CFTDxOJKfkBcWCCJdWXJVE1ZOGqDCjUypakvSfBKvcKShxie7Jq5FV6xMAYepI4dgFlBxaBmlOd2riaMyMShKzcRgYyF&X-Amz-Signature=98c3fba529c019fb071660ebfdd56807c4db7fb811d85face3ad527c3634887a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
