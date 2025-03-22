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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU5Z3NA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9pWNm0X7Dp7IlKKzFVsDDzx6lTLxP73xdMJRBVFovEgIgCTa2W8OrCX6YZGTIYgZ99wrV7C%2BZKZ4i1cdyyWt5Qt0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6bKNMxHm8beVjuCrcA9%2BnPPzOo%2BVhJc35DEmTlR1Wx%2FvBxXQywA1XD3tcEoCxBFIR%2F4V2fwZn4wTrtrQkaulpjTvdHPYTqvGGcP8%2FFym8Aw9KUbtuL3HOQUAldBo36oZ3gpgU6PLYZxYOVWvMniyEKJZUZJlO9d79gfEj943Fgg7oV%2F0oh54rS8i13bMwuPymJAhBLIxcSZ8vpThOuiMfzXVCrLjmLNoZ9TGVULaUogGucSrs4khim3tl7reBbiVmAbXS8JvKga%2F4mm400l7Yjc5VJkLWC1%2BCE%2Bron2NZjsYJDpjGDGqx%2FX7Nn1c4Juct%2B1yXhtvURTr5Azc208SPGHjnhOPdM27p1bdXYyVbmD8VFSJDnAPxyxIWZaYUWgNoh0eRymZ8A5SsFW3AtcVJ4rq7kiaOCuNxY6Yqr2o92Kp7XfdQU6qmWL0BIS2S0mWGfvVAEnYQtnu9ipYNkHtb%2FXssbO9zZHEKdntdMrSzRvP2GA0KIKVV4R75L9RKPBGytMsa8%2BB8Y4ejCBUKCo86b7zLXVCqgrVGD9yKUTobt0HXN4ck17n%2FHmQbIUgF7bQ6zbrJfKwUP9998VI51mQCGCbUNFAroteqwALeCC28zviE%2F3lfKyyfP1GRPJl4oiZjqrJvVXKqDg0cMP6t%2Br4GOqUBnCuNOEJU68DvnxMer9Vrp1hKO60AtsxZGm3iw8Apa3RFsYetrmcFdH6jew29vEE3Qsu2qfdYjyB53uAK19x1dDxKhY%2BKARsV%2FveDGKh%2BXTIdLLRgxKGeo1reNk2UimeOod3rnQkU8XRrFUb1EUwGyuQaAEI10cvFLM2Plm5XDlsQcVhH84p3aBpWuH210A4ePvsIpQU6bw%2FlXYMUnHHSb4heDnzI&X-Amz-Signature=adcc1ba2144e0ca6916ce03658157e707bf375b60ae5e419471558d17e8b7abb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU5Z3NA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9pWNm0X7Dp7IlKKzFVsDDzx6lTLxP73xdMJRBVFovEgIgCTa2W8OrCX6YZGTIYgZ99wrV7C%2BZKZ4i1cdyyWt5Qt0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6bKNMxHm8beVjuCrcA9%2BnPPzOo%2BVhJc35DEmTlR1Wx%2FvBxXQywA1XD3tcEoCxBFIR%2F4V2fwZn4wTrtrQkaulpjTvdHPYTqvGGcP8%2FFym8Aw9KUbtuL3HOQUAldBo36oZ3gpgU6PLYZxYOVWvMniyEKJZUZJlO9d79gfEj943Fgg7oV%2F0oh54rS8i13bMwuPymJAhBLIxcSZ8vpThOuiMfzXVCrLjmLNoZ9TGVULaUogGucSrs4khim3tl7reBbiVmAbXS8JvKga%2F4mm400l7Yjc5VJkLWC1%2BCE%2Bron2NZjsYJDpjGDGqx%2FX7Nn1c4Juct%2B1yXhtvURTr5Azc208SPGHjnhOPdM27p1bdXYyVbmD8VFSJDnAPxyxIWZaYUWgNoh0eRymZ8A5SsFW3AtcVJ4rq7kiaOCuNxY6Yqr2o92Kp7XfdQU6qmWL0BIS2S0mWGfvVAEnYQtnu9ipYNkHtb%2FXssbO9zZHEKdntdMrSzRvP2GA0KIKVV4R75L9RKPBGytMsa8%2BB8Y4ejCBUKCo86b7zLXVCqgrVGD9yKUTobt0HXN4ck17n%2FHmQbIUgF7bQ6zbrJfKwUP9998VI51mQCGCbUNFAroteqwALeCC28zviE%2F3lfKyyfP1GRPJl4oiZjqrJvVXKqDg0cMP6t%2Br4GOqUBnCuNOEJU68DvnxMer9Vrp1hKO60AtsxZGm3iw8Apa3RFsYetrmcFdH6jew29vEE3Qsu2qfdYjyB53uAK19x1dDxKhY%2BKARsV%2FveDGKh%2BXTIdLLRgxKGeo1reNk2UimeOod3rnQkU8XRrFUb1EUwGyuQaAEI10cvFLM2Plm5XDlsQcVhH84p3aBpWuH210A4ePvsIpQU6bw%2FlXYMUnHHSb4heDnzI&X-Amz-Signature=58a15c854d01d78b097ba3f98bdbf547842d94da3640e26fd016857c2caa8ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S2X3KGJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCETA98BfYzpmnIhV5kgjYGpUvcNnZaKvKasH864pMZvAIhAN89f526x5050xt31t%2FquNOSDbYjhUuLGKBbcig2sms9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXig2T8GmPLZd6MLcq3APYgtyeMtf%2BgA%2FhaaTSqYloQTmhA2hIm1fIi%2BqZlixeyxEhBaxTESsD0p1uzdzWmrB2QHUD3tnJB2%2BDq36Qu5IslWnyJTeyhELFnUyy61vEuExd7Q8eIk9PodmP9wnJ4q%2BhRt7sd1zU%2FH%2BdVbR9wLgdqProkpe0tikaIRzRSvXzTNylvVB36U83NQVR%2F9KtK6h46i9RM%2FqX9AKLBrQd8q2ukoTzmrCaaQ%2FAEwfQw2IWXxzKwhqYzFP8Qqd0ncUziv73AOmkRIimNPMGfXHeuJlvgFDFXMLAgBKd%2BC5ZurfOK3J8jB1246tJ73P5D9ISUkTlt760y%2F5z6e9pH4KW3fHt1ufQl%2BuiW1ia49%2BN24HK%2FdFtyuD%2F5mWO7b3N7gIWSOIlG9WKV4WRCoYrl5g8M8oppVehydBKhLL5ttOQpWkQcQM2fzhEsWCZ%2BWZ6H4xtxvClP8nacoTFuDWnvXcJbLzrcI873SVrz7DOOtKRSriQMVkppNIe39a8OFZQwsX%2B0TRRY%2FaYuXeHfqT5LWKX5RCFrOR9W5TXqr2%2BEmcLk2Tc0E2B2zvuaiKylDX7lxv5FE8%2FPZX2qWs6DFj%2F4EMCq5LYgp6%2BE2z4MM4nATxKSLfHnzo0nrjBlG1rpc81hTDrrfq%2BBjqkAcD10psRQX6UzI6hDVjqXGHGXYPyppIDwLL3n59LOThS9fHDOAk2evhVo%2Fm8Ail5o6qZnRX5Mx4N6D%2B9VWZdK7vakQGcGKx5OxSHaLq1qrFBWXE1GS7J4UDuFIRt%2BcGKxSiVnNuWlW8Gu7DNUxgMb2Kiw816NsVdyqKOAH680uzjiOQN7DEAC4wVlB%2Ba72kt2JlAudhtCYcWpJDmDmnIHdFKzdsR&X-Amz-Signature=2fabf8ea9af1dc8eaa9f01304b9753a7f9e3c35cf4c3a9afb3f10791bfcaf8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWQIUOG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFKaxB5G6pglHddrz97UJjbUSNf%2Fz0HWCgc72lB4cTlBAiEAm%2FoZlguNxYD4gVtyw%2FBdnJ%2B96vaJDrriC6ASQT2g0b8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMBTkJZvye3qyTEjyrcA4LmlSWeFZvhZw8y5H1%2FAc02AOwUPQ957Qg3R0h5PsYxoX97e0n0EDjcLt7Y%2BDh4OxL%2F%2FV7AwLVkDiqBSnTwjIOzuz2mBUtKqlc8AKrpdGl4tMVu2P%2BcAbE2smtWfsSRQQdw4Yb5M%2Br8G55t6YaZC1UrG0PhfcnMVMm4Go6MYmgCBeWGHTFfVVuG2hMH2RevB%2BKyRpb9sWc7RUSin%2BJa664KA5ZsKgbAio22c18u0PzgKyIO1bHENy3H6Hi9PW8Ei%2BdFj4z9yIejgkiBW%2Ftn1V23pSkZcQLiEfimOqkh8%2FhoElj%2FCA%2F5Dj2ywwn0XrRWR6XKTxRevOG0qvuU%2BaSIabnPFzAbGc3fn6mYWorfb%2BrsxJbllRMQIQ1Vkkno9vfQKH8oD33NLxp0suiVtw099oY6X31u3lAbZqGW9H6V1QvfMuouB6uijnnFPGS6Mml6wC78u1fpAxFq0NK8VaZGcZknHq%2Fyiz4ju%2FNVEVkBrpjYx%2FJeXJ6vaWigSh%2F7sBYdeTetX%2BcbrYX3QxOHnSQCAHsYaSjpRSEqAKQfyQtqTkzDf4Q7eONnxZGMpsvVkCczbk5zBM4cuChfH9IW0Q7OhyOZuS55hI5Rsipg8Q7yJOfSy6b7E4G1prTDc8hQMOqt%2Br4GOqUBam1nuGcwXeoBagftcbeNiM4u2sOvIZKfQZvhE0opsfWA7%2BiLizsdhTnNKg4%2F9E7%2BIXlDyCRh%2B2k1S80Dte8RFj514bsiqnHrEI1nwsueaaLDo6t8JWX0byAUlcy1hkrMyv9F%2B9W0VmMPZ%2Fap%2Frm9k%2FF23mEh2q4f68nyEZDucW8DRX4G4HrFs2qbq%2FnGUYvoLwh7x5ub9OiVcRkzEh2hx5CNpvv1&X-Amz-Signature=393820b588bf9fbbc7a0b8ca384fada8ed70dd331cf7246ae520b8e4a12f6b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU5Z3NA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9pWNm0X7Dp7IlKKzFVsDDzx6lTLxP73xdMJRBVFovEgIgCTa2W8OrCX6YZGTIYgZ99wrV7C%2BZKZ4i1cdyyWt5Qt0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6bKNMxHm8beVjuCrcA9%2BnPPzOo%2BVhJc35DEmTlR1Wx%2FvBxXQywA1XD3tcEoCxBFIR%2F4V2fwZn4wTrtrQkaulpjTvdHPYTqvGGcP8%2FFym8Aw9KUbtuL3HOQUAldBo36oZ3gpgU6PLYZxYOVWvMniyEKJZUZJlO9d79gfEj943Fgg7oV%2F0oh54rS8i13bMwuPymJAhBLIxcSZ8vpThOuiMfzXVCrLjmLNoZ9TGVULaUogGucSrs4khim3tl7reBbiVmAbXS8JvKga%2F4mm400l7Yjc5VJkLWC1%2BCE%2Bron2NZjsYJDpjGDGqx%2FX7Nn1c4Juct%2B1yXhtvURTr5Azc208SPGHjnhOPdM27p1bdXYyVbmD8VFSJDnAPxyxIWZaYUWgNoh0eRymZ8A5SsFW3AtcVJ4rq7kiaOCuNxY6Yqr2o92Kp7XfdQU6qmWL0BIS2S0mWGfvVAEnYQtnu9ipYNkHtb%2FXssbO9zZHEKdntdMrSzRvP2GA0KIKVV4R75L9RKPBGytMsa8%2BB8Y4ejCBUKCo86b7zLXVCqgrVGD9yKUTobt0HXN4ck17n%2FHmQbIUgF7bQ6zbrJfKwUP9998VI51mQCGCbUNFAroteqwALeCC28zviE%2F3lfKyyfP1GRPJl4oiZjqrJvVXKqDg0cMP6t%2Br4GOqUBnCuNOEJU68DvnxMer9Vrp1hKO60AtsxZGm3iw8Apa3RFsYetrmcFdH6jew29vEE3Qsu2qfdYjyB53uAK19x1dDxKhY%2BKARsV%2FveDGKh%2BXTIdLLRgxKGeo1reNk2UimeOod3rnQkU8XRrFUb1EUwGyuQaAEI10cvFLM2Plm5XDlsQcVhH84p3aBpWuH210A4ePvsIpQU6bw%2FlXYMUnHHSb4heDnzI&X-Amz-Signature=468c1ed8b55ec58ea7e8d769fb433f618ee7a668008b1847b630b1e8f950b141&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
