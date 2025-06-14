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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AL6XXPV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFxtkYJnt%2Bcs8IS93xoByB%2FYkQnREY9cw2oVpMuMU5H5AiEAo86gPk9bSlNzDz1dk6aDrn0LI3qy3saWKNpyZv5QrXwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMCU%2BzyaVBFTsTD%2B8ircAyDN5ady7viIDxV3G9Vgl%2FgO03HqnjP%2FHV6kwL8gCMcMp4mXKnA2o7Xv8okH72lKkM741LWDnw6tduiEYXbNh57e8EiCb8JtVYNKrJp5M68%2BYWy0lU961xPzHBujHMMAt%2FyhnlyjHtJA%2FyVE63tvbR2GdiTIYIu4zZhc%2Bi5QOVN2BO%2BKLqB69jobvk95gCEQFrF5tazgcQ%2FQu35Y4IikN0WaWX29ddpKlujINa2uZglzxB9msq2ULiuB8JTuX0NusSYTtDHG0sFXzTbdaiDD1CqPYT11wv1MVGAe7ji8Hq4LC9hsN%2BRZfuXKggLxhtVA0sFzYCvlwlQk38DjidIuW8Ll1B3Z1jOScRCDeA2Clnl681cbgrb7JPNP9%2Bc7mEijScYt9GOBH%2BMX172EQvd55%2FFkwb060LJ7DjGZSD3W7jYPD7csWjiv5QeALHgOowZOHqdG2DCxFGws7Oqfn%2B5Hjy9BZaPTzvbYSevLEfIXRRn3x5JhAjE3%2BWTSsba83lA%2BnVp3U6f8fI2vkQoHKN8KrtzY4SYOjHWnE5BVyZIn%2Fp%2F6UPOckHU0fE7qgv7yKXScRqCwoI1WzxEyrUBv4KcS692Flir8bREj6U3HecZUD5b7F5x4pvf2TY%2Fe2b4cMMLbssIGOqUBLtEj4Q11vobMKjVvfJhz%2FbnGjYsuA%2FB79HsLj7XX3V%2FANHzrEbt6dhlo6xl%2BTXe1VWUlxscw1uK9MXpDkTCzPJBybeoBqTzB2%2FoKBDsP8lMN1Ut7cW5NSgvMQSIgFa%2B8qUYTo1eDxtc%2BGl2FqVU5p7FR9i5nrAc0AIBWy6%2F6bqETJHnBfarJkAkXVr6raspMorTeKJtudhxNCGPN%2FHIbsbt7yjTu&X-Amz-Signature=854bc07752ee97aaa3169b282bd4b32e76ebc353b7538b503c73999478267ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AL6XXPV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFxtkYJnt%2Bcs8IS93xoByB%2FYkQnREY9cw2oVpMuMU5H5AiEAo86gPk9bSlNzDz1dk6aDrn0LI3qy3saWKNpyZv5QrXwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMCU%2BzyaVBFTsTD%2B8ircAyDN5ady7viIDxV3G9Vgl%2FgO03HqnjP%2FHV6kwL8gCMcMp4mXKnA2o7Xv8okH72lKkM741LWDnw6tduiEYXbNh57e8EiCb8JtVYNKrJp5M68%2BYWy0lU961xPzHBujHMMAt%2FyhnlyjHtJA%2FyVE63tvbR2GdiTIYIu4zZhc%2Bi5QOVN2BO%2BKLqB69jobvk95gCEQFrF5tazgcQ%2FQu35Y4IikN0WaWX29ddpKlujINa2uZglzxB9msq2ULiuB8JTuX0NusSYTtDHG0sFXzTbdaiDD1CqPYT11wv1MVGAe7ji8Hq4LC9hsN%2BRZfuXKggLxhtVA0sFzYCvlwlQk38DjidIuW8Ll1B3Z1jOScRCDeA2Clnl681cbgrb7JPNP9%2Bc7mEijScYt9GOBH%2BMX172EQvd55%2FFkwb060LJ7DjGZSD3W7jYPD7csWjiv5QeALHgOowZOHqdG2DCxFGws7Oqfn%2B5Hjy9BZaPTzvbYSevLEfIXRRn3x5JhAjE3%2BWTSsba83lA%2BnVp3U6f8fI2vkQoHKN8KrtzY4SYOjHWnE5BVyZIn%2Fp%2F6UPOckHU0fE7qgv7yKXScRqCwoI1WzxEyrUBv4KcS692Flir8bREj6U3HecZUD5b7F5x4pvf2TY%2Fe2b4cMMLbssIGOqUBLtEj4Q11vobMKjVvfJhz%2FbnGjYsuA%2FB79HsLj7XX3V%2FANHzrEbt6dhlo6xl%2BTXe1VWUlxscw1uK9MXpDkTCzPJBybeoBqTzB2%2FoKBDsP8lMN1Ut7cW5NSgvMQSIgFa%2B8qUYTo1eDxtc%2BGl2FqVU5p7FR9i5nrAc0AIBWy6%2F6bqETJHnBfarJkAkXVr6raspMorTeKJtudhxNCGPN%2FHIbsbt7yjTu&X-Amz-Signature=7e2a4766d21ae70d1f70a13fde529fa1b82481d1927d000fc3321167f7f7abec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AL6XXPV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFxtkYJnt%2Bcs8IS93xoByB%2FYkQnREY9cw2oVpMuMU5H5AiEAo86gPk9bSlNzDz1dk6aDrn0LI3qy3saWKNpyZv5QrXwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMCU%2BzyaVBFTsTD%2B8ircAyDN5ady7viIDxV3G9Vgl%2FgO03HqnjP%2FHV6kwL8gCMcMp4mXKnA2o7Xv8okH72lKkM741LWDnw6tduiEYXbNh57e8EiCb8JtVYNKrJp5M68%2BYWy0lU961xPzHBujHMMAt%2FyhnlyjHtJA%2FyVE63tvbR2GdiTIYIu4zZhc%2Bi5QOVN2BO%2BKLqB69jobvk95gCEQFrF5tazgcQ%2FQu35Y4IikN0WaWX29ddpKlujINa2uZglzxB9msq2ULiuB8JTuX0NusSYTtDHG0sFXzTbdaiDD1CqPYT11wv1MVGAe7ji8Hq4LC9hsN%2BRZfuXKggLxhtVA0sFzYCvlwlQk38DjidIuW8Ll1B3Z1jOScRCDeA2Clnl681cbgrb7JPNP9%2Bc7mEijScYt9GOBH%2BMX172EQvd55%2FFkwb060LJ7DjGZSD3W7jYPD7csWjiv5QeALHgOowZOHqdG2DCxFGws7Oqfn%2B5Hjy9BZaPTzvbYSevLEfIXRRn3x5JhAjE3%2BWTSsba83lA%2BnVp3U6f8fI2vkQoHKN8KrtzY4SYOjHWnE5BVyZIn%2Fp%2F6UPOckHU0fE7qgv7yKXScRqCwoI1WzxEyrUBv4KcS692Flir8bREj6U3HecZUD5b7F5x4pvf2TY%2Fe2b4cMMLbssIGOqUBLtEj4Q11vobMKjVvfJhz%2FbnGjYsuA%2FB79HsLj7XX3V%2FANHzrEbt6dhlo6xl%2BTXe1VWUlxscw1uK9MXpDkTCzPJBybeoBqTzB2%2FoKBDsP8lMN1Ut7cW5NSgvMQSIgFa%2B8qUYTo1eDxtc%2BGl2FqVU5p7FR9i5nrAc0AIBWy6%2F6bqETJHnBfarJkAkXVr6raspMorTeKJtudhxNCGPN%2FHIbsbt7yjTu&X-Amz-Signature=35b3f037069f65e4fa7f9b7d9feed0f72aeb2fd82303a4c061fc888a289f27aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7R4W7ZH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChb%2FweplcKnee4WodExGzRnFkyhe35IaJMZoUgY%2FaETQIgDVo96feT9T6QgLjHEcMFUfKNuPZpLDOLu0%2B95m2cgs4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBRJizu5LRPsQetJ0CrcA95KcagUk7fwtkUVArvSFIX%2FGsNfCgZZOGnLMutsVjvAKg9GWYd7MXbvNza25ycf3BedN13A2tl64UVJrHxcRtOQ5quRAs%2B0t9Ea1q76dUVwHYvu4cLGlVem3l8RwyDYJH1Vw6V1Ov4vdTdAv87p4LQxfCBKF9w6ZfM36YurEfpOkQaX9cL7ZPyP6%2FkRNvbt8K0vs9wRLrVZ67vVNRiISLEeXRQ9d9ADeZgKxV%2FUTMjw%2FxCnxA3YDHF7BBgntU1MWVoBaquh6hHIkTNEP1zEfvpA0odOWe5AxXvUW%2FXImccnO5uTXmq0Cq6iErfyywcdOotFAlWfucqbFeHm5VYsAQP9F%2BN5QzR9MsQ5DTJnrqfDvWHYJcpSYtoB39XkTQxemDUqzKY9DgHhvu%2FTQR2wphk2V9htwwxB3YwEbXJDsUCt6ldDbvE6qE228668QktEbI5%2FKLqW3T15UrWw9eOKSWzHS1vgon0uzlWNUpD673UJE7NabpYSEa%2FQnB9o68p1UcvUS8CgTuNcahEMrWcy8FvhCbFySLDFWkGqsBU%2B2orUKyKr8gQfLvY9mMxkeNpC3DE%2By6B3PajXC2I%2Fh4UCOuDSGcUTzYsi4IZnTu1I%2BN%2FHtTHlpvQ5%2BHzTyqlNMMLbssIGOqUB%2F4jKjmUPa6uJ4RQpb3GyTNQWBFHZ1PxqQfIZtNlHHKiVDT0EMvV2ZmUTUe1W2fQUUE%2FbgbBdM2Irm7YBfrU3mXgyq8zfWwXhutHxjJnzUCOpXFJ3y0xsfo0g3Y3skwQOiO4wy7XFAHnogmrMI9Ce6SalRC86j0SIGCaB1v5%2FasnFttCm4hUn9ZFE3YTQj13Nco7RYUIJRC3egrZJ%2BAvyDNrDt54d&X-Amz-Signature=94971045cb468696c65cd58dad71d38c0637bb413941a7e57a3fc8cffc16b8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75MV475%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDDAdrAxD8phUjHDXaXuxfpi0B2PuD%2FqPfWSocjDyj6owIgCGG2OmsUImzLMUb3QFXMp5IpyrFv6S%2BHwJ6SlkPh24Yq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN%2Fn1gkelNdcJd9xrSrcAyuAQQqvI%2BD%2BAZQPCH9ttfQsRQSaoSVPGirqZJSpWUOIHGryXXWlLE6N8dz79dinsfFf9%2FMXcwCSShvXpzbagaCAe3cb1hBxLCb8vjcQGSrRV57G4G%2B3RXl%2BD60%2FM9rzmqMSStpUSzttTcOuZ5R3ngKQk6PEXV5FKMi7UeFDJ2jS401JgUDLuR1d3FqlFzmXmZIo3MaIYPFSZgpKtSC4Wxlp5ao8FsOhwixLyRejn5D4ISZ5NR0OL22ci4PR4G%2BFtY0uqvL6bzCI586MscIZaIS23iZI3GSKdXWCtHhbrMzRjhFQwe46ik4lZHyUIRALH709iIQSNcE4iPcAxgb9e3Kbv4CwqsqAMFqsC%2Bkutn5DUwrqN035wrWshEkEm0wxkCyjmYBt1y7HizrGc5K8ZGl9H9wf9ZaNLpnZSkiYj4mS5uJZ9nfZWVO9exav2lO2e9RZCn9KwAl5rMOOiUo4%2BsbgV5Iv5phD50zHm2lUSoCMozODGYYSGjG5fzw51dB%2BAw2w1%2BlBbSQ76Zop1eeqZSLpnQnPkSDyHuyt5Ti4Ef7au9WR3PMnb7viGu1V6LpQGFV9DtC0HD2dWwZ1MRRj%2BMXSZaaReafgVgtxQ4jsuJ6sjbvRmgqofKHpqPfsMMnbssIGOqUBxWugJQDGoU%2Fy4t6dhFQ2JBVCccQbc%2FqADXKgQAOOk7yJuRzB7iFiEDLEVCWhS3COr%2BUGBkwXPMO5YVC2o7Z7f3z3h9RwTEcSaYHhdnhSebAvSo%2FQ2lf4%2B3evHa%2BGOU4I%2Bws8EHkCQsbwcjfM6SRuKSrDGdwkCbHZZRxkeKPKqE%2FxayEghv2DxYVVQc3Ep%2FycSNtMw3sOj176g%2ByXp6fDQjpOi%2FyO&X-Amz-Signature=8ada81e9130d372a039b28c6030dace5e2bd38d4b77912f2858002e220eb8a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AL6XXPV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFxtkYJnt%2Bcs8IS93xoByB%2FYkQnREY9cw2oVpMuMU5H5AiEAo86gPk9bSlNzDz1dk6aDrn0LI3qy3saWKNpyZv5QrXwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMCU%2BzyaVBFTsTD%2B8ircAyDN5ady7viIDxV3G9Vgl%2FgO03HqnjP%2FHV6kwL8gCMcMp4mXKnA2o7Xv8okH72lKkM741LWDnw6tduiEYXbNh57e8EiCb8JtVYNKrJp5M68%2BYWy0lU961xPzHBujHMMAt%2FyhnlyjHtJA%2FyVE63tvbR2GdiTIYIu4zZhc%2Bi5QOVN2BO%2BKLqB69jobvk95gCEQFrF5tazgcQ%2FQu35Y4IikN0WaWX29ddpKlujINa2uZglzxB9msq2ULiuB8JTuX0NusSYTtDHG0sFXzTbdaiDD1CqPYT11wv1MVGAe7ji8Hq4LC9hsN%2BRZfuXKggLxhtVA0sFzYCvlwlQk38DjidIuW8Ll1B3Z1jOScRCDeA2Clnl681cbgrb7JPNP9%2Bc7mEijScYt9GOBH%2BMX172EQvd55%2FFkwb060LJ7DjGZSD3W7jYPD7csWjiv5QeALHgOowZOHqdG2DCxFGws7Oqfn%2B5Hjy9BZaPTzvbYSevLEfIXRRn3x5JhAjE3%2BWTSsba83lA%2BnVp3U6f8fI2vkQoHKN8KrtzY4SYOjHWnE5BVyZIn%2Fp%2F6UPOckHU0fE7qgv7yKXScRqCwoI1WzxEyrUBv4KcS692Flir8bREj6U3HecZUD5b7F5x4pvf2TY%2Fe2b4cMMLbssIGOqUBLtEj4Q11vobMKjVvfJhz%2FbnGjYsuA%2FB79HsLj7XX3V%2FANHzrEbt6dhlo6xl%2BTXe1VWUlxscw1uK9MXpDkTCzPJBybeoBqTzB2%2FoKBDsP8lMN1Ut7cW5NSgvMQSIgFa%2B8qUYTo1eDxtc%2BGl2FqVU5p7FR9i5nrAc0AIBWy6%2F6bqETJHnBfarJkAkXVr6raspMorTeKJtudhxNCGPN%2FHIbsbt7yjTu&X-Amz-Signature=ed5e2ea004a085c3948162d2c10ecbd6c01f5b35a4851bb0c813f9151a4394c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
