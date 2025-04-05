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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLF37B2U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKH7i9CXmiEXosU5I4ufXV%2BAIlgAHpiZJMZ%2FbptBVnBwIgQ7YdNfRiwhjVR7boYv5wePhTV2jthPoLKaWZcWRq8W8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHH5MMwmB4pzef%2F%2FOyrcAyekJ0L6e%2BVIOikUUc%2BtJJJfkORVXlahoihsJyvlOkfDC%2FvzyF%2BmY1Zpo38jypOpinaUKEruykXG5y0FDJvXfafUHnoaLMH%2B3HQfBGAvBDOj0NQiQqsSmUVhOMLO1QjIcndwRzydTTNpuIbCzDEoSbbKEtJSj5eZYvAHd7z%2BmCHMareA%2BeHnaVaz%2FEq0x3RFbCUtOEVZ9tpabpkz2AFYIwbQU7cuHQ9SAGmFA%2FIV6Xj9xMvzL7hatul8%2BoU2%2B4rg1cnvH5%2FD%2Ft0jI4JkDfiSwboC%2F5oen7mJh75jSsF4mtRMQE75o6MgS8M6hmb9gdoa%2B6heEZ4wcE2RKUuIpmixwRkpDNHE7uQGxP7ReheQldr48wpBQg7aHZpZTM9z9DZyH69SVXFgI%2BZ7npH8f7C6GjgUFz1V8tjvXu7%2Fb3ZPX8AR1HybmMfG8bsmHZ0jybzbDwEnTeaQCEswrjdXOUVcgyo3KvyC76NE38PYYJ2H9CyXhglmY1FUbbJWHEyRVFzLGz4MriiCZqNiP8ABE%2BWlLkM%2BAswtUzbSWo%2Bo22a0p2XzG86gQ7fCP0G7aYy%2BReILZPj7QbbJokLz3GfhYTzYPPUu3vbdAltCX%2F7FCh01A1TQyy6Wq7XcxoQgn15KMOnHxb8GOqUBfHXWyRBq8ORrIztQ0wn2dFNmhVDSI5jUuKw0XUczCI3EFOUtpLFA%2F09p8H38M2qCAM0s6qnegoPHDkcsiJBAvxhDxlXb7V3KtlH4BNwnJDQE%2FbwQo4NGmUjp3USyrvfPoZDA39rsRYlbp2IcRTU6%2B7mwXtsnSsxXFqs66%2FJHfU1PqhMmnjtVxlxZlN7FSlIAeRuNtCCFB3%2BJnC2Mbji5F8Jvb4Ff&X-Amz-Signature=739ee0fed8fd325c6c25e84f6aceb6f42c3821aef230c03013917b3dbe9365fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLF37B2U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKH7i9CXmiEXosU5I4ufXV%2BAIlgAHpiZJMZ%2FbptBVnBwIgQ7YdNfRiwhjVR7boYv5wePhTV2jthPoLKaWZcWRq8W8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHH5MMwmB4pzef%2F%2FOyrcAyekJ0L6e%2BVIOikUUc%2BtJJJfkORVXlahoihsJyvlOkfDC%2FvzyF%2BmY1Zpo38jypOpinaUKEruykXG5y0FDJvXfafUHnoaLMH%2B3HQfBGAvBDOj0NQiQqsSmUVhOMLO1QjIcndwRzydTTNpuIbCzDEoSbbKEtJSj5eZYvAHd7z%2BmCHMareA%2BeHnaVaz%2FEq0x3RFbCUtOEVZ9tpabpkz2AFYIwbQU7cuHQ9SAGmFA%2FIV6Xj9xMvzL7hatul8%2BoU2%2B4rg1cnvH5%2FD%2Ft0jI4JkDfiSwboC%2F5oen7mJh75jSsF4mtRMQE75o6MgS8M6hmb9gdoa%2B6heEZ4wcE2RKUuIpmixwRkpDNHE7uQGxP7ReheQldr48wpBQg7aHZpZTM9z9DZyH69SVXFgI%2BZ7npH8f7C6GjgUFz1V8tjvXu7%2Fb3ZPX8AR1HybmMfG8bsmHZ0jybzbDwEnTeaQCEswrjdXOUVcgyo3KvyC76NE38PYYJ2H9CyXhglmY1FUbbJWHEyRVFzLGz4MriiCZqNiP8ABE%2BWlLkM%2BAswtUzbSWo%2Bo22a0p2XzG86gQ7fCP0G7aYy%2BReILZPj7QbbJokLz3GfhYTzYPPUu3vbdAltCX%2F7FCh01A1TQyy6Wq7XcxoQgn15KMOnHxb8GOqUBfHXWyRBq8ORrIztQ0wn2dFNmhVDSI5jUuKw0XUczCI3EFOUtpLFA%2F09p8H38M2qCAM0s6qnegoPHDkcsiJBAvxhDxlXb7V3KtlH4BNwnJDQE%2FbwQo4NGmUjp3USyrvfPoZDA39rsRYlbp2IcRTU6%2B7mwXtsnSsxXFqs66%2FJHfU1PqhMmnjtVxlxZlN7FSlIAeRuNtCCFB3%2BJnC2Mbji5F8Jvb4Ff&X-Amz-Signature=2990ed59ac7ca146aa572c804b3dabe2abc9a2e600bb713b416445d51d91d9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3GTKLIY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID10Pu6CkQeczRexxrFf87SPR%2F6NNs6VPizScTdYA%2F1SAiAqOTmMxIFwBwnuvoqtkl2b6ZKAMo68MgaofA2shgyp0Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM2yZSrt39PoyxI2OVKtwDr2xb%2FKzblSUQw1uf%2Fq2ySw6gp78Z%2BvEE%2BHvRKPyxLatF41kIO4rHkPMRUAx2Bahl9Q7ud8lHheTqVPQRs%2B1xdfGRH9iUboO%2B1FiA3w52YOcXxIj4iySXRPnvT2AhRRhzzyA7bYEtX5cmayrdA%2Fm%2B%2FntE1jBDzD39GqzeUmbkNAZNfdX5yh%2BiorIyba2it6JOQiquukcOqTyf48vlmN%2FitOM8%2FMX3qbNcbPFrp%2FXEd7NilTHO3%2BPkhfgCyyaO2yD3u1SlhbClN3OKs951YUm%2F9p93pAvdE0WOo1BT0xW3j0YyDp7jG%2B%2FJALbzWZ%2BzCb%2BmAb04G4WzKtUgoXkakRNdJaAOIv81iHVN1bbO52nwCLdQ7LcUYi%2BDoSz%2BtuI%2BwRReH%2Foklli7nCD5U95FVCywlu4nU%2BgDbYPiQMG13%2BekG9zaMht1tvKxGk0mhJ7%2BlIcZz%2BNShx8zsxSUxAW%2BirECOywg%2FNngH6YIvlHCKV0AiWrnLcfh27gnXKG%2FZoVaaJJxZNu9TAmXGL0rIigvqSuBbpZKoUiYK1Xwf8P%2BG%2BQxMtjuxJE3%2BueIogyeJ9UAEkx2VHcD6nJuS5ngIOCfCJdOI3P6HYYggYZ%2FarJEJESWiE0Cg5rbrFEnbdmFYP0w3sfFvwY6pgG7239mUls9EdmkYVYMj9Yb944dWK13l%2Bvev%2B6S8lrj9cTKuy%2Fvq%2BjSO0aTIjtVdeDs%2BuYw4e8w36%2FrwGtMcqa15Wd%2Fox0aU9grPPtyCmAvvALUPiWN3pQAdJv2mFBuF2UguX2eAqZjW6GBwYW%2FThQjmQ2HKnMHs6xp5wpR6h3bjd5xCaaVBiP27Lltumeji5hEDYdwZzfAtkMsnad7xzs0vjCCHlfL&X-Amz-Signature=2c25ba397b5daf3494fa7974255b62393e0f733281a7608a45af7924990caa17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNTO2VL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBQ8n%2Bzuy3JXONYRjhI4%2BaR0A2lEbYIOnA%2FOiNUqvaXgIgB1bDy8VWqqnAC5QLDPmdK0u8Zkmol%2FixnA%2Bcqs2py7Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDVYjAJCZxrYCxFBCircA%2BQgqdAv6aIsZlpuFriCYCnK652QvbdHMMa7dVAj3zXCmPg3zvrMYj7stp8QEPF386sDx058I4FMkkBlSxLLR0Stl9kOT27USFPZ31gonpBFEd551gRMnKwPdp2ERcRvYkNtvJCStrkCaF9WGkAk7Lfl309rnsS9F65TTHWCeBy1ePkW%2Fn40taqsDhfHR1V4PwAFDuHOJFb36aH%2F6Di6I08RgJ%2FDfXXJdGf5b57dZpiZoa%2Fui%2B6bHq9x93zmkvP5UT08GK%2FeXslZ2sAl1uC%2BeAngc1h8RcTpGyHNf3miNBo2lWDz13AY9pyIr4gmjw1D2L0I1rekq3rukJzsL2eXregm2phx25VXtBd6Z9Yl0fhjibaE3ESu7IPotQTt21tpuOww%2Fqt1g0EIo93Ivz8%2BJjEjXZFCusf6Zv1WvJ3uTCnajVj5odbGVuVCxWyyPGcj7Rz1Va%2FCLnGobRBUZuKokDkKW%2FzC4PGFhlXFYlCn0jOhj8kr5SPoje9kCY2X6rJu4GYJFu%2Fok%2BjCvxUGPREC14ZHR6OLWTnth7612l2blyQVmBaIk%2BwHubsyT1xg%2BO5Om8ZQtKdpq0ZKWP6MvUtUrWS%2BXxzP%2B%2BoqWRLwIROqEF3EYsLkVuSdB7s8Kur%2FMNjHxb8GOqUBPfrWkDJhUmOHXDSiToVDqRns0grkiSNayXbGfPthk9U5WdrcKFK%2BR7BSCWhXzBuuBDR47YuVXL2uF7wLCWthG830r4VFkY3qiNbgCHygqQ6ZDEJ7cvlVLpgOxLliJmRo%2BPOIdvQfL0l5j%2BnoXcCtWYeFF2HjPvPzx67YatGQR2sWYBXj%2BPk%2FBCAbR0XW%2FRI7ml1idSbu7%2BOMj0FjLkipPYGgWedl&X-Amz-Signature=7e02001a332e2af60c73601ec6a26d3cf14643d4018770c635b0c27afacb8f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLF37B2U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKH7i9CXmiEXosU5I4ufXV%2BAIlgAHpiZJMZ%2FbptBVnBwIgQ7YdNfRiwhjVR7boYv5wePhTV2jthPoLKaWZcWRq8W8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHH5MMwmB4pzef%2F%2FOyrcAyekJ0L6e%2BVIOikUUc%2BtJJJfkORVXlahoihsJyvlOkfDC%2FvzyF%2BmY1Zpo38jypOpinaUKEruykXG5y0FDJvXfafUHnoaLMH%2B3HQfBGAvBDOj0NQiQqsSmUVhOMLO1QjIcndwRzydTTNpuIbCzDEoSbbKEtJSj5eZYvAHd7z%2BmCHMareA%2BeHnaVaz%2FEq0x3RFbCUtOEVZ9tpabpkz2AFYIwbQU7cuHQ9SAGmFA%2FIV6Xj9xMvzL7hatul8%2BoU2%2B4rg1cnvH5%2FD%2Ft0jI4JkDfiSwboC%2F5oen7mJh75jSsF4mtRMQE75o6MgS8M6hmb9gdoa%2B6heEZ4wcE2RKUuIpmixwRkpDNHE7uQGxP7ReheQldr48wpBQg7aHZpZTM9z9DZyH69SVXFgI%2BZ7npH8f7C6GjgUFz1V8tjvXu7%2Fb3ZPX8AR1HybmMfG8bsmHZ0jybzbDwEnTeaQCEswrjdXOUVcgyo3KvyC76NE38PYYJ2H9CyXhglmY1FUbbJWHEyRVFzLGz4MriiCZqNiP8ABE%2BWlLkM%2BAswtUzbSWo%2Bo22a0p2XzG86gQ7fCP0G7aYy%2BReILZPj7QbbJokLz3GfhYTzYPPUu3vbdAltCX%2F7FCh01A1TQyy6Wq7XcxoQgn15KMOnHxb8GOqUBfHXWyRBq8ORrIztQ0wn2dFNmhVDSI5jUuKw0XUczCI3EFOUtpLFA%2F09p8H38M2qCAM0s6qnegoPHDkcsiJBAvxhDxlXb7V3KtlH4BNwnJDQE%2FbwQo4NGmUjp3USyrvfPoZDA39rsRYlbp2IcRTU6%2B7mwXtsnSsxXFqs66%2FJHfU1PqhMmnjtVxlxZlN7FSlIAeRuNtCCFB3%2BJnC2Mbji5F8Jvb4Ff&X-Amz-Signature=b18ae8f335b2b217597d5a88d543dbb4564a1406df9394374248696868d0c05e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
