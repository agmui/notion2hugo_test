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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCQANI7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCNhM48o2kJp0on5ohtjNqyMvnEWnkwTmDIGJKJTTatAQIhAPPTUMTbS3HsYx8R93k6vOQe3fgpzKXinR%2FDPzOtKI64KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyscTWNKfrfgNPQYG0q3APhMLb43XJmJG6pv%2BW4gMOiBSRu%2FBBHJh%2B3N8R3zP9Or6tprkl3kUxlp9GiQ0CFWq8hZB8E0hH1LZrfS42P76wMF5suniadiLYR5iYiB4wCYgY5GnnU4JrG488B25otIF4xRHCkanf3J0SSh0yPzosCd9Xc0C50cIh9CofXlqBjL8mRGiwhjUpXxwFEgEnSDYmbM4OQMqTe8IPGoPwmqLqcgmMRXkKD3Uai8Y8goOqf0g7z8tReCVY2s95lH5Idf3RIElnR4wqv1TwSckEM5HEBQlv8UmSjMP7mFL8HaLttbGe1xQTG0rO%2BWKdaZ2%2B3D4BlIFgWKSbNLtGUitNBu0aiR9E4%2Fhh0OzcJmMzq088bQil4WLozhdEmKdN%2BCypWAsQk2T4GOGYyEnIOgR9wSaT8ESGWTpuYMTywDPMX5k18wfDjoU1s7UdLQP%2FW7KctjeyXKfLl5y6QlCMloRCozZnp2hhREBUT%2FP9v%2BIoCyU1FSJcXh85E7YfZyLrhegcxHWb26zoMwGA%2F9beeZDPC2%2FdmrmGkrUeVEbOmlF6dREizDbFyTedSlC%2Bk8rU2eHndPtDVcFerSrJkBJHS9vgT94RNJ7tnM%2FD0dEYXPe%2BI%2BuFACQ%2BNQfMD%2FDcV1QP%2BSTCxkMrABjqkAVw6B8A7ZHe%2Fik55CfaFYeLDi3XsBOJzG5Oq7r63Qaya9%2BWsmWw5wca2cbvuozE1gJGMFIwXv3lrGjNuom9198LejR%2BSAy8VVYPOwjf0OzrE5qJohaSnNvlTHyLfwlnhXdZdP%2Fg4XxF3Wm%2FFjGK%2FC7rQOG2utpCM6p9H5uU%2BXWomqfYWcTRGj%2Fu%2FVmxFT0INgTmG%2FyjxIBXlodjLvGppz0se9k%2BY&X-Amz-Signature=374ad9bfcaf6bfbf825f78aa79c06566256dc4620fe81fac002f2e8a72e36358&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCQANI7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCNhM48o2kJp0on5ohtjNqyMvnEWnkwTmDIGJKJTTatAQIhAPPTUMTbS3HsYx8R93k6vOQe3fgpzKXinR%2FDPzOtKI64KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyscTWNKfrfgNPQYG0q3APhMLb43XJmJG6pv%2BW4gMOiBSRu%2FBBHJh%2B3N8R3zP9Or6tprkl3kUxlp9GiQ0CFWq8hZB8E0hH1LZrfS42P76wMF5suniadiLYR5iYiB4wCYgY5GnnU4JrG488B25otIF4xRHCkanf3J0SSh0yPzosCd9Xc0C50cIh9CofXlqBjL8mRGiwhjUpXxwFEgEnSDYmbM4OQMqTe8IPGoPwmqLqcgmMRXkKD3Uai8Y8goOqf0g7z8tReCVY2s95lH5Idf3RIElnR4wqv1TwSckEM5HEBQlv8UmSjMP7mFL8HaLttbGe1xQTG0rO%2BWKdaZ2%2B3D4BlIFgWKSbNLtGUitNBu0aiR9E4%2Fhh0OzcJmMzq088bQil4WLozhdEmKdN%2BCypWAsQk2T4GOGYyEnIOgR9wSaT8ESGWTpuYMTywDPMX5k18wfDjoU1s7UdLQP%2FW7KctjeyXKfLl5y6QlCMloRCozZnp2hhREBUT%2FP9v%2BIoCyU1FSJcXh85E7YfZyLrhegcxHWb26zoMwGA%2F9beeZDPC2%2FdmrmGkrUeVEbOmlF6dREizDbFyTedSlC%2Bk8rU2eHndPtDVcFerSrJkBJHS9vgT94RNJ7tnM%2FD0dEYXPe%2BI%2BuFACQ%2BNQfMD%2FDcV1QP%2BSTCxkMrABjqkAVw6B8A7ZHe%2Fik55CfaFYeLDi3XsBOJzG5Oq7r63Qaya9%2BWsmWw5wca2cbvuozE1gJGMFIwXv3lrGjNuom9198LejR%2BSAy8VVYPOwjf0OzrE5qJohaSnNvlTHyLfwlnhXdZdP%2Fg4XxF3Wm%2FFjGK%2FC7rQOG2utpCM6p9H5uU%2BXWomqfYWcTRGj%2Fu%2FVmxFT0INgTmG%2FyjxIBXlodjLvGppz0se9k%2BY&X-Amz-Signature=e121929924681a4cccd30428cc2023ed32603e07947558ec9286c93bc231ee77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
