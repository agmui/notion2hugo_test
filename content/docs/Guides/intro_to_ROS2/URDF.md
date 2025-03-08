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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ52PNEM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICpyoCKNXq%2F8zY95sD8frLBThhXvgwYuxfWf0ZPSMRyTAiEAgV385AG%2BEqs7QvKmWAEV3tbFWCt4A2JT0A5FXqo1R8kq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKwaA1X4JzMA5efR1SrcAwXlF4IqHlOa%2B29lZXlXPSvgeF06MzaKwMX1y%2FYWnnbWBYHq1w22PdPpRRo3yWoxSzm6ZOsQuPMsTNKCawA%2BYHKUnXCnvhRIypRZayAbBgPWbbU80iPfUNua74MBRO8YxBYMZ6n993mUdRIqlSnBAdoELHIOxOR9nxr3lDzj4kIN5eNTcvBrCAiTge7lukTNXQ59xvtRs%2BHdNqoBoLVD8T5yhIwxVZWRtvto%2FlDDXcrTzVKmWCDEvynoIzTeRi8O4djkY%2F%2FbNhK18gl4WpSelhLiFNzpFofgw3NGSp7T3likjLHDpuAVrci0cwO5EMjmtxztat84FlSwcmVoNgkekKiL8wnZlDyIhtsoMWZ%2B%2FbW0AmyCrXbcM47PiI2Lpgkl6CIqSPnFHK9eez%2FSYPdHIp6c4S6NS9RpeJLL2Bk3IH3lxQwH8gJ8APwsdpBRmjhZbZYZ4qpwOItqbj2Kow0EV9h0Jh6zN%2BPIcQ4V2EdyNoFDvDhYI4zg7A%2BtchunM1kaxX4x8FEe%2F7j%2F6%2BQTkDAPhKhAta4to85CilfXHr5EYQzPxsgqM46ilnmkgmQGJlJylTEndUj%2BEsDnIbTlOOfK8cR764nSDjhWOX8Yw54bjrhJu5EYyTlZrtPpav%2BnMNXzr74GOqUB7YO2SsoBU358RDBP1xkLfKc0wBTxnc%2F1xn5HnrFPmjg2hGlO8bHI6Cl6VwHPQz5A%2FmeRH3WhBSCOvuIimHaue9WhpFnOhfcEzMcI6z5XqVSE9mcHAmO%2FwP8nlJIygwxyIZmXdH7LClKlt0%2FGf2jp9s6Nm6Ca085jtYyZRlp71pV3LiKc3gQokYvMoXzbiaN9C0xv%2FZG9zsS33QsO5OE4mbPjxybr&X-Amz-Signature=2b264cb18d063c34e1b8b6ad76dc9592d67d753e29b6ef616df8c55701801c93&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ52PNEM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICpyoCKNXq%2F8zY95sD8frLBThhXvgwYuxfWf0ZPSMRyTAiEAgV385AG%2BEqs7QvKmWAEV3tbFWCt4A2JT0A5FXqo1R8kq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKwaA1X4JzMA5efR1SrcAwXlF4IqHlOa%2B29lZXlXPSvgeF06MzaKwMX1y%2FYWnnbWBYHq1w22PdPpRRo3yWoxSzm6ZOsQuPMsTNKCawA%2BYHKUnXCnvhRIypRZayAbBgPWbbU80iPfUNua74MBRO8YxBYMZ6n993mUdRIqlSnBAdoELHIOxOR9nxr3lDzj4kIN5eNTcvBrCAiTge7lukTNXQ59xvtRs%2BHdNqoBoLVD8T5yhIwxVZWRtvto%2FlDDXcrTzVKmWCDEvynoIzTeRi8O4djkY%2F%2FbNhK18gl4WpSelhLiFNzpFofgw3NGSp7T3likjLHDpuAVrci0cwO5EMjmtxztat84FlSwcmVoNgkekKiL8wnZlDyIhtsoMWZ%2B%2FbW0AmyCrXbcM47PiI2Lpgkl6CIqSPnFHK9eez%2FSYPdHIp6c4S6NS9RpeJLL2Bk3IH3lxQwH8gJ8APwsdpBRmjhZbZYZ4qpwOItqbj2Kow0EV9h0Jh6zN%2BPIcQ4V2EdyNoFDvDhYI4zg7A%2BtchunM1kaxX4x8FEe%2F7j%2F6%2BQTkDAPhKhAta4to85CilfXHr5EYQzPxsgqM46ilnmkgmQGJlJylTEndUj%2BEsDnIbTlOOfK8cR764nSDjhWOX8Yw54bjrhJu5EYyTlZrtPpav%2BnMNXzr74GOqUB7YO2SsoBU358RDBP1xkLfKc0wBTxnc%2F1xn5HnrFPmjg2hGlO8bHI6Cl6VwHPQz5A%2FmeRH3WhBSCOvuIimHaue9WhpFnOhfcEzMcI6z5XqVSE9mcHAmO%2FwP8nlJIygwxyIZmXdH7LClKlt0%2FGf2jp9s6Nm6Ca085jtYyZRlp71pV3LiKc3gQokYvMoXzbiaN9C0xv%2FZG9zsS33QsO5OE4mbPjxybr&X-Amz-Signature=6965dd19a7458c2b8affc78b5c9981b7ccd8e07de68f5ef6310e2eea770ef6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
