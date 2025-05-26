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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4OXWGX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGqHcQZv8DBLV6EPusRjBZBNIVj01fkmk%2FzaW21DbeyOAiAYM5%2BWEXBulyTbDsqGxA7w9XJyTRAzgrke%2FJkaG3IKJSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcwuxLWZVk7NeNkHZKtwDCous93AIpgFmLaPvsQjBoXefYdy2GnxmAUDyrzTa8pZNn%2B1Z0doXrJKBhzjr4ECDgewdDr%2FbigO8pS9eNfp%2F8ggXqKbCvhPiqMqH3JYVYR9BVlSVWaop4uNB%2B3WqVCK%2FHbdkMBzVZwG0vdW6eyCH0oLm7KiawlzabvTeaF3geID1a5LePbEtwzhCxumFZt9cUPFhAQMJTPMLkxvD%2BAmyfl9ik47iy01RkdzjWS4KrA5JRQ8ussyKn7ZybE%2F%2BccfildbiF6BDGxHHcieoys0y3PlkMwQrJPQnvK0zt0Qdb9m%2FyVbYrrKL%2Fon3qTg53g%2BK6qEGZxMOm2ObXIMgdY9Yh1fQVexAwcgSG8KMrWX21ZM6l4NjlyLnjN01PGcOPoGVclzMO6KAsiUyVuc3hSBahng%2BBscaV5z%2FGkO6c08Dk%2B3FHfE1tp05V1f5oZ%2BcV8lmZ9bkdu7%2B1qf%2BjPuB6uf3oqwhgRH1IVltbODUms%2BV%2FpqlHSpZisQpcYtzd4cq7DtzjLbvFEW6W23tZsA1yGEVgwWk%2Ftf%2FXiRVqds3GzH8vITlRgpuZsQ5K%2BDtP%2BqO6LVsCDSUWL1SAlC86jhfp15n4dnXguxyRT5Vba5EszAwq61hQzfWlf5irJsNDrYwr6rOwQY6pgFFdrjLax6zF%2BFI1kSJFeGSYi8vOg3fqU%2FaF69tP4aL6Xp1O89poVO7EwOiaPgJxe01Imzfq1ih7CEnvKilaCW8Mxc%2F7QgGoyMb0eDivx3j%2FRftxwlTMio8%2Fg5p1SDsDEb8EMijuFc2DalXSosVYrd8CT8iZVF03JH%2FOXM7whD3gyQJ0iJhadRGi5dEZq%2BtKBkXgj1IBRQpUwNOmMsVfDci9gdezSa1&X-Amz-Signature=bc66e2cc857d2778bcd79fcc0bc193997d82745626e19d8e436a02d87b335305&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4OXWGX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGqHcQZv8DBLV6EPusRjBZBNIVj01fkmk%2FzaW21DbeyOAiAYM5%2BWEXBulyTbDsqGxA7w9XJyTRAzgrke%2FJkaG3IKJSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMcwuxLWZVk7NeNkHZKtwDCous93AIpgFmLaPvsQjBoXefYdy2GnxmAUDyrzTa8pZNn%2B1Z0doXrJKBhzjr4ECDgewdDr%2FbigO8pS9eNfp%2F8ggXqKbCvhPiqMqH3JYVYR9BVlSVWaop4uNB%2B3WqVCK%2FHbdkMBzVZwG0vdW6eyCH0oLm7KiawlzabvTeaF3geID1a5LePbEtwzhCxumFZt9cUPFhAQMJTPMLkxvD%2BAmyfl9ik47iy01RkdzjWS4KrA5JRQ8ussyKn7ZybE%2F%2BccfildbiF6BDGxHHcieoys0y3PlkMwQrJPQnvK0zt0Qdb9m%2FyVbYrrKL%2Fon3qTg53g%2BK6qEGZxMOm2ObXIMgdY9Yh1fQVexAwcgSG8KMrWX21ZM6l4NjlyLnjN01PGcOPoGVclzMO6KAsiUyVuc3hSBahng%2BBscaV5z%2FGkO6c08Dk%2B3FHfE1tp05V1f5oZ%2BcV8lmZ9bkdu7%2B1qf%2BjPuB6uf3oqwhgRH1IVltbODUms%2BV%2FpqlHSpZisQpcYtzd4cq7DtzjLbvFEW6W23tZsA1yGEVgwWk%2Ftf%2FXiRVqds3GzH8vITlRgpuZsQ5K%2BDtP%2BqO6LVsCDSUWL1SAlC86jhfp15n4dnXguxyRT5Vba5EszAwq61hQzfWlf5irJsNDrYwr6rOwQY6pgFFdrjLax6zF%2BFI1kSJFeGSYi8vOg3fqU%2FaF69tP4aL6Xp1O89poVO7EwOiaPgJxe01Imzfq1ih7CEnvKilaCW8Mxc%2F7QgGoyMb0eDivx3j%2FRftxwlTMio8%2Fg5p1SDsDEb8EMijuFc2DalXSosVYrd8CT8iZVF03JH%2FOXM7whD3gyQJ0iJhadRGi5dEZq%2BtKBkXgj1IBRQpUwNOmMsVfDci9gdezSa1&X-Amz-Signature=a39de9a640540b2f5af3dfd8726e3bebeafa4548b661011b81a2711de33a339a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
