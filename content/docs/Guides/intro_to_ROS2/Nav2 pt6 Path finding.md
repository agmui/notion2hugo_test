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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=e36034710b7b0e889d93c63d457b7c7b915f857c4a4c755d78caafab05c483da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=5ce57dbcc27c3382ca7001e2b51bfddb0c1f2f44720e82cd8262bd66146358d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=647660676ef9b7324b874b42be17e80493e2d633a09cb132bf765c1eeacbb83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=452cb2ee32a9cd9d07beb2f442a20a124431da0722f62c4ef8e6c90788e09c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=eacfd29830194cad235ad0bbe79e5c16ac0d6e4db5278ad226e83a90665b53bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=c3feca091a5c41a80c42169cb2870eef9d568ad174cceedc52a4d2005113d0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=8fa4faa3718bf5ff65b8b6423401223eb1e4522ecdb3f6fad84ba214edaae6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=792d767728dda3a109d878f898f31c443f7f082f972b49007601cddf5fd0bceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=61aee565e8e152ae104b0d501639c80f78e61adde9d6fbadec866be059e48079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=238b2a9512d8476028e5c503f67abb635626add74ba81aee6ef8d7778a015fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=5c93eb02a2a0334bff32dc3ddd3b0b2f60d50ef107a4ad647d6702f8358ef6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=74a1180d2f30b045712cd2c5338b6b463e73c95fc3102eee1cd6a37992fe9f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFK57B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj68uZcFtLCiwejz3fRYOLJ%2FkcQp8TlDsNAT16dh6e1AIgZiod8A5jg6%2BgUQUP51mh5H10H7RJ1xTO5xpcPXBevVUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDzC%2B%2FKJ2XcPDs0ityrcAyF1IH1cpl93vSt%2F98Q2vR4sq7RVjGd7RiF13ibiasi4vroeZz%2Fht7P%2BtLC9RoT7ZZwexku%2BndC6UrlEq8YwagfqUdEEtlBSdzP8GYtCbFfHxOnhhKqmbPNR%2BgRd3Oa9dmBkJZf%2FoGhOVfH%2FfxMkxx6hQ7FL7NK20Cv1ZdGp3XgYGpAUq%2FX%2B9k3Q8lLCHpcZZJCJrhrbTagvVWB5afxeIrVXFVWc00YNuGF7fu2%2BBPgOm5HDTJby%2FUK4X%2Fd%2BwPZfVFdpzV1BuuiWzU87MG2pYHIJ8RTZqJbp2S30Oha08y5uCtdaDzGXBDUDr5te4pRAGzeHlbf2jCtGcVbH1z582AvStamQI6cYgDoZOzKl61gq3b2HoXNzYc1GfpWUIz2R0bj1Qcax7t07ZiMbk2FPIqVpZQ7%2BzMgmtPRVjA7Ho7jL5%2BCOQ7%2BvjVQmMk1zjrNabE2LB0o%2Bwk7jjw%2FUZoZQJnmhk4InlKHZW3OpV4njhfgILKMPH669M%2B2hD%2BKOnrFBUVcVhDtJCwyuBugeCV8F4tb3qarRCxALqhVhYZ0F6BEUH1FV5oR%2FkVJDvT8A8MSapEpbzuaJTKr60k5wxphznNlnUwd79z8jKAloEa1HJpyijLyM0UdANQRYvTzVMI6H8MQGOqUBLxaksqOb%2BtjZ1wqTDGUv1LR6SBsxVL98WPS3MhoFZKKGGtLGK0B80IcvllVNbcMTdEUWvt2dcCQl1GRCNmuvhIFCLXzZhoVsprq%2BErlS8TK4RU5IPG8qysUrCkfnfO%2FIhght3teX9VZTRq9abwUkzfOh%2B2Vt755IB%2Bzfm9wvZm2evmYZUgL8647%2FOIzKrT30X4m9o4ej4h9iIbNhR2ifIh1KUW%2Fb&X-Amz-Signature=61f89fed6415848e386b67dd0282bc703bd8499b37db4f732d71b2a1d4f1466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
