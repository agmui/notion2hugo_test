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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKTOXXK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjNXxhQReXMnNjJv%2BF9LqbFYH52pF3FKt1yZyTaSfdWAiEA%2BWFy5ionEirO61Lj1tepD7v8P0v4qikMoS3h8aN7tUQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMadqB58AOTkGQCuhircA0cdv%2FEpGHP6MNKzNddO9pIkgFCE8xHzGJsJP%2BoKhwrfi86cImyEQzYPfmETf6aebxPKV84kLhWtfEtg7EqNUZHgt3%2BfAjQfhXk8DYoL7E%2B04k4uzRw40a8JsCInx61OWCanBe8rlqbSVox8NIADZWiDQa%2BQ4NNHria8N8eh6Rtqx7va9vnc7vvCGCyJFCvyNNoQR%2Byi%2B3ag9Qv7NwZPsWRN7AjLSdMtE4O%2BfRMh27BNaw%2B1y1aZebYXyQ9YyGgUM%2FYVYgVFqvS8v7fuG%2FgkLGiLPLmqtHVwHJycFSWUXfO4nOdUHwYzsybl15acx6cUaOXAAN7rwiCfVTTJnuJCxkWE91W4vivtaAvSLQ69QtBVcJUBIpoalpLiCpSWWYoOTV%2BJu%2BUvMiOdPoKKetz0jlXEJPiIL1EKxXjbH0nBUuNnWafRm%2BQgrwc%2Fj9lKnoYGOcxkkKWK66ATVSdsUDNTQ1b5KF0IKoufbGM8rbsS2hHGm56np%2BCXnST1QaJhJkPhKcYcT09zSlkep7UUo1r%2BLcTY0KVpLoI2hpqp5qRcavn7XF4CzB5ZBFPVN73EADNfPAwBnbbZpQfAcWJjuVQpxaJ4sUo%2FG4RnvSbzww%2Fr7b0oITuEZ1IaUUBRosoZMI%2F0sMAGOqUBkohokZYum0wPsnmMcaLX0zE2B8GzIDnOtX1q8TphltPw34854BDaCKeCi5Mqh1ez7Doyy4Iqw55HGeGal5rwrvPpyH4232ePELv0Uy2%2FINaN1GXYSMX7jVUKdW7rQN76LUB8RC%2F8wiv0qMYgIsAAEg2pHaeeT5Q8jMcj82swiYY8w0I9k1oOvZYvbi8ZVEYT%2BJVXxd2Awu9An8E%2FhvDr1Cu29LXv&X-Amz-Signature=7cffaec6650c99fb283bae66189be048dab1586d52e601ee4ab19425b41698d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKTOXXK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjNXxhQReXMnNjJv%2BF9LqbFYH52pF3FKt1yZyTaSfdWAiEA%2BWFy5ionEirO61Lj1tepD7v8P0v4qikMoS3h8aN7tUQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMadqB58AOTkGQCuhircA0cdv%2FEpGHP6MNKzNddO9pIkgFCE8xHzGJsJP%2BoKhwrfi86cImyEQzYPfmETf6aebxPKV84kLhWtfEtg7EqNUZHgt3%2BfAjQfhXk8DYoL7E%2B04k4uzRw40a8JsCInx61OWCanBe8rlqbSVox8NIADZWiDQa%2BQ4NNHria8N8eh6Rtqx7va9vnc7vvCGCyJFCvyNNoQR%2Byi%2B3ag9Qv7NwZPsWRN7AjLSdMtE4O%2BfRMh27BNaw%2B1y1aZebYXyQ9YyGgUM%2FYVYgVFqvS8v7fuG%2FgkLGiLPLmqtHVwHJycFSWUXfO4nOdUHwYzsybl15acx6cUaOXAAN7rwiCfVTTJnuJCxkWE91W4vivtaAvSLQ69QtBVcJUBIpoalpLiCpSWWYoOTV%2BJu%2BUvMiOdPoKKetz0jlXEJPiIL1EKxXjbH0nBUuNnWafRm%2BQgrwc%2Fj9lKnoYGOcxkkKWK66ATVSdsUDNTQ1b5KF0IKoufbGM8rbsS2hHGm56np%2BCXnST1QaJhJkPhKcYcT09zSlkep7UUo1r%2BLcTY0KVpLoI2hpqp5qRcavn7XF4CzB5ZBFPVN73EADNfPAwBnbbZpQfAcWJjuVQpxaJ4sUo%2FG4RnvSbzww%2Fr7b0oITuEZ1IaUUBRosoZMI%2F0sMAGOqUBkohokZYum0wPsnmMcaLX0zE2B8GzIDnOtX1q8TphltPw34854BDaCKeCi5Mqh1ez7Doyy4Iqw55HGeGal5rwrvPpyH4232ePELv0Uy2%2FINaN1GXYSMX7jVUKdW7rQN76LUB8RC%2F8wiv0qMYgIsAAEg2pHaeeT5Q8jMcj82swiYY8w0I9k1oOvZYvbi8ZVEYT%2BJVXxd2Awu9An8E%2FhvDr1Cu29LXv&X-Amz-Signature=f75e535743ac47b79708bec44c36c374288d96faf6485a72de4ad23a2635bc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
