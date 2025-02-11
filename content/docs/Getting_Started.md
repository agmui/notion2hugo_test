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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMAL2BT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwarmwgRicDBeUTkdDVYmXaYyUVA0AeM%2B8sdcFt88lMCIQC0Us8y%2BzB3UwJAHkmxQZlGeGbpyc8KT6k%2F2ghcz8wX5iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXxv2X0QlRXsbICLKtwDeqWFPK%2FYh72sTwHCyuG3LxQKA51tj4l%2BdpTF7Pahwf9OzFdxjvWRWnxjESRHhtMSOm7UyjV%2BiQdB4LUAiMikDe6yjOOsCzxAVWJGRMsSEy1xtUSzE32JFnW0wbVMnmu2bI9wOG10fEfDJT5O%2FjCvoKEOXWjeszOg9N6413qSWnuhq1kn1aRuFi4MyvB9NNTs2J5X8P85M5SUenFCne4u1q2R4YxLawxNBZA860KGU3I0%2F3u7gJ007z8v520IbMj8ZJpSsRV5xp8eJNmF0%2FNk7I4D5Nt3mOH2%2FWgg3eNuhPwvIYv5bP%2F0CoIRMnD9PQJlhKM1SbMfccPesZdLqX%2FYOneeQ3YiVq2XSstKjVihIbYAfdJm5Sjp4ujTHn8b1JkTEcXS0MFOJ88GwUtXvCVOa0de9GeLO7V1XWuZ1wm9txmizz4jwEbczRt1%2BMGRunrb2Ic5CoG6nIoQLVaogKBS%2Fcpk7uV0epXwvC4M5nM6hxGLv5ALgmlRdvajxDbeFI%2Fn1cmK5X4C5s9Ntq9lAzSB99bjvbNo5%2FKYdys%2FdXVVJX%2BL0rb%2FaEx8aCits%2FzkGYXQ0rRxX3z%2BgSYhAlsBujOT0PbWU%2FVOCMWC88ARYVq%2FQPJ9SMh5fNhvKiH2dv0w%2B62uvQY6pgH61oWqxjgLuCenDw1xTfcV5mmsccOY7MXb0VpHNOA80Ul%2FTkCPp51FGwlmB%2FoV0%2BFbQ3J9NBF7YunatF9%2Fh6HRMJ2PqKc8bJTaFE3XQvlqz3UAlfR%2BoCaColSScgD96JVsB07M5JhIFczktu0LnlEMZhSb2cM0byxMZZrM3B1Ix2j02JaCvBAxMkgTPh8qSMFDMN9knUzhK7GWfVCE8wM78hC87LBU&X-Amz-Signature=d552d6ae8d7d63271d1f314789ae862b4443b9ace26d666a6ab0321c5a127673&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMAL2BT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwarmwgRicDBeUTkdDVYmXaYyUVA0AeM%2B8sdcFt88lMCIQC0Us8y%2BzB3UwJAHkmxQZlGeGbpyc8KT6k%2F2ghcz8wX5iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXxv2X0QlRXsbICLKtwDeqWFPK%2FYh72sTwHCyuG3LxQKA51tj4l%2BdpTF7Pahwf9OzFdxjvWRWnxjESRHhtMSOm7UyjV%2BiQdB4LUAiMikDe6yjOOsCzxAVWJGRMsSEy1xtUSzE32JFnW0wbVMnmu2bI9wOG10fEfDJT5O%2FjCvoKEOXWjeszOg9N6413qSWnuhq1kn1aRuFi4MyvB9NNTs2J5X8P85M5SUenFCne4u1q2R4YxLawxNBZA860KGU3I0%2F3u7gJ007z8v520IbMj8ZJpSsRV5xp8eJNmF0%2FNk7I4D5Nt3mOH2%2FWgg3eNuhPwvIYv5bP%2F0CoIRMnD9PQJlhKM1SbMfccPesZdLqX%2FYOneeQ3YiVq2XSstKjVihIbYAfdJm5Sjp4ujTHn8b1JkTEcXS0MFOJ88GwUtXvCVOa0de9GeLO7V1XWuZ1wm9txmizz4jwEbczRt1%2BMGRunrb2Ic5CoG6nIoQLVaogKBS%2Fcpk7uV0epXwvC4M5nM6hxGLv5ALgmlRdvajxDbeFI%2Fn1cmK5X4C5s9Ntq9lAzSB99bjvbNo5%2FKYdys%2FdXVVJX%2BL0rb%2FaEx8aCits%2FzkGYXQ0rRxX3z%2BgSYhAlsBujOT0PbWU%2FVOCMWC88ARYVq%2FQPJ9SMh5fNhvKiH2dv0w%2B62uvQY6pgH61oWqxjgLuCenDw1xTfcV5mmsccOY7MXb0VpHNOA80Ul%2FTkCPp51FGwlmB%2FoV0%2BFbQ3J9NBF7YunatF9%2Fh6HRMJ2PqKc8bJTaFE3XQvlqz3UAlfR%2BoCaColSScgD96JVsB07M5JhIFczktu0LnlEMZhSb2cM0byxMZZrM3B1Ix2j02JaCvBAxMkgTPh8qSMFDMN9knUzhK7GWfVCE8wM78hC87LBU&X-Amz-Signature=4b594e7ad61c758670e75fdebcd32842901f7cc80ba60be74a27c240eec16e98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RI6PJ2Q%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfmakN7bBEdJTv%2BSsQvV2MrmxINd2faNXX4176xbAG5wIgEXq0u0MUFUoQxZu44PlEdZX8Xq0gMIhcPL7SEe6vE%2B8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMptUY9h8M7WuHy29CrcA%2F6Wq1Ks3O60faG%2FEzQbluhyEsl2PkjP8hZnDWQ0rdnIqSw44LVLgZYTcyhET5Ncscj02q%2BIq2XAgsq5WxmuA3sh%2BqrnRpAjoUQjvrrNxLgBJvTBTGs%2BOQm%2FffXZoh1tHEW%2FGFfRnMBH8A3FznFScFXHR%2F7lQ8c7dwWhcMp05omKX5dDgkNcdPHtnevw%2B8ft2r1faoVnBKCidifz6ReNYX3ic5IXI%2BxnC8saJV8LDNpvA3hUmxCUscnNwcv0FQx46ofsrv4TQa0HVxSJz6b00OGJLmSYmHayFRL6HMi5a82nGlvjRzNNtcCtIQ60WI4FEwhi%2Fh8xVKgC49CGrvSgkhIHGmZdg3krlagwZ39sVM%2FC1hkNyIiqKDy6ExCYQTE2Y8TFNAVevSpfDxlrsQ6sjAn2aDkzqldWPOeDNwHFLLLcpbKKualj9XQmyKN4ep62TWXCMlOXf6%2BQtd3ZG8ic0xonLb%2FtVjNqzmllejkHnbJnsCdfFywn%2BfMf8hcFwqwQhrXDHaU%2BSjfShpX2QmiAXY2KJtGJSO0nw0cs4ukQiJ5Is333RWRE8A44i5N5G3y6nFRWuEgfP9vWnpa9emvDqczxhXVlRwP2wgDuvxYRfrNI0hKpaIecCMVKi7GHMLWurr0GOqUBb6X647lpg5uxy8XarEps0EGri1xeTv3DPXsyK%2F8YUo0e1WBucb6rE0So4Wl%2FtjHdyoK59c6HiZRNUuACad5YqdwdSzmsQjSBxyXsFddc%2B3jRAwu4hUwVNy8VvVmUd1d8wWcdCxhc%2BtOVSEjkewQq6%2BLGk1dchstvaT9%2FZrdIznGgNUBOiNT5svGq0w%2FvkfuBAJ39m62RJvqrgVjxaYOs0YAss3u%2F&X-Amz-Signature=c25697dd7ec4e7d4ca3fd789f2007278f8bfd3434cba0e622f089c2dcdf989b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NE6OJX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClCzmb9A5cix8W7yU4B1p9izFtImHeF%2BWeb1FzLYt3sAiBIEHwxaHnmKU71X5NYL7C5xydF2O5OuG5NDBBiUsXINyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpIAeIwIeWABTJY3KtwDXIboy2J%2BkXOVPwlzy65iLvkl%2BmJr2N%2FT2Wk0mcNNSp0okvp22gph9CMLJU8zj%2BYm%2F36srJGkwZaAi2oJaADKbv%2BE%2Fw9cjtwAA%2FIAAnC9yaCE3eq%2FIAfqTHcrstfh5%2FMxwBP4C4x8IKZFzqOa%2B08O3iq%2BGOszcYfrQRRANlRocuRVGzJfL0O7UjeKm30dGujljeSgB%2B3wsVAIoA3PsoyPsJ0T7ZVSIJ18WXMv82SjmGYvCfPO02ixFhYytZ99K6jvfMIVehmrBqSRR4xBjcl%2B%2B1Ej6jPajYbNb1PvttH8rRS061rMhuWgBmW3O09c1ykDz9hUrg7nJ4qwzX9xjY%2FNBRnVWxzoDFD6K9l%2FifYRIfE1kGyOXaOSGLohweCP2tlzeO%2BMNRlUbh0xQX2lrobaKe76J6Evx7alq02OXpXxK%2Ffq%2F9I5OA1L4T9vy2iYQkaFTUXki%2F0UnmFq1%2B4LollsQ6BVuYv4X810uRdXgNihf71WhhqyQSDOhpP3CRRa3QjD74%2B3bA%2FAetVhYtE8qCeYTsfnr5Tvbr8S5VGAt0v%2BtRO2UcpiCF9OtMPzTj3B4FQXgCE%2BXhu9MmmGDPM2u3cUWeU7x3BdO5rDdQbOMIibiruk0wmUHG%2BW7k%2Fd5%2FIw462uvQY6pgGM5CX5qPVKhVf%2BadTOGn%2BTXAEfN%2BPs1DZmNaX9IoAQhBRj2sw7lv6B5sqx9EDgbTSRVvSVNiM5e6X9z1TanW9XRy6OhfBhHoCK2UiZzoNyZ1I6SDwRe0inaAfnZdJLb7y9FkUdwMZYf9U4MbDhH7A3vq148D0%2Ffhhd9uyN%2BDmEvUOprv7XT3smPKfeEiXvPTd6AZmp3HOpFZz2BPo7CwPlk1Q75AgX&X-Amz-Signature=3b45325e6a99b7b610fd4359489aabdce6fa5ebde537c89c99c17541b005d052&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMAL2BT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwarmwgRicDBeUTkdDVYmXaYyUVA0AeM%2B8sdcFt88lMCIQC0Us8y%2BzB3UwJAHkmxQZlGeGbpyc8KT6k%2F2ghcz8wX5iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXxv2X0QlRXsbICLKtwDeqWFPK%2FYh72sTwHCyuG3LxQKA51tj4l%2BdpTF7Pahwf9OzFdxjvWRWnxjESRHhtMSOm7UyjV%2BiQdB4LUAiMikDe6yjOOsCzxAVWJGRMsSEy1xtUSzE32JFnW0wbVMnmu2bI9wOG10fEfDJT5O%2FjCvoKEOXWjeszOg9N6413qSWnuhq1kn1aRuFi4MyvB9NNTs2J5X8P85M5SUenFCne4u1q2R4YxLawxNBZA860KGU3I0%2F3u7gJ007z8v520IbMj8ZJpSsRV5xp8eJNmF0%2FNk7I4D5Nt3mOH2%2FWgg3eNuhPwvIYv5bP%2F0CoIRMnD9PQJlhKM1SbMfccPesZdLqX%2FYOneeQ3YiVq2XSstKjVihIbYAfdJm5Sjp4ujTHn8b1JkTEcXS0MFOJ88GwUtXvCVOa0de9GeLO7V1XWuZ1wm9txmizz4jwEbczRt1%2BMGRunrb2Ic5CoG6nIoQLVaogKBS%2Fcpk7uV0epXwvC4M5nM6hxGLv5ALgmlRdvajxDbeFI%2Fn1cmK5X4C5s9Ntq9lAzSB99bjvbNo5%2FKYdys%2FdXVVJX%2BL0rb%2FaEx8aCits%2FzkGYXQ0rRxX3z%2BgSYhAlsBujOT0PbWU%2FVOCMWC88ARYVq%2FQPJ9SMh5fNhvKiH2dv0w%2B62uvQY6pgH61oWqxjgLuCenDw1xTfcV5mmsccOY7MXb0VpHNOA80Ul%2FTkCPp51FGwlmB%2FoV0%2BFbQ3J9NBF7YunatF9%2Fh6HRMJ2PqKc8bJTaFE3XQvlqz3UAlfR%2BoCaColSScgD96JVsB07M5JhIFczktu0LnlEMZhSb2cM0byxMZZrM3B1Ix2j02JaCvBAxMkgTPh8qSMFDMN9knUzhK7GWfVCE8wM78hC87LBU&X-Amz-Signature=bef48951ea60b6c7371ba6aa5d51c0247f3dbc1a3141b480f0a244f17535a9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
