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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBBSNUZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrzhB5CBlw%2BFji%2F30YDsKq5IcspWjGztanZjwq6RfLnQIgLrCGC1UW3blRJvkJqD9zc689O37tLpNEdpNt8ELMti0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPztq6hDkeNN9gTvKircA%2FfP7kT6hoKGrtj7aQ3%2FpeXYcj3%2BNxTcLv0wsOk0xlZpl%2FEDyZ6HKcalp8luDpM9k57YkzBYgvmdXFq%2FiIRwYL6OUVjvwHHHSePdwDVEddq2KqZ0XqMq0LCJHSOGc5AamNv3JweLDw1aGf0uN5nV9%2BD1MKrSGK1ZllNyGGfXFA8Lz9IDhKO2nyIac92hDYM7OVBcTawygUv1df7CVrpeSpc5OLHM5brewd2%2BKj8S7aT1ARnRewbYEXiKNypIGBqNpPCE1qST%2BKhPTXv3%2BaJfZBPWf6NEpyHceP8B%2FphtduZt7Ctg%2FGdvf1apWHHuYbk9DdzF5v4GxREIGA%2BhhZffmi0Mqi38HBfE9cdiwlnpSu1LXm8e%2FbiJGafCy7EZZPEXTVVJ1yl%2BBtqLMvWGjUz4JxyTjUUs6vZ1fZqMDW%2FSq0IvqMHQ6gsjTQbaaI0awgdOBZ2TQKYcw2zox7vbSaxOVBDgXpovZt6a7R7sU8e0gH%2FTv30JkpbSc2Jr78E8tFe69FCuSzZJR3IIYiCeakgoBqyQtIKQO3UzhoDv30N12zGMF%2FjEtbY3eiU9mBG8QiQrx3zrstR9L4EFJAD19bVEL%2FcDYD%2FzSLcZ9ZKfgkfdfxAGcsR3roaNcEO357yYMNqDssMGOqUBvWU7DotirpStHU9alMEEHJJkMe%2F7fr2zRdK3QhF3GmAru06%2F8ifcpIODZFBXfQIWY5rT%2BAx6H%2FF4OAxN8fMl0YJuNXJIO7LvstaZ4tW32TSmImDbnUgh8B0VsYcjRSCWBdpf0iDI%2FqMRKURYY6Dh45evi9tVnD7oimMkLzi66KHGLKiwHhMcwigDv3aIM00rxA2t1PYRCBzcSsDMpSCNvXPS5cmI&X-Amz-Signature=bc5a792036ebe94c59ce8aba347e8115b5a421b01a2545e10298e580a359375a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBBSNUZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrzhB5CBlw%2BFji%2F30YDsKq5IcspWjGztanZjwq6RfLnQIgLrCGC1UW3blRJvkJqD9zc689O37tLpNEdpNt8ELMti0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPztq6hDkeNN9gTvKircA%2FfP7kT6hoKGrtj7aQ3%2FpeXYcj3%2BNxTcLv0wsOk0xlZpl%2FEDyZ6HKcalp8luDpM9k57YkzBYgvmdXFq%2FiIRwYL6OUVjvwHHHSePdwDVEddq2KqZ0XqMq0LCJHSOGc5AamNv3JweLDw1aGf0uN5nV9%2BD1MKrSGK1ZllNyGGfXFA8Lz9IDhKO2nyIac92hDYM7OVBcTawygUv1df7CVrpeSpc5OLHM5brewd2%2BKj8S7aT1ARnRewbYEXiKNypIGBqNpPCE1qST%2BKhPTXv3%2BaJfZBPWf6NEpyHceP8B%2FphtduZt7Ctg%2FGdvf1apWHHuYbk9DdzF5v4GxREIGA%2BhhZffmi0Mqi38HBfE9cdiwlnpSu1LXm8e%2FbiJGafCy7EZZPEXTVVJ1yl%2BBtqLMvWGjUz4JxyTjUUs6vZ1fZqMDW%2FSq0IvqMHQ6gsjTQbaaI0awgdOBZ2TQKYcw2zox7vbSaxOVBDgXpovZt6a7R7sU8e0gH%2FTv30JkpbSc2Jr78E8tFe69FCuSzZJR3IIYiCeakgoBqyQtIKQO3UzhoDv30N12zGMF%2FjEtbY3eiU9mBG8QiQrx3zrstR9L4EFJAD19bVEL%2FcDYD%2FzSLcZ9ZKfgkfdfxAGcsR3roaNcEO357yYMNqDssMGOqUBvWU7DotirpStHU9alMEEHJJkMe%2F7fr2zRdK3QhF3GmAru06%2F8ifcpIODZFBXfQIWY5rT%2BAx6H%2FF4OAxN8fMl0YJuNXJIO7LvstaZ4tW32TSmImDbnUgh8B0VsYcjRSCWBdpf0iDI%2FqMRKURYY6Dh45evi9tVnD7oimMkLzi66KHGLKiwHhMcwigDv3aIM00rxA2t1PYRCBzcSsDMpSCNvXPS5cmI&X-Amz-Signature=3f7fdf2e97d9a2efb7135893fb1d011406a791a461be180fb1ba42c7ab87f8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
