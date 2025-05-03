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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRLFHWY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD5Wr%2FNCbgY%2B0eErTyhJK2P56S7SbkVfsn9FkxYzdfUBwIgIPXYjagsSviVvYAkgZa34R0pSsqktnj54c8tObzv18MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlFEMupCP%2BRVRXHuCrcAzTLpX40Z7%2FXD1yJs4IbXQypJMMkhTHXb0pYMi1kB8rxYkdK21DyrOucqnxvGvC9ceRp3O5VaMbZNfdGVrjsTy%2ByiP%2FiedfozMVzek%2BrLwbxqjCNQs0ZOCQlGrqPvP30%2BCXR6OEpAzjE9dNyIzwWE7Ibunakf8HnO4gUth6jH%2F8uidglgE2fDeLcdkZ8l00pJsp2GOmq7zGEem5CduxGK3cGVjiOzGyh0vb6Hu860eEfaEEIdNd6z%2Bw%2BKKgIwmZLYhqQ30sjoL4pNJC%2BAuHy6MHbojkvSasPrSZvmxW0uSflqlu%2FMHllL%2ByiFqtwR9FzCmlAdLhdi4bqgqkX0lVBq3bvHY0BbxctrVkniXEui2fDYPYDqC4gFoC2LifyD1Lu9mPXOLhR%2BtiE%2BRAKxxxGpUXJXOa0ngaPNY8oYrjVpTIlnuMf%2FvyISVWDsxQoRkor9Mj1KHpdR%2FQwUDYZR2hlT%2B0mxfTo5184AICCnHeRc7EhzbcNm3YqIlu5hUuIElCXCMX2Ut9MyYEmxZwEVqvtuOwZJonxh60Wph%2B3%2FORw%2FSi2M9HPZUMiztHgoGjR9snHph3hbD4es9Nb4WOZ1ymcvFxoufXTW66mWMgehR1tG1Ib0C1ivNNAlI2dEfYNMNSG1sAGOqUBwJrJ2ueMPIDU%2FxUVkd3NvXebu3G%2F2T0eol9lQ%2FQ6xRPvcxB%2BowVA2oH3L%2FZtSsHGVxJ8s4q%2BFGPBNQHJW0IiEWYng2Fjv8ppMhb1f2lKCEDp5mqiRnWzOGRuv1nGosa4e%2By0JSmS9Tsu6hiRNkjkjjgxufUEtM9RRJucQvvXUwj0zkMrqQhRuAvdWDZWwbPVZDOWNfpO661kIOvpt5KEPRQDw9Hl&X-Amz-Signature=dfbbfd49973971a014eface341fbfb9f29a528e94960ec8326c9b4d4c56072e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRLFHWY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD5Wr%2FNCbgY%2B0eErTyhJK2P56S7SbkVfsn9FkxYzdfUBwIgIPXYjagsSviVvYAkgZa34R0pSsqktnj54c8tObzv18MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlFEMupCP%2BRVRXHuCrcAzTLpX40Z7%2FXD1yJs4IbXQypJMMkhTHXb0pYMi1kB8rxYkdK21DyrOucqnxvGvC9ceRp3O5VaMbZNfdGVrjsTy%2ByiP%2FiedfozMVzek%2BrLwbxqjCNQs0ZOCQlGrqPvP30%2BCXR6OEpAzjE9dNyIzwWE7Ibunakf8HnO4gUth6jH%2F8uidglgE2fDeLcdkZ8l00pJsp2GOmq7zGEem5CduxGK3cGVjiOzGyh0vb6Hu860eEfaEEIdNd6z%2Bw%2BKKgIwmZLYhqQ30sjoL4pNJC%2BAuHy6MHbojkvSasPrSZvmxW0uSflqlu%2FMHllL%2ByiFqtwR9FzCmlAdLhdi4bqgqkX0lVBq3bvHY0BbxctrVkniXEui2fDYPYDqC4gFoC2LifyD1Lu9mPXOLhR%2BtiE%2BRAKxxxGpUXJXOa0ngaPNY8oYrjVpTIlnuMf%2FvyISVWDsxQoRkor9Mj1KHpdR%2FQwUDYZR2hlT%2B0mxfTo5184AICCnHeRc7EhzbcNm3YqIlu5hUuIElCXCMX2Ut9MyYEmxZwEVqvtuOwZJonxh60Wph%2B3%2FORw%2FSi2M9HPZUMiztHgoGjR9snHph3hbD4es9Nb4WOZ1ymcvFxoufXTW66mWMgehR1tG1Ib0C1ivNNAlI2dEfYNMNSG1sAGOqUBwJrJ2ueMPIDU%2FxUVkd3NvXebu3G%2F2T0eol9lQ%2FQ6xRPvcxB%2BowVA2oH3L%2FZtSsHGVxJ8s4q%2BFGPBNQHJW0IiEWYng2Fjv8ppMhb1f2lKCEDp5mqiRnWzOGRuv1nGosa4e%2By0JSmS9Tsu6hiRNkjkjjgxufUEtM9RRJucQvvXUwj0zkMrqQhRuAvdWDZWwbPVZDOWNfpO661kIOvpt5KEPRQDw9Hl&X-Amz-Signature=ce460eae872caae1884735ce1064fd95cb77e2b4e2821335e4462ce2eff0b438&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRLFHWY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD5Wr%2FNCbgY%2B0eErTyhJK2P56S7SbkVfsn9FkxYzdfUBwIgIPXYjagsSviVvYAkgZa34R0pSsqktnj54c8tObzv18MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlFEMupCP%2BRVRXHuCrcAzTLpX40Z7%2FXD1yJs4IbXQypJMMkhTHXb0pYMi1kB8rxYkdK21DyrOucqnxvGvC9ceRp3O5VaMbZNfdGVrjsTy%2ByiP%2FiedfozMVzek%2BrLwbxqjCNQs0ZOCQlGrqPvP30%2BCXR6OEpAzjE9dNyIzwWE7Ibunakf8HnO4gUth6jH%2F8uidglgE2fDeLcdkZ8l00pJsp2GOmq7zGEem5CduxGK3cGVjiOzGyh0vb6Hu860eEfaEEIdNd6z%2Bw%2BKKgIwmZLYhqQ30sjoL4pNJC%2BAuHy6MHbojkvSasPrSZvmxW0uSflqlu%2FMHllL%2ByiFqtwR9FzCmlAdLhdi4bqgqkX0lVBq3bvHY0BbxctrVkniXEui2fDYPYDqC4gFoC2LifyD1Lu9mPXOLhR%2BtiE%2BRAKxxxGpUXJXOa0ngaPNY8oYrjVpTIlnuMf%2FvyISVWDsxQoRkor9Mj1KHpdR%2FQwUDYZR2hlT%2B0mxfTo5184AICCnHeRc7EhzbcNm3YqIlu5hUuIElCXCMX2Ut9MyYEmxZwEVqvtuOwZJonxh60Wph%2B3%2FORw%2FSi2M9HPZUMiztHgoGjR9snHph3hbD4es9Nb4WOZ1ymcvFxoufXTW66mWMgehR1tG1Ib0C1ivNNAlI2dEfYNMNSG1sAGOqUBwJrJ2ueMPIDU%2FxUVkd3NvXebu3G%2F2T0eol9lQ%2FQ6xRPvcxB%2BowVA2oH3L%2FZtSsHGVxJ8s4q%2BFGPBNQHJW0IiEWYng2Fjv8ppMhb1f2lKCEDp5mqiRnWzOGRuv1nGosa4e%2By0JSmS9Tsu6hiRNkjkjjgxufUEtM9RRJucQvvXUwj0zkMrqQhRuAvdWDZWwbPVZDOWNfpO661kIOvpt5KEPRQDw9Hl&X-Amz-Signature=164dec83b115dfcb5a752d13eff38a21a1d46d0a2eea80bf0b0668a6320cc822&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMQUZ4W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJFMEMCHxrdt3IbBM6%2BerPpNBjYDB%2Bvnqpbh8f0HM%2Fs7JnRTE4CIHQOAPk7gk6mqe5ITuZYbWwLHPzPVSKV%2FyzZMx7IVHHTKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAWlrVM2NK%2B%2Bv3Ll8q3AObj1aNZ%2Fj4%2F8CFy%2FSjWv6bWx7%2BBqFGvbHLpgfpE259zDCwMIec0fQJ1gskTFFgN%2F2mepH54WO3jNiubOkjbpVvcTCOel%2Bm8QWG2a8wTL2sS6Bkn1pxmeHyG2nnRtP3Rs2J88LDygY2kphB36WCWPvBuAYh%2BMYC%2FZiVpNb7S2Cd5zT8yCNZfOVGGTBysxrGrd4%2Fk6F0WjUXonCE30dTKbq3dyB0bMDUjV0AJjASpo8FC3T7WrATJcDs5%2FJldY6aVPSxcHyzlRHkSFdYkug0fekB6rzFchNdp3hM8mDleDoqjuaGxbvWg8%2BgqRI59mkwn3OiN6IJ1uVDYJh2dXDiIH5rjhdro6r9HJQx%2Bo2Ro4c4JMeD2nvtKXIXJXRmSuGFhuxxHxJj%2BoMpq1LeEddnLyq3YFlpzzfEkXRO9u8%2BMAc65sNKlYKr1DQ%2B0l8cBJgarGgDjIi31n3hJeke4raCoyKIjybBiCsv%2FGCGluaAAIWWkHRQre6vi%2BdK30ou0P7z1V7AjZIsVCrZQu71CveVQfhwEmIjx1Qywf%2F2HcGtf60699%2ByD%2BwKBUlF%2FZuNOKtv48pZGoyxtEoFj5RT2h1tEGYyYpBZUsU3Z9SPtBeTBTmqMuKAMKBRNj8gy0wTMzCKh9bABjqnAcZgbdvzgZVNnZHnVKO%2B2d8TJrzBFTjAzV5LRbAAvCFE2TLMgEuoTbU63JKsv2UhleiKa562wW3gJBcy8EutO%2FtgSCeBddjUKSq%2BvQtRswIsSdq5elve1i5qvjPyvcvOrpD6ZwelPGubuhZM6R80NnDb6j5WpQDeQ4FIQCdfbQ7ebbKohtbb1aIq8mV0dQaf6QTiKxaXbvfoIqHrrpAWHB97m1M2ujAS&X-Amz-Signature=012c2796db21c0266dcb9b2b160e7661d9e24a2e85b20511523b70ac4e464c73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YE2PXQU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBqHFj4SUCaXYEtfXInndgaFYOCt7z%2BeDRNyKm%2BA7DcgIhAKmkUz7mQUSTqlrwd3eowk86HIqqeitxMdP4MVmpe3v6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNVuTKssu0%2F%2FjEzUkq3AOIIRoEJFmWyRTxV8H8vC4etHtP%2BzDReN%2BYMv%2Bi3UONgATjsRCNKWmMd62ATy4sg9rGR44MTMdVRGH3XBKQDoc6rqvwXB3AIkm3kvcEHyqZDX5gGaj6AMS6IIVxlbMXYuZ%2Fl9p9OY9pIXMJ%2BDO%2Fiy4Q4l6DBlfU6VnzxJrUh4FQ9BiqKirlEHyJIiiHBYWqOEUGkpmpSfViPCf1cgG9Hvrdmr77mDeyc%2BX46aVit7Dj8AgjEXPsqe%2Bd8kHUoiKoQUHvLPnVNVhsOlNTdnRjE%2FgE9rNWbT%2F01J3KahzRt4uCkzL4npglebo80xPXW05OrqnBnCydTfLtuVawjaWwmwqYlAToI%2FYaH6UGWrWDVNfn%2B4868Dwtuc2sj%2FvRyO75JKA%2FlGhdzE35Mr9x3ZwTFfJg6P%2BcHy1T6LzMYh6CXY8YVuroHFjFAwonGRxY8dQyQb1AHnsRvz0P78tYDcCgGOy7FXOXcs62pI5oqaQS26e%2F3P9TIyr5bbZU4hZGDSSIgPul4iar1G%2FjB0Vuw9DnXImNH4UvJ3TB62le25mZ%2BHtJC4QVi2erMx%2BFTp96lkdifjpGHRJoqiVmt8W0g4VqgxIXJDfO3VT%2FBtLwDk7RDH3cMKq1j0CFLTpNgyQPnDDfhtbABjqkAQuKVEsQfgovMmiq8SeN3FRbL7Fwb%2BBkRZBf%2FvIX%2FUbcVj2ebASHRziQli8labKb5iPryUu3lMtRGk3T%2F1kwCpXq2By9ZkfrPP1Zcbqh7h5Zj7QfSJ78d9GRLbe%2BQ3W%2B9w3ugmRO9W2pdwoLQJKXiXw8pMdGnAk4T1WTfJZ%2BnAkqimFiztw%2FSqB30M3ER4KwT1dyVj1XNg6niWtP0zKDiSf6JAzE&X-Amz-Signature=12b1b807ec2569d15c65f0862112da958fce4c88117f3a400a3c82d355415f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRLFHWY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD5Wr%2FNCbgY%2B0eErTyhJK2P56S7SbkVfsn9FkxYzdfUBwIgIPXYjagsSviVvYAkgZa34R0pSsqktnj54c8tObzv18MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlFEMupCP%2BRVRXHuCrcAzTLpX40Z7%2FXD1yJs4IbXQypJMMkhTHXb0pYMi1kB8rxYkdK21DyrOucqnxvGvC9ceRp3O5VaMbZNfdGVrjsTy%2ByiP%2FiedfozMVzek%2BrLwbxqjCNQs0ZOCQlGrqPvP30%2BCXR6OEpAzjE9dNyIzwWE7Ibunakf8HnO4gUth6jH%2F8uidglgE2fDeLcdkZ8l00pJsp2GOmq7zGEem5CduxGK3cGVjiOzGyh0vb6Hu860eEfaEEIdNd6z%2Bw%2BKKgIwmZLYhqQ30sjoL4pNJC%2BAuHy6MHbojkvSasPrSZvmxW0uSflqlu%2FMHllL%2ByiFqtwR9FzCmlAdLhdi4bqgqkX0lVBq3bvHY0BbxctrVkniXEui2fDYPYDqC4gFoC2LifyD1Lu9mPXOLhR%2BtiE%2BRAKxxxGpUXJXOa0ngaPNY8oYrjVpTIlnuMf%2FvyISVWDsxQoRkor9Mj1KHpdR%2FQwUDYZR2hlT%2B0mxfTo5184AICCnHeRc7EhzbcNm3YqIlu5hUuIElCXCMX2Ut9MyYEmxZwEVqvtuOwZJonxh60Wph%2B3%2FORw%2FSi2M9HPZUMiztHgoGjR9snHph3hbD4es9Nb4WOZ1ymcvFxoufXTW66mWMgehR1tG1Ib0C1ivNNAlI2dEfYNMNSG1sAGOqUBwJrJ2ueMPIDU%2FxUVkd3NvXebu3G%2F2T0eol9lQ%2FQ6xRPvcxB%2BowVA2oH3L%2FZtSsHGVxJ8s4q%2BFGPBNQHJW0IiEWYng2Fjv8ppMhb1f2lKCEDp5mqiRnWzOGRuv1nGosa4e%2By0JSmS9Tsu6hiRNkjkjjgxufUEtM9RRJucQvvXUwj0zkMrqQhRuAvdWDZWwbPVZDOWNfpO661kIOvpt5KEPRQDw9Hl&X-Amz-Signature=44cf9cdcf5c754e2a65d67b0e772e34dedb37b880ec18923b68746990dee5ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
