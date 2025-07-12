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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HV3ACY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbPm7lUaWSUrs3ArtsrgEUIMM%2FUomyqbq26a%2FXt21hFAIhAOejUNEkxUimIJFl7hmNOtwH6POxsEL47jxT8hvF9xqaKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlhY8uLNyPjZHMKfcq3AOZf1xnY%2FYT5mkpENU6%2BoxRHJMd9xjy88qNu006D3gVHbbcGZQKae8OOu7S%2BEL%2BT7o%2B2z%2B7EtINSCX%2FM79seHqjBjbtwxHr6teFU6AkVWokXv6AIHPJpDyl1AeCyoJlJYHHtnk7X65WgK8GnKXmgVwtEOT5CmRdwwyVtDJDgFH7%2FyrLFtsvEz9aysmGX7ex9Tr94w5HHZFxyOSA32QrhQbQtQn4edm0LeLhsu0%2BtjFMrxfIkP7IT22u5FUsDweZmJxcESsQzBfBAM0pkxgEF64Yzyc7VCNHT2VK9m9jqLswYCjezXkO5649Y%2FXxEQe2B1FQBtKRbcoyYASzxhvvORlWbeCDwr7KvngJT3sIDUAYXMs6UkwRIaVE1AAC6DlR7rRgeltJQFiErHt5XGA0PxvS6AwkO3MmHQxElh8Npt6KzhCBuNySB8w5gI0m3ACJ%2FIi1%2FKn0xfXt89PfnhnJOIo%2Fl%2BE4s0PGMmYgjwI08XXUnaM9NMyPbAVCTUO13YMwW%2BwzVURYh%2FlEkTpptRttQYuQadbBTCePPYTSiAk55BdScJ1MQK8nsAjZbKDcPt4yy1E%2FERrfMog1b3KBFTrKsnwsDua%2Fp6gKvJjQIw%2BKFK9mQHkSda0SpygyFfclSDDctcbDBjqkAcnEA2iiT7vbuGinYUIXy6SnWtZ0fy2B7vSflDzALhrd8B%2BcTLaQ4hC1HK0sOtWca%2BK2aInS1f%2FCMWSpothq%2BEqyBG1Rl%2BNduMJNGyZzyopdMiU%2BE%2FKSy0Hg2RgomjNMOOsNOnjjsKZUfbR90Pnitq%2FmVLJygCOO391tHH0N6Lu58%2FxdEwV1qhlM8gXzNcgxHM6iFviqw87TsEVzP4XxQhwgE%2Bjd&X-Amz-Signature=f5ec7f65b70e1b156aa79a94e9704975f4c75103a3d9e2da3c5993825ddc1137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HV3ACY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbPm7lUaWSUrs3ArtsrgEUIMM%2FUomyqbq26a%2FXt21hFAIhAOejUNEkxUimIJFl7hmNOtwH6POxsEL47jxT8hvF9xqaKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlhY8uLNyPjZHMKfcq3AOZf1xnY%2FYT5mkpENU6%2BoxRHJMd9xjy88qNu006D3gVHbbcGZQKae8OOu7S%2BEL%2BT7o%2B2z%2B7EtINSCX%2FM79seHqjBjbtwxHr6teFU6AkVWokXv6AIHPJpDyl1AeCyoJlJYHHtnk7X65WgK8GnKXmgVwtEOT5CmRdwwyVtDJDgFH7%2FyrLFtsvEz9aysmGX7ex9Tr94w5HHZFxyOSA32QrhQbQtQn4edm0LeLhsu0%2BtjFMrxfIkP7IT22u5FUsDweZmJxcESsQzBfBAM0pkxgEF64Yzyc7VCNHT2VK9m9jqLswYCjezXkO5649Y%2FXxEQe2B1FQBtKRbcoyYASzxhvvORlWbeCDwr7KvngJT3sIDUAYXMs6UkwRIaVE1AAC6DlR7rRgeltJQFiErHt5XGA0PxvS6AwkO3MmHQxElh8Npt6KzhCBuNySB8w5gI0m3ACJ%2FIi1%2FKn0xfXt89PfnhnJOIo%2Fl%2BE4s0PGMmYgjwI08XXUnaM9NMyPbAVCTUO13YMwW%2BwzVURYh%2FlEkTpptRttQYuQadbBTCePPYTSiAk55BdScJ1MQK8nsAjZbKDcPt4yy1E%2FERrfMog1b3KBFTrKsnwsDua%2Fp6gKvJjQIw%2BKFK9mQHkSda0SpygyFfclSDDctcbDBjqkAcnEA2iiT7vbuGinYUIXy6SnWtZ0fy2B7vSflDzALhrd8B%2BcTLaQ4hC1HK0sOtWca%2BK2aInS1f%2FCMWSpothq%2BEqyBG1Rl%2BNduMJNGyZzyopdMiU%2BE%2FKSy0Hg2RgomjNMOOsNOnjjsKZUfbR90Pnitq%2FmVLJygCOO391tHH0N6Lu58%2FxdEwV1qhlM8gXzNcgxHM6iFviqw87TsEVzP4XxQhwgE%2Bjd&X-Amz-Signature=45ad1893d5106872c423aab0b956f44732187b76c5c0acda63c6c8fdd4ba63ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
