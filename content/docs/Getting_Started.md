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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP6HL4I%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrDS84lGCNhR6LD%2Few7s4%2B1hNpUteSBLQM3CDaWbUzAIgG2m4dfFdCNbGX1SNKQqyRw8uKOSmvRbpIGzWDVZp%2FS0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAtUvk%2Fy%2F9YptdwzPCrcA9Yj1SBDX%2BFxTyYP0cXM1hWrhucI5Jf2Jiv2DePg%2BTINhFqBxLn6cH8SqcqEbSFjqURSd7OC7ERUskvzwtGp2bV23SefsFQ7pgC%2Brh0vEZTsRdoCcqX%2B2SoxQ8Nto5LUqwjzr5JQ6zH8p5s1VLKgFtO7wiVYyPAvWq2Lo0J4BnZZunKpzu9%2BVdT6636IUJ9BLxqXg9CanRe6GeN0EemlUIsUPNqK4zdRbZQYziT2KHNHdXrqhxWj%2F448k43iT5A2au6Xzg3IUh%2F3KsG%2BKU5HxNXpEKeQQQfqhDDFjHV5O9i4xCLzCF6%2FL0FFzlb%2FvklXflHcPUX%2FDaQ46sw9T58CgI2Ab8JOlpVjaPx1ysBBJSKy2YlDUIP7SkvokWLX4nY5wdM46qqoazgWU9Olf2IcnFGPxquhk2Nmxu2vTyRO7lmqoU8BwUnFwWagxfcvjsbGuwNFsCf%2F7eYwJ9dpF99Eoa5pTNj8Z0hvK4vF3bJzlfTr3kCnIEH3EkbtJkI8%2FJ186ypnoksRCeObSmcDuFvrvpuuveATHiZ9NyK13MOp%2BEKg1VYUqjDSwt%2Bu6KsCgebI13TYxw%2FNmbgldTgAWsMl%2FYSK46qlCRmUHuB7rNqXcHATLgk6UEAslMALoCKeMP2z6cAGOqUBmunV4UNi0qVyimeyF%2Fo3Vzg7PWqbk39XGUp2L1ExVFl40gEYyzqXYHi8j3zn3Ea%2BiYL%2BkcAO8kLgnE1n7Q18OQBrW%2FHD2%2B23AecqT%2BTO9x9kcTK7VIEdzpogYdUJUNCFC8FwY0Y59IHaUd1Yahf5S6wF5HzLCqtrt7jQoSWh9ECoy%2FY%2BxKdxMM%2FBwX4fXX9QzmUckuvWlaEnsJUM74TLiroV2dCx&X-Amz-Signature=5a8e3dca66434d94a78cc6f4842654b2a7090dafcef52db69471064ee742acc7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP6HL4I%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrDS84lGCNhR6LD%2Few7s4%2B1hNpUteSBLQM3CDaWbUzAIgG2m4dfFdCNbGX1SNKQqyRw8uKOSmvRbpIGzWDVZp%2FS0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAtUvk%2Fy%2F9YptdwzPCrcA9Yj1SBDX%2BFxTyYP0cXM1hWrhucI5Jf2Jiv2DePg%2BTINhFqBxLn6cH8SqcqEbSFjqURSd7OC7ERUskvzwtGp2bV23SefsFQ7pgC%2Brh0vEZTsRdoCcqX%2B2SoxQ8Nto5LUqwjzr5JQ6zH8p5s1VLKgFtO7wiVYyPAvWq2Lo0J4BnZZunKpzu9%2BVdT6636IUJ9BLxqXg9CanRe6GeN0EemlUIsUPNqK4zdRbZQYziT2KHNHdXrqhxWj%2F448k43iT5A2au6Xzg3IUh%2F3KsG%2BKU5HxNXpEKeQQQfqhDDFjHV5O9i4xCLzCF6%2FL0FFzlb%2FvklXflHcPUX%2FDaQ46sw9T58CgI2Ab8JOlpVjaPx1ysBBJSKy2YlDUIP7SkvokWLX4nY5wdM46qqoazgWU9Olf2IcnFGPxquhk2Nmxu2vTyRO7lmqoU8BwUnFwWagxfcvjsbGuwNFsCf%2F7eYwJ9dpF99Eoa5pTNj8Z0hvK4vF3bJzlfTr3kCnIEH3EkbtJkI8%2FJ186ypnoksRCeObSmcDuFvrvpuuveATHiZ9NyK13MOp%2BEKg1VYUqjDSwt%2Bu6KsCgebI13TYxw%2FNmbgldTgAWsMl%2FYSK46qlCRmUHuB7rNqXcHATLgk6UEAslMALoCKeMP2z6cAGOqUBmunV4UNi0qVyimeyF%2Fo3Vzg7PWqbk39XGUp2L1ExVFl40gEYyzqXYHi8j3zn3Ea%2BiYL%2BkcAO8kLgnE1n7Q18OQBrW%2FHD2%2B23AecqT%2BTO9x9kcTK7VIEdzpogYdUJUNCFC8FwY0Y59IHaUd1Yahf5S6wF5HzLCqtrt7jQoSWh9ECoy%2FY%2BxKdxMM%2FBwX4fXX9QzmUckuvWlaEnsJUM74TLiroV2dCx&X-Amz-Signature=f73fb17c6cab5794471465524d7acd6cf0764f0fda43fc345715a00fd7c69aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP6HL4I%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrDS84lGCNhR6LD%2Few7s4%2B1hNpUteSBLQM3CDaWbUzAIgG2m4dfFdCNbGX1SNKQqyRw8uKOSmvRbpIGzWDVZp%2FS0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAtUvk%2Fy%2F9YptdwzPCrcA9Yj1SBDX%2BFxTyYP0cXM1hWrhucI5Jf2Jiv2DePg%2BTINhFqBxLn6cH8SqcqEbSFjqURSd7OC7ERUskvzwtGp2bV23SefsFQ7pgC%2Brh0vEZTsRdoCcqX%2B2SoxQ8Nto5LUqwjzr5JQ6zH8p5s1VLKgFtO7wiVYyPAvWq2Lo0J4BnZZunKpzu9%2BVdT6636IUJ9BLxqXg9CanRe6GeN0EemlUIsUPNqK4zdRbZQYziT2KHNHdXrqhxWj%2F448k43iT5A2au6Xzg3IUh%2F3KsG%2BKU5HxNXpEKeQQQfqhDDFjHV5O9i4xCLzCF6%2FL0FFzlb%2FvklXflHcPUX%2FDaQ46sw9T58CgI2Ab8JOlpVjaPx1ysBBJSKy2YlDUIP7SkvokWLX4nY5wdM46qqoazgWU9Olf2IcnFGPxquhk2Nmxu2vTyRO7lmqoU8BwUnFwWagxfcvjsbGuwNFsCf%2F7eYwJ9dpF99Eoa5pTNj8Z0hvK4vF3bJzlfTr3kCnIEH3EkbtJkI8%2FJ186ypnoksRCeObSmcDuFvrvpuuveATHiZ9NyK13MOp%2BEKg1VYUqjDSwt%2Bu6KsCgebI13TYxw%2FNmbgldTgAWsMl%2FYSK46qlCRmUHuB7rNqXcHATLgk6UEAslMALoCKeMP2z6cAGOqUBmunV4UNi0qVyimeyF%2Fo3Vzg7PWqbk39XGUp2L1ExVFl40gEYyzqXYHi8j3zn3Ea%2BiYL%2BkcAO8kLgnE1n7Q18OQBrW%2FHD2%2B23AecqT%2BTO9x9kcTK7VIEdzpogYdUJUNCFC8FwY0Y59IHaUd1Yahf5S6wF5HzLCqtrt7jQoSWh9ECoy%2FY%2BxKdxMM%2FBwX4fXX9QzmUckuvWlaEnsJUM74TLiroV2dCx&X-Amz-Signature=27afe21f168119f52ecf17e5a832349e24b719e94d822485c8e39f7376a1213b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PWIT4IW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ICUnAxtzPsYgk%2F1ns4epxrPsFWkqCSvibgIO0vd5eAIgVWz3nBJUrGlUOEN5%2BaKVrq91efhLAoGFArQWndXg%2Fnwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDP1LsyAZ%2BUDI0eZajCrcAznDWZ6r7tC4NogT4QKoBOhcuLlmPjjkYZo90AUVel90TRe4o1IRNJ%2FIsymWeu9C7X%2BMIa%2Bgglf%2F5EJ2y%2FisycM36Em2TY9BP45UVhuY0qapTuwSb%2Ft2EJaVKH%2ByyrlLoBwiAVnjw6AeGPBlqZr4kYhZVXOz2ZXLwRYX%2FKqMaJPZts9jqieYG0M99wlmYbATW2Oz0VqZhi%2FaYy7QG0Yp9MgsmOhDBvkNypeZApoW9U7iFTsNgbMgL8NGslRGutb4nskaPKMhsCCthkleTDwPaXNcEU3Pri9BQOt1ERh64sI0TVWvinFbB4Ed0OA72nPtaiF9JMMBRvbAj5AF4LSHM8vYt2gDJggKKjOp2dkD5ve3TEmtMqDqOPruKMppSm6ajObqAMtYI2vT8Ax1hugUynI8WdhchMEvG3gNP9SeJ8IqC8cJ4qoyuGf3mJ2QGTY4PZ65rQOyX5GEoKCoOyEyrhfFUxXbeA2imLSTIBp6LLQ0N6kqDrsW7KNXzjaoWUV3RRc%2BDjKLbFLGnO7PsrpBhTwlKd%2FHjyPB1Mt8pz2GBpIprs%2B90axtgi9yYixkjCzuwgtIVt9ERvqTLVjkhC5r3NyHK6QRTquCQgFZjrmsFwz4gsfbwLcSqyYWZW%2BZMP2z6cAGOqUBUUfOWczpfQLxRsWdU20gwti2d1VHVjJXHrEJhTpyXZfGeAzTdSk81DVMv1AXS0vssZBTWQqeaJe%2FJsPtj5opaAykrMwAL0ZB%2Bd5M1tmEAAijYZY0WK6iPJ%2Fyg%2FqdF5u58J7hJ9yUEpLkbMv9R6eUwL0L8L3bNk0AfBohCV2lJ26nIL0dE7eIUL%2BESLx8Jah5IEVyHfFsQLoFrswNhqEVy%2BjVYP1l&X-Amz-Signature=5afb1e90344ae987e7ae67e49469014148e8bc9fab3a5147dc5c05adc152ee4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEF6VBQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxSZZVQcdBeqoBn8E3sVmE2V4iZP9NNBlvsYidBd%2F9%2BAIgf9eewzmHEIeDm%2BNGD6AAlaH%2BVRnKjM2azmyL5HfPrFYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDRwdpcrxLcfBO9SNCrcA4I4GxL8ggnMZbYOSLwzmX1Rcb0hqVtYgJ4y6XOypBbbdtTcIyvNDRNXRyZu6aluN339SxYUgounpwgJMFGvjw9ALf8AAi133X%2BynP4Iwn5GKGuoyCVbu1%2BJ3SszN6bhmIi%2FBNCgYnJCDGBzWGuqALxeprA5f6PRoIDaE57FJQ07XqAqjV8ctsNQdGoL7twMR7YApoKmYjQM7CmBDySEsoADvMf06nME96VSKqwYovAsmYly9t5HwROWnBX%2BAwRQZVNgeaud1y3BxsND5VvyvHYEh6m0E%2FnkN6AYFM29RDb6bIxuH5Qk%2BoSPx4jMH2hNJn7woCrday0CJr1bFRW8rExzgQYmxC%2Bb2zjTVTj5D550%2F6J%2FG6nXmJxphQyHElQ5ReMKZ2QAsNlovVaXH3ZLWEHBBURKubva9%2BKITAlxnwwM6PEYya5sqieAdhVRnejx6GmaBCH1dCEH%2BufEqhNfnap9VzId35xZoHTP%2BCkuNyBHpv2VKubluIStH9kFEbDCE7AfQaIvEnrAnhbWzJkMIo51SOyWoe5aDWrnsoioMS7RUSJ6VN5PMt2Em9pVThABHho9Wxq5y9jTG2smsgPOb0wa6JInlFMgFO8oz59i%2B9lF7ZXux0TqM7iucRjSMNG06cAGOqUBEnP5wZiPaxsPXTfzalWELOv9ZoIJS31YL2A6r7vj6v3IzgrCCJdBZ%2FkfN2X32lyup4v0JSJU%2Fp%2BilnHKlNLAyIu5yOd%2B34FndAT9Tk2xX17jcLZ%2Fp9S87%2BSdjisA1Ysro5b3WaeEpzYUxNk5rny4il0A9lYUSDJKuQNro6qMysyTh862pAk8h6bEzXhntR6yTfLtxlbpNrTAFip%2BIuDnq4t%2FRedo&X-Amz-Signature=b05d70eca895bc8fc619d9ed13bdaf12acc0be21bdefc5c9d30a0b90176e2aed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP6HL4I%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrDS84lGCNhR6LD%2Few7s4%2B1hNpUteSBLQM3CDaWbUzAIgG2m4dfFdCNbGX1SNKQqyRw8uKOSmvRbpIGzWDVZp%2FS0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAtUvk%2Fy%2F9YptdwzPCrcA9Yj1SBDX%2BFxTyYP0cXM1hWrhucI5Jf2Jiv2DePg%2BTINhFqBxLn6cH8SqcqEbSFjqURSd7OC7ERUskvzwtGp2bV23SefsFQ7pgC%2Brh0vEZTsRdoCcqX%2B2SoxQ8Nto5LUqwjzr5JQ6zH8p5s1VLKgFtO7wiVYyPAvWq2Lo0J4BnZZunKpzu9%2BVdT6636IUJ9BLxqXg9CanRe6GeN0EemlUIsUPNqK4zdRbZQYziT2KHNHdXrqhxWj%2F448k43iT5A2au6Xzg3IUh%2F3KsG%2BKU5HxNXpEKeQQQfqhDDFjHV5O9i4xCLzCF6%2FL0FFzlb%2FvklXflHcPUX%2FDaQ46sw9T58CgI2Ab8JOlpVjaPx1ysBBJSKy2YlDUIP7SkvokWLX4nY5wdM46qqoazgWU9Olf2IcnFGPxquhk2Nmxu2vTyRO7lmqoU8BwUnFwWagxfcvjsbGuwNFsCf%2F7eYwJ9dpF99Eoa5pTNj8Z0hvK4vF3bJzlfTr3kCnIEH3EkbtJkI8%2FJ186ypnoksRCeObSmcDuFvrvpuuveATHiZ9NyK13MOp%2BEKg1VYUqjDSwt%2Bu6KsCgebI13TYxw%2FNmbgldTgAWsMl%2FYSK46qlCRmUHuB7rNqXcHATLgk6UEAslMALoCKeMP2z6cAGOqUBmunV4UNi0qVyimeyF%2Fo3Vzg7PWqbk39XGUp2L1ExVFl40gEYyzqXYHi8j3zn3Ea%2BiYL%2BkcAO8kLgnE1n7Q18OQBrW%2FHD2%2B23AecqT%2BTO9x9kcTK7VIEdzpogYdUJUNCFC8FwY0Y59IHaUd1Yahf5S6wF5HzLCqtrt7jQoSWh9ECoy%2FY%2BxKdxMM%2FBwX4fXX9QzmUckuvWlaEnsJUM74TLiroV2dCx&X-Amz-Signature=93acaeb016c5e83137b9d4c069855bc050845d8ee0a1c385822b25bb9c5f0ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
