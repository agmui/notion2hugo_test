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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RU4ZTKB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNa2y7WHWbgr0UcFAw1JQ03NWTuTTJoyIIOh8Amlb2pAiEA5qC0NCnMwXEna225qBHfeVIrWEmkaFk8%2F4sUdl8dWtIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMGhtC8MQNtPKjlyrcA9eysNZxbBGKIvghEpdyWpXsBAZQEFjD2qWSXUtGRz2SSqRbLhRpKunvcQI5Grj%2BHzfZyiA3ABKvMuRwB3dWSZ0rxEqNRmUnMwNkiedcTL6Np8dPhMNA8BPlGhgF2eGrnLt9ucCzM18qn568ftzU1vpjF7dFz8EjC6DUoZbSCXec%2F02hamsqHYhcl43sLqmSK42%2B8U6zPJByQfg2IRDFlK4xCytaZrARcJ4S4IyYkK%2BZQyj%2Fc2QvOyXKI%2BHWDDo93DQq83c1Y3QL8lhj7iD8cbRRDOpyqeekH5iLQIDv8daUmSSu77Lb8T%2BDOcI5SLtQhYi5o%2FMbRd2BjbkZg2KfdL0QFnnrq0G3wrHM0APz9AQ0rSVdsMP5pQgh2zMsD2%2BW4Ornb1hRtNxA3ZssMUioNJz1utd3LTokia7zKg0NpWmUr3I06DlwL8xlpFrCuhbVZX8vWDlkTiWmaSUhKCIHjpvVFLKD9KEQl8a7SpHPAOCyc7etlmEucS9qbfqc0ZIHkUJtSAV%2FQRfd0NY8cRQxXhkS2mimHXsgxgz2MlfiubVTDQV6BYWYBTZ2onJwcSqXpdIDq4PAJRYKng2QM57xfmX%2B%2FVU4qn4KquGtxxKPpiDp6RuZEZZonS%2B64OuwMMbO9bwGOqUBXfWD5KLDLH07Vr7Fk1UMKOzKFwlOgxWIWhaN7NUA32XsMFMgm6NLLtc16MjMpSu2EeY3b8%2B1asu9YecpYBTmE23VO33sBGqrdDeVKe21G1P2l5lSNgGZQAHvveQY3%2Bx61adr7IYXKdRpEAGw0fJZFKkFVUL19Kl7B7q7PBuFgH14hDJMBGFDSM6PQ88fZj4Ov6EYF4wqpUqTwhlzvSi0s9UZTzYK&X-Amz-Signature=87345ab9e0dbc31dd06ec43c3124e603694e2bed3a6b42d37994c4f03d1280fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RU4ZTKB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNa2y7WHWbgr0UcFAw1JQ03NWTuTTJoyIIOh8Amlb2pAiEA5qC0NCnMwXEna225qBHfeVIrWEmkaFk8%2F4sUdl8dWtIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMGhtC8MQNtPKjlyrcA9eysNZxbBGKIvghEpdyWpXsBAZQEFjD2qWSXUtGRz2SSqRbLhRpKunvcQI5Grj%2BHzfZyiA3ABKvMuRwB3dWSZ0rxEqNRmUnMwNkiedcTL6Np8dPhMNA8BPlGhgF2eGrnLt9ucCzM18qn568ftzU1vpjF7dFz8EjC6DUoZbSCXec%2F02hamsqHYhcl43sLqmSK42%2B8U6zPJByQfg2IRDFlK4xCytaZrARcJ4S4IyYkK%2BZQyj%2Fc2QvOyXKI%2BHWDDo93DQq83c1Y3QL8lhj7iD8cbRRDOpyqeekH5iLQIDv8daUmSSu77Lb8T%2BDOcI5SLtQhYi5o%2FMbRd2BjbkZg2KfdL0QFnnrq0G3wrHM0APz9AQ0rSVdsMP5pQgh2zMsD2%2BW4Ornb1hRtNxA3ZssMUioNJz1utd3LTokia7zKg0NpWmUr3I06DlwL8xlpFrCuhbVZX8vWDlkTiWmaSUhKCIHjpvVFLKD9KEQl8a7SpHPAOCyc7etlmEucS9qbfqc0ZIHkUJtSAV%2FQRfd0NY8cRQxXhkS2mimHXsgxgz2MlfiubVTDQV6BYWYBTZ2onJwcSqXpdIDq4PAJRYKng2QM57xfmX%2B%2FVU4qn4KquGtxxKPpiDp6RuZEZZonS%2B64OuwMMbO9bwGOqUBXfWD5KLDLH07Vr7Fk1UMKOzKFwlOgxWIWhaN7NUA32XsMFMgm6NLLtc16MjMpSu2EeY3b8%2B1asu9YecpYBTmE23VO33sBGqrdDeVKe21G1P2l5lSNgGZQAHvveQY3%2Bx61adr7IYXKdRpEAGw0fJZFKkFVUL19Kl7B7q7PBuFgH14hDJMBGFDSM6PQ88fZj4Ov6EYF4wqpUqTwhlzvSi0s9UZTzYK&X-Amz-Signature=acc92e685b2ec26cca998fea1040017c7d330f049a372af61ce1b2fce6dabcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
