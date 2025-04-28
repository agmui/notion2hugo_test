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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663474M6FL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzX8NTfKSoKC5caJ1bfkmZjzccP4wTYtn%2Bj0WGvtrNBAIgW%2B30AwxO7tYQBtPul344WzeKRrwq%2BQzPLHN5PDv4LgMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAtWhTU5F6eburZbOyrcA23ujvPMeO5Pg9z4eiw53lubk8eiLmgJICqwPI38FsyGnH2KMT9yBPJOVx09F%2B4H6XCDsDlpwYlVXVh8QrQZb5k4vzvJb8UQGcMyuI66kzP0F2pwa7JQr2wMODEyH9wEJhwsOopzVTeys1RgytMCdmXT85230b477NIXwVQt2uM%2BM26iTBI%2FGbps8cds%2B35w1lG71m1TV4S2gMF5SGkG7tnvb60LOfYmp%2FmVtsLx%2FtXUmwS1vp2dfTz3T2mkNqANzeO73vDW7zB1%2BvoXNS3U3kX7RlFDWbKtFeLFlrRfsFTG0IZUfSBsngkT7H709ij2N%2BzebminvKl%2B7ayfKxuXh5%2F5gIYpx%2FHNdc3nNJNR10xpcbpIp28a2VCriBaVc%2FRRq1j3ifgnSleUDZsYbkZbfWhnwvob1EcBPBBe9QSFXEIL%2BmW6gFHYQPtegDCeJl%2BlfNl3KtcyL11gxPx7ysSnrdtRA9hieS%2FjMTEzgAjmaMyCk1EGHHaoIObmDoQDtTl9y82dv42HF%2FTwiCjf9jbLAEbi9D21ltY38NwcU7OQyxjGltYAXcJjVrWJB6p4p6%2Bxi6r9b5qslwJ%2B0z7I1HihBbWbetKV4Udbs%2BWNcuJ%2BL9YEoS8MeL8Xa%2BWC0r%2FfMKCEvsAGOqUBV0vDCYE%2BmxKNrtezz%2FPe5UpT3NIm3342X0DEWd58zfjw1NhMj1mZg9uTKtsaYAy90giOEyi1KongS1o4f63rycfGYBfenGXW1d8%2F7VpdPj7%2BoIceN1639lsgYZKnNNLfe2gs3%2Bi1Wx4jLGwjHSCRW03sgsnLleP5ehJuOd58X5%2Fex2jzvemc4B%2BSn7NPfPpsu8MEL5eHsus5zda%2F%2Fs6h9%2Fa9TaQw&X-Amz-Signature=ecc971e7f4d05bf377fe3610019a7a5958ed2d1f0cd3548924f49ded7a2c44e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663474M6FL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzX8NTfKSoKC5caJ1bfkmZjzccP4wTYtn%2Bj0WGvtrNBAIgW%2B30AwxO7tYQBtPul344WzeKRrwq%2BQzPLHN5PDv4LgMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAtWhTU5F6eburZbOyrcA23ujvPMeO5Pg9z4eiw53lubk8eiLmgJICqwPI38FsyGnH2KMT9yBPJOVx09F%2B4H6XCDsDlpwYlVXVh8QrQZb5k4vzvJb8UQGcMyuI66kzP0F2pwa7JQr2wMODEyH9wEJhwsOopzVTeys1RgytMCdmXT85230b477NIXwVQt2uM%2BM26iTBI%2FGbps8cds%2B35w1lG71m1TV4S2gMF5SGkG7tnvb60LOfYmp%2FmVtsLx%2FtXUmwS1vp2dfTz3T2mkNqANzeO73vDW7zB1%2BvoXNS3U3kX7RlFDWbKtFeLFlrRfsFTG0IZUfSBsngkT7H709ij2N%2BzebminvKl%2B7ayfKxuXh5%2F5gIYpx%2FHNdc3nNJNR10xpcbpIp28a2VCriBaVc%2FRRq1j3ifgnSleUDZsYbkZbfWhnwvob1EcBPBBe9QSFXEIL%2BmW6gFHYQPtegDCeJl%2BlfNl3KtcyL11gxPx7ysSnrdtRA9hieS%2FjMTEzgAjmaMyCk1EGHHaoIObmDoQDtTl9y82dv42HF%2FTwiCjf9jbLAEbi9D21ltY38NwcU7OQyxjGltYAXcJjVrWJB6p4p6%2Bxi6r9b5qslwJ%2B0z7I1HihBbWbetKV4Udbs%2BWNcuJ%2BL9YEoS8MeL8Xa%2BWC0r%2FfMKCEvsAGOqUBV0vDCYE%2BmxKNrtezz%2FPe5UpT3NIm3342X0DEWd58zfjw1NhMj1mZg9uTKtsaYAy90giOEyi1KongS1o4f63rycfGYBfenGXW1d8%2F7VpdPj7%2BoIceN1639lsgYZKnNNLfe2gs3%2Bi1Wx4jLGwjHSCRW03sgsnLleP5ehJuOd58X5%2Fex2jzvemc4B%2BSn7NPfPpsu8MEL5eHsus5zda%2F%2Fs6h9%2Fa9TaQw&X-Amz-Signature=5499318754d8d2298c13f8367fed7a74c8523c1c1df0e021e3643652efc24461&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
