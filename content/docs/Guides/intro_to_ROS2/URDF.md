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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUY6IYON%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC60fl6KcOT9ayy7aQ8cT%2B9LWPmcRvdKqjm8e2VhgD3LgIgH8N28DjwKq3J%2BeatGLzZxo5Rqao7jO0y5Sp9osyu4xYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7dVy%2BZRMnvWKrYhSrcAyf%2FxGO2V1l9VzsjVdMjP4NIJgYR42KBpA5BH0JfLIQ3VmFCHTA71K9KZnLJj%2F%2FS6ENZ1H2PtYqQTV14FGagOoMFnp22d%2Bo5x%2F2psucSgVpZDpnh3SeT7BtfUMc3rbljRGwQwqfYv4cmfdwyzWu6UBvGg%2Bps6G2pgHQViQlrrcnDhNENUkSo8vRKotqEsxsx2M2Rzd6ZibZLv5bFwoaNmq2rHtqhh7muDEL2JSmFpvCh7OaMDTDooMPZU121MaziGpi0lBiK1Ih8NmMjCxwCSkLeEFbUKxFOrhgt2%2BgGvhMcPix3K3IJRNqoXxel%2Bn%2B9eCKg3A%2BzurDDAYAQ3L3vrwkmWKGtQ%2Fbv6U8IvrBMGEPtmJIf81lMngwcCNk2S%2FjBijJCmt%2BTtN%2FMwZrhB8ZF59EIZcIw8s6nvs%2BBhzAt1SgjgnhTdE2FhcUe2%2FZdabmzTrXUQU5%2BI6yfc4P64ZJg2GhL1jZ2TdKDLnGCkOd4IooYPr5GiPAF3KcPPBEabvdpVI8Qoix6utLNAwLk4MmR6GpBNkUQ4dRCbJo35OsvT6RM5ugjhpP2wqd%2Bn9FW7Pv1pejxXwuGk7CkPsZRlA5gfiVyguPAa4%2B1fNYvJbli0wjWDZm9Bndv6npxbuyrMOzpor8GOqUBnNr3xQgMiskV9DwZhOcN8rEZvMNiEna%2BYpQdi3QwspDmWfGiZihig%2BKs3yDs%2Fq72ESh9V6Cs7C6SE9jkFFxtwAl9o5qcpdW%2FOdYZoGmCn7wx7C8Oz48dfh5gD%2B03axKtSSRo5v0zowOnRwbqe8s6mvXKtAkr0lW%2B1xr7qTz4LPjI2b%2BxDvkSdyhRoFHP0oHH9joUEsqtpzWo6X1bOF4iyWHwSMIz&X-Amz-Signature=ec371a92821057d2d61dfb55973235ad562eaf9e0c8ecdd273c3d760315fbc5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUY6IYON%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC60fl6KcOT9ayy7aQ8cT%2B9LWPmcRvdKqjm8e2VhgD3LgIgH8N28DjwKq3J%2BeatGLzZxo5Rqao7jO0y5Sp9osyu4xYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7dVy%2BZRMnvWKrYhSrcAyf%2FxGO2V1l9VzsjVdMjP4NIJgYR42KBpA5BH0JfLIQ3VmFCHTA71K9KZnLJj%2F%2FS6ENZ1H2PtYqQTV14FGagOoMFnp22d%2Bo5x%2F2psucSgVpZDpnh3SeT7BtfUMc3rbljRGwQwqfYv4cmfdwyzWu6UBvGg%2Bps6G2pgHQViQlrrcnDhNENUkSo8vRKotqEsxsx2M2Rzd6ZibZLv5bFwoaNmq2rHtqhh7muDEL2JSmFpvCh7OaMDTDooMPZU121MaziGpi0lBiK1Ih8NmMjCxwCSkLeEFbUKxFOrhgt2%2BgGvhMcPix3K3IJRNqoXxel%2Bn%2B9eCKg3A%2BzurDDAYAQ3L3vrwkmWKGtQ%2Fbv6U8IvrBMGEPtmJIf81lMngwcCNk2S%2FjBijJCmt%2BTtN%2FMwZrhB8ZF59EIZcIw8s6nvs%2BBhzAt1SgjgnhTdE2FhcUe2%2FZdabmzTrXUQU5%2BI6yfc4P64ZJg2GhL1jZ2TdKDLnGCkOd4IooYPr5GiPAF3KcPPBEabvdpVI8Qoix6utLNAwLk4MmR6GpBNkUQ4dRCbJo35OsvT6RM5ugjhpP2wqd%2Bn9FW7Pv1pejxXwuGk7CkPsZRlA5gfiVyguPAa4%2B1fNYvJbli0wjWDZm9Bndv6npxbuyrMOzpor8GOqUBnNr3xQgMiskV9DwZhOcN8rEZvMNiEna%2BYpQdi3QwspDmWfGiZihig%2BKs3yDs%2Fq72ESh9V6Cs7C6SE9jkFFxtwAl9o5qcpdW%2FOdYZoGmCn7wx7C8Oz48dfh5gD%2B03axKtSSRo5v0zowOnRwbqe8s6mvXKtAkr0lW%2B1xr7qTz4LPjI2b%2BxDvkSdyhRoFHP0oHH9joUEsqtpzWo6X1bOF4iyWHwSMIz&X-Amz-Signature=9a93e82ac31d6b933ee9414d5714510c648961ab37cf837760303903b115f06e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
