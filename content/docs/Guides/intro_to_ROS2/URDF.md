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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIF7FAW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk5gwuoe%2BfNJN0vRPaahOpFzfaVtskxonBKp%2BFXlHLBAiAa7g8d44DK7H%2BQb7YHUu9AnPwHMDw6Nkjm1t4HRd8Z2SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfp1RcMTsJn6Bo18SKtwDU7jBLPhoMGWp4LN%2BuwV2OiTgiXLjH5LSHqVhl7yc9gBJMZLduv6JLXfEdsXGAfHVaMp2rucS4jLpZV2yMe3Sa6WUraE%2Ft9qyzM5WiipoTFoCSrT%2FfLxslW9SCkduwrxmwiWWOaXJex5fnlrqzns94Uk4bqKuxaReanYAmFSLNE7rLLrFGScN01we3TYYPxYpri4N%2B7zhnqS57JS%2BQ6K9dMPdLEvIOvz5sSgrmoGGzGmng7Vv%2BeB5XLGGzKCUpjqHJ9%2Fmw%2BD3obistObvi953f4hh1g0BroTzz2bXnffBW8vfYjR%2FQI4CIOcZqLnxT7dtXg8Jk76%2FdnLsW3dwnDG9XjuacypLK%2BTKWv4pP5DKI4im1ip8t6uDakZ6kdM1ZNS8K3ginietSOFW9p%2BeZQVEMIjLGv9fT74tCdT0Doy%2BSbcOfdsrnlqBVLSXxxtFzh2K3EgEC%2FRa3h2fneo6pCQn7wFPadNW6shEO31y8HMc3geVpzNya%2F2Wks1u4aPGnMrF9YoUjyVv8VYjPHyQ1eBar%2F5WL%2B1bUNxQmjYZgYG2Fb3V4W4K8n1rfrTPbJI770SqaJ180lzbVMQLLz99DYf3NnwKmW4e%2F8rOlSJVFj4huG8Iyse%2BtM7iLG%2FeQtgw2vnHwwY6pgEmUjxhBACuHlZN0OejFPqzAmjmuZmqXCHKvMkrdUXmokF83EwIvBtTnuR7TRs7t9NBm2M%2Bv052CihtkFbK4bukkKUByyPAFvtzc7fLkrPTYx1vAU9CpDV3gzekZzsVAf4vAHvb3P2R%2BdOug7WfNMMIy8tahrMYXe40YIrzj8q4ZTs48LIEBKizc3qA1cc2%2F5tUX2ENkj7WbTKnjQlguAxAOOE9X8jS&X-Amz-Signature=00b6b57fe6c3e0e3a1c2d0dd3c25e0174e4dd14a32b2e754749bcefdc98f64fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIF7FAW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk5gwuoe%2BfNJN0vRPaahOpFzfaVtskxonBKp%2BFXlHLBAiAa7g8d44DK7H%2BQb7YHUu9AnPwHMDw6Nkjm1t4HRd8Z2SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfp1RcMTsJn6Bo18SKtwDU7jBLPhoMGWp4LN%2BuwV2OiTgiXLjH5LSHqVhl7yc9gBJMZLduv6JLXfEdsXGAfHVaMp2rucS4jLpZV2yMe3Sa6WUraE%2Ft9qyzM5WiipoTFoCSrT%2FfLxslW9SCkduwrxmwiWWOaXJex5fnlrqzns94Uk4bqKuxaReanYAmFSLNE7rLLrFGScN01we3TYYPxYpri4N%2B7zhnqS57JS%2BQ6K9dMPdLEvIOvz5sSgrmoGGzGmng7Vv%2BeB5XLGGzKCUpjqHJ9%2Fmw%2BD3obistObvi953f4hh1g0BroTzz2bXnffBW8vfYjR%2FQI4CIOcZqLnxT7dtXg8Jk76%2FdnLsW3dwnDG9XjuacypLK%2BTKWv4pP5DKI4im1ip8t6uDakZ6kdM1ZNS8K3ginietSOFW9p%2BeZQVEMIjLGv9fT74tCdT0Doy%2BSbcOfdsrnlqBVLSXxxtFzh2K3EgEC%2FRa3h2fneo6pCQn7wFPadNW6shEO31y8HMc3geVpzNya%2F2Wks1u4aPGnMrF9YoUjyVv8VYjPHyQ1eBar%2F5WL%2B1bUNxQmjYZgYG2Fb3V4W4K8n1rfrTPbJI770SqaJ180lzbVMQLLz99DYf3NnwKmW4e%2F8rOlSJVFj4huG8Iyse%2BtM7iLG%2FeQtgw2vnHwwY6pgEmUjxhBACuHlZN0OejFPqzAmjmuZmqXCHKvMkrdUXmokF83EwIvBtTnuR7TRs7t9NBm2M%2Bv052CihtkFbK4bukkKUByyPAFvtzc7fLkrPTYx1vAU9CpDV3gzekZzsVAf4vAHvb3P2R%2BdOug7WfNMMIy8tahrMYXe40YIrzj8q4ZTs48LIEBKizc3qA1cc2%2F5tUX2ENkj7WbTKnjQlguAxAOOE9X8jS&X-Amz-Signature=72bcff70aa02b1503f271efccdf1587dc82cc96cff652c7a432b6f4d1c76f1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
