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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=6c49189726504d0e2340991fddf9050470a4d44cb9fd094a2af0bf9e694b1ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=ba37f57c33ea060c1577b18166ff89bca3ee79d35d16c5303da36358369a1e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=7782ce417b76ff2c65770ca0f82397f8a3ff3d2e926530f8e37bc49edd4f23c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=58148d9b233bee5187b47f1959f337d89d5d8cbf101de67ceca903cb61e80dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=eaa48c5b0a039b69c5f24a3fd1a6c1c4364208f71f146b30d4c4ac7e31ac48ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=daabbcf90443e20747cb7f33650bc90c3a9d72ebcd8d8537e6a6466ecece39dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=6516563beb2fd282bdf600cf8f9c8b6caf9e798bd60be612a925145e65c97099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=8a328fb8b0a09e52180b596915ba605cb74b0059624f194423030a0b7cea6ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=2d85a77adca040c92fc68af157fa238852c5b8e316592661165fc23061552072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=eb195e10e3b2aa8e4415879833e19c16d22f4847bb3a82b3aaac08ed7a75b704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=32a34db856e27751bc2e787be08ff2543559b17992d86ed7f1cc5a6d1fdc9eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=724a93bb21bd3063931d53712f4ac30df9e7f7d24657e90c94c96b22b10a24c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB4RLOD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCt5BvPqybMvDfQFtvbFwup48rNCbf4b3ANdFCavUGX9AIgR8DrGsx%2BYnffKJQ3SiLgwwrRXgMzWbtQrFinyqWwujUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMFlVSNwff0Nd3RlSCrcA4oYE8v3Xa8Q89LN%2Femd7OOvo7QUvsPtzM5tTxv42TJsZbK4mlTWHWf8YTQAjt7F9fx1nL1BbEepWP5HXv7WY9y8lcz4ZVw0LkxBFQmm09kS3U%2Bg25%2BR8kI11U%2FPkzSwQ4rjK6j1XDtIkv2prTeE8x9nrfnohSLIj683nGwPW2d8I%2BHN4t%2BdSiqqPAwimhVcjZkKRU6KNxLYfaolu1VAneNykWYxekL6HXR3Sr33hBjLj6HWuz3Y1Htbqaxajib2ZsJVlfoeWsjzf7D7It1U1gDlWbRPbPjSvaZ8KSANRMuFHludIiaCzg%2Fqc1Z5IUUr2Vo8gFD%2BgvIWtiEdp0fJhP%2Fp4oU8gaYPDHIO8tljyT1pHQH3LEFzHI0zAZ3J1ypO6La%2FXYcDOQ%2BDwD4%2FULnr7833EYMEwStfzXljC1gxhnx6bpYeQfTtWK3hv8SJP1D%2FzO0tFJc0uzdrlTAv9Z8yLZUgWseQuE0WKqeQk%2FCvb4BvyhjmMrdYgp2c83TYPP9wjis8j7p5JGnA7gOq3Zky5nJpn6ZeY5NEzH9HIXrBdRJn7eZ5JzE7dxc0NmqI94h5o%2B86I0zaOQf7YvGl%2Bzv492Pj1MU3K3nIjZpamVvPPs%2FCae2rpQw16asrI9c%2BMJS1%2FcQGOqUBf0EFu%2FDk6uEwwD%2BS383dWPOioj5GdgiCBfnBxdg%2BBMnyYR7g6SoHDws%2B9xPr6JTgCwe8I0NwrZPCZyhv7ByY4N5%2BaG%2BWzgP%2FVKH8Yi4Qf9Jq0aKWtRRJm2tHkvpKIe%2BMbCy9%2FPnh3Z5BbO%2FFsx9IE%2FtB4pVMfgjVs4aZYKPVEux0WbRWwTpT%2FXXyOSwLve%2FPYoDfZfclnb1Dw4B3Zx6QbjZ5%2FmYb&X-Amz-Signature=a9b9019097ea0569f05d91d2755643e72d5d2cb66c21223fdcda856dab1fad8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
