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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRPEVHG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUZuDx7KDKNcjTy1aLQnKnSLXj4Omvt698eH3j0ll92AiBiMfn96bLDSqLvD%2BovRfSxYx8vBVvSFwnSFr1N0nSstSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMSuERBzgLVdu0R02eKtwDI%2FBRTimR7%2FrDm56s6Q0P9BVkrD0ykaJ93WW2l7dXMiM5nOE3%2BdDQYjJM4SCM1nBygkNXQCt6mm0FwXNM7xPwDwgTzoQ9kvKuIIYHigUlcsKSgwy43qQo8ryiiPPzBQ46LLXZWKixYPJb6aaWQqGxYbsNxHCIFqcsqGw0wgasUY11sOCQ7JVOYaTVHwHAgMgjdLGJAPB%2FLO%2BuPKX%2Fyjtrk0%2FT2v1tSZ9aCxVlw95AC9wjU%2F354CBTC1iQ5%2BvGv5TYjn%2Bstsd4niYc8NaMSvcn00ErBzAkck2d%2F2b9aQ1XM5cjRIQr7VdtsvSj3Sr4Ts4rpdreF2Z%2BB2KA4FAgv7rdvraa%2B4OyW93GOVl%2FzVbt7Lgg%2F9C5R6DWRFqyVOh%2FitinNNR65%2Bh%2B1DjMwb6%2Blb8C4nlhkYCj%2FFmxYjExoZRH%2B6xFOTlBVPVQGdDbojMLcfjLdnFhsvtx0dF9EYlljk%2B7rOD98oKJ1y1MxgjKGRtTqJTjmQDJCgZEZc7DJrL02SG06VvmlmI4FwXS8bOLCfFeuZd%2F3T41d%2F93%2Bxv5T0fHaUK3t1XzkEjBzDvhw6id%2BPz0EMxHCcjOZCYxoaYT4W1RJuUY7AYvtKOQ5BiXe%2BtAwDHoDkkp4gtKZD8QemgwwMyzwAY6pgE9xOEEcDbFDQMydhsssC4B9bTeLbbkPJzve26%2BzcUW1R%2BT4dBTP1Mf5VzoO7fTvWnUJv53hCl8P3jlwNyAbwgWLvegez1036mLYPyVDPF2A3RnWpfJrAdHklegVwRC1gCvu06bHmnhESdH%2BcGA8lY5wUE%2BFbDFxlGWVt8VgrGeL1ipTTkTQCWv%2F9fjqj%2BNfgyG3br2YLq6wAuti8bjFx%2BRuO9gorG9&X-Amz-Signature=d79ecce3e90ecc4b54a0de6b799925094dffeaa094f2121b943216d14e4fb9db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRPEVHG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUZuDx7KDKNcjTy1aLQnKnSLXj4Omvt698eH3j0ll92AiBiMfn96bLDSqLvD%2BovRfSxYx8vBVvSFwnSFr1N0nSstSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMSuERBzgLVdu0R02eKtwDI%2FBRTimR7%2FrDm56s6Q0P9BVkrD0ykaJ93WW2l7dXMiM5nOE3%2BdDQYjJM4SCM1nBygkNXQCt6mm0FwXNM7xPwDwgTzoQ9kvKuIIYHigUlcsKSgwy43qQo8ryiiPPzBQ46LLXZWKixYPJb6aaWQqGxYbsNxHCIFqcsqGw0wgasUY11sOCQ7JVOYaTVHwHAgMgjdLGJAPB%2FLO%2BuPKX%2Fyjtrk0%2FT2v1tSZ9aCxVlw95AC9wjU%2F354CBTC1iQ5%2BvGv5TYjn%2Bstsd4niYc8NaMSvcn00ErBzAkck2d%2F2b9aQ1XM5cjRIQr7VdtsvSj3Sr4Ts4rpdreF2Z%2BB2KA4FAgv7rdvraa%2B4OyW93GOVl%2FzVbt7Lgg%2F9C5R6DWRFqyVOh%2FitinNNR65%2Bh%2B1DjMwb6%2Blb8C4nlhkYCj%2FFmxYjExoZRH%2B6xFOTlBVPVQGdDbojMLcfjLdnFhsvtx0dF9EYlljk%2B7rOD98oKJ1y1MxgjKGRtTqJTjmQDJCgZEZc7DJrL02SG06VvmlmI4FwXS8bOLCfFeuZd%2F3T41d%2F93%2Bxv5T0fHaUK3t1XzkEjBzDvhw6id%2BPz0EMxHCcjOZCYxoaYT4W1RJuUY7AYvtKOQ5BiXe%2BtAwDHoDkkp4gtKZD8QemgwwMyzwAY6pgE9xOEEcDbFDQMydhsssC4B9bTeLbbkPJzve26%2BzcUW1R%2BT4dBTP1Mf5VzoO7fTvWnUJv53hCl8P3jlwNyAbwgWLvegez1036mLYPyVDPF2A3RnWpfJrAdHklegVwRC1gCvu06bHmnhESdH%2BcGA8lY5wUE%2BFbDFxlGWVt8VgrGeL1ipTTkTQCWv%2F9fjqj%2BNfgyG3br2YLq6wAuti8bjFx%2BRuO9gorG9&X-Amz-Signature=2dfbe49d60dbf51ddbb28e50284c575e9acddda240249e28b98bd19f44a537c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
