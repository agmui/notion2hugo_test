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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MBERCH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCZgwAoyUGJLSHd30gQ6ls8huYLQZs4omJG75OPFsySwQIgDerNoxQ4p4uMO9%2Fv87L3pMGhN2Hnrz1Z%2FfSHrNwy1K8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAGgoMHfvNq8%2FOhvgircA3LMUOGC52y7RJQ5x6PQNKweLaaIXkhTCfad20%2FKmx66wrthZRA14x6xykIiupSk%2BaC6APNIvDv9YMH76oFrc5h1DjOLDxATp%2F%2F0ZE2bYhR%2FfPLwd35WM4UEvl2jTqnsMJhKRrSB%2BhWaH7m7OwUY3l6Sd7DHYyg7E6oDkn9PvTKuk8Nrf2VEb1Db9Ud%2FxHY2pZalPpvv4Pm%2B2RuIXpWtZpue4cKt7vxKpxZ1nOKTBaiaTB9p%2BKNQ3hSANO36RBc9EgmF%2FctEdRFBn%2F8hbDSvFxonmnzMNJA0B1yO5iKFuQ%2B8yhNwXh8zDwqYQU0kRO5DLCaZGHiXroJ%2F62zKZJ7yZsRsJQryp5JSH%2BJgyzwUNOTI19T6evkI1jk1kJ3EkhV3ssNayhsS7M7869tKvFXqlXfiOz%2B1s14bJGYrbKmtiJlwUTP7svXCbsH07IfioZwda5qT0qjmuBrGCBGSgCEq0wfzwU82FpNX%2FKbLiqkjEvVTF8ntdr2ggsBILN5jONl4uNaqJsQIwF6bzpME3ugcH4XzvdGktyPLJ0NidbyWfNw9UgjUh56y01npFrczPEpiMaLGJy5Br9QkNIzjRdxWv5bvxC58OlgHQRPj9IB%2FYrDvY2igD9pQDChvh%2B9PMMmR574GOqUBW9QDDFGnc%2Bwsi3WJxrk%2BPF1igHyrBGJtaRHPUVact7AX6lRcqwXlW38uCHCoXZ%2FBaDsOmqOSNvcIVcloqBm1J%2Fsp0CcAUWgJzP8oaYpFvubLZE%2Fx%2Bl%2FE0tAHMEb5Srshsp38MEOmo%2BsubyGvUKraLwlIfnYB%2FynNCxQjiD9PEQnYStsgS%2Br%2BnSGBylbjk5R%2B8KrnRI8hrkucJH65G6CBiaWW%2BTW6&X-Amz-Signature=26046a85f9a575623789d1a5c82d9f199e3b031d97353e5a4a3fb27f7e7cd8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MBERCH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCZgwAoyUGJLSHd30gQ6ls8huYLQZs4omJG75OPFsySwQIgDerNoxQ4p4uMO9%2Fv87L3pMGhN2Hnrz1Z%2FfSHrNwy1K8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAGgoMHfvNq8%2FOhvgircA3LMUOGC52y7RJQ5x6PQNKweLaaIXkhTCfad20%2FKmx66wrthZRA14x6xykIiupSk%2BaC6APNIvDv9YMH76oFrc5h1DjOLDxATp%2F%2F0ZE2bYhR%2FfPLwd35WM4UEvl2jTqnsMJhKRrSB%2BhWaH7m7OwUY3l6Sd7DHYyg7E6oDkn9PvTKuk8Nrf2VEb1Db9Ud%2FxHY2pZalPpvv4Pm%2B2RuIXpWtZpue4cKt7vxKpxZ1nOKTBaiaTB9p%2BKNQ3hSANO36RBc9EgmF%2FctEdRFBn%2F8hbDSvFxonmnzMNJA0B1yO5iKFuQ%2B8yhNwXh8zDwqYQU0kRO5DLCaZGHiXroJ%2F62zKZJ7yZsRsJQryp5JSH%2BJgyzwUNOTI19T6evkI1jk1kJ3EkhV3ssNayhsS7M7869tKvFXqlXfiOz%2B1s14bJGYrbKmtiJlwUTP7svXCbsH07IfioZwda5qT0qjmuBrGCBGSgCEq0wfzwU82FpNX%2FKbLiqkjEvVTF8ntdr2ggsBILN5jONl4uNaqJsQIwF6bzpME3ugcH4XzvdGktyPLJ0NidbyWfNw9UgjUh56y01npFrczPEpiMaLGJy5Br9QkNIzjRdxWv5bvxC58OlgHQRPj9IB%2FYrDvY2igD9pQDChvh%2B9PMMmR574GOqUBW9QDDFGnc%2Bwsi3WJxrk%2BPF1igHyrBGJtaRHPUVact7AX6lRcqwXlW38uCHCoXZ%2FBaDsOmqOSNvcIVcloqBm1J%2Fsp0CcAUWgJzP8oaYpFvubLZE%2Fx%2Bl%2FE0tAHMEb5Srshsp38MEOmo%2BsubyGvUKraLwlIfnYB%2FynNCxQjiD9PEQnYStsgS%2Br%2BnSGBylbjk5R%2B8KrnRI8hrkucJH65G6CBiaWW%2BTW6&X-Amz-Signature=fedc08cb99688962baa8c23f090a746ad4153121859e70be592e1f859a980d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO776AB7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCNBC2pcWvV29QRJXjtVeAiLILRh28Hc%2BTKkUJ8ZBgh8AIgQ5zxDcY4SZupXboBNuOgrv%2BHjC%2BvJX0ctw4h5DEEU00q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDE0ju8IC9hGhaFaiKCrcA1dN%2F1MVU0LNMLbUnUv9feJq7EuS2yaDZYwNJ%2BufddQQV%2BCNtXMCKPnHg7muqKBqqlvVnSUQLkyZkC4cj%2FrdYye2pIL%2Fb7Fa9C3zQOSGx8PXL82iUkvaVnb6qG1cuNmHTCXyk9pQ0HMjH4ak7AyZZJktaXDLw3Tfd1rWU%2B1vdAAw7BckjJJqYB9WyvARGPs6ICVt4IbsAhIGeD8o1UPDaHZWaMhGj7mSEDrovmGsVKexEZkHLxY70TlTfN%2BLL4etZ4Q5wtMOllPZpQATC4Dqf9fzNx6yNBfZXtpJ0iTmB0Fmsr36knYR89Hyg%2FVg%2Fk%2F2s4AkRR04wZgi8gwKbQYpVY8hTQVZXM41uEnaqY5Bb9T7RNcdjwbV7cDHytWiWZQ0pTis3ulGugtqhjVJk2DA1Anv0S%2B5Y73pUMMdY03R7CRE76jDnKh4S07fRmCMYHK0N7ZmuAb%2BAIa%2BK1VUoSYf94sAdDM6nZEE8nAS9RcHFipBH88LdB7d0%2Fh6LF5As%2FeehZAMcjrPpWGdGtVm1czs3M9%2Ffs6S2san4QFM%2B4bZUeqGUtIfwIq6gfbSJ1vPbwDxurxwesoR%2BIY4cMWJLuJqs6uI2MownxLOhMLf9NktrFCwIK%2Fm5Vyd5ak4Jom4ML2R574GOqUB8iKOminhgKcbyH8QnMhbEY98koAwyKBfzLRKWOic6d5WngM0NdiNsi2b%2FXLb%2FgUqpDvhCtHLqzG3ZOgL60jMawhwPN1jbedUXfMU1j0RfZRMaFdwqrTEgTM4eNDseAPEoUgqN0Srskh%2BQHtSLZQz0JDx%2FRrTO1VQKm6PzRbb%2BeMENuf0B2%2FRdpaD1IBPs2VZu9GkpxbVxunbQ1ACtAY5xY7JJC7N&X-Amz-Signature=d8e53fd2a0db8e0bab6f94f2763fa5041200311deef0924aa904a418129ac6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGTQMVJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIG7BVcKhT4MpE%2Fk5BpOrucIhHemlnMj9GyGLCmYXFoSzAiAW3yyXog8d2YlqVV5oUpBuokDMyeCMCtECi83Kjy77BSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMsy4Eq6RRZxYJMs3hKtwDMNUSbakMr2dwkFUbOBsikEM44SYfQVNyseyflNaeqjjY0zOYFC3lkyzgyh3QbK6namq6wwXJYNVWWLcI8xIpY25Fb%2BoRpGpnUX1LshW4EmcqrgXrxOwkOqLldnVxd2Bsii0t068MZhOdBQaRDEx3HBtmiYZCG99H2L4iSOZ8IuDHQ5ceQDEF6M3YHz0FupKfhzDHWdfM4Ya7W2SBmZ1XEo9GuBmIi%2F1F6grGkaXnOyAFjJdWOH%2FTQiSyfbhkTp2Ubv4H2hBGHQ6gm%2BhIzeMACcr46vpdVAprw5hpAs4K37UrM%2FvyGty3rUO4e07tbmV%2Fn1GW0SAwycanDEjmZz%2FAMXC9GJK0mCR%2BD69TGncErQY56jO5G3fmnBt92C%2FC0wsjTS5Ze%2BAtGZKHSfhJpPWVmUyHI4MW8f5sJbgBiu%2BE7xB6aMkA6H%2B8697c402JUqDeaZBhV5pAdJYWLq8xRyVpuGRxn3FDDpcX5ghtn25OcjBm6B89GeeGgKn%2FazRQMMffs48QsHEg7gxlIURJwi5%2BmynY5t%2FxruuLoaGa7P3y8nQKmzf%2B5BN5MS3xx3xbhOFYyxhQv1doSy7%2Bo9xt%2BQ5iKso2ThNigLGg8Nw%2FSIuxzhhM2GsIVyhKBHfe5E0wn5HnvgY6pgGwcqjwjIW%2BwECW4LcPtd0xCOcwX0aDZx%2BJFC3XlGP%2B7tyd1CoeEzF7KWcmFK5%2BKnhWqZLJ%2FW1iT9f3eLmvVua6KoKTrq2u50x%2BtQmsXbRqC333C9Y%2FaxqcmtJ3XCH4v5Ui88lDSW8iM%2Bh7QJcwTFKFAVhEnFW%2Ba3V94EWAliflLRrYWhEV9Iax1UJWUWoIpPej%2FBTMkeorHxIUM6Hs7kmVWioiTNh8&X-Amz-Signature=dea5f150222fa77fc6d9f36f745b404ed19a5da92ca16ad70409ba7a8699895a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MBERCH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCZgwAoyUGJLSHd30gQ6ls8huYLQZs4omJG75OPFsySwQIgDerNoxQ4p4uMO9%2Fv87L3pMGhN2Hnrz1Z%2FfSHrNwy1K8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAGgoMHfvNq8%2FOhvgircA3LMUOGC52y7RJQ5x6PQNKweLaaIXkhTCfad20%2FKmx66wrthZRA14x6xykIiupSk%2BaC6APNIvDv9YMH76oFrc5h1DjOLDxATp%2F%2F0ZE2bYhR%2FfPLwd35WM4UEvl2jTqnsMJhKRrSB%2BhWaH7m7OwUY3l6Sd7DHYyg7E6oDkn9PvTKuk8Nrf2VEb1Db9Ud%2FxHY2pZalPpvv4Pm%2B2RuIXpWtZpue4cKt7vxKpxZ1nOKTBaiaTB9p%2BKNQ3hSANO36RBc9EgmF%2FctEdRFBn%2F8hbDSvFxonmnzMNJA0B1yO5iKFuQ%2B8yhNwXh8zDwqYQU0kRO5DLCaZGHiXroJ%2F62zKZJ7yZsRsJQryp5JSH%2BJgyzwUNOTI19T6evkI1jk1kJ3EkhV3ssNayhsS7M7869tKvFXqlXfiOz%2B1s14bJGYrbKmtiJlwUTP7svXCbsH07IfioZwda5qT0qjmuBrGCBGSgCEq0wfzwU82FpNX%2FKbLiqkjEvVTF8ntdr2ggsBILN5jONl4uNaqJsQIwF6bzpME3ugcH4XzvdGktyPLJ0NidbyWfNw9UgjUh56y01npFrczPEpiMaLGJy5Br9QkNIzjRdxWv5bvxC58OlgHQRPj9IB%2FYrDvY2igD9pQDChvh%2B9PMMmR574GOqUBW9QDDFGnc%2Bwsi3WJxrk%2BPF1igHyrBGJtaRHPUVact7AX6lRcqwXlW38uCHCoXZ%2FBaDsOmqOSNvcIVcloqBm1J%2Fsp0CcAUWgJzP8oaYpFvubLZE%2Fx%2Bl%2FE0tAHMEb5Srshsp38MEOmo%2BsubyGvUKraLwlIfnYB%2FynNCxQjiD9PEQnYStsgS%2Br%2BnSGBylbjk5R%2B8KrnRI8hrkucJH65G6CBiaWW%2BTW6&X-Amz-Signature=e551385928ae6bfbd863773146f22ecf7e356077106df2fdcb543bd19e5e1159&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
