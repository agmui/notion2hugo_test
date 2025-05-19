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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOURLOJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGzBo63ismtOg%2Fvmxs9eaimaulmnXRDFhoGpHxq1WjeAiAYLXdJpAVKhNrsadnKTKqV9URw5GzCV2warwA7b2QrRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnf2XG4k4%2BMbkIJFPKtwDzIpw1e5FuOqeFvNCSMIt4jpqzxZw3lFFGLlxlFR0%2FLoy03YUw3P01QEE%2Bm%2Fv%2BZpZoabeWEPVVR51ERzda9MPIyUpKHFb%2BqY4Qhr%2FvdjnCaRxlTBikdtcvZIAaReNzr2t6RZ1rk9O3U6B%2BZGEvVXA7%2F8b01UKIb%2F%2BuP8yzOfp8mqNDZeORKoFxflYHtUZ%2Bt40DLRIJ9iAKQ%2BOC2cM%2B6aZil8KfS0UBI6%2BfgI4lIXyMAmH2zJV2MHFdDytGOISj78smWQcEGMuPqsajobHdB%2FPO7OQAYktLSW6N%2FSFKBLDkNzf2DnVRSdzeDaF2pxuJLGXNhR0cVN%2FXOrT%2Brh6kEuLaZIlMkrs03axF2izQOjrau%2BzSEoWXFKgKkY4CA94xVwoKZV7m2qLxCt0H4XmsgMiOPOjy2Djf8GrvIIeCpUmQ%2FdNLHIqR75vKhNnKvX29RzWVGV1bCcxx0V9TX%2F5u8FJsA4MjRUETQd5XoC2guNY%2BlyppXexseVhKX7JLmR%2FuDvNeZ%2Fa7wLMeb6ibZ6XOQefPbNqmTXw6ZJRtTDmwCJVSZ26iFsx4SeTFcO5sh6IXxy7AVPxDOnYzLmlssFCgTnLEneo%2BqWH9V6eMr9fSreLF1lQCaz0W2wVs%2B3WPQUw3YGswQY6pgHM6DOmW8CUNwBRHaFYmw8skKyJGcCqa4jI96Ov1VGWFZQvPq0hGh36%2BWhRZD1UzojBHZ4PygpWPEWkvB9bqkSo%2Byf%2BdYXeNmOhZbROWnmVvJAFa36CHuuo95hQEvtW3akw7CiFp2Q55nJR8ZGyq5QJx8w0k4Ad8YK41dcrGPqY6Wfre2ocp9LBVYzr2dp4QvVaDodTgg7EV6UysD%2BrrnFT2DKqLOlt&X-Amz-Signature=479c3b69f07278a9b7beb00a9d222bc993c4ebfdc5347b1d97fdbc358b8a67d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOURLOJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGzBo63ismtOg%2Fvmxs9eaimaulmnXRDFhoGpHxq1WjeAiAYLXdJpAVKhNrsadnKTKqV9URw5GzCV2warwA7b2QrRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnf2XG4k4%2BMbkIJFPKtwDzIpw1e5FuOqeFvNCSMIt4jpqzxZw3lFFGLlxlFR0%2FLoy03YUw3P01QEE%2Bm%2Fv%2BZpZoabeWEPVVR51ERzda9MPIyUpKHFb%2BqY4Qhr%2FvdjnCaRxlTBikdtcvZIAaReNzr2t6RZ1rk9O3U6B%2BZGEvVXA7%2F8b01UKIb%2F%2BuP8yzOfp8mqNDZeORKoFxflYHtUZ%2Bt40DLRIJ9iAKQ%2BOC2cM%2B6aZil8KfS0UBI6%2BfgI4lIXyMAmH2zJV2MHFdDytGOISj78smWQcEGMuPqsajobHdB%2FPO7OQAYktLSW6N%2FSFKBLDkNzf2DnVRSdzeDaF2pxuJLGXNhR0cVN%2FXOrT%2Brh6kEuLaZIlMkrs03axF2izQOjrau%2BzSEoWXFKgKkY4CA94xVwoKZV7m2qLxCt0H4XmsgMiOPOjy2Djf8GrvIIeCpUmQ%2FdNLHIqR75vKhNnKvX29RzWVGV1bCcxx0V9TX%2F5u8FJsA4MjRUETQd5XoC2guNY%2BlyppXexseVhKX7JLmR%2FuDvNeZ%2Fa7wLMeb6ibZ6XOQefPbNqmTXw6ZJRtTDmwCJVSZ26iFsx4SeTFcO5sh6IXxy7AVPxDOnYzLmlssFCgTnLEneo%2BqWH9V6eMr9fSreLF1lQCaz0W2wVs%2B3WPQUw3YGswQY6pgHM6DOmW8CUNwBRHaFYmw8skKyJGcCqa4jI96Ov1VGWFZQvPq0hGh36%2BWhRZD1UzojBHZ4PygpWPEWkvB9bqkSo%2Byf%2BdYXeNmOhZbROWnmVvJAFa36CHuuo95hQEvtW3akw7CiFp2Q55nJR8ZGyq5QJx8w0k4Ad8YK41dcrGPqY6Wfre2ocp9LBVYzr2dp4QvVaDodTgg7EV6UysD%2BrrnFT2DKqLOlt&X-Amz-Signature=efbe3de42378f98120641c7bea147cfb5a0d01767eab57fdbca92d741c10aa3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOURLOJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGzBo63ismtOg%2Fvmxs9eaimaulmnXRDFhoGpHxq1WjeAiAYLXdJpAVKhNrsadnKTKqV9URw5GzCV2warwA7b2QrRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnf2XG4k4%2BMbkIJFPKtwDzIpw1e5FuOqeFvNCSMIt4jpqzxZw3lFFGLlxlFR0%2FLoy03YUw3P01QEE%2Bm%2Fv%2BZpZoabeWEPVVR51ERzda9MPIyUpKHFb%2BqY4Qhr%2FvdjnCaRxlTBikdtcvZIAaReNzr2t6RZ1rk9O3U6B%2BZGEvVXA7%2F8b01UKIb%2F%2BuP8yzOfp8mqNDZeORKoFxflYHtUZ%2Bt40DLRIJ9iAKQ%2BOC2cM%2B6aZil8KfS0UBI6%2BfgI4lIXyMAmH2zJV2MHFdDytGOISj78smWQcEGMuPqsajobHdB%2FPO7OQAYktLSW6N%2FSFKBLDkNzf2DnVRSdzeDaF2pxuJLGXNhR0cVN%2FXOrT%2Brh6kEuLaZIlMkrs03axF2izQOjrau%2BzSEoWXFKgKkY4CA94xVwoKZV7m2qLxCt0H4XmsgMiOPOjy2Djf8GrvIIeCpUmQ%2FdNLHIqR75vKhNnKvX29RzWVGV1bCcxx0V9TX%2F5u8FJsA4MjRUETQd5XoC2guNY%2BlyppXexseVhKX7JLmR%2FuDvNeZ%2Fa7wLMeb6ibZ6XOQefPbNqmTXw6ZJRtTDmwCJVSZ26iFsx4SeTFcO5sh6IXxy7AVPxDOnYzLmlssFCgTnLEneo%2BqWH9V6eMr9fSreLF1lQCaz0W2wVs%2B3WPQUw3YGswQY6pgHM6DOmW8CUNwBRHaFYmw8skKyJGcCqa4jI96Ov1VGWFZQvPq0hGh36%2BWhRZD1UzojBHZ4PygpWPEWkvB9bqkSo%2Byf%2BdYXeNmOhZbROWnmVvJAFa36CHuuo95hQEvtW3akw7CiFp2Q55nJR8ZGyq5QJx8w0k4Ad8YK41dcrGPqY6Wfre2ocp9LBVYzr2dp4QvVaDodTgg7EV6UysD%2BrrnFT2DKqLOlt&X-Amz-Signature=9db9c76653afe5341bd064b67bec1556d2042e2511093b980ca28fc5cc8258c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDQLXBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTvkQSuVGViA3j6BjQzclgRdFaToyJzOKnwqQISV1tVAiEA%2BxKhODJDimIlrQMv5ztRPuwYRAUxoKUEBYvYF8ezKxcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcegp9IGSW2xhgDHircAzmKcsxD%2FgqcmDs6s6pw1HHUnrrJzzuMdwXbFSn2bEHZy2s1AM1bEKTTIQxJCS7gZgkqDTv%2B58t4LNeAnWb9GtA8%2BhyALIxolQX36zE79GjcginpE2CJVQvF04cfM4Ee%2F5fXLdt07g0YzMRtBTO1Djyx23x6kKLWZLFwrQ1a%2FXUqq6cuOYXBuxYzoKKepPidV8lt859Ms%2BWCLK7vGdEv9%2Ba1C2ndmb8eNz%2BpgqFNqjMPdYv3%2BTFHPUGljeJ3%2Frq1WY%2FPWRjk%2FoHr9FDXXNdk9ZAWh9%2FcqqLywhbZzbmvCf4W3HNoaSzHdlxTclg5fdgSxtMwN7B%2Fn5dZPcekrBMBNG1Mu9l29spyPen01sT90j9vhLxSQbmEeBCZfHf0%2B1I8ljj0RK8qjr31fE83GxcWgBubKLU7kB1jNQaM9zwbaNwGDdwvHQ6VxF1adQEdGpPg3Hnx2%2FeS0wQ90XZwu%2FyRck3b4etp6Z1YF7TQOMA8I9H86vaF%2BtV%2FC0Q4eFBTz8Kut6asKmXc7DYsD4G4kHCoVmCoVfOKE8KMRXZDyRCjLFve%2FKqMlR4OhDaSKUnn7aVc4KQnwjId5Q8eQ7ly2F9LzajUEfdvBLnm576I0El3VxeSbCefZL5cWFYriul%2FMLuBrMEGOqUBCqWGmDERSxpt0X1uRYhr1%2BWTdtgZy5BOq0gV6EDo1%2BG2B7gbeFOAx7jx7GO%2B7DGLq49W0ktwx5EnBd5WevKvYeaT8vqU9085vxJoqz3c7jCZtRPW4NpZGXGs%2Bh1yraNo3YkKj%2BDf2K8SJcYBW6TTDilqEBEg5B3%2BBfERu%2BwkUc735wVKxkBxXi7yXqZsUduWFqfNB8l%2FudSl3E%2BtXyPk7HNmvojy&X-Amz-Signature=400c73fcf875df4345d0a58b88c54cd064650a35b3a441a9eab8088cb2454425&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPZS4EM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1xodb5oM37un%2Fi7VwRvNtCpKAdYvdRYPw7LL4w4lVkAiEAt%2FWXscYJNYZHgOtQ3HQEBT48BYCS0jTvav7q4Jtl2mMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEjupd5%2BcfUV3x0wSrcAxGU3IdQiQtx50CnG1%2BswQyMcn14GfZXCQObkB2PM1XBr%2BO%2B0%2F4ttZSHSyAQJxZdrtDza9Xu4eW95oALTr1BCWycXcUpwN2RbOnoyAB3TQkuVjZyR9enFgc2rJI97%2BYb90b%2BV%2BtsCPwhKyAmWOsorRpmw6tIxP%2Bscb%2FY%2FihfJet3tIcLuLM5eZ2%2Bp3zvpEywI%2BT1JHxNlNm%2FZJZPORvzcbzm%2BiVkyLlxy5eaJpjHKHSQWytRanXE3ioKj26krfT5soRcfCnX5f1gkUdTccEQd3om5AyoFGL3oZp7j%2BUOR3xkTgM2qj%2B8XqVqf%2FcHLABJMK4HPHrnYkk5T1wtXirInloIzQDw9KkR7bux5AJrQohv7rxpmeVZHRPBhhhOWP%2FQbR3VwnJaEro2Gl4NFX0GktG2YjL2QF%2B3mUzGKX32PCRqvbleB0HJOSq3q5dsZvjpNeXLFc0D4C3mnsmTytNpAyjWlYRQM%2B5%2F5NXR3LMTUjDMIQIpPB265oHvhHWxwXnTzx%2FpwN%2BHG5Jos8YFQ7u%2Bcvgq8upiEgasfeTmuABB6mJOwrsxybw8ZS%2FwhOCpzUyHx75Z14MWyBQJ0EK%2F3UYk2xqpLteupcUOrwIfEypLo%2FPdTpQ6tKwfANKlzKaMMJeQrMEGOqUB9tdDeo%2F6XBspNfPGzmZu6xptzc6dJgV5dmayxYkFpv9ZB4yInFeMuVk1q7MiN8hcmfrB121lwiQ4ipDtN20oho9T%2BexuBfX4r3Z5O4AwHiUXBT%2BiGWdhqTnDH3%2F8rOWDqaCsPGPiojcak04%2FggPyLPN0NANlJAGz0MMldAT9tuKaEiYeXy7ECLKzDyEmbwf7SEQiW%2BPZcK78m553OxgMWRnAsgFP&X-Amz-Signature=6f172f45a4a7b0bdae8093633922d22856ca1d98ce8bcae09b3d76d25cc925f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOURLOJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGzBo63ismtOg%2Fvmxs9eaimaulmnXRDFhoGpHxq1WjeAiAYLXdJpAVKhNrsadnKTKqV9URw5GzCV2warwA7b2QrRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnf2XG4k4%2BMbkIJFPKtwDzIpw1e5FuOqeFvNCSMIt4jpqzxZw3lFFGLlxlFR0%2FLoy03YUw3P01QEE%2Bm%2Fv%2BZpZoabeWEPVVR51ERzda9MPIyUpKHFb%2BqY4Qhr%2FvdjnCaRxlTBikdtcvZIAaReNzr2t6RZ1rk9O3U6B%2BZGEvVXA7%2F8b01UKIb%2F%2BuP8yzOfp8mqNDZeORKoFxflYHtUZ%2Bt40DLRIJ9iAKQ%2BOC2cM%2B6aZil8KfS0UBI6%2BfgI4lIXyMAmH2zJV2MHFdDytGOISj78smWQcEGMuPqsajobHdB%2FPO7OQAYktLSW6N%2FSFKBLDkNzf2DnVRSdzeDaF2pxuJLGXNhR0cVN%2FXOrT%2Brh6kEuLaZIlMkrs03axF2izQOjrau%2BzSEoWXFKgKkY4CA94xVwoKZV7m2qLxCt0H4XmsgMiOPOjy2Djf8GrvIIeCpUmQ%2FdNLHIqR75vKhNnKvX29RzWVGV1bCcxx0V9TX%2F5u8FJsA4MjRUETQd5XoC2guNY%2BlyppXexseVhKX7JLmR%2FuDvNeZ%2Fa7wLMeb6ibZ6XOQefPbNqmTXw6ZJRtTDmwCJVSZ26iFsx4SeTFcO5sh6IXxy7AVPxDOnYzLmlssFCgTnLEneo%2BqWH9V6eMr9fSreLF1lQCaz0W2wVs%2B3WPQUw3YGswQY6pgHM6DOmW8CUNwBRHaFYmw8skKyJGcCqa4jI96Ov1VGWFZQvPq0hGh36%2BWhRZD1UzojBHZ4PygpWPEWkvB9bqkSo%2Byf%2BdYXeNmOhZbROWnmVvJAFa36CHuuo95hQEvtW3akw7CiFp2Q55nJR8ZGyq5QJx8w0k4Ad8YK41dcrGPqY6Wfre2ocp9LBVYzr2dp4QvVaDodTgg7EV6UysD%2BrrnFT2DKqLOlt&X-Amz-Signature=c041e6bb2baaab07be73b6cf85d3097e2c3e01951a0223f457c40c0ff125d14e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
