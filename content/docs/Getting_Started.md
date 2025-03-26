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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ55B2DU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPs%2Fn6nzLalpDQLjc9jCmqAUrLx1YfV5R4gz2bIjqMFAIgRSDyNCCgZFLHvxLUOwyHsxI%2FhaEKsxJPYr%2B5dWQuFzkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJmxNB4tyO4jkt49mircA7XLHMG3YBWJ5WOh5tVV27PbNE8OjBCvZei7rDxA12axOLBQrGVFHviCtxDMUgzp9tIZ8HFT24mBZT5QE3D%2Bfpr8%2FXrVLVtUjfnFiT04kuB4c%2B3Tzw9cCAApZGKbrKNrzHt7WNy0QJDzfDqx3mnHI3sh5Fj4KhKMkgpSFfoCvs1NlJCldv4NQJ2usxyDYlCdhKwH054kV3OzrqkWI%2BEuYrZrXpfW5Kfgc1seEZe9kPZe4wRJkH7%2F0kiHEH5Un3tzUalS%2BVEiL0TvcXpcLK3SPr2CgUTu3hwrBfHjeMT21qhJrp2tDpU37sQTd9u8qro3W4o1mGtU3KrDQ0E8GglwMKG5MgUt%2FuTEHeYHsivZOHX3%2BN9FGvAkuNf0UzVS%2ForclILKJpcRQEqkDun8FgSm1fat1Rv4OXebbAz%2B3Fir%2BXcrVsOOycIshxNrvLb8c%2B7Jza%2B%2F2aeBP%2FvxZ%2Fs14ZmfoT97kxNfZGcvXuGgE5pTG%2F31F4eStbKHL7BaWBsH5QUI32x75mKM6ljGZVfs3wMIUKNZLK0qShxpvrMCiolVnQGYLsBoKZDXGKLNGpxsxFSUmcOs3PjCh%2FE7c%2F7pz9Ex4PRrJ27kNsfS34MVNIJp1xuxQOcLe2XNqgnyLXXIMJ%2FXkL8GOqUBp787vEuKqVDnnm5cUguqr%2FPUfoO%2B7%2BLhNSQ9ExPC6h7mfaM9KmnqNue7ak3Y7MBy1WH1EKHz7kOzRfF5rrRXzGeBcRw9VoV59Pq944BPVjcinv%2BpNflgDbtFPDlEsUDooKbLYoxv528%2BwIyqA7tWogQtO46aZCEpegq3CRlLvF0uNKlHlojWlJa8m%2FB2potYSmZtScVvj7M2XiT%2BqfVuOGpZFxrM&X-Amz-Signature=fea71d0d201d607897e399d01ae320616493a8c6f5154fe6c4ed3655a21d928e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ55B2DU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPs%2Fn6nzLalpDQLjc9jCmqAUrLx1YfV5R4gz2bIjqMFAIgRSDyNCCgZFLHvxLUOwyHsxI%2FhaEKsxJPYr%2B5dWQuFzkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJmxNB4tyO4jkt49mircA7XLHMG3YBWJ5WOh5tVV27PbNE8OjBCvZei7rDxA12axOLBQrGVFHviCtxDMUgzp9tIZ8HFT24mBZT5QE3D%2Bfpr8%2FXrVLVtUjfnFiT04kuB4c%2B3Tzw9cCAApZGKbrKNrzHt7WNy0QJDzfDqx3mnHI3sh5Fj4KhKMkgpSFfoCvs1NlJCldv4NQJ2usxyDYlCdhKwH054kV3OzrqkWI%2BEuYrZrXpfW5Kfgc1seEZe9kPZe4wRJkH7%2F0kiHEH5Un3tzUalS%2BVEiL0TvcXpcLK3SPr2CgUTu3hwrBfHjeMT21qhJrp2tDpU37sQTd9u8qro3W4o1mGtU3KrDQ0E8GglwMKG5MgUt%2FuTEHeYHsivZOHX3%2BN9FGvAkuNf0UzVS%2ForclILKJpcRQEqkDun8FgSm1fat1Rv4OXebbAz%2B3Fir%2BXcrVsOOycIshxNrvLb8c%2B7Jza%2B%2F2aeBP%2FvxZ%2Fs14ZmfoT97kxNfZGcvXuGgE5pTG%2F31F4eStbKHL7BaWBsH5QUI32x75mKM6ljGZVfs3wMIUKNZLK0qShxpvrMCiolVnQGYLsBoKZDXGKLNGpxsxFSUmcOs3PjCh%2FE7c%2F7pz9Ex4PRrJ27kNsfS34MVNIJp1xuxQOcLe2XNqgnyLXXIMJ%2FXkL8GOqUBp787vEuKqVDnnm5cUguqr%2FPUfoO%2B7%2BLhNSQ9ExPC6h7mfaM9KmnqNue7ak3Y7MBy1WH1EKHz7kOzRfF5rrRXzGeBcRw9VoV59Pq944BPVjcinv%2BpNflgDbtFPDlEsUDooKbLYoxv528%2BwIyqA7tWogQtO46aZCEpegq3CRlLvF0uNKlHlojWlJa8m%2FB2potYSmZtScVvj7M2XiT%2BqfVuOGpZFxrM&X-Amz-Signature=e02c0f8599188450e423df797ac58e66b4b4133594d077c9da84fd6d12f92ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK26ILL7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt4ER%2BTa9cYAu%2F9S6jU9D0ugv%2FghWmwjIKUR1%2FIyYvSAiEA6RXOpHlC%2Bd1Rmixvf321fRU5o%2B07CDEb0p41eeaY5yoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1pIrIh98hhuRfHpircA%2BQYI7HWQntK6hfeatup3naVz9TVzYOKewVNGxljd4MCD2JjOPRaqZn51cZDREcHH6KkZ4x86Jdhd74jdgJxHAUwwrC45iUCZVMDNYDQkzFIXeAtQBLjhqQUadkyfDsShTZsota4%2B4mCvd4xVEzIyBl%2FaAD6Q073G%2FgsYRoATuvEcMsqgjywfa2Jn%2BXQUPlZA8WkHMOHujF%2FkRaACdgpXHBARfrkgNZMasDzXGBiRtl1220fSPyh2G72AnVWOoiyEDMge2%2BwiBYoL4mM%2F9cJXBEsey4guW3cVjqQ8xsiib1UwKPJWEYt3jqrVVU2%2F1mnqPY57geFmQgxPiWP4e%2BhI%2BjsYLFGeibJr%2FFdNzcHJ%2FAaXVTOAmNj8%2FltoR8kEyakMaaRK3wHm40WMeY22nBXLM%2BJSJCgof9RnmOXU0ExGc97Rx8H3c0KG6goF9h1CF2JoCvRj9AAMpdNcZSKXvcuo4jTabNL%2F6kMZNzFdlS78hJ2OKJtGy21suCDVPY2pgIq8nMz6IdZ5dOTD8O3oOljb6kb4l4FVVhqYgdkvmFbPfq1cw6O67fhxMOdZ9gWXjfI0KGmnnZwN8%2BPzQCZZGDluL5EdtnRghUFKPC6Brt1suqOb5SzRSiHsHYoDcUuMMjXkL8GOqUBr1oVWsD0qlv5%2Fv%2F4XkfAOOoZVCKaJQjHTfHm0WiMl77UrUORcDEeJYduntX%2BR8sxV1B%2FxDLrKAXSbxdL6f2d%2BCGqLh2Rbn1H%2FvOhJJusuO9kdZvV1pFewPNQtJJw74tHFr7gNbI9ARZWG%2BXp2QIkp3hx3EH5kxfqXQhN39TIzYnxj2PNVBAUa%2Fw68VjAXrYm1OEVjTkpVRSqxJ%2Bhmul5wZx3mcSi&X-Amz-Signature=e4a92f03cb1557e16e837ad0b9335d1f590ca3a1cf2271603f7d651e8b4fe246&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIU7XMH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACscDA%2Bp5KoXAhvkeKAagGJx4rUYwXhYey8FcNjn0aJAiBCgdUHKVaoQ3TlR4IyhFUGvC2JsMTaO%2FZSbs1%2FMC%2FHaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM0sV1%2FEGDPAJMTNXFKtwD5y4JAK13UyZAFS8YzXXJUhOTNlDbG%2BF38NwKKunk5BVNmy1VaN6P9h6hRsVg2QNqcRn9d6J8%2Bg0T7jcgZnXAbIBAT4Vi%2F9DpS1ZYTLeb%2FDRZ3r7f7GROW3TtEFsV2htKrGI%2B5%2FjLgsduC93sXS4NkQZgzzNZiLT%2FrQ9KIqRgOGMXTWEJzoyzrRLqLS%2BpGMMGGPHlQ6uMdpv0Pr4bVpCMigd2WArtYimIsWg1KLzhKPploqxFzPwWKzz35zy5rZ%2F4H0ApKQA722oB1%2FqJYlnKhcBf5Jn2eoBDSuzPh7MUxBy6pFrfDXuN8OSdpw1FB%2FBW%2FtHC5X5Skrh7XI6fF6FfF86xUYxSPl947qs3PWF9tE9ZhDb84mbqJ1hgVPDfcMFhfbprB%2F3uGBAO6kB4LnZfMBYwC6iYLTFdmHoKAeX1GrbZYx0O2Me%2BtiETooF5hlfj7PvbHMaKCttaoR5EaakGhzS5yPMpSSN4SSO%2B4aIwMobbhZZRgFxDnoYcSFFluICbZa3xoGbUzq3uE%2BwmMsCEUgkTD9zC7DwNMrvaOdW8tvpGeDAYcmivOWDVY1ZyNwc0uLkJjAA2Sj%2B5mp0Wl32PSaBsTZrWuqp97FmNLqtnF0VCeuJtK9cLoABhPbUw8deQvwY6pgHTOW8kjz%2FdgQHjL9Cltb6Wx4uqjbhL1bN9S3Dh8SzoOclqI%2F6DVTSSqmJdTXDvgM3mA9MtFldIDtMFOdn1gtMFs2O2u3PP1k47I1KiypTYxLoRQVLAjM%2FQHKEBKVPmG2PNV6iSViMpi%2BA4vGHoXvG7FYAbHdb1lRkYnWjVcvNsuvXlTU9l8XzgyN8TJfP9R6RVUzusts70zg6DxAMRSS9DuEBp3Nkb&X-Amz-Signature=e1f7a7358eb3a8eb194a8e1cd09cae0a1b0c12b88fc0948450bbbf5b124b2adc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ55B2DU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPs%2Fn6nzLalpDQLjc9jCmqAUrLx1YfV5R4gz2bIjqMFAIgRSDyNCCgZFLHvxLUOwyHsxI%2FhaEKsxJPYr%2B5dWQuFzkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJmxNB4tyO4jkt49mircA7XLHMG3YBWJ5WOh5tVV27PbNE8OjBCvZei7rDxA12axOLBQrGVFHviCtxDMUgzp9tIZ8HFT24mBZT5QE3D%2Bfpr8%2FXrVLVtUjfnFiT04kuB4c%2B3Tzw9cCAApZGKbrKNrzHt7WNy0QJDzfDqx3mnHI3sh5Fj4KhKMkgpSFfoCvs1NlJCldv4NQJ2usxyDYlCdhKwH054kV3OzrqkWI%2BEuYrZrXpfW5Kfgc1seEZe9kPZe4wRJkH7%2F0kiHEH5Un3tzUalS%2BVEiL0TvcXpcLK3SPr2CgUTu3hwrBfHjeMT21qhJrp2tDpU37sQTd9u8qro3W4o1mGtU3KrDQ0E8GglwMKG5MgUt%2FuTEHeYHsivZOHX3%2BN9FGvAkuNf0UzVS%2ForclILKJpcRQEqkDun8FgSm1fat1Rv4OXebbAz%2B3Fir%2BXcrVsOOycIshxNrvLb8c%2B7Jza%2B%2F2aeBP%2FvxZ%2Fs14ZmfoT97kxNfZGcvXuGgE5pTG%2F31F4eStbKHL7BaWBsH5QUI32x75mKM6ljGZVfs3wMIUKNZLK0qShxpvrMCiolVnQGYLsBoKZDXGKLNGpxsxFSUmcOs3PjCh%2FE7c%2F7pz9Ex4PRrJ27kNsfS34MVNIJp1xuxQOcLe2XNqgnyLXXIMJ%2FXkL8GOqUBp787vEuKqVDnnm5cUguqr%2FPUfoO%2B7%2BLhNSQ9ExPC6h7mfaM9KmnqNue7ak3Y7MBy1WH1EKHz7kOzRfF5rrRXzGeBcRw9VoV59Pq944BPVjcinv%2BpNflgDbtFPDlEsUDooKbLYoxv528%2BwIyqA7tWogQtO46aZCEpegq3CRlLvF0uNKlHlojWlJa8m%2FB2potYSmZtScVvj7M2XiT%2BqfVuOGpZFxrM&X-Amz-Signature=5a510ec1833d84527612414c0974b167d201a05073c39fe9cdf29d9253011d83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
