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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6F6VLCY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbdliAY1TEVG4FdH2JwBTwPJEkrr58ZoWvd0QHT7AuCgIhANMsuoVlfZ2A2vlrgelU%2BV7j83S2hQ3O%2BTzcEC77ZwAnKv8DCDEQABoMNjM3NDIzMTgzODA1IgzdatfFsm4sTYOGW7oq3AOk5xqAutoszXwHLAe9Sn2uUHRKkuinwAKjA7eNcw1jYquC4P5Qk2XtF15rKFmJO4TkYYclDgWjeA1w7ZWqj%2FzvK%2B%2BKsa%2F1ti0Y2p0rDaE6NZJvrlO3ogEEzVaM2olLBreWbG2fZwc%2B53YRT8j%2BScU6AOu50hgOyvBBs9HAw3BPRHrM%2FgAGBk3AZXoiF43dz%2F2TS%2B04wKq1IiwgCx4NApUimeisbF278GubBJBuypwjdWQhq8H0yAHEts1ffVBr11FsbItb08IguM1eowAqqwX9S1teNg0EJyrdLirxruzqWs7U9O%2FNH1IDZxm2pWpwQ56RyE7W3z1gP14drJoJOtPBsRjUkUP%2BzF%2BpE%2F9x28eeEw70Sb7IbeJ%2FGG%2FdmXOXmPp2zo9h%2BFqAu%2FZK9Xp8wq1TCW4NA1YzNnffw1YKrRJ29ZbCtMcj2OmG2b%2BtDJSx8hCmO70nD3MKOl3YfuJzB9Uy4jBG4P3GbkGn6aawuf5gkfSyBNULf%2BlLAc47szn5NUar7Vpnb6M4aBGHj5RYBl0msUfg2ZxdoK45%2FXe%2BpmzbfVHsjjxLaMX4JEgJ5oRyZ6aUSQ%2BC7UeJtw8UbiEO96kKsOLwGIG1vxVx8cW1o23b2Xto7OF00U5CtHMY9jC%2B3tu%2BBjqkARSQe0yl4myXyfS%2FXZKbQsklCCfiQbCk9MNg882%2BPWz2sA31Odej%2Fwxu8iPAYf64B51JCpTooanQLRvv95M5BjjTLPaN5o8ekl0FLbELMhFqU9dNE0fbNEvFKmpluggNJHGpGfu4GlvdLo6LHhuvNI1CLuW5r%2B9sMXyPJJ2z8EiR7FjiiVqVImNmvYRphFg83bpJwnEHwLm330%2BTERCQATEOh8UG&X-Amz-Signature=f88a0c2605d9bad0a570f0f88cde687d2eb1bb38c0d13a1c071faab5a781c245&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6F6VLCY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbdliAY1TEVG4FdH2JwBTwPJEkrr58ZoWvd0QHT7AuCgIhANMsuoVlfZ2A2vlrgelU%2BV7j83S2hQ3O%2BTzcEC77ZwAnKv8DCDEQABoMNjM3NDIzMTgzODA1IgzdatfFsm4sTYOGW7oq3AOk5xqAutoszXwHLAe9Sn2uUHRKkuinwAKjA7eNcw1jYquC4P5Qk2XtF15rKFmJO4TkYYclDgWjeA1w7ZWqj%2FzvK%2B%2BKsa%2F1ti0Y2p0rDaE6NZJvrlO3ogEEzVaM2olLBreWbG2fZwc%2B53YRT8j%2BScU6AOu50hgOyvBBs9HAw3BPRHrM%2FgAGBk3AZXoiF43dz%2F2TS%2B04wKq1IiwgCx4NApUimeisbF278GubBJBuypwjdWQhq8H0yAHEts1ffVBr11FsbItb08IguM1eowAqqwX9S1teNg0EJyrdLirxruzqWs7U9O%2FNH1IDZxm2pWpwQ56RyE7W3z1gP14drJoJOtPBsRjUkUP%2BzF%2BpE%2F9x28eeEw70Sb7IbeJ%2FGG%2FdmXOXmPp2zo9h%2BFqAu%2FZK9Xp8wq1TCW4NA1YzNnffw1YKrRJ29ZbCtMcj2OmG2b%2BtDJSx8hCmO70nD3MKOl3YfuJzB9Uy4jBG4P3GbkGn6aawuf5gkfSyBNULf%2BlLAc47szn5NUar7Vpnb6M4aBGHj5RYBl0msUfg2ZxdoK45%2FXe%2BpmzbfVHsjjxLaMX4JEgJ5oRyZ6aUSQ%2BC7UeJtw8UbiEO96kKsOLwGIG1vxVx8cW1o23b2Xto7OF00U5CtHMY9jC%2B3tu%2BBjqkARSQe0yl4myXyfS%2FXZKbQsklCCfiQbCk9MNg882%2BPWz2sA31Odej%2Fwxu8iPAYf64B51JCpTooanQLRvv95M5BjjTLPaN5o8ekl0FLbELMhFqU9dNE0fbNEvFKmpluggNJHGpGfu4GlvdLo6LHhuvNI1CLuW5r%2B9sMXyPJJ2z8EiR7FjiiVqVImNmvYRphFg83bpJwnEHwLm330%2BTERCQATEOh8UG&X-Amz-Signature=f4e1d783e0df17dfc36bfff50577e11c5014791156fec17df7294520653d2c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
