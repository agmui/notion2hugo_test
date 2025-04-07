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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QENSHZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRckOySYBSJONuGSOetrrExHcqFnWc1RI3vfYLZognCwIgTJ6YdrzSkK3ifAZJlFVJRibBo%2BQcg7m6HzLBQ%2FHFtwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIWevXWYNIbzeLodxSrcA3MI4HYwy8nGcXqUv5JFapB8S73S5RvrqZna9%2FqWR2YLGNr%2BU%2BbrIC4cwrGsGOrsbPVIWV1dgc400Xydg48%2BCyZ1Ft59maVYD44gWiy7GHKxj%2Fn97WLGuotDj03GMwoqd7r3B5KM5whpDJql%2BcBFbx0bZJfbNpbzuVHkNCuQypXt6chqkj9fUtAIVublpxUdylS7pU5JeWfX1ewkDe%2BpRJTtG07jXHd%2BlmT2fYLgAl4fg20nDynV%2BEo3bjg9OFgBEjqhhZbok4G26b7k9k7z8Az1DZRmTzLd3%2Fce5vIKZjXWQe5HUJ0YSzlGkQoXjK2QJ8aYexzzsoAeX0m6RGm93fFRIExsRlRFEIfrUsV%2BcLFw1504Wenjl1lHLwLug5XB7trAXPNWUChtC3lW%2B8oqmd0%2B07SxcLTPh9KQSPYzDW7Z16JCCQF3t54t0YQB63gUKzWeedbtav%2BXRfM9QLy5SHlCaM7OZ%2FjnOT9HBXQkKYXqMLW0KHI8HknA%2BOMUzHentMSLHtPBUDsHriRjfASUXTINOQYrsQIbkh0BlyghUisUP%2BtFEr1Hrb9XnosehwjeewCBzvQ1iqyofyGw1FmFjgycWnVoVvh0841Seb7F1%2B29tzmqWJsWlSwKXYw1MPDUzr8GOqUBDvrPPfsNvHnNiU%2FbtdfazV%2Fp%2FeQIsJk1U3QW%2B3Iz0ObyNbOovVSS1aqcku7oaMrcmuT%2BQzA3FgfO77Y2pD3xqp2DJqDu7hrnRl110F6%2BLI3LFfYJIeyA7fQono0GbOA4gUM62LNTHq83aXz0yztvI3RHtN8ck7Ac9F5ejZ0YMAKMTJt15KvGj9RsCgtifut42MZMqRjVpEBxRYP6uK0qm%2F6d4gIU&X-Amz-Signature=4f4e202bb48dc762a091f96e3e1c7c22d35c5e22981e2c7f66e5b0a4a650da78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QENSHZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRckOySYBSJONuGSOetrrExHcqFnWc1RI3vfYLZognCwIgTJ6YdrzSkK3ifAZJlFVJRibBo%2BQcg7m6HzLBQ%2FHFtwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIWevXWYNIbzeLodxSrcA3MI4HYwy8nGcXqUv5JFapB8S73S5RvrqZna9%2FqWR2YLGNr%2BU%2BbrIC4cwrGsGOrsbPVIWV1dgc400Xydg48%2BCyZ1Ft59maVYD44gWiy7GHKxj%2Fn97WLGuotDj03GMwoqd7r3B5KM5whpDJql%2BcBFbx0bZJfbNpbzuVHkNCuQypXt6chqkj9fUtAIVublpxUdylS7pU5JeWfX1ewkDe%2BpRJTtG07jXHd%2BlmT2fYLgAl4fg20nDynV%2BEo3bjg9OFgBEjqhhZbok4G26b7k9k7z8Az1DZRmTzLd3%2Fce5vIKZjXWQe5HUJ0YSzlGkQoXjK2QJ8aYexzzsoAeX0m6RGm93fFRIExsRlRFEIfrUsV%2BcLFw1504Wenjl1lHLwLug5XB7trAXPNWUChtC3lW%2B8oqmd0%2B07SxcLTPh9KQSPYzDW7Z16JCCQF3t54t0YQB63gUKzWeedbtav%2BXRfM9QLy5SHlCaM7OZ%2FjnOT9HBXQkKYXqMLW0KHI8HknA%2BOMUzHentMSLHtPBUDsHriRjfASUXTINOQYrsQIbkh0BlyghUisUP%2BtFEr1Hrb9XnosehwjeewCBzvQ1iqyofyGw1FmFjgycWnVoVvh0841Seb7F1%2B29tzmqWJsWlSwKXYw1MPDUzr8GOqUBDvrPPfsNvHnNiU%2FbtdfazV%2Fp%2FeQIsJk1U3QW%2B3Iz0ObyNbOovVSS1aqcku7oaMrcmuT%2BQzA3FgfO77Y2pD3xqp2DJqDu7hrnRl110F6%2BLI3LFfYJIeyA7fQono0GbOA4gUM62LNTHq83aXz0yztvI3RHtN8ck7Ac9F5ejZ0YMAKMTJt15KvGj9RsCgtifut42MZMqRjVpEBxRYP6uK0qm%2F6d4gIU&X-Amz-Signature=68a713829f177177affb4a1609b0e570e514e7c12d119e576da6d9f7ea6cba61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
