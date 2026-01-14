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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=a0565eae1511a735ba23cf8fd6a64fb63c44506204085430291cbf82a3ff5bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=271e4278da7610c31343fa8be6c5f3c62e0bb34a3056f2e73ee08bafd25c8e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=da8236d5d6aba9708c6cf14819be1642f12c875321224d53228a674d92ad668a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=73a19aea3cb0ddc8407bf19ebc9a7c749ccae8f59bc87e1e77a80fa931277fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=e1f2a90627e89b82e1948179193271d85e37dffbeda39bc2a405f9c903b72327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=4860031714b64730bc8bef538c7a40b5d17e2bbe76be016fa24e1478cf2fd9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=8db0b461012410da58bb703df6998982b09c0195ef1b813600c3b1afa672f398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=0647105aa0d7da2bd810790488524d2992f11e2a3f6c423f5e3a4c1e8c954509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=b774325e70572b2dd31b6dc2e6d5c14c4fb193adc67a0e978c02afe213e7f483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=4729ffe731c5045218d256bb24deb13e76bcca6198899fca84a98bf513b14974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=2bab743dd7beb343a394741e5364018e98c7b3f95cb88a4ec9bcb024aeb732b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=e90e3afa99bc1cec14e8d25c8154f18132ed9329f09a01b0df392845e0db710f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT2EKKG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD3ZA8BKKGR1pgBZgiygxW8SdF0wqyLyR1JPjpEYEgRmQIgGn9ZUc7Tn1ArzQzqxT5YLHg%2Fo9Cnca7bHyjmvyJTuIQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNffbeuMLXPUY8BkFCrcAxyWIpf7wRXUKbMdia%2B0%2Fm%2FZ28xOksW1j%2BTEtrTHghrY02UDQ03TKLX0b12hQV1lQMAmnjkq5MOoRB55%2F%2B67brVvhAMvzL6%2FzRWlTLQPz4iEpbhjJOcoZQa%2B%2FHhrUBsB0FHiXXvkMTNsrjp6k9jo1oqdMJ5mb8uuhZnrgW40T5kZq8MIrjlffjs4WCdLI160eUdsINgZVX%2Fi0mPunShmRHxRo7xoWpJy%2FQ06Abi3e8Ze28dMppoPEqwfSCns7gV5R%2B8DWolNl5EOjXL3TDiPayX2DBH792tEc4WCIs5WrGlHZGCZOCyuA6cKs6wjipOflW3eGngihSl4Ab5DmQFa4rwV85HDhgOgB1msnTHsRzAja6MXUXYWf2lkvMJJV6S0UedHCT777nA578lwFQ6jBVafbN5cXDllPOB%2B7YASFG%2Fsndk4HNv1yG62Ht45JlmtS6qKkW3qbo0YVaUBQRZ6blZk6JYAjP1%2BxUhenyVU%2Bg0%2BVlKUB3PXC3HqVqhaRF%2BAx5bRo0E6WRHCMcGpxjWrJuqoatcnC4VQyHmvGNk3PZQ5MWEQQUMEHxszfrZgDfRzvzrjt9xZZPzT%2FjSRCBa6xGnJ%2BfReqG8XHXHPyUBVEqKJvC%2FWKf4CrSL%2BLMniMNrOm8sGOqUBC6Q0LAko8y5tzsQ%2Fj8RMo9Qn0po3x76L5iJTIRfUmXcrp2OSVmoMX%2FQmQqeZXoq9E%2BGwRL%2BVOYgzvgzlvkPaUnSusVF8wRS3WLqQDuetqnmYe81tJ2wSd1G3GAGSMNmEZEdO8b7QXe1cEKyG7rG%2FJS4UPRfXaLGajz2x9P8fP9mr80%2FX7aH%2BX33k2EBD71bDo5GewrtHHlkQPRdzY%2BNXka%2FW2mve&X-Amz-Signature=e074ff809a0b7d43770ab7d5f01cf0f3db3f3a8eceed23a0ee537a14a289349c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
