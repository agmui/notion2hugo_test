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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=ca3b6439a4dad9027754660c17737ca133b05f0ea3e7bb028bac5c9d2bbee178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=8554397a71ef40e84ecd0bbfef8718e740e5b0076f15f54d091505ad3c28e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=85c020279906d1170e47181377447ba17165299193c820c61f5ce674dc1f99db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=20f8d5ff03bad4dece00b2e45905f4dbb142b25a7b3d1cf613be14c4c6edd4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=889c064ee103c1320c692cde5723b742f2ace9a1259f1f015454827b0ed71a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=ef53318192f9d58149271ab2e4343cddd02a908e542c033a723b8c3e90e4b4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=cbfc5b539039916c1bc6032d018c4d8511c41b2e2aee53ba6377a1e53221e038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=cf26f7b00a4d539b520a47662ddf7e675b7bb12dc3cd24a4308e0db399744d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=4bfa9858fff132b767c11821bfb1778fe13cf976b15190638d66b0063fdbe052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=6d09c0be19dab1f9dec574c6600f279be35bcd06f498854cd2e410d3e188e86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=e4e8e6375a591361c4b5b7d496d5bbb70431b9b8ec65bb05cce2a3c480a303f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=a22879efb56fbcc0c084a2086c86aea1ab5e69ecb65e36e9e5542a4646d52d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZR2E5AA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2F%2F6gz5xXAWzcG2PiCaYDgaW2up490jZ%2BSphfDtYkf2AiBGexjqGZ7r513P8a7aMaQkG%2BfxpsKfw0b3JU5qS0dy%2FSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AjFDaNCF0kspfNoKtwD3OSfzJMblYg%2F4LnBVMieYiKwcl%2FzDa9NG3bcoxyyMKTyvcA84guhZ%2BAxhskPW8vwkx7NaHxZhDEgPbDZtCe%2BB8MsdSZC8%2BgZ5aORxnlc1gW6TIady6HgcHmbfyJ2pnJ8T%2FgcA%2Fp43nehmAxYpY6wqkFHuA1g75aQV%2Bqih4IdCGU%2F2kJtdrsBt4mx2zg2i%2F2DJGihfAhL1fTzpzWuLTTHe9SXI0YruJsgV%2B7UrQ9vbf9dXUxi4Ec7%2BaWfGUC91IsR88B4PHc%2Bf3bOfM3qP1aTylNrZ%2Bq1D%2FpFeknGGdWtMA8Q8P6%2BsFgxdLV7vfRio4WjOcdm2XU2QXT53sqKUiRxCB8sHuT1wMP47HH3PMDSvv1EQYkeby9uhriRHR7Kj3Weh5106OT3TGuuEmLpeaIRSA0fJyGrJOTVNlsB7C4Lesbho8pKmP%2FWAx0tDPy0jY4G67chTIRINJLgM9d9UqbTU3LzHxDjZ3jBpbZNFCvxtffY48M5%2FPeSLJ8wKEq%2FFWksz8ZsleqdlPeyLRx93fQayEwLw%2BhThmGk4Jz3U26IHgdi29jU%2FgnQbBFrDTybYFj59K0QsSbaFVdcccRLBDkmViSdvh%2Fs1PEiXUYy%2Fu3vwI0frnJPpn5k6xxXKv0wmYiAzAY6pgFECFaPBLaomXTQe9X1V3KLzqlF%2BFYO7ur%2BHDWKjR%2BSocLoTSH3H12VhPYRS3Xp4zAhUDkovzVxZgjwGsKQw7ggDKVb5CGj0Ac7HBWhp4jdd7DKIGAhlnhrlUPJorj5oawKJo30D5t8%2Fg2LGmRrSxS%2BN3IiLspcd71cukfI%2BCxJr87esGrDSpz722fAPeyoRDmtRqgE%2FfLZyG4BsBzyRzFf1iwu%2FCOh&X-Amz-Signature=f727ee1af7f483a3c5f3fe393809104eefffcaa3e411b52c300a4a468ea9c9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
