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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHYQBDY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVTg2%2FScJKkl033d76X6ztOV7B1cAwwGpcxINY1K53QIhAKZzUyEq1mxqJUZ9L4M9LxCK2wE%2FV%2BZKLG%2FtO1ZXXQD7KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykJ4i6FkLPLUR5NLAq3APELOHoxOQLtGsJ5U0GuwSk%2BybICxW86CoGjSp90q%2FgvZ8vNaphBKEK1jVCdX%2Bq%2BBuTDjEXwl%2BJkrixb%2FI8ZstJQYbl%2BMSyEZI1JL6qBdKOmWvxdADitjsm41nWCKCUTRBgVvVPfxnMWWcUiB4F0IZQtoTpueCXnyEfsFA8XvFHARG%2F20136L68Rl%2F2CpmzwZBJ0eMcCtrQI5nBHPzxSTVpxTtAcaYbMmxNf6OxbVwT%2FdPkbUAGxA%2Bp2BybtT4z05LkFh74OOxOzcqbEBkWES92svI1hK4pOZLnsBlBbM0nJzeFFqNwKqBN%2BivOIuqr1XyVjKyXUZ0P6e10P8ZGKj%2FBNiPLCsFqHFk3rUHPsLkNJ6nb2N1HJkLWTetJgv4stxkfKGFzL8wg90qmcM4IEHxk%2FRhO3pB%2BYj4h4dkUNO6tLCetQvW%2Fm5Xjnlnk5pGpza3r0hcy8lPnbXxE0UXeOR7mr%2FqBfvtKOINOI39ZP5sbgn%2FFQzNbtUzdjrcmNWJFXou%2ByliAncm5hW4WcDRfj2WxL1bOKe5O1lXikIwgmCe7Nuvm7dF%2FoKj5IS9bVaeDrXdJOUWcGn2g5Es8BS%2BMz4c4M%2FVtnckrPQzvp%2BK4IC4%2BLV%2BmZVZ%2FJAK9A6ShEDDS6q3EBjqkAVpxilf6ItRpuUuVUAYZgJtVtPdDrS3GWRQZkBq3A8yCPNOPC3EvhKkIZ%2FtAm9l3hv4XO9NdaWZCYBeEFDbIu6eGfukEAFPcDud9ZbFwZCqH1E%2BAe%2Bd6VUOO3nFlDWP3NUDMx5cN%2ByrjPE03pQMhLSiW1bjo94nXNerOxRbYgmtvOQTt1Xm25XmBwtHuICcwoUytgkEEHjCOxTssyZaDK6u%2BSZ%2Bw&X-Amz-Signature=5e98b747416337ef09fda94d82689919a47e03ac643e4a9f174f8d1404111740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHYQBDY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVTg2%2FScJKkl033d76X6ztOV7B1cAwwGpcxINY1K53QIhAKZzUyEq1mxqJUZ9L4M9LxCK2wE%2FV%2BZKLG%2FtO1ZXXQD7KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykJ4i6FkLPLUR5NLAq3APELOHoxOQLtGsJ5U0GuwSk%2BybICxW86CoGjSp90q%2FgvZ8vNaphBKEK1jVCdX%2Bq%2BBuTDjEXwl%2BJkrixb%2FI8ZstJQYbl%2BMSyEZI1JL6qBdKOmWvxdADitjsm41nWCKCUTRBgVvVPfxnMWWcUiB4F0IZQtoTpueCXnyEfsFA8XvFHARG%2F20136L68Rl%2F2CpmzwZBJ0eMcCtrQI5nBHPzxSTVpxTtAcaYbMmxNf6OxbVwT%2FdPkbUAGxA%2Bp2BybtT4z05LkFh74OOxOzcqbEBkWES92svI1hK4pOZLnsBlBbM0nJzeFFqNwKqBN%2BivOIuqr1XyVjKyXUZ0P6e10P8ZGKj%2FBNiPLCsFqHFk3rUHPsLkNJ6nb2N1HJkLWTetJgv4stxkfKGFzL8wg90qmcM4IEHxk%2FRhO3pB%2BYj4h4dkUNO6tLCetQvW%2Fm5Xjnlnk5pGpza3r0hcy8lPnbXxE0UXeOR7mr%2FqBfvtKOINOI39ZP5sbgn%2FFQzNbtUzdjrcmNWJFXou%2ByliAncm5hW4WcDRfj2WxL1bOKe5O1lXikIwgmCe7Nuvm7dF%2FoKj5IS9bVaeDrXdJOUWcGn2g5Es8BS%2BMz4c4M%2FVtnckrPQzvp%2BK4IC4%2BLV%2BmZVZ%2FJAK9A6ShEDDS6q3EBjqkAVpxilf6ItRpuUuVUAYZgJtVtPdDrS3GWRQZkBq3A8yCPNOPC3EvhKkIZ%2FtAm9l3hv4XO9NdaWZCYBeEFDbIu6eGfukEAFPcDud9ZbFwZCqH1E%2BAe%2Bd6VUOO3nFlDWP3NUDMx5cN%2ByrjPE03pQMhLSiW1bjo94nXNerOxRbYgmtvOQTt1Xm25XmBwtHuICcwoUytgkEEHjCOxTssyZaDK6u%2BSZ%2Bw&X-Amz-Signature=6d1e222bf5040336fb39ac494d3ddb7e50708acc8d7dd15c4a5bd2e3bcd89158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHYQBDY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVTg2%2FScJKkl033d76X6ztOV7B1cAwwGpcxINY1K53QIhAKZzUyEq1mxqJUZ9L4M9LxCK2wE%2FV%2BZKLG%2FtO1ZXXQD7KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykJ4i6FkLPLUR5NLAq3APELOHoxOQLtGsJ5U0GuwSk%2BybICxW86CoGjSp90q%2FgvZ8vNaphBKEK1jVCdX%2Bq%2BBuTDjEXwl%2BJkrixb%2FI8ZstJQYbl%2BMSyEZI1JL6qBdKOmWvxdADitjsm41nWCKCUTRBgVvVPfxnMWWcUiB4F0IZQtoTpueCXnyEfsFA8XvFHARG%2F20136L68Rl%2F2CpmzwZBJ0eMcCtrQI5nBHPzxSTVpxTtAcaYbMmxNf6OxbVwT%2FdPkbUAGxA%2Bp2BybtT4z05LkFh74OOxOzcqbEBkWES92svI1hK4pOZLnsBlBbM0nJzeFFqNwKqBN%2BivOIuqr1XyVjKyXUZ0P6e10P8ZGKj%2FBNiPLCsFqHFk3rUHPsLkNJ6nb2N1HJkLWTetJgv4stxkfKGFzL8wg90qmcM4IEHxk%2FRhO3pB%2BYj4h4dkUNO6tLCetQvW%2Fm5Xjnlnk5pGpza3r0hcy8lPnbXxE0UXeOR7mr%2FqBfvtKOINOI39ZP5sbgn%2FFQzNbtUzdjrcmNWJFXou%2ByliAncm5hW4WcDRfj2WxL1bOKe5O1lXikIwgmCe7Nuvm7dF%2FoKj5IS9bVaeDrXdJOUWcGn2g5Es8BS%2BMz4c4M%2FVtnckrPQzvp%2BK4IC4%2BLV%2BmZVZ%2FJAK9A6ShEDDS6q3EBjqkAVpxilf6ItRpuUuVUAYZgJtVtPdDrS3GWRQZkBq3A8yCPNOPC3EvhKkIZ%2FtAm9l3hv4XO9NdaWZCYBeEFDbIu6eGfukEAFPcDud9ZbFwZCqH1E%2BAe%2Bd6VUOO3nFlDWP3NUDMx5cN%2ByrjPE03pQMhLSiW1bjo94nXNerOxRbYgmtvOQTt1Xm25XmBwtHuICcwoUytgkEEHjCOxTssyZaDK6u%2BSZ%2Bw&X-Amz-Signature=8d544088605fc03eb80e6e7531aef1bc10134e1c92941039effe1faddb27fd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMZEHIC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUSYlcmLm4%2B%2B1bICrPE720GcOPBKGYN1PEVjI4tlvOAiEAxhwc1IchleYrc0zM7QI7HNyOv7Wb7Xh1sSnlbwm535sqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5g3sb1qPIhXf4jiSrcA73aVY1f5hPAiyjxznFDTNujQd2NTgJavYBGCDzxXafweKOstvSRw%2Fe6%2FHwgKSxTMHFluTXh1X6lJclHThDQXg%2BdN%2F1658w6sQ45rFiqWZNfmu1IIh5gFwEueps3RtFBwreRVKyZJJzghTS8lJ0ihTk2ciOTl%2FFcpLcN33qtenLhoLUyncWGsKCEm6DmUYAJ8xe%2BBHrKpdPTZ3YRDsR5Xk1uKvwLRBsjzaWiEoCUox6jOoY6WYeoVyNi%2Bgv%2F0zvlUiNXPilZrDyy73CRuhqVs2dTbNAA0iYhioT5zpaUSkLQ%2FmqNRBFDxqY3gRsiOEOahUFExhY6Ew%2BYBqTLpw5MBIzzbyxghu3ZiNAgyJbdXEjmryAnHFp7pHpIR7Mnwlcs1IYKYameVFz5ObTqLxeQMYq7qHPkdFSDQtG1goqYOvQI0lu0juIKtH7uD8bPRC4%2FsGJ2av65mH8x8P27HfqlH2w5WE0KdWIkhAjSHrsNuyzwRhWuUZ0XhTgHIVUoBmMU3QNX3W36Bht2Uk3aJEiBwtyoXuFZXup6jmAUhTHpcf1HXMvLeFvm12V5fSiYMIdMl5kT4Cs6N4x3hrSJrto1uSVgo5ixbXS9bisIJZscY%2FCUei7vgCj9q7dWskMaMNHqrcQGOqUBXva4KIgMQF40A%2F6JiDr5hglFD2G1%2FrU%2BzmU0GzavUcitAuzYlBIoZfjP5vOuRjBij3ArdhI6%2FizBb5HcWuoIVU0kiqNTIHUlXh5cRELJeKL%2FAoePMY%2Fiz9hRZyFrHfIJtYDLtL5wbCCesy0IdIqnvmyChvqzW0hrbRi88bDsqF%2F8ae4DOdQwN6tG1Ro7xmKBHkz2k1DrL41az%2FD7X75iCaSpBFvP&X-Amz-Signature=b1c188ab8fd857ce80837df34caf73568cacc111b00b4af9f28bebe954476ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WWXVR2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUH0M%2BthUjg9GVn91u6DGruddhHKE2YrGPYAx68gi5ZQIhAMjKHxnd%2BxjL1l9U2F0SNJ0a%2FAWMI2rEIwziC8JLfNEDKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3wnD6nKjromT0jQq3AOlPp%2Bv5BXUdHOJjDqoiCyVGOI3%2BqMnzJ3qaO9EhSHG67UsqMcECRR0Iw5CBNDUNLHBG6WRAPcOW6IkxSaYgl83B%2FFGT3aNgBCQ2z7TQWBkEIJkdnJVndduuTjYQWcHG9A6pP1QGFhx5d1f4SLELgiagjfVYP2kE2Ohk0NegUz3%2FVR%2Bl9CYX8yJdc%2FhYIzE%2F2HXNvST%2FnPmJCSMSMPsPxwDaHPBJGZ91ldShJhVAdVkW0N4B%2F3DA1ciAofJ60hENGICQt%2Bu6lUH8FkiJ7pIVksiQI7Ov3T%2FVTcU1y5k%2BngrF6vB%2BiTXNgy%2F0MeXiC%2FM21qtWmOFONa8ymQ87ZOJckqkF1o1YVTTOnPfA0VmAmTSkQbnU1r32o5oedlvFrSaAT2ImciAFWy0VwSQjKPyaYggPVOBfhsLHMvdXX22K6yFE3Lt7mjqssMwUCIK33K1E4WG1N3fWhHgJ0J3EChx6PAydJCBFELcFYUe8mqGYMtpO47aJIXIsVvsXpYeHR8ZO8SRuYzI5bMTT1XiOd7q6UuIwMfEv8A%2F8KnEife5WvDAh6%2B7%2FQgIKZQpcBdmc1bXGAFgt9WOx%2FmRn86hGGJb9r2euS%2BCMUC6aOo4028ZMuIHc76S9MeqCjBkG2lTZTCk6q3EBjqkAc1zrH2JQEfqP1Nqf43j6S0fAWc98uqfI%2FgP7VOQh7IY5bBE3fGmDZYyOOOjL%2FUB7IfSSuKY6zYDFI2oO5YwEnasRE8O5l0zFx5yY7wL8%2BrMsEGshtfg2VIRDnL%2FVd4%2B6%2Bp5UXR%2BH9k0UAorvX4K7DEpFXF9POBbm7RogtZvFux8HOUs78DxaqwPJld1dboINNZkQsxfmh69Gb1BDD7Q7hSIptgA&X-Amz-Signature=4171cfd4a0df4c7a713a7dfccb83292fb73f9c4b420a36bedf0d97721d23206e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHYQBDY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVTg2%2FScJKkl033d76X6ztOV7B1cAwwGpcxINY1K53QIhAKZzUyEq1mxqJUZ9L4M9LxCK2wE%2FV%2BZKLG%2FtO1ZXXQD7KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykJ4i6FkLPLUR5NLAq3APELOHoxOQLtGsJ5U0GuwSk%2BybICxW86CoGjSp90q%2FgvZ8vNaphBKEK1jVCdX%2Bq%2BBuTDjEXwl%2BJkrixb%2FI8ZstJQYbl%2BMSyEZI1JL6qBdKOmWvxdADitjsm41nWCKCUTRBgVvVPfxnMWWcUiB4F0IZQtoTpueCXnyEfsFA8XvFHARG%2F20136L68Rl%2F2CpmzwZBJ0eMcCtrQI5nBHPzxSTVpxTtAcaYbMmxNf6OxbVwT%2FdPkbUAGxA%2Bp2BybtT4z05LkFh74OOxOzcqbEBkWES92svI1hK4pOZLnsBlBbM0nJzeFFqNwKqBN%2BivOIuqr1XyVjKyXUZ0P6e10P8ZGKj%2FBNiPLCsFqHFk3rUHPsLkNJ6nb2N1HJkLWTetJgv4stxkfKGFzL8wg90qmcM4IEHxk%2FRhO3pB%2BYj4h4dkUNO6tLCetQvW%2Fm5Xjnlnk5pGpza3r0hcy8lPnbXxE0UXeOR7mr%2FqBfvtKOINOI39ZP5sbgn%2FFQzNbtUzdjrcmNWJFXou%2ByliAncm5hW4WcDRfj2WxL1bOKe5O1lXikIwgmCe7Nuvm7dF%2FoKj5IS9bVaeDrXdJOUWcGn2g5Es8BS%2BMz4c4M%2FVtnckrPQzvp%2BK4IC4%2BLV%2BmZVZ%2FJAK9A6ShEDDS6q3EBjqkAVpxilf6ItRpuUuVUAYZgJtVtPdDrS3GWRQZkBq3A8yCPNOPC3EvhKkIZ%2FtAm9l3hv4XO9NdaWZCYBeEFDbIu6eGfukEAFPcDud9ZbFwZCqH1E%2BAe%2Bd6VUOO3nFlDWP3NUDMx5cN%2ByrjPE03pQMhLSiW1bjo94nXNerOxRbYgmtvOQTt1Xm25XmBwtHuICcwoUytgkEEHjCOxTssyZaDK6u%2BSZ%2Bw&X-Amz-Signature=152d43a28a274ad6884672c516e9b5421f596417b143bde1595e69178d26e231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
