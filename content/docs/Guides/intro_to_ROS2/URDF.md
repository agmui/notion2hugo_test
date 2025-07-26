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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG25AY3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICJpm0xVWkSTCMI1KCgQYn6r3svG82Vix3yMmHWh22Y5AiBAm6Ja2zImFrUVecBYYG%2Bhtm9WewAiIYVgE%2FqWrVqHNSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMeJm132mvF92C3eMeKtwDhgoDhtm5kimDgjRK87ZBBkSfMjVIhu5gIZ1fArwMDKD0uoqDR%2BD4JoaspLYE42VdN%2B5Dfj%2Fi2pzNxNkVrZkYMOjkPbXpJJ107rE4XNAuFrejKZYBW05yUxWFJqYNfnUZZgTpYmKdSbMhrtlJB8C6iA1KToQs9uS3NZTiI0AySofJugUc949OSNOJ9FfgJsdKFUswIkZJ1SCce4mkz5%2B24U8g7Pdyb4FGxu5Dc3Fkpp7MiE3VzbDLPL9FbKOtzNwjXWnD9H4xHZ4SryzxI0SEyiQ%2Fdcy6XQwUvq5hdZjiNPwY0xTpyHL9FLy2hEaFL4dqNhFjqEeyXZzBTUVxxKIvfKYX4RIruuZ9HQt3WLqE6nrQRqoW7GDGUXuzfw508GNQ5%2BUfVeOETTkX05PgjwUEqLVhnkI8UgQ5W45pNWV1JU0FBueaZ3zSwejfX%2FR8Dkz4%2B%2BBg8kkJaVK45tsmWm0yPvEfyNu%2FPlUhjaaC%2Bpia9jirFJFAGefNi3etabaRHC4CLVdVwaAdqPYzPapVfUU9tHttu0UGW%2BFGIfhEtzak9jSu8LfQRH68vDLYHj3bx5I41r6ePlsx%2F406ckzF4OzNe20%2Fm9eriOKzmoSAMaIkuLvz0J1117UO0tiKwtQwiNmUxAY6pgGRI2XSeD6l%2BPuSYHN11dQZyUI5hkSnI%2FCXIaVi0F8DT%2BB1YSiKyKHPK5QjkcREo7Ta9rG7VY2O8JR7zMX2%2BBV2nClXbmoABjUcjXuVWNwSP1ZqX4DN%2BwnY0KBQIF6RCDQ29PDZiNCkOdRKlgXX3EeNvx1W9ADIwNgJmxq3XT%2BL%2BMR9TirX3PJAshCM89AtvojEi9hz%2FtGIyD1bvhQaptBgP1nukmZ%2F&X-Amz-Signature=d4ccfe4a042e6a0f2d07091a76a83a00cab2c866bd38890b2ef15fe22ea66089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG25AY3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICJpm0xVWkSTCMI1KCgQYn6r3svG82Vix3yMmHWh22Y5AiBAm6Ja2zImFrUVecBYYG%2Bhtm9WewAiIYVgE%2FqWrVqHNSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMeJm132mvF92C3eMeKtwDhgoDhtm5kimDgjRK87ZBBkSfMjVIhu5gIZ1fArwMDKD0uoqDR%2BD4JoaspLYE42VdN%2B5Dfj%2Fi2pzNxNkVrZkYMOjkPbXpJJ107rE4XNAuFrejKZYBW05yUxWFJqYNfnUZZgTpYmKdSbMhrtlJB8C6iA1KToQs9uS3NZTiI0AySofJugUc949OSNOJ9FfgJsdKFUswIkZJ1SCce4mkz5%2B24U8g7Pdyb4FGxu5Dc3Fkpp7MiE3VzbDLPL9FbKOtzNwjXWnD9H4xHZ4SryzxI0SEyiQ%2Fdcy6XQwUvq5hdZjiNPwY0xTpyHL9FLy2hEaFL4dqNhFjqEeyXZzBTUVxxKIvfKYX4RIruuZ9HQt3WLqE6nrQRqoW7GDGUXuzfw508GNQ5%2BUfVeOETTkX05PgjwUEqLVhnkI8UgQ5W45pNWV1JU0FBueaZ3zSwejfX%2FR8Dkz4%2B%2BBg8kkJaVK45tsmWm0yPvEfyNu%2FPlUhjaaC%2Bpia9jirFJFAGefNi3etabaRHC4CLVdVwaAdqPYzPapVfUU9tHttu0UGW%2BFGIfhEtzak9jSu8LfQRH68vDLYHj3bx5I41r6ePlsx%2F406ckzF4OzNe20%2Fm9eriOKzmoSAMaIkuLvz0J1117UO0tiKwtQwiNmUxAY6pgGRI2XSeD6l%2BPuSYHN11dQZyUI5hkSnI%2FCXIaVi0F8DT%2BB1YSiKyKHPK5QjkcREo7Ta9rG7VY2O8JR7zMX2%2BBV2nClXbmoABjUcjXuVWNwSP1ZqX4DN%2BwnY0KBQIF6RCDQ29PDZiNCkOdRKlgXX3EeNvx1W9ADIwNgJmxq3XT%2BL%2BMR9TirX3PJAshCM89AtvojEi9hz%2FtGIyD1bvhQaptBgP1nukmZ%2F&X-Amz-Signature=c00aea11aff71e5c0fbe46edcc11897e462bb180a78f9eec1a953e24a6d59dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
