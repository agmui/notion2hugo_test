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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYWGGAR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2c8z92nLx8dHsbd91Bqkqogcmp6iHYaNtD5YNTZFogIgBnX1RWWF92mcOFU7HKN50lV6UzjIJocrrtGKFf1yDvoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHvXfTV1oIkRBSzaESrcA5%2FRZjqnlPqoHgibMAJxKYDk03Emy4Tk2d9nPm05Gceru5dLNgaUkEUlUJvIsIxHixhwkNQRlygl3X70y5cf%2Fi7AnUp3hGVh%2FfWCVhEU9AHvbcNkJYh6cDJ25QBf2y%2FaOtj7y8Vq%2FcwvfSmI76oli4D7cfvQakuH7YEMZ9U9c6g%2FFCdWH%2F9%2BRyUB1u9RowI8%2FbvA%2F9O2oJUAPP9kZA8aLuJzGLouaS8UnKahRX18vO05%2FHx8rWQ0%2FfL5dMm5vqkvfPgXX5aHTpJmCu1haCnNk3nTzD53I7Lh2nQV8Ro5KGx5isb%2Bvvn1soClMK9XimKRXdLobKn%2B0rP0GNuVHc21Sy7OqzIMXgrA2qUHDTvDKdVh6Hr5b2IryBKWzCI0bl6mE3ZhTTxED1dQ8DC%2FwogHFqntGF0xbadBTFB2WSwJ6p0RyljcHIwBdl0XzqpWQ6%2F5H4Qz59XxhsjwicKKjajdW9hU6FZjgw52O4lbUidwSh4CRq%2FU0jZ0AqAKV9jczGs1%2FiQbzAaL5%2B8NDTkNnKlufdzIJY5iR8GaN2dZdOcly98UkawWtkp50tlAe78NpkbSPvFU9BjoQW5tH7No1GvpF%2FHnNOh1pMYihrOB%2BbgToLP46EBMbaM%2BB1Pl9Wo7MMeW4sAGOqUB50K90aKwYhohm2jzo87GVYmqJBwcp1YU4fJZtkzSE32y5lyj4jqSkmnu7ujVqHyM9mgHkWo7nNANOyRIXtuKuyEY2dckq%2Bb%2BBDt%2B6Iqj3tM3q1LJqUmG8cLDSCdsEikWuvfVnE4QAx7cNerA9iyzOFzlz37AMMigP0wylks%2B8u0mB1aozvuWsMnP%2BXSn1e9U6IDl5wLcf6IU%2Bj1igDHO72B5f1Rf&X-Amz-Signature=006462115d09a469fe8a5b654eaad0a4573e0bee6fc898890fab3bfec84d0358&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYWGGAR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2c8z92nLx8dHsbd91Bqkqogcmp6iHYaNtD5YNTZFogIgBnX1RWWF92mcOFU7HKN50lV6UzjIJocrrtGKFf1yDvoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHvXfTV1oIkRBSzaESrcA5%2FRZjqnlPqoHgibMAJxKYDk03Emy4Tk2d9nPm05Gceru5dLNgaUkEUlUJvIsIxHixhwkNQRlygl3X70y5cf%2Fi7AnUp3hGVh%2FfWCVhEU9AHvbcNkJYh6cDJ25QBf2y%2FaOtj7y8Vq%2FcwvfSmI76oli4D7cfvQakuH7YEMZ9U9c6g%2FFCdWH%2F9%2BRyUB1u9RowI8%2FbvA%2F9O2oJUAPP9kZA8aLuJzGLouaS8UnKahRX18vO05%2FHx8rWQ0%2FfL5dMm5vqkvfPgXX5aHTpJmCu1haCnNk3nTzD53I7Lh2nQV8Ro5KGx5isb%2Bvvn1soClMK9XimKRXdLobKn%2B0rP0GNuVHc21Sy7OqzIMXgrA2qUHDTvDKdVh6Hr5b2IryBKWzCI0bl6mE3ZhTTxED1dQ8DC%2FwogHFqntGF0xbadBTFB2WSwJ6p0RyljcHIwBdl0XzqpWQ6%2F5H4Qz59XxhsjwicKKjajdW9hU6FZjgw52O4lbUidwSh4CRq%2FU0jZ0AqAKV9jczGs1%2FiQbzAaL5%2B8NDTkNnKlufdzIJY5iR8GaN2dZdOcly98UkawWtkp50tlAe78NpkbSPvFU9BjoQW5tH7No1GvpF%2FHnNOh1pMYihrOB%2BbgToLP46EBMbaM%2BB1Pl9Wo7MMeW4sAGOqUB50K90aKwYhohm2jzo87GVYmqJBwcp1YU4fJZtkzSE32y5lyj4jqSkmnu7ujVqHyM9mgHkWo7nNANOyRIXtuKuyEY2dckq%2Bb%2BBDt%2B6Iqj3tM3q1LJqUmG8cLDSCdsEikWuvfVnE4QAx7cNerA9iyzOFzlz37AMMigP0wylks%2B8u0mB1aozvuWsMnP%2BXSn1e9U6IDl5wLcf6IU%2Bj1igDHO72B5f1Rf&X-Amz-Signature=482b9442f4cef5c7a5fa5832ea9705e101a239e9ec06f77a5db4121ad6815e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
