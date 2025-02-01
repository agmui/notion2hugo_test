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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G55AW6V%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2BV%2BuPcQa4BC%2BcEhx7OhU96EY%2B2NYe1G7lljasceR7AIhAL8nLH8RYQsOTmt1%2FbpIYWXvJbQ0HncuA1NrRzJoQbaMKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLjZZ8JcYSm%2FNpAYQq3ANjlArHZOD%2F5O6lflwBgOM%2BcaJos8zv%2FqhJreMXaw0N9tAmSFhgGaJZqO4NdfynNMbrHPDV3S2pDTQiWrzqGeDKO8200GNgqC%2BsqgEX7twCVbe1%2BkATXsWi05u3gSr0YHLQvcX9WxRPxDSeA77ixdWCO0zuD2JrgN2fGiaoJypPzbEiAw%2BYBUbQ1IVa%2B3JnhnNt%2Fk9p5HAu2bQs2rpkEtjvpXdvj3kEzZS2%2Fp%2B4NVqhARYs6%2BX28Jn%2BLbh9SnWVr6xe6cTeY9pQWdPvNoMup27ZguoYBHn8K%2B2QBd%2FZtzJFfkYiR6JXPDze5YzamNPbzKb9KNDY4F8M5%2BGmS8lxTXUkyT25okJgNvcS7l24rf59%2FN7T1roBFTodjLU2%2FlPUJykqH7cmN0zF%2FJmirAL3YeFpaP6IR%2FjvSxX5V7%2F52d4pK3rMOdDCUJSDRpN9HJ4nVrfEX2zcRHfkbzK5E6FOn%2B%2FdnZS4oFaimfYtyfG9F7HIUEQJlB76OpIbcoyMV9sLyUnoeJTIX3mLTOi2kPdpQFdif51%2FaBleiVocIwEaO5ZTwhkedXl4pVTfeGoQdI9GTkxDKWbR%2FkCJgCkeKD7h6533hm29hO92ZJjZBWKedhHXcnw5jHIxJO1X8PcpVzDBv%2Fi8BjqkAY%2FEces%2BgBJONxRDzIsI5WWE23ehbQPFI2JdUF8EXg3aWn7javrrPJNJjfqz%2Bk8aesr%2BH65oBLVN3KwRudlqTef9BGUQorfGMwILVETLg7K9WD1jJ%2B06VGCadLHX8sO4glE7L7TpIufz%2F0kH0tJz325UFJylu0h6lXqh%2BrG0trqWHTCMFTF2%2FZnqY1pt0LWiAEaJsinLaUJgkn8HJlChE%2BFbO2Qi&X-Amz-Signature=fceb434f3b5eccd4e538b74ee203e6f1466123c13eca83e49bbc2d1016d6c2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G55AW6V%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2BV%2BuPcQa4BC%2BcEhx7OhU96EY%2B2NYe1G7lljasceR7AIhAL8nLH8RYQsOTmt1%2FbpIYWXvJbQ0HncuA1NrRzJoQbaMKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLjZZ8JcYSm%2FNpAYQq3ANjlArHZOD%2F5O6lflwBgOM%2BcaJos8zv%2FqhJreMXaw0N9tAmSFhgGaJZqO4NdfynNMbrHPDV3S2pDTQiWrzqGeDKO8200GNgqC%2BsqgEX7twCVbe1%2BkATXsWi05u3gSr0YHLQvcX9WxRPxDSeA77ixdWCO0zuD2JrgN2fGiaoJypPzbEiAw%2BYBUbQ1IVa%2B3JnhnNt%2Fk9p5HAu2bQs2rpkEtjvpXdvj3kEzZS2%2Fp%2B4NVqhARYs6%2BX28Jn%2BLbh9SnWVr6xe6cTeY9pQWdPvNoMup27ZguoYBHn8K%2B2QBd%2FZtzJFfkYiR6JXPDze5YzamNPbzKb9KNDY4F8M5%2BGmS8lxTXUkyT25okJgNvcS7l24rf59%2FN7T1roBFTodjLU2%2FlPUJykqH7cmN0zF%2FJmirAL3YeFpaP6IR%2FjvSxX5V7%2F52d4pK3rMOdDCUJSDRpN9HJ4nVrfEX2zcRHfkbzK5E6FOn%2B%2FdnZS4oFaimfYtyfG9F7HIUEQJlB76OpIbcoyMV9sLyUnoeJTIX3mLTOi2kPdpQFdif51%2FaBleiVocIwEaO5ZTwhkedXl4pVTfeGoQdI9GTkxDKWbR%2FkCJgCkeKD7h6533hm29hO92ZJjZBWKedhHXcnw5jHIxJO1X8PcpVzDBv%2Fi8BjqkAY%2FEces%2BgBJONxRDzIsI5WWE23ehbQPFI2JdUF8EXg3aWn7javrrPJNJjfqz%2Bk8aesr%2BH65oBLVN3KwRudlqTef9BGUQorfGMwILVETLg7K9WD1jJ%2B06VGCadLHX8sO4glE7L7TpIufz%2F0kH0tJz325UFJylu0h6lXqh%2BrG0trqWHTCMFTF2%2FZnqY1pt0LWiAEaJsinLaUJgkn8HJlChE%2BFbO2Qi&X-Amz-Signature=8506e68962c697f27abac27980c4a6be2778f30e50bcce4f1d00e962152728e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
