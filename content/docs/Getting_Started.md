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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEGFEX5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELGmSrbQdZp6%2FW0s36Eq7qf2%2FFwZnm%2F%2B%2FE87CO6uzXzAiApVwqDJSPstifplLQC1QifjmeQ81LAe%2BcUD1zeHauFhSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMmZUtBfiY7BTxwk21KtwDxZbH2cKK77ffjNzTWIYK8Ne0Fwgq6H0IWEeAgIipx3Sjnp%2BXgZWhHt%2FlNxrP2R6uziaSGFm5cLYh2DTo0ZuwTfsbepPr8S0o0vz3QoU%2B0osr01krpfmr7GsBRJk351CgYDBfgs7DDeGsxQZIbhO5XPI5gvM%2FDou%2F7IzsvSdgjhia74umxmv%2FfKCLwW5GYGF2gVLjhuFFIhdeCJLzJHcI1vNyseIxsNQjzA2QqaY0%2BbtWHdZjAQrt52g94FTYjicrt74%2B96wE1n4mbUuv9DhrsqQBsLjvDIuEjYTUW94V4f2t3r0%2FmIu%2FxUONuQOCNz8%2Fkjunx374BMxtrV0aiCXBCCzHIrpKiamlNlso02zX6oKjuS6M8HR8XI9n0OcKonp8q1nSIcQ7IoMwa8X0pkfypf0IqkkSaFdYXbLsIibZygsMl49vM4U6nBubL35j51ewFA1AxxZX%2FduOUP52PXkUzkRko70Zn%2FtZcVe8u2ZxXhLBLfa%2Fpumg3c8X%2FKPL9E10Rkv3bbzNK0GVE%2Bk1LPpDz7SAwCJh6n23gfjD78waZ%2BsRvMRbM65pUU2vIOmpD9OomRn%2B12i%2B0RMtqI8CjBjGNBxEk6Gl28cHQ2vX3%2BxArbCbFtgzoL03QMYBahAwyoy4wAY6pgGTbhGBI09EUZ%2BE%2BPd6VZhuRoSNJyLISj6M01TsqM8wtKah8%2FAQdTuV4Ky%2Fu3utW7QgVAUnBD8xH3ePxo0BTwixserig%2BK7tt8luIbTkgswnFGdRP30lrS5W5q%2FrJ4E3eEwtUeh1oXbpKGuftxgp8i9ndo6ghmem6aKn9daV4xJlqQYNhU0qk%2Fq8hhc4X4yJgTk%2BR2Sk8iEQqUQ3yuHz6JpTtAl97pR&X-Amz-Signature=0610528a3c175ffdda92e82ea0efc6762a40fb70c046132a1fce448b9a8c8ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEGFEX5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELGmSrbQdZp6%2FW0s36Eq7qf2%2FFwZnm%2F%2B%2FE87CO6uzXzAiApVwqDJSPstifplLQC1QifjmeQ81LAe%2BcUD1zeHauFhSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMmZUtBfiY7BTxwk21KtwDxZbH2cKK77ffjNzTWIYK8Ne0Fwgq6H0IWEeAgIipx3Sjnp%2BXgZWhHt%2FlNxrP2R6uziaSGFm5cLYh2DTo0ZuwTfsbepPr8S0o0vz3QoU%2B0osr01krpfmr7GsBRJk351CgYDBfgs7DDeGsxQZIbhO5XPI5gvM%2FDou%2F7IzsvSdgjhia74umxmv%2FfKCLwW5GYGF2gVLjhuFFIhdeCJLzJHcI1vNyseIxsNQjzA2QqaY0%2BbtWHdZjAQrt52g94FTYjicrt74%2B96wE1n4mbUuv9DhrsqQBsLjvDIuEjYTUW94V4f2t3r0%2FmIu%2FxUONuQOCNz8%2Fkjunx374BMxtrV0aiCXBCCzHIrpKiamlNlso02zX6oKjuS6M8HR8XI9n0OcKonp8q1nSIcQ7IoMwa8X0pkfypf0IqkkSaFdYXbLsIibZygsMl49vM4U6nBubL35j51ewFA1AxxZX%2FduOUP52PXkUzkRko70Zn%2FtZcVe8u2ZxXhLBLfa%2Fpumg3c8X%2FKPL9E10Rkv3bbzNK0GVE%2Bk1LPpDz7SAwCJh6n23gfjD78waZ%2BsRvMRbM65pUU2vIOmpD9OomRn%2B12i%2B0RMtqI8CjBjGNBxEk6Gl28cHQ2vX3%2BxArbCbFtgzoL03QMYBahAwyoy4wAY6pgGTbhGBI09EUZ%2BE%2BPd6VZhuRoSNJyLISj6M01TsqM8wtKah8%2FAQdTuV4Ky%2Fu3utW7QgVAUnBD8xH3ePxo0BTwixserig%2BK7tt8luIbTkgswnFGdRP30lrS5W5q%2FrJ4E3eEwtUeh1oXbpKGuftxgp8i9ndo6ghmem6aKn9daV4xJlqQYNhU0qk%2Fq8hhc4X4yJgTk%2BR2Sk8iEQqUQ3yuHz6JpTtAl97pR&X-Amz-Signature=3c49d75f0d99b671e28751b4a51aa5d01e4bfaf7c826e309e1ce53b36f0937e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5QPVZA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeK%2F9rcmQBzz%2FxaLDJbpRT%2FjQK%2Bd1%2FtqMkaTv7PVX02AIgO5sBgbRLYOq6rijLQtyeJQkpGuORyYaWuMqBC1nrqUcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDCmO6eWb2r%2B0ZqnulCrcA%2BRTuV1wypDODYfR1jSi4VKGxV2OtIEwiYSfnN6FmzvACGkQZnL1MhAG0jFwkBw2Oz%2Bw4C%2FNRPJEG2qSO4%2Fcg9piBtYqEqztcJq0X6%2BaHh5N2MLQSuly0Jkc1RkqikrKtg9IbMAjqT%2FK1Gyci0BzuyRheLZJ8%2BB%2BdI7wOsWSi1Pv7tAJucyXHBG9YsStgmE%2Botkb8kCQ1e02jS2Wk0kzslzfDfMzkSov00j17jf1XXwgl3f%2Fo0UZa4gSirNgUt9AFdA%2BKij0wcw1ABrBoU0qiL0ykrBFvIyRD0ly02QFMO%2BuAC%2FlLYsWYmd5toYJ%2B4l1AHa6xql6awaZGBPuzVpzqghJU%2F4dg7TDkYiReUh1HaiLp%2FkcmRHab461UgbnlLwOJ7gbx8on8luvuiKCxFzTDI4UN7l57AWqdZhYdFS3%2FVkv5CvrPSJpGUMBL7F26pP3KtdE5xcIYfDCn%2B5BrOCDOzSibeTSADyCPz%2BKW2dYQ%2FRC3gn1QOgkvlUv362cBBB%2B8tXclXrfGC4bXkfbXX1eEae0ySZapnHE5SxRXuNJsAut%2Bpef9HSfYl0k5pLDieB3V1Uqsw2dST6OhSw6eJTt56BxTulDpP6X55tXBxL%2Fb4G3I%2FE9vnmErDo1gtlCMJeMuMAGOqUBTE7b0xqyxnRx455QzqBrq%2Ba7qYw82Ry1%2FPaz7Sx1bz5ygHISVEc3o7xLGgZEkvhz0ew8I7wnJM%2BJAUhlsTsCpiz1iY7hc2tZUDbKrBLoUKERscB1GhC00BWoaVy8T%2B4uU5NQ7JHTrX8dKVOZIX5mrPv2NDcKS%2Bhsvs8kB784sjJOlpqXsZZhF842zH5oLs76Z3g6osnnyxKSNKckNc1jAq9exf%2BZ&X-Amz-Signature=5e2dc4b4880c9aadcc4d80b8914b1225a4d80ad1332523b4beec888dec79de6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Z2HSHJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIW7FiT%2BRUVvrcsBXVJnP3esPP96AlT4DzsNBOVf8TwIgOGVMPXhyJfGvq9ytbki0LeBkwWC%2BadYND2%2BWa99XJCgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGUV%2BUxovkTEc7fl2SrcA3unbfDi3CX4iP4GeXeLjQVFT4Te%2Fyl1jgMa1IdLX%2BG4zkA%2B9nCFH8jT620MrCj9v9ICVQ8t39mk88KbrYtv9li43U8R2F67K3%2F3uVHGK8TlvDERw4Hai4JyajqlmvhnDEgjoSOEN7o4fstCHJh5roE186gxcbXWR2IhDuvHxGbCDKDXV4lnWC0XjXSDLqs8yPqo4rfUUxyu7nWCmDuBL30kLUlTGKUMx8UQTPi8OrX1nG97KmURdshUz%2FYRzbYsYdQrkkNCaByU9LXsFPlXJt77FGwSE%2FgQGztpuQcOOt00%2FkYlEqOPzq7Ei%2BuEyJlHh%2Fh%2B7nY%2FQ1iU0jIC8GVdbXFKlktXrp3pBeNfYi5Zjf9bCLBY5C%2FLEQinC0%2FXdjwAC23w6o0415aIbqgWIvfOsBhJ33If4UoZcnSULpQ6kZeiLXw2eqZPmhblfEnsuFOHPShV3dvA8%2Bg%2BeGIU%2BW6bCwjaJEVHK5l234bfwO9%2BpacBw5jLY6LcJzoK1poiTlKJzM8zFAFKgrK%2FFoB2IIrkNfiKRs7yJ5dBuC7hWdTCh05j%2BnelHHYpxrGjSsR7gnoMKgZG28Piqhq1eLjoysoRl2%2FARyMn4QQlI1e1o0pHuzBZdu6N0lvk%2BDZepA6DMJuMuMAGOqUBP%2BuRTc9V4rjf7VrUxff9ykP2v6rqmF579tZ7xJ9hAAIr3rXe05yimqdYvB7YpH0vVeFgZt2PJj2jJp%2FCGQwU56uV20jqaWQ1pjrX9mF5QoQDUfUpeHM3o%2B8XY46qRYFa5zF0%2FhlB6CRZFYsRFGph1oyqw%2F2DoRI1vOQEsjgyuUY98h77bb9S4gKCkmxqNhbAFRirf3H36pUxl9rhNjPrS5nj6j%2Bq&X-Amz-Signature=e5ff21bf4f8eeba3d9c8c001b2ec5b8e59638411a52b8bcf20817fa406d56c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEGFEX5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELGmSrbQdZp6%2FW0s36Eq7qf2%2FFwZnm%2F%2B%2FE87CO6uzXzAiApVwqDJSPstifplLQC1QifjmeQ81LAe%2BcUD1zeHauFhSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMmZUtBfiY7BTxwk21KtwDxZbH2cKK77ffjNzTWIYK8Ne0Fwgq6H0IWEeAgIipx3Sjnp%2BXgZWhHt%2FlNxrP2R6uziaSGFm5cLYh2DTo0ZuwTfsbepPr8S0o0vz3QoU%2B0osr01krpfmr7GsBRJk351CgYDBfgs7DDeGsxQZIbhO5XPI5gvM%2FDou%2F7IzsvSdgjhia74umxmv%2FfKCLwW5GYGF2gVLjhuFFIhdeCJLzJHcI1vNyseIxsNQjzA2QqaY0%2BbtWHdZjAQrt52g94FTYjicrt74%2B96wE1n4mbUuv9DhrsqQBsLjvDIuEjYTUW94V4f2t3r0%2FmIu%2FxUONuQOCNz8%2Fkjunx374BMxtrV0aiCXBCCzHIrpKiamlNlso02zX6oKjuS6M8HR8XI9n0OcKonp8q1nSIcQ7IoMwa8X0pkfypf0IqkkSaFdYXbLsIibZygsMl49vM4U6nBubL35j51ewFA1AxxZX%2FduOUP52PXkUzkRko70Zn%2FtZcVe8u2ZxXhLBLfa%2Fpumg3c8X%2FKPL9E10Rkv3bbzNK0GVE%2Bk1LPpDz7SAwCJh6n23gfjD78waZ%2BsRvMRbM65pUU2vIOmpD9OomRn%2B12i%2B0RMtqI8CjBjGNBxEk6Gl28cHQ2vX3%2BxArbCbFtgzoL03QMYBahAwyoy4wAY6pgGTbhGBI09EUZ%2BE%2BPd6VZhuRoSNJyLISj6M01TsqM8wtKah8%2FAQdTuV4Ky%2Fu3utW7QgVAUnBD8xH3ePxo0BTwixserig%2BK7tt8luIbTkgswnFGdRP30lrS5W5q%2FrJ4E3eEwtUeh1oXbpKGuftxgp8i9ndo6ghmem6aKn9daV4xJlqQYNhU0qk%2Fq8hhc4X4yJgTk%2BR2Sk8iEQqUQ3yuHz6JpTtAl97pR&X-Amz-Signature=97440c74d2c383bb18879fbe0a8ec00307a6cc11405a4e6def0b766a377f97a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
