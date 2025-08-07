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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNWGDES%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICd55GBv%2FSCHUkGpt4Jy6KujZbFAH39vh81IC6bHhepoAiEAzU4kjV8LFdSIF9aqdJDBbNRsVT9WYcg6IZ7pmB0KNLAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAQqsz0TQ1ioKstoSrcA6CjIWb4DaioMqBl9uJTglRlCovFVC9KeMb%2B8DrSQ00m%2FdgjJCv7SMQ5jSuCdYlo%2BLgrW1199mUkF2Ntocq8IoZdbVNQdFtlf60nj2fB2e4Ea5fuuaZkL4E6ZX5RQs6ZIC5EE6wl8JxyvOKB6gd3BN2%2BItD%2FRLbURSl26NQ9WHoTJZSCh0AALIssA%2B03SqSQ0%2FPtBexmXxWl0xpmlR%2FZMhEfZ%2BpiShQv8MyoMGzOL5zkv7cjed2zKcp0nTTVYqBFDHqajzd3roXCXOSwmJmhgtfxtyqsQvEFeFocDWAGpZLoNCzwjEFtA1ZtUt6cBNgEAyvscBEr4f2mK1ZrJBwl%2FXk2HtbLW9EqxClZbvkMtN2PH2waxUwrtTZprnpyMCrK0ZbaHtZQ1mRzuZOZCEdnGCGuf1IJXJwOZVXEkaQWMHZ%2B%2BgQd%2FVY80VM2Fp4Jwlqo88bOVZ93mHQatM1ngaK3L%2FGElTWlCxuIsPwDjG9MV5Ae32WACy%2BJPBqbxTEd%2F33%2FuXUJNUdoSbLM9J4%2FjrjteT9KAIeU3CTfQ9hu8KJ7Bl6Mhdrt3HB%2BVMeqCy3e9JU7GnQBDKXDErZ3MAVLlsLlCK7yMaW9vkdx%2FpDb9BSqcRtk2rlfQPhWvHST%2FmBhMJP50sQGOqUB74w4xQCm8Jal%2FtzTrjjldsAYhA9ppdfL7Lt9%2F4rcHjf7f6EBHp0MW0vPhcRlTgVChbHLx%2B8Y%2FyHQaIA0%2BorrI6WTeEa0sOIq0DZHE%2Bo1JkCq07Omapyu0RxYJEy2%2FnBMtods2cZjVSjDs4V487qM3BRjXy59TVo%2BDkG7PGYjibdsWBTx1nXs7tilJEFLL%2BbYG52fYlOnZ6TLyF%2Bv7Yh3%2FeRUS8DN&X-Amz-Signature=3d278755defec5c45087b96501be11be136e2e568237e3a861a7573737bd6a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNWGDES%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICd55GBv%2FSCHUkGpt4Jy6KujZbFAH39vh81IC6bHhepoAiEAzU4kjV8LFdSIF9aqdJDBbNRsVT9WYcg6IZ7pmB0KNLAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAQqsz0TQ1ioKstoSrcA6CjIWb4DaioMqBl9uJTglRlCovFVC9KeMb%2B8DrSQ00m%2FdgjJCv7SMQ5jSuCdYlo%2BLgrW1199mUkF2Ntocq8IoZdbVNQdFtlf60nj2fB2e4Ea5fuuaZkL4E6ZX5RQs6ZIC5EE6wl8JxyvOKB6gd3BN2%2BItD%2FRLbURSl26NQ9WHoTJZSCh0AALIssA%2B03SqSQ0%2FPtBexmXxWl0xpmlR%2FZMhEfZ%2BpiShQv8MyoMGzOL5zkv7cjed2zKcp0nTTVYqBFDHqajzd3roXCXOSwmJmhgtfxtyqsQvEFeFocDWAGpZLoNCzwjEFtA1ZtUt6cBNgEAyvscBEr4f2mK1ZrJBwl%2FXk2HtbLW9EqxClZbvkMtN2PH2waxUwrtTZprnpyMCrK0ZbaHtZQ1mRzuZOZCEdnGCGuf1IJXJwOZVXEkaQWMHZ%2B%2BgQd%2FVY80VM2Fp4Jwlqo88bOVZ93mHQatM1ngaK3L%2FGElTWlCxuIsPwDjG9MV5Ae32WACy%2BJPBqbxTEd%2F33%2FuXUJNUdoSbLM9J4%2FjrjteT9KAIeU3CTfQ9hu8KJ7Bl6Mhdrt3HB%2BVMeqCy3e9JU7GnQBDKXDErZ3MAVLlsLlCK7yMaW9vkdx%2FpDb9BSqcRtk2rlfQPhWvHST%2FmBhMJP50sQGOqUB74w4xQCm8Jal%2FtzTrjjldsAYhA9ppdfL7Lt9%2F4rcHjf7f6EBHp0MW0vPhcRlTgVChbHLx%2B8Y%2FyHQaIA0%2BorrI6WTeEa0sOIq0DZHE%2Bo1JkCq07Omapyu0RxYJEy2%2FnBMtods2cZjVSjDs4V487qM3BRjXy59TVo%2BDkG7PGYjibdsWBTx1nXs7tilJEFLL%2BbYG52fYlOnZ6TLyF%2Bv7Yh3%2FeRUS8DN&X-Amz-Signature=4059845be3afdad735afbd435c8f5fe5b3d74a2a2331f912bc97cd97008a17c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNWGDES%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICd55GBv%2FSCHUkGpt4Jy6KujZbFAH39vh81IC6bHhepoAiEAzU4kjV8LFdSIF9aqdJDBbNRsVT9WYcg6IZ7pmB0KNLAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAQqsz0TQ1ioKstoSrcA6CjIWb4DaioMqBl9uJTglRlCovFVC9KeMb%2B8DrSQ00m%2FdgjJCv7SMQ5jSuCdYlo%2BLgrW1199mUkF2Ntocq8IoZdbVNQdFtlf60nj2fB2e4Ea5fuuaZkL4E6ZX5RQs6ZIC5EE6wl8JxyvOKB6gd3BN2%2BItD%2FRLbURSl26NQ9WHoTJZSCh0AALIssA%2B03SqSQ0%2FPtBexmXxWl0xpmlR%2FZMhEfZ%2BpiShQv8MyoMGzOL5zkv7cjed2zKcp0nTTVYqBFDHqajzd3roXCXOSwmJmhgtfxtyqsQvEFeFocDWAGpZLoNCzwjEFtA1ZtUt6cBNgEAyvscBEr4f2mK1ZrJBwl%2FXk2HtbLW9EqxClZbvkMtN2PH2waxUwrtTZprnpyMCrK0ZbaHtZQ1mRzuZOZCEdnGCGuf1IJXJwOZVXEkaQWMHZ%2B%2BgQd%2FVY80VM2Fp4Jwlqo88bOVZ93mHQatM1ngaK3L%2FGElTWlCxuIsPwDjG9MV5Ae32WACy%2BJPBqbxTEd%2F33%2FuXUJNUdoSbLM9J4%2FjrjteT9KAIeU3CTfQ9hu8KJ7Bl6Mhdrt3HB%2BVMeqCy3e9JU7GnQBDKXDErZ3MAVLlsLlCK7yMaW9vkdx%2FpDb9BSqcRtk2rlfQPhWvHST%2FmBhMJP50sQGOqUB74w4xQCm8Jal%2FtzTrjjldsAYhA9ppdfL7Lt9%2F4rcHjf7f6EBHp0MW0vPhcRlTgVChbHLx%2B8Y%2FyHQaIA0%2BorrI6WTeEa0sOIq0DZHE%2Bo1JkCq07Omapyu0RxYJEy2%2FnBMtods2cZjVSjDs4V487qM3BRjXy59TVo%2BDkG7PGYjibdsWBTx1nXs7tilJEFLL%2BbYG52fYlOnZ6TLyF%2Bv7Yh3%2FeRUS8DN&X-Amz-Signature=4ae5ad76d145781a4c178ddaff4fd25e360a0549bd1a94c0759c5bf51c5572b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2AOSB5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCtBLcrqW6fzUgUNiLMOhrcljROEz5HMRK27%2BcEmQmMvQIhAL7fy0liCuoww987faml5Rgzk3jr00uTiAk0ET%2Fb6DidKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDJwTZ5vltY2Kv%2BHwq3ANCzqteXB67iV6fs7VSFHrbK98lZUB%2Boi1tkVhlkwuhvMWqO6HdL6fG2518wvBUrIBW7xO9pqQn%2FDNOPxzwG75p3I1HAhNTkO8d%2BKh7WCRI5Fyl6rU8Z1CMRrpcJZ2ea3OVyIQdaUWBiQzeEldduAiVugzCU%2F9o3AVhxvAX4hqalxkUuXb27DRgOgnY%2BGh3PUaKYcDb7tN9DuxJVROLqwqyuyP3O95%2FDRB%2BC8FszbB8rkf1ZMYbkxP%2FTuigwTEdxUapSITrrJd5agiZpUdD5gZ1ytNmJX6DR0C5sSYl0MsKWw%2FBUZ8qKKam7f8gldl3x3DpRNC%2Fc%2BPfnfmLKLtl7xzZSH2eNHYaER0riW3UuZHnMBOzAO5221XBoDW8oaCXq3iUfFYOlhz1nk58ZNt9R4qztRx36iZPqIYRPH5o%2FeBVkDagACaBhu6jpRk48Fhv5YyRfMx090R36wm5d%2FtcFpgXW%2BFogJJ7G%2B%2FrBYgFd0B7kWKdku0%2BKvbnlTUhDpZMn5HYnV%2BvLCvgddl%2FjacB7%2BI9p4%2BO1%2BXyQ0uX94NAugzgprsbCGFiABW2fM5tstEXKxR%2FUdY6%2Bvq5Yoe9l%2F6ymGjWixyRI%2BHxcsTMR9sve4ab%2BqqBsVZQlVx20V3ajzDj%2BdLEBjqkAXtVk8xBxMD1dltbrnPoP41iFpIWIdBm98N8XAn7Za%2BHuK%2FRheW44xQVlCFoi%2B7RDqOwOTeVwQgHLq4Gefnk1RV2nVs9UAgl5r0%2B5SwegB5%2FNCPquPulrPfZ7knTjVLuHdSQH0zbPWHVdFiDKtrdi3jIDqn3BWGdE59Z4QSHXimpu0BiKhKfEvFoD2zCsNlkBjWN%2Bu8CGHygV4v8BPzfARC039%2BV&X-Amz-Signature=28638c0ad6ea3ffd24f2348c95608774de3acc5be0b71024984bd798234f2dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAFSGF4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEDNmtSKd4Ci2Z6AS50RxckC4AyXb6SBHWaoSoh%2BlmkaAiEAzJvLEmNMvBK%2BjXLwzKLELCNb3Dw4UC7udqB9l9eicP8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfBH5mYv1W%2BUcA00yrcA8aRlB322S3BDXyjEm4ZTtqeWH8Qjh6yJT1qIZcKR3CWK6SFy50heOGgtBXZ4a51iEeGsbaSqjh9m9ogzsJDYUroFAj6oWgPhOB3GHGXMT5hqyir9r%2BJ0yyEspzb%2BcFOrBDby4G1zVbZcnC1EaTGbHNNkYDiQZspmo%2BAlITQgudY86vECe2oK%2FOFWc2R3ImDvo2Zg8pplmOK%2Fg1i9PRdb5FtKg78HD2Pf6fAUN6gBPqkbPnUcVZsO5m9RWg1Vjy%2BCHc1O5fXMdfY4XmHZC4XBB2zGij3I9M1lGFDINbzLDUsrmx7f9DBRVB0mAvaZbNYLwzqEKJo0eE2a%2BJ%2BFxVURNEFUU6MODrBuONAtNeTfstkjZplytE4R%2B7%2FdRpnWXl31WsxOb2%2FWriSVGf%2B0pGnWlAX%2FMm7t%2F1dCG2H%2B4Hxx8CghnVwMqLfoVVSS0pniLX1yBM%2FEgOZt1V0v4tNU%2FajawhybGe4Je0BOuGY6W%2FSzIZLhrcstaQ9lHzeOXtJ%2FrwqCmpFQMv1ovr64p%2FJptXj5jSdVQT4WGMl84%2BjdPwmbo%2FmkxcaANVaMt3fH3kxXptqUS8nv3dO8stxOjuMfRgqvi4DP069P3VlE5uOFAsr1rBcqzVVDCuE9zfdmYfeMPf50sQGOqUBCt179NeD8XJKGrVLRRbxZxWNcrsEDQaHEqVGo%2FRdofyq%2FxTP8uF%2BwcG5l%2B2k87N7MtB4EMaZ%2B2p4nwdWPn9zLuqtBpy21Lt6GDzyM3aSuCXgQVXjcehzEkB5nJXayiacKu7numW0SE5igifPU2wGlDpHpx9H99s1%2BPiTguSnjPxED8cfc2mJN0S6cpLrqTHK76oFvijYqy1SXuBowmnP%2FKBbtxfa&X-Amz-Signature=4123a0ce186ce7dc38d994ce7a0568017b627447dbf94fbddf9980855d602a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNWGDES%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICd55GBv%2FSCHUkGpt4Jy6KujZbFAH39vh81IC6bHhepoAiEAzU4kjV8LFdSIF9aqdJDBbNRsVT9WYcg6IZ7pmB0KNLAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAQqsz0TQ1ioKstoSrcA6CjIWb4DaioMqBl9uJTglRlCovFVC9KeMb%2B8DrSQ00m%2FdgjJCv7SMQ5jSuCdYlo%2BLgrW1199mUkF2Ntocq8IoZdbVNQdFtlf60nj2fB2e4Ea5fuuaZkL4E6ZX5RQs6ZIC5EE6wl8JxyvOKB6gd3BN2%2BItD%2FRLbURSl26NQ9WHoTJZSCh0AALIssA%2B03SqSQ0%2FPtBexmXxWl0xpmlR%2FZMhEfZ%2BpiShQv8MyoMGzOL5zkv7cjed2zKcp0nTTVYqBFDHqajzd3roXCXOSwmJmhgtfxtyqsQvEFeFocDWAGpZLoNCzwjEFtA1ZtUt6cBNgEAyvscBEr4f2mK1ZrJBwl%2FXk2HtbLW9EqxClZbvkMtN2PH2waxUwrtTZprnpyMCrK0ZbaHtZQ1mRzuZOZCEdnGCGuf1IJXJwOZVXEkaQWMHZ%2B%2BgQd%2FVY80VM2Fp4Jwlqo88bOVZ93mHQatM1ngaK3L%2FGElTWlCxuIsPwDjG9MV5Ae32WACy%2BJPBqbxTEd%2F33%2FuXUJNUdoSbLM9J4%2FjrjteT9KAIeU3CTfQ9hu8KJ7Bl6Mhdrt3HB%2BVMeqCy3e9JU7GnQBDKXDErZ3MAVLlsLlCK7yMaW9vkdx%2FpDb9BSqcRtk2rlfQPhWvHST%2FmBhMJP50sQGOqUB74w4xQCm8Jal%2FtzTrjjldsAYhA9ppdfL7Lt9%2F4rcHjf7f6EBHp0MW0vPhcRlTgVChbHLx%2B8Y%2FyHQaIA0%2BorrI6WTeEa0sOIq0DZHE%2Bo1JkCq07Omapyu0RxYJEy2%2FnBMtods2cZjVSjDs4V487qM3BRjXy59TVo%2BDkG7PGYjibdsWBTx1nXs7tilJEFLL%2BbYG52fYlOnZ6TLyF%2Bv7Yh3%2FeRUS8DN&X-Amz-Signature=d57d988951b5194ef195bc3100a8eb567973be651378ac7b36f3f1731650e1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
