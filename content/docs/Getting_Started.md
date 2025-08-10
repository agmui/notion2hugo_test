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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=6bac241307836d4cedb00307e560aab9703b629e32f37edbe5c9d5c4c8822c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=166688568d2d1e307303b2d92c31889d5eeea480852bc922d74760e71b507f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=22546dd67b0f6fe9131143eb69e53b5e92067d69e4ab9b38204306c9ed6988fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7XC6LT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJhse4jWE%2BiMJyZr7xBtmjJj%2FJmKupVm%2F37G%2F2WnFNqAIgQTqC5WWA3Eep0uQUsde0USXAADU3%2Bvp0dxlnITRD0foqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNb832VjT4n5oeT6CrcA7LR4vakryuA1rgnV0tGxlTFF5Y86Sq3q7z2ib7TFQH%2BjDmw9KaACdCsl9AGlyVV8Ub%2B%2BwLHu%2BBhTH9ZLcJM2wnsj8lyeolgBbWdKlevgtxFYgVhVuYx2KpEMiZ775%2BnIB0yezcFjBE55Lh2OnChtwukbWwLxO1tTp7ZSBMCgt7ihVSD8ncv4YYI2srZzT0X89e0PxYORnqTdIUy84shY7bGyd%2FdAk1KtypC4%2F11QGaxifp3eSkH4iLrbesmYWasOJvr9CDxYR0yJy6VijvB4OEc5a9c5F6n1HSU4vIafkhXjkJt%2BlyGxLA3PpwHVhVTSg3l%2BQ%2BMVq%2BESYEuCDVO4NoPD%2BZjR1AuPPa7%2FpOkzUabPfqw%2FQAi3bpspQZRDL6BbNd6WIdJT9jBCkYf4Ym0mSV3R4IckRZ0L0YE0RJGinEGquUwc%2BmTPBrRICr2S0aqVYWL3WJlY%2F5gFLGEvehv1Yk66bZUG4PXBw%2FZCZbHlb5%2F0766jVldlJPWoZOw%2BcCidheP5ynUkfa8hMrEFQ5fc89WFmCZCiO5EIKCt1g04zqlSK6h3q%2Bca166tJAk3wgMFpX%2B8%2B46YbslhhygiYkXOzxIghoZ%2FW8Xle2nkmK5fNDhbaB0s%2Fu%2FvpHk7fCNMJ%2B648QGOqUBy9jw230oiayNJXUNbRUq9WDffAbpeQCKD11arst6rzk%2FfR%2FV4W6X8Br5Rg%2FvlOH0TTwUOsgb%2Fa8YSwc%2FuSPXHLXXEmu7M5xuVeYxEYa9e%2FRQroqdIMTVlz09qQdqAhZcHbJIn8QeckKh1WNXY03KBLPhTb6SZMf9tgOUKfgfEUPiFpTkA1AW%2FFdx8S1R3LfZJbmdonH7xnCO5Epdnc58Lcek7TaJ&X-Amz-Signature=de8dec11d66b8801487f94f8fbd5890367f2adbf91dafabaa159489a1286c926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMZ2YSA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MBq7R47DZBKbc2M0ATMk9C7BCslQA0VD3RlwWZ1oHwIhALij%2F0g7%2FY8Z1JUlzlIAk1qQ9qoxiPUgptFXm7xonqe8KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNhS8Jhl3m%2FS8MfpAq3AOC2E2jx%2Fg6OUWrUW84%2B5P3rUJiyRQ96z0sbM7N9wxthlt%2FlpBarF2vwsbqRC8IIj8C6EBTmcAMY0%2FaliN6va1NV7dQwC0fzlLcCItzSBSFEq3KcD5y6sRsSFwJpRn610KRH4YgM4zQq9vRf7srO5RlZhLVTdhpd2cjcuEOcHi1hySRpPdQwFX%2BFiEh3sQ4OQLMXnBvH1RwGNp%2FoRCcbn1EhlcOXt1gaxtVbU1NrXg9nNBrtGB5mFWNxq0SVzucXRxkmlv9FZHxz8G80Kkfx8KluaOstvCuSemSyx8m7JGbtfun6szn5Hr2BVp0kwRNJnicZk6hIZfsOsWViL8GprncQIy%2FFHAEzxKwt9UNrATMzhP5QNPwoSSvkUBLCaRkFLNsEOQmaTQK0kTFqs%2FimoWp2VB2A6NiOZdTSqJHys9fJL9qjE7w43oAz%2FTmFcgZzxLKwwIkj4m5eZBeNtsix0VYX5mw%2FfrM3N%2F74isoF0CgGBdHC0YjHPPVlPwzwfzlXVMq6tk2u%2FDB4nMTVYZ%2FWmSJTrLsohBIaE%2B8ErzfOE8OsdJZvBSTPYk8li65gBJPSo9OLEFQsGAZ01EwMUdKmcHbLKDjKyOdA5bGKBCJq4egAqIf%2FGpbtXTLD6m4BjDOuuPEBjqkAWl1eO9kanKcFyTvFVu5z2ql1aaDp%2BuTdArB8d6VR3sTyVBY%2F%2BjjRaHu6Ur7SHP6WiVd1vJwMUTEIAiSZKmLm3efE0Tvt7LYw%2F051JpU1Y0cx22id2bz2uPzBGjnLlPXMNzH1U1PW%2BUO2AbU0TmcxdDKKYUmfFqOPnsOYnDtPKlmV%2F2vkAWXD8nD9R1KHZc7r6v%2B52dPuPdwv%2BSKTvjYGWWbMom9&X-Amz-Signature=e56aaee61741e29e966c8329c7cd4f45c4f9cb2a746a59a139a01a84057daddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVQIKR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPuU7SxR36XIWR5opEpWfP%2BqLcae2u4WZDUjnWlGHP2gIhAO8Rd9bn40k%2B8Cb3CKuE%2FB2JhsGE1e1amNkbQbhiF2cBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZ5TLbiNkiGx5%2BJgq3AOVYjL2rgkfv%2FHsVLzEpZL72sV7FdgYG6KRZQ6IwH2WX60QTDbSiWA7RquntwHKitnVCNqmtXZdYV8XqpgKrdsy57hHDIOQXoCqYcSm7KHPT2OSyRXiZ33KtCSJLy2kn5FQ7qHYs3MZcUCllD562mTtgzQsZuR3Melh46PE0svBPRTc3j3fKhxkqPPfY5UOMyPSYWKTyoi6SFXSCXzsTaBbZNOmpCCA%2FeHCa%2F0CDWGx45BIw4tQXqoHyqyspwrfXeFZDCnTlfhH%2Ba2ZFTP3Zk8XfVI6JxWgqxKMZa%2Fq1pTPN%2Bbi8ZusxExUw5mAiWxc%2FgXIDKOko%2Bqf5yh6gC4qMbm2jJfOrabm9yiKWhJQi0ZLbTE%2BP1awFggylimQGrQFxb2yttcqFM4bMUru7e8oLsAw80bUBuObuPaN0xiY2WdFeIlsurfqZd2eqOFLgVmbgPvv5cPAQWmwLXNeTblt3sjsSgFMxLZqD%2BXQDPaeq1838Frhn1hEvRYiPkeclA7JZiRL7OkjLooRHDQ5LpgrcD2fOnGq8Avkv0WUlzN0kvgIZ35zuQ9hS8RWSHRSSPT0HzIMa9Zb53tIB%2BOJ1I83Ng%2B15sy2n1dpX%2FV1C7lm5FNdatfwbC8Su3LTB6YTTTCguuPEBjqkAYTLocujQkhmC28DTXQCEX%2FFdmVCIX3qN%2Fdyl61bRkVNQRYUvTFrWo2gioPw97Jm3wAXiIz8B6QPs9o9aiCnnTlmvCnnsDlm4QmCOpCCWRKmf%2Bm7QcNsWNkq%2BRgcvQ%2FGQoGsbt6yRxuQBla5POcp9%2BXWYK6rWnrn3bi9FMOrK5%2FnFeWE1XDHQhVMYuaFZ9F%2BjIYZkk8sns5nBs0bYeAtrgUNS4xi&X-Amz-Signature=4510b1b021ebb77642b260a511fa561fb1e5ebfe381c0fe7ad2e24d808e68e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
