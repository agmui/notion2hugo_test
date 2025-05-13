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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFINPH7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCfH7RtQk8oJ%2FdrEP0L8gX%2FiirB%2B2CvB%2F%2BX2NFpen6sSgIgT6CiaxGJUI48EHWctkpwVkGxha%2FPwEzKwOxk1nBz5JwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxN44Zv82yXjrEPircA8Guau36bPPnVigJfCZ9OmZxFZCEz1wgQgm4Om95R5tPcs7t0HP5jlIWyoidMbk61x6fD2pz0%2BacC1pKjPK%2FaQHLshD5UZYsj9uJJzKFBQWZUYH0nJzxn493ZL5cFfRR3PIvsDnu9SR%2FsADKTtMg8ygy21uTakrJMjCD4bS%2BqoUgXRDHA6Div6GsY28JY85CuTumKtZgKkTMn0TE%2Bm2hqljCCzxU4d43Gy6QLbyAnv%2B3ti%2FjooKLwSyw3opPMU0dN2zWJwMRHRYgrtz4m8u6RRoBDiRDQIs%2BRe6KTYdCAz0QcPuJQQLaFgK%2FGLo2KKY1T2BhQS14kQSPKFH6IuybNRlkwXTklw1pX1v9ShdKM2j5OEDfwWwX6fqcI5Jhq9ok5OOYS8Z7IKLDDbXvhyeTLlQ9%2BYtr%2BHEpBnyTjX2TgFsFkeHZ59bSU9UL6p%2BxSs0gJWWTV%2B0xicKtjmWI15iHZNqOl5HDUFZk6jdkzvdh1cPnvzM1sALJ%2BUxtjf%2F1fQiDCUSSn%2FTcUzEzm9ZrS464c4cCsoxN7ckZWzJov467%2BKxgcnP1n1uFtMrf0wA4h2h4rKLZlXUdY0YXnXSmGsMMYrVgW8rGXBNU0YTNcse68QkPCq6N4fMoWM%2B9s33AMP%2BjjMEGOqUB1y9Dk40RT1X79eQIxD2aVytwEqIgz2N2VqWHa0HBfi6GtJaec%2BZ%2By5edZQeyjBMMekyRRusWGEAa9VZSMVubPMCykVaC1%2B0NWZjnJhIEMjxXy%2FhbAf%2FRlkEhIpa3NLuMwOL7r3vXn3BbmI%2B05yqrvEXcUv02EXJq6Kns1pJudbIDcz98qRHSZRZZVDYzEppNmMkbLr%2FQnPu7LmKIrNqOeYhVNH2l&X-Amz-Signature=fc46f1e71d3041b4d686686d2e2e88b42753c303fc39bbf01e0ff554bf72afc6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFINPH7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCfH7RtQk8oJ%2FdrEP0L8gX%2FiirB%2B2CvB%2F%2BX2NFpen6sSgIgT6CiaxGJUI48EHWctkpwVkGxha%2FPwEzKwOxk1nBz5JwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxN44Zv82yXjrEPircA8Guau36bPPnVigJfCZ9OmZxFZCEz1wgQgm4Om95R5tPcs7t0HP5jlIWyoidMbk61x6fD2pz0%2BacC1pKjPK%2FaQHLshD5UZYsj9uJJzKFBQWZUYH0nJzxn493ZL5cFfRR3PIvsDnu9SR%2FsADKTtMg8ygy21uTakrJMjCD4bS%2BqoUgXRDHA6Div6GsY28JY85CuTumKtZgKkTMn0TE%2Bm2hqljCCzxU4d43Gy6QLbyAnv%2B3ti%2FjooKLwSyw3opPMU0dN2zWJwMRHRYgrtz4m8u6RRoBDiRDQIs%2BRe6KTYdCAz0QcPuJQQLaFgK%2FGLo2KKY1T2BhQS14kQSPKFH6IuybNRlkwXTklw1pX1v9ShdKM2j5OEDfwWwX6fqcI5Jhq9ok5OOYS8Z7IKLDDbXvhyeTLlQ9%2BYtr%2BHEpBnyTjX2TgFsFkeHZ59bSU9UL6p%2BxSs0gJWWTV%2B0xicKtjmWI15iHZNqOl5HDUFZk6jdkzvdh1cPnvzM1sALJ%2BUxtjf%2F1fQiDCUSSn%2FTcUzEzm9ZrS464c4cCsoxN7ckZWzJov467%2BKxgcnP1n1uFtMrf0wA4h2h4rKLZlXUdY0YXnXSmGsMMYrVgW8rGXBNU0YTNcse68QkPCq6N4fMoWM%2B9s33AMP%2BjjMEGOqUB1y9Dk40RT1X79eQIxD2aVytwEqIgz2N2VqWHa0HBfi6GtJaec%2BZ%2By5edZQeyjBMMekyRRusWGEAa9VZSMVubPMCykVaC1%2B0NWZjnJhIEMjxXy%2FhbAf%2FRlkEhIpa3NLuMwOL7r3vXn3BbmI%2B05yqrvEXcUv02EXJq6Kns1pJudbIDcz98qRHSZRZZVDYzEppNmMkbLr%2FQnPu7LmKIrNqOeYhVNH2l&X-Amz-Signature=5d7d9b708493a2830833ab64226c4af3838ff88b90ed189b6310333af86b3457&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFINPH7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCfH7RtQk8oJ%2FdrEP0L8gX%2FiirB%2B2CvB%2F%2BX2NFpen6sSgIgT6CiaxGJUI48EHWctkpwVkGxha%2FPwEzKwOxk1nBz5JwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxN44Zv82yXjrEPircA8Guau36bPPnVigJfCZ9OmZxFZCEz1wgQgm4Om95R5tPcs7t0HP5jlIWyoidMbk61x6fD2pz0%2BacC1pKjPK%2FaQHLshD5UZYsj9uJJzKFBQWZUYH0nJzxn493ZL5cFfRR3PIvsDnu9SR%2FsADKTtMg8ygy21uTakrJMjCD4bS%2BqoUgXRDHA6Div6GsY28JY85CuTumKtZgKkTMn0TE%2Bm2hqljCCzxU4d43Gy6QLbyAnv%2B3ti%2FjooKLwSyw3opPMU0dN2zWJwMRHRYgrtz4m8u6RRoBDiRDQIs%2BRe6KTYdCAz0QcPuJQQLaFgK%2FGLo2KKY1T2BhQS14kQSPKFH6IuybNRlkwXTklw1pX1v9ShdKM2j5OEDfwWwX6fqcI5Jhq9ok5OOYS8Z7IKLDDbXvhyeTLlQ9%2BYtr%2BHEpBnyTjX2TgFsFkeHZ59bSU9UL6p%2BxSs0gJWWTV%2B0xicKtjmWI15iHZNqOl5HDUFZk6jdkzvdh1cPnvzM1sALJ%2BUxtjf%2F1fQiDCUSSn%2FTcUzEzm9ZrS464c4cCsoxN7ckZWzJov467%2BKxgcnP1n1uFtMrf0wA4h2h4rKLZlXUdY0YXnXSmGsMMYrVgW8rGXBNU0YTNcse68QkPCq6N4fMoWM%2B9s33AMP%2BjjMEGOqUB1y9Dk40RT1X79eQIxD2aVytwEqIgz2N2VqWHa0HBfi6GtJaec%2BZ%2By5edZQeyjBMMekyRRusWGEAa9VZSMVubPMCykVaC1%2B0NWZjnJhIEMjxXy%2FhbAf%2FRlkEhIpa3NLuMwOL7r3vXn3BbmI%2B05yqrvEXcUv02EXJq6Kns1pJudbIDcz98qRHSZRZZVDYzEppNmMkbLr%2FQnPu7LmKIrNqOeYhVNH2l&X-Amz-Signature=0319268463ec135ab2e5de50a8e078c94f7fd108b20fade2dad48826659a282e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCMNC6R%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHKlvxcIabx7Eu6NbBopaCj4Qce6yetOdGXpqAHX50ZPAiAGEz%2Fc0oSELJ9aZTx%2BWiKdw34Unn%2FjNgQgipbvN842MyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbnn6MnswnVo1k2wVKtwDronUAR4kIV8DHAR3qkVcTcwihqd812oT%2B1l71ZqyUrFV8m3eWqNq7CdG%2FNtiCgbMgrTxlvB4iFrqXTJiCSdgC6iWVoisjwVCNvuTAKqCe9wBZebMX96%2FUrE%2FN8%2BosnF8JwUoyIx95yfA9XW%2BK2a%2Fwk9%2Ba%2Bzm8j%2BRQK7195iLPqka%2BVVyg%2Fqo4jX1TfDsR7OKbazJY9J2jrY5ij0D4HD9VE0Wk6%2BS6SBO5tGJOPuGm6SkWGpaGWeZGbdcbI8dyoFN8OTq53vdlAyzKfj1AxpyIZJhoiGcajCjJYCFB7f2L%2F3VnX7g7rJNUq%2F57W%2FmOBZCjjhb4Ptz4kBalZa2tigmhfGojtk776F4IxM7VnLq4JHIQNOMNa%2FtmtwqI%2B4OVg5M6u%2FOpqNWIelDdFD6nBwIIJYo9QN2YmfaB6PV%2FZdf6pQ3G1NfbmfKxPJgKivcAjE%2BVrNWDNkHZ%2BO29jWMPha718j44L9LxlWd%2By%2F32V%2BTx%2BjdXXCyuSJsxqDShWPnFX70zVe0dMHaXcJSYyIQk47AcBZOlph%2BXT94JHKUhvqVQyP4lye1gTtakuQONN%2FXiA%2FQr79XbtbPD%2FyMqFoy2OnlnMmelytpeKAJX5LTh%2F3nljTaCZkCT%2BhxlaLVu1AwkqSMwQY6pgELVZkeKdpWcPxtmeoTbAZSAwASeSFikmJHsY1LJkb0xJp8LJrJPtTSNRYcp%2FFXGxmnDAb2FTDqIRrVH%2BHTWcmN2yCVmywIxdfF5LrfCXX%2BYO0bCRZnVJMgjXcbCBPNRuz9NteH0XtoY4Vtg4qZCGzLLAE2KE9onvVsyTe1BbVyXUU2NGOXc9CCKbRU7%2FeP4fU7Luvj7vimHOsyMLqJcUdzGcQd%2Fo6M&X-Amz-Signature=7162739ffc3aea04b96bab00fed34b16d748b8f0bf21e18670e9c30e64d854f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAQ4SAMJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFqna7uHkjSjMAM873EPJxvTBhFfMFXug642Cch0dVKIAiEA0eLxjVIrHWPbMjUEVG6ohPZ3zIsmpVizLa%2Flc3m0jBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1g6lYDFHInMyNpjircA8XzkHOww%2FWyrMQUjIaub7AkOiqqHZFzuts3IaLUmu6XMaq%2FC2hkT4LitAXxcoIvEpnq0UHgCswomrdncYCqrt%2BYWlgMGwNiMq1KkxDegvOn88MowQ%2BusTM3kGeIpaCmRw%2BEaak3XSyrUYisRhZu7ubw%2FyXAz8zCN7vIZ56OCAcYRv%2Bdj9Zt9VGcz4dHZx0iLcLX4o%2FARNi9pvWEFdBb0CK26WSdpCoJYYKcGTvWOV3LVRqVyEoT%2FcUrwfTH0XoBkqLTHEyaG3FGH8Fm9%2F%2Bk68KjM6QoXgAMKO4YtNZrWEjPuW%2FbRhap%2FEAc7ZKAhH3IQvL%2FupbE%2FqT%2FlYNUp8djO2fCXJqdkBSNQ0CAiZwaxRT5NHuG2xiupNsENumUcrAYPnjG1%2FVRcuHIa6rFp9VfTIswf61SVjoSCpJOH251Ryj%2FwRsu8BF4zVdMCjFu%2B37wtOP%2FnNbK0xKV8YNdKRfncUAQTqLbGv1dImWukBmgs3Rh1kymtbPZbc6HB43A17ldACuPQzUa9yc48uQtxRyyTPHE8tD0wZFxxso2ua27Y9GYKYFI3Q9g7lYyKpCQ8U2zwfyVVijQ%2FzTEHmmFaEZDDRxii4hdsiKD%2FHtYDZLaLNm9cFAFMswZjsyPFm3NMN%2BjjMEGOqUBghbFFJDWafMp%2FiD%2FFKXJISFRoBBmqJWI4PQFD1jxeUOkQwflcvXrSks3fUePQLDYqhtdEAHAaj0l4NaMXnvIzl9LZfm9Mm339OXhHcTqoFQf6Q1Mt%2BeQ8bZgR2VN4k9QSL6ZoUKBA0HOlmO99qWQlxrQno6HhECV1wh1GVAjpcpE3qqda8kYq3BAZRFAjMYexlCc6iucWqcUS7HgKc3dTniTnHs9&X-Amz-Signature=bd7822d3fcc867d5358a27a6321d761171db971f1115329df629b3c55cd1f926&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFINPH7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCfH7RtQk8oJ%2FdrEP0L8gX%2FiirB%2B2CvB%2F%2BX2NFpen6sSgIgT6CiaxGJUI48EHWctkpwVkGxha%2FPwEzKwOxk1nBz5JwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxN44Zv82yXjrEPircA8Guau36bPPnVigJfCZ9OmZxFZCEz1wgQgm4Om95R5tPcs7t0HP5jlIWyoidMbk61x6fD2pz0%2BacC1pKjPK%2FaQHLshD5UZYsj9uJJzKFBQWZUYH0nJzxn493ZL5cFfRR3PIvsDnu9SR%2FsADKTtMg8ygy21uTakrJMjCD4bS%2BqoUgXRDHA6Div6GsY28JY85CuTumKtZgKkTMn0TE%2Bm2hqljCCzxU4d43Gy6QLbyAnv%2B3ti%2FjooKLwSyw3opPMU0dN2zWJwMRHRYgrtz4m8u6RRoBDiRDQIs%2BRe6KTYdCAz0QcPuJQQLaFgK%2FGLo2KKY1T2BhQS14kQSPKFH6IuybNRlkwXTklw1pX1v9ShdKM2j5OEDfwWwX6fqcI5Jhq9ok5OOYS8Z7IKLDDbXvhyeTLlQ9%2BYtr%2BHEpBnyTjX2TgFsFkeHZ59bSU9UL6p%2BxSs0gJWWTV%2B0xicKtjmWI15iHZNqOl5HDUFZk6jdkzvdh1cPnvzM1sALJ%2BUxtjf%2F1fQiDCUSSn%2FTcUzEzm9ZrS464c4cCsoxN7ckZWzJov467%2BKxgcnP1n1uFtMrf0wA4h2h4rKLZlXUdY0YXnXSmGsMMYrVgW8rGXBNU0YTNcse68QkPCq6N4fMoWM%2B9s33AMP%2BjjMEGOqUB1y9Dk40RT1X79eQIxD2aVytwEqIgz2N2VqWHa0HBfi6GtJaec%2BZ%2By5edZQeyjBMMekyRRusWGEAa9VZSMVubPMCykVaC1%2B0NWZjnJhIEMjxXy%2FhbAf%2FRlkEhIpa3NLuMwOL7r3vXn3BbmI%2B05yqrvEXcUv02EXJq6Kns1pJudbIDcz98qRHSZRZZVDYzEppNmMkbLr%2FQnPu7LmKIrNqOeYhVNH2l&X-Amz-Signature=751841afde9dd5a55c8b84ec3396df5f2c2120fa822c9ab73e48bcaf530a75c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
