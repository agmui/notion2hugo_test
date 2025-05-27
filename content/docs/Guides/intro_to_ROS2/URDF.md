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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFITSCE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVtl3N%2BhoR0R%2FSMp%2FOSNN2lo3dcUq4eD1gGzm8HxOZoAiEA%2BjqLKlcgn1b9ESXDmWKmplAOjsfLAdZGAPEFwqNTiZsq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFbLP4l7v3WDQ3nFACrcAxE6srM0HocYu4SW0S%2B9U81qruMT%2B9Wwprpf0Id4IhFUQtpQcQKWhFcrYEXvY9q1z4vlDwfznk4yFv0LJeGODP32XZ5WzJiqCiUpdBkO94o%2FOAZP9UA%2F8TT1HyJag4mz%2BfTmf8lg7gY8EwMzWSYqo0eEE29pcRkhX1BeuWossf6naPEl8hN%2BDu%2Fl7xV%2FaS80fL7q9Gs9T9CEUwMUP2GANgIujgUp81U9ykCba3I4G8BXN7x7LVwNgOHMBW%2BsTXjMStiSuopBn6FLQHGZitRsIC7cXepHKckkw8XogzEFJViKbKwK0lNU08MvzSCZXUACNHjIb4Z%2FDLAFn8gVw8kGMr6LlUCn%2BK%2FYKvKbQWaAB9%2FJ6DZr5jfYMDLJ%2BAaEXkodzg6UeMP5yi0TsQ%2FtYBHQFQ67y9sUm4RLxyT1Ix0ewUPdmT2rVtt2Y%2F0%2F1wMdBvHIzt%2F65yqNI3vp9YqJHgUJwrRYIApkSYZgghRRQbzaCjNL1B99bXCo6MfsYLF%2FO6rpuzUB50iDeIrKWtP6D%2BcOEAW0KbrB9LrO2iL2AnXQ7J3h4FYs6yQSl7KLHRHd2xutPU8LNbwo9gAd4XjN8nYt1MpTiekL6GMj8jiLqnEkvum6pfsSWVo5Tud4qS4VMMaW2MEGOqUBDWLP8d6fvVxYQe1i0rk0SikBkgW%2FJ8kZvlkQqFhcyOYs5hbyS2X8eRvOhzrsFlowo24T9oUKEq8wTudZquLBn%2F1lisgHs%2B2xDU44deYYMKVjNcCVYiOwGMRr5xtF3v0WJExfjgkNYmGkxlet%2BC5YURhbWLsZm10eW5QuICP4hnuC7vi5lW1%2FoVdjY%2FeCJM2FvRip5cpGebog7zv%2FGWTCfQY1zfSK&X-Amz-Signature=80472743e3bfaf4feddcceb8730d4848864a787e39cd1414c3b2a566c7350d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFITSCE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVtl3N%2BhoR0R%2FSMp%2FOSNN2lo3dcUq4eD1gGzm8HxOZoAiEA%2BjqLKlcgn1b9ESXDmWKmplAOjsfLAdZGAPEFwqNTiZsq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFbLP4l7v3WDQ3nFACrcAxE6srM0HocYu4SW0S%2B9U81qruMT%2B9Wwprpf0Id4IhFUQtpQcQKWhFcrYEXvY9q1z4vlDwfznk4yFv0LJeGODP32XZ5WzJiqCiUpdBkO94o%2FOAZP9UA%2F8TT1HyJag4mz%2BfTmf8lg7gY8EwMzWSYqo0eEE29pcRkhX1BeuWossf6naPEl8hN%2BDu%2Fl7xV%2FaS80fL7q9Gs9T9CEUwMUP2GANgIujgUp81U9ykCba3I4G8BXN7x7LVwNgOHMBW%2BsTXjMStiSuopBn6FLQHGZitRsIC7cXepHKckkw8XogzEFJViKbKwK0lNU08MvzSCZXUACNHjIb4Z%2FDLAFn8gVw8kGMr6LlUCn%2BK%2FYKvKbQWaAB9%2FJ6DZr5jfYMDLJ%2BAaEXkodzg6UeMP5yi0TsQ%2FtYBHQFQ67y9sUm4RLxyT1Ix0ewUPdmT2rVtt2Y%2F0%2F1wMdBvHIzt%2F65yqNI3vp9YqJHgUJwrRYIApkSYZgghRRQbzaCjNL1B99bXCo6MfsYLF%2FO6rpuzUB50iDeIrKWtP6D%2BcOEAW0KbrB9LrO2iL2AnXQ7J3h4FYs6yQSl7KLHRHd2xutPU8LNbwo9gAd4XjN8nYt1MpTiekL6GMj8jiLqnEkvum6pfsSWVo5Tud4qS4VMMaW2MEGOqUBDWLP8d6fvVxYQe1i0rk0SikBkgW%2FJ8kZvlkQqFhcyOYs5hbyS2X8eRvOhzrsFlowo24T9oUKEq8wTudZquLBn%2F1lisgHs%2B2xDU44deYYMKVjNcCVYiOwGMRr5xtF3v0WJExfjgkNYmGkxlet%2BC5YURhbWLsZm10eW5QuICP4hnuC7vi5lW1%2FoVdjY%2FeCJM2FvRip5cpGebog7zv%2FGWTCfQY1zfSK&X-Amz-Signature=3eb2c05006c1aaa595b3c1f3ad20756539e66a559a9d203f55e93d1d254a45bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
