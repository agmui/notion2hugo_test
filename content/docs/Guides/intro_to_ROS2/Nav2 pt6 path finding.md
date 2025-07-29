---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=96716ad89b4d28995121d165ca96a7d57ad5bb2330bbc3424dd692bd604cd45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=14f8dd99db73cccbf6345e0e52131ac0d44d3562a6daf2f79a5104731f4c79e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=653788a74f1d7d766b6ffbbfb27099c90e320d19847d2e3b2f2c1a429594a861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=b697b5abdb44add46a78cd628aa919ab3e426a27468779645509062b52c58473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=1970e9f34707767d8c648fb44b7e0ebc30094047ccc5f0fa1b86102862d7b738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FURZMQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHneBj2isgnJ4wP6kcCC3ue2hbp%2B9TEljJg92Kzjl0nEAiEAsWLJbk%2FBGFkgwkEm%2Bd5QsiLPvS914AsRiLTKAn9iGo4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUaTzteJnI%2FzUL3WircA5tcW41waga%2BKsEkmYhzt1339ebGffRaI4AxVUbaFxESIyyQ825BGkArmVHjqj16mQy0%2B2jMdB5pTluqJ47IYCLFLYx%2BfL6Ea3yymSxcfEKbCz%2BPMUSX1Lp75fUzOoOJ2bsWZSLApOLG9msP7G1NNt%2BQYOAhwqxqnO%2BqzEIlVmRWfZAYr2GATRaGTKCaFn2WuR6abVU%2FLh0ePoE9UPoTE4yLl3lMg7HtZH%2FnZsgG32SarPkVlquTaNJBOoTX3o%2FDun6w6fDpIAN24ehnbQNQ0jGAyYjwZqC1u1cKtY8FCpLWBUhGGe0rStSAmH%2FvV%2F0yIWHFzh8ici80e0Tl7knnctHl2Jqx7gFZn2GBRcUCe28BTVwPtNjWFHEDclB%2FUxPb9dJNDaV7Umq6vsOgjg%2BJesJHFedRNZ7u655kSC0IU%2BRchzGGXmuujxiNEub850sNmiLbmDtbSvgkYVxykjmuTwUFh9ZuVHA3gomnk17D2LQX4yAi6ya3OVxyEMGwZonPwY4iRrtoKl9ydJD422jQMhHd3BVSQ%2BrvSIWJvSjviZ60xKl0bq7lZFIBA9kgTGhHTjqJIWw4Zo6ss6362Gm64hRX%2FbNAdqsrUKtPq5nKInF%2FhbUmoHTzBglbunrVMPrMoMQGOqUB%2BqPF%2BnS67P%2F5HFEI7HHTO8IUR5MbOl7FofFqNfxfVRCNBg0XH%2F35U5ghMmNAQID8koFHnXY3aYI8d1F7YRTSWQZ1auAeOLWFenjriPd0nbCr3m1IwyDTlJF%2F679o3Tjs7cpaDNZrabS0Olx0X9oiBrBdUPLuqFNWJZgXJhcSM%2BFLhB%2FApY3l3GiWQizzkBMTbvrAMF5JIhl3zVpitG1%2FFANUxonT&X-Amz-Signature=f6676b235b829ed5989015d88eb5999a3cd4ae54f587e82140ffd57bf896f047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
