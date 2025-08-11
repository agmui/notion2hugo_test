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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EELWUCK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7EcRKNq0T%2FB901bK3FDo2UKeLembhQgG5JdXEaApQAwIhAOG%2B6Qz%2F8SIpiOXccNJkUtYY8bfvhNDx3J1yY2vhERyGKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyheJP1f%2FDqWNdAO8gq3AMOCJotUtb7%2BRrmn4ZF8l0eU0bh5CT3zxQHZYsbVuCXq%2FJ6b9WGVV5Lu1Qp7L1rQOeF%2BidjkbbLZEeUi5zj3MJxd1l2ovHlrrEYFOxhV7yLxgev200%2Bx2HEaeAqq%2F2Di6aCVWX5jRVwJQgTDBiz5aa3PuawZAvQyS2OEAqQSebq0kt6FDzkJchPNy%2Fj9O%2B1aHDLT4xqIDxfEi4b9LiBhTpdx2cN72pxX8QjldyDCIRiv0dBgskh2Xf6%2BcXI0R%2BygG7%2FdnuJ6W8O%2BlzfPHUUvCkfOFlAf67jC8KvUOf%2FyeiHFqK%2BtAWl1HLeIESZvfcMY6H62IhLylUlTumEZLghY6w812X%2BkFd9zjVJf%2FpM8CFStHLoi3Opms3RTk8CyJmOWpcbTCETAub1aCfJn1yYdZz2FfDO%2Fv2Ypvvci1orJmM2ljeZM3D8CwCf0CoDO0cDh%2FY4MfG74ojts5FRnVSoqgN0PNmGkEkLVk7dDCNa72RcWJQNeVuWRXeyDf2vRpogbFafMiwx2iaGyBLqlmNacXtQGjdxtaDJ%2B2aGsEsjzhN327PRl6iGSF5IhSBPzvSDqNGN421H1NuNydQIptndHwiaYhVW4Z49j7mfrYxuUd0bxmavYIv6NtARcFhA4zDWoufEBjqkAe6HFfhBT40lTlrxpubdpr%2BWLTWVlyFz6IXbiDmJcOi1WPdSq8IsT2%2BmCzEH7yQqVEAouKvmLEib6JslfCqBULfIO8ZTb8Ilh%2FVpKZDn1wEOTnkIDnbRI3LJQE0%2F5FkAKEpjXLG30pyDzwIioVBcR6RxaZYCg0SdLYAT87sI9%2BPYdwiJ7fmCAIN5e25kjUeoa40OGZVN1RXSj76WR5bO8VvdY1Io&X-Amz-Signature=7ce2f29efee6fedf28925501484cd11b0febb8b3a15a213c9fe5450f4e3096ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EELWUCK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7EcRKNq0T%2FB901bK3FDo2UKeLembhQgG5JdXEaApQAwIhAOG%2B6Qz%2F8SIpiOXccNJkUtYY8bfvhNDx3J1yY2vhERyGKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyheJP1f%2FDqWNdAO8gq3AMOCJotUtb7%2BRrmn4ZF8l0eU0bh5CT3zxQHZYsbVuCXq%2FJ6b9WGVV5Lu1Qp7L1rQOeF%2BidjkbbLZEeUi5zj3MJxd1l2ovHlrrEYFOxhV7yLxgev200%2Bx2HEaeAqq%2F2Di6aCVWX5jRVwJQgTDBiz5aa3PuawZAvQyS2OEAqQSebq0kt6FDzkJchPNy%2Fj9O%2B1aHDLT4xqIDxfEi4b9LiBhTpdx2cN72pxX8QjldyDCIRiv0dBgskh2Xf6%2BcXI0R%2BygG7%2FdnuJ6W8O%2BlzfPHUUvCkfOFlAf67jC8KvUOf%2FyeiHFqK%2BtAWl1HLeIESZvfcMY6H62IhLylUlTumEZLghY6w812X%2BkFd9zjVJf%2FpM8CFStHLoi3Opms3RTk8CyJmOWpcbTCETAub1aCfJn1yYdZz2FfDO%2Fv2Ypvvci1orJmM2ljeZM3D8CwCf0CoDO0cDh%2FY4MfG74ojts5FRnVSoqgN0PNmGkEkLVk7dDCNa72RcWJQNeVuWRXeyDf2vRpogbFafMiwx2iaGyBLqlmNacXtQGjdxtaDJ%2B2aGsEsjzhN327PRl6iGSF5IhSBPzvSDqNGN421H1NuNydQIptndHwiaYhVW4Z49j7mfrYxuUd0bxmavYIv6NtARcFhA4zDWoufEBjqkAe6HFfhBT40lTlrxpubdpr%2BWLTWVlyFz6IXbiDmJcOi1WPdSq8IsT2%2BmCzEH7yQqVEAouKvmLEib6JslfCqBULfIO8ZTb8Ilh%2FVpKZDn1wEOTnkIDnbRI3LJQE0%2F5FkAKEpjXLG30pyDzwIioVBcR6RxaZYCg0SdLYAT87sI9%2BPYdwiJ7fmCAIN5e25kjUeoa40OGZVN1RXSj76WR5bO8VvdY1Io&X-Amz-Signature=20858346c604a00a6f943229b2b89bf89a12b74cfd6e9452e0c8be23bde4be1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
