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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNX6F4RG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3FWziqX0kEcXNDYycgSSFK5U%2Ba6ytQQx1Lha3Mt8kmAiBmzixngzPycT4KXp%2FK%2FIBJz4qm28pRJJAdKSPCuO3fnyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWNOD2XXmaYbIUZ%2BYKtwDFDsjwpk%2Fx7exuA%2BuNfRiAut9AkAyvT85G%2BTquW0%2F7v9ImAJPdQRUUApOO%2BKAgvYxbQZDa2p07xPw17ZMoCH%2F2VkwZfHcKcQanys5XwvKc133vBGwmJZXv3PKC7WmowOYCsZXLGGnlFxi%2F4bh1ntZL1YmWfrktbxDm0Ch4l0Ibg5OVPOU4u0%2FcB0AzeuOMqfAq%2F%2F4o4RWYiZMppEJ1igDcFY3RY%2F0l%2F078gKdbfIZRXw%2BfbQaACAUxP%2Fkjc6Ave85PgG8WmGlEbmXphKkBSuXt0%2BunNpr%2BxLcHw%2FgnsgH%2FXfSTNjyDOmGheSWzwhUuekQx%2FFQ24yRnRHx2Y83INVS1CByDIvlHYtRN2Z1Jt9atiSzQaX5jleCukw%2FofmMzAF5oFGKpKjDQExt566you0HoGivI7UYvY2gcb4t8awlrcPIXSpmjO6hbew%2Bj%2FWBPagOQU0kK%2F3wZsZT7fhZmDYjo0Qqla4IcpTxdjgbq0571Wfjz103h6xbrauDPomKNJNQOMmAnymZQzQaQUQclRbKeK255G0T3vwGI0tJdNxYhqtiPKev%2F13vpYhSD8yDWL5EW0nOUndUdEqejllp6kcUOzTlQ5NQ1b6fLD129m0XqYAg9BVT2ZzEJ5NOirAwusiCwAY6pgGmgXiHwqaxCgI81htGDbL03Ol7iJHelJhknPSnPEnhLS0XSH%2F3XyJCQ8CbuNtHLKlL0NbJgf7cHF6QbYIAhZyGEjZf08yszI0Wp9nJn4%2B%2BzJ068CSfMYjyXgGHcJTpaeHFEwIAiiNnRTb0Bi8Pn2sMsZQhkEkHyh1MCHVJd%2BVCpB635OJqyENAfvb3LYOWZJQuPUPDsHnu2k%2Fw6fmvJtmZzzMEImtW&X-Amz-Signature=010b06862c4faa0e68e8a5d2d15841a409023bd8ce0bc523209f9c8294108597&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNX6F4RG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3FWziqX0kEcXNDYycgSSFK5U%2Ba6ytQQx1Lha3Mt8kmAiBmzixngzPycT4KXp%2FK%2FIBJz4qm28pRJJAdKSPCuO3fnyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWNOD2XXmaYbIUZ%2BYKtwDFDsjwpk%2Fx7exuA%2BuNfRiAut9AkAyvT85G%2BTquW0%2F7v9ImAJPdQRUUApOO%2BKAgvYxbQZDa2p07xPw17ZMoCH%2F2VkwZfHcKcQanys5XwvKc133vBGwmJZXv3PKC7WmowOYCsZXLGGnlFxi%2F4bh1ntZL1YmWfrktbxDm0Ch4l0Ibg5OVPOU4u0%2FcB0AzeuOMqfAq%2F%2F4o4RWYiZMppEJ1igDcFY3RY%2F0l%2F078gKdbfIZRXw%2BfbQaACAUxP%2Fkjc6Ave85PgG8WmGlEbmXphKkBSuXt0%2BunNpr%2BxLcHw%2FgnsgH%2FXfSTNjyDOmGheSWzwhUuekQx%2FFQ24yRnRHx2Y83INVS1CByDIvlHYtRN2Z1Jt9atiSzQaX5jleCukw%2FofmMzAF5oFGKpKjDQExt566you0HoGivI7UYvY2gcb4t8awlrcPIXSpmjO6hbew%2Bj%2FWBPagOQU0kK%2F3wZsZT7fhZmDYjo0Qqla4IcpTxdjgbq0571Wfjz103h6xbrauDPomKNJNQOMmAnymZQzQaQUQclRbKeK255G0T3vwGI0tJdNxYhqtiPKev%2F13vpYhSD8yDWL5EW0nOUndUdEqejllp6kcUOzTlQ5NQ1b6fLD129m0XqYAg9BVT2ZzEJ5NOirAwusiCwAY6pgGmgXiHwqaxCgI81htGDbL03Ol7iJHelJhknPSnPEnhLS0XSH%2F3XyJCQ8CbuNtHLKlL0NbJgf7cHF6QbYIAhZyGEjZf08yszI0Wp9nJn4%2B%2BzJ068CSfMYjyXgGHcJTpaeHFEwIAiiNnRTb0Bi8Pn2sMsZQhkEkHyh1MCHVJd%2BVCpB635OJqyENAfvb3LYOWZJQuPUPDsHnu2k%2Fw6fmvJtmZzzMEImtW&X-Amz-Signature=02e4f843502f6e04d54e7c484de985849569da610ae8e8d9d74208519f54d283&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPH6MRT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B0vy1TF9Ws5Br9RxnRmefcTuC065tbvOrPny13RsazAiEAwjnLWMeWSYfwp4AonarWl8aytyDJJzdY1OT2EP0zlUMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCYZvTWJ%2ByhhQWzZxircA4haeaR8EKu%2BdV1dsrSLsCI1Pnujg8pIRcs6rlt%2FaTP9Jh9rGJJs00lW9Emg6Vm3o0ZRFYShdvNTWVCemI9uJceDNHwVyxtHBSbOSAWlL%2BAZBqg9%2Bn%2FVyVZ944BHFK0m3yCDUKJQWpBSKicKPniU%2BJzjMJS61UUMGL4Ij%2BO%2Bw%2Bu87P7dyzoBei9rojxpc%2BZmC7nvTSpD%2F7Y1TiPIMnt%2F2MktqKoKC2iDOT5hVdh8jlteWK%2FIBeuSFNqhrs9DR3cHDOoJi%2BSN%2BRaURKqzSEjW3L9XRzPIUWlqh5QLQN%2B6zTFMiXpx7Z7e163lRu8AhPfTWS0BVmrHy1KJWAcxr3Y%2FDTxtsft%2FOl2P%2FDDTwbrzuVQmPHah5%2BMPntrFc1sVU%2BFH4kFyPcxiRthihxK934Mvcdy7sOoIOh0ewGt44MTK89kCNpAPeCL0yNlfTrvFE4GxiAahO9L5%2BbGDr7PU3uCUvRnskKda387fD%2F2c7qx%2B%2FTxpcUOVGK1lS%2F2Cbep85eMjgRRpt1O4vWjsEUa1wk7A8q64LN3K1QhnHum0siVkGDV0BXwlK9ja1sXbsp7b9NcYQHrX7MV8qP2K05UwAUy5KC7NGhz6t1nL7CpQERklelqIa3EnKU%2FigV9aissTMLXIgsAGOqUB3LZfyaE6D9Snjr2%2F2bWioV6ntvaMJeV7VRsvNOweS9Nw%2BOzg5Wbnhj%2FUqaqEn0iN75whapjxubYX2Su%2BD1ZcsDkLwQ76YDgTIHG%2FOWqTKUs9e2fg4Ys5oB2ZwePy1qH1g0PUJFOv8BxaZL33Rlpr7N9ZBWNVp2pEG31JbAb5ueGXdbzwyLAM%2FtqW3LLEDVVGqBi3H12VdaZ4WEGBfxpV%2FkS4PfPj&X-Amz-Signature=38155fd89af62558dc9e436ec0a6271fe1d01bfc9cd3498e44b006702308008b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKIEWFE3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4B5pLsxDKMyuMdDqu0vlSIXyimz2M4GQDJ1sEa7ZHKgIgctcWQn3ForFLKu0wAZS5KG4%2Fv4wq%2BnunhQcSsgwnQjkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJrlt0xCKW52b%2B5SKSrcAxw1CAkffAXzN5lRdxdQSnWAOnqKMuc20qOtdhthbcqujtR3R3%2BhbI9RzMY40PwlX4%2FCGxCQmaZVg30SYPc%2Fpq5f6KdEMfMWt9eb%2FOwLSah6WHZJfvyzq3Kz2raO1kLQBGQrFaE6T9k%2BUn%2BhIJShkpD6%2FmvfxYIUz3kD9N8OnzU4VH7mMdz23uTumiuY%2BjkTjmKfqyrBQMe1gKG3oj%2B%2F%2B4ow8vDUV20HMjMn81UYhueHH7Bl0MugpIj2EAuIgee8aT9fLd1xpHpfzObRUbbQuZGZhk77cOUzeiuU9XKlwGwHQpHvsb9K1Z33cNZlUtp0jjaSH6Vwc5xboFpyp0FSfdv4YZ9oSQGOJFfhJB0O3s%2F99Vi5bStP0SRIwnZe2qS09%2BAb%2FW7xTvpUagOJBuyeHhIxv9sZkGbPpyQmt8lhzFFiGcPHMiU4if34ZnS%2FgTPgiWYFY193nhtpCVLw1CSo6wf1E9O4bOuOkR7fkr7LEfiljQuDh4p9amVIiDrQoD3tgb%2FRKINx%2BP%2FOHQMNoz6v2i3aiXaJFDB1aiC0I%2Fx83CyqEtaaHEvd3cSn0d4FoklmUOY5pQUJfgHX3oFhqmro%2BxbmIaxKZZAmdGxd7Ix0sLHYGf4jETnH979pWgy%2BMLDJgsAGOqUB72q%2BY9DD%2FnlyNUCbz9RLAbv7DyYD3rQE%2BYiBrjntEvaL8Hz7hbgr417IHgsDmLqGv7WTt7Q0v5c%2FsBqceDtcFPERMf7bUefBn7SJS4tx%2FhIE8CmVJlYcNAJfKX2d8uckUyhbSqYdQ2ldNxuoi21wa6fdbha2IJ%2FW3PcuCtAnhEAkOPf6Gw6yC7l25Yu8E%2BC7Rzl4mP8UmocqZIXj%2F8yg2cRaM8%2FS&X-Amz-Signature=02cf0377ad8fad574b43b445470b8b783a09c33fcc85ff3eb122ae5e6a4100bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNX6F4RG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3FWziqX0kEcXNDYycgSSFK5U%2Ba6ytQQx1Lha3Mt8kmAiBmzixngzPycT4KXp%2FK%2FIBJz4qm28pRJJAdKSPCuO3fnyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMWNOD2XXmaYbIUZ%2BYKtwDFDsjwpk%2Fx7exuA%2BuNfRiAut9AkAyvT85G%2BTquW0%2F7v9ImAJPdQRUUApOO%2BKAgvYxbQZDa2p07xPw17ZMoCH%2F2VkwZfHcKcQanys5XwvKc133vBGwmJZXv3PKC7WmowOYCsZXLGGnlFxi%2F4bh1ntZL1YmWfrktbxDm0Ch4l0Ibg5OVPOU4u0%2FcB0AzeuOMqfAq%2F%2F4o4RWYiZMppEJ1igDcFY3RY%2F0l%2F078gKdbfIZRXw%2BfbQaACAUxP%2Fkjc6Ave85PgG8WmGlEbmXphKkBSuXt0%2BunNpr%2BxLcHw%2FgnsgH%2FXfSTNjyDOmGheSWzwhUuekQx%2FFQ24yRnRHx2Y83INVS1CByDIvlHYtRN2Z1Jt9atiSzQaX5jleCukw%2FofmMzAF5oFGKpKjDQExt566you0HoGivI7UYvY2gcb4t8awlrcPIXSpmjO6hbew%2Bj%2FWBPagOQU0kK%2F3wZsZT7fhZmDYjo0Qqla4IcpTxdjgbq0571Wfjz103h6xbrauDPomKNJNQOMmAnymZQzQaQUQclRbKeK255G0T3vwGI0tJdNxYhqtiPKev%2F13vpYhSD8yDWL5EW0nOUndUdEqejllp6kcUOzTlQ5NQ1b6fLD129m0XqYAg9BVT2ZzEJ5NOirAwusiCwAY6pgGmgXiHwqaxCgI81htGDbL03Ol7iJHelJhknPSnPEnhLS0XSH%2F3XyJCQ8CbuNtHLKlL0NbJgf7cHF6QbYIAhZyGEjZf08yszI0Wp9nJn4%2B%2BzJ068CSfMYjyXgGHcJTpaeHFEwIAiiNnRTb0Bi8Pn2sMsZQhkEkHyh1MCHVJd%2BVCpB635OJqyENAfvb3LYOWZJQuPUPDsHnu2k%2Fw6fmvJtmZzzMEImtW&X-Amz-Signature=ff50a998dd96be4658363095cd8c68d8471eaf87dc078f5a3b806afe8d66570f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
