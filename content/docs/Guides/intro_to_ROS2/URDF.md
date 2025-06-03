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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2XHQTG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIA6AO8SeOMm7MrG3RWybFvw3j%2BxdNLH29Huxg43262ejAiAnwbBcicjwPqQG8jaZMf2gP%2Fr2nbiW8mTSn22hTWUcICr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMS7TQAcqa2ZsvckcJKtwDjrL94GCydBYMxWieUq8gjroGQKDIsSMidzK%2Fz7i5nPV%2B3XoMhFq40ON9xe7bgUmKy6z9HoXk1lYplyGGvU7emwZr4qLGoxQNiukBkxR2IRkw1XZ5lzfuC3FiJcGkvIO13Ihm%2FnNxTK1fH2RqjuATtc%2FwCf46tP64CFL7rMo04q584Hf5M8T6WlIuB80uccD4NbmY%2BGVxOPypeFJf29G46g6XCJnJrIT%2F5LfLCF6gUkMeDhXcLmT4SGbwZksd4a%2FdUeyGsaqzIdYT1BrV5CrCpebx6FnIsnDm%2BXSPV1j8%2F2iY7XWn3Dow6iI8utmU88KxaJ7JO%2FyR%2BSiWz799Uf84mi2TI82v%2BAUi3XxirkeSClfNS9C9tSRls0Un4U4X33Bo9l0W%2B97b6chWyFKVzPHucHpYBiy0sqGkV9SuoumxTd%2BRDOq5tG%2Fj466osZl6cFeyTpHUwcagUwhE3oHIhzqEUajcwQin8x3Q0af2nPAiL21O%2B%2B69Y16%2BQv%2B0y6jIE%2BKff7lUoZVlmWM37tMf7tNKFefXJQgGWEBbkYH9F%2FBKfsFxchaNztXgT0HRm6BU6DwDVdw7UB83wYGzeM5AkBGPMIrtkZRa%2FUX4fvwbQLqFMcx1aKLOs5wKMrOQgPkw85%2F8wQY6pgG5QxX9Qv7%2FRikHvJ%2FSV0Yc%2Bx%2BdPO%2BRQ8XW%2Fi2653aH9efxF99wfO3f7UJ4NDrvRk2m3mhyivyR6kLrC%2BDJ4n%2F753XB7Xp8oBYk5EnQNRqkc3xCMmvBZ%2B70hkHLuStfwqJmIW1Dt6q7gzvBQIFFNdrgmF4NFqFV59riMhlZEbWiJ0BY63TxBZS1o%2FSfDQyy%2F3Zz6guph3gygXxZTt%2BoBRRg%2F3n%2BjaeG&X-Amz-Signature=20d4d11ddc49fdd2ef60af6ff13550b31550c3c6cd8fb46b7a9a3bb227079c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2XHQTG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIA6AO8SeOMm7MrG3RWybFvw3j%2BxdNLH29Huxg43262ejAiAnwbBcicjwPqQG8jaZMf2gP%2Fr2nbiW8mTSn22hTWUcICr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMS7TQAcqa2ZsvckcJKtwDjrL94GCydBYMxWieUq8gjroGQKDIsSMidzK%2Fz7i5nPV%2B3XoMhFq40ON9xe7bgUmKy6z9HoXk1lYplyGGvU7emwZr4qLGoxQNiukBkxR2IRkw1XZ5lzfuC3FiJcGkvIO13Ihm%2FnNxTK1fH2RqjuATtc%2FwCf46tP64CFL7rMo04q584Hf5M8T6WlIuB80uccD4NbmY%2BGVxOPypeFJf29G46g6XCJnJrIT%2F5LfLCF6gUkMeDhXcLmT4SGbwZksd4a%2FdUeyGsaqzIdYT1BrV5CrCpebx6FnIsnDm%2BXSPV1j8%2F2iY7XWn3Dow6iI8utmU88KxaJ7JO%2FyR%2BSiWz799Uf84mi2TI82v%2BAUi3XxirkeSClfNS9C9tSRls0Un4U4X33Bo9l0W%2B97b6chWyFKVzPHucHpYBiy0sqGkV9SuoumxTd%2BRDOq5tG%2Fj466osZl6cFeyTpHUwcagUwhE3oHIhzqEUajcwQin8x3Q0af2nPAiL21O%2B%2B69Y16%2BQv%2B0y6jIE%2BKff7lUoZVlmWM37tMf7tNKFefXJQgGWEBbkYH9F%2FBKfsFxchaNztXgT0HRm6BU6DwDVdw7UB83wYGzeM5AkBGPMIrtkZRa%2FUX4fvwbQLqFMcx1aKLOs5wKMrOQgPkw85%2F8wQY6pgG5QxX9Qv7%2FRikHvJ%2FSV0Yc%2Bx%2BdPO%2BRQ8XW%2Fi2653aH9efxF99wfO3f7UJ4NDrvRk2m3mhyivyR6kLrC%2BDJ4n%2F753XB7Xp8oBYk5EnQNRqkc3xCMmvBZ%2B70hkHLuStfwqJmIW1Dt6q7gzvBQIFFNdrgmF4NFqFV59riMhlZEbWiJ0BY63TxBZS1o%2FSfDQyy%2F3Zz6guph3gygXxZTt%2BoBRRg%2F3n%2BjaeG&X-Amz-Signature=24f7916d792eb393222fba52dd9755a9f9c3b67f746b2c35815c5933d122739a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
