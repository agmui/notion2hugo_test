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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAMD4SE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEh4dUMzuT5NAvFpCo9nrd9kmRzicfa%2FXwSLFXIrcLzeAiAEvHoH8y0ki4pHL%2B8dmcKkzR5ewkS65mO0I0ABTp9JNCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMWsI4nv%2BrxiLa%2BCN7KtwD3qc89ez9y%2BOnZk1xf000Q1vwya%2F%2Fip%2BaIPE3JMtxfTtsADLZYQ%2FSUPlnWfMVodm2dP2DE5EBxT10Web7zCc70EWr0rvjcZoU6BQdPGpy5fAW%2FQq0vIIbO40LcpB%2BqXkowXMhMnSW9jxdUwnVzscx17Qygee%2BFmTvIMJqBxbBUiJudj8DU%2BwUf8y7YwNhtImOkesVXPdmniT3oMsp3jBlUL7mgVtmMTkZlm5Jvynqwy4EgD9RzIB%2F7p9NO3yrPtzQcC%2BqnUz6zdPTrTcBerGqTloGeZ4FcdmiSb5ZU9VhLB%2FqQgBo1y59hH6nfZN1xHM4ejdxEB19ho9lL%2FjbkXYuIiB49d1ImYIy%2FDqlIk1swxh0WvrsXyNWpIGoUk85gVg289nXaApQlQjSHhx1%2FZIPC%2FKx7m1RE4sNYCoJo3JLHga4SvQ5pL7Q%2BxLb1I73NoLMOa78hUnfy3WsiME32bpO0hrPF6hf6H8Mnhx%2Fc5dvI%2F06eMMMqFZD%2By7ZCoc8js3JXOJMGq8wAvX%2FrOR0QHWNKpauiq3OugjErt3vysJoGi0VrmDzqVs1HpRnnTQb5NUv%2Bs8803yEHlw%2B5ut6RouCzBkZXSuPxn8%2FooGlG6uglxOE59dnGt6NOlAe12IwzY7dwAY6pgGPAH94UWMxBq3iZ1q7HL9aCpbPIz0aSlBQqsVjWG5RN1Qara8Njt46d4%2F1hwKnwhRuVHi5MgvQMn7tXK50ai%2BxYpME%2F822YbQMIXMDbrKQ1lY3Np0XdL3nATTBSg0d6TZC8lW%2BdWFpLKR%2Fc%2BU0zdSVkhiZeV4%2Bx7ZnwwI4dqw%2FShTzM%2FjwwOL6ptLsXNNOoYXd44MD0QoAt19zlY7gu2wS2jhMnn8i&X-Amz-Signature=b75becb08322b94c0e5f5323da1f7d45dce8a9e7e66332f27cd3af0aece70a07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAMD4SE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEh4dUMzuT5NAvFpCo9nrd9kmRzicfa%2FXwSLFXIrcLzeAiAEvHoH8y0ki4pHL%2B8dmcKkzR5ewkS65mO0I0ABTp9JNCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMWsI4nv%2BrxiLa%2BCN7KtwD3qc89ez9y%2BOnZk1xf000Q1vwya%2F%2Fip%2BaIPE3JMtxfTtsADLZYQ%2FSUPlnWfMVodm2dP2DE5EBxT10Web7zCc70EWr0rvjcZoU6BQdPGpy5fAW%2FQq0vIIbO40LcpB%2BqXkowXMhMnSW9jxdUwnVzscx17Qygee%2BFmTvIMJqBxbBUiJudj8DU%2BwUf8y7YwNhtImOkesVXPdmniT3oMsp3jBlUL7mgVtmMTkZlm5Jvynqwy4EgD9RzIB%2F7p9NO3yrPtzQcC%2BqnUz6zdPTrTcBerGqTloGeZ4FcdmiSb5ZU9VhLB%2FqQgBo1y59hH6nfZN1xHM4ejdxEB19ho9lL%2FjbkXYuIiB49d1ImYIy%2FDqlIk1swxh0WvrsXyNWpIGoUk85gVg289nXaApQlQjSHhx1%2FZIPC%2FKx7m1RE4sNYCoJo3JLHga4SvQ5pL7Q%2BxLb1I73NoLMOa78hUnfy3WsiME32bpO0hrPF6hf6H8Mnhx%2Fc5dvI%2F06eMMMqFZD%2By7ZCoc8js3JXOJMGq8wAvX%2FrOR0QHWNKpauiq3OugjErt3vysJoGi0VrmDzqVs1HpRnnTQb5NUv%2Bs8803yEHlw%2B5ut6RouCzBkZXSuPxn8%2FooGlG6uglxOE59dnGt6NOlAe12IwzY7dwAY6pgGPAH94UWMxBq3iZ1q7HL9aCpbPIz0aSlBQqsVjWG5RN1Qara8Njt46d4%2F1hwKnwhRuVHi5MgvQMn7tXK50ai%2BxYpME%2F822YbQMIXMDbrKQ1lY3Np0XdL3nATTBSg0d6TZC8lW%2BdWFpLKR%2Fc%2BU0zdSVkhiZeV4%2Bx7ZnwwI4dqw%2FShTzM%2FjwwOL6ptLsXNNOoYXd44MD0QoAt19zlY7gu2wS2jhMnn8i&X-Amz-Signature=86b01388bf9b3d60f496617025c916271f54d9e8a03d1ecc4585f5185a244d85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAMD4SE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEh4dUMzuT5NAvFpCo9nrd9kmRzicfa%2FXwSLFXIrcLzeAiAEvHoH8y0ki4pHL%2B8dmcKkzR5ewkS65mO0I0ABTp9JNCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMWsI4nv%2BrxiLa%2BCN7KtwD3qc89ez9y%2BOnZk1xf000Q1vwya%2F%2Fip%2BaIPE3JMtxfTtsADLZYQ%2FSUPlnWfMVodm2dP2DE5EBxT10Web7zCc70EWr0rvjcZoU6BQdPGpy5fAW%2FQq0vIIbO40LcpB%2BqXkowXMhMnSW9jxdUwnVzscx17Qygee%2BFmTvIMJqBxbBUiJudj8DU%2BwUf8y7YwNhtImOkesVXPdmniT3oMsp3jBlUL7mgVtmMTkZlm5Jvynqwy4EgD9RzIB%2F7p9NO3yrPtzQcC%2BqnUz6zdPTrTcBerGqTloGeZ4FcdmiSb5ZU9VhLB%2FqQgBo1y59hH6nfZN1xHM4ejdxEB19ho9lL%2FjbkXYuIiB49d1ImYIy%2FDqlIk1swxh0WvrsXyNWpIGoUk85gVg289nXaApQlQjSHhx1%2FZIPC%2FKx7m1RE4sNYCoJo3JLHga4SvQ5pL7Q%2BxLb1I73NoLMOa78hUnfy3WsiME32bpO0hrPF6hf6H8Mnhx%2Fc5dvI%2F06eMMMqFZD%2By7ZCoc8js3JXOJMGq8wAvX%2FrOR0QHWNKpauiq3OugjErt3vysJoGi0VrmDzqVs1HpRnnTQb5NUv%2Bs8803yEHlw%2B5ut6RouCzBkZXSuPxn8%2FooGlG6uglxOE59dnGt6NOlAe12IwzY7dwAY6pgGPAH94UWMxBq3iZ1q7HL9aCpbPIz0aSlBQqsVjWG5RN1Qara8Njt46d4%2F1hwKnwhRuVHi5MgvQMn7tXK50ai%2BxYpME%2F822YbQMIXMDbrKQ1lY3Np0XdL3nATTBSg0d6TZC8lW%2BdWFpLKR%2Fc%2BU0zdSVkhiZeV4%2Bx7ZnwwI4dqw%2FShTzM%2FjwwOL6ptLsXNNOoYXd44MD0QoAt19zlY7gu2wS2jhMnn8i&X-Amz-Signature=3e5b1a8737f31fc8018df90f6e715640873eb38e38767f58d410c62c2d2143a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFR7CL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCDPbYzGcxuA7%2BFw5RwkovjON7AxEBkI9BuSUoYFRVJngIhAOVDct%2BlDcz17JQng9xG4AO9hYBpgueNnTBXSr3yiDHKKv8DCBQQABoMNjM3NDIzMTgzODA1IgwEklgoj%2B%2Fs0X8%2BblUq3AP02e0N9GErqxpd9WN97QO4Y8LY9uH2qL742JzpT05SwZh4ZK7Wu0TgWJYdTKSnade3zBUZGQ3pmV1z17sk0GvYUvjzC9KEvsWE7Lm3TEQulwLkglxOPIFmpzBn2R4vYv9%2BilDP7SRK2JX%2FsM7zqLRpgAhoJYh8TW6JS7CpUzyQVF1SE%2FbEwbGgKCejwOpna2hH7mdkwMyQKdL7eJgIwbllN6m8AWluIY8AmVuxYCU0OHyHoem6sZaT%2FfDTrq9Sz%2BjjnLuLrxXvS04vP6yPE3khJDZd8JRn5qD3%2F4lpWIW14QwI252EmLzlQt4bfFbUYjqRnxFHtc6uespCi29z3jqBnoKMP6%2Bl0RK6pmskKtxjCro1%2FVihzLIFsnHuZaOWJtkq9VPrTz%2Fz1EVMvNJCgaM3fC94uSPL4IsJMN3L6O4auku6I9%2FVwO7oqFbleB%2B%2FAJ91jvYIwfnZ7HYYLD8Y2aRWW7LdukulS4Qa%2F5AKJhl0i%2FZza4NYxd6Plut492Q0DQb2OuKxU7rf1nx8zOt%2BSNDF%2F8RBlt8XmgU2c%2BSaZ1HJTIGUVKvmVCxNrT0eFKrLfwDFrVzawI0LHch6cPQL%2BDRA1xkrDj06moNh2ALAGKdePCrcEeoxEeA39OoYCjCki93ABjqkATKyvMIcaGJoDosGYmjJns7JLv%2BOWreZk2kcnfaKKjbjMnl59aUtBasiK6sl9dFeaCfJ1v0rlYaDdMvZbp1aVnfGXQ8OdxlH0jhwTllwFp1e%2F2GyOZDzCfUqeH0amg4Um3cMcWd4UnTCFMa8eIuSzlRS8L%2BQkoGufcu71sonpWf7TxklK45%2FsGtykP1Px2AyqtsFCbwTUGqaaoC3k1cypuhN1ZoH&X-Amz-Signature=10f8e6595c0cfef15127951d8814cf8bebc1b0ee03087c7b5ee0a1ac3c68ca6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KWA4KJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG95P%2B4bnsBn7ys1F%2Fs8pc9WcO8qQfdgEPiDNIL4v%2BJTAiEAzrF7xm6d57mpihrUQkSzAeCDi6JnaXMK2ioDT%2Bqvnv8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDF84ZWra0e86qnZXnSrcAx%2B82FQIeoLOlvggrJEQPCtTc2CwNkIz0TXIYHHuhq02xQeJSXKK6M8rtP7T%2BcrGCBt3V1Y7LqMKjZQfGFEB%2FnQ6PlVBGzyybVUvblcPz5R7Zf0SQvsCwkCTOKnW9ZWyMggVr1SHHefFvgGVcRyMhfav%2Bu8QTlJNRzOCetWmf3Qkzgs0jtHM2QFMcjyiw6m5bIQl%2B8qR9V7WuPFHboBF0noZGIV5sT2T1aBVaMHkjFTUUtuVyLn3Ph1dIItdHEoEntkU6kCj%2BAFZlwxOf2Tv3s%2BhrXSJaVwqXJzgPkHNACBBgMYU3X9lYSdt9VR9pwNmnK1eEN52T1Q%2FwpxeUDScqhMZygrQithsUvLLH50F8pFa0zJVM49UBDva4cjc41MjQ4jtTiqdyLX05MBHuVgiEUMZ58as%2Bfq40M6Yp3jFeEVl%2BIP9rSEoZOZIHU11le8XuhG5oT3zDoxCrhNXtFxTLliw%2F1vaedK9bK0jMg0w%2Fb6bJPQv3CZDRzTtJJTCbwr1EN8BtmaiZl9GoheO9K4k86eVkjNc%2FiTLz2cppJTYJt%2BbYKXcc6xArGwFM7evdtfLTd8WhU%2F5H3ukZdA1U2Ec0%2BhyVLDzNtquY6h%2B2TQl%2FmORF0vMD4Vu7jI%2BTn%2BFMPuG3cAGOqUBDI8KEjhLpKgdos%2BMksuyDAd9%2FOTW7uQGNTpmexaDK9dfLx3VjKFx1DAUVPYoDEzymbLCp8ou1LB0Tt4sjhupYPpwH4SYAnhebEGubm2UlFKWHb3RyayltgkmhTjL%2F0IBYISXhqDwqB9E5PFhEKe3wgOflNQlQVlzb8Lj4k9eYB3lN%2FzL6%2BUG7Mslb1kIkYUhgbxSDu1PFqwfpoMoOlKNY63ZTlDD&X-Amz-Signature=05eb35668341329e5cc8084b02c1d74a18cb283ce4885cdd066fc949ff01d968&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAMD4SE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEh4dUMzuT5NAvFpCo9nrd9kmRzicfa%2FXwSLFXIrcLzeAiAEvHoH8y0ki4pHL%2B8dmcKkzR5ewkS65mO0I0ABTp9JNCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMWsI4nv%2BrxiLa%2BCN7KtwD3qc89ez9y%2BOnZk1xf000Q1vwya%2F%2Fip%2BaIPE3JMtxfTtsADLZYQ%2FSUPlnWfMVodm2dP2DE5EBxT10Web7zCc70EWr0rvjcZoU6BQdPGpy5fAW%2FQq0vIIbO40LcpB%2BqXkowXMhMnSW9jxdUwnVzscx17Qygee%2BFmTvIMJqBxbBUiJudj8DU%2BwUf8y7YwNhtImOkesVXPdmniT3oMsp3jBlUL7mgVtmMTkZlm5Jvynqwy4EgD9RzIB%2F7p9NO3yrPtzQcC%2BqnUz6zdPTrTcBerGqTloGeZ4FcdmiSb5ZU9VhLB%2FqQgBo1y59hH6nfZN1xHM4ejdxEB19ho9lL%2FjbkXYuIiB49d1ImYIy%2FDqlIk1swxh0WvrsXyNWpIGoUk85gVg289nXaApQlQjSHhx1%2FZIPC%2FKx7m1RE4sNYCoJo3JLHga4SvQ5pL7Q%2BxLb1I73NoLMOa78hUnfy3WsiME32bpO0hrPF6hf6H8Mnhx%2Fc5dvI%2F06eMMMqFZD%2By7ZCoc8js3JXOJMGq8wAvX%2FrOR0QHWNKpauiq3OugjErt3vysJoGi0VrmDzqVs1HpRnnTQb5NUv%2Bs8803yEHlw%2B5ut6RouCzBkZXSuPxn8%2FooGlG6uglxOE59dnGt6NOlAe12IwzY7dwAY6pgGPAH94UWMxBq3iZ1q7HL9aCpbPIz0aSlBQqsVjWG5RN1Qara8Njt46d4%2F1hwKnwhRuVHi5MgvQMn7tXK50ai%2BxYpME%2F822YbQMIXMDbrKQ1lY3Np0XdL3nATTBSg0d6TZC8lW%2BdWFpLKR%2Fc%2BU0zdSVkhiZeV4%2Bx7ZnwwI4dqw%2FShTzM%2FjwwOL6ptLsXNNOoYXd44MD0QoAt19zlY7gu2wS2jhMnn8i&X-Amz-Signature=b42b2e2d221bf162631fc0fbad790d3fd9d80bb5a84532b9c215c8a210edc310&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
