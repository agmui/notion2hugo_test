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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XILVGSJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCSymsU0U%2BERFAp%2FPk8NViILrhwvp%2FSCl0JkkCJZOQ3ywIhAOEfBAs%2BT2fZidupGMOEam%2BBDVfmJUyXpTSZIt15aSJHKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcGCd%2BtfkMVZXmM50q3APpIPO2LSWb%2BCvRgoRcn82O0gjdNKwBdd8hS%2F6FlAg2J5El%2BiL40n6EY756bojNqTjobPUzQhYcKeoPDz04kdOt1WZ%2FUG41DyO8zoo3r6u%2FhDG2VwRg3MREWG%2Bb%2B8EkDfEBeMuc1O6cWB3hSXfJkh70nwJk0hAXo8Oj8dpSGfMW2YWHBLWNBBZfcjiqKp8aJEdbuTwNNSeWNp1leMr9iU6sudA0vuT3p64yL4coonwKcQvy0gsJ0is8BtgA5DS2XmtZwOpUOWHLyzY49xAdG44hdeTZ4ARPy0Hn%2FM3JoxQSEVTG2OunpSDTtgKvTyEy6u8PiU8C7tMYW%2FZbf71hYY1ZojlJvHJ9AVEr6WTamvSPIV%2F%2FKkI8zUM1xkQvZ5kblJeHDxfCSLM2rzvQdGcVxE0YoDFH9D4kNnrWwTNFLKqcmiIMT7fmdLWAJsaMXvPRAcbI4vf%2BI0HJqtCHakZRqooZQd6JPKut%2BtbuUGmsyzUTr%2FciEBIbQN%2BV3fExtUbpacA4ea8TaY6J0yYA31%2Bm4r%2BbAV7TS7U41dYb2Kac%2F2qZRcFViUDj%2BPZRXCAnNF%2Fv%2BkAwRg7Dx7s3bwAQUvWD8HK%2BuqY9Ib9vIcCYTEtvjqR01lx%2BdElIYtBthZCV4zCaqPK%2BBjqkAfAK3rFHfP0bczeYVnWk5q%2FMolZ0aE0X7%2B074PziyVN%2FKIfmMyVdE%2BuijAUG7LqSXHNvYp0W2HkePyg32pYHdd86iAdkGHxoLFG4IhOH15wKZ4vpfGIijfcws4uFwxhPodMUlnykBSyxqXFOtg4rVWvstkWPlO2gQt%2BdxyfuOlWRkGykElj0TddeSGCNWjLvPxOKwK4bmwgv%2FR%2B7YzPZn%2F9NZOpN&X-Amz-Signature=a8bcb550f866fa93227ebde1dbfacc188fe4cb3dd17c7d5d8cc009842d2b9d44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XILVGSJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCSymsU0U%2BERFAp%2FPk8NViILrhwvp%2FSCl0JkkCJZOQ3ywIhAOEfBAs%2BT2fZidupGMOEam%2BBDVfmJUyXpTSZIt15aSJHKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcGCd%2BtfkMVZXmM50q3APpIPO2LSWb%2BCvRgoRcn82O0gjdNKwBdd8hS%2F6FlAg2J5El%2BiL40n6EY756bojNqTjobPUzQhYcKeoPDz04kdOt1WZ%2FUG41DyO8zoo3r6u%2FhDG2VwRg3MREWG%2Bb%2B8EkDfEBeMuc1O6cWB3hSXfJkh70nwJk0hAXo8Oj8dpSGfMW2YWHBLWNBBZfcjiqKp8aJEdbuTwNNSeWNp1leMr9iU6sudA0vuT3p64yL4coonwKcQvy0gsJ0is8BtgA5DS2XmtZwOpUOWHLyzY49xAdG44hdeTZ4ARPy0Hn%2FM3JoxQSEVTG2OunpSDTtgKvTyEy6u8PiU8C7tMYW%2FZbf71hYY1ZojlJvHJ9AVEr6WTamvSPIV%2F%2FKkI8zUM1xkQvZ5kblJeHDxfCSLM2rzvQdGcVxE0YoDFH9D4kNnrWwTNFLKqcmiIMT7fmdLWAJsaMXvPRAcbI4vf%2BI0HJqtCHakZRqooZQd6JPKut%2BtbuUGmsyzUTr%2FciEBIbQN%2BV3fExtUbpacA4ea8TaY6J0yYA31%2Bm4r%2BbAV7TS7U41dYb2Kac%2F2qZRcFViUDj%2BPZRXCAnNF%2Fv%2BkAwRg7Dx7s3bwAQUvWD8HK%2BuqY9Ib9vIcCYTEtvjqR01lx%2BdElIYtBthZCV4zCaqPK%2BBjqkAfAK3rFHfP0bczeYVnWk5q%2FMolZ0aE0X7%2B074PziyVN%2FKIfmMyVdE%2BuijAUG7LqSXHNvYp0W2HkePyg32pYHdd86iAdkGHxoLFG4IhOH15wKZ4vpfGIijfcws4uFwxhPodMUlnykBSyxqXFOtg4rVWvstkWPlO2gQt%2BdxyfuOlWRkGykElj0TddeSGCNWjLvPxOKwK4bmwgv%2FR%2B7YzPZn%2F9NZOpN&X-Amz-Signature=cb52eb8a771e0dc98419b959e8b079aa255fc9ac0edeff353ecb71f49056e52b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
