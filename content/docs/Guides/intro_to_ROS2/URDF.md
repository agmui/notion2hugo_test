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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GN7PJY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFY6zoO5eOhEg%2B8O3yVt%2FHRT%2FmP6350AYE7z8d6IlTAJAiEAk2%2FGKAyUdYj%2FmVsbUNPaVC9OZh0nAOzxQ1%2FMLlDgLUMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBPdRVpY5Rk3mJRK0SrcA5hXOzeXM8voh%2BQWYRgT9W3lXC71V0s6ZdyGF4Y%2F31sH4z5Z00zYywxP6ewkR5RC5OqyirHl3MUMQdVYl6%2F56t8KtoSlJmSGcwgfbWvCSgTk%2BHpQwFLi%2BumUfbGA%2FhtoAIe51Mc1SPnd22Uf411GkD0jMNdSx5v1yl%2BZ1nNKlurzlS%2B9ym%2BgKEh5bHmHhWpHWn9vI%2FbiR2FPHEcdFB6IrnbKkYZl9cKZimn1SMXQpPGnhGp%2FXr85AMHyfIACQ8VZv3BAI74H%2Foz14%2B4qYJRRecPDXVPy9Yh5phTmgWxUSTR%2F766PJ1Se91Nd%2BVTaOj3QMHsC0eCMtV1%2FMBURnUSyXSNyvfgnodzxZeb0vy1T1%2BuzRAhmNBm8pYUBSxMgcCkwn1M%2FYz0rxyjGS1ySjaxzs1ycVfXjuHZtTYDftGeeFiqwBCvSetBbhMSlzo%2FxDQNHb7GoZbcBqQ4460EuhhwsTl5J2mnLkr419KXzbgj3DAUuw%2BT%2Fg3kJ6ZZOHbZeJHAiz%2BfHDK9j0%2FVPNiX7t%2BuHNKhrthPXOcph7QGlYN6RbuJfwGaLYZxhS8Ss8Mrvgx9u%2FWHNnUCV2ELw7MY3kz2QzCfpbi4FSV7mHOTFR8CpTSnLe0zAwfLQwQNoslHOMLHj6b4GOqUBZB7bJRi0bKu1%2BNsKi5TUL5bf%2F7h29ldysYb5GANJO2%2FC6jPu%2FG1egg3BSGoy9WmKSiQJbeK7iWAAoxHu%2BY1hhj7f2P3W2nw4TLWo5uKJWWeb9%2BMMXKVQAlSaKLq7CZWIZiFSoNf8RPZm2u3KGkFgZy3LoMoGkZPNWtSUEHzugLaPjn2rPhbfDwdrxA5EXbr09AgpLS0SfsFSIwUcCBTcdMN88DFe&X-Amz-Signature=bad6079bc386d13e963688622a6aa586956144507a7903ba0e748a0a1e395a58&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GN7PJY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFY6zoO5eOhEg%2B8O3yVt%2FHRT%2FmP6350AYE7z8d6IlTAJAiEAk2%2FGKAyUdYj%2FmVsbUNPaVC9OZh0nAOzxQ1%2FMLlDgLUMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBPdRVpY5Rk3mJRK0SrcA5hXOzeXM8voh%2BQWYRgT9W3lXC71V0s6ZdyGF4Y%2F31sH4z5Z00zYywxP6ewkR5RC5OqyirHl3MUMQdVYl6%2F56t8KtoSlJmSGcwgfbWvCSgTk%2BHpQwFLi%2BumUfbGA%2FhtoAIe51Mc1SPnd22Uf411GkD0jMNdSx5v1yl%2BZ1nNKlurzlS%2B9ym%2BgKEh5bHmHhWpHWn9vI%2FbiR2FPHEcdFB6IrnbKkYZl9cKZimn1SMXQpPGnhGp%2FXr85AMHyfIACQ8VZv3BAI74H%2Foz14%2B4qYJRRecPDXVPy9Yh5phTmgWxUSTR%2F766PJ1Se91Nd%2BVTaOj3QMHsC0eCMtV1%2FMBURnUSyXSNyvfgnodzxZeb0vy1T1%2BuzRAhmNBm8pYUBSxMgcCkwn1M%2FYz0rxyjGS1ySjaxzs1ycVfXjuHZtTYDftGeeFiqwBCvSetBbhMSlzo%2FxDQNHb7GoZbcBqQ4460EuhhwsTl5J2mnLkr419KXzbgj3DAUuw%2BT%2Fg3kJ6ZZOHbZeJHAiz%2BfHDK9j0%2FVPNiX7t%2BuHNKhrthPXOcph7QGlYN6RbuJfwGaLYZxhS8Ss8Mrvgx9u%2FWHNnUCV2ELw7MY3kz2QzCfpbi4FSV7mHOTFR8CpTSnLe0zAwfLQwQNoslHOMLHj6b4GOqUBZB7bJRi0bKu1%2BNsKi5TUL5bf%2F7h29ldysYb5GANJO2%2FC6jPu%2FG1egg3BSGoy9WmKSiQJbeK7iWAAoxHu%2BY1hhj7f2P3W2nw4TLWo5uKJWWeb9%2BMMXKVQAlSaKLq7CZWIZiFSoNf8RPZm2u3KGkFgZy3LoMoGkZPNWtSUEHzugLaPjn2rPhbfDwdrxA5EXbr09AgpLS0SfsFSIwUcCBTcdMN88DFe&X-Amz-Signature=de1733f7c844ba3fd71f5cc5ae7dc814b72f97b3dc54351fa9d2019ab52b63e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
