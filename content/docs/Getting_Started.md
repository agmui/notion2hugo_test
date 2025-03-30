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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCFXYAU6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGGGStzMvUQq1iGvaGrouHpk3zVVRUkpDBjAY1hq0pvFAiBhoENdfMzij4ja%2BYnIPGZYyT7vm%2BZ6O%2BiTfJsqIjQrHyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5UJydLAuq83DcuNKtwD4WqbqLXnb00rUDJyTm9ZvCxUBQyRwJtuw4bGXZCr%2F2SQEhYxDGImHiU3XsXq4tXrO1smtRpi8crtK9Z%2BmR9L9kn8zzEZ27uxL7HAgIQhoFUQhgyjjAnGUbO7dxX5yAdtG17pIkZ03oTHl9Dy7hX8nrb8KfUBMcPR5Kilv8ZAtZqlKiFFH6SFsPfF%2F1tSrSBlQXWYoxjyzMOSRFjf6DxhxN0W7rFBgh4HPJqLH60Si%2BB%2BvBaGMDbCe09QK2Pei%2FGofpQosdV3xFPUn1H8O6qUPqhxOeDO7DmnWLFm8ztaSwzSCyM5adyCTX8s6rN0kPaYbmzDcbI3hcsc1xarUMUN31Uc2iK6LwurdfuXg1sxe6XnP9ovUQWy%2B5zV92L1VPefVNDmrRkerC1nsUOfrNWdkDYyfSwOgbRhXmRTy%2BNMrR7ajxho9tjAWF5OZdVojHU4HqO%2FKJhEWaEoJNwO0ZPsvNKaqI7ZURpg9pGkCMP89AkY4D5J0hWATVl%2B9nhC7ymYRbgS6Lh%2BJjO82DnDNMZ4aKNKcA0azfbWAJx9KbLrPcNnFEKp09M1gLFdo%2B6MtJ8OxHxghdeZ2L9vhNuVIhfWnvj%2FC%2BjMheKFxypz9PaQr1JGLUyJNsmXyo2HNtQwwuqivwY6pgFY3DuQJts%2FIn3%2BAZIb95w86zt9JGhHLPkAf%2FraE4CyQezoSM1F538ZgIr8waRTV9%2FXbHV4e9lH%2Fdpkmvy80YID8giYWhi67Bwho7FjbmI3BHFEvxarI4lsJNCYolHJOc38iChdKapE%2BrLkrPP1bQ6dM%2BFm6WWJteO%2FOQYOGL7E7EMqNkb2vFw3pfQeVxTMoYEJAhhJYbgrdPQHIT0fTemezy9zNpnZ&X-Amz-Signature=38c35b2e63f56b15b2ca366279f04e4d03be79f2550409865abee1981e1e9fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCFXYAU6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGGGStzMvUQq1iGvaGrouHpk3zVVRUkpDBjAY1hq0pvFAiBhoENdfMzij4ja%2BYnIPGZYyT7vm%2BZ6O%2BiTfJsqIjQrHyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5UJydLAuq83DcuNKtwD4WqbqLXnb00rUDJyTm9ZvCxUBQyRwJtuw4bGXZCr%2F2SQEhYxDGImHiU3XsXq4tXrO1smtRpi8crtK9Z%2BmR9L9kn8zzEZ27uxL7HAgIQhoFUQhgyjjAnGUbO7dxX5yAdtG17pIkZ03oTHl9Dy7hX8nrb8KfUBMcPR5Kilv8ZAtZqlKiFFH6SFsPfF%2F1tSrSBlQXWYoxjyzMOSRFjf6DxhxN0W7rFBgh4HPJqLH60Si%2BB%2BvBaGMDbCe09QK2Pei%2FGofpQosdV3xFPUn1H8O6qUPqhxOeDO7DmnWLFm8ztaSwzSCyM5adyCTX8s6rN0kPaYbmzDcbI3hcsc1xarUMUN31Uc2iK6LwurdfuXg1sxe6XnP9ovUQWy%2B5zV92L1VPefVNDmrRkerC1nsUOfrNWdkDYyfSwOgbRhXmRTy%2BNMrR7ajxho9tjAWF5OZdVojHU4HqO%2FKJhEWaEoJNwO0ZPsvNKaqI7ZURpg9pGkCMP89AkY4D5J0hWATVl%2B9nhC7ymYRbgS6Lh%2BJjO82DnDNMZ4aKNKcA0azfbWAJx9KbLrPcNnFEKp09M1gLFdo%2B6MtJ8OxHxghdeZ2L9vhNuVIhfWnvj%2FC%2BjMheKFxypz9PaQr1JGLUyJNsmXyo2HNtQwwuqivwY6pgFY3DuQJts%2FIn3%2BAZIb95w86zt9JGhHLPkAf%2FraE4CyQezoSM1F538ZgIr8waRTV9%2FXbHV4e9lH%2Fdpkmvy80YID8giYWhi67Bwho7FjbmI3BHFEvxarI4lsJNCYolHJOc38iChdKapE%2BrLkrPP1bQ6dM%2BFm6WWJteO%2FOQYOGL7E7EMqNkb2vFw3pfQeVxTMoYEJAhhJYbgrdPQHIT0fTemezy9zNpnZ&X-Amz-Signature=52af031d904c02146f24ff9c3c2267375f890997105e02a9dd682d908441180e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DAU2ZI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCXVXgLc9Bcuw8fyBr%2BPz2CvLay6BN0va8UMV27%2Boh02gIgL8nyc4IgWIdkhjOoAVLc4%2BkeDNo%2BUBtBlNqSel2nkhEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqMot8Jd6j6SvMuuircA%2Fq2weaZfyOPox7RDRvyGSL9yDgNul%2Bd6I0kRjdcQrQXa3Hf3L93BQSkoTFMcPd5eNQZcWEySw2nJW5i6nyPkypklDfbQvZ%2B%2Fl5g64M4LgMlenkUJvPkCTMOfzZFU0xyHYGGabr5IAFsi4kCGwNbnONbJ84UqmvBIofSvHrbH1cTGWSblXZlPdSsPGyvV%2FsIRpN7QtRvOFEoGuZOS28wvuYxWH46g2bmx%2B9K%2F2m%2FwDDNC5Np%2BTuEpk187pCD%2BeFzA0yGEqv4KsdWV%2FQfbuFed%2BrvXD3JAMOQkwUAXcczBio672P0t2ejN6Ny43iY7KjmgIT91%2BW%2B3JoIYs%2Fwn6rnUhpjph9WH4ui8XfKBJRLoR4QK5CXm%2FXdnXkoGt7ozZ0rW1ukTiDxdFJilqOTyC5Ep0gwLraAEtKoHlsHaPJ6H16pTIvr0gSGqead%2FQ4ctbwCXA3Um44BScbfIwDJYzSD1ABbCqnX%2F79Cas7clXScn3QmE%2B0E3aX5sTHB2kl3HVtK%2BQfqjfTTicL3gFcBp%2BOPCHALqm44ksn6QH8aPi0vRNXY1PEJdL4Ap26JUAb%2BuvB8iez4DbMf%2F0oluc4pqf7ikB%2B4sP9P8tXzbg9Uzh4S%2BhOr5DrVpel5tdaCnoYFMPfpor8GOqUBg9kvUjeLZ5Qf1pTCqpOIBfrIQarKwn6RebJapnFLfbMWSpweOWSGVWx41rjMGtYMcyPNvnvtE42fjVUSfIbY3%2Fyu6lMu47BovQQHrB4ImPdIQWs7mZcl5lnpMHzzHQ1wyAoDjzhEngAHtw0RPRN%2B5slpo4P0WYPbjN8uelhStNppXQ0jALA6qqD7XsR2TdaAbIJ48QQwIn8QEh2sWrydV143vEe4&X-Amz-Signature=3bde7743eceea8817312207f9eea49ac0fbfeeb6c18ae49925f15f53de97f24c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVYVYOW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH%2Bm9Z9dVtgsF%2FfJFlv4UNwYKvoMABNvymvJ%2Bhdu%2BY3xAiB3wesJNvGT1e3MkJaZii2nsFv7aWI0aHLsudIBArh1KSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv90ln3%2BYkrRbH%2BuaKtwDRG4j1bzvjxYWNYa9xAmUOof9ysxCNvuNNeiF7ksjp4qnwzirGg%2BY%2Bxxnu39wlFpulWjFt6EDrm9icMZbH0YzMtHZQgFm0o%2F%2F%2F5XY9%2BnuiOUFdTgd9IyWwJejOoFliF6T5vftwQasodZ5Xe9kCLGARNKcHErAWE75Z1DImtjjcifhwT19HZyrXj7EusaLiVRDBmMtAgiLsbuVzMghnmp0Zgv%2FWhk7WVYvNAdJP4DZodgt108mNRK%2Bs6V2WENBA1jw8AzIhxsFyknBV7bThK4l2qfgM%2B2XcbIn8RH7Sqra5gWIOBGdY1CzykeCl8J4LMoTOTuAQNMMBiCBpJ2jNEkKJwi3eJv3M%2F6UDa9QCLv8QTpiKXBWcIw%2FwAOTRG%2FyC8ZchHu3Rsfe4kWBXJg0Okv5PLt4vavcmJp0k075%2Fo0MQawBJxJlFFJQv%2FzNA3G%2FcexRqsF%2B7yy1ZvXlVlVzawuJJS6En7rvfEl9LLkmBZ0HN0kVAshcrtHJybu%2FMZE0I9adnXxMVGOQHTWQbfArES7AwYdBBExZ2XHdPiro6%2BaH2fAZQrqD69mwe5%2Bl83RlPvBYuL2dcRRTEKr91OaGOfwgouEZpOuEzM8kv7SPeHsYXLvWWVFDrkCKe%2BvSVK8wluqivwY6pgF3FbmfZW5Gn05s8tUO810JjghIOQ9yIogQfUcrJXmbhcCa%2BkrGEsZX6JNFgl%2Bv3xAN7ju75QPkt4%2BupajXFIR80TAXk8207XGDMHgLASaW2IbGwoZoAPHQor8q%2F%2FcxGnUTc0HN9MahQ5rrU%2BkMFF%2FJr8jwa5Fz%2BDH0PS4y8z%2FW6NofNBhOm2oDVGIIlJgdAc%2F5pw3grf1SRB4aYUZwO82%2Bee64vQMB&X-Amz-Signature=fcf057cbbf1e411d1aaa4007cf5e68c7a753f9a41d26366ddd7a2d0c477db4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCFXYAU6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGGGStzMvUQq1iGvaGrouHpk3zVVRUkpDBjAY1hq0pvFAiBhoENdfMzij4ja%2BYnIPGZYyT7vm%2BZ6O%2BiTfJsqIjQrHyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5UJydLAuq83DcuNKtwD4WqbqLXnb00rUDJyTm9ZvCxUBQyRwJtuw4bGXZCr%2F2SQEhYxDGImHiU3XsXq4tXrO1smtRpi8crtK9Z%2BmR9L9kn8zzEZ27uxL7HAgIQhoFUQhgyjjAnGUbO7dxX5yAdtG17pIkZ03oTHl9Dy7hX8nrb8KfUBMcPR5Kilv8ZAtZqlKiFFH6SFsPfF%2F1tSrSBlQXWYoxjyzMOSRFjf6DxhxN0W7rFBgh4HPJqLH60Si%2BB%2BvBaGMDbCe09QK2Pei%2FGofpQosdV3xFPUn1H8O6qUPqhxOeDO7DmnWLFm8ztaSwzSCyM5adyCTX8s6rN0kPaYbmzDcbI3hcsc1xarUMUN31Uc2iK6LwurdfuXg1sxe6XnP9ovUQWy%2B5zV92L1VPefVNDmrRkerC1nsUOfrNWdkDYyfSwOgbRhXmRTy%2BNMrR7ajxho9tjAWF5OZdVojHU4HqO%2FKJhEWaEoJNwO0ZPsvNKaqI7ZURpg9pGkCMP89AkY4D5J0hWATVl%2B9nhC7ymYRbgS6Lh%2BJjO82DnDNMZ4aKNKcA0azfbWAJx9KbLrPcNnFEKp09M1gLFdo%2B6MtJ8OxHxghdeZ2L9vhNuVIhfWnvj%2FC%2BjMheKFxypz9PaQr1JGLUyJNsmXyo2HNtQwwuqivwY6pgFY3DuQJts%2FIn3%2BAZIb95w86zt9JGhHLPkAf%2FraE4CyQezoSM1F538ZgIr8waRTV9%2FXbHV4e9lH%2Fdpkmvy80YID8giYWhi67Bwho7FjbmI3BHFEvxarI4lsJNCYolHJOc38iChdKapE%2BrLkrPP1bQ6dM%2BFm6WWJteO%2FOQYOGL7E7EMqNkb2vFw3pfQeVxTMoYEJAhhJYbgrdPQHIT0fTemezy9zNpnZ&X-Amz-Signature=b33711cd2b9e263a002343e622bd9071a4db0a40acbc89c441a4f1689e64c407&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
