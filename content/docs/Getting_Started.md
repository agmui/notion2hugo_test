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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4OUDI5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqfCcVawfqMpVl8lc%2Fzqd3u73Jzy%2FBjjPjgzhxxx8vQIhAJop8YhjnWXPGDkncCFZair8vByqvlD4onNhmvK3EywlKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zbU3zwxzNbFFUfoq3AOOlwpIM4RrWw2wy6wEikjHecMxc7jmUHt6V3h%2BaFPB3eWvpqlD76UtigW3%2BSJYJik46Eg8et1I%2B28cBRGrRt58Etitf0pvZwV20Ai5UD%2FZ2nyQuAszaVZSVW2eDCIcpJJinLo0mCPEcEctIwaognmrsXf3fD6gyRfjd3i72EUmf7d0B5G5NVaeXIpSWsFGNK6fwW00BBYTuZa6E%2BNZgs2dZPWPEHZ3WX1QoBoOT9XRmYK9eWcAI1xvhnjZeiQ4tfRuhwJFyGf9eYwjn7p4nwAFFR7pvkxWqQ6a8xz3w6roxTFwWXkyTy%2Bzrlfy9cDZVAgoGOQp768xT782e8Y0iCF1CSqsOjZ4tMES92SpGAP7Er8ZeC3Ei6Ja29MM%2FuzsfJpNPCpIegHNXA4eznaxsfHgLPtiiBA8PXWJb8%2BW%2FGrV1n1MiTk3p%2Bowu6OXEsxOvs2PHBGERiq283xU2fr%2FDF%2BRuivp4FbKNnxHjXrHIku59pig8kwkIa4jDCL0hbNfOArFIiV7qPDAoMNtqYXGqZFW3hXYew2jNBFUYx%2BmEcmBPLZawJmg5F0ZY3RiM4%2FXTX8nyY7%2F2O9okz1U8yY61%2BMzPQSaba9reT5KBOYlZ8wzdGNJkVlXRwmZ7%2FSVuTDfkbLEBjqkAS1eXQcvrjns3Oz6r4xE4%2BY3GxUcRGxxHIQrOW8W6dPrD6iZvJ2LW%2FNKH26OJ2ar21ibBCxQ0fN48r8dwQYAYwNtD%2BX65e%2BdR7mn0uL9N26CU76TRu%2FJ2GLL1iFR68%2FErWQFgoZ5KlHf2gXiXetdy7VCEWJUKw4OqkEkS9LErRcAiA9GYNkkt9NegVnGIsma2vmRH8gow4CQIVH%2FjmUiYfvtP8YE&X-Amz-Signature=8ba07b3b0fc0af73efdd86be511ec3c8574ed432844fbe4c65401be9632490b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4OUDI5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqfCcVawfqMpVl8lc%2Fzqd3u73Jzy%2FBjjPjgzhxxx8vQIhAJop8YhjnWXPGDkncCFZair8vByqvlD4onNhmvK3EywlKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zbU3zwxzNbFFUfoq3AOOlwpIM4RrWw2wy6wEikjHecMxc7jmUHt6V3h%2BaFPB3eWvpqlD76UtigW3%2BSJYJik46Eg8et1I%2B28cBRGrRt58Etitf0pvZwV20Ai5UD%2FZ2nyQuAszaVZSVW2eDCIcpJJinLo0mCPEcEctIwaognmrsXf3fD6gyRfjd3i72EUmf7d0B5G5NVaeXIpSWsFGNK6fwW00BBYTuZa6E%2BNZgs2dZPWPEHZ3WX1QoBoOT9XRmYK9eWcAI1xvhnjZeiQ4tfRuhwJFyGf9eYwjn7p4nwAFFR7pvkxWqQ6a8xz3w6roxTFwWXkyTy%2Bzrlfy9cDZVAgoGOQp768xT782e8Y0iCF1CSqsOjZ4tMES92SpGAP7Er8ZeC3Ei6Ja29MM%2FuzsfJpNPCpIegHNXA4eznaxsfHgLPtiiBA8PXWJb8%2BW%2FGrV1n1MiTk3p%2Bowu6OXEsxOvs2PHBGERiq283xU2fr%2FDF%2BRuivp4FbKNnxHjXrHIku59pig8kwkIa4jDCL0hbNfOArFIiV7qPDAoMNtqYXGqZFW3hXYew2jNBFUYx%2BmEcmBPLZawJmg5F0ZY3RiM4%2FXTX8nyY7%2F2O9okz1U8yY61%2BMzPQSaba9reT5KBOYlZ8wzdGNJkVlXRwmZ7%2FSVuTDfkbLEBjqkAS1eXQcvrjns3Oz6r4xE4%2BY3GxUcRGxxHIQrOW8W6dPrD6iZvJ2LW%2FNKH26OJ2ar21ibBCxQ0fN48r8dwQYAYwNtD%2BX65e%2BdR7mn0uL9N26CU76TRu%2FJ2GLL1iFR68%2FErWQFgoZ5KlHf2gXiXetdy7VCEWJUKw4OqkEkS9LErRcAiA9GYNkkt9NegVnGIsma2vmRH8gow4CQIVH%2FjmUiYfvtP8YE&X-Amz-Signature=11f32b395e10c8e6ff0e3bee14f5b2d5027a5fe8b1f8cafe8465198fc6acfe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4OUDI5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqfCcVawfqMpVl8lc%2Fzqd3u73Jzy%2FBjjPjgzhxxx8vQIhAJop8YhjnWXPGDkncCFZair8vByqvlD4onNhmvK3EywlKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zbU3zwxzNbFFUfoq3AOOlwpIM4RrWw2wy6wEikjHecMxc7jmUHt6V3h%2BaFPB3eWvpqlD76UtigW3%2BSJYJik46Eg8et1I%2B28cBRGrRt58Etitf0pvZwV20Ai5UD%2FZ2nyQuAszaVZSVW2eDCIcpJJinLo0mCPEcEctIwaognmrsXf3fD6gyRfjd3i72EUmf7d0B5G5NVaeXIpSWsFGNK6fwW00BBYTuZa6E%2BNZgs2dZPWPEHZ3WX1QoBoOT9XRmYK9eWcAI1xvhnjZeiQ4tfRuhwJFyGf9eYwjn7p4nwAFFR7pvkxWqQ6a8xz3w6roxTFwWXkyTy%2Bzrlfy9cDZVAgoGOQp768xT782e8Y0iCF1CSqsOjZ4tMES92SpGAP7Er8ZeC3Ei6Ja29MM%2FuzsfJpNPCpIegHNXA4eznaxsfHgLPtiiBA8PXWJb8%2BW%2FGrV1n1MiTk3p%2Bowu6OXEsxOvs2PHBGERiq283xU2fr%2FDF%2BRuivp4FbKNnxHjXrHIku59pig8kwkIa4jDCL0hbNfOArFIiV7qPDAoMNtqYXGqZFW3hXYew2jNBFUYx%2BmEcmBPLZawJmg5F0ZY3RiM4%2FXTX8nyY7%2F2O9okz1U8yY61%2BMzPQSaba9reT5KBOYlZ8wzdGNJkVlXRwmZ7%2FSVuTDfkbLEBjqkAS1eXQcvrjns3Oz6r4xE4%2BY3GxUcRGxxHIQrOW8W6dPrD6iZvJ2LW%2FNKH26OJ2ar21ibBCxQ0fN48r8dwQYAYwNtD%2BX65e%2BdR7mn0uL9N26CU76TRu%2FJ2GLL1iFR68%2FErWQFgoZ5KlHf2gXiXetdy7VCEWJUKw4OqkEkS9LErRcAiA9GYNkkt9NegVnGIsma2vmRH8gow4CQIVH%2FjmUiYfvtP8YE&X-Amz-Signature=e543156968faafc32d31ae5fba8fd8376ed223d75bf852736a05b6b4bcc2b3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BFACYA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CT4QtL5pKPwvaDQFGVlOcP02WI5y1RNZS9uXPa50iQIhALxL2hZya3dHZHrzBaPosmKUMtPCPfdiRo2ZmvOFDVyDKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGdAfsy%2BoCkJKzR8q3AMnkEgkbQ1xgGu3jUKhwO8LZigjMk80LgqDcMotIsyPuRufdP7zva%2BM6kbkoeBO8Ol%2Bf%2B%2Fi2IWzYUD%2FkW%2Bx8PsftVWbwvaDgMTkKa10vYLV31A5gNCckwkWHS2ugzJcG4tk7ETj3gXuPLla3X3sb%2FBAC7CI5Z1Hq8LdU90avtJkCeyWy4e1dOOpP3oGEI4SgyssCEtTO4cmG1sU42HuEC6M6krgXvvaxgAnc4uUZUi1Tmc95Xk2xMffBxwRQ9%2F%2F7639wXegIPn%2BKZseWylgR3miLGyDVUlEWiRYeyYCDuZVEwk5jPR680VewdENb3XDpStzHOmnvep6OU789yLZj%2BFuz%2FTFMFsemp6cpFoS9V6FT%2FKRROocyA%2B7xDV2GlYffSFQeYHWqAFo8RZuGbvc2tGL8HQ0jHjFL83bKcf0aYvFpRsFOz%2BgpM4AxUJzZGc86SJGprEOQ9%2BE5ILc%2FpwG39oyRm4KXOYb7pGm5%2F5%2BlHvTQ2twCYtkNS4%2FotRtQ1XcVAM9LaWh2ZtGwlClIr9YlDQJ7cPv0uYCobaf1TDQtDtJh%2Bp9Hiz1%2BXEfuhH9wGreg4fXgiA2Quz4FbRbccipaUhzwrIf3ANiSHRqQzz%2F3ZHQnekd2MKKZj5v%2FBA%2BszDgkLLEBjqkAcUTCE5QYo40RLged4NIuCfb5oWQJdg4yue6T1Ue9Dan4tUW8a6lq5qXjlEwWo7L6xkXRe98dapOr1BmYN3dW0C0BfU2Jm24CzndLcvHc1%2BI51PwmniwuPDddpp45y9PtwqyCVPR%2FmOhxO7EfbKcD%2FGDU3Oh0uPsLKCUr6ypBFMz5Ag%2FoshUN4F6Tq0Jn5%2BrqZP52NRQ6qcUlEGoA0i5QEdiyMMA&X-Amz-Signature=2ce52805f07a12a118a24df620112553b9e1e58b155670130706ea653790c8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGXUOTF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHnnKOYLFq17hu6Qhgb3KkctMAmeaHLp35Nkn4MBxtvAIgIfCu%2BPsiwKk5CMeXkKLdCDG8f5xxqUzTdcu9TX2ncv8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgR7vuiZpm8lmhtjircA3c1shUzfcNxVTpbCicvF5Fj%2BKDPkcONmkm%2Bjl8t7unBIo8qCcx1kH9eR4FpbP5M6keuvlHsfWQUoTf0wkeu5mRcyZO4WkKXt9gZoFG2tFee7dGHQO2lDg9iM7ZA2PeN%2F372jQuynRuT1J%2FposjDRhB%2FkvZbe6zc7WRyPIyCGUi%2FTggwfUYSgJECxxz0a0fdZp4YYeziRB%2FXTPZBeOtFgsa3LGcTdVRyVuRnrRa9ae%2F8n03oTPhaNeeSX1DJYbglj3V928ad6v2v0qRzvZ%2FK2Y898L%2FPLpCxK4hlrApwaYDwvLo6fARRvf3OWigEPYIgw9NH3H0nLsL2Sezxr1EQLAQM2v9q%2BIhXEhQHQrkHjMkOnhib8a01XOPGZrGywyurIuP0377pvi9KjG9ssgtsj1ZmpdKUBAAT%2FaZ9GGEqZLvUXbESKpJGSFfvFDrIp2N18ugHnl0GpcFPPBZaMyz95K1V2QtEtXEFInJEjnMspm23tt5KkqVmnznkCh%2FrfWMVLI%2F4qCa1rE2%2B89Q%2BxqZzXtjv%2FLMQ8jlF9jrcELY2z4ayOibf53%2B%2Fs1Jo%2BR3RQI7%2FKwynrw%2FgXpHByN7ZNkmQQN9wJLvDurSPRlHQKoPEA6cdZ6BIiVXDXVH7yNEJMISRssQGOqUBos6rj9GhXRuq9NeMg5WS%2FlXW01CZn%2BV5Lu%2FnzFJ5XLtwQi3EN1w0IW0DezhGdjFSR%2FaUtXg8RZQ50uCE6gJ05mEO7ZrVEQ08IpCm9W8OsJfp1UGj7x9%2FWDcEZe0zg4BC%2BaOid19zXcOXKRSF0Hb%2BTY7X7Q0WhLCRwfBt9fwexOLxJ5CWkKRRRqRVkWp9xAbkH%2BWgYK25ZQJYxiXYWsO%2BvbHsVQdK&X-Amz-Signature=c46373ca01042955ca02280e4a1b9f0f865ec76544e0f282dd185431fc23b39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4OUDI5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqfCcVawfqMpVl8lc%2Fzqd3u73Jzy%2FBjjPjgzhxxx8vQIhAJop8YhjnWXPGDkncCFZair8vByqvlD4onNhmvK3EywlKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zbU3zwxzNbFFUfoq3AOOlwpIM4RrWw2wy6wEikjHecMxc7jmUHt6V3h%2BaFPB3eWvpqlD76UtigW3%2BSJYJik46Eg8et1I%2B28cBRGrRt58Etitf0pvZwV20Ai5UD%2FZ2nyQuAszaVZSVW2eDCIcpJJinLo0mCPEcEctIwaognmrsXf3fD6gyRfjd3i72EUmf7d0B5G5NVaeXIpSWsFGNK6fwW00BBYTuZa6E%2BNZgs2dZPWPEHZ3WX1QoBoOT9XRmYK9eWcAI1xvhnjZeiQ4tfRuhwJFyGf9eYwjn7p4nwAFFR7pvkxWqQ6a8xz3w6roxTFwWXkyTy%2Bzrlfy9cDZVAgoGOQp768xT782e8Y0iCF1CSqsOjZ4tMES92SpGAP7Er8ZeC3Ei6Ja29MM%2FuzsfJpNPCpIegHNXA4eznaxsfHgLPtiiBA8PXWJb8%2BW%2FGrV1n1MiTk3p%2Bowu6OXEsxOvs2PHBGERiq283xU2fr%2FDF%2BRuivp4FbKNnxHjXrHIku59pig8kwkIa4jDCL0hbNfOArFIiV7qPDAoMNtqYXGqZFW3hXYew2jNBFUYx%2BmEcmBPLZawJmg5F0ZY3RiM4%2FXTX8nyY7%2F2O9okz1U8yY61%2BMzPQSaba9reT5KBOYlZ8wzdGNJkVlXRwmZ7%2FSVuTDfkbLEBjqkAS1eXQcvrjns3Oz6r4xE4%2BY3GxUcRGxxHIQrOW8W6dPrD6iZvJ2LW%2FNKH26OJ2ar21ibBCxQ0fN48r8dwQYAYwNtD%2BX65e%2BdR7mn0uL9N26CU76TRu%2FJ2GLL1iFR68%2FErWQFgoZ5KlHf2gXiXetdy7VCEWJUKw4OqkEkS9LErRcAiA9GYNkkt9NegVnGIsma2vmRH8gow4CQIVH%2FjmUiYfvtP8YE&X-Amz-Signature=12e4f58785fb3ffd88aa81986a531ead60d7149345901ef9b14052b24d292c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
