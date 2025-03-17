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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWMMSY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNwQpPUmUjApvg26FsEKzepuAVC%2B31wrUJ0ptLcjsrhAIhAKZMItqPH9Ib%2FhyflohSjdlknHvffeMweckGfsLZdt5IKv8DCEsQABoMNjM3NDIzMTgzODA1IgyAZo63gLwzVFhkwPsq3ANMAeyIcTxLE1nZc1eTgvN5gk%2Fg4Wvz2oPprYFU11C%2B1UqVMPkWBiHtdgmz3H2lYDIlMBNSy7vrCAX4XBqqOtP%2BUhQsw4FNknVSq4RcVcHfsF795Sraydk7uH9ckODykrCT4jJxkISb6Cvow1zeBjyb3YR9QERpM1gBnPIQG%2BiG%2FpQyrQpf6fw1vyUSJtneWjjhF6jR2Z8bDOZ6V2ifMK2IUgbXyU5rG6y2Q7xP0Cx7PLDiu0i6a1vrqkSsJhIGSUHij6A3jiR9CB1m1DpJfR6DRG29x63hwwbpT%2BctC7geDt%2Bv3TqokKqAwLOG3YV5C4WsAckq2Qw3WXXadJLVCbUybFpB9VpeSi5WXyGLAVvVz9RbFybpUSaH1%2BySsWWNIVbRy9%2BvbX0IbFdJsXoNrDf7MxtlP%2BwXKE8xnqpoSXOHiHc8o%2FbyZGF%2B5Dmq89fWVq%2B%2Bgd7tPo3ykldbhe3aAwrA8S1PEtdLgdlLiI%2FquSwLFnubmi3AiRApLYrdSb5MHXk7JndCDvO8v%2FPfwyys8qpYn0lNXWwi2%2BWLqnQywiYshF4GoUbL4sqPa00ZJE6iq4KMpbtnPwvyMRJPbw0gTH1RVjQXi28lE8A9o1kjjjQSEp%2BKMg3wJokZQoJ1GzDHxeG%2BBjqkAQEFJh7iojx%2FhEUmSCGoacPIPuEmn8WG%2F7jPLIXJug1CSPAlw9VsUEhyGIWdQygA7sxpgt01Q7t%2BnX7OWLkc9VBB2YC7YhfaT91jAr5M9khjS5XEsVp6zOnJKluMRbg5vv47tjey2NWqwMs9BvD3DjqSkECoo2Kzz42Q2gCZ5u34%2F0JNxKPagUdFcYExkBJqRNM6Z7cqLqKWxuZxVjALJ6wh27Jd&X-Amz-Signature=a5e8af97a0383d82526f28b74ce4007e1be973dee47e5986d48921e369e189c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWMMSY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNwQpPUmUjApvg26FsEKzepuAVC%2B31wrUJ0ptLcjsrhAIhAKZMItqPH9Ib%2FhyflohSjdlknHvffeMweckGfsLZdt5IKv8DCEsQABoMNjM3NDIzMTgzODA1IgyAZo63gLwzVFhkwPsq3ANMAeyIcTxLE1nZc1eTgvN5gk%2Fg4Wvz2oPprYFU11C%2B1UqVMPkWBiHtdgmz3H2lYDIlMBNSy7vrCAX4XBqqOtP%2BUhQsw4FNknVSq4RcVcHfsF795Sraydk7uH9ckODykrCT4jJxkISb6Cvow1zeBjyb3YR9QERpM1gBnPIQG%2BiG%2FpQyrQpf6fw1vyUSJtneWjjhF6jR2Z8bDOZ6V2ifMK2IUgbXyU5rG6y2Q7xP0Cx7PLDiu0i6a1vrqkSsJhIGSUHij6A3jiR9CB1m1DpJfR6DRG29x63hwwbpT%2BctC7geDt%2Bv3TqokKqAwLOG3YV5C4WsAckq2Qw3WXXadJLVCbUybFpB9VpeSi5WXyGLAVvVz9RbFybpUSaH1%2BySsWWNIVbRy9%2BvbX0IbFdJsXoNrDf7MxtlP%2BwXKE8xnqpoSXOHiHc8o%2FbyZGF%2B5Dmq89fWVq%2B%2Bgd7tPo3ykldbhe3aAwrA8S1PEtdLgdlLiI%2FquSwLFnubmi3AiRApLYrdSb5MHXk7JndCDvO8v%2FPfwyys8qpYn0lNXWwi2%2BWLqnQywiYshF4GoUbL4sqPa00ZJE6iq4KMpbtnPwvyMRJPbw0gTH1RVjQXi28lE8A9o1kjjjQSEp%2BKMg3wJokZQoJ1GzDHxeG%2BBjqkAQEFJh7iojx%2FhEUmSCGoacPIPuEmn8WG%2F7jPLIXJug1CSPAlw9VsUEhyGIWdQygA7sxpgt01Q7t%2BnX7OWLkc9VBB2YC7YhfaT91jAr5M9khjS5XEsVp6zOnJKluMRbg5vv47tjey2NWqwMs9BvD3DjqSkECoo2Kzz42Q2gCZ5u34%2F0JNxKPagUdFcYExkBJqRNM6Z7cqLqKWxuZxVjALJ6wh27Jd&X-Amz-Signature=5c7f962786688be32bcc70f3c6e07e4c983d7dca1518d75f14cd9598d16a409e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
