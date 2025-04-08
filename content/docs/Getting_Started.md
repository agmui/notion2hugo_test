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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=e39b6886c84bd30f15ddc35567505dcab99575241c3fc8cbf0bb946426388a07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=0100b6e8036dac19799a6d91f9f06da4cfe6c0f3f5005b7f9d00304f3e704b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSMWUIU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6WhBePstUQ4%2FlglAmh8pDqbZ8wRDEqmLrDLIogdGfdAiAE9QChIo1xQsCr5dF%2Fyi7fdi1Wn4zgIqYNFMXPWmLz9Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMBFwzCLzTsLNhlNvvKtwDxVgmXKp6RoWhx%2B3lh%2FzYNG2G966RyYF5IMprsvwpK277lCaT4VesQfModJ%2B7QAR0ToTslcljUXhSM59dhZXDX05RsecMht9fudxz73ll%2FdyuA6FAw9HgcAicxloAoYIWHCDIg1qCImtcU1h3qtnrit3VmQT0zndAMZTSdWa%2Bwc3lgNBRbOO3G8%2BYVmxg1euXQgZ52BL%2B6MQ%2FU%2Fuc6VfLioM14wTG6UaWIoctVW%2FRZm5L9g6P6xuyV8MUGYq7GnzLlbysu8e1OJOWNPaH4Zjp%2Bzmk8gpYRMuYz5FdkhaG5HMWiYprqLAkHvkrhEU%2BFw4KEqoBp5RRKCxhyWzQglqMWuJpGRTwDjDxGmgyy0xK8pRa8XFdAZ3erNb%2BhnK0EFCoZIY0Oytyq9yex%2FQ2sGMusSNhBYOx3c%2BvrROa4c53z%2F4ny3O%2BHpoMthaM3o6j8%2Fy6rOGMEa5fxXKuRFYXnmtyBBFthwciLJ%2BRZA7GtmFeO2wBmdI4Oa1tOT%2BMiX2MI18QwhsuI%2FdY9wzzZBPftAajtxw9f1ugt2XU12%2BCNGXqmEOuXbnA6PqyE%2FvYrQBiNllW10dpIUMq5ngJQr3c%2FFZHHkQKi90fN5MrTCX%2BtHgeTaiqLTQgQVFMb0k6ZiAwxLnSvwY6pgEJoWED4AHBqJCFCYVHLK8oU%2BRGue7JBo1dErD8fRYPrZ4z1D0G9EDlr6Nb9tDT2DN%2FAWREuIvOTYLOJ9eNLoWUunjCqr2KXaQfUqCkeONZG91Wlo29VsR3dgul8GsiJsrK%2BIy7s%2Fk38pMy20LJ5SVOpN8tE3YYxEMY7ZkrZy5972611hJhU%2Bxesm%2F4KMM%2Bt6u38vY50I8oTeuw3Ebj2BzyVh3%2FnXMT&X-Amz-Signature=2513fbf8ed4f8171258e2c54ca264d660a597ae3e9c5c99ec4952e00c50cde79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMENMUK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2BowLlVfAKZ1vkVZ0tql7zSuBe%2FsrnzAQ6PbO5owbBwIhAJDNTFsi1MZ6US2j6gO6Gz8qX%2FQDHkleJU9d3%2BoXD0vhKv8DCG0QABoMNjM3NDIzMTgzODA1IgxbaWsdYsydbs4bZrMq3AOklUA7VsyHAGSbdl8WTiqqqYNIIw1VIl36G6ZfxCv9Mz%2BOnUYtzMgKjh0AloJJRRpRTzxtzzUm1NLlBz5A3XjlQW2Dv%2Bo1ZoBIazjOtWeZ2VrSV44f3kg2cAS9s9Vv0SqTebSqrWtZo6av4KEqh2m4cF2U5zY704zVKskIPas5w0TuFEGalr7kaUj%2BrfQ8CaBDcZdxkE5iJPS8EabIPz8%2BT6Npn5RhVAELMbUYbzwJGYPawUHZmFES%2FfbPurWepPOT7oay4n9Sni4liPsA03Eb4RmOt%2B6YOwx2o0lyaoz6sgR%2F6fDoeL84GMJ1Ci1JDi0YZoPWbNk2CFqTrjP6zy%2FOpNng1dXJSUKkCcf1ikcF2VEgb9WG3jQr%2BLf9DA9LuyFsaRjKlYs1ZmgTPo1%2FactKv1HQB%2FHCf8pgAnapiMVpN6GborgnjHwpTkvlKvxBefNqV3MQYVg%2Fz6xqqWC52H38giC6vdve7NYdehcqbH10a%2Fdvb0gPba695U0OKm41ydGAZtkK0AxleTX6WF7xMGiAsmU74w5K%2FkMWOd8PQYsAuwfbMuXsSE%2BrfvjBWt4Dn4cEYsw%2BYktZPpjsKi6wlxpp4ezovHDe7ybyEbolp9Hu2oWNfl179XqhC4GcUDDyuNK%2FBjqkAZlxpjgGFx83kaQ%2BvB%2BmtA008LzlRwnupWC56LY%2BfGvttMhGGnGUVnaDCD%2F4NFua7LPNTe3ttzALOfgCSKOQ4UedsLPZI0lejoyivzEU47kkYs%2BXIXxMLOQHlSG6MlBATtKNGkJzcCsgcmPacbx3yIbDzn9SM2VaXAV0mt5FebiGplWkmEVbbo0UEu1rrh3xbOR8KHdeR2P03vN4gx1f02YgLJOD&X-Amz-Signature=5c9cb48609cac49b5594e1c8647df33f382849724c796ae250bff19f0e142cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=e7a7af553ccca950a5a800dc620d4e2ad921c6c5efb104542520ab80c7ad29f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
