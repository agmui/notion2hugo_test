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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L32R2EC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDrZCwHJvfpVTy6TIdhbBcr2R9woLGgkp86up42kBvOSwIgIjd8zQmbBLkIof%2BV3wttH%2B6cF9WSlsbo9IRh5CAJXroq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF2yg47tpmrl7eaWqyrcA4sN3uB6CGjaD4xJLFQHo6LY8euS%2BquhS8sJIej8kk9tmJn7QGqFD9pVsJvVPiysB4MCCSZJoU4SAUNS3GrVmteresFsxSdu32%2BdmbwYrMGwBVCQ6T7SrcfT5iBk6Z6wowkSUAXymojg6vx6F1q%2Fpss3%2FCOhDbsHJCxnM9ZaAhFWJuP6sKjnSuuyE1%2BQTWECIHtVChhjACOi8WVnVJtnsjWITfw2z3PO9WK%2Fm7LKbJ%2FplStH9zVC35EUZ0QJK69js0ZUH%2B4ncW37LyPSoj5f4MJRp%2FWTSFJSMRbS5Dab%2FbqV3nFSeQWD0GB52glnFx8pQ2bbPaYLqr0JfnlKsHW70ND0efcBNozhAg8eF0GEFSRlwANaArO17tzNTwzwBRKrYfvvZGfB5JXqMMWWE%2F9rzEq7KxXCoj6UGHB7cHwfrCFYlzl8gn3aqRpY0Xlb8OhDq9st85r37UI%2BBMkD%2FMdWrbnX1ANPm1gwtN4ZoXsWjpQcVnpUUXL3VX6%2BSTOwIW9TUt%2FiggCDICb9poK7dkjD7w5CrQZ%2BJGCCnVud%2FxKrT65J8X2F3gUIvB%2BBKxIppdyKFniWq6w7LJ9UghPfzYAXp5lRIQcaj4noIX4x%2BKKkKjqPwf54ZZqmYPM3IPhrMPmEib0GOqUBonqrEPFepihgrYSJn5GGUWE%2BJ486h9jwb3Si5bZdP6fmO5Acrip14soDPmYSlrtqLVD7nn5VLWE0E2buI%2FGi1UzdSkBYdLEYv%2FXZQh5wgNILz%2Brg62CihVYmnRKOwIz5w4HHz0XmIKpL4kNCWorO4mQXM8rjC5UqNsTmrXyqL%2BrRcQo3R%2Ff7RID%2F0Y%2BGNAL9%2F2cCo8BHFxX4px2w%2BzCJh0E2MG%2F4&X-Amz-Signature=399b997d2695b42adf0c6b824f3f0f71b15e465b43962c5f65d239daa78af858&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L32R2EC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDrZCwHJvfpVTy6TIdhbBcr2R9woLGgkp86up42kBvOSwIgIjd8zQmbBLkIof%2BV3wttH%2B6cF9WSlsbo9IRh5CAJXroq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF2yg47tpmrl7eaWqyrcA4sN3uB6CGjaD4xJLFQHo6LY8euS%2BquhS8sJIej8kk9tmJn7QGqFD9pVsJvVPiysB4MCCSZJoU4SAUNS3GrVmteresFsxSdu32%2BdmbwYrMGwBVCQ6T7SrcfT5iBk6Z6wowkSUAXymojg6vx6F1q%2Fpss3%2FCOhDbsHJCxnM9ZaAhFWJuP6sKjnSuuyE1%2BQTWECIHtVChhjACOi8WVnVJtnsjWITfw2z3PO9WK%2Fm7LKbJ%2FplStH9zVC35EUZ0QJK69js0ZUH%2B4ncW37LyPSoj5f4MJRp%2FWTSFJSMRbS5Dab%2FbqV3nFSeQWD0GB52glnFx8pQ2bbPaYLqr0JfnlKsHW70ND0efcBNozhAg8eF0GEFSRlwANaArO17tzNTwzwBRKrYfvvZGfB5JXqMMWWE%2F9rzEq7KxXCoj6UGHB7cHwfrCFYlzl8gn3aqRpY0Xlb8OhDq9st85r37UI%2BBMkD%2FMdWrbnX1ANPm1gwtN4ZoXsWjpQcVnpUUXL3VX6%2BSTOwIW9TUt%2FiggCDICb9poK7dkjD7w5CrQZ%2BJGCCnVud%2FxKrT65J8X2F3gUIvB%2BBKxIppdyKFniWq6w7LJ9UghPfzYAXp5lRIQcaj4noIX4x%2BKKkKjqPwf54ZZqmYPM3IPhrMPmEib0GOqUBonqrEPFepihgrYSJn5GGUWE%2BJ486h9jwb3Si5bZdP6fmO5Acrip14soDPmYSlrtqLVD7nn5VLWE0E2buI%2FGi1UzdSkBYdLEYv%2FXZQh5wgNILz%2Brg62CihVYmnRKOwIz5w4HHz0XmIKpL4kNCWorO4mQXM8rjC5UqNsTmrXyqL%2BrRcQo3R%2Ff7RID%2F0Y%2BGNAL9%2F2cCo8BHFxX4px2w%2BzCJh0E2MG%2F4&X-Amz-Signature=1897e04f9d705ae7d6b36b3ae5e38f090e5aed5cad760a4f51e1d4a23a9d0854&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
