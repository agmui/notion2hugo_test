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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EPWTLKK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxo%2BtvJlOHzj3oZFfixyy8b7mKM805n%2F5vC0Cun8WWaAiEA6HWbSfhsPFiEd14eyM55Z7fXfT%2F3rMqaG2XqzNFUSQAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSzPvGaiF6Kv4PYircA1TT9OsZf950WznGvHEvzIkzAxxn3Ed0wM41GM1zHiPHwAs5EhKiLxwwOtApf4h27r04qzccXqOouGYjhWixCWHYGNAnuMZJZ6pQtTh%2BFD4Y1Q0ToPXb%2F7M6%2Fu73%2BfZ6tfnnm%2BC%2FVuShWYhwPMKgY3GBoLw8Rw0YsMJD6u3lNkOAxo5LPO2m%2FqR5dAuf7TZ8HET4eeTcdwx50eknvzfbMpZyuN%2Fkw%2BtEpy1I4vzPR845R6s2PAXWMAjiAQfRgNQ9bl1lhdsdLBgujAy%2B2CX5MQ9QwvkNVGumTJhi6wOTAARSycdv%2Fg6QImNebnfRtD%2BeM5N0Qv0sxNlKMT7LxRl2Qf12uP1Lkjq3dbRPcJJVSIXMChrq8hPafiqVOiryY8ITF0kG8BYFigTeen0OPTLv%2BvXqTKlCDlozMtbv6GaGblGyLKAtU2yFkJ5rod0oL53lHOWMjep6VU4uT9p2hanhJN9cO4IljbQTCCbjzNVrJTogB2VCZUFj2aeZcG%2B6U0TOVZZ5KKdh%2BbfFVGweD30W9peU1SXM%2FU3xZNGgZSQpx0kFc%2BDpyah4ri5Fcri7JGgD7LVKCkSH6%2B9myveAf0HDmvwhrg6Dj7N805FT8gS53iR%2BZjjbKoCHWMCtxkGYML%2BY7rwGOqUBMNl4mNhFsPAT%2BpyLap7ORUC%2B9NiLnhqSH0cmU%2FBTT9rnQuhOyJgwsf4R5qbb1IcpaVViUbShiV2DoXBGYNWe%2BYrPU6TcelthZPNWJNADjcGMUqpGXb%2BgHxqMQUlJjbrQJEaAUdgGlyDJ6w6rrhCHb3jrU24hNFfm2eLsIbX1m%2BSHeW01fAmD3ANhMyXlRTcTl2Z5tSkFEiINCr%2BnZy8Zpl3Z%2FcUD&X-Amz-Signature=d4672a38ce46833cb7f1197613764edf7d5eeb3d37c469d1335e6a622d1eae5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EPWTLKK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxo%2BtvJlOHzj3oZFfixyy8b7mKM805n%2F5vC0Cun8WWaAiEA6HWbSfhsPFiEd14eyM55Z7fXfT%2F3rMqaG2XqzNFUSQAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSzPvGaiF6Kv4PYircA1TT9OsZf950WznGvHEvzIkzAxxn3Ed0wM41GM1zHiPHwAs5EhKiLxwwOtApf4h27r04qzccXqOouGYjhWixCWHYGNAnuMZJZ6pQtTh%2BFD4Y1Q0ToPXb%2F7M6%2Fu73%2BfZ6tfnnm%2BC%2FVuShWYhwPMKgY3GBoLw8Rw0YsMJD6u3lNkOAxo5LPO2m%2FqR5dAuf7TZ8HET4eeTcdwx50eknvzfbMpZyuN%2Fkw%2BtEpy1I4vzPR845R6s2PAXWMAjiAQfRgNQ9bl1lhdsdLBgujAy%2B2CX5MQ9QwvkNVGumTJhi6wOTAARSycdv%2Fg6QImNebnfRtD%2BeM5N0Qv0sxNlKMT7LxRl2Qf12uP1Lkjq3dbRPcJJVSIXMChrq8hPafiqVOiryY8ITF0kG8BYFigTeen0OPTLv%2BvXqTKlCDlozMtbv6GaGblGyLKAtU2yFkJ5rod0oL53lHOWMjep6VU4uT9p2hanhJN9cO4IljbQTCCbjzNVrJTogB2VCZUFj2aeZcG%2B6U0TOVZZ5KKdh%2BbfFVGweD30W9peU1SXM%2FU3xZNGgZSQpx0kFc%2BDpyah4ri5Fcri7JGgD7LVKCkSH6%2B9myveAf0HDmvwhrg6Dj7N805FT8gS53iR%2BZjjbKoCHWMCtxkGYML%2BY7rwGOqUBMNl4mNhFsPAT%2BpyLap7ORUC%2B9NiLnhqSH0cmU%2FBTT9rnQuhOyJgwsf4R5qbb1IcpaVViUbShiV2DoXBGYNWe%2BYrPU6TcelthZPNWJNADjcGMUqpGXb%2BgHxqMQUlJjbrQJEaAUdgGlyDJ6w6rrhCHb3jrU24hNFfm2eLsIbX1m%2BSHeW01fAmD3ANhMyXlRTcTl2Z5tSkFEiINCr%2BnZy8Zpl3Z%2FcUD&X-Amz-Signature=7b4e723a82fddfc2d3aba2e74eafeb7a16c01a0f2864d1acaae56a0fe7a511ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3SC7BU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BfbQb8d7zfDV9qLrJWbeYyN%2FlQTV6XPuacFcfcKbJ8AiEA2xIfY1TevAT3TVaz6nACBdloHuCz5unho5G4XChLMnAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMak0KwLBt4tSSD7EircA%2Fv%2FQLmTRICGxE0nzpXBvv9H4CEVd0yaB%2FvnYQxRzxYroD39i66HBO3zjuaaPDlcYR7E22Ps6he%2B4ZK5KbgDwbtaKWt8inYuf7CgGrQaRD5bNANMoKKkcgCAfUWaOnFoUGJcMEwSBHYRe2AXPXyzCvZPc%2FQSBjNwyMvUaelAQLsg5o70Av3ecgkFNkiw1vbH7agDacchtqtUpzWivrLadmtdgDshRf3bH9%2BuXNt25psAQmUNjv%2F6N%2BPOyf4Sn1eK1Mcu6lbg1WqmpjKiAti1Pl4gul%2FmsPEFcmZZsLHSu%2FSpzCkzRJ2Se0A7AGRHN6K%2BN0H%2B1J0PrmtF6Fq382CQ0NRRg%2FxQD8FdIAHo3m%2FXt07bsoBZ86mai%2FVULTo0KGlnzRdyX2i0Ptwzi8j8u7j7rjpwPGBRopJPdZitRwVKAi%2BrFf%2FoGnMmG7kWVTkctPecqsVjYI8CH6ciNwVgirzTe%2B%2FehMButWt8uNI%2BevWOSQJBAAVnUb19f%2FeOgxVeNniHMBNNL%2FyKTGcbo4bDILJIrUBkLcmB6CiOokhOdL0Tee2ukddl6NZGrxekYlpY1dqkkQwxqKlyN01225fNqyrXbv7B2NYbVd2msk3Pd9282rRMBZMh5ZDLFCYEA7IlMJea7rwGOqUBVRmprpELPx4eoCCd6g7ZRrejZJHkMsKiuOW3a2JyuEamqHddD8VtY9xPOpo%2BBbWgnR7zNqeVMXWVPmJ%2FymY%2F3SN%2F1oEf1jT%2BInn2c4dxDS2INyFXbviCpO5bPTZ1seJCsZemeaskk9upNn8XABOxIX8ioPa5pDo7vXWWCrr5r96woGP9bVog3ulEjpoa9LBwn0RUJG4EjW80Fgj0Ce1t04v5qS2W&X-Amz-Signature=59a2718f03c19ed5c83a45a2d3910e6265b7c6260e965e4b4f26f11bdffbfbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EZD3YR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B2djKiJGrpj02abqucaQNPKzYLLdXOz1pcP%2BTIBfmUgIhAPJ%2BY5z7E%2FaCr62y4v01%2F3Yi2k88CMIMTuuGxaGK1fUKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzF4ZjA80Wqgwlhoq3AOunRJ79EXLaFCIcXzr52EmEA09gHbwUNE6g4SBmL7fihrBgBeOF2jNxs7cKIoxfhBFK7E%2FqaACR%2FzkrolGCa9QVfklZ%2Fv59vp85BgUgpLbUyH8ggzs2Y9Y66FwGcMKfHk938HOaakv1www%2FX%2FfusJRL1ld8%2BZJ%2F8MZuImlDM56WoNdjvtv%2FAKgU51R8OBs%2BsqXlg78CmKbfxNDEtUw3GKXAZPca9gYQNbd0JMaEYTzcvnaV2wJC7I3%2Bgi1JVrt7OnHvD%2BiM64eR81IkGF%2BwbE%2FbJge89zk4F4riZF7vqPnR7LK%2FQ32g9xb1SnDg1f%2F7jUkU%2BEmAnu5CZbn3vPlnXa2cvKvTKkqkKEc0jBhxLIYmzX5VZHNlaKO9yCfJgU7krY4HptBfky%2FwXAsI7ph9LEMriIVXZvfdqpGszAnhmTpOVc0J%2BvX366lkBoPIn84L5C35CvL5bioH7xOdRklF1UXQ487N3Slv1wgHkU87mzX%2FSwn4PX6oVlyzTqfDCs72BmqxrW7wtITdQbNkR98lpCGRr%2Fj%2FVLPvylX4balWwoZn16gm0jTvHh5GevE7G9G2LxQOjo4%2FtKkI%2FYkvCdkUCZQjcLlbhyzwNsOV%2FD%2B%2FSWrEMRKZ0OhaZ4mSYUXrDCOmO68BjqkAY3IjA5PxgLZAerUhCIeQlgVCTiBnz%2BUXYZ4KI9toUcLk2Zpt8zTmh5oy8UKtmianNXuNUvD2GWlO5FUXwUioOOje4Xdlbtq5uKaL5%2FTijqJ%2B9evjDIBzDD7B7zopbQW6BNKBXrdHmtBFs%2F%2B8Y65HoL0oHUAFkWLVdyJt9%2Fr31TcyjYBm5VmWVYTiVyOA4VdhV3EofG49NnWihCsELsLXLbfkvp0&X-Amz-Signature=f1e5264fb6946143c4b6abf4ce781ae68854e79dfead68406167f6ae3606e76b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EPWTLKK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxo%2BtvJlOHzj3oZFfixyy8b7mKM805n%2F5vC0Cun8WWaAiEA6HWbSfhsPFiEd14eyM55Z7fXfT%2F3rMqaG2XqzNFUSQAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSzPvGaiF6Kv4PYircA1TT9OsZf950WznGvHEvzIkzAxxn3Ed0wM41GM1zHiPHwAs5EhKiLxwwOtApf4h27r04qzccXqOouGYjhWixCWHYGNAnuMZJZ6pQtTh%2BFD4Y1Q0ToPXb%2F7M6%2Fu73%2BfZ6tfnnm%2BC%2FVuShWYhwPMKgY3GBoLw8Rw0YsMJD6u3lNkOAxo5LPO2m%2FqR5dAuf7TZ8HET4eeTcdwx50eknvzfbMpZyuN%2Fkw%2BtEpy1I4vzPR845R6s2PAXWMAjiAQfRgNQ9bl1lhdsdLBgujAy%2B2CX5MQ9QwvkNVGumTJhi6wOTAARSycdv%2Fg6QImNebnfRtD%2BeM5N0Qv0sxNlKMT7LxRl2Qf12uP1Lkjq3dbRPcJJVSIXMChrq8hPafiqVOiryY8ITF0kG8BYFigTeen0OPTLv%2BvXqTKlCDlozMtbv6GaGblGyLKAtU2yFkJ5rod0oL53lHOWMjep6VU4uT9p2hanhJN9cO4IljbQTCCbjzNVrJTogB2VCZUFj2aeZcG%2B6U0TOVZZ5KKdh%2BbfFVGweD30W9peU1SXM%2FU3xZNGgZSQpx0kFc%2BDpyah4ri5Fcri7JGgD7LVKCkSH6%2B9myveAf0HDmvwhrg6Dj7N805FT8gS53iR%2BZjjbKoCHWMCtxkGYML%2BY7rwGOqUBMNl4mNhFsPAT%2BpyLap7ORUC%2B9NiLnhqSH0cmU%2FBTT9rnQuhOyJgwsf4R5qbb1IcpaVViUbShiV2DoXBGYNWe%2BYrPU6TcelthZPNWJNADjcGMUqpGXb%2BgHxqMQUlJjbrQJEaAUdgGlyDJ6w6rrhCHb3jrU24hNFfm2eLsIbX1m%2BSHeW01fAmD3ANhMyXlRTcTl2Z5tSkFEiINCr%2BnZy8Zpl3Z%2FcUD&X-Amz-Signature=f8986f2b94bc31c57156a05232177efe82ee90775dcc5631e21afd75cde91e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
