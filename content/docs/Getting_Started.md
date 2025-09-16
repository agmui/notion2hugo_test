---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGYUURX%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC076ctJ%2BS3D%2BYxfePvtTQFdeN0uC3USrqYvMSuXVMYdAIhAJ0eeSoXo3zDMbcDXaRTg5YXRe%2FDwLFkb9xtXEM4fRAvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5mJT0Pf4mxiQCX2Qq3ANgLW0f8nlmoQjvAoM43eYq3SscRYPopeuH0DyYWwN8hBUDKNSp8SDfaDCcUf%2Btm0%2FPYCTJ%2Fv4KwQwgJ9eB%2Fd%2B3tOdjxF5m6d0cXP%2F06NVSQHYVO%2BBApmWa7MusOFqDQHuogp%2BvS4482aENTaRODhF14Rxh9IJ55hc4zeKe10MKyG5YwFaLq2qq1SXyGvlvWWO9UqSMiUMj%2B6%2F%2BPjevJcnGkumLqsFGfa7dkaZIr7Zt46Q3liJxeehZ6hymhMupY0K3ACABni9crNauDHXSuSZiXcNCmAgDXYiVyZYT7suqN7XJTi77%2FcBci%2FfBvRwAUGg6dTXvA5jOuxU5x08ZLmFsfdY5GPcH83xyraLV92bsqVXrqy8rjNdLuNU7J3KeTIhUCjteSmUV4GLrSGvCyIqhRrnHJR0J9V3r0%2FN5ceUjj2AMyS9T9lhhAOPsV1d4wHIMo4NNshVwENEIvx4P8zsRhQnozCXMJMwkLJTFVhKT2CM2Sl3FWIFXokn32TrMX9DqqKLBDihJsjqRi%2F7w5f%2BxicqUfe8qmX8OsYK0tvw%2F0U9nH7vjaC%2BtQz7OeWqg%2FUItL5lzamGFN6nkJPr0fidJfGFaRnJE40qfvxxjHvcZlXPZsrZqhCHtvPEqOzC18KLGBjqkAVhGvfrd6CR2AQsoH2btaut7RCOc9VI%2FMvx7zDNambZIqMdaPoIzvA8NWjucD6kLKP%2BO9QoPW5p1YEA9oGSWPyMUPUhTYt%2BUpKmSsGJXgR5YXXWhtSRZzkuVVZZfRc5B%2Fret4f6SgtCR4V%2FgMluC1O1bdOLJUeAc2iZ3%2FI7Cb58vSRG4NTrkIZLntgO6auMjxQZjzUwLYZXkuEVrZqKFLyEyBxnQ&X-Amz-Signature=e81b6dc5f19c4c8e1477f640247905709a4f35630996800a05aa704a5a5e0de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGYUURX%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC076ctJ%2BS3D%2BYxfePvtTQFdeN0uC3USrqYvMSuXVMYdAIhAJ0eeSoXo3zDMbcDXaRTg5YXRe%2FDwLFkb9xtXEM4fRAvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5mJT0Pf4mxiQCX2Qq3ANgLW0f8nlmoQjvAoM43eYq3SscRYPopeuH0DyYWwN8hBUDKNSp8SDfaDCcUf%2Btm0%2FPYCTJ%2Fv4KwQwgJ9eB%2Fd%2B3tOdjxF5m6d0cXP%2F06NVSQHYVO%2BBApmWa7MusOFqDQHuogp%2BvS4482aENTaRODhF14Rxh9IJ55hc4zeKe10MKyG5YwFaLq2qq1SXyGvlvWWO9UqSMiUMj%2B6%2F%2BPjevJcnGkumLqsFGfa7dkaZIr7Zt46Q3liJxeehZ6hymhMupY0K3ACABni9crNauDHXSuSZiXcNCmAgDXYiVyZYT7suqN7XJTi77%2FcBci%2FfBvRwAUGg6dTXvA5jOuxU5x08ZLmFsfdY5GPcH83xyraLV92bsqVXrqy8rjNdLuNU7J3KeTIhUCjteSmUV4GLrSGvCyIqhRrnHJR0J9V3r0%2FN5ceUjj2AMyS9T9lhhAOPsV1d4wHIMo4NNshVwENEIvx4P8zsRhQnozCXMJMwkLJTFVhKT2CM2Sl3FWIFXokn32TrMX9DqqKLBDihJsjqRi%2F7w5f%2BxicqUfe8qmX8OsYK0tvw%2F0U9nH7vjaC%2BtQz7OeWqg%2FUItL5lzamGFN6nkJPr0fidJfGFaRnJE40qfvxxjHvcZlXPZsrZqhCHtvPEqOzC18KLGBjqkAVhGvfrd6CR2AQsoH2btaut7RCOc9VI%2FMvx7zDNambZIqMdaPoIzvA8NWjucD6kLKP%2BO9QoPW5p1YEA9oGSWPyMUPUhTYt%2BUpKmSsGJXgR5YXXWhtSRZzkuVVZZfRc5B%2Fret4f6SgtCR4V%2FgMluC1O1bdOLJUeAc2iZ3%2FI7Cb58vSRG4NTrkIZLntgO6auMjxQZjzUwLYZXkuEVrZqKFLyEyBxnQ&X-Amz-Signature=4791c089f3436e2405d5fc5ae81ecf727c2352106cab06fcdc8b6c13ddf9571d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGYUURX%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC076ctJ%2BS3D%2BYxfePvtTQFdeN0uC3USrqYvMSuXVMYdAIhAJ0eeSoXo3zDMbcDXaRTg5YXRe%2FDwLFkb9xtXEM4fRAvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5mJT0Pf4mxiQCX2Qq3ANgLW0f8nlmoQjvAoM43eYq3SscRYPopeuH0DyYWwN8hBUDKNSp8SDfaDCcUf%2Btm0%2FPYCTJ%2Fv4KwQwgJ9eB%2Fd%2B3tOdjxF5m6d0cXP%2F06NVSQHYVO%2BBApmWa7MusOFqDQHuogp%2BvS4482aENTaRODhF14Rxh9IJ55hc4zeKe10MKyG5YwFaLq2qq1SXyGvlvWWO9UqSMiUMj%2B6%2F%2BPjevJcnGkumLqsFGfa7dkaZIr7Zt46Q3liJxeehZ6hymhMupY0K3ACABni9crNauDHXSuSZiXcNCmAgDXYiVyZYT7suqN7XJTi77%2FcBci%2FfBvRwAUGg6dTXvA5jOuxU5x08ZLmFsfdY5GPcH83xyraLV92bsqVXrqy8rjNdLuNU7J3KeTIhUCjteSmUV4GLrSGvCyIqhRrnHJR0J9V3r0%2FN5ceUjj2AMyS9T9lhhAOPsV1d4wHIMo4NNshVwENEIvx4P8zsRhQnozCXMJMwkLJTFVhKT2CM2Sl3FWIFXokn32TrMX9DqqKLBDihJsjqRi%2F7w5f%2BxicqUfe8qmX8OsYK0tvw%2F0U9nH7vjaC%2BtQz7OeWqg%2FUItL5lzamGFN6nkJPr0fidJfGFaRnJE40qfvxxjHvcZlXPZsrZqhCHtvPEqOzC18KLGBjqkAVhGvfrd6CR2AQsoH2btaut7RCOc9VI%2FMvx7zDNambZIqMdaPoIzvA8NWjucD6kLKP%2BO9QoPW5p1YEA9oGSWPyMUPUhTYt%2BUpKmSsGJXgR5YXXWhtSRZzkuVVZZfRc5B%2Fret4f6SgtCR4V%2FgMluC1O1bdOLJUeAc2iZ3%2FI7Cb58vSRG4NTrkIZLntgO6auMjxQZjzUwLYZXkuEVrZqKFLyEyBxnQ&X-Amz-Signature=4d5220febb0721ec55da968fae6450f668044ba16a6a0ed986d985c219627b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWFRUZQ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDI658ALMqMH0NKl2z3E2YmVC1Dhwt5oAL4a0PsutMacAIgFFTJMrY8TDGEs%2B5pMHDx%2BvGmJn13t9s0S3StkfZUiC0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5dIQIpsATcKsGhdCrcA46cEiMZ2egotznYkRBFDwezl5cSO%2BxjsbBQ%2BVaihour8RP%2B9JiD60YHJb%2F1yur6184bSEzJ702SbrM4fnTA1WZ5t93O6v3DViS0x1KqqUk7ZM%2Fy%2BrFiKNuSwFpOCwrOG8Ut2HwYSMc4pxN5RMYhh8gp%2BIFbYqwsTAq6VrRtSi5j4yiichl8RJdF1PqMHi5Q3REXgvG1CXjqdzmfusupiDuek9tMAJx6YF57rXRDslPsIsOLnZihq%2BirxBmW6sSTxaQAnoUg4Rc1tzcdh1MiQLdAu3PyNp5jALBKDVJTbtSFbUZvBrNV8NSdWF4tGNFjO0it45k%2Fvu0dJZhty21tfGvFp3FA3ujGe91HSywnIqdyAuiWPlAqvXy1i1B20LFAR078U5T%2B4IIZlrrk8xbnqiFUdeavJ9aV%2BiVEawE0L6ymcpZdUjh%2F8bSMHIDVx%2B9Oyj7yFXiOLLYqwFqm5bkfLvT95BQXIGBvg6b3OwzO4f6XOSIM4eUGsTzDtA88tG9kgZ4J2aXaSI5%2FB3XTv6fNSo5%2Bt4C9rAfv2rqdpT%2BVGgfizT7GdpojQfXouXfTMYU2HyC1g6gGAclaZT%2BYe2phxZSBEv1C00QRCfTQk1gy%2BS1e5erlBTtYCjfo3zy%2FMI3wosYGOqUBoRKt1%2FZaxtpcprquSPfvz9f8SahyWUqI2ZI%2BKaO53%2F7TS%2FwU0jWs5IiBzI6oXW2OrGtuRXRaJ6ePFINSogtXdpY%2F5%2Bk0icW4tS7035LogaRuRwtP6tfasLv1LQe0ttVAsOQCNCPPX6bZNyy6H2WbxH3rYlozepZsclFcIosNxzU4Y80jAwXh8NFGTn3d36Tp4tm0JcwkaA3MbWzc1jq8ntlBDBmr&X-Amz-Signature=625147cfd0995c11de2e1ac22501a69f3255332b46a66c600e2c3132f7de79b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEU536UQ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCI%2Bs8alukEviooHQBHj903wIfiJKNR8oZa%2BfBckHylKgIgCT%2BiWxHFquNxWVAX%2FW7VNzwZcX3o1yAFMGAJZsCocnoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO37%2F7dvEkDQKZ20uircAxO2JcSt9VfTKG2lNZ7%2BSXcgXo%2BYDxYSPS2GcK3ctDvms9wTd0kaw84Tf5rK7Fik9odhp2hDejHBSDe8ANDrLigG%2Fb7qf0r8WsxKPe7ZvJSgECBXhhlYtEm4BO8QPRT69GkeqbqXEgCDY3OO4TrcppM0EXqmF6jMJ1YkotiXz4XYYDjmayrMejp7%2B3JTiAO4I74oE4t8%2B7MncRyhic7E%2FoX0dq2Dx1orLRj6aRJM2ACgAf4%2BlMtlVCoRC0VTnn6DCjYVhDEqxinxh7ZPpggkYUSZOEkfyOjIi2w241chwSMJYcvfS0lasd9B81djyGamS8g%2FV43jb0YW33laie%2FACT7FFteMsG50BwZF6qczQDWD2xqJr8npEZWEn%2Fe3lHHTQG4jX6vCKXAYdSGnGe1Fq4MJRtV3xJ50Il32QTPYIAziPKbBpnTpfW8uERHn4AsbNXDCn9GYxFRK71K8HeoH%2FRQp8k7qm6%2BhugKNMsAjwvwVo5%2BEMz8OZG%2FmPoFL3KbyJoA%2FFaxSFoDb9EPzzhNb8zTl0IKLbUVaXlP%2BGu6z01Ar0rsKDrQ2wAc4wN%2BWvlozr7K42%2FndWD2TK4FpD8sDrbt5SvdtsYCU5fSXw087vSHovgo7CmY03dMU%2BQyNMKHwosYGOqUB0uqFADNIstkZFsTlGS%2FNfCcxcYIbdVuCuwCwmp%2FJjUb4Go%2BogDxUJdOY9jltk8mR1CCmy12qif8V5vuuLnxz%2FuQwEFJ6hFiUAQi9Oqw2prvqcegqtoDvD9Z0EKmSnMIXDnLWCUvRGQcwIOhONSzNgTNI%2F%2FXN96li%2FONF%2BBfpP%2Fabzp9UO%2BduBdAilChSC0e%2F99NHuz9X6JxcRWsglzXOPKExx6gW&X-Amz-Signature=3dd2791c13813a8fa3f3d1a1c472b795c9d50e7dd6e3235168931c4ab3c92fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGYUURX%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC076ctJ%2BS3D%2BYxfePvtTQFdeN0uC3USrqYvMSuXVMYdAIhAJ0eeSoXo3zDMbcDXaRTg5YXRe%2FDwLFkb9xtXEM4fRAvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5mJT0Pf4mxiQCX2Qq3ANgLW0f8nlmoQjvAoM43eYq3SscRYPopeuH0DyYWwN8hBUDKNSp8SDfaDCcUf%2Btm0%2FPYCTJ%2Fv4KwQwgJ9eB%2Fd%2B3tOdjxF5m6d0cXP%2F06NVSQHYVO%2BBApmWa7MusOFqDQHuogp%2BvS4482aENTaRODhF14Rxh9IJ55hc4zeKe10MKyG5YwFaLq2qq1SXyGvlvWWO9UqSMiUMj%2B6%2F%2BPjevJcnGkumLqsFGfa7dkaZIr7Zt46Q3liJxeehZ6hymhMupY0K3ACABni9crNauDHXSuSZiXcNCmAgDXYiVyZYT7suqN7XJTi77%2FcBci%2FfBvRwAUGg6dTXvA5jOuxU5x08ZLmFsfdY5GPcH83xyraLV92bsqVXrqy8rjNdLuNU7J3KeTIhUCjteSmUV4GLrSGvCyIqhRrnHJR0J9V3r0%2FN5ceUjj2AMyS9T9lhhAOPsV1d4wHIMo4NNshVwENEIvx4P8zsRhQnozCXMJMwkLJTFVhKT2CM2Sl3FWIFXokn32TrMX9DqqKLBDihJsjqRi%2F7w5f%2BxicqUfe8qmX8OsYK0tvw%2F0U9nH7vjaC%2BtQz7OeWqg%2FUItL5lzamGFN6nkJPr0fidJfGFaRnJE40qfvxxjHvcZlXPZsrZqhCHtvPEqOzC18KLGBjqkAVhGvfrd6CR2AQsoH2btaut7RCOc9VI%2FMvx7zDNambZIqMdaPoIzvA8NWjucD6kLKP%2BO9QoPW5p1YEA9oGSWPyMUPUhTYt%2BUpKmSsGJXgR5YXXWhtSRZzkuVVZZfRc5B%2Fret4f6SgtCR4V%2FgMluC1O1bdOLJUeAc2iZ3%2FI7Cb58vSRG4NTrkIZLntgO6auMjxQZjzUwLYZXkuEVrZqKFLyEyBxnQ&X-Amz-Signature=8f3fd93faf477b2bf65c8ab243512b08adc3bf12dbc10339da740f99803e2237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
