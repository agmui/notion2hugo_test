---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHHRHLUJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEVOWkn1%2BA6HP8ar%2BpVnl%2BVK629%2FPeN6TFWVampwwUDzAiEA4jbb6vVID2oTk%2FNOUu6Nm%2B9CojRWJ65efevTt2YQtK0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUEW%2BQuKAy24%2FbQeircA6GUqtvY4JnSE68%2BGCujKd1Td0G%2BCm9eX%2Bog0C%2B3tvBWwBujP7v1Qn1nfqYAzddmaVcyLTAGExul6%2BdiNXfKVLJLqiNnaDzd85hMe%2FAgZmCdeA3jwmrq8OJXHKu2JsJR7%2BodWDKUQCs%2FliOuyTZcSJWNbUVIxoZs7YQLYXwB%2FqBUVWhHLhNWRKzkt0ZmQ5LSxTue1haGcRwupohqiNalRZ4CfL%2FlxOZ%2F1qd6i0mlOfjKKPHlsIzzz1KvSlzbiAr28jLp29aXJvdZSfiMAwOy5vl0VarWu9vEsiiUdAIRphGuWaPbaKodWYbgw4o1g%2BRiyU3CQ7nWnjHhVTdeAAZh78glqrOLbAV3VwlmPw67bhBXS%2BjnORhNAkr92GyocWbOrafBeHXBLb76HDfRfp0F9C8DZMFB2R2HrWJSsDHQ%2BNol46VyDQ6k%2B7NQG9vj6qU%2BNmD%2B5XlO%2F72NTQSv%2Bl7cre0aJ%2FaATanfBwm%2BTXQoPS3pJNOfMwU%2BIcHRwn4kicrZJblxIl5YOfXvYh%2BgIQfdm3VW%2BdBITGhpd1puIBolw6vRmMwvTgczZj2oT%2FVnDq9c48GPZECIaulGd62NkEyx4Kopn%2FYVJeLT%2FF9piwf1z7%2Fc6YWIs9SSZYKFm3%2BXMIui0MQGOqUBMw%2BSS34No6dkVq1sgX4je6vhkiZy6IqsK0NzMS%2F2fWgAdF9yeIrggRDmbXIZMNjdiwCaC7X87PSvMQhNfyqmhJFtEKaKgvZ75iUSty3jEGNjGYcvVNZvceCCsQiTPhI033W8XWPorzmZDKPzM04SAZ%2BmtlulmvTJKWXWWj4NEI%2FTEd2MxHRKRqyB9yW8RjfhNkpAPyPNFcVMB72M%2BgEeuhmyvCVK&X-Amz-Signature=38b7a79d5d5522339e48512e5ad5b8fdea49ad68c728a607f108c69efba9801b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHHRHLUJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEVOWkn1%2BA6HP8ar%2BpVnl%2BVK629%2FPeN6TFWVampwwUDzAiEA4jbb6vVID2oTk%2FNOUu6Nm%2B9CojRWJ65efevTt2YQtK0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUEW%2BQuKAy24%2FbQeircA6GUqtvY4JnSE68%2BGCujKd1Td0G%2BCm9eX%2Bog0C%2B3tvBWwBujP7v1Qn1nfqYAzddmaVcyLTAGExul6%2BdiNXfKVLJLqiNnaDzd85hMe%2FAgZmCdeA3jwmrq8OJXHKu2JsJR7%2BodWDKUQCs%2FliOuyTZcSJWNbUVIxoZs7YQLYXwB%2FqBUVWhHLhNWRKzkt0ZmQ5LSxTue1haGcRwupohqiNalRZ4CfL%2FlxOZ%2F1qd6i0mlOfjKKPHlsIzzz1KvSlzbiAr28jLp29aXJvdZSfiMAwOy5vl0VarWu9vEsiiUdAIRphGuWaPbaKodWYbgw4o1g%2BRiyU3CQ7nWnjHhVTdeAAZh78glqrOLbAV3VwlmPw67bhBXS%2BjnORhNAkr92GyocWbOrafBeHXBLb76HDfRfp0F9C8DZMFB2R2HrWJSsDHQ%2BNol46VyDQ6k%2B7NQG9vj6qU%2BNmD%2B5XlO%2F72NTQSv%2Bl7cre0aJ%2FaATanfBwm%2BTXQoPS3pJNOfMwU%2BIcHRwn4kicrZJblxIl5YOfXvYh%2BgIQfdm3VW%2BdBITGhpd1puIBolw6vRmMwvTgczZj2oT%2FVnDq9c48GPZECIaulGd62NkEyx4Kopn%2FYVJeLT%2FF9piwf1z7%2Fc6YWIs9SSZYKFm3%2BXMIui0MQGOqUBMw%2BSS34No6dkVq1sgX4je6vhkiZy6IqsK0NzMS%2F2fWgAdF9yeIrggRDmbXIZMNjdiwCaC7X87PSvMQhNfyqmhJFtEKaKgvZ75iUSty3jEGNjGYcvVNZvceCCsQiTPhI033W8XWPorzmZDKPzM04SAZ%2BmtlulmvTJKWXWWj4NEI%2FTEd2MxHRKRqyB9yW8RjfhNkpAPyPNFcVMB72M%2BgEeuhmyvCVK&X-Amz-Signature=7640a09b1fd6013ee5c5bf74f994adcd6a9d9fad37d20f1b623529bab2f4d3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
