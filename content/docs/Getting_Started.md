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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIA55ZL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX33RxPKzN%2BUFOEBNJ768sNKZEH7q%2F6Zyz56JhwPHUMAiAzUHB8l8Q6A5B7fVXTu97K7qzRV0haEfPODr9B%2F7bQUyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXr6BPH1BkYfvbCt%2BKtwDBoIzWTkxdcfPqkduzktpXVFU9DV7J5xwFFDJP6Dpewo9uii6v1CKWvM%2ByiPlraK0e%2F5thqHsK2eVq6c0JQFqcMCCUE5o9W8al4QbeOgAUcEtHkKO9eDnpjaRSnofo%2BFgCU2hTYhgB28OmM1Hl0a%2BD1858DQ8WAmm8B%2BpGofWA%2BPCuI6V0V%2BLtahwm4HQEyybVeUuQU8Vmo7A3FWKfzLZi0JC8lLx7g7WAKAG%2FP8PoQQnlWwHw4uSlIbA5OyK02NlSCZnmdVrSzE5bPU5GGY47eUlUFqyU1RFgu07GWPZ%2FEFKmqT7JS0bB1OPtcl7MgDjZrD64zQHoJ9A2SoJ3B0U9ImvInmd4T5Qj1xhLjjRpmCkiiqyfUbgNgmKUEMboxabXOvBtmwyAN5J5w7o%2FOCS4I3y2nEEB8nG%2F1Eocax9MkhQJqqeSXJ5cqJUoDZ9UpQH0g6RRkb%2BJr%2FSj88NVDTnvz%2F8mB0RW0WkDuoD8effsRBcbZeMqzDNV1EdlxtE5N4ieR1jfaPSQjqJMAq8hKUtiHkiY5GVf0WwP3%2BPZBgH8NhlD8HyofWK07L2IjY6LtKPfpW%2F7sK8%2FKc5BkpER1hwv6Ixi1QD8cephCGcP6GsgfU1dP4A0NkePct2G9Aw6aaMwwY6pgFk%2FOOry6AWUEvRARth6swCnvRlS67A1yNwGFi9ck24awuFEWmZ%2FVjcVRdiiTRa7SeieoExmhnlUPT3DbbBZfk%2FtuQTR6n2Df1br%2BNwx6794JCVB7XBXWLT4YE2LdvhjFlUFqAOOwWJJ0gIO1enpmRcoZSRrrkF1Xlyc5Z70sxNYOwCsVVXw2Imm9P9PLgwogLKbLq8LZ2wPt08URYN%2FHu461pC8cQm&X-Amz-Signature=8ced6ce1562f01f03a8e18fcdc60af0e5dbd71cc390d84bcb855e69578261887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIA55ZL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX33RxPKzN%2BUFOEBNJ768sNKZEH7q%2F6Zyz56JhwPHUMAiAzUHB8l8Q6A5B7fVXTu97K7qzRV0haEfPODr9B%2F7bQUyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXr6BPH1BkYfvbCt%2BKtwDBoIzWTkxdcfPqkduzktpXVFU9DV7J5xwFFDJP6Dpewo9uii6v1CKWvM%2ByiPlraK0e%2F5thqHsK2eVq6c0JQFqcMCCUE5o9W8al4QbeOgAUcEtHkKO9eDnpjaRSnofo%2BFgCU2hTYhgB28OmM1Hl0a%2BD1858DQ8WAmm8B%2BpGofWA%2BPCuI6V0V%2BLtahwm4HQEyybVeUuQU8Vmo7A3FWKfzLZi0JC8lLx7g7WAKAG%2FP8PoQQnlWwHw4uSlIbA5OyK02NlSCZnmdVrSzE5bPU5GGY47eUlUFqyU1RFgu07GWPZ%2FEFKmqT7JS0bB1OPtcl7MgDjZrD64zQHoJ9A2SoJ3B0U9ImvInmd4T5Qj1xhLjjRpmCkiiqyfUbgNgmKUEMboxabXOvBtmwyAN5J5w7o%2FOCS4I3y2nEEB8nG%2F1Eocax9MkhQJqqeSXJ5cqJUoDZ9UpQH0g6RRkb%2BJr%2FSj88NVDTnvz%2F8mB0RW0WkDuoD8effsRBcbZeMqzDNV1EdlxtE5N4ieR1jfaPSQjqJMAq8hKUtiHkiY5GVf0WwP3%2BPZBgH8NhlD8HyofWK07L2IjY6LtKPfpW%2F7sK8%2FKc5BkpER1hwv6Ixi1QD8cephCGcP6GsgfU1dP4A0NkePct2G9Aw6aaMwwY6pgFk%2FOOry6AWUEvRARth6swCnvRlS67A1yNwGFi9ck24awuFEWmZ%2FVjcVRdiiTRa7SeieoExmhnlUPT3DbbBZfk%2FtuQTR6n2Df1br%2BNwx6794JCVB7XBXWLT4YE2LdvhjFlUFqAOOwWJJ0gIO1enpmRcoZSRrrkF1Xlyc5Z70sxNYOwCsVVXw2Imm9P9PLgwogLKbLq8LZ2wPt08URYN%2FHu461pC8cQm&X-Amz-Signature=0017af460f90877fb7d8588b3e393937589a1e6549d0264444b4dae9069c88eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIA55ZL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX33RxPKzN%2BUFOEBNJ768sNKZEH7q%2F6Zyz56JhwPHUMAiAzUHB8l8Q6A5B7fVXTu97K7qzRV0haEfPODr9B%2F7bQUyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXr6BPH1BkYfvbCt%2BKtwDBoIzWTkxdcfPqkduzktpXVFU9DV7J5xwFFDJP6Dpewo9uii6v1CKWvM%2ByiPlraK0e%2F5thqHsK2eVq6c0JQFqcMCCUE5o9W8al4QbeOgAUcEtHkKO9eDnpjaRSnofo%2BFgCU2hTYhgB28OmM1Hl0a%2BD1858DQ8WAmm8B%2BpGofWA%2BPCuI6V0V%2BLtahwm4HQEyybVeUuQU8Vmo7A3FWKfzLZi0JC8lLx7g7WAKAG%2FP8PoQQnlWwHw4uSlIbA5OyK02NlSCZnmdVrSzE5bPU5GGY47eUlUFqyU1RFgu07GWPZ%2FEFKmqT7JS0bB1OPtcl7MgDjZrD64zQHoJ9A2SoJ3B0U9ImvInmd4T5Qj1xhLjjRpmCkiiqyfUbgNgmKUEMboxabXOvBtmwyAN5J5w7o%2FOCS4I3y2nEEB8nG%2F1Eocax9MkhQJqqeSXJ5cqJUoDZ9UpQH0g6RRkb%2BJr%2FSj88NVDTnvz%2F8mB0RW0WkDuoD8effsRBcbZeMqzDNV1EdlxtE5N4ieR1jfaPSQjqJMAq8hKUtiHkiY5GVf0WwP3%2BPZBgH8NhlD8HyofWK07L2IjY6LtKPfpW%2F7sK8%2FKc5BkpER1hwv6Ixi1QD8cephCGcP6GsgfU1dP4A0NkePct2G9Aw6aaMwwY6pgFk%2FOOry6AWUEvRARth6swCnvRlS67A1yNwGFi9ck24awuFEWmZ%2FVjcVRdiiTRa7SeieoExmhnlUPT3DbbBZfk%2FtuQTR6n2Df1br%2BNwx6794JCVB7XBXWLT4YE2LdvhjFlUFqAOOwWJJ0gIO1enpmRcoZSRrrkF1Xlyc5Z70sxNYOwCsVVXw2Imm9P9PLgwogLKbLq8LZ2wPt08URYN%2FHu461pC8cQm&X-Amz-Signature=6b8849fda67edac1379dbbc78dd6726eafceca39497121319621f25d67ab4947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZESMFD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaek6g6GTzs754i5KDCCDFA0dVppRPLbo0SHP3TT%2FqcAiB%2FGL8ZHSJnmgklPuCovOdhEz1HbY63JfsNMpBhx4xQySqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbK3L0t7CNWYGVp4YKtwDbnWYhqhGW7t9bDSU1VBMBXYZIdH1c3Rdai3iPJMi25EnNASKgpfycJK6J%2BFcIgVmskSUdRReiUxUKX9U6fKGUy9joviMnsakeFZvFWveul7uBiVoyPetxmjDxmPOGhyttA%2FQMvi3YGTsQaJsODGmZwtPibrQSh6VVbmXxTTGKbekdEFozmv9%2Fx7%2FfmbeQAH%2Bzazv7lqVuamCmOsTvdIlkQWaI7AD4DjmIcSPQyTtXdo4ftjnrPQ1ixrkBdcj25bIVsvKtQabHrRhB2qbWfZEltxNPfXXMF62qHwcHfQd1TyqLqZ0KXAyIGBwWYdDaNClcGBht1vUDlZ%2FxpKcwm%2FCliWqO0TzzeW3RWaQkbMJQJG2fvyc%2B%2BRUzbREAIpeJuHOItIhg13UmK9kTmYybAUiIPrsgZ5aESp5%2BTKVFT2XxYWwJb6Miq7QfUHqG6QLExlOzOMGsl%2B63Ose4%2B%2By7emkS5dnldxXvsZRlfI4cHrZ9X14wTni2UWYhc%2FHVg0ATW%2FAHBAL0abejo33PTIO7sX0rjF4QB9NiE4FAIZDPGZPTiHe83QwLaNLzXwl%2FWmd2IKVnKbsYbDIT6UW1VlKXhzSsEtz2fkYskjHEWqusv1tUgMeOdu6UNfK%2FeQdvikww6eMwwY6pgErVpvD9VbkPPNAGIy5NNTAla0s2Oy6K0zSvAraCzS4nSar%2BoZQGm8GgFCjMUAx4P8PPKRaepBDRBLdB%2Fit7gNbZIsMBD3I0SI5WvEHKqmRxFjo5zNhGXs7s0i7Yz4eCG%2B5f%2F1XKq99ESDp8B1mnUZKARXc%2F%2BFSdCR0v%2FmCWfoPsGkhdRoKzl1Zd%2BsI9JAJ3OMt63EsAY0wwN%2FXrC1PxtDjs7muxu%2BB&X-Amz-Signature=c2ff65d842bdcf4843e194bbc953d2872456e552d79d02810bf0132c2fd791e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6L3UNIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzXhYIsBsQ%2BlQdkKu2ZbKj%2BiCeOHOr4ihjKmk2YZuS6AiB5hjcgDXz%2FO0EGT8llzFkeXJ6IwAduDnB6vOUTFkqNGSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIaAGUDkuDyFbV8MUKtwDY9IQG7%2B11amOmWgrTI8rbXkvOBZlib%2BPGCZxHPNtlkyFQnCJ3Hrx0FjZXx9lWzdO93TiOaUd2Q1PJ8tGcioNnpXHppURSKxAtWFmje0RVnV%2FwO92c2IC1%2FxOuKxZm4m9M1WcmmOo2MezhbHIYZPitW6TmU6Nm361uv0a7n%2FLotGWWowD0PeMjrXLKO6Zv9Jo1s%2BfXnjFc2QsWM7GXLcb%2BoTGAN3Kjy9xIHprRr%2FH5jmK1eatO2tstbgdizqDyCtmMhC6UCI1qmUjoNFmJIBo2GryzlnHncVZTfKbk3hVxvB0H62lEPLbuiDpWkn2rt7CNb9vJJYdMjnJ%2FnR208SylHy9xFzznn79iB1ekpHDnWaIePXOVpwIn2KOLqnpIis%2FC1JtrARNDt1YUzFpM19OR%2BFA0l5qBqXG3YNFTRKiaPlT3vSgfF45pgs4opqDOnjAMVpdripDwkJwWQUzetC3Dv5%2BaNnYhGBAvAG6DiS1oquGLQoepI9OhC5L1NLksWpuhrOrCX1bfbUdj6IxKHsVYwv7flUqEZ7F3hQwgrit6quqWy7WbwT31%2Bj9JZIgF3wU9F84LtYHb4y40Dt8Q8uLq%2By6wxHRZuw4rNuBEMWTtxZOW2uNYD8DPtDmNc4w4aaMwwY6pgEhYRa7nI%2Bb85TTV91HTGPL69PJoKbZG1HQmF8XJtS2CtkEBHdjTuasep5FIqfSUiXK1%2BlQrQtiCDu2Twd7vPVXnYt%2BJWdmG1CqhrgIxHJJRAt0cjkQz4EJ5XrGrUMkedST%2FLF26LrZjRAmQRFb5wvEaY1kZbO07jbDr8GORgJ7hMZngrcnnzg4iG76GGc3d8xHYK1JYSr92bPvpXkASSQnNq4Q2puT&X-Amz-Signature=f823dbab223c03711c64744496afe22a27ffd0ae720a6ebdeacb54b0abcc2a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIA55ZL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX33RxPKzN%2BUFOEBNJ768sNKZEH7q%2F6Zyz56JhwPHUMAiAzUHB8l8Q6A5B7fVXTu97K7qzRV0haEfPODr9B%2F7bQUyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXr6BPH1BkYfvbCt%2BKtwDBoIzWTkxdcfPqkduzktpXVFU9DV7J5xwFFDJP6Dpewo9uii6v1CKWvM%2ByiPlraK0e%2F5thqHsK2eVq6c0JQFqcMCCUE5o9W8al4QbeOgAUcEtHkKO9eDnpjaRSnofo%2BFgCU2hTYhgB28OmM1Hl0a%2BD1858DQ8WAmm8B%2BpGofWA%2BPCuI6V0V%2BLtahwm4HQEyybVeUuQU8Vmo7A3FWKfzLZi0JC8lLx7g7WAKAG%2FP8PoQQnlWwHw4uSlIbA5OyK02NlSCZnmdVrSzE5bPU5GGY47eUlUFqyU1RFgu07GWPZ%2FEFKmqT7JS0bB1OPtcl7MgDjZrD64zQHoJ9A2SoJ3B0U9ImvInmd4T5Qj1xhLjjRpmCkiiqyfUbgNgmKUEMboxabXOvBtmwyAN5J5w7o%2FOCS4I3y2nEEB8nG%2F1Eocax9MkhQJqqeSXJ5cqJUoDZ9UpQH0g6RRkb%2BJr%2FSj88NVDTnvz%2F8mB0RW0WkDuoD8effsRBcbZeMqzDNV1EdlxtE5N4ieR1jfaPSQjqJMAq8hKUtiHkiY5GVf0WwP3%2BPZBgH8NhlD8HyofWK07L2IjY6LtKPfpW%2F7sK8%2FKc5BkpER1hwv6Ixi1QD8cephCGcP6GsgfU1dP4A0NkePct2G9Aw6aaMwwY6pgFk%2FOOry6AWUEvRARth6swCnvRlS67A1yNwGFi9ck24awuFEWmZ%2FVjcVRdiiTRa7SeieoExmhnlUPT3DbbBZfk%2FtuQTR6n2Df1br%2BNwx6794JCVB7XBXWLT4YE2LdvhjFlUFqAOOwWJJ0gIO1enpmRcoZSRrrkF1Xlyc5Z70sxNYOwCsVVXw2Imm9P9PLgwogLKbLq8LZ2wPt08URYN%2FHu461pC8cQm&X-Amz-Signature=905d67ee4cd3ded7d45a8541a59700159d558873f4fd9df4b13754621a4283cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
