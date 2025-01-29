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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3WNLKX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgw2wJGud1qplLUiw2HHZeDABtNOXO58qzutFcC0oMCAiAQXaenlx9XopZvTMIvhh7KuhYAwb2aR2EUrQA24yME9iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBf37lkYfO4aaRJWKtwDOBjD1dFsB3%2F%2F443PjcBo96SCbwxZfyd583S7dKo3LkXp%2F0siJNqXqbGwVxYlb5Dv5gicOFQYGLI9cgtdAJa1jcpAPQ79dUpM24EAFhs6Y7hx%2Bnn5jenJcRRu%2F%2BwU4ZaTTpOhFSz5%2FDFmXC1Z8NlyfHiqXFaUHCsdZV%2BQQs%2FEXZBuBRi%2FhUNuhbZTiJreZInlcnzYSMADGDvTE0TcCRatv9pdVYVZFhAyOsodn6upfuIZ%2FcYref%2FJB8OtwQ1qsfpB5hltOlC%2BBpNkQupC47LqUGqPYQQN2pAroZBa6M6S%2FRNNC4H82bJd8%2BuMaBiP%2F0ehysCmHBiUmg%2FZmyuyCiKlyyu2%2ByVvqUgXMLXPjMoZ1oQEHRIS%2BDVE3%2FnFlknv1He6ZTZikJd%2BGtR5Csp33lRn2TP4o%2BZQzMo%2FVsLK3JGtAM5BicbyYJeOufVQO3Z25wEvAgwr%2BnVHXKtatS446woyZwz4JEkTyk4vY%2FUWB6eVsPBHJewiJPWeARA78U9ewXhVCNJfR89h%2BfueL0Xi6ESkS278xOQAGD3e1bJdSV2%2FdENkUNbaWd2oAloQaEum7Co9NbR7s9Koj9BDE4WF7VZmD5FA%2F4xtBelJduzws9aGoad4z1le%2BZ%2BdhoB56hUwsoDovAY6pgFEkEqKYwWcvDfW%2BO7p4a9XhlcCxbEpfnD%2FeJF0QINsrWbbFbesamfIP8dn5wWmi2HpnRxmZAaPVL5EQJW%2Fv%2B3frlZUx1UQh22cYddNy5pSpOw62YWwd4cPGL89%2FQURdX2Tt4hxRqDEv2%2BQBRAB1m4IG9ZhWJSMrliya6XT08nmpAaoe%2BiHeIoJC2EYtDQ1%2BGA0dPm%2BY6nISArE1TP43QF8RK5XIgq4&X-Amz-Signature=7e0615f87c13f2f336e77dd0ed38e1231b001a2ecae90b60eb931ef02c98fe5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3WNLKX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgw2wJGud1qplLUiw2HHZeDABtNOXO58qzutFcC0oMCAiAQXaenlx9XopZvTMIvhh7KuhYAwb2aR2EUrQA24yME9iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBf37lkYfO4aaRJWKtwDOBjD1dFsB3%2F%2F443PjcBo96SCbwxZfyd583S7dKo3LkXp%2F0siJNqXqbGwVxYlb5Dv5gicOFQYGLI9cgtdAJa1jcpAPQ79dUpM24EAFhs6Y7hx%2Bnn5jenJcRRu%2F%2BwU4ZaTTpOhFSz5%2FDFmXC1Z8NlyfHiqXFaUHCsdZV%2BQQs%2FEXZBuBRi%2FhUNuhbZTiJreZInlcnzYSMADGDvTE0TcCRatv9pdVYVZFhAyOsodn6upfuIZ%2FcYref%2FJB8OtwQ1qsfpB5hltOlC%2BBpNkQupC47LqUGqPYQQN2pAroZBa6M6S%2FRNNC4H82bJd8%2BuMaBiP%2F0ehysCmHBiUmg%2FZmyuyCiKlyyu2%2ByVvqUgXMLXPjMoZ1oQEHRIS%2BDVE3%2FnFlknv1He6ZTZikJd%2BGtR5Csp33lRn2TP4o%2BZQzMo%2FVsLK3JGtAM5BicbyYJeOufVQO3Z25wEvAgwr%2BnVHXKtatS446woyZwz4JEkTyk4vY%2FUWB6eVsPBHJewiJPWeARA78U9ewXhVCNJfR89h%2BfueL0Xi6ESkS278xOQAGD3e1bJdSV2%2FdENkUNbaWd2oAloQaEum7Co9NbR7s9Koj9BDE4WF7VZmD5FA%2F4xtBelJduzws9aGoad4z1le%2BZ%2BdhoB56hUwsoDovAY6pgFEkEqKYwWcvDfW%2BO7p4a9XhlcCxbEpfnD%2FeJF0QINsrWbbFbesamfIP8dn5wWmi2HpnRxmZAaPVL5EQJW%2Fv%2B3frlZUx1UQh22cYddNy5pSpOw62YWwd4cPGL89%2FQURdX2Tt4hxRqDEv2%2BQBRAB1m4IG9ZhWJSMrliya6XT08nmpAaoe%2BiHeIoJC2EYtDQ1%2BGA0dPm%2BY6nISArE1TP43QF8RK5XIgq4&X-Amz-Signature=1c4becf94f1fba980fa610073d98d235091db9157d3c28dbd63b9ca915dcaf3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
