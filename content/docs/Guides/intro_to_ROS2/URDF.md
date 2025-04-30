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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS32TKVM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAyQjPnYJSrDz6csHAM8hOiSqxpGqcLa1c%2BxJHIfrwqdAiBLWItYMxbp6xPx6byAi15zrE8OBJtX4qQpDW3I4sbblyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcF7%2BwrOjIllmzr%2BqKtwDBooaT%2FkXNGOV11EMPIXN7eRw3sYNFl885kAN4EDlZAMiCDpWE%2BBSTSPeSZDid3wiT8cdgu0TK8LTjK1isC8Nt9V7XErGS2kh547KVa1Ck9sL%2FWN4wUvX2fzOkJj0LJ8bKzGguWg5xySYDf%2Fp8msvr1MolwM6iSmHQoXgN%2FKyarPnQvSmM%2BSB5Q8uvS7cK2JCE3k%2BQBaxTSGaHGQT1t8mHcy8Rb2%2B4zP3JHyeiC9utCxyC%2FHAHoRgh7lUAO7KUAgc%2FEpiJpCZ9nJ1JtqKM1BX5RkGRoMXy%2FD1IHtXPwQbWRpQ%2Fvb13FyMvHDQhSE%2FLTZt3NPtLHDv4kgoSr93jQcSFSmEAfSXT5HRRs82EF3SCvH1wAL7N7s6dftfD6f8hPd0Nu7pygWYxxEfKWdVUJdMRTSEJotdCKwzEV2MGr68usRhQzZdtbB%2FnK90wOmShdtFWrOmlX3%2FPWyhMoZNi99ioDi8lP2uBk%2BTWrIEmAp9HJANtg6gonHLgodGKJu15pyGMlJyvlkWxmRBbdiKuBlN9JGWTqqp39EzPLKaNAjTwMcZuj9M9IpagC%2BO2hqyJtiW9xN1J9OlE5wj0xkp4BdV7kXqIUwHTfRXnkv52egiSC0sq6eXSPdfGbzIgCgwh%2FXJwAY6pgE4MUJzvFNpfBjBGf5eD%2BFnKI84jaVXiOn4l%2Fyvvd2IzJ4aHbbN4LKPngMSA%2FsQxUu0a2OyVr4LvoJdGSAv%2BXkIdM9dU5ilEnQh%2BByut%2BoXScEE1jmsqjBZ3%2F9zHJy7OtmYbOhBOxJtv9F2a3oFiRAYSBBU%2BQxnwYZ7JVlTT42%2Bjy4t0vM358FxXgGnTy%2FuTWhoOHjYpKnjCq3tNvnnng%2BtIzZWTovU&X-Amz-Signature=be9b8976c560e26b24789e2d316b12b73e8be078f5329a8e34922556f6126ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS32TKVM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAyQjPnYJSrDz6csHAM8hOiSqxpGqcLa1c%2BxJHIfrwqdAiBLWItYMxbp6xPx6byAi15zrE8OBJtX4qQpDW3I4sbblyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcF7%2BwrOjIllmzr%2BqKtwDBooaT%2FkXNGOV11EMPIXN7eRw3sYNFl885kAN4EDlZAMiCDpWE%2BBSTSPeSZDid3wiT8cdgu0TK8LTjK1isC8Nt9V7XErGS2kh547KVa1Ck9sL%2FWN4wUvX2fzOkJj0LJ8bKzGguWg5xySYDf%2Fp8msvr1MolwM6iSmHQoXgN%2FKyarPnQvSmM%2BSB5Q8uvS7cK2JCE3k%2BQBaxTSGaHGQT1t8mHcy8Rb2%2B4zP3JHyeiC9utCxyC%2FHAHoRgh7lUAO7KUAgc%2FEpiJpCZ9nJ1JtqKM1BX5RkGRoMXy%2FD1IHtXPwQbWRpQ%2Fvb13FyMvHDQhSE%2FLTZt3NPtLHDv4kgoSr93jQcSFSmEAfSXT5HRRs82EF3SCvH1wAL7N7s6dftfD6f8hPd0Nu7pygWYxxEfKWdVUJdMRTSEJotdCKwzEV2MGr68usRhQzZdtbB%2FnK90wOmShdtFWrOmlX3%2FPWyhMoZNi99ioDi8lP2uBk%2BTWrIEmAp9HJANtg6gonHLgodGKJu15pyGMlJyvlkWxmRBbdiKuBlN9JGWTqqp39EzPLKaNAjTwMcZuj9M9IpagC%2BO2hqyJtiW9xN1J9OlE5wj0xkp4BdV7kXqIUwHTfRXnkv52egiSC0sq6eXSPdfGbzIgCgwh%2FXJwAY6pgE4MUJzvFNpfBjBGf5eD%2BFnKI84jaVXiOn4l%2Fyvvd2IzJ4aHbbN4LKPngMSA%2FsQxUu0a2OyVr4LvoJdGSAv%2BXkIdM9dU5ilEnQh%2BByut%2BoXScEE1jmsqjBZ3%2F9zHJy7OtmYbOhBOxJtv9F2a3oFiRAYSBBU%2BQxnwYZ7JVlTT42%2Bjy4t0vM358FxXgGnTy%2FuTWhoOHjYpKnjCq3tNvnnng%2BtIzZWTovU&X-Amz-Signature=85cb8732e984b43cab48003080bd4b83ba0bc6da22632e072be88173b4216a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
