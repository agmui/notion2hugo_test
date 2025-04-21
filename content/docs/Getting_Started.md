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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Y6TLBZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs34CoZ%2Barcmuau9XmlxfSM7RanX0uc5y%2Ft9jIO2WLNAiBLspyLly0mZbI8Ef94mK6ltQjjcB1Z9ZqKxhe6KtxwqiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqd9FNwPOXzd46k5KtwDLY2zd69r8MEp8AmjlrMDGkZKNbeaECQ%2FU%2BHIxcYiKonGOO7OA%2FVB5sj09V02dKrIuHAoo4avVOku%2Byr1RSj%2F2r0EwjRYfUSmxBpL851dmVSl2qvPUSttnlUMfbGBiokRKHDSN9fuvXLoEsyBLN80DEz17fxapFZ9OLuLflEKL69JViYWb9SD2McE9O9StPvsjISW0g4H73WjML0bFbVacn%2Fd4bgwUuIN%2Fsuy9GUlTBZLpdJvcluegQMwa%2FHg%2B%2BwieEXP953JTZBe9li6Z9VGglZzxXmKw3BVftQ84CIdQLKhH6TGQvEbldx%2FtrCILqEe%2B7Jq2ctbjuTA%2B%2BpGZF2dy3wfiRVF5loSY6S2TcEDppn1TZVeIwWM6r7B8Wi6nneLkJM59oM3muY%2BvtaKGZTtMbqHPJm%2BEqjfnmLvZ93kyKUebRQ7oknrPHef57NTfyA2dp2Xavt9war6ZR981SajsayhizKw4nG%2Bw4aTx%2B%2Fk2gocZgqQ%2FM4msFdZGPInU8aU6dJdjfGD1xGqCOAlLcFoPhBRPU7iwCfrA%2BIDO%2BDsvk%2FA0nuMj08%2B%2B2Em7CU%2FdKI9fGEIcNaeB7oLeZtBb0BQAzQey244CQR9Z2H6xT%2BlTE%2BjHoq7dqhvDrI2raswqOyZwAY6pgHRt7b6h4xwo4zfapYTipZRQ3tL1aVsRqAFPWgCbFX15RxjsoO%2BVTRIVVuP7GeMeIGJxvlClxN8plHkZO2MT4PvMzUAhN0vCfF%2BdMIuTyS30NcPp4SqA6zCJo5JV3rNz%2BBQUaGpMy6hsjgIVSLU4p5eMJ3eexDiYD0%2FcRaQlxa4g8zsZnYDM%2FGTbhlHq91551TWwG18Okdl0YsL%2FeQGtXCb4DfwGP9o&X-Amz-Signature=799a6ed522e58c6db945491fbb29a82b0420f2c4caa545d21b7f70d84479dcb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Y6TLBZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs34CoZ%2Barcmuau9XmlxfSM7RanX0uc5y%2Ft9jIO2WLNAiBLspyLly0mZbI8Ef94mK6ltQjjcB1Z9ZqKxhe6KtxwqiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqd9FNwPOXzd46k5KtwDLY2zd69r8MEp8AmjlrMDGkZKNbeaECQ%2FU%2BHIxcYiKonGOO7OA%2FVB5sj09V02dKrIuHAoo4avVOku%2Byr1RSj%2F2r0EwjRYfUSmxBpL851dmVSl2qvPUSttnlUMfbGBiokRKHDSN9fuvXLoEsyBLN80DEz17fxapFZ9OLuLflEKL69JViYWb9SD2McE9O9StPvsjISW0g4H73WjML0bFbVacn%2Fd4bgwUuIN%2Fsuy9GUlTBZLpdJvcluegQMwa%2FHg%2B%2BwieEXP953JTZBe9li6Z9VGglZzxXmKw3BVftQ84CIdQLKhH6TGQvEbldx%2FtrCILqEe%2B7Jq2ctbjuTA%2B%2BpGZF2dy3wfiRVF5loSY6S2TcEDppn1TZVeIwWM6r7B8Wi6nneLkJM59oM3muY%2BvtaKGZTtMbqHPJm%2BEqjfnmLvZ93kyKUebRQ7oknrPHef57NTfyA2dp2Xavt9war6ZR981SajsayhizKw4nG%2Bw4aTx%2B%2Fk2gocZgqQ%2FM4msFdZGPInU8aU6dJdjfGD1xGqCOAlLcFoPhBRPU7iwCfrA%2BIDO%2BDsvk%2FA0nuMj08%2B%2B2Em7CU%2FdKI9fGEIcNaeB7oLeZtBb0BQAzQey244CQR9Z2H6xT%2BlTE%2BjHoq7dqhvDrI2raswqOyZwAY6pgHRt7b6h4xwo4zfapYTipZRQ3tL1aVsRqAFPWgCbFX15RxjsoO%2BVTRIVVuP7GeMeIGJxvlClxN8plHkZO2MT4PvMzUAhN0vCfF%2BdMIuTyS30NcPp4SqA6zCJo5JV3rNz%2BBQUaGpMy6hsjgIVSLU4p5eMJ3eexDiYD0%2FcRaQlxa4g8zsZnYDM%2FGTbhlHq91551TWwG18Okdl0YsL%2FeQGtXCb4DfwGP9o&X-Amz-Signature=4556474b9d402e7e096492984b2186009c12dbab77a869fdc84704b9beae10bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUQNBJX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH2graXvkNXCK5KTg1DJ1%2FBi%2F%2Fh0JpeXNhLDmAwMtOheAiEAi3RCZa9yH9yrbt41dPNG7V2AtPjqSgPYJ5UDiswwgoMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqzpzjUajXxJLlsfCrcAxfwV%2FIngSUB0k3Om%2F%2BZMNCThvfRgdiS9D1ncV%2BNGZyxxQ8MTiBgBu7ImOIrkglGhAwOyIICfUcBfPGTuKM23towPe6E47KjqAe0ir47lekKWoJ18JmyWJwdA4Q%2FnR%2F2tZD5glIrFKWwRnmBeiV4%2B8PemQnDsQgu4O4WnL8Gkx%2BuDXzn3Kt5KN46AaXl%2BvIgUBrxVh0C02YIMQKIAbjMqvbW1Zya7awsiXM2xzhgUx2z2GsJmGknOLx3EcPowYRIjjA3dUVD9AwwpwhTzerFp5G6EdWOxUhGw7i271XhzdQWM89SD3m2byqEl7DiQGtMdDsftRca7LMnb8pTexXTxPKctewYKiFTDzZOf7nGoCykKSHw7llx1HKwlRXchR6bgoIKI%2FX%2FhJCpbBOqRj%2FxJEoeVpASLo2ZB%2BCIQrdVn1X89SnAB95UVN%2BAg3WCXz2EScT7fWMHDMMK8fDNt22MRnqHCxXtDIZQ3qXPAUXZNlD%2BICYajSByHZcjE8imh%2BPu6BH7xV8Fdf5fSbU8e%2F%2B8o42%2BIfYP2jgqJpta1ci3jOfFkEmeue4Bl5S0f2aoz1Rv%2FYIpV09hDFyH0ar23KZqYKC%2FgbEz5a2UJSS38kXBiKgakE8mvJ1wkkqGIJPHMP3smcAGOqUBLdAiWa9P%2B3jAR6FxFrsRI98ccWNWb%2BW5UsAS9k2S3kLJSW1XtzuLqwM3Fn1d6YbGOKvav57b7bQHW6dYdIxfPRreBRGijb%2BS9qQHCGtMF%2FpwpEX%2B7oqxYihvtLOCr6v3dOUIArFghj55mWvCvIiJzktXdTF%2BOG23XY50jRdYlEwu5O9DIi3PALsdZ%2F1fjKRx2VMAcpuGAsT5a%2Bjk5oHc8bXIGh%2FH&X-Amz-Signature=d92abe93603e6287989226b58039aa0081d23165d9d9ee9d26c629f62a392c72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFKRUQ2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA5WBxlFvUFBD%2BRVVlUGctZvaoY%2BlzJk%2FQmOQVtcLReMAiEAz%2F25xL0X4uX4Htehso5bvbOp9jVM98oIRece6BWMGr8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTlJqBORqMB23vJ2yrcAzM63lzInhJtuEZz5VBMV14ScFZMmoEWxNsegBShH7VXkXh7sryCQKyNpxAQfhtvTNZBrOli2IsH7dB9Ghuk%2FrYs1aMdZ2eO4VxOsIRxqLdim0TSoNkqfMVqlwGWet7FsclP8OUTJxE%2B%2F4HioffpjZYEWKXMl7clQ7jT7nu0kynZ66CfIQbQZbe%2FSdDVc25ieUtZraFX700MCixvJAkJZPEnqhlXswaJ2%2FRTo8X%2BwZc7zEhFWIEXU8kxv0BLq99RQ119nwWO1hFzkdu5mVXTKEH0snx0TSDxAPPv1wTsqHcOULuJHn54hsmz3Lea1lwyoyoaB2M%2BvDStPJ7xUZ8E6%2F25R2OtYj5xmFCpDBnu7Y0lozwas7drfq%2BdkzJEI1NAy08b1VIXVETmrK3fofyXWwwAZnvnS2IRitf1O6AaE%2Fts%2BwmeoxkXsH05yRC61WHeEAosX9cgnUpHcPpXBbfY38nVRTKXJ4a%2B67Bdk08EH%2BEuR3qyQWrGgzb1%2FIGdSS88cSTNnNYoynABvSX%2Fo65NRnxmUlNPC602Omxhvmz2qo6Cfd2imC9RtjuJvume%2Bo8uMRmew%2BgaOe6P2mw1058%2B2P5DUi9FwUJh7QCzqD64nr5cS73ofD2ORLp3CALXMLzsmcAGOqUBAVPRp8liZLVaerK4%2B56YXTBvbjNxlFcWS92GMwEh6krv%2FLZV8KvT9Ijv8RCfbgKQdb4fprO%2FhT33AhGPyGDHVjnzv7%2FcPMsQzA9JdbpGylabJXuruug%2FCZETac2Ec6s7SrOvwHuVOTXj%2BKnLP7%2BIIq6kOAriRkenchfrgX466tiGwUq66IM%2F21PAp4m2q7oUYZmchndUZwY9Ru9awM8DdFhvGtzI&X-Amz-Signature=e1082874954121866863a56872f18455271af727de81ffe7ed253e77ef6b6b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Y6TLBZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs34CoZ%2Barcmuau9XmlxfSM7RanX0uc5y%2Ft9jIO2WLNAiBLspyLly0mZbI8Ef94mK6ltQjjcB1Z9ZqKxhe6KtxwqiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqd9FNwPOXzd46k5KtwDLY2zd69r8MEp8AmjlrMDGkZKNbeaECQ%2FU%2BHIxcYiKonGOO7OA%2FVB5sj09V02dKrIuHAoo4avVOku%2Byr1RSj%2F2r0EwjRYfUSmxBpL851dmVSl2qvPUSttnlUMfbGBiokRKHDSN9fuvXLoEsyBLN80DEz17fxapFZ9OLuLflEKL69JViYWb9SD2McE9O9StPvsjISW0g4H73WjML0bFbVacn%2Fd4bgwUuIN%2Fsuy9GUlTBZLpdJvcluegQMwa%2FHg%2B%2BwieEXP953JTZBe9li6Z9VGglZzxXmKw3BVftQ84CIdQLKhH6TGQvEbldx%2FtrCILqEe%2B7Jq2ctbjuTA%2B%2BpGZF2dy3wfiRVF5loSY6S2TcEDppn1TZVeIwWM6r7B8Wi6nneLkJM59oM3muY%2BvtaKGZTtMbqHPJm%2BEqjfnmLvZ93kyKUebRQ7oknrPHef57NTfyA2dp2Xavt9war6ZR981SajsayhizKw4nG%2Bw4aTx%2B%2Fk2gocZgqQ%2FM4msFdZGPInU8aU6dJdjfGD1xGqCOAlLcFoPhBRPU7iwCfrA%2BIDO%2BDsvk%2FA0nuMj08%2B%2B2Em7CU%2FdKI9fGEIcNaeB7oLeZtBb0BQAzQey244CQR9Z2H6xT%2BlTE%2BjHoq7dqhvDrI2raswqOyZwAY6pgHRt7b6h4xwo4zfapYTipZRQ3tL1aVsRqAFPWgCbFX15RxjsoO%2BVTRIVVuP7GeMeIGJxvlClxN8plHkZO2MT4PvMzUAhN0vCfF%2BdMIuTyS30NcPp4SqA6zCJo5JV3rNz%2BBQUaGpMy6hsjgIVSLU4p5eMJ3eexDiYD0%2FcRaQlxa4g8zsZnYDM%2FGTbhlHq91551TWwG18Okdl0YsL%2FeQGtXCb4DfwGP9o&X-Amz-Signature=9b72716872b0e8864bac583260bce9c6755743e291296abaa195433005aa9d06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
