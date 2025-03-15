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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEPG6LM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq%2Fj3KfzPoGWpIJgLvARserNYJlHdHppjE%2FYFIM6zDcwIgHpi78kn42RtjNHXTAHKKqTAsgfb3UY1RIanjp%2BAvM9Uq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEk3yZuVo0AvkL0arircAzcu2QjlioX2Aa1JsG1E8XR0cZLeTme84hoyiAZ%2FgAKOk%2Fhge15BD1Ob%2FFnBz1npMsesVAjcZ4KIREWB6AuF4ub6Y1VBZ9OlEO0ZYFhhI1wrJY8aVqo7uaK4%2FMCOTUxPH0iBLviRWZnm3jUJcx30PlJ2xsmpD8T%2B9SP5FzfROPtGdPQCDMPwvfm%2FZID1BmzP5lQ%2FBm4b3%2FFqt0J3vMDO6pzD3ZHgJ9ahfQVBx7ggCKB6RGUYIC7xkwDizZtexVDPNqOJERL%2FMPbGwsd6f9pES3FshBRtrhb3sMQpuMaLRZQOrJWxksGj%2BtplJ4l7d0y5mZQt75Imfno6hgIh%2FtsrXyuOJoDMYapFBXNcfT%2FklD54O2b2k9qCTEkbfSvT2WDW78Utb1ALElI6c0zgc77qioW79Tw0v8qDTLA44p0hFliypcD3jI5zxqEHYMulhuuzATesjKgoAfDZLKqaSbExpsCeia72Ej1fY1zQpihmRvPZxRMpxN43q7gzxrSdSflPrmpsG%2BlJV27cwxntdt40U1lLFAhTffy9U3IHyJPBP3Mg86hqLAdnvJfrgbL2XsQab3CYoXCpXH1hDVmGodRSJn615Fj0U8MrLw%2FmTo2guLAR72J0iHx5eIzfHbtwMKPv1b4GOqUBuq4eByjnVqX1iYsEsFNy%2FMPdrJ5Tpc6D8TCOzKevox4uZAl5aZ7%2BtY7s9BDMMjiiM4ybkhifubSDx9YZo7rl6o5qqkSeR0cIgWNoTIACAMGD%2FxBsSMkBspe3gKpLc3EpFsx68%2FRhtG0ChZ%2FqUn4Jvn%2BoqBBEZ3eYMS7%2FIXn%2Bk%2B%2Fs8DeLHDFGtA1swXcgEkscuiiTWBNja0B%2BugxCdN6HL8r1TWnS&X-Amz-Signature=d70fe8576ecd29592c5f74df291a3860c8029b54de57e51771ae915bf6d00ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEPG6LM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq%2Fj3KfzPoGWpIJgLvARserNYJlHdHppjE%2FYFIM6zDcwIgHpi78kn42RtjNHXTAHKKqTAsgfb3UY1RIanjp%2BAvM9Uq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEk3yZuVo0AvkL0arircAzcu2QjlioX2Aa1JsG1E8XR0cZLeTme84hoyiAZ%2FgAKOk%2Fhge15BD1Ob%2FFnBz1npMsesVAjcZ4KIREWB6AuF4ub6Y1VBZ9OlEO0ZYFhhI1wrJY8aVqo7uaK4%2FMCOTUxPH0iBLviRWZnm3jUJcx30PlJ2xsmpD8T%2B9SP5FzfROPtGdPQCDMPwvfm%2FZID1BmzP5lQ%2FBm4b3%2FFqt0J3vMDO6pzD3ZHgJ9ahfQVBx7ggCKB6RGUYIC7xkwDizZtexVDPNqOJERL%2FMPbGwsd6f9pES3FshBRtrhb3sMQpuMaLRZQOrJWxksGj%2BtplJ4l7d0y5mZQt75Imfno6hgIh%2FtsrXyuOJoDMYapFBXNcfT%2FklD54O2b2k9qCTEkbfSvT2WDW78Utb1ALElI6c0zgc77qioW79Tw0v8qDTLA44p0hFliypcD3jI5zxqEHYMulhuuzATesjKgoAfDZLKqaSbExpsCeia72Ej1fY1zQpihmRvPZxRMpxN43q7gzxrSdSflPrmpsG%2BlJV27cwxntdt40U1lLFAhTffy9U3IHyJPBP3Mg86hqLAdnvJfrgbL2XsQab3CYoXCpXH1hDVmGodRSJn615Fj0U8MrLw%2FmTo2guLAR72J0iHx5eIzfHbtwMKPv1b4GOqUBuq4eByjnVqX1iYsEsFNy%2FMPdrJ5Tpc6D8TCOzKevox4uZAl5aZ7%2BtY7s9BDMMjiiM4ybkhifubSDx9YZo7rl6o5qqkSeR0cIgWNoTIACAMGD%2FxBsSMkBspe3gKpLc3EpFsx68%2FRhtG0ChZ%2FqUn4Jvn%2BoqBBEZ3eYMS7%2FIXn%2Bk%2B%2Fs8DeLHDFGtA1swXcgEkscuiiTWBNja0B%2BugxCdN6HL8r1TWnS&X-Amz-Signature=a87ba3933ab892880354096f4006666cc2c35ccca334e5525f85299e903662b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
