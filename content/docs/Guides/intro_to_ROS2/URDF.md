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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2WULWL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDg0unWkrBsyrpSJEj%2FsiF757nXJtVMn8Gasp3lGtkVkQIgJZoWNgmz3ab0XMMa1x1XsuAHwYjrGdCO9MuWJPTf0wAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPpuiGtDy9ns0z3tircA%2B9lPr%2F0x%2BGFtejVyktDhK0tX0Er1bRBG1%2B7UvONv2WHNmh7AXeMAsiUy2UfLwRjB7ePcPtnwhyRL6Bl21wkuVZV2e0JZaoIq1VRoxuLY0w%2FbqTfjyd2LUZPqp84gJaLkaKwxdfNas70vZe9grXtvS4Mxsc7LPgqaR2iR%2B29vUzjefwvzHIvFzkaZ4CRK%2FjI744D0tDMwS2qyMtx8Cihy75g3phbaDJpC%2FtTANKDzbe%2F6jD%2FiVmNR%2B7dex2Nk9aMGbLK%2FYSs7w0YUEzdm2aq47r6SImB3LYmSs%2BDiOuZ%2BR0aml%2B6QTCrLUaFpZW6g0E6wvWqi5TfArf1utjiW5dryK2IknZLiwOstrkZkdLRh8D%2B8P%2B7dnT%2BoXxtyfhabKiKvMB4YwwBrsVlR9em3lanmNIh59IIFxFx9XvKgPB7oPAHuYIAxpL3bhUt9oextkU%2FHthCdFqVkTozWTbdpuekt%2BQIvtFA%2BADeTtJ5FBdopAAFIPlUaaJ6A0q2SNpIhBNQQ%2BVo4atkDrYZ%2F%2FekTB08tiYw21MKfKRc5Q9GgMwAOXVZssljOX8e5JL1znACa9MOdiYnsSiJ9ZO6v5FMagm3H0v8Ufxi9XzIj4ySPhqiE25xfO%2BWWR72WCEJ0JoHMPra778GOqUBQK%2FboG4dPdFtBWoRk6qDMkmNEdoOgytnxX7Oq9hLJFUtvT7YxPeZFaytaxmx48woHz3oc6YaSgx6nbhgTridggd99VCiuDmcl1FHkxxoMrCnYI6%2Fl5c9LbF7Img4HmpfUN7rwDdqTUDODzkI%2FgT%2FSxGYRlsLz7KeTsRLfPs5AHk4omi9iCZqLm7LAxQvGy7CDGpT305O2e7gMAEH1yKqzckAK9yl&X-Amz-Signature=d179d0901a5bde798dc141e660c48c4e5c0b88152f8594b5cd5107c61048d92b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2WULWL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDg0unWkrBsyrpSJEj%2FsiF757nXJtVMn8Gasp3lGtkVkQIgJZoWNgmz3ab0XMMa1x1XsuAHwYjrGdCO9MuWJPTf0wAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPpuiGtDy9ns0z3tircA%2B9lPr%2F0x%2BGFtejVyktDhK0tX0Er1bRBG1%2B7UvONv2WHNmh7AXeMAsiUy2UfLwRjB7ePcPtnwhyRL6Bl21wkuVZV2e0JZaoIq1VRoxuLY0w%2FbqTfjyd2LUZPqp84gJaLkaKwxdfNas70vZe9grXtvS4Mxsc7LPgqaR2iR%2B29vUzjefwvzHIvFzkaZ4CRK%2FjI744D0tDMwS2qyMtx8Cihy75g3phbaDJpC%2FtTANKDzbe%2F6jD%2FiVmNR%2B7dex2Nk9aMGbLK%2FYSs7w0YUEzdm2aq47r6SImB3LYmSs%2BDiOuZ%2BR0aml%2B6QTCrLUaFpZW6g0E6wvWqi5TfArf1utjiW5dryK2IknZLiwOstrkZkdLRh8D%2B8P%2B7dnT%2BoXxtyfhabKiKvMB4YwwBrsVlR9em3lanmNIh59IIFxFx9XvKgPB7oPAHuYIAxpL3bhUt9oextkU%2FHthCdFqVkTozWTbdpuekt%2BQIvtFA%2BADeTtJ5FBdopAAFIPlUaaJ6A0q2SNpIhBNQQ%2BVo4atkDrYZ%2F%2FekTB08tiYw21MKfKRc5Q9GgMwAOXVZssljOX8e5JL1znACa9MOdiYnsSiJ9ZO6v5FMagm3H0v8Ufxi9XzIj4ySPhqiE25xfO%2BWWR72WCEJ0JoHMPra778GOqUBQK%2FboG4dPdFtBWoRk6qDMkmNEdoOgytnxX7Oq9hLJFUtvT7YxPeZFaytaxmx48woHz3oc6YaSgx6nbhgTridggd99VCiuDmcl1FHkxxoMrCnYI6%2Fl5c9LbF7Img4HmpfUN7rwDdqTUDODzkI%2FgT%2FSxGYRlsLz7KeTsRLfPs5AHk4omi9iCZqLm7LAxQvGy7CDGpT305O2e7gMAEH1yKqzckAK9yl&X-Amz-Signature=5636eb8383b31cb85bffa9c3a61478a1592168b9ecd3ce3338ebcf72eccf341c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
