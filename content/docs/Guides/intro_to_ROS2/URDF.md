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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORIK64S%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDbJ0%2F%2BWpLOKl1A9FRfv0Eb6mH0PXdA7Zvv2%2FEax1QtUAiBNSeUoip6TmnomiqR2p4t1xXgajGzFedzoPhrPr8%2FuKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEJ%2BuXqstPsXG0rPtKtwDTtaxeqUvTmsSmbuyFYoN6R90rM47LJLkmnfeQEoyXangwXSCHX5fQpeCYhd1vt3%2B2S2z1vJ57Ujxnxh0k0MN354DJE647hv0wzFOuKSFLyPPhtk7yu1WpqvNyOcfkbeec98%2BFSkWougZ%2BBje6ehd1%2BAmmP1TkcX%2FiZY7SVvTy8%2Fo%2BBxpKnPjUOolgtCH%2F%2B%2F017Rfg%2BJm3OJBInmyxuLGjEa3AkijQ3eKHjFNqE8HS9Ob0LwKTDeeoAIKJKN349on50tho5zd119OOyv7jmOOxtVI24NDKTBIFXz5Eis1n5Z9uX5MJCR09cu5tUQGEu02%2F2bcfcwBDnBNlbbh7dUP%2FRgfy%2F9z4I0e2zola36nvfGb3IktSDcPNTXpwC0tA%2BUA0If9Zv%2B9nFPKe0mw8yQdwG8XFshUhtRF7qUdvvttvP5ZI2tpZ%2BI1WDZFI9hZTIpKsY0FxLdgyHhsN%2BmYCh5kRUsCV3D2pbPh3h7SBJye2zMOwjGNpCHchs78HQQG%2FetCV5tEChb%2BRmb6TSOdZLuY9T0oym%2FiFc7mlcPjySHUGDa9cxhg1AG4LmrmLZujMyDz7fSOcC9w0EdLJgm2EiCn9xGkbesx%2BsY2vsYuGO0JyB57%2FMAtVOKwFBeWs3cw8IadvQY6pgGdtL3OndQz1NXmyzkgOqIaYKojNpKSxTPWrJpBLPSihJA0Ol5DXXG0aG2pn1fQV7MH%2FXPWJWJQURXaxGPdnpUid%2FhlI9SmkhVixmz982PDUTCewC5%2BywFHcz33cU4VLzK8R6eXzB5Rvb0JtRIcLhqshCEuyzAPVxvQD10r8fH4qmg8%2Fq9coDFwfWNAw%2FsnlREnLDDS0NrJ06FPXHssf0MFMmzyK7V1&X-Amz-Signature=9fb33e531f9fd25901a2d7995159cbb5ac3aa48bb1a7adf276df60e1f525970f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORIK64S%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDbJ0%2F%2BWpLOKl1A9FRfv0Eb6mH0PXdA7Zvv2%2FEax1QtUAiBNSeUoip6TmnomiqR2p4t1xXgajGzFedzoPhrPr8%2FuKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEJ%2BuXqstPsXG0rPtKtwDTtaxeqUvTmsSmbuyFYoN6R90rM47LJLkmnfeQEoyXangwXSCHX5fQpeCYhd1vt3%2B2S2z1vJ57Ujxnxh0k0MN354DJE647hv0wzFOuKSFLyPPhtk7yu1WpqvNyOcfkbeec98%2BFSkWougZ%2BBje6ehd1%2BAmmP1TkcX%2FiZY7SVvTy8%2Fo%2BBxpKnPjUOolgtCH%2F%2B%2F017Rfg%2BJm3OJBInmyxuLGjEa3AkijQ3eKHjFNqE8HS9Ob0LwKTDeeoAIKJKN349on50tho5zd119OOyv7jmOOxtVI24NDKTBIFXz5Eis1n5Z9uX5MJCR09cu5tUQGEu02%2F2bcfcwBDnBNlbbh7dUP%2FRgfy%2F9z4I0e2zola36nvfGb3IktSDcPNTXpwC0tA%2BUA0If9Zv%2B9nFPKe0mw8yQdwG8XFshUhtRF7qUdvvttvP5ZI2tpZ%2BI1WDZFI9hZTIpKsY0FxLdgyHhsN%2BmYCh5kRUsCV3D2pbPh3h7SBJye2zMOwjGNpCHchs78HQQG%2FetCV5tEChb%2BRmb6TSOdZLuY9T0oym%2FiFc7mlcPjySHUGDa9cxhg1AG4LmrmLZujMyDz7fSOcC9w0EdLJgm2EiCn9xGkbesx%2BsY2vsYuGO0JyB57%2FMAtVOKwFBeWs3cw8IadvQY6pgGdtL3OndQz1NXmyzkgOqIaYKojNpKSxTPWrJpBLPSihJA0Ol5DXXG0aG2pn1fQV7MH%2FXPWJWJQURXaxGPdnpUid%2FhlI9SmkhVixmz982PDUTCewC5%2BywFHcz33cU4VLzK8R6eXzB5Rvb0JtRIcLhqshCEuyzAPVxvQD10r8fH4qmg8%2Fq9coDFwfWNAw%2FsnlREnLDDS0NrJ06FPXHssf0MFMmzyK7V1&X-Amz-Signature=ab1bc5c6a63a36e09d2075cd5e65fc0e5e5ec5700c9976643bb6f7d68256b3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
