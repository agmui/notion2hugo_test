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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWY5LV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp8zqXx3UJUFMTQUIj30Kqgth4%2FBJHlGFQGMi5UCQr%2FgIhANHIM8u46VoP1y6tYTcJ4bAdp6SZoKtiPO4AObAe73ICKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh8xnT9xIU%2BVqFJQgq3ANHGIs7xqJTWlqUoPBV2hZ%2B7xhebudRI5%2FwEoCL2Pii0junljOEYXT3fbfjzJqJMKLtkrZcpA7EGivnfl6UdSNmPm2G5SPBjBzOJ%2B4TSdaFNQwHTkg6PPR80nMQ5cmcFt102DLAN0heWBA0W1tYPQpbOK9G41PQmr5mcPxsJyzNCNYm5waulO5lJsTJrrc66rhY9mzENi21S8sYMjQhMMENPdvRDBbnll66iRbDOStu%2FIT3ZqDcleE1qpgJ10S8IXUcjZUYIovZc2FBQQj23Qqjj3DFy25wB1RN6qGVLDAWU6dShF%2Fx1Xx%2FkRMLGvXDESZzZ9wx7x30yo5G3Q2KyRnrciNR%2BNCt1A3MPYIAn9U7g8H3TUL%2BFwx8jbf5t7YFaEM7cHqcnlwKRMM2YDfxVROtLepXfRPX%2Fe%2FX9VIm%2BAky1Lie1T2UXTSVIDULOfrq9vnWTLKS3EeSnmLbGQqb2a%2BeniCw3mZKVzb91EY44%2FPherkq4Hh8oq1QLjAMO2TBfMK7JC1EVjtYnYdEpqM4TbFS7pvVSyHD7w5opyUY4TId27GdYhqEvezm7FFg1V1ydT61sAq%2FjxRh0xOOm7JmaDJsWZJBa3tA%2Bv9rUtTtcpTa8tMQwQ8dyvoaocOEyTC1yrfDBjqkAWjwa7PFfUvV3EVnqZzG%2FC9KO%2BwjnXU1biCw68Yzeouoc1TEFte%2BFbjm0BCjoZzdJRaoZhQLuBArfj%2FnNUKMkG5CcG4irr%2BBti09S5vNa53mwtimbI%2FFrwjSPDLYfXeO60xqnh7IyFuvt141ukQnr9mkqJEDxXA4k1uz%2F1EneHuX%2F09JXuSmBhv0EoSNcKJxMDaO1Z67VU%2FGX1Am5Bd2qqVE1mq2&X-Amz-Signature=38546156809ea56783fc4b004eda6625957f4598d52d4d563aed0ce34d695bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWY5LV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp8zqXx3UJUFMTQUIj30Kqgth4%2FBJHlGFQGMi5UCQr%2FgIhANHIM8u46VoP1y6tYTcJ4bAdp6SZoKtiPO4AObAe73ICKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh8xnT9xIU%2BVqFJQgq3ANHGIs7xqJTWlqUoPBV2hZ%2B7xhebudRI5%2FwEoCL2Pii0junljOEYXT3fbfjzJqJMKLtkrZcpA7EGivnfl6UdSNmPm2G5SPBjBzOJ%2B4TSdaFNQwHTkg6PPR80nMQ5cmcFt102DLAN0heWBA0W1tYPQpbOK9G41PQmr5mcPxsJyzNCNYm5waulO5lJsTJrrc66rhY9mzENi21S8sYMjQhMMENPdvRDBbnll66iRbDOStu%2FIT3ZqDcleE1qpgJ10S8IXUcjZUYIovZc2FBQQj23Qqjj3DFy25wB1RN6qGVLDAWU6dShF%2Fx1Xx%2FkRMLGvXDESZzZ9wx7x30yo5G3Q2KyRnrciNR%2BNCt1A3MPYIAn9U7g8H3TUL%2BFwx8jbf5t7YFaEM7cHqcnlwKRMM2YDfxVROtLepXfRPX%2Fe%2FX9VIm%2BAky1Lie1T2UXTSVIDULOfrq9vnWTLKS3EeSnmLbGQqb2a%2BeniCw3mZKVzb91EY44%2FPherkq4Hh8oq1QLjAMO2TBfMK7JC1EVjtYnYdEpqM4TbFS7pvVSyHD7w5opyUY4TId27GdYhqEvezm7FFg1V1ydT61sAq%2FjxRh0xOOm7JmaDJsWZJBa3tA%2Bv9rUtTtcpTa8tMQwQ8dyvoaocOEyTC1yrfDBjqkAWjwa7PFfUvV3EVnqZzG%2FC9KO%2BwjnXU1biCw68Yzeouoc1TEFte%2BFbjm0BCjoZzdJRaoZhQLuBArfj%2FnNUKMkG5CcG4irr%2BBti09S5vNa53mwtimbI%2FFrwjSPDLYfXeO60xqnh7IyFuvt141ukQnr9mkqJEDxXA4k1uz%2F1EneHuX%2F09JXuSmBhv0EoSNcKJxMDaO1Z67VU%2FGX1Am5Bd2qqVE1mq2&X-Amz-Signature=bfae6c33dc73de01f7e99d1ba1627624759a4527d19f78a19743a2f394eabad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
