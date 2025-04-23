---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BY36I3G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCrO8XCS7n8W1pHMRUxetVpmjqzuBCMgIOp97A4KK5p8gIgb0EXRBjUdRb%2BFs7db11WS35%2BezDT9MxKUKJxQTYTrjsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRs1Rn9s7jgJe0ueircA0BAz2ypcYl5mVo5rf6D7zaeSW%2BiC08PqwuWBlZIOyPtHwIelSslL%2FhPz%2BqRhWBNWl%2B%2BqB0Fpiqyl5lT1UN0HxfoFg7qVuNYypddnl63NCa9yLA8LS2pxosAT7T%2Fa515jaECph%2FjkYqGXnZMpxQ1YiAJ4VgGzFNEPwvKhF9%2F%2Fiis%2Boiqch0z%2Fx4qoWOBqtNN0CoccCyoLtZ%2BDbDfjZccsbofIrU27ljfyPHK0niERvtl7fFXrF6Uhe%2FhcXsiPWMcQaq3h5IZJcN%2F0%2FbMEoQRW%2BdHoJEVSwuvBAceglAjT5ggLOYC8CpFAE9Tj%2FKt%2BvfLvPwwXXLgm92uoGMHszSWodeAsJzgamj3xtm7JYZ1YeVA6Cg8Ar9K%2BW5%2FsEI45UEcz5FjPpooFzVCZ05R%2B2MUe3Yt%2FsqiJOo8eUQq5ZwAJNn1i9I4ZmkRhpqDs0FwznoiDjLrh0SA71itVqLEApfQcXje9qIrq6Ozm2pUTJDgDTRYyasAZc6LLxF1M5NG9n9buph4GPj%2FuO1A5gOBClMGErWEaDDlgadzpi1ouatLgLJJnN8rOyMXLUN9b%2BXku%2FPHtWYMKNHF0IWaNpZlORw6%2FED5BpLeTmMQzGAXIoGXzlvIQ%2BhEofwER6yt5V8AMJrGpcAGOqUBhfd49dtDXGxaObfg6ilkW3R1xwwyRYKKn4UFZNYDfifUwp4yUnW4gLr66qkiav6J5qy4PfEheE0tAgjuPckba1w5LQekTxfenvDAn9gR2Ps0zHDzRUdMsOkSyDErVCdJxz%2B%2FnWkB7QpIum3gPVXaERsj5AnIwld%2FISR9zKmpGyCUUQa%2BRbnKR50NJS4zjnPnYn2yU15IC6vl1lLtfL8HWSyWZShd&X-Amz-Signature=c05baeb4b2b62e32bea7026a070484d35bf6c7ffd2376e2be98a6f1c00439b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BY36I3G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCrO8XCS7n8W1pHMRUxetVpmjqzuBCMgIOp97A4KK5p8gIgb0EXRBjUdRb%2BFs7db11WS35%2BezDT9MxKUKJxQTYTrjsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRs1Rn9s7jgJe0ueircA0BAz2ypcYl5mVo5rf6D7zaeSW%2BiC08PqwuWBlZIOyPtHwIelSslL%2FhPz%2BqRhWBNWl%2B%2BqB0Fpiqyl5lT1UN0HxfoFg7qVuNYypddnl63NCa9yLA8LS2pxosAT7T%2Fa515jaECph%2FjkYqGXnZMpxQ1YiAJ4VgGzFNEPwvKhF9%2F%2Fiis%2Boiqch0z%2Fx4qoWOBqtNN0CoccCyoLtZ%2BDbDfjZccsbofIrU27ljfyPHK0niERvtl7fFXrF6Uhe%2FhcXsiPWMcQaq3h5IZJcN%2F0%2FbMEoQRW%2BdHoJEVSwuvBAceglAjT5ggLOYC8CpFAE9Tj%2FKt%2BvfLvPwwXXLgm92uoGMHszSWodeAsJzgamj3xtm7JYZ1YeVA6Cg8Ar9K%2BW5%2FsEI45UEcz5FjPpooFzVCZ05R%2B2MUe3Yt%2FsqiJOo8eUQq5ZwAJNn1i9I4ZmkRhpqDs0FwznoiDjLrh0SA71itVqLEApfQcXje9qIrq6Ozm2pUTJDgDTRYyasAZc6LLxF1M5NG9n9buph4GPj%2FuO1A5gOBClMGErWEaDDlgadzpi1ouatLgLJJnN8rOyMXLUN9b%2BXku%2FPHtWYMKNHF0IWaNpZlORw6%2FED5BpLeTmMQzGAXIoGXzlvIQ%2BhEofwER6yt5V8AMJrGpcAGOqUBhfd49dtDXGxaObfg6ilkW3R1xwwyRYKKn4UFZNYDfifUwp4yUnW4gLr66qkiav6J5qy4PfEheE0tAgjuPckba1w5LQekTxfenvDAn9gR2Ps0zHDzRUdMsOkSyDErVCdJxz%2B%2FnWkB7QpIum3gPVXaERsj5AnIwld%2FISR9zKmpGyCUUQa%2BRbnKR50NJS4zjnPnYn2yU15IC6vl1lLtfL8HWSyWZShd&X-Amz-Signature=6a36ca0e969a06ee99cba8619368c89bba4da9dda7c42e11b489d0c6dcd3a781&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
