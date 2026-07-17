---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJYGCCH%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnJN7KDYtS5U5F4MghtqTjMRNbhhtTXWJWG%2Bwxw34cgIgAfWrOTeoFKjRSHFzBTigdYzOq0p%2FNyuCBHA9H4HEzSEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKPEwbCLkDuxd%2FRMVCrcA9Y21bd5udXO9r5lWcUBubXEooW1SVtLskd0mf5Qs0CVb%2FxtIB8h0iVWE6N1tJo1bdAreUKMJqxS3m9tHrAVROg8rw4uVX5E56N7nVGDzHxJMkB6hOib%2BN%2Bb06BJoKu30056f86Qiyu4FZB03GVUPCDZf2P5UY6aVjjHLgR765MDv%2B47FLT5D%2F1O1ao62bOxhgY90CqVOBTf96MrbRoFal425VTXRTwWF5c3FGpyoC6zlJEB5Zd1ZcVbAZoOL%2Fz6lT3D4X2HqtVFGxmh06TOhbw%2BDn3hwuUFLVv8udlS1ckZw96GYHP7lHmsN74G5ekufOpog26yyoY%2BB2Dc2g6Z%2BmtEgKPmx1mjmU%2FtZBuVzWj%2FfJX0op%2BINqzTnpXUZ6M3YzED4LBnuzzIPzuPW%2BbmxZgmFsm7gSX2sSDKiT0QsT5d%2BdErxqmc9WFP4vyDVA2rWFN2a%2BG9Ye%2BrOHh%2FM9AeMyzC6dxOXJ58cyoRb1oPQjOpYeW0mMgZuJmxlnwMHYa4BkVKypaxGKOKw%2BhBR09e7QgU3F7q0HnlUsBy2D5SFgmgs0JCjBTudlOmqA2yPvX5kOjcirt2IFuUFIamwOEyPJ%2FQSkYNqpo6uLhWao9SntWXP95GWyVBkiCuTzSdMK6q5tIGOqUBBXgQicfggyjwlfHAazWX9hFp8wvnOQhf0CDh8t9BGKWuvLz75mQ%2FiUcCgKbNcgDMnvEy%2BKUCTwhYJDK0fxEiMyztkAZm3DD5NqDTQ10GahDxrT42jYGei%2FkW9BxZTigpoHYQWDXI%2F%2BTZDMpBka9vyz15likrD3nP3cRe0BPBQcT7h15jjDJCXWFcrhOoCGV6TibusSHC7GShPGvRfjd5npgqN%2BZi&X-Amz-Signature=a114c554a2c02a4444dc752759e4ba3acfb53ba0257f0e9b7acdbe9310a3027e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJYGCCH%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnJN7KDYtS5U5F4MghtqTjMRNbhhtTXWJWG%2Bwxw34cgIgAfWrOTeoFKjRSHFzBTigdYzOq0p%2FNyuCBHA9H4HEzSEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKPEwbCLkDuxd%2FRMVCrcA9Y21bd5udXO9r5lWcUBubXEooW1SVtLskd0mf5Qs0CVb%2FxtIB8h0iVWE6N1tJo1bdAreUKMJqxS3m9tHrAVROg8rw4uVX5E56N7nVGDzHxJMkB6hOib%2BN%2Bb06BJoKu30056f86Qiyu4FZB03GVUPCDZf2P5UY6aVjjHLgR765MDv%2B47FLT5D%2F1O1ao62bOxhgY90CqVOBTf96MrbRoFal425VTXRTwWF5c3FGpyoC6zlJEB5Zd1ZcVbAZoOL%2Fz6lT3D4X2HqtVFGxmh06TOhbw%2BDn3hwuUFLVv8udlS1ckZw96GYHP7lHmsN74G5ekufOpog26yyoY%2BB2Dc2g6Z%2BmtEgKPmx1mjmU%2FtZBuVzWj%2FfJX0op%2BINqzTnpXUZ6M3YzED4LBnuzzIPzuPW%2BbmxZgmFsm7gSX2sSDKiT0QsT5d%2BdErxqmc9WFP4vyDVA2rWFN2a%2BG9Ye%2BrOHh%2FM9AeMyzC6dxOXJ58cyoRb1oPQjOpYeW0mMgZuJmxlnwMHYa4BkVKypaxGKOKw%2BhBR09e7QgU3F7q0HnlUsBy2D5SFgmgs0JCjBTudlOmqA2yPvX5kOjcirt2IFuUFIamwOEyPJ%2FQSkYNqpo6uLhWao9SntWXP95GWyVBkiCuTzSdMK6q5tIGOqUBBXgQicfggyjwlfHAazWX9hFp8wvnOQhf0CDh8t9BGKWuvLz75mQ%2FiUcCgKbNcgDMnvEy%2BKUCTwhYJDK0fxEiMyztkAZm3DD5NqDTQ10GahDxrT42jYGei%2FkW9BxZTigpoHYQWDXI%2F%2BTZDMpBka9vyz15likrD3nP3cRe0BPBQcT7h15jjDJCXWFcrhOoCGV6TibusSHC7GShPGvRfjd5npgqN%2BZi&X-Amz-Signature=68e400d93f7c1cf78ece08e52fadad6702f86618f4170c61468dbd7e7857b9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJYGCCH%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnJN7KDYtS5U5F4MghtqTjMRNbhhtTXWJWG%2Bwxw34cgIgAfWrOTeoFKjRSHFzBTigdYzOq0p%2FNyuCBHA9H4HEzSEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKPEwbCLkDuxd%2FRMVCrcA9Y21bd5udXO9r5lWcUBubXEooW1SVtLskd0mf5Qs0CVb%2FxtIB8h0iVWE6N1tJo1bdAreUKMJqxS3m9tHrAVROg8rw4uVX5E56N7nVGDzHxJMkB6hOib%2BN%2Bb06BJoKu30056f86Qiyu4FZB03GVUPCDZf2P5UY6aVjjHLgR765MDv%2B47FLT5D%2F1O1ao62bOxhgY90CqVOBTf96MrbRoFal425VTXRTwWF5c3FGpyoC6zlJEB5Zd1ZcVbAZoOL%2Fz6lT3D4X2HqtVFGxmh06TOhbw%2BDn3hwuUFLVv8udlS1ckZw96GYHP7lHmsN74G5ekufOpog26yyoY%2BB2Dc2g6Z%2BmtEgKPmx1mjmU%2FtZBuVzWj%2FfJX0op%2BINqzTnpXUZ6M3YzED4LBnuzzIPzuPW%2BbmxZgmFsm7gSX2sSDKiT0QsT5d%2BdErxqmc9WFP4vyDVA2rWFN2a%2BG9Ye%2BrOHh%2FM9AeMyzC6dxOXJ58cyoRb1oPQjOpYeW0mMgZuJmxlnwMHYa4BkVKypaxGKOKw%2BhBR09e7QgU3F7q0HnlUsBy2D5SFgmgs0JCjBTudlOmqA2yPvX5kOjcirt2IFuUFIamwOEyPJ%2FQSkYNqpo6uLhWao9SntWXP95GWyVBkiCuTzSdMK6q5tIGOqUBBXgQicfggyjwlfHAazWX9hFp8wvnOQhf0CDh8t9BGKWuvLz75mQ%2FiUcCgKbNcgDMnvEy%2BKUCTwhYJDK0fxEiMyztkAZm3DD5NqDTQ10GahDxrT42jYGei%2FkW9BxZTigpoHYQWDXI%2F%2BTZDMpBka9vyz15likrD3nP3cRe0BPBQcT7h15jjDJCXWFcrhOoCGV6TibusSHC7GShPGvRfjd5npgqN%2BZi&X-Amz-Signature=4f4ee237259fa15963ea3b6d39984e800b67f18a9ae2a60ec18329f3571a5b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NRXJUO%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTptzCURA0KOJwRPz16iA1Dr6Q5jbA5kVl%2BGc71Z1DRgIgC9EpnWDef8AhawjBD3FtRIxLheRNr1Wy0XbSSMmfpaMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJPItybdxK2gKO65BCrcA6POQbiBusAy9SkKqaT5BiYRY1BP2woQAjviWCAl60Cor8JeLVvAkmyCvXdNvuLH5m%2BJt1JqFNXoyc1RcZJRGgVJvFbHPuCCY5BYY8XMzZq%2BuSRnFUG11KJfj1Ny1ih59HCzgFQUvvqMCp8xDaQoBsCZtFPr61Lebvld6%2FHYU2CYr5VoJHU5agKQcypFrK%2FRpoT42MIitSuovFeW75zPMnewxJ1DN%2BWao%2FEXN6m8IWW8HWzoO9NSRHlASDFfy9hYOy4QleQ4prUHxoQsl7f5TME0lY5qRxeaEOEXHSL50aFj%2FUzZWp6lUC9YBVjYfsw%2BUvikklJjQ4oQvpPHgdVH0UduyVBoe0nNB6CPDz7CAPE%2FNnbcf361o%2BK%2BOrN45IYztl%2F1e8HXg38Gjq5VPUUv1yA1hklRjr0HM%2FMzoeF2fxnTA%2BizZchBUFjpOiDou5MxKZrVWt1nMv2k5sUs3lLGAhrNTJRbjZthBBA80W0oQW3XyI0VgVipXk6aHum8oc5HP8DtrL4xdfI7GP04D2KvuTHggyGa31msWCQ8ji45cWh9pv5LX%2FR86A18NNLQC58yGwC1jUrjsDgT5tL3J2yFgGb6hn%2F5odAFpLmVInsnodG8imwFMpyzr6AdPRdhMPeo5tIGOqUBpbdag10rZKi6RYAKPWoJGLSxGtIOfvxX2rZsUtwd4pfOn5tDywisYCHaJTIDBk8KecaOvLRvLknSKY%2BPhOziwvdA0CwM74BGc3oEhpcvVbPPeA7H%2FPPtGPecJNclOypmT%2Fbfhyy%2BI55z1GR98RRL57mNSuj6wMe5%2BbN9UM8W9nJKvY7cMH4yQyVlBcJvwfQ1JE9J%2Fr0EKioRwWCPpGtCl9mJJXwz&X-Amz-Signature=a4e7fdf6f7a1c702ff10f53752bee418b37aab40b7d1c271da5d3f73ad4041b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOA5W4K%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclEXreyY6P8CGZbzTvStG8AH90CAc8xUsgHkluvYjoAIhAIem7pk4c4mVkaMRGUgCsg7N%2FAZ9%2B2tXps%2BSOGwsp8WtKv8DCFQQABoMNjM3NDIzMTgzODA1IgwBHi8I%2BxMGePVGZIIq3ANIq0LdX4UBns41kZtA7Yg9FcFC6AINn8tLwvTIlj4%2F6yDPBaxmD%2BHWXLZ9%2FPYRLd8z9she3x2ygYIRKStxzLy2YX8ZeDtYCg0BOA5pIZcVgIuc3Rpb28F6Vt%2FWysw6JAHbzQ2n0MsFrxa7c6oQ%2FxLha7iLNg3UrJqmiS1hQsA6omX0wJgMV%2F3ua5KSMQq6VhOpaQaeJ5lQ8nlYhyqOuYNYkgtJOmjfgsmG9bVNURsILyXBNDCk0C783VjsGoxDheg35snPwloFpvHc89tVNrCOVmrhjeU4V1%2F812qCSS1tybj7ruXD6cMpUltMObj5KcZIhpNPVlZWZDEVYE9tfIjp%2FDxtlJWGpRziu6y6xbCJQ3f7HmW%2F7m3IJ5%2Bh%2FT9ORK8ox%2F%2BoaAKqsY7PmLqp%2FgKMs7dHhuKvD%2BB0a9Oer74u7PJHVO86lrjCt0i9TsCVlnmkNHuXulqYyecWpPPn72Uzs7LYNFGlYq%2Fxjb6fAOy5viMyjmchM1MhUW1Fb9hRfbi5E5gNph3XBbRkPHuNvo7PKYULeESOFi0xPMKV0rKejEWEIGjZuj%2BYurLr6mts0M6CESh2KJ3WzlXe9UWgLIUwbJnBJyXsSg423ewbUOCDOLzauUeLR8NTZiW%2BSDDNpubSBjqkATXLj64R0KfpdcgKWOtOWDtB%2BFCT8EIWGiNx9mzVmhcV6fZ7OCQ9Y1Ny86%2Fv4mAZbj7GOHoNZlToiYB6YS7sDbDzkDuQrWJx3WtCOIF%2B1PMFjh8ndi4lxYlGWAkuCmIecBvi6TMUSyvUz5XfBt44VA14MHmKWOxIYyjJ9IVUmVRo3JfUKjtQgBcMz8jMi3OQYu9yby9kO8LTKDKlckkVf1n15VOF&X-Amz-Signature=138f5c31d119068f5126b0f2453d495ff9f3dd2fc2a5afc671d5d554f810fc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJYGCCH%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnJN7KDYtS5U5F4MghtqTjMRNbhhtTXWJWG%2Bwxw34cgIgAfWrOTeoFKjRSHFzBTigdYzOq0p%2FNyuCBHA9H4HEzSEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKPEwbCLkDuxd%2FRMVCrcA9Y21bd5udXO9r5lWcUBubXEooW1SVtLskd0mf5Qs0CVb%2FxtIB8h0iVWE6N1tJo1bdAreUKMJqxS3m9tHrAVROg8rw4uVX5E56N7nVGDzHxJMkB6hOib%2BN%2Bb06BJoKu30056f86Qiyu4FZB03GVUPCDZf2P5UY6aVjjHLgR765MDv%2B47FLT5D%2F1O1ao62bOxhgY90CqVOBTf96MrbRoFal425VTXRTwWF5c3FGpyoC6zlJEB5Zd1ZcVbAZoOL%2Fz6lT3D4X2HqtVFGxmh06TOhbw%2BDn3hwuUFLVv8udlS1ckZw96GYHP7lHmsN74G5ekufOpog26yyoY%2BB2Dc2g6Z%2BmtEgKPmx1mjmU%2FtZBuVzWj%2FfJX0op%2BINqzTnpXUZ6M3YzED4LBnuzzIPzuPW%2BbmxZgmFsm7gSX2sSDKiT0QsT5d%2BdErxqmc9WFP4vyDVA2rWFN2a%2BG9Ye%2BrOHh%2FM9AeMyzC6dxOXJ58cyoRb1oPQjOpYeW0mMgZuJmxlnwMHYa4BkVKypaxGKOKw%2BhBR09e7QgU3F7q0HnlUsBy2D5SFgmgs0JCjBTudlOmqA2yPvX5kOjcirt2IFuUFIamwOEyPJ%2FQSkYNqpo6uLhWao9SntWXP95GWyVBkiCuTzSdMK6q5tIGOqUBBXgQicfggyjwlfHAazWX9hFp8wvnOQhf0CDh8t9BGKWuvLz75mQ%2FiUcCgKbNcgDMnvEy%2BKUCTwhYJDK0fxEiMyztkAZm3DD5NqDTQ10GahDxrT42jYGei%2FkW9BxZTigpoHYQWDXI%2F%2BTZDMpBka9vyz15likrD3nP3cRe0BPBQcT7h15jjDJCXWFcrhOoCGV6TibusSHC7GShPGvRfjd5npgqN%2BZi&X-Amz-Signature=0b0438b21288b00d83082e203a69be3cd57110b571ebb1f77bd15a9f4691465d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
