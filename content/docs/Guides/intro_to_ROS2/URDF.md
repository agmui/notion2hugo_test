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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QPYMXV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBkjZBazhkPBo4KNldVywLOmBT4Z2VQlQEeRhWOZlMIqAiAmFKcoVEV2oiWJTDb1uB%2F2kUeeQH%2FoirklpLKsOgN93yr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMMEmp%2FHDr%2BBpmOpldKtwD8Npql%2FQ1mbOfk17HsuchBAQG3UFBnQ2Q37dAWjHrGV%2BTrvKlphsg5S36CrOwn5K8xuzlYRbajhw2HG1j%2BaRgH9FzLozsgMbMvHKYMXjGqvVRs05ynfWqkaSFkOJuzpi7DjTDEmrgcAQeW1OqRnQnPpAS66nl6R1d68f1NVZA7EnDrGMRKwUkb0rnrIwLWZLjLkChAixVybdNJ6qrtN8C7EwedmU978DloqRpzJsDtSKaGVKgWoxRug6YI7%2FECpee5UAOa4nDEsvaR2Ax8UPk8RqMt4ScquIMU7brWEqTDHiDSFqiTrSuBaeQn0P8Zx5negEAw%2FKbHt%2Fb%2BLrRnBBshNi7Re%2BTcOV7L2CXQ0DWT20%2FlXp0uADuqtWwIIJ21g2ZUDqoKNhQV%2FPWXK4FSQb7ol%2BSCmPLgfKjUqg4ZYXlalCVC4Z2Rhk6nVyYoL2roZD%2FDVl2FSbJTSYucc1we7qVLNth599pBnAxkOa7YEVtZ8b5fZ7C0sMmMM1xzIPQsKVAnipsFeHbM4mvXEIqIUKO%2B4YwtvU6d2k%2B6e8HvnLSMteod9mvXbPlg2q2fPszqooDxwR3g2NWjm2iEgKM5z%2FYsnmtpB%2FBwOfcWpEXFfGfuW%2BNXxMzTopPeitIwnIwj%2BigwwY6pgE19MQmXM8C0FLWpGGl29Ady1MOBNu%2B4N9FFJqYrOS0CfdAQY9ozHd3ef1FA0DgB%2B4tpruYZ09WXJaOKYKjJZnB4UKhJBCIbIBJ4ceTc4aGxWOV1Zuc98qF2q21X20it2kPEwtR1LyCqVF0Gz3sqFGcRWpZo30giGsbBQGMJuIYjB7SzuE%2FhgZBXydr3zkVz5jQ28%2BfZuPK0kgJtDS8DWgQ9SL5TbL0&X-Amz-Signature=b0a2568d20bf0c7d5cb527432b5f70410d5a4c253daa6f04abce5dcb912e4d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QPYMXV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBkjZBazhkPBo4KNldVywLOmBT4Z2VQlQEeRhWOZlMIqAiAmFKcoVEV2oiWJTDb1uB%2F2kUeeQH%2FoirklpLKsOgN93yr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMMEmp%2FHDr%2BBpmOpldKtwD8Npql%2FQ1mbOfk17HsuchBAQG3UFBnQ2Q37dAWjHrGV%2BTrvKlphsg5S36CrOwn5K8xuzlYRbajhw2HG1j%2BaRgH9FzLozsgMbMvHKYMXjGqvVRs05ynfWqkaSFkOJuzpi7DjTDEmrgcAQeW1OqRnQnPpAS66nl6R1d68f1NVZA7EnDrGMRKwUkb0rnrIwLWZLjLkChAixVybdNJ6qrtN8C7EwedmU978DloqRpzJsDtSKaGVKgWoxRug6YI7%2FECpee5UAOa4nDEsvaR2Ax8UPk8RqMt4ScquIMU7brWEqTDHiDSFqiTrSuBaeQn0P8Zx5negEAw%2FKbHt%2Fb%2BLrRnBBshNi7Re%2BTcOV7L2CXQ0DWT20%2FlXp0uADuqtWwIIJ21g2ZUDqoKNhQV%2FPWXK4FSQb7ol%2BSCmPLgfKjUqg4ZYXlalCVC4Z2Rhk6nVyYoL2roZD%2FDVl2FSbJTSYucc1we7qVLNth599pBnAxkOa7YEVtZ8b5fZ7C0sMmMM1xzIPQsKVAnipsFeHbM4mvXEIqIUKO%2B4YwtvU6d2k%2B6e8HvnLSMteod9mvXbPlg2q2fPszqooDxwR3g2NWjm2iEgKM5z%2FYsnmtpB%2FBwOfcWpEXFfGfuW%2BNXxMzTopPeitIwnIwj%2BigwwY6pgE19MQmXM8C0FLWpGGl29Ady1MOBNu%2B4N9FFJqYrOS0CfdAQY9ozHd3ef1FA0DgB%2B4tpruYZ09WXJaOKYKjJZnB4UKhJBCIbIBJ4ceTc4aGxWOV1Zuc98qF2q21X20it2kPEwtR1LyCqVF0Gz3sqFGcRWpZo30giGsbBQGMJuIYjB7SzuE%2FhgZBXydr3zkVz5jQ28%2BfZuPK0kgJtDS8DWgQ9SL5TbL0&X-Amz-Signature=84ce32f40f46cccbcb3618a45794873e8e0232a9cf5456d887f99bc87ba39700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
