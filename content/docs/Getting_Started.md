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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNZ4AMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCYPXYhkwSjwGl6S%2FhezKHsnfvl%2Bzq9qRywRCbB%2FHshpwIgI6jXiAVOEW%2BIrh8sb%2BGSPWrNapwF18J%2B%2FOq96TIx4n8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDApJRbJ0OU3d%2FJeh%2FSrcA3z0fCurEFf6t2Wmt9wKlmNlKa3e848j6w3S7jcEhSnup1esism%2BF7Q2%2F5v8LkZgCM80%2B31FtQp08CyrwWAeQ4BgkOfVb2XI41VYr6Oikyq%2FU6yQG4CS%2B3110jewU6flzPk4zWNTNmVq2g1qT1n0%2FVFZBOV6jM43EQ4iFWNNt6AcbvQ4pebt%2Fih%2FtBypkEcJxcTl7K72yuYltqsTKEBQbN%2BsHFaA9ZpB2LApPizLu22bFE%2BkmjyTMZpsZZnwQzkFQzqgEDjuIgFXagRf5ecx3%2FwyuS2hbaUW1yyKOsyScT2qKTLV6qtoxVOarzWreMu760tD%2BTQfHfJ6YRuwTTuqa1CsrCLqZJ%2FJ340LflKUB98WlDT5k2gu7nWC8zhtA95WDVN%2FMtr6FgYCa85tzY5BOtzL9lcnhlBGKHGldRp5Tlj%2FIBWmF6n9ZxvaBsO8YYN40GKtwd1BEzgcjZMChEcxkbHzg%2F%2BF8uTZs0BIMmjuyd601rDmXVR7yseUFnuYURcgdQew9sXAio0su8MH6XNAGEkC%2FNy6W0vGBStCtrLQcBiNmt0lu8HJ6DxJQQzkRSANn7oxtGfsFEkcmcUor9mlB4uDDk0v%2Bfh4fpN%2FMKU468MY7GyeGRwTmviuQj38MLj3gMUGOqUBSdajR8vsvmjtzjDzAA6qjIgr0rmL0IPAjf63V6iOJDxqEKXOxrNsmo9QU2oEPXXSnEXVfzV60gjOMTG4fy19j4fXEOJG1ktIRlKgKd0cLOCwtMCWnrhjfm1fgv7xgCdx1OtXnC%2BH65qy%2BU7iQNPyGTsTNEYSONdCIsDsZ7VxgGMVM%2BF4DP2wJNhgGuXwkGgkfrNUNNXWTisbZR67jg0Y5Kc2lw1K&X-Amz-Signature=74cf6c34b8d6a539f3f4dc8859cf9c5660116e253abc526cc9d40a69e12cd663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNZ4AMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCYPXYhkwSjwGl6S%2FhezKHsnfvl%2Bzq9qRywRCbB%2FHshpwIgI6jXiAVOEW%2BIrh8sb%2BGSPWrNapwF18J%2B%2FOq96TIx4n8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDApJRbJ0OU3d%2FJeh%2FSrcA3z0fCurEFf6t2Wmt9wKlmNlKa3e848j6w3S7jcEhSnup1esism%2BF7Q2%2F5v8LkZgCM80%2B31FtQp08CyrwWAeQ4BgkOfVb2XI41VYr6Oikyq%2FU6yQG4CS%2B3110jewU6flzPk4zWNTNmVq2g1qT1n0%2FVFZBOV6jM43EQ4iFWNNt6AcbvQ4pebt%2Fih%2FtBypkEcJxcTl7K72yuYltqsTKEBQbN%2BsHFaA9ZpB2LApPizLu22bFE%2BkmjyTMZpsZZnwQzkFQzqgEDjuIgFXagRf5ecx3%2FwyuS2hbaUW1yyKOsyScT2qKTLV6qtoxVOarzWreMu760tD%2BTQfHfJ6YRuwTTuqa1CsrCLqZJ%2FJ340LflKUB98WlDT5k2gu7nWC8zhtA95WDVN%2FMtr6FgYCa85tzY5BOtzL9lcnhlBGKHGldRp5Tlj%2FIBWmF6n9ZxvaBsO8YYN40GKtwd1BEzgcjZMChEcxkbHzg%2F%2BF8uTZs0BIMmjuyd601rDmXVR7yseUFnuYURcgdQew9sXAio0su8MH6XNAGEkC%2FNy6W0vGBStCtrLQcBiNmt0lu8HJ6DxJQQzkRSANn7oxtGfsFEkcmcUor9mlB4uDDk0v%2Bfh4fpN%2FMKU468MY7GyeGRwTmviuQj38MLj3gMUGOqUBSdajR8vsvmjtzjDzAA6qjIgr0rmL0IPAjf63V6iOJDxqEKXOxrNsmo9QU2oEPXXSnEXVfzV60gjOMTG4fy19j4fXEOJG1ktIRlKgKd0cLOCwtMCWnrhjfm1fgv7xgCdx1OtXnC%2BH65qy%2BU7iQNPyGTsTNEYSONdCIsDsZ7VxgGMVM%2BF4DP2wJNhgGuXwkGgkfrNUNNXWTisbZR67jg0Y5Kc2lw1K&X-Amz-Signature=d2b9632c60c76904ea13421dcba19c089c6508e0fc552248fec58c05eab5c93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNZ4AMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCYPXYhkwSjwGl6S%2FhezKHsnfvl%2Bzq9qRywRCbB%2FHshpwIgI6jXiAVOEW%2BIrh8sb%2BGSPWrNapwF18J%2B%2FOq96TIx4n8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDApJRbJ0OU3d%2FJeh%2FSrcA3z0fCurEFf6t2Wmt9wKlmNlKa3e848j6w3S7jcEhSnup1esism%2BF7Q2%2F5v8LkZgCM80%2B31FtQp08CyrwWAeQ4BgkOfVb2XI41VYr6Oikyq%2FU6yQG4CS%2B3110jewU6flzPk4zWNTNmVq2g1qT1n0%2FVFZBOV6jM43EQ4iFWNNt6AcbvQ4pebt%2Fih%2FtBypkEcJxcTl7K72yuYltqsTKEBQbN%2BsHFaA9ZpB2LApPizLu22bFE%2BkmjyTMZpsZZnwQzkFQzqgEDjuIgFXagRf5ecx3%2FwyuS2hbaUW1yyKOsyScT2qKTLV6qtoxVOarzWreMu760tD%2BTQfHfJ6YRuwTTuqa1CsrCLqZJ%2FJ340LflKUB98WlDT5k2gu7nWC8zhtA95WDVN%2FMtr6FgYCa85tzY5BOtzL9lcnhlBGKHGldRp5Tlj%2FIBWmF6n9ZxvaBsO8YYN40GKtwd1BEzgcjZMChEcxkbHzg%2F%2BF8uTZs0BIMmjuyd601rDmXVR7yseUFnuYURcgdQew9sXAio0su8MH6XNAGEkC%2FNy6W0vGBStCtrLQcBiNmt0lu8HJ6DxJQQzkRSANn7oxtGfsFEkcmcUor9mlB4uDDk0v%2Bfh4fpN%2FMKU468MY7GyeGRwTmviuQj38MLj3gMUGOqUBSdajR8vsvmjtzjDzAA6qjIgr0rmL0IPAjf63V6iOJDxqEKXOxrNsmo9QU2oEPXXSnEXVfzV60gjOMTG4fy19j4fXEOJG1ktIRlKgKd0cLOCwtMCWnrhjfm1fgv7xgCdx1OtXnC%2BH65qy%2BU7iQNPyGTsTNEYSONdCIsDsZ7VxgGMVM%2BF4DP2wJNhgGuXwkGgkfrNUNNXWTisbZR67jg0Y5Kc2lw1K&X-Amz-Signature=21e360a4d7eee4fc016f42aa8b071103f6046c71f9af8a4f4254df59ca5f4748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LFFSFE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD0lGZhtgxEAZGFYYIgNFgKluEdoIbjdnN5LQx6Km%2FB6gIgaZZ2HWXO%2BHEDfjUH%2BXuSh0O637fYNJmguGjBfcgGE1kq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG%2BQubgGL879K98U4yrcA6%2FPOpwoKJTP956MIAVxxiA00AkP%2FBTtTiBdJSDuwxgGaGudzQzyb7G7GK%2BpK%2FSgRwgBe5EJPFwI0DFvCBjin2BSLFtEkjBEjVNGj%2BpAzlnCrzpL2HkbsorvLxNVlZB1xlXT2o9%2Bdhk%2FY2bgS1TEoHloNzo6TcYx1gwTlD%2BZU9FpR1EWSCoDnH1rcGECdEFnDcNeizsi3DLaqMziATqe67qq%2FPfyS7MDD7APYAnQ7d%2Fkcx5S%2BDwzqkvH1Z0yz17YrN%2BrdLTZXrhQJo21a9K%2FWDYSeFnc40ohoiDB8e4vJWPAQZuhNRhd5XHNYKDivyZOiLzGi7gi7XW6Gd6G%2Fo%2BciQTGieswRGsfE4CAOQXktIpVDbH8BocUJBCUINGYM0bkZKWWAQy%2BRaRkCWVafW8gdAoO6iIIzC8y9YCJ%2F2M3fSXHWQG%2B4A9xx9mlzV1rM%2FKpwvRRR3EGHjGK7OgTXICTj194ZLp0dMcBY2H3CtBCBqteLSdK3aKne2SyUu0aMDZjYd2v9YcvuLTy%2FwS%2FFTGuezEnue2U3eskMlQtGH8WocoGhJTqL9YqElzfk7IRTu%2FtUbvpKQlV9%2F7zjA8sAuBeJAO%2BzZ%2FznPd0xixeuzhupXGFiGEcrUmrxarFjWvQMJL4gMUGOqUBh8xtKzpCRSZHQcZrej0tS0VjHTr%2BjRZxq9NubMM%2FetOrIiidd9bLHl1rtv1ofvOCShMdk03ir5QDDaMpSpV%2FbrNxb0fHc2HtQJtUl6YWHYenLSsDAGtgHLNS4vnBmAPPj8riLvCzJjGAmPtODWRxkOjQ1EZuPPiNHSZ3ZYN6Mvd3e64LknJqcZ%2F7H%2F2R%2BEa2rBItVifRQfpbpS%2BYJqeARVIVC%2FPi&X-Amz-Signature=a00f3bf291faeac259a79382a1a738a7dbc03f3931ccd5662187e195be643538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUXZ4PG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGbXB5ppM6jmTyUXOgCD5OmnUhTSw6a4U7S8h5wM4lnaAiBlB%2Fnmf4YmJgZStmVIZhZ3XfHDM2gP0EkKsQmwHh2OPyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUXGAiFiZKtNrF%2F1SKtwDPm4%2Bbs1bRhw7Bc39GHCidV4Xwco%2BDOmoQURk%2Fe705uPi%2B6wlcFtiiv%2BtLBKUPZ8EuYoAc5N9It4XMK7OqHEI7ff78BX84Rxuy6L7jo5C6Gt5Db7398rRJH22CPC4pUgPZaz5%2BeYZl4V1kX4Y3S8wkf4WDD7NQPEzfIxL1arrQxYFGGLy5RGBlYSXL5hDQn7aqmtkFHx4Ti0UXNqEtQwwfrqCYbEcM23nhlLHKeqJUtMHchOPe7wfZnqMdiomqIyPIkhV%2FBL2MjWVqpYRl9e4W1cFfeOCaUj3YgCMCcVJVvdKejWYyDHJUNkQ5x%2FQSpp8jWcZIXlSNxfvadcY0h5uG7qNN1mduEi%2BnLRM1Dvmlo2TWYRhiaTBSEkM4GmiT5TtjY3A8FpDQyuSM%2FFVIgOEjOrxcCo1ILtNF9bDNChYq%2FaIcduwT6U3BdAnLxksIc9ut6dH22m9a8txm2zOkGU36jwYVjGri8nwBidco1dBU1rDlDFDMA5hyGZww%2FG6lHW%2BeSWJ1aqc22ac6EuJJA0NTwZAI0XAdxGmhjzi5U0gWiEkHFcU%2BODsJcKFvWK5NM2wpSuNQIBsuZ6BEvtRwp5PChXo6pKuVC5w6Ns978HNCUlFkN1J0y0%2BsnMvT%2Fcw8PeAxQY6pgGnNifvq06rdUI6VYdrDxemCtoJ6KDEm%2B6cuEBpiynFsMDJ0cmtgfJZUUZnTBy0PsyBuzGoNuZ%2BoorQvSQ9J7vZm7OYJXZKVysGZ7OZE8MOt6gay7BHzBYzOh29kJqyU%2BG%2FEeUqFpTq4%2BqOUpLoMGEZgY5YWCYc8A7O95DXZhfB6YFqAIUJ%2FoTn4n8H8PEPjD1jytfRUQfbxompwTZzBhxc%2Bnp9RQLZ&X-Amz-Signature=09d7181dad617ddb3568d8e785eb16d605ee73633831dd7e6d1fed5339ff1247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNZ4AMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCYPXYhkwSjwGl6S%2FhezKHsnfvl%2Bzq9qRywRCbB%2FHshpwIgI6jXiAVOEW%2BIrh8sb%2BGSPWrNapwF18J%2B%2FOq96TIx4n8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDApJRbJ0OU3d%2FJeh%2FSrcA3z0fCurEFf6t2Wmt9wKlmNlKa3e848j6w3S7jcEhSnup1esism%2BF7Q2%2F5v8LkZgCM80%2B31FtQp08CyrwWAeQ4BgkOfVb2XI41VYr6Oikyq%2FU6yQG4CS%2B3110jewU6flzPk4zWNTNmVq2g1qT1n0%2FVFZBOV6jM43EQ4iFWNNt6AcbvQ4pebt%2Fih%2FtBypkEcJxcTl7K72yuYltqsTKEBQbN%2BsHFaA9ZpB2LApPizLu22bFE%2BkmjyTMZpsZZnwQzkFQzqgEDjuIgFXagRf5ecx3%2FwyuS2hbaUW1yyKOsyScT2qKTLV6qtoxVOarzWreMu760tD%2BTQfHfJ6YRuwTTuqa1CsrCLqZJ%2FJ340LflKUB98WlDT5k2gu7nWC8zhtA95WDVN%2FMtr6FgYCa85tzY5BOtzL9lcnhlBGKHGldRp5Tlj%2FIBWmF6n9ZxvaBsO8YYN40GKtwd1BEzgcjZMChEcxkbHzg%2F%2BF8uTZs0BIMmjuyd601rDmXVR7yseUFnuYURcgdQew9sXAio0su8MH6XNAGEkC%2FNy6W0vGBStCtrLQcBiNmt0lu8HJ6DxJQQzkRSANn7oxtGfsFEkcmcUor9mlB4uDDk0v%2Bfh4fpN%2FMKU468MY7GyeGRwTmviuQj38MLj3gMUGOqUBSdajR8vsvmjtzjDzAA6qjIgr0rmL0IPAjf63V6iOJDxqEKXOxrNsmo9QU2oEPXXSnEXVfzV60gjOMTG4fy19j4fXEOJG1ktIRlKgKd0cLOCwtMCWnrhjfm1fgv7xgCdx1OtXnC%2BH65qy%2BU7iQNPyGTsTNEYSONdCIsDsZ7VxgGMVM%2BF4DP2wJNhgGuXwkGgkfrNUNNXWTisbZR67jg0Y5Kc2lw1K&X-Amz-Signature=5dd458007afcfad4d0d7d84d1f338bb42e2da6c754699bdac34b4367808478a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
