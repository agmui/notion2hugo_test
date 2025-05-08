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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ2E4UG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADJD2dN1AaN5P9uFftQYiyvcsuBXfO7Z5DQ%2B1iVCnIrAiACpDAXiBgdbXasd2wGDaP0cQIv%2BQ9ly0VtUn%2Fj%2BLQuiCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMi6ZbI0nqqzdW%2FhojKtwDbWb0WgViPIrkekl%2FhrSmzTs9X854IWA0Qt1a9pBtJLe8lFaDHuvKN2dZ3fNi722qFKD1ZcqZnDqaZYvLovRvKziq%2FSk6xWr3LiJEKPhxkavcYjXrgJoSRMjctiYRN2Rr%2Bn8mP5h43CSULF6LQnDKps8%2BbVGsG8%2FaFC3b2AM%2FdC5ELc705fziBbot%2Bw2TpmYS%2BbF21Nkh03Pnm%2FhANmLrqRM5EOYybQ2hSg4djqgj%2BomODT10lPMH32Lk8DZaj0TImfS%2FdlVCUYHNqiJj1hh8I6VwE6Tv4nd64wCww4tsjb6vA8SoebROLwzP5yY2no4G%2B7mNdKK%2F3ieaywu2BYEmGRsWEj8jmZK5UdnWAhaewB8cwKuzZlSEbkzy%2B3KzT8vc9TN%2Fku%2BLt4%2F2qVlxFD2r5ktR8EWsxWh4o6H6G9SQ6byBY0inwHbUaFaxdQJKWuFJsqrLwU%2BRCly2HISwApQI%2FdMPlxo4MGono0obBffEFLcxW60ExCctAuPYHvObHFJb6z%2B1zlq%2FZrBiPvtz95o2GbP57v1AGBK7RCcUBYOaM%2BFEsOIQ3KR6cN8nEBPCx0xx7uY3Y7VqNButZl9fcH35JEVWF9gyzSWOrcFnVRVJFOgCjNp5BcuWzc9U93cwrcrywAY6pgF05Ve73GQSjFo5HNv3wGKhcSwC3dt8YyWcno59lSDMlieRHe%2Fyu2TDV6VsWBp2Z7ficXpw5TqM7HUpT968fzO5uzhJvt7rgvNu26jr6J9dAl%2FrynnNScToDI%2B5AFRT8C0gr0nYLa1RS%2BxMEn%2B2LJ8nLrHWwkYphCQSqSDwdUQUzj912%2FibLrBlx6wAdq8LCZQx43XKR73sUo7utF%2BLxEnXeTKFYsut&X-Amz-Signature=cb98ff0ebacbd197caed689b9d7a62ce1cdcf34d69d8f7339aedb1b4555167e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ2E4UG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADJD2dN1AaN5P9uFftQYiyvcsuBXfO7Z5DQ%2B1iVCnIrAiACpDAXiBgdbXasd2wGDaP0cQIv%2BQ9ly0VtUn%2Fj%2BLQuiCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMi6ZbI0nqqzdW%2FhojKtwDbWb0WgViPIrkekl%2FhrSmzTs9X854IWA0Qt1a9pBtJLe8lFaDHuvKN2dZ3fNi722qFKD1ZcqZnDqaZYvLovRvKziq%2FSk6xWr3LiJEKPhxkavcYjXrgJoSRMjctiYRN2Rr%2Bn8mP5h43CSULF6LQnDKps8%2BbVGsG8%2FaFC3b2AM%2FdC5ELc705fziBbot%2Bw2TpmYS%2BbF21Nkh03Pnm%2FhANmLrqRM5EOYybQ2hSg4djqgj%2BomODT10lPMH32Lk8DZaj0TImfS%2FdlVCUYHNqiJj1hh8I6VwE6Tv4nd64wCww4tsjb6vA8SoebROLwzP5yY2no4G%2B7mNdKK%2F3ieaywu2BYEmGRsWEj8jmZK5UdnWAhaewB8cwKuzZlSEbkzy%2B3KzT8vc9TN%2Fku%2BLt4%2F2qVlxFD2r5ktR8EWsxWh4o6H6G9SQ6byBY0inwHbUaFaxdQJKWuFJsqrLwU%2BRCly2HISwApQI%2FdMPlxo4MGono0obBffEFLcxW60ExCctAuPYHvObHFJb6z%2B1zlq%2FZrBiPvtz95o2GbP57v1AGBK7RCcUBYOaM%2BFEsOIQ3KR6cN8nEBPCx0xx7uY3Y7VqNButZl9fcH35JEVWF9gyzSWOrcFnVRVJFOgCjNp5BcuWzc9U93cwrcrywAY6pgF05Ve73GQSjFo5HNv3wGKhcSwC3dt8YyWcno59lSDMlieRHe%2Fyu2TDV6VsWBp2Z7ficXpw5TqM7HUpT968fzO5uzhJvt7rgvNu26jr6J9dAl%2FrynnNScToDI%2B5AFRT8C0gr0nYLa1RS%2BxMEn%2B2LJ8nLrHWwkYphCQSqSDwdUQUzj912%2FibLrBlx6wAdq8LCZQx43XKR73sUo7utF%2BLxEnXeTKFYsut&X-Amz-Signature=a965ed6f3a8dffeef49e447eb8cf0b7fcab6e0551a732a423391e51ed518c222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ2E4UG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADJD2dN1AaN5P9uFftQYiyvcsuBXfO7Z5DQ%2B1iVCnIrAiACpDAXiBgdbXasd2wGDaP0cQIv%2BQ9ly0VtUn%2Fj%2BLQuiCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMi6ZbI0nqqzdW%2FhojKtwDbWb0WgViPIrkekl%2FhrSmzTs9X854IWA0Qt1a9pBtJLe8lFaDHuvKN2dZ3fNi722qFKD1ZcqZnDqaZYvLovRvKziq%2FSk6xWr3LiJEKPhxkavcYjXrgJoSRMjctiYRN2Rr%2Bn8mP5h43CSULF6LQnDKps8%2BbVGsG8%2FaFC3b2AM%2FdC5ELc705fziBbot%2Bw2TpmYS%2BbF21Nkh03Pnm%2FhANmLrqRM5EOYybQ2hSg4djqgj%2BomODT10lPMH32Lk8DZaj0TImfS%2FdlVCUYHNqiJj1hh8I6VwE6Tv4nd64wCww4tsjb6vA8SoebROLwzP5yY2no4G%2B7mNdKK%2F3ieaywu2BYEmGRsWEj8jmZK5UdnWAhaewB8cwKuzZlSEbkzy%2B3KzT8vc9TN%2Fku%2BLt4%2F2qVlxFD2r5ktR8EWsxWh4o6H6G9SQ6byBY0inwHbUaFaxdQJKWuFJsqrLwU%2BRCly2HISwApQI%2FdMPlxo4MGono0obBffEFLcxW60ExCctAuPYHvObHFJb6z%2B1zlq%2FZrBiPvtz95o2GbP57v1AGBK7RCcUBYOaM%2BFEsOIQ3KR6cN8nEBPCx0xx7uY3Y7VqNButZl9fcH35JEVWF9gyzSWOrcFnVRVJFOgCjNp5BcuWzc9U93cwrcrywAY6pgF05Ve73GQSjFo5HNv3wGKhcSwC3dt8YyWcno59lSDMlieRHe%2Fyu2TDV6VsWBp2Z7ficXpw5TqM7HUpT968fzO5uzhJvt7rgvNu26jr6J9dAl%2FrynnNScToDI%2B5AFRT8C0gr0nYLa1RS%2BxMEn%2B2LJ8nLrHWwkYphCQSqSDwdUQUzj912%2FibLrBlx6wAdq8LCZQx43XKR73sUo7utF%2BLxEnXeTKFYsut&X-Amz-Signature=d2ac75a92f0e45603c87775dec3f0f8aed19d81f4e14d99dd14d186b4153b77a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXMBSIX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMxI0yEFWqajgLlJfxeB%2BXKFqbH%2Bb%2BetzwY2URaQiQwIhAPYbGm8R8i9zuXfLSauviIo40HmHtrotZLq1RgHPBXbgKv8DCHYQABoMNjM3NDIzMTgzODA1IgzY84hJAwk6WyIgVv0q3APRdM2%2BOA1WvMU5oFhPAQHQs0UywNLjzIHLTVHwi0ZKBI4D09jsxjRysLBpvmz2%2BfAlL%2F8AlW4aNG951F2zi3YzLe1K%2FOML%2BmoZ%2BL%2FdRm9km3jicwjjjD2LOcP9Paq96ruKD8dJMBDW%2FBMrrbrJPrteftEqodwraOAHPow3iAtIH48ixOChhBVHduyfZnxsToldXZuZmYqcRvpIrhUiXDtNjhKQNp6q0WDHl3IpGyrt5gdj2m9XOQwLTKMwJBoBbHQwJGTuAaCH72IGalcNXwKpQ3Gw%2BBK%2FYSKX0CBQgkbn7KCbpxsRAiRZUO5ooinrsiuZu%2FoF%2FUicmQCynxn8aSCK4y7U5P8nW%2F9QIByqVWi5EZovXo3jp83nY7LH7kBWOyFBdeH1dcChYKKditWppgv6nZw%2FxnW6OE6MgFG5QT3TRBvUTlwgy75VC6z1IDgFug1H4EtSBnMYGpLzuBZBU0RhJwpRvlm9WxgKTZhYCLqkD%2Bgv6mxk9E2h5f%2B7aKknYKjBbCVbo6LujOW1Ney382TcVCiBJv3BUby4WiGqYJ6t5MA01LaTTo1FolecD%2FbW4ZeiP6ovziO9wKxfh9%2B1Lbi0LQ%2BcuZ%2BiBGaUBMr368Nx%2FV%2FMytXNHXDoM4l9nTDJyfLABjqkAb003sRc2A0JczjiqoW0m3sf%2F56hminWxKlVVpuenudijYN2u8ywoL0g8YkZaGxfEcuCtpSUUOnxs8GdSekW%2BXMaJZQvFW%2BoLPibydBNhgVrHYOG4aTBNZHVk5EK6t2tg%2FSWfxmZWQxqHDmzxBGtyoguGfwuYfcCe1CFbFX%2FQCTyoAkKG2auXQiP39pTePrXAsl2hnTub%2F5ZfvxjeoHZlj56wUMy&X-Amz-Signature=5e88e9bece3567d1b630c940443842eb0dac26440a3fec36b3207b99f758065f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMB46FBW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1lHNBFXDux9Et8CQHOJ1GEQhSy4dG6BaxxWUYDDlQpAiAz7ANpSdyUBzyMpVyD6WcjZl8nLs94RdzGz5CXKwXliCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM6q1%2BMqSGoHQZRMoEKtwD8mbRwJyyoLwgtclhHFUbS9z0pS48XcqG%2BrMdY8WI69ssJ6EiwMHS7AQudk3xY8vUyiwWtJf6o1iLhlAOoiy%2FO%2BtyUVbMRO%2FePGKcuFckFnCzF%2BVR4hx2at6iWm6BTetTOqXPaEsNPCCZtMsY5V%2BTXGaIScghdZQxxZF44XjN%2BpF2sanriEzDfQ2ceAWmYX8hzG7Dj3%2FHewJFoQLeJm3O%2Bb9c34rSp5dIihUIYL9yErJdWmKNhgMt0NqOKJCHM3gIjLSi6YmCDWGDA8lA1B4k3Kcfj4a3tgkligMI2msg%2FcRF4sEHX1i0Nnn%2FXj5LGEFXgSTEs2E5ulN1AMjkTFZKtKoUbgPI1KUsg5aXBVSItBWLwP3IdfsC6sQJhroSzm7n0ZgfaT2Vl%2BGKUj6KluOpft%2BKpLdQv%2B7EcIzgodZrRaLIxOfEuFUHfYKpUvOItRlVD%2Fl7Ayzxy%2B5Zh%2B4mQlkHUexY3MHOZnMgXHtVo3PFneLAInZvRMfoNrhn1ItwFNJ%2Fbg%2FOi4003WwJFglw4EC0TF%2FJDcu4B9Jvm23Daudf9OTanFFRYRM4mDtJtsf5Oyw4LyGYSQSzhpIm9UjBlz%2Bd1AVv%2B4PmWle98rfHaXb71rkWq%2FuvdhgQ48y8Qfsw6MnywAY6pgHOQ5TeM8VUXDmkV%2FDgNGEzdpInU%2FopIBsuDrcdrLbJ3MSVxkWw%2FVKfXnYqA90RhPgpdbIikFe5NGJsLPYDJuBrW6x7KLI7Uiz4aqkJGdt1BtrwV811vj6WEIVcwUFvrwJxjvI2gsO4OK42G5%2BhuvdC3GbOtAe1AFWdQlp8N4iyI%2BpN9s9HyGi%2FCNYoCortTAeNXV52juAj7VpeYnlV8hHl4W5FI7ZB&X-Amz-Signature=9cbff9daf2bc4f4ef0435555c98462ce238ad6d33fda9bae4dcf1ecd2559b7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ2E4UG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADJD2dN1AaN5P9uFftQYiyvcsuBXfO7Z5DQ%2B1iVCnIrAiACpDAXiBgdbXasd2wGDaP0cQIv%2BQ9ly0VtUn%2Fj%2BLQuiCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMi6ZbI0nqqzdW%2FhojKtwDbWb0WgViPIrkekl%2FhrSmzTs9X854IWA0Qt1a9pBtJLe8lFaDHuvKN2dZ3fNi722qFKD1ZcqZnDqaZYvLovRvKziq%2FSk6xWr3LiJEKPhxkavcYjXrgJoSRMjctiYRN2Rr%2Bn8mP5h43CSULF6LQnDKps8%2BbVGsG8%2FaFC3b2AM%2FdC5ELc705fziBbot%2Bw2TpmYS%2BbF21Nkh03Pnm%2FhANmLrqRM5EOYybQ2hSg4djqgj%2BomODT10lPMH32Lk8DZaj0TImfS%2FdlVCUYHNqiJj1hh8I6VwE6Tv4nd64wCww4tsjb6vA8SoebROLwzP5yY2no4G%2B7mNdKK%2F3ieaywu2BYEmGRsWEj8jmZK5UdnWAhaewB8cwKuzZlSEbkzy%2B3KzT8vc9TN%2Fku%2BLt4%2F2qVlxFD2r5ktR8EWsxWh4o6H6G9SQ6byBY0inwHbUaFaxdQJKWuFJsqrLwU%2BRCly2HISwApQI%2FdMPlxo4MGono0obBffEFLcxW60ExCctAuPYHvObHFJb6z%2B1zlq%2FZrBiPvtz95o2GbP57v1AGBK7RCcUBYOaM%2BFEsOIQ3KR6cN8nEBPCx0xx7uY3Y7VqNButZl9fcH35JEVWF9gyzSWOrcFnVRVJFOgCjNp5BcuWzc9U93cwrcrywAY6pgF05Ve73GQSjFo5HNv3wGKhcSwC3dt8YyWcno59lSDMlieRHe%2Fyu2TDV6VsWBp2Z7ficXpw5TqM7HUpT968fzO5uzhJvt7rgvNu26jr6J9dAl%2FrynnNScToDI%2B5AFRT8C0gr0nYLa1RS%2BxMEn%2B2LJ8nLrHWwkYphCQSqSDwdUQUzj912%2FibLrBlx6wAdq8LCZQx43XKR73sUo7utF%2BLxEnXeTKFYsut&X-Amz-Signature=ba729e3eefb41e4a9804164a2b0853a2205b231ab6de3fb57fa747958bbca61a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
