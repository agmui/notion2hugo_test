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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5YP3Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY1vRYAxRW1GJfKUbpFfn6KepS751gUO3N92O9%2BgJsFgIgXe59XDxLP7eJRpHaBv0ryZ0RVO%2FT2R6UbNOfSSOzL%2FIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuIEgFlmlDrHcIzWyrcAw%2BfvBPSSBlD3ynvHorfNw3kce%2BWXf0rfZ5vUGBh0q2e0q2GerdVlzZS4pkecNFo1j7L8sFP0uYLLgLY3cHyPr6e%2B99EW8xKSWY1qQaUnWTxT6oIbnB9zFigAsJiv%2FU7dXXMRz6bL7i2Lz2JVBSXCnIHY0c%2FGjzUF9vBRIVC3MJyQjBZ9KWqqs1I5I88ll4hZsg4d9L8ffLGlOfWvWPTamibJv1rttYV4ofgwCER8JSdPnm5DOmGZ%2BNEn5Wy%2B863NQncHbOuXDzrdAo7ZNWfroZMKGq7Grfk2w5E8GLYWZ3CxiqLEHiLA8BQuNkY6K%2BsXLr%2B90V1bYspC9XyH04c0%2BqxtrhB3hKAdt%2F7OSLMLX4kZVmnjyra%2BTpuUYOaHW8Sek1zC6t5cv59IP1%2F53czU7PFtxbKLQRMFPirH7kSXja320WAPASBiopIsWYf8DRdep4gcL8U%2FT5Ch4Hs7iJnBK823OaKhpW64dYBToHg4zQTQ4KEPEKw6cvPc56hRI4iMjBGl%2BCRHFa08Xs7tkJwx1iCDZoUb2ey%2Bkpq8ttDLfhx9Y1BN8E4Bl1FtPYOT42iH9njwqS%2FxR2bFdg08IuBmQ2Z2JEwcAqvGfSKZefZaz4T392GeunBMbFFvOm4MO7ioMIGOqUBmvyDPYArYVSHzGOTq3l%2Fw%2BVDhxpfO75Gfc6eLvcFN11Hz%2BxVB%2Bflby1TaLhKeA527Slvhgly%2Bl0%2BLre%2B3dAdWFVlJJS7Zc9vVZPHjk9YDKxwHNZEhQQHN64hWNyTh86dzxkBQn5zWYyPsnvtfFxKAEv5dgvqRWKmFvvS6w8%2FQGMrpvNmBgtaQPDK4XsQxroT6xEvDsABajCmKu4j3AzpYD76Z%2Fnc&X-Amz-Signature=93ea41796358e7060e890667fa0556adeca1d16436a3b8c4fec1597370d332c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5YP3Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY1vRYAxRW1GJfKUbpFfn6KepS751gUO3N92O9%2BgJsFgIgXe59XDxLP7eJRpHaBv0ryZ0RVO%2FT2R6UbNOfSSOzL%2FIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuIEgFlmlDrHcIzWyrcAw%2BfvBPSSBlD3ynvHorfNw3kce%2BWXf0rfZ5vUGBh0q2e0q2GerdVlzZS4pkecNFo1j7L8sFP0uYLLgLY3cHyPr6e%2B99EW8xKSWY1qQaUnWTxT6oIbnB9zFigAsJiv%2FU7dXXMRz6bL7i2Lz2JVBSXCnIHY0c%2FGjzUF9vBRIVC3MJyQjBZ9KWqqs1I5I88ll4hZsg4d9L8ffLGlOfWvWPTamibJv1rttYV4ofgwCER8JSdPnm5DOmGZ%2BNEn5Wy%2B863NQncHbOuXDzrdAo7ZNWfroZMKGq7Grfk2w5E8GLYWZ3CxiqLEHiLA8BQuNkY6K%2BsXLr%2B90V1bYspC9XyH04c0%2BqxtrhB3hKAdt%2F7OSLMLX4kZVmnjyra%2BTpuUYOaHW8Sek1zC6t5cv59IP1%2F53czU7PFtxbKLQRMFPirH7kSXja320WAPASBiopIsWYf8DRdep4gcL8U%2FT5Ch4Hs7iJnBK823OaKhpW64dYBToHg4zQTQ4KEPEKw6cvPc56hRI4iMjBGl%2BCRHFa08Xs7tkJwx1iCDZoUb2ey%2Bkpq8ttDLfhx9Y1BN8E4Bl1FtPYOT42iH9njwqS%2FxR2bFdg08IuBmQ2Z2JEwcAqvGfSKZefZaz4T392GeunBMbFFvOm4MO7ioMIGOqUBmvyDPYArYVSHzGOTq3l%2Fw%2BVDhxpfO75Gfc6eLvcFN11Hz%2BxVB%2Bflby1TaLhKeA527Slvhgly%2Bl0%2BLre%2B3dAdWFVlJJS7Zc9vVZPHjk9YDKxwHNZEhQQHN64hWNyTh86dzxkBQn5zWYyPsnvtfFxKAEv5dgvqRWKmFvvS6w8%2FQGMrpvNmBgtaQPDK4XsQxroT6xEvDsABajCmKu4j3AzpYD76Z%2Fnc&X-Amz-Signature=296879bfb2796394fb88b671db17acbbc4a2dc882bc2b3893e045d9acf64914d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5YP3Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY1vRYAxRW1GJfKUbpFfn6KepS751gUO3N92O9%2BgJsFgIgXe59XDxLP7eJRpHaBv0ryZ0RVO%2FT2R6UbNOfSSOzL%2FIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuIEgFlmlDrHcIzWyrcAw%2BfvBPSSBlD3ynvHorfNw3kce%2BWXf0rfZ5vUGBh0q2e0q2GerdVlzZS4pkecNFo1j7L8sFP0uYLLgLY3cHyPr6e%2B99EW8xKSWY1qQaUnWTxT6oIbnB9zFigAsJiv%2FU7dXXMRz6bL7i2Lz2JVBSXCnIHY0c%2FGjzUF9vBRIVC3MJyQjBZ9KWqqs1I5I88ll4hZsg4d9L8ffLGlOfWvWPTamibJv1rttYV4ofgwCER8JSdPnm5DOmGZ%2BNEn5Wy%2B863NQncHbOuXDzrdAo7ZNWfroZMKGq7Grfk2w5E8GLYWZ3CxiqLEHiLA8BQuNkY6K%2BsXLr%2B90V1bYspC9XyH04c0%2BqxtrhB3hKAdt%2F7OSLMLX4kZVmnjyra%2BTpuUYOaHW8Sek1zC6t5cv59IP1%2F53czU7PFtxbKLQRMFPirH7kSXja320WAPASBiopIsWYf8DRdep4gcL8U%2FT5Ch4Hs7iJnBK823OaKhpW64dYBToHg4zQTQ4KEPEKw6cvPc56hRI4iMjBGl%2BCRHFa08Xs7tkJwx1iCDZoUb2ey%2Bkpq8ttDLfhx9Y1BN8E4Bl1FtPYOT42iH9njwqS%2FxR2bFdg08IuBmQ2Z2JEwcAqvGfSKZefZaz4T392GeunBMbFFvOm4MO7ioMIGOqUBmvyDPYArYVSHzGOTq3l%2Fw%2BVDhxpfO75Gfc6eLvcFN11Hz%2BxVB%2Bflby1TaLhKeA527Slvhgly%2Bl0%2BLre%2B3dAdWFVlJJS7Zc9vVZPHjk9YDKxwHNZEhQQHN64hWNyTh86dzxkBQn5zWYyPsnvtfFxKAEv5dgvqRWKmFvvS6w8%2FQGMrpvNmBgtaQPDK4XsQxroT6xEvDsABajCmKu4j3AzpYD76Z%2Fnc&X-Amz-Signature=8d0b4abe7966b3ff3be0735ff1489a2a9bfde695f70ab47837b22bda407e1b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3FSTGD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmlxQUqN6cI%2FmNti%2BhOYLnCg6Di2qwBISubbv9dzPA8AiBfMwdfwT0%2Bdi1PxaA1%2BW9Zis5oBiAhspmnUDPOfNTVtyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsoW1qv%2BRwunxZuktKtwDrRHg7jvgOcYlcvK%2FJ9x851Tg6xER3OirzQspOhshfTBVkZw31Wl7Nrj0W%2BFjPElrOUovneWyvpvuP3FDi7tzry6ob7qvFkLF9DoC8K1GkQs9%2BgMS0CqRuDLH4UDj%2FuhxYhhhgoJaYaRl3ucVBQGyiojbUfVbChg%2BJhT4sLoNulc%2FiGwxUVUetP6rz7OBB3%2FEGMv8JNekMs4sBsh4G1vxBxcJq2zGedNTPN%2BWJElaNz92CgGME24LkY8iuUlnfZ0RqjeBY%2F44nEuLaqkFaBwkxY9xIbNyGnnCkAK0Sdvod3nHGVc%2F4rLqCobRyObDgk9sCsvjdwK8lBZLuKsDUBW3euXwEvSXLXKSL42QzcUZI1fx2xalNb0MbCVUZFC9buY80S89l7fzhOQaMBDjoWCvX9avhx5JUEHB%2BbBgUMkh5TKl2H0vXIsY88pL7SsK8szqWfJdVwUgLPFCTlcSGR%2Bh1TWM7AtFwrCYF9IGsvhm2Wx%2F1gpcZ4GgxGLM0U6beJtgltdRIIi8lu9b%2FxYK%2FQJhdi%2FIZdlmm9bJa7U2l%2BLGK3pX4nBTKEGCPHmJB1kATplSy6k90fyu7CLF5zQD5hkQ7XXKWewKcwgzcztRnK3dO%2F0lpdrPGV6qeVykJ0Awur%2BgwgY6pgFw25gqzuJk9mDTFedIv%2FlqFvb9VrBl9M97EoEGuWe572vwv4DqGcjA9lMU327eb8EPaFCeX%2FF3BOZQQiYk4ZceiIocFl9xO5vnK8vUwqvf9gAC1BYROk5B0DKLrIUgZTx4%2Bf9TBy2BmYAZPFEBUyS7E2HL5M9GHR9CvzX4e8gmZHBnzuAILsnqEG1UCHE%2BON7ImdkfoGMNlqYkF5%2Bx33wly5xfsleT&X-Amz-Signature=9313d8718171ea092d77eb5a9c75e0ce0b6b6b134de92b3ca79cd3a63cf32bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOB76T5R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqu8mu8vtxLOmdrgrGtndm8e%2B0kktM9HHVIaua%2B%2B5PAiAarnT4%2B2%2FrJ%2BbVBr%2B0Fg7wokNxzmd%2BtxMY%2FXiw4vVQHSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMux2LxdN3FVgiuVTQKtwDlT2IKDE70csJBwMXlrFMRwDQNCXNFqqvygL%2FMdzqpA7qF8Kl%2Bw7ZGcAqXCb8fo8N8sjHFjE41Eh1cTH64neb9hU3GtkdJz3GA%2ByJ79wUWpeqUnECb6bgX0GYAiAwg1rQkSQZCLqSv8OO5FwlQlXp2ZP6iZ7w%2FtPdBS1z%2FosblcGtSR5JwTOoWgHBipRnO4%2FnmiVhs7t7%2B0p2T9jHIvIctgOSbHnJe0kAgMLMuQ5P3Vzpo0OMiPJicTy8D2fVolFzf3iDVxiNF0oDVTaVsxCjlbuUK3580A73N0excBApZ1fY5A3Reb7s5rtOrN6eiMv49A3CwORNvHlVxGVlNvriaoUwYPxs8yOrYTgJCI%2BIblfcx1OfnBeH9hVYmpg20s4BNd43X8cMcG0xpjFrCB%2BopcodhvPuRx1us8kc5p9YuRrqzADT%2BxMlZIF6F7tNxl3MPS%2FoJBQ%2B0Nx2AFz4E5oibqD1JpWvb1gDqkI3jlmF0PQhODxYtNC8%2FTPhYgMOnwai5jee6I3MfxDNRsGAfHncZKBs7%2FGa551JQvkNCvOxpjyKschxcX%2Fk6wwdDYFUKp1pcaOCUc1KmdldvxOtvbTzgJLkcAzTDozl3e%2B%2B9qCGke%2BNTYmuW7WhhRxmyt8w0L6gwgY6pgFp1HcDv6BzLxfSqu%2BcxOaG1eNk3Sew1KQHSi4nIovo%2FbqjAQD1CGcK15F7XJYgAYdq8%2BTB7L9m2J2VK45yt%2BXh%2BZCIG4hUGmccciPsXfNtJT1rEz9tjaUToVpyYZZnceB5CydU0nAZGdYGgvn%2FljOI7a2tQP2K67J62bFolN8RpXBSTH8F01h009SMOhfUDS1hwq2DE9zLuoP5dAICBh9IdiT%2BaqLd&X-Amz-Signature=7b54b92182ee931b4aa6b700287c2abb6c10ccefe89e0233b7d37bfdc267943e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5YP3Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY1vRYAxRW1GJfKUbpFfn6KepS751gUO3N92O9%2BgJsFgIgXe59XDxLP7eJRpHaBv0ryZ0RVO%2FT2R6UbNOfSSOzL%2FIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuIEgFlmlDrHcIzWyrcAw%2BfvBPSSBlD3ynvHorfNw3kce%2BWXf0rfZ5vUGBh0q2e0q2GerdVlzZS4pkecNFo1j7L8sFP0uYLLgLY3cHyPr6e%2B99EW8xKSWY1qQaUnWTxT6oIbnB9zFigAsJiv%2FU7dXXMRz6bL7i2Lz2JVBSXCnIHY0c%2FGjzUF9vBRIVC3MJyQjBZ9KWqqs1I5I88ll4hZsg4d9L8ffLGlOfWvWPTamibJv1rttYV4ofgwCER8JSdPnm5DOmGZ%2BNEn5Wy%2B863NQncHbOuXDzrdAo7ZNWfroZMKGq7Grfk2w5E8GLYWZ3CxiqLEHiLA8BQuNkY6K%2BsXLr%2B90V1bYspC9XyH04c0%2BqxtrhB3hKAdt%2F7OSLMLX4kZVmnjyra%2BTpuUYOaHW8Sek1zC6t5cv59IP1%2F53czU7PFtxbKLQRMFPirH7kSXja320WAPASBiopIsWYf8DRdep4gcL8U%2FT5Ch4Hs7iJnBK823OaKhpW64dYBToHg4zQTQ4KEPEKw6cvPc56hRI4iMjBGl%2BCRHFa08Xs7tkJwx1iCDZoUb2ey%2Bkpq8ttDLfhx9Y1BN8E4Bl1FtPYOT42iH9njwqS%2FxR2bFdg08IuBmQ2Z2JEwcAqvGfSKZefZaz4T392GeunBMbFFvOm4MO7ioMIGOqUBmvyDPYArYVSHzGOTq3l%2Fw%2BVDhxpfO75Gfc6eLvcFN11Hz%2BxVB%2Bflby1TaLhKeA527Slvhgly%2Bl0%2BLre%2B3dAdWFVlJJS7Zc9vVZPHjk9YDKxwHNZEhQQHN64hWNyTh86dzxkBQn5zWYyPsnvtfFxKAEv5dgvqRWKmFvvS6w8%2FQGMrpvNmBgtaQPDK4XsQxroT6xEvDsABajCmKu4j3AzpYD76Z%2Fnc&X-Amz-Signature=bb98ed1fdbcd0ecd806b283ddb8690cba4b6bb19bdeca8e312e2e012e4f8b22d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
