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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCPRCKF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFmbjazlIiqzBbOosQyOHfTCeLAO2w9HfNWl5lnlAhnWAiEAyWJ1R1pEkcFbIyrPoEIaHg7o6BYcFN69dlvtrqY7%2FhYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFLBCNSG6jTevWaoryrcA69CH08HF2PFwKh2rq6DRUNpV4Q3FoTRXRY4moe0RsKtZddLJa2sl8e3oAJM1frZnjSqgJibna2BSAwxqRVOUH7yh%2FL1LZULfZ89%2BbWB1Gzk8pe9FCA6qndjkOjzkMzzRjii415kOFdZv3EDdKGcUBlPbFmseCKyOK6bQgKYpYOixw5IufCH4GMfD7upNMw88MbHkTYWQmmm4us2q4oACpy2NluVjqCrBvLzxoGxuw5NbOXoyOpV1IKceT261RuHQsSx1mPH1VQaQo9aYk81UbwF0NI0wS%2BjWws9HxmiIdzhCntZSl%2BSxCmv7Y90jIunqpP9kGx%2B7i2UgewhQrCEdfNxbAHNttU80vDSEQPnRkmRdDl%2FZd5G18rM%2BBiLnHxn6exhGB4czesde1SJJ%2F%2F8W7hXapZxw7sqMLzVQphx4cknhrE4DKZxLJD49Cdb0UOMgNyvc6M%2FPhqj3y0ykckaL44ys%2BZYN9mHuaw4QoMpnV4mIce2xmGzJgHjMObLxm8sfmmJY9CBSB44aJdQ5El9129e3KSLqkSXAtTKCUqc4C1d4%2Ffd%2FjwELO7%2BXF2KNbJM96Iv61W%2BiNUPMmdtF56i7wA%2BwhItpj2p4HsKX1zm3RJ40dhFYxg7bOpRK2QeMMiGksQGOqUBH%2FPficdFUUD9YkGCB349Q8qQNlrMAyvHoJrUPhBmWKq8Vmqin%2BjyheimFZlynX22EqMD38Jcsq6s6XmHscYYboG8g5S3yj4MO5V%2BegO5i4XKtUs9z7Yyn6h5oxr%2F63aTSEYzdSrDBG%2Fc8BsZe3Yk%2FC90Eq%2BJUQxzo3xjkxvgN3MJ4FiAc3XNpIXFpNN85ZD%2B7dP%2BLr6YsZOp5jNDdIE3QzmdwP0z&X-Amz-Signature=82431745eee6fa6e28e4ed89aed3707c54ebbbd0137516a4bc99295a02a2e3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCPRCKF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFmbjazlIiqzBbOosQyOHfTCeLAO2w9HfNWl5lnlAhnWAiEAyWJ1R1pEkcFbIyrPoEIaHg7o6BYcFN69dlvtrqY7%2FhYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFLBCNSG6jTevWaoryrcA69CH08HF2PFwKh2rq6DRUNpV4Q3FoTRXRY4moe0RsKtZddLJa2sl8e3oAJM1frZnjSqgJibna2BSAwxqRVOUH7yh%2FL1LZULfZ89%2BbWB1Gzk8pe9FCA6qndjkOjzkMzzRjii415kOFdZv3EDdKGcUBlPbFmseCKyOK6bQgKYpYOixw5IufCH4GMfD7upNMw88MbHkTYWQmmm4us2q4oACpy2NluVjqCrBvLzxoGxuw5NbOXoyOpV1IKceT261RuHQsSx1mPH1VQaQo9aYk81UbwF0NI0wS%2BjWws9HxmiIdzhCntZSl%2BSxCmv7Y90jIunqpP9kGx%2B7i2UgewhQrCEdfNxbAHNttU80vDSEQPnRkmRdDl%2FZd5G18rM%2BBiLnHxn6exhGB4czesde1SJJ%2F%2F8W7hXapZxw7sqMLzVQphx4cknhrE4DKZxLJD49Cdb0UOMgNyvc6M%2FPhqj3y0ykckaL44ys%2BZYN9mHuaw4QoMpnV4mIce2xmGzJgHjMObLxm8sfmmJY9CBSB44aJdQ5El9129e3KSLqkSXAtTKCUqc4C1d4%2Ffd%2FjwELO7%2BXF2KNbJM96Iv61W%2BiNUPMmdtF56i7wA%2BwhItpj2p4HsKX1zm3RJ40dhFYxg7bOpRK2QeMMiGksQGOqUBH%2FPficdFUUD9YkGCB349Q8qQNlrMAyvHoJrUPhBmWKq8Vmqin%2BjyheimFZlynX22EqMD38Jcsq6s6XmHscYYboG8g5S3yj4MO5V%2BegO5i4XKtUs9z7Yyn6h5oxr%2F63aTSEYzdSrDBG%2Fc8BsZe3Yk%2FC90Eq%2BJUQxzo3xjkxvgN3MJ4FiAc3XNpIXFpNN85ZD%2B7dP%2BLr6YsZOp5jNDdIE3QzmdwP0z&X-Amz-Signature=6e4c6d2e83d3048952c013cef068ca21d70b2f9d3aed2c086dab74c1a7ad69f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
