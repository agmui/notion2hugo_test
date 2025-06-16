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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHQE52I%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDbEFAn17E%2FTZJ%2B6k4dex3fkgwF4CiV1F8rdJoBHbUhugIhAJNTcnkKL8%2FQzAvH114oiLAb8vuaMPmS4ILwwZ0CkOCjKv8DCFMQABoMNjM3NDIzMTgzODA1IgwzdUxs24Qb2%2BO3PoAq3AOPutcLEaHAc8w1YHzbG09EmWXw544GnFWBoitcJGTGwuiwVeT3Ep1pCAtWL1%2BtVg5oAoLbnXuVuzLaJbJKvedyRIcPPRyT8JqBqT42AhoC5SATwExsEVInAvZy8ih30gR%2BjgFdl3bu2bYHkWYyBiwtSytliKux8dZujz6kmmoC61nHsoqW%2F7zUH0Kf1Sk%2BNyjG4rviDkV7%2B0YGHtexoQe41AKG3RpFuWQkGvaEjJuQ2S4E%2FsHwtJCpCaeokUMHb3XeXw%2FYGhfOpw14GdcKaoJ%2FoIjaacBZiA6n2k%2BBpq1Ol%2FBQyDXZsWp3vIVAk5x8F9lhSG4yxKi2wB9s8rGsK9kxtRu1SVxRW4irYN4N6v%2FE4FyEiJFMmnkr9vpgyzIiP1TDA%2BK8k7Ws0tA%2BUsIEvx%2BhKSk29ukmNc%2FZIe8uAPbeNBUGHTX5LtugUMFxmNXFbf788CtHa3E%2BQuQFIxtZjZP%2Bi69e8oBwv4zQrgytL8JsEsCbYtJ8hFH8VB4N16Dg7CU06aWbguLSgwl5gFDsradGXdeHBidgDBiCcA5R9%2FCuE2WvLROtBlEQwpzH7BNPi4GaaHBC3b7FAfxYDprMkf7HXpDQ7mn6GwPJ2SR9%2BTnzIU0iuWiDbiB6DfimjjDF%2Fr3CBjqkAf3lOQzTjlc3oML3INOhFPHJ%2Fb83JV8YClOpFzCjJv543JvEYAFs3WeHOqaa%2F6gktFr1Aj0RMqWj79svwrGBgiSLzqfaXf1tYr7xbYhBhV1vLeOOWDSDn60ijuU8sXz9qvnl8qzzScbCLdOTQ5TPnde6Z0wNcgd9tkdRc0F7HvZ5X2B61Eh0Zno1jqxrFRom%2B9x0oKrOnxGMRYj1A%2Btuzykcmw2q&X-Amz-Signature=3bcbe5593e9f4727c2a638d8fb93da4d96102251061291e126c1ea1fa5d63ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHQE52I%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDbEFAn17E%2FTZJ%2B6k4dex3fkgwF4CiV1F8rdJoBHbUhugIhAJNTcnkKL8%2FQzAvH114oiLAb8vuaMPmS4ILwwZ0CkOCjKv8DCFMQABoMNjM3NDIzMTgzODA1IgwzdUxs24Qb2%2BO3PoAq3AOPutcLEaHAc8w1YHzbG09EmWXw544GnFWBoitcJGTGwuiwVeT3Ep1pCAtWL1%2BtVg5oAoLbnXuVuzLaJbJKvedyRIcPPRyT8JqBqT42AhoC5SATwExsEVInAvZy8ih30gR%2BjgFdl3bu2bYHkWYyBiwtSytliKux8dZujz6kmmoC61nHsoqW%2F7zUH0Kf1Sk%2BNyjG4rviDkV7%2B0YGHtexoQe41AKG3RpFuWQkGvaEjJuQ2S4E%2FsHwtJCpCaeokUMHb3XeXw%2FYGhfOpw14GdcKaoJ%2FoIjaacBZiA6n2k%2BBpq1Ol%2FBQyDXZsWp3vIVAk5x8F9lhSG4yxKi2wB9s8rGsK9kxtRu1SVxRW4irYN4N6v%2FE4FyEiJFMmnkr9vpgyzIiP1TDA%2BK8k7Ws0tA%2BUsIEvx%2BhKSk29ukmNc%2FZIe8uAPbeNBUGHTX5LtugUMFxmNXFbf788CtHa3E%2BQuQFIxtZjZP%2Bi69e8oBwv4zQrgytL8JsEsCbYtJ8hFH8VB4N16Dg7CU06aWbguLSgwl5gFDsradGXdeHBidgDBiCcA5R9%2FCuE2WvLROtBlEQwpzH7BNPi4GaaHBC3b7FAfxYDprMkf7HXpDQ7mn6GwPJ2SR9%2BTnzIU0iuWiDbiB6DfimjjDF%2Fr3CBjqkAf3lOQzTjlc3oML3INOhFPHJ%2Fb83JV8YClOpFzCjJv543JvEYAFs3WeHOqaa%2F6gktFr1Aj0RMqWj79svwrGBgiSLzqfaXf1tYr7xbYhBhV1vLeOOWDSDn60ijuU8sXz9qvnl8qzzScbCLdOTQ5TPnde6Z0wNcgd9tkdRc0F7HvZ5X2B61Eh0Zno1jqxrFRom%2B9x0oKrOnxGMRYj1A%2Btuzykcmw2q&X-Amz-Signature=1d848f4cedd80f904c6925855534d5478a72ca85a5421607a3e4932bf8bc030f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
