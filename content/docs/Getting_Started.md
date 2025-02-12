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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSO7N3EZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7S%2FfHvWx9wjxczmwUQVkZESwKyn1bEgk0SLaeg7Y9fAiAdEf6AOgXDkJIMmrEBBLwTFugyZgM%2Fg6z%2FymXD1ZEQfSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUv5hhXB%2FPxay2Q4KtwDJ9Zn5c4CJGeSxJics1G5AuEZI6IxEoV7meO44%2BSIyeHnUUuhzoFr%2FVbfKLZGTOChsLfkZoLaxYkkvPJGdAMpfOgW%2BQ5CeWUgs23VwB80bBV5hXutUMEBkFXzs0oFwC6dERReV15Nq1XtXgtcjCRtbzJD7CtGZIFn7VyJYh%2FxVLz%2FCfIBUtYrzXFU7SdqiAZTaldAroccpNfuvafHoKFQxbwdHS9bUn9Q5Er1FfYkzT%2FD8toHL4zU9Urdk338Zp%2FEM6DaJMWD%2B0f0n9wSbAQk%2Bt0MhAHXJranPIDzhCKqaGTnxYpc3vF1JKqIYdIsmY%2BjwwvWtKzvoCkTCnATrCec9pfbCd%2BlIKXJcEWYebmO9q9tkbGin20JQVA%2F78S6%2BLespXlpzLw1i7dPJZaWGd9Bf3%2BagZncLchV81HGZgfQcnYllDKq8FQO7vpG1BD%2BrLtlM5zqh3oSpIe96rLk3pVOS8K5rzRlYJ%2BO8zInlzKWTZ4T%2BO0n%2Fc5vSCtL%2BZ%2FtwoBuXIjIYIhidIDNAbdPKx0BUsopQqPMgTvJIU4y7exjivm4f%2BM4eVZqmgFQDZpeTiTI59j%2F%2BJ0U6SQZtG6CE4gIrkcl2U%2FPO7nhr9%2BVap2crszjkExduTRy7kC2oagw%2BqWyvQY6pgGbUW7tuOepLhCMo0HF0PETR0iZgS1GGT0mx3sdSV6sJ8hjQifPl4gIPHDu614WthXsl%2BKeLw0HF9YKVtypZOE87CHkfrpVXw%2BfGu8JbuRBEfd3pjhVyc3wCinsNDlDWHKssGVaRDQUPUJBFEP5K%2BnJvD68I4TQkiwc5A%2Fx%2BfFdmS0CwHDJib9wlVHPJ6SEf%2BIRFZ%2FsacMx3VX3VtQNHDjwP1ajvTaH&X-Amz-Signature=5e5f953fe80700fe6c20a3c4af7581402a2f6d08d7cbe147513ff24c9c49c3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSO7N3EZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7S%2FfHvWx9wjxczmwUQVkZESwKyn1bEgk0SLaeg7Y9fAiAdEf6AOgXDkJIMmrEBBLwTFugyZgM%2Fg6z%2FymXD1ZEQfSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUv5hhXB%2FPxay2Q4KtwDJ9Zn5c4CJGeSxJics1G5AuEZI6IxEoV7meO44%2BSIyeHnUUuhzoFr%2FVbfKLZGTOChsLfkZoLaxYkkvPJGdAMpfOgW%2BQ5CeWUgs23VwB80bBV5hXutUMEBkFXzs0oFwC6dERReV15Nq1XtXgtcjCRtbzJD7CtGZIFn7VyJYh%2FxVLz%2FCfIBUtYrzXFU7SdqiAZTaldAroccpNfuvafHoKFQxbwdHS9bUn9Q5Er1FfYkzT%2FD8toHL4zU9Urdk338Zp%2FEM6DaJMWD%2B0f0n9wSbAQk%2Bt0MhAHXJranPIDzhCKqaGTnxYpc3vF1JKqIYdIsmY%2BjwwvWtKzvoCkTCnATrCec9pfbCd%2BlIKXJcEWYebmO9q9tkbGin20JQVA%2F78S6%2BLespXlpzLw1i7dPJZaWGd9Bf3%2BagZncLchV81HGZgfQcnYllDKq8FQO7vpG1BD%2BrLtlM5zqh3oSpIe96rLk3pVOS8K5rzRlYJ%2BO8zInlzKWTZ4T%2BO0n%2Fc5vSCtL%2BZ%2FtwoBuXIjIYIhidIDNAbdPKx0BUsopQqPMgTvJIU4y7exjivm4f%2BM4eVZqmgFQDZpeTiTI59j%2F%2BJ0U6SQZtG6CE4gIrkcl2U%2FPO7nhr9%2BVap2crszjkExduTRy7kC2oagw%2BqWyvQY6pgGbUW7tuOepLhCMo0HF0PETR0iZgS1GGT0mx3sdSV6sJ8hjQifPl4gIPHDu614WthXsl%2BKeLw0HF9YKVtypZOE87CHkfrpVXw%2BfGu8JbuRBEfd3pjhVyc3wCinsNDlDWHKssGVaRDQUPUJBFEP5K%2BnJvD68I4TQkiwc5A%2Fx%2BfFdmS0CwHDJib9wlVHPJ6SEf%2BIRFZ%2FsacMx3VX3VtQNHDjwP1ajvTaH&X-Amz-Signature=245f94f313a2b764acbc445eb2f98cae0e5631d8d36c017d61ec43ed14bf5985&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPAU4TI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJUEzcls%2FuE2%2F2kGho4u07pEVz59ef%2FDMHctaMF6%2F3HwIhAM9ahurOOgl4TP2N2qHCadwz5u3YexqJ4%2FBHjR64SO4%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxoxc2myliftiVSefAq3AOUuRulGnWnVf%2BwTFJ3dmr1AFrefMlcYDlcUM6DlP4jfWhxP9fnXG4sPiLGFJwszVODWni6wYn45PkwrhazSDp8W8%2BArPFPshvogNb2QkTfswU9Oqo3f5mVChNk9nLVgNkhLZOQUxdcq9xiXN2ukh2CUcanUI4HnetfU7TcQ5BfiPWHmTvN0qkoe4ZwYibXVbgagt%2ByhvdV22PMIqAu8p6WioDyXMNEqkU0wp8KHd9r5irkEvWw0ex9S9EKFAFCPCDq6x3f%2FQ%2FEg1a8qcU2Lq5gudSfnA4eKzwqrSp96apw2Pikmx9emWeCwUF4MIm0XunbXJ4YC0zqyE6bzYOSakp8Ryz%2BdmjLmHOuaiCujBAwVwNxyU9NqlFbxVaSg1CKe62z%2Bk1IjXPyU1cXVBxBWO4N7eSRu%2F1RW1dyOb2EUdHQ1God1BrWJNuakJFlnxiluIH1UjwabYsgl7BY1iaK4%2FRmo3fyMo%2Bl0YLqdH1qmshvkXmSc%2BrqmPGdtbNVjPld9y6PbmRN3SEcCBd1IsSh4x3XbweyivI47hxxT77uUnewVL0HvmokUjSaG%2FmNO3wSdAjQpbFr0%2FGjsR3cKs1IJOFs03vnBt39aApydm9nqDKIMWKl31N%2FB%2Bh7aVPfSzD2q7K9BjqkAXAi2NCDLSW9sPW9oikUkscEnIKgyu%2BjpuGVnUDoUWQPaJ3HCdx4%2FkPHDsJlsgniNCiC6sM0DSJ2iR0l9OP7jD2Ju7j35Hk963A%2Bo4CWHBpVyK2gUzF%2Br278Q99YhdyRtNmnZzp5KRUJqyUJTRxnYNV73UTjQ9KxSeAdyTS8vIuVHDm4MfwWePY7w96UIuDk3wnGpWjP%2FiopKkROFPOW5oPc49I7&X-Amz-Signature=8b6dc84bfa964be92e8df3a91aad7e5ffb979d105bf341b9936d0aca8cbc9677&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RLNXOL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ2vAERAJOoXzHiGYAIYK1iOZdG4X18Y8krdpo4IZWZAiEAuQs6llJPHUIzno3eP0YsghCbyWZVR8f1W%2B0HMRdJlSAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBc1RnZsFRQxMinlSrcAyj0tlyT0sShcORT4JUpHq2k2K%2BCLhy7gso7wvNPchPxinjmtzf5XIwtt63Fs4Y4WWIz9hd10lilmvj2bODOWU6pCzX5aeMqilFkp8xQTp%2FkaLyTEYAat0s4C1%2Bl3qEfdWq4l04hwXRVu0FnAmQ6eOq5YkOk%2FGlWs5MZ%2BsZZpLjqPIRKVXHBHWL07OPbA5dqJbsFOBXwNiNvdRCDl7jyGS186JRr2qKRbF7zul4EtqeRuy5%2F1lQKH6GgbQQ2gD7qg2ZAITkVhbirMZuwykeLCHqqZRDlXOvrxcBxKr4KS%2FobebDanjH6u1Nvx%2FxMxyDVerw1jsAbbD%2BI1xIj45pF4rHKUe8lCak%2FWBDqQyUtdLiAHkG2FZ3Ku%2B3Cq8VfyNqcqlkbckW3kfB95MVOyavZNzC9whsi5xc6LfarXhnneEfxXiG7UKIeBMiimY5GBSYlz8%2FU16s4Vyl4JK%2BaOA9p2A8KIMdsx7hQ05125Tx0MGJbEoZEsGxlZsqFVEoaUzuU92RSU9C9zAYL2KgbVr5jAjwzsuAf7cAlSIP6a6N0PJleOa9n9Ie1Llhy9btpW6%2FRXbKUfHlx9spOyQIyMsznfX%2BJxsLCYmm9SRx87kBkQkm6No9iv6WbjTPkJ3m1MIiosr0GOqUB9SgMNqpMA1lBPMTcJBWL%2BLS%2BX8n9sCOdwNdd1JMUSB96SM291TljxbWS9%2BWG05Awo0UHRbBEynweIwdckN9FD2Kk4w6VTQpapcPUgP1WXORAk586EbmDrkyaCCRcf%2F%2FunBnrwk%2FJteEqa4f74ZINK6WQaCI7HIBf%2BLtWQEPh4TXsYy64RP8L%2ByfLgiQYTTfHQcY03spzBQfVIrzquyN4VwwGaxB9&X-Amz-Signature=a44878b937e3c89f288cdf9137b7c544bc10c3440456c8c1e8210ee1bc2c6c17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSO7N3EZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7S%2FfHvWx9wjxczmwUQVkZESwKyn1bEgk0SLaeg7Y9fAiAdEf6AOgXDkJIMmrEBBLwTFugyZgM%2Fg6z%2FymXD1ZEQfSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUv5hhXB%2FPxay2Q4KtwDJ9Zn5c4CJGeSxJics1G5AuEZI6IxEoV7meO44%2BSIyeHnUUuhzoFr%2FVbfKLZGTOChsLfkZoLaxYkkvPJGdAMpfOgW%2BQ5CeWUgs23VwB80bBV5hXutUMEBkFXzs0oFwC6dERReV15Nq1XtXgtcjCRtbzJD7CtGZIFn7VyJYh%2FxVLz%2FCfIBUtYrzXFU7SdqiAZTaldAroccpNfuvafHoKFQxbwdHS9bUn9Q5Er1FfYkzT%2FD8toHL4zU9Urdk338Zp%2FEM6DaJMWD%2B0f0n9wSbAQk%2Bt0MhAHXJranPIDzhCKqaGTnxYpc3vF1JKqIYdIsmY%2BjwwvWtKzvoCkTCnATrCec9pfbCd%2BlIKXJcEWYebmO9q9tkbGin20JQVA%2F78S6%2BLespXlpzLw1i7dPJZaWGd9Bf3%2BagZncLchV81HGZgfQcnYllDKq8FQO7vpG1BD%2BrLtlM5zqh3oSpIe96rLk3pVOS8K5rzRlYJ%2BO8zInlzKWTZ4T%2BO0n%2Fc5vSCtL%2BZ%2FtwoBuXIjIYIhidIDNAbdPKx0BUsopQqPMgTvJIU4y7exjivm4f%2BM4eVZqmgFQDZpeTiTI59j%2F%2BJ0U6SQZtG6CE4gIrkcl2U%2FPO7nhr9%2BVap2crszjkExduTRy7kC2oagw%2BqWyvQY6pgGbUW7tuOepLhCMo0HF0PETR0iZgS1GGT0mx3sdSV6sJ8hjQifPl4gIPHDu614WthXsl%2BKeLw0HF9YKVtypZOE87CHkfrpVXw%2BfGu8JbuRBEfd3pjhVyc3wCinsNDlDWHKssGVaRDQUPUJBFEP5K%2BnJvD68I4TQkiwc5A%2Fx%2BfFdmS0CwHDJib9wlVHPJ6SEf%2BIRFZ%2FsacMx3VX3VtQNHDjwP1ajvTaH&X-Amz-Signature=24cecfa4a5fc92cad038c839272c64aeac763c8e5214f6f1165843fcd365668d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
