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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IX34TZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCN7mUF7Ke4qA9vrtmJo7jMdU8JAdhIQEF%2Fzzjx%2BUi6twIhAI7Nrlqm%2BYow5YUqeBSJ7e89Q14g2v%2FRKH%2FkuKbBkAtLKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOX3YQKhZK5PQH9LMq3ANmFpfXcvCCeCZqQJ7qbHs1znGs4xpjGRQlJrkZhAauB1ER7l57Vj8cKwLyO5Nm6BE2PaMiau5%2BKt%2FNECN1UbHj9TKFNQ9gbTBlO6jDcYk%2B8IYKhQy8Q0sv%2BLQgte47ZPz%2FkHlur%2B88Vp%2BxeuOz5QXeIyZr%2BLljegNV7Y5dNfNStkyP9B2h1dWM6%2F%2BKazQ%2BuMX0Mm%2Bf%2BX%2BkO88eS2XiLQED5nFdHIm9%2FrFbES%2BqRZhnqlDwdyz9FKhFk6n6ds79bEUVk2sofGnLwTMDSAYPzgVP76odwtj3GkhB2DJpKLZ5MLGp7%2BpvGY5GBwzkR9a0DL6WcyKWNm8LgdCp7uK4SpJsN7HVmy2c21cQNyDHKEVaXYl%2Fq%2Fgo9BgjdRhTKLmpwUXe4Ar6zDvePhES%2BibKhaZ45R29Kgsev1%2Foyq0Xe94K8l98%2BFSrjvw1Nj7SpWWKv12oeTkne136Eqo33muaFlPKYTeNQ991mBzDsB2wb%2FPzyg4AGj3Mws5NB1WXNHghj6tqlnzSGngiuDaBCScXqrXvbxSY3eSp%2FSxOBQGS7efAxZHvSMxN3wDn%2BihvtEL1jT6TmkzmK7cmOu3dx%2F4Gm5%2FO88eKjpJtI0tuctyh6MQb3pM%2FyvgPJG%2Bovu%2FOGzDsy6DEBjqkAWvvWBQDDGTwH2TfbXBgGMtc1MXfqINCDGAtswzxpLrbgcH6Fs5RBbkbXXueWDZOdZsGfoIBBn7aOsWZFz4%2FhYH6Wa4QP3DpN6%2FA4xObjNV%2F6M8aDrAZpU%2FTumONSjyiV26A2zF6RjhWJkR22X%2FzNEyg3ish%2FhgLi32w2yQHikFGaBEllv%2FoWgs8jMpe9iCMSCPsPD85uVcT%2FHvkDa2yFVDNYzFg&X-Amz-Signature=1c3f99a4cd2f80678361260a4426be8bacd95d7ffec637529c5179a95cbe1031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IX34TZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCN7mUF7Ke4qA9vrtmJo7jMdU8JAdhIQEF%2Fzzjx%2BUi6twIhAI7Nrlqm%2BYow5YUqeBSJ7e89Q14g2v%2FRKH%2FkuKbBkAtLKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOX3YQKhZK5PQH9LMq3ANmFpfXcvCCeCZqQJ7qbHs1znGs4xpjGRQlJrkZhAauB1ER7l57Vj8cKwLyO5Nm6BE2PaMiau5%2BKt%2FNECN1UbHj9TKFNQ9gbTBlO6jDcYk%2B8IYKhQy8Q0sv%2BLQgte47ZPz%2FkHlur%2B88Vp%2BxeuOz5QXeIyZr%2BLljegNV7Y5dNfNStkyP9B2h1dWM6%2F%2BKazQ%2BuMX0Mm%2Bf%2BX%2BkO88eS2XiLQED5nFdHIm9%2FrFbES%2BqRZhnqlDwdyz9FKhFk6n6ds79bEUVk2sofGnLwTMDSAYPzgVP76odwtj3GkhB2DJpKLZ5MLGp7%2BpvGY5GBwzkR9a0DL6WcyKWNm8LgdCp7uK4SpJsN7HVmy2c21cQNyDHKEVaXYl%2Fq%2Fgo9BgjdRhTKLmpwUXe4Ar6zDvePhES%2BibKhaZ45R29Kgsev1%2Foyq0Xe94K8l98%2BFSrjvw1Nj7SpWWKv12oeTkne136Eqo33muaFlPKYTeNQ991mBzDsB2wb%2FPzyg4AGj3Mws5NB1WXNHghj6tqlnzSGngiuDaBCScXqrXvbxSY3eSp%2FSxOBQGS7efAxZHvSMxN3wDn%2BihvtEL1jT6TmkzmK7cmOu3dx%2F4Gm5%2FO88eKjpJtI0tuctyh6MQb3pM%2FyvgPJG%2Bovu%2FOGzDsy6DEBjqkAWvvWBQDDGTwH2TfbXBgGMtc1MXfqINCDGAtswzxpLrbgcH6Fs5RBbkbXXueWDZOdZsGfoIBBn7aOsWZFz4%2FhYH6Wa4QP3DpN6%2FA4xObjNV%2F6M8aDrAZpU%2FTumONSjyiV26A2zF6RjhWJkR22X%2FzNEyg3ish%2FhgLi32w2yQHikFGaBEllv%2FoWgs8jMpe9iCMSCPsPD85uVcT%2FHvkDa2yFVDNYzFg&X-Amz-Signature=ab3001fe5258fbe3107599ba1f0cb08b9592b9e19d9ed638563ac1067a34b35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
