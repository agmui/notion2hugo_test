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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6BVSZX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHdXlfkiYskAIfugtV9RttfOdktcetL%2F1ePosOPvr7hgIgDe0IJ9jVwuJYrK3CP02u%2BA4fM5IYl54IobZO%2Fau0D0Qq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMGb9SXIEG%2Fg7n18zyrcA27M6V8O45seeOByieL7SW61Ds53xZ1nF8GF14B9ARRJsl74git1d3AL8opKzLdLl9ggZie3tvizObRHSvtkWGHS5oJKzcZl5U9UZGz9pYHdUf8xhAO%2FYj7%2FdZBLqyoyzDmiwxloVuULrM9zfyxb7qjsFI8KZ1EJeD3NBZDj1bGzWfREkWW9yxsq37jbRHt2Vm9WsniweLAfcRAZU4KTS4I6bsCoScIIGnU456ymN45GXa8FxdLhJFXWBmrLcfvMEyGKVrkth%2BfqVmzK6OB%2BwRJ68FRIU652VwIMpHxxJFsH1dnDG5UccEMmtv%2FUTwsGuJeWBXRTk4BUKDKKbN0cFZ%2Fg%2BHt3lqWsJG7xA1s6QTgFvevZF%2BwKyoUnKO7m%2BQFbZN4CSqMOd1FrwrtlvOxtYJyQNlw0pcRrhiptvOP8bxHhZWy95MaiEPhksdXvoFl13wqQT2LaDSJc2pmAm2nntO49TRd4njXcNXNsHWMkiB8E1kDUsIDicTOHvr3SFANOjFB35dA5cBvRJAMQM0bgHB0z4tSy06XZauyjp5bQg8fFQuT%2BrDX%2FS7K05OcFE3mJHfliUaIsA3B4TIyHcRaIDR%2BHDbqeJ92jBZFfhyw5g0JNiu%2F9%2BONI%2BAAmlNRGMMuSxr8GOqUB3JSruHJ6pt6SOdF7YtOM2xC4MRiUtL%2BbvI4MFzN5X%2FE%2BQUXaKerz5YA2TmiYOc1l6MafEv32%2Bd0xJpcrIYbAD984mr%2F8x1x2P56XyF1smuD6qzwL1jRVsSV7%2B1%2BaZqHKhPg5X0qqT%2BQlxwEUXB3bYN3aXTO0k1i3GEobrG042rQSewPFCBt3oj0qcDtFPRuVvKE4y2LYT6G12i7k6A6CCzDjgZcd&X-Amz-Signature=a11bea75251b63ad3a5fb32f93d6e8552c39fab4229f00c74d0c5e49ffbb95a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6BVSZX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHdXlfkiYskAIfugtV9RttfOdktcetL%2F1ePosOPvr7hgIgDe0IJ9jVwuJYrK3CP02u%2BA4fM5IYl54IobZO%2Fau0D0Qq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMGb9SXIEG%2Fg7n18zyrcA27M6V8O45seeOByieL7SW61Ds53xZ1nF8GF14B9ARRJsl74git1d3AL8opKzLdLl9ggZie3tvizObRHSvtkWGHS5oJKzcZl5U9UZGz9pYHdUf8xhAO%2FYj7%2FdZBLqyoyzDmiwxloVuULrM9zfyxb7qjsFI8KZ1EJeD3NBZDj1bGzWfREkWW9yxsq37jbRHt2Vm9WsniweLAfcRAZU4KTS4I6bsCoScIIGnU456ymN45GXa8FxdLhJFXWBmrLcfvMEyGKVrkth%2BfqVmzK6OB%2BwRJ68FRIU652VwIMpHxxJFsH1dnDG5UccEMmtv%2FUTwsGuJeWBXRTk4BUKDKKbN0cFZ%2Fg%2BHt3lqWsJG7xA1s6QTgFvevZF%2BwKyoUnKO7m%2BQFbZN4CSqMOd1FrwrtlvOxtYJyQNlw0pcRrhiptvOP8bxHhZWy95MaiEPhksdXvoFl13wqQT2LaDSJc2pmAm2nntO49TRd4njXcNXNsHWMkiB8E1kDUsIDicTOHvr3SFANOjFB35dA5cBvRJAMQM0bgHB0z4tSy06XZauyjp5bQg8fFQuT%2BrDX%2FS7K05OcFE3mJHfliUaIsA3B4TIyHcRaIDR%2BHDbqeJ92jBZFfhyw5g0JNiu%2F9%2BONI%2BAAmlNRGMMuSxr8GOqUB3JSruHJ6pt6SOdF7YtOM2xC4MRiUtL%2BbvI4MFzN5X%2FE%2BQUXaKerz5YA2TmiYOc1l6MafEv32%2Bd0xJpcrIYbAD984mr%2F8x1x2P56XyF1smuD6qzwL1jRVsSV7%2B1%2BaZqHKhPg5X0qqT%2BQlxwEUXB3bYN3aXTO0k1i3GEobrG042rQSewPFCBt3oj0qcDtFPRuVvKE4y2LYT6G12i7k6A6CCzDjgZcd&X-Amz-Signature=a58fd2d4c4ce801b0560cb08e0e8f2957f564dffbf9bf8fe48e555761adc0e52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42ZRUDQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJvtcwe6yocyrOHybV%2BpFOE8HwWPNGUNmisBwpQsy86AiEA2pujp8eJMg%2F0HsKcnWc61fqPntGOqIEZX3QVCpa3GWsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOPBxTbr3csguXqL%2FircA1lKVyaBtQOJc3r0%2F69k9kwkMgagsywFZmjAF9kdfAr1gOM1gt0aCYBJWZ0xkmsX7G61UhITBEPgcm9bgkv631jtRc6M6%2BqSIioNpk49FbCsdku4PaCO%2FfxanVRxGcdJOjNXzm0PXSHjrwGKCrehY9A1LL3DeePYERIS2Xhq%2FGO6s8Gov56Kc82pc6rQQTJqnjh%2FTseP7cg%2F82cHfGSvDjNTxmVT1%2FTUvL2zD9DhkBX9zaqEO6o2%2FjsgXZerxeCfAps8JNN%2BVGnGtdVW8og147jbAphqz282HoAygJxw6DbTSukThkx3nJd49xEk1dhRvytfEk1snR%2BySH3fMswFz3FTk8pXZmBC%2BP3lXpeTB7BIhpdZF%2FJHuTxWTY%2FHdXxNLxj9kYGx8LqRR5AUJsSDxvMEhuZIrMErt8uRXiJUYSrR%2FolZFpEpA6QWm47ZTO6F4LbuDROhFsVpf8t3FFbmsQC%2BYK5d5o51ng%2Fy%2F589Zf8f%2BmSU9rnx1umyMGLa7oGwXEuYD1d%2Fpw8PoMNmVSl9pGZwqdhtr%2FgjcKam7rQwJfp0Q930dCZSEca0BDy6D6FFt%2BBu%2BMltMqxKSdzoBUtaANX4L7oToYofEhHOfu0aEwubFglBYFX75JTAH0xxMNiSxr8GOqUBlnwgNi02cTUXXUkeMZARJEHsEfdmTUZsuHBrNpPiPHOKkdTF%2BmATOWeneI1KMiz0bvyY4aw%2FpoOO0L7BWkMVyxE2%2BQXOY5cZhZwDp9Ubam%2FxFScfm0a9iJSpIxPy6AwlNiD59NOZoPiikiTNx%2FRXtmTB84XPyZa49WKhg3piFNI0wl%2BIzg6NZeo77vb9qlKEZuE9WEey1yPshBlwd0380MX%2BKXty&X-Amz-Signature=534e81f77e0ad831183691cefbf94a35739469d554dd991bd044bc639a95c74f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPOWB26K%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV1QU2AT6g00tlHAJnyl5WtFA9%2BAakr2cTsYslzv35PAiEAum7vqmBkdO7PjcjPNqJTl1nzRSAgRMZ4XoPib9ENs%2B4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGgNzwEQlECM5yblSyrcA6eiREVqUtdnbcq57PEbS2UHIwpQE0AVnQlIwaPAia7mZlgeVgcMIVK7yzrKKgj%2FMzEsy2ALtUltmSraErLJfhXcSloUbwtZDpvIvjjoGogxIjf%2FFin0yCIneXRHirIFVh%2F5oaVLbb51AKUgdi3iIkOOyomvXxPXKczBqCw41CUO1pfth8cAycgCzPiduQZQ5UMNWEry%2Bp58%2BwTOaYl3qI%2BkhQPHjtAMSfar%2FVlWsSRSZmnVJVUWw5kBmyRdt%2BPHnxLr8BXC3%2FD9adI7uAorQnz7A02%2BpKCMUo1OCFynLO9nXESU8o5BTvEudlRWp96SJ2kfthxdrT7cc6A031BRoSH%2F0hSlPguOJaDc03IEkITe3dXt47oJACYSrBd0o4QLGYRJOhaMkyhKf8QEi5UNcE%2BlC3pzcZhzGGo2r96%2BqWUTANLyaruk8qaA5N7Bs9rU%2BmVYBOgUqToysx%2BF2lrJe6TgexFoFH4Ut1WgPiwSg87xSqgQl0bhFe%2B33orc2ATlXiuPUJRK75LdXuGksR5wOU2025s2Un%2Bl4Cvj21KP1AVDe89ZdI2rPTUDmopTW23f2itFd3%2FlfL8ezwyXgTrJa%2Be9Jzqe%2BYUYaG8eEjtnnA%2FIp2neSHD%2FSV%2B3EHCxMO2Sxr8GOqUBjhX3%2Fw%2FDXMYeXV4uHz7idhcaiFE7ITE%2FA1NiTgNQXEUBskhXgAYgrWUpElCwAkFz%2B8ssNckcUqZnh7fBCmVqQKpCa16DEUwRmKvtmeUGm%2BcaTmfiIZQXe%2FEZV6iq930nn54wCkJ1BRp9nRRrJZ29X02gYhJBfuwhd44ri8xFipICqOs1iJtcuJP1JO3cPj8p5oYkO38fibHxXzsE2b2Q3jd1s580&X-Amz-Signature=6732e065200bfa8883f8caef59a12b3991e8985d2aa84286bd7465e982208a01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6BVSZX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHdXlfkiYskAIfugtV9RttfOdktcetL%2F1ePosOPvr7hgIgDe0IJ9jVwuJYrK3CP02u%2BA4fM5IYl54IobZO%2Fau0D0Qq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMGb9SXIEG%2Fg7n18zyrcA27M6V8O45seeOByieL7SW61Ds53xZ1nF8GF14B9ARRJsl74git1d3AL8opKzLdLl9ggZie3tvizObRHSvtkWGHS5oJKzcZl5U9UZGz9pYHdUf8xhAO%2FYj7%2FdZBLqyoyzDmiwxloVuULrM9zfyxb7qjsFI8KZ1EJeD3NBZDj1bGzWfREkWW9yxsq37jbRHt2Vm9WsniweLAfcRAZU4KTS4I6bsCoScIIGnU456ymN45GXa8FxdLhJFXWBmrLcfvMEyGKVrkth%2BfqVmzK6OB%2BwRJ68FRIU652VwIMpHxxJFsH1dnDG5UccEMmtv%2FUTwsGuJeWBXRTk4BUKDKKbN0cFZ%2Fg%2BHt3lqWsJG7xA1s6QTgFvevZF%2BwKyoUnKO7m%2BQFbZN4CSqMOd1FrwrtlvOxtYJyQNlw0pcRrhiptvOP8bxHhZWy95MaiEPhksdXvoFl13wqQT2LaDSJc2pmAm2nntO49TRd4njXcNXNsHWMkiB8E1kDUsIDicTOHvr3SFANOjFB35dA5cBvRJAMQM0bgHB0z4tSy06XZauyjp5bQg8fFQuT%2BrDX%2FS7K05OcFE3mJHfliUaIsA3B4TIyHcRaIDR%2BHDbqeJ92jBZFfhyw5g0JNiu%2F9%2BONI%2BAAmlNRGMMuSxr8GOqUB3JSruHJ6pt6SOdF7YtOM2xC4MRiUtL%2BbvI4MFzN5X%2FE%2BQUXaKerz5YA2TmiYOc1l6MafEv32%2Bd0xJpcrIYbAD984mr%2F8x1x2P56XyF1smuD6qzwL1jRVsSV7%2B1%2BaZqHKhPg5X0qqT%2BQlxwEUXB3bYN3aXTO0k1i3GEobrG042rQSewPFCBt3oj0qcDtFPRuVvKE4y2LYT6G12i7k6A6CCzDjgZcd&X-Amz-Signature=98d374b45b6c02bd34b6925a6d9541f8611358b7a09c96ee91cba7ebd7a6b545&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
