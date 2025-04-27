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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGU2SWO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkSVn7%2BEi3Lq%2B%2Br%2FKB5F3UPRcOhL5JlCNk1fJ31hUUzAiEA6fsrBqKutes9B%2FniC%2BPwzPctw%2Fs%2FqztW9DuTvbjSs70q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDClCUqULxXbOfH4mESrcA%2FI2Zv7jeQ8iX3GI8%2FiyaPOtwpmtA0De4w5n2NYROob48BOVxLnf1oQIGuHO75JXY%2BqQbNiOT0HqDjRlDl7FIVlAnRRqfZyffaKBDMIqcw9DPxta1v4LoCZ7GKWOodxHZIuqAqB53rNvr3PhSykxtjNh6x3xhAyblVhk9Kuozc4h%2BRuHkzHeVgLSx0PuiKE2iGlwgxy9Znk%2BP12hpxbKa2zxcbdMkYVYe0A11iIbd3Q6jnv%2FCN2vxTVIzxx3sphKfNE55e8AC7ZUEWKo8ZllzxaKxNh6NUvy%2F3c5fVqdxG9YiAcjoEFeYokGKsue054CUrApqmqH5j3vwmtgXtiOsxLm%2FwbEH4Jgmw8mvRI53cq6rJ%2BVNDoq%2Bb%2BxE39TtiAPPUuHtTlXofI1TB4C1XXetFTEE0FJ1knHWMVZpIe6DIjvExxJ3xNFstjDptWKauK3uBi02BJvUtvZr1XnXVMscyuLHg9cBndB9A4%2BLVIJ8BFLPC2OaaUbmy9%2F38P9N0hapzY3LXYuPnVVJxDfHUox4VIxUGZw7BrSz4MjITJI5EPvyphkOvVFNiY2Riwf8RLiN%2FEiNRMLeu1av9bvnIjQLx9hWzl9sSH08eU5V1ChoqOEz2e%2FeEqYqVvSCY3PMMyKusAGOqUBkQq8NrD3U55ZXGPkf0TM%2BH%2BfZVMa8%2FEN7DuRu24VsNlYlLb3%2FODKprBmOrbHotEY8JM8EwmcDWweR4892qLdWq5KwkKZZLetjRnSCeEyAXUKwKOdPuMU8QyBMlPYpUbidQCv%2B0WQZcGZLvZNAVFDwshvtcVqb6zks93cKU0TKaDjkwu%2FqRjYTt%2B2mXI4OoWF2o1Ibn%2BiASOnt0sznNOmRZ4EA9DS&X-Amz-Signature=54d891cb0969b9407b3fc881710dbc49998cb1809eb93341e1e19b6470d72dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGU2SWO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkSVn7%2BEi3Lq%2B%2Br%2FKB5F3UPRcOhL5JlCNk1fJ31hUUzAiEA6fsrBqKutes9B%2FniC%2BPwzPctw%2Fs%2FqztW9DuTvbjSs70q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDClCUqULxXbOfH4mESrcA%2FI2Zv7jeQ8iX3GI8%2FiyaPOtwpmtA0De4w5n2NYROob48BOVxLnf1oQIGuHO75JXY%2BqQbNiOT0HqDjRlDl7FIVlAnRRqfZyffaKBDMIqcw9DPxta1v4LoCZ7GKWOodxHZIuqAqB53rNvr3PhSykxtjNh6x3xhAyblVhk9Kuozc4h%2BRuHkzHeVgLSx0PuiKE2iGlwgxy9Znk%2BP12hpxbKa2zxcbdMkYVYe0A11iIbd3Q6jnv%2FCN2vxTVIzxx3sphKfNE55e8AC7ZUEWKo8ZllzxaKxNh6NUvy%2F3c5fVqdxG9YiAcjoEFeYokGKsue054CUrApqmqH5j3vwmtgXtiOsxLm%2FwbEH4Jgmw8mvRI53cq6rJ%2BVNDoq%2Bb%2BxE39TtiAPPUuHtTlXofI1TB4C1XXetFTEE0FJ1knHWMVZpIe6DIjvExxJ3xNFstjDptWKauK3uBi02BJvUtvZr1XnXVMscyuLHg9cBndB9A4%2BLVIJ8BFLPC2OaaUbmy9%2F38P9N0hapzY3LXYuPnVVJxDfHUox4VIxUGZw7BrSz4MjITJI5EPvyphkOvVFNiY2Riwf8RLiN%2FEiNRMLeu1av9bvnIjQLx9hWzl9sSH08eU5V1ChoqOEz2e%2FeEqYqVvSCY3PMMyKusAGOqUBkQq8NrD3U55ZXGPkf0TM%2BH%2BfZVMa8%2FEN7DuRu24VsNlYlLb3%2FODKprBmOrbHotEY8JM8EwmcDWweR4892qLdWq5KwkKZZLetjRnSCeEyAXUKwKOdPuMU8QyBMlPYpUbidQCv%2B0WQZcGZLvZNAVFDwshvtcVqb6zks93cKU0TKaDjkwu%2FqRjYTt%2B2mXI4OoWF2o1Ibn%2BiASOnt0sznNOmRZ4EA9DS&X-Amz-Signature=d8c4d56a9f2625fd4e82b4389314a15c5f359cfe5deaf47a0b7eaa02feb8bd29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
