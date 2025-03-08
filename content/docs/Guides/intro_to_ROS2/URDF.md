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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76GZAMF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD8PIW8I1ajEcqIFn6o%2Be4DgNmrBKniAn%2FTHdGF0svmcgIhAOL8ZPGy4CIq993H%2B5c68zEtrLk4wFcKkDdHYa%2BvQSX6Kv8DCGMQABoMNjM3NDIzMTgzODA1IgzpsK1IycauSTFjRpEq3AOftQHtQ9tizTSN0V8OYGWPxzY1K%2F23ffvha%2FQ78pRMOEzpwbVVhYeupRW5FHrqyrUwtkkTx%2BahaH9cIGFHkuaEDMXBhGcfOjqQjIiGIWGP8TKTRWVI2FFryPV1XTLpDJ4PnPdhmIKy7BbY3qn9Kyie74I4aOeaQG0LHG4FNIbH3j5nTqUYfgdY0gbLc58W5hdqdXV7onFRI%2BJZ0QiB5dGKWqQIokq5%2FZ3xD1Kii00LKdPo31n9%2FULFsdLHvQIpr2DAHe0ri0oabGDTpFII2kH5E0HzK0PV7v11Z%2FNvTYnR7I8qOwUpYDnEBSUs9SQ9pL%2B6PLLnCmJHwnuoO13cArRPFMRuCZ8KpFS9gCIuzXMh5LLYw602MJu4hjIrgRxipKA721xa%2FCcQoPh35ENlMrfhHMa9vTTVvzmg6fZyFoYAROzjCNLjFwKIVy%2FIGl%2B%2BqaNCygkE6tn63BGRLK2KDsSLDwat8xvUhXrgfQga0s5nNdc%2FsqoDELNqW27Pnbncje8xpDw8dZ7legNltWyvHJJwbJqnWpGiEarqZn8ELMv%2FwAEZnJSzSeyLv%2FXshPLhY2hCRYkqsk51%2B1XW4Vcizc%2FbqL1zEXmZR28jlINkgLneZER1j9OwDjeK5Wnu1TDfgrK%2BBjqkARj64T4qySDUKAJ3pVrXX%2FRFaGs8mOfMRum%2BFLWu8Rejs0NBQublevc0nR7oORaPr4x%2FnLdtl%2FvBe8I0dNTW3Goq%2FQgWQt%2F%2F%2B8USh575a%2BOxfW5yEepm7M9mun%2F6oxOdSo6motAUnqw6SW3Dic59gLqsDLYeFsCr89NjLUux4jBMaysXFeiY2ueH2ChGvH5IJy2XsSY91%2BLEU6a%2F%2Bx6JtCsa4hKN&X-Amz-Signature=1e608bd55d87db4b9f105a23bc97c955a73a804ccf8ee9df9bc18f0fc28574e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76GZAMF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD8PIW8I1ajEcqIFn6o%2Be4DgNmrBKniAn%2FTHdGF0svmcgIhAOL8ZPGy4CIq993H%2B5c68zEtrLk4wFcKkDdHYa%2BvQSX6Kv8DCGMQABoMNjM3NDIzMTgzODA1IgzpsK1IycauSTFjRpEq3AOftQHtQ9tizTSN0V8OYGWPxzY1K%2F23ffvha%2FQ78pRMOEzpwbVVhYeupRW5FHrqyrUwtkkTx%2BahaH9cIGFHkuaEDMXBhGcfOjqQjIiGIWGP8TKTRWVI2FFryPV1XTLpDJ4PnPdhmIKy7BbY3qn9Kyie74I4aOeaQG0LHG4FNIbH3j5nTqUYfgdY0gbLc58W5hdqdXV7onFRI%2BJZ0QiB5dGKWqQIokq5%2FZ3xD1Kii00LKdPo31n9%2FULFsdLHvQIpr2DAHe0ri0oabGDTpFII2kH5E0HzK0PV7v11Z%2FNvTYnR7I8qOwUpYDnEBSUs9SQ9pL%2B6PLLnCmJHwnuoO13cArRPFMRuCZ8KpFS9gCIuzXMh5LLYw602MJu4hjIrgRxipKA721xa%2FCcQoPh35ENlMrfhHMa9vTTVvzmg6fZyFoYAROzjCNLjFwKIVy%2FIGl%2B%2BqaNCygkE6tn63BGRLK2KDsSLDwat8xvUhXrgfQga0s5nNdc%2FsqoDELNqW27Pnbncje8xpDw8dZ7legNltWyvHJJwbJqnWpGiEarqZn8ELMv%2FwAEZnJSzSeyLv%2FXshPLhY2hCRYkqsk51%2B1XW4Vcizc%2FbqL1zEXmZR28jlINkgLneZER1j9OwDjeK5Wnu1TDfgrK%2BBjqkARj64T4qySDUKAJ3pVrXX%2FRFaGs8mOfMRum%2BFLWu8Rejs0NBQublevc0nR7oORaPr4x%2FnLdtl%2FvBe8I0dNTW3Goq%2FQgWQt%2F%2F%2B8USh575a%2BOxfW5yEepm7M9mun%2F6oxOdSo6motAUnqw6SW3Dic59gLqsDLYeFsCr89NjLUux4jBMaysXFeiY2ueH2ChGvH5IJy2XsSY91%2BLEU6a%2F%2Bx6JtCsa4hKN&X-Amz-Signature=39dd91f36a89332c6e274fc0d9cca973d058584e8f0575f24a54bfa350aa7a54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
