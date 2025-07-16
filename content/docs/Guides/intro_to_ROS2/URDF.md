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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BKGRAP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBjc56tZgChDyB0Kf%2Fqh%2BANSqTli6pHXx36A9ozZDEPSAiAmm2q3g4HzbCblGodfyAKsBiAPxlBYWzlfG1WHFWNdYir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuQC%2B2%2BJEBL311OrfKtwDlF1FMK1IduXBUPfNheGJGhfJ9MasfdaThLvi5m6uynIo3VrTFjJK3hyJoJpdYZozB9QIhke8An2I3b81WDq7qdjBPiID0P8O%2BJSmzmwEM9tBYEhr3fpkz28rDcIIUDe0HDSjodYpWWu6Byq4uf%2F2tBJSCFtmDcyjdLy34gkrVq6AsRpsB9wEDqUEpxb87kNDpU23FHaWUJPd%2BWLKvFgvTk%2BQArwVpCnRLhcdgQbqSxt62%2FYQ5w%2FQo%2BWhr%2FRGIlqvwJPam7Ow8U1SKbjqRIaIyCixdHSZSD7kwdoNssb58bOaTrikmuaAqN4tkgFcQAHscclTt%2B%2FXdGPJc46oso0FOBkmmf9rmu9zSEygnan0QYQggmpi7H4n7tll0SP%2BD9VXUR3BHZTtHzeFh2ydyB94mFnNivP2pBmTTXlTt3nXq9LD%2FLyQ21vwSfA2alAYlz3EAWJmoQVg9wxf74jzVHGjdjrLyfoObGKcdpSrGk82%2BRKP7ycqXcqf%2BDiAvtpd6yM31d9P%2FxBRA9mLn4c5fA8dzL5ziH632RwVQpzOpLREVlccKmwclBe1fh5Ea0nmgAj%2F6WIRi%2FBqwdEi%2FOP6c6exZdlcmqCcO9x2ZMj8%2Bu1L0N7sacrEKTThCZ5%2BMaww%2B%2F3bwwY6pgEr5C0%2BwsqRuCEhq%2FqhO2AAbQ%2BfDEUVdlpEqEOPHM0gE%2FtcPFiPYD4MS2A60MM3LpAubrfIgDB9F9UErF8MA3JuqGyC9yNsVpVErBvIaXjrWvpAf4RiylUV2q49OOTkzDJqAqjgQoH%2Fuud2LP6ZCLgIUsIC7nPyvoy1y9XkYYAVgkjXuyo2bq2zyrbHAiymHgQCEPdcpU4omtM%2FmlKsP3TsWISkjgin&X-Amz-Signature=a10460ac4c9601a3d479008ff24b2c504f388a9ca55dc62f2ee05348505e0d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BKGRAP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBjc56tZgChDyB0Kf%2Fqh%2BANSqTli6pHXx36A9ozZDEPSAiAmm2q3g4HzbCblGodfyAKsBiAPxlBYWzlfG1WHFWNdYir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuQC%2B2%2BJEBL311OrfKtwDlF1FMK1IduXBUPfNheGJGhfJ9MasfdaThLvi5m6uynIo3VrTFjJK3hyJoJpdYZozB9QIhke8An2I3b81WDq7qdjBPiID0P8O%2BJSmzmwEM9tBYEhr3fpkz28rDcIIUDe0HDSjodYpWWu6Byq4uf%2F2tBJSCFtmDcyjdLy34gkrVq6AsRpsB9wEDqUEpxb87kNDpU23FHaWUJPd%2BWLKvFgvTk%2BQArwVpCnRLhcdgQbqSxt62%2FYQ5w%2FQo%2BWhr%2FRGIlqvwJPam7Ow8U1SKbjqRIaIyCixdHSZSD7kwdoNssb58bOaTrikmuaAqN4tkgFcQAHscclTt%2B%2FXdGPJc46oso0FOBkmmf9rmu9zSEygnan0QYQggmpi7H4n7tll0SP%2BD9VXUR3BHZTtHzeFh2ydyB94mFnNivP2pBmTTXlTt3nXq9LD%2FLyQ21vwSfA2alAYlz3EAWJmoQVg9wxf74jzVHGjdjrLyfoObGKcdpSrGk82%2BRKP7ycqXcqf%2BDiAvtpd6yM31d9P%2FxBRA9mLn4c5fA8dzL5ziH632RwVQpzOpLREVlccKmwclBe1fh5Ea0nmgAj%2F6WIRi%2FBqwdEi%2FOP6c6exZdlcmqCcO9x2ZMj8%2Bu1L0N7sacrEKTThCZ5%2BMaww%2B%2F3bwwY6pgEr5C0%2BwsqRuCEhq%2FqhO2AAbQ%2BfDEUVdlpEqEOPHM0gE%2FtcPFiPYD4MS2A60MM3LpAubrfIgDB9F9UErF8MA3JuqGyC9yNsVpVErBvIaXjrWvpAf4RiylUV2q49OOTkzDJqAqjgQoH%2Fuud2LP6ZCLgIUsIC7nPyvoy1y9XkYYAVgkjXuyo2bq2zyrbHAiymHgQCEPdcpU4omtM%2FmlKsP3TsWISkjgin&X-Amz-Signature=d0a9a72c16fbe840de54b8e3557e4809eddc908030b29c01df5bcb31ca15e933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
