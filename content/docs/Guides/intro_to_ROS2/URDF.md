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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CYE7OD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJGbpo%2FJ7iR%2B5JapKgher354cNHUSn%2BsR6PiSrgqiTiAiEA4S53AZfuR52a89zI9yEgAaxw9aqLQRo4cQGRSXyb%2B84qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQIn0cretWAz9VKPyrcAyzN2OKh%2FYT0io3rfaQUSU0gwy%2BDk7k3KQ3fplGgtM1DDAIVAs%2FhVsdu5wlF4pGLdjIR0lODAhrPpVxDa50aUC2kQKyMdmjndm0V5LtPLu5BfRr9l1YeKx5bmPZikGpvk0wpKQhs4M7teg7gYomwDG2fOSDdBuy1v%2Bw0ABJkGqvyNGianeesXqtiR5o2rtl%2F%2B%2BWIe0wZIIYVlIKRDpfcXXD%2FuIvLU%2FCFBEXc28LQnWztnhOaJcOQpk8XP7aIIwxkTDXzRHX0cfyGZ6Fpt%2FjrnYtoGf7u4sv12ve1%2BjxEMMVDZs%2FEBZbYlLAw%2FZMzGy8Ez683jyJh%2FouhPPkbcGCJVZXzFHYlH%2BgWWrQFAWwxHHds1yibCNDb%2FieJXCNOJWvcC%2FoW6uzKY7sdsWiYK2vjTUUlkzJsZjRnPr5wYf6tgg9NrBtj%2BWeWvFulaiAYGOpRkLb4sE1wq9OLNPvxZo7uIoAPcskBDA8wgpUa5RGG%2FMI1xeYs17k8wCRKMmjsGUMyhPHzfmzYBEBvwXfL4wVyAND32ZUvV2LzZih%2FI%2Fd4MpgoHz68%2FskUSX1oxqaBk%2B7R7BS5LctliZOfNwItsLEn5B7XkfdnE%2FqBS4ZIooWuAM9MEoZPuJtuIb%2F%2BvbgaMKDG77wGOqUBglNUqT%2Bes3p6DPFPj0PMmjh0Oyuo6UT6h9H9oUpsMMCAehS6THm9EJYZKTiDC%2Fq5PUKgScPDTRaKq4008YtjneKzKnKVjCNmjQTvJrdxlWca3aXUA0jrXCwwXWgIibrVq05rbxD8uCnbboOWLstAhkpgPBv%2F7FxgqUW2R%2FJHa4NV62FnuoKeXN5CKi8ro8qVS8GxtPEQ5b%2FQOlKeXZamW5EwywCP&X-Amz-Signature=9f4c0604cd98e05a924f737ead39988dcda370f2e8f208460b5ac94d12cb7a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CYE7OD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJGbpo%2FJ7iR%2B5JapKgher354cNHUSn%2BsR6PiSrgqiTiAiEA4S53AZfuR52a89zI9yEgAaxw9aqLQRo4cQGRSXyb%2B84qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQIn0cretWAz9VKPyrcAyzN2OKh%2FYT0io3rfaQUSU0gwy%2BDk7k3KQ3fplGgtM1DDAIVAs%2FhVsdu5wlF4pGLdjIR0lODAhrPpVxDa50aUC2kQKyMdmjndm0V5LtPLu5BfRr9l1YeKx5bmPZikGpvk0wpKQhs4M7teg7gYomwDG2fOSDdBuy1v%2Bw0ABJkGqvyNGianeesXqtiR5o2rtl%2F%2B%2BWIe0wZIIYVlIKRDpfcXXD%2FuIvLU%2FCFBEXc28LQnWztnhOaJcOQpk8XP7aIIwxkTDXzRHX0cfyGZ6Fpt%2FjrnYtoGf7u4sv12ve1%2BjxEMMVDZs%2FEBZbYlLAw%2FZMzGy8Ez683jyJh%2FouhPPkbcGCJVZXzFHYlH%2BgWWrQFAWwxHHds1yibCNDb%2FieJXCNOJWvcC%2FoW6uzKY7sdsWiYK2vjTUUlkzJsZjRnPr5wYf6tgg9NrBtj%2BWeWvFulaiAYGOpRkLb4sE1wq9OLNPvxZo7uIoAPcskBDA8wgpUa5RGG%2FMI1xeYs17k8wCRKMmjsGUMyhPHzfmzYBEBvwXfL4wVyAND32ZUvV2LzZih%2FI%2Fd4MpgoHz68%2FskUSX1oxqaBk%2B7R7BS5LctliZOfNwItsLEn5B7XkfdnE%2FqBS4ZIooWuAM9MEoZPuJtuIb%2F%2BvbgaMKDG77wGOqUBglNUqT%2Bes3p6DPFPj0PMmjh0Oyuo6UT6h9H9oUpsMMCAehS6THm9EJYZKTiDC%2Fq5PUKgScPDTRaKq4008YtjneKzKnKVjCNmjQTvJrdxlWca3aXUA0jrXCwwXWgIibrVq05rbxD8uCnbboOWLstAhkpgPBv%2F7FxgqUW2R%2FJHa4NV62FnuoKeXN5CKi8ro8qVS8GxtPEQ5b%2FQOlKeXZamW5EwywCP&X-Amz-Signature=e1ac4f756e82843f876353c4bd8ae95cdbeb62ad036f62eb884c35936de0c766&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
