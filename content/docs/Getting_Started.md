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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KEFZST%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxIxgQ2O1EaRfXMlunvbcXS7Si8N4%2F%2BRkLW0arw%2B1e2QIgMnLDlnegq0bdjx%2B9DAVbUl6Yq2IQL%2FYeDqI%2BxoR7AuIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD96BsgwY0COUROSgyrcA5qR60UtJKy3lIfblcuYkiF2nG0QsWtO8hhEd3MLHwqoxZbcmiADJ2w5i1V6pLHz9dOWBt8o1cb5IENPFkr4AfICJ%2FRbuAMYHirG99jkgmApeZ8kdSeudC3xcWvMLcNvztVhRtM143mBxLXYvS4ynAVOAT6efQj%2BRGy5XTqI%2BTnRJ2GupiMq9GAPYPXipOXdKdc4xmuHba7XFn9NZ0DOF5c33yIg%2FR9pw%2BL0c95hmQDABjT2OsgfOE%2BTWwZfMlhnrl77wXsm1oRzt0NAcByEB3qYHV5KtGGJp%2Bdfs4GPL%2FjE4KyJ%2BcpNj1%2FKoE%2F7d0smFhgqJM%2B3QaI0Mc4OksMuM1drPI1TkHfwt5YmFm6ZzKX6PBAvl04%2FzDMbJ0KCtqIXuWRK6ZeD6jXepcJkztfZ9kL%2FGqyf80buvZko0oQ9GUSd%2BcSf0%2BkDMTsAN75zm2PKiD7kdyavcIdXUigyHIyS%2F2fe%2BM0%2FwW2LZr0f3nSZQYXC9j0JS%2FAToK0W1gSxtuC6rsuhhPRmhv46oVV%2Fhwz6%2FMw5vhgo21cPc4D1dxznz9dUZHBdoyR7O0JnSnsrhRv%2BgTSvVietlEO7MYqG3h7X09CyWKK7V7%2F1NEi5ZOmZlkCl3fS3LUbnA6cClv1mMOOJpcEGOqUBsvBf7LaMvanUStxBSaDY2ai%2BSpd49apWjG9GBHFT3IbsNKZ4oUWepuqpKf57kc5c17KKph%2FtxP6ldpG55bkt05s20BYtp5HSIdrpzpXgZnyBOrGYjerIcw5RDRLhUO8EhCIIUrG7u%2F%2BWktgjpoFBLVsQ%2FBhuxavjtess2kPSOSKktEIHcMEBhuIzQ6X1%2F1xwWBBXBRTnzrrDekmLMeG%2F2eG34CIZ&X-Amz-Signature=6ad8baf5b327aba0654280cccedb82e5741479acf306bc5f9751bdefa804665d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KEFZST%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxIxgQ2O1EaRfXMlunvbcXS7Si8N4%2F%2BRkLW0arw%2B1e2QIgMnLDlnegq0bdjx%2B9DAVbUl6Yq2IQL%2FYeDqI%2BxoR7AuIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD96BsgwY0COUROSgyrcA5qR60UtJKy3lIfblcuYkiF2nG0QsWtO8hhEd3MLHwqoxZbcmiADJ2w5i1V6pLHz9dOWBt8o1cb5IENPFkr4AfICJ%2FRbuAMYHirG99jkgmApeZ8kdSeudC3xcWvMLcNvztVhRtM143mBxLXYvS4ynAVOAT6efQj%2BRGy5XTqI%2BTnRJ2GupiMq9GAPYPXipOXdKdc4xmuHba7XFn9NZ0DOF5c33yIg%2FR9pw%2BL0c95hmQDABjT2OsgfOE%2BTWwZfMlhnrl77wXsm1oRzt0NAcByEB3qYHV5KtGGJp%2Bdfs4GPL%2FjE4KyJ%2BcpNj1%2FKoE%2F7d0smFhgqJM%2B3QaI0Mc4OksMuM1drPI1TkHfwt5YmFm6ZzKX6PBAvl04%2FzDMbJ0KCtqIXuWRK6ZeD6jXepcJkztfZ9kL%2FGqyf80buvZko0oQ9GUSd%2BcSf0%2BkDMTsAN75zm2PKiD7kdyavcIdXUigyHIyS%2F2fe%2BM0%2FwW2LZr0f3nSZQYXC9j0JS%2FAToK0W1gSxtuC6rsuhhPRmhv46oVV%2Fhwz6%2FMw5vhgo21cPc4D1dxznz9dUZHBdoyR7O0JnSnsrhRv%2BgTSvVietlEO7MYqG3h7X09CyWKK7V7%2F1NEi5ZOmZlkCl3fS3LUbnA6cClv1mMOOJpcEGOqUBsvBf7LaMvanUStxBSaDY2ai%2BSpd49apWjG9GBHFT3IbsNKZ4oUWepuqpKf57kc5c17KKph%2FtxP6ldpG55bkt05s20BYtp5HSIdrpzpXgZnyBOrGYjerIcw5RDRLhUO8EhCIIUrG7u%2F%2BWktgjpoFBLVsQ%2FBhuxavjtess2kPSOSKktEIHcMEBhuIzQ6X1%2F1xwWBBXBRTnzrrDekmLMeG%2F2eG34CIZ&X-Amz-Signature=c931cfbb79e9eaafab6187d27c939c4558fc4482bceb77ecaa197421a56a93d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KEFZST%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxIxgQ2O1EaRfXMlunvbcXS7Si8N4%2F%2BRkLW0arw%2B1e2QIgMnLDlnegq0bdjx%2B9DAVbUl6Yq2IQL%2FYeDqI%2BxoR7AuIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD96BsgwY0COUROSgyrcA5qR60UtJKy3lIfblcuYkiF2nG0QsWtO8hhEd3MLHwqoxZbcmiADJ2w5i1V6pLHz9dOWBt8o1cb5IENPFkr4AfICJ%2FRbuAMYHirG99jkgmApeZ8kdSeudC3xcWvMLcNvztVhRtM143mBxLXYvS4ynAVOAT6efQj%2BRGy5XTqI%2BTnRJ2GupiMq9GAPYPXipOXdKdc4xmuHba7XFn9NZ0DOF5c33yIg%2FR9pw%2BL0c95hmQDABjT2OsgfOE%2BTWwZfMlhnrl77wXsm1oRzt0NAcByEB3qYHV5KtGGJp%2Bdfs4GPL%2FjE4KyJ%2BcpNj1%2FKoE%2F7d0smFhgqJM%2B3QaI0Mc4OksMuM1drPI1TkHfwt5YmFm6ZzKX6PBAvl04%2FzDMbJ0KCtqIXuWRK6ZeD6jXepcJkztfZ9kL%2FGqyf80buvZko0oQ9GUSd%2BcSf0%2BkDMTsAN75zm2PKiD7kdyavcIdXUigyHIyS%2F2fe%2BM0%2FwW2LZr0f3nSZQYXC9j0JS%2FAToK0W1gSxtuC6rsuhhPRmhv46oVV%2Fhwz6%2FMw5vhgo21cPc4D1dxznz9dUZHBdoyR7O0JnSnsrhRv%2BgTSvVietlEO7MYqG3h7X09CyWKK7V7%2F1NEi5ZOmZlkCl3fS3LUbnA6cClv1mMOOJpcEGOqUBsvBf7LaMvanUStxBSaDY2ai%2BSpd49apWjG9GBHFT3IbsNKZ4oUWepuqpKf57kc5c17KKph%2FtxP6ldpG55bkt05s20BYtp5HSIdrpzpXgZnyBOrGYjerIcw5RDRLhUO8EhCIIUrG7u%2F%2BWktgjpoFBLVsQ%2FBhuxavjtess2kPSOSKktEIHcMEBhuIzQ6X1%2F1xwWBBXBRTnzrrDekmLMeG%2F2eG34CIZ&X-Amz-Signature=7a0f6dfab760aa1c897b3cf9a1453ee8c8b6bf6e9c393f1d97fb2e4b89698f04&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424RKYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL8Kr%2Fk8xa%2Fddt%2BftVu5UL5CXi7EAWop7CgLNYvedtEAiEAufJ39ZScrPbaL%2BU%2F2JTgc32ZmosdO7zGcI%2Ft6oKmJXwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDvsxQF5%2F57k%2BSC4cCrcA0Q7RWyxwxdsePfpG%2FO%2BpIT6iZOKDhz5KC3DRN6wofEG9IOoobRCzfpSghNuPcen9Xu1Ys57QK7nd0LCNRRhisBzaTnSHJVSN0%2FtiyxSKl%2B34cuduajeXx%2BbJhev%2B0j7dv4AHX7awPBcP4ZWejQKIUaJXTvuB%2BpEOQpPgeBMCbTEUdEwGWl4gw6Of%2FQldxFmBwzKkjmnOwcaXHeOXEvFYG9T8qeLlLCEch8Bqapq5d8vKxwvcNowbq3Ae1UmtatMFZQji1F0dFfyPk6FulOYK1VudCRLmAJ3PrqQDT2UJXY0UK%2FOt5Gsj4h900JUgxk4pQLGXLpOVDBYOnVcLe%2Baap%2BxWlXpviInuQbhCdIPLdY88EIci2SFSM7zrc6tdONnzJonHfJ0Eq4qukaBTNzDM2XfC3hLbsOyMN8rQtbMAClaW%2BydSsOMBCbsxF01LIktVrtsQiNVwSQmEGe959KSctVYKTtjEyaQYWvR0fUVrI7hJ3n55Oa7r49n8DJ9gTY8Srdk34FIDgCVkH8QjGX4tKONLBMJSxrSSLRTz9uFdAlfmzFEq7rP0ljCKH4RHkPa0WxB5gJSm8HufXqiW42Gnp5vQn5h6Ye773fA%2BlMVmyO71XdxiaQT9Rn68VRIMMXXpMEGOqUBQhPjg1jwrsrqkC2EIVLJHGXQ5gKawXLuomB4Jajs1BgYSLDig5QuXdhfwJU4hUEepY1NfUyiwzyszaKyzKJBakwgH9o9AnlLaQjr%2BUnf5KUGb1ghBiNMaFynJZMbC908CiKiYjHZfBUnmHQtUgihm3ql%2FqTT12vHg1lW9UzOrKNIwyAob6MSpPTheFZArysouLY0Nda%2F4ofMPX7T2a%2BE%2BtKXfdG3&X-Amz-Signature=9e629008327475c1dccab2059883dbf4465be7d8226ed8137ce747e0ebf7c95f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXO7QGP%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kYIXwMuqc%2FFwLelDGZ71VmxOuU7pdHImXVaknGQWigIhAIu5dp4hKT%2F%2FyMwPiOwTGsywB%2BYsjtVwgaqtv50Y8rRWKv8DCGoQABoMNjM3NDIzMTgzODA1Igy%2FojC56ESaksBh6dwq3ANraNkqZmw%2FqTkitzjjFZqPBu%2B12y4OGclyH57rbHLbb6MZA8ntLk509HlOlnsRpGyEFITjmLVtBujWYbL%2FQmOA%2BYTydZ5nczPFGK98wDFgbtezTiTgVBLjcpt6evYRbtRfliJa%2FpnavTl56z5Ruw2yS0UhcYfzOz3PW9dCFaTe0EhSZ0IQwKWEt8o8QEDEsaFtxQuONvAC%2BQKeXmWXyssuMtK7HsS6BJNCbXaJUxwKKtIhM5vu29OmhPqIxXqiygHvrthImptGUzExyTeFtvuIjifoDjuDo%2BEH7GmT%2F9N61eTg9ANB1RfPNZrWW7MY2lhE1M2VWt%2BwQhYD9jEYDYFpuyfKKoezBkuXDx64y5NO9Usrc0GoY3Byg3jQ8iO3ZkkqCYcREV747ReuiLqOOJm3PxxkHKX4%2B%2BzTCzT9j%2FGoS3z7QyOMWAsSkp9goiioQD%2F49tMF%2BBtTUZ7xB6R90Bv0P1N2v4VQoe9SK%2BO6p%2BTjRMjbMhx4dnAKgUSQKBfIBjbMra2tjTylbNMlfeg4fP5xqyJrc8SKBbDin9jGFz9CyV3PchVhsMOCze1wq9maRLR0d0gB58gbqjZ51XKdImKixr2q9LM7qj4%2BSV9L213FcbMdbzpz%2FWjreWXP1TDO16TBBjqkAZ7Z%2BcwYDMZ4wRlgKpNOV%2BFcWV8NniNNdovSXW1ca3P8D%2BsxwoOUwmKnT0RRsJAF9HYKutgEEWqLP9U6D9R9vfphDR7PYaFTqzflpl6uzyyqs%2FpWTW52o6gT2pUtuhQJmxvASTBf3rkvLM4QbJKj%2FbZw7X%2FfVdXCGkEO21rCsxMwdG%2B6YHBEVFkcT%2BkloVnmB9mDIF0tEU6dFC2YoxpZAjMWL6WR&X-Amz-Signature=675835895d750102f87d01ddf10c3aaacd1812c157c210a1238cf7ce15200096&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KEFZST%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxIxgQ2O1EaRfXMlunvbcXS7Si8N4%2F%2BRkLW0arw%2B1e2QIgMnLDlnegq0bdjx%2B9DAVbUl6Yq2IQL%2FYeDqI%2BxoR7AuIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD96BsgwY0COUROSgyrcA5qR60UtJKy3lIfblcuYkiF2nG0QsWtO8hhEd3MLHwqoxZbcmiADJ2w5i1V6pLHz9dOWBt8o1cb5IENPFkr4AfICJ%2FRbuAMYHirG99jkgmApeZ8kdSeudC3xcWvMLcNvztVhRtM143mBxLXYvS4ynAVOAT6efQj%2BRGy5XTqI%2BTnRJ2GupiMq9GAPYPXipOXdKdc4xmuHba7XFn9NZ0DOF5c33yIg%2FR9pw%2BL0c95hmQDABjT2OsgfOE%2BTWwZfMlhnrl77wXsm1oRzt0NAcByEB3qYHV5KtGGJp%2Bdfs4GPL%2FjE4KyJ%2BcpNj1%2FKoE%2F7d0smFhgqJM%2B3QaI0Mc4OksMuM1drPI1TkHfwt5YmFm6ZzKX6PBAvl04%2FzDMbJ0KCtqIXuWRK6ZeD6jXepcJkztfZ9kL%2FGqyf80buvZko0oQ9GUSd%2BcSf0%2BkDMTsAN75zm2PKiD7kdyavcIdXUigyHIyS%2F2fe%2BM0%2FwW2LZr0f3nSZQYXC9j0JS%2FAToK0W1gSxtuC6rsuhhPRmhv46oVV%2Fhwz6%2FMw5vhgo21cPc4D1dxznz9dUZHBdoyR7O0JnSnsrhRv%2BgTSvVietlEO7MYqG3h7X09CyWKK7V7%2F1NEi5ZOmZlkCl3fS3LUbnA6cClv1mMOOJpcEGOqUBsvBf7LaMvanUStxBSaDY2ai%2BSpd49apWjG9GBHFT3IbsNKZ4oUWepuqpKf57kc5c17KKph%2FtxP6ldpG55bkt05s20BYtp5HSIdrpzpXgZnyBOrGYjerIcw5RDRLhUO8EhCIIUrG7u%2F%2BWktgjpoFBLVsQ%2FBhuxavjtess2kPSOSKktEIHcMEBhuIzQ6X1%2F1xwWBBXBRTnzrrDekmLMeG%2F2eG34CIZ&X-Amz-Signature=d277bcc32688f3429af9a371ed550007f96c948f1a7f4ce90138e2804be1b3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
