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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OLC5AY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGraK8QVFoUCKmCwkQCzFY%2B16boBDz98HDLSuVbw29ZkAiEA%2BILnvpf9MX4bxc0L%2BUTDc6O6s3OXRfWd6cEYRFy9Sbcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBqadj1mtRvSz8C45yrcA4ZB%2FMNZ8DRCVIhz97GA%2BTNnPiWNS4CRm%2BaombpLCNT5spcBg3J6%2Bf3t7gC9OArRWYnt9jaBibOGskDVzjLbv8bDOFIMAC4ZbqNHSz4B8lTxoo7v4IMOZ4IcKXOHQSos3HsegH8pCvLh2VNE4WI87XuA5mWX8yhibVxYfS8%2BQ%2F9RB9PZRSJWAV7SHUlK3vJLRCZBwjp062o2YMrGtqNx2%2FwgmFBTkmvuCDe%2FjRGQHV8Oe%2BvvAZUXMALu5x9%2BZ5ourEQxepP%2FbUACZAxCQApd%2F1E%2FT5%2B7QYqIfxbZuR5EMxFOixivQn9TIs5fDanjwZRbir%2BlqvyuYhW6eRTHFmI947Qqup0vJftCI4MlKQ%2FhHvYa5fh1N3UJGZxGgVK32m91Rk%2BD4Iyk7EsrmHSvuPO%2BVkJtORY284ATo9oIYG6C%2FC0oUVHraApfevbfgy6GcRyxdUfZrWGam84YmoXE84%2BImsC5NjrIZmzvAnuTipP4K4WAfdCmz%2BxmESfTmuUsGBqPoR0PDgWRdhN9Vy%2FAkGrCaPBsSypn%2FH8mzKQUnJvK95dTou%2F2jLBQQs91MaNHZsQV2pJQBwDX%2B8SvIDFlWg7s%2B0y%2FqoXtl94Odu%2Fz240JEITpTQsEWWVJUyULPmyVMJ%2BBncEGOqUBY6VY8wGfv8S%2FqPInP%2FDPUpsi6y6tYMXWspbDWY5XbBazUh7ZlRjNtVJrlOILwM7Hla4J5PTEl890V%2Fl6MJ8iyZazZAFyvI7LvZt0vvVbSj0%2BmtuOx8yNFDRRgBpbmFXshUTyyvqUsmVyO8K7r5tLKsoGPfEhoLy%2BsE71cD0rN12V2lyGv4QJ6n%2FqfZZ7PSQzF1CYUDGufUFXeAUcMAvqviIE8yLL&X-Amz-Signature=b156ae92182c2006b97b07a014db37d3e2cf587e5feb43d619ca83b9e176bd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OLC5AY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGraK8QVFoUCKmCwkQCzFY%2B16boBDz98HDLSuVbw29ZkAiEA%2BILnvpf9MX4bxc0L%2BUTDc6O6s3OXRfWd6cEYRFy9Sbcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBqadj1mtRvSz8C45yrcA4ZB%2FMNZ8DRCVIhz97GA%2BTNnPiWNS4CRm%2BaombpLCNT5spcBg3J6%2Bf3t7gC9OArRWYnt9jaBibOGskDVzjLbv8bDOFIMAC4ZbqNHSz4B8lTxoo7v4IMOZ4IcKXOHQSos3HsegH8pCvLh2VNE4WI87XuA5mWX8yhibVxYfS8%2BQ%2F9RB9PZRSJWAV7SHUlK3vJLRCZBwjp062o2YMrGtqNx2%2FwgmFBTkmvuCDe%2FjRGQHV8Oe%2BvvAZUXMALu5x9%2BZ5ourEQxepP%2FbUACZAxCQApd%2F1E%2FT5%2B7QYqIfxbZuR5EMxFOixivQn9TIs5fDanjwZRbir%2BlqvyuYhW6eRTHFmI947Qqup0vJftCI4MlKQ%2FhHvYa5fh1N3UJGZxGgVK32m91Rk%2BD4Iyk7EsrmHSvuPO%2BVkJtORY284ATo9oIYG6C%2FC0oUVHraApfevbfgy6GcRyxdUfZrWGam84YmoXE84%2BImsC5NjrIZmzvAnuTipP4K4WAfdCmz%2BxmESfTmuUsGBqPoR0PDgWRdhN9Vy%2FAkGrCaPBsSypn%2FH8mzKQUnJvK95dTou%2F2jLBQQs91MaNHZsQV2pJQBwDX%2B8SvIDFlWg7s%2B0y%2FqoXtl94Odu%2Fz240JEITpTQsEWWVJUyULPmyVMJ%2BBncEGOqUBY6VY8wGfv8S%2FqPInP%2FDPUpsi6y6tYMXWspbDWY5XbBazUh7ZlRjNtVJrlOILwM7Hla4J5PTEl890V%2Fl6MJ8iyZazZAFyvI7LvZt0vvVbSj0%2BmtuOx8yNFDRRgBpbmFXshUTyyvqUsmVyO8K7r5tLKsoGPfEhoLy%2BsE71cD0rN12V2lyGv4QJ6n%2FqfZZ7PSQzF1CYUDGufUFXeAUcMAvqviIE8yLL&X-Amz-Signature=1e3c62a8ef6407a7ade317744204601517837f9808a586aa7c85715d091b224c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OLC5AY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGraK8QVFoUCKmCwkQCzFY%2B16boBDz98HDLSuVbw29ZkAiEA%2BILnvpf9MX4bxc0L%2BUTDc6O6s3OXRfWd6cEYRFy9Sbcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBqadj1mtRvSz8C45yrcA4ZB%2FMNZ8DRCVIhz97GA%2BTNnPiWNS4CRm%2BaombpLCNT5spcBg3J6%2Bf3t7gC9OArRWYnt9jaBibOGskDVzjLbv8bDOFIMAC4ZbqNHSz4B8lTxoo7v4IMOZ4IcKXOHQSos3HsegH8pCvLh2VNE4WI87XuA5mWX8yhibVxYfS8%2BQ%2F9RB9PZRSJWAV7SHUlK3vJLRCZBwjp062o2YMrGtqNx2%2FwgmFBTkmvuCDe%2FjRGQHV8Oe%2BvvAZUXMALu5x9%2BZ5ourEQxepP%2FbUACZAxCQApd%2F1E%2FT5%2B7QYqIfxbZuR5EMxFOixivQn9TIs5fDanjwZRbir%2BlqvyuYhW6eRTHFmI947Qqup0vJftCI4MlKQ%2FhHvYa5fh1N3UJGZxGgVK32m91Rk%2BD4Iyk7EsrmHSvuPO%2BVkJtORY284ATo9oIYG6C%2FC0oUVHraApfevbfgy6GcRyxdUfZrWGam84YmoXE84%2BImsC5NjrIZmzvAnuTipP4K4WAfdCmz%2BxmESfTmuUsGBqPoR0PDgWRdhN9Vy%2FAkGrCaPBsSypn%2FH8mzKQUnJvK95dTou%2F2jLBQQs91MaNHZsQV2pJQBwDX%2B8SvIDFlWg7s%2B0y%2FqoXtl94Odu%2Fz240JEITpTQsEWWVJUyULPmyVMJ%2BBncEGOqUBY6VY8wGfv8S%2FqPInP%2FDPUpsi6y6tYMXWspbDWY5XbBazUh7ZlRjNtVJrlOILwM7Hla4J5PTEl890V%2Fl6MJ8iyZazZAFyvI7LvZt0vvVbSj0%2BmtuOx8yNFDRRgBpbmFXshUTyyvqUsmVyO8K7r5tLKsoGPfEhoLy%2BsE71cD0rN12V2lyGv4QJ6n%2FqfZZ7PSQzF1CYUDGufUFXeAUcMAvqviIE8yLL&X-Amz-Signature=b29d35e27d20f559bf59b376b66b78f84afb7c90d7a340d74f33c014009325fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326KBFPY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTDuq9udi%2FZTNF7YlagKx%2BhxZ%2FGEyCOLl%2FGCo2CzRCgIhAPBI8J7aLIGQbWbuoQs6F%2FSjTOm0yEq1Fs44R4I%2Fi%2F68Kv8DCEcQABoMNjM3NDIzMTgzODA1IgyySMYQVbJ%2BygQI1ckq3ANtJT8J8IQ5P%2FNeao9D02D3knctXh68djKwlTolfoFaimHs1ruIR6%2BKQExXBaZewU3RjNkfME4%2FBt1Jb6PubRwXhvmu7McuEoVsEC8caL%2FVt3zIUbQko12ruSCV1smWs9XndYlrCHTwoqEaaoVoeepk0GvOI%2FeK6K5MCyJosm3Dq7oj5SpcjGmf9N0ZHyXec%2FO5EvrwYcZ28LE0OwvyHr1QEtA0H91EGqYofEMJXjQ%2B58vpENnj4faLsQCYCeKA03hNqIr%2F49CSHo1CgVQXGZoUC8%2BbKZO%2Fx7%2BrotWGFiyd09DZMncr4HYJRwspXdF2j8xR%2Biwv8ibcf3uLVsqvjhHlYIqY4utn3RXczQzAQzRnqgeLOT7H%2BlVwhuHXXBdrg6nw5FXxN6%2F7qJbcWYpepS8ILppM3EQI1MGj2eF8wA3OW5n6ogx4YfP9tPAuGBZL3%2FSuLkn7mRfhpYOKhG%2Fy%2B4X5N%2FeWGqLRV7VBsFKRwK5bgtjyBejJ01zhOaefj5BtCylhCPyY5skfSCAu4tJgdB3MIxci1uA%2FbrRo6JTC6Vov23sHL6Ls75RRXQQB%2F%2BcfgU65ayzyB9xW3B6MekCV%2BMpcvkANTVNrUoE9Mj0%2FH%2F6wtG%2BDcJYRiCC2XfpNbzD1gZ3BBjqkAQjDzwa%2Blw85L7mfxIxSCv5mq8LQxBj%2Fl6odjX8tyvxmS5poypOSESnKvkP1eTfHI5boI5zO6vNX8qN9Px2AKNOdBMjazUAQF4qmc6gr9T65Yb6R%2FRfDuIvrO4nTCGn2yL%2BWkfjYrrXXRp5dXHboZoFxPT3uSrdFSxOZxACN6HqiUBZApLiUG3nhmiMHFjCP3LF07%2F3Q6134WzZNGQ%2F93JevIq8h&X-Amz-Signature=4301c20cc3391a863d8db3a3f89874ed3bec29b16485e91e7b0e25278c2d7a25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI25UDAG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhzlUD4TxFY7GF2D2oobd2FYEaHc7JPBl8%2FGZvfBY%2FKAiEA8Eo4oqiMlcCsP8qiLXU5kKLkWagnyYYBs4cYWujn79gq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPrYKxSwB3z0GG20QCrcAyLa6L7fnPxhIa3CGNyoVUmsM85R9re6OQqkpKc%2B9htxuMW4OaEOurY4aV10Tka7EOSdNp%2FwZu%2FE8CbN3dwXTK7L38NUAVQKgEn22rE991abGujd3qfTlGz%2F0YhOoGuZjpamFjvkh2pvdF0yDyIEa8lAMOuSrP9UrcNjKIzhOhr%2F4AE4%2FRtvBQ6rUYPFpbphtsKy1V7q3ABSJk8Gz02z1eVjFx5CgohGxZrDv8n0jDU4fFLsB1QSFlI8LNnVqb4Fu%2BkBGsAYMA5z%2FaGBzFi9%2FQvibotLH62mK5TMDbvgNa%2B7oK1cFj%2FgQRBfB14mk3WCmbYQB7q9VXB0tt1m%2BRtTSTCONICesMzhFNuZr2vC99sZvdnMnAVi1VgB4RsCRxgDNwieyUzLYtB64fLeXA9xsWAQhptKZ%2BtGf5DQaAaAr1i%2FnnQKcEfzwSKv1rhq1L8ZwyphetIVfoRivDnD2624%2FTqGMoI8Wpej1BAZBI18hCXCXaJT9TEJdZ5EQ0ueGVZ8q24PrhJrdDxYlNzviEmQLW5jMZRHmBH3JAVAywsgFPwScgCJL62c%2BIw4nD3zso5BneKLeS%2FoZetbP2Wq3%2BbCB6Hb174kPU31yfJtt1BuHUptBZ1Bagx%2FHwT7%2FmOBMPWBncEGOqUBAG2KJoHkUb%2FF3mgBjVYfb%2BfZgibQGlazZAsd8L5A0AGWX%2FgLA14yFiMFl4MAx05OkRayask1xiLVPhOzOO1nvkB1oT86kgiuLkHwVmZY4nZIhza2cxOuFVBIzL%2BVWHbgv6jtRS5uGOflT4ZhN8m%2B6gvoKDAcYgNtTXQnNPSh7rBcQBLco2jL0QcvqIWoq%2BmtYsHh6wAFKw4l4dNMSzNuKNHBWnA%2B&X-Amz-Signature=81c78a261f7306e57684067121bb77b5a1784fc8add95d299180461aa2af339f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OLC5AY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGraK8QVFoUCKmCwkQCzFY%2B16boBDz98HDLSuVbw29ZkAiEA%2BILnvpf9MX4bxc0L%2BUTDc6O6s3OXRfWd6cEYRFy9Sbcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBqadj1mtRvSz8C45yrcA4ZB%2FMNZ8DRCVIhz97GA%2BTNnPiWNS4CRm%2BaombpLCNT5spcBg3J6%2Bf3t7gC9OArRWYnt9jaBibOGskDVzjLbv8bDOFIMAC4ZbqNHSz4B8lTxoo7v4IMOZ4IcKXOHQSos3HsegH8pCvLh2VNE4WI87XuA5mWX8yhibVxYfS8%2BQ%2F9RB9PZRSJWAV7SHUlK3vJLRCZBwjp062o2YMrGtqNx2%2FwgmFBTkmvuCDe%2FjRGQHV8Oe%2BvvAZUXMALu5x9%2BZ5ourEQxepP%2FbUACZAxCQApd%2F1E%2FT5%2B7QYqIfxbZuR5EMxFOixivQn9TIs5fDanjwZRbir%2BlqvyuYhW6eRTHFmI947Qqup0vJftCI4MlKQ%2FhHvYa5fh1N3UJGZxGgVK32m91Rk%2BD4Iyk7EsrmHSvuPO%2BVkJtORY284ATo9oIYG6C%2FC0oUVHraApfevbfgy6GcRyxdUfZrWGam84YmoXE84%2BImsC5NjrIZmzvAnuTipP4K4WAfdCmz%2BxmESfTmuUsGBqPoR0PDgWRdhN9Vy%2FAkGrCaPBsSypn%2FH8mzKQUnJvK95dTou%2F2jLBQQs91MaNHZsQV2pJQBwDX%2B8SvIDFlWg7s%2B0y%2FqoXtl94Odu%2Fz240JEITpTQsEWWVJUyULPmyVMJ%2BBncEGOqUBY6VY8wGfv8S%2FqPInP%2FDPUpsi6y6tYMXWspbDWY5XbBazUh7ZlRjNtVJrlOILwM7Hla4J5PTEl890V%2Fl6MJ8iyZazZAFyvI7LvZt0vvVbSj0%2BmtuOx8yNFDRRgBpbmFXshUTyyvqUsmVyO8K7r5tLKsoGPfEhoLy%2BsE71cD0rN12V2lyGv4QJ6n%2FqfZZ7PSQzF1CYUDGufUFXeAUcMAvqviIE8yLL&X-Amz-Signature=0d54667618179332eb1f3151e8197730c48d5388b2080542fe9a0be81a84fcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
