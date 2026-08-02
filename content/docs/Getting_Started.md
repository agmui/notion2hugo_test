---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J75SDH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCldD9IL%2B5VZjLKmh68tg5bu8%2FgCjUzE0mdKlgVEQS%2BEgIhAIL0QWf%2B3346XOUOX23BIPm0HLwfPsDm%2FbgVpOChIw6%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FEO%2B4aq9p0KLqUQq3AOrwQZbFSUX8yOLm7ewb%2FZCsixZ8l4TslQKeU50Q40gq2kEw2BJ7W0NhWJajTQA4ZfeF%2FSOmCnxt2B3ENSyN0KLsGunZtjJDjxvh6ArlNs5rbPHttOQ5%2FXcF85GbeAuekgx5SLUqe1apPoJl3l%2FlTAJGhVm%2BXAPB2gjjFXqdlSOqjXpisuluq5bN8usj1QKPe%2FeBK58l6wGskMDq6i1gzljx2EnGlVlC7iXpHBxdwqH95HlDjXXzvoJ2EKP11d6Yd4MctwH4Rlxw9SFuzvuKSuf3k2PNaVPIP68i4Cp5xQrG06ZolaMc9X7PGEMWFC5M893rjBkxBAoTosXoewuBjPQLDEM0jr2KIR42yQVC%2FNQB98tBg7GlRR7DKRwPj1AQGzLfFW7A3E3YY%2FkpeJCJnvtBoCsoOw%2F9ZtWy2iUnjSJDtHi9RQOhmumpQcSO0fGT8B3PK%2FbDJGWbXZ4%2BnTZb5OfOu2FhT4R58Y0iXe12NOFBlB%2Bd%2F%2FSwng8JYpXhxoGHoeV9FodDeVFL8nADkfzBZ5Xsbgm%2FcsFyk1toHDaT7qudQu6KT4tfc%2FBuQCy%2BS%2BDM11VLwgH3Elez7jbH4x%2FVJ8kUi1aBIFhwxx%2FiiHx1BNrb9hhJnpmeR4wgCEvTzDVwbrTBjqkAWYUogZg6%2F24yMxuo6aPG%2F0%2FSJ4uRh4H3zWdzjEGdWua%2Bz%2BIIa1M8EbCPinbnIUoa9P%2FTLV1XKdHiwS94WTtUZ8zvW7Z7YVdwmFFl9MHmUfc%2BFig2M%2BoTOJ%2F4Q8p2SmaKtpUltInhCFQfJmQlV%2BgF%2Fbd4J16%2FOan4BLJ1LNyDx3iTalZpLouQQJNthlsKAN7VlCoekpkmAyOdZ49ovqF7vLr3SSI&X-Amz-Signature=17f88df1aa4e3e1f929f44c39d687f7e19b21e8c22e0c20ceb68fceac8011c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J75SDH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCldD9IL%2B5VZjLKmh68tg5bu8%2FgCjUzE0mdKlgVEQS%2BEgIhAIL0QWf%2B3346XOUOX23BIPm0HLwfPsDm%2FbgVpOChIw6%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FEO%2B4aq9p0KLqUQq3AOrwQZbFSUX8yOLm7ewb%2FZCsixZ8l4TslQKeU50Q40gq2kEw2BJ7W0NhWJajTQA4ZfeF%2FSOmCnxt2B3ENSyN0KLsGunZtjJDjxvh6ArlNs5rbPHttOQ5%2FXcF85GbeAuekgx5SLUqe1apPoJl3l%2FlTAJGhVm%2BXAPB2gjjFXqdlSOqjXpisuluq5bN8usj1QKPe%2FeBK58l6wGskMDq6i1gzljx2EnGlVlC7iXpHBxdwqH95HlDjXXzvoJ2EKP11d6Yd4MctwH4Rlxw9SFuzvuKSuf3k2PNaVPIP68i4Cp5xQrG06ZolaMc9X7PGEMWFC5M893rjBkxBAoTosXoewuBjPQLDEM0jr2KIR42yQVC%2FNQB98tBg7GlRR7DKRwPj1AQGzLfFW7A3E3YY%2FkpeJCJnvtBoCsoOw%2F9ZtWy2iUnjSJDtHi9RQOhmumpQcSO0fGT8B3PK%2FbDJGWbXZ4%2BnTZb5OfOu2FhT4R58Y0iXe12NOFBlB%2Bd%2F%2FSwng8JYpXhxoGHoeV9FodDeVFL8nADkfzBZ5Xsbgm%2FcsFyk1toHDaT7qudQu6KT4tfc%2FBuQCy%2BS%2BDM11VLwgH3Elez7jbH4x%2FVJ8kUi1aBIFhwxx%2FiiHx1BNrb9hhJnpmeR4wgCEvTzDVwbrTBjqkAWYUogZg6%2F24yMxuo6aPG%2F0%2FSJ4uRh4H3zWdzjEGdWua%2Bz%2BIIa1M8EbCPinbnIUoa9P%2FTLV1XKdHiwS94WTtUZ8zvW7Z7YVdwmFFl9MHmUfc%2BFig2M%2BoTOJ%2F4Q8p2SmaKtpUltInhCFQfJmQlV%2BgF%2Fbd4J16%2FOan4BLJ1LNyDx3iTalZpLouQQJNthlsKAN7VlCoekpkmAyOdZ49ovqF7vLr3SSI&X-Amz-Signature=f0f722a137db1189ea2e87acfe488d8f17210c006fb22284bb30aaa4439ac255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J75SDH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCldD9IL%2B5VZjLKmh68tg5bu8%2FgCjUzE0mdKlgVEQS%2BEgIhAIL0QWf%2B3346XOUOX23BIPm0HLwfPsDm%2FbgVpOChIw6%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FEO%2B4aq9p0KLqUQq3AOrwQZbFSUX8yOLm7ewb%2FZCsixZ8l4TslQKeU50Q40gq2kEw2BJ7W0NhWJajTQA4ZfeF%2FSOmCnxt2B3ENSyN0KLsGunZtjJDjxvh6ArlNs5rbPHttOQ5%2FXcF85GbeAuekgx5SLUqe1apPoJl3l%2FlTAJGhVm%2BXAPB2gjjFXqdlSOqjXpisuluq5bN8usj1QKPe%2FeBK58l6wGskMDq6i1gzljx2EnGlVlC7iXpHBxdwqH95HlDjXXzvoJ2EKP11d6Yd4MctwH4Rlxw9SFuzvuKSuf3k2PNaVPIP68i4Cp5xQrG06ZolaMc9X7PGEMWFC5M893rjBkxBAoTosXoewuBjPQLDEM0jr2KIR42yQVC%2FNQB98tBg7GlRR7DKRwPj1AQGzLfFW7A3E3YY%2FkpeJCJnvtBoCsoOw%2F9ZtWy2iUnjSJDtHi9RQOhmumpQcSO0fGT8B3PK%2FbDJGWbXZ4%2BnTZb5OfOu2FhT4R58Y0iXe12NOFBlB%2Bd%2F%2FSwng8JYpXhxoGHoeV9FodDeVFL8nADkfzBZ5Xsbgm%2FcsFyk1toHDaT7qudQu6KT4tfc%2FBuQCy%2BS%2BDM11VLwgH3Elez7jbH4x%2FVJ8kUi1aBIFhwxx%2FiiHx1BNrb9hhJnpmeR4wgCEvTzDVwbrTBjqkAWYUogZg6%2F24yMxuo6aPG%2F0%2FSJ4uRh4H3zWdzjEGdWua%2Bz%2BIIa1M8EbCPinbnIUoa9P%2FTLV1XKdHiwS94WTtUZ8zvW7Z7YVdwmFFl9MHmUfc%2BFig2M%2BoTOJ%2F4Q8p2SmaKtpUltInhCFQfJmQlV%2BgF%2Fbd4J16%2FOan4BLJ1LNyDx3iTalZpLouQQJNthlsKAN7VlCoekpkmAyOdZ49ovqF7vLr3SSI&X-Amz-Signature=bc6c568530e8c59be42eeb2425ff840a71e8a40d2920c5dadff4d30579c78a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OROPEEJ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDotsuwwPNzYy4stBO%2F1ys4hqs5cnYkiMGtumN3ulcw6AIgSxVWIqDI4%2BQp1wDLjjUpB7JS08dG%2Fc6oqo3pR5uvja4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3CIdVWl%2FE5q24dircA30LzmY7XYzxaXGAS1%2BOdrP2GeJCUf%2Bne9dw2ZVH6OS6hWap3znqvq%2F0pcEzH%2BPqUrZ8muQTS54850ZFNlEObr42MiwIVgyR15R9s3gbheddZtzm%2B8u9Fepa9Yoy%2FtLxirS3tEUmZ49R4JNqezdq%2BS%2B3KzY5eDdobVu1Spxy7xBmkzC8c9nuJ3WFEpfkH2fGJDSjSiCWCFZTX9WHnubVLO8ZOEUEbBt52I00qVwpNQ98cccENaU8%2Fqmd0TwPt4rgWmAttUGHs2OSEG0V1vE5qb0QMb7elTia%2BSKeqhOMjLPYJ3uRzagPAM0%2BKt79bVF6KHeaNZoydhXiNCOO%2Fu8NTAQcHsdic3pVgb7kF4F8t25mYeeUCGDuPE6dr0LJ%2BfVvb1TIyXWld0pkTJ3bk0MAoJ7fqAFRBbbQDSkgHTjFfgsbTzF%2F41J43HNZ62yk1Ni%2Bh477IDie2eqHfO%2B6mqFI0NuOrTr2BRZ%2F5Eqo2vmKJWjLRHuTaNNqg3gjB090DqxazcQ%2FE7TBZS%2FGqsoMYSX1ZY1p7v93gwYxTlm1Fm6xIV4cHpyDEhbBHoBYYVJFpTyAhZcnPe5XuuQOHzOv4cVcUdKnXT%2BKWhveVTbqo4MLgLWt4nqYhcGvrzTGcwxOMJjButMGOqUBpf3v8kKsZJvvTcj2p5%2FGKvpYAtA39BoOe%2BszmitbWm2wBvcaO3SL%2BZl1rwCF4B9%2F6ujnWNkZauMnXaEaJg%2Bsf0FkvXryp7%2B0AVcoUvb%2BY4Yx%2FG7SSk%2BZRa6z8qtGSvRRKda4OitTYUjyiviN9yg0cqmDCaQ2mu3pQ0y0XUmDGGBckoVLcVsbsg3BLHWtMaWNtNhUEXA81D1RXb3KQaCsBuOziDEq&X-Amz-Signature=6991ec507eb3f30218fdd2f95d2ff8f9eca4087548a624fc5cb989a9806f0b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5D6KEDK%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICHCArpYPZeuCpQV%2B9AMgtukBsO%2F6chl%2FWSKtoBblog9AiAFqtKvXAlNO3Bd738n835KyQFoBmlYYlVYHzdur%2Fys6yqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FO8s8T2t1rf4Ef8iKtwDFJdrSRTignlQKdNGGr1RZRoM2nO0JLik98PiYU9dTADn0irgVp%2BYAXE5Kqeecx2okgzGsvIJDrDCskUFOyVUDTwFobMfZzHnSRQHDJdATU1slRGAXiQpHbPkq0M4jQs7cGywnHX01fvPuqIKMwNibHioBXxLDg2MJw4oH4zHjCrwTKX%2BOFFYcfxXFvmuNX3Z8fxRcP7feLBQbfiUo%2BedsrhLxqkt6iD3aUtJiAAuTHaqapSjuM7QZC0OZlyPzkrg6WBC2Q%2FH3I84KUc8zdbVfVV0Pb33tLJAYT2dcK6HyPJh%2F%2FJKaSE4lt%2Fapxhl9PrI6zYCidHJE6%2B4BVwszwQj18LuyLraAD8e7RXwwctpIlmGb8mlroTASZR8TMrBNgAKveccBRAbyakXlwEz%2BQWWUtKAOeIi3pWhQHgzpXrATVt0O5cvd3aWDilRBFJOc8oqualT3WYrLKo1BlyBAIFzDOcr%2FeiKSa58LnOC2aXIaFzi0DijtKCP1g0UGZ5HEDeHvpfvt8rx%2FSWWXTQqCV4yEZfw%2Fc9dUom00gpTBCEk1iothC84RwYGOqyJefEjkVsYbXiniMhENgkILr%2BYL%2FscKi6yjumRITvuwq7ZnIpC%2FlX48a0Pkt3tiS4UrX0w1sK60wY6pgFHiWQw1ftE4pK2MmOHS5hrV9Q8sd57A4mSmRQCEylLqwVLnuAR%2Bd3C6zkcx%2BflzTtQUbRMro6%2BsS0zfp8otlOuPTVP%2FDeDjXo7%2BSJ6xeL4oZTioAODP2Xd5EHUvWxhhjeSEtAibbAfq1IUwmOXTlYSroTOMxNlNrZubnFX9WawOD3aFEUhDXCaD8v4MYDUovx%2BBnTtIs6AUwLj5quE2YutlJrUGvhq&X-Amz-Signature=135a6eca50eed112d7cab757705f62cefaedc3b6ab18d482a3f7f38ec493663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J75SDH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCldD9IL%2B5VZjLKmh68tg5bu8%2FgCjUzE0mdKlgVEQS%2BEgIhAIL0QWf%2B3346XOUOX23BIPm0HLwfPsDm%2FbgVpOChIw6%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FEO%2B4aq9p0KLqUQq3AOrwQZbFSUX8yOLm7ewb%2FZCsixZ8l4TslQKeU50Q40gq2kEw2BJ7W0NhWJajTQA4ZfeF%2FSOmCnxt2B3ENSyN0KLsGunZtjJDjxvh6ArlNs5rbPHttOQ5%2FXcF85GbeAuekgx5SLUqe1apPoJl3l%2FlTAJGhVm%2BXAPB2gjjFXqdlSOqjXpisuluq5bN8usj1QKPe%2FeBK58l6wGskMDq6i1gzljx2EnGlVlC7iXpHBxdwqH95HlDjXXzvoJ2EKP11d6Yd4MctwH4Rlxw9SFuzvuKSuf3k2PNaVPIP68i4Cp5xQrG06ZolaMc9X7PGEMWFC5M893rjBkxBAoTosXoewuBjPQLDEM0jr2KIR42yQVC%2FNQB98tBg7GlRR7DKRwPj1AQGzLfFW7A3E3YY%2FkpeJCJnvtBoCsoOw%2F9ZtWy2iUnjSJDtHi9RQOhmumpQcSO0fGT8B3PK%2FbDJGWbXZ4%2BnTZb5OfOu2FhT4R58Y0iXe12NOFBlB%2Bd%2F%2FSwng8JYpXhxoGHoeV9FodDeVFL8nADkfzBZ5Xsbgm%2FcsFyk1toHDaT7qudQu6KT4tfc%2FBuQCy%2BS%2BDM11VLwgH3Elez7jbH4x%2FVJ8kUi1aBIFhwxx%2FiiHx1BNrb9hhJnpmeR4wgCEvTzDVwbrTBjqkAWYUogZg6%2F24yMxuo6aPG%2F0%2FSJ4uRh4H3zWdzjEGdWua%2Bz%2BIIa1M8EbCPinbnIUoa9P%2FTLV1XKdHiwS94WTtUZ8zvW7Z7YVdwmFFl9MHmUfc%2BFig2M%2BoTOJ%2F4Q8p2SmaKtpUltInhCFQfJmQlV%2BgF%2Fbd4J16%2FOan4BLJ1LNyDx3iTalZpLouQQJNthlsKAN7VlCoekpkmAyOdZ49ovqF7vLr3SSI&X-Amz-Signature=4fc570a027c671a1d52c7cf82ea46656d8763302cb7bae98a5d2d600db0e4e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
