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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRGHLTK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS6JkM8Nxq6LwPy1rIQt1SPdh%2F37gJdLnm7CltM8fXJgIhAJRszdGh0OyUrp1FD1o3rGOMIx94sVTmdOZ%2Bj7bxywo6KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzojRYqhaWoEHtbPTIq3AP5v75%2FjgrZw9X2GzmSx7062Y2KSF9x8VG7UgcymANEatj%2BQgvPF%2FIPAjYOnmdnYTinWV%2FY2oRMPfV2KvUO079CjESfGVGSGZ9FR4Kls32fpPvvdGa9dMdHD1gCdW0eEvHbDjNnctb78uJey9OXyYbTy48qeEjmpnDyEk%2FDVGTfcXiojfA2s2v2Dfw5fXaGO1ZpGK6K3cW7pYApaOFa7rOlI99IeAQQZI6gxHv0gbX19Yoin3p1VIgxtbUJysixKxty0cSlskampwsVWs979xiwcU4ewIN4YY2eeJxHGwWuVs7n6JKqyZx7UfNmCNZjE7SIZxOYb6UhVvQzJIKFuVyw2K8CKtsfBUaECAAw%2BHsGYxk1bzJ%2FZDRdQjEuSmsp%2F5WcozzQqhU8f5ScntvdAep9Ix3s%2B7gwdrZFqJCEdTrab0Y2axiHQOsz2QOAO9wmRazC1XFFUA2b%2FvxdgRPk2ILoafhzbg%2FuW%2FCbub8wWjfUJQI4JiwcE87I4sg1boGdh64r0u0QX8e%2FZY5k%2BUi1B8SxtJZq%2F%2BEDFKt1k%2FfDK5N1RzGlvTNO9mf9zsB%2BUDBAeusv5qXg9b8NBL2lQyrlw21lmLDD5Ts%2B2X4BSj9PQhYeiYln7Zm5gGi8fJUD1jC7jO28BjqkAWS%2Fbo08MmRao3iKzP%2F6zEnRzMrsWrEAbXmR6l3DduTs1n1J%2FoQJfaYBWNkV2I2WHeqFhZ7ukFdpG%2B4PL2iQmYh5hYSnJ6KKlTZi46A7SmjgKLVS2gPI%2FbK%2FzbxMPwGzd%2F4NmYIYwzxNRbICE3QZMgPK5dGJivu3GlQF5Pa%2BNVypeszCYwXO9hwxqjV5x6Zds0fZQEZ%2FZSKvWfiu92SwKFhIV%2Fzq&X-Amz-Signature=0c05ddff495dbae61672752c9fd8150653c7198e5896a2404bfe232f950bcd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRGHLTK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS6JkM8Nxq6LwPy1rIQt1SPdh%2F37gJdLnm7CltM8fXJgIhAJRszdGh0OyUrp1FD1o3rGOMIx94sVTmdOZ%2Bj7bxywo6KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzojRYqhaWoEHtbPTIq3AP5v75%2FjgrZw9X2GzmSx7062Y2KSF9x8VG7UgcymANEatj%2BQgvPF%2FIPAjYOnmdnYTinWV%2FY2oRMPfV2KvUO079CjESfGVGSGZ9FR4Kls32fpPvvdGa9dMdHD1gCdW0eEvHbDjNnctb78uJey9OXyYbTy48qeEjmpnDyEk%2FDVGTfcXiojfA2s2v2Dfw5fXaGO1ZpGK6K3cW7pYApaOFa7rOlI99IeAQQZI6gxHv0gbX19Yoin3p1VIgxtbUJysixKxty0cSlskampwsVWs979xiwcU4ewIN4YY2eeJxHGwWuVs7n6JKqyZx7UfNmCNZjE7SIZxOYb6UhVvQzJIKFuVyw2K8CKtsfBUaECAAw%2BHsGYxk1bzJ%2FZDRdQjEuSmsp%2F5WcozzQqhU8f5ScntvdAep9Ix3s%2B7gwdrZFqJCEdTrab0Y2axiHQOsz2QOAO9wmRazC1XFFUA2b%2FvxdgRPk2ILoafhzbg%2FuW%2FCbub8wWjfUJQI4JiwcE87I4sg1boGdh64r0u0QX8e%2FZY5k%2BUi1B8SxtJZq%2F%2BEDFKt1k%2FfDK5N1RzGlvTNO9mf9zsB%2BUDBAeusv5qXg9b8NBL2lQyrlw21lmLDD5Ts%2B2X4BSj9PQhYeiYln7Zm5gGi8fJUD1jC7jO28BjqkAWS%2Fbo08MmRao3iKzP%2F6zEnRzMrsWrEAbXmR6l3DduTs1n1J%2FoQJfaYBWNkV2I2WHeqFhZ7ukFdpG%2B4PL2iQmYh5hYSnJ6KKlTZi46A7SmjgKLVS2gPI%2FbK%2FzbxMPwGzd%2F4NmYIYwzxNRbICE3QZMgPK5dGJivu3GlQF5Pa%2BNVypeszCYwXO9hwxqjV5x6Zds0fZQEZ%2FZSKvWfiu92SwKFhIV%2Fzq&X-Amz-Signature=1ba14a079716927fb55fea6a84da819ad618614e4e1df4a582c932e68191bfff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
