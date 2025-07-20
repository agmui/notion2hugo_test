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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODTGYT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGyt2c0uNysOg8SQ4vaRT8XO%2FtE7RudRzUCSYm8LsihAiEA7DEU7AIRo56%2BD8%2BollHYx1Olk9IIvl9IWGfpX9VAUs8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2xpVRALyi3s9gn1SrcA9McQxtWnUGS7vxmJfWjWXOAK1TBtACqfJKNh4TqcatsYWiiIHm8zdQNX6SP1ijnpvKUJ%2F7ZkK3DxwbByMy6sizZgT6aWrCJDoqql1nQHXbszrh8D55Hc%2Bl%2B8p%2FKUWfca1f%2BkKbg6jEQSQb2V5QN51QklO24Hx939J4hnsKqME6D9u906dr97NRRV6Na72J%2FuILT8ibhf2GDgN3kdCazmelvElG0hyGc8X3MmUrlZ6mKp9bwCFpkiA3iCm2VlYttKLli56sptoxbSPZKs7NZCyK7d5xmOTaro4%2FZ0PalJwAQb5IPChnRc2lwMNailiFOwDefbeGPDxiKeMcw%2Fiw%2F4PvFUC38fzTuirbmDzNpHD%2BYMzkrT5ZnspNqzplEMdhwHulBUFI%2FNzpTTagTbuBdvyQAjADNgpHS6%2B4elM1SHAZiVUkw9wnRCfL4M6d9HDSOHoFwIjD0SaZXwipZU0hgBmj81dEZwQCsrReeCmS3BBYlXKMmR7RxmW66PJCjUFm5hcf86U0SqTKdibBNEiIV4XbaVL1cqQ0t2C637HTn9UOWjaLm8rXUhyVzQOOVN9yTCE8vads3h2IwjRWYo%2BgXkf9PJCbvGvujjwS0N%2FYGmL69LJL8APwujVDWH1d%2BMPzV88MGOqUB1iNiTcRYlwtG2LnE3fSYzILIK0frsQDb5QBSNIM%2Fcf%2BLUnlWiBcZmWawJN6IJmS%2BoxOAjn53xa7K4244yut6yH9%2FQHcMTqKXP9Ib8rk2q2stKuNuI8AIVRLLmqHjAceIx3fn2iq02E2r1rlQ7kfVe7qcQ%2BI%2FAkCqejRiwQjp%2Fp1kHNGhxAnCIGXvaZbpo5ObaFWs1NLwi9jO0FZ3Se90oayuRNVc&X-Amz-Signature=4632ffc215359652e67e11173871a193637290b476eedf5874db41c44470b865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODTGYT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGyt2c0uNysOg8SQ4vaRT8XO%2FtE7RudRzUCSYm8LsihAiEA7DEU7AIRo56%2BD8%2BollHYx1Olk9IIvl9IWGfpX9VAUs8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2xpVRALyi3s9gn1SrcA9McQxtWnUGS7vxmJfWjWXOAK1TBtACqfJKNh4TqcatsYWiiIHm8zdQNX6SP1ijnpvKUJ%2F7ZkK3DxwbByMy6sizZgT6aWrCJDoqql1nQHXbszrh8D55Hc%2Bl%2B8p%2FKUWfca1f%2BkKbg6jEQSQb2V5QN51QklO24Hx939J4hnsKqME6D9u906dr97NRRV6Na72J%2FuILT8ibhf2GDgN3kdCazmelvElG0hyGc8X3MmUrlZ6mKp9bwCFpkiA3iCm2VlYttKLli56sptoxbSPZKs7NZCyK7d5xmOTaro4%2FZ0PalJwAQb5IPChnRc2lwMNailiFOwDefbeGPDxiKeMcw%2Fiw%2F4PvFUC38fzTuirbmDzNpHD%2BYMzkrT5ZnspNqzplEMdhwHulBUFI%2FNzpTTagTbuBdvyQAjADNgpHS6%2B4elM1SHAZiVUkw9wnRCfL4M6d9HDSOHoFwIjD0SaZXwipZU0hgBmj81dEZwQCsrReeCmS3BBYlXKMmR7RxmW66PJCjUFm5hcf86U0SqTKdibBNEiIV4XbaVL1cqQ0t2C637HTn9UOWjaLm8rXUhyVzQOOVN9yTCE8vads3h2IwjRWYo%2BgXkf9PJCbvGvujjwS0N%2FYGmL69LJL8APwujVDWH1d%2BMPzV88MGOqUB1iNiTcRYlwtG2LnE3fSYzILIK0frsQDb5QBSNIM%2Fcf%2BLUnlWiBcZmWawJN6IJmS%2BoxOAjn53xa7K4244yut6yH9%2FQHcMTqKXP9Ib8rk2q2stKuNuI8AIVRLLmqHjAceIx3fn2iq02E2r1rlQ7kfVe7qcQ%2BI%2FAkCqejRiwQjp%2Fp1kHNGhxAnCIGXvaZbpo5ObaFWs1NLwi9jO0FZ3Se90oayuRNVc&X-Amz-Signature=4f922e50a762c09c6d84d01625d1824368a590ea0c58150b41f7fe9d962fed52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
