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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667367NOMW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJYYD6Y2aoHiSvLrlvxL9zqwJTzRBCuZ9FeLAlGXDslwIgepmX79RH0wOPA29Lta63k4%2BaEaWdWRKlu1MWOZ0oDxYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPMFHAvf%2Bn7%2FBzhFCrcAzLio6dVp45zSqmsOuqKipv4F19GECACBssmByyYTlqRLRF3rGYO5q8w7Pu24dej0YPwZVIC6k1%2F3RxAwpva2Es9q7MVp5QGzBritVjH1ndF2fKsaIlQV3NJImNEa63Zt1DFgTtngzGlkEB2Dv6UPHeA5RhAXdRyy5fCUQ3703BM%2BfODc5TzdTaLHpzFk88NKuHTLSrAGVEtYphHuSO0JR6NZ%2Brt1e4jz2gacehFOke4I9yiW2p9R%2FoWhGrhWBYQr7a5bRXXcAgKP9xCvAyXuNbHQIt3YUW%2BobwQcFmrDU4bIpqEXP1dMW0%2F4gEHMnIxOUcBjvCT8N0860ipJItGIMv%2FdvNI9a7C8a9U0Ea%2BL6azysQtdu8fOUvI1OjEdd4jHs39h9i0JS%2Bu%2FxT7wYRxuB5Q0MV5HLlNidbTfFhQl4fGtSQ337lejspin2ZcAfayYQoN2MiTQbzdqQlHv7yDvQfx7mx3tmGLn1Ta5NCGuc5Uj%2FzlvL9Ema8jVC3dTRE1P9mykGBQtrwEzfwqSOzLrl6aW52JB%2Bp8ZklTslUlaJ%2BpP5M6wp7wKAGYZtscu3%2FgetpkcyXhpDxzfdSvZkfIGAWv%2F8cYlbZSdfKlvQAoiR4qu%2F8aCy7xDuT5Gyf%2BMN%2Fhmr4GOqUBNxVw8NjUFywQ5i%2Bxjtc52kD9ZICT8qmGzW2CIjZMiJwDkJpSXJZfNNUGyidhDiqvpxPbzdxMoLMSm4buUBnMNm63gSNhLLd%2BjWVNMBSqS56%2BFLiFLFfpv24GT6mG3IT3217vUL4PgKZDxAYxCXjlmcRzp3Z9GZPNzphqS%2BXgrz096evOTsD3L9rAUEueg2cFA2R2hR4rweSgcMOaqsuIqeTggUGW&X-Amz-Signature=b39a64c840dbd444b0cda896561b23dd2afe214fbd47bafab682bc924aab6c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667367NOMW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJYYD6Y2aoHiSvLrlvxL9zqwJTzRBCuZ9FeLAlGXDslwIgepmX79RH0wOPA29Lta63k4%2BaEaWdWRKlu1MWOZ0oDxYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPMFHAvf%2Bn7%2FBzhFCrcAzLio6dVp45zSqmsOuqKipv4F19GECACBssmByyYTlqRLRF3rGYO5q8w7Pu24dej0YPwZVIC6k1%2F3RxAwpva2Es9q7MVp5QGzBritVjH1ndF2fKsaIlQV3NJImNEa63Zt1DFgTtngzGlkEB2Dv6UPHeA5RhAXdRyy5fCUQ3703BM%2BfODc5TzdTaLHpzFk88NKuHTLSrAGVEtYphHuSO0JR6NZ%2Brt1e4jz2gacehFOke4I9yiW2p9R%2FoWhGrhWBYQr7a5bRXXcAgKP9xCvAyXuNbHQIt3YUW%2BobwQcFmrDU4bIpqEXP1dMW0%2F4gEHMnIxOUcBjvCT8N0860ipJItGIMv%2FdvNI9a7C8a9U0Ea%2BL6azysQtdu8fOUvI1OjEdd4jHs39h9i0JS%2Bu%2FxT7wYRxuB5Q0MV5HLlNidbTfFhQl4fGtSQ337lejspin2ZcAfayYQoN2MiTQbzdqQlHv7yDvQfx7mx3tmGLn1Ta5NCGuc5Uj%2FzlvL9Ema8jVC3dTRE1P9mykGBQtrwEzfwqSOzLrl6aW52JB%2Bp8ZklTslUlaJ%2BpP5M6wp7wKAGYZtscu3%2FgetpkcyXhpDxzfdSvZkfIGAWv%2F8cYlbZSdfKlvQAoiR4qu%2F8aCy7xDuT5Gyf%2BMN%2Fhmr4GOqUBNxVw8NjUFywQ5i%2Bxjtc52kD9ZICT8qmGzW2CIjZMiJwDkJpSXJZfNNUGyidhDiqvpxPbzdxMoLMSm4buUBnMNm63gSNhLLd%2BjWVNMBSqS56%2BFLiFLFfpv24GT6mG3IT3217vUL4PgKZDxAYxCXjlmcRzp3Z9GZPNzphqS%2BXgrz096evOTsD3L9rAUEueg2cFA2R2hR4rweSgcMOaqsuIqeTggUGW&X-Amz-Signature=9527e5b1e602c9352b1daf2560c9259200fc404368e1233fd5bbf2f200bf8141&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U2MVCP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH9eWEHzFxP%2FTtdOyspSKkzv9xoVJlvhivISLSkcXKpQIhAIrJ7gCUO%2BVR9emUelmWvauKQW7v25Jv%2BAK895GoHPHbKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV%2BHGGyKqs8sEBRnwq3ANLFtXB%2BZ1yQvVGLcro%2FBC1O3TuC8rFK64ZT9aXkTdDr1%2B9PqXD5W%2FF0zHG5JVPps4oBzf6xRFdL0sZej0su0aYC%2FL6pas2sgLLbc8%2Ba%2F3l%2F%2Bsc%2BoVNFDo%2BlCNAach2aJt5qYO3SQ%2BZf54m9q%2FwZAdbnUs9k8E8BJVklTWAlBWWQ8fOH4JEO%2FJkrRyvDx2vgp%2FyrVVCQ8LkZIeCtqi%2F%2FVCrb5piC%2BVNaTSM2piI%2BKz0MUdSXY3obapzmDDZEN6s%2FpeM3gLNNAnbW%2BXf3hBIyGCfcXR5O8sczloh2kJAUxP80CfZvMBBf749R29xgKsBT1Gljjrv1qISoB7xQgxqice8XWKO7VJROOHW8q980USilPXczliWCoW6%2BD9OR0o5ucYqzuyWpZ%2F7K3cHIw8azaGkGYQOvwhlF8R%2B9st2NJcIN%2FLiYBXZTKasg65dzxdLeG4k2neZDl596BHZGPJb0K9j2ndG5YzRYC06%2F3wasdR77nlsDPPlr2CzBNpLEyKuGN8Y6iJolyIe8HQG4nZDWpqlWGy6lKkwRbbdineVU23bGAx%2BlTBsGrmepoKn6N%2FOmI2lDigPhDglFywvHhqHyE4aWWPjuP4kNflXZjSUhwhtOeGTyA0BQNV8AWUvRzDO4pq%2BBjqkAbuDFe0xDDp1tvclJqd8UtZQDwLkf3V8n0qRlkTbtZ5xNZrJIinr2NOV6AKG%2F5iX2fEctV8Ierl8nfbJQzNCq3Lbj%2B%2BFOoY4FPyEe8td1FVHkIjmVma2OaZ96EmxqIBjlHkH7S9HZzMv0I95jORzz5CZLlGWeUE6rabxx25Hv3kZDq%2BnfQ9W%2BqDsovoX1ZIZCBo8MVUTc76kxryVdIHflW1WwbLh&X-Amz-Signature=ffc4a77b70dff9ac4fd3930efcc4a89359b3309ced97081a12dfa5f3b4e40338&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLOL7D2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu7JcvpFG4dpRZq0XD4IukaIzRSrbQ6c7fzzNI8CktjAiBmiOxnDlI0z33riiycXd7caYaEn3ndaMfOW2QNABZF9CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cm0g1tF88BDFT2QKtwDQNbDlCAvSq33qHwyeTXm0o0GKcNxQ34jcEzZurYJfpxm8TcD8bq442kTKWa2vm1xu8uICR%2BB0miyHQhZM7rNLnwTLYnusPtpyeF7DiFfOt5HKlVFsbT%2Fwo%2FlxHQHwDij8A9z9vwEf8B6lN4gYyc7oQSBQ8ozyXn2ROBiAX11gd6n4PNPks90HzXOILF8x452XfcxtMU7B5U3tu479D7keSGQZ7Ki83pduPPT4ma92IW%2Bbso2p6bM%2FsMDsweao7dcTYqMFhvpqoFdNnZAm8Ia9qWX3XaR%2FZgGEFTQA%2F4QPC2H0%2FDmoUL94BL33O2ccpVMADQ7qyO%2BSSPZsibUWDMqIciLyKhfITPU2R6OkmQ0H2t1K%2FJcfK%2Fwap20NW%2FH45SzucbVU64FRV3Cl9X%2FszmjHqJKfD7jIuNGbSulq35RlxtmRakZsY79GYsi0SnHMrAGIBBelsMWRdx1AX%2BZUwTGjSoKqdN6QQvjm0Tm2MytacyRRFNPTtrVXA4nkaMHgEfl5HZgXLRhR%2FYbnkWaONqBp71wzy33SXLbLn7CKCMA2aCUORRAIDfpNizUZ9nTWvjKCDlaQkTiNz7bCwhcygbpQj3bpxa4w6OkybxsOWcjkND%2F5r5eHR5BpRlVzjwwiOKavgY6pgFybQCvBaJPclclQvfkhbeBje%2FugQFOsKjHkFCbkxOcEAJFlk1e9VoLg305BFuB%2FCkCkEnm8AM%2BoyN27AtzPNUZqYyYfuObzo%2FJQWdZc213OxCmrP2C6TqOwBTRitkt4JqVVlNNRSxHmd8A2MdLikHNCDVnkbu7E5CXOuAlvRd%2F7YTkna5dON8paBgey0nlezxXK2dlTkBi1GNiAUBLAMOV62nIhnNS&X-Amz-Signature=e0a36b6cfc9f11e7bbea2468aa5005420c691f2b67fbca8ec00064983e152da5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667367NOMW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJYYD6Y2aoHiSvLrlvxL9zqwJTzRBCuZ9FeLAlGXDslwIgepmX79RH0wOPA29Lta63k4%2BaEaWdWRKlu1MWOZ0oDxYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPMFHAvf%2Bn7%2FBzhFCrcAzLio6dVp45zSqmsOuqKipv4F19GECACBssmByyYTlqRLRF3rGYO5q8w7Pu24dej0YPwZVIC6k1%2F3RxAwpva2Es9q7MVp5QGzBritVjH1ndF2fKsaIlQV3NJImNEa63Zt1DFgTtngzGlkEB2Dv6UPHeA5RhAXdRyy5fCUQ3703BM%2BfODc5TzdTaLHpzFk88NKuHTLSrAGVEtYphHuSO0JR6NZ%2Brt1e4jz2gacehFOke4I9yiW2p9R%2FoWhGrhWBYQr7a5bRXXcAgKP9xCvAyXuNbHQIt3YUW%2BobwQcFmrDU4bIpqEXP1dMW0%2F4gEHMnIxOUcBjvCT8N0860ipJItGIMv%2FdvNI9a7C8a9U0Ea%2BL6azysQtdu8fOUvI1OjEdd4jHs39h9i0JS%2Bu%2FxT7wYRxuB5Q0MV5HLlNidbTfFhQl4fGtSQ337lejspin2ZcAfayYQoN2MiTQbzdqQlHv7yDvQfx7mx3tmGLn1Ta5NCGuc5Uj%2FzlvL9Ema8jVC3dTRE1P9mykGBQtrwEzfwqSOzLrl6aW52JB%2Bp8ZklTslUlaJ%2BpP5M6wp7wKAGYZtscu3%2FgetpkcyXhpDxzfdSvZkfIGAWv%2F8cYlbZSdfKlvQAoiR4qu%2F8aCy7xDuT5Gyf%2BMN%2Fhmr4GOqUBNxVw8NjUFywQ5i%2Bxjtc52kD9ZICT8qmGzW2CIjZMiJwDkJpSXJZfNNUGyidhDiqvpxPbzdxMoLMSm4buUBnMNm63gSNhLLd%2BjWVNMBSqS56%2BFLiFLFfpv24GT6mG3IT3217vUL4PgKZDxAYxCXjlmcRzp3Z9GZPNzphqS%2BXgrz096evOTsD3L9rAUEueg2cFA2R2hR4rweSgcMOaqsuIqeTggUGW&X-Amz-Signature=a9240540c7a8377e6adda0db5114c245b6d225d66e24acffec49dd063caf3ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
