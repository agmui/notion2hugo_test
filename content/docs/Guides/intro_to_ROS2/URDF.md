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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHX5NNZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAillrZcgRwPguGFuqTXr7KnMFEvS9rhl02IzRw7FDkMAiAK%2FAL%2BnXqG1riK%2FwwVMqnKd%2BgBnF7bcps8FP9lCKiqHyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMpq%2BN2MnPBNaYpXu1KtwDUPpcnMD%2Bjf1hoKW1wF1k94DbrrpgBQNTyQCvRKxFtk%2F6l2HMyR5FpUBSQiN9QyiniYwNFeJVjFtG4Bupdpkuo%2Bxi5v0h%2BwDBQqMQuUgDD0s9womirAkGtphmZC%2B0xC6mPlXwipSYiC7L4dI5k%2FYS0GXlwA88TIt9ipDmlnPHG7SGml%2FP083EdyQlU0X8bHQ7MR5mq5RRWO3rlzber8wcwt%2BSiYhQyBF%2FUcHXp8BWfzi4gKNL5S9tSyxCYOMvDz9Gf2aEaXOt2W6lulqxMnLiBI1cDcw3fJ1H%2F1632cjwr4yEmNLkjPUuzMEuGIUhcqdOqko2LfBWCtiJexsr1ZVXY2FU8uVchdjnVdRoK5BpS7SxIVuzc%2F8Ikq2yTJYCHzrWMxrC3s%2FyRIujtASbeXX7WidmlapwR4FBXJnvMcSzVlqoC%2FbfRx0y7tJwAV3dg3MLb9LIbKwGIEpBSfxFaFbI1jR3%2BgQHvx%2BOr0Cj0SkmWS9bMRatUPFyOpS21jXROlz1WQUQ0Ajo0zssQNke3L6mmrop%2BWgt5NwqG5eu94cFpChmTQtfqC4F7KhA144lRv9gUrV6zI65Er%2F5w3HJxOKAdSEzxxN1kf7X0Wkwo4oLaUUeW8bG8FFybOLgmwkw%2FLyOxAY6pgGeo70SH9YsorLUJ9q8QLrr0Unr4OJ6asUCbCHW1oLozZgeefrzmnCXhuCUsZ5LI83yuWO%2FjXTZ0pghBRgyabKIpjAcn7VUxP44L3hN3lbHYuCjJEgl4U8CGuxMagE0vgo0UZq7WRtn61rOka9LabfHllpIc7IVUOF%2BVQTyGoyKnqrPfeO0nSEONvnRNScXbTZH85LBpzM%2FL%2Bcpf0e8epwoaCzZYPGy&X-Amz-Signature=63e3497ca88a4b288142aee7751c174cdd0c9a203ce373e416096c25129b57a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHX5NNZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAillrZcgRwPguGFuqTXr7KnMFEvS9rhl02IzRw7FDkMAiAK%2FAL%2BnXqG1riK%2FwwVMqnKd%2BgBnF7bcps8FP9lCKiqHyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMpq%2BN2MnPBNaYpXu1KtwDUPpcnMD%2Bjf1hoKW1wF1k94DbrrpgBQNTyQCvRKxFtk%2F6l2HMyR5FpUBSQiN9QyiniYwNFeJVjFtG4Bupdpkuo%2Bxi5v0h%2BwDBQqMQuUgDD0s9womirAkGtphmZC%2B0xC6mPlXwipSYiC7L4dI5k%2FYS0GXlwA88TIt9ipDmlnPHG7SGml%2FP083EdyQlU0X8bHQ7MR5mq5RRWO3rlzber8wcwt%2BSiYhQyBF%2FUcHXp8BWfzi4gKNL5S9tSyxCYOMvDz9Gf2aEaXOt2W6lulqxMnLiBI1cDcw3fJ1H%2F1632cjwr4yEmNLkjPUuzMEuGIUhcqdOqko2LfBWCtiJexsr1ZVXY2FU8uVchdjnVdRoK5BpS7SxIVuzc%2F8Ikq2yTJYCHzrWMxrC3s%2FyRIujtASbeXX7WidmlapwR4FBXJnvMcSzVlqoC%2FbfRx0y7tJwAV3dg3MLb9LIbKwGIEpBSfxFaFbI1jR3%2BgQHvx%2BOr0Cj0SkmWS9bMRatUPFyOpS21jXROlz1WQUQ0Ajo0zssQNke3L6mmrop%2BWgt5NwqG5eu94cFpChmTQtfqC4F7KhA144lRv9gUrV6zI65Er%2F5w3HJxOKAdSEzxxN1kf7X0Wkwo4oLaUUeW8bG8FFybOLgmwkw%2FLyOxAY6pgGeo70SH9YsorLUJ9q8QLrr0Unr4OJ6asUCbCHW1oLozZgeefrzmnCXhuCUsZ5LI83yuWO%2FjXTZ0pghBRgyabKIpjAcn7VUxP44L3hN3lbHYuCjJEgl4U8CGuxMagE0vgo0UZq7WRtn61rOka9LabfHllpIc7IVUOF%2BVQTyGoyKnqrPfeO0nSEONvnRNScXbTZH85LBpzM%2FL%2Bcpf0e8epwoaCzZYPGy&X-Amz-Signature=51718adedf4cf0647df45f80ceabec40e43d50d09d6d222b2649453e1ce90943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
