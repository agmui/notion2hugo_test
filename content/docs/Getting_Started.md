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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBLSGHP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDEKZOv2OVD9StUnnoxnE9YE3ZZuAOoZBPIKpoicyeaiAiEA4MRvhu1YqPHfhQ8Xq1HeKrLv8dtvhiPnBbI7epM%2Fc%2FMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL6VHFykYvP9Q%2BNmMCrcA6tNkQWDUL0M%2FYiqYrktuV1lHxjT8P6oDfZB1nFoOo%2BKb6sQRd8whIHeikV0U%2FnJXA4X1HcCPSIdsVtCQ8E5WiOmBNV%2BOgP%2FREqD2%2BZSz71vspebdj2fMDTFiRCoEUN039sqEEPCf69qP%2BfExx4SIfSPdj7acdQfp4EIVf92Ug2SWzMUTo4yVdPfI3AuXcVw4DeNIC1J7eaMHCXSHo25kX3KYSRvCvF%2FRlNF6uj%2B5kW1fwLWJyDlB0EVdEXP62QWPOhRJn%2F2MTEcV1jaUVVMfpXjx8wsIGQsDSmr%2FwKydCxNYiVb0UFJltTAuIabBsiTifFHl7zxa71tF08R%2BTxszmQlCrnpVjSe7LClGdafc7bTf%2B3KGepPoduD3CyZsnYJeQjgIn5OIbQLoFnPUpqJn5c2L7ZSRx3CUXQD1YeGFPWoyQakRZv97fUH%2BFbLQaH%2BFxU2uUQoWnpe3gAKs3cwpO9wrqbmM%2FG9QeTh1tylcdXxxlbILae1YaP%2FkbsTyp1cpQac68Rm1zcYrZB1Kn1%2BTyeLF1ASNVmp0j7DWLQyfWM%2F7qxtVKnvgKCJGLHDXhctKhxIvgzjfIbA6HwKWOjvdn%2F0N5Gb1xk1M1ZL%2BKYlaEMFgkMqM9iDSSHNDAlXMP7lnMMGOqUBGMBgrtQgNkqCYljF4MS0vkJX6x4b4ENRN6vGwonG0V4Cn%2FKDTOB1187raonjEpFafi2cAvl%2BxevmxJFQw2vdHDMt3VtGk0dqxf%2BP19yh9tdwB75bkRM82fM%2Fv0zaQDYlwon7eHWmSySmaqwsV07zjZNN%2BNw4BlDJbIHjWyvghjBH5TYwqHPnUNsEnj5WJkHq3eNcJURKz%2FM5gVsqc0fz%2B5hJAtEc&X-Amz-Signature=c488aeb09756b4643196d8fc4b613cd02a35b48ecb100d592584455f237547a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBLSGHP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDEKZOv2OVD9StUnnoxnE9YE3ZZuAOoZBPIKpoicyeaiAiEA4MRvhu1YqPHfhQ8Xq1HeKrLv8dtvhiPnBbI7epM%2Fc%2FMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL6VHFykYvP9Q%2BNmMCrcA6tNkQWDUL0M%2FYiqYrktuV1lHxjT8P6oDfZB1nFoOo%2BKb6sQRd8whIHeikV0U%2FnJXA4X1HcCPSIdsVtCQ8E5WiOmBNV%2BOgP%2FREqD2%2BZSz71vspebdj2fMDTFiRCoEUN039sqEEPCf69qP%2BfExx4SIfSPdj7acdQfp4EIVf92Ug2SWzMUTo4yVdPfI3AuXcVw4DeNIC1J7eaMHCXSHo25kX3KYSRvCvF%2FRlNF6uj%2B5kW1fwLWJyDlB0EVdEXP62QWPOhRJn%2F2MTEcV1jaUVVMfpXjx8wsIGQsDSmr%2FwKydCxNYiVb0UFJltTAuIabBsiTifFHl7zxa71tF08R%2BTxszmQlCrnpVjSe7LClGdafc7bTf%2B3KGepPoduD3CyZsnYJeQjgIn5OIbQLoFnPUpqJn5c2L7ZSRx3CUXQD1YeGFPWoyQakRZv97fUH%2BFbLQaH%2BFxU2uUQoWnpe3gAKs3cwpO9wrqbmM%2FG9QeTh1tylcdXxxlbILae1YaP%2FkbsTyp1cpQac68Rm1zcYrZB1Kn1%2BTyeLF1ASNVmp0j7DWLQyfWM%2F7qxtVKnvgKCJGLHDXhctKhxIvgzjfIbA6HwKWOjvdn%2F0N5Gb1xk1M1ZL%2BKYlaEMFgkMqM9iDSSHNDAlXMP7lnMMGOqUBGMBgrtQgNkqCYljF4MS0vkJX6x4b4ENRN6vGwonG0V4Cn%2FKDTOB1187raonjEpFafi2cAvl%2BxevmxJFQw2vdHDMt3VtGk0dqxf%2BP19yh9tdwB75bkRM82fM%2Fv0zaQDYlwon7eHWmSySmaqwsV07zjZNN%2BNw4BlDJbIHjWyvghjBH5TYwqHPnUNsEnj5WJkHq3eNcJURKz%2FM5gVsqc0fz%2B5hJAtEc&X-Amz-Signature=5fea6fdc84a25d5c1dd0eb494a3c096e1db0d09a94094fd565937fc4fc87509a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBLSGHP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDEKZOv2OVD9StUnnoxnE9YE3ZZuAOoZBPIKpoicyeaiAiEA4MRvhu1YqPHfhQ8Xq1HeKrLv8dtvhiPnBbI7epM%2Fc%2FMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL6VHFykYvP9Q%2BNmMCrcA6tNkQWDUL0M%2FYiqYrktuV1lHxjT8P6oDfZB1nFoOo%2BKb6sQRd8whIHeikV0U%2FnJXA4X1HcCPSIdsVtCQ8E5WiOmBNV%2BOgP%2FREqD2%2BZSz71vspebdj2fMDTFiRCoEUN039sqEEPCf69qP%2BfExx4SIfSPdj7acdQfp4EIVf92Ug2SWzMUTo4yVdPfI3AuXcVw4DeNIC1J7eaMHCXSHo25kX3KYSRvCvF%2FRlNF6uj%2B5kW1fwLWJyDlB0EVdEXP62QWPOhRJn%2F2MTEcV1jaUVVMfpXjx8wsIGQsDSmr%2FwKydCxNYiVb0UFJltTAuIabBsiTifFHl7zxa71tF08R%2BTxszmQlCrnpVjSe7LClGdafc7bTf%2B3KGepPoduD3CyZsnYJeQjgIn5OIbQLoFnPUpqJn5c2L7ZSRx3CUXQD1YeGFPWoyQakRZv97fUH%2BFbLQaH%2BFxU2uUQoWnpe3gAKs3cwpO9wrqbmM%2FG9QeTh1tylcdXxxlbILae1YaP%2FkbsTyp1cpQac68Rm1zcYrZB1Kn1%2BTyeLF1ASNVmp0j7DWLQyfWM%2F7qxtVKnvgKCJGLHDXhctKhxIvgzjfIbA6HwKWOjvdn%2F0N5Gb1xk1M1ZL%2BKYlaEMFgkMqM9iDSSHNDAlXMP7lnMMGOqUBGMBgrtQgNkqCYljF4MS0vkJX6x4b4ENRN6vGwonG0V4Cn%2FKDTOB1187raonjEpFafi2cAvl%2BxevmxJFQw2vdHDMt3VtGk0dqxf%2BP19yh9tdwB75bkRM82fM%2Fv0zaQDYlwon7eHWmSySmaqwsV07zjZNN%2BNw4BlDJbIHjWyvghjBH5TYwqHPnUNsEnj5WJkHq3eNcJURKz%2FM5gVsqc0fz%2B5hJAtEc&X-Amz-Signature=65fbe74fe2f9ba425fb88bb2838a05cb64c1c338e0e5a6f296a02e57279c0f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6DVQGK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAR9SuyaRPHcS0kNpZV%2BCxSYK5iy6%2BAewy8nwVW1zjWIAiBSp3gFyv6ouXfPc0WFZNWRg0twZDu7CzqcX84KEzrLPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMQDaq5N4SOvzc5%2FdYKtwDEER4XwxNB7JFCcH7EQtnTD1KzKGywwkNgJRXDcocimxcciBkyXRS5Pq%2FcOMHrhYm3mK6olAw85tssW3QHQNCWGpmBZ%2Btf2Us04CnYKAxHkV893zDkW8RM5ExcNUrNHWhmUnoW9BpDpWmmKiuT1Rf%2FaLLPNLHw7NalEPcAPrBByEJTiA8bbhdENw%2FN7SFFNxOcwASrkDa5tUn7whsZCD1PxnIckodCSV1FFepI%2BSoe4Q5d%2BInbrEeI9LKrbBnyIBO%2B0GTx%2BDOCm%2BZQQ1LhpRqo2sRoc7L5%2FDrfDjErZaj894Iw6QEKliM7IgAe0u6BditcBj0eoZJ9LeTp53o5nxM%2BU1hgHdjMpZrmO1Ikxcy67louwSOFtyUKvor%2FaRhIwPzr7EzUedjslIlTPBQHBkE6O8HQ2FMeDiOKNL3XXfjJ1xvkGEp6OfQsH2%2FqPueF04P2w8qnVvTjIhtehPo06vqlh8smPOrCsjCVQ%2FFzWcuNx30mX%2BDoTAnZrNgNITmrIVOqTmeSnuiTbONP3riHYNWnLv6rTrcxjWHmNENqh265zQoJZNvYYYmyfTesQoN%2B7X5tqm8y95jbascvuLZ3IHWieZwPKL0Rno9E32ExoKxLVqAeQE1i81ZzynATHEw3OWcwwY6pgGEhr2shWMJ6aWnO5wkjgl0xKbZIBJiW7vUEVi4434k%2FQAQ4oku8k7JizysXZ659jarLIxoQhLN6lcgym0QdmTL%2FTw0aer1CsT%2FZM4kTXFcVcqg1eoQi2pRO%2FueQhYy5ud3z1%2Ba%2Ff3PzTyNuQpzUwNTvgZqPmMCcyaCKHCUxkvilC8LAXiMgoyBrI9WzLpL44FdGQwcD5UVaI%2FRpYQLw0qcVJcrm9W1&X-Amz-Signature=55ac4c81d9a3503de7393057b0280b8cd1fcc95b491a3546f90259c306b1d720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KXTB7Y%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDz%2Fcgi%2FtbJ4RJqGyDiNwB%2BfMeGt5qdJqneQT4dKnTQFwIhALMjEoOnP1cU%2FtQAnVPxpaHF%2B2JMflSRZHbA6hGaorcHKv8DCCMQABoMNjM3NDIzMTgzODA1IgzGo9eEYcZSB9G2KIYq3ANlySYPYkOcGZeYSUY8magbTCnhkY4SfzIMQQTqv93mRdWdl%2BGpn6Brq%2Beba5KeTJSHYwMdMg5IkLan8cDn866SpgImXl9ivNs7Siw8pitjN6bJfuQRYV1Ti5dAjSjq%2FVU7G1iF4FvnDcnZeGl%2FuSxS%2FExZBgGkgUea6oBKIOkO3dryihF6EdObD83rdy8nE3nArQCrxDuCaID7V38oxMMln8dPGcSzkKzfMtD3zuz76eTDIIYnEi%2FnUwhY5L9mkkLWhntd0LMXzm25tXwICT%2FWaO8b8BA1bYoWwtW5ZrAnHUqnhU4G%2B1fEpXBgA%2BWt5fm%2F0YJW7%2FbTGvooyw%2FLT3leR3CMGsJm4ipbwBYDsPUjs9uOvVdm0XmBv%2B0xYvZrloqGm7pjmtogT3ny88Dm7F6cYOEjxHauSK67yyVNzlePJDLsXSfFjsVD73AAioT9V96ISI5RHgJb8OvLHSrJIolzTvkFRTYZ1%2BQE1w4%2FtMlZ%2FZekI1gBpnilAFoU8QNTdUAR0CD13DmrriCEWmSmUEsnJGAzFsR02Z2ky%2BLPRlRNZdGcQwMAR6zQ8LkWx4ckeo1Sg2Em5dD9%2BeJc9uM2HU3UiTRobB4IIOIny3Yt2C%2F8zrZfmlmrrkRB0Fy0hDDc5ZzDBjqkAU%2FlakiK0l2tK4HMXsfyx%2FaWFyf1x6DhKIhDPIl15TY3UbZRX2g5MJKjdNdbx8XYBOclyfGtyzsjTrA50msJ7F7oGVzlMm880p04RtmhSLM1ckz0aWwY8DpFj6qnYdejNu8psozbjUnsQrLvg%2FlAp1MxruvW4skIcqDTh7JhsgWEgWpnKoohYmtowaZoEUuZUDn9k%2BAQes0lW%2BvYv4CtMMdWm%2F0%2F&X-Amz-Signature=6d268f236f51415be277239c035d13198d2003f0435b9e9b89dd03fefa47e6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBLSGHP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDEKZOv2OVD9StUnnoxnE9YE3ZZuAOoZBPIKpoicyeaiAiEA4MRvhu1YqPHfhQ8Xq1HeKrLv8dtvhiPnBbI7epM%2Fc%2FMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL6VHFykYvP9Q%2BNmMCrcA6tNkQWDUL0M%2FYiqYrktuV1lHxjT8P6oDfZB1nFoOo%2BKb6sQRd8whIHeikV0U%2FnJXA4X1HcCPSIdsVtCQ8E5WiOmBNV%2BOgP%2FREqD2%2BZSz71vspebdj2fMDTFiRCoEUN039sqEEPCf69qP%2BfExx4SIfSPdj7acdQfp4EIVf92Ug2SWzMUTo4yVdPfI3AuXcVw4DeNIC1J7eaMHCXSHo25kX3KYSRvCvF%2FRlNF6uj%2B5kW1fwLWJyDlB0EVdEXP62QWPOhRJn%2F2MTEcV1jaUVVMfpXjx8wsIGQsDSmr%2FwKydCxNYiVb0UFJltTAuIabBsiTifFHl7zxa71tF08R%2BTxszmQlCrnpVjSe7LClGdafc7bTf%2B3KGepPoduD3CyZsnYJeQjgIn5OIbQLoFnPUpqJn5c2L7ZSRx3CUXQD1YeGFPWoyQakRZv97fUH%2BFbLQaH%2BFxU2uUQoWnpe3gAKs3cwpO9wrqbmM%2FG9QeTh1tylcdXxxlbILae1YaP%2FkbsTyp1cpQac68Rm1zcYrZB1Kn1%2BTyeLF1ASNVmp0j7DWLQyfWM%2F7qxtVKnvgKCJGLHDXhctKhxIvgzjfIbA6HwKWOjvdn%2F0N5Gb1xk1M1ZL%2BKYlaEMFgkMqM9iDSSHNDAlXMP7lnMMGOqUBGMBgrtQgNkqCYljF4MS0vkJX6x4b4ENRN6vGwonG0V4Cn%2FKDTOB1187raonjEpFafi2cAvl%2BxevmxJFQw2vdHDMt3VtGk0dqxf%2BP19yh9tdwB75bkRM82fM%2Fv0zaQDYlwon7eHWmSySmaqwsV07zjZNN%2BNw4BlDJbIHjWyvghjBH5TYwqHPnUNsEnj5WJkHq3eNcJURKz%2FM5gVsqc0fz%2B5hJAtEc&X-Amz-Signature=e5174d541aed086e8a3b8465a0691164cd9630ebd334090042722a65a8899b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
