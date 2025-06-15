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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQEDT2R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHjyemhUcN4Qquqivi2pokavcn0tLq7jj4qGYTUBjZMDAiBKY8CnNmuHN9RQbLvD8uBVK7eI62%2BUmOY80sWngtP7SSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPJgYgYTleAkWRXCjKtwDIYUrnBi4yJiQCHX%2FO%2BUObks82r%2FU8IU1yoxiLHV%2B8rZB%2FXV9o85J1I8ls8HKirM1E10CTIvDw6LnQik6OeOpvhbi%2BIpHCZ94TU5PkNZXSUX%2FDHan04%2BjsT73tmejOuXijacctVgaTfEH%2FRI2fCGLXIsLDhkUrYtT1zS2xfVcPmxOPIxNwLO2jRPPtDhbK014IVDUonWD6rf%2FNVaIQw0IvZKM6h8h%2Fq1gxp4p3FvSD8nkJ1chXEInmUMwqAfexXSjVK7fmQfVou%2BqhJCblqfGFHxeRjVFcYSCqvFjLFwUQYyLiVRNhtsiWrF8VGih9BjyRmqI2Tl10zZgxGBGfqaZBsKDrvSK28Z1F7NgDLsRIqM8qf8XPblOFuGX1Doc7B8dJpkM2JqhYIGZQSIgkKQjC6UJO84fzKtHY%2FbrP9ygEqiUn4LQnebGy5nVb7OmY%2FekEBV19CkGWNvW%2BwXwFesuhlY3fpbG53xjhu9YupSFdijsyFBVq3JpeLhE%2FwMY5Ii78DNfeuWZX6hHZ9oc13avReJpF3I6uH1ti5xWwH9n0gryfKQrpD6Dz3p%2FeWGK8tjhT%2F9cdUhvB1doNdFSTFGxBl3h0Az1OBitCIvmXBLvEvnbZ%2FtxmHr5M7UHoxQw04W6wgY6pgHxufaCy8v78CeECvJ4naHluF2XyRzWP4Ep%2FbH6EDwGb7w2P18S7vM27zQtnfODB1i2zVi%2Fqh5HPOYGMC8XMz2rcWRWWG10kEJWX6hIhGa209mccfXkPLg%2BE%2Bb%2BnFna%2FOniutnT3WY%2FzJ8QSc67eyj%2BPZcS5Ygqhn4yvHUz8xTJRww5bwqd7Kq4U%2BGMtFzGqCHJa7gNfYa%2BT9mOHJUebOBYSo7LCpFe&X-Amz-Signature=229fbf92e481bca4fff4272e34080d8cb5b2b1e5d95a037489892e522e1bfebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQEDT2R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHjyemhUcN4Qquqivi2pokavcn0tLq7jj4qGYTUBjZMDAiBKY8CnNmuHN9RQbLvD8uBVK7eI62%2BUmOY80sWngtP7SSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPJgYgYTleAkWRXCjKtwDIYUrnBi4yJiQCHX%2FO%2BUObks82r%2FU8IU1yoxiLHV%2B8rZB%2FXV9o85J1I8ls8HKirM1E10CTIvDw6LnQik6OeOpvhbi%2BIpHCZ94TU5PkNZXSUX%2FDHan04%2BjsT73tmejOuXijacctVgaTfEH%2FRI2fCGLXIsLDhkUrYtT1zS2xfVcPmxOPIxNwLO2jRPPtDhbK014IVDUonWD6rf%2FNVaIQw0IvZKM6h8h%2Fq1gxp4p3FvSD8nkJ1chXEInmUMwqAfexXSjVK7fmQfVou%2BqhJCblqfGFHxeRjVFcYSCqvFjLFwUQYyLiVRNhtsiWrF8VGih9BjyRmqI2Tl10zZgxGBGfqaZBsKDrvSK28Z1F7NgDLsRIqM8qf8XPblOFuGX1Doc7B8dJpkM2JqhYIGZQSIgkKQjC6UJO84fzKtHY%2FbrP9ygEqiUn4LQnebGy5nVb7OmY%2FekEBV19CkGWNvW%2BwXwFesuhlY3fpbG53xjhu9YupSFdijsyFBVq3JpeLhE%2FwMY5Ii78DNfeuWZX6hHZ9oc13avReJpF3I6uH1ti5xWwH9n0gryfKQrpD6Dz3p%2FeWGK8tjhT%2F9cdUhvB1doNdFSTFGxBl3h0Az1OBitCIvmXBLvEvnbZ%2FtxmHr5M7UHoxQw04W6wgY6pgHxufaCy8v78CeECvJ4naHluF2XyRzWP4Ep%2FbH6EDwGb7w2P18S7vM27zQtnfODB1i2zVi%2Fqh5HPOYGMC8XMz2rcWRWWG10kEJWX6hIhGa209mccfXkPLg%2BE%2Bb%2BnFna%2FOniutnT3WY%2FzJ8QSc67eyj%2BPZcS5Ygqhn4yvHUz8xTJRww5bwqd7Kq4U%2BGMtFzGqCHJa7gNfYa%2BT9mOHJUebOBYSo7LCpFe&X-Amz-Signature=89148defc360f9f9e02dffbb7b1aadb265d551ae111e94beeffe8f5e3285e6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQEDT2R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHjyemhUcN4Qquqivi2pokavcn0tLq7jj4qGYTUBjZMDAiBKY8CnNmuHN9RQbLvD8uBVK7eI62%2BUmOY80sWngtP7SSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPJgYgYTleAkWRXCjKtwDIYUrnBi4yJiQCHX%2FO%2BUObks82r%2FU8IU1yoxiLHV%2B8rZB%2FXV9o85J1I8ls8HKirM1E10CTIvDw6LnQik6OeOpvhbi%2BIpHCZ94TU5PkNZXSUX%2FDHan04%2BjsT73tmejOuXijacctVgaTfEH%2FRI2fCGLXIsLDhkUrYtT1zS2xfVcPmxOPIxNwLO2jRPPtDhbK014IVDUonWD6rf%2FNVaIQw0IvZKM6h8h%2Fq1gxp4p3FvSD8nkJ1chXEInmUMwqAfexXSjVK7fmQfVou%2BqhJCblqfGFHxeRjVFcYSCqvFjLFwUQYyLiVRNhtsiWrF8VGih9BjyRmqI2Tl10zZgxGBGfqaZBsKDrvSK28Z1F7NgDLsRIqM8qf8XPblOFuGX1Doc7B8dJpkM2JqhYIGZQSIgkKQjC6UJO84fzKtHY%2FbrP9ygEqiUn4LQnebGy5nVb7OmY%2FekEBV19CkGWNvW%2BwXwFesuhlY3fpbG53xjhu9YupSFdijsyFBVq3JpeLhE%2FwMY5Ii78DNfeuWZX6hHZ9oc13avReJpF3I6uH1ti5xWwH9n0gryfKQrpD6Dz3p%2FeWGK8tjhT%2F9cdUhvB1doNdFSTFGxBl3h0Az1OBitCIvmXBLvEvnbZ%2FtxmHr5M7UHoxQw04W6wgY6pgHxufaCy8v78CeECvJ4naHluF2XyRzWP4Ep%2FbH6EDwGb7w2P18S7vM27zQtnfODB1i2zVi%2Fqh5HPOYGMC8XMz2rcWRWWG10kEJWX6hIhGa209mccfXkPLg%2BE%2Bb%2BnFna%2FOniutnT3WY%2FzJ8QSc67eyj%2BPZcS5Ygqhn4yvHUz8xTJRww5bwqd7Kq4U%2BGMtFzGqCHJa7gNfYa%2BT9mOHJUebOBYSo7LCpFe&X-Amz-Signature=82fb79b6f6b370dd47aeebecbf354af1e560d97a19a45390b160a52cee6851e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCJNRRR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFdDXjAppTm5jZDYCX%2Fzc1V%2BAFJaCTrXcbcA7vT0sFGKAiEAoeq%2FsTPMCAoFMehyUU%2FQd2gEgPrIARakxQnpDjH9JYwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKXQ6WBbXVOmLWSNVCrcA65X8NSYiIHQeT8wECyxnSKRb2dnAwifjqrOlEQLgQULXfWGUeHY1pWYUkQSgqQ%2BMskSnhK4lJLB%2B9Q8MQWPsURlIdFOme70b4F1o1jDZgatd9SSVhjFj1d65Tx5AgJSC8edfLlwU%2FxPm61q%2F3VolKZcSBraW8pQiQ6zgNcLQq6ymDll8A29kEyAD99Y91frsgV9WkfjmW2JhZj16bNiPVFTu5o3ovCgcruPj%2Bho6%2BPnGIsL1eoSNf%2BhI7W%2B15F9bbNBW240uZbMt6nRc%2BTD1i5CDQtYONGt8VKMSqfft9p7Tgv%2BcGmM3TYFK2q6xt0muv3zhL0v926Hyn%2Fnilq411DYRI5dZlhTVrIaCDyaBHbPmD15HDfT3465k8UnGnOrITNkg2aBCgm3xlKiJFEtCQZkPkSuyQJQHmpJYI27oHHgDAw4859Szqs2YQGKHhCaW74jU2iFDLWaZaqwRbF04hgamt5KZiIWXsXE9lblSK3zo66BhEcj7it3Lh42moygZHZLGYxCNGVgDBqe5aNVRURht9FGpyIhZvdOVhv%2F2xkAZKcEyHECbEEMZMLMpCVTMr39j%2FFqe77mT8ZP72KswL4pB%2FgZlq6bffsLoobPX%2F7mJ%2BbtB7wfzicvymC3MKeOusIGOqUBEfHa5OjETBRGuC5%2BUEwGcflEQighVao5MJiW14059w8rkZVTLMQH5XqeCMXzltMBUVm8UMLR2n%2B9kBy3d0tvH3MLkHTRSDmUvJj83mxuylA5zl%2FzSym4qjf926m18CYDlDJjiHu%2FHBvlk96Z1YSu%2FRdpATIkE6PMj%2B31MDwMamLCd2lpcMzvFKWCzJOp13OIH5nQQGIlxwg0VpLVzbMEgazcLDJr&X-Amz-Signature=4a995165e633ed78d39ade2d493bd06e8fda4f233401e4daad23d52ad806929a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNXCQ2E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEhHnsQludV89Szuq2fmSXaE%2BRS3e1Dmr9jFgEC75xdwAiBHfI5c9QZpqc9mqCyRtZS1VqZHzWggCnMNV8YaVqabeir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM5MBtrKXIdx%2BQUouJKtwDO8K9T%2F55HT5lUhzt2VihL4r9BZEAMnPt869Waz5CYqGDvPsjzcsAmS%2BEBBBmqeM8uzG88K2evbCi%2FIYo4P9zRC%2BCiGR5VSLdSSl6H5PF8NIRpN5cprwNC88d0uN7xpq7PxY%2Fu87SspbWtbCXvEkSGRWxTzqpnbgNxEN6aBOGZfl0WSdkU3wUwiI4lhGBDQt4HECl0TagAFsz8le1fhtRxu6iJd9uo8ZZiVtB6m%2BnFbT5TIL0xKLJZ6vZzJS34CzViJysC8WQe%2FLbD955I0WZtvcFJ4zU3vmL1Ih1F2xunklb9ghTSeV%2Bg%2F6mkBJ1sx5a1NXPNEkwxf5rN%2FVCkUp7aO%2FKgCdoeOb788w2uc7gLK00jsa1tNXMomjXAOlRqQ0Mqs7YI%2FOy8HoM30qEIV0fY4DyTnuxneFrqX0fdefckTzmu3k6OrSl9R7uoi8LHDPQhHCmVsPJKMWKw4EKnyF4tMPMfvHDmteYmcsszVBzeRtELrcYkIdp1umE1O2uuuyMdqkJMPClNrSLrg%2FtJAhh307haSxP%2BN%2Bj%2FwswVkWtzi2gRO%2FYy45HUY1d%2BOd2J4ERSaY79ywhX%2BkHZkjmJPLHH%2BYzJ7lByf6NM%2B%2F%2BPPP34V8VoC9iSr70rhLC%2FXswqoS6wgY6pgERVglyXA9tIVapEYxpMiOW6vQ%2BRtCJyiKo4z%2BHnhkHA7MJqrVLG5ssOVsz%2FNHaOGT6YTezsY5mUWR4d9SDlWMlnpKeeYtJVXPo0l0XydFmBRPT7lB5Rv2KM%2FQ9jgsBCq%2FOwL7Yfb3ZBuoOvjFrZIRAqAvj6uk%2F9qncoqGnCqb%2BnJS%2F%2FkYErIt261CmMSqWZuV9%2BHv%2FgH6SkvJz2niP9z4zhcZNEEvZ&X-Amz-Signature=a72a977d3606dcdd3fe816cefc166c8a2b7d3692aa8f74cc0337da91b5244d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQEDT2R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHjyemhUcN4Qquqivi2pokavcn0tLq7jj4qGYTUBjZMDAiBKY8CnNmuHN9RQbLvD8uBVK7eI62%2BUmOY80sWngtP7SSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPJgYgYTleAkWRXCjKtwDIYUrnBi4yJiQCHX%2FO%2BUObks82r%2FU8IU1yoxiLHV%2B8rZB%2FXV9o85J1I8ls8HKirM1E10CTIvDw6LnQik6OeOpvhbi%2BIpHCZ94TU5PkNZXSUX%2FDHan04%2BjsT73tmejOuXijacctVgaTfEH%2FRI2fCGLXIsLDhkUrYtT1zS2xfVcPmxOPIxNwLO2jRPPtDhbK014IVDUonWD6rf%2FNVaIQw0IvZKM6h8h%2Fq1gxp4p3FvSD8nkJ1chXEInmUMwqAfexXSjVK7fmQfVou%2BqhJCblqfGFHxeRjVFcYSCqvFjLFwUQYyLiVRNhtsiWrF8VGih9BjyRmqI2Tl10zZgxGBGfqaZBsKDrvSK28Z1F7NgDLsRIqM8qf8XPblOFuGX1Doc7B8dJpkM2JqhYIGZQSIgkKQjC6UJO84fzKtHY%2FbrP9ygEqiUn4LQnebGy5nVb7OmY%2FekEBV19CkGWNvW%2BwXwFesuhlY3fpbG53xjhu9YupSFdijsyFBVq3JpeLhE%2FwMY5Ii78DNfeuWZX6hHZ9oc13avReJpF3I6uH1ti5xWwH9n0gryfKQrpD6Dz3p%2FeWGK8tjhT%2F9cdUhvB1doNdFSTFGxBl3h0Az1OBitCIvmXBLvEvnbZ%2FtxmHr5M7UHoxQw04W6wgY6pgHxufaCy8v78CeECvJ4naHluF2XyRzWP4Ep%2FbH6EDwGb7w2P18S7vM27zQtnfODB1i2zVi%2Fqh5HPOYGMC8XMz2rcWRWWG10kEJWX6hIhGa209mccfXkPLg%2BE%2Bb%2BnFna%2FOniutnT3WY%2FzJ8QSc67eyj%2BPZcS5Ygqhn4yvHUz8xTJRww5bwqd7Kq4U%2BGMtFzGqCHJa7gNfYa%2BT9mOHJUebOBYSo7LCpFe&X-Amz-Signature=28b27e3a1d387fb26a4df4fda663387967c2ef1da13f689693a5f24e28143909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
