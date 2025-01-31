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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6E4YVXU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfIEhI5LKBcnRRNsGp5OSk4JPg7%2F7QnTyj7VEpevqTfAIgQQdams5x6tGPSvMhWHysvq2VR5Whp5cUEC2xzFYB0OwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDXY%2BFcPEnCr5rRRircA4oPEWzGykqEGiVlQYnNAbxtLViK79l7Ax9v1eKRMnTA%2FA%2FImxsOEiB4sQhgoAwRBlcbly3cE9SfK97Y1XhsFVmMLxAqOqzB93jXRFEAm4pcoo7mL0lBC0nBipqF9DHzDIGoPTa8m9XT5dG9ITs82%2BMLLdip8RENBYKtNhnUtPzvo9eGRKCC24U3LMMgWrv3%2BYP%2Fl9xcOKSlksnmdJaeLZIBFcda51w7jWQxeZdYr3YHD%2BgYlOrFTzGzQyv63YFzRAngScxAICna9lMOKNOcLUGddeKsusQ5pqYBDnbzyvH4pgCQHw4b6e7sW%2Fx%2FPwDHvVtrKpJcwiXuO%2BBQ3jItz6Sq2GcExoOePtHJht37yYv5tm1Cl3rYAiDDHrHgZkvwxLwJnGzkCqJfRk0a55AljWbxVpKPaT7u1C1R7uhNwdGm3Az4aSy%2BsxJsYhxMp5WuEth0RPaqtjwX2jiWqMTSIcD1%2FNhUy0Cr1UoH4IqPwMhuXX86OMLo5cSJxNgbS9DqrdMVqc9LzfWXqnGIEhUeRFLvwPuMsERPMpwr1iDfweZGp6j2V5%2FK2iVg65fOFW%2FGw58eRJ6rukoapoTGtBlBztSLSNFRj9B%2FB0J9Kh2vwJLvYHFFlphhpldJBscXMOaV9bwGOqUBj7YaqQ86WgG8F3RPrBgS6FL6kk8u48hySmnRQw0Ufr%2BKCeTW1RcgRqK%2BrwRNxz0b4m3K%2BvUqAe1oHZaJQ%2FIGmpXFo1xJb4BoZSEApNynl1Gv52D3kiGoznXCK2AX1w1OkiabmZz6PsVm8iR2B2lI%2Fzvx%2F3sVjQQgmU6lGV9PMDexGxybXxJqdxrDKkEctMjhOOw%2FQG2ZnLHdCajmsTmDx3u8vE5F&X-Amz-Signature=7fe7a5e1a3dfa446e65422f637caf05698be856a395522ac970dd176192867a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6E4YVXU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfIEhI5LKBcnRRNsGp5OSk4JPg7%2F7QnTyj7VEpevqTfAIgQQdams5x6tGPSvMhWHysvq2VR5Whp5cUEC2xzFYB0OwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDXY%2BFcPEnCr5rRRircA4oPEWzGykqEGiVlQYnNAbxtLViK79l7Ax9v1eKRMnTA%2FA%2FImxsOEiB4sQhgoAwRBlcbly3cE9SfK97Y1XhsFVmMLxAqOqzB93jXRFEAm4pcoo7mL0lBC0nBipqF9DHzDIGoPTa8m9XT5dG9ITs82%2BMLLdip8RENBYKtNhnUtPzvo9eGRKCC24U3LMMgWrv3%2BYP%2Fl9xcOKSlksnmdJaeLZIBFcda51w7jWQxeZdYr3YHD%2BgYlOrFTzGzQyv63YFzRAngScxAICna9lMOKNOcLUGddeKsusQ5pqYBDnbzyvH4pgCQHw4b6e7sW%2Fx%2FPwDHvVtrKpJcwiXuO%2BBQ3jItz6Sq2GcExoOePtHJht37yYv5tm1Cl3rYAiDDHrHgZkvwxLwJnGzkCqJfRk0a55AljWbxVpKPaT7u1C1R7uhNwdGm3Az4aSy%2BsxJsYhxMp5WuEth0RPaqtjwX2jiWqMTSIcD1%2FNhUy0Cr1UoH4IqPwMhuXX86OMLo5cSJxNgbS9DqrdMVqc9LzfWXqnGIEhUeRFLvwPuMsERPMpwr1iDfweZGp6j2V5%2FK2iVg65fOFW%2FGw58eRJ6rukoapoTGtBlBztSLSNFRj9B%2FB0J9Kh2vwJLvYHFFlphhpldJBscXMOaV9bwGOqUBj7YaqQ86WgG8F3RPrBgS6FL6kk8u48hySmnRQw0Ufr%2BKCeTW1RcgRqK%2BrwRNxz0b4m3K%2BvUqAe1oHZaJQ%2FIGmpXFo1xJb4BoZSEApNynl1Gv52D3kiGoznXCK2AX1w1OkiabmZz6PsVm8iR2B2lI%2Fzvx%2F3sVjQQgmU6lGV9PMDexGxybXxJqdxrDKkEctMjhOOw%2FQG2ZnLHdCajmsTmDx3u8vE5F&X-Amz-Signature=fab8ec4e82885574c900aeb23efdb3a280581bdf921357111b182b405eae3c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
