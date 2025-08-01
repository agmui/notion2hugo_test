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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BEKLDJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYCyrAvGMxlXU1D9ucM5%2B1pfLw%2BdBHGfHVLjV5YXigZAiEAsBcCe5h7kx5Vquwsoxo8iBKoG0TuWKOOYR9eR%2BK00yUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj4cbX8nl0TFE2vDircA1mZFAPJgB6%2Fjc%2FogkPUVustb%2Fht2qmG8Lb%2F0VsyFH%2FzoCPKmhrEo7l8Mti4RMh38qw8tnBLxHJ1XsG2EtkJ6HdDEzEw2yHBeUN2ofGEAcwPytBNjr4xlyLtPczf%2FtUYVJE7qrQiEkhs5BmFJES7nFaS6%2BXI%2BATTkbWyDWBMrfEu5Z8p%2BbZ2Bbnw38GW5kzUXRCPeQN73N4qB2uCs8JW1fr8x8xJ7b%2B1Q%2FSiCJhxiMJhEHu2rZsTcJrEkFb%2FrHbg%2Fw6yScj9xbLHjUanMNPqB%2B8l6xpgDmllrgT7L5Zq6qYWw00zakrn%2BlwtiQuHRmCO6%2FisrsgM5zprDnIv%2FmzBYCMBaDQwbdupu9Z9l0q1feMRjdD%2FUopHe1F8sDcLrYBTiGx39U%2F76yvLI0b00NZdcV2IDTXE5Abm9SnUh%2B%2FXcDxOu5THjrGsMNlS88%2FB6G3CTCIUsnDRQ7oYHuGdSofDncW%2Bg8TVuCTvDvadTvp5N4soVRicHkphh55G2kfNepvt5q61SKiOqFCJi6%2FQr0bbDToLgi6sisNP5P0cUq%2BMXiGnd1Qkn34xUP9PJL4ZshT5ZTdKxbaFdmQ0G5QVFutyI%2Bxs9pfRTjTdlSkNuLTmzU2s0ddIW%2BcRvDBhyJ9SMPzGtMQGOqUBajkplBaIIVlNUN71ltDM%2FiDDskvhXosSJw0KII0aRrTVU3DbSEmlu2wPF1bAEeP8K5evPgRAjNCSRvb6ezRT5VoV32YCV3nTFMXz%2BbbID3%2BHb1TDr9Tt%2FER2YmTDVBT8KHvOPDAxxjoyG0hz6vcf8ADWPCe0OrOHNLgmKm9Ysp68y1M7O7TUFY%2BV36DDQEYuY6W9plkBZjJ9nQZflP1u9aYBkaT4&X-Amz-Signature=c166d6732a84e1403bfe3d16a3daf2a7b792426a1b2db123a4704e12b36c340e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BEKLDJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYCyrAvGMxlXU1D9ucM5%2B1pfLw%2BdBHGfHVLjV5YXigZAiEAsBcCe5h7kx5Vquwsoxo8iBKoG0TuWKOOYR9eR%2BK00yUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj4cbX8nl0TFE2vDircA1mZFAPJgB6%2Fjc%2FogkPUVustb%2Fht2qmG8Lb%2F0VsyFH%2FzoCPKmhrEo7l8Mti4RMh38qw8tnBLxHJ1XsG2EtkJ6HdDEzEw2yHBeUN2ofGEAcwPytBNjr4xlyLtPczf%2FtUYVJE7qrQiEkhs5BmFJES7nFaS6%2BXI%2BATTkbWyDWBMrfEu5Z8p%2BbZ2Bbnw38GW5kzUXRCPeQN73N4qB2uCs8JW1fr8x8xJ7b%2B1Q%2FSiCJhxiMJhEHu2rZsTcJrEkFb%2FrHbg%2Fw6yScj9xbLHjUanMNPqB%2B8l6xpgDmllrgT7L5Zq6qYWw00zakrn%2BlwtiQuHRmCO6%2FisrsgM5zprDnIv%2FmzBYCMBaDQwbdupu9Z9l0q1feMRjdD%2FUopHe1F8sDcLrYBTiGx39U%2F76yvLI0b00NZdcV2IDTXE5Abm9SnUh%2B%2FXcDxOu5THjrGsMNlS88%2FB6G3CTCIUsnDRQ7oYHuGdSofDncW%2Bg8TVuCTvDvadTvp5N4soVRicHkphh55G2kfNepvt5q61SKiOqFCJi6%2FQr0bbDToLgi6sisNP5P0cUq%2BMXiGnd1Qkn34xUP9PJL4ZshT5ZTdKxbaFdmQ0G5QVFutyI%2Bxs9pfRTjTdlSkNuLTmzU2s0ddIW%2BcRvDBhyJ9SMPzGtMQGOqUBajkplBaIIVlNUN71ltDM%2FiDDskvhXosSJw0KII0aRrTVU3DbSEmlu2wPF1bAEeP8K5evPgRAjNCSRvb6ezRT5VoV32YCV3nTFMXz%2BbbID3%2BHb1TDr9Tt%2FER2YmTDVBT8KHvOPDAxxjoyG0hz6vcf8ADWPCe0OrOHNLgmKm9Ysp68y1M7O7TUFY%2BV36DDQEYuY6W9plkBZjJ9nQZflP1u9aYBkaT4&X-Amz-Signature=29d47c2b7a205c4896a7f7b4fcf5cd019014870403fb4408227c403376095c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
