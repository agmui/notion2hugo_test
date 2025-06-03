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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7FGODF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIHk8lCmteJf4TGHj7UkeVH0Byq2zFWbyCRqnbT3hpO2LAiABItbwuNsx0xUhZnrUeD01xJmQgKzqKZsWtaMYs83N6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMd7XfY%2BXZHR%2Fn5uhKtwDEXNXtI9GG7U0X3z5GqTvn%2BjPwo8JoCaXidhcP5lOj9ib%2Biz8S25HDfEd4hj9aizktPjdb1p%2FgPNHdhUmflPvZWsfeHZiT5WJiUyv9nONkhlZ8OBsHYg1ePTQ4zGGgFt0qTIUV5OKbhLTM%2F0MaPjwpnM7sHNaDk61d7PbxQIaj8EymoxpIuZWBt43HMIuZxTeEJ9OMGNiNwTzW%2F3X%2Fs1HjqKvooQXMJqloqBI76jIApN9Nhum5oqT6diMw5LuSZdmlQb3wxEKkd4ci59pSpicWxXxa%2BFHGPX%2BP24yV1SmjKiZRxkMwS6%2F7dKngsafASjCrRHXNyAT5ftg%2Fprs%2FURuwXkMplQdtGM1Qz5fnJ6n7CavJyW3OtvLHrSZPcEI%2FcylnCwnXjrC%2BlsyqKVgT0Nfip3%2BVs7d3GX5BuvWg1GaqXgdnG5rNZfoBzoV08gvyviFFU74YV8ZOtRqTMWGFVUc9z9Pj3BT5xdmP4jnz%2BWvZiz7ASCTJw4ll6waSlaIQ3cJLPYx9YerA5dlM%2FTwLaEnvrHHcm1lsa%2BXzmcA88GwEQ5y2IxAxG6LUvWJWnTpPsdrYd6S20Tc9dtTRFZtM68SVxvuN8GuOjJJK4MTjDAA7cyqfKEhCCdm2%2FJ6VSswqsX5wQY6pgGPKwHziq3Xh9Mek3MRMXAMtEfDaJwdxMoxGkOcOnwdYpVbZdrJzpBqmUfd%2B856rXM69a9YUrRrDsFKEJZZYylk1p2vyO3u86c5cwZRNJSBK9Dtzddp%2FrFNwO%2BeGw6bEP6%2Bo1XxK7Fi8gWHzTTqMLrEfIpivxINyXqci8CTZoffvlaxExoQdeECF2PBx0ollCYRcU6XSq1%2Fio5W%2Fqst5QJ0WZXWIW5y&X-Amz-Signature=2e8878c42df6a12f4aa3c63c562f07a5b62b661ec295be744498114efc881b75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7FGODF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIHk8lCmteJf4TGHj7UkeVH0Byq2zFWbyCRqnbT3hpO2LAiABItbwuNsx0xUhZnrUeD01xJmQgKzqKZsWtaMYs83N6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMd7XfY%2BXZHR%2Fn5uhKtwDEXNXtI9GG7U0X3z5GqTvn%2BjPwo8JoCaXidhcP5lOj9ib%2Biz8S25HDfEd4hj9aizktPjdb1p%2FgPNHdhUmflPvZWsfeHZiT5WJiUyv9nONkhlZ8OBsHYg1ePTQ4zGGgFt0qTIUV5OKbhLTM%2F0MaPjwpnM7sHNaDk61d7PbxQIaj8EymoxpIuZWBt43HMIuZxTeEJ9OMGNiNwTzW%2F3X%2Fs1HjqKvooQXMJqloqBI76jIApN9Nhum5oqT6diMw5LuSZdmlQb3wxEKkd4ci59pSpicWxXxa%2BFHGPX%2BP24yV1SmjKiZRxkMwS6%2F7dKngsafASjCrRHXNyAT5ftg%2Fprs%2FURuwXkMplQdtGM1Qz5fnJ6n7CavJyW3OtvLHrSZPcEI%2FcylnCwnXjrC%2BlsyqKVgT0Nfip3%2BVs7d3GX5BuvWg1GaqXgdnG5rNZfoBzoV08gvyviFFU74YV8ZOtRqTMWGFVUc9z9Pj3BT5xdmP4jnz%2BWvZiz7ASCTJw4ll6waSlaIQ3cJLPYx9YerA5dlM%2FTwLaEnvrHHcm1lsa%2BXzmcA88GwEQ5y2IxAxG6LUvWJWnTpPsdrYd6S20Tc9dtTRFZtM68SVxvuN8GuOjJJK4MTjDAA7cyqfKEhCCdm2%2FJ6VSswqsX5wQY6pgGPKwHziq3Xh9Mek3MRMXAMtEfDaJwdxMoxGkOcOnwdYpVbZdrJzpBqmUfd%2B856rXM69a9YUrRrDsFKEJZZYylk1p2vyO3u86c5cwZRNJSBK9Dtzddp%2FrFNwO%2BeGw6bEP6%2Bo1XxK7Fi8gWHzTTqMLrEfIpivxINyXqci8CTZoffvlaxExoQdeECF2PBx0ollCYRcU6XSq1%2Fio5W%2Fqst5QJ0WZXWIW5y&X-Amz-Signature=634f6d2152b4c73e66cd9ad59f6baf74dd39f67248326d616b58174ee229e5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
