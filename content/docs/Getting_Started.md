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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVHKH4M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAP5ehNnKkJVEJuKXSfpwxzvuCzxxwoR87cyXOPDvofOAiEAuGgfGuhrlrfecbs4QTi13L2%2BCz4j%2FynnaVmmnkxDNgoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAf2yx13W5ks6F7dJyrcAxHfLbxYYmmxozX5tS5XnZXuZYL5DlcQJjv9RnjDhJhptYpX81dUN8DnDtCMDtu%2FLm81RrC4qbpV7KVkUhIQDKJaxzrovbeieyvcuWbT%2BqICTUX1oPgHGTWRfqFb0DBmLXPiic9q5QIvAekhCmBuFiVdY295xPr4z3IWJWfpDJeODUwYKMyzcuXuH4XyzEMKm0G6tGbK1Xj%2FonqrmguHGAApBjsfPA8hyWdA22Zd0v0goj8XviYq79iVMDTgxVTjxlKaXw0kfQXGKqbwFqf62dB%2BJRQO0MnITNAHvWdexyriv%2BiK3pHkJ60TxMvrqd9p2KguK1XgPwdP1ZIlMrX7uqTMOckFNxEWcuTYW%2FbI4v%2F7ymav2FLZkW0dt%2B98NdN4sTQVJTQz1EogQo1iUIhmxn2VDSvW6VEVGdMOsdBySxSosr9zaLw2GWJsxrg62y9gYeDkvjYV0AZd7Wf3uxS50p8nHNBmQe6MlVngI8T0m%2BlhsHcpmwzsAmc0YbTRPD%2FPuqm2KthhO6t2Bko9zfwrkvBpqKvItUzL%2FB0iyUqMYn%2Feey1LoAZP2ZcyRBbgt4Eyk8k%2FwaNTZwppVTHle0JPPPAR8y8AUSBePQUcPKHovZJ%2FZ2AGL6nzM%2BY73PCmMP3OzMQGOqUBA9kG%2Bk9uAZ2h5woy%2FKOjY3qsgyu2XglMNBjNUoYrXtR93CkUqR%2B1Q%2BhJT%2BvvQk256S3Tj91eGjaMMEsl9aIxBa86fzoL1VgrYCWrhXjXlgbTSLtfcBA84412%2FzHHoaANjkgUjcmUFVbvCH4KWjfp8payAzR7JLuhKY08PXG30dLWVOkEpjz8V4%2F0sz8%2FRpZ%2BN5aoW%2FqeABYSczV2qouM76Q7S8Um&X-Amz-Signature=8ab582bf62fd2c9527a22c0d199468cdc5f33feb23ccb335ac78992190837ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVHKH4M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAP5ehNnKkJVEJuKXSfpwxzvuCzxxwoR87cyXOPDvofOAiEAuGgfGuhrlrfecbs4QTi13L2%2BCz4j%2FynnaVmmnkxDNgoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAf2yx13W5ks6F7dJyrcAxHfLbxYYmmxozX5tS5XnZXuZYL5DlcQJjv9RnjDhJhptYpX81dUN8DnDtCMDtu%2FLm81RrC4qbpV7KVkUhIQDKJaxzrovbeieyvcuWbT%2BqICTUX1oPgHGTWRfqFb0DBmLXPiic9q5QIvAekhCmBuFiVdY295xPr4z3IWJWfpDJeODUwYKMyzcuXuH4XyzEMKm0G6tGbK1Xj%2FonqrmguHGAApBjsfPA8hyWdA22Zd0v0goj8XviYq79iVMDTgxVTjxlKaXw0kfQXGKqbwFqf62dB%2BJRQO0MnITNAHvWdexyriv%2BiK3pHkJ60TxMvrqd9p2KguK1XgPwdP1ZIlMrX7uqTMOckFNxEWcuTYW%2FbI4v%2F7ymav2FLZkW0dt%2B98NdN4sTQVJTQz1EogQo1iUIhmxn2VDSvW6VEVGdMOsdBySxSosr9zaLw2GWJsxrg62y9gYeDkvjYV0AZd7Wf3uxS50p8nHNBmQe6MlVngI8T0m%2BlhsHcpmwzsAmc0YbTRPD%2FPuqm2KthhO6t2Bko9zfwrkvBpqKvItUzL%2FB0iyUqMYn%2Feey1LoAZP2ZcyRBbgt4Eyk8k%2FwaNTZwppVTHle0JPPPAR8y8AUSBePQUcPKHovZJ%2FZ2AGL6nzM%2BY73PCmMP3OzMQGOqUBA9kG%2Bk9uAZ2h5woy%2FKOjY3qsgyu2XglMNBjNUoYrXtR93CkUqR%2B1Q%2BhJT%2BvvQk256S3Tj91eGjaMMEsl9aIxBa86fzoL1VgrYCWrhXjXlgbTSLtfcBA84412%2FzHHoaANjkgUjcmUFVbvCH4KWjfp8payAzR7JLuhKY08PXG30dLWVOkEpjz8V4%2F0sz8%2FRpZ%2BN5aoW%2FqeABYSczV2qouM76Q7S8Um&X-Amz-Signature=bd288a8724b7ebd3ab225b997486e94978228ff58c807824047d9d4fbc6e2b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVHKH4M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAP5ehNnKkJVEJuKXSfpwxzvuCzxxwoR87cyXOPDvofOAiEAuGgfGuhrlrfecbs4QTi13L2%2BCz4j%2FynnaVmmnkxDNgoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAf2yx13W5ks6F7dJyrcAxHfLbxYYmmxozX5tS5XnZXuZYL5DlcQJjv9RnjDhJhptYpX81dUN8DnDtCMDtu%2FLm81RrC4qbpV7KVkUhIQDKJaxzrovbeieyvcuWbT%2BqICTUX1oPgHGTWRfqFb0DBmLXPiic9q5QIvAekhCmBuFiVdY295xPr4z3IWJWfpDJeODUwYKMyzcuXuH4XyzEMKm0G6tGbK1Xj%2FonqrmguHGAApBjsfPA8hyWdA22Zd0v0goj8XviYq79iVMDTgxVTjxlKaXw0kfQXGKqbwFqf62dB%2BJRQO0MnITNAHvWdexyriv%2BiK3pHkJ60TxMvrqd9p2KguK1XgPwdP1ZIlMrX7uqTMOckFNxEWcuTYW%2FbI4v%2F7ymav2FLZkW0dt%2B98NdN4sTQVJTQz1EogQo1iUIhmxn2VDSvW6VEVGdMOsdBySxSosr9zaLw2GWJsxrg62y9gYeDkvjYV0AZd7Wf3uxS50p8nHNBmQe6MlVngI8T0m%2BlhsHcpmwzsAmc0YbTRPD%2FPuqm2KthhO6t2Bko9zfwrkvBpqKvItUzL%2FB0iyUqMYn%2Feey1LoAZP2ZcyRBbgt4Eyk8k%2FwaNTZwppVTHle0JPPPAR8y8AUSBePQUcPKHovZJ%2FZ2AGL6nzM%2BY73PCmMP3OzMQGOqUBA9kG%2Bk9uAZ2h5woy%2FKOjY3qsgyu2XglMNBjNUoYrXtR93CkUqR%2B1Q%2BhJT%2BvvQk256S3Tj91eGjaMMEsl9aIxBa86fzoL1VgrYCWrhXjXlgbTSLtfcBA84412%2FzHHoaANjkgUjcmUFVbvCH4KWjfp8payAzR7JLuhKY08PXG30dLWVOkEpjz8V4%2F0sz8%2FRpZ%2BN5aoW%2FqeABYSczV2qouM76Q7S8Um&X-Amz-Signature=49887988b6b3d45ad2a42ab84724549c7bc02b63554e666fb9d8fee6f57f9ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GHSQ7WN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFARNMC3JJizzt4SgOyt9JrHae4tw4b5Qc7XDY35SYsbAiEA36poVSDmOIiSFzeQIL%2BW1fQOeOrXW213R0zXPa5Nocwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIpAl8RnYP7LGF%2FpwCrcAyF8tTPUMi8m5Pf0yS9TG62nadj%2B6FwAEzYlHLD8hny%2FrOXZ4oz8UK%2BfnlwFP4%2F5wfk9a56bAT0BGaBke9luVnRXTPPLr%2B43pRpiOic8Jvjjm17W%2BCRLIzD5KDebVYU0Ybrabbd2VLP96HV6UlapiMOQsTPz79KGBQuPclP3ALtw1s7YorQG51KCRrbTTbF4%2FVLDtOpC6CV8v%2BXzVoUQVnm2siRpbHWL1OV4Eq8xl0PJSAJN3PyKYyjJLGpZ%2BBnDL6zZNFySVuvbdn5bXMbMP5RNBEloseY3perIO%2Fuxckr12jmO6RYeCZCi1ja8ozco%2BFJ%2B%2B7z9jJUcBTaTjNe%2FnCKxQ0KiKzxxmCfNY1wHy9ptSlUulCCMpRX4UvCufj7oNsqaCSfTPxrZILirvB5VJr0QuUyxziwgYW9VCZW8PlCS1ctRhuAh67qNJ1jyqbpg%2B1T1Cbi5GvuVIykCUc4DGGBLlmDznYz8D%2Byl51sfa%2FrmgtMoq1I6geXYKp%2FamlTMb01NFmFQmCMdwZPQuEsstqU4kdeF%2FhOAR59vUCzN5ruAG7NvSYPNrOJb%2FLOHf1mM0D0eUbQIdCP7WX8sT4%2BXeEBsogo7s1G0kB3Kz6rwILcKYg6Mg9iqpcEl%2FzNLMJHPzMQGOqUBGF2ylKH74WUW%2FIokX%2FQm5TGFwp7SezZsqKXeY3jhtdS9bWdI3dKaTmzaVct8K4mnPG5NEb4CTs6eZhFsZdd%2FDoTOvNHfBfMfjxXxz1UX9CzPijSd1YXS3cGU5go4BFIDAqUZuAod0Uis%2FT4xkxlZxYxxZxS1%2B9W4RKBMJoS4nB7h0rWs%2FmA2f58KJ8rVHw7FgIGZRZ1e4JLSK3aG6HwhpGAe2u0s&X-Amz-Signature=64e52499d8434a49ad83f0132c211cf372a7c3b3c745be5aea2331086047ce71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX2I2GZ7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDoaa5h8Qh63xkrmSerTKWtFlOxBMq8IxaFKIVdfm9OpQIgUoBZWCKtXvUHHbLKpZsBD1zgqovADE5bYD3r0R9HXXIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ%2F1sWQhBH3po5pcpircA3L%2B3tGEF3xm%2BZzEwJn%2Fk4T61wNi9tWF92oO7Eywg2HjC%2F%2BmHu5UBjGjhToOI4YBORta1rDJZVcsJ5LAD4xhrtfe4lyMtYu8wyX3XHv9TgHrWy9EcYW0SQ%2B4%2BaHY9FXPypIDOY88j9mCTw31XZ4LaI5WkzAGluJkDxSHicQGl8my7aFUWSJ0LGxXYiGRjQOkDJz%2BRIkc8hKYRWRRawjU4xi%2Ba%2Bn6YLAY1M3FcFgvVVNhUpjvTUjxHNF1KuK0MNCUCsdhHCELUwB3iETHq2JXRHg04OtQTymyCbRG5mcnAtn2I%2FEo%2Ba%2FuqEySCIPJF9t7fQV4BlFpAF9qkNvnSCmWFbtR8mbOtrWDW5Q2ctpYFgpBoxNUxLn2E92NVU2N8gXe3S5mXxd8uqHI0LOR%2F8ASzmGzTnUCSlnFMXB1yp2KcxYG3KunK1dekPu26kreQePY7sjSWNsAPZ5m08rQu7124Bz3ehYLA%2B5%2BOkiakjrdHzfZZim43HqKzFuzNwNvSEvIaFoJ8Y7Wlxu3WqvUdxk6CRZ4hEjNQ5miUlV51sSCzPm%2BqGpWG8bkcqJsNPBs3wX48vEmW8h3cktbq6MwoeoThTWeiWzN7bd2ve2hyaWZwEXwShpyBgUbYYca2tUoMKPPzMQGOqUB1hXQJ3uRsjIYhRy1Erj2ahd3pygaWOmt9H7k1tdWHeSDP7w88gOkuTKnd%2BzXm8OFepgfsHympX75a7M7Ox4SO1%2FT8S8jsAUDhbavRQAHC6cdGKSdBFKgH27AjaJRul82vNJL4uwIYMww7zccrTUEG%2BnL%2FZwwD46XBIi3BrCw0%2Btpuiy%2FM056WI50dqmeNh6ESNLRDuF3b9yzmHdNVBC9%2B7Xeuetj&X-Amz-Signature=63f2792f4b5054e68fcd4d435f4a07fb6c57e6c1a17399102ac9715a96dd1856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVHKH4M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAP5ehNnKkJVEJuKXSfpwxzvuCzxxwoR87cyXOPDvofOAiEAuGgfGuhrlrfecbs4QTi13L2%2BCz4j%2FynnaVmmnkxDNgoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAf2yx13W5ks6F7dJyrcAxHfLbxYYmmxozX5tS5XnZXuZYL5DlcQJjv9RnjDhJhptYpX81dUN8DnDtCMDtu%2FLm81RrC4qbpV7KVkUhIQDKJaxzrovbeieyvcuWbT%2BqICTUX1oPgHGTWRfqFb0DBmLXPiic9q5QIvAekhCmBuFiVdY295xPr4z3IWJWfpDJeODUwYKMyzcuXuH4XyzEMKm0G6tGbK1Xj%2FonqrmguHGAApBjsfPA8hyWdA22Zd0v0goj8XviYq79iVMDTgxVTjxlKaXw0kfQXGKqbwFqf62dB%2BJRQO0MnITNAHvWdexyriv%2BiK3pHkJ60TxMvrqd9p2KguK1XgPwdP1ZIlMrX7uqTMOckFNxEWcuTYW%2FbI4v%2F7ymav2FLZkW0dt%2B98NdN4sTQVJTQz1EogQo1iUIhmxn2VDSvW6VEVGdMOsdBySxSosr9zaLw2GWJsxrg62y9gYeDkvjYV0AZd7Wf3uxS50p8nHNBmQe6MlVngI8T0m%2BlhsHcpmwzsAmc0YbTRPD%2FPuqm2KthhO6t2Bko9zfwrkvBpqKvItUzL%2FB0iyUqMYn%2Feey1LoAZP2ZcyRBbgt4Eyk8k%2FwaNTZwppVTHle0JPPPAR8y8AUSBePQUcPKHovZJ%2FZ2AGL6nzM%2BY73PCmMP3OzMQGOqUBA9kG%2Bk9uAZ2h5woy%2FKOjY3qsgyu2XglMNBjNUoYrXtR93CkUqR%2B1Q%2BhJT%2BvvQk256S3Tj91eGjaMMEsl9aIxBa86fzoL1VgrYCWrhXjXlgbTSLtfcBA84412%2FzHHoaANjkgUjcmUFVbvCH4KWjfp8payAzR7JLuhKY08PXG30dLWVOkEpjz8V4%2F0sz8%2FRpZ%2BN5aoW%2FqeABYSczV2qouM76Q7S8Um&X-Amz-Signature=505791f0011bb48e3f15d8124c8b638c1cd0066fc3261190415a2223d638fd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
