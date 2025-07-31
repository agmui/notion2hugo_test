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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=8108dcf2f48dcc8853862f0199c2945f249fcb7d8ee15d0f410c52c3e3d57e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=c82d6fac0a00c79e57ebabfafb2a5496d962efa7a1e33174c5e889c0b2923d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=7c68c74fae2388b6475999d896e07b773b8c71a3b59380ba2cd95fab600b801e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=8914e47429c64a24036c0e1c48f06be08e29c549412aacacf555eab829205611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=3e49f862719fab62cf8a72de38cb6ba8adb3c1862d9d6301857297d40b437e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=1ba98b14f87e62dcbf8fcc5ff16cfe3eca462429dcf95714cdeeddb2960dbf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=4204ae4947b2ff0edde40e5d991d8ff1f306b3e111c866b3f3c77a56f2ae84a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=4f163c368eab745b30b5b75e370f609f1b16d7b8b438fd4a97e0f05e7fe5dc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=e7d27c2bef55fd949a8e81338d59ee51237185cb1a051d334607b971b9b5822b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=933f5448d8bde1e187153994dc234c0589ff0c52f5af0ee94f2be35037aac926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=c198a47304365a28f2d8e94a7f16ab3531428eead4255b4e2ebdcdd8db8be76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=46f7f01a347378123578e3cccea339a2bae71d1d9fcd5de2c2a6d8fa8a90eec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWXW2D6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDat5cjIlzASGe4aUM%2FWLCfeS33Lr8c2g57q1G5rCG0VgIhANRVGJ5x0X8wPZb5QeANJe7UPJX12bpt8RlxlnIW6a%2B8KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyrIZQFMNBkWyDiIq3AOPuqlO%2FvEVAv3ymWBqgpYlcSTWnADc%2FQBiGY0dyVS4oJalY8Nb4Ih%2FGFP9Z3ryYpdqXMUcj640HVHZq4AoioGI7RSXCaQBlAnamm4dxLG7CL7Z3xq5h6UGQWmJWci26rQr9Hp%2BGKzK%2BAA8zx%2BRDZK8U%2FjSbbwjnGI2VslMIbZNybQekjpYgFPixpfPQlDMZqrHFfsRzad6mUiwyEozjhfZ4SSNT%2B2WatwtE4yo1IPQT2dvmC9E1LJTqUAFcMuGQfkHUDWdXrSI%2BFRdOu8%2FXK2L15j%2FThxQoU5maiJuMsqihZn9z3JlyFKqOiMJPmNbsQh%2F5FILig2sqgynrWtGj2jVa4%2FTkmyMWeYDNJfhODwead7jhABKaXl5fQDkphC2EwSDFUXYUGObX9FNJdWR0ui6okzd7d%2FQhXV0nRuBzJc%2BeH%2B%2Ft6fSWEFHfKjuYiESTuipWNXh%2BTC0pC5%2BFlx4CHv%2Fnk3ThglcwOsF4gEj2CWH9oezLR47yetrVT2f3zE4RlNQ4I5nShFPIq7TQnIIFtP%2FXbnUzg7G8fg2D3M4RKUMz8xxuXexYg8Va1Xq8XpR2zY5gRk5wzAqYK%2B013FB8Bt%2FUGBs0GwVe6zT9wgDRL%2BPEhfrofrHycmDXXR5TjDKzK%2FEBjqkARNebeORJZN4tVhlMtQnDY5lYV1qcYsQbrAubSPqNXq5pVSKSFHO6pVXTmBVB%2BsnCUwBVet6%2BZHr0PJVbKaqkeNjaIn%2F7YLo4WTlSqzWfOQwLWQEn9tANb7jUxSQO4vtwvVpGcIimGC%2BTaTUBokIGKDFZ0QvStB8D4iV9jYvObpl9tl8irctwvNN%2FUSXYctXffxbnDVs3iaypOUOimzzznMl5jTO&X-Amz-Signature=0afbbaf3c3077f13e0eacd4ab14a26153eae43e92fa24ecbc32bc0c5b11713c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
