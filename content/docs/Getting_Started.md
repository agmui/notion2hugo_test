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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2EETE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAoOXFQiJejvsYlawqDiPpGdaK%2F%2FwAs3qdJ6NdIEDlJrAiEAv6gFi5nW%2B3yHqRvSXbSJY1i5r3G%2FoAB1fXUur1a0LpYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDElplwHswGhEsknOgSrcAz2aoQc9uKvYFmwVRithaLGs4EDhI8aXm6Egir206yJN%2FjG0t4l%2B%2FLODuE6jwxx180q2IUcfD9qpVrcFZHU8fzx5YFWQTIEywXTG0Z3isMlB7bjzIXuTG5KQZNIA71kBjzVIi%2BpjwfAOgIpYUzzbnbipbivQK3rsPKBqnvYz0zYurP09zVW7NzTadYmhrnehQo2kv4dWEtIrfoz14yks%2FmuEvuQ9iIL5yiCKdBkVHz3BRpWIYuho4owqyLcjzrYRXGMJbodGRIkdLADZh7%2FT7%2FKwIa3jaw5N%2FKBCN7Dlh2E37sszJpCgJ27vUWALs3MEUmZ%2F6ZmWWDpozLON6JL%2B0nbGGkhOxqy0huc0EV4cxeZrh%2BD3MaKu2DMUGdFRvjyRs4xq0kxR4z6htiYBM73xiNM2wpJIL3fbrG%2Fe%2FoNxZeb2RowQ1Mnb%2B5AyEevRe%2B1V3CxrZBaGi5eAZG9UNgP184f8ozi4aktYTZGYsNl%2F%2FKfZUsOkXYammHeBStTOHGTBj8ZsAwPGmmed%2BlFKGGy9tOKggMUIW0RNpe1TQ6gC7pVLwzO61I%2FERcyxJTvGsaDdsvmLdtV%2BY%2FkzgVtDReQSar56WVbgKrt52hmE6LYWGRaA2sNvRYjW5RZ2X1%2FKMPSP0MMGOqUBkxtG7m9DpJRTfUweVXeDYxxUeiY4B7tRPV%2F44xP0cIT867ItnBVwlTAjRFgAX8bwDvsNiSF9pbzqUb8nQ0RWa0MtWkoWaaGbJ%2BXExMXi9PdsG5L7Gt8r1slW8f3VclC9fGc%2BByK0BiwuCierqdxEBvDECv23S3keTgRs1VTe3nsJW8bIfg7UpovQzq3wj3kin5K9cOO%2BPhASUgiDpiXdvJGYoxkK&X-Amz-Signature=a1129df147967b52042fcdc3f1bc8d5d6a30774e3b832350bed4a5761ed12298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2EETE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAoOXFQiJejvsYlawqDiPpGdaK%2F%2FwAs3qdJ6NdIEDlJrAiEAv6gFi5nW%2B3yHqRvSXbSJY1i5r3G%2FoAB1fXUur1a0LpYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDElplwHswGhEsknOgSrcAz2aoQc9uKvYFmwVRithaLGs4EDhI8aXm6Egir206yJN%2FjG0t4l%2B%2FLODuE6jwxx180q2IUcfD9qpVrcFZHU8fzx5YFWQTIEywXTG0Z3isMlB7bjzIXuTG5KQZNIA71kBjzVIi%2BpjwfAOgIpYUzzbnbipbivQK3rsPKBqnvYz0zYurP09zVW7NzTadYmhrnehQo2kv4dWEtIrfoz14yks%2FmuEvuQ9iIL5yiCKdBkVHz3BRpWIYuho4owqyLcjzrYRXGMJbodGRIkdLADZh7%2FT7%2FKwIa3jaw5N%2FKBCN7Dlh2E37sszJpCgJ27vUWALs3MEUmZ%2F6ZmWWDpozLON6JL%2B0nbGGkhOxqy0huc0EV4cxeZrh%2BD3MaKu2DMUGdFRvjyRs4xq0kxR4z6htiYBM73xiNM2wpJIL3fbrG%2Fe%2FoNxZeb2RowQ1Mnb%2B5AyEevRe%2B1V3CxrZBaGi5eAZG9UNgP184f8ozi4aktYTZGYsNl%2F%2FKfZUsOkXYammHeBStTOHGTBj8ZsAwPGmmed%2BlFKGGy9tOKggMUIW0RNpe1TQ6gC7pVLwzO61I%2FERcyxJTvGsaDdsvmLdtV%2BY%2FkzgVtDReQSar56WVbgKrt52hmE6LYWGRaA2sNvRYjW5RZ2X1%2FKMPSP0MMGOqUBkxtG7m9DpJRTfUweVXeDYxxUeiY4B7tRPV%2F44xP0cIT867ItnBVwlTAjRFgAX8bwDvsNiSF9pbzqUb8nQ0RWa0MtWkoWaaGbJ%2BXExMXi9PdsG5L7Gt8r1slW8f3VclC9fGc%2BByK0BiwuCierqdxEBvDECv23S3keTgRs1VTe3nsJW8bIfg7UpovQzq3wj3kin5K9cOO%2BPhASUgiDpiXdvJGYoxkK&X-Amz-Signature=67ee8cfd0d3ed84638fe11ae45615996585053df2ae49be837db54d0fb3528bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2EETE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAoOXFQiJejvsYlawqDiPpGdaK%2F%2FwAs3qdJ6NdIEDlJrAiEAv6gFi5nW%2B3yHqRvSXbSJY1i5r3G%2FoAB1fXUur1a0LpYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDElplwHswGhEsknOgSrcAz2aoQc9uKvYFmwVRithaLGs4EDhI8aXm6Egir206yJN%2FjG0t4l%2B%2FLODuE6jwxx180q2IUcfD9qpVrcFZHU8fzx5YFWQTIEywXTG0Z3isMlB7bjzIXuTG5KQZNIA71kBjzVIi%2BpjwfAOgIpYUzzbnbipbivQK3rsPKBqnvYz0zYurP09zVW7NzTadYmhrnehQo2kv4dWEtIrfoz14yks%2FmuEvuQ9iIL5yiCKdBkVHz3BRpWIYuho4owqyLcjzrYRXGMJbodGRIkdLADZh7%2FT7%2FKwIa3jaw5N%2FKBCN7Dlh2E37sszJpCgJ27vUWALs3MEUmZ%2F6ZmWWDpozLON6JL%2B0nbGGkhOxqy0huc0EV4cxeZrh%2BD3MaKu2DMUGdFRvjyRs4xq0kxR4z6htiYBM73xiNM2wpJIL3fbrG%2Fe%2FoNxZeb2RowQ1Mnb%2B5AyEevRe%2B1V3CxrZBaGi5eAZG9UNgP184f8ozi4aktYTZGYsNl%2F%2FKfZUsOkXYammHeBStTOHGTBj8ZsAwPGmmed%2BlFKGGy9tOKggMUIW0RNpe1TQ6gC7pVLwzO61I%2FERcyxJTvGsaDdsvmLdtV%2BY%2FkzgVtDReQSar56WVbgKrt52hmE6LYWGRaA2sNvRYjW5RZ2X1%2FKMPSP0MMGOqUBkxtG7m9DpJRTfUweVXeDYxxUeiY4B7tRPV%2F44xP0cIT867ItnBVwlTAjRFgAX8bwDvsNiSF9pbzqUb8nQ0RWa0MtWkoWaaGbJ%2BXExMXi9PdsG5L7Gt8r1slW8f3VclC9fGc%2BByK0BiwuCierqdxEBvDECv23S3keTgRs1VTe3nsJW8bIfg7UpovQzq3wj3kin5K9cOO%2BPhASUgiDpiXdvJGYoxkK&X-Amz-Signature=30b8a10bf12678da564fe173616f055080529f1b251009eb6fbc017519a3bad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCACEAB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDHTqITyPSHnbBfI%2BOcuH6%2FAe%2FNvoBpMQK0Mzhj3JSRogIhANBL73YcvFCFXmdlAV7blXviX7w%2FlS4H5o8Mme0b7MgEKv8DCB0QABoMNjM3NDIzMTgzODA1Igzk4CwF4bJSTgoEh4oq3APzHQQaRJmiEu0aRTxVnh5NBk0z1dVHIzQAm4Tz3DjZ8IXgpWlOBwzbzeSSfImO0bd5i8CpHwZ77uA4z4vsQ4defTryEkwkSaO5D19nBkP8asnzLA1DGXwmm6iFwEx0paBilnubCyxwPgYsdR0F%2BkyofFTEhr93uvwhlbj%2B1wIlHYqs5Ml1eAxu16YQBtFomMsXW4ZvPHFI81IE2G6JQwHHTH8%2BlCNAA6wKPsj1g4hr9KvhloqyW%2Fnzcr4s4Bf43u65tzqmC1OffOe%2FNEfn84E2aEB7CHcxT2KS%2F0gzhQCWpVlTJN%2Bf%2FSDOS7TcwNKcrmDYUFw3Bq6kct5Q4DRyv6DlXxwU74i6g0qP7ZDtBoeGewFhdOu6NJd9U%2BBZFrLkJ7Bx48arUzaaKeNHRsI0L4S3xcg5LTYRdUw0iCoaocIx6rUASXclve1Q%2BEQWZDbc%2B45WOSisKnrSexgHpM8VDq1eytO%2BtpaZL2MJg8pCnXNbDp61eB9B3PJ9SFi3Dy%2BUXMLCJ5ABEC9erxawqpY8LXnRlEYsdv4TbNxpXH7mWH1asqI7q6b264EnHPRsGcTBSwMvN21J04fRzUSKzpsq4fUL382%2FQoKw2Oy%2Ffq%2BjGG3GPMbNKm4o1jUPC6r8OjDdj9DDBjqkAQ3ciqvwHarn%2B0oojoXLxlWOT9R2vAFb76kR62guMglIiJHoiU9ErCAAQa2tkwYLV2Ed1LPHgVcEPtOEeqdoD8fbsmmo%2BAVHiWMR1ffNc3WIcXdYDCd5pYquSBjt5jzCiDGXE0ogz7RAfy7CZsS5MRSNWCjIZ8Jrq9LBMH%2BnRPiQh9aE3avDH%2FsxUwFYQLBd9rYBBwu6xhoDWo7%2FYE7g%2FEjtWqXd&X-Amz-Signature=d8fa1738bbb30b177b18c21804c00a9d152988d96fb718d974484cb4c57ef911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3DBAQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDJ4TU%2BsedDbB0RuyWGBWo84CLRXGUhy2O0yBnq9BEZxQIga7dZR47iUm8SEpsSu9grO0KyefZYeZd6%2FGzWer1LIswq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNFZretSK58EjcLotircA%2B7QL43a16SxFY4WT9TPtilkdzHqq%2BJXipyvvacmpmqp%2FXSI1XWhNs0jp1%2BieNO95x%2FUVr9v4wfaDv6AO%2Bl3cHc6Cor3SZEtH63gx917Lmh0nORdQA3ncSMAUtYGQ5vfiRWd%2FixpXPVoKva1fWbW8vJQBXCnRYb%2BBMda4xHzwsKWtQGt6R%2F5paB4SyVHwGHWX0OqSavun53DL4ZH9ZxunM51fZtUELLes0FuixXGqikh%2FiK17KDrqNvPLOplxw2n1dgp4U8DevJbC6kdr5BX51EOpjg4h4Zy%2FhtbKg0BjVWAvwdlOiAXkMnloPyfp%2BN8WJzFZzWTFDUivYPiD5O%2FWaTPkGzWd9PSKstyvacoPTx7iuPiQusDsIBlOqijT7ldLeiaqGSP8v2dxPwiq8B2Hto1J2U0L5FBrBm3toDMe%2F6SeDXfiZxQcoGLVaLazW84MYkPMiQF5HY9SnPMjpk0fbz2dwOoWLicHc1%2FzYZyTiwe9hbEvsRZC2BLPBPP4Q%2F1B8mcIwZkCgg0fb%2BgHHFl9pRYSYXsehwZ%2FaqIE%2FdfyEreMiwLEzcxJutiSLc6Nx6nwSXow9p0bJ0VkmL4ZNXtMsRuGC6UrHl2uZclkuGafcf0eZ6oeLnMmBIWMpSjMOaP0MMGOqUBvoMhlxfu69eR72KJ4ZEIiUwYAOcIBbAHALUGImRH%2Fd%2F5sg5x7MHZgIoHCYnQ3mf1PvtFCyDd6cPbt9Za%2BrO4QK%2FCVtpjKYDldHpd3Rw8nVTSN5IxhjipHcMAc2W57YDy%2BCW3syd75Y7DBkzcglfE3y4rurGICfsYfKf1yfaI8k9PrsxnaJVT6AktKb5evwztQ6nv%2FFZPfCTJSOwUSxmwky2sHHZR&X-Amz-Signature=e825f7ebdfd26044f979aee26683f55ba40fe4a754a10c5800f9bb967073d4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z2EETE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAoOXFQiJejvsYlawqDiPpGdaK%2F%2FwAs3qdJ6NdIEDlJrAiEAv6gFi5nW%2B3yHqRvSXbSJY1i5r3G%2FoAB1fXUur1a0LpYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDElplwHswGhEsknOgSrcAz2aoQc9uKvYFmwVRithaLGs4EDhI8aXm6Egir206yJN%2FjG0t4l%2B%2FLODuE6jwxx180q2IUcfD9qpVrcFZHU8fzx5YFWQTIEywXTG0Z3isMlB7bjzIXuTG5KQZNIA71kBjzVIi%2BpjwfAOgIpYUzzbnbipbivQK3rsPKBqnvYz0zYurP09zVW7NzTadYmhrnehQo2kv4dWEtIrfoz14yks%2FmuEvuQ9iIL5yiCKdBkVHz3BRpWIYuho4owqyLcjzrYRXGMJbodGRIkdLADZh7%2FT7%2FKwIa3jaw5N%2FKBCN7Dlh2E37sszJpCgJ27vUWALs3MEUmZ%2F6ZmWWDpozLON6JL%2B0nbGGkhOxqy0huc0EV4cxeZrh%2BD3MaKu2DMUGdFRvjyRs4xq0kxR4z6htiYBM73xiNM2wpJIL3fbrG%2Fe%2FoNxZeb2RowQ1Mnb%2B5AyEevRe%2B1V3CxrZBaGi5eAZG9UNgP184f8ozi4aktYTZGYsNl%2F%2FKfZUsOkXYammHeBStTOHGTBj8ZsAwPGmmed%2BlFKGGy9tOKggMUIW0RNpe1TQ6gC7pVLwzO61I%2FERcyxJTvGsaDdsvmLdtV%2BY%2FkzgVtDReQSar56WVbgKrt52hmE6LYWGRaA2sNvRYjW5RZ2X1%2FKMPSP0MMGOqUBkxtG7m9DpJRTfUweVXeDYxxUeiY4B7tRPV%2F44xP0cIT867ItnBVwlTAjRFgAX8bwDvsNiSF9pbzqUb8nQ0RWa0MtWkoWaaGbJ%2BXExMXi9PdsG5L7Gt8r1slW8f3VclC9fGc%2BByK0BiwuCierqdxEBvDECv23S3keTgRs1VTe3nsJW8bIfg7UpovQzq3wj3kin5K9cOO%2BPhASUgiDpiXdvJGYoxkK&X-Amz-Signature=555dcae7a0b9cc601e8471880b4767f4f0e2a68b3043baf7d7f7338e9fe7cc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
