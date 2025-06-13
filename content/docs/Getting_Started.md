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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4KQFIC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDPdQV2YtJuy3cKkj05Lh9kFzNhmI9ve9mKfbjmOGdn0wIgOfDNJ%2Fp9JDASd%2B0RDUALltPFNjLhmPt7sKi%2BHrPz5G4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB1geyBicvMPB2LsxyrcA9YtZ6HvOa4RGYYruLjAgviH%2FN474vISYmBvFIFBzERI4AhLJseE6HuMgGoPq3hge8fztM5OjLzIvftgxTTmmKYdU0k8ynemt2IP3niWY3QvHbdntfT2Wv9aJEkQCgsRUv7%2Funh%2F2Z96ZDqlMVrDimB1zpZvqlIUXxF3yPlT%2F4AP0A6AgzDsOfqXdQLF2ncbt3Bv3iS1OvFqCyacbmlAz02uB2pSFQ8N9K0001zzHCu7zDToB36zyyEQarxfByDI5%2F5VNhQX%2Fg5GIHiQ8B5Up5hZeqHNrnIz3knVzOfRLpecZGkaktCKukARqhEKSiOQPxQFrp1s5ysZX%2Faum4ygKq44ngU%2Bj8fZzzrMAanLRHCodb9R6krhhwzq5iLsHt3vmd0eG1UQ9%2F1QM7M%2FR2Y3g8nbJltjUB4TQBqPqD1jcuD8jcaLwWFpVNIofPRPD1PLHfspmdhaSumaBsO8l0UCys6ulMP%2BkXMjT7hVkqxKXbTDxd06ijHU1e8z%2BouetqkWD%2FE%2BuT%2FpltghWSPsr6eKvA6WarRg0m5gZz%2FOtoKuAJPbiKGUUJSnyRE9cOWRwF3mq5Xicba0RTATGO7vrJ%2FxkWQCwM%2BFrUkRNJNN22tc%2BrYxAV1rCLbVFokfY7WIMPTbssIGOqUB0HnY%2FwC1eJ51RgBBSgjnPV%2BzlUaiYlHIXboeD0MqiTzUyjuRKtDinj6%2FAjM99BvP3kKvGOsszGElFL1lZ0tUvcFBTZbHfaIN7xYOXfO0%2Bl%2Buw5iDVerp59UoJSAGSEOylorZ5P9QMZna3lkz4ZGB7IjQAT490SGwNKioUfajS5K236H%2Bk7tsx20RA5qNXzXY59ZIemSlP1ANcbtr4WxemQIrbSuJ&X-Amz-Signature=6bf961579e58ba68ce8b7aada4236490b643a7bb3f1a7d9bd195cb8bdb62d794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4KQFIC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDPdQV2YtJuy3cKkj05Lh9kFzNhmI9ve9mKfbjmOGdn0wIgOfDNJ%2Fp9JDASd%2B0RDUALltPFNjLhmPt7sKi%2BHrPz5G4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB1geyBicvMPB2LsxyrcA9YtZ6HvOa4RGYYruLjAgviH%2FN474vISYmBvFIFBzERI4AhLJseE6HuMgGoPq3hge8fztM5OjLzIvftgxTTmmKYdU0k8ynemt2IP3niWY3QvHbdntfT2Wv9aJEkQCgsRUv7%2Funh%2F2Z96ZDqlMVrDimB1zpZvqlIUXxF3yPlT%2F4AP0A6AgzDsOfqXdQLF2ncbt3Bv3iS1OvFqCyacbmlAz02uB2pSFQ8N9K0001zzHCu7zDToB36zyyEQarxfByDI5%2F5VNhQX%2Fg5GIHiQ8B5Up5hZeqHNrnIz3knVzOfRLpecZGkaktCKukARqhEKSiOQPxQFrp1s5ysZX%2Faum4ygKq44ngU%2Bj8fZzzrMAanLRHCodb9R6krhhwzq5iLsHt3vmd0eG1UQ9%2F1QM7M%2FR2Y3g8nbJltjUB4TQBqPqD1jcuD8jcaLwWFpVNIofPRPD1PLHfspmdhaSumaBsO8l0UCys6ulMP%2BkXMjT7hVkqxKXbTDxd06ijHU1e8z%2BouetqkWD%2FE%2BuT%2FpltghWSPsr6eKvA6WarRg0m5gZz%2FOtoKuAJPbiKGUUJSnyRE9cOWRwF3mq5Xicba0RTATGO7vrJ%2FxkWQCwM%2BFrUkRNJNN22tc%2BrYxAV1rCLbVFokfY7WIMPTbssIGOqUB0HnY%2FwC1eJ51RgBBSgjnPV%2BzlUaiYlHIXboeD0MqiTzUyjuRKtDinj6%2FAjM99BvP3kKvGOsszGElFL1lZ0tUvcFBTZbHfaIN7xYOXfO0%2Bl%2Buw5iDVerp59UoJSAGSEOylorZ5P9QMZna3lkz4ZGB7IjQAT490SGwNKioUfajS5K236H%2Bk7tsx20RA5qNXzXY59ZIemSlP1ANcbtr4WxemQIrbSuJ&X-Amz-Signature=252a85c51b92424e48d37d28e59959886b45dbc11429624f563272abf1717e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4KQFIC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDPdQV2YtJuy3cKkj05Lh9kFzNhmI9ve9mKfbjmOGdn0wIgOfDNJ%2Fp9JDASd%2B0RDUALltPFNjLhmPt7sKi%2BHrPz5G4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB1geyBicvMPB2LsxyrcA9YtZ6HvOa4RGYYruLjAgviH%2FN474vISYmBvFIFBzERI4AhLJseE6HuMgGoPq3hge8fztM5OjLzIvftgxTTmmKYdU0k8ynemt2IP3niWY3QvHbdntfT2Wv9aJEkQCgsRUv7%2Funh%2F2Z96ZDqlMVrDimB1zpZvqlIUXxF3yPlT%2F4AP0A6AgzDsOfqXdQLF2ncbt3Bv3iS1OvFqCyacbmlAz02uB2pSFQ8N9K0001zzHCu7zDToB36zyyEQarxfByDI5%2F5VNhQX%2Fg5GIHiQ8B5Up5hZeqHNrnIz3knVzOfRLpecZGkaktCKukARqhEKSiOQPxQFrp1s5ysZX%2Faum4ygKq44ngU%2Bj8fZzzrMAanLRHCodb9R6krhhwzq5iLsHt3vmd0eG1UQ9%2F1QM7M%2FR2Y3g8nbJltjUB4TQBqPqD1jcuD8jcaLwWFpVNIofPRPD1PLHfspmdhaSumaBsO8l0UCys6ulMP%2BkXMjT7hVkqxKXbTDxd06ijHU1e8z%2BouetqkWD%2FE%2BuT%2FpltghWSPsr6eKvA6WarRg0m5gZz%2FOtoKuAJPbiKGUUJSnyRE9cOWRwF3mq5Xicba0RTATGO7vrJ%2FxkWQCwM%2BFrUkRNJNN22tc%2BrYxAV1rCLbVFokfY7WIMPTbssIGOqUB0HnY%2FwC1eJ51RgBBSgjnPV%2BzlUaiYlHIXboeD0MqiTzUyjuRKtDinj6%2FAjM99BvP3kKvGOsszGElFL1lZ0tUvcFBTZbHfaIN7xYOXfO0%2Bl%2Buw5iDVerp59UoJSAGSEOylorZ5P9QMZna3lkz4ZGB7IjQAT490SGwNKioUfajS5K236H%2Bk7tsx20RA5qNXzXY59ZIemSlP1ANcbtr4WxemQIrbSuJ&X-Amz-Signature=4cba363750e656037847f277448d3d30498f516181ea36d28b01abb626bee1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36EAVL7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE1gU3DD8vFbMAxMNcb88qb2K7CR2VVLKn9lS2dgQIz8AiEA069cEY1LhSg%2FOi6gYmO%2FyTbffhxZvWbrSknR4Ffp7nAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNHYDKt8ZJHhuF3RoircA2WaLX74KEKUHQtvs2lZ8YBghNrZ1nc1QI4RF8eMwxv8eeNdj8M%2BUb1blQXmBYbRs3IBzX4fsJ4CWs47gg7t%2B5U21XGX38breyFWKoVdDF6eyZdKJrclRu5bX4sJAqeshzvKPju61%2FnaePWzyMwuGgETmgOQyQ7X0D9joCK1vBfqaMS3%2BBdxixXlFYQHP52ADLzezCFF7bV2k7PrchM0IRGNq2ya7OcMZlimR4G0r40OnpEwszgTZryEAV35SlXuS8qbpEQKtSecVMED0yylS5YMK5XgtBIMNruP6epkLFsaBWFlrIJvfMOTBwFFilWjGD9hPknBRdKD1rB7qgxCAq6jwimW7YZzXX6NU0XvQRfU%2FeYRZKqoLpQ1tQZ0yD9X0gcrx1Lba27AeScfttfuH33ERQPMZaQMATN%2FT6GQ2BBpYmpUnvmuqnQK4Ayop93AcV3rNWvOqub7cdXtDMnLkeVg1stcg8r6m9nR9RzcxiS4%2Fb9OZJqjYf3Om7hOPboyGGQ6SQBNtNijUpNRPKGCTfEmDZQJbIZ0e8Wk5RYBJLnejcTHsd2GgYVmvkhbcDm0Ae0j9ib3YAZpNA7LTipEmI8UaBR30YgFwLe%2B0lCKJNnxsIxT9BpaRZcYSEe2MOXbssIGOqUBx2WkRJcknzWlrYtOhP57vQTAI18xhdH1fka4MVG8EIgDF%2FE%2ByFHQTcUqVFZwQ2vcGO0pY1oJQc8LvYo%2BdVaoDgVu85tWehWJCL85QXfaOCOhLwH%2FlgWtQ7MdW7T7J5okGt1TiShHU4phfob28KUfYFyPnqeEXldyPZIJ%2F00VrPy9gXfGILVY0HLn%2B4MupT0rvA9e6vb28qWv5YQ%2B8hAdh2KvdL7F&X-Amz-Signature=a129d4406347c611e870c3d9bee8d7c5d291a0eb1d029e6742c101b75ec54db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ISXEME%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH7DiXFj1InEdowUYPIcmj4p694U6kv2E%2BamChQ%2F7QSEAiBJtq8iRo5G3ZjSTY%2FI0T0JLIAMpehbgEwzRV69GgqOGyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMx1B87lpI5Wj7eLpZKtwDmoyCxBs2RpJO9c63T%2F9IuC%2BHpJVsV%2FPn3uLnejjpsU19Aq1nnIY0vfirIyyu6d6CrRoQxocNzYPFzNTtfP2V0OeVrTBmk6%2BZAzA4QYyX5drcp4enEvWdGPOZefmaWN4GoS2rBWW2gt5LDsSaPCFWGZ8Zqy7OelUrjPZOa0%2F48MqsplmfhXGlsnaeHsl7pIGPBnoDHPX6CzHlJk2bTEcIIa3cQVyi2o4ovPC06hpfB7aqwZzUnwqCB6z09ryoMH6hQNPWpuaqTtcfipMOAJ5xP5GFBh80H5WJ8mfDQ8nRJCY9cepT4ZKpqydY6xmXkDSOZ9UYz4X1GRgs4vcKDll6KBPfmTvxEkKdapZyWMZRZ%2Fn%2BNNXieFGfzrS5ZM3GaCZwg8XBLhuIrJZitykjZIOxuLAwPVkj3A3dtW1tfYFXV3g3kVF%2BXC2DIq6VHQqJZN2%2BctFi7HpEuwI3z4jQRecXa8P1%2BSn3ldD32s7CHU1hZK5nxUP7HSI3rRmEL2SVio%2BQSjft9ljsmBdTyUuFMHL1w2A%2FENItEAP5MkX3mjN6P%2FKXIVS7MOsMNrYTGgefhzaeobri7jmMztFzF5tqusx9N15ehnU7t0e0pxzfhtF8cPm%2FLsef58tYm4xzfdgwq9uywgY6pgFcPI9c%2BIThDjh3%2BY9y9PDaTqNa5wL%2F6MafU8rkxesMfHM4M91g03V6C3xqCWvWXFWHV%2FML4xZJ4QNfbSY%2FkmrCSNpeL8RZQutHdZKcUitE0pOuRSx9I2vRaPMOWIDwrZSiccSdUAGB7Nug1v2hK70stPQ1wcOd87a3vgkp4mmtRbxewfa2440cWD84OcqYpMS8XO9C6tWm5ifdbvlwi1uT%2B6NTcEPY&X-Amz-Signature=ca7f5a95b233e5f08c9ce7dbd54bd4a87efbe8c8bb6759eced65d815800e35e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4KQFIC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDPdQV2YtJuy3cKkj05Lh9kFzNhmI9ve9mKfbjmOGdn0wIgOfDNJ%2Fp9JDASd%2B0RDUALltPFNjLhmPt7sKi%2BHrPz5G4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB1geyBicvMPB2LsxyrcA9YtZ6HvOa4RGYYruLjAgviH%2FN474vISYmBvFIFBzERI4AhLJseE6HuMgGoPq3hge8fztM5OjLzIvftgxTTmmKYdU0k8ynemt2IP3niWY3QvHbdntfT2Wv9aJEkQCgsRUv7%2Funh%2F2Z96ZDqlMVrDimB1zpZvqlIUXxF3yPlT%2F4AP0A6AgzDsOfqXdQLF2ncbt3Bv3iS1OvFqCyacbmlAz02uB2pSFQ8N9K0001zzHCu7zDToB36zyyEQarxfByDI5%2F5VNhQX%2Fg5GIHiQ8B5Up5hZeqHNrnIz3knVzOfRLpecZGkaktCKukARqhEKSiOQPxQFrp1s5ysZX%2Faum4ygKq44ngU%2Bj8fZzzrMAanLRHCodb9R6krhhwzq5iLsHt3vmd0eG1UQ9%2F1QM7M%2FR2Y3g8nbJltjUB4TQBqPqD1jcuD8jcaLwWFpVNIofPRPD1PLHfspmdhaSumaBsO8l0UCys6ulMP%2BkXMjT7hVkqxKXbTDxd06ijHU1e8z%2BouetqkWD%2FE%2BuT%2FpltghWSPsr6eKvA6WarRg0m5gZz%2FOtoKuAJPbiKGUUJSnyRE9cOWRwF3mq5Xicba0RTATGO7vrJ%2FxkWQCwM%2BFrUkRNJNN22tc%2BrYxAV1rCLbVFokfY7WIMPTbssIGOqUB0HnY%2FwC1eJ51RgBBSgjnPV%2BzlUaiYlHIXboeD0MqiTzUyjuRKtDinj6%2FAjM99BvP3kKvGOsszGElFL1lZ0tUvcFBTZbHfaIN7xYOXfO0%2Bl%2Buw5iDVerp59UoJSAGSEOylorZ5P9QMZna3lkz4ZGB7IjQAT490SGwNKioUfajS5K236H%2Bk7tsx20RA5qNXzXY59ZIemSlP1ANcbtr4WxemQIrbSuJ&X-Amz-Signature=64499e649baaf796f656729e71f6b62f77ff25db635677ec55095da7a7c7444f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
