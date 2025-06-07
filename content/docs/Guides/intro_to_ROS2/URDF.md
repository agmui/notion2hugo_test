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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBV452K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIKHWM8KB22GQADGNA7I8CnGBlf0rvmpxk4%2FJqZ%2BoSQIhAP3WLntapkhJS%2F2S9MYPDDDaPyBMU%2F3iZWNI9QMdxEzKKv8DCGsQABoMNjM3NDIzMTgzODA1IgxCTwUY%2FzHYMn9ZfYsq3AOnOR9IUcy8b0NHTNmx2ZZqZrZJ66nYbDDLkmHf4JYWwzvAS5jKUlAnlBi7ZeUDO6BS8yfYWm2o9wk0DGuziICOPNIocq9nO4%2B1gWf06L8MsDPu7XdpL5PVM4EGifB%2BaKYPWCg7AV9VIQFHheFN3zq72k49AdyHj3KlFMtFsSbBkshxhCC4qXeOFhnCmfEzZNiR%2FnPMj8ZkMo1aQxldmFWiOFZRbFhUWNKVEvma9CmwXQfsQwnIwXvo0OGULzvyFD22FKr3lJzGpPC3q99uMDGxNIzdX3jXREuIRhpc647rP2ults7iRwj2LwATZva%2FxnZJMUxUceJ4yfhVRNrjTtKuR4Ww6L%2FYFFtWgzzLgd85%2BOxhKB7q7dAFQz%2FwxdSy%2BnoooGyf%2FJl7XNOhU6Fl6c%2FyLFKQenOWx4h9BkVz1ERP%2FY0Ua5XUMAAqtaX0HMWsxwgk7cCnV8%2BB4vfmNWnAnQClFLNsQsZBnZKVEDlW6I4aHn0Lrz6jDYaqfDCe6uhEq16ZbsW26bV%2FlFLfv24u1%2FwOfZepF6XE1kzmlououtiY4yI0AvOpkT2e21JcFYZ4AW2o9XoA8xNh1%2BdInw0z0PT1Am1GKlzclJvOIIMdg%2Fq%2Fr2hVQMzW0lCErgtygjC8wo7CBjqkASE9NiqKMuQ8tDDaPNjKG3OSDsfpJ1vLb2APqt6TSaSiTn0idjvM1tibd8Le%2FDUzKQYWX48dfYVerg8b48kMPLdxtA7Ih8mLmqV7ztYKVpVmkYg6VI9%2FekaYy%2BZrRDKJrJD7b6unzRhlnnYIoN6AHMq6gCBuY%2FKuGRPbQgBFfeZ9eTpGgAGKg%2BSaGNH3LXLFLv80ZcAtAn%2FAhEDdXeX0AoI9Hf4%2B&X-Amz-Signature=06c7a55f21b2dca09ab76478b25fdf5d1c4119a73820f2553639f4c820c92894&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBV452K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIKHWM8KB22GQADGNA7I8CnGBlf0rvmpxk4%2FJqZ%2BoSQIhAP3WLntapkhJS%2F2S9MYPDDDaPyBMU%2F3iZWNI9QMdxEzKKv8DCGsQABoMNjM3NDIzMTgzODA1IgxCTwUY%2FzHYMn9ZfYsq3AOnOR9IUcy8b0NHTNmx2ZZqZrZJ66nYbDDLkmHf4JYWwzvAS5jKUlAnlBi7ZeUDO6BS8yfYWm2o9wk0DGuziICOPNIocq9nO4%2B1gWf06L8MsDPu7XdpL5PVM4EGifB%2BaKYPWCg7AV9VIQFHheFN3zq72k49AdyHj3KlFMtFsSbBkshxhCC4qXeOFhnCmfEzZNiR%2FnPMj8ZkMo1aQxldmFWiOFZRbFhUWNKVEvma9CmwXQfsQwnIwXvo0OGULzvyFD22FKr3lJzGpPC3q99uMDGxNIzdX3jXREuIRhpc647rP2ults7iRwj2LwATZva%2FxnZJMUxUceJ4yfhVRNrjTtKuR4Ww6L%2FYFFtWgzzLgd85%2BOxhKB7q7dAFQz%2FwxdSy%2BnoooGyf%2FJl7XNOhU6Fl6c%2FyLFKQenOWx4h9BkVz1ERP%2FY0Ua5XUMAAqtaX0HMWsxwgk7cCnV8%2BB4vfmNWnAnQClFLNsQsZBnZKVEDlW6I4aHn0Lrz6jDYaqfDCe6uhEq16ZbsW26bV%2FlFLfv24u1%2FwOfZepF6XE1kzmlououtiY4yI0AvOpkT2e21JcFYZ4AW2o9XoA8xNh1%2BdInw0z0PT1Am1GKlzclJvOIIMdg%2Fq%2Fr2hVQMzW0lCErgtygjC8wo7CBjqkASE9NiqKMuQ8tDDaPNjKG3OSDsfpJ1vLb2APqt6TSaSiTn0idjvM1tibd8Le%2FDUzKQYWX48dfYVerg8b48kMPLdxtA7Ih8mLmqV7ztYKVpVmkYg6VI9%2FekaYy%2BZrRDKJrJD7b6unzRhlnnYIoN6AHMq6gCBuY%2FKuGRPbQgBFfeZ9eTpGgAGKg%2BSaGNH3LXLFLv80ZcAtAn%2FAhEDdXeX0AoI9Hf4%2B&X-Amz-Signature=a10a99755d6f8ea61f9ec70660e17ac2217dcf64522ab2cb7c1b00ecbbe391bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
