---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWG2UZI%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFoqEJM4%2BQ%2FB5DWbomgD8atEPfD8igJMqJ5AuiUw%2BeX7AiEApzNRzph6E8n9kWNoaBuAqy0papBMllf8QcOlIXNwYeMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwIOB2yKo35yANSsSrcA4bf66s83ZjHhcJhJ2ywxzdT8lorTA8pxkwo%2FaNfDrYD4Sp117utissw5%2BY35C24MyaXZE0IZwSzIhuvi841x8DqcbuKQ06ABnPs0b0oJk56C19l2oG2HamcOYh7KqxKemXkLP%2F5rgtuu7pmJ9R4%2BRZhKhBluJGgdBZXtMJ0K6isTOcpgrSxOgoMHVQOcI7lVC4m0N7DXls5nmjfVUnpXdbE%2FlY%2FmaP1mxc9VWc9LsLuMrbMscnmPR%2Bkm%2BtLk6pRxXT%2Fgqvu8ynk5KNbl1OVl7LzZc6TuiKNRbc6EJ4%2B2YjDxsi%2B78EDH1d1tIGtO2xe2Ah05EqMkhYyqyIeGzIyrDGwZ9528IjFksvENAG8Mlixc5NlQuTVZ3Vbftw2H3k7f8ZDv8igDw8fhFCNzK9aa7M8LwUokL92B94j4ulNNpwPQTKMmZmkwlETRI2q4biU%2BjIUQ2piOA5A8igDocvFUH6YH78BTrlo%2BgCmCjPbvArzOfwoZPjmqqH572s8UpuBRst1jHA%2Fssr%2FB3y7J4hBvWnc24G%2BN%2BxLXmRc8QUZFInVtcdTwTDn6stJJcvpCBlYV4ZCh%2B%2FVe17hY9hd%2FyVlgKhsCae70xj1aWvWIqVz%2FUCojnjggLSxa2ZDPAB3MLmW18oGOqUBuGpY3I%2FwctPpgXuTdUAVjoM8zvt3ych7Gz0On9VfIVNp6aga6%2B7du%2FJ6yrgOiB8G1EtwiqnkLxWCJCUyeLCYgK%2FZGKthODldv5W3Vpo9QKw6ug9TuPgMCLUHwhJLuj6JwU%2FvgmKdx1%2FvPudfGH%2FD%2FWiilbXEfue8ggbvnRCGLuWBo%2FcvjlGTB4bTCPdgo%2BSb3z4hDpDEqk2z6dxVuOslR3Q5SnMu&X-Amz-Signature=5a6e3e53c584fd3eb379bf23268d8f4726583618c5fbbc8e99aa16f6ad24d7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWG2UZI%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFoqEJM4%2BQ%2FB5DWbomgD8atEPfD8igJMqJ5AuiUw%2BeX7AiEApzNRzph6E8n9kWNoaBuAqy0papBMllf8QcOlIXNwYeMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwIOB2yKo35yANSsSrcA4bf66s83ZjHhcJhJ2ywxzdT8lorTA8pxkwo%2FaNfDrYD4Sp117utissw5%2BY35C24MyaXZE0IZwSzIhuvi841x8DqcbuKQ06ABnPs0b0oJk56C19l2oG2HamcOYh7KqxKemXkLP%2F5rgtuu7pmJ9R4%2BRZhKhBluJGgdBZXtMJ0K6isTOcpgrSxOgoMHVQOcI7lVC4m0N7DXls5nmjfVUnpXdbE%2FlY%2FmaP1mxc9VWc9LsLuMrbMscnmPR%2Bkm%2BtLk6pRxXT%2Fgqvu8ynk5KNbl1OVl7LzZc6TuiKNRbc6EJ4%2B2YjDxsi%2B78EDH1d1tIGtO2xe2Ah05EqMkhYyqyIeGzIyrDGwZ9528IjFksvENAG8Mlixc5NlQuTVZ3Vbftw2H3k7f8ZDv8igDw8fhFCNzK9aa7M8LwUokL92B94j4ulNNpwPQTKMmZmkwlETRI2q4biU%2BjIUQ2piOA5A8igDocvFUH6YH78BTrlo%2BgCmCjPbvArzOfwoZPjmqqH572s8UpuBRst1jHA%2Fssr%2FB3y7J4hBvWnc24G%2BN%2BxLXmRc8QUZFInVtcdTwTDn6stJJcvpCBlYV4ZCh%2B%2FVe17hY9hd%2FyVlgKhsCae70xj1aWvWIqVz%2FUCojnjggLSxa2ZDPAB3MLmW18oGOqUBuGpY3I%2FwctPpgXuTdUAVjoM8zvt3ych7Gz0On9VfIVNp6aga6%2B7du%2FJ6yrgOiB8G1EtwiqnkLxWCJCUyeLCYgK%2FZGKthODldv5W3Vpo9QKw6ug9TuPgMCLUHwhJLuj6JwU%2FvgmKdx1%2FvPudfGH%2FD%2FWiilbXEfue8ggbvnRCGLuWBo%2FcvjlGTB4bTCPdgo%2BSb3z4hDpDEqk2z6dxVuOslR3Q5SnMu&X-Amz-Signature=073179394edce3f6627c14ca5a49b70ba737057a4cda360ed80923473aa39dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWG2UZI%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFoqEJM4%2BQ%2FB5DWbomgD8atEPfD8igJMqJ5AuiUw%2BeX7AiEApzNRzph6E8n9kWNoaBuAqy0papBMllf8QcOlIXNwYeMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwIOB2yKo35yANSsSrcA4bf66s83ZjHhcJhJ2ywxzdT8lorTA8pxkwo%2FaNfDrYD4Sp117utissw5%2BY35C24MyaXZE0IZwSzIhuvi841x8DqcbuKQ06ABnPs0b0oJk56C19l2oG2HamcOYh7KqxKemXkLP%2F5rgtuu7pmJ9R4%2BRZhKhBluJGgdBZXtMJ0K6isTOcpgrSxOgoMHVQOcI7lVC4m0N7DXls5nmjfVUnpXdbE%2FlY%2FmaP1mxc9VWc9LsLuMrbMscnmPR%2Bkm%2BtLk6pRxXT%2Fgqvu8ynk5KNbl1OVl7LzZc6TuiKNRbc6EJ4%2B2YjDxsi%2B78EDH1d1tIGtO2xe2Ah05EqMkhYyqyIeGzIyrDGwZ9528IjFksvENAG8Mlixc5NlQuTVZ3Vbftw2H3k7f8ZDv8igDw8fhFCNzK9aa7M8LwUokL92B94j4ulNNpwPQTKMmZmkwlETRI2q4biU%2BjIUQ2piOA5A8igDocvFUH6YH78BTrlo%2BgCmCjPbvArzOfwoZPjmqqH572s8UpuBRst1jHA%2Fssr%2FB3y7J4hBvWnc24G%2BN%2BxLXmRc8QUZFInVtcdTwTDn6stJJcvpCBlYV4ZCh%2B%2FVe17hY9hd%2FyVlgKhsCae70xj1aWvWIqVz%2FUCojnjggLSxa2ZDPAB3MLmW18oGOqUBuGpY3I%2FwctPpgXuTdUAVjoM8zvt3ych7Gz0On9VfIVNp6aga6%2B7du%2FJ6yrgOiB8G1EtwiqnkLxWCJCUyeLCYgK%2FZGKthODldv5W3Vpo9QKw6ug9TuPgMCLUHwhJLuj6JwU%2FvgmKdx1%2FvPudfGH%2FD%2FWiilbXEfue8ggbvnRCGLuWBo%2FcvjlGTB4bTCPdgo%2BSb3z4hDpDEqk2z6dxVuOslR3Q5SnMu&X-Amz-Signature=3340aa36bbbb39479dd70b95888b81f105aec178e2b23594e0de15bb2a3d50cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ3OGEX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FRiaGOooRuDXW8iGb%2FoeJzau4B6v2zXMHoB3shb3%2FvQIhAMUUELWx70Qf72DYY5LgKRrKkA2lRrAWybJoD22WlRQvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7nj2DZzAyIUrvT%2BQq3APuoQPCNGrjS5dBKtijqxDGXoizYhuWxIwxq2NSyyOqmFCvqf%2BPkup5Ndyml1vZGua%2FGTFhuhVWktJ21n50GaJ9tmKlFZ3ygt52ZSzFaXs%2FIoWSchOKPWyaFeOoMYBaXJIxEq6H7OlxEEa8j4LqXWvCREPpA%2BM4UJBEQltOkyn3XGKyovuDIaVIgjOcQdd1BmKfTnncKT1LDcAcW%2FOCDOeexEa4Opf%2BDIT%2F0V3E4Uv3bdigcIqJsGgFnTqV36kNund7I%2FEQvERyBTEmD%2FSCF%2BBwVEudDjwSeD5ADxT9Mjjf9T4gqDnyRWBqTKLujXtQHKRYt7ANYAAmqyDrbq%2BmfhkofpHSyYRL47Fqil0QHa1sCqYl%2F6Iaouv6Ypp%2FAHr%2BNmjKHy28Jr%2BA2RkZhuaf%2B9JroDyB%2Fa4WIiSrWbEGIOtepsjSiMq91ZyIPJ6GDJRt0JdqMfcxrH%2BJvBFEwaGRdLsxZ753xLpuo%2FEvUNeXfpnNQVx33dnjQvJi0YLa757vKOhaoAovQ7lxThLn%2Fh4yM9BKEskyLP2e6yPDgLZkke8nZm9%2FzlEb4z%2FM3q865D%2BfUXx4rq36JsqmwgOof3iPM5qwNr28DwQzUzhj7Q%2FRSVTV06Hl68c%2BpbXPtJQ7UzC5ltfKBjqkAaOatijFWPuf%2F1E46pUXW83AW%2Bydl5bFEZX6FvdG1mAmwC5aWqJ4lYFN7wcMx7qC0lNA%2B771nIrbA6dWGN85v%2FM%2B4%2F0n1KvQaynTTOdDHj%2BXHWq2688d0J1I%2FJ4uaII7jheNUBzYVCplHYbT0Ymv7SrYyb1pyzZa513iEadAetKLAhkMeC%2BGT7EJ7RfWjXhiZYIfmZaZtGY1%2FPS8ZFC6z83%2BDxU1&X-Amz-Signature=430f41409ed892cbad7b619edbdcc0bcc3ebcb7e2c492cd0c56f61f4d1e6a59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQFCQOZ%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAblr62D5ZEObh1gjbzeMNPGFDBJcocRbGvE8ytjCFaKAiEA5JDJjc0o8gEmlu4UaDYewf8tWyu79NSM6Y%2BLvEIEptkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnFIdKTgXNkpX35SSrcA1uHrVnn9CXWNifNFjvr281PUSwtkvIFjtPpglcq0GOWxC7S0Vz1J9%2BGY2fFJhw%2FRDmo%2BGookD0p2eQZCTx2%2FyvipHB1V0ilOGqSH2CEcCPTSvBf1qadULhc8vR%2F5zLPJpRE0%2BPo%2BVrquaBLYv5L8hb53TvULIkq2BtEx1rXeIy7FCA7EusCaaZCJE8I%2FEPl2I76r99gm0E8gKxceZStSp5zGsux2qJhm7Bbyb8AwnZQzLnWfsAH%2BAQK5EN%2BPjBcLlWBF1AOX6ACaIzSuKZ5fMg6iVmVZrTd9hu9W3hmLIvQpnP5saCKyI7A7YDBkgaNB9CYv1uB2cOqSiqoVnsUBGLwYDuz7%2B%2F8oKayFejL%2B1nMqsuI3qIV%2Frg1fvJCQOE%2FDK%2FSCwq2Bf6xVVJAN%2FgRRaEHPVHMiRseyOXqzGgzsqjqLmY%2FYhpFR2TDmmuAkKDJGtQsZLjLE27p9yZEZF%2F0UVawqivP%2FiOH8%2BNlDxXkn0OAslH1mhRhNH%2Bw1uSF23djyrl8W7KieRlUFWjGojPPnlZuVWpZW2rXU6tnTdMIZUgFWSDPqlLBX5TT%2BD1UAO0BmI1twHJF9N4OLmfR7hoHSBm8vPvl3d9DioYQ%2FeeV1TVasCB6YatSlT5BPGHTMOWW18oGOqUBVTuVqLKIEMnU3RD%2Bkp7ycobOwCWxSNV%2FmWR0ci5Yk2toYgao%2F2PpUz0mKGxs1m2Vzmmrp2HnD0XbXYeyeal%2B8tX1fs5jCdA%2FbAjhx7Eoicg6AefNASo%2FwysTxHng66VFkFbMVal8JbrrmCgMHzNi5ZwXFZGIteSGiAn3iNsQRC%2Bp3Xpum9BE6mdpZLC1xyW7bc3Uyw%2BxaCvqFJcGYgj1tcJuj8KK&X-Amz-Signature=92a25672152afb0e8f3495e56db903efa85cefb66b48b5652bf5e2e0fb597b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWG2UZI%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFoqEJM4%2BQ%2FB5DWbomgD8atEPfD8igJMqJ5AuiUw%2BeX7AiEApzNRzph6E8n9kWNoaBuAqy0papBMllf8QcOlIXNwYeMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwIOB2yKo35yANSsSrcA4bf66s83ZjHhcJhJ2ywxzdT8lorTA8pxkwo%2FaNfDrYD4Sp117utissw5%2BY35C24MyaXZE0IZwSzIhuvi841x8DqcbuKQ06ABnPs0b0oJk56C19l2oG2HamcOYh7KqxKemXkLP%2F5rgtuu7pmJ9R4%2BRZhKhBluJGgdBZXtMJ0K6isTOcpgrSxOgoMHVQOcI7lVC4m0N7DXls5nmjfVUnpXdbE%2FlY%2FmaP1mxc9VWc9LsLuMrbMscnmPR%2Bkm%2BtLk6pRxXT%2Fgqvu8ynk5KNbl1OVl7LzZc6TuiKNRbc6EJ4%2B2YjDxsi%2B78EDH1d1tIGtO2xe2Ah05EqMkhYyqyIeGzIyrDGwZ9528IjFksvENAG8Mlixc5NlQuTVZ3Vbftw2H3k7f8ZDv8igDw8fhFCNzK9aa7M8LwUokL92B94j4ulNNpwPQTKMmZmkwlETRI2q4biU%2BjIUQ2piOA5A8igDocvFUH6YH78BTrlo%2BgCmCjPbvArzOfwoZPjmqqH572s8UpuBRst1jHA%2Fssr%2FB3y7J4hBvWnc24G%2BN%2BxLXmRc8QUZFInVtcdTwTDn6stJJcvpCBlYV4ZCh%2B%2FVe17hY9hd%2FyVlgKhsCae70xj1aWvWIqVz%2FUCojnjggLSxa2ZDPAB3MLmW18oGOqUBuGpY3I%2FwctPpgXuTdUAVjoM8zvt3ych7Gz0On9VfIVNp6aga6%2B7du%2FJ6yrgOiB8G1EtwiqnkLxWCJCUyeLCYgK%2FZGKthODldv5W3Vpo9QKw6ug9TuPgMCLUHwhJLuj6JwU%2FvgmKdx1%2FvPudfGH%2FD%2FWiilbXEfue8ggbvnRCGLuWBo%2FcvjlGTB4bTCPdgo%2BSb3z4hDpDEqk2z6dxVuOslR3Q5SnMu&X-Amz-Signature=f7a5e65ffda571b7f8448255a4c106043d35d7d32ee867511595053221582314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
