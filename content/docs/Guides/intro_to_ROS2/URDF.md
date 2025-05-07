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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUCP5XX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvDI69K5tNqIQDE%2FVpd5YUue1KMbFFXoGIwfQqufpGIgIgEF1nenoCpo7bR4y%2BvybudHKjWXPK3CNpnr46CpM8DZ8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLyAL%2Bm4Ff0cVgFRECrcA7CbBoqRhsNNDKuKHw%2BYA%2FFT%2F2PpfY81yVxLsUY%2FWIMxu%2F7%2BIWazW2TeVI04LspQCkMC%2BoKZmKJ1TqyNWlFliefUQIK1S073B5csOWOPnpwOT%2BVAupKUuYdHUNqMEcC2tiU1aWy7oJdty0s6SFFJon8YFMsZiCinKtbsOEaV0SVH4NbN4AWI%2Bw2BAsmhZtypyIFTeBUG4LG2P81%2BHqJ5iV1kVfUfDdxGMT6WejGnYVjwSP6Q0tDt9tClnA1hfWnsesbnGU9mARU%2BeOEpy8KdfUkQypfqhAmQUWz4CNihb0YGfW%2FggXLzE3mxLXD77M13GhJ3qABsAKb6l%2B5ssoIt2IbPOusoTRQvqyS0LcYJkE6RDS%2B8ar9sutbOe43PYSLsrfTlf2zaG74hnCq%2BQnD5btstqPNpUY%2BtNn8nPQj5VwQrlhX%2Fs6AhQa8x16Hj9Z26T0DZYMN6FcO7LFoAVd0GOnbFs9%2BPaGG0z8qvYohoDEMkblUMzweLKCws6gZFWUfN0jt4n88k0vHxr9BnqNKBEv5Smcm90HsHyMaVaky5lEofcePMgY2aizjsWZEW2Da8HKX1lMxrY2BIdINARhME7JUwNc2LMPRrnsgms3jLqZlu1Anyv4L%2FGe2upuaOMNGb7sAGOqUBOJV47PsOUgb%2BVvzdqkrfEYKqk9FWOsRjOaG25MYYJgUlADXMBVRDyyyzNrFOxInlEuMvLbtLuUV4a0dboFEyxkihNo5WPexLUp%2BmEdDE8yksKWbI%2BdnjlTcEwRPfUCTKtlHXpNYM4ysewDfcYzn4y1vIM9PV5Me76w9NXBBrpZZonZzEFpFpCWW4rN7ifm215h%2BiE%2Bf%2FPjy5jUcqEhAGFXe7ggEf&X-Amz-Signature=2e2fc5852f8d68b03b7d9f28761dee44a1dbff71a59bf458bdd3ce630dca428f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUCP5XX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvDI69K5tNqIQDE%2FVpd5YUue1KMbFFXoGIwfQqufpGIgIgEF1nenoCpo7bR4y%2BvybudHKjWXPK3CNpnr46CpM8DZ8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLyAL%2Bm4Ff0cVgFRECrcA7CbBoqRhsNNDKuKHw%2BYA%2FFT%2F2PpfY81yVxLsUY%2FWIMxu%2F7%2BIWazW2TeVI04LspQCkMC%2BoKZmKJ1TqyNWlFliefUQIK1S073B5csOWOPnpwOT%2BVAupKUuYdHUNqMEcC2tiU1aWy7oJdty0s6SFFJon8YFMsZiCinKtbsOEaV0SVH4NbN4AWI%2Bw2BAsmhZtypyIFTeBUG4LG2P81%2BHqJ5iV1kVfUfDdxGMT6WejGnYVjwSP6Q0tDt9tClnA1hfWnsesbnGU9mARU%2BeOEpy8KdfUkQypfqhAmQUWz4CNihb0YGfW%2FggXLzE3mxLXD77M13GhJ3qABsAKb6l%2B5ssoIt2IbPOusoTRQvqyS0LcYJkE6RDS%2B8ar9sutbOe43PYSLsrfTlf2zaG74hnCq%2BQnD5btstqPNpUY%2BtNn8nPQj5VwQrlhX%2Fs6AhQa8x16Hj9Z26T0DZYMN6FcO7LFoAVd0GOnbFs9%2BPaGG0z8qvYohoDEMkblUMzweLKCws6gZFWUfN0jt4n88k0vHxr9BnqNKBEv5Smcm90HsHyMaVaky5lEofcePMgY2aizjsWZEW2Da8HKX1lMxrY2BIdINARhME7JUwNc2LMPRrnsgms3jLqZlu1Anyv4L%2FGe2upuaOMNGb7sAGOqUBOJV47PsOUgb%2BVvzdqkrfEYKqk9FWOsRjOaG25MYYJgUlADXMBVRDyyyzNrFOxInlEuMvLbtLuUV4a0dboFEyxkihNo5WPexLUp%2BmEdDE8yksKWbI%2BdnjlTcEwRPfUCTKtlHXpNYM4ysewDfcYzn4y1vIM9PV5Me76w9NXBBrpZZonZzEFpFpCWW4rN7ifm215h%2BiE%2Bf%2FPjy5jUcqEhAGFXe7ggEf&X-Amz-Signature=d8ab50b73662b9679a4b057356cdf369eecaf0512227960f4d65b87ef2338d09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
