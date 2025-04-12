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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONN4CRP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCef4vAKYz%2B8DhJ6oae07qXFiD2dCCYGnwzPV7oLhLudgIhAP8gPabSLAMn6YQsGCFlfow89IGP4W1nwIu%2Fkx4Vd%2BDzKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWx73hzqzKvCKPZcQq3AMa8JtzGu4MhSuCUJ3QAY3pDioyXIGKD0aCk0BY4lxLxybps08%2BetmDEEzo4W5HvtdqD3La1%2BUaSUJCQHg7ZGSY5uxH%2F9QtTTF%2FHwASmyHSdt1U7637ratwAN9okr6qjsKvL%2B%2FyeNnijCvcSgXb0oKNFAwESW8EPVbY9sG%2B4usysiuhhjk6pMw0WsHh2YvW3DFf5muL5LbaeqsxNsD8EEdfD9Bqbu5ahGPx9qG8%2B10ITrTDcQsPOnNb4YtIzBYtsyGUHpJceM%2BpGIOSfLFEMbpVjNeZ4cnvigvRvX8UEDnZ0Gm3WKKFnlfLl%2FyGYYEK8hrW3NA6Wva1yVJEt9eTW%2FQPM0hwWYORo%2FXmK9k8lOXu5PzXHyCCGViJYbrrA2VqYb911EcU%2BvRtXyL6mqo8KoU%2Fa%2FaMo8FOPQr9fxxPfkiU2oc8Vr9Z1sUns29ie%2BPWIco4Ue2b%2Bx%2FiYn75KJANpXGJkpdah4OXLOx006mkwKVamkpQcnI26e%2BPpKK0wNv6WTeULyyZy%2BNNbf%2BpGp%2BIv8XphqPKki8d5lFw6hpdxLJvigpvSQC2xob3qx1a9%2BmzM1GjMGgXkfWh%2BoaR2Nho6pm2jap75R4ixUteqGxScQmRg6%2FLwGKLdOnm420A0DCAjei%2FBjqkAavmE8ylJzCnqT4igOKA4GfF6k6zpYPvAU4W7UJPyUK3mMfliAEExbTdmx5xE7sqrB54VnIo%2FfmAeAVVe3sCgUJj7sd%2BAqmtgq1TWVfMVIKqWZVNhbxIROwLPXOFbpBkzfby4FJ4Tkx4IgFLMAfDZsGDrK2aXDm%2FgKL0%2FZdfJOBb78SJuMHu%2FWM7nHj1kzcSdD3gdfz%2F%2Fwg0fm6QCvSxwLfL7AVT&X-Amz-Signature=5d22fa36912cfc97068047aae1f675f25732d44fe6fe829f08feefcfc5eb00f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONN4CRP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCef4vAKYz%2B8DhJ6oae07qXFiD2dCCYGnwzPV7oLhLudgIhAP8gPabSLAMn6YQsGCFlfow89IGP4W1nwIu%2Fkx4Vd%2BDzKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWx73hzqzKvCKPZcQq3AMa8JtzGu4MhSuCUJ3QAY3pDioyXIGKD0aCk0BY4lxLxybps08%2BetmDEEzo4W5HvtdqD3La1%2BUaSUJCQHg7ZGSY5uxH%2F9QtTTF%2FHwASmyHSdt1U7637ratwAN9okr6qjsKvL%2B%2FyeNnijCvcSgXb0oKNFAwESW8EPVbY9sG%2B4usysiuhhjk6pMw0WsHh2YvW3DFf5muL5LbaeqsxNsD8EEdfD9Bqbu5ahGPx9qG8%2B10ITrTDcQsPOnNb4YtIzBYtsyGUHpJceM%2BpGIOSfLFEMbpVjNeZ4cnvigvRvX8UEDnZ0Gm3WKKFnlfLl%2FyGYYEK8hrW3NA6Wva1yVJEt9eTW%2FQPM0hwWYORo%2FXmK9k8lOXu5PzXHyCCGViJYbrrA2VqYb911EcU%2BvRtXyL6mqo8KoU%2Fa%2FaMo8FOPQr9fxxPfkiU2oc8Vr9Z1sUns29ie%2BPWIco4Ue2b%2Bx%2FiYn75KJANpXGJkpdah4OXLOx006mkwKVamkpQcnI26e%2BPpKK0wNv6WTeULyyZy%2BNNbf%2BpGp%2BIv8XphqPKki8d5lFw6hpdxLJvigpvSQC2xob3qx1a9%2BmzM1GjMGgXkfWh%2BoaR2Nho6pm2jap75R4ixUteqGxScQmRg6%2FLwGKLdOnm420A0DCAjei%2FBjqkAavmE8ylJzCnqT4igOKA4GfF6k6zpYPvAU4W7UJPyUK3mMfliAEExbTdmx5xE7sqrB54VnIo%2FfmAeAVVe3sCgUJj7sd%2BAqmtgq1TWVfMVIKqWZVNhbxIROwLPXOFbpBkzfby4FJ4Tkx4IgFLMAfDZsGDrK2aXDm%2FgKL0%2FZdfJOBb78SJuMHu%2FWM7nHj1kzcSdD3gdfz%2F%2Fwg0fm6QCvSxwLfL7AVT&X-Amz-Signature=ee96d6e51011f0f7a38015cb79a516dd0cbdb517b5f2e3e3bb1ceddc2e6e9626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
