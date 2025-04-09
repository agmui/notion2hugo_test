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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYR3N67%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD9CJy99ZULp4nY36kwR8s4VA2brdecbI%2BGyHg0U%2F3LowIgAcdDH9J6nTkZ21hOZT8wSSAHHlPLB5GWawvdwFr%2FiGIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW3KyJfslcD5wtuMircA9UDyNug5SJmUdfapZssumvlRtg1LGA8CnGd0sTdHxDK%2BEx3pLAboUyx%2FAfMRib3Bz%2B9voNI1IdsT3aVuDuLXwcnzhkuON5XVBY9caJFMw%2FS2n7yykiA45Jfng8ETWvo9%2Bwm9GDY6nTOnoMRckqJGtE81uTpf69PlBvH1tquWrR644DZE2Tw88BwfDWLpq54L0TKaOi4t19aOFz4G3nmCBIQLim7unE3TyIJPbwljaT6ZkAPU0MtkKeEPSvjG%2FgfUEyRzonmG84avWir%2FtNtXgpGMDRBkIeM1C424gRz2A9UIeI7mXRLmLi0P0%2FK761dW3%2FU8SRj4c9gJTWlFa6DYfjic5Or1uhZXFCHzmJmamGD%2FW7JD6molwS7%2FENyv%2BfrbnB5dPwuxtJZ2fv4M0lzGetY6rJZwOWeSv%2F96uJExHu169wM4peBupQGQz%2B6yfsgTbMntTJGvMUW0YeKSXQw%2BepqK3Vkk8HjBnTNFIJlhawyUKoJqun7aoYCyGfME024Uwk4hf%2BHocJ6Q0Snt9PBhi9QOEuLxU5B6OyuYX05QoSfRDyoS9aohwTMwktlLlKlTtfiIEVLPrfF%2FtU1nmgOosUeocOQtzSq%2BiwmgrgmNNTVx%2BOhPsaYLO5qw7KDMIjL2L8GOqUBTxqh%2Fk4FUdzmvjXBFiDzJ6XUGiPwwDyqm%2FN%2BKSBabC1SJ5g3rWHAX0LCBmKmwkOCfMPMGoZigVHl%2FqUPMbyHCDWeaWbDedV3ngtvHh1ak1Y73V%2BlmJaMlKwku%2FxfOD%2F4WEfhDnWwPWmGTscSkYZpZJ44HjCWe9ieQn2%2FiHz2u%2BavALVSCCFKWhr7uqohk7%2FBg7Tqi%2FdPAUd7zg8Zoe%2Ffgeb9P7eU&X-Amz-Signature=79b13c05f90bcb0e4d0415d460b6f266c593e9b0bda0d9a212b2c581e6cd9b39&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYR3N67%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD9CJy99ZULp4nY36kwR8s4VA2brdecbI%2BGyHg0U%2F3LowIgAcdDH9J6nTkZ21hOZT8wSSAHHlPLB5GWawvdwFr%2FiGIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW3KyJfslcD5wtuMircA9UDyNug5SJmUdfapZssumvlRtg1LGA8CnGd0sTdHxDK%2BEx3pLAboUyx%2FAfMRib3Bz%2B9voNI1IdsT3aVuDuLXwcnzhkuON5XVBY9caJFMw%2FS2n7yykiA45Jfng8ETWvo9%2Bwm9GDY6nTOnoMRckqJGtE81uTpf69PlBvH1tquWrR644DZE2Tw88BwfDWLpq54L0TKaOi4t19aOFz4G3nmCBIQLim7unE3TyIJPbwljaT6ZkAPU0MtkKeEPSvjG%2FgfUEyRzonmG84avWir%2FtNtXgpGMDRBkIeM1C424gRz2A9UIeI7mXRLmLi0P0%2FK761dW3%2FU8SRj4c9gJTWlFa6DYfjic5Or1uhZXFCHzmJmamGD%2FW7JD6molwS7%2FENyv%2BfrbnB5dPwuxtJZ2fv4M0lzGetY6rJZwOWeSv%2F96uJExHu169wM4peBupQGQz%2B6yfsgTbMntTJGvMUW0YeKSXQw%2BepqK3Vkk8HjBnTNFIJlhawyUKoJqun7aoYCyGfME024Uwk4hf%2BHocJ6Q0Snt9PBhi9QOEuLxU5B6OyuYX05QoSfRDyoS9aohwTMwktlLlKlTtfiIEVLPrfF%2FtU1nmgOosUeocOQtzSq%2BiwmgrgmNNTVx%2BOhPsaYLO5qw7KDMIjL2L8GOqUBTxqh%2Fk4FUdzmvjXBFiDzJ6XUGiPwwDyqm%2FN%2BKSBabC1SJ5g3rWHAX0LCBmKmwkOCfMPMGoZigVHl%2FqUPMbyHCDWeaWbDedV3ngtvHh1ak1Y73V%2BlmJaMlKwku%2FxfOD%2F4WEfhDnWwPWmGTscSkYZpZJ44HjCWe9ieQn2%2FiHz2u%2BavALVSCCFKWhr7uqohk7%2FBg7Tqi%2FdPAUd7zg8Zoe%2Ffgeb9P7eU&X-Amz-Signature=27b8a8f545a7073f2c0eb19ac1c8c9fcc9601d016e08d6e8480eb1a84da0475c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
