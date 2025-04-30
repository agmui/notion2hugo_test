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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUV6E4H%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDGHSvNM4qMG1C010gEJhxkEWE3NxzQq21uUMczcYh5vQIhAJv%2F5v%2BFKPwZnEx55wZbtremZ09y5UMjPkmu8ytNzvUVKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzECYFVPBWUVrpTmtEq3AMSmZn6V%2FfnLmNq1iu3tFsRAtJeCkhwtNeV4tfCVqDhdmbCltWhQU7Qzp3nsWJlL%2BgIpI7jqi6JEc4pZSVeYPjqXxBb0Psw1kcxLLVG8TmxbHtSxrwVRe6KZQpJ2DFGNFHFzYeOhRwOtj%2FZ3scUZj4DU5jckuYHk2vFELO9%2FJepob2yxEyItMgv9pBjdqJjsMhGiqZse6SLHZJ9wmmsYmEGDAVtoVCaTrG5j7LyWNsPaCc9glNSR0FLAtzCLxB%2Bj1CO1XOM5KHhKcKpWCz5%2FEH8vVw3eHWMfll4E5pRXJjI4u76ICUqTbiT0QVHuDoZL3zX1j0bAKnLXX0937SgGABLY6%2FaaTHo5dg6aB%2BCXWnikdzOkQMr5E8BAe4Nyp204rV%2BsDWcMdT%2BMYGbliMpbwD3iKysbaWyQNCWHTwsYSiMjJ6aT25Nff0UQfGopyxNCY%2BtF%2Bwe2ZpgQBjH%2F8pstSKgolcd0QrTs1MSHQxfiYAAVOUSsfzXNkRTH0T7M2Zt2f6QRckVSQKz3gbwj8bv68fDCoauFJSY2%2BlomAKvLdNspAnVa35sbTKez6MWOrLDI%2BrmNNSyc%2FUp1fAsdrdXnH1U2yKm%2FX8OQXDPJyhFIm9ZaL0Wpxj1rInJZT2MvDC6ncnABjqkAS0a3h%2BQWomEz19Q%2FmtXLOKw%2FHpaTT62SxvFStF1%2BNyr%2B5bH20z7j0tST33oCSbDNbYFmWGgemYw9Za%2BzIn6eOUv4Udx7BKsvdqlS7PfSrP0pdS6M7LOuIqU2j1o4ntHSp2kV26%2BrQD20p6FM%2BgTnhztexJK66c%2FzjqPQQNRx0HBa9NEWoUeMrCOnIf2cI%2FXtcWfVsHKeHabBAQ67XATs1axD8E3&X-Amz-Signature=992fdbb23186c35501fe8b607006a9288acc9e89cfb42eb6845e6bd053a09156&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUV6E4H%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDGHSvNM4qMG1C010gEJhxkEWE3NxzQq21uUMczcYh5vQIhAJv%2F5v%2BFKPwZnEx55wZbtremZ09y5UMjPkmu8ytNzvUVKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzECYFVPBWUVrpTmtEq3AMSmZn6V%2FfnLmNq1iu3tFsRAtJeCkhwtNeV4tfCVqDhdmbCltWhQU7Qzp3nsWJlL%2BgIpI7jqi6JEc4pZSVeYPjqXxBb0Psw1kcxLLVG8TmxbHtSxrwVRe6KZQpJ2DFGNFHFzYeOhRwOtj%2FZ3scUZj4DU5jckuYHk2vFELO9%2FJepob2yxEyItMgv9pBjdqJjsMhGiqZse6SLHZJ9wmmsYmEGDAVtoVCaTrG5j7LyWNsPaCc9glNSR0FLAtzCLxB%2Bj1CO1XOM5KHhKcKpWCz5%2FEH8vVw3eHWMfll4E5pRXJjI4u76ICUqTbiT0QVHuDoZL3zX1j0bAKnLXX0937SgGABLY6%2FaaTHo5dg6aB%2BCXWnikdzOkQMr5E8BAe4Nyp204rV%2BsDWcMdT%2BMYGbliMpbwD3iKysbaWyQNCWHTwsYSiMjJ6aT25Nff0UQfGopyxNCY%2BtF%2Bwe2ZpgQBjH%2F8pstSKgolcd0QrTs1MSHQxfiYAAVOUSsfzXNkRTH0T7M2Zt2f6QRckVSQKz3gbwj8bv68fDCoauFJSY2%2BlomAKvLdNspAnVa35sbTKez6MWOrLDI%2BrmNNSyc%2FUp1fAsdrdXnH1U2yKm%2FX8OQXDPJyhFIm9ZaL0Wpxj1rInJZT2MvDC6ncnABjqkAS0a3h%2BQWomEz19Q%2FmtXLOKw%2FHpaTT62SxvFStF1%2BNyr%2B5bH20z7j0tST33oCSbDNbYFmWGgemYw9Za%2BzIn6eOUv4Udx7BKsvdqlS7PfSrP0pdS6M7LOuIqU2j1o4ntHSp2kV26%2BrQD20p6FM%2BgTnhztexJK66c%2FzjqPQQNRx0HBa9NEWoUeMrCOnIf2cI%2FXtcWfVsHKeHabBAQ67XATs1axD8E3&X-Amz-Signature=d725adbfe369408775a1b60cd807b7d58df154695c5fbfe1af3e124302d04c36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUV6E4H%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDGHSvNM4qMG1C010gEJhxkEWE3NxzQq21uUMczcYh5vQIhAJv%2F5v%2BFKPwZnEx55wZbtremZ09y5UMjPkmu8ytNzvUVKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzECYFVPBWUVrpTmtEq3AMSmZn6V%2FfnLmNq1iu3tFsRAtJeCkhwtNeV4tfCVqDhdmbCltWhQU7Qzp3nsWJlL%2BgIpI7jqi6JEc4pZSVeYPjqXxBb0Psw1kcxLLVG8TmxbHtSxrwVRe6KZQpJ2DFGNFHFzYeOhRwOtj%2FZ3scUZj4DU5jckuYHk2vFELO9%2FJepob2yxEyItMgv9pBjdqJjsMhGiqZse6SLHZJ9wmmsYmEGDAVtoVCaTrG5j7LyWNsPaCc9glNSR0FLAtzCLxB%2Bj1CO1XOM5KHhKcKpWCz5%2FEH8vVw3eHWMfll4E5pRXJjI4u76ICUqTbiT0QVHuDoZL3zX1j0bAKnLXX0937SgGABLY6%2FaaTHo5dg6aB%2BCXWnikdzOkQMr5E8BAe4Nyp204rV%2BsDWcMdT%2BMYGbliMpbwD3iKysbaWyQNCWHTwsYSiMjJ6aT25Nff0UQfGopyxNCY%2BtF%2Bwe2ZpgQBjH%2F8pstSKgolcd0QrTs1MSHQxfiYAAVOUSsfzXNkRTH0T7M2Zt2f6QRckVSQKz3gbwj8bv68fDCoauFJSY2%2BlomAKvLdNspAnVa35sbTKez6MWOrLDI%2BrmNNSyc%2FUp1fAsdrdXnH1U2yKm%2FX8OQXDPJyhFIm9ZaL0Wpxj1rInJZT2MvDC6ncnABjqkAS0a3h%2BQWomEz19Q%2FmtXLOKw%2FHpaTT62SxvFStF1%2BNyr%2B5bH20z7j0tST33oCSbDNbYFmWGgemYw9Za%2BzIn6eOUv4Udx7BKsvdqlS7PfSrP0pdS6M7LOuIqU2j1o4ntHSp2kV26%2BrQD20p6FM%2BgTnhztexJK66c%2FzjqPQQNRx0HBa9NEWoUeMrCOnIf2cI%2FXtcWfVsHKeHabBAQ67XATs1axD8E3&X-Amz-Signature=32e8cd4f6277a88572e3225c4d38c242506ea072cf90e6131654b5700f4cfa0c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR73SFNA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC5XrJ2lch3c0AGQLW3wGW0fx5bfSxnPe%2FCZAVFK8%2F%2BTgIhAMnPxcYeze7lVMwYcH32iEnnL3bINMMs%2BqosI7W%2BKKwDKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgTn3ZDIKEUTRORy0q3ANForJI3lT8q18gXT%2Bl689u9n7lScxmJQnLdyAsSJn%2FADOrV8UPbaD5UVeG4%2Bz9pQqZYPf%2BRA%2FHdSnmcSxsS%2FqF49BXZnuwa21ElkVSRTU0sImjaxKkbYS68mc8PnXjH%2Bb83mN09c%2FpwW6UDQw4Dyg5srVUsMxQKR62eNbRi5nYU3QuxPIMq8yq6VJ2ruK%2FkWDNgTzMyNDATZfirMtSOv7wvvDnfoPzmAq5XNtZKXPQjXyr6deJ2t2iwvUdaVMAH%2FhEa1Hr7fdU2O8Ry4H6YVtoXVhkE0k97r9L0snxWBoXZrtzf9s9yKLyKjVmbfBbbC2anb5A%2FV5Q8snCenA8UvySDYvxbSbhvqKx5vZI6PQpwMYJDdUS7dzKLTnovuJjA2AO9SNiLx44PwdauzCMxhHOeSPbblMNavUshNBPfziIEdVt3hiVJugT70PP4imgxDNTsrP7pNDO9coTuX8gwa4m6ZJVtyQU%2BLHoM0KoIdzqNwvE4VK1T%2BgDmQajjkf%2FQsDCVDXrOeHDFJHJ%2BiZa4qKnED1kq3QnRWfGOBa2f1s817Jw4YACfA8kVTpLpM%2FSezzgCDEH4bkcqVi5by6oHyis0EtPgjeYiY4g2G0wjAcS%2FL5sApfivFtWZz0f2zDwncnABjqkASl%2BZITVxCIGWXpvI6CjssN54a%2Bm0uU3yS8L3kvh%2BL6ZWu522PkGZOQif9xDShjL%2FiXaMGaQ0GFnzo7wDkoXVJlWOd8GLOXFd9gB7zhM4oAkjj9qb1ahmD1%2FHxdkkHtDH4RmewX5GLFjAvlMBmqr8iBoPWZ17aCCzD9%2BYdes3DNk%2B6MstExs%2B28Z5X%2BHjWx1lSjhede%2BAoCJ54Z4Nwgoee1NAuEt&X-Amz-Signature=83b57c3a4ef603d97b6d4b8c721a09a81153b5f5d733f578cc79784d50b5122b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26WGQGP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDkFRX5tJ1c%2Fi17UamAIzDE96our%2FOsyHokGVRwS9j7NAiA8t2QNQFD77546CY2XasnnuYpYkQGSzwaUXBmPYJukfSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgVIP9o23tg3ANYWsKtwDriIxld8BH0t65A7iRDTeVhbtSWyb5tkU%2BDtx9nYzrLegFjzY662349yWpyCuUCHOELVkx9XR8GowNgm0hC%2FmwH2zjaGgqUnUBXTVjOVZ%2BImiXYe5wEwlYl4LaC826hVXOPxk0WdLM36pBWezfHwQEsbo4PbAu2YQMUv4ZXsfo2D6BHT9Gus0F5KkGQ1GoYBX9Z5GD6c%2F%2Bufior0k3Np47Zqmiv8jTeit%2Fi0Q5VqTuJ4WRTkttnw3LAUsJNY9o%2B15bD%2BWfRBnzV8H3dT6glYCXXNKDXK9HybSJziqqj5fKtSik5bV6b2NznsX76HIkvmc2fxkq3%2Fq7cT4gq4qGsfhS50zaYTRk9ultG3KNatnDp3PPOODkPsw9%2B7jl0FXmrYC7gWaZ3wFhMJ43cOj9AcH9mSXZ09tgIwbkd%2FLc9ByfeidYihSOuYVpwqHi%2F%2B0mujAT4PfxJfEesS10YhJ3%2Bsmd3EqsRXQ%2FuDQ%2F7EujmFjTP%2B1GwJE4C35vDpgH1XByjA6YyDfToGm5MifYzuzVP5lzvuK39Tytp5l%2BLUBd7vKAgFe5uGg5hM0F77bD%2B%2B8HFNHA2%2FZJYmgAruqmvYzqhSOXp4thlg8drE8ywTlQuN3qCtvxaYjM7R5ZQGVC%2B8w1p3JwAY6pgHrn%2B33TXgnZ%2Fci7dwoXy1S4rJNNWps%2BEeGXGJLeA9z8RHUM%2FqOv6LxgQyt48eMPVvbQJTZeIT69qekpuCm5p6rj4XtU3ughX2nuXy%2BNHJa9lQ1otLGDYR%2Fx50soenL4E5MLQG0KZmgJhhDslXxzC6%2FQyByhCOU75mvMjPuwU%2FkM1jPwmGP5n8L3q%2Bc6dRe5YIHNp1kaNBvnQ4T5CIaiVe7u7ulGDm6&X-Amz-Signature=d12246258c01c5195c7d75d6371b10a03b8595ede8971f5930bd5e19d4cb9e95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUV6E4H%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDGHSvNM4qMG1C010gEJhxkEWE3NxzQq21uUMczcYh5vQIhAJv%2F5v%2BFKPwZnEx55wZbtremZ09y5UMjPkmu8ytNzvUVKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzECYFVPBWUVrpTmtEq3AMSmZn6V%2FfnLmNq1iu3tFsRAtJeCkhwtNeV4tfCVqDhdmbCltWhQU7Qzp3nsWJlL%2BgIpI7jqi6JEc4pZSVeYPjqXxBb0Psw1kcxLLVG8TmxbHtSxrwVRe6KZQpJ2DFGNFHFzYeOhRwOtj%2FZ3scUZj4DU5jckuYHk2vFELO9%2FJepob2yxEyItMgv9pBjdqJjsMhGiqZse6SLHZJ9wmmsYmEGDAVtoVCaTrG5j7LyWNsPaCc9glNSR0FLAtzCLxB%2Bj1CO1XOM5KHhKcKpWCz5%2FEH8vVw3eHWMfll4E5pRXJjI4u76ICUqTbiT0QVHuDoZL3zX1j0bAKnLXX0937SgGABLY6%2FaaTHo5dg6aB%2BCXWnikdzOkQMr5E8BAe4Nyp204rV%2BsDWcMdT%2BMYGbliMpbwD3iKysbaWyQNCWHTwsYSiMjJ6aT25Nff0UQfGopyxNCY%2BtF%2Bwe2ZpgQBjH%2F8pstSKgolcd0QrTs1MSHQxfiYAAVOUSsfzXNkRTH0T7M2Zt2f6QRckVSQKz3gbwj8bv68fDCoauFJSY2%2BlomAKvLdNspAnVa35sbTKez6MWOrLDI%2BrmNNSyc%2FUp1fAsdrdXnH1U2yKm%2FX8OQXDPJyhFIm9ZaL0Wpxj1rInJZT2MvDC6ncnABjqkAS0a3h%2BQWomEz19Q%2FmtXLOKw%2FHpaTT62SxvFStF1%2BNyr%2B5bH20z7j0tST33oCSbDNbYFmWGgemYw9Za%2BzIn6eOUv4Udx7BKsvdqlS7PfSrP0pdS6M7LOuIqU2j1o4ntHSp2kV26%2BrQD20p6FM%2BgTnhztexJK66c%2FzjqPQQNRx0HBa9NEWoUeMrCOnIf2cI%2FXtcWfVsHKeHabBAQ67XATs1axD8E3&X-Amz-Signature=2b2d89265bcd745e2d0139b6ce388a0d1bcd98d91b98aa86fcac52010e8324f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
