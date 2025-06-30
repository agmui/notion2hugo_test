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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCTLZKK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BYj1qD411wdGPj76%2BFBoqZjbwUXAJoL%2BSNiuhuafyAiEA8rZWdB1Dd1FXWVDQMbXtarstEg2Mw1s716K0ngBFSzcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiWKAvbbUsBTeVomircAwPeBYHJ4zmmx1NyY%2F%2BHwjKwYEubYuYgbxrD8KPi0NWbPUvqnDXYpI8XqrYL6ma9QrfhbTBeJwedeTRcb5WQv7GUp2A%2Bl9QNygk0EiaEncsHTk%2BYbCznFjaJJ6JMkrsNOQyrtp0RiYA0VQ011ZSGCqSNysNMkwbix7pS2v76FSpMzdo12YjMldlWwkY7hJNsi768BKRc8nw9o3JnLGgHWet27VQt%2FOQTZUt26Qp7cQv239T8NnbpqmoQLtOkodzheMwSvjTaiOVDwJfMYvLgDgX3MxO2VL2gaEbMkB8ecqmDubDEtX%2FSP99O3uZPok2TyNz7cD%2B1PN8k2Y0szqmAfDaaV1OAUOMwhedGvEXizuY05g0mSyFwKLC%2BG6C3ES30O1%2BzBjw2ejVpinhiL2qUVAFR0jeJa9OzOqMtPkAHvbG4fLJzEbSUgF4wfSW%2BnGNp60ri9vlhwFQ09WIjt9J%2FDOgHRso58ER6QaVcQ1qPFwW4JRE%2FLMw%2FmAV7uDDKBxQcCaruaG%2FCM7qTZuMHRs%2B1sVdlWf9tqsuBVA%2BOR%2FAzvaV%2B2XHTZ26AexKjh2EMxVRfwEP1HK1cE689mvL%2F6mERNbMfy%2B51b28yOpecinlEfVoAZUqtacTYw53XUffDMNe7iMMGOqUBdxqeEwiQDUDk1krcRRtg7UXin%2FCb6K%2F7d0WDeeyORKMYHSeEJT541GfQZfpMeb%2BhJ7bN%2BrCHcrqM%2BpQnm8R%2BjQN3Smw%2FyiyjiB9947VSkAKe3gLF7qNsC9aGjq2Nf8Vef9UzET49SYTga7lSjfrQUCUjysScFPLo8t%2F7Yan56OPoEu5sU1dWEemEcetcJsHTH%2BQhgIR2OFItNOM%2BX2IzbMB93V6o&X-Amz-Signature=c163461953c5b83fc9b7b0196e26d980d4d0f3b2dcb7c06332edbfa61eb00111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCTLZKK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BYj1qD411wdGPj76%2BFBoqZjbwUXAJoL%2BSNiuhuafyAiEA8rZWdB1Dd1FXWVDQMbXtarstEg2Mw1s716K0ngBFSzcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiWKAvbbUsBTeVomircAwPeBYHJ4zmmx1NyY%2F%2BHwjKwYEubYuYgbxrD8KPi0NWbPUvqnDXYpI8XqrYL6ma9QrfhbTBeJwedeTRcb5WQv7GUp2A%2Bl9QNygk0EiaEncsHTk%2BYbCznFjaJJ6JMkrsNOQyrtp0RiYA0VQ011ZSGCqSNysNMkwbix7pS2v76FSpMzdo12YjMldlWwkY7hJNsi768BKRc8nw9o3JnLGgHWet27VQt%2FOQTZUt26Qp7cQv239T8NnbpqmoQLtOkodzheMwSvjTaiOVDwJfMYvLgDgX3MxO2VL2gaEbMkB8ecqmDubDEtX%2FSP99O3uZPok2TyNz7cD%2B1PN8k2Y0szqmAfDaaV1OAUOMwhedGvEXizuY05g0mSyFwKLC%2BG6C3ES30O1%2BzBjw2ejVpinhiL2qUVAFR0jeJa9OzOqMtPkAHvbG4fLJzEbSUgF4wfSW%2BnGNp60ri9vlhwFQ09WIjt9J%2FDOgHRso58ER6QaVcQ1qPFwW4JRE%2FLMw%2FmAV7uDDKBxQcCaruaG%2FCM7qTZuMHRs%2B1sVdlWf9tqsuBVA%2BOR%2FAzvaV%2B2XHTZ26AexKjh2EMxVRfwEP1HK1cE689mvL%2F6mERNbMfy%2B51b28yOpecinlEfVoAZUqtacTYw53XUffDMNe7iMMGOqUBdxqeEwiQDUDk1krcRRtg7UXin%2FCb6K%2F7d0WDeeyORKMYHSeEJT541GfQZfpMeb%2BhJ7bN%2BrCHcrqM%2BpQnm8R%2BjQN3Smw%2FyiyjiB9947VSkAKe3gLF7qNsC9aGjq2Nf8Vef9UzET49SYTga7lSjfrQUCUjysScFPLo8t%2F7Yan56OPoEu5sU1dWEemEcetcJsHTH%2BQhgIR2OFItNOM%2BX2IzbMB93V6o&X-Amz-Signature=83b8b8271aaefdd87015de422ebff90b2e6e46c2ff94400c9044130effe2d1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCTLZKK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BYj1qD411wdGPj76%2BFBoqZjbwUXAJoL%2BSNiuhuafyAiEA8rZWdB1Dd1FXWVDQMbXtarstEg2Mw1s716K0ngBFSzcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiWKAvbbUsBTeVomircAwPeBYHJ4zmmx1NyY%2F%2BHwjKwYEubYuYgbxrD8KPi0NWbPUvqnDXYpI8XqrYL6ma9QrfhbTBeJwedeTRcb5WQv7GUp2A%2Bl9QNygk0EiaEncsHTk%2BYbCznFjaJJ6JMkrsNOQyrtp0RiYA0VQ011ZSGCqSNysNMkwbix7pS2v76FSpMzdo12YjMldlWwkY7hJNsi768BKRc8nw9o3JnLGgHWet27VQt%2FOQTZUt26Qp7cQv239T8NnbpqmoQLtOkodzheMwSvjTaiOVDwJfMYvLgDgX3MxO2VL2gaEbMkB8ecqmDubDEtX%2FSP99O3uZPok2TyNz7cD%2B1PN8k2Y0szqmAfDaaV1OAUOMwhedGvEXizuY05g0mSyFwKLC%2BG6C3ES30O1%2BzBjw2ejVpinhiL2qUVAFR0jeJa9OzOqMtPkAHvbG4fLJzEbSUgF4wfSW%2BnGNp60ri9vlhwFQ09WIjt9J%2FDOgHRso58ER6QaVcQ1qPFwW4JRE%2FLMw%2FmAV7uDDKBxQcCaruaG%2FCM7qTZuMHRs%2B1sVdlWf9tqsuBVA%2BOR%2FAzvaV%2B2XHTZ26AexKjh2EMxVRfwEP1HK1cE689mvL%2F6mERNbMfy%2B51b28yOpecinlEfVoAZUqtacTYw53XUffDMNe7iMMGOqUBdxqeEwiQDUDk1krcRRtg7UXin%2FCb6K%2F7d0WDeeyORKMYHSeEJT541GfQZfpMeb%2BhJ7bN%2BrCHcrqM%2BpQnm8R%2BjQN3Smw%2FyiyjiB9947VSkAKe3gLF7qNsC9aGjq2Nf8Vef9UzET49SYTga7lSjfrQUCUjysScFPLo8t%2F7Yan56OPoEu5sU1dWEemEcetcJsHTH%2BQhgIR2OFItNOM%2BX2IzbMB93V6o&X-Amz-Signature=c6e94ba104b0b3f749b4e104744626184c19bbd0332020e8110bd2ce690762d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4U6MAF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc7X2Vcj3EtdMUdlWULcbxTB9OdISnAYWWJn4fJmx%2BAAiBSVmAfqNffR14q5x0g2UKhqhXL7%2BfVlp0zhDgcr6kGhiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BddU7kY09TrAy2fKKtwDTpB6sAq42A6c97%2B7gwThkq2UR%2F47zaryK3zlBhBb2FwvLM63xHIOTfFT2%2BpkorPrqFm%2BZlc9LAqvUuHLsL5HSJKBGXeVwdM83QqiOo05G1iX%2B8xxf6QlkTu9llXbxCfjHxoUsv2KFOi%2F3yWDwJfjYfYXNjMV6X3VIPr%2BfpkntIAXP0L%2FljUhE8GJw4wIIDoQZb1ufEVg3iz2dLspCZh0iCPQnj9l2FAoqvKRPchEWiafR5lx3O13A40Ye%2BW3sOA0TA2yXHdQfOh%2BkvFqirsJxcW%2B4kqt4ZtwGCFQAu8gIUyzRy%2FZu%2FSrC4DsKrd%2BBrXhfUqrvbIMX2%2BsbirBwqicbdvI26pQaNUTLDvtu7PgfdbKXmRfSIIXEXGaYEfxvSKDbYZnYDNNNvkA6viet56E4XnHsK8G5cT%2BnKQsY%2F0XaT3b8atbxPNfy%2BFun%2B6LdTqXLp8khxuhr1RotvVhn0JvRcuw4ZNNN21n87oosVeFQNI70l6FDXlH%2BK2M2NdDV3aqpIzSAoQkDVOV2HIjmLFY0qjg16oXt7k3blMn2o6Kj2FZg0kjPOF2x%2BRpXD9CW1xpHV47IE3ctlox7UdWdSRZd2sb6HC7yb0zwfDAtr1rZXUj%2B9MIEmZekeTTpvww8ruIwwY6pgFIEP5%2BlY5QY34fSjvbz%2FpTS2%2F%2F%2Bkg9G0LCi8rWpiqVgWpw54i6028dZoz%2BUDsmmizLX01RrSvJBKS2TlzskL4G1NtRwxKVC5uDc2MIAJ0c21YM8VYoqrHiH5l9vUiPzoDUoA5CSaCxQ4mJ7GPRQXdqkO5YXtJkRlCJCbrH957KlhaScUjCYAnclBbJtxrDz7Ug%2F3pgftRF5R%2FjZETbb0WFHZ%2BbWkbK&X-Amz-Signature=e898d6a0364b836adedb2ecc759fd07560e4045c271404a42f3b3c4b8686e520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRX5E6BM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNaAk0pNSZcAvOT%2BDPv4HetzpKZ5XIo%2B9sE%2BYL5mTWQIgTn%2FVousP8sFJzJ8mcsBKEvSPhSQAv4MtjF2Sz9KiowwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUVc2n0AgpX6Us56yrcA6jHpbd11y3KxC6ptIYVyROe9ed4RHjHonF20KdEC6rPgVIqK6PdHUMBydVW6Lv%2F93ON0YpAiqiLJJ3htv0a%2BqAjV0aP9HUDVryNrUinWII%2Bbjs%2BtUXu6yXT9zwzLVcnuPXzNVFGiJ1UgnW6xgQkFSDgEtCklIcUn2HUqIHs7zkBsX4WjviWX0kwPQ3YzfZeD0mEuplIcB3yxgAsM6WU7nfzzeYIR9HCdvRFQf46MeMvgZnhNn%2FGE3R3nndmZsJofYNK2XFcrMRMfYMkq5r%2FEHJ7HWYb%2FzrnVLIuGFCqQql4%2Bsa6I3Rro%2BH%2FRqFgIgDBBVT7LfcWN%2FX3BER7tHH06Y8%2BFTpwFQLaOu1c45nJnWC5fIxH3CMF%2BiWZ4xpdVTdF1rf8QLq%2BewcBmcemF2%2FasSx5033%2B9pB5fbhLi9L1QT1YMqVL2Nn3YzhrpECdCT3Uwr8LVlMtwQ4PyXvprX%2FfZl29LF1luRiHYgvXhTvdcz3veDkxYOAatVPAGkkaQnHtRQ6QtO9oY1yKsHLzjqPmh6tqCORBBhUM%2FcD3CXvurOHDeYADiujA8nIzWeQYccVf744PkUaeAxLPlvkudc62HmKh%2Fthzzc%2Feb6qVZDb1xc2cUCd1B%2B%2BeviCmVOwfMKO8iMMGOqUB8p3sV2FfdRv%2BPzCqWL%2BjGNwpaTCs7O04IAI9CywTp%2Baqtm%2BjPaFG9fTVBcgPapzqzY7l7dfsnnzQy4GYOnF86HJceJv6iynnAbD1iGlfgf43bMmK6%2FDi7f6wrxVuUwuO0kU6tgeh9kKgHz6tDKHDd%2Fms4HoNxc09DKHxXaHPdqZ95mH%2BlUq0wdjf71RADteDqG6ImNIZXF5dNDl7ZHl5JRcN8y7O&X-Amz-Signature=a66d51594737582621c7bdf67d972f0a85f60e2cc898460e6c9a086fab624ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCTLZKK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BYj1qD411wdGPj76%2BFBoqZjbwUXAJoL%2BSNiuhuafyAiEA8rZWdB1Dd1FXWVDQMbXtarstEg2Mw1s716K0ngBFSzcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiWKAvbbUsBTeVomircAwPeBYHJ4zmmx1NyY%2F%2BHwjKwYEubYuYgbxrD8KPi0NWbPUvqnDXYpI8XqrYL6ma9QrfhbTBeJwedeTRcb5WQv7GUp2A%2Bl9QNygk0EiaEncsHTk%2BYbCznFjaJJ6JMkrsNOQyrtp0RiYA0VQ011ZSGCqSNysNMkwbix7pS2v76FSpMzdo12YjMldlWwkY7hJNsi768BKRc8nw9o3JnLGgHWet27VQt%2FOQTZUt26Qp7cQv239T8NnbpqmoQLtOkodzheMwSvjTaiOVDwJfMYvLgDgX3MxO2VL2gaEbMkB8ecqmDubDEtX%2FSP99O3uZPok2TyNz7cD%2B1PN8k2Y0szqmAfDaaV1OAUOMwhedGvEXizuY05g0mSyFwKLC%2BG6C3ES30O1%2BzBjw2ejVpinhiL2qUVAFR0jeJa9OzOqMtPkAHvbG4fLJzEbSUgF4wfSW%2BnGNp60ri9vlhwFQ09WIjt9J%2FDOgHRso58ER6QaVcQ1qPFwW4JRE%2FLMw%2FmAV7uDDKBxQcCaruaG%2FCM7qTZuMHRs%2B1sVdlWf9tqsuBVA%2BOR%2FAzvaV%2B2XHTZ26AexKjh2EMxVRfwEP1HK1cE689mvL%2F6mERNbMfy%2B51b28yOpecinlEfVoAZUqtacTYw53XUffDMNe7iMMGOqUBdxqeEwiQDUDk1krcRRtg7UXin%2FCb6K%2F7d0WDeeyORKMYHSeEJT541GfQZfpMeb%2BhJ7bN%2BrCHcrqM%2BpQnm8R%2BjQN3Smw%2FyiyjiB9947VSkAKe3gLF7qNsC9aGjq2Nf8Vef9UzET49SYTga7lSjfrQUCUjysScFPLo8t%2F7Yan56OPoEu5sU1dWEemEcetcJsHTH%2BQhgIR2OFItNOM%2BX2IzbMB93V6o&X-Amz-Signature=736cf67d58d475823a5d9c2d46ce14de9423401298d2df0c42a0f687e34ceb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
