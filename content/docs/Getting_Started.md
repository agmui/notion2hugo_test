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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4DTDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAkR%2FrkoZG0UJzlJL7sVq68aafvKOfK9Qq7FZbFkVNSAiB7%2BeE3RJNvajHV%2BWRnqrSSST7g8Wp3ccV%2FQ2K8GSsWhCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM5tsmyjfhgywkb0n8KtwDrsDVDdeEJDJJRTuuOrXWMnnIqZDb2f1uIN%2BrbwBldpDufBpIy2jN60ozsuPOHDNZjsRHEGmZUPCSwHfTauDCLgwmwwNHxOXRCeLfqJXfw0f0AbbGC5w2zhzwzhOsssJa25J%2FHmVG4lA6IpVHMCrIeq6Ax%2BYUJ0vAwVAkHM1PjDxhR%2BWmWSGfDKU2bI8n%2Fx5j9NqP%2FBf%2FelSEdiD5hmoaIOnUMyTa4q6GO6u9esrUE%2B54aL8mUN8vVDKnJIINm30H%2FCs7BGI6mmF7H5U1Be67IILdWo2j%2BZSSc4SJw%2FvH%2FfVW%2F5Qy928YyHImkyPpmgMUnJlv8t6HOSFT8D1%2BzUqmtgs5bl%2BcoJik9z%2BOulZkQw1aNYouHybBukIXd7INe7ywqQHNLEkr317CJutry9qto%2BGuUAW8w5sQzAJwU8KPrK3ef7QLMsLwF9ZlB70BYPiuCm11JKmaAwYnNNPvA6f5kSr2tGVENvwUKgAtHVcO0YTMzfGhM3wiz56vD0Wv7DdYYKiFMi2MLOWpt24y%2F67oqj97NJk2s0nn%2BwWDdluXPTZLx2URZBZf%2FfZFr3cRfNKKddOpEHxhjgqtknvS5M51PDOO5B2O4PP0hIP1wnTghYDGXz7%2Bz0HMc8J%2FpeIw%2B4r5vwY6pgGWvXTfT5Qd5vCoffdhx7ovbgOKugYg62S0ehbCIS2Mxq4Qu%2Fqx6qe3XX%2B098aVCwTK0weOG75JVgHG6Vu%2B9zD4gxAZEu19zP2AJVxR1hQQgUrM1Pdr3%2Fuo1oAuxpsjijQTGwMTH8VSxbXe8oIEtDS6NPoIZz8hL%2B8MdbklC%2BnjowKeuR8Db98P3Q%2F90BgspJPht3BY6%2BKu4OLmz4%2FyLIX1A63ywhXY&X-Amz-Signature=839b596e19cdec778a1dc930ca0c810f35a6991dd7f2daa1ef6242ffaadb5513&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4DTDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAkR%2FrkoZG0UJzlJL7sVq68aafvKOfK9Qq7FZbFkVNSAiB7%2BeE3RJNvajHV%2BWRnqrSSST7g8Wp3ccV%2FQ2K8GSsWhCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM5tsmyjfhgywkb0n8KtwDrsDVDdeEJDJJRTuuOrXWMnnIqZDb2f1uIN%2BrbwBldpDufBpIy2jN60ozsuPOHDNZjsRHEGmZUPCSwHfTauDCLgwmwwNHxOXRCeLfqJXfw0f0AbbGC5w2zhzwzhOsssJa25J%2FHmVG4lA6IpVHMCrIeq6Ax%2BYUJ0vAwVAkHM1PjDxhR%2BWmWSGfDKU2bI8n%2Fx5j9NqP%2FBf%2FelSEdiD5hmoaIOnUMyTa4q6GO6u9esrUE%2B54aL8mUN8vVDKnJIINm30H%2FCs7BGI6mmF7H5U1Be67IILdWo2j%2BZSSc4SJw%2FvH%2FfVW%2F5Qy928YyHImkyPpmgMUnJlv8t6HOSFT8D1%2BzUqmtgs5bl%2BcoJik9z%2BOulZkQw1aNYouHybBukIXd7INe7ywqQHNLEkr317CJutry9qto%2BGuUAW8w5sQzAJwU8KPrK3ef7QLMsLwF9ZlB70BYPiuCm11JKmaAwYnNNPvA6f5kSr2tGVENvwUKgAtHVcO0YTMzfGhM3wiz56vD0Wv7DdYYKiFMi2MLOWpt24y%2F67oqj97NJk2s0nn%2BwWDdluXPTZLx2URZBZf%2FfZFr3cRfNKKddOpEHxhjgqtknvS5M51PDOO5B2O4PP0hIP1wnTghYDGXz7%2Bz0HMc8J%2FpeIw%2B4r5vwY6pgGWvXTfT5Qd5vCoffdhx7ovbgOKugYg62S0ehbCIS2Mxq4Qu%2Fqx6qe3XX%2B098aVCwTK0weOG75JVgHG6Vu%2B9zD4gxAZEu19zP2AJVxR1hQQgUrM1Pdr3%2Fuo1oAuxpsjijQTGwMTH8VSxbXe8oIEtDS6NPoIZz8hL%2B8MdbklC%2BnjowKeuR8Db98P3Q%2F90BgspJPht3BY6%2BKu4OLmz4%2FyLIX1A63ywhXY&X-Amz-Signature=64ac4cd788202b395374a019f8e2157428996124678c01679d1314cfedc0a772&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQWYQT4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjRXwxUSroFWQ9MS9HriZm%2FSCXz85dIL3W0HX9aP%2BelwIgEChuGUBWHOpNMHMb3Pv20Hueb4unU7D0cAIsxGW8Okkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCsptrMFUQEVqTVW%2ByrcAwJp7zPc3eI8ruJjrDJgI%2FLg%2FVeIg69qHEVjmrlQldVgmUpfOBoW%2B%2FjDUV6TDeya%2F8Tel6KXGuoM7xZ8Qljit0yKGCyPtAjxGZFQ7Cg%2BGYp3IXBuJp5FjaaAbHwuAGsFDnuiy3ZaT4IPLXN6uSiIKGG5qr%2Bn1dGrZ5ZUXwmk409vp2sQ20%2BbgeNkdqgKZYmZzCIzaYNCH4qoKqOlNgX4TPZAa9RyUlMtuEdp%2BDA48w%2FGkkOJ4UogkSyjd0Qxv%2FRTugbTo7UGkZ7dGGSlC9vMylPf0MTP6UFSAPq5%2FlM2S740Zg%2FKSz5uLqncuT5rmgod9rwOlhx9cIzl%2BTlMLYY%2FE6rjGZJAkCSRci5aj4fhq3NaJUV6BuUaK%2F1deNsO0dmTRYC4BRn2ignukWCLlww6ybgQHHKELT3Za0EdE0gUbLc4eYsIDIm3b%2Beg3Cgz1uaXnw%2BhhUGMvvepBGrMV09f0wRpPVYkiW1fZTqir6%2FYSrAn6lwuWSZ19Rrs3ovV662s65nP%2FIwX1%2BU9vw4wCthuXH0yTesq7ufN%2FvACRYB42D%2Fn%2Fl1Azlf2%2BfhkV5PX4Owo65Rw%2BFCinW1YqareKkub5O8C%2F3YJfya7xrf2LUV3%2BRaX1V6998g6J9fgbsECMJyL%2Bb8GOqUBJDsq1gwYhEFC7pOiGT3M5TvpRlqND6BE3pauR03Jt70Kel3r2GBocPhbZnZ6cDl2%2FNrqxU5J86S6ND%2FM0wwju%2BUyHTRwPrsVue0BJLXcTDYg3yY3SbY%2Fa7j%2Fkohhp4EOa6T6d1jI7ccrZP8xLAlNuNpq5Ou6NYKnr%2BdduKIElEEuzhPBxWPy0hDBRFYx8xDLIQSGwD3N0Z3dIFj%2B1p9EHNAkEiBj&X-Amz-Signature=4e2ff6e37039e0c5635167cbe88b4e54eaf444c84c5bf1e542980a82ec7b28a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSWKLUX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHk2eK81L6NbOvQmt%2FRSF8MzLpsOafp8AN%2BGrV1ZHnbwIhAI%2BS3Kb2gCmNmqVqdi%2BqFd9jZ4lGqN4It5FmMmx%2FOPcKKv8DCC0QABoMNjM3NDIzMTgzODA1IgxtEvnz6IEp9%2F4eQOUq3APrkIczNfN9dPO8FConMxU8Nk%2BR3PSMw5i3EtRujvB9GQ4Cv0XB2BQ1xLi3BwypyOTYnmMzIGLZh%2FuW1t3Ec6%2F4d3gwU6twfHoTU8Fp3TyhZmf8ayoHaQ5f%2Fgq5eCpC4PC0gjoyvy9iIyKi4vEP3gUkLoTnTr84s74WuDRjuBbSALT6ucwN8sKVsAbsAgGlpXqQ7Fipv7zg%2F80XTy%2BtENnv0eb0JtQsieZTquz8KgUrCgA%2B4XbXiwFtlWk34kqm%2FhBpqnfFy5k4wEg97ZhBaI9EbKxbbpD%2BxniCWZVZEKnYUCnk2xC2n7xrlmJvpcUFwqMKWe3DnqWmsuRKUzkst%2BwlcSSLoTNpIuPv2QS5s6IOlSAvLTAkRa11eK49desDMyn8vLLRSeMHsbqwjSGNE15mUX7AeL1dPlvpmkq9tTe7CUscLW4U%2FkqjoxtAlTgYwwdyEszZ2n%2B4NxktctiNNj8Z9alrSLQpRoCS2QigW3by1DCwilFzHg44BadkIj2wMh3TgqKLAHQWptzmPIdVj4LMNKPUfnRbWwwxsce0iGUG%2Bpo5FMY2bLYb7AOpai3x2VvaW3l13eh0BExONMcX7sGtXToyQ5aczccBcR3X7Hgr%2BsHo1PPCKJy5t%2BEbXTD8ivm%2FBjqkAeP3Hsq2CIhobby2gnk2g6AaE%2F14zSUaLQQMSNNwspOpunTu2t5iuL1alH0222%2B9waT3ltDBBVcdy0v0m4eRx%2Fql2lOIzcxV0GVkzocBQ5%2FX5yj5vj4dXZm3tvxpWyKcbMdNqJYU0YJJtvOqMiR7E3CwZXxM8D7%2Bbte%2Fbm48oas%2BUlDG%2BCGxS3%2FTRL25R2rVATUsZ5mBeMKy7M3isPLN2B9BI%2Fnu&X-Amz-Signature=7c08920f4e3e7b10857b7fc33b75227a855a2a2dd7f31dec2f6b1dd6516bacc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4DTDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAkR%2FrkoZG0UJzlJL7sVq68aafvKOfK9Qq7FZbFkVNSAiB7%2BeE3RJNvajHV%2BWRnqrSSST7g8Wp3ccV%2FQ2K8GSsWhCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM5tsmyjfhgywkb0n8KtwDrsDVDdeEJDJJRTuuOrXWMnnIqZDb2f1uIN%2BrbwBldpDufBpIy2jN60ozsuPOHDNZjsRHEGmZUPCSwHfTauDCLgwmwwNHxOXRCeLfqJXfw0f0AbbGC5w2zhzwzhOsssJa25J%2FHmVG4lA6IpVHMCrIeq6Ax%2BYUJ0vAwVAkHM1PjDxhR%2BWmWSGfDKU2bI8n%2Fx5j9NqP%2FBf%2FelSEdiD5hmoaIOnUMyTa4q6GO6u9esrUE%2B54aL8mUN8vVDKnJIINm30H%2FCs7BGI6mmF7H5U1Be67IILdWo2j%2BZSSc4SJw%2FvH%2FfVW%2F5Qy928YyHImkyPpmgMUnJlv8t6HOSFT8D1%2BzUqmtgs5bl%2BcoJik9z%2BOulZkQw1aNYouHybBukIXd7INe7ywqQHNLEkr317CJutry9qto%2BGuUAW8w5sQzAJwU8KPrK3ef7QLMsLwF9ZlB70BYPiuCm11JKmaAwYnNNPvA6f5kSr2tGVENvwUKgAtHVcO0YTMzfGhM3wiz56vD0Wv7DdYYKiFMi2MLOWpt24y%2F67oqj97NJk2s0nn%2BwWDdluXPTZLx2URZBZf%2FfZFr3cRfNKKddOpEHxhjgqtknvS5M51PDOO5B2O4PP0hIP1wnTghYDGXz7%2Bz0HMc8J%2FpeIw%2B4r5vwY6pgGWvXTfT5Qd5vCoffdhx7ovbgOKugYg62S0ehbCIS2Mxq4Qu%2Fqx6qe3XX%2B098aVCwTK0weOG75JVgHG6Vu%2B9zD4gxAZEu19zP2AJVxR1hQQgUrM1Pdr3%2Fuo1oAuxpsjijQTGwMTH8VSxbXe8oIEtDS6NPoIZz8hL%2B8MdbklC%2BnjowKeuR8Db98P3Q%2F90BgspJPht3BY6%2BKu4OLmz4%2FyLIX1A63ywhXY&X-Amz-Signature=33add2c84f2a5822c8f5c540feee1644e232252481a8277c486f72437c313bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
