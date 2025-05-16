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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBVC65A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTiAXgPIHDKJYII9BcgZza05ccaCgjNubl51PUB25%2BQAiB%2BhZ5%2BW1MW4o9nAk7%2BKiLgjIGFQerlMrXnGUCaAoXkPyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMu1IK4cJJSA4wAt6hKtwDgcBMllcw8V70Vz2y5uLJRef7N1dktWK3Qr8OR21OoAMJYIPGnjfTkZLbgQrRYLuahl6D9cF7wLx7VfS4jxA6c9ugspSsjby3Ku%2FOu815756E5MubGMW44oWrm1zvKoqc4VgdiNrFgqJylzkWWf9Om36lTMiKiBbEUIMyByn96okbIyrSv8Cna1kTATkDeGpx2o8MJWvOGSFYZz2QfQj%2Fo9sRmcbYeIM7PSj7icH%2F5Rdg5gP5NqihdukHBI148blMGUybaJckPNyT1QqNBqv5MvLBmvfzi4Uo%2FFwJ%2BtVdVDgXyV%2BEKOZGoCKpxJ%2F6deOPf4gzVQS%2Bt0fQULTu%2FYRhFelopB%2F4FRocEXCOixjEPg9DBeYfLVDIa4I3ZpsHNHU%2BEsA%2FSXkUjldJ0Av0YOefMRJ0tGbqw1SNTsMDK3J5142mheMkjYjYLytUXbMRa5fVr6z6J6tWrvZA%2Fh0dy%2Bz10YIMCdZ1OyzyfY5Gp5%2F2L4cs6IXn9HPWbdVJYYzJC1xeTHdxXH0BD4S1bCYWPSOcXx5ce83p1Gizdh6fb2qKPxWKQjFu8hfBJzXOSSS1ZHIfUrOlSbG%2FeSXCrTwNLJstMb7GxokIB1fTk0DuxFqmeFNmjTXqsm9HIjSqqQUwioibwQY6pgFy5YpL5KNc0HB72vpB44SIVUsrNid0eLIUmtlYSEJt1vyG78LN14UI%2F4jU6Pqbm%2FgpWIvXBjgw4O2YdNAGpEchyd%2F9ggQQ9XGBwxts97vm4jLrIxCL84dThrimq4oIXtXe51HWnl3cy1I0Yz4OKzmTVVOPjCJYUfrgS6OvfdDA49wBlAXiLHiq0rBj5KsigZPZY2UaVVJreulrpL5h4sVWgq9YHW%2BC&X-Amz-Signature=7ba4b28e07c5bce20b783bd5027ea4197a8922f78936836cbee60ad35c78ea5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBVC65A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTiAXgPIHDKJYII9BcgZza05ccaCgjNubl51PUB25%2BQAiB%2BhZ5%2BW1MW4o9nAk7%2BKiLgjIGFQerlMrXnGUCaAoXkPyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMu1IK4cJJSA4wAt6hKtwDgcBMllcw8V70Vz2y5uLJRef7N1dktWK3Qr8OR21OoAMJYIPGnjfTkZLbgQrRYLuahl6D9cF7wLx7VfS4jxA6c9ugspSsjby3Ku%2FOu815756E5MubGMW44oWrm1zvKoqc4VgdiNrFgqJylzkWWf9Om36lTMiKiBbEUIMyByn96okbIyrSv8Cna1kTATkDeGpx2o8MJWvOGSFYZz2QfQj%2Fo9sRmcbYeIM7PSj7icH%2F5Rdg5gP5NqihdukHBI148blMGUybaJckPNyT1QqNBqv5MvLBmvfzi4Uo%2FFwJ%2BtVdVDgXyV%2BEKOZGoCKpxJ%2F6deOPf4gzVQS%2Bt0fQULTu%2FYRhFelopB%2F4FRocEXCOixjEPg9DBeYfLVDIa4I3ZpsHNHU%2BEsA%2FSXkUjldJ0Av0YOefMRJ0tGbqw1SNTsMDK3J5142mheMkjYjYLytUXbMRa5fVr6z6J6tWrvZA%2Fh0dy%2Bz10YIMCdZ1OyzyfY5Gp5%2F2L4cs6IXn9HPWbdVJYYzJC1xeTHdxXH0BD4S1bCYWPSOcXx5ce83p1Gizdh6fb2qKPxWKQjFu8hfBJzXOSSS1ZHIfUrOlSbG%2FeSXCrTwNLJstMb7GxokIB1fTk0DuxFqmeFNmjTXqsm9HIjSqqQUwioibwQY6pgFy5YpL5KNc0HB72vpB44SIVUsrNid0eLIUmtlYSEJt1vyG78LN14UI%2F4jU6Pqbm%2FgpWIvXBjgw4O2YdNAGpEchyd%2F9ggQQ9XGBwxts97vm4jLrIxCL84dThrimq4oIXtXe51HWnl3cy1I0Yz4OKzmTVVOPjCJYUfrgS6OvfdDA49wBlAXiLHiq0rBj5KsigZPZY2UaVVJreulrpL5h4sVWgq9YHW%2BC&X-Amz-Signature=6f013d3704c8f79bed250fc406346d685f2758bfc675b89e5bf920e21943e235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
