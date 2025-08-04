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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=7afab19cd4172b149951a883ab5519653b72d9645976e83b7f01d87f93c59305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=15fac2273af86a277e1bc2627996755b7b2ac175798eca9b6c0ec410d942b30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
