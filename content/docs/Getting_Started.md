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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWCXHLC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdU%2BxIyJB3Z%2FxQrVZEqVRzHEm9YRBN19ghA2viwiSFQIhAP5xDqjAHWJ4QYJA%2Fgqyr1Hnv0dibm88yEFQ7Zu9nkg7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgySSqGAx99PgvahrVEq3ANfJKTPaysDfJc7Rgm4rdQih9qVBYEMVReNZ0CYZFymB85Cb%2FLMxCTVpEZMEImJMNiWhK52AlyXCox84AC69LzrgLe%2Flcjd9F3TzFRAdKT4qGGfJ38FgQopyUFhanPO6D3bJoF7Rvn3MCYFy4UmM5KV%2FQQw0lpxddCZcvIgBISS6IyiaXF74idA3Pc%2FGcfclU%2FQlCOHKvwKRwERJzzpdP3XBh4zZy6m1YeNeq4MbI0RFl9ccWRKu79AkJsETsUH3NrzmnZelH7DWncQU5vtKhH7bXyy5htbdNwofEE6VpXdinCnMs1rtdajckUDkRAYyUDB7GVNHCu18KtKkdDFEdkF7r5ARdgKTtcI4e7j5ue49pZvP4SLOnhq%2FO1hhg1T7IXbbShYR4iPHMN7A7XPRwdumRY39L2%2FqExGC%2BqTOxGenjM%2Ff6d4xZpYFiGEQiPuOqv6rKxHdYZylEdgO4IA8Av%2B244Hs2RbKuHS2bBTiAxGFjjJkuBrDwsDrghu8mR%2FecTdjWTKNDEAGCnVL%2B4NU7VS94ry87RuArlzdtfBVhWjEcltvR1UDENg9%2Bt65i5xdoqRBqyPdRqfHS9bYWZdE716IjgdKrn5%2BG7cfN07sk%2FASZi%2BM7u6KE5U4S2bsTC57c%2B%2FBjqkAX%2Blag8romGAZe0mWCapDHQdmcycz90Ba0XFhRuqlaonv0jYrgALRZHhGC88rSR4fxiHCAFeqrHY8nEo3bo7zsk00aqTMdHh3oI77wIfbHGc8A3lcueFu%2B8M%2F0cfT86sNVsGskm8aWRrlnm3nZ6rvxOZYYl4IVZ1CEyCWqo9RvV6mvGNem3u3U4KWownHBz2hLsEN2OoTp%2Bsz%2BuSp7GD7DLrg9D6&X-Amz-Signature=87cde40ade982843febe2844e88187bda5ddd57dbb8d5b2fadcc31a40e217244&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWCXHLC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdU%2BxIyJB3Z%2FxQrVZEqVRzHEm9YRBN19ghA2viwiSFQIhAP5xDqjAHWJ4QYJA%2Fgqyr1Hnv0dibm88yEFQ7Zu9nkg7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgySSqGAx99PgvahrVEq3ANfJKTPaysDfJc7Rgm4rdQih9qVBYEMVReNZ0CYZFymB85Cb%2FLMxCTVpEZMEImJMNiWhK52AlyXCox84AC69LzrgLe%2Flcjd9F3TzFRAdKT4qGGfJ38FgQopyUFhanPO6D3bJoF7Rvn3MCYFy4UmM5KV%2FQQw0lpxddCZcvIgBISS6IyiaXF74idA3Pc%2FGcfclU%2FQlCOHKvwKRwERJzzpdP3XBh4zZy6m1YeNeq4MbI0RFl9ccWRKu79AkJsETsUH3NrzmnZelH7DWncQU5vtKhH7bXyy5htbdNwofEE6VpXdinCnMs1rtdajckUDkRAYyUDB7GVNHCu18KtKkdDFEdkF7r5ARdgKTtcI4e7j5ue49pZvP4SLOnhq%2FO1hhg1T7IXbbShYR4iPHMN7A7XPRwdumRY39L2%2FqExGC%2BqTOxGenjM%2Ff6d4xZpYFiGEQiPuOqv6rKxHdYZylEdgO4IA8Av%2B244Hs2RbKuHS2bBTiAxGFjjJkuBrDwsDrghu8mR%2FecTdjWTKNDEAGCnVL%2B4NU7VS94ry87RuArlzdtfBVhWjEcltvR1UDENg9%2Bt65i5xdoqRBqyPdRqfHS9bYWZdE716IjgdKrn5%2BG7cfN07sk%2FASZi%2BM7u6KE5U4S2bsTC57c%2B%2FBjqkAX%2Blag8romGAZe0mWCapDHQdmcycz90Ba0XFhRuqlaonv0jYrgALRZHhGC88rSR4fxiHCAFeqrHY8nEo3bo7zsk00aqTMdHh3oI77wIfbHGc8A3lcueFu%2B8M%2F0cfT86sNVsGskm8aWRrlnm3nZ6rvxOZYYl4IVZ1CEyCWqo9RvV6mvGNem3u3U4KWownHBz2hLsEN2OoTp%2Bsz%2BuSp7GD7DLrg9D6&X-Amz-Signature=965f433d51a0e0a10bbe3942566cce48e83cd32b6925b525699b7aaeca4b5307&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I75S7FW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3HFiombrtqkXsXNJGBoksOWMAkTjOGRLguAkMxPWNxwIgTOUHCYkw1fcQDVDoDkvl%2Fh52Uts2jMQu206%2B1VfBwWQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGHxz2GRv13tI84nhyrcA3SgEzkcBUW8HhAuAMh%2FifjGfcMbU%2Bs2jr3mvP%2BFbV%2F0tPixvAgas6X8d%2FKSf8RAoDMIAPbwBWb0QPwOOYIWkwFurO10%2F2Yf1zA5okjqutVw3DUbciYpx5mRu1bpsNA4kSBg3zQM7as%2FIsh6grmOz23joBnu%2B0nhDS4IfBbpOIlOMm6idclQKIHzkSQnz3GlCe5aQJcsFODwsPunj3IU3wKUEROiH4EBGCXIcT3ZzPcpVqZF5xPLO1QMWKWav%2BtJ5SqX9PX4U3vSM3a652k2fpXzC7ZIeyjsfDbL0GmQD%2B5gNTYdPzyJQPJ4p5iQHzw%2BKjMz5OuOqHlM4rIPyCnP0IfyOCvTpnCMnWYMpYu1OHZ5TTNCysXHViY1KFMcUjvNxTqUcKd98LPjvXf8Sq4FI36tm86fUG%2Fd66OZ9jXQwOTYcmb60F8OSEMbCtCeJwvVD7Cu8cLXq02AfJAToZmW5DUPAZtVRFM3yGZSTx3DPTJnNY7qzQtQCt5cuHYkiCafJmQwYnImT1f7ISty%2FYNCaPDN8DWJS%2FRCDu44Gvgd3%2BmCVUVKeHu4%2FX6yo5tTf5DyKtrBluOgn2vBeHqeoup6n0FXlMnHfebpULOblTFd40N8CQQ7NcH7dCFwfWlUMPTrz78GOqUBslCraZZZGe29VfzEl3NjuZ7woIq1587meChWP1FbSbpnx3yFmDxb1qv6aiP4mWl4fh19Vwwo5%2F60%2FuBBa4UmUXdoShDaTf4R%2BjqJXClhQkqtfyFisc8OqNoroyBjw0mIjjwDaX3Yj4dkiu05hXknfLr13NQEl8t%2FHvKmYngYq3B5D34ZaY78n5xSPwtf%2B43XNweSu1cZ4kh36Qb%2B5hYLSuNTjllS&X-Amz-Signature=98bfb3ff10e5a73c0d354d6ec85a98ca60f64e359ad34d1a6b04edf0beb5b085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z27VRDWV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3lwEAfCScFhaI0sQ%2FiacWhLQsCdWgx6Uz9gYyIxRibgIgcpQt7wpm2NYDTEqsj7KfCEg5pi4NrvBWwyzproCOsQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJmqtEHIUZyEBThpjCrcA9Kt3KQOx8jmAoxrDPqReNQVAgyyshQStZj4D%2FYGY1L7gHDyvhHlW6sDRBQxAaF0zGtjPAQV0h8JhtYca4GOt2w%2Bn6tZkJswAex3WCiOgYId6AXEH8Kf3HAV3uI20BW9y4vkAHTYOYqsSVCqwFDBOWDi9azRficauC2v5bCLFrWkl0VtUf8CNrUdBup0isvCPvQeCPhK4HBduBRE8FHXKGt5QIkEh6TggvoYMLSDETwZq8u%2BN5A5V30hhoJWla8KrpAwjPEjY5V1BlLYSh2mFXtBCPs%2FsmscTOKyC4alp7mQz2cd3JUVNM7Pz6o%2B5qt0BhycRrXYfpBu2dUZTRDTNklc0lVEVZqjeEAb6P1t5I7idOk5Ra8u9w4joidUgwFrhuOuf5sfL12KXqw2g0%2B8HGJYrh4h0Os9XYZBHKBPkho0oR1E9Ou1xqSF8IzaKeUYfTZXAquVT0GE%2B4o%2B3BEp60fbKkXAKYhOgLa5JNoSsUdLDP0yvyOOisIkB6N4MLAsawsT0fyZKCN3OOabEfQojhv7s6jF3bXGzJPOzxnu3CzmAKUuJwCCJhho%2B0NJFeY33%2B3EtLaHrCalGrZWKzKlus4bUUKO0BdHk%2FDryhEVzdiBBm4Q9YObYBahEK1XMO3sz78GOqUBa4xUbk2GfIpOXOJ0RAtrO5Ee0pVpDbNfjVmNPrPkNE3ECHPdIMWNJ05nNM7eYZ1aGrRkQUKRPqdwQoouHiZ0pbz8M40%2B%2BTrZ8oq4lUIiXWIwpPu1o0dY%2FdOIZLNGTRMj1TAMZzNgvIMFlejpru1VKbPFCh5lqzbW854Oct%2FWoli1brQWo3b8Et05RbvwPiTlZtW%2Bc267YrLEt7AHVJc7g1EA3qCV&X-Amz-Signature=3cd57ecc4d65d6c57b208114ed17fe30db8fbfe13ba5b970a2815c87174f997e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWCXHLC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdU%2BxIyJB3Z%2FxQrVZEqVRzHEm9YRBN19ghA2viwiSFQIhAP5xDqjAHWJ4QYJA%2Fgqyr1Hnv0dibm88yEFQ7Zu9nkg7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgySSqGAx99PgvahrVEq3ANfJKTPaysDfJc7Rgm4rdQih9qVBYEMVReNZ0CYZFymB85Cb%2FLMxCTVpEZMEImJMNiWhK52AlyXCox84AC69LzrgLe%2Flcjd9F3TzFRAdKT4qGGfJ38FgQopyUFhanPO6D3bJoF7Rvn3MCYFy4UmM5KV%2FQQw0lpxddCZcvIgBISS6IyiaXF74idA3Pc%2FGcfclU%2FQlCOHKvwKRwERJzzpdP3XBh4zZy6m1YeNeq4MbI0RFl9ccWRKu79AkJsETsUH3NrzmnZelH7DWncQU5vtKhH7bXyy5htbdNwofEE6VpXdinCnMs1rtdajckUDkRAYyUDB7GVNHCu18KtKkdDFEdkF7r5ARdgKTtcI4e7j5ue49pZvP4SLOnhq%2FO1hhg1T7IXbbShYR4iPHMN7A7XPRwdumRY39L2%2FqExGC%2BqTOxGenjM%2Ff6d4xZpYFiGEQiPuOqv6rKxHdYZylEdgO4IA8Av%2B244Hs2RbKuHS2bBTiAxGFjjJkuBrDwsDrghu8mR%2FecTdjWTKNDEAGCnVL%2B4NU7VS94ry87RuArlzdtfBVhWjEcltvR1UDENg9%2Bt65i5xdoqRBqyPdRqfHS9bYWZdE716IjgdKrn5%2BG7cfN07sk%2FASZi%2BM7u6KE5U4S2bsTC57c%2B%2FBjqkAX%2Blag8romGAZe0mWCapDHQdmcycz90Ba0XFhRuqlaonv0jYrgALRZHhGC88rSR4fxiHCAFeqrHY8nEo3bo7zsk00aqTMdHh3oI77wIfbHGc8A3lcueFu%2B8M%2F0cfT86sNVsGskm8aWRrlnm3nZ6rvxOZYYl4IVZ1CEyCWqo9RvV6mvGNem3u3U4KWownHBz2hLsEN2OoTp%2Bsz%2BuSp7GD7DLrg9D6&X-Amz-Signature=9baa2274f5ff76bd98126057641dbc45f65d66f06778abeef5e7443ad56e2c60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
