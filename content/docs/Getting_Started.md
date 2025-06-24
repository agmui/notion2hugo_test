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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXEOGNTT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCmLn16FRluEAfWaEPj1NzDsDgE8xzlooahv%2BzzeEcVwQIhAK3Lb9RdKOI9LRbXQUIwrL7VXFc44GLZ17LWajpqImItKv8DCCcQABoMNjM3NDIzMTgzODA1IgwM5b5oWIfNXmjFyn4q3AOG9LWC7fARgjj%2BbVtGyd3AQL66bfngPPbYcTI6Rf6hZB4fN2Kni4KZCfhrvO2%2FM%2F1RTLuYbOsPS5CtIPZEfZoCNnox8CbkbRkdqRIarHC2xZZny6mWbYOm3%2BNEG6SIxlJOYfkx9pMcTW5C1hbcymSzouu0248NfLOtXr9C3Drd6hb3K019S0GSIK7LNxZZthota0RMB%2B3bRiCgMza3WNTRhHe3e%2FhtV7rtjBn2cLZ%2FDMRqlESubnQP94Ydoy5CGThoChmt131PmS%2FiOfs9mF4w3UHBxNpXL5SRR0XHGTdKtCei%2B7rv1mSF6LLMmrA1kRvpMD%2FOny6vfTUp5l0EH5QFTiPJJPiuASPz1mbXcUi2%2BrE3gSMVT4kO7n2nMUuaFxbjqh9Dg8HPhnMt%2B9ROyzEQjaNACrQYilCU%2Bx3lSQYIJhBeHxa0cXC1tC3DXMtlUx85YEejQzkQWGyiiD1zmSi%2FBp1rBLQ7mlXbKq5y9fmf3eZ%2B87eXpHAMQedFANmuN8Te2TgxJG0zFm%2BbRHDUZenltWmFfGz6P88iKmRr3o8C0sFTCCtvsDeftSP7GeipNlhg4CDGzNTlRm7GEI9RrPJC0PzWYIEz6fG3iktI5qeIO%2FHkvokGMKukxQ3KWTDx9ujCBjqkAQ%2F4DVgsoGbMQbDREhwrk0FHjg2gmGdUGRYA%2FOmpblN%2FATIKcSmP1jnC%2FankQxzyaJzQef7fY%2BDNxhrCiN3i62IzWIT1Dgg%2FUpUdLQk471OWgvuzn7EC9460x6F4H0ClSN0KGSXZ8vbjbIv9AfnngkJWOJCfodpY7cfg95hFiQvZigM%2Bx7RMS2uxne4El4CH74%2FOflSF94CM2mnEHmwBLbNM%2FMKt&X-Amz-Signature=c98df40a0ef06308dc71d644cca15ecaf2c44aa8e2b621143afbe6677cc8f013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXEOGNTT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCmLn16FRluEAfWaEPj1NzDsDgE8xzlooahv%2BzzeEcVwQIhAK3Lb9RdKOI9LRbXQUIwrL7VXFc44GLZ17LWajpqImItKv8DCCcQABoMNjM3NDIzMTgzODA1IgwM5b5oWIfNXmjFyn4q3AOG9LWC7fARgjj%2BbVtGyd3AQL66bfngPPbYcTI6Rf6hZB4fN2Kni4KZCfhrvO2%2FM%2F1RTLuYbOsPS5CtIPZEfZoCNnox8CbkbRkdqRIarHC2xZZny6mWbYOm3%2BNEG6SIxlJOYfkx9pMcTW5C1hbcymSzouu0248NfLOtXr9C3Drd6hb3K019S0GSIK7LNxZZthota0RMB%2B3bRiCgMza3WNTRhHe3e%2FhtV7rtjBn2cLZ%2FDMRqlESubnQP94Ydoy5CGThoChmt131PmS%2FiOfs9mF4w3UHBxNpXL5SRR0XHGTdKtCei%2B7rv1mSF6LLMmrA1kRvpMD%2FOny6vfTUp5l0EH5QFTiPJJPiuASPz1mbXcUi2%2BrE3gSMVT4kO7n2nMUuaFxbjqh9Dg8HPhnMt%2B9ROyzEQjaNACrQYilCU%2Bx3lSQYIJhBeHxa0cXC1tC3DXMtlUx85YEejQzkQWGyiiD1zmSi%2FBp1rBLQ7mlXbKq5y9fmf3eZ%2B87eXpHAMQedFANmuN8Te2TgxJG0zFm%2BbRHDUZenltWmFfGz6P88iKmRr3o8C0sFTCCtvsDeftSP7GeipNlhg4CDGzNTlRm7GEI9RrPJC0PzWYIEz6fG3iktI5qeIO%2FHkvokGMKukxQ3KWTDx9ujCBjqkAQ%2F4DVgsoGbMQbDREhwrk0FHjg2gmGdUGRYA%2FOmpblN%2FATIKcSmP1jnC%2FankQxzyaJzQef7fY%2BDNxhrCiN3i62IzWIT1Dgg%2FUpUdLQk471OWgvuzn7EC9460x6F4H0ClSN0KGSXZ8vbjbIv9AfnngkJWOJCfodpY7cfg95hFiQvZigM%2Bx7RMS2uxne4El4CH74%2FOflSF94CM2mnEHmwBLbNM%2FMKt&X-Amz-Signature=9bcde84d41411a69cdc48904eb2d90e33ab5e47335a841ef384c6922235deeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXEOGNTT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCmLn16FRluEAfWaEPj1NzDsDgE8xzlooahv%2BzzeEcVwQIhAK3Lb9RdKOI9LRbXQUIwrL7VXFc44GLZ17LWajpqImItKv8DCCcQABoMNjM3NDIzMTgzODA1IgwM5b5oWIfNXmjFyn4q3AOG9LWC7fARgjj%2BbVtGyd3AQL66bfngPPbYcTI6Rf6hZB4fN2Kni4KZCfhrvO2%2FM%2F1RTLuYbOsPS5CtIPZEfZoCNnox8CbkbRkdqRIarHC2xZZny6mWbYOm3%2BNEG6SIxlJOYfkx9pMcTW5C1hbcymSzouu0248NfLOtXr9C3Drd6hb3K019S0GSIK7LNxZZthota0RMB%2B3bRiCgMza3WNTRhHe3e%2FhtV7rtjBn2cLZ%2FDMRqlESubnQP94Ydoy5CGThoChmt131PmS%2FiOfs9mF4w3UHBxNpXL5SRR0XHGTdKtCei%2B7rv1mSF6LLMmrA1kRvpMD%2FOny6vfTUp5l0EH5QFTiPJJPiuASPz1mbXcUi2%2BrE3gSMVT4kO7n2nMUuaFxbjqh9Dg8HPhnMt%2B9ROyzEQjaNACrQYilCU%2Bx3lSQYIJhBeHxa0cXC1tC3DXMtlUx85YEejQzkQWGyiiD1zmSi%2FBp1rBLQ7mlXbKq5y9fmf3eZ%2B87eXpHAMQedFANmuN8Te2TgxJG0zFm%2BbRHDUZenltWmFfGz6P88iKmRr3o8C0sFTCCtvsDeftSP7GeipNlhg4CDGzNTlRm7GEI9RrPJC0PzWYIEz6fG3iktI5qeIO%2FHkvokGMKukxQ3KWTDx9ujCBjqkAQ%2F4DVgsoGbMQbDREhwrk0FHjg2gmGdUGRYA%2FOmpblN%2FATIKcSmP1jnC%2FankQxzyaJzQef7fY%2BDNxhrCiN3i62IzWIT1Dgg%2FUpUdLQk471OWgvuzn7EC9460x6F4H0ClSN0KGSXZ8vbjbIv9AfnngkJWOJCfodpY7cfg95hFiQvZigM%2Bx7RMS2uxne4El4CH74%2FOflSF94CM2mnEHmwBLbNM%2FMKt&X-Amz-Signature=b7d4c44af021d8c1afc7e59f83d23349e3237b2fde887df244cb8ec6831a8519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YLFKXX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEZXLy60l7qVIyCGQubvZKtxg6IbW2qF7FTxVzezeOyLAiAKZWIy3Zdm2IIPdR1I%2FwMdGTRhzS0BP5o5MUyX7psSeir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMh58Dv3GBQSXQSdJVKtwDNP7Qm2U15w49JEViTY%2FAdA2rL2fEP7tRWPjpIGh7%2Bje4XDJF7AqdWnQZatxd99OkD8wzM70yhoQr1jqErne5434nDOF%2FoV2bR5n5ek3UdIbKoNfR3AWBs%2FM4FTFGYLBjF2rNKmunCHWJhdDF%2BzcQBXE049fVn6ooHwRNaHiCOLQzcHLh%2Fu6uphciy6qLCbpaC5ZQytc4Bo7cbPCKYsxR7gPWMIyfc37Y98%2BWyaG7%2FEhcUyUbYVD7%2FX3q5NYBLjuiKmsed0ml0nmpqApxABWA%2FcuaTz8lJA8qe5ECCJHTdE3skBO86kKzi6NOX30X%2BPIl7SfQQuIVcgsP7gNo3oyjnqKOtvnTqe%2BSLRkI024%2FwKxFUduvLvVEeFlARnZbSH7tYJleUxIpiVTtpIKn4JA8iRUss0xbFXPGM61kPV7gw5sMLrk32Kw4F8YEjKoA3tD%2FTxPHekc9bUKBnaa5QxXt9Od8Kea7jNrL6N%2BfcIs9UZ1NBth8bvqI86t0OkpD8N8xzLZkcu9mh%2F6yPaQjOh5l24TW0zebKpilj0VnbUlcWFeyhsfE2HQoc7W89FSC1samUWb15%2B7q6m7XX%2FLBd7TleWCo8ie5ko1CHe3HaK1q9MQ0cCUElQ6sE%2B8RgBIw2ffowgY6pgH8fRrDKsbP9ExfWGqsNuNzWbS3SlJ4Dm9QC7km7tlntNnbJMf6f%2BuGPnUW96pwJc7QIKXeoSKR1GfrW7J%2F6B8rk77jmGsfVKUqpvI4E4tb4ZZCa3RQ%2BC5QnVgbXtcp%2FKnmPOfxsndyCL83z%2BjAdOADHP%2F0Cw7ZmFzSn8tegCc6HWrHBpSxjLedhfJ18Se%2FEAH66M7FLanMfqSh%2F7P8%2Fj8fb5CUu4wS&X-Amz-Signature=83d1aad8e35db249989444daebf918bc980e093cb4ed6184e2a9198f88a363b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUH2X72%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC50sJcIOzQwUVEgykRuJsx3kGebdDjv4QDF4NKWNzfXQIgMndtMy8WdDG8r2GRRgvnbPTo38T8C8T7veOnAjLK3QEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCc8dK83zB2zQPE8kyrcA9VjUk5E2xMlXm9NBWpEflPOPupIsiV0DQgy3qbj3sKXvhhIZoNHH0H4uN5lGa0DvEa%2BRFPVytwKKKq40KBsciA8vkQcR3DP68zSKgdG%2BDpUoat%2B9zjUU%2Bf4q%2BcAeLCyC5Rbc95lA0%2Bjvkw0x1AwiHpz%2BVSg630DM4Ggjg23E%2FI1BpJOq%2FUIPAkBvu6qgGErlRIZDjICKVRE960lQtdkNJo0jn3PJ0BiWTawfnJqylnRmHsEmZeSUHd6FC8gPgZqquo8NuyrF8emNc2eDbVLjPBu2LNoIjeTctDYL%2FNljLdUMOX15sfAsbOoQQzc5By2aHZkgCDYJvXKc2FkufDZq4uRXHC3xjXoP5wiuV%2B3j11IQmzND7HWL3gn%2F12qlwi2AsNcEKLrU05tqu%2BFew2E%2Fr0nTQCk9tUG%2FoFht9N2FMizi3XGcjiYEX30Mh2CV8Ny9UWnURV%2Fn%2BEkZ9jBPgV6GlTqVEZG17EovQqcbnDaRWG5fbVhpTzL5jzl7a%2FhdQ%2Bc7CvVnh%2FuQm0qajErgLejMd2DIIZ2IdoxwQ2dsme6IfBnZlzNPbeDzuXuy1wXUtFyoCzNqXomn3qXVKe4WBJwyfPXcxipv1EcsAgzVn9ve%2BofQe49boJCME9GS7zDML336MIGOqUBaB9UZ%2BHQtDFXOQtFwgdpvaMMhX0opXTvbpgTlzSbpQ5z3mXWHhk7D80zMb4fhon9os4IHgIlhQzN8zD4gBdxMZnw9z39J4cHr8bLMWBuwSmBXknzVNgZZ%2FZKagt7WlLGUmN1TJNT9l0OqHROQZ2vnmT6vdT7r8qswESFb2xBSwXkh9LkKhhp0H%2Frb4VBVJUY7AvSscaRQPw7y60dkZYn6MgkYdIA&X-Amz-Signature=e16577af3ca42055a75f0fc97f67511363c842ab2644a0575ecef100c5cde21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXEOGNTT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCmLn16FRluEAfWaEPj1NzDsDgE8xzlooahv%2BzzeEcVwQIhAK3Lb9RdKOI9LRbXQUIwrL7VXFc44GLZ17LWajpqImItKv8DCCcQABoMNjM3NDIzMTgzODA1IgwM5b5oWIfNXmjFyn4q3AOG9LWC7fARgjj%2BbVtGyd3AQL66bfngPPbYcTI6Rf6hZB4fN2Kni4KZCfhrvO2%2FM%2F1RTLuYbOsPS5CtIPZEfZoCNnox8CbkbRkdqRIarHC2xZZny6mWbYOm3%2BNEG6SIxlJOYfkx9pMcTW5C1hbcymSzouu0248NfLOtXr9C3Drd6hb3K019S0GSIK7LNxZZthota0RMB%2B3bRiCgMza3WNTRhHe3e%2FhtV7rtjBn2cLZ%2FDMRqlESubnQP94Ydoy5CGThoChmt131PmS%2FiOfs9mF4w3UHBxNpXL5SRR0XHGTdKtCei%2B7rv1mSF6LLMmrA1kRvpMD%2FOny6vfTUp5l0EH5QFTiPJJPiuASPz1mbXcUi2%2BrE3gSMVT4kO7n2nMUuaFxbjqh9Dg8HPhnMt%2B9ROyzEQjaNACrQYilCU%2Bx3lSQYIJhBeHxa0cXC1tC3DXMtlUx85YEejQzkQWGyiiD1zmSi%2FBp1rBLQ7mlXbKq5y9fmf3eZ%2B87eXpHAMQedFANmuN8Te2TgxJG0zFm%2BbRHDUZenltWmFfGz6P88iKmRr3o8C0sFTCCtvsDeftSP7GeipNlhg4CDGzNTlRm7GEI9RrPJC0PzWYIEz6fG3iktI5qeIO%2FHkvokGMKukxQ3KWTDx9ujCBjqkAQ%2F4DVgsoGbMQbDREhwrk0FHjg2gmGdUGRYA%2FOmpblN%2FATIKcSmP1jnC%2FankQxzyaJzQef7fY%2BDNxhrCiN3i62IzWIT1Dgg%2FUpUdLQk471OWgvuzn7EC9460x6F4H0ClSN0KGSXZ8vbjbIv9AfnngkJWOJCfodpY7cfg95hFiQvZigM%2Bx7RMS2uxne4El4CH74%2FOflSF94CM2mnEHmwBLbNM%2FMKt&X-Amz-Signature=b9263a95a9562f3677b9c97b50a0ab4fb0af039629122756435b972c1fad03f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
