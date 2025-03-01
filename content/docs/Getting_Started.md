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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WSQ4OC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDiaI6sPMd8ApOtA1k1qph16mKYZTzhsrk%2FTdSiXkJq0gIhAMF3l8Qn9AT%2BsDyQ%2Be11h1DvIXB1BpUp0i%2FPkAEzwfsUKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNHz%2Bn6NzRBzmL%2Bo0q3APdDVQBJJ8MeOoMUnZH7mWjJ5nTJFmJD9a5e%2BIpJKhsB2EPfhp5VzcKkpOnL0NBfRbJrGF5wlmWM%2BKfWEFqhEZQ6Wr5KQYafU2U8FxBwUgODNzGC1VtOcNIZxF%2FWF54eZ4PAihb7nP%2FlAbW8%2FaJaxR%2BAeHLGLYMxM6zOr85TIK0%2B5ojaYd08Al6xE1iqQqAmjgLGhXVT1Cl9W7nbfX8YAoCZ8m0lr32wv7uZ4zMEWqngnUre6uDIsXKJEOxJ0skiS1I4eEg264apN%2BmzN11dpMjnL19%2B6KmgauJkisREBgu2FLwzK%2FCq9ZP6pj2Cm55Sf4cQskkWGRSFh6%2FC2Vac%2BUGu3RKTDDCxztzKKAKbXyoite5zDDrCL7WowwNhHnWkvISrLa7gosIKK7iL0vAKeUcO1khFZEVvE13hZE25pZF%2B8Fp5tF7H2JE4egOoqWNxNTSC6KaIF0gJ57N9vNHN8bjSrNT4%2BHB6cWBPqtVAV7slDelpyLqKlZKj0kiBsxD7QjSeC%2B8muS%2BSh6RCzYb%2BFLMIL%2BUTAGuR4OJcoexdrD1PO1eyapLcGy0geXms7UhcL7sN6TudOJwwMOMP2K5lf8BAOxZK7Y7UEMbQ4xAp2YlsQPcAIF5Cr6%2F4ny%2BeDC%2FlYy%2BBjqkAdGzfCzsd4xCk9bpPW8dWH58Z8Udrx5kw0NcmqQBTJPbpjRjeWHV2WdKE2F3g2hdHmjyfQLRQrKVLi%2F%2Fggrq3I1Nlehnq%2FebKW%2BNkhSfuw%2BZGy3wVSw4ra7A3pAKkjyXjUv%2F%2F72JYGPraU2tbPWSjISNps14D8XrFyq0%2BDBHU1m9pw3YJ9ZeueQuWGwjq1IrCkCwX0W%2FS4cPmN7SFxWH8GF8RUOl&X-Amz-Signature=17552d96712be51673d9a87908bcf0819a315937fe5584a2c0550274e643d715&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WSQ4OC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDiaI6sPMd8ApOtA1k1qph16mKYZTzhsrk%2FTdSiXkJq0gIhAMF3l8Qn9AT%2BsDyQ%2Be11h1DvIXB1BpUp0i%2FPkAEzwfsUKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNHz%2Bn6NzRBzmL%2Bo0q3APdDVQBJJ8MeOoMUnZH7mWjJ5nTJFmJD9a5e%2BIpJKhsB2EPfhp5VzcKkpOnL0NBfRbJrGF5wlmWM%2BKfWEFqhEZQ6Wr5KQYafU2U8FxBwUgODNzGC1VtOcNIZxF%2FWF54eZ4PAihb7nP%2FlAbW8%2FaJaxR%2BAeHLGLYMxM6zOr85TIK0%2B5ojaYd08Al6xE1iqQqAmjgLGhXVT1Cl9W7nbfX8YAoCZ8m0lr32wv7uZ4zMEWqngnUre6uDIsXKJEOxJ0skiS1I4eEg264apN%2BmzN11dpMjnL19%2B6KmgauJkisREBgu2FLwzK%2FCq9ZP6pj2Cm55Sf4cQskkWGRSFh6%2FC2Vac%2BUGu3RKTDDCxztzKKAKbXyoite5zDDrCL7WowwNhHnWkvISrLa7gosIKK7iL0vAKeUcO1khFZEVvE13hZE25pZF%2B8Fp5tF7H2JE4egOoqWNxNTSC6KaIF0gJ57N9vNHN8bjSrNT4%2BHB6cWBPqtVAV7slDelpyLqKlZKj0kiBsxD7QjSeC%2B8muS%2BSh6RCzYb%2BFLMIL%2BUTAGuR4OJcoexdrD1PO1eyapLcGy0geXms7UhcL7sN6TudOJwwMOMP2K5lf8BAOxZK7Y7UEMbQ4xAp2YlsQPcAIF5Cr6%2F4ny%2BeDC%2FlYy%2BBjqkAdGzfCzsd4xCk9bpPW8dWH58Z8Udrx5kw0NcmqQBTJPbpjRjeWHV2WdKE2F3g2hdHmjyfQLRQrKVLi%2F%2Fggrq3I1Nlehnq%2FebKW%2BNkhSfuw%2BZGy3wVSw4ra7A3pAKkjyXjUv%2F%2F72JYGPraU2tbPWSjISNps14D8XrFyq0%2BDBHU1m9pw3YJ9ZeueQuWGwjq1IrCkCwX0W%2FS4cPmN7SFxWH8GF8RUOl&X-Amz-Signature=ba3b2a2f5360238524c253bc608f77da39a3bf3c7f444deafa2ef8039cabb064&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZLGQ42%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDYFNmY%2F3RvtIeUAEQn%2BxAb8PofP%2B81c7LOFCJN1NvEwwIhAKnBKYAyhqz4n46JIbwYejuvYRVKvIiKFVr8VHPJ3oryKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKjMSejblgP01wX0Qq3AP1CM1uw7AuEDU%2Fi9KlUpRdC6BJ%2FsX5QGGEfiZPKzEWgL9ye3aj28r8Wqyi8Eo5HmEWbd%2FDRH48BukEXL5mu%2BxJ9AQ57ZbI7wRacWcxwfZI7biD0R%2FAxvBRho48%2Buap5C3I9MRaQthf25FUY7J7EgbAH5DKEGbRt%2BKsBgAuGaRUUI%2F73wLT7s%2FRMHJ89ImIm7yjb3tEBMUIWFryXhCT3zC6Yc%2BwPl8leAOm1w10qtc98IQIzHa4TzbVEw%2BzEOS9F2IPC4VStI00V5Xila0eAohTIkwQ1%2FlsvG9M4R0TSEkHZEB0VrAr2yaKW%2FOOGFlClAXHX5dhAJYjEiSNkCWXsWFpHd7IPA7gMPHhNzT1sUbJpp7IkiViBhHYhXUv98XWN9WeDxHbg9VHayKc2vx7I0n4J1czfM70UUEDfVZD3CjnX1H61%2BMQiOTR7Ka2jDZA2UoFlTicHSk8lH92aubR%2FKBvsTjUs4nUxd6WM1X60Amhp22kvGnefetJncPH99MQ%2Bj6A9WBo1lZevx%2BaNEzAa6%2By6AmNFwx7ZYa3UR7avnKUSuM0sDMSegYPvW2Y1rNpq0%2FGZqsvs%2FrUGyZsU%2FKT0UTgjjwx9A00B9Kd6nT%2BqerjT3x1umRR%2FLmUt3RHfDCglYy%2BBjqkAfgFO0DfX5dga%2B0HUQG9XjqcqB9HK5r1D5H4n61LCjco5sQu0ynOPJ%2FSL%2FQ6pdBlu7QYxyECz%2FDVAb9vO%2FiMpetr5jsRipPZJtyuBTPRGcE3r0ygPiPgO56AtVK9rRfu%2FsuQONoCGybgcorDY%2FJQnu7d%2BRTn95fQsl42U5ZTJa6fudWjcI%2FNE0oWMy0RvQMj5KKXeie4HLmKABEZMhSMNmxpZqSO&X-Amz-Signature=2288c3d8245ef3354aada2a2cc1383a50df485bb656e3fde8434e48b0e6a13e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DE6Z6O%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCaROkHZVoeTIZQi1RTdfSdJ4Crp4KzmTFoOqHZ2wDhPgIgTlMKZYD9a8iO5q2lkOkhuhc9abeSj7WL3Pgs0GOl9FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLURil0fcd05bXvb5SrcAw1cqfT%2BJoTLlolTrMWKBHlehXkNWB64EUJkuEFEWgtaM%2B5A9YpXKPUcE2ljPmV6cyw5KvfLUQvoK2of8UZDp%2FsQ%2F%2F1vKXO62JEZ0gwuWY7EcLuCd%2BeAYAInH5yzDp1xmtVC2U03aeHiRGk2C3re%2BDDst519CQh5b3y5r%2FU6qsxen619mHT7Qd5u8l4GfVce3Q4tiRZoJNgvjLMa3%2FU%2FRuZWjtweb7H%2BtVX%2F2OZCZj105kpW%2BOXPqlZVqybmW9tSKVX8p23EYr%2Bde7mHMO69INKoCACZ6zlBAjol3JYc9lAEt4i6vV5LXpc6zA0O6o7zp90uzD9sc%2F1USy0KiXEcGvKDUW%2Fk4A2DZGKzYVRS6jLZmXoLMagkvSzJ%2BkHX2leSFHaJYZYtnqFJfvGDo6SqdMQ83zFrNMb0ZBWAQ2laK8QHNSjrTggmRCN4SGT%2F1v4ka0YcSbBH%2FnfshjlWJkNAAfNThWl2NelCCXor%2BcinRknFNioLfmtee%2FdaCA2Nk6i7A91jMP2obKy9HNNXqfXjsPta5bhBOeSXwi%2BXdt3YjMJrWzLXgzqHzHC2d3M%2B1L5EDdwDm6dKhQ9KbAipiayjpcIeN0c9wa2ISvL0XNYDlZTRpuQ6hikgU6Gp57r4MJSVjL4GOqUBgDpynarkP%2BjTIANx73jOGwHfa3Lpc46vDZVyVStdJiXvoamaJTPg314mGqCjH1E9yoh6oaoNHK%2BsPqxZyPmPRfe0EODrxoxik%2B9J99rSUhcnNHGovv3kXaxP4k2%2Fm370OQsLOPHj0RHdOMYLI07zw7PP7kaZXrPTvM9pfhEBSAVxyoTNe2GoD1XiUdfPeC76hCc9rlZ4M8G%2FPZJ7uPPU4Xk3mZp2&X-Amz-Signature=b06d95fb1acd3a0b3fb21ce552f4864334234fb28d3c17a3424bc6ea328c5efa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WSQ4OC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDiaI6sPMd8ApOtA1k1qph16mKYZTzhsrk%2FTdSiXkJq0gIhAMF3l8Qn9AT%2BsDyQ%2Be11h1DvIXB1BpUp0i%2FPkAEzwfsUKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNHz%2Bn6NzRBzmL%2Bo0q3APdDVQBJJ8MeOoMUnZH7mWjJ5nTJFmJD9a5e%2BIpJKhsB2EPfhp5VzcKkpOnL0NBfRbJrGF5wlmWM%2BKfWEFqhEZQ6Wr5KQYafU2U8FxBwUgODNzGC1VtOcNIZxF%2FWF54eZ4PAihb7nP%2FlAbW8%2FaJaxR%2BAeHLGLYMxM6zOr85TIK0%2B5ojaYd08Al6xE1iqQqAmjgLGhXVT1Cl9W7nbfX8YAoCZ8m0lr32wv7uZ4zMEWqngnUre6uDIsXKJEOxJ0skiS1I4eEg264apN%2BmzN11dpMjnL19%2B6KmgauJkisREBgu2FLwzK%2FCq9ZP6pj2Cm55Sf4cQskkWGRSFh6%2FC2Vac%2BUGu3RKTDDCxztzKKAKbXyoite5zDDrCL7WowwNhHnWkvISrLa7gosIKK7iL0vAKeUcO1khFZEVvE13hZE25pZF%2B8Fp5tF7H2JE4egOoqWNxNTSC6KaIF0gJ57N9vNHN8bjSrNT4%2BHB6cWBPqtVAV7slDelpyLqKlZKj0kiBsxD7QjSeC%2B8muS%2BSh6RCzYb%2BFLMIL%2BUTAGuR4OJcoexdrD1PO1eyapLcGy0geXms7UhcL7sN6TudOJwwMOMP2K5lf8BAOxZK7Y7UEMbQ4xAp2YlsQPcAIF5Cr6%2F4ny%2BeDC%2FlYy%2BBjqkAdGzfCzsd4xCk9bpPW8dWH58Z8Udrx5kw0NcmqQBTJPbpjRjeWHV2WdKE2F3g2hdHmjyfQLRQrKVLi%2F%2Fggrq3I1Nlehnq%2FebKW%2BNkhSfuw%2BZGy3wVSw4ra7A3pAKkjyXjUv%2F%2F72JYGPraU2tbPWSjISNps14D8XrFyq0%2BDBHU1m9pw3YJ9ZeueQuWGwjq1IrCkCwX0W%2FS4cPmN7SFxWH8GF8RUOl&X-Amz-Signature=5e155ab751a445358bdaa9ac0d27c958d2b11984785c818567fe3c31b649d702&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
