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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBD3RP7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGLiKpe9UWrTqFwhplzb79QreyfA7PTlZjLrDMrpL%2FF9AiBhI3umpj7odxYs4OLpyQwYU66xcYQmwcQD0e%2B8c%2BRAIiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM91rcd7cX%2BrnqNJJRKtwDmRQhulfheV0yjsgEQn%2FWTHprdXadhJ4M0HavF5qgBDaWw1rOs9E4y6ZoRavfKio6w2RIG0mW%2BcxRGHLnDh5uGqUocpQo5BuAzPJtuF0QK4cvFPQhGxet%2FWdJGnxBBFcSsIU36JN6GGR%2BYAMcr7aC6PlFP2r9TzINc2Awz1gU1ICZm9Jh3ZsVOpyghG9F9ndfbafKXVZjq2HMMuOSTMzhxiW0Oebv5JCK5bJbXORijFioZtwocslqTPV79twhB38sHMGopjl0ZGgKNkhSzXqAGBbpSDWjCtTNcyp%2FER9sD3xy7IIIlQlN5RmEm%2Bpgn8%2F%2BWrNogmzWh0Dq%2Bkn9VpMCkKxIL6s0HS%2B5QOh%2FmGZp2E5bojyNpBgFIWcOWzzQti0%2F%2F1QYo%2Bwkn4Yh27xdghGdF6gerr7p21BZ7SYJcSRngvx1tW8g3JPXoml2M4ZGXYLDBAMXnsnB%2BaXVbHKnR7%2Fkl5CbkTIUEDX4a2kPo66TIVvsgaJMbMcD66%2BFctM%2BH1tDvDnYuvQ%2B1K7bQdl%2FsFRIxj0wVUIkSgrTE1rnMidw%2B4W0WeZj9BQpADgYUNX2wM0E4Jwchd0rpbCSnlYqZCTVMc5jpI3MGnHJt28ZCNj8KkbF%2F69I5BoqDocaJhAw47eHwQY6pgHRu8aqGEg5ZolHyIPcOdTRJ8MnZnobFnTyCHSoxw%2Ff3Pbl7qA8HE0cxNRfsMTGTrv7Lx81S39c2GWunHf1JJwp848AIAIx9b9jtg3kS3Lo1pJybgXF8%2Ff1BbZ0hCNn3oD6w6Cb6zxR02h%2F4pdq51wmtUXIbmYda6dUUxNxEAesWAXNsx6bSkCECYp9Xs4ysfUVTDeJuSCF4Ot9idrorZgKrTGn1LNZ&X-Amz-Signature=4f823d4a48bb649aace97de0e6a8083c99d0cf3a54bed6cfb67fc2c0d33dce1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBD3RP7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGLiKpe9UWrTqFwhplzb79QreyfA7PTlZjLrDMrpL%2FF9AiBhI3umpj7odxYs4OLpyQwYU66xcYQmwcQD0e%2B8c%2BRAIiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM91rcd7cX%2BrnqNJJRKtwDmRQhulfheV0yjsgEQn%2FWTHprdXadhJ4M0HavF5qgBDaWw1rOs9E4y6ZoRavfKio6w2RIG0mW%2BcxRGHLnDh5uGqUocpQo5BuAzPJtuF0QK4cvFPQhGxet%2FWdJGnxBBFcSsIU36JN6GGR%2BYAMcr7aC6PlFP2r9TzINc2Awz1gU1ICZm9Jh3ZsVOpyghG9F9ndfbafKXVZjq2HMMuOSTMzhxiW0Oebv5JCK5bJbXORijFioZtwocslqTPV79twhB38sHMGopjl0ZGgKNkhSzXqAGBbpSDWjCtTNcyp%2FER9sD3xy7IIIlQlN5RmEm%2Bpgn8%2F%2BWrNogmzWh0Dq%2Bkn9VpMCkKxIL6s0HS%2B5QOh%2FmGZp2E5bojyNpBgFIWcOWzzQti0%2F%2F1QYo%2Bwkn4Yh27xdghGdF6gerr7p21BZ7SYJcSRngvx1tW8g3JPXoml2M4ZGXYLDBAMXnsnB%2BaXVbHKnR7%2Fkl5CbkTIUEDX4a2kPo66TIVvsgaJMbMcD66%2BFctM%2BH1tDvDnYuvQ%2B1K7bQdl%2FsFRIxj0wVUIkSgrTE1rnMidw%2B4W0WeZj9BQpADgYUNX2wM0E4Jwchd0rpbCSnlYqZCTVMc5jpI3MGnHJt28ZCNj8KkbF%2F69I5BoqDocaJhAw47eHwQY6pgHRu8aqGEg5ZolHyIPcOdTRJ8MnZnobFnTyCHSoxw%2Ff3Pbl7qA8HE0cxNRfsMTGTrv7Lx81S39c2GWunHf1JJwp848AIAIx9b9jtg3kS3Lo1pJybgXF8%2Ff1BbZ0hCNn3oD6w6Cb6zxR02h%2F4pdq51wmtUXIbmYda6dUUxNxEAesWAXNsx6bSkCECYp9Xs4ysfUVTDeJuSCF4Ot9idrorZgKrTGn1LNZ&X-Amz-Signature=ff0e55fd1fb913d4432820906104345a56d71cd899f9546d6ba71644aa6a6c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
