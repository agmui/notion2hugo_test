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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWUDAQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo3jEKrX9RXzD%2F4mjqPuVMYsbEKmXq5TAtrjID3uyQnAIgdkNpoBVBLFZNPcuAKrnDG2hFhPdm2ThwAKfu5yw0N1QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBYGNLIgylExfiOircA2ojg0AZCiIEQhFCQasCVsN4kuxTjzbVjNA8v3tja6aoNqoVDxz6aymjjkP8RT%2Fk6Pga%2FwsePBil7YTFf69knR134TzSFncYl9ZZ19WtplDFaB4PkBh1JVt%2FqQ7w9RQSYonqxu8ZvNEkZy6EMRod2A%2FeuBtM7Dhiklf%2FQzDpwjR79wHCCoEwTblN4lz9kbTvE4V%2Fi0a1EaKDNMa38AKiC4zYMEzVgWndFhS%2BSK%2FQV6ZkMaMjX3SZrTBU9wnNzXHRHbN0Nu8AO0e%2FOUwzFEKRlb%2Bbv3IEAIF3vThMA4qtIMqpicVEPN3yYJfwijGu%2BOc9DnMr9ypNnnOMaQ8PPqFkvJ8r8my6YCd9FiTlC1%2B4riBYVMVREjH5YCOu4MMlnqFMFEhDKWzt9gXEYUOh1Ee42fEwAAcxSBpKvXdODHKLctHDqvRj8wwt3TaqLMqCQsKOLbigeqzdUnndCV9rH8abup5dTzmABwQ2gAwQV914XV2u69OLZ5dzFTk%2FxwvUFmgM6NHUbRF%2BJk1QA2ImcUD2yFi06VeBrqKMxZKa0Vg4DQvZEqS2NT5BaiceQYqBnMe0PYV0%2F7fWOw2mQbRi2pFW3sYpO6kIL0TfuUkOty%2FaJzLYGT6XfStS5A7LWqutMN%2Fj88MGOqUB1x7DNZZ1dgLLBVZLdJZ%2FbgJebmN%2FPYW8jlhRAYMKgXW9IxfHMWEboT3D8jh9JDsZibXMFp62KOGz1FquZ8egSdOJ4TKTGtT2gppwWJSQx2CLX4qZz0wMWhz77GCBJu%2FC8NX%2Bmbl6gpQTNa50C1%2BeOD%2FZL2M8eP%2Fr8f%2BzN4XdExauhRVH4GDTd0ToTecfsoC35kDZW6hoISmknyuCNtrWd0bUx8vZ&X-Amz-Signature=fecb89f08b50bba3cc3d179f4d1c4a5ed81ebf10a1fb46e2545717d22feff06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWUDAQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo3jEKrX9RXzD%2F4mjqPuVMYsbEKmXq5TAtrjID3uyQnAIgdkNpoBVBLFZNPcuAKrnDG2hFhPdm2ThwAKfu5yw0N1QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBYGNLIgylExfiOircA2ojg0AZCiIEQhFCQasCVsN4kuxTjzbVjNA8v3tja6aoNqoVDxz6aymjjkP8RT%2Fk6Pga%2FwsePBil7YTFf69knR134TzSFncYl9ZZ19WtplDFaB4PkBh1JVt%2FqQ7w9RQSYonqxu8ZvNEkZy6EMRod2A%2FeuBtM7Dhiklf%2FQzDpwjR79wHCCoEwTblN4lz9kbTvE4V%2Fi0a1EaKDNMa38AKiC4zYMEzVgWndFhS%2BSK%2FQV6ZkMaMjX3SZrTBU9wnNzXHRHbN0Nu8AO0e%2FOUwzFEKRlb%2Bbv3IEAIF3vThMA4qtIMqpicVEPN3yYJfwijGu%2BOc9DnMr9ypNnnOMaQ8PPqFkvJ8r8my6YCd9FiTlC1%2B4riBYVMVREjH5YCOu4MMlnqFMFEhDKWzt9gXEYUOh1Ee42fEwAAcxSBpKvXdODHKLctHDqvRj8wwt3TaqLMqCQsKOLbigeqzdUnndCV9rH8abup5dTzmABwQ2gAwQV914XV2u69OLZ5dzFTk%2FxwvUFmgM6NHUbRF%2BJk1QA2ImcUD2yFi06VeBrqKMxZKa0Vg4DQvZEqS2NT5BaiceQYqBnMe0PYV0%2F7fWOw2mQbRi2pFW3sYpO6kIL0TfuUkOty%2FaJzLYGT6XfStS5A7LWqutMN%2Fj88MGOqUB1x7DNZZ1dgLLBVZLdJZ%2FbgJebmN%2FPYW8jlhRAYMKgXW9IxfHMWEboT3D8jh9JDsZibXMFp62KOGz1FquZ8egSdOJ4TKTGtT2gppwWJSQx2CLX4qZz0wMWhz77GCBJu%2FC8NX%2Bmbl6gpQTNa50C1%2BeOD%2FZL2M8eP%2Fr8f%2BzN4XdExauhRVH4GDTd0ToTecfsoC35kDZW6hoISmknyuCNtrWd0bUx8vZ&X-Amz-Signature=e8a264cac2faee1704952eb5817bed337b0087b0ed24ba8d92615d068106012d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWUDAQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo3jEKrX9RXzD%2F4mjqPuVMYsbEKmXq5TAtrjID3uyQnAIgdkNpoBVBLFZNPcuAKrnDG2hFhPdm2ThwAKfu5yw0N1QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBYGNLIgylExfiOircA2ojg0AZCiIEQhFCQasCVsN4kuxTjzbVjNA8v3tja6aoNqoVDxz6aymjjkP8RT%2Fk6Pga%2FwsePBil7YTFf69knR134TzSFncYl9ZZ19WtplDFaB4PkBh1JVt%2FqQ7w9RQSYonqxu8ZvNEkZy6EMRod2A%2FeuBtM7Dhiklf%2FQzDpwjR79wHCCoEwTblN4lz9kbTvE4V%2Fi0a1EaKDNMa38AKiC4zYMEzVgWndFhS%2BSK%2FQV6ZkMaMjX3SZrTBU9wnNzXHRHbN0Nu8AO0e%2FOUwzFEKRlb%2Bbv3IEAIF3vThMA4qtIMqpicVEPN3yYJfwijGu%2BOc9DnMr9ypNnnOMaQ8PPqFkvJ8r8my6YCd9FiTlC1%2B4riBYVMVREjH5YCOu4MMlnqFMFEhDKWzt9gXEYUOh1Ee42fEwAAcxSBpKvXdODHKLctHDqvRj8wwt3TaqLMqCQsKOLbigeqzdUnndCV9rH8abup5dTzmABwQ2gAwQV914XV2u69OLZ5dzFTk%2FxwvUFmgM6NHUbRF%2BJk1QA2ImcUD2yFi06VeBrqKMxZKa0Vg4DQvZEqS2NT5BaiceQYqBnMe0PYV0%2F7fWOw2mQbRi2pFW3sYpO6kIL0TfuUkOty%2FaJzLYGT6XfStS5A7LWqutMN%2Fj88MGOqUB1x7DNZZ1dgLLBVZLdJZ%2FbgJebmN%2FPYW8jlhRAYMKgXW9IxfHMWEboT3D8jh9JDsZibXMFp62KOGz1FquZ8egSdOJ4TKTGtT2gppwWJSQx2CLX4qZz0wMWhz77GCBJu%2FC8NX%2Bmbl6gpQTNa50C1%2BeOD%2FZL2M8eP%2Fr8f%2BzN4XdExauhRVH4GDTd0ToTecfsoC35kDZW6hoISmknyuCNtrWd0bUx8vZ&X-Amz-Signature=3db01d501a8783a6c112d08a5e34f443d32843a91ee5ebe1da4431c5d0dbef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UP6GGA7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnxT7OTWbU%2BrtVFfZmIE9hvMlPO2MIknGA8Sw5i7LgQIgdC9cWFXcXXBvcx9VoRue5dmMC8otN%2BZ34Av4ub88A80qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODFqKWVNBT81inS5CrcA%2FYUNclHqiaUP3m1hWz7qqmjywje%2B9OEIdBvb68bnt9A3tM7TPMSoRSaryRLPNkMPe4JPsn3FLM4%2FgiNNAoIbrF9B%2Bh%2FNZY2dWeDK7OcprwiCQnu5ElAhyKt8BsR0xSlnbjZ8icnuhWPKpzDx21aEUk%2F9cfadWfBNYb%2F2bQSBU1F93Skl46ZSKt6B6xlz4Dim03bg32IXB6mgWLUpzDD2LhbFFnkGet%2B8ne%2FrQcPZglH7b9AbSnmDC6LGrF1SS%2BqacyPhPs3qBvWdd9pZ0ot2sR4jDZ2EpqjA61ZMLC0JXoWf7vBtlKuvYIEeX%2BCBE%2FZyHkxMoUdAKZyGCA4fOQmXA%2BZ9Q%2FOG3oDFy7GLqHp%2Ffnv92t4%2BrOBo3tVC7JyppqhC6Sq8HKY6A5AzOtr5VqpvIPm5nsep8ACbrfbCb1ovdnJOrl7CyoOUnDwDP8%2F3WpB6qODp8ySJYR%2FfWyjepKzXjz40eDXOcNnlAJYI%2B6%2F8abR1NOLUVhU6YsqdcDfcIhxJ1Q5fjdCqW7ox2B0irvfI3VCyUhbs0l9kOM%2FKCeOvZNeHMcLydOjJvtriJ567F5m0huTXGUAM4l2Kv7DBkqjniegz9I2t%2B1kZJGK9cm0gQRS8nC%2F9rO%2BM8KTvRaTMPLE88MGOqUB1fBAbhegkY%2FRmYmemRiSpbS0hBBVSAOowcUsMyEIwY8wYAEbtKDrrZJGD2VeyAE69f%2Bt6aYc2SnZ9ljS%2F6GRSblCcwz7Eznwlp5%2F2kKAKU%2FnUc5zbFgtk9hAFdKyCbAO538UfM5hUtVD76uvBIR1XgKNHQp6I3AGXwVi5cCI%2Fe4BQVMVeAYrBQBbL1VaAkvGHXzZvIb6VGKCi%2FqNDzWfU2rfcWY5&X-Amz-Signature=a9997fe7d002223fda1667fdf7b151afaf02c957de53cf1895fc447361e86fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VKYCXL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BDy%2Bn4WH3sP7z14FdEUBG5TFs4XUUiDOoSB51mowpgIhAL63rJMpkTQWQ%2BCsRYamY%2BzLAU8niXMvu%2FD7yPisGKl0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9QK%2FAmWJ3UHRkVPMq3ANfe33LM97DsNaV7moGiCYmh3nuIK%2BbUxKQM8nwGaXQo4yejZaFRlytPFJuFUx6LsatthJ%2BTVQbqmhJdQ0kh62kCTq0enBQCbAv08Gn%2FJHkEKPxS3Rjh9VZ3jeW%2BY4rryG2ciagrc3zEYjmZEqXPXpONbHCzEe6sRYC7csKTge%2BMS9gaSGWFaWdPIfP0M0m57zFEs%2Buxqm0%2FmERMCkgaNs6%2FOBEnqVZRZR6AlZgvdbhLFgPgydomchrKt2%2BeQkCMQ83zA7dCu8QcYOq%2BSOijfoIRhEHNVs0vK4oeI1jqqUCsf9oMdx7eVIU1cZfcvCChGR2zQlfIA3%2FQzhxPY1yM0QrazZsY%2F5xoJSsyX%2Bs4seDMDo40X9HIOfRO8aFPDUzu2AwJ2aiDw60ZYI1DYs4rKS%2BbSiupciTOrw1x%2FwmdmOmnUxb8XeLm4quZVjJ6u4eZkUidht%2F67DwVreu1IGeN7gwE0pQM6EheRyoiYVbFhUBZgdaV1kFWvBaNuiTNOaU1pTkS7b%2FcocKWUYetgKFoWWjCBi6mcmvazJXj1d3RLxoH%2BAeFvP3ELCeOjeLk2NoGETSATRvsgXN3u0SaztRd70o4YSZQdLh2noSjZ33%2Bb8oeaw8fKF89eFH9D%2FVmjC%2F2fPDBjqkAVMKG%2FdkwokqZ5IaZMcC3qIfvA21O9sjRBNrt2sf45pRgDW3ubdTUhuHKxou9Ol%2FVdfjg0MANk07QKPzIKzacCLWfpgx%2FxF6Nz6BwWuQIBV0cail3U9du505KJ75iWChhzuS6pV3D7JnIZITNE3Yb2jNcPINdgqF13riZGALq576Kf1Mm5UaQTEcXIRnBsCUmtDbxtr1KBI3jYqa8JbrkGG9Lq%2B7&X-Amz-Signature=24945072ecfda79b562426d387118905f14183221cb58351e29e6eeb2d6a8460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWUDAQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo3jEKrX9RXzD%2F4mjqPuVMYsbEKmXq5TAtrjID3uyQnAIgdkNpoBVBLFZNPcuAKrnDG2hFhPdm2ThwAKfu5yw0N1QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBYGNLIgylExfiOircA2ojg0AZCiIEQhFCQasCVsN4kuxTjzbVjNA8v3tja6aoNqoVDxz6aymjjkP8RT%2Fk6Pga%2FwsePBil7YTFf69knR134TzSFncYl9ZZ19WtplDFaB4PkBh1JVt%2FqQ7w9RQSYonqxu8ZvNEkZy6EMRod2A%2FeuBtM7Dhiklf%2FQzDpwjR79wHCCoEwTblN4lz9kbTvE4V%2Fi0a1EaKDNMa38AKiC4zYMEzVgWndFhS%2BSK%2FQV6ZkMaMjX3SZrTBU9wnNzXHRHbN0Nu8AO0e%2FOUwzFEKRlb%2Bbv3IEAIF3vThMA4qtIMqpicVEPN3yYJfwijGu%2BOc9DnMr9ypNnnOMaQ8PPqFkvJ8r8my6YCd9FiTlC1%2B4riBYVMVREjH5YCOu4MMlnqFMFEhDKWzt9gXEYUOh1Ee42fEwAAcxSBpKvXdODHKLctHDqvRj8wwt3TaqLMqCQsKOLbigeqzdUnndCV9rH8abup5dTzmABwQ2gAwQV914XV2u69OLZ5dzFTk%2FxwvUFmgM6NHUbRF%2BJk1QA2ImcUD2yFi06VeBrqKMxZKa0Vg4DQvZEqS2NT5BaiceQYqBnMe0PYV0%2F7fWOw2mQbRi2pFW3sYpO6kIL0TfuUkOty%2FaJzLYGT6XfStS5A7LWqutMN%2Fj88MGOqUB1x7DNZZ1dgLLBVZLdJZ%2FbgJebmN%2FPYW8jlhRAYMKgXW9IxfHMWEboT3D8jh9JDsZibXMFp62KOGz1FquZ8egSdOJ4TKTGtT2gppwWJSQx2CLX4qZz0wMWhz77GCBJu%2FC8NX%2Bmbl6gpQTNa50C1%2BeOD%2FZL2M8eP%2Fr8f%2BzN4XdExauhRVH4GDTd0ToTecfsoC35kDZW6hoISmknyuCNtrWd0bUx8vZ&X-Amz-Signature=2707a6d870535bd228522f28864161dcd357919d237e899396d43dd36179c9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
