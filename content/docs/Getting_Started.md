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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GA7Q7IX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzNozJj1n0rIwhuZ8Vlt9txir15YQ%2FxXpMVuGMN%2FHCVAIgPcQRQuvjOvJLzBkQQ80%2BLqf3tfb6bBrLlD5hlrQYt74qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2Bc%2FXqYxGC6eTo%2FyrcA%2FrFbsbdtmkqgKCGOEn85vg9%2B4UOsHUyW33q9Jwk1lOsmohM9eXMIi7S0paRNYFmsUwwvnt0AuEDroivDqWisKZw4XH5iTyHnXMM1JJmDdl341EqNyR3lnaBnfiv3jBYC84fTmgR1tw1clPljaYLOK8edEdYbKb4gQnENzp1yWvjPkKLtET2Ib%2BX6c7VGElpTDP29j3zISRxpVo5vQKXs1VdPtGXIWWwAk%2BWSq5dnOMz8wa7pxF%2Fb3jPe5BYDGkuUpM6%2FsazI%2FFln8i2Ba53uaWQ%2FlG0JgNEGi8DuDtn7ZHxQANNT3SOWn9sLkDy0RDkA%2Fz9fgoQhKHohT7eQZBa40cJ2D9%2Fm%2BFvIFjYzC7uGFKTLSJ0fwvfFBe%2Fkz0vZv6UDgfD21NbS142eW8rFgngDr0F2fTlLMI7ZvB7GnP4JfABCmJNhlqBDlxye3VypK2Q3FJflkv4D2PcgpP90cSkeyafxx7vXHQxYoEuQuEkZRs6s3NudtVAFLWm4%2FrPSfe48JWd3%2F7KVg9VXEL5Ts51MrYX2yqpVfBC3dTyJ%2FTyVyh5fH945igllY4QkhxxZHPctNL4k9Cd2ZDzK54HQZxclZudbJoM5%2BEFkjgjdHMCxBiSug16vcFiMgHR75%2BNMJzLt8MGOqUB2FfgZff3nV9rQuoGK78tJRnkNDO0cYnUbxvlJja0ytvwei4kwTqakMprzBdGHIqTPuGgVIHI43unU1%2Bw%2F5NvI2D8RP0Z4ljXxB8C%2FtDcmOFwgzbg2NCpQk62MSHQj1i33yJooVZhTRxpcu4kVbvW9rS46g%2BDvQgbS4TEfXgKhILxTqTRWjze1%2FNSxpM0pdcjhFhZGTbQduEm9H5SGicPbRC4mTIJ&X-Amz-Signature=9d962cc994061e1ee6026e1a10b82bcbd8ff471f021b70ab4d44f023220ba051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GA7Q7IX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzNozJj1n0rIwhuZ8Vlt9txir15YQ%2FxXpMVuGMN%2FHCVAIgPcQRQuvjOvJLzBkQQ80%2BLqf3tfb6bBrLlD5hlrQYt74qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2Bc%2FXqYxGC6eTo%2FyrcA%2FrFbsbdtmkqgKCGOEn85vg9%2B4UOsHUyW33q9Jwk1lOsmohM9eXMIi7S0paRNYFmsUwwvnt0AuEDroivDqWisKZw4XH5iTyHnXMM1JJmDdl341EqNyR3lnaBnfiv3jBYC84fTmgR1tw1clPljaYLOK8edEdYbKb4gQnENzp1yWvjPkKLtET2Ib%2BX6c7VGElpTDP29j3zISRxpVo5vQKXs1VdPtGXIWWwAk%2BWSq5dnOMz8wa7pxF%2Fb3jPe5BYDGkuUpM6%2FsazI%2FFln8i2Ba53uaWQ%2FlG0JgNEGi8DuDtn7ZHxQANNT3SOWn9sLkDy0RDkA%2Fz9fgoQhKHohT7eQZBa40cJ2D9%2Fm%2BFvIFjYzC7uGFKTLSJ0fwvfFBe%2Fkz0vZv6UDgfD21NbS142eW8rFgngDr0F2fTlLMI7ZvB7GnP4JfABCmJNhlqBDlxye3VypK2Q3FJflkv4D2PcgpP90cSkeyafxx7vXHQxYoEuQuEkZRs6s3NudtVAFLWm4%2FrPSfe48JWd3%2F7KVg9VXEL5Ts51MrYX2yqpVfBC3dTyJ%2FTyVyh5fH945igllY4QkhxxZHPctNL4k9Cd2ZDzK54HQZxclZudbJoM5%2BEFkjgjdHMCxBiSug16vcFiMgHR75%2BNMJzLt8MGOqUB2FfgZff3nV9rQuoGK78tJRnkNDO0cYnUbxvlJja0ytvwei4kwTqakMprzBdGHIqTPuGgVIHI43unU1%2Bw%2F5NvI2D8RP0Z4ljXxB8C%2FtDcmOFwgzbg2NCpQk62MSHQj1i33yJooVZhTRxpcu4kVbvW9rS46g%2BDvQgbS4TEfXgKhILxTqTRWjze1%2FNSxpM0pdcjhFhZGTbQduEm9H5SGicPbRC4mTIJ&X-Amz-Signature=d2ba4135053ac1b0070d86b8ad3e00a0a3c4900cb0934328f0f2e90237fdeeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GA7Q7IX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzNozJj1n0rIwhuZ8Vlt9txir15YQ%2FxXpMVuGMN%2FHCVAIgPcQRQuvjOvJLzBkQQ80%2BLqf3tfb6bBrLlD5hlrQYt74qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2Bc%2FXqYxGC6eTo%2FyrcA%2FrFbsbdtmkqgKCGOEn85vg9%2B4UOsHUyW33q9Jwk1lOsmohM9eXMIi7S0paRNYFmsUwwvnt0AuEDroivDqWisKZw4XH5iTyHnXMM1JJmDdl341EqNyR3lnaBnfiv3jBYC84fTmgR1tw1clPljaYLOK8edEdYbKb4gQnENzp1yWvjPkKLtET2Ib%2BX6c7VGElpTDP29j3zISRxpVo5vQKXs1VdPtGXIWWwAk%2BWSq5dnOMz8wa7pxF%2Fb3jPe5BYDGkuUpM6%2FsazI%2FFln8i2Ba53uaWQ%2FlG0JgNEGi8DuDtn7ZHxQANNT3SOWn9sLkDy0RDkA%2Fz9fgoQhKHohT7eQZBa40cJ2D9%2Fm%2BFvIFjYzC7uGFKTLSJ0fwvfFBe%2Fkz0vZv6UDgfD21NbS142eW8rFgngDr0F2fTlLMI7ZvB7GnP4JfABCmJNhlqBDlxye3VypK2Q3FJflkv4D2PcgpP90cSkeyafxx7vXHQxYoEuQuEkZRs6s3NudtVAFLWm4%2FrPSfe48JWd3%2F7KVg9VXEL5Ts51MrYX2yqpVfBC3dTyJ%2FTyVyh5fH945igllY4QkhxxZHPctNL4k9Cd2ZDzK54HQZxclZudbJoM5%2BEFkjgjdHMCxBiSug16vcFiMgHR75%2BNMJzLt8MGOqUB2FfgZff3nV9rQuoGK78tJRnkNDO0cYnUbxvlJja0ytvwei4kwTqakMprzBdGHIqTPuGgVIHI43unU1%2Bw%2F5NvI2D8RP0Z4ljXxB8C%2FtDcmOFwgzbg2NCpQk62MSHQj1i33yJooVZhTRxpcu4kVbvW9rS46g%2BDvQgbS4TEfXgKhILxTqTRWjze1%2FNSxpM0pdcjhFhZGTbQduEm9H5SGicPbRC4mTIJ&X-Amz-Signature=6ff9f2c2d26a8c1c81f24a38a438bc04e3232a5e0e75f7f3450966b5b74bdf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNJM4HB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIy7FCCWe8ehiJwuV5L1qOT7wMiRj%2Bqfzw%2FmElq0Zs1AiAMOg2qmKTnUSJMHgXl7oXHzWHLY1yG6jN%2BXGx0qGHQFSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfnowFo%2Bldhd%2FNDAKtwDAroVhgtx6%2FobcFGapuhaMdRJSvdhMFSOLiVBPrfA1cbtCiuxSOX4CP9fCAe%2B9j%2FEaKKu%2B25YUQfZ3IZuiMA%2F6yzwO9%2FFxzhvrJ8eY89HzPtt7YmSs%2FUDRRVsK3Y2xx4J8UmLBmV01ot3DLzsOD38BlR%2Biq%2B91Z%2BCk67UmDcK4e8cVzZnp1l8%2BNN8hD0dGXDYwPATfDG6FiZ64QQp%2FYPxFrqFMsyUD1GUzhV%2BwMrmpiw6eD2fGv4VwKBsQ85TYglyHTkueJbfcEgr27pVnGa0eemyfO0rE3gZKMZ8oaiA%2FMDaem8peqUVHge%2FpwgCTlZoOkKrZ%2FBeoetYsz5TzY2iNpifk61VymQJG%2Fo0ntvFuCJCh2GAC1a7GMOLiPSkbEJquJHttrFDhq%2FjS93KWk%2BJnhJS2jVTEjO566SZf1MePczsJbIdEm0XEWa7Zw9h%2Fr65mHVUWTOFUEKtI7SEX%2BiA%2BQltdEcCopc7sstLvAp0h8%2BaBqA%2FCjhKRvcsEOQVIw3MlK%2Fi%2FeasPHNk%2FSfABd9TGyEyOtdFQ%2B3Mgn%2FCn7jNjJrxeQcRys24oSwC4Gu9LT8jdD7%2F%2F9bcr1Nqokvi7WkZu1y%2F87uqJK5AqWzgRHN1%2BG3O5tC0sJzQpvFOpcww3se3wwY6pgGA4SdS2F8%2B%2B5aUfyaSXVktVYEXZZyNat8g0nO1Iiy3%2FUAMZHjW8Eh7pOOv%2Bm0wyBvFHlG%2FQKNwubEoV%2FbIeFRJwY5TxFyzjbSln5zIdXUJn64dT5nBifLTaGKKjX3nc2JwdoijAMwdsP0kI4YZlvICEYxlWAerlhA%2BZzS0HhbvLVN6ZLxgqgUKCZ76RiIjBeh8%2F611vWLyN6%2FltsqpHgxPneaU3uws&X-Amz-Signature=1bb495bdcfd6715a1e30dc00bed3f71dc9f6c35309b36df0e21daa817e4c6a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TFNA6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxHmykXaipcp5LzFacW4Sozk0nonqses1ApIrI5xdzlgIgVKFyxUMA0SAawWiqOzjDaRkJpxf4BlGXoO8pcg%2FsPnwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs1YWNxRK3NxQSGfCrcAzXsGKfe7IAi784%2FbCS9R%2B9kYMVHR5NpeepoVZFtTcSjCfYT7l2xse94q%2B1jCcheSajfn50DQIGRNJlu4kILimhsE6neMWEsh2PQzB30sd7SWIlr1CgDkppwyQOWL4t6f2bsGNeG8MrSkiFW7hp3oh1JJZkkDGRKKc%2FDtQvmRF6g0rrhx9i3BZjVdNiOW5yEOUhQCGERofBhSxCKtqFoel2fo%2FcNmJis7SzQxBHu9NJbvqX77DTc9SBqnzuDoai4Fd0FAn2tpBgr%2FWpplVR9mVsYuN%2Fd7KpJFtefkK0wTR5cL1%2B549RX%2Fkz9%2BCKADxX9JAfus7RRIQVzDRLCo0IxhJAk3PEl3Y%2FRwR3eq0c0KOyAktqx7zLLRSibXm1ondMWRLqYdLajGrXQw9yPQMR9ukfubGOqkqdbtTSBKl2pvslYn3IpTdndj7wODhcvNG2u2GeqCQPs4aZlpvHmXCfIr8w4ssfegvr4cOiMTQWTekkvmp1pu7WPOph%2B1sd7D2YD4sDLIyxzoOr4r5J5ftCQ7EFIWyRNquKnIUw7WbS1nBy3sDv1dQcZXwfv69%2FW3SIHP8dEItcDguPVZ5Cjf60mQqhkIQs8ZVbU0jmLUO9%2Bssx01tl4bt9s2Ot0bjjcMNPKt8MGOqUBGr7%2B7ABz3fhbCj1M7ZampBVNO%2FSGaabBHIS69DshlT66sPQCgkee6JqG%2BRlRzw2p%2FoHC%2BnyHDqKHWRs27iZynE0NVr6ECZNKgSvwfvK4pk36ux27LNXxX5WEhJl%2B%2FByzXPG7nNTlsyCLADMfJUUYuayvARQefbQHDhbBSfND1TJv00KKrIxHyVZQJuFz%2BoRueKQKO20pt5RkmRIhKvJ22lo5GMMS&X-Amz-Signature=5107b8854b9144166e55576e706b1daeb444e5f2237c5988e909b151ca602c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GA7Q7IX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzNozJj1n0rIwhuZ8Vlt9txir15YQ%2FxXpMVuGMN%2FHCVAIgPcQRQuvjOvJLzBkQQ80%2BLqf3tfb6bBrLlD5hlrQYt74qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2Bc%2FXqYxGC6eTo%2FyrcA%2FrFbsbdtmkqgKCGOEn85vg9%2B4UOsHUyW33q9Jwk1lOsmohM9eXMIi7S0paRNYFmsUwwvnt0AuEDroivDqWisKZw4XH5iTyHnXMM1JJmDdl341EqNyR3lnaBnfiv3jBYC84fTmgR1tw1clPljaYLOK8edEdYbKb4gQnENzp1yWvjPkKLtET2Ib%2BX6c7VGElpTDP29j3zISRxpVo5vQKXs1VdPtGXIWWwAk%2BWSq5dnOMz8wa7pxF%2Fb3jPe5BYDGkuUpM6%2FsazI%2FFln8i2Ba53uaWQ%2FlG0JgNEGi8DuDtn7ZHxQANNT3SOWn9sLkDy0RDkA%2Fz9fgoQhKHohT7eQZBa40cJ2D9%2Fm%2BFvIFjYzC7uGFKTLSJ0fwvfFBe%2Fkz0vZv6UDgfD21NbS142eW8rFgngDr0F2fTlLMI7ZvB7GnP4JfABCmJNhlqBDlxye3VypK2Q3FJflkv4D2PcgpP90cSkeyafxx7vXHQxYoEuQuEkZRs6s3NudtVAFLWm4%2FrPSfe48JWd3%2F7KVg9VXEL5Ts51MrYX2yqpVfBC3dTyJ%2FTyVyh5fH945igllY4QkhxxZHPctNL4k9Cd2ZDzK54HQZxclZudbJoM5%2BEFkjgjdHMCxBiSug16vcFiMgHR75%2BNMJzLt8MGOqUB2FfgZff3nV9rQuoGK78tJRnkNDO0cYnUbxvlJja0ytvwei4kwTqakMprzBdGHIqTPuGgVIHI43unU1%2Bw%2F5NvI2D8RP0Z4ljXxB8C%2FtDcmOFwgzbg2NCpQk62MSHQj1i33yJooVZhTRxpcu4kVbvW9rS46g%2BDvQgbS4TEfXgKhILxTqTRWjze1%2FNSxpM0pdcjhFhZGTbQduEm9H5SGicPbRC4mTIJ&X-Amz-Signature=0c5fa69c114feb69c2dba60a63dfec9edb1aff5be5b010f6204486a1fc876493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
