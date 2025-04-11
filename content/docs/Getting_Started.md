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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWPK3N6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAMfTdHygpY0mfjDrxJOEHnYZXOh3SvYquQ8ROWXoC3lAiEAo1SryVVO5v8d9rQS9%2Fsy7bfJD%2Bv%2FRcQ80%2BT42gfyV8IqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYu%2B8K5t6SXjrDAeCrcA1%2B%2FigzVQGxmagaI%2B6cJ4jY7dhOTihzk8ig9wtKUsavr9SezVOVEaogM7daVcHPAJWgUmQPnjzh8dh%2B8tzwlkRfmIUD0dGlAF4eJsxD9tUflPP5Uoacxv%2Bj7JMHvVfhAXjVWiLqBaTXxZ43LMO1hPUPtn8dDGSbE2AgMw2meFzZb2V1wWpgi2OS77y8sL6Y1BD9SZT%2FUeLTWoJOFhkVapBE56GjVgXBlNQZfjcLWjsb3sWPMcUxnAQoagn%2FtOXaHsdtkzOL3AVoGshKuKuuY4GiDlBTdSfNIbtFWU6cGo0vktdDgZpNfCp6yYYSGJSL7PbHq1nsA%2F6oHy6mbm%2BC%2B0L6vJ8zHEiJyvVauW6Cpj1jKKYCXu7ERa1A8OTmRyAZauYtokyMhbiASDleBiEpmFDxySChDJQI9NXm031DTr1fkI0m7Z88yRMypgzmSK%2Ffdphd4%2FfIAoAjFvGr0bC9jPgNv5J2lv4xyQJV8TlfZDxS18pQ7Mfv01EEfzbfYTPRrsOF54H8Y%2BEkCycj06EQvwU75VwQgDOjHXIjyLTL2eZgokkx0G9P4OVYNAxjnnw22jSjOHHeJ1VWkJMpXz%2Fs5WtF9Cp1IGn4lLcnvCz1eGXpuvAssvnpvcrqg6lp1MNnK478GOqUBf0vGwLet3elYUhPTHWiRVsJs6lW8VVDjATUraXeajkt5iWVlW%2BwASrJp%2B%2FW%2Fl4ESC%2F7oyn%2F153bt6gq5qOlLVv4Uj2NSkiPehScvQyjUc2WlzwcexpTKiOH3jXT78hhxeF%2BMwdZ4QsxQz0STi0OIjK6aNlxPNZPmxZVfLV31DDpWvnEWL6uc34eK3vYTtw%2FGSeqzMPsdfzZa7Md5miYqD%2FVW6dMx&X-Amz-Signature=cf90231dc74786da1994538bd4dbdcab320ae8b5923fbe044dff279d19f12f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWPK3N6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAMfTdHygpY0mfjDrxJOEHnYZXOh3SvYquQ8ROWXoC3lAiEAo1SryVVO5v8d9rQS9%2Fsy7bfJD%2Bv%2FRcQ80%2BT42gfyV8IqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYu%2B8K5t6SXjrDAeCrcA1%2B%2FigzVQGxmagaI%2B6cJ4jY7dhOTihzk8ig9wtKUsavr9SezVOVEaogM7daVcHPAJWgUmQPnjzh8dh%2B8tzwlkRfmIUD0dGlAF4eJsxD9tUflPP5Uoacxv%2Bj7JMHvVfhAXjVWiLqBaTXxZ43LMO1hPUPtn8dDGSbE2AgMw2meFzZb2V1wWpgi2OS77y8sL6Y1BD9SZT%2FUeLTWoJOFhkVapBE56GjVgXBlNQZfjcLWjsb3sWPMcUxnAQoagn%2FtOXaHsdtkzOL3AVoGshKuKuuY4GiDlBTdSfNIbtFWU6cGo0vktdDgZpNfCp6yYYSGJSL7PbHq1nsA%2F6oHy6mbm%2BC%2B0L6vJ8zHEiJyvVauW6Cpj1jKKYCXu7ERa1A8OTmRyAZauYtokyMhbiASDleBiEpmFDxySChDJQI9NXm031DTr1fkI0m7Z88yRMypgzmSK%2Ffdphd4%2FfIAoAjFvGr0bC9jPgNv5J2lv4xyQJV8TlfZDxS18pQ7Mfv01EEfzbfYTPRrsOF54H8Y%2BEkCycj06EQvwU75VwQgDOjHXIjyLTL2eZgokkx0G9P4OVYNAxjnnw22jSjOHHeJ1VWkJMpXz%2Fs5WtF9Cp1IGn4lLcnvCz1eGXpuvAssvnpvcrqg6lp1MNnK478GOqUBf0vGwLet3elYUhPTHWiRVsJs6lW8VVDjATUraXeajkt5iWVlW%2BwASrJp%2B%2FW%2Fl4ESC%2F7oyn%2F153bt6gq5qOlLVv4Uj2NSkiPehScvQyjUc2WlzwcexpTKiOH3jXT78hhxeF%2BMwdZ4QsxQz0STi0OIjK6aNlxPNZPmxZVfLV31DDpWvnEWL6uc34eK3vYTtw%2FGSeqzMPsdfzZa7Md5miYqD%2FVW6dMx&X-Amz-Signature=7521c297b7ee471658a3fd2adf3b68eace0b8f8df2e587e6c68bac21a69d3a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLSPH57%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDmfsWDZ5a23GMP5vW3S0tlLUTQC1TzEU%2BcPoGoGPtE8wIhAO9jXbs0aqYoXMHDSqhaVTLgGB8YHxIGZtC7ORVzMdzpKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmf3hbINSZ0LIHWAoq3AOiEgeKLE9gYxGkxT07tFJAFTV4Lb9ck1XergtOARYV1b%2FeE4VvKI7J3XwYFLRtTTBbXTTqcoZ%2F8%2B%2BM2dLfAvU%2BzOAgNiotyFPMZknvuHnV2OTIKL8zmTrOs0axXbEJLD7WZo6TX8XQT5wTrQMw%2BHPFgKeelqlY75rTvtvdH0sFzQMFpIJXsSHulrPVjydkfPlTOI%2FtRQJthGoRBvtf1u0L%2F%2BKRvH3lSfqUMjL2a8LuBPFMPvvLWPfd9bHEKKbBX6gJjDmOefAKMHcWdXg9RRN%2B4an4ORGe%2B1ybqQ%2B%2F5GhOh0fKSrQYCHzGrKSpRndla8jLZ2IF0CeSoXB82Fhyc5y%2F4GX5v7gB3uvNtJY1swWhMs8MTB9DXGG0mMxQuMNIrB0dt99u6dFg6UYoPYkQVEnJ209peIsBRTkWBl7%2B2soDFBJR%2F48y%2FefGlc8u%2Bs0rArtCOHKZhqykVmiDDk8e3I04wLHQQHC9SMIrRUfiSsEc6RprgQ76ANTJ9KEdVkYesgXTFeY4uR5GYOwxmyIAeD%2BW0MUJV0ms7lZHJZZGYqRYK1I2ct9kSY%2BZPcd0Jj3K5HjU%2FMgCAHXp6jqYj3DIccu%2FGyDqPvSkidQw48%2Bqy6NZvmEQrpu9wVQvRf%2BVTDDEy%2BO%2FBjqkAXyK2T%2Bl3KPQx4676yLIMdZ0wDif2RP%2FsAudV3xPLlZVdhh3tyerUomFnZGyzsDofadwDCzT6eoGs7fksK4sYcgXBy6MqMuerPFXQzdX%2FjZdO7O%2B%2BFfL9Jez76e6t%2FtOFwv20aTa1DSHA%2BGsnF95qYc0%2F9iL3c3sFvLDm3yHfAfMs%2FK72fxNDXwkqTzq073pVPmNK2nxTSZSJr8GTWi7FQ9mu2cq&X-Amz-Signature=e4ef752aa44d1234dbbcec21a24be296693a4c92e4d6d6a6b57f9106da1c6f17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4DMBRO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC3Izt8syesfC%2BCkL0VVfN1un2WhwksTRXu9Zrotz9yDAIgNYtsQugvk%2FVyYlX2W50fyy%2FnPQb2s6UXMlTNE8RPK%2BsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUbZxsR7sDD8XfwhCrcA4DAPPgtOWzgyUuPeNXpXWZ%2FbgddbW04NE1r7EshKMVoTc3YS6JKbpWsIx3pMdAjHXAP1JxbW0qCWiyaHaRA4Cth8A%2FjDrEcGr%2BiPm8uGSyWUVuGDf0%2BOb9i7kdE3F%2F4fWNbdWDeCJGvqceZnF%2FDonXC6Erh7CfrKMn5Bup6KTo7fmEQUyOl9d8xST1pVOHzf4RCDu%2FadsrjfL7CibUhncOS9tp1wCv9lNIdXF8lwjegds33WWiTc2Q1hT33nyoRoQm%2FOrjbRfC0YH9uwe4%2FtzO%2F7xGHODWJb0dzF8reUB8P0M7QYZ5bsA6qetVOYuXq1LV%2FbTW44TOphG6ccNwUlTa75Z%2Fi%2B5jXjCy2RETh24%2FCHsKzDll5olVJCfFCvua6Kjk9s9t%2BsfpIo2MMdoJM%2Faap4oF7UQ6tirvIhsvNK74qCpQ8EUXMhVy%2FeSXmTRrBP5eDOx2HLKv7CNSg9%2BCkJo5uE9TnxbLAGJF1QZiXO7tq5zASCY5RSw3OAMB3do%2Fcxnpf7hUyiLXaQJHfqbctdTRtdg74JzGVB7ahYlnHUFBxBwG33kJiPCF781qaVAv5nu5DlslYw4Ikk3s8zF8dScgxfTYwRhTPK0szaPpehhCWK0tWpGY6gMUVla6%2FMI%2FL478GOqUBFLEN0kUC6Zb2PnY1QQ50Qdv9mysJR%2Bbzq1TB8StcCR%2FOvBEKbHewLUg7pvh4TNXWxXZdO3dayRrJK9IpU3nV2I1EU9FIjqPXvDV%2F3XTE2N9LJBfZp0PZ32X4%2FUSwkkZl7pkWg591OLiFpleIpySXVvihawzd90LvS6v2FubX57r65DM7OfMrCUdvYnjO36lisPSAuVOjNNTXbVX4MPygLHekdVmW&X-Amz-Signature=b84022f75f01f6e709335a05225444d897406c956c3e0e173ee44b1a13643626&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWPK3N6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAMfTdHygpY0mfjDrxJOEHnYZXOh3SvYquQ8ROWXoC3lAiEAo1SryVVO5v8d9rQS9%2Fsy7bfJD%2Bv%2FRcQ80%2BT42gfyV8IqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYu%2B8K5t6SXjrDAeCrcA1%2B%2FigzVQGxmagaI%2B6cJ4jY7dhOTihzk8ig9wtKUsavr9SezVOVEaogM7daVcHPAJWgUmQPnjzh8dh%2B8tzwlkRfmIUD0dGlAF4eJsxD9tUflPP5Uoacxv%2Bj7JMHvVfhAXjVWiLqBaTXxZ43LMO1hPUPtn8dDGSbE2AgMw2meFzZb2V1wWpgi2OS77y8sL6Y1BD9SZT%2FUeLTWoJOFhkVapBE56GjVgXBlNQZfjcLWjsb3sWPMcUxnAQoagn%2FtOXaHsdtkzOL3AVoGshKuKuuY4GiDlBTdSfNIbtFWU6cGo0vktdDgZpNfCp6yYYSGJSL7PbHq1nsA%2F6oHy6mbm%2BC%2B0L6vJ8zHEiJyvVauW6Cpj1jKKYCXu7ERa1A8OTmRyAZauYtokyMhbiASDleBiEpmFDxySChDJQI9NXm031DTr1fkI0m7Z88yRMypgzmSK%2Ffdphd4%2FfIAoAjFvGr0bC9jPgNv5J2lv4xyQJV8TlfZDxS18pQ7Mfv01EEfzbfYTPRrsOF54H8Y%2BEkCycj06EQvwU75VwQgDOjHXIjyLTL2eZgokkx0G9P4OVYNAxjnnw22jSjOHHeJ1VWkJMpXz%2Fs5WtF9Cp1IGn4lLcnvCz1eGXpuvAssvnpvcrqg6lp1MNnK478GOqUBf0vGwLet3elYUhPTHWiRVsJs6lW8VVDjATUraXeajkt5iWVlW%2BwASrJp%2B%2FW%2Fl4ESC%2F7oyn%2F153bt6gq5qOlLVv4Uj2NSkiPehScvQyjUc2WlzwcexpTKiOH3jXT78hhxeF%2BMwdZ4QsxQz0STi0OIjK6aNlxPNZPmxZVfLV31DDpWvnEWL6uc34eK3vYTtw%2FGSeqzMPsdfzZa7Md5miYqD%2FVW6dMx&X-Amz-Signature=76283771af5d189e20b08a424640eece02fbded75f92b4de999c670858d89188&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
