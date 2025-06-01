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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWN6PE4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHaSD1LMJImrdO4%2Fl4%2F0SEWhJ5ufS%2FB6Dud6CVUXe6cEAiEAtG85HHfMJ0xMUshL7DJS%2BqhXBHbWt9dg5HdvvyzNG2EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUOP1vmeEQ6WxNwayrcA4habtrW%2FXUazOnBngVIf9rCyqXXWrOiKAT5JmngMZJHEaDaiYSp6mxt04Aa7aNoFrxQXtb4ki5nmhfTVxUdnauVEzWTWp5udF1cOp8z03CTr%2BV7PMHeX8tQjKU7nAI2%2Fg%2BTILbtjx841iTG2kW%2BIhs1JTNOv6RKU%2BYpnTIOwI%2FM4KM2BQf95ok7z4wX7UGwgLr7nPV0w1dIfg2TVVLia447VbSv8VJMPx7VDH3YQITtjw2KMQOV9vSL%2FZWoFWbiyP58mhaWjKeTLssCpOsf91YV7On9ZbJEwUhy7yVyS7dGbmMV6MyjaDkL1ZE7bXQU%2BwLzNnn5eLUE07%2FxJ5tHlxUSWh83CA41FlYU5hT99YxZ%2Fu14AKXsgxF6SJR5WuEENAwKlBEhEUoDbGmUPTHG6U6PJmavLp1fuaBXBI39Hu1xYf8793mKDjqDuFbVbmRDsSzfG1IH%2FN9Q0sYeDtDrIqDblG%2FbXMebPhcA4TNYCn5XH%2FhvX0JSJjxLz1y7sQ70t%2FSLXeDBbK33j%2BupiUSPtTuGLfSi4fFZJa7rSeJ%2B1J%2FP8ixTTJUtNktgn0DYGhqI6u%2BlijbbbFhoQI4Ge79ZlIk6dU5NC%2FuLSYIaaOJCKfV9ZysHgAoDd2OWtUTnMJy578EGOqUBDXsMHdHPLtmYPMp5o2QUVRoAjTf3trUtno8dxvwG19%2BD5ecdvb7rPFi0f4%2F%2BOzOheSGGlpmdRyH%2FQDFhm9lywOJnN23jWG6C2Ib3zcZ0lFm%2F%2BNYhw5jhR7O243ZNk5nphIs5ltJvUW7w2tX5NJASxy9rAe8%2FHWfccFvp%2BRFQCcvR352QY%2BQbtcUeK%2FQ%2FrdlUBYhzHFYathFpFpowNyT1tEc9btk5&X-Amz-Signature=2088dbeb9b7c4c2608eabe00f6b5c95ae66d49b2d4a5b45c229b8f19335a36cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWN6PE4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHaSD1LMJImrdO4%2Fl4%2F0SEWhJ5ufS%2FB6Dud6CVUXe6cEAiEAtG85HHfMJ0xMUshL7DJS%2BqhXBHbWt9dg5HdvvyzNG2EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUOP1vmeEQ6WxNwayrcA4habtrW%2FXUazOnBngVIf9rCyqXXWrOiKAT5JmngMZJHEaDaiYSp6mxt04Aa7aNoFrxQXtb4ki5nmhfTVxUdnauVEzWTWp5udF1cOp8z03CTr%2BV7PMHeX8tQjKU7nAI2%2Fg%2BTILbtjx841iTG2kW%2BIhs1JTNOv6RKU%2BYpnTIOwI%2FM4KM2BQf95ok7z4wX7UGwgLr7nPV0w1dIfg2TVVLia447VbSv8VJMPx7VDH3YQITtjw2KMQOV9vSL%2FZWoFWbiyP58mhaWjKeTLssCpOsf91YV7On9ZbJEwUhy7yVyS7dGbmMV6MyjaDkL1ZE7bXQU%2BwLzNnn5eLUE07%2FxJ5tHlxUSWh83CA41FlYU5hT99YxZ%2Fu14AKXsgxF6SJR5WuEENAwKlBEhEUoDbGmUPTHG6U6PJmavLp1fuaBXBI39Hu1xYf8793mKDjqDuFbVbmRDsSzfG1IH%2FN9Q0sYeDtDrIqDblG%2FbXMebPhcA4TNYCn5XH%2FhvX0JSJjxLz1y7sQ70t%2FSLXeDBbK33j%2BupiUSPtTuGLfSi4fFZJa7rSeJ%2B1J%2FP8ixTTJUtNktgn0DYGhqI6u%2BlijbbbFhoQI4Ge79ZlIk6dU5NC%2FuLSYIaaOJCKfV9ZysHgAoDd2OWtUTnMJy578EGOqUBDXsMHdHPLtmYPMp5o2QUVRoAjTf3trUtno8dxvwG19%2BD5ecdvb7rPFi0f4%2F%2BOzOheSGGlpmdRyH%2FQDFhm9lywOJnN23jWG6C2Ib3zcZ0lFm%2F%2BNYhw5jhR7O243ZNk5nphIs5ltJvUW7w2tX5NJASxy9rAe8%2FHWfccFvp%2BRFQCcvR352QY%2BQbtcUeK%2FQ%2FrdlUBYhzHFYathFpFpowNyT1tEc9btk5&X-Amz-Signature=4287feb4b953c7839704cdc9e6f3a8985f37b19faf92496db5b6b506c5f2c52b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
