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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAR2V65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ%2BNwFbeTHDqyn64hvzUFidXrXpmCNbN9kZmbN%2BD4%2BIAiBFbN1TfCva%2BheFIc6kaMH0Xq4ft5rMnugR6vksDbCYRCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZxxEZa1W1dCAu%2BsKtwDbM3eKd12gYK2a1D5yoX8siug4wNHDGtoxnbavG%2FN2ak3Saxh7RUxm2pJHIvn8%2BtPCHEfQmfzsBL%2FyH9ZTi9%2BKI2uktBwtdBSwG5vbcZjA6HZuhyg1Mbygb5UPkDBVhvOZ7bRvfojjSU52kXDROtM94RexZy0VDK2I1boGAvViMuYpw9xOhkuPX%2FAAGX9NozyQ51Y4jGoTkmhmwXG%2Fb9c59nzK9stvh%2FBBJM0aigvhd6ewYxAvorp3IRotiOlaomYb03m%2Br1E%2FcXwe45uXxdg8uFSRPHSvaSKmnDpl6Xwh0ORxBvz8onDMTAFajVazx8OSKQawELhvEmy3bY0%2F20LyjXfKA28U4NpZht4r42xYBXCtKWuhn%2Fy%2F0UPmkUxvDbqemp%2B6MpvsCpGqEMY8jhc%2FJp0j2C%2Bu3nB%2F7gN5rh9npNmiPSbEdTIpinh2orVbGeBtIKUBm2wPrtU3%2F%2FbEG4WjLzAxCMHfVktSCZmsmaALHMwRGEC1WOoh%2FIq7G4z53y7neZoWOveroKRf63aVegvuPbP4k6yGFzDQAA%2FhddKTC8%2BxJZyZ0vvbfmuj666%2FXU0%2FaJ%2Bsi1rOW0L4j%2F6lj%2Bw0c1fBver2dH9WrQRQQYHrHHQ1iuC8ZKNVK%2FQawQwzf2%2BwwY6pgGKXQlMxYd452m5%2B51TGlQd4OEWHXYUfrbZ%2BFyeGdFCGFCm77VtSpCtFJX8rdEe8BvyPJiIUkKST73hmhR4YNJzyGllxYTqkNHRuV1AymMPFSp%2F8dtVKHA6wuouhsrwRvlXGvpJ2iUo6jh3OxzjpH6LRuSUYWKhqef67WRJKwDqG6j3FG7%2FYuFC8n99p1AjU3RTQa8JFmTcKA3%2BKOUHey9BDBHEkB8T&X-Amz-Signature=1b8867fb91be55c3dd9e68dc171b4c2bac670940641c37ce28ad33c88116a51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAR2V65%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ%2BNwFbeTHDqyn64hvzUFidXrXpmCNbN9kZmbN%2BD4%2BIAiBFbN1TfCva%2BheFIc6kaMH0Xq4ft5rMnugR6vksDbCYRCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZxxEZa1W1dCAu%2BsKtwDbM3eKd12gYK2a1D5yoX8siug4wNHDGtoxnbavG%2FN2ak3Saxh7RUxm2pJHIvn8%2BtPCHEfQmfzsBL%2FyH9ZTi9%2BKI2uktBwtdBSwG5vbcZjA6HZuhyg1Mbygb5UPkDBVhvOZ7bRvfojjSU52kXDROtM94RexZy0VDK2I1boGAvViMuYpw9xOhkuPX%2FAAGX9NozyQ51Y4jGoTkmhmwXG%2Fb9c59nzK9stvh%2FBBJM0aigvhd6ewYxAvorp3IRotiOlaomYb03m%2Br1E%2FcXwe45uXxdg8uFSRPHSvaSKmnDpl6Xwh0ORxBvz8onDMTAFajVazx8OSKQawELhvEmy3bY0%2F20LyjXfKA28U4NpZht4r42xYBXCtKWuhn%2Fy%2F0UPmkUxvDbqemp%2B6MpvsCpGqEMY8jhc%2FJp0j2C%2Bu3nB%2F7gN5rh9npNmiPSbEdTIpinh2orVbGeBtIKUBm2wPrtU3%2F%2FbEG4WjLzAxCMHfVktSCZmsmaALHMwRGEC1WOoh%2FIq7G4z53y7neZoWOveroKRf63aVegvuPbP4k6yGFzDQAA%2FhddKTC8%2BxJZyZ0vvbfmuj666%2FXU0%2FaJ%2Bsi1rOW0L4j%2F6lj%2Bw0c1fBver2dH9WrQRQQYHrHHQ1iuC8ZKNVK%2FQawQwzf2%2BwwY6pgGKXQlMxYd452m5%2B51TGlQd4OEWHXYUfrbZ%2BFyeGdFCGFCm77VtSpCtFJX8rdEe8BvyPJiIUkKST73hmhR4YNJzyGllxYTqkNHRuV1AymMPFSp%2F8dtVKHA6wuouhsrwRvlXGvpJ2iUo6jh3OxzjpH6LRuSUYWKhqef67WRJKwDqG6j3FG7%2FYuFC8n99p1AjU3RTQa8JFmTcKA3%2BKOUHey9BDBHEkB8T&X-Amz-Signature=3bb0f50756888dd719b5b4fefd268ce98e7f78c3278a24dcdb52bb926a52e856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
