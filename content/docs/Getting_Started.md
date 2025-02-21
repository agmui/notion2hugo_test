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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDXY7JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FPOTfqw1Gz8vyaGtcDkfhkOHere9Js%2FF7pXIWb9%2BR6AIgOGP52Lr%2FeYht6Zcy3SJ1Qd4xetUaQqNHXUjimYIwBo8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj4AEmze80bse%2BbfircAzwPBwZX6jCqwmZFnnMcGDknreqGBPXETEqIVsgvrYr8mF4BdRvfr%2BvD0jTjo1UMBuPykynhwGNHhftYuc6C3V6fWP8grCAVu4HKjwvTboZJX5p58NLZHrHGOF76iB0lJTA7B7lqGJgjGyCL%2B389NAnrZvq4DudDAQuysktGnEul4EhSwaKYM%2BOa9jVEXeQBXjSR%2FgKwuPUPTkWhaKDY32YB2LQsdmWwzzJuLLj2vDddwc6ZXZLTJ4MWZ6x867VRJJH1OApMba1o6oeeUnM4nM80BdwjoQ%2F4ku%2FIclHliQ%2Fmb9dyS7B6V4zOr8FNZmLBjD96F32LTtUlDx7dD5%2FM3Qg6mQVUvLuEnotYDEaD9bmX90peWFI6TjsAZOZvF3W1DJhSqUL6wmKtmhYuOoJh1hCoXzUZeNepx83DUKNP5p0pB4XcLgN0RlCPFLDQ4IHGYfG%2BdCNRVI18rqQgtB5cC6GlYXAeMij7yHyfw6But6gXsUR%2FIAjqThx2FlMgExMmiK2uobtMdwatn8eD0O96YfxYWJBg9WvDCBYOEHFNKxHb0biXG9m9WLT%2FykzF%2FAmvxSg7eTctAPihLHmr5MTCD6xVPsjCHzIGuRNJppLOcrNM5sohv3YV8VM5mmPTMMzB4L0GOqUB5%2F2CcDY11elKVcimX%2FVddQ9kbJXGBjAwfzi4pKlTM4BcT3pVfBuC1%2B7TILY1Yd7543jT81NqFibtoXMSsp28rpZ%2B7WIKBGz9TPE7ml0Zi1xfevxUgZJB3Aoe%2BEXWEiOSk1C0hMkiKLIPdNKv4aV7PO9SasJhBVpJ5%2F2hJX7BZwmXKd7IWAlgQM6wMgR9%2FkakmoPMUGVO6rQYx6Ub6zaUQ0AQ8pcB&X-Amz-Signature=adcae7c48ba296fc5271467cbcf009515b8d7de70ff4c39379d65b3d2e794d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDXY7JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FPOTfqw1Gz8vyaGtcDkfhkOHere9Js%2FF7pXIWb9%2BR6AIgOGP52Lr%2FeYht6Zcy3SJ1Qd4xetUaQqNHXUjimYIwBo8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj4AEmze80bse%2BbfircAzwPBwZX6jCqwmZFnnMcGDknreqGBPXETEqIVsgvrYr8mF4BdRvfr%2BvD0jTjo1UMBuPykynhwGNHhftYuc6C3V6fWP8grCAVu4HKjwvTboZJX5p58NLZHrHGOF76iB0lJTA7B7lqGJgjGyCL%2B389NAnrZvq4DudDAQuysktGnEul4EhSwaKYM%2BOa9jVEXeQBXjSR%2FgKwuPUPTkWhaKDY32YB2LQsdmWwzzJuLLj2vDddwc6ZXZLTJ4MWZ6x867VRJJH1OApMba1o6oeeUnM4nM80BdwjoQ%2F4ku%2FIclHliQ%2Fmb9dyS7B6V4zOr8FNZmLBjD96F32LTtUlDx7dD5%2FM3Qg6mQVUvLuEnotYDEaD9bmX90peWFI6TjsAZOZvF3W1DJhSqUL6wmKtmhYuOoJh1hCoXzUZeNepx83DUKNP5p0pB4XcLgN0RlCPFLDQ4IHGYfG%2BdCNRVI18rqQgtB5cC6GlYXAeMij7yHyfw6But6gXsUR%2FIAjqThx2FlMgExMmiK2uobtMdwatn8eD0O96YfxYWJBg9WvDCBYOEHFNKxHb0biXG9m9WLT%2FykzF%2FAmvxSg7eTctAPihLHmr5MTCD6xVPsjCHzIGuRNJppLOcrNM5sohv3YV8VM5mmPTMMzB4L0GOqUB5%2F2CcDY11elKVcimX%2FVddQ9kbJXGBjAwfzi4pKlTM4BcT3pVfBuC1%2B7TILY1Yd7543jT81NqFibtoXMSsp28rpZ%2B7WIKBGz9TPE7ml0Zi1xfevxUgZJB3Aoe%2BEXWEiOSk1C0hMkiKLIPdNKv4aV7PO9SasJhBVpJ5%2F2hJX7BZwmXKd7IWAlgQM6wMgR9%2FkakmoPMUGVO6rQYx6Ub6zaUQ0AQ8pcB&X-Amz-Signature=2c55a8a337808ee58da977441341ddb353a21d3d0e556ae79eda9c5f8d792e17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636VOUJI4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFVn9fzYmkEhlLFEnyQGxMu1afy1xVrRtwUpIzYjWoXAiEApN%2FtXIjW9ds%2FcWRChd65CIpFZDleSYJpS3NsMYCs%2B%2BMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONVnVw0%2F2HX7P9k1SrcA8l2abixZP%2FEEjEIczsli2WOBtWQ3iW58nMSckwwAVDdrlo00oqTT9Fp5JL75j5Ww0sgIzpiV7kq5ag7gvq5KCj0LuqZ1GgVZFsJieeSCBknnDtCLVB9F7y15BlCkyKaYNOfBjypbvvTnN01jviOsgPSTyvsgq5vgJ%2BVnM4EFo9oyoDpUNmY4DQ8IWk3RNgtTCWARwL6mB6JiXlwWZjs2g3T6oOdKtBADkmnLipV53mwPAWRQ3a1pNtRh5fdTlkwyWzWuwas8vCE5qlUpn5iJFkrfohvlf64uXCR7d9ofwN4RKLFzTahTHIe1uQJOv%2BVHD7e4RIfuwikBoL8etbfjWxvGOSoTqFjInDrm1nx%2B8uv2QbVSC%2FJpUCKyBoP5p7kDWVTiOQJZOdW%2Fq815qQRyKh994QIO%2BeT0fdlpyRJ1tgoOler8pFCNZU4KriaGqEZ63%2Bg0fjt7QJ%2Fbn4vYqdnZFK8MMV0vMbo5QNHgUpljYiCX2%2F52Uzxk2Uw01maA6ZnhwciiUpCGRhroD5NW1bMoDlt7ESqGeSrCuT%2FyoQ8%2BbDdQmf3dwNq8LIDKR5615l8STqiX%2BLEV81W8An%2FeEwAA3E3vDtEdNgDWyl7enueTVpU1hjfSqW4ONFCmHV%2FMNrA4L0GOqUBLqgFzCPZdbckUt%2B7b1JqSsn3g9pfBlaSKfgb9EH6ciaT9XYoNzNiFn11PR9t%2BUCkjAWzFfjkyHxkZgT%2F7KwGc1RBN%2BvnaUYuxZI3nVIWYeESDlRInB8SROAlsINMhBaLIyf1bWyIfhraBXiqYrvIuDk6CbaLKJt0wyXdZ5xdmB6acTpvX624iR1KpW7Tj5d%2BKp9zZnWS8gqLUTOsHxgfJSj9TGG%2F&X-Amz-Signature=6a4faa24e0c30f7e9ea07bbc7df80422ad0489d53acaf6c007ad333e1c94b883&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4353EM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWOdQSDWrDaMhGKfs44mW0DBkabEZxoAJu288924CtwIgeKot0sHY6NsFwwlWtQdSrAiY%2Fzmr8WNVdROLHKszlRkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmD1GfP61KYjLtvKircA47PwqXWi71vrzdQRa9PKaeClYtyTE2KjeceUTgrRdU8PlY%2BJPM2tg1Df3pF2XluGk922U8paCaApatfQXUc9%2FTI2jjpWMHlJGg8ptz%2B6BwRyA%2BNL1DRU5zOCFyt4ZPepeGeZJTtb7vkIJxDV1UPn9%2BYByuUd%2FX2BROs53CE6ygzPBT33d4Q1VqE84cixGiLUHIBcQUMoZrI%2FCFWGOvWOYYoCPIFikDUNAJdNOSM7x63OlFsa1Lqj587L572EykDUtT2Dxe2Y2FU%2FuH5lm3f7LtO4suwXEGgT4h0xkF4RiAX86YHnw%2BRsizdRblIblOkxmgtLGxQ%2BL8TdB5j3wHZPZNPH0xrxLWQ6dj1x9q2J1vuC7dJuEmpOLVEHObM8iBNrm8yIw38GvV2F3Ecl%2BcgYLV1KQ4iUAfqyrgpGJgQ6EQS46cGH2nxGpC2yFNiyVCb7yZ88yZNetp%2BpetNFl2eRlR6wcSA4zPMo4hHn2NBvCwk48wmTW7%2B%2Bpt%2FYvKmxW8m9mcOZ4B6B2UV8l6Xg1thViuQ%2BzbB5mHfjAi8Ct5BgyjnOxkydVzuBGiuZrV46jh%2BF6wZqdOPvyqIIzx%2BrTfHSzyGmWsnVB3UtLceWQgp009teeDkmh9yRvIUf486MO%2FA4L0GOqUB5TuYRk%2FCJjmv27ExAPClO8jbngh9NZnsJf%2BennqZzYfsJdw349jFZNBSwyAv%2FNjfYuNE6hhXDyqJyRvRmyfGXRpbyuQ9TQ%2FYg5fcdetufaniivnMHeq%2BCqDGVunVlH5M446VI92TWiYIKmbbR9VqoNsFv54ed8xILTQXq%2BD23pDgqvYLOvG%2Ba5uho7m68yj5tJCu7YAEmbHHYnS9RU6Lz3U30HFx&X-Amz-Signature=f07f21a2562ff59c2a169e2747e01bd5eae409320b9186d6ea85f110287d6ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDXY7JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FPOTfqw1Gz8vyaGtcDkfhkOHere9Js%2FF7pXIWb9%2BR6AIgOGP52Lr%2FeYht6Zcy3SJ1Qd4xetUaQqNHXUjimYIwBo8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj4AEmze80bse%2BbfircAzwPBwZX6jCqwmZFnnMcGDknreqGBPXETEqIVsgvrYr8mF4BdRvfr%2BvD0jTjo1UMBuPykynhwGNHhftYuc6C3V6fWP8grCAVu4HKjwvTboZJX5p58NLZHrHGOF76iB0lJTA7B7lqGJgjGyCL%2B389NAnrZvq4DudDAQuysktGnEul4EhSwaKYM%2BOa9jVEXeQBXjSR%2FgKwuPUPTkWhaKDY32YB2LQsdmWwzzJuLLj2vDddwc6ZXZLTJ4MWZ6x867VRJJH1OApMba1o6oeeUnM4nM80BdwjoQ%2F4ku%2FIclHliQ%2Fmb9dyS7B6V4zOr8FNZmLBjD96F32LTtUlDx7dD5%2FM3Qg6mQVUvLuEnotYDEaD9bmX90peWFI6TjsAZOZvF3W1DJhSqUL6wmKtmhYuOoJh1hCoXzUZeNepx83DUKNP5p0pB4XcLgN0RlCPFLDQ4IHGYfG%2BdCNRVI18rqQgtB5cC6GlYXAeMij7yHyfw6But6gXsUR%2FIAjqThx2FlMgExMmiK2uobtMdwatn8eD0O96YfxYWJBg9WvDCBYOEHFNKxHb0biXG9m9WLT%2FykzF%2FAmvxSg7eTctAPihLHmr5MTCD6xVPsjCHzIGuRNJppLOcrNM5sohv3YV8VM5mmPTMMzB4L0GOqUB5%2F2CcDY11elKVcimX%2FVddQ9kbJXGBjAwfzi4pKlTM4BcT3pVfBuC1%2B7TILY1Yd7543jT81NqFibtoXMSsp28rpZ%2B7WIKBGz9TPE7ml0Zi1xfevxUgZJB3Aoe%2BEXWEiOSk1C0hMkiKLIPdNKv4aV7PO9SasJhBVpJ5%2F2hJX7BZwmXKd7IWAlgQM6wMgR9%2FkakmoPMUGVO6rQYx6Ub6zaUQ0AQ8pcB&X-Amz-Signature=9993147c6360b675a468e6ff873f801de6ce7a03d9e482fe497ff9a5e7686d93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
