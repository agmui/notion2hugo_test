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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIIIOAN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaLpHiCkIhHcLyH79CgVyuz3hs4O9PrQytJBQot%2FAP1AiBEkYiOJKBwjx9R0lbwT9HrknbwYjAlAgIyNBTmpC4EPir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMmO%2BPtvMENxZQJI%2B7KtwDoJMynKCUOACg8yyUqPNBCCXF33Fz8jsAnujwkxJjev8RWVzz8iuNlAcQzktlvLP37D94scCooNC%2FPvOpcEEJpf0MzNvD5yJ1Fv237oqUcgFUPz8CseXFEURRpwhi0UF6FlmvLPY7zYU6SUNoG681srTiB56aHaOeLaFT%2B%2BTN6rX33gbgykkFWCjG5hNOAhd2E4bbSs0TKIYY6D203Jm3S9XjKM4dFEKgtujTrltQsY%2FD22J0RZ7U0Y%2FfKCu%2BqIhBeebkWupAcxkX6tWnnJFtdMAor4YzLF3jpNask%2F%2F81ipgX%2Fszs5IXUKdiyV0M4uSGliKlNIRLym6m2gsNOvTmueoYmDZk2NvhPU4tR4SOLGL0axrpi%2BuBEblntoloTWFnn6JU2N8SZj1OhY8isx9jcGmqNzP3e5XzDwBcw%2BJUIgDvCjeZLEdnpleMhut7hLW4iUHCEx5QhkSx06DSXk8XUz47QrZ%2FgU9jvhM7Hkt7DG9jXjedTSaAw6z5XIXASSNbqIql4hCvhW3pvDlqSZczaTDynKbZJcOLAP4CoLEoueZsMuOKO842QmJKwxjQ4xi%2B%2FNW2Et4ef7sZ06jmvfh4mqvvd9jKA56V%2BckTbNnqp6OVzSCTi65JuWgh2www6YHYvgY6pgF4dd9yhlzjc96zMThpoJmiwVES7VV859OhxhhlQBBYZgdQX1UubPRdEOMO7OtGX7SiUT8wlvyDFsIrNnY3Xnp1vobapXYF15Z1mZ0W%2Brvkv3OfLDTBbGUsEsEDacfmJm4XRYRQVYEvgAVEWVpeWhvJXKmVxj%2F56Hu4VehdMGPEsv0dxxhcsQsmVIrJhqwKPYIcd9jNA73u6wmAfkUHyoXr4hAstBLF&X-Amz-Signature=c4d8182a0050e27312a0680a37b9fef7efe4b25dcce064b4c5c07e2bf662398c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIIIOAN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaLpHiCkIhHcLyH79CgVyuz3hs4O9PrQytJBQot%2FAP1AiBEkYiOJKBwjx9R0lbwT9HrknbwYjAlAgIyNBTmpC4EPir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMmO%2BPtvMENxZQJI%2B7KtwDoJMynKCUOACg8yyUqPNBCCXF33Fz8jsAnujwkxJjev8RWVzz8iuNlAcQzktlvLP37D94scCooNC%2FPvOpcEEJpf0MzNvD5yJ1Fv237oqUcgFUPz8CseXFEURRpwhi0UF6FlmvLPY7zYU6SUNoG681srTiB56aHaOeLaFT%2B%2BTN6rX33gbgykkFWCjG5hNOAhd2E4bbSs0TKIYY6D203Jm3S9XjKM4dFEKgtujTrltQsY%2FD22J0RZ7U0Y%2FfKCu%2BqIhBeebkWupAcxkX6tWnnJFtdMAor4YzLF3jpNask%2F%2F81ipgX%2Fszs5IXUKdiyV0M4uSGliKlNIRLym6m2gsNOvTmueoYmDZk2NvhPU4tR4SOLGL0axrpi%2BuBEblntoloTWFnn6JU2N8SZj1OhY8isx9jcGmqNzP3e5XzDwBcw%2BJUIgDvCjeZLEdnpleMhut7hLW4iUHCEx5QhkSx06DSXk8XUz47QrZ%2FgU9jvhM7Hkt7DG9jXjedTSaAw6z5XIXASSNbqIql4hCvhW3pvDlqSZczaTDynKbZJcOLAP4CoLEoueZsMuOKO842QmJKwxjQ4xi%2B%2FNW2Et4ef7sZ06jmvfh4mqvvd9jKA56V%2BckTbNnqp6OVzSCTi65JuWgh2www6YHYvgY6pgF4dd9yhlzjc96zMThpoJmiwVES7VV859OhxhhlQBBYZgdQX1UubPRdEOMO7OtGX7SiUT8wlvyDFsIrNnY3Xnp1vobapXYF15Z1mZ0W%2Brvkv3OfLDTBbGUsEsEDacfmJm4XRYRQVYEvgAVEWVpeWhvJXKmVxj%2F56Hu4VehdMGPEsv0dxxhcsQsmVIrJhqwKPYIcd9jNA73u6wmAfkUHyoXr4hAstBLF&X-Amz-Signature=c2e18f5ec028cda6854e09c9e76568dc5582475dbe85b952d3204629f385584b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64UUNUF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCei8TNGm%2FZ4MRA0%2Bm8ctbW75qb7weoC6%2BrvSdFZbSjAiBC39GEDuCqU6wefYMPpasyZD28MY09K2QoaXzNNHpRjyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2Bj%2BzTTfsgY0q1ANhKtwDFfheIFX8GPuP0a3rtLW9QT4gHniHGM3gOkdMtcGKviDw5Ds%2Fi0VvUzoCdWdDj1GsL%2F55SbYrqigqAvCeoEzGPyHXZ6Uwa%2Bjy5rJR1f0rAO8gMHFKoc3DpRE2KKJV%2BB%2FSbs6UpaCkNaEi1IdfqaIJm%2B3NmkZ1bSdPkaeFGAa%2B%2FFiwhBVJBs9dcNTmrrtyoPG%2BvzauX4%2FzU6J5PjqT0iPMukNl%2FQKmxvQxQ1YsdU1byJqqieCc3xIXfxELzpX38JkhJ4BTLWmpGWg9jFpryl704rRJ4tflAgmxy0oNDMdBeX1rLLN42dLlfnJN3D%2Bmawz1UutSM3KQTmUmXKdUzLJv340TLwYmnkBjR21KD7%2FOLOjy8z%2FDBHMrLHdMViqDoakDFaAz%2BOJb6ALsiZ1aUwEnQCt5%2BihRYzD9Pd0W%2B%2FMWWI9XjSQo5hPGjYUkc25ABu4DNHCeJXc8tw8gW7WeC4HZQl1aaPxojNqJbPtirsg%2FufWVYfHWOKkaGyrhtto9ds5mzB0WV1kZC2XXBnrKGLAisSR00o0Zk41oasdsm5CEXXFN8CFQiQLWIFSXV%2BhA3cL24pcmrRPrrGqFWfgce%2B81a1%2BJFQw%2FVqC24DuqWDYggsf2u21EZ7tLhLhcyFcwiILYvgY6pgFesLyh%2BExhhAgL3DON13Is0yPK8V37dzw38VO%2F1D3O2swqh1hbH%2BSQDqbDWEYHIWSADkcqPjirddvdwbPy09mFq%2BaTWN9XTRDoofEhLTzZmf0Ja7UTA3z5v8xnGZgvgbsu9KKwDr8PNbZ5yN2ywRSc1b2hPvip6qxOg7bTRiJpoWqKdF4brKwJ34EIh4ETNoaXFgN07AssCJcEAu0PyAr279CxVoga&X-Amz-Signature=20a9cbdd1a2ed2b6f30f9775b50e90e6597bdee11d1f0a3ca55977f66bb97f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVENTJFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBokIBACuFUBf9QIdgW%2BjuOFyBKs9p78kp4tDhMU3i8WAiEAnagCjUe89OJFEEjPB1sD0DAVxP5w%2FB4DGLRDn6sP3CEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNS01dyvTlmjaScZISrcAznOopLs0BQ9xtZZWWuEBKE%2FU709aLtDcMfMXuVD%2BOeadpckKLJBetqOJjzmvI%2BVGWMWxKyUmYLiYHMk7inAVHBHEJOgDBiwmxwhV808ZYtuAeXjEppc89ZjVgFYgDZbnmEfyxKQZlG8T64GDTiigGCMNvdexmLzrjboQ4CBPcPOoyWEVv12c2eqXuKR%2FGrP%2F1bC2IfmGDVoBKRpLaVee0RPGR3VZeFMr%2FEpXLevDl6Dt4d5%2FExVz4j8zJpM8fULDPp6hzeNl6LK7bEcdDT6tWNdRbJ1I3c1A%2FI8BeGyLjBD6gXONAQTjTW9MgnrrKv7DcZ7Ki%2Bs8ZUV4TQ0oPQRF5PI5Duqv6RJEMbUG7Y0USkg%2FUf1%2FN7UdXVxSasTidzPmJKVYRn3nYjm5jd03j8BcEtjSiAKjtPBr6ttUzeFLLJsgZ8sqcEU3Vo%2Fpwh551Z77ztuQ9NSdT1ynZaLdPWPqQzXx96u4MqiW5mV6fjldOOEavzgevwOu7N7p01qusZcvGGRx0f6ycxsKT8cNmtjANAd0V%2Bnb82oKvDVx05V3bVdvZJiGxLQpv6uEEAXJ44rDQQGDO60Vo5gh1xq6PVkDIj1i23LVW91v4PjsR%2B%2BumJ1jxHLTyVIWuBu%2FVYEMIGC2L4GOqUBBXeFQiiSsiXQGHmjtu%2BNylChD6dIkUY7wphyUPayPd1ZC0%2FWYcLOcYhrR2pcUTJAgKVdq1aA0co%2BFNpRuPJ9YChxWHYNl%2Bl6k8izZ2PDVURIC0mOqFT6O9LvMRP0%2FpPL4JjU4GnT2ibuVu406dPI%2BkpF0p9SNopC9uLdd2hRj39lxSYMwYF9i3fer0831FBy87GxS3SRVpMofqqq9xtabVrAvT7v&X-Amz-Signature=e48e00454ddb71826cbc543209dc63dddcce264ae6414db8bd37425e299d129d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIIIOAN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaLpHiCkIhHcLyH79CgVyuz3hs4O9PrQytJBQot%2FAP1AiBEkYiOJKBwjx9R0lbwT9HrknbwYjAlAgIyNBTmpC4EPir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMmO%2BPtvMENxZQJI%2B7KtwDoJMynKCUOACg8yyUqPNBCCXF33Fz8jsAnujwkxJjev8RWVzz8iuNlAcQzktlvLP37D94scCooNC%2FPvOpcEEJpf0MzNvD5yJ1Fv237oqUcgFUPz8CseXFEURRpwhi0UF6FlmvLPY7zYU6SUNoG681srTiB56aHaOeLaFT%2B%2BTN6rX33gbgykkFWCjG5hNOAhd2E4bbSs0TKIYY6D203Jm3S9XjKM4dFEKgtujTrltQsY%2FD22J0RZ7U0Y%2FfKCu%2BqIhBeebkWupAcxkX6tWnnJFtdMAor4YzLF3jpNask%2F%2F81ipgX%2Fszs5IXUKdiyV0M4uSGliKlNIRLym6m2gsNOvTmueoYmDZk2NvhPU4tR4SOLGL0axrpi%2BuBEblntoloTWFnn6JU2N8SZj1OhY8isx9jcGmqNzP3e5XzDwBcw%2BJUIgDvCjeZLEdnpleMhut7hLW4iUHCEx5QhkSx06DSXk8XUz47QrZ%2FgU9jvhM7Hkt7DG9jXjedTSaAw6z5XIXASSNbqIql4hCvhW3pvDlqSZczaTDynKbZJcOLAP4CoLEoueZsMuOKO842QmJKwxjQ4xi%2B%2FNW2Et4ef7sZ06jmvfh4mqvvd9jKA56V%2BckTbNnqp6OVzSCTi65JuWgh2www6YHYvgY6pgF4dd9yhlzjc96zMThpoJmiwVES7VV859OhxhhlQBBYZgdQX1UubPRdEOMO7OtGX7SiUT8wlvyDFsIrNnY3Xnp1vobapXYF15Z1mZ0W%2Brvkv3OfLDTBbGUsEsEDacfmJm4XRYRQVYEvgAVEWVpeWhvJXKmVxj%2F56Hu4VehdMGPEsv0dxxhcsQsmVIrJhqwKPYIcd9jNA73u6wmAfkUHyoXr4hAstBLF&X-Amz-Signature=691fa29eb9e4a46a3edc368450f65ad5a964a82099573461aa4304672eda69fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
