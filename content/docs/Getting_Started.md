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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAZBZX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDvQPpdXm0lUaOaJmLvRHfDz3MYzAdN%2FfubspyQ16QPDwIgV7LXigj897dGLn6ijjtHK1JEOtprWwzopz%2BaXh42F8gq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMiH8zO52LslivwSQSrcA1oJqdFKvJm6ju8WRMTrRSiv0xevJhu1ZzNN9F8aDuos0Yp7b%2F6BoNDRiuqeCWPf6brGJxe8ZtPo2ZpSrG7LflIFOwVAfv6ZhQN%2BElOOmACiWI5tnWR6Qm3mBhU1c%2F4DfMf2k0FlCxXIuojtmZGinCtCLqaNLK8e5SS1fxkdkQrrWKBFGhREo%2BlWNqkiEtzdmI%2BP11%2FQsSh6Eq8NO447NHlvn1tie13QxOE6q1iQq1kc1gcmPOmG0VUArNp%2BAyfCz3okJx0MygYjbTCOetvm%2B9d0Gk%2By2rumpBYaYE8ierX6gXEk1p3XbK2amVPlWREiV2fch790VnPoVv%2F9sTlQTb3A7OcradXG5eUB3brC9Oq2XoU0nzMAlOZRw8PF3NqfOyXlGRzH99CqQ%2FXHOEpE%2FFr%2Fp1C%2BSORKO1tOuis7xVJ8%2FTG8V9EsYGAyKsdEjLFpVKOsRF0mXwc5wh%2BW84KphTPp0vbQINkg7kxCwgPTutHpCg5%2B0GETCSGBosyNhw9oejLHgB%2FqBljM7Y3r2asKIuaiOZ9mj8C1jzwY8%2BNHKMYez4OvdWlY7%2FQNLCd67Zvm6JPh3VEi%2B%2BhpGUGrhotnLLNbfCSfPfLQisHyxTbhR5FrrSarUgghmn72A%2FccMIXA%2Br0GOqUBXKrssg7J0q9nlMLPuMnUCDMOIRg0ilgopHzAgkc768CIjUNroN0fScyhUXGIN%2BjxY7cmql0bbedSyOlTVWv80wZXrz%2BQ%2BQnPWE5pPsY0b0sAlhdtG2YCXKGfDH4viDlUsxRnV2Iz%2Fow4OP%2BD3gVW0IcAhRprFZyrKwFdJ1lYuUlPS4kTHFiEDDtHR1BhpWP9pjvxLJiSc2Lw1lSOayCgJNrnNvKA&X-Amz-Signature=d2900d1318d2c086d61636047df0ab57de5309945c9b2669b0f823978c0aaa46&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAZBZX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDvQPpdXm0lUaOaJmLvRHfDz3MYzAdN%2FfubspyQ16QPDwIgV7LXigj897dGLn6ijjtHK1JEOtprWwzopz%2BaXh42F8gq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMiH8zO52LslivwSQSrcA1oJqdFKvJm6ju8WRMTrRSiv0xevJhu1ZzNN9F8aDuos0Yp7b%2F6BoNDRiuqeCWPf6brGJxe8ZtPo2ZpSrG7LflIFOwVAfv6ZhQN%2BElOOmACiWI5tnWR6Qm3mBhU1c%2F4DfMf2k0FlCxXIuojtmZGinCtCLqaNLK8e5SS1fxkdkQrrWKBFGhREo%2BlWNqkiEtzdmI%2BP11%2FQsSh6Eq8NO447NHlvn1tie13QxOE6q1iQq1kc1gcmPOmG0VUArNp%2BAyfCz3okJx0MygYjbTCOetvm%2B9d0Gk%2By2rumpBYaYE8ierX6gXEk1p3XbK2amVPlWREiV2fch790VnPoVv%2F9sTlQTb3A7OcradXG5eUB3brC9Oq2XoU0nzMAlOZRw8PF3NqfOyXlGRzH99CqQ%2FXHOEpE%2FFr%2Fp1C%2BSORKO1tOuis7xVJ8%2FTG8V9EsYGAyKsdEjLFpVKOsRF0mXwc5wh%2BW84KphTPp0vbQINkg7kxCwgPTutHpCg5%2B0GETCSGBosyNhw9oejLHgB%2FqBljM7Y3r2asKIuaiOZ9mj8C1jzwY8%2BNHKMYez4OvdWlY7%2FQNLCd67Zvm6JPh3VEi%2B%2BhpGUGrhotnLLNbfCSfPfLQisHyxTbhR5FrrSarUgghmn72A%2FccMIXA%2Br0GOqUBXKrssg7J0q9nlMLPuMnUCDMOIRg0ilgopHzAgkc768CIjUNroN0fScyhUXGIN%2BjxY7cmql0bbedSyOlTVWv80wZXrz%2BQ%2BQnPWE5pPsY0b0sAlhdtG2YCXKGfDH4viDlUsxRnV2Iz%2Fow4OP%2BD3gVW0IcAhRprFZyrKwFdJ1lYuUlPS4kTHFiEDDtHR1BhpWP9pjvxLJiSc2Lw1lSOayCgJNrnNvKA&X-Amz-Signature=17e4cd1c7d70cf4a31c568405a57ae06b675b2ffaf1c9f2cf8efe95048e2c377&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LATY6M%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDTR05fYPNlSNt1pGD5gm%2FqWqmpA8blIoW9elz%2BSDOiNwIgXamFCxFvrSoYwt5lZCczy0Bv8RDLbaGyOKFbZyK0UzEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDE6H56Pvv%2FjpzG3uFircA3gkC39d9ofuwnrKCPigscLpfIhlbNY1%2F59Sh5jkfbjg1CnIym5Ry3OamgoOkDRc3Tbm7r2DEACJF3FYpGMuYtIKN%2FpFhLfQmAuyvX9adfjqeJc0hX%2FIV5v3PmPCWWSiJg%2FGOXR0oseyQmYN5S8LtyVOTtH3GGhVNGaFqB52xN%2BscEitSyS9qXiu3Th%2Ff8vvZOk5Tc9vhsNlCfOCb0Bw5QG%2BIKoan1qiamuGH4rY06vuu7Lcs4lrb%2B8mIOh4oYkRlkVT%2B%2BIQVheC82u6fSRre2FKS8LrcqHizt6%2BZ2%2Bkiz3uDodOBU1gwA01UsCOOQs1rBHA1VK%2Bd45K1vbwjbRP3scHy1SoOzIpDChthrX8VBGo9TjxVmgRzj%2FZNsP7MmlADmdgCDCpsGVS5YNW56fogkgvdM4VOEdHj%2FDqPP6PEtPjDkwglCHRR4wfkuTigy3DY1%2FxEHkFlBBYvi90WuBt9PwYfilvSY9xOEpbmw%2B%2Fwf4d98vEHO9NJ5hBM%2ByKUR%2FYQqzSckbdbUI22d9b7dGG6hGtZhJ4QCIfbOPaR0y3z1HTVVjsQo9iw4QT%2BF8pTabRQ94mwys0BWyMN6cjiid9VBeKr2o8rpMBqVErjf5%2BsBw4Q1ultdFDhSImXK7OMPm8%2Bb0GOqUBPzEf0n78He5OsJTgPhc3mRU7ahJJxGabqoesR28KCVKEdJVq5JYPMN1JnaIskjqv0dMRBkZzNDaHZF6yekscQm1rqO%2B8QbtNfYkqCNfXqQdx8N6vQetNvN%2FU4%2Bsc1c8ZQFVuj6Azv9nL6lkIEXuT55cp%2BoGphNervkeRKvn6E0KGJwkRZZBbojAGISnhCwRiP9Wyesu94CBVA303EIIpSiAWlImb&X-Amz-Signature=3f6516603bbdcf14236bdbf606df2f4370853ce1d5841d5931fa3cdb85148e99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMK7OAI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCM4edFC1s%2BJ07evN2t3sRmZ72QMtCqAy6Vbs8U0zOwLgIhAJEMcRNQNhfThVeAstAkRrJvarLOh%2FqRJDEE8OvpO0oAKv8DCFYQABoMNjM3NDIzMTgzODA1IgyzVWsDRWtzeWz1Z2gq3AN8781KHJHMxrSs6J1wo0nR7TeCViyXNMS4GPvjfB1f7l12sTonsGBixdZ5GNqfaH7x7IccdDgEnC1GMKlQ9DMZbo0%2FqgF66M%2BALIy4FDK4yVwzbmJB%2Foni%2BuR3PynBMKllXIKBI8H6anQdf5mcXcI7dhvvkUa5qn8mYO0Yx%2FhtAdPpflIq48GbaAgNeom8%2F4F0qOJi%2BCxuH39fg2Q9YxnjuEN6ctC5frUmlMo9yvQkrcVURZ0mRcqleFloXlTgPjVftaqDu0n96L5%2BLRxUuJwXqS8dX%2FccCpUGLbpOeAJZ2aDLU1Nfz%2FlXGm0FepvdgrR3gNUW0EtEzQWmGymtPx1on%2F5OQ7Sg%2Bkrr3GYnO1q8Ok8kuZvZdPWMhwWMAYSSWJNEvnFC1D7PuqLI3Xl%2FMQBpivRqWoMKsYTXsaSRfDqqjrZFmqx%2BMOz3DCIFul5vfOsA0zb9WlmXPeYSOe1KDnBBvNSlEWIe0RGLEerviiSv0VJkQ%2B5pyU3AHtSU7fhRDAlJkcp5wYRxU4Le6e0yieVFR4LvGUChHEdTy2xDA3BjqIpOeKOmX5qejiS7V1ZeM26TfWL7LTS5M7M7Eu4vwg1cWr%2F%2F1UdEKBfQCx7uG2Po8HD6Ax6vxQZnfAqRkDCSt%2Fq9BjqkAeuHzitTj86SKGcL8d%2FzKa%2FJzLFEWdFjbAWua1nTHG73YeKnPtQ%2FfD%2F2vFJT2OxUKdZE5HdTHBxq3Z5uZILgz8o7OziYaFpj3%2F2qvkakzzcQq7xhG6Mb4htazfxRLHYXxb%2B5PRiiu8z0PJ4GrECKHlo2Q5KqLixcusZYVDwFuIMylHROusraImSBRTrceoTXHI0Q22casj8a1Gj2THhVHIZkcPUq&X-Amz-Signature=826c835960d709b1e5fe5f41e50851be01047707e2beeccd70d97221c9aa3a72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAZBZX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDvQPpdXm0lUaOaJmLvRHfDz3MYzAdN%2FfubspyQ16QPDwIgV7LXigj897dGLn6ijjtHK1JEOtprWwzopz%2BaXh42F8gq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMiH8zO52LslivwSQSrcA1oJqdFKvJm6ju8WRMTrRSiv0xevJhu1ZzNN9F8aDuos0Yp7b%2F6BoNDRiuqeCWPf6brGJxe8ZtPo2ZpSrG7LflIFOwVAfv6ZhQN%2BElOOmACiWI5tnWR6Qm3mBhU1c%2F4DfMf2k0FlCxXIuojtmZGinCtCLqaNLK8e5SS1fxkdkQrrWKBFGhREo%2BlWNqkiEtzdmI%2BP11%2FQsSh6Eq8NO447NHlvn1tie13QxOE6q1iQq1kc1gcmPOmG0VUArNp%2BAyfCz3okJx0MygYjbTCOetvm%2B9d0Gk%2By2rumpBYaYE8ierX6gXEk1p3XbK2amVPlWREiV2fch790VnPoVv%2F9sTlQTb3A7OcradXG5eUB3brC9Oq2XoU0nzMAlOZRw8PF3NqfOyXlGRzH99CqQ%2FXHOEpE%2FFr%2Fp1C%2BSORKO1tOuis7xVJ8%2FTG8V9EsYGAyKsdEjLFpVKOsRF0mXwc5wh%2BW84KphTPp0vbQINkg7kxCwgPTutHpCg5%2B0GETCSGBosyNhw9oejLHgB%2FqBljM7Y3r2asKIuaiOZ9mj8C1jzwY8%2BNHKMYez4OvdWlY7%2FQNLCd67Zvm6JPh3VEi%2B%2BhpGUGrhotnLLNbfCSfPfLQisHyxTbhR5FrrSarUgghmn72A%2FccMIXA%2Br0GOqUBXKrssg7J0q9nlMLPuMnUCDMOIRg0ilgopHzAgkc768CIjUNroN0fScyhUXGIN%2BjxY7cmql0bbedSyOlTVWv80wZXrz%2BQ%2BQnPWE5pPsY0b0sAlhdtG2YCXKGfDH4viDlUsxRnV2Iz%2Fow4OP%2BD3gVW0IcAhRprFZyrKwFdJ1lYuUlPS4kTHFiEDDtHR1BhpWP9pjvxLJiSc2Lw1lSOayCgJNrnNvKA&X-Amz-Signature=3f667e9fb5a77f8b0e93c72569625db7703c39e29de9dc4eee8d1a82465bbad3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
