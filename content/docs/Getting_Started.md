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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCI2C4Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMudp1J1criFrRwUVIkB5a9bLxzYl7Y%2FBWPgLx1A71TAIhAKPepZfwZ1WWXRibdsAA844f8mSfQUH%2B9PGJ6McK0G%2F4Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxANe6ur0oEjE%2FAy18q3ANg1%2B3Wzs1U5F2Fz8gatfSk6lYYQrLZ4QzXjOf1WuNxn9EGUAeLrIdOUY66pLpCwHyWci%2BmDKgHNkDjbMxtMfEIMvp7kxwKm7JDkcgLlgRkzz1VdxgOXzLiYhvCobVJLevpIo%2FAhy%2Bq%2BCHaQ3p86HhHChAiq0PigQNtfke9m2aj2VvT8R9GLpXEAXVhSxgtFQcb85uwFYNN2PDKWyDEXtZ27XJG11wVDr0XuWnzpwg6Wwqx0cni2bgxxZ4SWqKqb93abOEFZZC4lNam6uLknJZ9kU97KOAbuZ1ozOLWkyvhNfadDeSAZSkEEkMGxTIV5Vt%2BmlUur%2FV0zTmDWU0Hi75G60HnXvl81q6TrMK6S94w1%2FEkD3RF0l2c7rPILEum0ae8z7NuaRoEjybMMTS%2FTsuJI48lwE8a%2B7jdFQvlRIJyOviM9WQ9hlFFzI1AhGDrApW1D9zxzvlJxkMif4NpGVhENU6fahvUyAyPDDTUMWjCA9F3OjGIAaSFeN8D6X66UQXMun4llwRH3jG7u%2FCWN4RvFwUDwIW0cxLA4zrCoPsltfG9oyqN8tCUSrlhUhIJTx%2B1jxmrPiqnFKBwbS3MzYkRGh5MnaOA5%2BEEQzPtkEW3iThSgAWBIu4NJ%2BUq5zCXose9BjqkAaeKKi7rGQeI713a6vJMtwg9UIKD%2F7FDu8WS1eJ2bz2ZCRwTO4%2F%2FV1u8I39SbNlSGe1PzB4zTL12G3M4O5eI0fdURUGcypbYVK9ay2TeCE9ygZ%2Fr5UTEiWS1nmwRo83bIfPmkT6DOMmuz%2Fk1alncyh20lxf3hJElsOlMlpuKmPVCpzWNlBJ5NziKl%2F01Rihr4LMs4PnzrgCsU1KoT3w08%2FpLN77C&X-Amz-Signature=47e1aa5087bc941d50acdde1c1688fbf711251853de4488a7c004cdeb48ea722&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCI2C4Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMudp1J1criFrRwUVIkB5a9bLxzYl7Y%2FBWPgLx1A71TAIhAKPepZfwZ1WWXRibdsAA844f8mSfQUH%2B9PGJ6McK0G%2F4Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxANe6ur0oEjE%2FAy18q3ANg1%2B3Wzs1U5F2Fz8gatfSk6lYYQrLZ4QzXjOf1WuNxn9EGUAeLrIdOUY66pLpCwHyWci%2BmDKgHNkDjbMxtMfEIMvp7kxwKm7JDkcgLlgRkzz1VdxgOXzLiYhvCobVJLevpIo%2FAhy%2Bq%2BCHaQ3p86HhHChAiq0PigQNtfke9m2aj2VvT8R9GLpXEAXVhSxgtFQcb85uwFYNN2PDKWyDEXtZ27XJG11wVDr0XuWnzpwg6Wwqx0cni2bgxxZ4SWqKqb93abOEFZZC4lNam6uLknJZ9kU97KOAbuZ1ozOLWkyvhNfadDeSAZSkEEkMGxTIV5Vt%2BmlUur%2FV0zTmDWU0Hi75G60HnXvl81q6TrMK6S94w1%2FEkD3RF0l2c7rPILEum0ae8z7NuaRoEjybMMTS%2FTsuJI48lwE8a%2B7jdFQvlRIJyOviM9WQ9hlFFzI1AhGDrApW1D9zxzvlJxkMif4NpGVhENU6fahvUyAyPDDTUMWjCA9F3OjGIAaSFeN8D6X66UQXMun4llwRH3jG7u%2FCWN4RvFwUDwIW0cxLA4zrCoPsltfG9oyqN8tCUSrlhUhIJTx%2B1jxmrPiqnFKBwbS3MzYkRGh5MnaOA5%2BEEQzPtkEW3iThSgAWBIu4NJ%2BUq5zCXose9BjqkAaeKKi7rGQeI713a6vJMtwg9UIKD%2F7FDu8WS1eJ2bz2ZCRwTO4%2F%2FV1u8I39SbNlSGe1PzB4zTL12G3M4O5eI0fdURUGcypbYVK9ay2TeCE9ygZ%2Fr5UTEiWS1nmwRo83bIfPmkT6DOMmuz%2Fk1alncyh20lxf3hJElsOlMlpuKmPVCpzWNlBJ5NziKl%2F01Rihr4LMs4PnzrgCsU1KoT3w08%2FpLN77C&X-Amz-Signature=c2686587571ded418024208edd5630465e0a72f1b07ac39d0a3a228968d3225d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRFJKVU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA%2FQ54CaJav%2FiS6CHSPXZt0RGFn1EzJv5QbtSOTE8PSeAiEAqMu5ZKhDljs0EJxMX5ckmAVPn56jkuhoBWyWJLIjeYIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGmMtzqH0N4I2pYNTSrcAxb6FXtqyLADypgp7aABIj7ZED%2FV4JsYVw3vJYkl8y3N3tB%2B0DG1DgdGemEjQFtzsKFvI7jJqWAE1pANPDcoVlS8uqU3%2FaSWYlrAVeSngo5%2Fa0UexeatwFw7rAEwrrSOpGgcg3MNUjdoDqFvI3xxZ%2F97cPDzTlBzpk2SBTmXFjTdNuSk4%2Bo9rDmXpJqQDGqPixySrTxVBXt8mtbaALG9N1OXsKPpECOVXilIiC%2FtNK7qUym8KJot7SlZRJcWvOtmI62h3OeHXPuB%2FNfe4T9LYbOw2Wdw7bSTAUit0iC40sebZ5rqs2KOVuEvfe9IaO%2FWQxTN6ZtkbCl7Ak1nFiVopZlR3Te0L5y11iDt3K43gjX0Cb0BmUmwTw%2Bo3ha8GwcDwLNUDu3MJAZvzRiwpfq4Tpc4gk6grRP0IBuVJpN6%2Fx4Ia9vjpbS7eNTxPeOl1EqV26pnPmXNUqdWJba%2BUdQ7r15THlG%2FvaNpeSbfoXZSinUGsnQlynrk%2Bf0no1%2FrKMOpDwPWOUZSMO9nrPNZ3VA3pDr98rxhkaQEfWn%2B2ltQhFRgJQkA2xx6VFh9EDX2nlAcOSQXlATNomNZ4F02paq15nqM96dOupZ7soYf54kmUQUFmQlGJqHjo57NrBeqMPycx70GOqUBPAKbEGAA6BJ2I%2FYa2p08Ye2KAsQ16YigTzwp%2By4F58dwDoAZGlg%2FbCL5MwAeB4%2FejIzejrTE6KEFuFmvgo0Lawoo225ZYUasNrxdhgyEnoSeZsW5veiRATk%2F6JccmQWzLrivsif1N8sX2ymTFZVCipRVf7tIkSV7ZpEvPCg%2FBeOlPdAuCprUixqsNr%2FYsiaKVyhwMD8TY1p%2BVAycvv2%2F3VyqrC84&X-Amz-Signature=a943650e3a35bda6545742028445ee22cbd44aa7abf5184d408c6f9c8ac54b42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRU7K7N%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuXAvw0F5tvmUb5fK%2BqKse%2FI2exVPt1DkeB%2FT9WA1xEwIgbpFtDUjZZ5Qw4nprctfO82NoQ7Jcx%2FziR1vcUq45vp0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJNFknF%2BK0tctozvLyrcA2Qr51XPO%2F%2B3HT53%2FY%2FbbjuAzrsq61EeSIIlP7c3hiNsNQrHImK3x42W6giU8aKrVYmFTFm9smIYVNSYXY75DFjbFYczX2r%2BzbDM7Ked88%2BQSgugKQSRcQzpa8GUHp8XegN2qRTG84GARpscOdWnv3b8YDSAScjAMMgu4N%2BBuXYYAcr9%2Boi3CI6OVtQJUJGFEpqCpWvMyWUy0kQ%2BYiqE8QWDlOCk5vb1XWO5b0fdJCyiVAuSBC%2F%2FAmvvI5DziNXHkMITnAmrythKRJA1BPJxRgDZa2%2F8dXCxeeicPY9Dc%2B5MPwhvwbXfVtNwvEsSvVb8SVx06u6P9XSbp%2FZMVSzdImXk1fLgLEbpB%2BLmKlqOgSNw64YMphjk0k6Ly3UsumiQktvu4b4CkPLiGAFFUpkS4LhbUZODwpMqLK6VkcAH13GwacCDWhEb5TREk3%2F9xReooSyU%2FL6cM8Z4zpgdi4Wj3rqZyFlUl19RdXgrmlBDckGYGh%2F43KyxTIxAkRsXJq6vGZwdyWKX7wvPgD61O2UQC8J9h%2F22OtBPvlHTld9Z6JJbOKq9ChCxEgsVwIGUJN90cGTTeCRD%2FfcvoRs2ROmwmjj9OMKQ4T5JvTwx4i8NSxaMjEOSOtwJ9GfDpF7BMIKcx70GOqUBE10AmPw2KaTDIfDI7QZsi4im1KEAKKQqMtY%2Bb1XD06rZy2wkWheHLs7xF0%2F8BNlmH2fTSRoweNTtD9YsYCwpyYvDHGT2FktbM8Vpca82GF7j8cLMRr0AjYPwlPq5%2FLyQrmYORz3gcRIvJoxE3nCCjtQStNGxtFi59LL396P9VtI6zZtxfRsjpQbAqVZJOkPY2PYVJztOpDjL1j9AGm364W%2BKfJbv&X-Amz-Signature=9717d7f497efdbe21ea2292d22d530558f8adaa919ce3565e47e6a6a622f795b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCI2C4Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMudp1J1criFrRwUVIkB5a9bLxzYl7Y%2FBWPgLx1A71TAIhAKPepZfwZ1WWXRibdsAA844f8mSfQUH%2B9PGJ6McK0G%2F4Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxANe6ur0oEjE%2FAy18q3ANg1%2B3Wzs1U5F2Fz8gatfSk6lYYQrLZ4QzXjOf1WuNxn9EGUAeLrIdOUY66pLpCwHyWci%2BmDKgHNkDjbMxtMfEIMvp7kxwKm7JDkcgLlgRkzz1VdxgOXzLiYhvCobVJLevpIo%2FAhy%2Bq%2BCHaQ3p86HhHChAiq0PigQNtfke9m2aj2VvT8R9GLpXEAXVhSxgtFQcb85uwFYNN2PDKWyDEXtZ27XJG11wVDr0XuWnzpwg6Wwqx0cni2bgxxZ4SWqKqb93abOEFZZC4lNam6uLknJZ9kU97KOAbuZ1ozOLWkyvhNfadDeSAZSkEEkMGxTIV5Vt%2BmlUur%2FV0zTmDWU0Hi75G60HnXvl81q6TrMK6S94w1%2FEkD3RF0l2c7rPILEum0ae8z7NuaRoEjybMMTS%2FTsuJI48lwE8a%2B7jdFQvlRIJyOviM9WQ9hlFFzI1AhGDrApW1D9zxzvlJxkMif4NpGVhENU6fahvUyAyPDDTUMWjCA9F3OjGIAaSFeN8D6X66UQXMun4llwRH3jG7u%2FCWN4RvFwUDwIW0cxLA4zrCoPsltfG9oyqN8tCUSrlhUhIJTx%2B1jxmrPiqnFKBwbS3MzYkRGh5MnaOA5%2BEEQzPtkEW3iThSgAWBIu4NJ%2BUq5zCXose9BjqkAaeKKi7rGQeI713a6vJMtwg9UIKD%2F7FDu8WS1eJ2bz2ZCRwTO4%2F%2FV1u8I39SbNlSGe1PzB4zTL12G3M4O5eI0fdURUGcypbYVK9ay2TeCE9ygZ%2Fr5UTEiWS1nmwRo83bIfPmkT6DOMmuz%2Fk1alncyh20lxf3hJElsOlMlpuKmPVCpzWNlBJ5NziKl%2F01Rihr4LMs4PnzrgCsU1KoT3w08%2FpLN77C&X-Amz-Signature=0998e445f832636c624705bc97d00234d27268bc2dcac1b48f9be1d246a655cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
