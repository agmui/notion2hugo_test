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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665H6HIHI%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCdqZnbf5ZMwidmXMm9ySEY9v6ZmZb92TfTnuNrqzJJGAIgCXS7ZTVdCQp6od6SFAPEaQypqZAuUKgqsZ4KaS1DUlkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcagKYJ4DAD9pIEbircAyZn8lEp7bfh7tIDy%2B%2FxpLROQr%2FhXNrD4rPUf9VpkY2gqQdMPNKawCEVwNcj%2BznD21nyBqMN%2Bh6Fe2JQ9IdOyBAc1jnHdjQwUQkstAi%2Fc34syOtKXJiudj%2FyMupeo4OL7Lu38B1hH08MWYXMa13PU%2BY8MtaFfjfdd8LfzvV6N7nlr%2BbiP5wvKMFMrxA2eoAtvp1ppKWmKqpUCB6Q38hJUmv%2FpatB%2BvoDFojw7TlSckt8cVPdhd7BQJweEspxIfIkV1bKt0K19k2%2BhrJzIFTfcdz%2FQl%2BIE6XyRG1D8p4ds9Ryl%2FKGJ3F1feisIixvTvkw7n1QX%2BzmDWzjGlcRBhkmgUleKvfDjnT9KyU2i8VuYmOMLnNSrRsjhZJbz%2FoFMNDaue7up7KJp%2Bbu1vk6DIE%2Fe0S7vyS0%2FaTjJWsWcZK%2Bzy5NE0kBrxiutk3XbhFYWSBQaywLBzc3hZN3IrBTyX8zy4JLArulF80P7vteSz%2FXJzvHL4wYat4QdemwiqogeIKg04pGNCJPn96ceOQ%2BTFMxPdRcr97zd4flqBI1zCxAbQAgimqbDFwOKgDX8muInOhT9UGeKBVHoJBuaBcnsv1t%2BiCEKcbrGVTA1juYCfKCzQNo0IfcClRS02C6hJ4QMLafl9IGOqUB%2F4htinjo5a6r4qWquJiVpOQrNKY7vDxFxzieNxVPW6pzvRSYY6C0xjjhGeyOvUo5HOoGYCULrUIG4pREBXWa8La%2Fo4%2FJ9n9aw%2FaWxaYPVyFHgirNfWyJafKwRz4innf4CWtmfV0to6HPNePJjsU5EZkDCizEUKNnx8zIzbcGZh3N2VHm7BXVJ4xHxufNsrKApM0sxyo%2BN633XgQua%2F4EbMGQFV5J&X-Amz-Signature=016c2d93de4eb7168c9fa6ca393f1759cbcc2aca7bc92cdf011437401ba7773f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665H6HIHI%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCdqZnbf5ZMwidmXMm9ySEY9v6ZmZb92TfTnuNrqzJJGAIgCXS7ZTVdCQp6od6SFAPEaQypqZAuUKgqsZ4KaS1DUlkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcagKYJ4DAD9pIEbircAyZn8lEp7bfh7tIDy%2B%2FxpLROQr%2FhXNrD4rPUf9VpkY2gqQdMPNKawCEVwNcj%2BznD21nyBqMN%2Bh6Fe2JQ9IdOyBAc1jnHdjQwUQkstAi%2Fc34syOtKXJiudj%2FyMupeo4OL7Lu38B1hH08MWYXMa13PU%2BY8MtaFfjfdd8LfzvV6N7nlr%2BbiP5wvKMFMrxA2eoAtvp1ppKWmKqpUCB6Q38hJUmv%2FpatB%2BvoDFojw7TlSckt8cVPdhd7BQJweEspxIfIkV1bKt0K19k2%2BhrJzIFTfcdz%2FQl%2BIE6XyRG1D8p4ds9Ryl%2FKGJ3F1feisIixvTvkw7n1QX%2BzmDWzjGlcRBhkmgUleKvfDjnT9KyU2i8VuYmOMLnNSrRsjhZJbz%2FoFMNDaue7up7KJp%2Bbu1vk6DIE%2Fe0S7vyS0%2FaTjJWsWcZK%2Bzy5NE0kBrxiutk3XbhFYWSBQaywLBzc3hZN3IrBTyX8zy4JLArulF80P7vteSz%2FXJzvHL4wYat4QdemwiqogeIKg04pGNCJPn96ceOQ%2BTFMxPdRcr97zd4flqBI1zCxAbQAgimqbDFwOKgDX8muInOhT9UGeKBVHoJBuaBcnsv1t%2BiCEKcbrGVTA1juYCfKCzQNo0IfcClRS02C6hJ4QMLafl9IGOqUB%2F4htinjo5a6r4qWquJiVpOQrNKY7vDxFxzieNxVPW6pzvRSYY6C0xjjhGeyOvUo5HOoGYCULrUIG4pREBXWa8La%2Fo4%2FJ9n9aw%2FaWxaYPVyFHgirNfWyJafKwRz4innf4CWtmfV0to6HPNePJjsU5EZkDCizEUKNnx8zIzbcGZh3N2VHm7BXVJ4xHxufNsrKApM0sxyo%2BN633XgQua%2F4EbMGQFV5J&X-Amz-Signature=c1f8bd2bbc18a87ce85a673d564fb61c9ca000801dbd9239bf07c7333bbe82a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
