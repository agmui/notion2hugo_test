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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQKJLC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FJGStnSPjz0FnI9yXMRHwHz%2FWz5wi5fFyDBi%2ByrLWsAiEAlJjqD2Y6c3FnNjZUsZS16i6JKm7VY%2BBtKX5kaezewXMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORwM7w4hb3EBg190CrcA42yZIwzuYk1uHMDKBlsSfceJP%2F%2BTUKrb80ZFMi5phVGOlLFa3c2n0bMREJuis0Y9igC%2F2XnOaOHSXBdWt3fyDCGJbSq0L5JcuKB8vHVD4icdvZRC7s29FZF8VzujJpUozf6BfGjG3u5%2FMZ%2B%2F1tNbTljknA6RSKqDL7njrLrVDTs1BaPimPzo5TxLXQ2dl5LhfrLtxKw%2BeUP6MxfgVi7o4oopAQTNKbQG2zalBbFb7M5CXTUCtCLvswacyByeDI%2F9TJVRrrdq5PQpiVeezDk9azvZhDGM8Lp5iibLx7xLLIyn543Ztl17VjDN%2FwZFPG%2B10c0GqR%2FpL5wZGgG02rNPPdXm6vtB0BfHtuia0JS7lhfUlFNt8Wc%2Bm2IKCWkljsONJjtxi9nQEk%2FbqhwONBVvp93OEc5NxaEIYE2jhFlvyFGV42laZ2AQeVKteAbASBGY7QkCyUu0yJBhRvwzpPI2aOmtbhQqB74EJtVUvWI04sfGilt4cUg42HswT61Hxi3ul3P4fYgaeB0SwNXAp9q%2F0InHg5xqYKB3IQQmbuDnLr29a9GURzoXJ1LaJ%2BU0ooGyb3RVRzJRtEA38J2gdZagl2ntdqMvAt4hhlg7Obp6DZfRoGjTqXNBd%2FopxDSMMbGsMEGOqUBG5%2FJLDDuO6e%2FQYkHpZ6i0ueqCh%2F5iTZLpyMu2W55RQlw%2FM3%2BCMqczZTLyQ7xAq8Lskidh66HOcFGjLQ2ZRhMnBXSUqK3I1GvRUVIBYOKfYgXBm7bv507Z5Cmg28xrsL646VyqX0NLOInULI2e6hnC11zWGeEzXFlVPTDgfBY%2FNAAhJaKIa0a2OS4GdXBaFsa0kecyH3gei6FhGLk%2BhLIVsQ9MS6O&X-Amz-Signature=a5d35bf59b267280c86d3b354a2351206d479e8846939419395610b73ac1e8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQKJLC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FJGStnSPjz0FnI9yXMRHwHz%2FWz5wi5fFyDBi%2ByrLWsAiEAlJjqD2Y6c3FnNjZUsZS16i6JKm7VY%2BBtKX5kaezewXMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORwM7w4hb3EBg190CrcA42yZIwzuYk1uHMDKBlsSfceJP%2F%2BTUKrb80ZFMi5phVGOlLFa3c2n0bMREJuis0Y9igC%2F2XnOaOHSXBdWt3fyDCGJbSq0L5JcuKB8vHVD4icdvZRC7s29FZF8VzujJpUozf6BfGjG3u5%2FMZ%2B%2F1tNbTljknA6RSKqDL7njrLrVDTs1BaPimPzo5TxLXQ2dl5LhfrLtxKw%2BeUP6MxfgVi7o4oopAQTNKbQG2zalBbFb7M5CXTUCtCLvswacyByeDI%2F9TJVRrrdq5PQpiVeezDk9azvZhDGM8Lp5iibLx7xLLIyn543Ztl17VjDN%2FwZFPG%2B10c0GqR%2FpL5wZGgG02rNPPdXm6vtB0BfHtuia0JS7lhfUlFNt8Wc%2Bm2IKCWkljsONJjtxi9nQEk%2FbqhwONBVvp93OEc5NxaEIYE2jhFlvyFGV42laZ2AQeVKteAbASBGY7QkCyUu0yJBhRvwzpPI2aOmtbhQqB74EJtVUvWI04sfGilt4cUg42HswT61Hxi3ul3P4fYgaeB0SwNXAp9q%2F0InHg5xqYKB3IQQmbuDnLr29a9GURzoXJ1LaJ%2BU0ooGyb3RVRzJRtEA38J2gdZagl2ntdqMvAt4hhlg7Obp6DZfRoGjTqXNBd%2FopxDSMMbGsMEGOqUBG5%2FJLDDuO6e%2FQYkHpZ6i0ueqCh%2F5iTZLpyMu2W55RQlw%2FM3%2BCMqczZTLyQ7xAq8Lskidh66HOcFGjLQ2ZRhMnBXSUqK3I1GvRUVIBYOKfYgXBm7bv507Z5Cmg28xrsL646VyqX0NLOInULI2e6hnC11zWGeEzXFlVPTDgfBY%2FNAAhJaKIa0a2OS4GdXBaFsa0kecyH3gei6FhGLk%2BhLIVsQ9MS6O&X-Amz-Signature=c13a735b9e5ad472b0f0e0b03ef050202cb55cb1bf91c6a0f9b5655f1e3dcda3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQKJLC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FJGStnSPjz0FnI9yXMRHwHz%2FWz5wi5fFyDBi%2ByrLWsAiEAlJjqD2Y6c3FnNjZUsZS16i6JKm7VY%2BBtKX5kaezewXMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORwM7w4hb3EBg190CrcA42yZIwzuYk1uHMDKBlsSfceJP%2F%2BTUKrb80ZFMi5phVGOlLFa3c2n0bMREJuis0Y9igC%2F2XnOaOHSXBdWt3fyDCGJbSq0L5JcuKB8vHVD4icdvZRC7s29FZF8VzujJpUozf6BfGjG3u5%2FMZ%2B%2F1tNbTljknA6RSKqDL7njrLrVDTs1BaPimPzo5TxLXQ2dl5LhfrLtxKw%2BeUP6MxfgVi7o4oopAQTNKbQG2zalBbFb7M5CXTUCtCLvswacyByeDI%2F9TJVRrrdq5PQpiVeezDk9azvZhDGM8Lp5iibLx7xLLIyn543Ztl17VjDN%2FwZFPG%2B10c0GqR%2FpL5wZGgG02rNPPdXm6vtB0BfHtuia0JS7lhfUlFNt8Wc%2Bm2IKCWkljsONJjtxi9nQEk%2FbqhwONBVvp93OEc5NxaEIYE2jhFlvyFGV42laZ2AQeVKteAbASBGY7QkCyUu0yJBhRvwzpPI2aOmtbhQqB74EJtVUvWI04sfGilt4cUg42HswT61Hxi3ul3P4fYgaeB0SwNXAp9q%2F0InHg5xqYKB3IQQmbuDnLr29a9GURzoXJ1LaJ%2BU0ooGyb3RVRzJRtEA38J2gdZagl2ntdqMvAt4hhlg7Obp6DZfRoGjTqXNBd%2FopxDSMMbGsMEGOqUBG5%2FJLDDuO6e%2FQYkHpZ6i0ueqCh%2F5iTZLpyMu2W55RQlw%2FM3%2BCMqczZTLyQ7xAq8Lskidh66HOcFGjLQ2ZRhMnBXSUqK3I1GvRUVIBYOKfYgXBm7bv507Z5Cmg28xrsL646VyqX0NLOInULI2e6hnC11zWGeEzXFlVPTDgfBY%2FNAAhJaKIa0a2OS4GdXBaFsa0kecyH3gei6FhGLk%2BhLIVsQ9MS6O&X-Amz-Signature=090cb335c34c8987b42d6de40eca9ed1e758fdeca66a600e724d1daef729eb82&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNT2TK4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP1ZGEnpYWEukmDuscvJ7LLsKY7pO385DYjVPiaKlqOAIhAJo4K8hDYuIznqD%2FQiU0D%2BzNRiDW0MA0rbOq3%2BQWZ%2FYsKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSYOWr%2FLKmcL5V%2Fp4q3AOoGUUEPNDTiQyoDC3iNgJx7OXw%2BMK%2FrfQQkCW4g88SndcS3Wl0BgQzsiS8Einu3lEgqkJBpGYeRRl6qKzC4aIApDfSh6gToBXBEl84MddFAwXJWatTMLiyCWpfG%2Fnv5d5K9hBS5xk4HuWIcbRJceGCxEUBBmIfijG%2BPMHMSVH00d1cHG2k02SSENFAqkDDlbkCfwwst48uaNBgPFASMV3yqlsEvi5NNQrf%2B8RRk9mhBMg7cT9gxRabYM6LHjsrVCzGKoTvrzs5v3h%2BpSRqvhoG6M0T%2FlWg%2FgtFWBdPDLmtf4c2Bu%2FbFPb7QlxDXULSq%2BV3uzx5CbgYbrR0Ki6OQ4ldU%2FE8%2B%2BVsR4CFRLXUd2zIi3atlPgIA8%2FKB7pcPDyfpAGIWugwp4iqltfebTtYKdzd8rSPvRdzljnce3Z4tOZcs%2Bp7S77J42ZwDg5aO3TnDnY%2FjeQM%2Flw7grcn8YDCUiuYEfAL5gqCGasRcwCbdp%2FSZzIxwA3Tl8r0XS6pYZffzpHHXshgDDHLdM2zBSUrZGEImlbaNMBS3rtV2LCF1UEZIMy2r1jpZ0ZvWA2jtyd0zC0awfU8OwLhd5JFFPlFPe0KPAucaQncm5%2FYDqhNvxuJNdjouIGj2s1tUVj4ADDHxrDBBjqkAa68ynutr4aHSxavPEHkS4rm4Ahwnu%2BEeP9KT7bKOKH3s838OoZ1RSiokyLhyKdaDDBE6ceYlDYKh3MdyEP%2BEZi%2BWtoDxs6FVav6GnsY%2BViLcz%2FjVOgzRzJy1sLvA%2BSaPnMiXfcE6JDMkWL5BMD%2BB1nHRZwiSFHG0Kzjsc3Fk9MKBz%2FmT3J2xyIMGuc6xUx%2FVRw7HF8MUuKRgvzR5JK4VyHOUjIR&X-Amz-Signature=4421fbe6f430df6d2c91b9e6671f8a67f55879b759ea56d47deac536b76f4ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRIEA4UI%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg66uwtvuyH%2FBKieiplf0XGzN1MTgF9Vu2M53%2BU7UbWAiEAigvuFOf9UPrFhVYbvSt1gFAdkW7j6eW%2BoFIL%2BDHB%2B18qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmD%2FTC9HowK3M%2F16SrcA0nkM2A82JctPm0RubrwToKzuJRGVTyx%2F9AmrYrjobZ4vLsQV4GbeTvEdIZAU12zHBj%2Fd6T0h9lPMVGuTE5ua9AkHuBpDROGHnU6GjWYwGf2XEYxFuCIO5Q7dtQUFhG%2BLSkQ7hvAfMGyj%2B1Ya7bzk6x%2FfA%2FGy4hEIFyxwReh%2BNNIomo3mrgtFHXTgb0FFIdTvPEHElG4UGxmKVuZHnoipCgP0dMBeFRxD%2BNYEyv2cZ60WWfrqVxFXPmugKY4JFV9Vb6G%2BTM3LXkQRiIvmhjUunMC4mB78iLI95SkidHsOfKYh22t2nMAr4TB3WJTg5vsnD5Q403qNzrg%2FXEV9P3wbt5%2BKaAOo8FWBfFCs5uCP9hmH011u4%2Bzzu3cckzsOgsZ3%2BeZy9rNIHwDsS1XaLGLHcYkYdlQgi3C5CuRLEgPZ7fEoBrSJO34S52iZiIa4N8v2Bw30ucR4uhDmNYEr7xtYDLM%2FoLhQqA8avVDf55grH2pFUKsxL4DVdhA4QQ4Sv7U3QO2cXnFcGRU9SpOLacjuz3AINvAFil1zYGUQ%2FyEwcxn7wKxeIJOoyAq%2FX2KI73tBEDMS9MJTcvM%2BLgv7k5S9o75PUPdn6gaMY%2FEMlqyS%2FRjyDYX3Xettqkt4e8wMNrGsMEGOqUBNdf5ReZDBk9meQ3tAzZLLtdlnBfwcHeLvypuVsTaEnXXnUJ7KDmWCCZDdpDPxbAW5mOxJiGw7IBwhCZpD90QIpPnNe1MTEB6tWDZOAAYd%2BSCMq4CKnMw6UYRbrezp%2BSVgVHVpbcD0hWAFFlfIQtSBiTVI9TP1hfwnIGIFf%2Bm6pK3Z4P6EapqNH6%2FkTJws81CHbSdKjDvga08fhgKrcfySCc2AXC4&X-Amz-Signature=b90c1c7490c38b4137720202c39504bfaab0b4623760982206cc19ba919801c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQKJLC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FJGStnSPjz0FnI9yXMRHwHz%2FWz5wi5fFyDBi%2ByrLWsAiEAlJjqD2Y6c3FnNjZUsZS16i6JKm7VY%2BBtKX5kaezewXMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORwM7w4hb3EBg190CrcA42yZIwzuYk1uHMDKBlsSfceJP%2F%2BTUKrb80ZFMi5phVGOlLFa3c2n0bMREJuis0Y9igC%2F2XnOaOHSXBdWt3fyDCGJbSq0L5JcuKB8vHVD4icdvZRC7s29FZF8VzujJpUozf6BfGjG3u5%2FMZ%2B%2F1tNbTljknA6RSKqDL7njrLrVDTs1BaPimPzo5TxLXQ2dl5LhfrLtxKw%2BeUP6MxfgVi7o4oopAQTNKbQG2zalBbFb7M5CXTUCtCLvswacyByeDI%2F9TJVRrrdq5PQpiVeezDk9azvZhDGM8Lp5iibLx7xLLIyn543Ztl17VjDN%2FwZFPG%2B10c0GqR%2FpL5wZGgG02rNPPdXm6vtB0BfHtuia0JS7lhfUlFNt8Wc%2Bm2IKCWkljsONJjtxi9nQEk%2FbqhwONBVvp93OEc5NxaEIYE2jhFlvyFGV42laZ2AQeVKteAbASBGY7QkCyUu0yJBhRvwzpPI2aOmtbhQqB74EJtVUvWI04sfGilt4cUg42HswT61Hxi3ul3P4fYgaeB0SwNXAp9q%2F0InHg5xqYKB3IQQmbuDnLr29a9GURzoXJ1LaJ%2BU0ooGyb3RVRzJRtEA38J2gdZagl2ntdqMvAt4hhlg7Obp6DZfRoGjTqXNBd%2FopxDSMMbGsMEGOqUBG5%2FJLDDuO6e%2FQYkHpZ6i0ueqCh%2F5iTZLpyMu2W55RQlw%2FM3%2BCMqczZTLyQ7xAq8Lskidh66HOcFGjLQ2ZRhMnBXSUqK3I1GvRUVIBYOKfYgXBm7bv507Z5Cmg28xrsL646VyqX0NLOInULI2e6hnC11zWGeEzXFlVPTDgfBY%2FNAAhJaKIa0a2OS4GdXBaFsa0kecyH3gei6FhGLk%2BhLIVsQ9MS6O&X-Amz-Signature=c65f4b5132a22ba018a3118cb189f710d2305ec914771d86566bc096b1316041&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
