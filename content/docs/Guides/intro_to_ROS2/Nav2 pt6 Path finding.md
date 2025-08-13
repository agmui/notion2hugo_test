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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=12fff8005050233d983d69deab8af06464882eb5e4b3258532ad685dacddf585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=21d5ff86036073d5cbc1e8251802e1c478b9b8b6dad92c1a969093fb7bea6d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=5c402d0eff98d5c212fb5e1082d6f16c8a98a180b4625e36fa2aad368b0e62d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=bb2cdee20864a9a57ae796cc0e8e3d2ea694ffc82891d31009400d346eed40f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=5a78627d4216b9e443c106771a7bcfce2a70511b9aeb534e91a719b178e6990b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=39f7d94d5adb4eff6a26b433738b2ad7166044f07b04c6c1bda0b7ca27c31b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=890a78ad043fd06695bb04841cf6bd8ddc746f469fc546554b4757f50e1d2eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=5b34a6ff1f5c9f1e58dfea09ba13cf22953e407742bfa9c8025fc83ba6655db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=8124af9681821a9626b73b0658421e5c114fb6c8eda7dbc10bff5dab347c5a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=9cbf7a59b5300edc358416dcdbccd5be7e297c9e066562f9d36ff318cc81805c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=0f29b5dbac9671ea3b6251331c986465fb31cf8344c07805531052936b87b1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=cf5ff3eb679cdaafba099f39210e7edde9bcc18ef455f53ce95cb2b388df958d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOOM3QB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClGKw42WaJnqs4%2BratUDUkuIj4KPxTy8nMRA3LOcwx%2BAiEAwGttLmIEa%2BM38hiv3FIXw%2BrXZpqCL0uoW%2B0aI%2F%2BDI%2Fcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL4tCYZEEqR6Zy4cYyrcA4rpF7gNOMg2%2B9RAuc1gT0nmdsSDqoqo%2BSaYlPb%2FwpTNLdZ2p3ciFAFDg51GRthC8ePbFewadOFsy6SIgeOTCBY3SuDbmOeGxmuc4czVYVHFTBzfI95E63rsC6BxVs4unQaQ%2F3RgTin74lnIr4Eg5G1HTb%2FmI3XdSkQyEgHt8YDbgaGoj06R7vkdtCyfPmfxg3DSyhxhoi0PjJJB%2BGyk402%2FqOhXl0vXrOnIi6%2BSGjZmk%2BxKrdo64hgCOZFAPg3imj9mhGaP8qyKifhQrgI5vloBc%2FVC1tSrR4y%2FHZ1OuOv1D%2BenUtVt0ILeBGWPRnqiyBSevBBC7xU%2Fq1aByuh44SpxnalvfjOr195KUTyL9Qio1GMHObHaqBwbdrUU%2Bd75LKu4cJFTKOQsEMRbTgo77Zy7fIcqkjamY9VfNGpeN5u8ne%2F0NAAp1LQHtJpfa28NvcGPdOXfz0jrNrtHlfIp%2BS8YNE7mmxFBOihnNUHlOlBgCwChvs6Grlc3DvoFeCzDh0BMC6n44qiK5qpCHpyCZoz%2FULyMvEW3WPMgnW4fx5HAiECyaN1sWU%2FgHyk7w7i78xM8xavDuGufF4hhy%2Fz5NDKfxP0aM5LaranOFbf%2Bzekt8NWcNcztpIPMgPomMNjG8cQGOqUB%2FD4o89klQz1ESchxuJvUCnwPISuH4WghOy5Kh9dE9u%2BqgNX0DmwLm66Fb3Bl0ruPG4WPfCQ1K7LsJZQRPBSAM2tP4z5nVCLSQABwuDhitHbGg%2FYT1F8447kLRXa5KgZ8r%2BRzc8mdKoWzznM0vy8dvA4TUMwLk9PJvFpFPvLsIraqTpuZSo8lDWaxxeAx0oK%2Brlmz8nwvT5ZIqbuAbrFfzgqxrOLx&X-Amz-Signature=ab9bf32969b679d09d5aa2d39d7904a3e965e91f81721598fb7195c56cc02b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
