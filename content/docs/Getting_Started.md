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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZBIO7B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIB%2F2q3x943I%2F2EF23lT%2BzrHFW9rgp4jYrPiwGmhVD%2BsEAiEA1y%2F3iKbZBE7%2FU%2FMZrUiY5P48JYyOHVOgPkbJGDgUokEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1OcgbMrCLXkyLn%2FircA2zmDvdCrnD6kmCQqum55bL2794VEUmuAM7kIlsn1CuTlZulQxxCy9m9DH5sgDJwy5TU0hMr1bwGG9QOsCgXXCJSQStjZ5bbeejrLbZEH%2Bjcygn%2BGYrRbCm1f5H8RjuG5hLOI5NXOpArUD%2FDwEWggAGxVNqGPWB%2B5Zq9GJ3efRiRN1Ly1qPT8ZOvAeufNsyFDwLTrQTkpIL5gCiAhwgBXkJ8JnvpO2udf2gTrbHTD3RoX05uH1BfQ%2Bkgsz4GX%2FvfE2%2Brh1%2Bo0V5H4KMg0CcoRzIppzfPSpXBErpl%2FU1xPm3qDd5%2FwVwcTPC4BwvpwMRcHvPiNKAF9Al%2FlwvmFZk7IftwBUcWTtVTJ21w1P0y4mul0T1%2FL8gRkCcxjC%2FqEBnjtX0F2Kt9MvRUMGU%2FUjswcJBscqTIyS9T4%2BJ%2F%2BYKliPVg35S6uMe8EM0AagmY6piatd5GJseQFYGkKpbowxKZiKlz2SaRgURSWyx6qLBQVnhwclezfhTWPyRtmZkuOHVI9KO9FkEoz6shy3ZMB6nnK%2BGLU0A0CANZ58vGVaSJZ7jT10C8i0%2BKa2ug6TxVDS2YTCTZRb%2BESDFiXwKYhFTrmlt07o%2Fhmdibt%2Fdmrnwn1zkLA4SKittRnRvemgG3MN6Kpb8GOqUBfO5PdENQNnmKSwqx455sEFL0eNcELintWxUOLkasvYp%2B8gg%2FzK1%2BSLOfBIXsiChEuqUTy%2FlWFYkRo5lLfVMUc9NZzwex74ddn7fZiNRFzUGhD7zl3QnaIy%2BGBim6grFDb%2Fl1mUJZXgOeeLiQ12b8XY4kAhRBvTBC7IOLin4F%2FbJKxcmYpzOFn3WxmQN87QSLG2wsGrV1TkgwLDneQ91KJ0iSUD1X&X-Amz-Signature=3ff93a81389d944cdc78bcbf86b99d0d7f02a10a4895691a3faacce6b26f64a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZBIO7B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIB%2F2q3x943I%2F2EF23lT%2BzrHFW9rgp4jYrPiwGmhVD%2BsEAiEA1y%2F3iKbZBE7%2FU%2FMZrUiY5P48JYyOHVOgPkbJGDgUokEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1OcgbMrCLXkyLn%2FircA2zmDvdCrnD6kmCQqum55bL2794VEUmuAM7kIlsn1CuTlZulQxxCy9m9DH5sgDJwy5TU0hMr1bwGG9QOsCgXXCJSQStjZ5bbeejrLbZEH%2Bjcygn%2BGYrRbCm1f5H8RjuG5hLOI5NXOpArUD%2FDwEWggAGxVNqGPWB%2B5Zq9GJ3efRiRN1Ly1qPT8ZOvAeufNsyFDwLTrQTkpIL5gCiAhwgBXkJ8JnvpO2udf2gTrbHTD3RoX05uH1BfQ%2Bkgsz4GX%2FvfE2%2Brh1%2Bo0V5H4KMg0CcoRzIppzfPSpXBErpl%2FU1xPm3qDd5%2FwVwcTPC4BwvpwMRcHvPiNKAF9Al%2FlwvmFZk7IftwBUcWTtVTJ21w1P0y4mul0T1%2FL8gRkCcxjC%2FqEBnjtX0F2Kt9MvRUMGU%2FUjswcJBscqTIyS9T4%2BJ%2F%2BYKliPVg35S6uMe8EM0AagmY6piatd5GJseQFYGkKpbowxKZiKlz2SaRgURSWyx6qLBQVnhwclezfhTWPyRtmZkuOHVI9KO9FkEoz6shy3ZMB6nnK%2BGLU0A0CANZ58vGVaSJZ7jT10C8i0%2BKa2ug6TxVDS2YTCTZRb%2BESDFiXwKYhFTrmlt07o%2Fhmdibt%2Fdmrnwn1zkLA4SKittRnRvemgG3MN6Kpb8GOqUBfO5PdENQNnmKSwqx455sEFL0eNcELintWxUOLkasvYp%2B8gg%2FzK1%2BSLOfBIXsiChEuqUTy%2FlWFYkRo5lLfVMUc9NZzwex74ddn7fZiNRFzUGhD7zl3QnaIy%2BGBim6grFDb%2Fl1mUJZXgOeeLiQ12b8XY4kAhRBvTBC7IOLin4F%2FbJKxcmYpzOFn3WxmQN87QSLG2wsGrV1TkgwLDneQ91KJ0iSUD1X&X-Amz-Signature=e3a994c7d7f20524f317fc036eab0cd8d82d53e71bce5ba6f4d643d69f3d1119&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXSI43J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDxxlfppUiSNXqhwW6t1fqo3ALfeMLJDxXt5E9lrTBFOgIhAJLCnGrfCbeggdEZFUwitU6rajelqsOVH7kyK3AG2y0FKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw94bX8KCxxPfnNg2Yq3AMtmWYHXL12FTZhBdr8kd4gx3V5XJC7SD4p2uhviLJ2MDw3DwChwHs6moH08fdU6OzWIIiUWkW993Fb2X2%2FRExNvvfu7esuLPJex33USeyOA7eoeI1nb0ISZWCovJSOJDLmBoMb82YbCvhfKjg5IYrAL9ah5b0BaxeO%2BlnfuEw%2B5GQzn1PrF5DWaA3QX%2BKQSRzm%2BiB5DDEdv4g5Y%2FcUo2BnzGmlFo9VYF6JOuMpJwhrFHgsmsBb1w7dwI%2FEpsCUCeC%2FARWui4quTZHELJctWfZOAJuy2k935g1lofVbFFcGsFfsUhZdD0lBG1pr1w6lnKLJ0eZ4LCnQiFC0VD2hje700CUyVo%2BX48LQI%2BX0%2FWgpCnYo601iizfa1uqJz1R1ZGA9Uj%2FoAWPCbUMgUBWsKzCJGWFSUaDoSQbjifkY%2BLp0iOStots8rtO014m2zZsu3Tx%2BoC1RTApVM12fzIiKdKBksRmqlysriOwv7i%2BFIDhX61aQhSlLx5%2BduGGHZ8Pm1Vjj%2BS3JjmmJPKtF5b7DnzzRn43IF0R5Q2Ldj%2Blg6KIKlwg8WhdG0B2ut9pdin1AOkCs%2Buw10HwkXuo8C8d25YNeUQ5Uar%2B%2FsUHc7xS33RRBEgx3aGsv6GZ7Pa1v%2FzCvjKW%2FBjqkAdgZ2%2B7G2VBjZ%2FPJP6I3Lim4Gk1ejWAw2ybxdvCJXDielq%2FaCi1DiLHdo1w9vuIAtc3gWGU4WW7eqye5DiMCMfWIh1RgmahpW8vgGxCxhGt7DushDQvoCBa4jj5TCodIl%2F%2BkaGDwydfOSgAGFyHiDomyiyoHoy%2B5LteLSeBCWM%2BPG2WMjd%2BHOCEHAAflYg%2Fq7eLgvQfx4ZKuNJHbp4DuGgQ2Py14&X-Amz-Signature=c1945c8df9c7752e5b3cfb7a519bca362af1547eabdb3b2f4ea37d8f9993c088&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHXUPFYG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH3YgB0zYx2Rpx5hR9%2BtHqnMr7f9kFAiC7oaFLtBZ85uAiAMupHl3svgqHi8h1iljoGNBQTjtAUrWcE91PvBCXWphiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZo3qHcxyTli7DCn6KtwDn%2BMVauPH8NZsPmcwYR5T8VwE0fm8FqceB1BY1j1VJXPOGqrdNxvbpOEbgTLkmgooJkWXL9eG2gtx4hQ0lnadYuxNYR2owihd7v3JyKAJv8M6Zc6X9aRXpki7IgV%2B5UKE%2BhJ%2B4ZCF8MdzbTZ5PJoKrmC5hlmbvOuUNj0uEm%2Bqp6OkcluuJwq03uJrCD2D5%2FOOZAuOE37m88UoGtvbZ%2FDTCiGNjp%2Bkxx1AdgeLtE5aHMq7mWTWn0rcKHQcoFwnLbVad75HSfKZzXsS9jGfB3nwaZ9L69jn%2FYhaU%2BXQbk44uh8EVz8WhQuaQhmiMu2OCO57NRXWnHD%2FMdQYSOEq22JzLTuTW%2FNVvKVxkEJJIkIPIZ4ydj%2BwnQ0xu4juiEipcv4%2FvPHYY5vGXPPgcM5TAtyIolcnY1fPdi8ED1hM5OjNQhTbOj27hmS7OZxBBH31Up1yNi3C%2FyA25OUr%2B2W9hhKf1zc6FQfVYUPjiU5CW6FqBApLDyEukECT%2BnIBVM7bcw8Fyaxby3hiOFZkSdE5GNtdzsqAqWMUCvPiwoFdl5ebG%2F5wNOj6FWIcnXGTGqA%2FHsf%2FWph5ji%2FArDB2O9PHfX2nc3%2Bc%2Ft6IBeXyqMcijbFfUJn6gUKOmgV0Z0s8yJow0YulvwY6pgFWz%2FmBUEOjWQOqt8uV2Y0jgq3BqiUUVSWACNDSVpFazZXcgpACviD%2BaC8QV%2BMBHEqMLmYep%2BtmQHKD%2FdC0p9Hs1YPml5mDyAX%2BotdBPIN7AOhk%2BaApUQkSjmLC9I1L6B%2BmKVrYq1wHFkxx09VbWjSZx0S71CkpWR58ZuDXNSEPMN3o1EEx0VDVRjZ05HeryzJzSmg9vQXpUWiI9lIXyiEid%2FUfxI62&X-Amz-Signature=fac5301858aba5221f2e9dd049e639298bb9f4a095741fe2fbd93e946bdbbb42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZBIO7B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIB%2F2q3x943I%2F2EF23lT%2BzrHFW9rgp4jYrPiwGmhVD%2BsEAiEA1y%2F3iKbZBE7%2FU%2FMZrUiY5P48JYyOHVOgPkbJGDgUokEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1OcgbMrCLXkyLn%2FircA2zmDvdCrnD6kmCQqum55bL2794VEUmuAM7kIlsn1CuTlZulQxxCy9m9DH5sgDJwy5TU0hMr1bwGG9QOsCgXXCJSQStjZ5bbeejrLbZEH%2Bjcygn%2BGYrRbCm1f5H8RjuG5hLOI5NXOpArUD%2FDwEWggAGxVNqGPWB%2B5Zq9GJ3efRiRN1Ly1qPT8ZOvAeufNsyFDwLTrQTkpIL5gCiAhwgBXkJ8JnvpO2udf2gTrbHTD3RoX05uH1BfQ%2Bkgsz4GX%2FvfE2%2Brh1%2Bo0V5H4KMg0CcoRzIppzfPSpXBErpl%2FU1xPm3qDd5%2FwVwcTPC4BwvpwMRcHvPiNKAF9Al%2FlwvmFZk7IftwBUcWTtVTJ21w1P0y4mul0T1%2FL8gRkCcxjC%2FqEBnjtX0F2Kt9MvRUMGU%2FUjswcJBscqTIyS9T4%2BJ%2F%2BYKliPVg35S6uMe8EM0AagmY6piatd5GJseQFYGkKpbowxKZiKlz2SaRgURSWyx6qLBQVnhwclezfhTWPyRtmZkuOHVI9KO9FkEoz6shy3ZMB6nnK%2BGLU0A0CANZ58vGVaSJZ7jT10C8i0%2BKa2ug6TxVDS2YTCTZRb%2BESDFiXwKYhFTrmlt07o%2Fhmdibt%2Fdmrnwn1zkLA4SKittRnRvemgG3MN6Kpb8GOqUBfO5PdENQNnmKSwqx455sEFL0eNcELintWxUOLkasvYp%2B8gg%2FzK1%2BSLOfBIXsiChEuqUTy%2FlWFYkRo5lLfVMUc9NZzwex74ddn7fZiNRFzUGhD7zl3QnaIy%2BGBim6grFDb%2Fl1mUJZXgOeeLiQ12b8XY4kAhRBvTBC7IOLin4F%2FbJKxcmYpzOFn3WxmQN87QSLG2wsGrV1TkgwLDneQ91KJ0iSUD1X&X-Amz-Signature=b8776878977e652f762f0e5caaff5673055c8004f5dbdae644776835c750aa49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
