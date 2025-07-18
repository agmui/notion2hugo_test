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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCOPA7R%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC2eYOHANzn%2BcDlxrwl7M8O3IiIJukZ7Wk2jX6EQhftQQIhAKNvmZIHD3qHneH56CaWlGg2wWzZOQaXfSs%2BbKTAIiVQKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZJO4Hld%2B%2BmMhEXQq3APlCoMvNCf7SdLVzjTWaMm74RYWFCgUlKGGrVZHHVddEMYYkjwrv9g9IxKEohauNattJYVhsaVxug97ZpXXdQvrggH5CoWdq%2BJ10T3bidIKnLKLWj7XzapIRucyCiX03oFzuKM8mdIFFCewbMsxQlrhBmIRFWn8YTMHacyEH6%2FctDITd%2F9znL5cZ64avk%2BYdO1urpv5gsYZIPV8aQrcRlyMiABc2qy3AxyiQAhu%2FYLUMox9NhpvDumSNtyi7uCd1AagtbkDqtjI8DQSghJsZxVBpn2cFTglpgVMMuZ6EhWOg8irJzuyMkI%2F7G6FsczfyKB2Zf0Yf0SWI5v30C1ObtunNRkcBLh2XJaMmresVyLdd7aljhLUakfg2nxqvfxmhIMfPJUVrEo6lB9VY6%2FClxduLzJU7DdersiNjbjM%2FZhnBrIrqZaM6VPeT9MJjS%2FMkImQqkw8pcQLXkEtd1%2FICwzVLfZppaHgKxrutsQZOhmEOORBW3GmgdvcXPqEmwfgoe%2FKoqOGJznb7n%2BGf4ewRvqqzO5cbDlgAumcuou%2Bddhn6bSFg4XMemmOFYFTD6jN%2FK4FrMrFS%2BlB0rttH2erm0Y3pjlH5DMmnz1eCQnSSHJ%2FPG0IOvxC6OCU8hrAeTD3iOfDBjqkAewV9V%2B6nQGu3RMVS18AmhpxJnw%2FHKSFvw0SlTO0w4ShGzWv9TycMnrLzdY56M94bRStOgkOXIjXXPGmhiAVYeqmgCmkVq%2FQYP8ka8vVv4HOdE1L6oBngnN8h6pQGlY7uim2zsieVu4HV3gSyfYfiZF401At6%2FU%2B8d8dKzRgOCmxmMlnIyov3OIhWxWgrJGeZtWcl1cO4Z84%2BbWq289J%2BflKjbAD&X-Amz-Signature=f426dc587d28ef4cb7a853cfe83c95f6bbe24c15051607756f13885ea07a189d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCOPA7R%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC2eYOHANzn%2BcDlxrwl7M8O3IiIJukZ7Wk2jX6EQhftQQIhAKNvmZIHD3qHneH56CaWlGg2wWzZOQaXfSs%2BbKTAIiVQKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZJO4Hld%2B%2BmMhEXQq3APlCoMvNCf7SdLVzjTWaMm74RYWFCgUlKGGrVZHHVddEMYYkjwrv9g9IxKEohauNattJYVhsaVxug97ZpXXdQvrggH5CoWdq%2BJ10T3bidIKnLKLWj7XzapIRucyCiX03oFzuKM8mdIFFCewbMsxQlrhBmIRFWn8YTMHacyEH6%2FctDITd%2F9znL5cZ64avk%2BYdO1urpv5gsYZIPV8aQrcRlyMiABc2qy3AxyiQAhu%2FYLUMox9NhpvDumSNtyi7uCd1AagtbkDqtjI8DQSghJsZxVBpn2cFTglpgVMMuZ6EhWOg8irJzuyMkI%2F7G6FsczfyKB2Zf0Yf0SWI5v30C1ObtunNRkcBLh2XJaMmresVyLdd7aljhLUakfg2nxqvfxmhIMfPJUVrEo6lB9VY6%2FClxduLzJU7DdersiNjbjM%2FZhnBrIrqZaM6VPeT9MJjS%2FMkImQqkw8pcQLXkEtd1%2FICwzVLfZppaHgKxrutsQZOhmEOORBW3GmgdvcXPqEmwfgoe%2FKoqOGJznb7n%2BGf4ewRvqqzO5cbDlgAumcuou%2Bddhn6bSFg4XMemmOFYFTD6jN%2FK4FrMrFS%2BlB0rttH2erm0Y3pjlH5DMmnz1eCQnSSHJ%2FPG0IOvxC6OCU8hrAeTD3iOfDBjqkAewV9V%2B6nQGu3RMVS18AmhpxJnw%2FHKSFvw0SlTO0w4ShGzWv9TycMnrLzdY56M94bRStOgkOXIjXXPGmhiAVYeqmgCmkVq%2FQYP8ka8vVv4HOdE1L6oBngnN8h6pQGlY7uim2zsieVu4HV3gSyfYfiZF401At6%2FU%2B8d8dKzRgOCmxmMlnIyov3OIhWxWgrJGeZtWcl1cO4Z84%2BbWq289J%2BflKjbAD&X-Amz-Signature=c5fb27db2a4ac460a1d8e21d6ede41972b0c4e4364b4cbdce92ab41c216cb0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
