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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC72N6K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6q32jLi99fkB5QvI6B96qHfexV8ClhHm6kmQ8B5j4BQIhAJuPoIiUsSU1Cc7g%2B7vOot4DULrcuRe%2F4fHLz%2BFWOCyjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp6YIQ1P0scgWMnzcq3AP%2FM1bvLrrXk7ovbVP2syWWtk%2F%2Fejx81ilEI9pvylzQ3RbRAp5jB%2BmAH3faK2ZqJNXVSVZo1esdsriAlT1AWGYp1KhUMU6oGW24NN%2FumCWCHmyjqWyp%2BEErqVfLp2FXyx4lPvVW0pvBw0kdNaYv6ZlcSn0jDWP%2F0RhwpfCMfnZnfXoGDMIBfFHkJJgRzNh%2B7q%2FWwdAji8LDbXA%2Bs8lsY%2BqiFBluU1p8YyfDS5AKP0XTab%2FciP9T3QjOh8gglZktmKtaTocncMhxCoUTIm8zPZyeBPQnryqiHuQsWRR0Xn5c0o16JOjHAS1BYtlZgwRddAk94me5Zl%2BB6OYcnzxgCS7GWUJGlMcw9EnnEBJXfJdNGkV%2FHQHc5%2BrsUtELgPW1VDQd98VeSRyDPmfTprUls3LbmovstfpcfYjd3Xb5tTaF%2BZwHFvi%2BO%2BPWiiCDZzTQeGGsvews06StKLRP0xa8ofpDepQzqg4PReAVusWBStlbUdfceJIK57Jk%2F3OoYawo79N9RKR1rAK6KbnmoRLLbYJhHSERNOE0bBfkZS8TfbHSQgkeg8SDSzHMZnei6ONWGEJ1FnGkJcDNXRZyoyaP8SzxThr4g%2FZkJ%2BZbmK2Y%2FUUv1dFaV%2F%2FFrLrS%2BzN5gTDrg%2BvBBjqkAet%2FQiG6xHJfbgDdHjfg%2BZyeK5r4ItCMueGiSfJfyBvDNmdQD8wA2JGgHvq2nMtOO%2Bk7ob3p6L5VInpee2j6COnAX%2BljyT%2B7ZkW5qsD50J5fT9d%2B%2FmXXg4N85T9BPs0%2BhTIjIksS%2FXXzuU4XtmX9Igz07J%2Bz17%2FgvTe9JheVom7jhXpgxI27AaRA6RnwnogtGr0qOMTEgYmRk%2BeLdscllkoLdMbd&X-Amz-Signature=8d0655c525034d8860c99d92e6da3c331ad479f13167012110082939b1867cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC72N6K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6q32jLi99fkB5QvI6B96qHfexV8ClhHm6kmQ8B5j4BQIhAJuPoIiUsSU1Cc7g%2B7vOot4DULrcuRe%2F4fHLz%2BFWOCyjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp6YIQ1P0scgWMnzcq3AP%2FM1bvLrrXk7ovbVP2syWWtk%2F%2Fejx81ilEI9pvylzQ3RbRAp5jB%2BmAH3faK2ZqJNXVSVZo1esdsriAlT1AWGYp1KhUMU6oGW24NN%2FumCWCHmyjqWyp%2BEErqVfLp2FXyx4lPvVW0pvBw0kdNaYv6ZlcSn0jDWP%2F0RhwpfCMfnZnfXoGDMIBfFHkJJgRzNh%2B7q%2FWwdAji8LDbXA%2Bs8lsY%2BqiFBluU1p8YyfDS5AKP0XTab%2FciP9T3QjOh8gglZktmKtaTocncMhxCoUTIm8zPZyeBPQnryqiHuQsWRR0Xn5c0o16JOjHAS1BYtlZgwRddAk94me5Zl%2BB6OYcnzxgCS7GWUJGlMcw9EnnEBJXfJdNGkV%2FHQHc5%2BrsUtELgPW1VDQd98VeSRyDPmfTprUls3LbmovstfpcfYjd3Xb5tTaF%2BZwHFvi%2BO%2BPWiiCDZzTQeGGsvews06StKLRP0xa8ofpDepQzqg4PReAVusWBStlbUdfceJIK57Jk%2F3OoYawo79N9RKR1rAK6KbnmoRLLbYJhHSERNOE0bBfkZS8TfbHSQgkeg8SDSzHMZnei6ONWGEJ1FnGkJcDNXRZyoyaP8SzxThr4g%2FZkJ%2BZbmK2Y%2FUUv1dFaV%2F%2FFrLrS%2BzN5gTDrg%2BvBBjqkAet%2FQiG6xHJfbgDdHjfg%2BZyeK5r4ItCMueGiSfJfyBvDNmdQD8wA2JGgHvq2nMtOO%2Bk7ob3p6L5VInpee2j6COnAX%2BljyT%2B7ZkW5qsD50J5fT9d%2B%2FmXXg4N85T9BPs0%2BhTIjIksS%2FXXzuU4XtmX9Igz07J%2Bz17%2FgvTe9JheVom7jhXpgxI27AaRA6RnwnogtGr0qOMTEgYmRk%2BeLdscllkoLdMbd&X-Amz-Signature=cbd742d6cc9ee3d6c34d8852390e19c6ffc12502588190f6998f0049bf3494b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
