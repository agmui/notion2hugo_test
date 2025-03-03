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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQS7PGU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkLjnh4cCG5mr%2FBZAko%2F6beg75dm8k6iBmPw1gIpUAgAiEApP13%2FRaJyC4fS0dzNkzc9zCp02ndc8kcAA8yxqNfVsgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKsXb%2BfbZDRaqzHCrcA00Q6OL1JElJ2XrR9ziUIX0Kpmo6bNs4B2NISSfuuu5FZmLc6b%2F7HqgFzxIUlxUYuxe%2FBOspzwOAh5c15pT8QocU4cVQjM9QIBf0W9Toi4ClzGYmoWwKraNBOAWgwOVSyXqBuWBskOzOiooklHHd8lyubWdJkFcj1%2BOhWtKi7T6nl4bXbogDNQabal75T%2FiBZ8lNd%2BUjpub9wG9xFYCdmchznrojIbOutC%2B0E5MXK0pU9p3Pm7xJFqbZvyMH1ixxIe1a0F1SYx0tfrrxCMEk5aXrOoWBjn%2FdFzOZsOAqYLtW%2BvR1X5khOTazoWiT7MBAVbQxpf5tjQy5XOPdwq5GaVEs4WXtTTTsc40vZmcIjKAOrNyrDXakpWSDmPtdDeJLnkoXSV%2FYF8JHS4eNC4YhCJUc2MoQGMjX50IGInhencbtJXuXKTpgNq69%2BwmgFnBl8jstsWhMFnR33a3M7OwQWA17IXMn5IMl0Eap%2F8HOuoZNrAgkTNdzcZITkdVc41eXkNslzjBZwVY0MVW8xW5yedNLD0jrGbMLIuzgiQ38CSuydmCL9lwU4BerQX6Jjpflyand0EU9VPVL8ps6xi3iBZyHWFUVTPKmLDg51QV9huo0%2F%2Bc1mTDvEddN1gs4MLe9l74GOqUB1lqz%2FbpDhOmn8PmfB7%2BlL8yDtIwnsL1vK2N5%2Btxs1AoFch1KMhl%2FjVOWzjDv596CGryBTj8xQNGYbNDGTXZc1xTfbjYquq5cjB2I8t1i7wRzwPhodn8Sga93zQzvIjLJYUvEUVm6o%2BIEI0EU64nSSHjNc3MbCeAqTZnN7ACCECe70rJqs5UdiVAZZfYPnxMhZ8eWOEX0aT18gzaos2%2Fdn1RurZy%2B&X-Amz-Signature=4b6cc18f229e0356866b48f972c0a003eac0ab55f1f5eec64d735a404d6aaf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQS7PGU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkLjnh4cCG5mr%2FBZAko%2F6beg75dm8k6iBmPw1gIpUAgAiEApP13%2FRaJyC4fS0dzNkzc9zCp02ndc8kcAA8yxqNfVsgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKsXb%2BfbZDRaqzHCrcA00Q6OL1JElJ2XrR9ziUIX0Kpmo6bNs4B2NISSfuuu5FZmLc6b%2F7HqgFzxIUlxUYuxe%2FBOspzwOAh5c15pT8QocU4cVQjM9QIBf0W9Toi4ClzGYmoWwKraNBOAWgwOVSyXqBuWBskOzOiooklHHd8lyubWdJkFcj1%2BOhWtKi7T6nl4bXbogDNQabal75T%2FiBZ8lNd%2BUjpub9wG9xFYCdmchznrojIbOutC%2B0E5MXK0pU9p3Pm7xJFqbZvyMH1ixxIe1a0F1SYx0tfrrxCMEk5aXrOoWBjn%2FdFzOZsOAqYLtW%2BvR1X5khOTazoWiT7MBAVbQxpf5tjQy5XOPdwq5GaVEs4WXtTTTsc40vZmcIjKAOrNyrDXakpWSDmPtdDeJLnkoXSV%2FYF8JHS4eNC4YhCJUc2MoQGMjX50IGInhencbtJXuXKTpgNq69%2BwmgFnBl8jstsWhMFnR33a3M7OwQWA17IXMn5IMl0Eap%2F8HOuoZNrAgkTNdzcZITkdVc41eXkNslzjBZwVY0MVW8xW5yedNLD0jrGbMLIuzgiQ38CSuydmCL9lwU4BerQX6Jjpflyand0EU9VPVL8ps6xi3iBZyHWFUVTPKmLDg51QV9huo0%2F%2Bc1mTDvEddN1gs4MLe9l74GOqUB1lqz%2FbpDhOmn8PmfB7%2BlL8yDtIwnsL1vK2N5%2Btxs1AoFch1KMhl%2FjVOWzjDv596CGryBTj8xQNGYbNDGTXZc1xTfbjYquq5cjB2I8t1i7wRzwPhodn8Sga93zQzvIjLJYUvEUVm6o%2BIEI0EU64nSSHjNc3MbCeAqTZnN7ACCECe70rJqs5UdiVAZZfYPnxMhZ8eWOEX0aT18gzaos2%2Fdn1RurZy%2B&X-Amz-Signature=4b3b5451e40d22c5f9b7888c1317b32f98c61f190ad70b1f89123d3c274a25d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MRGZB3M%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcYWmtaBBN6zMwVEd6NVwSkxmkqqgNfPvrSgHSAl%2FTgAiADiuHySioIl7862PSgdH29R44OvG9z%2B7xjGKv8%2BPlKZSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqqlJx0lpHPVBTNNQKtwD3a4xEmyJe2NzVS9dXp%2FvpPOyE4PeGdtr1MQdZQ7bdq4cygER5bn1rUkluLEAghQjlhwSRl7S38OtM%2FoYn7L1bE6ZFQ5baO6nPZ8Pzti%2FN2wNFAcDWOTW3%2BllnYvvi%2Fj5NWwIf3vgl2f%2F8fcdX65znKRsU%2F5b6bsM7FVCg3fhFmtjtm8rA%2BwwrGQEnOja9OhS%2B4o%2FF8E60XNf%2B4uvITND9Ccs%2F7aKAcT16sAl4RtYwYAVK7u5lvjdQyWOR6hfRSuotcHTb%2Fa%2BUWvgi9vhctFlOJ7VkRzSFoyfzCal0amFLbEPVovwmVfloB8MOYfEIc6ZhwZMpjW3KRkN7F0IgUjAu1NiqAOEqrqKVGJ8X9buomXcfp1HOwS22lAqfOsCSFHTUoYgx6KxwMb3zoKFIk%2FVZJPa03dY9abGy4%2FF5pXDMl9Vo1yvN4AxWza6dICU5cdQfMVWTJVTFBMO6P9UthIdoVo8G%2FlMjBtBMRmdKqP6ntLPytHtAeM7AFKJ8cM1pizgL2EDKmfCDKjInu88%2FFRshvRTjrCXsBOZfEyR93FKJeQxCqWgGFtmI9HlzB%2F6GSx7cILzgxTu%2F2LbhN2gCmFt%2FkLtSFsIAI%2F6ttx1T9Df03odlllDFigQ%2BY2TcfYwtryXvgY6pgHn3RJ3COwI0j%2BOeCouFIn%2FoQN61DVLHpk6bHGP1m6YNS1Zpt5KXrk8k0OkZWVyuk8gT3OsqC6R4LLR7%2FzWOvekA8%2BoXcmSL8As4agGgKc%2FMNuJ9%2FyiKTiKe5vP5I7HbmipitnDSn4%2BeKBHcJjNsC%2B%2FdV1B6sDJ1y4oRgRBAynS7BvrnNUg%2BGwmg96E4XToMOOyTBOo%2FohPc9q7M2Kcl7C0GHnNO9jg&X-Amz-Signature=58d48c7dc341ccdbc7a42c066e78167bcd40c44e21aa5df3fb7e8826790b8b95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6ENTHK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA379YqtMBE%2FA71LQB61EnDNKOebD8YNKodEHUXNqeuGAiEAmv4JGBzFde%2B64WnDtF57H1TmyVZqEt4LHlb1FI1NdWYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3AYJJsJGu%2FP3C%2BfyrcA9isck1kpveAm%2Bewz6eAf8SS42VTfowTZh5JXL2nt%2BiypzKxgjnbH8mPQW5%2F%2BcKuawho3%2FiEAx%2BL0iCLDAW81JruBPlQ5oP2UEv4oeSioyrZgtw1OgtKerz5mxTD2rMWWI9c6wMQBi1FP0RAkNIfPaWJw8LUNZ5X3MeSGMDQlwPw5bCKbd8XKo0GEkMuzEsLfLSqfgTxhbi1074XCz07d7HPPTcpytVFfR060dHagEMTYmUJ65aldbdk9DIgvhTp7OMTNVVES3zI4FBYeyU%2BncE5hO2LhaSaA3yyAoyroCKuLXmVDRbsxyp4mD78%2FUoIuf4ZhHypu%2FF73MeiKCgP7kbgzT280ljofpJSMEJNzOUl5XV3gA8dCzfcW8v82nktvNZIOflEZN4GS8QAC8JDJw8Wz1ONp1ZwEi7ylRUaHkUDpzeOtTqZxuJGyveZCST45db64LwCmqeQ9mol7cok3xqCuER8fExuZv2vYgV6ONE%2BMVhUsY7zKMRHIN4z28GWyUoIgf3OuHl%2FUYoqgW9RhQ4INUlKXkut8dk3QrVgvZiyaKnKURZwVrUxRNxPpkox0ZLOpUCKYrQi2Innn2sNR3UElT%2FkNBrO5sr1dy3SuIBuXpyHej3ysaP95A74MJC8l74GOqUBR%2BfA8VdGvRYOLB2%2BSo%2F38PZ3%2BL6%2BdlWQ5E9Buwz5USb5WQD9dA9a93PWxz85w0dGUjGfLWvieeYXkVhrEWArKKHUwsEvqgPaYfVTXmXWeHVffEpKjf30rZzOK1ItBeXTrDpOi1bwgfwlDVSCRGPiRDpKXto7WZEoAcCNjbBQR3u4BBCwFnYFZzn4pptlVb8ecNvwNGLFSmhNmeqcL%2BrUy%2BDNF26Y&X-Amz-Signature=914a4fee65b35e81c23554333a34d307f6b3d479104aa45c14acb4ebe2ee44ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQS7PGU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkLjnh4cCG5mr%2FBZAko%2F6beg75dm8k6iBmPw1gIpUAgAiEApP13%2FRaJyC4fS0dzNkzc9zCp02ndc8kcAA8yxqNfVsgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKsXb%2BfbZDRaqzHCrcA00Q6OL1JElJ2XrR9ziUIX0Kpmo6bNs4B2NISSfuuu5FZmLc6b%2F7HqgFzxIUlxUYuxe%2FBOspzwOAh5c15pT8QocU4cVQjM9QIBf0W9Toi4ClzGYmoWwKraNBOAWgwOVSyXqBuWBskOzOiooklHHd8lyubWdJkFcj1%2BOhWtKi7T6nl4bXbogDNQabal75T%2FiBZ8lNd%2BUjpub9wG9xFYCdmchznrojIbOutC%2B0E5MXK0pU9p3Pm7xJFqbZvyMH1ixxIe1a0F1SYx0tfrrxCMEk5aXrOoWBjn%2FdFzOZsOAqYLtW%2BvR1X5khOTazoWiT7MBAVbQxpf5tjQy5XOPdwq5GaVEs4WXtTTTsc40vZmcIjKAOrNyrDXakpWSDmPtdDeJLnkoXSV%2FYF8JHS4eNC4YhCJUc2MoQGMjX50IGInhencbtJXuXKTpgNq69%2BwmgFnBl8jstsWhMFnR33a3M7OwQWA17IXMn5IMl0Eap%2F8HOuoZNrAgkTNdzcZITkdVc41eXkNslzjBZwVY0MVW8xW5yedNLD0jrGbMLIuzgiQ38CSuydmCL9lwU4BerQX6Jjpflyand0EU9VPVL8ps6xi3iBZyHWFUVTPKmLDg51QV9huo0%2F%2Bc1mTDvEddN1gs4MLe9l74GOqUB1lqz%2FbpDhOmn8PmfB7%2BlL8yDtIwnsL1vK2N5%2Btxs1AoFch1KMhl%2FjVOWzjDv596CGryBTj8xQNGYbNDGTXZc1xTfbjYquq5cjB2I8t1i7wRzwPhodn8Sga93zQzvIjLJYUvEUVm6o%2BIEI0EU64nSSHjNc3MbCeAqTZnN7ACCECe70rJqs5UdiVAZZfYPnxMhZ8eWOEX0aT18gzaos2%2Fdn1RurZy%2B&X-Amz-Signature=79b0b5680c278beab099e61cbaf6a3f7e142cf449000e6148def41fa6d0dab33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
