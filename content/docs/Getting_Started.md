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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFYURD7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI%2Bp5ITAA1kxsFwpYLjAl56gE%2FJyGs4vIFGJ7BweYDuAiEA3584b1jqgmrTKLCryYyGk%2BJDXOv%2BjJNv2QSWDjCiAhUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBQTdACg8PUoAYIEwSrcA8dPzZ2Spyl7uGqM59i9IgBbNefC02tHEwt6nYM1p2JDzfPjI1OUagnlnOOmpPnLxMv6v9LpblpWr%2FEu5fz0CDIBXNGAnmbCboHRxgTDT9TSPb8i8lRtoACP312GyvtobRnFhJs%2F9%2Fj1r7ns6%2F0EBBAeV70UDvVefDvtcm3c3j%2FDzWUTSBQ%2B4u0VvfgcWR0kZnPOOqMx%2BGWINWKU7%2FiYEpq%2Bj2uREXiJgQOJUXXOQP7ozKPoBKvkh8BGjr7PxI52EWm7PTsl2%2Bp%2FCWj9rMqxGCpDH7%2BG%2FeAY49KUWUBeYdAGJSmARGeFuGHZvMjWq6yTksM5XN3IwdLz5V3TkqDHb2r7dUX%2BBPfmq2wBCr5ztZJMP4UNr8t4MSTXEfCENdZqw3bdFoonTIjYkw0imHgFfkwMD3i8wxm%2Bvzu2hzzduCdSKBADyPrE9mj7S6sddTtIMMET8fCyUaeeAUUWDh87L6my95SAY2R536a13X5rQ6PKaiyPvW17gebQr6cHhZwnMa3e2G2V9Hxft6Xq%2FDtrs2sJFygUYYv0uK3oNNZhw8iWwkuwrJtJRl0qJIPLuHBPYZL3aIZ6Prm7gp%2FMIzcPxh2nh%2FRn%2BNqjFgw4syvtl3opF9WLCYhGvlT%2BzeJMMIqTgMAGOqUBXM6LDb4Ww60HcL9MsI2cMdlziOwJ4kWWR9KOQROLIFF33tIuAQKHCytroO6O4F2T5pMfpqSutg%2FTaPfgH0L3kPkcFCLM7FIFilgf%2F4CebyoY2rpSx%2FcsuhAsQFQq7XLh8bVhkKl19v676SuX3WmLq542Pmlw1Blp%2BNdbomidTIg9vrsGKNMhskxuLTDBlRLbQrIna3VPwLmIm9urCsZ3r9WlZarv&X-Amz-Signature=1c2a87bf2bc1895d326b502ac5b3869bce100884b82d4a2c79fdc3b997dde741&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFYURD7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI%2Bp5ITAA1kxsFwpYLjAl56gE%2FJyGs4vIFGJ7BweYDuAiEA3584b1jqgmrTKLCryYyGk%2BJDXOv%2BjJNv2QSWDjCiAhUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBQTdACg8PUoAYIEwSrcA8dPzZ2Spyl7uGqM59i9IgBbNefC02tHEwt6nYM1p2JDzfPjI1OUagnlnOOmpPnLxMv6v9LpblpWr%2FEu5fz0CDIBXNGAnmbCboHRxgTDT9TSPb8i8lRtoACP312GyvtobRnFhJs%2F9%2Fj1r7ns6%2F0EBBAeV70UDvVefDvtcm3c3j%2FDzWUTSBQ%2B4u0VvfgcWR0kZnPOOqMx%2BGWINWKU7%2FiYEpq%2Bj2uREXiJgQOJUXXOQP7ozKPoBKvkh8BGjr7PxI52EWm7PTsl2%2Bp%2FCWj9rMqxGCpDH7%2BG%2FeAY49KUWUBeYdAGJSmARGeFuGHZvMjWq6yTksM5XN3IwdLz5V3TkqDHb2r7dUX%2BBPfmq2wBCr5ztZJMP4UNr8t4MSTXEfCENdZqw3bdFoonTIjYkw0imHgFfkwMD3i8wxm%2Bvzu2hzzduCdSKBADyPrE9mj7S6sddTtIMMET8fCyUaeeAUUWDh87L6my95SAY2R536a13X5rQ6PKaiyPvW17gebQr6cHhZwnMa3e2G2V9Hxft6Xq%2FDtrs2sJFygUYYv0uK3oNNZhw8iWwkuwrJtJRl0qJIPLuHBPYZL3aIZ6Prm7gp%2FMIzcPxh2nh%2FRn%2BNqjFgw4syvtl3opF9WLCYhGvlT%2BzeJMMIqTgMAGOqUBXM6LDb4Ww60HcL9MsI2cMdlziOwJ4kWWR9KOQROLIFF33tIuAQKHCytroO6O4F2T5pMfpqSutg%2FTaPfgH0L3kPkcFCLM7FIFilgf%2F4CebyoY2rpSx%2FcsuhAsQFQq7XLh8bVhkKl19v676SuX3WmLq542Pmlw1Blp%2BNdbomidTIg9vrsGKNMhskxuLTDBlRLbQrIna3VPwLmIm9urCsZ3r9WlZarv&X-Amz-Signature=2859ec9086a636613ca4b2bae9dba06a2daf0e33e5000381817f86c81cd31f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624K7VYJ7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsav%2Bck3gy1VeiChw9MoW4%2FEK1Dg64svuZ%2F3fa2%2BqMAIgFtYJ8VKcMtdEjTmjXgwS6cfMf%2FaPiUiUFkkL1CgEMvoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPM2y7Zm0I%2F37C87iircA7GwXVsJyY%2F%2B13fbeDKLFDH6YqSI4arxEupjoVU%2BPhFwh2AoACHFxb%2BJh53nWHUM2WEATnrTnEM0dElqRmSEvGzuAuiVJe8tVp61R4gVwBb00Q5feH%2BJUHAnWN3pq1bpqQaUMpOiJz%2Bn2LANwbwA198Zu7%2FOGdFIVU9lSoZWbzbVBajHmbMkxPuQ5StferDRWzIV1LTTHexp3cV6fNHK1j7p4T9cg9gvCdE6HGkdjbQu%2B828Vc1%2ByCe3WHBWmJJZkh%2ByjwFXuVfAb4UwLqHLIJ6BxInhavaLVo2k60CL2NS0wzSIImITO%2FtthbSfPKQcFIcsYPOW6DjBa6acflSEN97dc43%2BH4lcQDgf%2BZvLT05hBcaUTq7rezW4YMvIdANd3v8OXt0bYwo1vRqz763nKYs0gRiqJIcTr1jV4%2FElXfyRCH9ubCszC9WDRX540Pe%2FH7HqW5py19BVLSRp4djIFsqNZu87siGflYvudI2wVumgNWfZRBx0R9G2ZdzJmsBd8przDh0R4WvNH5Ne8BYfKS%2FwdqPP2yLikTMMF0i9fBSGEmx6BqP64aEWUPoaNHK7vzbJxSdUyyNphvGCFDBAOFg8uXr2QKzdvnk4ySiUEw2r1%2BOrmIfJ0UCiio%2F5MLuTgMAGOqUBAxypSwVfEozYhFJAkNKNVE9kzoVEJluh5uE9cvKcArXJB%2BhYqutxsHHMVcgFXnzX3OhCfgQqsEda6T7NVAxU3yDUV%2BAJ9hWjlTz%2BgcGLMdTrDkdtiUC0F2nK1oeQU0J7DOBsIoppvD5L3QmGLnq73f1eF1P7jIw6AzoqjK%2Fcw89z4l6fcBG04h9CNlEKMEhZsm6VxKSLzHivvObC%2FJMrQZXg%2Bq%2FK&X-Amz-Signature=f759914b5249ecad88123385c4d608cbb2cd3be71a56928acb48d9c1be704d73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMKJMHZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqn4qy5OOF3yLsYahtppf4NVv7Sp6wrSw%2FibS0%2B3chZAiBR4EQPDfj4XIycb19DGk5hYzpvPwNe9VhBCj1te7K%2Feyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMJdo9WBoCrW%2BjhVavKtwDqCotCxzHhE%2FBe1CvOYjQK%2Fu4naUGsiYdiLwQL9lWKxtcC24QeI28hQAzhttcClW3JGERMv3ct32upiCcHtfmkveQGjJ6OE3yAUV0eb7Nd%2BGSl%2F3d%2BduyTcsWWcoGNdFMxQAzIKnOS4HVcCfLudFLrdcfPepSLA%2BV00eiBmFKu7KjajiYpP5AePPCyH5aj7eV9W2RgYDDbhNDWkmWO92RDcU8KbX4sM%2FD53Ej3uersBwIOkLKL27THnWVlWjL8F5JPN03AdQtIBQ8RS698hSIN1fxk44BzFIMCDe0TShfAZZ7ViYMX%2Bz%2Fcznue1Eddt%2FO52PDqYw9YrduZveh3QQbAtSR77SgwX2gRDFrqIeI1R4UiFCq%2B8n9dh9VXJ7rgVfDThbI1bNzkYcS2Lk%2Fw%2FqvcMSP%2BEazjHd1frizcvK7ZuuemwpCwjFp7Hl3NkffX4LDH%2BlU%2FPhNw6WKNnHBveNYX8pTE%2F6JhLG5K1EZncpLIitOPaadYkPJ61taQE1of%2FfM3ofBxvCpX066wj6x8GLnHXhBHXcM1Y6JoFAnEWBpdiVgXJR3f9fwtdBJHWiMyVnp5RZAX026wljgaaWCfOwYF2WK3lCKtfpyQRa2mVVZ774piGaYpgzDFUeIvNkw1ZOAwAY6pgFF4xw0Sub2ixx3yx6t%2F2lm1FX2Lw5Ybwxo5ZIIPUxg3R1coRJ8IxMWKjQazTCbQQlw2he3%2Fo6kYns6zbMGiV53QCyF7q8wn4klhuxSb68hZwJ12599Sdri146Iv2JbaCjL6ZQXDRLUsAVyGBlk0h9jOnRRte0DC8z5OmoLLRSzsW48iqvCNtzyY1hLicCpxZAxpLRogl%2FCFiiS6Uuw0TECjCa1U7tR&X-Amz-Signature=9725a646aa86cd7d69e387cb6e072c829f7ea95f7ef931b5366b911e7b0b5a14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFYURD7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI%2Bp5ITAA1kxsFwpYLjAl56gE%2FJyGs4vIFGJ7BweYDuAiEA3584b1jqgmrTKLCryYyGk%2BJDXOv%2BjJNv2QSWDjCiAhUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBQTdACg8PUoAYIEwSrcA8dPzZ2Spyl7uGqM59i9IgBbNefC02tHEwt6nYM1p2JDzfPjI1OUagnlnOOmpPnLxMv6v9LpblpWr%2FEu5fz0CDIBXNGAnmbCboHRxgTDT9TSPb8i8lRtoACP312GyvtobRnFhJs%2F9%2Fj1r7ns6%2F0EBBAeV70UDvVefDvtcm3c3j%2FDzWUTSBQ%2B4u0VvfgcWR0kZnPOOqMx%2BGWINWKU7%2FiYEpq%2Bj2uREXiJgQOJUXXOQP7ozKPoBKvkh8BGjr7PxI52EWm7PTsl2%2Bp%2FCWj9rMqxGCpDH7%2BG%2FeAY49KUWUBeYdAGJSmARGeFuGHZvMjWq6yTksM5XN3IwdLz5V3TkqDHb2r7dUX%2BBPfmq2wBCr5ztZJMP4UNr8t4MSTXEfCENdZqw3bdFoonTIjYkw0imHgFfkwMD3i8wxm%2Bvzu2hzzduCdSKBADyPrE9mj7S6sddTtIMMET8fCyUaeeAUUWDh87L6my95SAY2R536a13X5rQ6PKaiyPvW17gebQr6cHhZwnMa3e2G2V9Hxft6Xq%2FDtrs2sJFygUYYv0uK3oNNZhw8iWwkuwrJtJRl0qJIPLuHBPYZL3aIZ6Prm7gp%2FMIzcPxh2nh%2FRn%2BNqjFgw4syvtl3opF9WLCYhGvlT%2BzeJMMIqTgMAGOqUBXM6LDb4Ww60HcL9MsI2cMdlziOwJ4kWWR9KOQROLIFF33tIuAQKHCytroO6O4F2T5pMfpqSutg%2FTaPfgH0L3kPkcFCLM7FIFilgf%2F4CebyoY2rpSx%2FcsuhAsQFQq7XLh8bVhkKl19v676SuX3WmLq542Pmlw1Blp%2BNdbomidTIg9vrsGKNMhskxuLTDBlRLbQrIna3VPwLmIm9urCsZ3r9WlZarv&X-Amz-Signature=c2768716e78ad3be0f9d95c9328f45c572293de21a6e52ded0297a6dd7c8a995&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
