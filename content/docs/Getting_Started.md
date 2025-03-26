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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKABY2FW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjrtoi5arNThoM3RQLV89KkTM2HhNb2TblSJzVXiHv0AiEAu0QxrlsyMSBjpQ37wgbyJ8k15rwgd7R28atALisJOW4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNBhbuzve6KqZI5dbyrcAwzWri1hGCr7iY0YjGq3kkk0Zv4TUDfuwv5PDEU3zEdOFzJtuSjGx9C5tKTEZYL4n2RzatOC4s7wUwML7%2FWvO3D2PCXpRNpAmlGalYvMcwxLzoiahuLhoqX%2FMAB228P00Z%2BjoTNs%2Fs9gI2bmp6jtog6l%2FGUtoOW3%2BdVj%2FEU7YFTIAbkqMIOD7frbmHsHUsgpbgCP0pyTgdNZsHRqGPtX63xWiM%2Fx7jxeu4e960Dw5IIBqy5khJErU6sd7hAoVXtjYFIfdKAD1Qw4dyV4YmhJY%2BcgIQrYgFt1njQDgeXNlywivez2lJ1t0KHesW%2BL82g8fN1PnBlnFF3ImRHGVantpjMgo%2B4DWJYobEHIzG85LJqrwYwh%2FiBwTA59kToZqzYgeyUlS8491WwjvH02K3G0XHV4L6CYKBoMfQ4nQIcrjnB%2BniZuMEW72I187eMJdJp3%2FHoTnScEuYSz4jGKEfN%2BoqDKogBkqOU5gApvtp4z9M%2BLU5OWhZT2795NpX%2BjuaYM1UDHGIe2aMx7ij%2BH3YzpqKRZ1f9Q2H7jm6W8O%2FmhoSUZVQ7JKy%2FI7ytXTMGdxyFrq4JgwhweFeO0S8OfCmBw80q8%2BM5VzB1OO%2Fq0reYWwTHM6u2iuyaPFr8sfrF7MJSVkb8GOqUBlitAcTuXdOGYpx9lYZHGX5YsxiyBc47oh2PZ2dbVz12xinwo1tf2gvgIeOz1V5%2BysY3VrV4XjMfMh8EbsPd%2B8uCy%2FIIX1QDEDMJb9IJi%2BCPjUpSFKVroBXi7RLNno53qDQoNkhOeH6GtigsMl2ONQWjnWA2%2Bz2GfURmROU%2BcG6CppTfyPq1Hz9oC0r5jqp6tn4XevXWlaLMAbTVR3ULe2oVISZqF&X-Amz-Signature=011b3b688ca4ea9b4155103537d7106138215cce09b7219ac17f28106a56e677&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKABY2FW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjrtoi5arNThoM3RQLV89KkTM2HhNb2TblSJzVXiHv0AiEAu0QxrlsyMSBjpQ37wgbyJ8k15rwgd7R28atALisJOW4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNBhbuzve6KqZI5dbyrcAwzWri1hGCr7iY0YjGq3kkk0Zv4TUDfuwv5PDEU3zEdOFzJtuSjGx9C5tKTEZYL4n2RzatOC4s7wUwML7%2FWvO3D2PCXpRNpAmlGalYvMcwxLzoiahuLhoqX%2FMAB228P00Z%2BjoTNs%2Fs9gI2bmp6jtog6l%2FGUtoOW3%2BdVj%2FEU7YFTIAbkqMIOD7frbmHsHUsgpbgCP0pyTgdNZsHRqGPtX63xWiM%2Fx7jxeu4e960Dw5IIBqy5khJErU6sd7hAoVXtjYFIfdKAD1Qw4dyV4YmhJY%2BcgIQrYgFt1njQDgeXNlywivez2lJ1t0KHesW%2BL82g8fN1PnBlnFF3ImRHGVantpjMgo%2B4DWJYobEHIzG85LJqrwYwh%2FiBwTA59kToZqzYgeyUlS8491WwjvH02K3G0XHV4L6CYKBoMfQ4nQIcrjnB%2BniZuMEW72I187eMJdJp3%2FHoTnScEuYSz4jGKEfN%2BoqDKogBkqOU5gApvtp4z9M%2BLU5OWhZT2795NpX%2BjuaYM1UDHGIe2aMx7ij%2BH3YzpqKRZ1f9Q2H7jm6W8O%2FmhoSUZVQ7JKy%2FI7ytXTMGdxyFrq4JgwhweFeO0S8OfCmBw80q8%2BM5VzB1OO%2Fq0reYWwTHM6u2iuyaPFr8sfrF7MJSVkb8GOqUBlitAcTuXdOGYpx9lYZHGX5YsxiyBc47oh2PZ2dbVz12xinwo1tf2gvgIeOz1V5%2BysY3VrV4XjMfMh8EbsPd%2B8uCy%2FIIX1QDEDMJb9IJi%2BCPjUpSFKVroBXi7RLNno53qDQoNkhOeH6GtigsMl2ONQWjnWA2%2Bz2GfURmROU%2BcG6CppTfyPq1Hz9oC0r5jqp6tn4XevXWlaLMAbTVR3ULe2oVISZqF&X-Amz-Signature=84d8478bac883f2a101e33934b4e2380cb5143a51276fac242335f8541085d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOXLUBJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHSqUE3FTRVytoGaXbG9zj%2B5yPnqTkx10iJPZsqc2AiEA29qzUFTzTSASLi2%2FyypubbqLi0Im1WfPPhqPW56UGvoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP1eZScwWWAEz2EYDSrcA6ppfKS7tPxTNa6E0jxkLlVYkRDR3hyO4ET5v6L5%2F5n784CEe9NDx8mUOGYKsEVrgMp86pcIP348%2FIyJqP%2FDFdBJYbrOlWeOUO%2FuimtN2VqU1YP%2BEYs0xXS8mNK1RpQT4DbTT1Ph65GbBd0IsCqJTGMmXi3aqNh%2Bj6l2tQZNfWQB2PaGZtQ24TVqy7n0HA6ANKcFGnuiANpCooV%2FHnynxyo1Cr%2FSNcMy4Hd7H6nUGBgHH7iwltPScqvtzMLEB9pwx4OGw6qxQp98tbckCnCwFyTV2rRm9MklCVHSFwL9oMdbO13xMM7VA3ZK8BWVotXOaLkpCMSKIxKsl3nn6%2FcJMw7R8KSxvUyGVKeNWZJvdHL7ua78LLnhrgDkJ%2FIyU15Thj8vxUDMzVK%2FOgZbfrbylMAf0NmLJI91mANNe5m4jCa2FR0%2FQjv%2FrBK11ttwQTYUhCmcFZOmstSwzHHh8INbW%2FWFkp0aUdJArhPEmcpauzi7bogk5YTsu1Ys3Z6fBYIznHIgXvbQRfTh3BHlH%2BdN%2B4GfSaclyMxeF6Ncupvq3uPsT29AWzgRkNoQMvdwm15KSYDMB0APvmYAT%2FJPPhomNyAJneb5rVx%2FI%2B2efuKDbI07o9ZNN1LMCdr1%2BCveMJiVkb8GOqUBiu9UyiVCtxCavOIvdb0mf94IqnC5JuQeOBRy0RhnTD4PDY0nDZb1mLMLsgq67fmp%2Beg%2BbSqYE4hhw7OMTE1LO7bxTEKVSo6v0DagHD2pOqDf3RpYIHrYJ53advmxXftROhZXvFTpJOORS5pG3EFuW%2BtPsZeM5aZ93pu4FyRTp0cossxZcq3w%2F99rPIUpCMq0gargdLjtd4g6fhKNEKrKDMPtdSfC&X-Amz-Signature=d8ab00df7344c2fc14f90c5c99c2af32e84b1bf9b8eb68ff9b66891b26420551&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4REPAJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3zgUHH7NLdqb5MPn%2F6Z%2B1lJw0p0cBJrfDzfcZK%2BugYwIhALkt3BGROFqMQlU2tUATcv3VLBn2%2F4cDsk%2FKzRUCQ4WNKv8DCDQQABoMNjM3NDIzMTgzODA1IgwtNf6EfzsldPgjkK0q3ANEU%2BfQA2dP%2BjPQyCNPN1wMWLSJVOcyeqguTUznvrcizOTIdpI4xmArJUQACSQkLKIzeZr4HXdzL%2BVWPEBZ9pvsW7k55Gwh2rpJbiNgtTC4rrmEEzjJeKgQ%2BgGYD2Jt2mqXDXyS3jrejlSgQiytN3kN1PKO5z33zzzNRRhpi38RVdLDWqahCVGFxULnYHUREE1J2uSlwFwrQsCqYn%2BKLE93KB7Bq0TOiEjV1XeHFeu6oIxU7jTmK9aEeAOJ6u0vkbWWSeuexEfqfZwcPrxK4PMbLRKTZ99L3u1ix4IXR8D%2B2a2QEmlwQbZm2iHAcNLyS%2B4gA3PNNLn8opag%2FyQr6wJt2MF00j8SnRTEHPfAyeLxTjQxZtnb25qC%2BxGDOO6jk52cOkOhGSzn8zbbThyFP1Y9CptI6oxCO%2FBIK0blD3cGQ2McaarCS9yfUwYpfJZrP3J5imIMknTTp7WCEs1xphINZscjjbwDWp1dTFZmKRF9xM8eMjfLs3n4mEdO3BiTluVnZYt0zCwHUor0JQ%2B%2BMJdza6K9SDQ3bVcXx3KBGyB8Nwjy%2Fciyh22tOcgqTk4zivCVhkOCiUWZctkUrDRdbLXvYWUpkvii1%2BwFAZbynyohvX6SRc8DT%2BkBCBAdMDCTlZG%2FBjqkAW2u%2F%2Bskdvy%2Fp94%2BBvxpN%2BPny3VRISWJAQD7mosHSfWL%2BQl3dL8vyFZ7XIZXy6n8XLy3TpSsEIMv1ms3vkl1cL6STDFfOKLalKWXbAj%2B4RfJ24kbSBvYiP54oUxizftoQpdqrckuFLdnzGhtURFO5dJpxcmJI%2BpsEG1O7vioznzTRaW6fX%2FNPiOCEk1krhyOyx9WmDcPiZtU7TZWQyJIqN48XSxD&X-Amz-Signature=e9e376350a79f50c776bbe081527058c6954b0c8b3c54f53bd12cc4904cb11ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKABY2FW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjrtoi5arNThoM3RQLV89KkTM2HhNb2TblSJzVXiHv0AiEAu0QxrlsyMSBjpQ37wgbyJ8k15rwgd7R28atALisJOW4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNBhbuzve6KqZI5dbyrcAwzWri1hGCr7iY0YjGq3kkk0Zv4TUDfuwv5PDEU3zEdOFzJtuSjGx9C5tKTEZYL4n2RzatOC4s7wUwML7%2FWvO3D2PCXpRNpAmlGalYvMcwxLzoiahuLhoqX%2FMAB228P00Z%2BjoTNs%2Fs9gI2bmp6jtog6l%2FGUtoOW3%2BdVj%2FEU7YFTIAbkqMIOD7frbmHsHUsgpbgCP0pyTgdNZsHRqGPtX63xWiM%2Fx7jxeu4e960Dw5IIBqy5khJErU6sd7hAoVXtjYFIfdKAD1Qw4dyV4YmhJY%2BcgIQrYgFt1njQDgeXNlywivez2lJ1t0KHesW%2BL82g8fN1PnBlnFF3ImRHGVantpjMgo%2B4DWJYobEHIzG85LJqrwYwh%2FiBwTA59kToZqzYgeyUlS8491WwjvH02K3G0XHV4L6CYKBoMfQ4nQIcrjnB%2BniZuMEW72I187eMJdJp3%2FHoTnScEuYSz4jGKEfN%2BoqDKogBkqOU5gApvtp4z9M%2BLU5OWhZT2795NpX%2BjuaYM1UDHGIe2aMx7ij%2BH3YzpqKRZ1f9Q2H7jm6W8O%2FmhoSUZVQ7JKy%2FI7ytXTMGdxyFrq4JgwhweFeO0S8OfCmBw80q8%2BM5VzB1OO%2Fq0reYWwTHM6u2iuyaPFr8sfrF7MJSVkb8GOqUBlitAcTuXdOGYpx9lYZHGX5YsxiyBc47oh2PZ2dbVz12xinwo1tf2gvgIeOz1V5%2BysY3VrV4XjMfMh8EbsPd%2B8uCy%2FIIX1QDEDMJb9IJi%2BCPjUpSFKVroBXi7RLNno53qDQoNkhOeH6GtigsMl2ONQWjnWA2%2Bz2GfURmROU%2BcG6CppTfyPq1Hz9oC0r5jqp6tn4XevXWlaLMAbTVR3ULe2oVISZqF&X-Amz-Signature=8bbfcebe56bc86c102d1f029e654ffd742854a16e8a865183ee7a1147cd129db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
