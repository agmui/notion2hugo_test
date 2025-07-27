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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPIV4UP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDbkAuEfC2B33NuZNdUL6V%2B4kGeM8ztF9ZHrEI3FEVGSgIhAOJ61Rogtw7oycDBHGO2Yu0WqwDlwoFwaDnkWp4UO7%2FoKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4iutL41rLsiUY8F0q3AMdnPA2z%2BAHwr7P%2FycB1glNepDEi8TJAtyVEVHg8%2BJolIes9z%2BQCtK9hgwIFvmxPB8mWerTGDRD6aLsveEF8HywpOowMgKLZwdG1UHXrHhDG4%2FqU5%2FX6eOkU9yTzw9V2C1biExXuQE9kLzouCFHcLV86kULVPWiJspMVaacWulHibnAFeUrRJBqsUFkdMnqMkrvH%2FFmJPB3HEFmMBZRoIuxCPZS5HE99Kbvb2uGUWBizYFkgAS0lzLO%2F3BaRn%2BU2LLhGBiDkPeyXjrUG0isRm9mXJB5rEx0%2BthnWs8cBKrd9cT4kU7PtCuCgdOgQvvqlL3ONAOtFe0opticFP11nUX1%2BDlkunnllSlZjkSz1VKAiwpdON%2BMQE3IePp3R8KB8FjzSC28aSWT2bFHemnIMLJ5fjrQmKFisAFdLQ7cNnIZvhW7xRFC9lxyNO5rqIL88aT4apynx1QmDXxVGV%2BBAR%2Bzu0NBHXp%2FANG2sEra7KGkwMvja2j2JQ1am9a6MAmb%2BBH9rg%2ByErQVPMm%2Bpa00%2FR%2F4UP4pPtxNkrhgJJ67viAHAj11fAW%2BcbaMKztYpzWtnfPMGom%2BD8iKCIPCtNDMA4QSqeisb%2FWosQ9sgTVjrVDDZp5%2BpAQLyYIwa%2Bk1hTDD%2B5jEBjqkAayO8sZFO0CX4vcPNnLZKf%2FIhv8bJKtvwC9%2BWOkjDUDZTUCrVd0FBFI4J4pgkGVHLz34XX16fvs4um0AixLQdPkmB8Qe7FlUSjEyxUUnbh2rEct%2Fzicq%2F9epLvRnZYI7JLKm1GbuNI3uyhzJZXpyfJ0RUCzU7Q2%2Fp1G%2Fn1BwQL3kTd9m0QtYdUcNw3DhYaXCGz8PLkiygT2KFEOdhtG0FKIolK17&X-Amz-Signature=545121219f2f771222903229c54c74062b824df640f6f947cb32868e0575f1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPIV4UP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDbkAuEfC2B33NuZNdUL6V%2B4kGeM8ztF9ZHrEI3FEVGSgIhAOJ61Rogtw7oycDBHGO2Yu0WqwDlwoFwaDnkWp4UO7%2FoKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4iutL41rLsiUY8F0q3AMdnPA2z%2BAHwr7P%2FycB1glNepDEi8TJAtyVEVHg8%2BJolIes9z%2BQCtK9hgwIFvmxPB8mWerTGDRD6aLsveEF8HywpOowMgKLZwdG1UHXrHhDG4%2FqU5%2FX6eOkU9yTzw9V2C1biExXuQE9kLzouCFHcLV86kULVPWiJspMVaacWulHibnAFeUrRJBqsUFkdMnqMkrvH%2FFmJPB3HEFmMBZRoIuxCPZS5HE99Kbvb2uGUWBizYFkgAS0lzLO%2F3BaRn%2BU2LLhGBiDkPeyXjrUG0isRm9mXJB5rEx0%2BthnWs8cBKrd9cT4kU7PtCuCgdOgQvvqlL3ONAOtFe0opticFP11nUX1%2BDlkunnllSlZjkSz1VKAiwpdON%2BMQE3IePp3R8KB8FjzSC28aSWT2bFHemnIMLJ5fjrQmKFisAFdLQ7cNnIZvhW7xRFC9lxyNO5rqIL88aT4apynx1QmDXxVGV%2BBAR%2Bzu0NBHXp%2FANG2sEra7KGkwMvja2j2JQ1am9a6MAmb%2BBH9rg%2ByErQVPMm%2Bpa00%2FR%2F4UP4pPtxNkrhgJJ67viAHAj11fAW%2BcbaMKztYpzWtnfPMGom%2BD8iKCIPCtNDMA4QSqeisb%2FWosQ9sgTVjrVDDZp5%2BpAQLyYIwa%2Bk1hTDD%2B5jEBjqkAayO8sZFO0CX4vcPNnLZKf%2FIhv8bJKtvwC9%2BWOkjDUDZTUCrVd0FBFI4J4pgkGVHLz34XX16fvs4um0AixLQdPkmB8Qe7FlUSjEyxUUnbh2rEct%2Fzicq%2F9epLvRnZYI7JLKm1GbuNI3uyhzJZXpyfJ0RUCzU7Q2%2Fp1G%2Fn1BwQL3kTd9m0QtYdUcNw3DhYaXCGz8PLkiygT2KFEOdhtG0FKIolK17&X-Amz-Signature=d6ea09f21bae1e76d3eeab1d9f395229dbcd26e7207d1a8fa1345a63e80e47d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPIV4UP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDbkAuEfC2B33NuZNdUL6V%2B4kGeM8ztF9ZHrEI3FEVGSgIhAOJ61Rogtw7oycDBHGO2Yu0WqwDlwoFwaDnkWp4UO7%2FoKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4iutL41rLsiUY8F0q3AMdnPA2z%2BAHwr7P%2FycB1glNepDEi8TJAtyVEVHg8%2BJolIes9z%2BQCtK9hgwIFvmxPB8mWerTGDRD6aLsveEF8HywpOowMgKLZwdG1UHXrHhDG4%2FqU5%2FX6eOkU9yTzw9V2C1biExXuQE9kLzouCFHcLV86kULVPWiJspMVaacWulHibnAFeUrRJBqsUFkdMnqMkrvH%2FFmJPB3HEFmMBZRoIuxCPZS5HE99Kbvb2uGUWBizYFkgAS0lzLO%2F3BaRn%2BU2LLhGBiDkPeyXjrUG0isRm9mXJB5rEx0%2BthnWs8cBKrd9cT4kU7PtCuCgdOgQvvqlL3ONAOtFe0opticFP11nUX1%2BDlkunnllSlZjkSz1VKAiwpdON%2BMQE3IePp3R8KB8FjzSC28aSWT2bFHemnIMLJ5fjrQmKFisAFdLQ7cNnIZvhW7xRFC9lxyNO5rqIL88aT4apynx1QmDXxVGV%2BBAR%2Bzu0NBHXp%2FANG2sEra7KGkwMvja2j2JQ1am9a6MAmb%2BBH9rg%2ByErQVPMm%2Bpa00%2FR%2F4UP4pPtxNkrhgJJ67viAHAj11fAW%2BcbaMKztYpzWtnfPMGom%2BD8iKCIPCtNDMA4QSqeisb%2FWosQ9sgTVjrVDDZp5%2BpAQLyYIwa%2Bk1hTDD%2B5jEBjqkAayO8sZFO0CX4vcPNnLZKf%2FIhv8bJKtvwC9%2BWOkjDUDZTUCrVd0FBFI4J4pgkGVHLz34XX16fvs4um0AixLQdPkmB8Qe7FlUSjEyxUUnbh2rEct%2Fzicq%2F9epLvRnZYI7JLKm1GbuNI3uyhzJZXpyfJ0RUCzU7Q2%2Fp1G%2Fn1BwQL3kTd9m0QtYdUcNw3DhYaXCGz8PLkiygT2KFEOdhtG0FKIolK17&X-Amz-Signature=a1d5635d9beadecb14add47a8b0968ba035f650845ba27734a2f34056aac4024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=0c98d991c8ddedc683d07e01f3ecd467a326066a4fe9f3c9b0487ad482d0d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74KDUU6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCk24eHBISrFI%2Fqu%2B6s4PB8EaEZcpA%2FJFoh6AeL8gJAVQIgIEExvbseo3n9H4b%2Ffuqv7D8026CQ3L5LAJLnuhXWrcwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAckJ3Ea8HddDvlmmSrcA5tr6jfBO7XZIFTSGj9IKcSDTSp%2BpBvbX%2FaP43XMRQ%2BROHdPMwRxWd8zXg6KYBkHgmloFy9owwbflR8MeoVx93MZgeu1gAWEsofe2HFoyBewhrIlw%2Bvl7oR5eVDTa9VdugFqzA3Zti%2FqH6AXYSJSEYxqq1I0e2m7SdsLNH1cMkZV0wsyuoFT%2BOR2v%2Bu0goHiW2RJJeUseX5lu2iveUvHZJBxiG4%2BxeXwCJPxxYoBf%2Bmg8IDqWkeOKthApZZWOVg9ZoMpdXSYNtIXtJHSlPdAnrhYPT9WDN4gbGGnMSDhH9ZEsLTBcuyA%2BnvikRLu%2Baaj7advLvmKyhHfYeQl6xA4EtfUEVN%2BDODdnL%2B1Zi2EPAOl%2F6ZWJA5qwCKQMYpTXk2jWqDvtJM7W2%2BwBwQYjkibYvtRHy15qHUk1Te%2FIaVF%2BnAbooenk2FNWX1VZzbMHPXOyZ4eb57Am9kq8cK0PVOUe5ecZwz06XS%2FM3CYv1daKJf4tY1%2BtTttSp98Nq6nTuzyNpvC85PyCrYdWAxS1UWNUSaF%2BV5neI4%2FtLeMhDo7%2FZ4896xap7XGsNNUzlkA2x6EbYLKE1UFQB3GUsT0n6OHuJnHyS18SgZejKSR5gyPN6u3EBgF9P9uY%2FIK6gGWMJj8mMQGOqUBFyGxM89xub9tAVwKBSGctArqoCKpzaFClZIgTXMRYu7aUCc%2F1QceavPxLv7qazb98Nt8LuhyVx9a3f28zZFS%2F1XcE18%2FB8t%2B4HRMQ%2F1dPjc54t6P%2FwrJynvWFynmRIoDJW%2BoFoqCfsyYVEIdgHhv1NRe1x0QASzS7dafWGmOa8Cryj7hqbgOp262KBHmuJdPKOcYFGd3g5PdmoF%2BcSdrDbMBm6UL&X-Amz-Signature=9c50eea60e933fd8b449d2dc3f69ea365a7086ac0569d32857b367ad20dd82c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPIV4UP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDbkAuEfC2B33NuZNdUL6V%2B4kGeM8ztF9ZHrEI3FEVGSgIhAOJ61Rogtw7oycDBHGO2Yu0WqwDlwoFwaDnkWp4UO7%2FoKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4iutL41rLsiUY8F0q3AMdnPA2z%2BAHwr7P%2FycB1glNepDEi8TJAtyVEVHg8%2BJolIes9z%2BQCtK9hgwIFvmxPB8mWerTGDRD6aLsveEF8HywpOowMgKLZwdG1UHXrHhDG4%2FqU5%2FX6eOkU9yTzw9V2C1biExXuQE9kLzouCFHcLV86kULVPWiJspMVaacWulHibnAFeUrRJBqsUFkdMnqMkrvH%2FFmJPB3HEFmMBZRoIuxCPZS5HE99Kbvb2uGUWBizYFkgAS0lzLO%2F3BaRn%2BU2LLhGBiDkPeyXjrUG0isRm9mXJB5rEx0%2BthnWs8cBKrd9cT4kU7PtCuCgdOgQvvqlL3ONAOtFe0opticFP11nUX1%2BDlkunnllSlZjkSz1VKAiwpdON%2BMQE3IePp3R8KB8FjzSC28aSWT2bFHemnIMLJ5fjrQmKFisAFdLQ7cNnIZvhW7xRFC9lxyNO5rqIL88aT4apynx1QmDXxVGV%2BBAR%2Bzu0NBHXp%2FANG2sEra7KGkwMvja2j2JQ1am9a6MAmb%2BBH9rg%2ByErQVPMm%2Bpa00%2FR%2F4UP4pPtxNkrhgJJ67viAHAj11fAW%2BcbaMKztYpzWtnfPMGom%2BD8iKCIPCtNDMA4QSqeisb%2FWosQ9sgTVjrVDDZp5%2BpAQLyYIwa%2Bk1hTDD%2B5jEBjqkAayO8sZFO0CX4vcPNnLZKf%2FIhv8bJKtvwC9%2BWOkjDUDZTUCrVd0FBFI4J4pgkGVHLz34XX16fvs4um0AixLQdPkmB8Qe7FlUSjEyxUUnbh2rEct%2Fzicq%2F9epLvRnZYI7JLKm1GbuNI3uyhzJZXpyfJ0RUCzU7Q2%2Fp1G%2Fn1BwQL3kTd9m0QtYdUcNw3DhYaXCGz8PLkiygT2KFEOdhtG0FKIolK17&X-Amz-Signature=15ee857436016d8fffb31eefc4c51d17362b1297eaf8dd73d851bae0f80e251c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
