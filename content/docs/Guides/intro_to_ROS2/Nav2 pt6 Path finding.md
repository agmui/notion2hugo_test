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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=8064fc3c530193e8f1abbb741d489d45081f21121cfcd328b9e365cb051b3159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=91d8666e024a2e0d85f21863df68aa18269af585a2cf006c2e32e7e06ec16575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=9d32a2b803ccd98b06c3fea3008711bc7ca569a33fc9f250b5be52f9a82cc30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=22df60ffc2dadf5655b353c0ba91f5b5cd8c963c636f52617b240e85b9141f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=a117baf4c3848cce9ca019aa5397520b2e44a63f394e46e4b021c7ce855a7d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=a7b19ce0acf5e14bc7fa1ef935438c2bb0df76a421c888836cbe976bf4ebeda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=615475c66a93e846e863488761dc4a1753cbad539cfa841e82e92298116d6bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=a735630fd3103bbcb4c057de9e0ce27423e3ed0b9be86b7b5a72e6f59af930e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=c9ae90e543e1b99f4b4c9bfba95924a159a2613eaad824acaff7762453b09034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=fb6500c94ac6853da3044e0a2f31240db7ce2cb37da7330c443f944c43b76606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=32a59dfef5b0cc46e2fca448ca637d5a15825f66d36eb044622dc6af292d1757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=5991e4771bf307aee063d79b57e0cfb37251028d31ed4e0a9dfa6dc5e97deb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRV53A5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHTkZRCPNwo8kG1LJDdmaLCLvs4S7EUfpQ2O1IgTcnZLAiEAoz%2F6pTs7ndGCRdNZuItdIlxwhb8VRoshc%2FvCj83206sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEpFsQJylzi66NAFLSrcAxY8sTFmgwSSb%2FHuNItneiRo%2FrGaGi9Vv5yNg%2BuxcYFfCKrxQ3Am%2FuJCoR1GItdyVZHyboPgBC3fz5I%2BEfqB%2BxfIJoT7o5%2BQaebFMt7ZaZdTRSxbbXdgMeKHTTv50QlOzf6YtXJTyWk3Vvdbt69fv6JR751CGyjO%2F7i%2B8n3UmiEDNxTdGRA3aPGXuOd3diYbRiyfjh77uLttJp1Ld9E%2BQCfQ2h00JCn0uUZKNXlWB%2FbOUuD6kAn8riLTn60OXR0q0SMd1IP0ryJB%2BrqkFBXu0AqtM8%2FFvskTtpElIV14QFkYA4yXEu4loXAfGlTZOuD2YyhOWkuZzUkyU2NBJP5NIVakFx9OidvD%2F%2F2NIf%2F0ng4crrwidD4YJl%2FB1djXnlck7%2FIhOLPWJVRRPS%2FZeP%2FjSmctcYRQbCrXEyV9Zv7aFVntVxY6kRbRu7xrRk%2BPnzfsLCgxBBlwPDg087evY4S1eOfP2aLiBRbXt2CrhXAGcqdf1giExrXZoLyglXcASgqpNpOTDoTeM2wu4z1c8piEMnMvY%2B4swBO%2BhSQ9iE%2FfY3VfoAWgCfnfEIU8bOsqzclBvOIHlBNHXF4TGTracuT4e2cA07oODr1eLhsdw1%2FeKqopTkfmGK8vwBNzzCUWMO3pwMQGOqUBAtdA5z5ObUPx5zqjAiZcYArHu4bhTB%2BucdLUULCxL%2B4tPmUYFt0OaZ1O%2BEPkQV6Pj1LAa41t2aEUN60Zzfj%2FiN1m14wbL8qDeOtvjbr1MVUBqLHrbfeJ%2B5XBVeelZ%2BI9u2mecDbvVAunX20q4Lzj%2BySyvfV1GSLQBzz1wiBErESrAdTF6Qj8A%2FoOclrxCLRMitlfeJgEJspMpbxrUwcNROiv%2BwX9&X-Amz-Signature=db9ddda9c2e1e46274a6da178560ce4cdadac866bf3ef578fc3ccb11336bc952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
