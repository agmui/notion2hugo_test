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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBDQ6QU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bo36UwRAq20eWpuSJePrkfvyv%2BGSvYWVfamhmOivuVAiEA7JDkRLCT7lRLzvk93QbrmLqreJv0pugepErZmNahnWsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8VpGn8yr5anRtZZSrcA8J3pGhUo4BVwUVQ0sdLhdw98epBMHRS4zOqGJY2PUR4KvRXImT76ZNSf92IF%2BbPIu7BgGVf2hiKx%2FeXa2Sq7MDdOImG%2Fpbq8rc%2BqOO9fgGxRo%2B%2B8cfppIA9S5mtrogOIW%2FSyRqWM1nj6ZMPZQ5xjCGlP134D8ngQGmbbtWIh1WnDUX8Jt1fnEYDC4kB0QnbiG%2FXA8HbwtxGYtx7xIwjQbZOFeIWH3%2FqohLWKsdcJnkfheBEztMQ4R3%2BWfU1KQjDOMfmSqPlr%2BZ2Aql3hgU4nz8vvQWzAMcBSzFM%2BQ3hLBkzwFGnJ1cAM%2FUpXqD%2BN1qJrFAImpAmWs%2FExu%2FBgG5thO7muaFikjTBCE0Uzb%2Bc2fmicGgiyNSE2SFWlN9MVqDGr8uondfzH%2B2tI%2FlsAqWfBGfmN7GwH9%2FbbU7UvFcEEbcIwJrgMbYkoHpsWx6xeOs0kqKdl9FATYdbzBi%2FOQ3jVlZRydbLOjQqMek4pj5v1UYaaj6ncyWRsLS0fRu0AqNFylITz%2FJT63AlGDSS4Jaz23SRPBs4v%2Fy9el3Vwi%2FjPoOljd6CQGDpp869qG0ICZc0E%2FSlgj%2BC3p4%2BRXy0Os%2FXDggbu8hGuJQnIBLaQ7mWChwIBTIEd4YhZaBiWIy4MPul6MEGOqUB%2BR4tZOdivQiWaaiqurc0yUgYM7UkAmZyRh8VybZ1qXqglgjIQAf%2BlWEjvovB%2B51TFbF4SKuzTsroXMXtimEpN5ZS0oabbSzxMFESA%2FWMlbN8aEtSfdyuc4%2Fr%2Fv26xtV4g4WTqjK%2Fdaxs1PMt%2BRLdUnWFqra1VHOCWiwBXjM8Jv8ziS9tMTZwnljk%2B22aSM3YH%2B5KZM8DQA2n9UE3qFGvjIcMsa7N&X-Amz-Signature=130926bd873392811a9ccf3aa3397274d2078f1f2c8715a036c28495c58e6020&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBDQ6QU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bo36UwRAq20eWpuSJePrkfvyv%2BGSvYWVfamhmOivuVAiEA7JDkRLCT7lRLzvk93QbrmLqreJv0pugepErZmNahnWsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8VpGn8yr5anRtZZSrcA8J3pGhUo4BVwUVQ0sdLhdw98epBMHRS4zOqGJY2PUR4KvRXImT76ZNSf92IF%2BbPIu7BgGVf2hiKx%2FeXa2Sq7MDdOImG%2Fpbq8rc%2BqOO9fgGxRo%2B%2B8cfppIA9S5mtrogOIW%2FSyRqWM1nj6ZMPZQ5xjCGlP134D8ngQGmbbtWIh1WnDUX8Jt1fnEYDC4kB0QnbiG%2FXA8HbwtxGYtx7xIwjQbZOFeIWH3%2FqohLWKsdcJnkfheBEztMQ4R3%2BWfU1KQjDOMfmSqPlr%2BZ2Aql3hgU4nz8vvQWzAMcBSzFM%2BQ3hLBkzwFGnJ1cAM%2FUpXqD%2BN1qJrFAImpAmWs%2FExu%2FBgG5thO7muaFikjTBCE0Uzb%2Bc2fmicGgiyNSE2SFWlN9MVqDGr8uondfzH%2B2tI%2FlsAqWfBGfmN7GwH9%2FbbU7UvFcEEbcIwJrgMbYkoHpsWx6xeOs0kqKdl9FATYdbzBi%2FOQ3jVlZRydbLOjQqMek4pj5v1UYaaj6ncyWRsLS0fRu0AqNFylITz%2FJT63AlGDSS4Jaz23SRPBs4v%2Fy9el3Vwi%2FjPoOljd6CQGDpp869qG0ICZc0E%2FSlgj%2BC3p4%2BRXy0Os%2FXDggbu8hGuJQnIBLaQ7mWChwIBTIEd4YhZaBiWIy4MPul6MEGOqUB%2BR4tZOdivQiWaaiqurc0yUgYM7UkAmZyRh8VybZ1qXqglgjIQAf%2BlWEjvovB%2B51TFbF4SKuzTsroXMXtimEpN5ZS0oabbSzxMFESA%2FWMlbN8aEtSfdyuc4%2Fr%2Fv26xtV4g4WTqjK%2Fdaxs1PMt%2BRLdUnWFqra1VHOCWiwBXjM8Jv8ziS9tMTZwnljk%2B22aSM3YH%2B5KZM8DQA2n9UE3qFGvjIcMsa7N&X-Amz-Signature=8f8307ac378d5ceb70bfe80ae72d00593b00eecea111e699f42196be1ee7de50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBDQ6QU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bo36UwRAq20eWpuSJePrkfvyv%2BGSvYWVfamhmOivuVAiEA7JDkRLCT7lRLzvk93QbrmLqreJv0pugepErZmNahnWsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8VpGn8yr5anRtZZSrcA8J3pGhUo4BVwUVQ0sdLhdw98epBMHRS4zOqGJY2PUR4KvRXImT76ZNSf92IF%2BbPIu7BgGVf2hiKx%2FeXa2Sq7MDdOImG%2Fpbq8rc%2BqOO9fgGxRo%2B%2B8cfppIA9S5mtrogOIW%2FSyRqWM1nj6ZMPZQ5xjCGlP134D8ngQGmbbtWIh1WnDUX8Jt1fnEYDC4kB0QnbiG%2FXA8HbwtxGYtx7xIwjQbZOFeIWH3%2FqohLWKsdcJnkfheBEztMQ4R3%2BWfU1KQjDOMfmSqPlr%2BZ2Aql3hgU4nz8vvQWzAMcBSzFM%2BQ3hLBkzwFGnJ1cAM%2FUpXqD%2BN1qJrFAImpAmWs%2FExu%2FBgG5thO7muaFikjTBCE0Uzb%2Bc2fmicGgiyNSE2SFWlN9MVqDGr8uondfzH%2B2tI%2FlsAqWfBGfmN7GwH9%2FbbU7UvFcEEbcIwJrgMbYkoHpsWx6xeOs0kqKdl9FATYdbzBi%2FOQ3jVlZRydbLOjQqMek4pj5v1UYaaj6ncyWRsLS0fRu0AqNFylITz%2FJT63AlGDSS4Jaz23SRPBs4v%2Fy9el3Vwi%2FjPoOljd6CQGDpp869qG0ICZc0E%2FSlgj%2BC3p4%2BRXy0Os%2FXDggbu8hGuJQnIBLaQ7mWChwIBTIEd4YhZaBiWIy4MPul6MEGOqUB%2BR4tZOdivQiWaaiqurc0yUgYM7UkAmZyRh8VybZ1qXqglgjIQAf%2BlWEjvovB%2B51TFbF4SKuzTsroXMXtimEpN5ZS0oabbSzxMFESA%2FWMlbN8aEtSfdyuc4%2Fr%2Fv26xtV4g4WTqjK%2Fdaxs1PMt%2BRLdUnWFqra1VHOCWiwBXjM8Jv8ziS9tMTZwnljk%2B22aSM3YH%2B5KZM8DQA2n9UE3qFGvjIcMsa7N&X-Amz-Signature=bc855196f1c0cf2231b4b3b2c77d96733175a86f755d9b10b10b29bb7b3f8ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS4WDDO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4ThO2DF%2Bzd0z0A2vcrFoYwqm%2BXMaTk7XUMYRg9QVpAIgWJGd99mKt1JdGjzJ3%2BIA4pjfHmvE7fkfU5wjHxAMKDYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrDkgG2VHa7v%2BOrDircAymdf11yRmKeBjM2vZnvTk9jSBUUd309AliaaBzn1dBYnvX0TuhfvNiruwoCFIaMGB4jvz%2FUofRGmde7ueUmSf67T8c75diGJUDvGGrPiSXp6dC31Qk8eWZq452uH%2BGufT65DoTztNgcf3RC9%2BZk6rVgwmcBZHQ5hMgPvFpBtFH9DVlG7CQ2USmzOF%2F7tU6P3eNfpy14wypYI78InzzVTjUnv1ip1c6oUdsJISV4Xl6PnIAO2iaidiHxsvWB2hJIYG4aKhQA93eekPTauusXKEXwzWJeKLEBPZGw2QALP%2F%2BRa%2FvmE2pBaEuZ9S7vSyTTbnMz64fS%2FgwMtqM2ZF22R35yB2POGpyaFACjkXNRwn4xUTB9hMow%2Bdv1r%2BvdKJVJWHG7va2ZyQRzwn3TUqPh05XS9tCWqzCdHwoql0b8yqJ8voR9op52y3uDXKI98XtuVAVhznK1Qsskhkq8cftGY%2FFgcsGIML1m4kD4Sy%2Bj2uNy065cOAHDuX%2BNvw9z8JLpQGQJQ18d5yBBzwBg%2Bv6tlQuBo74LQM8G%2Fr5x%2FdrTykzIr77UnKJdA76SHrtDYfxO6TudrBWgyyb%2FKvRUTsKu6HHK0%2B%2FnT9o6dLbmVSTUwaYlC1WxGiwPsWJadL46MP2l6MEGOqUB4y1TBGsh%2FXCSJhJjsK55asiGju2mHtdHclABdr0IK1eWVUWblIuql9uM4iTnnSUeMKnO0DVSKn2%2Ff63mxyMn2GpKZKdQd%2BAfiaDSICTx7IlbkDxY%2B4UpSQHo1ZPNBi8Ik90K9K%2BYKD2kXYQYEmQn%2BLr37QfJsNzemh9EKpP5Lc6j0wjYEAamOYSahTYptY5Q2DRnE4bnrF11PoqAsnyF52lEIzGR&X-Amz-Signature=46550284d70472553696189262376c3e5782f389d25579b674d639500f92808b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVQFGSF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy%2FbdHFk6g6xtaGS9tEE3uqOP3Py57d5WWZgvz1vOR4AiBoYF4e%2BEZHupAplOUiuvRyhLIJaNKI417%2BTgaA7AprEyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhRmxnLrmtZGr7MUKtwDpYnP0kNYUMeZhtQNIVpaBpuaVjStlMc0c5lvhf4qidviFnfhDqiOYtIlLvOaM%2FWOl11vCvgn0XrzDPQeiSqzAPsOdMn1YuD6w%2BY12OuzPj8SPGf%2BMnRW7gqeT8EbQQTIxOEHzBz9zVi7QMrYo3e5B%2FU%2Fra%2Bbdv8SGK7C4%2Flc101fOCM8rOjUoOTnfo0dNHMSZ2oicwP4fE3XD5ghIUW0R7oWClkMRcPRmHreGzbNYpjfwAXrS1Rn3G9WJQg%2BLp%2FFlRBLxiq3Nrpx9Nbaye2DMHv2qQXNx3HnH1PJIvEmcIE7zGwlKANzTSCDSOPJNQWZe08%2BsfmxBWmBOJ%2FEUGyzqSOkK1rzZxoVtvLyyU9LKEPO64wOSt4bsDdvjX%2Fq%2BoYQy2u6NoiWH7gcihvbp0A%2BjmfdDcEjVCfokHmidcbwD6dZ51sP%2FBZRbVvVg6zMKMtc1GQEGBilcz3Cz3wEgjYVBhiMq%2Bn0Ai1%2B89eDjzEBUFwcADgUcamhLBGuw3L4tUOgZimWpsiKEEvfEj%2FjTQ1Q6Pew4jgGOwRu6NngJQ2XOPFJdJpDPPfwFXLLDR9ZGJMOjaTskOBxF3hi3G87J5x6UNacS2yRuLGuFmt3%2BdnPXok1hSi%2BsMRK8rzVjjcwmKbowQY6pgEBqwvHiTZl2IK2YA8PM5qT%2FTMHwVZKu%2BhFZsN4vIUCX4hCM2LXqLHleFJWinnVP928Rco4Pqfa92%2B%2FKAEPcrhqM%2BV8kz5vDO0F%2Bc8X1TrAPYC%2BZkIC1fNnZiC0Ii30fidLCkxhGUutJUPMOHPwnerC%2Bf%2FpwKGwTcOK4%2FMfM3Kr5d63qjXxXTzK5nwYPhhHmZfDCpQqlLe%2FaNjGrCh%2FNnEblev9Xy8f&X-Amz-Signature=4dd851cb6c1c92d608d1c741d396a85806b673d975b3a45b1417ea3d12ced124&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBDQ6QU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bo36UwRAq20eWpuSJePrkfvyv%2BGSvYWVfamhmOivuVAiEA7JDkRLCT7lRLzvk93QbrmLqreJv0pugepErZmNahnWsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8VpGn8yr5anRtZZSrcA8J3pGhUo4BVwUVQ0sdLhdw98epBMHRS4zOqGJY2PUR4KvRXImT76ZNSf92IF%2BbPIu7BgGVf2hiKx%2FeXa2Sq7MDdOImG%2Fpbq8rc%2BqOO9fgGxRo%2B%2B8cfppIA9S5mtrogOIW%2FSyRqWM1nj6ZMPZQ5xjCGlP134D8ngQGmbbtWIh1WnDUX8Jt1fnEYDC4kB0QnbiG%2FXA8HbwtxGYtx7xIwjQbZOFeIWH3%2FqohLWKsdcJnkfheBEztMQ4R3%2BWfU1KQjDOMfmSqPlr%2BZ2Aql3hgU4nz8vvQWzAMcBSzFM%2BQ3hLBkzwFGnJ1cAM%2FUpXqD%2BN1qJrFAImpAmWs%2FExu%2FBgG5thO7muaFikjTBCE0Uzb%2Bc2fmicGgiyNSE2SFWlN9MVqDGr8uondfzH%2B2tI%2FlsAqWfBGfmN7GwH9%2FbbU7UvFcEEbcIwJrgMbYkoHpsWx6xeOs0kqKdl9FATYdbzBi%2FOQ3jVlZRydbLOjQqMek4pj5v1UYaaj6ncyWRsLS0fRu0AqNFylITz%2FJT63AlGDSS4Jaz23SRPBs4v%2Fy9el3Vwi%2FjPoOljd6CQGDpp869qG0ICZc0E%2FSlgj%2BC3p4%2BRXy0Os%2FXDggbu8hGuJQnIBLaQ7mWChwIBTIEd4YhZaBiWIy4MPul6MEGOqUB%2BR4tZOdivQiWaaiqurc0yUgYM7UkAmZyRh8VybZ1qXqglgjIQAf%2BlWEjvovB%2B51TFbF4SKuzTsroXMXtimEpN5ZS0oabbSzxMFESA%2FWMlbN8aEtSfdyuc4%2Fr%2Fv26xtV4g4WTqjK%2Fdaxs1PMt%2BRLdUnWFqra1VHOCWiwBXjM8Jv8ziS9tMTZwnljk%2B22aSM3YH%2B5KZM8DQA2n9UE3qFGvjIcMsa7N&X-Amz-Signature=def2e1dc10b7c5954a20512ab9250a6e4f6ebf9692d004cf2fc665a232ac86ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
