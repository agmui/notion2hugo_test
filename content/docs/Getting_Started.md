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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG4TB56%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXZEOCKT8Cv6%2FZi4YQ7bdBwAnWK6qc7BCnJNEVpe0lwIgDbrHoX1%2BJpctd98OpVi%2F5YpICHyxA5cOs4FZwLwSHDkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxI6MTapsxzOxopcSrcA%2BJGpuH71sGlSCLNjfCOa3UIZrmlqF%2Fl6H6yBQh3J%2BkKh%2FF1EONdc%2Bh3deuGE1HCDJW1Xfurwyptt10uuxwFbkvcgZXuUq7YZSt33PFIsWwetGvG4aLTwaYae%2FaJA15S6g3z8NIxDceG%2FPQ0CbDqlrTq0LYgGS22wiR1YzmRk%2B8TKkvtkQ%2FdtYj%2FSJn7ZJCL5edpEydwbEMUW3OyX7VDFDxYvqkjagglNpAelA0HG89a3qDrQ3WTTs9v9joCnQASc9VwtdQqhISMOez7Qrd%2FPFW%2FYDd41lA%2FCTb9miZqkm9PnxuzS6hAZypyaZJQR6cl0%2Blhbd3WkYr1PSnWKV71pQDPqqxsCfuYuhNvs%2BpKOo%2FtcwUV%2FXHcIR7wWKtA6utHQpWwgpdogMwXMDzT2Nb%2Fz1WvLPznJFB7wnc9CDt%2Flvo3IJQi3qx9AaB2u1MWthvnBMb4xZF8cDoDMzP24ZV8wzfHmhxQ7soTsrnZ43U5cwgSzhgvkMEhwuLT24KNohLewJXz9PPqG%2Fqj49lRV4ro7WASNcvo%2Fr7GTOgy3lfADPlwe2lDFcq4khuhrMGvoFVQ3ylmFrmsbIF81HMnTbPrWmi65j5xmFQobdhFvdpdiHUOmASPu%2BWYiPhNeqacMOfUvsMGOqUB6iT%2BwiwJLMEvTx5IIrhy%2FPNO5fC%2BCEuYv6PXIBrOQv5m52%2BbLH9ZynKW4z3WHQVBEoCy0sMX3eHCfqVl6sSUYSN5W5NZ5i9PPvzAZl12LnF5oKhwZvfVm4IkaCtjngoLlNy82bNNrZOZ6rjEDZCmOuvYuC5sF7PRVEDRYIPtYmSMsOXP3kJGSNK9KOKcQsOxUKj19IzVhpae0K25qT9dAjTn4ghR&X-Amz-Signature=61b0934f11e8ef692661150a0891c187e1f7929e162ca4642fa6ff7017a08d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG4TB56%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXZEOCKT8Cv6%2FZi4YQ7bdBwAnWK6qc7BCnJNEVpe0lwIgDbrHoX1%2BJpctd98OpVi%2F5YpICHyxA5cOs4FZwLwSHDkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxI6MTapsxzOxopcSrcA%2BJGpuH71sGlSCLNjfCOa3UIZrmlqF%2Fl6H6yBQh3J%2BkKh%2FF1EONdc%2Bh3deuGE1HCDJW1Xfurwyptt10uuxwFbkvcgZXuUq7YZSt33PFIsWwetGvG4aLTwaYae%2FaJA15S6g3z8NIxDceG%2FPQ0CbDqlrTq0LYgGS22wiR1YzmRk%2B8TKkvtkQ%2FdtYj%2FSJn7ZJCL5edpEydwbEMUW3OyX7VDFDxYvqkjagglNpAelA0HG89a3qDrQ3WTTs9v9joCnQASc9VwtdQqhISMOez7Qrd%2FPFW%2FYDd41lA%2FCTb9miZqkm9PnxuzS6hAZypyaZJQR6cl0%2Blhbd3WkYr1PSnWKV71pQDPqqxsCfuYuhNvs%2BpKOo%2FtcwUV%2FXHcIR7wWKtA6utHQpWwgpdogMwXMDzT2Nb%2Fz1WvLPznJFB7wnc9CDt%2Flvo3IJQi3qx9AaB2u1MWthvnBMb4xZF8cDoDMzP24ZV8wzfHmhxQ7soTsrnZ43U5cwgSzhgvkMEhwuLT24KNohLewJXz9PPqG%2Fqj49lRV4ro7WASNcvo%2Fr7GTOgy3lfADPlwe2lDFcq4khuhrMGvoFVQ3ylmFrmsbIF81HMnTbPrWmi65j5xmFQobdhFvdpdiHUOmASPu%2BWYiPhNeqacMOfUvsMGOqUB6iT%2BwiwJLMEvTx5IIrhy%2FPNO5fC%2BCEuYv6PXIBrOQv5m52%2BbLH9ZynKW4z3WHQVBEoCy0sMX3eHCfqVl6sSUYSN5W5NZ5i9PPvzAZl12LnF5oKhwZvfVm4IkaCtjngoLlNy82bNNrZOZ6rjEDZCmOuvYuC5sF7PRVEDRYIPtYmSMsOXP3kJGSNK9KOKcQsOxUKj19IzVhpae0K25qT9dAjTn4ghR&X-Amz-Signature=7d08a9bda3a2c2c3c008f7650c6277ba35a6ce79963c407bb46af1d9322e29ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG4TB56%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXZEOCKT8Cv6%2FZi4YQ7bdBwAnWK6qc7BCnJNEVpe0lwIgDbrHoX1%2BJpctd98OpVi%2F5YpICHyxA5cOs4FZwLwSHDkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxI6MTapsxzOxopcSrcA%2BJGpuH71sGlSCLNjfCOa3UIZrmlqF%2Fl6H6yBQh3J%2BkKh%2FF1EONdc%2Bh3deuGE1HCDJW1Xfurwyptt10uuxwFbkvcgZXuUq7YZSt33PFIsWwetGvG4aLTwaYae%2FaJA15S6g3z8NIxDceG%2FPQ0CbDqlrTq0LYgGS22wiR1YzmRk%2B8TKkvtkQ%2FdtYj%2FSJn7ZJCL5edpEydwbEMUW3OyX7VDFDxYvqkjagglNpAelA0HG89a3qDrQ3WTTs9v9joCnQASc9VwtdQqhISMOez7Qrd%2FPFW%2FYDd41lA%2FCTb9miZqkm9PnxuzS6hAZypyaZJQR6cl0%2Blhbd3WkYr1PSnWKV71pQDPqqxsCfuYuhNvs%2BpKOo%2FtcwUV%2FXHcIR7wWKtA6utHQpWwgpdogMwXMDzT2Nb%2Fz1WvLPznJFB7wnc9CDt%2Flvo3IJQi3qx9AaB2u1MWthvnBMb4xZF8cDoDMzP24ZV8wzfHmhxQ7soTsrnZ43U5cwgSzhgvkMEhwuLT24KNohLewJXz9PPqG%2Fqj49lRV4ro7WASNcvo%2Fr7GTOgy3lfADPlwe2lDFcq4khuhrMGvoFVQ3ylmFrmsbIF81HMnTbPrWmi65j5xmFQobdhFvdpdiHUOmASPu%2BWYiPhNeqacMOfUvsMGOqUB6iT%2BwiwJLMEvTx5IIrhy%2FPNO5fC%2BCEuYv6PXIBrOQv5m52%2BbLH9ZynKW4z3WHQVBEoCy0sMX3eHCfqVl6sSUYSN5W5NZ5i9PPvzAZl12LnF5oKhwZvfVm4IkaCtjngoLlNy82bNNrZOZ6rjEDZCmOuvYuC5sF7PRVEDRYIPtYmSMsOXP3kJGSNK9KOKcQsOxUKj19IzVhpae0K25qT9dAjTn4ghR&X-Amz-Signature=7a80aba38a4d2bdc7103708c8b649387c7cc673f882b511a8c5620e9264b009e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSG5TW6R%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANASZehXTGwJskL%2FIYRWrFd1gkFUaeDEjpoYsmCGSnhAiEArl9GbhCyypRTjvHKOUk3wS9WDE4e32wxnJk3tjpS9mAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6AyMaI%2FUYZyP%2FZFCrcA7NuFtAAZuopXGRzPrMZ5Op6NgUyTWErdcd0yqcI8BjdNCEtWJ0OVx%2Bqb6tPoj0uyw2dcamVz%2Fk9wjVWrxyWZLb5OtPIE0AvQ0F7a6c5NiKA4oQN4WBHcmRLeUc8tNxV4FWeOI8P21QvxdcdvxzdJdD3xNEru7mHSfC4IMiBG7cfnIbx3jLesYZJCKamIyspIbmstqBY26XBQTLSmhLAmnCemSKQhRY%2BRgz2ef0HQWAZu9O1rolrdnEkUMcnOhvcVPDVjsUfj3uFHU0zyk%2Bb%2B4%2BNOYcZfKpWqN5eoYn%2BvCWPxfq4saI%2FKNzoBdJyx4jUJDQqOpGOmY5NGR%2FuStKh1qa8PIM7ztFjaaoN3YYY%2FcTfgPQ28mQ5dg8O8Yi6%2BBhdqXhpv8FxFEuhqHPgeKXgh5Bxw4AgEGZ%2BTQeH1QW9ni7jP4dSUOpc1sVCpwt8ux7nKL22gjcdX%2Bso6TyZF5iW%2FwEHiNBL7isVNxpiPr9cwLNNp7XJEceN7%2F2w3S4Bgzbb2LDK2q0z%2BAc1i8ViVB%2BJVk6srP5DG3%2B2%2FKtk%2Fdtir%2BvC77PrfDFYR%2FutbN6z9dntoQdtpZ3W8K5gUE6maAWAydX6%2BhPYtUT%2BLLCwSsZyV2Ruf5jahlaGgr%2FhiZ%2B6MP%2FUvsMGOqUBNJN5lSNqQi7ds6eWDr86MvMkfULqA5y8d9w3YGJMSfV0lEQLWPVRJcNJ7eVneC2UrxUeAJQ4f9spNVPGB8P0%2FbD6OAk1%2FmzXbP6JElFW%2B0Z%2F3Tn5HI8aw69wiSyTOZNZSX5tZXuo6HwfLbi7X6K51JOOZGpgJJ7Z%2F1aFb4r45g%2Fo1CR13Hy445KUuRHlisHD0hBSGP12cYU%2BsulE3navnhKLC4CS&X-Amz-Signature=7502fc5c50cc7e7356af5be813de6287129362de4ec44b04aaa9fd955f7dcd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EY3OYLL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNZHymklMxuPAE0N8mO4tD1LdZ6Iy6uS3ZoGc8mNiGCAiB0Qs5p6iTM4D%2B32XbweFt2VWqY4rR0EJylt7cdWFpzdiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcYGN%2FKxW8tVll2bKtwDU7ydXxHbSSCHCEiQnVBgz66XTv0L63lRL2bj4SigkI%2BtfllxpzLcYFhCMLdALOwpa4lo3Pp8oKXifgbTNRTp%2FoiVXpO6ooj0oU%2Be1wZx0ffDDUuRRnAKkga6ZXOIrMICWY2Mqm5YIZHcNLAwTlbied1s4EAHUcjjGob5yNxb9F39rHpAwq9SwQA%2FaDhGmm9BAtWZQO%2BigSdnrOlAWKogEgTorG1A0XAz3S1ORIddNLnB8ogArCghvEkpbQiw33yQKgTD%2BjBZSZGzWhotfvKRM3IxqBvqJpIBs0pLcdfz40jpqsbe4H8OWx0kGlYJyiy3JyKzzGVqLvidySYKSfdhDesJ3tuCJI8diAXBu8lkLABQEMw705Gstwnylpw78izcQebDGFJ79zMeQXpJ9BMRLToVSgViAdaNQNAmC9ErEJO3VONm1OsoXPX5Uiva%2FE8hnFpF8uhjY2TS40a4MDXC01%2FsbGUD%2FUEPmI9lmxPE8aNoBcs8xEuNOowuPaCIy96fcVeoR1OvZJ%2FFPjsnv7PpL3y4Uss%2B3vxAPZnD5UWNtrI42CfrWDDcOdYKyei5KLxYU5%2FGVl0mCpKD3L8nBJLaNCjTokZGJ8hWRqIMQpeZVFfFcK7KaG1fN5JEnOswxtS%2BwwY6pgH%2BiRdCtwZdl2U3yMI8x4%2F3McjOV33SXV8%2F0iyaXwnSUfDNCAqW5YMrJ%2BJhqq7BagL%2BpgOKhPQOSITP2WpR5M4EAwdv34accQgDnJStGhpvxC8%2Fcya5tgrVmI1NPh24ojB%2B0%2B%2FLRHenvdQpSdxWhAnA81tYiZJpcaTiDGZ4NV%2FD11%2Fp8L8kHMdofPJIlj7R%2FstHvEfcl8HcIDmxFjqESCW%2FyU1G9J2d&X-Amz-Signature=3be96010557a897a2bbb670f95abff52963299032ae8b4920f1a51a9cd570195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG4TB56%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXZEOCKT8Cv6%2FZi4YQ7bdBwAnWK6qc7BCnJNEVpe0lwIgDbrHoX1%2BJpctd98OpVi%2F5YpICHyxA5cOs4FZwLwSHDkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxI6MTapsxzOxopcSrcA%2BJGpuH71sGlSCLNjfCOa3UIZrmlqF%2Fl6H6yBQh3J%2BkKh%2FF1EONdc%2Bh3deuGE1HCDJW1Xfurwyptt10uuxwFbkvcgZXuUq7YZSt33PFIsWwetGvG4aLTwaYae%2FaJA15S6g3z8NIxDceG%2FPQ0CbDqlrTq0LYgGS22wiR1YzmRk%2B8TKkvtkQ%2FdtYj%2FSJn7ZJCL5edpEydwbEMUW3OyX7VDFDxYvqkjagglNpAelA0HG89a3qDrQ3WTTs9v9joCnQASc9VwtdQqhISMOez7Qrd%2FPFW%2FYDd41lA%2FCTb9miZqkm9PnxuzS6hAZypyaZJQR6cl0%2Blhbd3WkYr1PSnWKV71pQDPqqxsCfuYuhNvs%2BpKOo%2FtcwUV%2FXHcIR7wWKtA6utHQpWwgpdogMwXMDzT2Nb%2Fz1WvLPznJFB7wnc9CDt%2Flvo3IJQi3qx9AaB2u1MWthvnBMb4xZF8cDoDMzP24ZV8wzfHmhxQ7soTsrnZ43U5cwgSzhgvkMEhwuLT24KNohLewJXz9PPqG%2Fqj49lRV4ro7WASNcvo%2Fr7GTOgy3lfADPlwe2lDFcq4khuhrMGvoFVQ3ylmFrmsbIF81HMnTbPrWmi65j5xmFQobdhFvdpdiHUOmASPu%2BWYiPhNeqacMOfUvsMGOqUB6iT%2BwiwJLMEvTx5IIrhy%2FPNO5fC%2BCEuYv6PXIBrOQv5m52%2BbLH9ZynKW4z3WHQVBEoCy0sMX3eHCfqVl6sSUYSN5W5NZ5i9PPvzAZl12LnF5oKhwZvfVm4IkaCtjngoLlNy82bNNrZOZ6rjEDZCmOuvYuC5sF7PRVEDRYIPtYmSMsOXP3kJGSNK9KOKcQsOxUKj19IzVhpae0K25qT9dAjTn4ghR&X-Amz-Signature=a3a15f14cf57a33ae6183ad15e2e87b052b7971c603ee342505ff8d602f002b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
