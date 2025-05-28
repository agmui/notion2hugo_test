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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64VU5R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpxQz%2FiGsSVQJCGJM2WsmwDv5dOFay1gwuXOmkLH5EuAiAjbQ2fl7DMqc3ftMLIL%2BPJEW2pF34%2Fqk6S13FyqeWBhCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ51d5vMvmvTIGA7JKtwDvRkPsRFEiW7y3E9nEoZaUHcD2t3FttbRhjHj0%2FEwdCDdav1%2BNTNPKXWSnpeIbeqIRqz%2BJ9bKQALXhbYO3TGTc3QvMwe9tvg7LR1Mjd%2F23FI%2BN2TF2o%2BwV0kE19%2BykJcTGTxVbd1O86ldDhYnuVLzbCisUYXoXBbchqA7p1zzNWLBiIsWdAWCvr4JPWrvaGOQSUE07TnN%2BeXA2ewBkKXctly2ZxdBBsoCzxdLWXfWvdHZnx%2BSxzjhj85k4sbji9CL40VbwAVsDRMoi6IElezwKWE7DVNSqsrzkQ8m2OMFz2cNvwwdxE9%2FNaVQRLYDp8QD8%2BNA1ZXp%2F18eCN4Ys%2FgWd%2Bt0W3DfacQtzqI18O%2F0WtjRUxZ7kZuG0Dn%2B3webj7y2zGGOXqjIO2bdSYfkd5pZfrn%2B1lng1ApOS020nbmKEA13jeZ%2BraTeIHqGoQ65Z14VlIAXBXuLrO88oKR92W4uCb%2FiEId9s%2BZuxNVv%2BqJMEr4cfX02RFbwtGksvZErv4z%2BM1hRL5EMBkEALo2V2kl2uB85N2qbLH4HNeENlxh6Tb9nd3dJvsWxixWK4jyf9Ia46bU4%2FH09F4pjm2vzk2vb6oZcdbTumi4VMCvvWrNdaK%2FwLFaUR0gJkwhvUN0w%2BJPcwQY6pgH2XNFdM5PGJ9L6CTShX7ZZ9C3q%2FntQVJuW96oAK8%2B8XwLSRBO7vgziZKT0zR5PQ5LrjCL0okJQ3i59yl7hG4wMZ0sGRJloyGkk8cdBBr05%2FalhQMi6vz3OfMEF8GYXB5PlLZFEPvUITqh%2BVuX9ZhkEXucmTTFkHZP%2FFHTFHxWDQGTMdLtVlwSZZmH%2Bn5gJgsAnu9hSrMOVBp5AiaTHRb%2Bvcv68wLYN&X-Amz-Signature=6502fc387b0f23801e64dab7ff88f6adde9dd211135aab4cf1b154e23acc5f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64VU5R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpxQz%2FiGsSVQJCGJM2WsmwDv5dOFay1gwuXOmkLH5EuAiAjbQ2fl7DMqc3ftMLIL%2BPJEW2pF34%2Fqk6S13FyqeWBhCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ51d5vMvmvTIGA7JKtwDvRkPsRFEiW7y3E9nEoZaUHcD2t3FttbRhjHj0%2FEwdCDdav1%2BNTNPKXWSnpeIbeqIRqz%2BJ9bKQALXhbYO3TGTc3QvMwe9tvg7LR1Mjd%2F23FI%2BN2TF2o%2BwV0kE19%2BykJcTGTxVbd1O86ldDhYnuVLzbCisUYXoXBbchqA7p1zzNWLBiIsWdAWCvr4JPWrvaGOQSUE07TnN%2BeXA2ewBkKXctly2ZxdBBsoCzxdLWXfWvdHZnx%2BSxzjhj85k4sbji9CL40VbwAVsDRMoi6IElezwKWE7DVNSqsrzkQ8m2OMFz2cNvwwdxE9%2FNaVQRLYDp8QD8%2BNA1ZXp%2F18eCN4Ys%2FgWd%2Bt0W3DfacQtzqI18O%2F0WtjRUxZ7kZuG0Dn%2B3webj7y2zGGOXqjIO2bdSYfkd5pZfrn%2B1lng1ApOS020nbmKEA13jeZ%2BraTeIHqGoQ65Z14VlIAXBXuLrO88oKR92W4uCb%2FiEId9s%2BZuxNVv%2BqJMEr4cfX02RFbwtGksvZErv4z%2BM1hRL5EMBkEALo2V2kl2uB85N2qbLH4HNeENlxh6Tb9nd3dJvsWxixWK4jyf9Ia46bU4%2FH09F4pjm2vzk2vb6oZcdbTumi4VMCvvWrNdaK%2FwLFaUR0gJkwhvUN0w%2BJPcwQY6pgH2XNFdM5PGJ9L6CTShX7ZZ9C3q%2FntQVJuW96oAK8%2B8XwLSRBO7vgziZKT0zR5PQ5LrjCL0okJQ3i59yl7hG4wMZ0sGRJloyGkk8cdBBr05%2FalhQMi6vz3OfMEF8GYXB5PlLZFEPvUITqh%2BVuX9ZhkEXucmTTFkHZP%2FFHTFHxWDQGTMdLtVlwSZZmH%2Bn5gJgsAnu9hSrMOVBp5AiaTHRb%2Bvcv68wLYN&X-Amz-Signature=f34b1a0020d14bccb2e2eb050f4974f018a8601965be0856ad9f26b42e5ae41b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64VU5R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpxQz%2FiGsSVQJCGJM2WsmwDv5dOFay1gwuXOmkLH5EuAiAjbQ2fl7DMqc3ftMLIL%2BPJEW2pF34%2Fqk6S13FyqeWBhCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ51d5vMvmvTIGA7JKtwDvRkPsRFEiW7y3E9nEoZaUHcD2t3FttbRhjHj0%2FEwdCDdav1%2BNTNPKXWSnpeIbeqIRqz%2BJ9bKQALXhbYO3TGTc3QvMwe9tvg7LR1Mjd%2F23FI%2BN2TF2o%2BwV0kE19%2BykJcTGTxVbd1O86ldDhYnuVLzbCisUYXoXBbchqA7p1zzNWLBiIsWdAWCvr4JPWrvaGOQSUE07TnN%2BeXA2ewBkKXctly2ZxdBBsoCzxdLWXfWvdHZnx%2BSxzjhj85k4sbji9CL40VbwAVsDRMoi6IElezwKWE7DVNSqsrzkQ8m2OMFz2cNvwwdxE9%2FNaVQRLYDp8QD8%2BNA1ZXp%2F18eCN4Ys%2FgWd%2Bt0W3DfacQtzqI18O%2F0WtjRUxZ7kZuG0Dn%2B3webj7y2zGGOXqjIO2bdSYfkd5pZfrn%2B1lng1ApOS020nbmKEA13jeZ%2BraTeIHqGoQ65Z14VlIAXBXuLrO88oKR92W4uCb%2FiEId9s%2BZuxNVv%2BqJMEr4cfX02RFbwtGksvZErv4z%2BM1hRL5EMBkEALo2V2kl2uB85N2qbLH4HNeENlxh6Tb9nd3dJvsWxixWK4jyf9Ia46bU4%2FH09F4pjm2vzk2vb6oZcdbTumi4VMCvvWrNdaK%2FwLFaUR0gJkwhvUN0w%2BJPcwQY6pgH2XNFdM5PGJ9L6CTShX7ZZ9C3q%2FntQVJuW96oAK8%2B8XwLSRBO7vgziZKT0zR5PQ5LrjCL0okJQ3i59yl7hG4wMZ0sGRJloyGkk8cdBBr05%2FalhQMi6vz3OfMEF8GYXB5PlLZFEPvUITqh%2BVuX9ZhkEXucmTTFkHZP%2FFHTFHxWDQGTMdLtVlwSZZmH%2Bn5gJgsAnu9hSrMOVBp5AiaTHRb%2Bvcv68wLYN&X-Amz-Signature=06436a2f9fa0e3de6dac48c80f97aa22597e0efd0d70116c7078ae2ccec34d36&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2NIPTZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWqeLOw301Ai7L3nvzLnIJeVmkRK09uc80NaA054ULuwIgPXDyal%2F4Rjaj5a6nxqLgI7UqxSQuf2z%2BUJ%2FzDyH7Bl0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEsd1braSoWqFY0CGCrcA1vPPOyYEabEUWJXPFjVYvrLCsFNsA6yZQ9GCMBTdqiT4PiswiRWSB3md7vmmVO4K0jHH8EcsnBYUBd3K6twSWBfcmf3akXof5%2Fyd9z%2B26eOFuY4rZw1k8SWGKrDDFBaS%2BjJfGRC2jcBdWPDCbJKUTxAyBBybZqwlhFjQQeYvm6cZ7yTYLf7U1eVzrBD%2FF8avbDjJHzKQuZVz2HD2dgVe6Utubfy87rtNolvqU7Zfmjtug5zBuNhOy1ikq3wmsNSJfdaWnkj5CnERYBqtikt6zpVCVJYntsEKoEMfNbdTR9M%2BA2wnTg%2BCVJgbnFRfbdDofsZ3jhTA8Gj9jYCPypE9NM5YF7vNVnwguxKa%2BZmYfBOPRloJe7fGKsrzOT3Bj5Doy7NFhpEPgSQFQWY9CWLIg3kzEj7Zoc2AyJL6cjHX91S5X6APHSfh0GuPJhq55EMot1Ynk07JhHERKng2jONLFzmvNjKwcH5VPs7qUPZl5dONEeMp0rGFU2A4CYONlxwzh1wwPYQ%2FhYJjuxWmFOiOwpw9AMPzO7dymANThgITaefDRt6qE%2F7tbgdvYMy9tAe8E8k8yBzYTk%2FOyusdkmUcFQEQcn5%2BJdHzjMWIMEnPm7ZE%2F8suEzjMsasOsHMMNiS3MEGOqUBzULtyFrinOzTwfNc8z1LKFaomLWzpUJHizy303%2FCp%2BHwtAVbmHRUGrECRj1h4GiDjpZOkoaukCS0hvnnJrO7P8wxqO2oNSle%2BfnZABJAljyAavumrxnaiFOx0GDgkzM0Xtdq4YNUEZEyC66bjt8I7LPSCsUa44dTpvxCqx7PUTEmV%2Bufa0lFKF57YIAjcH%2BI3nK%2F5F1Bx%2F4nv64De559OA63hzEk&X-Amz-Signature=cfab444cad4d09d86bb28f8c31764c70b3b9976f57d78d60c9f4b709cd89c336&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXI4SRQ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTag5ydsPzQ%2BbIdEkTr0LeN4C%2FnpygvaRs3jQ85j8x%2FAiEA1bZl%2Bo6jSKpjFHcC9m6csKS2G1g2wS29pJuDnx8Zp4sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDA%2FpbOropbL%2F8bacgSrcA4xlH%2B78Rq2W08CAfcDzpaIvBr5d7rxaO2CUeQonWfxAVmnRlMsHZ9QgjgfoEkqLEuf6h4teNHvT8c8bnfChvmI6VzzJe3wm%2FJXBi9gCYhdqs1noeJu2YqdxfLPzAWZ%2FLINdPsDiXlmck9tvA1HtwT0sv09EsGm5YRBLhkfhJMfbZgSMauhRP7oj3DnDmbZYR7BsYdn8NGGCU5r6TjNZt%2Bw3OpVXOjzMHNtQn%2Bs%2BkO36T6dSnxkNatrrgqOSxLvoRJOTuCY3D7uEkkBpzJw6moxiFJ9TmEVpsAuFE6EJMSYipkswV4KLIB0MXnLHwMALlJpOp8%2BKhd0P63497qClk83G5gyO1cE%2B1DRgMxOqT5tWsJcUi8iKvC%2B1ko6SpOXFZJ6ZrgnJoX3jCLzVyS84bjWAh4OjyWPM1RIFOyUhzN%2BDnrrqgRvm3nlZFr8mepRVGgjiN0crTrd4zIymorBuh8R3aV5lzf%2Fsq0q2zbCxVqOhkSbL6gVFIxh9dnc2D%2BlDtEbYlfjq5iSXfWl5XHdXNBLLcr09qIi3Jlvnc73zybNlPwKuUNU8R2hQLDz6mA%2Bfa3G6U5B%2F1%2FoJvUqhBkHWxoM29Jb66WpCcSf%2BFA0x%2Bou%2BQu6UTZiaeEeVau7AMOSS3MEGOqUB9F7neiVS0LUstvr5UB%2FJiseOcUY%2FHiHG7COQhz9Q57EnrWsXd3rV8xrlhyF4Xzi6307x9p%2B1oABW2Lmo%2FwJkwMET%2FAdVJtzlvL9iM3qajamfq2VUT5Cj%2ByPH%2BtJd0pYWZRoKWgj7Qvto7Wau7BrXWwaWGbpMt1dVKTrP888fZ8670%2BRvcNwqGPrxEYbmLcOxj6Qe6YmHxqd%2BCuFvhN%2BC384mS3%2Bh&X-Amz-Signature=77555226daf92a3b2583f94d624c734c6fc00e30c6e25b9e4eda1d799dfb8810&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64VU5R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpxQz%2FiGsSVQJCGJM2WsmwDv5dOFay1gwuXOmkLH5EuAiAjbQ2fl7DMqc3ftMLIL%2BPJEW2pF34%2Fqk6S13FyqeWBhCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ51d5vMvmvTIGA7JKtwDvRkPsRFEiW7y3E9nEoZaUHcD2t3FttbRhjHj0%2FEwdCDdav1%2BNTNPKXWSnpeIbeqIRqz%2BJ9bKQALXhbYO3TGTc3QvMwe9tvg7LR1Mjd%2F23FI%2BN2TF2o%2BwV0kE19%2BykJcTGTxVbd1O86ldDhYnuVLzbCisUYXoXBbchqA7p1zzNWLBiIsWdAWCvr4JPWrvaGOQSUE07TnN%2BeXA2ewBkKXctly2ZxdBBsoCzxdLWXfWvdHZnx%2BSxzjhj85k4sbji9CL40VbwAVsDRMoi6IElezwKWE7DVNSqsrzkQ8m2OMFz2cNvwwdxE9%2FNaVQRLYDp8QD8%2BNA1ZXp%2F18eCN4Ys%2FgWd%2Bt0W3DfacQtzqI18O%2F0WtjRUxZ7kZuG0Dn%2B3webj7y2zGGOXqjIO2bdSYfkd5pZfrn%2B1lng1ApOS020nbmKEA13jeZ%2BraTeIHqGoQ65Z14VlIAXBXuLrO88oKR92W4uCb%2FiEId9s%2BZuxNVv%2BqJMEr4cfX02RFbwtGksvZErv4z%2BM1hRL5EMBkEALo2V2kl2uB85N2qbLH4HNeENlxh6Tb9nd3dJvsWxixWK4jyf9Ia46bU4%2FH09F4pjm2vzk2vb6oZcdbTumi4VMCvvWrNdaK%2FwLFaUR0gJkwhvUN0w%2BJPcwQY6pgH2XNFdM5PGJ9L6CTShX7ZZ9C3q%2FntQVJuW96oAK8%2B8XwLSRBO7vgziZKT0zR5PQ5LrjCL0okJQ3i59yl7hG4wMZ0sGRJloyGkk8cdBBr05%2FalhQMi6vz3OfMEF8GYXB5PlLZFEPvUITqh%2BVuX9ZhkEXucmTTFkHZP%2FFHTFHxWDQGTMdLtVlwSZZmH%2Bn5gJgsAnu9hSrMOVBp5AiaTHRb%2Bvcv68wLYN&X-Amz-Signature=8bb6bfa78b6eff6a74bdfd06339491c7f8c5d4f795e6724bf4a1a56c37181c95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
