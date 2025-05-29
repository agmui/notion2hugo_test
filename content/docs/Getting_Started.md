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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6N6RP4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4I6CSgv4lpFZuDIToi7WphRDfoomxsg5aVfuWa7ZFVgIgFcJPg3La5LyrL9t3ySf5XQgcgVb%2BWlJYTH72U4R2ptoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6dyIaAhVXqQFl8pircA%2BM0wUfvilo2fsbb3oG48%2F%2Br6Vsq0MwCJsT51wv5eGq%2BeWANQLGETB5TTBihs1feK9u7ddADozkcEDumvhmiVUwuQgxFBjo7jRWGceTWSgfnGuq2jMSbhkkY6JHg8ONIR8aE09hJ3cm7hPDF249UH%2FmlV6pjZYdiweJkWNtAm82wjuCK7h579%2FBwPs491hOzzUS9i%2FG62H7pMzxDTQOtwvYY06sSG1Qm%2BVDhMC6iPHwNlirbFro7cxfscNdUsZZeAcypWGtOWjVhd0B64DXIr%2F7Al%2F4yuXbKqbQAjX5r18YOCBiBm%2B%2FKLosxh%2FjJgtLHQ4MI%2FWf9%2BPUOH%2B1MbViQy2qNaTnkTrFI0v5ysq%2BnQ4vMy0zz4iDCq2FKRIoEDnEb%2F3tv1EsYNAfqkANOUGHbWFFTt%2BLq6lHhv4xIngrN0gx4JtUMV%2FzPUtAZnkpttQOnqQbRMiB6RP1F55weMESRqqukotm3z8rsio8cL5778phtGf6l17MIPJQPoVHVHKMEANmVUuTxSe7nNE0vbZyQhDUa2Vx6fDmLkuTZNiRfh2jg9FysRZKR5H73wlJIxsWNEJHr2%2FIT7GGVgGzxot5r8KgFnLUTLOOL69%2FpncflFqXbdcWXauqJP7tul8A2MJ6z4sEGOqUBJrU5gohEIZSkVwPD9semsvos%2BTDcKdplSW%2FeTBzrNCARozJhpLZOJiwoVS1SgnWQ1rLv4HOA3pKhptUr3ddRIEgrUKEXSQb3jpRemn1nUQf%2B0ZdmeEGTRYysUYyqoUfx7ci%2FEwLOqtguxnLcKWDNOezoePJYrdsrR7ySSpZpTDTfcHjItG0bpz6BvbrAOt%2FuKo48xwbZtMqTtDMnHKovr1A86UdQ&X-Amz-Signature=cb128f6840fe83eae3b8c3b662b89eda38145f89324da94c8691cfc87aa30207&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6N6RP4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4I6CSgv4lpFZuDIToi7WphRDfoomxsg5aVfuWa7ZFVgIgFcJPg3La5LyrL9t3ySf5XQgcgVb%2BWlJYTH72U4R2ptoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6dyIaAhVXqQFl8pircA%2BM0wUfvilo2fsbb3oG48%2F%2Br6Vsq0MwCJsT51wv5eGq%2BeWANQLGETB5TTBihs1feK9u7ddADozkcEDumvhmiVUwuQgxFBjo7jRWGceTWSgfnGuq2jMSbhkkY6JHg8ONIR8aE09hJ3cm7hPDF249UH%2FmlV6pjZYdiweJkWNtAm82wjuCK7h579%2FBwPs491hOzzUS9i%2FG62H7pMzxDTQOtwvYY06sSG1Qm%2BVDhMC6iPHwNlirbFro7cxfscNdUsZZeAcypWGtOWjVhd0B64DXIr%2F7Al%2F4yuXbKqbQAjX5r18YOCBiBm%2B%2FKLosxh%2FjJgtLHQ4MI%2FWf9%2BPUOH%2B1MbViQy2qNaTnkTrFI0v5ysq%2BnQ4vMy0zz4iDCq2FKRIoEDnEb%2F3tv1EsYNAfqkANOUGHbWFFTt%2BLq6lHhv4xIngrN0gx4JtUMV%2FzPUtAZnkpttQOnqQbRMiB6RP1F55weMESRqqukotm3z8rsio8cL5778phtGf6l17MIPJQPoVHVHKMEANmVUuTxSe7nNE0vbZyQhDUa2Vx6fDmLkuTZNiRfh2jg9FysRZKR5H73wlJIxsWNEJHr2%2FIT7GGVgGzxot5r8KgFnLUTLOOL69%2FpncflFqXbdcWXauqJP7tul8A2MJ6z4sEGOqUBJrU5gohEIZSkVwPD9semsvos%2BTDcKdplSW%2FeTBzrNCARozJhpLZOJiwoVS1SgnWQ1rLv4HOA3pKhptUr3ddRIEgrUKEXSQb3jpRemn1nUQf%2B0ZdmeEGTRYysUYyqoUfx7ci%2FEwLOqtguxnLcKWDNOezoePJYrdsrR7ySSpZpTDTfcHjItG0bpz6BvbrAOt%2FuKo48xwbZtMqTtDMnHKovr1A86UdQ&X-Amz-Signature=84f84a28d240534f3fedba31b8522173fadbdd886d4820976c1c44893b10b796&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6N6RP4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4I6CSgv4lpFZuDIToi7WphRDfoomxsg5aVfuWa7ZFVgIgFcJPg3La5LyrL9t3ySf5XQgcgVb%2BWlJYTH72U4R2ptoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6dyIaAhVXqQFl8pircA%2BM0wUfvilo2fsbb3oG48%2F%2Br6Vsq0MwCJsT51wv5eGq%2BeWANQLGETB5TTBihs1feK9u7ddADozkcEDumvhmiVUwuQgxFBjo7jRWGceTWSgfnGuq2jMSbhkkY6JHg8ONIR8aE09hJ3cm7hPDF249UH%2FmlV6pjZYdiweJkWNtAm82wjuCK7h579%2FBwPs491hOzzUS9i%2FG62H7pMzxDTQOtwvYY06sSG1Qm%2BVDhMC6iPHwNlirbFro7cxfscNdUsZZeAcypWGtOWjVhd0B64DXIr%2F7Al%2F4yuXbKqbQAjX5r18YOCBiBm%2B%2FKLosxh%2FjJgtLHQ4MI%2FWf9%2BPUOH%2B1MbViQy2qNaTnkTrFI0v5ysq%2BnQ4vMy0zz4iDCq2FKRIoEDnEb%2F3tv1EsYNAfqkANOUGHbWFFTt%2BLq6lHhv4xIngrN0gx4JtUMV%2FzPUtAZnkpttQOnqQbRMiB6RP1F55weMESRqqukotm3z8rsio8cL5778phtGf6l17MIPJQPoVHVHKMEANmVUuTxSe7nNE0vbZyQhDUa2Vx6fDmLkuTZNiRfh2jg9FysRZKR5H73wlJIxsWNEJHr2%2FIT7GGVgGzxot5r8KgFnLUTLOOL69%2FpncflFqXbdcWXauqJP7tul8A2MJ6z4sEGOqUBJrU5gohEIZSkVwPD9semsvos%2BTDcKdplSW%2FeTBzrNCARozJhpLZOJiwoVS1SgnWQ1rLv4HOA3pKhptUr3ddRIEgrUKEXSQb3jpRemn1nUQf%2B0ZdmeEGTRYysUYyqoUfx7ci%2FEwLOqtguxnLcKWDNOezoePJYrdsrR7ySSpZpTDTfcHjItG0bpz6BvbrAOt%2FuKo48xwbZtMqTtDMnHKovr1A86UdQ&X-Amz-Signature=2971c09d6bf8547cc8631c4c3637ae44f163228140a6bc4eeb5eafe8e86dc677&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5G7SEPV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvhQsZLZbOXns2Mlq9X9GX%2B6JXf4ISDXhCkoxxwjh63AiEAjAPe0jVqdiij939M1QOOxlPRdgr2OknlLpfcFvL3220qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdT%2BlY2yN30xeaR4SrcA7ZDu%2Btx%2B4BsOvL%2BCzx8OmTT%2FyB3Zz3z1xhZD9kH8trieXnZa%2B5MU3nVpdr%2B4PdNsXK2Wb%2FYBleQ7jxHxNgX3rN865NXIQMDw%2BiwOrq%2FjmnVRFmmA73RncyJTytwWL13aZ7qPMPUwcS3ZNjjTBASIbPgdgeCYXAb6n%2Btufl7FPqKLKlALV319tXNj%2B2AUMrqNfPlBZuFhHmlBfdOY55KASkk5DRvqvU36yMN8sNRZec46DHb9brZMfCz7LEMRkSpPpARLTC79thYT2FJpzRXPqeKmN8W%2FALQt1t%2B33Uhr9YZEdmb4aUX1K%2BxGKYtBJCk30qQzljAOjNbRuUlec6DiTPxtjWpTVWQlSaOi%2BhHOmjNaQKd%2BDHyd6eKbyk837Z4ncI%2FIuG%2F6Fq6L50Au3NY70gkOMdh0ZLgGTXD0u3DIMG5t8nFZh3ixMALLZYv%2FlccpnWOtuovy3fualbhmq7GNPbfwPpgkx4NMNi0Y23GPYTulXo6NJA1xoFN8YWJPfYojqf%2B%2F3IbFvAF87S4umYZXnGTK%2BI2PYp5Cr30Aw0u8Yo9f1klWuTKo87LydYlY60F%2Fyp%2FCqn7DehZfwVBZa%2FlC9qEYWPcjoPxvrDlFPdyg90u68GITyVMxl4d78WBMMKz4sEGOqUBbdqYNmB2sR0QPGLqObq8sx8zMal6il3iqtj7RLxXlQPwS9YJmj%2BHdutXA6QJN46%2FRFPFt2PAM8edORKaDsfxMZCkN9njUJ0VS0Mqhtw%2BA8DE43MgLLQwQ3Dpsypzeny8JZHYO5iYYUtJUI6qgB3Ugt7Vf90MIUhYJm4LfIuKNS%2BAufumFrGVG2W9IQy8z9kzuEe4EXKNvF6UWhOmCgjV2Ch%2B29E5&X-Amz-Signature=b699e36823deec7a8945ac5d8af6160174dca12238ba36a81f20e16eb101381c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XGQR6F%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK6jiNfAGM7tR%2FwE8QIyNKHbIKsKOsb5de2LrSAHfq9AIgTsh8uRQBkVSBP9WriVC80IHQE2nq8r3V6neKFmZRcSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbfj%2BGEiY2o%2BdfLPCrcA%2B8KY9WObP0GXMyomfnQmzl3rfOlANveAxFCMnQkaNfjJ1g1EuVYDu6gqEZcaZKzZjAI8Y5ElMPuaLQcvxtkwK8oAisWf0q%2Fj820NYsnFNgmc77OuEi7MW0sM3CAEDTwuJ7AMLT6QxbGBlCHJWHBjiyOFmN3OWBqt77ELp3NTk7AgAWP7Z01HA8bItyOze522msIif7ywXzue6lppYL8MYLHhrmS3OmrtmxeioFjz492T80QqH8U9ckOPTMtS8mv8PEzHFz2ifhxovvXAfOn3d6UCvDbAWFKIWY7EB4qL4rbsUvnRh2yVCJuZnlvEOvw1Vzd%2BO1rC9YLmQzAhGGh0f0AfdGMLlPgChWw9LfB1N88dN0AjU16k6K2az5xwVGUhxLrbMhGB8iyCuw%2FExizFnjVu2AW3iKJ6xMtFTeG9lRwOq4RYItsN5hNdLTcD8Vxuf89zlmdOO%2FN8ea7lidsn%2BpYvfiif4xxnNs6pcj5HJ19J%2FC%2BIgC2US95ZEcbJz3%2F%2FSaBHV221pCAwWeZIN1wEOZGaiHMrjJh%2BV%2FCBNGlnZT%2FAu%2FKffi3PH8N5ykyVs9Mjew7X5i9HLDXd4XLItemR%2BV29JQozcY2aZG2DWrcvZusJ8NheYQYxW1J3hwxMMKz4sEGOqUBAibv6l8QDSGFUs1zI%2Bo%2FGXpjqf8r8XbWQy1xZmD%2BOxusgx%2FiiW5boXzmnfyIA0t1uVTl62IvVs1xaXHRQ3rb6%2FbVMEEccJxqbl%2FYK0Gc6KBFOOjOQv7NMJCcW0%2FZHXoBKBVCta8VXflfFSLCaRu%2B0sN%2B2PB3kxIk5ZEoaYJmf4oUOmLDWgsXMGdPc4W1E4gLSH9eOJTXI2AB0YCP0pnOCdKQ8z1x&X-Amz-Signature=3689bb5bce26a7890abefce4bb0a9485006ec078ff4b0dc2920f66c3e777754d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6N6RP4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4I6CSgv4lpFZuDIToi7WphRDfoomxsg5aVfuWa7ZFVgIgFcJPg3La5LyrL9t3ySf5XQgcgVb%2BWlJYTH72U4R2ptoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6dyIaAhVXqQFl8pircA%2BM0wUfvilo2fsbb3oG48%2F%2Br6Vsq0MwCJsT51wv5eGq%2BeWANQLGETB5TTBihs1feK9u7ddADozkcEDumvhmiVUwuQgxFBjo7jRWGceTWSgfnGuq2jMSbhkkY6JHg8ONIR8aE09hJ3cm7hPDF249UH%2FmlV6pjZYdiweJkWNtAm82wjuCK7h579%2FBwPs491hOzzUS9i%2FG62H7pMzxDTQOtwvYY06sSG1Qm%2BVDhMC6iPHwNlirbFro7cxfscNdUsZZeAcypWGtOWjVhd0B64DXIr%2F7Al%2F4yuXbKqbQAjX5r18YOCBiBm%2B%2FKLosxh%2FjJgtLHQ4MI%2FWf9%2BPUOH%2B1MbViQy2qNaTnkTrFI0v5ysq%2BnQ4vMy0zz4iDCq2FKRIoEDnEb%2F3tv1EsYNAfqkANOUGHbWFFTt%2BLq6lHhv4xIngrN0gx4JtUMV%2FzPUtAZnkpttQOnqQbRMiB6RP1F55weMESRqqukotm3z8rsio8cL5778phtGf6l17MIPJQPoVHVHKMEANmVUuTxSe7nNE0vbZyQhDUa2Vx6fDmLkuTZNiRfh2jg9FysRZKR5H73wlJIxsWNEJHr2%2FIT7GGVgGzxot5r8KgFnLUTLOOL69%2FpncflFqXbdcWXauqJP7tul8A2MJ6z4sEGOqUBJrU5gohEIZSkVwPD9semsvos%2BTDcKdplSW%2FeTBzrNCARozJhpLZOJiwoVS1SgnWQ1rLv4HOA3pKhptUr3ddRIEgrUKEXSQb3jpRemn1nUQf%2B0ZdmeEGTRYysUYyqoUfx7ci%2FEwLOqtguxnLcKWDNOezoePJYrdsrR7ySSpZpTDTfcHjItG0bpz6BvbrAOt%2FuKo48xwbZtMqTtDMnHKovr1A86UdQ&X-Amz-Signature=b443ce365d8f08b43bc9648cf0247870f6817a854f7e0ca27009c852218e9cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
