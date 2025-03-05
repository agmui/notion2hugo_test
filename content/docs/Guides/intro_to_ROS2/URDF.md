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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKFEYZS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwZ%2F9xrbajLIAVweQzDwDiewEF%2FwfnAaOHDbgRPl7CYwIhANO%2BfAhy8l5DZJl0fkQEJ2cUnVAY6J%2BoHImdVqHxiceyKv8DCBUQABoMNjM3NDIzMTgzODA1IgzkZfs7eeF4HrHO9vwq3ANk6sMfosDKRi3wG%2F6DHn%2FHDbiDUVQpMkGLBdtih3lo4JtsBnZg0Q4PcsAfKYC07IlVA35inqGAb34r4KNQ7Hyc3QkQvtLu4ZMlhpMLDT%2FVrcGyCxBcsU8ojrZ8iAstFTFSRIw4TUfkyZeqkXgORQ9Cg5%2FQDhMwdl69uuhSJKrz71eR2JbIoTAkud2CPn3%2FRlpRod8VTeC4n5vCet2oQB%2FKOJuNruAOKUgEvk6eR1wAiJ5M%2FM1JMRmRreEgRcwud8rsFaJpd%2FbONBINAek%2BiuU0zw5gdwqn%2FHZdGcf6pfwPFk9bFT3kLE1XK2wJin%2BsaqwweIWybzECStGjxPKPMHGKqdbpdVrVSQ%2F4214z4qL73SpJg1%2B4tqtZ0W5XnM94SE7CI2oYRKDhhteGX675QK4pr9q57Y0%2Bp77kA%2BrZqI5WiBOLhaPd%2FZoadrRYiiv8RpfdfRz8WzXXS%2F675q9TFPAhRqQHFVN4yZcuMU5lxDhTH5kUw7liHliJN2UnU6fek25mgzUeJZiQ77jgjIIkdKRn1HZxPYRtSLHnVyuq1vZk5jA9K%2BviHhyMdg82ODvDlupu%2F8qzCKRYqgJcmcQwJIHcPMBhhiBB8ARsHM6x5Zwa8BfcWVWQwgwooGNoQTDd9KC%2BBjqkATwg7FnGlkPdYinYJN5V%2FcBySTLzCbVkdMXyg0oVATUWDlhU%2BP2qKt9AzwhG4577ZFNZONNuyHGEhyxapISuWQOZ2KVtGLr0dAuHg%2FNirfVZ7n2ore27Gg%2Fei%2BWdoYUWdSbILRSuTcqDSLyt5607298LUycHVL%2BDWLCFU3DabHMt3%2BAvui6DRr6RiuFd%2BzYTh6LCSBT9U6RzoibvBspD472g77qV&X-Amz-Signature=aa358e3121575af185cc5ff127c34fb4615592f7c704a6ead5cbf457f3296ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKFEYZS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwZ%2F9xrbajLIAVweQzDwDiewEF%2FwfnAaOHDbgRPl7CYwIhANO%2BfAhy8l5DZJl0fkQEJ2cUnVAY6J%2BoHImdVqHxiceyKv8DCBUQABoMNjM3NDIzMTgzODA1IgzkZfs7eeF4HrHO9vwq3ANk6sMfosDKRi3wG%2F6DHn%2FHDbiDUVQpMkGLBdtih3lo4JtsBnZg0Q4PcsAfKYC07IlVA35inqGAb34r4KNQ7Hyc3QkQvtLu4ZMlhpMLDT%2FVrcGyCxBcsU8ojrZ8iAstFTFSRIw4TUfkyZeqkXgORQ9Cg5%2FQDhMwdl69uuhSJKrz71eR2JbIoTAkud2CPn3%2FRlpRod8VTeC4n5vCet2oQB%2FKOJuNruAOKUgEvk6eR1wAiJ5M%2FM1JMRmRreEgRcwud8rsFaJpd%2FbONBINAek%2BiuU0zw5gdwqn%2FHZdGcf6pfwPFk9bFT3kLE1XK2wJin%2BsaqwweIWybzECStGjxPKPMHGKqdbpdVrVSQ%2F4214z4qL73SpJg1%2B4tqtZ0W5XnM94SE7CI2oYRKDhhteGX675QK4pr9q57Y0%2Bp77kA%2BrZqI5WiBOLhaPd%2FZoadrRYiiv8RpfdfRz8WzXXS%2F675q9TFPAhRqQHFVN4yZcuMU5lxDhTH5kUw7liHliJN2UnU6fek25mgzUeJZiQ77jgjIIkdKRn1HZxPYRtSLHnVyuq1vZk5jA9K%2BviHhyMdg82ODvDlupu%2F8qzCKRYqgJcmcQwJIHcPMBhhiBB8ARsHM6x5Zwa8BfcWVWQwgwooGNoQTDd9KC%2BBjqkATwg7FnGlkPdYinYJN5V%2FcBySTLzCbVkdMXyg0oVATUWDlhU%2BP2qKt9AzwhG4577ZFNZONNuyHGEhyxapISuWQOZ2KVtGLr0dAuHg%2FNirfVZ7n2ore27Gg%2Fei%2BWdoYUWdSbILRSuTcqDSLyt5607298LUycHVL%2BDWLCFU3DabHMt3%2BAvui6DRr6RiuFd%2BzYTh6LCSBT9U6RzoibvBspD472g77qV&X-Amz-Signature=006b81dd04dc136763ee51d4765106c17f2e1c9706514833568fdb0ddbcdc27f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
