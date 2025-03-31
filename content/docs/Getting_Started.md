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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLBJ2IJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDKwMFFbq9OoVgeTM8vygmN3oD9iGMfNuXPmqB6Bx%2ByEAIhAKGbuHHS32XQhD2fsOGWqdzwd4fnTCtmibQ3mCGQLLXJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXFBq%2B2GgNClwrlTIq3AOFcIJSHHjMrUPO6QAjeWq6jxMaeFPgeUoxFQ5LE%2FW9BQu6MKfWLL8F8BPCQLJLphslkqfxD3f6Ouk%2B6EltlIwNsVJz2nVHOcFI7Ux6dd8qUrF36kkWAvFUNqFmC7oZGURAK7r2%2BmG91auIpqfYnm0HSRT4c5RO36PHdZPjxJ9OTpdez0iazYeajYWMBRSMvMOqLdb%2BJhokRg3NwwVahoJZ4qy%2BC6FudsKFW7D8YQKRaNH4nWCv8Hqw0gxes9DTRq77z0Ah17rij2IIiNxyiZY4jU%2F1kgodAUoxQkctA1g2EywC7oUM%2BfsSpWIUGhmaFV8PdKDH5NpQNywvhbv48pcHo%2FWP9lkHJb%2B5xKkvD8U20b4Hz14YJBWEyeIgWK8PhzQELqRryGSqD0T8UODqQTexfRTq5ewuErVtUgIVXJLenELjeSxI6F2qYqrxKj0wjhsfhzPRR4RNwi%2FsiPF%2BKBR3TdByXMBTaEERDKZ%2F7kc7iInsdhRgNlnoMb4%2FJHFFdNPyiWPN7RjdsvyUJwjIA3hUdRkbrvgYtz%2FmCzik40GAJ3UA9MqgPBPkzdoelQXdiC2V1hT4pboRgTyDBrL6%2FszyE6Q1VMaxsdqhSAPRmvyxZ2HBD7j4ClFAILh%2BkjCf5ai%2FBjqkAQGScKQieUQMxJbUudYKkgnD%2BGyOL5pmtFhhOlYezUvkMjzwWizaQC3%2Fpfk%2ByJDvW0PVydLXfafE634VurPSWiVrtpgpLnPktPuKvEACoChOsNHc17EucoQZxE1DZROngqcBDvYR%2F5RZvE%2FdTz7D92GRbYK319tEYiZ69OerqIDBIeKQCnx4I1ACe9X5oVS%2BnGHrm85iwzTunSOsf4Ekh5dCdWHX&X-Amz-Signature=ba92aeb8a9628194c694b23a96a5c7018efc87c4dc832e9ac103307f5bec5066&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLBJ2IJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDKwMFFbq9OoVgeTM8vygmN3oD9iGMfNuXPmqB6Bx%2ByEAIhAKGbuHHS32XQhD2fsOGWqdzwd4fnTCtmibQ3mCGQLLXJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXFBq%2B2GgNClwrlTIq3AOFcIJSHHjMrUPO6QAjeWq6jxMaeFPgeUoxFQ5LE%2FW9BQu6MKfWLL8F8BPCQLJLphslkqfxD3f6Ouk%2B6EltlIwNsVJz2nVHOcFI7Ux6dd8qUrF36kkWAvFUNqFmC7oZGURAK7r2%2BmG91auIpqfYnm0HSRT4c5RO36PHdZPjxJ9OTpdez0iazYeajYWMBRSMvMOqLdb%2BJhokRg3NwwVahoJZ4qy%2BC6FudsKFW7D8YQKRaNH4nWCv8Hqw0gxes9DTRq77z0Ah17rij2IIiNxyiZY4jU%2F1kgodAUoxQkctA1g2EywC7oUM%2BfsSpWIUGhmaFV8PdKDH5NpQNywvhbv48pcHo%2FWP9lkHJb%2B5xKkvD8U20b4Hz14YJBWEyeIgWK8PhzQELqRryGSqD0T8UODqQTexfRTq5ewuErVtUgIVXJLenELjeSxI6F2qYqrxKj0wjhsfhzPRR4RNwi%2FsiPF%2BKBR3TdByXMBTaEERDKZ%2F7kc7iInsdhRgNlnoMb4%2FJHFFdNPyiWPN7RjdsvyUJwjIA3hUdRkbrvgYtz%2FmCzik40GAJ3UA9MqgPBPkzdoelQXdiC2V1hT4pboRgTyDBrL6%2FszyE6Q1VMaxsdqhSAPRmvyxZ2HBD7j4ClFAILh%2BkjCf5ai%2FBjqkAQGScKQieUQMxJbUudYKkgnD%2BGyOL5pmtFhhOlYezUvkMjzwWizaQC3%2Fpfk%2ByJDvW0PVydLXfafE634VurPSWiVrtpgpLnPktPuKvEACoChOsNHc17EucoQZxE1DZROngqcBDvYR%2F5RZvE%2FdTz7D92GRbYK319tEYiZ69OerqIDBIeKQCnx4I1ACe9X5oVS%2BnGHrm85iwzTunSOsf4Ekh5dCdWHX&X-Amz-Signature=f9bcfa181b9c5a3f5e68c1884b4a362ca34fcd15d4f74c3c89acaafa38983f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNZEYJB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFX6uR3sduAFq0kiIvQFXaX%2BiT56PUvGCYEL%2BOZ2zUmvAiEA0fHOvWPyvgGeJzfUjICJDbtxLfYQuUmx56SNgAcYioYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcnIbfTHgtancmKjCrcA6mzgvWP%2BwlRt6%2B4RGW%2F2E%2FompznhxB4Eh3BH%2B2xS%2BjPnVI0xagdpyphSJ04HPlOmblf%2FJV99zp6y2kBCGzwxECjway6cjmF70BhGux8XZwpWwbR1bK%2BbKZ2ZppV%2FVw1HneKdwE%2BHK12%2Fkqy6tBEInbRLintGF9OMetlf5otzhjxbGejiS3JcaDDf8sro3MyDhqxZC5na6G3eOAfFdnbLqrz44beCLRmrHUQFNkAYZnpIZW7vQB%2B7%2BcNrqLi8kCG3qCvF%2BW7YEO4YXM5HhF2ePYejHd5doUPQVjRadh30FrjiSzDF%2F3kzaXftNGMDfe%2FcG1e%2FjBN3fc825xWHEAuwxYdybWv6yE8nxwx7IiPQSY4cuIOrqzhS92dkh2J1BswqzkpbpIryrar7F5lIQwC148kB2ErZrafiVx%2FH3SVAGbZwGVjfdwja5VyCRG061NZZUFNbSTqubqux%2Bj9M0TN4Y1XycPlGubKaynV%2FnDJ%2BccWghRH6lPtYUxN9xcMiH5HbyLVInHXIJFZUlelx5%2FgJCTWNHG%2BpwkhlwRuy1FDO%2F2lL3qdOOyvBKXE4VAuGmDg%2Bj2TZqs2VqrzXXmd2RYbQH19IUTT7wuy5vS6HiF11hAbZTXDSRw%2F%2BkppVxXTMNzkqL8GOqUBLrGj4iyt4rKFTx1ezJYLH8BBIBpjXHC5UCG9NGEitOrXXKc%2F2Cd%2BXrr0E6sDnggbHcwRbx5w9YPgCQFEwgXQn8T5fO28wDKjKX%2BgFgrYipZ2yItNUTOj%2FU0Nhgi1urwoPymDkUjQHypl6hlJoEV1cIqbFcVj%2BXLaBhLqYx83w4Ii%2FAtNvqQQWufn5gUDbTzepwIWLGPbCbabuY0zaE5hKk%2F24uMi&X-Amz-Signature=5f1c9c8317551c45bcc0d772ec868715620befbfd13a2b70e6e6f81532e6003a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FN65QOV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCh5k70FE5dCVnk%2F1Y2YuHcKuYcpwFyFWok1%2BVzBnBD2AIhAPolTmIfyZpZQwQiQ2XKFSlt9bAdj%2BqmOW2X5atG3K3aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFBU7ebP8vNi91eE0q3APnpDDw8v9qC39%2BsTCU6c%2Bntpq4tYrPvs9Wzyd49T%2BLeYN42sIa7ZkFu3NtrNh2mVSYZwBhjJdlNsOzM0KJoBi70eR%2FC8%2Bqi%2B%2Fb7cWgxwyLnvemmSsGZsh3D109ww5TdOxDT4WjZkx7H%2FZzcsA7mo3qm7ECVRiuDR8SGvzKvG7wvztoMTf7bf%2BiqrqiVQtJUpg7YZxNrUw8COJkVZFbV63CG%2FfNdGs3QoVS84TyrgrBc4dry9vwBSqjZM4LPuyyzPKhyOwMDcQEX3hk1QFKTm4vnZmszrCrxoZ8YplOdbSA0OtwueEcHFQT2sRf49F5gaFvTjOjePkU9%2BrRkb%2FNDhfoOykxoObjZCZkk8lzeSPGZlRw%2FydH2ZGzc%2Bd9o44gqoKCdLu%2FgHZq9vnT2sIeKWrXEosS7gE8%2FkRuRHQXaWvxSZbrtEuif1uAPdBkskxVjW3WWBRuPFfIjRc09Xi1nfGkI85IP7eaYTtfVCvpFHBVCCz2uOkTk0nikH4acr65gPnH7DYKRhlO5Nbwf0JvGlk3BK1P85IY4okfzIkw%2FqtKh9QgyzFt0Bst%2BRk8hgaT4YBQkO2qMQiJvndF4%2F589KtmxVtr9lVSJilSmRBfGRQQLxGBRysMPTHFdgOFpzDy46i%2FBjqkAcjqbtUkTOfLQQwU3ETOCEl40tIXs03nODXi%2Fk55G1HLIOrRDw2Xm86tZr7O%2FYxAjRxFyFTthj1%2F%2Fm2ZdKyWFqz%2FRb3X%2BY4LDuIJKBYracoc08X9h2vaQRN0v5Mm4Eyo5EfMlEKt5zIIiiBorXB5L8LoFr9CZheZMu3d3%2FCxj4l7rAgnuMg9mSVkYHFg7o185QPqKLTreYccertzAVc4zQxnvULK&X-Amz-Signature=1f8779385df236e69dfb73cfa9928c9384588f97dc04345913903bd8da5b84dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLBJ2IJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDKwMFFbq9OoVgeTM8vygmN3oD9iGMfNuXPmqB6Bx%2ByEAIhAKGbuHHS32XQhD2fsOGWqdzwd4fnTCtmibQ3mCGQLLXJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXFBq%2B2GgNClwrlTIq3AOFcIJSHHjMrUPO6QAjeWq6jxMaeFPgeUoxFQ5LE%2FW9BQu6MKfWLL8F8BPCQLJLphslkqfxD3f6Ouk%2B6EltlIwNsVJz2nVHOcFI7Ux6dd8qUrF36kkWAvFUNqFmC7oZGURAK7r2%2BmG91auIpqfYnm0HSRT4c5RO36PHdZPjxJ9OTpdez0iazYeajYWMBRSMvMOqLdb%2BJhokRg3NwwVahoJZ4qy%2BC6FudsKFW7D8YQKRaNH4nWCv8Hqw0gxes9DTRq77z0Ah17rij2IIiNxyiZY4jU%2F1kgodAUoxQkctA1g2EywC7oUM%2BfsSpWIUGhmaFV8PdKDH5NpQNywvhbv48pcHo%2FWP9lkHJb%2B5xKkvD8U20b4Hz14YJBWEyeIgWK8PhzQELqRryGSqD0T8UODqQTexfRTq5ewuErVtUgIVXJLenELjeSxI6F2qYqrxKj0wjhsfhzPRR4RNwi%2FsiPF%2BKBR3TdByXMBTaEERDKZ%2F7kc7iInsdhRgNlnoMb4%2FJHFFdNPyiWPN7RjdsvyUJwjIA3hUdRkbrvgYtz%2FmCzik40GAJ3UA9MqgPBPkzdoelQXdiC2V1hT4pboRgTyDBrL6%2FszyE6Q1VMaxsdqhSAPRmvyxZ2HBD7j4ClFAILh%2BkjCf5ai%2FBjqkAQGScKQieUQMxJbUudYKkgnD%2BGyOL5pmtFhhOlYezUvkMjzwWizaQC3%2Fpfk%2ByJDvW0PVydLXfafE634VurPSWiVrtpgpLnPktPuKvEACoChOsNHc17EucoQZxE1DZROngqcBDvYR%2F5RZvE%2FdTz7D92GRbYK319tEYiZ69OerqIDBIeKQCnx4I1ACe9X5oVS%2BnGHrm85iwzTunSOsf4Ekh5dCdWHX&X-Amz-Signature=dcc868b4f7b0953a4474808930729dea1a1efefd643a189190e8572972b34381&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
