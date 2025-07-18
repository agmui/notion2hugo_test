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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQCUDY2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICW4V3AtFZWVhUeVrp0CmxIYZouC7vzsgoiosHYEuyv1AiEA9eN8%2FLIVdQswFo9RywbFwIpqeVru3UHWOfO5l%2BVi9igqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMABIs%2BCOgpuGTN8cyrcA0eLbI0tlMxUZF9E%2FpdmUrr5W4dMhxrT%2FDNryvUSkpYgOFmEjXdyIJhz5gdJY1%2FIFzmgrnzE5I1MD7oaJ9o%2BlLG3ed8DAhCmLmnWkn%2F7vkd%2F8UyaU3sOfDoFAiW6IhJuzoZqZwu1MgyWamN4d9LHWO1ZPKVukKLkiexCkgfDn8OvSJE8sukLNTB2%2Bq4IYYYRmi6%2BOihNYBsC%2BjHyezzIRUwFel6bgU3VPiTogNZ8dMKCGJ11k8NxrpYFxcmNnsDPQhFB%2BNm8d%2BBCmMd8UXfZJmbibEJOWh%2Fz5q9FlDsjJ3Oz29ybX5aQeB0wo1aB44eTOPnMvVlSPDrXLI%2FdMbIqfvvl%2FPyL2b1JbgrD3j%2BGER4ollPC4WwQpJBEXp1ouPwxMPAAvl1TgynR5omxMsVtuadrAnrSOYVSeClqv3soubE5DUOo7ARVBV9WAqwVycjiKM1gwyTyMrjmdpNTEQBtPH36OtFl8oO1mbRe94VHOMoe1cTZ20d5oQ73vXl2JzuWt5btefzRq0clq9VeSuxY5Ms2ZdBZXkBGpswQ35pl7891a8idPKilmsHZvpHMcTrrQbObuCnxDEjVh02ccuJSwgxpcxLsYEMwYYLNJcZBfRZxPLdQYZBLxmxcmV2dML%2B%2F6sMGOqUBePKFpzuaDe84jAcYkcGEcOp1WXx02jSPyWM4UI%2B7aDAz3pXfn57WDeKD0%2Fs1zpu6Bv212%2BIvDGmhaJOv1MFnRpUoU%2Fh9BZDT9DGV2mdEk1RdvcPLPgG%2F3WIp%2BbTZlgqirZoYS5JuuLl8ma4E1Zm6JK76H6SJotZBMgvlXGTIOviUF0MZ%2F7JYFvDdoV1%2BTEzNT%2BVt4b4%2FpsDIsuunTm2j2QBGLzxb&X-Amz-Signature=b43caa870c51e77957283229a72e5c47ae9b255a8dd3504c03cedd0a2285456b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQCUDY2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICW4V3AtFZWVhUeVrp0CmxIYZouC7vzsgoiosHYEuyv1AiEA9eN8%2FLIVdQswFo9RywbFwIpqeVru3UHWOfO5l%2BVi9igqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMABIs%2BCOgpuGTN8cyrcA0eLbI0tlMxUZF9E%2FpdmUrr5W4dMhxrT%2FDNryvUSkpYgOFmEjXdyIJhz5gdJY1%2FIFzmgrnzE5I1MD7oaJ9o%2BlLG3ed8DAhCmLmnWkn%2F7vkd%2F8UyaU3sOfDoFAiW6IhJuzoZqZwu1MgyWamN4d9LHWO1ZPKVukKLkiexCkgfDn8OvSJE8sukLNTB2%2Bq4IYYYRmi6%2BOihNYBsC%2BjHyezzIRUwFel6bgU3VPiTogNZ8dMKCGJ11k8NxrpYFxcmNnsDPQhFB%2BNm8d%2BBCmMd8UXfZJmbibEJOWh%2Fz5q9FlDsjJ3Oz29ybX5aQeB0wo1aB44eTOPnMvVlSPDrXLI%2FdMbIqfvvl%2FPyL2b1JbgrD3j%2BGER4ollPC4WwQpJBEXp1ouPwxMPAAvl1TgynR5omxMsVtuadrAnrSOYVSeClqv3soubE5DUOo7ARVBV9WAqwVycjiKM1gwyTyMrjmdpNTEQBtPH36OtFl8oO1mbRe94VHOMoe1cTZ20d5oQ73vXl2JzuWt5btefzRq0clq9VeSuxY5Ms2ZdBZXkBGpswQ35pl7891a8idPKilmsHZvpHMcTrrQbObuCnxDEjVh02ccuJSwgxpcxLsYEMwYYLNJcZBfRZxPLdQYZBLxmxcmV2dML%2B%2F6sMGOqUBePKFpzuaDe84jAcYkcGEcOp1WXx02jSPyWM4UI%2B7aDAz3pXfn57WDeKD0%2Fs1zpu6Bv212%2BIvDGmhaJOv1MFnRpUoU%2Fh9BZDT9DGV2mdEk1RdvcPLPgG%2F3WIp%2BbTZlgqirZoYS5JuuLl8ma4E1Zm6JK76H6SJotZBMgvlXGTIOviUF0MZ%2F7JYFvDdoV1%2BTEzNT%2BVt4b4%2FpsDIsuunTm2j2QBGLzxb&X-Amz-Signature=49be35214be39ccf9e23903ccdced6a15a0d3d0bbbfd7b6ffff68d85fe718df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQCUDY2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICW4V3AtFZWVhUeVrp0CmxIYZouC7vzsgoiosHYEuyv1AiEA9eN8%2FLIVdQswFo9RywbFwIpqeVru3UHWOfO5l%2BVi9igqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMABIs%2BCOgpuGTN8cyrcA0eLbI0tlMxUZF9E%2FpdmUrr5W4dMhxrT%2FDNryvUSkpYgOFmEjXdyIJhz5gdJY1%2FIFzmgrnzE5I1MD7oaJ9o%2BlLG3ed8DAhCmLmnWkn%2F7vkd%2F8UyaU3sOfDoFAiW6IhJuzoZqZwu1MgyWamN4d9LHWO1ZPKVukKLkiexCkgfDn8OvSJE8sukLNTB2%2Bq4IYYYRmi6%2BOihNYBsC%2BjHyezzIRUwFel6bgU3VPiTogNZ8dMKCGJ11k8NxrpYFxcmNnsDPQhFB%2BNm8d%2BBCmMd8UXfZJmbibEJOWh%2Fz5q9FlDsjJ3Oz29ybX5aQeB0wo1aB44eTOPnMvVlSPDrXLI%2FdMbIqfvvl%2FPyL2b1JbgrD3j%2BGER4ollPC4WwQpJBEXp1ouPwxMPAAvl1TgynR5omxMsVtuadrAnrSOYVSeClqv3soubE5DUOo7ARVBV9WAqwVycjiKM1gwyTyMrjmdpNTEQBtPH36OtFl8oO1mbRe94VHOMoe1cTZ20d5oQ73vXl2JzuWt5btefzRq0clq9VeSuxY5Ms2ZdBZXkBGpswQ35pl7891a8idPKilmsHZvpHMcTrrQbObuCnxDEjVh02ccuJSwgxpcxLsYEMwYYLNJcZBfRZxPLdQYZBLxmxcmV2dML%2B%2F6sMGOqUBePKFpzuaDe84jAcYkcGEcOp1WXx02jSPyWM4UI%2B7aDAz3pXfn57WDeKD0%2Fs1zpu6Bv212%2BIvDGmhaJOv1MFnRpUoU%2Fh9BZDT9DGV2mdEk1RdvcPLPgG%2F3WIp%2BbTZlgqirZoYS5JuuLl8ma4E1Zm6JK76H6SJotZBMgvlXGTIOviUF0MZ%2F7JYFvDdoV1%2BTEzNT%2BVt4b4%2FpsDIsuunTm2j2QBGLzxb&X-Amz-Signature=b3c72daddb85d8c577766aa416fd1a0d9b1c32212d2a01cf6eedb82d8f105e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QCSOZH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAjME%2BEgSXwqgW%2BWH05EVe4otikvS%2FYhYQ4VeEnd2mZpAiBNhmtX34mKCIqrq9h2atkti4UOColN0PWta%2BXJfxzY7iqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVs2VIgAJqcKPJ9UKtwDb%2F%2BC4e1QTHaI0d8A3LJgWCNJS4FQR0%2BmBdf4nod2faOfCd%2FcVvbfUHco5GiK2pofE0UXyUkor9jIe2JUKDbd2ZZTwpHn5LTueDmWXzZXrCgkY0AtFLB4A4PenqtFLvpExyhZrXNXRQv4%2BlIoAv0vAYZ%2FAtNLTPuWfR61KMC0KjP526qnXXpZGIGuzIH2eE1iL96rEKUIQ3pLTEfIfbUhCm%2BOo%2BKZt2BTGseDEVsaXmJUh5Lt61CWGVoujwTCBInjvFKTiMKP2CpLNhYWKyGjluBp%2FotBUavpan4zmFSoKjvhBGKL6K43xDYVpLqzsfmLxLH2xuKpdl%2FicV3ZNjsjdEew9CGJh9sUWQ%2FIvGUQlbBRKcnIQ70lz5F3F6B49Rlt1nPPoQWuR7wvQa1%2FAYshdF1e2t8BjEvzl5F0V9eMkk3e93xwDbMmzbUNexhOypMcwar%2FYXO1rEBq%2FKsethx9M6Vq5Hk4gJ2qPHJeyOP0yeG2ztDEgvWh7wjqBrS5e0zMfMNrNPN%2BnyAZ%2FAx3700wQ6%2BkB3Dk9AJC0xgs%2BENOiJYhTLPyuFlwqDcbeNfiU6H902Ny%2Fyj53aglWWZKyoeSu50YYMw5vc8rc5Vn5T%2B8KUEjRKhcuRiesZJp02Ywir%2FqwwY6pgGB%2BB45l78FOe6rmDzxTU50OZZSWXT1c%2BwSlYo9YIB4ku7%2Fhjm%2FOz5H5h%2B3LrTDn8N2n%2FSwMHkuWYNbkpY0ruTewjrz1vCZyubu2xSwRMHB8bFLyRuElKf4Lz16uaDDe%2FdrKifZQ3lHrdmbZaMjkU1BoicwrlBKgEHZcxZtfltV3EfU5BjMDBTF4sOL0%2BqYmuu5KiUlysQf46pWjNgF06thtjw4kmz5&X-Amz-Signature=324ba6d3f6b739658e6756e0f4b2ffe07341b9b1849ef86dc4d79220822eff3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKYIKTKO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBOVoQzvJ9Lw6Dk%2FqgYvS1Lhg3AdW7H0O69acHyY7cqmAiAG0%2FbT1Q%2B%2Fbbr0cp%2FkyX8ggc9xmt6JOn0%2BS9TZeK9jeSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVZE9w3oz7JM4af%2FKtwDCdr6k8T04hudKb1pas0EOI%2B4m5ROn7kchbTTHQAIcZ0obTEFZXjOwBiJzPWNeYm1HLfHxLb%2F5TqXGZA6gSVgr0lChfPSEzsCP6AzEoUBWGOF43pSwQhc1lmeEq4z5pJ3IG8iRA5huHteTTb%2BmXChpGcUIT5VqXKgruuz2%2BW0TBRgnCLMJz9B8Mr1dxV4eQx4BIAe3UsdyNhSoiK38Ko3OV9XJCi69nzJYeOpsww9lB75nY6Z5wDPXvCSLpvqzYNT%2FxNT7AS4xR%2F%2Byja76cI5TdxUAPSXJGseLpyr9fseIT9iUqNTWW1bERyE4ir74Ks0D3anfoJUwqi3hJiKFJCLsSSVl4lJam4HPltvhd6Nddy6Ag%2FOpguWdjH7p1V3NS6JGwkGSeqNqzsgZbG1LjEsML9gH%2BdzY77QidDfVZ3VIl%2Bzkcq96ttoiARrB20qDoPLtHDc2pXqNd920sBkQousLqI4%2FOIXGDzwOOEWyZws0WRN%2BEkw0IqC3HyADhe9JnQAVpAktcihKN%2B0FoOlmUE5REw9kKwidk6OqKIIWVn3sq7F3IFzk2%2FkvWsWIBYGQRzW08vqnyxyl0k0TFnXPLdAxL3VgmLHclEPk7Y7rds0fGjGmFoT%2BUsarlIayUMw9L7qwwY6pgFujcaW44Dz7lMnYn6sqGAChz5ANgpx1yJm2%2FNXJG8shcpUWenF5tahHHTrcus5AqYDFdEcWPHyrEImFyYNi%2BG7On2%2FSkYcxQkh%2B25AdTc3Q17Kbr6VhEuR3gXVpwp8cTsGBi1vk6WOrH0LAW2t0zsMVpKbMHFwj2fr0H7wlYU4z9F5lGCbMoAvNrDfchialvI5gpATwPKZ6FhFQ45c6BYImzvb3uKW&X-Amz-Signature=e0c852bbc74572ab8eadd442c1e30630ec16b9ba7368bfba1235de07ab066c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQCUDY2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICW4V3AtFZWVhUeVrp0CmxIYZouC7vzsgoiosHYEuyv1AiEA9eN8%2FLIVdQswFo9RywbFwIpqeVru3UHWOfO5l%2BVi9igqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMABIs%2BCOgpuGTN8cyrcA0eLbI0tlMxUZF9E%2FpdmUrr5W4dMhxrT%2FDNryvUSkpYgOFmEjXdyIJhz5gdJY1%2FIFzmgrnzE5I1MD7oaJ9o%2BlLG3ed8DAhCmLmnWkn%2F7vkd%2F8UyaU3sOfDoFAiW6IhJuzoZqZwu1MgyWamN4d9LHWO1ZPKVukKLkiexCkgfDn8OvSJE8sukLNTB2%2Bq4IYYYRmi6%2BOihNYBsC%2BjHyezzIRUwFel6bgU3VPiTogNZ8dMKCGJ11k8NxrpYFxcmNnsDPQhFB%2BNm8d%2BBCmMd8UXfZJmbibEJOWh%2Fz5q9FlDsjJ3Oz29ybX5aQeB0wo1aB44eTOPnMvVlSPDrXLI%2FdMbIqfvvl%2FPyL2b1JbgrD3j%2BGER4ollPC4WwQpJBEXp1ouPwxMPAAvl1TgynR5omxMsVtuadrAnrSOYVSeClqv3soubE5DUOo7ARVBV9WAqwVycjiKM1gwyTyMrjmdpNTEQBtPH36OtFl8oO1mbRe94VHOMoe1cTZ20d5oQ73vXl2JzuWt5btefzRq0clq9VeSuxY5Ms2ZdBZXkBGpswQ35pl7891a8idPKilmsHZvpHMcTrrQbObuCnxDEjVh02ccuJSwgxpcxLsYEMwYYLNJcZBfRZxPLdQYZBLxmxcmV2dML%2B%2F6sMGOqUBePKFpzuaDe84jAcYkcGEcOp1WXx02jSPyWM4UI%2B7aDAz3pXfn57WDeKD0%2Fs1zpu6Bv212%2BIvDGmhaJOv1MFnRpUoU%2Fh9BZDT9DGV2mdEk1RdvcPLPgG%2F3WIp%2BbTZlgqirZoYS5JuuLl8ma4E1Zm6JK76H6SJotZBMgvlXGTIOviUF0MZ%2F7JYFvDdoV1%2BTEzNT%2BVt4b4%2FpsDIsuunTm2j2QBGLzxb&X-Amz-Signature=c7a3dac0ac702b28c3850318b095cb78adc5518b278ba6cd2e350e814dabd458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
