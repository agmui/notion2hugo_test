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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2WNO54%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ%2FyFpCLE87UogYp2Z8xWPn8pAIvV95MZL1ucXq90W5AiEA0yaddtuxP665MwRH8S9TcjQJDpo00MUXO34F3w6sKQMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFiMkq5xiQ736wWuJircAwu12tBMIrB%2BffBOtnS6dtorNDJ1z%2B2B2PmKhS%2BzRdAWH1uO4z9qJa8EahBfmo9gdkWdXyWj%2BEVDhIdubdFgi1tKBs9u38Rd2faCFIdgIIwTABtXEqRFZ5U3sLcAbWrNBKNWgnBxIcxSfKsrHDMOUSF%2BWBCUllpGNgq90evDIV9fKLKxGyqAa2%2FSsdFdQTT%2FzTqJNK%2FLnlMMLBWp%2FsLBEQANbpRyuyBT36E2wUHhmHPpsSVMP0uHpXQmsAmFblfX3abmSYOPx9zq0nV5lQMJAE%2FQksDO6ZLnpC4R94qHLquwY%2BWGtWXCRe0wT%2FzjS%2BjTOPb5pJCN8m5Pph4D5eTOrna2GygCNA%2By4yrAgJr%2BomzmXRdOb9UCO%2BhLP2WS9dKlD%2B6F5wf7zmGEtOo8rX8%2FwrAC3T5uh6ptg43rn0PZf5yT8aXMFW4pT7yZ6%2BrT9UaigqWo%2B0Tdn1mi05Pic44Y%2BqKZp0w2rgzRJEc00VUvAG1ARawkLSzEzgFWThFsroTUFJhLQApidE50DuToEYzQ7LQ2m8tNDXS1CZhEcKb3MqbW5pwcv305WOkpNoW2s9nVU%2FXtLcHgnECl%2FjiNNBe1Dn%2Fx16JcMcVVl18JtyKM%2FE%2FLxuTCFvQjPzVVkAwmMJaph8AGOqUBpStCJEt1iBLXyY4%2BNvSGa1OuiHw08cBp6tqEWiyOxjsPi9uOnrMAluflfxl06P5%2Fa9qnWYNm%2BxwHXTCs4ozCf9JW81yGt0DBFmhh%2FbGOa7HJC5E0e8gMG1saBRROjO%2FnNxhCMqSU6i%2BlokYJydmHRdrkq9Um1fy7s%2F5ZD6%2FlcmsJiBYJxPlzQYo9bKJuWQnHQ%2FMlaBKYMe9LEINxz10nfE7%2FCdbr&X-Amz-Signature=a57fbdb296710a10ebbd574b8581e160b68151215c8dd7e76c2a30b2e8ada5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2WNO54%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ%2FyFpCLE87UogYp2Z8xWPn8pAIvV95MZL1ucXq90W5AiEA0yaddtuxP665MwRH8S9TcjQJDpo00MUXO34F3w6sKQMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFiMkq5xiQ736wWuJircAwu12tBMIrB%2BffBOtnS6dtorNDJ1z%2B2B2PmKhS%2BzRdAWH1uO4z9qJa8EahBfmo9gdkWdXyWj%2BEVDhIdubdFgi1tKBs9u38Rd2faCFIdgIIwTABtXEqRFZ5U3sLcAbWrNBKNWgnBxIcxSfKsrHDMOUSF%2BWBCUllpGNgq90evDIV9fKLKxGyqAa2%2FSsdFdQTT%2FzTqJNK%2FLnlMMLBWp%2FsLBEQANbpRyuyBT36E2wUHhmHPpsSVMP0uHpXQmsAmFblfX3abmSYOPx9zq0nV5lQMJAE%2FQksDO6ZLnpC4R94qHLquwY%2BWGtWXCRe0wT%2FzjS%2BjTOPb5pJCN8m5Pph4D5eTOrna2GygCNA%2By4yrAgJr%2BomzmXRdOb9UCO%2BhLP2WS9dKlD%2B6F5wf7zmGEtOo8rX8%2FwrAC3T5uh6ptg43rn0PZf5yT8aXMFW4pT7yZ6%2BrT9UaigqWo%2B0Tdn1mi05Pic44Y%2BqKZp0w2rgzRJEc00VUvAG1ARawkLSzEzgFWThFsroTUFJhLQApidE50DuToEYzQ7LQ2m8tNDXS1CZhEcKb3MqbW5pwcv305WOkpNoW2s9nVU%2FXtLcHgnECl%2FjiNNBe1Dn%2Fx16JcMcVVl18JtyKM%2FE%2FLxuTCFvQjPzVVkAwmMJaph8AGOqUBpStCJEt1iBLXyY4%2BNvSGa1OuiHw08cBp6tqEWiyOxjsPi9uOnrMAluflfxl06P5%2Fa9qnWYNm%2BxwHXTCs4ozCf9JW81yGt0DBFmhh%2FbGOa7HJC5E0e8gMG1saBRROjO%2FnNxhCMqSU6i%2BlokYJydmHRdrkq9Um1fy7s%2F5ZD6%2FlcmsJiBYJxPlzQYo9bKJuWQnHQ%2FMlaBKYMe9LEINxz10nfE7%2FCdbr&X-Amz-Signature=da5a67e4fb64d7305fc2525cfa6a6aaf6c4587846dd0bcac57e58d1210c7f3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
