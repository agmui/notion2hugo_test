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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOICUIGM%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMeBmxyJCt1ULEK9EV2IMBs7z3AQ83ncUs6aoG159Q2AiEAhJzbkYX3Q%2BTiWUyVXwBbUyKMRWqeNnaWq%2B%2B1Nuihyn8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRUPcjUvYXPxro9OyrcA3U6ejylAV%2B%2FftaYtKNrzqu1p5g9YOCxv5sni7Mi%2FpVm4jMyfYij7ewb7oVO%2B897YrCp3MJBLmFfowTxBPhGBE3OvJJDPyOsQ1BV3zxAfH21sG1wpgIv2iT1Vi5iHemtVYdwlIczFerPxny33FklIgoVETFwr43M0PlHCaHNeHcbMTXuBAAX2JhXoITAKDqgmwUVsBOcAO%2FiJhVBmTDDgeEfgC0%2FMLEyFSiFqnIrMfCx63yxOz2fplpWlAsPvtaR9CYZqKBAqtJllMtnw7kvfxP4oJtyNsI3r0XscI9Sx5flS7sMuwVZPleTkjkEA3jf5Vp9GMfBUaTuqtWnyA%2BOoipM2CXKV%2B5cEA58wysrHyOoaZOLgfjpakMtPNz%2B3kT2T8ZtTEdEw8D7pvJAs9%2FwiTcif%2BjHYkJRP8kQF%2BJbPvvwec89GalZ3xhLTDB4jovnz%2Bzorjxg03HNrNtwLSTtJz7c3WI89J5hRhz3Ofprru6SWPx1k1TAm5v1nRlykAKFKKzZ3nYoYtvF2r%2BG3hzpzMGY7szLv3KDaJd%2BawxWp7R4iZAGWTeSp8LS55hzgjEgnMpJjvnYVx%2BEzHplT449ktio9BbFED11A0qS4glGrvuwAn7AP%2FvpUKodb9oPMJXEkMMGOqUBgJ8MI7VFXKqNaZpQAO9H7Xd%2BzRlWc9of7K3ky4Qe3WEisyDHE2gzGZfBGUzL6D8HJjw7gRdEnMDgqQj17BM4lJ7P4kKAMfzwjKiQyOVVYBzyj5GJS9Bmv93y%2Fa1ZFUZNe9x9V1fn0jWeNQQoqE2tcglh5Te7aANUiCSJDvyse2vtTPPSF05Vdb4ry9yt87MNAHka4CKNAvv8b%2Fen1cpz7Y3Hnf%2BV&X-Amz-Signature=f90698b35fb78390b4b850c1df97dae8ca5add43d16c9225cfee49d873bc7bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOICUIGM%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMeBmxyJCt1ULEK9EV2IMBs7z3AQ83ncUs6aoG159Q2AiEAhJzbkYX3Q%2BTiWUyVXwBbUyKMRWqeNnaWq%2B%2B1Nuihyn8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRUPcjUvYXPxro9OyrcA3U6ejylAV%2B%2FftaYtKNrzqu1p5g9YOCxv5sni7Mi%2FpVm4jMyfYij7ewb7oVO%2B897YrCp3MJBLmFfowTxBPhGBE3OvJJDPyOsQ1BV3zxAfH21sG1wpgIv2iT1Vi5iHemtVYdwlIczFerPxny33FklIgoVETFwr43M0PlHCaHNeHcbMTXuBAAX2JhXoITAKDqgmwUVsBOcAO%2FiJhVBmTDDgeEfgC0%2FMLEyFSiFqnIrMfCx63yxOz2fplpWlAsPvtaR9CYZqKBAqtJllMtnw7kvfxP4oJtyNsI3r0XscI9Sx5flS7sMuwVZPleTkjkEA3jf5Vp9GMfBUaTuqtWnyA%2BOoipM2CXKV%2B5cEA58wysrHyOoaZOLgfjpakMtPNz%2B3kT2T8ZtTEdEw8D7pvJAs9%2FwiTcif%2BjHYkJRP8kQF%2BJbPvvwec89GalZ3xhLTDB4jovnz%2Bzorjxg03HNrNtwLSTtJz7c3WI89J5hRhz3Ofprru6SWPx1k1TAm5v1nRlykAKFKKzZ3nYoYtvF2r%2BG3hzpzMGY7szLv3KDaJd%2BawxWp7R4iZAGWTeSp8LS55hzgjEgnMpJjvnYVx%2BEzHplT449ktio9BbFED11A0qS4glGrvuwAn7AP%2FvpUKodb9oPMJXEkMMGOqUBgJ8MI7VFXKqNaZpQAO9H7Xd%2BzRlWc9of7K3ky4Qe3WEisyDHE2gzGZfBGUzL6D8HJjw7gRdEnMDgqQj17BM4lJ7P4kKAMfzwjKiQyOVVYBzyj5GJS9Bmv93y%2Fa1ZFUZNe9x9V1fn0jWeNQQoqE2tcglh5Te7aANUiCSJDvyse2vtTPPSF05Vdb4ry9yt87MNAHka4CKNAvv8b%2Fen1cpz7Y3Hnf%2BV&X-Amz-Signature=62c566caaafe9bde5cf69d097c7167a2605afc731a000938887bd5b6c7952350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
