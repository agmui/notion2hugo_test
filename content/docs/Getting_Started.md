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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKPSCOY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVvNu44a88eY%2Bp5qGkXZbwb%2BUuvCx6OZW1TB8A9oTGgIhAIxEW3aZ37%2BEqFhir6Jt23c6UjeTxqv%2FnV0JvivN5RlqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylUjjW65UDb0wETq4q3AOXrE9ZKSazp%2FzQRSj5znmJCb30Tdv5F5fFiDDdRHN%2Fh9Snp2liCcluktjQ96R0f5MKzYUUlLKcjULqwkx58Bl%2FVxVHApDRObupeC2mtiXKhdznS8Ceqnr%2BCJIvnE2cLKEUqRCbWRNC1h9yi%2F7ItBLNO1vibBUFO2IH7TlylXpfOI8rPJU8%2BhW%2F7XMzfdCEmNEIkQ6n%2B8g8R2XqiVWIPa94xxcsGLYbCt2DBfFnDV%2FIJl0UxggWgFfDEJl7ec3Qq1J%2BGkMLJyztTW8wcc4dAoKwSpotBFFakWiL4Gg4HxLrJmlSMVnI2h3fgiLYB2O0rcjCcqEBvRGbxqBdvFRPYOg%2BT34b4csNkjHShPpEocP%2BnzMpewFy4y4U1eCPp6TJg0wAVigMocowKc82PYPPBg8oPXBsvTcpeKkZEGeXv4Xtzb1jjDiaE%2BNsuImgZZ8ENcQEXFfs%2BYJa2AZWdLQFq5MyxCQXqLOsQ%2FtgnlbHJzjxt%2FO3%2BaTjbuoRcWqfaksTVmM6TS2z9i6vD0c59Q0iIfIXHw814L%2BzR3lxBX%2BWc439KGhmUe31me4VQYnWJGjF%2FZU%2BBoW2ts50ypuJTVNgvqXKOXLssijNr2q2e41OPdbXzvMJbYiFIjvqCNkO6DDrh%2By8BjqkARZ7Lok%2BCq%2Bzr40Ea5KSYHHU3nwfT8DMSpmju5kO6016pCWb5iIs3Eiof9hOsPKeCiho5uN7l4HCE3xOirudE%2FcihQO2khiDBK7R%2FmY4TTL%2Fvbj24msxVXysr1PnMraKxR5QbTINMFKyEVsqD%2Fb8UPnMt2H9DklIsqivMmKgmOt3gUylhSXhsAcpSlCYLootV7xqNxGVAp1rFU0fFugqb2wSs4zu&X-Amz-Signature=4f4fab18d95d51099c3a3bf480c04fa08b90bb0dd19b6f609b5500be773210cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKPSCOY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVvNu44a88eY%2Bp5qGkXZbwb%2BUuvCx6OZW1TB8A9oTGgIhAIxEW3aZ37%2BEqFhir6Jt23c6UjeTxqv%2FnV0JvivN5RlqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylUjjW65UDb0wETq4q3AOXrE9ZKSazp%2FzQRSj5znmJCb30Tdv5F5fFiDDdRHN%2Fh9Snp2liCcluktjQ96R0f5MKzYUUlLKcjULqwkx58Bl%2FVxVHApDRObupeC2mtiXKhdznS8Ceqnr%2BCJIvnE2cLKEUqRCbWRNC1h9yi%2F7ItBLNO1vibBUFO2IH7TlylXpfOI8rPJU8%2BhW%2F7XMzfdCEmNEIkQ6n%2B8g8R2XqiVWIPa94xxcsGLYbCt2DBfFnDV%2FIJl0UxggWgFfDEJl7ec3Qq1J%2BGkMLJyztTW8wcc4dAoKwSpotBFFakWiL4Gg4HxLrJmlSMVnI2h3fgiLYB2O0rcjCcqEBvRGbxqBdvFRPYOg%2BT34b4csNkjHShPpEocP%2BnzMpewFy4y4U1eCPp6TJg0wAVigMocowKc82PYPPBg8oPXBsvTcpeKkZEGeXv4Xtzb1jjDiaE%2BNsuImgZZ8ENcQEXFfs%2BYJa2AZWdLQFq5MyxCQXqLOsQ%2FtgnlbHJzjxt%2FO3%2BaTjbuoRcWqfaksTVmM6TS2z9i6vD0c59Q0iIfIXHw814L%2BzR3lxBX%2BWc439KGhmUe31me4VQYnWJGjF%2FZU%2BBoW2ts50ypuJTVNgvqXKOXLssijNr2q2e41OPdbXzvMJbYiFIjvqCNkO6DDrh%2By8BjqkARZ7Lok%2BCq%2Bzr40Ea5KSYHHU3nwfT8DMSpmju5kO6016pCWb5iIs3Eiof9hOsPKeCiho5uN7l4HCE3xOirudE%2FcihQO2khiDBK7R%2FmY4TTL%2Fvbj24msxVXysr1PnMraKxR5QbTINMFKyEVsqD%2Fb8UPnMt2H9DklIsqivMmKgmOt3gUylhSXhsAcpSlCYLootV7xqNxGVAp1rFU0fFugqb2wSs4zu&X-Amz-Signature=21ff5f755bd6c78dbfcd4e984aac9c2e415370366dbb7c6a419bdafafff97efe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVORVP6I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMZT4T8UTlkknoa32Nbm0ZlgEMxdSZmJ3QJov4FoKyRAiB%2FNCyrhL34GrSxtA4aFSEaQREz1freyqEhr075jZepbiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2FR6kI2QMCl1YVRAKtwDRz4v0rkmVpWyai8D2k%2FUV%2FbtQOtRbocyMaWDb5EcTCgohVkeY30Pr%2FKqmk5OcGZwdTfv4%2F945OSTwH2YrFB0ZK1J6g1ajR4i1XrYrvb7DOE9kASFQmp3QRJUvR7HmC%2Fsb%2Bcqu1KV9Zj9kcXHeKToM87x9fENgl%2B1BMa3msETvEsDyH1iykb0fL4hfNQCeBsSVHl40ro%2BOnWK1Dg4BxZ%2Btj%2FM5jW4D3nACk3dpvN%2BOfKlSPWFbUept1mxFoThdMeqWyxgkCeKwJrmuhCNS45e4T%2Bssk%2BYAZgRF%2F4%2BxrelwLSQFHwCMvg5%2BYrej3lubvGHj3AFcbItGoO6v6Ol2gIeXZr6zmQxInZMPztBWyAZ3hjlVual9o0dr51JmorZA5fMfihWJWaNQBvBeesg2GDy9PAjt5IP1XLs0i4Z8DSegis1es354y%2FPrndETL5Ib86ESuC1tMmChgO5lo2k0vCZcxpDBUppWQqPAUbv0K9Qfl80ajDWgKN%2BYIAGDlo9lRuAm2EhX%2FPACzMaEcawAFrertqD57G%2FrBq1TtxjzkvYkxF2WmgFhOhUgvbegmBICttCW5TM3txyqXxCnxtD9tpZixZy%2FLdV25IS%2BglmKcqlM3tTd8hqunoitTOPtxwwj4jsvAY6pgFGQHmVj3oJiqCDMAcsvjJDYhoWRapDADo%2FIeBHJDQmzmzfFSbGDeIuJ%2B1TB1Ool3OYGQpP7VE6pnhsTIxAg6nON2%2BZduLORBPRvYZFM%2F%2BjxRJkKJoEN47yFUUWd0vpN8B3tHXlcPfQ21MgJtm0a7ffolPNNrMRv26Z8jpJehQd6dsWCTZpiZIBoIzAZKrSFiGwcE1GFIXucNbdGXfPD88MF2QJ7cYu&X-Amz-Signature=d945da4bb64148ca9c4320c03b207b32b381480523199202533726b1f21e6c96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWF75CP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC597qwpLOzBvHJ%2BnaeKTbwW%2BW%2BF1%2FXewoCZu2PumHRHQIgVNuvhBla4vncKP0uN5JIznHhxjXnS2%2BRwyXhN5OIwUkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHVe2SPx6blApF7yrcAymFI8XAFA85OOSb1TiEjPugjP5ydoc2gz4CK%2F26qk2bbUgrXpBD0hEjO3eYv9LYcsJzgzD6BmwczfdJ%2Fff5Tl%2FAIwZSmPKCM67b%2B2wdGePI0mSnjKr7ySdlfnlBcZ6HddpgR1a3bzP7owPzq2EtkOHDOSY%2BKpnoRWZaOVkejyOFao5TYU%2BL0YhkNa8AbnMtADcmmL9g5DbnVY8%2BRxR8NuCjvgS3tiZ1BmNrnFF3DJlNejN8nh1GVW%2BeHIjoswCZehr929fHVNtLceCS42m9HuMcke0jSppjoAdyQxekaXyx4zkX%2F1xqIfU%2BvmOs6RygXhQ3XlXIybTnaIqz2QXHXmpaUYst3iaYoJWWtXR6l90kobsYCKmMSDhY4Jx7D5eVsO5wBrpuCvWwko8usOfiyQGyC1esYIBv5prjxWMQECz6cqkVfDyaiO9K7EFOpmYDsGK8NYsY9ZeKpUyCp1QvUa8Lur%2FmOoyQ2vtB%2BOx6zjQKZ2lJJipwLWkNhahx8CdW4ZvUZavFOiudlnMtHTGnFpcPmDXTOz%2B%2BqADWkmket5qwBYc9%2FLe0UFM32ViyRCuU%2FDb4Xd3QOzVhZZfAZSpkuYUbXyZVCjZqaSz3aTvAK96FGjH5II0Ym60d%2BcXGMOiH7LwGOqUBo91e7pDZTvKuGK3IZxRqFSCp5BwbMynVuFY0%2Bb6KG%2FoahomyIrxoM9KS0k8UQDX2%2Fp5FoG4QuELDrNE1OB1axnYrtDkHaLbjbdeWdrVX6iVkHn0ThkF3MtNvnCZB6UlqabhuOTBo1603joRmtCm4R2%2BFPHIgkWqNRQBaQvi%2Fmgnd7nSXmevicHoKLbPwc40Sypg89ktHLUAT4EeJkFbDF3za04YB&X-Amz-Signature=9cd0d3b37de768a31b56ec419c60df4195788508a0d8441018c581a2e625bcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKPSCOY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVvNu44a88eY%2Bp5qGkXZbwb%2BUuvCx6OZW1TB8A9oTGgIhAIxEW3aZ37%2BEqFhir6Jt23c6UjeTxqv%2FnV0JvivN5RlqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylUjjW65UDb0wETq4q3AOXrE9ZKSazp%2FzQRSj5znmJCb30Tdv5F5fFiDDdRHN%2Fh9Snp2liCcluktjQ96R0f5MKzYUUlLKcjULqwkx58Bl%2FVxVHApDRObupeC2mtiXKhdznS8Ceqnr%2BCJIvnE2cLKEUqRCbWRNC1h9yi%2F7ItBLNO1vibBUFO2IH7TlylXpfOI8rPJU8%2BhW%2F7XMzfdCEmNEIkQ6n%2B8g8R2XqiVWIPa94xxcsGLYbCt2DBfFnDV%2FIJl0UxggWgFfDEJl7ec3Qq1J%2BGkMLJyztTW8wcc4dAoKwSpotBFFakWiL4Gg4HxLrJmlSMVnI2h3fgiLYB2O0rcjCcqEBvRGbxqBdvFRPYOg%2BT34b4csNkjHShPpEocP%2BnzMpewFy4y4U1eCPp6TJg0wAVigMocowKc82PYPPBg8oPXBsvTcpeKkZEGeXv4Xtzb1jjDiaE%2BNsuImgZZ8ENcQEXFfs%2BYJa2AZWdLQFq5MyxCQXqLOsQ%2FtgnlbHJzjxt%2FO3%2BaTjbuoRcWqfaksTVmM6TS2z9i6vD0c59Q0iIfIXHw814L%2BzR3lxBX%2BWc439KGhmUe31me4VQYnWJGjF%2FZU%2BBoW2ts50ypuJTVNgvqXKOXLssijNr2q2e41OPdbXzvMJbYiFIjvqCNkO6DDrh%2By8BjqkARZ7Lok%2BCq%2Bzr40Ea5KSYHHU3nwfT8DMSpmju5kO6016pCWb5iIs3Eiof9hOsPKeCiho5uN7l4HCE3xOirudE%2FcihQO2khiDBK7R%2FmY4TTL%2Fvbj24msxVXysr1PnMraKxR5QbTINMFKyEVsqD%2Fb8UPnMt2H9DklIsqivMmKgmOt3gUylhSXhsAcpSlCYLootV7xqNxGVAp1rFU0fFugqb2wSs4zu&X-Amz-Signature=6a512cec7695ef20eefb2fbca3a5eef75831a61ef3f00ed1b6d784fccbcb9e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
