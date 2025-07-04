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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVLEFVF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEcriddXUOizxH3nEpZqOARh88GKykI9p5op35lUsqaDAiEAozwns3%2BtNa%2FWz%2FwA%2Bj%2BVKhyKlDVOM4c%2B71bYlX8UkOkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHQ2TquWa2u4sxHrxircA0Z9ZqXnNeTCbPu%2FGx9IraWLwkJ4H20opjj7sxm%2BRXYza2bcbDMr7cuC%2FQo6qIubb%2BSt6Ew3H8IwG%2BW24zkIqF3F5vxxPNWcNeehNgFK6b4IQh36g9XYAbIfFlq0lFGnYMTG%2BYtx58iDFknmC7QJjYM7eNwFM43F7j%2Fbj0li7xoTX0QopZiTnslXi8dVPmagbTnN%2BsvuiLgEs1eRPf5Q5aTkeGdmEbPMBOvYyfAnosTo3dRpnNLT0nRjF%2FTXzZgDnd7i8%2F8SeYNtHkYY6onsqvk7bI3lCh83PMVUx%2BRKhOiZxjqyXJxocp%2BA4s7neOZDuW8XW7j1UIce1yV5bttmPa0D0QLHqKQRGCLZPedmZ%2FHW6R0ECHanOODC87D%2BBn3UpKbWJtkMDyoccrkzPvQasejAF50iQOQ04JO7C0X74L2Pi85Ic8C0vdZycw8E8KR%2FjPMjY0dIfqshwtCt%2BI%2Fw02yCVA92JVwP%2FDx77s66er3AJshBWIzyMiaczMufWGKCrPipvVWq5lKAkNd4B5OuNz6Tm6UoUh90utWV3G3X9uaQTjWraUnhQv4zRvByGujL2WOfeV4JRTnT6Fh7dV1SPg345OoQraKGEqpXq6jDMclAPkFuMHAiii0qQNgTMPO2ncMGOqUBvQl%2F0h2aiuyuWn%2FFoErDTiW0XAPOYI5GjVWVnIWVLcK3mehV5FTwMm1CHnp3tjg1JJrPuWNodfxo7bczDfBD4%2BaQ%2Fu306IRSj70OgQbIi1saKS%2Fy7guxZdbO3sh21ZwxvBzAczzRTodJs8IzDb10GEgtoQVc8AY1NDzrlgB5AGO75cVAdyqOvxoBTrgbuIExJ9%2F70hhhRDzSH%2FRvL1g9wvUUyN9N&X-Amz-Signature=1d7b5db70aa030a532ce96397a2f80080c16815df1185dc2e65eb0f3bfc5ee39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVLEFVF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEcriddXUOizxH3nEpZqOARh88GKykI9p5op35lUsqaDAiEAozwns3%2BtNa%2FWz%2FwA%2Bj%2BVKhyKlDVOM4c%2B71bYlX8UkOkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHQ2TquWa2u4sxHrxircA0Z9ZqXnNeTCbPu%2FGx9IraWLwkJ4H20opjj7sxm%2BRXYza2bcbDMr7cuC%2FQo6qIubb%2BSt6Ew3H8IwG%2BW24zkIqF3F5vxxPNWcNeehNgFK6b4IQh36g9XYAbIfFlq0lFGnYMTG%2BYtx58iDFknmC7QJjYM7eNwFM43F7j%2Fbj0li7xoTX0QopZiTnslXi8dVPmagbTnN%2BsvuiLgEs1eRPf5Q5aTkeGdmEbPMBOvYyfAnosTo3dRpnNLT0nRjF%2FTXzZgDnd7i8%2F8SeYNtHkYY6onsqvk7bI3lCh83PMVUx%2BRKhOiZxjqyXJxocp%2BA4s7neOZDuW8XW7j1UIce1yV5bttmPa0D0QLHqKQRGCLZPedmZ%2FHW6R0ECHanOODC87D%2BBn3UpKbWJtkMDyoccrkzPvQasejAF50iQOQ04JO7C0X74L2Pi85Ic8C0vdZycw8E8KR%2FjPMjY0dIfqshwtCt%2BI%2Fw02yCVA92JVwP%2FDx77s66er3AJshBWIzyMiaczMufWGKCrPipvVWq5lKAkNd4B5OuNz6Tm6UoUh90utWV3G3X9uaQTjWraUnhQv4zRvByGujL2WOfeV4JRTnT6Fh7dV1SPg345OoQraKGEqpXq6jDMclAPkFuMHAiii0qQNgTMPO2ncMGOqUBvQl%2F0h2aiuyuWn%2FFoErDTiW0XAPOYI5GjVWVnIWVLcK3mehV5FTwMm1CHnp3tjg1JJrPuWNodfxo7bczDfBD4%2BaQ%2Fu306IRSj70OgQbIi1saKS%2Fy7guxZdbO3sh21ZwxvBzAczzRTodJs8IzDb10GEgtoQVc8AY1NDzrlgB5AGO75cVAdyqOvxoBTrgbuIExJ9%2F70hhhRDzSH%2FRvL1g9wvUUyN9N&X-Amz-Signature=56fdf72d2b8fe635179580ec5bd56f5a631961a3cb8ad25b38214d43537bf30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVLEFVF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEcriddXUOizxH3nEpZqOARh88GKykI9p5op35lUsqaDAiEAozwns3%2BtNa%2FWz%2FwA%2Bj%2BVKhyKlDVOM4c%2B71bYlX8UkOkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHQ2TquWa2u4sxHrxircA0Z9ZqXnNeTCbPu%2FGx9IraWLwkJ4H20opjj7sxm%2BRXYza2bcbDMr7cuC%2FQo6qIubb%2BSt6Ew3H8IwG%2BW24zkIqF3F5vxxPNWcNeehNgFK6b4IQh36g9XYAbIfFlq0lFGnYMTG%2BYtx58iDFknmC7QJjYM7eNwFM43F7j%2Fbj0li7xoTX0QopZiTnslXi8dVPmagbTnN%2BsvuiLgEs1eRPf5Q5aTkeGdmEbPMBOvYyfAnosTo3dRpnNLT0nRjF%2FTXzZgDnd7i8%2F8SeYNtHkYY6onsqvk7bI3lCh83PMVUx%2BRKhOiZxjqyXJxocp%2BA4s7neOZDuW8XW7j1UIce1yV5bttmPa0D0QLHqKQRGCLZPedmZ%2FHW6R0ECHanOODC87D%2BBn3UpKbWJtkMDyoccrkzPvQasejAF50iQOQ04JO7C0X74L2Pi85Ic8C0vdZycw8E8KR%2FjPMjY0dIfqshwtCt%2BI%2Fw02yCVA92JVwP%2FDx77s66er3AJshBWIzyMiaczMufWGKCrPipvVWq5lKAkNd4B5OuNz6Tm6UoUh90utWV3G3X9uaQTjWraUnhQv4zRvByGujL2WOfeV4JRTnT6Fh7dV1SPg345OoQraKGEqpXq6jDMclAPkFuMHAiii0qQNgTMPO2ncMGOqUBvQl%2F0h2aiuyuWn%2FFoErDTiW0XAPOYI5GjVWVnIWVLcK3mehV5FTwMm1CHnp3tjg1JJrPuWNodfxo7bczDfBD4%2BaQ%2Fu306IRSj70OgQbIi1saKS%2Fy7guxZdbO3sh21ZwxvBzAczzRTodJs8IzDb10GEgtoQVc8AY1NDzrlgB5AGO75cVAdyqOvxoBTrgbuIExJ9%2F70hhhRDzSH%2FRvL1g9wvUUyN9N&X-Amz-Signature=c3436324f6e63afcef96e27bb2ae823f99cc4fa79b89de6ca07f0b277069f70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJUNRF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmYbSyZrv9Wb%2FXMOc3jIiv6XUpcjqXJCyHXwanumBUfwIhAIM45aiRVtQr4omKBlrYIIMeMiqkXt%2B9TAY4gqwx3imTKv8DCCYQABoMNjM3NDIzMTgzODA1IgzC4ZYAQI05uf%2BQdpEq3ANfsizoXO72YoXSkgOCBYbvU%2B%2BajxWd7cfd1G1D0Ho%2FxyBA98%2BrSk8e6HN6%2Fl7XG1eDS9DNHUTnlgAbBh5piNy%2Bat%2FS2%2B4tojLIcYBnukdfonaznY8bFK%2B%2Bq%2FQWprgrKb4g5QjMxCikeMLinILYMm6JsJMWfkoruEXgY8SigUiZoOpC%2FLewPLp6LSiAx1wRtS9S5HP2vfaTvDOmrKyLZynShCdAWJI54s7CTX2I4uWF6xa3QQbpbt4Jtl2Vbv5E2jalPrGoWMcfm78t5ESSnNHlU6Gl0LfLr0mVMkzZ8X71aEQVZe9aRF7fzgtQVg9oM77DIHpC9GVZT5yZMlqRtdqAkFX5IyZbFQ%2BU5ip6%2FAhq0x26miCYg4Os%2FDsDcIMRkl%2FFlxfWCP28hakXie5joFFWBZ50pNvdExni%2B3qz1Yowpt6I1K6jSeLv9Babp3espwwV9wQVMnDIu019G6dsWuI8Hwv1GTbbPsL%2F5xaoStaI0F76AQyD%2BAazROGsOWat8Vwz15e3B9BoFvfjgnRur%2FmC4kgEIN2RO5%2BUVMnIpcwpsxP6c6eG4Soi2Rs8crrpiwbXh5w3oByVB%2B7H9VrWGBNRMCKIKyWfVpFgiCmGZ2MpOu%2FtUPzdWsl9HRLVMjCXtp3DBjqkAQa2UPDVQ2C3YxzODPPP5f4g%2FLV2q2eqSjVV4BLETtndJZT3JSq0ytqrUClYa8Dajv9XE31YByPPIV50xLOapr%2FnfUJCgvkCH5Zhd6KfiaYizX00TfWyG%2BOy9%2FyFDdQkmKm5TuIt9E%2FOR8ryZJVhsSIH5q76SGiPo9twr%2FcaOzhm%2B0d15DPmYyOKIIDgHEhi%2BAslma8sNgJbvMppq2qU3vK%2F8g6x&X-Amz-Signature=7923e453694df362267d0729f07426ef6a5b540493cfee0683914af0928f0021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZQJMGC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDzMeFTcqlMzIzScqi52K5oq4WaFMcBO4rgut3L2f%2FH%2FAiAH71%2FFXzDnG2Shkh73e5FphDEkrDujk%2Bon3v4CtMh9WCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMZ5p1z%2FwkotGMk20oKtwDK7jsOnhFbu3C7e1ZCQs3YqZjjlcB2Gnp4gf5AB9EVx7bSR3EYXoAV1Ejez2r2HTlNTtDLz9gOesbl5Po7ItdBN%2B0%2By%2FnSqFmg7%2B67rhFt3drLbnRDMfqF6in1HIKnzqe60OY3pvnsmUlp%2B8ORTTAx%2F0HeT8qDQYeSx8H6SGKyWdL9LnX3AAM3GpmUnz2z8O2YME1yew9ZRkhwZDLcGoiC2ypRcMYq8hzWZn7iSiwqUEWpy7Juafw4RRjgs6FmiXIQMyRKWXAwYN3BXxHZ6tMLefbj%2BJU%2B%2FdACZAPcpEupFf9%2BJu1Nd1UakuwE1StiSx7vUHaV8%2FBfwtwCaiK1qJ82y%2FKetSfzeZOdbzCMXSNSTxxgqTULMXtqKBzmFDWNHYB%2FYWjvxlRcwIHgJEWHv4fk%2BUHbTXj5Zf%2FLcZ8tky%2F9y34AVPCNJax46W%2Fn95Jxf1P61gUBfQ2APLxK6RzghTQiz74XdL3dEhDF04xI1awLgbih4W4MbeIQsye5sz94DJADmd%2FqVYWxlSH2UmiiS35981d8izOwuXhEhEnsbUxQdGnz%2BNj7xFeIaOcdMLpPiFZ2PPg4o3%2BGATU12tvFtgoexCHkkcofv2ySfgwnUdglgVXHlq2f%2BMjAUyfQkkw77WdwwY6pgEtWRhL7eq74zeRV2JJQWwZkZR3q5eXaVYNa9crKWiI7PUcqjyDCm0Tro0yUKAKveKSN9urv7CjXnlo8%2BIilxXVSgMuIbXiJlGBb%2BEJSDEGdwwAoDrN2f4Jg0rL5BtJAavwkG88kwG94zHSkhE%2FRoZCI2i%2FTAjJHgepskHymx5PjqQiHrD4CJ4TDcVO47PInlrIom1QkFoyon8BexTuDrYUL4gtg9H3&X-Amz-Signature=96558b272cbb11e82e077467511ad550fffc6e2f524cf59838e25ea0796d2ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVLEFVF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEcriddXUOizxH3nEpZqOARh88GKykI9p5op35lUsqaDAiEAozwns3%2BtNa%2FWz%2FwA%2Bj%2BVKhyKlDVOM4c%2B71bYlX8UkOkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHQ2TquWa2u4sxHrxircA0Z9ZqXnNeTCbPu%2FGx9IraWLwkJ4H20opjj7sxm%2BRXYza2bcbDMr7cuC%2FQo6qIubb%2BSt6Ew3H8IwG%2BW24zkIqF3F5vxxPNWcNeehNgFK6b4IQh36g9XYAbIfFlq0lFGnYMTG%2BYtx58iDFknmC7QJjYM7eNwFM43F7j%2Fbj0li7xoTX0QopZiTnslXi8dVPmagbTnN%2BsvuiLgEs1eRPf5Q5aTkeGdmEbPMBOvYyfAnosTo3dRpnNLT0nRjF%2FTXzZgDnd7i8%2F8SeYNtHkYY6onsqvk7bI3lCh83PMVUx%2BRKhOiZxjqyXJxocp%2BA4s7neOZDuW8XW7j1UIce1yV5bttmPa0D0QLHqKQRGCLZPedmZ%2FHW6R0ECHanOODC87D%2BBn3UpKbWJtkMDyoccrkzPvQasejAF50iQOQ04JO7C0X74L2Pi85Ic8C0vdZycw8E8KR%2FjPMjY0dIfqshwtCt%2BI%2Fw02yCVA92JVwP%2FDx77s66er3AJshBWIzyMiaczMufWGKCrPipvVWq5lKAkNd4B5OuNz6Tm6UoUh90utWV3G3X9uaQTjWraUnhQv4zRvByGujL2WOfeV4JRTnT6Fh7dV1SPg345OoQraKGEqpXq6jDMclAPkFuMHAiii0qQNgTMPO2ncMGOqUBvQl%2F0h2aiuyuWn%2FFoErDTiW0XAPOYI5GjVWVnIWVLcK3mehV5FTwMm1CHnp3tjg1JJrPuWNodfxo7bczDfBD4%2BaQ%2Fu306IRSj70OgQbIi1saKS%2Fy7guxZdbO3sh21ZwxvBzAczzRTodJs8IzDb10GEgtoQVc8AY1NDzrlgB5AGO75cVAdyqOvxoBTrgbuIExJ9%2F70hhhRDzSH%2FRvL1g9wvUUyN9N&X-Amz-Signature=7ba022837870da7b9b86e23ce68d51de37126f5b4ac6269f11e7633dc074dc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
