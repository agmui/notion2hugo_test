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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBH632W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCg9G%2FZ5gx%2BNx5cTezb%2BdDJ1ioP5bZXREC4BVyomj9TSgIgatYV3NpntzoNOAM8k7Q2O9Je3eH1qbxaZNB2gpuldV8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Ct%2Bkyr70%2BaC6NdircA4vX6zoPP5mKAQvxwOlm4wddpB5cHVo8O1uyaOiEFwtlKA0T1y%2FXGswtwRo7wLGvwxWOM9CiQiYVaUGJ%2FLvCkYiemrz8VEefku8KRFwZVxcCHYTVqkqzPCExmtFRXJBaQGSsFdfNN%2B%2FUgB809ZvcE8ufCcbQ%2FtYhFd5nvptNMxc55vZikAKycaS5%2B2nNelEA7oHFeVoORz6qxDJHn%2F3fFoudEHt6atU1ochusPX6xylDoBxNc1%2FtFr1k9r2xBdSxfqHLOZKsDcOE%2FDX%2Bm1o7iCkTfuzRoS2FXPdEflIqPvDggut439%2BhuITc8iBWHAXrCH4sTggKgRHSnMSUZ7VCV0LyLwselRS83%2BHxCm2ortUb2Cm4EJULckSqeZgKAQ5gb3Ho%2FWH9Iw51DIx39Vb%2FyzdcPKJu48AG95fW4pSmlCCXxVib3FvaKnpeQkDyDD6XmjAYDXp8aWEI8CA7Yw16FF3pG7n6Nl7VCQGWD5IQZaZPpsHHWPJ4%2BcAYODG%2F8z9qNZmrQMmuU%2F27YnF3YDfIP%2BmWI11QHwM8wOwjaCmTYS7Pwn5gGM5sK%2FL83chO5b09UaaePZFZCIjAwsjc7YYSo25qB1toQP1Z6oEUMiWlrKRV0fh8k9JqJWFfhTseMNyzncQGOqUB%2BoT8w0OiV9ZzLQNyekJa2SFbmqyY0DtiXYPnqxbJt4K0SI%2BgHr9p2c%2FMvddEXyzDzpjVnRxsGuzZ1YwcpI8kRj5EQRpplueeZmm5RufSKILT%2FkESV4M7dvNhSaZHBhon%2FuZgezep%2Bnt05DlcIxZ%2FE6v70BYJHvpRZd6YFw4JLTfUY91faMi2LaRwHS8MWoGnKdmgyS9YhFdukiPo7yvOM%2FK2l9OE&X-Amz-Signature=b2971421f3690b0c225ce3f706828e8fb1bc3971ff3ca7e26a134bbb73a754ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBH632W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCg9G%2FZ5gx%2BNx5cTezb%2BdDJ1ioP5bZXREC4BVyomj9TSgIgatYV3NpntzoNOAM8k7Q2O9Je3eH1qbxaZNB2gpuldV8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Ct%2Bkyr70%2BaC6NdircA4vX6zoPP5mKAQvxwOlm4wddpB5cHVo8O1uyaOiEFwtlKA0T1y%2FXGswtwRo7wLGvwxWOM9CiQiYVaUGJ%2FLvCkYiemrz8VEefku8KRFwZVxcCHYTVqkqzPCExmtFRXJBaQGSsFdfNN%2B%2FUgB809ZvcE8ufCcbQ%2FtYhFd5nvptNMxc55vZikAKycaS5%2B2nNelEA7oHFeVoORz6qxDJHn%2F3fFoudEHt6atU1ochusPX6xylDoBxNc1%2FtFr1k9r2xBdSxfqHLOZKsDcOE%2FDX%2Bm1o7iCkTfuzRoS2FXPdEflIqPvDggut439%2BhuITc8iBWHAXrCH4sTggKgRHSnMSUZ7VCV0LyLwselRS83%2BHxCm2ortUb2Cm4EJULckSqeZgKAQ5gb3Ho%2FWH9Iw51DIx39Vb%2FyzdcPKJu48AG95fW4pSmlCCXxVib3FvaKnpeQkDyDD6XmjAYDXp8aWEI8CA7Yw16FF3pG7n6Nl7VCQGWD5IQZaZPpsHHWPJ4%2BcAYODG%2F8z9qNZmrQMmuU%2F27YnF3YDfIP%2BmWI11QHwM8wOwjaCmTYS7Pwn5gGM5sK%2FL83chO5b09UaaePZFZCIjAwsjc7YYSo25qB1toQP1Z6oEUMiWlrKRV0fh8k9JqJWFfhTseMNyzncQGOqUB%2BoT8w0OiV9ZzLQNyekJa2SFbmqyY0DtiXYPnqxbJt4K0SI%2BgHr9p2c%2FMvddEXyzDzpjVnRxsGuzZ1YwcpI8kRj5EQRpplueeZmm5RufSKILT%2FkESV4M7dvNhSaZHBhon%2FuZgezep%2Bnt05DlcIxZ%2FE6v70BYJHvpRZd6YFw4JLTfUY91faMi2LaRwHS8MWoGnKdmgyS9YhFdukiPo7yvOM%2FK2l9OE&X-Amz-Signature=5545db64ebf6b1071db7449b1286f624b1a5a28a7629fb62008dea7d3b3d7328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
