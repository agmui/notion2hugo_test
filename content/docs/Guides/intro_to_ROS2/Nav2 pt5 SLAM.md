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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=205708b301e21f7781bbc6097416ae6b278bc04cd02965e85bebcd5151b1b08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=f4252dd549f295ce181e630714d270a61e99f0bcd0c73436468ebb6faee484b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=9ef88db5e51e9e99d7e3a406f046b861411579967af3ecc2fcdb372e8f3ad3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=7fe12c7787cd1d29606f4f450b49529a3df8b723caf65863e8d49fcd4a29acb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=19d584023870984a0c5416ced06a92ccf8bda822d438859094dc2bf5d310764a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=e0af264d29639db437309e0f7272c3fccd1d3d241e9ec463bdc37ac4d478ecb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=cb2d848466fe9ec0ba5bf9597d91df7161e24e9e522a8f761073333a8a311739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=0ec81346d669333da8564a4056d871f6d0355f3d9459dcb5c916d0ad907c86d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=8270b3d39840b54c14bb347dcc64ba80eedb752cd24fee28acc971bf82c4ae16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=ebfd4e5303f285f161653d0ea89befde34f1090ebd0124743fbf12140085a5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=91f08dc78f17e7e3ba354c3e893ce2516e2b9487b1da18df76e18b2730e202b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=810f19da8925e28eaedbf1e0a0042704a6a3cd603c7e533455dc79353acee09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=0fc3ceed18b448ca8fd0e01321455d88337b3ff3987fc6029f397caa1c3026bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDAVE57%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnrrwlvaTrPEcC2RJTjwWNF1xM1gVTzj9YY2ZQUoTpZgIhANP5TzgBDQDJE4T2GAKmiE4Hwrw4Cev4RDCuZwLIefMwKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Yc6QHG9Cw1gaGmUq3AMDs8M6ilmMWcqt92%2FU1%2B5YHUXcXJU4QUsQchSUHeKbJzZos9KPqLt3150MlGrgH9ShrX8lHuPLvKkGpjcPV7gmvrDPn6yboGFt1z1EenTZQG3h8AzfEdFXZdIf802GVcJk9FowAgEANcC%2BmLtaMlv2H%2BloPvqi1vn4rgETMK5K1eYcV4BQc%2BGOo%2BNZYIIGSlTaATcZDzw6uGY4MCfOkbVOGfxQrvNC9xWUaj1LiAMJTA4KJuerbvL1W5ccUVNztl2o0YnMFMCw7AOtva0h4XVZ06oSvfXV%2BY66IWOToqzW5zhfica3Ily9t6talEyXQcT4PFAA0sKBlYwJIvWe5xQdeaIpMnlNebzN5sI9bluG2OErpF%2BMlN2VyyW2CXaAW5IDVcBCXqj5LwcopXpNruxXEJ8Lww6DnTtC8w5j8Go1PZxRKfKA6i6nPX70kUSvFYkHbzD95JoIVpPI45%2BxxzivLSS45mgZDkAvI2LQ%2FGW%2BpqfDgJvnAnWcb9TZ6wpbNl3HoITdQi7YzL53in8MQXkraQ0DTy93j5oV56FFbYP6QUErL3NRfiIONa6B7uCi%2F6eHLspzktcV%2BI%2BHU2tQFz%2F4NSuvfZCZ2YVfAmTfhq8afy7L7NYgKgFXEQ92SzD4mqbEBjqkAVFNoSX7RVycEdg%2BnYySTsJp8TuZ4%2FPRTmCtQstacUlVdZIHjA2ZFkT6pxwRub%2F9Jmgc1jL30em2dsMO9Pxd3NBSS3TvB1X55pzOO9zjSshZ95T7uo5ZfER7VGg4L0poJzGw7CXr9yEn7hgo1F%2FZmC%2FZn40oRn2OB8HR8PrO2E%2B2nsOYoYdGMDTRl3re%2BIRNlqjab%2FsM4LYEMI4ctRMt9o5xUR4J&X-Amz-Signature=af2a93b945d6fde53cc4a02d04a0d8554cab03d6a1ed4b006cdb61d32a0ec9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
