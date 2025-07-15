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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ347TW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHQG6l%2BgdNYDTZrntZyG23LYeo5mBTc%2FMmnUW5Km3goxAiEAj9wLG2eSr5c5b0q%2BUDnL89%2FJ%2Bouk5o1zAOHH7HbBdtQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMCKY%2B3Xf%2FoALO%2F%2BdircA2pa5H0qI0LSeIo8jvH9vPperYJK4mu5jANCI%2Fr%2FuwnOKPWcX6f0v6K3TituCPaVrXvoD4fVK4iFjAG%2F%2ByBD2dn43AaKbzc8vz8tvy2gYCekHJQv69Ue1m7VcDkzcnMPnBCLYRe10SegWxmn7k%2FhfvMtLZhTZ6GsfQoGSd3FXM5wciFdfbAQPNRyEkV%2FaSeAFVl3xuCZBZiRfhkwjnDRf6EML8CmNR%2F9F5PDGWlvnhscHZTt6c7FmEoPQ0cyRU1nA%2BxUWDocAoBpDwkzJGTr0WFcEmtVuGyAP7WUG0JBxJ1s5M47GymUhOyHv36tZA9pCYddfLzFN6jbWVbSE16qHByluRKBSXJUR5qxRdAdVFZ%2FIb7x5BIeh4Cr8epz5jTQNbebZPMcrZkbsRM5RWYy0NDkjk2dP2AudbSUGnAedLfbTibYVtm4pwr0WBq3kVjPXWGkeY8sx2MTMOpjHe9z6%2Bp6gDYCgYTWoDcYdFGbRnfsr%2FUCbsFd0GlkaRUp9SxC%2B3VhiRHIHZ95NgD2Qf9JyZnI2nYIyRpApdZNphef2dWz99%2FUrvKatFSRIewhhbBKRxcdexfOfZZ0VVaetzr7jIMRfJ3QPYfLTbrE0wVsAMBQwNxz1KvHPrfBKHemMJSG2sMGOqUB6bceIcL5UT9Rfiq9%2BNT0PzPh4pXwFd45QLxxTAAMXn22eW0nAP7gFoDyaPPKyO6kajNQL54tm7dQgyvBLL6U1GYEIhGR3n833mLqHPVqEOaiKFiDsmjO%2F3gYz%2FNID5OKrUb%2BkTarcTkMMG9XgveuPWKVgdFfda1Ys45CrdfTmtn%2FWQo0ESkUfhVmlfEO3ehjpSpbIc%2FU9ttPzNDonS%2BY%2FMJROVfi&X-Amz-Signature=1ddc20461b3fb13cf6e12c57e4b0b14db81bb689f26e2f64e52ee2f5ed27b080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ347TW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHQG6l%2BgdNYDTZrntZyG23LYeo5mBTc%2FMmnUW5Km3goxAiEAj9wLG2eSr5c5b0q%2BUDnL89%2FJ%2Bouk5o1zAOHH7HbBdtQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMCKY%2B3Xf%2FoALO%2F%2BdircA2pa5H0qI0LSeIo8jvH9vPperYJK4mu5jANCI%2Fr%2FuwnOKPWcX6f0v6K3TituCPaVrXvoD4fVK4iFjAG%2F%2ByBD2dn43AaKbzc8vz8tvy2gYCekHJQv69Ue1m7VcDkzcnMPnBCLYRe10SegWxmn7k%2FhfvMtLZhTZ6GsfQoGSd3FXM5wciFdfbAQPNRyEkV%2FaSeAFVl3xuCZBZiRfhkwjnDRf6EML8CmNR%2F9F5PDGWlvnhscHZTt6c7FmEoPQ0cyRU1nA%2BxUWDocAoBpDwkzJGTr0WFcEmtVuGyAP7WUG0JBxJ1s5M47GymUhOyHv36tZA9pCYddfLzFN6jbWVbSE16qHByluRKBSXJUR5qxRdAdVFZ%2FIb7x5BIeh4Cr8epz5jTQNbebZPMcrZkbsRM5RWYy0NDkjk2dP2AudbSUGnAedLfbTibYVtm4pwr0WBq3kVjPXWGkeY8sx2MTMOpjHe9z6%2Bp6gDYCgYTWoDcYdFGbRnfsr%2FUCbsFd0GlkaRUp9SxC%2B3VhiRHIHZ95NgD2Qf9JyZnI2nYIyRpApdZNphef2dWz99%2FUrvKatFSRIewhhbBKRxcdexfOfZZ0VVaetzr7jIMRfJ3QPYfLTbrE0wVsAMBQwNxz1KvHPrfBKHemMJSG2sMGOqUB6bceIcL5UT9Rfiq9%2BNT0PzPh4pXwFd45QLxxTAAMXn22eW0nAP7gFoDyaPPKyO6kajNQL54tm7dQgyvBLL6U1GYEIhGR3n833mLqHPVqEOaiKFiDsmjO%2F3gYz%2FNID5OKrUb%2BkTarcTkMMG9XgveuPWKVgdFfda1Ys45CrdfTmtn%2FWQo0ESkUfhVmlfEO3ehjpSpbIc%2FU9ttPzNDonS%2BY%2FMJROVfi&X-Amz-Signature=fe8ac302cf61f8add48156c82be1d69f9e97ceee978199d9fdb7bd7f1a4c454d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ347TW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHQG6l%2BgdNYDTZrntZyG23LYeo5mBTc%2FMmnUW5Km3goxAiEAj9wLG2eSr5c5b0q%2BUDnL89%2FJ%2Bouk5o1zAOHH7HbBdtQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMCKY%2B3Xf%2FoALO%2F%2BdircA2pa5H0qI0LSeIo8jvH9vPperYJK4mu5jANCI%2Fr%2FuwnOKPWcX6f0v6K3TituCPaVrXvoD4fVK4iFjAG%2F%2ByBD2dn43AaKbzc8vz8tvy2gYCekHJQv69Ue1m7VcDkzcnMPnBCLYRe10SegWxmn7k%2FhfvMtLZhTZ6GsfQoGSd3FXM5wciFdfbAQPNRyEkV%2FaSeAFVl3xuCZBZiRfhkwjnDRf6EML8CmNR%2F9F5PDGWlvnhscHZTt6c7FmEoPQ0cyRU1nA%2BxUWDocAoBpDwkzJGTr0WFcEmtVuGyAP7WUG0JBxJ1s5M47GymUhOyHv36tZA9pCYddfLzFN6jbWVbSE16qHByluRKBSXJUR5qxRdAdVFZ%2FIb7x5BIeh4Cr8epz5jTQNbebZPMcrZkbsRM5RWYy0NDkjk2dP2AudbSUGnAedLfbTibYVtm4pwr0WBq3kVjPXWGkeY8sx2MTMOpjHe9z6%2Bp6gDYCgYTWoDcYdFGbRnfsr%2FUCbsFd0GlkaRUp9SxC%2B3VhiRHIHZ95NgD2Qf9JyZnI2nYIyRpApdZNphef2dWz99%2FUrvKatFSRIewhhbBKRxcdexfOfZZ0VVaetzr7jIMRfJ3QPYfLTbrE0wVsAMBQwNxz1KvHPrfBKHemMJSG2sMGOqUB6bceIcL5UT9Rfiq9%2BNT0PzPh4pXwFd45QLxxTAAMXn22eW0nAP7gFoDyaPPKyO6kajNQL54tm7dQgyvBLL6U1GYEIhGR3n833mLqHPVqEOaiKFiDsmjO%2F3gYz%2FNID5OKrUb%2BkTarcTkMMG9XgveuPWKVgdFfda1Ys45CrdfTmtn%2FWQo0ESkUfhVmlfEO3ehjpSpbIc%2FU9ttPzNDonS%2BY%2FMJROVfi&X-Amz-Signature=938e4f733cb82f06c3b2f091b5bd882f54e7c8d02790aa0c3ace5d2f2fd15ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDC3M7RS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHX8KovlTC7pxBGkLoSTAX8rax1wQrIpegSHkoZZB3FKAiEAq0E631o5HTTmMS1%2BTdTK5SPsJ6j4ivQyiqiuGw65eX0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFJbdbfSUhjktgToFCrcA%2FjkhZKRfKlGLApPTd3o3%2FSaW5tYhnnNpOMJGraoEpjM0OngviDgC%2BbnAqjj0r9VlYA5UoLwwPBknkWOl4UkwGAeL12diUjCwFpTapR%2FJ1cF3ZxysmhCl%2Bcmi%2B2U3i%2B4nDcv38wymcG41u%2BlPfV7fIuKmaLLNClnrl0RBdkz61S8ahQsUZWSvS%2BV%2BCvR2GmYfZcKFnNioKRQ6jqGaUIdsnP%2F%2BBvf7o%2F215Y8SuqlFroUN%2FhF4n4FkkCxmWpw3njAnCGlue3eqWBDBSirXodkM8R4ucW8GCk0HWbGu8Z4SqVwk7oV15tsJys9UjCCu2rwICTidDTxgKpdUGCco%2FTC4bfmHhkTTh5fKa2PVUlhT2bPg0G9SYO2lbjvDioqzM7uaz9%2FtgmuD2ChX8K5J8hVqcTf8yvGvtoyrOsmsP16v8s7YQcVKNUN2TUI2S51fbm2GGS63qAHisOq8fjtd88%2B7FYnQ154AQnSOjBthkXobxtXE64yoCUl66qD0gojdOEMdHBaGGE4hSxN%2Fp04Mwc3bxeyH7xAeDTbGka1XQScuh2uJGuCalfchTM3t5e4QhGguwHM19a9oG9XgVuMt0o2QLaXpMokKIXKMKsUPjfGkMfbl546zNGJp3tWmvD7MO2F2sMGOqUBcl9D55yHyNz7O4GsLVvAalElUv5fw5n%2FoYHDcg%2BCfobuO52XoFdiNe7RNrsb2nkzRAIMzn5Bxh%2BqbyICJg0pXCzurlXTkky3IdUNMtZpUj9ezmNMFi4lOIQVXzBHxSpn6f%2FJOWz4%2BO4FESTI7RmNkksq0OOJYl704N%2Fz4gLIpL3BB3STTCdTqSLmcLVDP9rfbU8N1fdR8W8o7UlvWjlVJ%2BRlq%2B5q&X-Amz-Signature=19340906af61eb4a322fbc55129e580ec4abd741cdc3999e179e3b49b4931685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWP22BU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD3h%2FxO5Sw%2FexLgTksudH7Pc%2BidGdMN8vtgncI%2FohEpKgIgTexQQUgkB0m%2Bbz1iGifGEZdH%2BCInR7XL2x9Ypvp%2FGBcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH9Qtkz7Q3te4f4cpyrcA6Vh7mFdxFAsrC0nfob1bNcNDbwkcabEBRxelz9qgJQe3s6rC9vPQJtZkPDsFljSOwKbzUu0pF0HFmU%2BQoIcCFyk1ci3cqr03dFz%2FI%2BVoSJPjTi1GoQMdNcfwr84yC%2Bu4JcWPkumsUcIaeURJdLyVrwsYprMgLP3Vmc7c4G5c2gVEnpYnybRjnMaPJLCh5Z5lkQpKAV7%2B64buxbY9nrpo9WBVPKiJaX1cJO%2BWMHLR0%2FRnO63AvhJXlNyGhyzYMYdBAi%2FrsSMRkiXY%2BftCEEOPIMgzOnahZ%2Bb8uZJpG9H0skD8tcKKsa8cSsi7aqPia%2FrRN%2BhS1REorBAfVdS0LvQSnOreGmko4wiYof%2BxSRUHAic4FvZX6hksMz3%2BFYvMFe2e%2FKFdznyvadcBRw%2FXQEQsnH%2F9duN5XZmtzULZvX0ZB7BqFTWJQRR6hwymmKouLWgpCn7mTcp55UbmhQzT5HHUUPqmBjj%2F2dXULBHPWLJG%2FPFq3hRmQmuwr0q37UGppWQ1n8ggrOkiHx0wHZsp4G1nAOmsIh%2B1Pul67SHB%2Fm%2Fz4Rwzk1K6H1amOn7dkFwwPZFGz4JC8yEtFAnKl2qK7KKOCmVccKxrg1t%2F7KpJIIUnxtmhirTpGlaIt2tqM74MLCG2sMGOqUBXkUNJASSAcbb66CnIS%2FkpNeAia8hZdISoUq90fzbqqzueB8L0BYW13CMLF3E9VVysD9pfQWrVfirLO0%2FbEnDHr2ha7snkP8GSzdzJm0%2FsWadSHDpcdBVGI95YOZLj8cxQvL9SAdKaX6V1TUIms0lGxl3ZVPgCPTkZULTcI4T3266srWhokqcMy7Nm7RmnAiwysYZifUdqL4K%2BB1%2BfAL8%2BTjJOB9r&X-Amz-Signature=4b9618099305981d9d81127dc9c497d7d8e67019a4bf245bd9f583eabf50572c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQ347TW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHQG6l%2BgdNYDTZrntZyG23LYeo5mBTc%2FMmnUW5Km3goxAiEAj9wLG2eSr5c5b0q%2BUDnL89%2FJ%2Bouk5o1zAOHH7HbBdtQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMCKY%2B3Xf%2FoALO%2F%2BdircA2pa5H0qI0LSeIo8jvH9vPperYJK4mu5jANCI%2Fr%2FuwnOKPWcX6f0v6K3TituCPaVrXvoD4fVK4iFjAG%2F%2ByBD2dn43AaKbzc8vz8tvy2gYCekHJQv69Ue1m7VcDkzcnMPnBCLYRe10SegWxmn7k%2FhfvMtLZhTZ6GsfQoGSd3FXM5wciFdfbAQPNRyEkV%2FaSeAFVl3xuCZBZiRfhkwjnDRf6EML8CmNR%2F9F5PDGWlvnhscHZTt6c7FmEoPQ0cyRU1nA%2BxUWDocAoBpDwkzJGTr0WFcEmtVuGyAP7WUG0JBxJ1s5M47GymUhOyHv36tZA9pCYddfLzFN6jbWVbSE16qHByluRKBSXJUR5qxRdAdVFZ%2FIb7x5BIeh4Cr8epz5jTQNbebZPMcrZkbsRM5RWYy0NDkjk2dP2AudbSUGnAedLfbTibYVtm4pwr0WBq3kVjPXWGkeY8sx2MTMOpjHe9z6%2Bp6gDYCgYTWoDcYdFGbRnfsr%2FUCbsFd0GlkaRUp9SxC%2B3VhiRHIHZ95NgD2Qf9JyZnI2nYIyRpApdZNphef2dWz99%2FUrvKatFSRIewhhbBKRxcdexfOfZZ0VVaetzr7jIMRfJ3QPYfLTbrE0wVsAMBQwNxz1KvHPrfBKHemMJSG2sMGOqUB6bceIcL5UT9Rfiq9%2BNT0PzPh4pXwFd45QLxxTAAMXn22eW0nAP7gFoDyaPPKyO6kajNQL54tm7dQgyvBLL6U1GYEIhGR3n833mLqHPVqEOaiKFiDsmjO%2F3gYz%2FNID5OKrUb%2BkTarcTkMMG9XgveuPWKVgdFfda1Ys45CrdfTmtn%2FWQo0ESkUfhVmlfEO3ehjpSpbIc%2FU9ttPzNDonS%2BY%2FMJROVfi&X-Amz-Signature=3795feb1827bfe6a8f6e10d781ec4c89520da93dc1ee94a32ada3cca956df32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
