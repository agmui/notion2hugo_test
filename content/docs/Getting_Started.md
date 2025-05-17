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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4J7DZJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnZKLvVTx31rs4dXmC2yuF0fjUT5bNyRwWiyftd%2FAkKAiEA95riqTQyuGriAf5hzpQJAqy7bvNV3kH1hP6%2BciouQ50q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKoNsaSVuNbNrFMiDyrcA4CSP4nWN%2F3ySlw429PYf3ClYCwyCr%2BX4%2BHlRP%2B1SQ86jyqaQ%2BVyiMIFcKskkOTbo%2FFs6MAaa%2BsByQz1uVg0AzotHIudpimLVPTF5yKSzSQeBzsPxo9CwwUJmMkTTdIjP4KbAKYq%2FyPXAyMRYhGU84q1AUMC5b9SQZ1D5cBkWhrYLigsW7JvDvyuiqtk5dIG%2BLeVZr9Oe3%2F7gi8Z%2Bb3zoUgQibLgXm6kvtCv6XGL7JGuiWX3c8iAQoRDop3wHYapP596TKjw3x1B%2Fg5s4puAYd8lXvpj6YFOQpilyfckqf7Qol8zi%2F9g15LT96GemLT5H7PFtF03eLFLxa2J50MHhNV8V7xZ7nKWEdSlrpPrYcIYyg%2BVUN53t6mOAZ%2F946h%2FOdfjAW9Nv6PM9PHpJoV%2BRBkCMxzmxrVMdVRSsOIdlrfBbzKd5oQ7yuhs4yHkN8oj384Z8H4H%2BbNFeMWoYznMhYgLWgwT%2Foqz8xqqnkOseJoXWpDHLpmNO81ry6cIL1QSo0LLDi9Zh06PiL%2BAKz3F7bRF0dVrS73cKauXCe0bygF1Apof%2BS9RGnaR78s1CoaTgcDbhBd5eYuCtULmyEMfppLswCI%2Fe4SerxNFHIBn123RZ%2FEHwl33fJPugWlMMNGQoMEGOqUB%2BY2whHFlO79UEUGNAoQiGCmZrqs5N9k0LdGkJ5fKBcydQyVb6KIRK0OlTHaaZ5j5c1L4oM3GDETFRunKUAMMk1Dq0oIaUG693qfSHUeclK3sFuzw%2BzPTv4Waoav7N%2B8xH6qgQ944nrX85O0w%2FO7SHhxeUOyJYi0zXEQZGJ9JLWLMHdJWegBz%2BsU%2BJENxlgBosPeASZ7FU%2BvQYPVAXM1R7fXpn2%2BG&X-Amz-Signature=ea654267ced01d100936798d0b009a824ae57e3ee9edaaa2a99dd9a057852f01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4J7DZJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnZKLvVTx31rs4dXmC2yuF0fjUT5bNyRwWiyftd%2FAkKAiEA95riqTQyuGriAf5hzpQJAqy7bvNV3kH1hP6%2BciouQ50q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKoNsaSVuNbNrFMiDyrcA4CSP4nWN%2F3ySlw429PYf3ClYCwyCr%2BX4%2BHlRP%2B1SQ86jyqaQ%2BVyiMIFcKskkOTbo%2FFs6MAaa%2BsByQz1uVg0AzotHIudpimLVPTF5yKSzSQeBzsPxo9CwwUJmMkTTdIjP4KbAKYq%2FyPXAyMRYhGU84q1AUMC5b9SQZ1D5cBkWhrYLigsW7JvDvyuiqtk5dIG%2BLeVZr9Oe3%2F7gi8Z%2Bb3zoUgQibLgXm6kvtCv6XGL7JGuiWX3c8iAQoRDop3wHYapP596TKjw3x1B%2Fg5s4puAYd8lXvpj6YFOQpilyfckqf7Qol8zi%2F9g15LT96GemLT5H7PFtF03eLFLxa2J50MHhNV8V7xZ7nKWEdSlrpPrYcIYyg%2BVUN53t6mOAZ%2F946h%2FOdfjAW9Nv6PM9PHpJoV%2BRBkCMxzmxrVMdVRSsOIdlrfBbzKd5oQ7yuhs4yHkN8oj384Z8H4H%2BbNFeMWoYznMhYgLWgwT%2Foqz8xqqnkOseJoXWpDHLpmNO81ry6cIL1QSo0LLDi9Zh06PiL%2BAKz3F7bRF0dVrS73cKauXCe0bygF1Apof%2BS9RGnaR78s1CoaTgcDbhBd5eYuCtULmyEMfppLswCI%2Fe4SerxNFHIBn123RZ%2FEHwl33fJPugWlMMNGQoMEGOqUB%2BY2whHFlO79UEUGNAoQiGCmZrqs5N9k0LdGkJ5fKBcydQyVb6KIRK0OlTHaaZ5j5c1L4oM3GDETFRunKUAMMk1Dq0oIaUG693qfSHUeclK3sFuzw%2BzPTv4Waoav7N%2B8xH6qgQ944nrX85O0w%2FO7SHhxeUOyJYi0zXEQZGJ9JLWLMHdJWegBz%2BsU%2BJENxlgBosPeASZ7FU%2BvQYPVAXM1R7fXpn2%2BG&X-Amz-Signature=0b738bf6c0d48defc5f33ff40032461641bfa76b7fa69ed8e9b60ab89220aa00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4J7DZJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnZKLvVTx31rs4dXmC2yuF0fjUT5bNyRwWiyftd%2FAkKAiEA95riqTQyuGriAf5hzpQJAqy7bvNV3kH1hP6%2BciouQ50q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKoNsaSVuNbNrFMiDyrcA4CSP4nWN%2F3ySlw429PYf3ClYCwyCr%2BX4%2BHlRP%2B1SQ86jyqaQ%2BVyiMIFcKskkOTbo%2FFs6MAaa%2BsByQz1uVg0AzotHIudpimLVPTF5yKSzSQeBzsPxo9CwwUJmMkTTdIjP4KbAKYq%2FyPXAyMRYhGU84q1AUMC5b9SQZ1D5cBkWhrYLigsW7JvDvyuiqtk5dIG%2BLeVZr9Oe3%2F7gi8Z%2Bb3zoUgQibLgXm6kvtCv6XGL7JGuiWX3c8iAQoRDop3wHYapP596TKjw3x1B%2Fg5s4puAYd8lXvpj6YFOQpilyfckqf7Qol8zi%2F9g15LT96GemLT5H7PFtF03eLFLxa2J50MHhNV8V7xZ7nKWEdSlrpPrYcIYyg%2BVUN53t6mOAZ%2F946h%2FOdfjAW9Nv6PM9PHpJoV%2BRBkCMxzmxrVMdVRSsOIdlrfBbzKd5oQ7yuhs4yHkN8oj384Z8H4H%2BbNFeMWoYznMhYgLWgwT%2Foqz8xqqnkOseJoXWpDHLpmNO81ry6cIL1QSo0LLDi9Zh06PiL%2BAKz3F7bRF0dVrS73cKauXCe0bygF1Apof%2BS9RGnaR78s1CoaTgcDbhBd5eYuCtULmyEMfppLswCI%2Fe4SerxNFHIBn123RZ%2FEHwl33fJPugWlMMNGQoMEGOqUB%2BY2whHFlO79UEUGNAoQiGCmZrqs5N9k0LdGkJ5fKBcydQyVb6KIRK0OlTHaaZ5j5c1L4oM3GDETFRunKUAMMk1Dq0oIaUG693qfSHUeclK3sFuzw%2BzPTv4Waoav7N%2B8xH6qgQ944nrX85O0w%2FO7SHhxeUOyJYi0zXEQZGJ9JLWLMHdJWegBz%2BsU%2BJENxlgBosPeASZ7FU%2BvQYPVAXM1R7fXpn2%2BG&X-Amz-Signature=ffb4b1c6f5b8f6d1c0d343ffc8c3dd7b4aca09fa9483f3a453319e0de6e51fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWUUURM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoe7IEua6GTZZkw31ZeUpmE3aMEYH%2Ff6BzFgrvKwP00AiEAkypUjFo0LVZ2Hnmhn9pBFiaisPg9n6kGZA%2Fj1Yudy40q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOtEDNrML9geNp5L6ircAyF80YXRZ14s6gEli0BApusex5caH46W3fNdatpgJIp4kWRNI41eLXn69ZjaDRATBUbVXzmrQrCFD%2BF2Vp%2BIHwhWUgUuwmajus0wwTNpDV6rQugsae9%2BrSpO6Zb4gzOQtchxZ41q1LH9tT9NPEYvLQiODQlzuYZYqRDp7Mh%2FqrU29ds19rL7TMTCdMM6Q2NwxvhDmftcocmVzYNkAJJMTNbNdvCjsxzAENLbaCx2rwOk%2F%2B4L1pdI6w1YM2i31yMR%2BaZWgqc%2BRsJhakOheXPPh5h%2BDl1ieLSbW5GGnaTfTopTF5g7yeLWeyPsqNGkKew1GwUez8%2F3KgiAcPuloyblmYSOWe1%2B39Bczn%2BTu%2F%2B9b8%2BvvvHaEl%2BGdV7gPFHkcWGEvy%2BsiHrjzRGg%2FB6nU4E9qg1MURDk4%2BQr7egKjPyfxTt8xvrQUQkO41YDV%2BpyFkWJypeDQf7F4zigk2BYlqP81v%2FypYUHUepyNh4BDQtocQlfGLZf5jdZfBuj%2FEI9TJ4Cub30k%2FcFnflcUf%2F351zgnfZnFnjGZmdewwpjWYbos01OP6K4sCJleB6fWU6TB8NrrFeLTcM52YBS6vvunSsbZKmF2MzHNpFRlN8r6yH5jjJKDmS8qmyLcwLJVXIXMNiPoMEGOqUB1Gzh%2FFoy4QM5Xn75AI3hPljlgoo5HVRck%2Baf86SaEEc5G6s6uWCbnIpbq40b3CseD8Kk%2BBLyc11w9VnaHNkddOEx33nAr%2B20eFpPRMMuMYAqWmCkhbwfWwGHigRwdRjC5Y5DQnSv5H79aW%2B7ZPTkpqsEIaT4GMPpbhx36jOFKruAEwGGWq6BttClBFL7adLpQlRAnbC1%2BqrV23%2FnXrzAclhtw5tU&X-Amz-Signature=aca999c528369b7bb4fb20ce3afa5fe9a99bf84753fb847dc94e31ec577cf86c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMULBDY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaWi74ZvfO%2Bcn5OS%2BbVSaAP1v1U0%2B1tuNMGiE30FftuAiBb%2FuOjlAOku1xzeYb%2BkvrTD1oxjIFuzb6oHXv%2FIJFw8Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMbfa4S0uoo5pWfTYQKtwD94Eon5xyEIyvyf%2Fi9azBqHpgwl4S7rcvwg9bO%2BjINX0RQ6HhIYayk%2F7qV0vepSuPzKlB5OqHTxJ8gYnLKtfLXlYzxbjM430a%2BS5rBekEmZ0PcmNQMFZbsrrxjCEw7ow1MkN9PH6iFdIusroEp8dkiJNLFEbAfQBRCziRpKyy1WffEu%2FMdiGzB%2BaxQYUueD7cwIEh1sK72YB8sdMsUOJ61Sf5z7IBjg9IseRNy%2FT2JVwEW9vhdjgC3Ck30AENvQaR5RxKovsTcAaEnpKuc%2BHxElPsK%2BDUNXbCgWB40Rk%2BMvk%2BOaY71Jqmz9xkCZDahm7NuFryeY1RfAiAHAo51d843pA1isyXijXKizxRy4ARwDdLD8T%2FJxy0Q%2Fux54T6AuH8YWy7LLSe%2FuU0wWeLLGif2pH8Y6dx5I0eQA5YPDi4icrQB3mZsAP2tB7wZTOa%2B4Y23Z3GdkuYahjWyiQCWv7GaE44Jf%2FUZxCVp9WP5deXlXaGJHeROluLV4QZC6eRllwGHxZ0gAMV0z8%2BOrcbcz8cnJwqxEBGtNOzsRV2mfDff6DKiJiMNH9yvWoCoqYPMPHAj%2FlkNHlHyxtFjhGE%2BT7WPfncF0oofMORt60bWJQqPDLUfi1SRKjPbCQgXrAw7o%2BgwQY6pgHOd0Adff82%2BjDiYa2Jx0cIFLhD0sOxdox9rY9TBy6Rzwycctj0HUUylADVi3jEANe3IMnX6o1AvqrY7c8w%2FcxpzqvnxpotXl%2F80V1fMk4O42ryUsCp%2BlgmEZ38EKe7ycJnOUQbqrIr07Dy47hwaPKXPOk55QHGEENSXH7kWTNPc9oj6E277rN6ql3nTKM3RZCh50efdLakojD2aE2s5geex8LbDjJW&X-Amz-Signature=483a931f7d7c419a4e3f9469425ca54c477c6d6d029c560d940f77ef574d530a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4J7DZJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnZKLvVTx31rs4dXmC2yuF0fjUT5bNyRwWiyftd%2FAkKAiEA95riqTQyuGriAf5hzpQJAqy7bvNV3kH1hP6%2BciouQ50q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKoNsaSVuNbNrFMiDyrcA4CSP4nWN%2F3ySlw429PYf3ClYCwyCr%2BX4%2BHlRP%2B1SQ86jyqaQ%2BVyiMIFcKskkOTbo%2FFs6MAaa%2BsByQz1uVg0AzotHIudpimLVPTF5yKSzSQeBzsPxo9CwwUJmMkTTdIjP4KbAKYq%2FyPXAyMRYhGU84q1AUMC5b9SQZ1D5cBkWhrYLigsW7JvDvyuiqtk5dIG%2BLeVZr9Oe3%2F7gi8Z%2Bb3zoUgQibLgXm6kvtCv6XGL7JGuiWX3c8iAQoRDop3wHYapP596TKjw3x1B%2Fg5s4puAYd8lXvpj6YFOQpilyfckqf7Qol8zi%2F9g15LT96GemLT5H7PFtF03eLFLxa2J50MHhNV8V7xZ7nKWEdSlrpPrYcIYyg%2BVUN53t6mOAZ%2F946h%2FOdfjAW9Nv6PM9PHpJoV%2BRBkCMxzmxrVMdVRSsOIdlrfBbzKd5oQ7yuhs4yHkN8oj384Z8H4H%2BbNFeMWoYznMhYgLWgwT%2Foqz8xqqnkOseJoXWpDHLpmNO81ry6cIL1QSo0LLDi9Zh06PiL%2BAKz3F7bRF0dVrS73cKauXCe0bygF1Apof%2BS9RGnaR78s1CoaTgcDbhBd5eYuCtULmyEMfppLswCI%2Fe4SerxNFHIBn123RZ%2FEHwl33fJPugWlMMNGQoMEGOqUB%2BY2whHFlO79UEUGNAoQiGCmZrqs5N9k0LdGkJ5fKBcydQyVb6KIRK0OlTHaaZ5j5c1L4oM3GDETFRunKUAMMk1Dq0oIaUG693qfSHUeclK3sFuzw%2BzPTv4Waoav7N%2B8xH6qgQ944nrX85O0w%2FO7SHhxeUOyJYi0zXEQZGJ9JLWLMHdJWegBz%2BsU%2BJENxlgBosPeASZ7FU%2BvQYPVAXM1R7fXpn2%2BG&X-Amz-Signature=cd8cb9a13c3b4726edd0284a0bb0bdd3ab7c6c1139be46aa1c9a196ff3aeacd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
