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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNW5E7E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIASSjJt8X%2FLBGGO7o2ix9kaApyiqpWiwITXRdsjE%2Bzp5AiA1Yy3vgJ1xLPb3bul%2FNm5lQBjbTZ6t%2BjfIEuGE4m%2B%2FMir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM0dm9BKLqsKziveqEKtwDxqoYZRl7AL%2FAhnIImcxplrDyul6Esi7n3H7lzDanA1lhMf6puTt9fMJht9kvaf4lpiCPO%2FvVKD1r8Lnr0EgLFdonfqsr8GHyRh6L5UKY%2BhuthL10wmGYKGksMoUdBW31BAI%2F7nkdu9%2B3fxn1CE2EjPnlqXqbVubkBWUMOiNzdUO9cUkCkjFfipMqoDLFnZLHFDt2kZJigvGmhsFrrX7Ra5BkC%2BrGvpx6JxKNX0VvDoGK2lF9Hu3b72rbCwj7XDtOg99ROjplCisUwq8W8MaarpKdSX9s%2FQAuSz1ZkiMI%2B5iGhe%2FzDQ0IPMjnVddmFcdMp0PDaFwKE5V08Vw9pXv%2BvhYkTwEClNnd0KAiE9H2EZ7hQYXq9lgfUes3aFlYJOt%2F9PmnAPqpQVO%2Bos21hCgfwwtOjCZMMSywczAvoRebd%2BqUuOsmikAys%2Fvnia4MO2BdZRjkLhfqDlH49eduvyo2LTy5iFC41jAfThGDYlLn9K3sDtSV%2FrBRiRbMCj2Y2LImIwfB13t22PfXIn0KQZ8SsAdWWhH%2FN1e%2BihUNl9qKMOqE8ETU8lAuPTD30K%2BRuQyFA7O3SzxsdMRzKlW7Dvw%2FyU1KABUA%2B4usRLJzmczEeWFUVknUpRWI1j9fQKUwzdjsvgY6pgErV%2BItiWMpJUJ%2FVWVBtorzrPiMwgGKlnlmqYGhYDI2p3rGx3FPXdg9VXlCDLZOeLmcot0%2FnkK235Dz6Rqoy77E1yFY1Ent17PIYe9IlizL%2Fc7RSPEf7cGwxHZQrXjEdU8FNci5dTddK2SaQYHGTYGD79E8EBHcATOs7KnqqORon9Cs7VxpN8oqBcYz3LlocZYQP462rBoD3loZp3dv6qNAuCzbX2ry&X-Amz-Signature=5937ab8821c816b8ac8f888053e301b37c801f4d2a3e7d439764bc9b98d6085c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNW5E7E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIASSjJt8X%2FLBGGO7o2ix9kaApyiqpWiwITXRdsjE%2Bzp5AiA1Yy3vgJ1xLPb3bul%2FNm5lQBjbTZ6t%2BjfIEuGE4m%2B%2FMir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM0dm9BKLqsKziveqEKtwDxqoYZRl7AL%2FAhnIImcxplrDyul6Esi7n3H7lzDanA1lhMf6puTt9fMJht9kvaf4lpiCPO%2FvVKD1r8Lnr0EgLFdonfqsr8GHyRh6L5UKY%2BhuthL10wmGYKGksMoUdBW31BAI%2F7nkdu9%2B3fxn1CE2EjPnlqXqbVubkBWUMOiNzdUO9cUkCkjFfipMqoDLFnZLHFDt2kZJigvGmhsFrrX7Ra5BkC%2BrGvpx6JxKNX0VvDoGK2lF9Hu3b72rbCwj7XDtOg99ROjplCisUwq8W8MaarpKdSX9s%2FQAuSz1ZkiMI%2B5iGhe%2FzDQ0IPMjnVddmFcdMp0PDaFwKE5V08Vw9pXv%2BvhYkTwEClNnd0KAiE9H2EZ7hQYXq9lgfUes3aFlYJOt%2F9PmnAPqpQVO%2Bos21hCgfwwtOjCZMMSywczAvoRebd%2BqUuOsmikAys%2Fvnia4MO2BdZRjkLhfqDlH49eduvyo2LTy5iFC41jAfThGDYlLn9K3sDtSV%2FrBRiRbMCj2Y2LImIwfB13t22PfXIn0KQZ8SsAdWWhH%2FN1e%2BihUNl9qKMOqE8ETU8lAuPTD30K%2BRuQyFA7O3SzxsdMRzKlW7Dvw%2FyU1KABUA%2B4usRLJzmczEeWFUVknUpRWI1j9fQKUwzdjsvgY6pgErV%2BItiWMpJUJ%2FVWVBtorzrPiMwgGKlnlmqYGhYDI2p3rGx3FPXdg9VXlCDLZOeLmcot0%2FnkK235Dz6Rqoy77E1yFY1Ent17PIYe9IlizL%2Fc7RSPEf7cGwxHZQrXjEdU8FNci5dTddK2SaQYHGTYGD79E8EBHcATOs7KnqqORon9Cs7VxpN8oqBcYz3LlocZYQP462rBoD3loZp3dv6qNAuCzbX2ry&X-Amz-Signature=a437831e616cbcaa13a94018bb0ea6d8c619fffab4407e68d9151e79b3061bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKCZ6MI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDCopB1Qg%2FxCJ96lCU3D%2BeH%2BlMzZocHyL93qIcYdr6%2FdAIgWiQZ2SjVy8Pp8eY4aFfBP0sHvAYB02K4RHhtqc3CM6Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE%2FShUIUxQNZVO9UrCrcA%2BNK3wy1UCnwfQmn3EZ8WvLUEM5CNrz158xZQzBx%2FltTp%2FPdPxwIDrl1gC6UMou4RjNemOvKts3VEe9geWEJwXVErUdktqUzg9sC81cOEKx16wCQ0I1t4ABOxP%2BgGWhQRLashjfUHhsHfSQmRjH%2FxYIkhpLSOANGc3hstWkw6qLVxssE8AmjyAm98dfSyLh3HcGDCdTj7ah0NghricG6WtGtJ0gNNH4cs%2F3fvGRze1j%2FuaGgmonYW8QLLqwVlHCNGs9Rms%2FWr6h5DAprD7QW5YuDD6%2B10p7PHi8j5ocbNgtjH9%2B%2F4V1dxTgJfS54edmKTrzNUflFR6xxvTSRXTTknm4m3tOJa44xh3qKHxppBdmAl3BYDPtNHAZNiWV8X4ZMdPDboM6KQ3Wj3WssUVrYykAQiAaolXKRcYi%2FkgMQrGw3MV64DRwXyNnwuOnwtapWEoU0jLL6qAaehMy7ENWow0eKSur4U7sje9RFDLYtoDP8euyihd5gaVgbV67X8mP2pLlmdnJ2Arp3nRJY4FxUqMjBz8toWYxrogtnK%2FGeyEElMEhEf3bLFq6PyUzGv%2FtIAu54fsLTiGq7MbDPvDT5xU9YTt3xv3MsIFyfZn1ngZU%2FVBzRdEqqp2%2FDJBPbMO7Y7L4GOqUB2cGWY1Tf2ctPqjk2wedAUxRiU9so8hoUbf4Z%2BNTvpkXR2Q1lWAjb15rNy53HtUn8BWjSIVgaW3HUsjx6zRaK5TxHFHPYa%2FJ2gb6DmAJzeUfIQp1%2FHGAUK3Kl7CGEMgIGYXY8V8S7E3vJab1SqPMGngR8kJiRLe%2BSfWnhRivbPvL%2FsA0MuOWosCmHdKHjE3MR5maYuDJvSJmZLVJMSLNB2Px7hTLF&X-Amz-Signature=a4e60cb5790d3e3e627114fbd7805d3955d94170b1f0f8e867d708dfce3ce86e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMRYIKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEEoMX1cvUSEdKa80UC3Hf0CkHpvb2xtw8Sr%2F6ePyCBkAiEAjooBZIcU9fYTjGAdfIsmUSGNXK%2FEeFvmUIuYyGGB8NYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGfrfQN0mejGKFZb6yrcAzBPIvW9C1hXF2Ae6LAn0vtrUZLXD0BdFzcB81UKNEGt45tDWDB8QLdxZeNghbY8UnQPGps6N07apTbuKEsN55Xl2bIR46mKdH9X6lR%2B%2F%2F%2BV6E3RUv%2BjF9Xw%2FWoNnqnsicbKtlPbjU%2FyMJT9P6FxdkCbAjov2Mzt91O7ttQVlpYWK3MSrNLCR35S2T1Cd0WGHOdWa5bN5%2FuinwjlYsoSpIxvNpPmmVEm8FkjjxTZNZh4SVnmBO3fvwqjFR75gQDaTxbe1NVUVnymTQvfclJS7lcuXZrYIMjHR3cmu9xAWMobytIWL60Ot0GYZomjtmfYPM6VqQW4sr4uhFamSDOjkPko7V4kxkcpII31u%2F64C0ifIc%2BA1gJEvvjJ8Qq9ip%2FTkxY6kAASksLjnpdnYCxgAnTEFF5aRc2KZ3ImsH034JD5eukNWAocmetbCnntBw3hg%2BERoQNkpTjWWKjfxi85woINjmYah51ddvWNXadYAV67qev6%2Bvu0KErPkFNe6Jlc2OfkEv7sD4oROymGzRyvFuUcGaCyZnLIFz%2F7wOs4ezbRUqRMvZSNWyhbrUQMFW008yKyJhQHsATWYQ4H31zVG6Kv07lpq3kujjrpHloa7UKSY%2FAjzTLCnYKio6%2FoMIfZ7L4GOqUBrWl5Crj3Y1mwrkr7x%2BvhuwmIDHax0vOryXYcLayT3aZtTT0PH3w3cftdUmqKSktSoZoql%2FEpCXqX2k7v9PghQFCSSAIk36UnAbyvMiqfjfj7x7siXkXgmrF7x4Ba02LlBghutUUaVROKxKOy4%2FdCPk%2BmYMFOmDJ8SvkrflQNf1Ebja4HOXs0x0XOkscMrohrrulrJ7R6%2BN5%2FO3Ex%2FEEYR86HOuIv&X-Amz-Signature=83952b6b0bf26d5dbade53979cb46858ac347c655edaadc8409b88b7c1a5c4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNW5E7E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIASSjJt8X%2FLBGGO7o2ix9kaApyiqpWiwITXRdsjE%2Bzp5AiA1Yy3vgJ1xLPb3bul%2FNm5lQBjbTZ6t%2BjfIEuGE4m%2B%2FMir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM0dm9BKLqsKziveqEKtwDxqoYZRl7AL%2FAhnIImcxplrDyul6Esi7n3H7lzDanA1lhMf6puTt9fMJht9kvaf4lpiCPO%2FvVKD1r8Lnr0EgLFdonfqsr8GHyRh6L5UKY%2BhuthL10wmGYKGksMoUdBW31BAI%2F7nkdu9%2B3fxn1CE2EjPnlqXqbVubkBWUMOiNzdUO9cUkCkjFfipMqoDLFnZLHFDt2kZJigvGmhsFrrX7Ra5BkC%2BrGvpx6JxKNX0VvDoGK2lF9Hu3b72rbCwj7XDtOg99ROjplCisUwq8W8MaarpKdSX9s%2FQAuSz1ZkiMI%2B5iGhe%2FzDQ0IPMjnVddmFcdMp0PDaFwKE5V08Vw9pXv%2BvhYkTwEClNnd0KAiE9H2EZ7hQYXq9lgfUes3aFlYJOt%2F9PmnAPqpQVO%2Bos21hCgfwwtOjCZMMSywczAvoRebd%2BqUuOsmikAys%2Fvnia4MO2BdZRjkLhfqDlH49eduvyo2LTy5iFC41jAfThGDYlLn9K3sDtSV%2FrBRiRbMCj2Y2LImIwfB13t22PfXIn0KQZ8SsAdWWhH%2FN1e%2BihUNl9qKMOqE8ETU8lAuPTD30K%2BRuQyFA7O3SzxsdMRzKlW7Dvw%2FyU1KABUA%2B4usRLJzmczEeWFUVknUpRWI1j9fQKUwzdjsvgY6pgErV%2BItiWMpJUJ%2FVWVBtorzrPiMwgGKlnlmqYGhYDI2p3rGx3FPXdg9VXlCDLZOeLmcot0%2FnkK235Dz6Rqoy77E1yFY1Ent17PIYe9IlizL%2Fc7RSPEf7cGwxHZQrXjEdU8FNci5dTddK2SaQYHGTYGD79E8EBHcATOs7KnqqORon9Cs7VxpN8oqBcYz3LlocZYQP462rBoD3loZp3dv6qNAuCzbX2ry&X-Amz-Signature=32a15d63c9f5ba18c4c8890b5bbb221e7ebe9149a15e666c4c3c7dfbf4ce5518&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
