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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJVOPR7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCx9lPbw7LEKZzYoIT6Q%2BNsL47v6ADxFU0TDDCE2clRmgIgKqVh%2Bhc5b3FSfOeNIR4VlRscMei%2B9ZH7p3a7awI%2F0yoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYerNFxOwREutSiCircA%2B8HJgPvZW99wJ6oSQY%2FWr4c40vHs3YzExcRevYDGQ1YY5%2B%2FFyKXYuTIZWy4QI7g67xuuDazu0OD7TLt5M6YmQGezJVwRK3VLMpsTOEZFdrHV%2BE0DPrhAKZcfSqfuNnYwgj0ZHtl0Zcto%2F8skbmMaQ%2F4UWX1BF%2FJ85wCn%2F4Jy4vy1IAn1vg3DHdqa1OvQ69zYZoglnmbSt%2BVnAqvnzF%2B6lZH1so0CTdB1CV0%2Fs35EDymxSJcmOLvlyKh3dAVNvgRmbIa%2B4E7akbe3g%2BajL9cyVp5mOWGpdM4eyh6HyhN7rviLHU1JNZIR32gBGoGc3%2FtUKi1h1r3cQep%2F8RXuAw6E3djyC4lC%2Fh6KWWdXlsU3MDrZWcp4Iz6mF8mI3nFdQR9O7TRSG5%2BO%2Fv3OqXOuVBeuOtyQo1rEJlOUdqw7pMp6W0lHuU6QeZfo3Hid7G5grJQEiRADqRVH832VWYpA%2FrFlqJMRIz5pudUhRka4%2BsC5R8sp9SbVNwRahMJx2k0pDrsZqAVq%2BzVyKi8PIQyBu1C1YXo%2F%2FuyermZ4ECK%2BxdK8YSkBWV9P9Mg%2Fqm9%2BTs4MIQqBrEpt%2BQrjCq6PnuqQwnrqm%2BJPayeVoXsa1%2BCZga%2BRg9r4jOsHg3lf2Ce9xEoMJO0z8QGOqUBIALfDN1JMjMIHSIitqarDI4Fi8ywDRj3ffo8%2FqtKjHoVlb5H6hcILPETY0jqewT3kajscB0z%2FIrU8suLHL6qcX%2BcixYV1AfFq7xJlZdGLUdBGtDiDxQUmnMqQBBDmbbVgPtDNHdX5YfcqV%2F6TZN%2B1g5KH6xZJkPYWa7EhfzKJAIoOsKPYojpZctNWP%2FIHY2qb6MGUAmUnVmgA%2F1PeFoM0uXxsVoX&X-Amz-Signature=d0e8c02035389df847ba93f93015896ef06c8864f13d3909d8c0fe4828b4244f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJVOPR7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCx9lPbw7LEKZzYoIT6Q%2BNsL47v6ADxFU0TDDCE2clRmgIgKqVh%2Bhc5b3FSfOeNIR4VlRscMei%2B9ZH7p3a7awI%2F0yoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYerNFxOwREutSiCircA%2B8HJgPvZW99wJ6oSQY%2FWr4c40vHs3YzExcRevYDGQ1YY5%2B%2FFyKXYuTIZWy4QI7g67xuuDazu0OD7TLt5M6YmQGezJVwRK3VLMpsTOEZFdrHV%2BE0DPrhAKZcfSqfuNnYwgj0ZHtl0Zcto%2F8skbmMaQ%2F4UWX1BF%2FJ85wCn%2F4Jy4vy1IAn1vg3DHdqa1OvQ69zYZoglnmbSt%2BVnAqvnzF%2B6lZH1so0CTdB1CV0%2Fs35EDymxSJcmOLvlyKh3dAVNvgRmbIa%2B4E7akbe3g%2BajL9cyVp5mOWGpdM4eyh6HyhN7rviLHU1JNZIR32gBGoGc3%2FtUKi1h1r3cQep%2F8RXuAw6E3djyC4lC%2Fh6KWWdXlsU3MDrZWcp4Iz6mF8mI3nFdQR9O7TRSG5%2BO%2Fv3OqXOuVBeuOtyQo1rEJlOUdqw7pMp6W0lHuU6QeZfo3Hid7G5grJQEiRADqRVH832VWYpA%2FrFlqJMRIz5pudUhRka4%2BsC5R8sp9SbVNwRahMJx2k0pDrsZqAVq%2BzVyKi8PIQyBu1C1YXo%2F%2FuyermZ4ECK%2BxdK8YSkBWV9P9Mg%2Fqm9%2BTs4MIQqBrEpt%2BQrjCq6PnuqQwnrqm%2BJPayeVoXsa1%2BCZga%2BRg9r4jOsHg3lf2Ce9xEoMJO0z8QGOqUBIALfDN1JMjMIHSIitqarDI4Fi8ywDRj3ffo8%2FqtKjHoVlb5H6hcILPETY0jqewT3kajscB0z%2FIrU8suLHL6qcX%2BcixYV1AfFq7xJlZdGLUdBGtDiDxQUmnMqQBBDmbbVgPtDNHdX5YfcqV%2F6TZN%2B1g5KH6xZJkPYWa7EhfzKJAIoOsKPYojpZctNWP%2FIHY2qb6MGUAmUnVmgA%2F1PeFoM0uXxsVoX&X-Amz-Signature=6b695f51c095f1697de90bfd978abdced7c6541c55c3cb4cfc60ef1ee562e21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJVOPR7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCx9lPbw7LEKZzYoIT6Q%2BNsL47v6ADxFU0TDDCE2clRmgIgKqVh%2Bhc5b3FSfOeNIR4VlRscMei%2B9ZH7p3a7awI%2F0yoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYerNFxOwREutSiCircA%2B8HJgPvZW99wJ6oSQY%2FWr4c40vHs3YzExcRevYDGQ1YY5%2B%2FFyKXYuTIZWy4QI7g67xuuDazu0OD7TLt5M6YmQGezJVwRK3VLMpsTOEZFdrHV%2BE0DPrhAKZcfSqfuNnYwgj0ZHtl0Zcto%2F8skbmMaQ%2F4UWX1BF%2FJ85wCn%2F4Jy4vy1IAn1vg3DHdqa1OvQ69zYZoglnmbSt%2BVnAqvnzF%2B6lZH1so0CTdB1CV0%2Fs35EDymxSJcmOLvlyKh3dAVNvgRmbIa%2B4E7akbe3g%2BajL9cyVp5mOWGpdM4eyh6HyhN7rviLHU1JNZIR32gBGoGc3%2FtUKi1h1r3cQep%2F8RXuAw6E3djyC4lC%2Fh6KWWdXlsU3MDrZWcp4Iz6mF8mI3nFdQR9O7TRSG5%2BO%2Fv3OqXOuVBeuOtyQo1rEJlOUdqw7pMp6W0lHuU6QeZfo3Hid7G5grJQEiRADqRVH832VWYpA%2FrFlqJMRIz5pudUhRka4%2BsC5R8sp9SbVNwRahMJx2k0pDrsZqAVq%2BzVyKi8PIQyBu1C1YXo%2F%2FuyermZ4ECK%2BxdK8YSkBWV9P9Mg%2Fqm9%2BTs4MIQqBrEpt%2BQrjCq6PnuqQwnrqm%2BJPayeVoXsa1%2BCZga%2BRg9r4jOsHg3lf2Ce9xEoMJO0z8QGOqUBIALfDN1JMjMIHSIitqarDI4Fi8ywDRj3ffo8%2FqtKjHoVlb5H6hcILPETY0jqewT3kajscB0z%2FIrU8suLHL6qcX%2BcixYV1AfFq7xJlZdGLUdBGtDiDxQUmnMqQBBDmbbVgPtDNHdX5YfcqV%2F6TZN%2B1g5KH6xZJkPYWa7EhfzKJAIoOsKPYojpZctNWP%2FIHY2qb6MGUAmUnVmgA%2F1PeFoM0uXxsVoX&X-Amz-Signature=4693ebdcd77e5c603654be5c8e58c086d865315e737090ee6b8274f9c6b83484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6AIIUG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGXGpxzGM0xGIT8ehip8lN4%2F2zv0Ttgp%2FHafdghWnVSAAiEA%2FyizfxyApsRo%2FH6kbOCmPnLpDJnFYT6AKs1f1HQXJl8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJshmhKz%2FSUXXVbKEyrcAxcbn3j20YArJD0fkcq6BP1xKMK90X2EzZsNh35KFAynT%2BfAteFfB8pzlg4MhVTreDRYdwGd9cSePKhvGnWC0lmeIK6o9W%2BHcustuP997wURoYs2fwLiMQZ%2FeF1jYzz5WzvLW6Tk7ss%2BY%2F60pbGfGSwAy0KgHdaNGzpkJVMavHacg6QG%2BfPGoRafNJOR7BHjzQL2MmsNehk%2B71gvYnWmHl5BVOtcROyDl%2FbmIZNqhBAsmhbUShwleNM3RaMYBaG7FY3d3zEwiTu5yVo61QqG5f5RsIao9wAwMXf4RKufyoG5%2FRw95hQfPW6r0EWHdbsRFYsL9DLOwRYsVD4UhAUblagsVsgUqksLbp6cPkCVDjCPmd5pV0fZJJzhjvSNXGRvCg1Q613vZ9lJ5YHHiMGYmsd95eA4PpNqUOZTo1ig1YE9vIsiAE4cFzpCCLuIG%2BfrDwDfp5Zut%2FfHt9yqO%2FJ5IQSqZX3MjDw6fROsTlP7lAF3pOseaFWXA9%2BZVByPcRB%2FTtkAVjdJSr%2FmID4Qk5kOE0umPK1r1rPRV5zECsr7wrgDfcZmWjMkApxZmUpXGxdOu6iYogA7zCt7pUKUTC%2B8AFG2unqSnXZJOc9Ifcj31MCc0MA4gfeKIHwDVdvOMPuzz8QGOqUBytlKV9UtOFNau%2FRg%2B18JtCJrlV9TopwiuXgeFyUtUl4pNm1bd9UZB8hVbRNgoXLJRnQzw%2FwvINtrc8Msp9VV65fSRv5cSAIxarQ32Aujpdc9CHlk7yuQN4sbSw5lPpR5KYk%2F7nyTB2OBsSmW2qRTCRcmROjsQl%2FBSI90HihbrTNIVEj8Gs%2FKd3RzOSdvWfDKz01NAYwbmMFHGS%2FlB82pnaSWgVWo&X-Amz-Signature=d09171804daf9148c94425a80dc2be5cf3c7d2cb0839a7005ff5b8fe98a516be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTKK5KE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDBtbvXuSZFUjoAop7SJR8Pdj6GzL%2FgXhnT2Esn%2FaenXgIhAOuz%2FXMn26qDeGbvfMqrNBAxmh%2FZAgMJ3DpiS58xt4NkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyXHcMV6diFrVtXMcq3AM30%2BT0ZJ%2FbIH90pDT4wwReaU%2BN8YhJ4aqnu6RzjaXdtAklgqfPldIoGLl1u18i5QpkbZa9STME0JI2mjEtU0ul3qKDkcV5Wa5Ob6VVsDEDmROb2eCAO0sPy7HQH7w9CjVqDSw6HS0zCZmvfogmxBYR0B3t0U45SIaETvcnkaFHTfosCf%2BpzFKKV0yvKRHhVgnbBe3FC7GPje6iBmJkMdMvbDpukDAp9OBVdfinbCdYj%2B25JgT2I0ZexDvBQxXeKAHnBxrH%2FIa95ktbC31txDepvv04MwYYsim6293DoT4CKNBzUt4qpMxaale9%2BtvSGbR0j02JfPyNgzWYAeN%2BfhEC6uemDmue9SyNkfU8%2Fw3Bv63%2BYclpLD%2B92MPduQ%2Fn3M%2FzNyGkH0VVLAEl77KiTbBDbigvllAV1c914hascYGPkg5MrPOkvy4WK54HHvGESwBp0N6%2BT6M0asaG8Ab09aUzbnu9s7GNatzhq5SDPXBjoVQlJMJPwnGVe3e%2FboTE0XhlYKa2wheF5%2BsU1WrIBgvVfadHog4Ep7wCYyn6WgcHNE9v8euz4W40beszW%2Fer3ejQgvH%2Bkb4%2BquzYVU3zsQwFBvrmvax7QN%2BhnjgtJf%2Bktk5CG0ZKDnnKs7oyNTCYs8%2FEBjqkAaz31N2pkLXJjsp4m1dQwjy53bbBQYUSFMnQZoiUdNcbCNlLE1fCYBsWTYmR8QKd4F2LexRsktocnZeAcBUd32jw4s7jHXi4wDZQ3SY3fs5YckfWnuKpzjIKEaThEbHV%2B%2BjaiLi4F0iIUlkavl8uLJ1PMjbY80m1YwJLY3lAxs8s6wTUwc221SGOxdOvWn1n%2BvWoQOyT4m4Zvv4Ttmgx%2BOXUnixy&X-Amz-Signature=fc6c96db7de93843c9dd6815e4bbdc5785210291ca24422b310f5067575f5f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJVOPR7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCx9lPbw7LEKZzYoIT6Q%2BNsL47v6ADxFU0TDDCE2clRmgIgKqVh%2Bhc5b3FSfOeNIR4VlRscMei%2B9ZH7p3a7awI%2F0yoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYerNFxOwREutSiCircA%2B8HJgPvZW99wJ6oSQY%2FWr4c40vHs3YzExcRevYDGQ1YY5%2B%2FFyKXYuTIZWy4QI7g67xuuDazu0OD7TLt5M6YmQGezJVwRK3VLMpsTOEZFdrHV%2BE0DPrhAKZcfSqfuNnYwgj0ZHtl0Zcto%2F8skbmMaQ%2F4UWX1BF%2FJ85wCn%2F4Jy4vy1IAn1vg3DHdqa1OvQ69zYZoglnmbSt%2BVnAqvnzF%2B6lZH1so0CTdB1CV0%2Fs35EDymxSJcmOLvlyKh3dAVNvgRmbIa%2B4E7akbe3g%2BajL9cyVp5mOWGpdM4eyh6HyhN7rviLHU1JNZIR32gBGoGc3%2FtUKi1h1r3cQep%2F8RXuAw6E3djyC4lC%2Fh6KWWdXlsU3MDrZWcp4Iz6mF8mI3nFdQR9O7TRSG5%2BO%2Fv3OqXOuVBeuOtyQo1rEJlOUdqw7pMp6W0lHuU6QeZfo3Hid7G5grJQEiRADqRVH832VWYpA%2FrFlqJMRIz5pudUhRka4%2BsC5R8sp9SbVNwRahMJx2k0pDrsZqAVq%2BzVyKi8PIQyBu1C1YXo%2F%2FuyermZ4ECK%2BxdK8YSkBWV9P9Mg%2Fqm9%2BTs4MIQqBrEpt%2BQrjCq6PnuqQwnrqm%2BJPayeVoXsa1%2BCZga%2BRg9r4jOsHg3lf2Ce9xEoMJO0z8QGOqUBIALfDN1JMjMIHSIitqarDI4Fi8ywDRj3ffo8%2FqtKjHoVlb5H6hcILPETY0jqewT3kajscB0z%2FIrU8suLHL6qcX%2BcixYV1AfFq7xJlZdGLUdBGtDiDxQUmnMqQBBDmbbVgPtDNHdX5YfcqV%2F6TZN%2B1g5KH6xZJkPYWa7EhfzKJAIoOsKPYojpZctNWP%2FIHY2qb6MGUAmUnVmgA%2F1PeFoM0uXxsVoX&X-Amz-Signature=353344ac09a38ff45d31a961bf56b4765efb2f271775a1911eeada1299a919f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
