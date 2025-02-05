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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW3CJH5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCQwxe%2BfrMha7%2BWYvE4%2F78uXiNcmQBLKoR8UyZBjrU4MQIhANgFoukRI%2ByCDXT4vTzQZs3llSno6YLRcqxUy3N1Qa0IKv8DCEQQABoMNjM3NDIzMTgzODA1Igxyacc7y83J%2ByFJJckq3ANycPNuAj0uCs8j6X89qVE9thcAKNx9Fvmr7g%2BWQiJ4ZSwJknUMSQqv4VPpiBptpp8JbPpohHmcrG5dXS7wwsTwN5aYMZdR9AXlySd%2F7cLO47V6GKBI092lSdwTJ%2BSMC00%2BYnBvNEhfY7rBFdvvaSS3EEgT93qX4emrE%2BtKVNT4W8cAjlaH%2B59f1nADVFJQ73qeTXBLr%2BfOfzibVA7DmEEWy7apH45VqIC6M4QgOvCLhOq0zwifBl2ZjLwtT68oKTFuACkpOaWG8VZvUToViC6RhV7jwUmu8l%2B5rGdodyqhIMqhN30zhJ3GXwPjnNrMC08pDE3CnxnpJA86fzGPhdyumqTvbPk9aV0YWHSnP60hfkBAehdE8EmlppPfByD32OlB7wGa%2FyuuL70R8wZfRmFATpUz206IALUu%2BRZLNUBfXFVTik2SpIRADOX%2FO3nw50F9Up1NwvxnLJOaeK46b5GhBZNGpmGmu0xBIeHa4pVyFsW5L4IquttbRl4O4mJ7NqSG6whgOaTepgxJQvQxgIdoiRu9JUgg7iqmE1L4x5sDCZWV6ui6zAWRekKXWWedR%2BmPkmK2jiNwFU6RLDGMTx3%2FVpLXKFfOq%2BTOWf94%2FXvzI0ghRljbGHCL%2FsF0ujCPjI29BjqkAXWux9wgRRY0BtBTrT%2BQo9Hg0kn4PjjFJ7ksVjDsxpPvA79%2FF%2FvjxTLjVdU8o124ThPHNzWDmdDJR0ysGOkXtL%2FNJSxIHcGkZfXsBcqZnPN%2FTVkBPn%2BCMN%2BDO1I9XWaBzhgomRmVSbOA%2Bl7DEOgt541dXdA8x8thBMuaQz1FAdzHBWGuKk7ZCeDDV8YFWbp1lVNlYP6nmFy8ZU2dagHGaxi70Cwp&X-Amz-Signature=bbd0a81833cd873840eb06b9f05c75f286a3560edbccd1e4bfba12bbd705e909&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW3CJH5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCQwxe%2BfrMha7%2BWYvE4%2F78uXiNcmQBLKoR8UyZBjrU4MQIhANgFoukRI%2ByCDXT4vTzQZs3llSno6YLRcqxUy3N1Qa0IKv8DCEQQABoMNjM3NDIzMTgzODA1Igxyacc7y83J%2ByFJJckq3ANycPNuAj0uCs8j6X89qVE9thcAKNx9Fvmr7g%2BWQiJ4ZSwJknUMSQqv4VPpiBptpp8JbPpohHmcrG5dXS7wwsTwN5aYMZdR9AXlySd%2F7cLO47V6GKBI092lSdwTJ%2BSMC00%2BYnBvNEhfY7rBFdvvaSS3EEgT93qX4emrE%2BtKVNT4W8cAjlaH%2B59f1nADVFJQ73qeTXBLr%2BfOfzibVA7DmEEWy7apH45VqIC6M4QgOvCLhOq0zwifBl2ZjLwtT68oKTFuACkpOaWG8VZvUToViC6RhV7jwUmu8l%2B5rGdodyqhIMqhN30zhJ3GXwPjnNrMC08pDE3CnxnpJA86fzGPhdyumqTvbPk9aV0YWHSnP60hfkBAehdE8EmlppPfByD32OlB7wGa%2FyuuL70R8wZfRmFATpUz206IALUu%2BRZLNUBfXFVTik2SpIRADOX%2FO3nw50F9Up1NwvxnLJOaeK46b5GhBZNGpmGmu0xBIeHa4pVyFsW5L4IquttbRl4O4mJ7NqSG6whgOaTepgxJQvQxgIdoiRu9JUgg7iqmE1L4x5sDCZWV6ui6zAWRekKXWWedR%2BmPkmK2jiNwFU6RLDGMTx3%2FVpLXKFfOq%2BTOWf94%2FXvzI0ghRljbGHCL%2FsF0ujCPjI29BjqkAXWux9wgRRY0BtBTrT%2BQo9Hg0kn4PjjFJ7ksVjDsxpPvA79%2FF%2FvjxTLjVdU8o124ThPHNzWDmdDJR0ysGOkXtL%2FNJSxIHcGkZfXsBcqZnPN%2FTVkBPn%2BCMN%2BDO1I9XWaBzhgomRmVSbOA%2Bl7DEOgt541dXdA8x8thBMuaQz1FAdzHBWGuKk7ZCeDDV8YFWbp1lVNlYP6nmFy8ZU2dagHGaxi70Cwp&X-Amz-Signature=e5dfeb564d54571bdbf0d64bb73bdab1f9f7743a57792e5ef0fd96361bc19cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
