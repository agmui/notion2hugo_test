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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRI5AIB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB4Qcm%2FcAlyE8DxN2aEfbd17ZhQRlKLufTk8MjOx0Pt1AiEAirv4zGSgILXocW8N7ipFYb9SXBGUsEFdzcnn9h%2B4eKsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDneKLb6xg4adcQlyircA12pobJq2AQkFUjPKlxGurHPM5cULZxqHR14EIX%2FYnG2wmBmzdOv1BJdg9kVH%2BYg60QAO%2BDz4ttsTHw3d6PLYrTWADZlZaMAWUEZSyBlNQWOb1Tk7zYrr38IjLj1ybWKKEVbtd4MAdjGbkJp9EDFVU%2FXcYqdk3LrLHvRLOF3PYV1WbXrukh5J%2Bxo8cRdp7YDKF8p%2BJLMJenITuG%2FlR%2FCYjvwZTX%2BGX75fP%2BCk8jnaYyFVFlZX8Hhitpk25dDl42oeaY3ns7fjst5GLLTRyqeKX%2FOoVzNGcbqsnOVix9lVFolWXSSn0Ba7OWl51Sv3RYpCWGsRikuAmkcEQX8zTmnx9V1gAtpGpLHTPRdAvZzJ0vszLb4uszMNj4SuxPAoaOxGqTxtSJT42WGIHTJrbjbySISbDWaM5GJS3zAHI6F8ppFqhMaUQ8ioZluPMFCkRZ9GynBjSUg7dzgrkuRnXSJtadKRu1toOQqxQPFfLuQM9q1jBy%2B7ifcO9qhjLy4hTzRcBFzVAwg51A5TGCoA7o7OgNisM%2FI7hToQKcelHtztRXAXPskX%2BBeW5DFOCLhjoOrsmlzFKyGLCfXxM80iKArh6m%2BbqVBKQTN5pYnlB0EWM%2BSLRhnf2zIOJgua61YMIOF%2Fb4GOqUBqCPbsZ%2BHXIEasahFyNQuMm1wan1NkPELrA7iVug0MmE8g6rrQH2Ghuu0A%2F42%2B5aPBtHLyyqfqWpfYKL7MpFrBhilNVuy4mh6yp4nQTL3%2FGHoQ0krsBTQ%2BeZDsPLfFHqQGERkc9LHznsx2NmOe3AhvGE8TjcWaW2Zzrg6NDOMkfPY2KeeERXg6XukqzL7Byq82e5Uo78Ll7XIM8NK3FsMczNCw%2Fh9&X-Amz-Signature=143478eb1c8acfac95786955e62ee9dd50caa2e36828eb4e00862e0bda21d78b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRI5AIB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB4Qcm%2FcAlyE8DxN2aEfbd17ZhQRlKLufTk8MjOx0Pt1AiEAirv4zGSgILXocW8N7ipFYb9SXBGUsEFdzcnn9h%2B4eKsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDneKLb6xg4adcQlyircA12pobJq2AQkFUjPKlxGurHPM5cULZxqHR14EIX%2FYnG2wmBmzdOv1BJdg9kVH%2BYg60QAO%2BDz4ttsTHw3d6PLYrTWADZlZaMAWUEZSyBlNQWOb1Tk7zYrr38IjLj1ybWKKEVbtd4MAdjGbkJp9EDFVU%2FXcYqdk3LrLHvRLOF3PYV1WbXrukh5J%2Bxo8cRdp7YDKF8p%2BJLMJenITuG%2FlR%2FCYjvwZTX%2BGX75fP%2BCk8jnaYyFVFlZX8Hhitpk25dDl42oeaY3ns7fjst5GLLTRyqeKX%2FOoVzNGcbqsnOVix9lVFolWXSSn0Ba7OWl51Sv3RYpCWGsRikuAmkcEQX8zTmnx9V1gAtpGpLHTPRdAvZzJ0vszLb4uszMNj4SuxPAoaOxGqTxtSJT42WGIHTJrbjbySISbDWaM5GJS3zAHI6F8ppFqhMaUQ8ioZluPMFCkRZ9GynBjSUg7dzgrkuRnXSJtadKRu1toOQqxQPFfLuQM9q1jBy%2B7ifcO9qhjLy4hTzRcBFzVAwg51A5TGCoA7o7OgNisM%2FI7hToQKcelHtztRXAXPskX%2BBeW5DFOCLhjoOrsmlzFKyGLCfXxM80iKArh6m%2BbqVBKQTN5pYnlB0EWM%2BSLRhnf2zIOJgua61YMIOF%2Fb4GOqUBqCPbsZ%2BHXIEasahFyNQuMm1wan1NkPELrA7iVug0MmE8g6rrQH2Ghuu0A%2F42%2B5aPBtHLyyqfqWpfYKL7MpFrBhilNVuy4mh6yp4nQTL3%2FGHoQ0krsBTQ%2BeZDsPLfFHqQGERkc9LHznsx2NmOe3AhvGE8TjcWaW2Zzrg6NDOMkfPY2KeeERXg6XukqzL7Byq82e5Uo78Ll7XIM8NK3FsMczNCw%2Fh9&X-Amz-Signature=dcdcea7234821ecf8d77f5f3682ecc761339466fd1ddeb57b6f188cf385a05fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
