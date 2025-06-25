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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HODXAT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC4CRxNbc%2FJp4TlG6TqC1V%2FZfH3n%2BSu8ocDyvbXWUqx4AiEA9%2FSiWe9EaOoDPzeDWoo6oNOErCXK7SqHXcGL75ARcpgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAyQzR43xZJU7c3jWyrcAwvyg9%2BjCranG0zn7yI5ptCU0Zg%2F%2FvatjvpNszdCPCvkhXOp1mEmnJM6vtbdd%2BPAvBGFFazKRutZueoVYrDIgljNC06qBhNAJUen%2FFMgC%2BsBkmGkRCy35kYyApHSvhYyl1wA7e5fGc8%2Fy03irKAIYiSR2H%2B2zN7C7oRzFGcLVTmPZ6jgPjxDSfib0%2B5YWEgDtsqDZzIDacGHPdD3g0e1T04GDbnQ4ipOF11vGfib%2FIOWq05jls1aDbBGeZKGfQ04m3TB9F1kVzONOE81B2lO%2FCd9CufUo9mUhMKV04BTPBLzfvP91E5jMHIr17D16WM1ASa0C0Ox9ocp3HXLAtL4j6k0R%2BPshQd3fgFtoKIkYCaWgjFFvtesH0hqnLA3GgQUsxa%2BdyoKEvcjLSPPXhluv8UG1e8wedHa3%2Fn3U73r19HDwrvdenmTSi97BWnrZsOgnVDKhQWr4wkEeOIlDLd%2FoYr4oqc8DGbIOXG%2FE6KwZd0d2fC3ipRLqJBtEXhHtITJcQy45oU%2BvZ11Z15ImwVWDvLjQhY%2F%2BTQKFaaqUbFJqKdHAqbHJeOy6IQql59x9zafS1Nc2xLAyTPRGp5azHppE2R4CLCTyiikaBo6%2FwHL5kPOfeqRZmKc%2ByY5E5u%2BMOOM8cIGOqUBMPqqFRXV9law9Ys9hC20jllp9yAoT0aZONwThyfUvG%2Fu0VmE%2FYx7yGYcJB8MudrERup7mkz%2FQuI%2FjxH3ipJ6tgT2oRWo9WooWBNyG1MxOm2rmb9zlR%2B%2BSwDKk%2BjC1NKXFTc29eqXh%2FnkHIDcFWwd%2FswDfm6Ve91FXyt6Kxv7uwje94vt0ijGkZUUfRWXouRsKsWPGf7%2FohfTHV30oOLpBjmhGaiM&X-Amz-Signature=e90f83e4e319bc5924293de1b9d66ebb28d3c46448b75b5df0f4dac04b87d63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HODXAT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC4CRxNbc%2FJp4TlG6TqC1V%2FZfH3n%2BSu8ocDyvbXWUqx4AiEA9%2FSiWe9EaOoDPzeDWoo6oNOErCXK7SqHXcGL75ARcpgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAyQzR43xZJU7c3jWyrcAwvyg9%2BjCranG0zn7yI5ptCU0Zg%2F%2FvatjvpNszdCPCvkhXOp1mEmnJM6vtbdd%2BPAvBGFFazKRutZueoVYrDIgljNC06qBhNAJUen%2FFMgC%2BsBkmGkRCy35kYyApHSvhYyl1wA7e5fGc8%2Fy03irKAIYiSR2H%2B2zN7C7oRzFGcLVTmPZ6jgPjxDSfib0%2B5YWEgDtsqDZzIDacGHPdD3g0e1T04GDbnQ4ipOF11vGfib%2FIOWq05jls1aDbBGeZKGfQ04m3TB9F1kVzONOE81B2lO%2FCd9CufUo9mUhMKV04BTPBLzfvP91E5jMHIr17D16WM1ASa0C0Ox9ocp3HXLAtL4j6k0R%2BPshQd3fgFtoKIkYCaWgjFFvtesH0hqnLA3GgQUsxa%2BdyoKEvcjLSPPXhluv8UG1e8wedHa3%2Fn3U73r19HDwrvdenmTSi97BWnrZsOgnVDKhQWr4wkEeOIlDLd%2FoYr4oqc8DGbIOXG%2FE6KwZd0d2fC3ipRLqJBtEXhHtITJcQy45oU%2BvZ11Z15ImwVWDvLjQhY%2F%2BTQKFaaqUbFJqKdHAqbHJeOy6IQql59x9zafS1Nc2xLAyTPRGp5azHppE2R4CLCTyiikaBo6%2FwHL5kPOfeqRZmKc%2ByY5E5u%2BMOOM8cIGOqUBMPqqFRXV9law9Ys9hC20jllp9yAoT0aZONwThyfUvG%2Fu0VmE%2FYx7yGYcJB8MudrERup7mkz%2FQuI%2FjxH3ipJ6tgT2oRWo9WooWBNyG1MxOm2rmb9zlR%2B%2BSwDKk%2BjC1NKXFTc29eqXh%2FnkHIDcFWwd%2FswDfm6Ve91FXyt6Kxv7uwje94vt0ijGkZUUfRWXouRsKsWPGf7%2FohfTHV30oOLpBjmhGaiM&X-Amz-Signature=e79d2a694cce1116c73def085abe1885575a42860bf9ea7f1640d9830d05f132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HODXAT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC4CRxNbc%2FJp4TlG6TqC1V%2FZfH3n%2BSu8ocDyvbXWUqx4AiEA9%2FSiWe9EaOoDPzeDWoo6oNOErCXK7SqHXcGL75ARcpgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAyQzR43xZJU7c3jWyrcAwvyg9%2BjCranG0zn7yI5ptCU0Zg%2F%2FvatjvpNszdCPCvkhXOp1mEmnJM6vtbdd%2BPAvBGFFazKRutZueoVYrDIgljNC06qBhNAJUen%2FFMgC%2BsBkmGkRCy35kYyApHSvhYyl1wA7e5fGc8%2Fy03irKAIYiSR2H%2B2zN7C7oRzFGcLVTmPZ6jgPjxDSfib0%2B5YWEgDtsqDZzIDacGHPdD3g0e1T04GDbnQ4ipOF11vGfib%2FIOWq05jls1aDbBGeZKGfQ04m3TB9F1kVzONOE81B2lO%2FCd9CufUo9mUhMKV04BTPBLzfvP91E5jMHIr17D16WM1ASa0C0Ox9ocp3HXLAtL4j6k0R%2BPshQd3fgFtoKIkYCaWgjFFvtesH0hqnLA3GgQUsxa%2BdyoKEvcjLSPPXhluv8UG1e8wedHa3%2Fn3U73r19HDwrvdenmTSi97BWnrZsOgnVDKhQWr4wkEeOIlDLd%2FoYr4oqc8DGbIOXG%2FE6KwZd0d2fC3ipRLqJBtEXhHtITJcQy45oU%2BvZ11Z15ImwVWDvLjQhY%2F%2BTQKFaaqUbFJqKdHAqbHJeOy6IQql59x9zafS1Nc2xLAyTPRGp5azHppE2R4CLCTyiikaBo6%2FwHL5kPOfeqRZmKc%2ByY5E5u%2BMOOM8cIGOqUBMPqqFRXV9law9Ys9hC20jllp9yAoT0aZONwThyfUvG%2Fu0VmE%2FYx7yGYcJB8MudrERup7mkz%2FQuI%2FjxH3ipJ6tgT2oRWo9WooWBNyG1MxOm2rmb9zlR%2B%2BSwDKk%2BjC1NKXFTc29eqXh%2FnkHIDcFWwd%2FswDfm6Ve91FXyt6Kxv7uwje94vt0ijGkZUUfRWXouRsKsWPGf7%2FohfTHV30oOLpBjmhGaiM&X-Amz-Signature=80633ada0653a807052b19e63663260cc4a47cd769c96ca9a411cd80f7fb7cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZU6E7S4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF6ZSSTESjIFJW7CiINkwtKRGoJ6kGXJW2z8JFX5IqmGAiEA8dw4tm0vgqHYThVuC42zXneW8mznj2Bl05VypFwdp04q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ6wcI6f0WqhFknjHSrcAyfZ0RKEqGOMpr7U6xm6Nunn36hORCJf4NiNxUDDTiu5AaXq6Z95cG59kfpW8gHpGgzecA6R3mWmDUR8dW%2BxNykgdHYdV4C2pEkep%2Bszp%2F2qTRRcj9AaTkY37Bcncwba%2FhVKN8ciaZez2HYBLM2q43JemxwHDdvtmv8cHW04ReTXO2dkdLMsNFZXLGjWlwcJ3jXu1BXEVZTrqjleuUAMsR19w%2BK15DMmyuX%2FS0LKbnXR6bB%2B9OmMPu0m9yNDbeP4rz%2BBhvHqLHzsKKAKT%2BcGr%2Ber%2FrYYImyuEs18U1Smcbfl7xYArBqkFHErTwfGR4zBZ1j5mT%2FzlEskZXw738ozZjh7LSXmOMowvl%2FDmEcpclpTFVkbRVTUbdtxtmHMPkKuUdRT2dWr0sVPR3pG3oyj8aJd4iPSM2O3XSMRu%2BlwuMJp%2FmN7OQSzS531%2BPF6VsWdlwvC2AE53vA8NrtFPzPAtabfLH2%2BiK1WfAOuqZrNuW20gkJZtn7DC9ldjSrDxacfAZcZiPTGXUUGDDlZlyr0sO4BD5Rmkk1J2yxxvm9ZDMTqJ%2FSmcLtB%2BnfvGnXmU8niNB33NSKL3UhFH2ZSWHJH3z85wooc%2BXuH2q6ZzbY%2B3S55pee3goHhb9YP%2B%2FDPML2N8cIGOqUBC346%2BdLR67v0KekKy2TyzxgjG06jonL%2FyCmYpcrssC9HN7fjNKm290OADFszSoQKD81MTnsvpOnszuI8%2Bd7y44O%2B6pKRjGrnQRvj9EYsOMHhoWDjvWWSE8Haqs7lySVJBT6dji8cILDEzDJSrAylrdgExJCjphL9xnSol0OiCr2JJaYoiHixAjnwGB%2F9O51dHSop44DC%2F5KB%2F1OH7czDJUTT1Wq9&X-Amz-Signature=c8776bbe843daf8e030c435be3d9a81e8c5aa9a47661c208cfa730042b6c0d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DIREF5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCyC7WAdaly1PWlk1De2JhgsQ2f9AVeZxY1hhZK90bwxAIhAMnmpO%2Bho5R2fN%2BJoQgf4ikHvFVLiAHEHkaBwcoFHV0TKv8DCEwQABoMNjM3NDIzMTgzODA1Igw5hIwPC6Y5azg%2Ftgkq3AOaGiB8nkA2GhD3l03Mr%2FIRQRQIxtN9DlR1F3%2BN4Yhng9psVAcC1eJV6FvO5dITonS7b%2FV2ges7PtlsrdXpra2ZwmQjq19lR9038adWftcUxHly45Uc7PGVrF9dlinW59Q%2FrgypDid%2FVm9T5jXB8cWQBVpVTwRaT%2FmksLrxD4JkcPh2oqqfa2T3mnf643aW%2Buum%2BCAuUv87%2B9B6XfgbxiaTcvvPITkXXEiA00Fpg0qkSiL2Q%2BZ9gpOTcb3OEBIMrUf1MwCODKCJgoHOgX8Iw9uYDdxpEvOp1M%2FNWawEOPBJ9YOxrgZfhVVr4h9L8Mw%2B2TJBwZMVnYlvAM7kbbtp4EmThh53LPRrvBOLLu22%2F7G3Oaa%2FMVi8pPssgM89oQhbOLr%2BDyGxkA0TzVMUR%2BXRdpNV2NVl0yixH5Pd3Tw0ssitZef4CuJPb%2BPktRxHcRHUmnX03B2bwtYWa1Ad3ucxxVB5FmqfcPRrqXD1qvM%2Ben%2FFOz4yNVpIwflyLu7W5oB%2FEmmxq83Uw3fdxn8zHe4EN4rgfm4rC1cOrikjUZjeQ%2B0T948fKk6wA7t31mHAYCOTk1kXKNuxPq1st8k08XkM7RPrMxnjUEtjvUEAEPPJns8o208f1xxi4VJiIc5l2TDujPHCBjqkAf4zdG1MFL2Rw9vavM0WJVkCdc53Zz7DZAj6bDUewASbRdT3az%2FzJUIjLlR7VA5TDeQOiaeKUhljNTNtkb3MJrY%2FPonPl0pJbAw6Uq432PmJrkfSaI3%2BK%2B74rN8hwA%2Bz88LKYLJO30QR9fLW%2BrdgzTODzhSf1c%2Bt8T2HqTbg2oHlwe204lOHiU%2BZre0OJD9tYiMprnBp3SZnQcR09lHCi%2BD8GzWz&X-Amz-Signature=84e51d0318293f566d6736ea874e215f16fc29b48876a66c14666c3ac3fe783b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HODXAT2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC4CRxNbc%2FJp4TlG6TqC1V%2FZfH3n%2BSu8ocDyvbXWUqx4AiEA9%2FSiWe9EaOoDPzeDWoo6oNOErCXK7SqHXcGL75ARcpgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAyQzR43xZJU7c3jWyrcAwvyg9%2BjCranG0zn7yI5ptCU0Zg%2F%2FvatjvpNszdCPCvkhXOp1mEmnJM6vtbdd%2BPAvBGFFazKRutZueoVYrDIgljNC06qBhNAJUen%2FFMgC%2BsBkmGkRCy35kYyApHSvhYyl1wA7e5fGc8%2Fy03irKAIYiSR2H%2B2zN7C7oRzFGcLVTmPZ6jgPjxDSfib0%2B5YWEgDtsqDZzIDacGHPdD3g0e1T04GDbnQ4ipOF11vGfib%2FIOWq05jls1aDbBGeZKGfQ04m3TB9F1kVzONOE81B2lO%2FCd9CufUo9mUhMKV04BTPBLzfvP91E5jMHIr17D16WM1ASa0C0Ox9ocp3HXLAtL4j6k0R%2BPshQd3fgFtoKIkYCaWgjFFvtesH0hqnLA3GgQUsxa%2BdyoKEvcjLSPPXhluv8UG1e8wedHa3%2Fn3U73r19HDwrvdenmTSi97BWnrZsOgnVDKhQWr4wkEeOIlDLd%2FoYr4oqc8DGbIOXG%2FE6KwZd0d2fC3ipRLqJBtEXhHtITJcQy45oU%2BvZ11Z15ImwVWDvLjQhY%2F%2BTQKFaaqUbFJqKdHAqbHJeOy6IQql59x9zafS1Nc2xLAyTPRGp5azHppE2R4CLCTyiikaBo6%2FwHL5kPOfeqRZmKc%2ByY5E5u%2BMOOM8cIGOqUBMPqqFRXV9law9Ys9hC20jllp9yAoT0aZONwThyfUvG%2Fu0VmE%2FYx7yGYcJB8MudrERup7mkz%2FQuI%2FjxH3ipJ6tgT2oRWo9WooWBNyG1MxOm2rmb9zlR%2B%2BSwDKk%2BjC1NKXFTc29eqXh%2FnkHIDcFWwd%2FswDfm6Ve91FXyt6Kxv7uwje94vt0ijGkZUUfRWXouRsKsWPGf7%2FohfTHV30oOLpBjmhGaiM&X-Amz-Signature=f4a922b345cca858751b41ec7326ffefce5dd9c2fa5a815549e2d79711325c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
