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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWFN3ZZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgeXP0sqMhhlA2P3e90DH93NVwyAcYj%2FRM1NPSjICuAIgBCE1XkiEd0Q86JTtrTaihP5SAK5CsSHOkNbdB9y1Ld8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKUxbdLNKg8Z7lAhJircA0f3gKzkxeLJ2FqJu2Wh%2BXe2AdN1EOJXn%2BUGhsHagWuC%2F%2BFgMFc2UJCUAsH%2FC06qHANIqA1t%2Fh6FgZk1JZ2zAKm23ptfT%2F7rWqpPdXLaRjbpvvf%2Bi1ScNvISkzpn5BNJEXYdv%2FuHYV6ranxbbTl9WMz9%2BsJ%2FJui9n%2BNR1DW%2BI5skoIY9mSBJco5w7h5P6Gs7vhFN2iXdYBDBkkvtNP9EcBs8pfE%2BcemLUyzJFaKO1mbm4N1PyIeYqIYo8ff1XWQ%2Bz7LTuMZPrm6450Jw67xYnAM5%2BJjk5xe7ejtTGmaelDZ2yiuny%2BaHUDcdvOmCx%2FwZKRNp%2BUfZhuy5H%2FylaMX686cO3eWkxJiacXPforFSXuu%2BG%2BVJuiWGa%2FOOAt2Nq8Hr%2B4%2Fg99ocE4hLyVIDdfbkgPouTYOK%2B%2BZWMi3EYBeq%2FlzFAynXDr0DHroxz1fT9vhs2gpFL6P4OUMTzwIBWpZFKggalna1k6HhNrwUPFaRAOlzQTmEySDvRMB%2F9bVWsE5mnsBIliiJlZasWmvJLYd8QmMGboEi82JsLOCovZUPCYxswBcPtKbUEOxXnhhhaKFCIdl6X3DBfSqA8GTttEdZLDnNWcX4fIxqwlpnS6HuWyJcfdsQR9qcfP7%2Bvx1mMOqmxcIGOqUBNXHaQWxN4qSpyCRkRr%2FbUFMzI2DtlBCDzLHozuhLkeBa0w%2BqWNvC8V2F7j5aIQJj%2B4mmKklXvp8L8OcjxNaTINcpEno2EtMvYxG1tNM%2FvoRM4NqvxM4yl8CtJ9GBXTQc%2B8TziRg%2FiZFwf6rtsebQIcEXeZ0lhceAt3IPvL%2FleAvWgjU%2F4WHX7wUdGigFVtOo7QhHkEXJ5KVyCrWUfIhUZAiu61WZ&X-Amz-Signature=6c63f617230e3cf4793a860def2e01b474aef572de582bbfd78147b99a3e02f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWFN3ZZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgeXP0sqMhhlA2P3e90DH93NVwyAcYj%2FRM1NPSjICuAIgBCE1XkiEd0Q86JTtrTaihP5SAK5CsSHOkNbdB9y1Ld8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKUxbdLNKg8Z7lAhJircA0f3gKzkxeLJ2FqJu2Wh%2BXe2AdN1EOJXn%2BUGhsHagWuC%2F%2BFgMFc2UJCUAsH%2FC06qHANIqA1t%2Fh6FgZk1JZ2zAKm23ptfT%2F7rWqpPdXLaRjbpvvf%2Bi1ScNvISkzpn5BNJEXYdv%2FuHYV6ranxbbTl9WMz9%2BsJ%2FJui9n%2BNR1DW%2BI5skoIY9mSBJco5w7h5P6Gs7vhFN2iXdYBDBkkvtNP9EcBs8pfE%2BcemLUyzJFaKO1mbm4N1PyIeYqIYo8ff1XWQ%2Bz7LTuMZPrm6450Jw67xYnAM5%2BJjk5xe7ejtTGmaelDZ2yiuny%2BaHUDcdvOmCx%2FwZKRNp%2BUfZhuy5H%2FylaMX686cO3eWkxJiacXPforFSXuu%2BG%2BVJuiWGa%2FOOAt2Nq8Hr%2B4%2Fg99ocE4hLyVIDdfbkgPouTYOK%2B%2BZWMi3EYBeq%2FlzFAynXDr0DHroxz1fT9vhs2gpFL6P4OUMTzwIBWpZFKggalna1k6HhNrwUPFaRAOlzQTmEySDvRMB%2F9bVWsE5mnsBIliiJlZasWmvJLYd8QmMGboEi82JsLOCovZUPCYxswBcPtKbUEOxXnhhhaKFCIdl6X3DBfSqA8GTttEdZLDnNWcX4fIxqwlpnS6HuWyJcfdsQR9qcfP7%2Bvx1mMOqmxcIGOqUBNXHaQWxN4qSpyCRkRr%2FbUFMzI2DtlBCDzLHozuhLkeBa0w%2BqWNvC8V2F7j5aIQJj%2B4mmKklXvp8L8OcjxNaTINcpEno2EtMvYxG1tNM%2FvoRM4NqvxM4yl8CtJ9GBXTQc%2B8TziRg%2FiZFwf6rtsebQIcEXeZ0lhceAt3IPvL%2FleAvWgjU%2F4WHX7wUdGigFVtOo7QhHkEXJ5KVyCrWUfIhUZAiu61WZ&X-Amz-Signature=10f73e12f644b18e0130e723e4edf49704a8c2d2ca8396e942ffe4b9dcb1ece1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWFN3ZZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgeXP0sqMhhlA2P3e90DH93NVwyAcYj%2FRM1NPSjICuAIgBCE1XkiEd0Q86JTtrTaihP5SAK5CsSHOkNbdB9y1Ld8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKUxbdLNKg8Z7lAhJircA0f3gKzkxeLJ2FqJu2Wh%2BXe2AdN1EOJXn%2BUGhsHagWuC%2F%2BFgMFc2UJCUAsH%2FC06qHANIqA1t%2Fh6FgZk1JZ2zAKm23ptfT%2F7rWqpPdXLaRjbpvvf%2Bi1ScNvISkzpn5BNJEXYdv%2FuHYV6ranxbbTl9WMz9%2BsJ%2FJui9n%2BNR1DW%2BI5skoIY9mSBJco5w7h5P6Gs7vhFN2iXdYBDBkkvtNP9EcBs8pfE%2BcemLUyzJFaKO1mbm4N1PyIeYqIYo8ff1XWQ%2Bz7LTuMZPrm6450Jw67xYnAM5%2BJjk5xe7ejtTGmaelDZ2yiuny%2BaHUDcdvOmCx%2FwZKRNp%2BUfZhuy5H%2FylaMX686cO3eWkxJiacXPforFSXuu%2BG%2BVJuiWGa%2FOOAt2Nq8Hr%2B4%2Fg99ocE4hLyVIDdfbkgPouTYOK%2B%2BZWMi3EYBeq%2FlzFAynXDr0DHroxz1fT9vhs2gpFL6P4OUMTzwIBWpZFKggalna1k6HhNrwUPFaRAOlzQTmEySDvRMB%2F9bVWsE5mnsBIliiJlZasWmvJLYd8QmMGboEi82JsLOCovZUPCYxswBcPtKbUEOxXnhhhaKFCIdl6X3DBfSqA8GTttEdZLDnNWcX4fIxqwlpnS6HuWyJcfdsQR9qcfP7%2Bvx1mMOqmxcIGOqUBNXHaQWxN4qSpyCRkRr%2FbUFMzI2DtlBCDzLHozuhLkeBa0w%2BqWNvC8V2F7j5aIQJj%2B4mmKklXvp8L8OcjxNaTINcpEno2EtMvYxG1tNM%2FvoRM4NqvxM4yl8CtJ9GBXTQc%2B8TziRg%2FiZFwf6rtsebQIcEXeZ0lhceAt3IPvL%2FleAvWgjU%2F4WHX7wUdGigFVtOo7QhHkEXJ5KVyCrWUfIhUZAiu61WZ&X-Amz-Signature=15279460610a7b063db093a1164f63eea2936c5b93f41fe6c86529c1e0172d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCZHGRV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIvi63HEk%2FEM46sWxGGVE4xfMnSUijjfzQq7KEQnOXtgIhAM%2B6RAe63fJnuNdlNXqqgXFcfo075jS5%2BM3NJ6ytr%2BzzKv8DCHUQABoMNjM3NDIzMTgzODA1IgzyvK%2BOANOZToskToQq3ANl6NlWRLLGn3v3D0FnhO2BYIGhG7%2Bd4hJT4E4a%2Bbolb4Jjxjn5%2Fk2QZfMGQxBGAOG1doxxA6fBINk8wuO0BH7ycLtFO%2F8Dh5Mvu3mKRN3JHfvq98tN%2FTqoT3ciXE5XKqTflVQXBLJBL7i%2BVOF4IXvM81NpXMRL2xLnqXHGUrzAYCvKsrjmh0cRMO%2FuPrXfBiR2vIPKYk0q00IDlRK4HjIVwO%2F00SLzlyklwLMXaplKY27dcUVwOQzyu9FfVuZHwisPXjt%2FR7BygXbKtg4qMXnPTnTDc21d4W%2Fa3Bn87mq%2Fpgw09gAtgLIIi9lNFOhb3mx5KKhRZ96O8yZfDLqlDbI7fRqTw%2FjhEj9VVtWDjnrG5%2BTiPamuiMLdvO7695oIu6m2F3%2BHmDH2jlOW1rc8u%2FXhjLptBtJmutICaBbw%2B3rU9sL0YMCM1Oy%2BN3uvB1wizGCQWjP9LBUAqvx3Gkq4%2Fc7NfqVE0IIlVmg1Rgxu3XrkzSns1hNMrde4%2BfuVEU9SFCPOMdM2S9go7RK30soqCYkwO8tUpN8dIOn%2BrCTy9XF2VyWPTZxOcsZR0ezxJxuOKFl%2Fqxn2imeX7xjlukfb6RJMBYWeu5uV0%2FxaOS9oMobwE%2B0f1hg5e2Y%2BtoZFTzC4psXCBjqkAfX3GbcwywB2Yovwfvv%2B2ONBskTrZYxoJU9DfN1SLVfonx8q3Sl39MrPVvuC4zQOcwW962E6zBy4vDPf4bRmLBsrO6Xid4RBDkx0oYy6Ld4kgHm%2Bg8LDWcqj2O3Q6XtOvuCvqjAGOn%2FA2DP4WclFnCdk4eej30gTLW7ptsHNR9i74xGQRg%2B4%2FIl%2FtMs2NfWEhdqlbyHQtglnfPpcQNRbbRd3Uzj6&X-Amz-Signature=a9ab27296cfff348719723d7ddbcaec3607fdb33358eed5d427bb23807b91913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIVVHSG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9MNIBwj5V1ue4pZmiWVb2Vz2kJbV%2BUVXs2bpoyVMTAIhAPGY4Lm0x7tjCGsjf4hqhQyOueiNoqOGXfScju9Uh3qnKv8DCHUQABoMNjM3NDIzMTgzODA1Igwt%2FHJADw%2BrSpt1Pfwq3ANmI3cqL9suXwcY7pXgb8t3hZ8t4iMK00bQGmTi2iayyxGjghHXy6hyrvgzifKOSz0BD%2FwwfOXLnUkanFi8wcmtBQWXP4ugWx47StdcYnp6WKMVQ5aicEMmovhhzXmncMprkKbY3WGKmidOjbqGDQee2I%2FToP2mRsewRa%2FKRtiyX5Bd2PX3wF4aSDRE9klsWNu9A2jo2Jzv06hUimHqSsz%2FlfoalCtccs5mUNHTN2w73mR%2BZ4MXNcI%2BwPz6Uz9vY69AbZfaEwKezwJIJEx7Z9fv6HtcLZBG7lTrII3RlQt1kXoZKXA8%2BGy1IbntZW0WiCgsXpDt7dhokL%2By5sVsrq%2BpbFiz049%2Fx1MHePHUnARmo8QQl%2BECLvPNKNrwRDxy8UFBYavvR7DmP2cSNZsb5oDAyT4uw2SiCMIManQigViDQxi1ZjRPnhEJq0qeSoXG5I9cPYaMnXOU6XHtBdABM8ZW3PXe%2FQ2g4ZcRPbFbSXUgH59LaDMkLYmwdw84A3F5LR%2FMVSEEWFt9IVdDEc3Ze4qi6OsLUp3WLe9V%2FM2WxRu6vd8hIsxMaWj8OIPlHQ9FP%2Bk0onJTkqPT3r1Ek4SixWvRhifwVv%2FpZBENvKi6MgMMxShFLE8A9DVee9ZFszCtp8XCBjqkAVFl7hf9G12ug8xXPM%2Bt3bbIr6abBDKFIPBb42%2FHG5y01CaHiDuZ%2BueHXvZPUU6Xj7ZIv17yED49yFS3W2dAtDsc14pgqXvAchNYUaxKtdbGWGJGKs3ZwJb43CogNIODeMiUjERwIZYJ%2BaWbtNw3CZ5Ww339gvFDo82TvMtbAUX6KMS54zkgh%2BQi2qcXftfWT17bx0zuowjZPpgAbhbLMDtrpSQV&X-Amz-Signature=0096b265ebc12c7792f3ed7fcc667ff14d710279bc37b4dd86268d728416dabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWFN3ZZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgeXP0sqMhhlA2P3e90DH93NVwyAcYj%2FRM1NPSjICuAIgBCE1XkiEd0Q86JTtrTaihP5SAK5CsSHOkNbdB9y1Ld8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKUxbdLNKg8Z7lAhJircA0f3gKzkxeLJ2FqJu2Wh%2BXe2AdN1EOJXn%2BUGhsHagWuC%2F%2BFgMFc2UJCUAsH%2FC06qHANIqA1t%2Fh6FgZk1JZ2zAKm23ptfT%2F7rWqpPdXLaRjbpvvf%2Bi1ScNvISkzpn5BNJEXYdv%2FuHYV6ranxbbTl9WMz9%2BsJ%2FJui9n%2BNR1DW%2BI5skoIY9mSBJco5w7h5P6Gs7vhFN2iXdYBDBkkvtNP9EcBs8pfE%2BcemLUyzJFaKO1mbm4N1PyIeYqIYo8ff1XWQ%2Bz7LTuMZPrm6450Jw67xYnAM5%2BJjk5xe7ejtTGmaelDZ2yiuny%2BaHUDcdvOmCx%2FwZKRNp%2BUfZhuy5H%2FylaMX686cO3eWkxJiacXPforFSXuu%2BG%2BVJuiWGa%2FOOAt2Nq8Hr%2B4%2Fg99ocE4hLyVIDdfbkgPouTYOK%2B%2BZWMi3EYBeq%2FlzFAynXDr0DHroxz1fT9vhs2gpFL6P4OUMTzwIBWpZFKggalna1k6HhNrwUPFaRAOlzQTmEySDvRMB%2F9bVWsE5mnsBIliiJlZasWmvJLYd8QmMGboEi82JsLOCovZUPCYxswBcPtKbUEOxXnhhhaKFCIdl6X3DBfSqA8GTttEdZLDnNWcX4fIxqwlpnS6HuWyJcfdsQR9qcfP7%2Bvx1mMOqmxcIGOqUBNXHaQWxN4qSpyCRkRr%2FbUFMzI2DtlBCDzLHozuhLkeBa0w%2BqWNvC8V2F7j5aIQJj%2B4mmKklXvp8L8OcjxNaTINcpEno2EtMvYxG1tNM%2FvoRM4NqvxM4yl8CtJ9GBXTQc%2B8TziRg%2FiZFwf6rtsebQIcEXeZ0lhceAt3IPvL%2FleAvWgjU%2F4WHX7wUdGigFVtOo7QhHkEXJ5KVyCrWUfIhUZAiu61WZ&X-Amz-Signature=880f6a0b188ba77ecbd114ae2e5cace5ce0c3eff0f76d04d020e7107283b8c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
