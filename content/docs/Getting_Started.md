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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNXRHM6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICpg8Xn3CN3SvlHbSCjQ%2BWSwSt%2BmYCPIWVXwt7DWKcUEAiEAk6OQi%2Bgyt0%2BzY50ADeWfzx8mSbuguoSDLhfnTeiybiMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQoGFz1nnFtjAg2xircAzBo%2F0c5yMqfurWaXTFKaYCV5gZbc57m4E9rZqciebJOxDW89hBtrcvhDQhpYhCX1Y38ECau65sX%2FA3Ol7V1UYiqHy%2BL%2Fwivkf%2Fonp6nKx4z2p3uYFGGoPLEc778oQLimjgbezd2RoZnPi6CxoxSALdV30RBq04dRcno9j5gm5czrWFwELahS2wO45O8gcZ8vrTzmuVHcXkTWzeHIp74dyjlz3GjBR%2F4Zi6Wm6sccz%2Fbp60ncf1sBPDcUzQdgm1ylGFKty6HDvpE9oe5%2BwxFin3WeVDXclhpGepA5ZYFjSa4%2Fx6Z6KAw%2Bk8a6vM9TDaESxlnGVjKYdPZUH%2F97B2Lwzw6sHUkwPm3niMCNkN12d8rp0CimbG%2BSnyD98DbdwY3g1jt%2FAfJZ5lnmar8dUK663lZ7zR6OriAqkm%2BcETH6uqlLiY3MquDwVyNa3X04tqMLRBFAM9D0EXv7zUc2gHe2nhT09hwsOI3N%2FmBYjDMz%2BesXeaHpkDkCQQSwtu%2FdhuiuP%2FVd4yWnxIyj7g0v3wQR43p1HshD9Jusg9oCPHkKzpcojlqWLSECgyfMrus6hjNKd%2F8Ap%2BknWpTk9nG7mM%2BGvTLDBVxItNYtppbQVYHf9VOicaW6LPan7N4%2BZqeMO%2BdzcAGOqUBZxvGZFoW5ftfCC0AjjJhTUMeSn%2B1DGdzxo3QxoQOjTyA8w2KzpRpKvrOUTELqZS6uqXanQdh9vNpKwTpplnwcqf03npebr02JlkwT8z2FNVUUEHoRcpghEXjqP010zhv4CwGQK9UqpMO%2BN3DU9E7meono%2BKKi6lHvaxaY%2FnolGgZlEfs68hVT3KN%2FyzZ2C2AiOC64GaViVOeQNC2n%2Bd5s8JqcRy%2B&X-Amz-Signature=bbff63b42593ee95a3799134f58f9dcd517ddc29af1ea6beef74d6c2252c68ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNXRHM6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICpg8Xn3CN3SvlHbSCjQ%2BWSwSt%2BmYCPIWVXwt7DWKcUEAiEAk6OQi%2Bgyt0%2BzY50ADeWfzx8mSbuguoSDLhfnTeiybiMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQoGFz1nnFtjAg2xircAzBo%2F0c5yMqfurWaXTFKaYCV5gZbc57m4E9rZqciebJOxDW89hBtrcvhDQhpYhCX1Y38ECau65sX%2FA3Ol7V1UYiqHy%2BL%2Fwivkf%2Fonp6nKx4z2p3uYFGGoPLEc778oQLimjgbezd2RoZnPi6CxoxSALdV30RBq04dRcno9j5gm5czrWFwELahS2wO45O8gcZ8vrTzmuVHcXkTWzeHIp74dyjlz3GjBR%2F4Zi6Wm6sccz%2Fbp60ncf1sBPDcUzQdgm1ylGFKty6HDvpE9oe5%2BwxFin3WeVDXclhpGepA5ZYFjSa4%2Fx6Z6KAw%2Bk8a6vM9TDaESxlnGVjKYdPZUH%2F97B2Lwzw6sHUkwPm3niMCNkN12d8rp0CimbG%2BSnyD98DbdwY3g1jt%2FAfJZ5lnmar8dUK663lZ7zR6OriAqkm%2BcETH6uqlLiY3MquDwVyNa3X04tqMLRBFAM9D0EXv7zUc2gHe2nhT09hwsOI3N%2FmBYjDMz%2BesXeaHpkDkCQQSwtu%2FdhuiuP%2FVd4yWnxIyj7g0v3wQR43p1HshD9Jusg9oCPHkKzpcojlqWLSECgyfMrus6hjNKd%2F8Ap%2BknWpTk9nG7mM%2BGvTLDBVxItNYtppbQVYHf9VOicaW6LPan7N4%2BZqeMO%2BdzcAGOqUBZxvGZFoW5ftfCC0AjjJhTUMeSn%2B1DGdzxo3QxoQOjTyA8w2KzpRpKvrOUTELqZS6uqXanQdh9vNpKwTpplnwcqf03npebr02JlkwT8z2FNVUUEHoRcpghEXjqP010zhv4CwGQK9UqpMO%2BN3DU9E7meono%2BKKi6lHvaxaY%2FnolGgZlEfs68hVT3KN%2FyzZ2C2AiOC64GaViVOeQNC2n%2Bd5s8JqcRy%2B&X-Amz-Signature=7595127b1b25e86e50738be86e3781495fe0fac5b76c9abef4691294c4b67770&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNXRHM6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICpg8Xn3CN3SvlHbSCjQ%2BWSwSt%2BmYCPIWVXwt7DWKcUEAiEAk6OQi%2Bgyt0%2BzY50ADeWfzx8mSbuguoSDLhfnTeiybiMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQoGFz1nnFtjAg2xircAzBo%2F0c5yMqfurWaXTFKaYCV5gZbc57m4E9rZqciebJOxDW89hBtrcvhDQhpYhCX1Y38ECau65sX%2FA3Ol7V1UYiqHy%2BL%2Fwivkf%2Fonp6nKx4z2p3uYFGGoPLEc778oQLimjgbezd2RoZnPi6CxoxSALdV30RBq04dRcno9j5gm5czrWFwELahS2wO45O8gcZ8vrTzmuVHcXkTWzeHIp74dyjlz3GjBR%2F4Zi6Wm6sccz%2Fbp60ncf1sBPDcUzQdgm1ylGFKty6HDvpE9oe5%2BwxFin3WeVDXclhpGepA5ZYFjSa4%2Fx6Z6KAw%2Bk8a6vM9TDaESxlnGVjKYdPZUH%2F97B2Lwzw6sHUkwPm3niMCNkN12d8rp0CimbG%2BSnyD98DbdwY3g1jt%2FAfJZ5lnmar8dUK663lZ7zR6OriAqkm%2BcETH6uqlLiY3MquDwVyNa3X04tqMLRBFAM9D0EXv7zUc2gHe2nhT09hwsOI3N%2FmBYjDMz%2BesXeaHpkDkCQQSwtu%2FdhuiuP%2FVd4yWnxIyj7g0v3wQR43p1HshD9Jusg9oCPHkKzpcojlqWLSECgyfMrus6hjNKd%2F8Ap%2BknWpTk9nG7mM%2BGvTLDBVxItNYtppbQVYHf9VOicaW6LPan7N4%2BZqeMO%2BdzcAGOqUBZxvGZFoW5ftfCC0AjjJhTUMeSn%2B1DGdzxo3QxoQOjTyA8w2KzpRpKvrOUTELqZS6uqXanQdh9vNpKwTpplnwcqf03npebr02JlkwT8z2FNVUUEHoRcpghEXjqP010zhv4CwGQK9UqpMO%2BN3DU9E7meono%2BKKi6lHvaxaY%2FnolGgZlEfs68hVT3KN%2FyzZ2C2AiOC64GaViVOeQNC2n%2Bd5s8JqcRy%2B&X-Amz-Signature=cf4fec5db8f46ef9047c29d7f9dae619d09a4d1025c2bd265e36fad079e6eac5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HANEVQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHgLI0eK%2F3%2B2%2B6X13KVhyoWK3bs1g6cd7QFuuxc14LeKAiEA3iW4EN60zEfXzr2yaYFRu47OPtokZWfJ7KepDsUFkgAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL02qSiK%2Fe4jZOBwkCrcA5GN%2Bi8IbYZ9pD3RMvOyfaHqNBoUUIFbhxsf85Zaxl4wAdc2gLFS6pA3fFLq%2FzTxQ1y3XcdJLqopGIbRhmsMzE1Y847kG9TUy3ECnOjHtiwPJe5yYmG60AgYiIYmAqUOIM4QkxSbp5eVGXtVwbu5taOpOoNPJ%2FkNnRha4MPnCYOlriVEj6ORtcBqffCzog3Ez3S%2FWXLwz3etsSfsTX5A1DKW%2BdVaILnQPuMczvvqVA7QO8%2BmgPD%2B82ViIMqz3pgNyPLBfK%2BI71v9VIgB%2BAgYi3gnLNqeGP24gB%2FdHPiWIbNsLdkeoZ2BZqjBekkvKGyAw32MzFKxba1VZxSSVzlSR6lXA0R4i5kJJfEh1w6t5WnsrNDu3Rg1cOxMfYhVJX23vnRsIOO8FJdgbjNQpdJsUB2Do7sFVzRsUs%2BPd0V8Sb8hTS1BiFVFd5xs3CZwQtoHpYYV%2FOHb10Xv4UzEbFyCp6bjkXItA%2FpKNa4sUhg31hICgTP7Pxe%2BAMs%2FTL2iqpYAUwyUO8votMVFiv%2FdJMqA2dX9M9yoNxsWmsH6TrRTVs4NBVX0NrfBTT0T%2FKZB0ZIb1DC35wWylf95HT6H6XatPngubU1555Tygo1BFXLetChXmfKew1xfZ7Q9B6R1MJaezcAGOqUBtZ0DRkFsv8yD%2F%2F0gmcauSgbcVQJrMWOQia%2BUrDFQ%2FZrbGvlVu2W35wN8Ny0KT08U5hTIRQgmGbs1%2BsnVi5vZoThtV9NflPgzgUWs7DHlvQ%2Fnzq%2B0czItG2b%2F8TzHNkLFjywruIvAkw%2BF7cKB3ceuP1M3pQ%2B3YG1JaJS6YDcNsVLtiMZMkc%2FMmUoaJrRtFLcw9l%2FwvyBfKvzPNbhNAwicmigOZsXt&X-Amz-Signature=8868c6ea4ce7976c18cb4c84742713329e5595e3a7a09da896aeb36f5272b636&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCIFQ62%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDob3%2FAlaQzKlHG6jRYzy1mXdnyIJdF2S5FcUwj1xrgRAiAKsVLe%2BP1AotChNbgBDJCGwP0QIPfXsejdj5%2BSCe5PYyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLujwZok0JrYu92q2KtwDiP5ARCXiAEFAwJvErDVlgNtqzu5ClFXvQ1i2bDTdYq%2B4wAJs0XHO6LGppI0oyN4vADVvVzzmY8kh6S2EfeM%2BgNUk0QR9u33%2BWzha8JJzsyS2ON%2BLvtR%2FA16JU3cKgs20Vnfmk9FktYxQYw0NApXoElO4Kbn47ibc2bxhfVE2nOi20UJQ6xEbWChy%2F2MeZL8s8NFqWXpxN9zh6IA1Rgabi9IFbDEPfYQQ1vuHsHbCN1uK1qxNh0GwFmcoLgnwMYVlKrzNcCtu5TDzRCGTy%2F4rQ3h7i3%2F4P9ICwlKL9vKkyt8UBdimO6Vp1o%2BwdGrLweAZsri7rX2Qax1IxEEztNVs9bSdoDv7E6G8%2BECYrRUUC0iDz1BCLYCV1q%2B8GeIUMd72UJzd%2BZjLq%2Baux29D1q5653pWvU5R6%2BRnSpBg68yCGdyC3D00fR2RfqSdURmB%2Fcogmu2TXU5Y4EnWY4UeJEdiB4kYbs0gAWPLiEKwIdIZt4%2B2Dl%2FB9Ozi3Al1W0lwahQhmPGv2qF6mYZ43ok6oeYszQZsI6DPAoZtlZyTVuNyI4qxKnfAbrfh1t3o1Dp7J5gT1UqLToY0ONQPoYgNT%2BtqTcSAblipi14TRDWVMguji96L3HEkr2qO7QSQyEsw7Z3NwAY6pgG%2F%2F0oNLKGlcYxWDp3cdZxZiBMErxA6z6Q66Vcfvhn43dK7VgsvZ7rq5YHDJ0dk3ghmOiH1buTqgisRE1qxYptvRX3Q2zxKdKJGsCXijhecrOE%2B1iuI%2Fc5f3A5dF3HGg2UqVjOvrW%2FaQFlIu1LR40taTjdeaEN%2F%2FBCjIhorY36sXnKB0NPts3UWPrmfI7mJKOesFTub22dt3NsxnK8qHFxrKZuvs7Dq&X-Amz-Signature=23fe978737f86ea3b2c9bab40899fcc87b84fd513a6ea192ca6354af19b9ac79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNXRHM6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICpg8Xn3CN3SvlHbSCjQ%2BWSwSt%2BmYCPIWVXwt7DWKcUEAiEAk6OQi%2Bgyt0%2BzY50ADeWfzx8mSbuguoSDLhfnTeiybiMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQoGFz1nnFtjAg2xircAzBo%2F0c5yMqfurWaXTFKaYCV5gZbc57m4E9rZqciebJOxDW89hBtrcvhDQhpYhCX1Y38ECau65sX%2FA3Ol7V1UYiqHy%2BL%2Fwivkf%2Fonp6nKx4z2p3uYFGGoPLEc778oQLimjgbezd2RoZnPi6CxoxSALdV30RBq04dRcno9j5gm5czrWFwELahS2wO45O8gcZ8vrTzmuVHcXkTWzeHIp74dyjlz3GjBR%2F4Zi6Wm6sccz%2Fbp60ncf1sBPDcUzQdgm1ylGFKty6HDvpE9oe5%2BwxFin3WeVDXclhpGepA5ZYFjSa4%2Fx6Z6KAw%2Bk8a6vM9TDaESxlnGVjKYdPZUH%2F97B2Lwzw6sHUkwPm3niMCNkN12d8rp0CimbG%2BSnyD98DbdwY3g1jt%2FAfJZ5lnmar8dUK663lZ7zR6OriAqkm%2BcETH6uqlLiY3MquDwVyNa3X04tqMLRBFAM9D0EXv7zUc2gHe2nhT09hwsOI3N%2FmBYjDMz%2BesXeaHpkDkCQQSwtu%2FdhuiuP%2FVd4yWnxIyj7g0v3wQR43p1HshD9Jusg9oCPHkKzpcojlqWLSECgyfMrus6hjNKd%2F8Ap%2BknWpTk9nG7mM%2BGvTLDBVxItNYtppbQVYHf9VOicaW6LPan7N4%2BZqeMO%2BdzcAGOqUBZxvGZFoW5ftfCC0AjjJhTUMeSn%2B1DGdzxo3QxoQOjTyA8w2KzpRpKvrOUTELqZS6uqXanQdh9vNpKwTpplnwcqf03npebr02JlkwT8z2FNVUUEHoRcpghEXjqP010zhv4CwGQK9UqpMO%2BN3DU9E7meono%2BKKi6lHvaxaY%2FnolGgZlEfs68hVT3KN%2FyzZ2C2AiOC64GaViVOeQNC2n%2Bd5s8JqcRy%2B&X-Amz-Signature=d636d17afd3845fb2cbaf0db2eeb92a0c8c33347d9a89d3a94afe99f31d6e646&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
