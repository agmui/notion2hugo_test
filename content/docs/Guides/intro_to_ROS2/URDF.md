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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CU4TQWO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCu4WQMCRP4P7tnvRIez2pB64t9ElhgAdtS%2BIpyMqDBVwIgXM9BBZ6Kv%2FMAaOF8x43eYbfK9QfIfKzsVTiw5%2Ff5iHoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNLkbjTzCmMMIxwHgSrcA5d%2FElS8aEtEVth4f4GNjs7mvJYgTrIFGZVc7bx0YuldizyK0%2FgWvFLHeU2%2Fq8XT6vjB%2Bp0DPeJX9FvtjBoLESnZllr%2FjjiOMgYEgAVZTNyhrzfglHvkAU06hH5%2FPm3EurivAdY6Z9UmtYw9ZWqP4Wzw09J4MfJ1fvMp%2F6KSjID4jo2b1hYkvhl5onmfuX5TKW8eEPCHH3xx01htiC%2BfQ8yh%2B0JBThv1S3%2Fu%2F44XTy9HaK2ni%2FZu6tQECyqAO3SaZoySfh0Cf5QtWq2nf0dxn2u94fGbzCpSXmJ1H0TUjWrtiP9VvHFL5tkSPrKo7Yduez715%2FCwy5nQrHsMXWHv%2BXtMewfpRZVHCzasTQyLbiZy52ZTLcdy7IE%2BjuMApgVakxCgqVMDQPVOiSDr1mbVXu9E3d74JWfyDYdIDjowJNl8aUBwf3irBpmC9GaUpSszp%2F6s0soRuhM4Fpj%2FStqSuwHwPesWS7xMJw1X9O2eFtuy85Q%2FqO5u9TfVz67u5kAJClF3GaT5ZxoouHKOCGfgp96JHt6uzqY1PdD7ZlrZKWZa6Ex57GAoimHyWdTAu1Uykwk8MnTN8brRZYAQOz3KxJM3cPoCu%2F8jLo5%2By%2BrWJfW1g25vWrCMDSSGu2LUMIiElsEGOqUBD0EDHHECcr0WUEnP4K8%2B9aap9SZnPL%2F3DYps7rz%2BQzxum933L7x8WjAD%2B7DzuTaeHubjj%2BazCLS6ioHqGETuOXr6%2FePfDeYNy4dN%2FXXFGFA9KsmWYQ64CDqMAr4ySVKQ127KIykASJxU6RLSJa30N4ZYK2Tw3bOZVhZB8a%2FohVEt1WeBrx6c9W1xIdsMGXU3aNBljSfrcYjz5YfIgKuJX4BrhMZA&X-Amz-Signature=105aa2c8c9a8bc49dbd5b568daa013c415ae21fab333884decdf94bf01b342f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CU4TQWO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCu4WQMCRP4P7tnvRIez2pB64t9ElhgAdtS%2BIpyMqDBVwIgXM9BBZ6Kv%2FMAaOF8x43eYbfK9QfIfKzsVTiw5%2Ff5iHoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNLkbjTzCmMMIxwHgSrcA5d%2FElS8aEtEVth4f4GNjs7mvJYgTrIFGZVc7bx0YuldizyK0%2FgWvFLHeU2%2Fq8XT6vjB%2Bp0DPeJX9FvtjBoLESnZllr%2FjjiOMgYEgAVZTNyhrzfglHvkAU06hH5%2FPm3EurivAdY6Z9UmtYw9ZWqP4Wzw09J4MfJ1fvMp%2F6KSjID4jo2b1hYkvhl5onmfuX5TKW8eEPCHH3xx01htiC%2BfQ8yh%2B0JBThv1S3%2Fu%2F44XTy9HaK2ni%2FZu6tQECyqAO3SaZoySfh0Cf5QtWq2nf0dxn2u94fGbzCpSXmJ1H0TUjWrtiP9VvHFL5tkSPrKo7Yduez715%2FCwy5nQrHsMXWHv%2BXtMewfpRZVHCzasTQyLbiZy52ZTLcdy7IE%2BjuMApgVakxCgqVMDQPVOiSDr1mbVXu9E3d74JWfyDYdIDjowJNl8aUBwf3irBpmC9GaUpSszp%2F6s0soRuhM4Fpj%2FStqSuwHwPesWS7xMJw1X9O2eFtuy85Q%2FqO5u9TfVz67u5kAJClF3GaT5ZxoouHKOCGfgp96JHt6uzqY1PdD7ZlrZKWZa6Ex57GAoimHyWdTAu1Uykwk8MnTN8brRZYAQOz3KxJM3cPoCu%2F8jLo5%2By%2BrWJfW1g25vWrCMDSSGu2LUMIiElsEGOqUBD0EDHHECcr0WUEnP4K8%2B9aap9SZnPL%2F3DYps7rz%2BQzxum933L7x8WjAD%2B7DzuTaeHubjj%2BazCLS6ioHqGETuOXr6%2FePfDeYNy4dN%2FXXFGFA9KsmWYQ64CDqMAr4ySVKQ127KIykASJxU6RLSJa30N4ZYK2Tw3bOZVhZB8a%2FohVEt1WeBrx6c9W1xIdsMGXU3aNBljSfrcYjz5YfIgKuJX4BrhMZA&X-Amz-Signature=ca91a84c8329f761b295914630c95a434efee4ac64134a06558b6ee6c06d3761&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
