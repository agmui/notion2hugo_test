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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=83c73e31a114e5e85308e4f05a899392d8973d961a1cd1d00c2aafefdbba2df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=f3a8c44cb34565858fe8031122a0d9a230d10ca19a1b79aef1136398fc3ef159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=f2802b8782f4c5f395bc5f5aec9c2792849d8575075ebe9a360e876f709d4eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZS5SYW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICinGFvfejkXwa%2BkDJ7v9lDbV770NN%2BpTIBEqLzmK1J1AiEA3%2BVQ9IxCdhx0uK8Hxng9ERHeO4naPvmH2GX1ywckqP0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPpEwDNLErC8wOVgfyrcA6kbXbSE3eia8FwvmH7RhImBuTeg5TYUom0Qgbga4c%2FfQxbQMkebrjeqnXLlB%2BuHCJN5Mp22Ul2DoaoB9%2BXUPfmkmgpA3Kq2m8%2BZvBD2qS2159PVthKDF%2F%2FPDQtUfJWRmrgPnPN3N6XQ0yTTZ1tM1rcflS1t11qDV4zXEGwZwQ9x9nI0FMZ%2BdQpigEtGhqlUzD3bp4vxguvBhlmzZayaO1moRWa%2Bb3WYDfO8%2B%2FLJX6vpRW366%2FM0VIQN8pzi8bKUt7LP5mUmPOQB1imgi4HQ36hH2sxZbc6XKTck4d9ETRodpCVQpzAQTJKn6AZUXfj4wyCx3NoNq%2FNhHt8byL7bsXgbZjSH0YzID0PEqVwHnt6TcR9Kz9lV%2FQf6gisyLXPSFC81bf9RlYzdr0uX9yTVSVFj4C8gaTfA1zt8QZJAdQDmBvQPKH2Lv6YFucWtyZvzleRC7%2BWS7ZPW4w1ybSYfPYT%2BmHbzZKc0t%2FnMICJRf3vHj4lj%2BcSH2Iq9GWDlJzB69NbZ7X59eUJYBrtCHCOLmcBUPHKHBNb8VNoh1hgBTMvK8HYciMZOD3nre%2Fry%2FTTop15ezz%2FReld0bAOoxy8ckF94X2w2HxfSu3YLz%2FF8tVMjD53ixDZ1sXBuKkqwMODOvMIGOqUBnJB%2BcBIBfgrbHYVzIAn4BqOQr3SeVMMWPmluduZrp2LKLZRcxaE%2BnT8kTn4VlkhpeXqwGmdpkgWA29sTatZgALLt7R47KjNoT02xdL%2Bhn6cA0rknNgUCVnuQ3yTzNSQdOzBDTuP1bg8lk4oVM3x%2BRkpbK5LeuGnYXUczXWyHDsL8kmyLCEzOeL7dHYVKQGaIrQWnwxItzvTMhPv%2Fx3Zwpd6btAOn&X-Amz-Signature=6ad610c94ccdb1c70a1df65fa0f46f571f5b1c26a5d9c8195a5a23c5388087ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYWH4UU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDooKt5l80efWcRnfqSgzaVJ8MbAkd4NBZ1cxoahCTW%2FgIgHDHioHacxIukAiITe4DaeZwFldDpr8%2FkKJnyAv71YTsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAKDpZFcYpHsyTNEwCrcA91bkAGJJ6WpB9kvVtQ3%2FfcW8oBZ7wjqZtZMJzTnBpDZABHUT2gAxbC8JZqded2w7W1HMuZYH3aYkA9nAQQSIRZYZAFRZ%2BhALKPHK%2Bcsi9GJx74grq6qlvxiJwgOi6CV9ven9%2BQklpYSdk5ntqfmLmLZ8NBanVLUpN8A9vH2tW%2BBVfE3hQtJemFUpVtq%2FnwSf96tbWNwDRj3z3dBh9T2QXhTvEIBInYLWQVkfP6p3yXHHoL1XPyayRFNeDzotLTbElxC8q6UHNfjcZzy7XUUzv2bxXC%2BESairkExPV0a8vWMz2vaEW3qHNVaPVMQE%2FkwoYniEbnjbknzktfGs%2FlXN3KxPqoABhLjyDPLgVqoZVbvGxptl2xJ57lFOhAkYIMoW7A3fb3AvU86CrDzyCbp26LGZYovXCkxYAoziSVP6Mywm7KOWixb0JF1iPKjcO97LAGZNIffjdZwxcmwk%2B1IDQWGOKhIhu4TIS3uhGoPicneNkTTcNCv0chYnF48QaQ1j0oCQWv0OzA5ESHACedZfVfIcKLg4lKuaBeA8A%2FxjQsEKpf4W0B1Kf2cWVltnnCsrlqEx%2Bx62pofHCcK126s6G0FyCJtCJ4ggrWEKpGy89zWPtyg0ZPi0IEvkebCMMHOvMIGOqUBL0QhOfjKWYTVulcTNEbJENNMXHpuWsUNZvq1JQRAm4SzVEw6JBbuS6QNPOvAZo5MUQXJW4sQb2Zu1K7dEo%2FtrW0BUV15OM81%2FGj5d9ZrOH8BZum4JEe8uKN5W%2B%2FkBTfWYt50%2BoCE%2BNH0cKGTKMUvJ5PB0avUV2JD%2FUjRGKB4IpMZQhSbs29O8jPmpcJxrGsYwyrZqwnmiCZaDnADjJFtBAqausxy&X-Amz-Signature=cfed071487908b97fba925bfb18264720fbc72e0e4006c7d050b96053fdd6572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=4f5c7e10b202cf8999bffb0e1f98b1869e7f7a7604134153b1a5fb10582cb750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
