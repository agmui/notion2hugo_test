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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRNDQ74%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQzZrjZzg3nhMxy3j2o4%2FDN5lz8g6JE%2FI%2FISc5gidPrAiAYkPt9N3JFpQmqaO4YK%2FUGcUXa2djgX1xCiPbJ3WWceSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMIG0ePUiJLuWRRXuFKtwDsiOPluVublvXFcTjYEnVz%2BEmiwruQ9CPlly5OEU4tp9V1bidIdjXqLTMkBC%2BmP1%2Fq55UAVuCjFG9RC6xQjFtTFLBAn0Y3WK5FypE4t1KVbDVx4gU5ijxLadF80Oe5cRTd0UrN%2BtHOcKpBi%2BLZYAC6fOnrAuVjKBjOfI7y%2FaHfzdquedkCjbJ%2B%2Brb83C%2F%2B7ID%2F74GaYQKaf%2BSb0Rk9f1ZCbr7fSn9dkQEw8Db4eO9L9yaikSphR3A82eSPJ6P%2FaaXkMXtHwoPhmZOmJuqPgFqnMPYMdUD6zeC9CjIwqZRPN1ZOzUA3b9kvzkKJqnhuIEtdHHRWbPKOQs%2FabDLGKtx2hMCy9aKGheD%2F5VdsffLpdVB05QjiTelE%2BRhCT2lA%2FqMoPwxEsUBTGiIecTAoF%2FyFOvB48zMLAAX07M6G8MrI%2B7JGH6cFwa2ZHgKJBzMa8Vic8TZfTgcMX%2BciVa6EyQAaWAFB9rYxof9B0TH7WxhUf%2BO8g1N29wKcmF5Ukw2wHAIZ%2B0kHmy4u166wTJc8xGpEj7raVgfbaFp6XhurYdHEouLUJl1u4wPV46QDxWwLNNRKSCBqZzL6YSOwc7Q0gDTvxh2b9YUmqW%2FYUopX8%2Fi0ioSFlcLrySuSIDFh6wwwue8wAY6pgG0RTUgIVZoww5TgM%2FNljMzEq0AoSdYYGSgO6SMegc4lnoZs0DAcigNDofVcfbxyIeKPoVw9p%2BqsmjM8DHijjb%2FRKrPaabQ3ckwKenm3t15IJQPxFdAejtP0PYBNFpSn1W0TEGEGnR1IBeMI9IEx2gxZxic360aJCaY5oenZZwFRNXdiwZEIa4f2QZTUjhD29pLRNydHtvlR5c7HcUekyPzY1rV2iVZ&X-Amz-Signature=bb67ea7ad3128089a93d33fc3b47d4df2803242dd97b16b6637a820f520b3b46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRNDQ74%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQzZrjZzg3nhMxy3j2o4%2FDN5lz8g6JE%2FI%2FISc5gidPrAiAYkPt9N3JFpQmqaO4YK%2FUGcUXa2djgX1xCiPbJ3WWceSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMIG0ePUiJLuWRRXuFKtwDsiOPluVublvXFcTjYEnVz%2BEmiwruQ9CPlly5OEU4tp9V1bidIdjXqLTMkBC%2BmP1%2Fq55UAVuCjFG9RC6xQjFtTFLBAn0Y3WK5FypE4t1KVbDVx4gU5ijxLadF80Oe5cRTd0UrN%2BtHOcKpBi%2BLZYAC6fOnrAuVjKBjOfI7y%2FaHfzdquedkCjbJ%2B%2Brb83C%2F%2B7ID%2F74GaYQKaf%2BSb0Rk9f1ZCbr7fSn9dkQEw8Db4eO9L9yaikSphR3A82eSPJ6P%2FaaXkMXtHwoPhmZOmJuqPgFqnMPYMdUD6zeC9CjIwqZRPN1ZOzUA3b9kvzkKJqnhuIEtdHHRWbPKOQs%2FabDLGKtx2hMCy9aKGheD%2F5VdsffLpdVB05QjiTelE%2BRhCT2lA%2FqMoPwxEsUBTGiIecTAoF%2FyFOvB48zMLAAX07M6G8MrI%2B7JGH6cFwa2ZHgKJBzMa8Vic8TZfTgcMX%2BciVa6EyQAaWAFB9rYxof9B0TH7WxhUf%2BO8g1N29wKcmF5Ukw2wHAIZ%2B0kHmy4u166wTJc8xGpEj7raVgfbaFp6XhurYdHEouLUJl1u4wPV46QDxWwLNNRKSCBqZzL6YSOwc7Q0gDTvxh2b9YUmqW%2FYUopX8%2Fi0ioSFlcLrySuSIDFh6wwwue8wAY6pgG0RTUgIVZoww5TgM%2FNljMzEq0AoSdYYGSgO6SMegc4lnoZs0DAcigNDofVcfbxyIeKPoVw9p%2BqsmjM8DHijjb%2FRKrPaabQ3ckwKenm3t15IJQPxFdAejtP0PYBNFpSn1W0TEGEGnR1IBeMI9IEx2gxZxic360aJCaY5oenZZwFRNXdiwZEIa4f2QZTUjhD29pLRNydHtvlR5c7HcUekyPzY1rV2iVZ&X-Amz-Signature=e1652e9aee702fc559d72fad2d756ed2bafbd94f0ae911df3a6677a5491a7dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
