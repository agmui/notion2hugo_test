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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW44ZLCA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQcTDidBFZ2jcHP%2FPPHF1GtDy8ywXsH%2BpNau0PJx2AdAIgHDWljOzLrVHDVgx%2BwgwAJzkwsbxbIY0cCAmxbQj1OCMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKiZvIkk0qi3YpyrYCrcAxTs%2FMXUUV%2BMJqELROuGjIcdKPE%2FwqsCJ%2FnsGnmBxHArU6fAHXcp9H9cqOZg85kgzDmtobT3%2BQWWb9vwn7l1elJ9khnjtZPMFYh1JLzENmPn8ZkcFxHHolp6yrcJN6JJM4Km5UwW22bDQhH40yPGzCr0bxAcv7nhTHhlNjiKiQukLWkKKuQI3U0Pq%2FpLUU2O%2B3I5axj9IfF%2Fb7C3zolSprcxrBU3pJP51vnWBiO73K0DWrZatZjyn7OHB4r%2B%2Ff%2FYx4T19CSlZkGr0upGGFP7hCK3%2BBewH2XcVWMLXrhLPBRDb9UkRyDOsX4XerPsBU%2FNYS6%2Foe80tZ4yIjuPHvmlsNp5CIxadCrBT3bz9IC5X7Ph1Dzp2C4dsNqXgakeX%2Bz95jvEyvynAshcpdUDfZlSOJWWvusaqliQ9canl8TB4uYZk5YHK9jv3NBW7JZ6EsagEAR278%2F6cywOxXWJkpwTgU4x73MzwnGujmUh1EUXajsQSYhZJIWr%2BtHq2s284zt1lZNl1hT7VgICY3TEpFisIekRCw3GquU2xK%2FN4867Pk9opuzzNfFV0di%2Fx9vnoaP4i0UZ2xtZjj41gQza%2BLWPkcfEPZTFc5tEe1A%2FZV1MNlqWnssNBt9w2qNt4i3%2BMLL3o8EGOqUBqCMKb8BJ8y9RPkZ6t%2FafAVwfi0%2Fltw1XYDpO1z4OHCiOcmW76v5uzgAHmvR2g64j%2BHQ%2Bn%2FHK%2FK%2FRieXH4qOFz4ttelT0iQMUZlqfk%2Foio2IT1AHpVYSVyvD2hVaIEAa2ERXQVSkEpxDq%2Fc8%2B%2BPqY%2F7vLviq7YrS3t3l0iktVYPjdvOQNu%2BhH5EPVaA5ef%2BV3TirBGqql2nHjVlcnAXic0g%2FA%2Fg%2BK&X-Amz-Signature=e4611cb74b88487f730400236cbcf786f9b51a78eab7df89e21706a1a89a7ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW44ZLCA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQcTDidBFZ2jcHP%2FPPHF1GtDy8ywXsH%2BpNau0PJx2AdAIgHDWljOzLrVHDVgx%2BwgwAJzkwsbxbIY0cCAmxbQj1OCMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKiZvIkk0qi3YpyrYCrcAxTs%2FMXUUV%2BMJqELROuGjIcdKPE%2FwqsCJ%2FnsGnmBxHArU6fAHXcp9H9cqOZg85kgzDmtobT3%2BQWWb9vwn7l1elJ9khnjtZPMFYh1JLzENmPn8ZkcFxHHolp6yrcJN6JJM4Km5UwW22bDQhH40yPGzCr0bxAcv7nhTHhlNjiKiQukLWkKKuQI3U0Pq%2FpLUU2O%2B3I5axj9IfF%2Fb7C3zolSprcxrBU3pJP51vnWBiO73K0DWrZatZjyn7OHB4r%2B%2Ff%2FYx4T19CSlZkGr0upGGFP7hCK3%2BBewH2XcVWMLXrhLPBRDb9UkRyDOsX4XerPsBU%2FNYS6%2Foe80tZ4yIjuPHvmlsNp5CIxadCrBT3bz9IC5X7Ph1Dzp2C4dsNqXgakeX%2Bz95jvEyvynAshcpdUDfZlSOJWWvusaqliQ9canl8TB4uYZk5YHK9jv3NBW7JZ6EsagEAR278%2F6cywOxXWJkpwTgU4x73MzwnGujmUh1EUXajsQSYhZJIWr%2BtHq2s284zt1lZNl1hT7VgICY3TEpFisIekRCw3GquU2xK%2FN4867Pk9opuzzNfFV0di%2Fx9vnoaP4i0UZ2xtZjj41gQza%2BLWPkcfEPZTFc5tEe1A%2FZV1MNlqWnssNBt9w2qNt4i3%2BMLL3o8EGOqUBqCMKb8BJ8y9RPkZ6t%2FafAVwfi0%2Fltw1XYDpO1z4OHCiOcmW76v5uzgAHmvR2g64j%2BHQ%2Bn%2FHK%2FK%2FRieXH4qOFz4ttelT0iQMUZlqfk%2Foio2IT1AHpVYSVyvD2hVaIEAa2ERXQVSkEpxDq%2Fc8%2B%2BPqY%2F7vLviq7YrS3t3l0iktVYPjdvOQNu%2BhH5EPVaA5ef%2BV3TirBGqql2nHjVlcnAXic0g%2FA%2Fg%2BK&X-Amz-Signature=9d383272f06824bd48ea0077957e45cd54c235c64b3615bea978397245171c00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
