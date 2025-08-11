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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPVEGK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQWr4mvDZ1ueWh2orriWSdEZdaX0MVaOCVgWAK8QmgZAiBk8GZeg9%2FlChuy83Su9I6aqbgY0rE7vSTAlMea45zqoiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtadtfbx7QAkK2aUVKtwD2Iw53%2F3GAAn5EcIOX8nvKneClBX5epvGq3wbgys5OKF496uDkEwHkMrhpJvP5s7DLzZlaWJBssJF%2Ff4ux3T5%2FMbKAnoCuku0vk2%2FLOTi85oJqXuQIfJ3YwOGI4rly%2FtBcAajYeVti1T%2FCCvepfmzZxvbKlGsBABeWZz1No%2FZlfVfnNbRiJ%2Fx8EzJmCY1H2c%2BCZIobfGspNmybsLEtiL%2B9iqdeji8IYmhh4BEZdl4O7q28CFZk9MZD8vGasoW7X%2FfeeDh05oENMtqlUQ7xRqChM237rtwi0jXx9biThIkbuEYtJPhoG4p6dTYC9mp3jIT7ICxDTtAbwzx6O1S2kkCL3ihhfLbgukWfcyy5Y5nR0rrPJv24H24TSCbwOns27BCG3jvgnB1Q%2BzsFwYxGukG6bxlVFli%2Fb1t1%2BCuAtYNq%2BWh9%2FsHOMig8VcGro2jMx6rbrxDOIwtm3bCvHRZlEaSTX5s1C6N%2BJf1c446I1ithDGAWqtNLVKOr0oekqBRhqpFTRo%2Fi4JZFdTmS8WUZ9RYY14QXbQJTNX3idyw5AXJLYjaKco5hVHGh70GvoDgY9X426%2B2fCbMIM4YRPGw%2Bwq6ccZRTBrYGfSoQnzwhuI1krZPPDLA0CaUz2iEXsww7KHoxAY6pgERVIfDKtl4XIW482ttTEAkzE5hfKTye6gUXkXPYlYK11c%2Bw2pwxt0MVvqSTR1pk4an689WipBnBEIgtPGPFffyxSkZ7cducpJXQ9zHhglkhBsduRzG7ifB9ibBi0GIiS70kqUcdG97Yu0UaNg27aWv%2B%2F6QeKBqfSx6Az0Hq56pbdrRGyQqZqKs0B9eExGaLrvwE454NctJaXmgH7KIueaFyF1S1LF3&X-Amz-Signature=0f6d3c4360493ee415b9b76107cd7fbe26402fae003e6693026c4d57678df479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPVEGK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQWr4mvDZ1ueWh2orriWSdEZdaX0MVaOCVgWAK8QmgZAiBk8GZeg9%2FlChuy83Su9I6aqbgY0rE7vSTAlMea45zqoiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtadtfbx7QAkK2aUVKtwD2Iw53%2F3GAAn5EcIOX8nvKneClBX5epvGq3wbgys5OKF496uDkEwHkMrhpJvP5s7DLzZlaWJBssJF%2Ff4ux3T5%2FMbKAnoCuku0vk2%2FLOTi85oJqXuQIfJ3YwOGI4rly%2FtBcAajYeVti1T%2FCCvepfmzZxvbKlGsBABeWZz1No%2FZlfVfnNbRiJ%2Fx8EzJmCY1H2c%2BCZIobfGspNmybsLEtiL%2B9iqdeji8IYmhh4BEZdl4O7q28CFZk9MZD8vGasoW7X%2FfeeDh05oENMtqlUQ7xRqChM237rtwi0jXx9biThIkbuEYtJPhoG4p6dTYC9mp3jIT7ICxDTtAbwzx6O1S2kkCL3ihhfLbgukWfcyy5Y5nR0rrPJv24H24TSCbwOns27BCG3jvgnB1Q%2BzsFwYxGukG6bxlVFli%2Fb1t1%2BCuAtYNq%2BWh9%2FsHOMig8VcGro2jMx6rbrxDOIwtm3bCvHRZlEaSTX5s1C6N%2BJf1c446I1ithDGAWqtNLVKOr0oekqBRhqpFTRo%2Fi4JZFdTmS8WUZ9RYY14QXbQJTNX3idyw5AXJLYjaKco5hVHGh70GvoDgY9X426%2B2fCbMIM4YRPGw%2Bwq6ccZRTBrYGfSoQnzwhuI1krZPPDLA0CaUz2iEXsww7KHoxAY6pgERVIfDKtl4XIW482ttTEAkzE5hfKTye6gUXkXPYlYK11c%2Bw2pwxt0MVvqSTR1pk4an689WipBnBEIgtPGPFffyxSkZ7cducpJXQ9zHhglkhBsduRzG7ifB9ibBi0GIiS70kqUcdG97Yu0UaNg27aWv%2B%2F6QeKBqfSx6Az0Hq56pbdrRGyQqZqKs0B9eExGaLrvwE454NctJaXmgH7KIueaFyF1S1LF3&X-Amz-Signature=558162b3c70ae189aa4ab4c790b0d4375261bbbeb35dbf7da8c22deab298cf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPVEGK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQWr4mvDZ1ueWh2orriWSdEZdaX0MVaOCVgWAK8QmgZAiBk8GZeg9%2FlChuy83Su9I6aqbgY0rE7vSTAlMea45zqoiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtadtfbx7QAkK2aUVKtwD2Iw53%2F3GAAn5EcIOX8nvKneClBX5epvGq3wbgys5OKF496uDkEwHkMrhpJvP5s7DLzZlaWJBssJF%2Ff4ux3T5%2FMbKAnoCuku0vk2%2FLOTi85oJqXuQIfJ3YwOGI4rly%2FtBcAajYeVti1T%2FCCvepfmzZxvbKlGsBABeWZz1No%2FZlfVfnNbRiJ%2Fx8EzJmCY1H2c%2BCZIobfGspNmybsLEtiL%2B9iqdeji8IYmhh4BEZdl4O7q28CFZk9MZD8vGasoW7X%2FfeeDh05oENMtqlUQ7xRqChM237rtwi0jXx9biThIkbuEYtJPhoG4p6dTYC9mp3jIT7ICxDTtAbwzx6O1S2kkCL3ihhfLbgukWfcyy5Y5nR0rrPJv24H24TSCbwOns27BCG3jvgnB1Q%2BzsFwYxGukG6bxlVFli%2Fb1t1%2BCuAtYNq%2BWh9%2FsHOMig8VcGro2jMx6rbrxDOIwtm3bCvHRZlEaSTX5s1C6N%2BJf1c446I1ithDGAWqtNLVKOr0oekqBRhqpFTRo%2Fi4JZFdTmS8WUZ9RYY14QXbQJTNX3idyw5AXJLYjaKco5hVHGh70GvoDgY9X426%2B2fCbMIM4YRPGw%2Bwq6ccZRTBrYGfSoQnzwhuI1krZPPDLA0CaUz2iEXsww7KHoxAY6pgERVIfDKtl4XIW482ttTEAkzE5hfKTye6gUXkXPYlYK11c%2Bw2pwxt0MVvqSTR1pk4an689WipBnBEIgtPGPFffyxSkZ7cducpJXQ9zHhglkhBsduRzG7ifB9ibBi0GIiS70kqUcdG97Yu0UaNg27aWv%2B%2F6QeKBqfSx6Az0Hq56pbdrRGyQqZqKs0B9eExGaLrvwE454NctJaXmgH7KIueaFyF1S1LF3&X-Amz-Signature=dae886e90c85464e26695b12d943e6bb5957f8bac2f21bd79cddb539195b3216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUXJYVS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCnVdGMt8CYP7mdovKnAYE4iCToWs3qXl%2FOr7Xk%2BZZdgIgJvFxCdsKXK3dyZbjx0QOc7ZfS13Infy08UWSDsyqCyIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwEI9MDYHnBovwhQyrcA1oyPQGwK2OmEwrtTe6Q3L9LalUpvafPnXVzYsVLL7SN4%2F7n7uGiCiYHql%2F3jViiAQPdZBPtLohWgO16gISGwSb3OYehXkFSa%2BPsvZ%2BmNKln5imkZ4rywYykJNj7S7oknbKEz4FHS1HtQrCPItt45Gs73Gt5Q9d%2BlS6Fz3tB%2B3REQ9ES%2B8U7Vx4SGVyWZufLrs043h0QXD5bWueaZO4mD7%2F8ZmIIm26TXZTC4TJkB%2BWCBnjaKvh%2F8QWsQLylJlB0TqXhP5dbF8DLeKq4bPKpAp7hSv1sIrdx7Oq9P3hQDxQ%2BHepvQUUtdWeFmTN48oNWY3zlVB%2FzzMQvEqv3OCPYhco8AelJXuAUhXX5Q5tHRlwirReGsWUYJWg1uNd5KTXRLg4thwEASRhID92Vm96bzthKcbknNmTo9rNS1vKLi2y6dsxiGrEQ2n5KrJXBoDDPmaskGPtmEexvraSAvrDx%2Fz5yv%2Fg02blmlBd5AzGpE5%2B1ahm4eqvHCrQmVAW4oCROl6s%2BUS7Ut8jnNvSE0A9JNpOv0Ob0NzeEcTaG5ConqATBuN6LikbcIlbNSQnq3TFrPd171UteD6Mev%2BcTvH6l3ox4Wn%2FtV2bxCecw65EMazMyTgrV6X6EYKhR16Y9MJ6h6MQGOqUBe8aKJ9Gpr5UuhF6dOyxG4lQr8GvrXJqsLydSl91Pu79M4nOprWiN%2FGeOa1vipHLyA5eQzlinyA64Dx00l7RrTHAC%2B0%2Bh5DjxyDG1YQ%2F5nsghNLZudmzUjtwem40qz0wKTozqKquGKHvNNU03NvI9Nvz4CRgqL0WHqCSEVkfHtc2paQozIlRzWTAe7Ze2hVAVyYfYJz4pKigVY3qrKeOk2MPLcOnA&X-Amz-Signature=bf27301d978b9c1920b83958df826e9b8583f19678370e20fc16bb4d7b72b67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDTSLVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG26oOMD8fmIn%2FpWVb3M6VM5uVQIhVoD8MS3tJQUFd%2FrAiEAnGSaV3k4plC2Vkk2zSSqR2WFYhtEqNviu4pbdQUwPx0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTmm0HJUlFj7JhZkCrcA9aCY%2Bgnwvunc59Ln0cp8efm19B8WrCOFE8flgvD3Y8npJteg2c75VGvqVaE%2B%2FgUq4LSqfqlP%2Fud9Shgr%2FgPPtz%2FRC1xQ5JtPR8GPZ0Oj2aU%2FfbDtF25Us89OxxsBl9j%2F4XDgfX5FHJAS3ghXPXVjHXC9M%2F0Jut7e8midayzgL%2F%2FMioAjgBOnUEe9LjsiEgWJMXcfwxEHHFmpC9U4l1EWHfi8Y8%2F%2FqMjJ%2FGymhk5mfgesKy6%2FB5P5YmGNzXPpxIDttjhfRwiPkdeYD1xxB47iF2tKc3OztvM7ynVSQFjFNduV2NKUOHCMEPRmuleSvErnY%2F5Zi0FumNziv0DAn8rOg3ZvH6JotiUrJvagyr7f7nkQupryQL1hrU4Tq7feguOeCQvco42DCrC%2FJflwLiaDJyZmi4wo%2BCYEGOQotzxrpTataJDdUwX1lTVkX0EE69NPtfGwfRyu%2Fuk1sI9GWuICP07ZwsAGhSKcUTE1nWQtkojUJtJKZKz4GkXfNQAM%2B6PGwchEJUy4FOMowtMBWzfbNgB0wLFIyQ08GWsBiLM48d8%2BgnHxisKh6Z6sp1704UJIXA3tc3ArHVDUuEi14yVwF9p5qMz3ymm9W6IFZ9%2Fb687xJqZBIpKO0w%2BZWpcMJmi6MQGOqUBp%2FIWo0r0%2BvnWTnhv%2FvKZo9enoZi%2Fmhd4DREieFNc2vSIyC1X9pf0poHxjJ4JKemY1F4OFkvmxGEwbmwTqOJfNy2dRMw8MqV9tMV0GOENJKZRgYQVv%2FWwgyzkHvMD3vPZjpYnMGjVTqMAEv7drL4O9bR6hu0kl%2FECTWG8XzUcldNu6Xm75DAZFWpXy%2Bk1QGpncCVdeDjGUmDsU3XCvGuPAG9aczYR&X-Amz-Signature=6cc813e2f3ec86fbf3b9c01427919afa1ba6f4b76b3aa3fccc98626d0bc3d686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPVEGK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQWr4mvDZ1ueWh2orriWSdEZdaX0MVaOCVgWAK8QmgZAiBk8GZeg9%2FlChuy83Su9I6aqbgY0rE7vSTAlMea45zqoiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtadtfbx7QAkK2aUVKtwD2Iw53%2F3GAAn5EcIOX8nvKneClBX5epvGq3wbgys5OKF496uDkEwHkMrhpJvP5s7DLzZlaWJBssJF%2Ff4ux3T5%2FMbKAnoCuku0vk2%2FLOTi85oJqXuQIfJ3YwOGI4rly%2FtBcAajYeVti1T%2FCCvepfmzZxvbKlGsBABeWZz1No%2FZlfVfnNbRiJ%2Fx8EzJmCY1H2c%2BCZIobfGspNmybsLEtiL%2B9iqdeji8IYmhh4BEZdl4O7q28CFZk9MZD8vGasoW7X%2FfeeDh05oENMtqlUQ7xRqChM237rtwi0jXx9biThIkbuEYtJPhoG4p6dTYC9mp3jIT7ICxDTtAbwzx6O1S2kkCL3ihhfLbgukWfcyy5Y5nR0rrPJv24H24TSCbwOns27BCG3jvgnB1Q%2BzsFwYxGukG6bxlVFli%2Fb1t1%2BCuAtYNq%2BWh9%2FsHOMig8VcGro2jMx6rbrxDOIwtm3bCvHRZlEaSTX5s1C6N%2BJf1c446I1ithDGAWqtNLVKOr0oekqBRhqpFTRo%2Fi4JZFdTmS8WUZ9RYY14QXbQJTNX3idyw5AXJLYjaKco5hVHGh70GvoDgY9X426%2B2fCbMIM4YRPGw%2Bwq6ccZRTBrYGfSoQnzwhuI1krZPPDLA0CaUz2iEXsww7KHoxAY6pgERVIfDKtl4XIW482ttTEAkzE5hfKTye6gUXkXPYlYK11c%2Bw2pwxt0MVvqSTR1pk4an689WipBnBEIgtPGPFffyxSkZ7cducpJXQ9zHhglkhBsduRzG7ifB9ibBi0GIiS70kqUcdG97Yu0UaNg27aWv%2B%2F6QeKBqfSx6Az0Hq56pbdrRGyQqZqKs0B9eExGaLrvwE454NctJaXmgH7KIueaFyF1S1LF3&X-Amz-Signature=dc600545b5e1a6ef7eaf6fb8d07c3e851a119a345c1e9e23e364623ccf8785ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
