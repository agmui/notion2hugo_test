---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=f5e76df1f2c46d8e77000511ed7fe0a4aad8abd72a5613bb324ff30cdfae7621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=0cccd1c132656609c78a800689595e903d7dea3c8259ca4825873cc0e9da2ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=cb2a94c6742be45021f6619edccae7172db9e16db0915f5cfc3d23d917823ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=70e332fec907fc33763af0a949440895717d62322593c45d01e7ce1692e288b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=441e046b4ed43e5baa0f8336f4b8bfaf02d39eab3befcdcc41c990eeb91d4f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=e89ebe3ada3b69abed7f62b29e5b0f17d96c8c588520fd49774ec52c891da226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=c66aa29b98d43894682a9e7aedfc4c7536da39a7dbac994aa61ad58bf00ad545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=35d147de7c2bd04904f239bc58c0cccf741dd92116da6af91339462d3f7b7e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=76ad775f38e998eb837c86bddf44285d32af4fe4c1b0f21375f3a4e6de7fbbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=52b2b595b4fedfce61f2dc2d70d3d4e6f52c0c46e39390d26f85961f40c5178d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=b21f3c20d962d51d4b5aaf2bf718c3870a51eafb1dd0f5d6295e91aa14726d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=2a7993f9eabbec7c392a938dcb382bb1c77caca13f208a6e1b51c38e63a8f9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQVR2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChX3ve36MbyCWu5d4Coc9vQxNtovrOsckPlbhczkYQGAIgV5q9XBOW%2BVi7NZomCjtsvso1dQ7geWtZNT89lWZ9O%2B4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1wHDk5kvaCSgQmkyrcA%2B5UoSTXhj36vqKHKF7r9oiNCNWZgQFSXq7JLo%2Bf2ZHcHDKFKWXH4ByPTUoz1rPVqNCVePCKrOJlUGyextTcwdKaD88qqYMDH8HSTimnOqz3Mcrtj3FmhKc3GTsrRfrX49S4ifg9ZwqVZ2c3pSRUQGOsIgX6Qi%2BdsbIVz5FqaPhnLhDPw1UrZkyo0D8SDhjQLA8eSC2L3InhJhJN4vgHql4jdeen8H3mT9QyzFiyAoe9dZZAik5rPOToLpGxEtXBp%2F%2BYO4p%2BQU%2BLDMxgPfBAa%2BAjVfK1qaPlmgzka4wMNMomrEJoHG%2Bu9D%2B%2FLI2YfQK0ZaKFt8jDch%2Bf80qQ%2BRMDznRS72RwJfpCrEx0Lzp55t4Vajqm0gruwBaB%2Bty0fBa6d1hDDqKpGEJl8QqOaw3QFA9LpeBBeLVjva8auZBFjcxMCjomxKoTWBX1xxg31EYM4YInbywzShr2Eli8KYMH1X%2BRcBow7e8bdfdRWB14fsd6hOzh8X2dPLjpfFRkbhXGpbQXZL1SnHGYIxwPY9EIeqGCNsVTCABrpLzFvikXikHNPDwGuq%2FsM%2BVh7cTlPck6Ng5gHmQqDnaAc%2BcvWaFYaHWaXdYIdnyiaeiM%2BclRBtg%2FfoDcnwglXDLum%2BvyMOz04MQGOqUBP5OXnUWvC5%2BL9dwgxn8pAvQremkgDaVSGjwl2z7gtEOYxOGvlw67a2BOgafIqlneMHXnt5U3VfNvWVh%2Bq6tJeHlbh%2F%2FZpObKR5DyVt2AGvOwSW7gTDIQbi6nhRQw1%2FSa%2B4XH%2Fm8MY8KOhpk4EUjaNG7xwGjdL60ATOnkpZZWgqlbxuEWp%2Ba6DuWH%2FTIEdKKSRBZjw9SfOo2MdR%2BPxKcmfGxeIaBW&X-Amz-Signature=acde02d136405d73179aebcdd1c6618ad5e46f92b1fd7cf7eea60cce16209e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
