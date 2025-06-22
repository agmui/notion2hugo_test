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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FACCXHR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDmd%2FhWfzyW6oRGZD3%2FFpXbbORftdZTth0ZHXRE0bHyMAiEAyc%2B8jOuqzpGJTfmM77x%2B3ybBjQjHmPXEgB7HtPJ3gz8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkC990Bj2GSej0w6CrcA3%2FUqFknPcGFdhFG2iWkPD02OCmVehFuZEc7ZzsSkOy3aJ0G9QVaqHlxO6bAfUmsVRMsrCmTD3u%2FOEQtyatizM3gTKvoiAL9q3N0HpXIUKsDevet0hz8u14a4H55%2Fd8z%2Fktiwe3ufMVql86Zo9niTR64DlnaephXwyBZxbj4paX6UrS%2F7JX%2F5T7019Sd1SXYtCttOXGJQba%2B%2B9IiarxOl1SZaURpLBa3myhh%2F%2FlPGqtVl17AMcRdNXmTqJQnKehJtdjigWA2KA7syOcrJb1ahmuAAToD%2Fxa9orgtMRovL%2BY0wzbi0FVDMgyPieDPoc3FyJK26Os7d7Wue7vr%2B%2BUk9gkjIxbHocyL%2FK24Qw1aeeWI9zKF9wpoVtgDh3YNCQB4KvcgIxG5SGORMsT60b%2FUgQmgEkf1dyFH6GN%2F0YFGO1qroVow3E7KVblcde%2BldWkqITvaJV%2F4Bu%2BVL4YK35LInuWfdG%2Bfblesc9zXd%2F0rM9qAx3oZV8kTkQResQ0WYGvCmGavO8r60i6Frqr5Ph0PEhrKix6Gv%2FoB1u05At6IjRQHWYEGqeRnLtC0ehCBwo4qnSMT%2BgbTiLlhHVf%2BNwbavmE7MUcww3oX5i%2BZ9LRAGdvqxQOotmmtw8oVlZ69MIWT4cIGOqUB5VVM%2BPdfKK5%2FdH1gXKQlckbEVfrxZO1vMsyK5lSMj3POJ9wIGDmuW%2Bjb%2FaVWbMdO2BpHLAKKHza%2Bqj1apt5XNCtzoq3QW%2Fndz0UWBH6yW39seD4B5ADD31yX5MJcb%2F3GjcR9qKlD8PMzHQlSRlcm0wV8Iz4e4NR2a54zW5qQ3ux3LIqIDfQ4Uxq6Q%2BIATWEcTkbWZJudaXZbbInQb4EP%2BL3nalHX&X-Amz-Signature=a967acc7b34c298f0f81e12a5ca2d268dc775e84532cde49ff9e8d62b042fb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FACCXHR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDmd%2FhWfzyW6oRGZD3%2FFpXbbORftdZTth0ZHXRE0bHyMAiEAyc%2B8jOuqzpGJTfmM77x%2B3ybBjQjHmPXEgB7HtPJ3gz8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkC990Bj2GSej0w6CrcA3%2FUqFknPcGFdhFG2iWkPD02OCmVehFuZEc7ZzsSkOy3aJ0G9QVaqHlxO6bAfUmsVRMsrCmTD3u%2FOEQtyatizM3gTKvoiAL9q3N0HpXIUKsDevet0hz8u14a4H55%2Fd8z%2Fktiwe3ufMVql86Zo9niTR64DlnaephXwyBZxbj4paX6UrS%2F7JX%2F5T7019Sd1SXYtCttOXGJQba%2B%2B9IiarxOl1SZaURpLBa3myhh%2F%2FlPGqtVl17AMcRdNXmTqJQnKehJtdjigWA2KA7syOcrJb1ahmuAAToD%2Fxa9orgtMRovL%2BY0wzbi0FVDMgyPieDPoc3FyJK26Os7d7Wue7vr%2B%2BUk9gkjIxbHocyL%2FK24Qw1aeeWI9zKF9wpoVtgDh3YNCQB4KvcgIxG5SGORMsT60b%2FUgQmgEkf1dyFH6GN%2F0YFGO1qroVow3E7KVblcde%2BldWkqITvaJV%2F4Bu%2BVL4YK35LInuWfdG%2Bfblesc9zXd%2F0rM9qAx3oZV8kTkQResQ0WYGvCmGavO8r60i6Frqr5Ph0PEhrKix6Gv%2FoB1u05At6IjRQHWYEGqeRnLtC0ehCBwo4qnSMT%2BgbTiLlhHVf%2BNwbavmE7MUcww3oX5i%2BZ9LRAGdvqxQOotmmtw8oVlZ69MIWT4cIGOqUB5VVM%2BPdfKK5%2FdH1gXKQlckbEVfrxZO1vMsyK5lSMj3POJ9wIGDmuW%2Bjb%2FaVWbMdO2BpHLAKKHza%2Bqj1apt5XNCtzoq3QW%2Fndz0UWBH6yW39seD4B5ADD31yX5MJcb%2F3GjcR9qKlD8PMzHQlSRlcm0wV8Iz4e4NR2a54zW5qQ3ux3LIqIDfQ4Uxq6Q%2BIATWEcTkbWZJudaXZbbInQb4EP%2BL3nalHX&X-Amz-Signature=1186c0cc040e0b6b9c5fd2f8ca7d5237d7bc3dc19dde54540f09e4a8cf666adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
