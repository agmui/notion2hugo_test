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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3G223K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2BgRLGLbZT5qipmkZ%2FXL%2BYShETAONYqF%2Fs3PKkBRbhaAIgM4vyeNV%2F7ez5vsJrgN3%2B9GdsZ622hgbCpFv5FygZWLQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA11ZjU8zhTZiz5TdCrcA6URRU01A9xh4J9qV%2B2%2FMTffIRdhP4aQ2QogkT0bxSzgxccnGvtFO3tGV2ow0BtQL7rlS5WLi01mZNJL11XsNltj5weTqt6PjyEWG3eH68rpExKDsKKR%2BFpx9hmMDFAotvdoO%2FAMI0PXM9uS4wIoU83EqrhBSPOV1MCFM0MZn7Zz8Zm1oLNxAyDx%2F5DEFHghAapviyWL3oAtpVqxRcD2LwIfWg95UZGcjf6SZ%2B%2B9h9ywlsG8fVaxeN6Kx3hutAFWwvBTW%2FLC%2B5TBccrSPpKPfcqIAwxN5BZ2Wcz3oC2bkTRfLDJeqrKxmlx6Mf2h4e79Xxk3%2B05Iw3vhrEuR%2BgtP8OhWY%2FZEiNfP11MI30ZFfz3hhjKk%2BR%2FzZvKyFFr9Q%2FvNSDHyAdI652Xz2zR4YNxuUc89%2FUER5oAhlp4x%2FdQ8g0ZMZHMdO%2BToCikqJx7yWPN97EQ9yNkJf4%2FdXmnujQMgNKqz7iR10PeMqEX8CbE%2Fh0gUQ28bS0ATGEhT%2F1l%2FSUgruPvgvl%2F58RDHYSuA%2BzCvr2Ei0ls4lHsA4zBuwMbj2W7IxysEzSgl8oyDhXLgINCHE5Z8PYoq6RF33PM%2FmfnAuRhmNumOvRWJgXyYgp%2F32G6vDQ1%2BKn18kZurDSIyMMegsL8GOqUBZWU4rKQ1hHV%2BKZFcXIyXabUwNI0wWZkqyrCysmVaSWOIlCsvdrJx8kx6sEylrmltTgK6NBOkZp4%2BhC1fDa5L9lQwTMR6UQ97HL4aFOEtua74Sh5k9idNRtWyFvnAyY0hxQdOL4HMckUfIln6T9iPNyhziUMlgLpYVEPkyJG%2FndcZ%2F29Ki5kpBRxXjqmSkEr9501E39DZs4JjiJ2IuaDOAnUX%2BzmZ&X-Amz-Signature=cbd351010a875a8681528f03c5bfe8d5e70626d45ec371abdaf0f73eabc6cf1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3G223K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2BgRLGLbZT5qipmkZ%2FXL%2BYShETAONYqF%2Fs3PKkBRbhaAIgM4vyeNV%2F7ez5vsJrgN3%2B9GdsZ622hgbCpFv5FygZWLQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA11ZjU8zhTZiz5TdCrcA6URRU01A9xh4J9qV%2B2%2FMTffIRdhP4aQ2QogkT0bxSzgxccnGvtFO3tGV2ow0BtQL7rlS5WLi01mZNJL11XsNltj5weTqt6PjyEWG3eH68rpExKDsKKR%2BFpx9hmMDFAotvdoO%2FAMI0PXM9uS4wIoU83EqrhBSPOV1MCFM0MZn7Zz8Zm1oLNxAyDx%2F5DEFHghAapviyWL3oAtpVqxRcD2LwIfWg95UZGcjf6SZ%2B%2B9h9ywlsG8fVaxeN6Kx3hutAFWwvBTW%2FLC%2B5TBccrSPpKPfcqIAwxN5BZ2Wcz3oC2bkTRfLDJeqrKxmlx6Mf2h4e79Xxk3%2B05Iw3vhrEuR%2BgtP8OhWY%2FZEiNfP11MI30ZFfz3hhjKk%2BR%2FzZvKyFFr9Q%2FvNSDHyAdI652Xz2zR4YNxuUc89%2FUER5oAhlp4x%2FdQ8g0ZMZHMdO%2BToCikqJx7yWPN97EQ9yNkJf4%2FdXmnujQMgNKqz7iR10PeMqEX8CbE%2Fh0gUQ28bS0ATGEhT%2F1l%2FSUgruPvgvl%2F58RDHYSuA%2BzCvr2Ei0ls4lHsA4zBuwMbj2W7IxysEzSgl8oyDhXLgINCHE5Z8PYoq6RF33PM%2FmfnAuRhmNumOvRWJgXyYgp%2F32G6vDQ1%2BKn18kZurDSIyMMegsL8GOqUBZWU4rKQ1hHV%2BKZFcXIyXabUwNI0wWZkqyrCysmVaSWOIlCsvdrJx8kx6sEylrmltTgK6NBOkZp4%2BhC1fDa5L9lQwTMR6UQ97HL4aFOEtua74Sh5k9idNRtWyFvnAyY0hxQdOL4HMckUfIln6T9iPNyhziUMlgLpYVEPkyJG%2FndcZ%2F29Ki5kpBRxXjqmSkEr9501E39DZs4JjiJ2IuaDOAnUX%2BzmZ&X-Amz-Signature=6ebf40d79a745ca98562784eb38138f7b14dbd02fbc53f974a93418f84da6323&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZJZZX2V%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDJEFI176O6L8x7uSMNcRKd%2B0lE3OhBR6IEgn3KXFcNEAIhANOIVbmGPZo%2BcICs0nUwt69Y8jqruFQFRpr%2FJXmAw4eTKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgnpr4lAZZD%2BkNaxgq3AOGygHHCLOVOLrPY9syf1OKmzDYRjXHRRIsXkuFY9VD8LHHhJriA0b4yWeSGz0ht7T9TQ3s6PvUnNaAq1Ri9JnVR6j9CANwi3LJaiAU3NuomW5zc%2BOUIoBUi%2Bnq3OU5AGaPqvFp5MsGZN0k%2BZUvwTxOsQKU4KLqp6yvk1Bbe8eDnj0h4%2BWH473APvymUdpfEgJvxjzagJyX319NQ22uz0qPRfPuCZEB1DplQv6aW%2Fx2E0fMW4kIvpZY3QkDT2XWNEVXIW8tnLwulVU8mHyGPmpWLTJd7BWgAuhGMwoOhCqfCjj%2FQ4L1RUpfLIBSrG%2FT8R4%2FxyuAbqO2HemJR2xFuRDHQtPB9U8BPGMz9tZoU4KuUMVVP4AFebc%2FpRIAb1jzjX76H%2FbuDNkmXn0IXcy6GNb6pFeY2Fi1%2BY9ZRa%2FEuCE%2F%2FB%2FMFDj69AP3O1FBb%2FVwlgVNPIdWLg1eP07bZlXmyNHPoJTAZKWya%2FMpPLFgT8k88MBKAz8tsbudmrHixtmZsAW4IU0Yppg9Uujfzdq2CDopAbruyfHGRX3br7rR6KAty8a5cuYV26utM4HNcjF%2FJMeaL564lqqR6rmRFHCYPApDVRRMKKvp%2BPo7SMnVrIJ4MV9kqVh5MZrMUwh1OjCKobC%2FBjqkAbJjAepzo7XdCIS2cBgJDNZkLl5uD2HZzo2gXSSlDRyo7YtTnSvjxDU%2BEHBc7Gx%2Fc5Jx46rusEUCuYcU5Mk1K0pkTqFNk8MuiW0vmcwnV6XDKB8Ck5EUlRo5IdLk3ExCavWGTUwGml1hTlM%2FrlViwwsOXI9tui4%2FCYmnPZddQMj9eDn2NAvvjq1LlmEC7VvlSUv3NdMKcDHDgGkA30grUhi209jw&X-Amz-Signature=4373ddaa7f3aece98e54f41a75f115b07177d300c53135b882f00dca3c310b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHLZR5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIC3MSrTRWe7UTaYkPCCj5kA4xvTMlaAkG3vEQpWYkAcUAiEAjg5qK2aailKzptnouWa204OjDg63iamP%2B%2Bd22NBHO88qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaa4Ys0ctxWpjd16CrcAxgnsUErP2i8LxyYIjXqkLRqnTFDhpIU364GVGpmnnIuSZt0g5FzF9nHhmA52KpMXFeCxe2DNv1mtj9YTQH%2FMEgLp6afbOlDz8WcE2Y1FMkaSGB871OjAtSrF0No3iwXRfLjJTr6KPjNRqPYX2YhVACqSfeqHfvE%2FDlrzHIBPZtxkZsAJOnrU00eXwSNHrp1UwYWihTL4v0zI3z0SD%2BcHxnlP8Kwa3zZ3LLCjms6wPwIR5PQsLP0Zpz68yryinqUwaypwqmXwfw3vGwUuQqO85Hc6Of9Cj2O64vrkbrHey%2FIvQGUCBL95uE3Ou0bewS%2BgqKUlrOum72eQkNjk%2FcmgSO6KjwXroA7Wdz%2FLUu41b%2BEbRHSuFebwHjvw7p5CEabeyzLGIWIwLYT8Ect9EOetilZozCOKVbq3QAelRO%2B4QM6QvvNECQp05kiniMFWg%2BuNI6W5NpcHMw5pJLoNwLWEob05NiykBn0x%2Bj2WNz9o74u4j3Cnc6zm1sb2FO0x513lLydsUBPvb12iAhbmWmfp6Mmpoyv8b5smGF%2Bl7jB3u9IOI3JNr1GZazkORAxJNVn6OKmqw%2F7hprCuIGPjKiDhp4oqHWi02X1Djxs6LXZjmQ3Gn7H9n3NMq%2BlGWjeMMqgsL8GOqUBgf7P88bwqh5nNVAVzLvtkuCvQE%2BrwwkxiZEjAjthkC8AEOUTutM8iP230ewlQw4Q5U6eDb7HUMRLz6RZ%2FAjDaJ7twgpTdvMZVcd48ZZCjgXFsmMiP4WEvOKlWAazV2KXfTtVZmD83VQIp1V3KOodnJuhvofbECpy06uNpRJc%2FDOilUHvMSBOmYdvt%2F8tJGmLSOpyRebRd8zHxi040ftdK3Zban1w&X-Amz-Signature=5e449e760993e88691f999a0e9cd4c65a2314b48def4dacef091c70b9e027f91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3G223K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2BgRLGLbZT5qipmkZ%2FXL%2BYShETAONYqF%2Fs3PKkBRbhaAIgM4vyeNV%2F7ez5vsJrgN3%2B9GdsZ622hgbCpFv5FygZWLQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA11ZjU8zhTZiz5TdCrcA6URRU01A9xh4J9qV%2B2%2FMTffIRdhP4aQ2QogkT0bxSzgxccnGvtFO3tGV2ow0BtQL7rlS5WLi01mZNJL11XsNltj5weTqt6PjyEWG3eH68rpExKDsKKR%2BFpx9hmMDFAotvdoO%2FAMI0PXM9uS4wIoU83EqrhBSPOV1MCFM0MZn7Zz8Zm1oLNxAyDx%2F5DEFHghAapviyWL3oAtpVqxRcD2LwIfWg95UZGcjf6SZ%2B%2B9h9ywlsG8fVaxeN6Kx3hutAFWwvBTW%2FLC%2B5TBccrSPpKPfcqIAwxN5BZ2Wcz3oC2bkTRfLDJeqrKxmlx6Mf2h4e79Xxk3%2B05Iw3vhrEuR%2BgtP8OhWY%2FZEiNfP11MI30ZFfz3hhjKk%2BR%2FzZvKyFFr9Q%2FvNSDHyAdI652Xz2zR4YNxuUc89%2FUER5oAhlp4x%2FdQ8g0ZMZHMdO%2BToCikqJx7yWPN97EQ9yNkJf4%2FdXmnujQMgNKqz7iR10PeMqEX8CbE%2Fh0gUQ28bS0ATGEhT%2F1l%2FSUgruPvgvl%2F58RDHYSuA%2BzCvr2Ei0ls4lHsA4zBuwMbj2W7IxysEzSgl8oyDhXLgINCHE5Z8PYoq6RF33PM%2FmfnAuRhmNumOvRWJgXyYgp%2F32G6vDQ1%2BKn18kZurDSIyMMegsL8GOqUBZWU4rKQ1hHV%2BKZFcXIyXabUwNI0wWZkqyrCysmVaSWOIlCsvdrJx8kx6sEylrmltTgK6NBOkZp4%2BhC1fDa5L9lQwTMR6UQ97HL4aFOEtua74Sh5k9idNRtWyFvnAyY0hxQdOL4HMckUfIln6T9iPNyhziUMlgLpYVEPkyJG%2FndcZ%2F29Ki5kpBRxXjqmSkEr9501E39DZs4JjiJ2IuaDOAnUX%2BzmZ&X-Amz-Signature=be95d1ae68c23949d191352a5d8a81c06b19d8492e64dfedd02e6ec6f0bf1449&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
