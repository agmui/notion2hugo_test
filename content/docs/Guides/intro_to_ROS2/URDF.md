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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUZM6IJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCsFZe0a%2FSd%2FT4Z8DHZDWGnYBeyqtfNQb03E8QZpgtvegIgPn8QEZyLpipICmd6k%2FW2mDRcFqAQOkleMlP27thBTW4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYYI4VpLkVrR6oTzSrcAy%2FAxRNXicFq3BK57rolnwBw6LA67obTil1%2B0HYTp6JZxmVn68RvGMTKcsjAunFFAk%2F7wDADKAVr8YhPXC5bHG56exRvMSLNof7xY%2B0gNSA9j17oktxZYqoGNpKzcspQeONWJkjmhkFV4epNTmvcU66QPz29w02Lfi5aegzdHYaVV4m8bmVrhBU8ujYyiGw7bfsM%2BlOzbRgARUyBEfBVxw1E4U%2Blsin5MyQWKsfT%2FbGobAwbGRyTvpEJBTf0I8KNIagF2IraKEAsCL%2F9x17IoJmaty6KH%2Bz6imNHwj%2BD2k0jDKm%2F7T1btogv6rJpUhtO5K8E2hlyN9SEPWwxOSEYPF%2FYrD6SV78SRxACGDqImXZoCHXt%2FgCYJEjEKwwHexbXFBvzD7RViqIxmIFi8yWrvehrqnH2VdecpBMEkQ3PeGi%2FljJDxrctKmh7zj82BFrl3n8vPLq7K4HT6MIJ9oS2stPsQDkwlcR10o91zSRBw1gyn06OOfFGGdJIdj058fiS%2BFGVhDTBFVx3dYyv3rjCUIjyko5Xwkr%2F1rprrL9x%2BDYnmOuNv6rSx5C41OyT4IgeqnC3zioPLNkCj4yHWwsIsU17HBh8ewJD8e8E1O%2FW6vxQvzBDmlM6gBbFgnvsMMLz178GOqUB7Q40qZScGSkaRpK6hYV7e7YXniwHGG5qQT8FQCaB%2Bdg0zKF0U7Gimxx1EaW8Qo5%2BjFs8epmjhCImVs5bQRjFte8PxsAEQsEL8uv%2BmH8GUL%2BZ7%2F5bRLqYJz%2Bp04pZSKh8YwwljXqs%2BcnwMOMo2bdXbmFEv272LiOs38A9yJ076rxN4lI%2BbJchZHqyRuZOGq%2FuX2y68nJy%2FWzdaIovTqlcHl3QSOcN&X-Amz-Signature=45d62cb7987a215ad8a4222a717d1a809d9162b2495dc5cc980e7c803fb1c2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUZM6IJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCsFZe0a%2FSd%2FT4Z8DHZDWGnYBeyqtfNQb03E8QZpgtvegIgPn8QEZyLpipICmd6k%2FW2mDRcFqAQOkleMlP27thBTW4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYYI4VpLkVrR6oTzSrcAy%2FAxRNXicFq3BK57rolnwBw6LA67obTil1%2B0HYTp6JZxmVn68RvGMTKcsjAunFFAk%2F7wDADKAVr8YhPXC5bHG56exRvMSLNof7xY%2B0gNSA9j17oktxZYqoGNpKzcspQeONWJkjmhkFV4epNTmvcU66QPz29w02Lfi5aegzdHYaVV4m8bmVrhBU8ujYyiGw7bfsM%2BlOzbRgARUyBEfBVxw1E4U%2Blsin5MyQWKsfT%2FbGobAwbGRyTvpEJBTf0I8KNIagF2IraKEAsCL%2F9x17IoJmaty6KH%2Bz6imNHwj%2BD2k0jDKm%2F7T1btogv6rJpUhtO5K8E2hlyN9SEPWwxOSEYPF%2FYrD6SV78SRxACGDqImXZoCHXt%2FgCYJEjEKwwHexbXFBvzD7RViqIxmIFi8yWrvehrqnH2VdecpBMEkQ3PeGi%2FljJDxrctKmh7zj82BFrl3n8vPLq7K4HT6MIJ9oS2stPsQDkwlcR10o91zSRBw1gyn06OOfFGGdJIdj058fiS%2BFGVhDTBFVx3dYyv3rjCUIjyko5Xwkr%2F1rprrL9x%2BDYnmOuNv6rSx5C41OyT4IgeqnC3zioPLNkCj4yHWwsIsU17HBh8ewJD8e8E1O%2FW6vxQvzBDmlM6gBbFgnvsMMLz178GOqUB7Q40qZScGSkaRpK6hYV7e7YXniwHGG5qQT8FQCaB%2Bdg0zKF0U7Gimxx1EaW8Qo5%2BjFs8epmjhCImVs5bQRjFte8PxsAEQsEL8uv%2BmH8GUL%2BZ7%2F5bRLqYJz%2Bp04pZSKh8YwwljXqs%2BcnwMOMo2bdXbmFEv272LiOs38A9yJ076rxN4lI%2BbJchZHqyRuZOGq%2FuX2y68nJy%2FWzdaIovTqlcHl3QSOcN&X-Amz-Signature=6d02c9d4c12fc6a7bf5ece9f179476c09dddc7d7ef64515e09b92a4011cce524&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
