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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4JV7V3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCeOU%2FSm5s6TmrSMlaQLSTjKOfnAIlsJHLQJCsSu9SE0QIgbn1P5utwa8Z7Ak7vQWTbDvrNupyNponEkUxSaYZFezEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOBFIuffcyeWkb5%2FVSrcA7qgWh10vLz0Y6zpte29tC%2BZMtwkMpsqOovbTZuyqzGDOX7gDbu%2BYhfgmFgMtkUHYyyHm%2BkbMZ1v4DlZP3oVoXgV129KUdR0YZLxeaLT1048GrlpvVHAW2s9SqziEJdxWte3UNDZ36iyfsOVCb6fVm29ITEL8YRucmtoYN6W%2F%2Fi7l9IFd%2F7hcNeT8tK1TlSf7Ks0oL7JCTHc3Vu6ql%2Bc2kEEkDz75yd5pspZ6lcINrljgpveBcng4e%2FWHP%2ByQYkPXr0iyKmpM8Ra4PIL6KknaOtZMdjB4UM6Rq76IdRFXxz7NzKJxm%2FV6fk1fllyT2jNDiRlY%2BSFtI7KRoyuVHAE%2FrQg0JPXI7cyuGYKfTNCiLEkh8uFKhg2gwz0VkYhEPTOkFryNfNlmi0wvwP%2F4movjQimWyovHiojkfOf%2BSfBqiVYRoL5Kb1HHVnVsslFu871xC%2Bu9hN6KpgqCfUVX7S7zffKlsJljuqD0vf9%2FFkM2bmgS5WyX6roFlRaRJ3yQyb%2FZZZkH6xc51t7VNvSC4Qe3gBplG5W5au37VbeUE1omZI9TepN%2BiBatF5UdUEPGosVjMCSTZPfqzfxIabFX4YsquPgAW1ZzutUWSviCTov3VaHA8xSgguogUstNqWBMPuEtr4GOqUBADUKLHAhQ9f6cmFHB5V0TOK%2FM%2B71uk4TTuYeuGyGpVsupXIHwOEUDe5oypoa6meG%2BldMzXKL7oS%2FwR9abjKrsGcfoRRfHnlOE0xLgabA%2BmbQbUG3HwgceMAiLWPvH%2BVNFtquW7mS796jGc%2Bxpur0%2FLfm6z2fr9eW24%2ByR7o173UlLO%2BYHALyTxzB65shMaglP%2FQq23khbhv3LGNY7lap5wk4jRzL&X-Amz-Signature=90d0f0344b890523dd95b8f79227948374fafa364ebca98838f1c98e8ab4a8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4JV7V3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCeOU%2FSm5s6TmrSMlaQLSTjKOfnAIlsJHLQJCsSu9SE0QIgbn1P5utwa8Z7Ak7vQWTbDvrNupyNponEkUxSaYZFezEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOBFIuffcyeWkb5%2FVSrcA7qgWh10vLz0Y6zpte29tC%2BZMtwkMpsqOovbTZuyqzGDOX7gDbu%2BYhfgmFgMtkUHYyyHm%2BkbMZ1v4DlZP3oVoXgV129KUdR0YZLxeaLT1048GrlpvVHAW2s9SqziEJdxWte3UNDZ36iyfsOVCb6fVm29ITEL8YRucmtoYN6W%2F%2Fi7l9IFd%2F7hcNeT8tK1TlSf7Ks0oL7JCTHc3Vu6ql%2Bc2kEEkDz75yd5pspZ6lcINrljgpveBcng4e%2FWHP%2ByQYkPXr0iyKmpM8Ra4PIL6KknaOtZMdjB4UM6Rq76IdRFXxz7NzKJxm%2FV6fk1fllyT2jNDiRlY%2BSFtI7KRoyuVHAE%2FrQg0JPXI7cyuGYKfTNCiLEkh8uFKhg2gwz0VkYhEPTOkFryNfNlmi0wvwP%2F4movjQimWyovHiojkfOf%2BSfBqiVYRoL5Kb1HHVnVsslFu871xC%2Bu9hN6KpgqCfUVX7S7zffKlsJljuqD0vf9%2FFkM2bmgS5WyX6roFlRaRJ3yQyb%2FZZZkH6xc51t7VNvSC4Qe3gBplG5W5au37VbeUE1omZI9TepN%2BiBatF5UdUEPGosVjMCSTZPfqzfxIabFX4YsquPgAW1ZzutUWSviCTov3VaHA8xSgguogUstNqWBMPuEtr4GOqUBADUKLHAhQ9f6cmFHB5V0TOK%2FM%2B71uk4TTuYeuGyGpVsupXIHwOEUDe5oypoa6meG%2BldMzXKL7oS%2FwR9abjKrsGcfoRRfHnlOE0xLgabA%2BmbQbUG3HwgceMAiLWPvH%2BVNFtquW7mS796jGc%2Bxpur0%2FLfm6z2fr9eW24%2ByR7o173UlLO%2BYHALyTxzB65shMaglP%2FQq23khbhv3LGNY7lap5wk4jRzL&X-Amz-Signature=5b40e671224b3e1d761c96b69c9460a94593d3363b83e58c0ee985aca64e51b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
