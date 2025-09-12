---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXY7STR%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXoCyYboRFrbzkXkiip22G6CdjvVzmjP3%2B%2Bbt16c%2BuwIgR1eMNutfD13wq6z5qNfASy6Z%2BlQuslydMe7FkDyJvUsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDA26yDLvEYlLP%2FpHLircA9nQtQTsD0QgW6jFaBhbu0sF2GgdPEp3Hg2yjakJbE%2BXwUVfZ5LzvvVwkGqAQCkTmhxAb21z%2B%2BXHqFrHO6QKSCWll2vdT3DwEAjhH9BLUCnbr0lT8n3%2BSHvhukSiHT18eabMXK4O48Oh9Icx9hzNnTVsoklWdcH5qFcR43JwU1hPD2g0L9%2Fg%2F1KmJIlifR2UvL%2BSWws6nN3af%2Fo5Wf8oJ%2FgfTPI7blJUGBvZhFZD5JCO1W1mV7znAIK2WFZaYaahGZ4m91eYu%2Fbg7BZd21KRgR1WeIbxAWH3MvnlEzIAPtcsVj5j28yzbpFWJ%2F4zgVzEf0bghT%2FBEodbOaIXGPMuZ6mSc3uIqD2XOY7TVAH5mmZL%2BDHnIfVxR%2Bs0m%2BbuQfh2yhb3QUZzqBeVkN%2B5vG5QIHnzPYK1eoP3RzIRiZjyPe7M2Tyb3Nz7UFzCu8QP50LjTt0rDItqX92NtHqu2tYu0kvu9v8FlcRtHIq%2B3e%2BwO9fjiGrcrycw%2BKJz6DQU9FoKHasoyEUBQnfU2Elsa9ir79yuSyelzqeG930NsiV8XSIBcz2aVmv2qyEfEXvmFwU0k0y%2FNSpIf3ZFO55J8WnVDOUEAUNpHbUgnNhUc%2FZdapiw59WmynzXLBPOIYSLMOLRjcYGOqUBDrPTjWV33S9ZD25znrcrwdktBBxrdMa3%2B6zvrJ5Xl9WaGgPIptX%2BDiuVzgTOvY3d563LJz%2F1KBrT8XKzgJ%2Fro6QvRoOeuBewwVnSEdv7qFVwUqzBrLYlfA8fiIuzFO7MbQv2AmGxQdzAevs%2FcNuK%2FAbpBqGfrBh3RO8QHpfZsq6IRYlj6ejsU%2BH7x5c5QYOqZgsQjLyOybI3la%2BH6sJ2ewarFX4%2F&X-Amz-Signature=6e767f5cd373110811492f6e3ada52b1e6c5b0b43be39e45db799f68bd762c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXY7STR%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXoCyYboRFrbzkXkiip22G6CdjvVzmjP3%2B%2Bbt16c%2BuwIgR1eMNutfD13wq6z5qNfASy6Z%2BlQuslydMe7FkDyJvUsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDA26yDLvEYlLP%2FpHLircA9nQtQTsD0QgW6jFaBhbu0sF2GgdPEp3Hg2yjakJbE%2BXwUVfZ5LzvvVwkGqAQCkTmhxAb21z%2B%2BXHqFrHO6QKSCWll2vdT3DwEAjhH9BLUCnbr0lT8n3%2BSHvhukSiHT18eabMXK4O48Oh9Icx9hzNnTVsoklWdcH5qFcR43JwU1hPD2g0L9%2Fg%2F1KmJIlifR2UvL%2BSWws6nN3af%2Fo5Wf8oJ%2FgfTPI7blJUGBvZhFZD5JCO1W1mV7znAIK2WFZaYaahGZ4m91eYu%2Fbg7BZd21KRgR1WeIbxAWH3MvnlEzIAPtcsVj5j28yzbpFWJ%2F4zgVzEf0bghT%2FBEodbOaIXGPMuZ6mSc3uIqD2XOY7TVAH5mmZL%2BDHnIfVxR%2Bs0m%2BbuQfh2yhb3QUZzqBeVkN%2B5vG5QIHnzPYK1eoP3RzIRiZjyPe7M2Tyb3Nz7UFzCu8QP50LjTt0rDItqX92NtHqu2tYu0kvu9v8FlcRtHIq%2B3e%2BwO9fjiGrcrycw%2BKJz6DQU9FoKHasoyEUBQnfU2Elsa9ir79yuSyelzqeG930NsiV8XSIBcz2aVmv2qyEfEXvmFwU0k0y%2FNSpIf3ZFO55J8WnVDOUEAUNpHbUgnNhUc%2FZdapiw59WmynzXLBPOIYSLMOLRjcYGOqUBDrPTjWV33S9ZD25znrcrwdktBBxrdMa3%2B6zvrJ5Xl9WaGgPIptX%2BDiuVzgTOvY3d563LJz%2F1KBrT8XKzgJ%2Fro6QvRoOeuBewwVnSEdv7qFVwUqzBrLYlfA8fiIuzFO7MbQv2AmGxQdzAevs%2FcNuK%2FAbpBqGfrBh3RO8QHpfZsq6IRYlj6ejsU%2BH7x5c5QYOqZgsQjLyOybI3la%2BH6sJ2ewarFX4%2F&X-Amz-Signature=91634b15bfd1827d07f576d3bc999ade89727d335f902703e5dc64ce0627f559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
