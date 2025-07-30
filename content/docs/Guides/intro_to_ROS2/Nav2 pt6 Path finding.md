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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=d9511eda6b3159e54acabb17933f85d93427cd77939272d3d3a5b1938dbf4d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=7362c614ba417e69a9f40e9692c3d83a1466d6474b8308d838ab414a60d7447f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=56d5e6180770b9f5930cf61ee05de719c5150e8e52bc465e8439e0b5fe1fd05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=4691606da931a1f4362ba7053c44f16a1abe899171b6d4e447caa6a3d84a6cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=a01bc9f73922e4003dfa68dfa94cf08d35446970e2aaeb7329a35307f5e482c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=d916881a61b255a65878fe1ed29bc50a22e352a79e2e42d8cf90536a79700698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=15f0427ba574c77030da76b415a1f3ad179c209e8e89c6707e2d2114052d08a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=39e8f8b24f83f9f53edd7055a811e9244a44b5b0834d49d379310c69f2e07e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=f76fef61a376eb29b4007e565fb079f154f122e2fc24a56cfa2de71eaedceb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=b7583b87cc2fddd8cc4ce985b66cd722303c7285458672f39a46fa3186bdebda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=cda239fb6edf62a28165f76a2fb1b3727a342e0275c7a18d9c1058f83011edc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=32637b492c8338637f315d263ec06f26fc70e7955f9bf618b45d422f88681cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK7CZKY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n2QIK7aSbzsaakAI%2FsTT72B6WL9dVFc8sKqaEilctQIgWiMzDy53XjMcgT%2FNgyTy6jeOIs2KJd%2BKVJudS1TLF1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhjsgqo%2FdHatXONtyrcA0N1WfMculZ%2BrcF31n5POfHUJ%2Fa%2Bw7X4uOosR2no%2B4pstv0SrzvVCkomRObZOqT%2FIGUNf0nn51CGSvgh7C5muWK7VeytPTv%2B5geC8vfvte7QbwL94FpXMmVCV4VCXvnYdpPJrYVU04FZX2xfhCb%2FccHGVhmjJPiRmdM1g4G1GLIwqtVoSaWwpZhS0Crortxi%2BR1XO6OrH9bA%2FtCUlhlhxvmkgaWFxJpnTKWOuuKVVa73Wvc6zFzgOWxUSrv2IfZpiG9plJHjDZZtpS9opKPx7%2BPujzX10iw7OAXlMWfA8UBRk0ikS%2Byon5PER2qmVn%2BPRSrd0%2FQfrY1Vl6y0pzm8KtKGKNPi%2BSJs8Qm6rUE8AIFgIWC9PZxXhRsUt%2FAbLLqzVYLSvqvu9ch2PjO4M729IJZWdmhqQxESr60Nxu6ME8kXuEGytWDGWsI04HnVBqo5vxJSI1eThYzcQnvW77%2FOIzST7jqYBxk1YE58Dv3qBDXuyi37YKl%2FNjvXe1wq0n5qKzICg%2FzUEupTu31cyJn%2FTxCIyljLHA31c3lf58bIz%2BRw0XGYYU0gxw%2FQLq84UetZYg7JNalzm7MshqqSNMgOYvnNC4vnu1ULAYSqyEAMbFjmGyHr7IFyK7C%2FFlSNMJOjqMQGOqUB0S2wxaMTg%2FMzyoVPapmZwv6hppgHNYIZuZAfuuE3z9VToWpeDk7KV0GgAshZh0J2AxYD1i48KRLr0WND25Joh2N0wnOm7BEiY49CzyId53KgkHFlPhW5giO0sW3OhGasPB8diWEez4iSe3PO6Mh9HmrLFfwkTb8Ra%2Ft11xylyDOSjwiRi47OGm3x9aXcDaffXg6evmYUJEz8bZdTAz%2FTMa23Cir2&X-Amz-Signature=6da4ef5ec8659c164cc7d61c162bf570244dcfc24122c09f74ee41668905368c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
