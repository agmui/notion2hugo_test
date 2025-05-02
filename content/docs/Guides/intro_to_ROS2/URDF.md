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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGULR6C%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGnRjYWeOyxplbF6jRU6DeGnFwmsqOxDaohmytUQBSYSAiEA7PBJOlJAF2Sq67wiUNiHcYpfq6RfaTC7jwWPykk5o8EqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzkBs%2BumoSBL%2BwQ5ircA5YmcyXisXgV6FegegACZC9oS97FSjFSIMQ7E1sONqrYi0%2BRLxXVO5%2Fm%2B4fH97KckvR4F%2FmgLKzLYPHXCc6Ht%2Fwryrlh5bs%2Bk2a%2F%2F%2FkUwPg8mox1fO3hXNrQGWszIkBGJGwvBGdHuOiYlemFrYJBXcE%2Bn19wKY4A%2Bg7%2BrDZ3Fv5p3H9sjxKdzIQG%2FeT19njK3LL5%2BUdt0CBOcl2%2FkqAu1VCSFP7Ee2VrJfhuycf6hwbTcgij9hrZJeaAsb56f%2FnM5tQLAfal75Iv41gisVEA2lH2Ylb%2Ft7PnSYN4ZXYcx4qNFQQVgS9bdgM5z13KU02KwCS4gzi9%2Fwey6nLlDZqupcfucT6zqEDGei06SohNK1oAdZrTFIKalu%2BXEadYnEOKhKaREdSTpNmSvkpMlqN1rtcBQAXGLdEvsEOsr5xetxeRN5GXM5zgyrjKCKgWhdVEB6I%2Brv22xUyC%2BUXk5eUMFoEjnN9mOpXanMTSl7tiZCTME%2FaCtEEpTNPpdZc2gvBeu5iR3Qx2vVCsn8ETYrkIIGgYCT8c72TQ8y%2BTVRTICMIJaA%2Fk12az9UMviz2vfQiP5CnOKzfyxZnHMMcat8uiTjHG5Y78LQho3DWTqrWrDjlVfvEd%2F1nZml4PvK%2FXMMuZ0MAGOqUBw8qF7ZYRL0lGJc%2BgAyw0kvuwyLFTxsOAEH4j7a2RGzAIBTmJGCLQaEbTx8mEcDW9PhUXVRhW%2BNjjnzr%2BYI7M1svzeI7LVC3F3HdqIzrKa%2BErbgaMwNMconffmUohx9veCkDjWhwY2iL8EbWcrIacbx9s9ioyNAnIS90FdZVUDjXWvbimVS3sUyTv0odnaWDpk%2FakOdh1Kqi5nqEYui7Om5n5vNKj&X-Amz-Signature=245df6b261b974ebc3a0ce507be7a5ca3ed8e35d6236eb08353682608b429851&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGULR6C%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGnRjYWeOyxplbF6jRU6DeGnFwmsqOxDaohmytUQBSYSAiEA7PBJOlJAF2Sq67wiUNiHcYpfq6RfaTC7jwWPykk5o8EqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzkBs%2BumoSBL%2BwQ5ircA5YmcyXisXgV6FegegACZC9oS97FSjFSIMQ7E1sONqrYi0%2BRLxXVO5%2Fm%2B4fH97KckvR4F%2FmgLKzLYPHXCc6Ht%2Fwryrlh5bs%2Bk2a%2F%2F%2FkUwPg8mox1fO3hXNrQGWszIkBGJGwvBGdHuOiYlemFrYJBXcE%2Bn19wKY4A%2Bg7%2BrDZ3Fv5p3H9sjxKdzIQG%2FeT19njK3LL5%2BUdt0CBOcl2%2FkqAu1VCSFP7Ee2VrJfhuycf6hwbTcgij9hrZJeaAsb56f%2FnM5tQLAfal75Iv41gisVEA2lH2Ylb%2Ft7PnSYN4ZXYcx4qNFQQVgS9bdgM5z13KU02KwCS4gzi9%2Fwey6nLlDZqupcfucT6zqEDGei06SohNK1oAdZrTFIKalu%2BXEadYnEOKhKaREdSTpNmSvkpMlqN1rtcBQAXGLdEvsEOsr5xetxeRN5GXM5zgyrjKCKgWhdVEB6I%2Brv22xUyC%2BUXk5eUMFoEjnN9mOpXanMTSl7tiZCTME%2FaCtEEpTNPpdZc2gvBeu5iR3Qx2vVCsn8ETYrkIIGgYCT8c72TQ8y%2BTVRTICMIJaA%2Fk12az9UMviz2vfQiP5CnOKzfyxZnHMMcat8uiTjHG5Y78LQho3DWTqrWrDjlVfvEd%2F1nZml4PvK%2FXMMuZ0MAGOqUBw8qF7ZYRL0lGJc%2BgAyw0kvuwyLFTxsOAEH4j7a2RGzAIBTmJGCLQaEbTx8mEcDW9PhUXVRhW%2BNjjnzr%2BYI7M1svzeI7LVC3F3HdqIzrKa%2BErbgaMwNMconffmUohx9veCkDjWhwY2iL8EbWcrIacbx9s9ioyNAnIS90FdZVUDjXWvbimVS3sUyTv0odnaWDpk%2FakOdh1Kqi5nqEYui7Om5n5vNKj&X-Amz-Signature=0daa92073458c7692790ba02ebd530967e618244e9bacefe9a5484556d746fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
