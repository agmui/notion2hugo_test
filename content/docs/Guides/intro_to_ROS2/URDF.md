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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JSPUAS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDm%2BNGpXZtfxPsPGU5o%2Bh7TlPZv4VVjTeZgPnfFZ2adAiEAyMztt%2BoPSO5OJTI7M2yP8XkgIB3BNHrsq3FOXu%2BYj6Aq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIKE7sIDKoJ3MuiS5SrcA1vzd5xJ7BKzQf8oFoNwVR3LXBFM9yCohrP1U07a4ma1mwl2o9bsAil0Va4zusM6Jq6%2BYBfwgWVx2wS351pQW3EDQqczOLyWY42rt8Gm3khq%2BxwbJqMHPBROhNC1PKRSHgjpCNTyyDY%2BFthYd5YUIY%2BzGxxFUnohuGaEKgUTnbBmjPzvvPlvPBnc9EtdWQfk%2FDGm7VXp5Q%2BxeUns%2B7Ds0TJQvuAaaqaeoYsdOzxEY6Sa7fK4To6%2Bb%2Fgcr3M2X%2BzfqU1OL7fd80nBl%2BWjD9U0GU%2Ba7GmAxL10jmhx61BwiRX5JOQ9EKvDeQXEQLdCGyJO6Clx7XWWlYRR28JpJPVLERK8aeIuNgSBL6FgkGI%2FRHdFS51eeafJ5SQ9gNC9%2BU0quPCxuNXKBYFEmf%2FkrSwVj5izTPrUoRRqXYxptyfN5xYnvutmPIG3GJABWLq0PuAN8nTK98VR%2F65PqAX5S525CQD5Wf6XU0Z0lUpTVxmAecx5Qmad%2BbQk%2Bq%2BgZfMb3HftVsuj6fBby6XakAO45iqhtGJER1sk4XfDJvPUjICUOA7nNxRccACm15tDB56elrrLb7hb9Dn7n4VoDzAeA%2BkF72%2BGuu8xlfDAz%2Fc%2Bd%2BYyuqhmdzGoZH3h%2F6oIUSMyMJ%2FX7L0GOqUBNtfTGJ6Tf%2BSkTgqnWjwVc%2FsV64lB3ukFPmlLRXYnq4ru1yB28sN2TeCJIoL6AO45Mp2Y0axzSccbNsRg3dF6mmVVglmhPUOrcwImPib5Bs9xiwulo59Q3ZR6X%2BwftLzZ8pdLGZXxX8Qgv9sZ6cwAPPDdk2Jqu7i401G9nWFpgtdHsWSgcFCasJZBENI6C5cFdarwbi6gzt1cLW6t4BGXkAb5QpgE&X-Amz-Signature=96bfd3338f16b9b2525e16876541dc49023791b9e5fca90869f2b80110088650&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JSPUAS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDm%2BNGpXZtfxPsPGU5o%2Bh7TlPZv4VVjTeZgPnfFZ2adAiEAyMztt%2BoPSO5OJTI7M2yP8XkgIB3BNHrsq3FOXu%2BYj6Aq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIKE7sIDKoJ3MuiS5SrcA1vzd5xJ7BKzQf8oFoNwVR3LXBFM9yCohrP1U07a4ma1mwl2o9bsAil0Va4zusM6Jq6%2BYBfwgWVx2wS351pQW3EDQqczOLyWY42rt8Gm3khq%2BxwbJqMHPBROhNC1PKRSHgjpCNTyyDY%2BFthYd5YUIY%2BzGxxFUnohuGaEKgUTnbBmjPzvvPlvPBnc9EtdWQfk%2FDGm7VXp5Q%2BxeUns%2B7Ds0TJQvuAaaqaeoYsdOzxEY6Sa7fK4To6%2Bb%2Fgcr3M2X%2BzfqU1OL7fd80nBl%2BWjD9U0GU%2Ba7GmAxL10jmhx61BwiRX5JOQ9EKvDeQXEQLdCGyJO6Clx7XWWlYRR28JpJPVLERK8aeIuNgSBL6FgkGI%2FRHdFS51eeafJ5SQ9gNC9%2BU0quPCxuNXKBYFEmf%2FkrSwVj5izTPrUoRRqXYxptyfN5xYnvutmPIG3GJABWLq0PuAN8nTK98VR%2F65PqAX5S525CQD5Wf6XU0Z0lUpTVxmAecx5Qmad%2BbQk%2Bq%2BgZfMb3HftVsuj6fBby6XakAO45iqhtGJER1sk4XfDJvPUjICUOA7nNxRccACm15tDB56elrrLb7hb9Dn7n4VoDzAeA%2BkF72%2BGuu8xlfDAz%2Fc%2Bd%2BYyuqhmdzGoZH3h%2F6oIUSMyMJ%2FX7L0GOqUBNtfTGJ6Tf%2BSkTgqnWjwVc%2FsV64lB3ukFPmlLRXYnq4ru1yB28sN2TeCJIoL6AO45Mp2Y0axzSccbNsRg3dF6mmVVglmhPUOrcwImPib5Bs9xiwulo59Q3ZR6X%2BwftLzZ8pdLGZXxX8Qgv9sZ6cwAPPDdk2Jqu7i401G9nWFpgtdHsWSgcFCasJZBENI6C5cFdarwbi6gzt1cLW6t4BGXkAb5QpgE&X-Amz-Signature=32f8e2bce2717de7bb4dc0dfd753f2ef188c3a1276df696cc54af30a0865dd97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
