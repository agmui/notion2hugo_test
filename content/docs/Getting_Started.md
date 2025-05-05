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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUM7R2N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkUpoJ5sS%2BMX7uaXjPUakDQjv3sUQkjMFXUbvoQ%2FN4AiA1LkBNSlznOQE8N61v6bnn5mhOM6vfwbTsuKxDgYPDrCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMdakoFsdkZQYvIct%2BKtwDtGMF0xARJnXLfAhEaJdt7m4Rx4DfmRaXKZ%2FvRnI7%2BlGbD9lYiyHCGMxx8poxPEHBPc7qgtv0oAsrjebN7%2BHbATELYU9QCrSj%2FRs8UpFrrSBda6CnOqTRpwbpZjcCzEZSubBDxFZtdKN3lrPdquP91lPtdO%2BApzs1doDnSm%2FJdUP8ZrUX9IuqRRExxWPHMsTNaOWWIn01VNL1YBLlxGxwmDvbfjmCcuY0OjZjWvMtyMuSV4i3CmhlbeNpr02fC98UZdpSkQjlJHKyZckqhm3EazwrDeDncXsFpHQawdTGihdUGOZiL79jXr0WtpvEx9uPM7HE88K2PqAyDFwjFpH%2F1FyvFXtgfdPwH2%2BmJMZdjzJ%2F3FZYlmcoWMyZS0Q6OQoxzK9UhAf7KQWvLkfUZqGdQiTdkESmf19NIfRgvx1GqHE7uMBuXaOAlvjqK0LyG8B4%2B7BRehu86TCkDan3bDME4Ie7K5OaKIug%2Bi3Co0zkY1cfAbKND6dj9jHglcykOh%2B%2BllBGJkX%2F%2BB2g3Wxgrb2x9XXgPVclX39FrkeefNekEqZbMbvfZQZ4C1CgWmmi1VzmrTjPZQzf3lrwYDQBuD39l2o54XpSqg1076dWFuQazUEmUxcKADjVMIU6pfowm%2F%2FkwAY6pgHDUEZNz4NZwCrKG9qg73Uk5JCiVw%2FaIgfSHUQdGFxDWlDHWH%2FUtjkzfTrORzgWpLNIL7uHuQp0aZm3hcZic82TeNkizmuxHvkAo4G1kr50vjbpKhd4cNZ4EvSTjxkAb7IfvRZXdN98ku702XURTA5kZj32Ml6bszZbp07JoCpBe7cEQmZJIqgoig9Bhwp%2FmWszHvDGwg0XUfmPKKPktcIgEtxOX8%2Bk&X-Amz-Signature=7ce9098fe3916569556d22fc52147937af1574b3fbc577007e1a20db46efede5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUM7R2N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkUpoJ5sS%2BMX7uaXjPUakDQjv3sUQkjMFXUbvoQ%2FN4AiA1LkBNSlznOQE8N61v6bnn5mhOM6vfwbTsuKxDgYPDrCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMdakoFsdkZQYvIct%2BKtwDtGMF0xARJnXLfAhEaJdt7m4Rx4DfmRaXKZ%2FvRnI7%2BlGbD9lYiyHCGMxx8poxPEHBPc7qgtv0oAsrjebN7%2BHbATELYU9QCrSj%2FRs8UpFrrSBda6CnOqTRpwbpZjcCzEZSubBDxFZtdKN3lrPdquP91lPtdO%2BApzs1doDnSm%2FJdUP8ZrUX9IuqRRExxWPHMsTNaOWWIn01VNL1YBLlxGxwmDvbfjmCcuY0OjZjWvMtyMuSV4i3CmhlbeNpr02fC98UZdpSkQjlJHKyZckqhm3EazwrDeDncXsFpHQawdTGihdUGOZiL79jXr0WtpvEx9uPM7HE88K2PqAyDFwjFpH%2F1FyvFXtgfdPwH2%2BmJMZdjzJ%2F3FZYlmcoWMyZS0Q6OQoxzK9UhAf7KQWvLkfUZqGdQiTdkESmf19NIfRgvx1GqHE7uMBuXaOAlvjqK0LyG8B4%2B7BRehu86TCkDan3bDME4Ie7K5OaKIug%2Bi3Co0zkY1cfAbKND6dj9jHglcykOh%2B%2BllBGJkX%2F%2BB2g3Wxgrb2x9XXgPVclX39FrkeefNekEqZbMbvfZQZ4C1CgWmmi1VzmrTjPZQzf3lrwYDQBuD39l2o54XpSqg1076dWFuQazUEmUxcKADjVMIU6pfowm%2F%2FkwAY6pgHDUEZNz4NZwCrKG9qg73Uk5JCiVw%2FaIgfSHUQdGFxDWlDHWH%2FUtjkzfTrORzgWpLNIL7uHuQp0aZm3hcZic82TeNkizmuxHvkAo4G1kr50vjbpKhd4cNZ4EvSTjxkAb7IfvRZXdN98ku702XURTA5kZj32Ml6bszZbp07JoCpBe7cEQmZJIqgoig9Bhwp%2FmWszHvDGwg0XUfmPKKPktcIgEtxOX8%2Bk&X-Amz-Signature=ddbbd4eff57853bdfe5db945314160af2cadccef17147f6a80ba1a443386f509&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUM7R2N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkUpoJ5sS%2BMX7uaXjPUakDQjv3sUQkjMFXUbvoQ%2FN4AiA1LkBNSlznOQE8N61v6bnn5mhOM6vfwbTsuKxDgYPDrCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMdakoFsdkZQYvIct%2BKtwDtGMF0xARJnXLfAhEaJdt7m4Rx4DfmRaXKZ%2FvRnI7%2BlGbD9lYiyHCGMxx8poxPEHBPc7qgtv0oAsrjebN7%2BHbATELYU9QCrSj%2FRs8UpFrrSBda6CnOqTRpwbpZjcCzEZSubBDxFZtdKN3lrPdquP91lPtdO%2BApzs1doDnSm%2FJdUP8ZrUX9IuqRRExxWPHMsTNaOWWIn01VNL1YBLlxGxwmDvbfjmCcuY0OjZjWvMtyMuSV4i3CmhlbeNpr02fC98UZdpSkQjlJHKyZckqhm3EazwrDeDncXsFpHQawdTGihdUGOZiL79jXr0WtpvEx9uPM7HE88K2PqAyDFwjFpH%2F1FyvFXtgfdPwH2%2BmJMZdjzJ%2F3FZYlmcoWMyZS0Q6OQoxzK9UhAf7KQWvLkfUZqGdQiTdkESmf19NIfRgvx1GqHE7uMBuXaOAlvjqK0LyG8B4%2B7BRehu86TCkDan3bDME4Ie7K5OaKIug%2Bi3Co0zkY1cfAbKND6dj9jHglcykOh%2B%2BllBGJkX%2F%2BB2g3Wxgrb2x9XXgPVclX39FrkeefNekEqZbMbvfZQZ4C1CgWmmi1VzmrTjPZQzf3lrwYDQBuD39l2o54XpSqg1076dWFuQazUEmUxcKADjVMIU6pfowm%2F%2FkwAY6pgHDUEZNz4NZwCrKG9qg73Uk5JCiVw%2FaIgfSHUQdGFxDWlDHWH%2FUtjkzfTrORzgWpLNIL7uHuQp0aZm3hcZic82TeNkizmuxHvkAo4G1kr50vjbpKhd4cNZ4EvSTjxkAb7IfvRZXdN98ku702XURTA5kZj32Ml6bszZbp07JoCpBe7cEQmZJIqgoig9Bhwp%2FmWszHvDGwg0XUfmPKKPktcIgEtxOX8%2Bk&X-Amz-Signature=f12a8afdce890e9a3f872deb0c6d05e900e7d0e95f0d0d150a8c230052eff890&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSZAOET%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDeFXAnw0jlnS5Ddr444%2BG%2FhpvzcZBpuA4pgrP20lXwIgKc%2BVd47ufkRjoDKCDJ4DnX8ELE5wdwfZ3NbFFjJb%2BjEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMOsF6VbbwwNiTEV6yrcAxbjAz8dB5Da1I8F9Y1qTqDTrtgq2k37yTNiCBCuyWgg3cx1IEmqqxEF8zUsfyBV849lxRuJ3xD4hE%2BHmlZCU9yWPkNkBZdbGTOxRx2eQQKjzvtF7f3ZGut%2B5XCcnJzixRoyEZAory4Cg4L4ip3fNA4rhfswL3w5QOSDGiTjjgeJ5YFVfbsX%2B6FqkmgUuLX5zzrP%2Fk8fq2nZqxNzE0t%2Fpt6%2B7Cd9weLE8Iixt7TU5d4OFJSoh2H0RoLUSomvaiBh2901zRu1h2rtvY0GXzGPlSCMLNvKGDVSoeszNI%2F9nqqCz8W1Qu6%2FYxTzEnYChLovLUsUxz7ej9WpP9IIPuU%2F2jvoVgso394uAgJjS2%2FCRFKqDBWvGUm%2BBRsj4YfPzAL15jDB%2BpvM3FW2rHS51h2bSPGspIuK2kDkngz6E6tpSCHxh09NVIWx3wxdmGvmRfy4Vr%2F2Y8xkA49hVv2rqr6HpHQratxYT4j4c8m9RCgxusUE4MBcuht8EQjsf1IWcKUNFyC3EgtN6QqTXrlzYMYRquYwPIWEXnh8iRawOB2Pzg8rqedPeDJ0tPW2t0WGY4qZy1bRJClXSBM1tV9qD44i6aIoLehHLWa4fQHhjcmhHqmSsrh3yhdL7rVhVBljMKX%2F5MAGOqUBALkNl3t4HE%2FiUX5a%2BKdJbIKOBq7lsKilHhErvp3e%2FyFBl5DtnugF5Q7dLcUHwxNAR7WIlhA54NjwdH6dJclFFDWsAEOE%2BVP3avV40wXEqahDQTab2QWqo35N6%2FXaZs%2FpBCetxDJTVgy84LA2nnl5XNKCNcWxJN82NYG2hVrQZB8FewO2sVmmiWilORFRRnDTduEHSH5m8GmVXnKHw96B02PYow0o&X-Amz-Signature=4a8d2d738e0615e013756ff15f5ea0812c61b4afb0200ed153ba8f5e22bd481c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3WUVLW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjO7tI%2BB9Hi%2F0l5WsP1vtVHnIwFTNR%2BkSkrC%2BODELVTQIhAOCSMMR1nuuU9R%2FWUHBNlLiU1U3tLTm7wOwQhwGoN27%2BKv8DCDgQABoMNjM3NDIzMTgzODA1IgxsOSAxMJYVZxWB%2FI8q3AN6VT7Th97HUfTik%2FTF3rX7FP%2Fj6V6RGWHQGHAz20xARmHSf2SCH8efxoAlxPYWDhNQIdR2fUmiPtlbkg6umhMpRqeTAji8YnCH%2FEgTqtSCA3mT9YIf4Pe4KT%2FOf4G1ISvgpR6CWBJ%2BlR1nCm9iZFnhphEUq6z6SEtKRjLvYb4l8%2F%2FQWElL2IbuuKnBLfWuNgsi6rO%2BsWGBV2S2UUbRSZG%2BTA6CnJ1OGgppwK45zRec4mmerCI9%2FjT19aB9LphoKeYq32PvGJy3ZC8EbGRnLp4AFESGlpvkz2nM1p7uMD53%2ByAOoe980020a1DcsN64MnImz7uh03DG1xpDiTJ0TW2IA7%2B6nldRPJvrOf%2B8HWb7AbeO9pckMaUwJ%2Bc33p3ms8GoZdzEGHgPdI4cRCEJO8FJkEqZNund%2FZNeUGYQRyc2MqQWgOvfj7l5P18%2FiIKJGni58mM9K693azN%2Bh%2FgHW7LDFI0fimJtPv5m0OeWjg2ZHhx44IzpebtGh2iYo4ZgRtAcq7EcoEnR8hTrZOsZk%2BA2UjNWYYqZe%2BLC4WxvSgckdgv139LN0woJHDziP7hiSja%2Fv5V5Jt54sNrkAYzWJ%2BTkufoayrQmEkhKjJmzB75W37rzuvTrTOWi9SVhLjCg%2F%2BTABjqkAcU9Th5sIENo3gFTS7%2Fd%2FFzliJNsB2Wd03H6FI4yhXP72Tmz3XGOfov4y0KgOO6lC3mB9w7ChcGKFSOpBloGbVVd3DQLsNU%2FzrKC75jnpugAGy26kAAdzlaM7UwO2Dozny%2BdkgJxo42hvMfMcYsn7zVINkXynsIHkM1j70gNyu6TS1hIQDRE%2Be7oA0QtgJS626vdfwa8UpYJo3li55dxgGVJUGl1&X-Amz-Signature=c084f85c90b8f4d4adf9f60b1e8369d0b40bd5dfd44cc0c9c8b8374263f0e602&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUM7R2N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkUpoJ5sS%2BMX7uaXjPUakDQjv3sUQkjMFXUbvoQ%2FN4AiA1LkBNSlznOQE8N61v6bnn5mhOM6vfwbTsuKxDgYPDrCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMdakoFsdkZQYvIct%2BKtwDtGMF0xARJnXLfAhEaJdt7m4Rx4DfmRaXKZ%2FvRnI7%2BlGbD9lYiyHCGMxx8poxPEHBPc7qgtv0oAsrjebN7%2BHbATELYU9QCrSj%2FRs8UpFrrSBda6CnOqTRpwbpZjcCzEZSubBDxFZtdKN3lrPdquP91lPtdO%2BApzs1doDnSm%2FJdUP8ZrUX9IuqRRExxWPHMsTNaOWWIn01VNL1YBLlxGxwmDvbfjmCcuY0OjZjWvMtyMuSV4i3CmhlbeNpr02fC98UZdpSkQjlJHKyZckqhm3EazwrDeDncXsFpHQawdTGihdUGOZiL79jXr0WtpvEx9uPM7HE88K2PqAyDFwjFpH%2F1FyvFXtgfdPwH2%2BmJMZdjzJ%2F3FZYlmcoWMyZS0Q6OQoxzK9UhAf7KQWvLkfUZqGdQiTdkESmf19NIfRgvx1GqHE7uMBuXaOAlvjqK0LyG8B4%2B7BRehu86TCkDan3bDME4Ie7K5OaKIug%2Bi3Co0zkY1cfAbKND6dj9jHglcykOh%2B%2BllBGJkX%2F%2BB2g3Wxgrb2x9XXgPVclX39FrkeefNekEqZbMbvfZQZ4C1CgWmmi1VzmrTjPZQzf3lrwYDQBuD39l2o54XpSqg1076dWFuQazUEmUxcKADjVMIU6pfowm%2F%2FkwAY6pgHDUEZNz4NZwCrKG9qg73Uk5JCiVw%2FaIgfSHUQdGFxDWlDHWH%2FUtjkzfTrORzgWpLNIL7uHuQp0aZm3hcZic82TeNkizmuxHvkAo4G1kr50vjbpKhd4cNZ4EvSTjxkAb7IfvRZXdN98ku702XURTA5kZj32Ml6bszZbp07JoCpBe7cEQmZJIqgoig9Bhwp%2FmWszHvDGwg0XUfmPKKPktcIgEtxOX8%2Bk&X-Amz-Signature=9e317811a3ce4297bb9867df6a2be76b78054bedd824b613bc55882299f66b73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
