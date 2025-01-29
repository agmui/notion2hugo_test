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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJUGXGK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs1Iij8p9AMMGWQvkJHmQvomdj0g00Kbecv2YSjwGmBQIhALQiqtZpZljMLLmadnpL%2BJRMSxDNNwp70G6OHx%2Bn5EVeKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCGsW976k1L7%2BHvPkq3APGTOgPKryBPc5i3mm0zL6XOJjGKWcpXZggyik%2ByiMiIAIOMCcJ9NAZ5mv5Or%2FbCk25ZZRHlxjclZ05I14FmDhdzyYyw9Jk0%2BogKv3YKDCKDs8Ax2NvXHrxFlN44tgXAfg9DPFPKiShFUiH7puAxbzCOd5kVrBLsCINTq1EFVRa6ARoAjc%2FJUbVCSHyx81DjkOkfSZudKmj%2F0FFDXPXckG%2FQDZBlWJjzEd98GJSR7zFHKUo1A%2FRdWXNE59LmWQ04ZXbXPFOVbKOTH4tkKUhe8Jef39ZuDTSjLmGOIQBex4B%2BNe4ftCJcz1mDqLa2JPCDJYKmzL65nqzJYIo6%2Fp4lEr8sYBJhPLTMk8BEOwl3YOPmTXCYyNXqq%2BEdxOET6FJElFVCmAjypz8Q4WFIIfakb8rwKxpIOFzHtNG2a4HK2YyHV3GonibhWCTR%2BrPTA43lqcU3Hsm3fv%2B9myhPVV%2BYf724it5CSHuSabDyGwR9h9AIzVQ6vqOhiukVZAQwd3o8J8SKDFwIfEvtir6Qpd%2B2LUluHFH880bhyXkttC%2BC%2BQgKiHI51vJzH7djg4SPXfRqqZjUK01vPgPQeEzlm0K3jpwg%2FZAr%2BzlHuUvItS34q4t2TUCWrsjMw71P2V6zjDmgOi8BjqkAahRumJmSj2iwkOXhug9DsS%2B1GHkdhGn%2FHHC3wZEjDQjEZK3m8nk51GSHUMcrPk19%2BtOXNuYifls61tKLRhV%2BXdK%2BJMO4JRt0oVZUKyx2TaW1VF72D473Cp%2F2LJVMBujIQCUlX5lusHUHRjvJ388d4jVXkPwMdATdM6%2BnOqHb6LBW0bnfZxWPb6jfuoqcXWbxsfrFaKwLzaw4O3gvNZy7gkPpk7F&X-Amz-Signature=5f25b34026977217416384ca9c9250f57beda1c490874fa30f72a7fbd5d4c4da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJUGXGK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs1Iij8p9AMMGWQvkJHmQvomdj0g00Kbecv2YSjwGmBQIhALQiqtZpZljMLLmadnpL%2BJRMSxDNNwp70G6OHx%2Bn5EVeKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCGsW976k1L7%2BHvPkq3APGTOgPKryBPc5i3mm0zL6XOJjGKWcpXZggyik%2ByiMiIAIOMCcJ9NAZ5mv5Or%2FbCk25ZZRHlxjclZ05I14FmDhdzyYyw9Jk0%2BogKv3YKDCKDs8Ax2NvXHrxFlN44tgXAfg9DPFPKiShFUiH7puAxbzCOd5kVrBLsCINTq1EFVRa6ARoAjc%2FJUbVCSHyx81DjkOkfSZudKmj%2F0FFDXPXckG%2FQDZBlWJjzEd98GJSR7zFHKUo1A%2FRdWXNE59LmWQ04ZXbXPFOVbKOTH4tkKUhe8Jef39ZuDTSjLmGOIQBex4B%2BNe4ftCJcz1mDqLa2JPCDJYKmzL65nqzJYIo6%2Fp4lEr8sYBJhPLTMk8BEOwl3YOPmTXCYyNXqq%2BEdxOET6FJElFVCmAjypz8Q4WFIIfakb8rwKxpIOFzHtNG2a4HK2YyHV3GonibhWCTR%2BrPTA43lqcU3Hsm3fv%2B9myhPVV%2BYf724it5CSHuSabDyGwR9h9AIzVQ6vqOhiukVZAQwd3o8J8SKDFwIfEvtir6Qpd%2B2LUluHFH880bhyXkttC%2BC%2BQgKiHI51vJzH7djg4SPXfRqqZjUK01vPgPQeEzlm0K3jpwg%2FZAr%2BzlHuUvItS34q4t2TUCWrsjMw71P2V6zjDmgOi8BjqkAahRumJmSj2iwkOXhug9DsS%2B1GHkdhGn%2FHHC3wZEjDQjEZK3m8nk51GSHUMcrPk19%2BtOXNuYifls61tKLRhV%2BXdK%2BJMO4JRt0oVZUKyx2TaW1VF72D473Cp%2F2LJVMBujIQCUlX5lusHUHRjvJ388d4jVXkPwMdATdM6%2BnOqHb6LBW0bnfZxWPb6jfuoqcXWbxsfrFaKwLzaw4O3gvNZy7gkPpk7F&X-Amz-Signature=28f5b220891404265109f74acdf61ed10b93858206de5bbca210785027498714&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2L3LPCH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDi7j9raBLcQMeeHxNSDZbbJYZP0%2FBLYCbx%2BnlR9eoSWAiAUIUAP8Y72BNXB3DClPxlqLdqZtPAiL9Mg69GKRWNphSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFi3hphYbOrYh5LC1KtwD7l3whvaCV1d8DeKWebkMb0vvqHaPauOHVdtCcQxiiOuucLHFfaQKdEacz2DxhjkDk0Mi29%2BwJEfc%2FOh1o%2BPJ2YVFHbileW1QhtpkakHUc6PvwYllLc90gi%2BOKNrLR4dBWrnaQOWRJx9K5TLgjICzJgu1XHs5XYGOIJWJJZAwOL4D0s4cOEXGYw7w3FSBnR7eVa%2FzGHzJmsgXU2aWIdxhEq0ptn9v6PuJRsDfruKjqPaLpYdkJTCDDKq5JDCh4%2B2yvBZhPyChv9vc7mbScFyDQPqoZeSzkrYGKaoKDynEnd1qAs%2FhQoVjRBnlqvcfVpAYzCzmNvqC%2BbCoNZf1sVV7Lo8o7%2FK4WVk1Vmdz6k7n881bsq0slfqeVGzYep%2BMot9TuhzjQQfdxgM9lVxHF1aprEGuSLjgqBq8Bs%2FzAXi4kqsg0LDlQ%2BAYUtE0uTPIrNFnHF4nCa41BjgrwRSgifdpRT%2F643F313uXmdBa5ktwkxZqP35rjo%2FcU1O3bsQJ80TV7yBVeLCo930pw9TG3OYbG8vgogN5M11viYbsAEJzwnhpm04%2BfnMhRzq44c%2BlXj6dOhkxG8iCPDsFWk2M1%2BxioIjlGHZ%2BbKXotueQV0lk%2BLgyUOqexQlANJCGtbQwjIDovAY6pgGoiKdyA2OcAhTGpDp1Z1Yl9PIokVDhvIJNy7lzTiZuz6ln4s4h%2Fom3nJKM%2FbyhCp4e3BdJhH%2BNYFTh%2BASavSQex2uasuaCaiSsG7XW732ebkw9uYWlf4E0%2F0bFM10dzK%2F9iiaXU1TrRTGKmtpQ1KSyooYKHYQfZPnfqQCL6gqwnfPJdI95UR8Uqpkj7ytyOD7b7%2BAjLBRQTahzNxGZR1%2F8pUaicITq&X-Amz-Signature=9cddef47fa361a66987db389722ad44a39fd3fd0885108f97b95bcf983204112&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZU6QITZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvw%2B3disdK229dSrQAXtcW0MA1Ah6kIxkmapofF8HZ0AiB%2Fyrp76JyxT8%2BQtxwoUiYn5zcf%2BivGXXpKxgJIyYmRQCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReoBafD0PuI45xk7KtwDjunAQGuUKeaPzehX9HQb5FnDw%2Bv3LtUV7fZEbeyJkIPzoVExEbKHgt9HWDk9689uyp6ZghpDCVbkZSZPC7QlhOjxk0%2BfI5qCzLdfm3I4A2zuIeyVZ1%2FCHXrOugxD2ZS20BsE81cRmhaxof6wGYE4LneyaNcCLJOkeT8rzxZcg6r4nJMzSrCBGD2HPHo4n6z2NRwpVfhQJaUTjQkqWb8bud%2BiB6U%2BRSloAduko18fSqIvaBXzR88y%2FbaCG6YkDs7ew66Qj729oepqiaZPC32O9lL6dratziw%2FuGLod%2Fuk%2BEjCPpzzrnzbSpcVldAhcjUdEpvyT1FE0wEKHR9Zbr%2B0Y3QK6da7gFO5FHwyfhTCGVvGFY4dY5jIMBP%2Fzco2UdCLWxjBmc3Tp4O1V%2B0ubfw914alCfeovDuPOs8dwOL7slVmskm5PpEFRi7vSYFMX2W2p7BDDKyiFTsOd%2F4krfVPLIu8qbFpGy6iV%2BCHOsly76xqKnNZNnDPVRiWCrN%2BtVqMbIkNSDc%2FCssw14K2xvPj3mDq%2FNtK5xkWCjGDT8GjDlCDl7vwRgTWWtLSnRXWuyaBkKscBIeXO3oYKGQ%2Bo3TDggEUjmp659Ol6M7sgBdMbUyY8then6y3ef9EdTgwq4DovAY6pgEvGIcZ4MddjfpC%2FA54I%2BAgHl%2BNATJhV3wxy%2BfUtBoIyzvuZWwlclsGhO74PW6eyNOfp0TkVSXWcIJSCdOsrAWx52tLoevyyvenxlb7KRMB6pETDRDjVFK7caeYZS7V37qV2fhgT0rwpz2vYikLZS0bv5r4q0Bj6WXlFZXKrERXV%2BmG0aoI7CDSMXS%2BHEE8NysGR%2BoEAqgBOR3Anp28pqNj8pjvSz7i&X-Amz-Signature=2f99c5770ed3e51edd8e29695a8669664999722b5791aade450288e64d701ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJUGXGK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs1Iij8p9AMMGWQvkJHmQvomdj0g00Kbecv2YSjwGmBQIhALQiqtZpZljMLLmadnpL%2BJRMSxDNNwp70G6OHx%2Bn5EVeKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCGsW976k1L7%2BHvPkq3APGTOgPKryBPc5i3mm0zL6XOJjGKWcpXZggyik%2ByiMiIAIOMCcJ9NAZ5mv5Or%2FbCk25ZZRHlxjclZ05I14FmDhdzyYyw9Jk0%2BogKv3YKDCKDs8Ax2NvXHrxFlN44tgXAfg9DPFPKiShFUiH7puAxbzCOd5kVrBLsCINTq1EFVRa6ARoAjc%2FJUbVCSHyx81DjkOkfSZudKmj%2F0FFDXPXckG%2FQDZBlWJjzEd98GJSR7zFHKUo1A%2FRdWXNE59LmWQ04ZXbXPFOVbKOTH4tkKUhe8Jef39ZuDTSjLmGOIQBex4B%2BNe4ftCJcz1mDqLa2JPCDJYKmzL65nqzJYIo6%2Fp4lEr8sYBJhPLTMk8BEOwl3YOPmTXCYyNXqq%2BEdxOET6FJElFVCmAjypz8Q4WFIIfakb8rwKxpIOFzHtNG2a4HK2YyHV3GonibhWCTR%2BrPTA43lqcU3Hsm3fv%2B9myhPVV%2BYf724it5CSHuSabDyGwR9h9AIzVQ6vqOhiukVZAQwd3o8J8SKDFwIfEvtir6Qpd%2B2LUluHFH880bhyXkttC%2BC%2BQgKiHI51vJzH7djg4SPXfRqqZjUK01vPgPQeEzlm0K3jpwg%2FZAr%2BzlHuUvItS34q4t2TUCWrsjMw71P2V6zjDmgOi8BjqkAahRumJmSj2iwkOXhug9DsS%2B1GHkdhGn%2FHHC3wZEjDQjEZK3m8nk51GSHUMcrPk19%2BtOXNuYifls61tKLRhV%2BXdK%2BJMO4JRt0oVZUKyx2TaW1VF72D473Cp%2F2LJVMBujIQCUlX5lusHUHRjvJ388d4jVXkPwMdATdM6%2BnOqHb6LBW0bnfZxWPb6jfuoqcXWbxsfrFaKwLzaw4O3gvNZy7gkPpk7F&X-Amz-Signature=2aa5ad6ed34155f13e00abdc0808f819654779f696fef977527c5799bc2e6c48&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
