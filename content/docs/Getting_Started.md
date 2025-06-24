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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXFO6N4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDoqPrG1B4KHApFoag1jTmoX0IfjJgoHrgX7cedUtbWCAiAB7%2Fs%2BzIJKyMunF6alcsRbHWQZ8WHH0J2bBHd34rplWir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPLWWS%2F32mVJentyzKtwDhWFOqlOtkhlozRMj2vnWvNN79MUf%2BkDLRG7jvm9gRoh5o0BAnuX10Eb9dK7lPnuKpzmCdqQRhXdfE7onVOLrrzbxmRHLXcCk0%2BVwIAijTUniYuDnpqTU78a%2FmDR63KnzpcvOeFVPpM9OYHHFb9zAjgk8pHyImXB66bLKZ6N%2FJ8y%2BshfxKmsY0SHsxtSPnOfQi8340FHuDjK5gyWAJffZjH%2FgXTiDWH9Str15vFFRqFaouYSgb5sXCyvzkN2mrcFWpwCF%2FIAeoqGFMlhFL%2FMRFMn0mqC9bzeofMBiNhcBDo%2FuEkhpJs3fQK%2F2vVaUpVxzBB%2BS1%2B3XYf1nxdqdSVMCxPhmlZn7t2Z77%2B53egzh8HjCSmfldRnI%2BATzDZ0f8ftZaS9d%2FLQMlKjrDGHXCKZiRubyZeqMkiSg%2F6sqEN19AsBFtuQxrQD%2F1t6pa6HXJgW8hJDGUfLbec1UfnFAPEupZEn2Xz%2ByEuQXN31evs4lS68IJPxy8FCJDG2PV%2FKw%2FenuGPxRyCFp0BGTCWMqCHzorq2c0EDy%2FnGzBGmvzIiesWObigYWZvls34aq%2Bls5lE%2Bv%2FPKD6C37DeWz0Dhp3A0t6%2F2Ezgzl6Tnjfi7E7kg0W9OGBXidcSy%2F3Ia6q%2B0wvbLpwgY6pgF1dn%2FxhfB%2FZdhT3WYlTpV7e2RKm9c3T8cNC8u2jEvmPk2ocxuR%2B%2FRuiIhj4HJVgDmLahnmlVBKVQMgQtHFo9S6E4N2PoN4iQyJNuUkWq7%2BF7dso6PJA9ohml%2FKSVlSX05UIL2yvzV%2BoElqo608lQVi6CLSmB%2FeEZaFdLQEtR6VUYyfb7twYUbVFTaEhQw5fDnpm19N2TlkX2EivoMkOXZAhcOeimq0&X-Amz-Signature=2a156d8709ca3b8514615e82cacd6fd10e53304b2b62648be4fd7d1850b34026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXFO6N4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDoqPrG1B4KHApFoag1jTmoX0IfjJgoHrgX7cedUtbWCAiAB7%2Fs%2BzIJKyMunF6alcsRbHWQZ8WHH0J2bBHd34rplWir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPLWWS%2F32mVJentyzKtwDhWFOqlOtkhlozRMj2vnWvNN79MUf%2BkDLRG7jvm9gRoh5o0BAnuX10Eb9dK7lPnuKpzmCdqQRhXdfE7onVOLrrzbxmRHLXcCk0%2BVwIAijTUniYuDnpqTU78a%2FmDR63KnzpcvOeFVPpM9OYHHFb9zAjgk8pHyImXB66bLKZ6N%2FJ8y%2BshfxKmsY0SHsxtSPnOfQi8340FHuDjK5gyWAJffZjH%2FgXTiDWH9Str15vFFRqFaouYSgb5sXCyvzkN2mrcFWpwCF%2FIAeoqGFMlhFL%2FMRFMn0mqC9bzeofMBiNhcBDo%2FuEkhpJs3fQK%2F2vVaUpVxzBB%2BS1%2B3XYf1nxdqdSVMCxPhmlZn7t2Z77%2B53egzh8HjCSmfldRnI%2BATzDZ0f8ftZaS9d%2FLQMlKjrDGHXCKZiRubyZeqMkiSg%2F6sqEN19AsBFtuQxrQD%2F1t6pa6HXJgW8hJDGUfLbec1UfnFAPEupZEn2Xz%2ByEuQXN31evs4lS68IJPxy8FCJDG2PV%2FKw%2FenuGPxRyCFp0BGTCWMqCHzorq2c0EDy%2FnGzBGmvzIiesWObigYWZvls34aq%2Bls5lE%2Bv%2FPKD6C37DeWz0Dhp3A0t6%2F2Ezgzl6Tnjfi7E7kg0W9OGBXidcSy%2F3Ia6q%2B0wvbLpwgY6pgF1dn%2FxhfB%2FZdhT3WYlTpV7e2RKm9c3T8cNC8u2jEvmPk2ocxuR%2B%2FRuiIhj4HJVgDmLahnmlVBKVQMgQtHFo9S6E4N2PoN4iQyJNuUkWq7%2BF7dso6PJA9ohml%2FKSVlSX05UIL2yvzV%2BoElqo608lQVi6CLSmB%2FeEZaFdLQEtR6VUYyfb7twYUbVFTaEhQw5fDnpm19N2TlkX2EivoMkOXZAhcOeimq0&X-Amz-Signature=91b477ad0013659ceeba9931cdcbb90ca7797f38a75fdf2983fca3011dbb9dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXFO6N4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDoqPrG1B4KHApFoag1jTmoX0IfjJgoHrgX7cedUtbWCAiAB7%2Fs%2BzIJKyMunF6alcsRbHWQZ8WHH0J2bBHd34rplWir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPLWWS%2F32mVJentyzKtwDhWFOqlOtkhlozRMj2vnWvNN79MUf%2BkDLRG7jvm9gRoh5o0BAnuX10Eb9dK7lPnuKpzmCdqQRhXdfE7onVOLrrzbxmRHLXcCk0%2BVwIAijTUniYuDnpqTU78a%2FmDR63KnzpcvOeFVPpM9OYHHFb9zAjgk8pHyImXB66bLKZ6N%2FJ8y%2BshfxKmsY0SHsxtSPnOfQi8340FHuDjK5gyWAJffZjH%2FgXTiDWH9Str15vFFRqFaouYSgb5sXCyvzkN2mrcFWpwCF%2FIAeoqGFMlhFL%2FMRFMn0mqC9bzeofMBiNhcBDo%2FuEkhpJs3fQK%2F2vVaUpVxzBB%2BS1%2B3XYf1nxdqdSVMCxPhmlZn7t2Z77%2B53egzh8HjCSmfldRnI%2BATzDZ0f8ftZaS9d%2FLQMlKjrDGHXCKZiRubyZeqMkiSg%2F6sqEN19AsBFtuQxrQD%2F1t6pa6HXJgW8hJDGUfLbec1UfnFAPEupZEn2Xz%2ByEuQXN31evs4lS68IJPxy8FCJDG2PV%2FKw%2FenuGPxRyCFp0BGTCWMqCHzorq2c0EDy%2FnGzBGmvzIiesWObigYWZvls34aq%2Bls5lE%2Bv%2FPKD6C37DeWz0Dhp3A0t6%2F2Ezgzl6Tnjfi7E7kg0W9OGBXidcSy%2F3Ia6q%2B0wvbLpwgY6pgF1dn%2FxhfB%2FZdhT3WYlTpV7e2RKm9c3T8cNC8u2jEvmPk2ocxuR%2B%2FRuiIhj4HJVgDmLahnmlVBKVQMgQtHFo9S6E4N2PoN4iQyJNuUkWq7%2BF7dso6PJA9ohml%2FKSVlSX05UIL2yvzV%2BoElqo608lQVi6CLSmB%2FeEZaFdLQEtR6VUYyfb7twYUbVFTaEhQw5fDnpm19N2TlkX2EivoMkOXZAhcOeimq0&X-Amz-Signature=c0279285d2dfabce4044ee715db568dcaa552321dfa9f08818cbb2a27c3d7e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSFD235%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHEoIeEpQIw7GTDz4%2Bwj6wXHaQFVZd1aFQBdxomYu%2BPDAiBLNdpQQ0YkAxRlpO6sXuMuxA9Hv1byA%2BakT3MsHAcVmyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM7FcdNPcggJ33wxpTKtwD1A7PpFN1bUrkj2SAs140BJRhSHYUTbBSpVhZnbup65tYFBQSP6yVFK6rglhpLZS0xk0fjppSqI5rbiyzp41SAEqUPAnsZiNceSPwxlNa2FtD%2FU3VHL8Oxyk4v%2BX%2FS4VWlqlv60XEoTWNZV5ytIVpuFMQO6jVoeLqSZHeyyXcWeW6JZWtJCBSO9jsZYfbdBsyNMT2PWI9NWOHWpTXParjCpN22B3Ohd3yPCRYH9WQKV9BRV0UUsiiUZ6fE0PGAzhv1%2FHTThMlYNEBl2vZBbOvBHVvQ3YfJ6oxcxz4y8S4G1adDZJCCYC9hXFMftoqdIW%2F2T3vKnB6Crhnsxc2HqgsmonvxhUMLVarijTDH3ASQzLWCGUfeg9BbTzme6lDCdfmise%2Fm9op8vjlo8GgNBfFYPuy3gBoVk0GhIzoxAlw1hsCRsHfckbypZAq2FBit1RXRuWrMT%2FukfvEPr9UY3Fr8ZJ2RrjVUvyYrXWtQSBgWi0a2ZtfjDFNJbwvalVBV98fRaLfpozhnfOHCwBiIWdPG9CX2HsRGxh2VtLRjrsmCj4lmgHbk87LXfryfH38UQ8nRk0QykxtWv%2BEGVvjmCtCB1EylMpZv98kT3XAcHLyNJvXIKBkArLAHED4Rm4wkrLpwgY6pgGKAPbVKOEDIsrMHww%2FAMxSQOT0NYy89fdmZAdPVjH%2BnV0Eb3eO1hRGkHubECotlF%2FYWrlZB2kcgU62q1J2V1AijorOu2%2BXSGJd%2F1bAs2lDKpWZGFpg3JEmYE12%2Byt%2FQROQr%2Fvzv37qRGA5StXJm%2FYrq6xnXVNX6iczWqVeEaFt3q7Ap5jB5KJOxKl7kT8GP0AaJy9W93AubVpv2uh0wPOgketZ7UJn&X-Amz-Signature=90f16db9841d69a995870a99d5c2b0a5931edc0aeee18d545d1d2ec4cda39878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7RJVQS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFAjNZIL2mvgLFK6uBuyWaKSFgu9S2t2Cp1PqZr7n1CEAiEAiRibzECNEw9DSMJ9mRj6u2ijwEebjwfX831Hl1tPrVkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAkqNnZ1I%2B%2BAilE7hircAx7eVDelww0KXwKflggF0UZsEVWWLA1MWKVlz5cX%2FgWCBsf33xliJDHQKMSroMbxOhYqsVNmplesl5WhMifeZbMsOBgrKGVOndmZzZ3UwbkloRFG0sSasARMJuAuBUZEaEP6oBYQ7KvM8y8j%2BUV2VOYomR6ELSy2vv14zkefWmL8ZNmIxs80tTu7md9XdvFv7DUYhmhaoNFv5Jlg6Qn9EEwiJzAZyX5dMko5R1Or4uVasKIpqwNPLlhz2m1z1YcDtVDt%2BMh79Wdu2X%2B5ECE68Zmi2%2ButZj38jnBmXcT%2Fz427lFJjxaVeCMv8ET%2FGRcy09Rdd133HbBnwEs6Cnyycfm5bqRuEOK9ZYojnWSrEcCa7lL90r%2FwbEseY9ub6lix3Rc%2F5iQmdLvh8d5HRPcgrggrtUWUYUDZguL%2FCNkv6oCRbrWQx1yJo%2BWIE10hArpH6qSl4Ka5y%2FET4eGXzuu9AC8o8geA2zQBSWwwJzeH8fQZi4LGNjVA%2FchY2oEpDNDNePGBF3mQBIHfcKcyvCujXwV0K8EFA2eCGRLuiCUQPeDvPxhIUIrCt6f8sggsx0Lc0G9b7MPkU6pSyuecWUeA4NcubEus06nOGT1wuy0nDWOAitwV3m7p5Z9ACx1p9MMiy6cIGOqUBm%2BHX%2F7bX9rNuad7o0U0S1bTPVLDO%2BV0m24aYIucrYt3EddHjp9XjSFHBnaQN%2Fk4KV9SH%2ByiE%2F0snZ1aZ2rEkfhjoDLZlK4UFmm0p2tEPrQH8L9qW86uv9NVN%2FNTFenwUjZp40wElO9BCZAV5vI4LWLmdHX1Xwiba4odPH2aZB0p02fzZWdOBdN6cK%2B9ATaEhhR8nGh5xmYZ8w39G35%2BwewCPonEf&X-Amz-Signature=2e009b2f7ef74254f3674aed927ee53d0030fca45273346fa62e4e34179af84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXFO6N4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDoqPrG1B4KHApFoag1jTmoX0IfjJgoHrgX7cedUtbWCAiAB7%2Fs%2BzIJKyMunF6alcsRbHWQZ8WHH0J2bBHd34rplWir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPLWWS%2F32mVJentyzKtwDhWFOqlOtkhlozRMj2vnWvNN79MUf%2BkDLRG7jvm9gRoh5o0BAnuX10Eb9dK7lPnuKpzmCdqQRhXdfE7onVOLrrzbxmRHLXcCk0%2BVwIAijTUniYuDnpqTU78a%2FmDR63KnzpcvOeFVPpM9OYHHFb9zAjgk8pHyImXB66bLKZ6N%2FJ8y%2BshfxKmsY0SHsxtSPnOfQi8340FHuDjK5gyWAJffZjH%2FgXTiDWH9Str15vFFRqFaouYSgb5sXCyvzkN2mrcFWpwCF%2FIAeoqGFMlhFL%2FMRFMn0mqC9bzeofMBiNhcBDo%2FuEkhpJs3fQK%2F2vVaUpVxzBB%2BS1%2B3XYf1nxdqdSVMCxPhmlZn7t2Z77%2B53egzh8HjCSmfldRnI%2BATzDZ0f8ftZaS9d%2FLQMlKjrDGHXCKZiRubyZeqMkiSg%2F6sqEN19AsBFtuQxrQD%2F1t6pa6HXJgW8hJDGUfLbec1UfnFAPEupZEn2Xz%2ByEuQXN31evs4lS68IJPxy8FCJDG2PV%2FKw%2FenuGPxRyCFp0BGTCWMqCHzorq2c0EDy%2FnGzBGmvzIiesWObigYWZvls34aq%2Bls5lE%2Bv%2FPKD6C37DeWz0Dhp3A0t6%2F2Ezgzl6Tnjfi7E7kg0W9OGBXidcSy%2F3Ia6q%2B0wvbLpwgY6pgF1dn%2FxhfB%2FZdhT3WYlTpV7e2RKm9c3T8cNC8u2jEvmPk2ocxuR%2B%2FRuiIhj4HJVgDmLahnmlVBKVQMgQtHFo9S6E4N2PoN4iQyJNuUkWq7%2BF7dso6PJA9ohml%2FKSVlSX05UIL2yvzV%2BoElqo608lQVi6CLSmB%2FeEZaFdLQEtR6VUYyfb7twYUbVFTaEhQw5fDnpm19N2TlkX2EivoMkOXZAhcOeimq0&X-Amz-Signature=b119d241a8698eea1322e30675d8063f3e82c2a5c25508aae0d4ba4b3c134eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
