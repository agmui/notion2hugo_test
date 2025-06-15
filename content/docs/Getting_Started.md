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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLWJSIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDY9UP9J3tYhyWhvWdr28KCaIYfjHW%2Bejs8BBqE%2FJ8fAAIhAJ9k5eL0dwn25Z1%2FXPoFn9oNEEvF2yJDdwFXS6z5olM3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwluQXKW9bRqIKvImgq3APEITudKQ37bApPXLCaP0hZibW0ZFAwozsdahJxTe4I8Mqzjt%2BMgzDn2hvrRjbWvxcwW%2BTk3FqXGdIBG1gde2u6PbAHXeWhCPF50zOvesPMhfYVcG8QMa3Ez%2FG4JWsPbRa1O1pqpN4l8PgW%2BdiKw0kb5M3vjliWa0pJAVpOaxRMW2mxQfTuBa%2B8THyFqABqYnPbkkxEAiwTppLSTzQGKitdVfX9g0gNC0qknnrNhcp9VysHYoi%2FNKIc9oQdaEEq2M3F1SpvAz6NJIZEakSY3vR9Yx2zZxzCCfz9BiIhAvI46IL4nDmXYRUwVGw13trBZgyO2IN5JQK49cF0YeSIvWkOYelPApK8jNwK%2B8P7Ix%2Fnpi26OWgvK21hiF5Iydqq0iaVk5epjjFMB2GiBVjRyeZFPT9wgbjmO1CB8qzoKw5eJTeX%2F5OSzDJJ0O%2F4sMVbymxaNnflyB%2FdlCRnk90y81if8Qvm02Um1eEht3Suzo7G3GNONP9Ao%2BbHE%2F2RmBOciGyaXSR7JFX%2FXXfdHXUzLJUK9KDon3PxF3HqsJEbVUA8Fzhp4x0nKaytrw5LfdTGxptJFOyqgbMMTg1veo99JouAU2YGBYnNQrTWKeHAZmsV%2FAiH1ggp8pNVBWkUkDCL%2F7jCBjqkASOeWLKwlMTy71foQCVXcIKVzdw7mbd0R7HVEoJ7O2QWHelc%2Fzw90g38UVgnA4K92A3qRMizCvPYpAA4A1sM43KIK9Vb2FrxkvTgbTDZzBGZWBN9mJa3GKZ8%2ByACL69MGw3TiQ%2FDD815brW%2FMPngXoQvgZr%2B5LPTj68VgUFmnAN8UThnJfVemJK0sStXekgl%2BWDBaWSOHPQ4LMS6Y2dK2adV4PMH&X-Amz-Signature=9513eb6d8ea7291928031b3d7017329f2eceaddf21f72083bf1aebe6b95dd519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLWJSIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDY9UP9J3tYhyWhvWdr28KCaIYfjHW%2Bejs8BBqE%2FJ8fAAIhAJ9k5eL0dwn25Z1%2FXPoFn9oNEEvF2yJDdwFXS6z5olM3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwluQXKW9bRqIKvImgq3APEITudKQ37bApPXLCaP0hZibW0ZFAwozsdahJxTe4I8Mqzjt%2BMgzDn2hvrRjbWvxcwW%2BTk3FqXGdIBG1gde2u6PbAHXeWhCPF50zOvesPMhfYVcG8QMa3Ez%2FG4JWsPbRa1O1pqpN4l8PgW%2BdiKw0kb5M3vjliWa0pJAVpOaxRMW2mxQfTuBa%2B8THyFqABqYnPbkkxEAiwTppLSTzQGKitdVfX9g0gNC0qknnrNhcp9VysHYoi%2FNKIc9oQdaEEq2M3F1SpvAz6NJIZEakSY3vR9Yx2zZxzCCfz9BiIhAvI46IL4nDmXYRUwVGw13trBZgyO2IN5JQK49cF0YeSIvWkOYelPApK8jNwK%2B8P7Ix%2Fnpi26OWgvK21hiF5Iydqq0iaVk5epjjFMB2GiBVjRyeZFPT9wgbjmO1CB8qzoKw5eJTeX%2F5OSzDJJ0O%2F4sMVbymxaNnflyB%2FdlCRnk90y81if8Qvm02Um1eEht3Suzo7G3GNONP9Ao%2BbHE%2F2RmBOciGyaXSR7JFX%2FXXfdHXUzLJUK9KDon3PxF3HqsJEbVUA8Fzhp4x0nKaytrw5LfdTGxptJFOyqgbMMTg1veo99JouAU2YGBYnNQrTWKeHAZmsV%2FAiH1ggp8pNVBWkUkDCL%2F7jCBjqkASOeWLKwlMTy71foQCVXcIKVzdw7mbd0R7HVEoJ7O2QWHelc%2Fzw90g38UVgnA4K92A3qRMizCvPYpAA4A1sM43KIK9Vb2FrxkvTgbTDZzBGZWBN9mJa3GKZ8%2ByACL69MGw3TiQ%2FDD815brW%2FMPngXoQvgZr%2B5LPTj68VgUFmnAN8UThnJfVemJK0sStXekgl%2BWDBaWSOHPQ4LMS6Y2dK2adV4PMH&X-Amz-Signature=9a27a5344171171a1ee3773940857c63ef5b5a19b1af90d5f20304016212988b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLWJSIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDY9UP9J3tYhyWhvWdr28KCaIYfjHW%2Bejs8BBqE%2FJ8fAAIhAJ9k5eL0dwn25Z1%2FXPoFn9oNEEvF2yJDdwFXS6z5olM3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwluQXKW9bRqIKvImgq3APEITudKQ37bApPXLCaP0hZibW0ZFAwozsdahJxTe4I8Mqzjt%2BMgzDn2hvrRjbWvxcwW%2BTk3FqXGdIBG1gde2u6PbAHXeWhCPF50zOvesPMhfYVcG8QMa3Ez%2FG4JWsPbRa1O1pqpN4l8PgW%2BdiKw0kb5M3vjliWa0pJAVpOaxRMW2mxQfTuBa%2B8THyFqABqYnPbkkxEAiwTppLSTzQGKitdVfX9g0gNC0qknnrNhcp9VysHYoi%2FNKIc9oQdaEEq2M3F1SpvAz6NJIZEakSY3vR9Yx2zZxzCCfz9BiIhAvI46IL4nDmXYRUwVGw13trBZgyO2IN5JQK49cF0YeSIvWkOYelPApK8jNwK%2B8P7Ix%2Fnpi26OWgvK21hiF5Iydqq0iaVk5epjjFMB2GiBVjRyeZFPT9wgbjmO1CB8qzoKw5eJTeX%2F5OSzDJJ0O%2F4sMVbymxaNnflyB%2FdlCRnk90y81if8Qvm02Um1eEht3Suzo7G3GNONP9Ao%2BbHE%2F2RmBOciGyaXSR7JFX%2FXXfdHXUzLJUK9KDon3PxF3HqsJEbVUA8Fzhp4x0nKaytrw5LfdTGxptJFOyqgbMMTg1veo99JouAU2YGBYnNQrTWKeHAZmsV%2FAiH1ggp8pNVBWkUkDCL%2F7jCBjqkASOeWLKwlMTy71foQCVXcIKVzdw7mbd0R7HVEoJ7O2QWHelc%2Fzw90g38UVgnA4K92A3qRMizCvPYpAA4A1sM43KIK9Vb2FrxkvTgbTDZzBGZWBN9mJa3GKZ8%2ByACL69MGw3TiQ%2FDD815brW%2FMPngXoQvgZr%2B5LPTj68VgUFmnAN8UThnJfVemJK0sStXekgl%2BWDBaWSOHPQ4LMS6Y2dK2adV4PMH&X-Amz-Signature=0df6bf84035a20477e3ca0dbec39a61e6f7e02e39e294b849d9c831de7e5858d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3LGQCP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCBfH7DKGMUPXqmStwL2HQ05sA3KEERm9gHc07xxa1STAIgVerqUi4SdFFFokzjJA8855%2FGCq5FM9d9Txd0ZehtajQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIqmpJJziR7mh5BY%2BircAwpRGjQJdZDZrGMxJa5YTfa7akIt3VCz9RDwo1pfJK6Sf4zHkpZTEiqXVkhm5g9AbMRs8JHsMKPHGWOci0TDVPQQ4bnhUQnpZx9XWLv2%2BZef%2BTIopyXEORX3OJQqXT%2BQ2%2F3HuuIUD%2FmkisDT0O6OTLzwcZAiecGZ2L9A95rYD4P7K3uOHi6QfmeFAsp%2FE9n3t%2B9a32YLMtVcT0Gi%2FOk9e5FNgsgoY3c%2Fvk5NpvbP00gkBl2VK7BiORCk9qgdCYNdA%2BOVs7VCpI%2BeOyNb4OtDVxaKybrZIOj%2B3TNG3KaX42TOG0i8rEqCF%2FzlJ%2F2cgZu0XjHG9bsVBlgJ%2FqzrZAf%2FY06CjicMOwFZY0c76f3oUQWoYuB4vHQxR7BdSnsIR9GCOeMFJbQ6kZJFb1H81CEdBWjrJWOEguOUpvmPfpR2jqBAPTVjEaH8qsbBOEvaahI7uZcIORF5TJ8nnQecgmvZtjAAiGu71H%2B3KUz47ZtSR%2FKBICimuBA1OpZitG6eHT8nDTcDIL7Mfv9rdoC%2BBvdO66jzMq75vXRKOUmNublmrxTXBF%2Bl4Td7jijtVBPohnCRhN6f85PjLGtNzUEYC8Ev22JLPE4SgCJQFWwKuwxULgtEjwwi0WEuOiGMgrpcMJP%2FuMIGOqUB950PxShqIXd4LthptHeQlgm%2FVgWGUE2jxeGYcizCIrF5Zg123sINibneCu4%2FQAZHNyL3wE9R25elvxIDCwkSoZzm2uBES3l2w7kJcXQJaTTTr%2Fvmrd4sahcYvtrFB3edUi8brbtaiXx2iiSdQW53uDSLBGREeHJV82Tzf%2BTfflvbgZQXQ40ybfevI6OW6IA6j9Yl8rqLb%2F%2BZpJp20DWJ39GpNCk8&X-Amz-Signature=fbaa63d49af1f3776180e22ef3e026e9904831f8daeee5234c281af405e8c79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5VAUOR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCbwpJhxKKopXxIBMI%2FLFGZDiegxu6DgwosVp8x6qxs1QIhAK4KdpioA0npVYjwnbh7Y%2FpjLu0B%2B%2BVyowtXR%2F9wwbS2Kv8DCD0QABoMNjM3NDIzMTgzODA1IgyYjqc76JEPcV7lzR8q3AO0jZWwcddZxJudFrD7bllVBX7QZiT6pxEqWTmjVPLY3Sudfa0aZa%2B32Z3xSbXPo%2FcMLiKyvZ676x%2Be1Mv%2BVwh4xCSHn6AxYyT8swSVoo%2B6yKDjIR%2FUyxAPhSLe7iGkbIyRCB8chKAnkeliFg%2B759Neq263mCxHzGdTBk0wvdTtDI9t1Y5%2Brn7gUS9gkfL%2FXxHVgryiFDPCbiwt70mbHbsLNGyCPE9w%2BMZ%2FuBic3R8kkOCITEgO%2BxUqzeSmRBHuLL5JzFa6E5uOtIOeL4hFYOwgiLvwlNaSl5Dex81dpxLv8fxMMwJVuxVNeuLtWtk6%2BiD6tIDZQlo4%2BkcistrCiSqXiMZZX1igY465nnti%2FrncLAWP6259%2BBli9vw7qyq86cjscOrbf6hFdLnps8wBFQCgL%2FFYxGmc6qVnumPR9nUAOjvBlknwnMKax3PWgHsfAGuVR%2BGOa2ScrJ5hHQ2E%2FKNpimO5p%2FcVuGdbdoyOx8fp9fQxru9gJqNbgmQ893dLv20eyJhfP6lM0%2B1zHWXo5QEEa1LD%2FiHgXRA4YEVDItBhvSoDWTnbAXMGXhFeF73yCqi%2FbqzQj6yjqMeoec%2Fw0HkiOIHLtocKF46lKw8cwk%2FEbbIF0jHsJsrEJcr7WTDvjrnCBjqkAZrSYu55CyB%2FLqYdALB1INfPMxY%2FOskX2ATPkhy7O4VeFeosDkK7lYGp89yaa2p3rVp3RFUDzGpi8AHg2mQ61IxBevqqXGCoDqVIc1p%2B8X%2F9NpfF23Uzsg3u7ukPK9bpEE1pcLDa9SsiB%2FlpvVe8N1eloz3hBnGtIEuwnxQAtjN2emeXsKdYEYof0mNeYxyRgFe%2F1zm%2FGzEPXv7uQXJOCrcqEgt4&X-Amz-Signature=7910812f9d5f718b83f8a6775a8840b3b47f3aad03b61fd83d4dc6d21a29939a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLWJSIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDY9UP9J3tYhyWhvWdr28KCaIYfjHW%2Bejs8BBqE%2FJ8fAAIhAJ9k5eL0dwn25Z1%2FXPoFn9oNEEvF2yJDdwFXS6z5olM3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwluQXKW9bRqIKvImgq3APEITudKQ37bApPXLCaP0hZibW0ZFAwozsdahJxTe4I8Mqzjt%2BMgzDn2hvrRjbWvxcwW%2BTk3FqXGdIBG1gde2u6PbAHXeWhCPF50zOvesPMhfYVcG8QMa3Ez%2FG4JWsPbRa1O1pqpN4l8PgW%2BdiKw0kb5M3vjliWa0pJAVpOaxRMW2mxQfTuBa%2B8THyFqABqYnPbkkxEAiwTppLSTzQGKitdVfX9g0gNC0qknnrNhcp9VysHYoi%2FNKIc9oQdaEEq2M3F1SpvAz6NJIZEakSY3vR9Yx2zZxzCCfz9BiIhAvI46IL4nDmXYRUwVGw13trBZgyO2IN5JQK49cF0YeSIvWkOYelPApK8jNwK%2B8P7Ix%2Fnpi26OWgvK21hiF5Iydqq0iaVk5epjjFMB2GiBVjRyeZFPT9wgbjmO1CB8qzoKw5eJTeX%2F5OSzDJJ0O%2F4sMVbymxaNnflyB%2FdlCRnk90y81if8Qvm02Um1eEht3Suzo7G3GNONP9Ao%2BbHE%2F2RmBOciGyaXSR7JFX%2FXXfdHXUzLJUK9KDon3PxF3HqsJEbVUA8Fzhp4x0nKaytrw5LfdTGxptJFOyqgbMMTg1veo99JouAU2YGBYnNQrTWKeHAZmsV%2FAiH1ggp8pNVBWkUkDCL%2F7jCBjqkASOeWLKwlMTy71foQCVXcIKVzdw7mbd0R7HVEoJ7O2QWHelc%2Fzw90g38UVgnA4K92A3qRMizCvPYpAA4A1sM43KIK9Vb2FrxkvTgbTDZzBGZWBN9mJa3GKZ8%2ByACL69MGw3TiQ%2FDD815brW%2FMPngXoQvgZr%2B5LPTj68VgUFmnAN8UThnJfVemJK0sStXekgl%2BWDBaWSOHPQ4LMS6Y2dK2adV4PMH&X-Amz-Signature=5ddad81f58d995105b5f5f2c4e1ee9c121cce12a8dd2f7580e2a8df245f90995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
