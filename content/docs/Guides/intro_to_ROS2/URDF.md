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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4HVWBW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIA6pV6DPXcCe8Yk4J0kLwJRyDME1xaO8ERBTiSvE73pnAiAJRdFrqYXfICG7AAMTrDCs89BQmuhfaJPiuqKb4ktFdSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSaVMBaADfzkYHHawKtwDf3iyN%2FKXTfjJs0uigLPyO1YwLuhyJ5dpccellE2K0eYiGfhFyh56C2f5P%2FQAqppRVjve7sMjn9Z0z%2BaNW3qtvWXnLHq8FLjwQzkHyocVqfLLa5fFhTPJ1DsAvcJOLUTD811hs7EGjftuxS%2BH3UF5tcJv29uRWkhLqzssiJSHuaMoIBPiNGL08YOLQ%2BPSefls2o%2FWr1vAKdzjWxtvMHe4wx5oJ5sdR6jIk1%2FAMjbu8BPEDemhArCiSIQoXUiEY4dCd0jmha1qPfdDCha%2BranqS%2B3VwJcORalV%2Fht95pWeVY0VV7FvAlVXmKtTKt5pQ%2BsCdqQrrj8ItBhDLKZZ7Z8nvtwtxBaJ5Kplrpe8hjBsUlW7sxbcBb9M8cTr4o6YuTvaYSjQyvQKFmHKxjKmUWGJZ2eqVLTYsrWq%2BputGJ0XKey%2B5LIO8ynwty0QTCbCUjJQ9d%2FJd%2BMmk1rKCWlorOKGQ5D4FSZdWYaUKpq3747eQGN%2BEB7MiIctd%2F1lT5wrYJ3wT8i7u3qLhL7kRKN266Xx96uisNGDX8w6JNGiPajWwHUCV%2FWkFKch5OLXv3sF4lkpuXElR%2FM3LGfwo8l8%2FyRYbXfu8plPtA8oDbdpcmBcB9XfvpshrtW4v35WafMw85LXxAY6pgFMfPpCieHrbTGDxziT4vEXPtI0gZwtQesj41kjn%2BgOsM6h7l%2FdYUUgaRofLJFnBtnZeRAGvqYWrAP4vwDPS%2FXcg52OrslgoTkUrrk%2BxLBCn97RVnnn1E3oMxum88Of9Cohu6zWDmCtNP7RrFywQRbThSqX%2FsZzp5AAbdMKKLoe3mskdT%2FaEE7tVnJ0x1uFS6FiUh%2F7WChakPQWD0AQWT1ukBVtue3k&X-Amz-Signature=d8cc50a3271273bf9c9f452286d23d3a204d30eab51e18c046dde0b268e97740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4HVWBW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIA6pV6DPXcCe8Yk4J0kLwJRyDME1xaO8ERBTiSvE73pnAiAJRdFrqYXfICG7AAMTrDCs89BQmuhfaJPiuqKb4ktFdSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSaVMBaADfzkYHHawKtwDf3iyN%2FKXTfjJs0uigLPyO1YwLuhyJ5dpccellE2K0eYiGfhFyh56C2f5P%2FQAqppRVjve7sMjn9Z0z%2BaNW3qtvWXnLHq8FLjwQzkHyocVqfLLa5fFhTPJ1DsAvcJOLUTD811hs7EGjftuxS%2BH3UF5tcJv29uRWkhLqzssiJSHuaMoIBPiNGL08YOLQ%2BPSefls2o%2FWr1vAKdzjWxtvMHe4wx5oJ5sdR6jIk1%2FAMjbu8BPEDemhArCiSIQoXUiEY4dCd0jmha1qPfdDCha%2BranqS%2B3VwJcORalV%2Fht95pWeVY0VV7FvAlVXmKtTKt5pQ%2BsCdqQrrj8ItBhDLKZZ7Z8nvtwtxBaJ5Kplrpe8hjBsUlW7sxbcBb9M8cTr4o6YuTvaYSjQyvQKFmHKxjKmUWGJZ2eqVLTYsrWq%2BputGJ0XKey%2B5LIO8ynwty0QTCbCUjJQ9d%2FJd%2BMmk1rKCWlorOKGQ5D4FSZdWYaUKpq3747eQGN%2BEB7MiIctd%2F1lT5wrYJ3wT8i7u3qLhL7kRKN266Xx96uisNGDX8w6JNGiPajWwHUCV%2FWkFKch5OLXv3sF4lkpuXElR%2FM3LGfwo8l8%2FyRYbXfu8plPtA8oDbdpcmBcB9XfvpshrtW4v35WafMw85LXxAY6pgFMfPpCieHrbTGDxziT4vEXPtI0gZwtQesj41kjn%2BgOsM6h7l%2FdYUUgaRofLJFnBtnZeRAGvqYWrAP4vwDPS%2FXcg52OrslgoTkUrrk%2BxLBCn97RVnnn1E3oMxum88Of9Cohu6zWDmCtNP7RrFywQRbThSqX%2FsZzp5AAbdMKKLoe3mskdT%2FaEE7tVnJ0x1uFS6FiUh%2F7WChakPQWD0AQWT1ukBVtue3k&X-Amz-Signature=694d1dd290b6bbc90d3c7aef648723004f285c7d6f3b8d18899fc9238b680a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
