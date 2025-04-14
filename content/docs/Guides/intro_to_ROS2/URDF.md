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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQ5SU7O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBra2%2FNIgtSNLsBiSCAwELbOpt7My0aw8L%2B2ubYWuoFpAiEA8bBlwoH%2FVoN%2Fx5nmQqVydbiRGEm4brFOa6mtaZ2UlQ4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLvKRpVIYN0DRxZsnCrcAz8g8MKzRcfFR0hWk15JTm02mQdvRS8BnRKhUjpOWPO0sdOPfns5J0dF1eK24StdDZAFE9OiAEK%2Bd51bCSHf2corRnlHca1jlLetGXvs2Y4OYKZF9JW4Al%2BO7d6LxDaEy0pgoD%2FVE4Is7z%2BC%2B60UwN0aSuRtPVf38anDn8dz%2BxXWhLkYbFOaJBa%2Fq%2BbvgSncdSxtEgBFM%2BfvWwiRbRbuzu4kvYGES1yvwh71vUtvz2EXYFAjWdiHi6pk36wnL7oQDLzGSWDQjE4H%2B%2FpA%2FUWmUyzlLTcvArDm0KoJCE8%2BOj4V2kvGkugwf9yNepcXfEXsAuPsIqQ%2BeO%2BJAkwIS1mtdnyJTi5Eu8CU7KcQNOqOTIaDS8uE7gwN%2BIoM2H0u7Gm%2Fk8aXpusBdY0NR9Sx43H70EuSNHzplAKzJk5mNIPrn62aiIjIj1cw05GCvZt4Bf9XvoqsqEDwDtGoaOFkYW6y2m7v4Ud6lhwwiekSRbDt0zcTdIWq%2FoVorcSyVIRqS%2BUR0jEMVxCmWA8AqCP%2B8YRzN6lZ6oGm%2B%2B7AMe1rCu9qlPTUnmjXmJ5pBv8tcUg1rD5J8RQ0jRztcSnIyH6lSIYuyrotZPY5uebMtlLJhlBvCdGlJM2DIj1xT1SQIsqSMIfA878GOqUBH0aJPnMC7s6CpsL7bbXBWrcCGH6K7ZEYl7LRLWIZMHaeQSz%2FuxRXBpjpYnbwx6z3hgbgoSwxAM%2FBPyNV8D0mjgbZ0Rn13keA%2BLVneZjWW3VJSBuHApL7wsvuZivUDH8NvzuTs2z9gJfdtHay2XiYX%2BndqfnAx2WS%2BKXTs0T3%2BQ1MCRoB7Uq8Wo3tYZCb695IhIWveSN6AeSosJTtb4FjzfRPUFED&X-Amz-Signature=55a7480c45ef8ee08ad7b26b6f42d5336d039b2183bdcf05c818a391d0a2cda9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQ5SU7O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBra2%2FNIgtSNLsBiSCAwELbOpt7My0aw8L%2B2ubYWuoFpAiEA8bBlwoH%2FVoN%2Fx5nmQqVydbiRGEm4brFOa6mtaZ2UlQ4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLvKRpVIYN0DRxZsnCrcAz8g8MKzRcfFR0hWk15JTm02mQdvRS8BnRKhUjpOWPO0sdOPfns5J0dF1eK24StdDZAFE9OiAEK%2Bd51bCSHf2corRnlHca1jlLetGXvs2Y4OYKZF9JW4Al%2BO7d6LxDaEy0pgoD%2FVE4Is7z%2BC%2B60UwN0aSuRtPVf38anDn8dz%2BxXWhLkYbFOaJBa%2Fq%2BbvgSncdSxtEgBFM%2BfvWwiRbRbuzu4kvYGES1yvwh71vUtvz2EXYFAjWdiHi6pk36wnL7oQDLzGSWDQjE4H%2B%2FpA%2FUWmUyzlLTcvArDm0KoJCE8%2BOj4V2kvGkugwf9yNepcXfEXsAuPsIqQ%2BeO%2BJAkwIS1mtdnyJTi5Eu8CU7KcQNOqOTIaDS8uE7gwN%2BIoM2H0u7Gm%2Fk8aXpusBdY0NR9Sx43H70EuSNHzplAKzJk5mNIPrn62aiIjIj1cw05GCvZt4Bf9XvoqsqEDwDtGoaOFkYW6y2m7v4Ud6lhwwiekSRbDt0zcTdIWq%2FoVorcSyVIRqS%2BUR0jEMVxCmWA8AqCP%2B8YRzN6lZ6oGm%2B%2B7AMe1rCu9qlPTUnmjXmJ5pBv8tcUg1rD5J8RQ0jRztcSnIyH6lSIYuyrotZPY5uebMtlLJhlBvCdGlJM2DIj1xT1SQIsqSMIfA878GOqUBH0aJPnMC7s6CpsL7bbXBWrcCGH6K7ZEYl7LRLWIZMHaeQSz%2FuxRXBpjpYnbwx6z3hgbgoSwxAM%2FBPyNV8D0mjgbZ0Rn13keA%2BLVneZjWW3VJSBuHApL7wsvuZivUDH8NvzuTs2z9gJfdtHay2XiYX%2BndqfnAx2WS%2BKXTs0T3%2BQ1MCRoB7Uq8Wo3tYZCb695IhIWveSN6AeSosJTtb4FjzfRPUFED&X-Amz-Signature=58bc303581fb43e257d9e63f19f4f938b1723074ca2c8640a8853c20d2398dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
