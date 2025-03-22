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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPQY4OL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKjebhX0mnfBpichUi4Mhv1K0IFUU3kHBtzmS0t%2Fw4ZQIhAP%2FvtDmyYif%2BKJSVBzc8Y5jV8WeWWLOved8lVIUg9PwIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8h1hmL1TrbyeHcxoq3AOnEXNNGB0ZviFZf2B6a32j%2B7XzSiGQfiRRMCMIOAYzy9DB8oGJ0Xs%2BEbqM0UVxvsYBv%2FDzORzAe77FUMb2wBLfqi1hRW%2F75yk9nDG4%2B05qWcnAZPvdE6aEbIPgfmrCgvWlyYjA%2BT6MnLRhbA9IeZnaQzdFzns3AY53vRBC5At4fdg3dZX%2FlLZPd71695umS6fwW2ECczxgZ%2BWMjmEKlIjxmBzdhUMPtUhpXDdHiHUXDDx7CpwV20Fux5N5QvdJ%2FMgt%2BV%2FWiwmpcvot%2BWpSZtx2TrmE2TMR7cTg0LDgKaIn%2BSn2WuVYN6DeKQhxMM01BYqt%2FOxpOlWQhYfSJCyktun7eE2092H84ofxZVW1CwmDkSuOqonVXAF8ujtyoCdJZcvsXjuTQ4y97DhIHZ8r9rgm4Bdm3ZyaJk%2BLfxx05MOLiz7k6VEadkkYI8TDbVEqhw7Hy04rbtBPl%2F5Oa26rqhUNFsCfXBgB5ff5DcGowxqBVt1AF44RmGvXvkjxDjcEecMT5aCrm%2FtEdpAG3IYjBA83MTvjAdFs1lV4qpZxkh5SO1qgfiDgiN%2F9ypW5fIFc4H%2FWAkPVzjj%2BZz6pd1ugQQb1FsAN%2BpQDOOC2Q%2F8hSJv2vCoCtdFeZsHm%2BZrOOzDD9%2Fe%2BBjqkAfSXIHu6vRIU4DW%2FlEiVtkfWbL2l7UUX5rgcnxQSKtfScMmuZClGRa%2F3csvukIgdB88i6go84n4ODhLIJLtZ%2BeuvKAZGD51cCZjjcuSRmLKOelyVuC4KomCgr9Ez0ya4eRn8%2F5J0gXACfBezP8HOb%2BsDJzu25b16BKtYoUeA6K%2B9mhLrtnTyQyfm8oBUfZ0ZilwKoEfJ6Fx7iwW1jgGfwr4mtwBY&X-Amz-Signature=0351699d5713c016ee7a36fac1b1ecf46f90bd6d6a6214467fbec959b830517f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPQY4OL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKjebhX0mnfBpichUi4Mhv1K0IFUU3kHBtzmS0t%2Fw4ZQIhAP%2FvtDmyYif%2BKJSVBzc8Y5jV8WeWWLOved8lVIUg9PwIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8h1hmL1TrbyeHcxoq3AOnEXNNGB0ZviFZf2B6a32j%2B7XzSiGQfiRRMCMIOAYzy9DB8oGJ0Xs%2BEbqM0UVxvsYBv%2FDzORzAe77FUMb2wBLfqi1hRW%2F75yk9nDG4%2B05qWcnAZPvdE6aEbIPgfmrCgvWlyYjA%2BT6MnLRhbA9IeZnaQzdFzns3AY53vRBC5At4fdg3dZX%2FlLZPd71695umS6fwW2ECczxgZ%2BWMjmEKlIjxmBzdhUMPtUhpXDdHiHUXDDx7CpwV20Fux5N5QvdJ%2FMgt%2BV%2FWiwmpcvot%2BWpSZtx2TrmE2TMR7cTg0LDgKaIn%2BSn2WuVYN6DeKQhxMM01BYqt%2FOxpOlWQhYfSJCyktun7eE2092H84ofxZVW1CwmDkSuOqonVXAF8ujtyoCdJZcvsXjuTQ4y97DhIHZ8r9rgm4Bdm3ZyaJk%2BLfxx05MOLiz7k6VEadkkYI8TDbVEqhw7Hy04rbtBPl%2F5Oa26rqhUNFsCfXBgB5ff5DcGowxqBVt1AF44RmGvXvkjxDjcEecMT5aCrm%2FtEdpAG3IYjBA83MTvjAdFs1lV4qpZxkh5SO1qgfiDgiN%2F9ypW5fIFc4H%2FWAkPVzjj%2BZz6pd1ugQQb1FsAN%2BpQDOOC2Q%2F8hSJv2vCoCtdFeZsHm%2BZrOOzDD9%2Fe%2BBjqkAfSXIHu6vRIU4DW%2FlEiVtkfWbL2l7UUX5rgcnxQSKtfScMmuZClGRa%2F3csvukIgdB88i6go84n4ODhLIJLtZ%2BeuvKAZGD51cCZjjcuSRmLKOelyVuC4KomCgr9Ez0ya4eRn8%2F5J0gXACfBezP8HOb%2BsDJzu25b16BKtYoUeA6K%2B9mhLrtnTyQyfm8oBUfZ0ZilwKoEfJ6Fx7iwW1jgGfwr4mtwBY&X-Amz-Signature=190567088751a25a5f6d0daf3a0d74c10a053169f027c9275c14a6e5e5035cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637I2Q2RN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDrF2mhnpOIoZCTdDY%2FrrJ965zoN1Ijs6A%2BDM99OimUUwIhANL5yqh92HnXZvAlw05jhFodqUG%2BbI2NJOAh7qhKy3GHKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmPaWyBIpW45e%2FJwq3AMHcd%2FTLA%2BnfTsH%2BXUzPCFQH8riOWgUNfKMT86mWnyo1%2FTDFcAYExlNXtcrvIA67L8mVE54ZxAw69e2Myf0VXpfk%2BbbjAk3s8%2BY1PNyfAqoZlKjSuEuKC5HEL%2FnRc8G0e73%2BzwA7WuebsuNPp%2BJ%2F7NhbB3i9BrdrLEMZPq9X8sBw6%2F%2Fj4ulxMlv0k3GRXjIf%2F1SA83OpIgMPiQlN49MrJyUGXE1RWPZBiXOhDVqjVMhQBrweT9kYzLhn8I9a4OPEFFBAFEwS62xGAkNDrpaCcB0Rbxdrm%2Bu5XYdS%2FFo2se7CAreokM0mVUQqQXSs8YG9Rls4QpCL89%2B2oi7JDN7gy%2FJ91%2F4%2BL4Agw3SFPlmIAPFhAsuLHaX2sswPY992w8PRQ4OJDuvN3ephCRn%2BEGLuvI%2BIrfCliaBoJ9r89Ai2j%2F1atVMdMa372lbO1QmYbMaH4u7eZ%2BU2n5ZwiYtO%2BfCNKPCnwVVv85e9%2BuZLCJrxY4Ho6cEaynjfDmAlu1gY9Ofp4ERsMVhDrCLz5SaknKp1%2F3Sl8BzUFNvOlqM6h9HOZPLW9GRlRBz79E7BMvNKXH2%2FqtLHQy6YwC5r7HrcCXRM4awMQZGwn%2Bhi7vtjbodG1yTcilYuXLpXZTQ5z3bSTCm%2BPe%2BBjqkATfbNK9reilGJ9%2BL%2BLPHL3tEHLeRQXFncD4L8jLm9YHQSAgLCZxTQi1OegpjGI5zCTBDPyAeU8JWMmtxBFLW9VSfjUOFkigH0%2B0bK%2BfWNib%2BxlSi1bfWj46z7crKQbMAvP2RqG5A5%2F800YD%2BveIhOpEyfUvsXz9BNmq84a2TIZ6t52UJLIXC8NdiZmnrTpKq9%2Bhqdc%2FKtK6xOZd%2BXWHThb1V%2BPX6&X-Amz-Signature=98f19ad1ce76745ac2402405e24acf2fb646c76f545a65b5df73cc5852c8c891&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNEUWT7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDPwy0Wcj162TDJi0fyIM%2BTLHKsw5syF4aEzJbTNJtIMwIhANiXRbNjTlDgBiPHpAQZHaZNU21ZBlXX9vTcc6Mom5uSKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG0zcnXzrOh%2FtqUmwq3AProuYh%2F4aUu1fI4IME7iMB0yDjQ%2F26wqYyRCk1t1oj2dDB9oZ4YzQpAc8atZ7haR4nsnRkowNJMLIu4H1VNR1Uo6F3ba9Rkr%2B5x6TqSJobVws4CWMTDhd8UyAfkPYofYpRvKOIoFmblBLS8u05mA11MYOVfSH6VK3AqXd5iVoraCt23Ajh4mVMq%2BdytZKuKQ5menVijuEg18JgnvIScBYD2cVbxtaLanYN9kP5AADHTEd7O91a2Sruy65dGyyFS6U%2Fw9ezEdDwqrjqt5JnuhGjQ5W6OxS2Dj6iMmRellNFawCS4vGIKF9cbkrbrNKWD2e3NuaBCupjZB0udG5ry%2FOSSY5s9tO%2FTxJxm90EILtKrsfl%2BAO%2B%2FFNtCeZtPn3anwbBSbIaYOwgZT8B9wac0dePtu%2B%2FGKFNskc0ucuJynlhy9PvzNOg3KEPceH4L4B43aRQkw%2B6cnGXXiZuXFY0OMviyQRCdBAKo%2FNtR%2BGFWs%2BHoKZ5Zu7BhI%2B9ovX1%2BtNm98zcsqeUd2NonvDexkhtBDg%2BrMwI7Wi9%2FdI3D8TdNruoycM2%2Fa2aOEBOmZI8hp9ezS5xnDQt8%2F%2B%2BGkl5N7PYM5xAiR1yZb7xTKuY6L7i4eZTBXlPNdnTRDQ79SgE6TCM9%2Fe%2BBjqkASxHpNouNyj8uaxam8P9sB3bTliQSufOBA0iIKDEvdY9jS1sE6xgpUqnhaXyfvKQHrtQXdwQtqOSJN5hLFVs%2FPsM1RBkUWDmQgKovurbMFJjUatZIZ4wZHFKSXbydPmTr5AuzX1BrYNaKoLCo7x1NWXmw6TTn3WdKMvTPneoW5tESQ0vKOHEyWlXV%2FQ49AtcAWHsT0UJUSo%2FWFyYnWA3OpwL9QSG&X-Amz-Signature=3e743af0eee129b0eb47071ee4e1481deb3c33e7640f3cdf10ba8c4d420a2e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPQY4OL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKjebhX0mnfBpichUi4Mhv1K0IFUU3kHBtzmS0t%2Fw4ZQIhAP%2FvtDmyYif%2BKJSVBzc8Y5jV8WeWWLOved8lVIUg9PwIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8h1hmL1TrbyeHcxoq3AOnEXNNGB0ZviFZf2B6a32j%2B7XzSiGQfiRRMCMIOAYzy9DB8oGJ0Xs%2BEbqM0UVxvsYBv%2FDzORzAe77FUMb2wBLfqi1hRW%2F75yk9nDG4%2B05qWcnAZPvdE6aEbIPgfmrCgvWlyYjA%2BT6MnLRhbA9IeZnaQzdFzns3AY53vRBC5At4fdg3dZX%2FlLZPd71695umS6fwW2ECczxgZ%2BWMjmEKlIjxmBzdhUMPtUhpXDdHiHUXDDx7CpwV20Fux5N5QvdJ%2FMgt%2BV%2FWiwmpcvot%2BWpSZtx2TrmE2TMR7cTg0LDgKaIn%2BSn2WuVYN6DeKQhxMM01BYqt%2FOxpOlWQhYfSJCyktun7eE2092H84ofxZVW1CwmDkSuOqonVXAF8ujtyoCdJZcvsXjuTQ4y97DhIHZ8r9rgm4Bdm3ZyaJk%2BLfxx05MOLiz7k6VEadkkYI8TDbVEqhw7Hy04rbtBPl%2F5Oa26rqhUNFsCfXBgB5ff5DcGowxqBVt1AF44RmGvXvkjxDjcEecMT5aCrm%2FtEdpAG3IYjBA83MTvjAdFs1lV4qpZxkh5SO1qgfiDgiN%2F9ypW5fIFc4H%2FWAkPVzjj%2BZz6pd1ugQQb1FsAN%2BpQDOOC2Q%2F8hSJv2vCoCtdFeZsHm%2BZrOOzDD9%2Fe%2BBjqkAfSXIHu6vRIU4DW%2FlEiVtkfWbL2l7UUX5rgcnxQSKtfScMmuZClGRa%2F3csvukIgdB88i6go84n4ODhLIJLtZ%2BeuvKAZGD51cCZjjcuSRmLKOelyVuC4KomCgr9Ez0ya4eRn8%2F5J0gXACfBezP8HOb%2BsDJzu25b16BKtYoUeA6K%2B9mhLrtnTyQyfm8oBUfZ0ZilwKoEfJ6Fx7iwW1jgGfwr4mtwBY&X-Amz-Signature=342e67c280e464cd220425206d5ecdd9e1847a8eb9068ceb788c1d91a7940866&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
