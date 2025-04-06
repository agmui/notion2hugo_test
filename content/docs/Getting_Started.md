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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXYM6P3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhcfmhgzcMqXdRIm2BKXa5WPmZsadrWkrNACkz42EzSAiEA6rhMoh1sI66WzSX2WHmt7hsoiF6iavxSzpyihUJSG4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDODJMGPRIcBhqHK2syrcA1TVC8Y%2FKZ5bcKDtPKEcSguLMvBHqY%2BtJTKtr5Ifyf7LuF1MrClSJMIy02Ao%2BjxTpjaaZmn%2Bw1eXnyjq5GwogGURtpNkMFhH%2F30EHbJ7vOAOVpnTQEGnu0kGPauD0BEF8OFJhvuxXQ44UhTanEbpFNxiW20CDSaAHy%2BiAxTjc8vRp3aNc1xrfovAvT%2BQ8jEwUxjKTp4vpMOtg%2BbFAQVYDXdxgsOxI4EyqbwlWLejPCYK0Uj%2FJVIGPVmIB8NG9fwMYHqGE4rgD7IuoBkZqfk9gYlDLMAbq7lse5Lt054dzl27EUKhxQgat3u8AQ%2F63A7bLgpsHmwmqERl7ckeMMXjItwZvsBcJ2n3Ni3EmdE25QkZkpf%2FLKsidhRTlOA4mtbkESh5kVPYicDzebU5bIlVStoALDl%2Bs9zEuvh9XcjL0H2qkBVKMwtcAimgYLO4j7rXCOKJA9LhiqBTSFaBsbkL1ZbOwB0E%2BTV0sR20WyBLVNi4tXRRLvXtxwRlFN6geLaQD0bJZoWhPnTSU4Nw0XTs55yV1IhQDLqSA0ptUeZ4pZe9tR%2B8%2B1TbJ1ntUXIHL8fHvMCkM24aojozcQ6Y7IP%2BaZ5jBzd0WiYEVt%2BU6G2Z7Zh%2B8KUF%2B%2BnaLVdHWz6GMLGdyr8GOqUBoKXi6qH%2FBi%2ByDpYrCiO8sKSoTF%2BvSHCxSU%2FoawBHM89JqwD1yeTzTHKTMGkUPyOW3ZyuE3jh%2FkgJn9jE2%2BlE3TB9QgcG71va1O6vebuCofECxiscbdw8Ign1dPcmiseZejesiRN4DbXnkYaWoJ9JaunJdnogKLKxZcUvdnYwIKOWjRZ4hzNWNVTmFoZzmm%2BtSaAaT%2FqyGd9XZtGGUdrx0%2FivQgTg&X-Amz-Signature=6152ddcd7203df8b0c189cc40ff3cb32d2e2a8de75cda097ef9b24b87707ce7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXYM6P3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhcfmhgzcMqXdRIm2BKXa5WPmZsadrWkrNACkz42EzSAiEA6rhMoh1sI66WzSX2WHmt7hsoiF6iavxSzpyihUJSG4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDODJMGPRIcBhqHK2syrcA1TVC8Y%2FKZ5bcKDtPKEcSguLMvBHqY%2BtJTKtr5Ifyf7LuF1MrClSJMIy02Ao%2BjxTpjaaZmn%2Bw1eXnyjq5GwogGURtpNkMFhH%2F30EHbJ7vOAOVpnTQEGnu0kGPauD0BEF8OFJhvuxXQ44UhTanEbpFNxiW20CDSaAHy%2BiAxTjc8vRp3aNc1xrfovAvT%2BQ8jEwUxjKTp4vpMOtg%2BbFAQVYDXdxgsOxI4EyqbwlWLejPCYK0Uj%2FJVIGPVmIB8NG9fwMYHqGE4rgD7IuoBkZqfk9gYlDLMAbq7lse5Lt054dzl27EUKhxQgat3u8AQ%2F63A7bLgpsHmwmqERl7ckeMMXjItwZvsBcJ2n3Ni3EmdE25QkZkpf%2FLKsidhRTlOA4mtbkESh5kVPYicDzebU5bIlVStoALDl%2Bs9zEuvh9XcjL0H2qkBVKMwtcAimgYLO4j7rXCOKJA9LhiqBTSFaBsbkL1ZbOwB0E%2BTV0sR20WyBLVNi4tXRRLvXtxwRlFN6geLaQD0bJZoWhPnTSU4Nw0XTs55yV1IhQDLqSA0ptUeZ4pZe9tR%2B8%2B1TbJ1ntUXIHL8fHvMCkM24aojozcQ6Y7IP%2BaZ5jBzd0WiYEVt%2BU6G2Z7Zh%2B8KUF%2B%2BnaLVdHWz6GMLGdyr8GOqUBoKXi6qH%2FBi%2ByDpYrCiO8sKSoTF%2BvSHCxSU%2FoawBHM89JqwD1yeTzTHKTMGkUPyOW3ZyuE3jh%2FkgJn9jE2%2BlE3TB9QgcG71va1O6vebuCofECxiscbdw8Ign1dPcmiseZejesiRN4DbXnkYaWoJ9JaunJdnogKLKxZcUvdnYwIKOWjRZ4hzNWNVTmFoZzmm%2BtSaAaT%2FqyGd9XZtGGUdrx0%2FivQgTg&X-Amz-Signature=76bd9769e11819a7f551f1fb68b429908f5c328b975727b0058e391ec187b293&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJLWUCS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqOp%2BHxX1K%2BJ1pIxyuDWiQCb%2FmhrymXdM1PyGyQEAhvQIgNnE6NnIDZS5jIiPn86hHiM0%2FC3UH%2F%2FrnGXRD1kS78cIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD3GU3PSj2KGF4d1bCrcAyjHfz6Uk5fsSmZlQ0WA%2FNwUnJ9XU6aZdpFYjnWtsiOaLeJ%2FfLgz4E0e8QIlvW6AUohXND41HxK64i5KJMuEegpbDDqKy3XW0uf86ZKC%2FW8%2F2%2Bqc74myQh3xtoiIpX0qm5TKFwUBMafjBdDibKPZS09gqrUp6f1Tpuy%2F%2BrxTvg%2BqTR7nR2r7S1W7fM6cL1kBtRJ0QFB8TOiO4JawBQUDLC1yJnO01EZScbQPBPMlw6j1a%2BltVgd4gDu2suH47xtdVpfZ0cGPzU50jUqVaEmxt7U291u7MzD49Mf5hYLGSyi5fB7d2Qys2S3fchH8kPayPvprbt%2FFcPiyIV0PdeQZAIA53u0UhTOfVG6%2BfGuHmHUhkw6c0HByA8N5SDUBAR34AH2NfAn6Fl0mE0gn%2B1VmI7AUL4xQcixl5Uf7X2PWOiiYT1sd%2FZwgOjEgcAcDxmqrQzHRT4Jq5dVNzy5k4frAAGAubJ%2FSSPbWBliGYwKScRZO6Wq0DJzSbzrundxxRq3TYxuCqgS3zsELjHBfr1%2BnIrnvDIAbKwj3ncIklmFRAs5Abu1eeL%2FzZJVD%2BTMdfAX2sEcN9jYWjkoSlNiDO4qwEqC60xBVpRih4b4c73hlJL85L9BBvM7W7e6SGEoAMOKgyr8GOqUBoprMjFBUR701SPL1zgCDZiUKsjd2sPiQ58%2F%2FwxHA6zuAIQGGjL2WfkLJFNigWO0DgF%2BBGP5Vw1WxEvH6xgY0%2Fa%2F9Sk0IvPQARXWrrPWsU%2BlXpwGYX8piTIEqrqVnVFw%2BfAYitHeBbprGAnm%2F9S7Y0BUQP3xHGvbComaP670pD2u0MhtFrqCWpyoaYY0ZbDEDNj9pvUmflgMR3sGpO1mhS6Svh1v1&X-Amz-Signature=f9d7cdad7a7ece62a967cdb7353458499b4fa5e7c4648254e2db0460151ad0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IZHVYI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGy24E0tBLcwcaSZxlYzIPAJPKkHZE0H7BytyEpLavJUAiBN1r1s5EL31tFDXf9o6ro%2FAesTsBPOEwi5nNkPuRmZyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM2cR3Qpms7qsCOSPyKtwDB27xqyaOeF4HBs1tHGQmyp8kv7S5HOCAVSPVrpI2qMIVAqPHqMavRRuLQnNlVxiJbcVvapvoDeqH32S2eNDuoN0Egi%2FjzYvdFNjtd9BrWTIyDMFCSPkkmFiRpMJRIM%2FrFll0HxOgwEEEDxyjCvc6%2BKuX4kedQ8WFgDONaP8Y7j%2BjLIGUmQGdG2tYiMURQQeWa7MRm57LJrmrhRDc6pvoyP1ZIAda8w%2FmpJ5DvuS6pLGUSFqfSQdgGTz6OfKXeN719dBfMqnbVgwCwEs%2Bu7XCyWpZmseyX7wlAwnTKQDaWFhFmV4Yy75%2FN49TrphISqN3QEq2K4TmhuyNWlYkRvelpe9vk3NShtBOqGtD1Ta3zqo4EdZAWn1aLYv%2FvlYC%2BY6Qh24s2bnIdRnX14iYohRSooYDLum3ydyxaAY3bhDQfT5TColrSeQ8r4WVKc4ZclveyGWX9P43i6%2BGKjcInsJOv10w1XwfvYCRLt6Vh4reaFE56nrhvTcnajFQYizy1jtvPOaUgPKdg1JdSB3t6Fmd9kRFCSJscLWKRyHLjzh3w23DJnCusTb5av8YmEVfLOxnoypTI3t8kZfx%2F608aBD2Zse6%2F6Vs1OnwFXc7Lgm5qmlqskoYNSKsoUtVj88w35zKvwY6pgGDsdXUel86En%2Bnp%2FDCJZhOjMtXEcKSiK0BH98KMx%2F02LopuYexBa28w5M2%2BI5p3lqjfj2iEuA%2BWvJGHx7VcznSa8ouWv6bbEl8XzIZYdDSvQXCsdt4SlZoC6JlIdcv0NZBLf4LgG1%2BdLN7xcl2TII5%2B6hNZZol9U9U2XPDLkiQswBifjACQhKHyrAaWcPhm7I2wQhC%2B%2BHMaHr6zBNwqbNl9%2B2E1R1p&X-Amz-Signature=6167bdb7ea87091f95d3704b16cf7357f1049cd8c64269b3d809480cf2ae7b61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXYM6P3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhcfmhgzcMqXdRIm2BKXa5WPmZsadrWkrNACkz42EzSAiEA6rhMoh1sI66WzSX2WHmt7hsoiF6iavxSzpyihUJSG4kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDODJMGPRIcBhqHK2syrcA1TVC8Y%2FKZ5bcKDtPKEcSguLMvBHqY%2BtJTKtr5Ifyf7LuF1MrClSJMIy02Ao%2BjxTpjaaZmn%2Bw1eXnyjq5GwogGURtpNkMFhH%2F30EHbJ7vOAOVpnTQEGnu0kGPauD0BEF8OFJhvuxXQ44UhTanEbpFNxiW20CDSaAHy%2BiAxTjc8vRp3aNc1xrfovAvT%2BQ8jEwUxjKTp4vpMOtg%2BbFAQVYDXdxgsOxI4EyqbwlWLejPCYK0Uj%2FJVIGPVmIB8NG9fwMYHqGE4rgD7IuoBkZqfk9gYlDLMAbq7lse5Lt054dzl27EUKhxQgat3u8AQ%2F63A7bLgpsHmwmqERl7ckeMMXjItwZvsBcJ2n3Ni3EmdE25QkZkpf%2FLKsidhRTlOA4mtbkESh5kVPYicDzebU5bIlVStoALDl%2Bs9zEuvh9XcjL0H2qkBVKMwtcAimgYLO4j7rXCOKJA9LhiqBTSFaBsbkL1ZbOwB0E%2BTV0sR20WyBLVNi4tXRRLvXtxwRlFN6geLaQD0bJZoWhPnTSU4Nw0XTs55yV1IhQDLqSA0ptUeZ4pZe9tR%2B8%2B1TbJ1ntUXIHL8fHvMCkM24aojozcQ6Y7IP%2BaZ5jBzd0WiYEVt%2BU6G2Z7Zh%2B8KUF%2B%2BnaLVdHWz6GMLGdyr8GOqUBoKXi6qH%2FBi%2ByDpYrCiO8sKSoTF%2BvSHCxSU%2FoawBHM89JqwD1yeTzTHKTMGkUPyOW3ZyuE3jh%2FkgJn9jE2%2BlE3TB9QgcG71va1O6vebuCofECxiscbdw8Ign1dPcmiseZejesiRN4DbXnkYaWoJ9JaunJdnogKLKxZcUvdnYwIKOWjRZ4hzNWNVTmFoZzmm%2BtSaAaT%2FqyGd9XZtGGUdrx0%2FivQgTg&X-Amz-Signature=66c80008376cfcd516e21b02f140e3c129c7df553929f99b8258ccee3ae7dbed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
