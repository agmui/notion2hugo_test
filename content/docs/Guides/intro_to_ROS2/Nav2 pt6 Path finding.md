---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=04d8f2e6a42a1672e0da047ed6fa38b2ae5106379cd2eb954edbb37fc9a6d245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=8e1f04530fa982a0219a4f243fb013e78d898d243ecbc78d55a47b53c1f0e42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=eb1e39dcc30d643a6e96df5bb68b41d882f70d97904142b6e063626f301bfc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=1fa6af93636e7c74021e6c36cd693c9740a8c96aba01eae54b35b576b3aac058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=29f2eb3cd1112447ba4808bf1d5ed58e6dc1459eee9a9efad16a75c58c7834c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=08634a5319a310ce974d3f29050ec372cca4011356f00f794c5c7f68206aa332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=c7dc0279b62c1c015defe704e496e4df472e6f280d53efbca86dea9505ad819b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=55ebc56f5f338aa9668ba48e1b9500758d4605cdf35dc6ea95f6a3a514aa99dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=ce46b87f612869717e6216ec129998c1f139ee0813009a2da8e206e6c0285819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=5c2679eed8ca2474f786a4d43adf32688a252284067b446f03d696e28aa768c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=4a0070d8a28a2bd6df1e5a54cdf7cdf077c589c334d6e25ffdd36bce2100dc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=ba342a73f186491452e06a04a7ddd9774cb05516389897c0355a592eccb439da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=844903ae059d86cd7466a385118a3929fbabb9cb66003cf2cd85e8dc77ff7d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
