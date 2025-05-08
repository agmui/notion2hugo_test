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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDNXMFP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpSZ6zlU5D0ucIrJA0oFfy8a3zcFnfQU4QWXQyrunRLwIgb%2F6ugI7Pqw6cL37Somo6DeUU9dDwFHjqrh0zjIn9oxcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDK1twDU6jv4KRCO8FSrcA9G1%2BaSf9R1%2FzM40GwJK8AKjhMlMdHwzhfDatxe5H4fw3tlILErJlNpi%2FwJf0X5r0ZVWKzcuR8iH82ArmQ9HlZycftzRAGSgda7EP1fQbtAUjZQk8YeAKnnZQ63OM4RvjNeFyaGwM1pZVh5e6fYsy8ZktuP4glSFMCs4cSqoU0%2F0e3mZYjPgSFcWOVvOHvvq3xRE%2Bifg%2Fq6AsQspn0LqE7K0Esaefej1VH6xj4ylX2n%2FTcEZVrBwXvZauoohNH%2BDBJ8yNIJeumka5NJ6RsOtGAfBy%2BYM672I8G3%2FzhfAMM8VP6ZjirnqtWKNysFe80iO9gNkLswj8zdnwrCcZCu6HorvN9n84WNEBXYtFwadXcV9EPR47AO66UPFxwIWbII8kpUlxBixMDbp%2FN1AYYN9j7%2FkJi5FEcXpKqMKxJw%2FwPFGxYYikeXrcFB02Pw7y23%2Bgfa5m1bNqL6dZavxOAQ5MKz%2BepcUtz7kd01AJauQtk0ESvUT5HQGBWRvcEgFQnm1pPVTY9U5fAlcelsAK1BTBOsSNcX7Gpv2zaNICiCKObnDMWLyEUGASGA0QbeKAIC78ie4EnnoqLoLr4qXJpv8gd57TmmevwPZ8T9E6sxzD48F6HsiIlKKiB23im5ZMPqr8cAGOqUBPo0PQtFFXdGf864VNY%2FVz0BeAe3waB1ugCwgJ%2BEi1bGUzorOIHRVo%2FFdZEun3THs%2F8sKsoxP2PohlF5rH8m8QwG5OrXZ8GW6CgTjdX64CHFNihjOiQLThu01JFfWoYjXnHb%2BFq0gOkNLX8ihkoK3TWy2zax15pHzEK4iampihX0fKivWvjNlAMWNSzyPzOh2LbOSdJFehFjsUlY6thXmjA7PZVlQ&X-Amz-Signature=7308fb3ee029a7d111a2643c42177438acb6cd339da4ba4e62a62dcb8e512db1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDNXMFP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpSZ6zlU5D0ucIrJA0oFfy8a3zcFnfQU4QWXQyrunRLwIgb%2F6ugI7Pqw6cL37Somo6DeUU9dDwFHjqrh0zjIn9oxcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDK1twDU6jv4KRCO8FSrcA9G1%2BaSf9R1%2FzM40GwJK8AKjhMlMdHwzhfDatxe5H4fw3tlILErJlNpi%2FwJf0X5r0ZVWKzcuR8iH82ArmQ9HlZycftzRAGSgda7EP1fQbtAUjZQk8YeAKnnZQ63OM4RvjNeFyaGwM1pZVh5e6fYsy8ZktuP4glSFMCs4cSqoU0%2F0e3mZYjPgSFcWOVvOHvvq3xRE%2Bifg%2Fq6AsQspn0LqE7K0Esaefej1VH6xj4ylX2n%2FTcEZVrBwXvZauoohNH%2BDBJ8yNIJeumka5NJ6RsOtGAfBy%2BYM672I8G3%2FzhfAMM8VP6ZjirnqtWKNysFe80iO9gNkLswj8zdnwrCcZCu6HorvN9n84WNEBXYtFwadXcV9EPR47AO66UPFxwIWbII8kpUlxBixMDbp%2FN1AYYN9j7%2FkJi5FEcXpKqMKxJw%2FwPFGxYYikeXrcFB02Pw7y23%2Bgfa5m1bNqL6dZavxOAQ5MKz%2BepcUtz7kd01AJauQtk0ESvUT5HQGBWRvcEgFQnm1pPVTY9U5fAlcelsAK1BTBOsSNcX7Gpv2zaNICiCKObnDMWLyEUGASGA0QbeKAIC78ie4EnnoqLoLr4qXJpv8gd57TmmevwPZ8T9E6sxzD48F6HsiIlKKiB23im5ZMPqr8cAGOqUBPo0PQtFFXdGf864VNY%2FVz0BeAe3waB1ugCwgJ%2BEi1bGUzorOIHRVo%2FFdZEun3THs%2F8sKsoxP2PohlF5rH8m8QwG5OrXZ8GW6CgTjdX64CHFNihjOiQLThu01JFfWoYjXnHb%2BFq0gOkNLX8ihkoK3TWy2zax15pHzEK4iampihX0fKivWvjNlAMWNSzyPzOh2LbOSdJFehFjsUlY6thXmjA7PZVlQ&X-Amz-Signature=15a6265ec675dac301ad607302aebe59dc9a111ffa76c1e132854be7ef0e1ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
