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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZFW473%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwIPQwA3%2BOyL%2BIBabOyCoMortnaqhxlxNTskHsWZs9dAIgb1QOrbVAOyg0%2Ffd48KItQsR4mFDisaLVdTlJxIxujI0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKLAgDwrWgxVcwrQyrcA1uVqgmi%2BWeebW8Rw94xnS7IFtLQp6kvCem2SExUvG%2BC1Vyy1XHDnRzWJQDACXQNS0kjXWjAzqBWhGJStsQRoca%2BVPF0TBJyBBSUKIZ%2BIyrOoXlZcXlMU29bhVElsSJYJANf3himb2pyuO6tZgvxhi%2F004znmqw0xvsFdtI2Bi0D90W9f7G3eQUOQbMgk07n%2FKJLJLTZb%2Bxh0RDyvhLhJOK8OKv2wnOhgpuzbS9l%2BkJFBtMnKZt0aSDnu9KKEqPN7t9JaabWEYQFKxAp%2BEvdyHSNWfP4y6sLLz5L9Oi2mFLUe93IMlViunKzGm5P8mHHmbKT0EBWZfaZjjIlLZAdsIj6uQxfLxWLHJNttV0bRrRA15rfXgeI1Dm2g9JgO%2FaUDuEilgtVrBIg%2FuheHKOJ3n2nZ%2B4rqHJXre0aDXn6gKSAoTzwZ%2Ff%2Bz3PmwKiSf7lMScvprDXNpAA6qUl%2FA5b%2FP5YIs8q2Gi7fMF2JyP%2BKLs2UVFI%2FiUGoBPR%2BTmrW7h%2ByZ8PooLTXpoxxxLjwPVSZDJmZ9Z3hcuIiK3I4tLswA0BEUu4wJO3J02wiF2RMwoURSs8K2wTom9ravAYitm%2Bddag1tAdpZNJPYAX8ty8hZ3ouwrAxPXIeEd0tkApMMN%2BYtb0GOqUBypBtrD7r1OwiJWbI0mhvldWfPRyUWQe1Pbh9QeA1adUuDcEf4ssU8zzr0dGDaryYCaUQ%2Fh4T7CExJaX%2FnHCf87sh%2FSMiT6J1%2FD77Yo%2F3FtQON7L5lc%2FehOjeULTkHxsU9Vfl%2FuIMqk8lbIb3qf9%2BMe4rdCETHhDxzBB0ASYpG%2BtIDihyUYQE9jbe4EDXSrxmFbDYaFZqrNwk0KTaX8kh%2FCmRzz7e&X-Amz-Signature=e4040b9d0ee170129e448da608016ecf04f663199cd13cb1b30c757192b93210&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZFW473%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwIPQwA3%2BOyL%2BIBabOyCoMortnaqhxlxNTskHsWZs9dAIgb1QOrbVAOyg0%2Ffd48KItQsR4mFDisaLVdTlJxIxujI0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKLAgDwrWgxVcwrQyrcA1uVqgmi%2BWeebW8Rw94xnS7IFtLQp6kvCem2SExUvG%2BC1Vyy1XHDnRzWJQDACXQNS0kjXWjAzqBWhGJStsQRoca%2BVPF0TBJyBBSUKIZ%2BIyrOoXlZcXlMU29bhVElsSJYJANf3himb2pyuO6tZgvxhi%2F004znmqw0xvsFdtI2Bi0D90W9f7G3eQUOQbMgk07n%2FKJLJLTZb%2Bxh0RDyvhLhJOK8OKv2wnOhgpuzbS9l%2BkJFBtMnKZt0aSDnu9KKEqPN7t9JaabWEYQFKxAp%2BEvdyHSNWfP4y6sLLz5L9Oi2mFLUe93IMlViunKzGm5P8mHHmbKT0EBWZfaZjjIlLZAdsIj6uQxfLxWLHJNttV0bRrRA15rfXgeI1Dm2g9JgO%2FaUDuEilgtVrBIg%2FuheHKOJ3n2nZ%2B4rqHJXre0aDXn6gKSAoTzwZ%2Ff%2Bz3PmwKiSf7lMScvprDXNpAA6qUl%2FA5b%2FP5YIs8q2Gi7fMF2JyP%2BKLs2UVFI%2FiUGoBPR%2BTmrW7h%2ByZ8PooLTXpoxxxLjwPVSZDJmZ9Z3hcuIiK3I4tLswA0BEUu4wJO3J02wiF2RMwoURSs8K2wTom9ravAYitm%2Bddag1tAdpZNJPYAX8ty8hZ3ouwrAxPXIeEd0tkApMMN%2BYtb0GOqUBypBtrD7r1OwiJWbI0mhvldWfPRyUWQe1Pbh9QeA1adUuDcEf4ssU8zzr0dGDaryYCaUQ%2Fh4T7CExJaX%2FnHCf87sh%2FSMiT6J1%2FD77Yo%2F3FtQON7L5lc%2FehOjeULTkHxsU9Vfl%2FuIMqk8lbIb3qf9%2BMe4rdCETHhDxzBB0ASYpG%2BtIDihyUYQE9jbe4EDXSrxmFbDYaFZqrNwk0KTaX8kh%2FCmRzz7e&X-Amz-Signature=cdf1a4bbaa2329d090bb40a76d2ce1501fbe05c1afa2084cab109732c81909b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
