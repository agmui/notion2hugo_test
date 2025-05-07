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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOZCHBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiTuTNUqPx279IdOxosAb5T3A9uhX81r1Wdnw3Utag6wIhAPB1ZlV%2BSOCGuqDDbeUtJVL6D8zMm3rrhsOppLqag1GyKv8DCF0QABoMNjM3NDIzMTgzODA1IgxhkPzC6ZJuEnQDZqgq3AMkeIwuan0pu1suaxC170dQ%2F%2BTe0oujFnBgReGbFX40XrGkbxCqHZKYnydW%2FlbVPBknWiRNhmySZYwwBsv0BVOeL0WqNzEMptg8HWuSnMgWyeD0fVDOz%2Frs9QalaDAbU8u%2Fdv6lXPzpqiPqyBQC8kiWThQ5O4h7Jj79G5NqJBcpbXcammoYD0HOC9IwJDpJj5PkG8aB2tPqdBnKVuLA2hpTbwgwG29WmN1MU4xvZlFDWCxhbZ7Y74xsigBU%2BUV37REdLsSDVLa7ZTUzLcUBjb%2FV46S%2FeWiNrc8D53O5xmmFf8TlTSX66D1imfbo2WUmANvV1Cwe0Ni4egZJZS27kyWzKirqsVE%2F%2Bd2NFm64raQVFI8f0QUckm54%2BiMJ3nm7U%2FY1ZcUZH1MjtKlDEE%2FPMipYy%2FPXmiOcXYQs7NwwpeGwGfBtd%2B47qYYTU0t2oTxQ5CkkFDtERcOE%2FiWCh9zRElF5hIeOQmYgMaWN%2BoCMX96BnM%2B6JHzUAt%2FnpCzcenIowpAdoVb92bIvxUdoYC7wQmVggnjd9d0eb%2BvZfxoxx7xwikW1xRLYEgs26CsiT5KDzxF%2BI72eoAAskj3XX0Wbm70JoWiekaOpVzjLqqQD55c0S52MGjaR8X2dGid5yTCEmu3ABjqkAapgmy1kIz%2FJ5cSDHFSVVx%2FafnhfsJw8%2BSJdh94VMj5VJ%2BwzXHLsxWu5MJBCHFDKz%2FmDXEAbs%2FPlt0fFnuoXKPTQYMT%2BKjjr%2B0T63nHFEznsSZEz0uOer8wo9SV0UGhxGHBM1F0vsVZOBHFsuz6Rd6PUK0zOywVo7QSlf3PiiFp5ci4Be%2BZ3xtECkE9SZkIn0%2F7dGAv70JaAur%2FNu7KQn%2FHR0q%2F%2B&X-Amz-Signature=c06f4b4ab8c4286e80414fbbd6febc648b779008dcbec098553195f7c472b652&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOZCHBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiTuTNUqPx279IdOxosAb5T3A9uhX81r1Wdnw3Utag6wIhAPB1ZlV%2BSOCGuqDDbeUtJVL6D8zMm3rrhsOppLqag1GyKv8DCF0QABoMNjM3NDIzMTgzODA1IgxhkPzC6ZJuEnQDZqgq3AMkeIwuan0pu1suaxC170dQ%2F%2BTe0oujFnBgReGbFX40XrGkbxCqHZKYnydW%2FlbVPBknWiRNhmySZYwwBsv0BVOeL0WqNzEMptg8HWuSnMgWyeD0fVDOz%2Frs9QalaDAbU8u%2Fdv6lXPzpqiPqyBQC8kiWThQ5O4h7Jj79G5NqJBcpbXcammoYD0HOC9IwJDpJj5PkG8aB2tPqdBnKVuLA2hpTbwgwG29WmN1MU4xvZlFDWCxhbZ7Y74xsigBU%2BUV37REdLsSDVLa7ZTUzLcUBjb%2FV46S%2FeWiNrc8D53O5xmmFf8TlTSX66D1imfbo2WUmANvV1Cwe0Ni4egZJZS27kyWzKirqsVE%2F%2Bd2NFm64raQVFI8f0QUckm54%2BiMJ3nm7U%2FY1ZcUZH1MjtKlDEE%2FPMipYy%2FPXmiOcXYQs7NwwpeGwGfBtd%2B47qYYTU0t2oTxQ5CkkFDtERcOE%2FiWCh9zRElF5hIeOQmYgMaWN%2BoCMX96BnM%2B6JHzUAt%2FnpCzcenIowpAdoVb92bIvxUdoYC7wQmVggnjd9d0eb%2BvZfxoxx7xwikW1xRLYEgs26CsiT5KDzxF%2BI72eoAAskj3XX0Wbm70JoWiekaOpVzjLqqQD55c0S52MGjaR8X2dGid5yTCEmu3ABjqkAapgmy1kIz%2FJ5cSDHFSVVx%2FafnhfsJw8%2BSJdh94VMj5VJ%2BwzXHLsxWu5MJBCHFDKz%2FmDXEAbs%2FPlt0fFnuoXKPTQYMT%2BKjjr%2B0T63nHFEznsSZEz0uOer8wo9SV0UGhxGHBM1F0vsVZOBHFsuz6Rd6PUK0zOywVo7QSlf3PiiFp5ci4Be%2BZ3xtECkE9SZkIn0%2F7dGAv70JaAur%2FNu7KQn%2FHR0q%2F%2B&X-Amz-Signature=e7d9c986e266bbc1862d93de885da858ed095556b5bbf82956561ed664acc2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOZCHBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiTuTNUqPx279IdOxosAb5T3A9uhX81r1Wdnw3Utag6wIhAPB1ZlV%2BSOCGuqDDbeUtJVL6D8zMm3rrhsOppLqag1GyKv8DCF0QABoMNjM3NDIzMTgzODA1IgxhkPzC6ZJuEnQDZqgq3AMkeIwuan0pu1suaxC170dQ%2F%2BTe0oujFnBgReGbFX40XrGkbxCqHZKYnydW%2FlbVPBknWiRNhmySZYwwBsv0BVOeL0WqNzEMptg8HWuSnMgWyeD0fVDOz%2Frs9QalaDAbU8u%2Fdv6lXPzpqiPqyBQC8kiWThQ5O4h7Jj79G5NqJBcpbXcammoYD0HOC9IwJDpJj5PkG8aB2tPqdBnKVuLA2hpTbwgwG29WmN1MU4xvZlFDWCxhbZ7Y74xsigBU%2BUV37REdLsSDVLa7ZTUzLcUBjb%2FV46S%2FeWiNrc8D53O5xmmFf8TlTSX66D1imfbo2WUmANvV1Cwe0Ni4egZJZS27kyWzKirqsVE%2F%2Bd2NFm64raQVFI8f0QUckm54%2BiMJ3nm7U%2FY1ZcUZH1MjtKlDEE%2FPMipYy%2FPXmiOcXYQs7NwwpeGwGfBtd%2B47qYYTU0t2oTxQ5CkkFDtERcOE%2FiWCh9zRElF5hIeOQmYgMaWN%2BoCMX96BnM%2B6JHzUAt%2FnpCzcenIowpAdoVb92bIvxUdoYC7wQmVggnjd9d0eb%2BvZfxoxx7xwikW1xRLYEgs26CsiT5KDzxF%2BI72eoAAskj3XX0Wbm70JoWiekaOpVzjLqqQD55c0S52MGjaR8X2dGid5yTCEmu3ABjqkAapgmy1kIz%2FJ5cSDHFSVVx%2FafnhfsJw8%2BSJdh94VMj5VJ%2BwzXHLsxWu5MJBCHFDKz%2FmDXEAbs%2FPlt0fFnuoXKPTQYMT%2BKjjr%2B0T63nHFEznsSZEz0uOer8wo9SV0UGhxGHBM1F0vsVZOBHFsuz6Rd6PUK0zOywVo7QSlf3PiiFp5ci4Be%2BZ3xtECkE9SZkIn0%2F7dGAv70JaAur%2FNu7KQn%2FHR0q%2F%2B&X-Amz-Signature=dbe434991b743a202354a85a8e984a3990477b66542ec7dc2f9e93fedcd5dd38&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJHQLV4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGATWo6bEdsz7iUyXo9eCKoXNWUCIf79WJ1K4vmXOgcQAiBbzBG0Ntq%2By8Vytv5%2Fk2558CL%2Fy20aSCP8Abu2uPKS%2FSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJXW7PSgYCL00eh2zKtwDDyCZSD5unvclv3gJaW10XcF00TV8erFJfsu0OfFykZ6Xv8tZK6iJNsRlRxDqIhOQ%2FykFa6%2FBhPDzQcu9uXERLUs9%2FGGZoLNIrVdXC%2B7bseb6edwq%2FDeoG0szcqX5lK9rcZjTyYxtbZ9gS81d69lckHZRWOwjwlVZ%2B%2F9D8IJPgoDImbPygwmdthryhpNV48PpgZoZRTbztMJxrGynpL1Rttm4d3WEm8VpTCmiOqSoy98CI%2Bm4xp10GLDroJRmdgkIGogGjsOhnZ5tjDooHbvVRcYeB8G9EXVX34bsp95l37tzSGIJvvuZbkMX81kkmfliE7ekgeFfDIz%2B3XOO6zb9%2Fpb9XvrSQ9p9%2FxJJjj%2F2O4dwPUjB3r7nc82DFWOeMt8PnS7y1ANILy%2Ft5TnYEPs5igcA0mgeBq8RwLHv%2FfysFI2t2LD3Yql6qIIHL3eh88xkZ%2F3WzGThDATTqEQ6R8M7ohfvAA6qtgB6Qgcn6Prt8nDzZoHFXa1bOY%2BAjW7vLC12Kk4GgpjObc8%2BwQG9NG3lTn5Zvqpu1saj1UWx2%2FxGHT504ZU%2BMHMudJdFc2kVpxTaca7HSa0r4TGQy7aoZ5fBKTW8wqFsiCplPMizvhbDNN%2FKY%2FlrAEP8Vfm3rSMwnJrtwAY6pgFQmpY19r%2B1i41icwlcBwUhI30A40B6OaXOiFxbvRFNMeWJiwvfwcPtFqxrVglJB%2FZhWgm4dqQXPshPeaGRedqRWYmjsqxbyxSd8BdOu4o6np9XAPb3Vke5rMwezNbiNIskem%2BXcup6TSniG4wDd68mV5cox0bQ%2BjJP%2Bjrdmvla0iqpej7nRyxfI8lHn%2BDL35VqFlA%2BxgmOzzP4Ou4xWPbHmNhJfioT&X-Amz-Signature=a97c88b98e730fb858f1992eb0a869300cd8930491b8c5c7a18abdf8c757960f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2LIN2Y%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2ImlIeueqFGRBW9nYbwz3TxGy08aQmqodeAPIs4Q4AiBCXp%2ByfyvFZpehTkRIzuxSLihN7LPyAbHvdaRewsc5%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMk0NK%2FqPSxFD0zsEVKtwDT3bOzKyLGfp4Z5xBdo%2BrYcqrxebWGm%2Fish2DmegAahuRuYv4laEW%2BjjuIuHrCRf0hgmiTkqJOAJ3%2BAMIKcmIYGS44%2FqDcqkRZwd6QvgJMz5jdJIEnAojQcf%2FW7ixEpUDeHOWRuFSKreApV4b8aDX8ZcdiHx6g3Fuxa8h76Gr6sUvnIfjArylk6Zo7%2BzteCgzAK74fij2OxvkUleM3zayToXSDvDw1pUy1mcljnxy9rRyzjezo6wW0gm36finsNEAwfKRQn7UqBIcPjrtdeaJvPjlDhhUkgQEWDVshwTTuOsyfryBrCpyyvzn2SrLpcgzkE6NcdlEyFVSnXANLXyujdE%2Fl3Nmujiqt3rqyPBqVf2t6oROKGNMNSjXthcQ6OmG%2B5dyc5oqt8Ec2LUsa7RqLGrVlf3DsCeQ0%2BSbPvemucxGcx9ZcfcR0R9nXbZdIg3JOITKcas3al6BAJl%2F%2BMDTotRdji%2BnEKN0GcQCG80bfSTpyeVC8DW92FpUw87MTB8J2odCahNYr6WUtF3AeNIAdMyySXcWrsssdEgmgIVwN4b18lXgcAnNGjYLDgINlSnI%2B7lYL9nspcpoh1I6iIZ9k6G6wIy4vuSqiR%2F2Sa%2BEaK8OI2HGLndoAHSQSm0wqprtwAY6pgFsB8u%2B8FgYSBZLrhCD0BfuI20UihgbMYsL1ReJ8ac2E7y87MHXAslLh3ATYXuNTrjxVN0lrlpWqsGcMek75m%2FdQuu9kmCcwXn2si9CYPUS2dRg77HfMBC80%2F55pDnBEZ1r4%2FrpvWM49Uo1u7za15IM1YPhtGx0VkW9%2BMC2XLtWACkksvLkCQlvNnDqpDSiKkTLcgNHMBkWYxyBh1h%2B6NjocDvfiZjj&X-Amz-Signature=1c51eff8f5c989eac9e6aeade0c8b8e8f1b2e1ecd907165fecc304e1df547b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOZCHBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiTuTNUqPx279IdOxosAb5T3A9uhX81r1Wdnw3Utag6wIhAPB1ZlV%2BSOCGuqDDbeUtJVL6D8zMm3rrhsOppLqag1GyKv8DCF0QABoMNjM3NDIzMTgzODA1IgxhkPzC6ZJuEnQDZqgq3AMkeIwuan0pu1suaxC170dQ%2F%2BTe0oujFnBgReGbFX40XrGkbxCqHZKYnydW%2FlbVPBknWiRNhmySZYwwBsv0BVOeL0WqNzEMptg8HWuSnMgWyeD0fVDOz%2Frs9QalaDAbU8u%2Fdv6lXPzpqiPqyBQC8kiWThQ5O4h7Jj79G5NqJBcpbXcammoYD0HOC9IwJDpJj5PkG8aB2tPqdBnKVuLA2hpTbwgwG29WmN1MU4xvZlFDWCxhbZ7Y74xsigBU%2BUV37REdLsSDVLa7ZTUzLcUBjb%2FV46S%2FeWiNrc8D53O5xmmFf8TlTSX66D1imfbo2WUmANvV1Cwe0Ni4egZJZS27kyWzKirqsVE%2F%2Bd2NFm64raQVFI8f0QUckm54%2BiMJ3nm7U%2FY1ZcUZH1MjtKlDEE%2FPMipYy%2FPXmiOcXYQs7NwwpeGwGfBtd%2B47qYYTU0t2oTxQ5CkkFDtERcOE%2FiWCh9zRElF5hIeOQmYgMaWN%2BoCMX96BnM%2B6JHzUAt%2FnpCzcenIowpAdoVb92bIvxUdoYC7wQmVggnjd9d0eb%2BvZfxoxx7xwikW1xRLYEgs26CsiT5KDzxF%2BI72eoAAskj3XX0Wbm70JoWiekaOpVzjLqqQD55c0S52MGjaR8X2dGid5yTCEmu3ABjqkAapgmy1kIz%2FJ5cSDHFSVVx%2FafnhfsJw8%2BSJdh94VMj5VJ%2BwzXHLsxWu5MJBCHFDKz%2FmDXEAbs%2FPlt0fFnuoXKPTQYMT%2BKjjr%2B0T63nHFEznsSZEz0uOer8wo9SV0UGhxGHBM1F0vsVZOBHFsuz6Rd6PUK0zOywVo7QSlf3PiiFp5ci4Be%2BZ3xtECkE9SZkIn0%2F7dGAv70JaAur%2FNu7KQn%2FHR0q%2F%2B&X-Amz-Signature=995085543ad5f9d725d61f5ca633c34136c8d3c18f2eb087c3dce4a30136a1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
