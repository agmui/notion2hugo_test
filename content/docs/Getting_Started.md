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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JETAIA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCyGAEFEs9M8zQe5TcXZMW4yYdQz67edCyMXyl0j%2FKzmgIhAPlCPikBmmO2hu5xyK1cpIaw7aczgrzVvpUX9ieAJRyjKv8DCCcQABoMNjM3NDIzMTgzODA1IgwTn3IslXj0JmSWhQEq3APnDAPqIcxYkVNzRoikfm%2Fwb5H%2BCmS0zmErXX9e4y2RmkkJ4g2WzaULN75ReGdZ2Kzud55QMdvg3XMCTKIw683a6lk46RQbapxkyeNcI%2Byc26Y%2Bxcmt209kWjVijPtzD0IUGen7WMh9TyEtzG8oahcqeCsxH3FVwZ17l1Vm5oRtDGEJB2uviTETiFtdoYuGWaoqh%2FeULp4Vy4PoD1d13SRvKfb%2FrFMsG%2Bs1lL6P%2FA4u%2BVeKmhLanmNuE1kAAXxmgrlE79Tr1m%2F8owDSozt6QeWNZm5Qci91LNhpjQQKCdvvpK44KoDb6KNd7x2ns6sV5fBma0kpxlyA0aAtPkIH8bUi4M7uN2lE7XkeWCbgSGdi3a3hc6WON2pS1EIUiW7YkG5euXoDAtxigzXrdrPeHATimwrVxepd7Siuj%2BmsD16h1Ez5NErf%2Fl3WYdSwlWGRH7asea57ptED3xg1%2BsobNOCJ4Z6z%2FBMWOy0RehsxwCToxUrf7PL1TAq16y4%2FD63gCnHqhpZNduSKmmSrML6JeSFxENH7m0nSo3gZbIy23JixAlph4PDt6gdXqHDcSGSIS8m1zdyqSIHZRKBqM9YfBDr3mC4z6YC%2BZi53GUws7QbFqxW%2FtgO7kwJSTeywLDCJhJbBBjqkAe9U0IAmqQ8YdwB87WabuEZRNIlHad1boPQ2kzDKycHYhFVOpayL26GnwkYQdvySEmodbjB3LeVPpHAw0L0N20zMLOb6j46zwqLOJ9CIBkDRb57HAkTqQwxzsOTw4edG5xHOgw%2Ff9IBPaQy9uBiauZ28JPj9gutY6WWq%2Bdv0%2F4LKTz8REKaNaygmfNf%2BKQQhIk%2BmVs04CNRHuemuUeVPJv3nmhUu&X-Amz-Signature=5aa97a0d4e8745b95a96a09fa6f7ec4d113bbc8806b84e3726def0ba970f8b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JETAIA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCyGAEFEs9M8zQe5TcXZMW4yYdQz67edCyMXyl0j%2FKzmgIhAPlCPikBmmO2hu5xyK1cpIaw7aczgrzVvpUX9ieAJRyjKv8DCCcQABoMNjM3NDIzMTgzODA1IgwTn3IslXj0JmSWhQEq3APnDAPqIcxYkVNzRoikfm%2Fwb5H%2BCmS0zmErXX9e4y2RmkkJ4g2WzaULN75ReGdZ2Kzud55QMdvg3XMCTKIw683a6lk46RQbapxkyeNcI%2Byc26Y%2Bxcmt209kWjVijPtzD0IUGen7WMh9TyEtzG8oahcqeCsxH3FVwZ17l1Vm5oRtDGEJB2uviTETiFtdoYuGWaoqh%2FeULp4Vy4PoD1d13SRvKfb%2FrFMsG%2Bs1lL6P%2FA4u%2BVeKmhLanmNuE1kAAXxmgrlE79Tr1m%2F8owDSozt6QeWNZm5Qci91LNhpjQQKCdvvpK44KoDb6KNd7x2ns6sV5fBma0kpxlyA0aAtPkIH8bUi4M7uN2lE7XkeWCbgSGdi3a3hc6WON2pS1EIUiW7YkG5euXoDAtxigzXrdrPeHATimwrVxepd7Siuj%2BmsD16h1Ez5NErf%2Fl3WYdSwlWGRH7asea57ptED3xg1%2BsobNOCJ4Z6z%2FBMWOy0RehsxwCToxUrf7PL1TAq16y4%2FD63gCnHqhpZNduSKmmSrML6JeSFxENH7m0nSo3gZbIy23JixAlph4PDt6gdXqHDcSGSIS8m1zdyqSIHZRKBqM9YfBDr3mC4z6YC%2BZi53GUws7QbFqxW%2FtgO7kwJSTeywLDCJhJbBBjqkAe9U0IAmqQ8YdwB87WabuEZRNIlHad1boPQ2kzDKycHYhFVOpayL26GnwkYQdvySEmodbjB3LeVPpHAw0L0N20zMLOb6j46zwqLOJ9CIBkDRb57HAkTqQwxzsOTw4edG5xHOgw%2Ff9IBPaQy9uBiauZ28JPj9gutY6WWq%2Bdv0%2F4LKTz8REKaNaygmfNf%2BKQQhIk%2BmVs04CNRHuemuUeVPJv3nmhUu&X-Amz-Signature=3fd405fb6daaa3717a8a7f307f0ba4e9067f00107b1ac456768a711378536873&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JETAIA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCyGAEFEs9M8zQe5TcXZMW4yYdQz67edCyMXyl0j%2FKzmgIhAPlCPikBmmO2hu5xyK1cpIaw7aczgrzVvpUX9ieAJRyjKv8DCCcQABoMNjM3NDIzMTgzODA1IgwTn3IslXj0JmSWhQEq3APnDAPqIcxYkVNzRoikfm%2Fwb5H%2BCmS0zmErXX9e4y2RmkkJ4g2WzaULN75ReGdZ2Kzud55QMdvg3XMCTKIw683a6lk46RQbapxkyeNcI%2Byc26Y%2Bxcmt209kWjVijPtzD0IUGen7WMh9TyEtzG8oahcqeCsxH3FVwZ17l1Vm5oRtDGEJB2uviTETiFtdoYuGWaoqh%2FeULp4Vy4PoD1d13SRvKfb%2FrFMsG%2Bs1lL6P%2FA4u%2BVeKmhLanmNuE1kAAXxmgrlE79Tr1m%2F8owDSozt6QeWNZm5Qci91LNhpjQQKCdvvpK44KoDb6KNd7x2ns6sV5fBma0kpxlyA0aAtPkIH8bUi4M7uN2lE7XkeWCbgSGdi3a3hc6WON2pS1EIUiW7YkG5euXoDAtxigzXrdrPeHATimwrVxepd7Siuj%2BmsD16h1Ez5NErf%2Fl3WYdSwlWGRH7asea57ptED3xg1%2BsobNOCJ4Z6z%2FBMWOy0RehsxwCToxUrf7PL1TAq16y4%2FD63gCnHqhpZNduSKmmSrML6JeSFxENH7m0nSo3gZbIy23JixAlph4PDt6gdXqHDcSGSIS8m1zdyqSIHZRKBqM9YfBDr3mC4z6YC%2BZi53GUws7QbFqxW%2FtgO7kwJSTeywLDCJhJbBBjqkAe9U0IAmqQ8YdwB87WabuEZRNIlHad1boPQ2kzDKycHYhFVOpayL26GnwkYQdvySEmodbjB3LeVPpHAw0L0N20zMLOb6j46zwqLOJ9CIBkDRb57HAkTqQwxzsOTw4edG5xHOgw%2Ff9IBPaQy9uBiauZ28JPj9gutY6WWq%2Bdv0%2F4LKTz8REKaNaygmfNf%2BKQQhIk%2BmVs04CNRHuemuUeVPJv3nmhUu&X-Amz-Signature=cb3e1b8ea7317c164c7bd1f87e7d07c06898041f168268aee535311de9303820&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOZKXDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDJiyk2zHdC%2FtMmzUiZRrfP6mTFSzCA9oC4ZRG7e8dMEQIhAK%2BtM6EXnWlfTwXQscBOKEflcYD4QAG7ReRJFCiXDHsFKv8DCCcQABoMNjM3NDIzMTgzODA1Igzo0mhAY7GeRjEWXQQq3APsi8Gw9lGAtl7XoLnn90ETIr40T28T0A9XJaj1T6E8OKwW%2FMbQ3%2FtVE9%2FjgTWISveIo%2FOksVerpaAxnslaInkyFas3B7ZyvrqtN0QvQvdMSWM5g%2FnzWjArin%2BOULZIP%2FG%2BcgTzjiR8j%2FuByxNxzhWjQJpr1eHY75ud77K9iw7fY4ZvZ8WESBCmuDzYrv6f%2Fs36S1n9AFmQrELHKbIIgUWfyl2P3VNfLVjop%2FRTVUaEGoq5vaRLmqVKQjWfTZaMBI9KuUF9zCPEMoin0DjHP1UHzJZJtWMjGe2gvztZoJcnNq2aJYJN%2BvFKeSSQQJIxiIZJIaFzw3q6ri%2BuiCGCdT3HrY%2BmMD4JVOnWwEXGSw5%2BefhmIuRR4eZ8e5IwkJZ8a%2F67jRajQnnEUQFyuivJN9ECJkRKHqQTIWYrdA2zV3D2hWiFOnTVGMlCG%2BIH6%2FUOnyk%2Fo4pGn0TinrVY6b62RvW87NQB2ienMvRrYE34mRsp0NCM15UOhACqCv%2BN%2BeAVJmZeBJWLVDVbmyvT4rcrFeyBWxVW7vfjWvi3Ym3hTEhZthwb6tFHRaM6iLoqIoVbp6V0S4JBhpQ%2FDj2hv1cHSYHh%2FH3gN%2F%2Fl%2BBZ8zs3RRUjOZY6u5ivVb4uNiSIJcDCHhJbBBjqkAfCVr%2FeZS6pqX8DlDW7REFXHpPYbPlTeeW3HGtesz0brY2fjqFQ2g8rGmT2HVIr6E6NDH7XF41IF3c3PvHKzpub2EgFEXQvDDMtHL0pBE10g%2BMhnTR4zBM8CceuMgNrw3nT3pNVD8nhgZtdRJJT2BM2XRcSS3FAfk4kE7EzeiLbxRKoACSgeqhDYyzA07ir8sAqL5Za69igiw8%2BamT1HTKGsASpq&X-Amz-Signature=90f6c185889f2ed4ad132cf03b65a1b72e0565572ee11466059fb88a844d6c78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQ4YLBC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCt6PzYyYNCNjma6y5WjVfxoH26UR%2Fa3R1DySSihHb8OAIgGHsr51FySt6hKdn3oeT8MPvvs4wOCkoyvvlKZsrm%2B8sq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDF61Ggudx1utXTaXhCrcA2LKpWCBTHRqYebfjugCRCHHkPD9upb9awftsZUTidjRdYlioChXzMtF%2B0z5UsOof1Ez7DoiaaWoS2KsJjaixBoPAzfp7gMTTX6HujYXiree9yIz%2BcvTnS0nzmkbmE%2FJ0N5iNVx4Do%2FfqyPVZ1a3C4dI%2Fe%2BiOwFlMIOMEwZ%2FCrSI2RjNSyc02%2FbjxvW4QAQUHzyahBMqkC%2BEqPIUHaIse52nJek%2FVAfpLgnlwgfTntY%2BDR4noLJsr%2BLVsLlXyyZuhExAXGl2PYIH0leCWHJXqIGAL70AufMZA3S8j7x0qkanxgrG%2BSLicHP0g2IIE42HanX%2FTe9AqV6Kpp5w7rEWQBi2396FkxEhAnpekKnmd%2BKgHLDz7cLzF1PGmktC6s%2FjkcdJHiN9bvP7ml3hOIWA2SumI%2BjIrZT31EKvhjYaBc8FZo977567k8AEpjrc%2BAtTL7FZ9sFwVJ3YMVseIac3we64lfZq2oWPjDQyFYM4GMKn%2FKjWVDfGBGhMATOwnNWS%2Fix32o85VIKKhZ8tUAjw%2F%2FWpm2%2BJvT8KF3WIQ4if11NuoeCsKMmWsX5hz8TveM2zfiveeCVP5fHh1RMA%2BPy9QItqY9TFjuetWNRPPgm6RMFC6azLixl8Si25GTGjMPuElsEGOqUBH%2FfFNofTxNbM8kUTVGxYDSHbZQMevF%2BqZKy5D6aTqjcgJlFTcceA9syS%2Ffdp88xa%2FfO00CppIgx36Nvp65bUprDLDW0RMxfNyKxTYO%2B6%2BZjc69q8Lqbbg6u00WMHkD4mZitp8lminjF7sprZsZMJ0wdlyKY3inLMbDKY%2F0swEu65cvLPowawPQhWpF0WZc1goAbYui8YTb4cJzPja3Eh6tDy41no&X-Amz-Signature=a7a3adcdc56538ec3b8591f4fcb4d26d1661e350d50f71f4201c8d869b7a0e58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JETAIA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCyGAEFEs9M8zQe5TcXZMW4yYdQz67edCyMXyl0j%2FKzmgIhAPlCPikBmmO2hu5xyK1cpIaw7aczgrzVvpUX9ieAJRyjKv8DCCcQABoMNjM3NDIzMTgzODA1IgwTn3IslXj0JmSWhQEq3APnDAPqIcxYkVNzRoikfm%2Fwb5H%2BCmS0zmErXX9e4y2RmkkJ4g2WzaULN75ReGdZ2Kzud55QMdvg3XMCTKIw683a6lk46RQbapxkyeNcI%2Byc26Y%2Bxcmt209kWjVijPtzD0IUGen7WMh9TyEtzG8oahcqeCsxH3FVwZ17l1Vm5oRtDGEJB2uviTETiFtdoYuGWaoqh%2FeULp4Vy4PoD1d13SRvKfb%2FrFMsG%2Bs1lL6P%2FA4u%2BVeKmhLanmNuE1kAAXxmgrlE79Tr1m%2F8owDSozt6QeWNZm5Qci91LNhpjQQKCdvvpK44KoDb6KNd7x2ns6sV5fBma0kpxlyA0aAtPkIH8bUi4M7uN2lE7XkeWCbgSGdi3a3hc6WON2pS1EIUiW7YkG5euXoDAtxigzXrdrPeHATimwrVxepd7Siuj%2BmsD16h1Ez5NErf%2Fl3WYdSwlWGRH7asea57ptED3xg1%2BsobNOCJ4Z6z%2FBMWOy0RehsxwCToxUrf7PL1TAq16y4%2FD63gCnHqhpZNduSKmmSrML6JeSFxENH7m0nSo3gZbIy23JixAlph4PDt6gdXqHDcSGSIS8m1zdyqSIHZRKBqM9YfBDr3mC4z6YC%2BZi53GUws7QbFqxW%2FtgO7kwJSTeywLDCJhJbBBjqkAe9U0IAmqQ8YdwB87WabuEZRNIlHad1boPQ2kzDKycHYhFVOpayL26GnwkYQdvySEmodbjB3LeVPpHAw0L0N20zMLOb6j46zwqLOJ9CIBkDRb57HAkTqQwxzsOTw4edG5xHOgw%2Ff9IBPaQy9uBiauZ28JPj9gutY6WWq%2Bdv0%2F4LKTz8REKaNaygmfNf%2BKQQhIk%2BmVs04CNRHuemuUeVPJv3nmhUu&X-Amz-Signature=5bb0b64544028b350b257d90944691e718ac6578cb8b5556e46a278605c8d6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
