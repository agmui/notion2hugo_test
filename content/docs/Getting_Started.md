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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNIEMMV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA%2Fg5oazNBSW97RoMmfIZzcdHvmbmko0IDimDNeTNNe8AiBmEcaUVk%2B4uOOr9CWCd1gvJDKSFqTLZSzSUi5G4dy8aiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw9vVHNuI7LKlui1KtwDV2hl8hzFMwC83KhjyzpFDRWH1iZUIkWdlY8ci8XCtjlKBa1BuIY7d%2BwErPFCZ1ajYguZ9hrCQJSpjUnzAic%2F4PUA8HWLSxviek9QeZK%2BZTywjzOLvZ7wG0meEYfiP1pW9cj8FQVad5fb%2FWbvmX8bJFQB2fpT6Qsexf7ps%2BZu1Hie0dVebp18ny%2Fog7Z%2Fb%2F0dJjivcICQ2D267XYVXixUHax%2FiceGLvTHIzcGLnryEHsZofN5%2FjgCaUgq7IbdVanv%2BhzPgsxoksDvO9sB1L2Remkz43G0QdPllO1jUG0K4e8lqLh0fbpe418HBGrYtZ355ArgrYJqQ7%2FzX%2Fe%2FV62Qui5GGFUC5HAnYJhHpEsIbKZhnkjh9Ldirs0NQRZ42n0b8DA25cgTaxs0zoqAn5hogd0ZKvCqeyq7jcLhD%2F7K%2B0qQOk6Bl6q42scMYLW1cEgJ1ZNeEj5B4sp2cI3ON1EcS%2BDKYKU9vz4ByZ29R4nzwm2DtbrWo8BzdO7WkBjfk1XwTYSz7U3CeuxDgG%2FXpHqupgK%2BMugXzejiZVUkzkRJDFK7zcXIL17CTFOJ7rwsRmS%2BN3q%2FZJGPO684oiTLgCHvBcpj4KayKupXeaDpt34HfDc0Zi251wk5HwrOl54w7trZwAY6pgFJ0sQtTANdlXte%2BPBddfxU3chqjuxoBCaF450NvoReSL37g71zbE4Xg1oWZxRdw5PJugF1mP%2F5zhCggBDyPnI9p5RUBMaTyB6K4BpTpgCNlIAnzG9XqDc0nHVuRh3dxZSW7hHUoh78RgHf1yIctoTrkBP38NhrQFj8n2LLsPwQNOf9wqInWnZmwOoI0osnFfKOtFP2kuoD62Kv8JTvhgFr9GtTCgDI&X-Amz-Signature=87d5d5e7fcb18e6d837f2237222e97a4e3f9e418efd9627b31ff1ea833f0bdeb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNIEMMV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA%2Fg5oazNBSW97RoMmfIZzcdHvmbmko0IDimDNeTNNe8AiBmEcaUVk%2B4uOOr9CWCd1gvJDKSFqTLZSzSUi5G4dy8aiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw9vVHNuI7LKlui1KtwDV2hl8hzFMwC83KhjyzpFDRWH1iZUIkWdlY8ci8XCtjlKBa1BuIY7d%2BwErPFCZ1ajYguZ9hrCQJSpjUnzAic%2F4PUA8HWLSxviek9QeZK%2BZTywjzOLvZ7wG0meEYfiP1pW9cj8FQVad5fb%2FWbvmX8bJFQB2fpT6Qsexf7ps%2BZu1Hie0dVebp18ny%2Fog7Z%2Fb%2F0dJjivcICQ2D267XYVXixUHax%2FiceGLvTHIzcGLnryEHsZofN5%2FjgCaUgq7IbdVanv%2BhzPgsxoksDvO9sB1L2Remkz43G0QdPllO1jUG0K4e8lqLh0fbpe418HBGrYtZ355ArgrYJqQ7%2FzX%2Fe%2FV62Qui5GGFUC5HAnYJhHpEsIbKZhnkjh9Ldirs0NQRZ42n0b8DA25cgTaxs0zoqAn5hogd0ZKvCqeyq7jcLhD%2F7K%2B0qQOk6Bl6q42scMYLW1cEgJ1ZNeEj5B4sp2cI3ON1EcS%2BDKYKU9vz4ByZ29R4nzwm2DtbrWo8BzdO7WkBjfk1XwTYSz7U3CeuxDgG%2FXpHqupgK%2BMugXzejiZVUkzkRJDFK7zcXIL17CTFOJ7rwsRmS%2BN3q%2FZJGPO684oiTLgCHvBcpj4KayKupXeaDpt34HfDc0Zi251wk5HwrOl54w7trZwAY6pgFJ0sQtTANdlXte%2BPBddfxU3chqjuxoBCaF450NvoReSL37g71zbE4Xg1oWZxRdw5PJugF1mP%2F5zhCggBDyPnI9p5RUBMaTyB6K4BpTpgCNlIAnzG9XqDc0nHVuRh3dxZSW7hHUoh78RgHf1yIctoTrkBP38NhrQFj8n2LLsPwQNOf9wqInWnZmwOoI0osnFfKOtFP2kuoD62Kv8JTvhgFr9GtTCgDI&X-Amz-Signature=0b3fbcdd20720704175899f6aa9c06c264e798c8158ec179fc86506482b04738&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNIEMMV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA%2Fg5oazNBSW97RoMmfIZzcdHvmbmko0IDimDNeTNNe8AiBmEcaUVk%2B4uOOr9CWCd1gvJDKSFqTLZSzSUi5G4dy8aiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw9vVHNuI7LKlui1KtwDV2hl8hzFMwC83KhjyzpFDRWH1iZUIkWdlY8ci8XCtjlKBa1BuIY7d%2BwErPFCZ1ajYguZ9hrCQJSpjUnzAic%2F4PUA8HWLSxviek9QeZK%2BZTywjzOLvZ7wG0meEYfiP1pW9cj8FQVad5fb%2FWbvmX8bJFQB2fpT6Qsexf7ps%2BZu1Hie0dVebp18ny%2Fog7Z%2Fb%2F0dJjivcICQ2D267XYVXixUHax%2FiceGLvTHIzcGLnryEHsZofN5%2FjgCaUgq7IbdVanv%2BhzPgsxoksDvO9sB1L2Remkz43G0QdPllO1jUG0K4e8lqLh0fbpe418HBGrYtZ355ArgrYJqQ7%2FzX%2Fe%2FV62Qui5GGFUC5HAnYJhHpEsIbKZhnkjh9Ldirs0NQRZ42n0b8DA25cgTaxs0zoqAn5hogd0ZKvCqeyq7jcLhD%2F7K%2B0qQOk6Bl6q42scMYLW1cEgJ1ZNeEj5B4sp2cI3ON1EcS%2BDKYKU9vz4ByZ29R4nzwm2DtbrWo8BzdO7WkBjfk1XwTYSz7U3CeuxDgG%2FXpHqupgK%2BMugXzejiZVUkzkRJDFK7zcXIL17CTFOJ7rwsRmS%2BN3q%2FZJGPO684oiTLgCHvBcpj4KayKupXeaDpt34HfDc0Zi251wk5HwrOl54w7trZwAY6pgFJ0sQtTANdlXte%2BPBddfxU3chqjuxoBCaF450NvoReSL37g71zbE4Xg1oWZxRdw5PJugF1mP%2F5zhCggBDyPnI9p5RUBMaTyB6K4BpTpgCNlIAnzG9XqDc0nHVuRh3dxZSW7hHUoh78RgHf1yIctoTrkBP38NhrQFj8n2LLsPwQNOf9wqInWnZmwOoI0osnFfKOtFP2kuoD62Kv8JTvhgFr9GtTCgDI&X-Amz-Signature=d4126b6dc163e08777a9b1b72d30f22a3159dcf3188efa730609e86bd8e42b85&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7MEA45%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCID3Pq7zx1MPadzkzdsY7%2BOyzqmEdjWemPY7EqbXov3koAiEAwMqqVq7UYWCLZ77qO7ofjEW56eoJKkfVa22%2FGHWKSpoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGA4oXXpuf5buQ83oircAxt2G6Vwe8tuCALS6Lw%2B%2B6NjHiNJaVfRyXp%2B1R5gZb7dRk2kMR7EzctWq83AM9sIgelR0YmP%2BctOes0MzxCDuEjoNUwirFUVSkJIGpfy5UciREiVIsrNF3ht8E2L8ZJxC8rrptHgP3fAAUBv3weDhTHeLnSSkNXx8munLqeNxphFJjhGwrb8mYQrwqP2GGQihHhse%2BJYz7%2Fc%2BVVEKQEiGY%2BQQ9n8GTS0stydIGz5HRswZMGt8m4Nmrf3K4ZO%2Bc3oRA8XthZLz56OUyweIeIqes1kJuTYMxOjTREpY18sLNCis7r0YRqzvqvyDKM108u2uWQT1m2W195X%2BV7tgxZZcwAcIEkEerlPrqinjd47h709IFLUR2pecpC7gjWkfnNCX11ypX8L9J5DHr35lSaSOedX9XPNkbHxcrqoynsOk00noYuqRncerYvJdlXSBI2PmHS7F4U72scSiq6Ecn0SmLo1FG%2BkD7Yyi4Yig%2F9P%2BNKdxfOh90ZsEPLHdW%2FztrEXeV7Yt11fSyV5YWUyfAMf4IkHAziWgAwmM4Juv281v0zcpzfmB2eQVYYCeKP%2FBMGGFAzehZclHdsbzueGWBAQxzLQj2e990TbO5BFMs5FGcUIwyvyCkIKxYgtLFRWMIrb2cAGOqUBOvgqNzuSaSkjd7iDyLCO4%2BrdNS8juQqib9oYCi6OwHMzuKdFv6ohDkKoKfCjP60%2BPeo4kuQByE9zUJUAHcHDilli7o%2BS4pwQ4McYfDP4g7rEop0PRzzCpmcyPC3okKu3S1KQ5UR1%2BFv4b6Adi1RMhceVgLU%2FVY015XhhXfDJ7F39sQZA0sQQEb3GKiHkbof3JM%2Fm9KF5YQjVeYiyu1bjT67JfoX1&X-Amz-Signature=4080a632f792c36cba974cdf4230affbc0747a9dc9cfde138a7ed5dafcb4238c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRF45UF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDnTpnE0pGF5oRbqdi%2FH2%2BmweifY90MHW7KqXinIQu90AiBlQrfRq%2Fp9NmCRzuu9gZb4BNghtZWZuIaFnafD9HUP5iqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFzM6XNhO00KYesaKtwDB%2FHkoJnYzWBOi0puuAw9n3UOsbgQsjw8iIcfNYOTCtNTFqE%2FVR87gAR%2BP7j4skCZv0NAEYLkoGGfh4WKAz%2FOLeyTjnjO7U6CSn7qUb9iJzgU5hBJPnrkzQ%2B94fN4e13sQIjRBDIzJUbs36LMS5b7XY1DBP9JmYvcvkf654wabZvMK15LsrZbArwUBryse5Q88vlZeyjf1Px8e8QnrQaWEQJywlusMOOOubgeZDWuAu7cKUp6KWFAc8dWc7%2BN2tDeEnjy0%2B0b7xWsRd1dX0UCbPo0gzvuLuTTf8%2Fi%2B5cFsbhbXdwcI%2F6fHVoY6pTIKp8Iql%2FQW5JrUdwVSMAEH5bGAJMQJAwGU%2BiHyY1DKVg5%2FJQqUeEbFXMNPVee7CfGOShz1lQA7OYz1AlQ8ganZyD1hUh0t6pTo%2FjvVBIhidU10iNiE8F9c4i92I3Dma%2B26YFo6Wf2McIudvWbilJCR%2FWKCBV%2FEkKrWYJKorzVQuRCbjgqcoo7uUvjVhfXWfraU5JwkCoCsu6%2FVp8zgyyDici2KrEKB5RyrvgQcniDwmSj32UcpgL%2F%2BaUnYBV0bCj0Q6mAr40x4Plcf%2BZhJp3dHkpSBlosG%2B15k7CDiDZ0GbbFkFnvnHjuIVNSomXKCAww59rZwAY6pgE4bIzadSjvoZCGOZwtnVoLYSxCagSK2auy4OEW6k4sJzOiJ7U2AbKrsL%2BcLeGQXDPj1UjJ5cF%2B1iALQJ%2Fc3ReOIlzGbCRrVdCAxk3gxNEvxYB9rkZXgcV0n6ekqRvPODq%2BCnQiMdDaJtJB0EZ2Q772vRkMqNrZxRadZFZxfeH2p9KLB9Lx1JkNjHHTcFa6paRR6dOTlHTPZaNzQUS4uCYS9Pa0J%2FM1&X-Amz-Signature=7fce3351bfdd889688925f30f05c3550e905674c15e63fb3d462727c706d1c66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNIEMMV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA%2Fg5oazNBSW97RoMmfIZzcdHvmbmko0IDimDNeTNNe8AiBmEcaUVk%2B4uOOr9CWCd1gvJDKSFqTLZSzSUi5G4dy8aiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw9vVHNuI7LKlui1KtwDV2hl8hzFMwC83KhjyzpFDRWH1iZUIkWdlY8ci8XCtjlKBa1BuIY7d%2BwErPFCZ1ajYguZ9hrCQJSpjUnzAic%2F4PUA8HWLSxviek9QeZK%2BZTywjzOLvZ7wG0meEYfiP1pW9cj8FQVad5fb%2FWbvmX8bJFQB2fpT6Qsexf7ps%2BZu1Hie0dVebp18ny%2Fog7Z%2Fb%2F0dJjivcICQ2D267XYVXixUHax%2FiceGLvTHIzcGLnryEHsZofN5%2FjgCaUgq7IbdVanv%2BhzPgsxoksDvO9sB1L2Remkz43G0QdPllO1jUG0K4e8lqLh0fbpe418HBGrYtZ355ArgrYJqQ7%2FzX%2Fe%2FV62Qui5GGFUC5HAnYJhHpEsIbKZhnkjh9Ldirs0NQRZ42n0b8DA25cgTaxs0zoqAn5hogd0ZKvCqeyq7jcLhD%2F7K%2B0qQOk6Bl6q42scMYLW1cEgJ1ZNeEj5B4sp2cI3ON1EcS%2BDKYKU9vz4ByZ29R4nzwm2DtbrWo8BzdO7WkBjfk1XwTYSz7U3CeuxDgG%2FXpHqupgK%2BMugXzejiZVUkzkRJDFK7zcXIL17CTFOJ7rwsRmS%2BN3q%2FZJGPO684oiTLgCHvBcpj4KayKupXeaDpt34HfDc0Zi251wk5HwrOl54w7trZwAY6pgFJ0sQtTANdlXte%2BPBddfxU3chqjuxoBCaF450NvoReSL37g71zbE4Xg1oWZxRdw5PJugF1mP%2F5zhCggBDyPnI9p5RUBMaTyB6K4BpTpgCNlIAnzG9XqDc0nHVuRh3dxZSW7hHUoh78RgHf1yIctoTrkBP38NhrQFj8n2LLsPwQNOf9wqInWnZmwOoI0osnFfKOtFP2kuoD62Kv8JTvhgFr9GtTCgDI&X-Amz-Signature=8f38e42fe6681c9eee1fb31db93c1b65ccc296b3c838315165da5aa352d8a169&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
