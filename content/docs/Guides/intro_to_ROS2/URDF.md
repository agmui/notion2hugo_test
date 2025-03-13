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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMH6YVQ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK7EsmZ6jNYv%2FuG7oUyBiWHyC3PxxkTH29fqM4jwELXQIhAPx8S4HaNNg%2FbepnQhZ1a%2FD2v%2BANumy3q3gFS6cpEG0wKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnTeow0us93m4dfJEq3AO0Vr61FgTQCTo%2FSmStlUIToFXcHCXAZg9G3TFE%2B%2F%2FUEEs1fZymm9lHEbGNfwtQKgHL2ArRtzvfEkdw2%2B9mF2JUqNeHq1MnbJthvykvgQ3Lxj5cVSLnInwC7ARTkThc73WCoriGI%2BaI4jKyAIvWMokubuGatod2dXh8i5%2Be1IfAEOYHR1%2BiqgJLXJbPHIvcsbMNm7y5M06xZZvrld0DrqS%2FgPfUrHi4hSbQTfAZ%2BdNCGWeVzM%2Bym32XmEIlz%2FkB6eM5HqnJ75lS4HF6%2BfEnolU5z9cr9q02P%2F2Ro1ZnUSua%2FxSmk%2BwpXHrYfBxCbBJkd%2Flno4aia3OiNXhbDia5oNrzVLE1gfhmykiT1%2BLU8sUzY5%2F2XmcqWmjJIG2D5Ri4F0eIS1AvtCDVnYAGB0H70J2I6IrhGIEc0%2FgOrBNTA3bBYU%2FXtEmXKIoHJgmyY9%2BZMoUMxQP3kXDQ9%2FIGm3K%2FJjY8WW3J%2B06xyW24V1NczXyvqqWfIVz4txsx8t6RpOUjICTL43UlrgphwIToPQcM3ensdDTfPGb5cfiZPRKDw98QxZbjrbWBgSmHu%2BPcecLmmprZ%2F9%2B%2BEqWM%2BNYd%2BlzJevkGdRX7scaf0UXcDpXLys2TZYOcoGHoaO2o5vxv%2FTCHtcy%2BBjqkATOJmb3j2xWcI2AmDbpSYhxyVAw0D3eo7jtUBN%2BiuhhgjOwKAIZJU42IG2Wy8Bt4y8v91dslX5QNElvGD7m0B%2FdJDDu9sryH8uGt3DYw3QyXo6DbuO4SCkZOfQjTAnSISBns0FSHXBmc9HUDNqEWFmbEiLK6Ki1s7lfoBSWPHfaDKi4NBVjNcb5aDtJgDQAQ%2FUZ8vgpuL7XPOAoGA8GHV2CAYi2G&X-Amz-Signature=4fc31d33dfb2f79c17ebb46f4a75ff22940dbf153d97be39a569fae14ff648d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMH6YVQ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK7EsmZ6jNYv%2FuG7oUyBiWHyC3PxxkTH29fqM4jwELXQIhAPx8S4HaNNg%2FbepnQhZ1a%2FD2v%2BANumy3q3gFS6cpEG0wKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnTeow0us93m4dfJEq3AO0Vr61FgTQCTo%2FSmStlUIToFXcHCXAZg9G3TFE%2B%2F%2FUEEs1fZymm9lHEbGNfwtQKgHL2ArRtzvfEkdw2%2B9mF2JUqNeHq1MnbJthvykvgQ3Lxj5cVSLnInwC7ARTkThc73WCoriGI%2BaI4jKyAIvWMokubuGatod2dXh8i5%2Be1IfAEOYHR1%2BiqgJLXJbPHIvcsbMNm7y5M06xZZvrld0DrqS%2FgPfUrHi4hSbQTfAZ%2BdNCGWeVzM%2Bym32XmEIlz%2FkB6eM5HqnJ75lS4HF6%2BfEnolU5z9cr9q02P%2F2Ro1ZnUSua%2FxSmk%2BwpXHrYfBxCbBJkd%2Flno4aia3OiNXhbDia5oNrzVLE1gfhmykiT1%2BLU8sUzY5%2F2XmcqWmjJIG2D5Ri4F0eIS1AvtCDVnYAGB0H70J2I6IrhGIEc0%2FgOrBNTA3bBYU%2FXtEmXKIoHJgmyY9%2BZMoUMxQP3kXDQ9%2FIGm3K%2FJjY8WW3J%2B06xyW24V1NczXyvqqWfIVz4txsx8t6RpOUjICTL43UlrgphwIToPQcM3ensdDTfPGb5cfiZPRKDw98QxZbjrbWBgSmHu%2BPcecLmmprZ%2F9%2B%2BEqWM%2BNYd%2BlzJevkGdRX7scaf0UXcDpXLys2TZYOcoGHoaO2o5vxv%2FTCHtcy%2BBjqkATOJmb3j2xWcI2AmDbpSYhxyVAw0D3eo7jtUBN%2BiuhhgjOwKAIZJU42IG2Wy8Bt4y8v91dslX5QNElvGD7m0B%2FdJDDu9sryH8uGt3DYw3QyXo6DbuO4SCkZOfQjTAnSISBns0FSHXBmc9HUDNqEWFmbEiLK6Ki1s7lfoBSWPHfaDKi4NBVjNcb5aDtJgDQAQ%2FUZ8vgpuL7XPOAoGA8GHV2CAYi2G&X-Amz-Signature=44f8eb38d7148c8d4d726683f7827019c4b151385156a7a1e7cfe05f33683f32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
