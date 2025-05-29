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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6S2QUK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvv1FOUXsVTYmj%2FiUmg1aV0xTRakYhcp1yUtquZwTaLAiBfWez1Fuhcxxn1bTvLqGE762HUopuIBW%2BqI25zled1wyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbazHU85q9zL9WMjKtwDQT8DCEN96Owc2pFx9joySVK1WeBdJousYz0ysSTjZX9dtb%2FJ%2BX4hGYCXGSs14bVPQkWs9ik2VpSZeTWnsLvXSSFFDCQ62MXEjUj7pnQcocCLPyNgIrhUXAr08UsSDq7G%2BnRW1mFwPaOXPQnOSeiarQ1AWmOc7Jxt0Lk%2FOPdxIvUEVv4TJW75xNPJPQHK4zMEooxPkCU41CqFcvypa9yNtB%2FnOuMvRx193qpWqYxH1DVCprNPLVpqDz%2BoKlatna18PFgVCBk8CE2dZQKM2%2BKHp1QkSdkHPXYqs1zQL0C342vEzhJR1ZiipbuzFt6wAJm6fAb%2FFqrVe99z0M%2BbSmrx0j7SZKp2xfzEmZiPiBrsTeptIZprqWuw80eJU61xB9oGKZfSlLPDDA%2BK02LHiLpmYICiYEpbSeVDDDGrcjtvNYs02QkH63USHUP9DNCtvDN4uVCNLhZS31QVKwsjLQlvVTKk%2BzlEYMSyaaZlIPW5MGrCVgOotM23HJFYS0NWm8ugtRKdrklHuhD1OFPIZTj41Y6eNJZu%2BVHMhg4Kzu%2BkX4%2FhOCGM2GSuJZ1zejoD7%2FtFwIJTmwL3JAHONnvmDnxaHCm%2B9zm%2FP5ZObneNMzXGel%2FhO5Otvz2chxYmwtMwsq3gwQY6pgFAfVAczv77yQ6RJHvRpf17XDog4ZRZOQxUjfgWn3VRIWatPiVhKUDynN1G%2BhXvEc94QAFd4KdIoD8Cv51GhdJuy4dxJl6jlRzsv8pdhTUY2fqCQGvKJBKfyRqwRNoj4TJruPOMuELnQF60y%2Fz%2F%2BRrtI0vEoxhYYupMvWq%2B955ECPyvTdwLzQvLIBQR4IzM%2F3ZTiX%2FYpJyYR0sifD9DXufbC3zLN%2BPW&X-Amz-Signature=99c4aca160bc5b2cc37b14db99b5edddd4e8a968c96802c90fc8410d26e792ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6S2QUK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvv1FOUXsVTYmj%2FiUmg1aV0xTRakYhcp1yUtquZwTaLAiBfWez1Fuhcxxn1bTvLqGE762HUopuIBW%2BqI25zled1wyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbazHU85q9zL9WMjKtwDQT8DCEN96Owc2pFx9joySVK1WeBdJousYz0ysSTjZX9dtb%2FJ%2BX4hGYCXGSs14bVPQkWs9ik2VpSZeTWnsLvXSSFFDCQ62MXEjUj7pnQcocCLPyNgIrhUXAr08UsSDq7G%2BnRW1mFwPaOXPQnOSeiarQ1AWmOc7Jxt0Lk%2FOPdxIvUEVv4TJW75xNPJPQHK4zMEooxPkCU41CqFcvypa9yNtB%2FnOuMvRx193qpWqYxH1DVCprNPLVpqDz%2BoKlatna18PFgVCBk8CE2dZQKM2%2BKHp1QkSdkHPXYqs1zQL0C342vEzhJR1ZiipbuzFt6wAJm6fAb%2FFqrVe99z0M%2BbSmrx0j7SZKp2xfzEmZiPiBrsTeptIZprqWuw80eJU61xB9oGKZfSlLPDDA%2BK02LHiLpmYICiYEpbSeVDDDGrcjtvNYs02QkH63USHUP9DNCtvDN4uVCNLhZS31QVKwsjLQlvVTKk%2BzlEYMSyaaZlIPW5MGrCVgOotM23HJFYS0NWm8ugtRKdrklHuhD1OFPIZTj41Y6eNJZu%2BVHMhg4Kzu%2BkX4%2FhOCGM2GSuJZ1zejoD7%2FtFwIJTmwL3JAHONnvmDnxaHCm%2B9zm%2FP5ZObneNMzXGel%2FhO5Otvz2chxYmwtMwsq3gwQY6pgFAfVAczv77yQ6RJHvRpf17XDog4ZRZOQxUjfgWn3VRIWatPiVhKUDynN1G%2BhXvEc94QAFd4KdIoD8Cv51GhdJuy4dxJl6jlRzsv8pdhTUY2fqCQGvKJBKfyRqwRNoj4TJruPOMuELnQF60y%2Fz%2F%2BRrtI0vEoxhYYupMvWq%2B955ECPyvTdwLzQvLIBQR4IzM%2F3ZTiX%2FYpJyYR0sifD9DXufbC3zLN%2BPW&X-Amz-Signature=ed40d6ff18ca9e2e50333176fc7fa13846dd523b3fbc279fdfbf531e46055850&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
