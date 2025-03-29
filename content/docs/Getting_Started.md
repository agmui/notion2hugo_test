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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNKQIV3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB8DFxJRHZ4A36hTa%2BFYATYzyAkaunNw9EN4rJdXMF0DAiBzQCmounbwOK5%2FXvaPCYhwKfdvo7C01yoBd5jJZQFxjSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEYCyFTANgK2mgsVOKtwDQoDi78VIfPZ%2BGetEcz0T9SzRgoFanGUqqU9mJGCMvLaZBXlP4y%2F1xh669mn9LF2chLR9BglfzvX%2BLLHzsUsHLaOxg6m78P5%2FEfgEdbW4p%2Ffe%2FGYELqcfps%2F6Y2oOy71H9LnLRwY8VR8B93T4vgdM11qGU8HeBY4C1%2F1lK5Tj2SGr4fP0qATGKNCnfivtK1YEijeZ0mAEt5hvM5gvWVmgbjTCwYzhqd0WanzPhxVBFvxIJkK3k%2BAfB5ruVKDWKJGqRsvvdnUEAWOkHYLSprbF1%2BlD4H%2BcNlsDYurBIqwzzmhxXyssf22Jnezew1K9cFglorIMBzi54sU6ml0d2Ei0QHRHbqBdGf0geIv55OhiJtjgtf3wjMGaH6k7JAA0zy7vAVM3pHNj0cXEsTABc4k5zWlL%2FtEjxchLkKFOY5fCuM4qlEnHQbWmRbPWFGgfxYgPqPhyhBlmXpe3iwFr7lQ4bFgGXnb2a9hwdc6js82Vemu1%2BZUQvTXq2ug7izvmq2nAcK%2BMh4c3RfH%2BscCKlKTUlPT6NZSR9lqBhLWB%2BsyauZEizhYDb2GSsrfiqJw02PDuOWxoZ9DSD2wJIj3gryXftVvPwV1KxJPcw%2BZ4InJpuEnWSA91ps%2BYsBvnJYswiLWfvwY6pgHPXdSJgMaEMc1MrZAbwn9k0xe%2BjpfxUrnpgtNKywkUsZpIsKdbZxe5CZlpGnIiR%2BXNN7M4L9FTwLLgEqkQErQs5aIoock5mKZVkqDeGtAi11olAKndbXFcaD9RMxcr8HDk4jfjN5LuwtKNRI9utyGSwaAT88tdtS8Y26svY3xlzuwUxWyUTDKYG3uXYnNiFQBKc0TKWkkSgInvP0chSg8ZvifgjVZk&X-Amz-Signature=1429efc29e6f17b76622a45ce95be9a0ca4a32950bf8fa513830564bc6c2bc28&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNKQIV3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB8DFxJRHZ4A36hTa%2BFYATYzyAkaunNw9EN4rJdXMF0DAiBzQCmounbwOK5%2FXvaPCYhwKfdvo7C01yoBd5jJZQFxjSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEYCyFTANgK2mgsVOKtwDQoDi78VIfPZ%2BGetEcz0T9SzRgoFanGUqqU9mJGCMvLaZBXlP4y%2F1xh669mn9LF2chLR9BglfzvX%2BLLHzsUsHLaOxg6m78P5%2FEfgEdbW4p%2Ffe%2FGYELqcfps%2F6Y2oOy71H9LnLRwY8VR8B93T4vgdM11qGU8HeBY4C1%2F1lK5Tj2SGr4fP0qATGKNCnfivtK1YEijeZ0mAEt5hvM5gvWVmgbjTCwYzhqd0WanzPhxVBFvxIJkK3k%2BAfB5ruVKDWKJGqRsvvdnUEAWOkHYLSprbF1%2BlD4H%2BcNlsDYurBIqwzzmhxXyssf22Jnezew1K9cFglorIMBzi54sU6ml0d2Ei0QHRHbqBdGf0geIv55OhiJtjgtf3wjMGaH6k7JAA0zy7vAVM3pHNj0cXEsTABc4k5zWlL%2FtEjxchLkKFOY5fCuM4qlEnHQbWmRbPWFGgfxYgPqPhyhBlmXpe3iwFr7lQ4bFgGXnb2a9hwdc6js82Vemu1%2BZUQvTXq2ug7izvmq2nAcK%2BMh4c3RfH%2BscCKlKTUlPT6NZSR9lqBhLWB%2BsyauZEizhYDb2GSsrfiqJw02PDuOWxoZ9DSD2wJIj3gryXftVvPwV1KxJPcw%2BZ4InJpuEnWSA91ps%2BYsBvnJYswiLWfvwY6pgHPXdSJgMaEMc1MrZAbwn9k0xe%2BjpfxUrnpgtNKywkUsZpIsKdbZxe5CZlpGnIiR%2BXNN7M4L9FTwLLgEqkQErQs5aIoock5mKZVkqDeGtAi11olAKndbXFcaD9RMxcr8HDk4jfjN5LuwtKNRI9utyGSwaAT88tdtS8Y26svY3xlzuwUxWyUTDKYG3uXYnNiFQBKc0TKWkkSgInvP0chSg8ZvifgjVZk&X-Amz-Signature=d332d2f5d6c23aaf4fea32ec63ed926cea0d007d4ddb1e8a241d47186f4cb472&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3PXYZU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICxQab6M9NQKuXhwQphdcwsNVPIaQ6Ijh3oRG%2BqldpenAiEAvn2uOiRFRrAvwA2BQEzoQO5ArvcwLJ5sepskld40TX4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI%2BbfGG5VwpB38b8BircAxRHssoM7m28QEZI6mT73%2Bg0eMsU%2FHjN7CnCQiR4fQ0cxok368AlbHm5LdqsazRp8E6S5PZEH7nsY%2BwTNkHyc38vyvmShl8c4jc511MYBXkVxbnoG%2BiF3XfbTyQ01scZrTAnndxAWosmgnqu0pj0ej3CAq78Epc3btmH0YIYkmyF9THr0fx%2FGmm1VEVhNsi9ItZfMgFukDE7y%2B981yikra579GYEFxFAYrBVFy7RSKnEDKBix7v%2BKt6Bbl%2BaysE4goZPozRo%2FqGViObsHyOrvZBBrFhxtfnLT1jsYCuEdgzoeIqQ7yS6xzChn%2BzJMxmkzWVStsyCN4yS3UiUyh7%2Fl5R%2Fz7G%2BFleQoiRMlaxwNSaCpjZYB4BNjrqWdFLLffGPCBNJkzWO7ze7W5XIuugU0lhJLFooVuREywLlN1zc%2BdGrXT5M4ufmmgrmrzRyOhjXUnp8qOvdLokFeBYybrs2IA3sxF7owLzNvaY42zs3pzXK0Kv%2FbCKBcgOEq4Dl2VDQKjMPldTw8SnzMmQ9IqBIKuC%2Bz%2BBzKS%2B4o4bWSfk7jh3yLIHy6T5oF9FHUdWiniNd2dmSIANHKdeygRqGcnd4KhiUkvj2lUywQHqHGhAjL5t02OvVSc0jgKNXPa51MJ21n78GOqUBK9ACD4Cx560MdcKheNwHLEp4SEN8Fei6kZzW4kj9cMgM4MIvWoLaPgapjgx5K8NwJjavo254OqcQi%2FasSI1NSEAYqlht48AWGOQ7FwZDVXq3kiPhjYBQyoGp4xRhmq8Z5X4SJbkvOciVLzVSOhaoQNMaPFfCpAVYCzwwzXScLsE4DXnhp3UqiPPLh1dqBMCvQnx6Tg9IddJk69Czh59b%2BFgwFk48&X-Amz-Signature=a9d00f7f27f0c810d0e649b78e9867b5b657b1743cf352809b0c2f45a3f68aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2HCXE4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDX46PLA6Yvkxk2wY41FJ%2FdPD4CYQyAhVQ3oKBv4ECjFgIgObg5S3j76fWWxZRUVIgJ%2FOzHanhpVnpFbW0sycx7IYoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE409EBYVhyEuYfFSyrcAz6jEQZ%2FEXQIstoMcquke2MW3erLLdpZHi3n7MtICj%2FxIVb4eNvlJhvmyxTQ5yGoKsharAKMlH4CJQEpREoyT%2B78S6Gxh1Ch110psfw%2FDWRr7TXwNLcnC%2F0j4UiPVbNGk6Ci7leRRd%2FVl3WR59FSehdwHelD9TZ%2BFTC4ALj9PkUaSvlmQTP%2Brulwto9sD3e7KW0w6FkPFTFCVDKjJLVSkwS3TLhwJI6tUj7zOVCZA2xRqg0OVUnKB%2BhS3OmQTugghXHMWsY37HdxamvB1qRMYvvKLITxDtSVUhS3r6BiBl0bptrA1nLd8v3nt7s9r%2Bp3y%2BV3R6a10bTYIVs6HLxPvv4ndMueWJsq129Db6Lg3n4uP4Fic1F2ghlA0jFyANe7dlwXKf8RMNBXbQs1%2Bw%2FiT8pmZZEu6wpUKsnkCszyfZ1G8gUB5%2Fw9RPZfE0AzFIoq8GuvFtrLvGmJ37VVXS%2FPB%2B%2BGAXwo%2BtQzFy1K4EfHN0iacheBgXYvdgwEf7%2Bs2XiWJ1KfA5BnS6ge1sLEb%2FbVsBPhheeJ%2B4eYaKueAqdbIWEL%2FrodfQyPaoye480OJo1hzy%2BsE0Kq%2FWFnv5JEk8c8qkbsZNJFlJQMTwvcl1IfrAXbiezg%2B3TE8NxNkEJ9MJ%2B1n78GOqUBaGc1HRsYYPsevrmXldO7T1BDbseKCKME1c8rV%2FSU26P1GWQZTnexPjCqHFPDQ8T2B7XPWqvY1kLfYxYjn%2FnNmLB6o8Tbf13%2Bd8eP9olzqjT3uClR9cdDmUsJXR%2BRT0ttj5%2BJIWBi5CkbXYlvRf%2BDSA2%2FPGAkpZG%2B7OIi3NsNuaFJ8n5RM2vNx6C6wPAWGCk97ZQcl%2F8U3y4RM%2F7a7XYpWw8zpXpU&X-Amz-Signature=ea895660c71ec4a3e9ec875f7e5a1ac61ea909ac204951afcd0411d24d7c7013&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNKQIV3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB8DFxJRHZ4A36hTa%2BFYATYzyAkaunNw9EN4rJdXMF0DAiBzQCmounbwOK5%2FXvaPCYhwKfdvo7C01yoBd5jJZQFxjSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEYCyFTANgK2mgsVOKtwDQoDi78VIfPZ%2BGetEcz0T9SzRgoFanGUqqU9mJGCMvLaZBXlP4y%2F1xh669mn9LF2chLR9BglfzvX%2BLLHzsUsHLaOxg6m78P5%2FEfgEdbW4p%2Ffe%2FGYELqcfps%2F6Y2oOy71H9LnLRwY8VR8B93T4vgdM11qGU8HeBY4C1%2F1lK5Tj2SGr4fP0qATGKNCnfivtK1YEijeZ0mAEt5hvM5gvWVmgbjTCwYzhqd0WanzPhxVBFvxIJkK3k%2BAfB5ruVKDWKJGqRsvvdnUEAWOkHYLSprbF1%2BlD4H%2BcNlsDYurBIqwzzmhxXyssf22Jnezew1K9cFglorIMBzi54sU6ml0d2Ei0QHRHbqBdGf0geIv55OhiJtjgtf3wjMGaH6k7JAA0zy7vAVM3pHNj0cXEsTABc4k5zWlL%2FtEjxchLkKFOY5fCuM4qlEnHQbWmRbPWFGgfxYgPqPhyhBlmXpe3iwFr7lQ4bFgGXnb2a9hwdc6js82Vemu1%2BZUQvTXq2ug7izvmq2nAcK%2BMh4c3RfH%2BscCKlKTUlPT6NZSR9lqBhLWB%2BsyauZEizhYDb2GSsrfiqJw02PDuOWxoZ9DSD2wJIj3gryXftVvPwV1KxJPcw%2BZ4InJpuEnWSA91ps%2BYsBvnJYswiLWfvwY6pgHPXdSJgMaEMc1MrZAbwn9k0xe%2BjpfxUrnpgtNKywkUsZpIsKdbZxe5CZlpGnIiR%2BXNN7M4L9FTwLLgEqkQErQs5aIoock5mKZVkqDeGtAi11olAKndbXFcaD9RMxcr8HDk4jfjN5LuwtKNRI9utyGSwaAT88tdtS8Y26svY3xlzuwUxWyUTDKYG3uXYnNiFQBKc0TKWkkSgInvP0chSg8ZvifgjVZk&X-Amz-Signature=8a1fbf924e868cd795051dcfb9b524f8af9936fba34aad6e7ed8ef70c820b097&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
