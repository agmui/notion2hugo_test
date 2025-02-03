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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM26TZ5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuRF2Mb90%2FgZGnT9uMqEMpVGPYqG4TBPcy2FMKGdnFqAiAH4RmPkte2XcjYj7R9i3aVRMY6234dswqsPSrBAKOzDSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoK54%2FYuzoRIp6kPKtwDje1EgWZD1mXRY3nBVd0hsWK6OqFDB3m%2BFNr4EYcHg3%2FYYPqBDt31ZwApGDWDdAtuU4oh0iIPWATL1OJE0EKtftKFpJuEXKDkd02yXEqZAu19VHd3e%2FsbOV270XBIeS7y3MdPVE9u4ZTu4S2xddG73bP1pq%2BcwXuTG5C%2B364A6TabRv3xALbEYU1Qc7QiuEHgw%2BmHK8nB8fML1szueN%2B5iqVp%2FegtgJM3n8IoubcYDx%2FfX32t9yTdveg00n9d7CqI1tx7aoaz9chT2T4wz04s%2BYFSHnfHzB%2B3Gb12d4J4tKfuWknnug4mqQwzCpZ4snrufRmo%2By%2FdS9Kyf5o%2BdWUC8%2B56CaHZPaV5vZ653xLET9oNmnlLykRmCg%2FGNFztt%2Bs4P0jOogJWcon65BjlbOYODjo1HLSJJpaXAoISt1YplARspKHrGEYckuC8v8tu7i7v4dL56BXf463rKDpzz3as8mCKMU4eWlvQVdyP3Nk7SwuyNDtTiOdY2araNwBiMOuyQZew7yAWnfwpFqmGbJCL1rxasROyEGXfR7tnMMwZ%2FripF9UdGSyof%2BO0SlCKofzaefwMPH%2BcXcGgVJgAwoCX0ehDjmnvgUT%2FMBb6WReUWCcMFjxzRwHjWXCxlLsw8uX%2FvAY6pgEE1e%2BdbHYgbPjA6X5F1GlhrqetXYha2SQmcmoXrh8qDesP6oASV6xO6oxyke9u3HmHLeHT%2Fe07LIQpGtO%2FZ2%2B0xos0Ah7pO0oLYnlULCZuJBWJY%2FLmHhgPk%2BB9zFU7rcr5Z231GGGn8Rp47Ju8%2BDPOlU5ob%2BSTN0HM28g2Jfn8IxH%2FR0v3MBBYnEbnWWai7t9Y8KTxFCNXHc208zqlefbILjVTf98Y&X-Amz-Signature=8aaf805e4bdbcb22b0c62aca6453cd3233943837459c33c6b42489a4b23f17d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM26TZ5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuRF2Mb90%2FgZGnT9uMqEMpVGPYqG4TBPcy2FMKGdnFqAiAH4RmPkte2XcjYj7R9i3aVRMY6234dswqsPSrBAKOzDSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoK54%2FYuzoRIp6kPKtwDje1EgWZD1mXRY3nBVd0hsWK6OqFDB3m%2BFNr4EYcHg3%2FYYPqBDt31ZwApGDWDdAtuU4oh0iIPWATL1OJE0EKtftKFpJuEXKDkd02yXEqZAu19VHd3e%2FsbOV270XBIeS7y3MdPVE9u4ZTu4S2xddG73bP1pq%2BcwXuTG5C%2B364A6TabRv3xALbEYU1Qc7QiuEHgw%2BmHK8nB8fML1szueN%2B5iqVp%2FegtgJM3n8IoubcYDx%2FfX32t9yTdveg00n9d7CqI1tx7aoaz9chT2T4wz04s%2BYFSHnfHzB%2B3Gb12d4J4tKfuWknnug4mqQwzCpZ4snrufRmo%2By%2FdS9Kyf5o%2BdWUC8%2B56CaHZPaV5vZ653xLET9oNmnlLykRmCg%2FGNFztt%2Bs4P0jOogJWcon65BjlbOYODjo1HLSJJpaXAoISt1YplARspKHrGEYckuC8v8tu7i7v4dL56BXf463rKDpzz3as8mCKMU4eWlvQVdyP3Nk7SwuyNDtTiOdY2araNwBiMOuyQZew7yAWnfwpFqmGbJCL1rxasROyEGXfR7tnMMwZ%2FripF9UdGSyof%2BO0SlCKofzaefwMPH%2BcXcGgVJgAwoCX0ehDjmnvgUT%2FMBb6WReUWCcMFjxzRwHjWXCxlLsw8uX%2FvAY6pgEE1e%2BdbHYgbPjA6X5F1GlhrqetXYha2SQmcmoXrh8qDesP6oASV6xO6oxyke9u3HmHLeHT%2Fe07LIQpGtO%2FZ2%2B0xos0Ah7pO0oLYnlULCZuJBWJY%2FLmHhgPk%2BB9zFU7rcr5Z231GGGn8Rp47Ju8%2BDPOlU5ob%2BSTN0HM28g2Jfn8IxH%2FR0v3MBBYnEbnWWai7t9Y8KTxFCNXHc208zqlefbILjVTf98Y&X-Amz-Signature=e92fa396f06f7ac62d68a4440380de809bb1246d8f179d384df13e7e63508711&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AB3I6SG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXvz0o8eDdwlv3fz73IgY2B%2B7wVNHKTAdGOlPhemtCwIgaDKgxdGAclg9OCdmAefIZDZmvbXHp885QMruEamSLRAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9Mkbi%2FydYrDcZM0ircA88wql8qnyB8f%2BlNytQ9Odfjw3vZyFP%2BxLtkazXbPAJfU1mHJnSN0axebJwWL7L83oGjLNSIY8LjG4GRU5o4FjyTS736Fd3pZ%2BQ4TWC5e27dZ0TVbqOgGMkYroqEBfcDxr5GYa8qGpZDrjA4hyBVVsJs91NShjtc9zAa%2FR9jGidEHNcqG1SWdK3qgRgKT2HX9%2Bmix6RgeIvuhXR9lVpmCg0%2FK6Sf%2BNKNDwDFiZwRbuI1Uuzw4QZgsOQ7UQi%2FFDvLCBcqdarAjW6tpB1t5kM3y56lLW5KC1NK81d7eqtL%2BZ92%2FAwXuK8klzIaUp8CJO%2FmZo6LgzHMPAt%2FkDWZybKubk1od1mdk3DQnROjacyzZsqVlgZARkoQtQfr9SVZFGSxYc9QGTcPEC6pv0G7zJ5U6eipueDq3BgR13Ijqeibs%2Brc2FP26c%2B%2FzMDHtsZP%2BoAVc8tOHI4bWQJLrMfm83OVgKDcIThhSzkdbDjbKXpg843d16IWDqAtxbWpIl99upbCFLcUKsmTItSBa9SnzYpRYs7ugCkAVkZoWHDjcMCKfagylxKTZFL7t2Ovjk%2FDl%2FiPt%2Bcpl9EDseOyLuS%2FT%2FiqRRmILSQ0aqjDEOf7rWUB%2Fav5CyWrAt%2F5aCoF%2B6MUMNXm%2F7wGOqUB60xW9I2SyVqNM5LQQmFNZDQET%2F4R21pijQCYY2tGwJoD5imnri6TQwTTY%2FnO9jBfdtojUA%2BNiAPmUs25E4UCig5RAT2jI2meKaDrskYP%2BXlP32tWS2lgBxFlQryDgHFbJz6fYj5ycySDCAfjl3%2BkYbYHxzwybyKJ57HyWbMXqJSZPFj9%2BUdgujp9JyG3myGf9msrpd%2BNHyPiZdhAVQTDaned36T%2B&X-Amz-Signature=2a54c696d1dc2446a0dc69bf149dd1ddb17545992f7a6060f79a2438ce31046b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7HDL2A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5cwCUIgmH1dbVaDxTtdOSWTeytNs%2FdOEXEe0qOdraZAiB2d1ViNO3QoLNxqzHjDmLybkslb1E8426DkyF%2FEnX3vSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bp1cql2sOnHQmj9KtwDRr4sbLco6GM%2B6yswjHbd21LC9pLGHfUHZjMCZrdreNFDP5jAk%2FMMTuotTp4rhJYdrqw6KksvCurKxAc47rw60kW95j%2F1mzNnbitpHVH1Q2%2BiCc%2FOzZufcaYzXwq%2FSDL6S1W91rymLp0XT3oS2xy%2BPzYqv90BpvQ638PvRPiLeFWxRzqRIrBou4zfQ28BicNTbfh3KcJEGlzCV8IKiUzvpMLYrI5S8SRtd6FV1r%2FEn7u9NmBi%2BZZObyLCtQUAWO0aH3YekrbppTckPaP0kSVb4qws7BnOq4tVFaeH5HmKEmhMe%2FMPpVMZeisr4n06lWrgTqykPVDPmEuEGvdSeFJCT%2BI9gPt95Gt489jwHsT5gPYpMewMQYq7tIyrYIEtY0%2Bxr%2BQQYSIiPeNwaZwQHPatFdb1ipaTs%2FUFjyxJYIPpMcZjT%2B855L3485hO97nDCr%2Fb0B6YYfLyFgiMOP5CH9zM%2BEYd8r%2FS095KMzEptMo%2FDL6A8yhpc6p47sVpY6MWvvQUH6ivIxhgf1CckUybndYmIDXLEleg7jXrs3ZL0fcd%2BeKqjrs%2FTvtPgVna%2FLF%2BRCXdhMr0FTg%2Bp%2Bg4eclihxzyfNO8VB3qt2qZ7Zzai112Z3aPr7L%2FPkhZCIwjRaMw6ub%2FvAY6pgFPVG2LJPmUSvosVuUHV%2B4he57ZrDDGaN3D4ZSvmcO4uQZh8epreZ5Q9x0dTr7yK23Rhd2R672K2k3AGVtD48n14EpW9jl7OR7%2FGZqhOKiJNHJnrmFwlunSQ67RB9LG22h%2BfpaEgn1VEQWZY50W9Wwly6ve5tNzQdIUn6VSRKgzG30OXiwqecjjSVMlGC5TLKl0lg%2B%2Be7%2BiqKfe6nuyoQA1irZDlkJz&X-Amz-Signature=7b31a808952fb3b97f79d06aee1ea4bcd4485fdc41bf7371dcb643783ec69e35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM26TZ5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuRF2Mb90%2FgZGnT9uMqEMpVGPYqG4TBPcy2FMKGdnFqAiAH4RmPkte2XcjYj7R9i3aVRMY6234dswqsPSrBAKOzDSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoK54%2FYuzoRIp6kPKtwDje1EgWZD1mXRY3nBVd0hsWK6OqFDB3m%2BFNr4EYcHg3%2FYYPqBDt31ZwApGDWDdAtuU4oh0iIPWATL1OJE0EKtftKFpJuEXKDkd02yXEqZAu19VHd3e%2FsbOV270XBIeS7y3MdPVE9u4ZTu4S2xddG73bP1pq%2BcwXuTG5C%2B364A6TabRv3xALbEYU1Qc7QiuEHgw%2BmHK8nB8fML1szueN%2B5iqVp%2FegtgJM3n8IoubcYDx%2FfX32t9yTdveg00n9d7CqI1tx7aoaz9chT2T4wz04s%2BYFSHnfHzB%2B3Gb12d4J4tKfuWknnug4mqQwzCpZ4snrufRmo%2By%2FdS9Kyf5o%2BdWUC8%2B56CaHZPaV5vZ653xLET9oNmnlLykRmCg%2FGNFztt%2Bs4P0jOogJWcon65BjlbOYODjo1HLSJJpaXAoISt1YplARspKHrGEYckuC8v8tu7i7v4dL56BXf463rKDpzz3as8mCKMU4eWlvQVdyP3Nk7SwuyNDtTiOdY2araNwBiMOuyQZew7yAWnfwpFqmGbJCL1rxasROyEGXfR7tnMMwZ%2FripF9UdGSyof%2BO0SlCKofzaefwMPH%2BcXcGgVJgAwoCX0ehDjmnvgUT%2FMBb6WReUWCcMFjxzRwHjWXCxlLsw8uX%2FvAY6pgEE1e%2BdbHYgbPjA6X5F1GlhrqetXYha2SQmcmoXrh8qDesP6oASV6xO6oxyke9u3HmHLeHT%2Fe07LIQpGtO%2FZ2%2B0xos0Ah7pO0oLYnlULCZuJBWJY%2FLmHhgPk%2BB9zFU7rcr5Z231GGGn8Rp47Ju8%2BDPOlU5ob%2BSTN0HM28g2Jfn8IxH%2FR0v3MBBYnEbnWWai7t9Y8KTxFCNXHc208zqlefbILjVTf98Y&X-Amz-Signature=f3082aac0ae0194e8a574f727a07e6460d839235bdb2dcacfd8f1dfd97d38d33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
