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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JZNIDU2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuWM7nrbHk4oTNtd5%2B%2BGlGl%2FScdi7OU9EeWA%2FvsBO9uwIhAId6fQf%2FYr6CtqDVTknSSDLCSDbhuUq3oDXB3dyMC%2F%2FxKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwljOnqJtrOxrbCa9cq3AMVfvSlh34L6FQ8U9ti%2BB1dKcZnloGk9wGxep%2BD%2F32kgsW9p6C614Z8mXtLJCery6HMn9cwsxY2aKQ1Bf9uH22enlyUjUAoYXxcwx4qiF43pKA5xzNXQleRebomtlVkTdRpL%2BHyeHz%2BEKYYhws3A3zkFQVp%2F%2F1%2BiNrUjBSJlBo%2Fb%2BrVFfDRX3%2BNgThc3n5Ta9BNeaqZ8QH7ECXBTACPVHfVSpbZ1y5pnLNZcAEuxnvmemUcy7YFjgK%2FYLx0Z71%2FmhmHRSsGSEQxFnLhXvmIeDr6Yt3X7jvsjzgsuSUXNvwNjJH3mPxSjZIB%2BuBO2giuXxOHj2Nsu3ZMsN6Eymz4174Ic5Fw8lKk0miYc6Kn1LzfWJvCdJomI%2Fas3T8eYQaFdHmNEKWQxGygfoR27eezdEjLKg7wveKTSoTceW%2BWRYZ%2F%2FeP5uxLZF6a7rLq6kdp2%2FD9riI9uesR3b7Gklcc9YxDEQ7WzzwOsjJR8%2BANLHkJceTHSewQQFWh2DGlxxm74bnpdBDMoP7hFmjQkt0LBDKDfKIxWOOGK%2FRwKIuccHkziGGSSaWhXly6WVzkg1h7Zo0b881gZnL4ITiWkZyh%2FxOci4LhnOPGnWfJA61HP3lB%2ByzXeIPLz8hVTUmJSnTDi5Ki%2FBjqkAbLmtc%2Fqjp0axHouExJg%2F8Sq48gAqrZHCuF108ChpIjERAhhvycsxvsSx6J29%2Fh0G79lYade3LbudW%2FLL1A%2BOlR%2FIHLzVUON%2BzJkfoaa24G%2BInISVf5MZn%2FwEhwOx8wv%2FCtr9nq%2BchjVc2%2FN9q%2B%2BRaRwlw7IZd82vEWUSaTLQOsxVoabHYMWmJsSJu%2B0SzFeY8W3PHu%2FEFKG%2F%2FrqL8T8QAApHT9D&X-Amz-Signature=3e39f1704333d079c578784e272744db076639cb36de9bfbd2d0ee7cd0345613&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JZNIDU2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuWM7nrbHk4oTNtd5%2B%2BGlGl%2FScdi7OU9EeWA%2FvsBO9uwIhAId6fQf%2FYr6CtqDVTknSSDLCSDbhuUq3oDXB3dyMC%2F%2FxKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwljOnqJtrOxrbCa9cq3AMVfvSlh34L6FQ8U9ti%2BB1dKcZnloGk9wGxep%2BD%2F32kgsW9p6C614Z8mXtLJCery6HMn9cwsxY2aKQ1Bf9uH22enlyUjUAoYXxcwx4qiF43pKA5xzNXQleRebomtlVkTdRpL%2BHyeHz%2BEKYYhws3A3zkFQVp%2F%2F1%2BiNrUjBSJlBo%2Fb%2BrVFfDRX3%2BNgThc3n5Ta9BNeaqZ8QH7ECXBTACPVHfVSpbZ1y5pnLNZcAEuxnvmemUcy7YFjgK%2FYLx0Z71%2FmhmHRSsGSEQxFnLhXvmIeDr6Yt3X7jvsjzgsuSUXNvwNjJH3mPxSjZIB%2BuBO2giuXxOHj2Nsu3ZMsN6Eymz4174Ic5Fw8lKk0miYc6Kn1LzfWJvCdJomI%2Fas3T8eYQaFdHmNEKWQxGygfoR27eezdEjLKg7wveKTSoTceW%2BWRYZ%2F%2FeP5uxLZF6a7rLq6kdp2%2FD9riI9uesR3b7Gklcc9YxDEQ7WzzwOsjJR8%2BANLHkJceTHSewQQFWh2DGlxxm74bnpdBDMoP7hFmjQkt0LBDKDfKIxWOOGK%2FRwKIuccHkziGGSSaWhXly6WVzkg1h7Zo0b881gZnL4ITiWkZyh%2FxOci4LhnOPGnWfJA61HP3lB%2ByzXeIPLz8hVTUmJSnTDi5Ki%2FBjqkAbLmtc%2Fqjp0axHouExJg%2F8Sq48gAqrZHCuF108ChpIjERAhhvycsxvsSx6J29%2Fh0G79lYade3LbudW%2FLL1A%2BOlR%2FIHLzVUON%2BzJkfoaa24G%2BInISVf5MZn%2FwEhwOx8wv%2FCtr9nq%2BchjVc2%2FN9q%2B%2BRaRwlw7IZd82vEWUSaTLQOsxVoabHYMWmJsSJu%2B0SzFeY8W3PHu%2FEFKG%2F%2FrqL8T8QAApHT9D&X-Amz-Signature=0c71600e2eab54081bf20888f824934ba13c1ea2a2113d55af2d17b6769f5934&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
