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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7KCXMW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Bq6Dope0hry0xXenSErhJ1AYnHzBey6zRU%2FmIclLWQIhAKVVTxrxflDrSX1duD5SQFsuf8mrkwvchup1DveCCulNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6FTdJMRfVv4p0gMq3AMijWRNp9HUd9Rg7sDewdeRm%2FwtgxL14r7crnf66WUZBaQyp%2Bh44RP2FTLBWxN8KQd2r9YDH20aqmtzqhe8w2BtYwBuAlrMZ4bcnbwQN0GDSZpzHLXxvxSUL%2BdExAUEu%2Fd366HWBlre%2F5oF6chAHhV6aSRuJ%2BZgcG5ppLlw0lYToih17%2BHQelLcvBGJw%2B9u82HBsFs7IbILB%2BElRGvZW1OJlPttma%2BJ9VmgxDV19Bc%2F%2FSj1F9STHOBOgWUIHNpcQ7d5BlpbkQe%2BZjXjxopHe2d6XGTt6DrMWx9EMdVy9uzY9KRXi%2FJZjQBZWGwbZFmD9bnwXqBTqvDMGXbbRQYkqSUMzB7QUbpN4FYpo2UnVH31bveHDlAZYve8bPyBuRkwVQPnkDmDLaGc1uPPd1Zdxo5ZGYHGSF90MxXtA%2BQLI5V7Rh69y%2Fop6tbDPa0NhuY6Y%2FBp%2Fw4mEPrNy1ski%2FwcnHGFnrpq3g7dWCImKmCObjGQMpprTVodtHwTswN5Qe6fxbzstbhXx5Ka84ieonomoC86GLunpbEZI1r6vcICltuoCe%2BWC20BGzyZ%2BWa4oRR%2FL7Y9nsx4IDxgxb01jV8R1jfkSEvM%2BvuC0vyqGPAesKzUBaSz0uXzhMiOKFsY9DCjj9vCBjqkAahis259YhoW%2B6kjNxxeH%2BhEz6%2BZpKkjXnYPEVgAUh%2BNDwCGC5SzxiXbbltoGWTD1V4GaNEQD4%2BdvLHeyfNwdJ4LcCUeEG5cNjJV%2FhjvlErnTCaN%2B0lI%2FhFopapHJRz8iMw3FwJW6eVyfRaeMNIUFs2j8FQqY82PCRlNYw%2FecCBdPyFLrFWe3nmNBR%2Fn7xxfVUUIadk2DZ%2BSMTsLmJa8OCZ0C4rM&X-Amz-Signature=f291dd14ccfe95854c27552bb97955a13425c6876ec0f022909248347a69bb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7KCXMW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Bq6Dope0hry0xXenSErhJ1AYnHzBey6zRU%2FmIclLWQIhAKVVTxrxflDrSX1duD5SQFsuf8mrkwvchup1DveCCulNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6FTdJMRfVv4p0gMq3AMijWRNp9HUd9Rg7sDewdeRm%2FwtgxL14r7crnf66WUZBaQyp%2Bh44RP2FTLBWxN8KQd2r9YDH20aqmtzqhe8w2BtYwBuAlrMZ4bcnbwQN0GDSZpzHLXxvxSUL%2BdExAUEu%2Fd366HWBlre%2F5oF6chAHhV6aSRuJ%2BZgcG5ppLlw0lYToih17%2BHQelLcvBGJw%2B9u82HBsFs7IbILB%2BElRGvZW1OJlPttma%2BJ9VmgxDV19Bc%2F%2FSj1F9STHOBOgWUIHNpcQ7d5BlpbkQe%2BZjXjxopHe2d6XGTt6DrMWx9EMdVy9uzY9KRXi%2FJZjQBZWGwbZFmD9bnwXqBTqvDMGXbbRQYkqSUMzB7QUbpN4FYpo2UnVH31bveHDlAZYve8bPyBuRkwVQPnkDmDLaGc1uPPd1Zdxo5ZGYHGSF90MxXtA%2BQLI5V7Rh69y%2Fop6tbDPa0NhuY6Y%2FBp%2Fw4mEPrNy1ski%2FwcnHGFnrpq3g7dWCImKmCObjGQMpprTVodtHwTswN5Qe6fxbzstbhXx5Ka84ieonomoC86GLunpbEZI1r6vcICltuoCe%2BWC20BGzyZ%2BWa4oRR%2FL7Y9nsx4IDxgxb01jV8R1jfkSEvM%2BvuC0vyqGPAesKzUBaSz0uXzhMiOKFsY9DCjj9vCBjqkAahis259YhoW%2B6kjNxxeH%2BhEz6%2BZpKkjXnYPEVgAUh%2BNDwCGC5SzxiXbbltoGWTD1V4GaNEQD4%2BdvLHeyfNwdJ4LcCUeEG5cNjJV%2FhjvlErnTCaN%2B0lI%2FhFopapHJRz8iMw3FwJW6eVyfRaeMNIUFs2j8FQqY82PCRlNYw%2FecCBdPyFLrFWe3nmNBR%2Fn7xxfVUUIadk2DZ%2BSMTsLmJa8OCZ0C4rM&X-Amz-Signature=04223971b1ec2838d06a5445d86c6d3ab57236a51f22fa5722fcf44843488491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7KCXMW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Bq6Dope0hry0xXenSErhJ1AYnHzBey6zRU%2FmIclLWQIhAKVVTxrxflDrSX1duD5SQFsuf8mrkwvchup1DveCCulNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6FTdJMRfVv4p0gMq3AMijWRNp9HUd9Rg7sDewdeRm%2FwtgxL14r7crnf66WUZBaQyp%2Bh44RP2FTLBWxN8KQd2r9YDH20aqmtzqhe8w2BtYwBuAlrMZ4bcnbwQN0GDSZpzHLXxvxSUL%2BdExAUEu%2Fd366HWBlre%2F5oF6chAHhV6aSRuJ%2BZgcG5ppLlw0lYToih17%2BHQelLcvBGJw%2B9u82HBsFs7IbILB%2BElRGvZW1OJlPttma%2BJ9VmgxDV19Bc%2F%2FSj1F9STHOBOgWUIHNpcQ7d5BlpbkQe%2BZjXjxopHe2d6XGTt6DrMWx9EMdVy9uzY9KRXi%2FJZjQBZWGwbZFmD9bnwXqBTqvDMGXbbRQYkqSUMzB7QUbpN4FYpo2UnVH31bveHDlAZYve8bPyBuRkwVQPnkDmDLaGc1uPPd1Zdxo5ZGYHGSF90MxXtA%2BQLI5V7Rh69y%2Fop6tbDPa0NhuY6Y%2FBp%2Fw4mEPrNy1ski%2FwcnHGFnrpq3g7dWCImKmCObjGQMpprTVodtHwTswN5Qe6fxbzstbhXx5Ka84ieonomoC86GLunpbEZI1r6vcICltuoCe%2BWC20BGzyZ%2BWa4oRR%2FL7Y9nsx4IDxgxb01jV8R1jfkSEvM%2BvuC0vyqGPAesKzUBaSz0uXzhMiOKFsY9DCjj9vCBjqkAahis259YhoW%2B6kjNxxeH%2BhEz6%2BZpKkjXnYPEVgAUh%2BNDwCGC5SzxiXbbltoGWTD1V4GaNEQD4%2BdvLHeyfNwdJ4LcCUeEG5cNjJV%2FhjvlErnTCaN%2B0lI%2FhFopapHJRz8iMw3FwJW6eVyfRaeMNIUFs2j8FQqY82PCRlNYw%2FecCBdPyFLrFWe3nmNBR%2Fn7xxfVUUIadk2DZ%2BSMTsLmJa8OCZ0C4rM&X-Amz-Signature=863d220d75f972bf6cc210e47a45cb655dbce0a8a1ccea0dba0b9becfecf0f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX4LNPF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChsNhLcqfpMxzM2CPyHgXYAp9pq0%2FFDv8%2Fu0TuQMMsawIgCmJna625NXuz6gr9x712Jm%2FAdwepzQtresBbzlSFSPsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFGq1d2RajZzb9tHCrcA%2BGCLywys3l%2FDikenVA0HqlTaXoY98KEiBsdJVJfyTWiPKjAh9l7lELBYxMJ713QS6ZhzJp5WFXbCPUv9GivJwyDYdWmnpdKGhYTih%2FgeZhcJCJoT6y5FK1imOm0nRwhnwQEWZWIEXVOu8G6zFhVWffEF4d3L945XaeKUOgCm2A%2FAukLZ2GYsWYrpBNNNR9rVAZ0VEIi%2FQkWYSQN2BNrfcPSn5Yt0D3Meqg10h4YPzvipkwtmKk6Bl65ozWvDz%2BaLeL2drax3sX4HroJMLbgwhxniHAvGwlykZEyJrjinm0fOQnB6s4a6OStImJpl7QN8RAhyYw3Y48MWz63ZQ4Fu5UBqbZ8f5JkTGwc5FRpWsihyWAj2UdnFoofyNPGEOrbiYul%2FWta43ptcow%2BCgYn6RS%2BHtjKIGY6%2BAsxj6cA6Q4taQyn1ckt3F1khf0f5h0YAiTfjvSlufFPJinCfoNC9iXuWaN8TGvnbM9%2B%2F2iQ9vECTmuRlwDHLIbj9%2BJjK6ub68d%2Bv5SoAwMPq5p6HGJKTKvJ3kD9T1VA%2FjmpN4Ia38jOyIzeJTyT41f3J%2FbZBRFiaZKEt9l1gAjBS5oV2WLxKC8nma%2FOLyMAVx5pa6mPhfqOoSqHeR8jyLihWFq4MMya28IGOqUBDQnYEQ5CX9VunQSrrQ%2BJr41s7Vk4AT9EYfRK%2FBbW%2F2lbQJTJF2ewwPzh74EeTeQ6w5BEDoGWE2RAPefJPyp7tKSmwJScQ4GP%2B2s2tmg3thLEJJVCcNFYnEW5rLIBO6M20WsUubmWWCI8NSxSidbxxt2FAlLdgIrd%2FLKBXZHuXogBZI9S0rjO7g0G8aWxQaPuRTZsu3pvnj0%2BxnknfxlsoX8QxbAI&X-Amz-Signature=9e53e4b4fae9b9dfd38ee1d8d0bd3e895e64857c375295c57926e7c9746bd540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX2DS6J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjiPh7Aiis57BbdRdNw7w8sfiK0zeqTQVwP5zH9iRM3wIgedqDXjmonsBO4cjhaGmyyHmCV33sh7mkuUZ19T7KyYwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhjNdWwI0fpDqiIzCrcA7J5lcKA3saEJ9qltOOEAskoRdFGq%2B51gykvxgSXnORjPwlTGUKvIWVMbSMPCi1Ce7I5mtDwCUAazO3PqGPEOnfijhvCiVNxOav%2FzvPdv1GOESkeG481qwLrimZ74DsaCd%2BpvVawQfpJTbfk5nCUcnn5aZA6Fgn1RPKtaDLdQgaw8ozMid5J1QBIa7wtUXgbEd0yiJ0fj323CrPj%2Bnkx26f6JRkjar0yd2CnqABR%2FJPZ9LxstK2cqhY60Xt3yG8hiiAjM0OIwjhXr3NrYokoVHYuGY7AxV0nTUU9dCxDD7LoZwL1E1mZrT2LXhsSh5WKqV9MpC57BQZrZvgDWPkFpjUtAHr%2BWEJMpfyjPb0rf5fqoeVU1TsxUtJzP656nAeVu%2BjTVU8y8uVn%2FOGrZddHUP2w%2FBduiutAx7rIM0l%2F0H%2FqN09iNA6nvqYURIXnIapRJb0YfIYRM3Kv7orWkG%2Bcl7aFOed1Ux9FiU7broxk9NrLL30wgxQ2rNTZWGtt6AUE1cYOe9jajsqbNsMddUAW%2B1GgcI3DGOarvz8Ei%2FDo91CWOhjHLWRNP7KFXHKZKyfGpndzYNnqv4UxrA4D2S98XeBZ3Qbz5UaPdoJbLBgyVPs4a3suDq853YYiAhdeMKKP28IGOqUBFD%2FCqmn5noPhHyILdv3Rklo8aZun9JYT4qrEKnToHtNku7VVAFGSvGe3BePqsce12VxeQjMrpWE0cSh5NRupMZjzMOnqr1QzBCoCGhu1tdU8VHOCGbZK%2FQ6JzvTo0UWZMT4p%2BH9WCoAYOlAdbYumlczCJpsNzt9cQuKB3n1V9oJFhpBtZG8UrmW2nvMkLU%2FhYaXmNdurYShep10Ouu4A8gDA8Emx&X-Amz-Signature=0912935405879a3980da37f75d2b33d0e205134049e1ca7366462faed1b06d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7KCXMW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2Bq6Dope0hry0xXenSErhJ1AYnHzBey6zRU%2FmIclLWQIhAKVVTxrxflDrSX1duD5SQFsuf8mrkwvchup1DveCCulNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6FTdJMRfVv4p0gMq3AMijWRNp9HUd9Rg7sDewdeRm%2FwtgxL14r7crnf66WUZBaQyp%2Bh44RP2FTLBWxN8KQd2r9YDH20aqmtzqhe8w2BtYwBuAlrMZ4bcnbwQN0GDSZpzHLXxvxSUL%2BdExAUEu%2Fd366HWBlre%2F5oF6chAHhV6aSRuJ%2BZgcG5ppLlw0lYToih17%2BHQelLcvBGJw%2B9u82HBsFs7IbILB%2BElRGvZW1OJlPttma%2BJ9VmgxDV19Bc%2F%2FSj1F9STHOBOgWUIHNpcQ7d5BlpbkQe%2BZjXjxopHe2d6XGTt6DrMWx9EMdVy9uzY9KRXi%2FJZjQBZWGwbZFmD9bnwXqBTqvDMGXbbRQYkqSUMzB7QUbpN4FYpo2UnVH31bveHDlAZYve8bPyBuRkwVQPnkDmDLaGc1uPPd1Zdxo5ZGYHGSF90MxXtA%2BQLI5V7Rh69y%2Fop6tbDPa0NhuY6Y%2FBp%2Fw4mEPrNy1ski%2FwcnHGFnrpq3g7dWCImKmCObjGQMpprTVodtHwTswN5Qe6fxbzstbhXx5Ka84ieonomoC86GLunpbEZI1r6vcICltuoCe%2BWC20BGzyZ%2BWa4oRR%2FL7Y9nsx4IDxgxb01jV8R1jfkSEvM%2BvuC0vyqGPAesKzUBaSz0uXzhMiOKFsY9DCjj9vCBjqkAahis259YhoW%2B6kjNxxeH%2BhEz6%2BZpKkjXnYPEVgAUh%2BNDwCGC5SzxiXbbltoGWTD1V4GaNEQD4%2BdvLHeyfNwdJ4LcCUeEG5cNjJV%2FhjvlErnTCaN%2B0lI%2FhFopapHJRz8iMw3FwJW6eVyfRaeMNIUFs2j8FQqY82PCRlNYw%2FecCBdPyFLrFWe3nmNBR%2Fn7xxfVUUIadk2DZ%2BSMTsLmJa8OCZ0C4rM&X-Amz-Signature=34f77797e6f3f0061fb26703fd36d40a89aa331bb4b207a6dc4108b607bdef90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
