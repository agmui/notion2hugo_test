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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF7FWJP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFSab4Ad1ktS%2BsJIpJG2NovGjDrFer%2Fzrc%2BMB9ot%2Bu0xAiEArSU0Qhndy5%2FLWeW3p1b9i4LVK8jRYTWZapsw4jpugigq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNNE3U7a8g2sVBKHaircA9BTTpQy7hYlmWGmgzUyKwNazUeHU%2BHmA93k%2BKlKOc4%2BJOS8o6OtE7tl6maPFnJWUGOjcAFtkXbuI%2F5WPBDCBPYiwXLej7MIhp6EA7zJ2Ws29NcGIwBJtCC74FLfs3QdIwLjnLA0gc%2BDmjV06rCSWGIRZDTHTXH2MF3uVw9jWZMGaI1VhFnnWlYqOZO0a3F4TzgCjBnqZQik9yrnAV4G6QxrRh8AvNLF6aIyPzp3oV76LJq4PTIUUj1ZOImwEA9Oi8uIFExI%2FGMuThnAbF4LXcKQYvHQ7HECzCgMPgAbzj5XuVb%2F2ph1XcEayhQpadXg3dyIYTo82mEDAZKaAthblkC3%2BaESniot1Ediun7%2FqHL%2Bv0ej5mF4%2F3muXgl1gpwBKGMXsUHRRMJUKofmGyb%2BCn7iWPrtHxXwOaxfv5v3uG0o9wMYebNO%2BRgBD4BiLSeES89e5SgdlNRLkOZxqACYNxF6b3IF0JbM36Z9LHmHz%2BwnHZfQQwtHrktBksHNESBnd5YP0s3taRGterJPlwwOQjqq4c2E4b94qjzmR5m0ueAgyJ7jPGhcCk2BDIw4fqwbKU%2B2oDVi%2FPSLez1xUzMcqss4QHwnzhjyr31f5CRKD9UO8vb4fTymKuLS8L3sMNLEhsIGOqUBt61YCznXXkI6k4mibTGunoXH2kKN%2F95a419g2YlGYeyQV8s13HWdL8PlRgvPOiBHmJ2f7lWBrd%2FuSYQL3gs87soc%2FzRY7Ew7WdJPXa6Zsz1mRwj%2BrNJjG9nYKyiTjmjna48KD%2Fs3F5UQq%2F6QEwY61RCrQnt0PtXloxtul%2BnhDV09aYdoNBlMaGnpmvG%2FPeEn25ddVHQo8W%2FKrJoLhuXHZHSH2SWj&X-Amz-Signature=d314bad88928764650206aa97d892148b117040c79899370a85ba1dcc0d63e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF7FWJP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFSab4Ad1ktS%2BsJIpJG2NovGjDrFer%2Fzrc%2BMB9ot%2Bu0xAiEArSU0Qhndy5%2FLWeW3p1b9i4LVK8jRYTWZapsw4jpugigq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNNE3U7a8g2sVBKHaircA9BTTpQy7hYlmWGmgzUyKwNazUeHU%2BHmA93k%2BKlKOc4%2BJOS8o6OtE7tl6maPFnJWUGOjcAFtkXbuI%2F5WPBDCBPYiwXLej7MIhp6EA7zJ2Ws29NcGIwBJtCC74FLfs3QdIwLjnLA0gc%2BDmjV06rCSWGIRZDTHTXH2MF3uVw9jWZMGaI1VhFnnWlYqOZO0a3F4TzgCjBnqZQik9yrnAV4G6QxrRh8AvNLF6aIyPzp3oV76LJq4PTIUUj1ZOImwEA9Oi8uIFExI%2FGMuThnAbF4LXcKQYvHQ7HECzCgMPgAbzj5XuVb%2F2ph1XcEayhQpadXg3dyIYTo82mEDAZKaAthblkC3%2BaESniot1Ediun7%2FqHL%2Bv0ej5mF4%2F3muXgl1gpwBKGMXsUHRRMJUKofmGyb%2BCn7iWPrtHxXwOaxfv5v3uG0o9wMYebNO%2BRgBD4BiLSeES89e5SgdlNRLkOZxqACYNxF6b3IF0JbM36Z9LHmHz%2BwnHZfQQwtHrktBksHNESBnd5YP0s3taRGterJPlwwOQjqq4c2E4b94qjzmR5m0ueAgyJ7jPGhcCk2BDIw4fqwbKU%2B2oDVi%2FPSLez1xUzMcqss4QHwnzhjyr31f5CRKD9UO8vb4fTymKuLS8L3sMNLEhsIGOqUBt61YCznXXkI6k4mibTGunoXH2kKN%2F95a419g2YlGYeyQV8s13HWdL8PlRgvPOiBHmJ2f7lWBrd%2FuSYQL3gs87soc%2FzRY7Ew7WdJPXa6Zsz1mRwj%2BrNJjG9nYKyiTjmjna48KD%2Fs3F5UQq%2F6QEwY61RCrQnt0PtXloxtul%2BnhDV09aYdoNBlMaGnpmvG%2FPeEn25ddVHQo8W%2FKrJoLhuXHZHSH2SWj&X-Amz-Signature=3064399a3d046ad664d74e3b5dc9f246db0389a411db1ccc8f04073769d67628&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
