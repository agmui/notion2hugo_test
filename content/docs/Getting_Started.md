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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=21f614aa8a9598694f473a3181ea488c91fda40e528124e05006f2f8214036c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=ec7f13b179db752cd99b7605c72888a2c4b975cc705635be3d46220a703738db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=497c56fa68ac682feae605e66915903453f1e819c9ad0d28cdacefffaf95d601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAKDENS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9ELzkfT3u7h5NNdqas3sMF3cL2bve4X8KDj3jx%2FbGAIhAL%2FqglOSjaEGACxyrpwIJuUiD6CKRHlQN3Xnm5aCRdn7KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGzPjkemb2YBQZim8q3AOg6WpZq9rmT5Iy5lCVXDJIpOoiiwjj5rUTIp1vDYRGlsOp%2Bm0LBqeTeNIGbJZLPi4j3Ww3wNJrY93xvIutHOtTeBFfEqTMKAtN6KAjJaaOd5NFXyNndM%2FKpUylLWUoAtkM0wOQM3RuQFlg%2FJ5cl674FdVYjHC2%2Bvupwq7Cbgmcvps51DxwsI3cZPoAhi0nklDBlu8Ti941efbRAEqHrgY%2FcSXje4EaNNUsJrdwzPbJc3PbMK4wssMTHSyW78HRXXLW44K6aXR0dzLxNPAZmmsjLV5a8xrunvCqgwyPgVoq2qUu%2Bfj3j5rIqMIA98A6SMr49p6cK63C9Tva2AMKdfOnD8EDMXchMRVpSaJGMfS8v3uytpmjiAm7GRitrUQVYsTSdzKvdZ6TQOtiUY3pqbDxFQjd%2FnuB0dbTlV39wu7OYShzbQCFrqUOwlSscD%2BdWtAP%2F1DeeE9SV23x2N92ayaI1FsR0VvBPKI%2FgMatgAJEQJEOnRUJDHZNl9DkWiMEx6rzzo9C9xtSGz8f%2BbrcZL5RAH%2BzCY7aBDMmcbbJdUqdUNv7TocAsg8r3klU0MPbHcJaTUsrS1mo%2B%2BSuwDJsdOSPbUBui0A%2FBJwJQsaUXMhJBmIVztlRdcKNTWSGoTDUqL%2FDBjqkAQZ3eYJDyBdPsBGx%2FNDk32RgiJOqU3n9nPTg8hZycuFpJ%2B5G5mfc3LO7gOiAkZJPRbnN%2FPNdElE5Q9M9deH1VHaLdM04pXlHqUwvgMwXiRo%2FsmHcPs2ifIZgL8n2vBYo9Uc8KoQhxx5rbYK0MgDTgQCZ2U%2FRMQltLtScW1xukiZojsTPYKSoEM2LIkCK005RUrrls4Hp9Hr%2Fu735H32OQQ0e1M9m&X-Amz-Signature=3d98be53e0c2b29adb78fba0f52a33d2c91a196e0d3ee96a52b1c6b83dbebf60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKHR72B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgRMtuleUtUlYGRu7NNG%2FpQfwl36NLuYog7A3DAsxILAiBeKYX48rohz3e8NaUdIGVdySXmEx5SWVcmdDXSsT83qyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH5o0ttgWtcJKOdStKtwDHpH2kaEguX9aqM2vY2hj9oANHkyYMmlz9aABvrufuTt%2FcuDmuYoSa%2Frlff01v5KtsSPOtLS%2FuvJ07mT20MqO3LUYQSqtuS9bJl4ncYX1hFct4l%2BFw0%2FVghRM8%2F9AkYOBMAQrHdO7ZnxsT03RRnfpQUXQG0TRSOFlNoOUJAEqICF6rZGrBMLuN%2FJenKK5DKIRNXz%2FKJ0fEoAhMg4iwlR6018%2BTDlP3S1QxFdi75586EShdsLtIO%2B1dZmloRtxh7SuNPbO8ShtaKlBmnlIAWiiWjP21YyGhWynQgtL1CWWrawVvCX54G8F6jWTomonZ%2FLoDsk1KMaATIoeATFKzoq%2Fdy5RxwELR24yqOqLGd%2F9%2BCyq%2FjxKEuVulFTg7B2oip7cuV6CiMbl8iCzIhCI%2BaqeQXGAS8BfOof0i4SiG4mcIYU6Keq46rcniR7PXqtUUVSGdO17E0LB3Rp2Z9x0hBgc0wrx6zLcTwWritg0hpk3%2BhLNG%2F1HzgVGxyspzBJAjV3RxdFBpO%2BDilrLeGBZ%2BpQbG%2F9kw6zKG0RDDGSmvorNGO%2BP3kK1r%2FLdY0u81ckE%2BHP7w7eKb6zHSdXzeg1fV3eWjFu4ShEcuFJKOWG54tm2PHSC5inIp%2Bhpnoyueb4w3qi%2FwwY6pgHQL54%2F4j7eYCO0wx%2BfqNCBsqkLVpOEfMjLbds%2BmkNdIn3K6o%2BHqoENt14b5pg37xU6k0KzCCMEPYRuv5FXU%2Bo7go6ORF1G7iyJ35k1bt8b3qqrsJsl3iAR62QHS2fOGM5OQWPDypGAojdaW1NJuSQl0T4qIhy2PSMEIGT%2Bl0a97%2Bf%2BDAxry42kWPISCGsmMFXl2zQBG7bYKxoDewH6T1Dd8ww7hDou&X-Amz-Signature=66b288812f580a9625c716dffe34a8ec1bd57b3a60abeb71191c77a164219912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=579c6205b841bea7eb5cf44cf2935973164f3cf055ddaacc8205d4a5baec479a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
