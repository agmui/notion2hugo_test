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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIRTGY3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt%2BGD2KNfhcJT9lcvj8O%2BW3bfM5iHSKMcwl7bmPUjGgAiEA6E7gvchmV2uaTVqxqOa3O7mQlhMC6cZGx11x%2FPn357gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc65Qa19TgFM1Qj6SrcAwLHbaOKy6wtrokxN3GrjsCFxvDu3cU3fNyXgJS85ynCNPcBVCBQoIyzst7NR3cRMaPqJQsqLbnnkGBp5rPgFdsH2pR3NULk3hSdsdsa36yJpCjaiKVQQ%2FRLKd%2BbXkOkHpgodv8%2FFIUZnZ%2BVxh6MTsplBnvW8ARpqTbpRSe2C7GaZBrx6QMua0O7bDm%2FYA1FfSqr0mxwCPBHUBlowf%2BMG2PKrHlZ%2Bjp2d4uuPn0em%2BYOZVSfUPVPbgurQtJANYn3EXvluTIuLfF0a4P4lAYm%2Bo4ch%2FWQC7s4NeBngmeO0oRBkpRIsdZFwAJX1%2F5Vy%2FPjrTBo0R0vxrVv33OQLp3L4XDUSiau1M3%2F6M%2F%2FTVnWJrJWOtbIC45o0ziGZcKU1xetk9XxLaiKnFs0SyKrRrYBexFBGGUIM6JAJVpQdJktLuwCP62lZZfHfZEP1Nbqlx7iu4KcYGLLdDgP4NfxtPwkEOPVJLuyVfl4zWebXnmkyz6v07O9%2BwqSNxhDcuxyplLARuwxF8rYMPbOEvXxtliwNAobntMaSZu9xhCeGFFGhCeCeh7NVGamA8lDrELiztx5fgSwN6qfCPn3VcXKCO3v2T2k9spVVCerIcWglBp7iXphDb9P7F9O0o0pn89EMJ700sIGOqUBeeFl18ELCJG0G9kSNzTG3cCRCP1AnrtJcAU4b4SxDmYyV%2F4UnVlTPVh3f%2BqRsoBY%2BKGBZ9%2FkowSGU1pjb8WeIUJ%2Bm3%2FHYXazMWgc63axmz5I2ovt499BpUNi2926cBEXS%2FUShUBzB7U5mjtZFYNavi%2Bxu2osx61Ddn3A48LOh0GK835FGSl1yRoYxH7N2EBfQpR2QHHesqIb5mfPcce1Tqw81J0R&X-Amz-Signature=e8c883cd63f80944c4a7f65f54c8c2ca1aae3d09f9e0768821f077ed1dafc336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIRTGY3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt%2BGD2KNfhcJT9lcvj8O%2BW3bfM5iHSKMcwl7bmPUjGgAiEA6E7gvchmV2uaTVqxqOa3O7mQlhMC6cZGx11x%2FPn357gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc65Qa19TgFM1Qj6SrcAwLHbaOKy6wtrokxN3GrjsCFxvDu3cU3fNyXgJS85ynCNPcBVCBQoIyzst7NR3cRMaPqJQsqLbnnkGBp5rPgFdsH2pR3NULk3hSdsdsa36yJpCjaiKVQQ%2FRLKd%2BbXkOkHpgodv8%2FFIUZnZ%2BVxh6MTsplBnvW8ARpqTbpRSe2C7GaZBrx6QMua0O7bDm%2FYA1FfSqr0mxwCPBHUBlowf%2BMG2PKrHlZ%2Bjp2d4uuPn0em%2BYOZVSfUPVPbgurQtJANYn3EXvluTIuLfF0a4P4lAYm%2Bo4ch%2FWQC7s4NeBngmeO0oRBkpRIsdZFwAJX1%2F5Vy%2FPjrTBo0R0vxrVv33OQLp3L4XDUSiau1M3%2F6M%2F%2FTVnWJrJWOtbIC45o0ziGZcKU1xetk9XxLaiKnFs0SyKrRrYBexFBGGUIM6JAJVpQdJktLuwCP62lZZfHfZEP1Nbqlx7iu4KcYGLLdDgP4NfxtPwkEOPVJLuyVfl4zWebXnmkyz6v07O9%2BwqSNxhDcuxyplLARuwxF8rYMPbOEvXxtliwNAobntMaSZu9xhCeGFFGhCeCeh7NVGamA8lDrELiztx5fgSwN6qfCPn3VcXKCO3v2T2k9spVVCerIcWglBp7iXphDb9P7F9O0o0pn89EMJ700sIGOqUBeeFl18ELCJG0G9kSNzTG3cCRCP1AnrtJcAU4b4SxDmYyV%2F4UnVlTPVh3f%2BqRsoBY%2BKGBZ9%2FkowSGU1pjb8WeIUJ%2Bm3%2FHYXazMWgc63axmz5I2ovt499BpUNi2926cBEXS%2FUShUBzB7U5mjtZFYNavi%2Bxu2osx61Ddn3A48LOh0GK835FGSl1yRoYxH7N2EBfQpR2QHHesqIb5mfPcce1Tqw81J0R&X-Amz-Signature=c4a60fe093bc53f1a3eb2e4efde657840cbc71e3752806461b10154e10633020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIRTGY3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt%2BGD2KNfhcJT9lcvj8O%2BW3bfM5iHSKMcwl7bmPUjGgAiEA6E7gvchmV2uaTVqxqOa3O7mQlhMC6cZGx11x%2FPn357gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc65Qa19TgFM1Qj6SrcAwLHbaOKy6wtrokxN3GrjsCFxvDu3cU3fNyXgJS85ynCNPcBVCBQoIyzst7NR3cRMaPqJQsqLbnnkGBp5rPgFdsH2pR3NULk3hSdsdsa36yJpCjaiKVQQ%2FRLKd%2BbXkOkHpgodv8%2FFIUZnZ%2BVxh6MTsplBnvW8ARpqTbpRSe2C7GaZBrx6QMua0O7bDm%2FYA1FfSqr0mxwCPBHUBlowf%2BMG2PKrHlZ%2Bjp2d4uuPn0em%2BYOZVSfUPVPbgurQtJANYn3EXvluTIuLfF0a4P4lAYm%2Bo4ch%2FWQC7s4NeBngmeO0oRBkpRIsdZFwAJX1%2F5Vy%2FPjrTBo0R0vxrVv33OQLp3L4XDUSiau1M3%2F6M%2F%2FTVnWJrJWOtbIC45o0ziGZcKU1xetk9XxLaiKnFs0SyKrRrYBexFBGGUIM6JAJVpQdJktLuwCP62lZZfHfZEP1Nbqlx7iu4KcYGLLdDgP4NfxtPwkEOPVJLuyVfl4zWebXnmkyz6v07O9%2BwqSNxhDcuxyplLARuwxF8rYMPbOEvXxtliwNAobntMaSZu9xhCeGFFGhCeCeh7NVGamA8lDrELiztx5fgSwN6qfCPn3VcXKCO3v2T2k9spVVCerIcWglBp7iXphDb9P7F9O0o0pn89EMJ700sIGOqUBeeFl18ELCJG0G9kSNzTG3cCRCP1AnrtJcAU4b4SxDmYyV%2F4UnVlTPVh3f%2BqRsoBY%2BKGBZ9%2FkowSGU1pjb8WeIUJ%2Bm3%2FHYXazMWgc63axmz5I2ovt499BpUNi2926cBEXS%2FUShUBzB7U5mjtZFYNavi%2Bxu2osx61Ddn3A48LOh0GK835FGSl1yRoYxH7N2EBfQpR2QHHesqIb5mfPcce1Tqw81J0R&X-Amz-Signature=da36c43d9bdd2669831cf9abf9d8871b93f14d4e8290804fc582a015671627a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFT4CW3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbcnKbuDXvZmN1TLXtezealJguBzsZCkawrgzhMwwmdgIgcwff%2BXXd5xBXNMh7u4c9Q5jSjee8AYwNKqO22CJsbtkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6I1xB7X7bKRXAbNCrcA56kFI2m0BoDXx1Pewisn%2BQjAbBsGandiSdgjIWlEGeFHYX1JNll5wzTr9VgvawArwYGlf3u%2B6EV0L%2FbiYzwaELJ6A%2BO7UtVgC%2BjuiMMin2hU5MKAWOcU0MayB0M1%2F3mQa6I2JJ0UrKS9VPv96%2FKcXjJCbGqVKBbUjnhvTJhoUE0snMCeN%2BKtvQ7tH0cUsWpZgr3kTxYk%2Bfr1GbDec61wxIAzTzI3KlMlEjHnlmuMF2KE9eD4QJkkFw3uXpmpbrjzCLAnoUplidqyPLE0XcOGlGzSN5HtNavHFDmzeBLVH9JYNPUiIoccerhvOwq5iBpf5LOUplhn5aHCOERoaZsrFLlI4oykkMPLonlkFSwfryTPfTnzQ5AnbQt8NzrR0ylRUdu2E56%2BECYCw4fUctzCqQSKlh41dlENfFePWz5vCbbC%2FiBkCeUsHK0RHQjOdlcNeTmCmB0Rhmec1QWAU1P06WvBLi1TchVBTMdFWCy%2BS6MkMaC%2FBBnNOpALgrAiK%2BeVWXLnuGzQmrevvCbZbAA%2FLyoxrkFBgpZY%2BgPuBoUO4ANVq0cmR96EMvQyWIZ81v9lVyIEi336XWJbgPJhy%2BvdhnbxWytM3krC8uXEIBSX12ozZjsKJX5IrjKgReyMOTV0sIGOqUB1b5sxlZEVxWDsXjaNADl5u%2Fu1G%2Bp0DU8vDNGgPo%2B0mjN8vE2JQ9JZ3lo0nMPUEWATIn0nBgIy6PsA%2Frlx9844Bj4EScb5n9yumgdpTqng8Wouo0BbGfspGvQA5rjptzl60sgQQLQuBAeOxC14bqbI7IwNDyy5GbtSkG15V4v3oO4J06yD%2Fr%2F1RqV8jw6J2XZ2rYYoLXAcmpObfinB5tXN0mO2vAY&X-Amz-Signature=108dd8216d831c7eb87cecae6a1c55fd87bd80b57fea46c6965e506e9ba1dddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUQTJA7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDstJajNaHHPRBC98y4RMZfkRzvmls6AL%2FUzEC5583rMwIgGWdxe7TpDO7tdrb9Wc2Xrd6stpAx2hMxC%2FllRdNrdoUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYz3GLl9roORnyG9yrcAxNLg99Ljp2RFcHKFYHfCIubeEMiNjtGyZ3F7TybHZFH3C7XfY1k%2BYBSPmH%2BdtzIN7djYImql53NrdwFtYodfFxojXsFcmXIE0xs8uUkUQakN7gMD0EKKHHMMfXVzViB6ieEGoMQrfdq1W6ZSm2ZwANyWuXJW%2BPNMX2xLYIhI0T8tVs3vvPQRMGKlxQ7X2ALHc8uvs9gBIHcPbaQ7Tbm3FL2abgC2CCBgHFACxgRA6yb7gr5xkiZW2DZcMEtF01BtOFpecZRsT6NCBOXqBaEfoN94C6%2F7FU%2FNW61nBJeUIxBr0aRbV%2FF%2Fxv46uWEZsYw5B7mYUZZcSKfjEjQ70dO2IllUHb%2BQ5CxbMcpjIx07noS0VoaHQ7F9Et1cCVOsPX5qkfyFg551C6AswVVSA0MjhvGyId2SL%2Fz5gyiLQ8vAals97Ch2mS5i%2BMmwLYm%2FDAa%2BpLpvNauISLhZpRK8mtTjkha2EhVFkwAbvp%2BInOzsPEGW%2F7U7vR3COl6wsj8qjLBovTyU0u57MqU3xiNdlB3d%2BYpCaWWQWmIa6%2FwtmCwyyRPo08DGQa6DnMpFhxqp1iAUEy4G0xelRFKMAHyDwj2U44qzzHWMjUsnhiIkQiD67Mf7Qw2e2IcHh0UJlyNMMvV0sIGOqUBg%2BVIW2PlKx8%2Fd1%2BHMARrMi5XDLuaGxMU0sTWvq%2FSUS0KfBONdqg8y%2FjFKemL0pTQ0Hsh3hLvJp7AULESusgpmUUsYLrND%2FERdB4h4nmzdyn2oUsvUZCIZTcC5zTjTOq%2FUiA13DG5rDBP1yGsVVXDdip4iUxOWCj5OH1vUrm8ztHoUqcHJKYIS3KQbuwGJymLXqUBwm9BbUV4O7kSymtqQ76RlKEo&X-Amz-Signature=78772418a349f9b89530a260d19b1fee96d20794041796bb67e0b0a6b8172912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIRTGY3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt%2BGD2KNfhcJT9lcvj8O%2BW3bfM5iHSKMcwl7bmPUjGgAiEA6E7gvchmV2uaTVqxqOa3O7mQlhMC6cZGx11x%2FPn357gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc65Qa19TgFM1Qj6SrcAwLHbaOKy6wtrokxN3GrjsCFxvDu3cU3fNyXgJS85ynCNPcBVCBQoIyzst7NR3cRMaPqJQsqLbnnkGBp5rPgFdsH2pR3NULk3hSdsdsa36yJpCjaiKVQQ%2FRLKd%2BbXkOkHpgodv8%2FFIUZnZ%2BVxh6MTsplBnvW8ARpqTbpRSe2C7GaZBrx6QMua0O7bDm%2FYA1FfSqr0mxwCPBHUBlowf%2BMG2PKrHlZ%2Bjp2d4uuPn0em%2BYOZVSfUPVPbgurQtJANYn3EXvluTIuLfF0a4P4lAYm%2Bo4ch%2FWQC7s4NeBngmeO0oRBkpRIsdZFwAJX1%2F5Vy%2FPjrTBo0R0vxrVv33OQLp3L4XDUSiau1M3%2F6M%2F%2FTVnWJrJWOtbIC45o0ziGZcKU1xetk9XxLaiKnFs0SyKrRrYBexFBGGUIM6JAJVpQdJktLuwCP62lZZfHfZEP1Nbqlx7iu4KcYGLLdDgP4NfxtPwkEOPVJLuyVfl4zWebXnmkyz6v07O9%2BwqSNxhDcuxyplLARuwxF8rYMPbOEvXxtliwNAobntMaSZu9xhCeGFFGhCeCeh7NVGamA8lDrELiztx5fgSwN6qfCPn3VcXKCO3v2T2k9spVVCerIcWglBp7iXphDb9P7F9O0o0pn89EMJ700sIGOqUBeeFl18ELCJG0G9kSNzTG3cCRCP1AnrtJcAU4b4SxDmYyV%2F4UnVlTPVh3f%2BqRsoBY%2BKGBZ9%2FkowSGU1pjb8WeIUJ%2Bm3%2FHYXazMWgc63axmz5I2ovt499BpUNi2926cBEXS%2FUShUBzB7U5mjtZFYNavi%2Bxu2osx61Ddn3A48LOh0GK835FGSl1yRoYxH7N2EBfQpR2QHHesqIb5mfPcce1Tqw81J0R&X-Amz-Signature=12c71a963e9b8ee353448c4975e3552ed589774ee02e7814e851f489b30d3b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
