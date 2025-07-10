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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NN2DTF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz2NQFmCi6F%2BgkMU7pjqcMpAjmGepuib5AWzGQDDeJRAiEAhSFoPf0SxgiYvzRCMEPSzGjgXHi3Z0gq5U9QrwS9F3MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFf%2BhOWkMxyQISOcircA1kfzRvOkkn4RLMnZi%2B5ywbRVXn21gaSawyiYV8mteZtgUD%2Feg6CFwD%2BsNVHIt6k01%2FzdYg3R1QHFXLevd54mU3uGVkAInK4lRK805SeF0H4yqUoAeBYj3AJS1bt0dpHKe6XXMINGm9Qi2LUs%2FWJDCZ1gHjt54aaWglKLyK49z51Z1WEl5c6gbo4iuYOO5WIAHPU7EjnpHSCcsySJ749p7z1XD5dgwaZRW5YpBfB%2Fh4wQpe3XFk10TD1KUU4%2BSYYfqV5mh3YkHRbAWdKaVP2f%2F0ZomvhzNSf%2B0kignW0%2BZ7Mz5unr9hVjSyFJrs1ETP37nh9D2UVFtBkRr4%2B1H%2FN86pYtCvhzTi43uxcVHC6KamjEkO3FfWgpiP%2BRRwFQQVDwJJB4DD1xHTI3dMArMMoCzi0gAm1bCm7UGSNoPO86Ww7z17DWl1%2Bpilh8Kf%2BsSJeVgJzVJwGtNd6KvlfURGR4CpgR6dKxUYMJAs7AwjAfk9Z3y0VrXSgjVE6%2Ftac2TvV1X9Gi%2FGLGN8CsDQBRE7cENAHAjcMZksi57dKy8PviopsBcBOR1LetuaJB%2BsU%2FAHzRIEsqUyECKc9CBhOh%2FLM4K6c7rClku1wfFYAail2KQ15My6niMIUPSmWL3uDMKrUvsMGOqUBbFpvTLUQ6M0pdQs8sP6NijvGlKp3PzW97Nel207bKDpYNUSDH6rWvqgCzSJ%2FFHDHkA8VK%2FpMEAHJQapTLN%2BqHIKkCnmBlsZunXTMDZ8%2FYDn1vmKfZJTTncNUqNFmXgqJCGEgxSz5RV0K3ahIIVF6ftIbPLB70QnXCCjqxHLkWutb0loAn2qWGCzIC1vGfqsPeZY6L2LSXl1GAT7hkYmdKJTMtBW1&X-Amz-Signature=b8f31be50dc201a350bac5ec55680ac7b30f060bc7957669b8060fbd5152ff53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NN2DTF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz2NQFmCi6F%2BgkMU7pjqcMpAjmGepuib5AWzGQDDeJRAiEAhSFoPf0SxgiYvzRCMEPSzGjgXHi3Z0gq5U9QrwS9F3MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFf%2BhOWkMxyQISOcircA1kfzRvOkkn4RLMnZi%2B5ywbRVXn21gaSawyiYV8mteZtgUD%2Feg6CFwD%2BsNVHIt6k01%2FzdYg3R1QHFXLevd54mU3uGVkAInK4lRK805SeF0H4yqUoAeBYj3AJS1bt0dpHKe6XXMINGm9Qi2LUs%2FWJDCZ1gHjt54aaWglKLyK49z51Z1WEl5c6gbo4iuYOO5WIAHPU7EjnpHSCcsySJ749p7z1XD5dgwaZRW5YpBfB%2Fh4wQpe3XFk10TD1KUU4%2BSYYfqV5mh3YkHRbAWdKaVP2f%2F0ZomvhzNSf%2B0kignW0%2BZ7Mz5unr9hVjSyFJrs1ETP37nh9D2UVFtBkRr4%2B1H%2FN86pYtCvhzTi43uxcVHC6KamjEkO3FfWgpiP%2BRRwFQQVDwJJB4DD1xHTI3dMArMMoCzi0gAm1bCm7UGSNoPO86Ww7z17DWl1%2Bpilh8Kf%2BsSJeVgJzVJwGtNd6KvlfURGR4CpgR6dKxUYMJAs7AwjAfk9Z3y0VrXSgjVE6%2Ftac2TvV1X9Gi%2FGLGN8CsDQBRE7cENAHAjcMZksi57dKy8PviopsBcBOR1LetuaJB%2BsU%2FAHzRIEsqUyECKc9CBhOh%2FLM4K6c7rClku1wfFYAail2KQ15My6niMIUPSmWL3uDMKrUvsMGOqUBbFpvTLUQ6M0pdQs8sP6NijvGlKp3PzW97Nel207bKDpYNUSDH6rWvqgCzSJ%2FFHDHkA8VK%2FpMEAHJQapTLN%2BqHIKkCnmBlsZunXTMDZ8%2FYDn1vmKfZJTTncNUqNFmXgqJCGEgxSz5RV0K3ahIIVF6ftIbPLB70QnXCCjqxHLkWutb0loAn2qWGCzIC1vGfqsPeZY6L2LSXl1GAT7hkYmdKJTMtBW1&X-Amz-Signature=bc8f927a2197f20b5013d5713d29ade8905257c6be9201f762fb58eb12533051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
