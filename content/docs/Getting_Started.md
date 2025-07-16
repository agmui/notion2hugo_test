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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXEG7KH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsQSOBZ7DzAyAnm3pgAGIr4ASxKhHFJ2teb94edqUABwIgGHSDomowy8cNrvaa16teK7aOQIR2rSAO1TBIpyYKaAAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCbIKSxSY5kuOn%2BueyrcAxCKdT1F%2F6HH3%2BR5hOsxbW45RzKbdC9%2FtpZI7wPtEBHFasaN1iiUXEhFxjuKWkRQHXjmJ1HGRCfRsnoz%2F1xxqs%2BgTW9Jo8XpwWUNlujEXVeO0ZU%2FrirN%2Buqze8LBiu0G%2FjhyMzLbK2wCVNTnj2zgwH91MGhYY9NcxDPHDDjtDG4ln6m61o%2BBAZzIiv7aq2fn36vwX%2BWiOIsqYUwwIFKvR%2F9GWvUkRJyAB7bJZBffWsinrG3YSt4T4z3NJvpdkQaY%2FgMKyj13CL637oP2evfdeWmDT1fIXD92RpuUCcLWJbSRbyGj5Mo0R1aT6wDVu8tpj0CN0truneUZZBnlx8a9dV3eB%2BsderTXOKi8I8tvYSiepC0UowsvyXfKYLvwir8cZhYi4kttrMEF5LSW2ybVOuRBTCziVW%2BJZ9Y0GrNPQQGe60a%2FFzAqVjDBivsw6e6YQzxb0vm4VcgALCC7DhKIbKNXPzu40XKhce9NdLvUqn%2BaqQiZS2vwwenIBvlXDkhnEeUXV9njN0cYy%2BeCn882dreFlYF%2BobrnqqAgdYcyrFS6V8oM1ZuQLzRPvBXbdiVGJi6ymUmixNN73NiYBpyBD30tg8Co1RmQOUipQBni5mAyDPv7UqBSjltIUXx0MM7928MGOqUBoPjPGRkG9P4FRCciW7Q0pCDIfiLdDmSXJTOmcvlvCFx6H%2BZw2ksfaUwo2%2FWrXXaP9u3j2gplNGCEpRlZPscl46iaIWJWqAS%2BkLUKQhs53vRHDER2kG%2FcpiOJimL3bt11jrt2VhoQmsxU9O8FOujMs%2BZL7oSrPJ%2BICIQtwd24cvwAT9z2sq5BNDmWeLhjsgAdZTkf6SDFPVti29U1pUnDII%2BcxLVv&X-Amz-Signature=69179421032a5748f2a7864e3bb4d318e8268a648fa5688c2a32322ca4f1a836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXEG7KH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsQSOBZ7DzAyAnm3pgAGIr4ASxKhHFJ2teb94edqUABwIgGHSDomowy8cNrvaa16teK7aOQIR2rSAO1TBIpyYKaAAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCbIKSxSY5kuOn%2BueyrcAxCKdT1F%2F6HH3%2BR5hOsxbW45RzKbdC9%2FtpZI7wPtEBHFasaN1iiUXEhFxjuKWkRQHXjmJ1HGRCfRsnoz%2F1xxqs%2BgTW9Jo8XpwWUNlujEXVeO0ZU%2FrirN%2Buqze8LBiu0G%2FjhyMzLbK2wCVNTnj2zgwH91MGhYY9NcxDPHDDjtDG4ln6m61o%2BBAZzIiv7aq2fn36vwX%2BWiOIsqYUwwIFKvR%2F9GWvUkRJyAB7bJZBffWsinrG3YSt4T4z3NJvpdkQaY%2FgMKyj13CL637oP2evfdeWmDT1fIXD92RpuUCcLWJbSRbyGj5Mo0R1aT6wDVu8tpj0CN0truneUZZBnlx8a9dV3eB%2BsderTXOKi8I8tvYSiepC0UowsvyXfKYLvwir8cZhYi4kttrMEF5LSW2ybVOuRBTCziVW%2BJZ9Y0GrNPQQGe60a%2FFzAqVjDBivsw6e6YQzxb0vm4VcgALCC7DhKIbKNXPzu40XKhce9NdLvUqn%2BaqQiZS2vwwenIBvlXDkhnEeUXV9njN0cYy%2BeCn882dreFlYF%2BobrnqqAgdYcyrFS6V8oM1ZuQLzRPvBXbdiVGJi6ymUmixNN73NiYBpyBD30tg8Co1RmQOUipQBni5mAyDPv7UqBSjltIUXx0MM7928MGOqUBoPjPGRkG9P4FRCciW7Q0pCDIfiLdDmSXJTOmcvlvCFx6H%2BZw2ksfaUwo2%2FWrXXaP9u3j2gplNGCEpRlZPscl46iaIWJWqAS%2BkLUKQhs53vRHDER2kG%2FcpiOJimL3bt11jrt2VhoQmsxU9O8FOujMs%2BZL7oSrPJ%2BICIQtwd24cvwAT9z2sq5BNDmWeLhjsgAdZTkf6SDFPVti29U1pUnDII%2BcxLVv&X-Amz-Signature=6a1a860fadc72b63528f54df17f68d5c14f40dd047e5f0eb02c3bd01ad7839d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXEG7KH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsQSOBZ7DzAyAnm3pgAGIr4ASxKhHFJ2teb94edqUABwIgGHSDomowy8cNrvaa16teK7aOQIR2rSAO1TBIpyYKaAAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCbIKSxSY5kuOn%2BueyrcAxCKdT1F%2F6HH3%2BR5hOsxbW45RzKbdC9%2FtpZI7wPtEBHFasaN1iiUXEhFxjuKWkRQHXjmJ1HGRCfRsnoz%2F1xxqs%2BgTW9Jo8XpwWUNlujEXVeO0ZU%2FrirN%2Buqze8LBiu0G%2FjhyMzLbK2wCVNTnj2zgwH91MGhYY9NcxDPHDDjtDG4ln6m61o%2BBAZzIiv7aq2fn36vwX%2BWiOIsqYUwwIFKvR%2F9GWvUkRJyAB7bJZBffWsinrG3YSt4T4z3NJvpdkQaY%2FgMKyj13CL637oP2evfdeWmDT1fIXD92RpuUCcLWJbSRbyGj5Mo0R1aT6wDVu8tpj0CN0truneUZZBnlx8a9dV3eB%2BsderTXOKi8I8tvYSiepC0UowsvyXfKYLvwir8cZhYi4kttrMEF5LSW2ybVOuRBTCziVW%2BJZ9Y0GrNPQQGe60a%2FFzAqVjDBivsw6e6YQzxb0vm4VcgALCC7DhKIbKNXPzu40XKhce9NdLvUqn%2BaqQiZS2vwwenIBvlXDkhnEeUXV9njN0cYy%2BeCn882dreFlYF%2BobrnqqAgdYcyrFS6V8oM1ZuQLzRPvBXbdiVGJi6ymUmixNN73NiYBpyBD30tg8Co1RmQOUipQBni5mAyDPv7UqBSjltIUXx0MM7928MGOqUBoPjPGRkG9P4FRCciW7Q0pCDIfiLdDmSXJTOmcvlvCFx6H%2BZw2ksfaUwo2%2FWrXXaP9u3j2gplNGCEpRlZPscl46iaIWJWqAS%2BkLUKQhs53vRHDER2kG%2FcpiOJimL3bt11jrt2VhoQmsxU9O8FOujMs%2BZL7oSrPJ%2BICIQtwd24cvwAT9z2sq5BNDmWeLhjsgAdZTkf6SDFPVti29U1pUnDII%2BcxLVv&X-Amz-Signature=d3860403db9786bbbe49d646c77d1d3d200f6962b8075398cf47cea209f6109c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSI3XPV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA2xgMZlqUyX86XS9B6g%2FCRXjGnfKoMn%2FBsigl50oK5bAiA05OApf%2Ftvb5rTeLQgVgaG0reDrxFIbiDW0acLoKjSCyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMczTWObOJWm3DAKVpKtwDwi6MLeliuPDs%2FufwtYjyJ%2Bh0rVMiBizTZ4hchH9DV%2FfmZEOln5m7W0glAKpXXf%2BpC8qVY7l3Llcj%2B1wrxXrTRX3fh1bcGyvFaJ3%2BZXh0CFFgO4Mq5VWBY7Uw1e4rsdneBsEsmW2iQV3yo0drkZsfll0a3L8daU0ZbHCt4T%2BIcxddF2yAwMGGIxE5bVm9jkfwWgUbS%2Buv6Y3QvG53dkQ2vqV%2F05td5nkvZKeBVr1MFPbRs3ei6n2MiXOYDjFgv8h5pE95wWd7Z08nBZY%2BFpjssbepg7Vw%2BHYAhkZQF6vJBGqaMlLjWKr0vl3dxygYoQRvmnNKfVOT5BHgLGBtkxijI5Fo%2F5GSUNyqruMwF1zBhnWyonhGc%2Bl%2Bfq7mEsbiZTHT4UKPsp1IvlUNuR4zuDv6J5EYkoI8GnVefLQUit0NbCfVZ3S8nO3Nuk%2BknmPgkzEW0dV7wPQ%2BAkLhElJqee3tYK6NwlB9PXSFPAp%2Fj1Yvh7jpaZ1KECvz8tGzfzA1oCUKwCtIdX55CvURUgEWG3fPedfe9oce1uG4hHD2fEmzNTF30gx9tsmjIvFqNsRSV4Ptoyq6v79FQA6y5x18%2Bbzew0t5j8S8kWoV7HPUhRTTODTNZdrKdllVeRIMUzsw8%2FzbwwY6pgE5FSPcaaoPx%2BIgB6YqnBVHBVVUMgC3x61%2Bsof%2BEfq93n%2F66m7PlU7CzseoInaGQkUaf0hso3g8cWCrW%2FArHS6dwDQmvpJ%2Fo75Ycy3g1jTWqIwU1jhgi4XitsmHFywD%2FrSUbK4DwN7z8tMEjAw05V2VmudEzywN1ILC82lgXSg%2FoVyfrouK4z4CjNbGfTA4srZd%2F589Sy%2BKS3BUWQcT%2BaG9lFQdWJSI&X-Amz-Signature=1a5d169e43fb8d0100d08ea36cf0df14500fed5ca8b3526e8ef52980f17b8547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEI2RLSW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCyXPC%2F5EgBi4nyjnx2dNImwX3ha15ITcFJIc93oNRxvgIhAO3r6PKMGIki5X5kWJKNlt5wmf5BpPBFvRoDcMawf5mgKv8DCFIQABoMNjM3NDIzMTgzODA1IgwPQsC%2Bo671zFyYOqoq3AOrNm5x7B44qBBqRa958jVcMKMaYKvQoqk2LkEg8aXfZ9so%2BaPJXVwzrmCEdnpOtE%2BP05lrl0%2BJNFBgU9fWGoG98rz7xFmLnIQiPAK%2BBGS8DFnWT3bT2loWKM8XzNaSOs33qsXsufjQj4uuNNFkGjRtOS8bH6Zo2u9hnctEYUcW6UJqMyf4s19N5fkYgS8XsIQ4dU8l%2FRU1CmwGKj0JZm7fe0sssrHc8rNWtt2mQLnGfuTndnM02Gu91BnWgtoDGB5utPaFhgG1nHY0spPVSFInUpJ4qSOAoxPGPKujl2I24Jl0jRDv6cYdKVN22KV5VzUNgDHAhml05MXeJC8it9qENGWw4XwDOuaRkXgSmlsoqaGPZgxywygDr6LuE4Jzbv7DGfQFHt6bBM00hA5b6Gva55a0G7iX%2Ff52uDi1Y%2BezdJ1sFqg2ffhqalRMv44RgMz5pEM2tGsE95zykez46whh%2FDzhHsJ8KIIuBnQQE81U5oLT4i9vgxtTQRfxNo7oVmVCkK1q3KOwTAGYUt8uhifQ0dIBmVcEI27kKjfs5GQfEACNa%2FsE6r6NRYy2%2Bamesdvmno44WP%2Be5lGhnraiGhsvWZM4EtRn2%2B5lqB7COQhKr%2Fs%2BBH2j%2FUpmIA2NMjCw%2FdvDBjqkAfiPXcDk0c%2BjiVJoT3IKTOus4AZFqqKu%2FwftjgH9GLtDVjck1Pd35mh2oDIBB3DRdz7g0SLV%2F%2FQFUXP1dK2zHik3cihVzQOzG2L9un1Xv%2BZqZGKsIyllyHGcohizSe%2By%2Fv5C3O86JC9%2Bzx8Y2i9%2BC8mcpGerpQdHoIZMPwKGwdP6%2FjJOgmW8ojpE50XjCzDzeDgBAiJe2%2BmHIiyinn3iX7uou9a%2B&X-Amz-Signature=c48ed5146f38aed88edb2afa4604444c1e4f69c08058cf749e0e7ad2b8dc23d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXEG7KH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsQSOBZ7DzAyAnm3pgAGIr4ASxKhHFJ2teb94edqUABwIgGHSDomowy8cNrvaa16teK7aOQIR2rSAO1TBIpyYKaAAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCbIKSxSY5kuOn%2BueyrcAxCKdT1F%2F6HH3%2BR5hOsxbW45RzKbdC9%2FtpZI7wPtEBHFasaN1iiUXEhFxjuKWkRQHXjmJ1HGRCfRsnoz%2F1xxqs%2BgTW9Jo8XpwWUNlujEXVeO0ZU%2FrirN%2Buqze8LBiu0G%2FjhyMzLbK2wCVNTnj2zgwH91MGhYY9NcxDPHDDjtDG4ln6m61o%2BBAZzIiv7aq2fn36vwX%2BWiOIsqYUwwIFKvR%2F9GWvUkRJyAB7bJZBffWsinrG3YSt4T4z3NJvpdkQaY%2FgMKyj13CL637oP2evfdeWmDT1fIXD92RpuUCcLWJbSRbyGj5Mo0R1aT6wDVu8tpj0CN0truneUZZBnlx8a9dV3eB%2BsderTXOKi8I8tvYSiepC0UowsvyXfKYLvwir8cZhYi4kttrMEF5LSW2ybVOuRBTCziVW%2BJZ9Y0GrNPQQGe60a%2FFzAqVjDBivsw6e6YQzxb0vm4VcgALCC7DhKIbKNXPzu40XKhce9NdLvUqn%2BaqQiZS2vwwenIBvlXDkhnEeUXV9njN0cYy%2BeCn882dreFlYF%2BobrnqqAgdYcyrFS6V8oM1ZuQLzRPvBXbdiVGJi6ymUmixNN73NiYBpyBD30tg8Co1RmQOUipQBni5mAyDPv7UqBSjltIUXx0MM7928MGOqUBoPjPGRkG9P4FRCciW7Q0pCDIfiLdDmSXJTOmcvlvCFx6H%2BZw2ksfaUwo2%2FWrXXaP9u3j2gplNGCEpRlZPscl46iaIWJWqAS%2BkLUKQhs53vRHDER2kG%2FcpiOJimL3bt11jrt2VhoQmsxU9O8FOujMs%2BZL7oSrPJ%2BICIQtwd24cvwAT9z2sq5BNDmWeLhjsgAdZTkf6SDFPVti29U1pUnDII%2BcxLVv&X-Amz-Signature=937415f3c542761ca052020e1da89b6b4a2e15e1b409e9f0e3ef6d092c879ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
