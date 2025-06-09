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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDBTM56%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0QOF3MGoe8Wr58lhGvuaXCM8UmPSQW4sYI1QpS5JZjAiBNm7kRWzc1G1kJ0t73QBLobp5RetrBQp%2F9l90KTHZu4CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucgcBtF6vdka2EZAKtwDQuLCafnrKBTx6Uo%2Fba7WBjKIfw0J%2FnlulKlY80Za5U641C8lWk6kKmxaORslYZEMuE8GeFvXGNrGXuhYbiuxGW727MLSEI%2FX28Q4TL7yvhCdZN%2BmnTbD3kSIBa2EMesbhzgg%2Fc58DHQ57bV%2By%2FgIRmA8LCsFb9R4b9V5OIhHxAHKQIrawZynAs4scpCOEM20FTtsbAaOF1nzusRC%2BiINI91SyM1USubXdvGcQJ5OZOBRetJSnDwXte8TyMDkcIr9aSOprXDMRI9PwYyGjqCbVcTcVLEuF2dZQjl5Hy%2BHg9JdJIZV0fMATexa9a1K0Qz29wxffQ9KufAIiDKlp96YSP9tx7ZqMOvRDhZ4qZdTguzHmnajI6KDKnqLgCb1HjH8TiYx6z9uXxFKTqD9NWXAIkB%2B%2Fix%2BumUAGsqDHbWuQtk08k81CcoPiNjBFxoRcNbu2gr7UzTUTWWQIoZNBYFLHn55HZum%2B5a5Zd69u%2FV2zcNnMTcUK%2FKhz5BmjM1GVbjdAT%2BjLWmVr3lcDUghlYd9QHKMSgqA%2Ba0AYntRBbcpr%2FPjCe4R%2BSMaLpHH2%2BzXcxyiw6txfW1LXh8EH%2FIt0P%2FlC4cwJFci1D16Z8jC0ZpF4nzh1hywcS431te2Epgw1O6YwgY6pgG5HkZtTybm68ETn2zPyNEGn7967vqdmiQ2%2BBfJYfKNL4pNnv%2F2u7mu4BK7ffb%2BKiAd6PxmxiryOPiU9ctu90FsYEYaGH0sYR7YoYvNkWkKYFEeUqNZiYOeDLULDnpNO57j2O9yhE05MiIT4b4ATfC2fRe0SKvylEtYUvhaw35gz5qbCdaiLbz2dvcR6kEDDj28QZcMRp6RhNbTQLdSTClyFFbgZlpC&X-Amz-Signature=93764c8976df7f03a83b854ffdb48e5206f48f9f26424fdda91c36d813d7eb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDBTM56%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0QOF3MGoe8Wr58lhGvuaXCM8UmPSQW4sYI1QpS5JZjAiBNm7kRWzc1G1kJ0t73QBLobp5RetrBQp%2F9l90KTHZu4CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucgcBtF6vdka2EZAKtwDQuLCafnrKBTx6Uo%2Fba7WBjKIfw0J%2FnlulKlY80Za5U641C8lWk6kKmxaORslYZEMuE8GeFvXGNrGXuhYbiuxGW727MLSEI%2FX28Q4TL7yvhCdZN%2BmnTbD3kSIBa2EMesbhzgg%2Fc58DHQ57bV%2By%2FgIRmA8LCsFb9R4b9V5OIhHxAHKQIrawZynAs4scpCOEM20FTtsbAaOF1nzusRC%2BiINI91SyM1USubXdvGcQJ5OZOBRetJSnDwXte8TyMDkcIr9aSOprXDMRI9PwYyGjqCbVcTcVLEuF2dZQjl5Hy%2BHg9JdJIZV0fMATexa9a1K0Qz29wxffQ9KufAIiDKlp96YSP9tx7ZqMOvRDhZ4qZdTguzHmnajI6KDKnqLgCb1HjH8TiYx6z9uXxFKTqD9NWXAIkB%2B%2Fix%2BumUAGsqDHbWuQtk08k81CcoPiNjBFxoRcNbu2gr7UzTUTWWQIoZNBYFLHn55HZum%2B5a5Zd69u%2FV2zcNnMTcUK%2FKhz5BmjM1GVbjdAT%2BjLWmVr3lcDUghlYd9QHKMSgqA%2Ba0AYntRBbcpr%2FPjCe4R%2BSMaLpHH2%2BzXcxyiw6txfW1LXh8EH%2FIt0P%2FlC4cwJFci1D16Z8jC0ZpF4nzh1hywcS431te2Epgw1O6YwgY6pgG5HkZtTybm68ETn2zPyNEGn7967vqdmiQ2%2BBfJYfKNL4pNnv%2F2u7mu4BK7ffb%2BKiAd6PxmxiryOPiU9ctu90FsYEYaGH0sYR7YoYvNkWkKYFEeUqNZiYOeDLULDnpNO57j2O9yhE05MiIT4b4ATfC2fRe0SKvylEtYUvhaw35gz5qbCdaiLbz2dvcR6kEDDj28QZcMRp6RhNbTQLdSTClyFFbgZlpC&X-Amz-Signature=1e5feeb92988630268173253719afba91ec2705b21c8280f297d8a3ca9a46367&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
