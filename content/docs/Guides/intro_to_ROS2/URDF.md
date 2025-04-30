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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662V224K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCgn2WnC5T0F%2FWSD2MpSn%2FjptYytnU7Nb1eAtee%2F8BN7AIhAJo6O2u3PcpY7tCdPCLX7JU2Teqa8KyHv5EnrCvwegjUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVCeuNA3sKqoArD0sq3ANdyCTXs5EZdpIR8NTR%2FSai0BjcLFnNT5%2BAcsnicwn%2Bm55ba0z86Qg3Y6Bj8yaczEXY2EEHe75q0pI2sVL5jrjUDNbwVpsmb7WrvlWbbNHh8k%2Fii9xH8xrVNiTPj0RxRcV%2BghwGFhk0MXrqyHh2Hhnc8V%2F8egF1D%2Fzgiz4vT9D4QSltbBIIZZVGr2%2B%2FDtkDabL6tlbpJYU%2FLU7y0abpWrr5lQ5DQGG5%2BVaU5P7dBqN2vmVdcsnGC0Mybgcd5sT0AF0cWJ5g5%2FnXPsaocgLyHnOnCC9qK5hEQ0GqeC8nWgHOmmCK3ogl3TYlQlg8%2BtBOgNviYPESJHIJDH8O7FfPC4OrQLlQx00h%2BrIWBzGWPrPcRYw2aQoFJs%2BRDl9G6fC1wb1RqDqVaMK6ryKsbCfYnWVvMfDar2lfb8ZlaHaLgATMjLOCfEOU5XMLGueb75sn2BTUBoYObv8B4Ia6AKrGu5nKWkasqfrEYoCYZdd4IRUmUrYwImaV%2FrtV%2FBTdCUfXaeLmIf%2BB9xE4HCKDyPl7BZpevFixet2a8OrMIZSCYZ5vivqUmRiHlhq2l%2BRx%2BwCo1daHWpYhXonSo0hgHXbwmerRiN2iuMQQuVuD%2FAJZ1nVs%2FHZaC6GPtbJc5fk2WjDly8rABjqkAX7UfiHnISvMrP8YXb2kYPKmBW5hnyIGUuOUZKP091BVxc6DMjkJYHf%2BZDGUXthl2Fm3UksXhY5sDdFgPUtURn9x02blaHHpRuUi2iHLAW78gFQEVj7gp%2BXm%2FEodqGDaUrdBeLOxHn28LGm9vg4W%2BEoXoPfJ%2Fw%2BwlhaSZa1ElPKSat6pk2qX7it5EfR2kSTrFNLYnsEmZe%2BuGXVuAxpZNYWMEoEh&X-Amz-Signature=a18490c9aa9cda7d92ea1363eb955fbf2131b4bf3b9f5c483e45342d3d06da35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662V224K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCgn2WnC5T0F%2FWSD2MpSn%2FjptYytnU7Nb1eAtee%2F8BN7AIhAJo6O2u3PcpY7tCdPCLX7JU2Teqa8KyHv5EnrCvwegjUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVCeuNA3sKqoArD0sq3ANdyCTXs5EZdpIR8NTR%2FSai0BjcLFnNT5%2BAcsnicwn%2Bm55ba0z86Qg3Y6Bj8yaczEXY2EEHe75q0pI2sVL5jrjUDNbwVpsmb7WrvlWbbNHh8k%2Fii9xH8xrVNiTPj0RxRcV%2BghwGFhk0MXrqyHh2Hhnc8V%2F8egF1D%2Fzgiz4vT9D4QSltbBIIZZVGr2%2B%2FDtkDabL6tlbpJYU%2FLU7y0abpWrr5lQ5DQGG5%2BVaU5P7dBqN2vmVdcsnGC0Mybgcd5sT0AF0cWJ5g5%2FnXPsaocgLyHnOnCC9qK5hEQ0GqeC8nWgHOmmCK3ogl3TYlQlg8%2BtBOgNviYPESJHIJDH8O7FfPC4OrQLlQx00h%2BrIWBzGWPrPcRYw2aQoFJs%2BRDl9G6fC1wb1RqDqVaMK6ryKsbCfYnWVvMfDar2lfb8ZlaHaLgATMjLOCfEOU5XMLGueb75sn2BTUBoYObv8B4Ia6AKrGu5nKWkasqfrEYoCYZdd4IRUmUrYwImaV%2FrtV%2FBTdCUfXaeLmIf%2BB9xE4HCKDyPl7BZpevFixet2a8OrMIZSCYZ5vivqUmRiHlhq2l%2BRx%2BwCo1daHWpYhXonSo0hgHXbwmerRiN2iuMQQuVuD%2FAJZ1nVs%2FHZaC6GPtbJc5fk2WjDly8rABjqkAX7UfiHnISvMrP8YXb2kYPKmBW5hnyIGUuOUZKP091BVxc6DMjkJYHf%2BZDGUXthl2Fm3UksXhY5sDdFgPUtURn9x02blaHHpRuUi2iHLAW78gFQEVj7gp%2BXm%2FEodqGDaUrdBeLOxHn28LGm9vg4W%2BEoXoPfJ%2Fw%2BwlhaSZa1ElPKSat6pk2qX7it5EfR2kSTrFNLYnsEmZe%2BuGXVuAxpZNYWMEoEh&X-Amz-Signature=d28be5365b1aa0c61325c1350d1f6e8f075b5dc807525f33bbb91f910e50a767&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
