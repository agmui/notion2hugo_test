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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSDXH2O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDVaI5W6Qhepx3GU4eQlaZv%2FMqmtxP%2BAQpZy0QyQXnLugIhAKgxDA8XVdtvJlrH3x%2B6dvdmH9Nss43OYr3vZ8CZkqpsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyIdrH%2Fc7d2Nm8U73Uq3AN18atY92FkgNtbaObrDYHYfe2eKVLIiyNaGcoB%2FThnA8VSQ9GPMeeRVBWqoBDxDgPiYwmzFrsdQ8xvwL66ccUqOCuTqFN7zkIGdC4zYVE6q602Qx9USEG8%2Fu0KHIEuRe8QySIt6vz0w1ZCwH12r0rWM60JRz3Ft7bxCBqi5IjWat4JBB1Mtj4aeT0QfGAmKz913iUv5r5%2FZSXAhmWoTAUt8wrQyLFMxNBoPJpQXrti617FLA72X9ygk85Gb3d8FwqQdqFBYx%2BWcL1vvc16QoiudVIaFOkgkfSDsTpL1zxbDgv8xkiQ0xe8R2FGfLFS29BWeVrZlhx%2BR6x3NvMrOl0DLfaKTxYAP9ZwEZtY2A6o4oVCaszcs16y2agdarX5w%2FLnnxz%2B1LUp4%2Baqna%2FXCBPhYObhet7Y0Dmeghn9xNhIvHRsOhfoWTKhcD0PP6SfwX5FWcouDA8hvbbwbEXKLQgGtdKBK3sBO0k21UYedmmoQO8xAw0rnkjBs2GaTbxRD6WMvhhSzdlzBAuz10bWiIwSzwfxGAkglzmnAdZlf3JHQgrXg0vRWrddfNXjjgfKtprzyJrYov2Mr3BNP8nAb3xp1GHycFF%2FiWREWwqULH23WsJoSN7G%2FDswcsaG4jDZzMjEBjqkAfeFQUDLG7nkFzXGtwdGBwH6eOXqR0GkxdHReMCd8o1%2BBHfUh1WOmxMyKI%2FM8zw0U0qgrFvZG%2BgfiEWQjKla38mmaxCEHo6iBXHYdj0RstaKDfYiQMOjng%2F7atHXXERrJg5kQDyfcitXRy%2BSgeSPujjDt4U%2FkDQnjClEfT7jlCeWORCZZy5H3xsxvvddY4SCDV376qyZTmkohyDmDmyDltiwvv48&X-Amz-Signature=4df006944bb1f2b5b1cf7f0b1a46f8831be3b2f58e887e7b2b39886932657f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSDXH2O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDVaI5W6Qhepx3GU4eQlaZv%2FMqmtxP%2BAQpZy0QyQXnLugIhAKgxDA8XVdtvJlrH3x%2B6dvdmH9Nss43OYr3vZ8CZkqpsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyIdrH%2Fc7d2Nm8U73Uq3AN18atY92FkgNtbaObrDYHYfe2eKVLIiyNaGcoB%2FThnA8VSQ9GPMeeRVBWqoBDxDgPiYwmzFrsdQ8xvwL66ccUqOCuTqFN7zkIGdC4zYVE6q602Qx9USEG8%2Fu0KHIEuRe8QySIt6vz0w1ZCwH12r0rWM60JRz3Ft7bxCBqi5IjWat4JBB1Mtj4aeT0QfGAmKz913iUv5r5%2FZSXAhmWoTAUt8wrQyLFMxNBoPJpQXrti617FLA72X9ygk85Gb3d8FwqQdqFBYx%2BWcL1vvc16QoiudVIaFOkgkfSDsTpL1zxbDgv8xkiQ0xe8R2FGfLFS29BWeVrZlhx%2BR6x3NvMrOl0DLfaKTxYAP9ZwEZtY2A6o4oVCaszcs16y2agdarX5w%2FLnnxz%2B1LUp4%2Baqna%2FXCBPhYObhet7Y0Dmeghn9xNhIvHRsOhfoWTKhcD0PP6SfwX5FWcouDA8hvbbwbEXKLQgGtdKBK3sBO0k21UYedmmoQO8xAw0rnkjBs2GaTbxRD6WMvhhSzdlzBAuz10bWiIwSzwfxGAkglzmnAdZlf3JHQgrXg0vRWrddfNXjjgfKtprzyJrYov2Mr3BNP8nAb3xp1GHycFF%2FiWREWwqULH23WsJoSN7G%2FDswcsaG4jDZzMjEBjqkAfeFQUDLG7nkFzXGtwdGBwH6eOXqR0GkxdHReMCd8o1%2BBHfUh1WOmxMyKI%2FM8zw0U0qgrFvZG%2BgfiEWQjKla38mmaxCEHo6iBXHYdj0RstaKDfYiQMOjng%2F7atHXXERrJg5kQDyfcitXRy%2BSgeSPujjDt4U%2FkDQnjClEfT7jlCeWORCZZy5H3xsxvvddY4SCDV376qyZTmkohyDmDmyDltiwvv48&X-Amz-Signature=1dc93c414ee1da8e6a2178a071916cc4f49cbd31fd61b7546f671edb03c54548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSDXH2O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDVaI5W6Qhepx3GU4eQlaZv%2FMqmtxP%2BAQpZy0QyQXnLugIhAKgxDA8XVdtvJlrH3x%2B6dvdmH9Nss43OYr3vZ8CZkqpsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyIdrH%2Fc7d2Nm8U73Uq3AN18atY92FkgNtbaObrDYHYfe2eKVLIiyNaGcoB%2FThnA8VSQ9GPMeeRVBWqoBDxDgPiYwmzFrsdQ8xvwL66ccUqOCuTqFN7zkIGdC4zYVE6q602Qx9USEG8%2Fu0KHIEuRe8QySIt6vz0w1ZCwH12r0rWM60JRz3Ft7bxCBqi5IjWat4JBB1Mtj4aeT0QfGAmKz913iUv5r5%2FZSXAhmWoTAUt8wrQyLFMxNBoPJpQXrti617FLA72X9ygk85Gb3d8FwqQdqFBYx%2BWcL1vvc16QoiudVIaFOkgkfSDsTpL1zxbDgv8xkiQ0xe8R2FGfLFS29BWeVrZlhx%2BR6x3NvMrOl0DLfaKTxYAP9ZwEZtY2A6o4oVCaszcs16y2agdarX5w%2FLnnxz%2B1LUp4%2Baqna%2FXCBPhYObhet7Y0Dmeghn9xNhIvHRsOhfoWTKhcD0PP6SfwX5FWcouDA8hvbbwbEXKLQgGtdKBK3sBO0k21UYedmmoQO8xAw0rnkjBs2GaTbxRD6WMvhhSzdlzBAuz10bWiIwSzwfxGAkglzmnAdZlf3JHQgrXg0vRWrddfNXjjgfKtprzyJrYov2Mr3BNP8nAb3xp1GHycFF%2FiWREWwqULH23WsJoSN7G%2FDswcsaG4jDZzMjEBjqkAfeFQUDLG7nkFzXGtwdGBwH6eOXqR0GkxdHReMCd8o1%2BBHfUh1WOmxMyKI%2FM8zw0U0qgrFvZG%2BgfiEWQjKla38mmaxCEHo6iBXHYdj0RstaKDfYiQMOjng%2F7atHXXERrJg5kQDyfcitXRy%2BSgeSPujjDt4U%2FkDQnjClEfT7jlCeWORCZZy5H3xsxvvddY4SCDV376qyZTmkohyDmDmyDltiwvv48&X-Amz-Signature=3e0cdee86ac48b362cccc4fe9a3ef14e39bdbdbc60866fbb8aef58d62d759b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JU7O63D%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH4YLacz40cryXaui2QMugO9GC4YB1%2BHiAlqdo7ZQXJGAiEAtPUZ6xJ25Bs%2BM%2F8dImMiBOmtAaMP8qpjNls9cc4WUhcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDKmJxvSXNMO%2FP8KBircA6fysgj99fesoJANFMJjwR72dp4F74GXX9u2lFcNYgee0fNdm0K9WIZLGC0uIDUMfxHDgpymck2MoKJgTn4rqfdS9%2Bxwcwv8eGRJ5t3yw5EAJcsdnSpIkqiPdIaQwYItwF%2FEN4sbo3v0XzfieS6pWaeXxZFb30xIIQ3%2BpfEVTZ2TWe5Bwc3Lork4dsZD6OMbg%2F2UQX9oxIzr6G2N42KIJMq1S6wKvkkGOJoXJauPI9IoX3tVr9wtPe2%2FLbmAJAm%2BfAX%2BTRib5syjSVyy0nguMaO6cwnsvVLr82RRHeQdTMa4zKzhVBbpAHl20QuZhBp0FSYJabL5kZxROsl1eImTTo2OWUdRFkpI74zCYV%2BjkJiM1iUdC3tViqsh%2FxoVPAJmUiOG7vRVBfcI%2B30cx7VvggLD3wqfVKlmQFMqSXPQexjcJ96qgNJayxYTRRt8iqHuipwtOTwc0m8ceixem65oBEdJR3e3ac6%2Fh3fu2qqyVJKak67mipaI8esI10O0b9veZhDu2uFbAnv0OvSG4d4M6yi7PP2%2FEaTrkkHWCtdNmpEdB8eAVuPCwxbaP8i9zVZtXcp3pQSPQNsuaqbDfIs8qNqAwcYdoIE0D0DvlXNohY8pb9qgDh8PUsDILoCaMNbMyMQGOqUBs3vBdJVddRld%2Bf41HjXvKsHiAxjne7WU5GahaHnTgxBopRCGKHs06f3HRKKppj8cbc2OQsXUFmKYBSVSlELJbni8Nhfp9No7rfDxME5MYS8bPJr8yZ3MXvq88sRxy1T9d3DO7h7UXH7vthABH3zQtixqOaeU91J3SFmKL%2BVdlivyvUF8t3Y5sjMIreoimHTJqGj4oGl3VQ%2FHW4UV1c%2Bjc1Uf563P&X-Amz-Signature=55b8c925cdd4bab86749e32194f6d9719d3e651bb6637ad1920bafc0aeb41921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOY75T7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA0rS7ki4K0ndYqF%2Frd%2B%2FwOpSyutoOqVyb25%2F6pEeN2GAiEA4H8cn9krFirAr4tm26HlsySgknVUEGnB734ERPk%2FmZEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJT2VQF36wPvK4pZgyrcA6AUV2vjDMQ2HoLHnhHMo2JvNjuzvX5RvP0pxgj1psLyaZBYWTyxK8J17m17vDuYNFoqcwjO2kbQagfGC3UQKYCw7oPs4weUi39O3j1rv%2BvWFEcIpFCfOygbiz9b0IWtzUKtHUJH5eUtNCwdSWldecYW7EMwJR%2Ffrvdg5oQtop4RByWaN5PWZkmxxBn0fnkbU%2BJM5vS08rNf3O%2FB0mTwJnjhhOn2%2BUX7C02PawpsZwczpdme2O4b6NHhJ0jJPIFnhqK%2B8X1xW95mDV1rXF4ZhIfM%2FSz1Be6PNFP0VA0oXj1xNsjilpGgpxszE9XN62jnfiI3Dju2dg%2B4oYcrznRJhlyfq1AhBQIl30%2BJ1kn3YBF7vW0mErlxz%2BXQFIfp4JHMZY9GccuCVvI8aEBC0x3VlREAZGck%2FTXd4fsLakqB66blCNgT3CLx9prHTdKwFNmgHICB%2F%2FIu3Ybva0WM3usuEPgIYoLpQyETM0T%2BcIK9lczOsNLH97dEjYEMDRqK7M7B7Dt72kMskkGA5G0xPmuJh2gHsCNuY4jISqNnjSBHEgn3TNpc%2BYsly18nEgx0CqIGmK%2FdX6iqvcxfsh1sJeYroHfK0oTzVF%2FF5idrZkx2cRM%2BkmxJh4g8kNmcS8S0MKLMyMQGOqUBuzJkTQ0%2B9GwC5tWVjbXpGTptSwYiq1sQ50npjPysbSP0pxifKjxBT0Gqme%2FW3taO%2B9%2F7Dng07nENgVcMvURdTSnPHeUpz4ibcWN3iQqTv8asNMXfNqV%2FpH5kGN05Y%2Bx8U6dAbRE3y%2FMSc6s0hT3MT58e7vueHBPr5PRaMSqqvlV8chW%2B0YSTxat1vwa8Sv%2BJgayzO3pR%2BwWr%2Ffc2v1zbvg52smMy&X-Amz-Signature=98b980ff6306c2eea28998c9f697c50721f53c2f5d9fa80570d5a3dbd8435e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSDXH2O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDVaI5W6Qhepx3GU4eQlaZv%2FMqmtxP%2BAQpZy0QyQXnLugIhAKgxDA8XVdtvJlrH3x%2B6dvdmH9Nss43OYr3vZ8CZkqpsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyIdrH%2Fc7d2Nm8U73Uq3AN18atY92FkgNtbaObrDYHYfe2eKVLIiyNaGcoB%2FThnA8VSQ9GPMeeRVBWqoBDxDgPiYwmzFrsdQ8xvwL66ccUqOCuTqFN7zkIGdC4zYVE6q602Qx9USEG8%2Fu0KHIEuRe8QySIt6vz0w1ZCwH12r0rWM60JRz3Ft7bxCBqi5IjWat4JBB1Mtj4aeT0QfGAmKz913iUv5r5%2FZSXAhmWoTAUt8wrQyLFMxNBoPJpQXrti617FLA72X9ygk85Gb3d8FwqQdqFBYx%2BWcL1vvc16QoiudVIaFOkgkfSDsTpL1zxbDgv8xkiQ0xe8R2FGfLFS29BWeVrZlhx%2BR6x3NvMrOl0DLfaKTxYAP9ZwEZtY2A6o4oVCaszcs16y2agdarX5w%2FLnnxz%2B1LUp4%2Baqna%2FXCBPhYObhet7Y0Dmeghn9xNhIvHRsOhfoWTKhcD0PP6SfwX5FWcouDA8hvbbwbEXKLQgGtdKBK3sBO0k21UYedmmoQO8xAw0rnkjBs2GaTbxRD6WMvhhSzdlzBAuz10bWiIwSzwfxGAkglzmnAdZlf3JHQgrXg0vRWrddfNXjjgfKtprzyJrYov2Mr3BNP8nAb3xp1GHycFF%2FiWREWwqULH23WsJoSN7G%2FDswcsaG4jDZzMjEBjqkAfeFQUDLG7nkFzXGtwdGBwH6eOXqR0GkxdHReMCd8o1%2BBHfUh1WOmxMyKI%2FM8zw0U0qgrFvZG%2BgfiEWQjKla38mmaxCEHo6iBXHYdj0RstaKDfYiQMOjng%2F7atHXXERrJg5kQDyfcitXRy%2BSgeSPujjDt4U%2FkDQnjClEfT7jlCeWORCZZy5H3xsxvvddY4SCDV376qyZTmkohyDmDmyDltiwvv48&X-Amz-Signature=9292a4df097e5539ac457919b9777d4da0bb410165438e508fc9fc468413d1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
