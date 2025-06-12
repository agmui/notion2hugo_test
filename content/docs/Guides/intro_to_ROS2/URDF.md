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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2QY7G5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICznsShSUFC%2B7E4zWUiu7UobbrxcEKv%2FK30ju2EgY%2BcgAiAWRmWp27h1g8Sa5z4TJMO%2F6W4U6sArjf9dNXCTtGoN4CqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0evgwwN5lX0hzzPKtwDKfgwza%2F0EfaxfugGE%2BKQLc%2BOnrkg9pIs0KL5thcKoN3Q3YK6x%2FDSE4e3fgVCeu5L%2F%2FqS3TZDmTkCz6ckgQGe3R2c6WMuhFzUQv2cgDoSd7LvUoENU84k5hfrwxwrryrz0MtxeUSESxDro%2BfNZWQa%2BTEVD2%2FCiQpWC5aEtXmYFpfLcGcJoHvU1ZVqtz6XGLhLv40yi7ZFj9vCoSS4vwJZ3MNOoN0l9QOcPqCaLPOFIXx1vTHlBBe2cOfWysRsw9yqdAj2eLVBDCPuJyUjuXGvQg3N4Od9Fg9Qsc%2Fr8%2FBI4sailYsQWMK0qOUwhXqDSJ%2FmbS5Wa2EwOY99dhBuvmvM4usiI7ysohEMvWpcu7gxS3dXWzEcDM%2BEyJYN2t5WEz2P3QPTd4k7NldmtQOEXOdwEoKl6gggl6IpMg8Qalgd2Vwj1JTGFrcZy6%2FNxrtZT6wVKVWsIe0A9hwgEUuIJgM%2F8LxakfT1pu%2BovQN2JuQBIEIL%2BhLkmAkMctT8DgcnnQ%2FDrPNYnSRzUmitLRYswcp7uA8keISCpvl1Hh9ArhUUMHqoL34alIwzMeXVU5Qh7eakVl7Hrcw7Azbbdp7iPanWHAwo8liAWmrV%2FFB4SzZ0GG9bkxg6kYjtySM6qggw07itwgY6pgFKyKsgG7k51uj6aNGWHag4OFYoo93nmc6G9a2S0cq7HbDUUy7jEMnvm8SrJitCdjhFLHBTj%2Fy%2FiT9w6P%2FXlOuhKJnW13LDbij%2BabVTHIGa2A2fZ%2FqVn%2BgDWTdCjU0d4Qtwv2IH1kunxsYrvNhny7pGtRhvSB4pHn8ERaETqAjE7p3zKp7t4rASToQkLv0deffrkofxknbZVkiSOwkL6lQ56suMFuHn&X-Amz-Signature=050097d99c7a0d71fa1b0ed684d7f8e381a4843f744a1c939f2e289dccd10f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2QY7G5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICznsShSUFC%2B7E4zWUiu7UobbrxcEKv%2FK30ju2EgY%2BcgAiAWRmWp27h1g8Sa5z4TJMO%2F6W4U6sArjf9dNXCTtGoN4CqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0evgwwN5lX0hzzPKtwDKfgwza%2F0EfaxfugGE%2BKQLc%2BOnrkg9pIs0KL5thcKoN3Q3YK6x%2FDSE4e3fgVCeu5L%2F%2FqS3TZDmTkCz6ckgQGe3R2c6WMuhFzUQv2cgDoSd7LvUoENU84k5hfrwxwrryrz0MtxeUSESxDro%2BfNZWQa%2BTEVD2%2FCiQpWC5aEtXmYFpfLcGcJoHvU1ZVqtz6XGLhLv40yi7ZFj9vCoSS4vwJZ3MNOoN0l9QOcPqCaLPOFIXx1vTHlBBe2cOfWysRsw9yqdAj2eLVBDCPuJyUjuXGvQg3N4Od9Fg9Qsc%2Fr8%2FBI4sailYsQWMK0qOUwhXqDSJ%2FmbS5Wa2EwOY99dhBuvmvM4usiI7ysohEMvWpcu7gxS3dXWzEcDM%2BEyJYN2t5WEz2P3QPTd4k7NldmtQOEXOdwEoKl6gggl6IpMg8Qalgd2Vwj1JTGFrcZy6%2FNxrtZT6wVKVWsIe0A9hwgEUuIJgM%2F8LxakfT1pu%2BovQN2JuQBIEIL%2BhLkmAkMctT8DgcnnQ%2FDrPNYnSRzUmitLRYswcp7uA8keISCpvl1Hh9ArhUUMHqoL34alIwzMeXVU5Qh7eakVl7Hrcw7Azbbdp7iPanWHAwo8liAWmrV%2FFB4SzZ0GG9bkxg6kYjtySM6qggw07itwgY6pgFKyKsgG7k51uj6aNGWHag4OFYoo93nmc6G9a2S0cq7HbDUUy7jEMnvm8SrJitCdjhFLHBTj%2Fy%2FiT9w6P%2FXlOuhKJnW13LDbij%2BabVTHIGa2A2fZ%2FqVn%2BgDWTdCjU0d4Qtwv2IH1kunxsYrvNhny7pGtRhvSB4pHn8ERaETqAjE7p3zKp7t4rASToQkLv0deffrkofxknbZVkiSOwkL6lQ56suMFuHn&X-Amz-Signature=690c68d6fa71925355439793645d142f730fa8cf4b87a0e22b5f261d7d0fcece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
