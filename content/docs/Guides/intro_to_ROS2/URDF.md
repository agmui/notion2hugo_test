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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRSXTUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDfviefGa51qgv1bQwRfUoKCA3OJp0vkkKmdM0rB8%2BOHAIgH5MqAdTnzz4XqQz4mXgZ0qE32AbfubVkCDn9GWFGYVEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCSY2YHEVkRlfVGEAyrcAxydQT0sN5q4N6fcTNdC%2BTpDyp4JwPQgHYkQ%2BzVxS8qbtykeRMMG9VUd9o3%2BuSRd%2BfN%2FI1eaayo7Sl3nGqFuEyxoTWb0I09goDwXQ%2B%2BGH0Y0TZHoC7XY1xdfCTxkoh%2BaqbYINNc0Ac9%2BqppC44DjQIyNLXsj1KjoQ3tCGh%2FDTE8hah2Y5QmtwvRloHlCCdpKUWFw0EO7GYgXCxGiiuqtxmdY72h1qcflqowCBCBH5obxoM3hTmXzzEFF9j9W9ihafykfzCdHOMUg%2B5G%2BzSmebKqcQBsXQwAYo8CL1fZvrP7X8latexor7ZfBBK7aNZlMbOCzORA1UK10xuj52fMafVKJYgYoicg3xEOKRr6iXuXivWfIyVchRtife6ieeZsHAu3VyfuySF28OGGeao5P79IellPBeBGLpF3colOhbnRvBciHe%2BYsIDCs43682EH3hVDuCKGbyBzQRcoEgCtTzqmjPX9zJQTdXZ7hVEk7JgZRoUNCAuK3uoIrcbZfos84YmVW9kREeF8cpbiHKi8kvydKqwBZkRxET8Vd1XE%2Bnu7z5kXlo7QziEAKOB9GZOadfLfcik98FPG3zi9cOqFxWM42Zacwaxd3cugDoDocpYEc5eqW7YkDR8XsFNHCMIWL1r8GOqUBZmbheXi6kQaYc9PJPaRlEPiEbIVLj3I6mwNZUzfEW2mBIK7xjUUAjMC5BeotbfIfu2u9iJId%2FHeNY305lt5MXBnxtJu%2BmLeKAHHvW%2FoBcN7GQ6iQuUSpiZfswd4TnYbfB%2FgRmDGQ2iQamzYmP%2FA%2FsG4gUMQ23InWiah3a2L9phRpkc12LpwbJUNlYXMWWaUVL9jJJ7VrtoKQbLg716o2yEJ8wbCo&X-Amz-Signature=b08c890e9a49b4154b5047d5f1b0425bb04b1663fb5307eb7e62221949d415e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRSXTUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDfviefGa51qgv1bQwRfUoKCA3OJp0vkkKmdM0rB8%2BOHAIgH5MqAdTnzz4XqQz4mXgZ0qE32AbfubVkCDn9GWFGYVEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCSY2YHEVkRlfVGEAyrcAxydQT0sN5q4N6fcTNdC%2BTpDyp4JwPQgHYkQ%2BzVxS8qbtykeRMMG9VUd9o3%2BuSRd%2BfN%2FI1eaayo7Sl3nGqFuEyxoTWb0I09goDwXQ%2B%2BGH0Y0TZHoC7XY1xdfCTxkoh%2BaqbYINNc0Ac9%2BqppC44DjQIyNLXsj1KjoQ3tCGh%2FDTE8hah2Y5QmtwvRloHlCCdpKUWFw0EO7GYgXCxGiiuqtxmdY72h1qcflqowCBCBH5obxoM3hTmXzzEFF9j9W9ihafykfzCdHOMUg%2B5G%2BzSmebKqcQBsXQwAYo8CL1fZvrP7X8latexor7ZfBBK7aNZlMbOCzORA1UK10xuj52fMafVKJYgYoicg3xEOKRr6iXuXivWfIyVchRtife6ieeZsHAu3VyfuySF28OGGeao5P79IellPBeBGLpF3colOhbnRvBciHe%2BYsIDCs43682EH3hVDuCKGbyBzQRcoEgCtTzqmjPX9zJQTdXZ7hVEk7JgZRoUNCAuK3uoIrcbZfos84YmVW9kREeF8cpbiHKi8kvydKqwBZkRxET8Vd1XE%2Bnu7z5kXlo7QziEAKOB9GZOadfLfcik98FPG3zi9cOqFxWM42Zacwaxd3cugDoDocpYEc5eqW7YkDR8XsFNHCMIWL1r8GOqUBZmbheXi6kQaYc9PJPaRlEPiEbIVLj3I6mwNZUzfEW2mBIK7xjUUAjMC5BeotbfIfu2u9iJId%2FHeNY305lt5MXBnxtJu%2BmLeKAHHvW%2FoBcN7GQ6iQuUSpiZfswd4TnYbfB%2FgRmDGQ2iQamzYmP%2FA%2FsG4gUMQ23InWiah3a2L9phRpkc12LpwbJUNlYXMWWaUVL9jJJ7VrtoKQbLg716o2yEJ8wbCo&X-Amz-Signature=555a93fc22b143bcc722e8d9e1bb5132dcf6c46ad87be5bf5a22ed6af2eaebf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
