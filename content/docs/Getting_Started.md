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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDH3YWN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMkUN7yZ%2BFGd4TKjyUC%2FIeL194WUECB2HkorzyKmU%2BAiEAyny88Th2nO9zRjrBd7MlOemmuc%2BqngODNsVjZYJqJIgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgtcML8E7Veq2AxISrcA6V6l3EvqPRlydcy3F%2BRjxvdU%2BUXEIcbqGUn5Ye%2FPPPwYAzmZGQ4a%2Bd6Cm0twGuaciZf7O%2FIALet4iC9w6B9BdkqFgiCv8fWPiPF3yOckI5G7R%2FdCkAJF3BxS0kOx%2BUCfs2x8eaKRlOtcH89YJD%2Bkda6KV2%2FWdL7dsZBJM%2Bz6v0iYE5Y4Te0yUItZeHLpOhttbc5D7L6eEQJUEJGr7N9JeEJAzkQgsTRqxem4iQZ4IugDZxhcAlE5F7FwDzjcYpdIbbbJtooRB2duowPJ992PL6JalW6QvUpMqEJYXQXHtOeKjs4J4Vrf8ryQS31anLY6WMwmae9QWOTxVfL%2B7sv6liugvAqBBNPGD4u%2BPt4Kzaq1IUCcgFDhgz8jPRDCZAt%2F2yZxP%2BM2aApbs%2FIWOPWGdubQKIs7vnLgpwEntG5x0yxgOOBgfXxi3KW2bSV4qxlhULb17bWFAKFSA9YvihAhzgsgLgyorerSdUTmy6FAk0UQG%2F16oL8bnvUdy9MmVMWfiOFN%2BssBBjkEsMQzM3b3gV9E0w4pU13c66bU%2B%2B3U2PJ5KGFGKZpm1Mk3DZsB%2BRRQFdl8QwfscH9mCQD34uApbMI9kX78b6MtM2Mpj0zog2khKMfetpTQqjRu0lQMIbXm8IGOqUBTu1yit1dLPMqIkFDj5myURKnA4TvIOJUT3zJH6sNzI4FSn9bO%2FonhhWF8zMIVKHn7fWVR4Y9Mrkv7TU%2FqEAcSJEXmRTIc9OuO7dZxDd%2Bnc92mpA3YKC9vOYCdXQcjq4GXBtllNcFSp%2BiwAkXf4rc5OmqQqnPgedokg8mXqV1RAUcHIjLW1GpglAlY4Pn4kpoZGMwqHGkP5si%2F1Bl57c3w8Bwpj51&X-Amz-Signature=2ed1e887d0d67ce39d420f5ef893532292a24c2b92b0e5188257af291ab11360&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDH3YWN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMkUN7yZ%2BFGd4TKjyUC%2FIeL194WUECB2HkorzyKmU%2BAiEAyny88Th2nO9zRjrBd7MlOemmuc%2BqngODNsVjZYJqJIgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgtcML8E7Veq2AxISrcA6V6l3EvqPRlydcy3F%2BRjxvdU%2BUXEIcbqGUn5Ye%2FPPPwYAzmZGQ4a%2Bd6Cm0twGuaciZf7O%2FIALet4iC9w6B9BdkqFgiCv8fWPiPF3yOckI5G7R%2FdCkAJF3BxS0kOx%2BUCfs2x8eaKRlOtcH89YJD%2Bkda6KV2%2FWdL7dsZBJM%2Bz6v0iYE5Y4Te0yUItZeHLpOhttbc5D7L6eEQJUEJGr7N9JeEJAzkQgsTRqxem4iQZ4IugDZxhcAlE5F7FwDzjcYpdIbbbJtooRB2duowPJ992PL6JalW6QvUpMqEJYXQXHtOeKjs4J4Vrf8ryQS31anLY6WMwmae9QWOTxVfL%2B7sv6liugvAqBBNPGD4u%2BPt4Kzaq1IUCcgFDhgz8jPRDCZAt%2F2yZxP%2BM2aApbs%2FIWOPWGdubQKIs7vnLgpwEntG5x0yxgOOBgfXxi3KW2bSV4qxlhULb17bWFAKFSA9YvihAhzgsgLgyorerSdUTmy6FAk0UQG%2F16oL8bnvUdy9MmVMWfiOFN%2BssBBjkEsMQzM3b3gV9E0w4pU13c66bU%2B%2B3U2PJ5KGFGKZpm1Mk3DZsB%2BRRQFdl8QwfscH9mCQD34uApbMI9kX78b6MtM2Mpj0zog2khKMfetpTQqjRu0lQMIbXm8IGOqUBTu1yit1dLPMqIkFDj5myURKnA4TvIOJUT3zJH6sNzI4FSn9bO%2FonhhWF8zMIVKHn7fWVR4Y9Mrkv7TU%2FqEAcSJEXmRTIc9OuO7dZxDd%2Bnc92mpA3YKC9vOYCdXQcjq4GXBtllNcFSp%2BiwAkXf4rc5OmqQqnPgedokg8mXqV1RAUcHIjLW1GpglAlY4Pn4kpoZGMwqHGkP5si%2F1Bl57c3w8Bwpj51&X-Amz-Signature=792707b92e976779c9d021152e5aef7bca2be068cec8ef6705bb4abc8c9e6974&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDH3YWN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMkUN7yZ%2BFGd4TKjyUC%2FIeL194WUECB2HkorzyKmU%2BAiEAyny88Th2nO9zRjrBd7MlOemmuc%2BqngODNsVjZYJqJIgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgtcML8E7Veq2AxISrcA6V6l3EvqPRlydcy3F%2BRjxvdU%2BUXEIcbqGUn5Ye%2FPPPwYAzmZGQ4a%2Bd6Cm0twGuaciZf7O%2FIALet4iC9w6B9BdkqFgiCv8fWPiPF3yOckI5G7R%2FdCkAJF3BxS0kOx%2BUCfs2x8eaKRlOtcH89YJD%2Bkda6KV2%2FWdL7dsZBJM%2Bz6v0iYE5Y4Te0yUItZeHLpOhttbc5D7L6eEQJUEJGr7N9JeEJAzkQgsTRqxem4iQZ4IugDZxhcAlE5F7FwDzjcYpdIbbbJtooRB2duowPJ992PL6JalW6QvUpMqEJYXQXHtOeKjs4J4Vrf8ryQS31anLY6WMwmae9QWOTxVfL%2B7sv6liugvAqBBNPGD4u%2BPt4Kzaq1IUCcgFDhgz8jPRDCZAt%2F2yZxP%2BM2aApbs%2FIWOPWGdubQKIs7vnLgpwEntG5x0yxgOOBgfXxi3KW2bSV4qxlhULb17bWFAKFSA9YvihAhzgsgLgyorerSdUTmy6FAk0UQG%2F16oL8bnvUdy9MmVMWfiOFN%2BssBBjkEsMQzM3b3gV9E0w4pU13c66bU%2B%2B3U2PJ5KGFGKZpm1Mk3DZsB%2BRRQFdl8QwfscH9mCQD34uApbMI9kX78b6MtM2Mpj0zog2khKMfetpTQqjRu0lQMIbXm8IGOqUBTu1yit1dLPMqIkFDj5myURKnA4TvIOJUT3zJH6sNzI4FSn9bO%2FonhhWF8zMIVKHn7fWVR4Y9Mrkv7TU%2FqEAcSJEXmRTIc9OuO7dZxDd%2Bnc92mpA3YKC9vOYCdXQcjq4GXBtllNcFSp%2BiwAkXf4rc5OmqQqnPgedokg8mXqV1RAUcHIjLW1GpglAlY4Pn4kpoZGMwqHGkP5si%2F1Bl57c3w8Bwpj51&X-Amz-Signature=9199d488115dda0c3cb87da8d3f9aa57c70d70d2f9b5c8dcfe434cb7d02f203e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHMX6MY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLdFqf3dKCZX8pASgHvDj7JxZdpA%2FXmncaORhL%2BXHpVAiEAzykjNibEWO9gmeDPrxl31FawCBSOkRp191xoxtvWiLsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2ggANE8u6Sn1c1QyrcAyVmUdv6GTWuAxcLD987zWBhZzcqOfvF0KKaFTWcgwSqX%2B0VjitF4ls4731LHsR%2B%2B6CxI4Ul4b9JJuIRk3EXkd3nQvrwA5ua9o0LKM2N6ia9shZ3A6%2Fvk7roKHlHbfPdKyyzgb4NsyMc9eXyuGYsOT%2BB%2Ba72pzfCOcECw2RyQZvDvO3DXT4l7bceS9k4dBRagHcSrk1e14NJjb0JUGKAXRYb86ZCze8EEVFK4jx7WVecbOJZHj%2F08euNhS3ek%2Fyb6u74rBZnfQBdr%2FRFbJr%2BpWDwanuERJ%2BGi95b84K9SZ8mnzaqIFjFPbucwAXgXi129BtsGl13g0VFF9s3Tm9SF33iGkXdRNMwFCsRSy%2FOn%2FJz1qe2W%2BQVYqukHUFv9AXi%2FrzcaOx05jotyBs023LfWRJCtWCSH9o6ipPHLm2LPFhFuSFsPPUplQpJsE%2B8tHwYwYtVdoXptOZQ7jy3Sm9PprsV1zKWMbyE32BzHTow3ca6nlalvG4gPX77uJWxh5%2FrrKn9ojFL8Yj2lUVZ5%2FBUsW2UPdX5IidT9dSQwwIuNEXVeZzJ2SsoV4yvOjzgnhUCldqkSdFtZRoi2bgON7K7Jy%2BCqIcJupXMjecq3HPmewHUv5c3IvnxTLFXqqqzMLjXm8IGOqUB8zO90TBxzmmjHyXWVb%2BcEGWZ%2BXe8cDYXssC9xofc0SU32rETZP4D91XWuzZcZ1cDftfK07qEp7%2FEk%2FPcBOKh9gXKm8NV1FNJC1ONungHTkLeE74a1gUe33EzLvFUDaXgCamQyUOZqaMNFbp1YPFk1V3wlWC9suELAhgZ70ge8y90p7RMGA%2BhcSurgl7YCbNnyLEf5xwg11q%2Bhb8ac0ZTsjYMWZz%2F&X-Amz-Signature=31d0a80b45b875e9edcb2635a0faef1d27d32820c2158942552948d3de3b6906&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ32QCK3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRLbEueIn7Ex%2BaaVvOfNeblA6JaKDSGOqp8YnwRyyVnAiBHvqmpeV7eWvolrr5XyNTMKet4Pv5RIrcdNOYuhY4VhSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkOC5QjsuaRyxJtYhKtwD2dEaKKlpG6BfImuYiEXmTbXlAi4AfZO2%2BfHVT1OSsKFJofeFbOzAc6iAl0Rn9OPDLuq8jPvn75P0rkcBoOMIT4N7rwjGzedXDJ9YfIsKGB2bhp7d0ZUlSyeOdE1q3AqQWHTWMqtOsa632mdX038RTQUtY3K53441UJlMxMC%2Fc8nkjkWv57UFT1obda8YgBfhqKhndZQl0FoloOdrBndj4k%2FORA0%2FCRbfDLoJ1dZJqnYFztE84mm5NR4DGMI2TyGDbTGjF8%2FEgGkEVfS%2FNZDEptNN1qW63uWDBDZhQUUhQ%2Fg7009Qnpw4Y%2B27KEMG%2B57Hi%2FXzouUlCyspj0%2B3ZGV68pzFeMBpfdnirNYr22nn4EVRZhQ19XMZM3eJAtPIo%2BmziF%2BukWEQ8j74BZ52N%2FTYJC4TAUyKytaTphI4XPK5YTLgHVgnPWx1ROBruMt%2BrtiTtKh%2Fp%2BKQXZqNXzw3WHeHnHwI9JV%2FdGB1LpXlWzLaiNhiYk8a7sQB6IUKiUgx3qUZ91wegEJauZfkxr4uRUoH0hZMYoiMxOaJIufhjvjEXLgyCCJK5IpKuUh2nUWUxLmcHiTiVHZ4X1HDxCPiwTQz9Bjxz%2B0mrQVDxIP1CJRqyO5J6UiwUrHnBDCc4dkwstabwgY6pgF5Px6ZFo1%2Bl3gnMubg1Uz0MoOx2TnQWtGIVQRwKmKzcJ1hlccnuDksOgeuS7teM1GZRXQguCHdn83i1rTdwmsXI7yxzUS%2FXw6EaewjfOoeqH8%2F%2FLc1LLmPbgrSocN%2B8fYz9wpxqv3eMu1VtVMxCFqg9DGZGb21%2FdwdobOIyc8Ks0Vz6%2BOOot8zP48cadsUL8j214WxSEXksR1dLt5oyI4hYl9iC3nG&X-Amz-Signature=776ccb5179bd1904468f09818d886403c7b4ca675372764b3efea7cebb81929f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDH3YWN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMkUN7yZ%2BFGd4TKjyUC%2FIeL194WUECB2HkorzyKmU%2BAiEAyny88Th2nO9zRjrBd7MlOemmuc%2BqngODNsVjZYJqJIgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgtcML8E7Veq2AxISrcA6V6l3EvqPRlydcy3F%2BRjxvdU%2BUXEIcbqGUn5Ye%2FPPPwYAzmZGQ4a%2Bd6Cm0twGuaciZf7O%2FIALet4iC9w6B9BdkqFgiCv8fWPiPF3yOckI5G7R%2FdCkAJF3BxS0kOx%2BUCfs2x8eaKRlOtcH89YJD%2Bkda6KV2%2FWdL7dsZBJM%2Bz6v0iYE5Y4Te0yUItZeHLpOhttbc5D7L6eEQJUEJGr7N9JeEJAzkQgsTRqxem4iQZ4IugDZxhcAlE5F7FwDzjcYpdIbbbJtooRB2duowPJ992PL6JalW6QvUpMqEJYXQXHtOeKjs4J4Vrf8ryQS31anLY6WMwmae9QWOTxVfL%2B7sv6liugvAqBBNPGD4u%2BPt4Kzaq1IUCcgFDhgz8jPRDCZAt%2F2yZxP%2BM2aApbs%2FIWOPWGdubQKIs7vnLgpwEntG5x0yxgOOBgfXxi3KW2bSV4qxlhULb17bWFAKFSA9YvihAhzgsgLgyorerSdUTmy6FAk0UQG%2F16oL8bnvUdy9MmVMWfiOFN%2BssBBjkEsMQzM3b3gV9E0w4pU13c66bU%2B%2B3U2PJ5KGFGKZpm1Mk3DZsB%2BRRQFdl8QwfscH9mCQD34uApbMI9kX78b6MtM2Mpj0zog2khKMfetpTQqjRu0lQMIbXm8IGOqUBTu1yit1dLPMqIkFDj5myURKnA4TvIOJUT3zJH6sNzI4FSn9bO%2FonhhWF8zMIVKHn7fWVR4Y9Mrkv7TU%2FqEAcSJEXmRTIc9OuO7dZxDd%2Bnc92mpA3YKC9vOYCdXQcjq4GXBtllNcFSp%2BiwAkXf4rc5OmqQqnPgedokg8mXqV1RAUcHIjLW1GpglAlY4Pn4kpoZGMwqHGkP5si%2F1Bl57c3w8Bwpj51&X-Amz-Signature=1813bdd3efd155b1aa4e0a684ec9f2cabae43707290254a499a14ad3998d9ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
