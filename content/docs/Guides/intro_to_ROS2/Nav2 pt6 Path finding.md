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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=72bc0123d643c22a1ea6999dedfe6f7b69f31390901e12e43fad5354566334fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=fc43b9b4b498435a12f8a89a24e4765e42aaf68c2c1968901753cb0291833b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=bd09a7dc1e1d23c4f8829a3494c48e88ec806eab153fe66cdcb81a410263bdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=57d3ef59c3bf496f0de0c556ef56bbdb901796bad152e8c8cb2481e95629f36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=a09704dbcab9bc002c897d98ad5e9e39448af68a54d0dfadd1c9f87cb807213c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=c4e1361f2d6313b3f5495e3e22e6d98e3970c63809e3682d304d34f07415800c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=6c1a1da7218f62fecf3c9d89c3c1e5d053a79ad061321920a0ebb2cb19c788f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=abcbccd58ab1d512bd5682196b5fbb5adaf000a7afccaed35b13d6b373dedd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=733a98c8124b8ab4f84e60dafc48777c74accc8b47605ee319f0ff90f4fda13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=8eefa6e9b65fae9776e9193dd38b738f53574e3a3977f09690e5389bd696be26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=2a34c61951adab73cfcde17d980a3dd0b797cf2d5b7bc29d3d286b09abab41b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=fa863b30b35e296f9813f929c4d93ab3ee803fa63af58d19982409471090674c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77EBLJE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs6HVEEEtpAO%2BVmwoUt3goBFaPdeVydUWruaM6crM0ZgIgQe7awey2zvJnyu%2FVwk8xTZPfshGMitxxnCXiq7blsTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFa1KYocseKkgFoeCrcA2reXrS%2FljkysL329s8Gb6iiKwIjORl3rRY3JwpJZMc724ONM%2F0dC1bNLkknmMC4hE0hffVxdobUcETeOpDegOHHPct2DU95XLDM4fkn9Nzw6hwDEH%2Fcan3LdyDNCOcHy5RggAY7XfX%2FVRg6iPaitGhwTyVt%2FDOOa4bNOTS%2BxLQ3EEO4Yvxpnguks1ZWiLcT9I8W5vVHP6uhBLC%2FzLkTa4sxvzQKsr94hSsPLaAlc92rx98A%2BSUwP1jvdDeZLaHlcCYW1C2oyFVfBO2%2BMz6yvRR6sTv1aY2GgS4mUEdSJOAUSBrHZFSnGJDJQbkl0CPoZX9jnuKTdPcJq4Hu0WD5ceE7mVz3IbRHOMmgJbD11dhg%2B5TA01g5QxNFIq6jJ7Vl6nXUDwCnO4NVQH7%2Bb3gee3YAwRIHMwgFd1906nGvnQTRmKFfDnDVxDzU8OdByIkQhal4ionPJfwlwSMR9OwIyINS8YZkrCCfVhfQEwEDaE39s0wu1uTi%2FMPRYR%2BoH3XHTnDArvG1jaeK1WSXBvC8xx0hbc8AMC%2BMZczfEa5iM6PgdwyRb1moPYDmfXrcjt4GCcvkPBp%2F1vt1lXeg0r%2FBMhL628azdy08nGeEl%2FCWDXChm0MBKDjL9h0YBJ0MMNn45sQGOqUB9WibbRe7mk49gUpJ6%2BxvK9yS3dW2ZmnynxftsAgDGRx%2B7XHlpgzslDqGTKM0tSn%2BoSwY661Bhom1PMcZlCcyfgFtY5X2QrjA2pZn7rU2OgSi9Q6bP1AT7ylmp2OaH5H7wOLY2g44QKOj%2BIG7FuVmzs02aO8%2Fsq8ZaCChYQI%2B%2FiV04K9uaXx7OlQvHE6sNZSL8nsneveygzFQPjeABWJu1%2BZv7NOe&X-Amz-Signature=f9a003c9fc322c087459a30ec7313a4076118d34145ff71665b484be7bc8ea02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
