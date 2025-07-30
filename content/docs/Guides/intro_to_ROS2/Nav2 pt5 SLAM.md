---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T23:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T23:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=0c01fd4f357ffb80af754723c23fe58e3f86f1fc70860eef0ce32fe31ae79c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=4712e735f5b6ec22caf58a790fe52ba56af341717230d100f773052e18217b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=a7c4af7098344804b1d1ebaeb4961eb08b635ead88d5e99e78b50decdedd837a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=cdac778f9a52bb8baa63b3406b3480f163542ec05909900f730e85b0ea9ba0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=0d30ecbdb0747bafce769b3fd07b595beda59ce268b1ec08815db936f25650e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=01f3d14a84ecc18d5b2320257db72e22238d4aa341a19dc930c0ca9211f60e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=006fb15af078b49a3c0f6c31e6e747574922b950c56820e68d32e9289b586a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=533aecbe21e9042d628fa291fd17244b320ca9f24b6f5bc9546d3829a6289a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=8306b5a442df7deb43dd902a04f172d5a5769b284dcad728774df5eed4e97cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=3c61f25d0898c6b4dab728bb3615b0351b2b51070eb7906ea1b3bef379ec05f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=07d5df085fdb880e02c07c48e20dcc7806db74642cfc584408f441c6d5fd7de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=0090dbeafae01156d904fd9d48557af5a7d95ca63ba1bdaa92523d92f20f7afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=0c4ebf4ea8b771d4019c226bec426b5093ee1c4b2d3e65843e74665948724ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMDDWR2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxKKod2YO6wnNMmNl6TlrFCeRQmDqzfNc6fbTMW0KVgCIQD7inojy7izqZgIouC6k7xT%2BmCM0e7QmTGlfH%2FZ90CEESqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8E2TDFXK2XCraaA3KtwD%2Bge6hJK1DpgMKTQpyrgqlLMBRehzFIlyTklYMgLPE8luT%2FL52XkWyV4HggMEamytoksPf9oHGpN6%2B8ZOS%2F%2FNRuCOuj0Ls4KcH9XRrWOtd5wvIKy5U5O0igSN5aZtjDwR96E7RvsA%2F9OLbl8uzR%2B1TDKbTuDownUU2ZW0ab%2FATZUqOAWZeJQGkqXiQndF26CyC8xJUNlxgG3HkCZfWmhvFLSfP2SvIVT7MLEL7v6FgKUdlzZfG8g3aqVs98shdELn%2F3IVU2ybDXc9HVXZJkxmIbrqdm6Oc5R0PEwddK53HchzauQnHZkIgPRfFsSWiP7sKyN%2FVLOGjRS3GXQy%2BoFSqTYofWlU6OO%2Bok91gYm6pxH4aih1ER7yGJAAtMAE5Fw9%2By5byIjqwqB6i38Es4ODTH4ir9nVkmapU7umkOH5fLInRhxeoofUBiQLPaD5dx3fCh8XGWszxtZh0O9OVQNvOXCOdfBq6Q0%2BgBdTizz%2BG9ej2TZ5mVfHxZZxqJ2sLxDYFqyZNbR%2FHr0NytLeP3JXPBeL5pIocalcEbn6bs7xstyhP3NJ70PuyXXjHWDOTVlMFrEjf1SdXYPgtltdLiIe%2BOi1b1vVVjgycqxDW7Bzfewk750GLuhkTDJiq18w%2FfKlxAY6pgGf%2F3VrgnIE3VmeOijVKeXGz36v60nXllG8XIbzWTYWvTadj6vFnqcVDrgAItQQLn168lzDDganhWNiazS0tTxOAW1gW0HU%2BKXeusX%2BF7YBRMdbdO0eyuarBFZBE1eC0ZqdF9%2BTDmID7e%2F2c2UatbfIpqfG%2FfaKYwR77Xg0t%2BKx5hz0EgxB0b%2BbxSfgc0eN6NB%2FXcBxlmUKzhqchpW0ApBaNdYWpLAV&X-Amz-Signature=593bbad8f4d9e987a4ac01a1876297e68f22f7f2556bbfe4ff4288a272aa667d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
