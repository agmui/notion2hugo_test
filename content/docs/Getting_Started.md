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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWPO5FY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCqyd5AjgH56QgwUkEEQoa2CBrfWX0hOAEboEJ5snSjBQIhAP4dtchE3l%2FsP6kE6MVTeo02lQMrF47NuBiD4RBzbHPhKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B2ivqBCvdkVcJujsq3AM%2FUe1QslZcP7lf8l5gI39iPsMjaAS9kcGnu2Mq0zUaSpGJ3JLMDalFQuJxYf5DLAQRZmcRK3N5FN5coRixNPI3XTEojkBZ9ABjOiYbszE4ZseM0tFZ26ywQusUh5wPMtXuEkHv3Mius00meUOa9f0tx%2BvCQ1YBNWAKwLIBQP7qTglg3QFAWC3KJf%2B%2Bnlayf1DvKcv3JcDT8FjHKzhZwtESh2Rpf4Xh8JfeX1jdseLsIimcspELMnhUKQ%2BbJByKQxnT7CJIjjzzizZOpbEI%2FH7MTH90dukGXEaO0prcIILvSeZYG%2B7WcKkOPZCt9HJF1C5IHKzZ5NHNdAIMtt93nmdzGxosexeFiuOrwXFaKiGPa9anC3HUoFgPPA2D7J9BpDKTGuLTzX2k0mpIXF4OQpYmo3w0WiKTkLp%2Bg1d%2B%2Bqn4ph2sT7KyOLSuAE%2B5R6zjzu3tpSMCbaWcYMGbrm9c0UK1uapMo%2BGyWhd3ItFnxl02A%2B1gAeQisDpUmRn5t4up1i9YW3y3XiTwLbkV3xvQ4eZDrAyvott7s22rRZVW%2FDh5vRfEBdTkzXa3DJnhw%2B%2FuclL87Fg0v%2F9E3irf%2BxfPcdx%2BHfFetPl%2Fp9YVfk9T15rPrVIJmcJPVJfohlXSXzCKt9fEBjqkARGE79PXTTPcSFta97zKJoAORIOBswUtF8igXgVlFRyCWj%2Bn%2BlOKbyArA9lD0fI4uvb2Fus3OQlio2Ybe%2BjM0bQll0fJPry8Jy3PVu546wcGYepgS1xMDJ1JgKkZpDh2diEmFVcPpIoTkJrG%2BranWDy3af0qyCr0v48L6yl48mNGjE0rkA2nniQc1EpLIHX8HxCYSohRnhzEY2SIqwOG51kZjdG4&X-Amz-Signature=e6c8769ad8442f21fef984302c46b2bc289f8ad3206e9e31238d39e1196129ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWPO5FY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCqyd5AjgH56QgwUkEEQoa2CBrfWX0hOAEboEJ5snSjBQIhAP4dtchE3l%2FsP6kE6MVTeo02lQMrF47NuBiD4RBzbHPhKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B2ivqBCvdkVcJujsq3AM%2FUe1QslZcP7lf8l5gI39iPsMjaAS9kcGnu2Mq0zUaSpGJ3JLMDalFQuJxYf5DLAQRZmcRK3N5FN5coRixNPI3XTEojkBZ9ABjOiYbszE4ZseM0tFZ26ywQusUh5wPMtXuEkHv3Mius00meUOa9f0tx%2BvCQ1YBNWAKwLIBQP7qTglg3QFAWC3KJf%2B%2Bnlayf1DvKcv3JcDT8FjHKzhZwtESh2Rpf4Xh8JfeX1jdseLsIimcspELMnhUKQ%2BbJByKQxnT7CJIjjzzizZOpbEI%2FH7MTH90dukGXEaO0prcIILvSeZYG%2B7WcKkOPZCt9HJF1C5IHKzZ5NHNdAIMtt93nmdzGxosexeFiuOrwXFaKiGPa9anC3HUoFgPPA2D7J9BpDKTGuLTzX2k0mpIXF4OQpYmo3w0WiKTkLp%2Bg1d%2B%2Bqn4ph2sT7KyOLSuAE%2B5R6zjzu3tpSMCbaWcYMGbrm9c0UK1uapMo%2BGyWhd3ItFnxl02A%2B1gAeQisDpUmRn5t4up1i9YW3y3XiTwLbkV3xvQ4eZDrAyvott7s22rRZVW%2FDh5vRfEBdTkzXa3DJnhw%2B%2FuclL87Fg0v%2F9E3irf%2BxfPcdx%2BHfFetPl%2Fp9YVfk9T15rPrVIJmcJPVJfohlXSXzCKt9fEBjqkARGE79PXTTPcSFta97zKJoAORIOBswUtF8igXgVlFRyCWj%2Bn%2BlOKbyArA9lD0fI4uvb2Fus3OQlio2Ybe%2BjM0bQll0fJPry8Jy3PVu546wcGYepgS1xMDJ1JgKkZpDh2diEmFVcPpIoTkJrG%2BranWDy3af0qyCr0v48L6yl48mNGjE0rkA2nniQc1EpLIHX8HxCYSohRnhzEY2SIqwOG51kZjdG4&X-Amz-Signature=888e3fb097deea25ce357e357b9a23c5446b1056d0e916343efa40fb09aa3fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWPO5FY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCqyd5AjgH56QgwUkEEQoa2CBrfWX0hOAEboEJ5snSjBQIhAP4dtchE3l%2FsP6kE6MVTeo02lQMrF47NuBiD4RBzbHPhKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B2ivqBCvdkVcJujsq3AM%2FUe1QslZcP7lf8l5gI39iPsMjaAS9kcGnu2Mq0zUaSpGJ3JLMDalFQuJxYf5DLAQRZmcRK3N5FN5coRixNPI3XTEojkBZ9ABjOiYbszE4ZseM0tFZ26ywQusUh5wPMtXuEkHv3Mius00meUOa9f0tx%2BvCQ1YBNWAKwLIBQP7qTglg3QFAWC3KJf%2B%2Bnlayf1DvKcv3JcDT8FjHKzhZwtESh2Rpf4Xh8JfeX1jdseLsIimcspELMnhUKQ%2BbJByKQxnT7CJIjjzzizZOpbEI%2FH7MTH90dukGXEaO0prcIILvSeZYG%2B7WcKkOPZCt9HJF1C5IHKzZ5NHNdAIMtt93nmdzGxosexeFiuOrwXFaKiGPa9anC3HUoFgPPA2D7J9BpDKTGuLTzX2k0mpIXF4OQpYmo3w0WiKTkLp%2Bg1d%2B%2Bqn4ph2sT7KyOLSuAE%2B5R6zjzu3tpSMCbaWcYMGbrm9c0UK1uapMo%2BGyWhd3ItFnxl02A%2B1gAeQisDpUmRn5t4up1i9YW3y3XiTwLbkV3xvQ4eZDrAyvott7s22rRZVW%2FDh5vRfEBdTkzXa3DJnhw%2B%2FuclL87Fg0v%2F9E3irf%2BxfPcdx%2BHfFetPl%2Fp9YVfk9T15rPrVIJmcJPVJfohlXSXzCKt9fEBjqkARGE79PXTTPcSFta97zKJoAORIOBswUtF8igXgVlFRyCWj%2Bn%2BlOKbyArA9lD0fI4uvb2Fus3OQlio2Ybe%2BjM0bQll0fJPry8Jy3PVu546wcGYepgS1xMDJ1JgKkZpDh2diEmFVcPpIoTkJrG%2BranWDy3af0qyCr0v48L6yl48mNGjE0rkA2nniQc1EpLIHX8HxCYSohRnhzEY2SIqwOG51kZjdG4&X-Amz-Signature=bea6bb246f3bdd0aa03b8a2e38b317a24fa54a5c88f648ec64996f3163727c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEP3XMC5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCviUQdHs%2BkEfqwFOentRZgeJYZQbr7XlHEZYNGx0JEuwIgGPQabYKATxQJn4RmkxGW5OeJciONj4GSc83m8uIBTG0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO0yYiVXcHnXXBpoyrcA9ozR%2BCLBrc8f6E1l%2FACMlrgzeEfff5JjIH93r1aRUIwcrEZ%2FqVwxIcFmgpGhOB2Ef%2FAOo14EzsfpIxxOzWAnjPkQHulr%2BEws7xUExQY7MkEmLcadR9WsfwpzPCvfBymksqezMQalB%2BPQZ0MvStLkL3eaz9dt14T18dqjLqsVluQIKkpG%2FyQq1kLrfIjHXhRKC8uEcj28aoznlOgCGCRMdaACsbdO9BorxFe%2FBMBPMCdz7Qku0EVCuivmhWAlK7HIhYSumSdwPpzfSdfOVdCh08G6a1DWppa%2BqUNe4SJvhDvd0mJ2hK4hCj6szpyCUbUv56rajythOpASj7UBi1ZJwGR1EPTfnrfq4%2BUSfevoe2mGCGhR%2FkJl8IpvAx%2FvBC2%2Bnrc4UuB7o4%2FdNDx%2FxFTZavTRIO9POGIyBCYdJ%2BMghMOv4GNt1wgfLxoylF7q1HV7muSV6%2FZOWUFeXLp4g%2BnOROBVWxPYMmR3jjj2bJnNjCNJLyo7koWu%2FcP5jspMBfuIOlJCluBwyJZM1TyywMZbbUulwMMQr%2FIdfn%2BNl4Q4tZDOwGGfv9CJb%2Fx44uGRQ3EerGAOjBaq2ak1R3RcGLi7CSwK6UBWKR%2FYPCJaq4O43A8SezIanZK7xD1JaaFMNO318QGOqUBF40z3NZTE4EfeTA9QzcdzCqv6rNB9j83lE1fntj3r6GO7SiDScmRkqQMb8u%2Bz%2FB8FI8bpHmQORGdL6wmjCBNhHP6zxGiSqwj5EsV%2FSZzS%2FwbrMt0cx2maGkYDvvqc3xPyiuOniWoHrW1W4ZoiKwch9j4nRtztF8oCbgnTgw%2B2hiDAdbaJWjjfSAeLkHvXPwkNkh%2BDdsSniR7cm6zzz2kYxgqL1j3&X-Amz-Signature=fd774e9bd091ef4910416ad94d3acb8ffdec9d522d8052473609d8fd52e19d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTHE3D3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCrW%2BQRkvmRTOqyFC2n8cb0DycZxYtV48r4wz0DYqxXQAIgeI4ijJorg%2BTg3YahED523WJ0t61GUzvclQxfCfDDAk8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHqTPuyi3ovSSOiPircA3khK5%2F%2BI3g0M%2FVmHpYpH70eOxyWXo%2BS2PMZ69IpAgRv91jGSdxSpRM9gLKl5hh5%2F8SUUZS9U75ZE80JSeQRzLVpJ6nfAqXvV1ZQKZrhDYpxoJCxH8lkIlLc9ZQNMdvqB67ZRz89RXOyb5M65R3Rh9cOpiRa0YUg2Rir7Em9wmae4hqIiveqAoLdLK6MbS8pE4zxmeFd%2BegRruum90xuumYUc3XKaea6sYE8jydUg3sYVu4sYX7oy0VEbctT7DzPtXv6%2Fc1X%2FLM7SEdWMr0qFstwoVcVdaY2fMowV9DnXTpojArAYC1Lp%2BTAg6FdhP7xvR21n2quRgWYvALdDzPYxdtjoffXGyTIa2NNS%2BtCdKcf%2BCAa8pB%2FrJ%2By40OWkLg7YOC1BU4zwpbhgzLzJKf1cOxsMqtSgHRnOFk0V%2FoAd7RshkUGdyZBPgYeGVpkJQqS%2BL4DgIyq5dVz6Ul5lVUNXUEEhkNzLRCX2xxX%2BSjTNUjHzH8pYapJcI0Pmb1ImScR0yFMoX5ytro%2Bs%2Bee8efywIw%2FbAZfLjdRvEd8OFLxBKuDwCsKKu60icpxhuhrfBPBicq1g47DlHCmWo8ZnQuiuQIoVTFJpO57QJ0dM8LL1yDUxNjrHWN39QDxwc%2B9MNC318QGOqUBx9Xq3r5mwborfeyRG2ztaP8xWP459sGgnnnE4tJB5YniAWCeSJtWfZ6fA7xuwNMVBCXJ4v629fk2FthubPBqJ7p9KtJaKCHJKo5FLos9gvn%2Biw38uwcpRuzxaGYrvjzLwST0ST4%2B7T8iKJz6IK70gbzR5W9IN4d%2BANtI5QwK7mxPWYnC9duRNe8enS2DysPNkA0GHguul8Ri6jUMfYeUQ%2BRrzdZJ&X-Amz-Signature=9417ecaa91c21c347287aa5d18bd3694727e712281bdc72a632b1d05f964cce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWPO5FY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCqyd5AjgH56QgwUkEEQoa2CBrfWX0hOAEboEJ5snSjBQIhAP4dtchE3l%2FsP6kE6MVTeo02lQMrF47NuBiD4RBzbHPhKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B2ivqBCvdkVcJujsq3AM%2FUe1QslZcP7lf8l5gI39iPsMjaAS9kcGnu2Mq0zUaSpGJ3JLMDalFQuJxYf5DLAQRZmcRK3N5FN5coRixNPI3XTEojkBZ9ABjOiYbszE4ZseM0tFZ26ywQusUh5wPMtXuEkHv3Mius00meUOa9f0tx%2BvCQ1YBNWAKwLIBQP7qTglg3QFAWC3KJf%2B%2Bnlayf1DvKcv3JcDT8FjHKzhZwtESh2Rpf4Xh8JfeX1jdseLsIimcspELMnhUKQ%2BbJByKQxnT7CJIjjzzizZOpbEI%2FH7MTH90dukGXEaO0prcIILvSeZYG%2B7WcKkOPZCt9HJF1C5IHKzZ5NHNdAIMtt93nmdzGxosexeFiuOrwXFaKiGPa9anC3HUoFgPPA2D7J9BpDKTGuLTzX2k0mpIXF4OQpYmo3w0WiKTkLp%2Bg1d%2B%2Bqn4ph2sT7KyOLSuAE%2B5R6zjzu3tpSMCbaWcYMGbrm9c0UK1uapMo%2BGyWhd3ItFnxl02A%2B1gAeQisDpUmRn5t4up1i9YW3y3XiTwLbkV3xvQ4eZDrAyvott7s22rRZVW%2FDh5vRfEBdTkzXa3DJnhw%2B%2FuclL87Fg0v%2F9E3irf%2BxfPcdx%2BHfFetPl%2Fp9YVfk9T15rPrVIJmcJPVJfohlXSXzCKt9fEBjqkARGE79PXTTPcSFta97zKJoAORIOBswUtF8igXgVlFRyCWj%2Bn%2BlOKbyArA9lD0fI4uvb2Fus3OQlio2Ybe%2BjM0bQll0fJPry8Jy3PVu546wcGYepgS1xMDJ1JgKkZpDh2diEmFVcPpIoTkJrG%2BranWDy3af0qyCr0v48L6yl48mNGjE0rkA2nniQc1EpLIHX8HxCYSohRnhzEY2SIqwOG51kZjdG4&X-Amz-Signature=5077aa0046987c8eb4a20f0abf4ff30b12abfd80a93d285db79eb820a3eae217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
