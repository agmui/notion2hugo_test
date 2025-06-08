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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=0524aa0a78bc8cfcd4b582eacc6170c6dcbb25765db667cfa3379c2adce15f19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=24dba73b494e9b9ab3337b3ccb5158500608f46b2c551ca5ea421c0d3a609290&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=ea644f573019a9b6c387db12a87dc86b5478412f89397bee994a48298c894850&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW2YEXR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClUs1Ys8%2FUrw8tXQvDNSVxCwBP%2Bj9aZXB0ViIjM64gSwIgHLhdN%2FcHiGVMwJkcvuO4667n9lmCSuNJOD%2B%2BuvBXLccqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFXDDS4JLgHcV%2BgKircA1a7oJY6QUWXigDP9aAmvBzDfEioSqrZ%2F43URiOssReXiOlsYhYh4TCnTTtkoKOpklZZiEuWNlKo32zjV2ua3p7rXsbiIWFfRDz%2FfWQX339LdQjSlUsO6UZXGmDYajRmknmojJGTKFPoJqdiNbly2AZlbLF%2BOCswERRZxsEJsRgDdWeaZLVSFOD%2FlaKFYIs8UO6YOTZ2LUOT0jleZCPCVKgE1DPo%2B6aOfRTZh8cb433sNcl1zzM6RGmO9F8UJGVoj8RNdVCLGuPaqXL%2B1XXtxVICz0RHiCtKeaaP%2FQBBpXlhYpTr9flY9hghVoxDhsSzs37knnVg29dTmlidvl0DuhZ17MMBNuhmFeeCYCsuE4kJs9zvXSGd41eaEvPxh%2FJsLqZo0oDDnIPX9SuewUSIIEJiEmPOPEWvgSWPNjZpSoEgIAUTb8ihvCNTOPOyCJgiA4cDcKqSSMqAdbjnbalWr2VAfalDprAfd157vuhdgJPrGVcYjZ5Q%2FajLTkCfunhuMV9y1CyIYXZ64ZoTXD5H8t7PP19hS3XBcG6frs1nNzYNv53gjZDZlyO39FU%2FZVDYe0A%2BZECn%2FFLLYjzgEvfiyg0pazcNfm6ucsAFf4FexWeCDVlGJIPy4gvaUZexMJW0lsIGOqUBl7P4UfctbxztJhGaR0%2FRpeccZKLg2mOEQi2kzgGAYdiAddnXpC2isoxHuHK71y%2BhqsgIZjEK7QA3ktkQpsq5DqK8ZTkSN5csbVyUPusvJfKaetZGXacw%2FmPJvhlFyx59m2E6WZZcmnETEVtVajLDPKlSonMgqGhHZDrDlnn5JOaqvZi2HQHPsPshEjyQmOnx1o4%2FxvCrfpjA8llCXt3TZwAdSgMK&X-Amz-Signature=297c2f17463812a2046504387855b629f0f5ed45cc25ba0689469d8c252eda5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQALMHHT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIWgq8VIOQ5gm9eSxxNNOxGCJgX2P7eQqOAp9t%2Bz%2F%2FvwIgM%2B5Tgqt5Xb02rf%2BBQOaI8A5Ek8%2FpMVPlRZJuaXQMSDsqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO55ju2ouRAjukrSSrcA2rIn3zpVTJRFRVbx3CJNykh3%2FNOZ96aQcQo4s8sgbeFKY%2B5BlbAlZdCyS8aLU5WnE66QV%2FMDH9V8O%2FEbl%2FErNuleoBLdpnWXECC1kQ43rJGpuRSvqNGriALbtF4KyQN%2Fu4FNqA9yasaF762r6c38vf265cfu0bfMUwL8iSlj5I2QDWk9FtmeLdxE9KWKv6nNBYbtTZZxzN1CDoIUz0raJMyLa5gILaKdXfSI1813Fjl6YNAVOuSVrZYpD5uWRKxCaMl2EPgm%2FBbfi7Q87e%2Bwfm2b42xFUGXDaqLD%2FQT147N2nIdFwgFTnBsq5kIGJ4y7TkmXb%2F0mgPU%2FNAtsT483aGeo7mBxC5wuBqhnItUAUnkkH%2Bez8DpPGevlw3z3pdzsSgm6BlvoYw13XEzD%2F9AfJo1mHTIs%2BSnFZirdJFWRMXewYQKyT94TfNn9vrBXCFh%2Ft3ImyqgExRZESgESm%2FuntqqIWrTgrKWSO3Ki1ZuT%2FODWoUbqWC2SUzICRrAEGDz3%2F7P4ep9QSQI4KR4tLlWG83MkqWQ5O6ANtoEGTi1IysmfEwnuU0m8HUwurg%2BgQ4keGhEi3YTrIGKI9qavCiy1EXoWwciKIYjvWCroBoftzX8U1an0YNjvU7%2Bjp6bMNeylsIGOqUBUnUwcx%2BsE9l%2B%2BdbZKXmgNod9MNVTZ7o1hsRBdktOuURTbcMVKV8WP0vYM%2BnXNoOU9%2F6CBMxyUCjPR%2BWS%2B3KWFSssNPowov%2FAdpFGITI8nJjIeOL0lugmcc8QCcdYi7wp4yWikrHAsb90c1uDuJ9NWFOo71z6c2xEwyQqmrBkYzxMcQ6d56yLOZfc3eYilsViu85Wh3WaBkklGH7ClgZt%2B08oDh66&X-Amz-Signature=694f3ca5fe91b023880d7e1b410a128bd702ba1d057baaeb4c4ed7ffab2c930c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=e551f23c4b224daf582d195c8e273762258a214e15fd77b2d2d08c78cd3400c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
