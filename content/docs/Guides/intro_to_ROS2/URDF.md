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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYNMRRM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDHqqA2Uy1d%2FTQTi49cct4os75K4zo5lbFw8gDckiM7%2FQIgNqJhGSF%2FVTNcNaeUA1CmBgwkMT3e9WcJmGwZQEN9djAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKfzGwBGJz7N3PZUtyrcA6jHp3KyjMK5nb7aWWo2Nn3qLpG5Y94s0XKEDuvBuAsgMKr%2BtwfEQmL3DBPj8XVFCeR4ez5Q%2FBqx9Uj65pbDRhehUpI4FN10%2BPn60n7h9BVe%2Bk%2FWU43nUebiJ3IYhx%2F%2Ff7cZvWMUlYZLmPkYTjbxloXypMmf3IVnd3k%2FGfCi1%2FKcxX6Fo02jKjdwzw6qok6jmCeRN%2FReY0SRKllSl042d9XvDvXhw2HFxrRtMx0gb2ihy23tmg0cKre%2FpU1%2BvgQJGVBKQ6qjMGqIb0%2FVUeK3TjB%2BN7DQY9tclHRridenak8MGo%2FPU9DCZo5j5xi9rfApvFL6QGCwqKhT3ojJYLHGFUckPDkChwJTD9A4uwRdyS0G0cGpXWn9Y2gAHT%2B7vqy9O1qQcrZd0%2Fq%2BGFt6U4H%2Fc1Gf9qj%2Fg5FoTio00QQ5p46cB%2F%2FYG9JRYH%2FS9Jt7BAJQbL%2Bwe3RN3fBdVLhHM1%2Fe9kb4Q8q51DZPA30d6unW6ojLjPRjOstXsMl%2F9DvdStGeiVmpFJH%2BIfa7yj%2FFUTWqNixdmhDWrk3OuwDCmV%2FDgeWU%2BMNk8zg4cEN%2F9JmeSy69yRZk2jxm4oQByHO%2BoW%2Fh%2BW6i6dNw5lJZ1inxKjKiDSmfTsamQAmqQ03YBUbcMMOs38AGOqUB9AEIdXdDshCbeRqAdotklTF7mrhYeHsbU8B8YoQ3YXt7Yb2ztDCUGe%2F6rnG2PORHes22gAmbZFhBAU1HX9yA52SaFx2EYXIOwshw3wsEYyJuAYaWBwp4UjwPwBf5lhBRR6zmaz1rXHuUrvHAYjXN3sWiTaUaZhgCduJuVnfNS0IRiYWn4uNBjpeUcPXTuMoM2fqrwSIaYBvMbiohXRL0XERjgqAq&X-Amz-Signature=bd3e3d6d70600df5e8d3beb05f4a512dc68b683e2b543634009274c31899f633&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYNMRRM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDHqqA2Uy1d%2FTQTi49cct4os75K4zo5lbFw8gDckiM7%2FQIgNqJhGSF%2FVTNcNaeUA1CmBgwkMT3e9WcJmGwZQEN9djAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKfzGwBGJz7N3PZUtyrcA6jHp3KyjMK5nb7aWWo2Nn3qLpG5Y94s0XKEDuvBuAsgMKr%2BtwfEQmL3DBPj8XVFCeR4ez5Q%2FBqx9Uj65pbDRhehUpI4FN10%2BPn60n7h9BVe%2Bk%2FWU43nUebiJ3IYhx%2F%2Ff7cZvWMUlYZLmPkYTjbxloXypMmf3IVnd3k%2FGfCi1%2FKcxX6Fo02jKjdwzw6qok6jmCeRN%2FReY0SRKllSl042d9XvDvXhw2HFxrRtMx0gb2ihy23tmg0cKre%2FpU1%2BvgQJGVBKQ6qjMGqIb0%2FVUeK3TjB%2BN7DQY9tclHRridenak8MGo%2FPU9DCZo5j5xi9rfApvFL6QGCwqKhT3ojJYLHGFUckPDkChwJTD9A4uwRdyS0G0cGpXWn9Y2gAHT%2B7vqy9O1qQcrZd0%2Fq%2BGFt6U4H%2Fc1Gf9qj%2Fg5FoTio00QQ5p46cB%2F%2FYG9JRYH%2FS9Jt7BAJQbL%2Bwe3RN3fBdVLhHM1%2Fe9kb4Q8q51DZPA30d6unW6ojLjPRjOstXsMl%2F9DvdStGeiVmpFJH%2BIfa7yj%2FFUTWqNixdmhDWrk3OuwDCmV%2FDgeWU%2BMNk8zg4cEN%2F9JmeSy69yRZk2jxm4oQByHO%2BoW%2Fh%2BW6i6dNw5lJZ1inxKjKiDSmfTsamQAmqQ03YBUbcMMOs38AGOqUB9AEIdXdDshCbeRqAdotklTF7mrhYeHsbU8B8YoQ3YXt7Yb2ztDCUGe%2F6rnG2PORHes22gAmbZFhBAU1HX9yA52SaFx2EYXIOwshw3wsEYyJuAYaWBwp4UjwPwBf5lhBRR6zmaz1rXHuUrvHAYjXN3sWiTaUaZhgCduJuVnfNS0IRiYWn4uNBjpeUcPXTuMoM2fqrwSIaYBvMbiohXRL0XERjgqAq&X-Amz-Signature=6466bbd4cbb9d9a103305b6bf94454f889ca3fd3977c3dc78177066eaf2ca17d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
