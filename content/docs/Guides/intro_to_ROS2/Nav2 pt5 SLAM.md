---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=615641d01f7d4c9368c2a2ec89945607be89996546cdfd6cb1935127bb1ec590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=53788bc26ea174db5e9f55581bdfb5b23cf61fd4378938a79e7d0277ebaace2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=ffa8de12f12879319825364fb3b30cc9dc10dbc2e1f17a3b7b250b3d68bc7d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=69909318bcb4b3a9a9263dacf69b198896c91414faa9d30b6ba25dc32a587c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=91a94ac13c7fa6b8a342d5e9d9aad990a43085865717d3887461332d04ad9ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=f25564650a31f62b60d626e0d86aa99cde01fc50cc36fd1cd595780d44982d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=a5ac902307a60a745249952e07e6ce02f7c7ec6c5301ee4dfef7f25bcea64a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=7a8fc86c714c3b065cf3e0c8e191842b1bc68f9a9356caa1fb08300bfc6c85cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=294f92c68707fc3dd0260e98942b75782d4ec2e0fb6674db41f2b8fa55dcc82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=c2a3b8eab3110ac640c77ededfa384be0e2407caa3c2c81e6c4f24071aa3e471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=3540cabaa3e8c173d778507e7343534155c74712d584c484a57058fe76841baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=89a4f7818098aefd86aeb2419b275d35db3e4477a257d0a9d4d09da7ff886e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=ea319d40ab523ff196b2dffbee117eeb0abd2e0843c7ede0e211863bac80a117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNI4WANA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Zr2%2BcLEuXKfzglXT71u5RyiCwvsEP2ct2d1hQFnpZQIgAwV3dDDlhfLMQgk%2FLbnMbht8f1OliI88zdSfQNG9wVkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJUOqHLfPpP2aocTyrcA%2FwRwEaf3RHS1a0o7%2Fgk%2FV7KacijUG7HpOKjQXksPn3YeR0Mt9rgDYAEdA30S8sWSgibKC9g5TfvLSNoVem9FwfjL8UgOAvW3N04iBfq49zXKuiwSNmUy9h7hpykPV0IGqzhDHuwxPAJxWQiA7KD9dJB4SrQfgKOAoooq6BDilF2t4LlZsE4oeOPccDQ9VKP7kqWDJm4M5bmmuMuoinJPlkDPV3b1DXyCuUXbdVOQDkYeYWemuBE29ntM1KoidP1ki0wd%2FESrUEzNWn7IHBT%2BNCrFjZ2i%2FNfnEWPGY0atx5oKmL61NZJmvDYW3ChFETZi63UvLpm5a0C7ECDzysyCnlsGWGmLpyO7ZK%2FdRAoRj18GgNGBWcpL9AKj5b9KtHM3O7ZTk%2FkUfzjZ2LwxxHalggCGdThL83fYIcnkPLgKrjstZ5ay%2BYkfqrj9bds6E54XqmQYF%2Fl3M9ZtOMOm6lSOAuUothWOwzbHgWjMRuBCpXj4i%2FVw5zfNb0rHyth8ZRiCrysLSuH9ik1qTQqXiebG%2Fm5DWi1wflvzs5oIowXnK3j2vfejUJyfRAHu9K%2FkbEHLBrVscVOdKVeICes9y%2B83qZ3UZ6%2BNYo%2BvxekWig9BkHrE5D0%2BwUhEQC0ngvYMJalqsQGOqUB63%2BUkc8de6lUfgOR04b6VNguEolX6UcM8pI75Kw9Snj9Il1xKHejKZjOsD3SjFUxL%2FTsf8gB5m5KO4g%2BADembrjRwAfPQKZ%2BhL3PxeKiZblMplcka91CF%2BUp0IrnL%2BWhmsMsr0surSRG7KFrhqp2yN%2FeFCApm7V%2BXxcIlWrT3guGZJFB1%2FWEGCL0hc5uZkJI%2B6QKwSThgMaUsUEMEoSsWvfYK%2Fdl&X-Amz-Signature=767fa84890ead21c016f24e1a216f6d773accc21501a695c45f2b9c03fd9bd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
