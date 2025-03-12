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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBIB7TE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDlow4DyTuqVnnzFl%2B8tuIElqMLWmL8WbPl1jUAA7ZNlwIgOzdvWzBijyvjtixiSXZJbFkiuCaz9PZJsr0YDu1K2scqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYnfE5bMBe9gtJ3MircA5%2BGOaIdGFJRHCl92TTHJ4p2w9GDo9jxBkl1zl1yeot4ZVHRALUvm81rt%2FoYpO3mS6qXZ5MQyROqbwHbB9P6l9gjfrW5ZXbWZMsABG5yyfHibmiCjhXImoKpdIheVM9ez2gMpjdvwmVlSa7xOKvqXFdyn8vw6U5Dc56QZBNknFS0NmMHdmvMRoZAM46WJFXvsu%2BGjN%2FYS%2BfUFYsfOIb%2FadkpS%2BhXefMl9xOqM8MdpUNUc9u%2F5s3E2AlRydC8O%2BOMhXEpJixAS9vIzf1LU97JRgeTykTx1VxRLbAhdJND8lv5tmy9sk%2FWNZNZzd1lBTp3AapnpwaZpvC%2FQpy7gsgkRPKAkh8jOr1TaVsDJ29Xl0Y8enHckPSkHsgeBYkzuSQL5FXJ3jjjNCrKmKha%2BxYneM0DmA05iqGFde%2BnRaLVVCrF%2BCxf5HGLVe8xf%2F%2F53%2FRPKRwU1CCVNjOTCweSsv%2Fuu5qWmaJQIKGwH4pvBUs0MPQFMGvdkwtViMavC9T%2FpTbEY5I3OxyoPvknBExtD%2BZrtNukaolXUBzPB1hY3IsKd0hTsW1yeW8cBHEtq4W%2B0BvUCTBvfNpwgEf25FQbRcpPgtrqc0RV83IhLXWkyfxeMRg0%2BNDcqD2ERNgueM%2BVMJngxr4GOqUBHFpRUH0s85UNwxQGhV7U2YRHPuJDjrCIvV73nXBjI81gMrcMssLvAv7pvejo5wrHSrBumMGe9vGxGHAxMIdY18Bf9fZA6YteTNZQ8Nsaya8SUir7HQZavVxzOY0tzgtZ0Xzv%2BLSBGp3XXAiD8my7gxFCRLJAyvduBFtvryAdZiQIv9rFHPOgC65azNv8m79WMmhVbEe5XLGqEyR4dLwdpCAGILh7&X-Amz-Signature=b52414e602cb0d209ba37664207595d145eab3c7c442b25160d98410f24290a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBIB7TE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDlow4DyTuqVnnzFl%2B8tuIElqMLWmL8WbPl1jUAA7ZNlwIgOzdvWzBijyvjtixiSXZJbFkiuCaz9PZJsr0YDu1K2scqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYnfE5bMBe9gtJ3MircA5%2BGOaIdGFJRHCl92TTHJ4p2w9GDo9jxBkl1zl1yeot4ZVHRALUvm81rt%2FoYpO3mS6qXZ5MQyROqbwHbB9P6l9gjfrW5ZXbWZMsABG5yyfHibmiCjhXImoKpdIheVM9ez2gMpjdvwmVlSa7xOKvqXFdyn8vw6U5Dc56QZBNknFS0NmMHdmvMRoZAM46WJFXvsu%2BGjN%2FYS%2BfUFYsfOIb%2FadkpS%2BhXefMl9xOqM8MdpUNUc9u%2F5s3E2AlRydC8O%2BOMhXEpJixAS9vIzf1LU97JRgeTykTx1VxRLbAhdJND8lv5tmy9sk%2FWNZNZzd1lBTp3AapnpwaZpvC%2FQpy7gsgkRPKAkh8jOr1TaVsDJ29Xl0Y8enHckPSkHsgeBYkzuSQL5FXJ3jjjNCrKmKha%2BxYneM0DmA05iqGFde%2BnRaLVVCrF%2BCxf5HGLVe8xf%2F%2F53%2FRPKRwU1CCVNjOTCweSsv%2Fuu5qWmaJQIKGwH4pvBUs0MPQFMGvdkwtViMavC9T%2FpTbEY5I3OxyoPvknBExtD%2BZrtNukaolXUBzPB1hY3IsKd0hTsW1yeW8cBHEtq4W%2B0BvUCTBvfNpwgEf25FQbRcpPgtrqc0RV83IhLXWkyfxeMRg0%2BNDcqD2ERNgueM%2BVMJngxr4GOqUBHFpRUH0s85UNwxQGhV7U2YRHPuJDjrCIvV73nXBjI81gMrcMssLvAv7pvejo5wrHSrBumMGe9vGxGHAxMIdY18Bf9fZA6YteTNZQ8Nsaya8SUir7HQZavVxzOY0tzgtZ0Xzv%2BLSBGp3XXAiD8my7gxFCRLJAyvduBFtvryAdZiQIv9rFHPOgC65azNv8m79WMmhVbEe5XLGqEyR4dLwdpCAGILh7&X-Amz-Signature=2956aea3a539208ccd602d3b55fc92d755d88e2d0819a2839e227649025e0839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
