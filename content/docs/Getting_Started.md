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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AD42Z5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2B1QyFgl%2F4W%2Bt4GNVd%2BH9VQ%2Fb84cCgGAh39uS%2BIX7kAIhAPcw5fGC99nmhbuWJa7GKhDBlMBKvxSVV%2FehjlfHYrg%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycbrlPfPcXx5c93cIq3AOwrlO1nIhO6Rb%2Bp%2B13sVGUqSti03bBSDTkYGd8PEi4K2UE%2B4uQV6NBPyDM4MdDLViigYb5YZPBmOPK47PtSC3NQ1UoN9Ac8b%2Fn3TaUkj7Rdc93vHpY8Nu4%2Fsho683gtfcxGLOsu2NSiulMvKiiUCi5OU4Hz2hrwkQsNem7z2CY2Q5UY5whdaukiQILRS5ePskgfuyHHnR3ESWBWe%2FOoLBDeDxvPGuJYG6Jl5VOCVx9%2Bcfx8ll3yAouk5PHXLJtCVsV5Dw8Yn51Njhzmz4ktfgEo1G4PcrPABCXNB4g0eRJCfprsai7OKvMxr%2FQ%2FxhUxPT907H6%2B48RiS7w696xFi888wjgIWsNqWOQuC59uSGgGYrJm1doIwMI2Rmz91VyR7SzX4oClOJo09KafBhJDatVzJVP1fIpdFcb7TIevl1m5NoLkJRAJa5sf%2Fdz79AMCMtOBYvVag8OkYJ%2FssJBa7B7XN9xU4c4cKwo50oqtp5Vf7nMGbVSXDEazBwCMywIu3h7CS4BDy2rlSSztsYrOPITQLA15R7%2FYgmNhXSfdTaz45uNbJA2a4pc84pfuZJslELwE89DEANPlcsLOeZRIkRh2lOqw9aIxbyPv%2BKe0UtKV6LZepXBOejalOPD0TDLnLbEBjqkAZajegNrjZfTLpIEHTCUHsdj0G7L3kFyflnyKb2U19lZqN2Lx0QtyAkOBPQ1RK5L1CkxOjAsr1xxYpJY75QbEabyCmnASS2%2Fzf4JjGYgpWNuZUnxi%2BOkndnd2tjWSfYq6LIYdFuBL2hm0%2BoLz%2FVklGY4fMtpJaQfagcXIHzVJokZiZvFKSTrIHWoEMvGWONHYMO2v0zNxiHE32nP6nOoP9IrbiMf&X-Amz-Signature=f1d4cfca35c7373b3757bfcb4e780fcff05d99880d2d622f118f768d2bbd47c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AD42Z5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2B1QyFgl%2F4W%2Bt4GNVd%2BH9VQ%2Fb84cCgGAh39uS%2BIX7kAIhAPcw5fGC99nmhbuWJa7GKhDBlMBKvxSVV%2FehjlfHYrg%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycbrlPfPcXx5c93cIq3AOwrlO1nIhO6Rb%2Bp%2B13sVGUqSti03bBSDTkYGd8PEi4K2UE%2B4uQV6NBPyDM4MdDLViigYb5YZPBmOPK47PtSC3NQ1UoN9Ac8b%2Fn3TaUkj7Rdc93vHpY8Nu4%2Fsho683gtfcxGLOsu2NSiulMvKiiUCi5OU4Hz2hrwkQsNem7z2CY2Q5UY5whdaukiQILRS5ePskgfuyHHnR3ESWBWe%2FOoLBDeDxvPGuJYG6Jl5VOCVx9%2Bcfx8ll3yAouk5PHXLJtCVsV5Dw8Yn51Njhzmz4ktfgEo1G4PcrPABCXNB4g0eRJCfprsai7OKvMxr%2FQ%2FxhUxPT907H6%2B48RiS7w696xFi888wjgIWsNqWOQuC59uSGgGYrJm1doIwMI2Rmz91VyR7SzX4oClOJo09KafBhJDatVzJVP1fIpdFcb7TIevl1m5NoLkJRAJa5sf%2Fdz79AMCMtOBYvVag8OkYJ%2FssJBa7B7XN9xU4c4cKwo50oqtp5Vf7nMGbVSXDEazBwCMywIu3h7CS4BDy2rlSSztsYrOPITQLA15R7%2FYgmNhXSfdTaz45uNbJA2a4pc84pfuZJslELwE89DEANPlcsLOeZRIkRh2lOqw9aIxbyPv%2BKe0UtKV6LZepXBOejalOPD0TDLnLbEBjqkAZajegNrjZfTLpIEHTCUHsdj0G7L3kFyflnyKb2U19lZqN2Lx0QtyAkOBPQ1RK5L1CkxOjAsr1xxYpJY75QbEabyCmnASS2%2Fzf4JjGYgpWNuZUnxi%2BOkndnd2tjWSfYq6LIYdFuBL2hm0%2BoLz%2FVklGY4fMtpJaQfagcXIHzVJokZiZvFKSTrIHWoEMvGWONHYMO2v0zNxiHE32nP6nOoP9IrbiMf&X-Amz-Signature=c44501f5bb91f5c54d3869d9459343ab14a26a0469b8fd116a1c515a5cb9c8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AD42Z5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2B1QyFgl%2F4W%2Bt4GNVd%2BH9VQ%2Fb84cCgGAh39uS%2BIX7kAIhAPcw5fGC99nmhbuWJa7GKhDBlMBKvxSVV%2FehjlfHYrg%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycbrlPfPcXx5c93cIq3AOwrlO1nIhO6Rb%2Bp%2B13sVGUqSti03bBSDTkYGd8PEi4K2UE%2B4uQV6NBPyDM4MdDLViigYb5YZPBmOPK47PtSC3NQ1UoN9Ac8b%2Fn3TaUkj7Rdc93vHpY8Nu4%2Fsho683gtfcxGLOsu2NSiulMvKiiUCi5OU4Hz2hrwkQsNem7z2CY2Q5UY5whdaukiQILRS5ePskgfuyHHnR3ESWBWe%2FOoLBDeDxvPGuJYG6Jl5VOCVx9%2Bcfx8ll3yAouk5PHXLJtCVsV5Dw8Yn51Njhzmz4ktfgEo1G4PcrPABCXNB4g0eRJCfprsai7OKvMxr%2FQ%2FxhUxPT907H6%2B48RiS7w696xFi888wjgIWsNqWOQuC59uSGgGYrJm1doIwMI2Rmz91VyR7SzX4oClOJo09KafBhJDatVzJVP1fIpdFcb7TIevl1m5NoLkJRAJa5sf%2Fdz79AMCMtOBYvVag8OkYJ%2FssJBa7B7XN9xU4c4cKwo50oqtp5Vf7nMGbVSXDEazBwCMywIu3h7CS4BDy2rlSSztsYrOPITQLA15R7%2FYgmNhXSfdTaz45uNbJA2a4pc84pfuZJslELwE89DEANPlcsLOeZRIkRh2lOqw9aIxbyPv%2BKe0UtKV6LZepXBOejalOPD0TDLnLbEBjqkAZajegNrjZfTLpIEHTCUHsdj0G7L3kFyflnyKb2U19lZqN2Lx0QtyAkOBPQ1RK5L1CkxOjAsr1xxYpJY75QbEabyCmnASS2%2Fzf4JjGYgpWNuZUnxi%2BOkndnd2tjWSfYq6LIYdFuBL2hm0%2BoLz%2FVklGY4fMtpJaQfagcXIHzVJokZiZvFKSTrIHWoEMvGWONHYMO2v0zNxiHE32nP6nOoP9IrbiMf&X-Amz-Signature=114bcdc9efe3ceca6e7122a48707510c6ae31526efa343c1b9669e68deca6b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5R2YH5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2ujJLqgbGoG0ALS4huBGF38OaUC%2BBPFAKFVq3egabHAiA%2FUoheXo6GY%2F1BT7jfq5WNFqo%2BdmzMuQIHtmclXmCIbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOMSmj37NY1gWfxpKtwDt1SgF3S%2BOqyGpp%2BZKuQ7hq74B6C%2BvI7rOm1MFY9ZbP1H28QwkMVJJWWo%2FLHbGt4ECmD%2FooED69Ic8Jixt0loMtxquhiczzcMwj98hd0ub8DIz8c1YochwNV2CKTZcU74mItBXYncXA5n8eImgIn4bvesP0If8nBif65N%2FLcuRm5hUDOfpOyIwc7i3k7oBVq46B3by6yAFqgLGYI7Pyo41V5TVab%2FvTv10OnSO3vMnNDpYYCHYHhkB%2BKqh5A6M8w8eRcnyVLGtkBNNZaGdbb1ZqRFb2Rl%2BjIicnoTxCuu5xGze3yvE0V0%2FEEKHR57VEmsXBwnZMkQLfbxwRY2ftHt7Ms3fK254hjaoqRN3w1TEC5KyghZ6VcURErLP2XiF4pfg8O6t3VaoH7nn0fxfD2ifK9O3e5lG5RwprRiOl8oUO39J8SFa%2Fdn6hAr%2FS0f3WVteByljLU6suEa2jw5Nz2bZzFYLtLisIo%2F8XwRgriufr%2FMID2usZvGmiY%2Fd8zzFDhVSRHEhfrqKu4nm87Ex0%2BS%2FSmowX8T%2B2vR6bKyvSsvZlQAeo%2Bc5hFP%2B6eTJ%2BqPJ%2BxAIVljJwh3jNgQiBVtzVivgNNwXjTvMGwkL5948XnE9aAKMJtMDHgamh0zOcsw7Zy2xAY6pgFClIX5ZjxyGjCKcfsPTkKbikmaESqIb40ba9Ib83KQI60RIzH7J%2BPazlrrCTIcyzRWKbZBvZd4MjDf%2FEd68Quybs2hmEQ0jLtSO%2F2qwrL7C0%2F5%2FwKhz9YO%2FRSJeU%2F9ABOHJ4nG7FxPZubZJFrIsy0T28gT1EcZaiGqI%2BLAgZMjWE%2BLHdBj%2FdIyf6O2PZg%2Bh5P%2Fq7jOkPzMHdCKI0D6AK4r4JTmitom&X-Amz-Signature=8503a8f7182140f0ffdaec2613e0e0634c85b27e90e8949800353e987dd00624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO2PDWUE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4QOMidS6%2BlNUOZY6nMzgrHGxanu2KNxPFtxXlAlf7KAIgZVQJJZUJJFr4TugYbPljMiON2NjS%2F3Wsj%2BoFKo661vgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDymYPWdUhi69LDvjCrcA5hyggrTgfQYbFZpwJ3ATBpReC6Mre2z3aM6j0MKR7izjvX09yB%2BExRomI59O9xdEPUDgjNCA9exUFspNX1qi%2FR77ooA4z9r81YhxHXagZhHWw08KrUwOw23W9cJhuVM0ZdnnsY4v4WXNM8Tej3GIMiI6dRKkctDxQZMK5qvvLmanRlboGIefOCnZxwOGcHar2H4jSFiCw%2BNwmilna0ycxWVkMtCFLlEh0G%2B6MFPKsFbQnT7IYHElxD3legRo21A4ZIcVZMDmHmE5QoIbhwbRM%2FMkyfg%2F1EPFj63DfJCWi2v%2FEFpn2WrhQwfk6z908eMowJ4kldkbFxl9YjVw9Wo4JRaaDTTCR%2F2sUgPz6Va%2B6WWhjbiFdnQRHsDlKPdCXd6SkP4%2FSgkjtG8ehLqjShqhl2TSOdMOayts8CI6KzPYkyR7SXBKBG3if%2BT8%2FovhXK30qi2EKu%2Fn%2BNUnm7bOGiroBjfIHlOfNnsTGOFO9%2FqeH2T0fuQQULgJIcqhK5TROfZB%2BaZQcMaV%2Fmw1%2F1qWv6MlitxruzGtps%2FURvO76yHPnafL5%2BrK0n076LUTjDOAmsBSNJrWahGlNnipdaEZ2rjb2IPoNL1IgC4o9YXJCaTkcUspSS0oVoyEJWHLJTkMNactsQGOqUBTu34qVawJ3yEg5r0YhG1NAsxFe9lu7iOJFBeQU22MH%2BMI7x73nOgEaoZe4txQN269dQDQiYdX2xgxCwEdXJG2gPX4RwJTGN080mF18XwLpNrXhup0JJPgVukhUaLnre3Lq3uhcMcgQogq9cpZwd7w75GKQsxlCRI9oAAAeKUr0ELmeTQk1nmSlWW7O9i0P8wFv%2FsufvQYkzij%2BF0N3UM6AZbNDLP&X-Amz-Signature=bacdd19ace81c13f6657842ddf529033748095c065aac126df1324556c693b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AD42Z5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2B1QyFgl%2F4W%2Bt4GNVd%2BH9VQ%2Fb84cCgGAh39uS%2BIX7kAIhAPcw5fGC99nmhbuWJa7GKhDBlMBKvxSVV%2FehjlfHYrg%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycbrlPfPcXx5c93cIq3AOwrlO1nIhO6Rb%2Bp%2B13sVGUqSti03bBSDTkYGd8PEi4K2UE%2B4uQV6NBPyDM4MdDLViigYb5YZPBmOPK47PtSC3NQ1UoN9Ac8b%2Fn3TaUkj7Rdc93vHpY8Nu4%2Fsho683gtfcxGLOsu2NSiulMvKiiUCi5OU4Hz2hrwkQsNem7z2CY2Q5UY5whdaukiQILRS5ePskgfuyHHnR3ESWBWe%2FOoLBDeDxvPGuJYG6Jl5VOCVx9%2Bcfx8ll3yAouk5PHXLJtCVsV5Dw8Yn51Njhzmz4ktfgEo1G4PcrPABCXNB4g0eRJCfprsai7OKvMxr%2FQ%2FxhUxPT907H6%2B48RiS7w696xFi888wjgIWsNqWOQuC59uSGgGYrJm1doIwMI2Rmz91VyR7SzX4oClOJo09KafBhJDatVzJVP1fIpdFcb7TIevl1m5NoLkJRAJa5sf%2Fdz79AMCMtOBYvVag8OkYJ%2FssJBa7B7XN9xU4c4cKwo50oqtp5Vf7nMGbVSXDEazBwCMywIu3h7CS4BDy2rlSSztsYrOPITQLA15R7%2FYgmNhXSfdTaz45uNbJA2a4pc84pfuZJslELwE89DEANPlcsLOeZRIkRh2lOqw9aIxbyPv%2BKe0UtKV6LZepXBOejalOPD0TDLnLbEBjqkAZajegNrjZfTLpIEHTCUHsdj0G7L3kFyflnyKb2U19lZqN2Lx0QtyAkOBPQ1RK5L1CkxOjAsr1xxYpJY75QbEabyCmnASS2%2Fzf4JjGYgpWNuZUnxi%2BOkndnd2tjWSfYq6LIYdFuBL2hm0%2BoLz%2FVklGY4fMtpJaQfagcXIHzVJokZiZvFKSTrIHWoEMvGWONHYMO2v0zNxiHE32nP6nOoP9IrbiMf&X-Amz-Signature=fdcf7f0e9a90a31c71b3d95848ff13da29526836e83b62002d431444c8000a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
