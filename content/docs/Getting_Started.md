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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FLUIJC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDVxqzf4NNm%2FEpyhCVGpGmeqkImbK67tyKQRbRJeytlsAIhAMZ0EmUjX6YEq30tDQZY6dczSwEWTmSBuZwb%2B3G9lWAdKv8DCG0QABoMNjM3NDIzMTgzODA1Igw%2Biq2%2BCn9EXcngAr8q3APsIK8deFl5pZffEbqtTkEgz43gpkqyFxE1UGLJjzY1x%2F3Ld3WvJEBQqVrOkQTjmfW7R1WfQ02w7BZOkjodGX%2Fi%2B%2BcRgMxLF1G2T%2FmnkxBagi6NIYcS17G33qT674MIbZCNKvwn5mLHyW6XGGRJ9Ia2otCQHuNUOSRJ35Ej%2FuN91BQ58Q42q0JlYKIBLASbsQw1dULG13OmecSEDTS8iCqwGaPmII80d8Fj6ZseY0QGgxP8DSUwFDPiBcV053fBlQRwlX%2FYf3%2FwfpWRnJNICntl9wHZHVHbfm4e7TX6N5vdT%2Fi%2BqXAk5hcJb3WJoqXAMGVtsdL3wk%2FkbU4Z3OO5EBPpRihkY5PFjwQ7gGhZqDaq%2B7jK7QWwQr6YV3inpJbsBHz3lvhRhsynPe0lsjHHtJIb5QyBKh2khoWZPCFN7aKox4xEUs5nv7CmsByLDs%2B146U0u1sm9dURVbUBhwSQKv5QrrecGIXhfKMVvtpe1NoK%2BIqhgOa0PQB5DtL98eJ9NTmP1qTJ4KJSmGMGwGUh2d%2FdJNYXvc%2Fn%2FVz4kqsv61IpYB9fVvGQcYzB1F%2BZ0rP80hXT3rBlCUaENLq04UItRA7DnzHy5mNs%2FUv05AzSCAFiL30dVx4ao20ZBVoUNjDvupbEBjqkAR6OcnfaReQTTDqMjSgg9PAy4KXow7Sxz5FvVNnQyvuoe8DDx4UFenV1BSUgmIgYKdat9O%2BkEo6SdbD3CP42%2BsEhhegmIwQFhjTEB%2Bj7X7Ol00QgcS2NRFFj1zn8HaKz6XuE6NfnIVGpYJAz1wiSJ3L0NDzKXGBHb5iCwrMoyflEQBnKXmy9VmzU9xPcovZXmAPR1HyesESK21J59uOX66cM9vlv&X-Amz-Signature=9ec55e3f2a81cab2c3fc860ebf02216503c3fa2dcd986698af23ab7392d22cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FLUIJC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDVxqzf4NNm%2FEpyhCVGpGmeqkImbK67tyKQRbRJeytlsAIhAMZ0EmUjX6YEq30tDQZY6dczSwEWTmSBuZwb%2B3G9lWAdKv8DCG0QABoMNjM3NDIzMTgzODA1Igw%2Biq2%2BCn9EXcngAr8q3APsIK8deFl5pZffEbqtTkEgz43gpkqyFxE1UGLJjzY1x%2F3Ld3WvJEBQqVrOkQTjmfW7R1WfQ02w7BZOkjodGX%2Fi%2B%2BcRgMxLF1G2T%2FmnkxBagi6NIYcS17G33qT674MIbZCNKvwn5mLHyW6XGGRJ9Ia2otCQHuNUOSRJ35Ej%2FuN91BQ58Q42q0JlYKIBLASbsQw1dULG13OmecSEDTS8iCqwGaPmII80d8Fj6ZseY0QGgxP8DSUwFDPiBcV053fBlQRwlX%2FYf3%2FwfpWRnJNICntl9wHZHVHbfm4e7TX6N5vdT%2Fi%2BqXAk5hcJb3WJoqXAMGVtsdL3wk%2FkbU4Z3OO5EBPpRihkY5PFjwQ7gGhZqDaq%2B7jK7QWwQr6YV3inpJbsBHz3lvhRhsynPe0lsjHHtJIb5QyBKh2khoWZPCFN7aKox4xEUs5nv7CmsByLDs%2B146U0u1sm9dURVbUBhwSQKv5QrrecGIXhfKMVvtpe1NoK%2BIqhgOa0PQB5DtL98eJ9NTmP1qTJ4KJSmGMGwGUh2d%2FdJNYXvc%2Fn%2FVz4kqsv61IpYB9fVvGQcYzB1F%2BZ0rP80hXT3rBlCUaENLq04UItRA7DnzHy5mNs%2FUv05AzSCAFiL30dVx4ao20ZBVoUNjDvupbEBjqkAR6OcnfaReQTTDqMjSgg9PAy4KXow7Sxz5FvVNnQyvuoe8DDx4UFenV1BSUgmIgYKdat9O%2BkEo6SdbD3CP42%2BsEhhegmIwQFhjTEB%2Bj7X7Ol00QgcS2NRFFj1zn8HaKz6XuE6NfnIVGpYJAz1wiSJ3L0NDzKXGBHb5iCwrMoyflEQBnKXmy9VmzU9xPcovZXmAPR1HyesESK21J59uOX66cM9vlv&X-Amz-Signature=336da71be70f9d327d4decd06b106855a07ec968510f07b5cf3a3aedce4a5049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FLUIJC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDVxqzf4NNm%2FEpyhCVGpGmeqkImbK67tyKQRbRJeytlsAIhAMZ0EmUjX6YEq30tDQZY6dczSwEWTmSBuZwb%2B3G9lWAdKv8DCG0QABoMNjM3NDIzMTgzODA1Igw%2Biq2%2BCn9EXcngAr8q3APsIK8deFl5pZffEbqtTkEgz43gpkqyFxE1UGLJjzY1x%2F3Ld3WvJEBQqVrOkQTjmfW7R1WfQ02w7BZOkjodGX%2Fi%2B%2BcRgMxLF1G2T%2FmnkxBagi6NIYcS17G33qT674MIbZCNKvwn5mLHyW6XGGRJ9Ia2otCQHuNUOSRJ35Ej%2FuN91BQ58Q42q0JlYKIBLASbsQw1dULG13OmecSEDTS8iCqwGaPmII80d8Fj6ZseY0QGgxP8DSUwFDPiBcV053fBlQRwlX%2FYf3%2FwfpWRnJNICntl9wHZHVHbfm4e7TX6N5vdT%2Fi%2BqXAk5hcJb3WJoqXAMGVtsdL3wk%2FkbU4Z3OO5EBPpRihkY5PFjwQ7gGhZqDaq%2B7jK7QWwQr6YV3inpJbsBHz3lvhRhsynPe0lsjHHtJIb5QyBKh2khoWZPCFN7aKox4xEUs5nv7CmsByLDs%2B146U0u1sm9dURVbUBhwSQKv5QrrecGIXhfKMVvtpe1NoK%2BIqhgOa0PQB5DtL98eJ9NTmP1qTJ4KJSmGMGwGUh2d%2FdJNYXvc%2Fn%2FVz4kqsv61IpYB9fVvGQcYzB1F%2BZ0rP80hXT3rBlCUaENLq04UItRA7DnzHy5mNs%2FUv05AzSCAFiL30dVx4ao20ZBVoUNjDvupbEBjqkAR6OcnfaReQTTDqMjSgg9PAy4KXow7Sxz5FvVNnQyvuoe8DDx4UFenV1BSUgmIgYKdat9O%2BkEo6SdbD3CP42%2BsEhhegmIwQFhjTEB%2Bj7X7Ol00QgcS2NRFFj1zn8HaKz6XuE6NfnIVGpYJAz1wiSJ3L0NDzKXGBHb5iCwrMoyflEQBnKXmy9VmzU9xPcovZXmAPR1HyesESK21J59uOX66cM9vlv&X-Amz-Signature=4eaec33ceae29ff437add35013b0804161305f8749785c9644e76c70f27b73b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TRDX277%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDET%2BGL7n2EUp8mm7yXlO1RCGn2iGA%2FaKGeVB%2F%2BpC4UCQIgKFNpdP90WIb8snk4PSbktlea35SeL3iGZ2vgmO%2Bgf7kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDMFXK36n1WidW9iHyrcA%2F7oRjDBftquesUmaMkyy5xKQ7rZS1ut63dikqNZSFrIhRXhkRQBmD%2FM5nTBjrk32nFdVqOlT8welKPQ9gIXYGVuFWLMQdvf9XCnsbEZMqQVYciNXUVVrjG8%2FaWxptkgiv0GWhyenhNge8f4LKTAP6wBFbW7EL6ft5%2FyUI6pDwQei0wdgPjFFPwB6Pc2CUYZjmMbXlJvsH5AkMI29pf032zRI8BkPxdiM5bhgneoqbQl8wofbhK%2B740BFGm7nGu8jHHUiYlzeI%2FqWJPvZAwoGh8EzaUW5VQVxwL2W7ezgk6EvjG0lZLGfVOzxADtbEf4H%2BWbViKPQVx6iahaAlDNsgGyhIUCFWLJNnz%2Fmj2%2FChMJUH%2FfjoZ84NCQjBhSoeWYr%2FY286khl2GqnMrnqhjS4%2FfibLlZNEwjLv%2FNaMXMxtjfleH3%2FCKb6C10VBH4TtoV4tBVr0fzlGQyHP6yjX34RgOmjprMxHW75uF2w02NuKnLnpvgcsY07CISfXeFEfD%2FV5bSVXvgAovSmc%2FXi64WTZmRsVvp%2F0j9e5ctk0o59un7kuCvVGdGD2uWKhIJMj2G7ArIBoCKwyUrhP9b0IoXJ7LqQLXUJiTo4E1W3xM000%2By4SYjS9MvMEg%2BjyB9MIm7lsQGOqUBhpAC%2BkDbCbNcLGdSGWAgzpV76ys0rQXpvfFZIl4rRVbtAkeIk5nkElPaBl3OYrY%2FXzmFQWdZzHIsrVCMixW5EUuJRX%2FX8lriqFOEKImcgmr8cv%2BqcMLStJSsSa%2FMbBO9MC7SqvDIlFz6swQZCtTy1aXHOh6FTReAm08Mq6rgt7TtlIil%2FLwQ8MbcTpM6vcqvlwZV8mDnc0DzuT2JP1z3G1GgBv1h&X-Amz-Signature=ad59cda2679e3f59453b465fdec8c96cce5025c28333bbb240c0d1ca70d816c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXUXS5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFGWVW%2FlF7f9mbc5zNlbabQJGzIfwxNDcfeNEsJch3SFAiEA29QYCA6qIYzK7hN7%2BsQSt91ugnlMFyc6%2FLABU68mdlAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDICXIkFXqLIJEQacZyrcA0sanp30wx8g%2FGOyZsNG932XWijoybDWI8wc2KAMrQMTdav32to6IUulqt6ccVUHgmcWuf1JoItoKJxJarv2Wp6em1SAYzaA9HqGUVveWWru6Vx59kJ%2FgL38YpnoMzCi4Qj4tnXHRjSOexKdADCozB5QCdX0MZnMThc9Cth8wecQOfF4C3Mk6vGpiXtpuGz3OZgZlKY0GXhUuq5O7MCSuVpCJSJDT2Sp86L6WFkSuchSgSml0NjRTO8U4sdfbxm3JN8AgtoQmNFKYaxTl3xld7o5Q7SI99ih8YSmemoFei5Ik5%2BXvHTh4R9HyW8MUwnqxujysoMJHoMWQT8V74p4aWbHFwUF702upbko4MeOgJMlhJk3ewIpUneaGwAo3Fd776Ll8DTP6HKihFg1kytf7vrjjYTnvbda1IXYZDDPPTZbOiJ8vvtffMZlLGiQ7M7z7vXHpiojqOFA%2FfVr12DDMX5BeUGSPc9oZKHFFPeLboqKIN0wTUi2z5qK3uH9vI0e%2BvIUyG4aRH6oJqXsmSKPeMYl2l1jEI0IxI5hxQt%2Bmin5TI0IJ8Au5qhy3pKjYwX%2Bp3lVOl8xu%2FrNnRJ3kDfLjp38WhaWtqddthCitzD9q%2BpaTl9o6gwYwDmIj0NzMMe7lsQGOqUBvskSFy93GgN3MzYlEG8kWLO79WxHCkaaZr1gTU5P3h%2BIUwpGx5KdtL25zzkL%2FEqeQl2Z%2BX907JHdwURhfzDlpvMS5SEnq2fGSRgdmGWVvMsdfHn1%2FZsTqCQvUTDbEIjZiLA3dY34GZY0Um80w4dbNagEEdwJTWyr6hcyQ1uRvFcdf3GWIJ1ctVZQ7YZpgRi3SVh1YFbjYsjv1GF4bvoHiiYj4w1e&X-Amz-Signature=aa101504594dfc1e43809ae5f7f1aaaa037a371f5dc7d102401f77353073458f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FLUIJC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDVxqzf4NNm%2FEpyhCVGpGmeqkImbK67tyKQRbRJeytlsAIhAMZ0EmUjX6YEq30tDQZY6dczSwEWTmSBuZwb%2B3G9lWAdKv8DCG0QABoMNjM3NDIzMTgzODA1Igw%2Biq2%2BCn9EXcngAr8q3APsIK8deFl5pZffEbqtTkEgz43gpkqyFxE1UGLJjzY1x%2F3Ld3WvJEBQqVrOkQTjmfW7R1WfQ02w7BZOkjodGX%2Fi%2B%2BcRgMxLF1G2T%2FmnkxBagi6NIYcS17G33qT674MIbZCNKvwn5mLHyW6XGGRJ9Ia2otCQHuNUOSRJ35Ej%2FuN91BQ58Q42q0JlYKIBLASbsQw1dULG13OmecSEDTS8iCqwGaPmII80d8Fj6ZseY0QGgxP8DSUwFDPiBcV053fBlQRwlX%2FYf3%2FwfpWRnJNICntl9wHZHVHbfm4e7TX6N5vdT%2Fi%2BqXAk5hcJb3WJoqXAMGVtsdL3wk%2FkbU4Z3OO5EBPpRihkY5PFjwQ7gGhZqDaq%2B7jK7QWwQr6YV3inpJbsBHz3lvhRhsynPe0lsjHHtJIb5QyBKh2khoWZPCFN7aKox4xEUs5nv7CmsByLDs%2B146U0u1sm9dURVbUBhwSQKv5QrrecGIXhfKMVvtpe1NoK%2BIqhgOa0PQB5DtL98eJ9NTmP1qTJ4KJSmGMGwGUh2d%2FdJNYXvc%2Fn%2FVz4kqsv61IpYB9fVvGQcYzB1F%2BZ0rP80hXT3rBlCUaENLq04UItRA7DnzHy5mNs%2FUv05AzSCAFiL30dVx4ao20ZBVoUNjDvupbEBjqkAR6OcnfaReQTTDqMjSgg9PAy4KXow7Sxz5FvVNnQyvuoe8DDx4UFenV1BSUgmIgYKdat9O%2BkEo6SdbD3CP42%2BsEhhegmIwQFhjTEB%2Bj7X7Ol00QgcS2NRFFj1zn8HaKz6XuE6NfnIVGpYJAz1wiSJ3L0NDzKXGBHb5iCwrMoyflEQBnKXmy9VmzU9xPcovZXmAPR1HyesESK21J59uOX66cM9vlv&X-Amz-Signature=f0f66e2ad47fffbfad39990c030d01973af6ee08414ef01f1d34063b52de8378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
