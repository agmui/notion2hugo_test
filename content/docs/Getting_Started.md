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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZTPTC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEF6B3dSfTHwrDcR0UzVE7rTsoBqYJH0arMWI9g2hZYcAiEAt8B53rt4sA2qRGemdLcIrqtEVAaZPdlmCv7pzDjPURYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4l7OfDkH1JdqnxdCrcAwE1FobzOyX8Dz0rCN3A1EZMxOWhcKvNDAOoY3tjG5abTfAvQQb1nQBwBmdMwb8Mp7f1Fw7K2S%2BPDbxPU%2FL%2B5exHEs6Ya1mR1XRK1LTCZGiVA0nft9RDQuhE8lNQnlYrafzfwzj3rXFyhFys0cKdzqGAwc3fHPc6N6lrsWjOuqa0%2FEkU6JGpXyRWUlSqcwqy3tRKR%2FRSkiaJ9sYh5EVOzkkoEJ24eb4QZq3rhVj1r97Od1UPvap53rFre426jsWcg605rDUUXDxVvqfbmHaqPVnPWPzi4tkdW7kv16FDUic7%2Bk2Xh3z9jJQYvBa1bPB0GpS5j7Tp%2Bp4jWeVxNALi7JEKTaTbQfG5oLHXkZ0nSO4jsUIgdtRg5xVMtip4YTkL56m50GsWWWw8V5t2Y%2FkNNhJ%2B%2B1sml8Okhg%2FEfQz7al2F4bG4tCkmnYkgGVx7pDwCPt9OKHoxc46nbKpA3UwRnCPykSLmrHQPUX5RvP%2BuSfUlw01n%2FfCjOpcWC0xkPZj9ppF3hVHCkiV0ZLrcLR9ZUH1VESjdeMulHImIuY0t4Dv%2ByM165Z2LNf%2FBsDPMCchtHs%2F45beGcL6%2B%2F8sxFBm1rBZau%2BodiuUpyK3MYQn35NjEjrzX6NcEtm8ez%2BTIMNOltr8GOqUBTTq2eEjbgilZH93mRzoAvjow2hPGTtMgZLKzanAM24ZICUc%2Bo23dUK%2FjDQ8%2Bi5rYF2QUm1FA6YlhGWyFYvOuX%2BUqpaIJOoxWrBaXVNHi3oS%2BXwRoOvELuNKWNuyfgy0YVfEYSSrz7qr1r1VPQg%2FzW20u6dyNvreYGr7e7N9h4rZltyWSCTug2kMnp7oA%2BFQa52DHicKUvJfMPe9Hodnfp05mqGB6&X-Amz-Signature=23df0df05095a24188b2e1d6a1d0550b44ade3e2963b22d98f19bde1a41f68a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZTPTC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEF6B3dSfTHwrDcR0UzVE7rTsoBqYJH0arMWI9g2hZYcAiEAt8B53rt4sA2qRGemdLcIrqtEVAaZPdlmCv7pzDjPURYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4l7OfDkH1JdqnxdCrcAwE1FobzOyX8Dz0rCN3A1EZMxOWhcKvNDAOoY3tjG5abTfAvQQb1nQBwBmdMwb8Mp7f1Fw7K2S%2BPDbxPU%2FL%2B5exHEs6Ya1mR1XRK1LTCZGiVA0nft9RDQuhE8lNQnlYrafzfwzj3rXFyhFys0cKdzqGAwc3fHPc6N6lrsWjOuqa0%2FEkU6JGpXyRWUlSqcwqy3tRKR%2FRSkiaJ9sYh5EVOzkkoEJ24eb4QZq3rhVj1r97Od1UPvap53rFre426jsWcg605rDUUXDxVvqfbmHaqPVnPWPzi4tkdW7kv16FDUic7%2Bk2Xh3z9jJQYvBa1bPB0GpS5j7Tp%2Bp4jWeVxNALi7JEKTaTbQfG5oLHXkZ0nSO4jsUIgdtRg5xVMtip4YTkL56m50GsWWWw8V5t2Y%2FkNNhJ%2B%2B1sml8Okhg%2FEfQz7al2F4bG4tCkmnYkgGVx7pDwCPt9OKHoxc46nbKpA3UwRnCPykSLmrHQPUX5RvP%2BuSfUlw01n%2FfCjOpcWC0xkPZj9ppF3hVHCkiV0ZLrcLR9ZUH1VESjdeMulHImIuY0t4Dv%2ByM165Z2LNf%2FBsDPMCchtHs%2F45beGcL6%2B%2F8sxFBm1rBZau%2BodiuUpyK3MYQn35NjEjrzX6NcEtm8ez%2BTIMNOltr8GOqUBTTq2eEjbgilZH93mRzoAvjow2hPGTtMgZLKzanAM24ZICUc%2Bo23dUK%2FjDQ8%2Bi5rYF2QUm1FA6YlhGWyFYvOuX%2BUqpaIJOoxWrBaXVNHi3oS%2BXwRoOvELuNKWNuyfgy0YVfEYSSrz7qr1r1VPQg%2FzW20u6dyNvreYGr7e7N9h4rZltyWSCTug2kMnp7oA%2BFQa52DHicKUvJfMPe9Hodnfp05mqGB6&X-Amz-Signature=7ddf1fd25d9f5bf824622ba63c706f4d93bbbb5d45de7162fa0d9d3ce4b5ce4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KTIBNG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDUK26Szy6PTkDN4jZcrnPz5NFLblRvQerBR7FtYW%2F5nAiEAsYj9NQyKwGsimqa6QuD3pH8ihXFkrvTA3LcVUvTWV48qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO3D4nG4p1ctoM3dircA3GbAc3V7JkYqA%2FzUVAFK46%2FdPIvk3LamFZfD7L7zh7DxXvWb9RxZImPUguq1ZKpA9iz6%2Fij0d0hJGxKfzQzjeFyb4K8003Xc3xMVjxFsWYiOf%2FC%2BwgfEfvpR0YVwA1frvEeytkAtatfkNuJDCCF8grlcX0ykiaSY%2BbIpO34SwnSGsQ52TXjcJjqsFk5upHJh6ZfbUHhZGnwaeUO3QJhPKvVU4wr1utbtLRvp2i6CwDGtD8fGoiKbY8%2FN8CtfiHU1iDaxZo9eGZMJ0hG1OBN47O93W6Cs9SHb8HadqbJWVry26TqeyT1BX2IPAwhbmwobJMtgtkXc1HzU%2BsrK%2BwZp5q2DU4fUYLxMWH0yGcuFoyzWAPMfRs4QxFlJbWHlIB6eX5CnwtATkUOg4xkGh5eYwg5YAGznfT3U2ing%2BXs%2FyOWlImPbZvVrZC5Bjw8x7JGAI3gEyglct1sv9oqBPcygMRGqxXewNv9ZAP6qfaoE5qEL%2FS6VcigxDEl2u%2FEt%2BMp2J8G3cl0CEmT%2FNXKBcNFZD4i%2BvkAce6s2pBMpdV0TShjlryF5lMLRzWx6Hnlm2XgiZKHNt9vMySfYtEsQSqnU7noorLlEbuV7dC%2FPsbwtlZRlZQL39jr96SuiAYjMM2ktr8GOqUB3TVA14OiljrN4D2bhCsnmYbTAFX%2BYdEzzDOLpLc1Qk6yoZkyQcfPl%2FdSQZPOh32Ilwru2ERU0yDaEihtBgaMSAbZFPDjwLV2ynvJ0NNB1qmj505VFg2ZntGrUYn%2B%2F%2Fpg6nO3SVQp9muhDcGEr2Xbm8vw850ZiJj8Saj988Qo5oOE3eCPaoZzsiP0kOUQr%2BSCKm5VAvxccjooysXvurDFWIjnP%2B67&X-Amz-Signature=aa23200cb2d2e54864ffa6cb0da71ed722f89fe887500b9b45251ce9706bdaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIMWCE2I%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGAHPgDfLX6vV9J7Mt2vQVAlaNukHCkmUgRzXlOogcLPAiAu2ji6MB%2F8t1YmgPx3cR4XwudviIz1xHZpTfXcb6Xa0yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2enT4QqPHICgggSFKtwDJYyeU2pdJ9thW%2Bswk3iYH%2BgSWewfzw0gqcqcaDUeFqZOlwAJzWz6wiUE169FS3zJ5oJFy1AAdPdBjlLuAG8aZCZQ4b3I0ffjonlcAF9CYZYjuGd%2B9se29FPc299L15v7QmCD1a1CYMqlx3HmL%2FhM96DELbwmhC5eIfRdTuyujVtxWIgIPTjynvi49ISpVhBeR9qZySlfsHem8sxAopvGoOIc8LeJfOvgzASLouENT3TzNYzEBHw8gY5qhBCHOiuTi%2BQkoIhY3YuxLz3JOubrgqhJWpV6Zdv1oANU%2Fs0iAuocY6fHURHI9YUHIbTqDIz2k2o0%2F0IgyuB7uSoaZmzOlCMLcE6E51iIFkcIdxkVy8ASG8d1WWIOtVs6o8%2BztPzAcSOcW1MVeGAvlHAaEosUloUkapN2pkl%2BzOITgCGeeXJFRNNFWQD0aQ5ZE2UbdXrLeh7g7PHKslQZ7ag4n0myOiOt3TCiLZLRYLmHUTBalJYCNelcjxFNi2PfUpDX8UdKUwA9b7R%2FAEsqvzLWvvsMsP1iXJY1nIxDbTofZ636RCR%2F%2BfyapYZ25J5KaSaSIotgtb2xFbr2ssfL4gJRooHcPlNWvVGiR9a3z8wJWPXu8ffR2sF8B4ZZsJ5qMCww1qS2vwY6pgFi0yzG2QLRQD1OofjniD4DsRd8jTkYKFBvokoRDQPl8iXeLU6u4GPfboVnKxlMGVnN79jXBJ38%2FRtveJS%2Bv9e6G%2Bq3UYXVxMpiAt4o2x80e5o9efmYxJ38LXYMUBsBMjcWZYJ2ilzYBzRCJ9FfpgcuPIDzG5wIiUlVS1Ed2XbV7zJRf070lj7ERazQvNmtiXuRt5BibeAnzXHKu%2Fu1ZPh7eojdrJkz&X-Amz-Signature=57937a9a4b0743a442c0f9a906bafa87a96c99184e7fe66c634e42964a611914&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZTPTC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEF6B3dSfTHwrDcR0UzVE7rTsoBqYJH0arMWI9g2hZYcAiEAt8B53rt4sA2qRGemdLcIrqtEVAaZPdlmCv7pzDjPURYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4l7OfDkH1JdqnxdCrcAwE1FobzOyX8Dz0rCN3A1EZMxOWhcKvNDAOoY3tjG5abTfAvQQb1nQBwBmdMwb8Mp7f1Fw7K2S%2BPDbxPU%2FL%2B5exHEs6Ya1mR1XRK1LTCZGiVA0nft9RDQuhE8lNQnlYrafzfwzj3rXFyhFys0cKdzqGAwc3fHPc6N6lrsWjOuqa0%2FEkU6JGpXyRWUlSqcwqy3tRKR%2FRSkiaJ9sYh5EVOzkkoEJ24eb4QZq3rhVj1r97Od1UPvap53rFre426jsWcg605rDUUXDxVvqfbmHaqPVnPWPzi4tkdW7kv16FDUic7%2Bk2Xh3z9jJQYvBa1bPB0GpS5j7Tp%2Bp4jWeVxNALi7JEKTaTbQfG5oLHXkZ0nSO4jsUIgdtRg5xVMtip4YTkL56m50GsWWWw8V5t2Y%2FkNNhJ%2B%2B1sml8Okhg%2FEfQz7al2F4bG4tCkmnYkgGVx7pDwCPt9OKHoxc46nbKpA3UwRnCPykSLmrHQPUX5RvP%2BuSfUlw01n%2FfCjOpcWC0xkPZj9ppF3hVHCkiV0ZLrcLR9ZUH1VESjdeMulHImIuY0t4Dv%2ByM165Z2LNf%2FBsDPMCchtHs%2F45beGcL6%2B%2F8sxFBm1rBZau%2BodiuUpyK3MYQn35NjEjrzX6NcEtm8ez%2BTIMNOltr8GOqUBTTq2eEjbgilZH93mRzoAvjow2hPGTtMgZLKzanAM24ZICUc%2Bo23dUK%2FjDQ8%2Bi5rYF2QUm1FA6YlhGWyFYvOuX%2BUqpaIJOoxWrBaXVNHi3oS%2BXwRoOvELuNKWNuyfgy0YVfEYSSrz7qr1r1VPQg%2FzW20u6dyNvreYGr7e7N9h4rZltyWSCTug2kMnp7oA%2BFQa52DHicKUvJfMPe9Hodnfp05mqGB6&X-Amz-Signature=e282f7743be36e464f318be7dd8543636a31bbe5c150e778343eada4a3ab2524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
