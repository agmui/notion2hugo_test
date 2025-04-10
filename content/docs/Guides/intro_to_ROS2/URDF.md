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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647M2TKNL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUKICAIiUyfWSe9Q6G9WkaZ%2FOHFnSphDDV1jGyzCV1SQIgUBUZCro7W%2FWyDD4%2BZibGtUJQ7aRNUkicKEPE%2FY%2BvkvgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PSkCQiDkEIGqrTyrcA2Lucnbx4fwYoylX2peQG%2BGOZRjZRaokN5Cv7M20ZmXlPbiuPF7PnEPW7xUrR8VR7x5CvuuiR3sSTohFR4Gjz3ufXUn6ZcE8LLZ918BJask6BQe6h9ESwhbYqIS8yhNV1E%2FVmAfOZiiZvpWgOjDvI3THX2IPJOPkd%2FduHFL3QuKej%2FCRyHD6X7rXB%2BEXkkwFvFG9%2BLxcwgxAilFkHkn4%2F2Vk%2FLuJ%2BKRjdutr74icCiOjDOftvdr2PrJ62wSoJjlnsv2fouLH2JwnHnDUuGc3DSOPJKGzfWEKU%2BPZWJAGHrOv9L0zsTs3SOe%2FzCkpvj6T0EINu5qKJYhL1xoZxfyK%2BAPeO6XWHlW0%2BO%2FY6RKa2SOhEwglXNqejOxDNnIV%2BU4IpYvUBLH5zYJK3F61BftZm7CNR2gy95xV2EdZMD2%2F7UyjNzJZnFQUiQtnNgKqvshGV%2B%2B3gwGSGcA%2FR6zC0cwbO6WfBS0kZgBYGRn0dc02llYLwdF1uzU5fTZXD6M1QRKP%2Fx%2Ft975x%2FjDVCXYFfdrHp5Cr4Sfxpv%2FkIVWJzeUW%2FSlyaEw%2BjLeSjbVXY%2Bbar61Xc10bi%2BcUZ1ssLIV91c0RGMKgWV3AhHqZwvx3mUVergeAbbz8lQJGJHFBz859MIaI4L8GOqUBjLPBP2oX%2BNivDiHJZcMibffIsSqT1V5QAFyVqCLIhg199oI7G1StOCiQnGMKuEAiMoeYrjiGR5yvdx07RNU51JOpyr0NcIrVcEtqusZLZGV8w%2FlCv497OZaz45JhRsg4FY94YPl47qNLT6krRlBlRas%2FOMa8SNbc2mv%2FTf0GrdlqlFibz6F6qfiVsT2HFKZs0HBdI0e4NN4UGXUQ1taBpdbokyJy&X-Amz-Signature=ff51e2bc74bf96b12a2cdd43aa16d943b3903cf44c9abf60946bf857dec4c2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647M2TKNL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUKICAIiUyfWSe9Q6G9WkaZ%2FOHFnSphDDV1jGyzCV1SQIgUBUZCro7W%2FWyDD4%2BZibGtUJQ7aRNUkicKEPE%2FY%2BvkvgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PSkCQiDkEIGqrTyrcA2Lucnbx4fwYoylX2peQG%2BGOZRjZRaokN5Cv7M20ZmXlPbiuPF7PnEPW7xUrR8VR7x5CvuuiR3sSTohFR4Gjz3ufXUn6ZcE8LLZ918BJask6BQe6h9ESwhbYqIS8yhNV1E%2FVmAfOZiiZvpWgOjDvI3THX2IPJOPkd%2FduHFL3QuKej%2FCRyHD6X7rXB%2BEXkkwFvFG9%2BLxcwgxAilFkHkn4%2F2Vk%2FLuJ%2BKRjdutr74icCiOjDOftvdr2PrJ62wSoJjlnsv2fouLH2JwnHnDUuGc3DSOPJKGzfWEKU%2BPZWJAGHrOv9L0zsTs3SOe%2FzCkpvj6T0EINu5qKJYhL1xoZxfyK%2BAPeO6XWHlW0%2BO%2FY6RKa2SOhEwglXNqejOxDNnIV%2BU4IpYvUBLH5zYJK3F61BftZm7CNR2gy95xV2EdZMD2%2F7UyjNzJZnFQUiQtnNgKqvshGV%2B%2B3gwGSGcA%2FR6zC0cwbO6WfBS0kZgBYGRn0dc02llYLwdF1uzU5fTZXD6M1QRKP%2Fx%2Ft975x%2FjDVCXYFfdrHp5Cr4Sfxpv%2FkIVWJzeUW%2FSlyaEw%2BjLeSjbVXY%2Bbar61Xc10bi%2BcUZ1ssLIV91c0RGMKgWV3AhHqZwvx3mUVergeAbbz8lQJGJHFBz859MIaI4L8GOqUBjLPBP2oX%2BNivDiHJZcMibffIsSqT1V5QAFyVqCLIhg199oI7G1StOCiQnGMKuEAiMoeYrjiGR5yvdx07RNU51JOpyr0NcIrVcEtqusZLZGV8w%2FlCv497OZaz45JhRsg4FY94YPl47qNLT6krRlBlRas%2FOMa8SNbc2mv%2FTf0GrdlqlFibz6F6qfiVsT2HFKZs0HBdI0e4NN4UGXUQ1taBpdbokyJy&X-Amz-Signature=8d10d832a389586d4ebd261665615e19dee255165195cd2a253506665fcc6612&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
