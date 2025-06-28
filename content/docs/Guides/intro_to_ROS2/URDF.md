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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKOPMLU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWdYGPVXgvc%2B1x9TdpJ1b%2FclGh%2FZ5CSrdBWt3TZ0QLQIhAJhkZLEX%2FBoMZR1WlkJZYl5qfWlcGMUWkD%2FAjy1ED9QoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2FvsxVogkD8rpdbgq3APItcHd%2Fn4XOQg3YwRjXPper1zcQ3%2BQppGoc94wyyWj7fmbvkbWRrGE4za3y2NLsbxNJCMFsS7emtEq12cOXq8aS6LoXGt7%2BPmYURrgU0v1UDVBaOk5nUyM3YNRguGqbtABiz9NPRwtLZIu1SBsOTKkF4KN%2B2EmACSwgeVmyngajnMV3yaIt5uRh%2FXG7xxr%2Fm6NWMyBbjWjrWb5bNxslgXZp1FmB1VIFgGihr66qdv2J9emfBRgORQgCKXMnSgoASEXSQU1LMNRPKk6DmZEcpSUKfouwMXgIvyNgdyv6tIC0L8Y1%2B4ayXHEAzrviwR5w%2FDXwvJNMqnXfpCf7NAv9Yy7cYK7sJMXClja%2B9J84BN0Sf8gdgzDjdyHTKih86RbVIXmuPgTf8F62JgM7SGs0so39HgKStwxowEUbyQXRhCiBUJwFnQQ%2FubLNgtu%2FuPS8jWV8coMliD%2BqgcBkfHqUhZE8yCQw3Jqu63cI4pSFIotjHr7fhpngaC06Is%2B0QVfVsAWMgW3sg%2FMKSQci%2F9BsCo90kikEKNWhKo5T0XR6FzXsplOANmv8lCytKASTfBtnj3oPyqQfoBgFS67UgAA1VyVoNNHO1Ip%2FDTOeqkHud2%2FiNiwCv2mt%2FAxppoApjDJj%2F%2FCBjqkAZD7F8VwmCTxX%2FKafp3FDSv6UAvIQAk12M4mG7jKZD0mw2qujJuk%2F0ZsUm9pKci5c5QIEVBuHT0WxFQOiCUQew2W9j5gTMkJCNoy1LfIHEtwmswJkPFMDLU%2BORzuT6EIIrpbcjSyRgWl61OYM2%2F7UiVB2h05OlN7XL1ACR9MEyHI9R5QgxudQIT4EjUVaNQIZeEr2D5kBAr9Q7AkkcURApld6Uy3&X-Amz-Signature=da3e9d2f709fe0a09d5d24597cae93a4725b079ec9686b8498036d30bde064ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKOPMLU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWdYGPVXgvc%2B1x9TdpJ1b%2FclGh%2FZ5CSrdBWt3TZ0QLQIhAJhkZLEX%2FBoMZR1WlkJZYl5qfWlcGMUWkD%2FAjy1ED9QoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2FvsxVogkD8rpdbgq3APItcHd%2Fn4XOQg3YwRjXPper1zcQ3%2BQppGoc94wyyWj7fmbvkbWRrGE4za3y2NLsbxNJCMFsS7emtEq12cOXq8aS6LoXGt7%2BPmYURrgU0v1UDVBaOk5nUyM3YNRguGqbtABiz9NPRwtLZIu1SBsOTKkF4KN%2B2EmACSwgeVmyngajnMV3yaIt5uRh%2FXG7xxr%2Fm6NWMyBbjWjrWb5bNxslgXZp1FmB1VIFgGihr66qdv2J9emfBRgORQgCKXMnSgoASEXSQU1LMNRPKk6DmZEcpSUKfouwMXgIvyNgdyv6tIC0L8Y1%2B4ayXHEAzrviwR5w%2FDXwvJNMqnXfpCf7NAv9Yy7cYK7sJMXClja%2B9J84BN0Sf8gdgzDjdyHTKih86RbVIXmuPgTf8F62JgM7SGs0so39HgKStwxowEUbyQXRhCiBUJwFnQQ%2FubLNgtu%2FuPS8jWV8coMliD%2BqgcBkfHqUhZE8yCQw3Jqu63cI4pSFIotjHr7fhpngaC06Is%2B0QVfVsAWMgW3sg%2FMKSQci%2F9BsCo90kikEKNWhKo5T0XR6FzXsplOANmv8lCytKASTfBtnj3oPyqQfoBgFS67UgAA1VyVoNNHO1Ip%2FDTOeqkHud2%2FiNiwCv2mt%2FAxppoApjDJj%2F%2FCBjqkAZD7F8VwmCTxX%2FKafp3FDSv6UAvIQAk12M4mG7jKZD0mw2qujJuk%2F0ZsUm9pKci5c5QIEVBuHT0WxFQOiCUQew2W9j5gTMkJCNoy1LfIHEtwmswJkPFMDLU%2BORzuT6EIIrpbcjSyRgWl61OYM2%2F7UiVB2h05OlN7XL1ACR9MEyHI9R5QgxudQIT4EjUVaNQIZeEr2D5kBAr9Q7AkkcURApld6Uy3&X-Amz-Signature=7d407acbc85bf6bdd50c92668ca73ad96d0f69b3ffab647570b3f6589c324c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
