---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JL4SRZQ%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2BYQuY1XJ01iDItNWINX6MdPt3N1G2e1qsjjGffJHoAIhAL%2BgOE3SwDVvuPN7rqcQzNW2LxbksxLeune2qCftQQxlKv8DCFQQABoMNjM3NDIzMTgzODA1Igx7RhII%2Bd7%2FMrZfqiEq3AP8WJE1Obo31nWBVzkx4w65iTMBFegV1FlF8y5XGAKl76PLVdYVpVTeqdk8DcI%2B3jjaQezxp6PAYBSKsDZxNv1jLr06gP3IrK%2BxhvaIcPrBBokqGarUX3JM0pXcGeiV47MLtJU9TWBK6lHmW4%2BsTehFlW3f84ErO8dAscHl%2BP1aeUkA7Zpu4SdEjQ%2FPNLY%2FL3ifDyhlov2R3zlPKQAwLSMbZsHc%2F3W%2BLZVfDYch3A6UMPndOHB8f34nvmwX0tsAJJ2tV%2FLcL3PGZFAFhkElhozwY9WoyFUcbvICu4RLDvVh3Ile0REtULSc1yGXWSN58%2FDKfl4j88H%2Bme4v%2B93MCefBtjCCheMnAQSp%2FpZxAGsDXrt7VuSy%2FLL%2B2Oycp49bj9lL7ymdwGvunEjvSyj0WDhlfPU1khJBDljcFoJj2sjN778Bi3HWte3k08YCpx6K76SlDLVrYE3YYLdHhvLa%2FENOcmSs61dc4HffZznHXHgPMIOYwTHZYXND46hsM0B98tM%2FQkY0BLlxqkzBxACtmgjyWdePTXWDG8%2BGsXVrLq6of00nq5%2Bvm1NbGkONAXOCLtGqOj017lbJB8WDLqI8Afy%2BROQ%2B%2BKFK%2BhFyAS1iWBVZh0J9KiDrWubkAvWcMzDcpebSBjqkAboSe%2FhDwoSiseCmSnNJc9qG5jgQHUkQUdp3DBxN1LiOEMoF5Ky3VzzE0ZbKtu7NpSheWGiFTuUZOx2OfMmx5J27GiuV6mHl3TU0PP1p1hH3Yqwl6puGkoMtWkDTp37EUnDNMWpMJTzzUFNpHxnROX0RHFdclsKFSj2wnmQbcnGpQQ9bGW5V1UhtkoY0xAIBwzNxBin7UaBIVjWv%2B3no7eCJSTg5&X-Amz-Signature=0515451f037973c31c7eef8c9261bbbd312aae20c280f2d86d4d2501882ae275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JL4SRZQ%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2BYQuY1XJ01iDItNWINX6MdPt3N1G2e1qsjjGffJHoAIhAL%2BgOE3SwDVvuPN7rqcQzNW2LxbksxLeune2qCftQQxlKv8DCFQQABoMNjM3NDIzMTgzODA1Igx7RhII%2Bd7%2FMrZfqiEq3AP8WJE1Obo31nWBVzkx4w65iTMBFegV1FlF8y5XGAKl76PLVdYVpVTeqdk8DcI%2B3jjaQezxp6PAYBSKsDZxNv1jLr06gP3IrK%2BxhvaIcPrBBokqGarUX3JM0pXcGeiV47MLtJU9TWBK6lHmW4%2BsTehFlW3f84ErO8dAscHl%2BP1aeUkA7Zpu4SdEjQ%2FPNLY%2FL3ifDyhlov2R3zlPKQAwLSMbZsHc%2F3W%2BLZVfDYch3A6UMPndOHB8f34nvmwX0tsAJJ2tV%2FLcL3PGZFAFhkElhozwY9WoyFUcbvICu4RLDvVh3Ile0REtULSc1yGXWSN58%2FDKfl4j88H%2Bme4v%2B93MCefBtjCCheMnAQSp%2FpZxAGsDXrt7VuSy%2FLL%2B2Oycp49bj9lL7ymdwGvunEjvSyj0WDhlfPU1khJBDljcFoJj2sjN778Bi3HWte3k08YCpx6K76SlDLVrYE3YYLdHhvLa%2FENOcmSs61dc4HffZznHXHgPMIOYwTHZYXND46hsM0B98tM%2FQkY0BLlxqkzBxACtmgjyWdePTXWDG8%2BGsXVrLq6of00nq5%2Bvm1NbGkONAXOCLtGqOj017lbJB8WDLqI8Afy%2BROQ%2B%2BKFK%2BhFyAS1iWBVZh0J9KiDrWubkAvWcMzDcpebSBjqkAboSe%2FhDwoSiseCmSnNJc9qG5jgQHUkQUdp3DBxN1LiOEMoF5Ky3VzzE0ZbKtu7NpSheWGiFTuUZOx2OfMmx5J27GiuV6mHl3TU0PP1p1hH3Yqwl6puGkoMtWkDTp37EUnDNMWpMJTzzUFNpHxnROX0RHFdclsKFSj2wnmQbcnGpQQ9bGW5V1UhtkoY0xAIBwzNxBin7UaBIVjWv%2B3no7eCJSTg5&X-Amz-Signature=a5344b6e24a41b5a1aefca8cf373955f580c83f0198f584753a8451b39a015c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
