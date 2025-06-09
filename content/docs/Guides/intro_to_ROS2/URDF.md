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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HR7AHDB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FsfMOZaGULZVwWZSUWyb2tvSNsQGIZ%2BkWTEeCH2vVaAiEAxdyz8%2F7a0fvlq012nRUNAzFKecY6PV0zbEceobmf6PcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvXkw%2FFjfKH%2Fkoq5CrcA1%2B%2FC%2FS7UkIzJNaZA%2FZrJzMjOSI5s0gvsfTIDQ8Yp0fY4zJ03mlS9QOuzrBHMV6U2JZehqrknZbomx42qITkg87YNF22HDEdJoENhEEY84sCm%2BBS72RjNZEKNmI0LZhN1eIG2OTB1uKnZPdtskOYltwuSo8GsiKbtVoWArGfSe2%2FJjiKbMEIot0lqG5OyvXWdz%2F2bAiV5Lg9pIkUfkramGxMNtQS02Rj7EyhrM6nMqKWaMSZ0DESlBEhUPR4EuIKDalw%2FGA%2BEZHMcA%2F%2FmswOleo1O9AFzxAv9OE13LR5Yqtp1ghMI7Ul0TsCsZdSzSZFZlVHeMPn7V1GSP4lx8EUvTIY9OHFnn5WHUUieQma%2FeYjxI7dpM5Hxz%2BpUsxrE6ViaIMEa5p%2FVIHi%2BeZQYzs6asX%2F04o15cQX8SmoUWK7wvybsR6kAKUF21syALW%2BUC7WJW3j3awdvfFRZFr%2FWywQ9UtMgDqVF4mdZ1py%2BDJst%2Fs83kSVVGKSvL%2F6JUdIf6TYvr7kOxNtFKIVwOWDDzOJCAtopH1rJcqqk%2Bf91GVeGqNYEtbQUxpwK77qRBzqS0iN5afFfdGwvv9tt4Luha8Rt5o51bZezDKmwO%2FYeaFzb3yjvzlywh9wcIDeAm0PMLvWm8IGOqUBU91RKbI6%2B3mBcdVR8evnt%2FBbCiAUbkN7a83Apv0U1wZdmSVMk8A6bEyuu%2FEoclpKYzIZ2NTfIbtPTpJSmhr8DPxFWpoWbp0sMDJI5nI9H%2FkAAXbP1031M85LwHplWPkhu6Iy1VSFMG4YMS8m7TFBANFkZlcZRhbWrg1bGFIiISZMTbkzIaa1kJjx4QPaLiGQUQMND6u%2FtchEdNhJH4E%2Bfp4%2FOze0&X-Amz-Signature=011e14ac76b0597d884335854faeaf31dad48abf9787d639b409f1a17349a383&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HR7AHDB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FsfMOZaGULZVwWZSUWyb2tvSNsQGIZ%2BkWTEeCH2vVaAiEAxdyz8%2F7a0fvlq012nRUNAzFKecY6PV0zbEceobmf6PcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvXkw%2FFjfKH%2Fkoq5CrcA1%2B%2FC%2FS7UkIzJNaZA%2FZrJzMjOSI5s0gvsfTIDQ8Yp0fY4zJ03mlS9QOuzrBHMV6U2JZehqrknZbomx42qITkg87YNF22HDEdJoENhEEY84sCm%2BBS72RjNZEKNmI0LZhN1eIG2OTB1uKnZPdtskOYltwuSo8GsiKbtVoWArGfSe2%2FJjiKbMEIot0lqG5OyvXWdz%2F2bAiV5Lg9pIkUfkramGxMNtQS02Rj7EyhrM6nMqKWaMSZ0DESlBEhUPR4EuIKDalw%2FGA%2BEZHMcA%2F%2FmswOleo1O9AFzxAv9OE13LR5Yqtp1ghMI7Ul0TsCsZdSzSZFZlVHeMPn7V1GSP4lx8EUvTIY9OHFnn5WHUUieQma%2FeYjxI7dpM5Hxz%2BpUsxrE6ViaIMEa5p%2FVIHi%2BeZQYzs6asX%2F04o15cQX8SmoUWK7wvybsR6kAKUF21syALW%2BUC7WJW3j3awdvfFRZFr%2FWywQ9UtMgDqVF4mdZ1py%2BDJst%2Fs83kSVVGKSvL%2F6JUdIf6TYvr7kOxNtFKIVwOWDDzOJCAtopH1rJcqqk%2Bf91GVeGqNYEtbQUxpwK77qRBzqS0iN5afFfdGwvv9tt4Luha8Rt5o51bZezDKmwO%2FYeaFzb3yjvzlywh9wcIDeAm0PMLvWm8IGOqUBU91RKbI6%2B3mBcdVR8evnt%2FBbCiAUbkN7a83Apv0U1wZdmSVMk8A6bEyuu%2FEoclpKYzIZ2NTfIbtPTpJSmhr8DPxFWpoWbp0sMDJI5nI9H%2FkAAXbP1031M85LwHplWPkhu6Iy1VSFMG4YMS8m7TFBANFkZlcZRhbWrg1bGFIiISZMTbkzIaa1kJjx4QPaLiGQUQMND6u%2FtchEdNhJH4E%2Bfp4%2FOze0&X-Amz-Signature=b053c483fba109fe2dbdd8cc762cfa5949b23d759dd702bd33769480e0d24bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
