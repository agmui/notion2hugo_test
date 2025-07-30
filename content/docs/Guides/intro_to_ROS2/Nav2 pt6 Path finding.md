---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=4027ad7533b657a2b3b46ced548a7fb5d1b196783ae88471d1f570d2cb099ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=43677a19c1286a887dbc418de3dc849882b8d4fb85eeb57b8ea6f6ca952be95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=02af722f4f62feda74963569e27b564645e606ea00d9db91ac6e7275b9f29324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=c6df05ab3e2eaa63a77b10b209a93e8d6be9842103d17fd96ab3f42470469c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=63eb250ce0315aa412e6320fe36af9ba76d5c4f982113a6c85c7c8c1311c3bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=5ad4d9c33717ad9c13ec6654939b31669ba146ad6bf80177861b16af45f34dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=7c3c8cce74513fc4a696ad556f414263e9e81eacc140582725d8d300541b4ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=a60b23f4405cbe92561a36e9706e6a2670d1c49c434ac74b305c99aac6803fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=0b5b0a971032832730a2e5556b5645087d54960a2bcbeef1619cc20c82fbc46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=014f036e848e9c4c8831a2b8717ff893113a4b211324229ece4964864f4b5bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=fd5640ba7959e69ac4a1c7992e1cff0bd26dcde7a627ae976b7ce88ed337a193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=1e51a6acb5f697cf277b84b788a21d454a707e2760ad9c56e00b92716dcd3cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRXNOZP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnBRYNohfO9O8nqRX7%2B6kHqCnBSB2oG9%2BhsfXaZ7EIAiBttIiyseP9sbSeVy0WCESFRVYoIER5huQF1S0PpHo5HyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lIwCElXCXs0NwKAKtwDbQY6bo9Icjn6oLA2EQWoi973S2txmAn33tpYpa4Ntt9eHrFHJsMM9mZJkSpVTqnfcpUUP30eZ0ozGT9NFdRyhZgey6YfDjPPE0Vhq3Mj8OlbibmKfsfS6AyCVzy9q4dz%2FdttOUampqs%2Bgqm86C5X85fgF2GrAfapv3P4L%2BuxaiCofXe2vsSV%2FFTQ55XGh%2BJ6jN7ELcLoWhldmin3j9FCZIbefRCPk%2F0%2BF57yBnQpUlgXRncAwGM2yongaroq%2BvRgXWgGIqIq95VeNOnibntZa%2FBOzWj8nEWf2%2BVug5ai9XxkfwqoV4IMPhAwsiV37F39c8rY5%2FW0M3%2Fbvu1gTp%2FHWX4fhwFz2mWmawZIueFR3E8ioIQIgSOV9YJYtKtlnRR9Uto8WbdgnsJ%2FRYdFzPb44VapVkLzZgPT%2BmxayhUbvOHtyjFDIjNrupAy5BlTutyUAmm6iCvao%2B35zBkZLXNhCanpyqMs%2BiVvJgF%2BDmBktfeOO3eJwuAQRleyLUaN2dRzOMCvBCnAfzBFxPmxqoUmyn3PAu8qnXUYhlvcG9EE3Et7wxb9Ik1XS%2FAm50oUT0Vvzea1GqOQ5fOxDob9jMx5pAqUI6W6IWfprdZLDuICK1OVDdub3OoTpHT52TQwldqmxAY6pgE3T8s2rPsCX0xd6m4tI%2B6lNAEtFvfJIbje%2FiQ6ilQzKJh8HY1Wdn%2BGwZTCjkIOqqpzRHypiflrhDfwjLirLes%2F9TucFvSF85TqBcLTJ0k9Eq6vQxn0f%2FIBUcAmJbJiXqIzstqhfqEhkULdsNpvhJWE23GyO9JvoJhT1XWxSv7JaAr%2Fu5IFw5LCHAOyX2ELQF5lNA%2BYJHpHUgzOc1zpTv7QrzWybGPH&X-Amz-Signature=7ddae8370cb44cbe15c7e5af61b507b4b7b75c5a3df3942c86313ce209cd9ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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

# Nav2 settings

TODO: change footprint?
