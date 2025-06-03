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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMHW376%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDTd0Kfd89gHIS%2F23sqrmrLIfKT6TPdQJeOtfbXYWwXUgIgGNrMcjY5xHTjm4S2rqkHoHXS20mV0%2BfpRgPqPsVrHdoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFJ%2By3I6jS1iJjyRlircA7%2F5tNRngNh2UQpmlBbUUyxj6Hh54SKQ1HjvGXwxgzuOzDcCJYy20SN%2FE71esh64nSoWNtdIyPWmlxVBhcSELBv%2B7suC9k8Ja8TgSR75BhwzdHIGl6Wrz3GVp20ZhuOVCENeub68HfNA4%2FyJTb%2Bn8kGwzSj7MYinysowXwn4kOpIVwJ3hIV7cAswZX6%2FKHpI%2F33%2BfpKul4aXHix%2F0vgZlE3WF49N2q9CDhPyUhtpCWTmedmwFR3HJ%2FmhDZFXeI83evGcnjWqhRvK6kcmGdbFk4Omu9OnzK36atUl8aUrJyIBRes%2BXSH8iF29ZU0GBYOtll2jav8mOZSEu83rZfSFpoE%2BgCr0FMoKyXL878BbQ3NMTzhAHxuSoeq0K1DL6rO%2BFewL9lxKNhBVqvqaizSIx%2FYw5T9yf9TzCEThnwWxyHqI9MEJszBgjTWoBSbk4AoHDLy0zlXtQviimTF3JTJA%2Fa6%2FjOxdF8%2BoG2tddJ7kevSiOxGll4Q7Rj%2FE6hfebdxfaiXAP%2B2lEKkw%2B7L9LGvwynJacpQk8VuobmETu2vM%2BhoXTALYwABPIZ2VH315ye4z4j8gIjSV4V1%2BGdHb8Fn95OY0bfPagH463xPfix5i87R1RKowkRWPqMUK6Y7XMNj6%2BsEGOqUB9iuyiycVTnk%2BN8Skd50FOxqx%2Fr%2FBJ23JpAyjYt7p3iRCIBhC7CVy5DJvmDshujP1J3zLfALn%2Fnt7P4Lr3ulx2dFBNidWXPRbg0JS%2BVluKwXd2KVkXMyPgfGvjLWVV2vIJKPuPmt8Nvo3YCnK70Og%2F1JCcImud4SeTE%2B2NjszxCekd0ahTWtQu2%2BDYoVpWRolMahFjA7tSCpndiPW4BlGpfZqlnJp&X-Amz-Signature=a5f7ba664853b4c1b65336abf1fe2748f90a08d11caa80741527ec13af02fd95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMHW376%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDTd0Kfd89gHIS%2F23sqrmrLIfKT6TPdQJeOtfbXYWwXUgIgGNrMcjY5xHTjm4S2rqkHoHXS20mV0%2BfpRgPqPsVrHdoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFJ%2By3I6jS1iJjyRlircA7%2F5tNRngNh2UQpmlBbUUyxj6Hh54SKQ1HjvGXwxgzuOzDcCJYy20SN%2FE71esh64nSoWNtdIyPWmlxVBhcSELBv%2B7suC9k8Ja8TgSR75BhwzdHIGl6Wrz3GVp20ZhuOVCENeub68HfNA4%2FyJTb%2Bn8kGwzSj7MYinysowXwn4kOpIVwJ3hIV7cAswZX6%2FKHpI%2F33%2BfpKul4aXHix%2F0vgZlE3WF49N2q9CDhPyUhtpCWTmedmwFR3HJ%2FmhDZFXeI83evGcnjWqhRvK6kcmGdbFk4Omu9OnzK36atUl8aUrJyIBRes%2BXSH8iF29ZU0GBYOtll2jav8mOZSEu83rZfSFpoE%2BgCr0FMoKyXL878BbQ3NMTzhAHxuSoeq0K1DL6rO%2BFewL9lxKNhBVqvqaizSIx%2FYw5T9yf9TzCEThnwWxyHqI9MEJszBgjTWoBSbk4AoHDLy0zlXtQviimTF3JTJA%2Fa6%2FjOxdF8%2BoG2tddJ7kevSiOxGll4Q7Rj%2FE6hfebdxfaiXAP%2B2lEKkw%2B7L9LGvwynJacpQk8VuobmETu2vM%2BhoXTALYwABPIZ2VH315ye4z4j8gIjSV4V1%2BGdHb8Fn95OY0bfPagH463xPfix5i87R1RKowkRWPqMUK6Y7XMNj6%2BsEGOqUB9iuyiycVTnk%2BN8Skd50FOxqx%2Fr%2FBJ23JpAyjYt7p3iRCIBhC7CVy5DJvmDshujP1J3zLfALn%2Fnt7P4Lr3ulx2dFBNidWXPRbg0JS%2BVluKwXd2KVkXMyPgfGvjLWVV2vIJKPuPmt8Nvo3YCnK70Og%2F1JCcImud4SeTE%2B2NjszxCekd0ahTWtQu2%2BDYoVpWRolMahFjA7tSCpndiPW4BlGpfZqlnJp&X-Amz-Signature=fbed2fc10b4ba0a1a31bc321ad420967ad564f149ccbcdbb08f30b623b47c898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
