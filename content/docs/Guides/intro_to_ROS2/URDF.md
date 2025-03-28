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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDP4WJRM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWqqf1wgrUPnD2jHTJ3W3CqY9WdrFEY8yWofii9cJTGwIgF5uQXFqN9dlYEVrjnfqvygJt4hVZ14Pci3OU0CgOXQ0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPk%2BqZhVo5mqZFCa1CrcAwJ6TMHZMJeCM7uR%2BE%2FTIIuP0acTvCLLoBa%2BZdpci5nubtWZtCKfthTn%2F0e6DUeLBnZm%2B8PaYTaCADwHr2PwFWT%2B3ZHQu%2B9n2KjOr6l7%2FtKvQuGH6kZ8a%2F%2FqaLGRW8tfk2A2TjmEiLYuRSvAyy3kqX73Qs2dxGyzQrWY2furpwRTAm%2F8gsgzZoz26PcEBRWqC2XUqIlPTPYzdFabqJZI5O7G3G7WMmRE5rSPgsKgmO22Shm2SBjxCBFDf4mYGgg1imX0up%2Bnvgxi458QRQdUu0mj%2FeqiFl5G%2Bw8EY3E7ePJHaVym3vtf7hgPuGa6b8Rp6mZzuGQ3%2BlDJXZprtIaFLvO%2FTO9JJBdV9t7LDfztphL8%2BxoAcZJJHFaiewjcfWcXi%2Bxa4c7zMgwN3sNZ9fe92VE0%2F%2Ff7Hs7WtxNAjSkj3Fv%2BsXsvHucYDIminSDj8TIanRmWjCG6XFnA3jmbAgCJhDriFRuKcimI56NIJ%2FRCBOhpypNFNz4QlneLSol9arJ4s%2FU67TgeX56gGuovqZZbboXYVSwZV8Z8FlZkEBwk4jsvt%2BJBIqa7EgPsvJby3%2FgBRK0ar8H46k24avXcvSl0eS8wit4F27qPxzFCPMHCLIs01NBeVZhWVSWUyYfjMMu%2Fm78GOqUBkq5RggDGYAQSGGFF7MSd8SpXWwk%2BehT3aOB7Qfseuws%2Fgs22oSWGtwjpZKYF9WWnlZ8c2o483tRFq8g%2B7%2B51EhzHZ4C3I5XbaMEVfDYkH5pIgQ6tkykEVixcA7XPWV7Lj0P7OHMgN%2FrR04oZALaP9bEuVxLws2zSCgDbgkU2i3fA%2F2%2Fe9yKmsLfflqQG5FFecLeBl8sbFlvIUMfMsHZNQe5pHk%2FV&X-Amz-Signature=88b707bc74569a2f6119017254523bb5ed4a00d88c7475b7cf3107865eecc404&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDP4WJRM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWqqf1wgrUPnD2jHTJ3W3CqY9WdrFEY8yWofii9cJTGwIgF5uQXFqN9dlYEVrjnfqvygJt4hVZ14Pci3OU0CgOXQ0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPk%2BqZhVo5mqZFCa1CrcAwJ6TMHZMJeCM7uR%2BE%2FTIIuP0acTvCLLoBa%2BZdpci5nubtWZtCKfthTn%2F0e6DUeLBnZm%2B8PaYTaCADwHr2PwFWT%2B3ZHQu%2B9n2KjOr6l7%2FtKvQuGH6kZ8a%2F%2FqaLGRW8tfk2A2TjmEiLYuRSvAyy3kqX73Qs2dxGyzQrWY2furpwRTAm%2F8gsgzZoz26PcEBRWqC2XUqIlPTPYzdFabqJZI5O7G3G7WMmRE5rSPgsKgmO22Shm2SBjxCBFDf4mYGgg1imX0up%2Bnvgxi458QRQdUu0mj%2FeqiFl5G%2Bw8EY3E7ePJHaVym3vtf7hgPuGa6b8Rp6mZzuGQ3%2BlDJXZprtIaFLvO%2FTO9JJBdV9t7LDfztphL8%2BxoAcZJJHFaiewjcfWcXi%2Bxa4c7zMgwN3sNZ9fe92VE0%2F%2Ff7Hs7WtxNAjSkj3Fv%2BsXsvHucYDIminSDj8TIanRmWjCG6XFnA3jmbAgCJhDriFRuKcimI56NIJ%2FRCBOhpypNFNz4QlneLSol9arJ4s%2FU67TgeX56gGuovqZZbboXYVSwZV8Z8FlZkEBwk4jsvt%2BJBIqa7EgPsvJby3%2FgBRK0ar8H46k24avXcvSl0eS8wit4F27qPxzFCPMHCLIs01NBeVZhWVSWUyYfjMMu%2Fm78GOqUBkq5RggDGYAQSGGFF7MSd8SpXWwk%2BehT3aOB7Qfseuws%2Fgs22oSWGtwjpZKYF9WWnlZ8c2o483tRFq8g%2B7%2B51EhzHZ4C3I5XbaMEVfDYkH5pIgQ6tkykEVixcA7XPWV7Lj0P7OHMgN%2FrR04oZALaP9bEuVxLws2zSCgDbgkU2i3fA%2F2%2Fe9yKmsLfflqQG5FFecLeBl8sbFlvIUMfMsHZNQe5pHk%2FV&X-Amz-Signature=4a38751c787ff09cfb1407428f5ae2d2b87e0fd8a9ec06c0834ca0248616e2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
