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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNM6HTL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj1b0byvWH1udu2yD%2F3ijTr54%2B7FjMwtthMEYzMDm0AiA0zFd1vkfAMzhHCC6Lr07IqkO8E3NRoJ%2BzlzauL7UMiCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1kh6M5QMDFwbkBKKtwDTTXYp5QftyP8AbohNGRi2GCtNHn%2BaExtchzQt7Xsbb9OwozUS0XjNfkXEo1prQvNZJYtqSHKJOL4PKI1xhS5KSMLWJvr28qP1k9xG0sVt8TrL6FIvHDL2ydKcnbDikfSgywkUSe%2B0RrpQburXIm20gqMJk%2F1Xzcvw6l%2B09ouuOOqUbdjYsJIoTSS9sbdzCFD3wlvdmZl6v0CN33ts9h7kqSdUmkrrlGtoIt3FVhozX5fV1WByq32PKDzifRUafJY13DBcF1rE3BoJ1ocYQhFKTFvUrXAFhiuOzedkbxlh%2BYCJRsGKy3jBYv%2BWBPTSUhID4AzFNRSJRiNC1K77ZC4Onk7tDbb1LKKOT4lH2NzIU5c94KXbwitggkwXKEWuw%2FTl1BADuSBb5ESpbJCFijG4%2FQjKM2ghgxKu9OzGWFG9MVBpB5sII9zpZHdq%2BFklzZpVkw%2FPBfzhtfCi5ntiRKtGQD4xEp2b%2BYPQRnOH%2FDMTkh%2Fc%2F%2BBRrejBRzi92VwJZLyL5nbmLifTv3WOvZDJse0Stm4JYX3o4mCxdXsRgbtshRkIf6IgKgtc72320idAAgKMMvokKw%2BlcEiRQgXkI8aE%2Fu28UbWM4jVkZ8fa1uTKf4c88RwYiRDGyqj0ecw5pWIvwY6pgHufzJkdrx0WAaIay7JIFI3r0FxH1ImsG1uvThrrzLuq8667fYFFxbpR8s1pzd8WEaWzhFOJpdiA4onljoxC6hEez6DcU7SVnwYWoYEd%2FdLcieI%2Fi9OZq6d0QTbK2jOjdPwphfhn2PA7KBn7rtJh4dhaBkU4e7hYjlaHLT7LXenwGUPJX12KYufd4mgvw56wEitF5u49E0dwRfYK%2BGbfjUsntASmCRt&X-Amz-Signature=d0bbd062d32881ee9e6602ddb74e943e78d4cfe7657256e9247ac1cbf34e95ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNM6HTL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj1b0byvWH1udu2yD%2F3ijTr54%2B7FjMwtthMEYzMDm0AiA0zFd1vkfAMzhHCC6Lr07IqkO8E3NRoJ%2BzlzauL7UMiCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1kh6M5QMDFwbkBKKtwDTTXYp5QftyP8AbohNGRi2GCtNHn%2BaExtchzQt7Xsbb9OwozUS0XjNfkXEo1prQvNZJYtqSHKJOL4PKI1xhS5KSMLWJvr28qP1k9xG0sVt8TrL6FIvHDL2ydKcnbDikfSgywkUSe%2B0RrpQburXIm20gqMJk%2F1Xzcvw6l%2B09ouuOOqUbdjYsJIoTSS9sbdzCFD3wlvdmZl6v0CN33ts9h7kqSdUmkrrlGtoIt3FVhozX5fV1WByq32PKDzifRUafJY13DBcF1rE3BoJ1ocYQhFKTFvUrXAFhiuOzedkbxlh%2BYCJRsGKy3jBYv%2BWBPTSUhID4AzFNRSJRiNC1K77ZC4Onk7tDbb1LKKOT4lH2NzIU5c94KXbwitggkwXKEWuw%2FTl1BADuSBb5ESpbJCFijG4%2FQjKM2ghgxKu9OzGWFG9MVBpB5sII9zpZHdq%2BFklzZpVkw%2FPBfzhtfCi5ntiRKtGQD4xEp2b%2BYPQRnOH%2FDMTkh%2Fc%2F%2BBRrejBRzi92VwJZLyL5nbmLifTv3WOvZDJse0Stm4JYX3o4mCxdXsRgbtshRkIf6IgKgtc72320idAAgKMMvokKw%2BlcEiRQgXkI8aE%2Fu28UbWM4jVkZ8fa1uTKf4c88RwYiRDGyqj0ecw5pWIvwY6pgHufzJkdrx0WAaIay7JIFI3r0FxH1ImsG1uvThrrzLuq8667fYFFxbpR8s1pzd8WEaWzhFOJpdiA4onljoxC6hEez6DcU7SVnwYWoYEd%2FdLcieI%2Fi9OZq6d0QTbK2jOjdPwphfhn2PA7KBn7rtJh4dhaBkU4e7hYjlaHLT7LXenwGUPJX12KYufd4mgvw56wEitF5u49E0dwRfYK%2BGbfjUsntASmCRt&X-Amz-Signature=eb07aa9338a3cb751b847e2f73a4949823a0f48a115af2903bce12efff29faf1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
