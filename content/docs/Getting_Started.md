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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OD3KI2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCvpTVrERUtWsA3gz5JFJ9%2FgcRJZkvYj8cGWeUUZokMiQIgJrwbK0s2wO4rg%2Bw1ewDhHF3MlfwbBIO%2BPyxCEflScn0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1LQ6Q56WiCYxM0HCrcA7zlaM19GX5XePVP7sDZopoxR1KNUSzqRONjtFk0iLnHzH%2BAlihbGu1wqWW9rg5HGcvDvGy5byVtVHSjuRcZKUzHIu8%2FOgP4%2Bh31uf7FZ38iSKUKeOMwf7h4pIs0sSTVS2MYHpqFfbtTKFue2bqks2r1SqypTHaetYOWKqGxinFJjzPB92EAagHi1rXqX%2FG7rsEvXPgGKR49STiYS7KfHq2%2BnG4iI5r8JsKtncF8FEq%2FHTPm4FGxRn%2F33DcIJT4dKrub%2FRLJ4U7H%2BSIbGkWHaj%2FIJOSZLWPAyZrKCL%2FYT%2BT3wLSgVSbawXWm%2Fi2HAL02I3Gs2oZDOFKccc4oid7Rau1AQfvHvqFmT5UB0Xh6%2BODDVwiG6H%2F6u%2FiMsLQDvlFiTb3NBxcJgHIVtmSsgq75LHotdD%2Fa2p1coLrz9SvdrmqkzTLZvlrAL72fcv7FlSonXOLsDrURgXOgbSlYG9UJCb07QZAKdH82kP0z44rEGPmc5e%2FkvlSVjZG8S%2BeVy6BfV4FnTRdBtnwNOKGNPHGUoX0ZY7NLlVW7jh1giHMOYg%2BWvxY0%2BMI9npx%2BG6%2FGi9KR46fUoQrmW2K9QYzKYyPaA2kdTh0u6IyM0HjmBWL8ZROJTbjumrlIBdJlC3emMNO69L4GOqUBZQgWy%2F4zo%2Bj6ietAsXwTlad0Q1mPNWmeL9DgrkJJl1D4s%2BXyDjz5yFbozleOt2NkYwd%2B9tF2sP0b1iPtgFcyxma0c8UqoAQ5TdyLY0H1c%2BbzmfAOdzO2L1AnbxPOnwZbaPgny%2Fsx%2FzKfY%2FgjaoAu67YM68MBRxNchdh5XlUJRr9E5q0TcOpyeKwovGj9bUJauk%2FeZQwvQpvUDNvt1n5yikS9erlC&X-Amz-Signature=994c174ebade85023cb24729a1aab37c71a272ef767c906bdb24f7cf70540bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OD3KI2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCvpTVrERUtWsA3gz5JFJ9%2FgcRJZkvYj8cGWeUUZokMiQIgJrwbK0s2wO4rg%2Bw1ewDhHF3MlfwbBIO%2BPyxCEflScn0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1LQ6Q56WiCYxM0HCrcA7zlaM19GX5XePVP7sDZopoxR1KNUSzqRONjtFk0iLnHzH%2BAlihbGu1wqWW9rg5HGcvDvGy5byVtVHSjuRcZKUzHIu8%2FOgP4%2Bh31uf7FZ38iSKUKeOMwf7h4pIs0sSTVS2MYHpqFfbtTKFue2bqks2r1SqypTHaetYOWKqGxinFJjzPB92EAagHi1rXqX%2FG7rsEvXPgGKR49STiYS7KfHq2%2BnG4iI5r8JsKtncF8FEq%2FHTPm4FGxRn%2F33DcIJT4dKrub%2FRLJ4U7H%2BSIbGkWHaj%2FIJOSZLWPAyZrKCL%2FYT%2BT3wLSgVSbawXWm%2Fi2HAL02I3Gs2oZDOFKccc4oid7Rau1AQfvHvqFmT5UB0Xh6%2BODDVwiG6H%2F6u%2FiMsLQDvlFiTb3NBxcJgHIVtmSsgq75LHotdD%2Fa2p1coLrz9SvdrmqkzTLZvlrAL72fcv7FlSonXOLsDrURgXOgbSlYG9UJCb07QZAKdH82kP0z44rEGPmc5e%2FkvlSVjZG8S%2BeVy6BfV4FnTRdBtnwNOKGNPHGUoX0ZY7NLlVW7jh1giHMOYg%2BWvxY0%2BMI9npx%2BG6%2FGi9KR46fUoQrmW2K9QYzKYyPaA2kdTh0u6IyM0HjmBWL8ZROJTbjumrlIBdJlC3emMNO69L4GOqUBZQgWy%2F4zo%2Bj6ietAsXwTlad0Q1mPNWmeL9DgrkJJl1D4s%2BXyDjz5yFbozleOt2NkYwd%2B9tF2sP0b1iPtgFcyxma0c8UqoAQ5TdyLY0H1c%2BbzmfAOdzO2L1AnbxPOnwZbaPgny%2Fsx%2FzKfY%2FgjaoAu67YM68MBRxNchdh5XlUJRr9E5q0TcOpyeKwovGj9bUJauk%2FeZQwvQpvUDNvt1n5yikS9erlC&X-Amz-Signature=dc2ea2b2d6b13433989d1a4f131d34f5b49f3126c06446c71931ffecead3a451&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIODDTQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEI6IzKlwgiFtzmsgZO0qw5u5JxCrFXJLGoCLpMjLvtyAiBPtHvLXX9BGYzEWbNRZ7mngxAm9vqQXWVmkUZEo64L2iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYS7wZ2eJXz6J8aI%2BKtwDg%2FZ%2FGIz5fgWvy9VXkfnHovxcKtp78MO8POdHpv0QyudG94cya4qWSMg3uq8J67yD8HtvEBp%2Bp9TiTpvSlvVvliBO0chd3OIjzXfpn6u%2F6EuadsIew3IdK7hipHJX05PT61PR%2FuA71xQfG3PeJ6Tjv9DotKkSSNRVDuYouVaWcrUQ%2FHh%2Bkali1YO77Ihke%2FXa8zPLYm6nSQZPFUB5wKNufnM%2B8yuOfZo4zdvC7Re5RZSfUrGVkQw7dw65kxfbhHcG72fw7mGaIidFE3Q8ioWaK7Ot8Di4ixwyra79VyyDmeX0a6b0ASCIFvwORFGWCnMeMD%2B0BxLY7a171ZI1ig9sRVSYDQCz6NecuSPqCw3T99AA0uiRZRUiFaHcTPIAQ%2FujxPWB8XjO%2BynE7LNxIHehOZjT0jRSMKX%2FAEaBtmifSTXoBIDVnpe5XjGbOT6Pbc%2FiAESeMf4uNC7IcOgdLd2wT%2BH0TrqL39j7uB2QU7jajytEZyWd9DW6BOns8%2BNdpqPdIZr85JrTdfQ%2F7O9o4w3MD0HvPkBu5hFcJCDFSfJqdgg7egHupm9hvsV0Lvh0iEJ%2B3%2BdAxMNiIgxaR1HhpJ%2B3QjQJgqImVT3qZpyX9fEKVMKwzTPujkzNEwni1sIw%2FLn0vgY6pgGB1mw70M0KV%2F3Kbn%2FxydP%2BJEVwldOKWGdzZxzgcPRFyDKo%2Fis6btl1U7uhSLEddNnhBsGmrW4KtnAtqpHst%2BuoOZgXnmNz4Uf5edoaUSZGQHDw%2Fu2Y%2B%2Bs83KmUM%2FtyDaFDQlaigRbZO8mqrxdomaSH9o5A4ymrZN7SO%2BxWXqjFP83aZbwGHRVGoEu3NH1vbyCVE4KL%2B5EU0r6cfDfc2ALbhXn%2FJrDX&X-Amz-Signature=2c930cd55dc432c51d1a57695ca321029e768d7cf3b9a4b8d112bb60d7a7c7af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVGOEIZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCGMDYW7TPbuPjuO2VQTI1uj7D2HGcK6192IshBQYCC3AIgStNsFlEzadQE%2BnlUPuMQ%2F9i5xWYn6FVs1zIdi%2BjB2lwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FXXR%2BZ%2BwDsbD4NAyrcA2vUfWJM4SP8CYd6SuShzu6p3pxWp%2BY2ACu19fxgVwGCYVfKccXYed63smKKKIUkpnretsTA1e%2BBgshVmp2EzojqNOZPLNku%2BUZuSjHNrZpMzg3pK%2BW8z9WixFCrcPUYyc2KYv%2BL9rOHX%2F%2BkINNXbPJyENX9%2B33ycvKdc9U42fLrCBGxTtGFmQBVMgty%2BT7euOcEqPw2R6pdbK5238wNH0S%2BaVQbX0sFrtKxGEYZxjehVs95Q0%2F%2BaFipzC3CS9oael2l73QJvM%2F%2BdC4t2z1OknSX5C22bxTbnA2UBxBSfvuGxdCw8SeHIbnck0zHoch73map4BOPQvvEbWmQdB8CYTQheV48FS%2FATqiCrqU6bTug1LhirLWrKl%2BTOxT1tukGODksMMHNpekzzRDFLAHq8qt0j4pWAyjHTlJrt4OiR5DiwVZRKHdfVE5S9kOVmrz8hiy%2F1RrhI%2BQ7kNrHI1KF%2B5%2BpdEhfHa%2BsQrxP59tE2NUDGUDFnGXfZvn1cYcsljUjNCFiEoB5A79QluSMek2Vr33exp3FU%2FXzZAGUJwHwn6Ijl9M1bzlYt71R5YxAZq%2FNha0ulP8oVv6RyyO7GoXlN3VQIvrc9RubdgqKhdMoxT81QLRQrhgOJMOJw2WIMKm79L4GOqUBeqwzu7Szt0PUseGSARPI3naVcQ%2BLdIbNsxoKnoFsxHWXtya5WBy3BzrklGqjJfQwcur2OrIfpLupFWviJXDHxP5Y6Q1YQ1DUlyhq5JYFl3nPitoLNxHvdSNNIfYOToXQzAtV14uVzBFxTMw%2B2ny5EAyBaW24tX9Oqbk7tq3qKsKYaAER3YY5WavdPxjMYkWL8T7bcByX9%2FZI9fuNc%2FeRm98UIAzj&X-Amz-Signature=cd643c00bef211a8c27ab23e028ee66d7906abb19e59b899ff0f48743e188544&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OD3KI2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCvpTVrERUtWsA3gz5JFJ9%2FgcRJZkvYj8cGWeUUZokMiQIgJrwbK0s2wO4rg%2Bw1ewDhHF3MlfwbBIO%2BPyxCEflScn0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1LQ6Q56WiCYxM0HCrcA7zlaM19GX5XePVP7sDZopoxR1KNUSzqRONjtFk0iLnHzH%2BAlihbGu1wqWW9rg5HGcvDvGy5byVtVHSjuRcZKUzHIu8%2FOgP4%2Bh31uf7FZ38iSKUKeOMwf7h4pIs0sSTVS2MYHpqFfbtTKFue2bqks2r1SqypTHaetYOWKqGxinFJjzPB92EAagHi1rXqX%2FG7rsEvXPgGKR49STiYS7KfHq2%2BnG4iI5r8JsKtncF8FEq%2FHTPm4FGxRn%2F33DcIJT4dKrub%2FRLJ4U7H%2BSIbGkWHaj%2FIJOSZLWPAyZrKCL%2FYT%2BT3wLSgVSbawXWm%2Fi2HAL02I3Gs2oZDOFKccc4oid7Rau1AQfvHvqFmT5UB0Xh6%2BODDVwiG6H%2F6u%2FiMsLQDvlFiTb3NBxcJgHIVtmSsgq75LHotdD%2Fa2p1coLrz9SvdrmqkzTLZvlrAL72fcv7FlSonXOLsDrURgXOgbSlYG9UJCb07QZAKdH82kP0z44rEGPmc5e%2FkvlSVjZG8S%2BeVy6BfV4FnTRdBtnwNOKGNPHGUoX0ZY7NLlVW7jh1giHMOYg%2BWvxY0%2BMI9npx%2BG6%2FGi9KR46fUoQrmW2K9QYzKYyPaA2kdTh0u6IyM0HjmBWL8ZROJTbjumrlIBdJlC3emMNO69L4GOqUBZQgWy%2F4zo%2Bj6ietAsXwTlad0Q1mPNWmeL9DgrkJJl1D4s%2BXyDjz5yFbozleOt2NkYwd%2B9tF2sP0b1iPtgFcyxma0c8UqoAQ5TdyLY0H1c%2BbzmfAOdzO2L1AnbxPOnwZbaPgny%2Fsx%2FzKfY%2FgjaoAu67YM68MBRxNchdh5XlUJRr9E5q0TcOpyeKwovGj9bUJauk%2FeZQwvQpvUDNvt1n5yikS9erlC&X-Amz-Signature=efaea0a523e1ea615acdff09780f61dba51253ec641061e6ddba2eca2a60a9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
