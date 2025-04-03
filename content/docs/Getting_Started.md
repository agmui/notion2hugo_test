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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJKZGIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDH17tj1Ek2F%2BT5qOw2kYRsrIkVuMK%2FiumfASJ6br362gIhAPxDXPES2vvXarF%2B5F0KR6CZzYHPM%2F3UZcFnL2EtcI7dKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynM9lfesN%2BMBITd%2Fwq3ANQct956GDw4n3s5XSlv7KFlsDC7rn8mX%2B298frLS8JOlnjGzap0eYETbNrlKkB7BS5FZAiubmaqhfnSG98PXJkMqVJ0o2Rd3OYAcapxVebmWlGe%2BbgGmBF27o1YW5leSnpv9Gp7Z8JqdpjmXBURoJnRXHNw4qoSGFFJhWDQfGnIe0SYX3ghuOpFbFacp8VOogOngMV6bZZ7HxHYDMWKfKRWDU1E8tP1ZHCLwzJDnDsrsx7UcVosnIF%2F%2Bwr8LtxfaGdMwTW6K8IJDvs7feN8RD%2Bil2%2BcL%2BbIscjIFfbWtoNPwxRVc8SIKWapdZ99MXaKzM74kCWC%2BorIxo8vCNAfD%2BXBqF9xTMJr%2BgA%2BnIBsVvzi05Y48EBk66qNhvz99A%2BZKwjyPqU%2Bv89NDL0rqTJuv%2F7w7oqr3apd4R%2Fp3a10LFa7SNiRfcVC4vTHtqOOXCg3haDtj47hTYug6%2BqdmJonThMumSydWfF%2FHJhXkx2qSWX24qu43VdJWacxnJCk6OguANcUSCVpYq9Kko8SzNer3PvlWeQ58av401ycLHILGJrLgEZkhMTstZeeO98g%2Btei6re6beDSnvLGmTuMhrauCdWm3FgL30i%2ByXMM%2FPgWnotrkB9RPSa47ElrwQTFTCQ4bi%2FBjqkAZOasJ8z0jAhPrPXDqzomGI38%2Ft4cp8VI57NpzSY9rviRlTC7y5zHR9vZIdpZDev67qzqTpTQZBNWs2Z3Jt%2FfWEPKp0DIZIYXkcPGYbq4suCDKAJvltetvgOrGo7E6mIq55ZaWEkAk9HgKWsLN0dAg4JUQqxqUpDIVxbREvp5BonOCnIMjq5rB7Z3NLQRsjq2Tvd9hyE5BTuSDAvtq8CDJobMmix&X-Amz-Signature=122fa24abd0388fca9c10046dfa0ce4123c55c93740b70a02a6b7029d2d636b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJKZGIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDH17tj1Ek2F%2BT5qOw2kYRsrIkVuMK%2FiumfASJ6br362gIhAPxDXPES2vvXarF%2B5F0KR6CZzYHPM%2F3UZcFnL2EtcI7dKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynM9lfesN%2BMBITd%2Fwq3ANQct956GDw4n3s5XSlv7KFlsDC7rn8mX%2B298frLS8JOlnjGzap0eYETbNrlKkB7BS5FZAiubmaqhfnSG98PXJkMqVJ0o2Rd3OYAcapxVebmWlGe%2BbgGmBF27o1YW5leSnpv9Gp7Z8JqdpjmXBURoJnRXHNw4qoSGFFJhWDQfGnIe0SYX3ghuOpFbFacp8VOogOngMV6bZZ7HxHYDMWKfKRWDU1E8tP1ZHCLwzJDnDsrsx7UcVosnIF%2F%2Bwr8LtxfaGdMwTW6K8IJDvs7feN8RD%2Bil2%2BcL%2BbIscjIFfbWtoNPwxRVc8SIKWapdZ99MXaKzM74kCWC%2BorIxo8vCNAfD%2BXBqF9xTMJr%2BgA%2BnIBsVvzi05Y48EBk66qNhvz99A%2BZKwjyPqU%2Bv89NDL0rqTJuv%2F7w7oqr3apd4R%2Fp3a10LFa7SNiRfcVC4vTHtqOOXCg3haDtj47hTYug6%2BqdmJonThMumSydWfF%2FHJhXkx2qSWX24qu43VdJWacxnJCk6OguANcUSCVpYq9Kko8SzNer3PvlWeQ58av401ycLHILGJrLgEZkhMTstZeeO98g%2Btei6re6beDSnvLGmTuMhrauCdWm3FgL30i%2ByXMM%2FPgWnotrkB9RPSa47ElrwQTFTCQ4bi%2FBjqkAZOasJ8z0jAhPrPXDqzomGI38%2Ft4cp8VI57NpzSY9rviRlTC7y5zHR9vZIdpZDev67qzqTpTQZBNWs2Z3Jt%2FfWEPKp0DIZIYXkcPGYbq4suCDKAJvltetvgOrGo7E6mIq55ZaWEkAk9HgKWsLN0dAg4JUQqxqUpDIVxbREvp5BonOCnIMjq5rB7Z3NLQRsjq2Tvd9hyE5BTuSDAvtq8CDJobMmix&X-Amz-Signature=0a48a8887aa7ee2191993fc4bd31ba58b0c858debe15804baacf513e11898286&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKIM44L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFgvBuZbUgGIbvFSCln8ByJN%2B3ddNB%2FcYbcCWba%2B%2F1XPAiEAtsw8gxE89Y%2FBn7CALlfL6M1Q11wbYP%2BdSYQAa1uQ4IoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLipzqMT1c6Uivm%2B6CrcA8NT%2FqaYjXqk5a7bAHhXiY5kitAlsGgy%2FSoALPhr5fARjv%2F30cIQxBbpZDh%2BR3yyFOu7VLVFmmYmW2dKFdmXspkdYZQFyCYut3AGWcqC8IHcCKuj9aal4H87UEBTA%2BPCRewpyjqy9WT7S7RdMWHdsnfrkZnMFeAwhfZPTW9y3wDL4hmj1t7RbK%2FmiOnVWeSlJq2xN2VMwkhAT%2BoDDMVpbt0ih5IepqJZRqqeq5F9pW%2FFYeHAF9uEDrOvI8%2F90SGu3zUlfHEpoy%2BFmrH%2BSmH0fKLNHf9cG1vQvAf8H8Q198BtvmPxMWZs%2FWUlnKf%2BHRAgBrKqKhJvn1R%2FhVwY3%2F8MBMS65U9%2FCRdgvsa%2FjpB2I2Ka7ZrAEB9io0e%2BaKqdzu2nqEdW3Tl8fU%2Fpzt1cveUsAKiXI%2Bax1UBOzkwIVbN1vXDBvvHe%2FqtVo4qNCXpIC9GmxTqv8diSotXJfG7N8UOgXYduGGuH4AxKHNLJ5vACioN0FSOy3exxu9zn%2FTen7objmLyUlUWr9TvWWsqKgzuYUdRXp%2FOGj3vafUJ9K8FWw7jkL5uMTh27fvZeZe2a5HNCpsFCDiqK5kgHdsviLvUa4EaBnt9M6fORSyWHDqBNmClm48EoVFXOyFaINp6YMJriuL8GOqUBPiFhRvbq6jsBpLuMzk%2FusteC7Q7MIqgmpgmTF5vL0rwwn3zpyBjjAWQ3llrZEnxscvm3Hw2PANgeCMHBIpFMkqv1kImQph%2FAcbZLZ%2BOuTWqUNtPAIli6Ack%2FDzQEZNyhUkUPOdjtmsAOYWWOmod9sybwthl6CJe1tcy8iy0lafWY3n%2BfiRhypai%2BvjKAT%2FKwc78R166Cp3ngd%2FFqzwfTfBbHgxB2&X-Amz-Signature=98fdc61ed1bf495a261952ebb2c90754a39d67f58fe6d3ccb90c0f4eeb23eb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP732RJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIQDRSMgDNueKmQ0LsOIKgndhfIuEIvhS7cB6JdVT%2Be1e6gIfIqSSLnRdN5Xrxmk%2BZ73jRdMER3gp2p0qtUKuT%2BPMWyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSd1YnoncZimeVNMMKtwDs1Sm4TeGMmAWRNZsAT8SqZEFumR9u7bElnXD5rtin8nW2hL5ocU9uW6M9pZAXRi3WT8vr2dylA0evlOoiNyjjdVqpeZMC1mEK5u8Mnqcox9a4kBWfMC%2B0FtFP8Es2ih2LmQGWlHpT3N28gsB6GGEyJ7wt8XwgdV4NtzHfzBzzyV9zMPxjzLc8yG6C0nyqVwhf4K4v0%2FoOTpjgXq%2Fp4zKOMWTiMtr4MGWsWpsOyHit276wFwKmBvLSeESlGb0xIV3%2FmsuIGZHR2HOi1QRtS92iocNvqxhy1tpWUml5uSLdvGiKiH4OPeIu1ljWwFxoURfku%2FtUEYBN%2BQq9tUBs%2FtOFVXasaRPSwmAnVz30rQgVFwbtXYMFSYBbQssCx4lfYsZ1Un%2Fo405cxx6eXtuQIbxITmD4t%2F9l3gBHaIsokr3dKxlSmkhbwokRCp5vwdZjm1SylD8QaeO%2FS%2FRdKjriPW23Qwt0pT8TdMNu5g%2FiikkHN54qST7pvoTpgqxrjasr2Cq%2FwqQuBj%2Fd4UO%2Fqv0AHMzUrXKxmp1HQohUskPdtxWVcy0pqr1D8Jm5zOAbfI45bE%2Fzh2Ny2HrWPDvAHChZClRJXpqGfODuBW5MuYNo8ZD%2F6Na%2B4858fDl9Ev483ow5eG4vwY6pgG8V67LTOstLmeCgERaNZ2utBGSdUM2sjaHn3onIXxex%2BTC0TMcxMVhZycssEwbXLPBLzoJqotcT6QWdfU839OsyKKyq1KZMZ48BjisvmCCEOV4RR0Xi0R1VMXPgN96%2B15JbsabzEmcYIXxxCVpFSTO8fTRehYwHarsupBlvAswi8GsraHt5KvYjaX6lCOJsogeGI0geDh9nxf7mVHKcXE8LiXcRoD5&X-Amz-Signature=cd5aff1eb08c6057f2ca0c4dd0551a7ac3e8c7dc4ce3e2813458a46d5a849adf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJKZGIN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDH17tj1Ek2F%2BT5qOw2kYRsrIkVuMK%2FiumfASJ6br362gIhAPxDXPES2vvXarF%2B5F0KR6CZzYHPM%2F3UZcFnL2EtcI7dKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynM9lfesN%2BMBITd%2Fwq3ANQct956GDw4n3s5XSlv7KFlsDC7rn8mX%2B298frLS8JOlnjGzap0eYETbNrlKkB7BS5FZAiubmaqhfnSG98PXJkMqVJ0o2Rd3OYAcapxVebmWlGe%2BbgGmBF27o1YW5leSnpv9Gp7Z8JqdpjmXBURoJnRXHNw4qoSGFFJhWDQfGnIe0SYX3ghuOpFbFacp8VOogOngMV6bZZ7HxHYDMWKfKRWDU1E8tP1ZHCLwzJDnDsrsx7UcVosnIF%2F%2Bwr8LtxfaGdMwTW6K8IJDvs7feN8RD%2Bil2%2BcL%2BbIscjIFfbWtoNPwxRVc8SIKWapdZ99MXaKzM74kCWC%2BorIxo8vCNAfD%2BXBqF9xTMJr%2BgA%2BnIBsVvzi05Y48EBk66qNhvz99A%2BZKwjyPqU%2Bv89NDL0rqTJuv%2F7w7oqr3apd4R%2Fp3a10LFa7SNiRfcVC4vTHtqOOXCg3haDtj47hTYug6%2BqdmJonThMumSydWfF%2FHJhXkx2qSWX24qu43VdJWacxnJCk6OguANcUSCVpYq9Kko8SzNer3PvlWeQ58av401ycLHILGJrLgEZkhMTstZeeO98g%2Btei6re6beDSnvLGmTuMhrauCdWm3FgL30i%2ByXMM%2FPgWnotrkB9RPSa47ElrwQTFTCQ4bi%2FBjqkAZOasJ8z0jAhPrPXDqzomGI38%2Ft4cp8VI57NpzSY9rviRlTC7y5zHR9vZIdpZDev67qzqTpTQZBNWs2Z3Jt%2FfWEPKp0DIZIYXkcPGYbq4suCDKAJvltetvgOrGo7E6mIq55ZaWEkAk9HgKWsLN0dAg4JUQqxqUpDIVxbREvp5BonOCnIMjq5rB7Z3NLQRsjq2Tvd9hyE5BTuSDAvtq8CDJobMmix&X-Amz-Signature=d6eedbc388e94da87aabd67c8d6c57f0032603eee7330c8aaaa29bf2591b8d71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
