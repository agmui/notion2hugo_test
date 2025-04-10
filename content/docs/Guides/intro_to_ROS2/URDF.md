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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EOPTPQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGal400kYArhhbHrhtG4lF76AL2h39JLQ2RIoeKdPJ%2FAAiEAq7DXLY7cPWjPD2NH9TAUJCedk%2FWlFsNXLAK58MUW%2FHwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM34IdCuLRdceJFnzyrcA0m7zhyXM8GCGRuHjGXkBoTF2z64Qk8L4E%2B4AraYPU9FX%2BFWgrqbJ9fKeCHTvEilZNTKhljMJCn4yTK0ugDmzVxrFO46p%2FMIgdJX%2B%2FB9voEIFcpb6e%2FpK4qtYYILPh5NAuHkLH4V10TzKtA6bOWhUNxrweisMlLOoUuQ0RCnMuJDXEPB7DWtKgO%2FnoMG3La0USIaqND%2Bztytr9C2zFs5tYgrjDc7anDXpDktdWdAdtMalyHrjgl1pUxxJXCTCoD7Ln5fxZcTWBg3i85diQN4Ab%2F8jbEJ9H9ACvX5sfaaVQx5axoubEYC7yKSn0od8dNilTs3EJkrmf9%2FZRDG8fFP4LBPqgcaUGZPhLYKpFzl3f0A9vQydkQgJcbe%2BJS5DT1a%2B92CBYx2hObuDl1aY14ULPpV6xqMyHXo03IXl8pjiSi%2BfkYwSaG45Y2eFxaHsaRfJP6WIzdxnA1ZempNW9ijfnfnlNcg0jUCaaGs9suij%2BHYuI%2FwMhISfLQffsZGw6eg7mZ5KBBU9oJb1iKaGo%2FtmpI5USSZHAaHeRY%2BsN7Wi1bCmbcTJabl5zSlXOQW0exBrcv%2FKQPV%2Fw%2BK2pPkne%2FUwH9whHWKdqbS9yPAsfZJAfIS89trp6V3BeD5hwb5MJPz3b8GOqUBAK2ZlHsCXeHJscmET%2Fb5p7RZQAcbPhwhtuKe0K1XWH059ScXtgJoZ9nQ5nbTcYY5Hb5Hk8h3uEPihn1usyv89R03GHt8jQ07OCgHwUlRgZfF2aKTAiiVq1NTMKH7WHWoOMZDmOp386%2BK9mptzgHc2eekUa5PAZqmxCzywuVgVIt4Uwb2QGbG0LCpqdqEsbXryxEbNYNgPNagzGNS6x8OvZkc6HLK&X-Amz-Signature=4940cc679a790a4f0902fbd50c85e9eb9b6a601d6f2defffcd53c7fd8a1ac4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EOPTPQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGal400kYArhhbHrhtG4lF76AL2h39JLQ2RIoeKdPJ%2FAAiEAq7DXLY7cPWjPD2NH9TAUJCedk%2FWlFsNXLAK58MUW%2FHwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM34IdCuLRdceJFnzyrcA0m7zhyXM8GCGRuHjGXkBoTF2z64Qk8L4E%2B4AraYPU9FX%2BFWgrqbJ9fKeCHTvEilZNTKhljMJCn4yTK0ugDmzVxrFO46p%2FMIgdJX%2B%2FB9voEIFcpb6e%2FpK4qtYYILPh5NAuHkLH4V10TzKtA6bOWhUNxrweisMlLOoUuQ0RCnMuJDXEPB7DWtKgO%2FnoMG3La0USIaqND%2Bztytr9C2zFs5tYgrjDc7anDXpDktdWdAdtMalyHrjgl1pUxxJXCTCoD7Ln5fxZcTWBg3i85diQN4Ab%2F8jbEJ9H9ACvX5sfaaVQx5axoubEYC7yKSn0od8dNilTs3EJkrmf9%2FZRDG8fFP4LBPqgcaUGZPhLYKpFzl3f0A9vQydkQgJcbe%2BJS5DT1a%2B92CBYx2hObuDl1aY14ULPpV6xqMyHXo03IXl8pjiSi%2BfkYwSaG45Y2eFxaHsaRfJP6WIzdxnA1ZempNW9ijfnfnlNcg0jUCaaGs9suij%2BHYuI%2FwMhISfLQffsZGw6eg7mZ5KBBU9oJb1iKaGo%2FtmpI5USSZHAaHeRY%2BsN7Wi1bCmbcTJabl5zSlXOQW0exBrcv%2FKQPV%2Fw%2BK2pPkne%2FUwH9whHWKdqbS9yPAsfZJAfIS89trp6V3BeD5hwb5MJPz3b8GOqUBAK2ZlHsCXeHJscmET%2Fb5p7RZQAcbPhwhtuKe0K1XWH059ScXtgJoZ9nQ5nbTcYY5Hb5Hk8h3uEPihn1usyv89R03GHt8jQ07OCgHwUlRgZfF2aKTAiiVq1NTMKH7WHWoOMZDmOp386%2BK9mptzgHc2eekUa5PAZqmxCzywuVgVIt4Uwb2QGbG0LCpqdqEsbXryxEbNYNgPNagzGNS6x8OvZkc6HLK&X-Amz-Signature=466a59d53ddc22922e0d393c0340bf44c6fcc7881469ecf27072514e2d1d1a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
