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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU2TX4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPB7GOUl0IUoqpPHztT9iY7eLRmxoRBP3twqqVaGQH3wIgMeFvxkZMAVjzMFFdSjHPK5J289OFsHLo3D1iJqFNeh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIwMSJuHyBuqXS90byrcA3RFd8CWz90GfdrD1KD6VqEb4LuoLVtTcUw1mHWwGcpNwXoTAUzkhNZEI1XSJJZP8hhp1qFeELk%2BnjIfIylnPjUA0MlM1tBsVZceWMDaZ5EE3Roms77eAzh7f9Le%2FsXDV4f2I1PW5Jz45yYWt1FjJ%2BxUF0FbiP4Mj4Fcw%2BcQr2IKQqXQF%2B2AJ5sp2eeGhvesqSzSKJvpMqGsdb97Spbl1BuaBsllaiK9EvlhZ%2Fp8noQE0PWB4dUtt3raR8so9oMnDYwPd4z8a6hXxgMCUhh2B8%2FqcUagFCFvZauT7UM5sZW9TzKyAvniJ5IFRMpgGzsg%2FZiZmhmhkVed2DEN7jEyD20b2MbtSAnpyfqljpkGwaZ9dEgnUwT7w7t1kAM4UvkiYxltyvn4lTB%2FWZIJitaN7m%2Bgfy%2FOaEXv%2F0enWnXorZO5JMIE7rwbJWlANfeOd82tg5l2i6FqBBy%2Fs7%2B8giDebst4c%2F%2FCL7VWDPfnIrX8U7QMA8jV1nvvG449k1NucWX3UdhqCETZ72g9G0OYvSToZgsZxAFexHTctEGy7IZzH%2BJ0D8Ol5rqxEswK8%2B6gDAcncYT4ST2vgtr3U3wTsOM%2BNcibNfSs%2BOkJIHwNrYGTMLg5EDD4H5ebK6GqYyH%2FMK6q5sIGOqUB07TqcjckVXx8e34GDHJhNEJmnu5ATioJdUWqMVEIM1RQyHzck6y%2F8sOAXVVuiCgTqkTljnO9WB2U%2Fm3sY9g78GbSrtFsmqTCczrrC8Skg%2BAQhEW%2BjwvFK45bl7vCf7LA%2FUBHdtu8BK2s4U0GzURxJkoZ2FQ1qBS9V0aiVXs6xvoUdkz5oSRZ%2Bq1280kuKpDEPykrYdoUQ%2FNh34UrJzBP6fNdKWH0&X-Amz-Signature=fdbeb9299fdfdc427e121df484a0200b6f4f7fe7807a8929560e0daba51b57e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU2TX4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPB7GOUl0IUoqpPHztT9iY7eLRmxoRBP3twqqVaGQH3wIgMeFvxkZMAVjzMFFdSjHPK5J289OFsHLo3D1iJqFNeh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIwMSJuHyBuqXS90byrcA3RFd8CWz90GfdrD1KD6VqEb4LuoLVtTcUw1mHWwGcpNwXoTAUzkhNZEI1XSJJZP8hhp1qFeELk%2BnjIfIylnPjUA0MlM1tBsVZceWMDaZ5EE3Roms77eAzh7f9Le%2FsXDV4f2I1PW5Jz45yYWt1FjJ%2BxUF0FbiP4Mj4Fcw%2BcQr2IKQqXQF%2B2AJ5sp2eeGhvesqSzSKJvpMqGsdb97Spbl1BuaBsllaiK9EvlhZ%2Fp8noQE0PWB4dUtt3raR8so9oMnDYwPd4z8a6hXxgMCUhh2B8%2FqcUagFCFvZauT7UM5sZW9TzKyAvniJ5IFRMpgGzsg%2FZiZmhmhkVed2DEN7jEyD20b2MbtSAnpyfqljpkGwaZ9dEgnUwT7w7t1kAM4UvkiYxltyvn4lTB%2FWZIJitaN7m%2Bgfy%2FOaEXv%2F0enWnXorZO5JMIE7rwbJWlANfeOd82tg5l2i6FqBBy%2Fs7%2B8giDebst4c%2F%2FCL7VWDPfnIrX8U7QMA8jV1nvvG449k1NucWX3UdhqCETZ72g9G0OYvSToZgsZxAFexHTctEGy7IZzH%2BJ0D8Ol5rqxEswK8%2B6gDAcncYT4ST2vgtr3U3wTsOM%2BNcibNfSs%2BOkJIHwNrYGTMLg5EDD4H5ebK6GqYyH%2FMK6q5sIGOqUB07TqcjckVXx8e34GDHJhNEJmnu5ATioJdUWqMVEIM1RQyHzck6y%2F8sOAXVVuiCgTqkTljnO9WB2U%2Fm3sY9g78GbSrtFsmqTCczrrC8Skg%2BAQhEW%2BjwvFK45bl7vCf7LA%2FUBHdtu8BK2s4U0GzURxJkoZ2FQ1qBS9V0aiVXs6xvoUdkz5oSRZ%2Bq1280kuKpDEPykrYdoUQ%2FNh34UrJzBP6fNdKWH0&X-Amz-Signature=3737269c8e02c318f860e5d5f2dea7baac1fa8ca229432a6a6369b8b29d263a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU2TX4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPB7GOUl0IUoqpPHztT9iY7eLRmxoRBP3twqqVaGQH3wIgMeFvxkZMAVjzMFFdSjHPK5J289OFsHLo3D1iJqFNeh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIwMSJuHyBuqXS90byrcA3RFd8CWz90GfdrD1KD6VqEb4LuoLVtTcUw1mHWwGcpNwXoTAUzkhNZEI1XSJJZP8hhp1qFeELk%2BnjIfIylnPjUA0MlM1tBsVZceWMDaZ5EE3Roms77eAzh7f9Le%2FsXDV4f2I1PW5Jz45yYWt1FjJ%2BxUF0FbiP4Mj4Fcw%2BcQr2IKQqXQF%2B2AJ5sp2eeGhvesqSzSKJvpMqGsdb97Spbl1BuaBsllaiK9EvlhZ%2Fp8noQE0PWB4dUtt3raR8so9oMnDYwPd4z8a6hXxgMCUhh2B8%2FqcUagFCFvZauT7UM5sZW9TzKyAvniJ5IFRMpgGzsg%2FZiZmhmhkVed2DEN7jEyD20b2MbtSAnpyfqljpkGwaZ9dEgnUwT7w7t1kAM4UvkiYxltyvn4lTB%2FWZIJitaN7m%2Bgfy%2FOaEXv%2F0enWnXorZO5JMIE7rwbJWlANfeOd82tg5l2i6FqBBy%2Fs7%2B8giDebst4c%2F%2FCL7VWDPfnIrX8U7QMA8jV1nvvG449k1NucWX3UdhqCETZ72g9G0OYvSToZgsZxAFexHTctEGy7IZzH%2BJ0D8Ol5rqxEswK8%2B6gDAcncYT4ST2vgtr3U3wTsOM%2BNcibNfSs%2BOkJIHwNrYGTMLg5EDD4H5ebK6GqYyH%2FMK6q5sIGOqUB07TqcjckVXx8e34GDHJhNEJmnu5ATioJdUWqMVEIM1RQyHzck6y%2F8sOAXVVuiCgTqkTljnO9WB2U%2Fm3sY9g78GbSrtFsmqTCczrrC8Skg%2BAQhEW%2BjwvFK45bl7vCf7LA%2FUBHdtu8BK2s4U0GzURxJkoZ2FQ1qBS9V0aiVXs6xvoUdkz5oSRZ%2Bq1280kuKpDEPykrYdoUQ%2FNh34UrJzBP6fNdKWH0&X-Amz-Signature=20f06ced5f7688b5c5861f5c509bda12d70edc06b87d56c3cca6f91c8e7c8b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMJ2C2K%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCr%2BZPz5BnQNqhb1xF7lqQEk6FD1guUFap1P%2FPWNR30HQIgVBa4mkxPOzoLLTKooW036A5rs36WeGsdVsnn5nEn6rEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFSs23G4IIGuevwRwyrcA40vLGoTnvCaMl0hYXz5XTHlbW885%2BsmCeYC%2FyjGLdUmSYqPWdxbWSvmtMUDpCjOm9rD1Be5cUSKYxl9y00VDBbzoO5Ylor14M6LRy7RT5ZERN8Yerhzn9RIqaM0kdouBcSrzNOV%2F%2Bw%2Bw0XV%2F1xA%2FDpMnoZjtF9QwH5IrlfKznNETN02XlUufR9XusMyDtq0cjlRo6jaoB0hOSIssLhyk70SoduFIRCXYEEXRVVRhxMvj5ixfRwNzQUXDBGujVRe1SHIOxNbJBx6yGQxHZqeaEE84AyrG9WUIj0z%2BmXBA4L9AEcx2lgQxUhOKy8775IG7Oft2%2BAbGMCdUuFO17tIlYAI1j8BMvsfor7kdNYYRkV8v9wWqCDvJQeC6xK3mFQnTzTnaK8TAbYsHsNn55suqoEGom1y7mX0ODWDAdHhNdQjl%2FRDoXJgQvvfUm0lyfG%2BM%2FlMcPVgJegGiDhhD7d1uYjGMkGGinRrK4GNWiSH239ks3S%2Bo4e%2FOamQtsOunjACybrGBsE0dLxmzfzstuCS00Eq2xz7rBbdM9lQFcEst7Vd7RQWDc9qofw1qPuInDyKukmrNVcjXPziQRSaqXpXOqq067A2p6Xo0r7C9DDjWFjO0MBD2XqO8gmNnDV0MP2q5sIGOqUBwjGzuxb6jsEPCKPhvZr27fsm2GvhagY2gKMKtmGRboNmm6%2BAtO0YazknpQa9lfy54lBX50AM0EN0YABIzE27ur8xfyvQEBxGdud6Yvvhg5VqxKXUmi9985dZtZJ7d%2BnNOGJHFpAmxx%2FvldMcmCuqiHZa3afVA%2FWNk7V76BUKprIHWmUWtCOm71a3zfl33g48pyh3PnjR6ZeNe8mUFnGIwk5%2BE6jQ&X-Amz-Signature=125438ba5fb2e92767a8fd0f43eb60020ead8a96f3757dab31ad3356eee2e8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJGZIKI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBxsMmH%2Fha8kZ%2FIVrregJeebkQ1ZhLt66hyZwHgD84d1AiByW%2BfU1AbO5AaR4a6XUc7GHDDmSC4%2FPIwqtybL45b4Lir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM6Go4aXjv7NPENY8aKtwDiRJ6CeLI0RvTj3iISWJcDJqenNFnbb7wxnzGHDpn7OeUGn59nwEvetnHaaIV4RC00gyYzt0rexyLGD92BzyrqjMmgpurR5P%2BX922lImJVuLHarnqTJs5VEP0JYiM%2Fqw%2BGOwqs0sXNqCQkKSdEIanjYhj9AajLsgC9VvjqCpSZM%2BtIeDXbht5KumDwfspZrNqyFMmAl2%2Bp7XnxAAtPV3w0Orf18RufmmsfqhIY8RmDt0A8bqq3z2%2BECLyC%2B06xIr%2F1WyJKqb6uytzsh1Wk5D5zZ8D%2BTgIeZSmoDHBA7lWnNy%2FkqTm1uHP7zGJ8v9Iz4PNk9ig%2Bxlv2axvm1ldOy7naQDpkRK8DccKrtAk9xUF4q0b8vem%2FB4hIfRgi8iQWEPBpmKnBt91Wj8a56gC179Q8qSZ%2BBfuV1nypBetXkwipzlRaMICLytpQi%2F0mqXzDwDYxcClORj1Rytlu1bM0p7Rol8s82l9TrYwrM1EIprqGxCVzCat0QmePJF3WO8gxbTmpQLkBIS6lAgCNOSu4kgYvrkMeg8H%2FwKY9Vjy1KOWVNLu8TKNPgbOnvfUgD1iPcsDwYeY4K5PyyljZQsbUaxTOOn3RBxFGC9rRz3nY6Gfkjyq4Z1kHBsIrZQNF1gwiarmwgY6pgF48W3XRM3v8yLvEchlO26H7hes0navKY0dy7C%2F7wRAVCnvFibWZMXNLwhJGJScyCtlBMBnS55J%2BwAdrFpip4zvamHNsbRfCoWuV61xwhYbr9vmySEUPWE0X2Y%2BjMbhs1GN1iZ%2B81ONOBuQnRvuYohbwosvPyJyz3yd6lGX5uyjFCr2py1v4VcwjDSXkmzf9yghCNscfWpHPgHiY%2B82ZkODdCx8XMff&X-Amz-Signature=81c67712e7efb941a66aac25bde44465f3c6b495d41e5aeb9b0a10fd1924e05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU2TX4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPB7GOUl0IUoqpPHztT9iY7eLRmxoRBP3twqqVaGQH3wIgMeFvxkZMAVjzMFFdSjHPK5J289OFsHLo3D1iJqFNeh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIwMSJuHyBuqXS90byrcA3RFd8CWz90GfdrD1KD6VqEb4LuoLVtTcUw1mHWwGcpNwXoTAUzkhNZEI1XSJJZP8hhp1qFeELk%2BnjIfIylnPjUA0MlM1tBsVZceWMDaZ5EE3Roms77eAzh7f9Le%2FsXDV4f2I1PW5Jz45yYWt1FjJ%2BxUF0FbiP4Mj4Fcw%2BcQr2IKQqXQF%2B2AJ5sp2eeGhvesqSzSKJvpMqGsdb97Spbl1BuaBsllaiK9EvlhZ%2Fp8noQE0PWB4dUtt3raR8so9oMnDYwPd4z8a6hXxgMCUhh2B8%2FqcUagFCFvZauT7UM5sZW9TzKyAvniJ5IFRMpgGzsg%2FZiZmhmhkVed2DEN7jEyD20b2MbtSAnpyfqljpkGwaZ9dEgnUwT7w7t1kAM4UvkiYxltyvn4lTB%2FWZIJitaN7m%2Bgfy%2FOaEXv%2F0enWnXorZO5JMIE7rwbJWlANfeOd82tg5l2i6FqBBy%2Fs7%2B8giDebst4c%2F%2FCL7VWDPfnIrX8U7QMA8jV1nvvG449k1NucWX3UdhqCETZ72g9G0OYvSToZgsZxAFexHTctEGy7IZzH%2BJ0D8Ol5rqxEswK8%2B6gDAcncYT4ST2vgtr3U3wTsOM%2BNcibNfSs%2BOkJIHwNrYGTMLg5EDD4H5ebK6GqYyH%2FMK6q5sIGOqUB07TqcjckVXx8e34GDHJhNEJmnu5ATioJdUWqMVEIM1RQyHzck6y%2F8sOAXVVuiCgTqkTljnO9WB2U%2Fm3sY9g78GbSrtFsmqTCczrrC8Skg%2BAQhEW%2BjwvFK45bl7vCf7LA%2FUBHdtu8BK2s4U0GzURxJkoZ2FQ1qBS9V0aiVXs6xvoUdkz5oSRZ%2Bq1280kuKpDEPykrYdoUQ%2FNh34UrJzBP6fNdKWH0&X-Amz-Signature=039cd7f14b337dc1e1b35916c3b856470c05e091875207ae96545aabbd6183e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
