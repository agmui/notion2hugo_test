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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AFFPX3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM44CZd8PDdXJA4WWWO3eb5kkT4FQAz5S6GNVNCwi4sAiEA%2BxZ6D4eo2lYDL9osJTgsXrmGC2lFiKgu2CLNf2dszhsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLUoaHPYnJUseL5SCrcA9ewyauNpsHXAeyTX3bCAIMN6Flj83ibnqDTJGmHpwMyci6nhtLwcpZQHh7FX1G31V7oSoJ3L6YT7dciklKMxYKPEmd1xo%2BkQA07PVhJWtrkygOtn7JnHuhNOYCFDNY1t%2BDOwNF11Qz6ybmXn9xFc%2B0xl%2F2Zq7z9Ia0TEhpY23Kl7VwGMKxOe2n%2Fnq%2FOsxJNUqRdv7Y27Aj2bWq792O5XeQ%2Fm3MMDioD08g0vq1y%2BmzNscvXkx8B%2BG70%2BWyqj7545Yh8qZqXnAzktQNpm5MnwKLinLRNHeSGBh2Nklyx6mUO1GaA0twBI98yCrFexRP2ZWL%2FVG9mxt2GkDTJ5rDSywsITl0HUR%2FilchnuHTJARb6E44iJxsRFPrNx%2F3EAG3aByHOSOyzE%2BWdD93wzqKxaUNaVpyCrvQfo7PfEbIkpxG9jP%2F1h%2F4bJ3OI8KNtw%2ByXZmESsN8hwOnnYlZK%2BLkQMMFJGbBy%2F6YcB56rhB76toe%2Fn8fckhGe9upOiGpQywQ4q1Ot6%2Bf4DmmrPPP3E1yLr%2FxNmV7mpXqhk0hL4BO%2B1aHcugDxU%2BMOuF0EBM%2BXN%2FxrYNze%2FRpj0gwUY6cANk8%2BCuE65XwtQ%2Bbu%2F3rtBt6yZN4olXaoHGZMyp2Jn9%2BFMMOF%2Br8GOqUBa18uc4B9y4pkjW7n%2FVrrFr8gB4aa8iGAAWiNmVocweUieli8uUon1TU7M85bK0ddafVgx2aJx%2B3wIevICVVQ4zdgZd3WscZ9cPkxKhiMmhJfv%2BK%2BX2uuCnV6K7y2pekE1CLOrm78L%2FdXRADfR7Qzx9QBmgWGmQczfWRcCw%2BlwMp7pU4hpqJAwNmCdvL4IiKU5f6Ua8h6EoWgt3MHnqzpR%2FrOpqKi&X-Amz-Signature=3b502a152e4a7c99d698de151c0f826e6a2cf9fa0b7c54c67fafe02556a13ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AFFPX3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM44CZd8PDdXJA4WWWO3eb5kkT4FQAz5S6GNVNCwi4sAiEA%2BxZ6D4eo2lYDL9osJTgsXrmGC2lFiKgu2CLNf2dszhsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLUoaHPYnJUseL5SCrcA9ewyauNpsHXAeyTX3bCAIMN6Flj83ibnqDTJGmHpwMyci6nhtLwcpZQHh7FX1G31V7oSoJ3L6YT7dciklKMxYKPEmd1xo%2BkQA07PVhJWtrkygOtn7JnHuhNOYCFDNY1t%2BDOwNF11Qz6ybmXn9xFc%2B0xl%2F2Zq7z9Ia0TEhpY23Kl7VwGMKxOe2n%2Fnq%2FOsxJNUqRdv7Y27Aj2bWq792O5XeQ%2Fm3MMDioD08g0vq1y%2BmzNscvXkx8B%2BG70%2BWyqj7545Yh8qZqXnAzktQNpm5MnwKLinLRNHeSGBh2Nklyx6mUO1GaA0twBI98yCrFexRP2ZWL%2FVG9mxt2GkDTJ5rDSywsITl0HUR%2FilchnuHTJARb6E44iJxsRFPrNx%2F3EAG3aByHOSOyzE%2BWdD93wzqKxaUNaVpyCrvQfo7PfEbIkpxG9jP%2F1h%2F4bJ3OI8KNtw%2ByXZmESsN8hwOnnYlZK%2BLkQMMFJGbBy%2F6YcB56rhB76toe%2Fn8fckhGe9upOiGpQywQ4q1Ot6%2Bf4DmmrPPP3E1yLr%2FxNmV7mpXqhk0hL4BO%2B1aHcugDxU%2BMOuF0EBM%2BXN%2FxrYNze%2FRpj0gwUY6cANk8%2BCuE65XwtQ%2Bbu%2F3rtBt6yZN4olXaoHGZMyp2Jn9%2BFMMOF%2Br8GOqUBa18uc4B9y4pkjW7n%2FVrrFr8gB4aa8iGAAWiNmVocweUieli8uUon1TU7M85bK0ddafVgx2aJx%2B3wIevICVVQ4zdgZd3WscZ9cPkxKhiMmhJfv%2BK%2BX2uuCnV6K7y2pekE1CLOrm78L%2FdXRADfR7Qzx9QBmgWGmQczfWRcCw%2BlwMp7pU4hpqJAwNmCdvL4IiKU5f6Ua8h6EoWgt3MHnqzpR%2FrOpqKi&X-Amz-Signature=b65ecfaf431a32bd38470541becd8405cfef9743023ce0bb92ae781152d1b9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
