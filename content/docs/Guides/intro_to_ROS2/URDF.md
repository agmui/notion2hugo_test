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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KNXPHS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjvwTkpPhurx5DtDklAqlR%2Bm2b81o%2F5vEA2fCpHgmTuAiEAiL%2BYTVKVyXXIQEllAQDjTxi0l4UCp6cBHDD5StRZtDwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk%2Bm1ae2chv7LahoyrcA5gY6bXFO%2FtG8lH5oe5%2FfKzzP9HZp66D5Q8%2FmKI5lHayRk3GMIALVEf9pcVCs2ZQA%2B%2Fg6N0WdxkAkNJ8q3WLbhOcIjaHzDidHnYDLf0YoPD6ay0Scv0cLCUBD7zNY4yJI1G3L%2BCVoprDcCvNg6z2UV05GiStFVKLTiOM52fH8HwvpSi2seTknrbuoXok5Yq97EZN341JJxoS9rnEsHnAGiNUEM280ePOW%2BcT8TuI6Z%2BX%2BxsLyKh3nOItjiDuDDEn%2Bi%2B1oAtclixsolkyqzqtyJdIItEeduVvN53tQZYNGLvI0l9WuNPsvfm2xXPOzUhJfd2AicaFZbqPkS9fzEC5C2f1DYKJ8VeCgE4WMD11DaL95HguIOqsjn915HqhDY6sNsKEEaEP8JtcZr0xA7VLCw3jo%2BjVpbkf3z4WroSpfIZ3ctocreLYh4rWPrx69pDVK4oY3pDSMYGl%2BjSxx%2FEmFWqW%2Ff%2F6hL2%2BFpnyNm9v62L5TzW7tIDiqyflYZGxBhIyLuMeNWEDMfZ%2BdYdNqZ2%2BoNUytdO8zeZV1cYlpSGdDqTVAWxfWolfko8TxPMkaR%2Br1MYuBVvAjsXL99U2aSQGozJjUyRz%2FzN14t2BqifPg5V6bUojOPw3eml8nNuCMMuk7LwGOqUBI5ELB1WoDzqwMEA6EYyZyo%2BWtMjt1RdlS8p9Qklms1OJDSB8est%2FoXNv5M8EbTm5v9HRtRKs8vgIWIBClWRO7aKYOk%2Fzrv%2FZXONPSeT3EwQ5Rz6QYDvGcglaPS3cNsByMyQHOzgc5G4pOyHicH8Y2FBy3hEQFRRd07m7%2FFvJ8%2B3hgbFmkFIRKeN6LWS2GNxA0jTNiERZs74CjGV9IKUk%2F%2Bp15csN&X-Amz-Signature=01c67fa9455be41acc41adb13e121c1247281659e776c729320a868e2c0f8ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KNXPHS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjvwTkpPhurx5DtDklAqlR%2Bm2b81o%2F5vEA2fCpHgmTuAiEAiL%2BYTVKVyXXIQEllAQDjTxi0l4UCp6cBHDD5StRZtDwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk%2Bm1ae2chv7LahoyrcA5gY6bXFO%2FtG8lH5oe5%2FfKzzP9HZp66D5Q8%2FmKI5lHayRk3GMIALVEf9pcVCs2ZQA%2B%2Fg6N0WdxkAkNJ8q3WLbhOcIjaHzDidHnYDLf0YoPD6ay0Scv0cLCUBD7zNY4yJI1G3L%2BCVoprDcCvNg6z2UV05GiStFVKLTiOM52fH8HwvpSi2seTknrbuoXok5Yq97EZN341JJxoS9rnEsHnAGiNUEM280ePOW%2BcT8TuI6Z%2BX%2BxsLyKh3nOItjiDuDDEn%2Bi%2B1oAtclixsolkyqzqtyJdIItEeduVvN53tQZYNGLvI0l9WuNPsvfm2xXPOzUhJfd2AicaFZbqPkS9fzEC5C2f1DYKJ8VeCgE4WMD11DaL95HguIOqsjn915HqhDY6sNsKEEaEP8JtcZr0xA7VLCw3jo%2BjVpbkf3z4WroSpfIZ3ctocreLYh4rWPrx69pDVK4oY3pDSMYGl%2BjSxx%2FEmFWqW%2Ff%2F6hL2%2BFpnyNm9v62L5TzW7tIDiqyflYZGxBhIyLuMeNWEDMfZ%2BdYdNqZ2%2BoNUytdO8zeZV1cYlpSGdDqTVAWxfWolfko8TxPMkaR%2Br1MYuBVvAjsXL99U2aSQGozJjUyRz%2FzN14t2BqifPg5V6bUojOPw3eml8nNuCMMuk7LwGOqUBI5ELB1WoDzqwMEA6EYyZyo%2BWtMjt1RdlS8p9Qklms1OJDSB8est%2FoXNv5M8EbTm5v9HRtRKs8vgIWIBClWRO7aKYOk%2Fzrv%2FZXONPSeT3EwQ5Rz6QYDvGcglaPS3cNsByMyQHOzgc5G4pOyHicH8Y2FBy3hEQFRRd07m7%2FFvJ8%2B3hgbFmkFIRKeN6LWS2GNxA0jTNiERZs74CjGV9IKUk%2F%2Bp15csN&X-Amz-Signature=8e781294e40555c594844253877e88fffaa0b3f0c75157997ce122268d21598b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
