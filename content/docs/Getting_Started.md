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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYTMJYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHD13xam%2BEF3%2BqVuaXdh6IpazgXQRrvdDYG1MQlgyCGNAiAusmU%2FkQn2pKbL6NXTrwyeYIEAV%2FpDnSRLAu9iDthT3CqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFPaUcFg2Le2laK1KtwDhRNXOQFoTgHJt%2BFN5wFoDupGyv7Whr6FxNFlTwDZmenKpxxSdwrcWdBZnNoEIMevsePLAiX%2BubYzgHZhtHWVTfMLQvg%2FDhxa%2BsFMeYxnaMB%2BssVgf0B4rfCZnEruNj6LUSz7Z4Qe%2FjtH0gbH7egnK8EN6gAj3nVGMcWospXzE79Bneww01HhGwMfPsju%2FQ7AY0AD6iXS4049XUQ4gsgYRswqLzg%2FYAB4I5rkIChkrnjxmy3mjEqxcc7DBv6numB9Arw7iikphKR2AFsrk0xSVb3GfO2oEE3EPJ0Fd4XUP3h9pR9i2%2BQhLXT2TdUrpN8EXJiUrMmxBUftX%2F0CSEvYIILCSs%2BCEr3zQbbS9NfboAwWIOhj%2FyTcTuj%2BNoe7Z%2F4Xyr2LzAvW5%2Bjp2Q6DoBp3JJopzU4kJb2MFOeH8t%2BTeWGNbWgl%2FdLNM6%2B8FN9T80PrYuqpteJwaC1gwKy%2BEb3g5jF84aHXNcjwWQb8DacSrRjYi7pvBCo4VIed5LzrkdfWF1tEO8CYzAy65LUZzLiY%2FdqqdVjCRhECtDE6pWfRI07F%2BnByqmQke2uN5hqSiZ8Zr15HG6iLQO%2BUSijEqocz24Z6T5QNNhywEW2dlZ9k8f0Jxxil9J7%2BQL0Kloswq%2FWNwQY6pgFgXrmNYNgWS25Tm56MeliVL1lZq07QL7tD%2FOYcdtVXx4qhKkdOYtRLWudOpbguAUZc3Cwo4%2FE6RYwMIF7i%2BSVPyjI%2F8KMpJ4bWtsY9owFtcFtk0W5wfJk%2BjVmSOHoyV4meLdTDO3f5byxMtWiFLGmE%2BFynTfKzvp%2BHIdz22DRWf09xOdPF34UhPG%2FGM%2F8D%2BksurjzkZRT%2BpRwhFpngXdUMtao5L30l&X-Amz-Signature=7f985b52a42737c240185ada8a66a387426ef982ed76456d1f53e4a00df9f0de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYTMJYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHD13xam%2BEF3%2BqVuaXdh6IpazgXQRrvdDYG1MQlgyCGNAiAusmU%2FkQn2pKbL6NXTrwyeYIEAV%2FpDnSRLAu9iDthT3CqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFPaUcFg2Le2laK1KtwDhRNXOQFoTgHJt%2BFN5wFoDupGyv7Whr6FxNFlTwDZmenKpxxSdwrcWdBZnNoEIMevsePLAiX%2BubYzgHZhtHWVTfMLQvg%2FDhxa%2BsFMeYxnaMB%2BssVgf0B4rfCZnEruNj6LUSz7Z4Qe%2FjtH0gbH7egnK8EN6gAj3nVGMcWospXzE79Bneww01HhGwMfPsju%2FQ7AY0AD6iXS4049XUQ4gsgYRswqLzg%2FYAB4I5rkIChkrnjxmy3mjEqxcc7DBv6numB9Arw7iikphKR2AFsrk0xSVb3GfO2oEE3EPJ0Fd4XUP3h9pR9i2%2BQhLXT2TdUrpN8EXJiUrMmxBUftX%2F0CSEvYIILCSs%2BCEr3zQbbS9NfboAwWIOhj%2FyTcTuj%2BNoe7Z%2F4Xyr2LzAvW5%2Bjp2Q6DoBp3JJopzU4kJb2MFOeH8t%2BTeWGNbWgl%2FdLNM6%2B8FN9T80PrYuqpteJwaC1gwKy%2BEb3g5jF84aHXNcjwWQb8DacSrRjYi7pvBCo4VIed5LzrkdfWF1tEO8CYzAy65LUZzLiY%2FdqqdVjCRhECtDE6pWfRI07F%2BnByqmQke2uN5hqSiZ8Zr15HG6iLQO%2BUSijEqocz24Z6T5QNNhywEW2dlZ9k8f0Jxxil9J7%2BQL0Kloswq%2FWNwQY6pgFgXrmNYNgWS25Tm56MeliVL1lZq07QL7tD%2FOYcdtVXx4qhKkdOYtRLWudOpbguAUZc3Cwo4%2FE6RYwMIF7i%2BSVPyjI%2F8KMpJ4bWtsY9owFtcFtk0W5wfJk%2BjVmSOHoyV4meLdTDO3f5byxMtWiFLGmE%2BFynTfKzvp%2BHIdz22DRWf09xOdPF34UhPG%2FGM%2F8D%2BksurjzkZRT%2BpRwhFpngXdUMtao5L30l&X-Amz-Signature=ff38a78b24a02f86a1820cdb0e0858803d98022c0944e8d06b946997ba735e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYTMJYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHD13xam%2BEF3%2BqVuaXdh6IpazgXQRrvdDYG1MQlgyCGNAiAusmU%2FkQn2pKbL6NXTrwyeYIEAV%2FpDnSRLAu9iDthT3CqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFPaUcFg2Le2laK1KtwDhRNXOQFoTgHJt%2BFN5wFoDupGyv7Whr6FxNFlTwDZmenKpxxSdwrcWdBZnNoEIMevsePLAiX%2BubYzgHZhtHWVTfMLQvg%2FDhxa%2BsFMeYxnaMB%2BssVgf0B4rfCZnEruNj6LUSz7Z4Qe%2FjtH0gbH7egnK8EN6gAj3nVGMcWospXzE79Bneww01HhGwMfPsju%2FQ7AY0AD6iXS4049XUQ4gsgYRswqLzg%2FYAB4I5rkIChkrnjxmy3mjEqxcc7DBv6numB9Arw7iikphKR2AFsrk0xSVb3GfO2oEE3EPJ0Fd4XUP3h9pR9i2%2BQhLXT2TdUrpN8EXJiUrMmxBUftX%2F0CSEvYIILCSs%2BCEr3zQbbS9NfboAwWIOhj%2FyTcTuj%2BNoe7Z%2F4Xyr2LzAvW5%2Bjp2Q6DoBp3JJopzU4kJb2MFOeH8t%2BTeWGNbWgl%2FdLNM6%2B8FN9T80PrYuqpteJwaC1gwKy%2BEb3g5jF84aHXNcjwWQb8DacSrRjYi7pvBCo4VIed5LzrkdfWF1tEO8CYzAy65LUZzLiY%2FdqqdVjCRhECtDE6pWfRI07F%2BnByqmQke2uN5hqSiZ8Zr15HG6iLQO%2BUSijEqocz24Z6T5QNNhywEW2dlZ9k8f0Jxxil9J7%2BQL0Kloswq%2FWNwQY6pgFgXrmNYNgWS25Tm56MeliVL1lZq07QL7tD%2FOYcdtVXx4qhKkdOYtRLWudOpbguAUZc3Cwo4%2FE6RYwMIF7i%2BSVPyjI%2F8KMpJ4bWtsY9owFtcFtk0W5wfJk%2BjVmSOHoyV4meLdTDO3f5byxMtWiFLGmE%2BFynTfKzvp%2BHIdz22DRWf09xOdPF34UhPG%2FGM%2F8D%2BksurjzkZRT%2BpRwhFpngXdUMtao5L30l&X-Amz-Signature=ca5c14fcb571d43468482e49626f3dab482a2226e27d36f22be9328abf5698f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQPCAXZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBnhKa7rnGHmxLGh9Srb5T%2Fm6nag8Kw8ZCxixTFil9CjAiEA%2Bhk7GLOVbGsSwqmruWY4%2BaAqxhU%2Bbe582PET4%2BD59rYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvSTd320TUl%2BMMcWyrcA55uxGcgqCCw6HC26SsRHctrxsU62MwffiwVj2WeePr7lcadWmpxzLrAP7dXmMCZZYsSSR7oC1N8gQV2LP7OKgBVG0QEWw8yXgWf0Nl2jp00VGTBhUeLyU6%2B%2BeuOD6tmo8zDOE%2F04jAz9Az8NJnmO90easY7MlVgHMSQo5hnX7%2Bd4Z1ocHtZEifQy0CYBo0X%2FXIvgy22txRaMJ4MFwLVugg9aqNdXWu3HzIfFw9rXTwzheyX5On1qCqFGuYLAr4GXXcDW9d08%2FYpEKgOsXBRrzVLdK4nKGx6HDMNXlE%2B7PRH3GR6PXwGNBiMc0U617%2BDJIYJ7pARkpYdkU%2FkEQUh73FBAI76YqpKjdVoEBPKo8V%2BDF4B9nIrsILB3oX46YzNeCJW9a8b7H8h3lGJ6cFbyl%2Ba9%2BsLndx5XZIqWMCayy6wmveMHqT3kZTVl7L36FVmHVnVar8UfZD0%2BRrvqI0jjMhllbfTpOe2uj1zjgfPvztHlSJ%2BxCtXRQCuo%2FAQoT8%2FkTo7GtBJK8rItZ6xfMNufJwnqBMTdeC7hWKe%2BRnvkjQeGqKVubkl3f5RsC9tmf9sSnu6GdsW%2BEMobxe%2FDBDTtbN%2B8JL5SKgJ2FlNFSIeRJjyPI3bTjv2mUxlsCMXMNX0jcEGOqUBTK8lSySRKnGV4I4bxmkjBJ4U14F2sL%2FxMnveHVWH2Se7qiHar9uM9YixCL2O3MC7NfKUcr4fD5Uo6rDAGhXtnY5%2Fit64Ncr6RMq4wtCtLr3z9kl6EQNV5bZ4rKK5%2Bk5sHz96mv1fcrXr8so9jDzjTIQcvaa83GvxSH0q6jdBpAe0oNIwEuID2ISxHH8yFwkZ3e%2FNwEXuhruIEhtJQLO6m1iUDvl%2F&X-Amz-Signature=85f99dffc69a11e947059506d5b5390e345815496769dbbe9a3779be68e74c31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664US7RXCY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIE4FIkoNSYLeVgLHcuIBA9pCXUkz1pOOnLWmHqa2FPjcAiBigP4mkJb69DO4Tw8GP7JBqzAAXWb7znj2lZO7ipp1wSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLr5C0gwywrRn%2BU0PKtwD26QiLRCqbETfy7H397FtOYqOGXZpWflp7vR36C6zCSJzO1Eag4DYQC%2FPscUCu8Sind0SgMXMtV3aOsQ0J42xA48aHXBccGN4hOZjRENjEipqx8KGDuDLQzXIbL3wK3vebXmBVoG3vGe3IMS7CmbzrE5j5uxUPCRlDblTMb84Ni6rcCh%2BMvvZejbKwZhqopGAGbMO56djXmDsIdSwLtWsASdUbH2p6hEiBildF%2FFs6VwCKRyrH3KL8LqWSx7OgRo8U%2FsHsOMnvPBJmUK7zrdRerDpgmPX6Gl9pXSNug4aCzTU4Iq8%2FiE%2FWLMKjW%2BmXkgroVjFWqqwWh9bPLJXwaOLTMDQe7u8auRdUzuuBsxAbNWYyO9LRJuzicTEK%2FcZsDYekpbM5K0XgVhJvJ1ezyK%2BPxA3%2Fe16Kf5DcURqrRbW2MPQarzrekw3RglpvWLxgwuyhSHq%2BgvFn0sBdoZ8o8JQeh%2BVkEw9kc07PDTVrg24%2B2gY5%2BO7SUrWsNLIfN2NIjUis6tuGuqDgSL0nkhNFCZKZ%2FY5UDwami9gnIuz6jyd0UjyV%2FI0FVZ8vFaoYC%2BbHGlAfeqRDUWFSFrJJ0X%2BYR3nmUlYP%2FOP9FLrv259gkjm1OmZxdaGjkJq0Kqwn64wu%2FSNwQY6pgG1ypmxzmEhQCT85oG1mKhUgiVa3v1YZQj80lUxNe7lDdMji2xqP6fUQF1rZnbPmB8w4C4FzyhPbYTket9SFvpoOIO9%2FkiAxbbw53G37aC4PEWVj8evL8hHMbTtfBv3SV2dSGnslYY3GyovjGT%2FZxLPGzNVf7XKpgLje%2BJdufJ5sSaTK%2FWTd2llfPfQ6moRYwS5XdLq%2B%2FgjW0cQebGHp1cs8oYU3q0b&X-Amz-Signature=47f9876e92fc9ccab29207ccfa41adea5d885069c1ea88212d034aa3f333790b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYTMJYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHD13xam%2BEF3%2BqVuaXdh6IpazgXQRrvdDYG1MQlgyCGNAiAusmU%2FkQn2pKbL6NXTrwyeYIEAV%2FpDnSRLAu9iDthT3CqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFPaUcFg2Le2laK1KtwDhRNXOQFoTgHJt%2BFN5wFoDupGyv7Whr6FxNFlTwDZmenKpxxSdwrcWdBZnNoEIMevsePLAiX%2BubYzgHZhtHWVTfMLQvg%2FDhxa%2BsFMeYxnaMB%2BssVgf0B4rfCZnEruNj6LUSz7Z4Qe%2FjtH0gbH7egnK8EN6gAj3nVGMcWospXzE79Bneww01HhGwMfPsju%2FQ7AY0AD6iXS4049XUQ4gsgYRswqLzg%2FYAB4I5rkIChkrnjxmy3mjEqxcc7DBv6numB9Arw7iikphKR2AFsrk0xSVb3GfO2oEE3EPJ0Fd4XUP3h9pR9i2%2BQhLXT2TdUrpN8EXJiUrMmxBUftX%2F0CSEvYIILCSs%2BCEr3zQbbS9NfboAwWIOhj%2FyTcTuj%2BNoe7Z%2F4Xyr2LzAvW5%2Bjp2Q6DoBp3JJopzU4kJb2MFOeH8t%2BTeWGNbWgl%2FdLNM6%2B8FN9T80PrYuqpteJwaC1gwKy%2BEb3g5jF84aHXNcjwWQb8DacSrRjYi7pvBCo4VIed5LzrkdfWF1tEO8CYzAy65LUZzLiY%2FdqqdVjCRhECtDE6pWfRI07F%2BnByqmQke2uN5hqSiZ8Zr15HG6iLQO%2BUSijEqocz24Z6T5QNNhywEW2dlZ9k8f0Jxxil9J7%2BQL0Kloswq%2FWNwQY6pgFgXrmNYNgWS25Tm56MeliVL1lZq07QL7tD%2FOYcdtVXx4qhKkdOYtRLWudOpbguAUZc3Cwo4%2FE6RYwMIF7i%2BSVPyjI%2F8KMpJ4bWtsY9owFtcFtk0W5wfJk%2BjVmSOHoyV4meLdTDO3f5byxMtWiFLGmE%2BFynTfKzvp%2BHIdz22DRWf09xOdPF34UhPG%2FGM%2F8D%2BksurjzkZRT%2BpRwhFpngXdUMtao5L30l&X-Amz-Signature=13d0813b0eedf5e8d531b61e057c96a07cbd4ae8820a352a2d0f20255725ade2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
