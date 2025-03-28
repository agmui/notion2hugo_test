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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT7TQGY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzEu3o%2B6bMyHks20JxPR%2F4%2FAjQXeM3WdatYIWlrj9fTQIgMFZbcpSsz03BVn8Ps8dnONPgyTnpXx%2FiUJNOii9TLCsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLWXrNEEDtMRpTKzASrcAxKIGVTfwyb0bY46qiPrq59gK0UmypKElDoyyeQB2lOy1HiqZuSAHMk%2F%2FTJy4qDnbD3RMzW2gRTkxS1gtMLSZUcXJVpvTPneDIJ9nX%2FC9xS%2F0RTR5gsIec7dQeiPEE0RpQD0kHoX3EHSFVB%2BbWmQtE6%2F3K4JLF1lOJLgQ4ztJPAHaOr%2Fv%2FA04Krbs7dSVJULBvZKQ2FOH8JUllO8%2Fhi8KZRBWq36s7gC8PE7wXIrAu6AZJpxm69iyamNnNEzBX%2BE3v6P5eSU6cC1zFFyciVd5F3Q6upOy24pW9bwOSjOLDbjzffTpBIC8f%2BNZJcFwauMQhN169GjD0Qeibxy4UFkiRoA%2BUpqmijOW99kCfAjimhB1tMhzyVjfXEjlwRir5FvTRj70ytt%2F7L%2BqnaV0xV4bMBeNOc4D6IUivspTBSEjK0Z0cqC0U%2FRBsHP2oI%2Bnvb7vNFgHepo%2FxIflfLdgk%2B%2BLHHJg9E1L9nKmxAO2FUk6hDZHvSVKZoxACmlSgU%2BCHzjQpqGtycgdEf1qVlm5onuJ%2FfY4ciypQb7o%2FT1HIlSwXUKjaTWH86JqRPsGPzdNqmtnqrJnY96aFklyTapx8T2LTAwD2I6mFJPRZyf3YT9QX7LU2uvxXMSxruJwLFFMIPtmr8GOqUBLa9D01%2BV%2F5Ly7vdwWYVHqrFc6SIw8h0sHRVt1hqZq4QsUhwy7qk6Qn2ZHY3%2B7Lvhox2jEG%2F%2Frd2T%2FUP%2Fy7iEsQstIARnnjwA%2FbCxN2LxI6Xw5TagpLn7eVEFm6eBQnRKdN%2B3Sh31Z6T5XmVutpy2QQskdG2nv8ogCUXy7dF50xxPIZP5Dd6hM3hegVLhlazXiPbp2o0ax4%2BoTr0CFNwVbs63ratd&X-Amz-Signature=53a6a866cc0daeac88bac22dbcd78d6e7054596c1b768b0b7f0510eaec227d21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT7TQGY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzEu3o%2B6bMyHks20JxPR%2F4%2FAjQXeM3WdatYIWlrj9fTQIgMFZbcpSsz03BVn8Ps8dnONPgyTnpXx%2FiUJNOii9TLCsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLWXrNEEDtMRpTKzASrcAxKIGVTfwyb0bY46qiPrq59gK0UmypKElDoyyeQB2lOy1HiqZuSAHMk%2F%2FTJy4qDnbD3RMzW2gRTkxS1gtMLSZUcXJVpvTPneDIJ9nX%2FC9xS%2F0RTR5gsIec7dQeiPEE0RpQD0kHoX3EHSFVB%2BbWmQtE6%2F3K4JLF1lOJLgQ4ztJPAHaOr%2Fv%2FA04Krbs7dSVJULBvZKQ2FOH8JUllO8%2Fhi8KZRBWq36s7gC8PE7wXIrAu6AZJpxm69iyamNnNEzBX%2BE3v6P5eSU6cC1zFFyciVd5F3Q6upOy24pW9bwOSjOLDbjzffTpBIC8f%2BNZJcFwauMQhN169GjD0Qeibxy4UFkiRoA%2BUpqmijOW99kCfAjimhB1tMhzyVjfXEjlwRir5FvTRj70ytt%2F7L%2BqnaV0xV4bMBeNOc4D6IUivspTBSEjK0Z0cqC0U%2FRBsHP2oI%2Bnvb7vNFgHepo%2FxIflfLdgk%2B%2BLHHJg9E1L9nKmxAO2FUk6hDZHvSVKZoxACmlSgU%2BCHzjQpqGtycgdEf1qVlm5onuJ%2FfY4ciypQb7o%2FT1HIlSwXUKjaTWH86JqRPsGPzdNqmtnqrJnY96aFklyTapx8T2LTAwD2I6mFJPRZyf3YT9QX7LU2uvxXMSxruJwLFFMIPtmr8GOqUBLa9D01%2BV%2F5Ly7vdwWYVHqrFc6SIw8h0sHRVt1hqZq4QsUhwy7qk6Qn2ZHY3%2B7Lvhox2jEG%2F%2Frd2T%2FUP%2Fy7iEsQstIARnnjwA%2FbCxN2LxI6Xw5TagpLn7eVEFm6eBQnRKdN%2B3Sh31Z6T5XmVutpy2QQskdG2nv8ogCUXy7dF50xxPIZP5Dd6hM3hegVLhlazXiPbp2o0ax4%2BoTr0CFNwVbs63ratd&X-Amz-Signature=8564b9a8b99ee7ee508c5ee2221c3bb762038591ce2c8ae8876b3f35406e54aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLZGK3C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmJVPLEa9gb%2F0AdxWIhdvSqfiMjx73xx6Z6wDKD8EU6AiEAxa9%2BdvxyG6CJ5psgE3%2BgZSUvBCPRbfPhmPGq6eIUBG4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHMVrCBbkkY1zfN9tyrcA6aeeHYtxn9wAkXWrAXxpQcS80Mieul0tXzgV6rBbg2xvbFFdL5dmA1v377D5rsTvkqil%2BB35BWRwR9hSYAaMusKDM5OfAT%2FfACow47SiORU2eq7jPc1A%2FxoqXj8ZV6gi8ZboCSoIcqjJbDiF8YN1D1edOvM3Xqq30se1jydnT5iIijd3kSREUQJqUFgAFYyErHqA0Gm9NbUJ819pe0QFnWlw3Lsup2JRLhnHRfEFi2iAmEl%2FEEaY%2FD3zRJfvYrnuM%2FZ69VuTcRKGELuxmwj7coojyGfxHz6ToIcrcsgoL1R%2F2jJWWSO80NaidvsJI63qoiuAKN%2FvySZzXp6tQ%2FayQmOFDB2igGPUKxKQwzYzIhyitmGxcfbXjKhAThBbxR3W%2BEfk9XUzMwLq0fwBHSmJXsmvn8fUvE9XLYpbJmjFIY7eghPqqqYOhFKn5wpkdKy%2B0SRrqbQuXqRIqvaAYwnx4oYEyYjfIm4C70YLFDTkoCJIoCpcbayhcU5MlS561qsJwfuiCsb%2BWYeCGHxXGSTrv7Hj5vdKghYCUkT17c7AW4DRkkYsJA%2BZJpY%2BDrDv3kCFoPkXGZZ4BDPZl194psC12tJzz4eDpLJlaiZIoriR8nYf37IZcDUzdLRbDv0MJPumr8GOqUBCye00tcx%2FKIHlZIeXc0ulTVeOStsPYFtrXL%2FM2kVN2WOEtounP1WX3rvjl%2FAd9Q3ajjtiVoA6FHCs9GDoNoe4km%2Fr47DXjeZYMagWEP3IUFOl5BdYnmzlf%2F9%2BPMnETRNxDC4svWFsNsbeS9mJMpbtghktVrNCmFdKZJ7W4jZPOopQLymyi7nQ%2BlbHaDM39ECPK3NRuEe%2BcDfzrMlokNNWybLWmKm&X-Amz-Signature=9770bd451f654a0e99dcc6090e3abd478eb863b07fad5901d17d8b8a6af91dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJSZEAC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV9sVSr9fI0oN3s4HO7mxpitB2eTbluTE%2FW0pe65w2GAiBBH0Von12FChfZrOfSfSJ6X%2FPp3OEsMCV5ovaCPQYHiir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMiUtOAIlaDUjgBYf9KtwDwdm3%2FtzoPyWHq7otnHS866EcnfvtIUaXqBAQIyih4nzRaS8LnixEydwPZzzmaVL7GaPkKj7mb7rTN1m1L7v%2F%2BKQpESF65BpPGvNOg3gFMvFaSOvETjHEPgQSrjeWfp2b0fcfq01Vi0WpSZJ8Ioo8rWSV5y4oceNz%2F64roj%2B60G%2BevirRuHbdJTm2jfbNP%2Bp4NX0t1xvfP5tzkn9ndQOxaRkkGujeVZCA8PrDFXMv2okoioDG%2FMV4nomkVeWr2FZ8k1xj1rASCTfYefZb%2FWQFE2v8wQ2dNSPxGiM%2FKfQctdxwkbPew9eySvvJ%2BV3GfuNt4ZRQjDf6%2Fz2LG4LqE0UJTDmcoz7%2FF32DHBweG%2BIEQ5kf9K4C9CK1yK50e7ltDaBp5iOBAqLL5S4Trfz0M0cOPZWkFkXUFTBkFEy4kL8miuKIt496qIXXWcZXNCi888UIR7TSudvB48s3FwbdiqgrJxC5XRQbNU4FieHAdIQhZztsxQocRPfnnnN36cVmx3ecCQ2xoBGzjce6TQS21pyIP4vgEjeYUXsdptCBatAZtkVeNG%2BwVjiNqrpsFkTKlR%2FLH8ZgCtKuYqQPw794O1aNbs6oWUDg2BfEMqe2auGE3Pty2oU0%2B0iQ9feHZjgwhO2avwY6pgECb3FGwTuwXg%2FjO%2BXOuDq147q3c8resvwa0fxSBZSg8CYcCU3iJVdSLRzYFatV%2B%2Bl2kMgEEbTUbR5WY3YSfdSdG2tGbeGmksvOnUc80VECCSpNMgTdorIQN%2BVDK7cQAOKrwUBQXirZdwR%2BZkj58sYea63%2FZ17W0hkAda7FtaeS1U%2BoYb7iH3lYsOBs0kDjJEOj1OG%2Bc7ABZ%2BYinKWJwA7RQoi%2FWkWU&X-Amz-Signature=90d136bcc0a119c7812a858752b0457e4b82695cef9e3354eeed66fb3ee6138d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT7TQGY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzEu3o%2B6bMyHks20JxPR%2F4%2FAjQXeM3WdatYIWlrj9fTQIgMFZbcpSsz03BVn8Ps8dnONPgyTnpXx%2FiUJNOii9TLCsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLWXrNEEDtMRpTKzASrcAxKIGVTfwyb0bY46qiPrq59gK0UmypKElDoyyeQB2lOy1HiqZuSAHMk%2F%2FTJy4qDnbD3RMzW2gRTkxS1gtMLSZUcXJVpvTPneDIJ9nX%2FC9xS%2F0RTR5gsIec7dQeiPEE0RpQD0kHoX3EHSFVB%2BbWmQtE6%2F3K4JLF1lOJLgQ4ztJPAHaOr%2Fv%2FA04Krbs7dSVJULBvZKQ2FOH8JUllO8%2Fhi8KZRBWq36s7gC8PE7wXIrAu6AZJpxm69iyamNnNEzBX%2BE3v6P5eSU6cC1zFFyciVd5F3Q6upOy24pW9bwOSjOLDbjzffTpBIC8f%2BNZJcFwauMQhN169GjD0Qeibxy4UFkiRoA%2BUpqmijOW99kCfAjimhB1tMhzyVjfXEjlwRir5FvTRj70ytt%2F7L%2BqnaV0xV4bMBeNOc4D6IUivspTBSEjK0Z0cqC0U%2FRBsHP2oI%2Bnvb7vNFgHepo%2FxIflfLdgk%2B%2BLHHJg9E1L9nKmxAO2FUk6hDZHvSVKZoxACmlSgU%2BCHzjQpqGtycgdEf1qVlm5onuJ%2FfY4ciypQb7o%2FT1HIlSwXUKjaTWH86JqRPsGPzdNqmtnqrJnY96aFklyTapx8T2LTAwD2I6mFJPRZyf3YT9QX7LU2uvxXMSxruJwLFFMIPtmr8GOqUBLa9D01%2BV%2F5Ly7vdwWYVHqrFc6SIw8h0sHRVt1hqZq4QsUhwy7qk6Qn2ZHY3%2B7Lvhox2jEG%2F%2Frd2T%2FUP%2Fy7iEsQstIARnnjwA%2FbCxN2LxI6Xw5TagpLn7eVEFm6eBQnRKdN%2B3Sh31Z6T5XmVutpy2QQskdG2nv8ogCUXy7dF50xxPIZP5Dd6hM3hegVLhlazXiPbp2o0ax4%2BoTr0CFNwVbs63ratd&X-Amz-Signature=a7aa01ae12f97806edcdb83c53a1cb780a64a1d2d57ff9a3e30eac67547c8e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
