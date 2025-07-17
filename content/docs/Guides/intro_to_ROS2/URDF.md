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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB365A7J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDXOlX4VN0o5CHzpbP0aOSZ2H%2BTbAYDataOmLnxkrSPkgIhAN3vbVbPJpqmqfS726fRy3N%2FrdDTktdpODoDo%2B%2FI%2B%2FaDKv8DCHcQABoMNjM3NDIzMTgzODA1Igxd4TWGgAWDt0zYQHAq3AOUm8803w9veEQBQkpJLXqLspiOBcJt3h0ufZI5YtDb5Ww6yns%2BCamXnbnAre0XWGtXC%2FDhdiQjTxLQSSvkb6ptMyJratGsjSNbjNojNrHo39Wrw8oH%2B%2FSdEvRKF2aqzfEevvo5fCZE7yNAVOHKdj4pyfq8olxCVXTJEaO0PkGNt0YPEzZ4U5dxj6eaMkGVYxcUP1O6D54up8uDMaZGq6MNTmhKF1Ff7P5h564goaZXs5PqpxJV9LSJUOMRCbesIkfqp7TtiGzmes49h%2BeCsEpPxHiNWuIeaCeCFsFCWiciQQW9VRZnc3g8NffN0%2BoTGVmf5tUBPPqVtN4h2%2BDdcVXX2%2Bmf02FaUUqqAB%2FmtRK5Mgw7%2F0DveMzRdYBuYnRxetCls6zar0QItiZufo61swSeK%2BM6v0jknaqJDabT9CatATMlbB6x8wyeTFp3cEUHN%2BaMfsdHqhaoBdhSdk8YlLjnuzSzU0bbBb8bEi%2BUCvpiYD5ML5xNDnQGZc369%2FjyIy3eLsAvTASzxqvtyveof%2BWoMS66DaBL%2FbdjNVK9rfr01378qLTgCTWjccZB58bh6ab3QGPAQjEIPsJvQNb%2BBkkzb6nd9cdUxTacJeYrouzw3lGRO3nRnSl0fle12TD%2BiuTDBjqkAWWiFuNDu%2FpKuLMSUtHj4N0PRwmz6kUoX9%2FOy9SO%2FUxZ%2B9T8yxQhREv%2BFqBME5qcJ98KWLEeee7M%2FXxN0UY1dHJ9D3TeyGFzOBute6NsNqmBaS3%2FrwnzQOpFUza6SqynoQtOkrED7vfp8tKUxS8xCQXratntk4QghqrzTJdM9D1zdKFoKjQaKeSW%2B4ripA0rP7l1J%2BmoVAkpexm%2BHLDx%2BMDkt7Lk&X-Amz-Signature=cc3d28813fb3e5ab2ad10267f912660a6f080eb878bbab794273069af9cab69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB365A7J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDXOlX4VN0o5CHzpbP0aOSZ2H%2BTbAYDataOmLnxkrSPkgIhAN3vbVbPJpqmqfS726fRy3N%2FrdDTktdpODoDo%2B%2FI%2B%2FaDKv8DCHcQABoMNjM3NDIzMTgzODA1Igxd4TWGgAWDt0zYQHAq3AOUm8803w9veEQBQkpJLXqLspiOBcJt3h0ufZI5YtDb5Ww6yns%2BCamXnbnAre0XWGtXC%2FDhdiQjTxLQSSvkb6ptMyJratGsjSNbjNojNrHo39Wrw8oH%2B%2FSdEvRKF2aqzfEevvo5fCZE7yNAVOHKdj4pyfq8olxCVXTJEaO0PkGNt0YPEzZ4U5dxj6eaMkGVYxcUP1O6D54up8uDMaZGq6MNTmhKF1Ff7P5h564goaZXs5PqpxJV9LSJUOMRCbesIkfqp7TtiGzmes49h%2BeCsEpPxHiNWuIeaCeCFsFCWiciQQW9VRZnc3g8NffN0%2BoTGVmf5tUBPPqVtN4h2%2BDdcVXX2%2Bmf02FaUUqqAB%2FmtRK5Mgw7%2F0DveMzRdYBuYnRxetCls6zar0QItiZufo61swSeK%2BM6v0jknaqJDabT9CatATMlbB6x8wyeTFp3cEUHN%2BaMfsdHqhaoBdhSdk8YlLjnuzSzU0bbBb8bEi%2BUCvpiYD5ML5xNDnQGZc369%2FjyIy3eLsAvTASzxqvtyveof%2BWoMS66DaBL%2FbdjNVK9rfr01378qLTgCTWjccZB58bh6ab3QGPAQjEIPsJvQNb%2BBkkzb6nd9cdUxTacJeYrouzw3lGRO3nRnSl0fle12TD%2BiuTDBjqkAWWiFuNDu%2FpKuLMSUtHj4N0PRwmz6kUoX9%2FOy9SO%2FUxZ%2B9T8yxQhREv%2BFqBME5qcJ98KWLEeee7M%2FXxN0UY1dHJ9D3TeyGFzOBute6NsNqmBaS3%2FrwnzQOpFUza6SqynoQtOkrED7vfp8tKUxS8xCQXratntk4QghqrzTJdM9D1zdKFoKjQaKeSW%2B4ripA0rP7l1J%2BmoVAkpexm%2BHLDx%2BMDkt7Lk&X-Amz-Signature=3e051f1b944cffcd1e203ead667b3c5bd5134719467897e39224b68634c33ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
