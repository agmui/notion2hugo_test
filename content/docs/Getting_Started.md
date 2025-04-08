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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XMZPS2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8TeflU87Cv7ssJu%2FpB633GeiDZAQg%2Fhl8Dz7SCHo3zAiEAvo9G9UUmOfL4qlQE0%2BYVKicnNMtzamTEFa%2BVZxGBx4cq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDItLjbfP3qXKyRgutSrcA9Tn3zSwTxVs8yI765PhdzF6T5Ho0pFH%2FqDL04QK5phWG8KuCipeNDnx7CgZxxrqLj61tLrx2s2QONqZeWqkDac86286ydkuiPDbNyOgAphaSGXAmXwmbkNGyrLIGUpovZz1837W9ZHifwJ%2FJd2Y956Mndzh9MlX67rX%2FFdGoFCSsgj1YjFaw4Cg73DsnRgadoyhD1Xqah40fRsCY6%2B6HYgA%2B7XS4rPHcVpyZIVqEeW0%2Bzom0jgdoqBXda8qDKAa1sUcWFG8SN%2F%2BleeFiiccFQx%2FpdPa9bp1Dd%2FP0QNlQ%2FNQf4Jbq7fURvo5NDL38TQZw5iP2jQqmeJXhKA62KcIe2JQ0gWpWBIolCC6MWPSs6yDAvqFVNNzkdeWTbDygWmH1aK4YANRT%2FeF%2FaLBTPXzlyRtEx8r3B0t1um5gBUgmpzmR2L%2BVuKtWpAMW%2B%2FF%2FXYLG8UmHT0RRm569EiS8MrIPWjarcRzH5mbX48d7B9Je4aFP27F09SbnDZjNy%2FENGsfYlB6%2BuyaHrDHfnXHqHkHIcTggHYD9Ag1M7K8HaUpWWrVbtKnucclfGD8quX7Cnbyz1mViQhTxwJAhE%2F06UDEQPNpfhjTW3KS1wxSMTXs0CKzE2CHk9is2WoQSrvEMPLX1L8GOqUB2d5D8LlDbIiA3dTtygzVl9dUaPuLpeMnP1%2B3DX1Jb%2BnoRKTSP6oO6UV%2BnLrYxCmQr4dNVHYdmhxuSX%2FHfqNhKCFzyhueENsTHUxMLGA6qVQiyonVpjqIU7T6UYMoU9HKuqSb4yOE2DNPgSqJuezqaxtEGkdvY04R3cLSkG%2BKtj2Ly81TznwEmTb8sPDB4HW0ZH1lz9qq9icmZSc7cEYYJUpob6h2&X-Amz-Signature=8258989f1141f0e0c58bcc9784f68f0e2ff724f6c05d287c15857c56260606c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XMZPS2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8TeflU87Cv7ssJu%2FpB633GeiDZAQg%2Fhl8Dz7SCHo3zAiEAvo9G9UUmOfL4qlQE0%2BYVKicnNMtzamTEFa%2BVZxGBx4cq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDItLjbfP3qXKyRgutSrcA9Tn3zSwTxVs8yI765PhdzF6T5Ho0pFH%2FqDL04QK5phWG8KuCipeNDnx7CgZxxrqLj61tLrx2s2QONqZeWqkDac86286ydkuiPDbNyOgAphaSGXAmXwmbkNGyrLIGUpovZz1837W9ZHifwJ%2FJd2Y956Mndzh9MlX67rX%2FFdGoFCSsgj1YjFaw4Cg73DsnRgadoyhD1Xqah40fRsCY6%2B6HYgA%2B7XS4rPHcVpyZIVqEeW0%2Bzom0jgdoqBXda8qDKAa1sUcWFG8SN%2F%2BleeFiiccFQx%2FpdPa9bp1Dd%2FP0QNlQ%2FNQf4Jbq7fURvo5NDL38TQZw5iP2jQqmeJXhKA62KcIe2JQ0gWpWBIolCC6MWPSs6yDAvqFVNNzkdeWTbDygWmH1aK4YANRT%2FeF%2FaLBTPXzlyRtEx8r3B0t1um5gBUgmpzmR2L%2BVuKtWpAMW%2B%2FF%2FXYLG8UmHT0RRm569EiS8MrIPWjarcRzH5mbX48d7B9Je4aFP27F09SbnDZjNy%2FENGsfYlB6%2BuyaHrDHfnXHqHkHIcTggHYD9Ag1M7K8HaUpWWrVbtKnucclfGD8quX7Cnbyz1mViQhTxwJAhE%2F06UDEQPNpfhjTW3KS1wxSMTXs0CKzE2CHk9is2WoQSrvEMPLX1L8GOqUB2d5D8LlDbIiA3dTtygzVl9dUaPuLpeMnP1%2B3DX1Jb%2BnoRKTSP6oO6UV%2BnLrYxCmQr4dNVHYdmhxuSX%2FHfqNhKCFzyhueENsTHUxMLGA6qVQiyonVpjqIU7T6UYMoU9HKuqSb4yOE2DNPgSqJuezqaxtEGkdvY04R3cLSkG%2BKtj2Ly81TznwEmTb8sPDB4HW0ZH1lz9qq9icmZSc7cEYYJUpob6h2&X-Amz-Signature=32cc70f927846c793ef1542a397de928f3fa247039820dd2a7641cdb91cf234d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TNLWBX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9AnM14cFFeCJzs%2Fr%2BILahN6CiudRMPnruihy3a%2FFuqAiEA24Z8YWBIJdp5L9ASMBWJ7mHSf0VkF8dWPnuFkio26iUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF0ZTqenZXy5hYs8ByrcA9%2FRO1vL1YwQSDHJED9a1cgQAd2UGJysYOmfTm0tocAcXSvbx6Z7wtSaAjC5FgaAK3YBbxV%2F94egEIMGANlvq27Nevx1SEUNjo8CbBcyIYPinnGyudxoHtvAx4F9s0gP3njdoJuO2FP9Pm19naJ52IAKdhW7vJI6eO6Do77%2FedAZdqL%2BhVbvcXYcCOsTkIkgkz9%2B3jZO%2FaD5QgadcPwyvMwHGvYzfzpMTqWFHVVk9dXal53XeJmYUFeNHcrpEyla16U4LAu4eofh6YMgNjfAQQB1usZyV3HLa3Dzg5QJ7dMzSG%2BbTAi9xeHhSLZbsZiz5U7pfSdkyTT77JjQi%2FEUdah6IHXJ%2F3ojnkumboc9GTNITiwZpO0TP%2FskoRKitVYS%2F8zh8G2jCaJJ2afFll7NLPWi8PmtEXypx6ga%2BdVbdUBNCDAKiaMKd1Zt%2BytCK00EtW12qeUQA0TJMIsifLg5RvnQeFCSP41XPgjk50K4zvs8jbqAoP9AuHUNQLd%2B5GC4SGEJ8LJBgeptzdfUgM7shMfIa1fn0LDSgNndxbD6JkZa7BWQROPiphItpnVQNkmgkmFCRoPNZeLiHINl7lHP%2B9opDYdHbBWxeooYNwQBBOECsvSBlhLfmztb8ecLMPvX1L8GOqUBlG36NVSbO%2FPHBoL%2BBV6qKHIQzevNHSC%2FNYKBC5FIsnCPlmY6J%2BPkIm%2BoLKCQcJ8hFYpAuS2r6FzDBmBEmCTS%2BIQr1%2FzZtnj8WjrzXpgKP3dcReaAU1XHXRJ7ZlF1DNW1u%2B5%2FhZCiK1aAdgEBoWhb%2B60YfIHXfDzoe43N0e4bkRvLEUCg2gpAvHcdw0NuN8TaDFsOVhPJn4zfyZxm%2FNvDLcRNPtEI&X-Amz-Signature=c5322b5719541d0a577c7d0ccd007acba4acbdbe7276570db24221252d83695f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD3CMUES%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BWgNjAgg1KCNQxuQRerBm0CNurBFt56AFZZd4mKUNgIgONlzQMPvUXcaeL4ndQ1%2F5pz4mHi2eOyLoplfZUKoA%2FAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP7tewBKBv9ZlUzlxSrcA9EtXHvKHtw9iTmtAWoKRJFOEBrWkLXYFAy5cyfHFW1WMDGCukD3VkSIqecGTdzjsOoPPwM%2BF7X%2FWZVbq85K1u%2F%2F2L6Ea4jql6ZcmLGGWSezqr6WQAwhiUtT7epIDp0rsXCpBeRN35oP04u85XvwZ9bczlMX70va78zDmsDaUmJPrE%2B0IMCFTtPP9Q%2FRk5V3Azi%2FKBnuuyyWUntnC0zeKBRtD9LnEmhF73tc9qqCwZYbTd%2Fx3gU7v8gfl232ZHcaQGjjjQCAvcxzaK7o0uI2xY2WBfh9rH%2BEey%2FUHJd3guQIeT1%2BMNgyym4a%2BUmljaY4HJFf9Ye0wrO%2BI7ooXa9WEWPxZF2XJanUuozv80zu5tq3%2FbR587LmOp%2FW7KzVSfjZV4c%2BZqGMXBPIDVOce1m4905yDbUAsCuedw8kF2hjGVjmDVCrWKdW3BUJp1MNhGDzET3tDrEKDNcZ5wfYgYhAQ6bW%2F4FfO1pKvtZLIqnm0Yh1lE1MdAtJ5rwH6rIYA%2FBaH%2BMzmVcsbGZ82tz%2Bq%2Bs4yyIFMNJbYaswHRIv8rj9kjOkGftbFW22wOcVOyUtzWYDHvKfDddyjDjrlU%2FRmq5sMjnPB8T496j9LOV6kGrtmpFUFwNuBcBiHd%2BQS2UuMMXY1L8GOqUBYYoiOoYdnxKNX%2FrX1mjHd5Wxxa%2BW4EMWHQ0v6OplxC8vhJxEQARGOZYQmIRsMiXSlhnFKSqRDxWyt%2BQUf5TERqaevze1zSj9SR8Q8UYqrXKj8oETrpQqdcPleRw%2F07Qt2Rubqx%2FihIIpNNHi59zaOJS9YOJgE6XDwwclOpJ01sMM6bAW1Ah8IFc2lc%2BSRyy%2BYaquOrnfOaNspSMWhWPVyNuHo3Ib&X-Amz-Signature=b4bb0f2b5979161797c5165c9bcb644c6e08b5f17389a3cb97e39a47fb4c2de1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XMZPS2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8TeflU87Cv7ssJu%2FpB633GeiDZAQg%2Fhl8Dz7SCHo3zAiEAvo9G9UUmOfL4qlQE0%2BYVKicnNMtzamTEFa%2BVZxGBx4cq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDItLjbfP3qXKyRgutSrcA9Tn3zSwTxVs8yI765PhdzF6T5Ho0pFH%2FqDL04QK5phWG8KuCipeNDnx7CgZxxrqLj61tLrx2s2QONqZeWqkDac86286ydkuiPDbNyOgAphaSGXAmXwmbkNGyrLIGUpovZz1837W9ZHifwJ%2FJd2Y956Mndzh9MlX67rX%2FFdGoFCSsgj1YjFaw4Cg73DsnRgadoyhD1Xqah40fRsCY6%2B6HYgA%2B7XS4rPHcVpyZIVqEeW0%2Bzom0jgdoqBXda8qDKAa1sUcWFG8SN%2F%2BleeFiiccFQx%2FpdPa9bp1Dd%2FP0QNlQ%2FNQf4Jbq7fURvo5NDL38TQZw5iP2jQqmeJXhKA62KcIe2JQ0gWpWBIolCC6MWPSs6yDAvqFVNNzkdeWTbDygWmH1aK4YANRT%2FeF%2FaLBTPXzlyRtEx8r3B0t1um5gBUgmpzmR2L%2BVuKtWpAMW%2B%2FF%2FXYLG8UmHT0RRm569EiS8MrIPWjarcRzH5mbX48d7B9Je4aFP27F09SbnDZjNy%2FENGsfYlB6%2BuyaHrDHfnXHqHkHIcTggHYD9Ag1M7K8HaUpWWrVbtKnucclfGD8quX7Cnbyz1mViQhTxwJAhE%2F06UDEQPNpfhjTW3KS1wxSMTXs0CKzE2CHk9is2WoQSrvEMPLX1L8GOqUB2d5D8LlDbIiA3dTtygzVl9dUaPuLpeMnP1%2B3DX1Jb%2BnoRKTSP6oO6UV%2BnLrYxCmQr4dNVHYdmhxuSX%2FHfqNhKCFzyhueENsTHUxMLGA6qVQiyonVpjqIU7T6UYMoU9HKuqSb4yOE2DNPgSqJuezqaxtEGkdvY04R3cLSkG%2BKtj2Ly81TznwEmTb8sPDB4HW0ZH1lz9qq9icmZSc7cEYYJUpob6h2&X-Amz-Signature=f14a82a6d0cf13690e9b12ea1068d3605cfe6aac4d13b3a2980ee11fefd7a514&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
