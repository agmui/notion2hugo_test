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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUJIWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrCcVlPv7sBbddeOJW%2BAu4kzI8Efaoc2eF0Hz0Jb%2FDqAiEAvPPwcYh75WFgQDpI2wf54nD6f4iNACXugYg6DZaO7hEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrxeU4K1zS%2BpgEubircA0m5c1ot2v246SsDr8FCDKFxUNvYn%2BMmP0HOaysPporIAw1RWDBRKxJ6Wh54vLstM9RTSEsdmhxsrMNHarJY1ajWnIUZ0A8dtRwRptp2kKSVo5Zaj%2BvDNTv%2Fq1EP96gtReNWq9WkJPuQFbXSEyp%2B3B7umZnb8MdcD8%2FKhtZFgRoOdKmQNRUumwuVhzLmZdCpwgY9g%2F8x1fnFiYPNQH%2BOfCP0KEIY3541iJm1xSRo%2Fpbvrq%2B5Jj%2B254JG9x97e6PY3oGEY0gSa3Pj%2FNJqAbceJb%2B0ol7%2B2Fn3WbmHOKvQkqsprrejzxoQepnkA2gv%2FHM7%2BAtUubEo7gF4z87kgjLTNr%2F4tnfC%2FD4giM4zzbSWrWKfulvwCrMXL44s2gq6OkUhuA7ERQRDpGrNzdRrVCpjtiUrvMsVgwli%2FabJy%2F7OXMbmpRW17mzLfEWdoHlXHg%2BD52CAYG3l5hsF2aK57WCc4fSwh9xelzqnNWdysRWgCrO3hQEMClFfyIiDyf%2FdUGPnPHk0VTajMv5Vkmz%2FY6CDjkE%2BXZGOBRkOeXR%2FOz5CPOU9SK9TbFCSXofO2S5ikgTZEwJjOo0yruujQRL1iIym%2FwsQe1cL0yJJp%2BKEancsS0Ol2hAGigUu6nvDOWMeMO7Kgb8GOqUBob%2BUBlNVdT%2FFOg0gPGlZa6GQpmGWgxezbzky3bQVZfblLhsdHhxTVUi%2FRKNDuVvi2x1WSm4o1XCCWCSzR2H0HdvscmoWV2wMpMw4MEGWyg%2B9uqM5PKhaur9G1AgF9NPbKoK8DE2AUPuOLR%2Fw9V6H2ZMhjS7pRnyMdZmTH0hT51%2B9NHE8NwWg4k%2FbS%2BFcMNlP6R1oARYHoB4PxsgUESWs4s1it5bc&X-Amz-Signature=c05372313afc6bd9b8ec87147ff000e01df8130ca4cc736e228fec5a6dc8fd01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUJIWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrCcVlPv7sBbddeOJW%2BAu4kzI8Efaoc2eF0Hz0Jb%2FDqAiEAvPPwcYh75WFgQDpI2wf54nD6f4iNACXugYg6DZaO7hEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrxeU4K1zS%2BpgEubircA0m5c1ot2v246SsDr8FCDKFxUNvYn%2BMmP0HOaysPporIAw1RWDBRKxJ6Wh54vLstM9RTSEsdmhxsrMNHarJY1ajWnIUZ0A8dtRwRptp2kKSVo5Zaj%2BvDNTv%2Fq1EP96gtReNWq9WkJPuQFbXSEyp%2B3B7umZnb8MdcD8%2FKhtZFgRoOdKmQNRUumwuVhzLmZdCpwgY9g%2F8x1fnFiYPNQH%2BOfCP0KEIY3541iJm1xSRo%2Fpbvrq%2B5Jj%2B254JG9x97e6PY3oGEY0gSa3Pj%2FNJqAbceJb%2B0ol7%2B2Fn3WbmHOKvQkqsprrejzxoQepnkA2gv%2FHM7%2BAtUubEo7gF4z87kgjLTNr%2F4tnfC%2FD4giM4zzbSWrWKfulvwCrMXL44s2gq6OkUhuA7ERQRDpGrNzdRrVCpjtiUrvMsVgwli%2FabJy%2F7OXMbmpRW17mzLfEWdoHlXHg%2BD52CAYG3l5hsF2aK57WCc4fSwh9xelzqnNWdysRWgCrO3hQEMClFfyIiDyf%2FdUGPnPHk0VTajMv5Vkmz%2FY6CDjkE%2BXZGOBRkOeXR%2FOz5CPOU9SK9TbFCSXofO2S5ikgTZEwJjOo0yruujQRL1iIym%2FwsQe1cL0yJJp%2BKEancsS0Ol2hAGigUu6nvDOWMeMO7Kgb8GOqUBob%2BUBlNVdT%2FFOg0gPGlZa6GQpmGWgxezbzky3bQVZfblLhsdHhxTVUi%2FRKNDuVvi2x1WSm4o1XCCWCSzR2H0HdvscmoWV2wMpMw4MEGWyg%2B9uqM5PKhaur9G1AgF9NPbKoK8DE2AUPuOLR%2Fw9V6H2ZMhjS7pRnyMdZmTH0hT51%2B9NHE8NwWg4k%2FbS%2BFcMNlP6R1oARYHoB4PxsgUESWs4s1it5bc&X-Amz-Signature=bd31d7c0d760a518311ae7ce3ea20fee0f9f61af8ea02c4ed0287a16191a08ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGO5GRH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL84CkSrl9IpHDNQZGkWwUFyKS1YwEQsBc0eSPEFq6%2FQIgckut53OUGAEyg9PW8hTmPA7fxbM1jBhk7D4f5QfgI%2BEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4XjGvti3WA07eFqSrcAwVC6hLc8h2UDqDO4ElM9xzI18nonmxSviocs3vH%2BOdXybz4G8WKbcPLaeZMWyZ7AOHinpulkb35sOzO8vfWwaRGmp31yH13GX6Jp%2BOb8nGhi5%2Bi4CYyteSl1oVdSyFmvTu%2FGqfqkXTNryw0odXQ7fKvOPcH3CgaEjvy2jDn5h5shrG2TxurkkJKgs4urU6W7ruuxr2xdu5t%2FXfl6mnkuBpyITUeWNI9%2FiSyMTpkD8GF63ILCSrAAYQXKzObV3f33t3oRCkKHQGyUWc9XWkHEFjCCcYVfE296gBVJNyu7QFnkvVDg06IDSe561wQur1D0wpLSzQSm1RKNfHm3MjOrsEYjtno%2FX2qIJuVXIUu8LBp5hXPL9lRmaM7fzgUrQIv%2FwcB0gjDin667KlrYJJUXkCUqAM2u71Lxi9cZgzdeHgFK%2FTJO%2FKGGTbi1CTujSAbSJ%2B7zAnjxvztIMn4grPqTIrWb8lX2vKQfNhB0qcMJGwHDZScBrs0GbUx%2F2Hr1AJSV%2BiNAMa%2F2gk%2FrnUvwAdiUk6o364KcuJLN5kUVr56GN%2B8COJ3NvOfahYvj8sSz1M8c09Tke%2FIzp9bnEwb3%2BUhNoySajB%2FlC6vIBNtdmAPzuysFxdfgYBIrmi9Y8vJMNjLgb8GOqUB3PAem5p6FBYtRGjFKUyCfdJmcnaPjMfoGF0NqHeyBy%2FPtZhHb0CdJMl1Nj0TR1HAje0Jxs6TRLemyiTETEa46r2yU5ErjBQt57%2FKhBrYCE2QebIgPXdPCs838ecDz3VHRXuOWrWMMrMvvNGX9wgujNJQqq3enozpu2PfUnv7VkswLy2%2FolEcmV9tPfMA4yu6ch%2FZ%2B%2BnAWn9o5m5Fb%2BZr%2FM1ZT%2FyT&X-Amz-Signature=245c0fc3b9c69da785cc063fcae3287d266200561db67abcba72094a15dfcd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQUNUK5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVWkQn3ulVg62ZWF5Qn9PibR5qs5Ktx2Q9hJOfwRu5rAiEAwCkuHmnSl3nMTKHDyntE4lE4Ow2gaGsX8dQ1koL37JEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeuSoLUl2rJt%2FR5CCrcA%2BPGQ%2B%2Bzb6zZrcB4NMRjsnbNKy3TP8tPQY67PNSIQBRkqivN4tVSl47JXtmvlMWnxJ7BuXlzwJ4vxk0Jd8TUD6vdjbRAspi18l7Ad2tFiY97uI9y%2FtnXcFaEA%2BWkAoLP%2BvojwqJpa3%2BcagtJP6SB7SE3WNmbqb7qSzxUsXD5l1LJo6QUz8Gq7mtP4WcfFNCxXyQ%2BmsKaZcUJuEC%2Fk2L4slkocqhi4LpJaiaXyMViostWnEQ2aqv96BSn4dhcecOlyyZr9%2FBAuwCK8%2B2wmUxADAt6N%2BCTFKhmhN9GjSS%2FNJ%2BzShCm8LSyR15jAZ803pNMkLSF8EwEIDGlS1PPCvRcp%2Fjxw%2BHsa%2FgJ8ImMy41%2FlOBDzv7HwvEk5yOP3hx61pOHyGPHrGQk4g%2BbL3U2EO6mFXwygT4jxY7BLnOE8ocqgwCHJ2cOsZqMilp1tqEYhWcyltqrnpU6RYuAEgvXmixQyTOyTR9gQVgIPT4ai8lMSdd%2Bq9Vk8Tt59dg%2BiqSgYaJAopY6ASkjqBbBJFI1oaDT6u6IiXlvuWAh0c%2FLxL6i4o6jkD3bAsL5WB89IEllaH1mwTdDYrVF86CBuTC4c8ov5AKKGVQXsoMOA5PLPwdW00dgeNUWM%2FZ%2BdI8UCBzyMNvKgb8GOqUBiNiFw%2BxX90inLjZKI6c9eB3uMIl%2BzSVoLWDcRdCQMPGC4vjInMmywUYEYiY%2B7nVy43Tq7bD9JfnzK9XqMxynSpZfgM6oyR1qexC4iyO5QXfj4KMdhp%2BUQx6HoOY3eAzta1BrO54FZAchcNN8IL%2FHj9divHM6iqSHqToYvDC7ngge%2BcpQzcWtEonZTNWYw1%2BzdcVvQWttR86ASpDruQS8uB57ziq5&X-Amz-Signature=8f5c2895327b4942a72b1be65e3d21466b15e99223aa56e09181a47083cda509&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUJIWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrCcVlPv7sBbddeOJW%2BAu4kzI8Efaoc2eF0Hz0Jb%2FDqAiEAvPPwcYh75WFgQDpI2wf54nD6f4iNACXugYg6DZaO7hEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrxeU4K1zS%2BpgEubircA0m5c1ot2v246SsDr8FCDKFxUNvYn%2BMmP0HOaysPporIAw1RWDBRKxJ6Wh54vLstM9RTSEsdmhxsrMNHarJY1ajWnIUZ0A8dtRwRptp2kKSVo5Zaj%2BvDNTv%2Fq1EP96gtReNWq9WkJPuQFbXSEyp%2B3B7umZnb8MdcD8%2FKhtZFgRoOdKmQNRUumwuVhzLmZdCpwgY9g%2F8x1fnFiYPNQH%2BOfCP0KEIY3541iJm1xSRo%2Fpbvrq%2B5Jj%2B254JG9x97e6PY3oGEY0gSa3Pj%2FNJqAbceJb%2B0ol7%2B2Fn3WbmHOKvQkqsprrejzxoQepnkA2gv%2FHM7%2BAtUubEo7gF4z87kgjLTNr%2F4tnfC%2FD4giM4zzbSWrWKfulvwCrMXL44s2gq6OkUhuA7ERQRDpGrNzdRrVCpjtiUrvMsVgwli%2FabJy%2F7OXMbmpRW17mzLfEWdoHlXHg%2BD52CAYG3l5hsF2aK57WCc4fSwh9xelzqnNWdysRWgCrO3hQEMClFfyIiDyf%2FdUGPnPHk0VTajMv5Vkmz%2FY6CDjkE%2BXZGOBRkOeXR%2FOz5CPOU9SK9TbFCSXofO2S5ikgTZEwJjOo0yruujQRL1iIym%2FwsQe1cL0yJJp%2BKEancsS0Ol2hAGigUu6nvDOWMeMO7Kgb8GOqUBob%2BUBlNVdT%2FFOg0gPGlZa6GQpmGWgxezbzky3bQVZfblLhsdHhxTVUi%2FRKNDuVvi2x1WSm4o1XCCWCSzR2H0HdvscmoWV2wMpMw4MEGWyg%2B9uqM5PKhaur9G1AgF9NPbKoK8DE2AUPuOLR%2Fw9V6H2ZMhjS7pRnyMdZmTH0hT51%2B9NHE8NwWg4k%2FbS%2BFcMNlP6R1oARYHoB4PxsgUESWs4s1it5bc&X-Amz-Signature=2c9e2f5f1ac261883d9b9e8eddf8f7fd6b204e8a9a7dfa76fab2ddae75d9ac34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
