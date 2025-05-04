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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4SQGI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB9rSdnSOc37JD%2FEj7Xu%2Ff4oVEMXnROQGAQXj%2BHJhQmqAiEApGgzI7Wd%2BdtP4DLc1sljorjZY1lJFwMWwahwuCMBF3wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeGywqGJmujLJ5AFCrcA5%2FHYFklzoWdcs0CysxlZBtp%2BxM%2FqHWDigy7gih7EnLOnuKl%2B5YnoCJUbGfqaAcuh2cG1Y0F8JJ9luCMyDPKYOHC%2BNFDRyaw%2BIUIKhi%2BQBZ1d0%2BeArYAHp2C6WLclfd1vI9sOURwnhY00yzT47w4a%2BjFRFyFSmR7m%2BlVAL5E2oFAtmRjFvwOHIc4gcFvvsslNiTz22oOvMUFbvWFbKcNLFgSKbc3UAH4s3L%2BxLxEy7HpPdMtvUtt%2B%2FpWnar2ECTLZQg%2BQsPEiTOM7d6S2RGuThTL4x%2F4reYvX2BOz3VmT0WTwtQN5ONkyfct7dk0ZpD%2FgqELVN887qNU1PUT0zp%2FKe6KPiLIRIi2rCpKfoFkPHdgSwbl4BZiqkitOjMQvJQQdAvUzkpYd0AnbYKTodQFN%2BFomINHhGQ9INEFbvYvOG8VVJQkJEzBJ8p0JDHJ%2F%2FSakSTo0lnsh2qHkSpv1q%2BulX7jIIhBGRyHYR%2FjNjxdeHI8gQ9GgHAO1T225No%2BNM%2FiXzjTtN71J%2Fl2u%2FgkeoZFa9g3tsX761RezoNZ%2BhNNis5tZ25GMrW0P4fcJbVkVXF5C0xpFHraXxBFrGOfp6J98qpkrNb9HfcBTbwTDV89PukqiFNdiXxzxhSML%2BPoMPHw2sAGOqUBOtmnKWVJ4aGf1oxupDWhttiLo9eYbB9u1PZujLqmi585NKVBN8%2F0wRFHuDVBpC1Bw4r3NpL%2Bvq6XI3fHjPolpS6o0sytS%2F5Q0kTpRs7a%2BNZ%2B81Ltv3j%2BcH6XF7wxJCr%2F1KTf7HNik2nGk6jagcDfWtEFxJUagtCRTN3zYzvYbJ6X8F8Fk22gqbvkI6Q6q4ASh%2B6R%2FO5yOJDxriwcH3pSEfVUYMp6&X-Amz-Signature=3016fb21cfdb6db8de165daa95704270517a4ff1d02e8e52fd6ee3ae4d1c1bea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4SQGI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB9rSdnSOc37JD%2FEj7Xu%2Ff4oVEMXnROQGAQXj%2BHJhQmqAiEApGgzI7Wd%2BdtP4DLc1sljorjZY1lJFwMWwahwuCMBF3wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeGywqGJmujLJ5AFCrcA5%2FHYFklzoWdcs0CysxlZBtp%2BxM%2FqHWDigy7gih7EnLOnuKl%2B5YnoCJUbGfqaAcuh2cG1Y0F8JJ9luCMyDPKYOHC%2BNFDRyaw%2BIUIKhi%2BQBZ1d0%2BeArYAHp2C6WLclfd1vI9sOURwnhY00yzT47w4a%2BjFRFyFSmR7m%2BlVAL5E2oFAtmRjFvwOHIc4gcFvvsslNiTz22oOvMUFbvWFbKcNLFgSKbc3UAH4s3L%2BxLxEy7HpPdMtvUtt%2B%2FpWnar2ECTLZQg%2BQsPEiTOM7d6S2RGuThTL4x%2F4reYvX2BOz3VmT0WTwtQN5ONkyfct7dk0ZpD%2FgqELVN887qNU1PUT0zp%2FKe6KPiLIRIi2rCpKfoFkPHdgSwbl4BZiqkitOjMQvJQQdAvUzkpYd0AnbYKTodQFN%2BFomINHhGQ9INEFbvYvOG8VVJQkJEzBJ8p0JDHJ%2F%2FSakSTo0lnsh2qHkSpv1q%2BulX7jIIhBGRyHYR%2FjNjxdeHI8gQ9GgHAO1T225No%2BNM%2FiXzjTtN71J%2Fl2u%2FgkeoZFa9g3tsX761RezoNZ%2BhNNis5tZ25GMrW0P4fcJbVkVXF5C0xpFHraXxBFrGOfp6J98qpkrNb9HfcBTbwTDV89PukqiFNdiXxzxhSML%2BPoMPHw2sAGOqUBOtmnKWVJ4aGf1oxupDWhttiLo9eYbB9u1PZujLqmi585NKVBN8%2F0wRFHuDVBpC1Bw4r3NpL%2Bvq6XI3fHjPolpS6o0sytS%2F5Q0kTpRs7a%2BNZ%2B81Ltv3j%2BcH6XF7wxJCr%2F1KTf7HNik2nGk6jagcDfWtEFxJUagtCRTN3zYzvYbJ6X8F8Fk22gqbvkI6Q6q4ASh%2B6R%2FO5yOJDxriwcH3pSEfVUYMp6&X-Amz-Signature=8686aefa3b79e3449b90733687a23321804561f950af8ffa1adc82828b92860d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
