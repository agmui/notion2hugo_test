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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HJJOCM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBzqHLj53K3zpMnlEPCswm24uxeeXkZXdBfIulp6gVQIgfHMYobUfO0cObVU3iMcnlk%2BADSsBfe3aWavhQLc6nHAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BJfw5Xg7Iv2sKqOyrcAwNVmz4F44GGBYNKA2%2F21Ne1vqQoDWxGRRtbCIX6Ep%2BqBwXYOjT6z36HhjsRrzrl%2BqwcCPjw%2FxsRTQLCcKDmhRKNOJwqaFnCGoVBAmR45LIRaoycBjr9I3FlhrKWOraaJw%2BLpNlZ7z6iLOuHaJNi4N9H0pdGMeoHmxxdwNsUZZEp2vFz0TtpK6QLaeFBDPLwvpdn1mjxnZSPswbOBHlzpNi1TRwZ8tIysF3u2VFYBAGCbAyh%2FNI8rgQ%2FJDq0O7fsvUT2AOTSoWXb%2FUxNQDu57wNYrEIA3FsIex99kIwO0jC9T7MkTOQdCoYsGtbLqP%2FJ%2FVfqeFq%2FUEvfm0h4%2FTo5J5L4hpvYWCjoJ1Fc%2B7JMNO%2BIy1FziInrVCPK5gVEOidmHNB6szpNal682rMMxN95WuJ8Qm5qMJXnLVDg3LvxSDe5xtWSKjgWKmbxZMZvBV2kPoux3W%2BpO2LiGPHTR5gxwmcnaAFPjjI%2FY9yEVzOuejzBXQu8aX54qRycayxGggulM34f99FHMX69hP0Nfy3liUJdLfRjWdOFfFTSHdLEyLgi3j1rkhiKRre73d9xarBXxd0AfkVjcVyUJLTBKTK%2BOusWvvqW2OM4ftCvQZotkcqFzBgMlGlhAcVu9NxqMOjH5b0GOqUBkE8Lf%2BPNo6l%2FyviN%2BH2M8cb09BhFEyjgrbDlkGjMdaCI%2B4zJN47hZDuhgR53s3qCcsruj7NSLxnR%2FERzaP%2BT95FO5BrJDuo9gac%2BUrkLkjxzfu6VJDVuClk7wPSVNcI5DuwsCeTaD4d1hUuUisPvWc44E9CkrkY62xKTyyVmPl5I9x51KzdC%2F8BMMCt1cs47e04YS%2FXF%2BagWfXYPsYNi1mYElqEe&X-Amz-Signature=60a0ef3350bde4902574119b68152bcab3377a8df566ddca7a8c302c18497873&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HJJOCM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBzqHLj53K3zpMnlEPCswm24uxeeXkZXdBfIulp6gVQIgfHMYobUfO0cObVU3iMcnlk%2BADSsBfe3aWavhQLc6nHAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BJfw5Xg7Iv2sKqOyrcAwNVmz4F44GGBYNKA2%2F21Ne1vqQoDWxGRRtbCIX6Ep%2BqBwXYOjT6z36HhjsRrzrl%2BqwcCPjw%2FxsRTQLCcKDmhRKNOJwqaFnCGoVBAmR45LIRaoycBjr9I3FlhrKWOraaJw%2BLpNlZ7z6iLOuHaJNi4N9H0pdGMeoHmxxdwNsUZZEp2vFz0TtpK6QLaeFBDPLwvpdn1mjxnZSPswbOBHlzpNi1TRwZ8tIysF3u2VFYBAGCbAyh%2FNI8rgQ%2FJDq0O7fsvUT2AOTSoWXb%2FUxNQDu57wNYrEIA3FsIex99kIwO0jC9T7MkTOQdCoYsGtbLqP%2FJ%2FVfqeFq%2FUEvfm0h4%2FTo5J5L4hpvYWCjoJ1Fc%2B7JMNO%2BIy1FziInrVCPK5gVEOidmHNB6szpNal682rMMxN95WuJ8Qm5qMJXnLVDg3LvxSDe5xtWSKjgWKmbxZMZvBV2kPoux3W%2BpO2LiGPHTR5gxwmcnaAFPjjI%2FY9yEVzOuejzBXQu8aX54qRycayxGggulM34f99FHMX69hP0Nfy3liUJdLfRjWdOFfFTSHdLEyLgi3j1rkhiKRre73d9xarBXxd0AfkVjcVyUJLTBKTK%2BOusWvvqW2OM4ftCvQZotkcqFzBgMlGlhAcVu9NxqMOjH5b0GOqUBkE8Lf%2BPNo6l%2FyviN%2BH2M8cb09BhFEyjgrbDlkGjMdaCI%2B4zJN47hZDuhgR53s3qCcsruj7NSLxnR%2FERzaP%2BT95FO5BrJDuo9gac%2BUrkLkjxzfu6VJDVuClk7wPSVNcI5DuwsCeTaD4d1hUuUisPvWc44E9CkrkY62xKTyyVmPl5I9x51KzdC%2F8BMMCt1cs47e04YS%2FXF%2BagWfXYPsYNi1mYElqEe&X-Amz-Signature=42c001ad3e7b45e14207b994444a2d5d7f2c78825e69b2581fe42213127c44bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2TFVKOL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjccSfgCf4I3U9ul2ZtujoOeBg%2FlO96Ku%2BnwR935KShAiEA%2F6xZG192K0tiklwi2GHiNitMeUcRQRXripnjahXRDw4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6OMVftr%2BHq85VH6SrcA6qkwX6IU8tk5KdZ%2B5DpplsChfN8YD76FTKJADG2A0xLtOP0dILEeBlZVMS2tFCjq8WbupkkrWHbf3MQBimzdhuYyLbHPeT6nvWXjbMixf%2FH9pJ20u1M1EAxZSLR0sp%2Bm6To%2FP%2BjPe5VfzrDjiqtiIEmXtjyey3GrzMQ0%2BXmG%2FKisfzoMKFWNQJba%2BhKT78v83Xwt7Ofo5i3PCPmz%2B5t9KGR2OzyOPSaK4NyfQA9QqpgYpdpFeYtr88D7enJv6cwkLo3yuqTU6Ktu6dklTRBJn8YwsLWKEeC0y%2B7pMwVduZL2RVHUeCDGT1G8hGrFxTbo3Y3TtIsfkcwoWtLekTsxXY1DzH5WayB7sXPJYETVhyzCCt9bTB4sRe83XKgfxvXsFRJBwmN7oHDZut%2BXlc9%2FlmTLITgikNEGUfYvEixAqcGm63CXX26qpH33QL7c7WynPBKwpFtHFW43pWueEEvo4rLtJnvRLPFusljnTABi2VdQj6X0OIhI2jyUHbQcEz6Z7lMcDRZKbRVwtEpxTnXIorIy7p7WckVIXX9fRlJTHsweIqVQbjcye24L8Qg1gr1Hhh1kaZ1NZsG5MIFWuoRoSKEqNyMUpYAe7S5CleFDoXj6SXM3ziYx1Pd8sq2MKvI5b0GOqUBLIsWlrqkAjm1m3x5QT28PnH5iBCKOp4%2FnWoU8%2BUTJgWVi3fhq9xv%2FGIniqBHE8baqzoq2FCi8GFle0%2BQ8gtl1gJPZnglS9uu8NTbzXo6Fl3ogKfrdWTw8ESrQyzmKkN8Edqfe2cT%2BTbTLOn%2FpnUJhSxvZCVssgvtNuxXvk%2Ff%2FtpGsdaj2egIwSNPb%2FmxgXIAHDjaz%2Bgz7CttO%2B7%2BdaFuy%2FzaSjEh&X-Amz-Signature=324111ea87cb4652bbe3d77d6fe027f64f5b3556fc11a0a3983966beb3ffdb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MS36F7I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClL4CuDgxMbjwGNfDKz%2FdFt1uTU01%2FVvDzBQU%2BvV3OFQIgQvxKpGvzQdYx6CIzHg1pQHtX1yPaQvl2CgPKC8JjgZsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEedb4FsMgTZCwdFiCrcA%2FGr%2FtApgdRqT%2B%2B82IPBbMK2jDnyO1eqqtsApZg2wuF%2FodDhe8Pe1sySAa4Wxsqj4C75LXKLR59zSy7hLRLZq6VlQKYyovNO1Eg6B27Dor065QlI66oeFrvuufL5iOoYcKBzw%2F3aR6VEPTqx1neLj%2B4zgsFI5vx7hbu4rX3XRo3GSCAxyTe%2BaqoecX%2FVpRZB9UShTKUeY7sH%2FAX6n8ixL7NpV67aTige1RSDw1lDTbJFfvXJQgI0ZSYjYEOtsB2%2By2k%2F8R9gazJ4nJ6dQARqjd1ssITgd7NY6T9kXZVVVHfg4nrbGd4KY%2FNw%2FCLRqOpvKgTno%2FnIyMQZ0OVtfMIxLs7nu%2Fc1cujlayQE7fY0xwT5TWbQaPXq5t7tNO8anOVfTWDSryqQNp6Exmk%2BtaD13PTt3ClbZMHvbSk%2F60wAZ1SupDrJ6mL%2BQykKXRmA88R7M9oAf3u0EvGWZUo6bjuZJRjOcgTwuHDybh%2FdLk8f%2BQ0bLE6mFQzquo7pV02jjLIArytkNPtCe7OfhBOOTF%2BD4IyJICi3ua9rxgzS98lY71jFiwQz8FRFu0yIHZbfNFzZhSb7I9u9MHnTUiBehm9qOxfVF5SYogHcG6FFUDpyAMf8f0ut8UrA%2BJH2rGoIMLjO5r0GOqUBEuO%2FtgMVxx7ZjYYQ0WXja2OIWqPn5Gq%2Fh7HkPnUF%2BMu2RuocJ4QKhWMuS0Td6jGiKN01WFAwJ7ZWYv%2BJnuhJ9viSsfvRYjaup4WSp1A%2FZaHOd4dy3l8Ck%2Fw4EkX7Asxc93P6pnUO1b9RuEzpuWThZQAH80wdpOCeOo8EYZa%2BOPf6IVuCMZ7e0BgVeqKgXJNaq8e33EXjMXCGuuCx2%2FpCLqUzLm1X&X-Amz-Signature=b97596a194cd7ae7f382f5e238c2f345bc1590939cdd56af87944fd70e989057&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HJJOCM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBzqHLj53K3zpMnlEPCswm24uxeeXkZXdBfIulp6gVQIgfHMYobUfO0cObVU3iMcnlk%2BADSsBfe3aWavhQLc6nHAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BJfw5Xg7Iv2sKqOyrcAwNVmz4F44GGBYNKA2%2F21Ne1vqQoDWxGRRtbCIX6Ep%2BqBwXYOjT6z36HhjsRrzrl%2BqwcCPjw%2FxsRTQLCcKDmhRKNOJwqaFnCGoVBAmR45LIRaoycBjr9I3FlhrKWOraaJw%2BLpNlZ7z6iLOuHaJNi4N9H0pdGMeoHmxxdwNsUZZEp2vFz0TtpK6QLaeFBDPLwvpdn1mjxnZSPswbOBHlzpNi1TRwZ8tIysF3u2VFYBAGCbAyh%2FNI8rgQ%2FJDq0O7fsvUT2AOTSoWXb%2FUxNQDu57wNYrEIA3FsIex99kIwO0jC9T7MkTOQdCoYsGtbLqP%2FJ%2FVfqeFq%2FUEvfm0h4%2FTo5J5L4hpvYWCjoJ1Fc%2B7JMNO%2BIy1FziInrVCPK5gVEOidmHNB6szpNal682rMMxN95WuJ8Qm5qMJXnLVDg3LvxSDe5xtWSKjgWKmbxZMZvBV2kPoux3W%2BpO2LiGPHTR5gxwmcnaAFPjjI%2FY9yEVzOuejzBXQu8aX54qRycayxGggulM34f99FHMX69hP0Nfy3liUJdLfRjWdOFfFTSHdLEyLgi3j1rkhiKRre73d9xarBXxd0AfkVjcVyUJLTBKTK%2BOusWvvqW2OM4ftCvQZotkcqFzBgMlGlhAcVu9NxqMOjH5b0GOqUBkE8Lf%2BPNo6l%2FyviN%2BH2M8cb09BhFEyjgrbDlkGjMdaCI%2B4zJN47hZDuhgR53s3qCcsruj7NSLxnR%2FERzaP%2BT95FO5BrJDuo9gac%2BUrkLkjxzfu6VJDVuClk7wPSVNcI5DuwsCeTaD4d1hUuUisPvWc44E9CkrkY62xKTyyVmPl5I9x51KzdC%2F8BMMCt1cs47e04YS%2FXF%2BagWfXYPsYNi1mYElqEe&X-Amz-Signature=cb29acd11a95eb2ca15a0f8ba69aa404107bb3bcc90c13b17839a0aa98812042&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
