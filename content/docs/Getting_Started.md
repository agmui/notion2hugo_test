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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK34NSS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCofj0fHfn5Vy%2FwqRl19KJYILAD5AKEVJja9%2FGWG0ziQIhANbBrX4vW%2BKIPo5b4hS4r2Ezu5S1gheRwwG3IjHm4lbfKv8DCEwQABoMNjM3NDIzMTgzODA1Igxxw07VK0aDwKN5iLsq3AMAxFKU7VC9RRvemIeHsRMzXsezZCKSOsEynx2Yps%2BLYoi6lxCawUu0VtcvqIg6rYpIUh%2BHrOOSQZrwd4fQKbXV4Y9%2B4PFcTyVVG80rt1izAGjfmbWAugc5jnojIM%2FdgNYppX5TTj7f3QUhDG2Wqs3D9QuaIa0PQgi2FUumUjwD8efwp86H15KxRAi5ii%2F4EpMIOznFGyGMDrhsnceieTzEPVxzHsUzNqMejPDyPNTjq8s9Fdq3Bzs9WVTENxcrG4huLesyqWnPOci0G%2FCnm3wjnMb0%2BS5kRvcJR9dBDQv3Hlwp15tDTOt87yS9pUj2LYT7TwFhYl9cel1jOZntOlqMYjJ0zL5HTtTV19vYNwHFvugSD%2BDAAht5MoeAAHE9KMr4B13nRx%2FG98uwbeZuXSi40U6wdwnrMPgIZ1kI15j3BbYClKyEb%2FdQ3bQnv36bQKVqekJuPZTvi5WSFLQk87lIcFxMthxCILMpTzzQGCD9hBkD%2BC2NhWH7kBimvooEHSnBkyDbTBiqIWjb0QWDwOsH0moPzZHOosdJnA9R9TeruKEKWltgQJTIAfjmAvBsHVmqBAUlLByeZi9O1Me05HwOaQkl%2Fy5q0WfYmxQT7f21IvebIYiH7m5D61gCBDD28aXDBjqkAYi7QWTtAY8xH4J7U1dD59Qxwj4bSzbZMHF9AIRn1Nr89jj0HiDStuqZNszT2PhjhsSSLfP09T%2B6OvgzNVoYuACOhrjvhDp0U3Z5eg18aS6%2F2UltZBhigIfuP3Srq8Z0zpMQcf4T%2BA7WH6sompxYvqm5IISypVZ%2BLYexJfh49%2BlU8oHdaPbVBnLWk9jtHfPytUN4Br2Lu5uutYy6zym0x%2BCp0WEQ&X-Amz-Signature=8791b3c43f8a46e2db9c9f0ddb38773f99f39220a0045f262dbf3c0afe7bc652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK34NSS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCofj0fHfn5Vy%2FwqRl19KJYILAD5AKEVJja9%2FGWG0ziQIhANbBrX4vW%2BKIPo5b4hS4r2Ezu5S1gheRwwG3IjHm4lbfKv8DCEwQABoMNjM3NDIzMTgzODA1Igxxw07VK0aDwKN5iLsq3AMAxFKU7VC9RRvemIeHsRMzXsezZCKSOsEynx2Yps%2BLYoi6lxCawUu0VtcvqIg6rYpIUh%2BHrOOSQZrwd4fQKbXV4Y9%2B4PFcTyVVG80rt1izAGjfmbWAugc5jnojIM%2FdgNYppX5TTj7f3QUhDG2Wqs3D9QuaIa0PQgi2FUumUjwD8efwp86H15KxRAi5ii%2F4EpMIOznFGyGMDrhsnceieTzEPVxzHsUzNqMejPDyPNTjq8s9Fdq3Bzs9WVTENxcrG4huLesyqWnPOci0G%2FCnm3wjnMb0%2BS5kRvcJR9dBDQv3Hlwp15tDTOt87yS9pUj2LYT7TwFhYl9cel1jOZntOlqMYjJ0zL5HTtTV19vYNwHFvugSD%2BDAAht5MoeAAHE9KMr4B13nRx%2FG98uwbeZuXSi40U6wdwnrMPgIZ1kI15j3BbYClKyEb%2FdQ3bQnv36bQKVqekJuPZTvi5WSFLQk87lIcFxMthxCILMpTzzQGCD9hBkD%2BC2NhWH7kBimvooEHSnBkyDbTBiqIWjb0QWDwOsH0moPzZHOosdJnA9R9TeruKEKWltgQJTIAfjmAvBsHVmqBAUlLByeZi9O1Me05HwOaQkl%2Fy5q0WfYmxQT7f21IvebIYiH7m5D61gCBDD28aXDBjqkAYi7QWTtAY8xH4J7U1dD59Qxwj4bSzbZMHF9AIRn1Nr89jj0HiDStuqZNszT2PhjhsSSLfP09T%2B6OvgzNVoYuACOhrjvhDp0U3Z5eg18aS6%2F2UltZBhigIfuP3Srq8Z0zpMQcf4T%2BA7WH6sompxYvqm5IISypVZ%2BLYexJfh49%2BlU8oHdaPbVBnLWk9jtHfPytUN4Br2Lu5uutYy6zym0x%2BCp0WEQ&X-Amz-Signature=3f266bd003d0afa747932a0ada4813d95c4c7429c31f4f93521da9d24386badd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK34NSS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCofj0fHfn5Vy%2FwqRl19KJYILAD5AKEVJja9%2FGWG0ziQIhANbBrX4vW%2BKIPo5b4hS4r2Ezu5S1gheRwwG3IjHm4lbfKv8DCEwQABoMNjM3NDIzMTgzODA1Igxxw07VK0aDwKN5iLsq3AMAxFKU7VC9RRvemIeHsRMzXsezZCKSOsEynx2Yps%2BLYoi6lxCawUu0VtcvqIg6rYpIUh%2BHrOOSQZrwd4fQKbXV4Y9%2B4PFcTyVVG80rt1izAGjfmbWAugc5jnojIM%2FdgNYppX5TTj7f3QUhDG2Wqs3D9QuaIa0PQgi2FUumUjwD8efwp86H15KxRAi5ii%2F4EpMIOznFGyGMDrhsnceieTzEPVxzHsUzNqMejPDyPNTjq8s9Fdq3Bzs9WVTENxcrG4huLesyqWnPOci0G%2FCnm3wjnMb0%2BS5kRvcJR9dBDQv3Hlwp15tDTOt87yS9pUj2LYT7TwFhYl9cel1jOZntOlqMYjJ0zL5HTtTV19vYNwHFvugSD%2BDAAht5MoeAAHE9KMr4B13nRx%2FG98uwbeZuXSi40U6wdwnrMPgIZ1kI15j3BbYClKyEb%2FdQ3bQnv36bQKVqekJuPZTvi5WSFLQk87lIcFxMthxCILMpTzzQGCD9hBkD%2BC2NhWH7kBimvooEHSnBkyDbTBiqIWjb0QWDwOsH0moPzZHOosdJnA9R9TeruKEKWltgQJTIAfjmAvBsHVmqBAUlLByeZi9O1Me05HwOaQkl%2Fy5q0WfYmxQT7f21IvebIYiH7m5D61gCBDD28aXDBjqkAYi7QWTtAY8xH4J7U1dD59Qxwj4bSzbZMHF9AIRn1Nr89jj0HiDStuqZNszT2PhjhsSSLfP09T%2B6OvgzNVoYuACOhrjvhDp0U3Z5eg18aS6%2F2UltZBhigIfuP3Srq8Z0zpMQcf4T%2BA7WH6sompxYvqm5IISypVZ%2BLYexJfh49%2BlU8oHdaPbVBnLWk9jtHfPytUN4Br2Lu5uutYy6zym0x%2BCp0WEQ&X-Amz-Signature=75109601b6d6b561f6c2ddc08d0ed6e763517746c735990afff9698d3d8476d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MXDE2N%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDXlz0figqDwmp384j6ogPEshoWvUJ2l4ZK5umP2%2BjgegIgbj3Srhawn%2FZH%2F8%2BweEVTKutZj7bIQYOdzSByKFrxPe4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG5FiWUlrZBO0cdbByrcA7CrO7p3ySJHnOyUMfeW4zvlOL2Rqhlr9i1V1dVWgHbcP6WOmglpI4q1eDQV%2Bhh66H4pHDqlL7pmqUPJuS%2BgJ3NkoYbfhgq59ptiJ%2BNI3QknAv0xxofQoDy8ww7QcCErhkoVbsarUwK8enePkImBLa4QUpFcA99jXt4DLPHCxLdbB2I87N1qekGH4C5AzF6KL5qFXthr%2B0TFjTWvp2ldMbnlbX60iULlFViWani3AISmq1OXPfQZjIM4VbRI3gFGWjhciPQjzxCZHrPYEAumUc9Q2eWVPOhFoYO0IvzqsX%2B%2B5pUpUvwLxwqOe6lxK5FzgsO4lufamG1uW4BFK7k35QZVdLgRzG1tAvhJOhzKW40TBuMlND0R7zVlNrEmHrsmkBoEJtIe0TW8WedNKGTbKORHvvtWpyuq9WnPwyPN6tJji26DPEZQ6jzIzzKl5phxEOGoEU88kbc2frJjuwmH6sB4MoTs1qqAQhJjwJp4WWfWTuit%2BgeAx3MGTMqQR5K%2FzUWFK3tWw7lZ0M4zosCPYgbk3ffM2KlInPCA7g9NhfvShq3wer3xZGfzjjFi3fkBZxPJ7Etl%2BwlOzhBsNE11xQuLZ8mmBqjdPuVGj9rXwMf%2BfF02HHyhp8899Cw4MLXxpcMGOqUBIqkVx5q71Y4c7mvOYJt2wZ7VBKRZXxJJDsvY4ZEZz0kxuLoz8jzwC6ZRX0UetXmEHww5fGIYRXIdwi60vS3yWJQtPdKV4m3aIC8es7NHG0HFTroyHnF05vLHvnEZHzqpM7dtYcPwgnK%2FHRFLyKw9NB7i1vU7QBK2VS3FEy9PFsja6bCROlnRJ%2B9Jw%2BPqTpJK67RTsMkGI0wnejtz6TswhYb%2Bb7L9&X-Amz-Signature=988aa012e2f0df51bb5b2561d6e260f474ac4f631d4397564575a756d65e2df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KCHV34%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDgJlgNg3R8r3p9evJzQ7o4cAtNQDXrxTMQ5tiTmxHEqAiEAv37Z0szvVhcfLLLZC9nOP1QKjjk%2B7x1d7atSVyVzDLAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMVa7gkJlGywRsYliCrcAzkojTVO6X%2FQ9hLSM1tDJWaQyBVfgDJEmmRqfty4e7%2FS0ipCtTa7Cz%2FuF1MMRA3M34NykyishUkPv9ShqBP%2FCbiw1Ti39S%2BVW4s%2FGYuR69N9O019nnqeanriYdy183fZ9k9iGOfTcydXLbmeiQse28v9cwxBlHTUi9fbO1zxNMFiy4bRnAedRdJowGzFD3I9TnM9CFpTrt%2Bua6IvG6seFbn6X4Hal3Lkz0ZH5HVWIXmp%2BI889F2hpRN0BXczI76qLR8vy1%2FS%2FJdRPHwo3lQRwoAqw2mf6AiVHEUyIM78248CYwoSGBYgqbyRr1gTCHlgmn%2Bb2wm7JqzxOxswQAuS%2FjXJ%2FrBu9cAXwV3DP0KfWLWM9LJtEKEt0UrLx3cLidt2eEEswwwJOoxWwOreMZ1XoGRK34Z44pFNva0HHD5dNpNc9MX7stDopUNtToYdQCky%2FQEVeMSQqsQ85lZ%2BiIfs0CvJdYIueAGugXRPjpMAswRTkK5YnDupFMIuAsBPEO1KD10oQP2n%2BYjRC830IXuz3br6tNX6ypqDjDNJ2az0YUo0zjOxuvtWqnB3dLKhXd7eDv5c%2FZc%2FNe8PV3oFLJdUprwtMSCdlORTqFHNgn5guyMy7GG8zM9YtAIgJnjwMLfvpcMGOqUBeHrXKcE%2FOgeyTD1Fr6k8vQBX3TOnTgWwihRR4wZjAsFz8iAkkYJZAzRMyq85YENq6miNSnwW60FuXY6rUIAe38zFIYs0ZT3SVQpFkN%2BIfSdoaw1KkFM6MR2szVq08YZLfszXd9qTBEn%2BQFJmy9keAUHhWonFpHL8y692SP2Vbk6MWhTTgeF1UCzXTtAsmiZonYylJzEBHhntgCYs7JOHzYtccvvk&X-Amz-Signature=27731a14ddfed53db412020ff76aee16588e54e6e92477a8ed8e879974c7bb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK34NSS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCCofj0fHfn5Vy%2FwqRl19KJYILAD5AKEVJja9%2FGWG0ziQIhANbBrX4vW%2BKIPo5b4hS4r2Ezu5S1gheRwwG3IjHm4lbfKv8DCEwQABoMNjM3NDIzMTgzODA1Igxxw07VK0aDwKN5iLsq3AMAxFKU7VC9RRvemIeHsRMzXsezZCKSOsEynx2Yps%2BLYoi6lxCawUu0VtcvqIg6rYpIUh%2BHrOOSQZrwd4fQKbXV4Y9%2B4PFcTyVVG80rt1izAGjfmbWAugc5jnojIM%2FdgNYppX5TTj7f3QUhDG2Wqs3D9QuaIa0PQgi2FUumUjwD8efwp86H15KxRAi5ii%2F4EpMIOznFGyGMDrhsnceieTzEPVxzHsUzNqMejPDyPNTjq8s9Fdq3Bzs9WVTENxcrG4huLesyqWnPOci0G%2FCnm3wjnMb0%2BS5kRvcJR9dBDQv3Hlwp15tDTOt87yS9pUj2LYT7TwFhYl9cel1jOZntOlqMYjJ0zL5HTtTV19vYNwHFvugSD%2BDAAht5MoeAAHE9KMr4B13nRx%2FG98uwbeZuXSi40U6wdwnrMPgIZ1kI15j3BbYClKyEb%2FdQ3bQnv36bQKVqekJuPZTvi5WSFLQk87lIcFxMthxCILMpTzzQGCD9hBkD%2BC2NhWH7kBimvooEHSnBkyDbTBiqIWjb0QWDwOsH0moPzZHOosdJnA9R9TeruKEKWltgQJTIAfjmAvBsHVmqBAUlLByeZi9O1Me05HwOaQkl%2Fy5q0WfYmxQT7f21IvebIYiH7m5D61gCBDD28aXDBjqkAYi7QWTtAY8xH4J7U1dD59Qxwj4bSzbZMHF9AIRn1Nr89jj0HiDStuqZNszT2PhjhsSSLfP09T%2B6OvgzNVoYuACOhrjvhDp0U3Z5eg18aS6%2F2UltZBhigIfuP3Srq8Z0zpMQcf4T%2BA7WH6sompxYvqm5IISypVZ%2BLYexJfh49%2BlU8oHdaPbVBnLWk9jtHfPytUN4Br2Lu5uutYy6zym0x%2BCp0WEQ&X-Amz-Signature=e119a63868e355e77de174be0ce28af8ef41083b04ab6806cb6117ce22351b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
