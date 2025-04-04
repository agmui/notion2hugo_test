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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOPGM3N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYorR7fuMRuYpZL4E0vm1n%2BiKhYU1b6Ae9hGB7vpwjsQIhAJv8oMZrnVopZIQriY8P%2FVNhMBUv6mRxeHimAo0Vj2joKv8DCB0QABoMNjM3NDIzMTgzODA1IgxKHkeshX3lXqqQPPkq3ANYcIYdENYI3Rxdc3uYg5Wb1%2BsGADTluDwIDpAnRYt2N6Fi%2FnQOI%2F3eFJl8%2FIiaaw4p2a3CXZIXeVN%2FO24GgodjE0H35QeOSKGSBQ7e2CcrqK84UvqFVpKmpZETHK2jvePysvTCQ6Jzlaw5YnELSxyrkLSz1uStTpJUB2VE2uq89CsNflf5EN1O08%2B9R6Y7ZStlT%2FAlHTyOfAW8WaSsAQPBdF5GponvFLlO3aF9A5jDLBSpfeJwTe0n%2FkfZIB1UXsCOKPKhWIuuhl17cdKhlSH63E13sGUbOQUowhyG8ZMOIQRo58laSLSBLHZgJlDwnQWLDb%2BEtaEACcsntW3YBugBEV8408%2Bb6QMxE7QXIx2oeMAdasRsf2%2Bs2aBJJtGxmsB7SyRJ1h9TydWKG8JB94zfgB8V2f7KJyrvO2IX1ev7R5exkxR7CzYEg2aKMI%2Bz%2BZmj47svdIYUyvZzn5k83lNYiBzHmztRKizBZkkQHS9Dt1Y7XYob%2BmZ76mlSmEsGtadWy94IUoQhyeNTFJJ7BE8a%2B0HyQIZ3%2FijoSXQW%2FahOvTVMRFGBzVxjhQOrc6FkNkIyju2u9EEgxTH3%2FjoJkaiq%2FEGp6pzAxVMQhqwjYHAFDGW7zv%2Fgk0P5vrahLjDr7cC%2FBjqkAfvEJkPK5CW%2FrXB4FdXzB1nvAYx2PJfRfZXOCJupRFF3C%2FWIqopPGbd2MwkT0JLYXw4rQhaRYhY5ha8y8Llhu9EUwMe%2FGX5AEjHAd%2BkKRiBywj9Sh58RXNRA%2BR4pbqvGHJWGXClAMJtmGfFpxP6bq4Jpy49bqf7XZZNm601RcHplDwKricIOFciSdy0cOi%2B9ujF0e0WMw%2F7SPaWzUvhL3qLuvjYs&X-Amz-Signature=fd442364e6d35545a0c5230e6ec1f72e7342b4b051fb7c28840fff03ab3829b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOPGM3N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYorR7fuMRuYpZL4E0vm1n%2BiKhYU1b6Ae9hGB7vpwjsQIhAJv8oMZrnVopZIQriY8P%2FVNhMBUv6mRxeHimAo0Vj2joKv8DCB0QABoMNjM3NDIzMTgzODA1IgxKHkeshX3lXqqQPPkq3ANYcIYdENYI3Rxdc3uYg5Wb1%2BsGADTluDwIDpAnRYt2N6Fi%2FnQOI%2F3eFJl8%2FIiaaw4p2a3CXZIXeVN%2FO24GgodjE0H35QeOSKGSBQ7e2CcrqK84UvqFVpKmpZETHK2jvePysvTCQ6Jzlaw5YnELSxyrkLSz1uStTpJUB2VE2uq89CsNflf5EN1O08%2B9R6Y7ZStlT%2FAlHTyOfAW8WaSsAQPBdF5GponvFLlO3aF9A5jDLBSpfeJwTe0n%2FkfZIB1UXsCOKPKhWIuuhl17cdKhlSH63E13sGUbOQUowhyG8ZMOIQRo58laSLSBLHZgJlDwnQWLDb%2BEtaEACcsntW3YBugBEV8408%2Bb6QMxE7QXIx2oeMAdasRsf2%2Bs2aBJJtGxmsB7SyRJ1h9TydWKG8JB94zfgB8V2f7KJyrvO2IX1ev7R5exkxR7CzYEg2aKMI%2Bz%2BZmj47svdIYUyvZzn5k83lNYiBzHmztRKizBZkkQHS9Dt1Y7XYob%2BmZ76mlSmEsGtadWy94IUoQhyeNTFJJ7BE8a%2B0HyQIZ3%2FijoSXQW%2FahOvTVMRFGBzVxjhQOrc6FkNkIyju2u9EEgxTH3%2FjoJkaiq%2FEGp6pzAxVMQhqwjYHAFDGW7zv%2Fgk0P5vrahLjDr7cC%2FBjqkAfvEJkPK5CW%2FrXB4FdXzB1nvAYx2PJfRfZXOCJupRFF3C%2FWIqopPGbd2MwkT0JLYXw4rQhaRYhY5ha8y8Llhu9EUwMe%2FGX5AEjHAd%2BkKRiBywj9Sh58RXNRA%2BR4pbqvGHJWGXClAMJtmGfFpxP6bq4Jpy49bqf7XZZNm601RcHplDwKricIOFciSdy0cOi%2B9ujF0e0WMw%2F7SPaWzUvhL3qLuvjYs&X-Amz-Signature=501545171bcae6ec63e914e3ef7b3881c0ca5768e7b188258e50ef8950354e27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
