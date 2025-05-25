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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HMRS5F%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDsVJHznoDvrfb%2BTnEe7H3zqGOFcr1aNBS4wrtWfOXLHQIgflf3vX1Iuc1Hxbt2wteVwCOv8rpGVuhNoVJxEeJhTKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHGUedGwWCHOFqCvKircA0S1g1UjCqUJsxBPDZ%2FvsbCeAZEeN8OcZOlPGtf5jA6mdKMxTfkLHeVm%2BjFCb4RyAhw6qLZ2tP7VpaoKrvus%2F4FCAPr6MrNwnkUccEDZ59RRCcObPPgh67gzeumYlfe5zLXll0CQnYakLsEmP1cG9%2FW%2Benvd6Y5%2FPJxyQ0g%2FRC4TszO6VOTUtHqvw1gIW9CxuJ89LmT2Jcr5ZQwGO%2BYFT28is6flT4yr2hSseSXHYFcvQhrRGt77b14NDdeJ0sYiwefAmFrRjFiIooMny2v%2FcvQ%2BcsKW5JFjITEtcmrKYn6MzeaKBrXzgABSKcheQcAWR1BS3IXtrzlyfwncm9hf6EfG2ojsd%2FYZiCucpbYdRP0jpEIhooXNkj5axSmxs3stvSrtUjBfqX0kIptale%2FJ1jwuJwj3kIBMR2g3IBmICeu%2BvGj3EGRc1iFdhnW%2B%2BW50pSvuz3CAamt5zO3SxQ2Zk69WIkNk9Jy9aRBlpLvC1PLW2YE9IdnUlzlCqpaHo4dPHgszuPifqaM7%2BSFTvreq0lqTGBxfe4f0azJBkR4DGU8%2FFC%2BCojdKy%2F87timYHT3ZVGbtx1qSPXY9R8YobZ42yGCLVQxo3HGWdngnsOj8HBhY6O%2BK4qgvYaObAxyoMKb9y8EGOqUBpnm5lYcW5t5Iv1fmPdSQl42Id%2Fkfuz5gwhXcaNo599l4PjFAAlF47%2Fs5P%2FM%2FyVeZyQvzh3IxJg9vXQ5tu%2BiGdXdHTzV2aMYNwCmPU2h%2FSVKzK1gyNepMr%2BdbG9FxSIe3mBi21mSIcsM84bIDHdWeaCIGki4fnXHKjV5eIJ7yiBWigrCTWd75XnxdeJwm24KmnPAu7xqyoMueq3SugIiCuzLcDHHo&X-Amz-Signature=46b4442d582ddf26a85c96c14963bf084ee39dc171c3bc9dffa9d96cb408f137&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HMRS5F%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDsVJHznoDvrfb%2BTnEe7H3zqGOFcr1aNBS4wrtWfOXLHQIgflf3vX1Iuc1Hxbt2wteVwCOv8rpGVuhNoVJxEeJhTKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHGUedGwWCHOFqCvKircA0S1g1UjCqUJsxBPDZ%2FvsbCeAZEeN8OcZOlPGtf5jA6mdKMxTfkLHeVm%2BjFCb4RyAhw6qLZ2tP7VpaoKrvus%2F4FCAPr6MrNwnkUccEDZ59RRCcObPPgh67gzeumYlfe5zLXll0CQnYakLsEmP1cG9%2FW%2Benvd6Y5%2FPJxyQ0g%2FRC4TszO6VOTUtHqvw1gIW9CxuJ89LmT2Jcr5ZQwGO%2BYFT28is6flT4yr2hSseSXHYFcvQhrRGt77b14NDdeJ0sYiwefAmFrRjFiIooMny2v%2FcvQ%2BcsKW5JFjITEtcmrKYn6MzeaKBrXzgABSKcheQcAWR1BS3IXtrzlyfwncm9hf6EfG2ojsd%2FYZiCucpbYdRP0jpEIhooXNkj5axSmxs3stvSrtUjBfqX0kIptale%2FJ1jwuJwj3kIBMR2g3IBmICeu%2BvGj3EGRc1iFdhnW%2B%2BW50pSvuz3CAamt5zO3SxQ2Zk69WIkNk9Jy9aRBlpLvC1PLW2YE9IdnUlzlCqpaHo4dPHgszuPifqaM7%2BSFTvreq0lqTGBxfe4f0azJBkR4DGU8%2FFC%2BCojdKy%2F87timYHT3ZVGbtx1qSPXY9R8YobZ42yGCLVQxo3HGWdngnsOj8HBhY6O%2BK4qgvYaObAxyoMKb9y8EGOqUBpnm5lYcW5t5Iv1fmPdSQl42Id%2Fkfuz5gwhXcaNo599l4PjFAAlF47%2Fs5P%2FM%2FyVeZyQvzh3IxJg9vXQ5tu%2BiGdXdHTzV2aMYNwCmPU2h%2FSVKzK1gyNepMr%2BdbG9FxSIe3mBi21mSIcsM84bIDHdWeaCIGki4fnXHKjV5eIJ7yiBWigrCTWd75XnxdeJwm24KmnPAu7xqyoMueq3SugIiCuzLcDHHo&X-Amz-Signature=69f397812319e0b832cb595aa1948123ad831853a4d4f49ad4a015451725f6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
