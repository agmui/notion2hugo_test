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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364A54OC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXxzrCcJqeYOIRNAekXhSN6YGzQ%2FrxfSU%2BPObfDwVogIgXsaRESurIDp9aJ3kLpi4kXne8k5uAOxGW0EK4ojXGBQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZn63UC3YwbUWzQBSrcA6SH5gawzLjloPjCSCd9WB6XVOhrgHO5N1ejmT72Onqgn8qh7n62uE9jvcswHrIZkvANYBtKxMYmHOyy1%2BI3y8A9lfLJwbdNH9xOxt2%2BKjMZ%2FMZVCVxnqHc5G05jC18SUSKq%2F1eec%2ByW09iU3N85uyFYsoQNo%2BEh3BDmaTytJRXDOifcfN8aFm6sz4l3qJsM3%2FHmC7wPgJrp9Bxh3qsJ%2BhADtnH4nlHPnjNRrMaAtGmqZcmgJkd8g8yitBe2AHt9CWmctxv0RrpXzifOJBLSJPLQVsOF%2FLnCJu9qlgZGW6UQZXdGJfR8aUN5LmYL%2FmWb7YVWKdYcpulxUsHATwwb9aHRbUAjnx%2FETTrx%2FbNW4RPnxSOBTI4L0qnjAEuQiZLqlF7y%2BZBDVs1qvb9qGXILq9l5sLS3U0u%2FZdAy4CNMzhJ9eOaeyXmYK7xx4SU7TjSmqzuIx5k1XoIo703YqjPQwYUk06H%2FtNQ7QzBZu6vfweqROgvttymIHoNoxT6zpAZcog0wJEuYtYlefu0%2Fx3%2BiNZdjWElLUyZAaT17lx0LgpI2ILSsbkZu%2BxC7Lg7t8q%2FSz2lh7T0MsNMVFWu5NOskxiDkEw7Kusm3x94WbEKQHoFtvvORsgA18ycVspUiMJyLwsAGOqUB%2FIYuBHrDo6eEQZGcZstsC4nPbza%2FRec5PotAeFRtgB%2FIGXvN1Fy1tv3IcJWlaUBYMqyrbdGOjORQ1%2Fg%2Bhho070s8DzcByxgxLHOrl2af1tFiWep8R30E264yrzJiFmy45dqmyG8dPWardicb7T6M9xA39N6U4Fyqmql%2FlflRi2yEKq3wrkABwQvvLiUWV%2FQKThW0aw4nROogTquTCa3p7YbasZGD&X-Amz-Signature=70c2ffd19b71c757878353119aff5feb3a7194508a860d9fbd678c74d1a80f78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364A54OC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXxzrCcJqeYOIRNAekXhSN6YGzQ%2FrxfSU%2BPObfDwVogIgXsaRESurIDp9aJ3kLpi4kXne8k5uAOxGW0EK4ojXGBQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZn63UC3YwbUWzQBSrcA6SH5gawzLjloPjCSCd9WB6XVOhrgHO5N1ejmT72Onqgn8qh7n62uE9jvcswHrIZkvANYBtKxMYmHOyy1%2BI3y8A9lfLJwbdNH9xOxt2%2BKjMZ%2FMZVCVxnqHc5G05jC18SUSKq%2F1eec%2ByW09iU3N85uyFYsoQNo%2BEh3BDmaTytJRXDOifcfN8aFm6sz4l3qJsM3%2FHmC7wPgJrp9Bxh3qsJ%2BhADtnH4nlHPnjNRrMaAtGmqZcmgJkd8g8yitBe2AHt9CWmctxv0RrpXzifOJBLSJPLQVsOF%2FLnCJu9qlgZGW6UQZXdGJfR8aUN5LmYL%2FmWb7YVWKdYcpulxUsHATwwb9aHRbUAjnx%2FETTrx%2FbNW4RPnxSOBTI4L0qnjAEuQiZLqlF7y%2BZBDVs1qvb9qGXILq9l5sLS3U0u%2FZdAy4CNMzhJ9eOaeyXmYK7xx4SU7TjSmqzuIx5k1XoIo703YqjPQwYUk06H%2FtNQ7QzBZu6vfweqROgvttymIHoNoxT6zpAZcog0wJEuYtYlefu0%2Fx3%2BiNZdjWElLUyZAaT17lx0LgpI2ILSsbkZu%2BxC7Lg7t8q%2FSz2lh7T0MsNMVFWu5NOskxiDkEw7Kusm3x94WbEKQHoFtvvORsgA18ycVspUiMJyLwsAGOqUB%2FIYuBHrDo6eEQZGcZstsC4nPbza%2FRec5PotAeFRtgB%2FIGXvN1Fy1tv3IcJWlaUBYMqyrbdGOjORQ1%2Fg%2Bhho070s8DzcByxgxLHOrl2af1tFiWep8R30E264yrzJiFmy45dqmyG8dPWardicb7T6M9xA39N6U4Fyqmql%2FlflRi2yEKq3wrkABwQvvLiUWV%2FQKThW0aw4nROogTquTCa3p7YbasZGD&X-Amz-Signature=285eb3dd9e603894cc611b4ebfede4873659d0bc3831f942eff36c963a98b3de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
