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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFNZDBFX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0HfXA8vah8hq%2FItqbsmo9I%2BB08xr9isXOOj6LwJ1x3AIhANBn7IYTx8gdWbiZKV%2FPYPI15gs4LmRhb2HONTZhIL2SKv8DCBMQABoMNjM3NDIzMTgzODA1Igw90qqaZLbgHp%2FjtAYq3AOY7R8N2YzqFWNSJ9F92OzkZj0mfvGGZt3vb7PNkw08KOs4B3ZykOZ7dYWMYGJdL78NSWeVkoDyQ1BLTxwBXaGZsoKx5rjMqtv4fbpyw6AjMiXXR7%2BSYOUQEr6hWjyELPE%2BZFAyuhf5St7lP%2BoeZWF2lJoqd4P%2ByRoAtRb3wnFcU1byq7DP4J9nWalSrZdwF1btNF6YSk%2FD96%2B7w5cq%2FSUxSCHl%2Bi%2FMbImB1axAe6Hd4icgitUT4Zjw%2B7ucz40ITRpnu%2Fu7csv%2FKpOzgqrcgLo01nHJOLQrkxAa%2Fku91yLpppUsvVEBXJCewInF8G212D5f8N4TvYq53CrD4RNX%2BhjjjIkzYIl1C9f1%2Bi3UdQ40F%2Fv4I1WROM6Gw%2BVO%2FwaEJ%2Bcfgm4iwMZF9WtWKokbSNX3s7ju2YG9j18iyjtaCvxZdfSCl1nnxZfqxOIqVMuL5ZkTXHzt90iBQXiuZc2cg1qTUKuoCcXDC73Veq471c01Qof%2BpaSZgdsXcl78%2FLgTesxsSkurJrI9kddbuajdLljRt0KGugd01CWgyPSsVSeUrjTE2rwg%2FkYOh%2F4pE4rkoGLNCvNG7HVMzFrlS776ZShkvnMGkDJmerSbfP9%2Be9MEL5iTGbzlfEjd4Zf6jzD7476%2FBjqkASZrmR6%2FXzzGnvV6Wdz48ZnVONv64us8lAvyyh0GqO8mDwC27KwasBIh1VF4axrw2EiePMmz1mCA5YpHQ5GdxHiGfmbTUDY76O1KUulV8JBPrYb%2FTYOyt7WYqy5lrkaQPci4riCyKHDmHW7sl1ByPedor42n8QJW5x0t0aPjAz3NkmZG6wQ8%2FIGvWhKKjRlRMy8M42rj16I3qxEVZfGJ6nZF3T0K&X-Amz-Signature=4b627594d439bc3fd56b1de24ed7a811b7b218fcfba203671c8fed9e1e349f89&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFNZDBFX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0HfXA8vah8hq%2FItqbsmo9I%2BB08xr9isXOOj6LwJ1x3AIhANBn7IYTx8gdWbiZKV%2FPYPI15gs4LmRhb2HONTZhIL2SKv8DCBMQABoMNjM3NDIzMTgzODA1Igw90qqaZLbgHp%2FjtAYq3AOY7R8N2YzqFWNSJ9F92OzkZj0mfvGGZt3vb7PNkw08KOs4B3ZykOZ7dYWMYGJdL78NSWeVkoDyQ1BLTxwBXaGZsoKx5rjMqtv4fbpyw6AjMiXXR7%2BSYOUQEr6hWjyELPE%2BZFAyuhf5St7lP%2BoeZWF2lJoqd4P%2ByRoAtRb3wnFcU1byq7DP4J9nWalSrZdwF1btNF6YSk%2FD96%2B7w5cq%2FSUxSCHl%2Bi%2FMbImB1axAe6Hd4icgitUT4Zjw%2B7ucz40ITRpnu%2Fu7csv%2FKpOzgqrcgLo01nHJOLQrkxAa%2Fku91yLpppUsvVEBXJCewInF8G212D5f8N4TvYq53CrD4RNX%2BhjjjIkzYIl1C9f1%2Bi3UdQ40F%2Fv4I1WROM6Gw%2BVO%2FwaEJ%2Bcfgm4iwMZF9WtWKokbSNX3s7ju2YG9j18iyjtaCvxZdfSCl1nnxZfqxOIqVMuL5ZkTXHzt90iBQXiuZc2cg1qTUKuoCcXDC73Veq471c01Qof%2BpaSZgdsXcl78%2FLgTesxsSkurJrI9kddbuajdLljRt0KGugd01CWgyPSsVSeUrjTE2rwg%2FkYOh%2F4pE4rkoGLNCvNG7HVMzFrlS776ZShkvnMGkDJmerSbfP9%2Be9MEL5iTGbzlfEjd4Zf6jzD7476%2FBjqkASZrmR6%2FXzzGnvV6Wdz48ZnVONv64us8lAvyyh0GqO8mDwC27KwasBIh1VF4axrw2EiePMmz1mCA5YpHQ5GdxHiGfmbTUDY76O1KUulV8JBPrYb%2FTYOyt7WYqy5lrkaQPci4riCyKHDmHW7sl1ByPedor42n8QJW5x0t0aPjAz3NkmZG6wQ8%2FIGvWhKKjRlRMy8M42rj16I3qxEVZfGJ6nZF3T0K&X-Amz-Signature=e6c16f93f0943aab33a279fa9bf67c47cf2335fbade368d5c293699d166e4302&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
