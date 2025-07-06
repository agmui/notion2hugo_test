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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T3XK2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQChfmYaivr1kwSZgz56Ac9qU%2B8wMMha7LxEpNp0vQDtewIgMZo2dNAwlGK1xx3zHqk%2FqvVylIUUd35aY8ZP4PKhGDMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGEYWfywR1F9aHkYNSrcA40ly8rpyHanHZopuCWGaSIo7yr7jnoemcQ8P4r1jlhFQXO9Va8JYDJkTti5BYpg7gtTGzym2EURF2gPv7eEsjcZpQ9b%2FGP79%2FHsTYMMmWqc2JzFMimb81ffq5MnOFWTA3idoK415j0y4oRYIEm%2FndZ8yzA%2Bp5BquO0LBhAsWNyGKwwXjFQlfGSmRRcttzfNDk0NBJeAdqt4OtbTZag0z%2FE9vfPiS6nkqXGLfOMHFp78q30qpj6ryftfnBUdh96VnuuImbyqLbol7MzwGclzOpb1cLX0PnqZYrDVbG8XHGPotdw7pBqxKqMiYzmXeg%2Fj9OyfQqGj9dUIBhf2tezMfCxU2igDrpjFuG8928Lk09FzUW5KtI8NsbUBcdG3zezJmVJDV3NbIWLKgWTmQ0Vh1CdJjBwkIEDdXcwDhYDFh1ao5TYznO%2FYBK3p%2BhHXED37%2Fya9CXcx4qYkdQee%2FUyBT337urIZd3yiov3AsoRm2TIVuVc4psCssGdWctAy93NNcVGJ98D5peXwv0CGl58tfXN6Lsdjp8ogy5jiuc7U2MSlgqEylhZID56JjHkAZCEWkQzZ%2Fw1gHuZuftdHUmIY7t3A38hRYP1mNDJI7iisTBjovv01l9Ypu3rmI6SzMKjoqsMGOqUBOrCm0BiNwIg0bp3EuOdZUuNKgpZibh%2B8XLvFqfCQ%2FIlUThOMlBQ5KcMRY9xIMGnXc5yIXL%2Fuj0SVxFEqujRCI60bDaz42XvGAGb%2FTJAf1GeHMPg%2FV3GESveSNCW2qAZLpsMzsaaaKewSQ7spJUtkUGsJ875uFZclJzb%2FTtPfgmO8ylfS8iHQKvpvsdKruXz%2Bbg4S31i6ar4UXWLDouTLrpRQGNDT&X-Amz-Signature=31d186462c89862c1030712137f5c286b43398491127e18a27050a400a28ecbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T3XK2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQChfmYaivr1kwSZgz56Ac9qU%2B8wMMha7LxEpNp0vQDtewIgMZo2dNAwlGK1xx3zHqk%2FqvVylIUUd35aY8ZP4PKhGDMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGEYWfywR1F9aHkYNSrcA40ly8rpyHanHZopuCWGaSIo7yr7jnoemcQ8P4r1jlhFQXO9Va8JYDJkTti5BYpg7gtTGzym2EURF2gPv7eEsjcZpQ9b%2FGP79%2FHsTYMMmWqc2JzFMimb81ffq5MnOFWTA3idoK415j0y4oRYIEm%2FndZ8yzA%2Bp5BquO0LBhAsWNyGKwwXjFQlfGSmRRcttzfNDk0NBJeAdqt4OtbTZag0z%2FE9vfPiS6nkqXGLfOMHFp78q30qpj6ryftfnBUdh96VnuuImbyqLbol7MzwGclzOpb1cLX0PnqZYrDVbG8XHGPotdw7pBqxKqMiYzmXeg%2Fj9OyfQqGj9dUIBhf2tezMfCxU2igDrpjFuG8928Lk09FzUW5KtI8NsbUBcdG3zezJmVJDV3NbIWLKgWTmQ0Vh1CdJjBwkIEDdXcwDhYDFh1ao5TYznO%2FYBK3p%2BhHXED37%2Fya9CXcx4qYkdQee%2FUyBT337urIZd3yiov3AsoRm2TIVuVc4psCssGdWctAy93NNcVGJ98D5peXwv0CGl58tfXN6Lsdjp8ogy5jiuc7U2MSlgqEylhZID56JjHkAZCEWkQzZ%2Fw1gHuZuftdHUmIY7t3A38hRYP1mNDJI7iisTBjovv01l9Ypu3rmI6SzMKjoqsMGOqUBOrCm0BiNwIg0bp3EuOdZUuNKgpZibh%2B8XLvFqfCQ%2FIlUThOMlBQ5KcMRY9xIMGnXc5yIXL%2Fuj0SVxFEqujRCI60bDaz42XvGAGb%2FTJAf1GeHMPg%2FV3GESveSNCW2qAZLpsMzsaaaKewSQ7spJUtkUGsJ875uFZclJzb%2FTtPfgmO8ylfS8iHQKvpvsdKruXz%2Bbg4S31i6ar4UXWLDouTLrpRQGNDT&X-Amz-Signature=b29348313e8158900d199674bd73095008882dd7b852a524b795fc57cd5329fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T3XK2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQChfmYaivr1kwSZgz56Ac9qU%2B8wMMha7LxEpNp0vQDtewIgMZo2dNAwlGK1xx3zHqk%2FqvVylIUUd35aY8ZP4PKhGDMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGEYWfywR1F9aHkYNSrcA40ly8rpyHanHZopuCWGaSIo7yr7jnoemcQ8P4r1jlhFQXO9Va8JYDJkTti5BYpg7gtTGzym2EURF2gPv7eEsjcZpQ9b%2FGP79%2FHsTYMMmWqc2JzFMimb81ffq5MnOFWTA3idoK415j0y4oRYIEm%2FndZ8yzA%2Bp5BquO0LBhAsWNyGKwwXjFQlfGSmRRcttzfNDk0NBJeAdqt4OtbTZag0z%2FE9vfPiS6nkqXGLfOMHFp78q30qpj6ryftfnBUdh96VnuuImbyqLbol7MzwGclzOpb1cLX0PnqZYrDVbG8XHGPotdw7pBqxKqMiYzmXeg%2Fj9OyfQqGj9dUIBhf2tezMfCxU2igDrpjFuG8928Lk09FzUW5KtI8NsbUBcdG3zezJmVJDV3NbIWLKgWTmQ0Vh1CdJjBwkIEDdXcwDhYDFh1ao5TYznO%2FYBK3p%2BhHXED37%2Fya9CXcx4qYkdQee%2FUyBT337urIZd3yiov3AsoRm2TIVuVc4psCssGdWctAy93NNcVGJ98D5peXwv0CGl58tfXN6Lsdjp8ogy5jiuc7U2MSlgqEylhZID56JjHkAZCEWkQzZ%2Fw1gHuZuftdHUmIY7t3A38hRYP1mNDJI7iisTBjovv01l9Ypu3rmI6SzMKjoqsMGOqUBOrCm0BiNwIg0bp3EuOdZUuNKgpZibh%2B8XLvFqfCQ%2FIlUThOMlBQ5KcMRY9xIMGnXc5yIXL%2Fuj0SVxFEqujRCI60bDaz42XvGAGb%2FTJAf1GeHMPg%2FV3GESveSNCW2qAZLpsMzsaaaKewSQ7spJUtkUGsJ875uFZclJzb%2FTtPfgmO8ylfS8iHQKvpvsdKruXz%2Bbg4S31i6ar4UXWLDouTLrpRQGNDT&X-Amz-Signature=889edd87856af52b0687a2e2ac922f118c6c79fca3dd2753d8aac81092ae8c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGYE6SA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFNFZS0XEOqFRPdVIs1HCFe3sEeWBmRHRc%2B5OhXR6QLjAiBw7kUV9TE07ulIx%2BBHBE1FJK7%2B%2F1Irn0Swn3LZqdDE3Cr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMd24l2bS0HaoRcjBDKtwDRCi2Y2mNYKwTxoEgF8Ajnz8TK1nCrm6mACL7FW9brRvFSbN%2F6xM5IkC%2BNVG6rOhyNTcgg2O6XY7skgMP8EMk7cAPCneiiMhQRHZMEMYtGP%2FPAAKZzOET4jjkgtiGcxDGzhsFYOWLALfotXDYC5LB4Spos74bvOOi1nchqrhLGCgImlahyza6vvKhY4RoANXbHcV72p9PkzWyC0TMR2Aa6Nf2luImG1M1Zx8OezFlsQtVUAjYJMugDPIuQf7thYNvzsmhORQZHT94xmn8cvqGUuLX9ECqji0OegM3gKUrVB7Ifi52E6%2F30rwA7F4NpMrBdALFU83wWzrx82lWBNJY3TshZHhPtpPL1bc2ZfRuhxiEV47EHZCDHPhApHgRlHdJFMQak5rKqONobmAivBNWfwUgBETo1HjyxWKifJIuU8PIFudLjKZakFfl7A0kKmUSMdlnJlsHUJXiJabkX5mBURzTUhKflQg%2B0HGAZ%2F5WwUArxQdDopth9fWaxWT789EV5Q2N8i6aKRSKJr5qa%2FpzeSVDksVroI2dlyC3djS2fQNMheAhk1GmtVt5BqeAe%2FIrSOSvl%2B3d4UjJDVc4Nn73e3vHvYPbWd9qppP5a9LNai7f%2BB7TnHejGETgNBsw3dqpwwY6pgHlKakVrmyBe%2Buk3yUAszXaNMyadi54Jw4WF09yRR0yQu%2BupMYru0MVKpK%2B3ltPrtDs4%2BJn79QUuMOJbHkvZgJgEL1PbRm0VBp33VFUI6zP4e%2B%2F7WPC2n%2Byyic%2FapbRXup5JSa5RrgQu3OAGSoaLYVuaqT8UHxDbnKmgK2MLyKHwvDYgkhjCkd%2BMoT9CTWr09URMimwSBzcvXKZD0ZD0cJ8%2FfX4%2B6j2&X-Amz-Signature=945bf3b02e24c147a66be17960b1ba74b05f3d91547e9c5e8638401ef4beacfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKADNIMM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCXeOTgwOdHdpS0n5wsyBJB72V4Y2PGzW%2BPcOz5VaOuogIgYTgbgqWMcQLBiu%2B7cNUwFZNrFi3PAAuoy4vMoX67Hq0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFk8PrsrJrMGhFxkWSrcAwXAeemrw%2FcBr%2Fdf5GscNNo3YVRulgOX0flaj2duWAy1wLyniCO0XxuRvE6Qszkd6Y0y0ghLzczGBklz%2FxMKj54Ml5C%2FPJGdCVGKCt%2FPtdmYKxykH%2B1JzZMJ5G8kwvSRvuAZtZG9Aa9BemarlqMwKi5dAweef56ft48KYTMLNMRm%2FXcM6kcGFLz4UrjWJhHZhiNJYL8wkyMOkx%2FXpt5HO6%2BIsfrzDLcoxjkjxDi8f2oxffNlDa2mlRBYRn3KVgHp7xVFAOrMt6iNiohqrUIu1oazFe58ODs4dVYbHQ5Thbp3%2BaQifI3QeiHpU%2BqPB9Q9PwgKa2Ki8vNWCe0nnjYLfnKogj6om%2B%2B4TJn%2BqdIR58OjZ5mVz5TKCgkkMQEqc551pJNlAPm0FG7xItu5oYInByVtal5TnQrVP9sQOZTmrjR1vuzWx4Cd3MQJzMY56rh2NijuPNbCWPDReTcHnKTsWkMaNWVFAfHEn8ofs2L%2FE%2B1AUOnUouweBBpHL0dAOQjKnY%2FE1D3uUJUNqI81bSC%2BEz5IOY%2FhoUWGq6GngktL0hm2qGIX8z4%2FHT2Exhbrmtqm5dKsgICRHDSFZQSPeBZRichyoujrvO4milA5p7YOVOBHeGjRJDxKSiIfB8hqMKHhqsMGOqUBxlr50vKNJ8jelUTZmHP9bcnPUjUMVzwZp1rSxQBmP0Tojz%2FQC0iYQCZoVLSkEB8Ql7IVvUxabUde5bKqthWp157VwSG%2FsBltpdX9bufkMhkNkl3o0XD%2BF1E%2B3RiuDL4gVED%2BlqDwtfK3j38DA7HgtqDUNl%2Bn3L9xWqqTFdUKJwmUILxoZNqKTwKlm2iYKmmuMuhDLg%2BgLAlCct9%2BKuEILlqRdrZf&X-Amz-Signature=633b2b857eb55d41ce1f4b406f9ed10280930072cbfe3f8babc538ca41c28f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T3XK2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQChfmYaivr1kwSZgz56Ac9qU%2B8wMMha7LxEpNp0vQDtewIgMZo2dNAwlGK1xx3zHqk%2FqvVylIUUd35aY8ZP4PKhGDMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGEYWfywR1F9aHkYNSrcA40ly8rpyHanHZopuCWGaSIo7yr7jnoemcQ8P4r1jlhFQXO9Va8JYDJkTti5BYpg7gtTGzym2EURF2gPv7eEsjcZpQ9b%2FGP79%2FHsTYMMmWqc2JzFMimb81ffq5MnOFWTA3idoK415j0y4oRYIEm%2FndZ8yzA%2Bp5BquO0LBhAsWNyGKwwXjFQlfGSmRRcttzfNDk0NBJeAdqt4OtbTZag0z%2FE9vfPiS6nkqXGLfOMHFp78q30qpj6ryftfnBUdh96VnuuImbyqLbol7MzwGclzOpb1cLX0PnqZYrDVbG8XHGPotdw7pBqxKqMiYzmXeg%2Fj9OyfQqGj9dUIBhf2tezMfCxU2igDrpjFuG8928Lk09FzUW5KtI8NsbUBcdG3zezJmVJDV3NbIWLKgWTmQ0Vh1CdJjBwkIEDdXcwDhYDFh1ao5TYznO%2FYBK3p%2BhHXED37%2Fya9CXcx4qYkdQee%2FUyBT337urIZd3yiov3AsoRm2TIVuVc4psCssGdWctAy93NNcVGJ98D5peXwv0CGl58tfXN6Lsdjp8ogy5jiuc7U2MSlgqEylhZID56JjHkAZCEWkQzZ%2Fw1gHuZuftdHUmIY7t3A38hRYP1mNDJI7iisTBjovv01l9Ypu3rmI6SzMKjoqsMGOqUBOrCm0BiNwIg0bp3EuOdZUuNKgpZibh%2B8XLvFqfCQ%2FIlUThOMlBQ5KcMRY9xIMGnXc5yIXL%2Fuj0SVxFEqujRCI60bDaz42XvGAGb%2FTJAf1GeHMPg%2FV3GESveSNCW2qAZLpsMzsaaaKewSQ7spJUtkUGsJ875uFZclJzb%2FTtPfgmO8ylfS8iHQKvpvsdKruXz%2Bbg4S31i6ar4UXWLDouTLrpRQGNDT&X-Amz-Signature=2e103a30586315552fb9fcc736d093b92f549f54a6042bd4966528ff8d971664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
