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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS57QXYS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEI7R44C%2BBB%2B2jAi3rYhi7ZJVthxJUllN%2BaPYs%2F40IyGAiAMjIWGTe9V48Kjz0K7cOn%2FuffXivaRKo9u44dZmDLN%2FSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJMNT96mlpZMsgtzfKtwDGq57xFA6UmFrtFMoAmbSqPqUiHRwU270OlubXp1cQfOAefzPrXAtkeSdXm4u5n6wbM8lQ%2FjAavxj%2Fz4seJSOk5D0AZUt2cnl7W6LZJjrJCp3TNtiztIg1PBpmsif7tPFqwh81VOnpfSKoqBBqGEzCuGm8piWIJs5bbzlc8UvxUTMtb%2FLUjrN0qYoD2vp0Wofg6twty3nqkfrlZ3m6YG4xMXeco7YoRvEwDmqbo5xQWR7pvK09V%2FThTv%2BSY2KQYrN%2BYXbtQeielnQ7yQGhwB7nCNmzVBIUvyRXyBtprzzSU3UaCy18Y6IWGntr2EoOr0wwm4ToJRLkzciz0fTIsukBL0Ha4eln%2FFClA3HJiIjO8FbRl1h00QwATYldbvwXbIhkDIhm%2FhFQ8mINVBUCcuY7x7YqCln9RsaZPQVat%2F%2Bx6YMZVWOShgdekt9w6UocVFbTpVKHzasELXBUXTJnoR0CokJKqca%2BOIitB7FhgnLButoqN2vHy2s78LrNk43kezxdBgHjoAUpO0hHrIS3OYNU1oP5eKEtOPbXZ8bvf%2BW0Q1sIOopC%2BhD41TNMgi6hYzXRuiVDaZguwIXnbxs3IeT2aa2ISIMSzBi%2BaiLL9MSbyjHR6PkGZ3BBuYba7kwxsDIvQY6pgHWgNFAaHDugJ7AqmpR2F0D5bhPWv1MDP%2FZf5gRTbcgQsJ9g1%2BJlgFkUYZsu9SRjs9%2F9aOTz%2BRQHvTTj5gWr1RzpJkN8Us5vuWaGldjGsp7mlR3OoPenwZRuwGm19XspCLgXbuRdCF37VsG0I0ceoEcipUcKdzxaFmQ3O4U33AMMDXNEWwlTUvy%2BHy339uGNwpQ8hctC9W1k2wYdNJbFqmctO%2FKRsYm&X-Amz-Signature=9bed2e9570eaea69301c2363f91ebd37d9bd867fe1788ddddaba990a51e97af9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS57QXYS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEI7R44C%2BBB%2B2jAi3rYhi7ZJVthxJUllN%2BaPYs%2F40IyGAiAMjIWGTe9V48Kjz0K7cOn%2FuffXivaRKo9u44dZmDLN%2FSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJMNT96mlpZMsgtzfKtwDGq57xFA6UmFrtFMoAmbSqPqUiHRwU270OlubXp1cQfOAefzPrXAtkeSdXm4u5n6wbM8lQ%2FjAavxj%2Fz4seJSOk5D0AZUt2cnl7W6LZJjrJCp3TNtiztIg1PBpmsif7tPFqwh81VOnpfSKoqBBqGEzCuGm8piWIJs5bbzlc8UvxUTMtb%2FLUjrN0qYoD2vp0Wofg6twty3nqkfrlZ3m6YG4xMXeco7YoRvEwDmqbo5xQWR7pvK09V%2FThTv%2BSY2KQYrN%2BYXbtQeielnQ7yQGhwB7nCNmzVBIUvyRXyBtprzzSU3UaCy18Y6IWGntr2EoOr0wwm4ToJRLkzciz0fTIsukBL0Ha4eln%2FFClA3HJiIjO8FbRl1h00QwATYldbvwXbIhkDIhm%2FhFQ8mINVBUCcuY7x7YqCln9RsaZPQVat%2F%2Bx6YMZVWOShgdekt9w6UocVFbTpVKHzasELXBUXTJnoR0CokJKqca%2BOIitB7FhgnLButoqN2vHy2s78LrNk43kezxdBgHjoAUpO0hHrIS3OYNU1oP5eKEtOPbXZ8bvf%2BW0Q1sIOopC%2BhD41TNMgi6hYzXRuiVDaZguwIXnbxs3IeT2aa2ISIMSzBi%2BaiLL9MSbyjHR6PkGZ3BBuYba7kwxsDIvQY6pgHWgNFAaHDugJ7AqmpR2F0D5bhPWv1MDP%2FZf5gRTbcgQsJ9g1%2BJlgFkUYZsu9SRjs9%2F9aOTz%2BRQHvTTj5gWr1RzpJkN8Us5vuWaGldjGsp7mlR3OoPenwZRuwGm19XspCLgXbuRdCF37VsG0I0ceoEcipUcKdzxaFmQ3O4U33AMMDXNEWwlTUvy%2BHy339uGNwpQ8hctC9W1k2wYdNJbFqmctO%2FKRsYm&X-Amz-Signature=3e50557caa3f38ae2f5cc05f71555188a464d7e2b6356124b25570ef69352f51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
