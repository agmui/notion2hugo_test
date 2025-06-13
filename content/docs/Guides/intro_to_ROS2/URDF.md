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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VX4Z77M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCZi8l1nQoFkFuaTlDJ82jDAgO7Z485kIATwOsNhqAe2wIgCaUqiL1o0egJwHfGVQZoeJ8IpfAf%2Fme3vNo87XbnROIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBvVoQmgnZKJJZm7kSrcAwwOcckMbpAwKDWRdJymmjb2IX%2B91QH2K4VCKLaXqoEw%2Fff5RLKZ5x95hiSa9TGPbXf0Higy%2BS7eH24SmYsCgeOCXRsgKcFI5P4y8cnoPCQY47bpY%2F5yHjBDvBsj4Q59axRlOkUwjSFw2TcbrG1Q9hR0xWeDtP8C00I2KTEmrAdochiNohLalhEB62v1SH3hquTuRLoSxBa21SQo9HoN9B%2BduK70HJaT9ctZDMutrWoG8DEOr8ZRd8zpx7cCdEGkNOKk%2F2tfVSWrAe7V%2BHwM8a2q5ZED4sANCS9jYCdcFpaknO60jY6cGDR1wGj5PZ4l2UDYQLklT4GF1wMPt7xz0sPEEnVnz1XECiMoUoSsnB2k%2BVCsXKESubzYvbGWYjRAHbPqrwrp%2F3D5QzqInmAQ0TdO5wWoY0iv205BWnMMvYD8PWAZe2gKS88PK8GRc0efc2oUTm%2FiilNhtO0m5f2cigCmUdEJptEasMS%2Bm8XzBGh6cUlYJ1zrrpzSSBZ0y4%2B%2FZ2GKVu2gpVqT5e%2FtNzuFda2rKxPtp%2BIGpW3%2FJZfFVr1eOOrSTYcBErGU8wRK1biI7LFoceve%2FszIcPLR7Z6dZlumGxy6y1Rf8HVZiTF%2FvGVGj3uWnt7ondZZsqNGMNDSscIGOqUBoBN2wsxjc9HNOL1tKk5j4QAMqGKOb1Yn1zR%2FH%2BHYg4EM3nXgnez%2FKUJh9hceEVTr14Y7k4r%2BJOTA2z4qxH1Xu9BTGNISd9329VhkxrHiExZIMz8NK5hEd7E2PGKXZAMMuRa6ltr0bOVu5iyRP9OeFMylCY%2BIjmEDkMCdnoRAyk%2BtYdolVOG6hrTbr3lp0GdcCEkdzFN%2FNoEBH8QG%2BU6ws6nKdwmF&X-Amz-Signature=b4522034524a7d712c08ceac03fd79bc3cf87605c0c78f19bcbeb0e5e76645cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VX4Z77M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCZi8l1nQoFkFuaTlDJ82jDAgO7Z485kIATwOsNhqAe2wIgCaUqiL1o0egJwHfGVQZoeJ8IpfAf%2Fme3vNo87XbnROIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBvVoQmgnZKJJZm7kSrcAwwOcckMbpAwKDWRdJymmjb2IX%2B91QH2K4VCKLaXqoEw%2Fff5RLKZ5x95hiSa9TGPbXf0Higy%2BS7eH24SmYsCgeOCXRsgKcFI5P4y8cnoPCQY47bpY%2F5yHjBDvBsj4Q59axRlOkUwjSFw2TcbrG1Q9hR0xWeDtP8C00I2KTEmrAdochiNohLalhEB62v1SH3hquTuRLoSxBa21SQo9HoN9B%2BduK70HJaT9ctZDMutrWoG8DEOr8ZRd8zpx7cCdEGkNOKk%2F2tfVSWrAe7V%2BHwM8a2q5ZED4sANCS9jYCdcFpaknO60jY6cGDR1wGj5PZ4l2UDYQLklT4GF1wMPt7xz0sPEEnVnz1XECiMoUoSsnB2k%2BVCsXKESubzYvbGWYjRAHbPqrwrp%2F3D5QzqInmAQ0TdO5wWoY0iv205BWnMMvYD8PWAZe2gKS88PK8GRc0efc2oUTm%2FiilNhtO0m5f2cigCmUdEJptEasMS%2Bm8XzBGh6cUlYJ1zrrpzSSBZ0y4%2B%2FZ2GKVu2gpVqT5e%2FtNzuFda2rKxPtp%2BIGpW3%2FJZfFVr1eOOrSTYcBErGU8wRK1biI7LFoceve%2FszIcPLR7Z6dZlumGxy6y1Rf8HVZiTF%2FvGVGj3uWnt7ondZZsqNGMNDSscIGOqUBoBN2wsxjc9HNOL1tKk5j4QAMqGKOb1Yn1zR%2FH%2BHYg4EM3nXgnez%2FKUJh9hceEVTr14Y7k4r%2BJOTA2z4qxH1Xu9BTGNISd9329VhkxrHiExZIMz8NK5hEd7E2PGKXZAMMuRa6ltr0bOVu5iyRP9OeFMylCY%2BIjmEDkMCdnoRAyk%2BtYdolVOG6hrTbr3lp0GdcCEkdzFN%2FNoEBH8QG%2BU6ws6nKdwmF&X-Amz-Signature=a499947980ae409c16003a005052dd16b98595837b68adaebcebcbc87431dea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
