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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQV2TBUX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDrFEn2fkpsYk260CTzP4lxKSpSXHZvAhZsKMct4O5aAiBBS0cFNiNRZhNA0AkfnRLPtEzSpoGxL%2BoBgTAp%2FWdKrir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMk62fvlquC1ozginxKtwDbX82kiKO6gnmTZwZOzuOeqhSquKGhENbr5ZeO02Viz9nWa0ee1QrhOLqaUtuRyKSFvtQYkePSxehyI5vUbHpot753yPK33ZOjXbTEgCmMYMVXhOW4mfCXWoEEs1wLKfHaViRvNKRkm7U6pQcnY1Ty0w1AS%2ByNLWc2XqYVjR27FzPRm6oy3ASu15Iy8HUWK8i4tVfKtiV7VaaQccU074%2FS2oEMBfSc91hitGQk3mVjnjtxeX0og4DFJivWmScblfntg1lBAhPMcKWVWfRYASAukaRRTo3cvQtSoUligmupGwtr6DoY%2F9d0HHoyFPMMJk5qwj9Orff3xaDb1kj7VwHY42XlEkYoP4ogLL9IFhRLZ3McIFQRbHATM8KBRgLVNWrJTgr69v6cYKur8PxcTudpXfkQf5%2FYlzxWA1OmoWfSHYx2ww%2F2pPzR97xIRk8Kt7JvQeaaIxjCQlcUO%2BT7QTqeJ81G9XVZbOJUa6vrVeok%2FhcVXmsq5zWh0Ocxej2b1Mroy%2FiIRQ9%2BqdEEgQVXG70R44n4exz0UPq%2BL4jzZgX8eTjrQluUlv1TVeoLio2MCken%2FaCpwOVxvmnL6A%2Fw2uwP3wgLr2OLIRc7C5JRzSQGR2V8h2VCdYyS3h5sXEwyL64vQY6pgFmyrTxzaikXbpvpobnTH%2Fe070kl%2BOfvE54XCK6ovbGTz%2FD6psc%2F%2FPKl2SyTglUbLYSSZMmTvw353E2OBV63qZlt6r4D%2BHcvSANkHl%2F5Nk5%2BI4E4%2BRMMXXoAX%2BrGAZmdMUI9DQ96yZXAymruAmObHfsYTNavVB1T1%2B1h1Z76NFcLLgkAmwvx0vV%2FjBPmG4oT%2Ft6gAlRJVTHDZJU1umLNH8sBug0xqPj&X-Amz-Signature=9f5b99f4ea482fec887a26960ad83b15361c8e8d078635af03e996490a11121f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQV2TBUX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDrFEn2fkpsYk260CTzP4lxKSpSXHZvAhZsKMct4O5aAiBBS0cFNiNRZhNA0AkfnRLPtEzSpoGxL%2BoBgTAp%2FWdKrir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMk62fvlquC1ozginxKtwDbX82kiKO6gnmTZwZOzuOeqhSquKGhENbr5ZeO02Viz9nWa0ee1QrhOLqaUtuRyKSFvtQYkePSxehyI5vUbHpot753yPK33ZOjXbTEgCmMYMVXhOW4mfCXWoEEs1wLKfHaViRvNKRkm7U6pQcnY1Ty0w1AS%2ByNLWc2XqYVjR27FzPRm6oy3ASu15Iy8HUWK8i4tVfKtiV7VaaQccU074%2FS2oEMBfSc91hitGQk3mVjnjtxeX0og4DFJivWmScblfntg1lBAhPMcKWVWfRYASAukaRRTo3cvQtSoUligmupGwtr6DoY%2F9d0HHoyFPMMJk5qwj9Orff3xaDb1kj7VwHY42XlEkYoP4ogLL9IFhRLZ3McIFQRbHATM8KBRgLVNWrJTgr69v6cYKur8PxcTudpXfkQf5%2FYlzxWA1OmoWfSHYx2ww%2F2pPzR97xIRk8Kt7JvQeaaIxjCQlcUO%2BT7QTqeJ81G9XVZbOJUa6vrVeok%2FhcVXmsq5zWh0Ocxej2b1Mroy%2FiIRQ9%2BqdEEgQVXG70R44n4exz0UPq%2BL4jzZgX8eTjrQluUlv1TVeoLio2MCken%2FaCpwOVxvmnL6A%2Fw2uwP3wgLr2OLIRc7C5JRzSQGR2V8h2VCdYyS3h5sXEwyL64vQY6pgFmyrTxzaikXbpvpobnTH%2Fe070kl%2BOfvE54XCK6ovbGTz%2FD6psc%2F%2FPKl2SyTglUbLYSSZMmTvw353E2OBV63qZlt6r4D%2BHcvSANkHl%2F5Nk5%2BI4E4%2BRMMXXoAX%2BrGAZmdMUI9DQ96yZXAymruAmObHfsYTNavVB1T1%2B1h1Z76NFcLLgkAmwvx0vV%2FjBPmG4oT%2Ft6gAlRJVTHDZJU1umLNH8sBug0xqPj&X-Amz-Signature=4d3efa9d3957133a08c75b35d0fea7908f15a8f521523a43dfaea757331d0684&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEVS7DM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsmJeLkuAlVm14Ez3loj7Rbz1ixtZiixWgclZ2l%2BHc%2BAiAgH7n3Z%2F06BdMbiVukdrXVYPyJdu3XZsYZCFWjQjXH5Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMC8189REhjOaaxQemKtwDj9qQpAVNV%2FwAt4BxMHBvb2V1xfnSIPzfPoOLqZ2wDuxzbS%2BVbm1yuwpBPyUGT91yveILecG%2BUrPzPRxemUBCCRccfyK0ipJqDnU%2ByMQdFotIMQ3zqf8YROrn2GZu5x06PSDl1Pa2aebjUQfMy%2BDDhPkR3phPR%2Bm5%2FtFg32SOpFP%2BXpA3WsM2jbVfz%2F%2FITy%2FjbFBIAEfEtELcPGiKURfCUCfxbJCvYcrlo57A63r8vXybfGBAclyGk6P2BrjIqobVLnKHL23NQXq5vpvofcTf8xv%2FbalkR%2F6RHDHmg1uF%2FJT8YajGB6SNQQriAcRVObW58nw%2BWmbjQTw85tgvO%2F5LpsgikBVnFdQdMzk25upc46sbPkLDBXdiCyrICBQG3PIa411yWr%2Bkk77lCLzt9zdGxyIYcAh14MfrDK2L7nKcSi9R5BB1KIUV70Rg3npYBhnXlHdWZVwyMKo6id3BmrXMOWttIVfLSTct27fEZFTQWa%2FNg0HSQ%2Bptsl4mKRXkE2HkFjZnePFnqOIH8gtFIxE7Y9yRVPdbM6qSNQkL%2BLmEz6rRaRAMbZnFH67n7vwsxGJWYx1u4LIFGmlWxFHBq7Rkdrm28ATshm6SQurEMmkmYGW5WhoexsuXJeVIpWgwwL64vQY6pgEm2JPfSV4AXZOD04baKKPm0X7yjLtU2pZJ1gWH46VvxsHARFVecvOMFVmd80NEJwFpctNgr4kEovxzJulengFdnzoSRA1Jj4e1cTZnQj%2Fho91PdcGimY%2FgRB4VJVNTxdsAWmGjAEGZir3RxkIh8kMDqfoT%2B%2BMDPVrGTQBB%2FfxFNmSfSFtC3ncBJuqoYZD4FVOKn9eo7lR3R1eSvxpr2EGlyK7nd1Ce&X-Amz-Signature=33772bd96c948f83a5b5fbf9f68c812053b36fd8f4120af036e4b0020cab0fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XVZDDB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FZ0OOfZy8rKPPvTlfOWB0lqKLiPiCW1wpvEHPyEd8eAiEAmkaz7yKoeVz7EiyTlwBXUqs6VQ%2F%2BBbY2I7tELQYcBMcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEyvW3AkIF9tGeNcPSrcA1JNVzEFERE2HhRQhwvRGw%2Bly%2BW%2B3Xf3s7NymNyf9YuHy%2BSmaVF0HcgBqwI4G124hUA4LF9PhyxWPlgbwBv3EbsKFGm4%2FSghfhGZeGShpk3ARzM5XiHVQK0QpcuBZTXbKprIqTCREQXmmItc6kIUAzVkTupYoYTIfdEVuFBbXJt0p7cG3E6jXxDgiPRmuK9wAQEGbrPatTKEqVHkUpzW84WxaWBiR%2BOv1sHQlxlpBC4pF%2BkQCQUWldpcea2owl4tOyrxyFg04EObe27y1KsNNq1vQ0%2B1cdPUK5RUDAVhelF2ad0ezK2H9shVV2fvXQ76v0Lt3yE0zW2WGId%2FBX4LJLtTrHOklS5Anuq1GGoe4QV0%2FCLIzJdd95MeccPIuD3g%2BBxuwUyU26nboAdNIeeqGEy8bK1Lpaxo89JbweQlfjB%2FPr%2BmEhb7H4z7gVAUE6hkRSQu2ZEoD1G7eIdLUuUsXxiCR8yXgQaQmcJlS43TgdPOgCTJfec9G4FKjiTShDwtSDNLHu7w7F%2FHzsbg8dcS0%2BcnYHbC%2BM6AHpoph3VGS6HIduC3FXR0VS2HzQwBZn3ikMyziRPjbHt0DL5pEYZ5NQXX3xmjWTXxT%2BAYVV78Ep5LZydr6qnNbUN3RZXqMK%2B%2FuL0GOqUBlRJdgP1BBZ0nittS9ImSzdU3e8cKG1HcPrB%2BfUCw7h8sbSlnKIlH%2FW4G6n0IjEtftONpw4nvPbMDzEU56%2BP8ZeQVD42XpzpulyRdxdHUzwBkxVRQisUgWs9Sigbqh79bNYmCqAC2etU0Tvde%2BFQWLXJX8BQLfJ%2FB12Dcua9w8Tdba0JpCo%2BDq9dYCMlpXGKurPrLKwOEhdRxUyPWNoRTBLD6RXDd&X-Amz-Signature=0b7c66a3efda101545cd71eb4acd56fee24af122c736e672b0242401ebee7781&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQV2TBUX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDrFEn2fkpsYk260CTzP4lxKSpSXHZvAhZsKMct4O5aAiBBS0cFNiNRZhNA0AkfnRLPtEzSpoGxL%2BoBgTAp%2FWdKrir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMk62fvlquC1ozginxKtwDbX82kiKO6gnmTZwZOzuOeqhSquKGhENbr5ZeO02Viz9nWa0ee1QrhOLqaUtuRyKSFvtQYkePSxehyI5vUbHpot753yPK33ZOjXbTEgCmMYMVXhOW4mfCXWoEEs1wLKfHaViRvNKRkm7U6pQcnY1Ty0w1AS%2ByNLWc2XqYVjR27FzPRm6oy3ASu15Iy8HUWK8i4tVfKtiV7VaaQccU074%2FS2oEMBfSc91hitGQk3mVjnjtxeX0og4DFJivWmScblfntg1lBAhPMcKWVWfRYASAukaRRTo3cvQtSoUligmupGwtr6DoY%2F9d0HHoyFPMMJk5qwj9Orff3xaDb1kj7VwHY42XlEkYoP4ogLL9IFhRLZ3McIFQRbHATM8KBRgLVNWrJTgr69v6cYKur8PxcTudpXfkQf5%2FYlzxWA1OmoWfSHYx2ww%2F2pPzR97xIRk8Kt7JvQeaaIxjCQlcUO%2BT7QTqeJ81G9XVZbOJUa6vrVeok%2FhcVXmsq5zWh0Ocxej2b1Mroy%2FiIRQ9%2BqdEEgQVXG70R44n4exz0UPq%2BL4jzZgX8eTjrQluUlv1TVeoLio2MCken%2FaCpwOVxvmnL6A%2Fw2uwP3wgLr2OLIRc7C5JRzSQGR2V8h2VCdYyS3h5sXEwyL64vQY6pgFmyrTxzaikXbpvpobnTH%2Fe070kl%2BOfvE54XCK6ovbGTz%2FD6psc%2F%2FPKl2SyTglUbLYSSZMmTvw353E2OBV63qZlt6r4D%2BHcvSANkHl%2F5Nk5%2BI4E4%2BRMMXXoAX%2BrGAZmdMUI9DQ96yZXAymruAmObHfsYTNavVB1T1%2B1h1Z76NFcLLgkAmwvx0vV%2FjBPmG4oT%2Ft6gAlRJVTHDZJU1umLNH8sBug0xqPj&X-Amz-Signature=45a8282d26c7d4830f74ccab06cdf5f0408c092969beac72af07cd0c87de80ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
