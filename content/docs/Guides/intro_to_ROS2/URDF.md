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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJACHYN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ78FZxIcnoEA990eV7Yox%2FMDq6OrPxd7ht3OoJQCZjgIgVquj%2FuQkWSDOtChhhtNXvJ34tfXZ%2BIYXD3MXq8%2FChXEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC2sxMYE2br4TcsxircA6BpgEGWtg2E1j9cPL9Xgu0e%2B%2BRhAHJFnG%2F2UJ3KHH6Jn8SbyDvpXoqHEjtcNZF3fasldRoiBnRA4ABGW4737mo3TMZ0ArFLO9itpsDbTUCb%2BkM5fG04U7OTwQ82uEMiJeXuY%2B3OV7vp7bCsslVMxj%2FYMH2nXD5EKPgF8fGtlCvSALZHjQ0A5vuZZiIOD9vHz7IJK3IK3KJpXInCUF%2FMWSw7evieTSr4L2izCwQQNyfvFyKwUnwMIDF6%2FQwAEQgpyFQNT4ZsdNSKUlsf%2F18uSC5E%2BQzpVMHAvzP0JtcA%2BVTklOI7qA6oGiFOKyYPpmIjeb7ZCl5RzKtQ6aZMyUi2E%2B%2FclmCV%2FW01ppsJTY54KYP4ax8OCV3H6mU4qHeytN6ejevlT1UH%2BGcnb7sXOiMOFlRrPzJjRP%2FBnCSd6vJ4DZsTofM%2Fn1H3GEsP%2F5NWgIbOdvp8u5oGNHLgKhngcmr1iTJpo8E5zdUzjaw3N4k7ozPeig0d4j9%2BUf8qZvPVUa%2BmsFLSmyViKWgGaBdAscptUi1PDGjkJsQGQuHOkMnvxNV6yfuJhA6Z20U02SptCbfECPYs5%2BueCrvpfavYiHvdBaZIQPcvri5taEp2CEacUy949osETjJLDX3qHHhGMOuj1cIGOqUBMzt5%2FPU%2BbtNZjGQ3xudMPWOI5LOcLbAzKQ7hLxBj8jEyI37eiRUFiOXnEDK8kDzIxaniR8REGz9VxdTzruetxoHEnQ8i8QltdbFlbRQpa%2FBsxIXxIRi%2Fsgpiz35CRpJj1sske7DvO1gWPZULGLtoAsC5IyyepifhYwSKEP%2BcNjo9Ub4RNx8nTqQ1VgbAp9CX3rQEZ6wptDyN5tQysQ42ay7klgJA&X-Amz-Signature=0d72467432c087b068c64a50e2089f7d3183a3228ed74e93dd7bf825f230efc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJACHYN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ78FZxIcnoEA990eV7Yox%2FMDq6OrPxd7ht3OoJQCZjgIgVquj%2FuQkWSDOtChhhtNXvJ34tfXZ%2BIYXD3MXq8%2FChXEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC2sxMYE2br4TcsxircA6BpgEGWtg2E1j9cPL9Xgu0e%2B%2BRhAHJFnG%2F2UJ3KHH6Jn8SbyDvpXoqHEjtcNZF3fasldRoiBnRA4ABGW4737mo3TMZ0ArFLO9itpsDbTUCb%2BkM5fG04U7OTwQ82uEMiJeXuY%2B3OV7vp7bCsslVMxj%2FYMH2nXD5EKPgF8fGtlCvSALZHjQ0A5vuZZiIOD9vHz7IJK3IK3KJpXInCUF%2FMWSw7evieTSr4L2izCwQQNyfvFyKwUnwMIDF6%2FQwAEQgpyFQNT4ZsdNSKUlsf%2F18uSC5E%2BQzpVMHAvzP0JtcA%2BVTklOI7qA6oGiFOKyYPpmIjeb7ZCl5RzKtQ6aZMyUi2E%2B%2FclmCV%2FW01ppsJTY54KYP4ax8OCV3H6mU4qHeytN6ejevlT1UH%2BGcnb7sXOiMOFlRrPzJjRP%2FBnCSd6vJ4DZsTofM%2Fn1H3GEsP%2F5NWgIbOdvp8u5oGNHLgKhngcmr1iTJpo8E5zdUzjaw3N4k7ozPeig0d4j9%2BUf8qZvPVUa%2BmsFLSmyViKWgGaBdAscptUi1PDGjkJsQGQuHOkMnvxNV6yfuJhA6Z20U02SptCbfECPYs5%2BueCrvpfavYiHvdBaZIQPcvri5taEp2CEacUy949osETjJLDX3qHHhGMOuj1cIGOqUBMzt5%2FPU%2BbtNZjGQ3xudMPWOI5LOcLbAzKQ7hLxBj8jEyI37eiRUFiOXnEDK8kDzIxaniR8REGz9VxdTzruetxoHEnQ8i8QltdbFlbRQpa%2FBsxIXxIRi%2Fsgpiz35CRpJj1sske7DvO1gWPZULGLtoAsC5IyyepifhYwSKEP%2BcNjo9Ub4RNx8nTqQ1VgbAp9CX3rQEZ6wptDyN5tQysQ42ay7klgJA&X-Amz-Signature=e7bd48641c0d3cf5143cfbf9ebf85ea71f088592e77c1423ecfa9af1f5be63f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
