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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3WDYHZB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc%2FM7ntQAlN%2Bqo7igPmmWTqgtht21YDXOHcpjfeE8Q%2BAiEAuC5l5e4nad8%2Fjwe9DXu%2BSEeqXlEgF92QieylXkwPeXgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEsjaMZqqPkztLl%2BESrcAyC4G6AlBOJVmq4mvRwyQt855JgdCCWEhn7RErVkAMBb%2Bu5sks5DqdDmZsx2t6NPZ8hjG1GkJ7cwkeb8bmBC4m7okk%2FMWqKs4cUfYUV7lPsl1WWQW5%2FhAJU2nS%2FvfwP9xh4huxiVD0jvn2IbjzHHemDEBacTbdRA8q%2FRLNvSf%2FIJqg9ZJ%2B28gxObuFOO0Hr4wNxmYzdtV5M2dCJahqGUhG7Egk17Ze9F5rL2Y0eybArpYpuofSP0YNJnqi41zf%2BXvu%2FskDscCR2e55A9Ibn7i%2FyXXpXmsDFJ%2FmVDV7Fc1FfXmSklSqGfRsaXCG8I2pHdGZrqY5ikEFKUHkCqi2JclPnYVl0HjqKqhfl8j5KtzfzwOD7twRcdLRtPeOYWN5RSjYkrsvAllOFqOCzRE84ABDNW4bnbmfcyeRTzfadl6UEisshuILXmtrSbFBWqasc9EHcQxm8I9%2B4RXZAVtgEtL35Cdn9Cyn2QZWOVHDbdeoc6k2Ml4hbz04d1TWFbsgNinKfGIND%2BEpKFGheWn4FoGKqcJCqrKUmAv%2BgwqNzE5GaiaebH8XWtR34T%2B1cqQZGJKLB8L%2F%2B0cQm1ttlJqA5NTfzZrXoePZFusF6%2BE8cmG0jAR%2FapBtQdXo1QDXj7MKyBkcIGOqUBeHZdXETqizOxR5cMqCg3auLJJb7w5PhdhN5hjDUgzPHjhqVRQbwvnVJpoBigqDkszbOcI%2FCPFKarjhJB5UQM2sfAAxzUWfVfy2DjBTBDPArX%2FnD0VrdLErfudMOXRVivV3CUAhJ9s1O4EvcEN9kAeEcyQ4ru7KTyTiYhlXaAKjDM2jzJH05Q%2BhF5vOUqJ5FHDrslfl%2FTToZbvjqcFG1pt5Oo%2FAbK&X-Amz-Signature=8f7b22c1778b803e18aa450a5686f5920bb2c35069757d4834e946ac2702c9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3WDYHZB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc%2FM7ntQAlN%2Bqo7igPmmWTqgtht21YDXOHcpjfeE8Q%2BAiEAuC5l5e4nad8%2Fjwe9DXu%2BSEeqXlEgF92QieylXkwPeXgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEsjaMZqqPkztLl%2BESrcAyC4G6AlBOJVmq4mvRwyQt855JgdCCWEhn7RErVkAMBb%2Bu5sks5DqdDmZsx2t6NPZ8hjG1GkJ7cwkeb8bmBC4m7okk%2FMWqKs4cUfYUV7lPsl1WWQW5%2FhAJU2nS%2FvfwP9xh4huxiVD0jvn2IbjzHHemDEBacTbdRA8q%2FRLNvSf%2FIJqg9ZJ%2B28gxObuFOO0Hr4wNxmYzdtV5M2dCJahqGUhG7Egk17Ze9F5rL2Y0eybArpYpuofSP0YNJnqi41zf%2BXvu%2FskDscCR2e55A9Ibn7i%2FyXXpXmsDFJ%2FmVDV7Fc1FfXmSklSqGfRsaXCG8I2pHdGZrqY5ikEFKUHkCqi2JclPnYVl0HjqKqhfl8j5KtzfzwOD7twRcdLRtPeOYWN5RSjYkrsvAllOFqOCzRE84ABDNW4bnbmfcyeRTzfadl6UEisshuILXmtrSbFBWqasc9EHcQxm8I9%2B4RXZAVtgEtL35Cdn9Cyn2QZWOVHDbdeoc6k2Ml4hbz04d1TWFbsgNinKfGIND%2BEpKFGheWn4FoGKqcJCqrKUmAv%2BgwqNzE5GaiaebH8XWtR34T%2B1cqQZGJKLB8L%2F%2B0cQm1ttlJqA5NTfzZrXoePZFusF6%2BE8cmG0jAR%2FapBtQdXo1QDXj7MKyBkcIGOqUBeHZdXETqizOxR5cMqCg3auLJJb7w5PhdhN5hjDUgzPHjhqVRQbwvnVJpoBigqDkszbOcI%2FCPFKarjhJB5UQM2sfAAxzUWfVfy2DjBTBDPArX%2FnD0VrdLErfudMOXRVivV3CUAhJ9s1O4EvcEN9kAeEcyQ4ru7KTyTiYhlXaAKjDM2jzJH05Q%2BhF5vOUqJ5FHDrslfl%2FTToZbvjqcFG1pt5Oo%2FAbK&X-Amz-Signature=ec5f34df1211ba0ecd1748ead012bf6b4b6c6e39e270995a75aeeaa9540e6add&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
