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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SKCUI2W%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWhCt7wfFVA5JR9ojvZ%2BgCo3K06wsKhUwN5Xxq319nsAiBqmyAMqnVU8djaTCimIMTL7VR4ZB30U6djkaVeBUI9LCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkw0Ne2Mc%2FnMYZ4kKtwDd%2F%2F8t2mfU6SqwrOpp8GEm0e%2F%2B%2BsTvjk8ORfRh5scFuQRdRUUS6Nlx4ofnQHm%2FUFa1jDYnzKvdfmWAvDd1JDp0Bgjziid6uKR2RMUOjAAwZSIDKfk1v%2B9FhX3ztN%2BwpCkmYnaX8cM5DOhZHUso1%2Bf2nOmeNXI5xM%2BSZLmWyuz0TyeQuOUWF2vfMODV0s6veiR3Ehvrwn1sOQ2ef0XSW1HG3dCfEg1%2BQdiZey%2BI3r%2F32NsdI9gWONXhm7AXcwNKw3Sjt44urwd%2F%2FB%2Fsbi3DVUbf2V3cf18pKLV8fkuHvKUMT0Sd9SlmwfekumAt2zrP%2FbIugHr%2FIO5cAWlGTezP42h83polZTXOpIlfF2OdV0OFPu8t9vwT%2BZcSmYqvCvoDEPOVzkk8YiyLWoUV32t3LQ5DX8vbwUBFXmAGRnjnFpuXTFmbT6B%2FVZVquKY1V35HLJnpWH8Tm650B0Dx5z%2BP5y7VzxJIJztcpSHR%2F%2BYEV5SW99MN2KBFFqm%2BLHt%2FbUEz7lJBpJppD8aOpdAsUWTBfkdQ5Ptr4rM427zLUwh0yO1dgKycdkzOKMaYW09GVR8frs8ZanNcynTWbmp%2FaUsa3jyQyeB8nqdvJHtdiUTKG6%2BCZLe6aTZMaG5DcTHSdowhp38vAY6pgEbzk4XZfLQ7C4ibphQ%2BFhCb4f2xdmIQAvYayifHly2x5Qk3Z%2F5d5P3gTKANeJ%2BzxvSl1PiG1IqO%2F7s2eSdICIOmSkJek7rTcONuBgoo1yAxjhexATOca2Dd32ngVV7d4SHZ%2F2R%2BkaSO8bmAYymDxEB0iWqcj7wW61W8JD%2BcfUFXE1MxLtmc5GjLLCK4LFmfYBtOeT6nWc9PTGApe%2B42A8PIAO6nK%2Fg&X-Amz-Signature=f7044656a62bfa7e6ef67c07f47ee488447a5c9ab301a6decd0d5de746121f41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SKCUI2W%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWhCt7wfFVA5JR9ojvZ%2BgCo3K06wsKhUwN5Xxq319nsAiBqmyAMqnVU8djaTCimIMTL7VR4ZB30U6djkaVeBUI9LCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkw0Ne2Mc%2FnMYZ4kKtwDd%2F%2F8t2mfU6SqwrOpp8GEm0e%2F%2B%2BsTvjk8ORfRh5scFuQRdRUUS6Nlx4ofnQHm%2FUFa1jDYnzKvdfmWAvDd1JDp0Bgjziid6uKR2RMUOjAAwZSIDKfk1v%2B9FhX3ztN%2BwpCkmYnaX8cM5DOhZHUso1%2Bf2nOmeNXI5xM%2BSZLmWyuz0TyeQuOUWF2vfMODV0s6veiR3Ehvrwn1sOQ2ef0XSW1HG3dCfEg1%2BQdiZey%2BI3r%2F32NsdI9gWONXhm7AXcwNKw3Sjt44urwd%2F%2FB%2Fsbi3DVUbf2V3cf18pKLV8fkuHvKUMT0Sd9SlmwfekumAt2zrP%2FbIugHr%2FIO5cAWlGTezP42h83polZTXOpIlfF2OdV0OFPu8t9vwT%2BZcSmYqvCvoDEPOVzkk8YiyLWoUV32t3LQ5DX8vbwUBFXmAGRnjnFpuXTFmbT6B%2FVZVquKY1V35HLJnpWH8Tm650B0Dx5z%2BP5y7VzxJIJztcpSHR%2F%2BYEV5SW99MN2KBFFqm%2BLHt%2FbUEz7lJBpJppD8aOpdAsUWTBfkdQ5Ptr4rM427zLUwh0yO1dgKycdkzOKMaYW09GVR8frs8ZanNcynTWbmp%2FaUsa3jyQyeB8nqdvJHtdiUTKG6%2BCZLe6aTZMaG5DcTHSdowhp38vAY6pgEbzk4XZfLQ7C4ibphQ%2BFhCb4f2xdmIQAvYayifHly2x5Qk3Z%2F5d5P3gTKANeJ%2BzxvSl1PiG1IqO%2F7s2eSdICIOmSkJek7rTcONuBgoo1yAxjhexATOca2Dd32ngVV7d4SHZ%2F2R%2BkaSO8bmAYymDxEB0iWqcj7wW61W8JD%2BcfUFXE1MxLtmc5GjLLCK4LFmfYBtOeT6nWc9PTGApe%2B42A8PIAO6nK%2Fg&X-Amz-Signature=0bec3c9d43af67cf5e1ee7f95738e320ac05d26d35d9cee83738718ad571402d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
