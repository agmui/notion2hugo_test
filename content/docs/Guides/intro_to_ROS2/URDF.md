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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPLTUQL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWR5Ch5xcZOiSDoDMwKVneYANdUJ%2BPBVyZgPK2fUpIAIgI%2BGdQCpRO1sQ5EEKSQvMunzxMh%2FWI2R7IPTik6lDdbMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUJkEQyHDwFDJPyKSrcAz1n7WVgMSRKpZyoLnZv64MtsTv9J%2BSIKNtzW4rNCWaHTnNs2digMR2fYQs7UZ%2Byoc9G48Nx4Ne%2B2QCSxcsdGsOmUs2jw5ZRukj1q6sLBRVC%2Fz4RXykhuG6AY3SWIWugBosaQX9N%2F0ngHbkmdjs5aMPAd6BEbesKRhYDtSRzfIQkbE0LFjsGfHfUCO3CGVTD9ONxtuZBydl8U%2BMUeZP%2FiyIstjv2sAW0IFuIL7DCdKGFTk5Ne%2BD9Dg691RIOPvkUad1GOQgtDXajr%2FwCWnuYUrSO2q%2Bxgz9NHZVKRoqgRIigbe8C97NcCtNoHi%2Bb%2BwateI7KU1hdY%2BbkPGK2EvSgvH4G2x0h3KxDu5muoWt%2FvSzQbnihbmTnhIBnOCEHtXtSUmnySz9BcpGcFGp2SsYVKEtw%2FsLNr%2BtaPXktak%2FozCUx4Jhya3yG%2FtnsaCOCkr3fMubtdXPfvEqasMhrTbsUlLW8awJGrvjyz4Ml%2FRdLZUE16CE940oyU5t2SCbtJNQBFk9HA1FTYtDj8VIoYojSLGnMVVHh3WrUSr1xKpydZ2hkFrSEwGZbYa7DkInHDnAxL3lD0pJ49G%2BT8hNxTRxflqjclbH49RsDKiiQ8Ke2eAfU90KPYGXcoqvqwOTSMPbMqb0GOqUB40kPD4v0JGnvDH0GTkopu7B5%2FVX%2BdJ9yvKMLMLW5DXKln9tZVagCRxsRV0XimqXwOR8VAzUfta0m9qyHC8pvLkCSxb4vmyUa0GGMJeY4RurwDk5tEoJfqYBLGcHmVZyv0pkkZgk8kvdmvS0qacnRU%2Bb4qSDRBrnGe%2Fl7TmcEBJZWyVtNRpQpaVFDumNGopvfYX%2F74Iy%2FcgbSpsvOFCYK%2FTJ%2F4WPh&X-Amz-Signature=e518c801dd2eec8d22059894525b47796055189d1e62461ef425c73391b31944&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPLTUQL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWR5Ch5xcZOiSDoDMwKVneYANdUJ%2BPBVyZgPK2fUpIAIgI%2BGdQCpRO1sQ5EEKSQvMunzxMh%2FWI2R7IPTik6lDdbMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUJkEQyHDwFDJPyKSrcAz1n7WVgMSRKpZyoLnZv64MtsTv9J%2BSIKNtzW4rNCWaHTnNs2digMR2fYQs7UZ%2Byoc9G48Nx4Ne%2B2QCSxcsdGsOmUs2jw5ZRukj1q6sLBRVC%2Fz4RXykhuG6AY3SWIWugBosaQX9N%2F0ngHbkmdjs5aMPAd6BEbesKRhYDtSRzfIQkbE0LFjsGfHfUCO3CGVTD9ONxtuZBydl8U%2BMUeZP%2FiyIstjv2sAW0IFuIL7DCdKGFTk5Ne%2BD9Dg691RIOPvkUad1GOQgtDXajr%2FwCWnuYUrSO2q%2Bxgz9NHZVKRoqgRIigbe8C97NcCtNoHi%2Bb%2BwateI7KU1hdY%2BbkPGK2EvSgvH4G2x0h3KxDu5muoWt%2FvSzQbnihbmTnhIBnOCEHtXtSUmnySz9BcpGcFGp2SsYVKEtw%2FsLNr%2BtaPXktak%2FozCUx4Jhya3yG%2FtnsaCOCkr3fMubtdXPfvEqasMhrTbsUlLW8awJGrvjyz4Ml%2FRdLZUE16CE940oyU5t2SCbtJNQBFk9HA1FTYtDj8VIoYojSLGnMVVHh3WrUSr1xKpydZ2hkFrSEwGZbYa7DkInHDnAxL3lD0pJ49G%2BT8hNxTRxflqjclbH49RsDKiiQ8Ke2eAfU90KPYGXcoqvqwOTSMPbMqb0GOqUB40kPD4v0JGnvDH0GTkopu7B5%2FVX%2BdJ9yvKMLMLW5DXKln9tZVagCRxsRV0XimqXwOR8VAzUfta0m9qyHC8pvLkCSxb4vmyUa0GGMJeY4RurwDk5tEoJfqYBLGcHmVZyv0pkkZgk8kvdmvS0qacnRU%2Bb4qSDRBrnGe%2Fl7TmcEBJZWyVtNRpQpaVFDumNGopvfYX%2F74Iy%2FcgbSpsvOFCYK%2FTJ%2F4WPh&X-Amz-Signature=298c5cba9511acb6d2742aa17d53c2d045a91ceaa308e0871db4ef6f74b6a5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
