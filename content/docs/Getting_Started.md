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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TO4ABUA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTBAzjnWSYXUVcm6mFaoPe%2BEWFMruELjzdyak%2FgRjXwwIhAJTiyJ4XTyIikxLCkjBHiCRcKHikICh5GBCEdhdIRo%2BhKv8DCHgQABoMNjM3NDIzMTgzODA1IgyiuaQqrj29w7DoysIq3AN9Sj2wwknFWJ%2BobkFwxfDGPB9AeuZWsqNieKDTaas7EGlIJgfsUDo1ffla5Vdw0AGYp2mIlrgWYK2xlsLkfrr5GF%2BOxKsrH9crHXcmZ3Zmkq5%2FKjn5O%2FdK5PL0wzsvTy7o1arP7Kj6YwEXKgpECCuBBcG4F3bJ2Z%2BCoT60CAlItV%2B4I1QH0OZcvyN4DbpRrqCLVOzCIbEGHwHAskx9%2B%2B33pdVIwJUpUbfMQsKVrwfM0nA6fX0mcX0ZJin%2BWjAsDBAZiseK9UBEXD3ImU0GUBC294gmkexOwLfFQMgJRjYtUyGQK%2FyRVclFpLSX5cJu7rQOkyfLi7LD88t59i9upIv3nuk%2B7MRTDduwuhoqRPRrac6jZp25MSef9O1hE0ykQ8F%2BiLnh30FzH97PrtnS8DPKWWSUAwPQuEZDG1%2F1Ti%2FiPmHo%2B7cKdg%2Fs4hiwAqOiUfFiSVpmjYBoqcSDP6FBmP48zeI8XalDMno6fdf%2BU1i%2FHhswJE9ofhMjFFZUbVG87a0o88ZlZcTAH9D0kC%2FrxglzVL0dt9Mvrsuhf0hpj%2BI1o4PSs2pP9qus%2BYYB6fbp8AyWNoRItLO4ngvh7DZRGXL%2BVx13RPKh91vNDcT9YfR70hhzX554Xt9NlQrsqDDZw4nABjqkAaP0BMi4dTGFypEELofYFg6EKoTlVw0Tcdlgr%2BysDp3kneg1ZrqgoP2hkOoxC9mUC%2BAudC8lNiotKnN%2FjrhEKya2zZ3qNtwo2W3o0QKSo3BxWz73NIbrM5xZR0q3RITHeyXGMAjoupx2YQ%2Bmwzyg7NK11gxcX0dfXjsAgihcQF4OVHMR8Syax02seJhXPHZg3CkpV6uC3hJs%2BX%2BsiIV1xEAlzyiH&X-Amz-Signature=3613e13f1ae9be476dda1939b881e7823bf707c9d19ea90dc80d178821b7971d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TO4ABUA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTBAzjnWSYXUVcm6mFaoPe%2BEWFMruELjzdyak%2FgRjXwwIhAJTiyJ4XTyIikxLCkjBHiCRcKHikICh5GBCEdhdIRo%2BhKv8DCHgQABoMNjM3NDIzMTgzODA1IgyiuaQqrj29w7DoysIq3AN9Sj2wwknFWJ%2BobkFwxfDGPB9AeuZWsqNieKDTaas7EGlIJgfsUDo1ffla5Vdw0AGYp2mIlrgWYK2xlsLkfrr5GF%2BOxKsrH9crHXcmZ3Zmkq5%2FKjn5O%2FdK5PL0wzsvTy7o1arP7Kj6YwEXKgpECCuBBcG4F3bJ2Z%2BCoT60CAlItV%2B4I1QH0OZcvyN4DbpRrqCLVOzCIbEGHwHAskx9%2B%2B33pdVIwJUpUbfMQsKVrwfM0nA6fX0mcX0ZJin%2BWjAsDBAZiseK9UBEXD3ImU0GUBC294gmkexOwLfFQMgJRjYtUyGQK%2FyRVclFpLSX5cJu7rQOkyfLi7LD88t59i9upIv3nuk%2B7MRTDduwuhoqRPRrac6jZp25MSef9O1hE0ykQ8F%2BiLnh30FzH97PrtnS8DPKWWSUAwPQuEZDG1%2F1Ti%2FiPmHo%2B7cKdg%2Fs4hiwAqOiUfFiSVpmjYBoqcSDP6FBmP48zeI8XalDMno6fdf%2BU1i%2FHhswJE9ofhMjFFZUbVG87a0o88ZlZcTAH9D0kC%2FrxglzVL0dt9Mvrsuhf0hpj%2BI1o4PSs2pP9qus%2BYYB6fbp8AyWNoRItLO4ngvh7DZRGXL%2BVx13RPKh91vNDcT9YfR70hhzX554Xt9NlQrsqDDZw4nABjqkAaP0BMi4dTGFypEELofYFg6EKoTlVw0Tcdlgr%2BysDp3kneg1ZrqgoP2hkOoxC9mUC%2BAudC8lNiotKnN%2FjrhEKya2zZ3qNtwo2W3o0QKSo3BxWz73NIbrM5xZR0q3RITHeyXGMAjoupx2YQ%2Bmwzyg7NK11gxcX0dfXjsAgihcQF4OVHMR8Syax02seJhXPHZg3CkpV6uC3hJs%2BX%2BsiIV1xEAlzyiH&X-Amz-Signature=3575269e14d41f1a09337063562578a8fea8e4d8fd5d1570f1664cc36d8bbe70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJV7PVV2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVBOzZ7CxoMsXmQWnm%2Br%2Br1%2FctuRfsaAjSRui3o4RsYAiARDqKLfXDEML%2BACYqSjFKMZCk7%2BPd7UGqOMH%2FpcZEfRir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMpx5%2FN0dqm0%2FMI%2BnnKtwDYZpstbb6MFg%2B3S1BPbky%2Fwif0VhRyADBk7iCBDjAUT%2BbtvUydEDJzYixhXPWn%2BvJiGy%2BkExDNd5jfWpOs8ejCx2%2F5J%2BiawDUbfyivNuUqy7DVmPjDDQpj3geNIiX8wJ9dbwX6fkzC0jfOPHLw5HeRCtYfKar9rjjLFMkdOPN4ZQ%2B2u7SQNqkHg4SOyd1dmpnni46hqqGrxSuua91go0z%2BOwHGW2CieJnKusSoB0HB3ncaQMfW0jvD6NqOJYA7KJdDjMOktnCNOdtpp9sH9Pu02SGdArlEsxL1RNGfXNYrFZ0%2BsgbTwELBLjPIfMBSu6Vhj5Xq%2B3pFIMbDmqDmWtSZQo0%2BaIqEarYzSvj7ssmvBOoGo8kRdlOEdhTuieCt8o6uaefp%2FCHji%2F6wGN06jzKOQONMwMIGr72%2Fgh0HJjLzQCkjchz3winHv2TewCZ9p4NGqdxrRYOvZRdku3QRbI9T%2BVfSEhU%2BKm03DiNpPqmVBIbQtn0ZnLELptsJEWGY8PJLffbDJbU2YbZacZs%2BSykWlRT7yzUCsUKG6SzZZADnDye1zWfGWlZUc1ijgDNU7dgwN6bw%2BEoBVw9i6FLbHgqdoSQ2zlA3YwcDyoPkOOcWPt5AjrJ3taLv57PHwkw3cOJwAY6pgF5NKxxX92Yp%2Fen13X92lPpzaLucNjR0KrL2qtMhnfiQEM3E7hl9DuPTcXTopqB45KHNSXQ2prs4Tj9jZFsXeOEnVXIRn4jqJFffkO6J1rhwKQ%2FOhbDhQU2Gp92aiwnWlCNdwbiGsH0nV8YKO95j9LGEfEgyVqNoE94ubqZU7pRW%2FKp7DIODlvLdGalg%2F7FEXky2spmBvMA8n1RxpfqPUoJHjEjxfLc&X-Amz-Signature=7df6168d65b4c2f2b5bfaaba5fda8e9a542c040297f28af9e3a65740e8bad6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5LECU3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwSc1co3uhmK9T7KS953%2BS25uHOq9r%2BDr%2BogFBoXYyXwIhANbrxZ82tRTnv5cGOJ9q4WHoDlQpEhwULtOYvf0TOazPKv8DCHgQABoMNjM3NDIzMTgzODA1IgxdOmJnlsp0UspXeu4q3ANlnkgFNazWiPI5BoIxRwSVRJlmEedtJk7g1xZQGsxqZ%2F%2Fy%2FggEr9SdavDBa9vffXbVx0Y%2Bhgc8PpDXJgD6BOzFKI84kiZ8pNb9yi5i8Uaq3yHIOV%2BSZm57YCaPzcqJjm1O5p1wH%2F%2BpLPKl%2F2Cka84E4zintdmKx6dNoBWEnbs8QSp3pPFXMFb3u7OEyHPr%2FDz%2FC%2FVSWyCk6f6lITvWlaA5BVq8aRHnpoHZgSxYeGX4kSPtvEjGaDQX6ECoXELti0fRuHc7g4sbEBcppk94sWECNAhNqn%2FncYa53zlCRWDIz17hr%2FyifU%2Be8dWL0aprTnoqcSNVSPPDJZX2nX2zdMAgmifOY4XWA57C7mYA18job6tftNk8wK2wMGMVqbXan%2FuZ8C63iUD%2B%2BuOnolio5Dg3e8OD%2B6sj%2BbFWoM1lFiXvSwaHo8n0DIUt5iXr7NntLZ33g8lnvMFWFaZ%2ByHWQTKgv81a1sC4txalnRedJIcQP03Ut2AIxutN6dHCiCULrbrGqeGjX9vQIkeBX%2F5%2Bgu7R6ZA0%2FjSm58Sr4rPFndjteuUH%2F01HkvJGGn0Ry%2Bs5%2BAgnEpunwcNArZJEbrf7UFJS2wFvC%2FS7YImZv7mU61l1Xsjd1XxDIKnkjIPrhbjCvxInABjqkAYJP98uZWq3SnjQFTDRJQ5gJJOY6RHAgl3om3Dftnq8VMUjcW3yRgug5kUNHDe3MiGjKy6i%2BY4NyiOPxT1XgYygsxGpmel0xYO6zwHe8ethk6zocU7k1tjiu7cLXcK77RNjjTjzNUuBZA5%2FolauFLCjRcpoTBGRoQpXf2doJ9JcYc7rZqgHTUT4YLhg0aPnJOk%2FJy25QU4Y8YuvWgoMJrwinAbqz&X-Amz-Signature=494b3d16e46aab6990c11bd8fac13b9926fd713f508f1264bfe299af00cfc9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TO4ABUA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTBAzjnWSYXUVcm6mFaoPe%2BEWFMruELjzdyak%2FgRjXwwIhAJTiyJ4XTyIikxLCkjBHiCRcKHikICh5GBCEdhdIRo%2BhKv8DCHgQABoMNjM3NDIzMTgzODA1IgyiuaQqrj29w7DoysIq3AN9Sj2wwknFWJ%2BobkFwxfDGPB9AeuZWsqNieKDTaas7EGlIJgfsUDo1ffla5Vdw0AGYp2mIlrgWYK2xlsLkfrr5GF%2BOxKsrH9crHXcmZ3Zmkq5%2FKjn5O%2FdK5PL0wzsvTy7o1arP7Kj6YwEXKgpECCuBBcG4F3bJ2Z%2BCoT60CAlItV%2B4I1QH0OZcvyN4DbpRrqCLVOzCIbEGHwHAskx9%2B%2B33pdVIwJUpUbfMQsKVrwfM0nA6fX0mcX0ZJin%2BWjAsDBAZiseK9UBEXD3ImU0GUBC294gmkexOwLfFQMgJRjYtUyGQK%2FyRVclFpLSX5cJu7rQOkyfLi7LD88t59i9upIv3nuk%2B7MRTDduwuhoqRPRrac6jZp25MSef9O1hE0ykQ8F%2BiLnh30FzH97PrtnS8DPKWWSUAwPQuEZDG1%2F1Ti%2FiPmHo%2B7cKdg%2Fs4hiwAqOiUfFiSVpmjYBoqcSDP6FBmP48zeI8XalDMno6fdf%2BU1i%2FHhswJE9ofhMjFFZUbVG87a0o88ZlZcTAH9D0kC%2FrxglzVL0dt9Mvrsuhf0hpj%2BI1o4PSs2pP9qus%2BYYB6fbp8AyWNoRItLO4ngvh7DZRGXL%2BVx13RPKh91vNDcT9YfR70hhzX554Xt9NlQrsqDDZw4nABjqkAaP0BMi4dTGFypEELofYFg6EKoTlVw0Tcdlgr%2BysDp3kneg1ZrqgoP2hkOoxC9mUC%2BAudC8lNiotKnN%2FjrhEKya2zZ3qNtwo2W3o0QKSo3BxWz73NIbrM5xZR0q3RITHeyXGMAjoupx2YQ%2Bmwzyg7NK11gxcX0dfXjsAgihcQF4OVHMR8Syax02seJhXPHZg3CkpV6uC3hJs%2BX%2BsiIV1xEAlzyiH&X-Amz-Signature=db6b36a539068dee26feef3b812b086124fdb2ebe78af3a6fdbe56266882c664&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
