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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDX2BA7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpe8wMmh%2Bo4ykdBq63c3VZyt8srPHLUu4VN782AgGW8AiEAzcTl1xGgvrQLwKww%2FRCrOF7kzT5Cj5ZUjuV0Qxhvm5kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbKJ3NwD6hofjqtHyrcA9W%2FTNeY9abJmt1i6eId606yjpiOTVhgEoGJDaGfixdeAWvCTGGamhqtCg8Q9ufIgKOd6BW9udxeEy5JTZTqqlRA82uq1H8TLZiN%2BLMOp49o7gNLH5KH%2FFlLnhsh3QTV2MgjoAeZfDL0E8EiEhzG%2BnDg7e9jeF6U4hhGl6mPt22GmgruTeNfKmEqG%2F6DzS2ODGBwKoArHqtECNULRjIuOfMmgX6WvhsoT%2FsMuMcMjDiI6olPwHQyvW2kR6k9G0L5dhi1HAc3A7qbXJVcXuyZJYHPlkLqr0MlDJd6QDS%2By2arwCezjpues0n69oRWPNGwNz3s8BDUoEQCv%2FlZ39fUqeHIQjaEA25s4lxoWinksHD8nJo%2FBVEmirBZJpXX%2BhJC65aqYgo6Kixi6Ru3GVjui7U4nBXB%2Fp8TQ%2FCR6is9gh5sYSVztyVVui%2FQBnZQxOasgOBVsCUmSPAkY8aXOUdUfD5gomjEeYqLIHYt72TRFPfOfqqJEDE5xwSbpl%2Fg1Q1CmYBDdlZuslRyEnB0Oe9ga1ZR4mwItQQBxhfr7rnmGJXX9CNpr%2BuPEA%2BYzJpcXFdwSnj4GfBfTm6hlZQ5xnRUSy9eITrCqrCcM9BaakJetlOELnD0KiO4DKRFJ9Z%2FMP6apsQGOqUBCKIDm7%2FMt%2BXtG8cb7cm6Dga%2BdCytnVaGcgZNutwoZKWQZBjhZGAegLDmZW%2FyIRz7ZnekWO4WGdKTQpL2lekHuPIIAD%2FrUImjtBuFISjKRBLmHrEWNv45yG%2BAxkGf3yapi1yzhWOc6u01vlEcqbMKSXh%2FKro6OPtacRUbyZAG%2Bho5YHhkjQMvo73r%2Bow%2FlNh72YoZx7Jn%2BOpky9J9%2FM03tgjrKrvC&X-Amz-Signature=3c758ecdfa96e9b2524fcf29e680f4f489b465e909211a477fb4df3ff8564f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDX2BA7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpe8wMmh%2Bo4ykdBq63c3VZyt8srPHLUu4VN782AgGW8AiEAzcTl1xGgvrQLwKww%2FRCrOF7kzT5Cj5ZUjuV0Qxhvm5kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbKJ3NwD6hofjqtHyrcA9W%2FTNeY9abJmt1i6eId606yjpiOTVhgEoGJDaGfixdeAWvCTGGamhqtCg8Q9ufIgKOd6BW9udxeEy5JTZTqqlRA82uq1H8TLZiN%2BLMOp49o7gNLH5KH%2FFlLnhsh3QTV2MgjoAeZfDL0E8EiEhzG%2BnDg7e9jeF6U4hhGl6mPt22GmgruTeNfKmEqG%2F6DzS2ODGBwKoArHqtECNULRjIuOfMmgX6WvhsoT%2FsMuMcMjDiI6olPwHQyvW2kR6k9G0L5dhi1HAc3A7qbXJVcXuyZJYHPlkLqr0MlDJd6QDS%2By2arwCezjpues0n69oRWPNGwNz3s8BDUoEQCv%2FlZ39fUqeHIQjaEA25s4lxoWinksHD8nJo%2FBVEmirBZJpXX%2BhJC65aqYgo6Kixi6Ru3GVjui7U4nBXB%2Fp8TQ%2FCR6is9gh5sYSVztyVVui%2FQBnZQxOasgOBVsCUmSPAkY8aXOUdUfD5gomjEeYqLIHYt72TRFPfOfqqJEDE5xwSbpl%2Fg1Q1CmYBDdlZuslRyEnB0Oe9ga1ZR4mwItQQBxhfr7rnmGJXX9CNpr%2BuPEA%2BYzJpcXFdwSnj4GfBfTm6hlZQ5xnRUSy9eITrCqrCcM9BaakJetlOELnD0KiO4DKRFJ9Z%2FMP6apsQGOqUBCKIDm7%2FMt%2BXtG8cb7cm6Dga%2BdCytnVaGcgZNutwoZKWQZBjhZGAegLDmZW%2FyIRz7ZnekWO4WGdKTQpL2lekHuPIIAD%2FrUImjtBuFISjKRBLmHrEWNv45yG%2BAxkGf3yapi1yzhWOc6u01vlEcqbMKSXh%2FKro6OPtacRUbyZAG%2Bho5YHhkjQMvo73r%2Bow%2FlNh72YoZx7Jn%2BOpky9J9%2FM03tgjrKrvC&X-Amz-Signature=30527d6e6160cde6325ff3e93ca9e7d73ed5dc3ff1f9191e8a2abddf037bca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
