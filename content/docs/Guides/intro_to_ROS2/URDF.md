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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZNY4KR%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCO605ED8VfiCX32C1crukx2mr2WsMcwqN02C4WJOnaZAIgEGK3kBVXJTwRwCHitGk0PZYyCi6aGyWk62g2wgGVVmAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgFRRG9AkYl0IIuLSrcA3AXrt4L4Z0bBVEyTWjvDZy3o3vAGv6Z830p7MIl07GMzA6KYi4Vy0YyNGOqzU2G3hqQiGOcqvZgbBz1QacarJRlv83QnC2Twshji%2FUyLcRpJLuWnvWWYi4gVQsNehnGgixmlKlnfiEc8Ij6YAnIspPCpK60nPHgD04dMI7vUo9NaUK97xqaDLev%2FQGkzv2GB%2FZXyuloSXZU35K31yw560htEC226kgaxgzTCBgZVyJseUIcSly%2B%2Fa%2FsnOLyp8PC8kWGGIzYAK5jqrzzXuxBc5YBuhdeW4hwq2bKvgvSTueq4u9ktI%2BNP31dG8sNJyrvDoVdRdmnr5k6%2FiDNvgej%2B2HCvqlhrPBd6w938fcsZ79Ip6u2H2yj0Kg14Ye7OTImgInJRwiw3GyO8ObhaSxxU8kXqrh%2FcacRCwyxa6LXJFAWc0RozFZnmd34SZnW1lrJp%2BJ8aeNtySQOH8UUXRZtatw0zDolOPeTvXAswEgezfRtRJl22HiYHzWrDPw79KbLlZikT%2B5RJbdqhUDkeNPbUF9Lc937G8joM%2BOzbXDms5x42Rj8clV32d%2FJ6m1pyeZLtEbPtlILEoAZpOhBdY3MiSRVhqklMNhdLGhK5wusliL9hQ7RhEt3GYJNdFCcMLWz2sAGOqUBjZZsy0UrecHfsvRziKDCg0AbZDsaZ8PqmLxvP2DUvPWLPIVSWxoU1nMJU4dsBZkrSlwl0cWfrzT7jSHOncn%2BDMNt6L%2Bxplb%2BXqFWWnkUxCZZ%2BxX6ILbRuHM1XFm4q%2Fzm1O9ayoUuQoFt3rtQOIlDlrcZAd2SQy91z1ab203BW6UbUNtNrwvwERI29TyuwAtfXCBBQgSxRCvIT0u%2BQv5cQvhA%2F3p2&X-Amz-Signature=21db69cec939d5287334a87a3e5cf6733f207d08739759776cb94e1384a61cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZNY4KR%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCO605ED8VfiCX32C1crukx2mr2WsMcwqN02C4WJOnaZAIgEGK3kBVXJTwRwCHitGk0PZYyCi6aGyWk62g2wgGVVmAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgFRRG9AkYl0IIuLSrcA3AXrt4L4Z0bBVEyTWjvDZy3o3vAGv6Z830p7MIl07GMzA6KYi4Vy0YyNGOqzU2G3hqQiGOcqvZgbBz1QacarJRlv83QnC2Twshji%2FUyLcRpJLuWnvWWYi4gVQsNehnGgixmlKlnfiEc8Ij6YAnIspPCpK60nPHgD04dMI7vUo9NaUK97xqaDLev%2FQGkzv2GB%2FZXyuloSXZU35K31yw560htEC226kgaxgzTCBgZVyJseUIcSly%2B%2Fa%2FsnOLyp8PC8kWGGIzYAK5jqrzzXuxBc5YBuhdeW4hwq2bKvgvSTueq4u9ktI%2BNP31dG8sNJyrvDoVdRdmnr5k6%2FiDNvgej%2B2HCvqlhrPBd6w938fcsZ79Ip6u2H2yj0Kg14Ye7OTImgInJRwiw3GyO8ObhaSxxU8kXqrh%2FcacRCwyxa6LXJFAWc0RozFZnmd34SZnW1lrJp%2BJ8aeNtySQOH8UUXRZtatw0zDolOPeTvXAswEgezfRtRJl22HiYHzWrDPw79KbLlZikT%2B5RJbdqhUDkeNPbUF9Lc937G8joM%2BOzbXDms5x42Rj8clV32d%2FJ6m1pyeZLtEbPtlILEoAZpOhBdY3MiSRVhqklMNhdLGhK5wusliL9hQ7RhEt3GYJNdFCcMLWz2sAGOqUBjZZsy0UrecHfsvRziKDCg0AbZDsaZ8PqmLxvP2DUvPWLPIVSWxoU1nMJU4dsBZkrSlwl0cWfrzT7jSHOncn%2BDMNt6L%2Bxplb%2BXqFWWnkUxCZZ%2BxX6ILbRuHM1XFm4q%2Fzm1O9ayoUuQoFt3rtQOIlDlrcZAd2SQy91z1ab203BW6UbUNtNrwvwERI29TyuwAtfXCBBQgSxRCvIT0u%2BQv5cQvhA%2F3p2&X-Amz-Signature=e6ff772483fc49f873d1001ced610f364cf0db1706a45e8a29beeaf39508a524&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
