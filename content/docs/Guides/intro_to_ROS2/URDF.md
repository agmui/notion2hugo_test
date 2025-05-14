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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YFZP6T%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICQ7CKVvH1SpxjTVYYDe5nkjI7pr%2FnJMjKkiCGdDjYbSAiAyEv670VDxjAW6gofpoMQ6C2naPGAUIThlwYAw%2FYWZpiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiglQkr7KzFgnm%2FfcKtwDK9VPofhwc3iCYpaCmXbll1gi221HyCizz%2FNl66D7ogJJ554PV1pucZJryxFbHc9b5Fzcrqd7iD%2BfGn%2BLAVLjYjpQN2olCohwe5htv5WoGZcgjo7bFAMMUgZUVaKmb9EXkZOZMvc16stkr09pPLOKXuKtadBg7ExdfULpxjLSkpghdjWK%2FuXiSk4zO59uu0LoqJZw2P2YeDOgGhHMQxNanQc4jOuQxFkiCA3BhmEvgWEIvrSi6IQ6GXRy7Yy9cKAUX92STzRanDEG4rWHnpOxFpi5IWq1rX4uXLuU6FDqZIFEJF4VA0H8V0NAAhhXJ%2FI0yhe1wxf94Cd2aIO%2BNrQu6nBhIetd2i%2FcbQid6%2BRBqjS2PUqsoc6QUMz5HDUFRRDQLJbDIyOxdkDG09FsJcNH4VAxyPdSywQvt9RWbZZcaBeo8NLf3rRV8xkNoSZj9pSJsI9LdgPi8gYLd%2BKgwQ%2FaT%2B849HoPxjz59uQJIqD0yTIFCWHEP1xLMHos3EV6ZOpWLf%2BKLmy1nNoRczlWY7ul54Qx0oYGxCVybqn42Ffa1F2ziDbeKhamVsxozhWIhgtq0wFZehfajZxaxGOjhTK1eT4DxlMi%2FzWLxMDibQ1Kj%2F4%2Fwm7XbMwWhJJmJgwwir6PwQY6pgF92S7YX8zlVe96YlkOCmMXrCK51jAUDHwR7IvoHXgmkIqzGgdPPQgBTRBvsUmzrdPVysckJiCkEpJUHcA8rFEIz3CoHUf7zA1a%2BHdv1pdPGj%2FQrYw%2BWEYP94%2BTpkU72GbbBtv%2BC%2FWz9lfEMWAsi%2FkIXNfMXB5WzerZPFhGvTf2%2BDBRMfgpNoNDoPDDWLmKL5M2Mti9%2BI4qXqf0uNwE6nxAxybx6d0f&X-Amz-Signature=23fa30cd0b05b32dfa8f0d0f7be57cbab9303ad9ec655e79585810315d09407c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YFZP6T%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICQ7CKVvH1SpxjTVYYDe5nkjI7pr%2FnJMjKkiCGdDjYbSAiAyEv670VDxjAW6gofpoMQ6C2naPGAUIThlwYAw%2FYWZpiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiglQkr7KzFgnm%2FfcKtwDK9VPofhwc3iCYpaCmXbll1gi221HyCizz%2FNl66D7ogJJ554PV1pucZJryxFbHc9b5Fzcrqd7iD%2BfGn%2BLAVLjYjpQN2olCohwe5htv5WoGZcgjo7bFAMMUgZUVaKmb9EXkZOZMvc16stkr09pPLOKXuKtadBg7ExdfULpxjLSkpghdjWK%2FuXiSk4zO59uu0LoqJZw2P2YeDOgGhHMQxNanQc4jOuQxFkiCA3BhmEvgWEIvrSi6IQ6GXRy7Yy9cKAUX92STzRanDEG4rWHnpOxFpi5IWq1rX4uXLuU6FDqZIFEJF4VA0H8V0NAAhhXJ%2FI0yhe1wxf94Cd2aIO%2BNrQu6nBhIetd2i%2FcbQid6%2BRBqjS2PUqsoc6QUMz5HDUFRRDQLJbDIyOxdkDG09FsJcNH4VAxyPdSywQvt9RWbZZcaBeo8NLf3rRV8xkNoSZj9pSJsI9LdgPi8gYLd%2BKgwQ%2FaT%2B849HoPxjz59uQJIqD0yTIFCWHEP1xLMHos3EV6ZOpWLf%2BKLmy1nNoRczlWY7ul54Qx0oYGxCVybqn42Ffa1F2ziDbeKhamVsxozhWIhgtq0wFZehfajZxaxGOjhTK1eT4DxlMi%2FzWLxMDibQ1Kj%2F4%2Fwm7XbMwWhJJmJgwwir6PwQY6pgF92S7YX8zlVe96YlkOCmMXrCK51jAUDHwR7IvoHXgmkIqzGgdPPQgBTRBvsUmzrdPVysckJiCkEpJUHcA8rFEIz3CoHUf7zA1a%2BHdv1pdPGj%2FQrYw%2BWEYP94%2BTpkU72GbbBtv%2BC%2FWz9lfEMWAsi%2FkIXNfMXB5WzerZPFhGvTf2%2BDBRMfgpNoNDoPDDWLmKL5M2Mti9%2BI4qXqf0uNwE6nxAxybx6d0f&X-Amz-Signature=952fe108e9d8594a4656d8ab7d75f9987702ebfe18d224c2eb876a17e0024e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
