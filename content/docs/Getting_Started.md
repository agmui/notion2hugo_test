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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JH3PE7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDbYQJCIifPA8nLVYpr3Dqo83vF6sJNav6VNH3KTpJLsgIgCFObvBm9pB4vo6NLHeNsGL4HY9icvAhwW9GiVA%2FLgZQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMtux1%2B72BLj%2FPLqZyrcA4214dfMmHfgR3k2GJfdpFarCRaFOT6%2BLIQN1FqZ17VSmuf3WcCxDzh%2FEHwMWnAfzptqJfXGbY4HDBhzsmRzmc8Mzq4YFpuFlQXMf4IYf1wDYkwCdgdxGjnkGl7cHVKA1mIO2ETt7gBJC%2BNtau7v853ysqrhCI7mYRBsANCKm8p8HDeMhBk3sZ22Sf483H0lA1tvmGM5aw8JPRPzHP4sEzblTbMxyGvGMZ0GsUQ7H4d3oY98U7W6o3FaL3D2n0gZefgadteDi5hoqxxSn0vhxDFYEgSVq9vobiGDs13xkbDhHt27bTQ3FKmsvsZXamij%2BnyouHryXwT1RmbVBAuUwloQZAY0z8FZo0DixTMdbLEkfJ4Iy8t2LUt0TS2VRGxxN7RGVT%2BZrLWpvNMw3JxC9pvx1m5Xu4l32sCvGSwraoRDu4rgUSN7u3hxJwcCw%2Fsz5jEhpgUkCIKUZTB1DU4ArKGRkXO9z5qMOZJA5z4WrFdqO7%2BnoJrLF3AWE%2FolGStAhLPL%2BwJ5I3LW%2BVcfDIG%2BYN3REi0XiBSfl3D3SQ7PiYA%2BhzcNB98WjOFrkq8ehNLGSyFtJBJkOL2SNBtKaD9uFtrJCD%2BzCjpnyaGfVWdEOKQngzGwM2mbC2WlckbhMPCJ38MGOqUBWTrdZpo4Vc84zri0nIcaWBH6wsMiWQo12Wl1DLv8shWWxiF6MwvF8dH6N3zGHdggGOV%2BNyVJIVSl3WluU6JqrjyOs45Zmipt9l3AiDglUzCdEgec9nLnDhRjujcO%2FenfQU2jHA3AU3eJnd4RL4Suwlu3z4Lm3ywt58aRqC%2BFgujmYjbGGbhydIPX6gVMA1O8TqnMmJ7U3Kb%2FDCaZBWj%2F%2B2PERPVs&X-Amz-Signature=638ea487b63045cd0408b8bb16edf9300db4d3a0c222283a08b3ffb98d82572a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JH3PE7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDbYQJCIifPA8nLVYpr3Dqo83vF6sJNav6VNH3KTpJLsgIgCFObvBm9pB4vo6NLHeNsGL4HY9icvAhwW9GiVA%2FLgZQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMtux1%2B72BLj%2FPLqZyrcA4214dfMmHfgR3k2GJfdpFarCRaFOT6%2BLIQN1FqZ17VSmuf3WcCxDzh%2FEHwMWnAfzptqJfXGbY4HDBhzsmRzmc8Mzq4YFpuFlQXMf4IYf1wDYkwCdgdxGjnkGl7cHVKA1mIO2ETt7gBJC%2BNtau7v853ysqrhCI7mYRBsANCKm8p8HDeMhBk3sZ22Sf483H0lA1tvmGM5aw8JPRPzHP4sEzblTbMxyGvGMZ0GsUQ7H4d3oY98U7W6o3FaL3D2n0gZefgadteDi5hoqxxSn0vhxDFYEgSVq9vobiGDs13xkbDhHt27bTQ3FKmsvsZXamij%2BnyouHryXwT1RmbVBAuUwloQZAY0z8FZo0DixTMdbLEkfJ4Iy8t2LUt0TS2VRGxxN7RGVT%2BZrLWpvNMw3JxC9pvx1m5Xu4l32sCvGSwraoRDu4rgUSN7u3hxJwcCw%2Fsz5jEhpgUkCIKUZTB1DU4ArKGRkXO9z5qMOZJA5z4WrFdqO7%2BnoJrLF3AWE%2FolGStAhLPL%2BwJ5I3LW%2BVcfDIG%2BYN3REi0XiBSfl3D3SQ7PiYA%2BhzcNB98WjOFrkq8ehNLGSyFtJBJkOL2SNBtKaD9uFtrJCD%2BzCjpnyaGfVWdEOKQngzGwM2mbC2WlckbhMPCJ38MGOqUBWTrdZpo4Vc84zri0nIcaWBH6wsMiWQo12Wl1DLv8shWWxiF6MwvF8dH6N3zGHdggGOV%2BNyVJIVSl3WluU6JqrjyOs45Zmipt9l3AiDglUzCdEgec9nLnDhRjujcO%2FenfQU2jHA3AU3eJnd4RL4Suwlu3z4Lm3ywt58aRqC%2BFgujmYjbGGbhydIPX6gVMA1O8TqnMmJ7U3Kb%2FDCaZBWj%2F%2B2PERPVs&X-Amz-Signature=90103dc4677e9f90f7b0f90021c327128717a43ca368ad06716a4b617c9d41b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JH3PE7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDbYQJCIifPA8nLVYpr3Dqo83vF6sJNav6VNH3KTpJLsgIgCFObvBm9pB4vo6NLHeNsGL4HY9icvAhwW9GiVA%2FLgZQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMtux1%2B72BLj%2FPLqZyrcA4214dfMmHfgR3k2GJfdpFarCRaFOT6%2BLIQN1FqZ17VSmuf3WcCxDzh%2FEHwMWnAfzptqJfXGbY4HDBhzsmRzmc8Mzq4YFpuFlQXMf4IYf1wDYkwCdgdxGjnkGl7cHVKA1mIO2ETt7gBJC%2BNtau7v853ysqrhCI7mYRBsANCKm8p8HDeMhBk3sZ22Sf483H0lA1tvmGM5aw8JPRPzHP4sEzblTbMxyGvGMZ0GsUQ7H4d3oY98U7W6o3FaL3D2n0gZefgadteDi5hoqxxSn0vhxDFYEgSVq9vobiGDs13xkbDhHt27bTQ3FKmsvsZXamij%2BnyouHryXwT1RmbVBAuUwloQZAY0z8FZo0DixTMdbLEkfJ4Iy8t2LUt0TS2VRGxxN7RGVT%2BZrLWpvNMw3JxC9pvx1m5Xu4l32sCvGSwraoRDu4rgUSN7u3hxJwcCw%2Fsz5jEhpgUkCIKUZTB1DU4ArKGRkXO9z5qMOZJA5z4WrFdqO7%2BnoJrLF3AWE%2FolGStAhLPL%2BwJ5I3LW%2BVcfDIG%2BYN3REi0XiBSfl3D3SQ7PiYA%2BhzcNB98WjOFrkq8ehNLGSyFtJBJkOL2SNBtKaD9uFtrJCD%2BzCjpnyaGfVWdEOKQngzGwM2mbC2WlckbhMPCJ38MGOqUBWTrdZpo4Vc84zri0nIcaWBH6wsMiWQo12Wl1DLv8shWWxiF6MwvF8dH6N3zGHdggGOV%2BNyVJIVSl3WluU6JqrjyOs45Zmipt9l3AiDglUzCdEgec9nLnDhRjujcO%2FenfQU2jHA3AU3eJnd4RL4Suwlu3z4Lm3ywt58aRqC%2BFgujmYjbGGbhydIPX6gVMA1O8TqnMmJ7U3Kb%2FDCaZBWj%2F%2B2PERPVs&X-Amz-Signature=c2089be70f7290d1f3d1af74d7d6bf16c135155aebd87f99098dbbf79168dff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEB5DUU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDe4tapFcDdHscs%2FUKz9c0G%2BVwX5SfO8MS%2Bsl09pshyQgIgLExfBrG6tGAgHjVajPLIjpIgRJt9AJVIey1%2FgFUtCbYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMFzz21wiiOAr%2BocaircA5CEGgDu6DRg8cTOG3UThz1HFc9xPRxD%2Fq1Qx49%2BH4NVmoj9mUd9tmVLKGdMEOVN7xgFryUcH0GWQhEm3elNOsPLBmqpsY6PmUGpK%2BrTcSVtcHLjrAak6w4vRX6oYvPdR%2Fqo5CDDSYECnwLbsQjVk0Ci8Cw7s6L9P0Ls7vX6%2FkUfnc27jGhUVm8hendu%2FXmoIFM4RDvOMosA4D19%2Fj%2F5iBeyMnwJaQJiRFiB%2FFjKxcvfwuXhbKZefRXseA1C5Ija8USI%2Bmu3f1bczbvPzFoGGc0Ij2pakZXnp%2FoJPhs2pddCjwBXsHwvqR%2F4HcTl5p0WqEPJRRLtChTDeoCUbaNXUiSF5J5jRvgDpCykLKQ4FGdQHhZwvVnHvq31K3tmOLAyxbjQgtgRZX19iMAg%2FcAzC8bbYWT1fGlhn9P6YA1rjc0lv8SRHjaVN9fsWJ2ezNUCsH4KRT%2BvSdqrHBddpAiIDmZyM68w%2FIW0dieVTQFj2iG0WD5qYPE0Ti1F8T9Q9aoBOjWemhXsOHA8MPy%2Fh6M76xTkyh1M1bOgXNUY6zHBG09rBbTcPLulf3vpHfywq8ML5CT33tiA3PrfM9Toq%2FsA1i3P3v4aLWseHh%2BJOfeIwGFikcJcQu3LxGp3hxs%2FMIiT3sMGOqUBgoLKIH2E7KPrwbDn%2BxryaVtJKqfPuZsPxOXgcXBw%2FvQdSbyJ%2F50CTNOV4DdPhD1urm5A%2Fe1xykCAbpXR02tEWAINEdMuhQolbA4rQOg4k%2BzMXZHBxVvLd51jSnISI3BvK7T7xwHYu2L%2FfuVIK%2FpHR125m3rNKPhKCIUMTQGTHa1aIvB4WELS5q0v0gLV0Vxv0gjTHORNYiPGCuBmzAie3Zdi2aV0&X-Amz-Signature=3af4e398726722bbe0472a7e49ffcfbf6ddb0c854bdb9610515e3f545485141f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QRHK3X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCgvjq3wtWGrEG%2BIvo1EDRyYpMuGhCsecplfcVOAeAHgIgUUdbHV%2FVc7qqWoyksEqj9%2Bw%2F%2F7cLaUCuurx8Xls%2FMlQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGO%2FnwegeXA4qqqGRyrcA2qjnbSlM5Gin48qDV0klleAEnXBaKcJr%2BFaEepz60cq5uFD%2F48r%2Bo57wqa4X8wrqbI3TjUy7bJ7duDgsOlynysmXpeD4tb5nwYQnt66rsCbXK3z44Tg3sQ0b%2Bw60589n0C9rhNw3tJrwO88BQNvd8N94pSlBbrPPWkGvrBypliXbexG3BaDFMpyVyUD3nelkEwwGBJohmEGN2Af5GGHG%2BUDSriDN08kmUqaAmzIp82Op2%2BfZ%2FmaENgsMECzp%2FzFmDehZ%2FoFiYuRKaYQAozdMvo3ZvZG1zimnv7xNOCWyc1tw9snGfNcrvVvuagGPnGWPApMmC9eH%2Bsfdk6xVEslLtwyZm00j8SrvVU0qiIMgIjg2yK3E9DYHMVYHIa7F5MQT7RKU8AMYHNgJ%2B5XHmf87iTQLgmx3jNG3KYuLgrVegB6yirwlmTlj82Eoav3FKKnFM44ycW5msHdlKnu9AgWUl1KF5JWXEUS4WH6YbOi5rWCES23GTo%2B%2FO21gmf9XB%2FiN2d77ie8jIkdBhz4w%2FI3zU4I8dfQCiCOIyP57Ze%2BPvR1wq%2BpBFywX1Z8WUwnjvSH2L4UfeUV6sBwT%2BXjuOupAzQ3AMwV8fsMk44uni4f0s11BOGIm9C0oYToKGDIMKeT3sMGOqUBTgeQ1iBRV7Mhp21fV7map6mJL6BtyLdYzQPJ3kLNHzk8yJmYR3eIxmOeImhHEivrU36uH%2BMxs51PmtgN3eYfluDFaM8A6Vdfb868s4C%2B21y6Qts12CjpxTaBIcoZ6%2FTbtA%2BJlYUWAhqdiHkZ8l6%2FBoJOrOdMYcczEoiJ%2B90rjaBIRKVjCeBHYGvfyfESO313kwxC%2B7IpFM4vb21kzIQ6PF3pyDJw&X-Amz-Signature=fa80a185359b95d5357e21bed6a485d3a4f78b16027c335ce86f43bcbc4709dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JH3PE7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDbYQJCIifPA8nLVYpr3Dqo83vF6sJNav6VNH3KTpJLsgIgCFObvBm9pB4vo6NLHeNsGL4HY9icvAhwW9GiVA%2FLgZQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMtux1%2B72BLj%2FPLqZyrcA4214dfMmHfgR3k2GJfdpFarCRaFOT6%2BLIQN1FqZ17VSmuf3WcCxDzh%2FEHwMWnAfzptqJfXGbY4HDBhzsmRzmc8Mzq4YFpuFlQXMf4IYf1wDYkwCdgdxGjnkGl7cHVKA1mIO2ETt7gBJC%2BNtau7v853ysqrhCI7mYRBsANCKm8p8HDeMhBk3sZ22Sf483H0lA1tvmGM5aw8JPRPzHP4sEzblTbMxyGvGMZ0GsUQ7H4d3oY98U7W6o3FaL3D2n0gZefgadteDi5hoqxxSn0vhxDFYEgSVq9vobiGDs13xkbDhHt27bTQ3FKmsvsZXamij%2BnyouHryXwT1RmbVBAuUwloQZAY0z8FZo0DixTMdbLEkfJ4Iy8t2LUt0TS2VRGxxN7RGVT%2BZrLWpvNMw3JxC9pvx1m5Xu4l32sCvGSwraoRDu4rgUSN7u3hxJwcCw%2Fsz5jEhpgUkCIKUZTB1DU4ArKGRkXO9z5qMOZJA5z4WrFdqO7%2BnoJrLF3AWE%2FolGStAhLPL%2BwJ5I3LW%2BVcfDIG%2BYN3REi0XiBSfl3D3SQ7PiYA%2BhzcNB98WjOFrkq8ehNLGSyFtJBJkOL2SNBtKaD9uFtrJCD%2BzCjpnyaGfVWdEOKQngzGwM2mbC2WlckbhMPCJ38MGOqUBWTrdZpo4Vc84zri0nIcaWBH6wsMiWQo12Wl1DLv8shWWxiF6MwvF8dH6N3zGHdggGOV%2BNyVJIVSl3WluU6JqrjyOs45Zmipt9l3AiDglUzCdEgec9nLnDhRjujcO%2FenfQU2jHA3AU3eJnd4RL4Suwlu3z4Lm3ywt58aRqC%2BFgujmYjbGGbhydIPX6gVMA1O8TqnMmJ7U3Kb%2FDCaZBWj%2F%2B2PERPVs&X-Amz-Signature=a382d4a149c0cb6104d59ee97bfa8b3f5b69ba281a29ffc6a41e0eda474e64e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
