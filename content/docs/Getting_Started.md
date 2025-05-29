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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2CPDXP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNiDAs9H6WfqWuJKaHhxTh4%2BNXdW2YzUWCUVTscUaiTAiBv2wRRLyVwWSh3ZEo2i%2FiIi9emCrx%2FSBhLAcpfDe4YriqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9Xm5fn63SsVU16LKtwDTaGon5XEisHePDfWrebhvo611TTgQOvzscc0PYZ9G1oofqO8zV9P%2BxhtiU8oG1gnFcA%2F%2FBQ7xM%2FR2rFnnsDakDHf%2BI2MGm8gDcL8B%2F%2FSa77PDgetu%2BDuJvskxrCopdO%2BSkGfQ0lw%2Bzx%2B4JDH%2BK3iNFjDAifoXKVVaRX3uHjG4UAGzkvx3ut%2Fp2uKqRDmObrm5OOKt%2FYjG02d0xVG%2BwU9rrA%2B5kEihkdDou8sBJw%2FkrH6Y4ZlwZP3IYuKDRfej15iiJ2ixAhI%2Bpj5brJfEW4nbeUXqGJnF49VYNsnWLPm0jfu3cu2IWDtPN6BsuQKUKds2wMJSfuINPSyz9bTyhCDI50wJlMGyJJETk3yy%2FZrJaGURzdZKscAYjPpX2hm8A32M%2FQmmvtk0gXECbJiN%2BS4okfbENrqMKvF94nTlgCB7qlPUVGRMQCVyyN%2FJLAtD12qQ%2FzPkgyuLuo0GEmyCa%2FqqCuzEts98EkYC2YF8iBVwaZHfLeXekyIhGHldbdQHD8F%2BWCXwqtlq9SYNUk1jdHEy8d%2BG29N6kRoixp%2FeQ6bWgvRc8YYYnNzm6iFSdgjM%2FGjq04s71mqNvxnM1xaNj6CzSa59nvP2dajxKSl1CmboxQVufrLBLvVD3cxp9Qw4LLhwQY6pgEOg9YPhutFYgcPqtRxDEk7pScFN7KobSJTDggSkD6slU6Ue9gcytyXidd%2F7hJDtHxU1D2RmtTFXf6IFUFieGivRXLjbQqvaC8ab8PIfztzhLulrqRRPSo8TnN2F2zKDR%2Fid%2BC510b8keMzjGZLuA8NBGg3NmVRDZbxzvkCIV4bjs5Y7N5ZnAKITvg53bgC7WGvq6Saln9u3%2FSMRoQcj1wbtIUBwC2h&X-Amz-Signature=7184bf284919250b942f3926bee69338668c33bdebb691c64774f2e9322c70c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2CPDXP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNiDAs9H6WfqWuJKaHhxTh4%2BNXdW2YzUWCUVTscUaiTAiBv2wRRLyVwWSh3ZEo2i%2FiIi9emCrx%2FSBhLAcpfDe4YriqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9Xm5fn63SsVU16LKtwDTaGon5XEisHePDfWrebhvo611TTgQOvzscc0PYZ9G1oofqO8zV9P%2BxhtiU8oG1gnFcA%2F%2FBQ7xM%2FR2rFnnsDakDHf%2BI2MGm8gDcL8B%2F%2FSa77PDgetu%2BDuJvskxrCopdO%2BSkGfQ0lw%2Bzx%2B4JDH%2BK3iNFjDAifoXKVVaRX3uHjG4UAGzkvx3ut%2Fp2uKqRDmObrm5OOKt%2FYjG02d0xVG%2BwU9rrA%2B5kEihkdDou8sBJw%2FkrH6Y4ZlwZP3IYuKDRfej15iiJ2ixAhI%2Bpj5brJfEW4nbeUXqGJnF49VYNsnWLPm0jfu3cu2IWDtPN6BsuQKUKds2wMJSfuINPSyz9bTyhCDI50wJlMGyJJETk3yy%2FZrJaGURzdZKscAYjPpX2hm8A32M%2FQmmvtk0gXECbJiN%2BS4okfbENrqMKvF94nTlgCB7qlPUVGRMQCVyyN%2FJLAtD12qQ%2FzPkgyuLuo0GEmyCa%2FqqCuzEts98EkYC2YF8iBVwaZHfLeXekyIhGHldbdQHD8F%2BWCXwqtlq9SYNUk1jdHEy8d%2BG29N6kRoixp%2FeQ6bWgvRc8YYYnNzm6iFSdgjM%2FGjq04s71mqNvxnM1xaNj6CzSa59nvP2dajxKSl1CmboxQVufrLBLvVD3cxp9Qw4LLhwQY6pgEOg9YPhutFYgcPqtRxDEk7pScFN7KobSJTDggSkD6slU6Ue9gcytyXidd%2F7hJDtHxU1D2RmtTFXf6IFUFieGivRXLjbQqvaC8ab8PIfztzhLulrqRRPSo8TnN2F2zKDR%2Fid%2BC510b8keMzjGZLuA8NBGg3NmVRDZbxzvkCIV4bjs5Y7N5ZnAKITvg53bgC7WGvq6Saln9u3%2FSMRoQcj1wbtIUBwC2h&X-Amz-Signature=c2e9c74a1c1913c7f2b5b204c2c21d7ec6b1adafbba236cd1653a5a25f359ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2CPDXP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNiDAs9H6WfqWuJKaHhxTh4%2BNXdW2YzUWCUVTscUaiTAiBv2wRRLyVwWSh3ZEo2i%2FiIi9emCrx%2FSBhLAcpfDe4YriqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9Xm5fn63SsVU16LKtwDTaGon5XEisHePDfWrebhvo611TTgQOvzscc0PYZ9G1oofqO8zV9P%2BxhtiU8oG1gnFcA%2F%2FBQ7xM%2FR2rFnnsDakDHf%2BI2MGm8gDcL8B%2F%2FSa77PDgetu%2BDuJvskxrCopdO%2BSkGfQ0lw%2Bzx%2B4JDH%2BK3iNFjDAifoXKVVaRX3uHjG4UAGzkvx3ut%2Fp2uKqRDmObrm5OOKt%2FYjG02d0xVG%2BwU9rrA%2B5kEihkdDou8sBJw%2FkrH6Y4ZlwZP3IYuKDRfej15iiJ2ixAhI%2Bpj5brJfEW4nbeUXqGJnF49VYNsnWLPm0jfu3cu2IWDtPN6BsuQKUKds2wMJSfuINPSyz9bTyhCDI50wJlMGyJJETk3yy%2FZrJaGURzdZKscAYjPpX2hm8A32M%2FQmmvtk0gXECbJiN%2BS4okfbENrqMKvF94nTlgCB7qlPUVGRMQCVyyN%2FJLAtD12qQ%2FzPkgyuLuo0GEmyCa%2FqqCuzEts98EkYC2YF8iBVwaZHfLeXekyIhGHldbdQHD8F%2BWCXwqtlq9SYNUk1jdHEy8d%2BG29N6kRoixp%2FeQ6bWgvRc8YYYnNzm6iFSdgjM%2FGjq04s71mqNvxnM1xaNj6CzSa59nvP2dajxKSl1CmboxQVufrLBLvVD3cxp9Qw4LLhwQY6pgEOg9YPhutFYgcPqtRxDEk7pScFN7KobSJTDggSkD6slU6Ue9gcytyXidd%2F7hJDtHxU1D2RmtTFXf6IFUFieGivRXLjbQqvaC8ab8PIfztzhLulrqRRPSo8TnN2F2zKDR%2Fid%2BC510b8keMzjGZLuA8NBGg3NmVRDZbxzvkCIV4bjs5Y7N5ZnAKITvg53bgC7WGvq6Saln9u3%2FSMRoQcj1wbtIUBwC2h&X-Amz-Signature=5b6365c7756804a579dd2a867cccb189a4265ddf2ed5656ff9c5e0e46da8562d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MMM2KN4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxkAhNjf3WUV5enaNk%2Bj3rv5RnazCvglz3PR2Knc%2FHAiAjofn9QBmnVOgj9KlbPTFvt1E1s2Lvk9m%2FhXjNVaK1%2BCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYxIVn16cWsnSO7HKtwD0f7JRS1%2F8wME7xsZlQUNFanglrPGIkFToTsgsTH2U7w2jO5s1p7ZUaG9udDtUmZD6p1b7QZRhKqygQduH6%2Bq8hywgLMRjx1IYwyDtAJ1g1Q%2B%2Fn0AZQovW%2FV6QYE7R9myCxxE4ghJ7P2ErM3mHcz3LIJ9tDpNVHlZwIgMo3J6u315tdz2vk907PJklIsZgUhp7ilyXBerIbXCq75ZGmg7rR9OCg97AXW2no1JIkDCDATIpEkkibICAA3GlDJ1yA4JFlqdJDcBs%2F4cDpb99lM9WSaiOty4iuUgYCTqbPR7yScGaA0ElyxhC61grTE%2BfsgZgB7MvW2GdFFq8JDvxi9rizC9WMvZjuPUei1xnHieSyoqj4po80WwWmcP%2FpNM7%2F0p7eC2k%2F0lJZr1ldFBv%2BvpBIDefIwuINgIE0Mk9kXldf1N2SPjjPHz0HINxJin2E7%2BZN9RcPdmSXpOD%2B0rb6TOxpjsI1iKDxFUiX4d4YKq3bERruU2jpv9L%2FLPIoymT85jcA31IXf5BSpH67RtuTvHX0uLKiCisbClsFiscVGBkV2sDzMIKJgMbwTdERVBDarIi%2FrNaPRUE9fjFUB45rZV4JvLt5fG1spnLHZF%2FeSb7r6xu43sx%2BQxhrXtWrIw%2F7HhwQY6pgGDf17YQ59UImgBWRY5rnEX9NOWzrmhYdtjrqeDCyFxaVWqkirIEO9QjQIXuh4miolwhVShsYW2uPjZV3MKFXKz4F8Jdf6fGGfit4YY8xpsHkcwpMGejaYWMJfk6LWT38YW9mPC6mFwzA1AO7LwVt5NCkNpApp8KtuNJaVQY28gZWbNrFL9RMkdLl%2BI7QcxhpMk%2F9pqGHBHI%2F9ie5pV2nLT0T6wRnuS&X-Amz-Signature=e4eafca54c6101637e96dc464c67737c3fa72013bc0c014af472f59c77080642&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USZQBRZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOBwjMlbYnErYI%2FIh8fJcPHOQe7MwlNgnfytx1C4cExQIgfh3YZ9jfBNv%2BbJhsCi5M2faNNQJaA7BbkXroFQ92SwQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSej2%2BaMFzf6aTO9ircA3FufZBU16WwpJWoIGmC8TIAvJ9D4PjhinpWOvpdNv5o8jbUsO%2Bl3hm73%2B%2Fb1bzAXNNObTrwROeFM%2B%2Fjn2B8261LWSQIHUxZ0x1csPpBdd1fWvUI6WkoK39zW6HwYACgLtkMykauKsRYo4Lc%2FVd%2FbgrRMxDvHyk1EIksDSAW%2Fmo%2Bs%2BAeuyEzWP%2F1AqKeuBPznCjdpeATTeTpqkpcjSp9vlW80%2BmeADC2cEk140stIehI0ufFDmoKIBp4%2BSrWCT9nm%2BN8ledDlSXGpmKyg3LaP3fYdXRanRC5SEDkfca2WlhPM3JTNw%2F%2FX5a3Xh1%2BKQJw33lO6I2XdeuRfcyi3pqhIDJpbuMeCQhSKNCCKvW2S5TguYvQhn3z8AZG8UOzRLfXFmrcXfsCGNyZUU%2FxboEy3QeK5vz1SQPhTIiC8Jhyci6Mf9%2Be0BuY7zch6NPUww6Cq7UdmNcWrrIX%2BqkAB1oomC5R3LA%2BsM72E8c4kayU39XEmtBURX%2F8eyEnNnw9Ylx1XVWVyzeVqnzUBQY0Vdc88%2BPCpCv2c%2BNQ1814VDbFgzUBnqSBhP2I9w8Uj1YApIVEv%2BxjFPP0ldFGLhnn60LLmT92G1%2F%2BZdvQ1IDRkGZkH%2FEjxz5B%2BJ0M3aN%2FwakQML2y4cEGOqUB1k2OZgJa8uwNvOO6bA3Fv4tM2txDAh3MMLNHPlzESyuvJlqeNKrdlAeYUDhfkblBB4iPaKLg1xgQen%2B0tnvALcRqPKr0WIEe%2FNG1M%2FstHKbGojPXshgrUIk5mB63zcnnh%2ForCdcGPtl5naLbWlNacFVcCl4cD1%2FLCblkIRrigCaEySUJi%2Fgzl8%2BgNaXJpK0fc9oJMPwgelmN6zdzLe6CJAkYH67b&X-Amz-Signature=b163445aebdbb76589d8a0362eef5c91660785c36d2e76ad50dad63882bbf131&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2CPDXP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNiDAs9H6WfqWuJKaHhxTh4%2BNXdW2YzUWCUVTscUaiTAiBv2wRRLyVwWSh3ZEo2i%2FiIi9emCrx%2FSBhLAcpfDe4YriqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9Xm5fn63SsVU16LKtwDTaGon5XEisHePDfWrebhvo611TTgQOvzscc0PYZ9G1oofqO8zV9P%2BxhtiU8oG1gnFcA%2F%2FBQ7xM%2FR2rFnnsDakDHf%2BI2MGm8gDcL8B%2F%2FSa77PDgetu%2BDuJvskxrCopdO%2BSkGfQ0lw%2Bzx%2B4JDH%2BK3iNFjDAifoXKVVaRX3uHjG4UAGzkvx3ut%2Fp2uKqRDmObrm5OOKt%2FYjG02d0xVG%2BwU9rrA%2B5kEihkdDou8sBJw%2FkrH6Y4ZlwZP3IYuKDRfej15iiJ2ixAhI%2Bpj5brJfEW4nbeUXqGJnF49VYNsnWLPm0jfu3cu2IWDtPN6BsuQKUKds2wMJSfuINPSyz9bTyhCDI50wJlMGyJJETk3yy%2FZrJaGURzdZKscAYjPpX2hm8A32M%2FQmmvtk0gXECbJiN%2BS4okfbENrqMKvF94nTlgCB7qlPUVGRMQCVyyN%2FJLAtD12qQ%2FzPkgyuLuo0GEmyCa%2FqqCuzEts98EkYC2YF8iBVwaZHfLeXekyIhGHldbdQHD8F%2BWCXwqtlq9SYNUk1jdHEy8d%2BG29N6kRoixp%2FeQ6bWgvRc8YYYnNzm6iFSdgjM%2FGjq04s71mqNvxnM1xaNj6CzSa59nvP2dajxKSl1CmboxQVufrLBLvVD3cxp9Qw4LLhwQY6pgEOg9YPhutFYgcPqtRxDEk7pScFN7KobSJTDggSkD6slU6Ue9gcytyXidd%2F7hJDtHxU1D2RmtTFXf6IFUFieGivRXLjbQqvaC8ab8PIfztzhLulrqRRPSo8TnN2F2zKDR%2Fid%2BC510b8keMzjGZLuA8NBGg3NmVRDZbxzvkCIV4bjs5Y7N5ZnAKITvg53bgC7WGvq6Saln9u3%2FSMRoQcj1wbtIUBwC2h&X-Amz-Signature=7423891dcb923b01b28173b8f555d3f860e7d51340267bd6aa4fbff9cb3a2524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
