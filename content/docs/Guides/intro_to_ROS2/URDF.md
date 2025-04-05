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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZX5NZB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoTQ0dH1RgtkFwdGw0j5hTKpHzZLBGwqXPY2jRPdqVwwIhANUjeib65RtzN5QVu6EfSxUCM5yS28AnexXn2VYAezkoKv8DCCoQABoMNjM3NDIzMTgzODA1IgywMNlsRiSnPJj8fSYq3ANo%2FaoNVKofn%2BzEIn0Uq11yGyvMFeOS5U%2FfQ9CAgSGWbPMSoADaKrzkepyD%2BDuDZzVMPwTGLnuW%2BbWUCta9%2FRl5%2FAETo34zLWHH1XHHTxh%2FC59xTSfhOhJgmf9WrPjhAO7Q0V6MGnGCVQjMujmoyd8AxmbmeutiXvEv%2BE1exden289Fwao%2FOw4UpKc%2FNGVw1c%2F5WEAurv3mYtOfLu3KVCvtzakA2QvMHxiqKNdQCsKfL%2B7O39bHkymh3vBI1w9mmb9kWOSAmJBVZ3KPqh0FFwGl5xnPIxDlfv7fpDZ7jTgKJ7vc0GcFOncIcbOT%2FYgRRraFimO5rY0mQz8L5bMf1XDK2RrJtjuVyxremRGiSsYn09DH9pI0R4avB95hO0l8NfHtgZ8JdtfWhDnQ4yXa6kZLJnL7p7yKlQJYQk8PiE8yxHlZQ1SnTk%2BVjKq8R%2B%2BSfQjeD6y7gdg3hIh01DRvDj71HNkzTKEQyCtTwg1d1KuuHhrazBByQlEjHs5Isrggzv7dCXitKSQo9L8XNkuGQM6vVXZyWh%2FvVGqreXdRGeVfpzXE4FWTFtMkv8iKPDHCqe5KuZ7VwoUVdtFFUj3WAfWTFw2c3jUtFtV3pcnZpNIZcy7VAl48CU1rAgmjGTC55MO%2FBjqkARVU1tCctRwAt5iXGDtwL5STchFJtdg3o6%2F1Yv%2F0cRygSw6XLCO6x%2Bqcu4RJPCTrJAplb%2FWE%2FMhqgizPolutmvmIaSZYRCSSP%2FwGI2LnRbDJSdWnavmv7FWD6%2BwcKkws%2FsT0a4IZ0dDQvCMha7UTatjUJy6yT1ZB07DINbIj32DDILJHAFjGqSqRNBIOOUNWM4ZzaorT6JnNiOJ%2Fj8aBjGQwhPMh&X-Amz-Signature=6f5986baed332f65bac76aa52bca1e94f1430ef4cde32cd8a9c228bb6795e775&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZX5NZB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoTQ0dH1RgtkFwdGw0j5hTKpHzZLBGwqXPY2jRPdqVwwIhANUjeib65RtzN5QVu6EfSxUCM5yS28AnexXn2VYAezkoKv8DCCoQABoMNjM3NDIzMTgzODA1IgywMNlsRiSnPJj8fSYq3ANo%2FaoNVKofn%2BzEIn0Uq11yGyvMFeOS5U%2FfQ9CAgSGWbPMSoADaKrzkepyD%2BDuDZzVMPwTGLnuW%2BbWUCta9%2FRl5%2FAETo34zLWHH1XHHTxh%2FC59xTSfhOhJgmf9WrPjhAO7Q0V6MGnGCVQjMujmoyd8AxmbmeutiXvEv%2BE1exden289Fwao%2FOw4UpKc%2FNGVw1c%2F5WEAurv3mYtOfLu3KVCvtzakA2QvMHxiqKNdQCsKfL%2B7O39bHkymh3vBI1w9mmb9kWOSAmJBVZ3KPqh0FFwGl5xnPIxDlfv7fpDZ7jTgKJ7vc0GcFOncIcbOT%2FYgRRraFimO5rY0mQz8L5bMf1XDK2RrJtjuVyxremRGiSsYn09DH9pI0R4avB95hO0l8NfHtgZ8JdtfWhDnQ4yXa6kZLJnL7p7yKlQJYQk8PiE8yxHlZQ1SnTk%2BVjKq8R%2B%2BSfQjeD6y7gdg3hIh01DRvDj71HNkzTKEQyCtTwg1d1KuuHhrazBByQlEjHs5Isrggzv7dCXitKSQo9L8XNkuGQM6vVXZyWh%2FvVGqreXdRGeVfpzXE4FWTFtMkv8iKPDHCqe5KuZ7VwoUVdtFFUj3WAfWTFw2c3jUtFtV3pcnZpNIZcy7VAl48CU1rAgmjGTC55MO%2FBjqkARVU1tCctRwAt5iXGDtwL5STchFJtdg3o6%2F1Yv%2F0cRygSw6XLCO6x%2Bqcu4RJPCTrJAplb%2FWE%2FMhqgizPolutmvmIaSZYRCSSP%2FwGI2LnRbDJSdWnavmv7FWD6%2BwcKkws%2FsT0a4IZ0dDQvCMha7UTatjUJy6yT1ZB07DINbIj32DDILJHAFjGqSqRNBIOOUNWM4ZzaorT6JnNiOJ%2Fj8aBjGQwhPMh&X-Amz-Signature=104232b5ae51bd6e066b5814796c172fcd67920b0645a78e09bff9543de4e96b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
