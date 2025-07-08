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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UO5PCP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCWSkmo5t%2FC67RQ4sAtdS1L6IeXRWZc650G13eoE4sMagIgQU7vHnFQ2VZGJQYsxwjCOjdm%2Fit7UZTqnEn70hjySX4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfbGW%2Fip8gXr0dXyrcAwhtMfTZdg4geOjlYRMrNz6sAjDryHITBlDZKl7YFMFp1Zab13rwZ0fBMCV3m1MsX0eYfZtUQA1ZQp3LPX3rshzjMrsGvIwFZh%2FuSD1nz99Y3tozg8%2Bc8jW2%2FUs7Mb1kqH4yaGjqfrk1DERAv87o8iABIaDdzVnQdO8ODZPcX%2BeYWFtRMKdVO%2BS6NQ9q63XnU8mZg5MMvyHAhhD2kf%2BZI5MYXTv6o9xYtKPmXzL1xpCYk9HkykMBL7tNZM7ELZMUtFmbunyPMjU4pzc56vbCj1GF2P8wFchMQPsGKsKCDfuWFUUHEZLiXWpr59pghNTS6wQEp%2B2weyRzZPcqIkD79P%2BkuQnB7VlKVAAhTIMUaKDDMdQhQ%2B8iF05P63qle40kbKFqsVWoY%2BKppfDYGwb%2Fo%2BT3TGAxM8T5hoPFSE0ivEy%2Bk17KP8GT5Bhlz9B3tKU9%2FsUm%2BjlTp3Wf6SSWbcX018nbjLdcYAYyg1g2o6WmQIapc4372B96TE0GQa17LMVTWmJr6MUcqBokN6q2Ye7NbTtIp63ihZMhnqg6Xoy2fOS9e75GxqPBoBr3aL4ctAv3qeEVCePp%2B4PF6D4pGdadq9GL5pkAtaNu8NLkCCqvQGD1jFQlExsWCRwNeThiMMqEssMGOqUBau9R%2F4%2FtvPqJB9sMprEX7MSx6%2Bubaf%2Fs%2FWA2OptCp1QRe4sLP4yIOK38YWVfUSErGcVyG8hapWDEOI1ucLE%2FN15cyFODpdflq5Ys14IWN2yx8hpCJHeMQRiDf%2Fga3LJqFQPHDJXGT9%2BfvSZYD4q4V6o0fol2uSBJzGjeE3yFjQIBtc2T0StZ%2BuRpJ%2BDr0LXCuImBcLwxNu7WnC9AXCfU2897pzet&X-Amz-Signature=d83fe7852490b7dd1c2c76a9faec9492e602cb68e02d1a994154a53040a3c190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UO5PCP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCWSkmo5t%2FC67RQ4sAtdS1L6IeXRWZc650G13eoE4sMagIgQU7vHnFQ2VZGJQYsxwjCOjdm%2Fit7UZTqnEn70hjySX4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfbGW%2Fip8gXr0dXyrcAwhtMfTZdg4geOjlYRMrNz6sAjDryHITBlDZKl7YFMFp1Zab13rwZ0fBMCV3m1MsX0eYfZtUQA1ZQp3LPX3rshzjMrsGvIwFZh%2FuSD1nz99Y3tozg8%2Bc8jW2%2FUs7Mb1kqH4yaGjqfrk1DERAv87o8iABIaDdzVnQdO8ODZPcX%2BeYWFtRMKdVO%2BS6NQ9q63XnU8mZg5MMvyHAhhD2kf%2BZI5MYXTv6o9xYtKPmXzL1xpCYk9HkykMBL7tNZM7ELZMUtFmbunyPMjU4pzc56vbCj1GF2P8wFchMQPsGKsKCDfuWFUUHEZLiXWpr59pghNTS6wQEp%2B2weyRzZPcqIkD79P%2BkuQnB7VlKVAAhTIMUaKDDMdQhQ%2B8iF05P63qle40kbKFqsVWoY%2BKppfDYGwb%2Fo%2BT3TGAxM8T5hoPFSE0ivEy%2Bk17KP8GT5Bhlz9B3tKU9%2FsUm%2BjlTp3Wf6SSWbcX018nbjLdcYAYyg1g2o6WmQIapc4372B96TE0GQa17LMVTWmJr6MUcqBokN6q2Ye7NbTtIp63ihZMhnqg6Xoy2fOS9e75GxqPBoBr3aL4ctAv3qeEVCePp%2B4PF6D4pGdadq9GL5pkAtaNu8NLkCCqvQGD1jFQlExsWCRwNeThiMMqEssMGOqUBau9R%2F4%2FtvPqJB9sMprEX7MSx6%2Bubaf%2Fs%2FWA2OptCp1QRe4sLP4yIOK38YWVfUSErGcVyG8hapWDEOI1ucLE%2FN15cyFODpdflq5Ys14IWN2yx8hpCJHeMQRiDf%2Fga3LJqFQPHDJXGT9%2BfvSZYD4q4V6o0fol2uSBJzGjeE3yFjQIBtc2T0StZ%2BuRpJ%2BDr0LXCuImBcLwxNu7WnC9AXCfU2897pzet&X-Amz-Signature=48393b925f281b19e582e2df601a24f418eae0ccdbeb3b50bafe34c20a15ea0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UO5PCP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCWSkmo5t%2FC67RQ4sAtdS1L6IeXRWZc650G13eoE4sMagIgQU7vHnFQ2VZGJQYsxwjCOjdm%2Fit7UZTqnEn70hjySX4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfbGW%2Fip8gXr0dXyrcAwhtMfTZdg4geOjlYRMrNz6sAjDryHITBlDZKl7YFMFp1Zab13rwZ0fBMCV3m1MsX0eYfZtUQA1ZQp3LPX3rshzjMrsGvIwFZh%2FuSD1nz99Y3tozg8%2Bc8jW2%2FUs7Mb1kqH4yaGjqfrk1DERAv87o8iABIaDdzVnQdO8ODZPcX%2BeYWFtRMKdVO%2BS6NQ9q63XnU8mZg5MMvyHAhhD2kf%2BZI5MYXTv6o9xYtKPmXzL1xpCYk9HkykMBL7tNZM7ELZMUtFmbunyPMjU4pzc56vbCj1GF2P8wFchMQPsGKsKCDfuWFUUHEZLiXWpr59pghNTS6wQEp%2B2weyRzZPcqIkD79P%2BkuQnB7VlKVAAhTIMUaKDDMdQhQ%2B8iF05P63qle40kbKFqsVWoY%2BKppfDYGwb%2Fo%2BT3TGAxM8T5hoPFSE0ivEy%2Bk17KP8GT5Bhlz9B3tKU9%2FsUm%2BjlTp3Wf6SSWbcX018nbjLdcYAYyg1g2o6WmQIapc4372B96TE0GQa17LMVTWmJr6MUcqBokN6q2Ye7NbTtIp63ihZMhnqg6Xoy2fOS9e75GxqPBoBr3aL4ctAv3qeEVCePp%2B4PF6D4pGdadq9GL5pkAtaNu8NLkCCqvQGD1jFQlExsWCRwNeThiMMqEssMGOqUBau9R%2F4%2FtvPqJB9sMprEX7MSx6%2Bubaf%2Fs%2FWA2OptCp1QRe4sLP4yIOK38YWVfUSErGcVyG8hapWDEOI1ucLE%2FN15cyFODpdflq5Ys14IWN2yx8hpCJHeMQRiDf%2Fga3LJqFQPHDJXGT9%2BfvSZYD4q4V6o0fol2uSBJzGjeE3yFjQIBtc2T0StZ%2BuRpJ%2BDr0LXCuImBcLwxNu7WnC9AXCfU2897pzet&X-Amz-Signature=4043a819f26d4bb342d98e4634900d2ad10dabe96e54d3cca1d6d6e4d967a0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625LGKUR5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAaG%2BIrAjMTtOBAPQU8wm2INWjb0UPJZtOf66%2FfNyZHZAiA2loJsjwidCzHj6N8yNUZC9cR4t0u5RA7pQUF53Cc1LiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMedYqJ%2BflFNoOTeXkKtwDy1BChdPRjmO%2BdMObyo8AvlU%2BEQr6XoOhOAkzjAP1TDFo9wFwJhlDwTvE4tw5lupiyfrF7eaCaDfQFWV%2FqR1pShsbqFnhcr9OZhtIT7qloW%2FSu1S6%2BvgbYr8Gc5Gg2CCjusEOCb9Xhb6hmH4KaV%2FlkSiqA49rIxAEzGm4v%2FWQxc4pFuu%2FtWjGSj4NZ87x35rGe%2BSgwo3QomGLiluTdHsk3dw5ISxyx3x9XLUd6ePCbLYup9MXTKeT4rcaHvtXGP4fnNJxq1iH332v1yLBGDgtdXQxoWD86OAHAzug1LqWfmlp%2FC2IYp11a8HL8J%2FD1uljRFfKwBbrtzTRHiLwgp7moXxMeyxsKhMy%2Fr5nqqQnjIb%2B2MAv7R9fo9v69LEGXQ1BOxblwWsjzPVXjDYnJGw7IOlYjuCyqdze83u9yn8R6eWSfFhWg3gse0mikvYC9CADdSkHVp1C%2BD%2BUboOeSjuv6szx1k9YG5RcpsvSQYNDRIy9BFOT8OrR1P7eKf0C10oln8AJ3v3v1NQ%2BT8ujcXcNB0HVgI5hkrSoLpGEJ1sxryb77k6JV5ZtovhW2vcix7EwDc5TJc3whnpLE99l%2BRQ8FBeLsFlrpkuWkYiyArGBUyeU7gjs4%2F2Zg19CkMUwzIOywwY6pgEJieXVkaaAMNQE3BT0V8pdTk8qJF0xifzzlAwAhRPte%2BOHxt22j1BSfdm%2FnPnjZ4qRkLU6834%2BdFQcMRsqMs4Nz9LDZ8ZvzCxpUxQdIRFkZ3zW0YjlVb65rSHg68e4HCy1IJUTeEv%2BbIdk2vmJwhwd03HLsqw%2F%2BdjvIIEkAkt8Ely5Hn5pOSN8F3DuOfouahLRf711RCSCQIaiVouQ%2BXCbYvY5wCel&X-Amz-Signature=bf7e17229a34e5631a21def897d8cc9cd27a2d7988f92bdb5d2b50d9a7c4ae26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y52KUPZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1wubq5ughOxn4%2BC7Oizffi5Y%2BD%2BdSVuVhFsAnbxBC3AIhAI0EjF04x1Xv8q2uITQrHLP8KLRP2EjA5mGVdKF678i%2BKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtvDIm7Bsi8JpIg94q3APX3En2YqQz8EVOgc1%2B4tOwpH4QEmIwiLbyKVvtove4uGqRBOw%2BPQInbqs9MJv8rCIniQfkIxrb%2B2JcahHk0futaZj%2BDRuGqo8E4FQMLmRbH%2FoU%2Fnd5f28juZHbf%2FRrUZgPCb18oIGJQq7aALN0FThW5WR9fkgDUmY2lvC5mP9HY83rWW6I4%2FML%2BSz4o%2B5eSeddim8bYG3kHpu23FiGcRCriFririeRdqHZFjppFjJrnGprJNMklli9UVgql5afpM4sEuOeq0812AiFmswfwvMQJCUWy88E1p8S6Ny34Y%2Buc8L%2BzFeDyOU8kv8wmY%2FhqEiWV5h1xQzjsU8dZ%2BPCJaDZLmCnMPWy90J03DxLUBPak61zsdGwi%2BdXB9kbN1aCUJpPK%2BXvkWoXDg%2FZvXaNnSzBYKcivhQLIsBZpCEYngyD7%2Fg7zXs4omZGZkkVPd1lfVofNxQqgQPVLYUcgB%2F%2BlEFZJ992j6qroBQP8JkEX1Vlj9N7OUD3AXO0IWXTF4eLx1nl%2FApR7q%2BkMgFt%2FyHAcLJtrLRDsjZVFsn6lmJE17BxglTuEC5Yrz6CyZETZVyi6QJ%2Bkld%2F0jRd4LebTyP2bRh93AgLqMsZWLyRwRS%2FEB5fi3CIw1nYCXfbStGnhTCIhLLDBjqkAYruKJhXS1aUhzY33t%2FP2Kko%2BALoKjO5xfs3q8o%2FBu2sM8hTPQp%2FKsBkJHBkZw8slwS5SMw8j8OdcyjtZQGJRsmdw8JbytZqzPRyihJSA21cNb8HF9lpGDCXlh6pxmAPetF5WKD4lQqcBiDuBODcq2bhGr5wQMhq3%2Fe9XaCmzZRHnCdcqweYmvGrfIgH6TSvFrI5GATJSQwUoA%2FVZv2nqkCmPdzC&X-Amz-Signature=479c6f3a358eb71286bdaa481d3b821efe82fb19c65bcad070c713a83a6afbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UO5PCP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCWSkmo5t%2FC67RQ4sAtdS1L6IeXRWZc650G13eoE4sMagIgQU7vHnFQ2VZGJQYsxwjCOjdm%2Fit7UZTqnEn70hjySX4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfbGW%2Fip8gXr0dXyrcAwhtMfTZdg4geOjlYRMrNz6sAjDryHITBlDZKl7YFMFp1Zab13rwZ0fBMCV3m1MsX0eYfZtUQA1ZQp3LPX3rshzjMrsGvIwFZh%2FuSD1nz99Y3tozg8%2Bc8jW2%2FUs7Mb1kqH4yaGjqfrk1DERAv87o8iABIaDdzVnQdO8ODZPcX%2BeYWFtRMKdVO%2BS6NQ9q63XnU8mZg5MMvyHAhhD2kf%2BZI5MYXTv6o9xYtKPmXzL1xpCYk9HkykMBL7tNZM7ELZMUtFmbunyPMjU4pzc56vbCj1GF2P8wFchMQPsGKsKCDfuWFUUHEZLiXWpr59pghNTS6wQEp%2B2weyRzZPcqIkD79P%2BkuQnB7VlKVAAhTIMUaKDDMdQhQ%2B8iF05P63qle40kbKFqsVWoY%2BKppfDYGwb%2Fo%2BT3TGAxM8T5hoPFSE0ivEy%2Bk17KP8GT5Bhlz9B3tKU9%2FsUm%2BjlTp3Wf6SSWbcX018nbjLdcYAYyg1g2o6WmQIapc4372B96TE0GQa17LMVTWmJr6MUcqBokN6q2Ye7NbTtIp63ihZMhnqg6Xoy2fOS9e75GxqPBoBr3aL4ctAv3qeEVCePp%2B4PF6D4pGdadq9GL5pkAtaNu8NLkCCqvQGD1jFQlExsWCRwNeThiMMqEssMGOqUBau9R%2F4%2FtvPqJB9sMprEX7MSx6%2Bubaf%2Fs%2FWA2OptCp1QRe4sLP4yIOK38YWVfUSErGcVyG8hapWDEOI1ucLE%2FN15cyFODpdflq5Ys14IWN2yx8hpCJHeMQRiDf%2Fga3LJqFQPHDJXGT9%2BfvSZYD4q4V6o0fol2uSBJzGjeE3yFjQIBtc2T0StZ%2BuRpJ%2BDr0LXCuImBcLwxNu7WnC9AXCfU2897pzet&X-Amz-Signature=3a5d535823af867f6ffcf4d521781a0b652f8ff891d7b5b35b2fedc6c86994cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
