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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQV6JOBD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLlNqJipT2gZRISWgikQIEGGZSgn9kKcdrlaJLMjwKgAiAFTgbbPqt%2FHq4Nrbj0EOVnonR8lwOGXAPJqdD5FKZAcCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoLXYVeqL6iK8Kd%2BqKtwDxBdue%2BtNJiznmyDaeyYc3eprLIW3dDoiEBukadYqFLZs9IDQDYwRVfQqEElHfxNlQAfy3jI%2BU4GJ1jgcFkinc4gIKGbY45tusxhVISzrkY1uKs%2Btq6%2FgkQE%2F2KPv7eYUTJHZ4ndudIj1IXB8tGeLwx0%2F1ZK2O%2BsYJ64DbB4pEotqD2Pbq7%2FXMP7%2Bvj76neBDpjFsUR9p5kqJdkwo1fUZ8Qr1g44JtYEzz8QF9gc0MtxG1weHmcuGEU6ZWjglRDqBoEIjqyUiC5wpKT%2BlUCP5NR5DuS2V80sutPQjL5RKsAxTWSXOFS3VGM3W3EOsczhNslLEPMKWi2vis5Ox%2F%2FZ4BQjzTCfkCF07NePs7kZGaidm6CcQIuqcLQoc9Z8cIigtBIIZvwEDHTE4vJJsGQOfbsgIz2RrAXuuOLXtyJRtgCfUZ1Jol2CcOYvNCuxIKeV6vSihRgGngC7Z7lKyoS4wGSMVvVO9jIbgoRNF5aZuPkYM0bGu5sPugoDLZ2lpL71Y3aUOdI0rWV4bdVc89Lmoznvx6CjX%2BsFxfQWi9JWeQHD7qCHxUmnivADhCW061xSx1QVgkjm%2FUxaunttZtToYW84xO2jGKkPzh%2BevqGkndcs6FVTSJpoeHpudkm8wg7fKwgY6pgEhTO3cdqF7agWibW8fziN3i6vWYoGfeRasPcfvrm%2BY5XnDe69oIGxhUM4AXk4hr3wgS5xlY1bo51g%2BCqb3%2FZWToTVvPj1yBfaQfBYDp4QvhGKF14JRdlLEn5E01mzM8kEePQOw04iV%2BY0b1K6%2F50Tpd%2Fxgf51snhVvGz8tN8hb2NBO36%2Bd9vryXg%2FFY5qpQM0s90d6MX4CoTPK206cLZ0BdiDm%2FTcY&X-Amz-Signature=5593d22cb156fc51e835f7b1d7b7403be21ea80456d5a95503d7372e24738bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQV6JOBD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLlNqJipT2gZRISWgikQIEGGZSgn9kKcdrlaJLMjwKgAiAFTgbbPqt%2FHq4Nrbj0EOVnonR8lwOGXAPJqdD5FKZAcCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoLXYVeqL6iK8Kd%2BqKtwDxBdue%2BtNJiznmyDaeyYc3eprLIW3dDoiEBukadYqFLZs9IDQDYwRVfQqEElHfxNlQAfy3jI%2BU4GJ1jgcFkinc4gIKGbY45tusxhVISzrkY1uKs%2Btq6%2FgkQE%2F2KPv7eYUTJHZ4ndudIj1IXB8tGeLwx0%2F1ZK2O%2BsYJ64DbB4pEotqD2Pbq7%2FXMP7%2Bvj76neBDpjFsUR9p5kqJdkwo1fUZ8Qr1g44JtYEzz8QF9gc0MtxG1weHmcuGEU6ZWjglRDqBoEIjqyUiC5wpKT%2BlUCP5NR5DuS2V80sutPQjL5RKsAxTWSXOFS3VGM3W3EOsczhNslLEPMKWi2vis5Ox%2F%2FZ4BQjzTCfkCF07NePs7kZGaidm6CcQIuqcLQoc9Z8cIigtBIIZvwEDHTE4vJJsGQOfbsgIz2RrAXuuOLXtyJRtgCfUZ1Jol2CcOYvNCuxIKeV6vSihRgGngC7Z7lKyoS4wGSMVvVO9jIbgoRNF5aZuPkYM0bGu5sPugoDLZ2lpL71Y3aUOdI0rWV4bdVc89Lmoznvx6CjX%2BsFxfQWi9JWeQHD7qCHxUmnivADhCW061xSx1QVgkjm%2FUxaunttZtToYW84xO2jGKkPzh%2BevqGkndcs6FVTSJpoeHpudkm8wg7fKwgY6pgEhTO3cdqF7agWibW8fziN3i6vWYoGfeRasPcfvrm%2BY5XnDe69oIGxhUM4AXk4hr3wgS5xlY1bo51g%2BCqb3%2FZWToTVvPj1yBfaQfBYDp4QvhGKF14JRdlLEn5E01mzM8kEePQOw04iV%2BY0b1K6%2F50Tpd%2Fxgf51snhVvGz8tN8hb2NBO36%2Bd9vryXg%2FFY5qpQM0s90d6MX4CoTPK206cLZ0BdiDm%2FTcY&X-Amz-Signature=e68d96d502553b0f4d9bc88de565309e33871b919c5b240fbc43183cc16c3277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
