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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DXSHE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxAjyPZSdr%2F3uSfG2JXJ0xBTTVwMd2Ayqe3FlKVDIy9AiEAiw1JpvOhiKPK6lef3mXhf6Hfv5hUsDc7Dmsupo%2BrU5QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVnuyVKg%2FeDYYgtwCrcA3NtDX%2B1xmVe05nR7lbAIXYFsCPgu2SaiFbB63QTS2F6fioGQUXws1flvECRK75NVn9WlY2hzQAkrnwDygqfVUFh4QqQsLZh0G2RKzJ6hKzOl0R4JWE4I3qUL5YgMlYJJ0BmGv4xug9j1hxY8zE96TxIgvMVrAZYXqUNzF%2FqPSi1AhsgUjRXxKvima71bq8PWsdT05AvYes0yx%2F9OyCZQfwx1OQXCEEApQW09rYRG6TZrKxdYUOghgcyiLdKIpSub%2FMOXoOXmsjxfBKx8HUISpaNiQkBQq8QZ0j8IlTs%2BEk47lID%2B6g%2Fy1W3tZhS5R2H2ZoHR1Ot92FhLa2wDrmZcc85rd2PBbJmblrlxWBjQgpakXPkuB%2FE9bUM8tvwrqm5Prr3yCQHrn5zPyAHBhxvbTYGwKJyOa7SyU%2FmMV61vCH0%2BOAUMDuPvEWqU38rGVuNvuvMWvtilybX6qQDm8tm6WY%2BhPhse3YTV5dKCmx0v4BMfFCHHgwCbebeA4QaUcbfS2e3SSJyDO1CZRoReRr6lT8%2B9meMfjG2h9kIBUfDEsMi8Ih7pyIjyYRMf2lpYM%2Bek8q%2BRA1%2B%2BOpUAHwWwWFcOqK11uMI7i8UIzO8GqazIPM0KqyM4dGKxypRWy8vMP210cIGOqUBPnUIam5cpCshgUsa9vW7pdQLj%2B0XYF34Fb8M4qSKQxO9QLbdxFVXa00pTJWqtcZ2j%2FzaUZRMifGxpiUirkDHNJMrC9Al5r5G3MBtN6iTRac2xIV6c5MCIb%2FaNBJqpoMmeXiJf2XwItK9JDBg0R16p%2B%2BR489%2BceDEo7tos9B32tJTNRq88NWPUdN4S2bDwfzcvD9MVMBnkMdMPvNBwjer1XbZjJjz&X-Amz-Signature=a4f6a18450950d416d86d1bb6d5807d8b2aacfb2075c0ebc92803d514864b354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DXSHE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxAjyPZSdr%2F3uSfG2JXJ0xBTTVwMd2Ayqe3FlKVDIy9AiEAiw1JpvOhiKPK6lef3mXhf6Hfv5hUsDc7Dmsupo%2BrU5QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVnuyVKg%2FeDYYgtwCrcA3NtDX%2B1xmVe05nR7lbAIXYFsCPgu2SaiFbB63QTS2F6fioGQUXws1flvECRK75NVn9WlY2hzQAkrnwDygqfVUFh4QqQsLZh0G2RKzJ6hKzOl0R4JWE4I3qUL5YgMlYJJ0BmGv4xug9j1hxY8zE96TxIgvMVrAZYXqUNzF%2FqPSi1AhsgUjRXxKvima71bq8PWsdT05AvYes0yx%2F9OyCZQfwx1OQXCEEApQW09rYRG6TZrKxdYUOghgcyiLdKIpSub%2FMOXoOXmsjxfBKx8HUISpaNiQkBQq8QZ0j8IlTs%2BEk47lID%2B6g%2Fy1W3tZhS5R2H2ZoHR1Ot92FhLa2wDrmZcc85rd2PBbJmblrlxWBjQgpakXPkuB%2FE9bUM8tvwrqm5Prr3yCQHrn5zPyAHBhxvbTYGwKJyOa7SyU%2FmMV61vCH0%2BOAUMDuPvEWqU38rGVuNvuvMWvtilybX6qQDm8tm6WY%2BhPhse3YTV5dKCmx0v4BMfFCHHgwCbebeA4QaUcbfS2e3SSJyDO1CZRoReRr6lT8%2B9meMfjG2h9kIBUfDEsMi8Ih7pyIjyYRMf2lpYM%2Bek8q%2BRA1%2B%2BOpUAHwWwWFcOqK11uMI7i8UIzO8GqazIPM0KqyM4dGKxypRWy8vMP210cIGOqUBPnUIam5cpCshgUsa9vW7pdQLj%2B0XYF34Fb8M4qSKQxO9QLbdxFVXa00pTJWqtcZ2j%2FzaUZRMifGxpiUirkDHNJMrC9Al5r5G3MBtN6iTRac2xIV6c5MCIb%2FaNBJqpoMmeXiJf2XwItK9JDBg0R16p%2B%2BR489%2BceDEo7tos9B32tJTNRq88NWPUdN4S2bDwfzcvD9MVMBnkMdMPvNBwjer1XbZjJjz&X-Amz-Signature=a5948e8e68dda33b992fb82438691c17eec80dc89b513e97f437861397234503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DXSHE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxAjyPZSdr%2F3uSfG2JXJ0xBTTVwMd2Ayqe3FlKVDIy9AiEAiw1JpvOhiKPK6lef3mXhf6Hfv5hUsDc7Dmsupo%2BrU5QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVnuyVKg%2FeDYYgtwCrcA3NtDX%2B1xmVe05nR7lbAIXYFsCPgu2SaiFbB63QTS2F6fioGQUXws1flvECRK75NVn9WlY2hzQAkrnwDygqfVUFh4QqQsLZh0G2RKzJ6hKzOl0R4JWE4I3qUL5YgMlYJJ0BmGv4xug9j1hxY8zE96TxIgvMVrAZYXqUNzF%2FqPSi1AhsgUjRXxKvima71bq8PWsdT05AvYes0yx%2F9OyCZQfwx1OQXCEEApQW09rYRG6TZrKxdYUOghgcyiLdKIpSub%2FMOXoOXmsjxfBKx8HUISpaNiQkBQq8QZ0j8IlTs%2BEk47lID%2B6g%2Fy1W3tZhS5R2H2ZoHR1Ot92FhLa2wDrmZcc85rd2PBbJmblrlxWBjQgpakXPkuB%2FE9bUM8tvwrqm5Prr3yCQHrn5zPyAHBhxvbTYGwKJyOa7SyU%2FmMV61vCH0%2BOAUMDuPvEWqU38rGVuNvuvMWvtilybX6qQDm8tm6WY%2BhPhse3YTV5dKCmx0v4BMfFCHHgwCbebeA4QaUcbfS2e3SSJyDO1CZRoReRr6lT8%2B9meMfjG2h9kIBUfDEsMi8Ih7pyIjyYRMf2lpYM%2Bek8q%2BRA1%2B%2BOpUAHwWwWFcOqK11uMI7i8UIzO8GqazIPM0KqyM4dGKxypRWy8vMP210cIGOqUBPnUIam5cpCshgUsa9vW7pdQLj%2B0XYF34Fb8M4qSKQxO9QLbdxFVXa00pTJWqtcZ2j%2FzaUZRMifGxpiUirkDHNJMrC9Al5r5G3MBtN6iTRac2xIV6c5MCIb%2FaNBJqpoMmeXiJf2XwItK9JDBg0R16p%2B%2BR489%2BceDEo7tos9B32tJTNRq88NWPUdN4S2bDwfzcvD9MVMBnkMdMPvNBwjer1XbZjJjz&X-Amz-Signature=c1a981312fa127e545a8d0e69022f7cd88c720ed549ec5dfbdccfdda50cf643b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7R4QMD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFZorOIN8HlJ1p%2FvIA6gpm6KctJjzFghqUMZKl7fYbOAiBdjioxvaLmr5HtnJTiPtTFlE2XFyRgQ%2FBySHteTW%2B5uyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVPxMRehNp%2BunmzKiKtwDZEPrhoHYhAEwbK5G%2FeoJoCA4bujdYkomqpKpW%2F6iFwxRGHIS7moMqXr0aOCwlP8CRhu1xsAF8h9BWlaV1Dzy37mAVOjO2ruYMaUqLArxsPNIqkF8J5n%2BQ8Ih9fblU3PlZ%2FTQ3XqmfcFC61AlfB%2FwpDjwAFQgtI1qngzMe8f38dXHjyu8AURtfqZwEXv1uavitQkHyhFD5CI17c7zDmED09xkbdGcxY%2BE%2FVcUnQ3cPNyynGJt8UaNOYtuEtb0RSvbrxTWiQp2w4eaMZj%2FTcRGw6I89NZ4iTd%2B6OBmdkO8KdTf%2BZk%2FH%2Bgz12JzomMgU%2FVzKQoQNKEwP69w3tqQEHBMukXOEYuYLPM0iy%2FqRg4AVautFGDZL6Yx8hNXroeKCxcGRE5hS%2F34PxMI%2F5MaWtH%2Bfv5ugQeM%2BsGGKmlx7mI%2BsZQhIhPdUvFAdXPPtkTeOu6D4VLjVhNFQehB3%2F2xQdF7GY%2BtUhs4Qw9nTiKftKQuJzCHEDsxJXc%2F2lHk%2FQlzWgP0di68x9wXcyeFvSA1PTF3nJGezR5W3Mo6C2wskJz0ZkypVt33QUFqi1YfeFEE%2FFNqCCbWUBYuREJk99ec6ldmxTk0tMM%2Bp%2Fdv80jLpw2lC8DQ9OYfGo8%2FM4MtWFkwsbbRwgY6pgHyIv9rbeMihD5B3DcbP4f4z7r%2FTdA%2F0u2RJ0lprbsJYZj6DmruvDyLwprT6byf7B%2B4qRBXz8Gvq7rI2qiuYA45Tj88fggYBGv6IwSzPCtVMQaXcSTVYxjz%2FLPW4JqimuKF6cJUAWvIm1NIkstS0J5i6G30u%2BGpEU9YMetC6SQm3SY5Aej178SzeS68qOFTQb3%2F3nmQnLC6%2Bax3p5eT1Qx4DKGfRqDW&X-Amz-Signature=5c3371c90873d85dcf943211efaea1fb0715ce7679d9e58ccabc15aaf952c28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MFHUU7Z%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmSe0wLUyQ7zAqvgcWqnyyuOcdiTdMABxbF8X7IujnXAiB7vjJES018Qjeif6agVTyqogReTzawRH7vVmjby%2FYM3iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVxOBRP3L31BQhbiKtwDB7%2BfQh%2F%2F%2FFVwJLNvwqE75r%2FiqJ4%2FuLO%2F6jPUUdu41iydQDUNKOWi7x9kCECLKfz9r2Ixhs%2BMO1PLCQok1YYUwSl65b7z%2F%2F42KfACeBE%2BGUdN%2B%2FfSg5Ui0WnYM0D6aocEt8CdmbHTqSx4E3eQqFxRfoBvbpx3O5qqCRITzJwaC9CykChlaZ8OgyYJTM3U%2FBG4GX15Rz99upGbCF5Q75qNy88Xr3N3%2BjdgoSgVc3EcM1d75HohQ7Etqo0ZvA8umz5yMHAV44YgtWjKh16FiKyV73vrZnctp4s7D0ydK3Dl9T1qyR4GOHf%2FNZ1DdcOImyvvC2IVGYl3kf19ZEwGkzPPdcImx4rTtoSEIOqG2Yv%2FifAmJcPXRDxSDCq1jpai3a%2FrgyzotG27%2BW%2BJUf2IA4v6MQWNeFiJK1k3IOJLKg7YzIl1ypAH52dpipgwLByD0qSQD3tZD2QOW5dtwqI3YK3gSBMHQVRweiGKVvF%2BWD%2FGdBLaCGDacxzg4oKJhJWewrHFkJWRY%2Fnsqe6bYLFvZR3IaX5CDx%2B7QdGGNSiyVtZoHpaLIe%2Bxy49%2FUREsv8MmW1IWTA79i3ps8x%2FZWgXTNg9%2FtYhuHVNTQBAq8529r6mBw5FoEiDUmqVfOWWm328w9rXRwgY6pgHRbSwKXUgHqGyqHPxac%2BADQjinrBcsTEmScvcH7sEKirWqumNHsfPJ1TLeVqgVGpWby37IaAICOUVTI%2FUPEK%2FvZF2EmfLfz0CyvaAfELHkbMt5FUrubwPwn9uE%2BtDwOGOdv4HgiPTezH1hbpQUxSt0lK7V%2FpEiD7FuLQ695pT2cFK61KHuS%2FIqv7skFUjgLpUTuGyMpVo4rybtfA5maRxgZ5cJOzGx&X-Amz-Signature=600d1af1acaad8b2c81a94594ce04a0109bd4ea42ae4edadd43cff720f69fbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DXSHE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxAjyPZSdr%2F3uSfG2JXJ0xBTTVwMd2Ayqe3FlKVDIy9AiEAiw1JpvOhiKPK6lef3mXhf6Hfv5hUsDc7Dmsupo%2BrU5QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVnuyVKg%2FeDYYgtwCrcA3NtDX%2B1xmVe05nR7lbAIXYFsCPgu2SaiFbB63QTS2F6fioGQUXws1flvECRK75NVn9WlY2hzQAkrnwDygqfVUFh4QqQsLZh0G2RKzJ6hKzOl0R4JWE4I3qUL5YgMlYJJ0BmGv4xug9j1hxY8zE96TxIgvMVrAZYXqUNzF%2FqPSi1AhsgUjRXxKvima71bq8PWsdT05AvYes0yx%2F9OyCZQfwx1OQXCEEApQW09rYRG6TZrKxdYUOghgcyiLdKIpSub%2FMOXoOXmsjxfBKx8HUISpaNiQkBQq8QZ0j8IlTs%2BEk47lID%2B6g%2Fy1W3tZhS5R2H2ZoHR1Ot92FhLa2wDrmZcc85rd2PBbJmblrlxWBjQgpakXPkuB%2FE9bUM8tvwrqm5Prr3yCQHrn5zPyAHBhxvbTYGwKJyOa7SyU%2FmMV61vCH0%2BOAUMDuPvEWqU38rGVuNvuvMWvtilybX6qQDm8tm6WY%2BhPhse3YTV5dKCmx0v4BMfFCHHgwCbebeA4QaUcbfS2e3SSJyDO1CZRoReRr6lT8%2B9meMfjG2h9kIBUfDEsMi8Ih7pyIjyYRMf2lpYM%2Bek8q%2BRA1%2B%2BOpUAHwWwWFcOqK11uMI7i8UIzO8GqazIPM0KqyM4dGKxypRWy8vMP210cIGOqUBPnUIam5cpCshgUsa9vW7pdQLj%2B0XYF34Fb8M4qSKQxO9QLbdxFVXa00pTJWqtcZ2j%2FzaUZRMifGxpiUirkDHNJMrC9Al5r5G3MBtN6iTRac2xIV6c5MCIb%2FaNBJqpoMmeXiJf2XwItK9JDBg0R16p%2B%2BR489%2BceDEo7tos9B32tJTNRq88NWPUdN4S2bDwfzcvD9MVMBnkMdMPvNBwjer1XbZjJjz&X-Amz-Signature=10043d474eb66a15087eb6fb42f1adf2d110072aeaeca180ef899ca75036df77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
