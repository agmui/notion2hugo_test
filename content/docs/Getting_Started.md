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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPOCLPH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYMK0NtjStJzaiInmt4W1x4dgeJx3EgoA3KI%2B6bBTMVAIhAKfsT%2FeBug%2BP26S1Qzan4zzKB6mS%2BNLWWKruybAyPJnQKv8DCBUQABoMNjM3NDIzMTgzODA1IgyuVt9Q6dSxSY%2BMTiwq3AM%2FArUskMvOvQAKRQDSYVyRcwW%2FX%2FViLbBysmt9%2Fow07ppFTh7tHoHOi8GWI0Q83%2Fw%2F6NOkGTA7HJevnv%2BotuiGpuE5TeLpR6RqY24IRhnJrZ3d9vvG%2BxH9qVRM%2Bv2Cazg5XS7uaDo%2F7lcT%2BT6xkY6MML%2Bwk6yAJBKKa4XIpYgpSueGAg5ipdshy3%2BW3ExucR2ZL%2FG9cW3%2B3891kBIzPgsuiZ5g0m9feJNANttGcFT99msvlWy%2FAWjKLpF0MdbkE3MpPPDP%2BrwgLif1i3rtF2Z0YNsTC4QrbkOayk5W2t0REoUrd6j3hPQlcpYlYIz6bJ24m2mvl0cogb16vRTA243jBzQVp1FkjIe4lpz6ZmDBw%2Bqe3dEykyNGLsUY3rcTfyvGErnsazgL7AMYIwA22CgzW5oEGf%2BsDUWZm869qByAzbNxt4YiaaRVcQzUo4TTTB4lUu3atemdjUTbfrBK87OqZTAu4IXOmZn1rvx5fa7kGuOA5pBDyO9QwGNP%2FLVCoHeudj%2F3iGFhATrNtJC5g3ZXEhCAGqqDTxQ8mwgUmxg61nvi4Sinphe2WWuWuDHPGN9M9AsgvTUOKP%2FdySLTh%2FipflSknWL2p2mQunYouf9uJJrvFcXpf663o76CGzCl8%2BTCBjqkAUSNgESklIi%2B3hOIF665POOpUHmofFmY%2Fl2HoEf3QhQvgld%2FDsIfVg3wHsCLxpL%2F9M%2B2A9Yb%2BWb%2FhyThWu%2B8lFgtZyB8u%2BrYYlKud4C92gQOFxp7ArU5B%2F4Q6FxyKvD%2FoeVPYs11sV8dJrs4YGWbTNiD2%2FHtWy9MJmXwGe3ppzFGKB2NCAfDpc2JSSzVnW8%2BJSOfA3qWARAWNSJmpwhq9DzR7yZC&X-Amz-Signature=8d2633f14337f30a3d982a41e9471eff9fa61fd1acb5592f2ef6eeb41c8a2d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPOCLPH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYMK0NtjStJzaiInmt4W1x4dgeJx3EgoA3KI%2B6bBTMVAIhAKfsT%2FeBug%2BP26S1Qzan4zzKB6mS%2BNLWWKruybAyPJnQKv8DCBUQABoMNjM3NDIzMTgzODA1IgyuVt9Q6dSxSY%2BMTiwq3AM%2FArUskMvOvQAKRQDSYVyRcwW%2FX%2FViLbBysmt9%2Fow07ppFTh7tHoHOi8GWI0Q83%2Fw%2F6NOkGTA7HJevnv%2BotuiGpuE5TeLpR6RqY24IRhnJrZ3d9vvG%2BxH9qVRM%2Bv2Cazg5XS7uaDo%2F7lcT%2BT6xkY6MML%2Bwk6yAJBKKa4XIpYgpSueGAg5ipdshy3%2BW3ExucR2ZL%2FG9cW3%2B3891kBIzPgsuiZ5g0m9feJNANttGcFT99msvlWy%2FAWjKLpF0MdbkE3MpPPDP%2BrwgLif1i3rtF2Z0YNsTC4QrbkOayk5W2t0REoUrd6j3hPQlcpYlYIz6bJ24m2mvl0cogb16vRTA243jBzQVp1FkjIe4lpz6ZmDBw%2Bqe3dEykyNGLsUY3rcTfyvGErnsazgL7AMYIwA22CgzW5oEGf%2BsDUWZm869qByAzbNxt4YiaaRVcQzUo4TTTB4lUu3atemdjUTbfrBK87OqZTAu4IXOmZn1rvx5fa7kGuOA5pBDyO9QwGNP%2FLVCoHeudj%2F3iGFhATrNtJC5g3ZXEhCAGqqDTxQ8mwgUmxg61nvi4Sinphe2WWuWuDHPGN9M9AsgvTUOKP%2FdySLTh%2FipflSknWL2p2mQunYouf9uJJrvFcXpf663o76CGzCl8%2BTCBjqkAUSNgESklIi%2B3hOIF665POOpUHmofFmY%2Fl2HoEf3QhQvgld%2FDsIfVg3wHsCLxpL%2F9M%2B2A9Yb%2BWb%2FhyThWu%2B8lFgtZyB8u%2BrYYlKud4C92gQOFxp7ArU5B%2F4Q6FxyKvD%2FoeVPYs11sV8dJrs4YGWbTNiD2%2FHtWy9MJmXwGe3ppzFGKB2NCAfDpc2JSSzVnW8%2BJSOfA3qWARAWNSJmpwhq9DzR7yZC&X-Amz-Signature=0cfa565c280d806bb582884f424696ffc5dda7d8f53b1704b78826982b8ce657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPOCLPH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYMK0NtjStJzaiInmt4W1x4dgeJx3EgoA3KI%2B6bBTMVAIhAKfsT%2FeBug%2BP26S1Qzan4zzKB6mS%2BNLWWKruybAyPJnQKv8DCBUQABoMNjM3NDIzMTgzODA1IgyuVt9Q6dSxSY%2BMTiwq3AM%2FArUskMvOvQAKRQDSYVyRcwW%2FX%2FViLbBysmt9%2Fow07ppFTh7tHoHOi8GWI0Q83%2Fw%2F6NOkGTA7HJevnv%2BotuiGpuE5TeLpR6RqY24IRhnJrZ3d9vvG%2BxH9qVRM%2Bv2Cazg5XS7uaDo%2F7lcT%2BT6xkY6MML%2Bwk6yAJBKKa4XIpYgpSueGAg5ipdshy3%2BW3ExucR2ZL%2FG9cW3%2B3891kBIzPgsuiZ5g0m9feJNANttGcFT99msvlWy%2FAWjKLpF0MdbkE3MpPPDP%2BrwgLif1i3rtF2Z0YNsTC4QrbkOayk5W2t0REoUrd6j3hPQlcpYlYIz6bJ24m2mvl0cogb16vRTA243jBzQVp1FkjIe4lpz6ZmDBw%2Bqe3dEykyNGLsUY3rcTfyvGErnsazgL7AMYIwA22CgzW5oEGf%2BsDUWZm869qByAzbNxt4YiaaRVcQzUo4TTTB4lUu3atemdjUTbfrBK87OqZTAu4IXOmZn1rvx5fa7kGuOA5pBDyO9QwGNP%2FLVCoHeudj%2F3iGFhATrNtJC5g3ZXEhCAGqqDTxQ8mwgUmxg61nvi4Sinphe2WWuWuDHPGN9M9AsgvTUOKP%2FdySLTh%2FipflSknWL2p2mQunYouf9uJJrvFcXpf663o76CGzCl8%2BTCBjqkAUSNgESklIi%2B3hOIF665POOpUHmofFmY%2Fl2HoEf3QhQvgld%2FDsIfVg3wHsCLxpL%2F9M%2B2A9Yb%2BWb%2FhyThWu%2B8lFgtZyB8u%2BrYYlKud4C92gQOFxp7ArU5B%2F4Q6FxyKvD%2FoeVPYs11sV8dJrs4YGWbTNiD2%2FHtWy9MJmXwGe3ppzFGKB2NCAfDpc2JSSzVnW8%2BJSOfA3qWARAWNSJmpwhq9DzR7yZC&X-Amz-Signature=037dfa16b8856ecef703cbda9e9ba5e60a9bf30644763a452828777a0e3fde11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AECWNLJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCg%2Fifwmbrwr3xsiTQGE6E4reyhdV%2FyG%2BUiuyeqrOnVwQIhAN%2FteXiDTvl8tJCwpzBW0RVctpfhsiOazH2Ylqu3IdEaKv8DCBUQABoMNjM3NDIzMTgzODA1IgxR4IfBrspri2sInYQq3AOjkjG%2FnYbHUFbX7NKSIcrEMwpKRORosbgW85I%2B7ODrTbiFC1f2oGqgYeD4uea%2B5FLiUg1CkwiaDHOczwgGk4dylLkDKNnMMr2kmUV4j66kKE8wMY7w2Zvk6NIpqoZbpg0MzC8zKIlAvTG8rsFqZ4NmFO6cPkJmI9CA06z1z78P8EirBNnZoFZQTErHf%2FQziQ%2FFzLVygkZG5LF6gpLjiqmzbP7JJpNgGkOLvVqUUQNmfJ8hsI1uh5%2FSKaC7kE0VEdZgpct469ilW8z7MSEaT4lmUkT2%2BRxQUkiLBwEKEsZKbmBgQAdW5xVrD910DGUbEcYLRIuQvMHG%2BIzY2VY%2BCP5BcHyCjw01qe6HQX%2FGMbPUpmK%2FOKtpL514WG96ORyEvxRa90D42Tui7GhUOHF1mOy%2BcOEgM%2Bi7bfCh2p1bHc6T2yE2Rm%2BtDVxpdyse8fs3hfRs43b4a3TDjMAsIbv3gpOSUqoaje2pcqp7J%2FRCFhzexLvb8oOYXgUzXJbdEM%2BRrUSOSHdDpUr4VPsPW0pmKrQQM079yeDIqMt514YW3zqdRpdUZYqRIdtsb2mVfAU37qieCVLloJIJeIMUrHG4f%2F9R1mNMYSqnBaW%2BeU6W535NnXyEYu3ycZUTr3Qz1TDE9OTCBjqkATeHIlI1Py9%2BrSmyxxrKQoJYcFt5lHwhCt3ZJj%2B583AJYQBgxp16aAxF4V0MB6ptMiVnN2uDI09xkDgTggk%2BShhoeGGAB0g%2BL0ff0Kjjje8c3xPUXC7NkS7PDcQ3Lope6F01fZlDcmLGQ5C5l9Cbs%2FVo5d1fjHCOlENTEmSsqo1vLOOmKuOn%2FvPlRI3bUSSk67kax%2F%2Bb%2BdnRWccWP7m%2F5E8flPub&X-Amz-Signature=3f30444d6cbe6fa9fcfa2d11175bafbbacbabef05dbc7bece91dc5a2c0c2b832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXQ55ZG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFDAg4GleQr%2BkiIwBbUg2i5Gs%2FZ1GIFzBTRjQWeDNMMsAiEA142h4lkaQg7c%2BNoos015TIyQdKW5vbs6b6GkoyQkrpwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDnrGMf21ZUxQKunlCrcA2Tv%2Fp56EsOezHisZnL5A1xk2fG0emCAOaKZTwVnKSNEdTGZfLAq%2BVXbB93GH5c9%2FL9OAuM6LnQP%2FUCU8SefsZ7vEYzv1dOfbVy8u38RRCywIDHJpRSXt02Lf5VXOvT61X69uXzsZwNPvErLZT8fguESWaM2uvz%2B1h90yTWO5bdF6tlQd0vtxo7y0yVBs61h9OZQorcLUw2w018Z8XiQ%2BT%2Bp0vD0weMBshbbc9bGgr8QRH%2BVswa48hkt205ng9MKn5rdHPOqbVhOlSdhQdWll7%2BGAyucsu8RptbhGWrq3TMxqHPe8z7bWiGhN5c7fWGHtTfEtVY9arK7xlO5XRxCQ%2BlUH51m6KMEKJZU0g2kU3nhQtYRWmiyk4NXvdG%2F0e3THLperlIPcmTmrUqjPLCz7npGr7KjoBEW26vo37CUiU0rSHIT5y6SNxTfZzxJqS9sdrCEcDS2kB4q19eoskEIppknLH3cJ9uHzob6ItX80mGIvE%2FXldZ8dQVZyU3Gzy9Bh8QLvBZQTZTiehL9%2F04ArN%2FiwvDcbJgtDA3lINNN7pZGlBR1vLI5sh90JMAmqyCArjTYSjxgjrgOIRquGNFtjmGgkO1wX1tWAcGwTnx8K8noh%2BeI5L2WSBknSDmLMMXz5MIGOqUBenzTdtFs8cD4%2BQHPtq%2FlZfslYYIBg3aMOrNaUHdqz6FY%2Bnp%2FsQoNrWJAQaCQIaP7kHmmJTD8qZV1PY%2F9wPuudLOaIaEv6innewYTZONttt4uuOUt%2FytD4I3BayNEV2yGyiwURILKxqAXlg5CahXq8vWzEKhS0pKenvh1vXkU1CEQ5O8B%2FKLsXI3QMRnMQRQaAjyzbv3%2B57GoaGINth%2FMqsehqmFY&X-Amz-Signature=b78e39dc6c9f189bd68c781690b1000342de818fd45fa4b5c331d97068ffd914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPOCLPH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYMK0NtjStJzaiInmt4W1x4dgeJx3EgoA3KI%2B6bBTMVAIhAKfsT%2FeBug%2BP26S1Qzan4zzKB6mS%2BNLWWKruybAyPJnQKv8DCBUQABoMNjM3NDIzMTgzODA1IgyuVt9Q6dSxSY%2BMTiwq3AM%2FArUskMvOvQAKRQDSYVyRcwW%2FX%2FViLbBysmt9%2Fow07ppFTh7tHoHOi8GWI0Q83%2Fw%2F6NOkGTA7HJevnv%2BotuiGpuE5TeLpR6RqY24IRhnJrZ3d9vvG%2BxH9qVRM%2Bv2Cazg5XS7uaDo%2F7lcT%2BT6xkY6MML%2Bwk6yAJBKKa4XIpYgpSueGAg5ipdshy3%2BW3ExucR2ZL%2FG9cW3%2B3891kBIzPgsuiZ5g0m9feJNANttGcFT99msvlWy%2FAWjKLpF0MdbkE3MpPPDP%2BrwgLif1i3rtF2Z0YNsTC4QrbkOayk5W2t0REoUrd6j3hPQlcpYlYIz6bJ24m2mvl0cogb16vRTA243jBzQVp1FkjIe4lpz6ZmDBw%2Bqe3dEykyNGLsUY3rcTfyvGErnsazgL7AMYIwA22CgzW5oEGf%2BsDUWZm869qByAzbNxt4YiaaRVcQzUo4TTTB4lUu3atemdjUTbfrBK87OqZTAu4IXOmZn1rvx5fa7kGuOA5pBDyO9QwGNP%2FLVCoHeudj%2F3iGFhATrNtJC5g3ZXEhCAGqqDTxQ8mwgUmxg61nvi4Sinphe2WWuWuDHPGN9M9AsgvTUOKP%2FdySLTh%2FipflSknWL2p2mQunYouf9uJJrvFcXpf663o76CGzCl8%2BTCBjqkAUSNgESklIi%2B3hOIF665POOpUHmofFmY%2Fl2HoEf3QhQvgld%2FDsIfVg3wHsCLxpL%2F9M%2B2A9Yb%2BWb%2FhyThWu%2B8lFgtZyB8u%2BrYYlKud4C92gQOFxp7ArU5B%2F4Q6FxyKvD%2FoeVPYs11sV8dJrs4YGWbTNiD2%2FHtWy9MJmXwGe3ppzFGKB2NCAfDpc2JSSzVnW8%2BJSOfA3qWARAWNSJmpwhq9DzR7yZC&X-Amz-Signature=368f71b71f2e8a6e5888f6edd1d94181f841714ccd2aa5284e83f8fbbdb0cfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
