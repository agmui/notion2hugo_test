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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QAFFQOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDH%2BXjuID1CeN8%2FeOifJeH%2FrvmV%2BGdwONimRTHRCXek6wIgN1370Ka%2F%2Bp%2FT9zirkRzdDqlxeRCz3M8wMFszG518vTYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5425zidZYgeGK3tircA92e4G2QjQ17XpJtgTBDdMWh3iaRXIXSb3iqN%2FjTRpByV7gFKYyv79mz5TgooHd3LBZ84V%2FyGCSVh%2FlRVB2vt9qq%2Bwu%2BMXXHEL0iqzywnp2zMfRUiIfu8gG2TpUK%2FfPT2uCBKqjJ%2FN89DdwnninsCEm5WQMUlBlXOFIX%2FC4SlhMG%2Fu3I9%2B62n7hFXZIDxdcjx8JQb4Dek29o1UA%2BZzlkhIE0wIZgcK5wSTuNYK6rqgrCbDLNSq%2BTCxiAK0NyV9Vw77SGlEH4JUvt3dlUTRRq9DrTEeLgZY6oj86YWbqCASoG9JKIe7IRGbDNYSVaiUqo7QXu840qqS%2BLpfZAYHrWWA0d5JkFzhd6cT%2FJFhZvwEKugorLuQN8qvvgmfGbfIHoT0v%2FRKVlF9Hvm2K1FkZDYcCXKp0iiXw0IU5gFnsjOHR3XbCMioSTUyNYQ24goOxyhu9rjR2tDvfQd2mzm52nr5fZC1wjw385%2FjlkPuFjwkyDKqgM%2BpT1NM%2BsmB8sr9Mnky3pZj53JmnBLArHU1qmOeE5ySdLYN327ByTWgkWm0Gm3hz2tAwRzC0VMICLBXVfzQMbUnVxPDwWZW8N8ddEN%2B4lzu4%2BD5p5k68Sie07weXxT1QWQIg3Nrhe6mamMPehg8EGOqUB%2F4eoo64403WXMBPLtNMOvQ%2F5se4RlRsbsW6z0pheLRwhVDcoKWRbIe1CfUby3B%2BP9KINreJaaZA0UOS8JgL6o0Ecmi31Bl4fi6wWly6gRmHjL%2BWSHntk9tcgFfQzejdmsHSVQwno21f6e3joy32yPyw11PPSXUeLxppiVHA4olGIdacXzcAt0Jhei3k7i8VOY2Mzzn14eRcjqPtJG13cMpm%2B53q2&X-Amz-Signature=fd22ab5ff0f87bef5d16535db797d0574257a99853f8177124a80764eb8f2e37&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QAFFQOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDH%2BXjuID1CeN8%2FeOifJeH%2FrvmV%2BGdwONimRTHRCXek6wIgN1370Ka%2F%2Bp%2FT9zirkRzdDqlxeRCz3M8wMFszG518vTYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5425zidZYgeGK3tircA92e4G2QjQ17XpJtgTBDdMWh3iaRXIXSb3iqN%2FjTRpByV7gFKYyv79mz5TgooHd3LBZ84V%2FyGCSVh%2FlRVB2vt9qq%2Bwu%2BMXXHEL0iqzywnp2zMfRUiIfu8gG2TpUK%2FfPT2uCBKqjJ%2FN89DdwnninsCEm5WQMUlBlXOFIX%2FC4SlhMG%2Fu3I9%2B62n7hFXZIDxdcjx8JQb4Dek29o1UA%2BZzlkhIE0wIZgcK5wSTuNYK6rqgrCbDLNSq%2BTCxiAK0NyV9Vw77SGlEH4JUvt3dlUTRRq9DrTEeLgZY6oj86YWbqCASoG9JKIe7IRGbDNYSVaiUqo7QXu840qqS%2BLpfZAYHrWWA0d5JkFzhd6cT%2FJFhZvwEKugorLuQN8qvvgmfGbfIHoT0v%2FRKVlF9Hvm2K1FkZDYcCXKp0iiXw0IU5gFnsjOHR3XbCMioSTUyNYQ24goOxyhu9rjR2tDvfQd2mzm52nr5fZC1wjw385%2FjlkPuFjwkyDKqgM%2BpT1NM%2BsmB8sr9Mnky3pZj53JmnBLArHU1qmOeE5ySdLYN327ByTWgkWm0Gm3hz2tAwRzC0VMICLBXVfzQMbUnVxPDwWZW8N8ddEN%2B4lzu4%2BD5p5k68Sie07weXxT1QWQIg3Nrhe6mamMPehg8EGOqUB%2F4eoo64403WXMBPLtNMOvQ%2F5se4RlRsbsW6z0pheLRwhVDcoKWRbIe1CfUby3B%2BP9KINreJaaZA0UOS8JgL6o0Ecmi31Bl4fi6wWly6gRmHjL%2BWSHntk9tcgFfQzejdmsHSVQwno21f6e3joy32yPyw11PPSXUeLxppiVHA4olGIdacXzcAt0Jhei3k7i8VOY2Mzzn14eRcjqPtJG13cMpm%2B53q2&X-Amz-Signature=f88cb0ec1084eabdab457bf367d61d7b93fee6800924b3df9c03c6f53e685522&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
