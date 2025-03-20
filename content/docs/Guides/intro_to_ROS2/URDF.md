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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRIG5HK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCfX3RclqoiYBMcNEY0letlRDKrm%2Fuzw9qxuEBD6Z2WpwIgM4KMm3iGfiwUakXk5eVEPWAU6IBAs%2B5H7tcIF%2BkUUcMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL5oFM1KLPUG%2FojJCrcA27NJCM2BZDDUk4wC7BdU%2FHAi3YuQTRC9bn1OnDVOQItegcOEaGIimGwJpCTSaXvH4TwUn09ucrTuXeB9loC4jz%2Bxz45gRNkWGuaiqNoQUZizyDIpiVKLp2Vx4sHI04S75FLJIBkBnTfNDcqILOuzO9VKn3P5p88nyAnYFAg6Fki1tv8Yete68OqiTefVR72HAg%2FpVXJnCdqONrMqgD6L0jwhVgEebnkLXlz4ygQ1QO6qhtspP%2B2lN81zhm6VDRw68wyp6S5L8E9g5ig04nGESosn0K1YaMy7ZoxGD0qh0MWp5ipw5Y3E5nW%2BUvnTikRfgI%2FAaKL5JhSHFDUzp2dI4QB0FwmpzQs%2BPG%2FUctlDnGMGbpF68WtI%2BT%2F%2F6B%2FNHR82jff7GJDvggJm6uXYI5%2FLcFqvyquVKx%2Fbdx012IlQBVET8luMmCT78AglcWpXcLiHDGRQGE55VmM42yZOJEGoFCd1zBKDkYlXhaCf%2BzIRfIDsiP1bE0rh%2F47PD3ADv8JtnFO9ZVB%2BSfAoxaGMKgk3WvmmWUDizxWekqvkt6E1oxYoQ2ZW87dtIlJ9OD5IKWX4GiPwDfvyAYokdTH%2BTI3jd3NzKL1nndNADFAmQk1RQGNFKoPo4AfZnJF0RFiMLbq7b4GOqUBw3XImeN%2FoKj74R8V2WcHiuyaeUbAy%2BzkbMyNky19y7JuzkNwOnp3C5b9AyWisYmWJTTHmK%2FTV0LPf4vWIgVMk6sgWRG8lQooNtnw4FTvaBxMG9Ce%2FylLSu3Gou0biRhyCnYto%2FZ4uulcylZgd5%2B2Tjaf8WBNaUovhVJmFLVy8O9ZqSv5aE%2F2wPwaKt%2Flmozgc%2BVNNZTOq3Fr7jGgYiN%2BwwfCfrB5&X-Amz-Signature=876f4d4852f3f4eeaab01d05bbc32951af962a1263b0aa95cedd4aa4b5f9045a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRIG5HK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCfX3RclqoiYBMcNEY0letlRDKrm%2Fuzw9qxuEBD6Z2WpwIgM4KMm3iGfiwUakXk5eVEPWAU6IBAs%2B5H7tcIF%2BkUUcMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL5oFM1KLPUG%2FojJCrcA27NJCM2BZDDUk4wC7BdU%2FHAi3YuQTRC9bn1OnDVOQItegcOEaGIimGwJpCTSaXvH4TwUn09ucrTuXeB9loC4jz%2Bxz45gRNkWGuaiqNoQUZizyDIpiVKLp2Vx4sHI04S75FLJIBkBnTfNDcqILOuzO9VKn3P5p88nyAnYFAg6Fki1tv8Yete68OqiTefVR72HAg%2FpVXJnCdqONrMqgD6L0jwhVgEebnkLXlz4ygQ1QO6qhtspP%2B2lN81zhm6VDRw68wyp6S5L8E9g5ig04nGESosn0K1YaMy7ZoxGD0qh0MWp5ipw5Y3E5nW%2BUvnTikRfgI%2FAaKL5JhSHFDUzp2dI4QB0FwmpzQs%2BPG%2FUctlDnGMGbpF68WtI%2BT%2F%2F6B%2FNHR82jff7GJDvggJm6uXYI5%2FLcFqvyquVKx%2Fbdx012IlQBVET8luMmCT78AglcWpXcLiHDGRQGE55VmM42yZOJEGoFCd1zBKDkYlXhaCf%2BzIRfIDsiP1bE0rh%2F47PD3ADv8JtnFO9ZVB%2BSfAoxaGMKgk3WvmmWUDizxWekqvkt6E1oxYoQ2ZW87dtIlJ9OD5IKWX4GiPwDfvyAYokdTH%2BTI3jd3NzKL1nndNADFAmQk1RQGNFKoPo4AfZnJF0RFiMLbq7b4GOqUBw3XImeN%2FoKj74R8V2WcHiuyaeUbAy%2BzkbMyNky19y7JuzkNwOnp3C5b9AyWisYmWJTTHmK%2FTV0LPf4vWIgVMk6sgWRG8lQooNtnw4FTvaBxMG9Ce%2FylLSu3Gou0biRhyCnYto%2FZ4uulcylZgd5%2B2Tjaf8WBNaUovhVJmFLVy8O9ZqSv5aE%2F2wPwaKt%2Flmozgc%2BVNNZTOq3Fr7jGgYiN%2BwwfCfrB5&X-Amz-Signature=970161e128c3469e1bd4288011555366c55ea0757e468f2bb9d0ee2721ecd900&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
