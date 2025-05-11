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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7DJZXZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDE%2BrOelA5huNx0BzuLCM7p7nE220O9W%2B98IKAvZhM4lwIgHnXdh67l5VZHq8RB36WLMRyCdgFN2re5SOjNzJYicJwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvvn8cFHWFpVGCB%2BircA7urVxs55SRhdKtavvV%2B6fFayC1XyquYTFXzXccuGZn8cyQ4lvntztmTeb0Qhy1T%2Fj28oCkQMDnaQWie29iNxs8gkNmkOOu4KS7MPazQn6iVhjzcyt60WMPP39M%2BtKycr3I8xwNdiXDXIKW0%2FCcE3LWOgAywHRLAqSv0mO3CIyqUhKoj%2BATmTFYYxLtz%2B6%2F61THOhRNbeNVd6Aqf2gLG6R4y0eTHfjr96kWKh2h8ReqNgUVqMsHzp66DXKvuYUuByaohnnzsGEShTv7hYCNr%2FbpsSPr3wbZdCB6JOq%2F6%2FzvO0%2FoQ115HJUwO%2FtODOlHV2TKg8SwiUwE6EtItYuCn6N%2Fz5JsvVq61dNo5FEH1teQSN%2BXk%2F1CFjzcitMoBg9dedgSIBZukGu8K69QDfbqVl6rB533Wh%2Bhj4uj2Nh9ygqmR7Ayo4IT0GEfpBVxnfHJEcJ0NRef%2BMMaKQ2Qcwl1Pb%2B9kbO4sV0aRqn%2FYROaMSZ0qPs3JVQ4qpWFk%2FJecXsQUSCWO6uBsqYxafmqrt4Xhz9%2BTT9AZwZBAzanIt%2BfK3wqTsk%2BqLMbvBe6hNl5vuc%2BmMNTEgY%2Fd4q%2FqTmC7ruccXa35EyIM9suLahghCDb6ky8W1EZyitdTeDTwGVP1MMDZgsEGOqUBPfKhAgYnkm7blEJ%2F1p24Q8oshJEIWw78uetNEQyjetgB%2FQN%2FAhs7A1E5a%2BrAbTazZRJFcThWAFvil1ol2T4LWiutuxnh6kypV8yVWaYXE1mYSyugbr4Owh%2Fo7J9hWX8OIjEyIr4LSygn6i0xDRSbZAEdLVGbOkAthtSgPmYdJm8PcBtwBz6Qi0u6NfZwN00FuAozgOysnLLC4Ps51OgNi2bEIqFt&X-Amz-Signature=d8f61959ffc6002ec53bd1b7cbd4e818439de7eba3e8db67798aa3ab4170aa84&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7DJZXZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDE%2BrOelA5huNx0BzuLCM7p7nE220O9W%2B98IKAvZhM4lwIgHnXdh67l5VZHq8RB36WLMRyCdgFN2re5SOjNzJYicJwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvvn8cFHWFpVGCB%2BircA7urVxs55SRhdKtavvV%2B6fFayC1XyquYTFXzXccuGZn8cyQ4lvntztmTeb0Qhy1T%2Fj28oCkQMDnaQWie29iNxs8gkNmkOOu4KS7MPazQn6iVhjzcyt60WMPP39M%2BtKycr3I8xwNdiXDXIKW0%2FCcE3LWOgAywHRLAqSv0mO3CIyqUhKoj%2BATmTFYYxLtz%2B6%2F61THOhRNbeNVd6Aqf2gLG6R4y0eTHfjr96kWKh2h8ReqNgUVqMsHzp66DXKvuYUuByaohnnzsGEShTv7hYCNr%2FbpsSPr3wbZdCB6JOq%2F6%2FzvO0%2FoQ115HJUwO%2FtODOlHV2TKg8SwiUwE6EtItYuCn6N%2Fz5JsvVq61dNo5FEH1teQSN%2BXk%2F1CFjzcitMoBg9dedgSIBZukGu8K69QDfbqVl6rB533Wh%2Bhj4uj2Nh9ygqmR7Ayo4IT0GEfpBVxnfHJEcJ0NRef%2BMMaKQ2Qcwl1Pb%2B9kbO4sV0aRqn%2FYROaMSZ0qPs3JVQ4qpWFk%2FJecXsQUSCWO6uBsqYxafmqrt4Xhz9%2BTT9AZwZBAzanIt%2BfK3wqTsk%2BqLMbvBe6hNl5vuc%2BmMNTEgY%2Fd4q%2FqTmC7ruccXa35EyIM9suLahghCDb6ky8W1EZyitdTeDTwGVP1MMDZgsEGOqUBPfKhAgYnkm7blEJ%2F1p24Q8oshJEIWw78uetNEQyjetgB%2FQN%2FAhs7A1E5a%2BrAbTazZRJFcThWAFvil1ol2T4LWiutuxnh6kypV8yVWaYXE1mYSyugbr4Owh%2Fo7J9hWX8OIjEyIr4LSygn6i0xDRSbZAEdLVGbOkAthtSgPmYdJm8PcBtwBz6Qi0u6NfZwN00FuAozgOysnLLC4Ps51OgNi2bEIqFt&X-Amz-Signature=65d6ba4b23f94211e6379379898e2bcbb1e97e2bda5cd75ec8fb2a0adc7e2081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
