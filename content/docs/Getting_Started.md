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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPL3UQ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BNSIpWvheusKE5%2BT%2FVwdkwMejFS1RqNXfb9wd%2Fuf%2FxgIhANskJkw8YSFPrH%2F%2Fr78TSU7g6OOkkz%2FoKU6qs5TWrIHuKv8DCDQQABoMNjM3NDIzMTgzODA1IgzzVjW%2BGP17MbVh5MYq3AOrX8OuCDRi8gE5PgG4l0O1B3ksTyNqGMqx8GDWgVlLNTMOYCYDxnB8PvFkyd6uFljztLELdHL4jxzG2xwkt1GATg6RQEsFPUgef%2BpVY56PB6ClpSrde4OwNFvj655k%2Bm%2Ffh%2Bm9k51FgucWnB%2F1%2FC0V51ewfaJxoVgmeCi7E%2Bu91%2BKLF183hD%2Ft95aBU1pw9WpGjsU%2B%2FGZ0Gp754iBSZsdjGZMwLaZz6LBxC%2FR9j%2FdxRN7kcwcqJd3XRf1BNANqludmSwACWhh4eG9uLnDlSsmazEn6%2BXmE89oHXKW8gKdUWePsqILBoN1IAbi3e06kuWuvNLhC32MTTZODvHFKFRx61bSmj2C%2FGXB34VBZU5UQ65tEZNxvvzC8mgd7vxDXeEApp%2BeO78N1yyfrm3NKKicW4HdZK%2BqJcirmS%2FstN34oNWZqg1uSm9I9%2FQfwWGByU8PFMglD6ofH2nh1Wh0%2Fxtwhvnjdp0TiePTBCua36NqMWHSKj3JkeA42skqprQT0ZnrBS4itdm%2ForbNgL%2FOCQZesMJhTcgPfElp5wW%2BD3LKCkhP6YqER114zf%2B%2FMwfOX36lmhunINg3njT1NqYXIFhVK4P953UKPxKA1XH1Djiks8QlAhLp9ll9VYNReIzDp2b7EBjqkAap%2FcyKjfp%2FhNyFhIntHzVLJlBHIxNug%2BvfTkRHX6rK7CmHsx0%2FkICZhr44V9k0r5W9jACxzyJrbGiwxtBkOK9lL92loDqVvkJnO2oLQhlraKLpl4sCGsn1k8mfsgqgJ5SKgLnSgoSAHZem7NuRfAOeVzQKetWoFKrbaCUa%2B4EpJiXQvUu6rTOGIskaa1cwNT0drvg7mnXDCN7gAHT4bh8PxhjVZ&X-Amz-Signature=0cab83330ba94c5165c408f26c6f04453c9323bc65d125008f7a020f5dae38ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPL3UQ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BNSIpWvheusKE5%2BT%2FVwdkwMejFS1RqNXfb9wd%2Fuf%2FxgIhANskJkw8YSFPrH%2F%2Fr78TSU7g6OOkkz%2FoKU6qs5TWrIHuKv8DCDQQABoMNjM3NDIzMTgzODA1IgzzVjW%2BGP17MbVh5MYq3AOrX8OuCDRi8gE5PgG4l0O1B3ksTyNqGMqx8GDWgVlLNTMOYCYDxnB8PvFkyd6uFljztLELdHL4jxzG2xwkt1GATg6RQEsFPUgef%2BpVY56PB6ClpSrde4OwNFvj655k%2Bm%2Ffh%2Bm9k51FgucWnB%2F1%2FC0V51ewfaJxoVgmeCi7E%2Bu91%2BKLF183hD%2Ft95aBU1pw9WpGjsU%2B%2FGZ0Gp754iBSZsdjGZMwLaZz6LBxC%2FR9j%2FdxRN7kcwcqJd3XRf1BNANqludmSwACWhh4eG9uLnDlSsmazEn6%2BXmE89oHXKW8gKdUWePsqILBoN1IAbi3e06kuWuvNLhC32MTTZODvHFKFRx61bSmj2C%2FGXB34VBZU5UQ65tEZNxvvzC8mgd7vxDXeEApp%2BeO78N1yyfrm3NKKicW4HdZK%2BqJcirmS%2FstN34oNWZqg1uSm9I9%2FQfwWGByU8PFMglD6ofH2nh1Wh0%2Fxtwhvnjdp0TiePTBCua36NqMWHSKj3JkeA42skqprQT0ZnrBS4itdm%2ForbNgL%2FOCQZesMJhTcgPfElp5wW%2BD3LKCkhP6YqER114zf%2B%2FMwfOX36lmhunINg3njT1NqYXIFhVK4P953UKPxKA1XH1Djiks8QlAhLp9ll9VYNReIzDp2b7EBjqkAap%2FcyKjfp%2FhNyFhIntHzVLJlBHIxNug%2BvfTkRHX6rK7CmHsx0%2FkICZhr44V9k0r5W9jACxzyJrbGiwxtBkOK9lL92loDqVvkJnO2oLQhlraKLpl4sCGsn1k8mfsgqgJ5SKgLnSgoSAHZem7NuRfAOeVzQKetWoFKrbaCUa%2B4EpJiXQvUu6rTOGIskaa1cwNT0drvg7mnXDCN7gAHT4bh8PxhjVZ&X-Amz-Signature=3c45c4df7e00878e6a997bcb50d0290dc417b49a0a0ab75a2e03d5bddee8ad04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPL3UQ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BNSIpWvheusKE5%2BT%2FVwdkwMejFS1RqNXfb9wd%2Fuf%2FxgIhANskJkw8YSFPrH%2F%2Fr78TSU7g6OOkkz%2FoKU6qs5TWrIHuKv8DCDQQABoMNjM3NDIzMTgzODA1IgzzVjW%2BGP17MbVh5MYq3AOrX8OuCDRi8gE5PgG4l0O1B3ksTyNqGMqx8GDWgVlLNTMOYCYDxnB8PvFkyd6uFljztLELdHL4jxzG2xwkt1GATg6RQEsFPUgef%2BpVY56PB6ClpSrde4OwNFvj655k%2Bm%2Ffh%2Bm9k51FgucWnB%2F1%2FC0V51ewfaJxoVgmeCi7E%2Bu91%2BKLF183hD%2Ft95aBU1pw9WpGjsU%2B%2FGZ0Gp754iBSZsdjGZMwLaZz6LBxC%2FR9j%2FdxRN7kcwcqJd3XRf1BNANqludmSwACWhh4eG9uLnDlSsmazEn6%2BXmE89oHXKW8gKdUWePsqILBoN1IAbi3e06kuWuvNLhC32MTTZODvHFKFRx61bSmj2C%2FGXB34VBZU5UQ65tEZNxvvzC8mgd7vxDXeEApp%2BeO78N1yyfrm3NKKicW4HdZK%2BqJcirmS%2FstN34oNWZqg1uSm9I9%2FQfwWGByU8PFMglD6ofH2nh1Wh0%2Fxtwhvnjdp0TiePTBCua36NqMWHSKj3JkeA42skqprQT0ZnrBS4itdm%2ForbNgL%2FOCQZesMJhTcgPfElp5wW%2BD3LKCkhP6YqER114zf%2B%2FMwfOX36lmhunINg3njT1NqYXIFhVK4P953UKPxKA1XH1Djiks8QlAhLp9ll9VYNReIzDp2b7EBjqkAap%2FcyKjfp%2FhNyFhIntHzVLJlBHIxNug%2BvfTkRHX6rK7CmHsx0%2FkICZhr44V9k0r5W9jACxzyJrbGiwxtBkOK9lL92loDqVvkJnO2oLQhlraKLpl4sCGsn1k8mfsgqgJ5SKgLnSgoSAHZem7NuRfAOeVzQKetWoFKrbaCUa%2B4EpJiXQvUu6rTOGIskaa1cwNT0drvg7mnXDCN7gAHT4bh8PxhjVZ&X-Amz-Signature=f856573fd651ec8453d88b0884d0fc71f82babe9c196c193b5df3f4378aa83f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P56QSBI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQV7ToVg9Th0rR7IdWgaGmxpWMbDy66vXTwa4PuVuNQIgV2sqzCqXvnR5DS5vYBwBgFLfWGTUFcUCT6nv3MbSjmEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDClzAb3vDsxr6TOZ1SrcA81YIE7L85DJOYQMmD%2Fp8lUJJr23CAZ%2BBWinirGTU6MOAZMhkO3%2BfKQXlu34Tnge6s8zQpAcH8yTQ%2Fp4OJdUzGsuCNys9TI7zI%2B7mOIuxI6S0ttdbKMgnY8Tj3wCdmvmVun9F1asN3vLptXBjECYOsTpGRjM3nhgWxa1EneyvpwTX%2BanvrYGFyuw4xDGVdrzT527Tk04DBsxASqKud7Uez3TC1s8fYNB7WbZvkVsxeah36fi9lfRWojDTp%2BEphaU7KqwQJKr9HQi1%2F6J0WDZwar06gBa8KvbcPFSYMHIAXl50CtYWqlUtt8hOF0JdILqzePtS9Wz%2BDZUMGOf8O2sFSagIqi6N%2FKT%2FqE1BL3iIky01lpdxA1Le%2B%2FoeHECVxdaSpXqAuD1Z5iDDHA1%2F7DqfNfI3bk0hA332Mssy1d88%2FphtTTbPxqUFH7B7D0H4vXL0%2Be%2F9Daeku5GyeY6OjjQt%2FnrX8p8N9LKnodDjbU0nt3aF5mRjWuaq1V3s3x73xa6DNZHsgxpLlqliwyspNt%2BaApWTekL1d98y7zm%2Bxkc3iXagxQkDcTymy18f7H53tb0Lmk8YBZuBdcmnog9IPD9gtsMKR%2FQpZROx9q0FCtorDeO65YBrkT0jnoDV694MPXZvsQGOqUBxib1Svn9L751hjPXxJLQtTgWcYGfLH3j06tRnrC%2ByYPKilvTW2goxMK0u5nPG7jN5IGSA3ZCqYbcZ8v1b14ISegYefLnyilcep5%2FCEQt8Ui6t0I4URJQmB6yMIl0AjHCqgFTciDUDng77Zj4WMaLNPsOnWseW0qNt1napcXY%2FxWgwJwMbUQ8jHEjDe4HYvDIEmHsejNBLc%2BN6%2Fj9s6NlS5A%2F0rGn&X-Amz-Signature=5b46a0d2149577b309ba95cc63d0977eabb08c74c1e629ce3f350cfed8c51852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOQUWOH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM2RMgAt36wR7nkjGRqt4pf%2FNEq9jBRMz7rr5yKIik6AiEA5f%2BEcRkV0yTI0dlcdAzMLxeYhmoh1vaBfuVJiUgm7s0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKntQ6t83zaduLL%2BXCrcAzYlreprx6YaOwhPUmyiiiVvwFyhG90haUYBM9x5tpDJ4VKMSDF4crfb000kVg6rcpmg9l1FQs3XqRCMt5wL5dAAbAJRnN2aApAbzHf0UoL4M94g8d8kkHzWGoB55fbjN3IEt%2BPjIAuULpajfnExNDHrteg6DwTXwmGh2Egw28clhkVA8zAMo7s6hCR6CaCabjmJTVpcRVAoTf32viyM%2Frf%2BYpnvkxSNXFUrJyGN4ho3REbezcNDHL8p24yCEaQWjpbOkbEAhUYzKMUXg6FhCbW7tMPtNnDKqwnT9BDxZURzF05tTGspKeSrSJi1zOvEJiUYqxvxxY%2FoW4POw19%2BUbfRwgR0esxjDJOCGOg1asTI2WKcFpX%2FAhNpMCoq71a4YHA5AyqL4V3dtOHq1lNb1N6TASLKgSKkJ0RBFGs1LIHDUWlUGtilqrxX7v4ejGU7loGaxqTVxZVpl7kzBVzk5mypIJFYCc%2FRFbcPqxiPSpIu1Ytx567bPtzORez5f5%2F7EfbZq1VpjfQRV6Y%2Bf6LOPOF7KMW19SdO5YeFOSGhmPi5WcHpG5dxyqNK%2FPfcbKllU0fCVLw6THIjv%2Fr%2BDFEr0caVZWbAwYhcXH%2FQ%2BL2eJdhZM%2Fp0rsFTnnW9HpNSMLfZvsQGOqUB2BCW0nXXrMQZRS1NedJEmTVk%2FU6XHMK3xf5dg0n9sqcLzS37TC1FUtjBGKrYKoe61dHGADflYgSOH%2FtzH9T0GTEkPHo6o%2BnFj4OnuKlDdAgyKEUqhwNtYEe%2BdKwdqygYEt%2FTlKTyxJYnr4rXpvw4PG6HfrHjhlo%2FYjgXvAH5JGNkSz%2BAqGADXuYynNJZjuYCS0xcjZvsY9fpw9HRPW4iWXKj9HZ4&X-Amz-Signature=e544138ca73d801928daeee580e8e92f2787c783c10a29c8d35ba4496c652db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPL3UQ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BNSIpWvheusKE5%2BT%2FVwdkwMejFS1RqNXfb9wd%2Fuf%2FxgIhANskJkw8YSFPrH%2F%2Fr78TSU7g6OOkkz%2FoKU6qs5TWrIHuKv8DCDQQABoMNjM3NDIzMTgzODA1IgzzVjW%2BGP17MbVh5MYq3AOrX8OuCDRi8gE5PgG4l0O1B3ksTyNqGMqx8GDWgVlLNTMOYCYDxnB8PvFkyd6uFljztLELdHL4jxzG2xwkt1GATg6RQEsFPUgef%2BpVY56PB6ClpSrde4OwNFvj655k%2Bm%2Ffh%2Bm9k51FgucWnB%2F1%2FC0V51ewfaJxoVgmeCi7E%2Bu91%2BKLF183hD%2Ft95aBU1pw9WpGjsU%2B%2FGZ0Gp754iBSZsdjGZMwLaZz6LBxC%2FR9j%2FdxRN7kcwcqJd3XRf1BNANqludmSwACWhh4eG9uLnDlSsmazEn6%2BXmE89oHXKW8gKdUWePsqILBoN1IAbi3e06kuWuvNLhC32MTTZODvHFKFRx61bSmj2C%2FGXB34VBZU5UQ65tEZNxvvzC8mgd7vxDXeEApp%2BeO78N1yyfrm3NKKicW4HdZK%2BqJcirmS%2FstN34oNWZqg1uSm9I9%2FQfwWGByU8PFMglD6ofH2nh1Wh0%2Fxtwhvnjdp0TiePTBCua36NqMWHSKj3JkeA42skqprQT0ZnrBS4itdm%2ForbNgL%2FOCQZesMJhTcgPfElp5wW%2BD3LKCkhP6YqER114zf%2B%2FMwfOX36lmhunINg3njT1NqYXIFhVK4P953UKPxKA1XH1Djiks8QlAhLp9ll9VYNReIzDp2b7EBjqkAap%2FcyKjfp%2FhNyFhIntHzVLJlBHIxNug%2BvfTkRHX6rK7CmHsx0%2FkICZhr44V9k0r5W9jACxzyJrbGiwxtBkOK9lL92loDqVvkJnO2oLQhlraKLpl4sCGsn1k8mfsgqgJ5SKgLnSgoSAHZem7NuRfAOeVzQKetWoFKrbaCUa%2B4EpJiXQvUu6rTOGIskaa1cwNT0drvg7mnXDCN7gAHT4bh8PxhjVZ&X-Amz-Signature=b64838cfc53a525deb77df2ea5e7ed1c9c605ac2d24032aacb074cc1141ee053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
