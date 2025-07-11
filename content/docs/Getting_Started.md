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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W746SGIE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRSP7LUd7dILEeh2JiUSsRBLzuefrdPjoI5OkAWZ2ldAiEA1LCPdxvERJCVKjxwCzIaNO4I7mxVFforb2cPxJEiqocqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyjAdE7GI13%2BZnpjyrcA8LxFeHMX4%2Bux739zrHlwW1VsUjeaxynlE7gxyRhXwWRUrjyyDE6HFGDu17uOtQyHIQ1wIC4%2B3s7aRltCnj%2B1ewSG6Xk22cMJKNzbNG6PHMLJsefOe4P%2FTIYhacugBBu1HzDf5Y1IsDKj%2BrTn6KaNxxCWuIDiP2K8D%2FmoX8c0EUw3oso8nZKv0%2FAkgqv7LyEr3ANnuKgQaPXYkO%2FbDWKPfOlNzyA4K6JkqUKe4M0d%2FTXLk59h8EPAY9jkMeNgMSSBgJg2PtVVnSp1T0LIJtEVxzZYEnaGjIp8KGgquDTosaXWYBaoKiThl%2F70HFGX9llq6S%2FcM%2B7fDg19GIl30e5PmZOdwy%2FbT%2Bvk%2Fy1tIym8ilGRQKhIHuWILTWphE6ROsY6FciIK26eTUt21R8yGVr0VME8Ow5tx%2FmmqKV7HbZxjX%2BPxK07Be6%2B%2BXDIxlOxVOVvL3FMw%2Fmk6j4Mies6cn0GoyHGEsU3CpMKt9KK0iXdZjyTDUEEh79IfknPv13DW%2BaEvLiGRy4BkpHkHeqloxs6OjrYE4yWZBEMXb8A1WbIjfttwUq39Kim%2FRXdN4pkcZOV4IOklT1XdrtshsU%2B%2B%2BXiVAy%2F7S38%2FXVUuS8ySb7vpkJ3wFhzYHE1nenbgkHMNL%2Bw8MGOqUBUjUq1Weu%2F%2FvGMBNYPzLtbpWpckY0MENXu4HJDMZIOAZ3abzGs9D%2F%2FSG8rzt%2FgOjyXtasiAGeXYW%2Br6QOiMXEDqN3KcSWtG121D%2FJFUI9MlgiZngTlqBoS1ig%2BKQozns3ieWtOgNF14n6SImK%2BqEaaUA39djhd6sn7B5q1dLEe2juZ4DhQZy%2FLCPqmNem2p8f%2Brt2BEGmtEnroej3F0B%2B1bO6EIRf&X-Amz-Signature=1741a97a63a365bdd2c7999efa427b7e8c49974903d40ec7ccbb5c83df2b5803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W746SGIE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRSP7LUd7dILEeh2JiUSsRBLzuefrdPjoI5OkAWZ2ldAiEA1LCPdxvERJCVKjxwCzIaNO4I7mxVFforb2cPxJEiqocqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyjAdE7GI13%2BZnpjyrcA8LxFeHMX4%2Bux739zrHlwW1VsUjeaxynlE7gxyRhXwWRUrjyyDE6HFGDu17uOtQyHIQ1wIC4%2B3s7aRltCnj%2B1ewSG6Xk22cMJKNzbNG6PHMLJsefOe4P%2FTIYhacugBBu1HzDf5Y1IsDKj%2BrTn6KaNxxCWuIDiP2K8D%2FmoX8c0EUw3oso8nZKv0%2FAkgqv7LyEr3ANnuKgQaPXYkO%2FbDWKPfOlNzyA4K6JkqUKe4M0d%2FTXLk59h8EPAY9jkMeNgMSSBgJg2PtVVnSp1T0LIJtEVxzZYEnaGjIp8KGgquDTosaXWYBaoKiThl%2F70HFGX9llq6S%2FcM%2B7fDg19GIl30e5PmZOdwy%2FbT%2Bvk%2Fy1tIym8ilGRQKhIHuWILTWphE6ROsY6FciIK26eTUt21R8yGVr0VME8Ow5tx%2FmmqKV7HbZxjX%2BPxK07Be6%2B%2BXDIxlOxVOVvL3FMw%2Fmk6j4Mies6cn0GoyHGEsU3CpMKt9KK0iXdZjyTDUEEh79IfknPv13DW%2BaEvLiGRy4BkpHkHeqloxs6OjrYE4yWZBEMXb8A1WbIjfttwUq39Kim%2FRXdN4pkcZOV4IOklT1XdrtshsU%2B%2B%2BXiVAy%2F7S38%2FXVUuS8ySb7vpkJ3wFhzYHE1nenbgkHMNL%2Bw8MGOqUBUjUq1Weu%2F%2FvGMBNYPzLtbpWpckY0MENXu4HJDMZIOAZ3abzGs9D%2F%2FSG8rzt%2FgOjyXtasiAGeXYW%2Br6QOiMXEDqN3KcSWtG121D%2FJFUI9MlgiZngTlqBoS1ig%2BKQozns3ieWtOgNF14n6SImK%2BqEaaUA39djhd6sn7B5q1dLEe2juZ4DhQZy%2FLCPqmNem2p8f%2Brt2BEGmtEnroej3F0B%2B1bO6EIRf&X-Amz-Signature=b12c5f1280789b8b5652350ba68ff7840d6c9ecda9e9f86d6ab2f05a9c65ad74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W746SGIE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRSP7LUd7dILEeh2JiUSsRBLzuefrdPjoI5OkAWZ2ldAiEA1LCPdxvERJCVKjxwCzIaNO4I7mxVFforb2cPxJEiqocqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyjAdE7GI13%2BZnpjyrcA8LxFeHMX4%2Bux739zrHlwW1VsUjeaxynlE7gxyRhXwWRUrjyyDE6HFGDu17uOtQyHIQ1wIC4%2B3s7aRltCnj%2B1ewSG6Xk22cMJKNzbNG6PHMLJsefOe4P%2FTIYhacugBBu1HzDf5Y1IsDKj%2BrTn6KaNxxCWuIDiP2K8D%2FmoX8c0EUw3oso8nZKv0%2FAkgqv7LyEr3ANnuKgQaPXYkO%2FbDWKPfOlNzyA4K6JkqUKe4M0d%2FTXLk59h8EPAY9jkMeNgMSSBgJg2PtVVnSp1T0LIJtEVxzZYEnaGjIp8KGgquDTosaXWYBaoKiThl%2F70HFGX9llq6S%2FcM%2B7fDg19GIl30e5PmZOdwy%2FbT%2Bvk%2Fy1tIym8ilGRQKhIHuWILTWphE6ROsY6FciIK26eTUt21R8yGVr0VME8Ow5tx%2FmmqKV7HbZxjX%2BPxK07Be6%2B%2BXDIxlOxVOVvL3FMw%2Fmk6j4Mies6cn0GoyHGEsU3CpMKt9KK0iXdZjyTDUEEh79IfknPv13DW%2BaEvLiGRy4BkpHkHeqloxs6OjrYE4yWZBEMXb8A1WbIjfttwUq39Kim%2FRXdN4pkcZOV4IOklT1XdrtshsU%2B%2B%2BXiVAy%2F7S38%2FXVUuS8ySb7vpkJ3wFhzYHE1nenbgkHMNL%2Bw8MGOqUBUjUq1Weu%2F%2FvGMBNYPzLtbpWpckY0MENXu4HJDMZIOAZ3abzGs9D%2F%2FSG8rzt%2FgOjyXtasiAGeXYW%2Br6QOiMXEDqN3KcSWtG121D%2FJFUI9MlgiZngTlqBoS1ig%2BKQozns3ieWtOgNF14n6SImK%2BqEaaUA39djhd6sn7B5q1dLEe2juZ4DhQZy%2FLCPqmNem2p8f%2Brt2BEGmtEnroej3F0B%2B1bO6EIRf&X-Amz-Signature=d4fefecc8115b052a3ad89d26f34c5f53400cd57ea17c9c3166312fa2eb04191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPNA6FE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgOC2duJsnWRq%2FXKxkth0g1wK6aprSaXkmX4JCug055AiBAJzkmk5xZM%2B3joY5KDgnQcFQFGpdOI96qCx8JvU4s%2FCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYPeGWglCtiSHe06KtwD2T8rdWSySYNetIXgMnXlc2WNijRpw66%2BWFTDjDUM8rkrVvo4mjfHsigX6dqnuh4Y4ouBkgB7x9xrCDfNaLUikwSJsRAfAPUBLgZocjG1iSA%2FsSoDeO4jF1FA%2FIZ04WB8CdSm2fQcVFi2JKAIAJbYThyQcceTx7u9%2B48l45okuMmdBeWlqwlQceOKHm7vy77JJ7HCN8M3ov4YPxn1d7waRUx4w3GayEl9g5pa6MuBtYTQszjo061cc5kf%2BTgu53tBBaJ5Y6FosFlbr99Z4IQvS6bGSGugqeRs00Sbx57U9I7V0APizhA5O%2F1tGhNPosh%2BO7m6AY1yC0HTvBIBYDVUrkttc4cWuQJ1okRH3XIwgI%2FWr2I0pmjYI1h2I%2FXkjN7vYZmQ34eNIPy9zxrMGKXOexqGNkItB2eaIqinRG6RmgxMmVqEew74zou4QPT3HgzCCgoG4tdqJgtB%2BN%2BVgJIU%2BhdIAnA%2BjN7dBcqsyLkqdczZqQshadnJIA7O3NtL%2FoiLUUoUYm4OLzVa4Area8Uii1s1aGQN7ATcjM2I4ca8X53aLvUo3EHc%2B9zuiRg54F64l766wiBsu0yoAiRmTrsTDPtPBjIFnnXgF9FoQeemw8TGeq2ILYhCS2ptqOIwx%2F7DwwY6pgGzgSRB4Gvr2k8j9kzGXzFyModyMhP4Ukjri8w7Jq6q8BOOX%2FUr2hFZWFPf6%2F9vgNt9cIphhyE9cz8YBlrL3okTfSmLb8o1%2B8f%2BHMBSgXXjtY2bPjYHDuT4MgVyctLb1rpug1E5%2FoAjnzu8w9Fh6doEsOc%2FM88OANgYV2dm0qJmQlH%2FQCsHt9Qn0YIThy0uA2ojwBxkyNG0YEMK9WKtRriMNGttcKxv&X-Amz-Signature=50f97809c3b2a234575d5a1b1c20f729b8b5e4cd77321333a115bbb13129f44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UM5FQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXU7pdwepJxq%2BAoPiN%2FkhUZ1peTrIWsaeeOxraZZuLHAiEAoKC4fMDepia5XqkZxDlQ0QiwDLWYPX8qO%2Ba20EBVdGQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtPptjBclUa9S%2FK3CrcA6ETFGgMblXoBsA8wFYlhA5M6hG6QlMZ%2BWUKaPvWduPZXgOyTLDRG5zb%2FRpGFsikQjLB25cldWhvxrAIlCDa6D99w550eb19pIrmGKL%2B%2FyxeRqb54FIjWz1TEmLeodDgbUdtphboBj5LnIEKl44Pi2v%2FDH8cD%2Fn35V4Pj%2Bye4rhQKtHlsh4vMoKdBd7yxZtq2%2BpvjROvOvxPIlmq%2FXss12ZJ9V%2B45xqQGfxPVlCTspKxXof9RXe3fAH7HxMOnLIplNOdoTb3sKu6emRDnTwzI%2F6Hvsp%2BB%2BCQz7ll%2Br3I4puJxELYQZbR9MshIBBrWD4SvlY5DDsrf5UIYsXMSSD1QeYBPT%2BcczHAC2cy6GjMmnXS0XLYV9LYUM2J%2BVvp%2B2KIg0znnD0j7ZQvNBM8wOkCvM4dXS6fFThQsFwyBPFNrUq0LOLul179Aa%2FG7fD3HYqfBXTCMQ9Bf%2BQOKGKW284pXGgYE%2B%2FjS%2FuwbcLx4zllqDKaeU496ostXAkPGog0sAge0DMk9bdqrjMJ6KTUPiXlPnjcfkkrAZQhu7XvXFbltoS9y%2BS8aXmkWY5K2nG8QFjBbQUd96DFd0nrfTI5GU0bBptKZj5AbOFmgu3zj5cLbCawt7d%2BdfrQVw57cDlXMM%2F%2Bw8MGOqUBeEWxZ8pCaUckp27Zijb2cezt0JWLwubeRlKld766t%2BNdry6nLlB3cbFtfX6FQrbi2eC0dYmMAZDAO3nxYvQ5iOgTxPVDKlW9RN20cIW1kj%2BVAGpPJ6GhfZ93XI299ZhVhMR7qIAUkr9GVneGbaqH1%2FRC8zW60k4bNqBoHY9w2HnSoVRyAR%2BgL8w%2FvzhlbCm%2FtipSITiFtGBE39yuNCcMZe6klaaZ&X-Amz-Signature=f18ddc02a0bed97f94a8c09f1b2e8925d4da4de1b18e17800fdb1f5976877ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W746SGIE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRSP7LUd7dILEeh2JiUSsRBLzuefrdPjoI5OkAWZ2ldAiEA1LCPdxvERJCVKjxwCzIaNO4I7mxVFforb2cPxJEiqocqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyjAdE7GI13%2BZnpjyrcA8LxFeHMX4%2Bux739zrHlwW1VsUjeaxynlE7gxyRhXwWRUrjyyDE6HFGDu17uOtQyHIQ1wIC4%2B3s7aRltCnj%2B1ewSG6Xk22cMJKNzbNG6PHMLJsefOe4P%2FTIYhacugBBu1HzDf5Y1IsDKj%2BrTn6KaNxxCWuIDiP2K8D%2FmoX8c0EUw3oso8nZKv0%2FAkgqv7LyEr3ANnuKgQaPXYkO%2FbDWKPfOlNzyA4K6JkqUKe4M0d%2FTXLk59h8EPAY9jkMeNgMSSBgJg2PtVVnSp1T0LIJtEVxzZYEnaGjIp8KGgquDTosaXWYBaoKiThl%2F70HFGX9llq6S%2FcM%2B7fDg19GIl30e5PmZOdwy%2FbT%2Bvk%2Fy1tIym8ilGRQKhIHuWILTWphE6ROsY6FciIK26eTUt21R8yGVr0VME8Ow5tx%2FmmqKV7HbZxjX%2BPxK07Be6%2B%2BXDIxlOxVOVvL3FMw%2Fmk6j4Mies6cn0GoyHGEsU3CpMKt9KK0iXdZjyTDUEEh79IfknPv13DW%2BaEvLiGRy4BkpHkHeqloxs6OjrYE4yWZBEMXb8A1WbIjfttwUq39Kim%2FRXdN4pkcZOV4IOklT1XdrtshsU%2B%2B%2BXiVAy%2F7S38%2FXVUuS8ySb7vpkJ3wFhzYHE1nenbgkHMNL%2Bw8MGOqUBUjUq1Weu%2F%2FvGMBNYPzLtbpWpckY0MENXu4HJDMZIOAZ3abzGs9D%2F%2FSG8rzt%2FgOjyXtasiAGeXYW%2Br6QOiMXEDqN3KcSWtG121D%2FJFUI9MlgiZngTlqBoS1ig%2BKQozns3ieWtOgNF14n6SImK%2BqEaaUA39djhd6sn7B5q1dLEe2juZ4DhQZy%2FLCPqmNem2p8f%2Brt2BEGmtEnroej3F0B%2B1bO6EIRf&X-Amz-Signature=d3717323041d716d17de8d1b2102f2c5680f8ed5ca77a57642283929e0562162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
