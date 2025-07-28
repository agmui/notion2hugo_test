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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OTIZZ5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDyzdMoslbBssHxozJhSOzQavYHbceGEJvct5Zs6zAumwIhANeO0IbvwHudhgoOIspPo7XsZ18v8luZllm8EdS0eNhdKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2j3933DcqsDJrEG4q3ANXyNkT9XRdxnA7U29v2cn8PVPRTkCa1nbYDK0R4u77h65C05%2BA2H4Whf36QxQpVKMtNcqKYt5PF6KuHc6cx%2BHoinA35g6GKnP4mciTXO42WmedAd2lUVgjiV7Og4WuO2vvsT4ynqzTQOdkRMgkZ038TiGaY6RI1SYrQIXpRvAns75gQKtIUzEW9ftf2xp5pIzE5kWSw6Yn6m8pI9zkfOXyAwICWKWMB5zD20RzeBgy%2BjsSkftTu0vsUtbUunpu1oGGe7QEB75tnDLsF1jz9s81PgsRGkqz3klvPKUEl%2BKOnCPJponLSimzG2ZM3qXdC%2BAyFItBrsnYIYovl16u7TKbK77L0qnFamGxs2MSGtZuoiOuqaHkzBK1q7uLETMWRpCftflSVuxat9OAENGs9Cxv7U6Z8Zhy%2BwaokoC15vqouLXzxy1jpgQ%2FtlzIIuwO3RiBhShkmMPxAyjdR05lj05QZZGmTeMeX8xH2%2F%2BE87d4jxHWsvDmCLU98eBuZqSWezlOKnPGVFVUD3dcOhO5KCv9lM%2BUJ1lKhUUdU3PVkrg%2FnwboQDxQQgb%2FK%2F6PmsE9XklSFGItB7LP1bo70k%2FiahGzm5RFTa%2F75mA%2BX1ASI6fa9v361a9lq7iTMqgwgDDgqZ7EBjqkAT01%2BZ7VhsjfhOmzaqonvG9UbgUoBzN3x%2FVA3M0mT5v0XSnVN8BFUTyKS74eD6gJJu5d6uQOPEoBtxczHDzyr77GdVGbVCL0Y1ZLj4ODn8UXt%2FKc3gbiaLZIjORpvikIFpcnGSxBYEnb%2FXODkHuQiUVQboBrwvP9UEpqVVB87K6fo0UOBTBaPDQ00LJsL1lISIG36pVuOUlaT8UBPlWP%2B1TdmmD6&X-Amz-Signature=72a0059761906ab354e8aebdb9bdbf6bed019bf803411cec3b0d6a376b789425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OTIZZ5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDyzdMoslbBssHxozJhSOzQavYHbceGEJvct5Zs6zAumwIhANeO0IbvwHudhgoOIspPo7XsZ18v8luZllm8EdS0eNhdKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2j3933DcqsDJrEG4q3ANXyNkT9XRdxnA7U29v2cn8PVPRTkCa1nbYDK0R4u77h65C05%2BA2H4Whf36QxQpVKMtNcqKYt5PF6KuHc6cx%2BHoinA35g6GKnP4mciTXO42WmedAd2lUVgjiV7Og4WuO2vvsT4ynqzTQOdkRMgkZ038TiGaY6RI1SYrQIXpRvAns75gQKtIUzEW9ftf2xp5pIzE5kWSw6Yn6m8pI9zkfOXyAwICWKWMB5zD20RzeBgy%2BjsSkftTu0vsUtbUunpu1oGGe7QEB75tnDLsF1jz9s81PgsRGkqz3klvPKUEl%2BKOnCPJponLSimzG2ZM3qXdC%2BAyFItBrsnYIYovl16u7TKbK77L0qnFamGxs2MSGtZuoiOuqaHkzBK1q7uLETMWRpCftflSVuxat9OAENGs9Cxv7U6Z8Zhy%2BwaokoC15vqouLXzxy1jpgQ%2FtlzIIuwO3RiBhShkmMPxAyjdR05lj05QZZGmTeMeX8xH2%2F%2BE87d4jxHWsvDmCLU98eBuZqSWezlOKnPGVFVUD3dcOhO5KCv9lM%2BUJ1lKhUUdU3PVkrg%2FnwboQDxQQgb%2FK%2F6PmsE9XklSFGItB7LP1bo70k%2FiahGzm5RFTa%2F75mA%2BX1ASI6fa9v361a9lq7iTMqgwgDDgqZ7EBjqkAT01%2BZ7VhsjfhOmzaqonvG9UbgUoBzN3x%2FVA3M0mT5v0XSnVN8BFUTyKS74eD6gJJu5d6uQOPEoBtxczHDzyr77GdVGbVCL0Y1ZLj4ODn8UXt%2FKc3gbiaLZIjORpvikIFpcnGSxBYEnb%2FXODkHuQiUVQboBrwvP9UEpqVVB87K6fo0UOBTBaPDQ00LJsL1lISIG36pVuOUlaT8UBPlWP%2B1TdmmD6&X-Amz-Signature=0c25c8ea8e78305cc6921c93540a11e814bfedd7e7bfc593ddd8299689207971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OTIZZ5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDyzdMoslbBssHxozJhSOzQavYHbceGEJvct5Zs6zAumwIhANeO0IbvwHudhgoOIspPo7XsZ18v8luZllm8EdS0eNhdKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2j3933DcqsDJrEG4q3ANXyNkT9XRdxnA7U29v2cn8PVPRTkCa1nbYDK0R4u77h65C05%2BA2H4Whf36QxQpVKMtNcqKYt5PF6KuHc6cx%2BHoinA35g6GKnP4mciTXO42WmedAd2lUVgjiV7Og4WuO2vvsT4ynqzTQOdkRMgkZ038TiGaY6RI1SYrQIXpRvAns75gQKtIUzEW9ftf2xp5pIzE5kWSw6Yn6m8pI9zkfOXyAwICWKWMB5zD20RzeBgy%2BjsSkftTu0vsUtbUunpu1oGGe7QEB75tnDLsF1jz9s81PgsRGkqz3klvPKUEl%2BKOnCPJponLSimzG2ZM3qXdC%2BAyFItBrsnYIYovl16u7TKbK77L0qnFamGxs2MSGtZuoiOuqaHkzBK1q7uLETMWRpCftflSVuxat9OAENGs9Cxv7U6Z8Zhy%2BwaokoC15vqouLXzxy1jpgQ%2FtlzIIuwO3RiBhShkmMPxAyjdR05lj05QZZGmTeMeX8xH2%2F%2BE87d4jxHWsvDmCLU98eBuZqSWezlOKnPGVFVUD3dcOhO5KCv9lM%2BUJ1lKhUUdU3PVkrg%2FnwboQDxQQgb%2FK%2F6PmsE9XklSFGItB7LP1bo70k%2FiahGzm5RFTa%2F75mA%2BX1ASI6fa9v361a9lq7iTMqgwgDDgqZ7EBjqkAT01%2BZ7VhsjfhOmzaqonvG9UbgUoBzN3x%2FVA3M0mT5v0XSnVN8BFUTyKS74eD6gJJu5d6uQOPEoBtxczHDzyr77GdVGbVCL0Y1ZLj4ODn8UXt%2FKc3gbiaLZIjORpvikIFpcnGSxBYEnb%2FXODkHuQiUVQboBrwvP9UEpqVVB87K6fo0UOBTBaPDQ00LJsL1lISIG36pVuOUlaT8UBPlWP%2B1TdmmD6&X-Amz-Signature=8282f9acad1430f25cc4d5d7ca5a36bb0a717f44f4224b99656d104c9eb450fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6S6XIS7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBa4yUUKa7g3ZreN3QCxyFtl9iyqaSof0H2TU2onHg34AiBu9XFD7kQDBEdKJANQAiMypYiTi%2F64%2Fvsyam4hcP4YkyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7B%2BlXFjBca2wniCxKtwDh0W55N%2FPI2CrezWO40r1TfRLbQz%2Fg7kgXvD9dGmFeZLCIskC%2BiZBLIhzPWcf3XJi5Hun2KHH9apKu8dqhoohH4odGQk4F%2BqOkPYostceGvtchGTAMS%2FMPL7TQbQwxH6Ee8vla7NsOvRCyj6WVMGKG9clAp6%2FiHDwjJ%2FeNm6Aokfw6iVMyi75OB4%2BjtCJrLKvxwNarOLhhBoFnMr4PaXa4Rqt%2BBHniPRtLMJc2ZMs6T%2BM34jFoE7ivrn%2Bias5vw%2BMuxPn6ZqdOdQefMiCVndusX0pHNw21itoio%2BcqNEsjK%2FqzdW2mzUjZpZrg%2BBQvsYMOnGCLx1LZduMBSWA7bpIoCBQW%2FTCam13f%2F42rO%2Bu0n71hy0Q3kWa5aZ5EtK0WdzPqTD%2BS5Vbt0PEnS2ONKwEcn3gnAKNMTfEI6dRpVsZkv58cusp%2BKyXX5p7RXU7ewIjVcK0yawuG%2FVl9f%2FEkzU27e5IAqibmfOYUs9aXFWk%2FmkHxS8cwqDmXsqOSTCNaLFv4wKPIzmafDROn0Dz08XpUbOA5aa988Rcea3ZZNShSx23ZviV7OFlEGdp%2BXIeu8nH7VpnIshc5w07IuTtNWvOhRMDVft0oy6IAlNJoAWiAJ9C72qVltvpjFhXFkgw7qGexAY6pgGYD4%2B04asVinWrYjOd3pyRBnWOwgxJBiRO8G29MnOVSI4ULiM7%2BMDZzywthT1oScR2uSytfm2Ul7M6CiLatOk4RPEBxFs9P7s7QDcr%2BPR7a%2BtPzqw9bwHyRx14CgOuYMjBO4nAz%2FPlKHjXL4aUWx586dR99OVHx7hIhrKAQr8oVi1BWtRZc%2Fz27zzh2P3W5gSS%2FRVs8O%2FAwl95VnZaYBIdYl6FKZ2g&X-Amz-Signature=509d83d131391303516d9b78e019bc1a33ff2a59d6707a92158cad6558dc977e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKTUXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDtGwYMlBA8Z%2F%2FQDtm5tMUG28cpBwNSzUXCnu84IzSZGAiEAlheX0PfP7sp5TEG35%2FmXmwlTxBe59KrpeC%2FB12VGiDkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOECCQyHo2eyH9xNdyrcA%2BapmeCcHWqOqaG9wa0N5PVynzu%2FL2juMCUzLW9wlPbgSUiq0x1h4XoCxT6lPC2EpT86UvYtyVugBzb%2Bfk5yav7MXMsoKd%2FBg8tP%2BMhTT4CYw14fkQQJ65dBb%2Bbqm1lHjxix6F2YQpvYWuH7siTPDJ84HMFlSz4FHhNJH%2FKI7M%2FPuk4tUIfjKskacXT%2FHHiPjf8IrSIX%2Fk7HXC%2BiUqoJ1QtRWb3KsVYUx7nQ69nYAKaKTf%2F1q32UGMMU%2BFldULonHrdM7Q47M1hcrmg0WBAedsgBNTkRivt%2FCIJF9kOxxuWCFffi3ZoBJCffdEZ3DaI4wrfIfg5zged9mS%2B%2BX0Ysm5OBeNoTV773B2e7vQELqr%2B2L7UrThV0pqIj4yDtg3LWs0Jh3mXksw9HyNyU3VqR3lUtvJgK6%2FZ3%2FBnVUaiHjojVgHZbiiYemoFmm5rU02Zfki%2Fj3Nwsr9%2B7rS7OUj7uRuJuytWSWHmyFBPLZ5z%2BCfF8SVAHd5MqtSClIWMen0t8w12Pp4Xxrv%2BnBkfZxSUdBigB1gGVhuzsAQYUdeiBqSb1SO%2FEgS%2BYcD1T4tYmJbiiCBqI6xeYMQK64N8JO6hV8Lq6OA1jQJnvOd2UfbjypozWHFkSSTwqP9CW21KfMNiznsQGOqUBV4IH33UhIAhLkoY6yA7NkwhnmLUM%2FNMRfEyIjig1kLE822pkPLZMKbPOKWVvo1e%2FRzm%2FdfCFK1%2B10MRJPLvoZ58NIZ77KzKbm4%2FTzW35wLdSvdSAGbYW%2B9ezHom6KG1Pu9XcVLWSZ7AdzMj8ZCvSXPTdMOlfxblA6F2o%2Bzng0E%2BJGHpsB8MkQI95lvYv7RB0i9Fb8rygz6xlsYcAJb4X2SMfsSFR&X-Amz-Signature=ee614dfb77b3b90dbea0409f1fa9caa5c70e0e4a8d92ab3649ce9a9907e5e794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OTIZZ5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDyzdMoslbBssHxozJhSOzQavYHbceGEJvct5Zs6zAumwIhANeO0IbvwHudhgoOIspPo7XsZ18v8luZllm8EdS0eNhdKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2j3933DcqsDJrEG4q3ANXyNkT9XRdxnA7U29v2cn8PVPRTkCa1nbYDK0R4u77h65C05%2BA2H4Whf36QxQpVKMtNcqKYt5PF6KuHc6cx%2BHoinA35g6GKnP4mciTXO42WmedAd2lUVgjiV7Og4WuO2vvsT4ynqzTQOdkRMgkZ038TiGaY6RI1SYrQIXpRvAns75gQKtIUzEW9ftf2xp5pIzE5kWSw6Yn6m8pI9zkfOXyAwICWKWMB5zD20RzeBgy%2BjsSkftTu0vsUtbUunpu1oGGe7QEB75tnDLsF1jz9s81PgsRGkqz3klvPKUEl%2BKOnCPJponLSimzG2ZM3qXdC%2BAyFItBrsnYIYovl16u7TKbK77L0qnFamGxs2MSGtZuoiOuqaHkzBK1q7uLETMWRpCftflSVuxat9OAENGs9Cxv7U6Z8Zhy%2BwaokoC15vqouLXzxy1jpgQ%2FtlzIIuwO3RiBhShkmMPxAyjdR05lj05QZZGmTeMeX8xH2%2F%2BE87d4jxHWsvDmCLU98eBuZqSWezlOKnPGVFVUD3dcOhO5KCv9lM%2BUJ1lKhUUdU3PVkrg%2FnwboQDxQQgb%2FK%2F6PmsE9XklSFGItB7LP1bo70k%2FiahGzm5RFTa%2F75mA%2BX1ASI6fa9v361a9lq7iTMqgwgDDgqZ7EBjqkAT01%2BZ7VhsjfhOmzaqonvG9UbgUoBzN3x%2FVA3M0mT5v0XSnVN8BFUTyKS74eD6gJJu5d6uQOPEoBtxczHDzyr77GdVGbVCL0Y1ZLj4ODn8UXt%2FKc3gbiaLZIjORpvikIFpcnGSxBYEnb%2FXODkHuQiUVQboBrwvP9UEpqVVB87K6fo0UOBTBaPDQ00LJsL1lISIG36pVuOUlaT8UBPlWP%2B1TdmmD6&X-Amz-Signature=d743cc40a12c9bd5352fbc2df9acf81140cf1111d9f8f33f7b8f62c0d485ce13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
