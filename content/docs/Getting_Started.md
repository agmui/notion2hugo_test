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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXI44BG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNJmBcc2gk%2FU4h50A9qUohBNUhSFOKCwsQMrla%2BJyx%2BAiEA6LBMsvxYXPkNQXn8qluHweKHf6sbeA6%2BOBkOuRxQw0kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBwwwRfIyzBYwbp70CrcA37zO0obWWHgAwCge89%2FTwxLgVK1cdP5Yd2mtPyv0kmVBgzVG3t9GsUUozShbHV5ejC5jqKWGYg2ImDG8esl5rzgSr9Fu6X%2Bm21Tu7cpMw1BP%2BUeN2dr4hsNm1Fl%2BlOYNF6iHaGe1Wn32OpVPS%2FkUY0GP%2BGSsCljM%2BLhm5RuVZ%2FLgypEN2o9XtDkhBGrvqVfj2J8QZFoKQVaYM%2BQx%2FwPY5knnJwS1PbZUZRu7glQxy%2FMaiJLLIJpsVProPcWCiFs9QuWvHizopvRYijf7c2cKPCwXdrfxVKeCwZXkC%2Bz062QJD24ClP1tLMPKrq9sVk00x%2BiuUdkboAkCBXUVp28T7mOY2j3EMZ4XB0Rv%2Fv817sEjZmpydrwKPIN%2F0Y%2F3Xzsx2ai%2BkdaPGO62mZEpQZtf6QNnV%2BScBleV3mQjuACK5eS78Ws5Yl3P7DPoqKSm88Yq4p03Vws36zMAl5iMQ7wUc7E8P6dNXgY6W8ioZ%2FHpO1PhWq8xYsZotAZSmK9vyUmK7ZLLb8BoPIWY1uC8DVjlMiL6t%2B0bv9cMxp6LEEj3hMNpxcUIaXZ5PXACUwKCIqRAs%2BrIXkYkF40NQBXFKrMWrCBlom%2F95T4DeOo6uhbanQdBF%2Fv3O%2B%2BAVM%2FvcdLMMi8%2FL8GOqUBrZAil3BOsbvZFjKaKBRbQ98EC%2FRW4F2MTifKRvOZXRjlMxzmflGj5JSoj%2FKUlbmsRcrdG6o5e%2BAmnin8mmkEqAXhhFuTne%2FoUFOuZpGSHXLLAzPQKR5OvG9KxW%2FmtDXzjaLPPgSAu%2B1Ou9EUXl7CK%2BGSug6Lc%2FtZtRE3fES2TptnvE0XzdN2cDfj4tAsUhQjR6ijBgMkN8TvbWA%2FWpn%2FTCLnhkcL&X-Amz-Signature=01f81b09ee33f9233bb55e2c2d8ab2616533f154899c1ebbb09cbb993e564bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXI44BG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNJmBcc2gk%2FU4h50A9qUohBNUhSFOKCwsQMrla%2BJyx%2BAiEA6LBMsvxYXPkNQXn8qluHweKHf6sbeA6%2BOBkOuRxQw0kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBwwwRfIyzBYwbp70CrcA37zO0obWWHgAwCge89%2FTwxLgVK1cdP5Yd2mtPyv0kmVBgzVG3t9GsUUozShbHV5ejC5jqKWGYg2ImDG8esl5rzgSr9Fu6X%2Bm21Tu7cpMw1BP%2BUeN2dr4hsNm1Fl%2BlOYNF6iHaGe1Wn32OpVPS%2FkUY0GP%2BGSsCljM%2BLhm5RuVZ%2FLgypEN2o9XtDkhBGrvqVfj2J8QZFoKQVaYM%2BQx%2FwPY5knnJwS1PbZUZRu7glQxy%2FMaiJLLIJpsVProPcWCiFs9QuWvHizopvRYijf7c2cKPCwXdrfxVKeCwZXkC%2Bz062QJD24ClP1tLMPKrq9sVk00x%2BiuUdkboAkCBXUVp28T7mOY2j3EMZ4XB0Rv%2Fv817sEjZmpydrwKPIN%2F0Y%2F3Xzsx2ai%2BkdaPGO62mZEpQZtf6QNnV%2BScBleV3mQjuACK5eS78Ws5Yl3P7DPoqKSm88Yq4p03Vws36zMAl5iMQ7wUc7E8P6dNXgY6W8ioZ%2FHpO1PhWq8xYsZotAZSmK9vyUmK7ZLLb8BoPIWY1uC8DVjlMiL6t%2B0bv9cMxp6LEEj3hMNpxcUIaXZ5PXACUwKCIqRAs%2BrIXkYkF40NQBXFKrMWrCBlom%2F95T4DeOo6uhbanQdBF%2Fv3O%2B%2BAVM%2FvcdLMMi8%2FL8GOqUBrZAil3BOsbvZFjKaKBRbQ98EC%2FRW4F2MTifKRvOZXRjlMxzmflGj5JSoj%2FKUlbmsRcrdG6o5e%2BAmnin8mmkEqAXhhFuTne%2FoUFOuZpGSHXLLAzPQKR5OvG9KxW%2FmtDXzjaLPPgSAu%2B1Ou9EUXl7CK%2BGSug6Lc%2FtZtRE3fES2TptnvE0XzdN2cDfj4tAsUhQjR6ijBgMkN8TvbWA%2FWpn%2FTCLnhkcL&X-Amz-Signature=d1662b33babfed1d495cc1443da555b3718439adc38a36eec9917ec42b9392f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YGKCOHW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmcrnBHh6djG%2BfzEiLN9N5V3xLBtdSO%2F8jlex2cTKBAIhAMDkJDWyiqtMc%2B0NxrpAeCV2MfbaQo54qYgWd0aLHpG4Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwdtWqY6LMmUj4%2F0HEq3ANWC4QimSJ1X5iEiKVOjOuNC1%2FW22KU8ZmDiyudV%2FDxRQlKR%2Fb2uXyszIeP%2FLzKNmxvq4h678UUlDP60mzjkq75coL8zeZrIlTrfTAD6gy4m3kU6oPSDk%2BpFex1q%2FpnEc4F8gKxCfB3CJrjSbh2V%2FnStVR6aH2PyqHjjSGvxv2jYTHkVh%2BfoxZL7J7Epv8wiqr3NuaZzupQydjboR3CpxTU1F6kIuj1xfUDcFjW7s9Fv9D3d6pNFXPopoKQdAmjFp6yXoCT0u0cFWK3Fr5dGByzxqId3Jua3JQpvff3f63JSxYUJXIzoJV3AR%2BmXFzndpUssGxLty9W4ZtpMQteArPTJkKRooab%2BdL9kLrkwQcKYf1aWJTUDk5tUKyBQ4O5gjpezyTGrq8G3gv0zO1raZpL915vHMeVuEF0Ox2KJSrNIZhCHKQFkGFsDUv71uPSUb8zBu5AwN7cWi17g%2FjIyiLtAGf247kZgT3wAbipjcsEKR5f3QkBTE46%2Fz%2BnQtp361%2F2lwcKzfQ2OE5GxbqcpV6EJ7xgV3KvOlAApaWWOPay38sl%2FFsWH%2BT9eey9hU9ehOQcsZh4Z%2FHBw399e%2FoDtuLIEwy1aP35MIRmMX1%2FKr7NkD6c%2BamyhFSJx9LahTDHvPy%2FBjqkAW9edV9STqixnmqcNyvAW3AQK%2B0GIYb781rH%2BiU2h6XTkrPMiCRZsTDHY6qJc1DcYjhBoK%2FeB%2BMlylYn%2B%2FiFr571PtyZUffD26psPl6%2BZiEBUEZTj3Lx4UDLmzzRORAt8tseCQjtj%2FE7aJCVPyIOpCMxXamK7sepKpKOzPvVu%2B2%2FPTs%2FxoXDCwGjp8lXglnapYopBhqyxMXeImw43Tabj6maeR3I&X-Amz-Signature=86c59adbb5973e35a6960233b48f95c283fe42ad3829b2845821d3783a82357b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6SL2XZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuzucnpfaRWbMDLk5pyc07jrc9wApS4UwmDYpT3sEFwIhAO4lQ6jPe32vO6Y%2FPFfn4%2BEzqqJi3uBO0Bpc4ttVcHjDKv8DCDwQABoMNjM3NDIzMTgzODA1IgxtER7IQ5c13GX8sHUq3AOeX10xZoB7xgQBtdZt3K5mkEhpM8yE%2B3R%2FfJ3ki1hqzL1Rm6%2FNiZB0%2FdxlQeM17n2lm4TxhJHHwAC%2FeHLeBYvqw7vsbjthzn8DW5f1SLIQfNA48ni0eIny%2BUtwcy1LBdmuuLrdkO3QjbJkvc%2FUthsINVpx%2BBGu1GDec%2FsnAuHwUyj5z6LGrsNZfRTfkbbIdtYr3v7o03Cu6Cm3z9%2FHeG6J5zjyYiilIxIsmeg9hYqhidPQXktGEOPS7R06EKIqsDZ1l1eFoJQxmzGy1HvUr42AJiSu%2FfU%2BE0amUA5o3nRgMwcIpmXtwcjqwxyFWZu1hQLFyLq5%2FXBSSHBfGPGw%2FM%2Bn2sMnrPcz2D7WpgwUwkYhgmOCpRpi%2B%2F95uGyUj%2FGclvcZLFC7HLDeQMqwLT3wDw4XUJH6T4Zpw5C10e7i6FJx207fCjz%2FY%2FRjgUOBk%2B0ceTSxcNIctQSVZRHXAJXkObjuONZiBZ5Pm4V2d5Yt4%2Fke70aKjeZVdfoH0WiNdoCwRhOeqglTmNBqQ83i7rzBcqfHfxuDqGPUbl57bBN3A8SbS9YuDxyaavvhmjdSA7n4YgyGH%2FUo3WFFtKQn%2BZet8cGcHf6NgYk0x8OiPlnEFnad%2FDZXYqvosTOHjlEGTjDavPy%2FBjqkAY%2FXs%2BAqWgtauJcXgJEhg1Fx09YVxPRBFdTSpFcYS7dPITNWnS4h7O0Eoj%2BwBKQtV93L42A3Dq8hrnFjq6WBGf2IUlWIIafyCGYb%2B6Kojn6Mn9qW9eE5Zm%2BGUGs2UVpPGdAiz8Y2BrsSOZSJ6odIGB7Lifn010EGz1eyV%2BGxmFQ3t0DqC%2Bbkg5RmE%2FGqLWMcq518cHRp6O7XtnIE%2FahPcd%2BHOTHq&X-Amz-Signature=ecf868d7e879e0e062acc1a3ebfa6c41769e4c5247e0ef4f023f9011b11494de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXI44BG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNJmBcc2gk%2FU4h50A9qUohBNUhSFOKCwsQMrla%2BJyx%2BAiEA6LBMsvxYXPkNQXn8qluHweKHf6sbeA6%2BOBkOuRxQw0kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBwwwRfIyzBYwbp70CrcA37zO0obWWHgAwCge89%2FTwxLgVK1cdP5Yd2mtPyv0kmVBgzVG3t9GsUUozShbHV5ejC5jqKWGYg2ImDG8esl5rzgSr9Fu6X%2Bm21Tu7cpMw1BP%2BUeN2dr4hsNm1Fl%2BlOYNF6iHaGe1Wn32OpVPS%2FkUY0GP%2BGSsCljM%2BLhm5RuVZ%2FLgypEN2o9XtDkhBGrvqVfj2J8QZFoKQVaYM%2BQx%2FwPY5knnJwS1PbZUZRu7glQxy%2FMaiJLLIJpsVProPcWCiFs9QuWvHizopvRYijf7c2cKPCwXdrfxVKeCwZXkC%2Bz062QJD24ClP1tLMPKrq9sVk00x%2BiuUdkboAkCBXUVp28T7mOY2j3EMZ4XB0Rv%2Fv817sEjZmpydrwKPIN%2F0Y%2F3Xzsx2ai%2BkdaPGO62mZEpQZtf6QNnV%2BScBleV3mQjuACK5eS78Ws5Yl3P7DPoqKSm88Yq4p03Vws36zMAl5iMQ7wUc7E8P6dNXgY6W8ioZ%2FHpO1PhWq8xYsZotAZSmK9vyUmK7ZLLb8BoPIWY1uC8DVjlMiL6t%2B0bv9cMxp6LEEj3hMNpxcUIaXZ5PXACUwKCIqRAs%2BrIXkYkF40NQBXFKrMWrCBlom%2F95T4DeOo6uhbanQdBF%2Fv3O%2B%2BAVM%2FvcdLMMi8%2FL8GOqUBrZAil3BOsbvZFjKaKBRbQ98EC%2FRW4F2MTifKRvOZXRjlMxzmflGj5JSoj%2FKUlbmsRcrdG6o5e%2BAmnin8mmkEqAXhhFuTne%2FoUFOuZpGSHXLLAzPQKR5OvG9KxW%2FmtDXzjaLPPgSAu%2B1Ou9EUXl7CK%2BGSug6Lc%2FtZtRE3fES2TptnvE0XzdN2cDfj4tAsUhQjR6ijBgMkN8TvbWA%2FWpn%2FTCLnhkcL&X-Amz-Signature=8b59a1466d08a7497e2194e3fde6afa933a86f957cef841eba34428327f7c063&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
