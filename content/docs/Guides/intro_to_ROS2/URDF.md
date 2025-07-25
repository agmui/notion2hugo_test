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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6PJXBT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC4xIdxrTnlvWi6GDhxTFF3gQqO5FUH8lCpdw036dko%2FAiBOdqoMC4caRCUY0bS66x%2FohB4gVYjV%2BMpHeQcquuL6WSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMjoct88U9F9iEVwBIKtwDrxV6HO%2Fce0ljkaGIq5hqTy8OU%2BA%2F3Roo8%2BRuQtCJCSIjJ2hVNYc3rGzdvaoeT0OllUSboX4bsPxez8Sq9NkuCInloqVGdge9pQQBE7aRjMX9IHz5dBeIC4wVNQSPPHZktG5yghYj3FPsk7n4BGQn3BVHyQgf%2FKKGnMALTiwI4kfPOk%2FFLU0tH78CJHeSUqTrIRSWU%2BWyexrrGBMS9GI5DXxVRTN0SaNLn7sCJJElvCw4qqjrNBjtMAGs%2BcrKHoEe5oQqwzwXleoUFTavu%2BW4pAIIo3kWTSUmve9ggvbK8%2Bu%2BHJgywFPc0%2BEcQh1dhPPSYQXkTZ2ah%2FF6eDFR0i5p5IQ7QyvUS7ZQOJh5hO4DQElVt36I9cn8hJAmHESDXvWRhjpDb2bzc452q9SpIwsF0apgfkFurDci6LPGL7LhfKQYVJXO0xnuedGY2IaubyAdOEyuGIF0cHdH6i9elqYmsDGP9pSPCwvtLax6qyh0K1XSXeL%2FeuTrw32GRpkWWmkZK5uMgsyC8uCY0SRvhQtltgJO0ETb15AxGV82k3J3giGo60qiwBbLAV6wM3gDu7fladwu4ABufpOUFljJbTnyWi1IORBCBQc%2F2dq4cK6RwBS4nTK7LFMFwxNBvf4wko2NxAY6pgGCTJVj%2B6%2BxUbQHj6Q72TnnVD6uDEn9jFN3h%2Botg3N5iqujtHWmlwAzCZNMFFFAi0HOxzTXcXQi8ytcs1iVLr6fUH2GlIwcsaRXTOQmEi7HHFgSodQNGaNiW3jVjv%2FJhghk5U1ylJZOpAY%2FJffn%2FNuT2RN5I%2FGP%2B5CNUqyI8b7ylEmaMEMqaOaV3Op9x%2BnhSoDvKBElRCkSD%2FAGL9HBQLQbY6vtrSB1&X-Amz-Signature=abd2d45d6f13508b6ec212a5724af802abdcf8a854f77a984ae7884d4a661f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6PJXBT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC4xIdxrTnlvWi6GDhxTFF3gQqO5FUH8lCpdw036dko%2FAiBOdqoMC4caRCUY0bS66x%2FohB4gVYjV%2BMpHeQcquuL6WSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMjoct88U9F9iEVwBIKtwDrxV6HO%2Fce0ljkaGIq5hqTy8OU%2BA%2F3Roo8%2BRuQtCJCSIjJ2hVNYc3rGzdvaoeT0OllUSboX4bsPxez8Sq9NkuCInloqVGdge9pQQBE7aRjMX9IHz5dBeIC4wVNQSPPHZktG5yghYj3FPsk7n4BGQn3BVHyQgf%2FKKGnMALTiwI4kfPOk%2FFLU0tH78CJHeSUqTrIRSWU%2BWyexrrGBMS9GI5DXxVRTN0SaNLn7sCJJElvCw4qqjrNBjtMAGs%2BcrKHoEe5oQqwzwXleoUFTavu%2BW4pAIIo3kWTSUmve9ggvbK8%2Bu%2BHJgywFPc0%2BEcQh1dhPPSYQXkTZ2ah%2FF6eDFR0i5p5IQ7QyvUS7ZQOJh5hO4DQElVt36I9cn8hJAmHESDXvWRhjpDb2bzc452q9SpIwsF0apgfkFurDci6LPGL7LhfKQYVJXO0xnuedGY2IaubyAdOEyuGIF0cHdH6i9elqYmsDGP9pSPCwvtLax6qyh0K1XSXeL%2FeuTrw32GRpkWWmkZK5uMgsyC8uCY0SRvhQtltgJO0ETb15AxGV82k3J3giGo60qiwBbLAV6wM3gDu7fladwu4ABufpOUFljJbTnyWi1IORBCBQc%2F2dq4cK6RwBS4nTK7LFMFwxNBvf4wko2NxAY6pgGCTJVj%2B6%2BxUbQHj6Q72TnnVD6uDEn9jFN3h%2Botg3N5iqujtHWmlwAzCZNMFFFAi0HOxzTXcXQi8ytcs1iVLr6fUH2GlIwcsaRXTOQmEi7HHFgSodQNGaNiW3jVjv%2FJhghk5U1ylJZOpAY%2FJffn%2FNuT2RN5I%2FGP%2B5CNUqyI8b7ylEmaMEMqaOaV3Op9x%2BnhSoDvKBElRCkSD%2FAGL9HBQLQbY6vtrSB1&X-Amz-Signature=389ccc08f4333c060df8584558f6ee659741149c58f0b7f98d756529691f829e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
