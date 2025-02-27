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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYDDYFV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFxZARd4bz0HEQsTvOBVGo04xYEVSr9g5Y3jl0ZONVOGAiABx5zsRm3nDHUBa0z3wOHsWxkUWsU2sYQeMsF29ni5Eyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOrl9cS0mcYnG0MMYKtwDJ9v0iD8Ank6MQ3CtXgyr5smNlFtdVfHbeP%2BI%2B1hT9r0yYro7ULPx21WF1wPmXMLpQ%2FN7PyeAga4K2q2aDtqxLwlaZEqeFf7TEdPu6b1xWnsTNIzu4FNbBPzOt7H70fO%2FoDmhZ8G1f0M3o1JQKH2iC8JOYrGQ7XYhbWcMqjWZeTw%2B%2B8%2BFyG%2F0l9Zq%2BQpLjkFyogRNRA9TlKqSqR6SNxkeNduCxSRKkAzSe6ooA%2BaxZyzVplwuXYhqUCq4vUjh4jjZmrXe5Nr6kplRS15VLs3HoxP3%2B2IQSi1xgnZBqac7UE84SI5E%2FaryH0654Ohft3RLeUVRMM3k1Q1nZLeB7nesDkWWW6IQb1UCS%2FcMFkoc65wLSzxYSpo8B9A6Dr0gta5RoOAdK4opS4abW4CR9TmYomFWAlYNdmrErFbcRKQM9EBr81URoi3m%2FpKIaovou2t50ZyIV3K3uuA6xIOF8npHl3Gkr147X18X8kAKE%2BuQkyAiltI%2F%2Bs7brh%2BcTkY3m39xXZRxPuDwGyLTEPDHdLj7LP%2F4mq%2FWNxggiTrDaRaNaZn81en9AMnwmv%2BGlYCgGUdvL75uvkoD4irLQxcQHwHsQyyao1XIZmiSIQAqcbz14ZQCW7UGooDQmH%2BJzTIwmdKCvgY6pgFe1DMefc9wds4XuqNXm57jgEwZaYIKHBJQIyhebYmJoJO0u0Sqp%2FrAEVwpWxXxCNERLwzIy6xpOqxkuuSFw1UWp2BoHdBFcg15rQGC54YOrS7FaSWljzA1fGZ5Mxvq3TlpaonY1dlYPXDjIhfbxYsdqyzaJv%2FVk6g28uMGG%2FbV5uz1SK9Lv66zwIlooUzAxmYk%2Fz3SivPI7TA3%2FnkLYTzHaw4Y9fQx&X-Amz-Signature=f18dfb9a65eff514622eb7bfdaf7eceb21c8c1b4e83486eecfdc415edd238a31&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYDDYFV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFxZARd4bz0HEQsTvOBVGo04xYEVSr9g5Y3jl0ZONVOGAiABx5zsRm3nDHUBa0z3wOHsWxkUWsU2sYQeMsF29ni5Eyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOrl9cS0mcYnG0MMYKtwDJ9v0iD8Ank6MQ3CtXgyr5smNlFtdVfHbeP%2BI%2B1hT9r0yYro7ULPx21WF1wPmXMLpQ%2FN7PyeAga4K2q2aDtqxLwlaZEqeFf7TEdPu6b1xWnsTNIzu4FNbBPzOt7H70fO%2FoDmhZ8G1f0M3o1JQKH2iC8JOYrGQ7XYhbWcMqjWZeTw%2B%2B8%2BFyG%2F0l9Zq%2BQpLjkFyogRNRA9TlKqSqR6SNxkeNduCxSRKkAzSe6ooA%2BaxZyzVplwuXYhqUCq4vUjh4jjZmrXe5Nr6kplRS15VLs3HoxP3%2B2IQSi1xgnZBqac7UE84SI5E%2FaryH0654Ohft3RLeUVRMM3k1Q1nZLeB7nesDkWWW6IQb1UCS%2FcMFkoc65wLSzxYSpo8B9A6Dr0gta5RoOAdK4opS4abW4CR9TmYomFWAlYNdmrErFbcRKQM9EBr81URoi3m%2FpKIaovou2t50ZyIV3K3uuA6xIOF8npHl3Gkr147X18X8kAKE%2BuQkyAiltI%2F%2Bs7brh%2BcTkY3m39xXZRxPuDwGyLTEPDHdLj7LP%2F4mq%2FWNxggiTrDaRaNaZn81en9AMnwmv%2BGlYCgGUdvL75uvkoD4irLQxcQHwHsQyyao1XIZmiSIQAqcbz14ZQCW7UGooDQmH%2BJzTIwmdKCvgY6pgFe1DMefc9wds4XuqNXm57jgEwZaYIKHBJQIyhebYmJoJO0u0Sqp%2FrAEVwpWxXxCNERLwzIy6xpOqxkuuSFw1UWp2BoHdBFcg15rQGC54YOrS7FaSWljzA1fGZ5Mxvq3TlpaonY1dlYPXDjIhfbxYsdqyzaJv%2FVk6g28uMGG%2FbV5uz1SK9Lv66zwIlooUzAxmYk%2Fz3SivPI7TA3%2FnkLYTzHaw4Y9fQx&X-Amz-Signature=4d279143f845fec2052000ff78a6deff5edd24cce1b60b4a178fb296e46abb93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOYCGZ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHmDIG1WyX2pbgw6MK1Vq9D1qeEgb14Xi09%2FcmO%2B6M1fAiEAmZrgcG1SA7dCLS6vrLL2LXk1D67vn0B9FUTR9Xroj1gq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKeYSXo1oHLe2CYOOircAxzgcr1yYpQQVxWaXbkSMA%2BxmG5PKUyIhgHTY%2FFyBt%2BzEckb0CJFqVDYHeYIubJ5leRbfucCD6Qrs9ED9KubElpAt7poZc7V%2FU7ekuVCfy5iPJ30gD7NLory%2FHkH36Ex2XE0I85wYhduwtG0U6WmYS1ekZgjH6Yzb6IyhvkjJjIdX%2BhfSlz1dw8WDUnOqON24Y%2B0nZTexN%2BgShjzugll%2B5uOmiycUVaX73bVG3b%2BHa%2FdEOHLCfCEtQARQNy3bRT6Wk4vU6b83lCLzMHGU5xQRB1Vr5QKpN9RQSkp8PSjoScMj%2FW%2BMACLI3t5m%2BlP4VAntbgxI3mCvQOmdq%2BQliQ6399Vrdxyu1BEsw%2B%2BKYTGEAVxH9s3Sr142n7RWRky4LyvKRqNYzunPLy1vL2RxKTUGYN9pQyqU%2BGx25AbXKPiugBZ0gHMvmexQTE3XWkXM%2BE%2BDPX2BxQ1lK77moTYZf6UFVI5%2BlxWaZDtWIl9TD%2Bsdhpx%2Bu5YP2fm366F2kJxKHrJr%2FJ0myrt2LxBi3sk35PRstLcl65WGap5QiwXpWFlGd15e3hzCNZa2t8r3htwt3C5YTpijQYQ1IOPkddf9SRniy4COSUiR6mWSuZVC7BqzTYvTnscrVRTrL5wln3UMMDSgr4GOqUBrklPNEtRANnUTPv5LAUu50ILaFrZzr2mdUTXJL0z2Joc%2BUqIsVFnMjsIhbkQBBgVmRtRVsrKp6xpCI%2Bf%2FFgW8kjQIgNh7VQLAdqazaK3n86TIWS5QsC1tgWKzaS%2B1Q3KId7CIHeJX6MjtsVqLAEOJ%2BJ1HCDgsf%2FwkDd19KHL7kWqXYE4B8PYY9KrTAuuITrkRKNg%2FdVzyo6UMk3UVNX0K6x%2Fq%2BH2&X-Amz-Signature=29cbff4c8f2ab50f0d5a2c32c9279159c270636c374c5897638748fe3db34d79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLE6QYAE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCmpxSOxeZQ3i%2FCQmqbPGtvHfiCKF5innJcf2rm0t2fHQIhAIhu1yOclJst2%2BdyVSQOtwtju6Cy0MXEK46smIR5qDIZKv8DCHsQABoMNjM3NDIzMTgzODA1Igxk%2FsdpNNMkSLi0S2Yq3APiJXrSlvheCKm6k9QfDq9ye6xf%2BDZFvbxhAqKo6PS%2FsR7lcsciT%2FuIOYHyBk%2FugpeP%2BE5fcoWsZi8mD7n0ptb3N2mSYrKzvlgF0eHhZT8joaUMA2zDzte7hhK76rSGAeN5V%2FN%2F2v7xYajW6sZcSv3LXcazDBfibrZMjVx1dqlT6CNgpPmI%2Fn03mWKkcy6v06VLSPa8%2BL7Ug6f%2BRjqni8wIygmyOC7sqcM7NRvs6NCR4wC8MimsyO4BN6KyHnY1SdpP%2FFOLxYBg2I67P6jMNqKFKcL3O%2BBtd9Gh88Ujt%2BiGdywqw4XEfxGA2YGJa%2Bf2Lvq1rDzfaODeArLWtqGV9YlKPfsoduVvm7i9%2BMNk%2FY1MDoAtgTAZEyqCXzFXBuf%2BWA9OIXc%2Bhd6t9NoMODu7z%2FCq3OinSOXkIfN14kvNGs6Y6djTgoR02yYLCrWJK7QYT957i%2FvdohOG%2BLhYwBECn6gqHHRqC9saVooBg8HBmYYWWk6ho2vm7AOoHX%2F3t2R1ksxOIcDoljrEZBoO%2FqF50ptAq%2Byhwdz6x6HdNGxFScWapH5BcnBnBiOAR%2BMrr9DzDt9GJjIr%2Fz3DE3Qrv1VKjVkqw62IWs%2BSTlG%2Bf0RQ5RzmqPhf3JAwky2%2B86G5AzDA0oK%2BBjqkAcMuU4UGicdV3%2BkAeDMu1AnCVqefi5RolsCbfeEcQeaMravJdsmvgbXdwIM1S9dnvO9lY%2BkPPUCsfeOnQSzwnYm%2Fro0HF0AYlChlU8j48hfEEOyDVe3WCGXYE9RfsZeoTbQMKKDCCv1WLw2CTlTP23iEykj%2B71PkuDJLXLn1McBcQbUTdyNinCrcKebfxNY6UgUe6dkY4uzOoyNGsaGOZJGpxr9x&X-Amz-Signature=0a364984dd80c271864a73201eb29800e775e49f538c75cbe1a0ee667c3a0e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYDDYFV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFxZARd4bz0HEQsTvOBVGo04xYEVSr9g5Y3jl0ZONVOGAiABx5zsRm3nDHUBa0z3wOHsWxkUWsU2sYQeMsF29ni5Eyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOrl9cS0mcYnG0MMYKtwDJ9v0iD8Ank6MQ3CtXgyr5smNlFtdVfHbeP%2BI%2B1hT9r0yYro7ULPx21WF1wPmXMLpQ%2FN7PyeAga4K2q2aDtqxLwlaZEqeFf7TEdPu6b1xWnsTNIzu4FNbBPzOt7H70fO%2FoDmhZ8G1f0M3o1JQKH2iC8JOYrGQ7XYhbWcMqjWZeTw%2B%2B8%2BFyG%2F0l9Zq%2BQpLjkFyogRNRA9TlKqSqR6SNxkeNduCxSRKkAzSe6ooA%2BaxZyzVplwuXYhqUCq4vUjh4jjZmrXe5Nr6kplRS15VLs3HoxP3%2B2IQSi1xgnZBqac7UE84SI5E%2FaryH0654Ohft3RLeUVRMM3k1Q1nZLeB7nesDkWWW6IQb1UCS%2FcMFkoc65wLSzxYSpo8B9A6Dr0gta5RoOAdK4opS4abW4CR9TmYomFWAlYNdmrErFbcRKQM9EBr81URoi3m%2FpKIaovou2t50ZyIV3K3uuA6xIOF8npHl3Gkr147X18X8kAKE%2BuQkyAiltI%2F%2Bs7brh%2BcTkY3m39xXZRxPuDwGyLTEPDHdLj7LP%2F4mq%2FWNxggiTrDaRaNaZn81en9AMnwmv%2BGlYCgGUdvL75uvkoD4irLQxcQHwHsQyyao1XIZmiSIQAqcbz14ZQCW7UGooDQmH%2BJzTIwmdKCvgY6pgFe1DMefc9wds4XuqNXm57jgEwZaYIKHBJQIyhebYmJoJO0u0Sqp%2FrAEVwpWxXxCNERLwzIy6xpOqxkuuSFw1UWp2BoHdBFcg15rQGC54YOrS7FaSWljzA1fGZ5Mxvq3TlpaonY1dlYPXDjIhfbxYsdqyzaJv%2FVk6g28uMGG%2FbV5uz1SK9Lv66zwIlooUzAxmYk%2Fz3SivPI7TA3%2FnkLYTzHaw4Y9fQx&X-Amz-Signature=183eedf66e70d7e1d2e64b9b301ccbe4662c702d76a8a8b1b2100f8602024888&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
