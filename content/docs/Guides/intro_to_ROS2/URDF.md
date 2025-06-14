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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E24SBX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEHUhZ75u2g%2Bq249rm0hcDC2%2BfjGx7JddqyLGI7EXtlpAiEAtbeYauY%2Bc8BLesAM8QdYYbE4h9QA9c19ICUCDEF2V1oq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJm%2FQWN%2FhGcvJmP%2F1ircA4LaHdYpRqffh3o7V4iWeY6qwfdajTEqhFpOWhYtWknS1hpwauDaxEj3%2BGJ6ZlnKJ%2BY7Zc7mw3y8OEiwVtbXy4wcMv2JJFXftZM6EBQgPYPYcMmrwhqmaUi66gYFqBFQQI%2FRonqoeBzitgVer9ZuK5W7OkkdvzaKBKBnw%2B1NSBAZg1tA96kxabBc0fZZYJ%2BW1OtVmHG%2BpgH92Diin8aCLU3PTTmy06JcqjhTrDtB9nv3JGL2ysYyifHknp%2FgaSJ7kwhCd9iMAApPXAXGjwOUyxQO8CkVblwgtJgL1K%2Fha%2BJciYCJDE3KFh9psqfyLg0ERMLdMXX3RfNA6pK8zmj478XC5fTpQugKXcEZ0i76KKewa7UVC5iGEIo81Zz6uwf4nA13vOupRIroJ%2FgbU2AVTaiC6qAdUEtw%2BFTSN3x896WonVc90A8eCYSUPYH9BF3eVUP3QYlNTiIqhW77t2nQeA55qh%2BulzNObmFJQTBQrGiSkWWdfjs38LmMDc2Hp%2Bxe5up7M5nOm5s0%2BUicNC3dc0MaejVINbUWk1Ip3P2C%2FAGkUlO25jqQ6MD2UCPT2bcGEWViTlVa%2F0afxbu3Ay%2Bj8zaay1rRIedhK%2B%2B1Z3%2F3zINE%2FIncwchZ76VMJvRzML27tsIGOqUBqf7lA%2BQG6UkIGQAWGsFweAZksk3o9QdpniZ%2BQmzR3D6z9%2FwLxS3bA%2BkyZbcXzZUrEWv%2BmtHl7IyDiF%2FDrW7ZK12dgUZTt%2B5ETwCF6xIwCYp8CBDiXDwu8G33c7hO6Gw%2BzMGceeSd9f3RDXaE3VE%2FCHz8DfUtM5zJCelHp12wPPErqmRcDzrAUOL6j%2FSVVPGb%2BVxit5w959RTx9qlP4dnn2ZD6kH%2B&X-Amz-Signature=a2803d4301aa9649c6977b513d9cff04c5ad89ff83492adef8fb61a6b1798aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E24SBX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEHUhZ75u2g%2Bq249rm0hcDC2%2BfjGx7JddqyLGI7EXtlpAiEAtbeYauY%2Bc8BLesAM8QdYYbE4h9QA9c19ICUCDEF2V1oq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJm%2FQWN%2FhGcvJmP%2F1ircA4LaHdYpRqffh3o7V4iWeY6qwfdajTEqhFpOWhYtWknS1hpwauDaxEj3%2BGJ6ZlnKJ%2BY7Zc7mw3y8OEiwVtbXy4wcMv2JJFXftZM6EBQgPYPYcMmrwhqmaUi66gYFqBFQQI%2FRonqoeBzitgVer9ZuK5W7OkkdvzaKBKBnw%2B1NSBAZg1tA96kxabBc0fZZYJ%2BW1OtVmHG%2BpgH92Diin8aCLU3PTTmy06JcqjhTrDtB9nv3JGL2ysYyifHknp%2FgaSJ7kwhCd9iMAApPXAXGjwOUyxQO8CkVblwgtJgL1K%2Fha%2BJciYCJDE3KFh9psqfyLg0ERMLdMXX3RfNA6pK8zmj478XC5fTpQugKXcEZ0i76KKewa7UVC5iGEIo81Zz6uwf4nA13vOupRIroJ%2FgbU2AVTaiC6qAdUEtw%2BFTSN3x896WonVc90A8eCYSUPYH9BF3eVUP3QYlNTiIqhW77t2nQeA55qh%2BulzNObmFJQTBQrGiSkWWdfjs38LmMDc2Hp%2Bxe5up7M5nOm5s0%2BUicNC3dc0MaejVINbUWk1Ip3P2C%2FAGkUlO25jqQ6MD2UCPT2bcGEWViTlVa%2F0afxbu3Ay%2Bj8zaay1rRIedhK%2B%2B1Z3%2F3zINE%2FIncwchZ76VMJvRzML27tsIGOqUBqf7lA%2BQG6UkIGQAWGsFweAZksk3o9QdpniZ%2BQmzR3D6z9%2FwLxS3bA%2BkyZbcXzZUrEWv%2BmtHl7IyDiF%2FDrW7ZK12dgUZTt%2B5ETwCF6xIwCYp8CBDiXDwu8G33c7hO6Gw%2BzMGceeSd9f3RDXaE3VE%2FCHz8DfUtM5zJCelHp12wPPErqmRcDzrAUOL6j%2FSVVPGb%2BVxit5w959RTx9qlP4dnn2ZD6kH%2B&X-Amz-Signature=b234cf54779261920e1ecd3542070d8f28c1bd1394de07daf49365f73dda6f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
