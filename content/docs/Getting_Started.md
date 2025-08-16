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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFLYFA3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCjJmTHn1SHSBigD4I%2F5%2FeHKxuvOgFyNM3mKWXoBvgV%2BwIgRt3ilLb%2BL6jkOEJZ9xC7XTgaMgJOhyZWm8p89Th4RhQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNJEoDq2KukpEay3uCrcAzS%2F6ft7n6NG2MY4bHbJW3j7jzhEOdKT1iTnYevNUEOGO5HlBayBcbE%2FXz9uWr4lGj6aQZv2M4GXmalIxsmIpLhrLhjn9VWfoAB8DFsUgPqVgLuZGFXAFyn8R1KIim4QN3GKymEOcXsVQWeg%2FWhJMn8NIO%2FbNJHvqWcLim0rDiuc0JipeBsWmahkKAG64sdSRX9OsInRsgnixWZjZBR1XNL7UPmsb10gQdePFneyytrsl4ZBIfyuyGkCtqKilmTn01u52O0FpRKebGfwxEfRsc0cePL%2BoOXbuxrHOdoDFSU%2BonvqfXSzUomU67pyfjHVE7nWFSkjAtBb77a1YablrzCTWY8rFWbVicYOA%2B8ZilkvXjG8g3zCjSBOgByR8Uh%2BzsDCLVPs9uRONRSz22JR0J7en6JUO%2B1sEB5ETPY7m3u4X1tIEYXgPhcKjsXet27n8MY1pKfkcJ5b%2FJiJaSdLZ%2B3FqMOuoT1YhGz4T8aa2pCZFp1VoJIkNOXLQVzttb6iW%2F5kuNJcJGa6w2%2FuLEPLLdipFRDpHdo2VzHlvG8%2BsHwIoOER7uGr4f5cQXXrlQDGyJmrxfj931jqFO6Kz0qSF9l%2FcULy28MK5hrV1BA77gxHtlsjD99TpkRcbHKiMLrk%2F8QGOqUBKkcQqMqX%2FdUlTJ7IuwAV2T%2FvPw%2FmvO%2B5327YGVWY4beOcwOTAppLF7DIR%2FuSWc4O%2BFGILRCUXuZ6DEJDTtRkq%2FEgsIx7caAwbL7UBRDn5ddkSxkCvar%2FRL7wfjxUbvlE9pPWFO%2FBP740B8qklmkF9SiFRU8B%2FW1%2F%2FFqsQgY4TUW3BJWIPhrx491ARy2P6tyqJS0BsIkX2FqSo34JIXCAxS4i8wsd&X-Amz-Signature=e609c4d69d783e82ee5f0113ef95220a23b6dbcfcb4a4f73e4756ab1612cad24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFLYFA3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCjJmTHn1SHSBigD4I%2F5%2FeHKxuvOgFyNM3mKWXoBvgV%2BwIgRt3ilLb%2BL6jkOEJZ9xC7XTgaMgJOhyZWm8p89Th4RhQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNJEoDq2KukpEay3uCrcAzS%2F6ft7n6NG2MY4bHbJW3j7jzhEOdKT1iTnYevNUEOGO5HlBayBcbE%2FXz9uWr4lGj6aQZv2M4GXmalIxsmIpLhrLhjn9VWfoAB8DFsUgPqVgLuZGFXAFyn8R1KIim4QN3GKymEOcXsVQWeg%2FWhJMn8NIO%2FbNJHvqWcLim0rDiuc0JipeBsWmahkKAG64sdSRX9OsInRsgnixWZjZBR1XNL7UPmsb10gQdePFneyytrsl4ZBIfyuyGkCtqKilmTn01u52O0FpRKebGfwxEfRsc0cePL%2BoOXbuxrHOdoDFSU%2BonvqfXSzUomU67pyfjHVE7nWFSkjAtBb77a1YablrzCTWY8rFWbVicYOA%2B8ZilkvXjG8g3zCjSBOgByR8Uh%2BzsDCLVPs9uRONRSz22JR0J7en6JUO%2B1sEB5ETPY7m3u4X1tIEYXgPhcKjsXet27n8MY1pKfkcJ5b%2FJiJaSdLZ%2B3FqMOuoT1YhGz4T8aa2pCZFp1VoJIkNOXLQVzttb6iW%2F5kuNJcJGa6w2%2FuLEPLLdipFRDpHdo2VzHlvG8%2BsHwIoOER7uGr4f5cQXXrlQDGyJmrxfj931jqFO6Kz0qSF9l%2FcULy28MK5hrV1BA77gxHtlsjD99TpkRcbHKiMLrk%2F8QGOqUBKkcQqMqX%2FdUlTJ7IuwAV2T%2FvPw%2FmvO%2B5327YGVWY4beOcwOTAppLF7DIR%2FuSWc4O%2BFGILRCUXuZ6DEJDTtRkq%2FEgsIx7caAwbL7UBRDn5ddkSxkCvar%2FRL7wfjxUbvlE9pPWFO%2FBP740B8qklmkF9SiFRU8B%2FW1%2F%2FFqsQgY4TUW3BJWIPhrx491ARy2P6tyqJS0BsIkX2FqSo34JIXCAxS4i8wsd&X-Amz-Signature=24f148844155a1deea8e042855f13ec40a4a3b1dec9f400f760e2f35a8450e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFLYFA3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCjJmTHn1SHSBigD4I%2F5%2FeHKxuvOgFyNM3mKWXoBvgV%2BwIgRt3ilLb%2BL6jkOEJZ9xC7XTgaMgJOhyZWm8p89Th4RhQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNJEoDq2KukpEay3uCrcAzS%2F6ft7n6NG2MY4bHbJW3j7jzhEOdKT1iTnYevNUEOGO5HlBayBcbE%2FXz9uWr4lGj6aQZv2M4GXmalIxsmIpLhrLhjn9VWfoAB8DFsUgPqVgLuZGFXAFyn8R1KIim4QN3GKymEOcXsVQWeg%2FWhJMn8NIO%2FbNJHvqWcLim0rDiuc0JipeBsWmahkKAG64sdSRX9OsInRsgnixWZjZBR1XNL7UPmsb10gQdePFneyytrsl4ZBIfyuyGkCtqKilmTn01u52O0FpRKebGfwxEfRsc0cePL%2BoOXbuxrHOdoDFSU%2BonvqfXSzUomU67pyfjHVE7nWFSkjAtBb77a1YablrzCTWY8rFWbVicYOA%2B8ZilkvXjG8g3zCjSBOgByR8Uh%2BzsDCLVPs9uRONRSz22JR0J7en6JUO%2B1sEB5ETPY7m3u4X1tIEYXgPhcKjsXet27n8MY1pKfkcJ5b%2FJiJaSdLZ%2B3FqMOuoT1YhGz4T8aa2pCZFp1VoJIkNOXLQVzttb6iW%2F5kuNJcJGa6w2%2FuLEPLLdipFRDpHdo2VzHlvG8%2BsHwIoOER7uGr4f5cQXXrlQDGyJmrxfj931jqFO6Kz0qSF9l%2FcULy28MK5hrV1BA77gxHtlsjD99TpkRcbHKiMLrk%2F8QGOqUBKkcQqMqX%2FdUlTJ7IuwAV2T%2FvPw%2FmvO%2B5327YGVWY4beOcwOTAppLF7DIR%2FuSWc4O%2BFGILRCUXuZ6DEJDTtRkq%2FEgsIx7caAwbL7UBRDn5ddkSxkCvar%2FRL7wfjxUbvlE9pPWFO%2FBP740B8qklmkF9SiFRU8B%2FW1%2F%2FFqsQgY4TUW3BJWIPhrx491ARy2P6tyqJS0BsIkX2FqSo34JIXCAxS4i8wsd&X-Amz-Signature=6eb42f82ada3c4d1c0304b3872ae24150384b6b25a8d15b53aad2ab2ed63abe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47MSIAL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZYOH0%2BNVoFFNxJH35Tztk36SGEqb4HTnvHOeJc3ya5AiEAy4k3gpnBTR1CT8Pz7ChKEFVmS4QLSpJi4hh4rI3glvAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKoCOzdPV%2FmZRjiRHSrcAxqJar2b%2BPuBIDJMy0ZNXz5Dix19jAEs3cVZwWFSg777gJGIxk17fF5rHaYww5%2FkuF%2B7NcZmzDHYc84Ocfa5VGh47ZbAHEsTVE%2FNeVa1Ejys0rXBJcp%2BUs1mJ%2BMCr8ZtNYWb5CmzzzPzMH7C1zJH1L3%2BOZlQfWHyZuHlQbI40eAhwcy6wnlViDz7O4KG7%2FaOvjVd8MTD3ZzqzulGsC28omL4zgBTEonEaBbPAsBO4KOzUg4XHApcnyb7KAbRwElIdan4N5jztsb6kwEkd6lTykSxsBRH%2FFvZJviLWoBm12VGUaQCtN0cDpLgdOuzZ%2BiYDwS6H1BL56rLaUUtypmnmHaCFZsUrGw6gQF3EI3qJjPNFJhgfHHrJSRbRmrQBxNpEkLexiTJVQqMAUzHcRN8PIKjBnF6hR8vmi3NP3TX%2B0zXTgZzu%2FlCJGEyeGMIfAqubz0AzJd1%2BHm9lvbnLtlrhIS9bKY4fXL%2FiFAvRdyFy%2Fjs4AoyKpV606KImm55N5ceNASqVyIR2CnunpCFpMGVZ0oWldaN4FUi68LV32R3jn1EifTFuvIql%2BYgyqUXi2pUi9LDeZ6oqrWfYrDCbEf6v610pxGyrCvA%2BB10UV%2FFF2YgAxLuMGRqU38X6Mr%2BMJHk%2F8QGOqUB4%2FicNJlYz40f2TsB2hrMeMMjSlsd75y3pEfMDXQHCSKyJG2MYQFNW0OXeyAizf%2Bz0J5UtAyJFpXYUbs2jT9twHlnryPPZAoBNDdPIk6igAWNk5HdIeLK4Z9ffAHqaDFYBD1XQBXWK8s%2BAQatAJI4DZKrUfp9s3ZNKgbGpVlkVnoHCFFkbQ9BbVHrZmuwaq8jGgHD8XyX7ZNUtrxHDS4W%2F%2FjtjRNH&X-Amz-Signature=4e976f4cf303db46953b268c5ecec401421eb4a122aaf4b8ec4fa91844f26e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Y5ZVYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHRv4rEsJ5KqExRDmPKGUWiQRDtz3%2FwzKQpNDFCbVQjDAiALqX8YiDVNYvpJ2Aj0%2FaazKXVDB1lsBeNUo7DxRtFAcSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMC4BwrMPm6kE8pJmmKtwDNaMnWiZxOqi43%2F1cWzdQ4oqAhTsanTR30Jn9DpG0Yr7iPLX6h1uVggWQFfABBi6DQgNsPKx5nLCmYxCDPjqmNrOsFtl8NBH3gXV%2BDHWUKZ3yHNbt4PvtttyITxk2Rm%2BZDMPE3y53NL5q7U%2FrFTP%2B74VXCmil3%2BMZzBKf9cvmuTvaOVPX5UFtJnVExJZbc43PGRxQ1%2FHhpfOO50znVwwz4jQB7mHB3Q%2BAXc0thD%2FVfnJ%2FBvPmSyn%2Ft%2BbpZdzvC92oV69zFfAL6AKm0kFxxwkZ16qbdl1rwRqPMNA59zCvYWuxAch42XWvuFmpDpeGRZMcLPc2upSgWHb6iakLYPjxErJ0FIcNDP4spwuVcWe4ZnnnZ29Wu6UR0ieNeKIH0y342OSqn0LqoqAsZpKy1TkpeiTEMWcIC9HTvNULlRZyJZ2pYTVVgZs035fhrfpUUrN1jbwiLJ%2FnBlJHeSes6UXh4%2BxAJkQ67G1kCbWuGi1CtFuayn5xW6KY3Nz0F9dVTuzuljCJuCG3mK8km5LEzszs53g%2BbYuKNolEHC3mvtgUSL2tU56b1FYieN3VGlDoTXERuHRgVsiDtjMySas2XEAaQWpGqaT4EW38%2FSwsuFOjbk3OIAI77gnXGD727aAw4eP%2FxAY6pgE0h4AztaKajn2bpCMzJvJ4Tkcl0OhMcXd3LwbSzYBYJaUG%2ByFJPZsrFU0hsZtXXwkrUloXDDAYknocoOZAyexGJKYtKNPkXZd6u%2BFXd1k66FKIPXnIKr%2BftLSh5Gr22qgc2FGLwz%2FElXAu2zqH%2FbzUdugVgedHggJHl196T2DEpT%2B6TxKM%2FtKL0kqmq26CRDqmREIe%2B9Tdkk4LOZxZJYQR%2BMPdGGGo&X-Amz-Signature=7e9a8c75082b331b77e8be1d658a7b5802d3076c585baaccc3f5cfbd745df80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFLYFA3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCjJmTHn1SHSBigD4I%2F5%2FeHKxuvOgFyNM3mKWXoBvgV%2BwIgRt3ilLb%2BL6jkOEJZ9xC7XTgaMgJOhyZWm8p89Th4RhQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNJEoDq2KukpEay3uCrcAzS%2F6ft7n6NG2MY4bHbJW3j7jzhEOdKT1iTnYevNUEOGO5HlBayBcbE%2FXz9uWr4lGj6aQZv2M4GXmalIxsmIpLhrLhjn9VWfoAB8DFsUgPqVgLuZGFXAFyn8R1KIim4QN3GKymEOcXsVQWeg%2FWhJMn8NIO%2FbNJHvqWcLim0rDiuc0JipeBsWmahkKAG64sdSRX9OsInRsgnixWZjZBR1XNL7UPmsb10gQdePFneyytrsl4ZBIfyuyGkCtqKilmTn01u52O0FpRKebGfwxEfRsc0cePL%2BoOXbuxrHOdoDFSU%2BonvqfXSzUomU67pyfjHVE7nWFSkjAtBb77a1YablrzCTWY8rFWbVicYOA%2B8ZilkvXjG8g3zCjSBOgByR8Uh%2BzsDCLVPs9uRONRSz22JR0J7en6JUO%2B1sEB5ETPY7m3u4X1tIEYXgPhcKjsXet27n8MY1pKfkcJ5b%2FJiJaSdLZ%2B3FqMOuoT1YhGz4T8aa2pCZFp1VoJIkNOXLQVzttb6iW%2F5kuNJcJGa6w2%2FuLEPLLdipFRDpHdo2VzHlvG8%2BsHwIoOER7uGr4f5cQXXrlQDGyJmrxfj931jqFO6Kz0qSF9l%2FcULy28MK5hrV1BA77gxHtlsjD99TpkRcbHKiMLrk%2F8QGOqUBKkcQqMqX%2FdUlTJ7IuwAV2T%2FvPw%2FmvO%2B5327YGVWY4beOcwOTAppLF7DIR%2FuSWc4O%2BFGILRCUXuZ6DEJDTtRkq%2FEgsIx7caAwbL7UBRDn5ddkSxkCvar%2FRL7wfjxUbvlE9pPWFO%2FBP740B8qklmkF9SiFRU8B%2FW1%2F%2FFqsQgY4TUW3BJWIPhrx491ARy2P6tyqJS0BsIkX2FqSo34JIXCAxS4i8wsd&X-Amz-Signature=2818913219fe51c54a371082b200a0a2dd8ee26f02ee225bb39ee021d585e2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
