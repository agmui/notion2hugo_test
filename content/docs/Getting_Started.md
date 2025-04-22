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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMTN53K%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD8S368Q7sAuxGQHdGcJlxUHFsUOQYMIcakM%2FMDSczY9AIhAK4zFFvgBotJcojjhGotCQeLA9qyXF8D0AdsU%2F6orHVBKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBXkk7%2BtIMp0WTAq3APCTIIghWe7nJQOehf%2FyhNV4O5c%2FEcX5XCAQ4V0gL7zw44Alsou4S%2FkiOgfxTBuI3ofQLw1r2wyo7xiEYMgbQwkSNAtRSFtQ2AtqqTkqfqYDo%2F2YQi9dQB%2B7RGSOdUiX7QxCeKHW1d7PgnMaTn34GnRS%2Fc2uNEPCV88aemJlXEK15yAzy%2F0fpdnYJwflCNRIVRQaqC2TFdKuLy5eChaR3okMmZeBkE4Szxcr9fgLaIiNP8kBCQvuJQ1UMWdfF2EouEzKoBMnG%2B1D19vwV5qicESDTum2s5dPeM6wzFzlzrO22A9nU49JOO5v%2FpqbzNRESwDpKxNfQh62k8CBM5jW5vgIxI4S8CsR2uLEBOSY5i0onW1PyK2nmMpKS2P1LqVr1CpPP4zsOtouWWsq768Ibq8hNsCVxJWRricttVoQkEfaPPLTwEJKD%2Bj6F%2B4pkEchvYwEBuHXCsFcM0POrlruFmsVuocuaVR%2BIvUNvfvGoy%2Fqn9MBpu%2FhX2DfoMECOFs%2Btd7bT0yV1qrScommUHiqWC18aO4MuHKjnTJ1C6mYpL%2B1myY0E2ymaSGQ3BZiyv1oaJSz7nMxsGaHy6%2FOyWLQ5j%2Bxx%2B%2BrAGZIGEeqOua1DoWWv515qXaifQz3ZtRyzCeqp7ABjqkAR0ccfm9xUS%2BAqPR66hFIiGFiYqHx0Dmx3TSzP9cjERyPuKQw0rii3%2FF0C0YwmPPtDGYwKcJj%2BpVGgr2%2FVKkAN8CBwl371JbT5R0EO7mOixPKsd4LnZPlxJsGFS51m2IIevfquQ7Ntnlr0U5Lly%2Bwp2iFIJ0ahcGqiy83QZCWYeGtiWxz2mzBCSagdAF4aMSIheZncdZLG6fp2n8uTErWqxE%2FHTj&X-Amz-Signature=9041737ad5f5bb3a38502083e2d8911232a2b0123fa104fe588f4f5d4461308e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMTN53K%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD8S368Q7sAuxGQHdGcJlxUHFsUOQYMIcakM%2FMDSczY9AIhAK4zFFvgBotJcojjhGotCQeLA9qyXF8D0AdsU%2F6orHVBKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBXkk7%2BtIMp0WTAq3APCTIIghWe7nJQOehf%2FyhNV4O5c%2FEcX5XCAQ4V0gL7zw44Alsou4S%2FkiOgfxTBuI3ofQLw1r2wyo7xiEYMgbQwkSNAtRSFtQ2AtqqTkqfqYDo%2F2YQi9dQB%2B7RGSOdUiX7QxCeKHW1d7PgnMaTn34GnRS%2Fc2uNEPCV88aemJlXEK15yAzy%2F0fpdnYJwflCNRIVRQaqC2TFdKuLy5eChaR3okMmZeBkE4Szxcr9fgLaIiNP8kBCQvuJQ1UMWdfF2EouEzKoBMnG%2B1D19vwV5qicESDTum2s5dPeM6wzFzlzrO22A9nU49JOO5v%2FpqbzNRESwDpKxNfQh62k8CBM5jW5vgIxI4S8CsR2uLEBOSY5i0onW1PyK2nmMpKS2P1LqVr1CpPP4zsOtouWWsq768Ibq8hNsCVxJWRricttVoQkEfaPPLTwEJKD%2Bj6F%2B4pkEchvYwEBuHXCsFcM0POrlruFmsVuocuaVR%2BIvUNvfvGoy%2Fqn9MBpu%2FhX2DfoMECOFs%2Btd7bT0yV1qrScommUHiqWC18aO4MuHKjnTJ1C6mYpL%2B1myY0E2ymaSGQ3BZiyv1oaJSz7nMxsGaHy6%2FOyWLQ5j%2Bxx%2B%2BrAGZIGEeqOua1DoWWv515qXaifQz3ZtRyzCeqp7ABjqkAR0ccfm9xUS%2BAqPR66hFIiGFiYqHx0Dmx3TSzP9cjERyPuKQw0rii3%2FF0C0YwmPPtDGYwKcJj%2BpVGgr2%2FVKkAN8CBwl371JbT5R0EO7mOixPKsd4LnZPlxJsGFS51m2IIevfquQ7Ntnlr0U5Lly%2Bwp2iFIJ0ahcGqiy83QZCWYeGtiWxz2mzBCSagdAF4aMSIheZncdZLG6fp2n8uTErWqxE%2FHTj&X-Amz-Signature=4b6d356a5883174659a387496e771cde2823214f310eba6e43be41aa28128928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J5GXILN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG%2BIICt19uHLmmkGLCbrbo706bE3xjsqaW7OpgJLpkIIAiEApz%2BccODw3bldr0a2xUjX7n9KGBfFFcWjBhf4AAHLIOcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2BoH4vynMY3EB6QCrcA3jbE0szrj4KUfhvXhTrwfXrwKWuuE4n5nWkPkbpHq9uEI%2F%2B9J06tRLQlMXwr4JmTuh%2Bi%2F4vm0ibRLpML9WQ4RD%2FQ1M9kCBEEBBjwtxzDM%2FHKoKk3PfIm2PFWGaqjBJLofO84Bvfn%2Bj79r9yQKWbGT5DJPg4LNhkj1STzueffFI4pPYv3M3bpZFo1DgWNTREqizTTX3JypUz7z9gyUwymvz9YDCZFKgoAuzx1gGP%2Bln0QE0Zwiz%2FD9wQEeqfZIZESlm3Pl7if8m1qWTsatPjlBY5X7F0vyZ1aEQaHQlRLvxvFgnwkYkdx%2BEgxavxuEKL5rg3GC55rOqwkF8Sk1sfat%2B%2F5nde63UebfWO0%2BxCKDSZ27n%2BnpijpvRQ2EdaNSZizVh42oRbmOybH2LNRdb7gIgjfTPVJ%2BYxDdqhhheune7RucgI5z9QNr3NROaitRTSiu2cj37W3jnK%2BE75DewyVeRBDllkA4EkWeWjVBUUAAFU0NwsnZbWEpUIMQJCUmIkbpxFijOWZxgSx6l4%2FigftM3CHriDd3yhXTkhzbhKJetr5TEnusK8UOF5rFdkJyv7D0yTFMw5h%2F6Jqx7qVifoj8hx5rGKgdgSvGZQbUKRfKkMc50l2dPdZnJ2vPB3MKOqnsAGOqUBVPr3qC9NWqPYrZx2M6kVKpCabh%2FWdZzCbcr47vP2rn%2FKzO5%2BG1MnXUHRUPVXm1I6ykNJDhlBWEdc2jMsyop8LnBoJfcdU3kfgSb59tKCRvJoj7TQ7j2km3%2B%2Fh2jXKUwwh%2BjJwWfaKOigmb%2FbDktAGVcXy5u91JIiZcSP1O2s7thouYWFRL0fCZ%2FBGDvveHCfIPzgvpg%2FxdY3kGRrVAGHlFoJRysF&X-Amz-Signature=b893a4d1d7fc7b3a625e3e35de28713a65ad738401258ab285c9d23e30966190&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDK4362%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCKGf%2BSmQB8PXk24jxM71YAVw4vi4nO47jiSLq59XxspgIhAIFcbGN%2BmD0IBNViJdSg3M8hQA8dCR0L25qlkdu7YYYVKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADhYZjLbPMz0pPHUq3AMqHOWukAphQIFyBIpODKTkUPtOQCExg7AxP%2BYG1N8oYgJj18fSDnKCHMKT3h0HuKjZPys4ZNnDYwL%2F2MwkdVmr8rpKccmgZ6BkLKACh7adMBAqCcvDS3AHK7RolFgyk7iI6wK4MNz1dGSzaje7M6qezwRY1lCd7BZdlzp%2FE%2BZt6XiN2M66sTRP8Lb9bimH0QxccArcmuLoWotQtVPV63Brxgnb0RTFF6eL7Ngn7Q%2F0WUbBiz9HQEgGPTd5lhNxM%2BmPzobBTRuNFcgVIQtMfpprJiYkBSZlMBaXZeZ0udlo7KCDDZDPymnJa4DPkmQF4uuKzAzkoOD4jL6WMibb2J2mknOteEgJoO7vl9B%2B8un0BC8RF9RJUhG3PWBenpRGGXhcDMqFoj0lC5d%2Fnr2y0ykI8ySwFGad0WBzIcXOLjEBV6d3k63O8WbWVAAFiFor4yaie21s4NH1yYsucKBU5psYejMV7fJNCf5AQu2pgCU3cXb0%2BysOOlgDwMtiGsHSX8Iy07zWDyTnO2M5YMUv3RwUHh0by25Slv2NNLoGg6FKVOt5CMsSov%2BaDK1Elf1h8eFrK1mUIcQLsapdKiO2uxhBFxHw5lbNKZrD5IvzNTB4TbvHHbj06LovJ4qu7zD3xJ7ABjqkAZkdpNHKKckxP5YKcOufIHe8CaI15GaYmtl2yYiNJuyDITlF%2BZ1ZvN9E2RUnFExWLheqlL3b0rw13h69F%2Fg5HLqBAjIk8MOul5y1%2BE0O6pWQ%2FGZkl6C20SoH8Lthora7PF3VrK3W68SYcKN3WXcuvy3nlIUH%2BRe8mDQXEKjgsQElEzVvjHuzcZaUWx6t7v92hmPzDHr7BVw606mqdBPF0gimPtQk&X-Amz-Signature=9442daf27bd00f0b2138455af34c684f64d588dbd44108a4a2e2855bc7ebc116&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMTN53K%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD8S368Q7sAuxGQHdGcJlxUHFsUOQYMIcakM%2FMDSczY9AIhAK4zFFvgBotJcojjhGotCQeLA9qyXF8D0AdsU%2F6orHVBKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBXkk7%2BtIMp0WTAq3APCTIIghWe7nJQOehf%2FyhNV4O5c%2FEcX5XCAQ4V0gL7zw44Alsou4S%2FkiOgfxTBuI3ofQLw1r2wyo7xiEYMgbQwkSNAtRSFtQ2AtqqTkqfqYDo%2F2YQi9dQB%2B7RGSOdUiX7QxCeKHW1d7PgnMaTn34GnRS%2Fc2uNEPCV88aemJlXEK15yAzy%2F0fpdnYJwflCNRIVRQaqC2TFdKuLy5eChaR3okMmZeBkE4Szxcr9fgLaIiNP8kBCQvuJQ1UMWdfF2EouEzKoBMnG%2B1D19vwV5qicESDTum2s5dPeM6wzFzlzrO22A9nU49JOO5v%2FpqbzNRESwDpKxNfQh62k8CBM5jW5vgIxI4S8CsR2uLEBOSY5i0onW1PyK2nmMpKS2P1LqVr1CpPP4zsOtouWWsq768Ibq8hNsCVxJWRricttVoQkEfaPPLTwEJKD%2Bj6F%2B4pkEchvYwEBuHXCsFcM0POrlruFmsVuocuaVR%2BIvUNvfvGoy%2Fqn9MBpu%2FhX2DfoMECOFs%2Btd7bT0yV1qrScommUHiqWC18aO4MuHKjnTJ1C6mYpL%2B1myY0E2ymaSGQ3BZiyv1oaJSz7nMxsGaHy6%2FOyWLQ5j%2Bxx%2B%2BrAGZIGEeqOua1DoWWv515qXaifQz3ZtRyzCeqp7ABjqkAR0ccfm9xUS%2BAqPR66hFIiGFiYqHx0Dmx3TSzP9cjERyPuKQw0rii3%2FF0C0YwmPPtDGYwKcJj%2BpVGgr2%2FVKkAN8CBwl371JbT5R0EO7mOixPKsd4LnZPlxJsGFS51m2IIevfquQ7Ntnlr0U5Lly%2Bwp2iFIJ0ahcGqiy83QZCWYeGtiWxz2mzBCSagdAF4aMSIheZncdZLG6fp2n8uTErWqxE%2FHTj&X-Amz-Signature=6ceb3741856db5166552ddbfb4064a04ac8c0329d80c2d7866b6f46ea8398668&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
