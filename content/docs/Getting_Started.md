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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFVE376%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE4uVDGFk%2BZzWTl4gMbRCml8YlwvdWK44n2ZMZxIgRflAiA6EiyTzVixXXXH73zcgcrx2d9qsuVLbzwLDTQYynY0%2ByqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhveU8WeoBb4h%2FzVUKtwDrvpTFB9ELgIdvwe0YssM4kxxsOvxUWMJUM2Pffw2YkFlB%2F%2FbeuvmtAhr16Dv24BtdhlkgieOqWsiYpFu9KcgwekYKeazWfdHBpw%2B30J8VzTS45PXgKC0R7F7wq0CbUb1c4OZWGDxzYX3%2Fg2Yu02vQVdE2AxK4ayjXiqXasBXVb%2BuUP6zxT945v4a3X9GrqaER%2BfQCwshavyiFnxcCX2qQb7W%2F7mYxHhJiqUHUgH7Hl6YLxd5tSHnUhLoHLsg0JnnTOSYf08%2BD8n%2Bsu3Y5LPB%2BBW3IoD%2Bu4%2Bh1%2BFj5tajQxOJUxUruU5PvY6klhZ9g3mXM44U1UZW6booO7FGCz%2FdkklMWBJ8LMtDVRVUvEsHDitAWK1ZMGNCetrJKwur6y2O4UGpXCJFOoini5KWcIBAeKwzsaoGsa%2BQpQKJtBgzMfe91nRDd3Fkbau2B%2BBte9%2FBIZMSolQjtjBBLR9D8irRGMgiNIwfFsDQRiNATeGFgAOMIjCR9dtDgn6QffoMs4o%2FaCo16XOyg90Uo%2FPgLmHnJcyUAiSYJwh4U6SOM3tjIvsXpYQYoFr9mU0SIm5P3l5T4g1wFOthoH6nWO88kJw59fHWgtZqWgWiIGmrbY95QQ38lT3qHD2S6L8UJN4w6trDvgY6pgFqmCO66IuznRLWva9%2Fme%2Bgvue4repcRJxefX4GRWVDWfkn1bRYB7OdrAhVOd3uPDkg%2FBHfh9oCmEEtxIclMxN8sLKj3ehZH1bLNU0RQxflNsG%2BuPet%2F5uMvwbALZXeLSRgqz7IAhaUJ15oZRK6uOEJj2duu5VXUmcp24qhb98oDDOINfIBl%2BZsjL232POmjrF0a57keUY%2BoBXR8kAnSPUy61P4Qyd1&X-Amz-Signature=655a8544c820a2b1308355d90aee635f7aa3d07fe191310e0c9f0f6b0d13590b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFVE376%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE4uVDGFk%2BZzWTl4gMbRCml8YlwvdWK44n2ZMZxIgRflAiA6EiyTzVixXXXH73zcgcrx2d9qsuVLbzwLDTQYynY0%2ByqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhveU8WeoBb4h%2FzVUKtwDrvpTFB9ELgIdvwe0YssM4kxxsOvxUWMJUM2Pffw2YkFlB%2F%2FbeuvmtAhr16Dv24BtdhlkgieOqWsiYpFu9KcgwekYKeazWfdHBpw%2B30J8VzTS45PXgKC0R7F7wq0CbUb1c4OZWGDxzYX3%2Fg2Yu02vQVdE2AxK4ayjXiqXasBXVb%2BuUP6zxT945v4a3X9GrqaER%2BfQCwshavyiFnxcCX2qQb7W%2F7mYxHhJiqUHUgH7Hl6YLxd5tSHnUhLoHLsg0JnnTOSYf08%2BD8n%2Bsu3Y5LPB%2BBW3IoD%2Bu4%2Bh1%2BFj5tajQxOJUxUruU5PvY6klhZ9g3mXM44U1UZW6booO7FGCz%2FdkklMWBJ8LMtDVRVUvEsHDitAWK1ZMGNCetrJKwur6y2O4UGpXCJFOoini5KWcIBAeKwzsaoGsa%2BQpQKJtBgzMfe91nRDd3Fkbau2B%2BBte9%2FBIZMSolQjtjBBLR9D8irRGMgiNIwfFsDQRiNATeGFgAOMIjCR9dtDgn6QffoMs4o%2FaCo16XOyg90Uo%2FPgLmHnJcyUAiSYJwh4U6SOM3tjIvsXpYQYoFr9mU0SIm5P3l5T4g1wFOthoH6nWO88kJw59fHWgtZqWgWiIGmrbY95QQ38lT3qHD2S6L8UJN4w6trDvgY6pgFqmCO66IuznRLWva9%2Fme%2Bgvue4repcRJxefX4GRWVDWfkn1bRYB7OdrAhVOd3uPDkg%2FBHfh9oCmEEtxIclMxN8sLKj3ehZH1bLNU0RQxflNsG%2BuPet%2F5uMvwbALZXeLSRgqz7IAhaUJ15oZRK6uOEJj2duu5VXUmcp24qhb98oDDOINfIBl%2BZsjL232POmjrF0a57keUY%2BoBXR8kAnSPUy61P4Qyd1&X-Amz-Signature=c183d1c14ce43076f1f36104b7bf1e1b1b968e27ef30c3b075275a9f07751f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5E2GCL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEUZh8zeLfbPrvQml%2Bee5%2B7stCxVMU760MCXb6j17zeNAiAwTmejmds2wP2b9ikzyiHa0HKEpFyxQ1Zo46WM46ZGUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHU%2F%2Bdoqv7c5dmfMDKtwDSEK2WL%2FCT%2BKE8vpOcnHaLhx%2Brts%2BjbjytlXRO2yWBuN1%2FfcBmMUGkGUpisJFY69rYL%2BflCZOD5zRh1rZGOXVDwsvk5030w6QYso7ijzgYtGSZk5qnHTirfIxIrZzU2fQOfcE42tMjweNXmGe75SZtrbQbd%2FIRfb1xRU7zqUoiU2VadP809X75dtyzMXYcUKYhEG6m66wnqN7N0cSMNJZSLexYJVImRMJLFoBx3dJFw%2F3C%2BaPWREiS0yfZVlplFP5OUoHB7Co48fh0TpxZyfRzfwOM0y7Ib0ktKlgO96OTUXjOH7%2BmwHy%2Bm6waLxB9n170PM9BWjgxupkRKW8CVWTZB22e5C6jgmXifkcePXP5ddOy0OXIB%2FolPmub0TEeVVJh7EBrMqkfzy1eJsU5JUCaw760PINps97yTYOZb6c3jPqisUcZstBoDokw%2ByrQLjjDNGz3NzXJ%2BMYMUNCXGDUwba5xI8vXnQD%2FiNG59UXFXwt2RUy4YhLH0pEqBhZDusyRtPCWvV1F3ryzY6%2Flx90i3zJU9RN%2Bp4XH%2FPHlt9R0rMDevICZI%2Bbgs4COdNykhG4KNT4z98e3%2BwlNw56zD8Fi9WcB7AZUGg4LWmvReUPOPZSOxE5pBzko%2BlLocsw2trDvgY6pgGaeWFusoNyZqNJKMzHoeaeBvpb8esFDzb62x8moHzSJS2gBmNXmjjga29sI7VQ8wZzxz2dMD%2Bgt38BQQVNKwlYgTWdoOE1dlyJM4i3yBvL1RBQHU8kUV2R5rfpwUqduSTv2odGPNSE8lF6C6bxjZqBDN5e%2BYlHxylDgFvqqAqIQFORnpWGOWGyC3BkaL5xMlDkjHkr5Vo4jkL52ewDStZO%2FrEawZTf&X-Amz-Signature=d8689fca64fa2cc4248fe202cdc3d6711934c8bddf825691b5a4d0f35443f53c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZ3YQKC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD2KqGl%2BkcgRvYwu%2FWonJQZn7BMrqTgnHdEsbSCRk95gAIhAOcccGvR2x2vYEsLYcUkyEkOx2coAYsPdu6LBqNKbtpTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygyQn08kUVvBetrOAq3AOh%2BsssxCYc%2FKM9Cv6sIgnYLEQQai8oFzKaOu3Y6O15QewDemigqxBUUf6uxBrja7vDu706xtEQL4ghX2jvIVkD0wX7VbUHWXzFO5GBW%2BUAc9SfP12dVhf7odT88VLBn2l5GKhJ75LRck9O8bWvTEmzOAMsolwl1jsL4vrGhU0Eepa%2BEiBLs4jARsGaNFT8AIEfmBTO01XG7yERUrgV9g9khYEJubsTAY7%2FZik7MalOJ4lf2SAVOEJbVVzqWWLi0Bz2kFGt9M6bd12fF%2FcGJ0RV3%2BxB60pzjfXciZkdtQn84R6PVjI9fKPT4CQodQtL3Qag3sFZXmWCKyD%2BHUAzv2qYYIZrsgk%2BSQHU2xMPAzyd4Ef1lOF75uVQgjnQN%2By77ipiQvijY122ZLVFfFU3WBs07SWJ%2FIi8DvCgXAIWI%2F%2Fu1TBF5dkK2%2Bv2ftmi%2B0EjEAwxaA%2BDNVyuM5qjD8SAjecvcNUAHeQPDvNiiKY%2Bga16%2F2xZjlmlSmBrGuwa3uFecIhZGo%2BapgjjnGjzlKBbA1ZknBG%2BjanpKc84MySoXCX6ZP3YQn5LwayZhsaEOsyNpydwOlDjEkUv8gt6Yb4SFVlN7zHV1SZc7R6nLvl%2Fw%2FqzQaeSjLnunF%2FSqdCSxDDH2sO%2BBjqkARFeU36TR13qRBz2uVG7S6Am7zjqHox9S64nIV3GE7AErB84ppKN5GU5K3r4a3oMPGpzaf81DMqPuzKhqNjWU%2BQhickSqLT4cCUUXdFD4RM1v2FPlCfYIMaIzlOY7%2BcEUiZNSDko4JIJXjBiuy4NxmLt3tWxA9omNSWaufiJ619lBe%2BLCUCXM8TXDZRRWB3oLxjn63e7OXXDME%2FD%2B6QhkYZ5VbX%2F&X-Amz-Signature=f7670279c006d50ce6691f78c1668607698af23faa5d5c59150dcc585bf12a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFVE376%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE4uVDGFk%2BZzWTl4gMbRCml8YlwvdWK44n2ZMZxIgRflAiA6EiyTzVixXXXH73zcgcrx2d9qsuVLbzwLDTQYynY0%2ByqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhveU8WeoBb4h%2FzVUKtwDrvpTFB9ELgIdvwe0YssM4kxxsOvxUWMJUM2Pffw2YkFlB%2F%2FbeuvmtAhr16Dv24BtdhlkgieOqWsiYpFu9KcgwekYKeazWfdHBpw%2B30J8VzTS45PXgKC0R7F7wq0CbUb1c4OZWGDxzYX3%2Fg2Yu02vQVdE2AxK4ayjXiqXasBXVb%2BuUP6zxT945v4a3X9GrqaER%2BfQCwshavyiFnxcCX2qQb7W%2F7mYxHhJiqUHUgH7Hl6YLxd5tSHnUhLoHLsg0JnnTOSYf08%2BD8n%2Bsu3Y5LPB%2BBW3IoD%2Bu4%2Bh1%2BFj5tajQxOJUxUruU5PvY6klhZ9g3mXM44U1UZW6booO7FGCz%2FdkklMWBJ8LMtDVRVUvEsHDitAWK1ZMGNCetrJKwur6y2O4UGpXCJFOoini5KWcIBAeKwzsaoGsa%2BQpQKJtBgzMfe91nRDd3Fkbau2B%2BBte9%2FBIZMSolQjtjBBLR9D8irRGMgiNIwfFsDQRiNATeGFgAOMIjCR9dtDgn6QffoMs4o%2FaCo16XOyg90Uo%2FPgLmHnJcyUAiSYJwh4U6SOM3tjIvsXpYQYoFr9mU0SIm5P3l5T4g1wFOthoH6nWO88kJw59fHWgtZqWgWiIGmrbY95QQ38lT3qHD2S6L8UJN4w6trDvgY6pgFqmCO66IuznRLWva9%2Fme%2Bgvue4repcRJxefX4GRWVDWfkn1bRYB7OdrAhVOd3uPDkg%2FBHfh9oCmEEtxIclMxN8sLKj3ehZH1bLNU0RQxflNsG%2BuPet%2F5uMvwbALZXeLSRgqz7IAhaUJ15oZRK6uOEJj2duu5VXUmcp24qhb98oDDOINfIBl%2BZsjL232POmjrF0a57keUY%2BoBXR8kAnSPUy61P4Qyd1&X-Amz-Signature=26f9fd023269cf649b6ea32a3342741be5178602468645263195a038f2d335ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
