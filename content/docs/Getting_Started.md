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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVG3SHVW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKMlEX4GXcBHsdaS%2BvDygX5l6lNJWugT%2BnJ5BufkckRAiEAjnFRq0SfNvWeauqiTIixTEgwBkj1hnn0YKn1Zwj0rGIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMfbDlXxbqROj1PyCrcA%2BX%2Ba6qnWDovz9Rpfst6Ntz89YZP2URYjTr7Fir9P5k8iBL3PPJZ5nmXAqt2%2FVeUB1bYl79vfYiHXPt0vWsE6MiqTkDJbAdqnZDE%2BeAIW%2B4jvo%2FvCu0kSVikNTaRSFXBAXQIzBKwScXeb8keldrWhZUvW4xY5g2Hb6CiAYS%2Blgr58BBdW5fzSCWLlNQLL%2F3tGW5p%2FpgjzlTPliLlYSV%2BAWrfV6eIFJp4UuG6J38KLOgethI2XJr%2FopMzK9X8gC%2Fttk2cKZP8xje60h1u5M2bLciWcr1eZeSsJ2zDZUHt7lbY7kwzfCrm2o1MRuQZSsryj9wEPzomzby%2Fp8%2BcRuONf%2Fl9llGHUTqKL4R7u9rc%2FbSFAX1YTKvOGxQtTqsihWLJv3iwlX7MmneEre1Mjvo3jWnc1%2FNpkIRTOiLwiGyyM1SrbDcZbtgboJcGpH5Uz6keGl2E6FssZMzziCwxwt16VYG1ayheSYO7%2F18e0NmUErUITuGcct3PSEPIIhofJdKM8mR6c0tthQNTBTgwEa1NAqloVkpmyIF1%2Buxlz0602GJLO8H8udOCPpQamz5URKG0UCswNQ21d6wjc%2BUi3XbL0yDgaVn3tu52qpySRW%2BXrz1Nd%2BD23vyeGBVdzvylMPDfwsAGOqUBGbaA%2B%2BSUcg2%2FVWe9VhBSyDL3eAiM2EALX2rvjEeDEg9aw5UjfGKdnPX5L4jmSh3c1OrBJLWM3KTO3wnVKPMbEvgcOQCgBqQ1TYO1bwh8rgTW5D3MtAUKwDqFNPjfw8Wtz8hYQfhzIKzxzJYldPMiMqMio8XWL%2BnI6vfCRYLXMyzYaSXQ6u42aWORaVbRHFvrL%2B3X9NCLnhBVtptMWs55ywBKStbn&X-Amz-Signature=a89790f9de5bc3cd57d4ec3c2885a852826388c2986d4ebdcf9b5e4a6b05238a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVG3SHVW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKMlEX4GXcBHsdaS%2BvDygX5l6lNJWugT%2BnJ5BufkckRAiEAjnFRq0SfNvWeauqiTIixTEgwBkj1hnn0YKn1Zwj0rGIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMfbDlXxbqROj1PyCrcA%2BX%2Ba6qnWDovz9Rpfst6Ntz89YZP2URYjTr7Fir9P5k8iBL3PPJZ5nmXAqt2%2FVeUB1bYl79vfYiHXPt0vWsE6MiqTkDJbAdqnZDE%2BeAIW%2B4jvo%2FvCu0kSVikNTaRSFXBAXQIzBKwScXeb8keldrWhZUvW4xY5g2Hb6CiAYS%2Blgr58BBdW5fzSCWLlNQLL%2F3tGW5p%2FpgjzlTPliLlYSV%2BAWrfV6eIFJp4UuG6J38KLOgethI2XJr%2FopMzK9X8gC%2Fttk2cKZP8xje60h1u5M2bLciWcr1eZeSsJ2zDZUHt7lbY7kwzfCrm2o1MRuQZSsryj9wEPzomzby%2Fp8%2BcRuONf%2Fl9llGHUTqKL4R7u9rc%2FbSFAX1YTKvOGxQtTqsihWLJv3iwlX7MmneEre1Mjvo3jWnc1%2FNpkIRTOiLwiGyyM1SrbDcZbtgboJcGpH5Uz6keGl2E6FssZMzziCwxwt16VYG1ayheSYO7%2F18e0NmUErUITuGcct3PSEPIIhofJdKM8mR6c0tthQNTBTgwEa1NAqloVkpmyIF1%2Buxlz0602GJLO8H8udOCPpQamz5URKG0UCswNQ21d6wjc%2BUi3XbL0yDgaVn3tu52qpySRW%2BXrz1Nd%2BD23vyeGBVdzvylMPDfwsAGOqUBGbaA%2B%2BSUcg2%2FVWe9VhBSyDL3eAiM2EALX2rvjEeDEg9aw5UjfGKdnPX5L4jmSh3c1OrBJLWM3KTO3wnVKPMbEvgcOQCgBqQ1TYO1bwh8rgTW5D3MtAUKwDqFNPjfw8Wtz8hYQfhzIKzxzJYldPMiMqMio8XWL%2BnI6vfCRYLXMyzYaSXQ6u42aWORaVbRHFvrL%2B3X9NCLnhBVtptMWs55ywBKStbn&X-Amz-Signature=5694b4094203974a679aadd86eb8e840b3eaf9c21d3b950fe207f0ccf8cae9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIF457GS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5nPG4k8Pz8VSt6I5SvM48viaGElViv02ocHpQbaCsrAiBZ7CqXSMqwPoigFQF3%2FMaXlKsQkuI920oawbTW6WcifSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwo5hVtld4rcaX7YHKtwDc2TdTV%2FdbUe1OpDJJ0TPS8R%2FDg5CuwuMdNitCdpToxESC3zt1YEPR%2Bm2IcFyJiXziTuwZSlHim70nK57BpEMW4HA0lLfeBYY5wOEl2NUAHobQj%2BRo%2Bl2W4OZc3gAYUbyZsZw%2BXjId4d7jh28Bc892WqDhpcr3vgrDaoaM4hgsJU9VVKkdAMZ2wDTbVuyVKXxgOpzUxod7bqiL8x2HrKBLzksQed0MDwvDKiaCmYPVQ4wYc4ol5YDDQqlRnaEwSHImMuPLtULfEICguUwHISUsm%2BtSaD8tQT7HiHdy87yNHtHva%2BpScvgg3wIqGF4P%2BCjy6tiSL121MrZNKFiPHEe%2BLLd%2FmYMzKytwvxejXIBDZgOhPY3%2B26ekuIm7en3r2kiyw8PZYu4i%2BfkRWQPAxfmBDotc2GaqBHWV0BJ4ZHmCyrITc2S49i77lkpv0Wr8oQ7glyxgN8oZlevgCXoR%2Furi1UKzxKHRJXMmOCj2mMg%2Fu%2F%2BkOr0UbWXGmbi8masFVMTz9vvbFTsajaNikzkRKgAs5xomjv1ZOK4OQlEtQaLI%2BW1KDoNNvJ%2BAcA58LtYFfqWOn27AP6QjZRpLsMCmCxY5jIJjOPiB1qHpqXXfht9ytHgjD0ZbDDAgE7C%2BPMw69%2FCwAY6pgECQbvAtqt0Pen9tq5PJk2Xoda0hZZCOZJ1x4a%2FUF1gHR60AeTzt3HPKDY%2FIPvEzZu7qfdrTEIEFdV0IEXjvvZxRZQlcrigrGidk0iphU%2F27m7EudcjtRkAM0PvCtYPpZeg63u%2BPhnwUDMUbGrCsVmjE6TnlFp%2Baa9Z2dN2Zv4GiTBoFPXvozOaiDaRPTcMsLBdnN%2Bo45Kb6gC58OpLbmqZN%2Bh%2F1uho&X-Amz-Signature=407a81d0eb7e9382922ff53be1d59b400caffa5e3dfb073737701b4482bc2bff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665743YHW7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA04wL4EURuU8YtlZVgPfBW%2BKgIuSa9hPPniLQs53KlBAiEA0ShmgrFgmpTSsIX%2Bt4b5sWpsjMgMveFrUP7DaCyvxGMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCzg7x2IxjXl5IoCrcA3eTCAL2ORtjpvsAQIBrDcFFMWfgrKJd6ckec0EqHI9q1fJ6mxuJU%2FGaYwildkNnvRZ%2BZjQEa10uWZ6cEbVcbaQCVTOrBYyuOUdD%2BB7LDxbtzwIVjr3NCtzscj1oeDEmrsbo7AjppC5cCpLZyMDtM6HzQHUgACuZ0CTJuhYehwSSLonCPCvmdgZca4MA5Ou1WehDl9Aau9nZtER%2FMIz3QbD48%2F2rgLj35PWzbITH8xgF0yfrVzfQYux8lb3fmwr4DwMP4ehIZh3EhCATrvI4jWOW90H4FXUFxv8WNgZQJd1pAB1AZxZgSiKgXLEblDnUfboaa3gF3SRvQ9B9c56B%2FZJck2RY8149lA7mYXL6%2F5xLFHdxbZGy87hFOXsOR69zyukLx8XtzDZqnIL%2FhCbe64I%2B8%2FuyeuHP7BlBoDrVci1UnofBe6Bw9tFpVgdOFi5ffDhwTYp7yOL4lij1R11zmpM23GykSg0inEEBYixUeqpxZiyju%2BEtu3hYkniIiofdBeE9VAM4UiJNXSh%2FPb4%2B5j8aV4SerxhJT8tkyuMeCseYWAzyzN%2FC6cmSsZrbgo5fXcp4h3ddpyb6YRh8Is0n1FH%2Bb7zgPCdXovmXA%2FvOFFbVWUyb42sp%2BqkYqhg2MK7gwsAGOqUB13IfnWxDzOvy4q9NHM7uleTE3VboKXt2jcuaOq0bjf0Z3ACg3uYtCo2Sc6V5mBkhMYh%2BLahSZRDWWbeWbA%2Bga79AQC7COD2ACQYkKR4u3WH1xaKofBm8k47ppZQ09cl%2FMEkBxughJKOrd7swh2Ldso2b4KV48qbfQJS%2BRX%2F%2BI5UMVqfhkcrAsVXiW6TKNM2XhLKZgVJWoeiFoVqWb9sTTVkl7o%2Bm&X-Amz-Signature=ebd4e9c6ae6a77730fa962acd30226df379d266252e4eb3d6c5661b3e02d7fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVG3SHVW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKMlEX4GXcBHsdaS%2BvDygX5l6lNJWugT%2BnJ5BufkckRAiEAjnFRq0SfNvWeauqiTIixTEgwBkj1hnn0YKn1Zwj0rGIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMfbDlXxbqROj1PyCrcA%2BX%2Ba6qnWDovz9Rpfst6Ntz89YZP2URYjTr7Fir9P5k8iBL3PPJZ5nmXAqt2%2FVeUB1bYl79vfYiHXPt0vWsE6MiqTkDJbAdqnZDE%2BeAIW%2B4jvo%2FvCu0kSVikNTaRSFXBAXQIzBKwScXeb8keldrWhZUvW4xY5g2Hb6CiAYS%2Blgr58BBdW5fzSCWLlNQLL%2F3tGW5p%2FpgjzlTPliLlYSV%2BAWrfV6eIFJp4UuG6J38KLOgethI2XJr%2FopMzK9X8gC%2Fttk2cKZP8xje60h1u5M2bLciWcr1eZeSsJ2zDZUHt7lbY7kwzfCrm2o1MRuQZSsryj9wEPzomzby%2Fp8%2BcRuONf%2Fl9llGHUTqKL4R7u9rc%2FbSFAX1YTKvOGxQtTqsihWLJv3iwlX7MmneEre1Mjvo3jWnc1%2FNpkIRTOiLwiGyyM1SrbDcZbtgboJcGpH5Uz6keGl2E6FssZMzziCwxwt16VYG1ayheSYO7%2F18e0NmUErUITuGcct3PSEPIIhofJdKM8mR6c0tthQNTBTgwEa1NAqloVkpmyIF1%2Buxlz0602GJLO8H8udOCPpQamz5URKG0UCswNQ21d6wjc%2BUi3XbL0yDgaVn3tu52qpySRW%2BXrz1Nd%2BD23vyeGBVdzvylMPDfwsAGOqUBGbaA%2B%2BSUcg2%2FVWe9VhBSyDL3eAiM2EALX2rvjEeDEg9aw5UjfGKdnPX5L4jmSh3c1OrBJLWM3KTO3wnVKPMbEvgcOQCgBqQ1TYO1bwh8rgTW5D3MtAUKwDqFNPjfw8Wtz8hYQfhzIKzxzJYldPMiMqMio8XWL%2BnI6vfCRYLXMyzYaSXQ6u42aWORaVbRHFvrL%2B3X9NCLnhBVtptMWs55ywBKStbn&X-Amz-Signature=c536ce6a72cfbb4ffce410b494e4e5c6781bdd8f7ff9a898cf5c66a689c8a369&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
