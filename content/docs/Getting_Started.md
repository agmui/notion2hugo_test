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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G2DKN3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8Gge5xyXTrD%2FsqCbHkzdoHExjh%2BnvQ97GBLiH38lc6AiA6qMGcukMhRC9VS1N7hgBGUVA%2BuVXDV8hw4JeYfGMyKyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6tmyutXeSw%2Fnvm4VKtwD26%2FV5IskrWb5IL8gZ1axvYU0yiu4oHj%2BJ4YCrHrXSybLfGdyaqKGMos0o118ZA%2FCxidoHW%2BDutRfmh005WAAltC4KKy5rmotE0i5BVhlhsJe2R0utfpezYiuBHmw%2FGZVvKxCuhkDyxdrwohds9dgU%2FIs80aYyeoQY9fDWN4dkxjRs1Ii36L26dtjR4M1BNY4tVw0rj22KWR2q4jv81vd3pIAkdu0Gk2bUA6v9XjoBFxOvFnkaphY5Ju%2F2U5mSfM40daN7M3vGk3GM1pUgFyrZT%2FWnMRjDLLtyiqFT%2FjQ2bGBqTus3VV51vH9MEvuk8vojWFINFzGwu0E5V6DKgR6d64ozaj9%2FS5f1wpxDBE%2F%2BifB7gvVGe7lD9RjKA%2BWmsEbSsEXQZ5SP02GIrH3OKj3pa5kbbFdKi7LcUgYG37E71xV84rzsZaajr19Q2b78QWQgePYt11jI6KxSgbpKWxojitiMhjmAIWmQHbniqUm3T4kXM%2FQ0hMl6Tl%2BBEQv9G1B49Kw7L0UETHnpBGQhiCRxlzeRoOn5htYaZKUnN2T1PQ11xbYMjM9a%2BVtFJV6IhY9Icey8DGVSe4NKzojPXQEq9E1hRsZqRvAddlkCAYXbqJ3QoOskKK9SB0GFGgwqfGLwgY6pgGsM0iwq3LAWtPWZk3gRJlGbZxAjp3Tf6RZUiahSLlHndONi87eB2sC8wTsWvuDKmF2hvRsn33CC38YAmXZU8suuQ2lQGuEMiv9vrAKGqQ0I2%2Bf2%2B%2FEEetZtxx%2BzJZV7BbGRN9PPCjfPeh1QmfpCED98t1TavlDS1rwTzKb%2FijsbLQzpcD%2FSUrb97GIFshdG97naPHGyCiYLcH1CDbmnBB4s%2B0u1sDH&X-Amz-Signature=d6827e6b48384c69a17830b30c31b14c2884efe427e2f1ef73904a5691035166&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G2DKN3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8Gge5xyXTrD%2FsqCbHkzdoHExjh%2BnvQ97GBLiH38lc6AiA6qMGcukMhRC9VS1N7hgBGUVA%2BuVXDV8hw4JeYfGMyKyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6tmyutXeSw%2Fnvm4VKtwD26%2FV5IskrWb5IL8gZ1axvYU0yiu4oHj%2BJ4YCrHrXSybLfGdyaqKGMos0o118ZA%2FCxidoHW%2BDutRfmh005WAAltC4KKy5rmotE0i5BVhlhsJe2R0utfpezYiuBHmw%2FGZVvKxCuhkDyxdrwohds9dgU%2FIs80aYyeoQY9fDWN4dkxjRs1Ii36L26dtjR4M1BNY4tVw0rj22KWR2q4jv81vd3pIAkdu0Gk2bUA6v9XjoBFxOvFnkaphY5Ju%2F2U5mSfM40daN7M3vGk3GM1pUgFyrZT%2FWnMRjDLLtyiqFT%2FjQ2bGBqTus3VV51vH9MEvuk8vojWFINFzGwu0E5V6DKgR6d64ozaj9%2FS5f1wpxDBE%2F%2BifB7gvVGe7lD9RjKA%2BWmsEbSsEXQZ5SP02GIrH3OKj3pa5kbbFdKi7LcUgYG37E71xV84rzsZaajr19Q2b78QWQgePYt11jI6KxSgbpKWxojitiMhjmAIWmQHbniqUm3T4kXM%2FQ0hMl6Tl%2BBEQv9G1B49Kw7L0UETHnpBGQhiCRxlzeRoOn5htYaZKUnN2T1PQ11xbYMjM9a%2BVtFJV6IhY9Icey8DGVSe4NKzojPXQEq9E1hRsZqRvAddlkCAYXbqJ3QoOskKK9SB0GFGgwqfGLwgY6pgGsM0iwq3LAWtPWZk3gRJlGbZxAjp3Tf6RZUiahSLlHndONi87eB2sC8wTsWvuDKmF2hvRsn33CC38YAmXZU8suuQ2lQGuEMiv9vrAKGqQ0I2%2Bf2%2B%2FEEetZtxx%2BzJZV7BbGRN9PPCjfPeh1QmfpCED98t1TavlDS1rwTzKb%2FijsbLQzpcD%2FSUrb97GIFshdG97naPHGyCiYLcH1CDbmnBB4s%2B0u1sDH&X-Amz-Signature=e2b4d7d501b6af07e523924cb2890b430fed8e3c4e38c1495db28d5ca475e39b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G2DKN3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8Gge5xyXTrD%2FsqCbHkzdoHExjh%2BnvQ97GBLiH38lc6AiA6qMGcukMhRC9VS1N7hgBGUVA%2BuVXDV8hw4JeYfGMyKyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6tmyutXeSw%2Fnvm4VKtwD26%2FV5IskrWb5IL8gZ1axvYU0yiu4oHj%2BJ4YCrHrXSybLfGdyaqKGMos0o118ZA%2FCxidoHW%2BDutRfmh005WAAltC4KKy5rmotE0i5BVhlhsJe2R0utfpezYiuBHmw%2FGZVvKxCuhkDyxdrwohds9dgU%2FIs80aYyeoQY9fDWN4dkxjRs1Ii36L26dtjR4M1BNY4tVw0rj22KWR2q4jv81vd3pIAkdu0Gk2bUA6v9XjoBFxOvFnkaphY5Ju%2F2U5mSfM40daN7M3vGk3GM1pUgFyrZT%2FWnMRjDLLtyiqFT%2FjQ2bGBqTus3VV51vH9MEvuk8vojWFINFzGwu0E5V6DKgR6d64ozaj9%2FS5f1wpxDBE%2F%2BifB7gvVGe7lD9RjKA%2BWmsEbSsEXQZ5SP02GIrH3OKj3pa5kbbFdKi7LcUgYG37E71xV84rzsZaajr19Q2b78QWQgePYt11jI6KxSgbpKWxojitiMhjmAIWmQHbniqUm3T4kXM%2FQ0hMl6Tl%2BBEQv9G1B49Kw7L0UETHnpBGQhiCRxlzeRoOn5htYaZKUnN2T1PQ11xbYMjM9a%2BVtFJV6IhY9Icey8DGVSe4NKzojPXQEq9E1hRsZqRvAddlkCAYXbqJ3QoOskKK9SB0GFGgwqfGLwgY6pgGsM0iwq3LAWtPWZk3gRJlGbZxAjp3Tf6RZUiahSLlHndONi87eB2sC8wTsWvuDKmF2hvRsn33CC38YAmXZU8suuQ2lQGuEMiv9vrAKGqQ0I2%2Bf2%2B%2FEEetZtxx%2BzJZV7BbGRN9PPCjfPeh1QmfpCED98t1TavlDS1rwTzKb%2FijsbLQzpcD%2FSUrb97GIFshdG97naPHGyCiYLcH1CDbmnBB4s%2B0u1sDH&X-Amz-Signature=62f81c64446e5dbafda9dfa76515e74c671dcd274a43ff9ae6a104940dad15a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZU77QZN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtq02uH%2FFu8sGTPTpnfB8IV7WsYuSNCMDHI%2BmohhQCqAiBRrGsEp5i%2FEYiUON2kCmGv1%2Bm3ugwvY0Rzj2MLjGto%2Fir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM2VQUHRyZDo0BCFxiKtwDtraU%2F1B7L6LaeRwDFdvCjPuWqNbEkfaxWK46g8cLS0g3rUzPlI5PDmsDSah9qKmGl7P7SmWIcr%2BKFVi%2BLvLsanF1czuSQyYLNr589kXvR5H%2FvEqQxbGEJrao5SiEXFd30UHue2XJ7ShgB13W8WRu1uQCg5V70O0G2MY4vYbor6O7VOQ9LgMqB7bqdk29PQdVoJ1g19vB7EupbbjNqOQ%2F%2FZhDQCW4kIwnfOgiSzOX8OeOmA6hv6GrmYtN5BusBek9YFl3Squeu57b%2FsaAx2XiioLdg5z9PZpzOwaG6mzll2uy1Jx6ocm4hrrmXBYfSkEV8FqL9KEM3aV9C%2Fz4IROIAaFsVozoOd7O06kkWBdQTDC0twy%2FkYnGWXdi3IF8qzYRPja3wrT0tivyVGzCZ2dMYfH7ReIgtwrx2rYiXafeDHeWjThaH4ppHYxUKepvfNJ%2BI9nFxV%2FnIDjzu2fn%2FlhWasy6OKtnObL39OHwWXFVZV3DBfeC6z0vZDnqAaszwptUG3snwHIi%2BXrDxwX4PhlVVs%2F%2FysIuBFiLyp9amnyjtXEKLWhlwhljIqJGUrWLnfY5oyt4pM2p4QoKhk%2FgXfz2FjZzXoK%2FhOnWOAQbzkZzqs5SYB310ftnSOds9EIwnfKLwgY6pgG0%2F7utIbT%2FCuZVpsr933cLjvpOT24MROPzQ1jYzBdIvht0LC7ptXZL%2FRKuufUrVFyx1CXrxFLH5SfCmM3IJ%2B%2BxQJLPwKXfM8agnk5MZndbZlTVfpdQoMhJpXesFF80y%2F3TGSkSdiqb5gayPFNODYOjZTdAP4RI36UHssswGMEzLGpUPBVnWe5mnaaY%2Fko1Pw%2FkNTZzwBwBD34VptJSR4KdcLqzO7%2BS&X-Amz-Signature=86b00a7f629aebdcd1fa880f18200e3735891a9aba54b80fb91bfb73d8a67ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBSZ643%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3iRGLubfaxyffOY5xNDRJCaUpT3jWtr68DslCB3SnqgIgNLTBdnsjzs5Ug89BeIjEPXkra%2BDCuu9D0HdvruZueL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBmkGroXYcCqwVkdpSrcA3k6gLwTxJomgLnpptzWcbW3vogprkTzwlqIKTJtOpe%2FpS1flt%2Fgpywvm8QmYpIcJTLAPeoUVs1Y5WVSNm2e319k%2FjBQ2P0IsR2cGT4lG2BB6Kt0WAPubALx4xmKZuy6iVpYUe8qaeVVHmrcxtCKxVC%2BpfPnwdcL6x4BXgnIaXj7oriAwBF2bwNvAFbf2jI3RjNMESv3gk0n0qU6icGOFv1arNi7haJO8U2zPuaiwOCOO8WhE2gOb8Hg0FwdhJi%2F%2Fm8C%2BIAQdoW9G0oz28CcgV8hyMN93FOpXRP76F00aOc5UydMb5VVyqDz1h7tURdDkwgRcbejUJ%2FIVv4i1KuncdITBFcS%2BY7rFk2uV7WEXlQQb%2Bn9rYRCxYA4RtTQ7pKosDW3URJ9UfGXxq%2FgSEET%2FWcUqnxBy3ojSmkvRB0DOg7giXMgZFrlXOQwn9asKbQHy5hvlkmRIG2%2Fxa5%2FRdceG%2FIs1El88VIkLuPXuhYSBQA823HBLlz%2FicDXPEtolCQAO8%2Bst7PECU7jB9nSiZNowFcVloepYHHmyytJIj9ph41YRhEcbSyo27Bd8skmoVDrWcTw%2B%2BhH8zXSDR8%2FmDDDYn36IGx8V9MODNX%2BWcWHXZQgOmHklLVRYrK6w%2FBrMMDxi8IGOqUB4oZEgqoWiWW9gJx8XpzAgTjY2fOy%2BsMA345WtmfMc79PJE%2FahWRxGiEqO%2FiSw%2Bd4LC5vghuLZa%2BfhUTq3MB17zGjD3DRKHSZD7Do7Q4TAl7Urwztkd8zDo6WR%2FiNgTm1tXa2DeX4hFICsvM5fNhQM8JdyBKi436jAXhkof1uX8YFMhzpbJFmjWl6OokBCumKHHPVs2y62PrAt%2BFOjKk2Fp0t0kJ0&X-Amz-Signature=f8d0b4366b7a7e63a29698404070ea33809a6267199bb492f4eab04d2e1247ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G2DKN3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8Gge5xyXTrD%2FsqCbHkzdoHExjh%2BnvQ97GBLiH38lc6AiA6qMGcukMhRC9VS1N7hgBGUVA%2BuVXDV8hw4JeYfGMyKyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6tmyutXeSw%2Fnvm4VKtwD26%2FV5IskrWb5IL8gZ1axvYU0yiu4oHj%2BJ4YCrHrXSybLfGdyaqKGMos0o118ZA%2FCxidoHW%2BDutRfmh005WAAltC4KKy5rmotE0i5BVhlhsJe2R0utfpezYiuBHmw%2FGZVvKxCuhkDyxdrwohds9dgU%2FIs80aYyeoQY9fDWN4dkxjRs1Ii36L26dtjR4M1BNY4tVw0rj22KWR2q4jv81vd3pIAkdu0Gk2bUA6v9XjoBFxOvFnkaphY5Ju%2F2U5mSfM40daN7M3vGk3GM1pUgFyrZT%2FWnMRjDLLtyiqFT%2FjQ2bGBqTus3VV51vH9MEvuk8vojWFINFzGwu0E5V6DKgR6d64ozaj9%2FS5f1wpxDBE%2F%2BifB7gvVGe7lD9RjKA%2BWmsEbSsEXQZ5SP02GIrH3OKj3pa5kbbFdKi7LcUgYG37E71xV84rzsZaajr19Q2b78QWQgePYt11jI6KxSgbpKWxojitiMhjmAIWmQHbniqUm3T4kXM%2FQ0hMl6Tl%2BBEQv9G1B49Kw7L0UETHnpBGQhiCRxlzeRoOn5htYaZKUnN2T1PQ11xbYMjM9a%2BVtFJV6IhY9Icey8DGVSe4NKzojPXQEq9E1hRsZqRvAddlkCAYXbqJ3QoOskKK9SB0GFGgwqfGLwgY6pgGsM0iwq3LAWtPWZk3gRJlGbZxAjp3Tf6RZUiahSLlHndONi87eB2sC8wTsWvuDKmF2hvRsn33CC38YAmXZU8suuQ2lQGuEMiv9vrAKGqQ0I2%2Bf2%2B%2FEEetZtxx%2BzJZV7BbGRN9PPCjfPeh1QmfpCED98t1TavlDS1rwTzKb%2FijsbLQzpcD%2FSUrb97GIFshdG97naPHGyCiYLcH1CDbmnBB4s%2B0u1sDH&X-Amz-Signature=8d5edfbaa6c8aca7fda44fc5fbae1ec71e699835fa3405d0dd6c7c8062e451f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
