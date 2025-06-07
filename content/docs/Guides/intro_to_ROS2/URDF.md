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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVFW6ZV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZY5w9iiii6%2BU5DVQieoccDH0Fqh7JWmmcU966chUYQIhAOjcNWS%2FReHHe9VhJtLK4fWpduxLo1M9fahjxmj527QEKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkBgWaHcTNZo09O%2Bwq3AOAewW1HfKTaicIC3cU5%2FFKyN5dQaUWFOno1EbsUhFDzLViteDh1WqdGuJiFJZCt8YOdVlMEmhgDaahhGhKoxuJMuoOx67q0jg%2FP2E3uxMgMBts%2FvebC3USEUd2VneQGHUM%2BoYggzge29rjWcf6rcMnEpIKIxTwkD28lMIT2zgAHVY832KAQYSoIBju3oBudzXtsOz16yK4XMtiPvNn99%2FP7cONKNNlqLapc%2BW1H9QFciU73Q9AKXv0jPJrLnsmhgkprFI309rPGKpt6SUAl%2FQKXSGQCWEtLW0t%2BSTzIyFqfGLh7owSuqquAOASqazBp4pQJhEtumOYkms6%2BQKOLFmJS6%2F2G9lHAuMQhPfK8PBQjYNatu1RnTGhHeQlel4ciDLLCJ3v8TS1DxFTbsF24gaPhjkw0DzRDkodVejCkwVKKidL6rctTZMLxcaN1yeNLkDHpy0eG%2BxhkP4IMet72uwPS1Lr2DCtZlW9Wjjg0itE5dyY1POgPvRjAOClaJ%2BkFAMazuPALKlfaDXVEMj0BStNKEOGEwluk4vnrMbafR9TmIljuWFZc2mLiRj13i4AZGy%2FavpCsbbdbcceDSYCqofAny4VHUoACqLD3BOUXV5N%2FjXbBpaDXV8cdJJnOjCyw5DCBjqkATRi%2FqBHFfaZXVQPGWn4ecrBIRikujZw%2BW6fturXByzeOSB3dg6FhXqWyAXz1r79%2FOcb9%2Fq5p9KbEr3EPqiJ7GKbRZjpbdva0g0a%2BOBREZTQLW56bCUUy4yPVwqwZH5USF6syjfHi0Lbl0PY%2F%2BWrEF7Ucpbz%2FbaceobaEgtW%2BmUidCmSG18e2QKOOYwpKl1EFzAPOKSBREaDjTGK8uWZQhrWOz50&X-Amz-Signature=ca3585424f38625c3e4d05bb20d20d88b5271a8b94be5d4ab77576b9b86c8dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVFW6ZV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZY5w9iiii6%2BU5DVQieoccDH0Fqh7JWmmcU966chUYQIhAOjcNWS%2FReHHe9VhJtLK4fWpduxLo1M9fahjxmj527QEKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkBgWaHcTNZo09O%2Bwq3AOAewW1HfKTaicIC3cU5%2FFKyN5dQaUWFOno1EbsUhFDzLViteDh1WqdGuJiFJZCt8YOdVlMEmhgDaahhGhKoxuJMuoOx67q0jg%2FP2E3uxMgMBts%2FvebC3USEUd2VneQGHUM%2BoYggzge29rjWcf6rcMnEpIKIxTwkD28lMIT2zgAHVY832KAQYSoIBju3oBudzXtsOz16yK4XMtiPvNn99%2FP7cONKNNlqLapc%2BW1H9QFciU73Q9AKXv0jPJrLnsmhgkprFI309rPGKpt6SUAl%2FQKXSGQCWEtLW0t%2BSTzIyFqfGLh7owSuqquAOASqazBp4pQJhEtumOYkms6%2BQKOLFmJS6%2F2G9lHAuMQhPfK8PBQjYNatu1RnTGhHeQlel4ciDLLCJ3v8TS1DxFTbsF24gaPhjkw0DzRDkodVejCkwVKKidL6rctTZMLxcaN1yeNLkDHpy0eG%2BxhkP4IMet72uwPS1Lr2DCtZlW9Wjjg0itE5dyY1POgPvRjAOClaJ%2BkFAMazuPALKlfaDXVEMj0BStNKEOGEwluk4vnrMbafR9TmIljuWFZc2mLiRj13i4AZGy%2FavpCsbbdbcceDSYCqofAny4VHUoACqLD3BOUXV5N%2FjXbBpaDXV8cdJJnOjCyw5DCBjqkATRi%2FqBHFfaZXVQPGWn4ecrBIRikujZw%2BW6fturXByzeOSB3dg6FhXqWyAXz1r79%2FOcb9%2Fq5p9KbEr3EPqiJ7GKbRZjpbdva0g0a%2BOBREZTQLW56bCUUy4yPVwqwZH5USF6syjfHi0Lbl0PY%2F%2BWrEF7Ucpbz%2FbaceobaEgtW%2BmUidCmSG18e2QKOOYwpKl1EFzAPOKSBREaDjTGK8uWZQhrWOz50&X-Amz-Signature=7486c226e35f4017d4d1b0b54090dda9ffdca18ae6124361cb05a23fb0497b59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
