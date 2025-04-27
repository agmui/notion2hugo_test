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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SKEJVWG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQ3GxNxs%2BWxnZK64Nc%2BKfk6lXE2hGPwRRlkjLnk9SyQIgNKIir153vpK%2BrwogeJUk76cjm1j%2FZd3lbhPvreHNPfgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOJlP3pvPXhB%2BX%2BdSCrcA0dveMAc0nM0lVOYOiT7YHnUtyYZBr3a6%2BFKqKZpF2I23kq2jp6siuY%2FeMjvgs%2Blyam4autmIQRtUbJVVZPO5Akke0jBakn2Yrp4o8UmEQyzbY4LBDis%2BCn551Q8uIgKzcmHozkEep6eNzV%2FAuj6KXVQAGKNIBdQs7WvDVjY5pbtNKmcS0n6QgpZhmSj7eE7C9naCQ%2BdQ0kFcSQPmBGlMaXDqndTFhjoFv6%2Fq2%2B5wqluwVhRbqkqa80GlCeeLmdjgobS63qR0gIW44dgMKGoqGWfKznYxt5c3weAwKxoHh0IYw1qymYHTdkZISObmlme0FNHwuxSDQMTnYEzRCc0Q7OUZEcXts33Zmf3sr0xCNlMotpUY6RxCg1c8HngTtY%2FFOfWM22xN6h01vw1XAuA1SqtHMWhY7NVbsjK59OaOHXfALtBVPEXdqa5VkgYeiVbRRbc%2FHk0cfA875ieX0oEkNj5UNE0O8LP1fJ4DIvbHpc6ApxV2Zklsqe7Rp1khX%2FVda02UrfRL2ne%2BcCpU%2FSUz58j%2B3fcixRWtq2G24H%2FL3LVeFNpJx5nPNXK01azOEqw9jLYHYDjpzOUN%2F9%2FcmW24MhNAlSwjIv6CI%2Fvg7g5R%2BByM1nuLBsYdzMmLCOkMI%2FttsAGOqUBjut0kPGcf%2BszcPDPA0IaWaYT7AtlrVaBNHk3GMcnkArM5hgDWUgbGrMQ05xUB5RarGXDoUgfFY28aOZqV6tptrM71q97wFy9RvXYQYZCvbkQYnNxrH0lRdhlaysYwTmWOutXmdSu1QWfZJeEQ63Yc2%2Bz%2BJ3ZeLzinbwPVPs8rQTFw35xWG%2FdFg7wIAZQ6JgmsJrLC3%2Bl0AakvUEmMR5VPJgbu%2Fgy&X-Amz-Signature=2dccd328c5724d6f943ea95534338b5b7b78959ce430edc47596c10fc5a73e62&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SKEJVWG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQ3GxNxs%2BWxnZK64Nc%2BKfk6lXE2hGPwRRlkjLnk9SyQIgNKIir153vpK%2BrwogeJUk76cjm1j%2FZd3lbhPvreHNPfgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOJlP3pvPXhB%2BX%2BdSCrcA0dveMAc0nM0lVOYOiT7YHnUtyYZBr3a6%2BFKqKZpF2I23kq2jp6siuY%2FeMjvgs%2Blyam4autmIQRtUbJVVZPO5Akke0jBakn2Yrp4o8UmEQyzbY4LBDis%2BCn551Q8uIgKzcmHozkEep6eNzV%2FAuj6KXVQAGKNIBdQs7WvDVjY5pbtNKmcS0n6QgpZhmSj7eE7C9naCQ%2BdQ0kFcSQPmBGlMaXDqndTFhjoFv6%2Fq2%2B5wqluwVhRbqkqa80GlCeeLmdjgobS63qR0gIW44dgMKGoqGWfKznYxt5c3weAwKxoHh0IYw1qymYHTdkZISObmlme0FNHwuxSDQMTnYEzRCc0Q7OUZEcXts33Zmf3sr0xCNlMotpUY6RxCg1c8HngTtY%2FFOfWM22xN6h01vw1XAuA1SqtHMWhY7NVbsjK59OaOHXfALtBVPEXdqa5VkgYeiVbRRbc%2FHk0cfA875ieX0oEkNj5UNE0O8LP1fJ4DIvbHpc6ApxV2Zklsqe7Rp1khX%2FVda02UrfRL2ne%2BcCpU%2FSUz58j%2B3fcixRWtq2G24H%2FL3LVeFNpJx5nPNXK01azOEqw9jLYHYDjpzOUN%2F9%2FcmW24MhNAlSwjIv6CI%2Fvg7g5R%2BByM1nuLBsYdzMmLCOkMI%2FttsAGOqUBjut0kPGcf%2BszcPDPA0IaWaYT7AtlrVaBNHk3GMcnkArM5hgDWUgbGrMQ05xUB5RarGXDoUgfFY28aOZqV6tptrM71q97wFy9RvXYQYZCvbkQYnNxrH0lRdhlaysYwTmWOutXmdSu1QWfZJeEQ63Yc2%2Bz%2BJ3ZeLzinbwPVPs8rQTFw35xWG%2FdFg7wIAZQ6JgmsJrLC3%2Bl0AakvUEmMR5VPJgbu%2Fgy&X-Amz-Signature=a82d14b0e3c20200f61d60068ab10a63a8f7e71cbe283816adec50c7746bbe30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3CNXPZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwHffqvm0EOT6CCq%2BDJEU4wCNJtHOGZehiFtfRZKPygAiAuKYeaFkAbm93oCKxBEOK3qH7dryX1QdP9DC%2FBd8Xzfir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMBwU0BWhG%2BQfErpCZKtwDAqqdFayIftbzQxFWo50sDnrjgE0fkaJR68n%2BNFd2Y1AnY1NrHIgGfLOnFJJKE3S7trOolA4Q52WWjZMEFsaxXDLwK5j7GZOVdz%2FRWVyMvxS%2BVOuKC5X8z4XGeP5laMvnRKsRHj36WNuzEPIVzV5l1DwTiR5cY9jnv48hm1zYy7NiPDav1Ba6DLVSf%2F5d6VZi1vaZuAzAQf7ezZ422SVaJlRqBYelZPKp0%2BT2U80ssEhbrkkpZ5twl%2BvnYeoEHzPLUywG5H%2BU5XeGS36yRiaJLFPM1NqkrRfZOeXWDko2B1pJ6ydH8hBB%2FUIDlBn%2BlBZhKquTnWGEUSE6a9wVUzI4oiFLyg0JtP6F1RQN6pcuMNZ2PAgM30JT31Sn877zxYPIIg3ChnUbZdxHy9C77PYdoYbImPjuVJSpTyAQFuKi1YADRAI5auMmTrSuLFJrlIb8ir39oQltjtzPePupD7T4dWEgfShZzpfmQ%2FEvgQidfIUEEC2Tl3EUCnqofl6wZxkrTYooly8NQs2NFmLF8afeUn%2BaJvVRLGBAPRKrrIX4KHsMo2EdG3eKLFDQqqNneQNMM7RJAzqMRwwdXe%2B6pO4r5hfCUlnz2Od3LC6RA5F09aHokIBcKNLa%2F5qi8AAwpO22wAY6pgEn4TGjcQ3JvCE8109tl9t6%2F84CQBGn9c5lcZR4QMNJQhzQghnpmUolnHXCwQZ2r7R4lL2EUqDP3hwgnKBA8VnvrXJ9IX4%2F2Jj2dX7EWzSnWZmwjAKioyxiRcN%2FJPhup0wAALCFKBMIAAjfbI9wxWe7lUuPbbAt7V0Kz2U8Df0bDgVzBthGsGu8ogIMmsuexfkqfIiT4Y7zeRbhpGdWwaMNSbvvHgmL&X-Amz-Signature=1ede7173a97e7e0d298402ab23a65ba12605601e5c4a0e2c2aaaa006544264c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HTHH3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9XGXlHykeB%2BvAoCpdCXi0Ei1qDrEIHNVbRdzIFe6tlAiEA2V8GgH3Hw1MC%2BeYyEQXGLpqfSCIujx0I5JwBP%2BjBwc8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLMfTxjW8JuI6YroISrcA%2BoDByAUI4FzGj%2FogEpWSn3bJCH54YaYvPaABUzJUtes3AT4GrXxYkeqMOXCAMsYVj6%2Bal4fjvmM6%2BG0TpwGQq%2BR9hyXU%2FJWGLVMSgOs4vbvn3RM89eS3NC%2FtHikQez%2F9%2B6CSsOOqcXEpK3fkxz717C0S%2FOGOCi4C72AZ2QPfVwJvVZeqbIcf8%2FMSdfTYvAHPEFJrhsnNPqNYtbmJitRnWWgFimI4A9C14p11WVfeCTVDjcjqQsdiWBYlfdPm2ogP8VSqLLXzaUNgHveG4qXYTlNNpHP4vmbBEfLO6ajWaLuS3b%2BSAhOuKbRWdisR%2BU%2BKo7y5qAJ3BOW9enqUfISifMXKXkYmhbuiZChrHOEQdA7GJyexsv%2FEfNoLudKFdTB9Ygo%2BFD1vAr0aqdNe42%2FULk848k%2Bn5vEYZfzYz4VMkte0BDJU8zMx7N11LdwxPYf6WhLzcLe%2FXfSQ1L9wca94DS5aurXQf87JTMe4iWQ7U2MEAwtMTUSc%2F%2BUndpCa0lgM31EApEjuVjnaExdwlbCDXk7JKU3awZjuKuU20dZcaIezPZGfty9CchBkhjhLF2hK1zuiRmIkT2N1RFAeGYOPyZ7GcRqfFLfRTVDZ9MXO%2FPUBYU%2F%2FFoBzLShPkypMNfstsAGOqUBaM8DDUqdsSfPMYCkh4fAWhC9c2rEsTkQlbYqhJ7ntJxdQ8KxkehRATEN%2Bdz7ek2GFKn0MhGBfnv6gbeiKE5IDemOXeaCB5uJjzO%2BA5fnRYxF64gSn2X3%2BSCeQf5nSRPc9PnX36lXXs2VnqxcriqI2Vn%2FpKx6BUp5%2FpXT3zugXrlklc%2BmGzDCZFpm2yzSQYvnPu0KRCdlaw9cekVZd5z34xVIs3H2&X-Amz-Signature=4686956f78e5c5ac8463b87e61603de62672474e5ce35ec75443a133297b1845&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SKEJVWG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQ3GxNxs%2BWxnZK64Nc%2BKfk6lXE2hGPwRRlkjLnk9SyQIgNKIir153vpK%2BrwogeJUk76cjm1j%2FZd3lbhPvreHNPfgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOJlP3pvPXhB%2BX%2BdSCrcA0dveMAc0nM0lVOYOiT7YHnUtyYZBr3a6%2BFKqKZpF2I23kq2jp6siuY%2FeMjvgs%2Blyam4autmIQRtUbJVVZPO5Akke0jBakn2Yrp4o8UmEQyzbY4LBDis%2BCn551Q8uIgKzcmHozkEep6eNzV%2FAuj6KXVQAGKNIBdQs7WvDVjY5pbtNKmcS0n6QgpZhmSj7eE7C9naCQ%2BdQ0kFcSQPmBGlMaXDqndTFhjoFv6%2Fq2%2B5wqluwVhRbqkqa80GlCeeLmdjgobS63qR0gIW44dgMKGoqGWfKznYxt5c3weAwKxoHh0IYw1qymYHTdkZISObmlme0FNHwuxSDQMTnYEzRCc0Q7OUZEcXts33Zmf3sr0xCNlMotpUY6RxCg1c8HngTtY%2FFOfWM22xN6h01vw1XAuA1SqtHMWhY7NVbsjK59OaOHXfALtBVPEXdqa5VkgYeiVbRRbc%2FHk0cfA875ieX0oEkNj5UNE0O8LP1fJ4DIvbHpc6ApxV2Zklsqe7Rp1khX%2FVda02UrfRL2ne%2BcCpU%2FSUz58j%2B3fcixRWtq2G24H%2FL3LVeFNpJx5nPNXK01azOEqw9jLYHYDjpzOUN%2F9%2FcmW24MhNAlSwjIv6CI%2Fvg7g5R%2BByM1nuLBsYdzMmLCOkMI%2FttsAGOqUBjut0kPGcf%2BszcPDPA0IaWaYT7AtlrVaBNHk3GMcnkArM5hgDWUgbGrMQ05xUB5RarGXDoUgfFY28aOZqV6tptrM71q97wFy9RvXYQYZCvbkQYnNxrH0lRdhlaysYwTmWOutXmdSu1QWfZJeEQ63Yc2%2Bz%2BJ3ZeLzinbwPVPs8rQTFw35xWG%2FdFg7wIAZQ6JgmsJrLC3%2Bl0AakvUEmMR5VPJgbu%2Fgy&X-Amz-Signature=fb64a24f63dd0dbada3f5775e358b4335ff3c33a5d662fdd8f0791a4ee466194&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
