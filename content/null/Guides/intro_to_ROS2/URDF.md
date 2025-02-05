---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4L7Y2G%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG7WD0zqcJK32V2T4YZ%2Fv1b47YfRhr4IjuEmK0%2Br5pnYAiAlkjY1ieHc1SFZzBqISwVDu2YMeV1v0jLqfpjLhInS0ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM778v4QXa%2F2HNj%2FWwKtwDQHTIHEOEwxksdSR%2Fa1AL2ie9halCObuAxnOLSa81kZ5aYWE%2BGaXi1i2wOfAPKVF7%2FS4%2BUBLs9wE3GYYY0cLyUgrcfU5t9yFYPleEYViTdaVwBZXDtFKeY6RU02Dmv99ZLudZcrtFdvCc95yM1quUCB6ApqfbcEIyBVhClGG1TxXa%2FidOCiY%2F4uMGp4%2FtActx%2BqcFEg%2FruTLl3wufDzs1Gkd6yk1odErVs%2ByWTg8PfKsyENXOBNskRAOtV2XmkyVpdT497Yg%2BdZjEewD3hx6Laehux5uenGvBJCN9OxKt88uqsHYvL06aLwSCMAcb2qKLE%2F1HU8MyKdVDY9aGaLw%2BK58%2BXBO3PyZTys%2B42tVdJ1IzmaKQ4OaIWrdfkfKJEbX%2FseJ6QBt0lI0mTd3JatwaDTcmGGi9B1vBZjaMwRf%2Bn47ugehI87sCyhzQx3s6PYeUn09EMj9LGrX%2BatYTXCSlcLTH%2F9P9amaJYS2t5h8wT%2FtvH13rmoIW7WoYMs721GKsiOhJ9Wtf7q3seFhe2GwDDk3Knia%2FWDJoYZFE90EXNJu3jEVG5ecYJjYSxTS4sHdQUw%2BthgnQz7heiWgYRkHyuUcImu4muxxeeqqtj71IYMeUujwhFhoFRvf9f8Iw6M%2BKvQY6pgGeMf14oV83yIyVbHuLkeEc8E9zsCRI0Nlf0WF%2BJ289nJM01XGSN9rWkus6w5SO%2B7AGDJz7%2F9IX2XWYlk6yxfoCxQid8QrbKvO3phw7adOwCuMqtsSmGZ4uUY8A5im8PQUywf4qhXwBYOhr2Zen2UDmDiVV%2FEMO5%2FF%2Bqf8DhnBRjgMxj9sv8QVEF36gZUJ3IEVThFxuVWR6K7vYFMQso2KxZvbeh0cX&X-Amz-Signature=3fa63c1647217fda6fa99d4d4cbfc25a328b4e9382f808f1083e5cbb7f76f9af&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4L7Y2G%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG7WD0zqcJK32V2T4YZ%2Fv1b47YfRhr4IjuEmK0%2Br5pnYAiAlkjY1ieHc1SFZzBqISwVDu2YMeV1v0jLqfpjLhInS0ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM778v4QXa%2F2HNj%2FWwKtwDQHTIHEOEwxksdSR%2Fa1AL2ie9halCObuAxnOLSa81kZ5aYWE%2BGaXi1i2wOfAPKVF7%2FS4%2BUBLs9wE3GYYY0cLyUgrcfU5t9yFYPleEYViTdaVwBZXDtFKeY6RU02Dmv99ZLudZcrtFdvCc95yM1quUCB6ApqfbcEIyBVhClGG1TxXa%2FidOCiY%2F4uMGp4%2FtActx%2BqcFEg%2FruTLl3wufDzs1Gkd6yk1odErVs%2ByWTg8PfKsyENXOBNskRAOtV2XmkyVpdT497Yg%2BdZjEewD3hx6Laehux5uenGvBJCN9OxKt88uqsHYvL06aLwSCMAcb2qKLE%2F1HU8MyKdVDY9aGaLw%2BK58%2BXBO3PyZTys%2B42tVdJ1IzmaKQ4OaIWrdfkfKJEbX%2FseJ6QBt0lI0mTd3JatwaDTcmGGi9B1vBZjaMwRf%2Bn47ugehI87sCyhzQx3s6PYeUn09EMj9LGrX%2BatYTXCSlcLTH%2F9P9amaJYS2t5h8wT%2FtvH13rmoIW7WoYMs721GKsiOhJ9Wtf7q3seFhe2GwDDk3Knia%2FWDJoYZFE90EXNJu3jEVG5ecYJjYSxTS4sHdQUw%2BthgnQz7heiWgYRkHyuUcImu4muxxeeqqtj71IYMeUujwhFhoFRvf9f8Iw6M%2BKvQY6pgGeMf14oV83yIyVbHuLkeEc8E9zsCRI0Nlf0WF%2BJ289nJM01XGSN9rWkus6w5SO%2B7AGDJz7%2F9IX2XWYlk6yxfoCxQid8QrbKvO3phw7adOwCuMqtsSmGZ4uUY8A5im8PQUywf4qhXwBYOhr2Zen2UDmDiVV%2FEMO5%2FF%2Bqf8DhnBRjgMxj9sv8QVEF36gZUJ3IEVThFxuVWR6K7vYFMQso2KxZvbeh0cX&X-Amz-Signature=02a22698364502bc27c0d0a19fcc0a8cef77c690e92d3e6cc505a9a089511831&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
