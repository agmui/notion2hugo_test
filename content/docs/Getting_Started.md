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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SJTL3A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu%2FHqf2Ik6YPUzo6sBhANrZybfRjTbHOBHxahxl5AO%2FAiEAsYEYlweVZsIawA%2Bk59kH5BdcFgeRi%2BflNNbNmj84HzMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5CvEjMVyYccZ25SSrcAx7FDGKsFLapQBnz93xiI4f6ugdt65WmTLimnqDkv3DHv9Pz5uxov%2FwLP4GJVKR7BsXdIhB6%2FgdrU4lr43sAJBtl8sW7vMjXxponQOWJ94cUaTeKnvAzjuf0M8XsxGa7s%2Fu%2B6m%2FC%2FkeG7qQTvoANtA%2BALUir0vuTq8zGYncDbrcl%2B6%2BBuDguR8HJUIwUfwseqfDU%2FfukQZMUQ2z9A7H9YRb3rQ7HaavaGrODF08H2IRyC0s3sMJv0IXE43FByyUm4WZWI6E6VcN2hvNbkLWTymevXpd77Kuhc7NvX9AtNvh7S20h7wtj9bSp9g5SW%2B61S51kr0ac1lSNTiHbFMW0u9sZwRe%2FB1j2aO640QQb8YMy6xvAG0y1tiBvPJJY08EKvkWq5TJfncIFMRoQ6H8%2B3%2BIUwyxyhpEUYDIlX%2BmrYazHrlEUn%2BgW8Z31lrhUzPWlIbzaTNA1fLM%2FaqFan%2F6wqXnZswFUEfc4BIaf3Rf6UGPL6uTJO%2FK44xIy%2FlIzaAznYMZcT5PXW%2FKnAhCGJYfgzqIEarBpK581YKr%2FkCHo00xRuQ0uNXRIm64iHWQ5XgTfovysgH8pesVzOPL2bFmdfN95U0%2FVZnhupqjeA5UuCDiGZfuSpjr0K6D%2BJCA0MNCy3sEGOqUBUzezbT%2BIaXq8%2FDnQaOxTD5DeRIJJEkCC1Firkq4Ksw39jZEjGRwQoTrth8WUpeoiC28kcXMSZJhmy01DIl5Eyw1fFrricb3fRq5Fw1dRxfuB1DkkawpXcqqQc30J5Oy7QP%2BPOqqQLkQqUNFV8CBUK47MuFLL07L4uYnrA6lTIlqThqh0Lajg8ywfeWZqz5FBld1xfepkXhvtYlTTMSXBP%2FQ3UT3%2F&X-Amz-Signature=c9871d68759eec52eaedb498df0220f95053d664384cb10a5ec2a9b6b656797a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SJTL3A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu%2FHqf2Ik6YPUzo6sBhANrZybfRjTbHOBHxahxl5AO%2FAiEAsYEYlweVZsIawA%2Bk59kH5BdcFgeRi%2BflNNbNmj84HzMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5CvEjMVyYccZ25SSrcAx7FDGKsFLapQBnz93xiI4f6ugdt65WmTLimnqDkv3DHv9Pz5uxov%2FwLP4GJVKR7BsXdIhB6%2FgdrU4lr43sAJBtl8sW7vMjXxponQOWJ94cUaTeKnvAzjuf0M8XsxGa7s%2Fu%2B6m%2FC%2FkeG7qQTvoANtA%2BALUir0vuTq8zGYncDbrcl%2B6%2BBuDguR8HJUIwUfwseqfDU%2FfukQZMUQ2z9A7H9YRb3rQ7HaavaGrODF08H2IRyC0s3sMJv0IXE43FByyUm4WZWI6E6VcN2hvNbkLWTymevXpd77Kuhc7NvX9AtNvh7S20h7wtj9bSp9g5SW%2B61S51kr0ac1lSNTiHbFMW0u9sZwRe%2FB1j2aO640QQb8YMy6xvAG0y1tiBvPJJY08EKvkWq5TJfncIFMRoQ6H8%2B3%2BIUwyxyhpEUYDIlX%2BmrYazHrlEUn%2BgW8Z31lrhUzPWlIbzaTNA1fLM%2FaqFan%2F6wqXnZswFUEfc4BIaf3Rf6UGPL6uTJO%2FK44xIy%2FlIzaAznYMZcT5PXW%2FKnAhCGJYfgzqIEarBpK581YKr%2FkCHo00xRuQ0uNXRIm64iHWQ5XgTfovysgH8pesVzOPL2bFmdfN95U0%2FVZnhupqjeA5UuCDiGZfuSpjr0K6D%2BJCA0MNCy3sEGOqUBUzezbT%2BIaXq8%2FDnQaOxTD5DeRIJJEkCC1Firkq4Ksw39jZEjGRwQoTrth8WUpeoiC28kcXMSZJhmy01DIl5Eyw1fFrricb3fRq5Fw1dRxfuB1DkkawpXcqqQc30J5Oy7QP%2BPOqqQLkQqUNFV8CBUK47MuFLL07L4uYnrA6lTIlqThqh0Lajg8ywfeWZqz5FBld1xfepkXhvtYlTTMSXBP%2FQ3UT3%2F&X-Amz-Signature=68b8750a6ab6b0206946b9fec1cc1d91e440f78a15271f0b226d5a0828c0fe42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SJTL3A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu%2FHqf2Ik6YPUzo6sBhANrZybfRjTbHOBHxahxl5AO%2FAiEAsYEYlweVZsIawA%2Bk59kH5BdcFgeRi%2BflNNbNmj84HzMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5CvEjMVyYccZ25SSrcAx7FDGKsFLapQBnz93xiI4f6ugdt65WmTLimnqDkv3DHv9Pz5uxov%2FwLP4GJVKR7BsXdIhB6%2FgdrU4lr43sAJBtl8sW7vMjXxponQOWJ94cUaTeKnvAzjuf0M8XsxGa7s%2Fu%2B6m%2FC%2FkeG7qQTvoANtA%2BALUir0vuTq8zGYncDbrcl%2B6%2BBuDguR8HJUIwUfwseqfDU%2FfukQZMUQ2z9A7H9YRb3rQ7HaavaGrODF08H2IRyC0s3sMJv0IXE43FByyUm4WZWI6E6VcN2hvNbkLWTymevXpd77Kuhc7NvX9AtNvh7S20h7wtj9bSp9g5SW%2B61S51kr0ac1lSNTiHbFMW0u9sZwRe%2FB1j2aO640QQb8YMy6xvAG0y1tiBvPJJY08EKvkWq5TJfncIFMRoQ6H8%2B3%2BIUwyxyhpEUYDIlX%2BmrYazHrlEUn%2BgW8Z31lrhUzPWlIbzaTNA1fLM%2FaqFan%2F6wqXnZswFUEfc4BIaf3Rf6UGPL6uTJO%2FK44xIy%2FlIzaAznYMZcT5PXW%2FKnAhCGJYfgzqIEarBpK581YKr%2FkCHo00xRuQ0uNXRIm64iHWQ5XgTfovysgH8pesVzOPL2bFmdfN95U0%2FVZnhupqjeA5UuCDiGZfuSpjr0K6D%2BJCA0MNCy3sEGOqUBUzezbT%2BIaXq8%2FDnQaOxTD5DeRIJJEkCC1Firkq4Ksw39jZEjGRwQoTrth8WUpeoiC28kcXMSZJhmy01DIl5Eyw1fFrricb3fRq5Fw1dRxfuB1DkkawpXcqqQc30J5Oy7QP%2BPOqqQLkQqUNFV8CBUK47MuFLL07L4uYnrA6lTIlqThqh0Lajg8ywfeWZqz5FBld1xfepkXhvtYlTTMSXBP%2FQ3UT3%2F&X-Amz-Signature=cd291fca236d6071d6a900c9b00179b29c38682be378449374242b800acf41ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG764J7K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MIhTlxtilh%2Bk5C07pfnYFllx1qMvSJlxzEK18veiTwIgCDg11uRfTVyuz49gynbk2Uj876GeVDAv%2FXCUIoifUSQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC841rtsi1bLRXaV8yrcA%2BjXDUZ5wBWP%2FKEpk8SqC6EnQuuZ%2BjwB3YT3wykAxu5uy00bovr0Ce3VWSoPAeZXRqjPSvUFlXjH%2BrHoGV5Jg1QjOxU%2F5edFmZ1iT47%2FD4v5N%2BgUWoqhuPsOFDTK0YHkrc9%2BntkOQILARKLrtkRTu0VfZZGj1Iu1wVmwRof%2BIDeWBusFPXmCCzL%2FMgzflra3Bf2ERONjPebsXO6ChszCV%2FnNH6leiYAVeHyGFOnH7WtLmZnF5fcC69f4vbNADOiV63zhWECbybfcuMu45XsGvuPjLyu9u9FwJIOQ5XB89%2FvpBGN%2BN00wQJJb6HQ3a%2Bkl2aaHgV3YGvkNLP7Mc054WBzoPfQQfO2tHWypDygQnksrELxdaLBtKUfzRpn02tdi488NjA9DwcRh%2BJgaQZ7iyhtXlRhVKcmp8jbaq%2BumEqB0KqTaNiiKbbf8S1HP%2F19nOzseXPCKgJ4Uv7rM3LKeHKqPnyuf8E8bef9lpNTkl1sGgKGs2GHmgzMHB7W16OvJyeRdIfprM%2BW7GvgLdcwMRuwcT9iOGMB31HaC0CHKDqu%2B%2BAlZBxaSSba%2FC30FvJqrli0tdra%2BKxFW9wYvSfguQLhYYswbB%2BUY3ssAI3%2FD1PuBVaghOpWFOAGwjG7GMOOy3sEGOqUB1yFT5F9mZY1Tg4sxSegRNC5rFt%2FuxnXs6vnX%2BdpJc879lXA6PfxrAmQOyO6VMFCdN77dUcFKl8PDtFTaV%2B4tdAI0q%2BLtmPzmrnkejXAk6mu%2FAU5y4rEOnT4aRxpoo%2FdxF2HGaVX%2FUdgreEzBmflQdtHkoT%2BMFmEimzs8O%2FiWj5glOQcXqS7tyNd84FR0p%2BbMVbBihoKsP3KgbU%2FT5voV3ZSTVHaO&X-Amz-Signature=09287f6d3a4546aa0daa96162b18c7b564b27304850ff9c384f1e11ba1f08f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUAGOR6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfA0uRFiFmc3Mot6RLlJvgCs96W2%2Bi9kzsSxLpN3R5OwIgJR7ATxYi%2FuA6jmHmsaLQtyOgNdlZjgEF%2Bi2J5%2FodUPcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES96DVENycj%2FvH2dircA04AAkTL0%2Fv4Ol9kjfdobCTBgT8GynV55CUzagzpcqbq6cQuMC90iQBWLj3qqAhjzopLtfiHk6rV2B%2FxfTcC2nDvh9m4euFZsfNYUzIvbkyx%2Bc3vs4SlYllvbtwamzZWhISfkdkFd62DFEzapgC8wWRUWXYisC9mMBimhsBVDuyCAVyZZFI8DTBc7SkOZdLHIfA8ApSJHqcZHJYMoyqob64GeY8VLfi36qjJqcbezylONmBbCf2yF21ITYHg%2Bgdbr11ARLlrHngNl6oXIvDGxt1VI3%2FLThrQ8lmhWNN3Ue3yr3x5T%2BjtSBWr4wx6iELV%2BQzY7%2Fx04nnWmVImB46gKeRD2yVm84aj4xPSH%2F1zuX5o%2F3ZL%2F03PM%2BQWWIiLiGT5nLPlrIZOZKHozqEox7Qd0dz3sUA0Uz1hfpPNo84fwA4ecNPchYV%2F%2B0LU%2F43mQgF1iO4WzZ5fVgYLqBK5DAb%2Fl8IVy6wqbLTm6nbMUFhQ3fvisvFo5MCEuhi71X0bB2CXyXfYuUIfKkeJHB%2BfO%2BZHRZ%2F01MzLUuRYGbBfP%2B87hKq5dFnjGIFONG6ML1P8rbeT8o1TmVrHwGNiuBNgK51LefjAajWRCs7vCYxDGObFb%2Bdv%2B3N%2FWZj21sZjcTYuMOOy3sEGOqUBQWGSzkiCGRYXm%2F0HKwF9qJ8jrMkc7%2BDT6OInzDTD3Izx7eBw8Crf%2BFXVD%2FtMXNclidFJHyKmQPmlFQjSe5ZofzXIX%2BxDIenO4KDl9SjtZP8%2BZtyXv%2Bpu%2BpEYL%2BovXInJ9mgj1qatq2ZZl%2FLzCcYpcgEFmk7PDzS3ipbhwBBlzkjWhan3yAUUTTTNED%2FYRodBgovQ4ge0aaJHrfvCCYxLx9q37Bsy&X-Amz-Signature=e3c29efeca166bf6285800cc61b16e615f5cdb30fb99a739bc372e25fd21e434&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SJTL3A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu%2FHqf2Ik6YPUzo6sBhANrZybfRjTbHOBHxahxl5AO%2FAiEAsYEYlweVZsIawA%2Bk59kH5BdcFgeRi%2BflNNbNmj84HzMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5CvEjMVyYccZ25SSrcAx7FDGKsFLapQBnz93xiI4f6ugdt65WmTLimnqDkv3DHv9Pz5uxov%2FwLP4GJVKR7BsXdIhB6%2FgdrU4lr43sAJBtl8sW7vMjXxponQOWJ94cUaTeKnvAzjuf0M8XsxGa7s%2Fu%2B6m%2FC%2FkeG7qQTvoANtA%2BALUir0vuTq8zGYncDbrcl%2B6%2BBuDguR8HJUIwUfwseqfDU%2FfukQZMUQ2z9A7H9YRb3rQ7HaavaGrODF08H2IRyC0s3sMJv0IXE43FByyUm4WZWI6E6VcN2hvNbkLWTymevXpd77Kuhc7NvX9AtNvh7S20h7wtj9bSp9g5SW%2B61S51kr0ac1lSNTiHbFMW0u9sZwRe%2FB1j2aO640QQb8YMy6xvAG0y1tiBvPJJY08EKvkWq5TJfncIFMRoQ6H8%2B3%2BIUwyxyhpEUYDIlX%2BmrYazHrlEUn%2BgW8Z31lrhUzPWlIbzaTNA1fLM%2FaqFan%2F6wqXnZswFUEfc4BIaf3Rf6UGPL6uTJO%2FK44xIy%2FlIzaAznYMZcT5PXW%2FKnAhCGJYfgzqIEarBpK581YKr%2FkCHo00xRuQ0uNXRIm64iHWQ5XgTfovysgH8pesVzOPL2bFmdfN95U0%2FVZnhupqjeA5UuCDiGZfuSpjr0K6D%2BJCA0MNCy3sEGOqUBUzezbT%2BIaXq8%2FDnQaOxTD5DeRIJJEkCC1Firkq4Ksw39jZEjGRwQoTrth8WUpeoiC28kcXMSZJhmy01DIl5Eyw1fFrricb3fRq5Fw1dRxfuB1DkkawpXcqqQc30J5Oy7QP%2BPOqqQLkQqUNFV8CBUK47MuFLL07L4uYnrA6lTIlqThqh0Lajg8ywfeWZqz5FBld1xfepkXhvtYlTTMSXBP%2FQ3UT3%2F&X-Amz-Signature=d3cc39c22a442ce40d10d01135d1ff359f8e72c428e24743274dd597e7a05a63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
