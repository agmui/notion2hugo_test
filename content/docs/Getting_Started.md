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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7JXXBG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQChEJrEDl1PfyZg2L8Kr5%2F85QEQSAKVe%2BUpIQ27Ou02cgIgbwyeHwDGXfihmYyYHoGV9WHdYOoe6Jw8GX2bJLny5qEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXSKo9lDMmaPPvrLyrcAxDpWw2VeGgLPVijkMr03c6pdMPNfv8SugF2xeKcHJKa6QdnBChITtzHCAD9miK%2B%2BkIlLtcbZy8Fb3%2BC31bGe1PD87tEHPkpWGgEjx9bBS1ppjj7K3HAUfRz%2FTvfgpaRUZNtRa%2FdnGk4ZlOGcaTcmP%2FOCfb6zY7Mtl%2BLMtp0JjYhiOwsb5m2VPVLk21i9JCICbmieXrUunNvXeD6pFryGsGOLu18TbRwXd6ukzr6QAYhqfWwC5BO6LPM6nOH0OTFS6EZKDHn5VUEv32jY3%2Bs9T960oreG3qGFIT6tt5UYWAFkS5PyLlGMddAXetwaGRVSyUyFGGb1QMuqY5COzmbUG1fYN6yaxUbB5134ZNUa9leH%2Fzl58bY%2FxFUoEZPyQLEbSvI0FNWzhO0UU1ExNCg6m8GPxTg1u7uWec64xiwpUiPXsEEU5HM8i00eC2aaoc9XcGoaQ%2BVqpPJw0o6Ji5bWBLT8mNAyrq5RMfzjfhjcAhffqnIL2yME1UcNr31fYbHOxX90GA4a%2FlsMq30W9Ord8CTZAaoivBLumbbdcRgSeNqTnlkIsE%2F7yPLINtbMA%2BRC9xad3Gs6UwieaTziafGzgcb7K2B1Yg1nAclHFLgpR22r4cczUIl2kE7uQPFMP%2Fe8MEGOqUBLnweD2nxxSd94nOX0t2hKMEztMQZ6GfJGag5r4EM7C3NShFj7JRs3i3RWTxqHEuCUKUaagucBmN1kg%2BQF7%2BL%2BQE4YMbHKctYo5LV80eqke0IPDfd5ng7RzkRzRrmJ8d13RtAp5ie2S8a3ftbXYHDvmT8YQD3dEZ6WMzTJ2lCO3PYQFIUJ38kc%2BkFdHAXH7eu%2BiSK%2BbZTVvUIfJnYrU6oHSy%2FmOJL&X-Amz-Signature=0cfe240c0bab54315e6103c4e3932eaa62538e4c9cc84b59fac286f5d7413299&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7JXXBG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQChEJrEDl1PfyZg2L8Kr5%2F85QEQSAKVe%2BUpIQ27Ou02cgIgbwyeHwDGXfihmYyYHoGV9WHdYOoe6Jw8GX2bJLny5qEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXSKo9lDMmaPPvrLyrcAxDpWw2VeGgLPVijkMr03c6pdMPNfv8SugF2xeKcHJKa6QdnBChITtzHCAD9miK%2B%2BkIlLtcbZy8Fb3%2BC31bGe1PD87tEHPkpWGgEjx9bBS1ppjj7K3HAUfRz%2FTvfgpaRUZNtRa%2FdnGk4ZlOGcaTcmP%2FOCfb6zY7Mtl%2BLMtp0JjYhiOwsb5m2VPVLk21i9JCICbmieXrUunNvXeD6pFryGsGOLu18TbRwXd6ukzr6QAYhqfWwC5BO6LPM6nOH0OTFS6EZKDHn5VUEv32jY3%2Bs9T960oreG3qGFIT6tt5UYWAFkS5PyLlGMddAXetwaGRVSyUyFGGb1QMuqY5COzmbUG1fYN6yaxUbB5134ZNUa9leH%2Fzl58bY%2FxFUoEZPyQLEbSvI0FNWzhO0UU1ExNCg6m8GPxTg1u7uWec64xiwpUiPXsEEU5HM8i00eC2aaoc9XcGoaQ%2BVqpPJw0o6Ji5bWBLT8mNAyrq5RMfzjfhjcAhffqnIL2yME1UcNr31fYbHOxX90GA4a%2FlsMq30W9Ord8CTZAaoivBLumbbdcRgSeNqTnlkIsE%2F7yPLINtbMA%2BRC9xad3Gs6UwieaTziafGzgcb7K2B1Yg1nAclHFLgpR22r4cczUIl2kE7uQPFMP%2Fe8MEGOqUBLnweD2nxxSd94nOX0t2hKMEztMQZ6GfJGag5r4EM7C3NShFj7JRs3i3RWTxqHEuCUKUaagucBmN1kg%2BQF7%2BL%2BQE4YMbHKctYo5LV80eqke0IPDfd5ng7RzkRzRrmJ8d13RtAp5ie2S8a3ftbXYHDvmT8YQD3dEZ6WMzTJ2lCO3PYQFIUJ38kc%2BkFdHAXH7eu%2BiSK%2BbZTVvUIfJnYrU6oHSy%2FmOJL&X-Amz-Signature=3bada9cbb7546f5563cbcc54bec60f8cb0173b40cb6e87f6ca6b4d641c86f898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7JXXBG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQChEJrEDl1PfyZg2L8Kr5%2F85QEQSAKVe%2BUpIQ27Ou02cgIgbwyeHwDGXfihmYyYHoGV9WHdYOoe6Jw8GX2bJLny5qEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXSKo9lDMmaPPvrLyrcAxDpWw2VeGgLPVijkMr03c6pdMPNfv8SugF2xeKcHJKa6QdnBChITtzHCAD9miK%2B%2BkIlLtcbZy8Fb3%2BC31bGe1PD87tEHPkpWGgEjx9bBS1ppjj7K3HAUfRz%2FTvfgpaRUZNtRa%2FdnGk4ZlOGcaTcmP%2FOCfb6zY7Mtl%2BLMtp0JjYhiOwsb5m2VPVLk21i9JCICbmieXrUunNvXeD6pFryGsGOLu18TbRwXd6ukzr6QAYhqfWwC5BO6LPM6nOH0OTFS6EZKDHn5VUEv32jY3%2Bs9T960oreG3qGFIT6tt5UYWAFkS5PyLlGMddAXetwaGRVSyUyFGGb1QMuqY5COzmbUG1fYN6yaxUbB5134ZNUa9leH%2Fzl58bY%2FxFUoEZPyQLEbSvI0FNWzhO0UU1ExNCg6m8GPxTg1u7uWec64xiwpUiPXsEEU5HM8i00eC2aaoc9XcGoaQ%2BVqpPJw0o6Ji5bWBLT8mNAyrq5RMfzjfhjcAhffqnIL2yME1UcNr31fYbHOxX90GA4a%2FlsMq30W9Ord8CTZAaoivBLumbbdcRgSeNqTnlkIsE%2F7yPLINtbMA%2BRC9xad3Gs6UwieaTziafGzgcb7K2B1Yg1nAclHFLgpR22r4cczUIl2kE7uQPFMP%2Fe8MEGOqUBLnweD2nxxSd94nOX0t2hKMEztMQZ6GfJGag5r4EM7C3NShFj7JRs3i3RWTxqHEuCUKUaagucBmN1kg%2BQF7%2BL%2BQE4YMbHKctYo5LV80eqke0IPDfd5ng7RzkRzRrmJ8d13RtAp5ie2S8a3ftbXYHDvmT8YQD3dEZ6WMzTJ2lCO3PYQFIUJ38kc%2BkFdHAXH7eu%2BiSK%2BbZTVvUIfJnYrU6oHSy%2FmOJL&X-Amz-Signature=fe3bd6a96b8418e2d2252ef3423ac32842bd0c0cdd016892629cb58d892fc308&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEALGNK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD%2FjuZeMBPNU5HoK%2FDXwJGbiqvk90FUp7hIPI6YoSm%2FrwIgTfY3trilapgCLMm3ZXdpR8ELoCtv0S%2B4SCWjMxGINX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwnTz2IbWfpGR84GircAxqnTfMMECjQX9zvO40cP8M%2FLfsISNbDAWGfkHZRAX5RZJhPGX4DVKEzfWLngXH6qiYJS1Q5iLvD8cq89eQRbxaZDyNqsuY%2FHMER5w019nKDsQWdirUpUNV9BV4bfmU4qfoyVkgZUVSye3S3nJYFqTR2sQnBL%2FRCGOJn%2Fn7sxOa2Xd7wZdpQeoKSKBcB37UlyAVg4%2Bkw0umiuZpHIfwWh%2FLMVt9Fo%2Bd44%2FwbZGcAwplEaAfqBtxbogS4ax5zxZMHYvAz6muut4jePMjqdUeC0CBrSu7N3FKISPzsSHhqGdlv%2BPqPbG3gTP2I%2B5MkOSVErBH4qHl4aiV%2Bw%2BuZM%2FpMJ9DjqB3DKE%2FfPC43HUZ4ak8KPc8LeuvmDLiceZ0okfmQzXKEZ8lhu%2FwhyFkLmGtgaLSxYHNc06OSaTC9vMtcdybDJy1X35xGbb%2BUtRvL9inMVcMktOL9YY38pTUO3Ic8kXPJQjnRCt9c2TQM0iV5EEzPyX65GOVGCFZSGmvIqMTDjaLpFZTXsLFzFTmHKUZ7ThfeQIAyEhDptD4RBYxvDqg8URSaDRVviHMnJHSA95aVXhdXxXLJbRMMTT1Eospj2ECJf04g7n%2BQFJi13XMFfiDcp7e4hWcsItvhsRfdMOne8MEGOqUBir%2BTwiKeJOwRkFIjS80gWo8OzoCDDRtdEXEtOUpCWZ0OjLP0RrdziktQNjW2kbDE1nhOWLvvKx%2F8Ff%2FS86YDJKyFe6LZmtIg88UozxdMQ%2FlOU8WseFd%2FeIXV3XIGeBqF5gX3Fl29DFQVSX74yKUZ%2FNPNkq%2Fiyr9%2BWg2PRADyqFvwLWXaJajs%2FgnDMvD3tp6OheGwT5aPU9UQ4boLsOPJyx5nqcZs&X-Amz-Signature=2d6e3f4823b61fa9a2567c3135f87f57411180f116534a332e24c085b83f8928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLH5ZP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXAkNJdqRG2o4uJb5b0GrAo%2B7RXkaz35RGJPQl8Wl0pgIgX7xD20Vxe%2FVAAociHIwsyP3FJr9chnPiygEZLRgnb7EqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8M9%2BZjH6rVL%2FWN1CrcA%2FeAFYfK1vgHPh5ON3stu9BDIQpVBJhXqYaVWxtpd%2FXWWvlvkmgC7euveBNvfJ2eQdhsZElo%2FQUJ8BaGYcubSMeR2BT3DXef2CztuxeoDOby3o%2FI4gEBXaZax1iU9bAhKMmeiz4xaHq%2B6sVEWWP6a7nZS4oaV0KpUDKDOYXQ%2F0I6nGraJoGpYCqQkWE%2BEEe03raIiSEISQfHY7oTqo%2BcFJgTBjQ0SnNoo2q%2BKVhXz%2FGGFlGiPRfVJktAm%2FsQjncOcQBkYqRiNGn57brf%2FEwyexTJmOVRK2k2SLiwZlpO%2BNURm3c86UCHjOA1KKRydSLeRzeXb3KZlvqEfCQBWM7NZ%2BDTgvsWk8MXedKHAQFUZH2QTuB%2FA9KLeOmVIGcQpujUc5T7ErFW2bp3T6bKeJ7GTek3V%2FMSWPXNLFxQrdYYj5ngg2DNgCWqnyx4daBj3bZ7lGFG9qbIcOEIyJ9w3b8CT1pCuiGFOQX32Rhfra65aUoY2DTFxQg1YAB6LvDVoVNbmlWHu6DwF%2Fe5mx%2FqoD7jK6%2FNtNqzKIUw4XHAxdT0SP1Dt3xIMIO4zaatB2i2OAT4dczaWzmsgdNtsJaao%2FCHypvQkM6ISuNcAG0xWKA30JV%2FcC5IGx%2Fpm0r8xGdPMPPe8MEGOqUBUG8jk7FQZVh0D8bfPkTqvbVxeKXfKWvkaFblm%2FKuu26nYKIIkdtS%2F49FnezuwjaqL5i3law1wcgJ7n1kenjjLBBHrmOrr8Cm01jhJ1Hj94OaVtsDLk2Iwje2mZunt3WkqBHn6q%2BRFRB7Pj2%2Btntc0CKifbAeKUK0Sij3M83YKTTRycGv0K5DWwI3FXg0BzVhtAKysDb08wrkOwjKqSDZZzQrT%2BU3&X-Amz-Signature=4dfcb6d3a8101135094870572cac511eecc021ea5777c57870e323e06d731378&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7JXXBG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQChEJrEDl1PfyZg2L8Kr5%2F85QEQSAKVe%2BUpIQ27Ou02cgIgbwyeHwDGXfihmYyYHoGV9WHdYOoe6Jw8GX2bJLny5qEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXSKo9lDMmaPPvrLyrcAxDpWw2VeGgLPVijkMr03c6pdMPNfv8SugF2xeKcHJKa6QdnBChITtzHCAD9miK%2B%2BkIlLtcbZy8Fb3%2BC31bGe1PD87tEHPkpWGgEjx9bBS1ppjj7K3HAUfRz%2FTvfgpaRUZNtRa%2FdnGk4ZlOGcaTcmP%2FOCfb6zY7Mtl%2BLMtp0JjYhiOwsb5m2VPVLk21i9JCICbmieXrUunNvXeD6pFryGsGOLu18TbRwXd6ukzr6QAYhqfWwC5BO6LPM6nOH0OTFS6EZKDHn5VUEv32jY3%2Bs9T960oreG3qGFIT6tt5UYWAFkS5PyLlGMddAXetwaGRVSyUyFGGb1QMuqY5COzmbUG1fYN6yaxUbB5134ZNUa9leH%2Fzl58bY%2FxFUoEZPyQLEbSvI0FNWzhO0UU1ExNCg6m8GPxTg1u7uWec64xiwpUiPXsEEU5HM8i00eC2aaoc9XcGoaQ%2BVqpPJw0o6Ji5bWBLT8mNAyrq5RMfzjfhjcAhffqnIL2yME1UcNr31fYbHOxX90GA4a%2FlsMq30W9Ord8CTZAaoivBLumbbdcRgSeNqTnlkIsE%2F7yPLINtbMA%2BRC9xad3Gs6UwieaTziafGzgcb7K2B1Yg1nAclHFLgpR22r4cczUIl2kE7uQPFMP%2Fe8MEGOqUBLnweD2nxxSd94nOX0t2hKMEztMQZ6GfJGag5r4EM7C3NShFj7JRs3i3RWTxqHEuCUKUaagucBmN1kg%2BQF7%2BL%2BQE4YMbHKctYo5LV80eqke0IPDfd5ng7RzkRzRrmJ8d13RtAp5ie2S8a3ftbXYHDvmT8YQD3dEZ6WMzTJ2lCO3PYQFIUJ38kc%2BkFdHAXH7eu%2BiSK%2BbZTVvUIfJnYrU6oHSy%2FmOJL&X-Amz-Signature=32da4f7250826b68ff790e9be2af2512ebd5cec60761a426d56ac061418a58e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
