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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAKLVAZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrFo8PXUrRaJ9OUdog9TvNT2NmP6Z9VP5fm76IatpOXAiArETAq1XZJwrg05lnp4BHdP9g%2BI9d%2FKLPctvkKw8d9wSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNwo%2B7FLfv4dJ2T7KtwDpMdWXZLxtu71KGLlzDShQiogCbIkaDCp0bBc9QPVVdv3malBiZJWr%2B1NghO0IQxR6Swzv0RNjURvCl1hhLmcA4l7bxKJiJPp6wPD9Vm9Cuygi0Oo9TVQCS2Xafo%2FXKvZhy8%2FRwr2da1eoiqxpnwY7ebgBud9uEr6TKg%2BEKMMd5ffMSWBZUnAeK1rUKUL5c0Od%2Bhv6qmfrFZd0t15Rw6aKKQuJT8%2FbfV%2F3jBo0nZAlMTI3RhbU5cAtP%2Fe61GdgqRyBSafwnykDZDn2KN%2BT%2FQpAYE7HOsleQAQEmduBHxefCVWKa%2FHo12DbgY5VdxEtvGt4UEj4HsLX0gaNL6f86GW6GdYmsumFUoW18u7qAd3o2214S01BbvvQRd%2BBblGChp0yOwCFrleMAZAUOC%2BDGnGDIkSIC5vnfzSzYQKd4IEgZ6eZ5J17HEbLEPIukZuIoKiOK0VTOoSDiSFe9F9yFy2p4E5gdzHSBagAr7HvW0sBy9EpqFJ7nTxCkfD3pj8BXX%2BECyrlDru3SXFwnMDfQdqd56EGbae35ghCVHyESHiojl4weXqBL0CGuPV908wDYLIFvqeSZoA2Mmm4CHsp98%2F4bEiEGJr7ixPSCYjMffz%2FJk8rNN1dquVZDYHJScw1azcvQY6pgGjU%2FUyTdha1oCfMfGWyugyg15LEVFEqqlxX9vhr5ZvYuZHGJVO%2FWqa7ZXnOiE%2FuRfwA3SXg4inJESH0iW%2Fo5bShgiaHmQfBGqiZqUCG%2Fujt63j9tH88%2FxGsyBHYPpf5pcUES5kmhYu%2BFNznwPsFVcD%2Fdt7xkWWKs%2FtTMIkt1ypAV6qtffmqlkmnzHXY7rTyqO%2BbqGhbnw5nuWZekss3AYDAn2Rm7qZ&X-Amz-Signature=3166c58a542745db90683139e76fdf145865d2e1857e7550c3c54ec1a9ab6b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAKLVAZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrFo8PXUrRaJ9OUdog9TvNT2NmP6Z9VP5fm76IatpOXAiArETAq1XZJwrg05lnp4BHdP9g%2BI9d%2FKLPctvkKw8d9wSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNwo%2B7FLfv4dJ2T7KtwDpMdWXZLxtu71KGLlzDShQiogCbIkaDCp0bBc9QPVVdv3malBiZJWr%2B1NghO0IQxR6Swzv0RNjURvCl1hhLmcA4l7bxKJiJPp6wPD9Vm9Cuygi0Oo9TVQCS2Xafo%2FXKvZhy8%2FRwr2da1eoiqxpnwY7ebgBud9uEr6TKg%2BEKMMd5ffMSWBZUnAeK1rUKUL5c0Od%2Bhv6qmfrFZd0t15Rw6aKKQuJT8%2FbfV%2F3jBo0nZAlMTI3RhbU5cAtP%2Fe61GdgqRyBSafwnykDZDn2KN%2BT%2FQpAYE7HOsleQAQEmduBHxefCVWKa%2FHo12DbgY5VdxEtvGt4UEj4HsLX0gaNL6f86GW6GdYmsumFUoW18u7qAd3o2214S01BbvvQRd%2BBblGChp0yOwCFrleMAZAUOC%2BDGnGDIkSIC5vnfzSzYQKd4IEgZ6eZ5J17HEbLEPIukZuIoKiOK0VTOoSDiSFe9F9yFy2p4E5gdzHSBagAr7HvW0sBy9EpqFJ7nTxCkfD3pj8BXX%2BECyrlDru3SXFwnMDfQdqd56EGbae35ghCVHyESHiojl4weXqBL0CGuPV908wDYLIFvqeSZoA2Mmm4CHsp98%2F4bEiEGJr7ixPSCYjMffz%2FJk8rNN1dquVZDYHJScw1azcvQY6pgGjU%2FUyTdha1oCfMfGWyugyg15LEVFEqqlxX9vhr5ZvYuZHGJVO%2FWqa7ZXnOiE%2FuRfwA3SXg4inJESH0iW%2Fo5bShgiaHmQfBGqiZqUCG%2Fujt63j9tH88%2FxGsyBHYPpf5pcUES5kmhYu%2BFNznwPsFVcD%2Fdt7xkWWKs%2FtTMIkt1ypAV6qtffmqlkmnzHXY7rTyqO%2BbqGhbnw5nuWZekss3AYDAn2Rm7qZ&X-Amz-Signature=ea154aba13cba1cc6bc4c8a9eea6b62941555ad159afccd11863d9c3a03aa5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BISDNNB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG49rQB7ZuVGTZ2C3WmTGl76YZ%2Fd2C5FOQdOztNIlpm2AiBQl35%2FhbCYgZ2JEVEYNlfaHhFns6YWoS74RO9yrRDuuSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlUAYmwlxoKQgej%2FpKtwDy8Vx9AJG7wyn%2BZUkaTxMoIEnzWF0SOCApVhXnqjRuqO1%2FoMUJ8sCxVvsDQhKclLI%2B0p6FII2LniFOFKlMvWOIUtPhAQrDsh8puMqKtQrTNIShij5eMuMMDFhsr1vfButihA33BTN3gqEPhzWAJwalw%2FOqQV0TtsRloWvXvZBchn4wKivUqKu%2FNDlhLIxPKkYLjBWivePMWhXiMGuEYjdNLYWTASx0ek4qNMWGYk7vP%2Ftu%2F44zhDRw8PBqWKmcEmCexh87Hd%2F1PDLr%2BUYVtEnJq%2FwYYexd1vMbAPm6IRZifrEWtR%2BSMnGCynSsIzqJ%2FRhOem2t%2Fdq6Zkgxciw1v74HzvJ0fA8bXqQVcRBNR8dplaBa5oAVQ1tlb9mPscC5X2PCBGsckVi%2F7DlUaWTuV3WJ29YI3FjXiIk60d3w68Zgogp3DMSDQRmioYERKdNPOdyR1OQx9ySfD8sdkLMKg1TGl5ZjtpTt%2B0gZn8y4KLx7L8CzNNmpCBXQpoxq0A5QzQB7Agu4Sc9k%2Fukg7B%2B3sTFkDWeC47%2BCYWMUJXseEetGRk7joKTHi0ejhTqM8uqxgpvkd5QA8geqK27R7N8wdGBbpk2QiQrXDLklVqNGVWFlGp3nwyyx%2FS%2B7%2BpB9Y4w9azcvQY6pgFCC5eawxwXNy58bqFHTwJQoMZ4KWHF91ahvMzDkWB3HFIf7DEkd41Hjs4iFK%2Bkd8MZXtBjPG8sSa4NhRSvP1WvomjmznoaAPoMUpWxh4QSMw461k6VI14Swf5owIAnQcoquM6hohL4PJ2s6gIsddDqFXAAGcYiqzZx2P25tnBaC%2BUOq%2BHeFcwii05U0jCQC6ICVh4ZpMh7QDNs9zHvMKgYL7y9nL7Z&X-Amz-Signature=3f1559274f62f12271cfa2c2936fba0a314a055ce3020d926d7a3e6292763dba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIID377%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuow5RrGvcK%2ByACysAnNeYiwVBXmYhZhgBYVj4oRf4sAiAfhgdBtrFSPw63G59SqUCMGc4mk1niIlU6Cso%2B8q%2B8ViqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW0UvvBOa0GdLP9SKtwDVgV%2BblzidPNO0zZw8r6vwL%2Byyw83ytatpbJidyieLaRK8mEA9DweFUKgy5%2BqBW4K7qjNa48YcC7lAnJ6HbBz8wClRaIxbO5kRcpbBd96BhhN%2BSpNqNQjaP8KLxXfBNnpubajjt7dCZSiEqihhIkdg7db4%2Fncny94qYSd%2BGP2YVoQ%2Fjia8AhlfyfxL%2B4LMgGIj1zEXmc5kWdOV1ec7PlsB07PBOycI2JgB2RKaZq1MZiXnjRW%2BK5Fz2Ytoz2AXNpoNIplD8MKvsjRrLVNNzScjEfp28j2wxALZhO1%2BVfBUOdvDSxwxuRYQP9x4TKBATfP7Ti7rnO4f17c4nDVU6oTOaQ%2Bb1zKMNAUtsZNBRjW%2BVGp9nj6Oci9pRZtG5J3wcgb96MWHsOuRVYMaDImbfb0TViA7uwg4psAqRxNd0OGDo1SDHyCDOAFhvIZ%2BHhdoakfsZg9awPbtk%2BOdkPpKK6al3EnK6ZP5QqIHnZfcgkmN0IxssCnlMCANFCAiWCvwvFQwrny%2FUabT2DtkrL1JSbSxB%2FfLsDfu%2F71jB6MbXY6h1ynvbdsGOn1oFl6d53GqyrYTdvGqF60k5Buc4RtTvKieJqpolJbO%2B3CE3nMXi2Djof0Y93dRcZFlbsc5JUw%2Ba3cvQY6pgEuCAXfTVahMGTbX6MErOO89b4P4GIPE6l7fH3qLGdBrB9vyxUQ8Ml0usWign1J6rb8VNTnI84ReAwxHC7xYO2YxhgZgkj6zGBtAtHwp7uZ2dJhNbP9vCS216VJFWfVeAVRAd%2BYMVeW5JdqMuVNMAJ0pIKYX24qtVczmUDP31Sx9UeE1cB2Ug9ZiUjT6ttnwXLWBZR9LgscRetlGpHvtNnmaumCqPYE&X-Amz-Signature=38f0471cc799b0a8b8cedfcb15c617d9f716ff3f7e203ddcb670376c62df71c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAKLVAZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrFo8PXUrRaJ9OUdog9TvNT2NmP6Z9VP5fm76IatpOXAiArETAq1XZJwrg05lnp4BHdP9g%2BI9d%2FKLPctvkKw8d9wSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNwo%2B7FLfv4dJ2T7KtwDpMdWXZLxtu71KGLlzDShQiogCbIkaDCp0bBc9QPVVdv3malBiZJWr%2B1NghO0IQxR6Swzv0RNjURvCl1hhLmcA4l7bxKJiJPp6wPD9Vm9Cuygi0Oo9TVQCS2Xafo%2FXKvZhy8%2FRwr2da1eoiqxpnwY7ebgBud9uEr6TKg%2BEKMMd5ffMSWBZUnAeK1rUKUL5c0Od%2Bhv6qmfrFZd0t15Rw6aKKQuJT8%2FbfV%2F3jBo0nZAlMTI3RhbU5cAtP%2Fe61GdgqRyBSafwnykDZDn2KN%2BT%2FQpAYE7HOsleQAQEmduBHxefCVWKa%2FHo12DbgY5VdxEtvGt4UEj4HsLX0gaNL6f86GW6GdYmsumFUoW18u7qAd3o2214S01BbvvQRd%2BBblGChp0yOwCFrleMAZAUOC%2BDGnGDIkSIC5vnfzSzYQKd4IEgZ6eZ5J17HEbLEPIukZuIoKiOK0VTOoSDiSFe9F9yFy2p4E5gdzHSBagAr7HvW0sBy9EpqFJ7nTxCkfD3pj8BXX%2BECyrlDru3SXFwnMDfQdqd56EGbae35ghCVHyESHiojl4weXqBL0CGuPV908wDYLIFvqeSZoA2Mmm4CHsp98%2F4bEiEGJr7ixPSCYjMffz%2FJk8rNN1dquVZDYHJScw1azcvQY6pgGjU%2FUyTdha1oCfMfGWyugyg15LEVFEqqlxX9vhr5ZvYuZHGJVO%2FWqa7ZXnOiE%2FuRfwA3SXg4inJESH0iW%2Fo5bShgiaHmQfBGqiZqUCG%2Fujt63j9tH88%2FxGsyBHYPpf5pcUES5kmhYu%2BFNznwPsFVcD%2Fdt7xkWWKs%2FtTMIkt1ypAV6qtffmqlkmnzHXY7rTyqO%2BbqGhbnw5nuWZekss3AYDAn2Rm7qZ&X-Amz-Signature=5cdc65b5f9b26e480ef5de2a748fa05107dc1392714871e8c941971a5ab24c49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
