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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMXYBMH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDQ3uT3pfozluvJV%2F59AgXgN0slrtIwsSb8RIf4uyq8tgIhANn81EMxNVEWd6YXQAb7fOwF%2BIF0%2BsPn%2BT%2BUoCrEvEfEKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5P0uFf3H%2BM7xfLgMq3ANdVvfuY%2FoW8kpTTllAIsjaiyffi8IxRI8Yq5ieOj27ErvVVkVCpYfx4ofS0MXy4Nvvs3hrXERvnh7qZxUptNQhBE9hHIeHDTDanvOWsch1%2F%2BUALUgbCZpwrWYFsUZxHw2U8Ofrhcpktc78eTbBXvCFuceDlCoXeaJ0bIya0s4OVkLM06ksayLvtG%2F1UBeYzIS3hAvYX6ClTP5eqc%2BF9pg3HjUGW3cP%2B3rD%2FZFzssR0dmwm0%2FqX2%2B7FgrAc3EifgSuyi9Na3z6EEXLOpJBTAAZKd5o%2FA2deJ8Wdm9%2FusXPEH7ssq33SaTO6ReRhuhM%2FT8QBClch0ts5a9chHPmXiQtic4WFdUp5I5A3DLJuPQsE6YwG5cQ4iNmlFsv0YWGu%2FuZBiRz%2FPBPhXIZGiwtdb75g2hKUQfvQVS5SQSl5dyJm5xzVzXm2EH3enOTbMRaA3XVgDGKdfWjQAbLbb2Svwl97GzPP5vL0iKQkYQYFVhOTS8jhG1Zg9RNzMlsg9lepYCWvtcbaLhnrVv5skEC9uw1oALAlHgy4g6AzuaLBYet2VdHXgvbUpa%2FUPTG7PAwdNHN1A9h14IwaZnL%2B6AaHn2JFgs7OJoW8c2EjmfR5cgPrnOEF%2B%2B851EwbzykSFzCw87a%2FBjqkATuadlmrdrvQQAyiED81qNad4MhfkU6Mq211GAdQeKmhNX62RPNzGMr2840xvSzHvlWNN5fvUjxaQes2go5p1dBbGe1vDIFdyG9ul2jdNzW93S2LFmXxut5tnKJll7Aby%2FJxg8a5x9KQgjqwIzZ8p1JI28GR4txla83Dk%2FZuNJEeNmm7%2BOnHa2pmpi5%2Fu9n1GM7U%2BHF0J%2BtGTd5CFoCzAOCFMOPF&X-Amz-Signature=9562fd0d6a1cbc27d35cbc1bdf5bc01b0bd0b81837190fd45641633617d378a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMXYBMH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDQ3uT3pfozluvJV%2F59AgXgN0slrtIwsSb8RIf4uyq8tgIhANn81EMxNVEWd6YXQAb7fOwF%2BIF0%2BsPn%2BT%2BUoCrEvEfEKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5P0uFf3H%2BM7xfLgMq3ANdVvfuY%2FoW8kpTTllAIsjaiyffi8IxRI8Yq5ieOj27ErvVVkVCpYfx4ofS0MXy4Nvvs3hrXERvnh7qZxUptNQhBE9hHIeHDTDanvOWsch1%2F%2BUALUgbCZpwrWYFsUZxHw2U8Ofrhcpktc78eTbBXvCFuceDlCoXeaJ0bIya0s4OVkLM06ksayLvtG%2F1UBeYzIS3hAvYX6ClTP5eqc%2BF9pg3HjUGW3cP%2B3rD%2FZFzssR0dmwm0%2FqX2%2B7FgrAc3EifgSuyi9Na3z6EEXLOpJBTAAZKd5o%2FA2deJ8Wdm9%2FusXPEH7ssq33SaTO6ReRhuhM%2FT8QBClch0ts5a9chHPmXiQtic4WFdUp5I5A3DLJuPQsE6YwG5cQ4iNmlFsv0YWGu%2FuZBiRz%2FPBPhXIZGiwtdb75g2hKUQfvQVS5SQSl5dyJm5xzVzXm2EH3enOTbMRaA3XVgDGKdfWjQAbLbb2Svwl97GzPP5vL0iKQkYQYFVhOTS8jhG1Zg9RNzMlsg9lepYCWvtcbaLhnrVv5skEC9uw1oALAlHgy4g6AzuaLBYet2VdHXgvbUpa%2FUPTG7PAwdNHN1A9h14IwaZnL%2B6AaHn2JFgs7OJoW8c2EjmfR5cgPrnOEF%2B%2B851EwbzykSFzCw87a%2FBjqkATuadlmrdrvQQAyiED81qNad4MhfkU6Mq211GAdQeKmhNX62RPNzGMr2840xvSzHvlWNN5fvUjxaQes2go5p1dBbGe1vDIFdyG9ul2jdNzW93S2LFmXxut5tnKJll7Aby%2FJxg8a5x9KQgjqwIzZ8p1JI28GR4txla83Dk%2FZuNJEeNmm7%2BOnHa2pmpi5%2Fu9n1GM7U%2BHF0J%2BtGTd5CFoCzAOCFMOPF&X-Amz-Signature=5f20b77634e87425b0cfb374e776b3fca889e1f49516e739146e7a1cecc9aa13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
