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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZNI2KO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Tao4y5hrFdh3DcSnPi%2Bfj%2Bc2IvWPj7syd70J5Bzp6AiAdfBknFiiVXIafXVKQFNLfH8S4ThUQP0vfAF99%2FiK8TSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2BtXn61Pgw5YBB1KtwD9MwA2paolkoUFbk2O6UwMP9B0SNkkyFMexpWWqTUYfXl3bjXEdhBv2%2F5%2B0gin7e6nzeR6BbCLgUq%2FsUw5e4WEPern3ZjTysVE%2FI9PWzFl237vjgHqpEHzq%2Bv4UnOPCddpXdPcyRZ%2Fz8PGpytGd2VjpyMcCq6XjfjNf8OIISWLUel0GS2VXiJBIMcQZ7Y%2BObAmYI8ePhgYn3StWMYk8GpcTLd7m2Sy2GdM7zyD9aTsZG3dmCom1DRB%2BlsUz%2BRJZ6UtVwtSCqAEhh4ddOdIeiF6667Wn%2FL7YrG9TqO0DP2yDlFMFrf66s4%2BpQkd%2BNrhvBSJDh5Y5m2TaC7eEuWyLoXUvM0p2qDd52YC2lrj8VxVS0DCyY5wgWXZZt4vpmPDZyQUmh3o0lNlI%2BkNogPf%2F811HuBA5ILMljwyBCl2MTMqJWZj8hQfHAAx0SmzREI0mnxmvgsT5rgC19HDXJWyE0n6Co59sBpUv8EOQPKJ1ibjC8nfnFLbngUhgej%2FlmUE89lLhAcGTdukfQAPdK0EMfhJaegIkebWfPjjeO%2Fcjtb9bwJ9zT1I0dfyODtGim9mtA8Of%2BrJAU0iKaBRq2EBim6zGVDrq84NI6uOyIn%2BnORTkCagMWj0BsM20ZgUwwwqO%2FYvQY6pgEyUYUEKjgbP%2Bx6j1Se%2Fz7shffgr8lgemvvS28gAkIOTj4Pr6hpFlbOXFHRea6OAHmiJqcTNNmDkmDJnegxN29PWobyUQpBRdvgGP7CNfnJqUixXwJ1JkBD44eBoG8wrc07qmbcf2XDzicMg8107HetBXg8p9WpXrE%2Flq%2BfBUpnSYC%2Fue1Ns64ETFiA6NHwdH6KJXre8iRRYCSfS47R%2FnDUdxHEGAI2&X-Amz-Signature=90a95e711fb28ffdd265603f60c62b8ed15f703b1b1322f746403771474d2178&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZNI2KO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Tao4y5hrFdh3DcSnPi%2Bfj%2Bc2IvWPj7syd70J5Bzp6AiAdfBknFiiVXIafXVKQFNLfH8S4ThUQP0vfAF99%2FiK8TSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2BtXn61Pgw5YBB1KtwD9MwA2paolkoUFbk2O6UwMP9B0SNkkyFMexpWWqTUYfXl3bjXEdhBv2%2F5%2B0gin7e6nzeR6BbCLgUq%2FsUw5e4WEPern3ZjTysVE%2FI9PWzFl237vjgHqpEHzq%2Bv4UnOPCddpXdPcyRZ%2Fz8PGpytGd2VjpyMcCq6XjfjNf8OIISWLUel0GS2VXiJBIMcQZ7Y%2BObAmYI8ePhgYn3StWMYk8GpcTLd7m2Sy2GdM7zyD9aTsZG3dmCom1DRB%2BlsUz%2BRJZ6UtVwtSCqAEhh4ddOdIeiF6667Wn%2FL7YrG9TqO0DP2yDlFMFrf66s4%2BpQkd%2BNrhvBSJDh5Y5m2TaC7eEuWyLoXUvM0p2qDd52YC2lrj8VxVS0DCyY5wgWXZZt4vpmPDZyQUmh3o0lNlI%2BkNogPf%2F811HuBA5ILMljwyBCl2MTMqJWZj8hQfHAAx0SmzREI0mnxmvgsT5rgC19HDXJWyE0n6Co59sBpUv8EOQPKJ1ibjC8nfnFLbngUhgej%2FlmUE89lLhAcGTdukfQAPdK0EMfhJaegIkebWfPjjeO%2Fcjtb9bwJ9zT1I0dfyODtGim9mtA8Of%2BrJAU0iKaBRq2EBim6zGVDrq84NI6uOyIn%2BnORTkCagMWj0BsM20ZgUwwwqO%2FYvQY6pgEyUYUEKjgbP%2Bx6j1Se%2Fz7shffgr8lgemvvS28gAkIOTj4Pr6hpFlbOXFHRea6OAHmiJqcTNNmDkmDJnegxN29PWobyUQpBRdvgGP7CNfnJqUixXwJ1JkBD44eBoG8wrc07qmbcf2XDzicMg8107HetBXg8p9WpXrE%2Flq%2BfBUpnSYC%2Fue1Ns64ETFiA6NHwdH6KJXre8iRRYCSfS47R%2FnDUdxHEGAI2&X-Amz-Signature=26fd0320c1228b7fefa939b767784b0a81974f62849153e89a5f5ae31870a8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
