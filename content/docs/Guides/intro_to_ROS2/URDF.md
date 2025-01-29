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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4LV353%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID1JZEAiCKPEJo5K6SO9%2Fgl%2BbfDk8%2FPJp%2BnhIjbuW0teAiEAwgj71dOhg71qDY%2BsXXdqr7vzIg%2FfMTRl3DhWvo8msyQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5LdbpXSJbyJfDGgircAwfV1EGLRk%2Fcn%2BL5i6r1dP5BWspAmMmpMIU%2BFjTHaaFaTYhU2kI31TxBeWKqgsjnkWU%2BiZrdIXPFnwqC9LnynBARhQH9r5llI6DyLX8ayUCDE7cwy22UwO3LB3YbJeyn%2FQ%2FN%2Fei3AnEbVj6AP%2BDr12%2FuRxhq8%2FbiSa%2B2qvKbjC9vTASEn6rRa7BtkkwMPV%2FK86gglBrOcFP7gSiJduB%2BHcwaRs7emGO5R9643UYU4cXOvNhiSflVjs4uhFAV4wNEJIdhPH3ySe2Djle8R7o3Y%2BoMp9mPDR0iHmpuMEa0uRPRB1x3wfse5TVjHoVi9amqRxdMLtAhsnAwR%2Bddpcld%2FKwbGoazJTATM9BwNUxGQxAmji%2BNF3IWA1muM09B8z%2Bab9KWY3nK2155I5vLHoJd5jpFCfwDHaEb3UQuvGwH0VT%2F9ny6AW4F66b93B3aGEqDZ6xH6bXvK6eY6EJSFKoEF9TvasYWQg6eORurHW0T9eH%2FRFFStWVvawbld%2FfS6PzLLU9SpxQyMsyfk%2FnAEI08fPkazd34avj5Se90%2FQ3HevgzLPFaW27AJvoi4DIZzhMpM7ZlQjbWCWcV9ySP0Xt6cDxvw2WqYIYBedImt3ihKaR1eBxau6jKNtmn8gMWMKS85rwGOqUBEd33%2B28JCO0ScUT5p4bsL9ai1vz32itUxIJN%2B8ORidUJP1ut%2F01hHxBFr3dAlzql5y0OGNTSxVbOU%2BLfl%2BA9EGysFMd3PLeeqUuqbfVxLQy5r%2BkH5pFItgBoZbL7vYfYop42hLUv3%2B3ohxpJt98VEzpYxLcwzbHJoqbN6OpljXTz3JrM9jN11GnOO4%2BIV9F50eNh3yg8Qijxguh7p5oQRwSesuSN&X-Amz-Signature=2553ee8357de9c4316159f67fe3b0219fde5bbf498aabf6da0e180c2936f097e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4LV353%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID1JZEAiCKPEJo5K6SO9%2Fgl%2BbfDk8%2FPJp%2BnhIjbuW0teAiEAwgj71dOhg71qDY%2BsXXdqr7vzIg%2FfMTRl3DhWvo8msyQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5LdbpXSJbyJfDGgircAwfV1EGLRk%2Fcn%2BL5i6r1dP5BWspAmMmpMIU%2BFjTHaaFaTYhU2kI31TxBeWKqgsjnkWU%2BiZrdIXPFnwqC9LnynBARhQH9r5llI6DyLX8ayUCDE7cwy22UwO3LB3YbJeyn%2FQ%2FN%2Fei3AnEbVj6AP%2BDr12%2FuRxhq8%2FbiSa%2B2qvKbjC9vTASEn6rRa7BtkkwMPV%2FK86gglBrOcFP7gSiJduB%2BHcwaRs7emGO5R9643UYU4cXOvNhiSflVjs4uhFAV4wNEJIdhPH3ySe2Djle8R7o3Y%2BoMp9mPDR0iHmpuMEa0uRPRB1x3wfse5TVjHoVi9amqRxdMLtAhsnAwR%2Bddpcld%2FKwbGoazJTATM9BwNUxGQxAmji%2BNF3IWA1muM09B8z%2Bab9KWY3nK2155I5vLHoJd5jpFCfwDHaEb3UQuvGwH0VT%2F9ny6AW4F66b93B3aGEqDZ6xH6bXvK6eY6EJSFKoEF9TvasYWQg6eORurHW0T9eH%2FRFFStWVvawbld%2FfS6PzLLU9SpxQyMsyfk%2FnAEI08fPkazd34avj5Se90%2FQ3HevgzLPFaW27AJvoi4DIZzhMpM7ZlQjbWCWcV9ySP0Xt6cDxvw2WqYIYBedImt3ihKaR1eBxau6jKNtmn8gMWMKS85rwGOqUBEd33%2B28JCO0ScUT5p4bsL9ai1vz32itUxIJN%2B8ORidUJP1ut%2F01hHxBFr3dAlzql5y0OGNTSxVbOU%2BLfl%2BA9EGysFMd3PLeeqUuqbfVxLQy5r%2BkH5pFItgBoZbL7vYfYop42hLUv3%2B3ohxpJt98VEzpYxLcwzbHJoqbN6OpljXTz3JrM9jN11GnOO4%2BIV9F50eNh3yg8Qijxguh7p5oQRwSesuSN&X-Amz-Signature=d63f7bdb87566f4a625aaaeed96fd496b0114a3c2ecd250da38fa1a812bc25ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
