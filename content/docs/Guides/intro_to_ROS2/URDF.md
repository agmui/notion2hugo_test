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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGQVXYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmbDDoVow%2FAps61%2BeQmMrE6Au%2FJeoxyWvBWIW7jTzLAIhAKbh6a1%2BhZQI6xwBxqna8KLJ0qQ1mtR268WbvZpCc7%2B%2BKv8DCBEQABoMNjM3NDIzMTgzODA1IgwYx0VdDl0WIIcSKFwq3APgGEdTA%2FaSuNSGd5rvMil2l2BNVCdn6QI82c55bsUa%2FpKh2Vl2uvzIKhLmyoGlaBc3rHD54mLt61lnaL48WQ1iTJFBWvS77Pv4ERKePjt%2B2i4rv4sWRq26cC5YppCuWagQZeNn69aEjxw6tZOT0Fyc6%2Bci8%2FjO%2Bttk0cIZCBi68inPcv%2Biu0z2wTZ5yxvlmxjxHIbpmKZ7JxV0OH6aYdnIneB2asNHc6m1yIhMB0coddzzdIciyvSdYq7C7nNhGEYwpsIEeXp6U%2BobBVr8L5oGdT1LbRzcMcoPKiUvscHTf4L%2FgmdfC1Mxqk%2BQnW0CgjX3atnfUoIbM2C%2FQgQSJbzD3h67Le5AE3FBvmlN9rrKLjYGDEdtrZjCROHVB8f2GqxS7Sni0i09x4r8tcX7Bsnh7SYts5cQt2AwjHdSxifYyIJY4YytdD9n7AyjUERS7pvvNqeQoERMGE%2BtNloZNUsW3ZrEO4YoE2hvcjmNGF461ghMG2nWgQf2hPHYsLjo%2Fq5EcNBPZpEJbWLPBJqi1PA%2Fg9ZqoZ0B7nJp3z%2FfewAUw1G487mqiWTNL4f32cBeFZSQEz3Hmy0aZVs%2FLW9pvGgWCDzIOJ3V28ODRt7IWj8H1VlqA2c8yDtFFZmbozCKzYm%2FBjqkATQoL0XB09TPxmNMlUjDApWujgWnoBaZfTg%2Fz4Fx%2BzVa5fqV8xi183l722M8T237bXfbZN9yOtV9iOJpb9W2OG8oLfuRXZxlSFoiGHGpIpwR2fsK6At4do45DhBMlvibQatUrlQ3LEZFilWhDCIOg7L2hX5dJuP4Qu52NXd4UmEUz6S2c0675sXRYu33vTRxv1bYIyNMbo8R7qG0SI9D%2F%2FI2BmbI&X-Amz-Signature=1f0b20436af70300adbb7838b03c66369435a8687b3eca7ebc84d8c4e9bfc62a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGQVXYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmbDDoVow%2FAps61%2BeQmMrE6Au%2FJeoxyWvBWIW7jTzLAIhAKbh6a1%2BhZQI6xwBxqna8KLJ0qQ1mtR268WbvZpCc7%2B%2BKv8DCBEQABoMNjM3NDIzMTgzODA1IgwYx0VdDl0WIIcSKFwq3APgGEdTA%2FaSuNSGd5rvMil2l2BNVCdn6QI82c55bsUa%2FpKh2Vl2uvzIKhLmyoGlaBc3rHD54mLt61lnaL48WQ1iTJFBWvS77Pv4ERKePjt%2B2i4rv4sWRq26cC5YppCuWagQZeNn69aEjxw6tZOT0Fyc6%2Bci8%2FjO%2Bttk0cIZCBi68inPcv%2Biu0z2wTZ5yxvlmxjxHIbpmKZ7JxV0OH6aYdnIneB2asNHc6m1yIhMB0coddzzdIciyvSdYq7C7nNhGEYwpsIEeXp6U%2BobBVr8L5oGdT1LbRzcMcoPKiUvscHTf4L%2FgmdfC1Mxqk%2BQnW0CgjX3atnfUoIbM2C%2FQgQSJbzD3h67Le5AE3FBvmlN9rrKLjYGDEdtrZjCROHVB8f2GqxS7Sni0i09x4r8tcX7Bsnh7SYts5cQt2AwjHdSxifYyIJY4YytdD9n7AyjUERS7pvvNqeQoERMGE%2BtNloZNUsW3ZrEO4YoE2hvcjmNGF461ghMG2nWgQf2hPHYsLjo%2Fq5EcNBPZpEJbWLPBJqi1PA%2Fg9ZqoZ0B7nJp3z%2FfewAUw1G487mqiWTNL4f32cBeFZSQEz3Hmy0aZVs%2FLW9pvGgWCDzIOJ3V28ODRt7IWj8H1VlqA2c8yDtFFZmbozCKzYm%2FBjqkATQoL0XB09TPxmNMlUjDApWujgWnoBaZfTg%2Fz4Fx%2BzVa5fqV8xi183l722M8T237bXfbZN9yOtV9iOJpb9W2OG8oLfuRXZxlSFoiGHGpIpwR2fsK6At4do45DhBMlvibQatUrlQ3LEZFilWhDCIOg7L2hX5dJuP4Qu52NXd4UmEUz6S2c0675sXRYu33vTRxv1bYIyNMbo8R7qG0SI9D%2F%2FI2BmbI&X-Amz-Signature=5d77cdb0c7523ce604834df093c02f1f87ae28917cc0c0de57657b743e468fae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
