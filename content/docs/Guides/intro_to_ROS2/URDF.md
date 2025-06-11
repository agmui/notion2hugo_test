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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXP7KWB7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIB2ieoF%2BjYY2T3kGlJ1TgAN8O7Od4O735j7xsfatamBcAiBGoyOg%2FDhf8crIr%2B%2FhkoiFymV3b3eKbGwp23oElL5UVyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5JaHlpWHG0Ax%2Ba9KtwD13zEIZLCiLEquiuNUAq%2FYRBIa0QfVtD9ZqSDuUNMVBs4AoSbpBQ1hSIK6CEwO5g5yiqaxeo6eVfyTJMajrsowoCM8YwLn%2FDXELnoHRI0Ia4kkOuTkfSCTAtN1T4r6ghCD5%2FCvj%2BLJ6qS2EN7UqDowFVGnyoiynRi86AcoH%2BmDSZW2zS0SX1dEaVWN3FnDO%2BDrdZDdQ8eT0GcJdy5jdZJHBaaXyEpvWwMULcwuPQ9cgGkaPf1cg9W%2F5LC4i%2By8cVNCwCIJtmcDYY50qMjrwmcftz12rroXT6xFjgZ6LeE0xhJfzvjNXUaVKbmXtILscWEtg0fLIMzQIMwC8Bd6ihOkUCCg2jJYjByqctQjkmqDlLJjKoFCZZIX1OsTaiwIq%2FI46ktrE88eaaFTAvqXsvMzYX7U57IRHtcTrgO2Kzm9oWpg2AC%2Fsfrz5YzEE%2FYCKYEelinUxl5LoyOYvmzkEukZHQayKhF%2BZmpUWeR%2BUMXreVD78nLf3CyWerUdPjCWHpJ0QnPogCRNRhuoRCrSomvrzv2h8y2nv912legQMC30LZpLstXpHa7cBOVPm79FEGWWb2VCLuO9qira1%2FPnfb8yb5VIbcq94AK1fZ%2FyL2kjsQAdUw03sjw3N%2Bl83UwucinwgY6pgHKJWSzyPSRLIp8CuNO0NrYUMpVI8WqQioEHLRVJXUFeD%2BBVVRCWGesowfySUkilbjhN8SYlB3XUtUrYxZ%2FA2Jwk36dYFwex4h112wpkkDLFyNpIB%2BkBt89HJWUy8iaG4opqHYa1RLB93wKxe25IS6nJRDPuTjwM4qoXby1vcR%2F5%2Bdk6U0FNc9R2E%2FijYMeMH1Rt%2B8isx4IpARX%2Bnfjg54aJMGuFwV%2F&X-Amz-Signature=2bda56171da2fc325693efaa49a19e6f8f540cb266305335193fded4de56cca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXP7KWB7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIB2ieoF%2BjYY2T3kGlJ1TgAN8O7Od4O735j7xsfatamBcAiBGoyOg%2FDhf8crIr%2B%2FhkoiFymV3b3eKbGwp23oElL5UVyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5JaHlpWHG0Ax%2Ba9KtwD13zEIZLCiLEquiuNUAq%2FYRBIa0QfVtD9ZqSDuUNMVBs4AoSbpBQ1hSIK6CEwO5g5yiqaxeo6eVfyTJMajrsowoCM8YwLn%2FDXELnoHRI0Ia4kkOuTkfSCTAtN1T4r6ghCD5%2FCvj%2BLJ6qS2EN7UqDowFVGnyoiynRi86AcoH%2BmDSZW2zS0SX1dEaVWN3FnDO%2BDrdZDdQ8eT0GcJdy5jdZJHBaaXyEpvWwMULcwuPQ9cgGkaPf1cg9W%2F5LC4i%2By8cVNCwCIJtmcDYY50qMjrwmcftz12rroXT6xFjgZ6LeE0xhJfzvjNXUaVKbmXtILscWEtg0fLIMzQIMwC8Bd6ihOkUCCg2jJYjByqctQjkmqDlLJjKoFCZZIX1OsTaiwIq%2FI46ktrE88eaaFTAvqXsvMzYX7U57IRHtcTrgO2Kzm9oWpg2AC%2Fsfrz5YzEE%2FYCKYEelinUxl5LoyOYvmzkEukZHQayKhF%2BZmpUWeR%2BUMXreVD78nLf3CyWerUdPjCWHpJ0QnPogCRNRhuoRCrSomvrzv2h8y2nv912legQMC30LZpLstXpHa7cBOVPm79FEGWWb2VCLuO9qira1%2FPnfb8yb5VIbcq94AK1fZ%2FyL2kjsQAdUw03sjw3N%2Bl83UwucinwgY6pgHKJWSzyPSRLIp8CuNO0NrYUMpVI8WqQioEHLRVJXUFeD%2BBVVRCWGesowfySUkilbjhN8SYlB3XUtUrYxZ%2FA2Jwk36dYFwex4h112wpkkDLFyNpIB%2BkBt89HJWUy8iaG4opqHYa1RLB93wKxe25IS6nJRDPuTjwM4qoXby1vcR%2F5%2Bdk6U0FNc9R2E%2FijYMeMH1Rt%2B8isx4IpARX%2Bnfjg54aJMGuFwV%2F&X-Amz-Signature=50d88381a3ea3a0337fd5c6555f5416721c081f344820216cd05aac1d421f44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
