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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNLIXPP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBo99hin%2ByPwB0I0gQSK%2BZzz58cKSTL9ngAmSKf%2Bz2cAiBN9p62Nj8JC8jSnh%2B9TZwHtpmqLumzSNzVwq9j6yFJFCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkJzj405nwU4%2BSUcKtwD8Kh7XidA2nIl1pYNcdGZb%2FE%2FS5iAgswAb64fMLdGvH3aZkU%2BHZ6cfxjbB0%2BkVFb3Ygds1ZzR9rFERomnHb%2Bmgwb0xPiBf86XmygDxtDvT2E3eIO0ItCS%2BMyXsLqz7omsEYNS6ENaPjcaZgcb5l1bilrUbK56o0PrRn32IybR8RKwxSAjrakb7yIckZKt%2BfEimgFKk8tEmUc0Jm2uj6u6W9FwboaeY8GFpHB6FQHSWbxxYUbiz8RslWSitgUapd4HUhwmleCMDnP%2FrDdIyPkaDVeigCAy6HzHD2UwF8ZfreiRdmq5W1qWvbmqRzr7QFlg6WEE6Y4Kx02%2BUUxVDhF4Q5Bzi55aOYOgQO1C1XnWPtMFBSWaYLchUGKbpH5gdnBp9kAX05f%2B7CCO57ohUs%2FOHgbw1XrEtuXbtUzBXF9wx3542voOc01YrXFXR8XoFK2CPXQX269XUmxt57ub81A48meiSaemnyke6yYVKUt6CCb%2FswW52oJQj1ByMNjcFrDTga133PRBwvpRADd3mWenTcqvFeKq5VzpZqRI8t7b6VUzmYAl3kVuZoblJRPG6%2BaVVaN179x7MlML5OKtFS14Hrz7F7XEs0n43RS6MbZerM4ZzfRoMKEX5q0MfN8wytuFwwY6pgFqfo3meWofTxQ%2FuJzqT8CCQxB5Y9fFE5m7UlN1OAPcQsWhI93UEyk2ySeh9ZcNrw9ZC6qPe%2B3YMlVRaMAcIl06Kl0kwQ47BovulA%2Bj7uZqnpd8oFQfhOyP1cxm4dcUYV8ys%2Bx4vWkvKOqeZHMVmctMf22HOjnhyx2QGPoma181wEr7oo63bQbpydGEK2hQlb57jilTFLaaGK0b7WeqwBngmjcBWlw5&X-Amz-Signature=e0ab7d56d1c13900da3593f03635249702fa5af60644f60cef7278d2afb98f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNLIXPP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBo99hin%2ByPwB0I0gQSK%2BZzz58cKSTL9ngAmSKf%2Bz2cAiBN9p62Nj8JC8jSnh%2B9TZwHtpmqLumzSNzVwq9j6yFJFCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkJzj405nwU4%2BSUcKtwD8Kh7XidA2nIl1pYNcdGZb%2FE%2FS5iAgswAb64fMLdGvH3aZkU%2BHZ6cfxjbB0%2BkVFb3Ygds1ZzR9rFERomnHb%2Bmgwb0xPiBf86XmygDxtDvT2E3eIO0ItCS%2BMyXsLqz7omsEYNS6ENaPjcaZgcb5l1bilrUbK56o0PrRn32IybR8RKwxSAjrakb7yIckZKt%2BfEimgFKk8tEmUc0Jm2uj6u6W9FwboaeY8GFpHB6FQHSWbxxYUbiz8RslWSitgUapd4HUhwmleCMDnP%2FrDdIyPkaDVeigCAy6HzHD2UwF8ZfreiRdmq5W1qWvbmqRzr7QFlg6WEE6Y4Kx02%2BUUxVDhF4Q5Bzi55aOYOgQO1C1XnWPtMFBSWaYLchUGKbpH5gdnBp9kAX05f%2B7CCO57ohUs%2FOHgbw1XrEtuXbtUzBXF9wx3542voOc01YrXFXR8XoFK2CPXQX269XUmxt57ub81A48meiSaemnyke6yYVKUt6CCb%2FswW52oJQj1ByMNjcFrDTga133PRBwvpRADd3mWenTcqvFeKq5VzpZqRI8t7b6VUzmYAl3kVuZoblJRPG6%2BaVVaN179x7MlML5OKtFS14Hrz7F7XEs0n43RS6MbZerM4ZzfRoMKEX5q0MfN8wytuFwwY6pgFqfo3meWofTxQ%2FuJzqT8CCQxB5Y9fFE5m7UlN1OAPcQsWhI93UEyk2ySeh9ZcNrw9ZC6qPe%2B3YMlVRaMAcIl06Kl0kwQ47BovulA%2Bj7uZqnpd8oFQfhOyP1cxm4dcUYV8ys%2Bx4vWkvKOqeZHMVmctMf22HOjnhyx2QGPoma181wEr7oo63bQbpydGEK2hQlb57jilTFLaaGK0b7WeqwBngmjcBWlw5&X-Amz-Signature=029792360ab54004bdfb1b1fc0f2207011530089fa842cdd5e4ed8ccc49be3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
