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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGWTSI4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8s0zlhGDVEh%2Fo6OMZ%2BU1Z4BdONQRzfiyUr41awfRbjAiEAsc%2F%2BqPcAEyLW5P8YLarpuDDLmd937u5b4EA6aO%2FxnuUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoncBWF0PueGLx8qircA0iCQZiNYHL5cHRnZHss4bOZfFMWZbccM408SEv%2B2h4jffuWnl58pM3xasKUg8AVOmIUaydqMCgOl8FK1r8lI%2Bz6Gb042xmJ03%2BCMhVcur8Nw%2BI6QR29mH4hHNvsJ9S8CQK0WTv8RFnFUZEvosKJc0nJiP7uBEbRDhVdfbYo7mcrp6oPtFbmuAnLW4HBDwhHBmcZ7velezAlEvoiNLtwqTWCyVlTP%2F%2B40vHlVOy%2BaQZ21ix7biUF6E0eQizxMh2pSMdVTLN1gqqdAMDwBhdpwwtRgK6Cm%2FsCMwQY23%2FmjY3OtnggTF31F1S%2BP3VlZv9BV9PvnO29v20mJ9Jau0SC2NTnJG5L1oHTBSeOaEbrt0z4CIVo27EkcwsoCEHEIJLKZLOoSFXkzRe0i4AtffwrTXRdf5PrkucGkZM1l9oNWLqTiGX9UpKGHFGF8KAoyU0%2BeYZMNlqh7XBTtFsvwQRnpR1RCqt%2FQfozioMVPz6Csxy79ZZXbjDo%2Fk8uOVJF%2BmAC8dxb4x4AxdotsR11G0j%2FD4gHl0i2N978xrxdz%2FEv0lKAxQJaADfl6KWgibYosv5iF4RG0tJYX8nVN1pGvWuwtaYd4snS3EZofuBShbfPO73XVIb2XOe79NW5dVjcMJzn5r0GOqUB1Wo5gXQJj6IVBQOsyIsP%2B9B8xf%2FR5PhftAwHKhvWUpksPUje4vFSn%2BpbjjzdDZoOsNUWt7PdhhfACdlsN139y29minD41vhK8C%2FMLzOUV1pF8AKYyQrRCTPQt0pqVni27LrIMjqYv8R5TStpuofRNwzJxJTdFjR%2FPQEsvtzG%2FYKbVXu9LTfY1Jz%2FcmXvu1DqOxeWdYQ%2Fcnaw37DnPhhq1b%2BVyyFV&X-Amz-Signature=32e20c8ea79546e6d5c53fbed41fed36f339ffa5a842dc6baa3ad2f7883346e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGWTSI4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8s0zlhGDVEh%2Fo6OMZ%2BU1Z4BdONQRzfiyUr41awfRbjAiEAsc%2F%2BqPcAEyLW5P8YLarpuDDLmd937u5b4EA6aO%2FxnuUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoncBWF0PueGLx8qircA0iCQZiNYHL5cHRnZHss4bOZfFMWZbccM408SEv%2B2h4jffuWnl58pM3xasKUg8AVOmIUaydqMCgOl8FK1r8lI%2Bz6Gb042xmJ03%2BCMhVcur8Nw%2BI6QR29mH4hHNvsJ9S8CQK0WTv8RFnFUZEvosKJc0nJiP7uBEbRDhVdfbYo7mcrp6oPtFbmuAnLW4HBDwhHBmcZ7velezAlEvoiNLtwqTWCyVlTP%2F%2B40vHlVOy%2BaQZ21ix7biUF6E0eQizxMh2pSMdVTLN1gqqdAMDwBhdpwwtRgK6Cm%2FsCMwQY23%2FmjY3OtnggTF31F1S%2BP3VlZv9BV9PvnO29v20mJ9Jau0SC2NTnJG5L1oHTBSeOaEbrt0z4CIVo27EkcwsoCEHEIJLKZLOoSFXkzRe0i4AtffwrTXRdf5PrkucGkZM1l9oNWLqTiGX9UpKGHFGF8KAoyU0%2BeYZMNlqh7XBTtFsvwQRnpR1RCqt%2FQfozioMVPz6Csxy79ZZXbjDo%2Fk8uOVJF%2BmAC8dxb4x4AxdotsR11G0j%2FD4gHl0i2N978xrxdz%2FEv0lKAxQJaADfl6KWgibYosv5iF4RG0tJYX8nVN1pGvWuwtaYd4snS3EZofuBShbfPO73XVIb2XOe79NW5dVjcMJzn5r0GOqUB1Wo5gXQJj6IVBQOsyIsP%2B9B8xf%2FR5PhftAwHKhvWUpksPUje4vFSn%2BpbjjzdDZoOsNUWt7PdhhfACdlsN139y29minD41vhK8C%2FMLzOUV1pF8AKYyQrRCTPQt0pqVni27LrIMjqYv8R5TStpuofRNwzJxJTdFjR%2FPQEsvtzG%2FYKbVXu9LTfY1Jz%2FcmXvu1DqOxeWdYQ%2Fcnaw37DnPhhq1b%2BVyyFV&X-Amz-Signature=0450e926cda460bccd14a8522bdfa5d10fb2965d1efcf83e77f5bc4b63cae1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEVJ5JE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYHq2cHhwXskG0OJUsAL3D1Ywb5%2BxbQI%2Bp4gAnORHI1gIhAO7eUUkoqu5UEv1c7QMMQ6ZxYzp305mG%2B7Rvl%2FtDXXW3KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmqbuEuDLahiZ%2Fo9oq3ANFIxVH1f8zenfl%2BIhQugUj4jofW8lOuzEDn4y17Za83%2BAyUcp6SM2J9uLw8ssEOXS1rIT4xD96WUKniLb7bHD1gYJhKl3429jpSfa17BtK%2BjAIut9ZwjkST67USHjskIE66D%2F6LkVw1GkJT5hEbJEWlgzXHvaxXhwXc4r8b7P%2BOiNAc1XM2aaTGTMykbn%2BEl7jyoV71KwE1ukKrBfIQBs%2FRLZhEiWJuIwNofdP111VkF0W1kSyq9TZwfgLiDBDBnhIUdjYjoJIlc5gtOH7koLXqx35r5wRJMAsUg2okDFWPKC19zvsVv%2B7KRz1GPes9WbeL63kh7wWeaYfmVN28UHrGbwmf%2FDSgCyypLGu7xwAQD7onrpoa62dThY0dfPuDFItUEagK%2Fjtz45nk7EtlaChACryTodVtNPAXZYZ0611SC%2FIZnla%2BWU76FDDC41%2BTeAhme%2B9UWJfBJA5YpaMxHzuPIgcStA1SctpnFssKtiT7crhVbvLSyu0t77i1pmLKcyn0hHAJzkG4fcDn%2FIXR9GG5KOUhTUPVc4luM4GqzDvrAfzXUu%2FeFoatK1ptVXiHAkybloY%2BMAxOfaZRpclr92LCwxJJppegvmoyYyj425wJuhaO3FA4mrTiSiQwDCt6ea9BjqkAaiOP7te%2BvEUZSsSSZZ%2FrIpJwp8RaMc3OmuuMtuqPh6PaEAouX5Pj0C5BPlbZjCRHuZxLgImb0k%2Bp5pI8eMxHLCufnIllZjpoFaTGXQ1mETPSmhFvJ%2FE%2BM9I83YMsN2sKZPx4gRgSkoA3EZ9OSJixBf%2FW5qJRXqCGz5%2FAKQmsN3vw52dC9qRefe8QeuaPZiiFNA2QkKLlTlikKgs%2BqSA8YS%2FoNNx&X-Amz-Signature=21172b2bcab501f018a617b4b99b1bca9a39a8f67cafe351ee70896908a1fe2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPPY4JO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjD5Kygh6tfh3y%2FWr2XyFaaTt90kGQZi0NknH6jIioOAIgQNPliw%2BOINn8kJunZxwYvYZ6AD%2FNuuI3vgiFB%2BQlcf0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAx0C6ZZ7Ei726MgyrcA2O1uIwcpWKN4gK7d%2BS60N%2FsU5WCHO3KeWaAcSe5ypOIyl9XmywXMlwzT5dzP1nmnvDJi9EF4nJu8rMxznl8rjhZhWNwccPn4ahC9v7WT%2BXJ8da%2BA0pSe30ySWkBWWVmuZ%2FrXKLP6%2BFOdU21PhXkFlUBjJzHgkW74WEOMML1B%2BYdXP2Mjgf0KPu4kz4h9h0LxJ3CFOKVoiV7GhGP3Vgf9K6hjg9049WGn9U1yCu%2FgOXgoh57zTEp4AQL1FZ1AgMxjUiGLHdj6wPCXzYNdzwWNRuethcYExR%2F7fQRvVQbjMvZ4JLrjioE%2B2pNKAsEZTY8B6LNcsGIjxU975eyVYafF81c2S%2Bct58EDpGUeXP0qOgsU1FCYWVWtGkbCQbMsuwhrsB1yS7sOTMqVG4hjTUxIaTQ9MVHF0%2FsU0y3B09SiUWt0fd1rV0nwf4MQ7nUZxvHyK8dv23BqeRfGGDFrzdvUlGDkokjN6GEEyPYH%2F21RdbEEPbIbjq7dlDjM0n%2BocblnSH9qpayDcKzJsQQsY%2FkNiNcmkiwkac4JPPmAmtQiqz5NCGo2KXxNFgeiwRxb%2BdpaVhxhwMacPKQ0rmNpraOKmHp8Y%2FXDGhKOeyec0lJi7sF2%2BlXvuksCj9yB6k7MKXp5r0GOqUBUrcSh6fsjHRH25DIKNaBE%2FUxvjoeXZ%2BoFurUQHn2S11H%2FAjaGmSDlew%2BIujXrHiq%2FxhHYTsWsX2siURSoH0%2BwKMfbXokh1A0dK1Fd8mG%2FtryooN%2BDM66%2Bo9KRtqSfJH5Wy1AX%2BXzDZ%2BgZIVqfNl27K%2Fx3z03il93G5Ky4dil7zfgd6k%2BP93Rq1tv24eEF359lBrjsJxVUuRrT6FC%2F8Q4Jv2e10S9&X-Amz-Signature=1d592f53142785ec0fb5b4204a6f9c45e2a5dbffa281ef976909fa886a7ab52f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGWTSI4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8s0zlhGDVEh%2Fo6OMZ%2BU1Z4BdONQRzfiyUr41awfRbjAiEAsc%2F%2BqPcAEyLW5P8YLarpuDDLmd937u5b4EA6aO%2FxnuUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoncBWF0PueGLx8qircA0iCQZiNYHL5cHRnZHss4bOZfFMWZbccM408SEv%2B2h4jffuWnl58pM3xasKUg8AVOmIUaydqMCgOl8FK1r8lI%2Bz6Gb042xmJ03%2BCMhVcur8Nw%2BI6QR29mH4hHNvsJ9S8CQK0WTv8RFnFUZEvosKJc0nJiP7uBEbRDhVdfbYo7mcrp6oPtFbmuAnLW4HBDwhHBmcZ7velezAlEvoiNLtwqTWCyVlTP%2F%2B40vHlVOy%2BaQZ21ix7biUF6E0eQizxMh2pSMdVTLN1gqqdAMDwBhdpwwtRgK6Cm%2FsCMwQY23%2FmjY3OtnggTF31F1S%2BP3VlZv9BV9PvnO29v20mJ9Jau0SC2NTnJG5L1oHTBSeOaEbrt0z4CIVo27EkcwsoCEHEIJLKZLOoSFXkzRe0i4AtffwrTXRdf5PrkucGkZM1l9oNWLqTiGX9UpKGHFGF8KAoyU0%2BeYZMNlqh7XBTtFsvwQRnpR1RCqt%2FQfozioMVPz6Csxy79ZZXbjDo%2Fk8uOVJF%2BmAC8dxb4x4AxdotsR11G0j%2FD4gHl0i2N978xrxdz%2FEv0lKAxQJaADfl6KWgibYosv5iF4RG0tJYX8nVN1pGvWuwtaYd4snS3EZofuBShbfPO73XVIb2XOe79NW5dVjcMJzn5r0GOqUB1Wo5gXQJj6IVBQOsyIsP%2B9B8xf%2FR5PhftAwHKhvWUpksPUje4vFSn%2BpbjjzdDZoOsNUWt7PdhhfACdlsN139y29minD41vhK8C%2FMLzOUV1pF8AKYyQrRCTPQt0pqVni27LrIMjqYv8R5TStpuofRNwzJxJTdFjR%2FPQEsvtzG%2FYKbVXu9LTfY1Jz%2FcmXvu1DqOxeWdYQ%2Fcnaw37DnPhhq1b%2BVyyFV&X-Amz-Signature=944646c27fc9332c82e8c9b808d033b144d6256ac72eaa06eada1ed4c13ad8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
