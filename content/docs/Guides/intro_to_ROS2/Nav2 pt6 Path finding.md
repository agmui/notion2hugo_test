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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=1f80433de29cc2ed45d3e8eca3982430c2a2bd1371beec6393634287d4981b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=be3d4bcedf1a26a501caad901935ec76b422d4c4c66b6952b4fce124ca4165f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=05641a4c31e1b6b4af1e3c6b242498d3d7eb01592a9e660404b76d4647f55bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=e1d0c53f0ff8f8013004d41620861c1b21346865d8da89e34e64535db32dde81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=0e8f1f26def258a7db05482ff9e9e52ffdf660df9191b3c5aa3a6e06910102d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=67844ccfedea5837856a06d614c48770b97354f982f4709f8e7cd113612d5b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=8be5d9ca900b3edef914debc5bc74c7cf7de87c9ee0f74f0388182642057524f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=4b457891e6ba4bf2cbd6d0c1332501d1aef4dab495fd2aa8cd9e32564800f8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=ceafff7c994ee4c8f7fd2e89a84fed696d58a64efe6c776ed1e68959bbc3c1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=1eecaf052eaf379bde6d0a76018481549aaf560a830e361bf559a2823fc935fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=4e34b3c90a84cdd64a4120e28c1c8bd38b1d2ddb712f7fc4fd1f7fedbea64221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=c8d0fe66bb7fd30efbf6494b1dfc2593f5887eb07167f212aedcc7f7453d934b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YQ2LTI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77G91YnqzS8bLPgoDyOmQmAc2FF00373gBVHdUUaldwIgfhVEzNSCSe%2BMKpNZOHKN4d8A%2F791gKggunoSz6fsxv4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSsBSwUat8elghvyircAx3duzaYGXdieD6PwPSCOYBgO5jweU3hN2Zb%2FNPKn7h2mENyOHOi4yGiesd00ij%2BNPxBiqPqjBUGxHc7KSodW%2BbWPINYmXU9kEkOMNmEcYFZEeGmdPGuSr19HBVv41YEo7UpuMlH1mg74tvdiASj1uVSfu7JJ2FthWF1IU6T5V9iYte%2Btu0%2Bj1lKPGMZsJGXnGc5azbHJ%2FnKQQfA3S5WxPyrvYOUsFnwL1%2Bwn%2Fi17JmostQkTlDOmoI5TI2k1q%2Fmdou06nql7lBxafmBI2sVFgKVj2xWOAfzKjK0gckI%2Fr2SglFzTznzolTfbJh2WV10qyO3crkrIQ0ZPzcP5WReyHrhCs2AfjJ8BSmLnQjrpDhDKqA2kYM1I5PzoQYsvLEUd9rTt4ga6Vv0qZyIRmGK%2FgTuVwkWJUaazbyr5pRmLLZoPlOXGHJtyplRgS1iQ%2BHV32u49644e8PVVdKQ%2FuAcZgvVPseND0BLPH0VBzNBBmJ%2Bi5rsK9p3UdJ7oNYwjAgTAoDiuie0OJUudccZwvPWHHMjVe9Es%2FiuxpPTInl%2Bm0gQFwhwGCQf2vHcgSMXKNAPqdxvjV0qJ4vF84kgvQ4Y3oy1v%2F43dlBfZ9p4%2Fo0BTLxlZYy0SB6Eg8%2B5RblNMNL93cQGOqUBsSmmmQR2fpeGQjF7zPNqSZDGxqKvkGqzif07eHhwBSc2kBRkKxVGuoAu%2FgSiNcQuITB00AKgD%2FuJtakQKaAI0VYhRIl%2FmIS5mCLbCU2xao0z2s4hGnm6bf32xTVu2jC0rCI91Sqg7wtL0IbfRAPGoD86iXlkQe9CkZg56ldr7tY8%2BG%2FTtMwdcWm%2B00OFEX4KCvL%2BiWh2b8PQUiBz5Dw%2FJS1e43H0&X-Amz-Signature=92f3ec870bf3117590a9835bc60ebf59c3c1d08336d37b2bff8f69518fe56038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
