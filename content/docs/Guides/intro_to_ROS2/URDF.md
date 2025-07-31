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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PT4IRBC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4cUQEJhmfzqeAHwkaF1lbbqnEWrVzY5W9lnwzae%2BZRAiAr1mdE626Nzv9K%2B%2B29WWzP63gdRXxzrpewEAzy97szmiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaMhC%2BUNr%2Fga6B7xqKtwDvWjo6uSOryxoDKvVQTt1TcCot4RJi5jgvB65E3fL7FJkaVAyo%2FcSDMzZ17bb%2FCowq2ZBTBrqLYEeaOeNUXiuNjvQNNJSrUTE77n5Ew8sY1ovAZYSM0oWfArSBbo760ARF0mNsu%2Bg8uSrhlYbsTf3G1rk2qMeUx55gn%2FqOxjbHuv57NFeAMblhKIz1%2Fj6P1RoK0X2mBnroYQHa7XV9vCdK%2F9Je3KYLvGv0aymmlPAxVNKnIJQihOQJZ9WzCgbYHXr4Zrh55wdk9AKQXaOrDl1blIhQmKPkdXN54Ocsq8OQNGRGh6cz0Olvq3RBmNF1A3%2B9oVkaGe5Aj%2F3mEoPMNfOYvYt%2FlqGpt0tenHmEuve9Mrq0QpH0SF3TqkyyYkvsAIPhSI9rARJFQl%2Fp7dIMRUw4QcyCdyj%2BXqFSG48BsMBGwmsqTHToqHjk0mX5gntOUnrJOpyWqwDs0%2Fd78pA7qeTQxJWwDZ6DhCprCXJxJvmPxeuF0dYrq2gyk6ri8p6mbKQlz7r5Gy9Ve6SRo7YnxPkch%2BNV8AibXxJpRrlQsHiUzRNlz2GB5G%2FkyBD6UhnUZxGXOR5Fz5kA7Yskan3TTP0aA3U1RVb1eIObNIKgrDF9sT7ttTMeKytl6%2FghWIwgcyrxAY6pgFKjoHbP7XV%2B96Y0RmOTXHikpCsgLQTqB0e%2BRs6djaAxGLuKHP9SdmuZpDdQGLVxSfm7so8qWnzFsUt9uV1RjFqyQeiI%2BeKyUyfeRAKTo%2FagkMhlyUcB4IEkZyga63Ul%2FjjtA0wtyDii0%2FSB9VCVbh7Y9xRWKUy5xJTFW9yvXeXi1DHgmcM%2BVWMp9yIj23RAbL6ADN80R1K9vwVT0iYVDsSkPlGb8nc&X-Amz-Signature=4402347b27121757974f5a2f0ca3885c62e7412faf5daa1918932945bece9fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PT4IRBC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4cUQEJhmfzqeAHwkaF1lbbqnEWrVzY5W9lnwzae%2BZRAiAr1mdE626Nzv9K%2B%2B29WWzP63gdRXxzrpewEAzy97szmiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaMhC%2BUNr%2Fga6B7xqKtwDvWjo6uSOryxoDKvVQTt1TcCot4RJi5jgvB65E3fL7FJkaVAyo%2FcSDMzZ17bb%2FCowq2ZBTBrqLYEeaOeNUXiuNjvQNNJSrUTE77n5Ew8sY1ovAZYSM0oWfArSBbo760ARF0mNsu%2Bg8uSrhlYbsTf3G1rk2qMeUx55gn%2FqOxjbHuv57NFeAMblhKIz1%2Fj6P1RoK0X2mBnroYQHa7XV9vCdK%2F9Je3KYLvGv0aymmlPAxVNKnIJQihOQJZ9WzCgbYHXr4Zrh55wdk9AKQXaOrDl1blIhQmKPkdXN54Ocsq8OQNGRGh6cz0Olvq3RBmNF1A3%2B9oVkaGe5Aj%2F3mEoPMNfOYvYt%2FlqGpt0tenHmEuve9Mrq0QpH0SF3TqkyyYkvsAIPhSI9rARJFQl%2Fp7dIMRUw4QcyCdyj%2BXqFSG48BsMBGwmsqTHToqHjk0mX5gntOUnrJOpyWqwDs0%2Fd78pA7qeTQxJWwDZ6DhCprCXJxJvmPxeuF0dYrq2gyk6ri8p6mbKQlz7r5Gy9Ve6SRo7YnxPkch%2BNV8AibXxJpRrlQsHiUzRNlz2GB5G%2FkyBD6UhnUZxGXOR5Fz5kA7Yskan3TTP0aA3U1RVb1eIObNIKgrDF9sT7ttTMeKytl6%2FghWIwgcyrxAY6pgFKjoHbP7XV%2B96Y0RmOTXHikpCsgLQTqB0e%2BRs6djaAxGLuKHP9SdmuZpDdQGLVxSfm7so8qWnzFsUt9uV1RjFqyQeiI%2BeKyUyfeRAKTo%2FagkMhlyUcB4IEkZyga63Ul%2FjjtA0wtyDii0%2FSB9VCVbh7Y9xRWKUy5xJTFW9yvXeXi1DHgmcM%2BVWMp9yIj23RAbL6ADN80R1K9vwVT0iYVDsSkPlGb8nc&X-Amz-Signature=f7f2bf0bffd0e9f6d8d1b0b17d779290d6c02b6aca74dd1b112598c04815a024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
