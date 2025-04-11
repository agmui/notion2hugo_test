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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7BQ4M5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCNTmX4aZeitTZUhAPDRax9SbI9WGUEk18p%2BY7CVZi9kQIgYmedgVhgFHkuVsiF0jF%2BdecYX7vV27JITi%2Bj3jatgzQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovAAZoc%2BjCjtil7CrcA9jkK2zKeR2HEN6oWx1f%2B295UJIrMLeVFr6Y%2FLxZvzDEP6Z9zvaQXEARma%2BoajMnyqrPfq3Va9hNL0SnnPwT93e8uLrximXcbCZVUcMo7wNEYch5HCH1QuhGeSAyzvQvD%2BszwZi0khxH%2FbcMPvmAkMGa3q5N%2F866xQmrYFJARfrGUp9pyRx%2Fazf5zbDdcITIe2X6fQlpmxBHtP7fjidsYIvfougOOSMYY3oTjXLPWQh9aFT3RQYirA3yie5xKAHpI%2B%2BFGPWozXHuLStRuYDYCGwVjx%2Bo56Cwdb6MIXw4nsDXaJViaqsC5YyXl4C07tKUcESeEWVtkKep7kQk%2FA1%2BS%2BXU%2Bun5aeOho98m0TDzt%2FQn%2BwNPoKeZiMJxKQ8ofXUo5oSRTSiFv51sEadIq2ZeFu1UuIHC1Q4%2FPFb%2F%2BP1pvM4o5mAeJuMi6oyV%2FCKuKHh4ZR3Mwx8hyOW7wpO7OOE07vSxX5wWObSfQ5HTGe7jswkPckoQTu300p5c8WXaXCeMTkSW1c4Edsk9kDoRF%2F5dYpSMkkBg404LX1k6ZAavRK6T%2F6VCdcYxQtZwb7ze0C2NJjyq9T7n9K5e%2BmvjlLuLBz%2BltnbkLZqIuuvcAiQcBEvV17JKIvyHLgd0s1ZnML%2FZ5b8GOqUBYSY1D6Bc46IzFlhiSOsSiIIMmLM8M3z6G2F3MJGufmBHBiT%2B%2F%2B6XamL%2B2QD5hlj%2BFnJy%2BMGUC1ZoKuyQDpyQkHhUuLOrH0amlG8r8gVe1clCih7zOWpDMyLln%2FxQQvGxEd0KL02e4kmzz8GtsbCRu3Pct48xndpmwnfzgXIu%2BHXZAlT7ohld%2BJYfl4pea3alvmZyRZRZWI4h0OcwqDgQ4m6AeLE8&X-Amz-Signature=1df8c65dfae01ad65b7db7e2ffc39ed620a086c858deed886ecb5332b7f5557b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7BQ4M5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCNTmX4aZeitTZUhAPDRax9SbI9WGUEk18p%2BY7CVZi9kQIgYmedgVhgFHkuVsiF0jF%2BdecYX7vV27JITi%2Bj3jatgzQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovAAZoc%2BjCjtil7CrcA9jkK2zKeR2HEN6oWx1f%2B295UJIrMLeVFr6Y%2FLxZvzDEP6Z9zvaQXEARma%2BoajMnyqrPfq3Va9hNL0SnnPwT93e8uLrximXcbCZVUcMo7wNEYch5HCH1QuhGeSAyzvQvD%2BszwZi0khxH%2FbcMPvmAkMGa3q5N%2F866xQmrYFJARfrGUp9pyRx%2Fazf5zbDdcITIe2X6fQlpmxBHtP7fjidsYIvfougOOSMYY3oTjXLPWQh9aFT3RQYirA3yie5xKAHpI%2B%2BFGPWozXHuLStRuYDYCGwVjx%2Bo56Cwdb6MIXw4nsDXaJViaqsC5YyXl4C07tKUcESeEWVtkKep7kQk%2FA1%2BS%2BXU%2Bun5aeOho98m0TDzt%2FQn%2BwNPoKeZiMJxKQ8ofXUo5oSRTSiFv51sEadIq2ZeFu1UuIHC1Q4%2FPFb%2F%2BP1pvM4o5mAeJuMi6oyV%2FCKuKHh4ZR3Mwx8hyOW7wpO7OOE07vSxX5wWObSfQ5HTGe7jswkPckoQTu300p5c8WXaXCeMTkSW1c4Edsk9kDoRF%2F5dYpSMkkBg404LX1k6ZAavRK6T%2F6VCdcYxQtZwb7ze0C2NJjyq9T7n9K5e%2BmvjlLuLBz%2BltnbkLZqIuuvcAiQcBEvV17JKIvyHLgd0s1ZnML%2FZ5b8GOqUBYSY1D6Bc46IzFlhiSOsSiIIMmLM8M3z6G2F3MJGufmBHBiT%2B%2F%2B6XamL%2B2QD5hlj%2BFnJy%2BMGUC1ZoKuyQDpyQkHhUuLOrH0amlG8r8gVe1clCih7zOWpDMyLln%2FxQQvGxEd0KL02e4kmzz8GtsbCRu3Pct48xndpmwnfzgXIu%2BHXZAlT7ohld%2BJYfl4pea3alvmZyRZRZWI4h0OcwqDgQ4m6AeLE8&X-Amz-Signature=e0c5d0ea6eaa581b5b5f597f7d66fc92720605a96be2a0f5c9bf176004eeb3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6TYAQI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCX%2FFUuN7%2FEqfsjdAAxZoxkfY1LjjOh5%2Fry0u9qSFmDOgIhAKck0Wm6E8%2FAcfsZ1ddkTUVMONvM74HDEpgadvHzC5PNKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtcA9qdlwZ5r8JXCkq3AP5fV6bbYul%2FJeA9kheNcJLJkzU437IeS08CP%2BBUiIUalybKSjBkmwTyhY1OKcg7HUgkZf2KWr9e7TPaTP36IysPO6tTZnbutz1SW2%2FXwx0G%2F%2F2pdSH8k%2FrNs9HcwVPQG3z5YyIPkzZR1RxFNTWs7UwXfgtwH9xMunNXrJeJRi%2FFQ2LM%2FO%2BAkiwXiszK%2B9laYHShUPQZ77%2FQMkyDi4BY8XkWKasWNc32qqvi7uHFLcWn4le%2BUT0kQwd2xtweu9SDt6yAwrk10bvGNoL9gGjDmb7MRXk%2FJHkSO28%2Bm2FhoWqui8RhkPpYXpUAJlGf4m8pqeDsrHDsxnLFwICxd%2FcG%2BNLQ%2BdnE4DrWCd9YVCGLo%2FMOn%2FV47QdpKMhtKNESfxqtbkdlT%2F6Itc97C9qwBPWrszLqY2cE%2BgWwuo6bqA4nLu7pSxeQ44rZcosgPGFF96quq6SLsAiptaH0700aUNsiEfzsPtoZn7EcG8LMTkoFvy%2F0lIefvmJ%2FDao30pcydW%2FGieMdZK%2BiE%2B82P8i46rClMtmwadXQ%2BiGXJRuU9X6VdbuOqdR46fM6lG5EdLAANl5e3cc1qRfbRbumlPvYRHTnaGPnPnMke4j%2BQ%2BMtQER4qKPeIzzJlEDQa62eeTgLjCM2eW%2FBjqkAbU%2Fr6mDM0yldM1%2BfuvSq9pF%2BVj1WWPkCk%2BeMCkmihDOBFQBF2jOjEbd1BiD6V77Fj33A8q65NxNdBMGTFXSwchEFgSTgcUUu3Lrzl6TDTFI8MMSXvO7AKi0NsaB%2BRD6ccADwO0rxbLZr6vt8GCllZOUI%2FX7JzJ3r5vnCx9nMWp1FtPXtANoYJHrafTPwylYYOW15TJrzHe79U4WqfabpPt6TDM%2F&X-Amz-Signature=0602c52fdb69585e27cb721aa2e6b03aed2b664fc15d782e9e0189b719089a49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6COO2V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDU9V2BJ2qaXoVUEIdhUDTh2eTP3C7d78x2Fv9NAV2TXQIgc%2BaZOVysW9f9SB0x%2FwMdyy0HjrPa63M%2F44tY1t36ciYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkohFFeskRrgDlspCrcA1vPZvpDvV2kuZ6dKHyDSOhRXUN3VnTrjyqsdjDni7p5jEMUBicdyP7VdIqxkLidMGkwXsLrosVK%2BxplpAFLWP9gqE0PbuMZwQz6zY4WLteOMtT5uqHVO8hZohZiv29A2ZRQ4rKnfU8gzWkJmaYx97sryZetX89XVO%2F3w%2F00gpneBPBr55FWGpNAO3nTp0CjxwbFnZ6Jlrss2lyNt9ZaU0QrKmd8nnxYgk7yBh5wUElEmGzDN69EXWrkg1Ry%2BetcYHICwDq97pK4gPvTyZoKK3I0hxeKCJm%2FrsLICPqtduI2R3%2BhqWoezFZIYzL7EOR9M5bdPnNAIc8YnCGVrSx3SkiNGXnHONwSFSr5900BS2HV9OzgJuxbgYwyMQKmRDAK6k0jmFc1ATO6do0EkXxo95pnvbcIprGfcj%2F9tvZDhFL%2Bl2E4Oly%2F7NLQDb7qt3MuAuHvg%2F8qJYjGdF7O2jP14ty34CamgR67wsJ0qToyT%2F41N3vdRUdqbdAvXtgAJRkYmt5XMq4ZqVUCnk%2BX1%2BUy9Q7jj%2F1I5gORHl8769%2FHYVMcH0bG44U2UvaiWwu%2Bs2KsDqOnt9CGol7JBKELu68qDjNfJuxulNIgCc2dyUfGSjLz7GLUvwTNV%2BoWJHotMJHZ5b8GOqUB6Cl%2BEGIOabmfDgg8y1V2lPNTG8wc0ao3K8VyuSfi1bwquA%2F42DaTYGSXrNmjhP3bL9Fn8AbSzq4BG249gRglcS6bnAbkVr417hmgwx4h44S0aWA63D9%2FLDTb9XcnKCxqcSVhqq6vzciSCnfzRNO7qNobc%2FxM7qFFa%2F3k45lang6%2BAlSUP7TqPNtxCSFYJOqx%2Bkw0fTFzAuwSFhe6KVhYnzL5K5p%2F&X-Amz-Signature=7b1c85ec5223ae64d7624d776ec781a21181e87e59a7f53aead567bb99ec0a71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7BQ4M5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCNTmX4aZeitTZUhAPDRax9SbI9WGUEk18p%2BY7CVZi9kQIgYmedgVhgFHkuVsiF0jF%2BdecYX7vV27JITi%2Bj3jatgzQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovAAZoc%2BjCjtil7CrcA9jkK2zKeR2HEN6oWx1f%2B295UJIrMLeVFr6Y%2FLxZvzDEP6Z9zvaQXEARma%2BoajMnyqrPfq3Va9hNL0SnnPwT93e8uLrximXcbCZVUcMo7wNEYch5HCH1QuhGeSAyzvQvD%2BszwZi0khxH%2FbcMPvmAkMGa3q5N%2F866xQmrYFJARfrGUp9pyRx%2Fazf5zbDdcITIe2X6fQlpmxBHtP7fjidsYIvfougOOSMYY3oTjXLPWQh9aFT3RQYirA3yie5xKAHpI%2B%2BFGPWozXHuLStRuYDYCGwVjx%2Bo56Cwdb6MIXw4nsDXaJViaqsC5YyXl4C07tKUcESeEWVtkKep7kQk%2FA1%2BS%2BXU%2Bun5aeOho98m0TDzt%2FQn%2BwNPoKeZiMJxKQ8ofXUo5oSRTSiFv51sEadIq2ZeFu1UuIHC1Q4%2FPFb%2F%2BP1pvM4o5mAeJuMi6oyV%2FCKuKHh4ZR3Mwx8hyOW7wpO7OOE07vSxX5wWObSfQ5HTGe7jswkPckoQTu300p5c8WXaXCeMTkSW1c4Edsk9kDoRF%2F5dYpSMkkBg404LX1k6ZAavRK6T%2F6VCdcYxQtZwb7ze0C2NJjyq9T7n9K5e%2BmvjlLuLBz%2BltnbkLZqIuuvcAiQcBEvV17JKIvyHLgd0s1ZnML%2FZ5b8GOqUBYSY1D6Bc46IzFlhiSOsSiIIMmLM8M3z6G2F3MJGufmBHBiT%2B%2F%2B6XamL%2B2QD5hlj%2BFnJy%2BMGUC1ZoKuyQDpyQkHhUuLOrH0amlG8r8gVe1clCih7zOWpDMyLln%2FxQQvGxEd0KL02e4kmzz8GtsbCRu3Pct48xndpmwnfzgXIu%2BHXZAlT7ohld%2BJYfl4pea3alvmZyRZRZWI4h0OcwqDgQ4m6AeLE8&X-Amz-Signature=5c16fe698419c4cf9fafdb67da9887bc1fc0515f34e3f0814fb53af1a888b81d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
