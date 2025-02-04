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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3YSRMX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICHfS3NdYBPLLmH6i%2FgxsR4R2eXM8%2BoeYKgDW0Z7405QAiEA%2BPsiuyR%2B%2BAQhsUU4elXK3EZP7KAdt6t6H0xnxJfrsFIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNwqZBH0ZpAkho2F6yrcA1OvbKcxIG19SbA39j0RKq0cTHRZQJW%2BlprSXGWPf4v8YHwsL11o1KzsGMP5kI73kJFics2WunIa4h0wK0ZFwZZM5K4arLYh%2FVAvPLmOglq%2B%2F39tPQ2v0bTsSy0kqCSDRNF0xLPK1CFm%2ByR8fpgpd5XrHdnz%2B0M5t5IVfIL5P3421ZhTn5M7WWWxSympglpRMH3WH1dTChFZ1E8o4QZ0ZEls28APEXhUT5r2rqrV4pFbSLH4te3Ekzxnkt7mMySlTvIoxnhXF5Wygrqi2knEGJhLxOYxOdgL2eYVoAJplGgzDp%2FHtnVhVd0uXky0Uf0Fp%2FaK4Vbbw6EPG4rFzbW4QpgGwY0x9P0WMchayqCRMQpPDvLhEEN3cC0sTrwzB2Y1CAq1nYQR%2Fw01LzEOOyeHgMypeXQL%2BrKJWkLNsHPGPekjYvz6MZij%2B4uRAD9cMviZNkg7dGLqfc2rkdFFVyXp1HQQpe5ie%2Fj65uLyPSY9xA2Sv%2FEfFFL8cQs88lb8ITDq1MvV%2BwhVTtAeuADTxOKzDLICGMX2RKL4%2BxlJEZxuayfuOP%2BjvPpq0j%2ByQCi7FZnh%2FBf7314cq5353swyw%2B0%2FLZb3anI0%2FQfVleLy7Bec5p3SO9pcnBsr84QnEwFYMIaVhb0GOqUB%2BSHkdEOSZQX2UyZU5V%2BgVcklMH0aqNGQUN3JWuDzd7R8wb4GBahrS5cK7oNU12D7oqXzDuJ8AjZNlyw7qLF55BP1gL2Hjb4zwxt9j6VZxJ8tgCaGWPUVdyw948yBG8B2UZSQVgR8vutBOE1sD%2B%2FMQCOakRFzlCUGe7UCXzSUqvTadOUIwKfsr4cozCr3wmUCRv9QqNxhsBQAs4RbXvOKDBHCydA9&X-Amz-Signature=8dc1e4f43055e4caade42133f6f50c633dd121185f45efa20fa932a270159118&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3YSRMX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICHfS3NdYBPLLmH6i%2FgxsR4R2eXM8%2BoeYKgDW0Z7405QAiEA%2BPsiuyR%2B%2BAQhsUU4elXK3EZP7KAdt6t6H0xnxJfrsFIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNwqZBH0ZpAkho2F6yrcA1OvbKcxIG19SbA39j0RKq0cTHRZQJW%2BlprSXGWPf4v8YHwsL11o1KzsGMP5kI73kJFics2WunIa4h0wK0ZFwZZM5K4arLYh%2FVAvPLmOglq%2B%2F39tPQ2v0bTsSy0kqCSDRNF0xLPK1CFm%2ByR8fpgpd5XrHdnz%2B0M5t5IVfIL5P3421ZhTn5M7WWWxSympglpRMH3WH1dTChFZ1E8o4QZ0ZEls28APEXhUT5r2rqrV4pFbSLH4te3Ekzxnkt7mMySlTvIoxnhXF5Wygrqi2knEGJhLxOYxOdgL2eYVoAJplGgzDp%2FHtnVhVd0uXky0Uf0Fp%2FaK4Vbbw6EPG4rFzbW4QpgGwY0x9P0WMchayqCRMQpPDvLhEEN3cC0sTrwzB2Y1CAq1nYQR%2Fw01LzEOOyeHgMypeXQL%2BrKJWkLNsHPGPekjYvz6MZij%2B4uRAD9cMviZNkg7dGLqfc2rkdFFVyXp1HQQpe5ie%2Fj65uLyPSY9xA2Sv%2FEfFFL8cQs88lb8ITDq1MvV%2BwhVTtAeuADTxOKzDLICGMX2RKL4%2BxlJEZxuayfuOP%2BjvPpq0j%2ByQCi7FZnh%2FBf7314cq5353swyw%2B0%2FLZb3anI0%2FQfVleLy7Bec5p3SO9pcnBsr84QnEwFYMIaVhb0GOqUB%2BSHkdEOSZQX2UyZU5V%2BgVcklMH0aqNGQUN3JWuDzd7R8wb4GBahrS5cK7oNU12D7oqXzDuJ8AjZNlyw7qLF55BP1gL2Hjb4zwxt9j6VZxJ8tgCaGWPUVdyw948yBG8B2UZSQVgR8vutBOE1sD%2B%2FMQCOakRFzlCUGe7UCXzSUqvTadOUIwKfsr4cozCr3wmUCRv9QqNxhsBQAs4RbXvOKDBHCydA9&X-Amz-Signature=13ee5be004f2dd0fd9f2d816ec877a401c63a2d4a4f88066db8f7494c5608fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZULS7HM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDFULbBwmL5Qy6ouYKf6R2IsQWtyluAwZvhX7D9rZf1LgIhAISpvKb6Un6647aiP%2BAzSlVj7%2BYvmQsVwFTKovSS3m1wKv8DCCAQABoMNjM3NDIzMTgzODA1IgzP4EFvJI1b3Vrvwi4q3AMlXP5gfrgg2UzKJblq%2FY70sGMTRvCNbQl%2FZi5Lbr6tX7qMmnrAoJpFt%2FUENcDTXUwy1bJA%2FaZ0ELqACA45p46INVw%2FvwB0wQQyW36pn4pke4E5GaE59xXdq4WztGF93j1JBy3pzL2kpr%2FV6aQuAHu%2BpSZlQmelDeNvzFqjyId8ZmiaiVt%2BbZwgWbVguJ%2B9qurOZi%2B6q0QPM2dVvuu4kyEi0vKRgQ4uz6FNgqJZZUEKoF5bvjbUBz2nFq9PT0ct%2B%2FGScvWQmci0XsB7fH7%2FgJPuy1g6pir4Weura1NoCzQ3UInDjUZ9IsURrbj%2B6guawIbUn%2BHJyLllhFmnNX5kZqEloz9xRALIYVzVhAbmRKgEE8yjc7KDbh8Advqz7W2aYbezlkTXg%2FnBvboKKBDpQJc2dDhwcNiBy%2BbmgxcdljQSZTz%2FsRqixvGD6pU3KF62bVaIvc%2Fpe%2FTugL7p060XzgdWTb1MS6E7W%2BWacGGiozbt7igQ0tiXRR0%2BkT%2BU%2F%2FcIbslF2bcvRuikfDKH1L17xF%2Bjqit%2FwUV%2Fp2x4rC8QHEf52jPgs5v4zuKD%2FHyiz5OBDlx84mA1H%2FTkWz%2B4WE%2BzZlYoNiSftbJewSI7nk2GUGwmPl1QhXZSoVsJ9Bn6CTDclYW9BjqkAZVGvS75%2BrEo7toqOD7TXc66kk5oCpJdwGGdUyOsgJmRlRtsZvj0OxWYbQdZVkH%2Fln9Q9U5GnQmVAFC5rQbd48Jm15mjkGJ05kvN7PZm6Sdg%2BTjnyboAxKhrhlUsZr7OPJIZRE6ZGc0kjFAR6nikzEzjI6z5ST4Vi4d4Ru6H39hsUNGTB4R7EZLmpmYakHwysqFyVSCGNPPIbqeE3ruj7NK8%2BBIv&X-Amz-Signature=d62213bd582acc3dce822d44cfba180b447dcd31f46a203405c99af5de1cec83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAV3MPIC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkOdJYvahnTczG%2BeAqTGDayFgVO1cUNM1TGGle8MNAZAiB4Zj%2B5eNQYFx%2ByUuBDV5ziyMA4NKPP5Hm4Zy8ikFggrCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMkMraEgpElqIc08UfKtwDHKKNYoTINlN%2FvdKzqTDlrApmd6%2BmixKkWAq4E4L8vBTj%2Fn3VoFLw26aKtUPaU9hesXwYS%2FuqaVGMgr4i73v8K80z3MTeWnCURSqgJR5%2B6C0mIAYosTvUjjn6Vgqk4KwftqLfLT4X6NLURr5oaKQWozVYaEYAojSxQczBnwIc2FLmOsyVDZb79gjgGIj6NAj9mTc1wCfZk4mFM6jLOq9SIbTiP1eXCUDF9e2p0GogG9Qrqf5lxiyuiq%2BEPHgrCPzIZ%2BgcyOqRxGHvnT7XiPFu8ExotndXHF0nBIcypvdsQdUKZSAxBLcylb1YekV%2FS37GipQ4vi6MmRnkDKP5ET6CIntoZafGMLaDYA9lBcXPxa2OIs7EWY94ftK6M88Gx9xipPn8Rpye3O7%2BI1r4%2Bug2VGn76y7WPY2iEWHKap1zfoYziohVUF2UBcH1XzYhnsPmR0wxalmALGtMEX7JLKhj4UOuY7FHrrvrka54od5LLFIymKGTxkQcwm1hZoYIgcWy7TwVIOGyF4h9cXubH%2FY5Wjno%2FkwKPzdpbQJ4Xbu%2BcHnSNqG57psI8M57wdAvMUKmW91bAkrhXeJgNMKBX0D0MS9HKqMxXVkAf367d3qvrXLEdAMZYh7jsEVGK%2BMwm5WFvQY6pgHfc%2FIJ1UcpXuevseWuiNalC4TYxom9xUCkNw8btsJ9dd7zYYfIsY6qLpDX56csas403ho7x40VeAAxDkwiS6Ub3acB4sz%2FBD1jyHz1eGlWNhkALHgc6qaVANlKyIbVEmEiXs0ZaxXpBWXY46jb29U32qPc1MZ6Psz8zFs8kwImjpqalSwyzK2NV80SxegDZQfC9eov424AG81g%2FR2HTbgC0a1unA0p&X-Amz-Signature=e60fc08a13eb2880e897db12c1331e9fbbfa36ea879919fcda2aa2dd9012badb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3YSRMX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICHfS3NdYBPLLmH6i%2FgxsR4R2eXM8%2BoeYKgDW0Z7405QAiEA%2BPsiuyR%2B%2BAQhsUU4elXK3EZP7KAdt6t6H0xnxJfrsFIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNwqZBH0ZpAkho2F6yrcA1OvbKcxIG19SbA39j0RKq0cTHRZQJW%2BlprSXGWPf4v8YHwsL11o1KzsGMP5kI73kJFics2WunIa4h0wK0ZFwZZM5K4arLYh%2FVAvPLmOglq%2B%2F39tPQ2v0bTsSy0kqCSDRNF0xLPK1CFm%2ByR8fpgpd5XrHdnz%2B0M5t5IVfIL5P3421ZhTn5M7WWWxSympglpRMH3WH1dTChFZ1E8o4QZ0ZEls28APEXhUT5r2rqrV4pFbSLH4te3Ekzxnkt7mMySlTvIoxnhXF5Wygrqi2knEGJhLxOYxOdgL2eYVoAJplGgzDp%2FHtnVhVd0uXky0Uf0Fp%2FaK4Vbbw6EPG4rFzbW4QpgGwY0x9P0WMchayqCRMQpPDvLhEEN3cC0sTrwzB2Y1CAq1nYQR%2Fw01LzEOOyeHgMypeXQL%2BrKJWkLNsHPGPekjYvz6MZij%2B4uRAD9cMviZNkg7dGLqfc2rkdFFVyXp1HQQpe5ie%2Fj65uLyPSY9xA2Sv%2FEfFFL8cQs88lb8ITDq1MvV%2BwhVTtAeuADTxOKzDLICGMX2RKL4%2BxlJEZxuayfuOP%2BjvPpq0j%2ByQCi7FZnh%2FBf7314cq5353swyw%2B0%2FLZb3anI0%2FQfVleLy7Bec5p3SO9pcnBsr84QnEwFYMIaVhb0GOqUB%2BSHkdEOSZQX2UyZU5V%2BgVcklMH0aqNGQUN3JWuDzd7R8wb4GBahrS5cK7oNU12D7oqXzDuJ8AjZNlyw7qLF55BP1gL2Hjb4zwxt9j6VZxJ8tgCaGWPUVdyw948yBG8B2UZSQVgR8vutBOE1sD%2B%2FMQCOakRFzlCUGe7UCXzSUqvTadOUIwKfsr4cozCr3wmUCRv9QqNxhsBQAs4RbXvOKDBHCydA9&X-Amz-Signature=7c78ca4b7a6c06995fdb341248ad5d8dd238e8d2e7095cf238dcfd77c3e3b275&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
