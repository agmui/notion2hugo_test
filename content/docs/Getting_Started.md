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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTHZCRN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FUrkbY%2BPgkPeL7AYBz2ng6apN%2Bu8YNwYIL3bYN6DhXAiA8ecbIYWg5BWY56qQWmeafrXG0TMQGEQenoUEHAQErBSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYZDXgq0D65Hf8MtKtwD18bFksIU0pItB0KnOdOJbJ1uJKRfYssHs95lHBuworA9VHxMnCxcQ9zqbh%2Byv3e5XkEZkpGo4raiiU8RjU2hpxEnZaPQAZjAlTEsbN%2B0Dhqu9oJZvtu18N0TbAnB9S3fg7%2BtGZzxcLPp5rSKr889oQf1mUOTNnks1%2FQVe9clgFv5hWyZlPvGgp63CRvwdltp0BSF0mlcqkr0Vf09qTK9do0pe6Q9Me4PcaV1lLAlnhj7cxtx6731RC%2FMoN%2FOAeonf2FITnVdFV5Qwu7qG%2FVhlaOFsmBFzKkDxY0RwFzl13g7NCC0cSwI8o9nbqFD%2BEiDnqDFSkMof8QwNEUyVabD%2FD7dEDlCYT1Lj3oYD%2FWeIivA4lXCy%2FI3Ur8cobB8UVftZxaqTIl%2BbjgIrC5G4mcUdAlGsdhurkPnC0uUB5fFjcZuxb6C2qtPWX9Q7NhZW5Sz0ROBJc6iQF0YbBKr3d%2BCiBEd8dVjHi2Y1DlIIakF6cf97sBSxo7WYsYxFmRPTzrsMBgvOL%2BomaQdCGOIDjXuEXVKSGjKAdXX%2B%2BUGzz0hCPbg6EqGwArUfAIIVCFGjnVNYgh1qJfPapaQ%2FidpUQ2oLB4iFkBzHqxPNt2JwJfXzaWQwjd294G9hfK9FJUwo%2FHdvQY6pgFJvYkTAPj0xKhxLv3h5ka2JUDUU76Yb6MkzjLuMiNu%2BhOUuVWy%2BCNOiThGTlYGqT6iUhXQmqtuJFIWSShX1keNRkOTr0K1Q%2BRfvSmLO13o6ElXkwu59kpqogGtQvzofWlTde5OGuYFfWlv3V%2BeW9X3KARFPSqyYjifdI19UGAC%2BUFSahJlVtUyq4xkUTTci4l1HwXvq9I0ejDkpvAv8LVRws7VcR3D&X-Amz-Signature=4a8e428838966f84250e8507bff8ca8e98358744d74c1561e36bb2ea80889c25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTHZCRN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FUrkbY%2BPgkPeL7AYBz2ng6apN%2Bu8YNwYIL3bYN6DhXAiA8ecbIYWg5BWY56qQWmeafrXG0TMQGEQenoUEHAQErBSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYZDXgq0D65Hf8MtKtwD18bFksIU0pItB0KnOdOJbJ1uJKRfYssHs95lHBuworA9VHxMnCxcQ9zqbh%2Byv3e5XkEZkpGo4raiiU8RjU2hpxEnZaPQAZjAlTEsbN%2B0Dhqu9oJZvtu18N0TbAnB9S3fg7%2BtGZzxcLPp5rSKr889oQf1mUOTNnks1%2FQVe9clgFv5hWyZlPvGgp63CRvwdltp0BSF0mlcqkr0Vf09qTK9do0pe6Q9Me4PcaV1lLAlnhj7cxtx6731RC%2FMoN%2FOAeonf2FITnVdFV5Qwu7qG%2FVhlaOFsmBFzKkDxY0RwFzl13g7NCC0cSwI8o9nbqFD%2BEiDnqDFSkMof8QwNEUyVabD%2FD7dEDlCYT1Lj3oYD%2FWeIivA4lXCy%2FI3Ur8cobB8UVftZxaqTIl%2BbjgIrC5G4mcUdAlGsdhurkPnC0uUB5fFjcZuxb6C2qtPWX9Q7NhZW5Sz0ROBJc6iQF0YbBKr3d%2BCiBEd8dVjHi2Y1DlIIakF6cf97sBSxo7WYsYxFmRPTzrsMBgvOL%2BomaQdCGOIDjXuEXVKSGjKAdXX%2B%2BUGzz0hCPbg6EqGwArUfAIIVCFGjnVNYgh1qJfPapaQ%2FidpUQ2oLB4iFkBzHqxPNt2JwJfXzaWQwjd294G9hfK9FJUwo%2FHdvQY6pgFJvYkTAPj0xKhxLv3h5ka2JUDUU76Yb6MkzjLuMiNu%2BhOUuVWy%2BCNOiThGTlYGqT6iUhXQmqtuJFIWSShX1keNRkOTr0K1Q%2BRfvSmLO13o6ElXkwu59kpqogGtQvzofWlTde5OGuYFfWlv3V%2BeW9X3KARFPSqyYjifdI19UGAC%2BUFSahJlVtUyq4xkUTTci4l1HwXvq9I0ejDkpvAv8LVRws7VcR3D&X-Amz-Signature=eedd60647df33f327f76e5201e1d1b2b6d9f7c23f3b6af6f261f07e684d04551&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXYPZGS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEiPFljH2oSzRpFogwejtF6g5CLXTv2lInAOIe7MHLIQIgdnigU4izDiOmhVdkFlB0pDq1zwm9P5nks%2BRAD2oOVEEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XJjHtN1V3CqsjwCrcA2toovljD9%2B9GtKHMaxOBn%2FLstA5FA8A8bMayzxwE4yjF5ifrrWZDYhcpuTs2Wucq4NHdxvJXkTwlkjz1p0YMPT8KV2wUmfv3Y22KFa0ijdEF80SOrRCkcEEyhUCX6OAH2eSD%2FbCotEbta6yHlwZeNuIncFrALmrxb8A8irZJxFdHNK09dmQlHueTxL3RmLG21vu541%2FPsVChyKPbWgNlghRqMdM2hmqbUrHxaQxd3bJL2FaDyeXYYqHI5s7%2Fo%2BFKbVdwDE5vFsTYnKMwvG9XdhBSTPqWmwJqPxmlAvmPrYLp9H5tRp98g4bRjoNPYqdjHcvCrFdQGUGFY4Z%2FW%2BIpzis0UTiARepc%2BGNkco0QhUii1hllbsLio%2FtnDTbYS8s2fA0e3DOyotaMsVA%2FfxTydoHRKYuHoWG0pxvmrGFSHO1RASbH5YwX0o0hMdTU39Dw00cABsFbsk5zIaD%2FokML2XLrIz%2B1Dja8GPdS8tvkfYa%2FLqN%2BsRam7Sqy65VRMTvVwrRw1uG%2FMMgCcL6%2BY5Gx6RDp8j7M1ruTau6qMN6VOzTKFj%2B5gzIDYA8UrmECQHv1uNTcAvSube2B1zril8P5r69c72Ia%2FA6Ey9UH8pjfcAbnx5BeCZ8APrrLL4pMNHx3b0GOqUBFlZRFS4xOq2esB555gZEtkxd6qehwGq8DrGex%2BS827XoyE5Evx65W5vaRUPrcLln81T0mXbChQa4FEuuNHRDQV1rQWsirgKyaeDCXxga0d4Zq%2BBGnbCqd%2BnTbHY8d00coLnUga%2FVpLKr9uXA9iRWL7jcAZmvFD6iKZA0bvpxbheZD33uphjJDpsNXo5fGLJ9iDN5gIBlHEOF7eG4Qz9QPgmEYuWA&X-Amz-Signature=f2f224d3c02ead31a331385f5cb7be945e086ea75adf6a7defae2db4ff9c241a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQW3OL6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwXcYt75SRk0tras2b1LESeJ92XvOomE56FJuLQ7lsrAiASPrNXOfvflIMqu4%2Fk4N%2F7ZsLQr9rhYyOHXfkpsDTNSiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9ZSvlvmpJOTWNFSKtwDsi%2BnYtIHmhjGFZP9wZx3y7oHUyUkuXaRQvWG4jw2yTYJ78OgNbMmgJEdT4ec1E6lYGfKK16DjUX3ArV5UvPgAT69TABWzosOkl6vsxVDpB3iCh1RxYdCmMGexxJhCHYWmhvN%2Fz2a6FivKRIPx9WH6k6vWuh%2BaiX0QyEQUA5qgvTVHBpZUA5ysW0ScBAdHmxH6vVkGYuNndtLCXdi22TUdySCs%2BLAo7pMK1AJAe5uxuAfme1fYUYQfQAk9Kdxd8RgOxUcwd%2FU5BdBg%2F6Rip50BxqTipC7Sc5X2%2B0NX8MFphFxPsRL%2B%2FnOxeSU11aK0lmhJRVR6TkTozmOKRd9G7ZlNZDS%2FC%2F91YuWzY7jVVcJ5tk3Eg0ZAvjrJQtdLumrvEW6%2FuZCRIcS38u9eyQT9XgbCODa7f5svcdibiB0qcuNBokcQGCl1gswqL4tvh7unzCNUU%2Bu1z5swvL5uNwDj9T3KQV%2FSkjBw6X%2BpZ6jWLtZK%2BR5EqpBKXVpb9E3yQMbdTkroSjEkZGsltfkS3mO5SyWZk9%2FZ%2FbN98lycVnyROz7aSgbbaK4o8CpSCydizMMCtdJ1Q5KeFvgnjam8x19xV934bNnlxgWdxuxKrZVppXejKfWhcE0rukHHP6o3a8wmPDdvQY6pgFGzOg6Vk%2F%2B%2FgahmCTI1f%2FJqXxCR2utGhLQmazjgUYIwJkXdvO2jwMLjpD2upoBPF5gmwclRQOypnSPxWTpHvHDSlHNUvM0lmpChLgF6EhYSdJFZfpqms%2Fz%2FEJXAsb1PuUv49pny2F1eoRZAYNME33fjrFZeeWHOjll2TMqXHjt7rfdOSNnuh0qnj5Q%2BHszmvfUMlBLEoBxeQo%2BuAGBODHX8eY61MZg&X-Amz-Signature=e3a546699e1c25a4d825f756f9e8c21c71b96aa4b2a40bf7e0673b25240bb642&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTHZCRN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FUrkbY%2BPgkPeL7AYBz2ng6apN%2Bu8YNwYIL3bYN6DhXAiA8ecbIYWg5BWY56qQWmeafrXG0TMQGEQenoUEHAQErBSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYZDXgq0D65Hf8MtKtwD18bFksIU0pItB0KnOdOJbJ1uJKRfYssHs95lHBuworA9VHxMnCxcQ9zqbh%2Byv3e5XkEZkpGo4raiiU8RjU2hpxEnZaPQAZjAlTEsbN%2B0Dhqu9oJZvtu18N0TbAnB9S3fg7%2BtGZzxcLPp5rSKr889oQf1mUOTNnks1%2FQVe9clgFv5hWyZlPvGgp63CRvwdltp0BSF0mlcqkr0Vf09qTK9do0pe6Q9Me4PcaV1lLAlnhj7cxtx6731RC%2FMoN%2FOAeonf2FITnVdFV5Qwu7qG%2FVhlaOFsmBFzKkDxY0RwFzl13g7NCC0cSwI8o9nbqFD%2BEiDnqDFSkMof8QwNEUyVabD%2FD7dEDlCYT1Lj3oYD%2FWeIivA4lXCy%2FI3Ur8cobB8UVftZxaqTIl%2BbjgIrC5G4mcUdAlGsdhurkPnC0uUB5fFjcZuxb6C2qtPWX9Q7NhZW5Sz0ROBJc6iQF0YbBKr3d%2BCiBEd8dVjHi2Y1DlIIakF6cf97sBSxo7WYsYxFmRPTzrsMBgvOL%2BomaQdCGOIDjXuEXVKSGjKAdXX%2B%2BUGzz0hCPbg6EqGwArUfAIIVCFGjnVNYgh1qJfPapaQ%2FidpUQ2oLB4iFkBzHqxPNt2JwJfXzaWQwjd294G9hfK9FJUwo%2FHdvQY6pgFJvYkTAPj0xKhxLv3h5ka2JUDUU76Yb6MkzjLuMiNu%2BhOUuVWy%2BCNOiThGTlYGqT6iUhXQmqtuJFIWSShX1keNRkOTr0K1Q%2BRfvSmLO13o6ElXkwu59kpqogGtQvzofWlTde5OGuYFfWlv3V%2BeW9X3KARFPSqyYjifdI19UGAC%2BUFSahJlVtUyq4xkUTTci4l1HwXvq9I0ejDkpvAv8LVRws7VcR3D&X-Amz-Signature=c3ca254737073999717dfc35ac53d861f4f0051f497d529a8f69a28d366a7cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
