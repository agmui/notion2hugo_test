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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N64YDQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCPMcKGoBRWRIQFgzADAHYSF3CXlvwcz9zQANmVuh8IsAIgMH7YiuJapQKflM38xwf8YBmtTES28YkuJDFnBNsEm8kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2Vp3mH53950YAQACrcAxTIuv%2F2AnJ7%2FSI5Q1lb%2FDrYk6EcTtNJxEXBZYrtVSlKNUhy2973d8BQz3UEJ%2BZuZ1%2BdiIRBTY40rMiSaobp%2F0QPegrHyUMbM7Cx%2FycR5zZcrN5pgCqHUWFe9eICViL9zOg3wuVlf%2BKAzbPCuMtomosa41YoQGZwqQbWFTYgwN7kHZNimXp5E9w3vGvci6tY5U0ws546nySNLqgo1bpYr1A3uN03QLvRdjjtwTUcs21ncXnUFSIRXlfmLyu1fNqL1zvTsf6raMLptC4rnaE2ve84W2%2F1VQ8U4EAOQFttk5lj06zSuDspI7C9i%2FRTUkHAU9N7V6fpjy5o1yVM23lR7l7BmP7lvV4auSuYc54fm4e0xg9Kh6nOz5AYwqg7n4eeqV5pc7Gev79XKltGY0%2BJu2I8QR4sURjumRaU4g6EuLW02NM2x%2BcYoiPRLFytBbE6y7hjGYhwY0a3fcM%2FQAfRqquMsksJYgl73VEZqXpFDQT3UA87mXBAggIscyZzc%2FeO032uk03GK2gObsCNFH7pPcyToDtX4pqQBdTevr4W4u%2BanrkUC0kUgm5SnpVTevsoFg0sGTYpR80IR0FOHYkhpjDu80os3rN9z%2FYKibTkERfwWU%2BNDlXn%2BazYxiNNMLeM0L0GOqUBPLeEwqu%2FqEE3CtWtHV9cFGgnZg3%2FR%2FXRejKRw2YCV7JWKTjloZnjvYFCA30xDnfHcYFy94tzRcsJIo6lEvYWcxlFqX1jr8klNkSVUQw5BVJ3eyqaqCo7TVjCxdZpboJBn7GYuHw8lgQw9hgHn%2FwyWOiikJla7ClFlUJXtux1nRLqUZMeSdtiznvK4AbnErllkS3F2rQ0h9Wr%2BYb2zH6CcFtr9RKZ&X-Amz-Signature=bd82dfbc874051e2e7724f189b6761c32c8bcf0de4293a029e7cd56c3c938e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N64YDQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCPMcKGoBRWRIQFgzADAHYSF3CXlvwcz9zQANmVuh8IsAIgMH7YiuJapQKflM38xwf8YBmtTES28YkuJDFnBNsEm8kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2Vp3mH53950YAQACrcAxTIuv%2F2AnJ7%2FSI5Q1lb%2FDrYk6EcTtNJxEXBZYrtVSlKNUhy2973d8BQz3UEJ%2BZuZ1%2BdiIRBTY40rMiSaobp%2F0QPegrHyUMbM7Cx%2FycR5zZcrN5pgCqHUWFe9eICViL9zOg3wuVlf%2BKAzbPCuMtomosa41YoQGZwqQbWFTYgwN7kHZNimXp5E9w3vGvci6tY5U0ws546nySNLqgo1bpYr1A3uN03QLvRdjjtwTUcs21ncXnUFSIRXlfmLyu1fNqL1zvTsf6raMLptC4rnaE2ve84W2%2F1VQ8U4EAOQFttk5lj06zSuDspI7C9i%2FRTUkHAU9N7V6fpjy5o1yVM23lR7l7BmP7lvV4auSuYc54fm4e0xg9Kh6nOz5AYwqg7n4eeqV5pc7Gev79XKltGY0%2BJu2I8QR4sURjumRaU4g6EuLW02NM2x%2BcYoiPRLFytBbE6y7hjGYhwY0a3fcM%2FQAfRqquMsksJYgl73VEZqXpFDQT3UA87mXBAggIscyZzc%2FeO032uk03GK2gObsCNFH7pPcyToDtX4pqQBdTevr4W4u%2BanrkUC0kUgm5SnpVTevsoFg0sGTYpR80IR0FOHYkhpjDu80os3rN9z%2FYKibTkERfwWU%2BNDlXn%2BazYxiNNMLeM0L0GOqUBPLeEwqu%2FqEE3CtWtHV9cFGgnZg3%2FR%2FXRejKRw2YCV7JWKTjloZnjvYFCA30xDnfHcYFy94tzRcsJIo6lEvYWcxlFqX1jr8klNkSVUQw5BVJ3eyqaqCo7TVjCxdZpboJBn7GYuHw8lgQw9hgHn%2FwyWOiikJla7ClFlUJXtux1nRLqUZMeSdtiznvK4AbnErllkS3F2rQ0h9Wr%2BYb2zH6CcFtr9RKZ&X-Amz-Signature=126473567161c4520cb543b5700692b292fff27fea7e635b554153c9714ef3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
