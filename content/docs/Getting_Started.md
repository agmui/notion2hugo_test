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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPVIPFR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCi44GQ68J9%2FH5b5SrNBT%2BLJv3Mtco1WgQecx8b%2F3lZOAIhAN6%2Bn%2BoGabkyT%2B0qTRQ0jx%2B8TBRciqvocY%2FjfA54s7rcKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwoerntip4HRw4HXxMq3AMUYO67Y%2B4yd8RH6%2Bina3QyxgUw7JDaXZXfJ6NxXN5hr%2FsFgd0j%2Bb8aCYeEBH8y24chnl7CIjo%2FvYTFJr1HBzt%2BrKS0JrA4m%2BshzWmZ9ILa7k38HCOi9eJgjqrRgaJAeRneW3xDLpnXAENxVq2yQJ8vJsyZRago%2B1ilHA66%2FAiEIQBfq9Or3vBqSBrZYchCWff4f54f0%2B4yHqSQUcRYihxAsa17BlqV86ZzPyYFG7o52026EYQtkHNVQW%2Fnyx3F2dUF%2BcXk9LZMCA1dsZDT0b8eDR%2F1t8yWTR5JfjEvAhiwDOuozhGwLkgsA3%2BUz0uZV09FNIVNtpGv3q32g374p32eNnglFQv1vg4Rh%2F8hcrCPNnJN4%2FjP6hWVZaxsdBP938uJ65PpRjtM%2B5OiqGf%2FVx2vhZf8Y6K0YpXd0psjVpRM%2Fs7Bwbmsv7%2FWzssFzErk3f%2FtcEEQbraCMsRrDNEL1NznxZLn0dui56BE%2BP1HSEYy3%2BFwzgScTSQPTZnSVkL8OzU0IoUPP1Q9bDKZ%2BYZlP6nwYWUM0VT9OODKt%2FN76deaO6X0sWraae4FIRDGGSFIxoC1cAB0s3Qsz%2BTmq7yHDYRPnNpSXeI84WOHzcu2ZfFA3FLagKMJ36BgH2NuNzCExbzBBjqkAcJfUEw4rJGsNjlERiICr7Etx%2FoUa%2Fmz0x2%2FXkOY%2FC9lXL%2F5%2FW0XgfiooPh%2BxA4bZqOlYn8zdNjvSUUpa%2BtVQrmwLSW8%2F88CJgJoa1Z54d41E7O6oi%2Fe52BQB2acmFlp0ku%2Bre3%2BjExs%2BSlog49B1eHdiJg02Cll7u7RSbPGAYQQ0NCABUbbhaxNJ7uU%2By0y6yRb53C28jmbt%2B8MUJEJgEoFtlgn&X-Amz-Signature=13f22897a6f50bf90354ad23dd053b82c339eca367d0f35c3bbe976e93deb785&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPVIPFR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCi44GQ68J9%2FH5b5SrNBT%2BLJv3Mtco1WgQecx8b%2F3lZOAIhAN6%2Bn%2BoGabkyT%2B0qTRQ0jx%2B8TBRciqvocY%2FjfA54s7rcKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwoerntip4HRw4HXxMq3AMUYO67Y%2B4yd8RH6%2Bina3QyxgUw7JDaXZXfJ6NxXN5hr%2FsFgd0j%2Bb8aCYeEBH8y24chnl7CIjo%2FvYTFJr1HBzt%2BrKS0JrA4m%2BshzWmZ9ILa7k38HCOi9eJgjqrRgaJAeRneW3xDLpnXAENxVq2yQJ8vJsyZRago%2B1ilHA66%2FAiEIQBfq9Or3vBqSBrZYchCWff4f54f0%2B4yHqSQUcRYihxAsa17BlqV86ZzPyYFG7o52026EYQtkHNVQW%2Fnyx3F2dUF%2BcXk9LZMCA1dsZDT0b8eDR%2F1t8yWTR5JfjEvAhiwDOuozhGwLkgsA3%2BUz0uZV09FNIVNtpGv3q32g374p32eNnglFQv1vg4Rh%2F8hcrCPNnJN4%2FjP6hWVZaxsdBP938uJ65PpRjtM%2B5OiqGf%2FVx2vhZf8Y6K0YpXd0psjVpRM%2Fs7Bwbmsv7%2FWzssFzErk3f%2FtcEEQbraCMsRrDNEL1NznxZLn0dui56BE%2BP1HSEYy3%2BFwzgScTSQPTZnSVkL8OzU0IoUPP1Q9bDKZ%2BYZlP6nwYWUM0VT9OODKt%2FN76deaO6X0sWraae4FIRDGGSFIxoC1cAB0s3Qsz%2BTmq7yHDYRPnNpSXeI84WOHzcu2ZfFA3FLagKMJ36BgH2NuNzCExbzBBjqkAcJfUEw4rJGsNjlERiICr7Etx%2FoUa%2Fmz0x2%2FXkOY%2FC9lXL%2F5%2FW0XgfiooPh%2BxA4bZqOlYn8zdNjvSUUpa%2BtVQrmwLSW8%2F88CJgJoa1Z54d41E7O6oi%2Fe52BQB2acmFlp0ku%2Bre3%2BjExs%2BSlog49B1eHdiJg02Cll7u7RSbPGAYQQ0NCABUbbhaxNJ7uU%2By0y6yRb53C28jmbt%2B8MUJEJgEoFtlgn&X-Amz-Signature=a218e51becaf915a91810df792719251676591ef8bcc2abc2c8f12bdeae4612d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPVIPFR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCi44GQ68J9%2FH5b5SrNBT%2BLJv3Mtco1WgQecx8b%2F3lZOAIhAN6%2Bn%2BoGabkyT%2B0qTRQ0jx%2B8TBRciqvocY%2FjfA54s7rcKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwoerntip4HRw4HXxMq3AMUYO67Y%2B4yd8RH6%2Bina3QyxgUw7JDaXZXfJ6NxXN5hr%2FsFgd0j%2Bb8aCYeEBH8y24chnl7CIjo%2FvYTFJr1HBzt%2BrKS0JrA4m%2BshzWmZ9ILa7k38HCOi9eJgjqrRgaJAeRneW3xDLpnXAENxVq2yQJ8vJsyZRago%2B1ilHA66%2FAiEIQBfq9Or3vBqSBrZYchCWff4f54f0%2B4yHqSQUcRYihxAsa17BlqV86ZzPyYFG7o52026EYQtkHNVQW%2Fnyx3F2dUF%2BcXk9LZMCA1dsZDT0b8eDR%2F1t8yWTR5JfjEvAhiwDOuozhGwLkgsA3%2BUz0uZV09FNIVNtpGv3q32g374p32eNnglFQv1vg4Rh%2F8hcrCPNnJN4%2FjP6hWVZaxsdBP938uJ65PpRjtM%2B5OiqGf%2FVx2vhZf8Y6K0YpXd0psjVpRM%2Fs7Bwbmsv7%2FWzssFzErk3f%2FtcEEQbraCMsRrDNEL1NznxZLn0dui56BE%2BP1HSEYy3%2BFwzgScTSQPTZnSVkL8OzU0IoUPP1Q9bDKZ%2BYZlP6nwYWUM0VT9OODKt%2FN76deaO6X0sWraae4FIRDGGSFIxoC1cAB0s3Qsz%2BTmq7yHDYRPnNpSXeI84WOHzcu2ZfFA3FLagKMJ36BgH2NuNzCExbzBBjqkAcJfUEw4rJGsNjlERiICr7Etx%2FoUa%2Fmz0x2%2FXkOY%2FC9lXL%2F5%2FW0XgfiooPh%2BxA4bZqOlYn8zdNjvSUUpa%2BtVQrmwLSW8%2F88CJgJoa1Z54d41E7O6oi%2Fe52BQB2acmFlp0ku%2Bre3%2BjExs%2BSlog49B1eHdiJg02Cll7u7RSbPGAYQQ0NCABUbbhaxNJ7uU%2By0y6yRb53C28jmbt%2B8MUJEJgEoFtlgn&X-Amz-Signature=5852081c5dce961f0f0344405ca18f33ca4252ac5dfe096c17cd93ad30707010&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZUIRWR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDp7PJWjb7FVZpvvWRXKWFh9xzmhtmwQRalZtaZi3iitQIhAP%2BAY5LcHrU4BCPDgUN%2BUj6xMDMZf0uVK3%2B%2Beo5SquwHKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKSaIvt5K9x0intPQq3AOp0HxBqkvhoSyavzNhLzskWV0UyugSoeZhSd7996butKd7tqWK3VuCnPmf23rqGYsuWcd7cKGBAM8VAIy8eZjHuyoEQ08ruW%2BD0qJLtNic2OuBMNzmJZ8fY7L1wDo2UbHhRiXkSCE7XhH6H%2BV0FPYZzWruHwGKcvfElvq2%2B1sU3%2BPcPPv81BGzuhUc48%2B2FZHTMhKNwgHYL0LQc7KSZLWlVx7HPwb3vPWvUFRk0TMfglXmjyPyg6lH711txZPA8CKgOlWoiVeCXQytL0ZN8ypb1HxOb5xcVJYordkcpb670niFICBFw%2FAdeqhM2ztXpAnIUFxQuBSkH36ZSFlY3%2F6qxYr63YSmnS18j8RpxKYIk5e4TbW1DffMYNVuHeQ4cIVWmsdsrWOuvo%2BD%2ByqTdm2NZJVQv0f0q8eQGZWjSXyraWeI8GztaA1K34x6%2BSlPwYNqnAZNsTkDY6F8aOwX%2BY04rq0Vvxep8DP%2FohlRMtD%2FZtE3W67ikmUl9xUhwiPtb36FusLwjSSnXdQC0k%2F6wemFjSUwK0OELyYO8q3yy2zrbq4aQgg%2B2bJFMegZgzdmiNODuVEG%2BNd6fUWMm71vW%2F%2FAsSCrbnt7l21AGEsrjRvfcEWE1bvBcCKvHGufLzDbxbzBBjqkAYGCTGrUZGujZF%2FU1PYnffi3VLubm2wwLRgKLaI66G%2FC%2BKTxP0ToR1VspMWxu7k4eGOOhTL9VkXcXK1EM0GRcZfEzS%2FYcpOvfH3x4%2B7DOPJoMIunU%2Bm5Ms0lVMU4zDczJHu3cbdC6deYrVSSqvt%2Bi7pepsb5w7MBlrZ4bgpJxbVXVRo26vIHdVADHi2QDVL%2BujYKvJSHnvksvF5M2D9UQshl2rpE&X-Amz-Signature=169b53f257d7a99077480ba145abd4c56f4f38d00b6e335ff1e8d320a9629249&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWBKB3W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDB4xA6P3aKp1LvTgRfdkrtmU6YoA7p21z2gBlH7anssAIhAKMx2evQaKA5R6WNM9bR5DlYL2UDtPmb54%2Fv1H27HNs5KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEn6PFRhas0evG2Iq3AOnEVW0QSH3q811rYUxGVAPHZT10J1WCkoyg%2FFBBywN8kSc8N1zee6170tTijknT8YBw%2F1CWRZylMFVcjy1jei5oSdnWMjx5O6DOD87wk7y%2BA8bzblEwCHKaKPmbJLe5e%2FePErBzIiG35E%2BuXXxWiP8BbZLvmeZ9OG0jDrLTeJlSX%2F1xP%2FsxhScGySCMNxhieymsFaBfjEtAYNUrpq1k9Ij14SBrC09R93D9UEOqKnrm2iJ7daw5UGV8JVR2%2BW2rHVdC3KhHN8QRICR%2BJaunMnZ852D4QfK5M8ND5rni%2BkyRCAP7LSszrphG%2FpUZCq%2Ba1pTkp%2FZHqF%2FUnhy%2FEJVDOQfe0f6P%2FdrQsvLQtb4%2BwkcqbN3dBnswvPj8ODOXj8M3DkACkIFWERRvE0XjXbttNcNTjVQX4KcGHUi3kFm3nhQNPnbLMhs6TB4xuwmVrHIlfGyqZ3moxSWBncNVh7AoxcLTbEw1SPb146%2FWw%2FxLG0ro6ARe9aRSod%2B7I8KyYfq6wgT3R3IGeAA2XzXTC2mDXF3mgptFWprtqMd0f0lziLXWPM5bIIUoZSlLRt473H5BCicz6Kib%2FgGTBFJ%2FQ5JSlm%2FHz4jov3%2B6AruMwq5HxTeDHTrTth0E1JQVDYpzjCExbzBBjqkAf2f5zS93vE8sim%2B8eBZYl0%2FgXt5sIun6Xo%2FSDk0fTGwPbA1ICwSdfZWedjedRPPrXzGoPf9l1e79c%2Fh6z21aLpBZ5eQ05Z8FCanUDk9kjrDetOvMLXC%2BVmMK9sWAl3lwb9lhC8x1wHPfAOcrTqIjomgvuwGjlf3U6eQntWMlmDrl3B96x3qnCZcgTumi7vlykWTxUk9YqH5eNJ%2FZ%2BlEMs%2F132zE&X-Amz-Signature=33ad547e3af08c58a167b5ea2949a98754f3fa021a82acb9c17b09bc5616258c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPVIPFR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCi44GQ68J9%2FH5b5SrNBT%2BLJv3Mtco1WgQecx8b%2F3lZOAIhAN6%2Bn%2BoGabkyT%2B0qTRQ0jx%2B8TBRciqvocY%2FjfA54s7rcKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwoerntip4HRw4HXxMq3AMUYO67Y%2B4yd8RH6%2Bina3QyxgUw7JDaXZXfJ6NxXN5hr%2FsFgd0j%2Bb8aCYeEBH8y24chnl7CIjo%2FvYTFJr1HBzt%2BrKS0JrA4m%2BshzWmZ9ILa7k38HCOi9eJgjqrRgaJAeRneW3xDLpnXAENxVq2yQJ8vJsyZRago%2B1ilHA66%2FAiEIQBfq9Or3vBqSBrZYchCWff4f54f0%2B4yHqSQUcRYihxAsa17BlqV86ZzPyYFG7o52026EYQtkHNVQW%2Fnyx3F2dUF%2BcXk9LZMCA1dsZDT0b8eDR%2F1t8yWTR5JfjEvAhiwDOuozhGwLkgsA3%2BUz0uZV09FNIVNtpGv3q32g374p32eNnglFQv1vg4Rh%2F8hcrCPNnJN4%2FjP6hWVZaxsdBP938uJ65PpRjtM%2B5OiqGf%2FVx2vhZf8Y6K0YpXd0psjVpRM%2Fs7Bwbmsv7%2FWzssFzErk3f%2FtcEEQbraCMsRrDNEL1NznxZLn0dui56BE%2BP1HSEYy3%2BFwzgScTSQPTZnSVkL8OzU0IoUPP1Q9bDKZ%2BYZlP6nwYWUM0VT9OODKt%2FN76deaO6X0sWraae4FIRDGGSFIxoC1cAB0s3Qsz%2BTmq7yHDYRPnNpSXeI84WOHzcu2ZfFA3FLagKMJ36BgH2NuNzCExbzBBjqkAcJfUEw4rJGsNjlERiICr7Etx%2FoUa%2Fmz0x2%2FXkOY%2FC9lXL%2F5%2FW0XgfiooPh%2BxA4bZqOlYn8zdNjvSUUpa%2BtVQrmwLSW8%2F88CJgJoa1Z54d41E7O6oi%2Fe52BQB2acmFlp0ku%2Bre3%2BjExs%2BSlog49B1eHdiJg02Cll7u7RSbPGAYQQ0NCABUbbhaxNJ7uU%2By0y6yRb53C28jmbt%2B8MUJEJgEoFtlgn&X-Amz-Signature=386d49410e3ac3c00226b5a3ac81c738ca99b4bde522ba0297e5171d232c3ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
