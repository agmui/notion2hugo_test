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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTHSPJD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFQ%2BGjhVvt5bk5B1oeA%2FbyTOGyGrFMiDrxCISSGDUS%2BOAiEA4EVlzpARaVPxBuVK6WDQRjp2v1TJjFvONfvYh1%2B4Ea4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA48hSIyHklULHIniyrcA8hKfkvq%2BoSDL8L9NvpEc27dV20HZCbHok9CMaBnFsJTGDfmLA9kiKncMikc1hKXL0yYNZxVe3BQ8EOfrGI7rtxxRvwlC4psPH2b13%2BvloVgW3XvV4KXtRFQg7CQ8YQU9jXuf33vZC4FZzKDfUI2JQcGdX3OgvVz1nRi5qifLIUdfwhDsyAZcpS3baqbF14rH4V10METSf60%2BH6ZXur3nkUqA1cCRFKOMEQ4RbMsHy3I5SOFKoCNCO2Gp9c2gIsdPdy2U2PwglhTp7JaaTtPdlw52VtF14KwNToK94RPS3pRViPQAIbQG0xPHH4fVpRB6yRzYJSbRwLTnBkE8Z8Vg6E%2FZGSNIgKj4eXKh6mPnvHXfuf7MZG1lv%2BDgdLw%2FJmq7iBV2FP%2FZVyHI6wEh2pRjD3IBY1wPSQwHmzsg0Vd%2BBF%2B8ETSkz9DgvhnKO1gpQXFs9qc5kURGO3qnpsPhJhD0100MsE4l61rSyRZ17HmYYaOpOnEamuullDidhezQMG8NApSDVd5E%2FAmviYs9UwcvI4vM4xjgbDh3VG3g9a9b3t7aSB5aEAdSCtj5owboUn9jiURidraYGJGySSujEsxTlYueA26Vs0GS3rTKQDhhNoTUde8LIzmIiZCQOvyMNL3isEGOqUBXR%2FOXd5XRe%2FwYXwCFIA9frinMpqNbywsW2bf4vjmOO%2BdrGm5sjnJjCNLKPjqTTnp80NZ%2Bv6zRmJV2EV79qzW%2B4P%2BdH9q5Jd3cIu3qTl3IkZREniQ%2F5StriU%2FMJMLqCxNmGGIJ5bzeZdJQgtlewHnwNNdPebeuw0g390UjNDEV5eJaXH%2BAHZ0000%2F96%2Bl60kjg28iM%2F5YTodmJtHGai%2FSxl46z6OX&X-Amz-Signature=c6f6f59a17bc6c40b00f4264f524afb5ca05a1cbefabf4f6004b9335e28d1644&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTHSPJD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFQ%2BGjhVvt5bk5B1oeA%2FbyTOGyGrFMiDrxCISSGDUS%2BOAiEA4EVlzpARaVPxBuVK6WDQRjp2v1TJjFvONfvYh1%2B4Ea4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA48hSIyHklULHIniyrcA8hKfkvq%2BoSDL8L9NvpEc27dV20HZCbHok9CMaBnFsJTGDfmLA9kiKncMikc1hKXL0yYNZxVe3BQ8EOfrGI7rtxxRvwlC4psPH2b13%2BvloVgW3XvV4KXtRFQg7CQ8YQU9jXuf33vZC4FZzKDfUI2JQcGdX3OgvVz1nRi5qifLIUdfwhDsyAZcpS3baqbF14rH4V10METSf60%2BH6ZXur3nkUqA1cCRFKOMEQ4RbMsHy3I5SOFKoCNCO2Gp9c2gIsdPdy2U2PwglhTp7JaaTtPdlw52VtF14KwNToK94RPS3pRViPQAIbQG0xPHH4fVpRB6yRzYJSbRwLTnBkE8Z8Vg6E%2FZGSNIgKj4eXKh6mPnvHXfuf7MZG1lv%2BDgdLw%2FJmq7iBV2FP%2FZVyHI6wEh2pRjD3IBY1wPSQwHmzsg0Vd%2BBF%2B8ETSkz9DgvhnKO1gpQXFs9qc5kURGO3qnpsPhJhD0100MsE4l61rSyRZ17HmYYaOpOnEamuullDidhezQMG8NApSDVd5E%2FAmviYs9UwcvI4vM4xjgbDh3VG3g9a9b3t7aSB5aEAdSCtj5owboUn9jiURidraYGJGySSujEsxTlYueA26Vs0GS3rTKQDhhNoTUde8LIzmIiZCQOvyMNL3isEGOqUBXR%2FOXd5XRe%2FwYXwCFIA9frinMpqNbywsW2bf4vjmOO%2BdrGm5sjnJjCNLKPjqTTnp80NZ%2Bv6zRmJV2EV79qzW%2B4P%2BdH9q5Jd3cIu3qTl3IkZREniQ%2F5StriU%2FMJMLqCxNmGGIJ5bzeZdJQgtlewHnwNNdPebeuw0g390UjNDEV5eJaXH%2BAHZ0000%2F96%2Bl60kjg28iM%2F5YTodmJtHGai%2FSxl46z6OX&X-Amz-Signature=69ba87f6e4247d3f2e6a72f3150c3ca4a5b520be31a4231d5755d3ff05fb4a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
