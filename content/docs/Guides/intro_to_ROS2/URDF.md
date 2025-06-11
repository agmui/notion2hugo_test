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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT57XVDC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkZry1l0MurUtx1tUd2DHRLN%2BWXb0jfN%2FArc4%2FsEFHjAiBlXLrlNpLZahU8saPgYi5q1KXaNhz4zDYIPhu8afdIsyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwoYN%2BLwE6I2mk6TKtwDaVi%2FNFk4i3Iw468fATUZNvWeOgO0P6FAVaFXBFsS%2FsaBmCupPpQ7p%2FIsF0CVBmiUQCZgmFTIRtI11L2dQb3becfm%2BM2KB1AOepmbYeH581Ilr27X5EVLT3%2F1EjIcIkV%2BSFyo9NKOk3Tylsy398k1DUMkXqJfTzm36TV%2BBVlpwugYrOgt5xNJyzpuwY8acRDC9FylQGBs1yFWw%2BG%2BboYEYhkdqqVBn7mpXT8zY320TnfZNRmGWckUwLJP%2FzEPRv9RC4DxvMAb4lOI8439zvyZN9HJrsVxuslZ1S8kI6g7RK3bxWnoZLxIhRPRThRWudIqyFXXfAMgEWdWy3MKDLF3CjcPuwqIB4FFVwBVESaYTW9pQXp4Q%2BruRs44QaE7DaHCnY%2B06dc9ZNxkNgI53CSlg6KUQIYG3LLoVF%2BUR2UIMXjwaru1CkhxrkVwhKVZn2M8619TVKgwNDZ6lMOQ6h1RnfMz%2Fr2MxbEsuVxYRmXcj3Msaf8EAq2EQUlouf0l8B4ELDwtDpnZgxdMPWLsX%2FScxOgmvW9rrOK6VzavCbXCsdOc8uImRSBopm5ua7eS0kY1t%2Fg16ZfkLjVZwrlM5zNDi%2FK27KAJeLamqosEdqm%2BOkn7JmzleBnrIP9s2Tgw3OSiwgY6pgEgyIRYU0iZi4wXB2hoRu%2FER1JgtlssYmmb5Jl1vP0iRDh5Pt4HNhyYEVHWNVRD%2F%2BM0gXxrGFA%2Bk2fC%2Fnpi9uRi6t9OWWZhzxgvVQ%2B2WqNeY84zYtZa%2FO6%2F6xXhiMcLMim92iziirCTq8jjvbMN5LsfR1Sc0B7pe%2FDeB3lujR1BK0GTbxGgbKavZowbRVvS%2B6CIv9a3pJUIhM56Nhsw9mlOpYw3Z4lm&X-Amz-Signature=7ac47bddd2222e9836a8ba6208a3a5537e9983eddb7084e8ddf1eba132f5039a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT57XVDC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkZry1l0MurUtx1tUd2DHRLN%2BWXb0jfN%2FArc4%2FsEFHjAiBlXLrlNpLZahU8saPgYi5q1KXaNhz4zDYIPhu8afdIsyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwoYN%2BLwE6I2mk6TKtwDaVi%2FNFk4i3Iw468fATUZNvWeOgO0P6FAVaFXBFsS%2FsaBmCupPpQ7p%2FIsF0CVBmiUQCZgmFTIRtI11L2dQb3becfm%2BM2KB1AOepmbYeH581Ilr27X5EVLT3%2F1EjIcIkV%2BSFyo9NKOk3Tylsy398k1DUMkXqJfTzm36TV%2BBVlpwugYrOgt5xNJyzpuwY8acRDC9FylQGBs1yFWw%2BG%2BboYEYhkdqqVBn7mpXT8zY320TnfZNRmGWckUwLJP%2FzEPRv9RC4DxvMAb4lOI8439zvyZN9HJrsVxuslZ1S8kI6g7RK3bxWnoZLxIhRPRThRWudIqyFXXfAMgEWdWy3MKDLF3CjcPuwqIB4FFVwBVESaYTW9pQXp4Q%2BruRs44QaE7DaHCnY%2B06dc9ZNxkNgI53CSlg6KUQIYG3LLoVF%2BUR2UIMXjwaru1CkhxrkVwhKVZn2M8619TVKgwNDZ6lMOQ6h1RnfMz%2Fr2MxbEsuVxYRmXcj3Msaf8EAq2EQUlouf0l8B4ELDwtDpnZgxdMPWLsX%2FScxOgmvW9rrOK6VzavCbXCsdOc8uImRSBopm5ua7eS0kY1t%2Fg16ZfkLjVZwrlM5zNDi%2FK27KAJeLamqosEdqm%2BOkn7JmzleBnrIP9s2Tgw3OSiwgY6pgEgyIRYU0iZi4wXB2hoRu%2FER1JgtlssYmmb5Jl1vP0iRDh5Pt4HNhyYEVHWNVRD%2F%2BM0gXxrGFA%2Bk2fC%2Fnpi9uRi6t9OWWZhzxgvVQ%2B2WqNeY84zYtZa%2FO6%2F6xXhiMcLMim92iziirCTq8jjvbMN5LsfR1Sc0B7pe%2FDeB3lujR1BK0GTbxGgbKavZowbRVvS%2B6CIv9a3pJUIhM56Nhsw9mlOpYw3Z4lm&X-Amz-Signature=d17a98bd83da62d5d73798362b8410880d82f73b635faeee30538faa69f9c9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
