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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=234589796da8e717d4abfcb3867c6ee111efc677e38072bb67fba2b50188eae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=0e6e6ddf5ec457904966301d606ab0a9e1ba4f20c78515f99cc36aae5ee9ea56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=2c3e526148ec2cab758c945c0c58bef5c8806c49295e77fd4ea97ccbb7f7c06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=47f95127bf0fedec64e81ebb8153cf82a6335c59ce32b799f5671aae11e4e1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=b381fb6aab3be4f1700bb99ede2e4b7aa2e41a0ce54a559904a1381052d935d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=8035c55ed84203647d76f51cbeadfe9ad4381c6940b8562de0a75986d99bc71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=65d71e38813a4c04557fd87ee2a3a65057916fa90b7a5e326ce70f3f9360f203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=1f1e8b6b29c74cceac081ab64bbb34ecf9212fdc3b5d59f0a4f0b97d11bd10d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=9f1158f79903233fc2947aeddfdd434caddeb8e5e739cd822401cfebecc46594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=4f67f2765a2f44f976bc04fdd2eaa66320867ac34cc31591d69d66f5feca6754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=f6edabc6f1b419f20753038a09d5ce6ea721b1f98e3f19ed367c4cc94afc2509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=b49531405e00d21950fd90263210dea49543a51e1d57a7c54a7189e20cf8c5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJNPNVN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zcDrIYGnxqUn3tjuP3RGo7AQuD0wunVfccFP4LqV0AiAhTapF70Qsp3sHlzPSJd%2F%2FK5x76NqEDn08o%2FB%2Bch1jCyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BqHP5uZPRTRT0FIKtwDElmegOx5pHgpM6Zs4f%2B9DenOR3QJWwJjaYpeQU1Y7uiDl3v5140H%2BdYg4NjYbLQrYfuSuD6NWULKRbfYOYyTBiYJOT8gLb9%2Bk8V%2Bz4g%2FDPE6HCIzFPBxzx6rGa%2B3tQZz%2FZEEr4voYY2P8uNXG7niRT98NNVBKoSIo5XUfWJlbPDATZKSh3WaulmiA%2FO4AEt6p2qL7JhoXhkVL9HtCVi7HlOhm2cNPGJqFFi5lCmR3p9EvlCxNxcdSfLL85S5xl5Z2zLG%2BpgqoYDvrZ8LuxpYhrsY8N2NugruR8ftVK4r6hVmnG7QoYeckCwRa30R%2BhQOYYYpTr6SY9LVofP8VI1Ji%2FRm8FAqNOMcA4bhdLWdmD8QPkZJIvrKQ4hYxeqqURqCkzYDZPt69zK1cN5X5nF4jp2CtAxINFOYwiOe6YcICLILM%2FgLJo34n3tI8h1Uu9mgR7xT%2FtPan9a%2Bk5EG%2FrSTvtNqAUV%2FnWTeeY54GFkANIau2xBxgKkE1LbVFPZqOTPMwkBppDPQwlXlsAfVdIdaMER1UEb0XWUkCc%2BDYdTPPi3KDu%2FKKI5br5beOxDvRUR7LJ88D2sLeMX%2FLDBPUsRvI4Zfd%2FaX%2BK6JdVcwydYFUiR0XDZisUAw3h0%2BB10wifCnxAY6pgEwsSLxLOpAnRd4ZFUkiGsxkUGiwOV2Mbz1Q4k6BhXf67MwO3ZLT1i8uzWY5i7eLA5DMyA4vx%2FAg99AS1Poe71AXenVM6g9RtggPEWBOxFjdm1GbpvDqqJFH5aR%2BS25BeqzmPV1UDKZ9c2ZQN8ZUR3jWCfJ3%2Bdl%2FhZpIYePFm4olP%2BD7EaRDlexHX6k0SUEJobSbPaEC1FEOfZTpp0HRqBfnj%2BbxlD%2B&X-Amz-Signature=da2c27822154a283613c2066621b0066ec6c3f4a11c035dfc3f0a2906bdcac6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
