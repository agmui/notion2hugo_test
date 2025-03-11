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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3FC4PO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF1yobhq7C0yr%2Bjka%2FYV0t0sLFPoL5Y9cEuZ4CqBEzdDAiAmNZ3MgbuiKpDY3NKfh6ca9egYVT%2FCpQnOKQLBUe5UcyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9awQapsnGHLq4FCEKtwDdYEnmTSbvKLrwe6%2BINo7DlI%2F%2FommI%2FdrO9IsDADBEVlAhPfOcwfCu8ZOqyXCDq3yQz6x5Cudc%2FvWDVs18Jj7JXnytT%2F8UJfinzMyTlZ3%2F9t0iIaCWR3b0zttK2psaAKl40nsGfO7sM3UdX6ViZilC9klR%2BIeEL66euQujW%2FNXu7lLWNr9gZXhcjegnSU5CQ0UzFTTDHAUoHUOFpncFGx3BxMIs9E7CWfqGLKhVdfICVbXlzo6hT%2BGVfNOkns9W0gT1h0OzEtIkApaG6ThAtsXdyh7kLKnr24VPHY0OyvAauh9V3htV8FUlv1JiStAh%2BSVCDYy2mmHDEdc0dBRK5n1wkH95YmkdKxTPMn%2BTrN0LKEkKAfeCteYk46ySAP2s63jmv%2BtinKVqbgdiIu1DeRiKFJPEL6g7XY52wk3H%2B1o%2FtvEMUyGHxUCZ%2FSFVvrsnwUgEzxydCKWwr2qQ2sB4sPMOIdVt7aytdLJpUSkK5%2FcO1rlxnENVJH25fKQy0yq7Lj4pvlB2rp7v8WGsSEJHMcVlCQTd5LDEU9oSPMiuPQi7tHXr3PtHWYp1TtPOmYssHLDUKtLjIPuQlYbGUkXfxUvIWju%2FbNdsZbS8zfSw8Yvb2ksLApDuj7pCjD504wvfLCvgY6pgGrlYhDGo5CDMAB6P0DMLCnFvTuYx5RG28KpYw3UB2r8XvLJEVXEPRKNChEYjqvBDvuT1p3sq3Whe%2BwDg5dsDJrP0eWsYej2FK23fFY%2FJUt%2BDf4D5gTs47FO3px2mpKww0oSppmOP%2BGlVbwcR3ksRgcqSzFpnMoL5fq0Kq8O0O0HB3NegeiQr5dWpEQovdIGBq9g0U%2BOf9TcMmpGCDy9KxGvhZArBMP&X-Amz-Signature=81ab76c2ff9bda5a4c7c3e6ce5554998fb901b6846d6a7561da85f77702882eb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3FC4PO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF1yobhq7C0yr%2Bjka%2FYV0t0sLFPoL5Y9cEuZ4CqBEzdDAiAmNZ3MgbuiKpDY3NKfh6ca9egYVT%2FCpQnOKQLBUe5UcyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9awQapsnGHLq4FCEKtwDdYEnmTSbvKLrwe6%2BINo7DlI%2F%2FommI%2FdrO9IsDADBEVlAhPfOcwfCu8ZOqyXCDq3yQz6x5Cudc%2FvWDVs18Jj7JXnytT%2F8UJfinzMyTlZ3%2F9t0iIaCWR3b0zttK2psaAKl40nsGfO7sM3UdX6ViZilC9klR%2BIeEL66euQujW%2FNXu7lLWNr9gZXhcjegnSU5CQ0UzFTTDHAUoHUOFpncFGx3BxMIs9E7CWfqGLKhVdfICVbXlzo6hT%2BGVfNOkns9W0gT1h0OzEtIkApaG6ThAtsXdyh7kLKnr24VPHY0OyvAauh9V3htV8FUlv1JiStAh%2BSVCDYy2mmHDEdc0dBRK5n1wkH95YmkdKxTPMn%2BTrN0LKEkKAfeCteYk46ySAP2s63jmv%2BtinKVqbgdiIu1DeRiKFJPEL6g7XY52wk3H%2B1o%2FtvEMUyGHxUCZ%2FSFVvrsnwUgEzxydCKWwr2qQ2sB4sPMOIdVt7aytdLJpUSkK5%2FcO1rlxnENVJH25fKQy0yq7Lj4pvlB2rp7v8WGsSEJHMcVlCQTd5LDEU9oSPMiuPQi7tHXr3PtHWYp1TtPOmYssHLDUKtLjIPuQlYbGUkXfxUvIWju%2FbNdsZbS8zfSw8Yvb2ksLApDuj7pCjD504wvfLCvgY6pgGrlYhDGo5CDMAB6P0DMLCnFvTuYx5RG28KpYw3UB2r8XvLJEVXEPRKNChEYjqvBDvuT1p3sq3Whe%2BwDg5dsDJrP0eWsYej2FK23fFY%2FJUt%2BDf4D5gTs47FO3px2mpKww0oSppmOP%2BGlVbwcR3ksRgcqSzFpnMoL5fq0Kq8O0O0HB3NegeiQr5dWpEQovdIGBq9g0U%2BOf9TcMmpGCDy9KxGvhZArBMP&X-Amz-Signature=0361e05452034e9959a949582814c59cd347e7ddc176c1e794015c48ebf93f15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQDMKZ2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDwtnQhyeXMobYs72KsDF0gf8SLjnJcWk0qOPBWy7UvigIga%2BUYRPhYH%2F9LjnDIQh927J48T4FOWLp30A0ZBLwOA%2BAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeV6shl8zZu7SaiXSrcA6BTM5sY%2BbU0R1Z%2BoHMO%2FVMleI1xTxDCWb%2F7PfRRe%2Fu2Zkpm2xW80V%2BVjEyW34HRypngBKLlXX%2BYth9mp%2FeEOwc96FfnJudETLCFX7AETvJGGkNC%2BwM5xj%2FIFz95QEv%2Fu0Qr6eFTr6ZxT5AVT%2Bj1T2Tc4dqx%2FuzlXTwg9zNWW%2F9agFfoznrYxPCqJB%2F5iQex7BFo9hui273Wc%2FEAvi2T77D2o73DpzCSWsxXWV8MrTiRuR5uAr0jjcumibRSnpV%2FMAvHmwdoUVu41K2aGa5BbPwmfzFz2myn6PhJ5bt01JlA8mAWmIt1Xla7JCjhXvatFxT7mfIFKnddUmK6hi65BbFLBjLM%2Bymtg08l6zmz2COAirudRNVIi3Ov4QAMDouL%2F3UsoE3zeaaub1VQP6hsBh4XyK4zlVUmRRO8F3dS5iR4TKCAeFIUeGQ%2Bja36c3kwbt3%2FKmAUkdthibw5B1wMA1nhnE%2BJ1Tx0dv%2Fqy1YYxHrpiXJU5afAXg0mNd7tIUnAKDo321y4OvzplEJNs7xpHeNQW0woa3Ai%2BkWoUmt7RPrc09K%2FvUzHAHZg3cmz5DvZRK3mkYqyb4iI%2FxY%2FUFBbxhKxhaw7MXASTzQiJU%2Bzt8jdw7yQm4zyRemMHscaMI%2Fywr4GOqUBPl0iBWh4RXZF00b8BP8wu9mi7bLw1ptcLXDmmkXeE80AU%2BiUKC7%2Bka8xD%2F0TlF32%2BkHE9%2FfwJQIWszhnzO1R9r%2BTEq59RAu%2BhxeO6uKJHhzdQPzfDe3LeptfgP3HS0SWEiPB6lpZld5ZOnc61jLpRbswLQPTvEVJbZrNt4SgDJqJwVv9ay3K2MYPM7Mm13zmkDVJZTTqj3U6ATk8qBByR5mE6M04&X-Amz-Signature=ad5abfe918fd0ecff500bc8462a0e89c53927c6c04308d305ae6c71195d04409&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VNPIXZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC6Ag%2BPVbIpx4neXUf9DP%2BQXUAYjHIEABi2mQDnmKNo7gIgCVm4qQYm2GSgJyqtWQY3LwNWyOOBM0gQQ45YfplE8JQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjxIrEfLXMZ4ld3DircA3rQP3mKpXGtUtm2a2MgBMVsqBKLgD1e9nVFPSSYxni1KPu3tZpqAgPvVw2F8OF2HU5xT0kMOySqieXQ%2FoNFyL5MK6eM5iPT98enDkuy0b3eoZUInwIWPoR6ynbCpIYa4gIqxdPiEvl7bRgqEtVK%2B9JYCmxE2KJ58NVyjG2q4MmVYMFs9LivAZHjyUnT6mgd0yOHFWlxnQRt5DeLyfaNuADvWX0moCAXRgSk%2F0NzcJmQu16jVaBIvZaKWQ7%2FV6B%2BFtdE%2BsEQM1kkzPt9tWwSzUgUcyLxVin5DjLAjA7sJvGwO9liXMs8IChuMhGBYKbbxleHXK%2FvVD3mkL2E%2B27dnGFvnuNFxcxdjzom1kQsKeHRO%2BZYfIFpMVH97izf99R8fP204kr6qwYGVB9ortwTSzmknXp%2B3AhW7MqLMCPLDI4CFnDAsvTZbrwkh20yqjjEdnw2JgUQTgVJbRtKs%2BhcGAk31eqdM6EMnnSykbbz1cm9%2FfeSTbIPyl8Hss7Q0mQW%2BmrgySB4kHURnu%2BzEFyCxNRNhEqqx3FagBxA%2FgjcUqAaSLmcoerEu%2BramDe7ff5QWFq%2F6wAMI1lxnQ6ArEFJBcVlwb%2FUxmx8fljOPCNj5a6OfOAQVRmmSJbdSdEkMI%2Fywr4GOqUBDDPkvK3O4QblZnDPAw6RukI72A7jVd0Jzqv5%2B0oYGt9%2FVqecipUQeJ8hhTlquPoR3%2B2jE8h6TVwJ%2BQwv0ZdHXDX5teMIL%2BPIFSN7wmWB2atczdDhPzX6whaCTgCTlASaF7uOIDxaEyD60%2BZW9QuKphJiE0zxMjRwZFsuugnFPUA97qdA7aVZQcQXFSkUVmYokdmI%2Fyp3dkBq9Wj%2FZuFu%2FxRZTsJ%2B&X-Amz-Signature=126d67af91f0e8b504354417fb09edcb306da7ae21afd02642604d11500c7b33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3FC4PO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF1yobhq7C0yr%2Bjka%2FYV0t0sLFPoL5Y9cEuZ4CqBEzdDAiAmNZ3MgbuiKpDY3NKfh6ca9egYVT%2FCpQnOKQLBUe5UcyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9awQapsnGHLq4FCEKtwDdYEnmTSbvKLrwe6%2BINo7DlI%2F%2FommI%2FdrO9IsDADBEVlAhPfOcwfCu8ZOqyXCDq3yQz6x5Cudc%2FvWDVs18Jj7JXnytT%2F8UJfinzMyTlZ3%2F9t0iIaCWR3b0zttK2psaAKl40nsGfO7sM3UdX6ViZilC9klR%2BIeEL66euQujW%2FNXu7lLWNr9gZXhcjegnSU5CQ0UzFTTDHAUoHUOFpncFGx3BxMIs9E7CWfqGLKhVdfICVbXlzo6hT%2BGVfNOkns9W0gT1h0OzEtIkApaG6ThAtsXdyh7kLKnr24VPHY0OyvAauh9V3htV8FUlv1JiStAh%2BSVCDYy2mmHDEdc0dBRK5n1wkH95YmkdKxTPMn%2BTrN0LKEkKAfeCteYk46ySAP2s63jmv%2BtinKVqbgdiIu1DeRiKFJPEL6g7XY52wk3H%2B1o%2FtvEMUyGHxUCZ%2FSFVvrsnwUgEzxydCKWwr2qQ2sB4sPMOIdVt7aytdLJpUSkK5%2FcO1rlxnENVJH25fKQy0yq7Lj4pvlB2rp7v8WGsSEJHMcVlCQTd5LDEU9oSPMiuPQi7tHXr3PtHWYp1TtPOmYssHLDUKtLjIPuQlYbGUkXfxUvIWju%2FbNdsZbS8zfSw8Yvb2ksLApDuj7pCjD504wvfLCvgY6pgGrlYhDGo5CDMAB6P0DMLCnFvTuYx5RG28KpYw3UB2r8XvLJEVXEPRKNChEYjqvBDvuT1p3sq3Whe%2BwDg5dsDJrP0eWsYej2FK23fFY%2FJUt%2BDf4D5gTs47FO3px2mpKww0oSppmOP%2BGlVbwcR3ksRgcqSzFpnMoL5fq0Kq8O0O0HB3NegeiQr5dWpEQovdIGBq9g0U%2BOf9TcMmpGCDy9KxGvhZArBMP&X-Amz-Signature=1f7c0dd74ba9cd05a24a42db9d9f67dcdc373f498b2affc7139007750a0933d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
