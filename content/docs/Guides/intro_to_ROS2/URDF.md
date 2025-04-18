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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5VLMC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLQXd2YJdVfZWcaAmeHdtb3pRVdPDrgq2RgxeNC2rwMAiAH0E8DVUKVlxdC%2FY02%2FqxjYJKdhgDf1LRxIS8OKifa%2Byr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMvFF2ERuU%2Bx9CyPgwKtwDfH1C3itfJy%2Bw8b%2FOOFIGYgi59%2BkiRQ7XqqlUtBuTDAqxqXzFoJXYHCcO5GBn2h0OYj6gzWQ1pE%2BubEYC%2FB7UWdKX4BtvQ6RRJq%2BCc2fMUaHbPBksG9LbvD%2BWxbaMZAy6p0qN3J3b17N3wolRSLT1DJPlYid4CHePPAP7uREwK1F1Lq4PQb8BoIKs%2Bvy8%2FJ%2FFzYO4OiJFBI%2BipLROU0j58Z0DbwHWmWiZ57gFDrg0ls3JRlwPaLkF6hA4DWkWcQD2ryOFE%2FirzfGSR%2BofCzcxl0nCJ23QvjMaisLgxxe%2F%2BI8G%2F5ApKexkpqpufI3uCuTUoaTOjdETShwigxo4Z4JEfYJXFM3C2SoBVBgF7PlCoeXbhCsnPEzP45k8JU3EIHW7zQnJQESEwzAqrenp3n46Ck1DIJTiQmeRP1OyYz4ug5c2pvzNgK4B2XlFSNdFi85qy7nxc1c6aoAtDBCoSeX98CfkGhT06QXjc9sxTO64XhWB9QqIBp3b5rD%2BcHAX0psZorInZPfK4zLfrpN2d9%2B7QpFyp8AtuZV6k2YQiDsP9labxkLCGrXT5cJv3CKqIP9BlXVlYtF6jYk9GY%2BZjKpSV62rJlEhhnjkD85GV57pK5rAD1h2b%2BEHV6dMfrAwr8KHwAY6pgE%2BjlAFTEdSa3sCt0tDWD%2B1JcmL%2FlmMXV8wDrd3FdWpRgVDvSE03oGb6R9Za0hrlRyOXUvHjFGadnbU%2BWypnOL0IqOqVNY7wRuAV7sbQjCUM62morGxfnQ4VLoLqPz1CeljCSHICZI58UIJn2MrFwWfl2fuorT6BOVr3280P6pO4H3LLhty9sr5Ko67e%2FiXsk2k8uEbv3XwAgeRokc7HZnVJ%2FLOMWZ2&X-Amz-Signature=9282a13187fcd62e9807e4698a82f1929721143f5625a93305c2b0fdc84727e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5VLMC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLQXd2YJdVfZWcaAmeHdtb3pRVdPDrgq2RgxeNC2rwMAiAH0E8DVUKVlxdC%2FY02%2FqxjYJKdhgDf1LRxIS8OKifa%2Byr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMvFF2ERuU%2Bx9CyPgwKtwDfH1C3itfJy%2Bw8b%2FOOFIGYgi59%2BkiRQ7XqqlUtBuTDAqxqXzFoJXYHCcO5GBn2h0OYj6gzWQ1pE%2BubEYC%2FB7UWdKX4BtvQ6RRJq%2BCc2fMUaHbPBksG9LbvD%2BWxbaMZAy6p0qN3J3b17N3wolRSLT1DJPlYid4CHePPAP7uREwK1F1Lq4PQb8BoIKs%2Bvy8%2FJ%2FFzYO4OiJFBI%2BipLROU0j58Z0DbwHWmWiZ57gFDrg0ls3JRlwPaLkF6hA4DWkWcQD2ryOFE%2FirzfGSR%2BofCzcxl0nCJ23QvjMaisLgxxe%2F%2BI8G%2F5ApKexkpqpufI3uCuTUoaTOjdETShwigxo4Z4JEfYJXFM3C2SoBVBgF7PlCoeXbhCsnPEzP45k8JU3EIHW7zQnJQESEwzAqrenp3n46Ck1DIJTiQmeRP1OyYz4ug5c2pvzNgK4B2XlFSNdFi85qy7nxc1c6aoAtDBCoSeX98CfkGhT06QXjc9sxTO64XhWB9QqIBp3b5rD%2BcHAX0psZorInZPfK4zLfrpN2d9%2B7QpFyp8AtuZV6k2YQiDsP9labxkLCGrXT5cJv3CKqIP9BlXVlYtF6jYk9GY%2BZjKpSV62rJlEhhnjkD85GV57pK5rAD1h2b%2BEHV6dMfrAwr8KHwAY6pgE%2BjlAFTEdSa3sCt0tDWD%2B1JcmL%2FlmMXV8wDrd3FdWpRgVDvSE03oGb6R9Za0hrlRyOXUvHjFGadnbU%2BWypnOL0IqOqVNY7wRuAV7sbQjCUM62morGxfnQ4VLoLqPz1CeljCSHICZI58UIJn2MrFwWfl2fuorT6BOVr3280P6pO4H3LLhty9sr5Ko67e%2FiXsk2k8uEbv3XwAgeRokc7HZnVJ%2FLOMWZ2&X-Amz-Signature=cc4c02a8a1763b6a76b82116beb847ec710ce46d0f7a79c4c657d0a7b1ba2b83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
