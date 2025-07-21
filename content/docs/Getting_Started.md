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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFEKCOL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbD9e2Fx2%2FgFq0rbwCLeFiOjKFphuUT24Y0iCl7dBRTAiEA1WjIhksBT04QN%2FXqtGK%2BttmlklL%2BMOWSewZnwPkH1NsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN90BsA3t7VVcu7nbircA7t5%2BD0jDHbMKTQmE9Aau9i4Q03exQ6tcXaTc1dUfsRZVeC1h7C2bLJ04OTx2g5LcRXcoebOnjoOGtrh88No8p%2FdpHKlcsjuyHIhuA4943JqmGccsY%2BcOCgYAQdPwiq6uBifkXIVyOc1AKlru8i2ricqjl0GJt2rFa2%2BbsNinIeONK1JfH1Nx%2Bvy18KsYgCmtimko3zIWBEY0GknTjiJXhSIQgG4lxb7CBhY9WYqY27e9C5bSCGBDjuut8PuYPcQSHfJqN1ulthGQXVqUIRVkrQuUBOVUSeO8h1rs%2FHQWezuGgNjmOC%2BYlvJam9Tsnbe2Ze1b4ciqP31UOifz1o9APegUndDaEpbsOdTXcB%2BNhDvvvrSmV2OtdsIjMzxRYGsI80z1b4kzyuptCVr%2Bm5r%2FK6c%2B0nMDqjWoPvV3GZFnzzkc5DZmgaLHzH6S6YylCCZlDsdt%2BhJgpGIGWDSwhSyOH8yTl01wbzbcK4TIFyfyg82XMOoJFTnRpzVshp4UOSSmtEccZaOCvFj70%2FWdM6eDZ8nm22fClPzcRfC3ODgmXPBS29IZ%2B9dGQpqR1DIMY5UFguf7IKHxBCKRb18h1NI5Dw3CIn2KiZ5sGZajL1lm80pYLZS8JF3dQao%2FEkTMNDH9sMGOqUBERjN%2BeX9BmWzwWtMRioArAr7yv7rU1hKAasqTDGZpJv8TEPCBo88cOlhP7AEo70SRxhBoDIcxuY0of8Swk5eXCNIYH121meXiWT40WM3eILtInzj0N9PCZz7Zh3HLJdm6oXDcg3spTOd3M%2BcxJvf5ez3u9yryKjIgsUaOBJ%2FMdc5k%2F9n3PYcjOMOsZx5twMhVY3Yv8VwiLkNNJyGnoKdfdbH2Hiw&X-Amz-Signature=466514af9bdd6f1adb2252a766d8aeff1aa4ddd1877b24083580c4958bf5a403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFEKCOL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbD9e2Fx2%2FgFq0rbwCLeFiOjKFphuUT24Y0iCl7dBRTAiEA1WjIhksBT04QN%2FXqtGK%2BttmlklL%2BMOWSewZnwPkH1NsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN90BsA3t7VVcu7nbircA7t5%2BD0jDHbMKTQmE9Aau9i4Q03exQ6tcXaTc1dUfsRZVeC1h7C2bLJ04OTx2g5LcRXcoebOnjoOGtrh88No8p%2FdpHKlcsjuyHIhuA4943JqmGccsY%2BcOCgYAQdPwiq6uBifkXIVyOc1AKlru8i2ricqjl0GJt2rFa2%2BbsNinIeONK1JfH1Nx%2Bvy18KsYgCmtimko3zIWBEY0GknTjiJXhSIQgG4lxb7CBhY9WYqY27e9C5bSCGBDjuut8PuYPcQSHfJqN1ulthGQXVqUIRVkrQuUBOVUSeO8h1rs%2FHQWezuGgNjmOC%2BYlvJam9Tsnbe2Ze1b4ciqP31UOifz1o9APegUndDaEpbsOdTXcB%2BNhDvvvrSmV2OtdsIjMzxRYGsI80z1b4kzyuptCVr%2Bm5r%2FK6c%2B0nMDqjWoPvV3GZFnzzkc5DZmgaLHzH6S6YylCCZlDsdt%2BhJgpGIGWDSwhSyOH8yTl01wbzbcK4TIFyfyg82XMOoJFTnRpzVshp4UOSSmtEccZaOCvFj70%2FWdM6eDZ8nm22fClPzcRfC3ODgmXPBS29IZ%2B9dGQpqR1DIMY5UFguf7IKHxBCKRb18h1NI5Dw3CIn2KiZ5sGZajL1lm80pYLZS8JF3dQao%2FEkTMNDH9sMGOqUBERjN%2BeX9BmWzwWtMRioArAr7yv7rU1hKAasqTDGZpJv8TEPCBo88cOlhP7AEo70SRxhBoDIcxuY0of8Swk5eXCNIYH121meXiWT40WM3eILtInzj0N9PCZz7Zh3HLJdm6oXDcg3spTOd3M%2BcxJvf5ez3u9yryKjIgsUaOBJ%2FMdc5k%2F9n3PYcjOMOsZx5twMhVY3Yv8VwiLkNNJyGnoKdfdbH2Hiw&X-Amz-Signature=2c3685afc1c094174649a9f782008b4d22786d72f026606c449f83ac141595d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFEKCOL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbD9e2Fx2%2FgFq0rbwCLeFiOjKFphuUT24Y0iCl7dBRTAiEA1WjIhksBT04QN%2FXqtGK%2BttmlklL%2BMOWSewZnwPkH1NsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN90BsA3t7VVcu7nbircA7t5%2BD0jDHbMKTQmE9Aau9i4Q03exQ6tcXaTc1dUfsRZVeC1h7C2bLJ04OTx2g5LcRXcoebOnjoOGtrh88No8p%2FdpHKlcsjuyHIhuA4943JqmGccsY%2BcOCgYAQdPwiq6uBifkXIVyOc1AKlru8i2ricqjl0GJt2rFa2%2BbsNinIeONK1JfH1Nx%2Bvy18KsYgCmtimko3zIWBEY0GknTjiJXhSIQgG4lxb7CBhY9WYqY27e9C5bSCGBDjuut8PuYPcQSHfJqN1ulthGQXVqUIRVkrQuUBOVUSeO8h1rs%2FHQWezuGgNjmOC%2BYlvJam9Tsnbe2Ze1b4ciqP31UOifz1o9APegUndDaEpbsOdTXcB%2BNhDvvvrSmV2OtdsIjMzxRYGsI80z1b4kzyuptCVr%2Bm5r%2FK6c%2B0nMDqjWoPvV3GZFnzzkc5DZmgaLHzH6S6YylCCZlDsdt%2BhJgpGIGWDSwhSyOH8yTl01wbzbcK4TIFyfyg82XMOoJFTnRpzVshp4UOSSmtEccZaOCvFj70%2FWdM6eDZ8nm22fClPzcRfC3ODgmXPBS29IZ%2B9dGQpqR1DIMY5UFguf7IKHxBCKRb18h1NI5Dw3CIn2KiZ5sGZajL1lm80pYLZS8JF3dQao%2FEkTMNDH9sMGOqUBERjN%2BeX9BmWzwWtMRioArAr7yv7rU1hKAasqTDGZpJv8TEPCBo88cOlhP7AEo70SRxhBoDIcxuY0of8Swk5eXCNIYH121meXiWT40WM3eILtInzj0N9PCZz7Zh3HLJdm6oXDcg3spTOd3M%2BcxJvf5ez3u9yryKjIgsUaOBJ%2FMdc5k%2F9n3PYcjOMOsZx5twMhVY3Yv8VwiLkNNJyGnoKdfdbH2Hiw&X-Amz-Signature=1c0edd2c6218e9a86f7bd25777336a2e1fc0010adb3a929b25f0c2c4eed83ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRK4BSGP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz4pAos%2FqbOT9UR2YOq%2Brole2UevVf8z0a%2BbR5%2F1QoeAiEAmsRcfJT9Rtp2I4E9eyQ6SmwLY7ejKsAqZB%2FFY1nF4PEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9rjQhic9hbZYnsIyrcA0SJKSGJTZ2WTMNA3i15%2FbNmRpqG9%2F3WfR4N%2F%2F030wyQZddOucKsprXPO%2BVGZY8oGnRmVjXUvIBpzVmposSxF9pRbzGVNsVZ1zXMHRGWjwvrkI1zFCWOMUuZ6NQgLDXJz1IKwfopRXnmfFuP6Q%2B2KZe9UIdkipvnYfJVRz%2BGPVikQafle4rfpq9%2BZVWrsEDC71pW1VcwBMCwCvqiIH5coNa7%2FS1%2Fi9Dh8V0qOXgOACFlQr4VArEbVXBFKP0YOXVVzE3fMDJW59rOaolKo7iBVFFp%2ByGQBSlLMtNPblmAUHlEmVYQHiI729KCgOo98UkFTUd4QpCF2xL6eIy5kHGtJDiQx%2FoF7wn3RCof5Uz7%2BaBKeCmRTkgATEr%2BophZ0fUtZlTUOb%2F9RpkN85wS0hYuTUFa8S8Mcb%2BN7eVeBZR6ZaYlnjlpPGmnTw3Logdsv9j1oRdReTNl4CB4AW%2Bg%2BtHYaPPbL2R8HtuIK2UJqpqqdUR4cyA47OkULZ3Egs1d%2BOJsSkBxq5nOYkaXQOgObLhPRodp8MuIf%2FjC6Nd3RzEo7FlforCjBmizpqAiQ2NNK7dLo7VWm19e2ccj25aeR05fxIMy53EE8YG8bfdJnURoUSR0wkhqe6hIgH5Kto5RMMjI9sMGOqUBAKvkECChlr%2BCClgxegjErmiHRQqDDiXKAIgbsBm8BEAZTUfQK6ci%2Fb84meJwk5XZLtjeI2IaMUmRua3dtfQ7VKPah4%2BMZstqWmrDGca13zHNnsF5uATRjXTN4uzjKx9%2FZfXyx%2BZu3o93SZVC%2BV8svpTDNmjd2LkYx8UCV5OS4s99L6kSlkDQcrr3AdbQNNKmtA0XZ7A2PIbsQb5LigDx0FGh%2Bg4W&X-Amz-Signature=866398d32aa6ceec5918d8dfcbf2ad07f812a0ffaab21a1adbdc8dc20ae86fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YILL4X%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKq3228ELYOyn9NSg2c9GTvyS4%2FwwJKXIwnEqo27VpYAiEA7nVcAu8nJX3y%2BTQduXkWuXqRGByXoTF25ARMAVfZpzcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSqyzszsFmGEGxSXyrcA2Ba8VvxWszCeuUY%2FTusULI3A6Z9WgdFulb49KH3QViBTYRlsHOe2LRmTHDbe3qJrHIuJ1WaBBKAVw9CraUrWU%2FCca%2Bc3V0kpzQBghCn1gRy4c8pL1PgT8gND9FuSVk%2FCXGU%2Ba2uqA2RvvNUzsRCVlEuC7blVdnLvwX2RnjKiSAFpWIeZ73cN4O11l5LsUcedcMbPE111PLxixUr0%2B39sSuuEUl7m%2B9PND1eLWeJeGQeHED90vaVhbBl2OEGMvMqSy6sYMKp74sgB3T4eeUgO9IzUud57%2FKaLDnvks3DVJo26TIRm5FpmOpBDobWxxdw0oojTAGbtESMuZs6RMROARS%2Bm5620d39vj1BueUYfmrPsofoXjDBZP5b%2FWO12iDfP0Hidpxh8ne9K%2FMpH27dkXBOVEa%2FcmeQLu5I5J3fIFeIlRvM132c9BKQoxqDEGZWkTUg8%2BrrwkkPWEL8z43wC6nMtkjDdaeZNvoPZ9w2FGT5caI2y%2BSfjmOXAoTWFe7DcJMuCDZYaMgyvxgP51ZzkOQmKV0ARlgTJaFIsCSs2Z6Z5mGGJsZvE6nOhjYM9wMATtf2zHSJaBO%2FdWfRk0tT6yDtNuKDU4oO75N3DJXzsxvZJrJot8eVifkiKR0vMJ7H9sMGOqUBovzLcaTenML8QhOIsbZtEvD8%2FLilBxiOfrKx8P06McsznvdK%2B3vlp%2BSh5E4%2BMxjh95weZuzk7CHb6hhOq2%2FfHi3e5uZhdcYg26eLrc52g0VxK49OXDUvokx23WywwWmHPOTJftZcOfOP%2BgXiRDxiK5uZRhN5RmIsPiM%2FWwAsMS3IRWuKxJa8adcFSgeZiUIwEhNYIA%2B7wQKPlXKg%2FmQsx9N2qv0c&X-Amz-Signature=891558e32da72d34f94f60195b94e6481e27f289225520b0b76c0dd6e8347460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFEKCOL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbD9e2Fx2%2FgFq0rbwCLeFiOjKFphuUT24Y0iCl7dBRTAiEA1WjIhksBT04QN%2FXqtGK%2BttmlklL%2BMOWSewZnwPkH1NsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN90BsA3t7VVcu7nbircA7t5%2BD0jDHbMKTQmE9Aau9i4Q03exQ6tcXaTc1dUfsRZVeC1h7C2bLJ04OTx2g5LcRXcoebOnjoOGtrh88No8p%2FdpHKlcsjuyHIhuA4943JqmGccsY%2BcOCgYAQdPwiq6uBifkXIVyOc1AKlru8i2ricqjl0GJt2rFa2%2BbsNinIeONK1JfH1Nx%2Bvy18KsYgCmtimko3zIWBEY0GknTjiJXhSIQgG4lxb7CBhY9WYqY27e9C5bSCGBDjuut8PuYPcQSHfJqN1ulthGQXVqUIRVkrQuUBOVUSeO8h1rs%2FHQWezuGgNjmOC%2BYlvJam9Tsnbe2Ze1b4ciqP31UOifz1o9APegUndDaEpbsOdTXcB%2BNhDvvvrSmV2OtdsIjMzxRYGsI80z1b4kzyuptCVr%2Bm5r%2FK6c%2B0nMDqjWoPvV3GZFnzzkc5DZmgaLHzH6S6YylCCZlDsdt%2BhJgpGIGWDSwhSyOH8yTl01wbzbcK4TIFyfyg82XMOoJFTnRpzVshp4UOSSmtEccZaOCvFj70%2FWdM6eDZ8nm22fClPzcRfC3ODgmXPBS29IZ%2B9dGQpqR1DIMY5UFguf7IKHxBCKRb18h1NI5Dw3CIn2KiZ5sGZajL1lm80pYLZS8JF3dQao%2FEkTMNDH9sMGOqUBERjN%2BeX9BmWzwWtMRioArAr7yv7rU1hKAasqTDGZpJv8TEPCBo88cOlhP7AEo70SRxhBoDIcxuY0of8Swk5eXCNIYH121meXiWT40WM3eILtInzj0N9PCZz7Zh3HLJdm6oXDcg3spTOd3M%2BcxJvf5ez3u9yryKjIgsUaOBJ%2FMdc5k%2F9n3PYcjOMOsZx5twMhVY3Yv8VwiLkNNJyGnoKdfdbH2Hiw&X-Amz-Signature=8b5cb6e905d53769d5202bbd3f903619b8e6b3d9b1163b46d4a54430e2b076ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
