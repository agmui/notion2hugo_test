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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZFN2OD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFh6WOlFTn6IswPwveBtmxaeow7HXkv0aDNCcQWOJk10AiEAsF%2Fu7uDzoirkieQno%2BZ4KXy5B%2BDZCkMX%2F5DiSTWWXB0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9CIVc4pdGZC3INAircA1mhRhmqk9bMQ7r%2FKbEx6JwBFXwKjFDGTPtwhSzn3OD2xziI61FZuSROAC4TUhe%2Ff6IInZ5HyP59M8URQPW0ofatIOA36nmYbk6ZbfoRSryC2NtL20H3tTXa0hBrJ5g4hpFuKaTa2nGBXia%2ByWMk8ejPyzLikLSBJ7RQ6cLrPG2IBAyVrv3Vw5TDOKcbe%2F2DZbqA6Hu8uV9kc2HP5Lsd5KTSO9w0dS3aL7ZCqnGec1Q4Gr0U2Vqp7vSt9I9MP%2B1FddCeg9SDt29QkXNBSvgq7XJwxLHkJwLAHIquYEU2HUc%2BOWAj7KK0FIuXiurzWHTz7nyqAHSYb85eOKkI%2B70Xruh3A70%2BCFl6QoEJuN25%2Fm8IVlFhtNroBRGQXo02kgPT0AXvBKETxLIXLFdlM%2BUl5WPcfDrFcsrKfdnO7utlKrkF4It6HCQyz7bf0putfqjKipGMifJBmbLzsMYb%2F31QMnUGPGEjsqQkzR%2BPgsQ6%2BbRiUgwPXU5Z3zkyLadLo04r7sRkXFhOtLc2y1u4XTJz3QxnfyGa9L4jgdG%2BJLiAS%2F6JQsVLX9w2TExKSp72F2i3m%2B0jwbcYfmObtDf%2FgDndakBJMcMURJHV0J6FwpFONXPIM6yDP0MwPSEdfCD5MP659L4GOqUBGaQyjh4w8i5IpZvdkUhasAKpuMK%2BXAw2qQIMdhO%2FDMtOq3Ipn%2B024DmID2YEqbSPo439kI%2BH%2FhuFnSf3%2FEILytY23%2BJ1CkZqTntQ%2ByG05moXbx4hJuDJCuanH4UK4U8LURwt%2BVgB3EacD%2BDhQHKoq2uFLfBftiSvYfqB70EM%2BDR7sMjZOp2nc043ayklIOyUnV0Kwie%2F0HfY0bjGBC7PEMwVc3wH&X-Amz-Signature=d9e3e23bdf77abb6944a7fd93a1e297a9c8c99f9dea72b0cc9539b21c622e47d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZFN2OD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFh6WOlFTn6IswPwveBtmxaeow7HXkv0aDNCcQWOJk10AiEAsF%2Fu7uDzoirkieQno%2BZ4KXy5B%2BDZCkMX%2F5DiSTWWXB0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9CIVc4pdGZC3INAircA1mhRhmqk9bMQ7r%2FKbEx6JwBFXwKjFDGTPtwhSzn3OD2xziI61FZuSROAC4TUhe%2Ff6IInZ5HyP59M8URQPW0ofatIOA36nmYbk6ZbfoRSryC2NtL20H3tTXa0hBrJ5g4hpFuKaTa2nGBXia%2ByWMk8ejPyzLikLSBJ7RQ6cLrPG2IBAyVrv3Vw5TDOKcbe%2F2DZbqA6Hu8uV9kc2HP5Lsd5KTSO9w0dS3aL7ZCqnGec1Q4Gr0U2Vqp7vSt9I9MP%2B1FddCeg9SDt29QkXNBSvgq7XJwxLHkJwLAHIquYEU2HUc%2BOWAj7KK0FIuXiurzWHTz7nyqAHSYb85eOKkI%2B70Xruh3A70%2BCFl6QoEJuN25%2Fm8IVlFhtNroBRGQXo02kgPT0AXvBKETxLIXLFdlM%2BUl5WPcfDrFcsrKfdnO7utlKrkF4It6HCQyz7bf0putfqjKipGMifJBmbLzsMYb%2F31QMnUGPGEjsqQkzR%2BPgsQ6%2BbRiUgwPXU5Z3zkyLadLo04r7sRkXFhOtLc2y1u4XTJz3QxnfyGa9L4jgdG%2BJLiAS%2F6JQsVLX9w2TExKSp72F2i3m%2B0jwbcYfmObtDf%2FgDndakBJMcMURJHV0J6FwpFONXPIM6yDP0MwPSEdfCD5MP659L4GOqUBGaQyjh4w8i5IpZvdkUhasAKpuMK%2BXAw2qQIMdhO%2FDMtOq3Ipn%2B024DmID2YEqbSPo439kI%2BH%2FhuFnSf3%2FEILytY23%2BJ1CkZqTntQ%2ByG05moXbx4hJuDJCuanH4UK4U8LURwt%2BVgB3EacD%2BDhQHKoq2uFLfBftiSvYfqB70EM%2BDR7sMjZOp2nc043ayklIOyUnV0Kwie%2F0HfY0bjGBC7PEMwVc3wH&X-Amz-Signature=dfac17fad24d067bf297a3c117b14c0a35f864e5d8b6d1b178bed40907be6701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
