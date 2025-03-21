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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAEKCHL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQC86vPimge%2F1W9KSFzGsubGn4uSrsKWKeix%2F%2Fw4C6p0QAIgLeTh0RCy%2Fg%2FKJ4Yms4V%2BMDdI43OSzNZkdchlzq%2BNQgwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJzs8A4eAn31k8eRCrcAzgfI%2FfwUU%2FULlysdAahwX43BwZMxrL17UFBsh8Wmudy%2FF4tjHVWrP2ABCRAC3et1e1yFQbYbTUhy4q4%2BFb20ZfPshLb%2BuodA7yhminoYxxeQdvSlSROiwYKbClFlGg88zUCJTC8Zv4hNe68fHSOK5N%2Bx3OcNozpP7iBavjV5mzBzOlV83QMqMvIjZuo%2Fu%2FbAXfccBtxO9uVXAT2e%2FH6OK0rkkbxRmnfL%2F2TEpqBOKPODfnnNjLWwQo%2FBNxVFhZuyYsXjzeHB21SSsFNXqFZ%2BrIgyfcpd4mNOdYOkWcdY7ymt%2BUAtLjKZ5pJWvpSovSAXq1HGCs9UnNfTXZXxQKThcHNdySls5z0xYrKMohhYMnr4NzMI4hSSM5p%2BSzHxE4Qp2LVc0thOKE5rz1Ql0H7eN8QrNJpgbbja4J6pQ70pJlJai00uHaGb1hgv7R5i4gZsbb0CYbZUDG8%2BOsVCknddP0DyDEhLcGI9OkG0VRgqLVs0RWSJdEFLDITLLnMPUB61Lgi11xxpnNGPaq34A60f1QIDMcSokTuaoy3ftrvkm1u0dY8P9Vqw%2FGmD%2Fs8zz1yNUmsX%2FHTk6cmuaAmWQ%2BCx6kKfSNj%2Bg73IjKIswStj3Pdsf2vNPCaDk8vl3WqMKLa9b4GOqUBcOeJJn%2FPUGNHXDX6zjk%2FMKQBHNk29as1GMekLwPa%2BfY%2BCHo9L5ybpHbYO4hMgZ40WDT6%2B544TxX6ztfvVVbDOI%2FHiOCFANniPG4g57J5BtZQuYj66lIvcYXiaUAD2OFQadIkqlWUwcANjTFFA5cKtaJfMp0iJ6s4F72uvo1AquEEoiYkVcHeKeA6520D0R8o6jtf3TZyAK9jsxmONLIoscie6cZz&X-Amz-Signature=4c4d599c5c2dd273d72fbf6bbaf5d329d43bd51fab524d0b6235120b238098d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAEKCHL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQC86vPimge%2F1W9KSFzGsubGn4uSrsKWKeix%2F%2Fw4C6p0QAIgLeTh0RCy%2Fg%2FKJ4Yms4V%2BMDdI43OSzNZkdchlzq%2BNQgwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJzs8A4eAn31k8eRCrcAzgfI%2FfwUU%2FULlysdAahwX43BwZMxrL17UFBsh8Wmudy%2FF4tjHVWrP2ABCRAC3et1e1yFQbYbTUhy4q4%2BFb20ZfPshLb%2BuodA7yhminoYxxeQdvSlSROiwYKbClFlGg88zUCJTC8Zv4hNe68fHSOK5N%2Bx3OcNozpP7iBavjV5mzBzOlV83QMqMvIjZuo%2Fu%2FbAXfccBtxO9uVXAT2e%2FH6OK0rkkbxRmnfL%2F2TEpqBOKPODfnnNjLWwQo%2FBNxVFhZuyYsXjzeHB21SSsFNXqFZ%2BrIgyfcpd4mNOdYOkWcdY7ymt%2BUAtLjKZ5pJWvpSovSAXq1HGCs9UnNfTXZXxQKThcHNdySls5z0xYrKMohhYMnr4NzMI4hSSM5p%2BSzHxE4Qp2LVc0thOKE5rz1Ql0H7eN8QrNJpgbbja4J6pQ70pJlJai00uHaGb1hgv7R5i4gZsbb0CYbZUDG8%2BOsVCknddP0DyDEhLcGI9OkG0VRgqLVs0RWSJdEFLDITLLnMPUB61Lgi11xxpnNGPaq34A60f1QIDMcSokTuaoy3ftrvkm1u0dY8P9Vqw%2FGmD%2Fs8zz1yNUmsX%2FHTk6cmuaAmWQ%2BCx6kKfSNj%2Bg73IjKIswStj3Pdsf2vNPCaDk8vl3WqMKLa9b4GOqUBcOeJJn%2FPUGNHXDX6zjk%2FMKQBHNk29as1GMekLwPa%2BfY%2BCHo9L5ybpHbYO4hMgZ40WDT6%2B544TxX6ztfvVVbDOI%2FHiOCFANniPG4g57J5BtZQuYj66lIvcYXiaUAD2OFQadIkqlWUwcANjTFFA5cKtaJfMp0iJ6s4F72uvo1AquEEoiYkVcHeKeA6520D0R8o6jtf3TZyAK9jsxmONLIoscie6cZz&X-Amz-Signature=2525c676c062d923435013dda4f8581e65013073e36e053557459084909bc09b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFEF3E7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAGlfJhtZ2ucsjG9Pnhp3anjss6%2FxVLq0X9Hd1SZ0uaPAiAM7iI0Ff%2FIRnLgo6W29buH%2F%2FVMPPjf1wmalcAbTcpHXSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2m%2Bt9%2FpryG7%2B7b%2FLKtwD98WeyrsfZjm5rD23oVJ1h%2B6oB8FUE6SJg0MpiBCisj78%2F4YzYkXt4MQ8bGJtmXO51qHjJ%2FXNk2EtsmBSQ8mVCAI1BZKmFQyKxHNbdNCA3u0%2FEQXFk8VRACPkHYo0uZFnxDVJ3YdjFZzPtpqxMHaxUC3t%2FyTgbs11PFfk23B1eWmR2FGUhWtndbFIDdH%2B4JwL%2Fbdan1orJ41KLVxkDQ7ytw4jR%2F8JOmMoc968yOfBp%2BlhAiC0EsmGCl6oQHQWBVjeJvTO5bb%2FqIQNBGngW%2FmW2%2Fj%2F2c05rELWZnz99dhL63rbVT5MA9UCqYKAGVRzPCwNRd%2FdxJQl66t2Jx1ty3mvmOz4BHgkk8cOAB3WGzFOAyEtwYFXgyyJtrZfDpgJi4RztYohpCDRZI%2BgwoIMkIrwu78swvrUcNwV0vWBvX7fdWEoQyCubHfX%2BQllJd6b3urTMzc2Wt0aQtpipL6Yd9xEz1gNVann8iwbnJ0m5jDTMCY6IfwVNin3g03zDCvr7wmEo82kXtKdEE2qJGcAkbMWvQksqP9T9OI7NRZSh5BJLEO1kzjWqB6ISIrbpRsM3Y%2FaIRM4RJn%2Fe1ztq8B2MUz1qCo3%2B6pt2Q%2Fb5ijfcJehaS7%2BNrD%2Bha%2F6UX46Qkgw1Nr1vgY6pgGzXeqe1yt0MPQA1ODjr3v1K93W2vtj2OUK2T4InRBOjBQGkh%2FuCp8Peit46R9q7E45PkHqTLpie4oo9LlZ0hivOuFeDC6M4zK%2Bu0ZudCWqbgEdgBi%2BWnPCzlnU5OihHxrOZl5ShfeB0Fu8n7op1ytZ4Zbx3WqsKgHxRuwr%2F%2Fd5DiCJ6XxEQvNA0UK7YwFWhPGnX08aVPjFa0zZRYNfDDpChl5X9X2y&X-Amz-Signature=503ffb82b18518e059690f44dded0e725cb9fa910b749b7250b9c3df97a7a736&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWWAZLF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUTlCNVRgFep%2BsLwOxYpKLqSGKJ8hYfBvbGlsmJGijhAiAEMz%2FiE2ZNJnLmZerhnvFJ7BTbtQVe55jXO3tS3kqFiCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCAXBqNWvZPlTn7lKtwDA9L6fgSY7dy43KH4H%2F39K%2Ff%2Bd8OuSDh%2BCgmTpErRso5zC%2B1UVe8f8KSwgRHT8WVb5zWDLyeo1C%2FsbwP9CnBZxnoL0rRbaPrcjkT%2FiUrUd7LNCHaxenlXR4kzM3Ser1ldt14fmHHhkFF0K0l2ytxfPgQlvtenIFX6hA9WBkwom3u3%2FEX6EQS%2Bfw%2B4MhA5iBZ3cboAQuiltFd1Qc%2B304y2YNn7ta8%2Bh82FUEe2s81vDXomrfaw1Sf6ND4H%2BeVbA3dP74qrHLht8zWH6IWWWVGPc%2F6r1XgfYp%2B%2FeGRDnzb2YIilH0ybYl%2F3oLf8hMWSCu2zgHIuQYqRU8e3ugRvOfD1NUdZCtxWaUOM7D1aNtY5PPfDf5hYymXinUi4EaUeCGzUuaLo1bJisX1OVuotFn%2F%2Bw9AInTqC7Q6JBmKuwNoFFLaaR%2BPQU63awD6nSO7IezvWhaJcR0gFtLHPFgjVyoO3SYeJv1mSMy5%2Bozgc0j%2B0H7F01rtUl%2BG1cdiYHW%2F2nvBaNyvqiI7fzUsyqfXTrbJsLN3Yq2pJGstgfiaicIQb0IY21cKOyEK2dfg4yfQCTVMrI%2BQgrMbO4i42%2FYkj7crw13crFpg9tyWPEKJ6AqjAnPspdUKeC%2BswpSfpbVYwgNv1vgY6pgGeLEfzgflgIwyYrXfwgLW1KodOOOck2cjTDwy8DE53qEzLc2%2FUF5AJc%2FEZqRR6oeUKBxPB8%2FHJbZ4DbWGbc%2Bmy4S49Cd9ipAz67EB9WuTMxLMNNr7nNIn5PNMxIuFdKnsYbWzitbZy0Mh9RVhSmiHTFjMSeTJw6c6WDLJvjrgXXAl3T%2F5I%2BY0qKXmaIzqhpxLzZ2jDkJm1ulLsQk9zgaZJ%2FZ1kA9nR&X-Amz-Signature=9c3233a27f8c7179a08c49ef368001d56958d128e4fc52c5a77e0cc7f0b4c93e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAEKCHL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQC86vPimge%2F1W9KSFzGsubGn4uSrsKWKeix%2F%2Fw4C6p0QAIgLeTh0RCy%2Fg%2FKJ4Yms4V%2BMDdI43OSzNZkdchlzq%2BNQgwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJzs8A4eAn31k8eRCrcAzgfI%2FfwUU%2FULlysdAahwX43BwZMxrL17UFBsh8Wmudy%2FF4tjHVWrP2ABCRAC3et1e1yFQbYbTUhy4q4%2BFb20ZfPshLb%2BuodA7yhminoYxxeQdvSlSROiwYKbClFlGg88zUCJTC8Zv4hNe68fHSOK5N%2Bx3OcNozpP7iBavjV5mzBzOlV83QMqMvIjZuo%2Fu%2FbAXfccBtxO9uVXAT2e%2FH6OK0rkkbxRmnfL%2F2TEpqBOKPODfnnNjLWwQo%2FBNxVFhZuyYsXjzeHB21SSsFNXqFZ%2BrIgyfcpd4mNOdYOkWcdY7ymt%2BUAtLjKZ5pJWvpSovSAXq1HGCs9UnNfTXZXxQKThcHNdySls5z0xYrKMohhYMnr4NzMI4hSSM5p%2BSzHxE4Qp2LVc0thOKE5rz1Ql0H7eN8QrNJpgbbja4J6pQ70pJlJai00uHaGb1hgv7R5i4gZsbb0CYbZUDG8%2BOsVCknddP0DyDEhLcGI9OkG0VRgqLVs0RWSJdEFLDITLLnMPUB61Lgi11xxpnNGPaq34A60f1QIDMcSokTuaoy3ftrvkm1u0dY8P9Vqw%2FGmD%2Fs8zz1yNUmsX%2FHTk6cmuaAmWQ%2BCx6kKfSNj%2Bg73IjKIswStj3Pdsf2vNPCaDk8vl3WqMKLa9b4GOqUBcOeJJn%2FPUGNHXDX6zjk%2FMKQBHNk29as1GMekLwPa%2BfY%2BCHo9L5ybpHbYO4hMgZ40WDT6%2B544TxX6ztfvVVbDOI%2FHiOCFANniPG4g57J5BtZQuYj66lIvcYXiaUAD2OFQadIkqlWUwcANjTFFA5cKtaJfMp0iJ6s4F72uvo1AquEEoiYkVcHeKeA6520D0R8o6jtf3TZyAK9jsxmONLIoscie6cZz&X-Amz-Signature=8dc225374f8427442ed0bb99c26f5d5139b9d2e3c1a6ea6a525ea23bf6644e21&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
