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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6BF3EA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDrWfLepgbTKj1B4q%2Bnyy0JMrXpSWpF75vESYaBMzVw8AIgJtpXGDdXUgIIHTv15TUfebDYHGzq%2B3%2BF1QoeCQvVPnEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAC%2BoTQOug%2BeQBJGyrcA6UM%2Fte2WQyDGx1E%2BW74MSCIoI%2BCXJluGXSlU6x14suX8AM5U52GgUoYpwjYtyc2s2KarT%2Ffz3CbB0q6OxDQcv09FEIi25JxwyveGBhKhLmkALJv2PNktkLlDbDFKBzczWc%2BwDtcLjl1ANONn44Dq%2FVnT%2BMtd20H%2FVY11ZinmaLIEchKGCNBQmoFZZWxa0HdnWgzVbAzCmzLMJtFLV%2FLibN0DbOlTbM4cUFDbha6nCbsZOh83ybLDxVIR%2BNAMt7ByBZiyxD6lKEgbOdKBE7jCNBMoGyJuGawxEPRjV%2FbwDpfNdf2y%2B%2FEzeHyCwJjoIUbxkZt6xwjvEsYQVi8K%2B%2BlhzUX8PPkSk%2BvjsspSX7le9bOgZzrRBlefYDClGXBtHXcrmffQ4%2BMEq8XWBLouN4yqUExMdiE3CUrx6A1OxmNs2d%2BnmsxwEBGN6VqNl%2F%2BcgiVXsQQitFn%2BxroqIaeM4ePLF2bRKE%2FjjP49b5dCBM4NECdeQYfWNmF9NhSg52Ggiseiwl9dniFwcPzM6MgU0iHqR8Lb2RWpZ03VbQN1mbjvQPP81agDMa%2BVkI4bchlNehCu8VASZV7zNENM79ufxha%2BMa433Kp9%2BykOyHYQLu%2B3J2hsEqAJ6gWOgDxNNHhMOjXncQGOqUB5EL%2F91JdnT4ijPDjtixaXJm4H9JnakeYL3T3%2BBhl5lHFUvqT2eaaqRXRkzrB3Lyt%2F5zv0PTlFUTcwW%2FNHNcV%2BsKeypT2ZIW6jxPB%2F35fnZu%2ByzOXTBh9qb4u%2FcMCVMGtO%2FZ4tccTYjixYbnFzWDFTtPyNRFhWgg5mg6tPhmzT0ou0G6C9y8lqe6BPli47qcjc8ZRfp3f9XsYw3EEre6f1WLLdvmC&X-Amz-Signature=5772dbe86540cb35c3bdf620410dd79cfb416b76b664431a4bbfcce2ad55c1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6BF3EA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDrWfLepgbTKj1B4q%2Bnyy0JMrXpSWpF75vESYaBMzVw8AIgJtpXGDdXUgIIHTv15TUfebDYHGzq%2B3%2BF1QoeCQvVPnEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAC%2BoTQOug%2BeQBJGyrcA6UM%2Fte2WQyDGx1E%2BW74MSCIoI%2BCXJluGXSlU6x14suX8AM5U52GgUoYpwjYtyc2s2KarT%2Ffz3CbB0q6OxDQcv09FEIi25JxwyveGBhKhLmkALJv2PNktkLlDbDFKBzczWc%2BwDtcLjl1ANONn44Dq%2FVnT%2BMtd20H%2FVY11ZinmaLIEchKGCNBQmoFZZWxa0HdnWgzVbAzCmzLMJtFLV%2FLibN0DbOlTbM4cUFDbha6nCbsZOh83ybLDxVIR%2BNAMt7ByBZiyxD6lKEgbOdKBE7jCNBMoGyJuGawxEPRjV%2FbwDpfNdf2y%2B%2FEzeHyCwJjoIUbxkZt6xwjvEsYQVi8K%2B%2BlhzUX8PPkSk%2BvjsspSX7le9bOgZzrRBlefYDClGXBtHXcrmffQ4%2BMEq8XWBLouN4yqUExMdiE3CUrx6A1OxmNs2d%2BnmsxwEBGN6VqNl%2F%2BcgiVXsQQitFn%2BxroqIaeM4ePLF2bRKE%2FjjP49b5dCBM4NECdeQYfWNmF9NhSg52Ggiseiwl9dniFwcPzM6MgU0iHqR8Lb2RWpZ03VbQN1mbjvQPP81agDMa%2BVkI4bchlNehCu8VASZV7zNENM79ufxha%2BMa433Kp9%2BykOyHYQLu%2B3J2hsEqAJ6gWOgDxNNHhMOjXncQGOqUB5EL%2F91JdnT4ijPDjtixaXJm4H9JnakeYL3T3%2BBhl5lHFUvqT2eaaqRXRkzrB3Lyt%2F5zv0PTlFUTcwW%2FNHNcV%2BsKeypT2ZIW6jxPB%2F35fnZu%2ByzOXTBh9qb4u%2FcMCVMGtO%2FZ4tccTYjixYbnFzWDFTtPyNRFhWgg5mg6tPhmzT0ou0G6C9y8lqe6BPli47qcjc8ZRfp3f9XsYw3EEre6f1WLLdvmC&X-Amz-Signature=9a86117afb828d32d9ca0e038c5886fb79c3cd34eb8960ff627872658417d9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6BF3EA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDrWfLepgbTKj1B4q%2Bnyy0JMrXpSWpF75vESYaBMzVw8AIgJtpXGDdXUgIIHTv15TUfebDYHGzq%2B3%2BF1QoeCQvVPnEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAC%2BoTQOug%2BeQBJGyrcA6UM%2Fte2WQyDGx1E%2BW74MSCIoI%2BCXJluGXSlU6x14suX8AM5U52GgUoYpwjYtyc2s2KarT%2Ffz3CbB0q6OxDQcv09FEIi25JxwyveGBhKhLmkALJv2PNktkLlDbDFKBzczWc%2BwDtcLjl1ANONn44Dq%2FVnT%2BMtd20H%2FVY11ZinmaLIEchKGCNBQmoFZZWxa0HdnWgzVbAzCmzLMJtFLV%2FLibN0DbOlTbM4cUFDbha6nCbsZOh83ybLDxVIR%2BNAMt7ByBZiyxD6lKEgbOdKBE7jCNBMoGyJuGawxEPRjV%2FbwDpfNdf2y%2B%2FEzeHyCwJjoIUbxkZt6xwjvEsYQVi8K%2B%2BlhzUX8PPkSk%2BvjsspSX7le9bOgZzrRBlefYDClGXBtHXcrmffQ4%2BMEq8XWBLouN4yqUExMdiE3CUrx6A1OxmNs2d%2BnmsxwEBGN6VqNl%2F%2BcgiVXsQQitFn%2BxroqIaeM4ePLF2bRKE%2FjjP49b5dCBM4NECdeQYfWNmF9NhSg52Ggiseiwl9dniFwcPzM6MgU0iHqR8Lb2RWpZ03VbQN1mbjvQPP81agDMa%2BVkI4bchlNehCu8VASZV7zNENM79ufxha%2BMa433Kp9%2BykOyHYQLu%2B3J2hsEqAJ6gWOgDxNNHhMOjXncQGOqUB5EL%2F91JdnT4ijPDjtixaXJm4H9JnakeYL3T3%2BBhl5lHFUvqT2eaaqRXRkzrB3Lyt%2F5zv0PTlFUTcwW%2FNHNcV%2BsKeypT2ZIW6jxPB%2F35fnZu%2ByzOXTBh9qb4u%2FcMCVMGtO%2FZ4tccTYjixYbnFzWDFTtPyNRFhWgg5mg6tPhmzT0ou0G6C9y8lqe6BPli47qcjc8ZRfp3f9XsYw3EEre6f1WLLdvmC&X-Amz-Signature=4c1591e0e0c5ee2598d95abac31e7cd797439a6f69eaba183eff54c9c8c46b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CW6W22%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtaUX03nB9mAG%2BsSj25XLsdsScAnbaFYW8b1y9bIEm8AiEAvWpPisISmOVt8MXmQDcIa086el0zbqSCPE%2BE5ksVu90qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRPS5qtsW7DBFdPcyrcA%2BP8jSNEcd5P7SkYoJ9ip17%2B3qjr9xbnMtGwSNxcz6PjdItH8ULYLPSjaT88U3vb8kE1KCRe4icK%2B2wDCirEyCvokoOHcL2PnapW9YfHAAb4Pen6KGi9K2Po6BYipFUO%2FkW5o4zDHbhARCy6g5AyKr8Kx9ZDf5h0aOk4IGJaY%2BrMsyOittHGXfmXbFok7pgUVXj95pVqhUUEwpNPoTbRzbpzUw3X%2BgaCOArIcpr61oy7hP9YapAqemlGj8DcaEt%2BAjsdGSyypqdW8sj9ZzapLEYz5MadPXkqk%2BMJAGUiIjpB0qh%2FZVUJOAhGA0QG58yOPwz8XarVeW8nlnsUOL%2BG2BoKE%2FYmXlLe3vBDHrzshp6%2FDe%2FeKXLCKy5m4S6%2BoQ4%2BWld0RIgQaqnMDKAL9aDEWFgPOO%2BJsxnYwTujsIU3gnCDxvNGKCLljnHt8qfxzW%2FhCob5nIy5M3ptWlFNebNeF7BoQhAjklnKIBOgIXXZ36x7%2BPrSsj9129YoDf7UkAJfHNmgwgqX8dyBD7qq3PX9hIY9JUi%2F%2FWWLw6Hv4RpMvPRxeYCyz5FAd5LQzalJfp%2FVgiMC5niE8iK340bDqckbZhm468GayyXOwWgKVeH0P9fvUs2mfXCwVyUWeratMKPXncQGOqUB95R%2B6v1K0txUjB8BHWwFoCgOfQOQlpjoN1Tf9Oz1iOfzx0LujDB4u6wn2Q1y2zZHBkxxpTZmzlAFFfCQlDG2xIU2GvyPj1kQ2C4FvaSr7HADuu3WSnMCAi%2FME6bdawH2U7lP3Dr7SFn6Ojvx7m8UrgPds%2B%2Bd%2FA7l9ElwGQU5MKwq7lW7FhKzh9agCDwHcN109frl4Dx6hww3iCpShnDnPBKuH%2FeW&X-Amz-Signature=9f943705f80927deb0275bbff56c69c8b91c87a62d798a138e2b68c619b1fec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CB3C7JA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC35MynqywwQkaBFdIEzI8F9JqX0jTfkXf6qQ6DaVK%2BawIgNzX%2BJIz1kP04Nr7Q1XjTOurlnyafP9nH9ThpqtvG7vgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3iBshc0sWqawTVOircA7nGTWR5OvOVdbOBth9BRGhm2Yz4bczSKQ9nqJIKA%2BD%2FT7Y3p3omLFVV8o7ybtaOwaQWuIKBxFqyluprSnkYe4GdphOrRv7AqCr4x0XPATYwhfOF93fSgP4%2ByjqaPnGlw9IrlbSFVOFGA4ADMe%2F8qQWXZtIMxn%2FdonRd2Pq2O11BqP2nlyeJgtz%2BRZrxzxb2i%2FOfr%2FXwNEcmY7WjZxHjmkYyFOeHqeRQi2hQA%2BQ2xYlE79JPZArpUtRoQIY7IoqccPv%2BcDIWCg6opjoRhGfVnrpmekCfK274BsKbV6UcOwWdq9nOK47GIrDJ9O5jRlFhfXL4l95SYto%2BN2NvOKJD961aA42jku44cv91yE5JsX3L8iMnftGxZDQj8gCmkEqEjcqLitIH07Ect7tuEYEPTYpi6atAmA6ilLDx8aCP6s52yuWtyWyqZF6Zy401pmIFI9vVR%2BPW6GCLfef0%2BQS3XkaxX1X2CWqI0gthGXKR3fI2SMg3S9%2BI5dRVS6gU6re24RUPrgoN%2BAWfEUfjORdQEAXHobiHypeEXQfnydRrhkCEAbxAHp9PZ0RvR6%2FhqbQPOfuyLNYSzL2ZfcBSXCnMFSEAgk8Jru%2FikcZEtk2kTV2bjmuLrn3aC2D4Y5XiMJTXncQGOqUBkb0SdXRD4KDJR9Z0HjTHR2D9RzLZGAj9ET2frXzsyUsmQwK8QsmlJzkeen0ORw9nFkMl3hka9ZymIyEvErvdm6e08XciD5MNvPvkVDmYA9iZmMDKejXK3WPI1xsXRYcK86HqvJb0xul5eFGvUn86Y%2FZ3mm9vvfpxw1YMHx79etdarei2zog8WYVuvhEacVtlCFguipzjXU0Y0OaZQJrnCIBaHFIz&X-Amz-Signature=51923439195cb859b60ca65980b20f2316590214a68bb247d6ae3e4f7046031b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6BF3EA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDrWfLepgbTKj1B4q%2Bnyy0JMrXpSWpF75vESYaBMzVw8AIgJtpXGDdXUgIIHTv15TUfebDYHGzq%2B3%2BF1QoeCQvVPnEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAC%2BoTQOug%2BeQBJGyrcA6UM%2Fte2WQyDGx1E%2BW74MSCIoI%2BCXJluGXSlU6x14suX8AM5U52GgUoYpwjYtyc2s2KarT%2Ffz3CbB0q6OxDQcv09FEIi25JxwyveGBhKhLmkALJv2PNktkLlDbDFKBzczWc%2BwDtcLjl1ANONn44Dq%2FVnT%2BMtd20H%2FVY11ZinmaLIEchKGCNBQmoFZZWxa0HdnWgzVbAzCmzLMJtFLV%2FLibN0DbOlTbM4cUFDbha6nCbsZOh83ybLDxVIR%2BNAMt7ByBZiyxD6lKEgbOdKBE7jCNBMoGyJuGawxEPRjV%2FbwDpfNdf2y%2B%2FEzeHyCwJjoIUbxkZt6xwjvEsYQVi8K%2B%2BlhzUX8PPkSk%2BvjsspSX7le9bOgZzrRBlefYDClGXBtHXcrmffQ4%2BMEq8XWBLouN4yqUExMdiE3CUrx6A1OxmNs2d%2BnmsxwEBGN6VqNl%2F%2BcgiVXsQQitFn%2BxroqIaeM4ePLF2bRKE%2FjjP49b5dCBM4NECdeQYfWNmF9NhSg52Ggiseiwl9dniFwcPzM6MgU0iHqR8Lb2RWpZ03VbQN1mbjvQPP81agDMa%2BVkI4bchlNehCu8VASZV7zNENM79ufxha%2BMa433Kp9%2BykOyHYQLu%2B3J2hsEqAJ6gWOgDxNNHhMOjXncQGOqUB5EL%2F91JdnT4ijPDjtixaXJm4H9JnakeYL3T3%2BBhl5lHFUvqT2eaaqRXRkzrB3Lyt%2F5zv0PTlFUTcwW%2FNHNcV%2BsKeypT2ZIW6jxPB%2F35fnZu%2ByzOXTBh9qb4u%2FcMCVMGtO%2FZ4tccTYjixYbnFzWDFTtPyNRFhWgg5mg6tPhmzT0ou0G6C9y8lqe6BPli47qcjc8ZRfp3f9XsYw3EEre6f1WLLdvmC&X-Amz-Signature=dbac26dc370c95606109c2398ed271bc026612aa14efdbdf9d6c29fbdf668c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
