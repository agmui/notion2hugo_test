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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GRBZ3Z%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA5jCWDZ5sykMU8sH5Zx9ZQPPRX3BA9uFnzMhPa2uM5gIgS9eBbLfL0iuKEYfsjybz3qbJp93uHjbfI%2Boadmwi89kqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzYqencafCCgJFHWCrcA88mHA8mwu7lVGarrU%2FSmOJ4jC2VW1Vm00vLeJEDLWbeo71Rn9ZeVy0M7%2FonN%2FQSObFpcW7CePknDgup6uBLL0LydCYldIzaWcaWGTRhj8pHaVXabnrDOi1R8fmzWddtQh6xPofLSBrUqLySE1r29INGjrFs09pISldn2p3GKj7TN6yxIygRdnoidq8akeqQMm7dYdmPmSuFEKxSuHdLI0q1Qi5WOm9MVhfviPW7JcpanpJXfZdFKXbcKy7KrcTojHsQJXlCO%2FZNGLnIgbA5A8bYsSXaiW%2B9QtOlOOR3evJrxUBUg1w9zufOiZYLKq%2B%2BgV%2FG%2BCNWKdZVHpeuReAJIPVPjZVzRhDXJmyDcY6dnM7wUhz3xi1Fga7ljw430Op60cube2m5m4SAmPkbUwVNsBTQW7eUb%2BsHMK5a1Kn%2FyzUZmcTzoMpkOfM3FvkoRhMN7Vp8uTwyT63s3quQygMn%2B%2FyeExrgNQzHnXbfmMQygAz2OWUWeD28Bbbq488zEJNLusxiL9Dl1rAenC0YYqHWtuBVdzrrMjKmm6yiWf4mNGaJYgQpfORkoKK8WY1HBDrRUULzVH5RpsPqGeogZXs5011KfQrXuHrAFBiH%2BPUnKgzMcyPbg%2F8%2BvU0WwI1FMJihyMIGOqUBSboO44bTpE%2Ba4%2FhDcxDlpMJlAzGQdgUE9Q%2BI22ko4ouzUYzA9TnSjzNx6d8BUEz7myvpb7r4WQzlq4R4FWto%2BUrOdXCeiA8VYaQbLphKkwPBLIYA%2B7G68LOfWknK6z5Lz%2BJ5d%2BNrF0nxIVdW6IUuRVmh1aj2XBV6SRZn8N2AMXS5iu7hIUE68EdMiD6uZeYKPG5wA6uZepQVJpnf9ECg5lQ1YA0z&X-Amz-Signature=e3a190d2a00a3605c2496c6b782fb2adef25641ae7414699f5e467b2335edbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GRBZ3Z%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA5jCWDZ5sykMU8sH5Zx9ZQPPRX3BA9uFnzMhPa2uM5gIgS9eBbLfL0iuKEYfsjybz3qbJp93uHjbfI%2Boadmwi89kqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzYqencafCCgJFHWCrcA88mHA8mwu7lVGarrU%2FSmOJ4jC2VW1Vm00vLeJEDLWbeo71Rn9ZeVy0M7%2FonN%2FQSObFpcW7CePknDgup6uBLL0LydCYldIzaWcaWGTRhj8pHaVXabnrDOi1R8fmzWddtQh6xPofLSBrUqLySE1r29INGjrFs09pISldn2p3GKj7TN6yxIygRdnoidq8akeqQMm7dYdmPmSuFEKxSuHdLI0q1Qi5WOm9MVhfviPW7JcpanpJXfZdFKXbcKy7KrcTojHsQJXlCO%2FZNGLnIgbA5A8bYsSXaiW%2B9QtOlOOR3evJrxUBUg1w9zufOiZYLKq%2B%2BgV%2FG%2BCNWKdZVHpeuReAJIPVPjZVzRhDXJmyDcY6dnM7wUhz3xi1Fga7ljw430Op60cube2m5m4SAmPkbUwVNsBTQW7eUb%2BsHMK5a1Kn%2FyzUZmcTzoMpkOfM3FvkoRhMN7Vp8uTwyT63s3quQygMn%2B%2FyeExrgNQzHnXbfmMQygAz2OWUWeD28Bbbq488zEJNLusxiL9Dl1rAenC0YYqHWtuBVdzrrMjKmm6yiWf4mNGaJYgQpfORkoKK8WY1HBDrRUULzVH5RpsPqGeogZXs5011KfQrXuHrAFBiH%2BPUnKgzMcyPbg%2F8%2BvU0WwI1FMJihyMIGOqUBSboO44bTpE%2Ba4%2FhDcxDlpMJlAzGQdgUE9Q%2BI22ko4ouzUYzA9TnSjzNx6d8BUEz7myvpb7r4WQzlq4R4FWto%2BUrOdXCeiA8VYaQbLphKkwPBLIYA%2B7G68LOfWknK6z5Lz%2BJ5d%2BNrF0nxIVdW6IUuRVmh1aj2XBV6SRZn8N2AMXS5iu7hIUE68EdMiD6uZeYKPG5wA6uZepQVJpnf9ECg5lQ1YA0z&X-Amz-Signature=023abeb2399f4a2e0ed34f1d14802a302b3d631f8a84c0bc7885d003a92174c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
