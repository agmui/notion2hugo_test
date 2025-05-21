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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZP3EE6Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHykEepSxW%2ByYHsNfKNySfIDiKXcEVhB1FbP3ddrHDv2AiAHix7d%2FakdcmUbq43sXWCzOvYNVANBB72p%2BH%2Fzge%2BkqCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXq8uF6%2B4QkFR0ar4KtwDkeTyJ1TmBpdwoyDoeDk4YDSwNTGrVBNaMhMofPijl4snaemIocgMDakVOjs0ESC%2Bja2cLlGSJcl7C9UrI5TEuJLm%2BeH8kBH3Qi5YB70L8gRjqYqKhrlc19qlEeHOE9KvYQVEcd75hQZQ3orX42Qbp3Y0e3FBbq86cl51EXeuNEfodgkaiaSQBT0oVAXQXRsmd1z2P6CWN5GxPZY7ql49hTD2u8NcZ66ymyd%2B9GBjv65A4gyPXBUnmrTBRvENGFhDIPDNeKUC59BhrEDaa9ftWu%2F%2BrU%2Bg0UPetbn1iAlxP1eZZhSUewZBCvJGzlZqXxpma0r9GBXL7SoBqjAfc1mgPtWyXskSCH6Xsv2dCeYqVCVz%2F9ixsOFsY3pQ57rmG2eLFg4iPSZs%2BEw3rYjUA6RBOZlw4yBlgiVbI9kYfEKjKR6dHJ0PY99jzVBLXoYOkSo6CtzNVPWKzGao%2BNEoEVa%2BDmPg2RcmYGJ9XwOzu0W1lnMiD8CiP5MxhWABW1TOuErQ0YnO8TzXqSH6C50dCztVDPPDvZEO%2FBAGQN%2Fc8F63SF9l5Y7mUH2UuoUGNTRyZ0adeG6vkudQo1ZYJ%2Bjfo7TDN4bvKkzXV3IsFBryPZeopWGNuxrf8%2BKfUC8gMx0wv464wQY6pgERzlbRmMcFxoyJxFBYEQmr0z22Oxr4LQyad4N750s6UVlK4UxiV6batyxEPrxIWWBvNIc4hYkzMj3PPQaZXl%2FiWsXbUTYH5mv623Xu3dasMwBKWqSxte4%2BiZh68sEWpK0D40ZVzHenVICRBlUTOCQtlaIdjP4Xxg8u1auv1sKnYpBN%2B%2F989YDRuOyMnc9buH0BbZBdPXqZ9DSe6qimwHSkcV3xXVsU&X-Amz-Signature=60890474445202c3bf0c28e4c0cc37ec7d1ad1a5702aab0417be938f4ade0273&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZP3EE6Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHykEepSxW%2ByYHsNfKNySfIDiKXcEVhB1FbP3ddrHDv2AiAHix7d%2FakdcmUbq43sXWCzOvYNVANBB72p%2BH%2Fzge%2BkqCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXq8uF6%2B4QkFR0ar4KtwDkeTyJ1TmBpdwoyDoeDk4YDSwNTGrVBNaMhMofPijl4snaemIocgMDakVOjs0ESC%2Bja2cLlGSJcl7C9UrI5TEuJLm%2BeH8kBH3Qi5YB70L8gRjqYqKhrlc19qlEeHOE9KvYQVEcd75hQZQ3orX42Qbp3Y0e3FBbq86cl51EXeuNEfodgkaiaSQBT0oVAXQXRsmd1z2P6CWN5GxPZY7ql49hTD2u8NcZ66ymyd%2B9GBjv65A4gyPXBUnmrTBRvENGFhDIPDNeKUC59BhrEDaa9ftWu%2F%2BrU%2Bg0UPetbn1iAlxP1eZZhSUewZBCvJGzlZqXxpma0r9GBXL7SoBqjAfc1mgPtWyXskSCH6Xsv2dCeYqVCVz%2F9ixsOFsY3pQ57rmG2eLFg4iPSZs%2BEw3rYjUA6RBOZlw4yBlgiVbI9kYfEKjKR6dHJ0PY99jzVBLXoYOkSo6CtzNVPWKzGao%2BNEoEVa%2BDmPg2RcmYGJ9XwOzu0W1lnMiD8CiP5MxhWABW1TOuErQ0YnO8TzXqSH6C50dCztVDPPDvZEO%2FBAGQN%2Fc8F63SF9l5Y7mUH2UuoUGNTRyZ0adeG6vkudQo1ZYJ%2Bjfo7TDN4bvKkzXV3IsFBryPZeopWGNuxrf8%2BKfUC8gMx0wv464wQY6pgERzlbRmMcFxoyJxFBYEQmr0z22Oxr4LQyad4N750s6UVlK4UxiV6batyxEPrxIWWBvNIc4hYkzMj3PPQaZXl%2FiWsXbUTYH5mv623Xu3dasMwBKWqSxte4%2BiZh68sEWpK0D40ZVzHenVICRBlUTOCQtlaIdjP4Xxg8u1auv1sKnYpBN%2B%2F989YDRuOyMnc9buH0BbZBdPXqZ9DSe6qimwHSkcV3xXVsU&X-Amz-Signature=d723a14362e7aa506eecb86847f2717c11478b596c97ef218282ff67bd1a16d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZP3EE6Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHykEepSxW%2ByYHsNfKNySfIDiKXcEVhB1FbP3ddrHDv2AiAHix7d%2FakdcmUbq43sXWCzOvYNVANBB72p%2BH%2Fzge%2BkqCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXq8uF6%2B4QkFR0ar4KtwDkeTyJ1TmBpdwoyDoeDk4YDSwNTGrVBNaMhMofPijl4snaemIocgMDakVOjs0ESC%2Bja2cLlGSJcl7C9UrI5TEuJLm%2BeH8kBH3Qi5YB70L8gRjqYqKhrlc19qlEeHOE9KvYQVEcd75hQZQ3orX42Qbp3Y0e3FBbq86cl51EXeuNEfodgkaiaSQBT0oVAXQXRsmd1z2P6CWN5GxPZY7ql49hTD2u8NcZ66ymyd%2B9GBjv65A4gyPXBUnmrTBRvENGFhDIPDNeKUC59BhrEDaa9ftWu%2F%2BrU%2Bg0UPetbn1iAlxP1eZZhSUewZBCvJGzlZqXxpma0r9GBXL7SoBqjAfc1mgPtWyXskSCH6Xsv2dCeYqVCVz%2F9ixsOFsY3pQ57rmG2eLFg4iPSZs%2BEw3rYjUA6RBOZlw4yBlgiVbI9kYfEKjKR6dHJ0PY99jzVBLXoYOkSo6CtzNVPWKzGao%2BNEoEVa%2BDmPg2RcmYGJ9XwOzu0W1lnMiD8CiP5MxhWABW1TOuErQ0YnO8TzXqSH6C50dCztVDPPDvZEO%2FBAGQN%2Fc8F63SF9l5Y7mUH2UuoUGNTRyZ0adeG6vkudQo1ZYJ%2Bjfo7TDN4bvKkzXV3IsFBryPZeopWGNuxrf8%2BKfUC8gMx0wv464wQY6pgERzlbRmMcFxoyJxFBYEQmr0z22Oxr4LQyad4N750s6UVlK4UxiV6batyxEPrxIWWBvNIc4hYkzMj3PPQaZXl%2FiWsXbUTYH5mv623Xu3dasMwBKWqSxte4%2BiZh68sEWpK0D40ZVzHenVICRBlUTOCQtlaIdjP4Xxg8u1auv1sKnYpBN%2B%2F989YDRuOyMnc9buH0BbZBdPXqZ9DSe6qimwHSkcV3xXVsU&X-Amz-Signature=8abfab6974d9a20ded80eb12570bf209c1c1d6f854a98f3308608a2f1ccedf31&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHJN5BY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFQL2xo2rktUYnZFioJ4i%2BVOXLrpj%2Bm3Vtwk9wjqm1uGAiEAx%2BoAOS0GQCntdoHkpincBJNsgDMfaswZ%2BA%2F7hLJ546wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPpbmub3Rr9vHhbyrcA6NhOgdpOw9KhOcKPHxVSI3kj5DqNkFLXrxdgS4zYT5QjOMsoCLbN%2FLIM0a4KULkPhmcv9rarQ3nS7Vgec20yasd6TKviQ2Cyo8Bt5CLwb8ss1h9pu053D%2F8BPSPptpIZrrS%2FEkeoG5d2eEaZqau0DY4gqybUpAY6yTMzALzzbsJL39S7eO0%2FwpmqZuaxLZFUXmb5SHNhpqlXtEBWhw2s2nTT1Z1xoSMP%2FqLv1F20eOl9tCDPWxtdHvXXQIIBDEUAxxe77KL2gSPx8mUiWhFcmVcgMcw2gfM%2BeuMmaJBwOb9XvV7fHdKNVcQ1a2UWwCiAfiYc5iSzSIAkpHrgpirpsW08jBK0Dtc1%2BTGAwKtXlMlifOVghqbCS4uEuOTNrKYS7cw0%2BwhoM%2FGRax8AeiHnHbWBK%2BlEOPED2F2FXWmyZ2EvAPqBT4XgbtDQBJET9Qg4PpEvDBPN6csbCBVHmQtda6F36kt55wFFQzBwZSqI0mnbNkYJQoKa4eMkOa5IXaJ8KPLymSbbE5KDo5tZhA56QPyleE1qBvJvk%2FOJd7TbsXd1gZlaQiX6aMpeY9c1zNAxAvs8k7KTqJmkCWe26GyufXyeN8sbgRSzcrMdrLKWXt3H03AZSnuA0AYBmVaMJqOuMEGOqUB0ZQ8kmsT5NIqoT6Qbplf4OzN8FZqJUuk2aHCe0Phh%2B%2Bmi21qFIUkkNTV22c57fiCIWoxRk7FzbuOWNCbWPPUQmYFDdIgXWbZ0MJ9Pr%2By57GHzuTzps7dFsUkpsJi2bFIZtgh9031ZMckNYpA6%2Bvx5SDlPFPq6GHBhknRbXbeMN6uYKwC5PxcqQJn7RaBGYYSKPIdjtYZbzpOmRaxq66Uh8Br4ZJB&X-Amz-Signature=e68c0fc4cea567cb2f5a0c31713240190e49db991d3d5c5b560ed76c3b8ec463&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPNWDRB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICSXHiKHjl%2F4wTv3%2BwP66vCa59nSeIuKpBJ44o5dH%2FFVAiEAw32im9pAKjsx%2F9Sz0kbY39seOvH%2BzjB72Bsfv7PGDYYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfwXuNPWYXzwvwFUCrcAyK6aCVtF0i3TYlnwMSxacmtWww8KAx1j%2FaGcjIgkk6JWh%2F0lFb4ESs52PmPXXZ6%2FXKMBFCv%2FoNeh%2BK1x6MEDnuVXSKJHSo3PYPeAOBZ5aN6eoX9KpCib%2Bh71S%2FYg%2FZ4KP0Q%2BkGqtm9NGrRO8Er2FoMaoHYJ8LCUeYssLIilecDbeSBUm0BiFT2kWoK3UZilOtHL4fObeFiBJHyiW%2FlWfyhWuurTjcmlGWkf2WYTcZehD4Mk4serHe42t2%2FxU1s9qELbdjLP0Q4huOSY2cvt5E4vw1x16MiIpbUGIJ47pdpCRESvU%2BU0v4Pmqc6lCcwc6ObSbHdUJ1BYB9fPicq4p60b2s9cu6sUuGJeIdw3SdvpGZM9yNECLi4100jbIJKEa%2FzqzSAkn0MzQIko7kIIIGpaDRGngzuy1hIMgLj3RDrMOx7dy4vrkF6%2FXj1HcJbvtzb9ar9%2FNrZ%2BzjafBACGm089zrHN325CGlJMPCHP0eeXOKJsvJyOvHNqBdEEG355SK3VboQOq5vNwJnoaK3WAZxr3ck0oNqATKW1T8T0riSWlNLt7Gypb3j1BrC6neYNPbqMXm5%2FOYh%2B7xzCimG9SaUtnwErZN6QlsSO0zlNbVwJoJ4x%2BAEgOiKDELuEMImOuMEGOqUBbSmTWw5VufwR3SzRTir7clrk2lBZWlVQ1T1cJza05D50gw9h1o1d3ZXGmy57dIpizLcl0Qf4TmDi4o%2FDoZ6eUQOAnhyj8z4wgh8wHCo7T3yBrN9vUu1jz%2BiZjNRQTWwKTzdJ2TMwCjjhwXxBViVTFpjn%2BXP%2B%2BtyFPY0aHhu0%2FEG81vOqA0UfamIIjMnVWZkdm%2FgeYA2KGRxr3oohILMkIP9KluXN&X-Amz-Signature=596f8bab476aabed87eaecd14126dd61445488786fc965b0f48dd97d9f0786df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZP3EE6Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHykEepSxW%2ByYHsNfKNySfIDiKXcEVhB1FbP3ddrHDv2AiAHix7d%2FakdcmUbq43sXWCzOvYNVANBB72p%2BH%2Fzge%2BkqCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXq8uF6%2B4QkFR0ar4KtwDkeTyJ1TmBpdwoyDoeDk4YDSwNTGrVBNaMhMofPijl4snaemIocgMDakVOjs0ESC%2Bja2cLlGSJcl7C9UrI5TEuJLm%2BeH8kBH3Qi5YB70L8gRjqYqKhrlc19qlEeHOE9KvYQVEcd75hQZQ3orX42Qbp3Y0e3FBbq86cl51EXeuNEfodgkaiaSQBT0oVAXQXRsmd1z2P6CWN5GxPZY7ql49hTD2u8NcZ66ymyd%2B9GBjv65A4gyPXBUnmrTBRvENGFhDIPDNeKUC59BhrEDaa9ftWu%2F%2BrU%2Bg0UPetbn1iAlxP1eZZhSUewZBCvJGzlZqXxpma0r9GBXL7SoBqjAfc1mgPtWyXskSCH6Xsv2dCeYqVCVz%2F9ixsOFsY3pQ57rmG2eLFg4iPSZs%2BEw3rYjUA6RBOZlw4yBlgiVbI9kYfEKjKR6dHJ0PY99jzVBLXoYOkSo6CtzNVPWKzGao%2BNEoEVa%2BDmPg2RcmYGJ9XwOzu0W1lnMiD8CiP5MxhWABW1TOuErQ0YnO8TzXqSH6C50dCztVDPPDvZEO%2FBAGQN%2Fc8F63SF9l5Y7mUH2UuoUGNTRyZ0adeG6vkudQo1ZYJ%2Bjfo7TDN4bvKkzXV3IsFBryPZeopWGNuxrf8%2BKfUC8gMx0wv464wQY6pgERzlbRmMcFxoyJxFBYEQmr0z22Oxr4LQyad4N750s6UVlK4UxiV6batyxEPrxIWWBvNIc4hYkzMj3PPQaZXl%2FiWsXbUTYH5mv623Xu3dasMwBKWqSxte4%2BiZh68sEWpK0D40ZVzHenVICRBlUTOCQtlaIdjP4Xxg8u1auv1sKnYpBN%2B%2F989YDRuOyMnc9buH0BbZBdPXqZ9DSe6qimwHSkcV3xXVsU&X-Amz-Signature=b414bc571d1e9bfa1c719a43227721acc7587b8e2864079c62c9eecfd2ea3241&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
