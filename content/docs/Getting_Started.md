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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCPMQRJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBWgw0XPTXFlU%2Fv5MhI3ghUl%2BVekE%2F0rOTtaneQHSBoVAiEAsNBmF%2Btfvt%2B11iT50rEn5G1GV1xvXMUJVEtBowSrj70q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMixdSAT5aREOtWT7yrcAxIZOGYQBzIQJNGffjyrxTwob5HYiIysDbDGj6SQLd6kRWg%2Fs7YM5CRoERxJRE9EzwymHEkhYTKxeroyairhgy%2F%2FPrXkfhl0Z954%2ByzMZeI6g3mcgkLW6qvoCrojvCbWldJ4TYW998qf%2BG3DlRVW8Bw%2Fum7YkaxqTq34Fnbc3LiH7g%2B0Tc8Us96T%2Fiijjm44uEUv4%2BiDVX1gVCCo727e1ze506Sme4h%2BN6v4YRcg3f6x8GsZ9D1DivJAzHDfrNfK0GOLVsvu9O2Xuf%2FZlEogztKtie3dWuy4NNQktBmT%2BqEklFa4apbrZDku9EOgBmR130r605%2BtJZjtKFCXTVHiJp7nNmKiDsK4PpGKeD31QE9onCW5QiR9%2FI8XbR3fGglRm1eTL1ccK2JeD0yE2D7Osool69trBghPhMvMDqV665RE%2FR4fDG7M%2FYjLmmlFWrFv79bvoMxLpxNE4vJsWbRimPw6A31GsMcEYqdCKooLEb9n%2FhkebGdjgEpNsM91x73TzrPpmDBBBpW2tCsGcgmf3L6OO1lsPdMG0IF72Zrv7ozXDi06bkQ1Y4xDF76Dzh1j9BirryrKXmAW6iFenr%2Fs%2BDornVtdwYLMsXNXCzKMKZ5Wgk05SZh8JzI40V6jMJymwsQGOqUBUCm10RZs7uZAX6WpwnS9hGz%2FG6Cb%2BCSeQOgVAdcYEINe%2B1IQOpGIu8UqN5KQaIA41sS1qp3U9NBSm507GGigUoZW9cymFEkpb228R0xB4ZnJT5Do6ojoFBpmD5qH1nh7R3JgG3IXGafpD9P1h3FFwaFE77jfJZpo014uhzRGP1bF6exHvaNRoOVTKNKf2p6oY4OhskNxSVj1bvhROjhHh3L%2Fc9MH&X-Amz-Signature=62a39a3d8b707adf92cb38eef3cd2cf3b8369637c5bb6b04fbbc77800fd0dcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCPMQRJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBWgw0XPTXFlU%2Fv5MhI3ghUl%2BVekE%2F0rOTtaneQHSBoVAiEAsNBmF%2Btfvt%2B11iT50rEn5G1GV1xvXMUJVEtBowSrj70q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMixdSAT5aREOtWT7yrcAxIZOGYQBzIQJNGffjyrxTwob5HYiIysDbDGj6SQLd6kRWg%2Fs7YM5CRoERxJRE9EzwymHEkhYTKxeroyairhgy%2F%2FPrXkfhl0Z954%2ByzMZeI6g3mcgkLW6qvoCrojvCbWldJ4TYW998qf%2BG3DlRVW8Bw%2Fum7YkaxqTq34Fnbc3LiH7g%2B0Tc8Us96T%2Fiijjm44uEUv4%2BiDVX1gVCCo727e1ze506Sme4h%2BN6v4YRcg3f6x8GsZ9D1DivJAzHDfrNfK0GOLVsvu9O2Xuf%2FZlEogztKtie3dWuy4NNQktBmT%2BqEklFa4apbrZDku9EOgBmR130r605%2BtJZjtKFCXTVHiJp7nNmKiDsK4PpGKeD31QE9onCW5QiR9%2FI8XbR3fGglRm1eTL1ccK2JeD0yE2D7Osool69trBghPhMvMDqV665RE%2FR4fDG7M%2FYjLmmlFWrFv79bvoMxLpxNE4vJsWbRimPw6A31GsMcEYqdCKooLEb9n%2FhkebGdjgEpNsM91x73TzrPpmDBBBpW2tCsGcgmf3L6OO1lsPdMG0IF72Zrv7ozXDi06bkQ1Y4xDF76Dzh1j9BirryrKXmAW6iFenr%2Fs%2BDornVtdwYLMsXNXCzKMKZ5Wgk05SZh8JzI40V6jMJymwsQGOqUBUCm10RZs7uZAX6WpwnS9hGz%2FG6Cb%2BCSeQOgVAdcYEINe%2B1IQOpGIu8UqN5KQaIA41sS1qp3U9NBSm507GGigUoZW9cymFEkpb228R0xB4ZnJT5Do6ojoFBpmD5qH1nh7R3JgG3IXGafpD9P1h3FFwaFE77jfJZpo014uhzRGP1bF6exHvaNRoOVTKNKf2p6oY4OhskNxSVj1bvhROjhHh3L%2Fc9MH&X-Amz-Signature=c1d48431f8c6073cfb7abcfa3556d8e4e8fb713bc62288ede9250f9ad0a97e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCPMQRJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBWgw0XPTXFlU%2Fv5MhI3ghUl%2BVekE%2F0rOTtaneQHSBoVAiEAsNBmF%2Btfvt%2B11iT50rEn5G1GV1xvXMUJVEtBowSrj70q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMixdSAT5aREOtWT7yrcAxIZOGYQBzIQJNGffjyrxTwob5HYiIysDbDGj6SQLd6kRWg%2Fs7YM5CRoERxJRE9EzwymHEkhYTKxeroyairhgy%2F%2FPrXkfhl0Z954%2ByzMZeI6g3mcgkLW6qvoCrojvCbWldJ4TYW998qf%2BG3DlRVW8Bw%2Fum7YkaxqTq34Fnbc3LiH7g%2B0Tc8Us96T%2Fiijjm44uEUv4%2BiDVX1gVCCo727e1ze506Sme4h%2BN6v4YRcg3f6x8GsZ9D1DivJAzHDfrNfK0GOLVsvu9O2Xuf%2FZlEogztKtie3dWuy4NNQktBmT%2BqEklFa4apbrZDku9EOgBmR130r605%2BtJZjtKFCXTVHiJp7nNmKiDsK4PpGKeD31QE9onCW5QiR9%2FI8XbR3fGglRm1eTL1ccK2JeD0yE2D7Osool69trBghPhMvMDqV665RE%2FR4fDG7M%2FYjLmmlFWrFv79bvoMxLpxNE4vJsWbRimPw6A31GsMcEYqdCKooLEb9n%2FhkebGdjgEpNsM91x73TzrPpmDBBBpW2tCsGcgmf3L6OO1lsPdMG0IF72Zrv7ozXDi06bkQ1Y4xDF76Dzh1j9BirryrKXmAW6iFenr%2Fs%2BDornVtdwYLMsXNXCzKMKZ5Wgk05SZh8JzI40V6jMJymwsQGOqUBUCm10RZs7uZAX6WpwnS9hGz%2FG6Cb%2BCSeQOgVAdcYEINe%2B1IQOpGIu8UqN5KQaIA41sS1qp3U9NBSm507GGigUoZW9cymFEkpb228R0xB4ZnJT5Do6ojoFBpmD5qH1nh7R3JgG3IXGafpD9P1h3FFwaFE77jfJZpo014uhzRGP1bF6exHvaNRoOVTKNKf2p6oY4OhskNxSVj1bvhROjhHh3L%2Fc9MH&X-Amz-Signature=d24ef0c7bc37ed521c3b6c1debac4f61b56062cba6c9406a335b0a9a2f704368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5NVPSY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICie3fnxLNqnLGjo6UwtSEMNF1%2BqPGJPSFmskQk7dKftAiAaf6BnDAGzzNDq7J%2FsFBpqilnPPkWBaSsM%2FhmoSLoGgyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMBiJBEfvjGrdKIuMIKtwDA2uyyO7jWs6iaXT%2Bkgnqh5ExWg0hv44zHe2Abzrk4XrEpNjIZPWB8Y%2BH%2FkmG2tFK6x57gb4X2TJkBd4VPN3C75BfH01J8BQF71%2FzozGVQFscM1Z4FCgo9GwXT0wgkOimiqUVTleTs50nwLYYxNTfx6NHfLntvEnmCnHhfknUC6ZBWnEL%2BDPRDCjWS6QfWId0PhIhnQovWllves3MKunYjuSrRuUvaQki35boogyYDljnTKX%2BHf7GrqTwNfMcxOgQ%2BKkfsj0YjByQA39NZe%2FJlImnLU6KY6Xu%2Bgnub4ZPP23mttcRTwRkMObF5gWLX7rAq6snRl%2BDjKQvX5fzi0MsuncF21K7RuoV112BmbdeUUNQL%2BgFeYuznsJHYtbgcivBAZp9v7PymnGVRGrOABi%2FBrEb2rFFz%2BKSilkVJGbrW3HOBZnsq%2B40zFkcOoCom7snwgwXBJqN6pHVRPwE24kwMEJ%2FguSVr1Gj9d%2By%2B1CebS7asRwU69%2BC7kTw6M1xtIjBEenMELCEd6IrK1GF2qwe%2F9rjjt9Uv2O6xvKRAymK78LQ%2B8Mipz62FjPpoGlfRCsbr4li2mtFUbsZ1ePJhRacBtnOP6kRozDPmYP7%2BnhLUvJzxzQcdhalKDVqkMIwqKfCxAY6pgGkXtFIzJ0QTKRmbwa%2BvZ83guE6f8jB5N%2FSGZcuYqa5HQR4FBmCSny5ySPOiObjtDTcRa%2BLZI9WGH1s6WSoc3wZt7IwqBBQ%2BCs09K75ckm6EHD3gnwMTmnvCmum9imDuX2%2BjotKBQx%2FV%2FHmcBLAZHwgbQA1O1Ncclj1aW6qZU5AzGbo4PXCBEpuTDWgk%2BCcKQ6%2FCIRh7AMm%2FYikm%2FrZMeCakieneiCl&X-Amz-Signature=a2aea9ada9ae615abf98b64bce390a7755e6c5a99d24cbeb1018b6927b0e1789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUNDXP4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBKA6qdLfwvtgwfn3LvVZ%2BN%2BAJsdT1XXTjIQFNixd3NLAiEAo4YuiJLH3wO0Pzk8QOWlPlkBzlokIRj9jkOa3KoSbUEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2BhtpsQbDusRbiD2ircA2PVqzN9spmTwF0NHGJ%2Fl26ek8bhC0LxihMuF3lKv7MUJB3pvVc8vKUikfD8XxJcUQPRMCHP%2BlFJXy%2FlX6rJnP3mclZwTXWt4Qna0PtKDHWku1h8rbXiAkII5LvMTpc2CEZWa12p1%2BJC70qETYUeFla%2BB72uXW%2FHvHn9Kp%2Fvp1W8e2aOLDqnP7ynP0g34xnpIl%2F9IVM0D%2BodekpIpBQ%2FP3sU2UikQHjqt2ULR9lPmMj3YIdAyGRSO%2BIRnc6kE6npCsObLs%2FxAVPmekb3fA%2FGyDMnyFu8pkUG9OGICcvH9001flZfnpVKfjJ63ye%2FhTfDTi%2Bwj%2BUi8GyunqHQrR%2F0VkYdUWuWKkocu8I3GZv%2BAq7Aew%2BHOhHAZUoiNQNtuidex4x0bJlYXcUYAq8vcS4eYwPpEE8EJxZD5i97YuUVO3eMeoZ7tmfVttu1Vdlb6cU9y0bWXnEBYhDoDJE3D9JdaywH7Duy5n4RCgMyLM1IiuOZ17EEgxxLEsI3oEpF0KBFlG5WQwf1QvlqVxzmUxwKgK8L3QbEBEgePAeAxI3VLEDfJ5ouH1sjTeQIsyfCRy6FU9oBuKAv%2Bs%2BZgBlN%2F1Zb8XwFDnd2IRr9geQyGOBvxiDkfUve7bN5gj811f5eMMWmwsQGOqUBJkOLBXvYu4oaCqVPT%2F6qjxTH%2BrviF5TkNS%2FQoLadojvWdPfjiLKzv9xeYlB2GOFo7J51G2uObsRn%2FMp0cDCmiVVicD2VNpzXczQcAskss6EdEHxEUg37Bx8gttNmpQD9E4lF8j%2BykgjLQcqtlGKyObirczkwkp5gdoRmSvyH%2BH%2FSKrsqd5X2hotC1JYk4pZPyCwE%2Bj9iQWQ5rXACqablCT3J5aTp&X-Amz-Signature=78aa4d85de04c2cc4c4c41f2d612449a829662f275cf9a2bf9894af033c6ebb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCPMQRJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBWgw0XPTXFlU%2Fv5MhI3ghUl%2BVekE%2F0rOTtaneQHSBoVAiEAsNBmF%2Btfvt%2B11iT50rEn5G1GV1xvXMUJVEtBowSrj70q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMixdSAT5aREOtWT7yrcAxIZOGYQBzIQJNGffjyrxTwob5HYiIysDbDGj6SQLd6kRWg%2Fs7YM5CRoERxJRE9EzwymHEkhYTKxeroyairhgy%2F%2FPrXkfhl0Z954%2ByzMZeI6g3mcgkLW6qvoCrojvCbWldJ4TYW998qf%2BG3DlRVW8Bw%2Fum7YkaxqTq34Fnbc3LiH7g%2B0Tc8Us96T%2Fiijjm44uEUv4%2BiDVX1gVCCo727e1ze506Sme4h%2BN6v4YRcg3f6x8GsZ9D1DivJAzHDfrNfK0GOLVsvu9O2Xuf%2FZlEogztKtie3dWuy4NNQktBmT%2BqEklFa4apbrZDku9EOgBmR130r605%2BtJZjtKFCXTVHiJp7nNmKiDsK4PpGKeD31QE9onCW5QiR9%2FI8XbR3fGglRm1eTL1ccK2JeD0yE2D7Osool69trBghPhMvMDqV665RE%2FR4fDG7M%2FYjLmmlFWrFv79bvoMxLpxNE4vJsWbRimPw6A31GsMcEYqdCKooLEb9n%2FhkebGdjgEpNsM91x73TzrPpmDBBBpW2tCsGcgmf3L6OO1lsPdMG0IF72Zrv7ozXDi06bkQ1Y4xDF76Dzh1j9BirryrKXmAW6iFenr%2Fs%2BDornVtdwYLMsXNXCzKMKZ5Wgk05SZh8JzI40V6jMJymwsQGOqUBUCm10RZs7uZAX6WpwnS9hGz%2FG6Cb%2BCSeQOgVAdcYEINe%2B1IQOpGIu8UqN5KQaIA41sS1qp3U9NBSm507GGigUoZW9cymFEkpb228R0xB4ZnJT5Do6ojoFBpmD5qH1nh7R3JgG3IXGafpD9P1h3FFwaFE77jfJZpo014uhzRGP1bF6exHvaNRoOVTKNKf2p6oY4OhskNxSVj1bvhROjhHh3L%2Fc9MH&X-Amz-Signature=babe72e4b3d5edb9bbde185b8475ce93dfff8b99635eee7dcc6f5ae3f3adc312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
