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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBLHVNP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDirEA%2Fx2YpIMODk3MeYLs%2FM4uAx4kqc62z1q%2FEeuypegIgNGleyODzGhW8qZAVgelAfauFC413t9xzvmUcK0EnhVAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI64uEe%2BYGdecvpzNircAyKTboAvZBUkZ0zlIrWlJenayM1iigwOdNPB16XczSUvsF1lZQilOxcMoCtVonqeSSJH03quCnO0QmX23zyi4sDWUBrNXUSDSpf6M%2F7oNVlL%2BPhEtFL8ffeQo5NNrMhbbcNTP3YJc6bTVBLNAVArpIwwiT1e%2FATO8LOSaXOufGX49ijZuJAtnQuCyvGjr7Xgzkk5EZ41rbWxB4s1v9B4AViuFYj2LgSTfeatAkeyqphF2WpP%2FLxkDfDD%2F0q%2FAvRqjmTjlBvE090%2Fi1FrVi9KRZ0aVWRTbQjtnxSF07Hul%2B5%2BzZH4Rc7d3kHomjCxtWb%2F1q%2FcOPhbxOHvURul8N%2BMMCnCSMoqWtoXmL6iQ2i42RjYCtouXhucwkOoe%2BG6QE4aa5bvMbz4f28JunEhcpb79%2F5q48mZC0LHL3%2BTQphdrAc7u%2BAzfGkfxuWFVWFR7b%2BA8IEht8h5sqt9V2M0e28y8Q6oSX4VUqz6CThT5TjuObXwLxAGaTaVm%2BxMYS1Hm3yFkpkowi2pKo6KrRLtojIfSc9%2B2RbpoBLgtsxRoiC4I0fbTEpSe0qUyaM2w7xAN%2BSQDDzmE5rMU4kKzjbBJMeLNyn1nlDTLj7rQQZU%2FzRxt9XSZItAbpN51LV6jicUMIzz%2Fr4GOqUByR%2BHNOxi5T65Z9CHM%2FiyVxMVnomBFPYW3rez7GmLE1od3vvNZcWWdDIbT2fgcLHap82vZHD7lyGy9TmjBOI0ppmwiVzyDfHs77uYaDF0WoBkpY64ok5Cc0YXFK9APoaDkB5DDSqHxRytXUziEUDnwvpbngVTSErNn4371GL6cFAiFwAbbcaDYmjqN7lQ04bt6nPp14CxN9gvKGSYzcQz2ge0Dqlc&X-Amz-Signature=d996de47248e9ddc813d0ae8456e2a2eca9f3b2f54d4a2a80e97c4989cb21167&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBLHVNP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDirEA%2Fx2YpIMODk3MeYLs%2FM4uAx4kqc62z1q%2FEeuypegIgNGleyODzGhW8qZAVgelAfauFC413t9xzvmUcK0EnhVAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI64uEe%2BYGdecvpzNircAyKTboAvZBUkZ0zlIrWlJenayM1iigwOdNPB16XczSUvsF1lZQilOxcMoCtVonqeSSJH03quCnO0QmX23zyi4sDWUBrNXUSDSpf6M%2F7oNVlL%2BPhEtFL8ffeQo5NNrMhbbcNTP3YJc6bTVBLNAVArpIwwiT1e%2FATO8LOSaXOufGX49ijZuJAtnQuCyvGjr7Xgzkk5EZ41rbWxB4s1v9B4AViuFYj2LgSTfeatAkeyqphF2WpP%2FLxkDfDD%2F0q%2FAvRqjmTjlBvE090%2Fi1FrVi9KRZ0aVWRTbQjtnxSF07Hul%2B5%2BzZH4Rc7d3kHomjCxtWb%2F1q%2FcOPhbxOHvURul8N%2BMMCnCSMoqWtoXmL6iQ2i42RjYCtouXhucwkOoe%2BG6QE4aa5bvMbz4f28JunEhcpb79%2F5q48mZC0LHL3%2BTQphdrAc7u%2BAzfGkfxuWFVWFR7b%2BA8IEht8h5sqt9V2M0e28y8Q6oSX4VUqz6CThT5TjuObXwLxAGaTaVm%2BxMYS1Hm3yFkpkowi2pKo6KrRLtojIfSc9%2B2RbpoBLgtsxRoiC4I0fbTEpSe0qUyaM2w7xAN%2BSQDDzmE5rMU4kKzjbBJMeLNyn1nlDTLj7rQQZU%2FzRxt9XSZItAbpN51LV6jicUMIzz%2Fr4GOqUByR%2BHNOxi5T65Z9CHM%2FiyVxMVnomBFPYW3rez7GmLE1od3vvNZcWWdDIbT2fgcLHap82vZHD7lyGy9TmjBOI0ppmwiVzyDfHs77uYaDF0WoBkpY64ok5Cc0YXFK9APoaDkB5DDSqHxRytXUziEUDnwvpbngVTSErNn4371GL6cFAiFwAbbcaDYmjqN7lQ04bt6nPp14CxN9gvKGSYzcQz2ge0Dqlc&X-Amz-Signature=369959dbc18633a55691b7249502b8ce39b3a9fa5089326258a05a1059b24c89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDO7JCJZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCkkKVTq8jEB3DvSsHBPuB2Rqrsuf1vpeaVOZgA75OiLQIgZflbHzACD8r3%2Bn1blfIdUxMT47aT5zMzs4gpzB3tH%2BEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZbbCPOsn5o7w1VdircA6eb%2B9z%2FsY0PQIkf7eN59SXJ%2FuQG8MwZYkfNaWfUGEPfvdmHHzpsUHlkQu6q4VW4HjoPotyVUOzZzJqNxPeqtuID9Fn02hSjQ%2Fg%2B9olU2uYFY5saQ%2F7ONpVmzP9f9mvIbLg8%2BqAOJUkY0WRT9F5jnu4CDXzCYYcVqDCqD9Zlq3jpFT704rMvz0X3PStJE84zenPrNDggT%2FX5p%2FcGWOaKgKemX4Bh8BRu9EtN%2Bh6o24gOralv4ry5nAHiY2nbVV2t0sWdjcbpqefx3rg1%2Fc2TaWx3EaTp5F8bvrrlvrMVP6Qc9lQ4qUEEX20noVn3OLwLu5Z45vo6iePr6WpFLRZcBIke7pE%2FRVTXO6LcnZ1ZFHE6Ei3c%2BuTxiye58D0VclYawFGuiJVydhvH6mcI%2Fg83q5tsvjaHM1DG3P1w6LEdT2wC6eJPRVNj2AZTy0dx9UCAHeHHlvmRK4dyqGaWa6YEa%2BaJZIguxZM601KjOwymWcb3bfzRvRLuYd5UMoEazU4fqu6dttKIB0vsBLG1tKOPJ5g6sOkO5vmrUFBEGmXHxIO3r9KCIBp9dqyt9bVySrLgnQHazIjihyDkVQ3J7szkBfAL28iSjGfQD1s5dkaaXAE2dYdEQYrIMN8CD1nZMODz%2Fr4GOqUBsQG52bLNn2B3YfdTFDjxJ05pDtBotKMOrkCgP6N9%2B9qBB0dKbzXjDEte70egR0DwbVrSTIcOnTDguKDWiY7TYIBMZgrGEoosjwYvXX0Qvxk1sDUblSGlpZXkhbuXuQ7jIVGgybx%2F0NB1TgA6Ic2ytYXbV18sBWa1Ia5HHXAbSZ0RXqgCatpQ%2FGvYPQePJKgmqDerI%2Fhek%2BQ2pc%2FsWsY13Moh6YHy&X-Amz-Signature=c5d517b89d9d3b296d16365a022eae3c10d8b93cc8e1b8a4d5364bc4320d847a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MZAE2U%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD9z%2BWTxq09Kh8e%2FmKwshjLhHYs9pTGcvbKHnOWubTpAAIgNhAqCWuxLvWPRxhbC3L6UYJTwJL0WGve2MqvRo1IZQkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzOlvKeysBN2a9XSircAw%2Bn5%2F0TpQu2sNNLpkJS1iAbm91YqBYSRduzfl7cKhHRVHY0OTzhKjCNvRHQ2UGQlW0BntATqB9WMK51BQYxeKXJCLzai8HYeNNtNNMIX%2BARKAjiVwLuEHR19kfuN1kCEttB9ChfQPKCfjbHNGGrmaptTsfl%2FjcwL2C38o3jDwzVGKflWMacj1b%2B6hkutdiZ2vGUK4wwBLmgGYGVhkTDOSdJrzDX9EnC8SxXH%2FMrouA6vEChd4lX1t%2Bx6MQU6fzNQXyKc3NS%2FWYqs5LLwwDS0T65g9vSrxuQaGBxYvOYz4SmXsEiBVWalx7VrQBVs2vbhohS%2F9GaTgFdoOXQW8jdUubyH%2BLcqC%2BFvB6h5WvGUXzaCuWiw1L4dnjDfBP7N%2FfDchg51%2F3gCG%2BUlwz6OLE0mFAn0vmv7aHANS7ySpuMHlWZ38%2B%2FtZtIZFV69shG9rpm7wn6NcjpJ3Z0ctWA1SGvrgdt9SjmSG9OA2jR%2FFMJ9fC%2Fwgjf5IoHHuQzgN8mG4C1VIlTqmeMHVYAJ0IbKGfsQCr6RtRKWVIohgRdLpDk1CTrWLkBWQ04ag7ZMJnET7si21Id%2FWuFw%2FdlWux45PEHB9Rl%2FiBhyplgYuLL%2FLV28C3g%2B35k4C7hxhXjA2A9MI70%2Fr4GOqUBRxL0wltMdMuS19Xhzqn15EpqlRCCaFKpxG0C0xRedTFPQGhEeEeLoupr594erp1f2QyQcBXunBjKFhHQ6KfT8fHf63wayzFlFrJz7Bc%2FH1FnRlbw%2BA5T0aUskuKOzeYVJberwdpnbcEzfqKd4lnFZkML5afydJl6P1sV%2FZJTdACcgDrk%2BRPbyt4%2Bl%2BflT43%2BR3o9LrmUBu5J4tgFiIdSVfTInQ8u&X-Amz-Signature=036a82afe5d7df6f28abb06b8bad792d746a8654da2450ab486cf44b7288d50e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBLHVNP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDirEA%2Fx2YpIMODk3MeYLs%2FM4uAx4kqc62z1q%2FEeuypegIgNGleyODzGhW8qZAVgelAfauFC413t9xzvmUcK0EnhVAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI64uEe%2BYGdecvpzNircAyKTboAvZBUkZ0zlIrWlJenayM1iigwOdNPB16XczSUvsF1lZQilOxcMoCtVonqeSSJH03quCnO0QmX23zyi4sDWUBrNXUSDSpf6M%2F7oNVlL%2BPhEtFL8ffeQo5NNrMhbbcNTP3YJc6bTVBLNAVArpIwwiT1e%2FATO8LOSaXOufGX49ijZuJAtnQuCyvGjr7Xgzkk5EZ41rbWxB4s1v9B4AViuFYj2LgSTfeatAkeyqphF2WpP%2FLxkDfDD%2F0q%2FAvRqjmTjlBvE090%2Fi1FrVi9KRZ0aVWRTbQjtnxSF07Hul%2B5%2BzZH4Rc7d3kHomjCxtWb%2F1q%2FcOPhbxOHvURul8N%2BMMCnCSMoqWtoXmL6iQ2i42RjYCtouXhucwkOoe%2BG6QE4aa5bvMbz4f28JunEhcpb79%2F5q48mZC0LHL3%2BTQphdrAc7u%2BAzfGkfxuWFVWFR7b%2BA8IEht8h5sqt9V2M0e28y8Q6oSX4VUqz6CThT5TjuObXwLxAGaTaVm%2BxMYS1Hm3yFkpkowi2pKo6KrRLtojIfSc9%2B2RbpoBLgtsxRoiC4I0fbTEpSe0qUyaM2w7xAN%2BSQDDzmE5rMU4kKzjbBJMeLNyn1nlDTLj7rQQZU%2FzRxt9XSZItAbpN51LV6jicUMIzz%2Fr4GOqUByR%2BHNOxi5T65Z9CHM%2FiyVxMVnomBFPYW3rez7GmLE1od3vvNZcWWdDIbT2fgcLHap82vZHD7lyGy9TmjBOI0ppmwiVzyDfHs77uYaDF0WoBkpY64ok5Cc0YXFK9APoaDkB5DDSqHxRytXUziEUDnwvpbngVTSErNn4371GL6cFAiFwAbbcaDYmjqN7lQ04bt6nPp14CxN9gvKGSYzcQz2ge0Dqlc&X-Amz-Signature=45087f432373161c30a8416cdeb0d14f2987ec206611aa1f4f9c693a63e2b538&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
