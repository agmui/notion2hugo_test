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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQEDV7H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwZq%2BO4kWmct9YIuyWbSy0modCggyLR0CnQ44ompOB1AIgB8TwdrMLCxwSOrYxCO%2FG%2BeCOO1%2FTCE4fiiOBqa40TAUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcjfR5wLWCcG%2FK81yrcA%2BKDxYq8TAA4LXEtq6ilqk9Gq7kHoJ9tteSvpzudlEDp47qqZ02ZTFjjZdWgFzyvBYleWiRPs6uIH9L3i2nHeuj%2B6OCg1yNtijNvWl9A2%2BUq%2BeoEM6gme4z2VZAuI8UnKdQOafmT0HsmGGVV7OgeUWR6EvgAMPHO%2F6eMkc6o5kXHd5BsFJPdEwYcR5IWcNFdIO9VtIyTLv9OdLQgGrjDZAMtQMKtPkrTmXxl4HMj%2FTyYWgCFb49ThRkODqs4j8CPyTh0McPju3QRCbr0mPBV%2B18sLmh59CJxu3KLCL2ULVNONH%2FSnumr1cxIuKg4ShlyfESBKhOgA8KwC3F8nX%2FWza7dFd4qBKvIvYqaZ4pbSBo9%2F85L6sNyivCQ9e6XvXcB99VARhzY045zme5dneSdwsSHy%2FJuYNKaz06NrqM14%2BKQA9FxVJBaZ4sm%2FogSZANmzFgbJ6ni83UUbdtoV1446yj%2FLMhugzZo44OmmbfszEpkx0vlomJxeAVna8bgFMP9Xi9EIJ09tOxFMk4u3mcZRrxtz7Q1pmQYBZ9v4%2FfnLYsp3Sj%2BmKv5z9jRblVaybgXXa68g2nwUrL8ct%2Fuhc6dmc%2F%2FXLjYJRKDpuBYlkfeZrHkhgtx0xnYhzK%2BiCMhMIiVjL4GOqUBAKT2km27QbBS2bGPi4fXdSzDeRvllM45koB0heEt2EH2QYV0YiWlgZssvjV%2F7iIU78s83qh%2BAbx2JLwjjFY1z5o4hsaysn2rOr8x5JhkOVBEmvTZWnALWZvgSr7IuvqdLqqlZH%2B0xMtUAc%2Fq8fJbb3EsXDd5XxhfKzxs1Wh2zEZWTzc5GJNQ%2BP8uaI0e5j3YSqGO%2F46Euj5JT6x1%2BMpVAxl%2BzJcf&X-Amz-Signature=9a14288bfbae5db9448bab797d7c9520ac013a2bdbb055163192f472e8b21703&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQEDV7H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwZq%2BO4kWmct9YIuyWbSy0modCggyLR0CnQ44ompOB1AIgB8TwdrMLCxwSOrYxCO%2FG%2BeCOO1%2FTCE4fiiOBqa40TAUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcjfR5wLWCcG%2FK81yrcA%2BKDxYq8TAA4LXEtq6ilqk9Gq7kHoJ9tteSvpzudlEDp47qqZ02ZTFjjZdWgFzyvBYleWiRPs6uIH9L3i2nHeuj%2B6OCg1yNtijNvWl9A2%2BUq%2BeoEM6gme4z2VZAuI8UnKdQOafmT0HsmGGVV7OgeUWR6EvgAMPHO%2F6eMkc6o5kXHd5BsFJPdEwYcR5IWcNFdIO9VtIyTLv9OdLQgGrjDZAMtQMKtPkrTmXxl4HMj%2FTyYWgCFb49ThRkODqs4j8CPyTh0McPju3QRCbr0mPBV%2B18sLmh59CJxu3KLCL2ULVNONH%2FSnumr1cxIuKg4ShlyfESBKhOgA8KwC3F8nX%2FWza7dFd4qBKvIvYqaZ4pbSBo9%2F85L6sNyivCQ9e6XvXcB99VARhzY045zme5dneSdwsSHy%2FJuYNKaz06NrqM14%2BKQA9FxVJBaZ4sm%2FogSZANmzFgbJ6ni83UUbdtoV1446yj%2FLMhugzZo44OmmbfszEpkx0vlomJxeAVna8bgFMP9Xi9EIJ09tOxFMk4u3mcZRrxtz7Q1pmQYBZ9v4%2FfnLYsp3Sj%2BmKv5z9jRblVaybgXXa68g2nwUrL8ct%2Fuhc6dmc%2F%2FXLjYJRKDpuBYlkfeZrHkhgtx0xnYhzK%2BiCMhMIiVjL4GOqUBAKT2km27QbBS2bGPi4fXdSzDeRvllM45koB0heEt2EH2QYV0YiWlgZssvjV%2F7iIU78s83qh%2BAbx2JLwjjFY1z5o4hsaysn2rOr8x5JhkOVBEmvTZWnALWZvgSr7IuvqdLqqlZH%2B0xMtUAc%2Fq8fJbb3EsXDd5XxhfKzxs1Wh2zEZWTzc5GJNQ%2BP8uaI0e5j3YSqGO%2F46Euj5JT6x1%2BMpVAxl%2BzJcf&X-Amz-Signature=b5e79aa0799b517420486e161e642bbd2b11774275d3dccc76a727b01931ed25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPGPZLJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDD5%2BigqPgZWwbfaM8oiKUXTXWlXsbwh9e4ZDwKr1ZtCAiEAuGxFPjdq3BXC4O12oa0jwIM%2FuafYl3%2BYvqfL9bCaPg8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLHgUNH4zWuZj6GuSrcA3ntXO0cQwoArP%2FTXfTxYXdLbM%2BRjGsQ8BNUqwLb%2BrJv5u0cYQk5M2e3pAjQMHK9cBkLWiW%2FRLpRESe8uaEVbiqjTb%2Fwo9D%2F8PFHFu%2B%2FXBmyFvZztB%2BA4Sm%2BeiDij0v5VjGNxVOQ9S2wnhAzaFItyUn2p%2FhiqvN4meL9uWOOpkPMXaxXZuSuw0MBRLg3IC%2F5IRdB5IqLdDjahdoZCWV4VGwkZ4sw%2Fp5FWpWm21xqOgzsq0kklE9a%2F35JwX2hjEMrWMW7aR%2FExEyq94cJSvaNjsvglbld52sSgzdzxJMjDtgLL6v%2B%2Bw9YuN6gY8%2BthmLlz0Xve52yy9OX%2F3c8gzYw3t8VLfGnzRhjZFp8twBmVj6SZkU2yoNpvlyxJHoF6hLyDNsK6Inczuh87TsMMhVU1ZHIm4PPzqY3P7z2S8doTfgfNHoix4BiO6EHMLIfVNcHyRBCf1Vcx00uQPEiDxV4CqUztuu1LSw%2FRNRQ8pxwrp5aGrVtfIe%2BzN%2FwA6%2BiXzC810qp0IVqAExTrWaz3Fjecd5HMctqp3Nlo6LVIo3XNlYWPhuKx%2BNEtKtCIHsY6eiXKWCzwWY70etCceEwxNIFM0D8S%2Ff3V5sw%2Bhcut9IOkQfwd6rkd5q%2B%2FzGaK%2BU4MPSUjL4GOqUBF1wA94zyvAKQUjp5a4vgyNr%2FPPVi%2FbnDuWFgEo5211O2AeckLI36T7mfQtnplxZLWbl327qYIY37J1WrVXJfP1wr4A7LJA4rgh%2BoWZ0feuISYpvv63bagx51pPreGo7HWG7oX0cJtkFKqgEV7T%2BCPL53kvJ38eU%2FLtCq39rFbQgetXiVvJkQ84lKpyQbZw9S0XCe6RHMbC2wslJEnwkj2cpi9GF4&X-Amz-Signature=3f8d1c53f042f82e48783e19248b7b51b2fdfb5f958554b9b31d4cf28f84d0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVOHZ3C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGncA1WWBwmoNjQ%2BrUyJCBJZp3DnXY6h9%2BtAScdO0G51AiEArioZeiIe68czdI8Mtqpq7xhNXWCFZ0i3qfOPj%2BkZCNwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BzKQV%2BQ83DFNmpfCrcA68JVoT3ZnTiJAzSGnBG86VYzpxrHo%2FLAo2JvZpPfp7N6czTM3Wborgw7XD1XbPlR%2B7X4pFfnSDB8JsHSFVcZ6oA1uJ7mBE6%2F28TFbGhIgylIuWYAvNsnOX1y90vUzhmxXBlzSDQaBMnqKwFWwkToiVRX9N8fAMoe3Uk0cOVJLqF6bfZydOh%2BxwCSVk8TBldZAr2%2FbvTCIvn26LFwXRVdJ9aRg1jWpvPQoqFWuJKFM7u3fOMvQwoGCrA6ih1SD2H1cWb94z%2FjriHGgG7dbT44IJHILHPM6KHafqvXt2tBO7CIvsfJU5nKhyQsOQWUA0T69MXkAUj%2BZC7EHn%2F%2F2RxYRsBmhyN3yad29vgRiI9V4QZw%2BftaSI8QiObeGAh%2FlnevmAbefFldl8rHhVtVQ%2BLRTDqlWhTBRFo7DPj6PPq28BgDBaBEh36UVvHEprKLlHnd1X0PlmYSlR2bCrXvAMmcitOK%2B10bCXxpEQqexg662qUov64YuywiULaS8UTNXmX5uBRshZqG3eae1KWoXFUBrPbBs5TKyHpXzUFyIgWXU7n6BiHpCnSaZYx2QJ%2BW8EZaEjvT1W8CgGmAe6sdTRnwNQYXKrV026MPPa5xVS%2FMSJk1uT5S1V9i6E38JifMP%2BUjL4GOqUBRhfXVC8JSNzhFrIwM63m5tdCR2GwmSxIkGJYXvXZ%2B87zwO8xSjlNdLy7aV6xJoULvyMsX8zu0M0%2BZ2ZNBuHmXvgnsxNw3lotr1yw%2FKITBJz6%2FfmY7PRK0MjOk%2FiqDLaGs%2Fw2F7CiUbPk70d7mXX78Fc%2Ft0meC8yqwVi0Cw%2FH4MCe%2BmNVq93KtgdFkEu0Az8yny%2FXAYo511k7WFnjxK37X%2FXyWJU8&X-Amz-Signature=6baae76b6754e942de43ecf99dcd1eabe39485e313f85ad7d9c75565050291bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQEDV7H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwZq%2BO4kWmct9YIuyWbSy0modCggyLR0CnQ44ompOB1AIgB8TwdrMLCxwSOrYxCO%2FG%2BeCOO1%2FTCE4fiiOBqa40TAUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcjfR5wLWCcG%2FK81yrcA%2BKDxYq8TAA4LXEtq6ilqk9Gq7kHoJ9tteSvpzudlEDp47qqZ02ZTFjjZdWgFzyvBYleWiRPs6uIH9L3i2nHeuj%2B6OCg1yNtijNvWl9A2%2BUq%2BeoEM6gme4z2VZAuI8UnKdQOafmT0HsmGGVV7OgeUWR6EvgAMPHO%2F6eMkc6o5kXHd5BsFJPdEwYcR5IWcNFdIO9VtIyTLv9OdLQgGrjDZAMtQMKtPkrTmXxl4HMj%2FTyYWgCFb49ThRkODqs4j8CPyTh0McPju3QRCbr0mPBV%2B18sLmh59CJxu3KLCL2ULVNONH%2FSnumr1cxIuKg4ShlyfESBKhOgA8KwC3F8nX%2FWza7dFd4qBKvIvYqaZ4pbSBo9%2F85L6sNyivCQ9e6XvXcB99VARhzY045zme5dneSdwsSHy%2FJuYNKaz06NrqM14%2BKQA9FxVJBaZ4sm%2FogSZANmzFgbJ6ni83UUbdtoV1446yj%2FLMhugzZo44OmmbfszEpkx0vlomJxeAVna8bgFMP9Xi9EIJ09tOxFMk4u3mcZRrxtz7Q1pmQYBZ9v4%2FfnLYsp3Sj%2BmKv5z9jRblVaybgXXa68g2nwUrL8ct%2Fuhc6dmc%2F%2FXLjYJRKDpuBYlkfeZrHkhgtx0xnYhzK%2BiCMhMIiVjL4GOqUBAKT2km27QbBS2bGPi4fXdSzDeRvllM45koB0heEt2EH2QYV0YiWlgZssvjV%2F7iIU78s83qh%2BAbx2JLwjjFY1z5o4hsaysn2rOr8x5JhkOVBEmvTZWnALWZvgSr7IuvqdLqqlZH%2B0xMtUAc%2Fq8fJbb3EsXDd5XxhfKzxs1Wh2zEZWTzc5GJNQ%2BP8uaI0e5j3YSqGO%2F46Euj5JT6x1%2BMpVAxl%2BzJcf&X-Amz-Signature=46fb9c833bc729f8352c33ca6c3c869c128884c442431431a73f4b0f94aef44a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
