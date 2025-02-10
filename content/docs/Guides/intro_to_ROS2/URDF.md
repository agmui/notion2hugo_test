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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PZAOH6K%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1qR8WAU9JH7XX0nytqU0NjTRoG3AStPlDPE0q%2FVCd9QIhAMTZTJgUhW3rMAB1jSu2lcGT4LgWcyTQf5VSPq56T4kSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxksNleKNrey9I98usq3AM5y4uYQnlSs0%2BpcWlrSIXhe3SD7G%2F%2BoMPP5eO3w5P61fgpoPeLCNyWAU2kiFRQ5daHKoK0vxEYS8AF3xh1gZweQ2tVYiCC%2BMnwJBV1sg9cWOe7FGOk0tG0Y7kxCT41AWa9kMwjNm7r2qNOhgkpVwEDaLDoH3wOEYSuArkgnwkCjgxTxI3fBc%2BTJoyDWlt9Fa2iSU6q2gEJZzmeo1U6%2BojxC8lvFjI2aPNNnvlijGovCAYeuAiPZMLt1brt%2Ftfx417ZSxLU95wgOxmwslbBwSWHdm7UZ2YM8YQemzRC024%2FU1EFK6%2BBxcWkpxlFVTqq7zvm7e26EKKhULtcIwd%2FZVcbRgf6KoUPw%2BYZOdz9z7iIoTQkmgBANsfHdF%2FHzGMGAt1Ulj8C0A71EciZu%2F5ulfnX68%2FzPMqtTABLRlJiWoj5oqrJn0t1HrgoauRJ1msua2BfCRNPe5JY%2FF4jBFQYQU%2BvaTs8t5%2BvdUJOMygZRoysS3nFEUH2BoEpt5F4gHZPR7jTNPWqKoKozwkRtwTrovEeHabCjsgcC3ojCoo0uL7edVvZzeKb%2FNhQ1Om9N9VxnCn2gLjIwrscmrxyKSsnsX%2BFsrYqnWXy5Y40wOhL6birHhs1zm99I96f273w5zC2rqe9BjqkAWfO54C9bZy5IBSIN3XCH9KPMOGUcR0ykTgYgemkPAFzyzNaFiijo%2FWjABkHdIz4S3BDwljWd0CP51ZMDRqhwtsUcgjecg5ME182zFOsX62sAuuEVaQAr9Wa9YJVdeLSpxUSc1K0aN1%2F%2F6zAVWdW2h9kM1yIqlJUYlQGtU3iuYu1UAgL8uo%2BFSrAY21tP3m663cNW9rHmDRvNplMFVpJew0w%2F%2Ba9&X-Amz-Signature=bb687b70ef527ab19c91aeac0c75d1bbd2c127cf765af2af86d60556fb11645b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PZAOH6K%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1qR8WAU9JH7XX0nytqU0NjTRoG3AStPlDPE0q%2FVCd9QIhAMTZTJgUhW3rMAB1jSu2lcGT4LgWcyTQf5VSPq56T4kSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxksNleKNrey9I98usq3AM5y4uYQnlSs0%2BpcWlrSIXhe3SD7G%2F%2BoMPP5eO3w5P61fgpoPeLCNyWAU2kiFRQ5daHKoK0vxEYS8AF3xh1gZweQ2tVYiCC%2BMnwJBV1sg9cWOe7FGOk0tG0Y7kxCT41AWa9kMwjNm7r2qNOhgkpVwEDaLDoH3wOEYSuArkgnwkCjgxTxI3fBc%2BTJoyDWlt9Fa2iSU6q2gEJZzmeo1U6%2BojxC8lvFjI2aPNNnvlijGovCAYeuAiPZMLt1brt%2Ftfx417ZSxLU95wgOxmwslbBwSWHdm7UZ2YM8YQemzRC024%2FU1EFK6%2BBxcWkpxlFVTqq7zvm7e26EKKhULtcIwd%2FZVcbRgf6KoUPw%2BYZOdz9z7iIoTQkmgBANsfHdF%2FHzGMGAt1Ulj8C0A71EciZu%2F5ulfnX68%2FzPMqtTABLRlJiWoj5oqrJn0t1HrgoauRJ1msua2BfCRNPe5JY%2FF4jBFQYQU%2BvaTs8t5%2BvdUJOMygZRoysS3nFEUH2BoEpt5F4gHZPR7jTNPWqKoKozwkRtwTrovEeHabCjsgcC3ojCoo0uL7edVvZzeKb%2FNhQ1Om9N9VxnCn2gLjIwrscmrxyKSsnsX%2BFsrYqnWXy5Y40wOhL6birHhs1zm99I96f273w5zC2rqe9BjqkAWfO54C9bZy5IBSIN3XCH9KPMOGUcR0ykTgYgemkPAFzyzNaFiijo%2FWjABkHdIz4S3BDwljWd0CP51ZMDRqhwtsUcgjecg5ME182zFOsX62sAuuEVaQAr9Wa9YJVdeLSpxUSc1K0aN1%2F%2F6zAVWdW2h9kM1yIqlJUYlQGtU3iuYu1UAgL8uo%2BFSrAY21tP3m663cNW9rHmDRvNplMFVpJew0w%2F%2Ba9&X-Amz-Signature=4d1c05d153f526822fa540ab5b013e2f77ed7a9d8ba1d5a3783331f034489ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
