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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKGNWSO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHe2hcj0OhZX7E80gevdlXhmi6k5juS1gjjQLG%2B5E%2BbQIgZWd9go3ediTWZUhuVvuehxlSWh5SCxCkOocrQH%2BXFtIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr7UZBqKgljtjlSKCrcA6xhFcTTCsoR3jORNSPeJVCb1mf%2F2ixZc8qdifPrtG5ZMXvUQcRll6QIft4DBvqZjs%2B8cpuLcY1oyf1FORVF361AwdpFyqLpv6enZN8s0Mf9fth%2Fmxbt3XmkeCMe%2FQmBzV9Ts3ymrdJsya8R3q%2FKz0OFLrnY1p3Sc70NEk2y51MiGcAFehmcXn8CIyMKGDnu9ILZ4HWjnmYq1o7zOuZ4Yw4S8dXthbyntsLQ5fDAvygmI3BIix1WMOIxkGcLoiEOn0Qau16ZQhhAAMy1bhlaPo1AzjJhy4njj%2FyPy5NhGOab%2BnEwj9oEjrl6vmV%2BMIk6yFWViHq0T0AEgoTRqeUOhObr38dOx1DsdELa%2F%2BkhoFuhVY6YD%2BgMd8qokQ0OAhnCg0gZyCgEtVo1fq1xDgyxcG0J3m5MeZElWSGhr%2BzDAoUetOwjzgTSY9IzrCZBj%2BuCPHteDu%2FZiOvl%2B7%2BGgVvdmSTg5b5%2B%2FVMLVEDEJj%2BDZu8%2F67s9W5Xskp%2BjtN1ZS4P8M1vcdSl%2BD1XHrATl%2FZewwYnduUWsOHQLtV1oBB87TuQ8sFCg34QjJgN15DVWaKnOppUknEv8UYDpNFAUCuHMAtxP0lOWJ4tCGU5i3YOeSviuAzokPm6x3BhNeuvAMOH61r0GOqUBGOsvHGfFqXBgrpG2OZFs4gZwBmUC9HHrPnPFN45Yj6HUY%2BASU%2B8lTtp0w3a%2BOu%2Fv1mTnhM6N2Ul6WYoAJjgeQGoxsyc6IfdpdJAlDX9%2BKtqDSvTvfAeN7H0KMlrjB%2FBfRES927xmDc%2BYD3uP%2Bf2xp%2F2Rxxo2syshBjf6zv4%2B6awCHLkyf38QJ50CROsUIilg0IC1ieILgKc5NhLAVpPucuQ1k2C2&X-Amz-Signature=43ee5e807d8582c0d78bc8cc4265a2d2272a618143caf7f78129bdf731bb033f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKGNWSO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHe2hcj0OhZX7E80gevdlXhmi6k5juS1gjjQLG%2B5E%2BbQIgZWd9go3ediTWZUhuVvuehxlSWh5SCxCkOocrQH%2BXFtIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr7UZBqKgljtjlSKCrcA6xhFcTTCsoR3jORNSPeJVCb1mf%2F2ixZc8qdifPrtG5ZMXvUQcRll6QIft4DBvqZjs%2B8cpuLcY1oyf1FORVF361AwdpFyqLpv6enZN8s0Mf9fth%2Fmxbt3XmkeCMe%2FQmBzV9Ts3ymrdJsya8R3q%2FKz0OFLrnY1p3Sc70NEk2y51MiGcAFehmcXn8CIyMKGDnu9ILZ4HWjnmYq1o7zOuZ4Yw4S8dXthbyntsLQ5fDAvygmI3BIix1WMOIxkGcLoiEOn0Qau16ZQhhAAMy1bhlaPo1AzjJhy4njj%2FyPy5NhGOab%2BnEwj9oEjrl6vmV%2BMIk6yFWViHq0T0AEgoTRqeUOhObr38dOx1DsdELa%2F%2BkhoFuhVY6YD%2BgMd8qokQ0OAhnCg0gZyCgEtVo1fq1xDgyxcG0J3m5MeZElWSGhr%2BzDAoUetOwjzgTSY9IzrCZBj%2BuCPHteDu%2FZiOvl%2B7%2BGgVvdmSTg5b5%2B%2FVMLVEDEJj%2BDZu8%2F67s9W5Xskp%2BjtN1ZS4P8M1vcdSl%2BD1XHrATl%2FZewwYnduUWsOHQLtV1oBB87TuQ8sFCg34QjJgN15DVWaKnOppUknEv8UYDpNFAUCuHMAtxP0lOWJ4tCGU5i3YOeSviuAzokPm6x3BhNeuvAMOH61r0GOqUBGOsvHGfFqXBgrpG2OZFs4gZwBmUC9HHrPnPFN45Yj6HUY%2BASU%2B8lTtp0w3a%2BOu%2Fv1mTnhM6N2Ul6WYoAJjgeQGoxsyc6IfdpdJAlDX9%2BKtqDSvTvfAeN7H0KMlrjB%2FBfRES927xmDc%2BYD3uP%2Bf2xp%2F2Rxxo2syshBjf6zv4%2B6awCHLkyf38QJ50CROsUIilg0IC1ieILgKc5NhLAVpPucuQ1k2C2&X-Amz-Signature=357bee73cd8cdf55b9780fdb5f6f46b1b759c7c8954ac61b0fe8f90a04ff777e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NZLDLU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHAq17Pm3thuNOXaWi7MRUcvkgRLV%2B7RqgV2alREMoy9AiEA0M1O2cn%2Fr0Bb1bXIKbA3nkVTiEv%2Fl28ueCK0S0CsDCUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhXdZygxep%2F7w7a2CrcA8rosZvqzLGieeg8R%2FgEoION8li7z0v1uvZqHarDhbm2Fwt0bWfO56xpBkdnvc7XVOgfmuOHACmNhAf9niU6UniIKCcd9Py5PhVOzzcaGM%2BN7550d9IqbCNrwc92lzl4KiGviWsZjtG2GEc%2FIPmMBwljj%2BIlfvEaoOW5Vw%2FvRT%2FHg%2FcoY%2FTVUEujnFJm88xaLat13vKb%2Fs1CkZ%2BYcpsVRnHCLXkJQ1dxjgplckh3ag76iHGW0tGijTWw78XXBhGxQeJTC2zXFa1BKi9nMyZs6b4pLmHdFhIJQOFvUt0%2BD780vwhJjV12SEV%2BpdLU6TU4twHTlO5IPH4JrDnFUdYh718WmkmiMCRGvAOEP8Ek8nVgxxoX%2BXUv9FRuBBtyBz7fZ1kABFpHZ9iwx%2BrGIfBW4ws%2F7UMoNEsg%2BX53Ett4j5m9Y68JN8ntj6yja81mdcdV05NPjv6p078nso1wNHzUm8i1GpchFQWOQacezVn5chJzrlLHl1EZhG2ISaJyp4vQG0PBDdvaeqIGh2hK3kkQzLy%2B3YHLp1KnhiTrdtPa605BlEMGWpzPaajtVQ8QyWrR1eFXFxAHjwm2xQybxPVu9uB8PCO5JSbE1eXdbRVVeSKp0Ch9XkVQhrmYnkxMMPT61r0GOqUBzSyqt%2BoclLP8k4bCXiWC7OTkBD6STNWnh%2B0xxDczh1EjmCA4UNYzI7%2F1f9afT65TyxwKnNt3f%2FpvVS5oyoEq7vbBVyu4Yc%2Fspl98FgcQ0vKjBHKBvFOIh0jTJJXzNNkXLZJDyfORyJo165%2B66ZQOCoDqXK7VODLI2TWvVWOglZR0nUsEVin60VqM3amF%2FSHGs8PtSH4A8xKzZgra2xh39XDrutvi&X-Amz-Signature=26df9d2721a256de2a2ade174589c82a3c3598de654baecb80b74da92769124a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZ4LCEY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2F8P4K8wEly84CWQT9S4UjOKMV%2F4xKCYr0xOWif7B4vAiASWWFoh12%2FZwOlZWSHhB7zpWuMOxUhdl4wzQC%2BiBoGPyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW1c6dy1qYo0FukeKtwDKLwZ%2FTiutjuDF3X0xERqlnINN9%2B1f5papwjXXUybdfMMq79ASYzamDtz2XsVRHJYAwVT8d%2Fwrrp9bvmNR58x%2BMRyKGUWlo38ZCRI0Q4p2MalZE5NYsN7veSobjprRhkrzOodK5BYWTHdgA9M7L3v%2FJg%2B7bTpkcOgT%2BphNQ0vw5MM2pu%2FI2KwRXREnqoOAQl4GLx0t6f5fat4vBVS8yawIjtVG0iv67hdAuMN%2FQhQgIX%2BYsob9CymJYcUYQVWCyLXlOjV8JSWcadSa5Y0Jzv21az7AlebEzfGTP0%2BIsJu3n7xSWUQrGLkywpAMMZ3VRh%2FpsSaLJhV7o7Bofx3Zur97iZgBDGZJ1984ErO0Op7raDMmeidtjwUPQI450niEGMAW2eoQ%2FuIkR8NSWLClFI475kPatSOJUKuS%2FmfGb9JndAvjaWBj7c568Lb%2FUKKexnAwhUY%2FflWjRJU1ZWdyQpWOKSykhg74oFqhlg43jz89SSQl4rKfzGfIdw7dqkFibw%2FfnQfy3k3o0OF7j8v5Ejf6cL6anHmIZwo5Lni8YcQtmuSMimWLxKTfvXiHTKY%2FprzCggrtFT6FEMaEHeyDFafxCFJDDbuJ8lM5c3QETZeQ9CUzP3el9lzJ25Pa6cwm%2FvWvQY6pgEPjvXma3wFrKFlZ6CS5eqvL22Iu8ECvSuvm9XhhAENEUJ%2B0q8K%2B2Sus8FrpRZGVnaNAK9MyzSPlfIYpWPrnV%2F6dQcx5IzMAISM0CVOTs23lSH5sO0w4C4V3wNvQnSN1V4wX6NYeLjBihDU3LwQI%2Bk5IIUyPiaLHv69Of9PUUcNx16ZENwUoSiqrnKqQJgXeCiXjhhE5Jd8M30Atu5vllqYiqCJqeDK&X-Amz-Signature=76af4477dce2e8d0be3ed800336aa0b1a2cd80e531718639d8b9d5722f7b2ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKGNWSO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHe2hcj0OhZX7E80gevdlXhmi6k5juS1gjjQLG%2B5E%2BbQIgZWd9go3ediTWZUhuVvuehxlSWh5SCxCkOocrQH%2BXFtIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr7UZBqKgljtjlSKCrcA6xhFcTTCsoR3jORNSPeJVCb1mf%2F2ixZc8qdifPrtG5ZMXvUQcRll6QIft4DBvqZjs%2B8cpuLcY1oyf1FORVF361AwdpFyqLpv6enZN8s0Mf9fth%2Fmxbt3XmkeCMe%2FQmBzV9Ts3ymrdJsya8R3q%2FKz0OFLrnY1p3Sc70NEk2y51MiGcAFehmcXn8CIyMKGDnu9ILZ4HWjnmYq1o7zOuZ4Yw4S8dXthbyntsLQ5fDAvygmI3BIix1WMOIxkGcLoiEOn0Qau16ZQhhAAMy1bhlaPo1AzjJhy4njj%2FyPy5NhGOab%2BnEwj9oEjrl6vmV%2BMIk6yFWViHq0T0AEgoTRqeUOhObr38dOx1DsdELa%2F%2BkhoFuhVY6YD%2BgMd8qokQ0OAhnCg0gZyCgEtVo1fq1xDgyxcG0J3m5MeZElWSGhr%2BzDAoUetOwjzgTSY9IzrCZBj%2BuCPHteDu%2FZiOvl%2B7%2BGgVvdmSTg5b5%2B%2FVMLVEDEJj%2BDZu8%2F67s9W5Xskp%2BjtN1ZS4P8M1vcdSl%2BD1XHrATl%2FZewwYnduUWsOHQLtV1oBB87TuQ8sFCg34QjJgN15DVWaKnOppUknEv8UYDpNFAUCuHMAtxP0lOWJ4tCGU5i3YOeSviuAzokPm6x3BhNeuvAMOH61r0GOqUBGOsvHGfFqXBgrpG2OZFs4gZwBmUC9HHrPnPFN45Yj6HUY%2BASU%2B8lTtp0w3a%2BOu%2Fv1mTnhM6N2Ul6WYoAJjgeQGoxsyc6IfdpdJAlDX9%2BKtqDSvTvfAeN7H0KMlrjB%2FBfRES927xmDc%2BYD3uP%2Bf2xp%2F2Rxxo2syshBjf6zv4%2B6awCHLkyf38QJ50CROsUIilg0IC1ieILgKc5NhLAVpPucuQ1k2C2&X-Amz-Signature=fd60987fdfed62ac6cab0bb6844fc9218ddb24f77248a508da8741e26cd5ed23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
