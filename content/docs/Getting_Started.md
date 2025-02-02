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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MHGHOGZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOdwixduSaQb5OjR%2F5g4WZWFLpl9jXU8t7e3mEQPD4AAiEA3kHZtUE%2Bbk0R4L35bwmFRiuGddAWzXNEWSjqdihRevUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE53QJuy2QnZYVJaOCrcA4%2FD1uOGJCrnXiiAALEYYFlDo6fj4WpC1oQ20aMArPDp2M4XXsSs1uIsN5RQ6%2F8Xpn7%2FkEYpypnkLR6OHGSMI08fPrdmYdr4t31bZxPc2KZzDgZU%2B%2Fj7eiE1vSfmg1Lrt0FIfFTNB96nXbMcz1qq%2Fi%2B6behPpSLmP%2FAt4tr8J1I03y%2BoiDu6upmebdJn8ukKYbcNuDcPUl4BxtrkabNItU93IlRTRK0i4M1sKyzorO3Q6Y7Br6S9T5bNgQ3trxUNhrHQqUpM2t3gWr4cjDJ%2BTKi8e3YgzM3cJCbnhnBFVxi0ALlrvnb1tYIc8vMFAh2m48mVl3MsQOa9iqnDvpUZPdubrOHauXBRlhTZBBv7U7rSI8oIqYUXoYxy%2FYJmrzM%2FEpl5daR1ssff6XwzPQ6M9ikew5NJJtqnufFWwIW9aI1WKTAyDuS3fdBJdIWtG%2FCno3z9vfICoXk3SnxDFrykRyblPJLtLAlMufWMFXSSRdmA8xWU6q1HqVnEe5XnuDY9kEP1ZpCJNIMYDplj52sH1XWeifzseq12fRfPon4bUHVq2GpaMgSMTA6lmphwin%2FCfwPm%2FoHsWYIw%2FlNqPlTw7c9H6oN5DWnxjGanzoHyARlcGOSTzqy4sw4NA4CnMKvd%2FrwGOqUBIp1Wz%2FhG%2BIT8J8bMbxJ%2F52otWlzu3fg1efvhu9dDkStBWRcg2vvxBJURIjMgas7js9UhqxA2Ud1m3fuJ%2FJOgcpYzYs2fJ0eZHrRMRaTSGDM9%2BtoNtAXrdYu5glQPkQcmostalMLNZAPEdpRDzyA1lgmzx6rGN5gbeZK6QCPNXu89Oiuk2varxtJ4WicvR2NnbLX0QGqcwGFBTUr6Aw21EgNVJqm2&X-Amz-Signature=ed630e296fe9d4205ee47ce4e0bea0cea50b6df94870592bbf9b52f530ff86e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MHGHOGZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOdwixduSaQb5OjR%2F5g4WZWFLpl9jXU8t7e3mEQPD4AAiEA3kHZtUE%2Bbk0R4L35bwmFRiuGddAWzXNEWSjqdihRevUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE53QJuy2QnZYVJaOCrcA4%2FD1uOGJCrnXiiAALEYYFlDo6fj4WpC1oQ20aMArPDp2M4XXsSs1uIsN5RQ6%2F8Xpn7%2FkEYpypnkLR6OHGSMI08fPrdmYdr4t31bZxPc2KZzDgZU%2B%2Fj7eiE1vSfmg1Lrt0FIfFTNB96nXbMcz1qq%2Fi%2B6behPpSLmP%2FAt4tr8J1I03y%2BoiDu6upmebdJn8ukKYbcNuDcPUl4BxtrkabNItU93IlRTRK0i4M1sKyzorO3Q6Y7Br6S9T5bNgQ3trxUNhrHQqUpM2t3gWr4cjDJ%2BTKi8e3YgzM3cJCbnhnBFVxi0ALlrvnb1tYIc8vMFAh2m48mVl3MsQOa9iqnDvpUZPdubrOHauXBRlhTZBBv7U7rSI8oIqYUXoYxy%2FYJmrzM%2FEpl5daR1ssff6XwzPQ6M9ikew5NJJtqnufFWwIW9aI1WKTAyDuS3fdBJdIWtG%2FCno3z9vfICoXk3SnxDFrykRyblPJLtLAlMufWMFXSSRdmA8xWU6q1HqVnEe5XnuDY9kEP1ZpCJNIMYDplj52sH1XWeifzseq12fRfPon4bUHVq2GpaMgSMTA6lmphwin%2FCfwPm%2FoHsWYIw%2FlNqPlTw7c9H6oN5DWnxjGanzoHyARlcGOSTzqy4sw4NA4CnMKvd%2FrwGOqUBIp1Wz%2FhG%2BIT8J8bMbxJ%2F52otWlzu3fg1efvhu9dDkStBWRcg2vvxBJURIjMgas7js9UhqxA2Ud1m3fuJ%2FJOgcpYzYs2fJ0eZHrRMRaTSGDM9%2BtoNtAXrdYu5glQPkQcmostalMLNZAPEdpRDzyA1lgmzx6rGN5gbeZK6QCPNXu89Oiuk2varxtJ4WicvR2NnbLX0QGqcwGFBTUr6Aw21EgNVJqm2&X-Amz-Signature=bd52a38d6ed53bbfd5aeae355b2bcb657dc3f9279f670a8927c302837bdbb8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXI6VEQZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE1IfDocyBElo63XyRlKUSEoljZh%2FPIWvri3xz3QCBSAiEApedqOcFOSvhlUBPsQwB2njzYgwN0rfBQ8sc%2F9KSxj%2BsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSmmqhQ4mSGHWKNrCrcAzp3ekloloAR2me%2Fuc259LGSKm2UV9ot1eLQrWVCoIdlItwQcx6oQ2ZQZtt3XlEdPSIrx7zMeh3zMq8bzYPeFggyg1XanIYWNhZhl48cEsHvrWGHJP%2BP3olZeExq0qVZMHxQy0EuaL2ZZ2YniODaxyreIFGifCA56kJ1B5Ye%2BdLB90G%2BwFjo6szPzOIdOMCXXxHb9ppkBQwKyTS24H5XHQmekKI0k16ySc7WMsNtey8IlXQtHuANuiZ8BQBg7PY%2F4WtAuvMf6zPkUljasgsHNcGC8xwMmHLm4auBgQrbsTW8hhziAW4Llj7j%2BQGCNBzQ6aOo14pYaUpX2gZICWCcCdfe2lWefTRP2Les7FQMlbkdZQPKheHsNSiPhcQ3D59vXOA4iNs0wxoDqEIayP8VZ9PT5egpK%2F%2FTpXNFSbZAkKhN3afSy%2BujxlsN5W13gvEhEsqJqHOyYFyNGJM17SE2m969jVZhegC8lykHEpQf5zy5vYLK24F%2FBEZZwW64jBP1JLu1ruFfWHmYeLR8igdZ3luPzPjMuCQrgPuXoWgAUhYvCksSCH%2B3QWmutImccMNfe3WXu8zT0gtzii%2BuMNXefFT9IbSODt6cO6Axi1gsPAhL6q72ufXtIMkKSZliMLXb%2FrwGOqUBhkpVfVtQZhH9UXmU52CMhOEs3aE9vyMmQj3mAOhVoVgYDF4LEa5500VzUcgMjUPcQTfe%2BpkqHypwDjn%2BkaHobYeZT6MVMd1np%2Fp18orAD5XWXuJUC%2FGtWcRFGpGlV00UwZkXtth2F0f7h6s33kx5HRxXzKfofB%2Fu4kaxQ8xB8OFpVve3Iml25C3jLXW%2BKHrm8tw5AcFokDcmuVWVxvxSDarKnyQ%2B&X-Amz-Signature=92fd5cc45b1f98d34730ad90a958fafe889f26d338700ee85fef1f599f02bc42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3B2QHE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67yNlQiyCIDNkLkMQIjImOWeszIkzAdy8Vj7saIjBcAIhANGTkiofL5oIzOMEGOtRsmFLvA9%2BOiwp26e8E4SYXy1gKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0hV8xaTeevB2C9D0q3ANHCJa3OFwuEjdPuAUyb7Gn8BKhz9d1euTlynCg0BaaAmZ9Ii8gDDwfmfrVIVaXqK%2BEe5SgKBfymUxP73Uh3WLFnww9cNLkEhq2SuLAYs%2FC0ARRVwooWfNo5LzdRI2vtYUNgvrZJOJT4FKn5zPMH36dOnnqxL4maOj14WSQNLyLwioDpvcrJ4ouEglTtuJiBgDGf5heyCjxEkjmUHkIgXK%2BbAOpQw%2BSS9MUgnV5LE%2B1%2FO8VHPKF11BrZ7RloGoweKx9SpnUEbbk%2FuriI%2BSOLDI2PZHLpmwZpy4WR0L6lLWfedHSU%2BhcxYOXVqk1ip1SjmD9%2F0gAIdENa62DnAc8W4OrHKluJpkeHSg6ApSTAtZsyppT6qKfxEs8RBM9XuEPMH%2B7xTCKOYBTVWqmXZZgik9H4dwGYItDluVeLovjTLS8N7eb%2BMeFL4kgkSr7SwNdeRZKglwvkf%2FrI8XXERQGaNO9vBgSNhrvBPLLN2F8aF3CTVs87V%2BhrSzT6ICFeRftt28JNcMzKVGh8vieJMHDiEiEhayP0EtjCZLYCiaMECbHU3%2BmS2BZSGhC79G6R580kkAbp7mJwmt9nAjGLOq1vgDxOsT%2FmmvBaLSiKLmrwIBPEUn2Hum2ecR1%2BCl5WTD53%2F68BjqkAWo35uCyBmuOeIPuLDsWjxIXegv30g1S1L9v5FUUfHxn1ZGwR9qIE80D65q52rPp0AHlwXIu%2B4EQPhTNkDWIkRgzAyjrQ4hCaiKXPv2VIVFUfdCX%2BGtIms0bx3sMav7sv4c%2Bsa2KWXuQtzS%2BcniJjkvXZAIzzywEhPyigvHnhMWUF%2FctrLQDWdQpTEEnSQsxlzDlRYMpSu6oNRxZVltViHbmZO2A&X-Amz-Signature=29d7777cb71f9c21959c55a2f67f17fe7f4d0ffb41bd70921bc5cb55a6952afb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MHGHOGZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOdwixduSaQb5OjR%2F5g4WZWFLpl9jXU8t7e3mEQPD4AAiEA3kHZtUE%2Bbk0R4L35bwmFRiuGddAWzXNEWSjqdihRevUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE53QJuy2QnZYVJaOCrcA4%2FD1uOGJCrnXiiAALEYYFlDo6fj4WpC1oQ20aMArPDp2M4XXsSs1uIsN5RQ6%2F8Xpn7%2FkEYpypnkLR6OHGSMI08fPrdmYdr4t31bZxPc2KZzDgZU%2B%2Fj7eiE1vSfmg1Lrt0FIfFTNB96nXbMcz1qq%2Fi%2B6behPpSLmP%2FAt4tr8J1I03y%2BoiDu6upmebdJn8ukKYbcNuDcPUl4BxtrkabNItU93IlRTRK0i4M1sKyzorO3Q6Y7Br6S9T5bNgQ3trxUNhrHQqUpM2t3gWr4cjDJ%2BTKi8e3YgzM3cJCbnhnBFVxi0ALlrvnb1tYIc8vMFAh2m48mVl3MsQOa9iqnDvpUZPdubrOHauXBRlhTZBBv7U7rSI8oIqYUXoYxy%2FYJmrzM%2FEpl5daR1ssff6XwzPQ6M9ikew5NJJtqnufFWwIW9aI1WKTAyDuS3fdBJdIWtG%2FCno3z9vfICoXk3SnxDFrykRyblPJLtLAlMufWMFXSSRdmA8xWU6q1HqVnEe5XnuDY9kEP1ZpCJNIMYDplj52sH1XWeifzseq12fRfPon4bUHVq2GpaMgSMTA6lmphwin%2FCfwPm%2FoHsWYIw%2FlNqPlTw7c9H6oN5DWnxjGanzoHyARlcGOSTzqy4sw4NA4CnMKvd%2FrwGOqUBIp1Wz%2FhG%2BIT8J8bMbxJ%2F52otWlzu3fg1efvhu9dDkStBWRcg2vvxBJURIjMgas7js9UhqxA2Ud1m3fuJ%2FJOgcpYzYs2fJ0eZHrRMRaTSGDM9%2BtoNtAXrdYu5glQPkQcmostalMLNZAPEdpRDzyA1lgmzx6rGN5gbeZK6QCPNXu89Oiuk2varxtJ4WicvR2NnbLX0QGqcwGFBTUr6Aw21EgNVJqm2&X-Amz-Signature=635c511e3c315a0b97a79eb67b9fabf32e1804c60c4d4cae555fc775b9afa1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
