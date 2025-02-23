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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DZSLEO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoI%2FJd5Dja64w00AejmORS0oolCB5tqULjgSBek6%2FfXQIgXHWrQZhnmuTGZYuNqm0zUCGfBXLPS1f%2B37rGXQccjYYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG%2FOzNEo%2B9lSiR4eACrcA9AVxrINbyPhBGKeWsInxWhx9GZdgJGPvEsUs%2FsigRsACsvFQ3m85gATUMskYzQjaNvf4PtCZoDfieB1l9qbE3AHEMGQJv%2B2%2BveQYe3c%2BNzljAbP0zJ6CtDBRqclOiYDsKbA2Hzulh6awwn5MK3p7zado4pzhdiGafofcMQCQaFZT7EPAYsm3l6QF1t2vC8d46yMoqYZmW4ccHn%2Fe1sdKwPVDBKeapBPUc6ZTY33K%2FvV3tpi5Bd6aTjwssRdc69gGasL0d%2Fxx5A%2BqG08tNyLNXKASV6%2FQKOa0uwlKDw0tRFZaUTSeSiuPhC1YBrdGvHOz7kQriuZKOKP3%2BL%2FrxOFQtAeJglTVqYQzM48j74cFteeL7kulnyTl1xPxRYfi0C1ts34t4x343I4%2BCYMyn3qqSMFDLLQrX6s9FwJzRWHaxOd%2FwSi539FWH87FCkPhoUnP%2FzOpkJjuKCWweqHqpwqFxP3PCKNTpoy%2Bag%2BHINXSmYBTa%2BbCC2REQizqCbTKajJLOpDJnUQ%2BTcopOKVMw4GHdtYZTPgpDkItebHB7PiB6ge2HTaKCe4DtkX75H4G%2ByXfvkN1PFc4giLX4s1xxlCJL01%2F%2F1XWuNLo2uVEp%2FuaAxaydfTBWKSIhNlfimsMPjL7L0GOqUBKU7LEhdyP9ObHet4KD9Bcnsht8BmklgQcMGQ8k0Zjlwfj1TpXSbBrDDT2j6hV40cVAz7NrhafRwpFXAT7nDQdCSyRtJMXDQ6RkAoO12KncWlS8ECGBpe2IbxuL1eRJ3N8S99k2rAjSZDhW7SnmAYfw85XtwEnQ%2BQQcDUkPLF6ogLkNkasuYcrv4%2Bq65zruvpUnwTLKpZUTmN%2BP%2FzEH7oQktN1%2BRn&X-Amz-Signature=ea4b32df8b07a45c37e033016272e7023c2d8b6cd1f7c7149cc38e345b0fa562&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DZSLEO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoI%2FJd5Dja64w00AejmORS0oolCB5tqULjgSBek6%2FfXQIgXHWrQZhnmuTGZYuNqm0zUCGfBXLPS1f%2B37rGXQccjYYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG%2FOzNEo%2B9lSiR4eACrcA9AVxrINbyPhBGKeWsInxWhx9GZdgJGPvEsUs%2FsigRsACsvFQ3m85gATUMskYzQjaNvf4PtCZoDfieB1l9qbE3AHEMGQJv%2B2%2BveQYe3c%2BNzljAbP0zJ6CtDBRqclOiYDsKbA2Hzulh6awwn5MK3p7zado4pzhdiGafofcMQCQaFZT7EPAYsm3l6QF1t2vC8d46yMoqYZmW4ccHn%2Fe1sdKwPVDBKeapBPUc6ZTY33K%2FvV3tpi5Bd6aTjwssRdc69gGasL0d%2Fxx5A%2BqG08tNyLNXKASV6%2FQKOa0uwlKDw0tRFZaUTSeSiuPhC1YBrdGvHOz7kQriuZKOKP3%2BL%2FrxOFQtAeJglTVqYQzM48j74cFteeL7kulnyTl1xPxRYfi0C1ts34t4x343I4%2BCYMyn3qqSMFDLLQrX6s9FwJzRWHaxOd%2FwSi539FWH87FCkPhoUnP%2FzOpkJjuKCWweqHqpwqFxP3PCKNTpoy%2Bag%2BHINXSmYBTa%2BbCC2REQizqCbTKajJLOpDJnUQ%2BTcopOKVMw4GHdtYZTPgpDkItebHB7PiB6ge2HTaKCe4DtkX75H4G%2ByXfvkN1PFc4giLX4s1xxlCJL01%2F%2F1XWuNLo2uVEp%2FuaAxaydfTBWKSIhNlfimsMPjL7L0GOqUBKU7LEhdyP9ObHet4KD9Bcnsht8BmklgQcMGQ8k0Zjlwfj1TpXSbBrDDT2j6hV40cVAz7NrhafRwpFXAT7nDQdCSyRtJMXDQ6RkAoO12KncWlS8ECGBpe2IbxuL1eRJ3N8S99k2rAjSZDhW7SnmAYfw85XtwEnQ%2BQQcDUkPLF6ogLkNkasuYcrv4%2Bq65zruvpUnwTLKpZUTmN%2BP%2FzEH7oQktN1%2BRn&X-Amz-Signature=93b64e3bbf453c45612bd770a6972c96cb30e8956d0b10c657a693f796da2b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
