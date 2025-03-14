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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKVOYAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6fIU1VOcFllFwIZn7IXy%2FIk3Nb21VbG5cyU2qzsrVAIgD6Q%2BDECSeaCoFToAPJ24XcmlFedM1biQB1Wj5TWHhscqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNlCjqzSnpPq5XZ2SrcA4i%2Fz0VoDSYA9CixSmHiMumOyCq5f0L%2BZYdB%2B5%2FGTQRob7oEFOkAws9ZXnQDcdDOrjfWwYywPw1aOnExZQGVnxeNyv98SFKLzzw%2FA%2BQFnkg6v2gXvuHIB%2FaHK%2F1YILcT1sKP%2BkH4DQqj26cEFU80W%2BjPmBjhV5L2OfaJWVCm6BI%2FYyMcsQcyYft57kB%2FoZ1WPRgJbYy5Mb7V44gMU9rMceCVllLhNiHmCJDQZfBjPE5eurlPbXG9sUoQmPbv4NnO8ZurG1xTeK5Pl7tO3EZPfS3qPwxfd%2FaMV58AHkGX5RJGdfCBG3HhJ%2FaFGAIF3pTiVoRxXBSoZLxKkrr0CII5Yiqksgln0CXODPPRYrPvihSTL0DzqkjtDGOmjP7vnmbaR2vX%2FTXOi24xHiakMZUIIpWm%2BTZGP8WkC0KPuuXOfLe7WImJlb9IEULNp7wphSyhspiBvYqUVN42EwTyK8H81krAtdFCx%2B%2FO974a7rybOlaJ1G4oDk%2FGBDkbx9eLJfviNFR6ueDiRxNqG0B6yvC4WmTHmKM5h8EzbZxIAH66z1oiLLyon9vVX9qFgYBxHMT3daEPiBUW0Dtvlb28aCdVWZu2Y1IiYqRjgsg02Rixp%2B7BX10aRUcFMRmeiHkkMO%2B%2F0b4GOqUB5VQqzoHGivKC5jG2xFPm8zNnTjWLlx7JwmtLhR3fMyqZIjpQ3L%2BTtFDDcC4HWmrhP6y%2FY2%2B18OhNFj8YbUYZPPC0HABEjLu3yMjFljYrjYxYGEGpDUyE90GdFoRlw5C%2FK%2BUhZHT8gVYJCu%2F8HDcvrJbnregCOOOh6XPos7hOrb2oMqFURKn9DvWPeL5q2tET4BlXMi76WB7JJIcxx%2FMneNzCDLaj&X-Amz-Signature=a834fa04c749fc4c16e561a68626a44668923413d74cd40fa2120b8e7e21747f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKVOYAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6fIU1VOcFllFwIZn7IXy%2FIk3Nb21VbG5cyU2qzsrVAIgD6Q%2BDECSeaCoFToAPJ24XcmlFedM1biQB1Wj5TWHhscqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNlCjqzSnpPq5XZ2SrcA4i%2Fz0VoDSYA9CixSmHiMumOyCq5f0L%2BZYdB%2B5%2FGTQRob7oEFOkAws9ZXnQDcdDOrjfWwYywPw1aOnExZQGVnxeNyv98SFKLzzw%2FA%2BQFnkg6v2gXvuHIB%2FaHK%2F1YILcT1sKP%2BkH4DQqj26cEFU80W%2BjPmBjhV5L2OfaJWVCm6BI%2FYyMcsQcyYft57kB%2FoZ1WPRgJbYy5Mb7V44gMU9rMceCVllLhNiHmCJDQZfBjPE5eurlPbXG9sUoQmPbv4NnO8ZurG1xTeK5Pl7tO3EZPfS3qPwxfd%2FaMV58AHkGX5RJGdfCBG3HhJ%2FaFGAIF3pTiVoRxXBSoZLxKkrr0CII5Yiqksgln0CXODPPRYrPvihSTL0DzqkjtDGOmjP7vnmbaR2vX%2FTXOi24xHiakMZUIIpWm%2BTZGP8WkC0KPuuXOfLe7WImJlb9IEULNp7wphSyhspiBvYqUVN42EwTyK8H81krAtdFCx%2B%2FO974a7rybOlaJ1G4oDk%2FGBDkbx9eLJfviNFR6ueDiRxNqG0B6yvC4WmTHmKM5h8EzbZxIAH66z1oiLLyon9vVX9qFgYBxHMT3daEPiBUW0Dtvlb28aCdVWZu2Y1IiYqRjgsg02Rixp%2B7BX10aRUcFMRmeiHkkMO%2B%2F0b4GOqUB5VQqzoHGivKC5jG2xFPm8zNnTjWLlx7JwmtLhR3fMyqZIjpQ3L%2BTtFDDcC4HWmrhP6y%2FY2%2B18OhNFj8YbUYZPPC0HABEjLu3yMjFljYrjYxYGEGpDUyE90GdFoRlw5C%2FK%2BUhZHT8gVYJCu%2F8HDcvrJbnregCOOOh6XPos7hOrb2oMqFURKn9DvWPeL5q2tET4BlXMi76WB7JJIcxx%2FMneNzCDLaj&X-Amz-Signature=247d7427901c309844ce90a149b42cb5f0a8ac39489068389c7422591629e136&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6G7WFD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4MHXYcOvoI650KpcO%2F%2BeWUNjLpjAkVLQXtw9jCwINTgIhAOUvUIWeFWzXNM7%2BJmZ%2Fd1QQYrePIlZJRVOSrPrskwn6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ZDAFpa6%2BOon9REMq3AOONw5K6QTqhLzqJ9yXgOy9WFmMgG4sl8D9j3S7RyFvBWXXXGoWj4FMeIqdzoSRJuFAM0epr7WHFaLJIvmqLFh4aJIeOIsiZ%2Fp4JW6iY8n1hEYatwWhn524Dsd%2BvwV%2FPaX4QgfYYY%2BYgzBDFmBtwIZd%2FYbI%2FK8BMTnOAqms8c2vgydECadz8vSvL0GwfSPnql6QvY6JAly2YQa0gG0pHm91yKB%2BgPjSaSEll7RSBzI0IdLKFGdQMSQ3Lo8QYdm0aXAIJK27a%2FlQePKj%2B52rI9GyJDpg0ZKSjQ6e8hPGT5hj5DvRVc8fL%2F92xKes271t%2BdEdSAJ5WcWC2GltKTP9uodPfJGtg7D%2FmKGEMrMFgzSdcF21LQ2BMNuzmjKpHaKPteAZyo8Q9X%2FXAkY7%2B1ZOVtJ4RBS5xA9SLpboYXPBHBUVe4xBfszl4h9uqdltMDmSp2CkHkw2snZ8y1nnHdjsksevU%2FoAaoOn6wuGnh3ZkkR8Mij3FeFq2lhSeSjK2tKNbIqTatXURHCaG2pxnw6ZptQDRerSZN7vfEl%2Bv7Zrlj%2BcNkzwLWCQm8X7ZYL2pLngflkrygJkTY3Z25VnQX7e2eGIBjLyd0aM69e%2BAbnJm2sufFZZl%2FgQ9N7mnh12PzDlv9G%2BBjqkAWAi6NbLDMiD3IKybb%2B5Wq5n355aIcZTQ%2FcFJdi0BL7mtD4PD46hREy8qQePVR3RWIGpWg088QJ6A4RzyQT6wXZ2s%2FcM%2Bee9uQd8qW2%2FVjsurft81ee5TdL0s%2FkASffWYzh6nKOOfMfV58IE37sFJ89GCiePiuUcw4QvYJ5m3OydhMpF9PYk2Him3d4pwaDiVi1%2FSB6MfudBWeZFi7vc2OsDIsBc&X-Amz-Signature=ddbdce95ff2044ba0a25fd5e368639de673e505ae83c94da4a6a5a4fa5fe56ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGP45C2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwYdV5dIg9hZ2fZvWnie0sZpQNkpP8sHZh8bZWYWjPnAiAbXG%2BMWQsXPUds0PgcF80iBGpTJ1J5SYB%2FaApX%2BRm1AiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl7D9TfPQ2NcFjiyjKtwD%2B7AT%2BFZPZgVNlJDnPV8tKxNJF9Hd1Ir%2BMrLtoia66b2DxQ6zBXNFtl5q41bEOAA7ONTfkUo567cPxenjcRDy4eCXqr28idaKcDBhIXC3wSpnNSmbgNIq9o1xZFGDf61YT3zNk0e%2BkC3E8uqSSk3X2P5pl2XkPmpEucxYipBsRDSb7g8kuFjAasUu7sNQBdZaIbb9NtxYWIsPdUhmej%2F1bu7iSBiJ5JF%2F%2BsXYusTYg%2FY7EE0%2F%2FFcqYMnGcTs0BPd6YmPfSokCSHJNgoM2nz2%2Fs6HES48GdFs9AMS6DTI3OBP9vzkAEMxr8NYuthbSqhTzRfZdSR8nQFxvI92qtPi51FUxv6lnJrp3iNYec3hwEgyljrdrQza2XsjkozqZynF%2FoiLQXcReP2Etr6FtPBH68Dnv9K8C4T%2F%2BPyLZFA8BkK2VgjMc73dF7WrWRDW%2BmZkpq6wJCmlETHdcukEjv%2FmoWa%2FsbAcs%2Fn2bbLkPmpC%2FwaO1cpTd7qEbsUI7tVHv98bx%2BDQo7cV0jaspqTqwPGwoQvDQ7xoQ04sskX1cIqlTrspVXiSTlNWLoiTSX%2FsttZCnBxHW%2BTocChQBW%2B%2BPF%2Ba8SSYELAFpk4ksh37n%2FtPlEQY6y5SRogPTPD%2FLiC0wxL%2FRvgY6pgFMWITU83f4MmsMaKyVcoi9nMCzSHbbom9NRl5aobu%2Bb5Zi68vA7D3IrT2LT89sQHwhu3ZtIuGKRntyB5rEKVn0TGTjzgsLGhtHJNTDbZbRejooTL2PUdr2pn%2BPMb7pXrRlSDRsHTFP%2B7%2BsSAk3kT4rDuevGx8UxLv%2FCmHDwulYHXs%2BT5eGEmV780KkTjy0JC%2BZWXN4su5qB%2FwWZr05yMLmftAwNiyN&X-Amz-Signature=f16083ee1fc1450043a87c7ea25cc5cb5348040a222f8d2331f95ab4ebd8dcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKVOYAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6fIU1VOcFllFwIZn7IXy%2FIk3Nb21VbG5cyU2qzsrVAIgD6Q%2BDECSeaCoFToAPJ24XcmlFedM1biQB1Wj5TWHhscqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNlCjqzSnpPq5XZ2SrcA4i%2Fz0VoDSYA9CixSmHiMumOyCq5f0L%2BZYdB%2B5%2FGTQRob7oEFOkAws9ZXnQDcdDOrjfWwYywPw1aOnExZQGVnxeNyv98SFKLzzw%2FA%2BQFnkg6v2gXvuHIB%2FaHK%2F1YILcT1sKP%2BkH4DQqj26cEFU80W%2BjPmBjhV5L2OfaJWVCm6BI%2FYyMcsQcyYft57kB%2FoZ1WPRgJbYy5Mb7V44gMU9rMceCVllLhNiHmCJDQZfBjPE5eurlPbXG9sUoQmPbv4NnO8ZurG1xTeK5Pl7tO3EZPfS3qPwxfd%2FaMV58AHkGX5RJGdfCBG3HhJ%2FaFGAIF3pTiVoRxXBSoZLxKkrr0CII5Yiqksgln0CXODPPRYrPvihSTL0DzqkjtDGOmjP7vnmbaR2vX%2FTXOi24xHiakMZUIIpWm%2BTZGP8WkC0KPuuXOfLe7WImJlb9IEULNp7wphSyhspiBvYqUVN42EwTyK8H81krAtdFCx%2B%2FO974a7rybOlaJ1G4oDk%2FGBDkbx9eLJfviNFR6ueDiRxNqG0B6yvC4WmTHmKM5h8EzbZxIAH66z1oiLLyon9vVX9qFgYBxHMT3daEPiBUW0Dtvlb28aCdVWZu2Y1IiYqRjgsg02Rixp%2B7BX10aRUcFMRmeiHkkMO%2B%2F0b4GOqUB5VQqzoHGivKC5jG2xFPm8zNnTjWLlx7JwmtLhR3fMyqZIjpQ3L%2BTtFDDcC4HWmrhP6y%2FY2%2B18OhNFj8YbUYZPPC0HABEjLu3yMjFljYrjYxYGEGpDUyE90GdFoRlw5C%2FK%2BUhZHT8gVYJCu%2F8HDcvrJbnregCOOOh6XPos7hOrb2oMqFURKn9DvWPeL5q2tET4BlXMi76WB7JJIcxx%2FMneNzCDLaj&X-Amz-Signature=57c562cc5078760b6c01cbc4938a37af6bc8475a5b4b88f0c858a86d9ccbb48a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
