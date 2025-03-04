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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKA44LI7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FxbQ%2Fz2nPaKl0KwAVSjto8F1hOyMmotKB32TF5FNplAiEA5DqvB8QnYAE3i3JCm2ITGAX7tjMyZicPYsBScBVLGvUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLcfU6YbBURpcVOYyrcA3k94o3S5pJS607m2L43Eqk0NO2LJUekp4TY6wy4q22xq%2BvkL2mMANsStxgGa2%2B%2BGFffoLrwHVC5S9RKRemHxbHoFCWcdJZA%2FIMXgFTxoL8RsUs19t4UtjVhPJWeUbnp78dDJ0NLt24WZX%2Fj6cRR4mPmXWlTmlnuvpoiFr5znPadJ6o6WNrxlgC0u%2Fae1MuOVCypV%2BdSACVHzp0oHiwbrJtWvx0by3aa3Ndyix6s1LY7Mp4vb3q4nqPjn3w2gjp%2FMn0xaM58hGvW4iWNq0UcENGejWSpWWlCSw8BrlRqC8ExI5gWP8Y4gCXVC8XVPuy5fLX6XOy5SV8sQzLQdmdhBn8gFKTnw4W1fZNT%2FpDLeebqwz1ryRqz43s%2B2eYqwY2qHwZE%2FLvGtrTjBqhve26%2F0ay3rjXDNvEe%2BAWVDsinHOOpBmqd0yXjv%2B2h66eXIbCMRBp94ooyXYvUWcSM96KsbtuRhczbStTdr6AWgYIgZpimF2LMM5fdp6c0JeWWGdPDV%2BgRZJnT8JFLLl1c3Zb3ZpiLm51n2bvwuKmmj9LzVYuNAVTdBcudngn2TXTf1yGFI5K4mV52SiaApFxUWuTud16l6jpixDoh503w1bzUBXBFpdK2kZRtqojFuWgyMKX3nL4GOqUB9Fn0QjgXdcpq56zXOBCyf9BQ5pFf5YLoQfGOXhMStVwJQEWY63x4fNxIgA5gfF2Trpqr0%2BTfSFIeXMcPJSn5Fjiue7OcbLwAVvaK8pDpW3E3MFSlL6S16yKKmJDKibk%2FxtsCpW3XXzkD7EKyJc09zhFK5gkKLvD24DF2K4RGTei8JmwiaaWjJFjqE6A0qGdJeNeBX3bALIYl64fn1swYMaXglwAI&X-Amz-Signature=3a37df2c84a0e06d0f3b0d13cebc2954d68fc3b93a1d34de32acfbed5abb1cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKA44LI7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FxbQ%2Fz2nPaKl0KwAVSjto8F1hOyMmotKB32TF5FNplAiEA5DqvB8QnYAE3i3JCm2ITGAX7tjMyZicPYsBScBVLGvUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLcfU6YbBURpcVOYyrcA3k94o3S5pJS607m2L43Eqk0NO2LJUekp4TY6wy4q22xq%2BvkL2mMANsStxgGa2%2B%2BGFffoLrwHVC5S9RKRemHxbHoFCWcdJZA%2FIMXgFTxoL8RsUs19t4UtjVhPJWeUbnp78dDJ0NLt24WZX%2Fj6cRR4mPmXWlTmlnuvpoiFr5znPadJ6o6WNrxlgC0u%2Fae1MuOVCypV%2BdSACVHzp0oHiwbrJtWvx0by3aa3Ndyix6s1LY7Mp4vb3q4nqPjn3w2gjp%2FMn0xaM58hGvW4iWNq0UcENGejWSpWWlCSw8BrlRqC8ExI5gWP8Y4gCXVC8XVPuy5fLX6XOy5SV8sQzLQdmdhBn8gFKTnw4W1fZNT%2FpDLeebqwz1ryRqz43s%2B2eYqwY2qHwZE%2FLvGtrTjBqhve26%2F0ay3rjXDNvEe%2BAWVDsinHOOpBmqd0yXjv%2B2h66eXIbCMRBp94ooyXYvUWcSM96KsbtuRhczbStTdr6AWgYIgZpimF2LMM5fdp6c0JeWWGdPDV%2BgRZJnT8JFLLl1c3Zb3ZpiLm51n2bvwuKmmj9LzVYuNAVTdBcudngn2TXTf1yGFI5K4mV52SiaApFxUWuTud16l6jpixDoh503w1bzUBXBFpdK2kZRtqojFuWgyMKX3nL4GOqUB9Fn0QjgXdcpq56zXOBCyf9BQ5pFf5YLoQfGOXhMStVwJQEWY63x4fNxIgA5gfF2Trpqr0%2BTfSFIeXMcPJSn5Fjiue7OcbLwAVvaK8pDpW3E3MFSlL6S16yKKmJDKibk%2FxtsCpW3XXzkD7EKyJc09zhFK5gkKLvD24DF2K4RGTei8JmwiaaWjJFjqE6A0qGdJeNeBX3bALIYl64fn1swYMaXglwAI&X-Amz-Signature=eb06e02eaf32e2cebaa961565fce5913126a35b66a886a04765689d0b2ba964c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
