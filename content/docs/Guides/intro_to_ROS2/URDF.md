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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOEEHZ5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEazVI9H%2BFPNFMvrYaIhj9HfjueWbEPj0Uh6BvJkcjH5AiA3oxblE4yfZzWptRz2F18HrpNrDuUcStPisxhsM5UFfyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMD5YHBcGAzaKXOc%2BfKtwDABpsGgeAl%2FuuZ2DzEEwrBwZy2HI7C837QdzABxY0LDSnddK%2Fp%2BHlnE1sskUUD4TSjmLFhYWQwhuJb63GjviBa8MbD3ej0vMCwFYab6dDw7mopEA55xyHc72Oo%2FUS6TQR2PpTAcsXaV6WuDSlNYORQzGdEovgThOPmoR3GwJYek8t2DUaoGPwHcBz2VB3tHYcw2PmmCyvYgoOyRHhWQG0xQABrCfNVdTvOoDDhB3crQTZ3q9DOxo8iSz2bOVSyDKkO8FrDg%2BDu3SYp%2BwHXyJS8VwRFhBiv7YYKA9aYn%2BHrFPc752LwX19DDF1Ei0%2BeJxcXKMIMOfDFJModYFYbmfNlSVyplXjfVjxtbePOJuUMUFNzZh%2FyjOazZa4tTp9MhVChVm9AzDxa%2F1m0J0Uyq69tsOCHPAvp9RShFppAxBMAt0N92MJaVwLroJWkhjdw4S4UHGdjG0uo6Cvm6d8wMEa%2B3Rvj9q8GD%2FhVUoLCOg1TYECQCDJR9Udl6Jl98%2FjMG5T6tW%2BZE8USVdcwFlVbeQM5K49QyKw9gjTPebFAmlAVUBw9rP9RKRkHegFk3NVwcOtEyDHJ8RhHtIKqk0PGJpu7aMDOMBvVCEZlnzHML8YMkIERrVHIohzwzTlhhMwwZjawQY6pgH5gGK8w%2BG6DGoz0OXd6hnAEtaBilw9rjyQhH0Om2fbYu40YiBOD1d5VF0dC%2BH%2FcrfXMZZoLOkuYHRkMiJX0HXx80kgXzPm3WzGm2punJkhKCPgEWStPxXWMXNBGrTWioEQe9sG8hvMuTVqLptW3DsKSonqLQX5WGAVKba1VMfqRahDukQJQVuIq3f98UqL6yYPMTapWf97w50iuiRMnM1obI1oAY%2BU&X-Amz-Signature=3bd0b9e76be758475667102769c6e5b53079866132702d853faca943bec132ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOEEHZ5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEazVI9H%2BFPNFMvrYaIhj9HfjueWbEPj0Uh6BvJkcjH5AiA3oxblE4yfZzWptRz2F18HrpNrDuUcStPisxhsM5UFfyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMD5YHBcGAzaKXOc%2BfKtwDABpsGgeAl%2FuuZ2DzEEwrBwZy2HI7C837QdzABxY0LDSnddK%2Fp%2BHlnE1sskUUD4TSjmLFhYWQwhuJb63GjviBa8MbD3ej0vMCwFYab6dDw7mopEA55xyHc72Oo%2FUS6TQR2PpTAcsXaV6WuDSlNYORQzGdEovgThOPmoR3GwJYek8t2DUaoGPwHcBz2VB3tHYcw2PmmCyvYgoOyRHhWQG0xQABrCfNVdTvOoDDhB3crQTZ3q9DOxo8iSz2bOVSyDKkO8FrDg%2BDu3SYp%2BwHXyJS8VwRFhBiv7YYKA9aYn%2BHrFPc752LwX19DDF1Ei0%2BeJxcXKMIMOfDFJModYFYbmfNlSVyplXjfVjxtbePOJuUMUFNzZh%2FyjOazZa4tTp9MhVChVm9AzDxa%2F1m0J0Uyq69tsOCHPAvp9RShFppAxBMAt0N92MJaVwLroJWkhjdw4S4UHGdjG0uo6Cvm6d8wMEa%2B3Rvj9q8GD%2FhVUoLCOg1TYECQCDJR9Udl6Jl98%2FjMG5T6tW%2BZE8USVdcwFlVbeQM5K49QyKw9gjTPebFAmlAVUBw9rP9RKRkHegFk3NVwcOtEyDHJ8RhHtIKqk0PGJpu7aMDOMBvVCEZlnzHML8YMkIERrVHIohzwzTlhhMwwZjawQY6pgH5gGK8w%2BG6DGoz0OXd6hnAEtaBilw9rjyQhH0Om2fbYu40YiBOD1d5VF0dC%2BH%2FcrfXMZZoLOkuYHRkMiJX0HXx80kgXzPm3WzGm2punJkhKCPgEWStPxXWMXNBGrTWioEQe9sG8hvMuTVqLptW3DsKSonqLQX5WGAVKba1VMfqRahDukQJQVuIq3f98UqL6yYPMTapWf97w50iuiRMnM1obI1oAY%2BU&X-Amz-Signature=998683934ec50a8824031aa8dc73c7b712410f355d25eda897b9a930145cdf53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
