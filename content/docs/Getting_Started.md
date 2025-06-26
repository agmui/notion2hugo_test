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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVIMQIL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIH%2BcXbq%2BO%2BYr6waYmJfA9oxo1VM34F%2BIfh4xs4eIsiLrAiBgnZK1LXVtiCiwwSqQcntGHJPLL4EAo5kt%2FL%2FVTQH56Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYco9moqAODbCc6N2KtwD5dBLnbAtOVlt8EDoEY%2B9mRkQiFynKcqazfwAuLDpV%2F6usFwwaKJI6qrvlJlFPaJ4I8Cym%2BPO8yzO5IpGoPtsve54uJpJX%2BNGwqqRrWgzX1maG2OmZ%2BbKbDE1%2F%2Bz9dFkqfNNbla7KFsHvGjZosCJus1x9Ltire7TMjbQIfgCZ3Rk5%2BNI1mC94n%2BL35G3TDO4QDb32B6xrY97Osv8XfdCK8%2FzaUG7k6k9ASV3V2l85Pv0vKEjMIqTDDvMmp8ZczzuzKJlwwuq%2BxX0Et5U9vqA4F5zPPa3G9Av7BxLMDtreAIlXrBo2EIWKRQ1NwSDwyxc2eSNLlaTL%2Fbt5C1xeH%2BIey5PI2aUcA8uhqKEnD63ETW7%2F5fgIdNE%2FG%2BCCItbCE%2FTec3iI4zUFGZbh%2BdzZ8S6GDuR8sQQlgdPyaTYxzL5%2B4QyW7QHGY1DlTA3rfFaxPpIB3B6OsZuunxd2KKYSTxxDFjVKPiF4fYB6lzYLUEUhsjn15m%2BbDIIBIsupZGDnzjGjRPhUZlH7G3NN4%2Bz4G%2F7r077tDW4lHghp0UJob4cxDaW%2BpQBS62pFvOAZHSQJg96VM9DXeqbGh%2BPwxndS6nMGs%2FHvGHjDP6Pri2kVZb%2BXeCvMZEdRzmRTDmVP8CcwwMv2wgY6pgFSs2SFZFSgtiHDz5kWVUJuYQYuUmf7KhHx1gLwGaMCAHlXpzWlB6Ynhrq%2FZyhsPiXwmqLkFW%2Bw0XUJ5Gd%2Fn%2FLExkAcfjBDDZbD01R%2FaP6y0JfCsxHh5LcC3tcent%2FTVuW3zZQUKd1tKWesqEwnPYnhkMUCKZmEiQ6akd4F0nDX0O7xM1BADPsLlZ%2Bg7nyb0E9Y5kD%2Bln9dga%2B%2Bad0xetx6V4hqHNBT&X-Amz-Signature=da2d2e09c6b31c6f482ba1e8cb469f2a1593dcaadc1c09e0d43b4989b74d1462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVIMQIL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIH%2BcXbq%2BO%2BYr6waYmJfA9oxo1VM34F%2BIfh4xs4eIsiLrAiBgnZK1LXVtiCiwwSqQcntGHJPLL4EAo5kt%2FL%2FVTQH56Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYco9moqAODbCc6N2KtwD5dBLnbAtOVlt8EDoEY%2B9mRkQiFynKcqazfwAuLDpV%2F6usFwwaKJI6qrvlJlFPaJ4I8Cym%2BPO8yzO5IpGoPtsve54uJpJX%2BNGwqqRrWgzX1maG2OmZ%2BbKbDE1%2F%2Bz9dFkqfNNbla7KFsHvGjZosCJus1x9Ltire7TMjbQIfgCZ3Rk5%2BNI1mC94n%2BL35G3TDO4QDb32B6xrY97Osv8XfdCK8%2FzaUG7k6k9ASV3V2l85Pv0vKEjMIqTDDvMmp8ZczzuzKJlwwuq%2BxX0Et5U9vqA4F5zPPa3G9Av7BxLMDtreAIlXrBo2EIWKRQ1NwSDwyxc2eSNLlaTL%2Fbt5C1xeH%2BIey5PI2aUcA8uhqKEnD63ETW7%2F5fgIdNE%2FG%2BCCItbCE%2FTec3iI4zUFGZbh%2BdzZ8S6GDuR8sQQlgdPyaTYxzL5%2B4QyW7QHGY1DlTA3rfFaxPpIB3B6OsZuunxd2KKYSTxxDFjVKPiF4fYB6lzYLUEUhsjn15m%2BbDIIBIsupZGDnzjGjRPhUZlH7G3NN4%2Bz4G%2F7r077tDW4lHghp0UJob4cxDaW%2BpQBS62pFvOAZHSQJg96VM9DXeqbGh%2BPwxndS6nMGs%2FHvGHjDP6Pri2kVZb%2BXeCvMZEdRzmRTDmVP8CcwwMv2wgY6pgFSs2SFZFSgtiHDz5kWVUJuYQYuUmf7KhHx1gLwGaMCAHlXpzWlB6Ynhrq%2FZyhsPiXwmqLkFW%2Bw0XUJ5Gd%2Fn%2FLExkAcfjBDDZbD01R%2FaP6y0JfCsxHh5LcC3tcent%2FTVuW3zZQUKd1tKWesqEwnPYnhkMUCKZmEiQ6akd4F0nDX0O7xM1BADPsLlZ%2Bg7nyb0E9Y5kD%2Bln9dga%2B%2Bad0xetx6V4hqHNBT&X-Amz-Signature=0e851175614f85429c9ca307981f378e07f218441a51353253b7471ee3219a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVIMQIL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIH%2BcXbq%2BO%2BYr6waYmJfA9oxo1VM34F%2BIfh4xs4eIsiLrAiBgnZK1LXVtiCiwwSqQcntGHJPLL4EAo5kt%2FL%2FVTQH56Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYco9moqAODbCc6N2KtwD5dBLnbAtOVlt8EDoEY%2B9mRkQiFynKcqazfwAuLDpV%2F6usFwwaKJI6qrvlJlFPaJ4I8Cym%2BPO8yzO5IpGoPtsve54uJpJX%2BNGwqqRrWgzX1maG2OmZ%2BbKbDE1%2F%2Bz9dFkqfNNbla7KFsHvGjZosCJus1x9Ltire7TMjbQIfgCZ3Rk5%2BNI1mC94n%2BL35G3TDO4QDb32B6xrY97Osv8XfdCK8%2FzaUG7k6k9ASV3V2l85Pv0vKEjMIqTDDvMmp8ZczzuzKJlwwuq%2BxX0Et5U9vqA4F5zPPa3G9Av7BxLMDtreAIlXrBo2EIWKRQ1NwSDwyxc2eSNLlaTL%2Fbt5C1xeH%2BIey5PI2aUcA8uhqKEnD63ETW7%2F5fgIdNE%2FG%2BCCItbCE%2FTec3iI4zUFGZbh%2BdzZ8S6GDuR8sQQlgdPyaTYxzL5%2B4QyW7QHGY1DlTA3rfFaxPpIB3B6OsZuunxd2KKYSTxxDFjVKPiF4fYB6lzYLUEUhsjn15m%2BbDIIBIsupZGDnzjGjRPhUZlH7G3NN4%2Bz4G%2F7r077tDW4lHghp0UJob4cxDaW%2BpQBS62pFvOAZHSQJg96VM9DXeqbGh%2BPwxndS6nMGs%2FHvGHjDP6Pri2kVZb%2BXeCvMZEdRzmRTDmVP8CcwwMv2wgY6pgFSs2SFZFSgtiHDz5kWVUJuYQYuUmf7KhHx1gLwGaMCAHlXpzWlB6Ynhrq%2FZyhsPiXwmqLkFW%2Bw0XUJ5Gd%2Fn%2FLExkAcfjBDDZbD01R%2FaP6y0JfCsxHh5LcC3tcent%2FTVuW3zZQUKd1tKWesqEwnPYnhkMUCKZmEiQ6akd4F0nDX0O7xM1BADPsLlZ%2Bg7nyb0E9Y5kD%2Bln9dga%2B%2Bad0xetx6V4hqHNBT&X-Amz-Signature=403d75b5126c80b8d2135f173068d7c4b8fbd2ae614a9812d428e5f17f06756f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QUJLCH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAaYwjHzaoOxM3DoP0a%2BE2H1dl6GUNjZBESlowY1ZchtAiBz5efWvlrh03o0IMUmh30Puvrl1lKcGbqRGSPt7nQntCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMuPnHN6c11HKDP7ZrKtwDhgjwTqcfZE3XoZd8NWkLtPm3JndS6FkA2RN12k8oGSCLNX0o6g0oOZzAKYiUMAGkOGqUVsocsXEyG4qvrTDHLxJuIvEaiNK4FDUBxoX3oj6kAzfusRVP%2FCREpBlWwfTBXZFKPQ8mN6c5eZFAP%2BW6sKkW1OfYCJuqUsk%2BOGDkOAbsHweYMvFrofXZ9vFE0OARHw0uP1tuA6S8yNDa29OB5rtc%2Bd6HsQSly9gCBsZ6vbLNKFqyDvCEHrHdQuQihiZw7k9PznrUBWjL%2BXd2iAH%2FP6MKC6LyLVLvWeFZi8JwGE6sTyJ0Red7tJVcisdg6c6SQF66b9bkFqSzg3yIQHUoyHBgSvE9lfQYCW5BoWlLzq5AgLNQXEcmlWyTRw0tiIH3aZpAA%2BEViSnk%2BqSW%2FXDuugNxZZ03%2F5%2BL6sffCrOt1P4EO4mx5Vk3gdAHlU7vMLJnThi34l0NDlUEnRQJwzoVmNDFlGdbtbjrEYW5ysz2mQIJ0taUEqgZo%2BM1SQqOWRa8dpfe8M%2BJss9MNm%2B0Qqp9oAwhc55SFNlowoYg4trjWPJFn%2BGWuoqeEoTGHkLVpfrcl0VuM7QsdukQxnz8YizV9dbFVVjTXUdio9zG9yvlsBvnj4y%2FyRjW1ng4%2Fskw4Mv2wgY6pgHZ5QcUmyAqI5Uie9bkEPjt9JKvqkeT3VavXYtL%2Bd%2B%2FNfrhv0QEeTIeaiwRfjplQOj%2B5F2wWwQzASupSssrFIqwkkAstMgyXKK3INJft0XLDfhlx5y4OSOMQ%2BjsAmAR5frxm534dietYhiUMi%2BhAF4SFK1wjcRBakDDq6uxSgdlzUqmsA5cfbaFJiPjvw98mgf3YDYT943GuxQQh73mZLW61Uzb3jLJ&X-Amz-Signature=3f9859b9dc6927d731b239c4294f642d31835a167b3b62fdceac1509083c2e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWZCSVC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFUWi7DcVj3zR8tx7AxLFxxVF%2F5Ov9RyjI4eLt%2FecmXuAiEApBwydrvBg1OYzmSIO03QGb6d%2FO1mlrLdM1Bi3LLS%2FBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPWpOkLffn0XkOgNFCrcAw91xMHt5F%2BGwQlr3PNDeBp9lyRTcVMq3zaJ8EbKKsvNGpsrTm3usuPJGdZ3lTGkIDSYcDECjHL7ruQtHnYu6E7w9Qrg83q9ESNNhuXbU7fEDwD%2BDTWrTrDeeGhiyu4PR0OfRiq0Oypcoqyrt1qF0G0%2FXGoJFxBz3XT2Sg4Eq7a%2Fn%2BeQDxy3T0aHKREuHDYTQejx7oMXJrquCVpOINA8O62kWeGNTWGjjgQXI5%2Bkn%2B4rqmrAmOLIhHFeGsl95xveXasFggCcYP1rWEOOenG%2FimZMsqpi5%2FbW7LkjmtwJkiYKDgfF%2Fv7wQBYhs%2BF%2BGCRS6TSs%2BZDsZtriwcIOLAuTG7g9OW9KvuMFnsOswz9Ulbf3%2BwIweVZzLQaavZg7uDPmzT7E2t8izPkP8vix4LA%2FM5LB5EcX092qbbDrBRVjnGjixYaVJ966CPSmvI5hFRz2knSLCBdLJObW9KBuMkC48zExwmbvxr%2F0qGYP4S52DmuLADkheyAIT9jTxGk%2FmseLgQiCCpFjPq0ke0aPISpW0qd5vyvpbbCh8Ls61hhHkioejeeOQcF25xGGSQEtpeKQd3DURrv3%2FD%2FEf6C3QjFEfGpyRJGsp5JpvlMQqi2f1CN%2F7hW4Qqtr7EUmv7QcMM%2FL9sIGOqUBYe9eSohyb0CJnWJ2pZuLdVTDlt2IP5v3kPoJhSVX5arUrE7RoV7y2o7Wkib6fEa4q3qVeauSWKcjIqq5VQ6Oo2xhGyl3gX7IS4Q6Xwm21uf66fE%2FNKEnWnpgl3rCNigYC5gp02l1yG2eEi7mxRaaLloXRJCnUv8JvG7pq%2FX2CsoY6GXeoQk%2FZui7txPZ%2FbgSQVZXnow3%2B42dRw5%2FB3HuBhfOy3Se&X-Amz-Signature=44fa0db5e0db53a8ff8034280256ab6403fb1696398798800dd7464c68a8676f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVIMQIL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIH%2BcXbq%2BO%2BYr6waYmJfA9oxo1VM34F%2BIfh4xs4eIsiLrAiBgnZK1LXVtiCiwwSqQcntGHJPLL4EAo5kt%2FL%2FVTQH56Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYco9moqAODbCc6N2KtwD5dBLnbAtOVlt8EDoEY%2B9mRkQiFynKcqazfwAuLDpV%2F6usFwwaKJI6qrvlJlFPaJ4I8Cym%2BPO8yzO5IpGoPtsve54uJpJX%2BNGwqqRrWgzX1maG2OmZ%2BbKbDE1%2F%2Bz9dFkqfNNbla7KFsHvGjZosCJus1x9Ltire7TMjbQIfgCZ3Rk5%2BNI1mC94n%2BL35G3TDO4QDb32B6xrY97Osv8XfdCK8%2FzaUG7k6k9ASV3V2l85Pv0vKEjMIqTDDvMmp8ZczzuzKJlwwuq%2BxX0Et5U9vqA4F5zPPa3G9Av7BxLMDtreAIlXrBo2EIWKRQ1NwSDwyxc2eSNLlaTL%2Fbt5C1xeH%2BIey5PI2aUcA8uhqKEnD63ETW7%2F5fgIdNE%2FG%2BCCItbCE%2FTec3iI4zUFGZbh%2BdzZ8S6GDuR8sQQlgdPyaTYxzL5%2B4QyW7QHGY1DlTA3rfFaxPpIB3B6OsZuunxd2KKYSTxxDFjVKPiF4fYB6lzYLUEUhsjn15m%2BbDIIBIsupZGDnzjGjRPhUZlH7G3NN4%2Bz4G%2F7r077tDW4lHghp0UJob4cxDaW%2BpQBS62pFvOAZHSQJg96VM9DXeqbGh%2BPwxndS6nMGs%2FHvGHjDP6Pri2kVZb%2BXeCvMZEdRzmRTDmVP8CcwwMv2wgY6pgFSs2SFZFSgtiHDz5kWVUJuYQYuUmf7KhHx1gLwGaMCAHlXpzWlB6Ynhrq%2FZyhsPiXwmqLkFW%2Bw0XUJ5Gd%2Fn%2FLExkAcfjBDDZbD01R%2FaP6y0JfCsxHh5LcC3tcent%2FTVuW3zZQUKd1tKWesqEwnPYnhkMUCKZmEiQ6akd4F0nDX0O7xM1BADPsLlZ%2Bg7nyb0E9Y5kD%2Bln9dga%2B%2Bad0xetx6V4hqHNBT&X-Amz-Signature=b10bb58692c0b8ad657cec3c09dd396c8ea1d75eff49c30ee9f8dbd489dd988a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
