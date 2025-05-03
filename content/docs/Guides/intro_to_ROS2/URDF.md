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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSZ7MY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCU4WsC%2FkwxJAajqGZWoj708wnOlg738mkwkMDA7%2FwjgAIhAK%2FskYnOpcWCtkv7XYKyZG7HxVQsarTQDLaWnd8Z%2Bh1CKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxFkCh30TUJxv0gbsq3ANUFM5PiEluYv4p4cp7HnAFunnGPb83gOB5W4M3t%2B7UaIemM6ZRaCmNc4xLTacOzho%2B16wXLPeN32yaBm6oWiwWElYNvdUx6KV92VIbCgPV4jb%2Bs4IWCzAiI3ild4U%2FB3C%2FqzhAUH2dMFacsRrH6Rtbiu1C6B8HtHBm6UV5Kb4jZOEsKtrzpJb8hlddjFJsq%2FteI2HAcRy8VPxnrLQ65ngEW4a53kF5Z27ZcS%2Fp1XDdjjIYJXgMFkJ%2Fvaqba%2FySeG%2BzTzOhL1f1B18vE8n3%2BsG244MRubDfVzoe4jn%2B9tc5PKutKCmjbOBRYcBS8oWrITtcHOyZYCBO0Kt486IpWs4Npd2Qr2eUJJZBuQlZCDENaRsmr3kHSrjMYEy%2ByfbmGlbJLFumPBQ5bVmP8cwbWqgiElwnX3n8%2BwNh3vrq7IL%2FbPkXGH41m8TqtyoRscvxKtO0NvAM%2BAlbw7Ch3M0WZdRSTShD7tEtfoeQ3V9UwV8ZLEh98EodZUSQmzo3xxD1LYc%2BsXA8xl6%2FWaPuGVirtx0Jw2bN2B5mzzdpLHfteVUj3f17qfYsFKlauDWtScLrheTvJctDiVL8rPx1BShgnUxAeCp2L7pfTu3qQKbfwC%2B%2F%2FxgNzKtLhnw7hd8XQzDI2tnABjqkAS03UMUvMy%2Bj6xJk3P8v2CYlXi17D1bjKKIzUi61hWKY3Pie76K%2B8gcHKyZhzSr1uUtaoLCC4w2jJgF%2F133cSi%2BQc8NHxjf8e7tq%2FqsLW0jvymOx45Soji9JcmlVEQOlINddv0YNXCcG1KyTfSq671xutdK5bey%2BBC3U%2BmICjOKapRY843BCyTiatfF7Xm1ZEyQccHw7maGf6DkJN6KiThpRuqDZ&X-Amz-Signature=d67f2f7f464aea65c7cca2f70e72a548bdd5c44279dfaf15aa363bf74776985c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSZ7MY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCU4WsC%2FkwxJAajqGZWoj708wnOlg738mkwkMDA7%2FwjgAIhAK%2FskYnOpcWCtkv7XYKyZG7HxVQsarTQDLaWnd8Z%2Bh1CKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxFkCh30TUJxv0gbsq3ANUFM5PiEluYv4p4cp7HnAFunnGPb83gOB5W4M3t%2B7UaIemM6ZRaCmNc4xLTacOzho%2B16wXLPeN32yaBm6oWiwWElYNvdUx6KV92VIbCgPV4jb%2Bs4IWCzAiI3ild4U%2FB3C%2FqzhAUH2dMFacsRrH6Rtbiu1C6B8HtHBm6UV5Kb4jZOEsKtrzpJb8hlddjFJsq%2FteI2HAcRy8VPxnrLQ65ngEW4a53kF5Z27ZcS%2Fp1XDdjjIYJXgMFkJ%2Fvaqba%2FySeG%2BzTzOhL1f1B18vE8n3%2BsG244MRubDfVzoe4jn%2B9tc5PKutKCmjbOBRYcBS8oWrITtcHOyZYCBO0Kt486IpWs4Npd2Qr2eUJJZBuQlZCDENaRsmr3kHSrjMYEy%2ByfbmGlbJLFumPBQ5bVmP8cwbWqgiElwnX3n8%2BwNh3vrq7IL%2FbPkXGH41m8TqtyoRscvxKtO0NvAM%2BAlbw7Ch3M0WZdRSTShD7tEtfoeQ3V9UwV8ZLEh98EodZUSQmzo3xxD1LYc%2BsXA8xl6%2FWaPuGVirtx0Jw2bN2B5mzzdpLHfteVUj3f17qfYsFKlauDWtScLrheTvJctDiVL8rPx1BShgnUxAeCp2L7pfTu3qQKbfwC%2B%2F%2FxgNzKtLhnw7hd8XQzDI2tnABjqkAS03UMUvMy%2Bj6xJk3P8v2CYlXi17D1bjKKIzUi61hWKY3Pie76K%2B8gcHKyZhzSr1uUtaoLCC4w2jJgF%2F133cSi%2BQc8NHxjf8e7tq%2FqsLW0jvymOx45Soji9JcmlVEQOlINddv0YNXCcG1KyTfSq671xutdK5bey%2BBC3U%2BmICjOKapRY843BCyTiatfF7Xm1ZEyQccHw7maGf6DkJN6KiThpRuqDZ&X-Amz-Signature=a0ed5b48d90ed704a6e1dc4ee5ae080400f968d65b4fca080dca35d32ff805ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
