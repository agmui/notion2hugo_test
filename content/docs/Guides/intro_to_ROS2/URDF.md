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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNISHK3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD%2Fa2%2BfFLshj%2Fu5M%2BxDpDLzD9LNLWAUZzLcoN6HjjjUfgIgHU1J4Dk7nu6wAPj67YDCDHH33QCu1v%2B2ouPbcokwOdIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsQ1LaDBG8QVu5UOircA4UqGOq2fyqTbq5PMkwG060J8eZXMmKuRsegXZfpExtMbCUbaeYn1R00RklXxiMtLITi6%2BrOvHHHQKCWoXUEgEJGGzbp7%2FQHAa6xN3b3HhxH9QGU5F9%2FDAw3Yhbg77PRGjkxsNlKUyKcjKfcNqmy3L%2Fznzf1Zj8uJmBbcn6fcWtNXcp2py3FcJiFrSglqQ6ABBaS3inFopTqmNUt%2BhAYxyX7K4iuMarFLykdBSd6UlgrU0z4orwUEGN58EsFKMPnCnOi74FKKJbUhFx%2FGhhvm5vWyCgmgDs0Al%2FsV5BSSja35PQ%2BDD05%2FdmjSVygpw7ZBPytc%2FFV6Gu8mIjhVVafBghgDi%2B6t9uCUUQA0Hqz9n9e9xdvud%2BQfpQEFHw2xwLBnoZ%2FrdEOQzs0WUXTFz%2Bxd9T0Ap%2FTmMZ%2BiSjPlcI%2BuK1ITk%2FWAvOUrwja4kQUhAliaZxHk3MEvO1mqHrikj29hR4wBGvlfcQqQuXiWrMriFUnFDsY%2FGKWh1eAX45ltia1xDz8PXQDnvs%2BH%2BrpamwvZHTOUMSvZnAGrMxHpLtII7vz7fkEVXrNH6Nt%2BnoB1yBzNleURr4zngeiAq3qcms8Uk3zW2JHwAetQ78X6tOVik0kPFA6jFAtO58B8SiRMMewmMMGOqUBhgsU5sv2nYATMIaAhZMUXZlJiG72GbxO3WAO33s9aZDr0PijY3Co1peJCS7aIVsk5BWFPB4DO7wr6NBb%2FUO3ZEf9WKkQ5J3b6gVIDn2BTzatbb0OYoz7Gciz8IPFmmN7cRFWh63BajmrY5fWrRthJVrSmzg3nXpuDOyzY6rr67nGKKZD5ekyuB6Eqekgvry27rK3AbFk6QcVpywj3SXnKPmwnKXb&X-Amz-Signature=6d77b20a7cdd9f9e230d649cd1d94920c595faff7939ae0066fa65e5195e3f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNISHK3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD%2Fa2%2BfFLshj%2Fu5M%2BxDpDLzD9LNLWAUZzLcoN6HjjjUfgIgHU1J4Dk7nu6wAPj67YDCDHH33QCu1v%2B2ouPbcokwOdIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsQ1LaDBG8QVu5UOircA4UqGOq2fyqTbq5PMkwG060J8eZXMmKuRsegXZfpExtMbCUbaeYn1R00RklXxiMtLITi6%2BrOvHHHQKCWoXUEgEJGGzbp7%2FQHAa6xN3b3HhxH9QGU5F9%2FDAw3Yhbg77PRGjkxsNlKUyKcjKfcNqmy3L%2Fznzf1Zj8uJmBbcn6fcWtNXcp2py3FcJiFrSglqQ6ABBaS3inFopTqmNUt%2BhAYxyX7K4iuMarFLykdBSd6UlgrU0z4orwUEGN58EsFKMPnCnOi74FKKJbUhFx%2FGhhvm5vWyCgmgDs0Al%2FsV5BSSja35PQ%2BDD05%2FdmjSVygpw7ZBPytc%2FFV6Gu8mIjhVVafBghgDi%2B6t9uCUUQA0Hqz9n9e9xdvud%2BQfpQEFHw2xwLBnoZ%2FrdEOQzs0WUXTFz%2Bxd9T0Ap%2FTmMZ%2BiSjPlcI%2BuK1ITk%2FWAvOUrwja4kQUhAliaZxHk3MEvO1mqHrikj29hR4wBGvlfcQqQuXiWrMriFUnFDsY%2FGKWh1eAX45ltia1xDz8PXQDnvs%2BH%2BrpamwvZHTOUMSvZnAGrMxHpLtII7vz7fkEVXrNH6Nt%2BnoB1yBzNleURr4zngeiAq3qcms8Uk3zW2JHwAetQ78X6tOVik0kPFA6jFAtO58B8SiRMMewmMMGOqUBhgsU5sv2nYATMIaAhZMUXZlJiG72GbxO3WAO33s9aZDr0PijY3Co1peJCS7aIVsk5BWFPB4DO7wr6NBb%2FUO3ZEf9WKkQ5J3b6gVIDn2BTzatbb0OYoz7Gciz8IPFmmN7cRFWh63BajmrY5fWrRthJVrSmzg3nXpuDOyzY6rr67nGKKZD5ekyuB6Eqekgvry27rK3AbFk6QcVpywj3SXnKPmwnKXb&X-Amz-Signature=dec65e7502c7eba76f4de0421bbd21d85c516af23546b72f091a8f8c8ce55598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
