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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WZQSRK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDdfGBIfx6kwW%2Fi%2Bz2kQRygNRvSO7FWx9Z2F5ZUI%2Bs3OAiBluResOiUCprxJZUYtUXLiPtZ0XXT4V%2FBHRw6tx67HxSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rtF9Ll7rW7ggAp7KtwDNmSoE%2B31ScgOlmMtUICfi7wxxmFwqJq9stNVkqObuSnYRcyw4FxUEo7ZnLLbEGYdMOGtR%2FTzSdh67sx4xu9FrGVpb4QZ%2F%2F1zDdZ733%2Fo4L1Q5Ungb5kZvT5xYVDztCryzRA7uWPUe1xz%2BBEMh6SRVjDYn%2Bu39bhxgZCYB9e%2BdzgaRUNfsiwQtsf3%2B8XS7Jb2zt0PJNuHpfi0S3xvpsEbtPJN5WGNpFGvUjgvmANcIoLdr5UXnVlheyRWjZTf1Ab1BGZWq1ZlJYf1nH5%2Ff2DxpNUG7NO8zekLSBepm2jIUCwRTxQ09oiZwDUsC3vwaoLVHHP2JX9HGdcmk0AwUQgfWc%2BZvL5YrbXRAR4yE%2BlUUTPV98hBnPrcyV9aG3sAUd%2FIxEZ2TMAVXutvR%2BOKvG3Pyxn1RayZEQhFp0oPcptHhz5ZxOAk96%2FjUVM7X8hB2prL31AoF2D9K5DKI3AMTwevrBOwSaz2OLMrPppZAShww9mbDxClrIu056%2FYgCEFIrxOKbCjVrKu103stmNTiT1m8vg%2BJnnxknTtvtoTQV1vVLnG%2BO4V5iWixdr4mSpeXhBerLVMlXI%2BY9t4pyCVNMuq0Fejc3UeJsqHRIIuR1v9goHmFZ2R8GYclhspHZ4wtJnjvwY6pgHHed1k%2FNqV98Mik3PUBD8szYfhJVk0AoTR5%2BsUHmNRf58gxgUF8a1Qrvya%2BtfCS4VdzsdCjmPXtBcOQwk8JefRui8cI2wmG9%2Fn7qTw1v7%2F86dKqEYYahc3i79fQtJM4rgLTUvon%2B4Ojcddr0k0ezUrcog4W2BENcnp1LrfAqRdkQ%2FN8ASjmdhJ9RzPMHFGNcRCpVIQMM7FzJ6QaINrua%2ByLNb6QvCn&X-Amz-Signature=3ea41db7fc3f87c927bc3278fdcfbb075d0c4b4705e2327adb25bec78ff6e983&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WZQSRK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDdfGBIfx6kwW%2Fi%2Bz2kQRygNRvSO7FWx9Z2F5ZUI%2Bs3OAiBluResOiUCprxJZUYtUXLiPtZ0XXT4V%2FBHRw6tx67HxSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rtF9Ll7rW7ggAp7KtwDNmSoE%2B31ScgOlmMtUICfi7wxxmFwqJq9stNVkqObuSnYRcyw4FxUEo7ZnLLbEGYdMOGtR%2FTzSdh67sx4xu9FrGVpb4QZ%2F%2F1zDdZ733%2Fo4L1Q5Ungb5kZvT5xYVDztCryzRA7uWPUe1xz%2BBEMh6SRVjDYn%2Bu39bhxgZCYB9e%2BdzgaRUNfsiwQtsf3%2B8XS7Jb2zt0PJNuHpfi0S3xvpsEbtPJN5WGNpFGvUjgvmANcIoLdr5UXnVlheyRWjZTf1Ab1BGZWq1ZlJYf1nH5%2Ff2DxpNUG7NO8zekLSBepm2jIUCwRTxQ09oiZwDUsC3vwaoLVHHP2JX9HGdcmk0AwUQgfWc%2BZvL5YrbXRAR4yE%2BlUUTPV98hBnPrcyV9aG3sAUd%2FIxEZ2TMAVXutvR%2BOKvG3Pyxn1RayZEQhFp0oPcptHhz5ZxOAk96%2FjUVM7X8hB2prL31AoF2D9K5DKI3AMTwevrBOwSaz2OLMrPppZAShww9mbDxClrIu056%2FYgCEFIrxOKbCjVrKu103stmNTiT1m8vg%2BJnnxknTtvtoTQV1vVLnG%2BO4V5iWixdr4mSpeXhBerLVMlXI%2BY9t4pyCVNMuq0Fejc3UeJsqHRIIuR1v9goHmFZ2R8GYclhspHZ4wtJnjvwY6pgHHed1k%2FNqV98Mik3PUBD8szYfhJVk0AoTR5%2BsUHmNRf58gxgUF8a1Qrvya%2BtfCS4VdzsdCjmPXtBcOQwk8JefRui8cI2wmG9%2Fn7qTw1v7%2F86dKqEYYahc3i79fQtJM4rgLTUvon%2B4Ojcddr0k0ezUrcog4W2BENcnp1LrfAqRdkQ%2FN8ASjmdhJ9RzPMHFGNcRCpVIQMM7FzJ6QaINrua%2ByLNb6QvCn&X-Amz-Signature=491dc20f9e0ea063c7f75fced192ca6d838755cfca2fc35bec3f004314f92329&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724OMV5A%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFupm0LX1wRFauVx0z92g8I2ZOSjrwKdkyI9IHwGeQh8AiBoEz5yaon1C%2B0uFwnTu8S1sRackVxbYfRZn2lPPZvZuiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD%2FeN66097r9Mv%2BtKtwDiahVcvmrZrGhCPSaavPzlbe4EuQ%2FhA7EBwIF7u5bIbWPz4Ip6kxyE0K7bjWnb0Y5q5qunMvGYlRyMzBe1VAazwIfM2wI3zFMhJXWtDU%2FWt%2B6tl1QkahIbKATOVmy%2BQhM5FQjc6FLx12GHlqE3VMOFkZupU4TsjoFtTLxsPnJGS%2Fn8dMazmkyWiT%2FLFdj2bW%2FzljCqQ3QxYfvmaB4%2FISeyK9wefaV7YffoR3pFoD2djGyDcfGC5CIv%2F5oCwZfq4l%2FMcwzZejReBG9acltnHsATEiKuCoTeeOCZM566qcrErhKTkU5O4SPMRMin2I0s%2FW%2B%2FPT0TqHKQKQYlwxrU%2FxfJyT7vTAyFaTtgwuW%2FXdIlPQDrYXRN0Hcjhc90VzpGa6lj56wbiVxjxBp3mUO7WCv4l3osK9q8289vReSQ4k%2FtP2Fy%2FulZRrDlemX5Tc8AupcudSpN74XnYVdXNESIbvfpqotGZh1dh2HAR1YruACldA3hB%2FTvz8OWEumMj%2FVHzDj6RGziAaqcIA8q5WCePwcTc7bpOPObu2a6qj9kO%2F%2Ftp8YHrFo4o48CVRiq%2Bpwy3CsiiBgFWZ3wJDr3eAEng20Uu5YIzFYnlyxkS%2FXFfbWh1woEJP4TDO%2BXyhQueowlZjjvwY6pgFqjsLsB2H7K%2FN8UbGAXjgucObPZyRt3uD%2BmJtZn9Qhv5TJCHzx1jaSt6egtBPZL44oAg3Rno5zIDEH3etG3EfGSgNFZhRXOkFk4QWPjUJGYsAc%2B7KGwQ2DlmIvdzQ5hWWJJQjLAlXifdNig%2FdDAyIyWFlZf2V04r%2BPU8XFTurwCxpcOh%2FS0sLquskjejLbbYEGPxI9rx35oAOOAmjfAcSIauN3VWv5&X-Amz-Signature=5c5278451ca95c3872b7275efcbfaf0f0a9f78e4bc4485c21804d80ff91b0dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3FES6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDPAoVffTVVA9gCmn3VpWQBUpI0hij1s0YATI3MOH325gIgDFKMZbO5gfPv3oDJcie92a3B3WUE9XAZ%2F6JXaSZMXHAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFlEpIwJ0QI2kNPnyrcA%2BKWjWo%2BD8llFSuNSSUi6lgvrRCYbEwz0eqj%2Fh54%2B2ljdqhtGwl3wJyv3Z2h9RHKG3Sg1HXFzse7Cy992dcWxGDhSBc8sjyuIWTaqC%2FAnmd77zOOlLUsHOE4m5I2%2FN9x7G%2Bzujg0EQvIOfCjAALb0p6sfNUWcSTZ7rn8o5XQ5p82EAtU%2BHuIAOZjKn%2BYm%2FkxGexqAvrzFiEfYRT2OkV9fbK9r4GAAvKUb0ncw1oXvEIRRueIlziim4bUfJhHq2Usgpsc96hEmXlDF6MR4e6njIrTycZAzEo40JwDY8oYOEcrhxdHWlaNss3es861jMMobDXk1H5jYyFCCsBmM%2FElZrLb%2FO47X2vyxURbQ09KpZ%2FLBJwlSxQOBse2%2Fr%2Bveiu%2BO%2FBw3syu1IWtkJl5TkAiw01X6X1FBYB%2FWFcNifrpii%2FJh0RMj9SpUeghE7wjiWrUdFIaDDG7WvLNL%2FcpEeouIPtuzWYtj5FXF3lSwuWwJ0nNTDYGSMYLH3JClbxyxgXELw3Xy%2Fg7YX%2F0VK%2BBokXuar%2F4YCLmBEWe0YTk6Y7myrDksmdpTxXw37sIBDr%2FsgaBVjor7jAjKtDZjrvRS87hGvSTvK6GpYoqzQSoYlEyoVGcA%2Bqabs5Rive%2BCtHlMOiY478GOqUBV75RksJr7cyRLtXrsdtWVfk%2FRuv%2F%2F6PDZvluzqUIsC1SwejIbhYJ0w%2Bsll1M%2BsG%2FSbysr2GPCp9z3u9WdzGIYPBicOh4gaxN%2FvB4wnGwvvXyaVf09XNTu4YyAmsP7fAYZLWHnrqqkooPTaKXfuPkgw%2FpJxD7SzyCWCuxhif1RWAb2gNKTAFS21a0rhluq%2BPsuaxccHupTtUW6iN1eoGOt2KHF03O&X-Amz-Signature=262299c40a4721f0aaea3c5011227fa7909b7082299465684582a73db196239f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WZQSRK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDdfGBIfx6kwW%2Fi%2Bz2kQRygNRvSO7FWx9Z2F5ZUI%2Bs3OAiBluResOiUCprxJZUYtUXLiPtZ0XXT4V%2FBHRw6tx67HxSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rtF9Ll7rW7ggAp7KtwDNmSoE%2B31ScgOlmMtUICfi7wxxmFwqJq9stNVkqObuSnYRcyw4FxUEo7ZnLLbEGYdMOGtR%2FTzSdh67sx4xu9FrGVpb4QZ%2F%2F1zDdZ733%2Fo4L1Q5Ungb5kZvT5xYVDztCryzRA7uWPUe1xz%2BBEMh6SRVjDYn%2Bu39bhxgZCYB9e%2BdzgaRUNfsiwQtsf3%2B8XS7Jb2zt0PJNuHpfi0S3xvpsEbtPJN5WGNpFGvUjgvmANcIoLdr5UXnVlheyRWjZTf1Ab1BGZWq1ZlJYf1nH5%2Ff2DxpNUG7NO8zekLSBepm2jIUCwRTxQ09oiZwDUsC3vwaoLVHHP2JX9HGdcmk0AwUQgfWc%2BZvL5YrbXRAR4yE%2BlUUTPV98hBnPrcyV9aG3sAUd%2FIxEZ2TMAVXutvR%2BOKvG3Pyxn1RayZEQhFp0oPcptHhz5ZxOAk96%2FjUVM7X8hB2prL31AoF2D9K5DKI3AMTwevrBOwSaz2OLMrPppZAShww9mbDxClrIu056%2FYgCEFIrxOKbCjVrKu103stmNTiT1m8vg%2BJnnxknTtvtoTQV1vVLnG%2BO4V5iWixdr4mSpeXhBerLVMlXI%2BY9t4pyCVNMuq0Fejc3UeJsqHRIIuR1v9goHmFZ2R8GYclhspHZ4wtJnjvwY6pgHHed1k%2FNqV98Mik3PUBD8szYfhJVk0AoTR5%2BsUHmNRf58gxgUF8a1Qrvya%2BtfCS4VdzsdCjmPXtBcOQwk8JefRui8cI2wmG9%2Fn7qTw1v7%2F86dKqEYYahc3i79fQtJM4rgLTUvon%2B4Ojcddr0k0ezUrcog4W2BENcnp1LrfAqRdkQ%2FN8ASjmdhJ9RzPMHFGNcRCpVIQMM7FzJ6QaINrua%2ByLNb6QvCn&X-Amz-Signature=b99cf17710861950799caf30c701b47a613984861b532bda8d87f1953f14433f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
