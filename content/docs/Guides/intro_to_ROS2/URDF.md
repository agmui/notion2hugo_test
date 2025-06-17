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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPB66PZU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdA6rmZY33BoHjygd8pbZqqOArh%2BYObniA3SP64ftxAiADTrMGgoq58JGb5RsfQJNvEm3I1KJAmBhL%2B0DpxoSVYyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxeZgGT5IRImGGQNhKtwDubtMiZ9AWYBz%2FTsmA34qlSEsIJ%2B4xFz4OKD7Abz1mVjRodiBerMG67PO3V1BHjGKDnjpU8p4GfIrsXHmNMmts1AlOzCEAYPO5EhAeRskr6lnvLt26oq6XHC%2FFlfZDyV4Qv5%2B0HaGYslWeM1dZRDtADPG3pf6keyGRBWyP4pDkKFRK9ITi7dPBB8thbt%2BNy4XjN5MPIc84HNZF5TY270AS5t5yrqXJroSnWnD%2BObB1KZaNtswDR9SW4hVM9arOm%2BdHU70M2qm%2BmGivOH5zVKaMoJjBFLdwuPn0fRe8DjCJa3ZHCS4AmvzTzu%2BSPaWyy7NtjeDNIRMLiwKLo3phchnT65K0IZPSFK6iNf3irxpLfSMN09c5R%2BCBapnjId%2B0JMoPu99kOPQcSc9osT97NU526baA528J77wo%2FpoXIA1SIDyXKMOln46dtpJwv%2B1CLVOcEk2b5jg6FdDL7%2BPD0VpngIGrB3MLIuehEAkJ9QcI9NF9Omj%2FXMV7baZSevnxTsAhW82DmmiF1luV%2BRmrD4kMtYpdNKrQ1ujiaYQlguwylNhVukXexvF2OouGdatp%2FeIaNddgx1Nkc%2FGbcRf5RjZCpi7DdTlUbgbF1xTrNz9Q5aNmCkem7FSXlD47U4w%2FOvDwgY6pgGaKnw994l5BOlNttApFVGI3pIkxT%2B9yTshDeAvrExJKGHBFx5%2BnuSZWpn%2Fj%2Bk0rh4BJ6UqQohvUTeoN%2Bm1w8Q0PY2Tu9WVbxqtGQsYmXiG%2BPYvVf2%2BVD43FIluqNichgsjLE7oUx8C8Ci2JNq9c4KhycwZk6ApxKjHEHH1zf3RzH4%2BCRchP2Zn4FWbVj%2Byuy1a00G6ntEzLxf5f6EISzeyaf6QuJ9Q&X-Amz-Signature=30c819fda96c463a2742543d691f9a3962827179e1dd25de80caca098647499b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPB66PZU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdA6rmZY33BoHjygd8pbZqqOArh%2BYObniA3SP64ftxAiADTrMGgoq58JGb5RsfQJNvEm3I1KJAmBhL%2B0DpxoSVYyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxeZgGT5IRImGGQNhKtwDubtMiZ9AWYBz%2FTsmA34qlSEsIJ%2B4xFz4OKD7Abz1mVjRodiBerMG67PO3V1BHjGKDnjpU8p4GfIrsXHmNMmts1AlOzCEAYPO5EhAeRskr6lnvLt26oq6XHC%2FFlfZDyV4Qv5%2B0HaGYslWeM1dZRDtADPG3pf6keyGRBWyP4pDkKFRK9ITi7dPBB8thbt%2BNy4XjN5MPIc84HNZF5TY270AS5t5yrqXJroSnWnD%2BObB1KZaNtswDR9SW4hVM9arOm%2BdHU70M2qm%2BmGivOH5zVKaMoJjBFLdwuPn0fRe8DjCJa3ZHCS4AmvzTzu%2BSPaWyy7NtjeDNIRMLiwKLo3phchnT65K0IZPSFK6iNf3irxpLfSMN09c5R%2BCBapnjId%2B0JMoPu99kOPQcSc9osT97NU526baA528J77wo%2FpoXIA1SIDyXKMOln46dtpJwv%2B1CLVOcEk2b5jg6FdDL7%2BPD0VpngIGrB3MLIuehEAkJ9QcI9NF9Omj%2FXMV7baZSevnxTsAhW82DmmiF1luV%2BRmrD4kMtYpdNKrQ1ujiaYQlguwylNhVukXexvF2OouGdatp%2FeIaNddgx1Nkc%2FGbcRf5RjZCpi7DdTlUbgbF1xTrNz9Q5aNmCkem7FSXlD47U4w%2FOvDwgY6pgGaKnw994l5BOlNttApFVGI3pIkxT%2B9yTshDeAvrExJKGHBFx5%2BnuSZWpn%2Fj%2Bk0rh4BJ6UqQohvUTeoN%2Bm1w8Q0PY2Tu9WVbxqtGQsYmXiG%2BPYvVf2%2BVD43FIluqNichgsjLE7oUx8C8Ci2JNq9c4KhycwZk6ApxKjHEHH1zf3RzH4%2BCRchP2Zn4FWbVj%2Byuy1a00G6ntEzLxf5f6EISzeyaf6QuJ9Q&X-Amz-Signature=30502f6410584ffdcbfb79809c7cfb159ad7dcf88fcafde2abef3b6a245d9cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
