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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OWF4T%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDxfEcvrc54qJOkQmWHYlJKimcegeP9AkaZ89xNy9ElFAiEA6zV3J22TAm6HVcb9qSfX%2FvfDWfUo0pAE2KwrRatDH3Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNxt1EXXhRlmV1%2BdTCrcA%2FIfiM476GY%2BuoMcI2zpu7H4nVzzQtCVw9fT5o0PS0D3EnCqDrcF8YL6ob%2BdS%2Byy9zF3h%2BaNFtoTGL7NYT9KWjVsRKqb2B%2Ba63znataBbOTag9EttcCpvN4IOURNWf8tLtaYtKVMaawQU5acgDnM%2FgnNcAJQOBFZAfakY8SZjfYEc2Iwx6uZqeEbFhU6uTxVlV3EZd11MPmDRbqI1MSMg2qluQV%2BqEvruryHRX8sM%2BypBrYuFXZ4h6NJkLlhY7bEEuX7B76jBsBKA8greHfIYdRyPaWcpgBrD6tuCkmG0NLaEoe7e6EQ73%2BIWWK2a55bVXuKHQoVuW%2FCtHVdCEHW4A%2Bs%2FuSKxPSQZ5MZ6rcrcJYYwCOQoOjdFRJG0sU%2BIklUseKv87VpRUqi9aaZHhqnbAIkZN2vCX0WyLlHZctWTkX7kcDqIZGKeu1YyqYJCUbRbqYDSu%2BtKPQHJ%2Fsrdal9%2Bx%2FpiTgGfYspAVjbhrCekvVVj1bMMGXHNwDMXxL4eQRrD8iEHbTHqkGnGGi1nC6HmCxFkjaqRABi6MTOK32MS0Gg7wDn1pR8pDbnXmw2fqX6Qnyb0W5FpQ4usrQhurxBlCgmP%2F5wc7eaxzyjopivVg%2BUYejC%2Bn9BxwxGMZXNMLmJv8IGOqUBIEqwuD%2BEee1Ng37fZhcmuWr3ROwM8qkXb6vWzQdmccUukOUNWpeV59H6ACQv4aGeVB%2BVewD72h5X%2BC3zB98B7kGOm6JTDEsQ6a%2FJhG3jO5xCcoQJ%2Bt%2FJDP3aV5%2BjQkLueTl0VDxuxABa4saOufKr0V%2F0Uw5DJp2RcnzQQp%2BEXQibsfofnbdbF8tUY3jIKHNWoQH8VLysoGMjJ1IEgkmjdF9AN8pM&X-Amz-Signature=be48af60d53b1ff106c934a05420156505abdb1b591bea5ceb5fdd3aa7e163d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OWF4T%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDxfEcvrc54qJOkQmWHYlJKimcegeP9AkaZ89xNy9ElFAiEA6zV3J22TAm6HVcb9qSfX%2FvfDWfUo0pAE2KwrRatDH3Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNxt1EXXhRlmV1%2BdTCrcA%2FIfiM476GY%2BuoMcI2zpu7H4nVzzQtCVw9fT5o0PS0D3EnCqDrcF8YL6ob%2BdS%2Byy9zF3h%2BaNFtoTGL7NYT9KWjVsRKqb2B%2Ba63znataBbOTag9EttcCpvN4IOURNWf8tLtaYtKVMaawQU5acgDnM%2FgnNcAJQOBFZAfakY8SZjfYEc2Iwx6uZqeEbFhU6uTxVlV3EZd11MPmDRbqI1MSMg2qluQV%2BqEvruryHRX8sM%2BypBrYuFXZ4h6NJkLlhY7bEEuX7B76jBsBKA8greHfIYdRyPaWcpgBrD6tuCkmG0NLaEoe7e6EQ73%2BIWWK2a55bVXuKHQoVuW%2FCtHVdCEHW4A%2Bs%2FuSKxPSQZ5MZ6rcrcJYYwCOQoOjdFRJG0sU%2BIklUseKv87VpRUqi9aaZHhqnbAIkZN2vCX0WyLlHZctWTkX7kcDqIZGKeu1YyqYJCUbRbqYDSu%2BtKPQHJ%2Fsrdal9%2Bx%2FpiTgGfYspAVjbhrCekvVVj1bMMGXHNwDMXxL4eQRrD8iEHbTHqkGnGGi1nC6HmCxFkjaqRABi6MTOK32MS0Gg7wDn1pR8pDbnXmw2fqX6Qnyb0W5FpQ4usrQhurxBlCgmP%2F5wc7eaxzyjopivVg%2BUYejC%2Bn9BxwxGMZXNMLmJv8IGOqUBIEqwuD%2BEee1Ng37fZhcmuWr3ROwM8qkXb6vWzQdmccUukOUNWpeV59H6ACQv4aGeVB%2BVewD72h5X%2BC3zB98B7kGOm6JTDEsQ6a%2FJhG3jO5xCcoQJ%2Bt%2FJDP3aV5%2BjQkLueTl0VDxuxABa4saOufKr0V%2F0Uw5DJp2RcnzQQp%2BEXQibsfofnbdbF8tUY3jIKHNWoQH8VLysoGMjJ1IEgkmjdF9AN8pM&X-Amz-Signature=c6c157386f96a183ea1c48f3de061f0420065ed696604f0ef9980832e3e26f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OWF4T%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDxfEcvrc54qJOkQmWHYlJKimcegeP9AkaZ89xNy9ElFAiEA6zV3J22TAm6HVcb9qSfX%2FvfDWfUo0pAE2KwrRatDH3Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNxt1EXXhRlmV1%2BdTCrcA%2FIfiM476GY%2BuoMcI2zpu7H4nVzzQtCVw9fT5o0PS0D3EnCqDrcF8YL6ob%2BdS%2Byy9zF3h%2BaNFtoTGL7NYT9KWjVsRKqb2B%2Ba63znataBbOTag9EttcCpvN4IOURNWf8tLtaYtKVMaawQU5acgDnM%2FgnNcAJQOBFZAfakY8SZjfYEc2Iwx6uZqeEbFhU6uTxVlV3EZd11MPmDRbqI1MSMg2qluQV%2BqEvruryHRX8sM%2BypBrYuFXZ4h6NJkLlhY7bEEuX7B76jBsBKA8greHfIYdRyPaWcpgBrD6tuCkmG0NLaEoe7e6EQ73%2BIWWK2a55bVXuKHQoVuW%2FCtHVdCEHW4A%2Bs%2FuSKxPSQZ5MZ6rcrcJYYwCOQoOjdFRJG0sU%2BIklUseKv87VpRUqi9aaZHhqnbAIkZN2vCX0WyLlHZctWTkX7kcDqIZGKeu1YyqYJCUbRbqYDSu%2BtKPQHJ%2Fsrdal9%2Bx%2FpiTgGfYspAVjbhrCekvVVj1bMMGXHNwDMXxL4eQRrD8iEHbTHqkGnGGi1nC6HmCxFkjaqRABi6MTOK32MS0Gg7wDn1pR8pDbnXmw2fqX6Qnyb0W5FpQ4usrQhurxBlCgmP%2F5wc7eaxzyjopivVg%2BUYejC%2Bn9BxwxGMZXNMLmJv8IGOqUBIEqwuD%2BEee1Ng37fZhcmuWr3ROwM8qkXb6vWzQdmccUukOUNWpeV59H6ACQv4aGeVB%2BVewD72h5X%2BC3zB98B7kGOm6JTDEsQ6a%2FJhG3jO5xCcoQJ%2Bt%2FJDP3aV5%2BjQkLueTl0VDxuxABa4saOufKr0V%2F0Uw5DJp2RcnzQQp%2BEXQibsfofnbdbF8tUY3jIKHNWoQH8VLysoGMjJ1IEgkmjdF9AN8pM&X-Amz-Signature=5d5b041e8f362df2410f3de804f01a0a1ed21c6e2bdf017aecd5d6e9e1f6cde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILOBD6J%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAvc667gUkH1a04K7I0HO7nGCumSdz3G51jCPj6zfVE1AiEAo%2FH%2Bo7J3cIupjyZ%2BhKFpUz2IlLkhdBu1mHe28tPK57sq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLIBV9eGmobLg1S56CrcA%2FmhIOZulLaFJ9cggyhvpDtsqPCIEBlAzJ2S70Ws%2BFaMKOgyt0mrekJ4tk%2FdE%2FW5tOxJCV0ac7sdBMuHPJBrYj4d2nltyV7Hsa4LqUzg2GAUcFDXiCje%2Fr9F5EsqfE8BnLKlj004Nrue0SjaZ5FW2UP29X7VpR3hhHR7q%2BgpP9Id1775TaOm0LoDC9JOKDT%2ByopUZ3sKky%2BPl551bCiRIscaJFBWDHVYoiZEvQDEtWH4ttoWCGiNY6rFLuFC2MSVMmUpE0zGPJGg1Hh7eUEsjsODbICYjMq8XTknsGW54c0ySVbRG5vXQWJJ%2FJF9aTCG37P76KJbzjuDg7wivMBZTA3mKIRK44XQUozu23sJtVcNRz7ZHe%2BEjRHreHS6BXkkLRu%2BSX6Hja3MsFITOAmld2zwbX5mxH1ObEzEzigkBSAZysLZb741R9rLO1olmxgEQn3wI3fKQpWDpIl%2BCd1Cy%2F9%2BaP7b794mvVZaQwxBmR4NrUbLt29QIq4YzBA0g7n2cuPWeoYGhmXNuFzBD9XeKPm2V3470qQya%2BROk3Bc4xkK3Ga7ahx4gu0gdeXxMXJztn%2FbRIrMJu6sNtbpTAd4Sd78SDuRB072Deh0HlU1o3zeX3a07vKRE52BHfBDMJuJv8IGOqUB5GhTZtUNIIS8qIp4k1ZmQwhiI7Dt1EPiXhHn7T00pKuXxjOh2%2Bjk2bqbp4X0apO80cdqxa8GIVnes3EarL7J1zVQ0ytrS4oc8NTG5tVjatjCFkc%2BBIAFRrOwwFycQSkPQcA6xzblA1K90m%2Bp3tQld7pNOsDvNzufBLpHiAIE%2BsrMSWmhIkIZHYwlFSs2rdxHLvtmcxa3DjF2YXBkvk7qwpv2vpa6&X-Amz-Signature=8975191b6548187a430e320b4c1f44c7e893a9885ad35d782b8798b2e0099911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2KTIMU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICDasdQzQHnfCzsSoHREIo4h0v1a2DN25lN8ZCeZzhYTAiBhDrV2fZw4jBqk71aKGGsuNhUWdC%2F1rsKLQCvNY2GWcir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMS1kia62YyoJ1YmFIKtwDdzxMGxYdPHtzaWtQpQZCfw5K5HqU4QIMpav52DhZ%2FD%2BHLkqgU808JibBeijIWCDT0cnkcpLStVwK%2FOMQFCEht4HXAldHJdb5L28XqSPXfze8F6yUxeAoh95Dic7UbzWYApKMpQRjBUSgAaRKzRbZ6it69ESIlf2gQFc0SHeSaBz3%2FYkUG6ZV2Qwbl0u2mmhocxm6WFMkCFCUUY1sKMu6dzKS9pLPTNOnaRsxPexw4iuqXFyKqvFbnppZyqn9V1Q1yemqxblnB1gwdbXNvXXvaUG4vcfWgRu1o%2F277e3c8eFKJlsTULozir3FJTu8nN3vJDhNub%2BmWjP1uN9gxxj3xNvBIVKzMfG%2BXs85wbDGv2W%2FzN1EBhUUzWD%2FKY57WpmeTdbhZ7d%2BuEyRC8NyewyevyCu7qlNlY6CAMT0AISuRuUDbW5yIBVte1WfmG6hJgTmxrUiZzwQK7X1t3KMbJyufQIui5ni%2FnOc%2FkhaYEjW%2BJ7T5SnXia2v2DuwFPIEMgm4cewtZlwJdUeYrKSNWb0FVJmLNP%2BdGUCV1dBTvAc7mlh51HICLj%2Fwfgt968WxwwXwzuMU8KDc%2FD7rUGpXig2e1uYlBbgeGqo9Z%2FTWK3VZ%2BaZ1XKqhGCzEqboW2e8wl4m%2FwgY6pgErbuWTX4u7KyCjog1nx8Bnv%2FUXUgN9rdWRcDrHEvagaZvFpJG4eXQ2G3G72OrFjeMxVCwbf4BxTtCP27N%2Ff%2BqKtow1ITmnmrKEy4hY6GyjcYPrwpWplrsRGBHzNjpUaCgvsq3dZEamJZGYf4qXdKbEVcm1a60QYjuVmXRE0Ez%2FiWsts2vHjTj40grDv7t2%2BOeiUyd2YPJ4OPhVoGIvvqQV0IjTdKfN&X-Amz-Signature=71b67c6ddd8d9425a8cc50a901e5dc9640f45c1ca4ed9eebdbc28d6748dd4d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OWF4T%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDxfEcvrc54qJOkQmWHYlJKimcegeP9AkaZ89xNy9ElFAiEA6zV3J22TAm6HVcb9qSfX%2FvfDWfUo0pAE2KwrRatDH3Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNxt1EXXhRlmV1%2BdTCrcA%2FIfiM476GY%2BuoMcI2zpu7H4nVzzQtCVw9fT5o0PS0D3EnCqDrcF8YL6ob%2BdS%2Byy9zF3h%2BaNFtoTGL7NYT9KWjVsRKqb2B%2Ba63znataBbOTag9EttcCpvN4IOURNWf8tLtaYtKVMaawQU5acgDnM%2FgnNcAJQOBFZAfakY8SZjfYEc2Iwx6uZqeEbFhU6uTxVlV3EZd11MPmDRbqI1MSMg2qluQV%2BqEvruryHRX8sM%2BypBrYuFXZ4h6NJkLlhY7bEEuX7B76jBsBKA8greHfIYdRyPaWcpgBrD6tuCkmG0NLaEoe7e6EQ73%2BIWWK2a55bVXuKHQoVuW%2FCtHVdCEHW4A%2Bs%2FuSKxPSQZ5MZ6rcrcJYYwCOQoOjdFRJG0sU%2BIklUseKv87VpRUqi9aaZHhqnbAIkZN2vCX0WyLlHZctWTkX7kcDqIZGKeu1YyqYJCUbRbqYDSu%2BtKPQHJ%2Fsrdal9%2Bx%2FpiTgGfYspAVjbhrCekvVVj1bMMGXHNwDMXxL4eQRrD8iEHbTHqkGnGGi1nC6HmCxFkjaqRABi6MTOK32MS0Gg7wDn1pR8pDbnXmw2fqX6Qnyb0W5FpQ4usrQhurxBlCgmP%2F5wc7eaxzyjopivVg%2BUYejC%2Bn9BxwxGMZXNMLmJv8IGOqUBIEqwuD%2BEee1Ng37fZhcmuWr3ROwM8qkXb6vWzQdmccUukOUNWpeV59H6ACQv4aGeVB%2BVewD72h5X%2BC3zB98B7kGOm6JTDEsQ6a%2FJhG3jO5xCcoQJ%2Bt%2FJDP3aV5%2BjQkLueTl0VDxuxABa4saOufKr0V%2F0Uw5DJp2RcnzQQp%2BEXQibsfofnbdbF8tUY3jIKHNWoQH8VLysoGMjJ1IEgkmjdF9AN8pM&X-Amz-Signature=a81b993730942ff93b41cb30d9a130381834aff594399af7fb9441b3f5bc0bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
