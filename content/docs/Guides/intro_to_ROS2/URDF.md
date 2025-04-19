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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623BU5EK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0WrHYY3%2B8oc7cIpD9B2ajibNevWP67hT8auyKlYGxSAiB2u5VGpRMN4uD5EMTKjnzDW%2FHk3qPJ4qwd5vnKp2UkYiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR9V2v0LSCzJoo6lxKtwDQnc%2F0azOgEIATc1HvlHcVu%2BAQbSKsFecSPsGiAQ4Jklfi2ib%2BgjKpGZ7x8rbK0GRdJxN4WRxg66umQTOvA21XvuZK7Fk0U%2FvVlg45x%2BHbPx5%2BXNGHYf%2FRqDM%2Bd8KxJzTuyaWf8jIVO5xaJnxqR1f3r4Gt3rvEcxCDUcPg1AvZofOiTXWIeZSnJadm5g2z82cZlDJTRaLAHrhKp%2FU63U%2BeAv2z2FdeFYHNQm7322219z1YLt0%2B0sc%2FSSjraOYaO6reqF%2FjAdzEzK7C8BpZAnrHJPVjA5bn%2BIUqJbkmAxE60WutQ%2BjrNiZJdB82zPsla9gd%2FRu5WV5k48YD75RtiBB89WJqI4xDZhCEvjk%2FdyC3NSJWr34xPIuFWWaswuObddzL93nHV0%2Fr3ZNo%2BsUdMcZMxm12PgRRqqq2QPt%2FDSyoXN3p2%2FIRY%2BBgp3kzMiNCgwJx7%2FKWEP6a0St6mQKltceCgyIzrvWN6ncq%2BSW4k6hqtX2oVScVBbKtewkk0BVF6%2F0oLB95A61hHtRJfi6Ynyy%2FnZv5Oi8n9wVQoyPAoNdZu2wmIg1AGnKcReA%2BojfEtUHRX%2FOcFVEPpQeCEoR49oZxJeCB%2Fs4oU6m7U7VT1ENDu5%2Bfxlz2D0uq%2Bs%2BEkIwlPyMwAY6pgH9u9ijl2Z0PxQPMvuKfAILJteQj85PdVdcX6E0a%2Fzims2eRLeH0kxnkC4GPKtHwm7vVOFQB6U7H%2Bo%2FIkkHciE3jPVZ8SAkwMekzXNSrpJvMH8syw44tomrtCT%2FAeqxpe2bPs6CfnxlTe%2FkcLvBDDssrJjIsB%2F7culGO%2FIYnprOAM6cha%2F%2Br193fVFMpuEaUhWYXqIuDBHKOEUXyFk1Q%2Fw7of61H9kK&X-Amz-Signature=0e53e62885be654d1fd02adda54962e4bb040ea08d1b1c29c6703f3bb44d19f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623BU5EK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0WrHYY3%2B8oc7cIpD9B2ajibNevWP67hT8auyKlYGxSAiB2u5VGpRMN4uD5EMTKjnzDW%2FHk3qPJ4qwd5vnKp2UkYiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR9V2v0LSCzJoo6lxKtwDQnc%2F0azOgEIATc1HvlHcVu%2BAQbSKsFecSPsGiAQ4Jklfi2ib%2BgjKpGZ7x8rbK0GRdJxN4WRxg66umQTOvA21XvuZK7Fk0U%2FvVlg45x%2BHbPx5%2BXNGHYf%2FRqDM%2Bd8KxJzTuyaWf8jIVO5xaJnxqR1f3r4Gt3rvEcxCDUcPg1AvZofOiTXWIeZSnJadm5g2z82cZlDJTRaLAHrhKp%2FU63U%2BeAv2z2FdeFYHNQm7322219z1YLt0%2B0sc%2FSSjraOYaO6reqF%2FjAdzEzK7C8BpZAnrHJPVjA5bn%2BIUqJbkmAxE60WutQ%2BjrNiZJdB82zPsla9gd%2FRu5WV5k48YD75RtiBB89WJqI4xDZhCEvjk%2FdyC3NSJWr34xPIuFWWaswuObddzL93nHV0%2Fr3ZNo%2BsUdMcZMxm12PgRRqqq2QPt%2FDSyoXN3p2%2FIRY%2BBgp3kzMiNCgwJx7%2FKWEP6a0St6mQKltceCgyIzrvWN6ncq%2BSW4k6hqtX2oVScVBbKtewkk0BVF6%2F0oLB95A61hHtRJfi6Ynyy%2FnZv5Oi8n9wVQoyPAoNdZu2wmIg1AGnKcReA%2BojfEtUHRX%2FOcFVEPpQeCEoR49oZxJeCB%2Fs4oU6m7U7VT1ENDu5%2Bfxlz2D0uq%2Bs%2BEkIwlPyMwAY6pgH9u9ijl2Z0PxQPMvuKfAILJteQj85PdVdcX6E0a%2Fzims2eRLeH0kxnkC4GPKtHwm7vVOFQB6U7H%2Bo%2FIkkHciE3jPVZ8SAkwMekzXNSrpJvMH8syw44tomrtCT%2FAeqxpe2bPs6CfnxlTe%2FkcLvBDDssrJjIsB%2F7culGO%2FIYnprOAM6cha%2F%2Br193fVFMpuEaUhWYXqIuDBHKOEUXyFk1Q%2Fw7of61H9kK&X-Amz-Signature=019f336606ae4051ef30fb8b665b8cd28a533d53bcf529c4fd497b63c6b7990f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
