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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6DSCQD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCnkDUFUTPQPNk83mMGr9EL93mWTq5xjcMkp1CxV38yVgIgO0Qk9pWY5%2BPJgPxUimqRXXV2qO%2FKUXIu4YdQNtauKqEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOEOlYz3GwJoLgGkCrcA9uwL37Z6HTyC6fAnh%2Btyr4wzX5BKUt5k9rq6KfN4WCjEQ5%2FNihH%2Bt3YO2ZEtqHQC4boXkhawJTjcRFq4jnYyC76HivU5beayJHLiCG8YejCr6tH96jqWYviq0kPoYREn17jr6RoZQEr5OyeGaIWvFaJM1%2F0gpL9xkrH36xIkum98weQKq3TWrHyoZkehsXxcMLxoQi5sHJUvKEYDSPeKpBWubuLEh%2Fi6yobIWwVpPmPOQ%2BNkHbzhJdUbdQbZxh7cmY7mZuZah8Ly9AYtBWv9518xlYbsHaubJanARV2oGj%2Bu50h2zdtYlxxDSiWwDV249Xv8FRwm3sZuwYN0bzklhKJ2Fp7qgroM61AmmVm0%2BE3CzEI99OSAgl0WxfWKpywhWaSBG9DjUSHeAVXkICen%2BMOj%2FWNJ%2FNnGaGoVEsh3Nl3bLue9ridW%2BqyLQV9ttKAHDx43eSr5uGCwejluSKS%2FgTsYBoYbOoe9AYDR%2FyGmsmwDMvhiyT7xE9VIHHniCWZvuNEyVKFMkaeOAny57wFUVMU%2BMzKT5ytxGPGWeAGUguQga6tMYu7M%2BV%2BFZf6cVH2sy1orIWXiz2UaQsxA2FajRNx0RZ2h%2Bjz5FQV%2ByLr0Ied1M77tabZ9S6PHct5MKnQhr4GOqUBFnie6iZmFa02uvtHgeCpzbuTby6r9K1hFI03MyykGwl%2F%2FFMuxCHjcGF3RONO4l73nh6fZW1pIPQtvZRTh7fBt2DIos3C9H9RZIdkM%2FzAoD78L6Mxo6xCO434%2F6fAhxes7EwvXUNddUghxz7SlN7YQrpmH%2FILXEblbJftj%2FF3b4%2Fzw%2FhIoGXuaGC8nWOe5mUee002xH%2F%2FsFCJm%2BRnHWmP1Tf7shU4&X-Amz-Signature=2caa66f82678e03f8b0caed485151ce0b73bd0cfeed7f3814107547937d4f74b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6DSCQD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCnkDUFUTPQPNk83mMGr9EL93mWTq5xjcMkp1CxV38yVgIgO0Qk9pWY5%2BPJgPxUimqRXXV2qO%2FKUXIu4YdQNtauKqEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOEOlYz3GwJoLgGkCrcA9uwL37Z6HTyC6fAnh%2Btyr4wzX5BKUt5k9rq6KfN4WCjEQ5%2FNihH%2Bt3YO2ZEtqHQC4boXkhawJTjcRFq4jnYyC76HivU5beayJHLiCG8YejCr6tH96jqWYviq0kPoYREn17jr6RoZQEr5OyeGaIWvFaJM1%2F0gpL9xkrH36xIkum98weQKq3TWrHyoZkehsXxcMLxoQi5sHJUvKEYDSPeKpBWubuLEh%2Fi6yobIWwVpPmPOQ%2BNkHbzhJdUbdQbZxh7cmY7mZuZah8Ly9AYtBWv9518xlYbsHaubJanARV2oGj%2Bu50h2zdtYlxxDSiWwDV249Xv8FRwm3sZuwYN0bzklhKJ2Fp7qgroM61AmmVm0%2BE3CzEI99OSAgl0WxfWKpywhWaSBG9DjUSHeAVXkICen%2BMOj%2FWNJ%2FNnGaGoVEsh3Nl3bLue9ridW%2BqyLQV9ttKAHDx43eSr5uGCwejluSKS%2FgTsYBoYbOoe9AYDR%2FyGmsmwDMvhiyT7xE9VIHHniCWZvuNEyVKFMkaeOAny57wFUVMU%2BMzKT5ytxGPGWeAGUguQga6tMYu7M%2BV%2BFZf6cVH2sy1orIWXiz2UaQsxA2FajRNx0RZ2h%2Bjz5FQV%2ByLr0Ied1M77tabZ9S6PHct5MKnQhr4GOqUBFnie6iZmFa02uvtHgeCpzbuTby6r9K1hFI03MyykGwl%2F%2FFMuxCHjcGF3RONO4l73nh6fZW1pIPQtvZRTh7fBt2DIos3C9H9RZIdkM%2FzAoD78L6Mxo6xCO434%2F6fAhxes7EwvXUNddUghxz7SlN7YQrpmH%2FILXEblbJftj%2FF3b4%2Fzw%2FhIoGXuaGC8nWOe5mUee002xH%2F%2FsFCJm%2BRnHWmP1Tf7shU4&X-Amz-Signature=142bf94b6296cda996a48e844e7ab3a2351455e471dc11286f4023ed7a3636d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
