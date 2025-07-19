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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2H233MO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNYIh85ntNfZu3FAxDfdGDum5Uud6aQ7wieH%2B4bYeG4AiEAqEn2Vh817M%2FvmFJsPuQNCpJaG4rC%2BgfDG9HA3QmR67YqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOPS4c1%2BEethGFaOyrcAwfNoPrVVwnasIHDb0D%2BC1W35zjw6XyGd3FtMADDksUC9qcvl3IzNXkoGlkf9FNDQjnbo66QWbemFVo2O51yAjnSmxVzi2q%2Fp5FWKyOpE%2FUfLpuE1wifuLlraOgSq4gWdRc7WbK2LomLftMcEWe8c6efRu0iCoDtxiWssgtqZZuFNOMMXuL7V4cWcqokTV%2BrTc8iGVqMPZtxPJYYKxNQAZ8ST%2B5GCLvfSs57Rf%2Bqwfm020Q%2BBL%2BT4tBeTyU3pp2Q5HYwJklLPF015o9T0XmLuY5DTDvJM0RuJCHEX4hMXuH6%2FFHyFG8SEeIoR3w8HlbndDYvmrB6UujtAJM2%2BKZcZIKaHolY%2F6BqT4JoaxOW%2Bo7N0NvpzYlw5%2Fy7BwwhQYWkhlWoKGetGFRnAM9D6hdSd%2FmSUJyRG6aF5sNTjwVXl9CWjtZJ%2BHNYBdNiPJ0TeFDhH%2FH%2BA08WnDJGFZMtGROJFV2MCa5UgsDDadmQSnTgUER0uMptm6itBq79PLNFe7lWCBMLAhBzB6sH68FM0E4uBgGyn6wvYRF7Q25FjQ5tpkrt%2BQ2mgcoXaay6SMZDXKYFg51%2BbFVyNdEU7rqDdZMeKyAyNHTlqG%2FQ9mUhdkL0caJODobxn2%2Fr5WA0GrZMMPT178MGOqUBj3%2B5r2cU%2Fco0XVJH1YBXFozMPvGZfEtVtX7w1Pniz49SU5Xh8VOoxMh%2F8p4aCitOH7YJ4DZSnCRVhlgbgtQF1OlGOdQTAjtttPOnEuGTrdY%2BhnnsMxYh4Hm5E96HaOz5Ql6zuB9qXPiCQ6uN2soQBQw8K7vhY80ZKUAyNMPhkNoiZrKkd2KKgcIpnTnMwDtBXP3mlJ95KFeHlyFPwnhm36bT4u9O&X-Amz-Signature=70c8f63e023fd0cf2a641547ec1ff3509d0da004db7d0f27f6053f664cc5f8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2H233MO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNYIh85ntNfZu3FAxDfdGDum5Uud6aQ7wieH%2B4bYeG4AiEAqEn2Vh817M%2FvmFJsPuQNCpJaG4rC%2BgfDG9HA3QmR67YqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOPS4c1%2BEethGFaOyrcAwfNoPrVVwnasIHDb0D%2BC1W35zjw6XyGd3FtMADDksUC9qcvl3IzNXkoGlkf9FNDQjnbo66QWbemFVo2O51yAjnSmxVzi2q%2Fp5FWKyOpE%2FUfLpuE1wifuLlraOgSq4gWdRc7WbK2LomLftMcEWe8c6efRu0iCoDtxiWssgtqZZuFNOMMXuL7V4cWcqokTV%2BrTc8iGVqMPZtxPJYYKxNQAZ8ST%2B5GCLvfSs57Rf%2Bqwfm020Q%2BBL%2BT4tBeTyU3pp2Q5HYwJklLPF015o9T0XmLuY5DTDvJM0RuJCHEX4hMXuH6%2FFHyFG8SEeIoR3w8HlbndDYvmrB6UujtAJM2%2BKZcZIKaHolY%2F6BqT4JoaxOW%2Bo7N0NvpzYlw5%2Fy7BwwhQYWkhlWoKGetGFRnAM9D6hdSd%2FmSUJyRG6aF5sNTjwVXl9CWjtZJ%2BHNYBdNiPJ0TeFDhH%2FH%2BA08WnDJGFZMtGROJFV2MCa5UgsDDadmQSnTgUER0uMptm6itBq79PLNFe7lWCBMLAhBzB6sH68FM0E4uBgGyn6wvYRF7Q25FjQ5tpkrt%2BQ2mgcoXaay6SMZDXKYFg51%2BbFVyNdEU7rqDdZMeKyAyNHTlqG%2FQ9mUhdkL0caJODobxn2%2Fr5WA0GrZMMPT178MGOqUBj3%2B5r2cU%2Fco0XVJH1YBXFozMPvGZfEtVtX7w1Pniz49SU5Xh8VOoxMh%2F8p4aCitOH7YJ4DZSnCRVhlgbgtQF1OlGOdQTAjtttPOnEuGTrdY%2BhnnsMxYh4Hm5E96HaOz5Ql6zuB9qXPiCQ6uN2soQBQw8K7vhY80ZKUAyNMPhkNoiZrKkd2KKgcIpnTnMwDtBXP3mlJ95KFeHlyFPwnhm36bT4u9O&X-Amz-Signature=c2aa9bf61a467275465f98147c336963536f112ce72e87255ed43481afadb61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
