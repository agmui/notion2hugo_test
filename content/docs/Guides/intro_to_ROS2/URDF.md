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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55SKS7C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjDGYFzfvhBC7TAsKWBcXgfjy3UydO3W3whQqkW6YG0wIhAKIKFMD8xCJbfmYophEqboyqRuTAWxEcqhRAANPd3I9MKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzkdpK%2By7OyXDgOKcq3AOor%2F4ZlI8t95W5oFpJiZ6VKUKiUkcWBQpxvQRIpXdT4JF5vWJce3nDCx66sae7Jy7t1mZCSWwE4Y2J39p212IugtAhZBxTA0JRwUy2cMmTZgTpbHFdBi0%2BMbZ5OTKhUzcY5C0dA9OFKbPrp7YA4zD5RQ8IKDp5d9TmGdLXx8bjC0CyVYySeXCoNl8LAwNh17eCKuc63QL8sSTxYJyiyWa2lFp8Tau5KqgHae0js4e9TVXvW7WwS6L18pl4UJO2ZO5ZS0eT6jeslz0r8dPuK5oJeTfp2xvefRHMNo%2F400noTv9T0r6NLIIYLG3UIFxrT6j2%2FFthhKvNyZcMwr0OBhq9Qo7skPkJDfq3aS4yUY3ObZiQP3mVONwGVfzfc2hQMprLfb%2FNVAuu%2FwlXkLvNdfQo3%2Fvhe54LGkP0OxdwLUahkVLffNSozxu5ssS44YyJJk4jXxsXtJDukB8Mtn5vhwpEbKj0k6zHgHkZCDVCrwIK2Ie4e2Z3lsQgBg3%2FBpLHOjXJVWarTWIQT%2BOjclHhYmN2wReH1h6tiPgWfON0S86lUWeEqQc%2B%2Bsyz1%2FEyfAqsFZGVxQ2KEb%2Bl9jj%2BLMCfeOoReGsOhjM5xkSlT%2FnklsncD7MIqbtlJUNL0WwGAjCvlNK9BjqkATMyVP57OiiOSC54l3VFqFYtmG%2BpYCbxFMVIGc%2FRj2QJr39SRnf5U4%2ByYfsUVM8PhQ9SwLfoVkFgp1LTkGCBRRPgrNMDrBYJmDPxK0%2B0lLuY%2By3T4OD1MShoqEKl8mQMEkt29OnpOcpH2HC4mO%2FDdKps6o7KVwzpLLSwmOY7J8xLE0CBxsOw3X5%2BCWhqGiZKrdYgU1X21lvByhdCjdpHMpT9lR4T&X-Amz-Signature=5371f6d157d0ab4339587b5ef4eca367b8f15461c85b9c22034795b5116ca20c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55SKS7C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjDGYFzfvhBC7TAsKWBcXgfjy3UydO3W3whQqkW6YG0wIhAKIKFMD8xCJbfmYophEqboyqRuTAWxEcqhRAANPd3I9MKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzkdpK%2By7OyXDgOKcq3AOor%2F4ZlI8t95W5oFpJiZ6VKUKiUkcWBQpxvQRIpXdT4JF5vWJce3nDCx66sae7Jy7t1mZCSWwE4Y2J39p212IugtAhZBxTA0JRwUy2cMmTZgTpbHFdBi0%2BMbZ5OTKhUzcY5C0dA9OFKbPrp7YA4zD5RQ8IKDp5d9TmGdLXx8bjC0CyVYySeXCoNl8LAwNh17eCKuc63QL8sSTxYJyiyWa2lFp8Tau5KqgHae0js4e9TVXvW7WwS6L18pl4UJO2ZO5ZS0eT6jeslz0r8dPuK5oJeTfp2xvefRHMNo%2F400noTv9T0r6NLIIYLG3UIFxrT6j2%2FFthhKvNyZcMwr0OBhq9Qo7skPkJDfq3aS4yUY3ObZiQP3mVONwGVfzfc2hQMprLfb%2FNVAuu%2FwlXkLvNdfQo3%2Fvhe54LGkP0OxdwLUahkVLffNSozxu5ssS44YyJJk4jXxsXtJDukB8Mtn5vhwpEbKj0k6zHgHkZCDVCrwIK2Ie4e2Z3lsQgBg3%2FBpLHOjXJVWarTWIQT%2BOjclHhYmN2wReH1h6tiPgWfON0S86lUWeEqQc%2B%2Bsyz1%2FEyfAqsFZGVxQ2KEb%2Bl9jj%2BLMCfeOoReGsOhjM5xkSlT%2FnklsncD7MIqbtlJUNL0WwGAjCvlNK9BjqkATMyVP57OiiOSC54l3VFqFYtmG%2BpYCbxFMVIGc%2FRj2QJr39SRnf5U4%2ByYfsUVM8PhQ9SwLfoVkFgp1LTkGCBRRPgrNMDrBYJmDPxK0%2B0lLuY%2By3T4OD1MShoqEKl8mQMEkt29OnpOcpH2HC4mO%2FDdKps6o7KVwzpLLSwmOY7J8xLE0CBxsOw3X5%2BCWhqGiZKrdYgU1X21lvByhdCjdpHMpT9lR4T&X-Amz-Signature=9580f9def394a9dcdcfdf934f329102725d82e7a2832339ed2f167a18426353d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
