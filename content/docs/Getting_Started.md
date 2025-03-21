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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQZRNYR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFqel3yxWb8SGElCFdv%2F89XxmOuhU8s3MWSRQVYWZqR2AiEAqeX112OZWMu0bjrj5zblYjENZF%2FdIun1By5nEFluwx0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoZ4zVSs2EgFuXhRCrcA%2FVMCclrE79BpYNsgZqxl3y4xLL1Dd7s2MwzjjIBPxuox3TONRuSGuCKXd4%2FSRYPAadnnIUs%2F69wFkcgS1XM%2BxuW%2Fphq6SkYjdFe%2FDaNhHDBJ3Hl6lHlt%2BAhXBCx0Zk19e8IYwVBlMeRuE998nm99SNHMrM4V%2Fqh3id5vfCek7z3mWebihlWS9Qz28Bfyb8i5tmhkSRUaxI4EU2lENV%2BpzOuFl4jkz3yJzvxbWCKb4LA37efivwlL4NZvYT%2B6DRKiNAWwIsRj7DSRCKoRn%2FUosqo7RDhQyGnV1L5tgkDJVROeggveyBENpnRHIDEtFg0I6DQwi%2BlE%2FOl3Y2sNLRFxZgV6NrU%2BRJpt2p5UwqgYHFhk0hx1Uti%2FNRhZCIQW%2BgaxSmBFdfI1y1g3PkuCZ5VKrZZGNMSnTp8zznj04sKHxCUQ04tOjTMjsJHeNwY3LqfUGk7uVVimPJB0M6csrEeO8dVy%2BsXWhZG8zo8EtKwvx4%2Fll3ZLoC5rj1Zu3SPjv0TsuasP%2B%2Bi4abovroVYYtEKywv7YjBZKQqGDzb1AzIbyW7bWoZ73VX7TV%2FShoMhKmy3UpBNp0Bo5P3TauUfy98g5aw1tuNCglA6ZBACack0c%2B4VsYxG2F8c7l2%2BU2lMIma9b4GOqUBEty7ufS87PkaNdhfNfDtHdkmcWUVjOytkx0L0pzvgjMQTAvPUjf%2FM2amhImiOwY7dUibfK%2BEMpfCjCuzq6LPpfQMcfsZsMQllSDCN210nlPPGUJ%2FHVDG5gthTNlYKHZuOmabfYmJwT%2BR%2BC36d%2Bju2K7TKARMgJGuSDlJEKbp336PiIFfw0aHZ1%2BnRP7dWuuHuVrvbVgbKhPWpeF2l%2F5icaz7UmG1&X-Amz-Signature=034034805ff67b7e9370330b8681297fc98e4f97fad3de01ca18a802463b1853&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQZRNYR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFqel3yxWb8SGElCFdv%2F89XxmOuhU8s3MWSRQVYWZqR2AiEAqeX112OZWMu0bjrj5zblYjENZF%2FdIun1By5nEFluwx0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoZ4zVSs2EgFuXhRCrcA%2FVMCclrE79BpYNsgZqxl3y4xLL1Dd7s2MwzjjIBPxuox3TONRuSGuCKXd4%2FSRYPAadnnIUs%2F69wFkcgS1XM%2BxuW%2Fphq6SkYjdFe%2FDaNhHDBJ3Hl6lHlt%2BAhXBCx0Zk19e8IYwVBlMeRuE998nm99SNHMrM4V%2Fqh3id5vfCek7z3mWebihlWS9Qz28Bfyb8i5tmhkSRUaxI4EU2lENV%2BpzOuFl4jkz3yJzvxbWCKb4LA37efivwlL4NZvYT%2B6DRKiNAWwIsRj7DSRCKoRn%2FUosqo7RDhQyGnV1L5tgkDJVROeggveyBENpnRHIDEtFg0I6DQwi%2BlE%2FOl3Y2sNLRFxZgV6NrU%2BRJpt2p5UwqgYHFhk0hx1Uti%2FNRhZCIQW%2BgaxSmBFdfI1y1g3PkuCZ5VKrZZGNMSnTp8zznj04sKHxCUQ04tOjTMjsJHeNwY3LqfUGk7uVVimPJB0M6csrEeO8dVy%2BsXWhZG8zo8EtKwvx4%2Fll3ZLoC5rj1Zu3SPjv0TsuasP%2B%2Bi4abovroVYYtEKywv7YjBZKQqGDzb1AzIbyW7bWoZ73VX7TV%2FShoMhKmy3UpBNp0Bo5P3TauUfy98g5aw1tuNCglA6ZBACack0c%2B4VsYxG2F8c7l2%2BU2lMIma9b4GOqUBEty7ufS87PkaNdhfNfDtHdkmcWUVjOytkx0L0pzvgjMQTAvPUjf%2FM2amhImiOwY7dUibfK%2BEMpfCjCuzq6LPpfQMcfsZsMQllSDCN210nlPPGUJ%2FHVDG5gthTNlYKHZuOmabfYmJwT%2BR%2BC36d%2Bju2K7TKARMgJGuSDlJEKbp336PiIFfw0aHZ1%2BnRP7dWuuHuVrvbVgbKhPWpeF2l%2F5icaz7UmG1&X-Amz-Signature=8eb8df21ce394008c4bb3ca8ff5908c1c67beb7a956798a7c0e1b4207a33124a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGDXCJ5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDBRYe5Ki0MZtlrjsDq9M%2FKKNxBKxLf9oNF4ii2GRSf3wIhAJbgv28cSUy7Cy8WngMmSB4MHs0Wu%2F3ozcpYWST09EmrKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq1UtfnPI65XmofBIq3AOxCsngOw18Laml4dCCncQ%2BcN6vqZoudaZzJZRthvr1cvJliDfITE44jAfqwzLrtvwfSkZvyMQi3zVL3xz1RVYjY9qy%2Bd95AKKb5yaEm3yHX4d9ZuZfh27Y6tc1RheD5jfhuPJFbDEtUYuP8v6DJCTA9UFjrXJfMIs7u3fCLGoRRsbLIufHjnRAqzlav7e4zHfXaWmi%2FzrVo3EdNcylaDq7D7I4VB6orQXh2tfXcFPPZuLz%2F%2F9FLKCP%2B08UK44clNR5AWtCCG%2B%2BKUH2mWCmCFvFCcqifWQ0bWy6lIxLpB3vHfg5HvMGRwoWcw2F%2FMBRNuSmDugivfr%2F%2BxkFEM9%2BnST%2F877MNrzxMsWhP6oI95F0fHV9j3UyJgqb%2B2Ml%2BRqYJEPdu%2FFRo4TrUCIFvRMQFwfTVYpwpjlmMf3cqQL1fsnmCFBiRh%2F3dS3K%2B7sObP05BfWjhpiYH%2F9Yu4ufCkpM44v2mLIIUsASxHkPc3PJCa3eNJ3d%2Fpai9ME10E2JansGkA0fS6rZxnc7fuvijuW1dkckkMP0eT0TtapbExutfDRCP6GhsmasDkVZXP%2F%2F8GLcD%2Fosv%2BDab8Px9cmsrVN6EVKRwA%2Bak0%2BFQLYUB0cfEvF6%2FVKf2ZGTua0V6aYlwDDgmfW%2BBjqkAef9Am75HZ3L%2FGEokdVpOBiNpDNu%2FsuiI1vgRK0obufMycLclr%2B6zcmayXw6wf9B8fqZ8AOhzExt3rQUvDp%2BAmFNipW94HuXoyi2ShX%2F8AyqeRgc3vu7eA0n32xds4vmo2gHn62aqcxNvReHn%2BkwhgPPjDOhfaMfWfeArfWmQsz842q7ec7Z5%2BIcGkv%2Fp%2BQWFrOALwUt4b71dlhE%2B9WL7jyj8pY3&X-Amz-Signature=249044d6674166d681623495ba6020b9afdc071a40bec0ccfd8f83750c82efe1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5RA6OK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGj6ykmx5KCL045eI3tBj5VVudWZ%2FXtJTQ5FV%2BtgIUGxAiEA65UW1jRNvCTJRiMlTq69z4v%2FaywfpSPlC%2Fht8%2BBHWJ8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPHwruJktWm4b%2FyhSrcA0VeoSHIe%2BKBBcpeRCU84Tcy487mvqLQmPp%2FFaOC7cee8fv47Ti%2Bp7VBNXyhws65KWzOE%2ByPk%2ByXQuLyBfDDUSGC%2F60oCzDUCikWkxmSbLUmZHfmPVX6acaAeiVahQ5eTu4Kb8O5KHzh3ZIFUpoEpnlTsgihFmAimPBYwbpTrn%2Fs571NjQRmE7QvfaLAoBzv1daSjuERvGRhihnEVqibm02yxM7NiR1vlkdDxOZd1H7GGSG1ljViSYkQ8J7JikFL06MVsfIHtboPQV5St9Yyzq7i7WsCIJK18IGWRgQUjphm6kIy%2FWfozmACq4iljzYkTwfFJLZ1xCqFX211PCdOXNonNSxdGVbxRFrvgOV19mYGoqKd%2FSQQaTLKsUaXpIYNg4xL1BM7weVVOfYYm1m4gZm4cJohbJb9MtF0kYfwKKNlK8jzxUlGCoBYCMWQfkZS6yBlVsGlLYA%2ByzbBsVClwSelCOnkUiTa4RwivLxEK1Ge7uB6DS%2Fe94oG6OpUEvNfSpgrZHGb8hZKXqqjhTYq3PCQrRwSPncg6A4aaVud%2FJAYinFzHGYCTBkdHSHklwRmi%2FNghJFTW8UYAVkJV5sdOHH2eYKUQFKL3c5Lnf0RAID8%2B%2BybHj%2FhgVCdWETSML6a9b4GOqUB0f%2Bth8Y3PtXBDlu%2FQRep4eFfWwFGhMd%2FW0fYlqa6u7oyEsNMh9l6ShaqOJctzcHPo5JA3uJ26LvSBy2W2GDXOS6Tv%2Bzp8V3duvfanw%2Fnzf72UA9rzuSeB9yUaIkcYYsKwHT2nPJ6ZfoIhX7FYHZMxvUyhY3b%2B98ppDrEuGO9yyfv92VRqRwl03Exn%2FiujDBFfcfHCTw%2FhurOZbDSmhvCf1Fynqcx&X-Amz-Signature=7337b70e659ca077fcfc0347049eab92a9ad14706a165385a29af33211a8c00d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQZRNYR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFqel3yxWb8SGElCFdv%2F89XxmOuhU8s3MWSRQVYWZqR2AiEAqeX112OZWMu0bjrj5zblYjENZF%2FdIun1By5nEFluwx0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoZ4zVSs2EgFuXhRCrcA%2FVMCclrE79BpYNsgZqxl3y4xLL1Dd7s2MwzjjIBPxuox3TONRuSGuCKXd4%2FSRYPAadnnIUs%2F69wFkcgS1XM%2BxuW%2Fphq6SkYjdFe%2FDaNhHDBJ3Hl6lHlt%2BAhXBCx0Zk19e8IYwVBlMeRuE998nm99SNHMrM4V%2Fqh3id5vfCek7z3mWebihlWS9Qz28Bfyb8i5tmhkSRUaxI4EU2lENV%2BpzOuFl4jkz3yJzvxbWCKb4LA37efivwlL4NZvYT%2B6DRKiNAWwIsRj7DSRCKoRn%2FUosqo7RDhQyGnV1L5tgkDJVROeggveyBENpnRHIDEtFg0I6DQwi%2BlE%2FOl3Y2sNLRFxZgV6NrU%2BRJpt2p5UwqgYHFhk0hx1Uti%2FNRhZCIQW%2BgaxSmBFdfI1y1g3PkuCZ5VKrZZGNMSnTp8zznj04sKHxCUQ04tOjTMjsJHeNwY3LqfUGk7uVVimPJB0M6csrEeO8dVy%2BsXWhZG8zo8EtKwvx4%2Fll3ZLoC5rj1Zu3SPjv0TsuasP%2B%2Bi4abovroVYYtEKywv7YjBZKQqGDzb1AzIbyW7bWoZ73VX7TV%2FShoMhKmy3UpBNp0Bo5P3TauUfy98g5aw1tuNCglA6ZBACack0c%2B4VsYxG2F8c7l2%2BU2lMIma9b4GOqUBEty7ufS87PkaNdhfNfDtHdkmcWUVjOytkx0L0pzvgjMQTAvPUjf%2FM2amhImiOwY7dUibfK%2BEMpfCjCuzq6LPpfQMcfsZsMQllSDCN210nlPPGUJ%2FHVDG5gthTNlYKHZuOmabfYmJwT%2BR%2BC36d%2Bju2K7TKARMgJGuSDlJEKbp336PiIFfw0aHZ1%2BnRP7dWuuHuVrvbVgbKhPWpeF2l%2F5icaz7UmG1&X-Amz-Signature=a41dcbc2a303e210e27c0a1cbdcbf5874b54e72153b7eac0ec79acc8dfba4a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
