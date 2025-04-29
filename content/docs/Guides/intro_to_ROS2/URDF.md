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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHLDKH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpmJO3AfU4itpGOKo00s0wJgxoHXOyzLI7Q3bMbjEKQAiAX3GRGTlodgLdcIF791PIx137JB98%2FLuHbyH8JJM1aZCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2oszyaHBduaN75tKtwDzda2Mvu8DoaD%2BSVPeCX0p%2BiCqWC5%2FxRwXbnlvKTZN4P40ApeQal5Uzpuug8hLV7KyCqYwDA1bzAMKZ6nAGUJXsdZ5Fqzl4PX9YvrwlBEfEYT8VLlAHgq5557s3fVqmxBKEBgz%2BifVRydk%2BVPlnK1sANJtxKIDyzDEEj6kP8B1QBCTo%2BOSsmxLOEdsc94z1kpUZJi8Cep0RuvDQ366R4ofrhhzZARLXK2De8UzYIMpWU2XZEeQk%2F0d%2Fc9rVp24Sk7oVrQ3ETqyubXuu2VcoL21beSi2bfbCk07rO3CaqPjCo%2BUjWAteGYZdvsUi0JpNhTKNm7BWEfbnsBWpwnxtIedJYAIZ2gd%2Bm%2FRFX4DvBauEzl0eOTuEKeBiL8UCwO6JGWvneYqr8r2z8KUEBZQ9ffQa%2B0gZCoKLZCUoqckfCJuVH6%2BP5p7xygxhTgjC1uvo2lDyuKnaPJz3mvZ9jw79jsD1DuyqeZBA1xKgOaZcYgGgPRXla9%2FaZj9YtKRNsyEZqZ%2F%2FoiYtkDHIsy3FN5Aei2uf1GuMJePPaO3JjyoJVwnUBRJzt2i1NrnVaE9BdUr8sQsLI4ymreFH3EdfscRSu12vk1Wkzq81x3dkiaAqjcPjK67Asz9SI30rpBZEQwgcDDwAY6pgF9MGeJaog%2BVE5y54v9yyKThng6%2Fj6nKcRr7R16sjLtBRvVkAqn7NOkfvtmmQkZTnMSx1%2Fznnlwo9amuLl2QqRgX6CSa4%2BUU9fpg9d89GhIcYWUPBVzW70IGfvKtR%2B9wqBPWYTOCNMhGyKiRLCUGGbsfpciPcXOaZi8i68pO090taEnwldjhIrjRNkDQp3cOOosCz3%2BELMZSTN8NExnZY8duBAKV8jL&X-Amz-Signature=138e7616529415766c75952d1c189dd9b918847f1ae685093501d6fedd62f1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHLDKH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpmJO3AfU4itpGOKo00s0wJgxoHXOyzLI7Q3bMbjEKQAiAX3GRGTlodgLdcIF791PIx137JB98%2FLuHbyH8JJM1aZCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2oszyaHBduaN75tKtwDzda2Mvu8DoaD%2BSVPeCX0p%2BiCqWC5%2FxRwXbnlvKTZN4P40ApeQal5Uzpuug8hLV7KyCqYwDA1bzAMKZ6nAGUJXsdZ5Fqzl4PX9YvrwlBEfEYT8VLlAHgq5557s3fVqmxBKEBgz%2BifVRydk%2BVPlnK1sANJtxKIDyzDEEj6kP8B1QBCTo%2BOSsmxLOEdsc94z1kpUZJi8Cep0RuvDQ366R4ofrhhzZARLXK2De8UzYIMpWU2XZEeQk%2F0d%2Fc9rVp24Sk7oVrQ3ETqyubXuu2VcoL21beSi2bfbCk07rO3CaqPjCo%2BUjWAteGYZdvsUi0JpNhTKNm7BWEfbnsBWpwnxtIedJYAIZ2gd%2Bm%2FRFX4DvBauEzl0eOTuEKeBiL8UCwO6JGWvneYqr8r2z8KUEBZQ9ffQa%2B0gZCoKLZCUoqckfCJuVH6%2BP5p7xygxhTgjC1uvo2lDyuKnaPJz3mvZ9jw79jsD1DuyqeZBA1xKgOaZcYgGgPRXla9%2FaZj9YtKRNsyEZqZ%2F%2FoiYtkDHIsy3FN5Aei2uf1GuMJePPaO3JjyoJVwnUBRJzt2i1NrnVaE9BdUr8sQsLI4ymreFH3EdfscRSu12vk1Wkzq81x3dkiaAqjcPjK67Asz9SI30rpBZEQwgcDDwAY6pgF9MGeJaog%2BVE5y54v9yyKThng6%2Fj6nKcRr7R16sjLtBRvVkAqn7NOkfvtmmQkZTnMSx1%2Fznnlwo9amuLl2QqRgX6CSa4%2BUU9fpg9d89GhIcYWUPBVzW70IGfvKtR%2B9wqBPWYTOCNMhGyKiRLCUGGbsfpciPcXOaZi8i68pO090taEnwldjhIrjRNkDQp3cOOosCz3%2BELMZSTN8NExnZY8duBAKV8jL&X-Amz-Signature=42777fbc5d6b1c675fbc0e95955ea795a18a906ff40de37a93859bb77288a511&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
