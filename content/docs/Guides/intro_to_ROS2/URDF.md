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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E36K32E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAvsURblpz3KBWgrrKG5L%2FH0AOL%2Ftq7icA7%2BWEi%2BzjswAiBJT1bcnUfQch%2BiofsI%2FbkW34v3094PqbWLYVNqIwJweir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM3Eu79C9ocOrI6PJtKtwD260cVbsTeA7CSUlokiVawwNAnwXLFj1z3C6HGnrtzdASP%2F4XqUr36STTyN8fU3axfEI7qFDQnYex7N3MhJQRGr0WWxgTW5ik8k%2FfVqz6ZSGWgjOdQiF8%2FafT5z8Cbq4lKFlY0Z30Hvqbm7VyKrz9pg4gSe0W1%2BNH0RYQiGs%2Bfdec%2FZwYVtY8X3oOkDawj9Z%2BgC4LyUKa788QY673ZA7FFzcVAsBZUCV2aCV3Lhf41IODiteE0wg7sQeIKIIVLrO9Wbaz%2Bvt0rVPv2s3DaPJk3Z2groafvOmi9khBApt8z%2B%2FCME%2BXVxUdfcl%2FmpE0HkFncHHYwvjJiuwE8PphKnNEnty4lImTM3Xw1hzgC4PwVeflHYRBqHU2lcPDV4TGzdPT%2FD7T4h4Dr2gb1xJwCOM8%2BQ2pUB6C3rzSE%2F6Jb45rFS8SVynHAz26MknwA%2BGPATqSUBEkCffwLD5WcqSAH8alRmpAjmc8YqvjdhJLuMlXfaF3Ty4BHZ%2FaMQBiPZiwFITs5WLhWzDS3HczgC6ag3xfF3%2BtGzmKvwnwFe0OSJgsQEYL4%2FKuz%2FkVVyGI3JZve9Y63yHGE85hPTJi8Y1ex%2FTB7Zr7QJ7Gyp9lOMezJ%2BNufcM3aZkKFaxONqa32ggwh%2Fb%2BvQY6pgHt04DoxsEZnPSBUv2in%2FRMwHuZgMfzOajMdKhJTIee%2BFDkgamuBWjKlskt8feUBw%2Bng1I%2BBLjLVnDlLYws%2FXqqbESg4BmIbISFt5WjqW7v2xGsXpBBCqbvUHV8xk1wcCApUKfvW0X2oKeSCSQDAyl2L4yYjD8%2Bzgz4gymQnNeQE6jUQ3q%2B5qcBzkVEez5xHVFce26OAgZ6Ky%2FrtM6B57RENutGU0Ha&X-Amz-Signature=0c367bd6ebfa601cb6a9f3c5246514d7c4c735b3dd06e75f3608b7f9c9ab07a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E36K32E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAvsURblpz3KBWgrrKG5L%2FH0AOL%2Ftq7icA7%2BWEi%2BzjswAiBJT1bcnUfQch%2BiofsI%2FbkW34v3094PqbWLYVNqIwJweir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM3Eu79C9ocOrI6PJtKtwD260cVbsTeA7CSUlokiVawwNAnwXLFj1z3C6HGnrtzdASP%2F4XqUr36STTyN8fU3axfEI7qFDQnYex7N3MhJQRGr0WWxgTW5ik8k%2FfVqz6ZSGWgjOdQiF8%2FafT5z8Cbq4lKFlY0Z30Hvqbm7VyKrz9pg4gSe0W1%2BNH0RYQiGs%2Bfdec%2FZwYVtY8X3oOkDawj9Z%2BgC4LyUKa788QY673ZA7FFzcVAsBZUCV2aCV3Lhf41IODiteE0wg7sQeIKIIVLrO9Wbaz%2Bvt0rVPv2s3DaPJk3Z2groafvOmi9khBApt8z%2B%2FCME%2BXVxUdfcl%2FmpE0HkFncHHYwvjJiuwE8PphKnNEnty4lImTM3Xw1hzgC4PwVeflHYRBqHU2lcPDV4TGzdPT%2FD7T4h4Dr2gb1xJwCOM8%2BQ2pUB6C3rzSE%2F6Jb45rFS8SVynHAz26MknwA%2BGPATqSUBEkCffwLD5WcqSAH8alRmpAjmc8YqvjdhJLuMlXfaF3Ty4BHZ%2FaMQBiPZiwFITs5WLhWzDS3HczgC6ag3xfF3%2BtGzmKvwnwFe0OSJgsQEYL4%2FKuz%2FkVVyGI3JZve9Y63yHGE85hPTJi8Y1ex%2FTB7Zr7QJ7Gyp9lOMezJ%2BNufcM3aZkKFaxONqa32ggwh%2Fb%2BvQY6pgHt04DoxsEZnPSBUv2in%2FRMwHuZgMfzOajMdKhJTIee%2BFDkgamuBWjKlskt8feUBw%2Bng1I%2BBLjLVnDlLYws%2FXqqbESg4BmIbISFt5WjqW7v2xGsXpBBCqbvUHV8xk1wcCApUKfvW0X2oKeSCSQDAyl2L4yYjD8%2Bzgz4gymQnNeQE6jUQ3q%2B5qcBzkVEez5xHVFce26OAgZ6Ky%2FrtM6B57RENutGU0Ha&X-Amz-Signature=742bf6515e65dede97ddace7a511ebcb58ef9b8f04514046b60f1776a7cfa254&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
