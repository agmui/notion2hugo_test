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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FRZ7PB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDga1Ke7kDrgXhBqrxwubGKZC%2B1ZVPbodlSIruASB22sgIhAI6cGud65FES2CQ0psp69MRknYyJOUsoN4dpGLew6%2BFJKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2qFDhDPfZtXjO4r0q3APK317ve8tcqN7pfGLlhHqNDV26i0L2d74ta%2BSqjQ76xQFl7YVRnfDYi%2FDj6q2gvwneElDoLt%2Fvas%2F%2BNf76U4FhL6A17Pq98rsb%2FDMR5WB%2FtKAx8fzFn6b3pQwAv9yTpdP83nvLeRta19nHbd2IBVxLJPMjDJ0VbGWNmsCOSVAzj8PRyCmg4XmQlE%2Fyrbafj4nyXu9ucme9Yf1xf5dcNMsctTC%2BEz%2FoexyldnO4zXhcdz8N5r6kQt2MRf64AZZeY9IuGwKdK1iHgpvmDPPPUcO4DibX0xJ6YlcMZcKjlcjxLhq15qKBteS9fR%2FUIWFp7X4BjraHc0re%2Fb8wSSS2v1Z8HnG%2FSM%2Biurs4k2YD1FEOSbYcUMZE4U5N0F93VXbu4Iq7JdZpFwV7Q%2BUI1zwQVvbj%2Boaa6WNsOcXokPjhYF%2BfiCE1mEI7510fR4XKr89bE9ZIhj87pjvXwSnjqGo6VTYobagSQ4UbG6AL6pWHN03XOOQjl%2FXqN78RgZEW2vVu1C3qXZ8jYUarFLCp%2B0wgHPZ2QyD67yap%2Bs2f8KTArzgbytxQhHCZub%2Btg3mqbS5LU%2B4arPK%2B6NWsFpta26tiwFsVSa%2Fa6uy5VahQMGvq75BpKje8FskzoZA%2BtU94GTD72Ka%2FBjqkAYCc1LtoWCec6hhRFtr8dDj1qTr81twUM61WgO4OJn8%2F4DWkXWoEm%2BjmzejgJ9GAGJT34n1QmNSsyLz37%2B4TOJIpdlrnerT1dfQb73mAmLhAajiEso3ok%2Fn4ElgbNW3Y36niGzsAYXli9JGG2dJGG5qrK3qV6HLPeg%2BWNd1z254irqIOPLL0SxC4B8aJykT0RHMWpLuez6dsYdWIzgycjKu%2Bi2VU&X-Amz-Signature=33c1870639fabfd40d6d7e9cec80136f45d178b2cc8d4db98d46fd989345b30b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FRZ7PB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDga1Ke7kDrgXhBqrxwubGKZC%2B1ZVPbodlSIruASB22sgIhAI6cGud65FES2CQ0psp69MRknYyJOUsoN4dpGLew6%2BFJKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2qFDhDPfZtXjO4r0q3APK317ve8tcqN7pfGLlhHqNDV26i0L2d74ta%2BSqjQ76xQFl7YVRnfDYi%2FDj6q2gvwneElDoLt%2Fvas%2F%2BNf76U4FhL6A17Pq98rsb%2FDMR5WB%2FtKAx8fzFn6b3pQwAv9yTpdP83nvLeRta19nHbd2IBVxLJPMjDJ0VbGWNmsCOSVAzj8PRyCmg4XmQlE%2Fyrbafj4nyXu9ucme9Yf1xf5dcNMsctTC%2BEz%2FoexyldnO4zXhcdz8N5r6kQt2MRf64AZZeY9IuGwKdK1iHgpvmDPPPUcO4DibX0xJ6YlcMZcKjlcjxLhq15qKBteS9fR%2FUIWFp7X4BjraHc0re%2Fb8wSSS2v1Z8HnG%2FSM%2Biurs4k2YD1FEOSbYcUMZE4U5N0F93VXbu4Iq7JdZpFwV7Q%2BUI1zwQVvbj%2Boaa6WNsOcXokPjhYF%2BfiCE1mEI7510fR4XKr89bE9ZIhj87pjvXwSnjqGo6VTYobagSQ4UbG6AL6pWHN03XOOQjl%2FXqN78RgZEW2vVu1C3qXZ8jYUarFLCp%2B0wgHPZ2QyD67yap%2Bs2f8KTArzgbytxQhHCZub%2Btg3mqbS5LU%2B4arPK%2B6NWsFpta26tiwFsVSa%2Fa6uy5VahQMGvq75BpKje8FskzoZA%2BtU94GTD72Ka%2FBjqkAYCc1LtoWCec6hhRFtr8dDj1qTr81twUM61WgO4OJn8%2F4DWkXWoEm%2BjmzejgJ9GAGJT34n1QmNSsyLz37%2B4TOJIpdlrnerT1dfQb73mAmLhAajiEso3ok%2Fn4ElgbNW3Y36niGzsAYXli9JGG2dJGG5qrK3qV6HLPeg%2BWNd1z254irqIOPLL0SxC4B8aJykT0RHMWpLuez6dsYdWIzgycjKu%2Bi2VU&X-Amz-Signature=3bf214663bf2b7bf7bc585253b43a0fb8cf2d581a112315b4b0c71abda1497cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
