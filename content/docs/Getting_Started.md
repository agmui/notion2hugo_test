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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MW4WM7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAkKY9J2y7I6CFLSYHDbd%2BKJJDKEWV6%2BKn1UNFsojCEeAiBZASYC2hA1wsDI4Z8%2BnHPloNg5b1%2BL1a4uzhcVHATYMCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsivat17rdJP3ioCgKtwD%2B8M0SoCrH1zJT8h9moAAjleL0ZjO%2Bs6mhM9dvdzpsTUGnoq4zzD%2BGwEOe8U2YvyukfX1UxvfnDdWXmtk%2F5lHjEY62mQku3GvvCD14yVToAE6ZtBKvUl9k%2BQKfp%2FbeiFo865pULl%2FXwiotYrDkL2NwLvFDcTD5CJgAAdBi0Zp1W4VzIDw%2BHBIHjxk6HCoJPW33DinBpODtxOCt2VV9mV7Sv3k%2FcP%2FnrFXShcYXflfLYXooYGubuwBxeyuLIMk7fmz0lhBoxmWigvHaWG1R4%2Fux8dlUYAAjkCqZ4244rzRSU0e5%2FwcLf%2BzcaZrkxlBnW4%2FLvU3O0bhLBVSNUKPgHfUScdjN%2FkmUzSZd1JTs5LkBbCE8E0e7RvUCJJcuD3VrHa4Qtrrxx7jSDUNXlf%2FWs5r8Snt5cwqqWTDlvXXPP0XifYaxnF5Sve2Ggz72KD5sjOLxXT6gabOCsESeol2rrS%2FKsSI49SvWQIgKtkS9ZCrW77cpPwQS1TXjxzac6MF8%2Fv%2FwWxR25qwMPgofq4kGuSt1s7dhYwMDZjFjeXFjg9snICF77PHd%2FWHocMVIrSQuqzQJpYhwiQSIXouFjlXaOqmjwXkJkvElzZop7OUp%2Fk7MikfF7l0tUqOxq1BzDMwg5DrwgY6pgG%2B1P52lkuLc2wQVdKXLnLQsj9uejb1uEar6trKTveTBjV6s5ef1Eh7N0Ba1eiBGiXHdrrZli4zGFjSy6yAr00wzmNxBiGJMMbOlvuJbfncAfrU0K4Gr41SpQdWWuWcWourJEBrz6p38E6gdQUeb6AcInHP8zi1OvFf43kdV9VkOF0QXZ17AqOhvaPmN3knfU8d7nZ%2BnNK3%2BbembND9d4HVhWokqYxK&X-Amz-Signature=18946e03b1d4db6f6dbd5693bcd254222f9228e3aa7f34307185cde904f4c552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MW4WM7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAkKY9J2y7I6CFLSYHDbd%2BKJJDKEWV6%2BKn1UNFsojCEeAiBZASYC2hA1wsDI4Z8%2BnHPloNg5b1%2BL1a4uzhcVHATYMCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsivat17rdJP3ioCgKtwD%2B8M0SoCrH1zJT8h9moAAjleL0ZjO%2Bs6mhM9dvdzpsTUGnoq4zzD%2BGwEOe8U2YvyukfX1UxvfnDdWXmtk%2F5lHjEY62mQku3GvvCD14yVToAE6ZtBKvUl9k%2BQKfp%2FbeiFo865pULl%2FXwiotYrDkL2NwLvFDcTD5CJgAAdBi0Zp1W4VzIDw%2BHBIHjxk6HCoJPW33DinBpODtxOCt2VV9mV7Sv3k%2FcP%2FnrFXShcYXflfLYXooYGubuwBxeyuLIMk7fmz0lhBoxmWigvHaWG1R4%2Fux8dlUYAAjkCqZ4244rzRSU0e5%2FwcLf%2BzcaZrkxlBnW4%2FLvU3O0bhLBVSNUKPgHfUScdjN%2FkmUzSZd1JTs5LkBbCE8E0e7RvUCJJcuD3VrHa4Qtrrxx7jSDUNXlf%2FWs5r8Snt5cwqqWTDlvXXPP0XifYaxnF5Sve2Ggz72KD5sjOLxXT6gabOCsESeol2rrS%2FKsSI49SvWQIgKtkS9ZCrW77cpPwQS1TXjxzac6MF8%2Fv%2FwWxR25qwMPgofq4kGuSt1s7dhYwMDZjFjeXFjg9snICF77PHd%2FWHocMVIrSQuqzQJpYhwiQSIXouFjlXaOqmjwXkJkvElzZop7OUp%2Fk7MikfF7l0tUqOxq1BzDMwg5DrwgY6pgG%2B1P52lkuLc2wQVdKXLnLQsj9uejb1uEar6trKTveTBjV6s5ef1Eh7N0Ba1eiBGiXHdrrZli4zGFjSy6yAr00wzmNxBiGJMMbOlvuJbfncAfrU0K4Gr41SpQdWWuWcWourJEBrz6p38E6gdQUeb6AcInHP8zi1OvFf43kdV9VkOF0QXZ17AqOhvaPmN3knfU8d7nZ%2BnNK3%2BbembND9d4HVhWokqYxK&X-Amz-Signature=ef2ec13fba0ee077367d067ac9b4e3a0ed85d89627a178c3c23d11536ac33796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MW4WM7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAkKY9J2y7I6CFLSYHDbd%2BKJJDKEWV6%2BKn1UNFsojCEeAiBZASYC2hA1wsDI4Z8%2BnHPloNg5b1%2BL1a4uzhcVHATYMCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsivat17rdJP3ioCgKtwD%2B8M0SoCrH1zJT8h9moAAjleL0ZjO%2Bs6mhM9dvdzpsTUGnoq4zzD%2BGwEOe8U2YvyukfX1UxvfnDdWXmtk%2F5lHjEY62mQku3GvvCD14yVToAE6ZtBKvUl9k%2BQKfp%2FbeiFo865pULl%2FXwiotYrDkL2NwLvFDcTD5CJgAAdBi0Zp1W4VzIDw%2BHBIHjxk6HCoJPW33DinBpODtxOCt2VV9mV7Sv3k%2FcP%2FnrFXShcYXflfLYXooYGubuwBxeyuLIMk7fmz0lhBoxmWigvHaWG1R4%2Fux8dlUYAAjkCqZ4244rzRSU0e5%2FwcLf%2BzcaZrkxlBnW4%2FLvU3O0bhLBVSNUKPgHfUScdjN%2FkmUzSZd1JTs5LkBbCE8E0e7RvUCJJcuD3VrHa4Qtrrxx7jSDUNXlf%2FWs5r8Snt5cwqqWTDlvXXPP0XifYaxnF5Sve2Ggz72KD5sjOLxXT6gabOCsESeol2rrS%2FKsSI49SvWQIgKtkS9ZCrW77cpPwQS1TXjxzac6MF8%2Fv%2FwWxR25qwMPgofq4kGuSt1s7dhYwMDZjFjeXFjg9snICF77PHd%2FWHocMVIrSQuqzQJpYhwiQSIXouFjlXaOqmjwXkJkvElzZop7OUp%2Fk7MikfF7l0tUqOxq1BzDMwg5DrwgY6pgG%2B1P52lkuLc2wQVdKXLnLQsj9uejb1uEar6trKTveTBjV6s5ef1Eh7N0Ba1eiBGiXHdrrZli4zGFjSy6yAr00wzmNxBiGJMMbOlvuJbfncAfrU0K4Gr41SpQdWWuWcWourJEBrz6p38E6gdQUeb6AcInHP8zi1OvFf43kdV9VkOF0QXZ17AqOhvaPmN3knfU8d7nZ%2BnNK3%2BbembND9d4HVhWokqYxK&X-Amz-Signature=1679780466a6e1735a2378e4aba3256aef9b386acc31aa1802e2df394bda60ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3CNNTM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvL4Ye940lu82GrcnJmJb2zIse0VKc3JpDWLnAm696TQIhAJK2w4tXrTZSRsj%2FQkLbdaldkqhRQCbQjGLqMP%2B6OTGlKv8DCDEQABoMNjM3NDIzMTgzODA1IgwRMslBCoTaup4IXvUq3AOqsWboRf2oGwEm2gg1iRlizIL3aybhcJlFR5Af9mnDIxW5xyzNnq2ockuHBEHFEgzOkHj%2BNW4yr%2BwGUWelnmZy2rIXHtkX1Jb1LBLAqHebyu%2B5TPsgjeyeMj%2BxygN3R8qeGPmRBTVWNdkPnPmXCosckD7zaYaLFSl1aEHSq%2B5bJCXykP9rmo7nZK0OYFuBv8TA5mF1StnnDq8tFsCzlEkAq7BaLBdC%2F7NE7L0TPsYnaCBRpfg7oiXEdOIGnCdneMlIpIngK%2BzvTA5%2BdPt3KXOTkusqrgp1z3Ob3KAoT1zHdfsSlF%2BiJcA%2FQi8qdrrsFXJoM11PQ%2FbVB%2B3kUiiZBdk7MfnLL6JoTgSQDKr2Tt%2FcyzCKUQuFLdNMk520ZcvLhoatLk6HWG12d5XZZiX1e2m9eAWk2NO3wYdz8QKztI8Yce3vx%2Bh4wqOMMiPOQyhkqqmPQAis9xQTas7BsPbEkJ7nXVFqIjnx6qVngPoKaHxNcYSTtQTKOGtJP5E1wbZngLKsYdlG5nE%2FhntCDGQGmMZcZ2ykvl3PXMuP2wUbCHcrvHIYTfAN%2Fv18FHeG59HmCiOUeQiG7GdPIylDf6E%2F2aUpR1kPUE7vT46rgQwKdNqz7PmSDIaiufGbBrtvEjDzj%2BvCBjqkAc0rwVJoAUISZSkouf8MkrG9rt9oYYHFHRdZtPAmjfCfjqalaAS8gRW2Jyy%2BAtDfJKwo4epYhgXICWkn2C0GXgAbhXeoA0Hoor57ELeN5yyM3gwneKuzxVpKPVP7vEEoTqhgN2ga4ONveOY2Q%2Bf%2F4LAeXPJjN%2F2wX3Kx3fC9Uax%2BbCMujmkCY6QhXEandfDyVOOuNM7t3bPlpZR0kpLDIU9HuLm4&X-Amz-Signature=5d4366719c51723712f9b04a98861f8c788e136904f49bd56d1e21faf9cb2af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UXEHTW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzASbMaRupQfbAArjw9IPPQIWlVb8CZP2qSMamxNE6mgIhAIeBAKNULHAh0xvE9bA3jIjHaAGczGTJuobNZv2GeAaSKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBjrCnbJ%2B636quXJAq3AMeEfyZtTs0GQ%2BD67WChaFo6GcaDwH3hchX6w9pRwTV%2BzsCmd5PBzjyDpGp64nppfM85fQgzmWpCU3ki6MwB1ZlRQe6KmgQ5AlEuHN5krfzheaMYV7APwqK3EneXD2pRMIPff5dzDcxkf4SCioI8tK%2Fii1l3NJJjlqyefgCQSY1diEu%2F2pkcOE2r0d1%2BRLxUMYoCUh8tyV5jlm6PML1l9RRPZf3FBJqAiC2Lc5a4ejb73JYPnrspQl9w9rMM0qE5I1Qn2gsodtHYrIkM4hmL7zwPXwQNv6TqKI4RIpTU7VY1CXih6owSO%2BJqe4gbV7E0jD06NL3CMAqldgDNeEXDnhSeKoj0SxV7mZRS%2F%2BPXnxf78NEIdUTib4yMgV%2FM6AY%2BhsMJKCdCQzs%2FcYcLRnlVKue1SzBxmL4LruWN4WcLqOsBI3BF62kMvEUMe6wJ%2Bdf77X%2B4753kNAA9chPJE4edx4I%2BwaiV5wjIsnaVull7POdMGvLpkPtqJu%2BakYV5QCF1nXiBfexAagl5lD5%2F6E6iDy%2FW4OJAH73Z%2FIsf%2BgIVhiSKZ61b27Qd0D9CiPDKYjXLLxTikgHeoAeO5fgpPlrGj96qErFBK6Du2iGP78zkHb2FABbNUczVMqMYj2C%2FTCIkevCBjqkAZtWstWIzQ3hjc0hIHHJHMWOeQDvYH41f9y85UGQefTm%2FO80i%2BKVd4AQQlncNKjVPWTK5Rjd0IySsSXKQH6ZLF6sFGzlkP5s1xxFsxIZiM2lPTbxBsRRyrJ9Jwnusc4Zh3qOXjqJ6wu9LUweUZcV5BT0YuSNYohMrHFyalG8VYcJBpnDB1MdGfWAGk14BKWoDNQ8vVlv79doxqjPgdQnHdPJK95i&X-Amz-Signature=3a15dc5edbd290547df95f8b14295da3721e3223086bf90e0571b0672ae563a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MW4WM7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAkKY9J2y7I6CFLSYHDbd%2BKJJDKEWV6%2BKn1UNFsojCEeAiBZASYC2hA1wsDI4Z8%2BnHPloNg5b1%2BL1a4uzhcVHATYMCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsivat17rdJP3ioCgKtwD%2B8M0SoCrH1zJT8h9moAAjleL0ZjO%2Bs6mhM9dvdzpsTUGnoq4zzD%2BGwEOe8U2YvyukfX1UxvfnDdWXmtk%2F5lHjEY62mQku3GvvCD14yVToAE6ZtBKvUl9k%2BQKfp%2FbeiFo865pULl%2FXwiotYrDkL2NwLvFDcTD5CJgAAdBi0Zp1W4VzIDw%2BHBIHjxk6HCoJPW33DinBpODtxOCt2VV9mV7Sv3k%2FcP%2FnrFXShcYXflfLYXooYGubuwBxeyuLIMk7fmz0lhBoxmWigvHaWG1R4%2Fux8dlUYAAjkCqZ4244rzRSU0e5%2FwcLf%2BzcaZrkxlBnW4%2FLvU3O0bhLBVSNUKPgHfUScdjN%2FkmUzSZd1JTs5LkBbCE8E0e7RvUCJJcuD3VrHa4Qtrrxx7jSDUNXlf%2FWs5r8Snt5cwqqWTDlvXXPP0XifYaxnF5Sve2Ggz72KD5sjOLxXT6gabOCsESeol2rrS%2FKsSI49SvWQIgKtkS9ZCrW77cpPwQS1TXjxzac6MF8%2Fv%2FwWxR25qwMPgofq4kGuSt1s7dhYwMDZjFjeXFjg9snICF77PHd%2FWHocMVIrSQuqzQJpYhwiQSIXouFjlXaOqmjwXkJkvElzZop7OUp%2Fk7MikfF7l0tUqOxq1BzDMwg5DrwgY6pgG%2B1P52lkuLc2wQVdKXLnLQsj9uejb1uEar6trKTveTBjV6s5ef1Eh7N0Ba1eiBGiXHdrrZli4zGFjSy6yAr00wzmNxBiGJMMbOlvuJbfncAfrU0K4Gr41SpQdWWuWcWourJEBrz6p38E6gdQUeb6AcInHP8zi1OvFf43kdV9VkOF0QXZ17AqOhvaPmN3knfU8d7nZ%2BnNK3%2BbembND9d4HVhWokqYxK&X-Amz-Signature=ac1d0b27dacb0279d6a05c646ba0aa5015d6761d93c5b4b051d58710330baa14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
