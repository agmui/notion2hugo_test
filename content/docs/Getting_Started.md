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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HEXQD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDwGidci6i83vVXOd8Q9bZ2XLSZ%2Bdt%2FBk3pNagDwKccMAiATDLXYJPblLm8D5MKumoH8Qm3fuS6sfXrYiDNEr1mS8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAPft%2B8Vk1ERwizL3KtwDLxEEHxnZ9qNts1itl3o6x3OdQYNrlJBeqEJ4htoiqH%2FfS3QVuSTPC7oPWreqLTJXBhzrpTiPHpATRdvDtLjr3qZQoatU8HVoswhcXtwa7x0YACBbzzNPFDDZg3Ab8CRFTXIUVtSMPsvv5rire1fsjF4bZ1umwiTn8cxhMJ8%2B0niCuyk3l5EPfG6RiX%2FCNz2aOp2zWUW%2FnXpewvIexIVh2NsH0k4Ehfzir9H3kUne2EhMsVB5fC9DBP1%2BdxDCpbJXWk%2BX1hwuB%2B1mQxvVgvH8AOR%2F2uTdpJl5yXAFy2bGVSDGag629bvPTjDtHCzuY8Q%2B8I6RhpAgG%2Fb5b7bUHd8RPrGYYNMCGFhZQapc9h08m2D7Hsq6%2FwWsWL8Vgxu8AtL3gboAsLTSdg42myCSCnRaZIoVVyYhEdTk8ALb04LXP%2B5p%2FKPYtReR3eclsinekiijh1f6rRJjSEhFuc8igb79bxlvIZ%2FepzQsZjbAYa8ZA%2BZltzVd8V3PtSRdu3sglRhz2yOnFkupvzcx9kOAgi9jtTvO%2FimGfR6CSazaiVOBBcGVHIQrrDxu9TZ5vfSvAcHwRr7WSLcyFrEuwozzXVCjzKscUuAUjSCMnTGdvoLFcW3NovoMZt9xtJyI0rcw9vTNwQY6pgF64DQroQt4%2FbC%2FSFjJgf%2Fzik83OH%2FXYjKRtwR8EjYygiE7kfcxKBhFMAyrwsXd209XJ2dDPbqT4sN6IoF0at7UlQkAzK%2FcbXMDk8tHAHkAsKF8frUJBcGe38p4jzBs21pb6rsjGTOpNldIwZKz7izBmhLTcZpPVHp8D%2BoLZWmDhxe%2BPmsNfl6Z1Vqv98%2BUNIydxmAW81NYwJzdU7FY0R%2BIxEh84A3c&X-Amz-Signature=b9be3b55cca197607e9981d5e86a67a597d27519f3d861f5fef9ec3a8cd5d553&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HEXQD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDwGidci6i83vVXOd8Q9bZ2XLSZ%2Bdt%2FBk3pNagDwKccMAiATDLXYJPblLm8D5MKumoH8Qm3fuS6sfXrYiDNEr1mS8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAPft%2B8Vk1ERwizL3KtwDLxEEHxnZ9qNts1itl3o6x3OdQYNrlJBeqEJ4htoiqH%2FfS3QVuSTPC7oPWreqLTJXBhzrpTiPHpATRdvDtLjr3qZQoatU8HVoswhcXtwa7x0YACBbzzNPFDDZg3Ab8CRFTXIUVtSMPsvv5rire1fsjF4bZ1umwiTn8cxhMJ8%2B0niCuyk3l5EPfG6RiX%2FCNz2aOp2zWUW%2FnXpewvIexIVh2NsH0k4Ehfzir9H3kUne2EhMsVB5fC9DBP1%2BdxDCpbJXWk%2BX1hwuB%2B1mQxvVgvH8AOR%2F2uTdpJl5yXAFy2bGVSDGag629bvPTjDtHCzuY8Q%2B8I6RhpAgG%2Fb5b7bUHd8RPrGYYNMCGFhZQapc9h08m2D7Hsq6%2FwWsWL8Vgxu8AtL3gboAsLTSdg42myCSCnRaZIoVVyYhEdTk8ALb04LXP%2B5p%2FKPYtReR3eclsinekiijh1f6rRJjSEhFuc8igb79bxlvIZ%2FepzQsZjbAYa8ZA%2BZltzVd8V3PtSRdu3sglRhz2yOnFkupvzcx9kOAgi9jtTvO%2FimGfR6CSazaiVOBBcGVHIQrrDxu9TZ5vfSvAcHwRr7WSLcyFrEuwozzXVCjzKscUuAUjSCMnTGdvoLFcW3NovoMZt9xtJyI0rcw9vTNwQY6pgF64DQroQt4%2FbC%2FSFjJgf%2Fzik83OH%2FXYjKRtwR8EjYygiE7kfcxKBhFMAyrwsXd209XJ2dDPbqT4sN6IoF0at7UlQkAzK%2FcbXMDk8tHAHkAsKF8frUJBcGe38p4jzBs21pb6rsjGTOpNldIwZKz7izBmhLTcZpPVHp8D%2BoLZWmDhxe%2BPmsNfl6Z1Vqv98%2BUNIydxmAW81NYwJzdU7FY0R%2BIxEh84A3c&X-Amz-Signature=115e2c1016f678e73d9b5265c1c5da49360546aa741c7256854641d8a0e5af2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HEXQD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDwGidci6i83vVXOd8Q9bZ2XLSZ%2Bdt%2FBk3pNagDwKccMAiATDLXYJPblLm8D5MKumoH8Qm3fuS6sfXrYiDNEr1mS8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAPft%2B8Vk1ERwizL3KtwDLxEEHxnZ9qNts1itl3o6x3OdQYNrlJBeqEJ4htoiqH%2FfS3QVuSTPC7oPWreqLTJXBhzrpTiPHpATRdvDtLjr3qZQoatU8HVoswhcXtwa7x0YACBbzzNPFDDZg3Ab8CRFTXIUVtSMPsvv5rire1fsjF4bZ1umwiTn8cxhMJ8%2B0niCuyk3l5EPfG6RiX%2FCNz2aOp2zWUW%2FnXpewvIexIVh2NsH0k4Ehfzir9H3kUne2EhMsVB5fC9DBP1%2BdxDCpbJXWk%2BX1hwuB%2B1mQxvVgvH8AOR%2F2uTdpJl5yXAFy2bGVSDGag629bvPTjDtHCzuY8Q%2B8I6RhpAgG%2Fb5b7bUHd8RPrGYYNMCGFhZQapc9h08m2D7Hsq6%2FwWsWL8Vgxu8AtL3gboAsLTSdg42myCSCnRaZIoVVyYhEdTk8ALb04LXP%2B5p%2FKPYtReR3eclsinekiijh1f6rRJjSEhFuc8igb79bxlvIZ%2FepzQsZjbAYa8ZA%2BZltzVd8V3PtSRdu3sglRhz2yOnFkupvzcx9kOAgi9jtTvO%2FimGfR6CSazaiVOBBcGVHIQrrDxu9TZ5vfSvAcHwRr7WSLcyFrEuwozzXVCjzKscUuAUjSCMnTGdvoLFcW3NovoMZt9xtJyI0rcw9vTNwQY6pgF64DQroQt4%2FbC%2FSFjJgf%2Fzik83OH%2FXYjKRtwR8EjYygiE7kfcxKBhFMAyrwsXd209XJ2dDPbqT4sN6IoF0at7UlQkAzK%2FcbXMDk8tHAHkAsKF8frUJBcGe38p4jzBs21pb6rsjGTOpNldIwZKz7izBmhLTcZpPVHp8D%2BoLZWmDhxe%2BPmsNfl6Z1Vqv98%2BUNIydxmAW81NYwJzdU7FY0R%2BIxEh84A3c&X-Amz-Signature=2c37fecf816f6c73d5b2d634c5f94acbdf3e44465994447fea5c2c5cd0a12ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAP2EUDE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGSh43nRtAAjkIQ0XSjDG%2BZJIP8uW55S2FtkAcQ54y7bAiEAtzhogo3l0n7DnwTsV%2F7EevvD3rdP0a0gEUo%2BBpt3Vscq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJ3tgRAZJe0deR2fGSrcAzULCb%2BFsbk3LIGKhw6VCWQImZO85W%2BGVUY7NpkbBdhH08Vm1XCDthBf%2FlE%2FArEI1YZciEdR6TzOkpGmSfyp%2BKZpR2drAfmyGu%2BFZe3a%2BW3h834FGVdmP6k2DBhZI0WOWsS6mNWXrTlsiKXUYg40bYFQPLQJ%2FHC8VDsI0p2W%2BdgieB%2B7GWM7yG85EhaPKCOScMw1YNsiCnhH1A57z1trdIWByMFq2vKj8PUGKuSC6%2B1wJtutmgAtYtdYpN5x1fWtoNysGLJwlKn%2Bz1WsoAxxZg0H0nNDNHeIaRry3kZMkNHXp9dm2x4NHrkPd1mcSVSjfDQoJWgwJdfNr%2FfVrswh0mvNkQXEyEEoKNMN%2FjuVlrrNFrG0Cy8OhATy6eAs%2FR%2BQUBN6uTzziv7MdUZVQnCGLI2m5IbSn%2BMF6kLDjDp0oJteQR0lOye71MRJTYQmJgghpqsOJn%2F8xGTVLb3h9GhxZz8%2Fo2KZ%2FFuyx45CThBuA1SDr4nb0jGjUH5acLSHphPppS4z0ElgPTztLAirFgOkq4tXKyRt2qAVF2h05AnYqqd%2FN6VpMy1JEL%2FaV65A8f0JXgsi4nAQzJlyUWtLDXcWAvZJLzj7eslFusaJAvu8KSXFNJPui8BoNTHsFWvhMOP0zcEGOqUBgySJv8blT04zuX4dGrIcdzqmH4zCpcRkB7QAjOzHGLtCIHDsJOb%2FNPI6RkhsvJ%2BqRjbd9vtr40ocTmvFoyznn59x0Si0tccifHKloa0AO6SFn8qQGOJoM%2B04jLsWmM1TYdeTdn2YWX4iYQ5h6VPfIcfVJchVUfjNUYR7pra7AsESu47LC7vwT0NW9vAKUDYU9m4Ib3bzOCE19QlUxBhQU7PuU%2B%2By&X-Amz-Signature=de89f961507c50ea33fc61fc6e9f9ba8d533c6530e8a378ec78d0330b8d2310e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVTCWMR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFUYkDQfCvVjp3H7if9%2FINcl6cvx7g9UjP9E5xj4GetAAiEA1rwWaoKPNSv1M33VuUjgXYDXWoNMTdB1BCbpzhS10B4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDB4esYWXV7SiAmEENircAzBp9OpLl6xNecJ1KVOMwLQ%2BsTRax4kxV2n%2BpdiFK8HF6hEsDFxZBJwePZafwIQsv8VpLF0%2FVs%2FovomMAzhNrodbkN1y9GUgsKBV7DqIpviFbBF5UdtADIVJBedo7eFreVGft09U12dsAv2sUA4iIKBW9dzRpwLlJ%2FvMfJdtjJzxt%2FyexmsZOWsWHwqen%2BsoWIFuPfdpAOacPsgTxbPYjibDzlQQU9nItmjN%2F%2BqIWp48FZBeA3HVdvPzhDFEliFbF%2FXisYuffiONE%2BGrerIk%2FuYI%2FLyLYIW1%2BxgmKLau4ZDfs2g0NNbW9gston0Y%2F8ZUfkl1TakUJWtrCnDJPJ18Icrbux5pbdhQzjB7vRJLO5MGnmwtb8FqECpqvHFoEe1ovR8wLeGyCq1QHga4GNF7%2Fg16w3Fhz8UM8rVxhk8t0atTgVtrO7baSQF2FBnpuzM%2BmRM%2B362ZvqaaqBJ9wDi2M9KBdn%2F8E6KSfzCXQVcx5jn8o66esbbFkwxSWOzdYc1x%2FYlAGLZwsSV2FAYuJM5ufak7U88EUubNPCtPMKR%2F3XrIPRWWyEENETe4D4EPXkWs48BCixzNLxztA047er36SGdLeOC7c1O2J4r5W8w3WSJHmWfWhv7%2BjPEKuyM5MKv1zcEGOqUBR92UPiypyeD5pvuZEa7nv5DLVb8%2Bbl8%2F46ok6SAC17zoGYJYejANUr6abnTqs%2Bbw41Mkvmkv7edVBZc0Un%2Bctc5U%2FyYDwxwOOrP%2FR1KUSe443Z8YEBVw5QEwGis6HP9%2FrWhX%2Fv3GG6KQcsl38zMGh23lrAEozYxUplLNKZih22ztKrmPuC6a%2FqAAwk8yKLLdCVxaAtAC0uvR1e5i0cRIPQsxtdn%2F&X-Amz-Signature=a2ede74dcd7a6bc106c1132deeb40e89a69a05d299122b5178b85940e563fa4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HEXQD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDwGidci6i83vVXOd8Q9bZ2XLSZ%2Bdt%2FBk3pNagDwKccMAiATDLXYJPblLm8D5MKumoH8Qm3fuS6sfXrYiDNEr1mS8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAPft%2B8Vk1ERwizL3KtwDLxEEHxnZ9qNts1itl3o6x3OdQYNrlJBeqEJ4htoiqH%2FfS3QVuSTPC7oPWreqLTJXBhzrpTiPHpATRdvDtLjr3qZQoatU8HVoswhcXtwa7x0YACBbzzNPFDDZg3Ab8CRFTXIUVtSMPsvv5rire1fsjF4bZ1umwiTn8cxhMJ8%2B0niCuyk3l5EPfG6RiX%2FCNz2aOp2zWUW%2FnXpewvIexIVh2NsH0k4Ehfzir9H3kUne2EhMsVB5fC9DBP1%2BdxDCpbJXWk%2BX1hwuB%2B1mQxvVgvH8AOR%2F2uTdpJl5yXAFy2bGVSDGag629bvPTjDtHCzuY8Q%2B8I6RhpAgG%2Fb5b7bUHd8RPrGYYNMCGFhZQapc9h08m2D7Hsq6%2FwWsWL8Vgxu8AtL3gboAsLTSdg42myCSCnRaZIoVVyYhEdTk8ALb04LXP%2B5p%2FKPYtReR3eclsinekiijh1f6rRJjSEhFuc8igb79bxlvIZ%2FepzQsZjbAYa8ZA%2BZltzVd8V3PtSRdu3sglRhz2yOnFkupvzcx9kOAgi9jtTvO%2FimGfR6CSazaiVOBBcGVHIQrrDxu9TZ5vfSvAcHwRr7WSLcyFrEuwozzXVCjzKscUuAUjSCMnTGdvoLFcW3NovoMZt9xtJyI0rcw9vTNwQY6pgF64DQroQt4%2FbC%2FSFjJgf%2Fzik83OH%2FXYjKRtwR8EjYygiE7kfcxKBhFMAyrwsXd209XJ2dDPbqT4sN6IoF0at7UlQkAzK%2FcbXMDk8tHAHkAsKF8frUJBcGe38p4jzBs21pb6rsjGTOpNldIwZKz7izBmhLTcZpPVHp8D%2BoLZWmDhxe%2BPmsNfl6Z1Vqv98%2BUNIydxmAW81NYwJzdU7FY0R%2BIxEh84A3c&X-Amz-Signature=34637323f314bdbab14c421b042a33775e6c610a2fa5bb3d0489d2a42817736e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
