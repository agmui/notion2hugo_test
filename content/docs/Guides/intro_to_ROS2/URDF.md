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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJ7D5EN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcOTzV15%2BaOtw9uZ6wV2Eh7bZDlbwEaROpnhmJOefnOAiEA5xt14ItnIMJ0IDOV1G70lZX24rmJnm2C0luEHKgTq3gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE15HN8mLQHN9peeCyrcA9GuW19UiLOf5JfYkrIwQ43B0wFu0OhKXhxw8E23npn8Q3EDB2iNqRqtgrPKyPutvBlWl8OvOGTQnYy9PqbDddVAZijNaKNPMuDlgSFU%2BNio1A5m%2FkmEX8nStPdNDrt2nBK5Yo8U2nX5iOWqrBmCH2jcwemWZaXUdQXJRy5uttE%2FBNNIvDM3hUUiUyQX7mzyvH9iC9%2Fw1wXvDw2u5UgQ2KcNmZ4Ml%2BMPDAFf4pfiYk%2FJlpA89HaAHjGWWBlpiqFFSyMIU95EGkufoWvHLVrev1Jw9B2O5SIHvcmh5NmitLB0Nmg%2BpjkCCkVF95sWvJVQObfWHybpSvZACKvZ5NSHetf70E2%2BU1x17sX%2Bh2w9Wup8kcRVoAu4i4XhgL9OBqx6jGXLDOd9Ji%2BTAbmw%2BYbLqfPSLp8O0fOAQUPjPoILKU5HbPO%2Fh35y9QVOgPLxfF1lRXQFge9gLd1BGwzIN3a%2BaOSUMOHHD%2FRWeFHq9WzcKYFjsrY3Os0RAruyq2yMd7bXoh%2Fryo0ZEzTC%2BDFGZ0aiF%2BSZUa617gg8jnWF56%2Fu114qp%2BVXgx2iMSH7awNAt%2BVG5mG8Plw4WPmXSGY0NWZXxka%2Fzmud5qYMvSfB%2FJBX1V%2FrDIth8d7ZqgF0RlWQMI%2FlpcIGOqUByrgw8R1dw12PdrrLkshvVp43H%2B9X3eQEjUCa%2FmApgjTACB6ob1VWWbSV%2BeEEAVolIRbEW2%2BaYFt%2BB9kQ0fqLjMctxxbea0Uwbqimh%2FrBvcd5ZYdCBIJpp0Sc7ExcRGIeBDMLwGzilImrVhoBF5NZ3hPobStAttpmqN6%2Fj5VxrX1STmxUJcVT1h7yRnyzRQU1T79d218ZgfwMx%2FUTffw%2B8PQSk7sM&X-Amz-Signature=947409db03528641c04dfe7099caef7884a0085dee247b646792a6cb75af0282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJ7D5EN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcOTzV15%2BaOtw9uZ6wV2Eh7bZDlbwEaROpnhmJOefnOAiEA5xt14ItnIMJ0IDOV1G70lZX24rmJnm2C0luEHKgTq3gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE15HN8mLQHN9peeCyrcA9GuW19UiLOf5JfYkrIwQ43B0wFu0OhKXhxw8E23npn8Q3EDB2iNqRqtgrPKyPutvBlWl8OvOGTQnYy9PqbDddVAZijNaKNPMuDlgSFU%2BNio1A5m%2FkmEX8nStPdNDrt2nBK5Yo8U2nX5iOWqrBmCH2jcwemWZaXUdQXJRy5uttE%2FBNNIvDM3hUUiUyQX7mzyvH9iC9%2Fw1wXvDw2u5UgQ2KcNmZ4Ml%2BMPDAFf4pfiYk%2FJlpA89HaAHjGWWBlpiqFFSyMIU95EGkufoWvHLVrev1Jw9B2O5SIHvcmh5NmitLB0Nmg%2BpjkCCkVF95sWvJVQObfWHybpSvZACKvZ5NSHetf70E2%2BU1x17sX%2Bh2w9Wup8kcRVoAu4i4XhgL9OBqx6jGXLDOd9Ji%2BTAbmw%2BYbLqfPSLp8O0fOAQUPjPoILKU5HbPO%2Fh35y9QVOgPLxfF1lRXQFge9gLd1BGwzIN3a%2BaOSUMOHHD%2FRWeFHq9WzcKYFjsrY3Os0RAruyq2yMd7bXoh%2Fryo0ZEzTC%2BDFGZ0aiF%2BSZUa617gg8jnWF56%2Fu114qp%2BVXgx2iMSH7awNAt%2BVG5mG8Plw4WPmXSGY0NWZXxka%2Fzmud5qYMvSfB%2FJBX1V%2FrDIth8d7ZqgF0RlWQMI%2FlpcIGOqUByrgw8R1dw12PdrrLkshvVp43H%2B9X3eQEjUCa%2FmApgjTACB6ob1VWWbSV%2BeEEAVolIRbEW2%2BaYFt%2BB9kQ0fqLjMctxxbea0Uwbqimh%2FrBvcd5ZYdCBIJpp0Sc7ExcRGIeBDMLwGzilImrVhoBF5NZ3hPobStAttpmqN6%2Fj5VxrX1STmxUJcVT1h7yRnyzRQU1T79d218ZgfwMx%2FUTffw%2B8PQSk7sM&X-Amz-Signature=d1b1d27be05e9a2e2d9dc5b9a7ca31aa58c6441aac070964d38831bad07aaa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
