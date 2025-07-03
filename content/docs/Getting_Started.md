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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4GMIYF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDnz5mWQKfunZ7kMiOCkYuNZbw6Lf1O%2FSz1h80F1NJQTwIgArJBOYfvUhl8Vnv%2BKg2B%2FJw9hnaZB2j4sWGgq3PEPnMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOvzQO8ZUloBonjyWyrcA%2FLKGOMGw6zdvnzWb3B9uo96cWNZSq22Dd%2BdqQdZcZpoYjMi5Bl2MvvZpfgwg4clYh1wIoOLZz2ZRjRhSpXWHj7RFWsuG5se1Eces3kOcSN5pJLpOiUE3exeXq8ugRmieLJ4hjl82zdfSr%2BUoTTHLLqngdldqv9aexGrfp6JEwRFm5HEZCVNpRsoWaGV46Q9HtFZSZbzRkFWNZFux0soux4I4qbzSbYZZAvHTggwJLNUpByLtz%2FxoS0RtV6QF4KEoTw9Fi3ycuW%2Frg5c7x7o3NwbNX%2FizEZXHY1FCjquP%2FsWVfjiGNEGHmqX3dyjaPXV%2FlSBAEzYu%2FqVIQqH5V%2Bhm9QoYtGVGMBpNVCtYV%2BWanKpL%2F6Vhn7QMx4R9Apm4PIfTWIc96hkH4mZ5sWgME%2BnB9Q0%2F2c1AaSvokoNxxbFW5r4Cvr0JCxi0UGUPZvrWvcBpGONkRaflsiC2ZlegveODW7VH9LKHC2fCywn8Qd6nRJ86O%2FAvUHOuAw%2BDpE4hdJFqQx8TyVjG70DaAfOGvzUBDimlw5ezeMCwMyB%2Fsjtss2Wk3iEeHL%2FvmXLuRxCgkEoBxIoLcLBRg%2BSzx%2FBaRDo%2BGUK5wX4cV2siUA6I5%2BZ8nkqyvvia2D7f6ovJ5gJMIOJmcMGOqUBKsHES5zAMYYJAOdvgsJK1A5ktAcaEzOU1PWx64xa9rnQ%2ByJE9lRcAPnWJ6IIjElqo%2BgE4VNQnWrlI611ugHVd%2B4GHGLETfSnyqvNwJeVMKG27EM8v2KZdpegmVhaqR5HivOPvQUNt86OAiSu2jrA6UqP%2Fhkfqj9eOlRycUoAtxKl%2FMZwWCnokEFgMHr1c%2BYgrIL2ofG4QLCrGE6gf50PH3nw2M6K&X-Amz-Signature=3c03a13686becdf8669340ff4d51cc7d4cb689401d5758189da37355d71e1caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4GMIYF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDnz5mWQKfunZ7kMiOCkYuNZbw6Lf1O%2FSz1h80F1NJQTwIgArJBOYfvUhl8Vnv%2BKg2B%2FJw9hnaZB2j4sWGgq3PEPnMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOvzQO8ZUloBonjyWyrcA%2FLKGOMGw6zdvnzWb3B9uo96cWNZSq22Dd%2BdqQdZcZpoYjMi5Bl2MvvZpfgwg4clYh1wIoOLZz2ZRjRhSpXWHj7RFWsuG5se1Eces3kOcSN5pJLpOiUE3exeXq8ugRmieLJ4hjl82zdfSr%2BUoTTHLLqngdldqv9aexGrfp6JEwRFm5HEZCVNpRsoWaGV46Q9HtFZSZbzRkFWNZFux0soux4I4qbzSbYZZAvHTggwJLNUpByLtz%2FxoS0RtV6QF4KEoTw9Fi3ycuW%2Frg5c7x7o3NwbNX%2FizEZXHY1FCjquP%2FsWVfjiGNEGHmqX3dyjaPXV%2FlSBAEzYu%2FqVIQqH5V%2Bhm9QoYtGVGMBpNVCtYV%2BWanKpL%2F6Vhn7QMx4R9Apm4PIfTWIc96hkH4mZ5sWgME%2BnB9Q0%2F2c1AaSvokoNxxbFW5r4Cvr0JCxi0UGUPZvrWvcBpGONkRaflsiC2ZlegveODW7VH9LKHC2fCywn8Qd6nRJ86O%2FAvUHOuAw%2BDpE4hdJFqQx8TyVjG70DaAfOGvzUBDimlw5ezeMCwMyB%2Fsjtss2Wk3iEeHL%2FvmXLuRxCgkEoBxIoLcLBRg%2BSzx%2FBaRDo%2BGUK5wX4cV2siUA6I5%2BZ8nkqyvvia2D7f6ovJ5gJMIOJmcMGOqUBKsHES5zAMYYJAOdvgsJK1A5ktAcaEzOU1PWx64xa9rnQ%2ByJE9lRcAPnWJ6IIjElqo%2BgE4VNQnWrlI611ugHVd%2B4GHGLETfSnyqvNwJeVMKG27EM8v2KZdpegmVhaqR5HivOPvQUNt86OAiSu2jrA6UqP%2Fhkfqj9eOlRycUoAtxKl%2FMZwWCnokEFgMHr1c%2BYgrIL2ofG4QLCrGE6gf50PH3nw2M6K&X-Amz-Signature=2661ddaafef09fd2379e546a19518f3434d233c740b4818f3a2138ee23a000dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4GMIYF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDnz5mWQKfunZ7kMiOCkYuNZbw6Lf1O%2FSz1h80F1NJQTwIgArJBOYfvUhl8Vnv%2BKg2B%2FJw9hnaZB2j4sWGgq3PEPnMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOvzQO8ZUloBonjyWyrcA%2FLKGOMGw6zdvnzWb3B9uo96cWNZSq22Dd%2BdqQdZcZpoYjMi5Bl2MvvZpfgwg4clYh1wIoOLZz2ZRjRhSpXWHj7RFWsuG5se1Eces3kOcSN5pJLpOiUE3exeXq8ugRmieLJ4hjl82zdfSr%2BUoTTHLLqngdldqv9aexGrfp6JEwRFm5HEZCVNpRsoWaGV46Q9HtFZSZbzRkFWNZFux0soux4I4qbzSbYZZAvHTggwJLNUpByLtz%2FxoS0RtV6QF4KEoTw9Fi3ycuW%2Frg5c7x7o3NwbNX%2FizEZXHY1FCjquP%2FsWVfjiGNEGHmqX3dyjaPXV%2FlSBAEzYu%2FqVIQqH5V%2Bhm9QoYtGVGMBpNVCtYV%2BWanKpL%2F6Vhn7QMx4R9Apm4PIfTWIc96hkH4mZ5sWgME%2BnB9Q0%2F2c1AaSvokoNxxbFW5r4Cvr0JCxi0UGUPZvrWvcBpGONkRaflsiC2ZlegveODW7VH9LKHC2fCywn8Qd6nRJ86O%2FAvUHOuAw%2BDpE4hdJFqQx8TyVjG70DaAfOGvzUBDimlw5ezeMCwMyB%2Fsjtss2Wk3iEeHL%2FvmXLuRxCgkEoBxIoLcLBRg%2BSzx%2FBaRDo%2BGUK5wX4cV2siUA6I5%2BZ8nkqyvvia2D7f6ovJ5gJMIOJmcMGOqUBKsHES5zAMYYJAOdvgsJK1A5ktAcaEzOU1PWx64xa9rnQ%2ByJE9lRcAPnWJ6IIjElqo%2BgE4VNQnWrlI611ugHVd%2B4GHGLETfSnyqvNwJeVMKG27EM8v2KZdpegmVhaqR5HivOPvQUNt86OAiSu2jrA6UqP%2Fhkfqj9eOlRycUoAtxKl%2FMZwWCnokEFgMHr1c%2BYgrIL2ofG4QLCrGE6gf50PH3nw2M6K&X-Amz-Signature=b7eb392c535090cc83936b8ea6e3b289f1bb495f6754e99c9452a6418c931643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66O4ER3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDEbZdmGmwkBS9ZlBXGfQhqsdecWQ80H73UQTKYHj8zRgIgc853w0FjtcIwwnVc7yJFwGfXFb2ekCF0sTloAulnHLcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBqbOgm1eqf7wtcOhircA7LZXnc4wewuPNiT5m%2Baiqag2vVDpgbW2g2BVmq0EbrZoowxc2vv%2BekcDenqIDn%2BBk3KE8UY%2FVBIcttZRJphRMDFp91w8mvm9PCX0uYrUkAAeC9lNEY7YGqIHHplzh2TuGR6OXEVtbbRJ4NtZeF9QqZa7sGf0EzsQ8VOCS4w9GWOSIAAlrfK7pFezmXNY5lxA6%2Fjc3E0NEpML8yovsvrg3szmVg6HKyJCod9jv0wv4E4H0520fnyDHKDmCQkUBn%2FzAh6PTKtyCTKciT1UwbjZzze9uUnXA2e1Ep4eB3SpzKT7SynTYzeXevwZZ7Z2JBqFwBsMCRYILB8ORjlsH1D4CgG8Sv2q0w2qj20sqsPx7PhmsBFSblhlg2loXOWx4iVGbXT17GU3904UbRR56koIZpVDu1OUrpx5RTzeUC47rULxZF2GAz0jCo0%2FyGDLWbrWjljEE5VWakAIfZwo03h5VmMleRCRNiz%2BzXC8a%2Bifk%2FAZaUIxh%2FL9tpamtI6VSlHgGiZzTbMR7JQh3SvNBtVeHdumz0c3V2D5HgbMmUTrIRCEByy1LtKOL%2B5Ztc6XpA2vJ5NOeDDnFMHxcXSCBkrW%2FWimcaF%2FrRXEzdOxgB9Tcp3nYlUBvtQrvNVGxovMOqImcMGOqUBncbkloL8PXNFV54xZPXCGLKj6OC8qlyslWMomD8mnCOhvnPdnpjTTDa1E23wuwBLs5G%2BvxIeQ0wmgrb1K0C%2FhVzy5az6Q6njJnehmnyWs0ucRuQwElAYBybGUV5o54GYXT5JrtY3IzPMCtGe%2FCX%2FGZEuxMldWEiYKKiJiaK2Bt%2B9nrRLNbgWWiLQjCIQKS32zP%2FXlW8HbpJlOIIEhZ%2FSJE%2FMszXh&X-Amz-Signature=4dd41d061fb4a818bf1e21a82bb622b8f5e63cf21ee573cc37f51c66628bd5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV63GZQZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDYsuz6%2BxOIiC%2FMT83oqPixJXGebCrco6d0uaCTv7Gg2AIhAKqXorga3YrHHt%2B4kXJentLPl%2BSlun98mRYOa6XOqQPrKv8DCBIQABoMNjM3NDIzMTgzODA1IgwQQyWB8czkb4bJlT0q3AP88p%2F3uX7MG4VzGEKelx6nz8uZVaC0vINbL2RNqmRBAKzwJzcQdmu47LH7Wb9QhYoKkZAW2nuxgoZxCShErXRoUto2O%2FEHVz7S56y5ZotWXGbut8V6xAszmk4e%2F4Xtwgxpq5erQ2xyXzZH1AusYOUb%2BL7dyMnRI8i37VGVDUnQ0PxurX6CasTBX9SlZB2mksn%2BnWblN11AcATHVvsrH84QRSuuOOIMS310YWAlKrU9Pq5UkqiGUhguhi7wfaRSm9jCf%2FYgHJzn9zA4qZN0IBmh1CUKT1os3M1pnSO54LT5EqGZJBXh23eIKWZ%2FeylbC26FGD9IXXjPiQEW3mg5wbVFUxHEXoEf3CmOYHEM4y9yRTZd%2BSfnpbHaSBMPvQDDAHQ1A%2FuI%2Ffc4BFyXafwLYKtN2iPJsaKOpRMLk8a4QHuDnj5yZf9bqtSswQU%2BWdgOBoPcbFwHLkPfY9id1yA6W3wRrwIVZFDOFXgQTJ28aJKm%2BbRGULfJTVTXBHGtjsw71Qs3CLPxo92ur5cNS1RnoOJ1IcL4oGdAPOb3kVAi039mgiC1Dgpa9VlTR0ArfQzJtXD5b1aiFNXT8J%2FE3q7AL4jnAhhd1jFfXkLGcArGMDAm7kXz%2BwtIor7%2BEVuvUjCtiJnDBjqkAaYq5hEbTPGJTv5xQ9UQDwXnkzA6iBQ7MFRcKXnvj6tUJSMS7fX5lr5ctVDx96wWYn%2Be36f1nuBBbS79loTc3srXj%2BTR85Ccm8EfOG1KWLBPx1Lh1lsU4wB%2BI%2B4imXTPM5e1P%2BvQKD%2FCPy4v2ycZszr85CKrDI%2BSi6kwnJsmCAW7Q%2FjLgUaA1dKMUXwPugItkUzgbu0GsDUe0VrP%2BVd0ODwIasFB&X-Amz-Signature=dfee547fba7be6dc1730f5fea0f0ccff31f40883b34eea4a42bf8792acad9d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4GMIYF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDnz5mWQKfunZ7kMiOCkYuNZbw6Lf1O%2FSz1h80F1NJQTwIgArJBOYfvUhl8Vnv%2BKg2B%2FJw9hnaZB2j4sWGgq3PEPnMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOvzQO8ZUloBonjyWyrcA%2FLKGOMGw6zdvnzWb3B9uo96cWNZSq22Dd%2BdqQdZcZpoYjMi5Bl2MvvZpfgwg4clYh1wIoOLZz2ZRjRhSpXWHj7RFWsuG5se1Eces3kOcSN5pJLpOiUE3exeXq8ugRmieLJ4hjl82zdfSr%2BUoTTHLLqngdldqv9aexGrfp6JEwRFm5HEZCVNpRsoWaGV46Q9HtFZSZbzRkFWNZFux0soux4I4qbzSbYZZAvHTggwJLNUpByLtz%2FxoS0RtV6QF4KEoTw9Fi3ycuW%2Frg5c7x7o3NwbNX%2FizEZXHY1FCjquP%2FsWVfjiGNEGHmqX3dyjaPXV%2FlSBAEzYu%2FqVIQqH5V%2Bhm9QoYtGVGMBpNVCtYV%2BWanKpL%2F6Vhn7QMx4R9Apm4PIfTWIc96hkH4mZ5sWgME%2BnB9Q0%2F2c1AaSvokoNxxbFW5r4Cvr0JCxi0UGUPZvrWvcBpGONkRaflsiC2ZlegveODW7VH9LKHC2fCywn8Qd6nRJ86O%2FAvUHOuAw%2BDpE4hdJFqQx8TyVjG70DaAfOGvzUBDimlw5ezeMCwMyB%2Fsjtss2Wk3iEeHL%2FvmXLuRxCgkEoBxIoLcLBRg%2BSzx%2FBaRDo%2BGUK5wX4cV2siUA6I5%2BZ8nkqyvvia2D7f6ovJ5gJMIOJmcMGOqUBKsHES5zAMYYJAOdvgsJK1A5ktAcaEzOU1PWx64xa9rnQ%2ByJE9lRcAPnWJ6IIjElqo%2BgE4VNQnWrlI611ugHVd%2B4GHGLETfSnyqvNwJeVMKG27EM8v2KZdpegmVhaqR5HivOPvQUNt86OAiSu2jrA6UqP%2Fhkfqj9eOlRycUoAtxKl%2FMZwWCnokEFgMHr1c%2BYgrIL2ofG4QLCrGE6gf50PH3nw2M6K&X-Amz-Signature=3eafc13ca960e1a7469072b017317a43518b0d27fa6a27e64ea6d54858a8ab0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
