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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEFX45T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBKOaEoj2DM9ZDR4%2FcEQdmLxC5Sq2VhPHOTWAyBfs8xAiAF%2F88DQHbo3eV%2F1ZhCKetwSadbYOfch7p3EZYdhskYSCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM08otZn%2BzbhH4kJgOKtwDF%2Fe0ylWFdq7FVjszNZe1gaQszUAAPRrcLAy%2FakuhvmKwb1Y45CnkVydLHrkai8CLhrDW8lX5npoijVUtXIL7Js%2Bn1LnWfhPgtR6XBdwo4QwUG%2B6ZnS0PQtazWLxaLdjjEosY8kx9CZRSTpokge76p9LPXyiEHFFn8Lnqvo7grxqWw%2Bffw61LS%2BEDgMxokrqZBR%2F2mUJDCFRq95D3V83HME%2FnvHp%2FVHP%2Bqz9j%2F9APXn%2FoadxgtOhwvNZ8iy7pNOnJ3N9TpnBtOUACDaKkTZmpdj8JH0AZZnU%2FZ2GkumJ%2FnheGY4XLu8lJQuRjvWFA8VatT080ndb35htaOtxz4UDXUTqY%2B3gXjdqG2ZCLfnHYFYdhSuPyZp8VpRrIaSCaz%2FnrhPYHNtqzliwbg62%2FT1lxwPGXnBfR20PoagWCmR2QoTUKixvYS0w3ryiIjvLkg9Qn3LE3rWAY50YDu6Wi26C9oBPVyM2PwS2Tyn9rEmWEDPnK5ftVCIprH6EfSJpoYXlAYxvlR94FJb3z%2B2QaHvon1b4nMtF1zIflvGEyVV63vgVjp7cCbyi8nj34IzQYFe32he8%2FkzN7rLmOHSnmnsiXWfHe%2BdlK5Kms4ZAqxMhHiSK1hG15cPHm%2BFmAeYcwgZPXwgY6pgER5OACDLY0wblHC0XRfp2ZefjpGNfYuJtNfkcO7Q8Z3vJFRDmYGUsr%2FQx3O9kBySfFrI0e5JYULt0edTexiPgP2ompzj6IBJJZLPcKsnvAOAKVVsWi4j4lF8Iy5rIzDTEjoec414gAyY565Xd3g5LkEH1F3nWQbtvRt6ZxKUEFakzBMGx7QX53%2BFIh%2BmYPeSBxD9iZKO81P58b8o1TEEhHATntNkyL&X-Amz-Signature=fb2973fd4598544ea75d8bb928c7bc565243548189f8ffb65be2ddf5ed454ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEFX45T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBKOaEoj2DM9ZDR4%2FcEQdmLxC5Sq2VhPHOTWAyBfs8xAiAF%2F88DQHbo3eV%2F1ZhCKetwSadbYOfch7p3EZYdhskYSCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM08otZn%2BzbhH4kJgOKtwDF%2Fe0ylWFdq7FVjszNZe1gaQszUAAPRrcLAy%2FakuhvmKwb1Y45CnkVydLHrkai8CLhrDW8lX5npoijVUtXIL7Js%2Bn1LnWfhPgtR6XBdwo4QwUG%2B6ZnS0PQtazWLxaLdjjEosY8kx9CZRSTpokge76p9LPXyiEHFFn8Lnqvo7grxqWw%2Bffw61LS%2BEDgMxokrqZBR%2F2mUJDCFRq95D3V83HME%2FnvHp%2FVHP%2Bqz9j%2F9APXn%2FoadxgtOhwvNZ8iy7pNOnJ3N9TpnBtOUACDaKkTZmpdj8JH0AZZnU%2FZ2GkumJ%2FnheGY4XLu8lJQuRjvWFA8VatT080ndb35htaOtxz4UDXUTqY%2B3gXjdqG2ZCLfnHYFYdhSuPyZp8VpRrIaSCaz%2FnrhPYHNtqzliwbg62%2FT1lxwPGXnBfR20PoagWCmR2QoTUKixvYS0w3ryiIjvLkg9Qn3LE3rWAY50YDu6Wi26C9oBPVyM2PwS2Tyn9rEmWEDPnK5ftVCIprH6EfSJpoYXlAYxvlR94FJb3z%2B2QaHvon1b4nMtF1zIflvGEyVV63vgVjp7cCbyi8nj34IzQYFe32he8%2FkzN7rLmOHSnmnsiXWfHe%2BdlK5Kms4ZAqxMhHiSK1hG15cPHm%2BFmAeYcwgZPXwgY6pgER5OACDLY0wblHC0XRfp2ZefjpGNfYuJtNfkcO7Q8Z3vJFRDmYGUsr%2FQx3O9kBySfFrI0e5JYULt0edTexiPgP2ompzj6IBJJZLPcKsnvAOAKVVsWi4j4lF8Iy5rIzDTEjoec414gAyY565Xd3g5LkEH1F3nWQbtvRt6ZxKUEFakzBMGx7QX53%2BFIh%2BmYPeSBxD9iZKO81P58b8o1TEEhHATntNkyL&X-Amz-Signature=7aefd40a52cf32eef7b9bf28357ba75070e528c54cd4255363cc911e0383ce15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEFX45T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBKOaEoj2DM9ZDR4%2FcEQdmLxC5Sq2VhPHOTWAyBfs8xAiAF%2F88DQHbo3eV%2F1ZhCKetwSadbYOfch7p3EZYdhskYSCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM08otZn%2BzbhH4kJgOKtwDF%2Fe0ylWFdq7FVjszNZe1gaQszUAAPRrcLAy%2FakuhvmKwb1Y45CnkVydLHrkai8CLhrDW8lX5npoijVUtXIL7Js%2Bn1LnWfhPgtR6XBdwo4QwUG%2B6ZnS0PQtazWLxaLdjjEosY8kx9CZRSTpokge76p9LPXyiEHFFn8Lnqvo7grxqWw%2Bffw61LS%2BEDgMxokrqZBR%2F2mUJDCFRq95D3V83HME%2FnvHp%2FVHP%2Bqz9j%2F9APXn%2FoadxgtOhwvNZ8iy7pNOnJ3N9TpnBtOUACDaKkTZmpdj8JH0AZZnU%2FZ2GkumJ%2FnheGY4XLu8lJQuRjvWFA8VatT080ndb35htaOtxz4UDXUTqY%2B3gXjdqG2ZCLfnHYFYdhSuPyZp8VpRrIaSCaz%2FnrhPYHNtqzliwbg62%2FT1lxwPGXnBfR20PoagWCmR2QoTUKixvYS0w3ryiIjvLkg9Qn3LE3rWAY50YDu6Wi26C9oBPVyM2PwS2Tyn9rEmWEDPnK5ftVCIprH6EfSJpoYXlAYxvlR94FJb3z%2B2QaHvon1b4nMtF1zIflvGEyVV63vgVjp7cCbyi8nj34IzQYFe32he8%2FkzN7rLmOHSnmnsiXWfHe%2BdlK5Kms4ZAqxMhHiSK1hG15cPHm%2BFmAeYcwgZPXwgY6pgER5OACDLY0wblHC0XRfp2ZefjpGNfYuJtNfkcO7Q8Z3vJFRDmYGUsr%2FQx3O9kBySfFrI0e5JYULt0edTexiPgP2ompzj6IBJJZLPcKsnvAOAKVVsWi4j4lF8Iy5rIzDTEjoec414gAyY565Xd3g5LkEH1F3nWQbtvRt6ZxKUEFakzBMGx7QX53%2BFIh%2BmYPeSBxD9iZKO81P58b8o1TEEhHATntNkyL&X-Amz-Signature=7e338dfe556accc5d2b4a9c63390375b8be29552a5e79513f08ef08656c0eeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6U6U7K6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJliPSfsyb8Hy1L%2FiXMRsvl%2BqCUb3g4fbvb%2FcDBjH5%2FAiAelZvQ%2BUt0Q%2FIW%2FRPPPmv%2FqaqjfORGHbZrazcEimSTGyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD2%2FrwgXXw82FCW1IKtwDQZFJ9s6BXW2KhDAKoRsxF5x2iXKa7QamTPwV4nw1ai1kVMHXQ6XZRwu7zTRlbihnrD2cOE3oaEKCnuWyJlR6uc%2BK1FckVgRgpbHZFnO4WC0laVWe1sqiVrGDN%2F6qh3Zt0xwyqAQ0JiwBOomCf47ZGu%2F30k22N4kk0UZN%2Fe05WblTfg2fEFaD8btcTZFhrerRnMiJRkdR1CAqROpTNaxzCMLjb9TcDJ9cIR%2Bgi2jhNcCRTU2VDhCOCxfae7ezfHTPYV1M30ZNkIZNFPFserbtHuTEkuRd2HIlAAUmTDhIntLJ7LoK6pzuYC6pRHLPJbxRa5RmKpwskgynOH5FTtDnecksxS3ZQlUYHVHwzTkdlgCfpBL%2Fgu%2Fx3OzRkxbwqs%2BTeh6YpX8Axxz2j6cj5cBCZU7bNyLlF0C6tTsycjZOGyqbVEfTEuhP8YM62bzLvb1qq72OmWysoCrS6wkbTOXF%2Fi2x%2Fqae3qx%2F47JOGcfXziinW6QvK55mHA3lYmno5BruPdGUFwQHVT2cxo65RLGiZf0ANNDk80SrvNgNnukYduDOOfFZalkc4cL2dVW8C1jrPyPWUr3TFcN%2BAzpYde%2BcFI90sFeLcO18zFhH2typreKminJ01KZmFLE%2Fju8wzbLWwgY6pgEuWGbibTUs%2FjhPU1O%2FJ0MKqKPYEzoYjmdLZoDMbM57Uia5olHeCeJ5%2BMknTpZDVyYhuXdmYDMdqxSr64Dfqgl5p7U%2By14GD4VGtkJWx%2FhrEIBkPAOatAz2IZ1mi4sNDBit%2BWYg9ziKpKayFNuQ%2BUYB8mOFqdHWlhLOWcGjkneI1fnGFHHA%2FbE7WCIdxvKob%2B5TiTbuCwgNMsVJYuxakSPcTJ3V%2BDcC&X-Amz-Signature=4ccc47300cd782db41b4ba13bb3654d4162522b061e6ddd4f7b85fb7bfad7ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFMCVU6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsE%2Fv5cr9J5aJ131wzCYb9yWo4qmg2eeIHVXlDtuUGiQIhALo1GMAorqtbmw6%2Fiv825FQRISmBPaUgwso6IsU7%2BtRVKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQt9gb8i7t6vnhAkcq3ANV%2FnaGxokR%2FGgHp%2FY1127luz6dIr%2F0NinzSBFJP0BXE9uI0l6RGOxUcdiGWs5UoCmGGOf3Luew9HiP1BEn6hB%2Fuo3ipYNLWiwTC8O9w6xP2Xrbft0T62o7Mq1S%2BTw5G%2FTGgh2d%2BR9QdixGkyC5Tj7U931u%2BUJBIv2TxBWRP5ygDh7jdsZYL17f4avciaWwqyyxqJm3CLaxNBr0w0WJ7JrQONt9qYCv3RpPOQCmwnS%2FlNo0w01mVt1oSBQTALH5Fp8yQ20t0Wk4r%2F8hXmNEPx76iImJnrTLzPn1mjGEiQHTS3PVfpQ9SuJSJwvXQp%2B%2BeqJsNuEwZ9IHzRwgzQwG7QrvZhkMemkselv2uAJUxOdv6ir0ax7eGWE0LkF3G0iKFLouq9NxHa124fb%2Fh6677pAs13WYdalOQjQWU93kEMtZHUtjSHaieW8qEUWd2YFQJbuB9JyrqUZyKGNAx1%2FZ6B2YBLYoWV5sXqyI6%2BSo5Ig4%2BquzMPdkz%2B4QGuD31N4BRPs%2B2S4JcGpJPqNB9cmmB7yImLBGV%2Ffd%2FYVUZpTCNqJoHecUuzJHevbsxQLNbjvQ5v4Jbl2Zo2yDm1UhLj1n2op5oGHWmlZs%2FQ1cDceSIJaEIMC%2FTN2FRSl574AI4zCKstbCBjqkARdY2WYts%2FthFAqVgLkGs4c70kxN5S0bcd4SOiH4lzwr2SWHoQYBxEahDB4uWF62%2BT%2BtEBmWJr47avWMpQxI4yAwwoeXgz%2BYE19gNNokbE4iz%2FCHjxkm%2BFLdVp8pnhw53NrgXJ7RVLb20W8tNRoTWahTwEDyH5VHPnVC%2BArVFtP5vYuT1FY2TGa%2BKuWu%2BQcwgOkCvzqQ3Tz%2Fmo2Ef4K6nmQQF683&X-Amz-Signature=73cd3da50b363bacb8175498811c0a57b68be4c337889923f6b2181a67fd0ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEFX45T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBKOaEoj2DM9ZDR4%2FcEQdmLxC5Sq2VhPHOTWAyBfs8xAiAF%2F88DQHbo3eV%2F1ZhCKetwSadbYOfch7p3EZYdhskYSCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM08otZn%2BzbhH4kJgOKtwDF%2Fe0ylWFdq7FVjszNZe1gaQszUAAPRrcLAy%2FakuhvmKwb1Y45CnkVydLHrkai8CLhrDW8lX5npoijVUtXIL7Js%2Bn1LnWfhPgtR6XBdwo4QwUG%2B6ZnS0PQtazWLxaLdjjEosY8kx9CZRSTpokge76p9LPXyiEHFFn8Lnqvo7grxqWw%2Bffw61LS%2BEDgMxokrqZBR%2F2mUJDCFRq95D3V83HME%2FnvHp%2FVHP%2Bqz9j%2F9APXn%2FoadxgtOhwvNZ8iy7pNOnJ3N9TpnBtOUACDaKkTZmpdj8JH0AZZnU%2FZ2GkumJ%2FnheGY4XLu8lJQuRjvWFA8VatT080ndb35htaOtxz4UDXUTqY%2B3gXjdqG2ZCLfnHYFYdhSuPyZp8VpRrIaSCaz%2FnrhPYHNtqzliwbg62%2FT1lxwPGXnBfR20PoagWCmR2QoTUKixvYS0w3ryiIjvLkg9Qn3LE3rWAY50YDu6Wi26C9oBPVyM2PwS2Tyn9rEmWEDPnK5ftVCIprH6EfSJpoYXlAYxvlR94FJb3z%2B2QaHvon1b4nMtF1zIflvGEyVV63vgVjp7cCbyi8nj34IzQYFe32he8%2FkzN7rLmOHSnmnsiXWfHe%2BdlK5Kms4ZAqxMhHiSK1hG15cPHm%2BFmAeYcwgZPXwgY6pgER5OACDLY0wblHC0XRfp2ZefjpGNfYuJtNfkcO7Q8Z3vJFRDmYGUsr%2FQx3O9kBySfFrI0e5JYULt0edTexiPgP2ompzj6IBJJZLPcKsnvAOAKVVsWi4j4lF8Iy5rIzDTEjoec414gAyY565Xd3g5LkEH1F3nWQbtvRt6ZxKUEFakzBMGx7QX53%2BFIh%2BmYPeSBxD9iZKO81P58b8o1TEEhHATntNkyL&X-Amz-Signature=be01f88a0e42c0e6cf348022a93b3a444cf9edf90374f6d67e1f9472efb37698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
