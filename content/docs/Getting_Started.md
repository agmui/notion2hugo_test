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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFGWGRV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzMy5FnZPf5I77S1jxq%2FkQUa%2Bl2C0XmribkEr2xK7tgIhAIexHTRQcvlJ1jDNw4z9pD%2FGWZo1OND04mU%2FsNWYBY28KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbaXfrFCbmuDn7fIgq3API2vdGY5qm98hs528HA1qhI32QuFYtDIbXV%2BbzMyT4tWvG5VnqrRMCMU8AOnOoegjHyOUxJRNUYB0AuxtH49EQNfFGE7zkMx7OJ54lXxwihP062WLCcNPVviUNg94H92pNr6PvHhpLs01LWQaMSz%2FRn3GfGDz1ym9%2F0lI0CLmgOciETtgD1AUzrCaxLk4WMvDWIJb9DfAHIW52R5Sx5ecUVoiU%2F9sMudAXGjft8%2BGREY89GyV%2FjxXPKHBHJ%2FlQ616dYvRhGqUSten8tZwi0wWw9R%2FP7YHCzGFnruSeT5YRo3CEmS6dpWIqs7XxCwkoGe5Es93NyvxqItZFm0u3kJaEmjrmrzFjDtlSAPsUJNTJKq4Wwf5vzacRjSrh%2Btlh3kqAuGxPWW8%2BLFfyg9sYu46LrsKxTAQRSxB%2FsGfajpo8Xmn6RQKc6GsQFM1iSm5iy%2Bs9F56dx8%2F6jXXy8u1ChH%2Fo89mBtlT1xYTQxYnwANTZT60o1fZv%2B2i4OHDmcwEm7ckRoUbst4TtR8KEfDYk5soE5T3ahPFemLBo8B1VjXOVdPMI5G0RoNzaNBKxkgyOfROK1gKRs3lznAUCWKxPvAGB%2F8wo%2FXWlcPvUhEcSdyZKhy%2BkvG4D3BrIJdmw%2FzCV1ZfCBjqkAZYIhyzWLiIjBXCKw%2BPS1NkTWX0cXnGv0beURUkT58PC4U0FB3z5YvsXdmMnx1aYp55MQVkHjA5Vjc9xQjQFro14ix4AI1oCNljx9%2FuB%2F%2BUhe7%2BsBfJgxPBXYoFcQBfh9apuWM7IsBCqc%2BAtMa%2BnoDyMgGLusFFTDHxfYEsn3ogyyMZz2Ta4VlnO5K5h5y5LSPxdxLegO%2BDu7EOgkf22FXEJ8I%2Fd&X-Amz-Signature=ec33ca7db2669a7e0381851c039a0b82941a789a1ad13156a64919239654e49f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFGWGRV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzMy5FnZPf5I77S1jxq%2FkQUa%2Bl2C0XmribkEr2xK7tgIhAIexHTRQcvlJ1jDNw4z9pD%2FGWZo1OND04mU%2FsNWYBY28KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbaXfrFCbmuDn7fIgq3API2vdGY5qm98hs528HA1qhI32QuFYtDIbXV%2BbzMyT4tWvG5VnqrRMCMU8AOnOoegjHyOUxJRNUYB0AuxtH49EQNfFGE7zkMx7OJ54lXxwihP062WLCcNPVviUNg94H92pNr6PvHhpLs01LWQaMSz%2FRn3GfGDz1ym9%2F0lI0CLmgOciETtgD1AUzrCaxLk4WMvDWIJb9DfAHIW52R5Sx5ecUVoiU%2F9sMudAXGjft8%2BGREY89GyV%2FjxXPKHBHJ%2FlQ616dYvRhGqUSten8tZwi0wWw9R%2FP7YHCzGFnruSeT5YRo3CEmS6dpWIqs7XxCwkoGe5Es93NyvxqItZFm0u3kJaEmjrmrzFjDtlSAPsUJNTJKq4Wwf5vzacRjSrh%2Btlh3kqAuGxPWW8%2BLFfyg9sYu46LrsKxTAQRSxB%2FsGfajpo8Xmn6RQKc6GsQFM1iSm5iy%2Bs9F56dx8%2F6jXXy8u1ChH%2Fo89mBtlT1xYTQxYnwANTZT60o1fZv%2B2i4OHDmcwEm7ckRoUbst4TtR8KEfDYk5soE5T3ahPFemLBo8B1VjXOVdPMI5G0RoNzaNBKxkgyOfROK1gKRs3lznAUCWKxPvAGB%2F8wo%2FXWlcPvUhEcSdyZKhy%2BkvG4D3BrIJdmw%2FzCV1ZfCBjqkAZYIhyzWLiIjBXCKw%2BPS1NkTWX0cXnGv0beURUkT58PC4U0FB3z5YvsXdmMnx1aYp55MQVkHjA5Vjc9xQjQFro14ix4AI1oCNljx9%2FuB%2F%2BUhe7%2BsBfJgxPBXYoFcQBfh9apuWM7IsBCqc%2BAtMa%2BnoDyMgGLusFFTDHxfYEsn3ogyyMZz2Ta4VlnO5K5h5y5LSPxdxLegO%2BDu7EOgkf22FXEJ8I%2Fd&X-Amz-Signature=c9c9543043e889a5db862017dfa32ce427b0b88dfbaf435db1507f2f9886bfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFGWGRV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzMy5FnZPf5I77S1jxq%2FkQUa%2Bl2C0XmribkEr2xK7tgIhAIexHTRQcvlJ1jDNw4z9pD%2FGWZo1OND04mU%2FsNWYBY28KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbaXfrFCbmuDn7fIgq3API2vdGY5qm98hs528HA1qhI32QuFYtDIbXV%2BbzMyT4tWvG5VnqrRMCMU8AOnOoegjHyOUxJRNUYB0AuxtH49EQNfFGE7zkMx7OJ54lXxwihP062WLCcNPVviUNg94H92pNr6PvHhpLs01LWQaMSz%2FRn3GfGDz1ym9%2F0lI0CLmgOciETtgD1AUzrCaxLk4WMvDWIJb9DfAHIW52R5Sx5ecUVoiU%2F9sMudAXGjft8%2BGREY89GyV%2FjxXPKHBHJ%2FlQ616dYvRhGqUSten8tZwi0wWw9R%2FP7YHCzGFnruSeT5YRo3CEmS6dpWIqs7XxCwkoGe5Es93NyvxqItZFm0u3kJaEmjrmrzFjDtlSAPsUJNTJKq4Wwf5vzacRjSrh%2Btlh3kqAuGxPWW8%2BLFfyg9sYu46LrsKxTAQRSxB%2FsGfajpo8Xmn6RQKc6GsQFM1iSm5iy%2Bs9F56dx8%2F6jXXy8u1ChH%2Fo89mBtlT1xYTQxYnwANTZT60o1fZv%2B2i4OHDmcwEm7ckRoUbst4TtR8KEfDYk5soE5T3ahPFemLBo8B1VjXOVdPMI5G0RoNzaNBKxkgyOfROK1gKRs3lznAUCWKxPvAGB%2F8wo%2FXWlcPvUhEcSdyZKhy%2BkvG4D3BrIJdmw%2FzCV1ZfCBjqkAZYIhyzWLiIjBXCKw%2BPS1NkTWX0cXnGv0beURUkT58PC4U0FB3z5YvsXdmMnx1aYp55MQVkHjA5Vjc9xQjQFro14ix4AI1oCNljx9%2FuB%2F%2BUhe7%2BsBfJgxPBXYoFcQBfh9apuWM7IsBCqc%2BAtMa%2BnoDyMgGLusFFTDHxfYEsn3ogyyMZz2Ta4VlnO5K5h5y5LSPxdxLegO%2BDu7EOgkf22FXEJ8I%2Fd&X-Amz-Signature=23e345e84cfb3cac585141462c57f93203657610c51bd85eaa27fd899f801d93&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JNZAWWD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRRqbfvw5AP6AttuerCQ36ZRAOCwT61bHkdDZyxM8gbAiEAqGC4Ld1Pu%2Fm90Csm0hZKAz40pel8HmHZGhI69EHHCAEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW%2FUgpc%2BX58RLGAXSrcA%2Fal%2FNeQ9eeibvuZCFFq%2FbYTfAvOz6obuPKs%2B1tLJT2MOMoTtO%2F6Fn6lHIgl7siQohAeWELgN7NOn5yZ0gNXuSB7iuImRXsE1dw2SvdFErQo3ctEwzYsm%2F4EoDt1Pa8l4xKnnxkV3khdICHmJk%2Fv28sfJ3n1gPaQgHWItNKO%2FEZxA9r%2BfCh4EJtutZxJJhyPzQMtjmfHuA5qFcg1iYX4p1rw02nbGEtVBxWo%2FmzS%2BtcqWCowQfvhraQYl4BXyleIG7x9UPlFOtAZRPxIS0n%2FHkyWn0mYhhb6Ip7x45uVQHtp5wyaXXZSoeucst39STUnzJUBn42qkeJPFrituL7ilI1Ptb9hCHhQS2sDRA%2F55oT4mN6gIzz6f%2BzacW0wKh2MCdzxkEeFi7nol8%2BtiWsqIemsl1%2FOxb5429RZ5UbL067HMaU4ceAZ06H%2FKZorpBfNcRF99B59pIN%2B0xT%2F3hItjgBOxGBxjhFmkv%2F9fgDv%2BBJIzBesZXZsrNURi2wR0C9RL2XYJgL0poMbDtCgNM3GbljPU9SDm0UT7yp1LiPlkohNRKJLOmbGN%2B73Q7Nf%2B4YBcCVCii9uItF5PYxSv1E0C1vU5RLRtzkSbKpTYORgBnpihHYANXOhm4oA%2F5d2MLPWl8IGOqUBQpPzPj29IIR02kFMd31m%2F0G25JlWkVgLmd5QVtPmuMrvGPIzxOVtfx27y5Ym2wepvumVW32jXy6qlhoZNstvpQE8xQ9p02LnKkQk2bWUcv3X%2F4RYEJIHKCiqJk5%2BPDVKpTqYuugc1f%2BrE5yB4K8RJV%2FrL3Lc5ME4mVacQmD4GtWO2qdO5BmcDpueboYzrxGDu3503liMkj8%2BW1QCrYVYCHzXvNxt&X-Amz-Signature=3675eb2b14fa075e47033257e21ad49e3e037a2fe4c53eff3e0345edaa10f6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNSKSTL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZgnUdrnsEFMrarynWwiKO32HstCFyLWECKI2o%2BjxFzAiEA7S5L%2BWdmPT00IzjMXVyjML6Cy%2FqMtSIrgFjgFeoA7ZYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3eR3Bv%2Bs107unwECrcA9B0b9U99euiUh0TVwcgMwhXjDiWLGWUJ1P4qULCP3QTqtwcWQJd1dMrVsY5Q4CcYiCt%2BvcJx%2FpjMXBoHSbbF%2FkQPNXPwga2p9%2BcrlBi0nc7dJSqyXowevG684lJbJMiqSGoNHjzu1xyXrIIriGFFjqLqfsmNswX7efMWCY1wggedE32yVpEfB34fk4RHlwVvecaxNSQUepuwX2YYoNz9%2FJZ0B8k%2BLeraGnGXEq1LmvUbHcJLRIGNf44fOqhdjfr8waEJkMFjLGAriL6p069Xjk3n%2BuHFEThucmnoH95%2B5Rs6ly6nUiRBsCB6Dc%2BDR42u13nkt0zkDWuFNndzcRaS3y%2BNd6%2FiQ0vqGyTl87Mdw9zC3Rcf7d%2BvE4rQWxKxMBKf5AJVa4z0LbM5HBwPjnv6X%2Bli9%2BcsHlWpJEIF3krsVp885sq%2FXDAqz37oogDkHLUQTf4Hx%2FYLbkB8cl%2Fx8%2FRASbmFXhyZUSIV9oYvEGvne61mpE1uky7VrcWd5H5rn%2FVUCeCx6hH%2FLU1ZmoqLYftI84Arbq96ZzagrDWcsKTlzValMv%2Bucsl1aEV3EAjiFvfyDO8rd4WD4D%2BkpRCU2i7DyZXkYOmBtxqCkm3%2F5uQ0KabcTkjVDqPQImMTpImMLTQlsIGOqUBWuZ2y03bNRAXVfrbGWWjROfae9B59wpbFPpM3Ecyt6GmPNkvqiNATWgEc70lBOZFFnH3SXFXwl7mTeqSV1Qvcl8NacAYDaMx2s8QHd2aJVgWaTnC%2BBALsOp0rcyBGtsY61HKJQ2%2FDJ%2BEAPk9KfSZbxyIRM%2BPoQJJT6iHAw3cWZfXF7UCWaOk2QSiWdJakkMCkAOJxTbv48xRDiekkqm0XXpwhTSo&X-Amz-Signature=1e6dd71f6ab4dd10564286250e9870de32f645143eb3a00b98f4f0d7c06671c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFGWGRV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzMy5FnZPf5I77S1jxq%2FkQUa%2Bl2C0XmribkEr2xK7tgIhAIexHTRQcvlJ1jDNw4z9pD%2FGWZo1OND04mU%2FsNWYBY28KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbaXfrFCbmuDn7fIgq3API2vdGY5qm98hs528HA1qhI32QuFYtDIbXV%2BbzMyT4tWvG5VnqrRMCMU8AOnOoegjHyOUxJRNUYB0AuxtH49EQNfFGE7zkMx7OJ54lXxwihP062WLCcNPVviUNg94H92pNr6PvHhpLs01LWQaMSz%2FRn3GfGDz1ym9%2F0lI0CLmgOciETtgD1AUzrCaxLk4WMvDWIJb9DfAHIW52R5Sx5ecUVoiU%2F9sMudAXGjft8%2BGREY89GyV%2FjxXPKHBHJ%2FlQ616dYvRhGqUSten8tZwi0wWw9R%2FP7YHCzGFnruSeT5YRo3CEmS6dpWIqs7XxCwkoGe5Es93NyvxqItZFm0u3kJaEmjrmrzFjDtlSAPsUJNTJKq4Wwf5vzacRjSrh%2Btlh3kqAuGxPWW8%2BLFfyg9sYu46LrsKxTAQRSxB%2FsGfajpo8Xmn6RQKc6GsQFM1iSm5iy%2Bs9F56dx8%2F6jXXy8u1ChH%2Fo89mBtlT1xYTQxYnwANTZT60o1fZv%2B2i4OHDmcwEm7ckRoUbst4TtR8KEfDYk5soE5T3ahPFemLBo8B1VjXOVdPMI5G0RoNzaNBKxkgyOfROK1gKRs3lznAUCWKxPvAGB%2F8wo%2FXWlcPvUhEcSdyZKhy%2BkvG4D3BrIJdmw%2FzCV1ZfCBjqkAZYIhyzWLiIjBXCKw%2BPS1NkTWX0cXnGv0beURUkT58PC4U0FB3z5YvsXdmMnx1aYp55MQVkHjA5Vjc9xQjQFro14ix4AI1oCNljx9%2FuB%2F%2BUhe7%2BsBfJgxPBXYoFcQBfh9apuWM7IsBCqc%2BAtMa%2BnoDyMgGLusFFTDHxfYEsn3ogyyMZz2Ta4VlnO5K5h5y5LSPxdxLegO%2BDu7EOgkf22FXEJ8I%2Fd&X-Amz-Signature=7bc39762574329849a257a23da33c9dd787b4d6d0e5c5e57ac2ce546d7cf3abb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
