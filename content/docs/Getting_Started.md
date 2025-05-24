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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLENRRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICaO80FZs5pEXlWQIZtEOnd0niNE%2BiexLXRpXjayVOxFAiEA76y%2BIE%2Fyed%2F2rkDa6kleKXZ92mZMJ8ct%2Fc5N%2B7anTKAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHc%2FlZqvwv4NOuOUMSrcAw71TX8yxJGGn0K6jR4WplDW92mkuV2Sq9QtSadr1vqyTNHcjHEqIP2KI%2FgFp%2F7hjvOW4jpGD3CF%2FKHQ4ZzTlf3qLA46recsvF4sOKvr6cstAosDaFzSni4xVn%2F63lEhLkeDOUv8RnBjKKb%2B2haUQDzpCzfiKAqF%2FAXrthD8dsUEo2iJ1J1bh1dZ9or6EnO8seTy2VGAkU1QIszZc2MyllOsiPX5R2ZSqWdE4a%2FUqhGRK2Hca4ITijRfv5f0hbvGgroFbxebh36bBwIcCN8bYx3X9lw9pOwovV5nxVG4y4oBPSKjPKVvNwy5IlIoTNdvR7rymgWKyLPqlnUE4B%2FIu9%2B7PDn%2BnMJo1d73hJDJaruJKg7Q0ZrAyLp4aT0f1WWdCMx8TfC7jWhqpCe6NTcQnroseVnBRBo6dKGYBccUPax5hOYQuiPWyDBnFVsOUbZf2XnA2D6V0%2FE7NYrFi5d33WQfoLQ%2ByYijt%2BXUcgiBsi%2Bv7zqEnZ9iVBPaxCpW10vB8P6WdsMW%2B%2FfxuiexyHhUnRqp3pVZ0GpQGcQIKQPJN1klpZQWUk6kOUtkWfo9WZHHPTsSfd62%2FvNT9ohNQmTa%2Bw%2Fg55%2Bvk3U7JUkR8Z2f8KizHXRIR9yEIifOn3lDMJ3Nx8EGOqUBCNTLffIGpXbaMOqcczZC0HSzwUhlLREhgEDenuOiPJTNfRS0s716%2FAIxzYQLWZsWHrGjcbsGHMWxCO74kUVjGd00qC7YIRD4SeTupVKB39Ft23X7JbouUTAOio4d4NodMLkci06fwpXdxNd7NfNRQ252vv2EqOHKdyX1i6JVLpodPiOVX0EAKopfe1%2FZbCszgREgGn21agxhMb6VY%2FwkkOwmrY99&X-Amz-Signature=3537fbfc79b6a4ce1dd5c6f8eb4844bf792b190af7124193e3363ea95bdcae3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLENRRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICaO80FZs5pEXlWQIZtEOnd0niNE%2BiexLXRpXjayVOxFAiEA76y%2BIE%2Fyed%2F2rkDa6kleKXZ92mZMJ8ct%2Fc5N%2B7anTKAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHc%2FlZqvwv4NOuOUMSrcAw71TX8yxJGGn0K6jR4WplDW92mkuV2Sq9QtSadr1vqyTNHcjHEqIP2KI%2FgFp%2F7hjvOW4jpGD3CF%2FKHQ4ZzTlf3qLA46recsvF4sOKvr6cstAosDaFzSni4xVn%2F63lEhLkeDOUv8RnBjKKb%2B2haUQDzpCzfiKAqF%2FAXrthD8dsUEo2iJ1J1bh1dZ9or6EnO8seTy2VGAkU1QIszZc2MyllOsiPX5R2ZSqWdE4a%2FUqhGRK2Hca4ITijRfv5f0hbvGgroFbxebh36bBwIcCN8bYx3X9lw9pOwovV5nxVG4y4oBPSKjPKVvNwy5IlIoTNdvR7rymgWKyLPqlnUE4B%2FIu9%2B7PDn%2BnMJo1d73hJDJaruJKg7Q0ZrAyLp4aT0f1WWdCMx8TfC7jWhqpCe6NTcQnroseVnBRBo6dKGYBccUPax5hOYQuiPWyDBnFVsOUbZf2XnA2D6V0%2FE7NYrFi5d33WQfoLQ%2ByYijt%2BXUcgiBsi%2Bv7zqEnZ9iVBPaxCpW10vB8P6WdsMW%2B%2FfxuiexyHhUnRqp3pVZ0GpQGcQIKQPJN1klpZQWUk6kOUtkWfo9WZHHPTsSfd62%2FvNT9ohNQmTa%2Bw%2Fg55%2Bvk3U7JUkR8Z2f8KizHXRIR9yEIifOn3lDMJ3Nx8EGOqUBCNTLffIGpXbaMOqcczZC0HSzwUhlLREhgEDenuOiPJTNfRS0s716%2FAIxzYQLWZsWHrGjcbsGHMWxCO74kUVjGd00qC7YIRD4SeTupVKB39Ft23X7JbouUTAOio4d4NodMLkci06fwpXdxNd7NfNRQ252vv2EqOHKdyX1i6JVLpodPiOVX0EAKopfe1%2FZbCszgREgGn21agxhMb6VY%2FwkkOwmrY99&X-Amz-Signature=1fe02f6a4a21ec065bd600dc66a9f9a45c5dcb51e2dc82c65e0a2d8eb58dbe1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLENRRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICaO80FZs5pEXlWQIZtEOnd0niNE%2BiexLXRpXjayVOxFAiEA76y%2BIE%2Fyed%2F2rkDa6kleKXZ92mZMJ8ct%2Fc5N%2B7anTKAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHc%2FlZqvwv4NOuOUMSrcAw71TX8yxJGGn0K6jR4WplDW92mkuV2Sq9QtSadr1vqyTNHcjHEqIP2KI%2FgFp%2F7hjvOW4jpGD3CF%2FKHQ4ZzTlf3qLA46recsvF4sOKvr6cstAosDaFzSni4xVn%2F63lEhLkeDOUv8RnBjKKb%2B2haUQDzpCzfiKAqF%2FAXrthD8dsUEo2iJ1J1bh1dZ9or6EnO8seTy2VGAkU1QIszZc2MyllOsiPX5R2ZSqWdE4a%2FUqhGRK2Hca4ITijRfv5f0hbvGgroFbxebh36bBwIcCN8bYx3X9lw9pOwovV5nxVG4y4oBPSKjPKVvNwy5IlIoTNdvR7rymgWKyLPqlnUE4B%2FIu9%2B7PDn%2BnMJo1d73hJDJaruJKg7Q0ZrAyLp4aT0f1WWdCMx8TfC7jWhqpCe6NTcQnroseVnBRBo6dKGYBccUPax5hOYQuiPWyDBnFVsOUbZf2XnA2D6V0%2FE7NYrFi5d33WQfoLQ%2ByYijt%2BXUcgiBsi%2Bv7zqEnZ9iVBPaxCpW10vB8P6WdsMW%2B%2FfxuiexyHhUnRqp3pVZ0GpQGcQIKQPJN1klpZQWUk6kOUtkWfo9WZHHPTsSfd62%2FvNT9ohNQmTa%2Bw%2Fg55%2Bvk3U7JUkR8Z2f8KizHXRIR9yEIifOn3lDMJ3Nx8EGOqUBCNTLffIGpXbaMOqcczZC0HSzwUhlLREhgEDenuOiPJTNfRS0s716%2FAIxzYQLWZsWHrGjcbsGHMWxCO74kUVjGd00qC7YIRD4SeTupVKB39Ft23X7JbouUTAOio4d4NodMLkci06fwpXdxNd7NfNRQ252vv2EqOHKdyX1i6JVLpodPiOVX0EAKopfe1%2FZbCszgREgGn21agxhMb6VY%2FwkkOwmrY99&X-Amz-Signature=eb370d5de43f5e9e2344df51511e89c9eb72eca76b600d81a514949772c93265&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEGUW3I%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIEgEg8JNMqg8ZRi1k1a9blRZhLdRhTk2K2xGX7QwV5KyAiAVGvlKogRQ%2F5Qf71wGKTyrwKBDIIfQ57g%2BFFKwhJWA5Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMpHPi7tIMoyK7MJkWKtwDivwDjAsEYf50sJOB0vdtle1mdQfUcAWNFgbpo%2FMRkqC43qQFagFhcKyKbhR%2BLI1wQD35fnxjunY5rgkI5MMGyvOOKA5CGPCtRbd%2FQd4PTlmBHFHFbUH77b9bthrgz8W%2Bgv8qDb9HjKgqVOG1HWYDyKiRjjxkHhJTTIKJAVMTUZq3MltvcbKEgZrBPWwD%2Foy3khS2ijVKZvXSZ8xl9DGcEndevc2dG7c4je2K%2Bbxq6hxAG1J2vtwR%2Bn7QDeWZteHfLOSaJGbnldi%2BoystCktK%2BooUq8nYE7PdbHlYgT8GJKtxSd%2BGxB3R8%2BYWqokQakBV1ecUivTI7fJBG8RYcckDc5YdIIuF0K9L6UnwmAPo2MoH17ptMKCJRUr1IXb87iaa7BYnjnkbjSA7kizJ5C5PV1ozOSsDBY%2FAsTNw709gurYkvO2uQx5QvTpxJUKQjS3e0ibB3K34dDBDWaP6rJbBA%2FBLh%2BU188qe2hrIRPS8d9PJSQznKmG%2FAPce1pEWQD7SeoN53l2P9Ob5B9bNMw9%2BA5oss%2FlnbvixjTCMGtuLxN%2FjBRJSAQmHaHg0dOQxHKK3h8AqFmQ3s%2BxMjwJXQtajoPPfBjKk4t7eKDw%2BFe4FHFmvWS2G760LFDTQk6Mwl%2B%2FHwQY6pgHUDqw%2F8GUAHLEyAyZRi8DR9Y8l%2BN6VU6xnNZsow6VCQEAWZB2Smw0OyUFOsNnYsz3dTpQV8uXrmNpufWt%2BRF%2F7D6A0i6wIASkxj2T7kE7b0O7lFE8cno5odoFJhWnfoBP0GgReUAV4sVk7pdv5lFTlAXS3up%2Fq4yo32bXQUZHpnf%2BiT4S1%2FWqJo11yeAgD254Opm2JYoVIoVEyal6GiVRlKDVt9Ztc&X-Amz-Signature=03630be664c9f5cce0ef86b2a35503319427911eb263a22ac213d1914154816b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2TQA65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCuwQiddvFoaDQLbVzbnC2uPaPSgVLbQ9xcNRNJEyA8fAIhAN1B%2BSR97bTsm%2FVLortnKtzD%2FGr0PVYxUhZs8jlOoEbQKv8DCBkQABoMNjM3NDIzMTgzODA1IgyBplUR8WsW9AR3VMYq3AO%2FBT42yko%2F1hKSQZw4ycRsNZ6kZPvW7n5wLL%2FbTRsYXAp44bPSyf4QAIo6LeF0EoaAzHIAyeQU04atJbRrFUCO6n5p2L5MiKBA6BUzSelvGMnosk%2BdRwWoIo%2FNyPIynAgug9jEXf8R3tPz03D4zXNO6yyFZUj2s8M8jezJ4b6Y%2BU330aPrXpEn8JLhnAsi7zvkQNz7K7qKli2QiQpTN%2FxLsU2LRyLJnN7ozeDKtGASfKfS1SVHVHuMJWRQ3Nl5fGB9Ediav0WAWVEtKtf7vGlFmliNmXsz1fz9wJIVYo6KGWlCV2oxo2Dp%2BzRaKJpdXu5Xm%2B7TFtgw9babhkeDJhdUmf2CvUnpBoYFfpr8IivS3TJvB8KmxwxhwlRxbBX6vQIu6Ch7Zs0UHSRLwdqQKjfJ5cEckdX4T8d%2F8NJy8cHFLiEu%2BChoP2t9u%2FfsWdeRAD4W%2Ba0V5p9BDfFrm8jPcLK1eAQ3D7afn3MMLtca8Q7HPs%2Bb%2F5dYekywYTsMP5yGWKtCMhUIu8npNDniyNMjVBT%2FStzr6L37l7VjyT1awz9EV4BtgOs4JUxa6SasJzeZQ8AfjansM%2FHVlk3MPmBE%2BZXzCiqT1z3Mt0OK7Orx%2Fb7%2B%2FylgmI%2FHzZ0mCIOjWjD%2BzMfBBjqkAdMy7cPZBDjgUg7ngYVmw%2F3Jjta%2BhO1tJu3UwYrxh3W%2B%2BoD4E3WrgK8ic1IuAbwv8kNWuY09m7B0JEmN5ezyDAW0HcmIqf4Vwr7jdA%2F4jtaESz%2FQKJCKH2pAvGOuBJCV7JqEFM7B2U0kLCHJxXJxVLrzzmrVgqRouwKw10MWO3esjafwzYsN8llPC7Lp0T7UoyAs6vUi%2BPxgfZH4jggrL4uY2xv%2F&X-Amz-Signature=4e5bb5f7ecebb3271578f7369306a493a6077b87cbbe24d8dcadc5ac92b34154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLENRRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICaO80FZs5pEXlWQIZtEOnd0niNE%2BiexLXRpXjayVOxFAiEA76y%2BIE%2Fyed%2F2rkDa6kleKXZ92mZMJ8ct%2Fc5N%2B7anTKAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHc%2FlZqvwv4NOuOUMSrcAw71TX8yxJGGn0K6jR4WplDW92mkuV2Sq9QtSadr1vqyTNHcjHEqIP2KI%2FgFp%2F7hjvOW4jpGD3CF%2FKHQ4ZzTlf3qLA46recsvF4sOKvr6cstAosDaFzSni4xVn%2F63lEhLkeDOUv8RnBjKKb%2B2haUQDzpCzfiKAqF%2FAXrthD8dsUEo2iJ1J1bh1dZ9or6EnO8seTy2VGAkU1QIszZc2MyllOsiPX5R2ZSqWdE4a%2FUqhGRK2Hca4ITijRfv5f0hbvGgroFbxebh36bBwIcCN8bYx3X9lw9pOwovV5nxVG4y4oBPSKjPKVvNwy5IlIoTNdvR7rymgWKyLPqlnUE4B%2FIu9%2B7PDn%2BnMJo1d73hJDJaruJKg7Q0ZrAyLp4aT0f1WWdCMx8TfC7jWhqpCe6NTcQnroseVnBRBo6dKGYBccUPax5hOYQuiPWyDBnFVsOUbZf2XnA2D6V0%2FE7NYrFi5d33WQfoLQ%2ByYijt%2BXUcgiBsi%2Bv7zqEnZ9iVBPaxCpW10vB8P6WdsMW%2B%2FfxuiexyHhUnRqp3pVZ0GpQGcQIKQPJN1klpZQWUk6kOUtkWfo9WZHHPTsSfd62%2FvNT9ohNQmTa%2Bw%2Fg55%2Bvk3U7JUkR8Z2f8KizHXRIR9yEIifOn3lDMJ3Nx8EGOqUBCNTLffIGpXbaMOqcczZC0HSzwUhlLREhgEDenuOiPJTNfRS0s716%2FAIxzYQLWZsWHrGjcbsGHMWxCO74kUVjGd00qC7YIRD4SeTupVKB39Ft23X7JbouUTAOio4d4NodMLkci06fwpXdxNd7NfNRQ252vv2EqOHKdyX1i6JVLpodPiOVX0EAKopfe1%2FZbCszgREgGn21agxhMb6VY%2FwkkOwmrY99&X-Amz-Signature=8e0c64323535c81ec2f3f7857f77679c61ec2a2da8b6bfaf3d33cf3131dc45d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
