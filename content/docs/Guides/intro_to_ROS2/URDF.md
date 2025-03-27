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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZLH7ZC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2BVJmttYy9%2FS0OabTohmSUzAnf4Vj46Ykv4QhE7aZyQIhAJqqsQBZUVbUQubB2R6dhZWClpbBujnJFrfK6JLH6smaKv8DCDgQABoMNjM3NDIzMTgzODA1IgywqvgRY2hMIyL%2FiCgq3ANJZNVYYhl89DoBAQdZHDMlJuDneEWxpdf5%2Fl4q5a119X4nxS0L68TzCONt4yTedUDxgbhxVuD8a8Tx%2FIqOnt%2BSvcwWMS6BYaKylIs%2Fn44zCRRpOMZCNEgGSpgPgEDVOr3YgKGZ63X95zlMZ7pyrHUY8upqLywxyH1d9B9fVPyJ%2FESMEZctAE6LjHe0kjG3IdPMUvsw9tOSTvoZkrQe4aDQK2EBu9uddJE%2B6mW2p6MTplzpHZ9ODam4bohblM5zcTCacUZToTqKjTbRCbOjFwKe8%2B%2F3GzNLC%2F2T84PXcOxPZ%2BOurIZ26hLurU0H1KyW31XxXBCMY1A31I29nd9mmnV6Gnyln%2BSGYWo9Vk1%2BdCqkO7vrHf7DXkZzD6I7v5d1B2CVM8ZIN0%2BGaoZZDDqbesCn%2FVbpctlp0D7prkQs248ytjCzzxtVAn%2FbRDy8OcOFsM4v5SEwSNf4E%2F4ybtF3bcx7zx0uBzbW53Va%2FQnnVsHpRbfIa4ugtRpEp1AxlKOfJpyYfnT66AGOTiXnEfQpe%2FOCZUgLQoF5ndL3oZ94QX6%2FEFUdsKsmJdPucu68Np%2BhQ1g%2F6%2FeE%2Fdsroeao7b6GYBcCuz7S4KR4%2FRBUNJ129XH4RQlodbiFcykjw%2F0BSjDBjZK%2FBjqkAWvtNLQELaYwyxQd7AX5h%2BSTorbkREwX3u%2FgVD9R9qg6hPHWfoqpk41bb0hfaMGOEV675xLYiaY3QOx7QR88%2FS8uWyFGGccgcMMyhoScwzZl5cYV23GKvGUmCALz6L9jB2MoIpJJs%2FQck9t90nDCDfMKdA3Z8iqL8GgHe9jKA58Y%2FttSfBIdAekfRiOqySEnq39QIXypDKKkB6ioHwcbev22A8Re&X-Amz-Signature=ae4dcac662362fbd37362be2175591c1356f5305ca5c07f07a929d29d3f06afe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZLH7ZC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2BVJmttYy9%2FS0OabTohmSUzAnf4Vj46Ykv4QhE7aZyQIhAJqqsQBZUVbUQubB2R6dhZWClpbBujnJFrfK6JLH6smaKv8DCDgQABoMNjM3NDIzMTgzODA1IgywqvgRY2hMIyL%2FiCgq3ANJZNVYYhl89DoBAQdZHDMlJuDneEWxpdf5%2Fl4q5a119X4nxS0L68TzCONt4yTedUDxgbhxVuD8a8Tx%2FIqOnt%2BSvcwWMS6BYaKylIs%2Fn44zCRRpOMZCNEgGSpgPgEDVOr3YgKGZ63X95zlMZ7pyrHUY8upqLywxyH1d9B9fVPyJ%2FESMEZctAE6LjHe0kjG3IdPMUvsw9tOSTvoZkrQe4aDQK2EBu9uddJE%2B6mW2p6MTplzpHZ9ODam4bohblM5zcTCacUZToTqKjTbRCbOjFwKe8%2B%2F3GzNLC%2F2T84PXcOxPZ%2BOurIZ26hLurU0H1KyW31XxXBCMY1A31I29nd9mmnV6Gnyln%2BSGYWo9Vk1%2BdCqkO7vrHf7DXkZzD6I7v5d1B2CVM8ZIN0%2BGaoZZDDqbesCn%2FVbpctlp0D7prkQs248ytjCzzxtVAn%2FbRDy8OcOFsM4v5SEwSNf4E%2F4ybtF3bcx7zx0uBzbW53Va%2FQnnVsHpRbfIa4ugtRpEp1AxlKOfJpyYfnT66AGOTiXnEfQpe%2FOCZUgLQoF5ndL3oZ94QX6%2FEFUdsKsmJdPucu68Np%2BhQ1g%2F6%2FeE%2Fdsroeao7b6GYBcCuz7S4KR4%2FRBUNJ129XH4RQlodbiFcykjw%2F0BSjDBjZK%2FBjqkAWvtNLQELaYwyxQd7AX5h%2BSTorbkREwX3u%2FgVD9R9qg6hPHWfoqpk41bb0hfaMGOEV675xLYiaY3QOx7QR88%2FS8uWyFGGccgcMMyhoScwzZl5cYV23GKvGUmCALz6L9jB2MoIpJJs%2FQck9t90nDCDfMKdA3Z8iqL8GgHe9jKA58Y%2FttSfBIdAekfRiOqySEnq39QIXypDKKkB6ioHwcbev22A8Re&X-Amz-Signature=c7e858a41316f407ac404549d6a3d8f5997bc8f5004bdaa79c7616b9539ffc8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
