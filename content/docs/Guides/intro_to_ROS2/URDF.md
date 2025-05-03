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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWZYT3T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBlC5cQEkjzLoYH1UnZmsZ%2F%2BtW8pt1sMdaviyUfT0HplAiAsOViMPw%2Fhje3BMXOebsYjwYc2hZ1KiTbNpHeS2aPQ1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDkstXSRUowoOODzKtwD8xcXwY1nOPI8JyolxYtJBUq9rsH3DlX0A3hXQqMbofQR6myVumiYVWsuh8D0sokIxg7P6g1eiI7l3ub6zwkMqSmIBbjTno43UK54z0mzqBUtyVazHWOk30cC0ETM0toKAvzyJNZp3MjpG2%2FZ%2F%2B4NAntX%2ByM0E9HxAT96Gw6VbIa0GG3rVLmtMgjMnhdNQt8o3rDZWywnZRf5r3M%2FCeAo1BPw7u%2Bze6qElKQGW911dojvF%2BVWUiJhn%2BpyccEkLmpVe6grUfCEvtMCqNIMXMQ2GiUGy%2Bng9hRF3h20Mj4G1hkkKHgxZVqmRg8LUHtlQD9Ex%2FYLHrAms3YAb8YqR0YUIV4i1eR96bdsBjnog8NuP6DAO29qcyLc9QeoBEpMgB%2FbngfOUR4Ycov2zM0HVae4N7g534hDkAApsDGmHrXtH%2BZ3IPBlh3k4uAWlKkA263X6AV8duXyLeUj%2BDcuXql5KErm9gMNBH3YkMF9lMgeKfqZa%2B4ILHqfNonSICAGuDM5FxbHCDSzn1hYg8CSNt6Bwr1sJlpYj7TLS03b5Ug2IxvcXD6Vm4kbj6XKfEXiRmLFbdmWmhbeuHwnxWN4jNeI3Y0eafi3kjIhyva6lblDVg3Wvczl%2Fh2tZFPvNxEkwgIfWwAY6pgEn7hk3v%2FcCHrrjjfDWfskU951M%2BXCAGzZ%2B5dbwR0avEdZ353uZ2Dqe%2B8rPfMh629XswYHEyyzPAM5rYsY6%2FTRjmPNuOVW9xSEj8iTB8DKiPLqIOjnaK7qcY7hONrRLJmay1S6qloEL3l3G7HvV1wlbo%2BHJHOsrvIp9KAsk0DgL9qhI%2FexqYXtKFooGp6Syzpgjy0RlkxOCjM9P%2B%2B1aUzFAn7T%2Fxmw4&X-Amz-Signature=6a12e85e161bcede04cb8cfb648fba77cd56864853c3a682544fc49106a75339&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWZYT3T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBlC5cQEkjzLoYH1UnZmsZ%2F%2BtW8pt1sMdaviyUfT0HplAiAsOViMPw%2Fhje3BMXOebsYjwYc2hZ1KiTbNpHeS2aPQ1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDkstXSRUowoOODzKtwD8xcXwY1nOPI8JyolxYtJBUq9rsH3DlX0A3hXQqMbofQR6myVumiYVWsuh8D0sokIxg7P6g1eiI7l3ub6zwkMqSmIBbjTno43UK54z0mzqBUtyVazHWOk30cC0ETM0toKAvzyJNZp3MjpG2%2FZ%2F%2B4NAntX%2ByM0E9HxAT96Gw6VbIa0GG3rVLmtMgjMnhdNQt8o3rDZWywnZRf5r3M%2FCeAo1BPw7u%2Bze6qElKQGW911dojvF%2BVWUiJhn%2BpyccEkLmpVe6grUfCEvtMCqNIMXMQ2GiUGy%2Bng9hRF3h20Mj4G1hkkKHgxZVqmRg8LUHtlQD9Ex%2FYLHrAms3YAb8YqR0YUIV4i1eR96bdsBjnog8NuP6DAO29qcyLc9QeoBEpMgB%2FbngfOUR4Ycov2zM0HVae4N7g534hDkAApsDGmHrXtH%2BZ3IPBlh3k4uAWlKkA263X6AV8duXyLeUj%2BDcuXql5KErm9gMNBH3YkMF9lMgeKfqZa%2B4ILHqfNonSICAGuDM5FxbHCDSzn1hYg8CSNt6Bwr1sJlpYj7TLS03b5Ug2IxvcXD6Vm4kbj6XKfEXiRmLFbdmWmhbeuHwnxWN4jNeI3Y0eafi3kjIhyva6lblDVg3Wvczl%2Fh2tZFPvNxEkwgIfWwAY6pgEn7hk3v%2FcCHrrjjfDWfskU951M%2BXCAGzZ%2B5dbwR0avEdZ353uZ2Dqe%2B8rPfMh629XswYHEyyzPAM5rYsY6%2FTRjmPNuOVW9xSEj8iTB8DKiPLqIOjnaK7qcY7hONrRLJmay1S6qloEL3l3G7HvV1wlbo%2BHJHOsrvIp9KAsk0DgL9qhI%2FexqYXtKFooGp6Syzpgjy0RlkxOCjM9P%2B%2B1aUzFAn7T%2Fxmw4&X-Amz-Signature=2ab8cc2b206de398817e169fa01c529930868bf304a06e6ecf0f7d729e206f00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
