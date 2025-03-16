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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPCOL6P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCuE%2FBH%2FD97RZNiFZ2YaAQrhVFh%2Bn8U%2BHasQgtOiR8SgIhAMMmLW7dlYPvP31GfEYadWW3NVsTuxB1AUoRoWtaNqKrKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpP7G3jmu85B9QcWgq3AMWLxy5Ybkc5NmL1n82M93RxYVQngquBtH%2FGY8k3Gcon4zT4RGCWauGMNIra4P8pJFw5Tzx760wkGiYEM2Ru5eC%2FjqGOnWcDcI4tLSoHEVaswpXhwtbAqoXZ0V3aP3h3xACuQAySerd79U3T33KxvNLi8MwoatBc6vmC3gM6XvgL9so%2BDLW7ebi%2F0%2BBBgSiVzFnJNxxSd1sey%2BBclBMvP6dCTFQVo9BMmNMu4gYj%2FNl4HWh0HL4Wzs%2BD2lRkEFafa8x5ZECnFQ9F1gQY1jioDWLaIQlMpPnUCDAF5WdVxIojIk%2F%2BCiRmU%2BuuMAyvK4egk7TJpJ%2B1tiMtynJ551yyrMdy2jANCXFsPQJsIz246E7Rad7sbSIJXGTsF2r8MEyXJ1s81U7yFhdxAplU6OR670T9L1a%2FUl0F%2BA8z7n%2FBJRYrxgZbXLph15CgMPmTbXZVeEkxUcB78yOE2zCzrxskbIVBY2eUmEZe8AIQXU2JTFMg1mwPsTNRVnt9aAg8tN6Q2wN%2Bz8m1DbYJEd9Fuxgljqjf1AgYv6vx1qs00wP3hxododA1qSu9eNSl9roWPdyIZJwzf%2B78FXhMIMN3e%2FrFHf32GmQMM5YJgjbAM%2B5n9ZocaWW6mLOAUNuvdegDzCzgdi%2BBjqkAZrtGwJbK6%2BMpxEYXaFw%2F4Waq%2F%2Bv5%2BCS4r2MMoq99XMPlV141lz83eOk7%2BF0Mbt4pela9ij8eXDSk6ZQKIo9V9nQ5hW%2BNrBjcVVGVsSkD7Cf8BXm%2FIHK8fu0oAOW94xjP50Jbi3EFUdFSDQ%2BzhKPt%2FjXQ%2Fy%2Brj3k%2FBtCB3W2qdAq7uS5VE4eszaxtPtsUmNk3hREzvPLF%2FNwSQhlboSpe%2BCzmPZI&X-Amz-Signature=589ec75b52cbd8b1685cdf9f8c420c6a8b1d5d82a114922054d307eba51223cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPCOL6P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCuE%2FBH%2FD97RZNiFZ2YaAQrhVFh%2Bn8U%2BHasQgtOiR8SgIhAMMmLW7dlYPvP31GfEYadWW3NVsTuxB1AUoRoWtaNqKrKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpP7G3jmu85B9QcWgq3AMWLxy5Ybkc5NmL1n82M93RxYVQngquBtH%2FGY8k3Gcon4zT4RGCWauGMNIra4P8pJFw5Tzx760wkGiYEM2Ru5eC%2FjqGOnWcDcI4tLSoHEVaswpXhwtbAqoXZ0V3aP3h3xACuQAySerd79U3T33KxvNLi8MwoatBc6vmC3gM6XvgL9so%2BDLW7ebi%2F0%2BBBgSiVzFnJNxxSd1sey%2BBclBMvP6dCTFQVo9BMmNMu4gYj%2FNl4HWh0HL4Wzs%2BD2lRkEFafa8x5ZECnFQ9F1gQY1jioDWLaIQlMpPnUCDAF5WdVxIojIk%2F%2BCiRmU%2BuuMAyvK4egk7TJpJ%2B1tiMtynJ551yyrMdy2jANCXFsPQJsIz246E7Rad7sbSIJXGTsF2r8MEyXJ1s81U7yFhdxAplU6OR670T9L1a%2FUl0F%2BA8z7n%2FBJRYrxgZbXLph15CgMPmTbXZVeEkxUcB78yOE2zCzrxskbIVBY2eUmEZe8AIQXU2JTFMg1mwPsTNRVnt9aAg8tN6Q2wN%2Bz8m1DbYJEd9Fuxgljqjf1AgYv6vx1qs00wP3hxododA1qSu9eNSl9roWPdyIZJwzf%2B78FXhMIMN3e%2FrFHf32GmQMM5YJgjbAM%2B5n9ZocaWW6mLOAUNuvdegDzCzgdi%2BBjqkAZrtGwJbK6%2BMpxEYXaFw%2F4Waq%2F%2Bv5%2BCS4r2MMoq99XMPlV141lz83eOk7%2BF0Mbt4pela9ij8eXDSk6ZQKIo9V9nQ5hW%2BNrBjcVVGVsSkD7Cf8BXm%2FIHK8fu0oAOW94xjP50Jbi3EFUdFSDQ%2BzhKPt%2FjXQ%2Fy%2Brj3k%2FBtCB3W2qdAq7uS5VE4eszaxtPtsUmNk3hREzvPLF%2FNwSQhlboSpe%2BCzmPZI&X-Amz-Signature=b3861b156fdac8f22be4ed281796f22569ad09f5f0906364ea11855f4de9ccf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPONSP2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC1qlnQHCNL6xCbMZBXhoV1RBXe8zveTccchOgEw27OAiBbre9IMj2cEqvKzkRrCB7N08StWHpR%2BuGGSuGfrMyvZir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMIiB6S9NaSPmxEyXzKtwDEuYE9X2E00BHKLbOspEgVTbx%2BZCwljIpMs4a2vwagvXdDU3S%2F%2F6gW8KIwYrzZ5BJfkaV8YFZTKNjWhFOtZbeTpNkflBKA5cLUDC8I1k%2F4KG8qpIvXnMs0E1yVW4g%2F8unZUH3%2BcniV3vcuTkIbjk4F2MR8M%2BiQhDV1vaYetdEUDI%2BPF9Q9Vttg2fSJaR7z4cnpAsMMYEYik%2FT%2FFrTeSHwjQehw03d95T1iFkA67mw2qtdoyepo9tQ4Kc5W8Xtybig97gffvaZJpspyyxh3V1u21V0TZ3d8fyutYwoi30Jcee3StkXIaJXbEse2aYgKAqCw53jSXXjM8XRSHJt67IfoH5fp1sX2N63bVnOJaF%2BIdn4RX7LKHZwvrmYVhcspEm0iKrwmT%2Fw%2Fr8adJI2vxGJj9bfH2z3Sj9qSvmaEdRRLhYI3k%2F%2B8SrRGY%2BnpHec3osXcXLT%2Fq57ZzcXCHr26N5Xt%2Bjh4FeQrO09De44w5nTh7OtsxLvR1NbW2Q40i0VZJx29ChHzhz8xWHbQTt93892IxwIsRav47OGt9s2nU3o7Ow%2FQ%2Bt6h5JqqS2vnIguAo3JGVArIlJ8QGI1OcgmizskprG0j3PlGyiOWAkiSHxvDXQifhEnMtG%2Bh66m1h8w68jYvgY6pgFCMIUL7g7TFAv2xAM%2BjH1MjUziCAucyck12epGJZR704nWMQmQ3FQqIheYV71eGi6jhwbUTmNnUbNiocnwvcI45KlvYoHIUAvKO4LaGY1OrEoAQXtc05YzLzJ97IJWbl1mINKU%2FY%2FZP%2FXiurIveFkHFRvYS6TX%2F3EIGx0gZMwGNvs%2FbbSC0AKIOl26sKf%2BYMu8kdNA9%2F5L9Z7xiT%2BWDMP8hOWm125c&X-Amz-Signature=d62f36c058dd7233c0d1a26d7049024b4bd8febe543a850f42c078a505bb0145&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNCJ44X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21mDsu0mYZU4LLc4RWoeRXNEtcGhHtfsQo1cvimTbowIgYPsWBuOQqZvDgnS3w73fUChw%2B6Ew%2FJyF%2FnLrBYfItRYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNWiueYAeg%2FlwL2WfSrcAxuitKVt1L5S5BhZUoLtgcU6OQJZ6YFXCk4IPKubjX9hdS%2Bo3Fi8K3nmgdJiGNVXpuUNs%2F45h1%2BGo09qmyrH4yIRM56EbgNpiPgjyVYTzu2cICxSBlS4NnQaNKIborz%2B0B4d982rE0XaIGdvH%2Byvvfv%2FkZ%2FHs70saqI13h3pq%2Bw960norADur2cfXvHpf4EKVBamGUQsx1WAuqLyNsgfOBtf3Pof6niX8n%2BxhxweDoMj5MmailfReoy%2BQjMemjB2SI1yfvIgFc3ERCPSsv%2FMezLJ%2F%2FJhB6wYQD12RQbsSyLxkjb4BjGrb6A1kmd5TX7qMUUu7%2FYJTIqNt4KHOpFzoFOSnRPTte5qLBNLOPouY1KQHe1%2FVQ6a4zo8SFdTKHMDcX3tO7fgRUKGJgj85z%2F7JigU3jLYM8PqhVCToyN74vZE5cd9pviVqpF%2BC%2BxwEXD%2BZvtj3o3CKgLDpTqW%2F694%2FubTzLrS9Z0tMpZjDIIqPF7NMXq2EGl4lJQIMxGbS1PRd2RbjLA3BSRQkZDE1JH1Boyfmh1nzoG8m2YytCGCsHsN5mK8IpTjSZsVwLn7ZlfKvBOS8Aug%2Fe9xZcYG67emgcl1UwcROMjjLpYrE61uwaBYjGqa0eiT6nm5JBMKMN%2BB2L4GOqUBRORJU2cy%2BWN9lvLTOidn7lvge074t5fAIPTWyCsVw%2B0p9Vj58bcAENubs5qnlVS6AgBTXIPRLBeXyO5NssFF%2F5iraElQIKkMe4d%2B2cOh8ItTtgbdETI6obaS8OjH67uusNc%2BhMhwt9i9lhdu9Q2p5AY9Tj1ovJ7es%2FXW2e%2BNtu%2BvEFLalxdCjqNZJF6esj5tfxuEpPUFdthFekuz62MLXGDHgk0x&X-Amz-Signature=1e400cf16378865ea068c1b01dc9b70f2ad1b6835cef49c8a48e9ad2b43fc9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPCOL6P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCuE%2FBH%2FD97RZNiFZ2YaAQrhVFh%2Bn8U%2BHasQgtOiR8SgIhAMMmLW7dlYPvP31GfEYadWW3NVsTuxB1AUoRoWtaNqKrKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpP7G3jmu85B9QcWgq3AMWLxy5Ybkc5NmL1n82M93RxYVQngquBtH%2FGY8k3Gcon4zT4RGCWauGMNIra4P8pJFw5Tzx760wkGiYEM2Ru5eC%2FjqGOnWcDcI4tLSoHEVaswpXhwtbAqoXZ0V3aP3h3xACuQAySerd79U3T33KxvNLi8MwoatBc6vmC3gM6XvgL9so%2BDLW7ebi%2F0%2BBBgSiVzFnJNxxSd1sey%2BBclBMvP6dCTFQVo9BMmNMu4gYj%2FNl4HWh0HL4Wzs%2BD2lRkEFafa8x5ZECnFQ9F1gQY1jioDWLaIQlMpPnUCDAF5WdVxIojIk%2F%2BCiRmU%2BuuMAyvK4egk7TJpJ%2B1tiMtynJ551yyrMdy2jANCXFsPQJsIz246E7Rad7sbSIJXGTsF2r8MEyXJ1s81U7yFhdxAplU6OR670T9L1a%2FUl0F%2BA8z7n%2FBJRYrxgZbXLph15CgMPmTbXZVeEkxUcB78yOE2zCzrxskbIVBY2eUmEZe8AIQXU2JTFMg1mwPsTNRVnt9aAg8tN6Q2wN%2Bz8m1DbYJEd9Fuxgljqjf1AgYv6vx1qs00wP3hxododA1qSu9eNSl9roWPdyIZJwzf%2B78FXhMIMN3e%2FrFHf32GmQMM5YJgjbAM%2B5n9ZocaWW6mLOAUNuvdegDzCzgdi%2BBjqkAZrtGwJbK6%2BMpxEYXaFw%2F4Waq%2F%2Bv5%2BCS4r2MMoq99XMPlV141lz83eOk7%2BF0Mbt4pela9ij8eXDSk6ZQKIo9V9nQ5hW%2BNrBjcVVGVsSkD7Cf8BXm%2FIHK8fu0oAOW94xjP50Jbi3EFUdFSDQ%2BzhKPt%2FjXQ%2Fy%2Brj3k%2FBtCB3W2qdAq7uS5VE4eszaxtPtsUmNk3hREzvPLF%2FNwSQhlboSpe%2BCzmPZI&X-Amz-Signature=8dc607c7c60a35f4952fba846f9cd7d14b4f2bf5e9919f93915feab031fa6016&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
