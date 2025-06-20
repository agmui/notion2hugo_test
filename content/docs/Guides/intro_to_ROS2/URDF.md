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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRRS4J7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPggPsRUkMGQ5GKtiy4PfVwRarD6aVPtrNlZyLdKj5wgIhAMBj39Y8n6TMDExxwtuWbP9gidKzGXo9gneD5Nt4%2FNx%2FKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtndxbtJQIF4dvJd4q3APWdFej7mSwAzS7Y6BF2E2Pxs6TJ7KI7qRFGsnWM4%2BQh%2FIiDhr9vDOmNGXiFns9N3uwFu%2B6slB1cMgA5hSvoM15puYLovqZj%2BPjHmuY2dcHjeXsyjf%2F0Zjb77LL83NhXd9ZTU6yOmgEUMJ9yBYMzRepZMFbBLoeyDuqbFCwsi0p%2BGjfYvA%2FXw2ZHaeKRfUt75IMJfXt9Np5tljGEhe4gyK%2Bd%2BxVFT1mfyXcSiaVE9fMTXNwY9yWBqT6jyLVyKj6rkZYtKpO9Tk%2F7MKPxiRi3kuC0aEj%2F0X20JJtK2WdWQFsC%2BrrRxziz3beGNtl3f9p%2B3ONdR8VuaP9FfJLce%2FtIc3XPcacr0Or07%2BMnxgSGYlPzmx8cXA33v4HyrNYqeuuqwDRVtP6IgrAZXQvaIvGnUNmxsJqnyFDMj5b0a%2BGO0g8c0Umz3sVJchgS3cJ8R1Pi2f6fIenf9uReGpsC47Qly499HW4JjaU4q36PXikwlnSnR8%2FoP34ZMVSSLcpHy28IYM8XKkBOcqjSgh15ycR3fiOiZBmsdNvChIhD%2BilmhAbt3bm0V20r1Ju6%2BKtvFK%2B7eu%2Br8mwfp9LluYYu0Gagu1%2FnyTDflVAPo4sClInooAv7Ks4dF%2F1MS3kheeSADD9jdPCBjqkAZqHZZ7NDefuu5WIooPhATYYc0Rz5fiZ0VzsW6aspwhad3UTuPSwvyZ6dP2W6YTp%2BXOoQJMbg26eaMa4ixFc%2B3i73yr2nYgmmYBG6SBvt01liiJgHFhlGATe9TQaXZKKjxAlRVnnGOqBFvn8BGUmQBzoEVPayuwptAVutNZVmBkm1RgaC0Ib7LI5WL59wO154YVykutqYu5gIOTaLIvUrP%2BLUnst&X-Amz-Signature=3bdd1dc94b5dfc81721823ba56b4d46e1e02ffa2449842b7126012f940dd3e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRRS4J7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPggPsRUkMGQ5GKtiy4PfVwRarD6aVPtrNlZyLdKj5wgIhAMBj39Y8n6TMDExxwtuWbP9gidKzGXo9gneD5Nt4%2FNx%2FKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtndxbtJQIF4dvJd4q3APWdFej7mSwAzS7Y6BF2E2Pxs6TJ7KI7qRFGsnWM4%2BQh%2FIiDhr9vDOmNGXiFns9N3uwFu%2B6slB1cMgA5hSvoM15puYLovqZj%2BPjHmuY2dcHjeXsyjf%2F0Zjb77LL83NhXd9ZTU6yOmgEUMJ9yBYMzRepZMFbBLoeyDuqbFCwsi0p%2BGjfYvA%2FXw2ZHaeKRfUt75IMJfXt9Np5tljGEhe4gyK%2Bd%2BxVFT1mfyXcSiaVE9fMTXNwY9yWBqT6jyLVyKj6rkZYtKpO9Tk%2F7MKPxiRi3kuC0aEj%2F0X20JJtK2WdWQFsC%2BrrRxziz3beGNtl3f9p%2B3ONdR8VuaP9FfJLce%2FtIc3XPcacr0Or07%2BMnxgSGYlPzmx8cXA33v4HyrNYqeuuqwDRVtP6IgrAZXQvaIvGnUNmxsJqnyFDMj5b0a%2BGO0g8c0Umz3sVJchgS3cJ8R1Pi2f6fIenf9uReGpsC47Qly499HW4JjaU4q36PXikwlnSnR8%2FoP34ZMVSSLcpHy28IYM8XKkBOcqjSgh15ycR3fiOiZBmsdNvChIhD%2BilmhAbt3bm0V20r1Ju6%2BKtvFK%2B7eu%2Br8mwfp9LluYYu0Gagu1%2FnyTDflVAPo4sClInooAv7Ks4dF%2F1MS3kheeSADD9jdPCBjqkAZqHZZ7NDefuu5WIooPhATYYc0Rz5fiZ0VzsW6aspwhad3UTuPSwvyZ6dP2W6YTp%2BXOoQJMbg26eaMa4ixFc%2B3i73yr2nYgmmYBG6SBvt01liiJgHFhlGATe9TQaXZKKjxAlRVnnGOqBFvn8BGUmQBzoEVPayuwptAVutNZVmBkm1RgaC0Ib7LI5WL59wO154YVykutqYu5gIOTaLIvUrP%2BLUnst&X-Amz-Signature=b92c282e90c9c75e39270744de917f4a72b9886bf15171f658fa7740f7964b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
