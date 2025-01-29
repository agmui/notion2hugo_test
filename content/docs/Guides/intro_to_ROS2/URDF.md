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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6SJIQH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9l%2FCdncHMdtVve4HlT6gvdpTnML3bqBTOQ52ijxlyUQIhAPxaS72nwLxpUmARK4bXerxpAcE1Z2bwFnwR40LxFyn%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwc4qiYfEFxOrRWZQq3AP%2Fw2VzuhI1yhpZAjEU5z7YslFz3IPh4fZqIQCUikauthtNG9Lt7cSQFdKOv5hLcuYgjHKc94URtHCbq4m3PEQ%2FQ%2BsmCTBiXjOH5oEOhisjKlg7cfV%2FR3uLIOYf%2Fzh1fVqNFjMQ8tl5C%2B8fnxq%2BOfms6s81XjE5Qv3AlhYJxAbkPZdEyirz5tyI%2BCoiVu86W5jljLr9L3PfXnCF8pP1VF0fisvirSHeN0eIEWyhr9xJxEbHDk6TNx9YVaroKCP43xWQomDkDJLjz5n2dFg%2Fw3CJjYKs9Kt6LOuOuu8pFhzczRVrvTb%2B2LD%2FVjkeQYXOGcdvjdV1Do58O9Yc3eusonwd4NVDj7FY%2BEltpyvU2IbQAlaBm5zKVxI1Jomcb5h557OhQ2Us2nFB0uwr35MSu7H8cPbhPMxDwSN%2BlizXqBwYvxsEiXNRoUR%2BTonM8ca5G%2BxhonYF8sMu4DLZt%2B4edAVW0Li4T9OrFRKT40Ek6yGbWrheqgtm9HWfxaFRcTycw8kWwG2jdr3v7oILU0dfU3%2BD7i2jR1Mvzx%2FN%2F2m0MMAd6UFQyJweWh0ld9bG6RWtfm5Jnr8mjhNGVEkvTEgemtbjcIHixkMz7SPWukXYk63Q8SHdBTPY%2Bb0mVkiD9DDc5ee8BjqkAX56W3vJ0f%2Ffh%2Fv3HErPcvuVmyyL2o5gBT0qkdFkfygZhXZYaLWjTB3nMeyUi44cU07iiaaXEIj7EUWaN1Ox8XtQNYRnKyhp%2FhxRZ60lgO6O9A4o9woFu2eYlgFic3s0plQSfElO7yT7N5ErndGlnZO7dE9ZXGrwmf4w2hhuAfMa9HC7T5qD0dOI53ZkADR7vnACpIEd6Ufm1zprQFqjnDgW5XBb&X-Amz-Signature=ad3d5435835056dac767034378bb7cb82ef07e9d7f04e5dfd9a2f5847d803df5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6SJIQH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9l%2FCdncHMdtVve4HlT6gvdpTnML3bqBTOQ52ijxlyUQIhAPxaS72nwLxpUmARK4bXerxpAcE1Z2bwFnwR40LxFyn%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwc4qiYfEFxOrRWZQq3AP%2Fw2VzuhI1yhpZAjEU5z7YslFz3IPh4fZqIQCUikauthtNG9Lt7cSQFdKOv5hLcuYgjHKc94URtHCbq4m3PEQ%2FQ%2BsmCTBiXjOH5oEOhisjKlg7cfV%2FR3uLIOYf%2Fzh1fVqNFjMQ8tl5C%2B8fnxq%2BOfms6s81XjE5Qv3AlhYJxAbkPZdEyirz5tyI%2BCoiVu86W5jljLr9L3PfXnCF8pP1VF0fisvirSHeN0eIEWyhr9xJxEbHDk6TNx9YVaroKCP43xWQomDkDJLjz5n2dFg%2Fw3CJjYKs9Kt6LOuOuu8pFhzczRVrvTb%2B2LD%2FVjkeQYXOGcdvjdV1Do58O9Yc3eusonwd4NVDj7FY%2BEltpyvU2IbQAlaBm5zKVxI1Jomcb5h557OhQ2Us2nFB0uwr35MSu7H8cPbhPMxDwSN%2BlizXqBwYvxsEiXNRoUR%2BTonM8ca5G%2BxhonYF8sMu4DLZt%2B4edAVW0Li4T9OrFRKT40Ek6yGbWrheqgtm9HWfxaFRcTycw8kWwG2jdr3v7oILU0dfU3%2BD7i2jR1Mvzx%2FN%2F2m0MMAd6UFQyJweWh0ld9bG6RWtfm5Jnr8mjhNGVEkvTEgemtbjcIHixkMz7SPWukXYk63Q8SHdBTPY%2Bb0mVkiD9DDc5ee8BjqkAX56W3vJ0f%2Ffh%2Fv3HErPcvuVmyyL2o5gBT0qkdFkfygZhXZYaLWjTB3nMeyUi44cU07iiaaXEIj7EUWaN1Ox8XtQNYRnKyhp%2FhxRZ60lgO6O9A4o9woFu2eYlgFic3s0plQSfElO7yT7N5ErndGlnZO7dE9ZXGrwmf4w2hhuAfMa9HC7T5qD0dOI53ZkADR7vnACpIEd6Ufm1zprQFqjnDgW5XBb&X-Amz-Signature=6d79a9d098c10f1f053307c229d4e5cb608f62675e4f97258e43496017efc3df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
