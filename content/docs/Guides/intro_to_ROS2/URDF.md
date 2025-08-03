---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVSEZH4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR%2BG%2FZ3N9g2yVRi4Vw7VA06TQVj1NxQEODT6gNTpo9aAiEAnfL0Sk4ItP4bo%2BAPYx8ZiBjBhl%2BpQ2X62eMxSv4ADL4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGpJ%2BYhPNPE0bujE%2BCrcAzUeD2YK67teE5nDrokuV9f%2F48LH21%2FywkQBCCTMv%2FAvhXwLrPanenDrnL%2F7lwnN7TNO%2FWrG8SXScOCEo8MDKAQ%2BEn6KzwFx1kvqmNvCXzMeLtRnGQ2V78DEpxVy8dM6GEzIBtXm1xnDlllnToosboFOhvivAF2aunEt%2BZB%2FLxsvQ5p%2FW19fo9j4Bqu%2F%2FlAGN2na9pT9hDEcSppiqgxd6PN4a6H3Qkx91MgQ4vGwmF3XZ%2Fs3jiynXh9Jv%2BEHXet7YH007K9cUSYD%2FQiHKAKwj9jGpJe%2FycDof0Cq0mBcwVlKnR00qVVSI52032hxtbvwAa1hVf3cqdlnPDQzlCWEkj3p6sbrxAVbfz5MecYCjxC3HbkcK3hb1%2BlqyJmQ0OS1nI6PJ4Ybrpn25yHbUcVXaYTWPxjSMviJnWvbbbdfYgMeNfYVklfBfYX%2F7u1E5rDdQCK%2Bj%2FvdouxtQRDNs%2FI%2Ff18j%2ByKE9ULonwmpEKecq5HmKsH%2F91oqHRGlyco6TS%2Bcg%2BrMd4tKi%2Br7OPOWv5YOx1DvrpZf8pVfCKzddEPv89iE%2Fn45IOnjomGdE3EWTQVmwRzg7E6ShTH6%2FYbe%2BwlwTRn0phgoN%2BvOvXJrDpdTsPc5Hnuik38C15oswTiJMMzZvsQGOqUB5qm5JmO1gfFnh%2FmJOu3g7dB1mbQjjTXpvwLxPofjLIAcVwMzpb%2FWA%2BZU3hH5HvJW4qnDnm7dGsTRmnongGjqp9dfA%2BwzEjn6%2BE4cu5UTYc%2BfOEbriZx34ob9UY8gLx9T8eYueeqsz%2FAIPTjdIa3dg9Q6rBX%2F3TELensAet%2Bqwe8utwrWvbQ9B5YqVctyTuk2QAJgnVLThpDKqWg1LjqkFXTTC1y7&X-Amz-Signature=8bb4a0f854acff707b357367edce57935e8d59bda7dad5c915e1b3d77efccfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVSEZH4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR%2BG%2FZ3N9g2yVRi4Vw7VA06TQVj1NxQEODT6gNTpo9aAiEAnfL0Sk4ItP4bo%2BAPYx8ZiBjBhl%2BpQ2X62eMxSv4ADL4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGpJ%2BYhPNPE0bujE%2BCrcAzUeD2YK67teE5nDrokuV9f%2F48LH21%2FywkQBCCTMv%2FAvhXwLrPanenDrnL%2F7lwnN7TNO%2FWrG8SXScOCEo8MDKAQ%2BEn6KzwFx1kvqmNvCXzMeLtRnGQ2V78DEpxVy8dM6GEzIBtXm1xnDlllnToosboFOhvivAF2aunEt%2BZB%2FLxsvQ5p%2FW19fo9j4Bqu%2F%2FlAGN2na9pT9hDEcSppiqgxd6PN4a6H3Qkx91MgQ4vGwmF3XZ%2Fs3jiynXh9Jv%2BEHXet7YH007K9cUSYD%2FQiHKAKwj9jGpJe%2FycDof0Cq0mBcwVlKnR00qVVSI52032hxtbvwAa1hVf3cqdlnPDQzlCWEkj3p6sbrxAVbfz5MecYCjxC3HbkcK3hb1%2BlqyJmQ0OS1nI6PJ4Ybrpn25yHbUcVXaYTWPxjSMviJnWvbbbdfYgMeNfYVklfBfYX%2F7u1E5rDdQCK%2Bj%2FvdouxtQRDNs%2FI%2Ff18j%2ByKE9ULonwmpEKecq5HmKsH%2F91oqHRGlyco6TS%2Bcg%2BrMd4tKi%2Br7OPOWv5YOx1DvrpZf8pVfCKzddEPv89iE%2Fn45IOnjomGdE3EWTQVmwRzg7E6ShTH6%2FYbe%2BwlwTRn0phgoN%2BvOvXJrDpdTsPc5Hnuik38C15oswTiJMMzZvsQGOqUB5qm5JmO1gfFnh%2FmJOu3g7dB1mbQjjTXpvwLxPofjLIAcVwMzpb%2FWA%2BZU3hH5HvJW4qnDnm7dGsTRmnongGjqp9dfA%2BwzEjn6%2BE4cu5UTYc%2BfOEbriZx34ob9UY8gLx9T8eYueeqsz%2FAIPTjdIa3dg9Q6rBX%2F3TELensAet%2Bqwe8utwrWvbQ9B5YqVctyTuk2QAJgnVLThpDKqWg1LjqkFXTTC1y7&X-Amz-Signature=8c62844f6ea58e4724a5f941f73d349f8cb5effed2f95faf50cf05cce86c5c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
