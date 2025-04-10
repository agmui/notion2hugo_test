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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAPMENK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDiseTI2x0DDrTOEmNzBXD%2BIIFIt%2FhwGxkwJZvW8PHRoAIhANYI4aAFlhJUd4VqaTke%2BlJpvn%2BXknas1OkAHsxLqSQpKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGwdlfhuGZZ4fFdDkq3ANHVM4%2BsY6NmTJA4ORp1shLlyWNYGLZJA4jSQvAKuQv7fkwzcvup5oQXFd2ymincjF3L0X7FzTQ8d4fzJ4rbkxuCb9YC5WYM109ZOzNmkloe9hmAVhFPG1iwat4DfGCDwUoaLJ4VzxK1vw5OiH13Euu%2FDhlbuvOtwKNTsFx8GUjZVF6rJXzrw0dhcaDfpbIgfIADTerQa%2F2hNpKHCWURJ3tYTlIBzQsijvIuvHbAitF%2BoD%2FGcOyLTlOiU82i2MD6JskumqBfbJ7tozqI5oIb5GyCjJRlixJ5aRG%2B7rEu2mSzh7xMIzqaQGtbbAW%2FInq1yydUhk4qXsGhUTpUjMwwEAPae0iw%2FlrPSc3wB%2FIKeWiqHRDZry0nbJG6KW3yalaSGq9r%2BUXqhp96vM5%2FRadnjGhrGFKIg0avcg3E0r83x3d3HsDR%2BEe%2BPTHrb2SJOsWBiXXLJJkMrKM%2FlF3v4l5B%2BL6SHH9aYMOZcAiOFO7poKVecjDZmEZdcRH9iwwSNuDg8LENs4BSHuc%2FPNAWAMDpbkrf5057Ix66zQNax9OdXUONkz4X%2BCJql7ZeFF8DHXP7lFKLjjGFnhHs%2BXsTMQ%2Bki8BBmZ3Na7aHpvk8j7wxDwX8058hJFDnR2TRieeTTC27t%2B%2FBjqkAZpXoKgBMPQGYZ6DSsQMgCrvxC3FrbCk4DYU2Gi3SAwDizKTGk6peZx%2FL1jL%2BwcRB5sl2wafDq44ZrzTG0aevH0PYReTAuu7FhipPOgm6n0Y%2F0SFnZkdSFgVCu2Syl2NhP%2FbkZXxiJqPld0KEk5BpM2%2Fcj9tEaJDmZqzLuw1l6fim8HunxHvk59plQL%2Fcbl3DYeRTtNSx9TCvYtTBlQEq3ByMEoB&X-Amz-Signature=8782a685ecee0c9546458d8aff2236755029c4f6f124405744ab97af1690472e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAPMENK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDiseTI2x0DDrTOEmNzBXD%2BIIFIt%2FhwGxkwJZvW8PHRoAIhANYI4aAFlhJUd4VqaTke%2BlJpvn%2BXknas1OkAHsxLqSQpKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGwdlfhuGZZ4fFdDkq3ANHVM4%2BsY6NmTJA4ORp1shLlyWNYGLZJA4jSQvAKuQv7fkwzcvup5oQXFd2ymincjF3L0X7FzTQ8d4fzJ4rbkxuCb9YC5WYM109ZOzNmkloe9hmAVhFPG1iwat4DfGCDwUoaLJ4VzxK1vw5OiH13Euu%2FDhlbuvOtwKNTsFx8GUjZVF6rJXzrw0dhcaDfpbIgfIADTerQa%2F2hNpKHCWURJ3tYTlIBzQsijvIuvHbAitF%2BoD%2FGcOyLTlOiU82i2MD6JskumqBfbJ7tozqI5oIb5GyCjJRlixJ5aRG%2B7rEu2mSzh7xMIzqaQGtbbAW%2FInq1yydUhk4qXsGhUTpUjMwwEAPae0iw%2FlrPSc3wB%2FIKeWiqHRDZry0nbJG6KW3yalaSGq9r%2BUXqhp96vM5%2FRadnjGhrGFKIg0avcg3E0r83x3d3HsDR%2BEe%2BPTHrb2SJOsWBiXXLJJkMrKM%2FlF3v4l5B%2BL6SHH9aYMOZcAiOFO7poKVecjDZmEZdcRH9iwwSNuDg8LENs4BSHuc%2FPNAWAMDpbkrf5057Ix66zQNax9OdXUONkz4X%2BCJql7ZeFF8DHXP7lFKLjjGFnhHs%2BXsTMQ%2Bki8BBmZ3Na7aHpvk8j7wxDwX8058hJFDnR2TRieeTTC27t%2B%2FBjqkAZpXoKgBMPQGYZ6DSsQMgCrvxC3FrbCk4DYU2Gi3SAwDizKTGk6peZx%2FL1jL%2BwcRB5sl2wafDq44ZrzTG0aevH0PYReTAuu7FhipPOgm6n0Y%2F0SFnZkdSFgVCu2Syl2NhP%2FbkZXxiJqPld0KEk5BpM2%2Fcj9tEaJDmZqzLuw1l6fim8HunxHvk59plQL%2Fcbl3DYeRTtNSx9TCvYtTBlQEq3ByMEoB&X-Amz-Signature=e9b7376b52d24b2c8bf45898cdecaffada14db229a9b01e94335e841452ad810&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
