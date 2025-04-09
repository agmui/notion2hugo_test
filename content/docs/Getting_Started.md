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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNE4OBPA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCV10poE80JqJolrsxs9IdY5GuDdWgeIl%2Bk6bMK3TrHPAIgYjlgYscuExjRIcBojmD4Q0aE%2Fc6wflNCXJGb5pOJmcgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPGbx0Dhim7X5F6iyrcA17HBo7fbMr%2F1Im9YyHKN7kJuJZNDUO%2FZ8dDjNZP20HJoUpgm%2BhXb2Nz%2FXGgeFob9wxaD0mMUZw64pJH2np9qdfhOOZBCdHbRSYMnIxavZMTcake%2B2UQIEiGUwvsDhlz1M%2Bqf2cwti7UZ1cUy9e06oW71V803TjoaBo3DhyB0pFaBaM7og2sLW4JXXa3Sm4NmeCE7OJg2sE9ZSc3TSSeoWciDw38FC5LpEtv5%2BToeirlhna1VRkt3Jjs5Js%2BoNHs2fvTZ6kIEDkOgi9tsATu50%2FbIB1avkHYNyfydID5WAKHyWCfexFwHOAcaBqXRZFmyignHKLEyUFRmndAxVxrLoWlXbuXz6BrO9Oku613r4RvDSCgSQQmScPAIjc%2BGu%2F9O%2FoNKYi4SL%2FZNubsPimZqO%2FqYmp1QcyS5ZR7%2FpIXCUTlFUt7qr3SC9v%2FmQ9P3riFcsC642rtw867ILo6UrwaEGFEP5y5S7CiujAG%2FhL0f%2Fu0%2B7tK5iusvoPhj9TwvIMX9RHE0KjASc5l42mXURBt3HYGbw%2BY7V30g7bofNu69zBt2BWIEUQOs9WtHFjHJtLYkOGSoN0pzjsYURzGX0KsZ1e7vPSipZhSpwPBuEu%2F5SLJcNPuKWv8JQM%2BLoywMLDJ2r8GOqUBOwGB55wnfhiq9qWn1JlgPIfgb82WANDC8qbjKrVFDMZak95NrW3SRlrmulytwjsFcI%2FQE8aW968aN8TC01X3qmlfkXHTqUCirLudzU%2FO0Kvn%2Fnq8Demo55KeoMOoW%2BQp6g%2Bez%2BMFHMWSzH%2B1ci53F%2F%2FiXmSNTu48hGZ0zQrFuNdOu12RjQYwPsR8vpdkpdJ%2B9kl6TRy%2BQIcPZof5dHK3EadNmlVK&X-Amz-Signature=e38cf51bc4b27cdeef84e73408639e72097538a7ac3ba50f656f54b57283fe2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNE4OBPA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCV10poE80JqJolrsxs9IdY5GuDdWgeIl%2Bk6bMK3TrHPAIgYjlgYscuExjRIcBojmD4Q0aE%2Fc6wflNCXJGb5pOJmcgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPGbx0Dhim7X5F6iyrcA17HBo7fbMr%2F1Im9YyHKN7kJuJZNDUO%2FZ8dDjNZP20HJoUpgm%2BhXb2Nz%2FXGgeFob9wxaD0mMUZw64pJH2np9qdfhOOZBCdHbRSYMnIxavZMTcake%2B2UQIEiGUwvsDhlz1M%2Bqf2cwti7UZ1cUy9e06oW71V803TjoaBo3DhyB0pFaBaM7og2sLW4JXXa3Sm4NmeCE7OJg2sE9ZSc3TSSeoWciDw38FC5LpEtv5%2BToeirlhna1VRkt3Jjs5Js%2BoNHs2fvTZ6kIEDkOgi9tsATu50%2FbIB1avkHYNyfydID5WAKHyWCfexFwHOAcaBqXRZFmyignHKLEyUFRmndAxVxrLoWlXbuXz6BrO9Oku613r4RvDSCgSQQmScPAIjc%2BGu%2F9O%2FoNKYi4SL%2FZNubsPimZqO%2FqYmp1QcyS5ZR7%2FpIXCUTlFUt7qr3SC9v%2FmQ9P3riFcsC642rtw867ILo6UrwaEGFEP5y5S7CiujAG%2FhL0f%2Fu0%2B7tK5iusvoPhj9TwvIMX9RHE0KjASc5l42mXURBt3HYGbw%2BY7V30g7bofNu69zBt2BWIEUQOs9WtHFjHJtLYkOGSoN0pzjsYURzGX0KsZ1e7vPSipZhSpwPBuEu%2F5SLJcNPuKWv8JQM%2BLoywMLDJ2r8GOqUBOwGB55wnfhiq9qWn1JlgPIfgb82WANDC8qbjKrVFDMZak95NrW3SRlrmulytwjsFcI%2FQE8aW968aN8TC01X3qmlfkXHTqUCirLudzU%2FO0Kvn%2Fnq8Demo55KeoMOoW%2BQp6g%2Bez%2BMFHMWSzH%2B1ci53F%2F%2FiXmSNTu48hGZ0zQrFuNdOu12RjQYwPsR8vpdkpdJ%2B9kl6TRy%2BQIcPZof5dHK3EadNmlVK&X-Amz-Signature=ee831f6fa5db2fe697b753932f36aad25c708a59f2d4540fffa847e49853f2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3DA3CY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkJQgwCysgdIlzLNsoCRbrKdISr8zs1G98TNRhaMzgmAIhAPmN%2BQ%2FhYBwNoj%2FNVr4UgXxEVbGy9F7PyiIpf6rrhiCbKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGZ60hLSW0MThtOlQq3APYhwoWsiHoYQ8LQ7bgZFMsDebEy9pj1Vyvp3pB2flYVuTwtDx4uPGYBH0b72JQkL3FDoAZR7brBYlKxzXgwZQgjGvH523ww2fC2CyIgakLGBEI2OmOD9dnAxEnesGfvMKhc%2FakLvbuCDK%2FxMjM3IYQojcc5v%2FRIgKPQfhlyDoNwUbIZjYXSPKSXvVw1hj3RSl%2F4M6Zt7CuMUo7iRCBIAWRFzERaOZVOh1GW%2FXKTgS1Xbh2bS8hyho3cyYDCoMuCCFoXnliCkv%2B1NMeIrYJ6utc19Y9ZpDbnMf6jv%2BKilFBA%2Ft1I%2FjZ5PTKiWbOY6x2kIdq8lbkZazEnotAa6NfgyUJ7345C0rjWvr4zeDyySmaCVyQhiS%2ByaPCxC74naQHfMdLfibg1ZwiV2J2Ha9ipRPWONeLzJplI8mKYC3HH51XMi3Ms%2FDFbwhYUO48JBGY9N5cCk4uyGMiJaxWkfMAd%2FMBpF3uE%2FsyP0MAhggmcaIrQY83nuJZQILO0L%2BI72VtczJdOa4iX00BfgybVYibS1TQ6HoNph42ALGdd1ndt9gSTJQzBkzsMET1QqYBTxDYax%2BFHksjjlvC0p8tu95f8LZxbauOKxei3V1E%2FqGeXqH47CuXWaKZN9Bg4brx3DC%2Bydq%2FBjqkATLZz32vOWsGe4kOG%2FTV7jtAWhO2mU1eXMDbywI3HpSqAM97ny2pWURQgm%2Biav9RvD4gnfp8TtrASEYSTkeQoa8AeCfqnRQqctv8CMPgp%2BdHXRsghgUqFZEEk7DSR8tHRQgt38YfoutG0biLF%2BjBwBMcPBC05jURb9fpUpuYGbteQvxXpMqxEDxVqqv5VzseD%2Bb4Ae3n950QtEYliJwo8CijgV0D&X-Amz-Signature=c77a2df032415fc160dc766bcbf4bcc82b7c13c0f0db6776171e8734b66d3aec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKX7OW5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDKRAK9j32eSFn5KJwYBujo4SURAmutbBk8LTWhx0KhOAIgWryrUmrBCFhw%2Bu7LoUKUYxG83EVKzAX2%2BN6MyRGXKTsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCeuuEiDq58BP1pcCrcA7FQIthysFL1nlgdt9iI00zoseKu%2F0%2F3zyHYpCgikCQzqYFwoxPz85zIU4%2BsiooI9ztCVZcX0W9orCBdwtwUS6TR6bAJPpiO8iOLWhlFAbRqh7YM5pfHaBlq4GnKy8TuqshKQ6ZZnGt2QQYLCNrRsJPuKzn%2FrHyu9x7A1bNfudSC%2BoFbJ65Pw%2FLE%2Bm6HgWVGv3Nq1qj%2BxqPwVlTdcgyy5oIR%2B2utc0hO1GVQgm3sEgNbtoknp5tL516A4KOT6HP6NlVVVZmy%2FYfjSd4UKsKZO3A1uyum12t7P1q0bEKRfRmuYmsj7bN2ceVWGeANL9rYKc8ElbjNkdoAdcHDqNvq8nQNNUiyginDX6QZfd84Cu5D7cqKfBIZ23A20fNo7mqaXs74Kv%2FWpCZer%2F2TQEqwwlccLQvXrZRy7yyb9WyLO9m1h4cRm62jpZwDTcqh0KFBpt0y4rXlItcj3h%2FfIi74R5DTl%2FGmgJIRipvdp%2BwqVZ7HkZlHRlYDjQl38TchgZ3LGixTykamvhGdG79N%2FQb0g4qf7ZkrrDcNrs2KNaIyRCwLOefFgitANNEMoyrJDGySiWWKLvKv%2F9ASXxOshlpizPhC%2Fx%2BdMowJuIASWJDowyLiUtCSH4AGdjAVIItSMKrJ2r8GOqUBTsTZZ3hPCg0bCCZIzLqbhIee5Cl9AZsbrXJQmL8cCrRq2Zdi6PhAxsVUHfH9QVcdvnROh%2FteDpjEj5m5oaA7QDiEXsyXtEAY86HpMan8EHAnAJyoGUTcX8hvwiJF9fRHltxC07DqD5jlZ93FnKJWQPuh49mSm%2BN4KKmB2M7%2B4qs6vC017lIGSf7wYucpeecDEmKeQmZURGnCUAYf824f8C7Eaobc&X-Amz-Signature=575a0e366d11100b13554504cf0b239f9ce5d865f039122bc72302459bb24928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNE4OBPA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCV10poE80JqJolrsxs9IdY5GuDdWgeIl%2Bk6bMK3TrHPAIgYjlgYscuExjRIcBojmD4Q0aE%2Fc6wflNCXJGb5pOJmcgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPGbx0Dhim7X5F6iyrcA17HBo7fbMr%2F1Im9YyHKN7kJuJZNDUO%2FZ8dDjNZP20HJoUpgm%2BhXb2Nz%2FXGgeFob9wxaD0mMUZw64pJH2np9qdfhOOZBCdHbRSYMnIxavZMTcake%2B2UQIEiGUwvsDhlz1M%2Bqf2cwti7UZ1cUy9e06oW71V803TjoaBo3DhyB0pFaBaM7og2sLW4JXXa3Sm4NmeCE7OJg2sE9ZSc3TSSeoWciDw38FC5LpEtv5%2BToeirlhna1VRkt3Jjs5Js%2BoNHs2fvTZ6kIEDkOgi9tsATu50%2FbIB1avkHYNyfydID5WAKHyWCfexFwHOAcaBqXRZFmyignHKLEyUFRmndAxVxrLoWlXbuXz6BrO9Oku613r4RvDSCgSQQmScPAIjc%2BGu%2F9O%2FoNKYi4SL%2FZNubsPimZqO%2FqYmp1QcyS5ZR7%2FpIXCUTlFUt7qr3SC9v%2FmQ9P3riFcsC642rtw867ILo6UrwaEGFEP5y5S7CiujAG%2FhL0f%2Fu0%2B7tK5iusvoPhj9TwvIMX9RHE0KjASc5l42mXURBt3HYGbw%2BY7V30g7bofNu69zBt2BWIEUQOs9WtHFjHJtLYkOGSoN0pzjsYURzGX0KsZ1e7vPSipZhSpwPBuEu%2F5SLJcNPuKWv8JQM%2BLoywMLDJ2r8GOqUBOwGB55wnfhiq9qWn1JlgPIfgb82WANDC8qbjKrVFDMZak95NrW3SRlrmulytwjsFcI%2FQE8aW968aN8TC01X3qmlfkXHTqUCirLudzU%2FO0Kvn%2Fnq8Demo55KeoMOoW%2BQp6g%2Bez%2BMFHMWSzH%2B1ci53F%2F%2FiXmSNTu48hGZ0zQrFuNdOu12RjQYwPsR8vpdkpdJ%2B9kl6TRy%2BQIcPZof5dHK3EadNmlVK&X-Amz-Signature=1c08d8dd46b20abef45838e9eaf85fae7dcff26bbee8310915e64729e2c0c482&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
