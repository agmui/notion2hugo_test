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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNUT4W7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3QDOT8%2FBRnvkhGmlWA6kCVuGTJd40TlPSZo3Gnto2TAiBdBRERPt8B5GQEOrpj6GjsP%2F1tCp8x89H27pic7wEy3SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuh4jbtmDe5yLMPUVKtwDAFZ1T9fS1apzIwcEsHoKezqoBFMTSMAlS8Q8lzWz7qVIr2xEBDCsG4H8d1EQ6JA7uiOve%2BYgB3yHpMkVPz8Gl6U4AWZFmY1Icn0wRLzUu%2FkfkmlZGuuGrphTYC9I2M6ZHKEfAmtMB0g8MoTmYVQtFMs9fih%2BF1HZnF3UdxqaVQyx3txnPR%2BSlJw%2BoQMFdpkyEOUD5Mn9yYFV2zQUH8J49loXea2lFy9sp5GZMt2oCzkBMf1nXD5bUV22u39HNPh4tY8SR%2FHSsjC%2BCyt%2BY%2BC8vL1bUHpXm01Os%2B3%2FibvDQoEP50uZmUgUX%2BlWqKb535%2BdhpuCVAhvqEAo2ezB%2FNYfNar8bH5UaXryIAmPPIkMsgv7jLuklCxOx8gKSeARt9MKYDJGU0c2KmoDIIASh8ziq7NtLa23sO0HWCSUpBTQExumPIj8ZtJVDijQS1uc8ijE7gCGZJu6Jndwhu7l4I%2B3xeFaQZCVvrnvyP%2BE9wreM9YxLmOgv5D7Qk7AWQTw61R7CC4QMvkpWUJNrq68S2KVsMtoNeJqK%2FM%2F18YBFw1eO8Mc7VyHisAkzNlngXqRYovQwBBJkEN5B07OMn209x4nUZ4hhVdEN7wTabunvReDEbVd4MBysACm%2BmfykCQwjJSGwwY6pgHcmjwXO%2FxXUuNku793yzvkNdVFZP7m9ZWiNSm8ad%2Bk5kFogqrVs4zzxD8wZVadnAftLL1I0wPGhxkMkihn7ISNwdhI4pY3B%2BPfiQBgjdERjfcTyvwFL1r%2B%2F3ZTGGOS%2BMvwPx79toHOY9boUPMVspZKoBVxBxsskQr7Y1gfKSDL5p81Xl0lkVbnezSFwlPBdnvK4Dr5VW8g%2BYb4kUzawBzMYSYHVUTv&X-Amz-Signature=8300d10c1b8b0b2f8dfd688deea6ae1526b55e6659584a851adde17a312d73b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNUT4W7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3QDOT8%2FBRnvkhGmlWA6kCVuGTJd40TlPSZo3Gnto2TAiBdBRERPt8B5GQEOrpj6GjsP%2F1tCp8x89H27pic7wEy3SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuh4jbtmDe5yLMPUVKtwDAFZ1T9fS1apzIwcEsHoKezqoBFMTSMAlS8Q8lzWz7qVIr2xEBDCsG4H8d1EQ6JA7uiOve%2BYgB3yHpMkVPz8Gl6U4AWZFmY1Icn0wRLzUu%2FkfkmlZGuuGrphTYC9I2M6ZHKEfAmtMB0g8MoTmYVQtFMs9fih%2BF1HZnF3UdxqaVQyx3txnPR%2BSlJw%2BoQMFdpkyEOUD5Mn9yYFV2zQUH8J49loXea2lFy9sp5GZMt2oCzkBMf1nXD5bUV22u39HNPh4tY8SR%2FHSsjC%2BCyt%2BY%2BC8vL1bUHpXm01Os%2B3%2FibvDQoEP50uZmUgUX%2BlWqKb535%2BdhpuCVAhvqEAo2ezB%2FNYfNar8bH5UaXryIAmPPIkMsgv7jLuklCxOx8gKSeARt9MKYDJGU0c2KmoDIIASh8ziq7NtLa23sO0HWCSUpBTQExumPIj8ZtJVDijQS1uc8ijE7gCGZJu6Jndwhu7l4I%2B3xeFaQZCVvrnvyP%2BE9wreM9YxLmOgv5D7Qk7AWQTw61R7CC4QMvkpWUJNrq68S2KVsMtoNeJqK%2FM%2F18YBFw1eO8Mc7VyHisAkzNlngXqRYovQwBBJkEN5B07OMn209x4nUZ4hhVdEN7wTabunvReDEbVd4MBysACm%2BmfykCQwjJSGwwY6pgHcmjwXO%2FxXUuNku793yzvkNdVFZP7m9ZWiNSm8ad%2Bk5kFogqrVs4zzxD8wZVadnAftLL1I0wPGhxkMkihn7ISNwdhI4pY3B%2BPfiQBgjdERjfcTyvwFL1r%2B%2F3ZTGGOS%2BMvwPx79toHOY9boUPMVspZKoBVxBxsskQr7Y1gfKSDL5p81Xl0lkVbnezSFwlPBdnvK4Dr5VW8g%2BYb4kUzawBzMYSYHVUTv&X-Amz-Signature=4a65f4468ca71cc916ec3f458defa8efc0b79f906114d0bdf2c99c8109c00cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
