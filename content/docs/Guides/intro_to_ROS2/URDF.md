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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK6HMEA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXfJ01Npv0XA%2BCvnTe7tGQz380pwd0kE%2FsyFdh93cyBAiEAxDe7TsZUH2TZsPKbGzNKJnQ9Bv72Wg24clq1sxRhjN0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeQDYbgmtdhOgj%2BCrcAwINN4TcIXYfloIN5QtypVvAfGLgHuEjmIP%2BcMU%2BBnqH4vvyXAcO%2BeYIeTG%2FkYbrE0bv5eFiZXJjbVlY%2B3Q88pEZ0Mldk5wrhM6cJdXa1IXiKxmEN%2B6vmjzVDXMUMmFyXR0LfEMTO30EUvQupCB36%2B8J3Hgb5Pp0PKP1OQFWXpEj8xt0v%2F8Ar2Sb7iiQSOXyP%2BXtA1OLHQRMhmi%2Ba15%2Fe%2BqsGCPaOP1LafnuQqQdz4%2BoAceAMpM9caaORmGYh%2FhK6UDpD1xe9KlayvWl3PvNEBdEQV40qXpbNUCPHJpvbqurhjzu4Ue6qrbrvqTKE8WCVBJLFuhqo3Ey5t2xWPdpZgc85m8KGkaHXKM8rLttW%2Bf4aZQ0HVe%2FT6nAbaOYuRe5BHi%2FnLnsJN3KUUFsEToSTuZ3zS%2B28cYa3Z8zpebPbQpRqOFWipZICssPQ%2BLYCWeOH1xD1G37OQR3%2FHCtmCMyUSOcq2wpr0gwGRfRWt9zMsCf8bym4UeLLTW46v4r9XibMXYBL1ybkijTL97IKIR8jgAJHNWXFNLtkGnK3jN6oX5ymskKJrCohWCNEGjAe2hTJYBIOOpC6DzRcO2uZubp6gfzpd3Iu73y5k1MurzHnhCj6tm7zAFsOwp8w4VqMLDu9bwGOqUBE5zYCrFqZAc4Gl%2BJ9mCzE5uZa7FBuTU0mvo4tSk%2Fid45mR2GbPGM%2BzuJ%2BQbPIqk1ubJ%2FKCxchEhmiG9sAlDNCR03T%2FdyP7QLYm7WDzHXhhexu5%2BML6HLhN4oVYlFykfpG0jmxI%2B5wGlwSPgrkjZttSk4NFcZCNhNnFJg4iLC03nrkPAolH6nsNHl22FuN2JiOXb86z6gsvR4fA2yAQzwLxPW3Ajq&X-Amz-Signature=c31b6691674ba3050a1f603fe4bb212a63195442e68835be9f328f0374358f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK6HMEA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXfJ01Npv0XA%2BCvnTe7tGQz380pwd0kE%2FsyFdh93cyBAiEAxDe7TsZUH2TZsPKbGzNKJnQ9Bv72Wg24clq1sxRhjN0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeQDYbgmtdhOgj%2BCrcAwINN4TcIXYfloIN5QtypVvAfGLgHuEjmIP%2BcMU%2BBnqH4vvyXAcO%2BeYIeTG%2FkYbrE0bv5eFiZXJjbVlY%2B3Q88pEZ0Mldk5wrhM6cJdXa1IXiKxmEN%2B6vmjzVDXMUMmFyXR0LfEMTO30EUvQupCB36%2B8J3Hgb5Pp0PKP1OQFWXpEj8xt0v%2F8Ar2Sb7iiQSOXyP%2BXtA1OLHQRMhmi%2Ba15%2Fe%2BqsGCPaOP1LafnuQqQdz4%2BoAceAMpM9caaORmGYh%2FhK6UDpD1xe9KlayvWl3PvNEBdEQV40qXpbNUCPHJpvbqurhjzu4Ue6qrbrvqTKE8WCVBJLFuhqo3Ey5t2xWPdpZgc85m8KGkaHXKM8rLttW%2Bf4aZQ0HVe%2FT6nAbaOYuRe5BHi%2FnLnsJN3KUUFsEToSTuZ3zS%2B28cYa3Z8zpebPbQpRqOFWipZICssPQ%2BLYCWeOH1xD1G37OQR3%2FHCtmCMyUSOcq2wpr0gwGRfRWt9zMsCf8bym4UeLLTW46v4r9XibMXYBL1ybkijTL97IKIR8jgAJHNWXFNLtkGnK3jN6oX5ymskKJrCohWCNEGjAe2hTJYBIOOpC6DzRcO2uZubp6gfzpd3Iu73y5k1MurzHnhCj6tm7zAFsOwp8w4VqMLDu9bwGOqUBE5zYCrFqZAc4Gl%2BJ9mCzE5uZa7FBuTU0mvo4tSk%2Fid45mR2GbPGM%2BzuJ%2BQbPIqk1ubJ%2FKCxchEhmiG9sAlDNCR03T%2FdyP7QLYm7WDzHXhhexu5%2BML6HLhN4oVYlFykfpG0jmxI%2B5wGlwSPgrkjZttSk4NFcZCNhNnFJg4iLC03nrkPAolH6nsNHl22FuN2JiOXb86z6gsvR4fA2yAQzwLxPW3Ajq&X-Amz-Signature=73d77fd00213965030c44222abcd5e32f5780e66faa390fa3e7e79d34a541d60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
