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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQPTYA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD1nytTAE0M%2FgXByb8bxfYrbFRg%2BHLj%2F%2Fp%2F%2B0PUJOnfegIhAKtrd3DSLvDYKR4QS2SNbQxEgaqCDdHxEmGe50k6uacnKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkWh82Oq56dHqQij8q3AOLPDDm1YRv2jfCkA4Aq88ZQWxPeUtfEtSCY4If%2BBk78LRdFLXKxdDObYhF3s%2BFhe2W3WYHrKxXRNRyrfkgW5oR1cJ6KJC29SYcsn0dgE%2B15EDDkgMP6EfzOn%2B6cGeGpZlQDaBvfn429SFg%2BxXTwtkXaWboPfITYVbfzSEMtz3rLDelIeXO41qTaNGyGn1IkBqFAA9jgccReDCZgvjaj4Sr9xNihrLgEaHj2dVBiFxcRfBbubwFSZ5mdeckYgLlt3b3QnZppsMmXudthjcKqtAqPe7saRf8tooU%2BsIeGzarhlNJ3Xq1Hcqy5J3hVxgCMVyMTuqo3hMqGfspympxrof4Ipd22PleUFwjPbSGwnx3%2BGZhu544IIeqZcp3z7iih6nf77CC%2BpBX31WT9pH3JOF6o847Ee0gUOcl73sebhc0wK0JBIxgFfsUDsti7BWSEj%2BXuFXC6HA5CHUnaad5LB2ANJioJ26xwHI9XJ2VnpXAa9QfzP%2BY%2F71l5worYbH9BPJI5BdrBICc8AASD1Bk3XRWbbB4UlvxrSbXCG2P10zHcMhxYTnsPf3gc5g7jvP%2B9HxkHEDO%2Fn7O0gUyt8QCjgDA6SLaHo50a0y%2Fk2rM5BMPh078oRXgy4wmWeM3tjDv7rK%2FBjqkAUx6tdWNse1c3OSy0Quu3um%2F%2BrmEJ2iUOGd0j7%2F4ZUi9RbMU%2Fhootfo5k%2BpglOAjfPvKqmQHJaoqlLX4PYjug49Uf9%2BGXM0RuSo2wpDsOHaX4htOKk4ibuYmE%2FucMKp1nijjogTdbhOc4%2F9%2FeOyinjVJwjXBS04tgEia9A%2F0tZm7YGnhlZZEwxXhzgtDUd2L1I4B6CiJhbcex3aAWpOAYxsEL%2BiP&X-Amz-Signature=657f0cf6d08ace319b16c918d36c6d0d76d6a32b61102fdce02b8119f74118d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQPTYA6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD1nytTAE0M%2FgXByb8bxfYrbFRg%2BHLj%2F%2Fp%2F%2B0PUJOnfegIhAKtrd3DSLvDYKR4QS2SNbQxEgaqCDdHxEmGe50k6uacnKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkWh82Oq56dHqQij8q3AOLPDDm1YRv2jfCkA4Aq88ZQWxPeUtfEtSCY4If%2BBk78LRdFLXKxdDObYhF3s%2BFhe2W3WYHrKxXRNRyrfkgW5oR1cJ6KJC29SYcsn0dgE%2B15EDDkgMP6EfzOn%2B6cGeGpZlQDaBvfn429SFg%2BxXTwtkXaWboPfITYVbfzSEMtz3rLDelIeXO41qTaNGyGn1IkBqFAA9jgccReDCZgvjaj4Sr9xNihrLgEaHj2dVBiFxcRfBbubwFSZ5mdeckYgLlt3b3QnZppsMmXudthjcKqtAqPe7saRf8tooU%2BsIeGzarhlNJ3Xq1Hcqy5J3hVxgCMVyMTuqo3hMqGfspympxrof4Ipd22PleUFwjPbSGwnx3%2BGZhu544IIeqZcp3z7iih6nf77CC%2BpBX31WT9pH3JOF6o847Ee0gUOcl73sebhc0wK0JBIxgFfsUDsti7BWSEj%2BXuFXC6HA5CHUnaad5LB2ANJioJ26xwHI9XJ2VnpXAa9QfzP%2BY%2F71l5worYbH9BPJI5BdrBICc8AASD1Bk3XRWbbB4UlvxrSbXCG2P10zHcMhxYTnsPf3gc5g7jvP%2B9HxkHEDO%2Fn7O0gUyt8QCjgDA6SLaHo50a0y%2Fk2rM5BMPh078oRXgy4wmWeM3tjDv7rK%2FBjqkAUx6tdWNse1c3OSy0Quu3um%2F%2BrmEJ2iUOGd0j7%2F4ZUi9RbMU%2Fhootfo5k%2BpglOAjfPvKqmQHJaoqlLX4PYjug49Uf9%2BGXM0RuSo2wpDsOHaX4htOKk4ibuYmE%2FucMKp1nijjogTdbhOc4%2F9%2FeOyinjVJwjXBS04tgEia9A%2F0tZm7YGnhlZZEwxXhzgtDUd2L1I4B6CiJhbcex3aAWpOAYxsEL%2BiP&X-Amz-Signature=87e516d268d81f42a85c8c8699ec21820199f5a8470ee744c3f90849cd2455a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
