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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MACGY4A%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQHgLPBBzoMf%2FR%2B6h0QH1D8BSJ4jnPJehFi%2FpCYyBUrAIhAP4OVSfQdL1l6dTovo3OFBDkvDRu5C4VuzJ70D%2FLxiTFKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGDHbeguHzBZl%2FcLUq3AO7nuNRGlKYSZRqAi9wi6dLj4YfVc2l3UgAQsZ1lD0xH9KE5PLyLNgeD%2FJgFFRl2pnD%2FhzP5D%2FY%2BhLywzttgSfa4xtgw4tWqsVBPaT6K%2BqIpBHgYOWK%2BR8pQjTVSS7Q4G1RpnRgaprm6X82JivpeEnLqOySdPLarabBAmIlkfUbixxQwsbCcd98LbH%2FB8bh2lTMN6nthx4Y3xC%2BgemkqDmP3hL7GfxnLACw6OxrvnUQoeWe%2B5BqKHfjy8MNw4gaViIwBaWy1lV4nIekNbq40C0sNAutuI19PO7Su%2FCEqHPwf0p%2BdrZKu9uLepZ3BDenI6OyojsLTM%2BxzrvFUTbGHiCyPx8p9qTJk1SYDG%2F7SG7zzTJ106qh%2FAnNG%2FBqS469%2BBR%2B7el0M1ftX5K5sCLpiWYUiiPs2dkKIMb%2F1lxGGX%2FPpjm8xPo2xnyr057IQWBPTJLBSzo2N%2BsyD8eYhuM9mCTtmvDl0XR%2B8gQtAjcjvW0O8FBC56bYsscWvFjGZkhdSEHyy4YhnX8swIbbkHYS1dg34VSjay1NvG0DT8IlH%2BTNZSTixeS0j3Dma5iIsIwC8jrs7wp9FKt54sLw%2Fb72upXC0CFNgfOPRuyerk%2BE7VlV0N40%2FbvQmbaxf%2F4F%2BDCUrJjBBjqkAbx3%2F6NbV5hWT1hrkoIbJBKKPtr0ZyOM32yd%2Fu1eLI6aWSglzQDuSOWvQ%2B8lBHLpLQbNQWBwZl60fJPlcpNFdXgylY5u3AgOmWYyLDCHgxnioi%2Brl3a2cL4ijCJgoy1JSvU6XZRqbgfF59U92whlCY9oAFEO6isKcQbBvZVbE7BL3VCDt5XNY3VeCBlxqIPSG3dq3qLt0zl34yr%2Bxl5oIeYmSqjG&X-Amz-Signature=7e5e531f33001ddf72e37f6c986ba9262be883a35374eaefbf4cc965f4ee9f13&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MACGY4A%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQHgLPBBzoMf%2FR%2B6h0QH1D8BSJ4jnPJehFi%2FpCYyBUrAIhAP4OVSfQdL1l6dTovo3OFBDkvDRu5C4VuzJ70D%2FLxiTFKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGDHbeguHzBZl%2FcLUq3AO7nuNRGlKYSZRqAi9wi6dLj4YfVc2l3UgAQsZ1lD0xH9KE5PLyLNgeD%2FJgFFRl2pnD%2FhzP5D%2FY%2BhLywzttgSfa4xtgw4tWqsVBPaT6K%2BqIpBHgYOWK%2BR8pQjTVSS7Q4G1RpnRgaprm6X82JivpeEnLqOySdPLarabBAmIlkfUbixxQwsbCcd98LbH%2FB8bh2lTMN6nthx4Y3xC%2BgemkqDmP3hL7GfxnLACw6OxrvnUQoeWe%2B5BqKHfjy8MNw4gaViIwBaWy1lV4nIekNbq40C0sNAutuI19PO7Su%2FCEqHPwf0p%2BdrZKu9uLepZ3BDenI6OyojsLTM%2BxzrvFUTbGHiCyPx8p9qTJk1SYDG%2F7SG7zzTJ106qh%2FAnNG%2FBqS469%2BBR%2B7el0M1ftX5K5sCLpiWYUiiPs2dkKIMb%2F1lxGGX%2FPpjm8xPo2xnyr057IQWBPTJLBSzo2N%2BsyD8eYhuM9mCTtmvDl0XR%2B8gQtAjcjvW0O8FBC56bYsscWvFjGZkhdSEHyy4YhnX8swIbbkHYS1dg34VSjay1NvG0DT8IlH%2BTNZSTixeS0j3Dma5iIsIwC8jrs7wp9FKt54sLw%2Fb72upXC0CFNgfOPRuyerk%2BE7VlV0N40%2FbvQmbaxf%2F4F%2BDCUrJjBBjqkAbx3%2F6NbV5hWT1hrkoIbJBKKPtr0ZyOM32yd%2Fu1eLI6aWSglzQDuSOWvQ%2B8lBHLpLQbNQWBwZl60fJPlcpNFdXgylY5u3AgOmWYyLDCHgxnioi%2Brl3a2cL4ijCJgoy1JSvU6XZRqbgfF59U92whlCY9oAFEO6isKcQbBvZVbE7BL3VCDt5XNY3VeCBlxqIPSG3dq3qLt0zl34yr%2Bxl5oIeYmSqjG&X-Amz-Signature=f60618e609d9063a702d3f14dba112b6e4a7cdd7f23994f5ca3ff1b097088d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
