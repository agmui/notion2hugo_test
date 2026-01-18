---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HP43NU%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQD75og009hwYTrqS6fWIWJm8H5GqB3Vbg0k4E0nDboQIgOYNwpV%2BhzuLOVGkm%2Bm%2B0fDFiuSMs2sQBXRED30%2BcQPMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAPBRif%2F%2BtA64eeaxCrcA9%2BrVB%2BRxCVah4eIA42pg8Zi%2BN6uDS3LCSjj4iWYUdYB6TC00adI9Sr4xuFdpLqtw0LvT3r7YlMAtrMCeErziViSFzLrRejd%2FI725srQK0Gy7zPpFlMZjZyJVAjYL4%2Bwm4bYd7s7SbFgIkdnv%2F%2FYDtxfEavyN84Jui4%2F6TwCeYSsbHYfIhEp3pnw0HzhRKbW1YM16sLZDnvizdVw3QyElHazn7dronJ3PvI7q0gOrNvF7CvMFPk8Y7U4wuLVeZXtm%2BYnPUXy4IV%2F733ZdZVxNmEcKx46cdyhvTILus74O123%2BQ2DPM1OUsAfjV%2BfftPWYW%2BAI9edpQvylFKmaV5gJtZP47ZFtxgaGv%2F006fMQ1flpvPM17OQ4NhpIt%2BXa3BIbqIUjQVVLBWF6NSxnmHivx6R%2FAlxHvhnBS4I74UZz1W%2BW7njoa%2FK6yCTBvkmSkswdtaotmMnf9esRJl%2BuSuXVJVoabcVkkoo%2BLq3GxptjBLAyUQbxu4tMyDJ4XBVRF2Wimyk3IBmxzFNy9lBOsT6Fq7%2Fe2DmA8ezZyuvVTpA4cuIrOwgW1h7lVmxV97pgUSpEv2MkLblpnpSyt7EYQ5gKd%2BRdtqCp9EtR5cgdP0X%2F7fCdKvGqCUm2yXPgAMOMPOcsMsGOqUBKU0WP0JvrtPXaBk%2FEtxnEdwIq%2FqIiqPUmORXXmYnGJN8sTypux%2FZzllXfIaGFuqb4pPhB%2FnOUJjfRVR1ZP4e4VXOihDX74SzzsYS0l4IpPzJ%2ByL9LiGaiZGt7KLQ%2F8UGuTkiQ8icmRhmhikbWj3OgENTeXSnXC%2Bm6cmm8rzkhtZTRhbAs32NRoYEvaxmzP%2FvcaP0B3bSj6XaN%2FQqjiTE3TyrHF%2FK&X-Amz-Signature=27ffc3310053d2dc3db326a47d9a20ec87e0a42832128c9246abc1e0e5181d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HP43NU%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQD75og009hwYTrqS6fWIWJm8H5GqB3Vbg0k4E0nDboQIgOYNwpV%2BhzuLOVGkm%2Bm%2B0fDFiuSMs2sQBXRED30%2BcQPMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAPBRif%2F%2BtA64eeaxCrcA9%2BrVB%2BRxCVah4eIA42pg8Zi%2BN6uDS3LCSjj4iWYUdYB6TC00adI9Sr4xuFdpLqtw0LvT3r7YlMAtrMCeErziViSFzLrRejd%2FI725srQK0Gy7zPpFlMZjZyJVAjYL4%2Bwm4bYd7s7SbFgIkdnv%2F%2FYDtxfEavyN84Jui4%2F6TwCeYSsbHYfIhEp3pnw0HzhRKbW1YM16sLZDnvizdVw3QyElHazn7dronJ3PvI7q0gOrNvF7CvMFPk8Y7U4wuLVeZXtm%2BYnPUXy4IV%2F733ZdZVxNmEcKx46cdyhvTILus74O123%2BQ2DPM1OUsAfjV%2BfftPWYW%2BAI9edpQvylFKmaV5gJtZP47ZFtxgaGv%2F006fMQ1flpvPM17OQ4NhpIt%2BXa3BIbqIUjQVVLBWF6NSxnmHivx6R%2FAlxHvhnBS4I74UZz1W%2BW7njoa%2FK6yCTBvkmSkswdtaotmMnf9esRJl%2BuSuXVJVoabcVkkoo%2BLq3GxptjBLAyUQbxu4tMyDJ4XBVRF2Wimyk3IBmxzFNy9lBOsT6Fq7%2Fe2DmA8ezZyuvVTpA4cuIrOwgW1h7lVmxV97pgUSpEv2MkLblpnpSyt7EYQ5gKd%2BRdtqCp9EtR5cgdP0X%2F7fCdKvGqCUm2yXPgAMOMPOcsMsGOqUBKU0WP0JvrtPXaBk%2FEtxnEdwIq%2FqIiqPUmORXXmYnGJN8sTypux%2FZzllXfIaGFuqb4pPhB%2FnOUJjfRVR1ZP4e4VXOihDX74SzzsYS0l4IpPzJ%2ByL9LiGaiZGt7KLQ%2F8UGuTkiQ8icmRhmhikbWj3OgENTeXSnXC%2Bm6cmm8rzkhtZTRhbAs32NRoYEvaxmzP%2FvcaP0B3bSj6XaN%2FQqjiTE3TyrHF%2FK&X-Amz-Signature=3663bff8582c5f0cc1ab18bf2dd4948581010cff8340a57cb4294425fdde1ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HP43NU%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQD75og009hwYTrqS6fWIWJm8H5GqB3Vbg0k4E0nDboQIgOYNwpV%2BhzuLOVGkm%2Bm%2B0fDFiuSMs2sQBXRED30%2BcQPMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAPBRif%2F%2BtA64eeaxCrcA9%2BrVB%2BRxCVah4eIA42pg8Zi%2BN6uDS3LCSjj4iWYUdYB6TC00adI9Sr4xuFdpLqtw0LvT3r7YlMAtrMCeErziViSFzLrRejd%2FI725srQK0Gy7zPpFlMZjZyJVAjYL4%2Bwm4bYd7s7SbFgIkdnv%2F%2FYDtxfEavyN84Jui4%2F6TwCeYSsbHYfIhEp3pnw0HzhRKbW1YM16sLZDnvizdVw3QyElHazn7dronJ3PvI7q0gOrNvF7CvMFPk8Y7U4wuLVeZXtm%2BYnPUXy4IV%2F733ZdZVxNmEcKx46cdyhvTILus74O123%2BQ2DPM1OUsAfjV%2BfftPWYW%2BAI9edpQvylFKmaV5gJtZP47ZFtxgaGv%2F006fMQ1flpvPM17OQ4NhpIt%2BXa3BIbqIUjQVVLBWF6NSxnmHivx6R%2FAlxHvhnBS4I74UZz1W%2BW7njoa%2FK6yCTBvkmSkswdtaotmMnf9esRJl%2BuSuXVJVoabcVkkoo%2BLq3GxptjBLAyUQbxu4tMyDJ4XBVRF2Wimyk3IBmxzFNy9lBOsT6Fq7%2Fe2DmA8ezZyuvVTpA4cuIrOwgW1h7lVmxV97pgUSpEv2MkLblpnpSyt7EYQ5gKd%2BRdtqCp9EtR5cgdP0X%2F7fCdKvGqCUm2yXPgAMOMPOcsMsGOqUBKU0WP0JvrtPXaBk%2FEtxnEdwIq%2FqIiqPUmORXXmYnGJN8sTypux%2FZzllXfIaGFuqb4pPhB%2FnOUJjfRVR1ZP4e4VXOihDX74SzzsYS0l4IpPzJ%2ByL9LiGaiZGt7KLQ%2F8UGuTkiQ8icmRhmhikbWj3OgENTeXSnXC%2Bm6cmm8rzkhtZTRhbAs32NRoYEvaxmzP%2FvcaP0B3bSj6XaN%2FQqjiTE3TyrHF%2FK&X-Amz-Signature=749ee86a60ec20f8711d3c1fc6e9ba195ee056e0bf21a2e4f7cd7a1efdb59a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKV3YXH%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW7I%2F0nXThtY2h3V5%2BJf1DGuCg2pvVJHEQOOvzTiAhdAiEAwCxyqBSIifINoA7Eh9ZPfvxriDKwL5%2FtuJ1yGrmO78Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFJIW%2FjYiu8SanmJ1yrcA1iCPJ9yliJRi8WpOYgkm5DsZH7LLT7%2F9aOwl%2Fdf%2BsrDsX3wlIVjxAhl65iud1u7E3hn7tO2gLCNO3PsAhIIw1JiK6kpdSPikwU5zVTNaDBBt8h%2FUgPHRdgfeX9v%2FWho2SeXUUmSlt3zjKCXxxHpg0xQQusFAeFx7UqVD66jQRUn32ns6pK6WqSzRtTzP8qWq28isSqeMLXyImPoTVlzBhQIw18mLXsYCkDOtbGFZtl76s1A%2BYDpwNKa1oOdeKKFDUYTVqy%2BNDNFrlllOzc4EGQr6W3WYLz201%2BaGs2pHLxfG4vLHqZ%2BxwGSWdWhU%2FAk1dqwPN0a2gJhrzwElhCy1DCib7mVH99PCu565lt38XmRlfqDmnCQpvT1WZOtaCQ704Q0%2F1WZx8O4bE%2Bh%2BdLOqrpo2PkxNus4G%2BoQUW6Xzg9dUnm5FTze7DSPKZfK0G5n5U6cUK4S53N9I%2FitBVNeZuMJ2E2qlo57lfzz1ubGk6UIXvx%2B69ynpjcLxf%2Bhbk5yf%2BXZd%2FUjGPQN%2Bxs8ziWuiAH%2B9E%2B1pAWsQcGT95lvzCEiZTouQbsLskHKzSCM4vk8dHCsb2MSkePzrVGT15RMYV6AB8ddqCi3b9WgB%2BM%2BuJixA1WNRQKR9e6nni3dMPKcsMsGOqUBz3DNG1H1KK9Op%2BWM%2Bg6Dqv1wxG7R9peuXI8ohPxLDL2SxVHNQ%2BtE2eDYqWSiMv2xt2I8WF3khOOa1q4v3i4AYrvDKe0spgVQ%2B8a42Cwmy6GF8AwxTifvHkMf6tnKWtJW09lnbWqzu%2FLiHDA%2BcuGxH%2B%2BS8nPfvpCADfmbIs1lxLS0ja1ZUmZFURyBoYQTRgu%2FMj4%2B8Axb3L0%2F18xVo%2B%2FrEyPQB70A&X-Amz-Signature=dd7740e221fe02e3cf6a8ccde15226d1267a492276537b7ecfeeda9a3010cb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHSV4JG%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XpvxT7iFlSGyLMlMyeQVBPAwPHJuurx46a790rBF3AIgHn%2B7JeT3%2Bghot0CT0qbx7DHRCm2IkycQHrKiOB10GL8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFYyuyarmYrhpnnzWCrcA%2BKCj2xPHBR%2FnaKfayHE0C6j%2Flwy3cptOr1%2FfL%2BVjYahQeSnLN4Y7rB%2FWEZ47ppvITZOF5lteftqejjL6AMerpUXZhBTWiHoKeC9NowpnUk8OiqcHChTk0X3X1PrXCmpKHAMl3EnfaNoY2O1FdJsbB%2FJ9fYnjt5o17NA6LbY3ZuP8s0mKhAl3si%2FNqLug6eAPoIjEQ5k7nwQrsqOZzOqNf48jmCT%2BufUTd9JdaHFrEyQCxYPH2sk5mzFhF7Fh0KVNZtbCEOyXWlN47BBqH3t0QUf3bYDcJjzeqk5IbvubQJRMvJBHOPGFmSZCMm3A6iORGh7824LvfgSij0vuroMHya0Xwrt9zoOgPDWqMWCyZauDtF8IlFoAnU7%2FQiucTVylTEqaDNOGgimriZ1n1aqkK2WvdmgQge1bk9MrlJuscbnkbqmtOWOkWVUnXzezMf5lzsdaANvsCmo80y9z%2BujXE2hJe0lWyzEDznH755HZW61N6ZU4ltGF4LrAgDA5nyDlvEap1WsBXTsqzKG7mbrV8AvzcymXwRkVK4%2FNB917PD%2BvNS6txpJFPFP1rEByEfLRxAaESup9y9O28BCoafLivrVPT%2BHQKQqss%2Bd9SgtAW6d3DfnT1UMkKut2AqyMKidsMsGOqUBDe%2BmjHMWYW6xUws7CaObj2uvy8tNaaJGxLYYdIOB42K4bw%2BE%2BVHU5%2FPnEthYKRuKxBGhddGCi3nhSO6cTF4o2jDXDGMhhmQb1%2BvjVKOuXA3aFHR9aZAE5GLjRTb3N9Za2RNCbg2UiT3KT1WFub%2BKEXapu1tYy0WIk0HtON7RK0ZXpS1yd4kjCT9Vw2sqLFLRE5BSG85893FAKVgyMvPVtciQYZi3&X-Amz-Signature=b926cfe38d84e5f0d7834a9100f895a5049de118989fc8fa9c0ae98686052a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HP43NU%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQD75og009hwYTrqS6fWIWJm8H5GqB3Vbg0k4E0nDboQIgOYNwpV%2BhzuLOVGkm%2Bm%2B0fDFiuSMs2sQBXRED30%2BcQPMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAPBRif%2F%2BtA64eeaxCrcA9%2BrVB%2BRxCVah4eIA42pg8Zi%2BN6uDS3LCSjj4iWYUdYB6TC00adI9Sr4xuFdpLqtw0LvT3r7YlMAtrMCeErziViSFzLrRejd%2FI725srQK0Gy7zPpFlMZjZyJVAjYL4%2Bwm4bYd7s7SbFgIkdnv%2F%2FYDtxfEavyN84Jui4%2F6TwCeYSsbHYfIhEp3pnw0HzhRKbW1YM16sLZDnvizdVw3QyElHazn7dronJ3PvI7q0gOrNvF7CvMFPk8Y7U4wuLVeZXtm%2BYnPUXy4IV%2F733ZdZVxNmEcKx46cdyhvTILus74O123%2BQ2DPM1OUsAfjV%2BfftPWYW%2BAI9edpQvylFKmaV5gJtZP47ZFtxgaGv%2F006fMQ1flpvPM17OQ4NhpIt%2BXa3BIbqIUjQVVLBWF6NSxnmHivx6R%2FAlxHvhnBS4I74UZz1W%2BW7njoa%2FK6yCTBvkmSkswdtaotmMnf9esRJl%2BuSuXVJVoabcVkkoo%2BLq3GxptjBLAyUQbxu4tMyDJ4XBVRF2Wimyk3IBmxzFNy9lBOsT6Fq7%2Fe2DmA8ezZyuvVTpA4cuIrOwgW1h7lVmxV97pgUSpEv2MkLblpnpSyt7EYQ5gKd%2BRdtqCp9EtR5cgdP0X%2F7fCdKvGqCUm2yXPgAMOMPOcsMsGOqUBKU0WP0JvrtPXaBk%2FEtxnEdwIq%2FqIiqPUmORXXmYnGJN8sTypux%2FZzllXfIaGFuqb4pPhB%2FnOUJjfRVR1ZP4e4VXOihDX74SzzsYS0l4IpPzJ%2ByL9LiGaiZGt7KLQ%2F8UGuTkiQ8icmRhmhikbWj3OgENTeXSnXC%2Bm6cmm8rzkhtZTRhbAs32NRoYEvaxmzP%2FvcaP0B3bSj6XaN%2FQqjiTE3TyrHF%2FK&X-Amz-Signature=41e6eee8a30bc64a569cd61cd18c36f506e93333844dcd99be95513db4f3d554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
