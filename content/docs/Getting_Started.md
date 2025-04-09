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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675O2SU3D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD%2BxgFnauc%2BKuefq0GI7jywf6Ucpur8llkz%2F6q7Hlgj%2BwIhAMEJGrXBDVCXzckI%2BYsjgt5WI17jucm8C3jUhf7Lq9IIKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCTeciTjX8%2Bug75hYq3AN%2FpqbDyamhSSO6NilQs5qWa8z171eBKaSPY1WzK1vyPj85BjyDkab7iokDwOprHWUZH8lFQhouk3v8BRXmMoCyQJcFAZ9QJ1Xy%2FWdUxBeBfNwDUe7Q8pw%2B7rARM8eEW6s%2BaUhZSAnKiBS8bNZJ0NIw8wf6RDfTGQxms%2FGlFp230lKFNvOTPa6ZAlqkmTYAeeoVP%2FVjZDqY0OA%2FzJn5C9xmDj3AAXdPAVR4o0RhfdNeJnMcze4CiG7ikb0IWNToojEbvx5U%2Frp%2B%2B86ZbgAFWEfBSefBLRaxa8iLh1lCzompqDfMI8lwYCEVQqWnxHcSn38GurI3kkR519%2FObAeIyGJ66ZZKBvi89K7kroF0Jhh42tEmL2Y9351C3g8aQpS32cO3bWHXjSgz9IvWq67uMSTQvXcJGPzV7hQfvjjbc8ETsLlJm5SrIdL5K%2BMGNi1zxxLsA%2BgHOVYtRRdzieNi6X0sFKR9fVZejxWfV%2Fa1y56hg4lOEuevHd7ORuXINrzdoXY%2FM%2FyeykJZw3Nh7zyUBKYFCz3f%2B%2FuM54Q0V0tDoDlZgNtb1dfNoPqPasx%2B9k3bB8hzgiwhCwfuBW2yoTfm2VhQ9yY4BDOEyST6Kbo0Yc%2BBq8GPelxgnpR%2Fm%2BCZ1zCv5dm%2FBjqkAb7fuLo2ThkP0eEr0EqH8xK%2BZIbIWG7zdKEkqv%2Fm2cwyvjbjw6PPqV%2FPZN%2FzcKdZwLs3LMB1mJmRhizyf4JuXmnyVCt8LXpl9b4sJxCXCn0WXWci1S1QNBuAgAsBDOK4NFGMfB%2Bji5q%2BulXw%2F2H4kEUeuTe9MrXi2h0sK6QbuXI47eMlbz5i%2BDXDXAXKXXH2xiAr5gxS0h4vAl4URhte4RKpTE9Y&X-Amz-Signature=1c6debbb82a81f6de7cb0f741eb7b82ffed060d2133e1de60843c7483309fa14&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675O2SU3D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD%2BxgFnauc%2BKuefq0GI7jywf6Ucpur8llkz%2F6q7Hlgj%2BwIhAMEJGrXBDVCXzckI%2BYsjgt5WI17jucm8C3jUhf7Lq9IIKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCTeciTjX8%2Bug75hYq3AN%2FpqbDyamhSSO6NilQs5qWa8z171eBKaSPY1WzK1vyPj85BjyDkab7iokDwOprHWUZH8lFQhouk3v8BRXmMoCyQJcFAZ9QJ1Xy%2FWdUxBeBfNwDUe7Q8pw%2B7rARM8eEW6s%2BaUhZSAnKiBS8bNZJ0NIw8wf6RDfTGQxms%2FGlFp230lKFNvOTPa6ZAlqkmTYAeeoVP%2FVjZDqY0OA%2FzJn5C9xmDj3AAXdPAVR4o0RhfdNeJnMcze4CiG7ikb0IWNToojEbvx5U%2Frp%2B%2B86ZbgAFWEfBSefBLRaxa8iLh1lCzompqDfMI8lwYCEVQqWnxHcSn38GurI3kkR519%2FObAeIyGJ66ZZKBvi89K7kroF0Jhh42tEmL2Y9351C3g8aQpS32cO3bWHXjSgz9IvWq67uMSTQvXcJGPzV7hQfvjjbc8ETsLlJm5SrIdL5K%2BMGNi1zxxLsA%2BgHOVYtRRdzieNi6X0sFKR9fVZejxWfV%2Fa1y56hg4lOEuevHd7ORuXINrzdoXY%2FM%2FyeykJZw3Nh7zyUBKYFCz3f%2B%2FuM54Q0V0tDoDlZgNtb1dfNoPqPasx%2B9k3bB8hzgiwhCwfuBW2yoTfm2VhQ9yY4BDOEyST6Kbo0Yc%2BBq8GPelxgnpR%2Fm%2BCZ1zCv5dm%2FBjqkAb7fuLo2ThkP0eEr0EqH8xK%2BZIbIWG7zdKEkqv%2Fm2cwyvjbjw6PPqV%2FPZN%2FzcKdZwLs3LMB1mJmRhizyf4JuXmnyVCt8LXpl9b4sJxCXCn0WXWci1S1QNBuAgAsBDOK4NFGMfB%2Bji5q%2BulXw%2F2H4kEUeuTe9MrXi2h0sK6QbuXI47eMlbz5i%2BDXDXAXKXXH2xiAr5gxS0h4vAl4URhte4RKpTE9Y&X-Amz-Signature=a583135ff3ef501da07f8aa68b38ec0ad818fe4eafcd3fd6ff56422a67562de7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGGZWOI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDT4WuDvFE9uhQ4imvOcUABPJVHR9ztNMmlVi0IFYV27QIgH13vgUb4ZRx2wV34PZqfGnyQgYBGfco9pCc1m3nrBE8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK2llyDws8Calx%2BSSrcAxCCep4YnDDHF1xbWF478GM9Q2h5nr4GiWjXrFgyQF13ZBQlkYcfeqJXf0RBKw5oyZMdj40NgRD97yX2IsicX%2BO%2BDB9WD7434oD0qB0O%2BLjcSp9WzQWeK%2B94iaZNWfX%2FIbSBNHt0HRcTl%2Bbq0QjtBGGYcigeAKwlK80q%2BoHhYM2EXMKQ7LwiNSoJl1swOJv7iwn3Mgmw3MPGWDfu0W%2B0l4RgS3aFpyE91j6jFmbPag46rTpAvHE%2FdvzifgTV8EgIwDDcDEsH9jqHWT%2FqVGg6ZH7uKJ2SacQVtL2B38wMXlXh30txtjRvXXiHfXbbRXcOoi3reHMDEl%2BiL33Aua78JetVV7fdSyvqP4y3V90%2BWdG8Z%2BJ02gnF5P4d2zv4WsDQIOQWnwqW%2FCTkLaCoq9GVCsbiLwUblF8eDo8QNtK5ISsE%2BpWn3uyfqiEAJiRAPrXGBqezNYDY%2Fiabt5xNQ9x0AIZgv6GIRaYtwcHUB0EF2O%2F3WkUt2Ek27n7h4ABg2PiZvwyxmiSPzaSVwNM%2BhAxAhkh8yvN5DULC6mzbobMx3a7Ex2Aku0GhTLGIHsQebngoNklNPQPUel1Xh3Aspl14mNPAZ8cSsNPvL%2BsH9Hi3SQDr8Nv0Bm4kBLETSV5QMMPl2b8GOqUBwwkrUs6G1hiN32Hv%2FESUkL%2F%2F8xqzXhbNUDv%2Bq3bwnGtG%2FQwawimG5Y8Acv1IdlwsimyaSkkHxALzMu1EMa6rFmb%2BTb3cAeHlmjf0kWKtgPZHGSMwXiNVmx5ii%2BBGjG1KT9xO70mzTZQBeRftxqh6OQIHS1X9rAHhFyTECAsU88PFfn5JTggqa8WIKXqp3%2FY54fz1K1D003xUVFau5YjmufqrnLNU&X-Amz-Signature=dae37a32083dff0e452250c4f97c27f642d21bf3d457dc28565252371bb5b6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHRSRELW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDZeKFNy63ym8MdpIBGiXP8PvdXy7o0wcYXZEsWWKF3ugIhAOp%2BMmAJgRGY9wZn1WxCGCGs7b59knbfRH5JVGtC8NYSKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVIMAK1VhKorr%2FwVYq3AMKZdXaFoGhkftH01aSs3pG801cOGjEzrPWLZHp1R%2Bu8QuQzexo9dBLoxQcX5rS%2F%2B5JAjgk65WP3lPU0hmTtGbuJDZtZoH9cd%2ByKgUwqgcftpemvQwHhBZwjGmqz0x%2BSFt4SEVygNUkPiTSZWh6X2dTv7Nfta%2FhV6nuCkE0M8yLU%2BR2JRk%2FkjOemcSQaN7zXq0IrXt2qjtXaMHuNJ5OSsApPdehV9ZeNXSLUz0Kr1JlXImgnYEa3KJcDs02rpKZqfZUHdg5ojAl2PN1aF3ooxsEvkxeuafjivNfPvXIyRhmf9%2BoQeg9c4BhgQnxZufPb4QWNJA1l5N0jMGtjNNLP92GR0kQvYzWXGwQYpNv4NAtMZA9GzZZsDEOvyb7f8aVsRrao0r4qiAZynhsoTEM40KuASVhhvtdbrf%2F%2FjP4pJ77EIAJWaepZ9mKdqWM7s8Q7uiEWmIk86bc%2Fbh%2BQQqjOOZX0Nv%2FwcoXrG5hpPbIp1DltDZ5JTj5wZPyPoOgHbyqhg2GUpIP%2F0%2FlX3pR5TtP1bMwFO48NHfJb%2FUlB%2BfwyHNqoY5J8i2FUkK7z0SIDS0ZUx0cCIG7qteX5MioemHTahjfccoZHhVtRD4WMdMkSG%2FiooDkqHzYMvGnxx1k0zDD%2Fdm%2FBjqkAdpmTHY57J%2Fy9ArQu04vmMn3WrYoZXZxOcsgvHy%2By5pqnnerz74W%2BI%2FzEvJ34chexKyXMjfx2DLsdA2HnuhM99ECrsyn8iGF8l3m1FofxkxyUnjmerxTVL4f%2FzVOq1E4eLl5qHDyciPfo48kS%2BSStmaoKkEyOdWOJOhWO1FRt1yHqy5djLNOHA9ESkSmskvfp3%2BgVDkqSROryZHjxF%2F2ezXYSsqx&X-Amz-Signature=52cf1a53a9a690facea16ff6742f2a1c8ee9e552bbfece9ce56d5fa7404798ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675O2SU3D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD%2BxgFnauc%2BKuefq0GI7jywf6Ucpur8llkz%2F6q7Hlgj%2BwIhAMEJGrXBDVCXzckI%2BYsjgt5WI17jucm8C3jUhf7Lq9IIKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCTeciTjX8%2Bug75hYq3AN%2FpqbDyamhSSO6NilQs5qWa8z171eBKaSPY1WzK1vyPj85BjyDkab7iokDwOprHWUZH8lFQhouk3v8BRXmMoCyQJcFAZ9QJ1Xy%2FWdUxBeBfNwDUe7Q8pw%2B7rARM8eEW6s%2BaUhZSAnKiBS8bNZJ0NIw8wf6RDfTGQxms%2FGlFp230lKFNvOTPa6ZAlqkmTYAeeoVP%2FVjZDqY0OA%2FzJn5C9xmDj3AAXdPAVR4o0RhfdNeJnMcze4CiG7ikb0IWNToojEbvx5U%2Frp%2B%2B86ZbgAFWEfBSefBLRaxa8iLh1lCzompqDfMI8lwYCEVQqWnxHcSn38GurI3kkR519%2FObAeIyGJ66ZZKBvi89K7kroF0Jhh42tEmL2Y9351C3g8aQpS32cO3bWHXjSgz9IvWq67uMSTQvXcJGPzV7hQfvjjbc8ETsLlJm5SrIdL5K%2BMGNi1zxxLsA%2BgHOVYtRRdzieNi6X0sFKR9fVZejxWfV%2Fa1y56hg4lOEuevHd7ORuXINrzdoXY%2FM%2FyeykJZw3Nh7zyUBKYFCz3f%2B%2FuM54Q0V0tDoDlZgNtb1dfNoPqPasx%2B9k3bB8hzgiwhCwfuBW2yoTfm2VhQ9yY4BDOEyST6Kbo0Yc%2BBq8GPelxgnpR%2Fm%2BCZ1zCv5dm%2FBjqkAb7fuLo2ThkP0eEr0EqH8xK%2BZIbIWG7zdKEkqv%2Fm2cwyvjbjw6PPqV%2FPZN%2FzcKdZwLs3LMB1mJmRhizyf4JuXmnyVCt8LXpl9b4sJxCXCn0WXWci1S1QNBuAgAsBDOK4NFGMfB%2Bji5q%2BulXw%2F2H4kEUeuTe9MrXi2h0sK6QbuXI47eMlbz5i%2BDXDXAXKXXH2xiAr5gxS0h4vAl4URhte4RKpTE9Y&X-Amz-Signature=3fcd50935d4a35d986ed117aa01f868ad84fadffb5a4f4a5da06f4a2c6c3daae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
