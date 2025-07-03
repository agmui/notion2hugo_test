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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OW64SG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBYqdxRh0DLbcksaCVHHWqLBX3Qwphu7gjJKKqn3Ehr0AiEA6EQ5DRtF%2BKuTV81ZHCIrf28P9AF8328RLKxY3r2AThYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUFad2bAa0ceb7GuircA6FNXjI%2FsfSWFa4pL2bo7EECgpb%2Frt8%2FsbCUTzkPrMtTQFPirOd4Kt5ew9gKJs8u6KeXVtK4F%2FeH2kizSLz74k0DhtzyWODhJB5E6gi7Y1wjoebM5md1QxC0R0Jf9efyvBK3AtZJdifvHtZBYRpdzrNXibrZsQeJbyLeO7Y6X8kq6X7OLfgH5HdZ16nwvD2b%2FS4Mi02BWH0ekztP6q9AYDKjpBI%2FReYpPU4HejYnk2KYa37wv6SeVsonHrHWzCGk5%2FxK2by%2B8BpkwfmP2LYdFyuN5%2BnyLAZYuW7Sxn%2B1vEKBK7m7NmCTT5J2RJTGObYXVD7JAZUd2oFN%2BRXtX9DA1G6%2FxA2rORjVbKxtVShSnSqqxKG0YfewDoWoh9%2FQ67NorcsYLCki9E1PuiDYctpoWYhb%2BwYboeHn%2FvneOc%2FvD%2BY6pef01KQPE8KKDT%2Fwn2syZY3KYO02pU9MmharN3AZ691p8ZWSuFW1qw60SEwXpzzLurh8rv8ULZuZNR0AMDAyEIEOsJ%2F%2B9DCTvdhmIt9hcK%2FdRfJkTOVdV46WIKXZ0IPu8yc3ABxODBmVwRVUh2O1IgdnHoUCDjRShy%2BKkErClCrPpHLKkm4ej3O9Ok7C8NizGDYG4TySYrB%2BYP1pMISImMMGOqUBKyH05%2BWTG%2BKWns%2BrZarOZBb1xSLCSYWtaezGYNlvU%2BVemhuTzw5vxK5Fuq%2BiIRaMbp0zxkwJ4nfXycfozdyvSRFQfi3CyrePyu1Tk81svdLSXJkBnGMpM2YYnF57N6ADxefzrHrTadgD4PgyZIUEhSH29eQ4u0rJhxozloGR0%2BbWkUNS%2FseiVV7sOnqtg4cV6zXuy91tKFMVTNH6tneIbZZtbI0j&X-Amz-Signature=6877e699fd53ac86f3d0ababdff34c2101e268ccb95a002fb67ea6f281f50b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OW64SG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBYqdxRh0DLbcksaCVHHWqLBX3Qwphu7gjJKKqn3Ehr0AiEA6EQ5DRtF%2BKuTV81ZHCIrf28P9AF8328RLKxY3r2AThYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUFad2bAa0ceb7GuircA6FNXjI%2FsfSWFa4pL2bo7EECgpb%2Frt8%2FsbCUTzkPrMtTQFPirOd4Kt5ew9gKJs8u6KeXVtK4F%2FeH2kizSLz74k0DhtzyWODhJB5E6gi7Y1wjoebM5md1QxC0R0Jf9efyvBK3AtZJdifvHtZBYRpdzrNXibrZsQeJbyLeO7Y6X8kq6X7OLfgH5HdZ16nwvD2b%2FS4Mi02BWH0ekztP6q9AYDKjpBI%2FReYpPU4HejYnk2KYa37wv6SeVsonHrHWzCGk5%2FxK2by%2B8BpkwfmP2LYdFyuN5%2BnyLAZYuW7Sxn%2B1vEKBK7m7NmCTT5J2RJTGObYXVD7JAZUd2oFN%2BRXtX9DA1G6%2FxA2rORjVbKxtVShSnSqqxKG0YfewDoWoh9%2FQ67NorcsYLCki9E1PuiDYctpoWYhb%2BwYboeHn%2FvneOc%2FvD%2BY6pef01KQPE8KKDT%2Fwn2syZY3KYO02pU9MmharN3AZ691p8ZWSuFW1qw60SEwXpzzLurh8rv8ULZuZNR0AMDAyEIEOsJ%2F%2B9DCTvdhmIt9hcK%2FdRfJkTOVdV46WIKXZ0IPu8yc3ABxODBmVwRVUh2O1IgdnHoUCDjRShy%2BKkErClCrPpHLKkm4ej3O9Ok7C8NizGDYG4TySYrB%2BYP1pMISImMMGOqUBKyH05%2BWTG%2BKWns%2BrZarOZBb1xSLCSYWtaezGYNlvU%2BVemhuTzw5vxK5Fuq%2BiIRaMbp0zxkwJ4nfXycfozdyvSRFQfi3CyrePyu1Tk81svdLSXJkBnGMpM2YYnF57N6ADxefzrHrTadgD4PgyZIUEhSH29eQ4u0rJhxozloGR0%2BbWkUNS%2FseiVV7sOnqtg4cV6zXuy91tKFMVTNH6tneIbZZtbI0j&X-Amz-Signature=7cd9a572b7fcd5d8475bde67c1be85d4a8c8c6562b3b9cf6b89d7275704aff2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OW64SG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBYqdxRh0DLbcksaCVHHWqLBX3Qwphu7gjJKKqn3Ehr0AiEA6EQ5DRtF%2BKuTV81ZHCIrf28P9AF8328RLKxY3r2AThYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUFad2bAa0ceb7GuircA6FNXjI%2FsfSWFa4pL2bo7EECgpb%2Frt8%2FsbCUTzkPrMtTQFPirOd4Kt5ew9gKJs8u6KeXVtK4F%2FeH2kizSLz74k0DhtzyWODhJB5E6gi7Y1wjoebM5md1QxC0R0Jf9efyvBK3AtZJdifvHtZBYRpdzrNXibrZsQeJbyLeO7Y6X8kq6X7OLfgH5HdZ16nwvD2b%2FS4Mi02BWH0ekztP6q9AYDKjpBI%2FReYpPU4HejYnk2KYa37wv6SeVsonHrHWzCGk5%2FxK2by%2B8BpkwfmP2LYdFyuN5%2BnyLAZYuW7Sxn%2B1vEKBK7m7NmCTT5J2RJTGObYXVD7JAZUd2oFN%2BRXtX9DA1G6%2FxA2rORjVbKxtVShSnSqqxKG0YfewDoWoh9%2FQ67NorcsYLCki9E1PuiDYctpoWYhb%2BwYboeHn%2FvneOc%2FvD%2BY6pef01KQPE8KKDT%2Fwn2syZY3KYO02pU9MmharN3AZ691p8ZWSuFW1qw60SEwXpzzLurh8rv8ULZuZNR0AMDAyEIEOsJ%2F%2B9DCTvdhmIt9hcK%2FdRfJkTOVdV46WIKXZ0IPu8yc3ABxODBmVwRVUh2O1IgdnHoUCDjRShy%2BKkErClCrPpHLKkm4ej3O9Ok7C8NizGDYG4TySYrB%2BYP1pMISImMMGOqUBKyH05%2BWTG%2BKWns%2BrZarOZBb1xSLCSYWtaezGYNlvU%2BVemhuTzw5vxK5Fuq%2BiIRaMbp0zxkwJ4nfXycfozdyvSRFQfi3CyrePyu1Tk81svdLSXJkBnGMpM2YYnF57N6ADxefzrHrTadgD4PgyZIUEhSH29eQ4u0rJhxozloGR0%2BbWkUNS%2FseiVV7sOnqtg4cV6zXuy91tKFMVTNH6tneIbZZtbI0j&X-Amz-Signature=563b2396bf90a67865abac48b28dac5d2d6c95fab6caa9b87b8ed44651955509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FKGXLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCoPXm1b3pGSmIWpn6t%2FG4ZrZWmv8TBEuLgYLjvJDR%2FugIgWUkgXJCOGrAf3veLf6PP0ACqbLVEy4KkrYG2ZZdb3YwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMPt0O7Prea%2FtC5wCrcA4BXvV2A5b3VaeI6oMzcrEjoDZxsabAA%2BDOqVKoaUn%2B06OTi%2Fo0F0xzs2wEaAh8fE8Lzq3iiQJgCnfe8jyLO55%2F7mXXWBnhb07P3GltMjh32%2F1GXwv8%2BtaKqU3KJYcW0wjX88wIXDTe23SdvEh%2BmGX33o%2FkvhTzGkAdEfTk92AvvYxP0p0wCup87o8H3Vg5iE6xiRGMKrPWxTdLA4tjdhhG%2B4GzLWTFihCLDPKmu2YRSpkJpXO7e0Wm5311pyCbvdYBTnZG%2BgOxHz8MQxJIDKFNfM1BxumiWoL%2BNes%2BaxIkJwy9gk7txoVV4YqpnP%2FDbC3p75z%2Fa9%2BPX1q1ckuooTPm5wQGcpMETbv98cdV7xONGouKEcFruzOJLuQj%2BnJAlJ7JMmUauYFNViJhw9avRHUkCJnpr7S4h8cSbnZkUwBeIgG%2Bx0GUsx%2FJ39fxjHSO2GvBxL0FeJZ1TiwSgvcQDLx%2Bkv4gAIy%2FeX86%2Bteb4yve6qI16gknvxKojfdHm1%2FO0UXrDSa2uSPf2%2FVgnBYEnQmPHZO6Jmg1OziGaMKYBHnr74i%2FYyQ2J%2BdrCk9LdQqjGUIF2SjU92r4FS1eillvVxcRsoE2DIZ4Q0uPSRw5nvlFWve%2FXuuijdfWqvMIRMKaHmMMGOqUB9%2BzxFs5B2OWD8YPjnD9AltBBrXKEJ5h4hHf0RmMoxGw0fhwpvFfWEr6leXoTettBuQ5EyFt9BROXqAalhW1Uu%2B8M3qy3Tl4fuwyanK0JJxKLP8hn5ZddQFGxZqt9Fs14YXLHIdFRw3bwrAVDbHIbPjTPl4qw5mwMc791vbE9YLuObGaPtdebUEyInDBfSeV3gCDXXaQY3%2BWX58FqrvMYmnOryqRe&X-Amz-Signature=d9c27cad3b056c5f80e9752bea6175ec3c384640da0d9a16d708cd44e0eb575a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPMMSWZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHQ0kNhnNNKkt%2FIfjZCYleGlfvXN7y%2Bo3pTVZUytUYF%2FAiEAzIA6bTK7WkiIlfC6OssMDZcozipj4PcIPkOM8RXtReoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchGYneEvhTtrybRircA%2BYg2LFD4ZiCCb3NBXg5jE0exfTwSLylEpcM8ksZooOcqgJPS9e%2BLX9on2eNKCF3e2Xplj49%2FZTtWsf9FX6D%2F9MlWcfyO2qAtvahgOGSK1Ye7HjU%2B2iNDsZ4yDsu8wBW4TdsqJi8HixNiX81Gj%2F3ZGVrRQUhQR%2Bc2awlLnCGrvDKakL1Unft3nrGZYfSfWyoIK1j8Ub0XKYqVY%2BgmJVD7ye6H5as0VcWa6ygBmJnuzHlfkdgbLH%2FnRwwAJINi9EUI2xqPzIgg12csBLvlAtGLWd3uLfGESW098pVp4IbF8fmY0im27bD%2BEGlhqv2QEHqABLJ79RB32%2ByGhQgqfwTBVzAK7Vrv9hCFEvHDWntxZBKRfyTz68KobEUe4Y3I8HbzVGvZxFI8CTOxneW9pDevVKLjUbDevbuF9wWu8id5%2FS3XUL%2FfXc%2FhtuhPg8sqRk9E%2F7C7TcYibz8OL41u1SswfOdOFUDPn1shZA5iFoDDSMtvE9zElRmnqiPW4jmRxJDtXYz8cewRYPbQfPovlVCW9ejtqcCfOn96s3E0JJrZoI4P8%2BdIbnSmVuJXCNxmMveI7JWSl6mpI%2FKsQI%2FJHpbwZ5UAQSyk24YHj8fhdFUtLNW%2FRKt5vDmrFczz2D2MJqHmMMGOqUBd6yV0tKSp9TBsh3HYbTxlvTFnvG8maS4EerdBQ8O%2BslTqNSWBDNvjVjSNssFpLHXeZVOdDev6WTWyGkoHCiL8kec5%2Fcl%2FaS%2FX0eoNo6SN%2BZgWa%2FL%2F0xE4zIQ3jG3ycycnv2WQCKepSOLB79cBGknaMM9zGp05HbgmQ0gEjbTqbXvK0qQIOolFPPXwRfzkxiDCiK3MtrIuMRAEnd%2FGmmC4z2JOaaO&X-Amz-Signature=0f335ec00f5925118905e92388223b110ff1084bbaeb41dbf1eb66155569e535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OW64SG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBYqdxRh0DLbcksaCVHHWqLBX3Qwphu7gjJKKqn3Ehr0AiEA6EQ5DRtF%2BKuTV81ZHCIrf28P9AF8328RLKxY3r2AThYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUFad2bAa0ceb7GuircA6FNXjI%2FsfSWFa4pL2bo7EECgpb%2Frt8%2FsbCUTzkPrMtTQFPirOd4Kt5ew9gKJs8u6KeXVtK4F%2FeH2kizSLz74k0DhtzyWODhJB5E6gi7Y1wjoebM5md1QxC0R0Jf9efyvBK3AtZJdifvHtZBYRpdzrNXibrZsQeJbyLeO7Y6X8kq6X7OLfgH5HdZ16nwvD2b%2FS4Mi02BWH0ekztP6q9AYDKjpBI%2FReYpPU4HejYnk2KYa37wv6SeVsonHrHWzCGk5%2FxK2by%2B8BpkwfmP2LYdFyuN5%2BnyLAZYuW7Sxn%2B1vEKBK7m7NmCTT5J2RJTGObYXVD7JAZUd2oFN%2BRXtX9DA1G6%2FxA2rORjVbKxtVShSnSqqxKG0YfewDoWoh9%2FQ67NorcsYLCki9E1PuiDYctpoWYhb%2BwYboeHn%2FvneOc%2FvD%2BY6pef01KQPE8KKDT%2Fwn2syZY3KYO02pU9MmharN3AZ691p8ZWSuFW1qw60SEwXpzzLurh8rv8ULZuZNR0AMDAyEIEOsJ%2F%2B9DCTvdhmIt9hcK%2FdRfJkTOVdV46WIKXZ0IPu8yc3ABxODBmVwRVUh2O1IgdnHoUCDjRShy%2BKkErClCrPpHLKkm4ej3O9Ok7C8NizGDYG4TySYrB%2BYP1pMISImMMGOqUBKyH05%2BWTG%2BKWns%2BrZarOZBb1xSLCSYWtaezGYNlvU%2BVemhuTzw5vxK5Fuq%2BiIRaMbp0zxkwJ4nfXycfozdyvSRFQfi3CyrePyu1Tk81svdLSXJkBnGMpM2YYnF57N6ADxefzrHrTadgD4PgyZIUEhSH29eQ4u0rJhxozloGR0%2BbWkUNS%2FseiVV7sOnqtg4cV6zXuy91tKFMVTNH6tneIbZZtbI0j&X-Amz-Signature=5bfe955d6032153796f5e422718bd6117f45def3fb3012478b9b235abe245e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
