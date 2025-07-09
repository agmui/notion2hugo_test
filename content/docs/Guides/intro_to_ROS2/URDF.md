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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7T2AHTF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJjEMw%2ByyFox3O%2FjEPlPGDUOY6eQsQPvwNV7tISbohjgIgE%2BdqKQvT87XfizvzgwpRECc6TTeY6VZHH7Ol0%2Fv8h9MqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmQNWxeEQXISXMc0yrcA5%2Bd8eKhsinEP2Q35THPbj5eTJXfmESsWMp8xU728xMknX1uCIzaHeoGtDWlCo6Eqy4s6%2Fw0ppKkvcdF4mxbHpeGPKRMKIaTr2n4UFuFolpYLC%2BC6bjvJhoY9i2OPilIbCBpj3%2BEfCaxyaomTzsebV8K%2FsL%2BkeTiCFBjDzuouvyrg6Pom1iNXVeLcWCBirouVK6KPlZEkeskpCCoL1QFo4seRDKonPLf9z8XDeTtDhoCpSbOb9ITSfdrckG6z6FC7R%2Bbqe9JxxZFmFytClNCY%2BqvlArpVC3DOyGHak8GnJTDX2gd0QM5jtFovV%2BSEO5OE9J86BE7kQu7gup6fVkw3xwA6muqdA9Y7nJ%2B2fEz6Iv6DyjG0yFAZ%2FPVhjeBOLDCzBGjiZEhs5mUGhS9H5oX%2FfZAp%2FmnMbRLk6bRVoLaV22O7Y6uvjRKz%2BLDvou0BG5BspGxtyAJJJ3kgOJhiZKw%2FPXt0J2PvEPvWGlDvmfm9aWzs6aBs47azrns4TDRK6PyVGRBsfdjszoInleYE0w%2B5oeRltKRnM7%2BuwfHaqM%2FQoAv9ae3OhZcaSskNwvdnjlx1F0WBoXfqn0rKuCt3FcR00cU4m7Zo2hYVCm4b62TGrMfXzQk%2FO0EmWoUzEU6MI6LucMGOqUBD5VIwS7FpRNhsPFcmiKem2amUypq2%2FFlKsGbznCvmGwyPtjlazYXgcirRJ7OzKiz3SdvJSxf9yMGGD5lJzDcsj3vDwaVOC1iPwrF1HXtBDsCMBaNnUU8H0k3GSH40mvxVI3AESau0r6nftPfYu2vnzTpKX1iNszj0Etd39WAWbsHQCper0LiMU0jKDyK3J1%2FtCboVOPVwkSJuJI0kfupa2J1Qiet&X-Amz-Signature=917ba1f234587cb076abf74b2d1414902487f0e2810ed9b95e3e98af56beff2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7T2AHTF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJjEMw%2ByyFox3O%2FjEPlPGDUOY6eQsQPvwNV7tISbohjgIgE%2BdqKQvT87XfizvzgwpRECc6TTeY6VZHH7Ol0%2Fv8h9MqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmQNWxeEQXISXMc0yrcA5%2Bd8eKhsinEP2Q35THPbj5eTJXfmESsWMp8xU728xMknX1uCIzaHeoGtDWlCo6Eqy4s6%2Fw0ppKkvcdF4mxbHpeGPKRMKIaTr2n4UFuFolpYLC%2BC6bjvJhoY9i2OPilIbCBpj3%2BEfCaxyaomTzsebV8K%2FsL%2BkeTiCFBjDzuouvyrg6Pom1iNXVeLcWCBirouVK6KPlZEkeskpCCoL1QFo4seRDKonPLf9z8XDeTtDhoCpSbOb9ITSfdrckG6z6FC7R%2Bbqe9JxxZFmFytClNCY%2BqvlArpVC3DOyGHak8GnJTDX2gd0QM5jtFovV%2BSEO5OE9J86BE7kQu7gup6fVkw3xwA6muqdA9Y7nJ%2B2fEz6Iv6DyjG0yFAZ%2FPVhjeBOLDCzBGjiZEhs5mUGhS9H5oX%2FfZAp%2FmnMbRLk6bRVoLaV22O7Y6uvjRKz%2BLDvou0BG5BspGxtyAJJJ3kgOJhiZKw%2FPXt0J2PvEPvWGlDvmfm9aWzs6aBs47azrns4TDRK6PyVGRBsfdjszoInleYE0w%2B5oeRltKRnM7%2BuwfHaqM%2FQoAv9ae3OhZcaSskNwvdnjlx1F0WBoXfqn0rKuCt3FcR00cU4m7Zo2hYVCm4b62TGrMfXzQk%2FO0EmWoUzEU6MI6LucMGOqUBD5VIwS7FpRNhsPFcmiKem2amUypq2%2FFlKsGbznCvmGwyPtjlazYXgcirRJ7OzKiz3SdvJSxf9yMGGD5lJzDcsj3vDwaVOC1iPwrF1HXtBDsCMBaNnUU8H0k3GSH40mvxVI3AESau0r6nftPfYu2vnzTpKX1iNszj0Etd39WAWbsHQCper0LiMU0jKDyK3J1%2FtCboVOPVwkSJuJI0kfupa2J1Qiet&X-Amz-Signature=3d922dbb95dca61552368d2c73caf61d76575f200861ddf3a889f37b88f0b137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
