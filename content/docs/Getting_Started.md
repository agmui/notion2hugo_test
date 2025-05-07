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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ6CJBT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMuz3gBA%2BwRTvuUdtB4nYqehgZQNk69Zh%2BfZYh41m%2FtAiEAjDmDQtHYfvdYoykSo9ZQa%2F6LG%2F%2F%2F4br%2BTvanhAFaz7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAe8sp9efDbsUhFfcCrcA73cSV%2BnCkGIu26jQL8VXlFrOYXDrmq1XPHqr4nzL3Zx6u3rkh%2BKhy5BI3GNoSu5VzBqHxYTlimSeSRrClxwUYFIqO%2F6pVMiEryP4mqAID80uv4jZqLQBca0hg3VXPFeE1QDcJ57yJIK0rnURrwwhzidYnjBamhOIecikNNls%2FTGNg5K96uWTo%2FENE1zNEl7kducuIS1OYEeKb5twrjjKPyrJNjxiKFugrW0aXOY7kfyqrZ22ndjTYpmSw8zsNJy6TghrEu37f8tehxAM5wUv34g%2FCSVA6KoDncZ9yGycqKGZpsEP%2BQZ%2BW4bRDFmK7EP7TSdNiHI%2FQEst0JU2d1Kn2kbwiRtWXoVZ8g0C7Vfsc9nvcb17tQnZOYH5hUCivk%2FehF7qOavUAoW3y3u9%2Bcduae7bY0cNMlKtDo3wMVO%2BbHuYS3stvFBgsgVCjEEbdW0Ef43Kqws09zXYp4MnvYTPFbt%2FU85BpOehZ79cR5YCFUC7ZwKULFTTQUy3L7NQWzeLJhf2a3AnDuc1mPnQAvH0S8ARpEuQAOwnzLsrCMeXi1%2B%2BvDTlFr%2BgRGpiykWYmnf8YwPLLDiyPrZgiok9hpQIo4mjm1B3gigmukvgT%2FbzmpnMk3tzBPeUoMHVuaIMPbP7cAGOqUBcnfikow5jyP7NQLTFkBlWpaCe8uo28aIJIzsPY61h%2BVcxFViYuawGPrGMPIDXWiLT%2B%2F2aPJAlzZYnPKzAm0bOgVb3syFf5yL4%2BFfB6QiKsldBkg%2FuCeNf3NUQyrWwtmxdKsbgZSF7At2QX%2Fv8mD9%2Bbqd%2F%2F%2Bp2vknXAxRVBaSIyy8sMuvHJwuF7Zk1cRl3oa17m7sn0WVB4%2BmB3KHv3Rx69I7XnS6&X-Amz-Signature=6c3de1911a14de6f48dbd6c321c932a08ddf0b032d527f45bd0384f7b552ba7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ6CJBT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMuz3gBA%2BwRTvuUdtB4nYqehgZQNk69Zh%2BfZYh41m%2FtAiEAjDmDQtHYfvdYoykSo9ZQa%2F6LG%2F%2F%2F4br%2BTvanhAFaz7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAe8sp9efDbsUhFfcCrcA73cSV%2BnCkGIu26jQL8VXlFrOYXDrmq1XPHqr4nzL3Zx6u3rkh%2BKhy5BI3GNoSu5VzBqHxYTlimSeSRrClxwUYFIqO%2F6pVMiEryP4mqAID80uv4jZqLQBca0hg3VXPFeE1QDcJ57yJIK0rnURrwwhzidYnjBamhOIecikNNls%2FTGNg5K96uWTo%2FENE1zNEl7kducuIS1OYEeKb5twrjjKPyrJNjxiKFugrW0aXOY7kfyqrZ22ndjTYpmSw8zsNJy6TghrEu37f8tehxAM5wUv34g%2FCSVA6KoDncZ9yGycqKGZpsEP%2BQZ%2BW4bRDFmK7EP7TSdNiHI%2FQEst0JU2d1Kn2kbwiRtWXoVZ8g0C7Vfsc9nvcb17tQnZOYH5hUCivk%2FehF7qOavUAoW3y3u9%2Bcduae7bY0cNMlKtDo3wMVO%2BbHuYS3stvFBgsgVCjEEbdW0Ef43Kqws09zXYp4MnvYTPFbt%2FU85BpOehZ79cR5YCFUC7ZwKULFTTQUy3L7NQWzeLJhf2a3AnDuc1mPnQAvH0S8ARpEuQAOwnzLsrCMeXi1%2B%2BvDTlFr%2BgRGpiykWYmnf8YwPLLDiyPrZgiok9hpQIo4mjm1B3gigmukvgT%2FbzmpnMk3tzBPeUoMHVuaIMPbP7cAGOqUBcnfikow5jyP7NQLTFkBlWpaCe8uo28aIJIzsPY61h%2BVcxFViYuawGPrGMPIDXWiLT%2B%2F2aPJAlzZYnPKzAm0bOgVb3syFf5yL4%2BFfB6QiKsldBkg%2FuCeNf3NUQyrWwtmxdKsbgZSF7At2QX%2Fv8mD9%2Bbqd%2F%2F%2Bp2vknXAxRVBaSIyy8sMuvHJwuF7Zk1cRl3oa17m7sn0WVB4%2BmB3KHv3Rx69I7XnS6&X-Amz-Signature=cf8e104a93d41e8f9f062ca37bc763b589793cb563611aa069a7d9eb97917d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ6CJBT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMuz3gBA%2BwRTvuUdtB4nYqehgZQNk69Zh%2BfZYh41m%2FtAiEAjDmDQtHYfvdYoykSo9ZQa%2F6LG%2F%2F%2F4br%2BTvanhAFaz7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAe8sp9efDbsUhFfcCrcA73cSV%2BnCkGIu26jQL8VXlFrOYXDrmq1XPHqr4nzL3Zx6u3rkh%2BKhy5BI3GNoSu5VzBqHxYTlimSeSRrClxwUYFIqO%2F6pVMiEryP4mqAID80uv4jZqLQBca0hg3VXPFeE1QDcJ57yJIK0rnURrwwhzidYnjBamhOIecikNNls%2FTGNg5K96uWTo%2FENE1zNEl7kducuIS1OYEeKb5twrjjKPyrJNjxiKFugrW0aXOY7kfyqrZ22ndjTYpmSw8zsNJy6TghrEu37f8tehxAM5wUv34g%2FCSVA6KoDncZ9yGycqKGZpsEP%2BQZ%2BW4bRDFmK7EP7TSdNiHI%2FQEst0JU2d1Kn2kbwiRtWXoVZ8g0C7Vfsc9nvcb17tQnZOYH5hUCivk%2FehF7qOavUAoW3y3u9%2Bcduae7bY0cNMlKtDo3wMVO%2BbHuYS3stvFBgsgVCjEEbdW0Ef43Kqws09zXYp4MnvYTPFbt%2FU85BpOehZ79cR5YCFUC7ZwKULFTTQUy3L7NQWzeLJhf2a3AnDuc1mPnQAvH0S8ARpEuQAOwnzLsrCMeXi1%2B%2BvDTlFr%2BgRGpiykWYmnf8YwPLLDiyPrZgiok9hpQIo4mjm1B3gigmukvgT%2FbzmpnMk3tzBPeUoMHVuaIMPbP7cAGOqUBcnfikow5jyP7NQLTFkBlWpaCe8uo28aIJIzsPY61h%2BVcxFViYuawGPrGMPIDXWiLT%2B%2F2aPJAlzZYnPKzAm0bOgVb3syFf5yL4%2BFfB6QiKsldBkg%2FuCeNf3NUQyrWwtmxdKsbgZSF7At2QX%2Fv8mD9%2Bbqd%2F%2F%2Bp2vknXAxRVBaSIyy8sMuvHJwuF7Zk1cRl3oa17m7sn0WVB4%2BmB3KHv3Rx69I7XnS6&X-Amz-Signature=71abc174b4572ab1d8a3e4264101950ffe38b20d93365bbdd9a6f458cd28dc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH23REJ7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMbcwEALSg0I4M4XHLGAF45plMT1SCOB0NMyq1Jku%2FQwIgMt6YLOk4JFEc9Z5gvsDlJ14FPP0HOgVc%2B5nqWJevyGwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN0mfEpDE0vm6IKvOyrcAx43%2BpPqZHm73E3BNlzFeSarYe91N%2FEaFwjl8%2Blo8FdeEPC7k9jB6LNpKExPNkPQzlGknj6k1dySGwZKEClIajIDzoJICeUMjJ%2FeRMMqfj3gdaZYXGDbea8J1VjtDnXovH5Gv7iNFRVHF2vq60WtKUTXcDVWluh2VZN9QDZcmERK99a90tKiP9ETBgSLTa%2BhEJ%2FwLnSGi5F78%2FQdDKrQogM97QQDFmjy%2FKi7ax8VS4DgLibqHQht3PoPPCsAyp6JZjFWTOmPbzTiffjzye%2BWoA2MK4D9tAp9L4DrzVqmJjKdQsaZVpDE8TfiU%2FdV4aWcy3tUtdfEEAL64BXetq%2BGzLiuh6vj39GnVLzw9aZof5wueEavccVLYJHW3PMTEUshPXqVdLHPXA7%2B3N3%2FUAYHeUrcemupI2niuZFn1JbYMQ1Zwu1mK3AUJhT2l%2FDP9YKGQoVMs68fnHs7Iv0u9VrS5b1Ymzcd%2B2Sc5AwKxgGKMgRQ7gmW6Cb5v83YFuNPUzrEPlRZGYoQSMfuiI5oz9sjglSfeL6x7pm5Fa464a0B3a%2BpSow%2FBURr4qkg8ELnw8%2FYewSfZgApYURK6U70SPNvSGNMxq9FrDbmVEyhMIMiSosaaMqeF3PkrMy79V2%2BMObP7cAGOqUBm3QBq76bMcUY7MbR9TktRLjOlP8wxOARG3tB6YyOuQ2%2F7wgyeimdjSFePcS9np7RfLPfHcdl8Fi0vJGFUDBGLXU3mDCpWD4ScEYIq8k6mQCPBGHfVU0BaLR0O%2FkryhgwZuuZtiCP9Qs30Nybw3oDMRuxOsuBPp4EgRLiausGJUYHnzqfJ3hWdLQt%2FbygmnPM61fCLhR4g98xVxACKHOt%2BO1bEXg%2B&X-Amz-Signature=44ba54fe2ae618054fab38068ea3ecad2684d26674e85831df23879aa599b86a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTSA5CIG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSHPQdjPR8gmDg6A%2Ff0EULEM0AYrSDOW%2ButlV2X1UkKAiAfFvrpyO51rjOc%2Ff5TNjLdD4XZ01F32uhU2PNDlRom3Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMk3M9kEnZAMOLVSXJKtwDp4912YbthrWefofuJOfHK4x1IAob%2FyVo6TtzRMM8VxjOokT%2FrE%2BkCSk6j6rP0KQvQeWUUjfZiyBD%2FjPQFZCldjvEOhzsbFCmXpp5%2F9DuBve7qjFmwwvoSlOn6B7%2BDO%2FLtSw8IGiVFN90%2FG6gHnfH24h7aUOh8jfDO4I5GiYF%2FwxCk9JXrZ%2BNkwBMrbIB7ov94wUmwgry%2FNvcwCp7%2BBVM2c5I1Iry5LyA0kd2lXxLsSW38X%2F4FaN8ZRW%2BuEBVtP%2F79dwl2fjQQ8%2BKsU8bHq2LX2Ae0ZAaoumQ8yuctXj0qcM3CnKLF2Mo59CjYAeA1VgUQbMh86zRUzDoEiNxYdOeQFgJGu7iBVtkjjtlueA10CmdyS6Y6CyQj%2B1OAlGv65Qkka2uYWck09fnQEh6zaBDcop9JCRS7g29g%2FftuWTdsMka8XxoN4kdckRNS3kMGJFlNICdbDbwZeLfZaqpW3JAB1lW4hrp8ySlLqW0DnmILNq1dbYkDvGWwTCFJi1HW%2BDgPDe9%2BOKE1%2B%2Bhi75npItLHgaS%2B3e%2FfX5xHYlZmBX6DuRBbDXLoPGvVEYE0MMs01CNNAAjbCxEdCTRIrbyXndycmhpyt57s5hrZLd8AKpnkmWAnn%2FJjss57oBRQgwwidDtwAY6pgGKpbv9aj2OEyUYar8QXXN1ngdtkFucPNo7zDZrE%2BscT17OM35QfgVVbHTMska17tlhzei2b0bMS20G8frfZiEcHIVrCgv6alF3vwjeRlODbcsU7eKEsw3VpKDrkrHXjTSFliclgbFEJ87lq22es%2BNacnF76OEtxDocE3vW4M9k6G7ZXbANKVDzOyj81fgpxCsi99I2Ll0zm861WYKND1g1LA3Z8dy%2F&X-Amz-Signature=f0b2f8e8a62629ac431c6b175b83396ec03f56618c4b9f7ff36b7f6d19c91978&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ6CJBT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMuz3gBA%2BwRTvuUdtB4nYqehgZQNk69Zh%2BfZYh41m%2FtAiEAjDmDQtHYfvdYoykSo9ZQa%2F6LG%2F%2F%2F4br%2BTvanhAFaz7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAe8sp9efDbsUhFfcCrcA73cSV%2BnCkGIu26jQL8VXlFrOYXDrmq1XPHqr4nzL3Zx6u3rkh%2BKhy5BI3GNoSu5VzBqHxYTlimSeSRrClxwUYFIqO%2F6pVMiEryP4mqAID80uv4jZqLQBca0hg3VXPFeE1QDcJ57yJIK0rnURrwwhzidYnjBamhOIecikNNls%2FTGNg5K96uWTo%2FENE1zNEl7kducuIS1OYEeKb5twrjjKPyrJNjxiKFugrW0aXOY7kfyqrZ22ndjTYpmSw8zsNJy6TghrEu37f8tehxAM5wUv34g%2FCSVA6KoDncZ9yGycqKGZpsEP%2BQZ%2BW4bRDFmK7EP7TSdNiHI%2FQEst0JU2d1Kn2kbwiRtWXoVZ8g0C7Vfsc9nvcb17tQnZOYH5hUCivk%2FehF7qOavUAoW3y3u9%2Bcduae7bY0cNMlKtDo3wMVO%2BbHuYS3stvFBgsgVCjEEbdW0Ef43Kqws09zXYp4MnvYTPFbt%2FU85BpOehZ79cR5YCFUC7ZwKULFTTQUy3L7NQWzeLJhf2a3AnDuc1mPnQAvH0S8ARpEuQAOwnzLsrCMeXi1%2B%2BvDTlFr%2BgRGpiykWYmnf8YwPLLDiyPrZgiok9hpQIo4mjm1B3gigmukvgT%2FbzmpnMk3tzBPeUoMHVuaIMPbP7cAGOqUBcnfikow5jyP7NQLTFkBlWpaCe8uo28aIJIzsPY61h%2BVcxFViYuawGPrGMPIDXWiLT%2B%2F2aPJAlzZYnPKzAm0bOgVb3syFf5yL4%2BFfB6QiKsldBkg%2FuCeNf3NUQyrWwtmxdKsbgZSF7At2QX%2Fv8mD9%2Bbqd%2F%2F%2Bp2vknXAxRVBaSIyy8sMuvHJwuF7Zk1cRl3oa17m7sn0WVB4%2BmB3KHv3Rx69I7XnS6&X-Amz-Signature=600ea1aca688766c15d585ceec22b65a2b67b50d8352cf790261caf88e6f9ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
