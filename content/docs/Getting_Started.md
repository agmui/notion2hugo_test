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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXT6TBHA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEXwWMBthfUhfL3wQtPwWRnGo4h99tR9PECbWnfPGjLAiBvKdF%2B%2FbMdeMCRQOJDin9mJ4ipK2CepwoZYzp47vtuAyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML1avqLk1zBgLOs9CKtwD0zUHzUVMRBIVtjUEqs9Juxdbq4GGjCYsikMfvSfikgzaXWYWnNrhcUD5UuJmJK%2Bs0bt279gzMTLZOj3ilQ2h1RWBMZdThiPhmdjHZMkbxDvd3Wxjy%2BQXpfEdh6%2BzZkvtfzkDrvbRV%2F2QPa7H7CdPJLSYJa5RsANOu7qepE6KycreZJyNWF%2FqhjSlcRf%2BfqusCMsfkyRXPetoP90daKiJrQLPJpV9T7%2Bo%2BPEwGYfGzejv%2FJe3hSB63aQFdGFBC33wFoQRpcRDOQmR9%2FbVXhkDKI8q%2BNo41u1JilTiB7J6nZXg5pyBnnKLGbziabUE5VJoPX%2Ff4EMf%2Bjtd%2BI9BzDRHo9YePrsPhDyB4%2Frt2rYh%2FxRRkZ6DsP8Q2eMOWTBf0jKvN%2B32UxxmIE0Rx9nSoweEi2%2Fqhfvr0J1IiOc0NIu2yBCyCgPkyCQrB6DBmh603Ayuab5UD1Jx3284%2BdnzDpWszeIJuX%2FeOdBxDHyk25btY7yDDKlRCFNUiN90tA88joplEVYGi0NOzMn6dMIW1m%2BuIoPefepc8evfMailxu2GXixR3Znl8JgoOzFQrgMm5PULKgehtF32E%2F0VNLNCX2MmVfLEnxLKcyhBo2DWjgTXXQIx5eViMXxxusICaBAwtfSAwwY6pgEj9PJO%2F9hcZP43KLj6SnnjPINzJAQMdWkmoafLWZT%2BNlf60GUpy2VKRPbcSYDL3nWd3kJ8kB75tFKaBPv7kIjOokOAiHgMv2QPQaBnRtUsbS%2F3rUV2W4v7KROG5AsTNLFfxrc8SDiR4NEOlU1hlkQv4S9jWNkquxVSQQbGbrNUVJPV0b9CBmncKg8Av4P2bPJazAbhGDpBxh%2FA%2BnJVmjoWlGeXTWod&X-Amz-Signature=3a74c236359d06ba155fafd1b0f74096f343afae13de22dc2e225744c901d18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXT6TBHA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEXwWMBthfUhfL3wQtPwWRnGo4h99tR9PECbWnfPGjLAiBvKdF%2B%2FbMdeMCRQOJDin9mJ4ipK2CepwoZYzp47vtuAyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML1avqLk1zBgLOs9CKtwD0zUHzUVMRBIVtjUEqs9Juxdbq4GGjCYsikMfvSfikgzaXWYWnNrhcUD5UuJmJK%2Bs0bt279gzMTLZOj3ilQ2h1RWBMZdThiPhmdjHZMkbxDvd3Wxjy%2BQXpfEdh6%2BzZkvtfzkDrvbRV%2F2QPa7H7CdPJLSYJa5RsANOu7qepE6KycreZJyNWF%2FqhjSlcRf%2BfqusCMsfkyRXPetoP90daKiJrQLPJpV9T7%2Bo%2BPEwGYfGzejv%2FJe3hSB63aQFdGFBC33wFoQRpcRDOQmR9%2FbVXhkDKI8q%2BNo41u1JilTiB7J6nZXg5pyBnnKLGbziabUE5VJoPX%2Ff4EMf%2Bjtd%2BI9BzDRHo9YePrsPhDyB4%2Frt2rYh%2FxRRkZ6DsP8Q2eMOWTBf0jKvN%2B32UxxmIE0Rx9nSoweEi2%2Fqhfvr0J1IiOc0NIu2yBCyCgPkyCQrB6DBmh603Ayuab5UD1Jx3284%2BdnzDpWszeIJuX%2FeOdBxDHyk25btY7yDDKlRCFNUiN90tA88joplEVYGi0NOzMn6dMIW1m%2BuIoPefepc8evfMailxu2GXixR3Znl8JgoOzFQrgMm5PULKgehtF32E%2F0VNLNCX2MmVfLEnxLKcyhBo2DWjgTXXQIx5eViMXxxusICaBAwtfSAwwY6pgEj9PJO%2F9hcZP43KLj6SnnjPINzJAQMdWkmoafLWZT%2BNlf60GUpy2VKRPbcSYDL3nWd3kJ8kB75tFKaBPv7kIjOokOAiHgMv2QPQaBnRtUsbS%2F3rUV2W4v7KROG5AsTNLFfxrc8SDiR4NEOlU1hlkQv4S9jWNkquxVSQQbGbrNUVJPV0b9CBmncKg8Av4P2bPJazAbhGDpBxh%2FA%2BnJVmjoWlGeXTWod&X-Amz-Signature=8c5dffd5904f38651d670f514165950d84df90425370a365f2fcaa9777da896e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXT6TBHA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEXwWMBthfUhfL3wQtPwWRnGo4h99tR9PECbWnfPGjLAiBvKdF%2B%2FbMdeMCRQOJDin9mJ4ipK2CepwoZYzp47vtuAyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML1avqLk1zBgLOs9CKtwD0zUHzUVMRBIVtjUEqs9Juxdbq4GGjCYsikMfvSfikgzaXWYWnNrhcUD5UuJmJK%2Bs0bt279gzMTLZOj3ilQ2h1RWBMZdThiPhmdjHZMkbxDvd3Wxjy%2BQXpfEdh6%2BzZkvtfzkDrvbRV%2F2QPa7H7CdPJLSYJa5RsANOu7qepE6KycreZJyNWF%2FqhjSlcRf%2BfqusCMsfkyRXPetoP90daKiJrQLPJpV9T7%2Bo%2BPEwGYfGzejv%2FJe3hSB63aQFdGFBC33wFoQRpcRDOQmR9%2FbVXhkDKI8q%2BNo41u1JilTiB7J6nZXg5pyBnnKLGbziabUE5VJoPX%2Ff4EMf%2Bjtd%2BI9BzDRHo9YePrsPhDyB4%2Frt2rYh%2FxRRkZ6DsP8Q2eMOWTBf0jKvN%2B32UxxmIE0Rx9nSoweEi2%2Fqhfvr0J1IiOc0NIu2yBCyCgPkyCQrB6DBmh603Ayuab5UD1Jx3284%2BdnzDpWszeIJuX%2FeOdBxDHyk25btY7yDDKlRCFNUiN90tA88joplEVYGi0NOzMn6dMIW1m%2BuIoPefepc8evfMailxu2GXixR3Znl8JgoOzFQrgMm5PULKgehtF32E%2F0VNLNCX2MmVfLEnxLKcyhBo2DWjgTXXQIx5eViMXxxusICaBAwtfSAwwY6pgEj9PJO%2F9hcZP43KLj6SnnjPINzJAQMdWkmoafLWZT%2BNlf60GUpy2VKRPbcSYDL3nWd3kJ8kB75tFKaBPv7kIjOokOAiHgMv2QPQaBnRtUsbS%2F3rUV2W4v7KROG5AsTNLFfxrc8SDiR4NEOlU1hlkQv4S9jWNkquxVSQQbGbrNUVJPV0b9CBmncKg8Av4P2bPJazAbhGDpBxh%2FA%2BnJVmjoWlGeXTWod&X-Amz-Signature=6d17e40a5ce203bc84a4707029b3cd433b4fb8dee402c88c0f6f40ff7909f9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZL5UHIX%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHCmi7aRwl%2FaKS19kCd0fFoSHKmwzt57%2Fc%2BUrtBUoQnwIgamKfmev53AbA72oBQy6FBfzNSUmlmekkgaU9EakDoqIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhJ1CbyVYQ4pICBLyrcAwy26mCEal5GX3L%2F5zp%2FGapepBimy7Ksdqz85zD4PnGTGm3BCktp1iTQs5Sp9mgPOPtBSGQAkC%2F861mgmJqjOWEavYzQ8F0QEE5NX%2BCYpd7wPdzTTLr5Ki13%2BX2OhQqpXoo0%2FMPqwSMpojh5gyOdYOwFUo3ylm244KRN07D9Z6BrCdUqC8wJxeclfYxWmjElFhRdAAnIE4JhJl1w2%2BV6lZBGdHhjepQAyVlt7YCIAEodN%2BBrYqotU6e8%2BK4WSSjEprtnMfidxQggb3CfOozAfcBzrLaS%2FMJXGoaZei%2BbMxvHPHjSsMr%2BB%2BHUfP1XAFm%2F4bah%2FZ6ipiJ%2FiDYWOUu%2Ff5By2TFZMRd9ieHI7aOZo%2FnUBOwp9k%2BDWVImE7qslNA3F%2BQ5rlkiTjoW8PasLjMSjKdlSYHfsQy9zPlx3V53IXnB7%2BFFcmEvmxfe5hY%2BP2OF9EXhNHQ%2BYZkXn%2FFVrA8SVf8%2BBsmIYbZ2IEyFI1ikutwoQ4x0DUv3hRbOhm4MAL6Ooit%2B%2FqOYa2phD0BwUS9igypZ24FoWoJeayFxO8n4yn9LxacrEJl8wHIAET9yOrJLr%2FZLRSF0a1w%2BB8kAohpPqGC%2BF9syTUSQhZGchdnzb9yN0%2BsZ3ZzCCA%2Fb5lgXMNb0gMMGOqUBKAm3xkZ%2BSef9hDWUfoPyfiWNjj3e%2FSbOEam03pCYviX2Y4qGcjNij5sweJMfIpeN7ZK%2F6jZMpMcZjJJpOkECYhYpts3rsYlw%2FX66yJmA2BEQK8vlU9w7aFlhIDuJ5I2%2BnS%2BE%2FtitJyRw0DfLtehXokOkkHx65v4Z6uqgOziGVKKiDMWgASq5IfKKziSQg7qXx%2FVlKFEEUmFHzwfmiORVV6xR%2BC4h&X-Amz-Signature=6cb5e699e5544b67418cbae7ba118d67286cdda1cda51120efae51f7148be24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662FGBMMF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjP7ahhfy03IP8z3tUhJ4%2FqR3NWWdUVq7vSCOlIWlnDQIgG4gdc3%2BA4F1C9Ixwee%2BNFzwbz0HkXYOXT33GV0kofVUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcGAq7DQ%2BXEVv4QaCrcA8jwlp6nLZM%2FjvSUE4iL2igdk02KZ4BIAFLjs8atsHeJUqPYM1J0%2B5L8eFzFU1nDMwDBgeCKWBDbRpkxBq3e2hZKNQQ6QDr2rOHHiNiRL3839iJ9GSYyNZp5XgSlOKAcE0aXYX1m04Z0nuZB4IDQuFcMBZ%2FUFmXQ2WeBQRonfBVFd0KGS7iDmPtsA2HS5XKMxOU7EIGePJX91jzrq3Bp%2B2wY1rwfIx2jY1wLqIP29TZYKWcVsTe2iRiXhLfG1DtX3MFzP9j2kLdxdbbhW5xFg1BRDceqhyYI0pnzf%2F%2FgZp1m%2FVKV2dBlS5csCecKOvubZxnxw50UlKO7Rjshhydb3dt7tfeMG3zt%2BtdMBjEwJutDIPqU5I2lGOUfXplG1op%2FC09X0JWPAtTqVNDTmaD85pjgUcTCV4brSrHCdMsBuU0KwDjZ82Iz9D%2F194Y11MMwTIhNrCwM%2FHWJWe7X00NU%2FKjBXQxegnaSPs95ITIVD%2BjvI8ld8qe1FzaY02b264VKN7Jp8I%2FeVa3OzdAQoG1Mu%2Bcwi02ulIRIwqgxCt76MIZFeZcHWyjJwcmkTFD6YTT9xKUzILQRJx9P5vM3hK1BPr4ELDK1639bju7WWQdnasCEgiVVyxb1PJTcMZtAMNP0gMMGOqUB6uunjbe3tO00QrrvjbOsgwf%2BSpjvZg0%2FM92vo0nNYV9d2apk3c7vJehJhMj2ck7JGV9b39DNsoNMnS9jjKnjkdImw%2FamtH%2BfESHj6J1wC4U%2B%2Fr36MLpSC2b7dxvUMZDHCouMgUkTP3hESpVTLdzvj9ZBRYWe%2FIhz2z21%2FNgp3w1HawzA%2F42a7LWRE7SrpjFiNjY8RpVEj0O02rQX0ZY0NmSiVLWK&X-Amz-Signature=efc5947d089ed8a86b1ab4e43ec592e2615f10dff8b7b516f97b7d1d9faf48c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXT6TBHA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEXwWMBthfUhfL3wQtPwWRnGo4h99tR9PECbWnfPGjLAiBvKdF%2B%2FbMdeMCRQOJDin9mJ4ipK2CepwoZYzp47vtuAyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML1avqLk1zBgLOs9CKtwD0zUHzUVMRBIVtjUEqs9Juxdbq4GGjCYsikMfvSfikgzaXWYWnNrhcUD5UuJmJK%2Bs0bt279gzMTLZOj3ilQ2h1RWBMZdThiPhmdjHZMkbxDvd3Wxjy%2BQXpfEdh6%2BzZkvtfzkDrvbRV%2F2QPa7H7CdPJLSYJa5RsANOu7qepE6KycreZJyNWF%2FqhjSlcRf%2BfqusCMsfkyRXPetoP90daKiJrQLPJpV9T7%2Bo%2BPEwGYfGzejv%2FJe3hSB63aQFdGFBC33wFoQRpcRDOQmR9%2FbVXhkDKI8q%2BNo41u1JilTiB7J6nZXg5pyBnnKLGbziabUE5VJoPX%2Ff4EMf%2Bjtd%2BI9BzDRHo9YePrsPhDyB4%2Frt2rYh%2FxRRkZ6DsP8Q2eMOWTBf0jKvN%2B32UxxmIE0Rx9nSoweEi2%2Fqhfvr0J1IiOc0NIu2yBCyCgPkyCQrB6DBmh603Ayuab5UD1Jx3284%2BdnzDpWszeIJuX%2FeOdBxDHyk25btY7yDDKlRCFNUiN90tA88joplEVYGi0NOzMn6dMIW1m%2BuIoPefepc8evfMailxu2GXixR3Znl8JgoOzFQrgMm5PULKgehtF32E%2F0VNLNCX2MmVfLEnxLKcyhBo2DWjgTXXQIx5eViMXxxusICaBAwtfSAwwY6pgEj9PJO%2F9hcZP43KLj6SnnjPINzJAQMdWkmoafLWZT%2BNlf60GUpy2VKRPbcSYDL3nWd3kJ8kB75tFKaBPv7kIjOokOAiHgMv2QPQaBnRtUsbS%2F3rUV2W4v7KROG5AsTNLFfxrc8SDiR4NEOlU1hlkQv4S9jWNkquxVSQQbGbrNUVJPV0b9CBmncKg8Av4P2bPJazAbhGDpBxh%2FA%2BnJVmjoWlGeXTWod&X-Amz-Signature=9fb0e406788c99185497014c4a6da39924850b647986b941731581dbf3fd6379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
