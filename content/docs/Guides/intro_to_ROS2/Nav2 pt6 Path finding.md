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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=8289b9fd4a7b4bef6176a92090f0e7034fc65285430fe795d34b3ef0dc04d61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=cf503a567a68a189f9222809dcca2c694157ce2e7404eda45f8ec8b4cf2f8b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=b4ed6ed535f429b279c7aa1b363e93f139d5950a18fd89cfe98b3662dca12375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=105ca9ec8ad680fec503c4e933126dfe59ec7a29e9205f6eb95ad997718b5b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=b1d096d20a213307e3423507b3a3a560f000beacb35b9b4195b2ddb38c733207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=f17eb8ddf8d8c5bd9383f8e053e61bf6df0a68f88100018946bbb8fd8ff85670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=3ead2b4fdfcedbd87e3d63d6d3ad19bc4f7f15c4544cb12ecf78a24c67270def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=8c002b816054f41e67f2b6e3f1e24332a7b537b17125afa85d81e1e570102bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=20ac5faf2f1f00d2b8835ced9f10d3ecc93c3d85e78c55e954d9c41239577456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=c8b11e66d12a6ee058f4b5b8a6ae4657ed5deef8cdcf72245903463478c3c393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=a656dea2db16ee0b83649d46f68ea0d3676f40ed214c5812042ad1af258bed4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=dec3b0d908e0f8a38ef0e37b2225398bab3c663b9c65150354de237bad632d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BRX6GK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDI6BMeASiZaqw777axfnaBz9rbOrmjfmCu8Q1BISTASQIgcl8tOJDTSIeR5ImTE106fv5iKb8WeS2jLLJ6aAgOJEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPyIqJg8%2FEpe0eRc9yrcA9iN8NQGKFpZnonsVWDcN5QZ49DttzCSukMalnyP0mk35U5whgvFuFrqrMk%2F5h6Tzu3ZLFqKw8I58RP2tGQC32ViBAQtx1Q9NTZ2TfTLGLM2R7MVkcjK2IFtqaaTykI1uoq5xlMh4s4UGVtAEP%2BUKd9if6IR%2B8U0uXMEBXI%2B9gvGC1YgSBLY7zj3IcArqU7RDGJamNu1vlaobuY2MVonUvIbI9JkP7YXRZJMcpFZFDguhGrDXwlJY0SKrrZKs8DiNaIFe1CBreqfLxaK4E%2FniYV6ZEisuYCGnWid8D8KtSgQ%2Fi%2Br7SsF79LjFnobR63zWJrZhTdMVgYBqlFYVqVZjxBiouX3c1TLt3vaQslhFuctDvShWfi%2FgrMrWnywk%2BY4FadF8MgUh0BYphpVeA7hdhAR0wNSPTRSZ%2FKlUq9nZTbM8XiDwAEeyV%2BZE%2B1HTyGx%2B2hPbqo86uWryzBCXEtp7NEjc7NrQe4DskkBMjxldrWJCxzLb76pYngv%2BnEiDSEtFzkORZvgKGHFq3Q46G12NEkbvGl%2BI4UPNxEt30BigZZZ%2Bd2iWqMqao%2BSPZlpul5hmCEL2QgM2zmq6xzhXqlhi1fNBsOI%2B6b%2BmzQGy%2FPxtsW52R3ZwAqMi2cb9QJCMLey%2BcQGOqUBPl6z548m2FVzGBAi5ak4hn5p4amQ6O7%2BU6jEx8fMembpstQDHWij3qmdxpCQkOl5FA1U1tUT7Dxc0a%2B2hjAuDf%2B9rsiYyIi%2Bnzvx61NxCfruLqvHGIQnt8LHHIzuJbJswPSTLJZ%2B1P9z0SVtNYAzRkIkEntVEh74xetUWBHOPTqOKjlRf0aazXg65a6L4vLqABalizAvqFEhQRmlqgrDn9Tb4n%2F1&X-Amz-Signature=c21f753b67ecb9bfa7240453ab627e5f3434f364e90362cfd25ef9f68665b25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
