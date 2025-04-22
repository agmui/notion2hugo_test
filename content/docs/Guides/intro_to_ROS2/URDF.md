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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLHCEDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDBawl6I%2FqfMxtV%2BlSoD2BaS3lP58dL9hDAVt9%2Fk1nfLgIhAKNeqwYlw9u0aJh49Kv3amRPQNjaKGGZJYpWWMOliiBQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4qgg6ZfTOvb5VzrMq3APhYVI5HfEra1gJHy0cAYgaXNwIBbFTrrm7SwKSpYbBwCUgLNrzcj2CEScu93OrBTsBdeLQ0FUaW%2BIQPZ6dbOTj2owVBN8IHYYD%2Bv8CNKaI2qANXJ5AUEh4nX3MprI1X04NdGN4hpUNAV01AwIrgLVu19jG8pc6pMy07F82Fujt5%2FPbhEXvqA09zjEDL84hAntcNVBRz7q0u5LybHrRoaRdkrK8ow84UxTUB1v5k55EUkIlZzX1ZA8ZYFpwRsQzwG8B6Q85GNFxkqFYb45%2F6%2BnZZFfSmPIteiyidY7pHVNgt9IAe3ercAkopqbhrv8p16PAsQcM5CkVKcl0VVaDT8m9jCrlfigDGHnT4jZE%2FNNzyOYU8DsUDz5BIwb45Rn%2FxW847BwcuiunUaWu9kdvgFM6T6RwlYZAa2jUO4%2Fb3yC3raua9eEopT4vamm%2FPeo5gbDZJ9QzhulbQGUEajfO91sMD63Hp4mourDNcYe2w3iLqpPzI1q1cz0ATSgPRa6CHux%2BbwJZGwHtpmI7mmS7SC25YL0aqmhCHy4dwVB%2FQ9Cwxw5042Bjbos9RJdcqPr5CBhhX7tF31tSrsOaTn%2FagX4n0FfvcC1btuTTUKfOLL8FXdmlqpVFH3%2BVuuM1gDCz1ZzABjqkAflg7VdFpNKOT35wpSxJASV5KFygFdJS7n1bNPKGZOM%2BaLi%2BM%2FL38rLti%2FseSaAdIQOq1rMfuQ%2Bg0N%2F7BYjJ6ikHcSN38%2FAE50B5UHHwHFP6TiAeujg0zJDAXaA7MbT5HBl1UXFacKzsrfNxW7%2Fnzk%2FdkKrBnEYVle%2BsG9Dzx1m6p4nhH9uanGj1VASglCMVf%2Buf1TJDk16baxxjFdka4nDkAHiK&X-Amz-Signature=727f4160957b2a9dedf7a56161f4ec8961225513918610b9d52d764728d23579&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLHCEDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDBawl6I%2FqfMxtV%2BlSoD2BaS3lP58dL9hDAVt9%2Fk1nfLgIhAKNeqwYlw9u0aJh49Kv3amRPQNjaKGGZJYpWWMOliiBQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4qgg6ZfTOvb5VzrMq3APhYVI5HfEra1gJHy0cAYgaXNwIBbFTrrm7SwKSpYbBwCUgLNrzcj2CEScu93OrBTsBdeLQ0FUaW%2BIQPZ6dbOTj2owVBN8IHYYD%2Bv8CNKaI2qANXJ5AUEh4nX3MprI1X04NdGN4hpUNAV01AwIrgLVu19jG8pc6pMy07F82Fujt5%2FPbhEXvqA09zjEDL84hAntcNVBRz7q0u5LybHrRoaRdkrK8ow84UxTUB1v5k55EUkIlZzX1ZA8ZYFpwRsQzwG8B6Q85GNFxkqFYb45%2F6%2BnZZFfSmPIteiyidY7pHVNgt9IAe3ercAkopqbhrv8p16PAsQcM5CkVKcl0VVaDT8m9jCrlfigDGHnT4jZE%2FNNzyOYU8DsUDz5BIwb45Rn%2FxW847BwcuiunUaWu9kdvgFM6T6RwlYZAa2jUO4%2Fb3yC3raua9eEopT4vamm%2FPeo5gbDZJ9QzhulbQGUEajfO91sMD63Hp4mourDNcYe2w3iLqpPzI1q1cz0ATSgPRa6CHux%2BbwJZGwHtpmI7mmS7SC25YL0aqmhCHy4dwVB%2FQ9Cwxw5042Bjbos9RJdcqPr5CBhhX7tF31tSrsOaTn%2FagX4n0FfvcC1btuTTUKfOLL8FXdmlqpVFH3%2BVuuM1gDCz1ZzABjqkAflg7VdFpNKOT35wpSxJASV5KFygFdJS7n1bNPKGZOM%2BaLi%2BM%2FL38rLti%2FseSaAdIQOq1rMfuQ%2Bg0N%2F7BYjJ6ikHcSN38%2FAE50B5UHHwHFP6TiAeujg0zJDAXaA7MbT5HBl1UXFacKzsrfNxW7%2Fnzk%2FdkKrBnEYVle%2BsG9Dzx1m6p4nhH9uanGj1VASglCMVf%2Buf1TJDk16baxxjFdka4nDkAHiK&X-Amz-Signature=f496574e2e6c9dc101317b985cc80a1d5ce1b14a47dfe09ed2a6302695796fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
