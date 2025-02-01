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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4HV3JT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSaSer%2F1siV4NotAGi5SnOMHDKzb0lYoJikaSJmhXdNwIhAK%2FdoJPKEKKRJ62MW8QdK%2B4zgw3ydQDlcIQ%2FOZKxArxcKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzULHc9QU54p0mS1bgq3AOS48F7ol3w6EYDlv4Hv30Pbp%2FsC2MqatoL24w8LqiI7Rueg8qzqdaAbR6O1yhMRiH%2BYsvd%2FJ3zac7VPc8850v%2FvXFee%2FP30fSa4jqbFk1v6iWgaWScMPlMaweF07PzJIW9Vt%2BpYPUsF3fHhUA%2Bsrw6pS9UWEJ6SQuggUI1m3P5OAEMKSuhXlaQ9KnvV2Ydo42NZl7qxLGJJeifK972%2F%2Fw9ieBQIChjO88FA%2F8LYWZ5i0KOG1JnQLkAjl4lJi7S1OOqYAkzVvct6BLP38daYqfBWlD3WLaYxPO8pEp1TmAnkKSx0woEIGgoZd1jlGh%2B5wAVcACGn9N%2FtM9gK0q3BmYhE%2BM5kHwuaCOGYyT1eA50R21SzC5OAhYaaYaZKzVwbh5yC24w%2BGWbDb4FtYjwwnFQIZG%2FMJxPTwMyya0KGl68M3Hd0qidyhoAfgwyKzqarx0KTaG1VkiI3GJC1AkNTe%2FiySnwOaahWUsv0aTyytwAxgVh17w8k3H%2FlLmVWdJb8EZgtvp%2FdNj7cvqHvMuPPRpY4i2gFOEk3WDS63ae8bDyn2LZUEQq3%2FFpzqQDRcL9XBHhMmRKrb8hD1VKMumpzHxZ%2B6oM9yQxcu7V2FT4HfpOB%2BNhpGtRn1zI0kaTuzDMlfq8BjqkAQ39LjhRmz7C3Q1nydJNJUVRs%2BDQL2jUniRwf0xAoafHWM7mftyk0OOMm3njysZx7C0M%2BBB4oP4DKoOkipsNHqKB4VHbno2cZq2YCx21XrOkYGY7UHgY5HM7Jz6KFs%2BjqBCw1IjiKSh87ElXZJVtj7ZfBqdKXOXTqzs8OV%2F2pDSDxCJQ6Fupt6N6zGwXhkSYgAQNgVqQHDYrzFre%2Fi2SnJY%2BmHyw&X-Amz-Signature=b7e861255e3773f83c824cfbb0ff99659a900d23ead76765090abdce0044230b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4HV3JT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSaSer%2F1siV4NotAGi5SnOMHDKzb0lYoJikaSJmhXdNwIhAK%2FdoJPKEKKRJ62MW8QdK%2B4zgw3ydQDlcIQ%2FOZKxArxcKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzULHc9QU54p0mS1bgq3AOS48F7ol3w6EYDlv4Hv30Pbp%2FsC2MqatoL24w8LqiI7Rueg8qzqdaAbR6O1yhMRiH%2BYsvd%2FJ3zac7VPc8850v%2FvXFee%2FP30fSa4jqbFk1v6iWgaWScMPlMaweF07PzJIW9Vt%2BpYPUsF3fHhUA%2Bsrw6pS9UWEJ6SQuggUI1m3P5OAEMKSuhXlaQ9KnvV2Ydo42NZl7qxLGJJeifK972%2F%2Fw9ieBQIChjO88FA%2F8LYWZ5i0KOG1JnQLkAjl4lJi7S1OOqYAkzVvct6BLP38daYqfBWlD3WLaYxPO8pEp1TmAnkKSx0woEIGgoZd1jlGh%2B5wAVcACGn9N%2FtM9gK0q3BmYhE%2BM5kHwuaCOGYyT1eA50R21SzC5OAhYaaYaZKzVwbh5yC24w%2BGWbDb4FtYjwwnFQIZG%2FMJxPTwMyya0KGl68M3Hd0qidyhoAfgwyKzqarx0KTaG1VkiI3GJC1AkNTe%2FiySnwOaahWUsv0aTyytwAxgVh17w8k3H%2FlLmVWdJb8EZgtvp%2FdNj7cvqHvMuPPRpY4i2gFOEk3WDS63ae8bDyn2LZUEQq3%2FFpzqQDRcL9XBHhMmRKrb8hD1VKMumpzHxZ%2B6oM9yQxcu7V2FT4HfpOB%2BNhpGtRn1zI0kaTuzDMlfq8BjqkAQ39LjhRmz7C3Q1nydJNJUVRs%2BDQL2jUniRwf0xAoafHWM7mftyk0OOMm3njysZx7C0M%2BBB4oP4DKoOkipsNHqKB4VHbno2cZq2YCx21XrOkYGY7UHgY5HM7Jz6KFs%2BjqBCw1IjiKSh87ElXZJVtj7ZfBqdKXOXTqzs8OV%2F2pDSDxCJQ6Fupt6N6zGwXhkSYgAQNgVqQHDYrzFre%2Fi2SnJY%2BmHyw&X-Amz-Signature=890979c3cdfdb20a6cefd92aec850e42c33be8ef2b231c44f2ee0d971c294228&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
