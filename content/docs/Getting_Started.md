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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYL24AFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOcbGIQH4rKj74INmrsCn8KDZBFi%2BjlnAPY5Ljky%2Bg6AiEAlxYCPrTd3ptsWme73lTPBvUkdt8ut8H9qMC1Ipxe6X8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKQZDD%2BRx%2FqMye4IUircA4%2FDemxWK%2FT8j7rbkexnMCrP0T6WFLok8ETsJ4xVqiOi2dXRCj%2BHg6Wmq3ZTXWGheq0PXpau83Fh0%2FudwNujQxfT63nQ0J15kXJC9hDugRQPWr9ocUm%2FMztgHg%2BdGyiHOxEx21J4zBk1XOOblMxj1%2BvCMTtAzPswxG9GdcgEAPlhZl4KDz%2BMvfuPVs9RUiMic%2FaLM7nPVyqJ8C5LCI5OS%2F7T%2FiOfi9Ywk4v7PJT9el84UA%2Fy8fLGaPYXmyaf%2FpZTTMVAwerGSGBiVRXUU5DSXuxHLcdk6ES%2BWN2LracWiykkFyldPebhGkA6QqV%2FBW1tB7s3Ra96KdsaJwG5P2ycWqjPLAMqmaINQqhRfuAbubBUx8zeGq8%2FpE18YJPCE8UGSXJnjb3NXZLeZvQVJydohSuurlhhYQKVTGbVJt7NPZVLoXECD1Pw4ZndmDZ%2FGqezdfsx4CjKQUH7jzWF0Hd16SjQK0LT2f1cCpI3X%2BrPrlXtLrPKFp7hFU%2FvhZPPtWSlQ7I6NpPeVlvGwMfckmd1f7Iept3%2FAllTsNYg49ZhDnqoSnF8XFBDr%2BGH5sqLrBSJZbX1haD%2B5ww%2B7LCIbNAdwjRq8%2FPxWkwCUUHQjaZ6P%2BIgP%2BWJaUvd0eMrnURvMMaXpb4GOqUBMArYXzM3a0aLzjhQK9PrBFTcV%2FyxvkIOtESDVDojhlnFpp0QRQ3%2FUVur%2Fs5RkofMcv%2Fa7KGF7Cesb48%2Fu%2BIYwkqOqoNadLqUrs33o3oeEpr8Lcd5OpgOqXzRVLTxwRMALv%2BXMVuP%2B0%2F10IHkI3Vth%2FTDQfMF3VinsjSkHNR4LEyvWpW%2FN5l%2FSaOLMPaiYpgDf8FcwxBAO%2FBJDyN3D3WGapMqVhWo&X-Amz-Signature=e2fbdc6913c4c442a9ba123ac9e282cb6b206f38bd90944e90032b73f78478d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYL24AFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOcbGIQH4rKj74INmrsCn8KDZBFi%2BjlnAPY5Ljky%2Bg6AiEAlxYCPrTd3ptsWme73lTPBvUkdt8ut8H9qMC1Ipxe6X8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKQZDD%2BRx%2FqMye4IUircA4%2FDemxWK%2FT8j7rbkexnMCrP0T6WFLok8ETsJ4xVqiOi2dXRCj%2BHg6Wmq3ZTXWGheq0PXpau83Fh0%2FudwNujQxfT63nQ0J15kXJC9hDugRQPWr9ocUm%2FMztgHg%2BdGyiHOxEx21J4zBk1XOOblMxj1%2BvCMTtAzPswxG9GdcgEAPlhZl4KDz%2BMvfuPVs9RUiMic%2FaLM7nPVyqJ8C5LCI5OS%2F7T%2FiOfi9Ywk4v7PJT9el84UA%2Fy8fLGaPYXmyaf%2FpZTTMVAwerGSGBiVRXUU5DSXuxHLcdk6ES%2BWN2LracWiykkFyldPebhGkA6QqV%2FBW1tB7s3Ra96KdsaJwG5P2ycWqjPLAMqmaINQqhRfuAbubBUx8zeGq8%2FpE18YJPCE8UGSXJnjb3NXZLeZvQVJydohSuurlhhYQKVTGbVJt7NPZVLoXECD1Pw4ZndmDZ%2FGqezdfsx4CjKQUH7jzWF0Hd16SjQK0LT2f1cCpI3X%2BrPrlXtLrPKFp7hFU%2FvhZPPtWSlQ7I6NpPeVlvGwMfckmd1f7Iept3%2FAllTsNYg49ZhDnqoSnF8XFBDr%2BGH5sqLrBSJZbX1haD%2B5ww%2B7LCIbNAdwjRq8%2FPxWkwCUUHQjaZ6P%2BIgP%2BWJaUvd0eMrnURvMMaXpb4GOqUBMArYXzM3a0aLzjhQK9PrBFTcV%2FyxvkIOtESDVDojhlnFpp0QRQ3%2FUVur%2Fs5RkofMcv%2Fa7KGF7Cesb48%2Fu%2BIYwkqOqoNadLqUrs33o3oeEpr8Lcd5OpgOqXzRVLTxwRMALv%2BXMVuP%2B0%2F10IHkI3Vth%2FTDQfMF3VinsjSkHNR4LEyvWpW%2FN5l%2FSaOLMPaiYpgDf8FcwxBAO%2FBJDyN3D3WGapMqVhWo&X-Amz-Signature=9a4eab510c002adaacbc1e1edba011902783f5cf8410c089ecdce59918ba3945&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STN2C4NM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFo%2BzgiolKbmTVxqbPmGJetIPXiS1CgaRHazNlmX6UoxAiEAjDipDkzMjnktZuWl4Xbm9sArURhMAwPbhDIJHZtqKKsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDA1pKz9jWZ1RbJLcaircA%2FtgD5IT3tkaAm6jZMno3ks0nphHjCR8XknFlM7SJTgIIN%2FGx36FHBb%2FXRDU0q7tMUUTnEumV1AOtbkLe2PDLbJ%2FH4hjA5fx9oERYYNgeQdcjmuIA42Z4WqVcYQlyOTorJpFX%2BWIDZDVmddqGfXcT0lHwU6thLFNFk3WwG2saLEgn5MrG0%2BFJxQr8CVjxAq4qKSDFaL9yvaV4RBpLhRHhEml0BvyzqZu%2FqwDkwT%2FYVknhkjxsmkgbap8T4CaReRtRYal7OpTzsGwkc9rmd%2BQMOstQ6OxmMMqZC64fghpeXb95%2FRJkWADnYH4bjQLo97ZUo8GR9nS04cNgv1V5Oo%2Fe9%2FfAcsIL3kHwuPF0mYYtZpGSNV2UcrYshe4P1xZGe%2Bbf7%2BMXCWgjWBXcJJ7R1sJT6qgnLOr0vP7s7%2FjocuJQW3s5Zb2s%2BpsAohrFOg4HX1BQHczSpBzaQQdnhxKyCJ36AJNHXAowYCfcXzmEkR4e6aKRqUSordedkn5xWE3b5GRrLTUlLDuIdeb3M3GvcJeNAT1In1BF%2BtQsv2S3HTVD9Y1BsbOd4nbpNV2y2K%2B0tyBbpIC%2F95xF5VYZ59Grvvc%2FcB35UxslfbkICKLyYYNOM7FLhmUgYqoHKG%2FJfI4MIKXpb4GOqUBuL7gdJm8CNZtozgv93pWbgDEWikpA%2FjajFTdsuzmaZK1ysVche%2BO9ovJmJZXuWVJ6D%2FVZwc20iC%2BlCypJm%2B5t01K47iUcA6WtQT8Zhl9Xqjr6Ej8SpCW9D%2Bz4EfUPqysMUT%2BmTEHwVSler%2BMA2xvRPYo4FojsVnNJZ%2B%2FKDbaNBC%2BMBwKT%2FL%2FEUPImvYtssvcgINxtLDymvjjg9uAw07yS59t8Qrf&X-Amz-Signature=82367c74d0b3709e6e8f85abcd60b560d972092cc1cc8fea0190d44017ee50be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK53VU67%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8qvRrbsosuNc%2FwRZQhQaxULYLJWaGfxwFA5Xi0tGrUAiEApQEcLYaSr6sdEom%2BNR5w17Wh6eCv6tstjqDIQJISiWYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFwy8yfHPp2vdvqSFSrcAw3KkqTZRbmE%2BhhViHQvUM2p6sC6MSzgZP2z6RjrvzQsFV8wZm0ChmhB1NrV0PnqCn4HJUQ7BU13HscHryHvWTbXtDQ%2Ffokeh92hXACupUxs4eDPpkjR6RGIqVuEFKb5ObT1adGHFqnhmZLJJnTDb5YChRlsYe5G7IRTLh66671wOrlQQIahpB5nj85MLw3cGtPDw%2Fz8ZUyplJjHiNsgBAvtWmPJyHSC2PTu9M%2FPIOc44Q6kewr6LnVMw30gpKcpepicvVkfeK9%2FYZhyElaq9srCcY818jJVlXCOZ1TWCMcgBbO3RSyn7qDsTTflhrKBMdGwrV97KGavIADU1uxFzaTaaORQFxIIywvY0PBlPumwMdW%2FqVGwNoa60wmmiFx%2B48Xu%2FAcOV1Ebd%2F3w0Eeu%2FAtdEYYP7BgM34CzwDS5mStONiCg0mP16O8bRQXsS%2B5%2B%2F973X9%2BCk8y2pnMJW4OyhSavFbDuPWBPIKStiWFftfmGQNoChf8mXEeMtcA3GyF2VLbVEk9uXCtLdDFdaaVcaaYdIbe3B4CvYoLKpQC1Sq6Zu9lDKURUqYCwGQkF6cQ5Ga1r24itzlB1FNf%2BhiXEM6OveaE5Y3pnfbAWrZoI%2B7gVnWNEuJ18EKpM2EjvMP6Wpb4GOqUBTKkNI%2BsZJXyiJ2FFLM1B3l5GPKbh9nDKPZhy23Hypd%2BEaVgPjqUAJ1X8rS2nMqHBU902Uf2oSHxAA%2Bd3q%2FFg5xdDn8FAqtvb3pRROAZ5XVU58kyl91%2ForOnBHjiFMTeiNCOHaUKZ6XVLAmVGlEmbEZ8YlYfz9pRUb57qEjLsTkZs%2FH5iA08KeKRccTzRCNQwv9ScxNAx1lbzWZcoyKi1LSiTZKLh&X-Amz-Signature=603a350a8c116ce21ec134476bc58e47da887a2df0d31bf4b7f029875bb96d21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYL24AFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOcbGIQH4rKj74INmrsCn8KDZBFi%2BjlnAPY5Ljky%2Bg6AiEAlxYCPrTd3ptsWme73lTPBvUkdt8ut8H9qMC1Ipxe6X8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKQZDD%2BRx%2FqMye4IUircA4%2FDemxWK%2FT8j7rbkexnMCrP0T6WFLok8ETsJ4xVqiOi2dXRCj%2BHg6Wmq3ZTXWGheq0PXpau83Fh0%2FudwNujQxfT63nQ0J15kXJC9hDugRQPWr9ocUm%2FMztgHg%2BdGyiHOxEx21J4zBk1XOOblMxj1%2BvCMTtAzPswxG9GdcgEAPlhZl4KDz%2BMvfuPVs9RUiMic%2FaLM7nPVyqJ8C5LCI5OS%2F7T%2FiOfi9Ywk4v7PJT9el84UA%2Fy8fLGaPYXmyaf%2FpZTTMVAwerGSGBiVRXUU5DSXuxHLcdk6ES%2BWN2LracWiykkFyldPebhGkA6QqV%2FBW1tB7s3Ra96KdsaJwG5P2ycWqjPLAMqmaINQqhRfuAbubBUx8zeGq8%2FpE18YJPCE8UGSXJnjb3NXZLeZvQVJydohSuurlhhYQKVTGbVJt7NPZVLoXECD1Pw4ZndmDZ%2FGqezdfsx4CjKQUH7jzWF0Hd16SjQK0LT2f1cCpI3X%2BrPrlXtLrPKFp7hFU%2FvhZPPtWSlQ7I6NpPeVlvGwMfckmd1f7Iept3%2FAllTsNYg49ZhDnqoSnF8XFBDr%2BGH5sqLrBSJZbX1haD%2B5ww%2B7LCIbNAdwjRq8%2FPxWkwCUUHQjaZ6P%2BIgP%2BWJaUvd0eMrnURvMMaXpb4GOqUBMArYXzM3a0aLzjhQK9PrBFTcV%2FyxvkIOtESDVDojhlnFpp0QRQ3%2FUVur%2Fs5RkofMcv%2Fa7KGF7Cesb48%2Fu%2BIYwkqOqoNadLqUrs33o3oeEpr8Lcd5OpgOqXzRVLTxwRMALv%2BXMVuP%2B0%2F10IHkI3Vth%2FTDQfMF3VinsjSkHNR4LEyvWpW%2FN5l%2FSaOLMPaiYpgDf8FcwxBAO%2FBJDyN3D3WGapMqVhWo&X-Amz-Signature=a8ff86cc15686da9a53de65e30979433d48280c917e56ef077f5b63e918de2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
