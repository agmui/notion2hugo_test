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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3Z7DSC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIB8SeurcoyWj1%2BD3n%2BFCnvJBnlZ2sabdwTOT6MHjNt3HAiEA1oYLLC6l4fmEJ6gXOnxcxkyTbjSScODfbQ3Xl7I%2FFC4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5AJw6g%2FHv1Cw88qyrcA7SMNkKOjy82o7aKqbYGzInO09mzQeUmcn57Up2%2Fb6jG6MhWMCBuGNzrmWym%2FyAf0VcLcOSIvs5tjD4mfajRTemQFk%2B%2B%2F4xQBt%2FnhNMzLXz%2B3D%2FeaQM4MOdCCc%2BgL3tjZrDi5ZLCGbkIY497VtVQklZglv7XOeG4tWbzh69I3wdnKbQzuINguEWhPbUb5hW%2BHd%2FUIIVErYfWMdM5Gqzd4UkLCECeA%2FJY%2FnEz8XIo7aIycH8ajTFCKnkoAG7nldHgx1XbOexFu8pe%2BsD%2FCFcCUnkpT8Sa4qljlqd%2B7Mv1WHAQXKCdqm0KgoChQf0IYVQZoJ5s5HWRiJw3CRDpFKhzdFhc26yNUzBX%2BBJZjOE1fXKU9LOXo7z%2F6jZI64t9WfPOgxV1xdqApFG3KHNqaD4XLEyIbywTqNcOl2w00npEU0L%2BjPWYRMEcJs%2Fyy7JOKAn3E2gUhwWBAlGs71jmPN%2FJGvE6YwxXLa3vGW4NRFkbbHzdqri375exnoBKyfutGVwuvH0UEQKLwkzbc21BbX6ZsGezt2yd4xvu0J%2BNHZlG7aoaLWA%2F9iXblaGbeAeRF3tNSLFSEE2NDh%2BjLMajj03RGfC25zThGwtp0XBdiQ1DIcbwKxa7PfQPWE4qNhF8MN7E28QGOqUBBjt%2BZ7NSTj%2BjutJQa11cY83itKbkCl8ANANrxXYSpZY4KLDjQz5MVmcp6mbeEIEqkLHVZHIpWJ7Cm4iaY6tPkZEguaRl5g8F%2BGX3OoyugacbkhJKIfYOOMlyeaM5DiFpoUbbQ%2F7UxB5ApATy3k0UhQKVbf69X62ks6v50xa63vTEJEAzrAeW6AuJ22lNpPvuZkIPPeou8PQqf1r95A5lfivbTtsN&X-Amz-Signature=92309dd979e7bf358f97de06fa77562733b7b68bea762c3448bb61272d4b3377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3Z7DSC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIB8SeurcoyWj1%2BD3n%2BFCnvJBnlZ2sabdwTOT6MHjNt3HAiEA1oYLLC6l4fmEJ6gXOnxcxkyTbjSScODfbQ3Xl7I%2FFC4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5AJw6g%2FHv1Cw88qyrcA7SMNkKOjy82o7aKqbYGzInO09mzQeUmcn57Up2%2Fb6jG6MhWMCBuGNzrmWym%2FyAf0VcLcOSIvs5tjD4mfajRTemQFk%2B%2B%2F4xQBt%2FnhNMzLXz%2B3D%2FeaQM4MOdCCc%2BgL3tjZrDi5ZLCGbkIY497VtVQklZglv7XOeG4tWbzh69I3wdnKbQzuINguEWhPbUb5hW%2BHd%2FUIIVErYfWMdM5Gqzd4UkLCECeA%2FJY%2FnEz8XIo7aIycH8ajTFCKnkoAG7nldHgx1XbOexFu8pe%2BsD%2FCFcCUnkpT8Sa4qljlqd%2B7Mv1WHAQXKCdqm0KgoChQf0IYVQZoJ5s5HWRiJw3CRDpFKhzdFhc26yNUzBX%2BBJZjOE1fXKU9LOXo7z%2F6jZI64t9WfPOgxV1xdqApFG3KHNqaD4XLEyIbywTqNcOl2w00npEU0L%2BjPWYRMEcJs%2Fyy7JOKAn3E2gUhwWBAlGs71jmPN%2FJGvE6YwxXLa3vGW4NRFkbbHzdqri375exnoBKyfutGVwuvH0UEQKLwkzbc21BbX6ZsGezt2yd4xvu0J%2BNHZlG7aoaLWA%2F9iXblaGbeAeRF3tNSLFSEE2NDh%2BjLMajj03RGfC25zThGwtp0XBdiQ1DIcbwKxa7PfQPWE4qNhF8MN7E28QGOqUBBjt%2BZ7NSTj%2BjutJQa11cY83itKbkCl8ANANrxXYSpZY4KLDjQz5MVmcp6mbeEIEqkLHVZHIpWJ7Cm4iaY6tPkZEguaRl5g8F%2BGX3OoyugacbkhJKIfYOOMlyeaM5DiFpoUbbQ%2F7UxB5ApATy3k0UhQKVbf69X62ks6v50xa63vTEJEAzrAeW6AuJ22lNpPvuZkIPPeou8PQqf1r95A5lfivbTtsN&X-Amz-Signature=e81585db6725aff122fbb44ba5279d50b11272287f6385cc59cb5a4ee775de01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
