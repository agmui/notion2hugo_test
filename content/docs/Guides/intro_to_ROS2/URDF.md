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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OUAHUO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBNG6SZ4w4ZkPiP8QqP9eUtV34T1SCN%2BYVCeVtEbs9p0AiBdDYD2OKBo0w%2BW0akdnBpVtb2JVLorvHblui18MR2CdSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMPxKwQTvCymYSNugLKtwD%2B5FFrOYrggT1aYcfB8ghSvpf6VfdHbXA7XZ68ZXMENNXgUCtypEtyrZAtQjE1P9R8fmy5AycJkzrrcY1cc%2Fzvdai49223lVwaaXIcgPKcZdPLel6nnwjuSxeLcdUFgYKy1DXfuJCaJ6E5sdhmejNzNa%2FP3eFKfio2UMqfV1nR97y8Io0SxYhs7pe1ft86QZ5ofVhdDETkWgifrtk6iqLB4B2UuyJSDVfFVp8ajLGeRESJGnUjpwoaw1jfBvEv5jYcotVAHH9PtnSqVdklO9CxZBKPfFdoKz6Fr9y99fp7DIEE9qk4eBk9Owizj%2Bw%2FGSgTEu4dsbZgIgGGCrDK63Mo5t%2B7U7uhVVE3jV6sQ6h6bu2ctVJdZy8iZ2xYuyPrtpxeFaBJcif2K0qliuAa%2FTqX5KPZhGdMRLz10ERy64TOij5C3pDchpfVMo0SxmYIftte%2F%2Bz7Nua95J%2BEPZn%2FCU4ypI8qhKAps4psx6RKnN30KbfjbjJdBtGYZspWerIZtK83rwAb4ycZd7cK0t5JTpp8iSwZUWtYw2ibHo5%2FlMLXt1orCI2G0xZD3cWv0R3xRwwluAYVe869XckvPeZwtHpUQGAdb2DC41cbCd1vclxlHL3QgTNarm97GXTCgswkZT%2FvQY6pgEmlC55NxBnUfAC9nFPSQ3l4bouDIAgApOJ%2Fgg2uAJ6C7gZPsGk%2FBbIZAPC8gQFP6q1h5w0bh0GTdwtT17ot1PMMqMPpJcdfHxWPiYFlhsMtQ6zK%2FyNkrg%2BrdTD6UVfi9Puc6iLgJwetlf%2BEvzvLjo%2FwtNXprFRQmMr3N5RErnXXZNfVhCL%2FnugrdbPvnWMyi08pzBrf2DeL9UgdLvglOO8RgKBZSfC&X-Amz-Signature=e60ee3f252cccf3497620ac667f556303ef29e0d9165345c99994a13f5058668&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OUAHUO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBNG6SZ4w4ZkPiP8QqP9eUtV34T1SCN%2BYVCeVtEbs9p0AiBdDYD2OKBo0w%2BW0akdnBpVtb2JVLorvHblui18MR2CdSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMPxKwQTvCymYSNugLKtwD%2B5FFrOYrggT1aYcfB8ghSvpf6VfdHbXA7XZ68ZXMENNXgUCtypEtyrZAtQjE1P9R8fmy5AycJkzrrcY1cc%2Fzvdai49223lVwaaXIcgPKcZdPLel6nnwjuSxeLcdUFgYKy1DXfuJCaJ6E5sdhmejNzNa%2FP3eFKfio2UMqfV1nR97y8Io0SxYhs7pe1ft86QZ5ofVhdDETkWgifrtk6iqLB4B2UuyJSDVfFVp8ajLGeRESJGnUjpwoaw1jfBvEv5jYcotVAHH9PtnSqVdklO9CxZBKPfFdoKz6Fr9y99fp7DIEE9qk4eBk9Owizj%2Bw%2FGSgTEu4dsbZgIgGGCrDK63Mo5t%2B7U7uhVVE3jV6sQ6h6bu2ctVJdZy8iZ2xYuyPrtpxeFaBJcif2K0qliuAa%2FTqX5KPZhGdMRLz10ERy64TOij5C3pDchpfVMo0SxmYIftte%2F%2Bz7Nua95J%2BEPZn%2FCU4ypI8qhKAps4psx6RKnN30KbfjbjJdBtGYZspWerIZtK83rwAb4ycZd7cK0t5JTpp8iSwZUWtYw2ibHo5%2FlMLXt1orCI2G0xZD3cWv0R3xRwwluAYVe869XckvPeZwtHpUQGAdb2DC41cbCd1vclxlHL3QgTNarm97GXTCgswkZT%2FvQY6pgEmlC55NxBnUfAC9nFPSQ3l4bouDIAgApOJ%2Fgg2uAJ6C7gZPsGk%2FBbIZAPC8gQFP6q1h5w0bh0GTdwtT17ot1PMMqMPpJcdfHxWPiYFlhsMtQ6zK%2FyNkrg%2BrdTD6UVfi9Puc6iLgJwetlf%2BEvzvLjo%2FwtNXprFRQmMr3N5RErnXXZNfVhCL%2FnugrdbPvnWMyi08pzBrf2DeL9UgdLvglOO8RgKBZSfC&X-Amz-Signature=da72a9dd8064b8fd620a14c42394555e14eeff2b53cf58986fa2919f17929535&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
