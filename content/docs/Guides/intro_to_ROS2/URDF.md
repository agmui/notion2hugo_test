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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTG5ZKH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGKgX8c4QTp6B%2Be%2Fd8KrML2zU1gfX9dkIRJd75MDGiroAiEAvSgJXd0geFWbFr9pasEI%2FtNLefuDBjdLHgMn5tHihLQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPns2qyhRz4nekN4kSrcAzNBMueMgb7H0VAEbzh3dKCrx19JqB7ULbX%2BTidqJ2O2AQTRaFczOjwkn8aBYHAsddfcckz%2BqvIaxwaooSaieshdIWV4P65zUtP7FOs2ow69TyGnFKmwM0r%2BCcM5DehFMicHLbBdf7PREGvBRANvf6sLkVBOcFayxAf6hfa8%2BbPdZRCsHDn5vTh6%2F6KdGX23nJqXQt4P9DM0v%2BsROrpX5PITMVQGH11k1FentRTbjybEqi60jOkH3G8VGiSrHlXgyKGwGYZLdv6ha%2BtW1YCSf6F0gmy%2B4VjZqKWaqfdno8P5PCmncUUqlCmJPw8rj%2BCSAXG8BkT99fDzG%2BonfTlXwm0GJq8pK6Ndutg1Xp7qgf6RJemNB%2FIeVm4WP5QVukvqG1spFyTx4IjFhlxmoqpP7F%2FxVuioSzu3ltB7iwgFze2tNrUqQWBJVQBr%2BX6MYHWsChjrpxTFsql0%2FH6BKh0c1eTsYY9SSmyLLZiIyCpKVhXFQwAtL5sWM6701irK%2FUp9bdcLRktM5Yhgq0ITou4OaP7eFB5TMqfMa%2F%2F8LBd6pyjhItRhafi3%2FJ3Fqv7R7oK6Z76qzuuZvQ8HGNOsKGZ4TM72zAklVMOS%2FDF8x8X8qonXKrz4oxi8fFyB09aZMJfKyr0GOqUB2cOcTu%2Fi%2B6o6g%2BYq5EPjG%2BjtGlJpz8NA4DmqehdYugsZ5H6qshJlAu%2B09r%2FDEsgp2PjDx5ptCSghANKhunzZpEUtZH6qjZLt21YcElIbo9IC3P%2BuELmeOf4abirrbHP0ntoU2xDMqkJqNcnABKSbeqKTs6jcYmoZ8q9Cy%2BWzsOIG8hfM%2BsIFf9zOZPs%2BFafxPYsqntpBJGkLHpw29vlpb9Gb%2FZb7&X-Amz-Signature=0375746659d13917362b9de85ed8df0d3435f86c01cee422172ab1ae17822654&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTG5ZKH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGKgX8c4QTp6B%2Be%2Fd8KrML2zU1gfX9dkIRJd75MDGiroAiEAvSgJXd0geFWbFr9pasEI%2FtNLefuDBjdLHgMn5tHihLQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPns2qyhRz4nekN4kSrcAzNBMueMgb7H0VAEbzh3dKCrx19JqB7ULbX%2BTidqJ2O2AQTRaFczOjwkn8aBYHAsddfcckz%2BqvIaxwaooSaieshdIWV4P65zUtP7FOs2ow69TyGnFKmwM0r%2BCcM5DehFMicHLbBdf7PREGvBRANvf6sLkVBOcFayxAf6hfa8%2BbPdZRCsHDn5vTh6%2F6KdGX23nJqXQt4P9DM0v%2BsROrpX5PITMVQGH11k1FentRTbjybEqi60jOkH3G8VGiSrHlXgyKGwGYZLdv6ha%2BtW1YCSf6F0gmy%2B4VjZqKWaqfdno8P5PCmncUUqlCmJPw8rj%2BCSAXG8BkT99fDzG%2BonfTlXwm0GJq8pK6Ndutg1Xp7qgf6RJemNB%2FIeVm4WP5QVukvqG1spFyTx4IjFhlxmoqpP7F%2FxVuioSzu3ltB7iwgFze2tNrUqQWBJVQBr%2BX6MYHWsChjrpxTFsql0%2FH6BKh0c1eTsYY9SSmyLLZiIyCpKVhXFQwAtL5sWM6701irK%2FUp9bdcLRktM5Yhgq0ITou4OaP7eFB5TMqfMa%2F%2F8LBd6pyjhItRhafi3%2FJ3Fqv7R7oK6Z76qzuuZvQ8HGNOsKGZ4TM72zAklVMOS%2FDF8x8X8qonXKrz4oxi8fFyB09aZMJfKyr0GOqUB2cOcTu%2Fi%2B6o6g%2BYq5EPjG%2BjtGlJpz8NA4DmqehdYugsZ5H6qshJlAu%2B09r%2FDEsgp2PjDx5ptCSghANKhunzZpEUtZH6qjZLt21YcElIbo9IC3P%2BuELmeOf4abirrbHP0ntoU2xDMqkJqNcnABKSbeqKTs6jcYmoZ8q9Cy%2BWzsOIG8hfM%2BsIFf9zOZPs%2BFafxPYsqntpBJGkLHpw29vlpb9Gb%2FZb7&X-Amz-Signature=8467f25a8f2a1113dbc82d981dad8540f49f1a43986547d5b76da4392cbaf3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
