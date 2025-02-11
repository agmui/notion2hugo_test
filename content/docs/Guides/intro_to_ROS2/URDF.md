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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DSPHBD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzyhMJhkgSxirI2SzZrvSOFVO2MjRGWl6u2mP7HfNmAIhAIRANZ1PlCv8MlsGiTT2utBunXXjK63Q1OXCV6Fup70%2FKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbkCJlbSRRTFhk21kq3AMuStZdDOp2TBiLdipnCCAaCQaVXSAXgM6bdpFR%2B5B7rPpj5eUkh5%2BcrMzZKZD%2FV5AoDhgno%2FCZiLo3cZDm5F3sPWioTGwTFtkXyZD4nOXIDwpQQmLbbMysJq%2F%2BYrfJlvo6KjxvNTTPqBFdW1jXQfXVESVNNcrNf1RCo846RNAJbGo2XKyeoS9u%2BPe8ppy4KYFlH%2FCe2QVIaLxnuTryrxTm8ncpZJFdbHUBv9usSiyvj2jXugD6sK6Lk06O77MsvdVFPV0NMDwySHCx74U1WeAJ2f2FuaqhPh6pEfqGHsnJPGAH%2Bfc1yiBVwkfWL3K6YZMQubtMbRKuqr2ESNUEhEtFmDKqT81Y21%2B9RcaMFGERKvOzwJqFKxR34l%2F9VV%2FLtSnGE1cHnop2MOBrHLJ6xSziI48282avQQFf2giGN5mS6yRPYVqV9s5zeM50HcuvwA%2Bzekxf0NuRqV1rvcmP8azmwecs5I8spMRVqytdkSoHscGxalsT0SEKwyGeQmhEilC2Bt5SMPYXWLcr3tH4RremsrJD4ALbVUZRjqXeNM9zW%2FotE0oZMX3PcWLjrYBSCP8B2G3OiBY0c3jbU3otS9Qqytnfz6acpQP7o34yWMGUU%2FtQpG2ZGUfJIJyUFTCqyK69BjqkAcxgosXDWbp2a59%2Bj%2BQhb0d7%2FmGjlN1Zt62f1a75o9zldGRrGTidOfpiNCZJ2RSRxU8IJbn6Muak1zaH5%2BZyCAecvOTZ4gTwqt%2B9%2F7iTgpuYdM2u2mzCjdVYEb4XmxUbYYQ%2Fxq0%2Fj9ji1rrZR0SUPs8tzs%2FAPmjTtz8r%2Beyj2Ux05k7t%2Fm1zXWjLaVEDSG%2FHq2oYxwo5Wwi%2FY94Ys68W0TphQife&X-Amz-Signature=db735e88b9643186674bb001548224378c8bc934d924f2cee4b81d0858a04d04&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DSPHBD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzyhMJhkgSxirI2SzZrvSOFVO2MjRGWl6u2mP7HfNmAIhAIRANZ1PlCv8MlsGiTT2utBunXXjK63Q1OXCV6Fup70%2FKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbkCJlbSRRTFhk21kq3AMuStZdDOp2TBiLdipnCCAaCQaVXSAXgM6bdpFR%2B5B7rPpj5eUkh5%2BcrMzZKZD%2FV5AoDhgno%2FCZiLo3cZDm5F3sPWioTGwTFtkXyZD4nOXIDwpQQmLbbMysJq%2F%2BYrfJlvo6KjxvNTTPqBFdW1jXQfXVESVNNcrNf1RCo846RNAJbGo2XKyeoS9u%2BPe8ppy4KYFlH%2FCe2QVIaLxnuTryrxTm8ncpZJFdbHUBv9usSiyvj2jXugD6sK6Lk06O77MsvdVFPV0NMDwySHCx74U1WeAJ2f2FuaqhPh6pEfqGHsnJPGAH%2Bfc1yiBVwkfWL3K6YZMQubtMbRKuqr2ESNUEhEtFmDKqT81Y21%2B9RcaMFGERKvOzwJqFKxR34l%2F9VV%2FLtSnGE1cHnop2MOBrHLJ6xSziI48282avQQFf2giGN5mS6yRPYVqV9s5zeM50HcuvwA%2Bzekxf0NuRqV1rvcmP8azmwecs5I8spMRVqytdkSoHscGxalsT0SEKwyGeQmhEilC2Bt5SMPYXWLcr3tH4RremsrJD4ALbVUZRjqXeNM9zW%2FotE0oZMX3PcWLjrYBSCP8B2G3OiBY0c3jbU3otS9Qqytnfz6acpQP7o34yWMGUU%2FtQpG2ZGUfJIJyUFTCqyK69BjqkAcxgosXDWbp2a59%2Bj%2BQhb0d7%2FmGjlN1Zt62f1a75o9zldGRrGTidOfpiNCZJ2RSRxU8IJbn6Muak1zaH5%2BZyCAecvOTZ4gTwqt%2B9%2F7iTgpuYdM2u2mzCjdVYEb4XmxUbYYQ%2Fxq0%2Fj9ji1rrZR0SUPs8tzs%2FAPmjTtz8r%2Beyj2Ux05k7t%2Fm1zXWjLaVEDSG%2FHq2oYxwo5Wwi%2FY94Ys68W0TphQife&X-Amz-Signature=d15e64a2770f633de903f84afcd0b2b945afb17145a3684f419fa1fc9e82ac38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
