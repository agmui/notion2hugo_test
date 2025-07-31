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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=d3b695c27c2c0e2dbad2dfeb66e99aca6b6bd7f0f805f8c632043b349742246e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=d3d75816bfeb0e03b14c1c30db87b70b2d1460a66950e94b0208192a5990e458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=bb368ac606407a738f543778626b76369299b29c7747ef0f548fc44cb182dd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=a568c3da3454d903ed4018c5a20aba2abccffc5bf18de442e46659c77f5649f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=48608608794e7b68309b014480a7f779aa4ef4ecd9007a38e434d20d4a2ba3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=ec38545549679b644b2a59a12da203999fa843afa3a1c076cbec6a5df3a47968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=f34307c656e8e7674a338b7c264730e584007161ad684ca80dade5ffcbf3be63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=7233f1befe7af652d81c2520ad909c5bd23803546b3b0147d688e5f1e5edd21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=1a9714c8aea49d31e3a78771d924ce25b72b51f5b3fff80610f65b2ddbb95329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=17e057ce67151c6fab2ed6f17dfc45867f8fc87a1fa0e359cb0eb24adcbef65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=7c2af7c2c9a544811fe52e0fc42ec6ac9a9d56c7d633d619c0777f432f8edbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=ec815b0ff560d656df2831d2196808e1b6108aa50e10b2b498cdef99307ecc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4D7NO5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEv2n95u51RpSLFUdRA7UpZfE%2BXJMbI1dUaoWx9eX9bAiBEOcpN1l7yDN5WOU7b7Q%2FD8u3XaFegDtpARSFbBAm37CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5jrJ5D8POx5fsZhvKtwDZQNRbp8aOoV%2FPodmHSk73pfK8IZhTDqUK%2FtY1SsGf5WCpxaE9sek7NMRFnO1HH6beUvx2CB4bbB25vSzzOpVXvBodLpuG7Rc89h5GCqq339eI3KHQTHFEmTx55Z3SoGpixEFRtUUYWbF1hnnMt8YBB7gE24LM1EwhZltNQN5S20mqppXvLVsUsui%2FrTDqPgWL0QBbwncGvITldodjnIMxBkjnOE1IjlsBAna923LzD7%2BnaggkTjeJ9EwTevKuFuRskHDB%2BQz0z9jcXpHfiA%2F26usnG22%2BNQ66JAWzb4UF0Nd%2BFRUPVKX4fgT%2FDOWQ%2BMzdSCpPMl2rvpyQtQbts0bHGC4zNS8NvqbYL805zN03kqaWuH9R1hhN%2F6pf6%2BS1HCvpeauB0RDBymgE%2Bho96JpmEHau8k47RdJNL006LD1jzBYz6jqkAZdZWDfkgXVLj3ajPNaJciELjtlB6Go1ffHbdGzMWVKmK4cJBtBvBSxHxcqvFTjwPQz9QFQ3383dlTt9ZkfmD9oIhLmI8FSyPP7mR3LFkWVRwpWeXoWapA70OGSwuJA6%2F%2FYl96ZDwl6a%2BkIaAO65mzY%2B34ZUIsDqnsRHvV71z8W0%2Bl1LhmLPqAVzHuN083c2pP96kv7haowqfarxAY6pgFWZPV%2BgtJ89hmtPymaatYN0KG70wgFWgNytB2TdFu%2FdEkosNfOc2Sj1CRHByAFJDXQVik5YR4a8WC0WKElDW8erztnvKkvoFMk5btBgd95yBf%2FCASArKadUhZtoXQI9oDuiBburQtyh%2BTB1vA84YXaAWrNyfb%2Fli5oRf3hmJ%2Bi9oc9mIb767LMRnAhHqNtsTf%2BWGJ%2BQg8cNt%2FSY%2F1zdgw3UGg9xgvh&X-Amz-Signature=4ab53758cde763cb9fb7992a6bd30fcff044c097d0fec6282e0d7c409df7bdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
