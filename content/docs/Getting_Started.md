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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKXL72R%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bxjAXz6uSUPNejNlH9xpIeHPZgF9MYzNlAnxUEh0NQIhAL2L706OEHjLHH4IDz7l9iNxo9mewIUzRM%2FEQep1xvcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfwBiZVnEq07WUZEq3ANDCdB9cv2P%2FBfvXdbRDoQ7%2F4UyxP46tNHjmn6mm39dIsgDDI%2FTlU8VfUtlQJhWkwYdFVddhZ2i8GvqErYJf5ZX8L6FxGphIS3i4JG0%2FFi%2BdiHEdNm4%2BLeZnygciv1%2FuSK3J9%2F3DFA7QBHWig0vQUo1lfA%2BU91wkCtpjt0GcyfFpyRDn%2BzdrHO2efMFTERPrAf%2FMzdadMSShkQuFn26JISaoJnyZMQdiH16O%2FMYpwlWRI86gIAKfDDQeQCoCxqVJQCZHVULFsN%2BNbwt6W4lK66qumh9ktgilr4CSup90nETDwLBAZOsYNGcNjqgj7WOdEBWjgzQrCOfPIeCr9u938379p4%2BJF3oye74yQSUG%2FLWHn6DCmuGoQOxb8cztXtKrohNZ1DPvmD9f3qRor%2FKNcNBCwJXNDA1u39mlRhDV26YojR%2FI6isTR2UyMb%2Bih7dpbUtXCJvMMhsQL5tvP2HQOQHENwNN6DcZNh4cDrbzzxbbu14APOe%2BBuH%2FFFt4hgD4zHSJ%2F4GnSruj6kAmdFVMBO7sAe4cXM45rp%2BYP2SaohIPmV8KJ2%2FtBkLPJm64O0XfiQj37GzIxPQdHD0r80Uhx9%2FtgWzlBvYWQdDpkYnVISaM61Q%2FY2ymERkosk31DD8oezDBjqkAQOS0Gs4HsxwB60pcmevNezrqdteCFKn2CJ%2BMjKNn3OmRFxomJCs%2FMZLfEi0XvwfF0QuFR5ckwX8OqnOMoZmnPSYtBgebH46uZvCGmakYRg%2FhRKDPOk2YbHXNKoW%2FLxH%2Bb7Aa6h5MAsdKipt%2F%2B3Y7N4iANJSJKv18h33JODHUf8LdvjAxy5x07bz7exaO9ufTvtQ53Ev1KARr%2BNavVQbcUmUOVGk&X-Amz-Signature=2b4e280ce76625e844b8b0b76b5625027d2e68a432b41213a29fe0cb006a84f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKXL72R%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bxjAXz6uSUPNejNlH9xpIeHPZgF9MYzNlAnxUEh0NQIhAL2L706OEHjLHH4IDz7l9iNxo9mewIUzRM%2FEQep1xvcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfwBiZVnEq07WUZEq3ANDCdB9cv2P%2FBfvXdbRDoQ7%2F4UyxP46tNHjmn6mm39dIsgDDI%2FTlU8VfUtlQJhWkwYdFVddhZ2i8GvqErYJf5ZX8L6FxGphIS3i4JG0%2FFi%2BdiHEdNm4%2BLeZnygciv1%2FuSK3J9%2F3DFA7QBHWig0vQUo1lfA%2BU91wkCtpjt0GcyfFpyRDn%2BzdrHO2efMFTERPrAf%2FMzdadMSShkQuFn26JISaoJnyZMQdiH16O%2FMYpwlWRI86gIAKfDDQeQCoCxqVJQCZHVULFsN%2BNbwt6W4lK66qumh9ktgilr4CSup90nETDwLBAZOsYNGcNjqgj7WOdEBWjgzQrCOfPIeCr9u938379p4%2BJF3oye74yQSUG%2FLWHn6DCmuGoQOxb8cztXtKrohNZ1DPvmD9f3qRor%2FKNcNBCwJXNDA1u39mlRhDV26YojR%2FI6isTR2UyMb%2Bih7dpbUtXCJvMMhsQL5tvP2HQOQHENwNN6DcZNh4cDrbzzxbbu14APOe%2BBuH%2FFFt4hgD4zHSJ%2F4GnSruj6kAmdFVMBO7sAe4cXM45rp%2BYP2SaohIPmV8KJ2%2FtBkLPJm64O0XfiQj37GzIxPQdHD0r80Uhx9%2FtgWzlBvYWQdDpkYnVISaM61Q%2FY2ymERkosk31DD8oezDBjqkAQOS0Gs4HsxwB60pcmevNezrqdteCFKn2CJ%2BMjKNn3OmRFxomJCs%2FMZLfEi0XvwfF0QuFR5ckwX8OqnOMoZmnPSYtBgebH46uZvCGmakYRg%2FhRKDPOk2YbHXNKoW%2FLxH%2Bb7Aa6h5MAsdKipt%2F%2B3Y7N4iANJSJKv18h33JODHUf8LdvjAxy5x07bz7exaO9ufTvtQ53Ev1KARr%2BNavVQbcUmUOVGk&X-Amz-Signature=6489af90c6ea9c6b7c78cab20841ffbfc2421c2c85dbe7368d87bd74aecf1e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKXL72R%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bxjAXz6uSUPNejNlH9xpIeHPZgF9MYzNlAnxUEh0NQIhAL2L706OEHjLHH4IDz7l9iNxo9mewIUzRM%2FEQep1xvcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfwBiZVnEq07WUZEq3ANDCdB9cv2P%2FBfvXdbRDoQ7%2F4UyxP46tNHjmn6mm39dIsgDDI%2FTlU8VfUtlQJhWkwYdFVddhZ2i8GvqErYJf5ZX8L6FxGphIS3i4JG0%2FFi%2BdiHEdNm4%2BLeZnygciv1%2FuSK3J9%2F3DFA7QBHWig0vQUo1lfA%2BU91wkCtpjt0GcyfFpyRDn%2BzdrHO2efMFTERPrAf%2FMzdadMSShkQuFn26JISaoJnyZMQdiH16O%2FMYpwlWRI86gIAKfDDQeQCoCxqVJQCZHVULFsN%2BNbwt6W4lK66qumh9ktgilr4CSup90nETDwLBAZOsYNGcNjqgj7WOdEBWjgzQrCOfPIeCr9u938379p4%2BJF3oye74yQSUG%2FLWHn6DCmuGoQOxb8cztXtKrohNZ1DPvmD9f3qRor%2FKNcNBCwJXNDA1u39mlRhDV26YojR%2FI6isTR2UyMb%2Bih7dpbUtXCJvMMhsQL5tvP2HQOQHENwNN6DcZNh4cDrbzzxbbu14APOe%2BBuH%2FFFt4hgD4zHSJ%2F4GnSruj6kAmdFVMBO7sAe4cXM45rp%2BYP2SaohIPmV8KJ2%2FtBkLPJm64O0XfiQj37GzIxPQdHD0r80Uhx9%2FtgWzlBvYWQdDpkYnVISaM61Q%2FY2ymERkosk31DD8oezDBjqkAQOS0Gs4HsxwB60pcmevNezrqdteCFKn2CJ%2BMjKNn3OmRFxomJCs%2FMZLfEi0XvwfF0QuFR5ckwX8OqnOMoZmnPSYtBgebH46uZvCGmakYRg%2FhRKDPOk2YbHXNKoW%2FLxH%2Bb7Aa6h5MAsdKipt%2F%2B3Y7N4iANJSJKv18h33JODHUf8LdvjAxy5x07bz7exaO9ufTvtQ53Ev1KARr%2BNavVQbcUmUOVGk&X-Amz-Signature=89638ca060053cff53ebdae5b52767d9b465b3efad5dd1fb4f6dc7da71b09066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCLTNK4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3QClzF97R4HqrxXyX5az7oHqWyDXbn6BGoye32s7tuwIgUtNuQg6mNNYVcH%2BvItCX71f8cu8Aak3r093y3LWZrgwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRrXuI%2FAqBTHdErzCrcA%2FHbkWXfbz6kfzpYJeNyrIdJncvEoAj7B8aE%2FKaTzhkENYOY8xY5HLwq5AuQXgjzfg%2FIrpqV%2BGtzv0vWjvN4JCFEPTIoC3Y82n9qFhS2SNp3E7SdWK5wZPxlW2EPlKW1UMs0ulWZDdPRYBSE2MqxW24BBg1v9W%2FLf2FkH7KmFHGguJ7FWpPPZReG0xZrfXkTDKXwYRPvL3behW5e%2BSJgLQRMo4YQ4yMCakR4vnEHJU9SALWmMdKXeX0MTZDfggLvTLF4Jr%2FORONhev97HeTGH2s2UjfYM08hpoc2u6z5vfpu6t4Vd1QHuJhypHlVCLdeyxJ1rvVYb7OTvQAVBkw8uXkeYyD9epGi7kez2Zhtp8ol%2ByHeJcVcXKfGEpk%2FSR9DIKzf9qIKBFSfuwmkQbGepUHYY15rgQpviyv98LJ3yN653Sc4FK2X%2BIJm8mAuq5HUCOe%2FYteYhllraiEvR%2Fxtvlzy8dz1h3FlgnjretGFy5uUVhodOMfzhVpEbqp27ibbNi%2FC%2F3msJ%2F08YCezb1UBe6nn%2BkQ9zIWH%2BCA63eLimmTEmY36pb5fEwS%2BhT2DbR9n1uijounz9Wg1N7L1q1DEshqu0fO2hB2ezyk1McqLvDY3H4JXhGfzlrqOkbMuMIeh7MMGOqUBx0oqRDVvl%2FjIylFZmvJUKn%2BKYqjPpI4%2BUr7XhG%2BnaLHnEi2WnCB%2BMOZByeQJibg%2BsA1YYVOwdZmC%2FbDJKGq%2BuHZtXF53M4XfweBUZjBQ5inufD3YwQXMk4lqJr5Pj%2BQy8fdPktldg5iPpaoSeSuqoUaQdkHJgDuOIlvEMa%2FAC64lRC5Uu8zgLM5ZcdIHNVekGRYcaYBQ3tTAbeqhelH1nW0BuWyB&X-Amz-Signature=aaa57c45f08df70ce5055fb832cc134b812197bf2e24f28c1456dda74a167bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEZLLMZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbAthlhKBIkDGYyQhbeT2s7zH174ybP2o90cvOxE916AiEAgavKNk0CO82xRy9G5856VPamQFjtK4nY02R0iyMgVJ8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ6FHScWTLKQeYJ2SrcA53f%2Felo4LmzShG8hgxOmU9BD%2BRR5CrZt447tyuexKK1%2BK9b1aqQNbEIhg95fHwTzDe5npuRRnczNmYP8CKR%2BbQFnS33HaAH0DGhYEB1cKJiEwxugrxaaduSgasOSaEQd%2FLJIAd91VpwZMwWubIVGaFSnebcI6QIeLcB0gYtMa9aGYbo2KzzHhZf19ui59%2FkvMf%2BUnRpJ27qVTFNsjqmzVlN2PrgjVqujJYWNK53Wtf6y7sJQ2Z26OdDg3EHRpQFPZ7bO4efDevMKT%2FVSol5f0WEgdXQPE8XFp8i0EaX9Lzo3xUk4E0RF54r5Ma1tfp07gH%2Fd7HgFnzJmp1gQ3w011Lf33iRRG9rjgrmhqZyFLs%2FQ0BlhFt06fYSuOyrI1B1wwmIHXYbzp3EnoBN45NfIyP9RgyGtAO99I7k8QwMXEoxk66rfZQ7uj0WOlX5nCmrmf9qXKBLoCvlWLEWs8O4GBavTRy55c97O49eqLEnwYFk2pCspwWATVP0FWO8FPnnjkvJtSuMIMTF4CQEmtU4yYmzvBZ%2BLlPNEpmNboxrFrhlgPn%2BrEh%2B%2BtnDyOcxPxaXuyTFD96dbQgYFf7enaC0ybF8ij140g%2BYIv3xxXLz%2BuW7YV2O0l04uFfZAK5jMMOg7MMGOqUBPfnddIPXqT154gzcF4YnsVMF0P0qi%2BrjKceqHyqyCq1ke4QizcsvWTFzmjkEycx2gQxlikAu07yxbIX4vOeEftKbhlLjl8dErJjIngHv%2Fbdz15INoFnWq%2FsLTzJLU9mwEkHSVLVsrqrIEowjKN2%2FzL38zDUwnII19gb1ma3cM3lFAnXvCBnv6Ng%2BhjB097tuPB%2FublQwKU00VUkFBrIspoWYX2K5&X-Amz-Signature=93029f0265ffd3904990ee9c42b8f8e31f5565f2fdfd4c562992124063326523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKXL72R%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bxjAXz6uSUPNejNlH9xpIeHPZgF9MYzNlAnxUEh0NQIhAL2L706OEHjLHH4IDz7l9iNxo9mewIUzRM%2FEQep1xvcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfwBiZVnEq07WUZEq3ANDCdB9cv2P%2FBfvXdbRDoQ7%2F4UyxP46tNHjmn6mm39dIsgDDI%2FTlU8VfUtlQJhWkwYdFVddhZ2i8GvqErYJf5ZX8L6FxGphIS3i4JG0%2FFi%2BdiHEdNm4%2BLeZnygciv1%2FuSK3J9%2F3DFA7QBHWig0vQUo1lfA%2BU91wkCtpjt0GcyfFpyRDn%2BzdrHO2efMFTERPrAf%2FMzdadMSShkQuFn26JISaoJnyZMQdiH16O%2FMYpwlWRI86gIAKfDDQeQCoCxqVJQCZHVULFsN%2BNbwt6W4lK66qumh9ktgilr4CSup90nETDwLBAZOsYNGcNjqgj7WOdEBWjgzQrCOfPIeCr9u938379p4%2BJF3oye74yQSUG%2FLWHn6DCmuGoQOxb8cztXtKrohNZ1DPvmD9f3qRor%2FKNcNBCwJXNDA1u39mlRhDV26YojR%2FI6isTR2UyMb%2Bih7dpbUtXCJvMMhsQL5tvP2HQOQHENwNN6DcZNh4cDrbzzxbbu14APOe%2BBuH%2FFFt4hgD4zHSJ%2F4GnSruj6kAmdFVMBO7sAe4cXM45rp%2BYP2SaohIPmV8KJ2%2FtBkLPJm64O0XfiQj37GzIxPQdHD0r80Uhx9%2FtgWzlBvYWQdDpkYnVISaM61Q%2FY2ymERkosk31DD8oezDBjqkAQOS0Gs4HsxwB60pcmevNezrqdteCFKn2CJ%2BMjKNn3OmRFxomJCs%2FMZLfEi0XvwfF0QuFR5ckwX8OqnOMoZmnPSYtBgebH46uZvCGmakYRg%2FhRKDPOk2YbHXNKoW%2FLxH%2Bb7Aa6h5MAsdKipt%2F%2B3Y7N4iANJSJKv18h33JODHUf8LdvjAxy5x07bz7exaO9ufTvtQ53Ev1KARr%2BNavVQbcUmUOVGk&X-Amz-Signature=7da8a22bc028cc3bbeb4836941f76cdd8cd046843fa32ccbd4bdec5adff4390a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
