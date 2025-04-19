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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFZMRSH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTHx7uO58AQkiPzZ8N%2BreiYmSMvyyY1hrH3f%2B3NNUdGwIhANWckU2fe7AMYK%2BHUQP3RsWZNHmNrBB6eq4zTGolU8SuKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx8pJpfJ5i9D7hpE8q3AO%2BwSKY3NNZFYTNwlt3mCr5q0s%2FmjQFsMLrpIYKqm6As5RvrKhYm%2BGlvHQtvBnOQFjNbhXUrKIDa5ZyBXbHUapi2LVHPYlVKopqgWkLYLBthkFHNjSIhnzZbBn0r2v5fdfAs0gGmCwf%2B7rvCBC7v3uQeNtDTapiaYhh7kabtDonadom77Ew1eJXv4KotshenFfnQbQOy1WDduZ5s8iVrauxwkNGbFnnztRJi2rkPVdoCyS%2FtI660t9NIF5TqkvIh2kpS%2FtAjqx5XrZr%2FCQm114e%2F8BWHzJABXfeIBNHDzLaczT3cbkvKQD9F3U73rDsIcqTi5OctpCsy%2BiWywVWj%2Bw1%2BToI%2BGOKpILdbISP78inQ44VZWoWY9RwAhna5fRLG927FHx1EkYbjvDNboLLaM8MBgqUpwIEwJEX4Swe8BGofXN9xyYBvoznJeFHfVmuIClQFQBnT%2Bid%2BbNQTRkICnIQC9kmDBx%2BgULwO7YeY4ar4O8FasksB6hxq4%2F61jeqGLhr8bNBhHBry7DmVh1bAShFrylG%2BKWVNv05ul71SdbYoaO07SYNzptpPNbzmtNA8ezKIL9tt%2F3ryeeTxiMzMsDIvLkwpD%2Bbx6k6LNijilWCOKE9Ej5HJSTrcJOIVDD6%2B4zABjqkARnpnV%2Bby45slPksSc27%2FRRAvjtBIvBvDprikkp23JxSlVg3fejatscjm3sRGmsn5sfb8Vkx%2FmE1Y1GDqxIzi6Q3kzCD%2Fq1ZU1pznggjHOcBZMdgHxTYKfGkfaup7MrTCs3g%2BFfn%2FwhRduvwVEMJk%2F6rS6twQIUzzVCnO6Rm1dCvD5g9U3tfnqOfSat5%2FQaPiFaB57gWE9%2BEeSQZr8gP34OrylCo&X-Amz-Signature=74dc383fe41144ec4eb3c299bd6706f85cd6598fc60b2fe2356546800d6f9635&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFZMRSH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTHx7uO58AQkiPzZ8N%2BreiYmSMvyyY1hrH3f%2B3NNUdGwIhANWckU2fe7AMYK%2BHUQP3RsWZNHmNrBB6eq4zTGolU8SuKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx8pJpfJ5i9D7hpE8q3AO%2BwSKY3NNZFYTNwlt3mCr5q0s%2FmjQFsMLrpIYKqm6As5RvrKhYm%2BGlvHQtvBnOQFjNbhXUrKIDa5ZyBXbHUapi2LVHPYlVKopqgWkLYLBthkFHNjSIhnzZbBn0r2v5fdfAs0gGmCwf%2B7rvCBC7v3uQeNtDTapiaYhh7kabtDonadom77Ew1eJXv4KotshenFfnQbQOy1WDduZ5s8iVrauxwkNGbFnnztRJi2rkPVdoCyS%2FtI660t9NIF5TqkvIh2kpS%2FtAjqx5XrZr%2FCQm114e%2F8BWHzJABXfeIBNHDzLaczT3cbkvKQD9F3U73rDsIcqTi5OctpCsy%2BiWywVWj%2Bw1%2BToI%2BGOKpILdbISP78inQ44VZWoWY9RwAhna5fRLG927FHx1EkYbjvDNboLLaM8MBgqUpwIEwJEX4Swe8BGofXN9xyYBvoznJeFHfVmuIClQFQBnT%2Bid%2BbNQTRkICnIQC9kmDBx%2BgULwO7YeY4ar4O8FasksB6hxq4%2F61jeqGLhr8bNBhHBry7DmVh1bAShFrylG%2BKWVNv05ul71SdbYoaO07SYNzptpPNbzmtNA8ezKIL9tt%2F3ryeeTxiMzMsDIvLkwpD%2Bbx6k6LNijilWCOKE9Ej5HJSTrcJOIVDD6%2B4zABjqkARnpnV%2Bby45slPksSc27%2FRRAvjtBIvBvDprikkp23JxSlVg3fejatscjm3sRGmsn5sfb8Vkx%2FmE1Y1GDqxIzi6Q3kzCD%2Fq1ZU1pznggjHOcBZMdgHxTYKfGkfaup7MrTCs3g%2BFfn%2FwhRduvwVEMJk%2F6rS6twQIUzzVCnO6Rm1dCvD5g9U3tfnqOfSat5%2FQaPiFaB57gWE9%2BEeSQZr8gP34OrylCo&X-Amz-Signature=4626eac74741d08dd3e7866808e3e0fe258e0f480a5a5bf0296e8272841dd5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
