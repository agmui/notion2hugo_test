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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QAP3JRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDVU%2FI20879TDrKyYVFVSBdAabACIaquIr%2BpVXyEV0X5AIgPCiwwKITlyQgjyy3gLcwhzCdrOlcwnKt1dAU1RPDZ7Qq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFKrd1NDXH6uCq1fRircA3JMGhR6jWyLKgiUoT64RbGBF06kU1iMbH8lfjMQAL87nLoiweR60d2DjmIx39nn0eKydi1KDl7oZPEYhzR9sqmSQdYu8ChWk%2BBqr0Qx1hgtOEbjLA%2FYAsibIT%2FUUD9i8%2BRjFUDeEWFPYOmBWj249Q04v%2FelTSDc0rL7Z3u8y8hzRMq6weYeB2HV2AFS3ZT9aEKxEf6jWKutxF6%2F6qOvbco9gTm1H2JXv4cAGcd07BHc6y3z6cT8TYzsKdfkeamzlytvxcwmjhMIK3gjIW82drRn13fOXeoH2j%2FdjNbM8xi0gCVtzKI8s9VUKCNxFzjcxZ1Eu1qP9Qbdkn8I5yOx7VR0kEcTcwp0n7sNeCNV8fhJh5b5u%2BMLQNdFYhj2uVJtoa3Y8sAIbHcKYzhmIKFpWdy8Prq2ES5s5nVxnWL5%2FeKfx%2BRW6q32Zb4YeRaIdM0mbNyBc4oKaG3ixz3Z1LJCj283ydZBn39HOmnSApbakiUsRIIj0Ghs%2FspWrLj7xvXvDOAjpLzHSEa0ranMqByp9XvcKEUHHNdPOM8Mi%2FGdu%2Bj8kJKYeJzyBydDcPI%2F5loTX9ZYlCQVBvXsPAk9LCLdZPhm3Dhvc1%2Fif6jxtT6KrKySkfecGCFn6kpsufjFMOvX%2Fr0GOqUB0P%2Fgn4WECQrIf7ozeJwPDnz%2FzkRF04KqEi5KrO6%2FKWIM2kQiUoiUAXoDDfBLt%2BVNEIEF08ymOL7mKiIrhnWdrmSzrRzs9sRYpHy3PmNBy%2F4RRQlNT%2FVId2V1by7jnJdHAXHNePHyMY8%2FUc7NkSa1Bwlr0n196bSzgLp3tRbE0T31zOOkm9CfSkKY1XHSiMSGRR%2BQjM3GcthVmPoaKyncLE0xH8pw&X-Amz-Signature=af2ee9462f8a43ab6a06d94aac4bd9d84e6d4aebcb7509bb09fff732c56072b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QAP3JRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDVU%2FI20879TDrKyYVFVSBdAabACIaquIr%2BpVXyEV0X5AIgPCiwwKITlyQgjyy3gLcwhzCdrOlcwnKt1dAU1RPDZ7Qq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFKrd1NDXH6uCq1fRircA3JMGhR6jWyLKgiUoT64RbGBF06kU1iMbH8lfjMQAL87nLoiweR60d2DjmIx39nn0eKydi1KDl7oZPEYhzR9sqmSQdYu8ChWk%2BBqr0Qx1hgtOEbjLA%2FYAsibIT%2FUUD9i8%2BRjFUDeEWFPYOmBWj249Q04v%2FelTSDc0rL7Z3u8y8hzRMq6weYeB2HV2AFS3ZT9aEKxEf6jWKutxF6%2F6qOvbco9gTm1H2JXv4cAGcd07BHc6y3z6cT8TYzsKdfkeamzlytvxcwmjhMIK3gjIW82drRn13fOXeoH2j%2FdjNbM8xi0gCVtzKI8s9VUKCNxFzjcxZ1Eu1qP9Qbdkn8I5yOx7VR0kEcTcwp0n7sNeCNV8fhJh5b5u%2BMLQNdFYhj2uVJtoa3Y8sAIbHcKYzhmIKFpWdy8Prq2ES5s5nVxnWL5%2FeKfx%2BRW6q32Zb4YeRaIdM0mbNyBc4oKaG3ixz3Z1LJCj283ydZBn39HOmnSApbakiUsRIIj0Ghs%2FspWrLj7xvXvDOAjpLzHSEa0ranMqByp9XvcKEUHHNdPOM8Mi%2FGdu%2Bj8kJKYeJzyBydDcPI%2F5loTX9ZYlCQVBvXsPAk9LCLdZPhm3Dhvc1%2Fif6jxtT6KrKySkfecGCFn6kpsufjFMOvX%2Fr0GOqUB0P%2Fgn4WECQrIf7ozeJwPDnz%2FzkRF04KqEi5KrO6%2FKWIM2kQiUoiUAXoDDfBLt%2BVNEIEF08ymOL7mKiIrhnWdrmSzrRzs9sRYpHy3PmNBy%2F4RRQlNT%2FVId2V1by7jnJdHAXHNePHyMY8%2FUc7NkSa1Bwlr0n196bSzgLp3tRbE0T31zOOkm9CfSkKY1XHSiMSGRR%2BQjM3GcthVmPoaKyncLE0xH8pw&X-Amz-Signature=0991ea729bd191bcbdb8bbee2288b20beb310bb5e92c4ba8f559ea0e42e30afd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
