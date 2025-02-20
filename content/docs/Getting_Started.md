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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVHSBH4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFge2o4j9p%2FoHGfGHEbBrlxtWD%2B9R8t7Jr7O7qDAqH0AiBdg2PceAihPH21dZQoAzghXKwhRdopwptJ0FWulrKz9SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFbTrJIn4sqsV9jgKtwDDbC92mIwF9zw9XYvjOy9r4ZEfEz7BXgqjAnItVBdGgPHOgR54I4G0SGmjTeF3D%2B3%2F5VCq9K%2FNvTlrmyNhNhTsZXuTduAaoEpbA0KUhG027stgkJAbE3NtkKKcHDNCF3v0qqL%2BFEfTwc7rsswyxcFRLtp8CGz3ATeADldenND75PMHPOqBEU58m%2Fyk0wUN8BRE99NOWJg%2B5o7RmB0Wf5aHTpTCJnE97WDz8sZcNgYrwHpHhu6LnnV14JaageqqOy%2FbFhDN2gNXvSNSCyuK7dESb7gcYg4KxmfG%2Bie%2Fq%2FqBrxVqQ63ycKQ2sCrmkYKXLaGs6GjR2Ee7Bum1XBGWx%2F3k9EqcnH1knp297aLlPdTE%2BhgYOwWpJAl7KNm%2BblvngmI54ZKduajL5itmFn96HiBSB6eWVQBPwe6JriAjnpkPcGYhF5DGUVq4xEgLwRSfuAMLtzUkIv5cSEd4pvv%2F%2B9JzSPxbaEQAm0D7kpToJd8xYTHOTEPSHLZeq30I8uz2efifn1MhxWGPG64pJf2fQTcplXC%2B1LYE56nuwbnwGIKU3LPX8YJ4MNqJpMXJBwkd4RAcmFeMuYslYtTuDFaDPBiU3oKBfKk8CDcd0M4yDqwVHxm4dAG9qukwZjugusw1sPavQY6pgFkd9F6VCHvwhalpddoTA5VU3Iq72IX5cqyWJ7%2FUdYQIABbVU7wss0pdn8W6TIms8IiwG25FZ7HA7FmEeoF3jOVlDgbV1t5TOgAFgoOR6onkMltTG3OgIE294ZAV2x7BS5RZxOY%2FxjCn43C8QAzmtEYOif7L3IhGluJTOOighW274Yf4lceDdzO9cdHk6EavtBCvM5rMv5vxh0FJ8Vf%2BEsz9agcGHOK&X-Amz-Signature=958b200b2efeae4d4ea50a5fbc453889b12523a35ad7c11009d0f99f0c484710&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVHSBH4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFge2o4j9p%2FoHGfGHEbBrlxtWD%2B9R8t7Jr7O7qDAqH0AiBdg2PceAihPH21dZQoAzghXKwhRdopwptJ0FWulrKz9SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFbTrJIn4sqsV9jgKtwDDbC92mIwF9zw9XYvjOy9r4ZEfEz7BXgqjAnItVBdGgPHOgR54I4G0SGmjTeF3D%2B3%2F5VCq9K%2FNvTlrmyNhNhTsZXuTduAaoEpbA0KUhG027stgkJAbE3NtkKKcHDNCF3v0qqL%2BFEfTwc7rsswyxcFRLtp8CGz3ATeADldenND75PMHPOqBEU58m%2Fyk0wUN8BRE99NOWJg%2B5o7RmB0Wf5aHTpTCJnE97WDz8sZcNgYrwHpHhu6LnnV14JaageqqOy%2FbFhDN2gNXvSNSCyuK7dESb7gcYg4KxmfG%2Bie%2Fq%2FqBrxVqQ63ycKQ2sCrmkYKXLaGs6GjR2Ee7Bum1XBGWx%2F3k9EqcnH1knp297aLlPdTE%2BhgYOwWpJAl7KNm%2BblvngmI54ZKduajL5itmFn96HiBSB6eWVQBPwe6JriAjnpkPcGYhF5DGUVq4xEgLwRSfuAMLtzUkIv5cSEd4pvv%2F%2B9JzSPxbaEQAm0D7kpToJd8xYTHOTEPSHLZeq30I8uz2efifn1MhxWGPG64pJf2fQTcplXC%2B1LYE56nuwbnwGIKU3LPX8YJ4MNqJpMXJBwkd4RAcmFeMuYslYtTuDFaDPBiU3oKBfKk8CDcd0M4yDqwVHxm4dAG9qukwZjugusw1sPavQY6pgFkd9F6VCHvwhalpddoTA5VU3Iq72IX5cqyWJ7%2FUdYQIABbVU7wss0pdn8W6TIms8IiwG25FZ7HA7FmEeoF3jOVlDgbV1t5TOgAFgoOR6onkMltTG3OgIE294ZAV2x7BS5RZxOY%2FxjCn43C8QAzmtEYOif7L3IhGluJTOOighW274Yf4lceDdzO9cdHk6EavtBCvM5rMv5vxh0FJ8Vf%2BEsz9agcGHOK&X-Amz-Signature=9b3a3cb0d727e8637c37a50afa8cf3974ab5ec95d9f28df346f66188e876be6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZTAI2O%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlUgiq4D6gTNFNuj3fATMNuS4xDJDB3Q1kCKbYK5wiWAIgZBXrhSBv0Ba6PA8i7wASB1ntsLM1D96TZk%2BZuCX1YB8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfFAIrWSanyPBZ1circA8%2FfRwQ36rpC0d9ApMUTxPIpPGHyKlERp71V7abG6P2Zc%2FaH8fcyimYVKXHjUM%2BqfSUwNDuDsn6Urg7diqYoWJZQ8KN5AgDC5dPr7TdR7JK3DiuhPt7JLSAqqjiQzuHOq5G7aAZ2j81pW6Lm%2BgXfatKUzNS%2Fvn3pn7JDs8YBb7soLxLc2XaSwmd53BZHaGwePTDsouQGRZwLWwwYQmsHuwZNYcUEjHqn3jSN2%2Bz7%2BCQzbvVjz2kXsZG1MwIkHLn5bdB0AUilQNq1OllH3rVBdo93%2FRGB10NAApAOzl11FPDRCMkhATC01IpDBCsvqOBG1pvZiXNKs5J20F72abHLjsM7ORqrSeIPU0fpSprtraVqnFeVcSNDtNRqNU%2BJssyKb%2FxvIWQyfmN%2FJ%2BhPBPSqt8fqUUxlsU8BFttEtdngDetkuiKM%2BMVIgX%2BHK5BHBqAUjHax23iTr4uw%2FEaA8cpG2Xx009pBAdsFxC%2BFC80k3Usb7BCKQCRz10f%2BcWJiTLKY9%2B2jZG0EmJ7zIuH6R%2Bk0VimjQvEqsm0VxK4yvX56lUq6zPMiCAy0psH2LEQGN8n7Fynz878B%2FrQWq8%2FWUrChLJXURz7Upkwl1owJ0SNNqF%2BE2DI6l2SU9R8OgcpPMK7D2r0GOqUBiXRk6JdoK%2F91DTBDl61pWS2RlOJjFfjHuQ6MaQEnzAuje0wIljmhWWxAXMA5iAYaNRutT72LV7COV8XQ%2BUo2rodBDpfR4luv0fknpsVFgANVIauqnjThqmlXZYexdLZKtX1238H6suL2xBmhACqLPHz3sjtKd0hZdS1hpyC0z1NtskqpnxB8wREjAgn8YG%2B2DQ4%2Fg%2F7k34%2B298Jd0fTMg%2B8OuuVZ&X-Amz-Signature=5e2cd65a1e0dd2d03c57096ca7504ac739ad41caf14f03fd909e7f33fea3026c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSCWH75%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpKaDvhZPA0t%2Fe6bIeICFLQQctCSI6eNT5G4SRHtfXMAiEA9IO7FoR7BbgYs8EoXwCIlWu4pf222i%2Fe778K2DlONg4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZGgsu1u%2FdZRAuTQCrcA52HyILZmpwM25EDtNeUFjr2nqTHRFouRI0x3sVfvuQ3vEjoU%2F3oIB5HJbHub%2FQz5PvLoK6qkUZx7PUsApKzq7piI7DtalNfiVMQoF0PvlpzSQUtnubAtZlcxEq9NxaVFXkpixzacee3lKTqGKUVjuUcbclDwU6DIuNVVL3sz1dtpj08XZrRyeU%2FLf1jAPe6JuZ%2BIi5ZNgZkzOShCfdS%2FH%2B1e9D0RmT027%2Fjft%2FXqYm8BqbMY7GXOtx61YMnglz7B7kiR2s15EfwwcEW0aNdgj5OY2JNoLxaMj9BGozFdJBtCkwnHG63HelPeUrU4q7I7XJZREynqkKyFErObydAJi4S3%2BEkA7voBgB3fQE1%2Bsl%2F7lfy0oD9KxVwseTVeAJWuEeKmPeZdIuB%2BAwJjfldulsJpGdtcs%2FOE6cGcfBq4zqc6nhre4swJYYzRJCiiPE30t53vHjFElED%2F%2FESUa2N%2B5iDok%2F7QSX7Ojf23njjWfoAYN11cu05qIq1oPNq5n7AFdFzeFdYL7l9K1nUIozF9aesHQogbY0%2BOdmDx3GNbNQv%2Bj9EH8eJPkFamNmGnahiL93hZ9WmkBXWejO63GJynMbVSji4YpKkAzGOTD81jUqQm%2FftfTqAEt9uQ4N3MNzE2r0GOqUB44ISmkq3L%2BfZ8qDBjho138DRiSMKI6Pdlu2Td64KdYuwnjmQyROCrL9LW4XoBws7xyg%2BTqg77lgc5ETXVrnzm7mqHqZA8HTnQkjbLyGpTnDszqzm6JG4dKDEHdTfeni4lJlL5UIwirrZ%2B%2BNanmQ5vaDKdgtAbLBAV5e1LY7hCxzkbHsCX7XqsjFc10o%2BCXQaExDbUT5fbLJ11BbQ7aq5CTg6%2BL%2BV&X-Amz-Signature=206d8856ef129947c1c23894dc51e13957b4d0cdb0a773c1a84939b0c8a16ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVHSBH4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFge2o4j9p%2FoHGfGHEbBrlxtWD%2B9R8t7Jr7O7qDAqH0AiBdg2PceAihPH21dZQoAzghXKwhRdopwptJ0FWulrKz9SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFbTrJIn4sqsV9jgKtwDDbC92mIwF9zw9XYvjOy9r4ZEfEz7BXgqjAnItVBdGgPHOgR54I4G0SGmjTeF3D%2B3%2F5VCq9K%2FNvTlrmyNhNhTsZXuTduAaoEpbA0KUhG027stgkJAbE3NtkKKcHDNCF3v0qqL%2BFEfTwc7rsswyxcFRLtp8CGz3ATeADldenND75PMHPOqBEU58m%2Fyk0wUN8BRE99NOWJg%2B5o7RmB0Wf5aHTpTCJnE97WDz8sZcNgYrwHpHhu6LnnV14JaageqqOy%2FbFhDN2gNXvSNSCyuK7dESb7gcYg4KxmfG%2Bie%2Fq%2FqBrxVqQ63ycKQ2sCrmkYKXLaGs6GjR2Ee7Bum1XBGWx%2F3k9EqcnH1knp297aLlPdTE%2BhgYOwWpJAl7KNm%2BblvngmI54ZKduajL5itmFn96HiBSB6eWVQBPwe6JriAjnpkPcGYhF5DGUVq4xEgLwRSfuAMLtzUkIv5cSEd4pvv%2F%2B9JzSPxbaEQAm0D7kpToJd8xYTHOTEPSHLZeq30I8uz2efifn1MhxWGPG64pJf2fQTcplXC%2B1LYE56nuwbnwGIKU3LPX8YJ4MNqJpMXJBwkd4RAcmFeMuYslYtTuDFaDPBiU3oKBfKk8CDcd0M4yDqwVHxm4dAG9qukwZjugusw1sPavQY6pgFkd9F6VCHvwhalpddoTA5VU3Iq72IX5cqyWJ7%2FUdYQIABbVU7wss0pdn8W6TIms8IiwG25FZ7HA7FmEeoF3jOVlDgbV1t5TOgAFgoOR6onkMltTG3OgIE294ZAV2x7BS5RZxOY%2FxjCn43C8QAzmtEYOif7L3IhGluJTOOighW274Yf4lceDdzO9cdHk6EavtBCvM5rMv5vxh0FJ8Vf%2BEsz9agcGHOK&X-Amz-Signature=159e7aa36bc37acf0e9a1d650db49c76f65263fb16d753a6e9f07c92cde712cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
