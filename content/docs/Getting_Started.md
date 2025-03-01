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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFAUXMDT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCW9bvJhznp9KUzQqFvEom4L9xe%2BhGwgq2u77onCyLrgAIhAPshi%2FWBOd9RWvy5MOuG5Ts2KeUriaKPZYcDGerreARRKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgNo3QksjkL%2F%2BgTmkq3ANwkZi6vqd%2BQYwrnHS%2FLCPrTWHVftfbk8CYlqr3WywvvQu3SqDNoiuYyxZ%2BBogl1eBMgfZnQnP%2Bw%2Fq8qcGDhmnDW0kVj%2FTIGWvgEet5tBy71Biwu6YfBcCJNI0qxgjy2meT4hjj2JOA0kpNfs36mchwbI7tRMKUmJ3M6UFxNqAzjcLrLjG84TtMFYPJgUk%2FirmsxQL74QIGqGhmEtVZQlxv1YL%2F63y6ou8t%2F0cPAgp%2Biv5HNRXOPxz7YbNYxWuKEXRzrxGiT%2FiEcCjuTiXsQRY1J5DCI4ITtL6yJdSN66lza1AbD4iKq5EfQp5fCzRGvNDg3zVD8HO7mu3xsdx5a0zBaCE76ncvWoiLIJvBGN%2FqJCUloZNpFLQnmojDBpLh85Fz74gbK6GmgtlBaW0xDiXpkL7TgrAkuk2Qyxpyr49khJL3P8b2%2FIIt%2FuN3q%2FSZB2ndYJKMF%2B%2BOkUGwZCP7HWGQujClitsUQNYIEBfTFpajZcs%2Bz2Jm%2B3BFvOFwSBJGdfubg18p4ftArvx24TU1ii8HGKEkFruvC0AgN3ohPvZFfh9iUPU4X0L2lWcn8ARcOE8eu9t5CTTByiZNUrXHR8HtfDE6XnuKKKM90iMAEmKLw6%2FTaCMaAe5vTAUInzDRkIq%2BBjqkAZ1NEXc0rswirgBYUkcRi4X7QkbX9Sq%2BhY%2BXBY3IBrE2n5w8eY4x6frJwxatTMezulVCpOGXzq4CV0hqNERWfV2HMTHEyR7qOtebeHZ8q4t9UQdNBu%2FUckJxV1nXSG8ieNkA2C1%2FYBpr6nx%2BxB6MTaO4isbFZ2Q3MOWruOvoM5%2BB%2FqJmdZJ41sMIztuM5Te8hzDYGcVxl6dXwQbN%2F68af8y5n%2BuT&X-Amz-Signature=2953325b7b32e0ab4da26d360d035b6d13b18e87263339b0101aee2cd7e4a119&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFAUXMDT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCW9bvJhznp9KUzQqFvEom4L9xe%2BhGwgq2u77onCyLrgAIhAPshi%2FWBOd9RWvy5MOuG5Ts2KeUriaKPZYcDGerreARRKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgNo3QksjkL%2F%2BgTmkq3ANwkZi6vqd%2BQYwrnHS%2FLCPrTWHVftfbk8CYlqr3WywvvQu3SqDNoiuYyxZ%2BBogl1eBMgfZnQnP%2Bw%2Fq8qcGDhmnDW0kVj%2FTIGWvgEet5tBy71Biwu6YfBcCJNI0qxgjy2meT4hjj2JOA0kpNfs36mchwbI7tRMKUmJ3M6UFxNqAzjcLrLjG84TtMFYPJgUk%2FirmsxQL74QIGqGhmEtVZQlxv1YL%2F63y6ou8t%2F0cPAgp%2Biv5HNRXOPxz7YbNYxWuKEXRzrxGiT%2FiEcCjuTiXsQRY1J5DCI4ITtL6yJdSN66lza1AbD4iKq5EfQp5fCzRGvNDg3zVD8HO7mu3xsdx5a0zBaCE76ncvWoiLIJvBGN%2FqJCUloZNpFLQnmojDBpLh85Fz74gbK6GmgtlBaW0xDiXpkL7TgrAkuk2Qyxpyr49khJL3P8b2%2FIIt%2FuN3q%2FSZB2ndYJKMF%2B%2BOkUGwZCP7HWGQujClitsUQNYIEBfTFpajZcs%2Bz2Jm%2B3BFvOFwSBJGdfubg18p4ftArvx24TU1ii8HGKEkFruvC0AgN3ohPvZFfh9iUPU4X0L2lWcn8ARcOE8eu9t5CTTByiZNUrXHR8HtfDE6XnuKKKM90iMAEmKLw6%2FTaCMaAe5vTAUInzDRkIq%2BBjqkAZ1NEXc0rswirgBYUkcRi4X7QkbX9Sq%2BhY%2BXBY3IBrE2n5w8eY4x6frJwxatTMezulVCpOGXzq4CV0hqNERWfV2HMTHEyR7qOtebeHZ8q4t9UQdNBu%2FUckJxV1nXSG8ieNkA2C1%2FYBpr6nx%2BxB6MTaO4isbFZ2Q3MOWruOvoM5%2BB%2FqJmdZJ41sMIztuM5Te8hzDYGcVxl6dXwQbN%2F68af8y5n%2BuT&X-Amz-Signature=edb4c6d495970e009cfeef8618350aa705d5450950985355a24ffd4cfa693755&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HN5N5LV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC7v6GNHAx3Y%2F7vXfg0O7iwUiMoJAF%2FlhO7Nzr7A4MuuQIgNBivcc%2FxehmoW2kIwGWFvkhlzWC2rEUIr9YyKHLL8swqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR2mVxKnt4wmAdQJSrcA0PX0gzH%2FvW%2Ft5piM8AgBBI3cixPGv%2FiMbuzb17BeNLTHenKHx7HA6Qshm2dJwHLSi0hwuqTA0HIEnZDC13so7N2ZfbIMDgDumo2igxg3Y%2FH70ng820LBU7liKX9cVOY%2Fe6LcnU8JzGqK3c3ug8Rza9P2uq0FtpSIOQqUB7VrFttR%2FYZG4a81FjgLcY6Xj4Hl1qsKhdwTZzOlW5hAudD63m3zMZhOBkstbiS8YBk88rzNADL0DAZJBfcdT5Zr7VL6ksD6a9WDWaVFkoUtvhAJ6ZI4whIsOVxlmD7PntFJYwvcx%2BLSK47Lqj5npIQP1BCZdJ7xnNvNxRvxdQ%2Fx%2Bt3ZC5dOltYVVdb%2BEgMRVtrQbjS85bOATefmmgb8kGUKn9mk958J9ZV%2F7J9sNVPT%2FgkkMiK9W4MX2A5kj4NqI3GczLzo5JGOJjnQG5ibFTO%2BnAAexKuqG6DsPBT7v%2FJ%2B5VRwCOlv%2FG6jgVeRr6sYfBh7uWpgU0GL8eJ5qGuxNVnG6SZtcpRKvYHx2c70ORsEUX66F6fK%2FtY%2FMf%2FG8A3JIOWCuZi5JYQVF3%2FZUkYQI%2FXtcIuO%2BAt4OZMPhJZY4SGIPGgpHbSWF0Q%2FJyIBpq1XtBGugfidPA%2BieXxrmEel7e3MLOQir4GOqUB0x4cWBFH%2BqDza%2FgvTscjxa5S18iIzQ8slLfSRL6oXvXFRGG1plWhoqgMG%2F3Pdu%2F1w0uvHuyGbInw8vu4XVoNNt05kkQRrxdDj%2FYa8HDCgIQSxnqMuCROUVcYFbdIxBrC6BqW0%2F1OVwBobVGpK8elPoQTKR9moHRKISx%2F0MncWsJrfof9YZ%2F6gXgBt0xNvWfk8JfgVsFwytWAyV9RCkOKyiaD9Lgd&X-Amz-Signature=39d857de87bbc5323eea3acfbdc53fd5ec18519f066b8cfb6a2caf1e754cc166&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=791d3fb6ae71b8614a6fadd91a5724bd87e21e345f0ed41c440cd1ae5e6f1992&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFAUXMDT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCW9bvJhznp9KUzQqFvEom4L9xe%2BhGwgq2u77onCyLrgAIhAPshi%2FWBOd9RWvy5MOuG5Ts2KeUriaKPZYcDGerreARRKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgNo3QksjkL%2F%2BgTmkq3ANwkZi6vqd%2BQYwrnHS%2FLCPrTWHVftfbk8CYlqr3WywvvQu3SqDNoiuYyxZ%2BBogl1eBMgfZnQnP%2Bw%2Fq8qcGDhmnDW0kVj%2FTIGWvgEet5tBy71Biwu6YfBcCJNI0qxgjy2meT4hjj2JOA0kpNfs36mchwbI7tRMKUmJ3M6UFxNqAzjcLrLjG84TtMFYPJgUk%2FirmsxQL74QIGqGhmEtVZQlxv1YL%2F63y6ou8t%2F0cPAgp%2Biv5HNRXOPxz7YbNYxWuKEXRzrxGiT%2FiEcCjuTiXsQRY1J5DCI4ITtL6yJdSN66lza1AbD4iKq5EfQp5fCzRGvNDg3zVD8HO7mu3xsdx5a0zBaCE76ncvWoiLIJvBGN%2FqJCUloZNpFLQnmojDBpLh85Fz74gbK6GmgtlBaW0xDiXpkL7TgrAkuk2Qyxpyr49khJL3P8b2%2FIIt%2FuN3q%2FSZB2ndYJKMF%2B%2BOkUGwZCP7HWGQujClitsUQNYIEBfTFpajZcs%2Bz2Jm%2B3BFvOFwSBJGdfubg18p4ftArvx24TU1ii8HGKEkFruvC0AgN3ohPvZFfh9iUPU4X0L2lWcn8ARcOE8eu9t5CTTByiZNUrXHR8HtfDE6XnuKKKM90iMAEmKLw6%2FTaCMaAe5vTAUInzDRkIq%2BBjqkAZ1NEXc0rswirgBYUkcRi4X7QkbX9Sq%2BhY%2BXBY3IBrE2n5w8eY4x6frJwxatTMezulVCpOGXzq4CV0hqNERWfV2HMTHEyR7qOtebeHZ8q4t9UQdNBu%2FUckJxV1nXSG8ieNkA2C1%2FYBpr6nx%2BxB6MTaO4isbFZ2Q3MOWruOvoM5%2BB%2FqJmdZJ41sMIztuM5Te8hzDYGcVxl6dXwQbN%2F68af8y5n%2BuT&X-Amz-Signature=48bf45c0654bb2eeea15a0635b8b3aa47ea41cee48b6459d3bf54c56169aa1df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
