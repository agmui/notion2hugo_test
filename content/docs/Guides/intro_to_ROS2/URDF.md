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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUU4DQGY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGYLsLO%2B2kh2%2FupXHiwx%2ByBLLKvdzPxlIqhs1Svtd%2BprAiEA%2F3GF5EuZ1Kx6pSubgX9mz1rMZ4%2FycGOnFhA7iOCTQngqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq6%2F8XPZ%2FfJ26eXxSrcA6Q4SSSbkIt5S03wvRQAIIhO872oslWHfsADDq7ENCXq3eyPKCW0gPiyATbxeBOE%2B0BkEndDj2JLknA3heIGMmmFi%2Bkr4v9yNz3ebtFQSZmBUEFNfeP7Z%2FWBgFUwbN9rJ63KUInTJyjVVbIdsYzigtbQwaD%2Fx9f6JGf24ADrQBjs2o0OZvyX14Nc0vfhpl%2BlaxsMLvO8zca6%2F%2BZpZ1P%2F7xlFclYTtG8fi4WymHSFo9R7zFPNTjRqcOUHcj6j%2BxaQy%2Bosg%2BkWfSdR5F%2FdyY5g0qlOSi31jERv4jI4CixUh%2B8uApn5%2BPsF0JIOexCiL3zsCvT0Ng6DnvuKgQO56O4x49gcm59GC%2Be85CRGHpfGhJQGamN%2Bt2K0eKflFfpGCK0J9dbfgPqguHP9THvMOXNvn8ZKaV6vZx44UeZie9j1lkmzVl0BEMCHlthX5mZzngiu%2BUBtjEt8DJ2AKW1hDN1LBKYUqY7COXfNdusXkRIeSy1mBeb77B7ZSjAh3WGJvUvZffPv7wKpOnm2TcONeJtDFg1wtF2CTO%2FZfmD79tpqmMBt1NLq377Dx5u7R0boTuIyp9sdPAyPA6Y2SICBk5AOZ6XWhrpzPOq1f7bJ6nT1k3ZlyHzilujhg5waMfjxMOb838IGOqUB18nnQsbezuF2XTPomrzEwaaVKo5HvPbbLFNAwzKAxNBECifmqxjdjT2%2FYH1RjhqrWgmpcjEpOdWJvK%2F43seDT5dL0Q%2FfaAVjB4%2Be35LH5fJsJKkebTndlr6AWLzGShfczhH8%2BlOIwQCWD%2FrHcG2qS3KO8b5SJh5KJEKfW4afRn5ZwL%2BxfiObGwPzxC3zZPUiHc%2BCyJkYQ8sEvulU8cQ%2FEmDS5K5M&X-Amz-Signature=e19332ece6fa2b7dc2ed47d4efa038c87faf6840f310c22faf5840c6b1d12d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUU4DQGY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGYLsLO%2B2kh2%2FupXHiwx%2ByBLLKvdzPxlIqhs1Svtd%2BprAiEA%2F3GF5EuZ1Kx6pSubgX9mz1rMZ4%2FycGOnFhA7iOCTQngqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq6%2F8XPZ%2FfJ26eXxSrcA6Q4SSSbkIt5S03wvRQAIIhO872oslWHfsADDq7ENCXq3eyPKCW0gPiyATbxeBOE%2B0BkEndDj2JLknA3heIGMmmFi%2Bkr4v9yNz3ebtFQSZmBUEFNfeP7Z%2FWBgFUwbN9rJ63KUInTJyjVVbIdsYzigtbQwaD%2Fx9f6JGf24ADrQBjs2o0OZvyX14Nc0vfhpl%2BlaxsMLvO8zca6%2F%2BZpZ1P%2F7xlFclYTtG8fi4WymHSFo9R7zFPNTjRqcOUHcj6j%2BxaQy%2Bosg%2BkWfSdR5F%2FdyY5g0qlOSi31jERv4jI4CixUh%2B8uApn5%2BPsF0JIOexCiL3zsCvT0Ng6DnvuKgQO56O4x49gcm59GC%2Be85CRGHpfGhJQGamN%2Bt2K0eKflFfpGCK0J9dbfgPqguHP9THvMOXNvn8ZKaV6vZx44UeZie9j1lkmzVl0BEMCHlthX5mZzngiu%2BUBtjEt8DJ2AKW1hDN1LBKYUqY7COXfNdusXkRIeSy1mBeb77B7ZSjAh3WGJvUvZffPv7wKpOnm2TcONeJtDFg1wtF2CTO%2FZfmD79tpqmMBt1NLq377Dx5u7R0boTuIyp9sdPAyPA6Y2SICBk5AOZ6XWhrpzPOq1f7bJ6nT1k3ZlyHzilujhg5waMfjxMOb838IGOqUB18nnQsbezuF2XTPomrzEwaaVKo5HvPbbLFNAwzKAxNBECifmqxjdjT2%2FYH1RjhqrWgmpcjEpOdWJvK%2F43seDT5dL0Q%2FfaAVjB4%2Be35LH5fJsJKkebTndlr6AWLzGShfczhH8%2BlOIwQCWD%2FrHcG2qS3KO8b5SJh5KJEKfW4afRn5ZwL%2BxfiObGwPzxC3zZPUiHc%2BCyJkYQ8sEvulU8cQ%2FEmDS5K5M&X-Amz-Signature=b2716ab979e2a7503f282cb7fa9c3e09ae422ff95a49c1d24d5bf449e2e39e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
