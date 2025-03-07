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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JI6UGXU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC%2FjXzNzxGgrZOBGathl38w5rePK9IPZTT2OWuASjRFswIhAMVxylm0M4%2BuVplmtlwFVZokQXVqwvi2bEr5FwJzWCzZKv8DCE0QABoMNjM3NDIzMTgzODA1IgwrQvP6DgI8PLzt3kIq3APcpP2AjKh%2BRnHpQ2dmlBjS9HIroNiruiJp1y%2B6sz7vGVCMU%2ByhME5jQ6LA2qmHhcz3RRo0sbgl%2F%2BM55Bfu%2FkakyD5FEmZXmhy4SbxR%2FJbVfIQ%2BpbMgvQoCKpKSRE%2Bo8SiS6vEPuPaf3Kx3mQpzFeO9Dpl%2FrAgBrte1YPf5pMIWgZqxCdaV5drYebQXYsZNnB97UARSmpP5b4lGAGp%2FgQfs4UPhn3jxExSqO9lFylLyal74FDWJXq9jrGJkLXEVqsikRGG0bMgG%2F8iyEF3f09TLjjddb3uvuO5zKffgH1mydrYT0lKvLMK%2Bv9tkaCAe6cvFFcD3k863amUpH71oP4BR9AtZAtFmW8OJyxsjasfUBWrzp%2Fg7Kg0Q2CrpWBTaLTyxcQClAQjvQS1OoDSYL5IeQY9aIf4YgwLin2dqUSfYsC77YPDkqwe0Iq5EJl6utfk6OCORL%2BGw1OCduw6jAkXZ5hXdfqhmdT0e9e6kikczv%2FkWG1inuqf%2FkeR5Sp%2BkxbTL0aRG05fIFs%2BEoWnLJUNJSISP70tvCly8zJLZqwdfcH4fhkTnTwZV6xRNakZprHSNKDI0vfEwPkZRUrvQRDS4o8kbNvlYEQJPhc2QzrkCLJIebceSNtrlJXJ5SjCWoK2%2BBjqkAa9sQcRusZOqI5Sun9U4r68XlRvyc1M%2FHJoYY0v88m8bbkSQs0KcoJNWTm6rTg6N26htvxq%2FCdspxnYxNma5WgkgtZ2rJCiXk2o0WIImRsBPg0Kn%2BC25Jtn2gWIU%2BmA2w6OOglk1A%2FIG53oUTgaI%2BjI8vKPhZ%2F%2BAKJWK1rmLqDokeh5p2ajlmXZk%2BIy%2FtxUdtWCtJCIX0L6y8Ek%2B9522jj3MV3am&X-Amz-Signature=810a7b1401788fc131baf45a838e51aed58266a6255a2fd3715f3e742782f55e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JI6UGXU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC%2FjXzNzxGgrZOBGathl38w5rePK9IPZTT2OWuASjRFswIhAMVxylm0M4%2BuVplmtlwFVZokQXVqwvi2bEr5FwJzWCzZKv8DCE0QABoMNjM3NDIzMTgzODA1IgwrQvP6DgI8PLzt3kIq3APcpP2AjKh%2BRnHpQ2dmlBjS9HIroNiruiJp1y%2B6sz7vGVCMU%2ByhME5jQ6LA2qmHhcz3RRo0sbgl%2F%2BM55Bfu%2FkakyD5FEmZXmhy4SbxR%2FJbVfIQ%2BpbMgvQoCKpKSRE%2Bo8SiS6vEPuPaf3Kx3mQpzFeO9Dpl%2FrAgBrte1YPf5pMIWgZqxCdaV5drYebQXYsZNnB97UARSmpP5b4lGAGp%2FgQfs4UPhn3jxExSqO9lFylLyal74FDWJXq9jrGJkLXEVqsikRGG0bMgG%2F8iyEF3f09TLjjddb3uvuO5zKffgH1mydrYT0lKvLMK%2Bv9tkaCAe6cvFFcD3k863amUpH71oP4BR9AtZAtFmW8OJyxsjasfUBWrzp%2Fg7Kg0Q2CrpWBTaLTyxcQClAQjvQS1OoDSYL5IeQY9aIf4YgwLin2dqUSfYsC77YPDkqwe0Iq5EJl6utfk6OCORL%2BGw1OCduw6jAkXZ5hXdfqhmdT0e9e6kikczv%2FkWG1inuqf%2FkeR5Sp%2BkxbTL0aRG05fIFs%2BEoWnLJUNJSISP70tvCly8zJLZqwdfcH4fhkTnTwZV6xRNakZprHSNKDI0vfEwPkZRUrvQRDS4o8kbNvlYEQJPhc2QzrkCLJIebceSNtrlJXJ5SjCWoK2%2BBjqkAa9sQcRusZOqI5Sun9U4r68XlRvyc1M%2FHJoYY0v88m8bbkSQs0KcoJNWTm6rTg6N26htvxq%2FCdspxnYxNma5WgkgtZ2rJCiXk2o0WIImRsBPg0Kn%2BC25Jtn2gWIU%2BmA2w6OOglk1A%2FIG53oUTgaI%2BjI8vKPhZ%2F%2BAKJWK1rmLqDokeh5p2ajlmXZk%2BIy%2FtxUdtWCtJCIX0L6y8Ek%2B9522jj3MV3am&X-Amz-Signature=d2ced0d27f60a7faa7a213aa07ef8b83f49743ccc67430fa5db275b59def250a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EYJITT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICRVuFcuJ4s%2FIThPHRCBw881pVt092cSyeEp8pUDvUBeAiEAwgNmwKk%2BSxbtgzeBdmNQCnyyddPMDZitM2KXOkIOITAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDOkSMNolA2qV7EXXWircA6F8rjPVGMamkKx3qYX1FGgGaUQox3SLXpP43fBvJUUZ8takawEpppV2mTxAG3ZZw%2F22tmLn65UNWFegblKjQ4R2AsXdHseOVyFCJaPzAVMeJs17BkDttO8PHDvGTHoIwwsWJy6Nxng3yphsTc29UZUWjeFeFSwjGGg6W5Y7Z5G%2FqOYwMYwIG5PQZGuKX2F4ZiZiM87fJpB5JKHPm%2Bcc4JqZGbXDaqIY5DBjg6uTFAosepJvgJwLPFsojZGxzBCVU%2BEUqTcACfLgbqDXY2v1UfoF2RBe%2BLz4HNpp6eAmsAlaJ5wVayLSxvfKEpii7RHtP9CvIlMxAhYVQAs45Vkn2daRA71EMVDRPNJbFybNXwnqEwvT6WQHXKq%2B5DHpeBqkXcf1PSvOrERjx0OeuUXCIslgkBhr5aDAcE4qRxUuqCxd1az3kyiYgYXyWMRodcQcKjl3%2Fx6hYtxNVILd9er7mWxZgCSnVL69DzxGe%2FFPGYZN4TcJsBUsnW0neUCOweHm1DDKNlKAgi%2BktM4quU77D8kZpMUAOrqvhqL72di2uqbpWxPFFnohaIjqKfudUlizGa41x1VxNCd6uPWUkqAqibNsICkfZJ6mFUgIdiincE9uh%2BOZn%2Fkwdu0klGnzMPmfrb4GOqUBxD7Y4f%2BivUWtv0TM9r2nLIsGnKc7ws%2BhNzsCm4SOEsvRq92dZzXb5gjYpkoUxTUU1cuXuD8HZE9qHH1npPJ%2BRVyOacdbgZB3OguPqZQCdFf5X8axR0d3Kbac62kFNYgxtKNE42gqQAZFTKBhIQD%2F%2FXgg3qtuh7LYb2SDsBJQT8eP1RVPrtiCaNk8NfXwg4kV3ichdKwAkht3xdWrXQKrwQFhrA3%2B&X-Amz-Signature=e7934817d587cdf5f171ae50fedcdac86b2240fc2b79aa5e25c2420771d1a4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGABSHUM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIAdS%2BW8z1wF4%2Fg1GVvxtQghCTPGWNziQt137WZcKTZqzAiAVKg%2FVC0nUDXaY7ZE8LNnXxDC3LeIDZyLXgVvYTizsNyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMow%2FdCBBoRAsQFeahKtwDfOR6kuz%2FrkOz67p1SRWds%2BCldfDX%2F%2F41NDRWqpYnicOIM6Ox2w0kSlIXQZZKxygKL97CArrcD7rCnZ4Z1ihVq2pEFvXUuW6dQkSmVu6t%2FwPQ0T3liZV6SX%2FmOC2N9kQDDigjTGZ1nLYp8qtjUfIpRtkD8BIhGnidAQ6WPk5EJW%2F6WfnC43xe%2F1uUjLtOzn3WsVoBYeTy6RQfTV9d3FxOEnBL5uEI6e2JAGqKvKVUJhClD6L4mUHu34pYktCtWJsmiI6arBapS7GDC4GEBuxf31tyzFxQzR8yDhXul%2BKTODCy4qXjcU%2B8%2FZZxekvOPQkK%2FjBCfX02KABiDkZDxjkB0QhARL68V%2FLenvZKEWo8UsX%2BPDbx8k9h1bxpZP%2Bjozw3mjSIElwVBz8D1qEjd%2BsYSlJNv1R63Yy1E7owDsiyEUzKhKOMs42SOXI4MDAQHkUrbyDz2yMmsR2J0s5dKlg96QcGnKvktQrifnfo57Ra%2FrPyMUde4l7e42ZMjN4%2FjE6k3CAlZkdP%2F9wPIdWBs3gET4ykroNN0oWixMjpYjfzIgX%2FPF56%2FWQfqXMY4EeLiUmndqSlxc2gGoSZHuUvK%2FtQnyYYNl7hm11vQOnZJQOM5X2n4gTYOmGiJ%2B6AtEgwoaCtvgY6pgFWFMewmecvSUziFTfmZArfRen679gdMLNj6EQ0GZlUEdDZY7It%2BRE50lRgYlCULn6sKX8kIbddlp4CSmZii6fn5gQ5xEFYagenDoKQ15WRZwVpIvESDkL5Q%2BxtHy%2FZdi%2Bolrwuh8MBZmXmGcYFDPU2TuIpeu9n%2B%2BSxkWW7nsbW2ttIViPKkwOHL%2BDVZGqlw9hOgHI7V9%2FBcIvgow8WXK%2FUGgHjaaeG&X-Amz-Signature=7a9d572a21d213283e6d0e8d36a549aefad216c1344a7646a9629e9bb3a0031f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JI6UGXU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC%2FjXzNzxGgrZOBGathl38w5rePK9IPZTT2OWuASjRFswIhAMVxylm0M4%2BuVplmtlwFVZokQXVqwvi2bEr5FwJzWCzZKv8DCE0QABoMNjM3NDIzMTgzODA1IgwrQvP6DgI8PLzt3kIq3APcpP2AjKh%2BRnHpQ2dmlBjS9HIroNiruiJp1y%2B6sz7vGVCMU%2ByhME5jQ6LA2qmHhcz3RRo0sbgl%2F%2BM55Bfu%2FkakyD5FEmZXmhy4SbxR%2FJbVfIQ%2BpbMgvQoCKpKSRE%2Bo8SiS6vEPuPaf3Kx3mQpzFeO9Dpl%2FrAgBrte1YPf5pMIWgZqxCdaV5drYebQXYsZNnB97UARSmpP5b4lGAGp%2FgQfs4UPhn3jxExSqO9lFylLyal74FDWJXq9jrGJkLXEVqsikRGG0bMgG%2F8iyEF3f09TLjjddb3uvuO5zKffgH1mydrYT0lKvLMK%2Bv9tkaCAe6cvFFcD3k863amUpH71oP4BR9AtZAtFmW8OJyxsjasfUBWrzp%2Fg7Kg0Q2CrpWBTaLTyxcQClAQjvQS1OoDSYL5IeQY9aIf4YgwLin2dqUSfYsC77YPDkqwe0Iq5EJl6utfk6OCORL%2BGw1OCduw6jAkXZ5hXdfqhmdT0e9e6kikczv%2FkWG1inuqf%2FkeR5Sp%2BkxbTL0aRG05fIFs%2BEoWnLJUNJSISP70tvCly8zJLZqwdfcH4fhkTnTwZV6xRNakZprHSNKDI0vfEwPkZRUrvQRDS4o8kbNvlYEQJPhc2QzrkCLJIebceSNtrlJXJ5SjCWoK2%2BBjqkAa9sQcRusZOqI5Sun9U4r68XlRvyc1M%2FHJoYY0v88m8bbkSQs0KcoJNWTm6rTg6N26htvxq%2FCdspxnYxNma5WgkgtZ2rJCiXk2o0WIImRsBPg0Kn%2BC25Jtn2gWIU%2BmA2w6OOglk1A%2FIG53oUTgaI%2BjI8vKPhZ%2F%2BAKJWK1rmLqDokeh5p2ajlmXZk%2BIy%2FtxUdtWCtJCIX0L6y8Ek%2B9522jj3MV3am&X-Amz-Signature=ff83ccc61903ea392172c207328185a43442dc7f676f7a371796a1036003fac6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
