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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFBJQC3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIzhi2hnrjpkdobYNetgiXgCrIgqAzkVM92aKkS%2BMD4AiAJUPAWcTq9p6%2BYK8RtMk5rXIOLeF32y7LrT7IxMsY2Kyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMo5PUqlDSocx%2FmSKNKtwDhmKkEquyRtV7nAGuYp6cHshW5wXO1geKN%2BTzcThoZwDeM2k9rZgNnHuBF1BtjozhHD9676zZkCoo0vuEcChJ04%2FPjh78s2hVllbg9vEbkvVAaF112EXe2JdZaDyjqoE0mYafdzKkBB2uN2JUZ8xei%2Bw5Qpq4MJmaPDTreyYvRcY5TS0bes6hzK0slv2q50XAKL1e1hN7mcbOaPvW30YAstMZmcwOZukXbNooK4eLQf8A%2FD2aHk11aqHD5Gt7s7KN%2BHPOMz67MoJ62Uo3aPll7Y1RWiibmzgxkeetdZ1eX1f5SLrQBlOwatC8IYK6zztFOP3HEM5HNmJrp4qBy7Cp5JV7UPwsinKwq6xwrX7wnaIZpWZf01HkpZPNBdB2TpoCdgmxvxvwbbC6tTr%2B%2FRmPHrxMAAY9L4sx7DqwFLsQ0rgLcnqiq%2FZ%2BcMiAmO%2B2BU8dkwGWRdK9ob4M8k6ft8c5%2FRbKw1CpuqI5PCFpU8lPNlxg2cSyV3kw1Ya83oALtXodE4RtPkdqJKZQQk6sCEG%2FuS1rw6tVHgrxiVchdQgu%2FGQkw3jBEDeA%2B7I0RBeEgGQGZrnHehM8cJW3YNwvsmNrgAIuarBb6Lfem0L1K57IoNPX8hh7ZdOv327zPYkw5OaowQY6pgHHx9jMh0nR%2BcNdPCiFHz%2BNL5G3NZTRcA0d%2FRtPDqDGkEv2VOpDLHgoXBtQUIX9NNXXtVaeLiOpw6WObO26Dlo4Ky6ELrBEPk9rt87pT10MsqcsrGw%2FEh47fD%2FXcNYHoOJc5DVc4zIe5k%2B%2FgxFzyg%2FTQVjjRSte2BZs11bk%2BzRbopeR9nbkz8DWlsvX0Z4tM%2FvJk6kKfFiaTJfrSt%2BfJvNMqb0JkrEo&X-Amz-Signature=a3a912810b6889eaf74953dfd642437f15ceada49ded8ca0a5e733a2be323a51&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFBJQC3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIzhi2hnrjpkdobYNetgiXgCrIgqAzkVM92aKkS%2BMD4AiAJUPAWcTq9p6%2BYK8RtMk5rXIOLeF32y7LrT7IxMsY2Kyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMo5PUqlDSocx%2FmSKNKtwDhmKkEquyRtV7nAGuYp6cHshW5wXO1geKN%2BTzcThoZwDeM2k9rZgNnHuBF1BtjozhHD9676zZkCoo0vuEcChJ04%2FPjh78s2hVllbg9vEbkvVAaF112EXe2JdZaDyjqoE0mYafdzKkBB2uN2JUZ8xei%2Bw5Qpq4MJmaPDTreyYvRcY5TS0bes6hzK0slv2q50XAKL1e1hN7mcbOaPvW30YAstMZmcwOZukXbNooK4eLQf8A%2FD2aHk11aqHD5Gt7s7KN%2BHPOMz67MoJ62Uo3aPll7Y1RWiibmzgxkeetdZ1eX1f5SLrQBlOwatC8IYK6zztFOP3HEM5HNmJrp4qBy7Cp5JV7UPwsinKwq6xwrX7wnaIZpWZf01HkpZPNBdB2TpoCdgmxvxvwbbC6tTr%2B%2FRmPHrxMAAY9L4sx7DqwFLsQ0rgLcnqiq%2FZ%2BcMiAmO%2B2BU8dkwGWRdK9ob4M8k6ft8c5%2FRbKw1CpuqI5PCFpU8lPNlxg2cSyV3kw1Ya83oALtXodE4RtPkdqJKZQQk6sCEG%2FuS1rw6tVHgrxiVchdQgu%2FGQkw3jBEDeA%2B7I0RBeEgGQGZrnHehM8cJW3YNwvsmNrgAIuarBb6Lfem0L1K57IoNPX8hh7ZdOv327zPYkw5OaowQY6pgHHx9jMh0nR%2BcNdPCiFHz%2BNL5G3NZTRcA0d%2FRtPDqDGkEv2VOpDLHgoXBtQUIX9NNXXtVaeLiOpw6WObO26Dlo4Ky6ELrBEPk9rt87pT10MsqcsrGw%2FEh47fD%2FXcNYHoOJc5DVc4zIe5k%2B%2FgxFzyg%2FTQVjjRSte2BZs11bk%2BzRbopeR9nbkz8DWlsvX0Z4tM%2FvJk6kKfFiaTJfrSt%2BfJvNMqb0JkrEo&X-Amz-Signature=928fb21f2cbb01c140c5e3ceee9bfb3891345ac4d323dd85c42b9076758a3500&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
