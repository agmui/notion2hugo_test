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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFMN6HF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHyMtR3E9%2FdSCMCO%2F7HbkJ8sbgbGvIDVN4RwuYGFjYoyAiAHp0Gl2hwgPX8f5HJaBymRq59wMA7hPcnQTMYLJynalyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUy%2FyA3oYgfvZbKiYKtwDzQ4tw7CYMAi%2FJwUz1mBVKjla84st%2BuZxnf8O0VyCmOHYRh4YDkQwa1H8cjORHg2xMy715fKwHhM%2FKUecYH%2FCHdiuS4wKX3WvujXjZOn730oIDjX7COYaFDb9aLy%2B5IloEF6Guhw4J8JPZBpClzClOEz6sj7m%2FUNxKw8vBgM9i8m6wATfViuNjGWn8lqhRuwNSXYqX7gmjbW82k9dHSDNRooDtFrfNBrV6DMQ29c%2BlLmx3cgEFDi2yJn9%2B2q50UvA9X0sAs4FJHELM%2Ba0pHhXXHHZa7itAmYf%2BsRnAjNC%2FRBNBLpCtcvIVeXWpCNLvOTG2bGMswIBQJUjuvqFP1OhNZ6IRA%2FNC9m5EMfdugaKbgB9A5nf3Q%2BOlt5gnHuSnykG2GA4875P22W%2F3S266IDWHdCp7nbQdi361t0slhEUo3%2FjqZD7%2FuZ9Zk7Eafpf7oPN%2BnViQHWrlz2ALmQEYf%2Bq2Q7ScCc48HUJ5IlPrCnqZ2dQJ96s6ezCzaSwCu50uRZsD%2FTiVBMb9%2BgO5GcYRwtWb4u0%2B0ChuVO2VfaVr38OVOXZb9wYPL2PCDrUQCQnCuPXiKHIqFVKE%2B%2F4HNDSYRnj%2BRXkdcA%2FM%2FPM72a5l%2FRWhzdDKP3g5UacalBRiXsw3vLDwQY6pgEikNG1c%2FASN6VqvOV4rbVVlx7zBBpgtZ5MjSU1LItpHAWxegGjDPIEeoUs4NFn%2B7D0o4mPJflAZ1WGcwldFzV8hidLC8Bgly5YJ6TndSsHRM9LP7bIodw1YYmsrz153aigRJQKVkZT1z0VxyYOoBYW576xC903WpGphMB6Jg4JnOoTo4WjmCBn4QUhG%2F4fN4q%2Ba2uqUcee71kdVT3De%2Bi%2B47egEmNy&X-Amz-Signature=14212f9bd0304dd2cea14809774f954b2b1fbbf955c7eda017b0b1e575ac3f02&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFMN6HF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHyMtR3E9%2FdSCMCO%2F7HbkJ8sbgbGvIDVN4RwuYGFjYoyAiAHp0Gl2hwgPX8f5HJaBymRq59wMA7hPcnQTMYLJynalyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUy%2FyA3oYgfvZbKiYKtwDzQ4tw7CYMAi%2FJwUz1mBVKjla84st%2BuZxnf8O0VyCmOHYRh4YDkQwa1H8cjORHg2xMy715fKwHhM%2FKUecYH%2FCHdiuS4wKX3WvujXjZOn730oIDjX7COYaFDb9aLy%2B5IloEF6Guhw4J8JPZBpClzClOEz6sj7m%2FUNxKw8vBgM9i8m6wATfViuNjGWn8lqhRuwNSXYqX7gmjbW82k9dHSDNRooDtFrfNBrV6DMQ29c%2BlLmx3cgEFDi2yJn9%2B2q50UvA9X0sAs4FJHELM%2Ba0pHhXXHHZa7itAmYf%2BsRnAjNC%2FRBNBLpCtcvIVeXWpCNLvOTG2bGMswIBQJUjuvqFP1OhNZ6IRA%2FNC9m5EMfdugaKbgB9A5nf3Q%2BOlt5gnHuSnykG2GA4875P22W%2F3S266IDWHdCp7nbQdi361t0slhEUo3%2FjqZD7%2FuZ9Zk7Eafpf7oPN%2BnViQHWrlz2ALmQEYf%2Bq2Q7ScCc48HUJ5IlPrCnqZ2dQJ96s6ezCzaSwCu50uRZsD%2FTiVBMb9%2BgO5GcYRwtWb4u0%2B0ChuVO2VfaVr38OVOXZb9wYPL2PCDrUQCQnCuPXiKHIqFVKE%2B%2F4HNDSYRnj%2BRXkdcA%2FM%2FPM72a5l%2FRWhzdDKP3g5UacalBRiXsw3vLDwQY6pgEikNG1c%2FASN6VqvOV4rbVVlx7zBBpgtZ5MjSU1LItpHAWxegGjDPIEeoUs4NFn%2B7D0o4mPJflAZ1WGcwldFzV8hidLC8Bgly5YJ6TndSsHRM9LP7bIodw1YYmsrz153aigRJQKVkZT1z0VxyYOoBYW576xC903WpGphMB6Jg4JnOoTo4WjmCBn4QUhG%2F4fN4q%2Ba2uqUcee71kdVT3De%2Bi%2B47egEmNy&X-Amz-Signature=088e0bb9cd981d86de1a503706cd078f72266bd15413b8bd8788bdcbf131ab1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
