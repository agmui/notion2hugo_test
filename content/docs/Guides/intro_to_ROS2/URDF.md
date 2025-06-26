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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3TLTDB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCVaZfnKhbQ%2FFDbFCAzlCikaC1IIvHrxBoSgveURVud7wIhALlFn4VXrmuVmltnUFYtJitzL8vM71LdgrLKZiWs4QqtKv8DCFYQABoMNjM3NDIzMTgzODA1IgwHIJthy0YA7y6jmmgq3AOLiWTZeZbZfXz2xSjnHeIVqb2FVXsygaNSvB0j3nCxNu7x27OolMBRJuRjvfX5%2FEPOPCOR9oo26%2B3XItqnhXJB%2FUzK7lmCLpTCX6n7KbGPau0iZE%2FD6DW3tExU23zb%2BB4hv7Vx03jVd4%2BtsWDdRvo1q8auCC6wFXZ%2BJZDKhQFdLxX%2FB%2BmB2octeMAD9Hathgb00YBFHBtP1nmm%2F%2BscDTRBHhay6h98aIWDJV3E4crQSQoYMLSm%2FnA9TSa1EXW5N1JIeLIltnLsaN66Oy1sk2yt%2Fnv5yIg%2FQ9XQLKh39zhNqZj3KMyL6V9Wo4rVBtf8vK9EbvxQPv2HZ78dleqw7GdsPvGT888%2BlIZ5jah%2BiCCGSYbQKCbKcbP5xLXr%2Br%2FweyOaLN5uYyPe4X5oGPdRIUFYA6UXM8qHxCwuvx38W%2FhgK1vNP%2FVUtIiOjTnDRaIjS0roZpXLFbJWGhBxEWuTyJza07r9ie8zIcHtJl3ziHhDcVT4nWrODmNN8C3BmNiKrUqcZPSfh4l3J0HNHnU0Tnj9RNPuLNCf56t3QFIkSb%2F98sS%2BjhSeXhri4mayX%2FuaJZM%2FV2MIJzrc2BboMQL5VJxWXAgfpDgg672nT3Q8IsR2Ac9Q55aK8Kv2ck79BzCAsvPCBjqkASBtZI4VdOcXXo%2FZn4WIZMBMITvgrwkvgWaYQcTKWmfx8HXNh3%2BSf%2BnQrO1yr1Utwkj%2B2Ptvx%2FrVw5eWT0DiU023rveeaRlrxJgrn4iqWzrP4hj3Umn30lHflvMLHFCkT0oSRvmb8SSZ%2FqO2y6qy%2B70Kplrm%2Bp5IAQgVRPnrygm807vh1%2F0WxiMbNBlGJLdx7N%2FT9EWD3N9R5vZ%2Bmi6zPpTgch7P&X-Amz-Signature=cd03c11a4d5d4f800c6c62b28417ff2d2e58366f5cd50892fb4cc6f8551e2141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3TLTDB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCVaZfnKhbQ%2FFDbFCAzlCikaC1IIvHrxBoSgveURVud7wIhALlFn4VXrmuVmltnUFYtJitzL8vM71LdgrLKZiWs4QqtKv8DCFYQABoMNjM3NDIzMTgzODA1IgwHIJthy0YA7y6jmmgq3AOLiWTZeZbZfXz2xSjnHeIVqb2FVXsygaNSvB0j3nCxNu7x27OolMBRJuRjvfX5%2FEPOPCOR9oo26%2B3XItqnhXJB%2FUzK7lmCLpTCX6n7KbGPau0iZE%2FD6DW3tExU23zb%2BB4hv7Vx03jVd4%2BtsWDdRvo1q8auCC6wFXZ%2BJZDKhQFdLxX%2FB%2BmB2octeMAD9Hathgb00YBFHBtP1nmm%2F%2BscDTRBHhay6h98aIWDJV3E4crQSQoYMLSm%2FnA9TSa1EXW5N1JIeLIltnLsaN66Oy1sk2yt%2Fnv5yIg%2FQ9XQLKh39zhNqZj3KMyL6V9Wo4rVBtf8vK9EbvxQPv2HZ78dleqw7GdsPvGT888%2BlIZ5jah%2BiCCGSYbQKCbKcbP5xLXr%2Br%2FweyOaLN5uYyPe4X5oGPdRIUFYA6UXM8qHxCwuvx38W%2FhgK1vNP%2FVUtIiOjTnDRaIjS0roZpXLFbJWGhBxEWuTyJza07r9ie8zIcHtJl3ziHhDcVT4nWrODmNN8C3BmNiKrUqcZPSfh4l3J0HNHnU0Tnj9RNPuLNCf56t3QFIkSb%2F98sS%2BjhSeXhri4mayX%2FuaJZM%2FV2MIJzrc2BboMQL5VJxWXAgfpDgg672nT3Q8IsR2Ac9Q55aK8Kv2ck79BzCAsvPCBjqkASBtZI4VdOcXXo%2FZn4WIZMBMITvgrwkvgWaYQcTKWmfx8HXNh3%2BSf%2BnQrO1yr1Utwkj%2B2Ptvx%2FrVw5eWT0DiU023rveeaRlrxJgrn4iqWzrP4hj3Umn30lHflvMLHFCkT0oSRvmb8SSZ%2FqO2y6qy%2B70Kplrm%2Bp5IAQgVRPnrygm807vh1%2F0WxiMbNBlGJLdx7N%2FT9EWD3N9R5vZ%2Bmi6zPpTgch7P&X-Amz-Signature=7fc7619b95a813f360a897e8bff2da9371ced52b7da3f8d16610be50e2ef7115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
