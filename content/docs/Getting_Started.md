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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WURCMPR5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAuy4oGMmXPqJEtBfknN4zZ%2FwIbbQSfSYElGD0H%2BI9VgIhAKRx2aopRGC4DCbO2KmcsIbJePue%2BZk%2F5fDMq6kSJ%2BA1KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP4guaHlHVH09CM4cq3APMLtOocxvKjZ%2ByYpu5jBIRqO7TGbPGB%2FhymlykDQ%2F32zf5cAI251szyO%2BTtt1DBzFL%2FeMcEWXSCn%2BmMLDINlxRvGMVJ%2FDmlenPneOHgNzoIwAM8wyhGQleGAmmPJxQgVLJP2aBf%2FnZDq7Ltesl6UCqAAteoxG9l34NZt5DfcH2HUiLuhf50d5ziHiSo3rrshs2AEpLiJKhsyF9atkN7Z0GR%2BLV5abfGhTipgG9JgVr%2BTwkZjq82mVM3m%2B2S459FjsrujqQ%2F0WCpm1n9EwNM5ggrEDmC2WEGY5nxxVWh9urEMQgKOp4E32zS8Wq5PUqtlo%2BA%2BMqQuQyknxEBGXol%2FIhF2eCkUjOh7e2A0jQI%2FDr4nnfk1ImjfA51ltNByz11xjS9ogcXSzWU2gkRWQ7E8g1gA2Tsa4rNSI35C1JWJi1b1EFywn3RGPgEeEcicRI8BVgg4C%2BcnVVQwfMrXdvagvR3wzD2XHyUT1WcNa0oKY7OQO2MStQZhMEp%2FbWzEzHZJWB1vsrWzK%2BaC3e%2Bx%2F1loQHoeDEzuqKPJiwwUo0pAiJvX5eu38Oi1Vr73BGIf%2FgR3pIJmIMxJ4VnIw4jVSHvMabqS8nCC6FmoHpRaap%2ByPd8lhK54afBx58tvkUYDDE1uDCBjqkARAjFhKuxdjkTGRg8TBPtlxtiEFMf%2FmmjtASCqo726PDuEfEMEZZm%2F8YzSkgOO3kVOfL7dKeJ1%2ByJawpKaAKoQI1QEeco8oZ%2BYNryB1K02XcUYcdeopaBI9wD%2Bvf2pr83YJWCYBJmkSIkh4C0vnhikkTIaWXlxLyqBsk2m5gmcihMiQFVfME3jKCPPMwKNZwCvEkXfnF%2FhWwX0NIwgnSEy2Vj0Q9&X-Amz-Signature=4a2962cdceba9999a94a490d9b49c2c8a2f4c7ee48deef9473dcfc43ad2f4f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WURCMPR5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAuy4oGMmXPqJEtBfknN4zZ%2FwIbbQSfSYElGD0H%2BI9VgIhAKRx2aopRGC4DCbO2KmcsIbJePue%2BZk%2F5fDMq6kSJ%2BA1KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP4guaHlHVH09CM4cq3APMLtOocxvKjZ%2ByYpu5jBIRqO7TGbPGB%2FhymlykDQ%2F32zf5cAI251szyO%2BTtt1DBzFL%2FeMcEWXSCn%2BmMLDINlxRvGMVJ%2FDmlenPneOHgNzoIwAM8wyhGQleGAmmPJxQgVLJP2aBf%2FnZDq7Ltesl6UCqAAteoxG9l34NZt5DfcH2HUiLuhf50d5ziHiSo3rrshs2AEpLiJKhsyF9atkN7Z0GR%2BLV5abfGhTipgG9JgVr%2BTwkZjq82mVM3m%2B2S459FjsrujqQ%2F0WCpm1n9EwNM5ggrEDmC2WEGY5nxxVWh9urEMQgKOp4E32zS8Wq5PUqtlo%2BA%2BMqQuQyknxEBGXol%2FIhF2eCkUjOh7e2A0jQI%2FDr4nnfk1ImjfA51ltNByz11xjS9ogcXSzWU2gkRWQ7E8g1gA2Tsa4rNSI35C1JWJi1b1EFywn3RGPgEeEcicRI8BVgg4C%2BcnVVQwfMrXdvagvR3wzD2XHyUT1WcNa0oKY7OQO2MStQZhMEp%2FbWzEzHZJWB1vsrWzK%2BaC3e%2Bx%2F1loQHoeDEzuqKPJiwwUo0pAiJvX5eu38Oi1Vr73BGIf%2FgR3pIJmIMxJ4VnIw4jVSHvMabqS8nCC6FmoHpRaap%2ByPd8lhK54afBx58tvkUYDDE1uDCBjqkARAjFhKuxdjkTGRg8TBPtlxtiEFMf%2FmmjtASCqo726PDuEfEMEZZm%2F8YzSkgOO3kVOfL7dKeJ1%2ByJawpKaAKoQI1QEeco8oZ%2BYNryB1K02XcUYcdeopaBI9wD%2Bvf2pr83YJWCYBJmkSIkh4C0vnhikkTIaWXlxLyqBsk2m5gmcihMiQFVfME3jKCPPMwKNZwCvEkXfnF%2FhWwX0NIwgnSEy2Vj0Q9&X-Amz-Signature=f40fbdf4dc4cef0c341218903d5ed9699e9706a5284b4890089b0a9fdfe756a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WURCMPR5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAuy4oGMmXPqJEtBfknN4zZ%2FwIbbQSfSYElGD0H%2BI9VgIhAKRx2aopRGC4DCbO2KmcsIbJePue%2BZk%2F5fDMq6kSJ%2BA1KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP4guaHlHVH09CM4cq3APMLtOocxvKjZ%2ByYpu5jBIRqO7TGbPGB%2FhymlykDQ%2F32zf5cAI251szyO%2BTtt1DBzFL%2FeMcEWXSCn%2BmMLDINlxRvGMVJ%2FDmlenPneOHgNzoIwAM8wyhGQleGAmmPJxQgVLJP2aBf%2FnZDq7Ltesl6UCqAAteoxG9l34NZt5DfcH2HUiLuhf50d5ziHiSo3rrshs2AEpLiJKhsyF9atkN7Z0GR%2BLV5abfGhTipgG9JgVr%2BTwkZjq82mVM3m%2B2S459FjsrujqQ%2F0WCpm1n9EwNM5ggrEDmC2WEGY5nxxVWh9urEMQgKOp4E32zS8Wq5PUqtlo%2BA%2BMqQuQyknxEBGXol%2FIhF2eCkUjOh7e2A0jQI%2FDr4nnfk1ImjfA51ltNByz11xjS9ogcXSzWU2gkRWQ7E8g1gA2Tsa4rNSI35C1JWJi1b1EFywn3RGPgEeEcicRI8BVgg4C%2BcnVVQwfMrXdvagvR3wzD2XHyUT1WcNa0oKY7OQO2MStQZhMEp%2FbWzEzHZJWB1vsrWzK%2BaC3e%2Bx%2F1loQHoeDEzuqKPJiwwUo0pAiJvX5eu38Oi1Vr73BGIf%2FgR3pIJmIMxJ4VnIw4jVSHvMabqS8nCC6FmoHpRaap%2ByPd8lhK54afBx58tvkUYDDE1uDCBjqkARAjFhKuxdjkTGRg8TBPtlxtiEFMf%2FmmjtASCqo726PDuEfEMEZZm%2F8YzSkgOO3kVOfL7dKeJ1%2ByJawpKaAKoQI1QEeco8oZ%2BYNryB1K02XcUYcdeopaBI9wD%2Bvf2pr83YJWCYBJmkSIkh4C0vnhikkTIaWXlxLyqBsk2m5gmcihMiQFVfME3jKCPPMwKNZwCvEkXfnF%2FhWwX0NIwgnSEy2Vj0Q9&X-Amz-Signature=84489d3063481d52968e14e375d708f78f3259062d4664fed98f82c6941c452e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOCJWK6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDITeUu35tFMnhR8vrbIXXGGdXs%2FW1hQ1mV8MAtLV1jEAIgTyMgrqUom0BDK%2FAoUnGds59hAQZO7n0A5TrC3JFiLI8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9v05Yg3wSpFeoXircAyAj20l6H%2F%2FmYyDpJ52gy4ZLfhJXv%2FpvXHHsA7qK4Y0n9wQ7UNJXDERbOaAARTRW6c1q%2Fnr3dc9I7lxe1VUnQyDNi9b657kDaVHmsATygR17e6SnOsXjvrkpbt%2BL3Ddl2eJdJZzgmJlI%2F8GtzMcAE8l8rplMeEFZeAvi5c%2Fvk6BRmnNqxQCkxZnMrBeDc%2FL1yCaNkXPHM4H5J3A1MV94%2FfJHRQaUiateAo8j6inSDzpZw2D8if0n3vNW%2F5KiBP5qyHlXdoKyPLfz60fupBCVd9xQ%2FqrYftAmj2c8hl6B7DB6ecFdw8PdqOrhPdyil%2F9EDhjL6EUqDVKVt6OUFeV%2Fp8fpgdtPLPm9tvOtaot18EDnGQ6whOKOzaJpBe4dUXl8jHfBpRuw0A5flcf0BE%2FK1wjOvUDfUXWAMVMm2bSnaA20SX8cysI28SyHHQHNbZ4wzzNDMkg7zTaidiBya5ppKI4tLG9jFW8uqgLbwnCUWX5MlJFvjNiMN4tbX4Jy6EcJre1aSB4UPCNqxzfURos0WqtrglhIqF0MGKxExPExB3EXCf5VQOGo462qhX7C2ive5IyF32Y%2FU9AE1%2Fi98ZHd9%2FFK02jGYd1pcyfENM%2B7V1cnFC1%2FFw%2Fx8752FGY0MO3L38IGOqUBWhqOGPCwZEMDXRq48%2BNjyxcK0Q0qO0iu465BqqFFYwEkpphbbVzoi2eSOjibpYY1iZpDNFvlsJBYpRbXHaKNaWBF%2B%2BQt0lu9daw80brno4vaIMI8md6QrT%2BC%2BvCF3en5LLycxH0XtyvhskzEoUwMk7XH6OLCsaN9vmDnUUkW9OCU9d8KEK5PrZEOg60n3OqH%2BvnGkrRV2e0FXJGlQQJY4pbHvXpz&X-Amz-Signature=59272833e4c5e7c52764623d505b36f6ee44bfd8d7aeb8831c2db349d7420661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7THZV4M%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICfhQH196JVX1F%2BIctKxiP1Ayd8VrgGtt1BziSx5SnLaAiEA0ZCjwc6VwVC0QesJbJzgdIgh4M5832rCCIcIecdjvRwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMUmYf95Fnp3Hm0FircA2iFXbZDu0NMvJZfdYGsNHhiRg3ESsYzhIjZmHw44WmrxsTNm%2FUrNKodlfijcJB0HAo5LWtSeFsR49rdwokmSZKuxxhn9b83vtvxEcFY1aYEcxqJ1aBJ4jQDYcP7qPLgvKo%2B4ywi%2BVFmUClHIQGrHiEn3shzfJ8lxgU%2F31aSlcrhxRuetMGXmU5z0dKDRRZDKEGSkJ1t2veyc7EdhmsEG7adrB%2FTDRgD4%2FZ8DAPHt5lHnccfC2%2BHYYOC1Q%2BHxHdRRY7WA0aRqnXi%2BtQhEtD7ZwJIPih4a2OVQW%2BlDv4zxp5m9fayjx%2FB7ySMnJb7P141AL5Qk9DQelJbDjGC1wN8RcbQdTDCJo8zifvNQQ1zDWopPTSA8D6Um2Ib95xHE3NWGJAxi6SsHg572kDMru4hu%2FF8ptQoKjg4r%2BYGOZ9NJ9EAd5bVrbeVCGww3OaE9SvX%2BlxhAm%2F9hfqSeHiHcXM4ssaHwGkXhtQHjWac%2B3iYZmAsgApTOfzhXbp02Zxc2adbtdoUGMdZr7kziBCMFwmTIBBn%2BSC0lmnm4TLXquIoEQj1nPHGVMEtf6CrQiPu81YMXYJMbGFlJEAZloaVlHGRSsSHEK6%2FH0jOM8eIoWiaSi5dqhHoUkzmNWn777yUMLLO38IGOqUBPW2byptJRVcTxWpk2OArk53x8Ng04e0u567ZmffKwfUwT9xJZ1YGPTciISH3FBFj4w0M8dkrrZa4gjeI%2BbnZNCR2i%2BcAYhWHGfQNWVVQSTbM9QVpIiaGknsk5csdhuLpyJ6RhdLXlW7mViHTwIMDM82%2BOJ%2BPBZ%2B63QXwOpRlOuMB8ZzoMPqLSwMnS1ylN%2F5%2BaluFZVtl%2BYqxLhXnkLKn88hKpqZt&X-Amz-Signature=0e115d91a95573d3258aa3fd134ca6752cddf8f2ff4987170c5a8d7a5970d83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WURCMPR5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDAuy4oGMmXPqJEtBfknN4zZ%2FwIbbQSfSYElGD0H%2BI9VgIhAKRx2aopRGC4DCbO2KmcsIbJePue%2BZk%2F5fDMq6kSJ%2BA1KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP4guaHlHVH09CM4cq3APMLtOocxvKjZ%2ByYpu5jBIRqO7TGbPGB%2FhymlykDQ%2F32zf5cAI251szyO%2BTtt1DBzFL%2FeMcEWXSCn%2BmMLDINlxRvGMVJ%2FDmlenPneOHgNzoIwAM8wyhGQleGAmmPJxQgVLJP2aBf%2FnZDq7Ltesl6UCqAAteoxG9l34NZt5DfcH2HUiLuhf50d5ziHiSo3rrshs2AEpLiJKhsyF9atkN7Z0GR%2BLV5abfGhTipgG9JgVr%2BTwkZjq82mVM3m%2B2S459FjsrujqQ%2F0WCpm1n9EwNM5ggrEDmC2WEGY5nxxVWh9urEMQgKOp4E32zS8Wq5PUqtlo%2BA%2BMqQuQyknxEBGXol%2FIhF2eCkUjOh7e2A0jQI%2FDr4nnfk1ImjfA51ltNByz11xjS9ogcXSzWU2gkRWQ7E8g1gA2Tsa4rNSI35C1JWJi1b1EFywn3RGPgEeEcicRI8BVgg4C%2BcnVVQwfMrXdvagvR3wzD2XHyUT1WcNa0oKY7OQO2MStQZhMEp%2FbWzEzHZJWB1vsrWzK%2BaC3e%2Bx%2F1loQHoeDEzuqKPJiwwUo0pAiJvX5eu38Oi1Vr73BGIf%2FgR3pIJmIMxJ4VnIw4jVSHvMabqS8nCC6FmoHpRaap%2ByPd8lhK54afBx58tvkUYDDE1uDCBjqkARAjFhKuxdjkTGRg8TBPtlxtiEFMf%2FmmjtASCqo726PDuEfEMEZZm%2F8YzSkgOO3kVOfL7dKeJ1%2ByJawpKaAKoQI1QEeco8oZ%2BYNryB1K02XcUYcdeopaBI9wD%2Bvf2pr83YJWCYBJmkSIkh4C0vnhikkTIaWXlxLyqBsk2m5gmcihMiQFVfME3jKCPPMwKNZwCvEkXfnF%2FhWwX0NIwgnSEy2Vj0Q9&X-Amz-Signature=043b5594c1a5ed789f3d98ad8a01736950f250afd3fe75da4f5fc52ad1d13709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
