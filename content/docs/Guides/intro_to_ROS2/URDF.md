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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGJ5HJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuL%2BvsIJCSn8p%2BQZq22JFTM1robrbd8dOsvbRo%2BMzl3wIhAOpzGn%2FlhyKb6%2Fn4GYEOVddgquv4oUyzM0rUGmBzHvV3Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzoCKJRzoT30gTfogQq3APrZK%2BFPA8Hy%2FgHf%2BjiWYi1pDNxvAHxWVjmg7Ml8J9EKxSxCTml%2F9%2BXOaOu5K2aopgN9%2B%2Fzuk7%2F05IxrqLfqtGErZjORz5hcmNb2WorbyICxXjX7Y0iDFH9XNjRtZfpAFbEiaJQJKT0rMNdViT57yJFzBaW0IRtOau%2BMr12u3sZwF0mFGjyNFlDrCL8eyNA5egt1PozWnbkl1F%2F2V1sG1fgDVcz%2B3zAzW%2BTv5YgJkKlMFytNPeMbwNZ%2BoZsxFoZEPsJtDNfv3RTzYshvoRt8cFVk6CRm%2FvbxO83DWMdnfnOf6KXvV1sl2trAtbkl%2BYNuX2qJRVRd6GNLs05upJvulvAn79n9Xb92jnUyYIQACqzh2OpNjDn4HYvpMDu0jIC4gzp2i3d%2BAsXXdqbqwBEt35JV7xSlsoiTKzWt8ZvYvhImdLkP3r31wtjTaQ2CxzFJluOXofsCHkj7QNyhiARskeeakCKjjiwj3UbZ3KBs9AhobgrG9Db%2B32p7AiWqzDHeqZGz0tro3DZdTN54U7rhiGGW8NIbLqfximk%2F1OAARQx14xPVMT%2BY95odt0e36J1hr35bMjQ4yRJNYmr8Lh0LtKinSCn6b56It%2FtUPIo8bK1o5ucJsjjvQeMWukF4DD43%2FHABjqkASm%2BRi0Pgk3sZ2bnPauWVYAa0oBamMo%2FF5wq3oQz0ZJA6rkRdC3mqgHOGgyoKWVIkq%2BKXUcFB3v57R8wI5b93%2BUsrUuPdFbvZjsn8eI0Zahv8oXTsOmYpq53esDzxHilDIsuOXPvD%2BZd1i9e8bT%2B5QACJp8ojqOaC9fVMda6HPBXWOWss8XVwC1qaNCFVYjl4xu2GYv%2F9EywTu0BFL517n4lNqJv&X-Amz-Signature=33db638f3b05b905b6ecde6003049e779d40e16fe612f9e5702d9fdfa9abf082&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGJ5HJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuL%2BvsIJCSn8p%2BQZq22JFTM1robrbd8dOsvbRo%2BMzl3wIhAOpzGn%2FlhyKb6%2Fn4GYEOVddgquv4oUyzM0rUGmBzHvV3Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzoCKJRzoT30gTfogQq3APrZK%2BFPA8Hy%2FgHf%2BjiWYi1pDNxvAHxWVjmg7Ml8J9EKxSxCTml%2F9%2BXOaOu5K2aopgN9%2B%2Fzuk7%2F05IxrqLfqtGErZjORz5hcmNb2WorbyICxXjX7Y0iDFH9XNjRtZfpAFbEiaJQJKT0rMNdViT57yJFzBaW0IRtOau%2BMr12u3sZwF0mFGjyNFlDrCL8eyNA5egt1PozWnbkl1F%2F2V1sG1fgDVcz%2B3zAzW%2BTv5YgJkKlMFytNPeMbwNZ%2BoZsxFoZEPsJtDNfv3RTzYshvoRt8cFVk6CRm%2FvbxO83DWMdnfnOf6KXvV1sl2trAtbkl%2BYNuX2qJRVRd6GNLs05upJvulvAn79n9Xb92jnUyYIQACqzh2OpNjDn4HYvpMDu0jIC4gzp2i3d%2BAsXXdqbqwBEt35JV7xSlsoiTKzWt8ZvYvhImdLkP3r31wtjTaQ2CxzFJluOXofsCHkj7QNyhiARskeeakCKjjiwj3UbZ3KBs9AhobgrG9Db%2B32p7AiWqzDHeqZGz0tro3DZdTN54U7rhiGGW8NIbLqfximk%2F1OAARQx14xPVMT%2BY95odt0e36J1hr35bMjQ4yRJNYmr8Lh0LtKinSCn6b56It%2FtUPIo8bK1o5ucJsjjvQeMWukF4DD43%2FHABjqkASm%2BRi0Pgk3sZ2bnPauWVYAa0oBamMo%2FF5wq3oQz0ZJA6rkRdC3mqgHOGgyoKWVIkq%2BKXUcFB3v57R8wI5b93%2BUsrUuPdFbvZjsn8eI0Zahv8oXTsOmYpq53esDzxHilDIsuOXPvD%2BZd1i9e8bT%2B5QACJp8ojqOaC9fVMda6HPBXWOWss8XVwC1qaNCFVYjl4xu2GYv%2F9EywTu0BFL517n4lNqJv&X-Amz-Signature=8b93228291a1136cde5435a5419d3a541d54c3c7960b8ead6effc358ce3ca34f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
