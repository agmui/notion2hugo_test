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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKBSZHI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uVW8%2B0dWFgNZ51bfcFBOHSMx40yiseuxmSlo4GA%2BdAIhAJjB5w%2FzAZsQ0x1%2ByYnNtjC%2FpshZ1OR4WcHnkipVFlL%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYT13GaH8ZUkR9aaIq3AOSw4B0AlKITHi31KpEag0EtxACvuoaV0CZxDKf8vVUkZN8j68LyKEhDA48xizOHpA2epVWPpI6mikZwVIQX04LoUbhzjm7OJtYKfRdU3vdO58OUL%2FtXG31omdQZQHjrjV3w2E%2FBgRkDFgHfoa9WQboPTTz83GyqQgc0sDTy46xHKCcOPCVO3LL%2Fh47Q9rUdhq408ZZBFgI0nA53W7DTSwHXYPyjq0IVJsCu40fNiFood9N356dtZrR7%2FUE7e3KknvHyGqTNLB2lLVcarSgO%2Fnlk9zGY%2Fxbp4sfMZo7jq9yB%2FVjC%2FFcVKZ5HNlWvZ8hC60kzxRugNtQ3gQFAyNFPr91d4HiYd2KONa%2BvhFKbjQ944y1nJLMkxtLttIDb4FvvaQBwUJaHtL%2BrRsI3LMrfWCk4jei0zZ81PzdAuVo9tNTiVG1HhVOR4JAc7D5NVWBm%2FKoj16SE1QO7TViAxWMAYraBqu3jgAa%2F2AEYdiT3SM5BWXAHv0XGQxmEa5J9uggfM3G%2FLLHAauuuWnHROJApZjZ%2BFURDSsMVDUmBYkiobkwZ0atriy6FW%2FnKAJoiEhSMF06dX1F3IiwEMNW1%2FQw9GJTlWK5BxkQY0W4g0cnj9ReVe%2Fw4%2F3hy1I8PJi9bzDinZvCBjqkAfnQ3IRCoh3u3jJTrrfsE%2Fxtw%2FuBqg9ba7iJzCMfI4BalCsqJJpbWah3ths8c6%2BIWv5LTbrxVy63P55XZJI0bbNAPWjWBCd%2B%2BQpXNKi0RoXi0Dpc8H6cOIqBGMDBMDtjkPVW2voO9qz9VyVYb7wAuD4sfgjyoeFefFliruYcUNZNIspgb%2BSyzAUS4Tx2dvxNPrpKthGcZAgoUUKenJeOXdIb3E8o&X-Amz-Signature=31dffd4e5d76c0e3dcd1ee88bf19148a614c22ab657a009f81ea9f4efc63a126&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKBSZHI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uVW8%2B0dWFgNZ51bfcFBOHSMx40yiseuxmSlo4GA%2BdAIhAJjB5w%2FzAZsQ0x1%2ByYnNtjC%2FpshZ1OR4WcHnkipVFlL%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYT13GaH8ZUkR9aaIq3AOSw4B0AlKITHi31KpEag0EtxACvuoaV0CZxDKf8vVUkZN8j68LyKEhDA48xizOHpA2epVWPpI6mikZwVIQX04LoUbhzjm7OJtYKfRdU3vdO58OUL%2FtXG31omdQZQHjrjV3w2E%2FBgRkDFgHfoa9WQboPTTz83GyqQgc0sDTy46xHKCcOPCVO3LL%2Fh47Q9rUdhq408ZZBFgI0nA53W7DTSwHXYPyjq0IVJsCu40fNiFood9N356dtZrR7%2FUE7e3KknvHyGqTNLB2lLVcarSgO%2Fnlk9zGY%2Fxbp4sfMZo7jq9yB%2FVjC%2FFcVKZ5HNlWvZ8hC60kzxRugNtQ3gQFAyNFPr91d4HiYd2KONa%2BvhFKbjQ944y1nJLMkxtLttIDb4FvvaQBwUJaHtL%2BrRsI3LMrfWCk4jei0zZ81PzdAuVo9tNTiVG1HhVOR4JAc7D5NVWBm%2FKoj16SE1QO7TViAxWMAYraBqu3jgAa%2F2AEYdiT3SM5BWXAHv0XGQxmEa5J9uggfM3G%2FLLHAauuuWnHROJApZjZ%2BFURDSsMVDUmBYkiobkwZ0atriy6FW%2FnKAJoiEhSMF06dX1F3IiwEMNW1%2FQw9GJTlWK5BxkQY0W4g0cnj9ReVe%2Fw4%2F3hy1I8PJi9bzDinZvCBjqkAfnQ3IRCoh3u3jJTrrfsE%2Fxtw%2FuBqg9ba7iJzCMfI4BalCsqJJpbWah3ths8c6%2BIWv5LTbrxVy63P55XZJI0bbNAPWjWBCd%2B%2BQpXNKi0RoXi0Dpc8H6cOIqBGMDBMDtjkPVW2voO9qz9VyVYb7wAuD4sfgjyoeFefFliruYcUNZNIspgb%2BSyzAUS4Tx2dvxNPrpKthGcZAgoUUKenJeOXdIb3E8o&X-Amz-Signature=cee68d80e276e9ad9052de2cb2889bff194b8dbc3e72aa111d494f2f299e3dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
