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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUFOCHA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQvaqkBiZTJ6f2ZA7au39AAQh5w1ThxkpM9MwHvgVCQIgPK%2BAYuDPo3fPC2Y0RGzIKL5Cg%2Ftpl1X%2F5kbfidA5zdQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfpkSdZ2PX5x2IqIyrcA%2BMi4bNH9TPKzcYmwQf%2B%2FXam4EU%2BltxtXk3jpCYUj%2F2IawfFzf2PfnhxmA07mMdqYPRgWf5dCEH68oyFdOtRY9tapdY29LutiPlXN%2BAwz0%2FfZoVh419E1voo3Kp4V1MDKCDAU4lFC4YyfJdlq8NqIGWQV8pf%2BKFXmlWbibYdThhj4H9MLVmbrQS9nfAlWVLgQUwJ8w18bmIE%2Br1kQYLrtxO0c1654ubHiFFjItVOT7YaYHMFC4TJPEmCWVsx3Jo%2FSk7vIsrMGJ9x3WZfhYz9TqbkE92QbiVJsAIiNQEHC78YLTrW9WRkkYIyPdW2XByGQZ%2BMoQiYsloY3LSwwBTfCBa2kuw84w%2FpPn8zzlqWAdNikdgefr%2F7GBtgljv2YCP5cROTpFbLDgwpoRii0M856dAoXOh%2FCChpb3Q0%2FjCwTKOfYb1hnfIEK4mOujfsWpu%2ByW43TXAq%2FSNXdAySqCsUbVSXWxG2O5eM0xmGFp2k52fV7ZwNy17ssfINsShwFalq6SOFvF69q3BLt3VYAgslmnOiofdFbsfoJPp1I4BO1Kv3JJA61v3cPfq1wY45wtCvOEMz6ODR58fowmfmQejyqmBRuHa2qx20bEKsIaWheWr37JYXYLRl5IgfEExvMN210cIGOqUBEdU5i900wSNz9JXcsqAKR5T6UUHdFMQs7I6jdyT4W7fMPKODIAq%2Btv6rXaK%2BuWnEXFMgF6qTjRArr03lJeV4A5i%2BFtaWa2dAQlO6bdDR0peoNi1cq9wGfaMqniQNJXILt%2Fl9cV0S9OxBVLI4sdPU58%2BY0yWBW1qALQU4a8%2BigSKyCyMdNYl2rPqmS13pzoXakXogBTaajEPPFOf6ApcIrY5Fmy1X&X-Amz-Signature=ccc7c8f69dc621b8c872f4c18146ce8b9de92c996a93d053731df59a8a250507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUFOCHA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQvaqkBiZTJ6f2ZA7au39AAQh5w1ThxkpM9MwHvgVCQIgPK%2BAYuDPo3fPC2Y0RGzIKL5Cg%2Ftpl1X%2F5kbfidA5zdQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfpkSdZ2PX5x2IqIyrcA%2BMi4bNH9TPKzcYmwQf%2B%2FXam4EU%2BltxtXk3jpCYUj%2F2IawfFzf2PfnhxmA07mMdqYPRgWf5dCEH68oyFdOtRY9tapdY29LutiPlXN%2BAwz0%2FfZoVh419E1voo3Kp4V1MDKCDAU4lFC4YyfJdlq8NqIGWQV8pf%2BKFXmlWbibYdThhj4H9MLVmbrQS9nfAlWVLgQUwJ8w18bmIE%2Br1kQYLrtxO0c1654ubHiFFjItVOT7YaYHMFC4TJPEmCWVsx3Jo%2FSk7vIsrMGJ9x3WZfhYz9TqbkE92QbiVJsAIiNQEHC78YLTrW9WRkkYIyPdW2XByGQZ%2BMoQiYsloY3LSwwBTfCBa2kuw84w%2FpPn8zzlqWAdNikdgefr%2F7GBtgljv2YCP5cROTpFbLDgwpoRii0M856dAoXOh%2FCChpb3Q0%2FjCwTKOfYb1hnfIEK4mOujfsWpu%2ByW43TXAq%2FSNXdAySqCsUbVSXWxG2O5eM0xmGFp2k52fV7ZwNy17ssfINsShwFalq6SOFvF69q3BLt3VYAgslmnOiofdFbsfoJPp1I4BO1Kv3JJA61v3cPfq1wY45wtCvOEMz6ODR58fowmfmQejyqmBRuHa2qx20bEKsIaWheWr37JYXYLRl5IgfEExvMN210cIGOqUBEdU5i900wSNz9JXcsqAKR5T6UUHdFMQs7I6jdyT4W7fMPKODIAq%2Btv6rXaK%2BuWnEXFMgF6qTjRArr03lJeV4A5i%2BFtaWa2dAQlO6bdDR0peoNi1cq9wGfaMqniQNJXILt%2Fl9cV0S9OxBVLI4sdPU58%2BY0yWBW1qALQU4a8%2BigSKyCyMdNYl2rPqmS13pzoXakXogBTaajEPPFOf6ApcIrY5Fmy1X&X-Amz-Signature=d095464e3fc0ff16c4defad689f5114684140b9f488f4290d5e393bf0d275cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUFOCHA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQvaqkBiZTJ6f2ZA7au39AAQh5w1ThxkpM9MwHvgVCQIgPK%2BAYuDPo3fPC2Y0RGzIKL5Cg%2Ftpl1X%2F5kbfidA5zdQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfpkSdZ2PX5x2IqIyrcA%2BMi4bNH9TPKzcYmwQf%2B%2FXam4EU%2BltxtXk3jpCYUj%2F2IawfFzf2PfnhxmA07mMdqYPRgWf5dCEH68oyFdOtRY9tapdY29LutiPlXN%2BAwz0%2FfZoVh419E1voo3Kp4V1MDKCDAU4lFC4YyfJdlq8NqIGWQV8pf%2BKFXmlWbibYdThhj4H9MLVmbrQS9nfAlWVLgQUwJ8w18bmIE%2Br1kQYLrtxO0c1654ubHiFFjItVOT7YaYHMFC4TJPEmCWVsx3Jo%2FSk7vIsrMGJ9x3WZfhYz9TqbkE92QbiVJsAIiNQEHC78YLTrW9WRkkYIyPdW2XByGQZ%2BMoQiYsloY3LSwwBTfCBa2kuw84w%2FpPn8zzlqWAdNikdgefr%2F7GBtgljv2YCP5cROTpFbLDgwpoRii0M856dAoXOh%2FCChpb3Q0%2FjCwTKOfYb1hnfIEK4mOujfsWpu%2ByW43TXAq%2FSNXdAySqCsUbVSXWxG2O5eM0xmGFp2k52fV7ZwNy17ssfINsShwFalq6SOFvF69q3BLt3VYAgslmnOiofdFbsfoJPp1I4BO1Kv3JJA61v3cPfq1wY45wtCvOEMz6ODR58fowmfmQejyqmBRuHa2qx20bEKsIaWheWr37JYXYLRl5IgfEExvMN210cIGOqUBEdU5i900wSNz9JXcsqAKR5T6UUHdFMQs7I6jdyT4W7fMPKODIAq%2Btv6rXaK%2BuWnEXFMgF6qTjRArr03lJeV4A5i%2BFtaWa2dAQlO6bdDR0peoNi1cq9wGfaMqniQNJXILt%2Fl9cV0S9OxBVLI4sdPU58%2BY0yWBW1qALQU4a8%2BigSKyCyMdNYl2rPqmS13pzoXakXogBTaajEPPFOf6ApcIrY5Fmy1X&X-Amz-Signature=1eb597c4771489d20ff06523c3a1f4f1c67d76fbb3b3a645c0496248e8897a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSGIEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRGZenQL0%2BVmiTHSiISxCOjVUQYAL6SdcJWnG1YwkxKAiB%2B1nm9Ccsh%2BdXmeGAti4QcsBnUyQgjkohHT5vkQ6bIdyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmArj31cQCwO3j5N3KtwDty0oHXxpUnkDWcxr793qQpwFDIHh6bM3KlBwOvKtum5fPaqiDAeko3w3B5QkHbdSHqSm4qy2cjOHGvvv4eKH3MXfQHXTrHcge2oFYnz2YEcPfxYO%2Bwq3NXaVJ89XrfTo5oJSRSIt82aSH%2Fmrx7uG%2BEPBSgj%2BkGMHP%2FHSqwJW5FTovf7Hki%2BViKLjJTOJ%2BbmMWg1F1rQ7suGyqNY0SBqoedMkuwg1ERmbR9KS3YGsOMgWeDUjr4e63tzr4nZw%2BLfaYN8GtROBHTdJr0u%2FkUaB%2B9rlFEKgM5uBwvmJ46ajREd0FLzGXCvJQ%2BHI4qJ3levU%2BqqOPNgihiOyHgzLPQ327N8ZKgC87TmigqJ40VWHSZcqpYqt03fUTK%2B4iE%2BmXXLCUIVN7c7n8Pbvn4zy8dYG355OWV6L%2B3yzc%2B2Gab9subV2btvOCHFYTef4Je2cW%2FZxQoVpIikR5sNsoSap8xHz%2BIGkrHQgmRvhgFwxvTd2KnPRYGdHKfFPK8LmhHAt4gHW0k3ZALoVWCXQu1U19DyZQ3jVME8yvlJXZZgrnySUVfStQsHNIl7l1hCEwcG3pg9r%2FHvp0JRM1t%2F2cNmmGr7WGGMV1aNZBRQTzv9fQVkGlqVT%2BWryS9lja3YY048wt7bRwgY6pgGnIR4OO30XDsWdnNQwNMkN2vzPEmE3S7akiAem0F7Bj61OvNVo0eP2u9kPbtsHxkf23laePY%2F9mT4V1UyLgPdK%2BgvcGuyJxTqv3masLg55Q1bq1kYANQspduYoUtF1fMvfYzSPvjOVokmM7PRiN71fLxYsNqrH4bU5kz1yorIDqTbEQGF4tYKF%2BLm%2BxRhjuDa5nl0zIPVgA2BWCzNJy95F4qr8J1fl&X-Amz-Signature=572ba33f022700f565618504a0ff743aad97490902ab56fabcb3885265d2ef28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7VC5Q5V%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlmzCNEy1yjkEmhmrnrkb5lXZSeGctlN8q4SL3QDAz1AiAC8r9PDTDKzC3j1lEJVLeKndpaL6N8OOPcqlNHbI0eqSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWaUGZrG15GaRHcfKtwDA00qkgO1xrPpPnNlctiAMr%2FxjiKstxNySPZvZBYneVIESHWkQRLoubWNtwoZ5MHRaOAMg9G8iUU5iENrkgWNKIqc2GxT1auDGVzHzyEgyW1j%2F2xl4kl8DKQtP%2BmxO%2BAg5TDLfoLyGM328q9juuylV7P1vT9KzqO%2FwbSY8%2FaIYVyVIQTyP4Sl5Zxfzan4O%2BqEDyk9veCHl56cuLIVW7UqyzAAPzz9zAffHYzWcdTqoG1maV1BQ9ikzgZnRh1HGpA%2FY3aRArSX005QNx1IrKEkD75b0%2FdkpZCn0ldWQ1zmkJGtZk26wfQXnGMa4tMu0aZ3wY9JGVxlky2f54TeJDHuet8G44SSMlPiLBvbeOmiLghmF%2Btc5DceDvJD8o8FK3R90qmPkOdNZgRyBDHLheLGfggG4jy1MJizC49IP7ApJbSO%2Bm6R4qRnt9TI%2Bkh8xEAiiAA3vr5OxgXnZq%2FBujFj9%2B8p6wRzaDF0FpKu2exL%2Bz5KUiAeFziLFezW%2BO%2FIjMxQNIJ3gbHjWL%2BHBxRILKu6VFXTPNaP%2F7LzIOLPaPBSOEo25raujxPNHZhUapZj4WG44Suw8hRA%2BobncZKbZbAzRHEl8zeJMQPS0hPize%2Bx0NEI%2B2rvNlg6BYM9Ihcw%2FbXRwgY6pgH2AOdQ4ZvjwWIRHZePe3mAMuY69lha1kcUjoH86XhKXX1WRX5jQHFZMf6hdOkWvsDwnsVWOm65u71PWq1Yq1bgS%2FxPFF7O3Gon16iFOVWOBRht2WyNEAyHU14sj%2Fje5Nou30kmfZDSLxyhYkt5YnsM1vIcLiIsBPmLobCImYm9bYnwY5CL1ci3OBqF3xKS%2F73FL3Fs5TM717B0ZjO%2FluGhEhpOteG3&X-Amz-Signature=e5069970c1bc95551863f408ba6698aa64e24bb2737c05fa875ede7242a3b751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUFOCHA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUQvaqkBiZTJ6f2ZA7au39AAQh5w1ThxkpM9MwHvgVCQIgPK%2BAYuDPo3fPC2Y0RGzIKL5Cg%2Ftpl1X%2F5kbfidA5zdQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfpkSdZ2PX5x2IqIyrcA%2BMi4bNH9TPKzcYmwQf%2B%2FXam4EU%2BltxtXk3jpCYUj%2F2IawfFzf2PfnhxmA07mMdqYPRgWf5dCEH68oyFdOtRY9tapdY29LutiPlXN%2BAwz0%2FfZoVh419E1voo3Kp4V1MDKCDAU4lFC4YyfJdlq8NqIGWQV8pf%2BKFXmlWbibYdThhj4H9MLVmbrQS9nfAlWVLgQUwJ8w18bmIE%2Br1kQYLrtxO0c1654ubHiFFjItVOT7YaYHMFC4TJPEmCWVsx3Jo%2FSk7vIsrMGJ9x3WZfhYz9TqbkE92QbiVJsAIiNQEHC78YLTrW9WRkkYIyPdW2XByGQZ%2BMoQiYsloY3LSwwBTfCBa2kuw84w%2FpPn8zzlqWAdNikdgefr%2F7GBtgljv2YCP5cROTpFbLDgwpoRii0M856dAoXOh%2FCChpb3Q0%2FjCwTKOfYb1hnfIEK4mOujfsWpu%2ByW43TXAq%2FSNXdAySqCsUbVSXWxG2O5eM0xmGFp2k52fV7ZwNy17ssfINsShwFalq6SOFvF69q3BLt3VYAgslmnOiofdFbsfoJPp1I4BO1Kv3JJA61v3cPfq1wY45wtCvOEMz6ODR58fowmfmQejyqmBRuHa2qx20bEKsIaWheWr37JYXYLRl5IgfEExvMN210cIGOqUBEdU5i900wSNz9JXcsqAKR5T6UUHdFMQs7I6jdyT4W7fMPKODIAq%2Btv6rXaK%2BuWnEXFMgF6qTjRArr03lJeV4A5i%2BFtaWa2dAQlO6bdDR0peoNi1cq9wGfaMqniQNJXILt%2Fl9cV0S9OxBVLI4sdPU58%2BY0yWBW1qALQU4a8%2BigSKyCyMdNYl2rPqmS13pzoXakXogBTaajEPPFOf6ApcIrY5Fmy1X&X-Amz-Signature=b9941d20e903db4ca55cb4d0230c36415cff942acf6cdb74e99c924f50defcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
