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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENFQ37Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHxf4f6Ig%2B7N9Nb6Cp305sw9ZFWpcf%2BR%2BZcSg%2BALBtAiEArY04oPYb3ZQjJ%2FFRdHVugRB%2FwmAQn8Hg%2FxZKIoelqLEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05Xxt98d%2BYrcOJLyrcA5Uc90D4ZK8uDML0%2Bf5MInBp5lplATLpu5ndSc3U%2F%2FJTiKGufhONF6IrdTMuf8UCdmgOIj7D%2Fou4lk4vmafuVQNYP3K25CEYnrBWSfZfP3d4RPV%2Bq5bIRLt8jUr%2B%2FHYe2ldr%2FqZE%2BX3sQBQhCHjA5zkOqCpQDlMf7%2FqyB5GofYqFOGLHU29%2BFaTMfRLFtqLP85N6WeY%2FcDzvyOuRY%2BUPwZx9Zpi1r6QaFU6Bl8oQ334zfEhdFd4lAFHLfyZebu%2BSt%2BvcMfy%2FuJX5Xqzuzv9Q2riyVkEtCB0Sr8V%2FswaY1YRsTBZFzemCmwXQl%2FQxVb0ZQESAZiPH%2BvXu%2BAGXWEFHehjLVmP71EtN%2BGjtLVc%2FnXjLN0M7Hefc2M9ls9FCxcvSw5wZ3tIsz2njPvRu2pxm68I4MAk64d2bAdL3AGH%2FaN5zZE%2FDdeOwm5ker9jaS1YVzxM%2BPLf0i7HnS%2BJ8NAFxnrkrwdITKFQyaWkqcU4MQ3P42I0AiywYg7kIeXaCN18hVLAPTBAue6sUalW8g2fPHBoeQShr4NkofYoB5ockt0EhYJrQ8VuTEvJgxiGJ3SDxXBEwtEjij%2FEPw%2BrPrgmRGk4X2D8s492eg15YeBp6aiurJyl%2F4orKfcC88AbYMN7OrMQGOqUBzbmGBEaUMMarhrnaclUcn%2BsFSx3gOOq8BrcY8gboZXSmwxXMiZbFhtxugvnnzqXnGjeDHLpfW4dRLBInSfgn%2FXAc4QVLDXE1TSQyPBDlu5EsQEUP3VpYUZ3KSw5PUjOjvRkITeTM%2BjGieAMYgMUxtC4LeX0ku6VcpALBpFNWmEqxiglDZZoGzU6Xm1rRUiWrgHWhf2ZTB9dVvXEKuABEy0wYd%2FJ1&X-Amz-Signature=6d9c249813fba45c591e3c8e2f972c137d6552bcfc1e20a894a036a67cd9fbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENFQ37Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHxf4f6Ig%2B7N9Nb6Cp305sw9ZFWpcf%2BR%2BZcSg%2BALBtAiEArY04oPYb3ZQjJ%2FFRdHVugRB%2FwmAQn8Hg%2FxZKIoelqLEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05Xxt98d%2BYrcOJLyrcA5Uc90D4ZK8uDML0%2Bf5MInBp5lplATLpu5ndSc3U%2F%2FJTiKGufhONF6IrdTMuf8UCdmgOIj7D%2Fou4lk4vmafuVQNYP3K25CEYnrBWSfZfP3d4RPV%2Bq5bIRLt8jUr%2B%2FHYe2ldr%2FqZE%2BX3sQBQhCHjA5zkOqCpQDlMf7%2FqyB5GofYqFOGLHU29%2BFaTMfRLFtqLP85N6WeY%2FcDzvyOuRY%2BUPwZx9Zpi1r6QaFU6Bl8oQ334zfEhdFd4lAFHLfyZebu%2BSt%2BvcMfy%2FuJX5Xqzuzv9Q2riyVkEtCB0Sr8V%2FswaY1YRsTBZFzemCmwXQl%2FQxVb0ZQESAZiPH%2BvXu%2BAGXWEFHehjLVmP71EtN%2BGjtLVc%2FnXjLN0M7Hefc2M9ls9FCxcvSw5wZ3tIsz2njPvRu2pxm68I4MAk64d2bAdL3AGH%2FaN5zZE%2FDdeOwm5ker9jaS1YVzxM%2BPLf0i7HnS%2BJ8NAFxnrkrwdITKFQyaWkqcU4MQ3P42I0AiywYg7kIeXaCN18hVLAPTBAue6sUalW8g2fPHBoeQShr4NkofYoB5ockt0EhYJrQ8VuTEvJgxiGJ3SDxXBEwtEjij%2FEPw%2BrPrgmRGk4X2D8s492eg15YeBp6aiurJyl%2F4orKfcC88AbYMN7OrMQGOqUBzbmGBEaUMMarhrnaclUcn%2BsFSx3gOOq8BrcY8gboZXSmwxXMiZbFhtxugvnnzqXnGjeDHLpfW4dRLBInSfgn%2FXAc4QVLDXE1TSQyPBDlu5EsQEUP3VpYUZ3KSw5PUjOjvRkITeTM%2BjGieAMYgMUxtC4LeX0ku6VcpALBpFNWmEqxiglDZZoGzU6Xm1rRUiWrgHWhf2ZTB9dVvXEKuABEy0wYd%2FJ1&X-Amz-Signature=dabfcef20af948941bbef0cce1441fef964543ade9606999f80bc1cb05f28152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
