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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBI2LBH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBMgiU2W8sk45FPLEITbBOJ5WIZa3nKE0Io%2B9yyicPMlAiA%2BJDzCnjkr9vaWoDVciLVPgdUuAHKvaYJOU7E5kmlQnyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1odJ3PyA%2FQOV9P2ZKtwDAjdy5oRjfeG5pCczWqSKrQPP33pFs1e3DGd8F7GveGI27aZbyl3rExn3bPDfFYV2WY4QL0KrY23ngii6N6nGrRsYXLVoETbg3eawwj2wHf4435R99%2F4TRTmmOwChsyHO2XW7N9jyIYbKy4slTnxjml5264EMtEUpskNBddgxA6Mz%2BoHuB%2BERwqo%2FIFNvw%2FYJIQh009B8j5LGRZ2IqhL%2F6wzn2zLJ%2BjNUWTfnqaH%2Bd17qSdLmuq3GZojm96h2rTOJnRvmcPs8e5ax5Sx6FohsgZVRzX3KNixjyg%2Bzo2TjxPYFiVXym5FWtXWaWucXaF5ZCI18DOfhjr5wzVUBmOFjrlI%2Bq4lkgZ9Q9ziv6qh3ph7ANX4HaK4RqIVIHHBFiZsSI92PUhTnWN9h6QQsbAT919eNgjLivyfwuxiYvcvF%2B1r97VE0X9L%2F2NLmVZLL4%2B0vPtik6QWoXq36eXbb2NLNy9hcUp9m1%2BDvJSIQpZ3A3e%2F8RhkEf6XTRz7Hgw%2BTFmltB3WTV8HujQE1HFQtb6RrHPipnVBzoLvytFN87LQZE5%2FZVTpWm%2FL3VndZXJE3HUOtkmkeyxomQbk1Tazywkrvw4jt5Ip%2BU4z2PzWWDi1eCBTcp18l6NrlTbTgyzUwh8XVvQY6pgEpoeYBiRgl7lQVucaX97Voy2Tpe%2BdNc7TnMTLEPLnIJ63NHly2zjK9bCeXogbFyY7T%2FsHAUwO1711omH41WwCF%2BoskTJvhObhw3HSorNpGgvij%2Fw8myOPjErgSL9nR%2BVMB7%2FdSjuc%2FTn%2FffoS6YG2noL749RYLaFjblR%2FIPjfv%2Fh4pULVL1MrUnV48R7rfCZUV3KCAYRfOGv8DJLPxM9xIXag0S3xJ&X-Amz-Signature=036fbe8140401f2cd989a23775fa83d359a9d14983fecb9be028c320fea5e8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBI2LBH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBMgiU2W8sk45FPLEITbBOJ5WIZa3nKE0Io%2B9yyicPMlAiA%2BJDzCnjkr9vaWoDVciLVPgdUuAHKvaYJOU7E5kmlQnyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1odJ3PyA%2FQOV9P2ZKtwDAjdy5oRjfeG5pCczWqSKrQPP33pFs1e3DGd8F7GveGI27aZbyl3rExn3bPDfFYV2WY4QL0KrY23ngii6N6nGrRsYXLVoETbg3eawwj2wHf4435R99%2F4TRTmmOwChsyHO2XW7N9jyIYbKy4slTnxjml5264EMtEUpskNBddgxA6Mz%2BoHuB%2BERwqo%2FIFNvw%2FYJIQh009B8j5LGRZ2IqhL%2F6wzn2zLJ%2BjNUWTfnqaH%2Bd17qSdLmuq3GZojm96h2rTOJnRvmcPs8e5ax5Sx6FohsgZVRzX3KNixjyg%2Bzo2TjxPYFiVXym5FWtXWaWucXaF5ZCI18DOfhjr5wzVUBmOFjrlI%2Bq4lkgZ9Q9ziv6qh3ph7ANX4HaK4RqIVIHHBFiZsSI92PUhTnWN9h6QQsbAT919eNgjLivyfwuxiYvcvF%2B1r97VE0X9L%2F2NLmVZLL4%2B0vPtik6QWoXq36eXbb2NLNy9hcUp9m1%2BDvJSIQpZ3A3e%2F8RhkEf6XTRz7Hgw%2BTFmltB3WTV8HujQE1HFQtb6RrHPipnVBzoLvytFN87LQZE5%2FZVTpWm%2FL3VndZXJE3HUOtkmkeyxomQbk1Tazywkrvw4jt5Ip%2BU4z2PzWWDi1eCBTcp18l6NrlTbTgyzUwh8XVvQY6pgEpoeYBiRgl7lQVucaX97Voy2Tpe%2BdNc7TnMTLEPLnIJ63NHly2zjK9bCeXogbFyY7T%2FsHAUwO1711omH41WwCF%2BoskTJvhObhw3HSorNpGgvij%2Fw8myOPjErgSL9nR%2BVMB7%2FdSjuc%2FTn%2FffoS6YG2noL749RYLaFjblR%2FIPjfv%2Fh4pULVL1MrUnV48R7rfCZUV3KCAYRfOGv8DJLPxM9xIXag0S3xJ&X-Amz-Signature=02f915ff82e5716bcad723105ff6da1df932c215cfe9dd11b93a3da41b4be9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
