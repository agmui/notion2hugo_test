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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUCPQ4F%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFyGGBOhASUE5KFHqUl2MN1m15k6vqYcoR%2BeMhv3%2F2LLAiAawwcD3mjYHRgc8n3qNobuIRlADopXJlpsVTsR8EIbfyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8EGaYlspvTRuUmcgKtwDlmqRjWZ7qX9iRXmPadQyZjzopwH%2BVG7KC%2FyAhrBiMRzEk93F%2BEsZysUqA%2FAZp2bNo7t7HE19Rziw%2BSVNHhML%2BhL2Xg2OSpk3aeujjVgvwU9SL0lJxPdR1%2Fv0VWWoZ2hF4g6t%2BpLc%2Biu1SfNE3ZGVSh%2F%2BtdusbgHjrU%2F%2FvPAwMUJ6zSrHgT%2FkgSgrMFP%2BIHg5KdLLBcsVqe8wYVHejkaSx7QiQbqh%2FrnhAXR5gaZQIbh3evFGoHt0U2UmuSBRlcB%2FEytzf0l%2B9QQCTZg9fZs%2B1OKMC9%2FTp6oolreLkUe79m9NwefZqlMcwTyf5JO%2FpOIfZc5FNoLFP2fPbqrFqA0IG%2Fw1oOr8jtCrMAFaEMaroLSwPVyVukB82RkJYxtMkVE2LP5W0pL%2BkseB5iuHzmh%2BVtS7nF%2BdD9vGz3pkidwo5JD8Gj5ozBjt3pjtD1en6vnzMmrLYx8DaYfR4s9RY1cFA8fhoba7M%2FR50ZKNaAeVx85%2FmFGjKxp2I9oqoEMurRfiq9Rfqm8PYh7BoYmXAsVnDmQefKM066f2sP5ZYCG4kGrBnoUKMdrqPIDL0juyLLsiua5G9C47B4u59kGmGRBsmJuyPyJ4aL5FourqfCJZ7WSez2yTTtB4zz2uz4kw0o%2BFvgY6pgFFGGaHNwplL6s85jlKADwiLprpAPgUQ0MaEzJ%2BmV1IMagOPxlS5GHG6AlhfahQRcIzGSvSMblhqaVr%2Bt9xR5RlMQ51hdLzzoCMhL%2F57SV0RX0eNkozmYemG6aiYXa6iGYdrkPEhCOlir3H4R0nUKFM7AqogIsUD7cyo4nJN8E7162yiSxbeNuM0TKSivE2rcoZ9ovZX%2FZcjJJe12NLetaJBLnAPIAb&X-Amz-Signature=c65fa31fc68b8c5ff150b35972daeab6e0e7f09035aaa5b93c7954f6588b6aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUCPQ4F%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFyGGBOhASUE5KFHqUl2MN1m15k6vqYcoR%2BeMhv3%2F2LLAiAawwcD3mjYHRgc8n3qNobuIRlADopXJlpsVTsR8EIbfyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8EGaYlspvTRuUmcgKtwDlmqRjWZ7qX9iRXmPadQyZjzopwH%2BVG7KC%2FyAhrBiMRzEk93F%2BEsZysUqA%2FAZp2bNo7t7HE19Rziw%2BSVNHhML%2BhL2Xg2OSpk3aeujjVgvwU9SL0lJxPdR1%2Fv0VWWoZ2hF4g6t%2BpLc%2Biu1SfNE3ZGVSh%2F%2BtdusbgHjrU%2F%2FvPAwMUJ6zSrHgT%2FkgSgrMFP%2BIHg5KdLLBcsVqe8wYVHejkaSx7QiQbqh%2FrnhAXR5gaZQIbh3evFGoHt0U2UmuSBRlcB%2FEytzf0l%2B9QQCTZg9fZs%2B1OKMC9%2FTp6oolreLkUe79m9NwefZqlMcwTyf5JO%2FpOIfZc5FNoLFP2fPbqrFqA0IG%2Fw1oOr8jtCrMAFaEMaroLSwPVyVukB82RkJYxtMkVE2LP5W0pL%2BkseB5iuHzmh%2BVtS7nF%2BdD9vGz3pkidwo5JD8Gj5ozBjt3pjtD1en6vnzMmrLYx8DaYfR4s9RY1cFA8fhoba7M%2FR50ZKNaAeVx85%2FmFGjKxp2I9oqoEMurRfiq9Rfqm8PYh7BoYmXAsVnDmQefKM066f2sP5ZYCG4kGrBnoUKMdrqPIDL0juyLLsiua5G9C47B4u59kGmGRBsmJuyPyJ4aL5FourqfCJZ7WSez2yTTtB4zz2uz4kw0o%2BFvgY6pgFFGGaHNwplL6s85jlKADwiLprpAPgUQ0MaEzJ%2BmV1IMagOPxlS5GHG6AlhfahQRcIzGSvSMblhqaVr%2Bt9xR5RlMQ51hdLzzoCMhL%2F57SV0RX0eNkozmYemG6aiYXa6iGYdrkPEhCOlir3H4R0nUKFM7AqogIsUD7cyo4nJN8E7162yiSxbeNuM0TKSivE2rcoZ9ovZX%2FZcjJJe12NLetaJBLnAPIAb&X-Amz-Signature=eae89f7caff072a5046fd93935b1943e4065faa8c351363b66a56e256ed48453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
