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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQUJ2ZR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCXeQlmEgrsWU40hFQRLHvi6oVbrI%2B58s8L0RZ5muWWKwIgE2pMl9p7w6W%2BBSpcIl%2Fv7LiWeLo4Ycjn2PRHYfN2aq4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWmHTmrdCdutlKI%2BSrcA1dTtfwcDvj2t2q1rI%2FtbKFbL7cwT6dv4PcKjeyA1KnBMRXks36GNfxj%2F%2BRnG5rdXmPKGMN9aRp7mYe%2Bj1LKQn6vkhqtndJZzk0xSUr0mrYkyTOWViHL7LhlLoAlFmSpIzyHNsBv3SEfaqwuVZLI2pLbRi4Pqi%2B5KVxx5jR2rW34edow3u%2BVo2LY2v6oJUETYDFVYJNHGTTeZCjzqK5WfshkpB2J1IYF42%2FiSg6UTpH6WP6%2FEDcSbOujMUXjNEm3FJBNJdV2fzZJLyPq2jkcwbRniRx9xUOL%2FChSrnIydSm%2B3tn%2FnIE%2F5dHw01S9GL3c69DGvImXJPPHyvnvjoDvvWDaVKjz97%2BSgyaI4Dj8t7kCy%2BtVWUkMMCRYsh0Ry5wCPHtKdAgS7JzYcv6ZFih%2FDp%2F45GzRG7Xal1kEWqnypqW4rtRquK5J6g0LKIngyeWZ%2F5jYbbg1nTmHbzYaFrizsBZ6ROpcLkOYrhJdOgpuN2PdlpuXG5kATsU2HUay%2B6M1HNE2SYNnZfPcrRdtHLGftgMXpaoHuK9FuiWYVCNRcRlKhCutJqMLh%2Bs7XjvjCqF98aK2vx1Ot6p%2BO3DVIqU8cLhjCWNGD%2FaIOfY4Ck1H5Qnohmh6UViooeunJqHYMOG5sr8GOqUBdrnx1SJ%2BaSjLR7FplA7novJV2Ey8vUOjU57leA5txjCZ66OwkvtkfMrZXCgiH4UxYis8aQ1DBw%2FfPGKo1Wu2S%2Bj3hnI8Qab5BTkoc9xx84BBQYhOV4%2Bi%2F7bL6%2FSspCzFSWGMJoWUKDx6KAogg3suLksTQzbR78v9jGtW0hrncfKP82ESnGJqShXzbwqR7VQBnzM%2FEt0QFRsOYTxWtF0%2BmbBiNnuk&X-Amz-Signature=a76b4a23c6fe3de0e24fcae3cc3fb819583acde41042a6db529136be091c9bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQUJ2ZR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCXeQlmEgrsWU40hFQRLHvi6oVbrI%2B58s8L0RZ5muWWKwIgE2pMl9p7w6W%2BBSpcIl%2Fv7LiWeLo4Ycjn2PRHYfN2aq4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWmHTmrdCdutlKI%2BSrcA1dTtfwcDvj2t2q1rI%2FtbKFbL7cwT6dv4PcKjeyA1KnBMRXks36GNfxj%2F%2BRnG5rdXmPKGMN9aRp7mYe%2Bj1LKQn6vkhqtndJZzk0xSUr0mrYkyTOWViHL7LhlLoAlFmSpIzyHNsBv3SEfaqwuVZLI2pLbRi4Pqi%2B5KVxx5jR2rW34edow3u%2BVo2LY2v6oJUETYDFVYJNHGTTeZCjzqK5WfshkpB2J1IYF42%2FiSg6UTpH6WP6%2FEDcSbOujMUXjNEm3FJBNJdV2fzZJLyPq2jkcwbRniRx9xUOL%2FChSrnIydSm%2B3tn%2FnIE%2F5dHw01S9GL3c69DGvImXJPPHyvnvjoDvvWDaVKjz97%2BSgyaI4Dj8t7kCy%2BtVWUkMMCRYsh0Ry5wCPHtKdAgS7JzYcv6ZFih%2FDp%2F45GzRG7Xal1kEWqnypqW4rtRquK5J6g0LKIngyeWZ%2F5jYbbg1nTmHbzYaFrizsBZ6ROpcLkOYrhJdOgpuN2PdlpuXG5kATsU2HUay%2B6M1HNE2SYNnZfPcrRdtHLGftgMXpaoHuK9FuiWYVCNRcRlKhCutJqMLh%2Bs7XjvjCqF98aK2vx1Ot6p%2BO3DVIqU8cLhjCWNGD%2FaIOfY4Ck1H5Qnohmh6UViooeunJqHYMOG5sr8GOqUBdrnx1SJ%2BaSjLR7FplA7novJV2Ey8vUOjU57leA5txjCZ66OwkvtkfMrZXCgiH4UxYis8aQ1DBw%2FfPGKo1Wu2S%2Bj3hnI8Qab5BTkoc9xx84BBQYhOV4%2Bi%2F7bL6%2FSspCzFSWGMJoWUKDx6KAogg3suLksTQzbR78v9jGtW0hrncfKP82ESnGJqShXzbwqR7VQBnzM%2FEt0QFRsOYTxWtF0%2BmbBiNnuk&X-Amz-Signature=de308698e3641d258de678217c1cdfd917f4ecb7a90cad7316e486e092d07185&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
