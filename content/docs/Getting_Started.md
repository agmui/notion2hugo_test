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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMGXBDA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGgRCVrDVZHiBcalgSIPoGKlfe8SQ0cUOP4v7AHjY2AiEA1IH2KdP%2B%2BRrrxFFqlfMIr4vHqyuR%2FsyGma%2BPQhjGx0MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eTc9IG4FYS2CwBCrcA9XHHRP1DVXYQH6n%2BhFh%2FGwpjlLIr5aFxafNVzNtQZ0U3mxG3lM2M%2BqXE5EUvYLMaWB4yfwX6mRIkzibcpPqig%2BcVZ36bybFYsnBh1Zu%2F4ZNUNHdIFV8DzzvWxtGe3UT%2BhE%2Fmxq7bjg81mnVrTpxQaa7oz6JPuNk40NWrELbucSQIe2NnN50FNqoS4P%2FZ%2FJzuq2Ed1McOiACllru6tfZ4qXfQ1pePLYtmCxJrPB7VNKQTF2q1W0mPDA3fulF4GZiiDApiSuNZZYUqxd%2Fa%2FovXDUPbm3RbiBzhUqyF1etMRmnfORWaARrbi13SANJMmjxha7w1SvhqolqzHYRiJnYphe0Mr1thUh2i2kck%2FEbmoIT%2BNeZqP1ds1tedeMSwW6cXn6hIAxFzdM6h%2FaelKbFyIFiDzD917%2FCTNdTBF1yA5nqEqkD7RmMzWFMF%2BwQxb6g1Ypwvka15Zc%2BfttHoNR2uREFh24PM5xFZmLEavEU21riaIUv8tx7Wmpv71CHUIZDQoHbagqxHy8lZOslH3sgk9jrYa%2FkDcdklETCfT2kX0x2JqK1NXEVdOYtYbKlF8Gid982rJz5ZkaqHsrF5tJJFOHy43dX8zTbRuWup2QGg7dHEWBBRnK3UOB5MnOcMOGjz8IGOqUB3p9dtz3IsztOdBZXYhsOitntH0BWfB5JEFdMMKWaViCAK8fRV4R0K5KjO0QEtqj6zo4LMb%2BRLGR%2BxNCvvv%2BboGsj6KSZtNllo2c0ZXrqV5ppSrfIrEEjnXB9LFH2vmytkQdaFwtImUCacMgGXhgL7smQToKGq3HVOZr7dlbAbAiq2OuBiOLJ%2FxQM4wJKdR04NvKZe95OyTc2bd4LPUpo7mGTVRG6&X-Amz-Signature=35460121a8104fb7f1f3015b86945a367d4175c6281342fea7edc9108759f7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMGXBDA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGgRCVrDVZHiBcalgSIPoGKlfe8SQ0cUOP4v7AHjY2AiEA1IH2KdP%2B%2BRrrxFFqlfMIr4vHqyuR%2FsyGma%2BPQhjGx0MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eTc9IG4FYS2CwBCrcA9XHHRP1DVXYQH6n%2BhFh%2FGwpjlLIr5aFxafNVzNtQZ0U3mxG3lM2M%2BqXE5EUvYLMaWB4yfwX6mRIkzibcpPqig%2BcVZ36bybFYsnBh1Zu%2F4ZNUNHdIFV8DzzvWxtGe3UT%2BhE%2Fmxq7bjg81mnVrTpxQaa7oz6JPuNk40NWrELbucSQIe2NnN50FNqoS4P%2FZ%2FJzuq2Ed1McOiACllru6tfZ4qXfQ1pePLYtmCxJrPB7VNKQTF2q1W0mPDA3fulF4GZiiDApiSuNZZYUqxd%2Fa%2FovXDUPbm3RbiBzhUqyF1etMRmnfORWaARrbi13SANJMmjxha7w1SvhqolqzHYRiJnYphe0Mr1thUh2i2kck%2FEbmoIT%2BNeZqP1ds1tedeMSwW6cXn6hIAxFzdM6h%2FaelKbFyIFiDzD917%2FCTNdTBF1yA5nqEqkD7RmMzWFMF%2BwQxb6g1Ypwvka15Zc%2BfttHoNR2uREFh24PM5xFZmLEavEU21riaIUv8tx7Wmpv71CHUIZDQoHbagqxHy8lZOslH3sgk9jrYa%2FkDcdklETCfT2kX0x2JqK1NXEVdOYtYbKlF8Gid982rJz5ZkaqHsrF5tJJFOHy43dX8zTbRuWup2QGg7dHEWBBRnK3UOB5MnOcMOGjz8IGOqUB3p9dtz3IsztOdBZXYhsOitntH0BWfB5JEFdMMKWaViCAK8fRV4R0K5KjO0QEtqj6zo4LMb%2BRLGR%2BxNCvvv%2BboGsj6KSZtNllo2c0ZXrqV5ppSrfIrEEjnXB9LFH2vmytkQdaFwtImUCacMgGXhgL7smQToKGq3HVOZr7dlbAbAiq2OuBiOLJ%2FxQM4wJKdR04NvKZe95OyTc2bd4LPUpo7mGTVRG6&X-Amz-Signature=487426d5bff527248d48ffff6e07ceeeee56bc7ce1f38437143b425dc9d74617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMGXBDA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGgRCVrDVZHiBcalgSIPoGKlfe8SQ0cUOP4v7AHjY2AiEA1IH2KdP%2B%2BRrrxFFqlfMIr4vHqyuR%2FsyGma%2BPQhjGx0MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eTc9IG4FYS2CwBCrcA9XHHRP1DVXYQH6n%2BhFh%2FGwpjlLIr5aFxafNVzNtQZ0U3mxG3lM2M%2BqXE5EUvYLMaWB4yfwX6mRIkzibcpPqig%2BcVZ36bybFYsnBh1Zu%2F4ZNUNHdIFV8DzzvWxtGe3UT%2BhE%2Fmxq7bjg81mnVrTpxQaa7oz6JPuNk40NWrELbucSQIe2NnN50FNqoS4P%2FZ%2FJzuq2Ed1McOiACllru6tfZ4qXfQ1pePLYtmCxJrPB7VNKQTF2q1W0mPDA3fulF4GZiiDApiSuNZZYUqxd%2Fa%2FovXDUPbm3RbiBzhUqyF1etMRmnfORWaARrbi13SANJMmjxha7w1SvhqolqzHYRiJnYphe0Mr1thUh2i2kck%2FEbmoIT%2BNeZqP1ds1tedeMSwW6cXn6hIAxFzdM6h%2FaelKbFyIFiDzD917%2FCTNdTBF1yA5nqEqkD7RmMzWFMF%2BwQxb6g1Ypwvka15Zc%2BfttHoNR2uREFh24PM5xFZmLEavEU21riaIUv8tx7Wmpv71CHUIZDQoHbagqxHy8lZOslH3sgk9jrYa%2FkDcdklETCfT2kX0x2JqK1NXEVdOYtYbKlF8Gid982rJz5ZkaqHsrF5tJJFOHy43dX8zTbRuWup2QGg7dHEWBBRnK3UOB5MnOcMOGjz8IGOqUB3p9dtz3IsztOdBZXYhsOitntH0BWfB5JEFdMMKWaViCAK8fRV4R0K5KjO0QEtqj6zo4LMb%2BRLGR%2BxNCvvv%2BboGsj6KSZtNllo2c0ZXrqV5ppSrfIrEEjnXB9LFH2vmytkQdaFwtImUCacMgGXhgL7smQToKGq3HVOZr7dlbAbAiq2OuBiOLJ%2FxQM4wJKdR04NvKZe95OyTc2bd4LPUpo7mGTVRG6&X-Amz-Signature=e3cb5b577b81769f4e08a7824a661db411e18c4fdca8e90802a1070623989a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVFEHWKL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR4fJjFvs2AfMgCoRFsRkYFQ3Is8POSiNeKBWkMnr7oAiEAxVWgShjeL5fKQB3wMyVh4GWGR72yhU%2BL%2FuwNQDV398wqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BK%2BjdkM3vZhdfvLCrcA7xW8YC5x%2FnbbD7G7qZtn3we%2BdXVYaudOsLJKkFC7S1YHYpo7jEWPWp%2FLAn6aTxXvF5PnOUO6CRBMdnrp49XuhAa8u1qR79FUzVPI6HN3Aw%2FKvEU2qz9oQdoXx2d5ptXZdgdYA955431v2RCN63myHW7eMUmtGxbLc5iyMdYbpX%2BAlkYn1mAF0uC0AZmL3%2FCAOYi0HVGNWKgrGMnWoQoQ73bgWjsE5DTaT7fQIVobP4tqL%2BX5G%2BRGst4e9o92vxUq8BP1AOWPyYmUR00x9qilOSluBzLcBaXFFQloOyPKEkFOkX4KK%2FcbqJjNYwL7ozD9Q89lNny2K%2F7M%2FBgMl1enk49ap%2BzSH%2BiCtLu9IyKeOHjUW7P8TZUvBQOZOOYXhrZp9nIi9gNVg8neORycds9q25AjH1Ky%2F3Bzuv3EFgFMxBytmRUsdS9k5VAFk4Cl43XIF%2BCCrrbmkjXJpMo%2BrN9Y%2B%2BpUGUI62yuSfr%2BLYEO8X6ps%2B9b5%2F6PnK4t2q8Tb4rI%2F2v4RMscNpTGOghM%2FPnGJLTyfyjBkypNiUUoan2O8eetq%2FH%2BOApuhsrnp6IxksCOeiuMUZruKjPBt2CekoKsh7BAfSXAz4tTQvvl6PE0vjJWagATChi8m0KzCnWMMJqRz8IGOqUB5bQ%2FvExxEi7zwFGi71azlCOrr8w6tzR7HoiR6gqh%2B1h%2BhW%2FX5eBBr3bvebot1aFbTFaAmqkMk0Zjjc7bWHZQ%2FWPoB5W6EJYwYV60DUw%2FwLP8bDmTgsnau5fFLJoQkw9gnTR2y2Vv9zJhWb3pWL1WRMd0IMgC4J%2FQmd6fBdv%2Beq4KYN9H4r7OA0a8Vb8G1Qpaiv9NGdT2JY5Ojk%2FjME9EGb%2BjWfKu&X-Amz-Signature=a0ace8333a9ed735fe3ebcf91c500629e436c1c540d56611ffc11d1760ae13ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKHJPV3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2xhfoAc8gzr%2BJYRQY13eoI1shg1kbTRL9iKh3YWIZ2AIhAOf0BGMbMGnJk6qW8E62byybROWeWKB6FgdZgyWJLUQRKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjIs%2BsPRZ7DQ7QWe0q3AMWDUPDnmCAv3JsNU8RiBu1geBI%2BaIMYM2%2B%2FdslurUXObkNcIKzawrVq17YWjVmRrHB6ALVZxTFK0jjppHDGOXf3R13DTlkqUAbkGNdHfyqIwgCQbNp4AwuKIfSALiHqS%2FXFUEfJB%2FM%2BIHir%2BzG3FNibecAz5%2BeDxk6ZsRBRdnxINjnJmLN5k2dHqBhkr9fbkivMH9QL5o2t5QVP68pV2aYmlHWkfMlG0xn3Rkez1VyUT2kmr9%2Fy3ftTPcIpIKH95lsqMB3JTos7jneYZSP1AvzlCvMpgH07MLNmbgR%2FFZuZQt0CGVkee4n1qkojaglFnR771y%2FW0bEfSehvv%2F%2FCWJnm%2BAfNjwqyKixNp7XCjZZZY9CUHFX%2FTDZSSj2LAGAKTfs5icscsqNvov2mbItMnYwFcs5Nm9zqhTR1QypxRgRYRcyR7zBf9oA4RcufBEE0y0BQlboaCX7KDHfPlW%2B38X4Eg2hg2vJQPy3IIGW7mykNSHfUz%2BI%2B9AyTP85wyUBrMWYuJyzAA542WhSJRXhBUygqlMapY3gCYX5P83jjyKYJ%2B0kgngkegF5ViVEx0WcM8h3%2BSn46%2Bnx083JcjBo62l4eUv%2Bj9VjRdPCsgGlXoWEwjYCdgPiXLBqqMiVEzCYkc%2FCBjqkASrEGU2Brxernokl5KS0ozHzVgsKMU2icsl8N1npbbrZJtcE28LAMaLLg%2F8C%2FpUIbEol2yrGG3557N1usHHVoYpXA17o2Kws8OR0jWVd4wpXbeS6mh5jbOV0LgtGQU48S0SKwuiMWIjSOfbJYsa3Ns4asQCLhLrbhLHt8G4Mo5NwNpcjIAhAiCVGGV5pr5RAK7QEBmsp8EvS9kIkfwjQuOYxesW%2F&X-Amz-Signature=63ca193d958611998675d110f20d20770df49291330327e5ddf7172bfad40edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMGXBDA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGgRCVrDVZHiBcalgSIPoGKlfe8SQ0cUOP4v7AHjY2AiEA1IH2KdP%2B%2BRrrxFFqlfMIr4vHqyuR%2FsyGma%2BPQhjGx0MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eTc9IG4FYS2CwBCrcA9XHHRP1DVXYQH6n%2BhFh%2FGwpjlLIr5aFxafNVzNtQZ0U3mxG3lM2M%2BqXE5EUvYLMaWB4yfwX6mRIkzibcpPqig%2BcVZ36bybFYsnBh1Zu%2F4ZNUNHdIFV8DzzvWxtGe3UT%2BhE%2Fmxq7bjg81mnVrTpxQaa7oz6JPuNk40NWrELbucSQIe2NnN50FNqoS4P%2FZ%2FJzuq2Ed1McOiACllru6tfZ4qXfQ1pePLYtmCxJrPB7VNKQTF2q1W0mPDA3fulF4GZiiDApiSuNZZYUqxd%2Fa%2FovXDUPbm3RbiBzhUqyF1etMRmnfORWaARrbi13SANJMmjxha7w1SvhqolqzHYRiJnYphe0Mr1thUh2i2kck%2FEbmoIT%2BNeZqP1ds1tedeMSwW6cXn6hIAxFzdM6h%2FaelKbFyIFiDzD917%2FCTNdTBF1yA5nqEqkD7RmMzWFMF%2BwQxb6g1Ypwvka15Zc%2BfttHoNR2uREFh24PM5xFZmLEavEU21riaIUv8tx7Wmpv71CHUIZDQoHbagqxHy8lZOslH3sgk9jrYa%2FkDcdklETCfT2kX0x2JqK1NXEVdOYtYbKlF8Gid982rJz5ZkaqHsrF5tJJFOHy43dX8zTbRuWup2QGg7dHEWBBRnK3UOB5MnOcMOGjz8IGOqUB3p9dtz3IsztOdBZXYhsOitntH0BWfB5JEFdMMKWaViCAK8fRV4R0K5KjO0QEtqj6zo4LMb%2BRLGR%2BxNCvvv%2BboGsj6KSZtNllo2c0ZXrqV5ppSrfIrEEjnXB9LFH2vmytkQdaFwtImUCacMgGXhgL7smQToKGq3HVOZr7dlbAbAiq2OuBiOLJ%2FxQM4wJKdR04NvKZe95OyTc2bd4LPUpo7mGTVRG6&X-Amz-Signature=f7eeeebe003c69c0835d2c5926647478cdb602ba7d7f0df34b7e3516435966b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
