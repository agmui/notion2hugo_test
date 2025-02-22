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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYJG4U5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BsWk7hQKuJGuBoRkx%2Fio63EJk1oSknXrWxc1LHGhO5AiEA553ITthWovL63ltob2wjery4PO2KIQr60dcuhStw2Y4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4zjfZTfL08hh17rircA8vIFEiKs%2FxDYQSWqW1f8pp%2Fhq3591jkGnSJ%2Fphs3nEogaTdBwc0LJDAsV5rRCFkeH1W%2BvHAzkGyLNptLrHq6ZhbEM4O2QznqVAjjKM2e6YWeeUApnqF9P0ca3WGPlTbvRwdix1XK7hR%2Bj77nMptDLyivg4bjHGiA7JfPVu365JlanaYf9kORIrTGbQW7h73tJX5si77pSe%2BeRopkXG84DTISW4WVDHIS03TRt63%2FZonvIRo3FpTmEHAoiwfG6zBPk6DaEJcnWx1NXowG8XAHEBpCxOLxPyqYb0iXXoze3%2FG5WqwUHHcwd3vg1G%2Bzlx46Z8Yf%2BMgiMasgdViN0Fj%2FXppwqVUmUD6mDBE1SFUYP7img3FyOqlZE4cW4sxKqdNWjZbsJ7rFGSGUmk52l3CQMzDZx6nRiTpCIFVZDeIZ262fc41h0X6r0E49epn2FWfEld0sOkZkSq4ZqJwqEm%2BdVqgsPJVR%2B3xmwh0KEOflNh6YMkK8WDvNfIB1OECvp%2BTjMGbF9POzTM%2BIB8FZfFtftEcI82UXsiVTQUPtQfjm1qxit7Uoj53bCt7Fa1pr8Q%2BvQUf9osFc%2F34r1Lm%2BO77EbUmgeGGBFH%2FZDK0e36%2BijSv7nWCh5TUBTsYpLTSMJLH5b0GOqUB8Fr8oSUVZIJJJ0iRoxs0YZTrCSWSgWPcVZ4k9mruMuSjA1%2B%2B4ME%2Bj6RIHM5EkFmQkxb%2F7o6S%2BHW72CnG7bFxx8AloMimfp6K4dF4nhndKY98kMFSVDUdWH6HAT3JahiKJro2lTqhAX3h4Xrdw6ik78t3nyIyzAMWIWKO4um50gm2pqTp2YK%2FbcIJPxfrWvzNUjaQpwRX%2BErHH9i9vcrl38EXIAhl&X-Amz-Signature=bec62447c5fc14eef544331bff882e447ee83842693d55db142d9c12fe361312&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYJG4U5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BsWk7hQKuJGuBoRkx%2Fio63EJk1oSknXrWxc1LHGhO5AiEA553ITthWovL63ltob2wjery4PO2KIQr60dcuhStw2Y4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4zjfZTfL08hh17rircA8vIFEiKs%2FxDYQSWqW1f8pp%2Fhq3591jkGnSJ%2Fphs3nEogaTdBwc0LJDAsV5rRCFkeH1W%2BvHAzkGyLNptLrHq6ZhbEM4O2QznqVAjjKM2e6YWeeUApnqF9P0ca3WGPlTbvRwdix1XK7hR%2Bj77nMptDLyivg4bjHGiA7JfPVu365JlanaYf9kORIrTGbQW7h73tJX5si77pSe%2BeRopkXG84DTISW4WVDHIS03TRt63%2FZonvIRo3FpTmEHAoiwfG6zBPk6DaEJcnWx1NXowG8XAHEBpCxOLxPyqYb0iXXoze3%2FG5WqwUHHcwd3vg1G%2Bzlx46Z8Yf%2BMgiMasgdViN0Fj%2FXppwqVUmUD6mDBE1SFUYP7img3FyOqlZE4cW4sxKqdNWjZbsJ7rFGSGUmk52l3CQMzDZx6nRiTpCIFVZDeIZ262fc41h0X6r0E49epn2FWfEld0sOkZkSq4ZqJwqEm%2BdVqgsPJVR%2B3xmwh0KEOflNh6YMkK8WDvNfIB1OECvp%2BTjMGbF9POzTM%2BIB8FZfFtftEcI82UXsiVTQUPtQfjm1qxit7Uoj53bCt7Fa1pr8Q%2BvQUf9osFc%2F34r1Lm%2BO77EbUmgeGGBFH%2FZDK0e36%2BijSv7nWCh5TUBTsYpLTSMJLH5b0GOqUB8Fr8oSUVZIJJJ0iRoxs0YZTrCSWSgWPcVZ4k9mruMuSjA1%2B%2B4ME%2Bj6RIHM5EkFmQkxb%2F7o6S%2BHW72CnG7bFxx8AloMimfp6K4dF4nhndKY98kMFSVDUdWH6HAT3JahiKJro2lTqhAX3h4Xrdw6ik78t3nyIyzAMWIWKO4um50gm2pqTp2YK%2FbcIJPxfrWvzNUjaQpwRX%2BErHH9i9vcrl38EXIAhl&X-Amz-Signature=a74cf0423f1d7a588baa5069311402bee9a176d8157a8fd234b4ce2639bc366f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4H4TPG5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6%2BWbeQZ7kmlao5wyiGohWzHIG5qPUibLAhl5kWvNKeAiBE5vwHpsz%2F0hRYjio8%2B3nMhQLGTbY0XffX8qVtc7R9SCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJDS9nCLWjMK766ZMKtwDf3YwSGva616zAwyxPJKNltmIWtYGGiLelSIf%2BspDaepFzKUQCAKMq0EawpWz9E1GuzigH64HvTmx0NMqmxiD5KSsZEzmYR8P15AtbySBp1%2Fjdv7%2BLr3bQHf6RZWVSCrG3UooKfMWtcN0yHxRfvcCpfa0pt7VW0ITn3WsbEU0Pdj1EWTPAiCcRncbMJ0nnyd1lCrWf%2BS2bkL9D0wJuN39fcnFHiWWW1lkaLKVcQyvxNavKly0za2zTCsbpsYf6W5PfoZ5gaXNI%2B5zrb4UocDXopT4ijcXbaVkyVZftNWyn4Ed7Ou9Ft89GiZgHsug5nNmDe6Dm7hzXIFR5xhWbykwN%2FnKcY6D63Hqw5SROrywHHXkCcz4eepWRWfjSflT8GwqlvPeptlarmL%2B2njYWfcM3JFxKN08VmWgCEyyjSgLKI1hvBMn1VNH9tyOfuUPKRgc9uxzwJG8p6anxG8WpKQ29SqOHADokWAzZPfD3K3P9AZnqnRGQ5sr%2FIft6LaQuWrfOVQDFbaCRo18Sl3J4cvFLeaDtGwgSDBUoCYdbWVfUgg%2FI2G6VnsUrK1HH7edunzgYLPyQlMwQ4bJKzt46pHjFazPTrAS5JJthNMMXOv%2BeigngCNy3GciHP%2BP7Eow7MflvQY6pgGoSLZNHh1Xyvs6dWUxnukJMR2Wz%2F3bxRh4xQB3D%2F0QCr3hXSdus7fzklVyqxb7xbjZuYLnY6fbVIXg0n8DVh5MbLxfzjNsZk209O8cAN9JFNNO2snE%2BOka1fG3laLgOR6DjK0RXwhkchWyHiAuWm8HxR9KVyei9tnkaEp6R5bZXdamF8NbON45D%2B4D0dq3d0zS%2BszRYU7q3VdS5NAiOzSEoS3Xtf3I&X-Amz-Signature=671b80b1935edfb4a4b5aeafd2825044e8a75919a7aafe57350e888348556027&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOLUMAC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOh2ctpdegL33YoqZ4EluDB6J1RWGOhnCm6rYCBaNjoQIhAKlWwTXmweTfDaf%2BMpSPqMrOZeBcmM1TaPzBu3MxOsw3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz118t0bF8lH%2FfFR2Uq3AMNuoq71zMfCXjeD4DsPmoC2MRMjLCmAMZdFWTQPvaUYwtj%2BIV90AxHOCnbWzpB7kklEHzTcdVfgQ9PEhENlrDyuR82PuQmM7bECT2wdNN9L4UQte%2BZBXejzpluK97gg9jRuexqW2FP4itVrkhUvQzIW3%2BWC4rpaNBWI1SDdLzV93vMW3xjdQFEP2DcUnDvjvqqocLiZQHCQhu2iGOhoZ0M%2FmNXdwoACG4ZwJQO8g5CIjayYpYMoVJjnC9TKPx2bFFNXJ21HF6Fj5dOC%2FJfpf1IyEqiwBxHg4mcSB5veWmE7Up2KGftv5Dt4QL40NKC0cyf6UIdqkEiTsxYxGn0RLbx2IJ6fOB2cJyz%2BXTNFTAeUfhhhIiSmk4zwVuB4r3mDb67o9LVKmxJPsbhFAxfpKg3%2Fz1lI1cNEUgFKlRqnPJMXx51YKt3%2BEPWk3y5SQWPLFCcQg5xXL5HTQsQGEClFWvtrSu%2F09q%2FkuwazeWpH8lHVYWFFe%2FClOafhoQRrE9k62JZLhFNFPurJgfha7GnoekfyBMJ2KGn9Xp%2FG%2Fk2p50e1dpquCLM8KflI8ITRgNWrO2jk9TpvOipVPw%2FkQ8LaE%2BW%2Fc5CXB32Kxw%2F0%2BswaUu4%2BP7w9HKXx2wrdlBrxjCV4uW9BjqkAdxBCocuSduN318%2BI8XltOBQY8%2FAt9587i%2FrsBhsmJsMCC2ziXanZKPWoLRo1Z9S9TpqhtlcRIJjS9D28BpIy9JBjvw5VxIUdnPQPBBtcK7vDmq5m74GbxTEuuy010zMMlWAaUxp7oVClhjnMmbxx2gkRgo%2BFEs3RNqxHEqJEEUJQkblNV8DcwEAB9LYXhgi%2BxgeiO%2BtoitCKplvM9RAYvLsfP9%2B&X-Amz-Signature=3d9200a897c38b7950abe51011f992bcddcc42f07dfd65cf81540d97850b2651&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYJG4U5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BsWk7hQKuJGuBoRkx%2Fio63EJk1oSknXrWxc1LHGhO5AiEA553ITthWovL63ltob2wjery4PO2KIQr60dcuhStw2Y4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4zjfZTfL08hh17rircA8vIFEiKs%2FxDYQSWqW1f8pp%2Fhq3591jkGnSJ%2Fphs3nEogaTdBwc0LJDAsV5rRCFkeH1W%2BvHAzkGyLNptLrHq6ZhbEM4O2QznqVAjjKM2e6YWeeUApnqF9P0ca3WGPlTbvRwdix1XK7hR%2Bj77nMptDLyivg4bjHGiA7JfPVu365JlanaYf9kORIrTGbQW7h73tJX5si77pSe%2BeRopkXG84DTISW4WVDHIS03TRt63%2FZonvIRo3FpTmEHAoiwfG6zBPk6DaEJcnWx1NXowG8XAHEBpCxOLxPyqYb0iXXoze3%2FG5WqwUHHcwd3vg1G%2Bzlx46Z8Yf%2BMgiMasgdViN0Fj%2FXppwqVUmUD6mDBE1SFUYP7img3FyOqlZE4cW4sxKqdNWjZbsJ7rFGSGUmk52l3CQMzDZx6nRiTpCIFVZDeIZ262fc41h0X6r0E49epn2FWfEld0sOkZkSq4ZqJwqEm%2BdVqgsPJVR%2B3xmwh0KEOflNh6YMkK8WDvNfIB1OECvp%2BTjMGbF9POzTM%2BIB8FZfFtftEcI82UXsiVTQUPtQfjm1qxit7Uoj53bCt7Fa1pr8Q%2BvQUf9osFc%2F34r1Lm%2BO77EbUmgeGGBFH%2FZDK0e36%2BijSv7nWCh5TUBTsYpLTSMJLH5b0GOqUB8Fr8oSUVZIJJJ0iRoxs0YZTrCSWSgWPcVZ4k9mruMuSjA1%2B%2B4ME%2Bj6RIHM5EkFmQkxb%2F7o6S%2BHW72CnG7bFxx8AloMimfp6K4dF4nhndKY98kMFSVDUdWH6HAT3JahiKJro2lTqhAX3h4Xrdw6ik78t3nyIyzAMWIWKO4um50gm2pqTp2YK%2FbcIJPxfrWvzNUjaQpwRX%2BErHH9i9vcrl38EXIAhl&X-Amz-Signature=152c41a0f65b21ea08e29369593a833724c16a31cfb8d35576117a122e606818&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
