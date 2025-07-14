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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVRBKXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBbyu%2BRjDdaO0HGSZwitwxJWJJmCys8fqTzTf8zZq%2F7lAiAM8YMAKWMz4dHWJsIM3wMSZgx8GjjWsgbMWW0T71RaSir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMdeR%2BjK49m%2BdAh0BOKtwDrgo31ENGsJ6ZLmmaHnyFf31kUwnwb3%2FXYSzrndTZEqnrSeUM8WIRCyV1hD59zqp53%2FjY%2BhoB61cj8f64QCxqVAGDiAIbXgsSaxxk3gI8dNZ7NyPKkTWE02577j027FjW6jUWcynhj5EDHV7ZhD9yHyUEEPk7MoDIAaYsF38fteYgDoxBOYwswsUKIObfGR57Lm0Zlu5pzRAHpH8oENgc7sRKO4wBLl1pnk6fhdOjK08WeLcppFr4XPHGnhwctsaWiXI6azzQULJ4hKELMbrgCqFTWteOubDrjBZvXKrAD1l9yZkbe7xCIpukxyj3hN6JkR9RSDlMzXHWmRRkx2XqzAsv6E2dzGFT8glthgyXYzM2voNFEtRPsq4%2FZCu4Nkr5vGY4r19AZLru8sx2zvWiFzxWq3kb%2BhHAjSo9nfe41NP9zaXhjDpaqENfxVDtDr0Cjg%2FvBRSWIt5BRvdS6kzkLKhl3VdfPjuZ4V7EpgBHZP7L3%2F2lEOTUf%2F9C06Fts%2BFqpisCctSkpPYkWpfO%2FWs72YW%2BD8apTFQhIvpk02kqfC1UOX%2BRWGK8FKYREz%2Ft9Nwd1EdXrgBVV593kRT0CGUY2oHBtMEql1Urtly2yIHhdZkyIVdeG7dn1vVv4UgwwczRwwY6pgF6fmYddFOTZaBq7a1Cj%2Bf%2BvAV5xtGVM8Cd9cnK5jmaUs13CXeA5o9Aem6kwzBkODgXozI4ouC%2F%2FgddM%2BUQM6XH7VFDh6Wsn%2FngTNUtFaKSZYmQaxmxgaRZra%2BOyX5ST6TGKcuMcp7xrEtg32%2BmGR0wBDJcULz0u7Bg1XCd%2BJVu3AVOopv7m7l8T%2BLa5jq4zJM6NAIbSRBoJqc%2FG2YGiNxVwZegLyLK&X-Amz-Signature=0f0d43f0fcd8f408c5f06c6b7a34b0f46504818a2058b00ae728a7a530468092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVRBKXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBbyu%2BRjDdaO0HGSZwitwxJWJJmCys8fqTzTf8zZq%2F7lAiAM8YMAKWMz4dHWJsIM3wMSZgx8GjjWsgbMWW0T71RaSir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMdeR%2BjK49m%2BdAh0BOKtwDrgo31ENGsJ6ZLmmaHnyFf31kUwnwb3%2FXYSzrndTZEqnrSeUM8WIRCyV1hD59zqp53%2FjY%2BhoB61cj8f64QCxqVAGDiAIbXgsSaxxk3gI8dNZ7NyPKkTWE02577j027FjW6jUWcynhj5EDHV7ZhD9yHyUEEPk7MoDIAaYsF38fteYgDoxBOYwswsUKIObfGR57Lm0Zlu5pzRAHpH8oENgc7sRKO4wBLl1pnk6fhdOjK08WeLcppFr4XPHGnhwctsaWiXI6azzQULJ4hKELMbrgCqFTWteOubDrjBZvXKrAD1l9yZkbe7xCIpukxyj3hN6JkR9RSDlMzXHWmRRkx2XqzAsv6E2dzGFT8glthgyXYzM2voNFEtRPsq4%2FZCu4Nkr5vGY4r19AZLru8sx2zvWiFzxWq3kb%2BhHAjSo9nfe41NP9zaXhjDpaqENfxVDtDr0Cjg%2FvBRSWIt5BRvdS6kzkLKhl3VdfPjuZ4V7EpgBHZP7L3%2F2lEOTUf%2F9C06Fts%2BFqpisCctSkpPYkWpfO%2FWs72YW%2BD8apTFQhIvpk02kqfC1UOX%2BRWGK8FKYREz%2Ft9Nwd1EdXrgBVV593kRT0CGUY2oHBtMEql1Urtly2yIHhdZkyIVdeG7dn1vVv4UgwwczRwwY6pgF6fmYddFOTZaBq7a1Cj%2Bf%2BvAV5xtGVM8Cd9cnK5jmaUs13CXeA5o9Aem6kwzBkODgXozI4ouC%2F%2FgddM%2BUQM6XH7VFDh6Wsn%2FngTNUtFaKSZYmQaxmxgaRZra%2BOyX5ST6TGKcuMcp7xrEtg32%2BmGR0wBDJcULz0u7Bg1XCd%2BJVu3AVOopv7m7l8T%2BLa5jq4zJM6NAIbSRBoJqc%2FG2YGiNxVwZegLyLK&X-Amz-Signature=d02955a4f0157e324535c4b9d2491a2f1451b2e7cf1c5db6546db0200be05755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
