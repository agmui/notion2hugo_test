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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK56GAO3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO12P%2FlNa8Zu0AxsIuOHmJ5%2BAOE7ZQWP5ZzQAs%2BgXoMAiB20qEIm0ILiybPuhXgfrKKP11JfqtMNjlC1Jn2NYBPdSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB5yGAd6dVkJFETxfKtwDPH0OVBBj67Q8CD5sgx%2F1zXWjGfOlXIcoSUb5fLkHSAoRq4WCY1BJ5eUMLI3VwHxIPANdJVYyj5IcFckGrx762l7trMrBVfFu1sQZvjZ0SS4tIce7w7WK5knbUUQfGqEHEGCg56vqjiCMb0u5REjfJ0ioBoanfGHJYj%2FeAFZkIEsVASsaqnJwTT4XsQYb6pM9z%2BafgdlsyDCCVSldy9ydnRDU5x2ek5kTEwf5fLkzvqilmz%2FKQMuWdOpSvXSdWGznmwJgqbMnJfgjM5clOy%2Fe2E526Pa87Bixc0AjdTKzpdvRO3QQxCpJM%2B1%2FGJZHqYwz0U3dfeATKMbnd%2F%2FWCj4Sa0E%2FITfuW4zj9zPlxf4vTEVzlNasGIpfIgfuR0MThikekVYzm1IaabM2mrzlGz9%2BoKphCpQ1GMpYbZ1kftWFqCJY5Yd7wozC8M4JBTGBs7%2F5BNJRpd5bqAHQM%2F127Fzl8halPssaJp1jq2oWi5GEK5WDsTAYHSDxq%2FLGRvwonaOldOPrdcHZz0Ntb4pfsAF8ZVBjHlyKzOoA71yoZgSd17DTBC2Rd65%2BL9YpOK0JyPHStG0C2bSKdHaWC2LQLtEXnQXNnNMwLx6GiW%2BRy44dwGeNOsYnX0DFMbCC1Lkwu7CCvwY6pgGAPqLTI%2FrBXwEF7son2zdjMWt0b3L6ywzD2ohUVdc2Jl%2BS7%2BjeT11F%2FGMZVdNN5YRWI1LRLZdNWP62MdV%2B%2BvGm2w7iz%2BUhlv3z9P1h0LFm4WvSSO6ESDacMh5wS12T75NCbbkbFyJQxto3GecurZx%2BP%2Fn%2Fh57aW34FWFlWZIBzpKlSqUyolYz%2F0x491uyznxFzYXudQnhYCOnJkkGQmYqbW%2B0a%2B8Gr&X-Amz-Signature=fab24ab1153f027640798e91430c58dbcdb0e4894b0dbd281c4b81b0baf417e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK56GAO3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO12P%2FlNa8Zu0AxsIuOHmJ5%2BAOE7ZQWP5ZzQAs%2BgXoMAiB20qEIm0ILiybPuhXgfrKKP11JfqtMNjlC1Jn2NYBPdSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB5yGAd6dVkJFETxfKtwDPH0OVBBj67Q8CD5sgx%2F1zXWjGfOlXIcoSUb5fLkHSAoRq4WCY1BJ5eUMLI3VwHxIPANdJVYyj5IcFckGrx762l7trMrBVfFu1sQZvjZ0SS4tIce7w7WK5knbUUQfGqEHEGCg56vqjiCMb0u5REjfJ0ioBoanfGHJYj%2FeAFZkIEsVASsaqnJwTT4XsQYb6pM9z%2BafgdlsyDCCVSldy9ydnRDU5x2ek5kTEwf5fLkzvqilmz%2FKQMuWdOpSvXSdWGznmwJgqbMnJfgjM5clOy%2Fe2E526Pa87Bixc0AjdTKzpdvRO3QQxCpJM%2B1%2FGJZHqYwz0U3dfeATKMbnd%2F%2FWCj4Sa0E%2FITfuW4zj9zPlxf4vTEVzlNasGIpfIgfuR0MThikekVYzm1IaabM2mrzlGz9%2BoKphCpQ1GMpYbZ1kftWFqCJY5Yd7wozC8M4JBTGBs7%2F5BNJRpd5bqAHQM%2F127Fzl8halPssaJp1jq2oWi5GEK5WDsTAYHSDxq%2FLGRvwonaOldOPrdcHZz0Ntb4pfsAF8ZVBjHlyKzOoA71yoZgSd17DTBC2Rd65%2BL9YpOK0JyPHStG0C2bSKdHaWC2LQLtEXnQXNnNMwLx6GiW%2BRy44dwGeNOsYnX0DFMbCC1Lkwu7CCvwY6pgGAPqLTI%2FrBXwEF7son2zdjMWt0b3L6ywzD2ohUVdc2Jl%2BS7%2BjeT11F%2FGMZVdNN5YRWI1LRLZdNWP62MdV%2B%2BvGm2w7iz%2BUhlv3z9P1h0LFm4WvSSO6ESDacMh5wS12T75NCbbkbFyJQxto3GecurZx%2BP%2Fn%2Fh57aW34FWFlWZIBzpKlSqUyolYz%2F0x491uyznxFzYXudQnhYCOnJkkGQmYqbW%2B0a%2B8Gr&X-Amz-Signature=9306f7b4c410955dd344783699831a206663a8a179d6459d3b29d79374c338ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
