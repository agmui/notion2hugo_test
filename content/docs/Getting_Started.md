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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZWNOVA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1XgCkDzptchws%2FuOwvpJsHwohJjoiCvZDt7LAIqpKAiBJLgafGxDGlkaGGudGU%2BPsJxik59VA0T08vRMChubiZSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMA%2FDuEX1Dn%2Fx38dWeKtwDdUBcEMPKOp40IN%2FvW59QDLFhN9WhTTzP0XQDvGSqI6S3w%2F7kEsruQ3a%2BHp4r7PcCWC4h%2FqfeHUEKscEc5kVUwW3ymLXlfsCodwQ2Li7fXcX%2BoZwgYUPznTdbDzH%2BteS7YgpNYV5vpMfIvgNDAztQpHJs7tFnhKeANyLqFY6flKJTOmp5Ve82tR8nvw67PQjrd8iGpF5AyXyHqMwGI%2BKRY%2Bt%2FwwtOjIG9Jn%2BUXdDM1YZRrBsW7%2BLZLvZan5gJm92SoipOMbF9vJ5syNvd8K%2Fys%2FqxF1FGRFaQ0A%2BOUvJALwGxPId%2BdZxqR28Z%2Bd0jfQvAIJMit96wO6ETRn0Zb9c0glRiHZ3nDk%2FLvvCuUgcG%2Br2roH2pBGK39dR%2B0m4C%2BsjBSVgVHd7RaUm0rkEC9eKxbxN8z8i%2FrSRBhV2AhcM8WbNmqB1%2Bmj7xrYlcJ%2FHVCYlacOJ8Lr7A6xbQaL5n5WCayA9HQIj9yUq2CW7Psv9Btdi8%2BEjI1NtCJgZAiLztTuAzSYpTIN4RInLFuOpAIgwM3ipLFIJjy7XVwIQfPTytAwzqpqNWhZ05mVE29ea6xxWzi%2BYEJOO5TlWlL3FStnGNuI4W7ri20NE73AETVUc5%2FUPoGUzcYQvRoaXfOt4wiMmovgY6pgGwydwV9LdNiDfkNXT9Z%2BOh2Zw0mcGWMP7T3LbUPVfqgUMiypAXnVOAckkNdWIQyVvgwW5WF%2BSEuVLyq6EpLc5gkDl%2FyUKPNSUniU6qtSoAHO8Hd7vfrh8O4p0pegMzRSyZ5X2BNo1VNlN3lBU%2FKrPTXEkr9Hoxo5IKYElN5XVaBIOti%2BAFWFHaw5bUFyKKW6Dmq9Q7mQ8xsvnsVLq%2FPXSOuham0THs&X-Amz-Signature=8e687db1d512af0cb01c375e69fab51c60c31515f84db56be7d6a3d9bdbb022b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZWNOVA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1XgCkDzptchws%2FuOwvpJsHwohJjoiCvZDt7LAIqpKAiBJLgafGxDGlkaGGudGU%2BPsJxik59VA0T08vRMChubiZSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMA%2FDuEX1Dn%2Fx38dWeKtwDdUBcEMPKOp40IN%2FvW59QDLFhN9WhTTzP0XQDvGSqI6S3w%2F7kEsruQ3a%2BHp4r7PcCWC4h%2FqfeHUEKscEc5kVUwW3ymLXlfsCodwQ2Li7fXcX%2BoZwgYUPznTdbDzH%2BteS7YgpNYV5vpMfIvgNDAztQpHJs7tFnhKeANyLqFY6flKJTOmp5Ve82tR8nvw67PQjrd8iGpF5AyXyHqMwGI%2BKRY%2Bt%2FwwtOjIG9Jn%2BUXdDM1YZRrBsW7%2BLZLvZan5gJm92SoipOMbF9vJ5syNvd8K%2Fys%2FqxF1FGRFaQ0A%2BOUvJALwGxPId%2BdZxqR28Z%2Bd0jfQvAIJMit96wO6ETRn0Zb9c0glRiHZ3nDk%2FLvvCuUgcG%2Br2roH2pBGK39dR%2B0m4C%2BsjBSVgVHd7RaUm0rkEC9eKxbxN8z8i%2FrSRBhV2AhcM8WbNmqB1%2Bmj7xrYlcJ%2FHVCYlacOJ8Lr7A6xbQaL5n5WCayA9HQIj9yUq2CW7Psv9Btdi8%2BEjI1NtCJgZAiLztTuAzSYpTIN4RInLFuOpAIgwM3ipLFIJjy7XVwIQfPTytAwzqpqNWhZ05mVE29ea6xxWzi%2BYEJOO5TlWlL3FStnGNuI4W7ri20NE73AETVUc5%2FUPoGUzcYQvRoaXfOt4wiMmovgY6pgGwydwV9LdNiDfkNXT9Z%2BOh2Zw0mcGWMP7T3LbUPVfqgUMiypAXnVOAckkNdWIQyVvgwW5WF%2BSEuVLyq6EpLc5gkDl%2FyUKPNSUniU6qtSoAHO8Hd7vfrh8O4p0pegMzRSyZ5X2BNo1VNlN3lBU%2FKrPTXEkr9Hoxo5IKYElN5XVaBIOti%2BAFWFHaw5bUFyKKW6Dmq9Q7mQ8xsvnsVLq%2FPXSOuham0THs&X-Amz-Signature=c87cb170158d34d4042c87e534db8c4bf72118587252e9e06d95e90e806f11cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JE2PM4Y%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiRG86zQT6BmefYgnmKnp4k5jCQBoq9CQaLN1PgqHCaAiEAoxbsCXHSHVqxLDSbJuK6pe0M%2BtjcELT6yk8gwBE97LQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGXpadmPJj1HpBj8uCrcA7%2FEvZMGe4MrEKEj3%2FCefJ4fGu9uF60bDR0yZaxlQg4NvQbH5RwrEkQsYWN92cyjfZ3LS5cUDmIt%2Fht8ggdih8qeGiUmRDYudQBGlJupJ6qxCBr2vzYEpJMjuVLrxOmnZNrOAxxwyRDIWiNB7mbITTIlHjedakfhY485Hsn1LdRDZyHd2HBeRVFDo4aqYuWmZajoOmAqmHQXZVWdD%2FXIAqD2mnDqRdrpurqrQ2iNLP0oECzUEBDg%2FCgqBTav1eJpDAyV9tYdgVFOEvJbIJPEMn80ai1XYpMXj15aJV9kBKGmSc4jwp4DURR6PqInZgTP9apao3Cldw5k%2FX%2Fp0tS4SaQUTkBeAubT93OPpICIglUTql9rCa4XUPZTIzu9HSR%2B8oZ6m7E3ly6AXWA5626i%2FuuVnNVVzTLN4JsKyE%2FjPzDw38XznojBSWBld3uo2PctI4o4Q%2FEzvDoRmNGG1TqPHNSOYYZm2oAN7XU6iTGAEmGw2ar29SkqvNq4tKbCGwYDZ5yIt9%2BF%2FCdVBwCY8gGWvLk%2BNkma%2FR5xqAZysh%2FW175upuVp3%2B2WWa1edJdaj8F4NMpGH4V3UXpMg94M3frdsNIL%2BMpmXk%2FYErbBAj0pbqeA1DhgS%2F5sLuMQ3c0mMKDJqL4GOqUBmnpSgqNCxRYQ9QDQo3LyMQtnf7YTt2GNtTSTp83z5HZbzNEe7xcoOc70JJtvSD4ZygKuFoKHfgQgGxOqkgtMA%2F78Eij%2BLlZvnnYX8d4QrCtb6LOnZnlXh%2BJbir0zQcFi3BIsak6j%2BxqD7nEXc%2Bptem7r6CYyMPgBVs86H6cLHX%2Fe%2FABlyk7pLpxF%2B8wKrcjpdBfokmtrDalriEPO5haml1XESSIh&X-Amz-Signature=9a80a9bf53c17231d838724717539fc83a48eccaff62cf66d71e5ae1017c6938&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUZKB4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdIt9vG%2BKNIcUB%2Fk6%2FT0TOOsxdt1Ua9BhLogEGqfNZAiAUJ9c4jOa6xHc7GSKYAKGUCOySVZzfDo8mkn9rWALG1Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoFBtiNGMNDOJX2g8KtwDCVjx5szS8xrvbkha0ZzgGDF6bsWkuP6NWv6IWtjx4E%2BBCI3siT6Qcd7RizJiidJkeL4d985MNL6%2BzdaWbiND5wej%2Bxdz8cRkWXMNGj9xXDA90rIU86x6uaxkh4cOkyYJharlZFPv8fKpf4lkpy7AntUGj2Z6BuxMniFLeyDPkuRk%2FTyY8r7SOhskz2YB07LYr43X%2FWFvdCJMHRJRAp%2FtM5wj3fUOBeJx3Qq94BmU9g7UV8xSrJ4EgvznIouxB%2FSHCYEh1yuHa1D7ihk20xOwH5FSdXUZSsw3adxX%2BVXstZjzk8%2FbA5oCQfpg5WTC3OqO1VaKY3o%2Bu4MQtrskz6XnUAgnGX8sDtjILS3%2B8qzI8fxzwUNRs4GgLAY%2BPcPqtOAzn77JNDmwLK3stiv5zZA4b%2FQ3A56xQVNiLf8Xf5NaV1NnM%2BbtZB8tuVenNGgUydXDJTaaDBXjz7NCew393ehfrk5T2j6LURH3qZrazZyglyihVnu4fkQiSM8cDjAVhfUoNfQrpgqMxxdIeXmwhKJ90ujC9MTyx08bVJdXUM%2BmIBPQqY7w4B%2B4sLQXAM5l5M52QUOZ9b3AJsoK3Xr9imlBS44zfnGEYKGLL%2B%2FGLUFQgJ58I6uzoF7AiyXmhhww9cmovgY6pgGAZbPHW2W2AGrt1biY355187jVca5hsPdOS5LNtTHvYU4gnoHWAVnfbyRgfdx4G6t43kHazAM2AvRU4410IRCrFZKJ93CZdr8jaH4ji22EQYTLC8B5WTQjUFj88lEpRwfJbf896YtmPTQB5KcqXlkXV2eJmw6tjBl5DHaoL0qrzdb%2FIyl3RWN3JWRSmNKreIeTWYJLK%2BK6CRQWy7ZV7gyrJH%2BbKB7C&X-Amz-Signature=50da0fab1a40244b3c6d75e3175016a75bbd58060bd319d6682b6f0455a157ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZWNOVA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1XgCkDzptchws%2FuOwvpJsHwohJjoiCvZDt7LAIqpKAiBJLgafGxDGlkaGGudGU%2BPsJxik59VA0T08vRMChubiZSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMA%2FDuEX1Dn%2Fx38dWeKtwDdUBcEMPKOp40IN%2FvW59QDLFhN9WhTTzP0XQDvGSqI6S3w%2F7kEsruQ3a%2BHp4r7PcCWC4h%2FqfeHUEKscEc5kVUwW3ymLXlfsCodwQ2Li7fXcX%2BoZwgYUPznTdbDzH%2BteS7YgpNYV5vpMfIvgNDAztQpHJs7tFnhKeANyLqFY6flKJTOmp5Ve82tR8nvw67PQjrd8iGpF5AyXyHqMwGI%2BKRY%2Bt%2FwwtOjIG9Jn%2BUXdDM1YZRrBsW7%2BLZLvZan5gJm92SoipOMbF9vJ5syNvd8K%2Fys%2FqxF1FGRFaQ0A%2BOUvJALwGxPId%2BdZxqR28Z%2Bd0jfQvAIJMit96wO6ETRn0Zb9c0glRiHZ3nDk%2FLvvCuUgcG%2Br2roH2pBGK39dR%2B0m4C%2BsjBSVgVHd7RaUm0rkEC9eKxbxN8z8i%2FrSRBhV2AhcM8WbNmqB1%2Bmj7xrYlcJ%2FHVCYlacOJ8Lr7A6xbQaL5n5WCayA9HQIj9yUq2CW7Psv9Btdi8%2BEjI1NtCJgZAiLztTuAzSYpTIN4RInLFuOpAIgwM3ipLFIJjy7XVwIQfPTytAwzqpqNWhZ05mVE29ea6xxWzi%2BYEJOO5TlWlL3FStnGNuI4W7ri20NE73AETVUc5%2FUPoGUzcYQvRoaXfOt4wiMmovgY6pgGwydwV9LdNiDfkNXT9Z%2BOh2Zw0mcGWMP7T3LbUPVfqgUMiypAXnVOAckkNdWIQyVvgwW5WF%2BSEuVLyq6EpLc5gkDl%2FyUKPNSUniU6qtSoAHO8Hd7vfrh8O4p0pegMzRSyZ5X2BNo1VNlN3lBU%2FKrPTXEkr9Hoxo5IKYElN5XVaBIOti%2BAFWFHaw5bUFyKKW6Dmq9Q7mQ8xsvnsVLq%2FPXSOuham0THs&X-Amz-Signature=21fc9be8f28dd5907c013abbdd7e3f88733b7f3a4a30d50d2c773270b046a2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
