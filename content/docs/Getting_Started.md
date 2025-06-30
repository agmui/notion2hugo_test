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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRTSAHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA48i3KECRlPaQF5nUwJt%2F%2FgevjshRejCywS%2FMl5H8zAiEAvQAVusGIyVpGBW9ZTblPXfuLcL6UHCpuRzWv%2FVe6GcIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPBHU2Eczk8k4EoKCrcAybM9w9zwhYL2%2B7hnoSIKEPzAsp3S4jggZvtxjKiOWMhUZgovEaECJANFyMaLlZm5ZnmGq6LmEpAtxIabpXNJssM4fXB3hatu2roY8dePJg%2BoqGPVH44%2FsIu6DNnuQvYGsFPtL7lPoUmq32cQzU4BE2970DlD5dEVKVx77jLvP576tgA5Q50tboO3GTB7jwATQpzr9tL%2Fa180lzKVkXqUml6Dhr5%2FXthWfhTnU4ChrjJ2Tj30sonUJ0kL00ADiG1T%2BRfA4ovAyXFh38GoGfW1RtPsA3mt%2BXSygf54mQVN4S1LC9%2FGko%2FOpBiqiH5SgiE35S3zLgj8jwbxG7sqAPQUVOWw9jayFxy%2B9MXzRAq4DGlcczIa7hMwfldrVpe5ZGlMNwD7kBXtZ9cOBUMFtImUxbfLxUWgsRaCkHabJuVH7knfemosRjeKGcO0pttwu6AjYSYO92RXuuWtaeVf7JarpjbvjXF7TH3mHMhoFrAdOF%2BxQHdM8iTOJDPzGKPmWU5dr0gCm9HtU0two3AfMzDGTjahKv9NNuSaC6F0FXzpwZb8hsg3UrydH1X%2BLD02OWGl0wsISGTK5euFg8D0RGDo5TIqjZGIBTzzsKyYhf0SELmBjAaX4F8w9iIimMdMI7uh8MGOqUBiZqbGziYoD5%2BXSE6bqEbxn3BKj4YjIwm9VA7Ctc0pvzUCH%2BcbLHPLuqE8ENO3txCDfki7qzxRib%2B6jLVRegwI186jox1QU2OWa6yG39vX4o83U8O9ddwTcNgCEAcBI3vctdSkR2ZmT0cYZ6gvgld9HjC3bg8purdqhUUD%2FJk46LysVV%2BRpCs%2Fbl2a2OKdf%2BH5cs3dBhYbFDvOEsTKfiC7Y2XPnn3&X-Amz-Signature=5f4a89d6e83a1fefb326dc449bf12c9bc5f6f76acf81c06b00ac0b46ccdb77a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRTSAHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA48i3KECRlPaQF5nUwJt%2F%2FgevjshRejCywS%2FMl5H8zAiEAvQAVusGIyVpGBW9ZTblPXfuLcL6UHCpuRzWv%2FVe6GcIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPBHU2Eczk8k4EoKCrcAybM9w9zwhYL2%2B7hnoSIKEPzAsp3S4jggZvtxjKiOWMhUZgovEaECJANFyMaLlZm5ZnmGq6LmEpAtxIabpXNJssM4fXB3hatu2roY8dePJg%2BoqGPVH44%2FsIu6DNnuQvYGsFPtL7lPoUmq32cQzU4BE2970DlD5dEVKVx77jLvP576tgA5Q50tboO3GTB7jwATQpzr9tL%2Fa180lzKVkXqUml6Dhr5%2FXthWfhTnU4ChrjJ2Tj30sonUJ0kL00ADiG1T%2BRfA4ovAyXFh38GoGfW1RtPsA3mt%2BXSygf54mQVN4S1LC9%2FGko%2FOpBiqiH5SgiE35S3zLgj8jwbxG7sqAPQUVOWw9jayFxy%2B9MXzRAq4DGlcczIa7hMwfldrVpe5ZGlMNwD7kBXtZ9cOBUMFtImUxbfLxUWgsRaCkHabJuVH7knfemosRjeKGcO0pttwu6AjYSYO92RXuuWtaeVf7JarpjbvjXF7TH3mHMhoFrAdOF%2BxQHdM8iTOJDPzGKPmWU5dr0gCm9HtU0two3AfMzDGTjahKv9NNuSaC6F0FXzpwZb8hsg3UrydH1X%2BLD02OWGl0wsISGTK5euFg8D0RGDo5TIqjZGIBTzzsKyYhf0SELmBjAaX4F8w9iIimMdMI7uh8MGOqUBiZqbGziYoD5%2BXSE6bqEbxn3BKj4YjIwm9VA7Ctc0pvzUCH%2BcbLHPLuqE8ENO3txCDfki7qzxRib%2B6jLVRegwI186jox1QU2OWa6yG39vX4o83U8O9ddwTcNgCEAcBI3vctdSkR2ZmT0cYZ6gvgld9HjC3bg8purdqhUUD%2FJk46LysVV%2BRpCs%2Fbl2a2OKdf%2BH5cs3dBhYbFDvOEsTKfiC7Y2XPnn3&X-Amz-Signature=4ddee59ec5f75cdf5a6a4518458bc07936e88a0a975a73e30666f2f50e906678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRTSAHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA48i3KECRlPaQF5nUwJt%2F%2FgevjshRejCywS%2FMl5H8zAiEAvQAVusGIyVpGBW9ZTblPXfuLcL6UHCpuRzWv%2FVe6GcIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPBHU2Eczk8k4EoKCrcAybM9w9zwhYL2%2B7hnoSIKEPzAsp3S4jggZvtxjKiOWMhUZgovEaECJANFyMaLlZm5ZnmGq6LmEpAtxIabpXNJssM4fXB3hatu2roY8dePJg%2BoqGPVH44%2FsIu6DNnuQvYGsFPtL7lPoUmq32cQzU4BE2970DlD5dEVKVx77jLvP576tgA5Q50tboO3GTB7jwATQpzr9tL%2Fa180lzKVkXqUml6Dhr5%2FXthWfhTnU4ChrjJ2Tj30sonUJ0kL00ADiG1T%2BRfA4ovAyXFh38GoGfW1RtPsA3mt%2BXSygf54mQVN4S1LC9%2FGko%2FOpBiqiH5SgiE35S3zLgj8jwbxG7sqAPQUVOWw9jayFxy%2B9MXzRAq4DGlcczIa7hMwfldrVpe5ZGlMNwD7kBXtZ9cOBUMFtImUxbfLxUWgsRaCkHabJuVH7knfemosRjeKGcO0pttwu6AjYSYO92RXuuWtaeVf7JarpjbvjXF7TH3mHMhoFrAdOF%2BxQHdM8iTOJDPzGKPmWU5dr0gCm9HtU0two3AfMzDGTjahKv9NNuSaC6F0FXzpwZb8hsg3UrydH1X%2BLD02OWGl0wsISGTK5euFg8D0RGDo5TIqjZGIBTzzsKyYhf0SELmBjAaX4F8w9iIimMdMI7uh8MGOqUBiZqbGziYoD5%2BXSE6bqEbxn3BKj4YjIwm9VA7Ctc0pvzUCH%2BcbLHPLuqE8ENO3txCDfki7qzxRib%2B6jLVRegwI186jox1QU2OWa6yG39vX4o83U8O9ddwTcNgCEAcBI3vctdSkR2ZmT0cYZ6gvgld9HjC3bg8purdqhUUD%2FJk46LysVV%2BRpCs%2Fbl2a2OKdf%2BH5cs3dBhYbFDvOEsTKfiC7Y2XPnn3&X-Amz-Signature=7e8de331a554108cefb95000db98cfcff4976eb19504ee80c88d4cc50a59cfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNZAN72%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAVI96JQH8PQYnVuM9%2FVGRraGsxHwevQ8wj3b4PtsYswIhAPL70DRVEuzhN2GJsxZ5QN7R%2FTd7asCzwZjsOBHHzLzcKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX72hwTiI7ZkrET3kq3AP9VVWXo8nIEElPD4UnuURsvLPkneRgwQUTDtNQ6jtW3NhdZp%2BczEdwXbJBD79nxiHqExsR24CMfMQXCWBUJdpyPVIz8azh1TinNlWKnb%2F928lCygchnJbA2V8Y7FTmr7XjIwQggG4dMDXYQUJopWrMA8jaAzTUc3oWsBFAD426e3ymoucAMIcaPx2zesx3FbU%2B5UuSOmRgpYW09puVeQu4U%2FRUW%2FKiT%2BGlTdwvIKiBEHcL8l4ZpNg5QeZQ5B3Paesc%2FYghZPG6VFcich%2FLDa204TtmHglVz353cAGv3DK0B%2FDpKRMfyEDxTKj9Dc6zNXBEk6mKshlSAfWeBQMGsWOBWj8jVk9qiCIqpuBjuiFIYWOq0vQE15zLPoMiPFfVv%2FHhWgw4H5KfHUx7pfuFcLIQZUpY2z3rL%2F1wGpXVzZO%2B0ILq%2FRwImUMvuLnPsPpdHQCzCy14Qmayk1zcRHV5LzGLC1BKa6kvrCbSaE5ZnsanscfpVi5cai15Yn48UJhRa1dLod%2BYUfG%2Bu12U5Aj%2FX9MxpNEr49mh8A4zJ7qe4CUxe2kalPty11iyS5vUpyWogbr53wKJG6otwatQ2yBCQLW%2Bgf%2FLKPmlXR%2FCYcNDRigYyc6XyYsxsVRd4hBluDC%2B6ofDBjqkAVqV4U9fY36mj04Hn%2FZYi06NJ2Ua5V1w%2FI40HHu6PfRzUVmXwqDZEmkqryh1ivPMNdO7DdPUrVveuMviQn2tMplnZGMR9iF4FtIrwfKTeWx2%2F2e4MP6NFVjdYu%2BR4jYPmXLxaW0evLZPpSL%2Fvmxq8%2BptDFcaYeIvJSYL5L7ndX6PCaK1SMZtNfGzlUysxuBmmJcMpHhHSNXv0llOJQzXEaUWKGQ7&X-Amz-Signature=29a38f03ceb996b7d24c0797a0efa407c61fbaf6fd3f1af91f0be3134724b3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2ZIEMG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3DZOXu91hg1Mi%2Fj%2Faeur%2FsrMCo6yIlcYmprmAflc0QAiBDPeUJslBTc0I4atX9P2P3RDoTEOCsNgA3uPNhMdxw3SqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1LkGQIW7XCKPKpvrKtwD3r6FYsrmJq%2BeFFmQh%2Fznq1z9%2B1K4eB%2BnGUn2EZoOemO5Aw%2FD2rcjxWt5QN9DTm9%2BRh%2F1V%2Fx0yaGZguO6WfEBhhgZLUqftO8GE9JrIEunwzx%2FrzWm5GamZ%2BRUey9XU3FpA%2FLzPPFeAPY%2BHsj6M9hct9d8OFHm9po8GnEe3e9vlDuclgY5j%2FQhgeUQeTcAo4JhSN9ApJfrzSZbDh1zn7sZ8HQlh%2BCwGHPDVXFwQMkkdL5oSoPOjTXXedU293lKSvek87gIPX8ZYIu2t4VoKLX%2FjOLYXVwso0x6VH1Lj9R0F3dPCbxKJuIpfcEm93Hzx1ojrj%2FTzOrvcFLXwMYTlTVGfu%2FVvjcXxXHXxaUPg%2Bi13jByAc9UywUH9TuS0PKJsOt32mLYc8GkAO5uFOm77CyooslVogBj4SuLW1hOqjS0QN4qpOVPVowp0RwVUhCPx5a5GWcqVToM09D9hnOIiLZRL3kgqOKCpBySSifNciKHBvVfUq4OtuA4dux%2BqJyPhY0OjuZ3WXf5zaxGHj6cuZlEOerOCiRco6t%2FJgA5OCSlPwrV4QUytHqCGd7i0Ao0i3WHXXC8FFvlMy5BKePJcsJkhNvObEuVsr%2Bo7X0eDm4jmTEyp1zl3QF%2F%2FMVdV8cwxu%2BHwwY6pgHP4%2BITcBkecZ8IySxC04eK51Gja2EfZ5ej6deivu%2FN8tt0%2FaReCfhFfGXos7TLrXll0LRR26KlqZxxicWXv%2F2A0eiEeP3ghTi5qYvwgY8fHD3xisfm58aLE7%2BMlpwLv3YVAtDto%2FFsg8001fJGflLJ5hpQ8iHc0yrIJuLn%2BwlaPDdcHkT5ecF62BkC28wf59d2kW22A9IM4wL8UQpx5CDlVlVbcwnV&X-Amz-Signature=6a1f36558f15b1d4014093321100cbcfa5a6058da910d96e78df74a846f3d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRTSAHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA48i3KECRlPaQF5nUwJt%2F%2FgevjshRejCywS%2FMl5H8zAiEAvQAVusGIyVpGBW9ZTblPXfuLcL6UHCpuRzWv%2FVe6GcIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPBHU2Eczk8k4EoKCrcAybM9w9zwhYL2%2B7hnoSIKEPzAsp3S4jggZvtxjKiOWMhUZgovEaECJANFyMaLlZm5ZnmGq6LmEpAtxIabpXNJssM4fXB3hatu2roY8dePJg%2BoqGPVH44%2FsIu6DNnuQvYGsFPtL7lPoUmq32cQzU4BE2970DlD5dEVKVx77jLvP576tgA5Q50tboO3GTB7jwATQpzr9tL%2Fa180lzKVkXqUml6Dhr5%2FXthWfhTnU4ChrjJ2Tj30sonUJ0kL00ADiG1T%2BRfA4ovAyXFh38GoGfW1RtPsA3mt%2BXSygf54mQVN4S1LC9%2FGko%2FOpBiqiH5SgiE35S3zLgj8jwbxG7sqAPQUVOWw9jayFxy%2B9MXzRAq4DGlcczIa7hMwfldrVpe5ZGlMNwD7kBXtZ9cOBUMFtImUxbfLxUWgsRaCkHabJuVH7knfemosRjeKGcO0pttwu6AjYSYO92RXuuWtaeVf7JarpjbvjXF7TH3mHMhoFrAdOF%2BxQHdM8iTOJDPzGKPmWU5dr0gCm9HtU0two3AfMzDGTjahKv9NNuSaC6F0FXzpwZb8hsg3UrydH1X%2BLD02OWGl0wsISGTK5euFg8D0RGDo5TIqjZGIBTzzsKyYhf0SELmBjAaX4F8w9iIimMdMI7uh8MGOqUBiZqbGziYoD5%2BXSE6bqEbxn3BKj4YjIwm9VA7Ctc0pvzUCH%2BcbLHPLuqE8ENO3txCDfki7qzxRib%2B6jLVRegwI186jox1QU2OWa6yG39vX4o83U8O9ddwTcNgCEAcBI3vctdSkR2ZmT0cYZ6gvgld9HjC3bg8purdqhUUD%2FJk46LysVV%2BRpCs%2Fbl2a2OKdf%2BH5cs3dBhYbFDvOEsTKfiC7Y2XPnn3&X-Amz-Signature=d25896495d6111936f2a872cb22cce60469e22e93a9272068a040b6f40a1dbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
