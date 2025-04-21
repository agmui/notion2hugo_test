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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4THARRW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCICUuA8GqxTgvCJf6itP6hVVvk1SUyy%2FZxIAVBx65qr%2FwAiEAiYQXgU0GJZnGIko0QATom%2FEzkEDb62Qq5Lpf7HlNszUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXx2%2FqGvhAuK4fPbCrcAx6Y9Yx4yKxD3t7s%2Bnxm2ct1IlIdyLL0foL%2FcvQXpp08bKbzdQ3RlUTsJ6slWgU5EF0uhLoYLVD2hW7glaZmABQc04oYu1Iamb1ugiNRuO8FLfFZ4P%2Fqb3TSv5GCxMBO%2FIf07AyZAmKDelArO9aVXv8QLVzvo9%2F9r6bKcQ8SVlu6tnw5ORgxDv9I9CBYAZGzemWCmyzaASbGR%2BatUqo0EBay%2BuWtbnB7NA6npZgGOw4Axeyrt4%2FL%2Fj5moMO8DdgV2mrBJpY2Fojwg2XNZ333P9wbkWmvjogy743SLLSplLtjsLGks4NDy0T6aNvTXtXdDsakRIVQxjXiukEJtvbL2A8nl1DjqsuUpYySYVyL0AIsyNEiWEdM%2F66p7vS%2BwOg6v1bG9ZV6rSknY8tw%2FAh66%2Fka9QkXR6AzCVjB1gYhl5CAXpTdT%2FGG%2FMX2MnG1sHghYS9Alx%2FUvQWF%2FlxFVPHgU2rt4q%2F0%2FsxFo33dlbgRRzBgXYZNPY7vk4I7u2JBNKc1yi5i9ncx8JXdbgVILTnykBzz58QqD23tF5OIVwKISoz9sUHGPhiKaccMFawAOkLle6UlOM4i5VgIzCZaRoAUqU7G3OB%2BH%2BR93taoCqcAMs0j7Gb2wFpNwff8l2tqMMC8mMAGOqUB0SZK7YLHYoWbTocWVXBWJUupLPWTig5CNbfAmgFNjzrfmtyl%2FlaTAK9A9PDCzCt3T32uavWwAkGuCJaJ%2BGBQIv2m%2FYJTrFjVwFaflpt2LtGNig3EjIK7eQ6yvJQD8iEQ%2F3nF1FnEqL33tRTfXBo2gfzu5HCWlZ3TFZcXaiZ6LK7VNyS%2BVeBtEZz%2F8rYR8VSAbuGOKis8kgq6Re57mB7Q%2BEWIlU73&X-Amz-Signature=9717cfb30c6d86a4b9543c9eeed53b32e6dc594ccbc3603ab69de5fa2f05b801&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4THARRW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCICUuA8GqxTgvCJf6itP6hVVvk1SUyy%2FZxIAVBx65qr%2FwAiEAiYQXgU0GJZnGIko0QATom%2FEzkEDb62Qq5Lpf7HlNszUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXx2%2FqGvhAuK4fPbCrcAx6Y9Yx4yKxD3t7s%2Bnxm2ct1IlIdyLL0foL%2FcvQXpp08bKbzdQ3RlUTsJ6slWgU5EF0uhLoYLVD2hW7glaZmABQc04oYu1Iamb1ugiNRuO8FLfFZ4P%2Fqb3TSv5GCxMBO%2FIf07AyZAmKDelArO9aVXv8QLVzvo9%2F9r6bKcQ8SVlu6tnw5ORgxDv9I9CBYAZGzemWCmyzaASbGR%2BatUqo0EBay%2BuWtbnB7NA6npZgGOw4Axeyrt4%2FL%2Fj5moMO8DdgV2mrBJpY2Fojwg2XNZ333P9wbkWmvjogy743SLLSplLtjsLGks4NDy0T6aNvTXtXdDsakRIVQxjXiukEJtvbL2A8nl1DjqsuUpYySYVyL0AIsyNEiWEdM%2F66p7vS%2BwOg6v1bG9ZV6rSknY8tw%2FAh66%2Fka9QkXR6AzCVjB1gYhl5CAXpTdT%2FGG%2FMX2MnG1sHghYS9Alx%2FUvQWF%2FlxFVPHgU2rt4q%2F0%2FsxFo33dlbgRRzBgXYZNPY7vk4I7u2JBNKc1yi5i9ncx8JXdbgVILTnykBzz58QqD23tF5OIVwKISoz9sUHGPhiKaccMFawAOkLle6UlOM4i5VgIzCZaRoAUqU7G3OB%2BH%2BR93taoCqcAMs0j7Gb2wFpNwff8l2tqMMC8mMAGOqUB0SZK7YLHYoWbTocWVXBWJUupLPWTig5CNbfAmgFNjzrfmtyl%2FlaTAK9A9PDCzCt3T32uavWwAkGuCJaJ%2BGBQIv2m%2FYJTrFjVwFaflpt2LtGNig3EjIK7eQ6yvJQD8iEQ%2F3nF1FnEqL33tRTfXBo2gfzu5HCWlZ3TFZcXaiZ6LK7VNyS%2BVeBtEZz%2F8rYR8VSAbuGOKis8kgq6Re57mB7Q%2BEWIlU73&X-Amz-Signature=38b7497fd0acb80737bf9548216a1cd3239d572d2d9ef64e6e353adae5083498&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
