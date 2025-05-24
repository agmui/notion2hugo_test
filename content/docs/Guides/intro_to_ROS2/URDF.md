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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXF4YLD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCHpQIBO5I%2FMxretvKFfXR2W1D81YFTo5VLJpnSBtivQQIgVrgaWTIbyLV33yj57cQqLnAxsbz68yNGm8wRy8w56WoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0%2BGn8OeNHcnozHqCrcAwJtU9EJDP4SaVXULHYtPNpt1bv23%2FY4debgKW9PUn8CzHFM7KgDmCKUD29M4XkqUWcXpg7DTezl3%2FUtdt%2F4QRNhAOdDyeMRz0Jii38SVttVmMfJAHcFF8hDvorJm8m0u4%2BktgsXl8vQELpjy3FVlah5wAKtGx%2BYDoxMCnrSMQTVrv%2BUvYGGUxM5GfHApMyKCZb5yC95dDvxmi7VEpg6TWXCW%2Be6dFOyylvoaU22cqFPK%2BBCKJfR3b%2F5vBBQxH18Kd%2BMVxrhklY1d%2BJ9Gbd8DxMl47Ag26AJVnUsb2mRJU2ye8pm19Ru9eZfu9x5b%2BFC9SwdZg9GSPvkzmTsnryuhpGUh6IR8FCOUaemhdO2gECjgIEzbYfOGGqB4K%2BlRoIe1%2B33nE7U5%2BVMQXcURnij6L4DIv%2Fjwk1ykel%2FnKyJdDgTaU1lczUfc5BQPBVDuIvFJj3gJMmkX%2Fv42D7jK9%2Fk5GyPvG9wUuazOKtP28Gq%2FdrgQNuVLgLO%2FLAtIpAnUQwJIqcI9nM3cpNpLYoaU%2BLoQFzACMS%2B98%2B46X8qYSlXlv56weVikeQI45rm2NNFFcYw%2BpCMqlOuAbpXzdsEULxNV0Md4ONVmzGS804uGu5ufTBbbPYESXrY7ALpxYYmMLWrxcEGOqUBaUKj5oYeikRxgFX8rTzBQx64NO9OlvaAcgIKBg%2BrpXNyfxCD7OWoBX8vS8VqDjoHw6Lohhz2BqhajElNd39pAxGKlR5h2seqBOjkr6taeQgd8eNfPEnzrojcoiIprHGt8XdMIDrq8wB7DnUB3xtLgcADV5rhAEcoAdAuhzyQB6k%2BU%2B7jwdOgWPXU1AcTwbvlwohzUNmZmEnuX7UZd8i87Qx8xU6k&X-Amz-Signature=fff6df85ed24579339d70571403f02daa89e0552e8ad032b1b45f3aa142bb33e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXF4YLD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCHpQIBO5I%2FMxretvKFfXR2W1D81YFTo5VLJpnSBtivQQIgVrgaWTIbyLV33yj57cQqLnAxsbz68yNGm8wRy8w56WoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0%2BGn8OeNHcnozHqCrcAwJtU9EJDP4SaVXULHYtPNpt1bv23%2FY4debgKW9PUn8CzHFM7KgDmCKUD29M4XkqUWcXpg7DTezl3%2FUtdt%2F4QRNhAOdDyeMRz0Jii38SVttVmMfJAHcFF8hDvorJm8m0u4%2BktgsXl8vQELpjy3FVlah5wAKtGx%2BYDoxMCnrSMQTVrv%2BUvYGGUxM5GfHApMyKCZb5yC95dDvxmi7VEpg6TWXCW%2Be6dFOyylvoaU22cqFPK%2BBCKJfR3b%2F5vBBQxH18Kd%2BMVxrhklY1d%2BJ9Gbd8DxMl47Ag26AJVnUsb2mRJU2ye8pm19Ru9eZfu9x5b%2BFC9SwdZg9GSPvkzmTsnryuhpGUh6IR8FCOUaemhdO2gECjgIEzbYfOGGqB4K%2BlRoIe1%2B33nE7U5%2BVMQXcURnij6L4DIv%2Fjwk1ykel%2FnKyJdDgTaU1lczUfc5BQPBVDuIvFJj3gJMmkX%2Fv42D7jK9%2Fk5GyPvG9wUuazOKtP28Gq%2FdrgQNuVLgLO%2FLAtIpAnUQwJIqcI9nM3cpNpLYoaU%2BLoQFzACMS%2B98%2B46X8qYSlXlv56weVikeQI45rm2NNFFcYw%2BpCMqlOuAbpXzdsEULxNV0Md4ONVmzGS804uGu5ufTBbbPYESXrY7ALpxYYmMLWrxcEGOqUBaUKj5oYeikRxgFX8rTzBQx64NO9OlvaAcgIKBg%2BrpXNyfxCD7OWoBX8vS8VqDjoHw6Lohhz2BqhajElNd39pAxGKlR5h2seqBOjkr6taeQgd8eNfPEnzrojcoiIprHGt8XdMIDrq8wB7DnUB3xtLgcADV5rhAEcoAdAuhzyQB6k%2BU%2B7jwdOgWPXU1AcTwbvlwohzUNmZmEnuX7UZd8i87Qx8xU6k&X-Amz-Signature=77659c566fd88760e712179761acc73d97ae88aa5082210ab601aa88e064a355&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
