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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELIJEGA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uEdwzMCFheQjW3HQ5tVQU%2ByFXE647uKqe4RP%2FAg4PAiEAvvR8vNe3gzf7Um5ZlIqu19LaV5wF8c2OC0CvkKLYNloqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Bdks0PuSkCWDMGircA0niqYze5whmlxJGthC3vo%2FEa3Ro79Clg71doBLicF9IzrmDogyFOr3CpwSUb41o5EUtvNOUSS1l22Bicw8frH9jhHki5OBhaQfPy3UGt7yiP3xI6MB6dXO6swmmlEbSi0D0lHmvwsnFLVpItqmCn8MHocytFIqcnstXQz8DpNOdDmKUWpNAxksRnn92d98BB%2B53qJ2ubAgcz8xQfTD9ZCjf8YMOBOn7%2FSrjVtlHJ6cfZ1ep6KR9d%2FItmzdpNXR1FgM0GtAe3f%2Fxn%2FMiYcVUgdycSFz4nxdlWWAOW4Pjhg%2Bvh1t24MDWZCcoQXOJLAYB2beGuuahirElvq2w4sn7VkxJIhFe%2FNRHLhefRM3JEeRbQax%2BvnqnPAWrGqcSg4jUPiETkQ1uAxzs0937KAp3WuFPgomDHMB3qZHc5TGnq2i5YP87mjv%2BEQIrurDv%2FD2QSSg%2BtSEPXuYH%2F2hCxxS0EPxQyPJ5kTd%2FmHLrY2lb8v%2BsnZvjhANTh%2BBfHinF8SSnsjVQ52xsmnBwpLRaQWS55%2BVKh%2FU%2BoxxEe3CpMoWjYvDq2HYV4Nr2oF6fH%2B3rks0peuzawbMpY4Ii5GQKBlg%2FRfKBmFaJW9%2B7UY09Tc6xozyeHDvasQk39NYXzzBVMJfRu78GOqUBqXBiZ7Q1PH5kln%2FVi7ARiWGJYq3NTOhzD9zd2dOTGgb1mJTDht08bbZsgMFbTiIjbABRH7vmjGVbP470UB62w153%2B6EHy%2BpqPbMdIt7lhPDIabAi%2F9JCmh9zDFu530MUM8iXNMoFhxOfHY%2BL4A5dkCEPbzEAQooLtIgZsKS7V%2FG2CVsk1hMQXu%2Foxs5sjgNYjXTx1gnzYTTP0RJdOKhaOCmDhx9o&X-Amz-Signature=d443af97186710eb203a58734997c1feddb72fa5d9c365aa88c63cb2ae8c7b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELIJEGA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uEdwzMCFheQjW3HQ5tVQU%2ByFXE647uKqe4RP%2FAg4PAiEAvvR8vNe3gzf7Um5ZlIqu19LaV5wF8c2OC0CvkKLYNloqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Bdks0PuSkCWDMGircA0niqYze5whmlxJGthC3vo%2FEa3Ro79Clg71doBLicF9IzrmDogyFOr3CpwSUb41o5EUtvNOUSS1l22Bicw8frH9jhHki5OBhaQfPy3UGt7yiP3xI6MB6dXO6swmmlEbSi0D0lHmvwsnFLVpItqmCn8MHocytFIqcnstXQz8DpNOdDmKUWpNAxksRnn92d98BB%2B53qJ2ubAgcz8xQfTD9ZCjf8YMOBOn7%2FSrjVtlHJ6cfZ1ep6KR9d%2FItmzdpNXR1FgM0GtAe3f%2Fxn%2FMiYcVUgdycSFz4nxdlWWAOW4Pjhg%2Bvh1t24MDWZCcoQXOJLAYB2beGuuahirElvq2w4sn7VkxJIhFe%2FNRHLhefRM3JEeRbQax%2BvnqnPAWrGqcSg4jUPiETkQ1uAxzs0937KAp3WuFPgomDHMB3qZHc5TGnq2i5YP87mjv%2BEQIrurDv%2FD2QSSg%2BtSEPXuYH%2F2hCxxS0EPxQyPJ5kTd%2FmHLrY2lb8v%2BsnZvjhANTh%2BBfHinF8SSnsjVQ52xsmnBwpLRaQWS55%2BVKh%2FU%2BoxxEe3CpMoWjYvDq2HYV4Nr2oF6fH%2B3rks0peuzawbMpY4Ii5GQKBlg%2FRfKBmFaJW9%2B7UY09Tc6xozyeHDvasQk39NYXzzBVMJfRu78GOqUBqXBiZ7Q1PH5kln%2FVi7ARiWGJYq3NTOhzD9zd2dOTGgb1mJTDht08bbZsgMFbTiIjbABRH7vmjGVbP470UB62w153%2B6EHy%2BpqPbMdIt7lhPDIabAi%2F9JCmh9zDFu530MUM8iXNMoFhxOfHY%2BL4A5dkCEPbzEAQooLtIgZsKS7V%2FG2CVsk1hMQXu%2Foxs5sjgNYjXTx1gnzYTTP0RJdOKhaOCmDhx9o&X-Amz-Signature=75cf7eefa23059daf131fc5e25681b0929897856a08bbf6444069e3f8beb90c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3BC6VM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAPxC4uqAViA8%2FvL%2FzaeezbXm%2F5s%2BaUq8Z6HV%2BOVrvAAIhAJZwgtZoiZhPPWLvKOLYOUIxXq2GpGXmy4kUY6XYogfXKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjkUkEQGATwf3bm1Aq3AM96gGPxmxCXjbDlib%2F7%2FIptm5UbL%2Ff6iw%2BbJDird9B%2BnIDaWYTJ69f9%2Bt3MIkRjvzZeduYaMySaiStgZgVwwb6TwpFfxN4vQEVHTkRvj0to57pjTvgtSYu1tHgl2PZauWP53mfa01%2FZDhiviLRita6Fk5%2FLuGBx8kTCVBxE9Ijv2B4T%2FxqFL%2F2FbMI3DEOHbb68lPQZQhcHOl8oiMqSG3SqRdpfXrfyRpe5E9e%2FN%2F9WZPsD%2FFg%2Bnq30uuwm4Hof%2FSZu96ovSVsKP5fdlUKcWuR28MP3SKjQ1HgEUTnLr%2FKtBNhhoXFixt4cjnvjwtQ%2BSTq4upx%2Bbo7gjfphnUTR3xEa5EQkcb%2FPXuMosKs3oHj9zloj6iEudIN3SvgxcL5G24gZ538HIrbEoMZ3CidmwVM%2FUxFnT4FCRpVsRBpwh3isKwcpYyaBr8J1y0LORlCLDgTVW9yFRPjKgVll9tFYqzemduhzOhMtoJvW9xmoeZZQA0eGvm2tGvlwbvXMGZNc9qD6PtjLo%2F7wnnZKFceVSeEW%2B5H7EodOpWZ0V4I3CAk40b5Guojy6tlpiPiHFsXZ2yXGuIxGmVVehHHxX91mB1ux12PpQ5KPpkzBvNzfC74wy6cpwpp7X3xFTPmmjDA0bu%2FBjqkAbQcZ77NmqnwOaO2MSVYD4sXmY9myFx1ngUrRTnua5pciqv%2BFz6lddHIawAEg5KpZnRzNGNXq0vhFZxbHDQVAXS1Tue%2F7A19aHfpBO0OavYM4h2G8j7URndg%2B%2BmpHkE3%2BiX2Zjqoh%2FheCuVDnOPdpBxFcO%2B%2FAQ96P%2F8CNSKUjfKggN1elVA8XEn6VUubr1I2MmqbkyB%2Fp3FmzHKqGOgIEHOeI4Yx&X-Amz-Signature=57524e0b1967153d691843069478a9737cf7c6da9d6cd962eaa010a8b79730d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQTW6WF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpd5OIKpEgd%2Bkq8TXb85A0DQB%2BtkmgYCg%2FSMPVJILtbAiALKQmUkL06RBx4OKesokMj18NM%2FLA9qCHE0eSlj15H2iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7S2iK38NNEPXiuCvKtwDU3R9tSYqPo157lvHFFtbdxsYEClRnlqVZtJcbQsDGTk8PuoMSn34l1TUr5UBaLXvY7G1s%2FNac7LvlOlAZdBx5HKX%2FYOdyxw1jDvBFWAcYaoUlmkKxkmGmNOrYZ9hrhJbMo4kJlOY374cMkguZMC2LaQ1pqwQsYm5M7JQE2a0fItugJd%2Bw18z%2Bjx34XyF1jPqMhPLuzwRzstHwsAKBz2cft109YrKysPDdgC5mlGJx%2FU9d2iHRcaOxspCjzWXv91xpxyB7onjMpKzQ79soullT2y%2F0dkJD4dca6zQLJQ7x2AXSP%2BKecUrVC2AQR0jiqCaq6UZG2GfHDYCd92w4AMukb84udzO3GGQl7vJwx2356xlnYxDM1ZXtPYQ5SpE6B3hPjpI%2FSJSIngEODh4Mi2hsh3zcnvCmicZPCmO4fXL7GrplvtmfVJMF0vrEkbov0KCN19Z0p9fy3gj%2BV5Uyz0q99W2ms%2FRr56%2F%2FkBnltTSSDFv5Mcu8DrZb1I2BJnBzxV0wY02XEe5yLq7Wm0NJLzHNfBsoz%2BUQ%2FledqPRPMBaakJf1BLgeMUSwJv8wtYrJZrxAxQxYMbVGwVt9TO5kSn5icDg6cPC%2Flc3HdzjUkbqhhSLUw2VkebEs%2BlHJs0wytG7vwY6pgGDShkTgATnxJso9JqGs1nR34Cm%2BuKGTv3lHhrB5kdz1n7%2B1sGCSDEO%2Fh6kSPmxCnBXwcJkAvUYcBZsQulxGxRlhcQmu0O%2Fi1l9A%2B73QGcFUNcAC6lDjtTuqJ%2FCOGWB%2BXcbmmaX00KeIlfJou93EC8MH5gskxwZBqAu%2Fuk0lqTcfvypypr1PoVmb1IV0swcBQLyaK5NS6NAFtKYGzhr%2FEtRd4TWX3TW&X-Amz-Signature=d6ae0c1f14f407616debe308e2cc22e37efe02142f56fb44dffa0714cb193d74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELIJEGA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uEdwzMCFheQjW3HQ5tVQU%2ByFXE647uKqe4RP%2FAg4PAiEAvvR8vNe3gzf7Um5ZlIqu19LaV5wF8c2OC0CvkKLYNloqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Bdks0PuSkCWDMGircA0niqYze5whmlxJGthC3vo%2FEa3Ro79Clg71doBLicF9IzrmDogyFOr3CpwSUb41o5EUtvNOUSS1l22Bicw8frH9jhHki5OBhaQfPy3UGt7yiP3xI6MB6dXO6swmmlEbSi0D0lHmvwsnFLVpItqmCn8MHocytFIqcnstXQz8DpNOdDmKUWpNAxksRnn92d98BB%2B53qJ2ubAgcz8xQfTD9ZCjf8YMOBOn7%2FSrjVtlHJ6cfZ1ep6KR9d%2FItmzdpNXR1FgM0GtAe3f%2Fxn%2FMiYcVUgdycSFz4nxdlWWAOW4Pjhg%2Bvh1t24MDWZCcoQXOJLAYB2beGuuahirElvq2w4sn7VkxJIhFe%2FNRHLhefRM3JEeRbQax%2BvnqnPAWrGqcSg4jUPiETkQ1uAxzs0937KAp3WuFPgomDHMB3qZHc5TGnq2i5YP87mjv%2BEQIrurDv%2FD2QSSg%2BtSEPXuYH%2F2hCxxS0EPxQyPJ5kTd%2FmHLrY2lb8v%2BsnZvjhANTh%2BBfHinF8SSnsjVQ52xsmnBwpLRaQWS55%2BVKh%2FU%2BoxxEe3CpMoWjYvDq2HYV4Nr2oF6fH%2B3rks0peuzawbMpY4Ii5GQKBlg%2FRfKBmFaJW9%2B7UY09Tc6xozyeHDvasQk39NYXzzBVMJfRu78GOqUBqXBiZ7Q1PH5kln%2FVi7ARiWGJYq3NTOhzD9zd2dOTGgb1mJTDht08bbZsgMFbTiIjbABRH7vmjGVbP470UB62w153%2B6EHy%2BpqPbMdIt7lhPDIabAi%2F9JCmh9zDFu530MUM8iXNMoFhxOfHY%2BL4A5dkCEPbzEAQooLtIgZsKS7V%2FG2CVsk1hMQXu%2Foxs5sjgNYjXTx1gnzYTTP0RJdOKhaOCmDhx9o&X-Amz-Signature=a95f22e836c1598fd694995659fabe9f597c8c77032366fcf77fdf7d380e9220&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
