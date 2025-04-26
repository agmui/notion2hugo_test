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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6PBGIT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPhon99qLfpS7tz%2FNXxMvjMXjKivtmisCRqSGBNqeIeQIhAMCW9MTBcmTp%2Fl8ute6ep6Rp56wRi0RLXGtvSegdluh8Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz%2FRO0IHMPeRVQqxY8q3AP3izt9VZb%2FellPV69N4GdmJUpeZ%2Ff37HsOmjPPqHw25dO9d%2B0837KzjJ1C%2BprCZz%2Bhpa5SJzR%2BP8YqaieGpdTrmaOOFjWmon1B7nmCxRfAtl6TNJGRorqtZhnTQh8GgXGEoX05AmgvDIJaiLypE1Ic5OX%2Bo529zvggfMWclJU%2BVZS%2FXBCsD8VLZlVoFjw11ondjcN%2BBAAn0qkAcPuEqvLStJeJ5aUI7LjobOlDcR%2BPT%2F9RV1ht8pCNiOaJnhNlfJuUk6CgufiDV%2BAVF%2B8PLjfSw4PvwsV0xTH%2BhiqE1ovQ8TD5CI91xo7d1ugdCvNrp6kZ3KVA4l1J%2BXab2DfrYprZuc5cLPtV%2F0Ctt0rIikwGYW1l6bviEjN6Ba7WFPJ4M0%2BjBzNnjcyuhyZoGq48SI5MjfjKGnxXaXrDXDu5to4gjJWtKRbgPdoAY8SQx7nnupxX6DY58M6GGiiXa7pt%2FG0dSEJRrKRYSmPdOstuUyBY3xnYypg1UfjHRP7y4XhWys04Jx%2FlYpW1wTyyTaQFILMgqyskR9PZK%2ByOIyO%2BJpT0rE7WXFnmI0uw1ZjmUgJS3znqigXygzcEMazfFrXBIxrDqI8yfnxYSpXxgtJlbfqYNttLT1uUdft3k8815zDp3bTABjqkAdhBn76R0e3uVAp6btFaA5IztLMU6YnrLuiUxfCFjGu0GttYD48s5wIdwQ7L0UpupjlabpSID8aaUfD%2BFugaUo%2FnkUKX0EfmcjIBrtktV%2FlG3XtAyEpHzSGFCus%2FEJA%2BELArsNZylPT4F%2BKzYN3dchtHsTfgu3DlYxQnRtdoC5vTvvefAkmIM7wu6tpFlccVr4%2B5lCRgERCW%2Fve3F6F6L%2BllEhJy&X-Amz-Signature=c453fdfd1c36848dc68bd4b458524c0aa75581ddb025ed5a29c190ecdba11ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6PBGIT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPhon99qLfpS7tz%2FNXxMvjMXjKivtmisCRqSGBNqeIeQIhAMCW9MTBcmTp%2Fl8ute6ep6Rp56wRi0RLXGtvSegdluh8Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz%2FRO0IHMPeRVQqxY8q3AP3izt9VZb%2FellPV69N4GdmJUpeZ%2Ff37HsOmjPPqHw25dO9d%2B0837KzjJ1C%2BprCZz%2Bhpa5SJzR%2BP8YqaieGpdTrmaOOFjWmon1B7nmCxRfAtl6TNJGRorqtZhnTQh8GgXGEoX05AmgvDIJaiLypE1Ic5OX%2Bo529zvggfMWclJU%2BVZS%2FXBCsD8VLZlVoFjw11ondjcN%2BBAAn0qkAcPuEqvLStJeJ5aUI7LjobOlDcR%2BPT%2F9RV1ht8pCNiOaJnhNlfJuUk6CgufiDV%2BAVF%2B8PLjfSw4PvwsV0xTH%2BhiqE1ovQ8TD5CI91xo7d1ugdCvNrp6kZ3KVA4l1J%2BXab2DfrYprZuc5cLPtV%2F0Ctt0rIikwGYW1l6bviEjN6Ba7WFPJ4M0%2BjBzNnjcyuhyZoGq48SI5MjfjKGnxXaXrDXDu5to4gjJWtKRbgPdoAY8SQx7nnupxX6DY58M6GGiiXa7pt%2FG0dSEJRrKRYSmPdOstuUyBY3xnYypg1UfjHRP7y4XhWys04Jx%2FlYpW1wTyyTaQFILMgqyskR9PZK%2ByOIyO%2BJpT0rE7WXFnmI0uw1ZjmUgJS3znqigXygzcEMazfFrXBIxrDqI8yfnxYSpXxgtJlbfqYNttLT1uUdft3k8815zDp3bTABjqkAdhBn76R0e3uVAp6btFaA5IztLMU6YnrLuiUxfCFjGu0GttYD48s5wIdwQ7L0UpupjlabpSID8aaUfD%2BFugaUo%2FnkUKX0EfmcjIBrtktV%2FlG3XtAyEpHzSGFCus%2FEJA%2BELArsNZylPT4F%2BKzYN3dchtHsTfgu3DlYxQnRtdoC5vTvvefAkmIM7wu6tpFlccVr4%2B5lCRgERCW%2Fve3F6F6L%2BllEhJy&X-Amz-Signature=ac9dff3a0be0d71d215013b599da5aad2c5312f9e3592ade3ff795ee80d60140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LPGQH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQJswtQE1HJKfJ4L4gmhUETHsrJwYX2VqxHFnryuwBAiBfEKzL%2F6NfPwR%2B3NgOmy2nQbJloTtZoqJ1k%2B2gHNjvtCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMBEvyb4Q6eVrRs%2BnpKtwDPb2%2BduaWoUkKhgaKIPXHUPmSpNqd9jGxEBzIBbIAScoNRVveM5S%2FQU%2BVhMpiga%2BX5vdcWOzzkX57OBSav4O58qoj4u2XHOjuVevr5qGg1MbjSPPmoCLBJWH5ra5D%2BbGtY6%2FQe0K0MhYwwFKiQsKYiXe%2Fj7nNYg6KijSckWnxXvujMSNuUwwSeTeORl8sBk3OGhPN58CD7%2BH18OPuAslYdWni25fSdIKX0o9LOjBo36mMRPFAL%2FE%2FL18EUT%2B6VyfeMBnWATjai%2BTKmRqKL2V7VgqGt6sp1pxpnrZrVtvBuVLqO4KEcXqitXQoTsXQum5w2LxZ7sh1h2HR980aw5S2RfND%2BPpFuA4Iz4R%2BWrRdhR%2FPI1melA0NjtmvtBuCJExYsvOByF6sNtZ8CTN801Plz3xjDWIqqDi00lqNpvvqO2OckZT%2Fg7QvXpFAcv79Keg1Y4He2gGCyCutSC7AQVTIC3RlnaL%2ByIuAADgRNAFaOq10VBFh%2FleMx%2B5IHwP23bLa2qbMD0X9ou1pyCzDhKOiBim0Jp54OBdKS3WSc0LLe4CAz8%2B2CLWUQP%2Fit0pPxsqJn%2F2b15IANGJYqEztRdlMleuY1H9iDorzuVNEZlsJ4XnSnhMDoAq33G%2B170AwnN20wAY6pgGPFAe1TLDiktACaPNPquGGjJ2twT7SpdswSeSy78jDRzhrLiCpv1Ba%2FClraaGoyVAhhRgoSWOdcsfxNQBLpcRKdKSPgYKgpzUwfuxtcWg6CTB9z%2F9%2F88MZ1%2BTENIx3n5qV2B5VGrMYEC48BgPCKS71q6W2CIgXfntuJt6jsLZYkHGpmhwyIn2O9eUP6jwmTkasedVXlONMBHXf4%2FX3SNZmqwfioGBG&X-Amz-Signature=8f9addd04f5f42c33a34b89293cf45c074e7e26604b9c65ee3bcbb3bf3ee4889&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PX2HW6L%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3akOaDbUonEM7CtrkOVpxWpwYP14btZFki6N62LWPPwIgS0m1hvr3gV95yqsKj1MvjnVtpkVNYp1pt5snDRZkMX8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDF1mAjKRONvpTaZlxircA0wYbYtSOvn%2FsXID8aMaziShSIvRzVSPP66IBTSHVKPmDw%2Bt9qbUSNJyJcRu4s7AJImxcVU14yAwsIoO8%2FtWdUSz16yctqyJSgiF04bpONmpnaDfK2OsxPjwdZ88vYf7gE2ezOJA%2FLwpendq0WR0xulxt53ak%2BVdTVlVRfKugFTXELcU7w5AHPnBoUApMj1nfSdPiWT3jlmtl9W83pOIFQP3czMfHyXrfzNgFPOA4hXlnqAu%2BBAdG3wuBwIb3%2FkZwkpplCktcamvA9%2F8WFXQZL9Trk7y2hGXyIjCzwMuIpDQq8uQDEj2t%2Bm70%2FC7cQMc2SbBXIthwNCG%2F6yL%2FhRl2%2BHo7y9xhPX6bHv78SAhf92BbpYXwDBt4dfZkK7PYmz%2FGQS2A6UkKl02RWl6WsLt8vPEoM80gIZIHrHcdfNMPOias1ECzVMivRZAKzVDyJWjJYZIQ%2Fs1QBEERYX1TiBnCJ1QXYtML3YzJUlHYKHU2krDN31KSA5YSE8UFoJb7zbI8WnIO%2FjVbpUGmUnHYMpRCoeuMLmUGS%2FNuatQenL1zgdcxiCulfIG1E%2FIWN6bPXKqhb%2Fvcwk%2FeFnCGKDX05ASzFk5dO23EVwus%2BsZ7LhCjz27PGMDNncfgkzN7HnaMMndtMAGOqUBL9FCx%2B3fw9TtfmVBtkLlTnAY2rmW8TKxJBz5s2PsE1oUM9NQJyWz3a0eZq5vyS1bRLK0d7XuKfR32LAmL%2FTllOnLCGGUcBlqfaGuPstKKWMWVme6Lddilu7r3MHkR6M5O1ChAaOs54GxT%2FMVpqCgKwu7CF1NYB84t9qlLljmBgJPXe%2FF%2FrE6aWayuxrA0JAoK3TgB%2BP8LiJVgdcws%2FGDXkPY7jb%2F&X-Amz-Signature=fd172288728aede563a5d69c5906c5880b4b8ce9e688484ac6417c5f7a5489cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6PBGIT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPhon99qLfpS7tz%2FNXxMvjMXjKivtmisCRqSGBNqeIeQIhAMCW9MTBcmTp%2Fl8ute6ep6Rp56wRi0RLXGtvSegdluh8Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz%2FRO0IHMPeRVQqxY8q3AP3izt9VZb%2FellPV69N4GdmJUpeZ%2Ff37HsOmjPPqHw25dO9d%2B0837KzjJ1C%2BprCZz%2Bhpa5SJzR%2BP8YqaieGpdTrmaOOFjWmon1B7nmCxRfAtl6TNJGRorqtZhnTQh8GgXGEoX05AmgvDIJaiLypE1Ic5OX%2Bo529zvggfMWclJU%2BVZS%2FXBCsD8VLZlVoFjw11ondjcN%2BBAAn0qkAcPuEqvLStJeJ5aUI7LjobOlDcR%2BPT%2F9RV1ht8pCNiOaJnhNlfJuUk6CgufiDV%2BAVF%2B8PLjfSw4PvwsV0xTH%2BhiqE1ovQ8TD5CI91xo7d1ugdCvNrp6kZ3KVA4l1J%2BXab2DfrYprZuc5cLPtV%2F0Ctt0rIikwGYW1l6bviEjN6Ba7WFPJ4M0%2BjBzNnjcyuhyZoGq48SI5MjfjKGnxXaXrDXDu5to4gjJWtKRbgPdoAY8SQx7nnupxX6DY58M6GGiiXa7pt%2FG0dSEJRrKRYSmPdOstuUyBY3xnYypg1UfjHRP7y4XhWys04Jx%2FlYpW1wTyyTaQFILMgqyskR9PZK%2ByOIyO%2BJpT0rE7WXFnmI0uw1ZjmUgJS3znqigXygzcEMazfFrXBIxrDqI8yfnxYSpXxgtJlbfqYNttLT1uUdft3k8815zDp3bTABjqkAdhBn76R0e3uVAp6btFaA5IztLMU6YnrLuiUxfCFjGu0GttYD48s5wIdwQ7L0UpupjlabpSID8aaUfD%2BFugaUo%2FnkUKX0EfmcjIBrtktV%2FlG3XtAyEpHzSGFCus%2FEJA%2BELArsNZylPT4F%2BKzYN3dchtHsTfgu3DlYxQnRtdoC5vTvvefAkmIM7wu6tpFlccVr4%2B5lCRgERCW%2Fve3F6F6L%2BllEhJy&X-Amz-Signature=055d965ee2a08458df4c758a64c758e1e4334d061488ec250c67e7e8d27a3b57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
