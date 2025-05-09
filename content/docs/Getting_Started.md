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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JUOTNL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCU4GziXnVK9iMVfc9zFKoKajzn2LprgHoLeZ8ysisEAiAztOeDIxIRf8aYQl45M4p5WN%2Bd5q8souXknrMLqdS0RSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQZOamAil7Bg7DbzKtwDpQI6YuxZJ12XcHm12qWZ6X9mzkPfgSEbXlRLn2bMBSzS8sPkWnT2Uk5DG2tyhkb3SlUdca43t3kCqVcaraqyGKANeJBxJC501NRSqluC%2FgmsNo1zpdM2JTrecswpsSjJOZ47TzynKaAPftPhOxmZ9QsDbf88zSIirP8earLI6gCARL2tHuM0FQ%2F7wJzseBfg482l1pENxnZbJQuwKKeN34N3hmIwFvEVkSd%2B9xAR%2FIo5AyAm%2FfTK5AG9YmTesYKzqlSWizg9HEyzenpslCNnGzJ4fnu1bfl6zf6D6LLPdNd9J5kaxm2EmjbP2Y7NRJXjMWwUoeUf0uPDJlEFPgZVhRAZiNHEw0zEUj5gbZ6rUYqiFjB4W9cX43jzJrQModQHHDMN%2FjRKwQo8Blet6II7YUtLsCRtQ9F%2FSZWU8Z%2FOjj5geGYT%2BqZqmTPosJLLiNhclCEln2CfpEcFHAV8EEz7I%2FBtbhDQFPYs9dR8EAhvsPUR9uttHskr1oi0NNQngIrpimsyAhmknw0ERsfuYeD8n5UzpEnOfDX4L00yOXq7Wa6bNqGbf1C9opVBlkP%2BPzFaB6Z5aDn3kbAmnHmGO3HMpDVk7eGL8ruFj0CB%2BzfklMpRY7JgVo5pTpwbl3QwypL3wAY6pgGMP6yQqfUyhmp7R4vkbNELNpepAndWrCV%2BjfZ3a4ahHjZxrOvtkVZk8orvCDv0%2BC%2BlqsCK5BPPkW8Fi%2FgkUMl20Af3qf8uLIkNkOg0yrtnVXTz77iBBF474iLvEEm3C4I9nLfolU7xmxY%2FuDkc3Xy1s9XfvUbb1VVB5kNZoRguFyRe3E%2BG%2B5DS9l4NcTBOsjI25m4vsQNmCfFIGO9VnV%2Bb9E%2BXd9MI&X-Amz-Signature=e8ef2e02486ae504fb9d0a0c6fea2c46e8cf5882a4f0a0187f08c3f3383e871b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JUOTNL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCU4GziXnVK9iMVfc9zFKoKajzn2LprgHoLeZ8ysisEAiAztOeDIxIRf8aYQl45M4p5WN%2Bd5q8souXknrMLqdS0RSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQZOamAil7Bg7DbzKtwDpQI6YuxZJ12XcHm12qWZ6X9mzkPfgSEbXlRLn2bMBSzS8sPkWnT2Uk5DG2tyhkb3SlUdca43t3kCqVcaraqyGKANeJBxJC501NRSqluC%2FgmsNo1zpdM2JTrecswpsSjJOZ47TzynKaAPftPhOxmZ9QsDbf88zSIirP8earLI6gCARL2tHuM0FQ%2F7wJzseBfg482l1pENxnZbJQuwKKeN34N3hmIwFvEVkSd%2B9xAR%2FIo5AyAm%2FfTK5AG9YmTesYKzqlSWizg9HEyzenpslCNnGzJ4fnu1bfl6zf6D6LLPdNd9J5kaxm2EmjbP2Y7NRJXjMWwUoeUf0uPDJlEFPgZVhRAZiNHEw0zEUj5gbZ6rUYqiFjB4W9cX43jzJrQModQHHDMN%2FjRKwQo8Blet6II7YUtLsCRtQ9F%2FSZWU8Z%2FOjj5geGYT%2BqZqmTPosJLLiNhclCEln2CfpEcFHAV8EEz7I%2FBtbhDQFPYs9dR8EAhvsPUR9uttHskr1oi0NNQngIrpimsyAhmknw0ERsfuYeD8n5UzpEnOfDX4L00yOXq7Wa6bNqGbf1C9opVBlkP%2BPzFaB6Z5aDn3kbAmnHmGO3HMpDVk7eGL8ruFj0CB%2BzfklMpRY7JgVo5pTpwbl3QwypL3wAY6pgGMP6yQqfUyhmp7R4vkbNELNpepAndWrCV%2BjfZ3a4ahHjZxrOvtkVZk8orvCDv0%2BC%2BlqsCK5BPPkW8Fi%2FgkUMl20Af3qf8uLIkNkOg0yrtnVXTz77iBBF474iLvEEm3C4I9nLfolU7xmxY%2FuDkc3Xy1s9XfvUbb1VVB5kNZoRguFyRe3E%2BG%2B5DS9l4NcTBOsjI25m4vsQNmCfFIGO9VnV%2Bb9E%2BXd9MI&X-Amz-Signature=3b00a2e336a08a5eff35e570720b06059126d324cf0fc234a87cef1337f9a426&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JUOTNL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCU4GziXnVK9iMVfc9zFKoKajzn2LprgHoLeZ8ysisEAiAztOeDIxIRf8aYQl45M4p5WN%2Bd5q8souXknrMLqdS0RSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQZOamAil7Bg7DbzKtwDpQI6YuxZJ12XcHm12qWZ6X9mzkPfgSEbXlRLn2bMBSzS8sPkWnT2Uk5DG2tyhkb3SlUdca43t3kCqVcaraqyGKANeJBxJC501NRSqluC%2FgmsNo1zpdM2JTrecswpsSjJOZ47TzynKaAPftPhOxmZ9QsDbf88zSIirP8earLI6gCARL2tHuM0FQ%2F7wJzseBfg482l1pENxnZbJQuwKKeN34N3hmIwFvEVkSd%2B9xAR%2FIo5AyAm%2FfTK5AG9YmTesYKzqlSWizg9HEyzenpslCNnGzJ4fnu1bfl6zf6D6LLPdNd9J5kaxm2EmjbP2Y7NRJXjMWwUoeUf0uPDJlEFPgZVhRAZiNHEw0zEUj5gbZ6rUYqiFjB4W9cX43jzJrQModQHHDMN%2FjRKwQo8Blet6II7YUtLsCRtQ9F%2FSZWU8Z%2FOjj5geGYT%2BqZqmTPosJLLiNhclCEln2CfpEcFHAV8EEz7I%2FBtbhDQFPYs9dR8EAhvsPUR9uttHskr1oi0NNQngIrpimsyAhmknw0ERsfuYeD8n5UzpEnOfDX4L00yOXq7Wa6bNqGbf1C9opVBlkP%2BPzFaB6Z5aDn3kbAmnHmGO3HMpDVk7eGL8ruFj0CB%2BzfklMpRY7JgVo5pTpwbl3QwypL3wAY6pgGMP6yQqfUyhmp7R4vkbNELNpepAndWrCV%2BjfZ3a4ahHjZxrOvtkVZk8orvCDv0%2BC%2BlqsCK5BPPkW8Fi%2FgkUMl20Af3qf8uLIkNkOg0yrtnVXTz77iBBF474iLvEEm3C4I9nLfolU7xmxY%2FuDkc3Xy1s9XfvUbb1VVB5kNZoRguFyRe3E%2BG%2B5DS9l4NcTBOsjI25m4vsQNmCfFIGO9VnV%2Bb9E%2BXd9MI&X-Amz-Signature=34763202d63f23630e9282aa59ac03073f1b03f80284e7a97293051cebd21c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5N4SBO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BjYKSKz68%2FTP0oH6sZMPQtePimqrlvZxVCR04iYrKQgIgca0xLoZwiZKi6VfjIn3cFlxMw2mS6yjSQmB44IeGrNYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCSzKBf2vtmrx6QRyrcA0vce5gkmVGY6A47R45U7jivhmxd%2B2Nlvrt9uUt0T6rOuJMlxNQTdlPNGygmbUgXLoVvTCdVhYDP5%2BWELCCXek5jQvdZTuwfm9L19Jg931FA6vfmck2kxcUHWK5xrQsG3jLE3x1qq56HA6LlQmEtJqNqKGgVKfSqi6ET3UTfhubqYrXeXZvNtB8wmx72LI5v%2Bm%2FPrR72WCriD52mmpSKhE8jSHAGNXI7gDoRa86NwP42%2FMfoowtSJhi%2FGj1m42v39wkJrfc1Dyo3DGbs9CoFbWSS6ArsXUfJl%2BttoEWcZeKtRBr6MY5ofdIb%2FlYfhhdbjxBQKjG1ln2vC3Dn204GgFn6%2FfJrPZKFp8FJtZaCza%2BTfw%2BArsF8cpumF8Nt9wgn2hBmWn3K0K%2BR%2FBKJ2SnpLDUwZHXft5XsmOIt3wEppBKPkZTrshv2h2XaCtggarYTAbf7ekNDOjQFlidcRdQBLHBG16Xsgzoel9ZeU8rwhmWN5i%2FoTrIv85B0anGhawRcLhFBiNHa3hE%2FMjTMQwS5vdTn1AMfjT2a2%2BU1Wk%2FmXTYu7utMPjO7Ow3mTV9uorbRY8M5FlYItxUpzHeTdjnqJSZWdNRWm1oqopVU4w8446fZWzxBmGyV8eRhRlgwMNyS98AGOqUBX9V099pePgIIryOjbl8pFmnWa5UDZLk%2BFN8Ps7XWqw1wMb0z1KAj7a9kielW8T3GYvC3BBmVA4nu66KymOeso8GQ2VpjmJKgZgu5dyf4E%2F%2BEFMNqUTl9poRqDahCxxkYlzNhb%2FtTyLrGL9mrXujGeZ7A5Hvd0BezYIRJzh1PFUu5%2FqsFjVa18jOcxywJFRe04PdHC%2BOpPY%2FUSmOARyYaAeW8HnW4&X-Amz-Signature=abdb118ef212314e4de35b7ffc23e38b74921a60a881de70d0b4cd887a01abf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIOFOWL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTqLHRQyByOx4DT%2FykiBJZ8tYZNBd365BXkgk2UNbwtQIhAI1cZ8ZNLGc%2BLAf8jL9TbArmUP%2FoyUNf%2F5uWIL2%2FxyysKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1zMlXSqtvAhlJ4oq3AOM6oYCJfJs%2F6IsnK7zSmr9dRnLOKVl%2FFhHVvnUN7SpoYrlB36sQkby63Rgz84xi8Tcsj0cPRad%2B4mtJ6k6%2B5z4DKl3mXXGfgpIRqazT7QfCg2qBVGwhoK%2BN47Koc3vWGTeIRg3ZMa0EMxIxsgv%2BCkC6XEzSS06bcjXvCDbDPxSU4RiXt992gPV6ro3039pVuzhRKaoyfieB3KXGiTjfL%2BfE%2BYNbwMGl%2FfQFt%2BPI01PpB8dCITD7scOal6txVMLYv%2BxMzqwH9nUsdM5iWKAq56OKLOCCG%2FfCNQIAnTcBiXT%2BmKg3TCSxO3gIkS05XX14qDTcOvZ5u2zJ%2BNpYPijiy15%2BKUSpgVgwz0RfmnJo7u2wcAYqqBus77icNZe%2FvkhCT%2BGJwklQjn86y9%2FxdlEixhpoQtHTvrB%2FM3TnMJJfL5nGwrmvsqDw4RZdfmjxpRAz3R26%2BhAxA45Gy4nBXlRFS7ujG8dWWdz2epkNh9TtTbLl32dl9Wf8pRYAHpzdHlE17D9TyitDPmbvJWzuN7uv5fim%2F0qdqJ6MSib8sTQAOQhnxUmIUgLOdygGNNVVr3QyfWjPz5PL1YRWJ8ReDa79vQE9F6vAByD%2F2tAXmfAAd9lN3HNAls4HfYg18nfbDDekvfABjqkAQX67EKJLJ8yzHvQBhAiZwr7D%2BlHL6cPYM3kGMkE972BTl1Jx%2BbhMoVqERouqPUCDuwILdpiIgirh2rlDvrvRoz%2Fd%2BDQAA8N6%2F5WjguygbIr48yCQA6Bz%2BnAr2ELDJgIhzW8yDsdAf0uAYL4fflaVrblXSnNoIEj%2FM6fOU7VB9bIL%2BZ7aY7si4tNIcNKgaC%2BOFdJkGmcPqV9eiJM7r%2BtI8mfGToj&X-Amz-Signature=f2bf02f4f0c86251429d613164514033dbee9d190d5c37b0e83bde9979057c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JUOTNL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCU4GziXnVK9iMVfc9zFKoKajzn2LprgHoLeZ8ysisEAiAztOeDIxIRf8aYQl45M4p5WN%2Bd5q8souXknrMLqdS0RSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQZOamAil7Bg7DbzKtwDpQI6YuxZJ12XcHm12qWZ6X9mzkPfgSEbXlRLn2bMBSzS8sPkWnT2Uk5DG2tyhkb3SlUdca43t3kCqVcaraqyGKANeJBxJC501NRSqluC%2FgmsNo1zpdM2JTrecswpsSjJOZ47TzynKaAPftPhOxmZ9QsDbf88zSIirP8earLI6gCARL2tHuM0FQ%2F7wJzseBfg482l1pENxnZbJQuwKKeN34N3hmIwFvEVkSd%2B9xAR%2FIo5AyAm%2FfTK5AG9YmTesYKzqlSWizg9HEyzenpslCNnGzJ4fnu1bfl6zf6D6LLPdNd9J5kaxm2EmjbP2Y7NRJXjMWwUoeUf0uPDJlEFPgZVhRAZiNHEw0zEUj5gbZ6rUYqiFjB4W9cX43jzJrQModQHHDMN%2FjRKwQo8Blet6II7YUtLsCRtQ9F%2FSZWU8Z%2FOjj5geGYT%2BqZqmTPosJLLiNhclCEln2CfpEcFHAV8EEz7I%2FBtbhDQFPYs9dR8EAhvsPUR9uttHskr1oi0NNQngIrpimsyAhmknw0ERsfuYeD8n5UzpEnOfDX4L00yOXq7Wa6bNqGbf1C9opVBlkP%2BPzFaB6Z5aDn3kbAmnHmGO3HMpDVk7eGL8ruFj0CB%2BzfklMpRY7JgVo5pTpwbl3QwypL3wAY6pgGMP6yQqfUyhmp7R4vkbNELNpepAndWrCV%2BjfZ3a4ahHjZxrOvtkVZk8orvCDv0%2BC%2BlqsCK5BPPkW8Fi%2FgkUMl20Af3qf8uLIkNkOg0yrtnVXTz77iBBF474iLvEEm3C4I9nLfolU7xmxY%2FuDkc3Xy1s9XfvUbb1VVB5kNZoRguFyRe3E%2BG%2B5DS9l4NcTBOsjI25m4vsQNmCfFIGO9VnV%2Bb9E%2BXd9MI&X-Amz-Signature=d74266cf01d1f7906d847248b1af650eb74caf6b0703b3a634cb65556e8194eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
