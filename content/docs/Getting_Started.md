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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TZEIJX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnbKnS3x0FXIOcK%2FfDk6rD6r7Pt53tmIGH%2FTUTEoZqWAiEA2hCK3UtwnNZpaTPABwSd7VCvmUhdywX8DxQIO1omsdIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMDBUvpQtvIoalWnCrcA3TAPmO44VGikB0uV13OOi1fVl3Zw3HM53AeVthiPrhNt3sWuPAbSD50tepwQr71ooht3w8LJAQTQ1irvfDP5k5TY4YnCWEQ2AZxlRgQ8SoBR%2BhSKT9Lc8mlXTFVXCIWAChs4Evy7cokalfInCuBamA1veXu%2FcnPpzwdSHBBv9Fkv1OU3ozjmBQcFSE4HTbWfiI4XXizDzdD1U4chP3OCzA7fmGDbEDPlA%2BFklMDhW1S81ra3bLBzOwQijJs8LRseoe4g4ebgnhjXqcNX%2F6%2BKIbPn2yiLR4TJ8I%2FwC2nudTkjXXX3tOb6ypKACF8833Wzio7nrj1h54I8QaCtAFwr9wFkyEy7pEUTlaOQ3nlon8DZgKyTuehO8af0%2Bz4fYMQ%2FSLt8xuoccqbuigE96VosMCakSfN9O1jUVaG0LcmhZg9DEgvRwtmrhtzo%2B%2FnNimvNl0q%2F1bHKWiNVzOPNC1YejOTSdmo3Shh0U4dZJXg690Aap94Kdo%2BcCXf4%2BVhoiAy3kJPeFktSyB1ecpgOqptcwyaGxIAXP5jXAT51m9sNsfPRcyKqdUVjo8WedekxytWyZtEE9KqKbi2Ng%2FvzlMvHRmC8LqRWyTuKB5hDLmviuBwCWAhI%2FmpIf8ANMXoMNXH6r0GOqUBZthu8CE1H%2FDn79xMJ9ZzN4Z%2Fbhug%2FcEChstG2hugVyHyAA5GkK10WyACWqMJPl1fp5rOg7qi8wnN0HKCPp4bKBtblsihRoH2d78JkZ3cnSKwQomqyJw6fBF5cpMWdlxL1aB0ftZpCbcpxlJWxy%2FwjgJm3K0G%2BA%2BZwh3DMbR7EWykp78kUeUXIEBDisEEov3bLHwqrOmDmE3OBXq20PjyOgGKx5H3&X-Amz-Signature=51164302ffee7428aa5750b016bec5cdfc3a43f945302da787ed433b90e4d965&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TZEIJX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnbKnS3x0FXIOcK%2FfDk6rD6r7Pt53tmIGH%2FTUTEoZqWAiEA2hCK3UtwnNZpaTPABwSd7VCvmUhdywX8DxQIO1omsdIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMDBUvpQtvIoalWnCrcA3TAPmO44VGikB0uV13OOi1fVl3Zw3HM53AeVthiPrhNt3sWuPAbSD50tepwQr71ooht3w8LJAQTQ1irvfDP5k5TY4YnCWEQ2AZxlRgQ8SoBR%2BhSKT9Lc8mlXTFVXCIWAChs4Evy7cokalfInCuBamA1veXu%2FcnPpzwdSHBBv9Fkv1OU3ozjmBQcFSE4HTbWfiI4XXizDzdD1U4chP3OCzA7fmGDbEDPlA%2BFklMDhW1S81ra3bLBzOwQijJs8LRseoe4g4ebgnhjXqcNX%2F6%2BKIbPn2yiLR4TJ8I%2FwC2nudTkjXXX3tOb6ypKACF8833Wzio7nrj1h54I8QaCtAFwr9wFkyEy7pEUTlaOQ3nlon8DZgKyTuehO8af0%2Bz4fYMQ%2FSLt8xuoccqbuigE96VosMCakSfN9O1jUVaG0LcmhZg9DEgvRwtmrhtzo%2B%2FnNimvNl0q%2F1bHKWiNVzOPNC1YejOTSdmo3Shh0U4dZJXg690Aap94Kdo%2BcCXf4%2BVhoiAy3kJPeFktSyB1ecpgOqptcwyaGxIAXP5jXAT51m9sNsfPRcyKqdUVjo8WedekxytWyZtEE9KqKbi2Ng%2FvzlMvHRmC8LqRWyTuKB5hDLmviuBwCWAhI%2FmpIf8ANMXoMNXH6r0GOqUBZthu8CE1H%2FDn79xMJ9ZzN4Z%2Fbhug%2FcEChstG2hugVyHyAA5GkK10WyACWqMJPl1fp5rOg7qi8wnN0HKCPp4bKBtblsihRoH2d78JkZ3cnSKwQomqyJw6fBF5cpMWdlxL1aB0ftZpCbcpxlJWxy%2FwjgJm3K0G%2BA%2BZwh3DMbR7EWykp78kUeUXIEBDisEEov3bLHwqrOmDmE3OBXq20PjyOgGKx5H3&X-Amz-Signature=4495564a911c44ce723599ba02e2e25f1faaa5ca5275016d1b3bf485e0a31c60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYZLYTS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWD53sC9QEV%2B6yLMe2O5J4gbxktzKrCnIp7jBcQipJgAiEAibgv0ZmcMzs3BZ01TWfT2Jxaps6nqBFHEt4RH7Y7rk4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkbSop30E6yUXpFhyrcA3HoZS%2F7%2FA%2BKWrwFPTCQg0zcmiQPWtmVBREdID4Tdx%2F3ZtSRx2lX3qiHL%2F9B%2F9FSnlZl3MwIA84lg5S%2B1TE0oR%2BPq4xqi6X7LAnDj54IRM8SE21TuOlrjDuyMkSp6%2BB6ClFy7L7lpAfmvOclgdwH7ANY16SdRw3lBHS%2F1BvHLmQ6c3ysrRdHqQyHFIn7tWXSfrv90WvbpC9V0cIe%2BTLlGim9RqxRfbN4zKtzYY8pVYntNY97cOLYA%2FcANDv%2BbMQoNi3tmtvDf398T%2BZV5aHgvoqML8OzRL8WunlvM6J6P5CzjoUFNPMVfufNM0GcyzGSeerX4%2FjpMAzp%2BzDup6w1zlLAZi9YaHFVL0VX753vu%2B40V6V8tibXzolywg%2F0ay7dv4C9fPDpOjHbOHSyhZmyw6rn%2BRO6Zy5OYxWvXS78RKvmBXkpDk74f%2Bhu2GlruslV3GLDHeXmWTgMnDGjvXFsVElmEvv6hkLlho5ScsGNddfABKYINdlSwX7aQ4E8ZaN4lXitBwMFEuC9C%2FG7OkauqQK9%2BOyUEqcH7CSYnQOzGvYApEo5eT0rP53%2BGLHR4r1WTjZ77cQfPCPL1OBaOM9pGH3AGIrVlCeYmEMAO6NfsS%2F6mJ4oHQRJGVW7rWFZMK666r0GOqUBMNbuTZjpv5Cebw1x%2F%2BzY3upZS4FaFHOaoRhzGc%2F8VmRuCEhVcHx89zrt%2Bge9R4nNjEaIa%2FFIn77cThXmDcHf%2Fif2AYMj%2F3poohy0ELvJ22H%2F3rYD8A6TR%2F7hV5rrR71zf6vwsj3FO9xK2Wm4UlI02Y%2BAy3oF0qtvxajqO4G6AR6cAU4MewI7tWjZUk7%2B8GVGmVObCgqKz4EIg8QlGzK9mITZ6g5C&X-Amz-Signature=3417ac35fb507fdc8e244fc68343928919b96c4cb9c6319227612131b72a58f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJ7JKGS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo642fUinnos78fVxr2W8lIENhwLA5w1lUKaJlXswF2AIhAPNiEOtzj5Hwf%2Bg80CsCAnVQS80ram3MMmIT9Fs1WO%2FNKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1CKlpGEiX3hjmse0q3AOPeseuLJsUOIsJMgI77GRv1o0pf96JDf0%2FsiYjxlbSoAgOcDTAT%2F7eN%2Bkht%2Boqi6N7VAS6zIe4zyukzTn5Yo8CUmhowjcka09R2%2FR4xklXnqRyqV15QFK2mgeXLxeO97SoFQG0B8nqCcHjyTDU1sFYYeCPmmqI3DBBn5Ctx1KOLRTzHVJit%2F4RSESHTCQ%2FQmeFvR5WhQjtBxlZZ7x%2BQkBg803wiIcCnXBd85Js3TZrEaba5GaRPv9J4uJST%2BwT%2FI3sVecnfO3j9vD2%2BIC5%2Bjio29n9bZLZTF6eIEZeBCsK07sXBCVcvpXbmyvXXWDGOxCWm4CLs4sUvMzcbcoom45beEAxib3coiz%2BauF%2B%2FqDcJrbAwR2IAvhg8uJnZYtsExLYjM5Wf51NH0eQ7F5%2BkBt708KYFlPlK01ioZqMDdZMi3lG%2B%2F1dpjCfLsRVtWXBDmRL8IpNBmxxEWmGJtleNGrVX9bfOdWO6mpY4OOX3VeAkqls2YcvpeK94D2p1J7Bft5YRHxETrGTtgEZmfY%2FVKjzCZ2bvUg24uzWSLH1oRzugKiEnYBdxy%2Bh0wjYa1i%2BuFc%2FC9xIAsPwL9njlexkLKO%2BeD4G%2Frmr%2B%2FULx1p0LOG27KxBEIwngB399%2BBEZzCp0eq9BjqkAYHzhKHmj2%2B9yYOF04Nh5kkwjcQLfCD%2FNgH0Nr8fQn%2BnNqsVqSuQFzOQMgoLywShgRkFglos0zqcn9dpmCYOGJkFmCaewmRggG0LygHnrDEzt86y9okIqSMrm5OlQb%2B9ysDuCLpP7tgjZAjgBgS3bW0aQa3GNHMz01xneNBEH%2B%2FEE5iQzOyBcyn%2F2W3DGmVK2TEHOHzvQS6EaH%2BBRsDfT%2Bfv9m14&X-Amz-Signature=472596f6279e0cb12f098eb4484e9d35b3761974c8f63652b10ad783ad1badfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TZEIJX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnbKnS3x0FXIOcK%2FfDk6rD6r7Pt53tmIGH%2FTUTEoZqWAiEA2hCK3UtwnNZpaTPABwSd7VCvmUhdywX8DxQIO1omsdIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMDBUvpQtvIoalWnCrcA3TAPmO44VGikB0uV13OOi1fVl3Zw3HM53AeVthiPrhNt3sWuPAbSD50tepwQr71ooht3w8LJAQTQ1irvfDP5k5TY4YnCWEQ2AZxlRgQ8SoBR%2BhSKT9Lc8mlXTFVXCIWAChs4Evy7cokalfInCuBamA1veXu%2FcnPpzwdSHBBv9Fkv1OU3ozjmBQcFSE4HTbWfiI4XXizDzdD1U4chP3OCzA7fmGDbEDPlA%2BFklMDhW1S81ra3bLBzOwQijJs8LRseoe4g4ebgnhjXqcNX%2F6%2BKIbPn2yiLR4TJ8I%2FwC2nudTkjXXX3tOb6ypKACF8833Wzio7nrj1h54I8QaCtAFwr9wFkyEy7pEUTlaOQ3nlon8DZgKyTuehO8af0%2Bz4fYMQ%2FSLt8xuoccqbuigE96VosMCakSfN9O1jUVaG0LcmhZg9DEgvRwtmrhtzo%2B%2FnNimvNl0q%2F1bHKWiNVzOPNC1YejOTSdmo3Shh0U4dZJXg690Aap94Kdo%2BcCXf4%2BVhoiAy3kJPeFktSyB1ecpgOqptcwyaGxIAXP5jXAT51m9sNsfPRcyKqdUVjo8WedekxytWyZtEE9KqKbi2Ng%2FvzlMvHRmC8LqRWyTuKB5hDLmviuBwCWAhI%2FmpIf8ANMXoMNXH6r0GOqUBZthu8CE1H%2FDn79xMJ9ZzN4Z%2Fbhug%2FcEChstG2hugVyHyAA5GkK10WyACWqMJPl1fp5rOg7qi8wnN0HKCPp4bKBtblsihRoH2d78JkZ3cnSKwQomqyJw6fBF5cpMWdlxL1aB0ftZpCbcpxlJWxy%2FwjgJm3K0G%2BA%2BZwh3DMbR7EWykp78kUeUXIEBDisEEov3bLHwqrOmDmE3OBXq20PjyOgGKx5H3&X-Amz-Signature=429febd9a13c60cd1bb7b9c44b441856ee8f4b3496c6e52a59cd4b662e2e5723&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
