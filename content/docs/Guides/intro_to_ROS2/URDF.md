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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZVEJRY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDkJNhOHafTCy6PYYPHtKxkYvZmQTkSvE%2BvlpotL39lngIgZ0IWrAnMucP%2Bh8je9UUfQ%2B5wzJYjQCa0jGh9uCQiYTUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCakLf%2FJTKu6rqIKLCrcA2thU8oFUbK9nTA9VskYnxPiushH9DmIVmeOCfurvbTujS71cE9biBXFzaNeUxBuM5dYcUBrlAy3dlanqm3t2r1Ck5lX38jx2qbs3HBGSvlZEn6MrARLP8K%2F7PlOk1agDvRxABLyqVS4cREzXok8LkIEHQbjV86PUYMhagJkUuTMiEu5bdzEaPheJxPowV5SptbRwjskq4jMGp%2BcltPiuX608r6iJF9T2P5varWGWREQJA%2FgLZUUU9Q%2F8HLc6WQhkkHLKqX78ARKAfPqU5miDENTtjRicQ0fNZfCAVmmE7FTn3VKMZTLWS84eflB4SSHKx3OnEL%2Bmpcvx1xQHAtGVPEE6Zph3iffscaTZfi0YOR9kOnzK4PrtkM4%2BUgKktSlkaIwqv8wJGmtpbuzj973LEgeYh2F6TIis%2Ff%2Bl%2FxcQ6DYgydOzMZYRr4kNUNpbKPoaPie52qp80XdL3YhEBA2kSnxeEkm4099pZ7d4vyJ4ijh3P%2BI%2FTV6hruaE9dZ3HEfpK3Ni6pnUMY9q5zeK%2F4jzRL6NZAE2Jk1XsKg50iECV2bpKuswqrhWhwzyzwO7NP1NVQ9LH7p52kTrdF%2BdFBlHV%2BdC9KJNHi5538u2gbKpxhdkaHVFJFL1MCvJiYEMNXW0MEGOqUBXndd2ZQ7SRIZUc6g9kVl2SZqmtPJakANysQCrGC6MAIlQzp19BQj2CBM%2BEkrpaZdkBnEL6K6ooGtpcnsaJaaECXehiFsQVbr9gqbtpmm8ydEzwvH84YKxW%2B34BQSshOov8B71k6WH7FNrEWX2ZDwwdqTv6CUkfBvHWBb5UpGBD8SzQ4BF9PsYyrywqfxF4UKPhQ8i45HGRHIJ19P7LsXylycddVW&X-Amz-Signature=bf8583d1e77ead61b7f41e9d5771822368689352a4e091591da754c68d36004e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZVEJRY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDkJNhOHafTCy6PYYPHtKxkYvZmQTkSvE%2BvlpotL39lngIgZ0IWrAnMucP%2Bh8je9UUfQ%2B5wzJYjQCa0jGh9uCQiYTUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCakLf%2FJTKu6rqIKLCrcA2thU8oFUbK9nTA9VskYnxPiushH9DmIVmeOCfurvbTujS71cE9biBXFzaNeUxBuM5dYcUBrlAy3dlanqm3t2r1Ck5lX38jx2qbs3HBGSvlZEn6MrARLP8K%2F7PlOk1agDvRxABLyqVS4cREzXok8LkIEHQbjV86PUYMhagJkUuTMiEu5bdzEaPheJxPowV5SptbRwjskq4jMGp%2BcltPiuX608r6iJF9T2P5varWGWREQJA%2FgLZUUU9Q%2F8HLc6WQhkkHLKqX78ARKAfPqU5miDENTtjRicQ0fNZfCAVmmE7FTn3VKMZTLWS84eflB4SSHKx3OnEL%2Bmpcvx1xQHAtGVPEE6Zph3iffscaTZfi0YOR9kOnzK4PrtkM4%2BUgKktSlkaIwqv8wJGmtpbuzj973LEgeYh2F6TIis%2Ff%2Bl%2FxcQ6DYgydOzMZYRr4kNUNpbKPoaPie52qp80XdL3YhEBA2kSnxeEkm4099pZ7d4vyJ4ijh3P%2BI%2FTV6hruaE9dZ3HEfpK3Ni6pnUMY9q5zeK%2F4jzRL6NZAE2Jk1XsKg50iECV2bpKuswqrhWhwzyzwO7NP1NVQ9LH7p52kTrdF%2BdFBlHV%2BdC9KJNHi5538u2gbKpxhdkaHVFJFL1MCvJiYEMNXW0MEGOqUBXndd2ZQ7SRIZUc6g9kVl2SZqmtPJakANysQCrGC6MAIlQzp19BQj2CBM%2BEkrpaZdkBnEL6K6ooGtpcnsaJaaECXehiFsQVbr9gqbtpmm8ydEzwvH84YKxW%2B34BQSshOov8B71k6WH7FNrEWX2ZDwwdqTv6CUkfBvHWBb5UpGBD8SzQ4BF9PsYyrywqfxF4UKPhQ8i45HGRHIJ19P7LsXylycddVW&X-Amz-Signature=a782d205fa369996352b3fb5f1d489da49df53170d22eb5e4f67459e1fd9e396&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
