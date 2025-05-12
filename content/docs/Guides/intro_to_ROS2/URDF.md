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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGULUVET%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCFyobyoGgKU1TM9V3MlO9gIFmeyeQuwnbPU8CsCQHEegIgM1wGDOD%2BpWxiTW12qPBU5v9871XQpfsEgl8gRcJ%2BcJ4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzn9p9%2BsqORnY01GyrcA%2B1qG%2BDUpUw9zLochwxxFFXArF175sI8hX6PzfOTqv0XbbvcpCOIbn7xnxXoFVSEZkDmY9JZFpqudcWwLNqa%2BZNhxuJeFmq69%2FBQng7rbgEI1ojNWkHWlLgGYNZlyuk5zto%2FijOE6vORUBrPFSS3eqeHCCBJqYnVI%2B1sg%2FI94Rv9Ls1mZ5HSFeQjvalTVzzEBoiStUmvzjO8noYRdMoT%2BmtCsVlJEDlvCXi2oa84IjqW790Jw0kM7Qxl5bWrMLQFdNcaKLRXxjYtZCMGd8sFZrv2PfEQdnFWHHHQilM%2BWLUwivcQ3DorcITO%2FRCoqKIszXfCXYNO2B2VC4IEcgpv6QGXg3hZ5GyDX2SoOl61yVfdeiZ1UaR3UGvMIPlyA8Yr5LbC%2FVg9lp1B%2Fj2XQ%2F%2B66L7FM8LOBQLmm0an3fq4YtKD0fv5TBKSrc%2B9m7%2B5N4EptDOi5fsR7PX5vGSeHYy5nQIGjL1E99lVBf54ytpS%2B4TWADPhe9K%2B2nucJcTWG%2F030Ntnbp7X2whvNaXnl6%2FLLdymRw5PjW17fbmg%2FKfq36TXSNjWaQmp2mvo0ZMopy1Uy%2F%2BY2YzLPsITcz%2Fet53rKH5Gw2DhOOyjMRxfbjd3mNDwoYFldIkIXmO3P7AQMPrPhsEGOqUBujwAMAjU%2BfFI7nBKPzYX5SSfQdelgp26UVzuNrwpjpMR2VJIEl18LNVXNjGGcEhxF8U6dEV3QVifOBCik76ONWSt5ypiV8NmFjEFIJiUNxbfV0FudMz3CdJulnD4cq9jPz3c4bhQTJXT5AD11Czm1qIXIVT7YLWVP%2Bigve9QdEXev3Ag7%2Bo7l6o0b9Sjpgvnt6srT6phsBZLWdiYz5KamRs90bZW&X-Amz-Signature=b2311fd48d7826300779934c5a02a746be5a372f070a7a1229005219c0697846&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGULUVET%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCFyobyoGgKU1TM9V3MlO9gIFmeyeQuwnbPU8CsCQHEegIgM1wGDOD%2BpWxiTW12qPBU5v9871XQpfsEgl8gRcJ%2BcJ4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzn9p9%2BsqORnY01GyrcA%2B1qG%2BDUpUw9zLochwxxFFXArF175sI8hX6PzfOTqv0XbbvcpCOIbn7xnxXoFVSEZkDmY9JZFpqudcWwLNqa%2BZNhxuJeFmq69%2FBQng7rbgEI1ojNWkHWlLgGYNZlyuk5zto%2FijOE6vORUBrPFSS3eqeHCCBJqYnVI%2B1sg%2FI94Rv9Ls1mZ5HSFeQjvalTVzzEBoiStUmvzjO8noYRdMoT%2BmtCsVlJEDlvCXi2oa84IjqW790Jw0kM7Qxl5bWrMLQFdNcaKLRXxjYtZCMGd8sFZrv2PfEQdnFWHHHQilM%2BWLUwivcQ3DorcITO%2FRCoqKIszXfCXYNO2B2VC4IEcgpv6QGXg3hZ5GyDX2SoOl61yVfdeiZ1UaR3UGvMIPlyA8Yr5LbC%2FVg9lp1B%2Fj2XQ%2F%2B66L7FM8LOBQLmm0an3fq4YtKD0fv5TBKSrc%2B9m7%2B5N4EptDOi5fsR7PX5vGSeHYy5nQIGjL1E99lVBf54ytpS%2B4TWADPhe9K%2B2nucJcTWG%2F030Ntnbp7X2whvNaXnl6%2FLLdymRw5PjW17fbmg%2FKfq36TXSNjWaQmp2mvo0ZMopy1Uy%2F%2BY2YzLPsITcz%2Fet53rKH5Gw2DhOOyjMRxfbjd3mNDwoYFldIkIXmO3P7AQMPrPhsEGOqUBujwAMAjU%2BfFI7nBKPzYX5SSfQdelgp26UVzuNrwpjpMR2VJIEl18LNVXNjGGcEhxF8U6dEV3QVifOBCik76ONWSt5ypiV8NmFjEFIJiUNxbfV0FudMz3CdJulnD4cq9jPz3c4bhQTJXT5AD11Czm1qIXIVT7YLWVP%2Bigve9QdEXev3Ag7%2Bo7l6o0b9Sjpgvnt6srT6phsBZLWdiYz5KamRs90bZW&X-Amz-Signature=520df56ec5f91971f96fc0d07f001fd5beec55253754a500d6449396cef69901&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
