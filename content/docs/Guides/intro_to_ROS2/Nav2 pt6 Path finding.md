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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=e1c5e6416e3602ebe4bb3cc2cd6b05da8f79823adc496ec20029baeb8b47f3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=d09ebf5d4739afb167c10f71aeb72cc8259cf99bcfc8dc93e272b2626c9449bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=9a51c043ee3cb88f0c661224f2d89ad4a535e78cbe83eb0534245b3e5355acc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=72273557ed1330b231b3f161c936ef9bdf209bd8e7cf81107f1d0af1227e7264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=cdae3b411c94d311dcdfb863ca43468a6f78a1092cb7534da0f8660e9b8137a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=c6e2938f88f16c327a566f47902df134bf7a0bb0161d1b669b6a99316d0ceb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=044bf4131f9a5922f959ae9216ac8e86d30a07ee47245daabe471f1cf94bb404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=01c0b3259c2f5e0bf8528f327b0e23f25f9e729e881de10f31bd18a6c9966595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=966a49bd85f407d69d7571bc7f6ebf88db937a915ceec5030c57e0131cb853d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=f5ab13eac63c456d8a11bf07f5e1059c2bfc61b46f3c3e00d1165a8834db76d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=fb3b368713270325b871e9bc1f1294453f0bfd1dcc349ec92ff080cd5b744d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=46ed08c899c861394b23b661678737a92d5e5e37381d39d47c8a211659183dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELKTEGP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLPKPHf3mA5tMnAcN3KLHX%2FJ4t6HsDVsK13hD4EQz1hQIgNj3HyJW69mtamjZrQX7zZ5ArlS0fQ0RqtrKlqlc61VEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK8UpDL9r2XrHim4JCrcA%2BU6Q3jUjxno4beZTvgen%2BrJpBHvmscRAnA2eidxZOwCZwGz6xjf%2F9BU3kQ5EUzDnPfpHMwxCXOCIlomykg83PdGmCDp8n1xH5ZtIj%2FDPxGAIVBJrv0o3Lhn4i%2Fak1o%2FpRkuZo9ISW4m%2FN6DphSPsfCavxw9bdzYcgulmRDGePlmJQrL96aPnyIt6PS0n9SadF2sgT3F0AXfLy8btTiz3oCUWi97Doyeuqn4I3Elo5K5p7ZPMU1neR%2BeNHbKVP2PEzPyVSpOuyW%2Bf3LjypVn7lkB9ZzsfEGZTqYu29fTTwIFkqKs%2BewRiSFjox4Xs6pACvSxooCLdNNKOBKLHqQSR5I23Lyvl3L8J1EfuBTSpvbDTR8tp79C99wUus9xFzbmE2iiPyDj4IJiPZDZHLsJnhIgRBJDRWOBAQgPKDkDk8CgcnQZkVlkGUwcJY36fSVS1oZHxGwzkhUwBGgY5AIupYvcivKE8ceuq%2F5WS9skXz1FUriUKQwi15RhU6LetJq1jZ%2F6Vfsd2rq2zg5nV1iM6i8SnzmJhaRhX3HF5NV9AorwBkdOsmlDT%2FoeFDvmwUmB7RHDYlDA5YMutuLePBDxLmu00eXrKgunheRFeZyZEHiiVnL9OuwXD0jaWl1iMMf598QGOqUBd8ee%2Bpchg56iu3eFerMuFNxYIaS483QihYHRxVi3QBk5iZwcUJ46Wxt4zwtc85PsUw%2Bx0Ort%2BmcB3hc9383iSCyVlRILl2qSWq8ucMWzBSu9162jkD3cF%2BalrJUOfBwBR%2Bl8C5l2d%2BPBVFspMth9Q7uyOIp9u6JsD1qRvoZywBF24fCU4DFWcR%2FRVW4gOZ5fjS%2F%2FEVbNxB%2BOviSjEMXdOpB%2B2ZtO&X-Amz-Signature=0dda0236784eb218fcae1533d82c6207b757cd05bbf3c4fdb9273fea47e99776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
