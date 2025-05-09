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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5JCOFH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO7nnO1C1rUSYhYE9UVGwXtDWjPyBKA87sMhb1MlSlkAiEAqZnDa6OL874d5T70t07L9Tp9Uk2pRRhPnw4nn5JrJP8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Bx2EpoDw0O3F6xeyrcA%2F%2BvvXHL%2FR5%2FwNp3f2ceLHQCzXng07%2FJ2mt0ld98jRzG3vyj2rd1MUBVA0SSWfZNkkMFG6w6dLC%2BcZgg8JJheRhXEy8SBIafN0IFi1PNq8JlWwQd0rBBVcaFoQMQkmR%2B46KZOYGo01PyuY7jBw2%2F%2Bu1AKhq5EdP3nJKVSwMgC8PCWyUA5szKWvxJjgHlXv4qv123cx6CMNshz3Q7sgHsxCBQl6YEQgjEHT%2BPtLy%2Fx6FE%2F4lmLgqD0y4q6d2Zfnj4OulWjc%2BSCsaQYSbCXoSZXkxqgu8PzM18FNLyxDnrTJnvTMlNiqImnl8k77D9%2BL%2FlMGgrX1WzjGw0983atgaiKDoV16AUhoNVe26UB2FEBgSDPo1rpKSL2llos%2BLqnjfgUHV55FY5wZwz4dzsPyQux0t5UaLZlF38MBVDKagWwr9C80JioPzjUC%2BbaW9yw5HM8kk7IbDE5RHnObMlv%2Fv0nG2ZoAUnC0CWy18OKQoZUHcef8SdN2vPr41YBjjMmJQRnDYIg8RBYd1UTQo2NLtAZBttFMkfoZnn4tZ5HMYR3EqAddqPmBMWOJoDVQ5CPb1QQeftx7mzoLEEvNczxz7koBFo5BezGUnJcMRJQboH4gFsMIv9pNyVChCc858XMMGB%2BsAGOqUBVd8REWNKoYq4pjuVXM6UeHyFs6rXG84D5eIJTImXj2k67etYT8Bk511iNOExKBbQ4VtIuPwtrexm7cILMXWng3PyAr6nXdZL7Howuc77rL92LjcdsdGPVueJFmEmHZ4RNFNMW6pctvO8sb0cThoMs2iVI4GGCSOmnhxujFycR1Ev%2FGIks%2FRcDxF5MvzFDr56xh7m8XpN7RE91igQvubEXuMP2Tv7&X-Amz-Signature=94cf8ad0dcadedb61539921814701ec0d0542f0dca487fed5295c4f743d44a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5JCOFH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO7nnO1C1rUSYhYE9UVGwXtDWjPyBKA87sMhb1MlSlkAiEAqZnDa6OL874d5T70t07L9Tp9Uk2pRRhPnw4nn5JrJP8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Bx2EpoDw0O3F6xeyrcA%2F%2BvvXHL%2FR5%2FwNp3f2ceLHQCzXng07%2FJ2mt0ld98jRzG3vyj2rd1MUBVA0SSWfZNkkMFG6w6dLC%2BcZgg8JJheRhXEy8SBIafN0IFi1PNq8JlWwQd0rBBVcaFoQMQkmR%2B46KZOYGo01PyuY7jBw2%2F%2Bu1AKhq5EdP3nJKVSwMgC8PCWyUA5szKWvxJjgHlXv4qv123cx6CMNshz3Q7sgHsxCBQl6YEQgjEHT%2BPtLy%2Fx6FE%2F4lmLgqD0y4q6d2Zfnj4OulWjc%2BSCsaQYSbCXoSZXkxqgu8PzM18FNLyxDnrTJnvTMlNiqImnl8k77D9%2BL%2FlMGgrX1WzjGw0983atgaiKDoV16AUhoNVe26UB2FEBgSDPo1rpKSL2llos%2BLqnjfgUHV55FY5wZwz4dzsPyQux0t5UaLZlF38MBVDKagWwr9C80JioPzjUC%2BbaW9yw5HM8kk7IbDE5RHnObMlv%2Fv0nG2ZoAUnC0CWy18OKQoZUHcef8SdN2vPr41YBjjMmJQRnDYIg8RBYd1UTQo2NLtAZBttFMkfoZnn4tZ5HMYR3EqAddqPmBMWOJoDVQ5CPb1QQeftx7mzoLEEvNczxz7koBFo5BezGUnJcMRJQboH4gFsMIv9pNyVChCc858XMMGB%2BsAGOqUBVd8REWNKoYq4pjuVXM6UeHyFs6rXG84D5eIJTImXj2k67etYT8Bk511iNOExKBbQ4VtIuPwtrexm7cILMXWng3PyAr6nXdZL7Howuc77rL92LjcdsdGPVueJFmEmHZ4RNFNMW6pctvO8sb0cThoMs2iVI4GGCSOmnhxujFycR1Ev%2FGIks%2FRcDxF5MvzFDr56xh7m8XpN7RE91igQvubEXuMP2Tv7&X-Amz-Signature=069cc0641dee8864e0c9768df1c968ab0c3952967f5c17f3a197446fa48940de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
