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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZ4YLTC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz9Gto2Imru1yQ7jzAT%2FGm4CsnIe0wPzQTygIgrQl7MAiB2CX2M56MZo2bDqgpVzrcYP%2FHGRFPj8Iu7Yn%2F5cL7AHyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9bcs2f%2Fv4xMo6%2BbKtwDCpOeZ5FRA2wReKTGNc7dYaxYOn54IrlRlTH%2BRHyl0YfHQyumLX5dtHxTnb%2BDyEQ61Gd9mOLbljO7I%2BB18RnJwWOWILntU4fq4vwS2qfUdq%2FdcXWYMxmxxlEsp8nYKUKoSWBA5nDCddNBZwfdTyV9Et4G8s4%2BF1DdN5IOHeB%2FMRVN4HjEjldiEUKULBKAh2m2OmdNyI8RmPBVCKFCRCT0d6zaUu2VUbUPZU5MiYRYzxWiRrRR%2BXkGHUAOJt7ibOTrghrU%2BX3VQ0K7RFRLmEjygLTexh790pefmmLM6%2Bkd0V9utXUbYHVae5MOOKolDRSlo0J4xrZy5IvWsto8j1WowCMqxXPUDAXDOQtBpc2NccQaQ8mx4ucSEmL%2B725OSqbK0t5yFefU62k8YY7d0K%2FJ4EPgAfij0%2FbdSLpCMnUs8eFO8G%2BOYDZJYs4zv8m9LIEFEy6J%2B8VFB8OxlZ9yqiWLwGUbaSCw%2BRwwgdp7yR8sWf2wdqRfBbVp9BbQDnfrfSjp11i%2FMiLOIgmgPqMwyGd9wiLjyJPu2uUzYhaq9JOAW65uv0JDKLHs5dQvOPk%2FM57k%2Bv%2BM0XnbNlFdQ1KBPQaUUMU6R%2BCD7fN1NvZQdYYAcsEKNIaV0dp0NhpKfyAwidmUvgY6pgFoHlngwN%2F0%2FBXPQnxCYQJzryRkW1UichGzBU4FYPeu2WxPdmxYenf0gNTX3gjdPM6IUWFAuw9TRCNKLXCL12EH2GZILdGTErHlycyQpZ20%2FHsNCyo8zkvIsfYRNGkPiq0MWU2hvoyLz1CXbRdu%2BJGHu%2FC%2FYn2CPPjG1mP%2FIayt02SK9wgXr8P4reSm2ppRXyhitWNgIGDaj0KojUeCWMNnzh0Vujo4&X-Amz-Signature=397d91c2b1acb0b0f6d4966489dc77803b6c90560958aff9dbf974835fbcdf93&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZ4YLTC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz9Gto2Imru1yQ7jzAT%2FGm4CsnIe0wPzQTygIgrQl7MAiB2CX2M56MZo2bDqgpVzrcYP%2FHGRFPj8Iu7Yn%2F5cL7AHyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9bcs2f%2Fv4xMo6%2BbKtwDCpOeZ5FRA2wReKTGNc7dYaxYOn54IrlRlTH%2BRHyl0YfHQyumLX5dtHxTnb%2BDyEQ61Gd9mOLbljO7I%2BB18RnJwWOWILntU4fq4vwS2qfUdq%2FdcXWYMxmxxlEsp8nYKUKoSWBA5nDCddNBZwfdTyV9Et4G8s4%2BF1DdN5IOHeB%2FMRVN4HjEjldiEUKULBKAh2m2OmdNyI8RmPBVCKFCRCT0d6zaUu2VUbUPZU5MiYRYzxWiRrRR%2BXkGHUAOJt7ibOTrghrU%2BX3VQ0K7RFRLmEjygLTexh790pefmmLM6%2Bkd0V9utXUbYHVae5MOOKolDRSlo0J4xrZy5IvWsto8j1WowCMqxXPUDAXDOQtBpc2NccQaQ8mx4ucSEmL%2B725OSqbK0t5yFefU62k8YY7d0K%2FJ4EPgAfij0%2FbdSLpCMnUs8eFO8G%2BOYDZJYs4zv8m9LIEFEy6J%2B8VFB8OxlZ9yqiWLwGUbaSCw%2BRwwgdp7yR8sWf2wdqRfBbVp9BbQDnfrfSjp11i%2FMiLOIgmgPqMwyGd9wiLjyJPu2uUzYhaq9JOAW65uv0JDKLHs5dQvOPk%2FM57k%2Bv%2BM0XnbNlFdQ1KBPQaUUMU6R%2BCD7fN1NvZQdYYAcsEKNIaV0dp0NhpKfyAwidmUvgY6pgFoHlngwN%2F0%2FBXPQnxCYQJzryRkW1UichGzBU4FYPeu2WxPdmxYenf0gNTX3gjdPM6IUWFAuw9TRCNKLXCL12EH2GZILdGTErHlycyQpZ20%2FHsNCyo8zkvIsfYRNGkPiq0MWU2hvoyLz1CXbRdu%2BJGHu%2FC%2FYn2CPPjG1mP%2FIayt02SK9wgXr8P4reSm2ppRXyhitWNgIGDaj0KojUeCWMNnzh0Vujo4&X-Amz-Signature=d6de3ea3e23e5ec873dfda324243a02ed2029c6c4c9f65d4898da9fac4d0e9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
