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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQW4Q4T%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFeu5plgPeJjuW%2BEBBq%2FujEm8%2ByD8Vy%2Bt%2FtzcGJcankyAiEAsOij28TIOUpDgaieGSzaj7EbxeK90hVRJR3hyaP2Iecq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJkCFhjuIWqgemONdircA3P2nXiykmC%2BkFoYoewQiZ6LTFjfXWRBpGcvH86mV%2BLpBnjtr4W7QXl01QlsrS%2BTxKwCkLL5sHhz5nU9KC8%2FBb5A3WxlG5co%2Fb1ZNyagW2BrMk0E66dLuarHyRIFu9ZBJQSbO1sSNNGLzrbhlL2dcZzwvhcsSqDGKZhrlg8We5gPljM17EEdKIbwnXVuJeIbOoWTs6d3%2FG8cPcm7EaMg%2BJdqJLX6j1gMqD6arL5Y1n1OlapNlQMMIqanJYx6XMo3iqGF6nMvV7qkz9S9KR61cRfx8fhvGT5ivhLNHEfXelQfeHybTzZL7jBS%2FjfEWiWCt1bnlLtPyNFLShujecKZ5pebIC3Eqh%2FQ%2ByvATVL5liQWbx1nDg5CuzXq%2FbOtPuQGcfq6HYqLz0OVhZxCm%2FAuut72YHdqC5hRJww3JARfJMYTldSL9ph2gyWsQXXAzxoptkAloj%2BAnfCr1X8siPbsR81qNjAgfE687WwDOjX7jk4RbR3JrTEwtkT1%2BvCx3mHbBMzFjWlyUQ0OE9HQhesxuGIpQRgxTYvFn6eODUHadH328vsnaxmYrpVOGtpZq7rDUO0qjj0KLBhgoGvqVWUfpL0usl2%2F1ob1F1v%2BtPv7jzle3dvnnefAsEgJ0c4JMOj8v8QGOqUBOwflaWFepWRUfgUx4Phm3Ms%2F4Ol0vceKOgmsOBUTdlkD%2B8pdzFncGYC4jY38O%2FOsAZQMlTijj9R%2B8bQBjpuUoQKS%2FQqu0MOMYuycVy7Ve7FEOzpRWuuP7MGaeoUBVQGnnRJoOvvPUfT%2BwhBC3v80baBvAFfBuGYK1e6L0GmpP%2BJCdd0f4wYqVzPdVxPIkoTdtXHLjsZ%2F2EJ3wtE5nZTPubo%2BXxqH&X-Amz-Signature=f6499cdba3e2986b8e6a1870d31a84dc956921423dcd9cb9c080ed1c54cbd60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQW4Q4T%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFeu5plgPeJjuW%2BEBBq%2FujEm8%2ByD8Vy%2Bt%2FtzcGJcankyAiEAsOij28TIOUpDgaieGSzaj7EbxeK90hVRJR3hyaP2Iecq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJkCFhjuIWqgemONdircA3P2nXiykmC%2BkFoYoewQiZ6LTFjfXWRBpGcvH86mV%2BLpBnjtr4W7QXl01QlsrS%2BTxKwCkLL5sHhz5nU9KC8%2FBb5A3WxlG5co%2Fb1ZNyagW2BrMk0E66dLuarHyRIFu9ZBJQSbO1sSNNGLzrbhlL2dcZzwvhcsSqDGKZhrlg8We5gPljM17EEdKIbwnXVuJeIbOoWTs6d3%2FG8cPcm7EaMg%2BJdqJLX6j1gMqD6arL5Y1n1OlapNlQMMIqanJYx6XMo3iqGF6nMvV7qkz9S9KR61cRfx8fhvGT5ivhLNHEfXelQfeHybTzZL7jBS%2FjfEWiWCt1bnlLtPyNFLShujecKZ5pebIC3Eqh%2FQ%2ByvATVL5liQWbx1nDg5CuzXq%2FbOtPuQGcfq6HYqLz0OVhZxCm%2FAuut72YHdqC5hRJww3JARfJMYTldSL9ph2gyWsQXXAzxoptkAloj%2BAnfCr1X8siPbsR81qNjAgfE687WwDOjX7jk4RbR3JrTEwtkT1%2BvCx3mHbBMzFjWlyUQ0OE9HQhesxuGIpQRgxTYvFn6eODUHadH328vsnaxmYrpVOGtpZq7rDUO0qjj0KLBhgoGvqVWUfpL0usl2%2F1ob1F1v%2BtPv7jzle3dvnnefAsEgJ0c4JMOj8v8QGOqUBOwflaWFepWRUfgUx4Phm3Ms%2F4Ol0vceKOgmsOBUTdlkD%2B8pdzFncGYC4jY38O%2FOsAZQMlTijj9R%2B8bQBjpuUoQKS%2FQqu0MOMYuycVy7Ve7FEOzpRWuuP7MGaeoUBVQGnnRJoOvvPUfT%2BwhBC3v80baBvAFfBuGYK1e6L0GmpP%2BJCdd0f4wYqVzPdVxPIkoTdtXHLjsZ%2F2EJ3wtE5nZTPubo%2BXxqH&X-Amz-Signature=e7e6cb7ac6ffca32463b7dd7a86c827ede871988223cc94230f23215e7417540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
