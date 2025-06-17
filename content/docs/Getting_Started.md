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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAASD6Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFms7bjQ%2BJAz9H0X3JrMzz4i1g8e6zjxe1QhOlMtuV3VAiEAkhcECWC%2BL1Wooyokb6BUqWcMI%2B%2BLiV5sttFsreCeWdMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCO28IMNkwloJcVuayrcA748Snpc%2F6hPi0w3Vd76s9tgFrrHUUF0vo6LfW0fdDZTTX2QY2S6sINadPcYuOcQIBRd9TlfCIj9Hv%2B53I0v10iKCgkjWtz75FYeeLnVl%2FoxWbJbUZyvUiVNSwoL1R%2B7n6sJDb5iH0uMpieVjbnzsevlPS91cjcT1D4YTTNoy3dIrutwco8dHkjsQ6eKsUDz%2BHd1sRzVa630MvzZyqyOZK%2BFBTp29g3ATnmwF90sYfik3na5mzJ8DQNbbBBFPFSUH3n07YsbJoVj6DfTyCkNciAwP%2F62JGhxTDhL1LOLg5S9lc7OH4n6VQUnegqMDHyxk4dbg%2B3ff2cO%2F%2F4MMzDX1mckUW0VdYUqhcsty1aNQIblzu6KMhhl%2F%2BcymZYssf77h3fVFA0WxKx0vYquBH4WV4adtiflVtikAbr14qP%2FQLUsXRzngjWqJZ2GoXTMxC5MLY9P%2BMx8qCqCZ9ltRScr78DTBueXJs%2FVc9EgZ%2B%2BEVMwOQ01GIa44qRtzWhgrbyhDB4jVp5Ptb2Jfe5WO5iw2f%2Bq70hKTQdpkCEzZp%2F84vw%2BDbZNZTrBcJgO52u1c4wl2pxTgdMwLze3fZYxRJJ7pF5dI4%2BOQJNkiy6I8xq5UhvtmwPpwpcOdauxDJYkmMPG%2BxMIGOqUBfGrik5VZzinExN5UbND40vrPeImGx%2FsTHWoaozdwrb8fhH9ge%2BYTSG8tnxa%2BD6%2B0NlexJj9J4zBjjR6FrIhn40a8V4lXfwOffe%2B35EbmwcRFgm2PBwajbjftPacr%2F1efjZBC5vdBFf68NxJvFBa5YKTnJxHU%2BalWh1kqOzOQBfPNESXF6JOQJrauuKyYy4mHJqBnSTZTCyIyzbs9XrZmeaSc6H%2Bu&X-Amz-Signature=6aed123a5d848992a0528e3d6b4771619f08a32f14d63e7897189a20d86b9da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAASD6Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFms7bjQ%2BJAz9H0X3JrMzz4i1g8e6zjxe1QhOlMtuV3VAiEAkhcECWC%2BL1Wooyokb6BUqWcMI%2B%2BLiV5sttFsreCeWdMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCO28IMNkwloJcVuayrcA748Snpc%2F6hPi0w3Vd76s9tgFrrHUUF0vo6LfW0fdDZTTX2QY2S6sINadPcYuOcQIBRd9TlfCIj9Hv%2B53I0v10iKCgkjWtz75FYeeLnVl%2FoxWbJbUZyvUiVNSwoL1R%2B7n6sJDb5iH0uMpieVjbnzsevlPS91cjcT1D4YTTNoy3dIrutwco8dHkjsQ6eKsUDz%2BHd1sRzVa630MvzZyqyOZK%2BFBTp29g3ATnmwF90sYfik3na5mzJ8DQNbbBBFPFSUH3n07YsbJoVj6DfTyCkNciAwP%2F62JGhxTDhL1LOLg5S9lc7OH4n6VQUnegqMDHyxk4dbg%2B3ff2cO%2F%2F4MMzDX1mckUW0VdYUqhcsty1aNQIblzu6KMhhl%2F%2BcymZYssf77h3fVFA0WxKx0vYquBH4WV4adtiflVtikAbr14qP%2FQLUsXRzngjWqJZ2GoXTMxC5MLY9P%2BMx8qCqCZ9ltRScr78DTBueXJs%2FVc9EgZ%2B%2BEVMwOQ01GIa44qRtzWhgrbyhDB4jVp5Ptb2Jfe5WO5iw2f%2Bq70hKTQdpkCEzZp%2F84vw%2BDbZNZTrBcJgO52u1c4wl2pxTgdMwLze3fZYxRJJ7pF5dI4%2BOQJNkiy6I8xq5UhvtmwPpwpcOdauxDJYkmMPG%2BxMIGOqUBfGrik5VZzinExN5UbND40vrPeImGx%2FsTHWoaozdwrb8fhH9ge%2BYTSG8tnxa%2BD6%2B0NlexJj9J4zBjjR6FrIhn40a8V4lXfwOffe%2B35EbmwcRFgm2PBwajbjftPacr%2F1efjZBC5vdBFf68NxJvFBa5YKTnJxHU%2BalWh1kqOzOQBfPNESXF6JOQJrauuKyYy4mHJqBnSTZTCyIyzbs9XrZmeaSc6H%2Bu&X-Amz-Signature=4f451235ea76da5fc5c2ce69090f4dcd7a8f546f7e5319dac68bc9632885c726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAASD6Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFms7bjQ%2BJAz9H0X3JrMzz4i1g8e6zjxe1QhOlMtuV3VAiEAkhcECWC%2BL1Wooyokb6BUqWcMI%2B%2BLiV5sttFsreCeWdMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCO28IMNkwloJcVuayrcA748Snpc%2F6hPi0w3Vd76s9tgFrrHUUF0vo6LfW0fdDZTTX2QY2S6sINadPcYuOcQIBRd9TlfCIj9Hv%2B53I0v10iKCgkjWtz75FYeeLnVl%2FoxWbJbUZyvUiVNSwoL1R%2B7n6sJDb5iH0uMpieVjbnzsevlPS91cjcT1D4YTTNoy3dIrutwco8dHkjsQ6eKsUDz%2BHd1sRzVa630MvzZyqyOZK%2BFBTp29g3ATnmwF90sYfik3na5mzJ8DQNbbBBFPFSUH3n07YsbJoVj6DfTyCkNciAwP%2F62JGhxTDhL1LOLg5S9lc7OH4n6VQUnegqMDHyxk4dbg%2B3ff2cO%2F%2F4MMzDX1mckUW0VdYUqhcsty1aNQIblzu6KMhhl%2F%2BcymZYssf77h3fVFA0WxKx0vYquBH4WV4adtiflVtikAbr14qP%2FQLUsXRzngjWqJZ2GoXTMxC5MLY9P%2BMx8qCqCZ9ltRScr78DTBueXJs%2FVc9EgZ%2B%2BEVMwOQ01GIa44qRtzWhgrbyhDB4jVp5Ptb2Jfe5WO5iw2f%2Bq70hKTQdpkCEzZp%2F84vw%2BDbZNZTrBcJgO52u1c4wl2pxTgdMwLze3fZYxRJJ7pF5dI4%2BOQJNkiy6I8xq5UhvtmwPpwpcOdauxDJYkmMPG%2BxMIGOqUBfGrik5VZzinExN5UbND40vrPeImGx%2FsTHWoaozdwrb8fhH9ge%2BYTSG8tnxa%2BD6%2B0NlexJj9J4zBjjR6FrIhn40a8V4lXfwOffe%2B35EbmwcRFgm2PBwajbjftPacr%2F1efjZBC5vdBFf68NxJvFBa5YKTnJxHU%2BalWh1kqOzOQBfPNESXF6JOQJrauuKyYy4mHJqBnSTZTCyIyzbs9XrZmeaSc6H%2Bu&X-Amz-Signature=b59852e02fa0bcf34265d9f9e24482f8479ed2cb0d8c962ea1a0c794c1ae19fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526DQ3VG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJY0KSxC2j5Ir%2BRW7EU9K%2BcRu1vnwlyN8aTruuOdvhDQIhAJU2zKZoKiFTJjYEJD7LNKAKmh%2BaGL1kvztcLPY7x2hNKv8DCHEQABoMNjM3NDIzMTgzODA1Igw5hBF9xvVhFrGSktUq3APilDKmq4Gdz7zFFRtce2djjjIavtDd2OB1BeMO3L2fT1ItIXT0HomPuOiI8RXaPL%2F7s6d33WxIDJ8ZbBLU9hQds3HqQqGHCQbIBsv8ZXqtzHky5UDi%2F0hXmXk%2BONg9k%2BxEpoJBLvd4XqkJk2Ds4lmikl0tn3cD5o9qVEusooI5%2BhKc1Hi3dSsmjCi5XuwhaKkozpZLUK%2F%2B9lGjmLJUkcEDArD9XHeEXCv9AifS%2B2AJO6CL5bAMTwSFKyrpFI%2BfKTXBvPnfipqHAGyPeVUpw9NpOBEYOSdN92pp6fskPW3F3e52kd%2F2HJQwlGkoTjm2RrMq5CGWSl3xLxGZTFAhl7sPwl%2FWSMCpptzbohjRZCXMPZ88mhazT%2FmHiJtK9UpLY9o5XcDuQuX2bI80oSVJkSqKA46HqqjRZudEwmXlMKvrP19C3osnzNnyosT0I6OZFitL934gcfEfXMPrRxNfi4aa7fmlaV3BxieJRsUXHVNJPzqeYeYl7kR3vbdD2L67%2BC3eBDFBYl79giYsXW1fRHyuqZaEXMX2nv%2BTdR4fUPHG1Hd9d8OgucfxRQGAGmb1IQ0Rf4y%2F0YO5bGXu95jsyNuvmSOrHGZwMXKOHE%2B4ma%2BjWqCcD5LFxnv4C1gauTCIv8TCBjqkAfGkDbVku6l1hm9oSk%2FM6AE%2FbG3pEeECnL8%2FpuPsgihyAMvEUZdsSy96eyEVcKU2tX6PBQrnTuuGy0YidMz1Py4vth2Hi78L0sZhNaVFhvKCpjs3wiUBtcqaSDbJ4ySpCGlnfn2ocyOp4qAohNsZnzlNSrnD4GICBfLBTEDRJL7Sl3w5RNwlg3RUpxYUVDlXZLBeb6Ta1AK589AxEkOz%2B0wkW0dP&X-Amz-Signature=68281b7fcf0afb6961bc8f338cb960f26c892b5cfa6c46b34a7ff549812892a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LPONPWF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgTBevORq5CxU2CaPG0nlI6IxMx9C2KkGl7gG3Wf3UJgIgQS88HaEoTuCdcW4pFyZ9l276SHy00%2FaHsV9%2Fz43x8hEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHjqlIrjx4PcHJ8MWircAyCll%2Bu9WsXcD2aDrRSC5rtaksEYvYima6Ae00zwFjm6r%2BtLqXdqOb0clFCPQwXXfhv8%2F8Q%2FshwO627h9YQsog1OeVE8Te6DR%2F4y5gVpL9K64jMSxonkBWNjJD2NNiDaCET8Ia2ELlRS4XYitgH7mo%2FvBIutrYvNNzjtSVGwykUJkJWUlBXuudvHpWYwCmxxNUC2qyAi5PUMaruD2pbPbp0A5yTu4Qmb%2BeMoaJ7TpIeI2ncbEfK6NVY0O%2FM2AR%2FoOcqJ3GTN0WzwAChuD2EKCSi375IUiefzmvhaHP%2BM4xAaBzh4j8ANjTZhqT4RUVDGmRxrhuJdcD4lu41qbo3C2kXe%2FfnSmuPz0JxDZb31r%2BFg8T9wtYkzzMhElIrrWzYXk9YMfcfZX0ypVduGN4F8opjdpV7xi939N2s19kgF%2Boqf9SFA79oTh83LECodIsgKuOIpvXAd0YSyFZ8lkBj7NB6m2emSUt%2F9nNUo1GsG%2F%2FB0ZZXRVcre5NLX9XoXRClhGNScLGO1lIx303pIcbYVyuqh727NztL2zbV6Q%2FHYfykkZzSNSu2uJlG9ozJPFXoM31xIy4BkNzZOLG7mZREzGwY3yUVg2wKsg7NUP0Vp16io%2FwKNwbComoC2THlyMKe%2FxMIGOqUBYuGqIDST69aC48INI3z8cKiFsUvvgPF9LGUDjiPkfRtUSbO7AKXTGOgXRE9oNjpzNSsimpv38MVydBJ2t1C8DV%2FMkhNht9VOJKpdWmQYAlrS2NQ4aAvHUJeDSQ7%2BbpeEjVpYeF%2BB4QNSzcRxVW4S85GpGRS0AY2tUvJOIjAZMAgQhR9lQCWwW3RWMA2lwfyDW1SBI8mG9Pg9BV6DkA4wwjSe6mKy&X-Amz-Signature=bef917a08ec1236a5ed2d74e2b60ae62c544460c47bdb4fc6c2e823ecc91011d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAASD6Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFms7bjQ%2BJAz9H0X3JrMzz4i1g8e6zjxe1QhOlMtuV3VAiEAkhcECWC%2BL1Wooyokb6BUqWcMI%2B%2BLiV5sttFsreCeWdMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCO28IMNkwloJcVuayrcA748Snpc%2F6hPi0w3Vd76s9tgFrrHUUF0vo6LfW0fdDZTTX2QY2S6sINadPcYuOcQIBRd9TlfCIj9Hv%2B53I0v10iKCgkjWtz75FYeeLnVl%2FoxWbJbUZyvUiVNSwoL1R%2B7n6sJDb5iH0uMpieVjbnzsevlPS91cjcT1D4YTTNoy3dIrutwco8dHkjsQ6eKsUDz%2BHd1sRzVa630MvzZyqyOZK%2BFBTp29g3ATnmwF90sYfik3na5mzJ8DQNbbBBFPFSUH3n07YsbJoVj6DfTyCkNciAwP%2F62JGhxTDhL1LOLg5S9lc7OH4n6VQUnegqMDHyxk4dbg%2B3ff2cO%2F%2F4MMzDX1mckUW0VdYUqhcsty1aNQIblzu6KMhhl%2F%2BcymZYssf77h3fVFA0WxKx0vYquBH4WV4adtiflVtikAbr14qP%2FQLUsXRzngjWqJZ2GoXTMxC5MLY9P%2BMx8qCqCZ9ltRScr78DTBueXJs%2FVc9EgZ%2B%2BEVMwOQ01GIa44qRtzWhgrbyhDB4jVp5Ptb2Jfe5WO5iw2f%2Bq70hKTQdpkCEzZp%2F84vw%2BDbZNZTrBcJgO52u1c4wl2pxTgdMwLze3fZYxRJJ7pF5dI4%2BOQJNkiy6I8xq5UhvtmwPpwpcOdauxDJYkmMPG%2BxMIGOqUBfGrik5VZzinExN5UbND40vrPeImGx%2FsTHWoaozdwrb8fhH9ge%2BYTSG8tnxa%2BD6%2B0NlexJj9J4zBjjR6FrIhn40a8V4lXfwOffe%2B35EbmwcRFgm2PBwajbjftPacr%2F1efjZBC5vdBFf68NxJvFBa5YKTnJxHU%2BalWh1kqOzOQBfPNESXF6JOQJrauuKyYy4mHJqBnSTZTCyIyzbs9XrZmeaSc6H%2Bu&X-Amz-Signature=db2306a3430410b0353102c99cc640f21df74d034c42d06540efd0d9c6c66c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
