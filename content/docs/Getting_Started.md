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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZYELL5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGdhrDIgDnKqbl4yPTe3Sx%2FzjxNkcni2OvQjFyfKH3dJAiEAmCA6sonjT4R6VS7TEpTaXVpfx%2BxuMnv%2BfJ%2BJBeg23OkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEtn2d514%2BITmdUhSrcA3TYDXlluj64q3SsLxEYja8CFt4Y02Omctrf2cUmqJqBVkevUfiYWt%2BYH6J5nt8orSNZSWmipYBBM05A7LnQtNhNkybzBQAzeT13i6e35aV5gqP%2FcZOEoPz3%2BRLZaQJKqGXe5Uh2zaM5dxOKrfGWmPbSdot3OtzdiZVSeaL1JKjy6%2BUfxpHBDHo741GUA2xI7QRCtUH3Xt5UputQtUidTDUusvoU2xj816RcSjWc4111P9qtuzU9Yes839epNRcPvy8ecBVwuqIJlP3QLhatjaYEfwAd432%2BWbs1J%2FrKV5Q%2F03%2BJ0aOLHTCnh6lMvsgM2F4Z2N9f3wYxccoVGLMVz0Js9jgJeXM8Oo6BPq9kDbdN98Os6r7auTTcEjFSItUFvO2ua9stYOaEfgjW3aTVYq5YfeJt0qQNuBfsQUYqSbt6Nne%2BfAGawCpvTs0iRtGdJdUI6I3eWu8qTFVGkxEWAJyptC5txvTPMcO0GbqYBqMhY%2F5o18wu84J%2FkBl83%2BdYIGDkpvjz3IPCZJSnfXb1cJoueEBS6bskdT%2Biq8ytJ6MPQ6rbWnoYDLSveX1uC1PrVfdgSVmUotpZ9bJvGo6lUIQaKv8bDBP2YZuSKS4BoYvtpMZKlXsIsTnY%2BeymMLXj2L8GOqUB0p9W5%2FIAaD4AbCcWWOhJCWKKUK0pmO618zmpcbZH5Xp64VAtLy1xAt7P55HkI0WjYgr9uv%2BrlJkLzyMzFP8Wgv482WmY%2BCgxSxPmN8M057Ju2GVrNT43YZ0SuaYQxL0xd7BQ0R05Nuk3har2SZCSovWi%2FKg5JddywmMfZ%2FkK9zy6xnqY0sZ7tQsh33d2%2BKFFW8fpRtrHZvxcGM31gWciWG6pvp6l&X-Amz-Signature=758b189c8d764cefd869968e74bf670812477506c107a08f15b3e2219cdeab0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZYELL5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGdhrDIgDnKqbl4yPTe3Sx%2FzjxNkcni2OvQjFyfKH3dJAiEAmCA6sonjT4R6VS7TEpTaXVpfx%2BxuMnv%2BfJ%2BJBeg23OkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEtn2d514%2BITmdUhSrcA3TYDXlluj64q3SsLxEYja8CFt4Y02Omctrf2cUmqJqBVkevUfiYWt%2BYH6J5nt8orSNZSWmipYBBM05A7LnQtNhNkybzBQAzeT13i6e35aV5gqP%2FcZOEoPz3%2BRLZaQJKqGXe5Uh2zaM5dxOKrfGWmPbSdot3OtzdiZVSeaL1JKjy6%2BUfxpHBDHo741GUA2xI7QRCtUH3Xt5UputQtUidTDUusvoU2xj816RcSjWc4111P9qtuzU9Yes839epNRcPvy8ecBVwuqIJlP3QLhatjaYEfwAd432%2BWbs1J%2FrKV5Q%2F03%2BJ0aOLHTCnh6lMvsgM2F4Z2N9f3wYxccoVGLMVz0Js9jgJeXM8Oo6BPq9kDbdN98Os6r7auTTcEjFSItUFvO2ua9stYOaEfgjW3aTVYq5YfeJt0qQNuBfsQUYqSbt6Nne%2BfAGawCpvTs0iRtGdJdUI6I3eWu8qTFVGkxEWAJyptC5txvTPMcO0GbqYBqMhY%2F5o18wu84J%2FkBl83%2BdYIGDkpvjz3IPCZJSnfXb1cJoueEBS6bskdT%2Biq8ytJ6MPQ6rbWnoYDLSveX1uC1PrVfdgSVmUotpZ9bJvGo6lUIQaKv8bDBP2YZuSKS4BoYvtpMZKlXsIsTnY%2BeymMLXj2L8GOqUB0p9W5%2FIAaD4AbCcWWOhJCWKKUK0pmO618zmpcbZH5Xp64VAtLy1xAt7P55HkI0WjYgr9uv%2BrlJkLzyMzFP8Wgv482WmY%2BCgxSxPmN8M057Ju2GVrNT43YZ0SuaYQxL0xd7BQ0R05Nuk3har2SZCSovWi%2FKg5JddywmMfZ%2FkK9zy6xnqY0sZ7tQsh33d2%2BKFFW8fpRtrHZvxcGM31gWciWG6pvp6l&X-Amz-Signature=cff374340b9117568588c7c30ae7045bf31ac4e6a80d0f395810232013bd8688&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYFQTRV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCUBK1%2F5wXnS0N45kuBuWH8MiLaCyV0fcyRWlckj5xKNQIhAL%2FdMUyqt1zCcH93bdGxLTjRK61hse3QdN1cyrGsug3nKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqNM04JzqFrU1xHJAq3APff%2FidszJ357bgcJvkovtiLtYWs1ewzCu0AHn9y3w%2FP4UbHbSNW92M8U7WWkci94GyIXgEmJoVULvFhvWo6BdQyCSdQsuA%2B95HRumjXGsWkZK5uCdPQFRLrYOpXH1TSzWscXzPcSxTlxXIO9TX9iVpzt8OV8eZgVEf6ez1DMJhsDq6Uy9LeliUTztDazZ5yvbcV85b3ZDvS%2FXu%2F4ViFHRzzALX%2B7U6TtxJgpDSPD8fnfMSJVQcJ9yF%2BLn5XuwPJXi3VCEjMcGNhk4U3wrDJj52oP8im%2Bf1jAMGSPlegYc6WU08C3ynWQxO7Ifi2dQy1vxzlbRS%2FtOf4aP5ts4y0l5o1xRTylTe1eaPGPhS6oJy7X%2FlFDyjIxiAmbKAKFZgsHn4ncOKFaFlkCuUiJPexlszNY4DqzTvVw54HsvNnCZx3DqInO0nPutUUNK96rx4VcMmmxK8C6M1ya1%2F9JQaEYhsJKBPSamcN3YD2k1SwX2M3YY4QNqZCQtE9DeLgEKkgC%2F1NPqp%2BN1WXx6%2FXHUu60Uc%2FUSOqTrZpI0t5Rk58T2B%2FRq2Bd0u6XG02zBoJ7H9zIzn2pr2GApMjjUsvyQ%2BBjSfe3Y%2Bpgi4RiRFPr%2FNMhFG3ZikWZ7iO3RqjBuVFTDU5Ni%2FBjqkASc0vreN8lb5ynSFNtIShLvAnPxSC8QJH3fNvD5cV%2BQbAnD%2FEvsr3AqZAPY9u2UstjnCpYCHt9O4L1esCltDDjzZ6FmDw5cpoX4ceDc0BafjAgKOq3JZMzBNEYkyQnungDSGsSosSuItEYI%2FOcHQPUFirn9xNU04%2BDkXQtZLueavl2gIG%2FyLUWjtym3zzu6of%2Bx5jnoECoAZ1gKUkEC2L34kIelI&X-Amz-Signature=414085811ce0fda888861e84663749ecab4ea886274457ea76df534e107f65fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7JVMQA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBd1NBjxeAuVYHbv%2F3UeQH1FDhJHyUxdGM1BuDRTq%2FkFAiEAo8HQoqntOyjP568yMxt2h433bseD4UrTs9VERnsXQOkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZbfJwi%2BY6fGAVCtyrcA5CRxKFYVcNrfHoeibe%2Feb0cFEc9BWlJ4ZUt8xLWTB%2BfBKAlru9s3NyHH1dQLlJ1GagQk%2BJsk5Rq1gUE1lO2pLEIT9ZtSi%2BPq9x%2FLigL2Gdls3bQ%2FV2%2FMkyl1LK885t5R6qmwZYxFu6cwasfvrEjwqpbx5DV02Xfp%2BIzQ2Wx2%2Bl4U6j4IRZ%2BVVnLkctB34wVDTTPWYEBP%2BC%2BtoNpddZpxNyjTombiQ%2BBDMr2E1B6ho1uni5vLQFZE9D9crYG9cNSb8yvIlENR1agya8tXImJLl2a0vDyYcYJ6zOKvcpRxNlfw4ZxE0aD%2FEiSU0O9CZkN5mOVvdRdNxuEJdebK4VeB%2FmZEUZKRU2i7QMD57Vbuplb%2BuUoyIXkFd1IM6%2BpIfQUAW6BGDkpx1xpGRWWGlJTjXePUiMARIz9J%2F1VtjZnawYhcUp9YORbb3v5Ey%2Fsrje3dyY4TWRJnKdJMFO%2Fo9%2FGcoBK4vNh3CgJy2WU0D12WRH7CoCV5lv%2BKVjetxz%2FZEsxlUiXm4uR7dYnrkamvahwsvCGwuMEgr8tiWp2jy64lw4xdSYJzMrdVejnr2Ji5iicgL7hW4%2FInpHbZ9LgEkPdfarAc8AmPx%2FPM7c%2BETTNQuFL78PwiGX7Yd8X89iiMMjk2L8GOqUBAyBT99g2OG62LLnMUvDKN2gfq4reCpNsR%2FPKx%2FMwQseMISoDVkpa7v9mW1MG2OaEO8KYUWzYODdXzNGCExar4X1buXJMCWA%2BwJ1FoTnMKw8FCa1ZmlLz4pGjDcB1npmqwURBnbKxCx1C0ISRUMB7h104mOedtDYdt1gUQs8xunjCDVvvwszc9Mj9ao2fATjTRbPFmVG4rjKtspMrN2snN0Pxqhw6&X-Amz-Signature=ce476796169db0f76c4af9fb49b53f8c3376f36d055bc4325a19bec9a7596fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZYELL5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGdhrDIgDnKqbl4yPTe3Sx%2FzjxNkcni2OvQjFyfKH3dJAiEAmCA6sonjT4R6VS7TEpTaXVpfx%2BxuMnv%2BfJ%2BJBeg23OkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEtn2d514%2BITmdUhSrcA3TYDXlluj64q3SsLxEYja8CFt4Y02Omctrf2cUmqJqBVkevUfiYWt%2BYH6J5nt8orSNZSWmipYBBM05A7LnQtNhNkybzBQAzeT13i6e35aV5gqP%2FcZOEoPz3%2BRLZaQJKqGXe5Uh2zaM5dxOKrfGWmPbSdot3OtzdiZVSeaL1JKjy6%2BUfxpHBDHo741GUA2xI7QRCtUH3Xt5UputQtUidTDUusvoU2xj816RcSjWc4111P9qtuzU9Yes839epNRcPvy8ecBVwuqIJlP3QLhatjaYEfwAd432%2BWbs1J%2FrKV5Q%2F03%2BJ0aOLHTCnh6lMvsgM2F4Z2N9f3wYxccoVGLMVz0Js9jgJeXM8Oo6BPq9kDbdN98Os6r7auTTcEjFSItUFvO2ua9stYOaEfgjW3aTVYq5YfeJt0qQNuBfsQUYqSbt6Nne%2BfAGawCpvTs0iRtGdJdUI6I3eWu8qTFVGkxEWAJyptC5txvTPMcO0GbqYBqMhY%2F5o18wu84J%2FkBl83%2BdYIGDkpvjz3IPCZJSnfXb1cJoueEBS6bskdT%2Biq8ytJ6MPQ6rbWnoYDLSveX1uC1PrVfdgSVmUotpZ9bJvGo6lUIQaKv8bDBP2YZuSKS4BoYvtpMZKlXsIsTnY%2BeymMLXj2L8GOqUB0p9W5%2FIAaD4AbCcWWOhJCWKKUK0pmO618zmpcbZH5Xp64VAtLy1xAt7P55HkI0WjYgr9uv%2BrlJkLzyMzFP8Wgv482WmY%2BCgxSxPmN8M057Ju2GVrNT43YZ0SuaYQxL0xd7BQ0R05Nuk3har2SZCSovWi%2FKg5JddywmMfZ%2FkK9zy6xnqY0sZ7tQsh33d2%2BKFFW8fpRtrHZvxcGM31gWciWG6pvp6l&X-Amz-Signature=0f2c480224185f7f24a299138bf24d31f8f558ee6d8d05ffa7fab26d2bdb41ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
