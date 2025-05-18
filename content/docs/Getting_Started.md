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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVOBVCD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6zONZOtjH1lj4npeZppCgaYd8asvH6DlmCVPve%2BNJmAiB828jTRpiY6eswf50mmYROvsGLZ%2F%2BM1d92Oco65gBg4Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsM6mvY%2BHOwezDnPeKtwD6PQX%2BN4JK9gJKSL0trAQwzuATozOMuaE7V8O7h%2Fsgd5RkhlKn3q8J8eTljz6VP2Vf5CAAbm1WNmPSk4uqsLymOaWGWdiOwEddtPHTYNqnoL7U%2Bka7wxvCpBpI7TLQWpB0xU7v%2BDMGcER27I4a%2BATuW0vdS8YjeYL5DBnOAzXKHSoE8PQxmvmLucBMgR%2BFIUwovyTyAT6pjkw1yBKrBYcxAlnh%2FqIMAtoFpUw%2FLRuWqNdveXY6EL3co7Kj2%2F9b7i1LDjbn8ov3XrQjjGT8CkGdrsCLpY74jJKaGJCT1eo94bdL3E5PQpeBemqQP9DdxiBx%2FxWKQDfW3DLqdYVoi9RMGDgf4QC3%2BDGV%2BrGlC3uAtnPBXfLFU7Yng3WZKRsH60ejlUhtkwD4BAXU6LgrIYERO%2B6Sj0Qn2ENaYasnK8JWxqcmsGS0Zi1iBclK8ECNiqUfuTRNKpYBa8O%2BTNE09T2fHPjQcUsSL5D%2ByazP8v5dUNmHwrE8ELebNPLoc9msJYHFyn7zmpLA60x%2FR0o3XkHvsew28AJHvggo4CquHrc3kjfar8EXjwdJ9W5Lg%2F46QvGspdwCgYYIViQ5Er%2B0%2FIQg7%2FAMrns23Izx57s031KYSvP2lluXaHnAVGALK4wwJSnwQY6pgHi4Rk2tb5p5p7Yd9xOccUCJIi67lPUZ9GUsgHwoKMtqhfwxEbo0rMBzdOma2tjnbwjOmWK%2BfOTeqLXLkDtUFzezn2LVyeRZzVsD4e4O%2BoDYsjaRGVQ2HUqaTmumrknyZDErwTUfIWw42rVEVPYrZMBLd8Ed%2Ba9bgS1yIqaRnRRAL2kRruFbOTr2mYlwWLvB3D1l7iXvoI3rmjo1gFFZ%2Bokvn71e5BZ&X-Amz-Signature=278a1b50ce263207e5f601ba349cf705652ced486cc8b94611225c0b00bd9231&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVOBVCD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6zONZOtjH1lj4npeZppCgaYd8asvH6DlmCVPve%2BNJmAiB828jTRpiY6eswf50mmYROvsGLZ%2F%2BM1d92Oco65gBg4Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsM6mvY%2BHOwezDnPeKtwD6PQX%2BN4JK9gJKSL0trAQwzuATozOMuaE7V8O7h%2Fsgd5RkhlKn3q8J8eTljz6VP2Vf5CAAbm1WNmPSk4uqsLymOaWGWdiOwEddtPHTYNqnoL7U%2Bka7wxvCpBpI7TLQWpB0xU7v%2BDMGcER27I4a%2BATuW0vdS8YjeYL5DBnOAzXKHSoE8PQxmvmLucBMgR%2BFIUwovyTyAT6pjkw1yBKrBYcxAlnh%2FqIMAtoFpUw%2FLRuWqNdveXY6EL3co7Kj2%2F9b7i1LDjbn8ov3XrQjjGT8CkGdrsCLpY74jJKaGJCT1eo94bdL3E5PQpeBemqQP9DdxiBx%2FxWKQDfW3DLqdYVoi9RMGDgf4QC3%2BDGV%2BrGlC3uAtnPBXfLFU7Yng3WZKRsH60ejlUhtkwD4BAXU6LgrIYERO%2B6Sj0Qn2ENaYasnK8JWxqcmsGS0Zi1iBclK8ECNiqUfuTRNKpYBa8O%2BTNE09T2fHPjQcUsSL5D%2ByazP8v5dUNmHwrE8ELebNPLoc9msJYHFyn7zmpLA60x%2FR0o3XkHvsew28AJHvggo4CquHrc3kjfar8EXjwdJ9W5Lg%2F46QvGspdwCgYYIViQ5Er%2B0%2FIQg7%2FAMrns23Izx57s031KYSvP2lluXaHnAVGALK4wwJSnwQY6pgHi4Rk2tb5p5p7Yd9xOccUCJIi67lPUZ9GUsgHwoKMtqhfwxEbo0rMBzdOma2tjnbwjOmWK%2BfOTeqLXLkDtUFzezn2LVyeRZzVsD4e4O%2BoDYsjaRGVQ2HUqaTmumrknyZDErwTUfIWw42rVEVPYrZMBLd8Ed%2Ba9bgS1yIqaRnRRAL2kRruFbOTr2mYlwWLvB3D1l7iXvoI3rmjo1gFFZ%2Bokvn71e5BZ&X-Amz-Signature=faa7ca390f1ea0734678f268c09f5c4491abd25b08d5c9c8669e7ae03d0a91e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVOBVCD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6zONZOtjH1lj4npeZppCgaYd8asvH6DlmCVPve%2BNJmAiB828jTRpiY6eswf50mmYROvsGLZ%2F%2BM1d92Oco65gBg4Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsM6mvY%2BHOwezDnPeKtwD6PQX%2BN4JK9gJKSL0trAQwzuATozOMuaE7V8O7h%2Fsgd5RkhlKn3q8J8eTljz6VP2Vf5CAAbm1WNmPSk4uqsLymOaWGWdiOwEddtPHTYNqnoL7U%2Bka7wxvCpBpI7TLQWpB0xU7v%2BDMGcER27I4a%2BATuW0vdS8YjeYL5DBnOAzXKHSoE8PQxmvmLucBMgR%2BFIUwovyTyAT6pjkw1yBKrBYcxAlnh%2FqIMAtoFpUw%2FLRuWqNdveXY6EL3co7Kj2%2F9b7i1LDjbn8ov3XrQjjGT8CkGdrsCLpY74jJKaGJCT1eo94bdL3E5PQpeBemqQP9DdxiBx%2FxWKQDfW3DLqdYVoi9RMGDgf4QC3%2BDGV%2BrGlC3uAtnPBXfLFU7Yng3WZKRsH60ejlUhtkwD4BAXU6LgrIYERO%2B6Sj0Qn2ENaYasnK8JWxqcmsGS0Zi1iBclK8ECNiqUfuTRNKpYBa8O%2BTNE09T2fHPjQcUsSL5D%2ByazP8v5dUNmHwrE8ELebNPLoc9msJYHFyn7zmpLA60x%2FR0o3XkHvsew28AJHvggo4CquHrc3kjfar8EXjwdJ9W5Lg%2F46QvGspdwCgYYIViQ5Er%2B0%2FIQg7%2FAMrns23Izx57s031KYSvP2lluXaHnAVGALK4wwJSnwQY6pgHi4Rk2tb5p5p7Yd9xOccUCJIi67lPUZ9GUsgHwoKMtqhfwxEbo0rMBzdOma2tjnbwjOmWK%2BfOTeqLXLkDtUFzezn2LVyeRZzVsD4e4O%2BoDYsjaRGVQ2HUqaTmumrknyZDErwTUfIWw42rVEVPYrZMBLd8Ed%2Ba9bgS1yIqaRnRRAL2kRruFbOTr2mYlwWLvB3D1l7iXvoI3rmjo1gFFZ%2Bokvn71e5BZ&X-Amz-Signature=bc4218bbd0ea4f29ff0d2a0c6cd60c18549d305f3e8d45d167974fef6f664f27&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67G2KLM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEryTSqSeMukRxmbs97vcyFuAzoCsy7XLSRrBEDJNd2SAiA58vr0mLgD5pqkfBW5C4koDyNcA1KIBPFGMdkNwWJ43ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMupcAGhajFp6O3ZRcKtwDMXqfBI11hUTN%2FStK6cYu08XRLd03wYOwpf9IJY2z%2BOCyChOsyFvbso22gKHgeJHn9wt0hzdrZsqMBHmYkvJnl35dGn8sWmGToaSS0xN0Be9G%2BPmd3c2%2B3xDoDc9ZoNWy2vb7cFs1nVNwx%2Fxg9ip5xh4iqyGkISXT6XBMvYMKnjUid%2FDf3S95rhvfUWUBzvmnyDyxJgcZLURu8X%2BH9d2fbytaa43i50aSS%2Fa0p2WpP1TfAJpHmgpJKuf%2B71b5D%2Fj9qNsPjyjqvoSpgFwONpQUKgmn2zWo3MNj4%2BfazjIjbiKTKiy07dhdpt8%2FS92f3kGzSq87C%2BMeXWVFcYa4p%2BjEMZHqgZCIjRItplWRATOTvC02sKAoRc9sMroeKyuUbSPGr3%2Bf%2FMlHFo2nB%2BOtmhD5W%2BA75gOL6lFhazgl7PHPhQY8numBv1Twimlv6aJvYRcg3nhS541SNsjNnKG9c43%2FOOad8ez9mh9tjb54r8EdugIMBMU9mWOS%2BatOu%2BoSqZnIrijphrJVCcBcZ9ZijMKyjGtZo2DVt5LzH94zSpomc1OAejR8%2Bh7Uvqw4TInr23Tl%2BrSf8W00pQtp0yQgyHGcpfF%2BRgXcRqS7zJ5sycelndD9N%2Fenz%2BzLJHqfg8Qw3o2nwQY6pgGMyfEDJvK2Oe0mRTUzV0qdWpaArCZROFqWQBHBX8%2BiYkWZ9YfASLOBx8MnGO0UY%2FcsZzql87mnzFd2xBoaKTQaxpZgloQDGXTjusZrujmkrKPFI%2B0HTQ6a%2B8362wp8Vljq8hxzi7Pb5UsGIzaHNqEg7P40FOcQQ4%2FdIPBwaEZDTGrQAqeADNdriNpAqw%2FnP1%2BHsH7L709s0T7%2F120ZZ3G4ddWcBHRK&X-Amz-Signature=25bf694061c548817e76b2f7d8ef51948c4fec77ebb6460b9cbc248d0e27a31e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEO7RTNO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtAhlJdyzgPMegW7EzCCPBlRHXhVsa%2F55aRo5xhHnp5AiBWuEaOiztJlsORmxa0moTq4NFwmA2Wmcy9i8z6WYOYxyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMDriZ%2F229vZZMByVBKtwDzQ3pej7FSFZ3HAyRJj04IyuNqABv5IV4%2BtEKbnRasP36z2AtMjbiQQwIgNT3JokU5lLyn5QA1ErLP%2FPUb1aSp11B1wZ680jYfQ9bGYADpqWQviKeFbzuCdd%2FLJzLsaydsiemEiv9D%2FwupJt3Z7WYeXITHbPgW5DRr7EcwjgURhY2yP6NyYw3iCpPbBj7AOtr%2FJkfSDk9YQ%2Bg5d6JprvPJNCq5BWIuMeIX9woOPK0CkYq0pUDTibjPG0ekFMQLe2gtRh80RdsaGrYIiC3ZMR%2Bvua1UhYGlXoEY26X3339mwOo07DUZlU0FlWQeEWhPOMA0m7V2aWa0837WHv6He58xPQhFIdErMZs8ntTSuQgV2xgMF6LXknSvspYS2tgidc1fd1YbjYuntLM8BbQ6gQW%2FP9hrDUbUUDPAVgaKkR1hBah6ONc1vz7oQApDNWH8MLf1Moyr5Gc9VD2TpYvtk6dDQQRQ0kooW%2FGpKeeDCLpfhn7d%2BMerDPuiflgSDluPuCG4ZGeYb%2BD9c%2B7dOwM1BkmdWxe3keSEPE4xC6g5%2FoQ7mhzGbIUCloYgVzqW5VJQ7ny3sLNVpmaDLPZ0oioz7kMk8BFIjdLhN%2Bu11U7vHPp98tdVPLSIk2lyRQ%2FXUsw3%2BunwQY6pgGAQh%2FV5xGXHPCeV2XJ44EnMXIWajUPZ4k%2B0gfO7ywofNiyvft19Ep4crjjZhAwyQgNVurgsbGw5AcAHNtbjFVB6nzcl02C%2FwI%2Bj1jFFrn4gr3gU%2BU37nfyjWQybSqNHvuD5BsHgdZW2PYgMt2a%2FEOoU0wzmwtASLZ0dggVIhIGGN%2BG5HxE0wT2xT5z13IuxNikVDNTfzSDnKUt0MtFy3sVvLedC5q5&X-Amz-Signature=2df8210adaa1ad825bd64b44dd61b537f78c34e085a5b5a38810c6644ccca259&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVOBVCD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6zONZOtjH1lj4npeZppCgaYd8asvH6DlmCVPve%2BNJmAiB828jTRpiY6eswf50mmYROvsGLZ%2F%2BM1d92Oco65gBg4Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsM6mvY%2BHOwezDnPeKtwD6PQX%2BN4JK9gJKSL0trAQwzuATozOMuaE7V8O7h%2Fsgd5RkhlKn3q8J8eTljz6VP2Vf5CAAbm1WNmPSk4uqsLymOaWGWdiOwEddtPHTYNqnoL7U%2Bka7wxvCpBpI7TLQWpB0xU7v%2BDMGcER27I4a%2BATuW0vdS8YjeYL5DBnOAzXKHSoE8PQxmvmLucBMgR%2BFIUwovyTyAT6pjkw1yBKrBYcxAlnh%2FqIMAtoFpUw%2FLRuWqNdveXY6EL3co7Kj2%2F9b7i1LDjbn8ov3XrQjjGT8CkGdrsCLpY74jJKaGJCT1eo94bdL3E5PQpeBemqQP9DdxiBx%2FxWKQDfW3DLqdYVoi9RMGDgf4QC3%2BDGV%2BrGlC3uAtnPBXfLFU7Yng3WZKRsH60ejlUhtkwD4BAXU6LgrIYERO%2B6Sj0Qn2ENaYasnK8JWxqcmsGS0Zi1iBclK8ECNiqUfuTRNKpYBa8O%2BTNE09T2fHPjQcUsSL5D%2ByazP8v5dUNmHwrE8ELebNPLoc9msJYHFyn7zmpLA60x%2FR0o3XkHvsew28AJHvggo4CquHrc3kjfar8EXjwdJ9W5Lg%2F46QvGspdwCgYYIViQ5Er%2B0%2FIQg7%2FAMrns23Izx57s031KYSvP2lluXaHnAVGALK4wwJSnwQY6pgHi4Rk2tb5p5p7Yd9xOccUCJIi67lPUZ9GUsgHwoKMtqhfwxEbo0rMBzdOma2tjnbwjOmWK%2BfOTeqLXLkDtUFzezn2LVyeRZzVsD4e4O%2BoDYsjaRGVQ2HUqaTmumrknyZDErwTUfIWw42rVEVPYrZMBLd8Ed%2Ba9bgS1yIqaRnRRAL2kRruFbOTr2mYlwWLvB3D1l7iXvoI3rmjo1gFFZ%2Bokvn71e5BZ&X-Amz-Signature=2042b347c07bcec7979e7b605eac476738b49e75e1ec07b687907e031255554c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
