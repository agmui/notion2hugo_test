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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIWQ2OI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBbPSv5Zdcf6p30W8gICMQJtCG%2FCvvvANAT6%2BDYqmPZAIhALgRNVKZTkDH8zKBbVgwT33Fex324kz%2FsZl5gQ7sNT6nKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8GZcRw048dmc4TNYq3APX8S%2B0b3PdNzER3YyKGj7a3VSi%2BozXKYqupShix0Zi%2FW8UYSySekr3dM8zrJLUQwcq2MdYZczp9HsEa0gEcM8rqQndbwoYC7x4AfQSE8WppQdACXnZs1QPbYesQBcxRPe4sxV2G08O5Ak6BEtMtz4Wrf292NzVfCSV8Nc6Ci0gxrK2ofnWqUI7pU2pn9FYS9hMBVJ2cSC47pd%2FPr37DMOGJq9F83Hao5R%2BKxj%2FELVla2G2TT7iGo3DHMCevukQNlGJjberd1ND1oyeuH%2BhJCBrS%2BchdDJV3PpfogI02c7P%2FA5H1d4TvIyGyfh22OW%2BNzXEvopY8eEEQe%2F0KFFBywM4XVwyklMxYCa6Cd71TKm%2B83FXXA1J%2Fjlvtx1lqgDbVidNBEwIRZnjkff0FQpns2c153nXvtoxBmpY43sFXFV3M%2FwM0eaBNIdWXmSXU9EQ8bIyCdpt5rxRpWrmFOP5N4hic5T2cr3V5tQrGkqez7WIPLQXeY5%2FTcZDkGA4xKgkRopYEiwoWmO6JzXpgMFoHi416ylG3Wg6AdDlP1oodFhLLkkGsyEB6fLpLpR33DIfhkZB3%2BsdT6G19BHcBvRHw2ZrDSk2fXB5Ej3ekIovrC5mPH4Q2Gtf1A9jyi0dMjC106y9BjqkAShyJ%2BS63%2B9MS5vLqgV12wnwKOfb6mwwqkonrJxyvWxImbiJbcs04dwPBEhZvrwDZXOVqSu9PxQnjWfx1phqIeqFyal1vSlHlXzSNz9Al8OkPzOmWIsvEUWhWSt%2FNmlj9RFVIwX1AoXMpQ5%2BRg7tipNLOF4LYwO%2FA7pyhdgWRXRGo37BbTR%2FqPuczyWDoNb%2FkK5mZcnF5qc52aldbvBEO0QM30Mb&X-Amz-Signature=7c0886470b778c2aa3a9e10fde34cb2577ec02f3dbb3cf3f38f3095e695a6879&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIWQ2OI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBbPSv5Zdcf6p30W8gICMQJtCG%2FCvvvANAT6%2BDYqmPZAIhALgRNVKZTkDH8zKBbVgwT33Fex324kz%2FsZl5gQ7sNT6nKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8GZcRw048dmc4TNYq3APX8S%2B0b3PdNzER3YyKGj7a3VSi%2BozXKYqupShix0Zi%2FW8UYSySekr3dM8zrJLUQwcq2MdYZczp9HsEa0gEcM8rqQndbwoYC7x4AfQSE8WppQdACXnZs1QPbYesQBcxRPe4sxV2G08O5Ak6BEtMtz4Wrf292NzVfCSV8Nc6Ci0gxrK2ofnWqUI7pU2pn9FYS9hMBVJ2cSC47pd%2FPr37DMOGJq9F83Hao5R%2BKxj%2FELVla2G2TT7iGo3DHMCevukQNlGJjberd1ND1oyeuH%2BhJCBrS%2BchdDJV3PpfogI02c7P%2FA5H1d4TvIyGyfh22OW%2BNzXEvopY8eEEQe%2F0KFFBywM4XVwyklMxYCa6Cd71TKm%2B83FXXA1J%2Fjlvtx1lqgDbVidNBEwIRZnjkff0FQpns2c153nXvtoxBmpY43sFXFV3M%2FwM0eaBNIdWXmSXU9EQ8bIyCdpt5rxRpWrmFOP5N4hic5T2cr3V5tQrGkqez7WIPLQXeY5%2FTcZDkGA4xKgkRopYEiwoWmO6JzXpgMFoHi416ylG3Wg6AdDlP1oodFhLLkkGsyEB6fLpLpR33DIfhkZB3%2BsdT6G19BHcBvRHw2ZrDSk2fXB5Ej3ekIovrC5mPH4Q2Gtf1A9jyi0dMjC106y9BjqkAShyJ%2BS63%2B9MS5vLqgV12wnwKOfb6mwwqkonrJxyvWxImbiJbcs04dwPBEhZvrwDZXOVqSu9PxQnjWfx1phqIeqFyal1vSlHlXzSNz9Al8OkPzOmWIsvEUWhWSt%2FNmlj9RFVIwX1AoXMpQ5%2BRg7tipNLOF4LYwO%2FA7pyhdgWRXRGo37BbTR%2FqPuczyWDoNb%2FkK5mZcnF5qc52aldbvBEO0QM30Mb&X-Amz-Signature=a231aeb2b9677478c6e8b3c3078e8f4068c503264cd665cbca1ff909ae0b086f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPQNCVF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrIsSHJ8yx%2F80XN3l9Ae98x1l8JyK0ADjMpciDk3IS0AiBmqNS90rQk%2FFbRE%2BUrIk1b16NxvAAEszi4t8mPzfHXQiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtLnVWcET6WVX7XhKtwDWstOrEw6W57EjFQ4Z3JA32x6L9kiYIE6BbSDVNOTuHQUyKgDneGTO77FDW5hGkVg6PaQ5JCdbOg5lWtS7eZC0bx9FtVb4hUdusFBeTB3F7IADRZ1qBrI17Db%2FSWZ1tcymVGaZvcBPTrat4jcz7l5sBuHabdv59P315AOI1MOPUCjdiSVzG67q5%2Fn%2FfR5TsygK8ESHcopwwz0HPD%2BP0gx0keQL2zxvUpRisKlunpkJGUfRvaZnPPPrTG%2BtbBn%2Blr16DjcdHYsa3n9Q1OSswSOEh7i47Y2SMO1cJfDHsRXY%2F5dH6ZhNIrH5NTXAO%2BgzKtBDWTHVvIAXDqWRiLACZP1GCO%2B5eP6LYt8Bnc01vvU4sOGcEcnQTL8TFCQGesJ2PAFTZsnccJN%2BuvmA7wbuPql0152W1MB9U%2FSwQeekOKIS33131yJtoHXtuF%2BRiR65LX1eZkjNX67Eejs%2FXz3oWzCUtzLjXlBmmWaQ7QRU7fRKlV04bXzmSl8KLfLiavAX7O1k0Sqr84fqYw4fFCK0c9dhw9MXFwAyAV9vlAF94XYhomSni11mV9Xx1n1xam5UeaTBgIM%2B1fPBSmfWZ%2BuZ4cDHCb%2Fr5b4hzrQHeNAQObSTbFdya%2BKhtcYipb8jJ4w8dKsvQY6pgHV67SnfkhlK7EzVpjjJuJwxzOzpQjbT3GdEUfpqSyNrYPNd6cu%2Fg%2B6gbLJa%2FYTeXlfzYkohlRvVZJFwQY3qGRDruB9NmGYjI0kJtjVDTECFlIMMvXU%2BuEU6spzd2HU2ZkzmBlHDN9njWRNTQ3Qfu4bsUrS7S%2F%2FuP%2Ff510MxQCF5Jvry8Y4OzGDfxx%2F2idGVaXol9OidTitAupKKGHmJIqiTsWG%2BaJk&X-Amz-Signature=1967c7985fddfe215006f6fb24fa1182a3e7f791e38dad5765cf0ef8ea20b147&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K3JT7LK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ1F0lKQSSWbJfpSe3%2FFVzZK86Pg9a18ar1TYiFQTVYAiAXvYDRPVH5uem4fEh7gTRqFV8zbhRch0oI8NX%2BsaMyRSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayB88DslQ7VZTSdwKtwDS%2B7PQ7kdYAeD%2BiET3wZXepLqSe6Z4Rch9MVFr7bqkLsM2aJY26UU41Dben5otWI1mAvjcBc5XZwBpMmqR9ywuw9V8kVsjVSX%2BTva%2FecpRsFrx5xpdo%2FPSD%2FS5WAwsJ%2FzRQEXN3qjYWPokj6eFwfumJYeHkjK7dXfgf1Mn68e58a5ySsotktrhQOVX6Pg33AWAGasBzLtOZ21ghjBMIAmMHxPlfZ3yE0ogaMUFnS%2FiMfSSzCDiYt1lMZRHKUxzpFiLyw%2Bp5ZoYu4gLDXYD9LdFwlLSPnxx2IfXUvUW83RVAYBf3DOwMaxoLTv0PGerQXI5ZlrRisGfFLSLoT%2Fyg8%2Foc%2BmfbCbsTaa6xU6Li8LNpzo3rifK4E%2FuhXSaf3%2BaQgvIfmXVz%2Bs2fTOH0h4cIryPje3Juim3HtY1RmBYP%2FWonhREqprT6BCMgadEQkcbXt7CRgVzTqctIfuHOiw1%2FX6OG3Apq8Mx3%2B56Usdj1TJYyoQHsTNIw1CPerV%2FuDOVhuhBkHp%2Bf1BlstEdyATXqZS3lft2%2BDZCpaVtTQTHmMwcPz1LrHSNQ4yoVgrJ3k%2Fz0Ch5IO2qdcQnwlkZ3bunybqzIEixWfUJze6wqsaOQ8GP60txResNhHEvUQHMO4w3NKsvQY6pgHsqr4W5Zr2WhJlsealvFO3ZsDvisXsuAuggPulUEXIxYCaux0GSqPoDLalfTaLB6qSsChX3Frbvb09THqOgl7UmHwCbU3VmfHWIy7xtFTVDOdsFKLGdGYZ0ezZjXgEL6hlhT4sYv6AMc8YYPOZpLT%2BtWwB1dAyDDDcqQhyNvbhTiufB8NJnhJut887tS%2Fgmi9tPZdpoUkxLEAWNUrUTeTSBJ1djyL0&X-Amz-Signature=537d5fce4477b2a2ff85dfa948903868fb48d266c8ac3991bceb7908b3b32734&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIWQ2OI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBbPSv5Zdcf6p30W8gICMQJtCG%2FCvvvANAT6%2BDYqmPZAIhALgRNVKZTkDH8zKBbVgwT33Fex324kz%2FsZl5gQ7sNT6nKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8GZcRw048dmc4TNYq3APX8S%2B0b3PdNzER3YyKGj7a3VSi%2BozXKYqupShix0Zi%2FW8UYSySekr3dM8zrJLUQwcq2MdYZczp9HsEa0gEcM8rqQndbwoYC7x4AfQSE8WppQdACXnZs1QPbYesQBcxRPe4sxV2G08O5Ak6BEtMtz4Wrf292NzVfCSV8Nc6Ci0gxrK2ofnWqUI7pU2pn9FYS9hMBVJ2cSC47pd%2FPr37DMOGJq9F83Hao5R%2BKxj%2FELVla2G2TT7iGo3DHMCevukQNlGJjberd1ND1oyeuH%2BhJCBrS%2BchdDJV3PpfogI02c7P%2FA5H1d4TvIyGyfh22OW%2BNzXEvopY8eEEQe%2F0KFFBywM4XVwyklMxYCa6Cd71TKm%2B83FXXA1J%2Fjlvtx1lqgDbVidNBEwIRZnjkff0FQpns2c153nXvtoxBmpY43sFXFV3M%2FwM0eaBNIdWXmSXU9EQ8bIyCdpt5rxRpWrmFOP5N4hic5T2cr3V5tQrGkqez7WIPLQXeY5%2FTcZDkGA4xKgkRopYEiwoWmO6JzXpgMFoHi416ylG3Wg6AdDlP1oodFhLLkkGsyEB6fLpLpR33DIfhkZB3%2BsdT6G19BHcBvRHw2ZrDSk2fXB5Ej3ekIovrC5mPH4Q2Gtf1A9jyi0dMjC106y9BjqkAShyJ%2BS63%2B9MS5vLqgV12wnwKOfb6mwwqkonrJxyvWxImbiJbcs04dwPBEhZvrwDZXOVqSu9PxQnjWfx1phqIeqFyal1vSlHlXzSNz9Al8OkPzOmWIsvEUWhWSt%2FNmlj9RFVIwX1AoXMpQ5%2BRg7tipNLOF4LYwO%2FA7pyhdgWRXRGo37BbTR%2FqPuczyWDoNb%2FkK5mZcnF5qc52aldbvBEO0QM30Mb&X-Amz-Signature=81a0a21d72fd49503282a156291f50eb90e89856c6c868ccadbf2de36298b8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
