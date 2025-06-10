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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RYCN3C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSXmloYvpbO410HM0Z%2BDMp7Eu%2B1vD%2BtRI1l%2FhMUrmFhgIhAImiYeqoDwTUQ5110f0tZ%2BICR9e4cpmI4f1hwrXs5Fd7KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf3XeRZldhJDwD0rkq3AOwNu0JsBejl5kyJyz%2B9AckcRL2gj7kHdzWGmW6q4gDwo1xxoLebjDIqvhdX%2F8HDGQ2qRkoht9A5a%2B%2B%2Bhus5RhuICqmW38IHkganStrvoS69btvc5%2BKE4gKECFkZEQhdkN4w2rPyk%2BzkCglFb%2FlMLxrnTPI5P08tckS1%2BsdagzmuYJ647Ql%2FS1LO6Uz9nnKs03Y7D2fzLvalFmAY61fbgJ4P%2Fugxa7fastiRxCF28gZ8lMlJSOwSos7nu5OXecvrXjN%2Bz3YKWLhpH%2F%2BeRuiFR509roVtwexNWEMnPtcknvPERitsnRV5%2BtFD%2BuNDIAxQVKGtzPrRbeDSdlxjX%2FkDR815T2RdglxEmqrrF08r4OD264xPimeQMb0zc3ChxODrwgXEtS4rx%2FJKeXfHbpCJifdUR%2BJtwzQyYrbanBaWN0P4lvLNiHcBADhe6f1uH9B5RA%2FODMJwDedxO%2F5DGlKkpdVGKyyLIs77fLzvDs%2Fau7h%2FAq8dpHSuF3u01PpbO92Gcsbyy4%2F%2BqWkVJufMwS0sSuoOQExXuoBLkgqlpoqjsoZfe%2FnP7gyKCgcxn537OjrwYyEzTF07xtYqziienoBqusxKZQBfYnhnSQTVXi7AqURj7GYx0TzdcyIShTgyjCoyqHCBjqkAfcfpE%2FtqQh6NZ1aJDadIhpW3vrHF%2FVY2EXxnVoog7S6B5DpMOvdvh6yy%2BbGD7fy8T44aFhFak6Y13teI8t7PtZx96aZtYaxEYIJKZNk6SFXXSdYIOmJAjDIXEnoPAb9xAB1VaMb82Wm6WEfH7fnVxTeOfBN7fqjX%2FCWbmkfkaMVwDM7qauaTdRTnHMAWyS3j%2BMFkS3hx5xJv5ikIDsoXR2kwSXu&X-Amz-Signature=f111379c8b3a890c707031e080c50329f6a85696640cf14f545273b1b7dcf287&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RYCN3C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSXmloYvpbO410HM0Z%2BDMp7Eu%2B1vD%2BtRI1l%2FhMUrmFhgIhAImiYeqoDwTUQ5110f0tZ%2BICR9e4cpmI4f1hwrXs5Fd7KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf3XeRZldhJDwD0rkq3AOwNu0JsBejl5kyJyz%2B9AckcRL2gj7kHdzWGmW6q4gDwo1xxoLebjDIqvhdX%2F8HDGQ2qRkoht9A5a%2B%2B%2Bhus5RhuICqmW38IHkganStrvoS69btvc5%2BKE4gKECFkZEQhdkN4w2rPyk%2BzkCglFb%2FlMLxrnTPI5P08tckS1%2BsdagzmuYJ647Ql%2FS1LO6Uz9nnKs03Y7D2fzLvalFmAY61fbgJ4P%2Fugxa7fastiRxCF28gZ8lMlJSOwSos7nu5OXecvrXjN%2Bz3YKWLhpH%2F%2BeRuiFR509roVtwexNWEMnPtcknvPERitsnRV5%2BtFD%2BuNDIAxQVKGtzPrRbeDSdlxjX%2FkDR815T2RdglxEmqrrF08r4OD264xPimeQMb0zc3ChxODrwgXEtS4rx%2FJKeXfHbpCJifdUR%2BJtwzQyYrbanBaWN0P4lvLNiHcBADhe6f1uH9B5RA%2FODMJwDedxO%2F5DGlKkpdVGKyyLIs77fLzvDs%2Fau7h%2FAq8dpHSuF3u01PpbO92Gcsbyy4%2F%2BqWkVJufMwS0sSuoOQExXuoBLkgqlpoqjsoZfe%2FnP7gyKCgcxn537OjrwYyEzTF07xtYqziienoBqusxKZQBfYnhnSQTVXi7AqURj7GYx0TzdcyIShTgyjCoyqHCBjqkAfcfpE%2FtqQh6NZ1aJDadIhpW3vrHF%2FVY2EXxnVoog7S6B5DpMOvdvh6yy%2BbGD7fy8T44aFhFak6Y13teI8t7PtZx96aZtYaxEYIJKZNk6SFXXSdYIOmJAjDIXEnoPAb9xAB1VaMb82Wm6WEfH7fnVxTeOfBN7fqjX%2FCWbmkfkaMVwDM7qauaTdRTnHMAWyS3j%2BMFkS3hx5xJv5ikIDsoXR2kwSXu&X-Amz-Signature=a5598a25c49cda09e66772cf3ee45c52f3386dbc824ec129469730dba1bcaad6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
