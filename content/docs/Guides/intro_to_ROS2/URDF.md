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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LICBJDO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDcUGB28csjvB%2BMlzrBSrv%2BiFWaly%2FZ2tRIyDUYDFQbJQIhAIKHHDFqx%2BTcNYIe9c7CvhgNY5Sdart%2FDYu6lyEYWrJmKv8DCFoQABoMNjM3NDIzMTgzODA1Igzn17c%2B44aGAK6CISwq3AM5Tmu%2FnN8clp8tdX2CWLvZupHs2UE27EtYdTFBmd6VOh57VRvuPrUcUpBjpkf4YHUeQJ00OObPnW8%2Brj9w1Zs6CMJ1SkRoIafnDl3I32qCnCldZceukty0W7GVpBo775p8ONwzqR8PhHU47NSvKYZO%2B8eJAZu088Y5gyf%2B%2BlHMSiFVpgDl4Sa2my4TRKyX7EsJoOVF2HSpeRY8DHHyS7IAlMH6mXZQHkE2Um4TsR6uwS89ObNggsEAacnlTWB2DAHIxFRe9z5zJuzcrDeHjoQnWAAbmfr2jXLrt8xwq1fVXVLEv9e6GHEc%2FEd30mJiIfzuZ3wJIaUV0TNnJw81SIm14Wan%2FONaTZx4AdzDSZQHTecDJnhL6gPEquEodwRdwJT2knC4x0JL8GzHnYLlGSu%2BD%2BtgMkYJ2evp0QeveSbjbwFCyWNyed02jbLHbIMWZMDnVzMElWrXhxFMQ81UfNKOkZCkm8sOshwGGyRKctlsT7HManQVdEbFJv5g23SFlcvXnQiZA%2B%2BUEY9MxLGJCYMbrbkZ0SCmEcsdKZYuOjY7j0UKdVtmYhKmsOzyCyAdZiMHt0UO93WBxknvSvj0gaej5O6EdmJq3Xp9VgO2kiINHmLsudCNIsi0xxAPWzC9s7%2FCBjqkAUg%2FN7oT8LF17sjBVPftMx7KM70l%2F48TaQlmxQMFYvTGU%2FvNl9B4UxtLbyRHcqJheiZ9vyX6f%2FM%2BpNW6x%2BKMoGNJkA7dApSR3tmuGzfS%2B4YAwa54X1tXFVoO1TK%2BcKcs5PBFF9Uj%2F1uAkcVVCRXpUJPJATSXvMe%2BdHC5tDl2W3ToKK4P3xOJN%2BIoq0b4pGqzvUwdPoavOhGXSv1K2bZFrWsU4Hh6&X-Amz-Signature=2d97b5018986db9e6fafc27d02cdf9d19bfa87c523c58bfab5ab08dbec80655f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LICBJDO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDcUGB28csjvB%2BMlzrBSrv%2BiFWaly%2FZ2tRIyDUYDFQbJQIhAIKHHDFqx%2BTcNYIe9c7CvhgNY5Sdart%2FDYu6lyEYWrJmKv8DCFoQABoMNjM3NDIzMTgzODA1Igzn17c%2B44aGAK6CISwq3AM5Tmu%2FnN8clp8tdX2CWLvZupHs2UE27EtYdTFBmd6VOh57VRvuPrUcUpBjpkf4YHUeQJ00OObPnW8%2Brj9w1Zs6CMJ1SkRoIafnDl3I32qCnCldZceukty0W7GVpBo775p8ONwzqR8PhHU47NSvKYZO%2B8eJAZu088Y5gyf%2B%2BlHMSiFVpgDl4Sa2my4TRKyX7EsJoOVF2HSpeRY8DHHyS7IAlMH6mXZQHkE2Um4TsR6uwS89ObNggsEAacnlTWB2DAHIxFRe9z5zJuzcrDeHjoQnWAAbmfr2jXLrt8xwq1fVXVLEv9e6GHEc%2FEd30mJiIfzuZ3wJIaUV0TNnJw81SIm14Wan%2FONaTZx4AdzDSZQHTecDJnhL6gPEquEodwRdwJT2knC4x0JL8GzHnYLlGSu%2BD%2BtgMkYJ2evp0QeveSbjbwFCyWNyed02jbLHbIMWZMDnVzMElWrXhxFMQ81UfNKOkZCkm8sOshwGGyRKctlsT7HManQVdEbFJv5g23SFlcvXnQiZA%2B%2BUEY9MxLGJCYMbrbkZ0SCmEcsdKZYuOjY7j0UKdVtmYhKmsOzyCyAdZiMHt0UO93WBxknvSvj0gaej5O6EdmJq3Xp9VgO2kiINHmLsudCNIsi0xxAPWzC9s7%2FCBjqkAUg%2FN7oT8LF17sjBVPftMx7KM70l%2F48TaQlmxQMFYvTGU%2FvNl9B4UxtLbyRHcqJheiZ9vyX6f%2FM%2BpNW6x%2BKMoGNJkA7dApSR3tmuGzfS%2B4YAwa54X1tXFVoO1TK%2BcKcs5PBFF9Uj%2F1uAkcVVCRXpUJPJATSXvMe%2BdHC5tDl2W3ToKK4P3xOJN%2BIoq0b4pGqzvUwdPoavOhGXSv1K2bZFrWsU4Hh6&X-Amz-Signature=7bef9ac5bcae3fb05eff6eeaf8c8bcbaee3b054d7bf5ac5236e4b6dd71ac9f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
