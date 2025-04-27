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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABQKSXG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzgo39aCbTsDEhwBjoVkW%2FP5coVNHBG3pGu%2FpyaVgBgIgNNR%2BTo0H7h9QF%2BZjeFRA1hof7hPXxZY499iCwhe8Zjgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDE3IVKIYKur3IaEADyrcA7FOoaDh4hLz8e0tPq3XxFDrUZmwWSIRvnUqJTQOOkkiDkLXlfR1oqUiQqDONnNVN9oXECSIqkQRyNUEmVMvNAMnJUQEzPWuzVN6meKSxrDg2%2BeyTPPyoqyeSHSwH4Q98PlRnwlP5KO4DnC7GEl2mwrXO%2Fx1w6zZkpv0dcFzRSRKhB4fqRJ9%2F960DPbJ3A0d2g3kmx9RlIWq%2BH8QcGWICYXa%2F3vYC2Vrt%2FRqOmNP3ZoHwIte6YaLcqYBtk8Oq4Blz0t7t2lqNIAbKt7fiWAQ5nIvWOEFuVobjshkt%2BSeUqFinERu0UWxeRopb9H%2BPHMQwWN%2FgZGSX8ptdN1D5H5ZlqPj66bq1XD0vWxdHGPZHcomDSs9J5QBrYIjFSUW%2FBpYlEfwjVAzPJ1mXtauD9ItPdevBqE%2F%2BV%2FywCGNdh2RNI5r08oTB%2B%2BRgsLUMBzjQDGnRzHRoHK84biTtPOt1MWJ7rvKZYBvrV1LtOzC3Sbjh%2BTHtBaGUBpGD8MtmdSKmt2nKeDzmHYFZHoUzpCoNWf5wmKBdn8Nb%2B8Bq1yEJ2ea9g%2F8w2VRMBZ7IQq2JtlSG47XJEqWfDeaE1GKpjd2QidPjW6mf%2FZALfo3SVhv4Zo9lMDyHSTmytL1waBgOIP6MMKKusAGOqUB9g7sLUr30p4fsvl9jqay%2FajrlHY%2Fgh4HWNVl6HR9cI9FrJadkhgkR0cFzLI20rp%2BlUzkSYYGC0BYflwHLy0xSP1Yub%2BLUb%2FgDZF3jZyUeAU4nO9gYFQd8wPJWYyBQB7mXReGqRRz7WAPruHftTyxBUIG%2FlWMkb0%2BntPGEn4yM219Of2snqFa1Q7bbysHvX6KWend21z0%2BUXg7mfvcAtCj8WoJ17R&X-Amz-Signature=3457e54540c135f379e2b9ffc35fd40c3a30367b83274fa2faf3c1e3c2d41fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABQKSXG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzgo39aCbTsDEhwBjoVkW%2FP5coVNHBG3pGu%2FpyaVgBgIgNNR%2BTo0H7h9QF%2BZjeFRA1hof7hPXxZY499iCwhe8Zjgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDE3IVKIYKur3IaEADyrcA7FOoaDh4hLz8e0tPq3XxFDrUZmwWSIRvnUqJTQOOkkiDkLXlfR1oqUiQqDONnNVN9oXECSIqkQRyNUEmVMvNAMnJUQEzPWuzVN6meKSxrDg2%2BeyTPPyoqyeSHSwH4Q98PlRnwlP5KO4DnC7GEl2mwrXO%2Fx1w6zZkpv0dcFzRSRKhB4fqRJ9%2F960DPbJ3A0d2g3kmx9RlIWq%2BH8QcGWICYXa%2F3vYC2Vrt%2FRqOmNP3ZoHwIte6YaLcqYBtk8Oq4Blz0t7t2lqNIAbKt7fiWAQ5nIvWOEFuVobjshkt%2BSeUqFinERu0UWxeRopb9H%2BPHMQwWN%2FgZGSX8ptdN1D5H5ZlqPj66bq1XD0vWxdHGPZHcomDSs9J5QBrYIjFSUW%2FBpYlEfwjVAzPJ1mXtauD9ItPdevBqE%2F%2BV%2FywCGNdh2RNI5r08oTB%2B%2BRgsLUMBzjQDGnRzHRoHK84biTtPOt1MWJ7rvKZYBvrV1LtOzC3Sbjh%2BTHtBaGUBpGD8MtmdSKmt2nKeDzmHYFZHoUzpCoNWf5wmKBdn8Nb%2B8Bq1yEJ2ea9g%2F8w2VRMBZ7IQq2JtlSG47XJEqWfDeaE1GKpjd2QidPjW6mf%2FZALfo3SVhv4Zo9lMDyHSTmytL1waBgOIP6MMKKusAGOqUB9g7sLUr30p4fsvl9jqay%2FajrlHY%2Fgh4HWNVl6HR9cI9FrJadkhgkR0cFzLI20rp%2BlUzkSYYGC0BYflwHLy0xSP1Yub%2BLUb%2FgDZF3jZyUeAU4nO9gYFQd8wPJWYyBQB7mXReGqRRz7WAPruHftTyxBUIG%2FlWMkb0%2BntPGEn4yM219Of2snqFa1Q7bbysHvX6KWend21z0%2BUXg7mfvcAtCj8WoJ17R&X-Amz-Signature=092bd0df95f8e53515ec2bcc0a295a3950e3501b9a371defc769b0a27e165726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
