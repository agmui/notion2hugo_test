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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDF7IYRH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz6LBqhW52DB8BPup8uVtgRfybSyxPFWscJp%2B8kdULTAiBqVTML39xnKPcWwVywoS9Lw%2FcrE4d456Yk7EUm%2FtGHfCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPAXJ26VSIPs9hqYKtwDMb7yhkXYzsF68UUFdz2Gx%2Fz0I2MUCeRoASIHuLClwCOalOSozpI3%2BqOfu3Loq4BBMfIsRYJolWVmZT656rw4gYJeewbabP8%2FVUrsh5UCiEf0xNX7uvateAOr542Hp%2Bd3oQgwmMob2vVsJZ3y9R4sNej66SX5jRq1OuQepKjJ1B2rLtvf91fhs%2Fu3Kf%2F71KnNErtIi1uHNzeEcWeMluYhaYLBGhilpA9LZkElnPjIyPJ0G0cUTJSYBqtSkAtBRRCpwyr50GV%2FDTOhipegA3dIBJsSGolCv2cSdtbCjm7A3zNJt4vXiXA5LY2KBxt%2BoFUlt%2BaLJNMWDJzGroLv%2FZhPF6OgbWXw7FXSrF1m5AGKQ3GnPpyUt70LeHi%2FD8HWUzH%2Fp67ZnoMkRcu2uZ5C6kII3PYnUPJIVtZjz2jaA%2F%2FV20O2xTwPSERKiQqTfLRkYlIVLUpi2n13OC9IEGh4ZaXUx2Ajo1L4lVePo8wtPO1XAmcU3%2F7VdxxyDmD%2B7uJluUZK4I7jTZoho5APDIhb33ZB2se2un77xdwZXw1x3NC%2BdpazJra5a6ujT18kPOE2TQAk96ESeiuRw%2BQRNAkxJmU8LqvAyr%2FFRIGPpc31tPSavT5q8WEZtHAbnqGOz1sw8d6FvwY6pgF7ppmejYrkt7z%2BIWhqTnJU8VOqdRf%2BwZbasH3Hg9KTUXRc0VnxKje0ZVYFP7IaPt3LxOiTzhI3uliV7HSujAyX544wUpseA6fabJcU8%2BOv3VRPjEOSGkEUCf27w9buwmYvh%2FJmUUmv5OXcasYmUNQGgk9WyB0krAajZKmka1dt1DR%2BWRTX9tGMbRBkyRb%2FrJq6FQsBr48N%2BII%2FmiL6yhKz2CvK0gpO&X-Amz-Signature=0192357ec883996044ecc241e713129f6a1c288ef200c46d8897f88d531d5f60&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDF7IYRH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz6LBqhW52DB8BPup8uVtgRfybSyxPFWscJp%2B8kdULTAiBqVTML39xnKPcWwVywoS9Lw%2FcrE4d456Yk7EUm%2FtGHfCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPAXJ26VSIPs9hqYKtwDMb7yhkXYzsF68UUFdz2Gx%2Fz0I2MUCeRoASIHuLClwCOalOSozpI3%2BqOfu3Loq4BBMfIsRYJolWVmZT656rw4gYJeewbabP8%2FVUrsh5UCiEf0xNX7uvateAOr542Hp%2Bd3oQgwmMob2vVsJZ3y9R4sNej66SX5jRq1OuQepKjJ1B2rLtvf91fhs%2Fu3Kf%2F71KnNErtIi1uHNzeEcWeMluYhaYLBGhilpA9LZkElnPjIyPJ0G0cUTJSYBqtSkAtBRRCpwyr50GV%2FDTOhipegA3dIBJsSGolCv2cSdtbCjm7A3zNJt4vXiXA5LY2KBxt%2BoFUlt%2BaLJNMWDJzGroLv%2FZhPF6OgbWXw7FXSrF1m5AGKQ3GnPpyUt70LeHi%2FD8HWUzH%2Fp67ZnoMkRcu2uZ5C6kII3PYnUPJIVtZjz2jaA%2F%2FV20O2xTwPSERKiQqTfLRkYlIVLUpi2n13OC9IEGh4ZaXUx2Ajo1L4lVePo8wtPO1XAmcU3%2F7VdxxyDmD%2B7uJluUZK4I7jTZoho5APDIhb33ZB2se2un77xdwZXw1x3NC%2BdpazJra5a6ujT18kPOE2TQAk96ESeiuRw%2BQRNAkxJmU8LqvAyr%2FFRIGPpc31tPSavT5q8WEZtHAbnqGOz1sw8d6FvwY6pgF7ppmejYrkt7z%2BIWhqTnJU8VOqdRf%2BwZbasH3Hg9KTUXRc0VnxKje0ZVYFP7IaPt3LxOiTzhI3uliV7HSujAyX544wUpseA6fabJcU8%2BOv3VRPjEOSGkEUCf27w9buwmYvh%2FJmUUmv5OXcasYmUNQGgk9WyB0krAajZKmka1dt1DR%2BWRTX9tGMbRBkyRb%2FrJq6FQsBr48N%2BII%2FmiL6yhKz2CvK0gpO&X-Amz-Signature=4db437ec8cffe41ea68be2a78449dfb7eeb3c4c1e49a990969ae3e048aa1e2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
