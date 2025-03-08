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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2I7PKZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B6aknb8%2BHjzULFeRS5a%2F7w9BRrTsKxuMbJKHjiMGPtwIgDtCjHx8XUwgsKhDRzHIDXN%2F%2FsKJNY0Ej9Sw6F7Xw8iAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDED%2BRJxb3nvBzCYmaSrcA0ZFExGNEFgBwV%2BNZMVVsOGn80tDs88ma0DsRikToV1822SFwlQRFzp7zD199uW%2FxLv%2FXj0BHCony4Li%2Boadwd7Pd0d39IzB5rxvJjnjW2S0xlvDPVs0ssG1QHejkvqK19eis2JPINQNacDFsBOk7pu%2FG00LR0%2B302wXGBZ0V1RmP1%2Fg2BMJt6jNKVa77LxNJY9gekkkXrla7HQLdvnv%2B2rzNRjWHkEj%2BkrzL2jgJmp%2FA1TkKaqnutfHYgTuUGhPUOjyWfAEQ9ZpI5641m4yWqJd8%2FJaJ9gqTrcRMIwasmunvsworRtoZN3Dp%2FfG4v8Xzrd6h1grzV2wNva4PS3Ic6NWP1OTPbvBK6FyWJf7NztuXcki29Hj3re4BTEzMPOQes%2FfF%2BGfmmvNvYI28Zlu1gKdY%2BP%2BRsPUJuT8fFMTZRuni41zQLrSnmE4RuChi8VAXWtgHgzsLWtrsh0JkYe16UwXM9RgUHB%2FgdE0zb2aiwr0fZsP9LBCOhMpShl3thr3dcHvYhySK9OfL0J6fU714pByoogOL%2F0JqfqjrxEpF1rE%2BVEpaYo2D6pIMs6JEQcsz0fyI7UTpJVBjrLVbNodaETL3AcDLevBrArmFulFhPcQdpg5hbOYthu7%2F6TLMOW8rr4GOqUBn0WNk3EXf5WFtdgi3yHwlEvpjKkgh%2BZI0l1H%2FwKNWI48cWU4bAuUMG4UdeavRXBI5xXfhIH7buOS3t7Z%2B2TdjrWCXveLJWiTkJ0lUIo11It%2FG8am56%2Bhh8GNbyWzJ8R7e7OhC%2B%2FjM9GRRkg2%2B8DWy1VbGQi2LDikdiGEd2RuOV0AU9%2FPsatuX4JG9Zg8LbdOASe56qdaZvcl5cheSAlqiojJkokW&X-Amz-Signature=112501f238f5fe39f1d5a7ef2d6407e4fef8e97fe8124588c2c5fd33aee27daf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2I7PKZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B6aknb8%2BHjzULFeRS5a%2F7w9BRrTsKxuMbJKHjiMGPtwIgDtCjHx8XUwgsKhDRzHIDXN%2F%2FsKJNY0Ej9Sw6F7Xw8iAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDED%2BRJxb3nvBzCYmaSrcA0ZFExGNEFgBwV%2BNZMVVsOGn80tDs88ma0DsRikToV1822SFwlQRFzp7zD199uW%2FxLv%2FXj0BHCony4Li%2Boadwd7Pd0d39IzB5rxvJjnjW2S0xlvDPVs0ssG1QHejkvqK19eis2JPINQNacDFsBOk7pu%2FG00LR0%2B302wXGBZ0V1RmP1%2Fg2BMJt6jNKVa77LxNJY9gekkkXrla7HQLdvnv%2B2rzNRjWHkEj%2BkrzL2jgJmp%2FA1TkKaqnutfHYgTuUGhPUOjyWfAEQ9ZpI5641m4yWqJd8%2FJaJ9gqTrcRMIwasmunvsworRtoZN3Dp%2FfG4v8Xzrd6h1grzV2wNva4PS3Ic6NWP1OTPbvBK6FyWJf7NztuXcki29Hj3re4BTEzMPOQes%2FfF%2BGfmmvNvYI28Zlu1gKdY%2BP%2BRsPUJuT8fFMTZRuni41zQLrSnmE4RuChi8VAXWtgHgzsLWtrsh0JkYe16UwXM9RgUHB%2FgdE0zb2aiwr0fZsP9LBCOhMpShl3thr3dcHvYhySK9OfL0J6fU714pByoogOL%2F0JqfqjrxEpF1rE%2BVEpaYo2D6pIMs6JEQcsz0fyI7UTpJVBjrLVbNodaETL3AcDLevBrArmFulFhPcQdpg5hbOYthu7%2F6TLMOW8rr4GOqUBn0WNk3EXf5WFtdgi3yHwlEvpjKkgh%2BZI0l1H%2FwKNWI48cWU4bAuUMG4UdeavRXBI5xXfhIH7buOS3t7Z%2B2TdjrWCXveLJWiTkJ0lUIo11It%2FG8am56%2Bhh8GNbyWzJ8R7e7OhC%2B%2FjM9GRRkg2%2B8DWy1VbGQi2LDikdiGEd2RuOV0AU9%2FPsatuX4JG9Zg8LbdOASe56qdaZvcl5cheSAlqiojJkokW&X-Amz-Signature=5f85b0758583ce30956b903b109868cc68c19a4422215a205de47c74815b673e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXBRXKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD1yvgDP%2FB%2B%2FpF0ZCRaoCc0qA5Ivcp5D9EwsgKYEhFh1QIgRYAdb%2B7%2BbuHg5EkRCkyXSeP1%2FSgyo3ljYtJts9YpFakq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKQJTytdcgK86%2FQa7ircA6La3oA9FkUDS7x2OQEnqukBvMuvZMh0J7i0gU51ZRAFvhSFsc8BlLSPRugXmdAKqjR1%2FUqs4qg3aAZRYTjdh0%2FlfbWVHnFFgZK02veMN4PJ9Y3vyz2Ht3SGgBs4rvRq716Idy5Fl5WzwPyLoQroV43UtSCXgRXbjgIsgblzWIDazA83tLRE92TNEUalEml%2FW9%2B58B3JEXxTuP8uHQY2DoatHd8uglnFOhfyl610oDu8GY%2Ff%2FLvFtPAKMpZVNdo2sbXbMrn2W4XuYOxfXiMFMaUHJ%2Bjz%2F2gVY186nxm8nT85Y7ycEcoM%2FLJbaGyFIKlVAKMiW4DhFhIVxq1Xo%2F7mQLeQ6HqNIqioJcweT2oSDue0GyezH1JoHCIitcFwFYx8cHwOuwL%2FwSxxRXNXgCmv93SdEDtfF740RZKcrVDhBFSh7rdSirDZd4P4tp%2FiNBwpVLnLFaRO768roogP%2Bb9ubYp4fctDFsH6mpjU9TvLW%2B4sidYDy1S2jvzZuSzKNMgheIx27Alx7lIWLHG9kcvPzRxBKvl3ynGDjnljOnWrHD7iu%2BeGsHBQTFHKmtRq6ufFRX23XIju0%2BUmm3%2BXuqreUJ1LEDT%2BH3m%2BwmXmc%2B%2F518H1IspWzXuUgjbTgVhsMMe9rr4GOqUBpKyX5Zs%2FfEMC0OsofCf5zqCf9XA4lNJKUHeGN0JvaT%2BrW5mjttyqVWp%2FrgnmwvcEVfV3lKW3TIhXUQmA159HrW4Lj%2FOAgmLxJ%2FArvmi%2B7%2BLa9xGmnWc%2Bq7i61jfaNt02aKyrLoKVisT0MmZtORuFcjrtJqNdrXRdwjT75NsYlk73uayI7bxAn%2Br1RnzTGYrhxSNCvLJil1Y61su%2Be3sANwuDhiUb&X-Amz-Signature=d063e0b5d681a25d0c9db8a159ca421df6909ce5e6a88ac7cec09916ea429ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL66KGJO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdq1Mex1V9wokW%2BabLhOR0KbqBD%2FQW0qAT2cObG%2BZn%2BgIhALXg5nhUEbVdhqfPOlYhQNw%2B73wSM1RBUf2CuqlYuM4bKv8DCFMQABoMNjM3NDIzMTgzODA1IgwOzuABfQWtW08KYewq3ANk5ntvX19V7l4lousHdLlhZ%2BgC2OmqK6n0rmPOztXTN%2F9YUl7gHccX8vlBsxb3oHNvBZSbSU6mnGsA6gslPgRN0BoPjnhXbNYoHWDtcY5RqxGLcr5alQblDLGRF8jzaIl4sx%2FHudj6RFNo253BVWgBG7pcedEn3wLGPL8EQGfP72HJcUsV7jtCrjKIUdw%2BzzPkrRXq%2FUnxpTJDnvxfAqf5FSBIUKQoz5xMt6kNlgRykWpISz%2Fo2pGWvq%2BaXKdWHo3qKK69xstLC%2BXcp46Z3gLJG9OrtUnwzirMXQIwslrona%2BA13Sqp0yRocYkNLTHwsoTfz1Wu9Y1JT%2BEPbBEANCWtX1bgixftouNIluii%2BPj7wNpMJKT1xZqGHLFkO%2B%2BgLn4kKXkZCNbndt0AhNkbHdClJGBIRBFB1ZvtkXDj0Wl9kAzJJQoqyPxuoHiuJUYwHTHNTG8LtcQvA2tAnNlatexvd8Smv5nzDUY2gKsEXMtY4mVjRhZluqGsKciOZhn7rfFH9L9Ay05AzfVj6U%2FumzDh4UJlCfLrMXddFbLnKTH%2FrZ745MoPVjYzcDX9DAgobzNOO9L9FO2ZTLE%2BJK3WbGO5%2FFwpiZX0sZ3Fjhtm9oZmnd2cLvHVB9tH2Jz3DDFva6%2BBjqkAa9G%2Fsz17i0S0KqzCr%2FFhTwDd7a6P6zzZV3QgqW0ECeKp2bPWxOR11g4y5ipYSnpj50aBb4QTlHoaNSQRUvrjPyNOOoDzSp3ZjhvMsXxAh96wDj%2BipyuDztYME1NabKj17Lv9b3BK1pevZlkRNI7DHKeYaO4ZQXBAsFhVpUxuoGAVq8kG7QSBTcj9t5WCoyaZabbOb91OiDoGYBu4h7VM3gniL3T&X-Amz-Signature=fcb5c6641e1566b8a49d173d47a18ecb285133459a0cb82ac2867bef22116805&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2I7PKZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B6aknb8%2BHjzULFeRS5a%2F7w9BRrTsKxuMbJKHjiMGPtwIgDtCjHx8XUwgsKhDRzHIDXN%2F%2FsKJNY0Ej9Sw6F7Xw8iAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDED%2BRJxb3nvBzCYmaSrcA0ZFExGNEFgBwV%2BNZMVVsOGn80tDs88ma0DsRikToV1822SFwlQRFzp7zD199uW%2FxLv%2FXj0BHCony4Li%2Boadwd7Pd0d39IzB5rxvJjnjW2S0xlvDPVs0ssG1QHejkvqK19eis2JPINQNacDFsBOk7pu%2FG00LR0%2B302wXGBZ0V1RmP1%2Fg2BMJt6jNKVa77LxNJY9gekkkXrla7HQLdvnv%2B2rzNRjWHkEj%2BkrzL2jgJmp%2FA1TkKaqnutfHYgTuUGhPUOjyWfAEQ9ZpI5641m4yWqJd8%2FJaJ9gqTrcRMIwasmunvsworRtoZN3Dp%2FfG4v8Xzrd6h1grzV2wNva4PS3Ic6NWP1OTPbvBK6FyWJf7NztuXcki29Hj3re4BTEzMPOQes%2FfF%2BGfmmvNvYI28Zlu1gKdY%2BP%2BRsPUJuT8fFMTZRuni41zQLrSnmE4RuChi8VAXWtgHgzsLWtrsh0JkYe16UwXM9RgUHB%2FgdE0zb2aiwr0fZsP9LBCOhMpShl3thr3dcHvYhySK9OfL0J6fU714pByoogOL%2F0JqfqjrxEpF1rE%2BVEpaYo2D6pIMs6JEQcsz0fyI7UTpJVBjrLVbNodaETL3AcDLevBrArmFulFhPcQdpg5hbOYthu7%2F6TLMOW8rr4GOqUBn0WNk3EXf5WFtdgi3yHwlEvpjKkgh%2BZI0l1H%2FwKNWI48cWU4bAuUMG4UdeavRXBI5xXfhIH7buOS3t7Z%2B2TdjrWCXveLJWiTkJ0lUIo11It%2FG8am56%2Bhh8GNbyWzJ8R7e7OhC%2B%2FjM9GRRkg2%2B8DWy1VbGQi2LDikdiGEd2RuOV0AU9%2FPsatuX4JG9Zg8LbdOASe56qdaZvcl5cheSAlqiojJkokW&X-Amz-Signature=be075f6f9bc742d1bff4235d78289cb120375c70fef414ec3f0906e7ccfd2308&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
