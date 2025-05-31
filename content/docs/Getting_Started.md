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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QBXD7J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWykh5gINfJkHVT2NSkeF3ghvz15TpZwz4Vca2Y4GAmAIgBe1oa%2FkZxtaqr0DsFp82wym9AS891bOcd4zHh9GacrEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYbU5FrNGAHuDkcyrcA6cZNsEmw8TrjjnwdnrXP2h5OtepBxyADLI%2F%2FMjkaLQw008h4vvN7MKMiqkVIIqv9GDQtXj3jzuoS3o3xDZ%2B3q1c%2FA6R3HFUbqU2DpZiCiTlsoeaVI20WH%2FWu4pUDHH3g3wXb%2BNNBa1FHgAXjy36S%2F0%2BhXn73ATVT0rHIdISZHfaFTEni7dToR6NH%2F9GFGOQfRdacmbz9Ph47KB9kaaNquyh0UxwfCdCaF%2BVb3Blk1G7urvNCJKJtBWQRyI0v2St02dbIvvJ9HMU8acHzTi5vu66%2FETte6szs8%2FPH8MbUwN%2FYS97D08Mto%2FqTgCFsb0OLO0aJ8TjGtfZb%2BplkRUozOtn7lGOqbja9NKTwk14vRVv8FNazt5y5%2BeMJybwNb1c8IEVrxD4XY3B%2BWWkNVQQDA8LVvTXlaewLjcSC4fhBvLa5iz85xzm%2FE%2Brp6%2FBiKlz8lto6W7eIW8n0YH1g61%2FWGrtcqbjDxHSkJ65z1qOyTNXGNvpQs8hNM28QPiRt5muY8CoVAr9Vtg3EhdXhCrCnv7oMA2%2FeAVGY7lktRcYcZq2CHK06EB80QjlwJRsWCv6OWJgDhpETAP2VTsL2%2FbVChQla%2B9G4j5TankFE1mlhCNlKxP8IM2CGjI0t37PMLez6sEGOqUBT1z6ZfaHF4G88jDoaq4VlX5RLwjruqk4fpZ35ld4z6gpJTrxto855UPgSddu%2Bmo%2F6iBE2dBRaaD4Ni%2BioDt%2B6mAxkmvDymA5yPGRthRLxtKasknPACk8I2mauKhs0m156hsVT%2F7y%2Fe%2BFxk0%2B1VQo0bdH%2BUioahp06PGd6xG%2FVrJl2Pw5gGuUsFJ%2FAoCH%2FHC50HynWMAOslBiDWPzJVAb%2Fjbucjto&X-Amz-Signature=3bb4b59e5c202d5810def6239540bfc84de99b97d8ef2dcec295a6f945c01026&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QBXD7J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWykh5gINfJkHVT2NSkeF3ghvz15TpZwz4Vca2Y4GAmAIgBe1oa%2FkZxtaqr0DsFp82wym9AS891bOcd4zHh9GacrEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYbU5FrNGAHuDkcyrcA6cZNsEmw8TrjjnwdnrXP2h5OtepBxyADLI%2F%2FMjkaLQw008h4vvN7MKMiqkVIIqv9GDQtXj3jzuoS3o3xDZ%2B3q1c%2FA6R3HFUbqU2DpZiCiTlsoeaVI20WH%2FWu4pUDHH3g3wXb%2BNNBa1FHgAXjy36S%2F0%2BhXn73ATVT0rHIdISZHfaFTEni7dToR6NH%2F9GFGOQfRdacmbz9Ph47KB9kaaNquyh0UxwfCdCaF%2BVb3Blk1G7urvNCJKJtBWQRyI0v2St02dbIvvJ9HMU8acHzTi5vu66%2FETte6szs8%2FPH8MbUwN%2FYS97D08Mto%2FqTgCFsb0OLO0aJ8TjGtfZb%2BplkRUozOtn7lGOqbja9NKTwk14vRVv8FNazt5y5%2BeMJybwNb1c8IEVrxD4XY3B%2BWWkNVQQDA8LVvTXlaewLjcSC4fhBvLa5iz85xzm%2FE%2Brp6%2FBiKlz8lto6W7eIW8n0YH1g61%2FWGrtcqbjDxHSkJ65z1qOyTNXGNvpQs8hNM28QPiRt5muY8CoVAr9Vtg3EhdXhCrCnv7oMA2%2FeAVGY7lktRcYcZq2CHK06EB80QjlwJRsWCv6OWJgDhpETAP2VTsL2%2FbVChQla%2B9G4j5TankFE1mlhCNlKxP8IM2CGjI0t37PMLez6sEGOqUBT1z6ZfaHF4G88jDoaq4VlX5RLwjruqk4fpZ35ld4z6gpJTrxto855UPgSddu%2Bmo%2F6iBE2dBRaaD4Ni%2BioDt%2B6mAxkmvDymA5yPGRthRLxtKasknPACk8I2mauKhs0m156hsVT%2F7y%2Fe%2BFxk0%2B1VQo0bdH%2BUioahp06PGd6xG%2FVrJl2Pw5gGuUsFJ%2FAoCH%2FHC50HynWMAOslBiDWPzJVAb%2Fjbucjto&X-Amz-Signature=d9f1e64725161b7ff4560da92b2ece67ec8bf05bbbf8f28c6d942a3ff792a660&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QBXD7J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWykh5gINfJkHVT2NSkeF3ghvz15TpZwz4Vca2Y4GAmAIgBe1oa%2FkZxtaqr0DsFp82wym9AS891bOcd4zHh9GacrEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYbU5FrNGAHuDkcyrcA6cZNsEmw8TrjjnwdnrXP2h5OtepBxyADLI%2F%2FMjkaLQw008h4vvN7MKMiqkVIIqv9GDQtXj3jzuoS3o3xDZ%2B3q1c%2FA6R3HFUbqU2DpZiCiTlsoeaVI20WH%2FWu4pUDHH3g3wXb%2BNNBa1FHgAXjy36S%2F0%2BhXn73ATVT0rHIdISZHfaFTEni7dToR6NH%2F9GFGOQfRdacmbz9Ph47KB9kaaNquyh0UxwfCdCaF%2BVb3Blk1G7urvNCJKJtBWQRyI0v2St02dbIvvJ9HMU8acHzTi5vu66%2FETte6szs8%2FPH8MbUwN%2FYS97D08Mto%2FqTgCFsb0OLO0aJ8TjGtfZb%2BplkRUozOtn7lGOqbja9NKTwk14vRVv8FNazt5y5%2BeMJybwNb1c8IEVrxD4XY3B%2BWWkNVQQDA8LVvTXlaewLjcSC4fhBvLa5iz85xzm%2FE%2Brp6%2FBiKlz8lto6W7eIW8n0YH1g61%2FWGrtcqbjDxHSkJ65z1qOyTNXGNvpQs8hNM28QPiRt5muY8CoVAr9Vtg3EhdXhCrCnv7oMA2%2FeAVGY7lktRcYcZq2CHK06EB80QjlwJRsWCv6OWJgDhpETAP2VTsL2%2FbVChQla%2B9G4j5TankFE1mlhCNlKxP8IM2CGjI0t37PMLez6sEGOqUBT1z6ZfaHF4G88jDoaq4VlX5RLwjruqk4fpZ35ld4z6gpJTrxto855UPgSddu%2Bmo%2F6iBE2dBRaaD4Ni%2BioDt%2B6mAxkmvDymA5yPGRthRLxtKasknPACk8I2mauKhs0m156hsVT%2F7y%2Fe%2BFxk0%2B1VQo0bdH%2BUioahp06PGd6xG%2FVrJl2Pw5gGuUsFJ%2FAoCH%2FHC50HynWMAOslBiDWPzJVAb%2Fjbucjto&X-Amz-Signature=f9cce2d47811cec404e16fa7126334da7e3feae2d6208e513e9a6dfaecd4a46d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVW6JDE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqggoWQqaqU3E%2BrfykOXcm8ufXkv2CZmbr3dy3NnqI3AiAOpAHUcSwe16Ry8ArwYn850HX%2BpFYxzBnCLHJvLkN47iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFcdykMuEPaJzOwmKtwD5U4mB1pVms85nBfa3w40o5WGFe%2Fy5x93MqHaMmK5o7FQnVBgTwKhEHN%2BTnKDKbzy2UZQgVpKEOULEuCXF5j0aMgNxdOft8WneygebS6yuJCDjtdOp16b8ZoTMMRbXdAGHRlqfPZ5s%2BPS%2By%2Bl11ZNKSnjC%2BxVYnAHx6x%2FgiVR5NTrcc9qUsq7B2d%2FlIfeP%2BhEjyzEFegLPHlJIzn4WIQvFMIh2HJ%2BYJrbOUfbMv3ZuuoX2G2BbFz8MQZfAbXvCJalMAgmh%2FFr0ZW1bV9b6kVGhTgw72%2BfC5w9Cpd5Lwc1dUclJfBMIjhj8veFVkOHA6gPl5BMkQBFNoPbelaQP5zL9WFJhjVkCjnpNriqWMBJJGNCXcwPcwHzEOweVoeoPdmQAXtIt57KZJJMBv0f2DhRHIJ%2BfNPN5hqMG2GW1TiGbpj4GOG47gQu5zfj457rwHvGfin92kjqtC46F%2FflQZFzjVFCotghC5oH6BodCA%2FT3mbUH6XvawYO3mNrcGUXj8DK92v5Nnbc5y%2BUMeh0BTuB5kMG3BxtjIPpnGRjLIK1uPAAhgGjy8qsVZROFsWx3M%2Bnk2ODeuOSsVJNygpguDLzVUGdry9tWAQ5enxf4FSDYLl0SsQonsJZjI02vB4wqrPqwQY6pgHiFuXb1c61%2Bl%2B9s15a2FgOrhYT7kR6v5xAYE757ZQ2Mfa5Aujm%2FsWHhXShlPpnUQfT6UTCxljwWVDkitqeZSU1w%2FhwsfjlCkjW7xhChVIK6w%2FqHUCR4D2%2Fzw4KYwqBJ77DnnL6DGJbvnN0N45DH7C2fC8fL5biMNBj3RjSbifpOOLVicnKxuD8EIo3vBGAwKw%2FANYRq3ZCkoPchmW1xTpljCGcKdNy&X-Amz-Signature=47fe6a407a8d14be25f21f243a83ef3e1be971dde4058f7644a7fd53d4ed4b00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJC24WD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS72O1OxJw91bS09L2pSJVuvudhs7aGaxY9TSHEx88BQIhAMa3uFLu7%2B3iOlcoOuXEkId5iJVwnmKJuAp6sK6Ubj%2FPKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUuWvwgvhgAB6QRIcq3AM5RMppo7k3h2MjN9AGq0x2Sr%2FsTH0iJqqLmfmc1c%2BPNniizKFDGwBaqYTdZO2%2BlKeqIy9nJyKMLp%2FHWFJ8Xii5kJbV%2Bj5kfgLgJQCzvyJbqeZ6gnXvXPz43cRBnXIHIJmoX55WT%2FjTa2PAZRT19YrOy3yUeE2bRFGEOB8tMJWArVpzsQYNtTzHpZimMeI0uakfLEtqzo5FW8CyDy1ejn1vyp8KPvjTAwbbAEFLubJdVAS0%2BfSb6ZVnHEUE34iX4dURP4dbYI2RoGfbn3dgjH16RwkJG82ggqSBh%2Bm9VHrvehSuR%2FHRnciQn8xtwk0j29Gq6Y6kxpyZZS3B%2Bpv%2Fr%2BYAeRgwJ6QOiihntIxORPtaqjPoGkp5K9FWaweJbrk9pFScmjFlHvHV36k7ST5O3gXUsYd6HtPvt2jKU1JwQBdDTkj8K%2F3UnV7fYpUWjBeVaODQUUNgjzV%2F6GPGbR3BRlcI1JaL1VA3vpVbzC8IDYXjB3Nabc2vlJF%2BGEkHh390pj6BfKLwmjgwIbxcnvPSZXO%2FePsZ15DZOJGq0fg%2F01%2FBuT%2FJFrV7eyAVu%2F0o5JBGqkWdGqoMVrlygRQ7%2FgghA22cUGRwXn6FZlHF66%2FK0S%2FpFHFuWP1%2BAxI0BkFaaTC3s%2BrBBjqkAVRWrvUxqZL1r2IHMcOOPUvVP%2B1G7zmUa9YJfmHQD1eu3YARDxqGWF%2FuPIv2oXrVEWKl7VEIAiP%2FZfO3MeyFI8B8Nh35MZF69j4o97RTVXQO8UVVo2%2FcsHqjhNWerQ4J8iO2Hij1awdjRygvjq9cP5f1aAZBSPhnJpywE0hhWSe0U1uQy0Wo6rkD%2FHehurEzDJ2HePISPE3KhkyWGXdSdVAE0jMn&X-Amz-Signature=a87f67b06ccf18a37b05a70d86a7b460a13fd4cf5d988c13ad493f2fb082e47e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QBXD7J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWykh5gINfJkHVT2NSkeF3ghvz15TpZwz4Vca2Y4GAmAIgBe1oa%2FkZxtaqr0DsFp82wym9AS891bOcd4zHh9GacrEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYbU5FrNGAHuDkcyrcA6cZNsEmw8TrjjnwdnrXP2h5OtepBxyADLI%2F%2FMjkaLQw008h4vvN7MKMiqkVIIqv9GDQtXj3jzuoS3o3xDZ%2B3q1c%2FA6R3HFUbqU2DpZiCiTlsoeaVI20WH%2FWu4pUDHH3g3wXb%2BNNBa1FHgAXjy36S%2F0%2BhXn73ATVT0rHIdISZHfaFTEni7dToR6NH%2F9GFGOQfRdacmbz9Ph47KB9kaaNquyh0UxwfCdCaF%2BVb3Blk1G7urvNCJKJtBWQRyI0v2St02dbIvvJ9HMU8acHzTi5vu66%2FETte6szs8%2FPH8MbUwN%2FYS97D08Mto%2FqTgCFsb0OLO0aJ8TjGtfZb%2BplkRUozOtn7lGOqbja9NKTwk14vRVv8FNazt5y5%2BeMJybwNb1c8IEVrxD4XY3B%2BWWkNVQQDA8LVvTXlaewLjcSC4fhBvLa5iz85xzm%2FE%2Brp6%2FBiKlz8lto6W7eIW8n0YH1g61%2FWGrtcqbjDxHSkJ65z1qOyTNXGNvpQs8hNM28QPiRt5muY8CoVAr9Vtg3EhdXhCrCnv7oMA2%2FeAVGY7lktRcYcZq2CHK06EB80QjlwJRsWCv6OWJgDhpETAP2VTsL2%2FbVChQla%2B9G4j5TankFE1mlhCNlKxP8IM2CGjI0t37PMLez6sEGOqUBT1z6ZfaHF4G88jDoaq4VlX5RLwjruqk4fpZ35ld4z6gpJTrxto855UPgSddu%2Bmo%2F6iBE2dBRaaD4Ni%2BioDt%2B6mAxkmvDymA5yPGRthRLxtKasknPACk8I2mauKhs0m156hsVT%2F7y%2Fe%2BFxk0%2B1VQo0bdH%2BUioahp06PGd6xG%2FVrJl2Pw5gGuUsFJ%2FAoCH%2FHC50HynWMAOslBiDWPzJVAb%2Fjbucjto&X-Amz-Signature=a57769f4bce9b3e420b4f5489d09d0af3d808f468efb23b7debe2b5e400b4c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
