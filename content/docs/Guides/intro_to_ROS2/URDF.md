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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMQ2BKC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6aHcU%2BDBw3jEMALG0fm2ZM6CttF3vLDbIVQTCWT5d0AiB6R5caAxXYc9hC1gO%2FtQKIwQJrdR9AdHxnEQ%2FrZFqOmCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxP%2FDA6LZizNxOo0rKtwDmj7h2%2FhnbZMH2ngmXBSEw7%2BFbyzRYs%2FswlmwZLj%2BEdQ8JrYratFhYR6app5986eGixvES5dVCKyUXuI7xOLv9JISgexu46WrkDGBaBT5iKw2wqPFrns%2Fy0bLZBwhdhVP%2F4Vkz8zCt5aNU5TeLzhe4p9zasVU%2Be6BEuCNGgbBCx%2BBSZIDsM4qpn%2Bg4JNOWkK7XcF139NQujvB21b7V%2FlBBUhdbpdB15xymnNPK78Om85oAJhsKJjjnbm9piiTiDc4UpmW61znG4lpmNVJGv0H8kFDn97I7iYjAMRbJr2Uw1URVoVB3J7deSiy26uSD%2BBiuQLD1HqMu1XRvceby6nBTHU9wFP%2BDE6AWnMmKEzp4hbZPa68TPv%2B8UiJLkeGfdjzyLjiyiCj175sg7MS0Mu%2FbjZMBv%2BZ2nAI8nPnbHBNMw01yByKVfEpfRj3hIP4lrMvxXkNXGbhNIIAwnKRTkRYa9oLbmOsrVKCxVQxwHV%2FzEQTX5BWQwDu4IWbA0OhoGqPfHEMX%2FkLK%2FWM%2B%2BQSXbY11z8KPXTwn05vLzjjN3%2BiC5QVO1CeeH%2Bh03s5VO87DqLca1aaPlqlxRQ%2BJVAmJOFPx99u%2Biy%2BXuvjpn%2FmC1K7aTfwRM%2BmpLRDKltex6AwluH2wAY6pgFTtG%2BCHEvdNJEwOkuNON%2F%2Bf85dopVUVTFZdDQqF2mWuZb3Nc1pt3cUP9t7mXimwwrnDkH2Du4DPEvhDhiNRCYRQwdnwwomIHgpdhZe%2BjsV%2B4M5yrzFmJj1re%2FxElHuBQDLcLGQbIUiICEhSgFjgYjEQ7NYc9anOlyipdTw8mKP2T9tspgUmyIOSa14Etfc4MFAIZiBDExLRZnyzcjuk5cmaey5ik1d&X-Amz-Signature=d3d347b344480e5d49e3a5820942c8d9ddd2091f04c52fad75488ad7c0132bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMQ2BKC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6aHcU%2BDBw3jEMALG0fm2ZM6CttF3vLDbIVQTCWT5d0AiB6R5caAxXYc9hC1gO%2FtQKIwQJrdR9AdHxnEQ%2FrZFqOmCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxP%2FDA6LZizNxOo0rKtwDmj7h2%2FhnbZMH2ngmXBSEw7%2BFbyzRYs%2FswlmwZLj%2BEdQ8JrYratFhYR6app5986eGixvES5dVCKyUXuI7xOLv9JISgexu46WrkDGBaBT5iKw2wqPFrns%2Fy0bLZBwhdhVP%2F4Vkz8zCt5aNU5TeLzhe4p9zasVU%2Be6BEuCNGgbBCx%2BBSZIDsM4qpn%2Bg4JNOWkK7XcF139NQujvB21b7V%2FlBBUhdbpdB15xymnNPK78Om85oAJhsKJjjnbm9piiTiDc4UpmW61znG4lpmNVJGv0H8kFDn97I7iYjAMRbJr2Uw1URVoVB3J7deSiy26uSD%2BBiuQLD1HqMu1XRvceby6nBTHU9wFP%2BDE6AWnMmKEzp4hbZPa68TPv%2B8UiJLkeGfdjzyLjiyiCj175sg7MS0Mu%2FbjZMBv%2BZ2nAI8nPnbHBNMw01yByKVfEpfRj3hIP4lrMvxXkNXGbhNIIAwnKRTkRYa9oLbmOsrVKCxVQxwHV%2FzEQTX5BWQwDu4IWbA0OhoGqPfHEMX%2FkLK%2FWM%2B%2BQSXbY11z8KPXTwn05vLzjjN3%2BiC5QVO1CeeH%2Bh03s5VO87DqLca1aaPlqlxRQ%2BJVAmJOFPx99u%2Biy%2BXuvjpn%2FmC1K7aTfwRM%2BmpLRDKltex6AwluH2wAY6pgFTtG%2BCHEvdNJEwOkuNON%2F%2Bf85dopVUVTFZdDQqF2mWuZb3Nc1pt3cUP9t7mXimwwrnDkH2Du4DPEvhDhiNRCYRQwdnwwomIHgpdhZe%2BjsV%2B4M5yrzFmJj1re%2FxElHuBQDLcLGQbIUiICEhSgFjgYjEQ7NYc9anOlyipdTw8mKP2T9tspgUmyIOSa14Etfc4MFAIZiBDExLRZnyzcjuk5cmaey5ik1d&X-Amz-Signature=e6545d29d7ccd13abfd0d6fddc05e00321eaeb01356220224a73ef6ce084e8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
