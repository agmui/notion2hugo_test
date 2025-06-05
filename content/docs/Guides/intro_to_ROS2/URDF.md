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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZUWMMR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDFAzbu%2Bat4%2Fj0OG4MLSuB5XjpY%2FeTbr%2FQrhl6l2qX0iQIhAKFICX51vfBXiqAnB3J1ZLHWmje2wSYBzQOuIRrlbdnPKv8DCD0QABoMNjM3NDIzMTgzODA1IgzN4qtaiYFnYeEALiYq3AMLl6JXan4V5WwwGq5iPkSEks8SxrVCtVeTWbNQiAefzsFHYJkepTa0XCR1S6bwVdJOzmbxcZPmIx0RZnMushe0w5iOPK6wOMWlTYDKfu73dMTgKT8tHktq2veyJfYX6nCAatbW3F4LzJon2MPqDt0ZmZgMZUGuL5zsZS4Gd2VUt2wcfXrj4HpKspnGpSzgrLncJZR%2F8waf0JP2mzxZ%2FaFV4%2FeV5NNd71BmwJfIEltkB1yUZ0wZUC4Y2VB5PHjRnAXBVgTQkK7395krEuhjY1qDErIvnnmydVIG3C%2FJWbtv2PUE5ZE4dST0r6UpLdbQJCOdLlDmfO6%2BQWHMnpLH%2BeWbBzmEmlved%2BB%2FxpscZasS08dRxGFuG6J8rsqcYYVyPAnC%2FNIFZyjlZCC9lUqPGuh2EaNbtpUmP2LhE0ZHj2gUl0aghwBaVRiojYzyL5%2BOsfoeA%2BdIzSBVV4BfBLMKddiXs0wRFsISYbYwa%2FEt%2FlBrXXbyr5e%2FGAXMGAm6SU0%2Fbyum7ulN4qNJme9SjPhwEbs%2BEyEY0%2BeR17axobU%2B2RDyKRM4GeKS1qq4eoIXnixWNd8f8f6sPpsmRzu7l77oXH9OHQ3rYGv6XOYLujKEtfYfXP23gvKT2NnT9EpNHzD9poTCBjqkARSjP%2BEYYPbc9d6oPW33uLIRWBc1cOqMou6hO9okxF1C%2FscXM8uISpPA0MHMQXCidxdscVCprR3C2cWPb%2Ftaxjq1h2lAe7qZjDaCf9Hoos0im2yLJkyn4E3xPXHtZCEzzU3mOy%2F1xmMZb0%2FpQEAQBNpjwQP2JJKUdu4ps8etJkH6EqIT2k4Yo01TVBCJEzeTxeyhY3sbESS44EnWTxS7Y%2FqM%2F2EA&X-Amz-Signature=69fd23751ea1595e6ec13e2df1eae36a21a71bee52cb45bf2cb5336c4bdc36c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZUWMMR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDFAzbu%2Bat4%2Fj0OG4MLSuB5XjpY%2FeTbr%2FQrhl6l2qX0iQIhAKFICX51vfBXiqAnB3J1ZLHWmje2wSYBzQOuIRrlbdnPKv8DCD0QABoMNjM3NDIzMTgzODA1IgzN4qtaiYFnYeEALiYq3AMLl6JXan4V5WwwGq5iPkSEks8SxrVCtVeTWbNQiAefzsFHYJkepTa0XCR1S6bwVdJOzmbxcZPmIx0RZnMushe0w5iOPK6wOMWlTYDKfu73dMTgKT8tHktq2veyJfYX6nCAatbW3F4LzJon2MPqDt0ZmZgMZUGuL5zsZS4Gd2VUt2wcfXrj4HpKspnGpSzgrLncJZR%2F8waf0JP2mzxZ%2FaFV4%2FeV5NNd71BmwJfIEltkB1yUZ0wZUC4Y2VB5PHjRnAXBVgTQkK7395krEuhjY1qDErIvnnmydVIG3C%2FJWbtv2PUE5ZE4dST0r6UpLdbQJCOdLlDmfO6%2BQWHMnpLH%2BeWbBzmEmlved%2BB%2FxpscZasS08dRxGFuG6J8rsqcYYVyPAnC%2FNIFZyjlZCC9lUqPGuh2EaNbtpUmP2LhE0ZHj2gUl0aghwBaVRiojYzyL5%2BOsfoeA%2BdIzSBVV4BfBLMKddiXs0wRFsISYbYwa%2FEt%2FlBrXXbyr5e%2FGAXMGAm6SU0%2Fbyum7ulN4qNJme9SjPhwEbs%2BEyEY0%2BeR17axobU%2B2RDyKRM4GeKS1qq4eoIXnixWNd8f8f6sPpsmRzu7l77oXH9OHQ3rYGv6XOYLujKEtfYfXP23gvKT2NnT9EpNHzD9poTCBjqkARSjP%2BEYYPbc9d6oPW33uLIRWBc1cOqMou6hO9okxF1C%2FscXM8uISpPA0MHMQXCidxdscVCprR3C2cWPb%2Ftaxjq1h2lAe7qZjDaCf9Hoos0im2yLJkyn4E3xPXHtZCEzzU3mOy%2F1xmMZb0%2FpQEAQBNpjwQP2JJKUdu4ps8etJkH6EqIT2k4Yo01TVBCJEzeTxeyhY3sbESS44EnWTxS7Y%2FqM%2F2EA&X-Amz-Signature=c2534af1796b870d350ada3f0101ca6017a0e9080beec6f76230ee6f5e30e7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
