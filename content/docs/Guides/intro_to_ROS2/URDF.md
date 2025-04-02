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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFIXIHE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICO5%2BUKaqLjqP1Nzy57XEYObEXTj5uQqz8yG%2Bews6SZ3AiBU63%2FBw8xxVOt7BQ9fF3LqB3p1WKfL95qrIlUAQAPcoyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgtdFbBYoFUeV8ULyKtwD3ZoSS6wytqXOTbIqjCf5Hpe5rtQ6gPT8hN4jCrFTfO5jnt4%2B9IZQtjDBCl5Wpq6IdsvsvTY0q%2BGv4bHRamhTxVS0D%2BC%2BifMBVDBCd9xok2nDb%2B%2FnLu8NqTF2%2FqYg5XCyDdEgpTEzbTFQ9b9H7hild0S6WYireTqSKgcrfr3iauIaew44N3XrWCKbhroVTPQbItZs2BBsOYQzk0RWhbofglkFduFYprHfswcvTA%2BfhWum5lPhH8%2BhZfkJbuzpPw%2BKyOVxyKxV374miSUkb7bgLgyuG94Du2som4tCkoUMqT1UmzwgWuOsG57g5Xr96YWrpWl1M%2BhU%2BSYWeZVSiPOksZRaZDKMVptAHO0CL9pzIz0Vdgj%2Bmc8pL8xiNyRrR4HTbaqGIH4RhPZtPS%2BpK%2FbL4EzqOQpKp0uDIY%2FjBuCEYjtEGYcyYc4UZPp3uh26jdzQPr9Hmp%2FgHrmC%2BKCeAEA5Hf%2F74YbSeWuUjWOieotDuApTL88ifkIqdXQTanU6wp8uNCRyzGYFHnBdqNUjEwxgzdEc%2FHb%2BBU4iNkv0fvc3036BrOnTuPapGYbTCisEsoeQvRzBfzIdBs1Khi6VZvzqihs0xKh%2B7DoZgOGw5SzFeNLm74BBOUXBDf8Tw%2FQwj4uzvwY6pgGFYrdgXGnslBjUiVPPJn%2F0vrmIQGdnE8YHraGbin4Xh0wfjWtaEPTsuWgn%2BXUJ00GfrrBBYALIGPhCGLiopk6%2FprgAeB1nArxvONp4cWlp4G58B%2BDC6um%2FtEbd1YlC1fRToYIb%2Ft%2Bwt7vhjGSlo%2FnUnap2UFdoIttAa52Zd%2BOYuTMGGYt2Ed4x%2FBEHAWz0ifU1E2Evkx1OhHD8%2FVQ2CC8%2FJyB0mdE9&X-Amz-Signature=5a0d374bf504f80e987651f7d8461bc81a35dc8dba69ed6b0a9c853b830f1696&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFIXIHE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICO5%2BUKaqLjqP1Nzy57XEYObEXTj5uQqz8yG%2Bews6SZ3AiBU63%2FBw8xxVOt7BQ9fF3LqB3p1WKfL95qrIlUAQAPcoyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgtdFbBYoFUeV8ULyKtwD3ZoSS6wytqXOTbIqjCf5Hpe5rtQ6gPT8hN4jCrFTfO5jnt4%2B9IZQtjDBCl5Wpq6IdsvsvTY0q%2BGv4bHRamhTxVS0D%2BC%2BifMBVDBCd9xok2nDb%2B%2FnLu8NqTF2%2FqYg5XCyDdEgpTEzbTFQ9b9H7hild0S6WYireTqSKgcrfr3iauIaew44N3XrWCKbhroVTPQbItZs2BBsOYQzk0RWhbofglkFduFYprHfswcvTA%2BfhWum5lPhH8%2BhZfkJbuzpPw%2BKyOVxyKxV374miSUkb7bgLgyuG94Du2som4tCkoUMqT1UmzwgWuOsG57g5Xr96YWrpWl1M%2BhU%2BSYWeZVSiPOksZRaZDKMVptAHO0CL9pzIz0Vdgj%2Bmc8pL8xiNyRrR4HTbaqGIH4RhPZtPS%2BpK%2FbL4EzqOQpKp0uDIY%2FjBuCEYjtEGYcyYc4UZPp3uh26jdzQPr9Hmp%2FgHrmC%2BKCeAEA5Hf%2F74YbSeWuUjWOieotDuApTL88ifkIqdXQTanU6wp8uNCRyzGYFHnBdqNUjEwxgzdEc%2FHb%2BBU4iNkv0fvc3036BrOnTuPapGYbTCisEsoeQvRzBfzIdBs1Khi6VZvzqihs0xKh%2B7DoZgOGw5SzFeNLm74BBOUXBDf8Tw%2FQwj4uzvwY6pgGFYrdgXGnslBjUiVPPJn%2F0vrmIQGdnE8YHraGbin4Xh0wfjWtaEPTsuWgn%2BXUJ00GfrrBBYALIGPhCGLiopk6%2FprgAeB1nArxvONp4cWlp4G58B%2BDC6um%2FtEbd1YlC1fRToYIb%2Ft%2Bwt7vhjGSlo%2FnUnap2UFdoIttAa52Zd%2BOYuTMGGYt2Ed4x%2FBEHAWz0ifU1E2Evkx1OhHD8%2FVQ2CC8%2FJyB0mdE9&X-Amz-Signature=ee6bb9f3b9cc3a96723da6bafa17da38c067bd4b3ee9fb5cbe44fc87cc619157&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
