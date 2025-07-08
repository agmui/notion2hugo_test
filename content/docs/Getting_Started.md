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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWCRXTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC6fnO1LLE0lI5RDEtvpn1mdG92ISDdW55F7V7HVbPktwIgSkMfkP4G%2BbLD3fIYPA5oUNyKBWuiZzr5VGy27RJmqj0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIckL50uFcA9Ae%2BSZSrcA5XsfkaSsCYSdh1xzG%2B48rEkpTPTCoILGji2tR3qNPmOOX0bTBjtGiJ%2BWA9VE3wl3HZKP%2By4qYAWHygLDQO54kYLiBcgAta8xqWmuIoDGnSB4aV9Acw%2BUuRJzoaUNKoKaUPsDIQ%2BQszIgkHnbbP4J52b57WanpXAO9SmgryidEqEdpl%2Bjd6ujYyM2pyUH5LCWQCW0MZ50bxE0fHnZEArQCML9CE8%2BExnc%2FrSJQr%2FISqo0Hyjy11R6pwdR%2B7ivcOEmlAC6%2FsvJ%2F1dZ3CiXhrIZSvqznjytbJwGog4bxznzkkDAz4IvnxSZY5NX4QCH%2F96%2BXEjoWpCexhxsU59wnQt21w1vluoDNNhg3sPVSR6BRhwU14GK5Mat3FDcybPj%2B%2FozEGLJbu59iEkwZUN%2BTQGz0r1JH%2FB9vdm8paG1BvcToWukmmwpy%2FFeh%2FE%2B6jTD2MD8hKu6b8n4GbEo3ZHuhabrCOqI871%2F%2B6RWkQt9LtCTcG4Q%2F5uk6q%2FpgFoG0Dfb88KHkJsP4IAugYuYyZmtrQKlKVq2I97kZXSspiBZLTlSwrg5lEWPFiMwABYoNZ5jJqYOKELFGhnaQEw1OKiLie78mldDd1Pmo1uEft7i6%2BZfvjPDHxHCr0vpzws%2FxTvMOuEssMGOqUB7ImFKzpbIZVEngA27uBAxMQ1Gk0zRsaTHw0v3eBXW6bE%2BGwlL2d630r0ttYVmJI0lUnY1aunp3WoP1GvcVj2jIqd5pdCNaW3T%2F8HHrKiW%2FBZk8T1zPIlNKmN486XaUbfhg4rask%2BJ13Gk6I9Izm%2FyzC8%2Bg%2BnOqC7Qda742I9XZz2CnAHzTN7G04QPZjPyeoH2gDArZNS1La07C%2FgQrBbfkKYltgJ&X-Amz-Signature=7b08a71bf6586efa980d22cbe904f7889e4f4c17b5053c50bd9382bced476aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWCRXTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC6fnO1LLE0lI5RDEtvpn1mdG92ISDdW55F7V7HVbPktwIgSkMfkP4G%2BbLD3fIYPA5oUNyKBWuiZzr5VGy27RJmqj0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIckL50uFcA9Ae%2BSZSrcA5XsfkaSsCYSdh1xzG%2B48rEkpTPTCoILGji2tR3qNPmOOX0bTBjtGiJ%2BWA9VE3wl3HZKP%2By4qYAWHygLDQO54kYLiBcgAta8xqWmuIoDGnSB4aV9Acw%2BUuRJzoaUNKoKaUPsDIQ%2BQszIgkHnbbP4J52b57WanpXAO9SmgryidEqEdpl%2Bjd6ujYyM2pyUH5LCWQCW0MZ50bxE0fHnZEArQCML9CE8%2BExnc%2FrSJQr%2FISqo0Hyjy11R6pwdR%2B7ivcOEmlAC6%2FsvJ%2F1dZ3CiXhrIZSvqznjytbJwGog4bxznzkkDAz4IvnxSZY5NX4QCH%2F96%2BXEjoWpCexhxsU59wnQt21w1vluoDNNhg3sPVSR6BRhwU14GK5Mat3FDcybPj%2B%2FozEGLJbu59iEkwZUN%2BTQGz0r1JH%2FB9vdm8paG1BvcToWukmmwpy%2FFeh%2FE%2B6jTD2MD8hKu6b8n4GbEo3ZHuhabrCOqI871%2F%2B6RWkQt9LtCTcG4Q%2F5uk6q%2FpgFoG0Dfb88KHkJsP4IAugYuYyZmtrQKlKVq2I97kZXSspiBZLTlSwrg5lEWPFiMwABYoNZ5jJqYOKELFGhnaQEw1OKiLie78mldDd1Pmo1uEft7i6%2BZfvjPDHxHCr0vpzws%2FxTvMOuEssMGOqUB7ImFKzpbIZVEngA27uBAxMQ1Gk0zRsaTHw0v3eBXW6bE%2BGwlL2d630r0ttYVmJI0lUnY1aunp3WoP1GvcVj2jIqd5pdCNaW3T%2F8HHrKiW%2FBZk8T1zPIlNKmN486XaUbfhg4rask%2BJ13Gk6I9Izm%2FyzC8%2Bg%2BnOqC7Qda742I9XZz2CnAHzTN7G04QPZjPyeoH2gDArZNS1La07C%2FgQrBbfkKYltgJ&X-Amz-Signature=dbeff8fb2fbdc6e506514e16ca87d64f95bae8794c9ee7f7cf5c29ab73eaa676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWCRXTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC6fnO1LLE0lI5RDEtvpn1mdG92ISDdW55F7V7HVbPktwIgSkMfkP4G%2BbLD3fIYPA5oUNyKBWuiZzr5VGy27RJmqj0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIckL50uFcA9Ae%2BSZSrcA5XsfkaSsCYSdh1xzG%2B48rEkpTPTCoILGji2tR3qNPmOOX0bTBjtGiJ%2BWA9VE3wl3HZKP%2By4qYAWHygLDQO54kYLiBcgAta8xqWmuIoDGnSB4aV9Acw%2BUuRJzoaUNKoKaUPsDIQ%2BQszIgkHnbbP4J52b57WanpXAO9SmgryidEqEdpl%2Bjd6ujYyM2pyUH5LCWQCW0MZ50bxE0fHnZEArQCML9CE8%2BExnc%2FrSJQr%2FISqo0Hyjy11R6pwdR%2B7ivcOEmlAC6%2FsvJ%2F1dZ3CiXhrIZSvqznjytbJwGog4bxznzkkDAz4IvnxSZY5NX4QCH%2F96%2BXEjoWpCexhxsU59wnQt21w1vluoDNNhg3sPVSR6BRhwU14GK5Mat3FDcybPj%2B%2FozEGLJbu59iEkwZUN%2BTQGz0r1JH%2FB9vdm8paG1BvcToWukmmwpy%2FFeh%2FE%2B6jTD2MD8hKu6b8n4GbEo3ZHuhabrCOqI871%2F%2B6RWkQt9LtCTcG4Q%2F5uk6q%2FpgFoG0Dfb88KHkJsP4IAugYuYyZmtrQKlKVq2I97kZXSspiBZLTlSwrg5lEWPFiMwABYoNZ5jJqYOKELFGhnaQEw1OKiLie78mldDd1Pmo1uEft7i6%2BZfvjPDHxHCr0vpzws%2FxTvMOuEssMGOqUB7ImFKzpbIZVEngA27uBAxMQ1Gk0zRsaTHw0v3eBXW6bE%2BGwlL2d630r0ttYVmJI0lUnY1aunp3WoP1GvcVj2jIqd5pdCNaW3T%2F8HHrKiW%2FBZk8T1zPIlNKmN486XaUbfhg4rask%2BJ13Gk6I9Izm%2FyzC8%2Bg%2BnOqC7Qda742I9XZz2CnAHzTN7G04QPZjPyeoH2gDArZNS1La07C%2FgQrBbfkKYltgJ&X-Amz-Signature=cb3c5006e26854ad3c592e8f7604a70248d7d92afa5030ea20bbecff44801edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CIXNJS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCzF5qRlxSrjEBMsTPSybZMSNMOaKyIYkis8hQhOs2BEAIgYJWO1JzPdBUZpbmBS%2BKAa7RZIPpZQLSSKr2R7uM0MGAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpxxoT%2FTsKzoK5%2BYSrcA2awB6WpY793bHkWANURencIL5iIO6faBnofjnqchbW8YWenGDcv6ZNQ7ov5egLsYrd%2BaSoaZr%2ByBeBhhvtbLSHXWWukRXgu7mmJI0kdgrHcO0d5ZI9GJC4YhaBqfw17SjO0urVMJg%2FjUBDZLTSsYtTYR6xVsZqAsZDtgK3aFyl48KwdLhVVwZnsvqUuyDRrZhp1UADScYshLJJagtX46rfJFIdxAgR0hrU%2F1NGCF17MzneVJdfuNGUTwQGiZUP%2BTfYPtmWZcdK4xn8JecVw8XVOb5F1X8YLCchY1ICt2qWrbA9U3712QmwPUy9T4eqRq8M0EgB92BLmF%2FNzUZ44sdVNJRYgEcUTv7m%2FKG1cIrVHy8aBzpCmQaNW6EJHM2Fm0xFSYNnznQgInS8lvKtdhIAU31Sv9RcmuvWzEzyqFm4%2BgkXGG8Uw89ea9v6KSW%2BZV6mRRu2OvXhC6ASJ32iXvknZ%2F4OwSXLvfILeFAI6ux%2FRJBzBvMwoyiAbygXmW%2BtszuDdd6RsO7is%2FVZb3NG0hD9aiA%2FHZ6qPugzFukCcH96QD1TkhR8bTENWK1DRHfs9EPX7nLUV686iqtGF4G%2FTq5lTclxAlPQeHIV4ewun1UBJ2d5jiNnuUmLmXlCcMIaEssMGOqUB84xxO4IAjh%2BuHXrykk82TI4kLcCP11%2FTc7VQvPgkj1RhBEuqbPpGJ4bZnEcMITbDKCBY5l%2Bk3M%2Fvqqinlt0M6NTM0phlbjrHv0oRDHNhI%2BA3kELCjGijujE9CNN33Dzz3AqcdwWZZMAC1xc57FY44NEXG6Z54oBISILjEpRDtLVq9%2BGPVLpyXDentkf2e1nO5rAjWsRG8hpsHgCkAsPLdBx%2Ffnsh&X-Amz-Signature=5a6f705fcad7119d49fa7d0b2c0bdc0654b5c3adae9afac087c95f7f07e7a50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22T6FQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjWEoSwy4chRzdQVIyuTR678z3osmS1xAixpaf74wWVAIgH6YCrj%2BSQ%2FVyDbYPCpR%2FEELfG5oTRIfCQD6FTf3w%2BWYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FEstd7IbSgB5wMhCrcA37vvqra9zsX0pUmotgzlgJbhUNKlAqMfBdIXIWWjCPW3NP1DOEccJy8Dz5jWFyv9j0cnVvP8ee4x5ZC3fk6bXbYocV5V4BznopEw0K9xE7IVrW3K4ZHm5BnTF03dQqVtZrsHjdxyj4NBoZRPnjFx9UwsgDB0YJmTJvEP0bFUh%2FogCyYZGADCLQzxgYDSgPCUaXi%2Buj7C3B%2Ft7J1T6qEHyZrVl4HcPnbEZ12LelzXbEaUCzs55nxF0jKDtXRLWyu2M%2B7%2FFBezocdQ9PASTSP%2F9w0dLleuxIbiKopb8a8deZzDu%2FfvwJrRWQ9%2BuKC8VX7MKvlgLTcwEkh0xYFe0b7%2B2VjSOlNAtlTIMpIE9jFhISQwDXh6E55%2FFfgFApl%2F8A6ztsJmJN%2BzF5QTQkBqt55jPeM1lTQfHUPx1jMBKBPCi3cqIADrrWqnljeCSFe1KmPVpBFcQa5U4HCEEdGyQdDAa4PMz%2FaG%2FQYOvFgXxiElH5T4L39EkHHxzeQXVA%2BEkwk%2BtmOWWSSzt0Oz%2BMRIhwUTkqcSnfZIu5k%2FVAZx4J89S7JyUOIxYmfhD8OmX89mTD4rZ2qmg4oQx%2BKXYA85ImmqoaHU%2F0B4pylul3x5HXiFz4fPCYS4gzPlF%2BitegHMM%2BEssMGOqUByyGsSRf7VkHO5kC9Uy0aQv2i%2Fz1p6bzjKK%2F6HgDwmzKV%2BX%2BJzX64JAJ0iHEiCKbPfuLU%2Bo7C38DTpxOBwvphBBgKAsAVVY3oWzPdi2QM8%2BYX7U4mQQOin72%2BhLtmcjstCIzoT8jc%2B16xgptinVdvNNtJ9X7V7TdVy3VI16kjg%2BGjvBKQsFK7%2FVDJ5bAnpD5rFMPZi%2Fu%2FohxMvtVNrTtBvnCrgP6o&X-Amz-Signature=e945e00afac8e450be0d0ce88e2611e4cd69d0754189a4f7506aeffadf188d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWCRXTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC6fnO1LLE0lI5RDEtvpn1mdG92ISDdW55F7V7HVbPktwIgSkMfkP4G%2BbLD3fIYPA5oUNyKBWuiZzr5VGy27RJmqj0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIckL50uFcA9Ae%2BSZSrcA5XsfkaSsCYSdh1xzG%2B48rEkpTPTCoILGji2tR3qNPmOOX0bTBjtGiJ%2BWA9VE3wl3HZKP%2By4qYAWHygLDQO54kYLiBcgAta8xqWmuIoDGnSB4aV9Acw%2BUuRJzoaUNKoKaUPsDIQ%2BQszIgkHnbbP4J52b57WanpXAO9SmgryidEqEdpl%2Bjd6ujYyM2pyUH5LCWQCW0MZ50bxE0fHnZEArQCML9CE8%2BExnc%2FrSJQr%2FISqo0Hyjy11R6pwdR%2B7ivcOEmlAC6%2FsvJ%2F1dZ3CiXhrIZSvqznjytbJwGog4bxznzkkDAz4IvnxSZY5NX4QCH%2F96%2BXEjoWpCexhxsU59wnQt21w1vluoDNNhg3sPVSR6BRhwU14GK5Mat3FDcybPj%2B%2FozEGLJbu59iEkwZUN%2BTQGz0r1JH%2FB9vdm8paG1BvcToWukmmwpy%2FFeh%2FE%2B6jTD2MD8hKu6b8n4GbEo3ZHuhabrCOqI871%2F%2B6RWkQt9LtCTcG4Q%2F5uk6q%2FpgFoG0Dfb88KHkJsP4IAugYuYyZmtrQKlKVq2I97kZXSspiBZLTlSwrg5lEWPFiMwABYoNZ5jJqYOKELFGhnaQEw1OKiLie78mldDd1Pmo1uEft7i6%2BZfvjPDHxHCr0vpzws%2FxTvMOuEssMGOqUB7ImFKzpbIZVEngA27uBAxMQ1Gk0zRsaTHw0v3eBXW6bE%2BGwlL2d630r0ttYVmJI0lUnY1aunp3WoP1GvcVj2jIqd5pdCNaW3T%2F8HHrKiW%2FBZk8T1zPIlNKmN486XaUbfhg4rask%2BJ13Gk6I9Izm%2FyzC8%2Bg%2BnOqC7Qda742I9XZz2CnAHzTN7G04QPZjPyeoH2gDArZNS1La07C%2FgQrBbfkKYltgJ&X-Amz-Signature=49828624ecf9662d0e324fb1d5ee6281e3227786226a9530515fa0111d3d7c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
