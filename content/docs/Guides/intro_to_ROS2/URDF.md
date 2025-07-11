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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV224YU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BAWGp9p0AS14f8xHczGtTX5A6BKbp8FO%2FLKRP1IxieAiBl9u061LZN8BDXmPEfj2lU62aWZWp45i6cLzlkINnt3iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhdaM8Vx663SbRAfKtwDqJlG5O1zAd%2BLjOmMA0VUdEX70QgKlsyteTAkILrc%2FRtqii3m%2BDMY86x8J%2BwyKxsUftKGjOIYTAOMhw41BvpOhqQwh%2BGWOIm4YTKLteoQFKuiEtO7ai2OAsxjmWrDRxbCRWmidmkzCxF847oaO5VZbfgupFAFf2RCMgMz62T4hqzm1eXsIdYHtMKPUJkXkfB9HCNBuLTfsrBQ0%2FGqDInRg4hyn6NG%2BY%2FaRQLs11wo65a1%2FPWlZqLguPtJMOvWa3R3PZUlykM1xQM6kN%2FmB9%2BE4%2BQeHtIsetVO0xprpa6%2F%2FDaDehO%2BogPCwDSQ4B4ojMPiB%2F71d4lyjQY3tHzYHphxjlgXi75TlHL3zR5G%2FzYhT9p1kuoH3hwRpv9toQ1zO8LCcXpBDlVeqFqyLYNy91VNCS5M9XqJiqgjcKclSnF4D3DNRxlDigynU5FjJj%2B8L%2FC6NZpMNFMJoePO5JMcUcp9shq6k3UOB30LMFPwi0oxqafktMnKE3jxrK2fzvLUg6wkDXZ2a1W8uQgVWNzxiZIoLE6gh64cpyPaXUWz6raIl35%2B9Wab054yj9F3FxFZkeYkrVzito9baEiVEhwEFUII3ahA9mglQB0JKB5lOtsmC2X%2FO6ACBR1Ewt7h%2BHAwjvzBwwY6pgGuJgLxlujQ26FizabVkXt3JY78gkuDcwxFkiaHsAQO9pZ4YjuPLQaCEaUh%2FmIjo0yzfjW5Pabcjwa8zVqLlQsyfkrHaL6ImvnVZNbAI18LZNzZiFdoAT9rdlbcRAvL5YSas7%2BS16HmQPqzj%2F%2BiWD8skPepgit71kDaeedn%2BKd5QQMi5g1CMmsqMo%2BIVmPjvMeAJqUml9tApDGA%2Fn8XCTqRTaFPMvBa&X-Amz-Signature=d45b98ee747ab85f4a938bfcb9415e12558960a676cad50d03f8fe0c95c4d52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV224YU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BAWGp9p0AS14f8xHczGtTX5A6BKbp8FO%2FLKRP1IxieAiBl9u061LZN8BDXmPEfj2lU62aWZWp45i6cLzlkINnt3iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhdaM8Vx663SbRAfKtwDqJlG5O1zAd%2BLjOmMA0VUdEX70QgKlsyteTAkILrc%2FRtqii3m%2BDMY86x8J%2BwyKxsUftKGjOIYTAOMhw41BvpOhqQwh%2BGWOIm4YTKLteoQFKuiEtO7ai2OAsxjmWrDRxbCRWmidmkzCxF847oaO5VZbfgupFAFf2RCMgMz62T4hqzm1eXsIdYHtMKPUJkXkfB9HCNBuLTfsrBQ0%2FGqDInRg4hyn6NG%2BY%2FaRQLs11wo65a1%2FPWlZqLguPtJMOvWa3R3PZUlykM1xQM6kN%2FmB9%2BE4%2BQeHtIsetVO0xprpa6%2F%2FDaDehO%2BogPCwDSQ4B4ojMPiB%2F71d4lyjQY3tHzYHphxjlgXi75TlHL3zR5G%2FzYhT9p1kuoH3hwRpv9toQ1zO8LCcXpBDlVeqFqyLYNy91VNCS5M9XqJiqgjcKclSnF4D3DNRxlDigynU5FjJj%2B8L%2FC6NZpMNFMJoePO5JMcUcp9shq6k3UOB30LMFPwi0oxqafktMnKE3jxrK2fzvLUg6wkDXZ2a1W8uQgVWNzxiZIoLE6gh64cpyPaXUWz6raIl35%2B9Wab054yj9F3FxFZkeYkrVzito9baEiVEhwEFUII3ahA9mglQB0JKB5lOtsmC2X%2FO6ACBR1Ewt7h%2BHAwjvzBwwY6pgGuJgLxlujQ26FizabVkXt3JY78gkuDcwxFkiaHsAQO9pZ4YjuPLQaCEaUh%2FmIjo0yzfjW5Pabcjwa8zVqLlQsyfkrHaL6ImvnVZNbAI18LZNzZiFdoAT9rdlbcRAvL5YSas7%2BS16HmQPqzj%2F%2BiWD8skPepgit71kDaeedn%2BKd5QQMi5g1CMmsqMo%2BIVmPjvMeAJqUml9tApDGA%2Fn8XCTqRTaFPMvBa&X-Amz-Signature=15139e56353bcad5e064ae77c9157a5bc0502fd37e6d174b3026241879dd2158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
