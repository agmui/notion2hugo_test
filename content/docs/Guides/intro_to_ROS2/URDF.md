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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4PYMTE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDU%2BVRuFQ5kR7vbyIGW4YxMJqdn7wCAPK5oUSjr%2Fx80OwIhAKaFgWNLvPcsCvScf8rUy%2B65aHd1I0D4542co6kSCiZTKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCh6XxAbhPx8locuUq3AMFuafwHgVykHyJFrsWUcTJuJ9KOAEv6o%2FOBTN1ItR1r%2Fz0IHz03TsOUx3Al4gVzE20Q0rFd84ok2wpTqYGPEpopL7XVUP3lLDFO%2BKD4dSwmAu%2BnnBPe%2F%2FxqB2Jwr5PzJF90WmxIuMIjkFyDymdOSR1cXrBjqjIWQek1pQPuzv2QKy%2BLwJ4MZuZQHPh%2Fwm0mdqhWFis8d4BbBCQFeEwCZ3r4QMJ6rkmT4CkI1FWPtCUDdI9yapx4eXIhctnqvyuI%2BIlYQVjvW4glvtAzMBgYOr8YWiucbMUQ77MEYY%2BIkLwPq4QN4ycbI6wY4%2Fl0Puw42ls97jF22Fj1087er0Z0M4YRoAbVdeEmseLhPhoZ3%2FaWmbGc25I%2FzMC7Oxz3Y5wBz7HghIOOSs0jMzZhIG5f7Nc5SzJ%2B0vgCXBYCJcf8sbDvX%2F%2Bz7Tx4rupPhAnfNRDd%2F64OoqLZK%2F%2F%2B4WCpxubpQOgsqSWxk9iN8tfhJNitfse5nJWkwBIOsgJOKQkKpdIV%2BQCBOcUzShvj1O3lW0zwwUe5ZkyBhKk2zplggdGlhhbJmA47ciQibbbk1fsBJquhOc4cyIyCKwbauVF2yhjsbFAj7si1Mu4rpt%2Fcfet5tS8219MpJ4n88RIY0UdIjCUgvG%2FBjqkAV9byCyGxkofbNUGtOg5bIc9RjUEV9M6uZlud5ijJ2Qv75Q%2FJM2QVInUq8L6E26zIhAM6L1icksic2jkY4Si9xEzHMOuB7Gj9vXxmNgXJUMZ8OYDk0Q7bQ%2BsBGwm0gzNSMpEZrm3ITbS1HEEMEk348m8qEsXs%2FP0KIJLR4ElUeSLnaqPleca7PwIJ1a8cQcYCOX%2FNlQ6uSgNjMFQjaJdweciv3mQ&X-Amz-Signature=6072c2769e81e895b77fd7f8bd167f3f4355c74d71de29d08441beaed63e8e17&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4PYMTE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDU%2BVRuFQ5kR7vbyIGW4YxMJqdn7wCAPK5oUSjr%2Fx80OwIhAKaFgWNLvPcsCvScf8rUy%2B65aHd1I0D4542co6kSCiZTKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCh6XxAbhPx8locuUq3AMFuafwHgVykHyJFrsWUcTJuJ9KOAEv6o%2FOBTN1ItR1r%2Fz0IHz03TsOUx3Al4gVzE20Q0rFd84ok2wpTqYGPEpopL7XVUP3lLDFO%2BKD4dSwmAu%2BnnBPe%2F%2FxqB2Jwr5PzJF90WmxIuMIjkFyDymdOSR1cXrBjqjIWQek1pQPuzv2QKy%2BLwJ4MZuZQHPh%2Fwm0mdqhWFis8d4BbBCQFeEwCZ3r4QMJ6rkmT4CkI1FWPtCUDdI9yapx4eXIhctnqvyuI%2BIlYQVjvW4glvtAzMBgYOr8YWiucbMUQ77MEYY%2BIkLwPq4QN4ycbI6wY4%2Fl0Puw42ls97jF22Fj1087er0Z0M4YRoAbVdeEmseLhPhoZ3%2FaWmbGc25I%2FzMC7Oxz3Y5wBz7HghIOOSs0jMzZhIG5f7Nc5SzJ%2B0vgCXBYCJcf8sbDvX%2F%2Bz7Tx4rupPhAnfNRDd%2F64OoqLZK%2F%2F%2B4WCpxubpQOgsqSWxk9iN8tfhJNitfse5nJWkwBIOsgJOKQkKpdIV%2BQCBOcUzShvj1O3lW0zwwUe5ZkyBhKk2zplggdGlhhbJmA47ciQibbbk1fsBJquhOc4cyIyCKwbauVF2yhjsbFAj7si1Mu4rpt%2Fcfet5tS8219MpJ4n88RIY0UdIjCUgvG%2FBjqkAV9byCyGxkofbNUGtOg5bIc9RjUEV9M6uZlud5ijJ2Qv75Q%2FJM2QVInUq8L6E26zIhAM6L1icksic2jkY4Si9xEzHMOuB7Gj9vXxmNgXJUMZ8OYDk0Q7bQ%2BsBGwm0gzNSMpEZrm3ITbS1HEEMEk348m8qEsXs%2FP0KIJLR4ElUeSLnaqPleca7PwIJ1a8cQcYCOX%2FNlQ6uSgNjMFQjaJdweciv3mQ&X-Amz-Signature=cbe3879c0907688b9dec5f965b231563b96fca4f0b72ea5ade611c94b4ea4961&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
