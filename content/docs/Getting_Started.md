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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT5VNEK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyuY6h%2B9dmio%2FQX3Dzd%2FHK50UB8s0mER%2BG8Y6Ah9M8qAiEA%2BaGL6OZlVmgtHYDHlMRnVOQtFsoQ0BAGZ5t1Ky52RFgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYGGb7AutifLmLY5ircAy81%2BQZnqFXSxMSzJibHex5GTwjMpzHuC0ovuludYQyIDTV9WioCJZXPMcOzb65CwcDAfxvqfUBDRzZk9Z5QTrrpMD3ImcXUHwJzLYSiAD%2B47z0Eqz3p2hLS4RnJvE%2BCmsJd2LwNkiy1OWOUYjNPNFsZ8uXhktuVSycBOg0O7OY18AQplluyEzn77%2Brm98Ie%2B7ZwIdSRBrxvSmAo34O1JFV%2Fe0ASk1KeA1LhFuHSoEVozWUEI7yX6zyf4wg8X%2Fcbx2r%2BPnqUPiThhUu2LFN9yhBN54rg3o6Qt9WGxwYPsEg2%2F2o5LE2u4ouLZbcppT1Eog2SyZtF46jHCf3yQdtbJN8KDxNpIbJXzokwuXVeK%2FcWfcX1zDzdf4w8g3L9e75jRG3AXM6Z7OqMUt%2FnZy%2FuX013mtM4E3h6N23QGWDxdMh14Dr%2FSUB3UC7%2BwjWiy3fV2d1BPKncvKZIHjevoPu0CEptZo5nNKZ93Aq%2Bg8Q2wNCmv5HQz%2FYaGomMFc3H0Yd3lfbofYFwpFXuTTgigDDgxnRWqDs8x%2BdONOTiA2obaBE%2FfQKvRlZlc5hEnDJk%2F8eu3h1qt6B%2Byg2D89k8xf6FQ2wFxL6I4UOE3Z6El0tls2fHTL6aDMM0jdzWWdU4MNzK3L0GOqUB7LCGUus66g1Rdl2o9QqLgWAzEubDu8oqReqXpa77IpFiBWu2PY1ckCoV41xJUHO6VPuMpiPJyVa8SSpVED%2FSK2p0sQDX9aikv%2F4HHf7IhdCQp0bReZMXFzk2wPjoWN3391Mm9C1PGt1IVwPTaOYmgmiOMsr0UMk9rGy4kpBbEPpGiuO0xf5A5OrVPtIkBoQadnckfW4i5bNCsMeuY4nD9vPkW%2FUU&X-Amz-Signature=d7cf5e692dda0834f7e49e77434bbaf224ad0bdbeb210e4578373dffc7141ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT5VNEK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyuY6h%2B9dmio%2FQX3Dzd%2FHK50UB8s0mER%2BG8Y6Ah9M8qAiEA%2BaGL6OZlVmgtHYDHlMRnVOQtFsoQ0BAGZ5t1Ky52RFgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYGGb7AutifLmLY5ircAy81%2BQZnqFXSxMSzJibHex5GTwjMpzHuC0ovuludYQyIDTV9WioCJZXPMcOzb65CwcDAfxvqfUBDRzZk9Z5QTrrpMD3ImcXUHwJzLYSiAD%2B47z0Eqz3p2hLS4RnJvE%2BCmsJd2LwNkiy1OWOUYjNPNFsZ8uXhktuVSycBOg0O7OY18AQplluyEzn77%2Brm98Ie%2B7ZwIdSRBrxvSmAo34O1JFV%2Fe0ASk1KeA1LhFuHSoEVozWUEI7yX6zyf4wg8X%2Fcbx2r%2BPnqUPiThhUu2LFN9yhBN54rg3o6Qt9WGxwYPsEg2%2F2o5LE2u4ouLZbcppT1Eog2SyZtF46jHCf3yQdtbJN8KDxNpIbJXzokwuXVeK%2FcWfcX1zDzdf4w8g3L9e75jRG3AXM6Z7OqMUt%2FnZy%2FuX013mtM4E3h6N23QGWDxdMh14Dr%2FSUB3UC7%2BwjWiy3fV2d1BPKncvKZIHjevoPu0CEptZo5nNKZ93Aq%2Bg8Q2wNCmv5HQz%2FYaGomMFc3H0Yd3lfbofYFwpFXuTTgigDDgxnRWqDs8x%2BdONOTiA2obaBE%2FfQKvRlZlc5hEnDJk%2F8eu3h1qt6B%2Byg2D89k8xf6FQ2wFxL6I4UOE3Z6El0tls2fHTL6aDMM0jdzWWdU4MNzK3L0GOqUB7LCGUus66g1Rdl2o9QqLgWAzEubDu8oqReqXpa77IpFiBWu2PY1ckCoV41xJUHO6VPuMpiPJyVa8SSpVED%2FSK2p0sQDX9aikv%2F4HHf7IhdCQp0bReZMXFzk2wPjoWN3391Mm9C1PGt1IVwPTaOYmgmiOMsr0UMk9rGy4kpBbEPpGiuO0xf5A5OrVPtIkBoQadnckfW4i5bNCsMeuY4nD9vPkW%2FUU&X-Amz-Signature=56e77b5ff93822319508c16fbd9fcf655903cc273a8ab2fcc088e995c3cccb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICMD7LA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAJXzCJFZOYMQ6qaws5BpxRFslFY5xdgU4wGj6A38xgIgG2TqDsxlOFZs6wOBTOupa224J6sG7URLJzlZthLZlEMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTe3ZUUX3L7GW6OircA8peXNCeOhf6zYBre7AoYcU7ehxQIuLK2xMeIciIKM%2FdvHUIRMTSkZGyBJY4fFeNWZ0mj2cqkoy3NUsWopyHGAmZsAtMr0zomhGnucRTiLrJBM4QLAeNx6xDhc4EbrdQSETKKOsuub34upK3uWmyWZ8UVAT%2BiDyGnDhWistSde0jrx0Sn1v9zNgL0fErHmS%2BU8bLtadx4ILZ7LGsUagd%2B%2BEIA7WSxA8ffoCQ62s7AOs4xRxZer5HDKnXwDGWsZ1dihrSVY1unQWNPSaBgk0z6OwwNqIscdjEQOUajScFV2Izb6o3qJaDFU%2BUINIt%2FakKVMVyQs98TETEJm4qVPi%2BuFTBfsJ5RRs5F4eJMo39yJ85%2BKLh6oR9llAdxt5NebBGzfZu%2FLTT96SrxBMBRsOpsKTwv5M9D0jnmVaqhs7H%2FfSp%2BJacwafxRHQ0SQdOQJBzRCtQ8umLUJkZih8dPJKijQaH%2BncGmHktFOEo%2BSaos7LWFrtQ2qYmimfqETPW%2B3UkMJWgR3NBQEHN2AqiHrLx1VZg%2FgwPPsNVXhC7jGMqekguY0JlH6L4NC2wgRC0RyuklpuHc0X3D0zxz3Qe2L362OWVE0r9PrKFOqayKoyssbwR1x4Oj4SWznBsvlQWMLDL3L0GOqUBIcN%2FNLGyDRKA2tBtJDzmcgP4XEJb4CNmKDf14%2FaJwPYtZKB3GmAwctYo%2BPt5wW9%2FganhegRT7p7C%2BmQ74VxNoLwuYw7sSVSM6ksFSPsvmtvaCZ5yk3iXJcIDg3CXZ2Ml3pwYHRYaG3v7o9Q4dk7JKbF6tBiL4jBxoLI8NnGRc%2BHg9jih6sP%2F9iGPjMfJuOMBB64BzCjYKbTXTTIiluORbqAn4PMu&X-Amz-Signature=65f41031ceb8cbd3d911c2807f858f52195d75a81c7091fc81a27c8ee79addd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QJY7VF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOxNeNu%2BfxHZxhU3EzA%2Fwsc0FFCDN0EfopKW1DJFbkvAiEAypipdpCHAfZ6EdeURubZA1TF%2FnGHHxcBDCS33%2FIO6FIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtWGrqSrI8TneiZlyrcA6ubFYpW5G1ryRiu6sMlPwhv1sld%2F7s5pQTR5GK8TA68EESCj8L5I00HCXZOYbIQypLv60wxLi%2F4H0wmPtDKjD1rbqCztiLuBjKfSMrB0X8wjp73OUEUY6aIOXY31UHr%2Bta9OqLs84ErYEehBwXJV5KjO6n7v24Pl4H1Lph1%2BWS8hirs2BI6h%2F5WVE3n11Hihsa6BeN2S9b%2B5k%2FSPmAbtWmg%2BoczMNosUzcUBWUvirpLwZdfnaf5XSyLLyfGuti9y1m6Lu0s4Ku0hqKA7CrZbjUC4s%2BXB9a%2FVBkfQC5fS2d6SXas6miI6h518tlt3SZNWagVwQ0ivFkeGovQ6zx1Y4YC49HcN94iagHT5aaVCt6CQJP%2BCFhojTlkXT7PtiVnGKeXEAKEqSNKQbkhsxlvdrVJFZaXgWlU8BMgZna74uGQKo9CndLVA9ppqwp9Ngi%2BD2k%2FNrhTDR1wK0NlXTS0mg2LRZU6vE3Jmx0KOlg1isgSEWNyuLq2IbZU8eZnPABYkd1ucQwOkfIXhJ4AeQlByvYrqIoKyAE4XkbUjR7iSyMhkYoTchHminHilVlt05ggei3dozBt7wvrmL8sDmwZaLCDs2D7bpLFfF2mf1%2FRFGd%2BWhgZFHAfMeFum9%2FOMObK3L0GOqUBj9gamkQNL0c1F4ajpLj531TzGa4OzZc6refqSoRhCkI%2B5mm2iwTaAsLCFsBOCWJGPA0Ca4cCKMj6g6kHu4JXHi3nXYN0S7JfYDkfMv3FH4g28LV5Pc%2B4Jw61R6okPD%2BbVeHCIqlWywJXLdCZ1IYZ3iw%2FpYZF4HuVV0Uqm5cWesGgHIOdQ6VgCCGYSuMNPD31tYJuY3nmwIdaGGY6xSkBUv2igTwY&X-Amz-Signature=f383a7a67c00d22905d9ce8ffbf98be4191755060e8aeb8a4cfdd07e58600d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT5VNEK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyuY6h%2B9dmio%2FQX3Dzd%2FHK50UB8s0mER%2BG8Y6Ah9M8qAiEA%2BaGL6OZlVmgtHYDHlMRnVOQtFsoQ0BAGZ5t1Ky52RFgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYGGb7AutifLmLY5ircAy81%2BQZnqFXSxMSzJibHex5GTwjMpzHuC0ovuludYQyIDTV9WioCJZXPMcOzb65CwcDAfxvqfUBDRzZk9Z5QTrrpMD3ImcXUHwJzLYSiAD%2B47z0Eqz3p2hLS4RnJvE%2BCmsJd2LwNkiy1OWOUYjNPNFsZ8uXhktuVSycBOg0O7OY18AQplluyEzn77%2Brm98Ie%2B7ZwIdSRBrxvSmAo34O1JFV%2Fe0ASk1KeA1LhFuHSoEVozWUEI7yX6zyf4wg8X%2Fcbx2r%2BPnqUPiThhUu2LFN9yhBN54rg3o6Qt9WGxwYPsEg2%2F2o5LE2u4ouLZbcppT1Eog2SyZtF46jHCf3yQdtbJN8KDxNpIbJXzokwuXVeK%2FcWfcX1zDzdf4w8g3L9e75jRG3AXM6Z7OqMUt%2FnZy%2FuX013mtM4E3h6N23QGWDxdMh14Dr%2FSUB3UC7%2BwjWiy3fV2d1BPKncvKZIHjevoPu0CEptZo5nNKZ93Aq%2Bg8Q2wNCmv5HQz%2FYaGomMFc3H0Yd3lfbofYFwpFXuTTgigDDgxnRWqDs8x%2BdONOTiA2obaBE%2FfQKvRlZlc5hEnDJk%2F8eu3h1qt6B%2Byg2D89k8xf6FQ2wFxL6I4UOE3Z6El0tls2fHTL6aDMM0jdzWWdU4MNzK3L0GOqUB7LCGUus66g1Rdl2o9QqLgWAzEubDu8oqReqXpa77IpFiBWu2PY1ckCoV41xJUHO6VPuMpiPJyVa8SSpVED%2FSK2p0sQDX9aikv%2F4HHf7IhdCQp0bReZMXFzk2wPjoWN3391Mm9C1PGt1IVwPTaOYmgmiOMsr0UMk9rGy4kpBbEPpGiuO0xf5A5OrVPtIkBoQadnckfW4i5bNCsMeuY4nD9vPkW%2FUU&X-Amz-Signature=d562e53459518169e0e6b909d3127be932771fd07630da74ff83c70b40b2b375&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
