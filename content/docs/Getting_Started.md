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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHT74JB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcpDoPZZfk1xwpb2LYe%2Fly%2FTHeCBacNeq8m6OewOGj%2FAiBEXzsOTjALS0c6fsHwB4L1dn4M0RJs6HOLHazqPQvSZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfF9ejqnuR%2B8%2FS4iKtwDQ%2B7jq37XFXcIZXh1RBFusMC2MzPu76y0vg2HRPQrKJcTkYmmrFfIu70QCFhCdhogBBmL0MyEHaF0YuuF9%2B%2F59WhsDEvTEq0I00wbHsE1l2qfc16bBFvDRwB56BRgXVwiPJMGXLhQj%2BVyfOoXh7a7kUKFaYc%2Fsb2mzRucHOfZcqp9v7v4RMzsj%2BtNr8DiR1w19DpwWkdexsLRNXUz%2BIT8Eq6bkbgnRAEs0Ux3aX0OSO%2Bx4NXfk51YXbmiMu4qyHU4A6dnSdcg1kEJ0JpPpBpVKOtVApuntwO9OA99iJCrOe1ZrNQpDXPYbiKi5%2F4OwkmNtmspI0GZssw1632qLwLYZUi0LCGveN8FdhSlIp7SgWBu%2B2Wb0NxhkVTat7nryZL83PjF29Ff2ehI4ycqPFcoccQ%2FB4XwB7I1nsz2uJCIV9Yd1fL8zYZ%2FVjj8Q2LAcjFsAR9UxPwxGoAIzBYflhbTi8MFGRGmDlyOQaxOmyker76ZGH9CtagcAqy%2FUdtnRuOkEblR%2BRAhE%2BMrlKvy2bWVit1Whp1IVPvbTirJf2SVRXDQQPKxYohARST8Qi3tWKwY4VnY4WXwhhxammKJp%2B0sbe3VNY9KlPHQJOE6REXnTs39Lv%2FVk1l8LV3%2FpeUwopOxwQY6pgFoif7gsqXTV0Of%2F%2FEe4Jeur4a6D2J5TQT7m1X14BUa%2FBBtj%2Bm9iJrEkz58k5hgnX05w7Vs7WELI30PyjzNsv63OVxNSpWOE6iw59kE%2FeFdqXGCn3wjLs8NyCyRLBJ3%2FBDzgivkkCZLljTjHLwWNA5BIOvO3CNsJQLc4mWjxIf2w2IJR8vqMl5HMCxrJMrXlWVz12Qcm0kMqIFdqJfOmgrgI%2FY7sPkC&X-Amz-Signature=847fcfd2096d0ef63d75bf8dabf946219acf50f92a8568b6ef8e3e15977b2fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHT74JB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcpDoPZZfk1xwpb2LYe%2Fly%2FTHeCBacNeq8m6OewOGj%2FAiBEXzsOTjALS0c6fsHwB4L1dn4M0RJs6HOLHazqPQvSZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfF9ejqnuR%2B8%2FS4iKtwDQ%2B7jq37XFXcIZXh1RBFusMC2MzPu76y0vg2HRPQrKJcTkYmmrFfIu70QCFhCdhogBBmL0MyEHaF0YuuF9%2B%2F59WhsDEvTEq0I00wbHsE1l2qfc16bBFvDRwB56BRgXVwiPJMGXLhQj%2BVyfOoXh7a7kUKFaYc%2Fsb2mzRucHOfZcqp9v7v4RMzsj%2BtNr8DiR1w19DpwWkdexsLRNXUz%2BIT8Eq6bkbgnRAEs0Ux3aX0OSO%2Bx4NXfk51YXbmiMu4qyHU4A6dnSdcg1kEJ0JpPpBpVKOtVApuntwO9OA99iJCrOe1ZrNQpDXPYbiKi5%2F4OwkmNtmspI0GZssw1632qLwLYZUi0LCGveN8FdhSlIp7SgWBu%2B2Wb0NxhkVTat7nryZL83PjF29Ff2ehI4ycqPFcoccQ%2FB4XwB7I1nsz2uJCIV9Yd1fL8zYZ%2FVjj8Q2LAcjFsAR9UxPwxGoAIzBYflhbTi8MFGRGmDlyOQaxOmyker76ZGH9CtagcAqy%2FUdtnRuOkEblR%2BRAhE%2BMrlKvy2bWVit1Whp1IVPvbTirJf2SVRXDQQPKxYohARST8Qi3tWKwY4VnY4WXwhhxammKJp%2B0sbe3VNY9KlPHQJOE6REXnTs39Lv%2FVk1l8LV3%2FpeUwopOxwQY6pgFoif7gsqXTV0Of%2F%2FEe4Jeur4a6D2J5TQT7m1X14BUa%2FBBtj%2Bm9iJrEkz58k5hgnX05w7Vs7WELI30PyjzNsv63OVxNSpWOE6iw59kE%2FeFdqXGCn3wjLs8NyCyRLBJ3%2FBDzgivkkCZLljTjHLwWNA5BIOvO3CNsJQLc4mWjxIf2w2IJR8vqMl5HMCxrJMrXlWVz12Qcm0kMqIFdqJfOmgrgI%2FY7sPkC&X-Amz-Signature=25dc94cce2d6f74779737882b8c0592e5da7d10f50b96cfbbbffdf3a327c99a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHT74JB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcpDoPZZfk1xwpb2LYe%2Fly%2FTHeCBacNeq8m6OewOGj%2FAiBEXzsOTjALS0c6fsHwB4L1dn4M0RJs6HOLHazqPQvSZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfF9ejqnuR%2B8%2FS4iKtwDQ%2B7jq37XFXcIZXh1RBFusMC2MzPu76y0vg2HRPQrKJcTkYmmrFfIu70QCFhCdhogBBmL0MyEHaF0YuuF9%2B%2F59WhsDEvTEq0I00wbHsE1l2qfc16bBFvDRwB56BRgXVwiPJMGXLhQj%2BVyfOoXh7a7kUKFaYc%2Fsb2mzRucHOfZcqp9v7v4RMzsj%2BtNr8DiR1w19DpwWkdexsLRNXUz%2BIT8Eq6bkbgnRAEs0Ux3aX0OSO%2Bx4NXfk51YXbmiMu4qyHU4A6dnSdcg1kEJ0JpPpBpVKOtVApuntwO9OA99iJCrOe1ZrNQpDXPYbiKi5%2F4OwkmNtmspI0GZssw1632qLwLYZUi0LCGveN8FdhSlIp7SgWBu%2B2Wb0NxhkVTat7nryZL83PjF29Ff2ehI4ycqPFcoccQ%2FB4XwB7I1nsz2uJCIV9Yd1fL8zYZ%2FVjj8Q2LAcjFsAR9UxPwxGoAIzBYflhbTi8MFGRGmDlyOQaxOmyker76ZGH9CtagcAqy%2FUdtnRuOkEblR%2BRAhE%2BMrlKvy2bWVit1Whp1IVPvbTirJf2SVRXDQQPKxYohARST8Qi3tWKwY4VnY4WXwhhxammKJp%2B0sbe3VNY9KlPHQJOE6REXnTs39Lv%2FVk1l8LV3%2FpeUwopOxwQY6pgFoif7gsqXTV0Of%2F%2FEe4Jeur4a6D2J5TQT7m1X14BUa%2FBBtj%2Bm9iJrEkz58k5hgnX05w7Vs7WELI30PyjzNsv63OVxNSpWOE6iw59kE%2FeFdqXGCn3wjLs8NyCyRLBJ3%2FBDzgivkkCZLljTjHLwWNA5BIOvO3CNsJQLc4mWjxIf2w2IJR8vqMl5HMCxrJMrXlWVz12Qcm0kMqIFdqJfOmgrgI%2FY7sPkC&X-Amz-Signature=41f0128c79620c391399035e8e43488955333cd1f860aaa349203a8d9e20fda1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGKRUZZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC23B7IdrLBd4lOcDnnM6nqZ3tmfOKPdzdxo1KZBf0vqQIgFWg6Qhj0P%2BZQyPZrGkM%2FMkbAqFq9PSxZCpI8iVaCJVEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGL0dWoVF1CfCgHHCrcA2OJ1MxCc4vdrxDZcgpsoedZQVV%2Bu9fLA7docXGXYasWtMJhrCLas6hSUqjfYht8oxU%2BQgqbjqsVd5ctS10TKe8WVfnuxn6SPw5fJt%2BL6qbl8iG9ebmD4wVA2w22OPMqi47fNIsuT8fzI91zbHajBMj82OONuYuuJdOw4Ck2nYrL3sGQotCOuD2YFsxIcE%2Fz0sSVeN47SJzP%2BuP5Q67FptmJd4TZrEDfCvyrP9OkFQFWGSjJ6qbkrz5hojQ4MgWk00gp40QWiVHOQuEmdNIgrs%2BONA%2BYmpR1F%2B34WVeeedUEcfVKiVXKPcFrQ6ZuJIjvN3hnESa%2F%2B4J1NH8IqYLh7qRoYnQcthhbTuwdIKVXs6cu%2F0VhtrXPd3IcJ%2F8UO2cNUzEyPxI%2BIMfSFVot%2FRxaQTYuOfzDgdxSB%2BnOFBkQNsHJ%2FDLQIUnU6UPo65QmUIDs5JkKP%2BcRpyPHMx1eIfVeKkBKyYKMKq6tkoXAbDbQjDrEu%2FIwe0R6u23y9eYoMUBg7N37fPvIgCSrfhrACpVMAKf5Jj%2FHY%2FNRpH5MBG9xlNLWtuURhxo1yQ55KoHQTQGbZ3boqSlZTR4QQ3KhNbVNsEd01Tvzipbf03MoKa%2FLIhlezm7yq6tXY%2BA%2BLdOWMLCUscEGOqUBanRJ5giC0cpgqjGdnou8ccFofjmesrlJw665iSSsr%2FjRaL8%2FYCKIpi20hAGmboYUEYrdBYK6z4a4Msjz%2FQgtLcpbvh8YQCiEsNPfGn9%2FQP%2FvNFCqUqYkhqZvEE5AzIM1%2BCHAFTCbbBPL0JsD2UaXKZ9nyjPNqi2rvHmqSfSAdQL0CJuX76jSZ0TzIl0WiAx4FtLDd8lL0JX1cesOg13dnikbWJnc&X-Amz-Signature=c69416b0a8c468b6251861154c819073117ae1aa1f6d8fa2732d985b6b8f204a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXUGQTS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXnERAoAXIXokAnFgKL8jNV6mIZ0v3Oqds%2BhmhGVVfeAiAtyIa7bwuCyfQIeuR4g9tSyeWiwTKoRwRWv6T7GcAa6CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWKrze8QXwoIRq1fKtwDzZK3Pnrb%2Fzob1nbeQlzWZZ0BWp0Hz%2BCasEy4%2FW7U8u8skwT8qH5C82Cr%2B855dtZR2vGWGzO6PNcM5y68ym4CltcFCJnSiRHi9qtxTJr9RUHYZqTr5tJKmfSL63KkkDSMKs98aMgQtfm3WcP%2FYJg8qxt4%2FPsUxgvBMFBj8Bg6BCX%2FmxTFOT8kD5t82B1EnE8Je9aoNAdI4GYq7c8cdzm6zEm%2F%2F%2B90C9BVPjE2PnHUv%2FsApUEIhhDsLuv%2FOxD%2Fv1upz4MQHNEB%2BxMOEy73hHeAnUg3w%2B35U6RzmMZIkdmm%2Biujhxl%2FfkUmn9oE%2FptEmT7juYYJRotLuyArw6aUkpx3iofSCyn47bKusEZ3StczUa%2BXF0F8BpEazWq8J1GZK0RJDOpN1QE3rXJHFZBTOKTAVWbq%2B%2BGUVy1444TyGiZXBcmsopvwpWM7J6JQ1qMkeIYjWWLQQS3IfjTuLo%2FXox4gtDvvdHfGjqWPqz1817yWFoSpc%2FH78hY%2BRY%2B7GknYv3w1urMw8BpddrorQZES3sZoGj6%2FpT37%2F5EhQMcAoh3EmgQS5I0cP68OvrPOInH%2BMhiRtih0bT1Kn2h7GEX2mMAboPpRMR9WtOhIFZCKfg5wps7nggZ8lCADGZQPRG8wnpSxwQY6pgGKjKpIFGXDfCCjGEdlzy6TC9eA66ZwbqZ9wWZ9GJIdP6kfwtYlN0KbIj%2FOIQPUd0vHxhASF4%2FZ7L6OJiDpjz55XrjznnknuG%2F3jiKC38cKrXy5NH08aYREeYUm37lEuXO0P%2Fq0oJ6QFJgZoiVvwuyI%2BFj6coZFng%2BmD3snswTunpOLk6tLwkhL5xA9buQXzfx444cv37ohlcNDWqamwrbwRkuhOY4M&X-Amz-Signature=3da54317184c839b696c57d7f14982136ae41bb2597d04e181383b2dd4d2b7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHT74JB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcpDoPZZfk1xwpb2LYe%2Fly%2FTHeCBacNeq8m6OewOGj%2FAiBEXzsOTjALS0c6fsHwB4L1dn4M0RJs6HOLHazqPQvSZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfF9ejqnuR%2B8%2FS4iKtwDQ%2B7jq37XFXcIZXh1RBFusMC2MzPu76y0vg2HRPQrKJcTkYmmrFfIu70QCFhCdhogBBmL0MyEHaF0YuuF9%2B%2F59WhsDEvTEq0I00wbHsE1l2qfc16bBFvDRwB56BRgXVwiPJMGXLhQj%2BVyfOoXh7a7kUKFaYc%2Fsb2mzRucHOfZcqp9v7v4RMzsj%2BtNr8DiR1w19DpwWkdexsLRNXUz%2BIT8Eq6bkbgnRAEs0Ux3aX0OSO%2Bx4NXfk51YXbmiMu4qyHU4A6dnSdcg1kEJ0JpPpBpVKOtVApuntwO9OA99iJCrOe1ZrNQpDXPYbiKi5%2F4OwkmNtmspI0GZssw1632qLwLYZUi0LCGveN8FdhSlIp7SgWBu%2B2Wb0NxhkVTat7nryZL83PjF29Ff2ehI4ycqPFcoccQ%2FB4XwB7I1nsz2uJCIV9Yd1fL8zYZ%2FVjj8Q2LAcjFsAR9UxPwxGoAIzBYflhbTi8MFGRGmDlyOQaxOmyker76ZGH9CtagcAqy%2FUdtnRuOkEblR%2BRAhE%2BMrlKvy2bWVit1Whp1IVPvbTirJf2SVRXDQQPKxYohARST8Qi3tWKwY4VnY4WXwhhxammKJp%2B0sbe3VNY9KlPHQJOE6REXnTs39Lv%2FVk1l8LV3%2FpeUwopOxwQY6pgFoif7gsqXTV0Of%2F%2FEe4Jeur4a6D2J5TQT7m1X14BUa%2FBBtj%2Bm9iJrEkz58k5hgnX05w7Vs7WELI30PyjzNsv63OVxNSpWOE6iw59kE%2FeFdqXGCn3wjLs8NyCyRLBJ3%2FBDzgivkkCZLljTjHLwWNA5BIOvO3CNsJQLc4mWjxIf2w2IJR8vqMl5HMCxrJMrXlWVz12Qcm0kMqIFdqJfOmgrgI%2FY7sPkC&X-Amz-Signature=a829d574687b78d12cb884b4d25d7454617c1975d28de4a297c776710621eeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
