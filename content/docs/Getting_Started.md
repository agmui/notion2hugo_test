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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTD2TP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCIM4r4TUGnJSGGrKaBPMAJDJpMR9wUaSmJadyFwApvjQIgf9XSRookAF%2B3Up37HoM6GBYrWxxE5re7WYSsMql99foq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAltONPOOD5cgOQcfSrcA0ZhsryrHpkHxix6xgqTDGke2TzXnSPJYb2L9paiKalMrHqd8wlSgZm0Wv07475hdy8G%2BwzheuX9Eup8HG9UcDZRlSOIRCeZPoU2PRRpPh1PCuocr0q03FOKo2StNJ5D6T9S5kFNvU6aGNUCcNos3dKES3bfhj3%2Bn%2BPVF9NgpwKTzgGD4ayiQHyFinSu0g1xUjAgeAyv1NFYZgOtNKeUHNTY6BSsor7rn7tKoKDgeN2ibEgoAPjoTIod%2FsTzVtqxOxBXBNiWLx6yRZnoHtmzHcSN3AiLa8bU%2BIkN7aknaW4Yf54JG8PtnwdbcD%2ByDW9vc3oWJpoIyHax%2BACiLIg%2BD1RTztIeIFU%2FBKinAsMrQHPVS93o38KIOGmQZFH236gLVW4aKf9nGy%2FVQ6WUpwqa7ijTLDvRGfMCNZuer7GhTq18Nyhh3lWmGOkNqjFRT6eyjMYLgarqmuPnpNFokTt6TejLIeYX9d7ZrifQVeeNwjDvgw8uWrZM%2FNU6aykGcHk1dcACtwZxNxbNgdX3qI31%2BT%2B2%2BhbsHKdfdi6vRz6Ff1Sj%2BFwaSBNC6xk0PJ0cZzCQYds3LDdHaybR3zwTuQzgeHrCpBMYUR6SxDgV0LU13dBHk7%2FphqGVcmeaTodBMIi8jr0GOqUBiDiqp6KQTxKCPb%2FMlvVIt2WPCAlMW%2BkG%2B5bdy1mvslnEF%2BED6CVVvw81THDR1L9HUBx%2BZ%2FM2y2eq7qEIC646%2BUrem44ceAJT%2BlFBk7yl47fYLslpT9Uu2nH2YWgGWUc3Za99ja9az%2Fq%2FEA0bP9bcbRoJfW7uJAS%2FbLKQG3FSE%2B5GjIlXOZOyNVL%2FljPkb5FXMXlxemGPc%2FUzosFXggn78%2BK3Yr8T&X-Amz-Signature=f73a13403a9f2a361045b489d8291c5c6b98ef58c68f3026d26d1b74599a582d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTD2TP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCIM4r4TUGnJSGGrKaBPMAJDJpMR9wUaSmJadyFwApvjQIgf9XSRookAF%2B3Up37HoM6GBYrWxxE5re7WYSsMql99foq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAltONPOOD5cgOQcfSrcA0ZhsryrHpkHxix6xgqTDGke2TzXnSPJYb2L9paiKalMrHqd8wlSgZm0Wv07475hdy8G%2BwzheuX9Eup8HG9UcDZRlSOIRCeZPoU2PRRpPh1PCuocr0q03FOKo2StNJ5D6T9S5kFNvU6aGNUCcNos3dKES3bfhj3%2Bn%2BPVF9NgpwKTzgGD4ayiQHyFinSu0g1xUjAgeAyv1NFYZgOtNKeUHNTY6BSsor7rn7tKoKDgeN2ibEgoAPjoTIod%2FsTzVtqxOxBXBNiWLx6yRZnoHtmzHcSN3AiLa8bU%2BIkN7aknaW4Yf54JG8PtnwdbcD%2ByDW9vc3oWJpoIyHax%2BACiLIg%2BD1RTztIeIFU%2FBKinAsMrQHPVS93o38KIOGmQZFH236gLVW4aKf9nGy%2FVQ6WUpwqa7ijTLDvRGfMCNZuer7GhTq18Nyhh3lWmGOkNqjFRT6eyjMYLgarqmuPnpNFokTt6TejLIeYX9d7ZrifQVeeNwjDvgw8uWrZM%2FNU6aykGcHk1dcACtwZxNxbNgdX3qI31%2BT%2B2%2BhbsHKdfdi6vRz6Ff1Sj%2BFwaSBNC6xk0PJ0cZzCQYds3LDdHaybR3zwTuQzgeHrCpBMYUR6SxDgV0LU13dBHk7%2FphqGVcmeaTodBMIi8jr0GOqUBiDiqp6KQTxKCPb%2FMlvVIt2WPCAlMW%2BkG%2B5bdy1mvslnEF%2BED6CVVvw81THDR1L9HUBx%2BZ%2FM2y2eq7qEIC646%2BUrem44ceAJT%2BlFBk7yl47fYLslpT9Uu2nH2YWgGWUc3Za99ja9az%2Fq%2FEA0bP9bcbRoJfW7uJAS%2FbLKQG3FSE%2B5GjIlXOZOyNVL%2FljPkb5FXMXlxemGPc%2FUzosFXggn78%2BK3Yr8T&X-Amz-Signature=23bdd24958c6a2153a397a55950d5f6361135b21214462ebccfd1bc7e26a9c15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTH7LP2M%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB6kuM%2Fc%2BTCxMPWx8UCBiP%2F6A3GL6XGfaneyYv4oMxqLAiEAh1vu%2BHSFqoBiTiP5WjmoRRlaLxVLmej9wMcscLiuiz4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCPLgQWLb7y82VcgQCrcAzNF9qJwENO9LJdM7Y1io2tJkoFakznvgzk4QAQ6E4P3IlW12uPvCeATYTcTeDiudcQPPDdT2hKOZA8F5DEEb3NQKC%2FcBWvzlSikE2aaG%2F7vr3msiVIs1MegrdaSiikDVDY%2FNs2wncMP4vOvcr6tSAmxBeYNMcDIDbj8QkqcQ1Gg2KkmGvkX6qjB9F%2BJU468uh29xcPLwLBT4WINT6yhxAIinaJ5JuyGKNfI9CHCuOgW5jXlB3ynEmrX94tuC7RSwxB8SPTcWDEzrXMcwfhBZdK%2BSuRLIVFCevfIMvPGMAenEr5LPRhWgXfnDx%2BUXGbJT5Dzn47dsQ4CIUg6XUqricvLAjFZnT9Ee%2FHaeXc7FwgLCEhI963iDjfng%2FmjYicGgyZpfKJWd4hDh3ZxJiyaJpncAGlCwAlp1DZ54aW6qemalCKJzWXr%2BBh8ZCY6zvn54aPseyqczUQyLVZWUY7pU%2BcYAQ%2FVLBC9LprAe8hJDT1BADsOlo1zRg9GKKcinOnoY3bFC1wfK3sji6JkOqUprBc93dEacCwQmQXrk%2FvODvBZr%2B31XNlXYPSb5WWCh5FeAuLrhgYBZkSOaFRL86ymaqKpCSAhLlWsXDZaYzpt21C3kdYfV%2FVKOVfcP%2F%2FOMJe8jr0GOqUBtv4NDkdZklwQXCP%2BDP4W%2FlsT6BmOj7lthgTGs4QsOSiGbgAoP9oaGrmZNOXW9oqsPAhKpBd6dJQswi1v2yFRwDv6yeOFQ5P9BkT2okvJgazv2wvCXvVqwoog3kV%2BGW6g0FZWK2Irxf351NEnrdwNAbugs6DClm92q9bofPYNGpsknVt8wKG1uDa4BfZjl10vaA5%2BgwWQOCHI%2BFkKenNypjITudAr&X-Amz-Signature=bc9ca118ed2087f34741c0511433994b780391e3a549db1047ec22f1ca7dee9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TBPOMD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICxXnAzm%2B3P%2BfUTH2mwcILLJLNrcqqHcJ448iBR3x5bmAiARD%2BvMf%2FOfTJls1XguuLc8K5yOMne4cibwoig8DbwLoir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMnkipDtso6NmJw3NBKtwDcVGiPEISRJ8OJnHH4q%2Ft28j9BSBQZ1yejbMqOelCVqpFgnnYqYVGALKyjvjW7CFMpeUM9T1BXwaVGK%2FdQ4nV69JDg9Dx4ARbnRhXSg9hojJEhhnjrNtM1Uux4OxfDPWDW1PAOFPDakmRpSadFaNJQqXfbJvlAxC4yV9%2BYnWoSvEfM94jIosDx%2BFS8CkyTfA8hv9ObO99aDZXrOOJpccPM1KwYh0Y82ffgiNoOTZoOeZRAkrVgHXOBVyTOXya3dUGDivcxZnasU8Ic069hqT9I1%2B5PMCUAF1nO%2F0CW2fuc7p23g3S0n16Au%2FSdRdGrMuR6z5juOA1FzN5w7ORVZAccrtq0B21HkDsblM19nwievAD4SL2x0k%2FPPnNG8Rhrb%2FoKpptSPfZwPeYumxEcHvv5%2Bcvj0Q6f6CLNZxMIUheyGnpIDIIaDLxXYV0y2K%2BgnvWrnkOwgsxfqFQ%2F1%2FSssCghG4qFK0GlwlfB5nsduEy0K79QaUnOtRWbG8qVNJMGfqD7stlvhAaXTbbnQRSF0gedSiP1p97qS10%2Fa%2FW6n894CBosvYjWMp3ZLH7RoZgK4%2FYzE1LxzhFP2weMCc276QpZcvZ9LtangQmCjUNP8VFSNwbtgecSLBOl1wednUwgryOvQY6pgEv9Keh13q0QAxEbn2I0%2BXhvp1YARf5Rw8a3CAL1TRKn7H9GkYqBeNZtGsPPmakPCjBykwYuOlgPnEjUIUyCZG%2FDJauxrtoaqxC7dXrJ%2B41xyi0TH%2Fl%2B%2BZA6WmxbuZbwg8r0pWE361lzaaRp6maf15JYlZGQFiM76kzn3gR8%2B3GG%2BUWkWZI3e%2BA5M3Z6EF9hwp44539XoikPZf%2FvURmLmcyaeOnKGiT&X-Amz-Signature=84b0db9c8e82ed7f4eb8be58a4ffa74b7268fe58eda5499339f0a52be74286c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTD2TP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCIM4r4TUGnJSGGrKaBPMAJDJpMR9wUaSmJadyFwApvjQIgf9XSRookAF%2B3Up37HoM6GBYrWxxE5re7WYSsMql99foq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAltONPOOD5cgOQcfSrcA0ZhsryrHpkHxix6xgqTDGke2TzXnSPJYb2L9paiKalMrHqd8wlSgZm0Wv07475hdy8G%2BwzheuX9Eup8HG9UcDZRlSOIRCeZPoU2PRRpPh1PCuocr0q03FOKo2StNJ5D6T9S5kFNvU6aGNUCcNos3dKES3bfhj3%2Bn%2BPVF9NgpwKTzgGD4ayiQHyFinSu0g1xUjAgeAyv1NFYZgOtNKeUHNTY6BSsor7rn7tKoKDgeN2ibEgoAPjoTIod%2FsTzVtqxOxBXBNiWLx6yRZnoHtmzHcSN3AiLa8bU%2BIkN7aknaW4Yf54JG8PtnwdbcD%2ByDW9vc3oWJpoIyHax%2BACiLIg%2BD1RTztIeIFU%2FBKinAsMrQHPVS93o38KIOGmQZFH236gLVW4aKf9nGy%2FVQ6WUpwqa7ijTLDvRGfMCNZuer7GhTq18Nyhh3lWmGOkNqjFRT6eyjMYLgarqmuPnpNFokTt6TejLIeYX9d7ZrifQVeeNwjDvgw8uWrZM%2FNU6aykGcHk1dcACtwZxNxbNgdX3qI31%2BT%2B2%2BhbsHKdfdi6vRz6Ff1Sj%2BFwaSBNC6xk0PJ0cZzCQYds3LDdHaybR3zwTuQzgeHrCpBMYUR6SxDgV0LU13dBHk7%2FphqGVcmeaTodBMIi8jr0GOqUBiDiqp6KQTxKCPb%2FMlvVIt2WPCAlMW%2BkG%2B5bdy1mvslnEF%2BED6CVVvw81THDR1L9HUBx%2BZ%2FM2y2eq7qEIC646%2BUrem44ceAJT%2BlFBk7yl47fYLslpT9Uu2nH2YWgGWUc3Za99ja9az%2Fq%2FEA0bP9bcbRoJfW7uJAS%2FbLKQG3FSE%2B5GjIlXOZOyNVL%2FljPkb5FXMXlxemGPc%2FUzosFXggn78%2BK3Yr8T&X-Amz-Signature=4a1700a0ca52e645af532d4150802b74b4cfbf8fac73f8925e3a7c243b0fe2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
