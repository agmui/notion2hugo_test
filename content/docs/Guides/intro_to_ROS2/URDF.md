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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NHHJZU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC9sGTEUEbPEHKwF0KhjyeCcke%2FaDyY9HpwQs%2F%2B%2B2YBGwIgDUT8d%2B04tum4sCkfAurLWA0B3nxJmWP00DQK2mdqkB4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDR39MsOzJ1dUVC3CircA%2B5j5eyw8XayXpWJQxtjSqhziZQMQD1uJ%2FJu6ZTmdZdVl4G2WPXortLSyYPjIN4auRqrMyQAaa1Z9Pxo%2FrXUFMSpLeQk0gA2kTBiXB1%2FffGdxMfGcXGOHxuMeXHuhikwsf3r%2B0pO%2F%2BiQmTLCelN%2BVp4fLD1F9fZRXpvJyiJ2WNZl4hW4NZhwwl8Z2EGSZFsIC1bmmq9ieOkrnaszDR0sY0oBy3PHNKpPPrDFsyEVryT6NTZLCdM3gmzRNt0Bq760n0MMmM7dmd8iq6RWdGI5ONTf%2B3szO1VSzE%2BjThsuVQqTPuAVOGfkLEVlNkT9w%2F7KMnuLeGpiE5UGPxpDx3vrz1tNX5DZLF%2FF7%2B%2BMi5Eic%2FA7d3DhjpTb%2Fv700C5kn8fJuYgFMhP8kd5lriCuyDsw7gpD50n7RFfNjbEuaWvZ%2BiEP%2FSP3dTfkKDjM0gmOLI7r9yrxwHkPlpdi1JZ9zSmmGQJaHNmbVI9SGXV1gFaJMZ0dyhb%2BTYK9gYr8a4pI3cIVywSwG85Eo6LRr%2F9cQKlf65YKf4Bdf47hqEYE%2FMiUe3ckonX1h8x5zDBnOG%2BmpHonDuW2bQ6jAfvI4qB2Xg3Wy0tZKVssLE0EG59ceB84YnmVOWNsyxVfFVODihBIMOi6lsQGOqUBqs7rKgvcPHb2LwXub9j2n3y2FMsuaTnkKYfw%2BUTjRF%2B2Hh%2FZ2p%2FU%2F4AGxiCxmIaJP3xrgSA%2FJkgP6m2IcUXecDPJKMe8pEg%2FAk88vrndt%2FMMUpspe0sjo4MGJnmq2D4POWGbM6aJ85jNxqJkxgHQOz17Zr39KCtjqVqMVkNc93jkzGcQeeaui%2B4Axv%2FznPTCmuX3n%2BqDxsfMMnPi6rdh3vdEWbmu&X-Amz-Signature=b31cc3441d72acd1c1d1226ac672bd9516c3a4432df9ad7255ad08f880df16aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NHHJZU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC9sGTEUEbPEHKwF0KhjyeCcke%2FaDyY9HpwQs%2F%2B%2B2YBGwIgDUT8d%2B04tum4sCkfAurLWA0B3nxJmWP00DQK2mdqkB4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDR39MsOzJ1dUVC3CircA%2B5j5eyw8XayXpWJQxtjSqhziZQMQD1uJ%2FJu6ZTmdZdVl4G2WPXortLSyYPjIN4auRqrMyQAaa1Z9Pxo%2FrXUFMSpLeQk0gA2kTBiXB1%2FffGdxMfGcXGOHxuMeXHuhikwsf3r%2B0pO%2F%2BiQmTLCelN%2BVp4fLD1F9fZRXpvJyiJ2WNZl4hW4NZhwwl8Z2EGSZFsIC1bmmq9ieOkrnaszDR0sY0oBy3PHNKpPPrDFsyEVryT6NTZLCdM3gmzRNt0Bq760n0MMmM7dmd8iq6RWdGI5ONTf%2B3szO1VSzE%2BjThsuVQqTPuAVOGfkLEVlNkT9w%2F7KMnuLeGpiE5UGPxpDx3vrz1tNX5DZLF%2FF7%2B%2BMi5Eic%2FA7d3DhjpTb%2Fv700C5kn8fJuYgFMhP8kd5lriCuyDsw7gpD50n7RFfNjbEuaWvZ%2BiEP%2FSP3dTfkKDjM0gmOLI7r9yrxwHkPlpdi1JZ9zSmmGQJaHNmbVI9SGXV1gFaJMZ0dyhb%2BTYK9gYr8a4pI3cIVywSwG85Eo6LRr%2F9cQKlf65YKf4Bdf47hqEYE%2FMiUe3ckonX1h8x5zDBnOG%2BmpHonDuW2bQ6jAfvI4qB2Xg3Wy0tZKVssLE0EG59ceB84YnmVOWNsyxVfFVODihBIMOi6lsQGOqUBqs7rKgvcPHb2LwXub9j2n3y2FMsuaTnkKYfw%2BUTjRF%2B2Hh%2FZ2p%2FU%2F4AGxiCxmIaJP3xrgSA%2FJkgP6m2IcUXecDPJKMe8pEg%2FAk88vrndt%2FMMUpspe0sjo4MGJnmq2D4POWGbM6aJ85jNxqJkxgHQOz17Zr39KCtjqVqMVkNc93jkzGcQeeaui%2B4Axv%2FznPTCmuX3n%2BqDxsfMMnPi6rdh3vdEWbmu&X-Amz-Signature=d18c05a66a8aa6c3f14a76cf1e1025259eff41e019394a6989999100fb054b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
