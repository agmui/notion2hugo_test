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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMO7IJOW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD63gDTiKLtIQgcgUp%2Fc15fedRkAO90OHSIZIimhybUYQIhAKhQWdDwSrczNo%2F1nsqp6TWd4guAINjV0rFQ9WTeLOyGKv8DCC4QABoMNjM3NDIzMTgzODA1Igz442WD2Al7B4Yxx00q3AOccW6VD4T2F3rOFYXzuGp59M3auq2W3MWk5uuRekFDYMzYpLFs8rF3rUyuF2GKZJsOxH%2BbOmdBshZ4%2FQMoaDe1mKis9ILL6X%2FCPpDrBYGBdxrfxK1Iz2Q5R7mP5kMZifTU8TVDhdTce%2B4cNNaUZBpkmPXHz9R09v3e0D38R9TtXztMlDdJh9Onn%2Boqpd%2BExoEsAYCv06R4p3xwbkpX5HxD4NzOq4LujDW%2BkY5aBi1RtjrZ6Bt9df6AJMpwH2cKHySwEHfnE9d5QvfOEju2SmFc6yp7uFval%2FzsxklZV7MPuNniBZWJ5zEOtMDMpZ9TJW28R7oCg0DKthGqHxx3vR2WGDuQ2PEd0%2FRIiKzva5QtocmcoanwNdsORkUGIuSumMs6IkDGHNAw75SUtMnt%2Bl9FQ%2BcWvd1eUf9ib4wiQH0Z%2BnPnCtKBq2DFzzhYKpCArctdkK2K2bXO2jXCzls6NxM5TmdnE0o%2FVD1uidyCaM2F%2FgedHCOBqUFT79JFV5q%2BBxMcJgnOEvb88HaSpCfuBU%2F2DXdUk8gQwbUj2upt%2FG3p9LBVE2CG9BR1lMWX4xKP3nG%2BMBl%2FNq4gtzRptO8MGqD9QNKSZk93fgHpKm1kH4BLhVG%2FOLltVYuek8hMGTC2n4i9BjqkARTyEJnisZYch%2Fvk8xfTAp210ux3GZ4P3aTIIkgHXDVyx1J3lvePOzsUFpSuthqDiQMULJTXB3qKvYE77DcNBiM7UxuwKaxClCfjm2xxLseTBz52OT2CCC0QnZZ4OKQQ2xZuqAN7vOtScRsSN44nMYh9obxCqUk9jt3kIInzXYhvWDd4y9VFLeBuJ4x1Cv4Qf7Uvr%2BCudpcArIYFFlw4CkqCyboz&X-Amz-Signature=3bea2449d1a503cb581ef55debacf24b85802faec0cde81a43fe15df5a96fe5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMO7IJOW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD63gDTiKLtIQgcgUp%2Fc15fedRkAO90OHSIZIimhybUYQIhAKhQWdDwSrczNo%2F1nsqp6TWd4guAINjV0rFQ9WTeLOyGKv8DCC4QABoMNjM3NDIzMTgzODA1Igz442WD2Al7B4Yxx00q3AOccW6VD4T2F3rOFYXzuGp59M3auq2W3MWk5uuRekFDYMzYpLFs8rF3rUyuF2GKZJsOxH%2BbOmdBshZ4%2FQMoaDe1mKis9ILL6X%2FCPpDrBYGBdxrfxK1Iz2Q5R7mP5kMZifTU8TVDhdTce%2B4cNNaUZBpkmPXHz9R09v3e0D38R9TtXztMlDdJh9Onn%2Boqpd%2BExoEsAYCv06R4p3xwbkpX5HxD4NzOq4LujDW%2BkY5aBi1RtjrZ6Bt9df6AJMpwH2cKHySwEHfnE9d5QvfOEju2SmFc6yp7uFval%2FzsxklZV7MPuNniBZWJ5zEOtMDMpZ9TJW28R7oCg0DKthGqHxx3vR2WGDuQ2PEd0%2FRIiKzva5QtocmcoanwNdsORkUGIuSumMs6IkDGHNAw75SUtMnt%2Bl9FQ%2BcWvd1eUf9ib4wiQH0Z%2BnPnCtKBq2DFzzhYKpCArctdkK2K2bXO2jXCzls6NxM5TmdnE0o%2FVD1uidyCaM2F%2FgedHCOBqUFT79JFV5q%2BBxMcJgnOEvb88HaSpCfuBU%2F2DXdUk8gQwbUj2upt%2FG3p9LBVE2CG9BR1lMWX4xKP3nG%2BMBl%2FNq4gtzRptO8MGqD9QNKSZk93fgHpKm1kH4BLhVG%2FOLltVYuek8hMGTC2n4i9BjqkARTyEJnisZYch%2Fvk8xfTAp210ux3GZ4P3aTIIkgHXDVyx1J3lvePOzsUFpSuthqDiQMULJTXB3qKvYE77DcNBiM7UxuwKaxClCfjm2xxLseTBz52OT2CCC0QnZZ4OKQQ2xZuqAN7vOtScRsSN44nMYh9obxCqUk9jt3kIInzXYhvWDd4y9VFLeBuJ4x1Cv4Qf7Uvr%2BCudpcArIYFFlw4CkqCyboz&X-Amz-Signature=c92d693dac58e3fd3f16bbf6ed8c4c9d565995f93b2bd92020780498674f109a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N2EW6XQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDRxvJgPVBmexvwpynFfpwAKUVfUAYJbf5PiWJl7ucCWAIgGE2pakd05hZXSIwTRnSGale%2ByTOHAFx%2BEZd5QNTA5Ycq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHKR1vpwvOaJZuhVSSrcA6EECmrES3x6%2B5xpMoczBF1IlXWPrXVayx0iasp3jvqarGvpECIV7hHRRHRJA3DGt%2BoU669R0tcrBQ3FS%2BZEtDMPlTj8L4coLh0sTXhay3vp4rEDZNOnFZNm5ZlBQb2be9%2Br0n6fovO9IjC90tBhp8IN%2FLsR0aWQjxxxxTwG%2BULbn6ECz%2FicUoqY5TZZY0JMp1QwzT48%2Fjk7e2zC0orCkBbWO1ShuX8jP1S9aBUqBKJYypZE6wyn0SqCzKHEvHWcSZUPiGSGWdA018HOQ2wAEN4lwQUf4MNlf2HjSnzqvASixENDd51FTQ%2FndbCSwZa9Vk3BbP%2B7%2BhxYdG1OiPee1qNbgrQvFQae%2FYqEtiWP1cu869NEFuEoa10boIwbSvk4%2F1vxAyc2D9jOm3hTf%2BiqOo9H%2Femkrq0v97h%2FOuxMHBUdO8Whv5qGbejF%2BkG7oCpZrNZdMt2H6yNQNJeUzy7anu36mSdFLvn81i%2F7sb3vTVmk0OGe%2B5U%2BPX97NGwqqDI4oKwvHSM9XmJ7DIwBDREhnZy1TYN8jUHi%2BOr7o56eIB5voChHoJ23DMoB5bzLUo99blyBxLnzcuw49nKGaq2ERCCvvnuh9rMhkrGSxav0TYnkfZqRU3a2GdOXtIhCMJKfiL0GOqUBrzwa2lwITc7lQuhGPYI0vYI8e9vCc2yI2K8fxxy0K1BwWJ1sS1%2B6yJlZsoXujNOay6wAbvDdFsVwcNEXsI4iVzs7tCoufm4Ikce9N49rBVvzS25jZZqCO6JPIGhqNsSL4AQbWtapyQN0W69VuRwEIjR4owogE6da8C3eL21cp1x39KlVT4LudRk0W%2BXmPInTLhap7Qc2%2FRcn4MqJH7T5vlRwrOzc&X-Amz-Signature=0063151847a625b94eace6c13f4bfa059f4c8bbc2d8ca143ddb25cd4839f040e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5ARKEM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC27Z0AkVInAhvpbZk8oymoexXTdo3YAGjsdWvZk8EhMwIhAP3VY9V%2BifN2VJ85Xa9kvZL92acJpbnj32hTBh997yQXKv8DCC4QABoMNjM3NDIzMTgzODA1IgwHo5l3KFgG1WV0KUwq3ANtV%2BEcNROaur9ReCNRU6MffhTjrOV65K1DXlMF0NebeUtk5%2BLBe9rt2Hs1IhG4tUB9QrjZWoNzt9EvvIeWip2lJgPufSRDK2hKouPr8MaQU9ljn0cHHxncORMQfgYCyx%2F5FkTtK06z0D1mlpYXvpkKQsDZ5GqiSsvGLXLKYsI1XuK3xQridPeHy1RzWkZY8CphnWWV3OK9e6RxT9LDWd0xo1MiVnojyWnzgUkjxr5VDV1w3hIhIXK0UtaEAlVuSBa73m4xGk12O%2F2BPwVuWlz9drld1RW%2FZtcp2jrAz7rNUtwfObz87YknW7f76tJhM9WFY5Fr0Y4TWKUWK0QFYJJo0TO3tisMmrt%2BTbIoYhBTjvNKSWl6XbsIVB96Bz4XumIwVqaKS%2B5HBzZUhtmi7pQrg7dfv0vceKAcplOEWAcT1Dx%2FFLhWGS7G0UVcn7S0q7eO7tLlptNbkT%2F8de6WB0iUo954mvHAhVk0fJGcVxp5DCJhKhTEMDQm0Xro9qHRgcJEHzdwT4GfazA1Abh4fuTv0KyzVayAVlfdacfxDi6wCfBgHEaXImTWtLUwYBM5z6qXXHKZCWWpSzyQWVsIWs%2BWAl3vQaLwm3Npg1ggFiNZQ78051FxCVmcudmNOzCLn4i9BjqkAWxM12f%2FUTI1qZEDuWrAhrBibHi4HbKsbmqmHS8Sf8xXjEHdA1LJFK43wUtuz%2BqsNkejuwvRCWvHNhTifUMYWC3XAQzFNYRm3L7H4%2FkfJ%2BfsQjLRu4SS%2Fp9sa8mX2ssrgvWXJ29hlkPUCux%2F0YxyPI%2FNV79C7vc7MoFGrB5ZCdIIImDas6cvIIYxtqwbefW9sY7bG1LimzVO%2BKsVFelw0yXdlndl&X-Amz-Signature=90f2221e3ba415930b430b3b8588c091fd9f07932d752b6e881b67f38e2b9a71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMO7IJOW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD63gDTiKLtIQgcgUp%2Fc15fedRkAO90OHSIZIimhybUYQIhAKhQWdDwSrczNo%2F1nsqp6TWd4guAINjV0rFQ9WTeLOyGKv8DCC4QABoMNjM3NDIzMTgzODA1Igz442WD2Al7B4Yxx00q3AOccW6VD4T2F3rOFYXzuGp59M3auq2W3MWk5uuRekFDYMzYpLFs8rF3rUyuF2GKZJsOxH%2BbOmdBshZ4%2FQMoaDe1mKis9ILL6X%2FCPpDrBYGBdxrfxK1Iz2Q5R7mP5kMZifTU8TVDhdTce%2B4cNNaUZBpkmPXHz9R09v3e0D38R9TtXztMlDdJh9Onn%2Boqpd%2BExoEsAYCv06R4p3xwbkpX5HxD4NzOq4LujDW%2BkY5aBi1RtjrZ6Bt9df6AJMpwH2cKHySwEHfnE9d5QvfOEju2SmFc6yp7uFval%2FzsxklZV7MPuNniBZWJ5zEOtMDMpZ9TJW28R7oCg0DKthGqHxx3vR2WGDuQ2PEd0%2FRIiKzva5QtocmcoanwNdsORkUGIuSumMs6IkDGHNAw75SUtMnt%2Bl9FQ%2BcWvd1eUf9ib4wiQH0Z%2BnPnCtKBq2DFzzhYKpCArctdkK2K2bXO2jXCzls6NxM5TmdnE0o%2FVD1uidyCaM2F%2FgedHCOBqUFT79JFV5q%2BBxMcJgnOEvb88HaSpCfuBU%2F2DXdUk8gQwbUj2upt%2FG3p9LBVE2CG9BR1lMWX4xKP3nG%2BMBl%2FNq4gtzRptO8MGqD9QNKSZk93fgHpKm1kH4BLhVG%2FOLltVYuek8hMGTC2n4i9BjqkARTyEJnisZYch%2Fvk8xfTAp210ux3GZ4P3aTIIkgHXDVyx1J3lvePOzsUFpSuthqDiQMULJTXB3qKvYE77DcNBiM7UxuwKaxClCfjm2xxLseTBz52OT2CCC0QnZZ4OKQQ2xZuqAN7vOtScRsSN44nMYh9obxCqUk9jt3kIInzXYhvWDd4y9VFLeBuJ4x1Cv4Qf7Uvr%2BCudpcArIYFFlw4CkqCyboz&X-Amz-Signature=44ad03151c5f5dc60dfc69c5967565d07487abff321d587f1a3b4164dc09fad8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
