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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSH4FFC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYWx3jT6Lsu8E7g7gHukvtaGH%2Fjj%2F%2F11BV31fJf4YTzAiEA1zcUcDm2DYxkyKMUjMx7QzfNq3BJp3sE%2FOQ5ryxEIlQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDzsuaimF8ApenjmbCrcA3cW4TvIOtBGKwOgRjhWHDeX7mRoBskUgS88jI%2BF3fDz5woeo9XU%2Brl6%2B12xeKQQWintdKojDR%2B%2FSGdQaDUeflyW5K785CRN7wVglIKx1qCUWhPopruK2vC24tOChSBbI17G6oOt%2FoJh09v%2Fjc2WTY7GcTj5GG7%2FR5Ao1LaCqfRUE7HhqjgsFcrY%2B5PdmxhZeM4WSwAWWy1GXbY6MYmOdEBEd4gM0PYfxb8pOVovpoSmVZeAK%2FMtgnJOLl6mZqoQs4eH49BkEDOVwezEX91ddmJDQguswmP%2FvhU3MF7QOu%2FPIQNkW87GRrHpI5tkwWtPoN%2Fk3yqcKi7s9sjXUu18g85BuMwuY5NwA75FcNI2Dw7l0rdaY7tSbmqOO%2Fna%2FZvlFeiGmoP5Jg4Na9D1j5SME4%2BTWbbbk2l%2FyGg6kNajyygkfGqgKNvJz5C%2FLlV%2BcyLKqAMEP1URb9tNr00AoGwUF0lr%2FpySodBlNqeRvJ8A46Ka2ShhXSXyvyeGw5WOQR79D9fvjkORk3CM4K9c2oYsNBQBeLqLQBmQ1%2BvgxVi8%2FxVTYoUWDYE9DA5NTlR%2F9Y87sxokwcegk8WWTpAh47%2F0D7oX8WKrCQzljnZDRnbL%2Fw7Od3gsKm9FtoaQMVHiMJ2xisAGOqUBjv1r3XiaiGN2dimJKRF7SAWFhy6SkUXpmXNtnqX67BnYY8iRmm95vdSYW%2FJ8VcprRnrcEr%2FJwcTa1%2FghasJZv0rXUMWckF98UxuIba%2BZDKabCJ2sOvsqCZAIqLAieamnQSKH67hbu06z4Ltjq0lUb7D%2FUJD2RlTvmNLswAgEbNRmhuGDUTq%2BW%2FBL%2BvPmuaQtrsnw49xJAWmJdJ0jQIOPtdyBQZUj&X-Amz-Signature=2180c6d39d4044661ca95595fad66bfedaede5c6190d23873cb12c7da96ff5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSH4FFC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYWx3jT6Lsu8E7g7gHukvtaGH%2Fjj%2F%2F11BV31fJf4YTzAiEA1zcUcDm2DYxkyKMUjMx7QzfNq3BJp3sE%2FOQ5ryxEIlQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDzsuaimF8ApenjmbCrcA3cW4TvIOtBGKwOgRjhWHDeX7mRoBskUgS88jI%2BF3fDz5woeo9XU%2Brl6%2B12xeKQQWintdKojDR%2B%2FSGdQaDUeflyW5K785CRN7wVglIKx1qCUWhPopruK2vC24tOChSBbI17G6oOt%2FoJh09v%2Fjc2WTY7GcTj5GG7%2FR5Ao1LaCqfRUE7HhqjgsFcrY%2B5PdmxhZeM4WSwAWWy1GXbY6MYmOdEBEd4gM0PYfxb8pOVovpoSmVZeAK%2FMtgnJOLl6mZqoQs4eH49BkEDOVwezEX91ddmJDQguswmP%2FvhU3MF7QOu%2FPIQNkW87GRrHpI5tkwWtPoN%2Fk3yqcKi7s9sjXUu18g85BuMwuY5NwA75FcNI2Dw7l0rdaY7tSbmqOO%2Fna%2FZvlFeiGmoP5Jg4Na9D1j5SME4%2BTWbbbk2l%2FyGg6kNajyygkfGqgKNvJz5C%2FLlV%2BcyLKqAMEP1URb9tNr00AoGwUF0lr%2FpySodBlNqeRvJ8A46Ka2ShhXSXyvyeGw5WOQR79D9fvjkORk3CM4K9c2oYsNBQBeLqLQBmQ1%2BvgxVi8%2FxVTYoUWDYE9DA5NTlR%2F9Y87sxokwcegk8WWTpAh47%2F0D7oX8WKrCQzljnZDRnbL%2Fw7Od3gsKm9FtoaQMVHiMJ2xisAGOqUBjv1r3XiaiGN2dimJKRF7SAWFhy6SkUXpmXNtnqX67BnYY8iRmm95vdSYW%2FJ8VcprRnrcEr%2FJwcTa1%2FghasJZv0rXUMWckF98UxuIba%2BZDKabCJ2sOvsqCZAIqLAieamnQSKH67hbu06z4Ltjq0lUb7D%2FUJD2RlTvmNLswAgEbNRmhuGDUTq%2BW%2FBL%2BvPmuaQtrsnw49xJAWmJdJ0jQIOPtdyBQZUj&X-Amz-Signature=b9e76fe94763bad1362cbf8a80728923393120c5f844af91fe5a9169b0929757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IRNZMG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxKo8LwXcPqvNPOjy%2Fy4hTJtifBp8lLjUFoc%2Ffmxz%2FgAiAZ8s899Fp%2FvNpIgCbctyNVJd1GieRQUbIRb6RY6HofCir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9W1%2Bp6gS6wspQmPGKtwD4uigt2EarKJKAT%2BsrE17xuBLMdaUVJJIb14sGK%2BskcTtEWVH010GUQlM2lStMCM8wKnMh1TxPPWq7B0GAEoiov6G3Fmapfl27Lmez7JS%2FXk1%2Byp%2BOsXpt2L6QXI47WjP6nPhah9f%2BDryxK8bMpF0gpTeMhjT2OsYgTQzu3K75PRDoCLS%2Bxyeeg%2Fs0TT%2FAOxFoEcwWfyxdIVo9Au798U7YPULEOA8OyJTYZ6xizr8FL50rTdI9WoG5e47VaOiGt%2F5iPL8ebNXR%2BVBfFgFEWxaL7WvJbMYkzU4eDVSB0lrtyIJNgx3yDLyNKBXlgmu3l30ZGXHDsyvt6a8%2BfOv0Kyc03yu2H1TVXiMVxtJqniorzmHnXxJLVllDGARU4B%2FSompfX2n3rHH1y2zqdkBIgzvhpl0mgWH5GFNGyXJBra%2B9tfmNYsUmeJTkRVoVTelYzoYokMmMVrh2Hf8CXvoyLQdyC98SA7I0YALOWnG7VqF2OA2hV4cZDlFM85PwExWEMJ2y9gs6v5mOFCHBox7kkZBxAiSrD9e7esUszylYptMsysYsoRB2w2meb7JiNCaq6TJu0%2BKkvGn78GZzSpmnaMGyz9SXeJciHBL3YYE5ANbh1gz79CNMka6sDg%2FR9EwjbCKwAY6pgHPw79ExBFBRcBdYrb3pcXlQPro5Sr1vLJQXWFeAA0LhzjjadFJ6ulOKIq%2BOVVyUYKkU50g937ldra0Zc6PSaWF%2FEu55BUmGoQwOrGKjUXEHd%2Fqj9PWV%2FL98i5WCcz3sdwbi9tucam752okqchEBIgD7%2F7Q4KkMwWGfT1769JKRk1crJh1qktcLCY53f8ozvKdLVo1gj8IzI3jDN499CCg3si83snYs&X-Amz-Signature=9f17e5352ef1d76878d1349e6b1d92754393aba16d2c31d81588dcea401625b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB34SPKT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEly3%2Fs9J8JdzBKmvFEX07%2B6lrRbWMScQlt2qucFgUtdAiEAoY7TjAQzEV8cP0u5UqxR7oUvf15cUr%2FWXeDZGsZKwqcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDH14dkVjds2C87FsuyrcAxAWuwXhJU4%2FY56W%2Fa99KLYgn1f0tT580FOiYabxKe83NxqYpbsxWk1lX4%2Fdq5PA5Ks74q0u0fhQ0EVFGx4HUNhO6X9EGZHefSLjfSCR6cHZk%2FPaO5ejWbCaIk%2B5WxjtJkdYiXGWXkkm07t1cG0CFeey3MCpG%2FF%2FO99IsumKjwdfpb0nbTeuKqmCN6sL%2BayelDtxuz9ExmPeJ6tnFIjJbWS5E2CRxynwRfZn0beAXvBX5vJyapT9Tl5%2BN5X4AtnknlVFUfe06aiuFDL3cuqZia2WNvV43HlKCKiqXR%2FnbqwgMDn3SYVMG7lpKEQnAxQoQ28D6iBxN9Dv8GvDFSFSgl5xfK%2FicMo%2F4n0vIvcf809pzVzQISqFBKoATXxWFh6%2BrWBJoYVBKn40gSbelUaDRxCARwb4eYAExAc1hNWiMu8NKo3Fh7asa9C7X1ti80vH64YYPJxzeyEN7cO%2BIwpBjoIAKrnnJUMvfIQ90ZratoSUjl9Q0bhFes5d1QSjvJLwNLrf1vbssuCIBXP2pIPyUron931jI%2Fk3Ks%2FcyNIilSCu3LQxC6XcvMCLTBuorQ4yV8uzWOOWOVf%2FiHsC3ZJL5QE6J4Pe0BP5z9HuxnCJEu82OwqSBQ0ABEyMTdLJMPavisAGOqUB1x88b1QmhPgYD8A7hQR5%2BxaTbssV%2BpSkwGz65hzN3Xo7bYMCl8JWJHzXBSHsBsh5WA4Bj1H4dffyLT4SOt5E0hG4G%2BnEyPdSWOMGVk2vygdIjv20WzW2o9%2BF%2B470ZJKZJ5jVDhtUZb58n9YWu64hMitw4SWlCL3uY3FitE15yHfrghkCPHz3SAUxHT%2BRzuNIKmZgZZ%2Bwbp5jxXpsxDDQoBt8lNj7&X-Amz-Signature=875932f860d0d275975b618dced11b14cd446b475d7458b11d7226348fcdd65f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSH4FFC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYWx3jT6Lsu8E7g7gHukvtaGH%2Fjj%2F%2F11BV31fJf4YTzAiEA1zcUcDm2DYxkyKMUjMx7QzfNq3BJp3sE%2FOQ5ryxEIlQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDzsuaimF8ApenjmbCrcA3cW4TvIOtBGKwOgRjhWHDeX7mRoBskUgS88jI%2BF3fDz5woeo9XU%2Brl6%2B12xeKQQWintdKojDR%2B%2FSGdQaDUeflyW5K785CRN7wVglIKx1qCUWhPopruK2vC24tOChSBbI17G6oOt%2FoJh09v%2Fjc2WTY7GcTj5GG7%2FR5Ao1LaCqfRUE7HhqjgsFcrY%2B5PdmxhZeM4WSwAWWy1GXbY6MYmOdEBEd4gM0PYfxb8pOVovpoSmVZeAK%2FMtgnJOLl6mZqoQs4eH49BkEDOVwezEX91ddmJDQguswmP%2FvhU3MF7QOu%2FPIQNkW87GRrHpI5tkwWtPoN%2Fk3yqcKi7s9sjXUu18g85BuMwuY5NwA75FcNI2Dw7l0rdaY7tSbmqOO%2Fna%2FZvlFeiGmoP5Jg4Na9D1j5SME4%2BTWbbbk2l%2FyGg6kNajyygkfGqgKNvJz5C%2FLlV%2BcyLKqAMEP1URb9tNr00AoGwUF0lr%2FpySodBlNqeRvJ8A46Ka2ShhXSXyvyeGw5WOQR79D9fvjkORk3CM4K9c2oYsNBQBeLqLQBmQ1%2BvgxVi8%2FxVTYoUWDYE9DA5NTlR%2F9Y87sxokwcegk8WWTpAh47%2F0D7oX8WKrCQzljnZDRnbL%2Fw7Od3gsKm9FtoaQMVHiMJ2xisAGOqUBjv1r3XiaiGN2dimJKRF7SAWFhy6SkUXpmXNtnqX67BnYY8iRmm95vdSYW%2FJ8VcprRnrcEr%2FJwcTa1%2FghasJZv0rXUMWckF98UxuIba%2BZDKabCJ2sOvsqCZAIqLAieamnQSKH67hbu06z4Ltjq0lUb7D%2FUJD2RlTvmNLswAgEbNRmhuGDUTq%2BW%2FBL%2BvPmuaQtrsnw49xJAWmJdJ0jQIOPtdyBQZUj&X-Amz-Signature=cadd9d7c7f4d1c1915325f2608773451a1ee10b7ea4cdbc9f538dba0ade2cf16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
