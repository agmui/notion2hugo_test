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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBNFERV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPXsF7%2FwD73Q7anYO6yDiwK0z0gR%2Bfc%2F%2FplFUpoQxtAIgGAN6%2F%2FpyDa7SXIsqK8EKPWbqnHZ6uteFQQMfuZw7OwQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb%2BBYeBOwoHT9PLsCrcAxgi7Rml9oROcjFpfbvQcmkMiiytdNG1pVzNxiPRSL%2B08azf35cbnBSVDUWsxUoRuCns%2Fkn%2BBHHnmWXtylnYje%2B2KCdASftRXfNAHdgYBMjcnQqWThLyjms3iWi%2FH%2BZhBsIHPk5vKUFNzlRlMAlBIOiBH2LGyN9jxOOT%2BxXNmkAmeoOrfZ56vHSw15NJI2VDbbaE7H3nkTKxFCr7mqA75QzpfFmOwDPfHHUFcsV%2F8JxzQKe%2FIDpUDx5uf4iqxaFLR9nN3IOSTrBvzclw26JYYXkQo3hlhGll0k1fkfQ%2FuPsxt1lg7MsZEQhmD%2FOdYRXx8W56GJHlIau5WFCxaTIMNYa%2BzTEvEsmQxV2zP4w3s5sGsy9oZywrufCbHacffnTb9Sxt0QjMDyqsdm%2BwSLIjWJrsBqSBOoB1sU2j9SGA1z%2FCXKv8uEKM1WYxAPmxIAwcklBDTo%2BhatesMHlg7Z7FQM1ckdMJYNtNcRM%2FFjxib6fbaFR%2FSR%2B8ec75RqA7ckP0UzIBJDluZ6Xpj%2BkFEfG0740HMqnDbbIgi4hjB9A4luV8CZfIbIhxvJdiY5wzuK0dhtwQy6oASh6U5iU3OCeME6hZCcuWx%2BNFJqGAi1UcE6m46zTrQ5Wm45AK95obMJ7ji78GOqUBe44SP5IoOOkU704KsbG0gA8KSM3xfIM9JppWL%2BAoMNbIhuRQj7jkcKuYqN%2B9GMputSqDMlmoC5fcgqlu%2F%2B5%2FSyVol9LMc409bVtbcd7WIZKQWWrX%2Fc8ow%2BZSh5A%2BNkH7C8PuYPY3dTdpAIObZb4Fz420zzV39r94zUpmi154th54DQp18Fabzg8M7KM0lNo9IIM8TmxI%2Bgs2gIHKfpmpINKGelSf&X-Amz-Signature=9b48dc17aa261b0a4a9dd2e3082f880f1218b57ef6a04abab3bc7a22b6a7a190&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBNFERV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPXsF7%2FwD73Q7anYO6yDiwK0z0gR%2Bfc%2F%2FplFUpoQxtAIgGAN6%2F%2FpyDa7SXIsqK8EKPWbqnHZ6uteFQQMfuZw7OwQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb%2BBYeBOwoHT9PLsCrcAxgi7Rml9oROcjFpfbvQcmkMiiytdNG1pVzNxiPRSL%2B08azf35cbnBSVDUWsxUoRuCns%2Fkn%2BBHHnmWXtylnYje%2B2KCdASftRXfNAHdgYBMjcnQqWThLyjms3iWi%2FH%2BZhBsIHPk5vKUFNzlRlMAlBIOiBH2LGyN9jxOOT%2BxXNmkAmeoOrfZ56vHSw15NJI2VDbbaE7H3nkTKxFCr7mqA75QzpfFmOwDPfHHUFcsV%2F8JxzQKe%2FIDpUDx5uf4iqxaFLR9nN3IOSTrBvzclw26JYYXkQo3hlhGll0k1fkfQ%2FuPsxt1lg7MsZEQhmD%2FOdYRXx8W56GJHlIau5WFCxaTIMNYa%2BzTEvEsmQxV2zP4w3s5sGsy9oZywrufCbHacffnTb9Sxt0QjMDyqsdm%2BwSLIjWJrsBqSBOoB1sU2j9SGA1z%2FCXKv8uEKM1WYxAPmxIAwcklBDTo%2BhatesMHlg7Z7FQM1ckdMJYNtNcRM%2FFjxib6fbaFR%2FSR%2B8ec75RqA7ckP0UzIBJDluZ6Xpj%2BkFEfG0740HMqnDbbIgi4hjB9A4luV8CZfIbIhxvJdiY5wzuK0dhtwQy6oASh6U5iU3OCeME6hZCcuWx%2BNFJqGAi1UcE6m46zTrQ5Wm45AK95obMJ7ji78GOqUBe44SP5IoOOkU704KsbG0gA8KSM3xfIM9JppWL%2BAoMNbIhuRQj7jkcKuYqN%2B9GMputSqDMlmoC5fcgqlu%2F%2B5%2FSyVol9LMc409bVtbcd7WIZKQWWrX%2Fc8ow%2BZSh5A%2BNkH7C8PuYPY3dTdpAIObZb4Fz420zzV39r94zUpmi154th54DQp18Fabzg8M7KM0lNo9IIM8TmxI%2Bgs2gIHKfpmpINKGelSf&X-Amz-Signature=45672e80427e582576d29db95bd0412bd670ead49cfe7e1eab1b109eacfcf6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
