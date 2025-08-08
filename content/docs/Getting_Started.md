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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYMXNRX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHjEDBcNjybBNwYUDGLgliFt0oorvW4ZoxS9ItnPYUGQIhANHt8bRdKOlRS8Gdl4BI9SFNtv39yM3q0gScPM%2FX5rzRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ksS2MNbITESLp8wq3APIGiKGSrep82eJjyrj8V80uOpimqDKrOm8JCow41h%2FYzmXDOa8htSGPq%2Bc8Fq0j%2Bwcf2weDpsOLy9D4hBVYzQuMb%2F0DndDSWakzOQshR9eCv5oyg5AsyhEjIEUluNGWfq8786ABld23XMazEvBstkP%2FJYq4c0xL2zdK0r%2FPx0TukVJbgQ2aYLjzKpn7d7mz2AsoO6gcMEzq1vS406IQoZx7t6kSzxgksDRFx6cVfNIaDUr0B2NiacyHTfocnJ6lsHjYMKIjQiIdpDzyhLZMzbGqETKDo13Rv43KazQr1qPUsVluoRiFKW4NdN%2BhXzPUP3og0nxnAeprvjTE%2FQ3RW3WEB%2FKUgjV4sBkl%2FmnOlJmxHXV1pG2fWSAQMAhwUhh3tFnQoFaVBpmveynjjOiaItHKtry8bhWWmcNIiTmxroCUMmR0SUh9nsXbuaCjR5hkc1txFAp3ylHhPojHORkVC%2FWsrOltL4wbiWyIINSkVN5H0C%2BBOoaccLyHJEa7%2FnX45ruIK5rWf6IQW5XyeCEt1Z8OuV%2FctRsfouIeAKjD6wj5cKrHhxlDWnamLlgxJbmuQr8PGcdamUetSRHZPfzZCuzC%2BzsUcrDIYtf9FGkLEWSFn0om2EKQ%2F6P%2FUn0dTDHktnEBjqkAZngI2DInsAUS0WwcI0muG%2Fybr17NFWiIEByVoLzOWyI%2BV8VF7uRmvYV%2BhqqKRYnhoq7vTbZIXG1WC5zkRLSZOcVAAcU7a0h%2FbgvduI04OnfQR8V0%2FTkmet6HrHEbwDAbSXUPA521mghzqWLAPCSjwP5cYxoIFjamTlLv3MxFXSSvUdFqjFewpcAO9GLNU8HOlBWPrzUaykEPz6livoboiAu%2FTkN&X-Amz-Signature=c69f57ddbfed1f969b0ce5a0b4078df657dbf6709980e7ad0eb11d4c49fe73c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYMXNRX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHjEDBcNjybBNwYUDGLgliFt0oorvW4ZoxS9ItnPYUGQIhANHt8bRdKOlRS8Gdl4BI9SFNtv39yM3q0gScPM%2FX5rzRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ksS2MNbITESLp8wq3APIGiKGSrep82eJjyrj8V80uOpimqDKrOm8JCow41h%2FYzmXDOa8htSGPq%2Bc8Fq0j%2Bwcf2weDpsOLy9D4hBVYzQuMb%2F0DndDSWakzOQshR9eCv5oyg5AsyhEjIEUluNGWfq8786ABld23XMazEvBstkP%2FJYq4c0xL2zdK0r%2FPx0TukVJbgQ2aYLjzKpn7d7mz2AsoO6gcMEzq1vS406IQoZx7t6kSzxgksDRFx6cVfNIaDUr0B2NiacyHTfocnJ6lsHjYMKIjQiIdpDzyhLZMzbGqETKDo13Rv43KazQr1qPUsVluoRiFKW4NdN%2BhXzPUP3og0nxnAeprvjTE%2FQ3RW3WEB%2FKUgjV4sBkl%2FmnOlJmxHXV1pG2fWSAQMAhwUhh3tFnQoFaVBpmveynjjOiaItHKtry8bhWWmcNIiTmxroCUMmR0SUh9nsXbuaCjR5hkc1txFAp3ylHhPojHORkVC%2FWsrOltL4wbiWyIINSkVN5H0C%2BBOoaccLyHJEa7%2FnX45ruIK5rWf6IQW5XyeCEt1Z8OuV%2FctRsfouIeAKjD6wj5cKrHhxlDWnamLlgxJbmuQr8PGcdamUetSRHZPfzZCuzC%2BzsUcrDIYtf9FGkLEWSFn0om2EKQ%2F6P%2FUn0dTDHktnEBjqkAZngI2DInsAUS0WwcI0muG%2Fybr17NFWiIEByVoLzOWyI%2BV8VF7uRmvYV%2BhqqKRYnhoq7vTbZIXG1WC5zkRLSZOcVAAcU7a0h%2FbgvduI04OnfQR8V0%2FTkmet6HrHEbwDAbSXUPA521mghzqWLAPCSjwP5cYxoIFjamTlLv3MxFXSSvUdFqjFewpcAO9GLNU8HOlBWPrzUaykEPz6livoboiAu%2FTkN&X-Amz-Signature=3553f476ef450b2d7d70f1768625c364af78c0085b92dbe1e0fe50138469d94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYMXNRX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHjEDBcNjybBNwYUDGLgliFt0oorvW4ZoxS9ItnPYUGQIhANHt8bRdKOlRS8Gdl4BI9SFNtv39yM3q0gScPM%2FX5rzRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ksS2MNbITESLp8wq3APIGiKGSrep82eJjyrj8V80uOpimqDKrOm8JCow41h%2FYzmXDOa8htSGPq%2Bc8Fq0j%2Bwcf2weDpsOLy9D4hBVYzQuMb%2F0DndDSWakzOQshR9eCv5oyg5AsyhEjIEUluNGWfq8786ABld23XMazEvBstkP%2FJYq4c0xL2zdK0r%2FPx0TukVJbgQ2aYLjzKpn7d7mz2AsoO6gcMEzq1vS406IQoZx7t6kSzxgksDRFx6cVfNIaDUr0B2NiacyHTfocnJ6lsHjYMKIjQiIdpDzyhLZMzbGqETKDo13Rv43KazQr1qPUsVluoRiFKW4NdN%2BhXzPUP3og0nxnAeprvjTE%2FQ3RW3WEB%2FKUgjV4sBkl%2FmnOlJmxHXV1pG2fWSAQMAhwUhh3tFnQoFaVBpmveynjjOiaItHKtry8bhWWmcNIiTmxroCUMmR0SUh9nsXbuaCjR5hkc1txFAp3ylHhPojHORkVC%2FWsrOltL4wbiWyIINSkVN5H0C%2BBOoaccLyHJEa7%2FnX45ruIK5rWf6IQW5XyeCEt1Z8OuV%2FctRsfouIeAKjD6wj5cKrHhxlDWnamLlgxJbmuQr8PGcdamUetSRHZPfzZCuzC%2BzsUcrDIYtf9FGkLEWSFn0om2EKQ%2F6P%2FUn0dTDHktnEBjqkAZngI2DInsAUS0WwcI0muG%2Fybr17NFWiIEByVoLzOWyI%2BV8VF7uRmvYV%2BhqqKRYnhoq7vTbZIXG1WC5zkRLSZOcVAAcU7a0h%2FbgvduI04OnfQR8V0%2FTkmet6HrHEbwDAbSXUPA521mghzqWLAPCSjwP5cYxoIFjamTlLv3MxFXSSvUdFqjFewpcAO9GLNU8HOlBWPrzUaykEPz6livoboiAu%2FTkN&X-Amz-Signature=8bc07851ec2a641d11a9c98f66ec39fee431058cd5d66dc6664fe14ea9ffa568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVBCSPP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIF7rvsyo0Bg7ZZQtjqofWhDgK69geM%2Fm8TgjEgCx%2FIGLAiBQo9b0vN24j9E%2BU5Ggvrtw5ShdXD%2BHOjl5K1AuwgdfnSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFsFv5Pm5DRn8TH0gKtwDSQKPh025jXCXM71sNNrIjkytajfmV2YnIBQXxgX%2BcrRnqk2%2BBxmNxEzO13f2BVtGL%2Fvos95NK%2FdYPNyWTmCR5XL4XaCs39IY%2FsrXcKQJKmMim5G8YWFApepNWRpMpOmm1U2kObHgWr10wGNm%2F7agFTEs%2FWY9LkLUEulthPhBk7FjEe8%2FZmOKD9uUSL6dZg%2FHbywGzKfXWrI8vIy5ihm8ZGAV8KzmP8aJTKPwJpr8HF0C8VXMMH4TkzG5%2F58s9%2F%2B3g%2FhmfribeJFsenIJb1f9izHX4W6A3cs%2B2KMr2X%2BmtRIO4NfDpEjrSweDYfiaTqPJ6nPRY0ZzFA5ozRszvbVapyfEog1RiL8Gk%2BskxbHkC7l9M74fi%2F8gACRgRJ14PFG9SmFhpolPaCk7ijm%2BRZdp68kQCn6yvukAcWb2Nlh5tennSwC0BWVIf7ibqPo370VTCyTtlIqvmo72KOouxdysMl7fsHaKPgGygT5La73ScuGivSe8pHAp1YFsVr7ZPm%2BI0QSF%2F0zH1jU%2BTuWcnzQkjGTJwArLgyNUNZFcg7q1gsPETO6scE%2BdGTMcI69%2FS9E1v9fUd7aLspaftJKM2ojQDwDdYbtODFC59opXek4an7A9YW3OORNhgWFK87Awn5LZxAY6pgEWPv%2FIyRyKfHIEtb2%2BCP1xb9zzeDjZzefCykop5nlkZesYzQwkDE3dx3xro4Q8HY9sW76KeG6zu0y0pY3tjKTfhJMX40EM0GIW%2FsByPN8IrOZATO2Swr3ZtQOLfBdMgxZB5%2FBxRlSWyr8sNsS6stw8mlpbxKgOwPx28jobbwsE%2BdbQhzQ2f4hyJjO%2Bod64ECHP14CZSC0Un07cctDLJCDo%2BLmS41nm&X-Amz-Signature=37f1b1b677e035b9da59194a8ab1d440cde5cfc5127783e40e8749b9109c7a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YOPKML2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGMKiuS0zQ6f2Fm8OVAyvBNSx03FkKg8NSdrW6KzKcStAiEA5fk5U7sQPz%2Bn0FaDGLWgveHHEkOjAazPSVjs7H0ghIUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDJlVsZnEtua%2F14VyrcA1i3bbNUTreHzraDA8Yu3K8J0zLbXofYcQrdEVZ%2F9nve07ZRL1st0QL49%2F7tI%2BkWXH9E74PUBHQ%2FDjGIS06WYY6LEEJQJg2h%2Bkzsd1HqizrkSrYxul1TtLEqtXydmIw3HvqJnfiiCQz8AWom8Rm0XYLAjfz7MVbMTf%2FPDaAGcUq6pQn2QDp6yUDfG3xNcZGwFzb9nZ15JxHav6ZzdimHboxBIHK3IwG5t5c7KrVzaOFI4DroUETvacVHOgMj1d5luzmWWu2%2BXk9GchqCe85zBxhkA8sENw3cEe3ND6XQ0mB4iw8zESyVZ7Enft5vChxfDbEU0MICZRVd5Ue4ra5gAPA7r%2BLbW5T2ak%2B7ZjC9ds4eFoAyP6M7XkCiRLvztVeYYnuQOzxFSfY%2FNIV4anK5if7gasAjGtvVOJnfLGRbDjI6cdPq8K1yw%2B7QlYBNzdUlF7Pc8c9iLvkvO1BNa1rH%2BxjWyIntYOT4k0x0qEu9d3R%2BUPitEei8713PvPyg6B4Y2OQM13AYb4W7A8usWGmOTcU%2BxA8qDo2vmpw3ipQTGrrQ82ZlT1srBeIkkv1Pq%2BAVQ2zGH1nYc4ogaxoh7oPhdufKlOJSPG0BfDQeSkoJtL2fiCAsB8zcZzhjlpCmMJ2S2cQGOqUBfaVZzvSrS25VFu3sedEJvkFZwcj3SL8VFM2P9R30hikc5oVayURArxLZLFtVuHLz8LLcZEmAaiuvwUhjAIGsTGpdd%2Bs5BSLfBDy3DkwhTa9E0CRDDgN1iio2l879AojBHrlRVTYF8a6Ik4D%2FSkptfa3yPNHXExFyYrCLkd9lOv3NqTjo%2BNxNqI0ka8h9Na3Lrkh9f%2FqrMIouVb4nFvMBWGBBCUx6&X-Amz-Signature=1550bcfe1c4255d6aacc3342eb5bda433c63d932698135dc5d13196a2c6575c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYMXNRX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHjEDBcNjybBNwYUDGLgliFt0oorvW4ZoxS9ItnPYUGQIhANHt8bRdKOlRS8Gdl4BI9SFNtv39yM3q0gScPM%2FX5rzRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ksS2MNbITESLp8wq3APIGiKGSrep82eJjyrj8V80uOpimqDKrOm8JCow41h%2FYzmXDOa8htSGPq%2Bc8Fq0j%2Bwcf2weDpsOLy9D4hBVYzQuMb%2F0DndDSWakzOQshR9eCv5oyg5AsyhEjIEUluNGWfq8786ABld23XMazEvBstkP%2FJYq4c0xL2zdK0r%2FPx0TukVJbgQ2aYLjzKpn7d7mz2AsoO6gcMEzq1vS406IQoZx7t6kSzxgksDRFx6cVfNIaDUr0B2NiacyHTfocnJ6lsHjYMKIjQiIdpDzyhLZMzbGqETKDo13Rv43KazQr1qPUsVluoRiFKW4NdN%2BhXzPUP3og0nxnAeprvjTE%2FQ3RW3WEB%2FKUgjV4sBkl%2FmnOlJmxHXV1pG2fWSAQMAhwUhh3tFnQoFaVBpmveynjjOiaItHKtry8bhWWmcNIiTmxroCUMmR0SUh9nsXbuaCjR5hkc1txFAp3ylHhPojHORkVC%2FWsrOltL4wbiWyIINSkVN5H0C%2BBOoaccLyHJEa7%2FnX45ruIK5rWf6IQW5XyeCEt1Z8OuV%2FctRsfouIeAKjD6wj5cKrHhxlDWnamLlgxJbmuQr8PGcdamUetSRHZPfzZCuzC%2BzsUcrDIYtf9FGkLEWSFn0om2EKQ%2F6P%2FUn0dTDHktnEBjqkAZngI2DInsAUS0WwcI0muG%2Fybr17NFWiIEByVoLzOWyI%2BV8VF7uRmvYV%2BhqqKRYnhoq7vTbZIXG1WC5zkRLSZOcVAAcU7a0h%2FbgvduI04OnfQR8V0%2FTkmet6HrHEbwDAbSXUPA521mghzqWLAPCSjwP5cYxoIFjamTlLv3MxFXSSvUdFqjFewpcAO9GLNU8HOlBWPrzUaykEPz6livoboiAu%2FTkN&X-Amz-Signature=4d7a8007818b6cd5a98f05f02e6bd8b7098048e1416141129c9f5425df259310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
