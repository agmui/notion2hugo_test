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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP3FL6A%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGHlVCf4OR11OekoK1YdZksDtirQd%2FgzbGqBI%2Fvw4KQEAiEAmahZMoCce8bQo73XGsETOK8AFlZO1bhiUg4dv%2BCkFJQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDENmMa4pXzGUi4JokyrcA4Sp%2BeNGDkk0v2FvFwutBYpbMOkvl3u%2F7Rerh4RGX7%2F9VM1DaHc8%2FAwvYSJbslHF9QO%2Bx92VPAjTuH%2Fqi6aOf4Ml%2FrdLHWCNqHgg%2BSHaP01xqkXdMZ35%2BrgkPns8%2B8WNuAU7m6D4eKPRtY%2FEBfoxG%2BPJtBAlVkDlFWWLOELbgAiF4HJgQUE4QAV6O3SIxCe1m7ru2pJbLIrELO5J7ypa%2BG2s39ZiHzWwhQgXKP9UC9JStgvxxde%2FMaEzmkEW%2Fe7J%2FjGitmyOG%2Fq5Dfwsyi6WyEQVDBOaiQyIrJd9E%2BzbVa2UvATf6kqzsyOTMhAUbx%2BZUtoInNOWxzB9zJam9DkXAS6wvAI06VJAKz2%2F2%2FUxnUAX90PTX4kPdKVlm0iMuE8Ydd%2BCD4VVjWBk6tX%2B4RTg1K1DeJj%2FQnRDeOWF2yrBPTUPyKR5i9rJ6giQxT7a2DP9alx6%2BtK7h5fOsksUUJ7gw1Rl0Y2eki%2FWPYjKvTPex30ZHv1dzjVqDquUzCN1Qh1MeAtUnpL%2BWFKcNExKSZr7HxW3R5hGg04e315lDgT9cPksJekFWXDcnFPiQkwy2FhxIvO5ZXS4GbBwddZD5gsKVjw1PqiThofFRGQe6P4lav2VTpQOCMl2Lx7GLOXYMMu8%2Bb0GOqUBpj%2FfpfJizHcaiazC0nqeMalUCQgv7s5VUZAQB7kKiqttgHO2bQnrrhKJ8FlrMnLH3Lq7PiBQ%2FsYpJZPXjvf9AOZWSa49BjIU8bPf8OiDM445cBne%2B%2FvYMMrro9Bd9JtvETwSgJRXJUtrY75jhDZse%2Fg5h4qUwHpvLe9WIZhoWbbuDgFhWPpmBSaj%2FvBJbuNPHpXnkrIy7AHejJRjLVoV4RYJ2u%2Fc&X-Amz-Signature=0fa530fc6080a7e10efa034a95eb610506313d6cbac8b9e731776df076859aba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP3FL6A%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGHlVCf4OR11OekoK1YdZksDtirQd%2FgzbGqBI%2Fvw4KQEAiEAmahZMoCce8bQo73XGsETOK8AFlZO1bhiUg4dv%2BCkFJQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDENmMa4pXzGUi4JokyrcA4Sp%2BeNGDkk0v2FvFwutBYpbMOkvl3u%2F7Rerh4RGX7%2F9VM1DaHc8%2FAwvYSJbslHF9QO%2Bx92VPAjTuH%2Fqi6aOf4Ml%2FrdLHWCNqHgg%2BSHaP01xqkXdMZ35%2BrgkPns8%2B8WNuAU7m6D4eKPRtY%2FEBfoxG%2BPJtBAlVkDlFWWLOELbgAiF4HJgQUE4QAV6O3SIxCe1m7ru2pJbLIrELO5J7ypa%2BG2s39ZiHzWwhQgXKP9UC9JStgvxxde%2FMaEzmkEW%2Fe7J%2FjGitmyOG%2Fq5Dfwsyi6WyEQVDBOaiQyIrJd9E%2BzbVa2UvATf6kqzsyOTMhAUbx%2BZUtoInNOWxzB9zJam9DkXAS6wvAI06VJAKz2%2F2%2FUxnUAX90PTX4kPdKVlm0iMuE8Ydd%2BCD4VVjWBk6tX%2B4RTg1K1DeJj%2FQnRDeOWF2yrBPTUPyKR5i9rJ6giQxT7a2DP9alx6%2BtK7h5fOsksUUJ7gw1Rl0Y2eki%2FWPYjKvTPex30ZHv1dzjVqDquUzCN1Qh1MeAtUnpL%2BWFKcNExKSZr7HxW3R5hGg04e315lDgT9cPksJekFWXDcnFPiQkwy2FhxIvO5ZXS4GbBwddZD5gsKVjw1PqiThofFRGQe6P4lav2VTpQOCMl2Lx7GLOXYMMu8%2Bb0GOqUBpj%2FfpfJizHcaiazC0nqeMalUCQgv7s5VUZAQB7kKiqttgHO2bQnrrhKJ8FlrMnLH3Lq7PiBQ%2FsYpJZPXjvf9AOZWSa49BjIU8bPf8OiDM445cBne%2B%2FvYMMrro9Bd9JtvETwSgJRXJUtrY75jhDZse%2Fg5h4qUwHpvLe9WIZhoWbbuDgFhWPpmBSaj%2FvBJbuNPHpXnkrIy7AHejJRjLVoV4RYJ2u%2Fc&X-Amz-Signature=9301700266ab7929f59a4a057dd8f8f59952a241a11ca7593e3a021aa9decb07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
