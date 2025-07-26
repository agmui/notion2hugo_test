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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44TLEQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD8qFV%2FKcAf62hSk%2F3tAn2mfaEuYvQyjE5QaBmxFBhIFAIhAKggXF7IUi%2FxqwL6oCvA4USDpCt60yC8Vp7Wp3qCJ7gQKv8DCGUQABoMNjM3NDIzMTgzODA1Igz1uUaRzcfzZkd3xx0q3AOOUt5rqzlg6%2F5oQ8o8yET88wr%2FvHCCHJW1Hi%2Bis6lOUbANPvgMzZ15MZZi1f6Zpw84y6jMyF3N6UM7FHwGZ4gImumpUfXksZUJxY4ty9Nw4nQ9hQMLMS%2FnIaaLGq36E5%2BJMC5%2B4BHtK4BCLyS5VY7RHn4OvGKn4JNc7aGv27ydJ3LxflRSRmC47ScgP%2BqrJjqveV4GvaiGDV6ePpZdLmkNTSR72SZ554V9EYSsukdSAs8a22FS%2B4cpRVJW%2FblRowm8DoEGbq0DurLk8gxg%2FZacgr3z4BzWrNr3HUqzNNohYT3r1V5WvllpGajDMzJKlCeaSQ38f0Bnyel6PymK8aFXbTHZLR2daDEvnPdJiR6n2jxAVVKpsotXX0cZ1fsi3YPlYsYYqUC9GqDMjgxNySB1w1nE7bhSUMbRdVdmickHCJ9Hr4u%2FV0%2FC61aEa54FLDVJ2SncK0lpHJDbj87nNc4NtGUhYkpDpx5%2FraMU90hMN5qaX%2FfFqtTD5ctzBXLzx8sH2NcBLQJsR%2B3J96XWeydBbf7TWRkytZ6OnhOcTNvPTxR%2F3hMa9%2FprxZEli8GyoZv7kBUR2aJ%2Fayaur78a4lMkpnviYbIgSGdQX2a2AnCaUPLAEgfXdzYP4nBXfjCH2ZTEBjqkAebkm%2BzEH%2FWvhzvrCg2Rq5BgE%2B3kRwVG5yLY3XUA0LLkZXjwxkF9NLCi%2FnIO2teaYLYgHD505F8xf5uYJFm8z2w98OkTYU4qShLvcvwSa8oJtPMQ2HunYCAt2anrcxJ0295fB%2FLy9O568etTAFDnG7CvWk9AZCdAsn1UJUcEE6i6Vcoq68vVVFGTd21AOmwVvYxIbxw9Us7CE1iBmsBL7Nh7fCBi&X-Amz-Signature=bcb1899396a42f29204252b35f149a01caaedf8b02e5df25331fb66a8ca92bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44TLEQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD8qFV%2FKcAf62hSk%2F3tAn2mfaEuYvQyjE5QaBmxFBhIFAIhAKggXF7IUi%2FxqwL6oCvA4USDpCt60yC8Vp7Wp3qCJ7gQKv8DCGUQABoMNjM3NDIzMTgzODA1Igz1uUaRzcfzZkd3xx0q3AOOUt5rqzlg6%2F5oQ8o8yET88wr%2FvHCCHJW1Hi%2Bis6lOUbANPvgMzZ15MZZi1f6Zpw84y6jMyF3N6UM7FHwGZ4gImumpUfXksZUJxY4ty9Nw4nQ9hQMLMS%2FnIaaLGq36E5%2BJMC5%2B4BHtK4BCLyS5VY7RHn4OvGKn4JNc7aGv27ydJ3LxflRSRmC47ScgP%2BqrJjqveV4GvaiGDV6ePpZdLmkNTSR72SZ554V9EYSsukdSAs8a22FS%2B4cpRVJW%2FblRowm8DoEGbq0DurLk8gxg%2FZacgr3z4BzWrNr3HUqzNNohYT3r1V5WvllpGajDMzJKlCeaSQ38f0Bnyel6PymK8aFXbTHZLR2daDEvnPdJiR6n2jxAVVKpsotXX0cZ1fsi3YPlYsYYqUC9GqDMjgxNySB1w1nE7bhSUMbRdVdmickHCJ9Hr4u%2FV0%2FC61aEa54FLDVJ2SncK0lpHJDbj87nNc4NtGUhYkpDpx5%2FraMU90hMN5qaX%2FfFqtTD5ctzBXLzx8sH2NcBLQJsR%2B3J96XWeydBbf7TWRkytZ6OnhOcTNvPTxR%2F3hMa9%2FprxZEli8GyoZv7kBUR2aJ%2Fayaur78a4lMkpnviYbIgSGdQX2a2AnCaUPLAEgfXdzYP4nBXfjCH2ZTEBjqkAebkm%2BzEH%2FWvhzvrCg2Rq5BgE%2B3kRwVG5yLY3XUA0LLkZXjwxkF9NLCi%2FnIO2teaYLYgHD505F8xf5uYJFm8z2w98OkTYU4qShLvcvwSa8oJtPMQ2HunYCAt2anrcxJ0295fB%2FLy9O568etTAFDnG7CvWk9AZCdAsn1UJUcEE6i6Vcoq68vVVFGTd21AOmwVvYxIbxw9Us7CE1iBmsBL7Nh7fCBi&X-Amz-Signature=8fecdf98bf0db4a3a59c1a649b18120b17228c4eb0c54f8c1342181a597812a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44TLEQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD8qFV%2FKcAf62hSk%2F3tAn2mfaEuYvQyjE5QaBmxFBhIFAIhAKggXF7IUi%2FxqwL6oCvA4USDpCt60yC8Vp7Wp3qCJ7gQKv8DCGUQABoMNjM3NDIzMTgzODA1Igz1uUaRzcfzZkd3xx0q3AOOUt5rqzlg6%2F5oQ8o8yET88wr%2FvHCCHJW1Hi%2Bis6lOUbANPvgMzZ15MZZi1f6Zpw84y6jMyF3N6UM7FHwGZ4gImumpUfXksZUJxY4ty9Nw4nQ9hQMLMS%2FnIaaLGq36E5%2BJMC5%2B4BHtK4BCLyS5VY7RHn4OvGKn4JNc7aGv27ydJ3LxflRSRmC47ScgP%2BqrJjqveV4GvaiGDV6ePpZdLmkNTSR72SZ554V9EYSsukdSAs8a22FS%2B4cpRVJW%2FblRowm8DoEGbq0DurLk8gxg%2FZacgr3z4BzWrNr3HUqzNNohYT3r1V5WvllpGajDMzJKlCeaSQ38f0Bnyel6PymK8aFXbTHZLR2daDEvnPdJiR6n2jxAVVKpsotXX0cZ1fsi3YPlYsYYqUC9GqDMjgxNySB1w1nE7bhSUMbRdVdmickHCJ9Hr4u%2FV0%2FC61aEa54FLDVJ2SncK0lpHJDbj87nNc4NtGUhYkpDpx5%2FraMU90hMN5qaX%2FfFqtTD5ctzBXLzx8sH2NcBLQJsR%2B3J96XWeydBbf7TWRkytZ6OnhOcTNvPTxR%2F3hMa9%2FprxZEli8GyoZv7kBUR2aJ%2Fayaur78a4lMkpnviYbIgSGdQX2a2AnCaUPLAEgfXdzYP4nBXfjCH2ZTEBjqkAebkm%2BzEH%2FWvhzvrCg2Rq5BgE%2B3kRwVG5yLY3XUA0LLkZXjwxkF9NLCi%2FnIO2teaYLYgHD505F8xf5uYJFm8z2w98OkTYU4qShLvcvwSa8oJtPMQ2HunYCAt2anrcxJ0295fB%2FLy9O568etTAFDnG7CvWk9AZCdAsn1UJUcEE6i6Vcoq68vVVFGTd21AOmwVvYxIbxw9Us7CE1iBmsBL7Nh7fCBi&X-Amz-Signature=fb71a1700f588ae54ec33d9e98dca5e0d65f19926bdee46b51dd9492aa5cbc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZENR7S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDHRtrr%2BQp6JIee2tOXdqihDJ%2BMU32wFIuTfzLZSwdjjgIgJj%2BJ%2FTLc173IFdte1%2FxRjL5yjKCK1SCF2h2g%2Bu04HQAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOFg3nUkQyuCvNxdqSrcAxboELVqEGuO9rq%2BWhpwykv0kgH6lVX21vZSODYn%2Fi8tjT9X9WY9J%2ByILEm%2FJ%2BM2cTyxtJ%2Be3Ez7F2j9jxJSbncb5cZni%2BE7h4mKkZ91klB%2F5EmWp2VN3z88CFA4wUTKUD1Kk%2FLLdJDxmO%2FyCXzx50XXT6BLZo6iN9sAUKrd37EG7u775bmaCtbjrYY%2B2mHrQwaKyftnveSUvll8j%2FJq9PQA3pziu%2BxmjHfiZ8xWvhwTYuspEnB%2BkIFfD6bCveBf64TVUKh%2FZXSogzj3fIDqjaYkwZF5Oe52CQGOgPXh7tkt%2BZhvpIHa7uzuihcB3V954wvNC906RAme%2Fwi9LQ%2FInpV990cl0XY9E431rpEoelKPELj5xuzPdlPQ9eX7W589jwMAdTcR27er4vvPQY5bmbFip4yrbs1XsP3Yg2Gj%2BuokYyAuDGxNDqxQTVwyPBXwPeSQPUl%2FIVZHP3Y0jKcAuAujsM8T0UuhtJGcuLPdxSy%2FWv9Do0fyBtpEkBsCy9E6pjdZ4EF2bQrO5E7oq4EO1158h2i72ykzOuYzfgN8rcXtduj0OYw0wQeLRzxgZnnLQnrjNM%2FeBlrIP%2Bt1rvQXFbbw0CQ4tL9VyS2CW%2FWUkOkzGdO3QW4RD1lH0e5%2BMLXZlMQGOqUB%2Fi7BWlubh6aA2ELpAbmqwGvONmEEhaNj4kLeODoZl%2BETHNX%2B3o71FxhvZu83un%2BUug1KqeOsFKKbOF8A5CY6IoSlyAnTX3au4DTKv2P61Wi4tZN2aUq4UT0A8H5pfNhWJBeAIXz7p6cerh%2FpVVNVCcm5KVebzNn2P3Svz4lbZnq4u8Tcg%2BMIaTOb0Jtedxzlee69auITn4p%2FxzGnfV4YHjqv8oyM&X-Amz-Signature=11c1b76bbe28633760afb6c343792892f7ba83298dae3221d4d954e4afb7d916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWIYYJB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIANwTNK4SkU25YKv0cMCRK2R75f7pH37OYSeEpx9n6LNAiA1n%2B8ukyrQSHizAzbaA5VnNjqpZF%2FFPx%2FZwETQK0ZmOir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMQZnHko%2BZYMVJpr24KtwDx25RcAKlI1fxPN%2F3SESdIAsbwm7rH17lgwajOlMDlB5XRTNTRc%2Bi0zb2ZBKaQEJxiWGZK2o8Ts2PGPoemkbDzqglAlV9CN%2FRNns1sB4r%2BPKvmVMwViGwmgHmCw8psmf6tvdlpdcvS6zuY1Lr5%2FTq0vHbl0fajhBjUkNM7J%2FSnt7eRxaRy%2FDgdaqt01WiH04Q2LVIXqORHmPpJfOxSaVKfRsqiSVh2j9vsmaN5VyHQeGq7rq1v5uXcI52ZHzk4aP5lcCUXjk2T3XXYkBlB%2FaMuV05UdIhqvHiRXgPf2TRqv4eYv0AvWoRAReT23lA9WBz2ZeJDjyMakUDgPFk9Yux1i9dLBWa8rCH032xiwTCmKgZLsepgLySEjPun7v8DVNkprNPnXWM%2Fu6HarRlEOhz%2FBwqSn0ejfWQ%2F%2F77AeLesOL%2BJ9ILiUiOxZfbOuHSiFPdwimRjpL0hq%2BTEQqXBK%2BJYFSvC47KnzPhDLGcBbESohcTQWr%2FvZW7Lrm2bPM1uzFbKKEXWh5yl20Y5crWUgPaV9F5N8FWO4nqZTNC2tM%2BPJoZlzTb5Lv%2FQsVp5hHLFQdxzBMB3gjG8WwDezRO1PNa6txodq%2BMmlg66WYbA9dcO%2BS58ymTvlZ%2BJ%2F8S3hkwhNmUxAY6pgGqOt2pCiiAQVT35jyOeuWCjDhkhCUuhmVVft1o%2B0ouTh5PxSV2aVfZEZP%2Bxo7Gt8z7Hvm3zsaIhn7G8EnVx2rbphDinkDDVOdnH%2FYKIqqrfmBzzEJNiKDjw8uJ%2BHLAruvcYPFIeH8zN6SqC4Cxx0Tyh2AAl6LI3wkf%2FDDhmGTHiJw%2FNeND3%2FwqhDEb0anWQIoUnFaQQzUuI9gRFcsM02c2W%2FptM%2FiK&X-Amz-Signature=66e41750f97b5c9cf34a3bf745de55c40c0f0ebaf17d42133fd90dc9a80e2ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44TLEQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD8qFV%2FKcAf62hSk%2F3tAn2mfaEuYvQyjE5QaBmxFBhIFAIhAKggXF7IUi%2FxqwL6oCvA4USDpCt60yC8Vp7Wp3qCJ7gQKv8DCGUQABoMNjM3NDIzMTgzODA1Igz1uUaRzcfzZkd3xx0q3AOOUt5rqzlg6%2F5oQ8o8yET88wr%2FvHCCHJW1Hi%2Bis6lOUbANPvgMzZ15MZZi1f6Zpw84y6jMyF3N6UM7FHwGZ4gImumpUfXksZUJxY4ty9Nw4nQ9hQMLMS%2FnIaaLGq36E5%2BJMC5%2B4BHtK4BCLyS5VY7RHn4OvGKn4JNc7aGv27ydJ3LxflRSRmC47ScgP%2BqrJjqveV4GvaiGDV6ePpZdLmkNTSR72SZ554V9EYSsukdSAs8a22FS%2B4cpRVJW%2FblRowm8DoEGbq0DurLk8gxg%2FZacgr3z4BzWrNr3HUqzNNohYT3r1V5WvllpGajDMzJKlCeaSQ38f0Bnyel6PymK8aFXbTHZLR2daDEvnPdJiR6n2jxAVVKpsotXX0cZ1fsi3YPlYsYYqUC9GqDMjgxNySB1w1nE7bhSUMbRdVdmickHCJ9Hr4u%2FV0%2FC61aEa54FLDVJ2SncK0lpHJDbj87nNc4NtGUhYkpDpx5%2FraMU90hMN5qaX%2FfFqtTD5ctzBXLzx8sH2NcBLQJsR%2B3J96XWeydBbf7TWRkytZ6OnhOcTNvPTxR%2F3hMa9%2FprxZEli8GyoZv7kBUR2aJ%2Fayaur78a4lMkpnviYbIgSGdQX2a2AnCaUPLAEgfXdzYP4nBXfjCH2ZTEBjqkAebkm%2BzEH%2FWvhzvrCg2Rq5BgE%2B3kRwVG5yLY3XUA0LLkZXjwxkF9NLCi%2FnIO2teaYLYgHD505F8xf5uYJFm8z2w98OkTYU4qShLvcvwSa8oJtPMQ2HunYCAt2anrcxJ0295fB%2FLy9O568etTAFDnG7CvWk9AZCdAsn1UJUcEE6i6Vcoq68vVVFGTd21AOmwVvYxIbxw9Us7CE1iBmsBL7Nh7fCBi&X-Amz-Signature=c7b2d617ee7957ad9c2530d78a83940f8f3f581eb6d333762e40967067cba58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
