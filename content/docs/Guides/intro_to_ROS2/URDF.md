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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEIYLZA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWSXGvJzkRD79ZpO5o1JKO2ZBqPRElEieyq%2Fcx7p7lfQIhAJpROvu7WyJ4iI6RYjpFj8LTJnOmkD0GsuDdBSUbK764Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyfwFd3OTjoqsD9Jg4q3APZUeyWYKtjDLrE5eJole73%2FQx%2BxgKVpZo1zAPz%2BsJdIKk7Q3UFifPY5E3szNPhCuGgTb6cVafxVffKMVtex%2F1XqCh3nM83ujqRlPbDSCJEFB9p3JuK%2BvbuNtJaVs4Y8OnWATo2MM8a6Ch9Oq8g0o1MvKr1p0zg5hSdAPfOqDfw9q2xMrHGPe0mF86Ms3r8VNmfRCmdSc5E2yIxHT5FTpEB4SPZlY7iqLcsDuCfJw3zCGxKRBnPMNMfUloX8vHpDFQQIOcGeSo5x7kRv4UF0NbNfgoqcg7u8BFqfm0%2F8bZvRByXh%2BRerjqYANHvxBLXHBeLHlolsA4Bbn0%2BujpHROQYNYL1luRC7a6BDM4tvUMaaYVpI3W%2FETzd5jDkGATILJzldY9DeIUsMK7ETgIm%2FUsgpG%2BntYtU7BRshs96M8O%2BE6vdIyvW56M5njbp1IuREeQp549Zaxumn%2FHx1bOq7qZb75OA3g%2FINk6X4o%2BD31ABj1PSD4tDw5i3ZJUF2cKYEg9c0XxRxExcMFeMnN%2F%2BYf%2FMwrWX4pFbkeLVbWa4zCIAqT70PkMq%2BBpJ4fX%2B1AQodqHzWXmZ0AhN6kJe9B9XXff4e5s1J0JuXsDl8KlzZKVKpgj7r1OcL9ZZPBEVVTCb%2BvfEBjqkAamGUapUxFDy3K84EIjisWfAYSYJYd0f5rC%2FjbB1oxEsRGafgGR3pM3HJgD1VN3E3kViwkp08Riu9rpDCPdQ2AqwM91VSDAr90XeIL%2Fg4aG1Kb9P1I0pksBQCxU8%2FCAJofqd%2FfrKWDCBA3gZSv8z7ks4mZcqtgvKC0YJc9f1ZpSoI4xor5HcJMhH3XqiUn4T17vPgsWq44rKVEj%2FXmptvBYyCnRw&X-Amz-Signature=e14e588e58916112a217a50f977bddb418bace7f85118bcec6f9e166fe88d13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEIYLZA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWSXGvJzkRD79ZpO5o1JKO2ZBqPRElEieyq%2Fcx7p7lfQIhAJpROvu7WyJ4iI6RYjpFj8LTJnOmkD0GsuDdBSUbK764Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyfwFd3OTjoqsD9Jg4q3APZUeyWYKtjDLrE5eJole73%2FQx%2BxgKVpZo1zAPz%2BsJdIKk7Q3UFifPY5E3szNPhCuGgTb6cVafxVffKMVtex%2F1XqCh3nM83ujqRlPbDSCJEFB9p3JuK%2BvbuNtJaVs4Y8OnWATo2MM8a6Ch9Oq8g0o1MvKr1p0zg5hSdAPfOqDfw9q2xMrHGPe0mF86Ms3r8VNmfRCmdSc5E2yIxHT5FTpEB4SPZlY7iqLcsDuCfJw3zCGxKRBnPMNMfUloX8vHpDFQQIOcGeSo5x7kRv4UF0NbNfgoqcg7u8BFqfm0%2F8bZvRByXh%2BRerjqYANHvxBLXHBeLHlolsA4Bbn0%2BujpHROQYNYL1luRC7a6BDM4tvUMaaYVpI3W%2FETzd5jDkGATILJzldY9DeIUsMK7ETgIm%2FUsgpG%2BntYtU7BRshs96M8O%2BE6vdIyvW56M5njbp1IuREeQp549Zaxumn%2FHx1bOq7qZb75OA3g%2FINk6X4o%2BD31ABj1PSD4tDw5i3ZJUF2cKYEg9c0XxRxExcMFeMnN%2F%2BYf%2FMwrWX4pFbkeLVbWa4zCIAqT70PkMq%2BBpJ4fX%2B1AQodqHzWXmZ0AhN6kJe9B9XXff4e5s1J0JuXsDl8KlzZKVKpgj7r1OcL9ZZPBEVVTCb%2BvfEBjqkAamGUapUxFDy3K84EIjisWfAYSYJYd0f5rC%2FjbB1oxEsRGafgGR3pM3HJgD1VN3E3kViwkp08Riu9rpDCPdQ2AqwM91VSDAr90XeIL%2Fg4aG1Kb9P1I0pksBQCxU8%2FCAJofqd%2FfrKWDCBA3gZSv8z7ks4mZcqtgvKC0YJc9f1ZpSoI4xor5HcJMhH3XqiUn4T17vPgsWq44rKVEj%2FXmptvBYyCnRw&X-Amz-Signature=8f258bb5bd2af295ccd36df6f987ef8ce0536dd624782553fad62068b67977f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
