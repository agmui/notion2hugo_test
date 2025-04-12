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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWG52NT%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFhem5oqAn7Zs3ib0FlzMFkdbcG8wg3jLjIrDWgSSj%2FXAiEA0zsjNSWUPXlTLYebFwNqFfdHYocl%2FoZaesvUN83aaM0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FmTeXRSu26oBc9oSrcA0xotsVfId1IdEMaCY16bnRD0HgVtQFqH6qvtxbTxM5Y3lmk6BRKQyzc9PCQyxA3FHT9j3vJVBADJBMas3X7lmJAMKBcJPMRccxqhBGlH%2B8MF1S19A00IyZ6ErVskGkGGbefb3Zy6sbN%2FLA%2Bz3fXq2YR37uqsicYyJMp09To76ZQWNG1dGQlA%2BhlEQQDlwpX%2BO5gNp8AVfMpBIW%2FscBsBvxk4T391RL8M3URqf2ClJZYrl0wZ%2Bcnj6JDxIlNd4eryp%2FyRQQZxxaU6C5gdjrlnJUAS%2BR7GKvW%2FgNO946bvWRMNjg%2FNX2BU1xVKhomnbmQj0zd3qDoCwVBoD65%2FzKqN1J3oQ9VEsfkLyRGvM5tt%2BTJufuYHsp9ACg42nUDZx9pe7oSQbt9GIxMviEEub5zg6LlXA%2F8MG%2BcY7aeEg9QsWFg0MCCc0wObyo6xMy5sWXknWb%2BCSM4CJrrJkU68G2sOD1KbWw7GQmfP8qD7gGSSmhLe8qULJaPvjS4LJta7CzXvTmvAUDdm1xeJ74AuJpDOFKS1QQuGNxf3%2BDtz5BgW3AyJ2lqrhrDAHr9jSJ4wSiAuxDCxrtcb0XzCITEV6nN%2B2H58B50KfzZ6Ey4uL4rF3DYRJk94AYEu4yxFLhiML3s578GOqUB4xDVPqMpAotef8vSMOaqURLYZqtr1n6JzCysxHQnIoBq9wgOuYQ%2F5lZo5hJZdaTvNRh1zG%2FsSgzBYg3fnD%2BpcvGDdurinecmqPqAOdUotxr%2Fuax%2F8TBXvr92ree%2B6wWylBSz3Ccvfkn625oFVMUuk8p6GAQid2zZaEGevfusAn2%2BXOPduN2eE%2FttpGhtT1Yk0mXP3rcrUf2H5zsblwntMPD9AqX1&X-Amz-Signature=8328cc9fc1119f9c2fc91bfcef0bb71ff0239f0832105944d9523b20156a35d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWG52NT%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFhem5oqAn7Zs3ib0FlzMFkdbcG8wg3jLjIrDWgSSj%2FXAiEA0zsjNSWUPXlTLYebFwNqFfdHYocl%2FoZaesvUN83aaM0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FmTeXRSu26oBc9oSrcA0xotsVfId1IdEMaCY16bnRD0HgVtQFqH6qvtxbTxM5Y3lmk6BRKQyzc9PCQyxA3FHT9j3vJVBADJBMas3X7lmJAMKBcJPMRccxqhBGlH%2B8MF1S19A00IyZ6ErVskGkGGbefb3Zy6sbN%2FLA%2Bz3fXq2YR37uqsicYyJMp09To76ZQWNG1dGQlA%2BhlEQQDlwpX%2BO5gNp8AVfMpBIW%2FscBsBvxk4T391RL8M3URqf2ClJZYrl0wZ%2Bcnj6JDxIlNd4eryp%2FyRQQZxxaU6C5gdjrlnJUAS%2BR7GKvW%2FgNO946bvWRMNjg%2FNX2BU1xVKhomnbmQj0zd3qDoCwVBoD65%2FzKqN1J3oQ9VEsfkLyRGvM5tt%2BTJufuYHsp9ACg42nUDZx9pe7oSQbt9GIxMviEEub5zg6LlXA%2F8MG%2BcY7aeEg9QsWFg0MCCc0wObyo6xMy5sWXknWb%2BCSM4CJrrJkU68G2sOD1KbWw7GQmfP8qD7gGSSmhLe8qULJaPvjS4LJta7CzXvTmvAUDdm1xeJ74AuJpDOFKS1QQuGNxf3%2BDtz5BgW3AyJ2lqrhrDAHr9jSJ4wSiAuxDCxrtcb0XzCITEV6nN%2B2H58B50KfzZ6Ey4uL4rF3DYRJk94AYEu4yxFLhiML3s578GOqUB4xDVPqMpAotef8vSMOaqURLYZqtr1n6JzCysxHQnIoBq9wgOuYQ%2F5lZo5hJZdaTvNRh1zG%2FsSgzBYg3fnD%2BpcvGDdurinecmqPqAOdUotxr%2Fuax%2F8TBXvr92ree%2B6wWylBSz3Ccvfkn625oFVMUuk8p6GAQid2zZaEGevfusAn2%2BXOPduN2eE%2FttpGhtT1Yk0mXP3rcrUf2H5zsblwntMPD9AqX1&X-Amz-Signature=7466aa6a0ec9db4b1676c8c1a89814dcd1b89e4cd1a0ef351a957d01f53bcca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
