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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=af11cd78f551adc70034945dc044143d831ac2e5ed37d2095937938a691f0f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=120d308549f4bbf6c47984f57683762da7c48c62dc9d7793056bd525d9431b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=cef9b8b2898597a346fdc2806b151c91c3ce92c8edb4bad3a4e0a2c6681ee32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=728c7d60c3a741872d515cea23560425d3b8784c7ce1a0a75ae9a225f984041a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=2f1819d08792fb5b00436617ff8c9a28c8772af5ed5a9a781a4220db3b098230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=ab262e3e8ce96389c0dd6e4112b36820851d8d6f8604d242de8b383603f7c0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=ea62d1c467745f54cd3ece3d59da38056ef67db2391914fc68c650a93352d54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=9f2685dfe4d6dce5f0513792bac73d6a198dddaa0caa9907b8642b19dbcf5f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=fd0663ae10af63b7e25ff6884743f4330c3e36d981e1c0bf7cf691948d03defa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=ad920f93ceb15fc1e06821301344a0922ec7567474f17a7457151309864fb107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=6833b4e845603ef53ad4897bfb3ea634e5684f194439a9cebcd5b2a06e034dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=4db5ebc2c5af697d84e57e2097f2c59644d667865141e8ac69f8b2290029a929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP237AD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJsPNRbZvaXnbuSIQhLWz2cOV7rnpEIgzJhbqIXQ4sFAiEAuiY%2B0LA%2FSTFOb88fa22v3ZkXkbjPlLZDhqZiM3WGmmkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRsZSB%2Ff7mV03daiyrcA9JBHjGZgpTytMtTeJalwIgVD3B1KhzCZOsGavPF5RxPLeGRDKWc7dpNJ2vdoqxVhMFtEdjWxzQQEbgDw3ZHLP%2BhMEhedADj6F7gQfzSFn6unAT1bitR4BeGc5%2FiMqykBbETRFSFTrUNN2jrMji0fGCfi8H5lrKi%2FrTd76mTG9fhuoZItLUlUF%2Fnoq71WpeN9OOAJ%2FLks7%2BWhjKhcC5fX8K8tGVK0UBaRQ%2FOXV7DOJJ%2FKhcfPPk0FCZQC3c9Rv3n%2F7%2FRVFaijQtwfXXqP%2F5fj5w%2BZ5kOQ5%2FkCxTypl04sT3K7IQHsu6c3k%2FyAegNIYNjEVGQWMf7hyMylri5Ldfl%2FBSHujum0hKnRW9Ie6x44D%2FPRSRcurgcmpa9ZVpb27vhLUH11z4T4r3q2UxXkN0CS9H8QWKO%2BJKTrZfi1fjnqxLrG3Gsx0hoN%2Bk72h67Dny81ebRpHyjnpmSmoH47KfSLPEBplWdLu0cUDg0waT1hBPqSKXw7p9oUi8SpZvvsBDKil4gqOyrlsYWBlv354CsFA2aIH98AoXOoZBqz3N8tRM%2BVFDMUh1vKJGdtJ8WUELYvbT%2BRMrV91zG3yHXu6kzoj4EnEpWn0B1W1qY2ZUYxrQJccTffzWwAEAHPy4KML7g3MQGOqUBZjBr%2FfmSfXjQ53cE3MaLTWrebAH5tC7Y1mgr%2Fjy4qls1AxYvFMiCQCM9jG%2BJW0s0uv9Ortg7XBNitPvKV8%2FgaIBlQLS%2BEMi0IhzrvdyQCdKt4KpVa2%2BEMq7Zf3E35Zvdn8rcS2SJ9CeUEfOjbrdBjOqWrX6d%2BnN74pn74ZQgnHZ8UcVm4qCJqtlzhwfPBF6O9O0za%2BhQgYwxysmHsOY2wB93sVvY&X-Amz-Signature=45e43e2418e3f2236c1b79dda4749bbf33353e5fc02a55904c2a62feb204f32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
