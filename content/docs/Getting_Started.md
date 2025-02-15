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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFC64NJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCtxHSorsqIEJXyI7PXeHw4jHfARYnpprspd5NXYR8zzQIhAI8n6%2BBGUcY5VLAykysHAckJpQESt6%2FSoWYzfH%2F3Zf1NKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0OHm0JgsE76PM5uwq3AP3%2Ba8QmGn%2BifLJgUEHI45vTMtUww8iax8OjFjCgVvaTGpy%2F%2FrtGbpoeGLXYi8WDqil9LUjfifTthz8jWHxwvuVCnuJRCLEsVJIBEr7eyewMFouGkHKMeqI4tidAaRxzI1kZyGLNFiMP17jnLb2nnknU%2FdCEutAzpIj9vwcR%2FmpPglg2QHboDcC1zYCBtA6hDmyWGW2Ws96cNQbxgd592uK3sGJ09UW2Gss%2Bu3RGQqZf7CwMfclR6wI8cyJYAN22mE5JisWeLBSoRy06a4KEwWt%2FQRWIxcY4PV55Uc4RO4xtmK0QxX195COHfU1wpbPpvA4Jwqghvz28jwhsd06VFbzA4L622qIG3YL5zbrlcETLOG%2FGs1XP5EErNiA72YHfP0l8Aqe7pdkfSKhvv3pX6%2FVKX%2BL4SGnu%2BDkgzY803g2qsC5VSj2ktWJjKBJmhyy8I8sE1ayDiUy4lkBC2YYsmtzHCkU10v6EZKwzDHzb%2FqUntodCTNLwJiTt8hQ%2BdEAglCpa8AY9OOYfSDwTnBKX6z%2F6hAHVjyTb7C%2Fbp7xGNhRWN1kM5GLcGp4Aekf5cnrLhPgKl1k702vQUYSXqdeW0PCc70Y82D6bCzc8607BIaT7aWG4GwZ0x8ETxYtnTDEsMC9BjqkAYYuPf%2FT30SLoeIU13UJ0I8AIYn8Yrs%2BLvNXJfsZierKYFp8NIOymNiEuYXGto6QeRRvxnwYlfR7qhyDuDzLCHRqX%2FaTkln2TdnMS2Ah7YGXrKsjzLoqBeWcLie%2BZyRfY5VKBbk8QMl6IO09YlkOhloBQFb5QD%2B9nTfCn%2BET7f0f0B6HEfS8SfTpyoTYCa6%2BXwI8OCpPeESJVnxKQzyE%2BXMfYle8&X-Amz-Signature=16266059a08524f7795cf798c86fda6bfd9d859e084e3f7682e705c6e0030138&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFC64NJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCtxHSorsqIEJXyI7PXeHw4jHfARYnpprspd5NXYR8zzQIhAI8n6%2BBGUcY5VLAykysHAckJpQESt6%2FSoWYzfH%2F3Zf1NKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0OHm0JgsE76PM5uwq3AP3%2Ba8QmGn%2BifLJgUEHI45vTMtUww8iax8OjFjCgVvaTGpy%2F%2FrtGbpoeGLXYi8WDqil9LUjfifTthz8jWHxwvuVCnuJRCLEsVJIBEr7eyewMFouGkHKMeqI4tidAaRxzI1kZyGLNFiMP17jnLb2nnknU%2FdCEutAzpIj9vwcR%2FmpPglg2QHboDcC1zYCBtA6hDmyWGW2Ws96cNQbxgd592uK3sGJ09UW2Gss%2Bu3RGQqZf7CwMfclR6wI8cyJYAN22mE5JisWeLBSoRy06a4KEwWt%2FQRWIxcY4PV55Uc4RO4xtmK0QxX195COHfU1wpbPpvA4Jwqghvz28jwhsd06VFbzA4L622qIG3YL5zbrlcETLOG%2FGs1XP5EErNiA72YHfP0l8Aqe7pdkfSKhvv3pX6%2FVKX%2BL4SGnu%2BDkgzY803g2qsC5VSj2ktWJjKBJmhyy8I8sE1ayDiUy4lkBC2YYsmtzHCkU10v6EZKwzDHzb%2FqUntodCTNLwJiTt8hQ%2BdEAglCpa8AY9OOYfSDwTnBKX6z%2F6hAHVjyTb7C%2Fbp7xGNhRWN1kM5GLcGp4Aekf5cnrLhPgKl1k702vQUYSXqdeW0PCc70Y82D6bCzc8607BIaT7aWG4GwZ0x8ETxYtnTDEsMC9BjqkAYYuPf%2FT30SLoeIU13UJ0I8AIYn8Yrs%2BLvNXJfsZierKYFp8NIOymNiEuYXGto6QeRRvxnwYlfR7qhyDuDzLCHRqX%2FaTkln2TdnMS2Ah7YGXrKsjzLoqBeWcLie%2BZyRfY5VKBbk8QMl6IO09YlkOhloBQFb5QD%2B9nTfCn%2BET7f0f0B6HEfS8SfTpyoTYCa6%2BXwI8OCpPeESJVnxKQzyE%2BXMfYle8&X-Amz-Signature=692025c3f6352d73c47c4e712f69fddc5e13c26b7e885368212aca35c6b7114b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOSCQGO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHZPs8Sxh0zCp7xprhhfp1hIoU%2FXuDwnSKtwiPKH%2BghhAiB57rijOFtUxGWxq2GXh6OjUHcFUKvNUSrKxWC23gU35ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMJVzdt%2BvdCF7QGefDKtwDLPl4IQQLMffrVRmI4I5mDJVOuuQMeemLbxGbeJ9sopWJsM1E95uU5AmBHcyuVzTzVQ9HseFxOys88Y7oQIzcqdwPjqvjzLBMCHXy8O6540I5XR0UYv34%2FqjdO9vnBCP36XaVJE2gWlmcQh%2FQfMWuyqKssOwh%2Bjbt9S1WFCrgIx7R7thVXiBB%2Fsvhhbu1bI3QJXVXsMsuxv3GesG6%2BKDYvjgRRtisnp%2B7baPzAJXkGtBIxtbFb%2FlxQ4qOvyZhWsoEDxT7Lf97mfOO8vUsAPwB9FIqkJRMSd1GuAal4wdTJGGU4djFyQb3uG%2BTZGII%2BYBsfQYN06bszrtLU61yQAHOmbhB2YU8eRgP%2FL6SaJiqQToit8DZcgBBGsuQoFC4wUBjQIb%2FOXLEq6ZjaMobS7RKALUFKK%2FgsOutaYoS48Jmq11vD7rOJt6KV3Sa64n49kQt7ha%2FYgslG2bsQNC%2BqzS1UXzvS5jXf4apBx%2FfBz75lJ8bOhD88jjyHRh%2F7zsGbpzTztkcbK97xmOoenesR4NhJvQGtvybza7PPlkDUEHG57sUHyq05B4eSe9wokZ2V3Ez%2BCpTcUq8DaHj8FDOH%2BZkRs1QJNqQJA4pQjTVbCJdmPRmC9yS%2BTCg2XOT5aAw%2BbDAvQY6pgFr67ytKpowRtDLdnR3cURCLsXFb3FxxBp5Ki1QhOhQeShFB61DrYCC%2F2o4y5Hb7HibXi%2FONvAYQdobIJzVYe7wnO0xxkRPP%2BSHI%2FU7HpwUsoyB7GWEaG9wamMxGwaGWSdEP4HUcww6DiKDxGrEZKgWvNQwDT%2BSX9CxmtTywYfP5WUf1r5L4SuXZQSHSSvcNjId8CZ2v313fzMI36b4ASFcsJaisaCi&X-Amz-Signature=a06c089045d9978c332b5840f3a9a1a200ec88e847610d0dfd376a04e86c4ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQDDGFV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJFMEMCIDdN9pu8hOP2I2bu%2FnbJU9jtDx0iXuGYsIr7QagzT%2BOxAh9O7meSJV7CCui8EzE0SNTWIeIM%2FeZSih5TgwdbpD8gKv8DCD4QABoMNjM3NDIzMTgzODA1IgyAXhWvNjo1iZmiKmEq3AONwA%2FlDGY4nX5ttZ11K3QBYBDqo1Izi8cd0Nog6twHgm2zZG2c0W9K%2Bfw3YI95%2F0uYLndysH6iFjFK%2FxAVri2YNIzWJMBT2XJp%2FnYUIylWDZPl4%2BMDjk1H7srE3smcfglk60u0UP0CFMPbUH6Zy79i3KFJQPuKAVM%2FGomUZYBjPZlNPc2YrBkdEKHbUUGK0ZyhA0pyrAbHe%2FCaZ8Upp8rpmktGxUXg1FkjODYEy1xrJzd5xeRvvhpOQ%2F7hjKVS%2B%2BNcrRnVhCpbK6VCDfgRaeSi%2B5TgiYRAjS1aQIl3ddkPoKQC0dP%2F%2FuoFwI0awKhg%2B%2BbCWO91%2BhL8mnUunLTPz4BW5hw1beeIDZ7%2BeTRdvgCUMidZpPLt%2B%2Fctn5XUT6q7YFtr2jkzYR4IhQ7MV3HKh9DlcCnqvOmeXQmwHya5QZg3gY%2F5pWinttcBNMQ73vdjUUTNkDy0wVPBGUpoXjjIRoTbNb8dY1%2FsJyzkWFMsL9VuXyewNx6kZLsU0ONKfWa%2Bir9aDxVBsJi1%2Bh18YAVew3NIGG7XIU524nUal4BJdB3MnmtOhlaAnaCJQFuFe0B1h9nrKLeijuS3UcMD1%2By6u76fD4IxNtV2Wxa9oMBpt4zK5r%2BjlC0Ex5lH60s8yTD5sMC9BjqnAbv%2FOyjCQFEMM6d2xwxRDxWBxKO7MbY14iUQdZqKjzfQXShMuPT9tzaCeZT7I2mkamPlmJI11dl2GQGOaTnNZtjmqhRhAcaskHZ1KixG4DOIRWFUxVQsX2LQm3HG95VAdzFcuHW2HORYfeabT5XUUaCjw0tHjsZGXHnrxcLiIizNjktiHXD7mvh1NSrG6HWD4yISL%2BVv4IPY51CeyBcIufluSMx77fyV&X-Amz-Signature=e800bfc8c47bc2b57e04e850ca391516d8bfb0c8433fdf6e2df73e22ba79af17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFC64NJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCtxHSorsqIEJXyI7PXeHw4jHfARYnpprspd5NXYR8zzQIhAI8n6%2BBGUcY5VLAykysHAckJpQESt6%2FSoWYzfH%2F3Zf1NKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0OHm0JgsE76PM5uwq3AP3%2Ba8QmGn%2BifLJgUEHI45vTMtUww8iax8OjFjCgVvaTGpy%2F%2FrtGbpoeGLXYi8WDqil9LUjfifTthz8jWHxwvuVCnuJRCLEsVJIBEr7eyewMFouGkHKMeqI4tidAaRxzI1kZyGLNFiMP17jnLb2nnknU%2FdCEutAzpIj9vwcR%2FmpPglg2QHboDcC1zYCBtA6hDmyWGW2Ws96cNQbxgd592uK3sGJ09UW2Gss%2Bu3RGQqZf7CwMfclR6wI8cyJYAN22mE5JisWeLBSoRy06a4KEwWt%2FQRWIxcY4PV55Uc4RO4xtmK0QxX195COHfU1wpbPpvA4Jwqghvz28jwhsd06VFbzA4L622qIG3YL5zbrlcETLOG%2FGs1XP5EErNiA72YHfP0l8Aqe7pdkfSKhvv3pX6%2FVKX%2BL4SGnu%2BDkgzY803g2qsC5VSj2ktWJjKBJmhyy8I8sE1ayDiUy4lkBC2YYsmtzHCkU10v6EZKwzDHzb%2FqUntodCTNLwJiTt8hQ%2BdEAglCpa8AY9OOYfSDwTnBKX6z%2F6hAHVjyTb7C%2Fbp7xGNhRWN1kM5GLcGp4Aekf5cnrLhPgKl1k702vQUYSXqdeW0PCc70Y82D6bCzc8607BIaT7aWG4GwZ0x8ETxYtnTDEsMC9BjqkAYYuPf%2FT30SLoeIU13UJ0I8AIYn8Yrs%2BLvNXJfsZierKYFp8NIOymNiEuYXGto6QeRRvxnwYlfR7qhyDuDzLCHRqX%2FaTkln2TdnMS2Ah7YGXrKsjzLoqBeWcLie%2BZyRfY5VKBbk8QMl6IO09YlkOhloBQFb5QD%2B9nTfCn%2BET7f0f0B6HEfS8SfTpyoTYCa6%2BXwI8OCpPeESJVnxKQzyE%2BXMfYle8&X-Amz-Signature=035f9c6747508645557a2b4f0f1c81621511447d6a15f857fdf2657efb7c36be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
