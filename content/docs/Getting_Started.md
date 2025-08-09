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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3O5JCA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDez2wHFKSqwn4%2FPGhsU38Xg7H%2Bjba7M9pEigAgmcu45AIgXd4n3vD2n42zx9RePlaVeO01uTCSkdfZPTZQdHkMsogqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBpBcFnae3tDGg4xSrcA6JC2KgHh%2BPrRPXi7gsi23fc9UH5cGhvOVdj%2FvsHKgTLEJeVJeRlPJ6qasCJPkWbH0Du1eK0a%2FkN3jzvQ3fvZSD%2F3bmXK6MTnOtePO1qm8bRmCmJX0KLAA9kjt5bFPyjvtT5Rhg4xY7LLoghky7SsqhNgWDE1Ls18nZ24EWAx48VJzBLaj6g65ybZudYyg13SBB%2FK8IY3z3LSmuVycmicBYq2tZvK9yQa040dhvnKxYgHCZ0lXTt%2Bn%2B1HKKuYKwe9ljFTqiQvc8JjKpDb9qJ91r67uIW3y1vdU6U6kOEweqf33CYDmpLKC5URKLLN%2F2f4vPM117S6nvidZCGh4oxoE3%2Fk9lpEamnYLieU%2BBAnIdGCFPDkbJ8jEYp%2FFf2Ea2o3Wj4R049M%2BPH5VdISes2bj%2BvSOkZKORQ0QdYQPXNetwrWWMuOee%2FZoMzq6mgAiruTM1Tr%2BVsgyiw0LVaVZ%2F4RdP8TzD7lUUBGDN%2FgD2vsQ6X6fq5YkaUFELnOECl%2FDXst%2F%2BoSJDPCsAkPs0KAQHXmIaIMSur5Igr9dhg6uy1nJQ7cVSmHj%2FxypdeDNPHvgGKYrXxzAc2DRK%2F2ndwmO9Xa8L%2FGx5oI0CG0BDiIXmWmeqI%2FCOYAxsV5C74Oa0DMMjE28QGOqUBQ88xrWPu1BAsHFek4zxmluOscTizfkBK1XDVDZSppLCt%2FJfh41wdI1f4uaGqNxX7CeKugf9xMk3kuo6hoyeG9kVziORAkm0M6U%2FeSmXbMDzC927ZSPb1a1uI5cfYm81oxUql8GKfDgF1cZdRjmyU64ezfkS0qMdJESU%2Bxd3FtRgfLMwCda3y3t%2FgO5guTsEx5cFqLi4o2bFFWuSkgKXNUU7DHnM3&X-Amz-Signature=1796328d05b013e086715a4964bbc885c2993e01993e9baef65ecb769f07230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3O5JCA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDez2wHFKSqwn4%2FPGhsU38Xg7H%2Bjba7M9pEigAgmcu45AIgXd4n3vD2n42zx9RePlaVeO01uTCSkdfZPTZQdHkMsogqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBpBcFnae3tDGg4xSrcA6JC2KgHh%2BPrRPXi7gsi23fc9UH5cGhvOVdj%2FvsHKgTLEJeVJeRlPJ6qasCJPkWbH0Du1eK0a%2FkN3jzvQ3fvZSD%2F3bmXK6MTnOtePO1qm8bRmCmJX0KLAA9kjt5bFPyjvtT5Rhg4xY7LLoghky7SsqhNgWDE1Ls18nZ24EWAx48VJzBLaj6g65ybZudYyg13SBB%2FK8IY3z3LSmuVycmicBYq2tZvK9yQa040dhvnKxYgHCZ0lXTt%2Bn%2B1HKKuYKwe9ljFTqiQvc8JjKpDb9qJ91r67uIW3y1vdU6U6kOEweqf33CYDmpLKC5URKLLN%2F2f4vPM117S6nvidZCGh4oxoE3%2Fk9lpEamnYLieU%2BBAnIdGCFPDkbJ8jEYp%2FFf2Ea2o3Wj4R049M%2BPH5VdISes2bj%2BvSOkZKORQ0QdYQPXNetwrWWMuOee%2FZoMzq6mgAiruTM1Tr%2BVsgyiw0LVaVZ%2F4RdP8TzD7lUUBGDN%2FgD2vsQ6X6fq5YkaUFELnOECl%2FDXst%2F%2BoSJDPCsAkPs0KAQHXmIaIMSur5Igr9dhg6uy1nJQ7cVSmHj%2FxypdeDNPHvgGKYrXxzAc2DRK%2F2ndwmO9Xa8L%2FGx5oI0CG0BDiIXmWmeqI%2FCOYAxsV5C74Oa0DMMjE28QGOqUBQ88xrWPu1BAsHFek4zxmluOscTizfkBK1XDVDZSppLCt%2FJfh41wdI1f4uaGqNxX7CeKugf9xMk3kuo6hoyeG9kVziORAkm0M6U%2FeSmXbMDzC927ZSPb1a1uI5cfYm81oxUql8GKfDgF1cZdRjmyU64ezfkS0qMdJESU%2Bxd3FtRgfLMwCda3y3t%2FgO5guTsEx5cFqLi4o2bFFWuSkgKXNUU7DHnM3&X-Amz-Signature=5000d82c925b33d8c1e48df93e131119e57946356284172cfbb0a7537abf2798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3O5JCA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDez2wHFKSqwn4%2FPGhsU38Xg7H%2Bjba7M9pEigAgmcu45AIgXd4n3vD2n42zx9RePlaVeO01uTCSkdfZPTZQdHkMsogqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBpBcFnae3tDGg4xSrcA6JC2KgHh%2BPrRPXi7gsi23fc9UH5cGhvOVdj%2FvsHKgTLEJeVJeRlPJ6qasCJPkWbH0Du1eK0a%2FkN3jzvQ3fvZSD%2F3bmXK6MTnOtePO1qm8bRmCmJX0KLAA9kjt5bFPyjvtT5Rhg4xY7LLoghky7SsqhNgWDE1Ls18nZ24EWAx48VJzBLaj6g65ybZudYyg13SBB%2FK8IY3z3LSmuVycmicBYq2tZvK9yQa040dhvnKxYgHCZ0lXTt%2Bn%2B1HKKuYKwe9ljFTqiQvc8JjKpDb9qJ91r67uIW3y1vdU6U6kOEweqf33CYDmpLKC5URKLLN%2F2f4vPM117S6nvidZCGh4oxoE3%2Fk9lpEamnYLieU%2BBAnIdGCFPDkbJ8jEYp%2FFf2Ea2o3Wj4R049M%2BPH5VdISes2bj%2BvSOkZKORQ0QdYQPXNetwrWWMuOee%2FZoMzq6mgAiruTM1Tr%2BVsgyiw0LVaVZ%2F4RdP8TzD7lUUBGDN%2FgD2vsQ6X6fq5YkaUFELnOECl%2FDXst%2F%2BoSJDPCsAkPs0KAQHXmIaIMSur5Igr9dhg6uy1nJQ7cVSmHj%2FxypdeDNPHvgGKYrXxzAc2DRK%2F2ndwmO9Xa8L%2FGx5oI0CG0BDiIXmWmeqI%2FCOYAxsV5C74Oa0DMMjE28QGOqUBQ88xrWPu1BAsHFek4zxmluOscTizfkBK1XDVDZSppLCt%2FJfh41wdI1f4uaGqNxX7CeKugf9xMk3kuo6hoyeG9kVziORAkm0M6U%2FeSmXbMDzC927ZSPb1a1uI5cfYm81oxUql8GKfDgF1cZdRjmyU64ezfkS0qMdJESU%2Bxd3FtRgfLMwCda3y3t%2FgO5guTsEx5cFqLi4o2bFFWuSkgKXNUU7DHnM3&X-Amz-Signature=a88fc39606f6347d8dedf3f7d8ca7b825980347e3680b89278fed0079da407f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4UPU5NT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCw1rAWHXhdfwFAEoqNlH%2BPDQcIU3NDYpK6REhN%2BUJrqgIhANYYmrEj8btlXe4pfPyMpIw%2FqhuYG5gPUDo1eyznNFznKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFTza%2B3M2Y%2BqmUoRIq3AOyRuHfBGxBI%2BcMHpqTyvQ3W0K4IIlf5n1XTUhjiwBPdg4kINFOPifEImLdKQGlN6sUXcsQ8%2BEeMKe07wLMfEkaxCa%2FEOdEkxaVay7FsqLsAcVe2fCk2cZnPP%2FOleFbGAk2oCNi9rFQcxX718X4rqw0Fzjn4Qkhs0r9GFQEhTbn0cVls5V3%2Bm8g0JmLoEKkooML7zBRxsyDNhRsVh4RC992LM0j5KqDh%2Ff%2BXuRHyKhPoMVgz3YLWGRc%2FQ8VMIoNNY%2FgtJ4n5QSoguJ9WcL6KqkX1gMBUC1ah4ZKFo2sNxjiiH%2FKtP9POLVQxgzckOe99oAKJX8d02Oum8y1R8QC%2FcyFN2nNuoELdFZVdBjVQZp9MVMpVivDvay%2FzpfMdzAaT8S9cGmbiqpLZpy2J7tiwnCLKdet5EWJyZNCqEmqPgHebxcAW1dtN%2BO2%2F0eO%2FblqXe32B4%2F9b%2B3%2FmcZs0XdafYrwWJTLt8LJR8gjpKs8mu2aJhIRMYZrPzwEoqVBQD%2F4BcZ8UORd3BbcfOuKwOWgifywbcnf239Oa5AS1lIfBPvm1AwwWeSFzGphsmPyJdF3YrAncEPSSB1TFzVCq3plyk15v3a2hVykwJiE5S7MsA7EDrxr9xaMYr8DmD6beDDTxNvEBjqkAeFJLnrBzP3t2Rau6%2BT3dfUONSLe2IWsP14yQnX940gHbuFLCW%2BkdYotFHlEJSNqqUAqLEkx1j3x4HNoP%2Bm2t%2Bj9nb%2B6JjDAAcC4u1igLmEX4rUOpuZfzizXkox%2FBvtEntSbA%2FQea%2BA%2FNeJpBnloMjhJmAOLs9YsykVe0nzBOVTMM58WShK7c1QAkc7cNho8YfrS0Bx71EbeYK61K%2B1arhbpb5V4&X-Amz-Signature=ac60324c9ab6e6cf9a3039ba278821378cae1a6060ae7d6f843b909a143a84f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECQB7LJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGj3SjLLe5HDMjxdbTDTJz4LkqVriyIrS3auOs2sRNPSAiEA1rOw4NIFa6ysZUot7FyMLaFw8YI8NJmFLPHcMQE7n0YqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqNEg2%2BWu1oyj0pUSrcAyQPgczS9t3NYDV8Te44o5k9jA9wFyG6YmTUFvy85Wdo0G2aRF9jqP2Im9d39skTx5sq4cWg4MZ%2F6bcKouv68IIi3YSmjppnhCHLgep5amZimZZZmG69sVLBRtr%2FH3uazEtaVe9OxN%2BdE7AvhlYT%2BXFTaiktt9lJCHgfn%2F0OUNizT4Xh4Sk6l32sKb%2Bly034ozFsHDPJHOG0Yy8JaQ2jrcJRQeKXxw2%2BUnwpqR%2FmvxkO2%2F7fxyKFcUWK2%2Fnu8aXheFjXO9hu27ZqQ%2Fs1LQv4NIrUx84xBS16kdvXya5AyDTY16%2F3hxxc%2BGZP5ALCbnlTVyeN5xaT32KtzZUdcuzYb1XF02d8zZIqFzLpmoqmd4ji3PEpyO3ouYHdpq4v7MeO1VKPbC133Zdxwj6M4dwPFMlBhWtZ%2B%2FYtaTVvmX5v4GwaG8GP6EGvPrphjm2pWVUHa95ic2rExgNOJ5BfljmBkf6Es4jOeFjg44a6IiEZgeE02%2Fgsbh65FsIpWxANouHQERR7ZOipwW%2BOy0nV13%2FGc618x%2FcNwWSX3%2FzPRK4djmQqsFLXpy9xHIT0XPau3MY%2F33gwkcqbHptrdyUTNxefmAtbMXjn2Ur2yahvyQS9HUebNeNGnt%2FTxbA03YtYMOjE28QGOqUBG28yG025Z4ZryJxyA4dKIhPMq3d%2BF4aTGczRoQZhMcnSnp61fociF0MKhOW3O2prUjUtETpSCgWACK40D61IwX3bD0vqHBF8KfQy3wr0kkwPjxGmsRPbDwHg%2FExQ6MlPX%2BQ21sP01wrIzZVFi0wXHAckiJwyHalaaJT0habyYC0xwtPet%2B%2FG1Qq6ttUzSC8nYgU1Xnx71zBDCxPIA1dCdlHwsNlN&X-Amz-Signature=5fb3125f82333fe5290c039d7f0627502e5f2e346d7678a65f527c333f8e921c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3O5JCA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDez2wHFKSqwn4%2FPGhsU38Xg7H%2Bjba7M9pEigAgmcu45AIgXd4n3vD2n42zx9RePlaVeO01uTCSkdfZPTZQdHkMsogqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBpBcFnae3tDGg4xSrcA6JC2KgHh%2BPrRPXi7gsi23fc9UH5cGhvOVdj%2FvsHKgTLEJeVJeRlPJ6qasCJPkWbH0Du1eK0a%2FkN3jzvQ3fvZSD%2F3bmXK6MTnOtePO1qm8bRmCmJX0KLAA9kjt5bFPyjvtT5Rhg4xY7LLoghky7SsqhNgWDE1Ls18nZ24EWAx48VJzBLaj6g65ybZudYyg13SBB%2FK8IY3z3LSmuVycmicBYq2tZvK9yQa040dhvnKxYgHCZ0lXTt%2Bn%2B1HKKuYKwe9ljFTqiQvc8JjKpDb9qJ91r67uIW3y1vdU6U6kOEweqf33CYDmpLKC5URKLLN%2F2f4vPM117S6nvidZCGh4oxoE3%2Fk9lpEamnYLieU%2BBAnIdGCFPDkbJ8jEYp%2FFf2Ea2o3Wj4R049M%2BPH5VdISes2bj%2BvSOkZKORQ0QdYQPXNetwrWWMuOee%2FZoMzq6mgAiruTM1Tr%2BVsgyiw0LVaVZ%2F4RdP8TzD7lUUBGDN%2FgD2vsQ6X6fq5YkaUFELnOECl%2FDXst%2F%2BoSJDPCsAkPs0KAQHXmIaIMSur5Igr9dhg6uy1nJQ7cVSmHj%2FxypdeDNPHvgGKYrXxzAc2DRK%2F2ndwmO9Xa8L%2FGx5oI0CG0BDiIXmWmeqI%2FCOYAxsV5C74Oa0DMMjE28QGOqUBQ88xrWPu1BAsHFek4zxmluOscTizfkBK1XDVDZSppLCt%2FJfh41wdI1f4uaGqNxX7CeKugf9xMk3kuo6hoyeG9kVziORAkm0M6U%2FeSmXbMDzC927ZSPb1a1uI5cfYm81oxUql8GKfDgF1cZdRjmyU64ezfkS0qMdJESU%2Bxd3FtRgfLMwCda3y3t%2FgO5guTsEx5cFqLi4o2bFFWuSkgKXNUU7DHnM3&X-Amz-Signature=474aca532b6c462fd4a86bfadb2034df5c44c8accc8d360d0de9f4e80f02ba2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
