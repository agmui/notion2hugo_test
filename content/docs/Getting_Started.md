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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3CW6GX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDsskvbTL7z4kMgn3enq0wOpsq8B71oXLb0jb8bVJ2JuQIhAN1T0ACQ%2FQTsi6buwXAgaDW3lzGDx7Qd%2FMsZoS0B9SgQKv8DCHwQABoMNjM3NDIzMTgzODA1IgyNMyUp2IaLr5UtXEIq3AMSNie%2FJU11T0OrsDM6Pd1XL6oYxubnSM93DB2HZ2KwzHPR0iU13eU%2FfrVkUEjDXwWrwo7XuL9jlPpzTz9HDqWPVy%2BuAguR74duQ756m0qAYnZGSsZihhUSdOXL2TH%2BRMNyQ0UW2bpSHVeF16OQKFbhQCtdqh9u%2FD9AVaIKhqekOUIaQnOA%2B23n0nDaRIeAQK5NiYSpSOvLBcd3DcdciY%2FOEAiMOKo2eF1%2B4bbni74Kjfwza2nxf9e248lzunMeUCEZ%2BCoew796YaXgChDFQwQG22rzeHPtZLyrOci47bUBjloQNqxq8WADxJW4lZrBanfAtrC%2BGmMcFXpThQsdsABX%2FZY3XO7fTHTz9aq%2BGJWT0yE2CbBRd5HORL14mXSA6hQDMsE%2B8pw%2BrHQbaEbIYYhw0jC%2BjWD%2BWo0E6GKTxvgfH1w8xENViGHVtCFeOYVSTcqMKLPWDXvmyPzOd0Cu%2FnVyD%2FMnk9e9kvVlqVCu6o7xxpa%2FMHEZ8UoepaNISsi%2B2QTZsDR2wMdg4bUB46qkCocFGC6kiTe%2F%2B3Bp%2Fxe7OIOTQQwfPcNlaHW5njuX%2BL04%2Fh5DjdH8JDNkA6dy3q8MLUsQxHiPy5PcWXhfcN7FEh%2Fl%2FmlMuvEY2r5xlSwpFjDvtpm9BjqkAbBQkK2mIh%2FWLq51S593ndLmRKS%2Flg3EJ%2Fqu3POO59tLGwaYKiv0SVm25%2FKQeJJg68J3DpOmD8mKHsuorNEdXkJObNyzrePcFwLMhGoRe%2FTX1ZhYJCrt7QBFY59rhqI9ruJ2nttXfVIEbAsud5rtutHQWLphFqZ4CORHNS53Rd5L1uKt0BI2ITaeW7pFkEyu2%2B4twEcqMbmNMwwzjJRqr8sTHXid&X-Amz-Signature=375d151e2874b0ab2ed7fb51fa56b8b6b6228265e301f05c691b92e287739425&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3CW6GX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDsskvbTL7z4kMgn3enq0wOpsq8B71oXLb0jb8bVJ2JuQIhAN1T0ACQ%2FQTsi6buwXAgaDW3lzGDx7Qd%2FMsZoS0B9SgQKv8DCHwQABoMNjM3NDIzMTgzODA1IgyNMyUp2IaLr5UtXEIq3AMSNie%2FJU11T0OrsDM6Pd1XL6oYxubnSM93DB2HZ2KwzHPR0iU13eU%2FfrVkUEjDXwWrwo7XuL9jlPpzTz9HDqWPVy%2BuAguR74duQ756m0qAYnZGSsZihhUSdOXL2TH%2BRMNyQ0UW2bpSHVeF16OQKFbhQCtdqh9u%2FD9AVaIKhqekOUIaQnOA%2B23n0nDaRIeAQK5NiYSpSOvLBcd3DcdciY%2FOEAiMOKo2eF1%2B4bbni74Kjfwza2nxf9e248lzunMeUCEZ%2BCoew796YaXgChDFQwQG22rzeHPtZLyrOci47bUBjloQNqxq8WADxJW4lZrBanfAtrC%2BGmMcFXpThQsdsABX%2FZY3XO7fTHTz9aq%2BGJWT0yE2CbBRd5HORL14mXSA6hQDMsE%2B8pw%2BrHQbaEbIYYhw0jC%2BjWD%2BWo0E6GKTxvgfH1w8xENViGHVtCFeOYVSTcqMKLPWDXvmyPzOd0Cu%2FnVyD%2FMnk9e9kvVlqVCu6o7xxpa%2FMHEZ8UoepaNISsi%2B2QTZsDR2wMdg4bUB46qkCocFGC6kiTe%2F%2B3Bp%2Fxe7OIOTQQwfPcNlaHW5njuX%2BL04%2Fh5DjdH8JDNkA6dy3q8MLUsQxHiPy5PcWXhfcN7FEh%2Fl%2FmlMuvEY2r5xlSwpFjDvtpm9BjqkAbBQkK2mIh%2FWLq51S593ndLmRKS%2Flg3EJ%2Fqu3POO59tLGwaYKiv0SVm25%2FKQeJJg68J3DpOmD8mKHsuorNEdXkJObNyzrePcFwLMhGoRe%2FTX1ZhYJCrt7QBFY59rhqI9ruJ2nttXfVIEbAsud5rtutHQWLphFqZ4CORHNS53Rd5L1uKt0BI2ITaeW7pFkEyu2%2B4twEcqMbmNMwwzjJRqr8sTHXid&X-Amz-Signature=e9a86c2053d1cdc98ee31ea3a09bbee8912606699edf707bc80229c1bcbcd334&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BOD65W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGIySX%2FoaAScLDjGZYdZODIvmrSKULKFmVAZK5HNtgvJAiEAifWzkOpl8BKeEeC3KssXbA1V8kHMRcwx%2Fqx7jQ5LOS8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDN4t0bw0NLETkpbGJSrcA%2F%2BOwByR8GwSSCH2wI%2FB4cKoI51hY2d%2FldX2WUdCSKUmoxy9LyDtcKSSfeRt48WEe0ypb%2BZUvnuTmb6pAOr2YSQ0JJofnITuKoHQYZ%2BA6ageMJVGKB2BePtKE%2B237b5UJ4a6AiGyu4V7fIkzXQxRk4Fkd08v9m%2FRO%2BUeragsfvYlMSl0d5hS3uvq%2BTtiEYlbNrU%2F7eF%2FUIfyNjk0wiupNOjlNFRGVTZDqb9t5%2F%2Bi8bMr5a5WC0IR3gNh%2FiaG6d97f7X%2FUKjwPtB9cRJ2ZqkBO%2FldtzCaKtQJomXXrgQ4JlpLvSO2sBaQugPWI%2FgH53jSKOOzlAjTvw%2BqB%2Bh137ejy5CE%2Bfzi7LlO7Th5uVA7%2FDreUDPCcDdtyyLOOIw3j6MRL8C8DWsEBvEzsHkWNAohbNWBuFeX70SQD%2BRVNf%2BA81NDPjXjhvsaRSA%2BcsuOGyGXvY8Kkq8ut88vYX2JnzFVYloLX5aoTAR1vDKu0TGHYo9vat2%2F5Utz7vTd0BZGtv97uuDPtWkcD7kDn0Tno6mnONQ4GY%2BOL2xDsLoTUFzVv2hqlbqQipmai7V46IzW9rTX5tluqOlO%2FibCNvXEkH7w%2B4KjQH4A2tpwcCXNWCXlNrkiNpK2rPZkgA%2BnOdo%2FMLe2mb0GOqUBHMgkxmEhbTU6mgUtT%2BO%2F5tWmCG9OE0SlRrz9mEYy%2FX8V5V9EtHFWM3ciQWNB%2FYcwYtbE9Lf1wBL6CNQmWAUVd8%2FjM5f2QWP%2BpSgAAkKv3VGimBqgnvJ7yzJ3nmfMrxg1iQtLbdcKAJARWh0YIVvUJplA1Grp7Q55jY9qzDBgGlFa7r%2F%2FlZTLT5lG%2B%2BbhUbzpNIUsDYugaHS%2F2o5zU7u%2BVdRMm5%2Bi&X-Amz-Signature=e035c490a4a242d7bfbcbd644a00748b91fca86774616f44991b741d5b32eee3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBMCPT2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCsd3XGkStKsKlmbSueN9i7MhqCbnzOIks8srHgOd7RUQIhAIMimCFx0Sf%2FB4KBz0K%2F9M2CFG7dO8BlFmwRQoL4UI1XKv8DCHwQABoMNjM3NDIzMTgzODA1Igw09XRxYjtrDMBnYcgq3ANr82cMelby4hPRMWdyIETx924mf1y1x7wZEwKDU2OVZ%2FJ2nw6eYDzamz4e6iOYRQH0N9RrCn%2BaWu94PW%2F4K9dA%2Fwbhr8UZBdDdmFp5z%2FS%2BV2G4sZXXGBq%2FUfZ2KD1rqh9FonDZ0aeaJPwTtDcZ1KUcVACSPuu97GKE0SSrXHYiJscReHn4hTbAYXE4EPFXmbpPEWaxuhbrb1Nj4kW227YeXH5v79p9aQC97TmpXdaCIQfguom1llL%2BSigkOMsl2zmMUG%2FvDhdRaRau2iX4Mu6Ya%2BALsRepsPPQN3Zv%2FfQDn19ulzZ3bwCseR%2BunUAl3y%2FIVFLXi4nwHpBXsof2QJkzVPKc%2BqvJ1x8m%2FiCnLFRE2XIR8BadlTJ%2F30g07U8GsI0wBjK6QM1jtpoyW7BP0wzqJsnImn4eku9WHCXPjryTShNTrcmu26ceT5i%2B5yjT32ViJYCIptsnE9jEhoopH5e%2F8%2Bx4wIcMkBKzUHGf00qZVSHjW1jcohbRDCIdx1LOQ7pGU%2Fkjs1IdFH5ghKUOEDGhHfSPIZbrH2RAHBlYfTRFq9rCiteT7Yj3j21NwX290QmCu5RZH5l7pxCGmVuRoWgAOdKf4eKLGX7uJcVDM9L5auK8Og4Q6UqyLunQTDCit5m9BjqkARSuPQ5HGdMYj8Gnen5Ep8ehiNvmVBKdolvx7UrJLtZk3G8w6sUnb7kFCetEJETrAcWSxlb1C7J7AWwm7RP%2FkNdZ1jz5BAovvv%2B9JAG2FP7qb5j51oossIWfp0y8m6pdvVHkqEeZN3ZoCdSI7QuclKY5FYLX%2B11ad8Sh0xJgnjmbW1NUzsKS1hv23Vl%2FxQ4Vr64m4TVGmOfQW9TOGe1wSPKe9X3p&X-Amz-Signature=b72f286858290821d39c434517a7e437af0738620f1a49886ae99575953e3ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3CW6GX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDsskvbTL7z4kMgn3enq0wOpsq8B71oXLb0jb8bVJ2JuQIhAN1T0ACQ%2FQTsi6buwXAgaDW3lzGDx7Qd%2FMsZoS0B9SgQKv8DCHwQABoMNjM3NDIzMTgzODA1IgyNMyUp2IaLr5UtXEIq3AMSNie%2FJU11T0OrsDM6Pd1XL6oYxubnSM93DB2HZ2KwzHPR0iU13eU%2FfrVkUEjDXwWrwo7XuL9jlPpzTz9HDqWPVy%2BuAguR74duQ756m0qAYnZGSsZihhUSdOXL2TH%2BRMNyQ0UW2bpSHVeF16OQKFbhQCtdqh9u%2FD9AVaIKhqekOUIaQnOA%2B23n0nDaRIeAQK5NiYSpSOvLBcd3DcdciY%2FOEAiMOKo2eF1%2B4bbni74Kjfwza2nxf9e248lzunMeUCEZ%2BCoew796YaXgChDFQwQG22rzeHPtZLyrOci47bUBjloQNqxq8WADxJW4lZrBanfAtrC%2BGmMcFXpThQsdsABX%2FZY3XO7fTHTz9aq%2BGJWT0yE2CbBRd5HORL14mXSA6hQDMsE%2B8pw%2BrHQbaEbIYYhw0jC%2BjWD%2BWo0E6GKTxvgfH1w8xENViGHVtCFeOYVSTcqMKLPWDXvmyPzOd0Cu%2FnVyD%2FMnk9e9kvVlqVCu6o7xxpa%2FMHEZ8UoepaNISsi%2B2QTZsDR2wMdg4bUB46qkCocFGC6kiTe%2F%2B3Bp%2Fxe7OIOTQQwfPcNlaHW5njuX%2BL04%2Fh5DjdH8JDNkA6dy3q8MLUsQxHiPy5PcWXhfcN7FEh%2Fl%2FmlMuvEY2r5xlSwpFjDvtpm9BjqkAbBQkK2mIh%2FWLq51S593ndLmRKS%2Flg3EJ%2Fqu3POO59tLGwaYKiv0SVm25%2FKQeJJg68J3DpOmD8mKHsuorNEdXkJObNyzrePcFwLMhGoRe%2FTX1ZhYJCrt7QBFY59rhqI9ruJ2nttXfVIEbAsud5rtutHQWLphFqZ4CORHNS53Rd5L1uKt0BI2ITaeW7pFkEyu2%2B4twEcqMbmNMwwzjJRqr8sTHXid&X-Amz-Signature=77553811354ad51b06c839476ff1eed12ed7777745c1d7bbc58f4855f362524b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
