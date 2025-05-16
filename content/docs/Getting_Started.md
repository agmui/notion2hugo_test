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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MDHSVP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOOBe%2Fm7HLEpKH7GjdqCeJ116Lx6%2B6P8QBy7Urx%2B3TVgIhAPhmsKsqyoyzQSiKTN8A2ZGYENB82FRG7DCQykMv5GunKv8DCFAQABoMNjM3NDIzMTgzODA1Igyp0PJx52hFxFxT9fUq3ANLlrIyOijcsAXGbPJ74vjGIcnNyH3YF6rOR2I1C58%2BaFYWYmUi256gYKFYXFhLZ9Q7WSkTZc3p1DbdmflaxuMjitb8oc%2BaJgblCNkGergAjOWvMmiddvq4jM0WC8ouf%2FA66vn6HmIvmWabocv61Si09bq0c5xY0DpBN7Hl9LMGjUiE%2Be4HyNOtSRRkayiiZke2gWtJ8ZfrHo9sGXpWGXdU27kFP9BI6YB4NCQwhLe30gEF9pOSYQh%2BuFChFrK4eEnrH%2F6tHihx6GWEsfuobnmTk2kHyCmNrR9uQB%2Fz0y0tJkDensaaRt%2FUQOZ%2F95E3lxdc3gJXTqubPyT094xtxPMuoOTghi%2F%2FNlpnZC0LjonV5GeXHOYPQtf6Hi9q8lVV3UD9h190MXxQFrIzJ%2B9w5Dr5O2gQi94SV6GjnYyMZWRyc5ZSW7yISMqxPxHYALfraLCDTxCYKWH3mslRpewPLvLH0Rh80e4JIN%2F89XeswEnjfdQTqau2YklUgibWfgVwoJVG407k%2FxdjCMnUL1zFDqNWfXLM2a8q%2BFI4J63eYMksCWpPKQA71pRgCo6L47Mhymwrb0FhVgHi7vmgyTfiQICUqQfnV30WX1v2aD0lzoFI1x86jjYCwqEFcScn3TDX%2BZ7BBjqkAZHDh1iI5zChqk2qsHxGLI2gJoK%2Fdg58kG6Cq7NA4SIE3jKtMF5u6xQyNgXieCSV86uhxb%2B5lcv2ELkfAztaoPtZ9uAubkvm3IdCBzeUco%2BUJIK0L4Gv58GhaX2uL0G3hk5Fsmoyvrl2mizuFsUunVdI8BxjWTutcgR44c0RPzF8YBnu7rv31Bk6cd61Nf%2FhNyaGXdDbbd0E31cx6W7ENq%2BIMTeY&X-Amz-Signature=adc6ddc4dc62851cf9708058def2d06e60042e28f7943deb15e677df86db19fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MDHSVP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOOBe%2Fm7HLEpKH7GjdqCeJ116Lx6%2B6P8QBy7Urx%2B3TVgIhAPhmsKsqyoyzQSiKTN8A2ZGYENB82FRG7DCQykMv5GunKv8DCFAQABoMNjM3NDIzMTgzODA1Igyp0PJx52hFxFxT9fUq3ANLlrIyOijcsAXGbPJ74vjGIcnNyH3YF6rOR2I1C58%2BaFYWYmUi256gYKFYXFhLZ9Q7WSkTZc3p1DbdmflaxuMjitb8oc%2BaJgblCNkGergAjOWvMmiddvq4jM0WC8ouf%2FA66vn6HmIvmWabocv61Si09bq0c5xY0DpBN7Hl9LMGjUiE%2Be4HyNOtSRRkayiiZke2gWtJ8ZfrHo9sGXpWGXdU27kFP9BI6YB4NCQwhLe30gEF9pOSYQh%2BuFChFrK4eEnrH%2F6tHihx6GWEsfuobnmTk2kHyCmNrR9uQB%2Fz0y0tJkDensaaRt%2FUQOZ%2F95E3lxdc3gJXTqubPyT094xtxPMuoOTghi%2F%2FNlpnZC0LjonV5GeXHOYPQtf6Hi9q8lVV3UD9h190MXxQFrIzJ%2B9w5Dr5O2gQi94SV6GjnYyMZWRyc5ZSW7yISMqxPxHYALfraLCDTxCYKWH3mslRpewPLvLH0Rh80e4JIN%2F89XeswEnjfdQTqau2YklUgibWfgVwoJVG407k%2FxdjCMnUL1zFDqNWfXLM2a8q%2BFI4J63eYMksCWpPKQA71pRgCo6L47Mhymwrb0FhVgHi7vmgyTfiQICUqQfnV30WX1v2aD0lzoFI1x86jjYCwqEFcScn3TDX%2BZ7BBjqkAZHDh1iI5zChqk2qsHxGLI2gJoK%2Fdg58kG6Cq7NA4SIE3jKtMF5u6xQyNgXieCSV86uhxb%2B5lcv2ELkfAztaoPtZ9uAubkvm3IdCBzeUco%2BUJIK0L4Gv58GhaX2uL0G3hk5Fsmoyvrl2mizuFsUunVdI8BxjWTutcgR44c0RPzF8YBnu7rv31Bk6cd61Nf%2FhNyaGXdDbbd0E31cx6W7ENq%2BIMTeY&X-Amz-Signature=527ece3b29d38bcbe2a202271ae376454926d9fa07574897d0e0f5abe1992a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MDHSVP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOOBe%2Fm7HLEpKH7GjdqCeJ116Lx6%2B6P8QBy7Urx%2B3TVgIhAPhmsKsqyoyzQSiKTN8A2ZGYENB82FRG7DCQykMv5GunKv8DCFAQABoMNjM3NDIzMTgzODA1Igyp0PJx52hFxFxT9fUq3ANLlrIyOijcsAXGbPJ74vjGIcnNyH3YF6rOR2I1C58%2BaFYWYmUi256gYKFYXFhLZ9Q7WSkTZc3p1DbdmflaxuMjitb8oc%2BaJgblCNkGergAjOWvMmiddvq4jM0WC8ouf%2FA66vn6HmIvmWabocv61Si09bq0c5xY0DpBN7Hl9LMGjUiE%2Be4HyNOtSRRkayiiZke2gWtJ8ZfrHo9sGXpWGXdU27kFP9BI6YB4NCQwhLe30gEF9pOSYQh%2BuFChFrK4eEnrH%2F6tHihx6GWEsfuobnmTk2kHyCmNrR9uQB%2Fz0y0tJkDensaaRt%2FUQOZ%2F95E3lxdc3gJXTqubPyT094xtxPMuoOTghi%2F%2FNlpnZC0LjonV5GeXHOYPQtf6Hi9q8lVV3UD9h190MXxQFrIzJ%2B9w5Dr5O2gQi94SV6GjnYyMZWRyc5ZSW7yISMqxPxHYALfraLCDTxCYKWH3mslRpewPLvLH0Rh80e4JIN%2F89XeswEnjfdQTqau2YklUgibWfgVwoJVG407k%2FxdjCMnUL1zFDqNWfXLM2a8q%2BFI4J63eYMksCWpPKQA71pRgCo6L47Mhymwrb0FhVgHi7vmgyTfiQICUqQfnV30WX1v2aD0lzoFI1x86jjYCwqEFcScn3TDX%2BZ7BBjqkAZHDh1iI5zChqk2qsHxGLI2gJoK%2Fdg58kG6Cq7NA4SIE3jKtMF5u6xQyNgXieCSV86uhxb%2B5lcv2ELkfAztaoPtZ9uAubkvm3IdCBzeUco%2BUJIK0L4Gv58GhaX2uL0G3hk5Fsmoyvrl2mizuFsUunVdI8BxjWTutcgR44c0RPzF8YBnu7rv31Bk6cd61Nf%2FhNyaGXdDbbd0E31cx6W7ENq%2BIMTeY&X-Amz-Signature=bd60761372d8b186c9c0806078b28d2f747c5ada405b1fef63cd4e566085d214&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTFI4IV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy3%2B5m%2BMGJBemqKP60GWkTQ0lECISdYeebO2iQsFrRJAiEA3cGLhp%2BihIXMHZKrMu8E9IMZKyqJv33IQr%2BmOYMzEd0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDChPjWC4GMpEIMGmlCrcA2VjgSueLL4pUird0oASRR211H8mCN%2BptLK4yh434KYrVl20vQedNxrnJKHOAA5aCe2wdr3LXVDnH7aZouotH%2F69%2BkcJtdNXyAS%2BnqremRZTXZaluDQmMh6J%2BVZ2es15yn1P7C%2Ba0Um0Ih6HAhb6bmHIrj29nS6oovjjFzHscNGNJt8%2B5LZAmJ6e%2BhCXgM3fZAffhETC6%2FAWQEJE6ZYi%2BYmntALCEvCCI4dx2ZrGlK93PsKgLRCU%2FBUrmbjhYU%2B94e5YjIhVQTu0QVPqI6LjPKwDQlP2cfCvSH0qCXBelS2ZrQm6cvxvNqg7rd52tmw4RFX%2BmRV2SDw2%2Ff8zW9xpvN71MbEkMlluj%2FtTS8chLwIMPkyCpRe5MDwTVMlTVceMF6bkBc7MiOCVsLfx%2F7bctOwRuvkndxFtwiuZ2GG23yYUQxURpvqGdqLNsjmCt%2BEuO7WxMob%2FMOpcTBWQ6f6tTqu9hJ8xV6TX2EOHH5uFCrhTpkm7u7nKunbUFXZfX4tl3MCJ3sRHD3MHsFUQOvDoC0DaykReyEkUYDQwtuNZ%2Fl2Akl9xfShCLGWgVlfDp5pgXITiNgLfRRMxaOb%2FSSVAZ5FSLHVoOfTBi5HrbJwrHU35Hlj2msWOAOu2bmgDMOD5nsEGOqUBrRLNlJ2%2BjORfRM%2BTlzvsRYJl%2FS2Iaz%2B%2BnPr0HViHhetWSyB49UDXjQLTZvXgwks5L3JTQAUrTd2EH6J1Qc3m%2BLDldU4uoNpBfcp4cWfnOqI1J6c8MxDiCN6EJz4LkFpTd7AxbkO%2BRHeiCVQo6PxkF0r3CaT8BKLF0r5qLf23c7cXUfxCtydH0C%2BwQ1M8tdy9RTjm34TPkkiFS2SRiVJHdt1byzt5&X-Amz-Signature=af9d996bf189e7b19cc202d65baa4dcedfd13b1786dd66d58768183d1bf9fb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRAZ67D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEhshMogpcAgWs0Agm6NPJ97LWS16lQ9sEFl8AtSbUjAiEAg18VOpyaM8nC8s%2FHEMeJcnEywXHTdHX0GiFcJoOTkLsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMcNq2TOa%2B36oZ0C6CrcA7bENLeMDGPdZptcWzXy1JQ%2BQVzAlKgj6iXtjxwcn3gLUG%2FSsmf7FljGleo%2BEqTtKvUG0TFGWvUxjJ5SLKDBqb4PyxJpJp5D2eYyfVoW9QpjQb02aXMVRwUX2QOIxvXheKEWbjAj3eU7dyLvvhcU8ZLedUWbh7CqhqDo%2BbOnyrAsCz8eFkXdtMf%2B6o41Q2PHaSB9u8WmE4%2BjdbxnENY8Xz1OPjZsSuCfXfN8L%2B4CeN9LWrpyV%2FUt2QJ7g4P0foigo40bFEULpPbFMGOQyo8L726uOY90Hcv9c%2Fqh%2FGGP%2FgN129JNe3pGWradBm6yNC9E%2Bv%2BoukrYZX%2F%2F0De0VxpMa7xtLJPP0xl7Nrr5E41YTw4sGLlCl0bm3rpW8lpk0zNxSQGxMZ7t%2FOynSqZtXEI3aM%2F18oWnI3kWFrHFuA1V3KFeAMB4%2B0xrzMWscwhuh6Y%2FQ5ZkpwCkx8dfCacvwx4VQOFyA9nqhKymvMz%2BvDO2F7SiAIHNlR5ll%2ByTMoIufhG%2F7WLmX2pDfNl%2BJoYtZ4Y4P4TFO7tzx84kCNLsxUydYrynyG67jgz%2FyKS9uvyX9ecogtkzOzJnLBZwaTV74A0WQDGgE5f7SiBHKPzPoIrdVQJJt68d0B7yU4Uk39sbMNb5nsEGOqUBHrOg2uavz%2B2X1KxiHvLFGBnvQtgU0lLHmOZhQyiQBYr42NYM7e6XXAkMG8oT3ZEDApYNuLSl0z%2F8Sw3lWt1aDiakHjFWHaiIbvBxyTYgOw79jlrpdshBZfgl0jTTQrEJ1fLnnd7uxgxgilG4OJUc%2BD99iTFS2%2Bfuga%2Bxl8%2FfhUwDvZeEe2z6FtcafjkKVIaIUSihi9yOf8vZ5B0ckFFi7mvpoffE&X-Amz-Signature=f9ad0812f5a9cbc31165738949104d60c08753699f75e9063ea0d259121aa6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MDHSVP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOOBe%2Fm7HLEpKH7GjdqCeJ116Lx6%2B6P8QBy7Urx%2B3TVgIhAPhmsKsqyoyzQSiKTN8A2ZGYENB82FRG7DCQykMv5GunKv8DCFAQABoMNjM3NDIzMTgzODA1Igyp0PJx52hFxFxT9fUq3ANLlrIyOijcsAXGbPJ74vjGIcnNyH3YF6rOR2I1C58%2BaFYWYmUi256gYKFYXFhLZ9Q7WSkTZc3p1DbdmflaxuMjitb8oc%2BaJgblCNkGergAjOWvMmiddvq4jM0WC8ouf%2FA66vn6HmIvmWabocv61Si09bq0c5xY0DpBN7Hl9LMGjUiE%2Be4HyNOtSRRkayiiZke2gWtJ8ZfrHo9sGXpWGXdU27kFP9BI6YB4NCQwhLe30gEF9pOSYQh%2BuFChFrK4eEnrH%2F6tHihx6GWEsfuobnmTk2kHyCmNrR9uQB%2Fz0y0tJkDensaaRt%2FUQOZ%2F95E3lxdc3gJXTqubPyT094xtxPMuoOTghi%2F%2FNlpnZC0LjonV5GeXHOYPQtf6Hi9q8lVV3UD9h190MXxQFrIzJ%2B9w5Dr5O2gQi94SV6GjnYyMZWRyc5ZSW7yISMqxPxHYALfraLCDTxCYKWH3mslRpewPLvLH0Rh80e4JIN%2F89XeswEnjfdQTqau2YklUgibWfgVwoJVG407k%2FxdjCMnUL1zFDqNWfXLM2a8q%2BFI4J63eYMksCWpPKQA71pRgCo6L47Mhymwrb0FhVgHi7vmgyTfiQICUqQfnV30WX1v2aD0lzoFI1x86jjYCwqEFcScn3TDX%2BZ7BBjqkAZHDh1iI5zChqk2qsHxGLI2gJoK%2Fdg58kG6Cq7NA4SIE3jKtMF5u6xQyNgXieCSV86uhxb%2B5lcv2ELkfAztaoPtZ9uAubkvm3IdCBzeUco%2BUJIK0L4Gv58GhaX2uL0G3hk5Fsmoyvrl2mizuFsUunVdI8BxjWTutcgR44c0RPzF8YBnu7rv31Bk6cd61Nf%2FhNyaGXdDbbd0E31cx6W7ENq%2BIMTeY&X-Amz-Signature=4bd23e20310f50c623b8ebaa0c33aa40ace35d67ef6b9fdfddc74a815135622a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
