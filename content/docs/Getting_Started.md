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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN3NG4W%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8q4JW24JVxdcYOK1gxubXJvfiCYYXZ%2BwmBK6XnxIzlAIgVXUCIt03HbQ%2BqHnp%2BaJPo7W0uhIFIp7VlODh%2BuyM2b4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDmzj0ggTnxxtJDFLyrcA2ONOfa3z0o5zXF%2Fs8P740QC%2BidsyXzn%2FX6bkFCZq13AImmENDiwwqzRteg6ZfSiQXjzKbZ6EDkrphynzJBehL12zrQx1a5QQRgrN4d0V9EL6XPvLxbsPAJIzYAfjTior29%2BJtv7J7iD18upeX59jTxteFMSJOJFkota4%2BDk75iMOLl06lYACNmSO4glR6BdG7aNg%2FncFViouHJv0W5rR6Jabt6D4dasKIQmOW6BNbHampOxs0vczmkA3Us530ZfPhw9l2GMC8NLSm18Zlsc5RFHWcZNRe1nI%2BogeqdFvz0vvD19UMpuwCqrNR9jynsO1vochCSW8XK75kgjn8KJ83PbyaKAg6Eb%2FBiJQerT8qMdW5PgsXJYT9c1Yb5vraULHolIsMm040U%2Fd4sKYsxSdb78Ng3N3qIpo9HnkguCTNH8cWVz4TY3O95J%2F05J7gbsNicA5RIEmEK81gReEiPpVON%2BjrRfJnAaxLOfJtPnXXOWH5hOfTcgTzkAQbsriK62bl6DTWVb%2F%2FP8jfLCp2ptBKiApGU8BymVEEHWlKMBPZolu05pNQ6UVvqL%2FWZtKBS6V7qrDOhINcMVpMi%2FgeuEXj8BmZjbHwpaRZnIwruqBlxzE5gYjcs%2FWUOJwF%2FuMLGit74GOqUBF41rFkPjYYnqRv3KLAIiaWFu1UlRKnoiykJklwxfU%2FL1T42sjmb4d0R6gYSkn7g9RMNxpgkHSbg3L1KwB1fPSPUHghGAsC7LSsK9phpZZrHycu%2F3av5w50DBbk2B08QQYWhvk1np3B1WcI7lADCXdrqao1E9%2BfQVrX%2BVxPoRTUDbqIZh2Anm8qJEEANWwtF1pabt%2BO3uWPVJs3x2d4WJxPhvILoY&X-Amz-Signature=d29979baf559dc81922c37bbeff4b2280a469c6b89f4f4a5e83659da3d8f3cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN3NG4W%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8q4JW24JVxdcYOK1gxubXJvfiCYYXZ%2BwmBK6XnxIzlAIgVXUCIt03HbQ%2BqHnp%2BaJPo7W0uhIFIp7VlODh%2BuyM2b4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDmzj0ggTnxxtJDFLyrcA2ONOfa3z0o5zXF%2Fs8P740QC%2BidsyXzn%2FX6bkFCZq13AImmENDiwwqzRteg6ZfSiQXjzKbZ6EDkrphynzJBehL12zrQx1a5QQRgrN4d0V9EL6XPvLxbsPAJIzYAfjTior29%2BJtv7J7iD18upeX59jTxteFMSJOJFkota4%2BDk75iMOLl06lYACNmSO4glR6BdG7aNg%2FncFViouHJv0W5rR6Jabt6D4dasKIQmOW6BNbHampOxs0vczmkA3Us530ZfPhw9l2GMC8NLSm18Zlsc5RFHWcZNRe1nI%2BogeqdFvz0vvD19UMpuwCqrNR9jynsO1vochCSW8XK75kgjn8KJ83PbyaKAg6Eb%2FBiJQerT8qMdW5PgsXJYT9c1Yb5vraULHolIsMm040U%2Fd4sKYsxSdb78Ng3N3qIpo9HnkguCTNH8cWVz4TY3O95J%2F05J7gbsNicA5RIEmEK81gReEiPpVON%2BjrRfJnAaxLOfJtPnXXOWH5hOfTcgTzkAQbsriK62bl6DTWVb%2F%2FP8jfLCp2ptBKiApGU8BymVEEHWlKMBPZolu05pNQ6UVvqL%2FWZtKBS6V7qrDOhINcMVpMi%2FgeuEXj8BmZjbHwpaRZnIwruqBlxzE5gYjcs%2FWUOJwF%2FuMLGit74GOqUBF41rFkPjYYnqRv3KLAIiaWFu1UlRKnoiykJklwxfU%2FL1T42sjmb4d0R6gYSkn7g9RMNxpgkHSbg3L1KwB1fPSPUHghGAsC7LSsK9phpZZrHycu%2F3av5w50DBbk2B08QQYWhvk1np3B1WcI7lADCXdrqao1E9%2BfQVrX%2BVxPoRTUDbqIZh2Anm8qJEEANWwtF1pabt%2BO3uWPVJs3x2d4WJxPhvILoY&X-Amz-Signature=818ff68995e18adf38bcfbb90914a1dbbab08e28773551fd9a9a965671b66a92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LAASVO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCyTfe1eoobQKfgUjJ40kfIdjgGiezxYAzcYJ6ap7DvXwIgPz2oIPqu7Qqo7sA30MZdacDSvvF9IXRUjD79j7aKWtEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOzesr5jungAFChHJSrcA6St9YboilveE8tPcvJL7giwg7iBmBcaZngfFc1QAhymnvUTFx6iIdrF0oKq%2FTpKOiWdCApZt1YMkksoeVWBEsbvWsDZvyQZQ1HxeoXL05dE3bxyqHd2aTZvhjSjUtrewYitiO%2BegnBvmGpn%2FO6mNF%2FE%2FoFVw5eCy%2BjEU7NjaTu6DK6IbBAhx3XUPFhnSR%2FdaSR%2BmcB%2FrzdK1bTE%2BvAsJoofdSFDsCkAN7Ub4gyTkFEo7150lg7otzRYzfAHfCMIDBfMHu%2F5v1AFROBJSZVhSjuLSOwZhyHNA6Od44UJ4b4rJ9VAXD%2Furdyz%2FkEU1935pvORWMBCz4nTDiMQmJJ3FCyVmY6pa0a6sH9r2MUJpfavr1djfaydh1gxaM4vfVqVIdhrEFTvwStrdi9WhoLCKR%2F8JJUIV4Vboa%2FJmd6%2Fe06n%2FMFnLNXWRc7xHg7gWYMVz43CYBRifCGprSSgs1%2BB2xTJ2ZG4rBUllCkVhYnSZzRySK6g1GfN7JdFGAJ39G5uwRsBo%2BIYnxlpnYak1NNzUkXGGK94lLeFgTVLDTOs127hQaVjqsk%2BUWiJDHbIJwv5fpanlnHQh4sdBs6MU5mnO04jLFN80uIMAzZjfLMWOIt8XMq4KpYNnGOmMzCcMLDEt74GOqUBnl0oi6OmwcaxvoEtckwxC7dh1cobFg6bwqDkO1AyUesxWYTqHxd8mgOh0qIDnYgKmqldMyi7XuzHVbbo9i1KRx5Ryko6usbCfsbDn38nWjGUGjqnbCA9uNH1kjKxG3pbAoL6b%2FzoieuMUr4RZxQK%2F%2BT%2F2bqm9o8kdgv6v6VquJZFSbotj4093%2BXaMgs4LMs90IX3Xv99sQ%2F4PiaXID1PmA5mefp%2B&X-Amz-Signature=da0587f4955e26aa4017de144190a4459807dbedc85250550b37c7e790316779&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPFNW7G%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwqvyKqwAhi30a%2FT2B%2FNolDdX1bZA676xr7huI8Jk0xgIhANQ09XclLMiWCSyGWohKuVpbYlfCuqHAHA8SCzOYWThcKv8DCHsQABoMNjM3NDIzMTgzODA1IgySuCQrtPbZKREw3lEq3ANihhqNf1Y3wivzwyLw1On4OjKEbMu8t0N%2BwQfvQUmj4OFJcsn1cbzv0T7PMc0mieh%2FJqfEGXRoOEubefU5n%2FYgXzaLUfjcIgnMfW%2FVgu10PCpxVgnxryp1vPOJL9VtTqn%2BmOrncjAWuptNPB5OWzE39flw8Bpy04emMsqxy8EdWWxeqFSPsLhqqtaWW59pGFyKwx25LsewN4t8VtgGie%2B2Adw%2BCZXOK4Uuuza7RKO1wn3q3NqeSzjsOo%2FVyxcMOw9dUsdnK1%2BnJ5E3GDL19K9qAJJmJXh%2B0kwIHEtxzl4Gha8%2BPzePhpqguL2LK88fJQ8F1YReALwwba24dcfmRhu2cq9ivGLmNADkbTim%2BpZ797Ee%2B69mG6Q9MNkSPBBTSoEKK5gPsZOEfNlXDjgToJ6LM9lrw9JgMBXc47nVYo2u4glGkKnI9p3d1w42FsJanbvQIp0JJUJ33R1xHVk7tNQQsbivXNw2TelkfBG49syCjwqTBCQyT%2B3%2BG3Dt37azdVx9XT6hu50PqIKgMeyyOsAAe3p0mLAnNMkp7ArEC7U5pO%2B1TmlfDVGZDf9oTQRUUx6rO143wnnaznOGo7kEeMwgwF%2BT7dztaVpm8zf9T%2BuJAQZWbTQdXo5QoJxTNTDvt7e%2BBjqkAfVYAL5hr8DsJMGFdyB6eTY5vpV%2Fv1nXPBIR96GTXFgnHv3rru0rRYueU%2F%2Bt5miv1YjbNevsm5wmLf2RtGIFArUN0AtfYvsEyTTGJyQJrGtsxDM3SGBOweHpu9geNFriQf8ZsDkNZEI8tq%2FfG4TgTgcq1ROhBfTeR7ELG1wTQpPKDNFJbycU8PXb3CRniR8nIq1YcBefLlfO0Cm6vyNBTzJCkUUI&X-Amz-Signature=424cfb9c689689e3e134a444546d910fb9936a643166c92c6fa6094b98dc9e14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN3NG4W%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8q4JW24JVxdcYOK1gxubXJvfiCYYXZ%2BwmBK6XnxIzlAIgVXUCIt03HbQ%2BqHnp%2BaJPo7W0uhIFIp7VlODh%2BuyM2b4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDmzj0ggTnxxtJDFLyrcA2ONOfa3z0o5zXF%2Fs8P740QC%2BidsyXzn%2FX6bkFCZq13AImmENDiwwqzRteg6ZfSiQXjzKbZ6EDkrphynzJBehL12zrQx1a5QQRgrN4d0V9EL6XPvLxbsPAJIzYAfjTior29%2BJtv7J7iD18upeX59jTxteFMSJOJFkota4%2BDk75iMOLl06lYACNmSO4glR6BdG7aNg%2FncFViouHJv0W5rR6Jabt6D4dasKIQmOW6BNbHampOxs0vczmkA3Us530ZfPhw9l2GMC8NLSm18Zlsc5RFHWcZNRe1nI%2BogeqdFvz0vvD19UMpuwCqrNR9jynsO1vochCSW8XK75kgjn8KJ83PbyaKAg6Eb%2FBiJQerT8qMdW5PgsXJYT9c1Yb5vraULHolIsMm040U%2Fd4sKYsxSdb78Ng3N3qIpo9HnkguCTNH8cWVz4TY3O95J%2F05J7gbsNicA5RIEmEK81gReEiPpVON%2BjrRfJnAaxLOfJtPnXXOWH5hOfTcgTzkAQbsriK62bl6DTWVb%2F%2FP8jfLCp2ptBKiApGU8BymVEEHWlKMBPZolu05pNQ6UVvqL%2FWZtKBS6V7qrDOhINcMVpMi%2FgeuEXj8BmZjbHwpaRZnIwruqBlxzE5gYjcs%2FWUOJwF%2FuMLGit74GOqUBF41rFkPjYYnqRv3KLAIiaWFu1UlRKnoiykJklwxfU%2FL1T42sjmb4d0R6gYSkn7g9RMNxpgkHSbg3L1KwB1fPSPUHghGAsC7LSsK9phpZZrHycu%2F3av5w50DBbk2B08QQYWhvk1np3B1WcI7lADCXdrqao1E9%2BfQVrX%2BVxPoRTUDbqIZh2Anm8qJEEANWwtF1pabt%2BO3uWPVJs3x2d4WJxPhvILoY&X-Amz-Signature=b75b564db97a48e75c6e424da537ffb1113e240b96d2e0e61e776e8977558ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
