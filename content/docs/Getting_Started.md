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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3MLOND%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRMlCccwygV0lM%2FfGu%2BKvF2PuHjMgY1Uin5hyBIF8%2FzAiAEOI8%2BjnqDona8odZgBOr2%2BS%2B%2FZvFke0%2Fgo2Wp80EXUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMS1KBPdOxjg5NVK6eKtwD%2B63h94kVjzkc9Kt5FcV17LsiA4s00RdHCaBCBGwQ19C1w%2FssMQ9grV5O5tVm22bxbWY4Kv8YGadgOidba9XDtBVzHtWtvMPKeL4aaKSVMk3JCm88fOuhs3c8KqI6yKJcZne58y5kotHSfn6sKSpgzrXCYbR4pwf4FXKnOkFUH4fa6OTD1nDwZrG6k0THregGCfDhuBXa%2FPz03i41NftY5ICKSBq0VUxLADJJAssygxsk7jnsji%2BBKMURcEuE8QqHRU776Ao%2BhscgxvS2OKRPR755JKz4H7%2BG3d%2B7CVMbE8%2BQFZbuJQC%2FMAmZkHnfMxMWQQWdE%2BLQp6QluQ16Bw0ONSGwsOd4mOP99tpoYkQAMU5AkwkoZxfl%2B9mkfueteeaPDR3blLWTHs%2FTHK2RxDLms9LzWxu6Fdhs0xFSOlO27e%2FRL62rt72scV%2FNw3sYkoAl69H69BNHc9lexi6rEKz9C9ygaiR1CQFiTwzGw4fu1Z2y0FoY%2BWLHHoYL8t6mTsWb2RaZm%2BJuuZMq4LtSqq47Gs0PaU3bnEcGY58%2FnYj6%2BWoEJpFslWOm0gAaS5y7yiLrS7FjflmIHLQB1c5ZNjABzPHpeLM%2BZdPDxPD23V9eEH%2B9xRw1CRW%2FQSAUAjkwz%2BXywAY6pgFJVXAsMJUhMRTfKJyGlOV4UcWG%2Bm3DApb2KCDVYn0b2kQ5f2%2Fy95sAehol4OgAbOWmNksQZvDXACk4CG1snXNjTjNdcGomOySC%2BGYkL5hRZ597SD3uI9TNety2fw0i6y3GtcviXuZoxF9Nv2%2FFo63UtiOBfkgti6cLx4mIc50PKZ5wKDayk58qNllNkFBaq6LDzuVXPfzVzPayFQIridOJSAJFE7g5&X-Amz-Signature=aae6d8f467c07956ae7c5eb8003f3351cce860242470119cc0caee0c142ed5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3MLOND%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRMlCccwygV0lM%2FfGu%2BKvF2PuHjMgY1Uin5hyBIF8%2FzAiAEOI8%2BjnqDona8odZgBOr2%2BS%2B%2FZvFke0%2Fgo2Wp80EXUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMS1KBPdOxjg5NVK6eKtwD%2B63h94kVjzkc9Kt5FcV17LsiA4s00RdHCaBCBGwQ19C1w%2FssMQ9grV5O5tVm22bxbWY4Kv8YGadgOidba9XDtBVzHtWtvMPKeL4aaKSVMk3JCm88fOuhs3c8KqI6yKJcZne58y5kotHSfn6sKSpgzrXCYbR4pwf4FXKnOkFUH4fa6OTD1nDwZrG6k0THregGCfDhuBXa%2FPz03i41NftY5ICKSBq0VUxLADJJAssygxsk7jnsji%2BBKMURcEuE8QqHRU776Ao%2BhscgxvS2OKRPR755JKz4H7%2BG3d%2B7CVMbE8%2BQFZbuJQC%2FMAmZkHnfMxMWQQWdE%2BLQp6QluQ16Bw0ONSGwsOd4mOP99tpoYkQAMU5AkwkoZxfl%2B9mkfueteeaPDR3blLWTHs%2FTHK2RxDLms9LzWxu6Fdhs0xFSOlO27e%2FRL62rt72scV%2FNw3sYkoAl69H69BNHc9lexi6rEKz9C9ygaiR1CQFiTwzGw4fu1Z2y0FoY%2BWLHHoYL8t6mTsWb2RaZm%2BJuuZMq4LtSqq47Gs0PaU3bnEcGY58%2FnYj6%2BWoEJpFslWOm0gAaS5y7yiLrS7FjflmIHLQB1c5ZNjABzPHpeLM%2BZdPDxPD23V9eEH%2B9xRw1CRW%2FQSAUAjkwz%2BXywAY6pgFJVXAsMJUhMRTfKJyGlOV4UcWG%2Bm3DApb2KCDVYn0b2kQ5f2%2Fy95sAehol4OgAbOWmNksQZvDXACk4CG1snXNjTjNdcGomOySC%2BGYkL5hRZ597SD3uI9TNety2fw0i6y3GtcviXuZoxF9Nv2%2FFo63UtiOBfkgti6cLx4mIc50PKZ5wKDayk58qNllNkFBaq6LDzuVXPfzVzPayFQIridOJSAJFE7g5&X-Amz-Signature=fb71cfb8416602625e8fbf2df2e7d9542aa590e041a16861cc33ed1ed2b48b52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3MLOND%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRMlCccwygV0lM%2FfGu%2BKvF2PuHjMgY1Uin5hyBIF8%2FzAiAEOI8%2BjnqDona8odZgBOr2%2BS%2B%2FZvFke0%2Fgo2Wp80EXUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMS1KBPdOxjg5NVK6eKtwD%2B63h94kVjzkc9Kt5FcV17LsiA4s00RdHCaBCBGwQ19C1w%2FssMQ9grV5O5tVm22bxbWY4Kv8YGadgOidba9XDtBVzHtWtvMPKeL4aaKSVMk3JCm88fOuhs3c8KqI6yKJcZne58y5kotHSfn6sKSpgzrXCYbR4pwf4FXKnOkFUH4fa6OTD1nDwZrG6k0THregGCfDhuBXa%2FPz03i41NftY5ICKSBq0VUxLADJJAssygxsk7jnsji%2BBKMURcEuE8QqHRU776Ao%2BhscgxvS2OKRPR755JKz4H7%2BG3d%2B7CVMbE8%2BQFZbuJQC%2FMAmZkHnfMxMWQQWdE%2BLQp6QluQ16Bw0ONSGwsOd4mOP99tpoYkQAMU5AkwkoZxfl%2B9mkfueteeaPDR3blLWTHs%2FTHK2RxDLms9LzWxu6Fdhs0xFSOlO27e%2FRL62rt72scV%2FNw3sYkoAl69H69BNHc9lexi6rEKz9C9ygaiR1CQFiTwzGw4fu1Z2y0FoY%2BWLHHoYL8t6mTsWb2RaZm%2BJuuZMq4LtSqq47Gs0PaU3bnEcGY58%2FnYj6%2BWoEJpFslWOm0gAaS5y7yiLrS7FjflmIHLQB1c5ZNjABzPHpeLM%2BZdPDxPD23V9eEH%2B9xRw1CRW%2FQSAUAjkwz%2BXywAY6pgFJVXAsMJUhMRTfKJyGlOV4UcWG%2Bm3DApb2KCDVYn0b2kQ5f2%2Fy95sAehol4OgAbOWmNksQZvDXACk4CG1snXNjTjNdcGomOySC%2BGYkL5hRZ597SD3uI9TNety2fw0i6y3GtcviXuZoxF9Nv2%2FFo63UtiOBfkgti6cLx4mIc50PKZ5wKDayk58qNllNkFBaq6LDzuVXPfzVzPayFQIridOJSAJFE7g5&X-Amz-Signature=9b06ca29ce86441e7f7665c3b7a7bb05e4cd2e5a2b057532cdbb4c583f80c7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKI22K4P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeC9CnA3oO%2FnyMvS1hXJcCE0mRgm%2FPnU04el3tv%2BWz8AiBZOHyoDNEAbi3%2Fpmt6Xw2RKnVxEPq3TR1mCgmSjpMxLCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBAgJdFCPIkpjVmisKtwDcXHv8cSue8%2BrPpZ4inQtGw6m%2FnDg1pMVrzrSShikFN4YEkPxdaBEjTr6jLrExmVb%2FPjz6s52qlHBqfI8slOuA%2FFfnMm3ZBVxQfcn1DIz7hJedGe3afj2DE19F5AxaS9VN8mxeHNqs%2BV6FTijkpJhha7GElbWgbx%2BTCRdMoK9ZCNLvJ%2FOoGHOQvvjbhw5sbPiJo3%2FdAPTntH5FElJuXkxocdubLM061E10NpyLXiyVU4pafhI7Z79TWO7jErQ5NHTsBoIs9bZA7pXV%2B8WgNs8Pkrjg9aZ6qoVM%2B4VjT7fC6ErDMayc6J8%2Ben%2Be5IZNXm0ypOxkIR%2FikhzBGbDHTjKJgfVmX0N1PVkDd7vEj7ozNp0gpEYv9uhBecpt9PhSRGLLiDxnmofgZygwNuveIcxRTP%2Fl7djVq6AjIyXmHTaLLShvGd9p8i0RdPWDMlEFMx8Ws0yF2YmiQ%2FUFZ1Vo9gsz9DV1UWrrXMYgacLL2Y1ryf1L%2FW4%2BW6AlmKSNlfWcFOETQS7wk7G8%2FdygrWgkHJ28hkfyiSt%2FP9E9gbM0IoYF6xfWMVbVAXlrxmqoa5XmFv0akGU2i%2FElISJjdgovv%2BD4ITNRSyjRbThE91xZzzBLFDrSCVUBR%2Bnn%2FMDCrYwoeXywAY6pgHUUEFdCn6Cfb64qVdOk0xYdh%2BmGOonDwVoC7BRbz%2BNKfZqOri27pXwkthsk0LrjsMTiIsyOGxuhx239rudNB9%2FFqdt9yZm%2FbWTeXWnx4v5XbMJxFz2C%2FrGQ2M%2B92msKjKw81Ttj1vGyz7qgo4ghhVlcU8bYSX5vozg9OLBO2af%2BQFoCMEtrxj6P8FG9Q9jIDLM8yeJpCcFzeE9m9mWur8WPljaZ3Sk&X-Amz-Signature=d5caec8b88ee43c5e990dfae0a69abff8e9ae6ff12f0642975e68d1e9489805e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK3STXL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT5cvIthcFIP7m2xwegLTFlia4HF2bGN%2FyQHNNjTa7nAiBhuQ0JxTpYNIJrytDEfbp6Qr%2FysVXJYNyMuwyGeJN%2Fyyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMVIgAfoywa9N1dJNOKtwDeWRXLVbwzo%2Fum7w5%2FyykHNdUIwll7D4HMQ6zTKA1JvZ0jSjTaqociGi0u%2BRpKMOtmBlYCzveTGeoh9NDwuI4SEAXb%2FcPwM1jzJRfRHaQkWATCX1m527fEoz6wOV8H17Ji0pzZuAwwZWRsF5ndg9jMNfKOxBynajjBZL8OeLpZSZmXvNTkntt5bpMPwqxq7jvOEFj6nXf%2BIVMVUY4FguhVuXJHVzw8IYdyu7kiLh%2BeqDr8zmEEc4IyVd%2FhbIN7vkdiiR6QGhcPWG7VQWfq%2FrPCLJ8bMznj36rVKOJdVOsmIQOCHgND573NtesCkNJ93pj7RI3tvi4neO7oCfNqdB%2FNFcM%2BaHMR9LCncHC%2Fscg4TfLYPKgQwZcNL9%2B2%2B7q888JKp2ZKpJoF8ePuQV3J2K4MO%2FkOVnPP5OzLYzJ9BlSoKiGsY10lQqxggJT3JS1e6RSoXHRvAsGdCsY9Q5JU1eN7mNNuWEq0EbD04ykzE%2FRb7y%2BCcwhQ1qoOgoc023dYmGk0Z6PrLFmKoZDQM9LTjcUvrD76lZSyUYIIRy5HtNJRqG6%2FECfPVfIYjexeexnMCHGmnnJhAYyos6jJt3%2BM1DHE5oC16SZSU3Zlu7757AQ1uvnpuD5QGDB51sLt24w%2FOTywAY6pgGxKHVzWHFzvpBlvbitlUmwiVL91yu5sPYf88fp4ms1Yy6mGiCPnAiPBlyp2012xG4Vo2EOvIvCWoS2BMV0g2cdiyyDFO5uf5bQJS4RdO2VQXhIIxUeccu1t4tydiwbhdOdUcPsdqi7zdUtTXsZCdtL22jvEA56UoQiNfzsFj%2FYAmuylIR%2BOy%2BNgbUOnsbdPw0IF3BK9f%2BS9mhq5hn2sMdu1U4K6smH&X-Amz-Signature=f3894c13aa9ba5d24b57cfc7c206648fd8187eaa6e6e514fc959fc4a57841bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3MLOND%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRMlCccwygV0lM%2FfGu%2BKvF2PuHjMgY1Uin5hyBIF8%2FzAiAEOI8%2BjnqDona8odZgBOr2%2BS%2B%2FZvFke0%2Fgo2Wp80EXUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMS1KBPdOxjg5NVK6eKtwD%2B63h94kVjzkc9Kt5FcV17LsiA4s00RdHCaBCBGwQ19C1w%2FssMQ9grV5O5tVm22bxbWY4Kv8YGadgOidba9XDtBVzHtWtvMPKeL4aaKSVMk3JCm88fOuhs3c8KqI6yKJcZne58y5kotHSfn6sKSpgzrXCYbR4pwf4FXKnOkFUH4fa6OTD1nDwZrG6k0THregGCfDhuBXa%2FPz03i41NftY5ICKSBq0VUxLADJJAssygxsk7jnsji%2BBKMURcEuE8QqHRU776Ao%2BhscgxvS2OKRPR755JKz4H7%2BG3d%2B7CVMbE8%2BQFZbuJQC%2FMAmZkHnfMxMWQQWdE%2BLQp6QluQ16Bw0ONSGwsOd4mOP99tpoYkQAMU5AkwkoZxfl%2B9mkfueteeaPDR3blLWTHs%2FTHK2RxDLms9LzWxu6Fdhs0xFSOlO27e%2FRL62rt72scV%2FNw3sYkoAl69H69BNHc9lexi6rEKz9C9ygaiR1CQFiTwzGw4fu1Z2y0FoY%2BWLHHoYL8t6mTsWb2RaZm%2BJuuZMq4LtSqq47Gs0PaU3bnEcGY58%2FnYj6%2BWoEJpFslWOm0gAaS5y7yiLrS7FjflmIHLQB1c5ZNjABzPHpeLM%2BZdPDxPD23V9eEH%2B9xRw1CRW%2FQSAUAjkwz%2BXywAY6pgFJVXAsMJUhMRTfKJyGlOV4UcWG%2Bm3DApb2KCDVYn0b2kQ5f2%2Fy95sAehol4OgAbOWmNksQZvDXACk4CG1snXNjTjNdcGomOySC%2BGYkL5hRZ597SD3uI9TNety2fw0i6y3GtcviXuZoxF9Nv2%2FFo63UtiOBfkgti6cLx4mIc50PKZ5wKDayk58qNllNkFBaq6LDzuVXPfzVzPayFQIridOJSAJFE7g5&X-Amz-Signature=9304d94ab8d14dddf02b8555d58f7667db42fcb63529f768843a1c1b330604dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
