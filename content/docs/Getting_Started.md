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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7BL7LR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7h%2FIKSXz8HkY6mAMBFwdqYelCH%2Bly%2BACZWcDN2oYeQAiATHOPGQsohzKJ%2FGNxz6v0zt%2FVjwwzUOcwlJGE6rm21Nir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMr9EY2udUPgnklIQeKtwD8zX072xwrhy9j7x8gg9QRL8FyWEyEkWaHI%2BCnrOAh0SW%2BE8bKQVgq%2F4UICDlPdjt3uS3m4pKCHLiboVL30feMMtRi7BGrhg0eGtrC28pH5a%2Ff3%2FCmH74477DeYnTzQxfD3FAAxkM74Ke9Q0BmEgefcnq9plywjw6Z4rXMavCAXEqVqpDdJIzUF0%2F5o8Tm%2FD8R5ONVorhMwhX%2FjdcHah3CyXjsHwdklcwYixSn%2Fa0gsw3C2S8kDkK3ZWqwQl8yLI1n9wsgCCddAm%2BIQRn92Pg2jsh5dzK%2FqBG3hH5Icq%2FiRyEVQa5n3%2BEjT9c%2FwXoyG4b08JrFOt3loo%2BgrbaVEIbqlESlWqQV8mA5H1MgyLsvqXlTFHea2MeQ2y%2B8YBPg11i4922V3bsP5PAQ7cv51YXTczmItDz9UZHDvpIwhTAh0JAC%2BEMxfTs0R2FGTn8pQRXyNGIs3jSi4LjFronRXz1Vo6ySas7rOhtTu%2FagzwjViNG9ocCIcQsDuxyBzHieJDLZ%2BnZ%2Btfkx6ptlsA%2FaHavUNpLcrCWxeH0Npr0klSE305hf4imuvf769agKVC0bo52FMqN%2FbRomcNLLTwKKtSO67zjwXNVSLoTle%2BX2qKKG4n5Q1TI8D7jAK7%2FOQkw6f2rvgY6pgHQy%2BG6c8Z2qPYAAY9kYUh9e1FoMS3Ulnn%2BcqyUnuY%2Bdi%2FQVqYcevBKHxSoJ%2FD0Qht3Hl5hGbkStnBmEjSZzqBi9WHBP3aHonZjQp9crtoYkwl4BldkdueuCZYBk26FmoKzWcWI%2BemepwIoD%2FsFpEMsTUMhZM3A0lXdKt2InVL1VdWP5BusW7XdUEDwgmi52FXFdPrPPRGO7Cigd7bFF7W1jINfSj0%2F&X-Amz-Signature=2a6236167c5303b00fe2d4453229cd716cae0840a75cc79240050cf6a66af408&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7BL7LR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7h%2FIKSXz8HkY6mAMBFwdqYelCH%2Bly%2BACZWcDN2oYeQAiATHOPGQsohzKJ%2FGNxz6v0zt%2FVjwwzUOcwlJGE6rm21Nir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMr9EY2udUPgnklIQeKtwD8zX072xwrhy9j7x8gg9QRL8FyWEyEkWaHI%2BCnrOAh0SW%2BE8bKQVgq%2F4UICDlPdjt3uS3m4pKCHLiboVL30feMMtRi7BGrhg0eGtrC28pH5a%2Ff3%2FCmH74477DeYnTzQxfD3FAAxkM74Ke9Q0BmEgefcnq9plywjw6Z4rXMavCAXEqVqpDdJIzUF0%2F5o8Tm%2FD8R5ONVorhMwhX%2FjdcHah3CyXjsHwdklcwYixSn%2Fa0gsw3C2S8kDkK3ZWqwQl8yLI1n9wsgCCddAm%2BIQRn92Pg2jsh5dzK%2FqBG3hH5Icq%2FiRyEVQa5n3%2BEjT9c%2FwXoyG4b08JrFOt3loo%2BgrbaVEIbqlESlWqQV8mA5H1MgyLsvqXlTFHea2MeQ2y%2B8YBPg11i4922V3bsP5PAQ7cv51YXTczmItDz9UZHDvpIwhTAh0JAC%2BEMxfTs0R2FGTn8pQRXyNGIs3jSi4LjFronRXz1Vo6ySas7rOhtTu%2FagzwjViNG9ocCIcQsDuxyBzHieJDLZ%2BnZ%2Btfkx6ptlsA%2FaHavUNpLcrCWxeH0Npr0klSE305hf4imuvf769agKVC0bo52FMqN%2FbRomcNLLTwKKtSO67zjwXNVSLoTle%2BX2qKKG4n5Q1TI8D7jAK7%2FOQkw6f2rvgY6pgHQy%2BG6c8Z2qPYAAY9kYUh9e1FoMS3Ulnn%2BcqyUnuY%2Bdi%2FQVqYcevBKHxSoJ%2FD0Qht3Hl5hGbkStnBmEjSZzqBi9WHBP3aHonZjQp9crtoYkwl4BldkdueuCZYBk26FmoKzWcWI%2BemepwIoD%2FsFpEMsTUMhZM3A0lXdKt2InVL1VdWP5BusW7XdUEDwgmi52FXFdPrPPRGO7Cigd7bFF7W1jINfSj0%2F&X-Amz-Signature=d7b317edea66faa449532ed566435b3681db05e7b6094b6f5bb14a97f36c2530&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4PDK7M%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh4jI6xHsBZcjqKvKWKPY%2B1mz8gJ44L1ifWzyNbjLkRwIhAOiaGXc85nygTXkk1oSeoyAAP3y1SNSVk0rdk0jXpHLDKv8DCEcQABoMNjM3NDIzMTgzODA1Igzpeh0O%2Bwy7wCXz8f4q3AM4qSmRvNrEFq7E7YmZMhc2OzTgw1w6mtnRDaEZ8HUhxWGgo07oWyuv7WgTTNJKOYyB%2FD4rCCZLXXdG4yO0f0I8lusea10NXrOwNFSobyHrvlWRApsH0EvIXv02znjJtj5%2FrVoYdH3J94m2aeOjNli%2F68vy9O2X3sEDVfd%2FzPvEYKRIlb6SZ3ez8lK1DCa2ZMurAsvtGvBnryw4pl8Wy2HaO8NeMHHrVHiyACxbnXiU1Mu9qm9Mt1VnsJIUJPZfYfXtxmD%2B%2Bf7ZRKGvyAfqSxgo6ovpYQrCASY0ZVMGyR4eZDuJiC%2BPozcnjdWuUrHrsloSchSJoT4mESP21YMDy5RkDylGI5d9gXVx5PDwAxOTLXQjqxLZ2RfxMkU93f468vT34pEQBQxu5oYFLsDucUFQr2tAvnU6mwrdHzX7rnzYD1A7tAV%2FSgorisUPJjr1ufjI5TwfZ0ElpsBlz9Wecq77x3MAhFAZZdxpQX1V9ikhZCACqbWPXD%2BrVP8ZAIKwYMEqwrj4A2hKL7N2N0Ue7bWeAyhV5b48CbiGFdoFVS1LMfNH769vGkvu%2BVCMzhwu1OSnl1e7RuvCdg2gKK2pIaEsdHKmZkjBsOKV0ts746jV37u6I0h%2FemFjgtHGbTCK%2Fqu%2BBjqkAUlq%2BrnfPFZMm1q46s%2B6mEDJSu0FJPppnePinxBMV8wdLR3t488Z1diCNvwJAwQ1DP%2BCQCRq7X2XF%2FCJ2PUJczO4n0SgJiK22sAZa9N7RaNk5CKhcxsTpIh8W8cjGAH953s%2BIbJesDXzQ%2FJ2%2BPQn5%2FK1P%2Bgn%2FwHAk3YpnsXOGsKia4IuL6x%2BW5nngSMqTPlGZidkXy7zT6TnrPdlDOnc3LHGGbKi&X-Amz-Signature=d0cb6605fa69708294a4b98ef87ec76841ae8a4d12a21c2447e2d40e9e0c7df8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6B2HGZ6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOXoZN%2FyAV2t5Ya53H7TfbaXzewZVoNDaEpHNJH1C1bAiEAtEYaH3zpl38Mi19sQ0WL8dokQ%2FnBd1SQ7IKomUyhvOQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLECZlpCtrd%2B64ICVCrcA%2Bcau0nXA5jbs9c06s9s0Rqi1zFRsr9jK8r7hI3Uvp5wPyoqsDGMaa2pFUSdaJUVrRAitbnj%2Fmod0cGVNae%2BJW0pVnscSLuC0oEUDZFckO2zggMFEUwaNDeCv1kk1J2Rf%2BFDVtGvA5KvzrTXsrqTP3yDhBEKmzEZeeu5Kg%2Fd5pxy6JeDMbpBbzpZRHSVTq3qF%2FGwRFgdVNqV6QpUVGPdk5hXIXs0vx4V6O1eO2XSJ60aA56SMXcHq7aCTlY4zbK%2BCsglz2PyssEhE6scNFzqo%2BNW6RHCb%2BcFlCCvn60t4DyTqQdW0osFh2BCAIHYQzXcUS2BOK04XnLZ6y9OuaaGrDeXg3rsPTXCdkQ7xcVZIdkuRlegLHb4jbsUFbLY8X1im8zbVo%2F8qdN3NMF1SKXnmvZlZC9OEx%2FnzWkFF4Me%2BA8BXWdiQLtqdPB3hKVUan2hBDUEPLGtW%2B2dUKzZzKFj7srMEgueLvFSBEHPYnkzkT17UhSt8FPtjPRfL5EASIkthuwj4VvbJpJlnJaWTqVDXRcwSYJeV5IqCfFOy8byHks5aOYY9ZL4FOXJi6IyJpoUMaK%2B%2Be0jp4IuUtdBIXZVT1Jqed5R9IrGJzkHhrFXyUg7IuFq%2BpWrzgRypEf2MNn9q74GOqUBLRpLToE5omaV3eLrQApUiQ7QBu54z7ClYpFXcb3HO1xwv2N0PT2niQWTmujy%2BW%2B3n808Ug0RSyIMyhTxWM6qYCD4WWd6TZY6vI%2B9%2Bx3lDHD9uoamLC96SWoHeJ0tdaTmsjbr1ELEnE1R%2B3Rn%2ByPb0gYSexE1psaIWxl2aS5q6bm4D9iZCfDMbfUXi%2Bx4tvEYrxSCcTuXppi05u8fT4hA%2FOEQRi5K&X-Amz-Signature=6e3c8d3d89798b06728f77ca8cbaa9cd8db55a917ffc722e4af30d735bba4b96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7BL7LR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7h%2FIKSXz8HkY6mAMBFwdqYelCH%2Bly%2BACZWcDN2oYeQAiATHOPGQsohzKJ%2FGNxz6v0zt%2FVjwwzUOcwlJGE6rm21Nir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMr9EY2udUPgnklIQeKtwD8zX072xwrhy9j7x8gg9QRL8FyWEyEkWaHI%2BCnrOAh0SW%2BE8bKQVgq%2F4UICDlPdjt3uS3m4pKCHLiboVL30feMMtRi7BGrhg0eGtrC28pH5a%2Ff3%2FCmH74477DeYnTzQxfD3FAAxkM74Ke9Q0BmEgefcnq9plywjw6Z4rXMavCAXEqVqpDdJIzUF0%2F5o8Tm%2FD8R5ONVorhMwhX%2FjdcHah3CyXjsHwdklcwYixSn%2Fa0gsw3C2S8kDkK3ZWqwQl8yLI1n9wsgCCddAm%2BIQRn92Pg2jsh5dzK%2FqBG3hH5Icq%2FiRyEVQa5n3%2BEjT9c%2FwXoyG4b08JrFOt3loo%2BgrbaVEIbqlESlWqQV8mA5H1MgyLsvqXlTFHea2MeQ2y%2B8YBPg11i4922V3bsP5PAQ7cv51YXTczmItDz9UZHDvpIwhTAh0JAC%2BEMxfTs0R2FGTn8pQRXyNGIs3jSi4LjFronRXz1Vo6ySas7rOhtTu%2FagzwjViNG9ocCIcQsDuxyBzHieJDLZ%2BnZ%2Btfkx6ptlsA%2FaHavUNpLcrCWxeH0Npr0klSE305hf4imuvf769agKVC0bo52FMqN%2FbRomcNLLTwKKtSO67zjwXNVSLoTle%2BX2qKKG4n5Q1TI8D7jAK7%2FOQkw6f2rvgY6pgHQy%2BG6c8Z2qPYAAY9kYUh9e1FoMS3Ulnn%2BcqyUnuY%2Bdi%2FQVqYcevBKHxSoJ%2FD0Qht3Hl5hGbkStnBmEjSZzqBi9WHBP3aHonZjQp9crtoYkwl4BldkdueuCZYBk26FmoKzWcWI%2BemepwIoD%2FsFpEMsTUMhZM3A0lXdKt2InVL1VdWP5BusW7XdUEDwgmi52FXFdPrPPRGO7Cigd7bFF7W1jINfSj0%2F&X-Amz-Signature=db2387be5d8328633aeee327d300b90ceb5a5eb36057e3dc8e426760223412cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
