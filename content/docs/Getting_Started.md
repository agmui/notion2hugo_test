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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3RXWLA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFY4mJvXzXv7kMFZjpWzctV1xjikjbIxAemji8jogprAiEA2r%2BF7b3UNS%2FZ6KRTYQNg5Vp%2Fy94vk23BZ29%2FYlGLsOAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDG9SCuBNwUpStO7r9yrcAzGpJE%2B%2BuDpiQeG7pcB4qrZ2mAST1opFO4id7w6lbJ%2BAtPLepzq0f7bN%2FynK5BJPAwWPq3yYxGxuDtvLvCQ%2F5tNdtOdFrkAYAmNSECOszjrAILinIvAJkrCO7KzP%2Fy8CWUzQvTrGBOsvnJY25MDafpjZFETFG%2BijWzMqhZxmKkcFHf6qJbzuulbmUsXHqG4PF%2FB27lqsFNNwu6GWQbOufwydZNMhMgqt1NUl2FzlvdaEJG15tubY9yhR7AhoRKbQ1%2BwTjs6u11xSbnsUgOr0sjnuPAVbodYSdQOBEFfN4kQkZxhfN2FWlZi490DuGE0U7w3CGc8ouSsJfMNEeO6WK281nRAF7kL5BEcjKrKup9kUkLx14JfFw0p4CX2ZXQKeNokzJcpPnbVv%2F1mHnFwNuxlTe2LwyB9iqhF%2FRRQASkBsUh%2BfNTJiLafR2WngxfTe%2FT0N7YHXsfdoTqxTkxO1zlFgLiABgB9WoyfiRyAFlwKU5mi1xUmkbWSKRMpPnMGkvr1BYszg%2BambI5dQMMlcE4%2FoGsyxVYfmBB3cKkF0dXkb8UqHHbFhTQArE554QaPi0iS0Y6nO9ZtcvO8FzWCv4WoKBeV2m4V%2FxgdApRM%2B8x4PaArQnNfaFMkCdPxSMO2ducQGOqUBB8dSCbwPyTLZTkPA5dp3%2Bwsu5czvUtWpe5YJNH06%2BZAEuyMPEloDVTAxrDm1AC3eZotlgNwxzSGFVHQ%2FzvjjvyM2AEe%2FazG4zkpGGirbNo6MVu8dOUBs1oQH%2FQCfwL1n5faXX0jNFxd0ccBvvMxdgf1vUGad9CJo3VlbCOmetF23%2BUi7JlumKKlZnolsEQc%2B41PdSJDZ1kIAN5h%2B75IsaRf5zBIl&X-Amz-Signature=3e72f96f107e48a33f3f91c5874cbcbad9b503f6ad0f090ca58efb71a91c5cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3RXWLA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFY4mJvXzXv7kMFZjpWzctV1xjikjbIxAemji8jogprAiEA2r%2BF7b3UNS%2FZ6KRTYQNg5Vp%2Fy94vk23BZ29%2FYlGLsOAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDG9SCuBNwUpStO7r9yrcAzGpJE%2B%2BuDpiQeG7pcB4qrZ2mAST1opFO4id7w6lbJ%2BAtPLepzq0f7bN%2FynK5BJPAwWPq3yYxGxuDtvLvCQ%2F5tNdtOdFrkAYAmNSECOszjrAILinIvAJkrCO7KzP%2Fy8CWUzQvTrGBOsvnJY25MDafpjZFETFG%2BijWzMqhZxmKkcFHf6qJbzuulbmUsXHqG4PF%2FB27lqsFNNwu6GWQbOufwydZNMhMgqt1NUl2FzlvdaEJG15tubY9yhR7AhoRKbQ1%2BwTjs6u11xSbnsUgOr0sjnuPAVbodYSdQOBEFfN4kQkZxhfN2FWlZi490DuGE0U7w3CGc8ouSsJfMNEeO6WK281nRAF7kL5BEcjKrKup9kUkLx14JfFw0p4CX2ZXQKeNokzJcpPnbVv%2F1mHnFwNuxlTe2LwyB9iqhF%2FRRQASkBsUh%2BfNTJiLafR2WngxfTe%2FT0N7YHXsfdoTqxTkxO1zlFgLiABgB9WoyfiRyAFlwKU5mi1xUmkbWSKRMpPnMGkvr1BYszg%2BambI5dQMMlcE4%2FoGsyxVYfmBB3cKkF0dXkb8UqHHbFhTQArE554QaPi0iS0Y6nO9ZtcvO8FzWCv4WoKBeV2m4V%2FxgdApRM%2B8x4PaArQnNfaFMkCdPxSMO2ducQGOqUBB8dSCbwPyTLZTkPA5dp3%2Bwsu5czvUtWpe5YJNH06%2BZAEuyMPEloDVTAxrDm1AC3eZotlgNwxzSGFVHQ%2FzvjjvyM2AEe%2FazG4zkpGGirbNo6MVu8dOUBs1oQH%2FQCfwL1n5faXX0jNFxd0ccBvvMxdgf1vUGad9CJo3VlbCOmetF23%2BUi7JlumKKlZnolsEQc%2B41PdSJDZ1kIAN5h%2B75IsaRf5zBIl&X-Amz-Signature=c5c458246134bbeaff544505b811730b46ff68951f25c34072b017e6c76f750e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3RXWLA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFY4mJvXzXv7kMFZjpWzctV1xjikjbIxAemji8jogprAiEA2r%2BF7b3UNS%2FZ6KRTYQNg5Vp%2Fy94vk23BZ29%2FYlGLsOAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDG9SCuBNwUpStO7r9yrcAzGpJE%2B%2BuDpiQeG7pcB4qrZ2mAST1opFO4id7w6lbJ%2BAtPLepzq0f7bN%2FynK5BJPAwWPq3yYxGxuDtvLvCQ%2F5tNdtOdFrkAYAmNSECOszjrAILinIvAJkrCO7KzP%2Fy8CWUzQvTrGBOsvnJY25MDafpjZFETFG%2BijWzMqhZxmKkcFHf6qJbzuulbmUsXHqG4PF%2FB27lqsFNNwu6GWQbOufwydZNMhMgqt1NUl2FzlvdaEJG15tubY9yhR7AhoRKbQ1%2BwTjs6u11xSbnsUgOr0sjnuPAVbodYSdQOBEFfN4kQkZxhfN2FWlZi490DuGE0U7w3CGc8ouSsJfMNEeO6WK281nRAF7kL5BEcjKrKup9kUkLx14JfFw0p4CX2ZXQKeNokzJcpPnbVv%2F1mHnFwNuxlTe2LwyB9iqhF%2FRRQASkBsUh%2BfNTJiLafR2WngxfTe%2FT0N7YHXsfdoTqxTkxO1zlFgLiABgB9WoyfiRyAFlwKU5mi1xUmkbWSKRMpPnMGkvr1BYszg%2BambI5dQMMlcE4%2FoGsyxVYfmBB3cKkF0dXkb8UqHHbFhTQArE554QaPi0iS0Y6nO9ZtcvO8FzWCv4WoKBeV2m4V%2FxgdApRM%2B8x4PaArQnNfaFMkCdPxSMO2ducQGOqUBB8dSCbwPyTLZTkPA5dp3%2Bwsu5czvUtWpe5YJNH06%2BZAEuyMPEloDVTAxrDm1AC3eZotlgNwxzSGFVHQ%2FzvjjvyM2AEe%2FazG4zkpGGirbNo6MVu8dOUBs1oQH%2FQCfwL1n5faXX0jNFxd0ccBvvMxdgf1vUGad9CJo3VlbCOmetF23%2BUi7JlumKKlZnolsEQc%2B41PdSJDZ1kIAN5h%2B75IsaRf5zBIl&X-Amz-Signature=de2084faecb8a6d80b5682682666e83f5b6f70544585359691f51f350625e0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TUBIVX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3RWtHCNhRou0soP%2BYHffUTk%2BucT%2B%2Fi0JwOh%2F3RsqFRAiAOnZsdBhCy144s8Vk9MBi5ZIBlyEOAIuA8fIWQNrHbHir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb9S%2BSB6h5dPpOaZyKtwDvyJUe83iTg04IL4fPJ8%2FhAOrECnBj9q5Ck7TcqE%2FhhNfsLOo15EQdICINZB438uS4BOSvLrPrk1q0ZXlzcEKmSBYaIUprXTF9dIEunM%2Flslqz05rxVSJqn%2FQKcNSXeZ8B94Og84zDxBZ8ZueWP2zVR9wK1Gpqdbna0p%2F5CbqqPHS7qUv2lMFXLkIOYJ3nzIbezst%2FEtcwJmgOiKAwTRhgMkS12ifMVlN64WdIcWTHLlqwIsR7uHAyjCm5DMA2CKkH7uiprFtK1LjoxguGL8hF92Oa9n8v1pk3gfo%2B84GjsF2d3wX399hVok79nZB4TmGiodr8B6ttNCUF5nmCLtAHfE1KOm%2FZoyRuDOroQwGdM2xp64Xv%2B5BsM1rVxGbo5psST90yJC8exm9%2FR8FkgHYRxrI8MAilmxETx0vkKU3HdbJM5Ftvi1VH49BMgu9rCtCjAx3ttOxn7RPvv8afylo8cC2WlemlAzoqJgaO7VY2zp5LSDCsLsq38Fq%2FHYTPvyG%2BlJsc6I8nejJetI8GUewze%2BGikYHoMbVgdZig0YNs3HLQ9BsH9E6efkW%2Fsv5M554FaBIKtPLX%2FGuqZos31k5BDYUNcXXdlo2MO4F9fTb99th%2FULzCSre4Tl7mZowq565xAY6pgEceyz%2BuyGM9VRm6tEzHqcNTIAqL26WP0sCMx0%2BL5fzDpoPFY406Eor0d6wbTfUlphtCFm78fuARj6o5JzCaqxxs%2BZqCR68PG4zB9AJot5LshP6p7%2B%2BVCsb%2Baozg8THSxNDbyUwCHdek3StcJ5PuyX7Bkf%2Fwu3xVo8%2BhK0sLmr0iHtZUsWIa%2FaMjZrKIp4jX5HU5CWauCslSbzpu1fhmLztQlWB2YSB&X-Amz-Signature=fe46bed688fe2569844665fd6a4f74fc5ad1f75946193f1dc21438ffb6edf0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K46PRKU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nGPcZUa3ZF%2FR98V09PDryB3LEMDBAJWCrVd3f5pn2AiA6MdZnG6RrIg%2BKQLAxAylDFjiKsaV3UgDLCk%2BXgen9Tir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM3jJP2rVg%2BC8%2BesRJKtwDX5dmTB%2B6qZejB%2Bb8HvAKoJ39F7kHVP5QtRbWdMm97aiyMfs615stZzRmNPMCylqowvibl32LZO%2B8RSRLRUBUGdX7y7V3xxuQrT2quZ9JvMkyaYaotTKo0WOgErPs6gSuWk5KXFACUJxBNrOzBZN587ruJqJqEEHO5JFH%2FqlXn1cNFawhTo1oWuqihoGwdyjia5L1xtZAD%2BLCfcm8yUeGYP7TEoJ%2FMGTk6PbZPd23VHmOk6KYiNZpCQF96wm0kPTXHbc7UAj%2FS3bhymzrGO%2FuzRX1IhRU5a%2FlxDrbPMpUOvi1o%2B9iiBFG1s0rlMBIWYQUed1mViAGQ2szj6JlSm8sF7VINYNMTBJdtO5P77Y57RdAK1peoopbxYyHX7IwyNHKiUFAoxTee5lPznqqBoanKof82i2VE0AFB%2Be1%2FbRbAwpEwMA19BxT%2FFZIlwHAY7JyGkrChPx3CKpNTUz9ASVc62l8Z88mZggoslr42f8vwgeqHnh%2BD0zfonGH7%2FK1JJ96o3o6tMuTs2I0kIbsyNLCyFPPugBsgRxzaUN%2FKGaazGyfwMw6Q2sO2EseCdBpv84HvI%2F%2F%2FhOgEqIAOPI1HgKbfgkGywztpDfmWJRTSe05nfBbjRgx2lkbhs2SKYkw%2Bp25xAY6pgEF2EUQo5prpEVhhYVPZi5FteU3S%2BJwGdly1IUY0Fza8jPVOAnqNZje7%2BA3xCpbdO5M07EUH8o89wYOWGXZrsOsM87kkUFc9ZhoMlTOdxxvNYtoyH%2BYWbzY5rrLaBJYguQ7UZQAJqFG5a8SVyTLKi5Zto968LVpmKSUSCurKIka8SraoWEKuCgGhX%2F24I2gBhAsyOuzajLlPjEQFbiX3UJ5T3P%2FnArM&X-Amz-Signature=5e8af6e42b95a233f3068a3ad0ac363472bd4666e6ca171e0fe4e140cedcead5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3RXWLA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFY4mJvXzXv7kMFZjpWzctV1xjikjbIxAemji8jogprAiEA2r%2BF7b3UNS%2FZ6KRTYQNg5Vp%2Fy94vk23BZ29%2FYlGLsOAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDG9SCuBNwUpStO7r9yrcAzGpJE%2B%2BuDpiQeG7pcB4qrZ2mAST1opFO4id7w6lbJ%2BAtPLepzq0f7bN%2FynK5BJPAwWPq3yYxGxuDtvLvCQ%2F5tNdtOdFrkAYAmNSECOszjrAILinIvAJkrCO7KzP%2Fy8CWUzQvTrGBOsvnJY25MDafpjZFETFG%2BijWzMqhZxmKkcFHf6qJbzuulbmUsXHqG4PF%2FB27lqsFNNwu6GWQbOufwydZNMhMgqt1NUl2FzlvdaEJG15tubY9yhR7AhoRKbQ1%2BwTjs6u11xSbnsUgOr0sjnuPAVbodYSdQOBEFfN4kQkZxhfN2FWlZi490DuGE0U7w3CGc8ouSsJfMNEeO6WK281nRAF7kL5BEcjKrKup9kUkLx14JfFw0p4CX2ZXQKeNokzJcpPnbVv%2F1mHnFwNuxlTe2LwyB9iqhF%2FRRQASkBsUh%2BfNTJiLafR2WngxfTe%2FT0N7YHXsfdoTqxTkxO1zlFgLiABgB9WoyfiRyAFlwKU5mi1xUmkbWSKRMpPnMGkvr1BYszg%2BambI5dQMMlcE4%2FoGsyxVYfmBB3cKkF0dXkb8UqHHbFhTQArE554QaPi0iS0Y6nO9ZtcvO8FzWCv4WoKBeV2m4V%2FxgdApRM%2B8x4PaArQnNfaFMkCdPxSMO2ducQGOqUBB8dSCbwPyTLZTkPA5dp3%2Bwsu5czvUtWpe5YJNH06%2BZAEuyMPEloDVTAxrDm1AC3eZotlgNwxzSGFVHQ%2FzvjjvyM2AEe%2FazG4zkpGGirbNo6MVu8dOUBs1oQH%2FQCfwL1n5faXX0jNFxd0ccBvvMxdgf1vUGad9CJo3VlbCOmetF23%2BUi7JlumKKlZnolsEQc%2B41PdSJDZ1kIAN5h%2B75IsaRf5zBIl&X-Amz-Signature=26f0a49327e1dcb211a3dd92ce68c05682d125ca672f03f84cdc4c6dc0192854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
