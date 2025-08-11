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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNANT5P%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDajeNbpKzXZo0I6NBeKi%2BBANvrUp%2BMGvzEa5q8Prr1QIhAIjF88Yp6536as1zVOSpYK8DSlsHJ7E0%2F2RsUPUB0%2Bv6KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP0iw2nOlMj57WA2wq3AMTvFJX54LaDPBV6tbYkHh28OJYhaVikJv6SmgUrtYVSnhQt7ssKDEsO0GWl%2BL4xyB1sNV1IKV6wCXO0Z%2BBaSwbKgnTxzM54uQLAvgCj2IEc8UYohx2II%2FnjbahRf4fx47%2BSl4YUVIQZnG1oj4TkUvxQYF%2BSOv6TT0hC5IvAduJY%2B3FuqA6ptYFL5t0FnL4YbqsUz7fDtXL2Lq5Km87fZItb5om2Ehi8RUOJxfgfsR0pmmkmXdbkyuzBzd0FBUXBgVjLQucvTu9i3rrfo1%2FYfvTa0hWmKNvrk9sBsSTsdsEC%2F%2Fgx%2BEDHUNXqNqKlKmPorLlC2JNi1zhfeSyZIjPs1zWrnMmZ%2BzjQhj3HlHt8tXEDv%2FfMx9gd5Pp7oTrVAgASViz%2BBpua7HKTG6vdtwA%2Fp5LKdpLB%2FyYMfWyb81KfVCsi35SLI3J1Lfkf4WxzaIjZm8AW1Az7riDrv0%2BVIlhqp9EYNogSsiouQC8NLCwz7RPKotXpM932Lg1Tl234ytLTEYsLnxFqv22XodIt2xlmEF6vfuWEjpBRTM4W3lAEP97dWoNk4prz61HMvnb6UQc5Fx8Iim21uf2s%2Fnx0jOMMYj%2FQq4X8cGNGC5mGo2IkAX0SgijDVcPNozFCSZq6zC0q%2BbEBjqkAVi9BacWkOfJ47PW4Ytoc7W%2Fs9HtEKmT0z25UF6n5RYfz1V4Ku4Ky5KGA63LuyDbvGyjAdEVw8FvZJkkMVA5Qn0cqSaVLiNWsNNFXY%2Fx%2BRJ6puh5qpQuVjxwZcaCkuRMxPXezV09bAz0NNPo1yFbSN91pTzq6CMcgfHOtSNb8Vf45po3qp9PevrS3r9fXl2FC1cjpRvNf9vbRDR6QBxuSZEvsoyl&X-Amz-Signature=14280080d4738c08f0ff4434c7ab35963ca88c2cd220531c4e3f43ed627ce467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNANT5P%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDajeNbpKzXZo0I6NBeKi%2BBANvrUp%2BMGvzEa5q8Prr1QIhAIjF88Yp6536as1zVOSpYK8DSlsHJ7E0%2F2RsUPUB0%2Bv6KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP0iw2nOlMj57WA2wq3AMTvFJX54LaDPBV6tbYkHh28OJYhaVikJv6SmgUrtYVSnhQt7ssKDEsO0GWl%2BL4xyB1sNV1IKV6wCXO0Z%2BBaSwbKgnTxzM54uQLAvgCj2IEc8UYohx2II%2FnjbahRf4fx47%2BSl4YUVIQZnG1oj4TkUvxQYF%2BSOv6TT0hC5IvAduJY%2B3FuqA6ptYFL5t0FnL4YbqsUz7fDtXL2Lq5Km87fZItb5om2Ehi8RUOJxfgfsR0pmmkmXdbkyuzBzd0FBUXBgVjLQucvTu9i3rrfo1%2FYfvTa0hWmKNvrk9sBsSTsdsEC%2F%2Fgx%2BEDHUNXqNqKlKmPorLlC2JNi1zhfeSyZIjPs1zWrnMmZ%2BzjQhj3HlHt8tXEDv%2FfMx9gd5Pp7oTrVAgASViz%2BBpua7HKTG6vdtwA%2Fp5LKdpLB%2FyYMfWyb81KfVCsi35SLI3J1Lfkf4WxzaIjZm8AW1Az7riDrv0%2BVIlhqp9EYNogSsiouQC8NLCwz7RPKotXpM932Lg1Tl234ytLTEYsLnxFqv22XodIt2xlmEF6vfuWEjpBRTM4W3lAEP97dWoNk4prz61HMvnb6UQc5Fx8Iim21uf2s%2Fnx0jOMMYj%2FQq4X8cGNGC5mGo2IkAX0SgijDVcPNozFCSZq6zC0q%2BbEBjqkAVi9BacWkOfJ47PW4Ytoc7W%2Fs9HtEKmT0z25UF6n5RYfz1V4Ku4Ky5KGA63LuyDbvGyjAdEVw8FvZJkkMVA5Qn0cqSaVLiNWsNNFXY%2Fx%2BRJ6puh5qpQuVjxwZcaCkuRMxPXezV09bAz0NNPo1yFbSN91pTzq6CMcgfHOtSNb8Vf45po3qp9PevrS3r9fXl2FC1cjpRvNf9vbRDR6QBxuSZEvsoyl&X-Amz-Signature=044b603a36b6233cf32a4504a5d28a1f01611374eb2420c45f3f485f88479914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
