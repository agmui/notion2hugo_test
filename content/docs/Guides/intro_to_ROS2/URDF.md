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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674G7NWRC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJxtk50jn0JmOIs5NdbkVL%2B3W71gIZo0ncZqTC2VcdiAiEA3P7gDoXvAOMbccRmJSuU0qDhBd8PvWJnLaHQ%2FQMQlvkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE%2FwpjNIkpAUYImS%2BCrcA85csQsQHIM%2BJY%2BH1vTk8HxDFrG9RAmp9Y4zQEeULt2gFcqEuyi5aZ09hyVgi5L5AL9uFfwDeeGFQe%2BjtI%2BIwyt0ECXdnkUymT%2FQazdcMNSaMPJky6hnSCdLAOA2JxHrDkkZwoOMF6pVErs0zJVM95D357oo%2FQXQtxu9nPss5uvlKmeLisjZyoYDXpvxwdRmT%2BmaoXCfWOLMbPPMKQJrqmXWWC%2FQjIr6a84z8mndLH37YikYskMhr71xkhsFtSVsMPq1Icyfsqmkz8Lz5qUBM4tOkHXG6ch3QcOOsFcCyVYrZfIbhfMgnNhCevUl2zawIa5mkk2%2B%2BAbXpsymSg5ZdUMp%2FB2C2wrzoVGYjlcZFUyt2n3Q%2FcGE7%2BR1bxZiqh%2FVXnISsXFcJABIZ8q%2FZ%2FMgUf5tOFu1YbqMkndd9asgIUHh55FmaefrjeiHmdmalhA09XZ3ozSIRlBbw23cxfgMtfTRQAZ0ixkdaEwQA3k8yoOvStybiPondeUDx154Wxj6dL92LNOr1S6nJGedLLsIS9dTNcqm4PrjX6gQToV08gzDxiQPOSF2w%2BLNn%2B7vX3yigFMFGEGWjsqQNYZ25TvwjrxZo0lUlQoO0RpI4vJ%2F43E8Gc7ym1xXpUHv71xrMIua7cAGOqUBXEE0p6hpk%2FGndllTYmwWAWMd7nGGS0Qm03Wo%2BFV%2BT1ThH0RdUrw6vP7DTQ5RxoiB6Dzo5K02X%2FeFiLMlTOzglb2KIjfYrp9aMteoOl1WC4ChMFi06gH6J3JvAtVMbYW6ufL7krOTU1%2BJxHGHOL632wE33r%2FcjJWlcC2nPVQs%2FE9oa0atEP%2F9WijWb0kwcGT%2Buicyqz5R9xaHyUceMibgIJy9NAZ8&X-Amz-Signature=aac11957e34d92385d34719fc68b535f39fa518e36be4256779d690076e03784&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674G7NWRC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJxtk50jn0JmOIs5NdbkVL%2B3W71gIZo0ncZqTC2VcdiAiEA3P7gDoXvAOMbccRmJSuU0qDhBd8PvWJnLaHQ%2FQMQlvkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE%2FwpjNIkpAUYImS%2BCrcA85csQsQHIM%2BJY%2BH1vTk8HxDFrG9RAmp9Y4zQEeULt2gFcqEuyi5aZ09hyVgi5L5AL9uFfwDeeGFQe%2BjtI%2BIwyt0ECXdnkUymT%2FQazdcMNSaMPJky6hnSCdLAOA2JxHrDkkZwoOMF6pVErs0zJVM95D357oo%2FQXQtxu9nPss5uvlKmeLisjZyoYDXpvxwdRmT%2BmaoXCfWOLMbPPMKQJrqmXWWC%2FQjIr6a84z8mndLH37YikYskMhr71xkhsFtSVsMPq1Icyfsqmkz8Lz5qUBM4tOkHXG6ch3QcOOsFcCyVYrZfIbhfMgnNhCevUl2zawIa5mkk2%2B%2BAbXpsymSg5ZdUMp%2FB2C2wrzoVGYjlcZFUyt2n3Q%2FcGE7%2BR1bxZiqh%2FVXnISsXFcJABIZ8q%2FZ%2FMgUf5tOFu1YbqMkndd9asgIUHh55FmaefrjeiHmdmalhA09XZ3ozSIRlBbw23cxfgMtfTRQAZ0ixkdaEwQA3k8yoOvStybiPondeUDx154Wxj6dL92LNOr1S6nJGedLLsIS9dTNcqm4PrjX6gQToV08gzDxiQPOSF2w%2BLNn%2B7vX3yigFMFGEGWjsqQNYZ25TvwjrxZo0lUlQoO0RpI4vJ%2F43E8Gc7ym1xXpUHv71xrMIua7cAGOqUBXEE0p6hpk%2FGndllTYmwWAWMd7nGGS0Qm03Wo%2BFV%2BT1ThH0RdUrw6vP7DTQ5RxoiB6Dzo5K02X%2FeFiLMlTOzglb2KIjfYrp9aMteoOl1WC4ChMFi06gH6J3JvAtVMbYW6ufL7krOTU1%2BJxHGHOL632wE33r%2FcjJWlcC2nPVQs%2FE9oa0atEP%2F9WijWb0kwcGT%2Buicyqz5R9xaHyUceMibgIJy9NAZ8&X-Amz-Signature=f23735a6f7b4de060164a220257e93721f9fc29d693b970c07de93ee282b3395&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
