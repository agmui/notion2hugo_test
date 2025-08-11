---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=26311823de511cc6a5ccd307938adcfa5b8b7639b338a832525776aef9619d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=878c41d42d638dfea5d20d66616824a9b51bc72334eec9b0e99b101e1cc570f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=0cf1e01aed56eba64011fb6a044a15eb0129cbcc93bf376970ea89ff8d920777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=8c07cc475cc0de12e47dd75c0c860b4b12c43ba6a10ffa3e46976b85d445dfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=9a555fd3edac44575dbac2593c7a4d01d3c8249afb3d70ac8ee30742cf3a7be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=72b887e817c0b8346cd4f85b405b5de501034b36a4b617be904993fff52c6e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=0e7d028803610f2ff335f7ea9501e18192d63d22c32245a736dc65b98d1ff334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=07080467ed4acff0cec79394b76a872e3adefb64db72cdb49d221b33fe7cade2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=3b8e0f118b39d361245d62ff5e4c3c4ce63e27db6f8189fa91a67460128eb8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=887892a97445a1f4719140ecc862377e0923ba09299235a474706bcc88a2edc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=26204d10d2d2c9ceca29022dbbf857bc2e57286d18f32daffc4df7e743e20594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=6c7d75e607bab0833895104ea416fe241a684509f8fee7e56feee62c2e04fc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=d9c05026e1f7395b11bd63f0f99aefe6ba96ba69aa140caa055103986ec90e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZIQ7T3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8T0Uv76vjzK7z4PGy2TMgviLIFemJSpR7na4p3UpQIgEb7Bv%2FRSWNo8nASo3B14KpirmoFavN2XQ38vhHKWuPsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVN8GIwzwY1XoSVSrcA%2B%2BDG41PEOLkeyGqV9vmOwx487Tie4dKEXCKgA8TYYz0fuQ9owzL9LZI4aLlKjNoj74fRT1t4kfCCqOvWSJJxptq%2FfveyBws95ByEOfAI7etcklxbTsMe7w2P8KDKQ6zuU9r7rJdw5%2FeQqf4bQ%2By45MoXfv0MpVpeR%2BkJMstL6PzbisQO4MlRBiOjKI%2BppYPamejp0ZM5929P1t30AkbLMwJjsegKwKgDknXbZXM%2FhAJJ%2F4egtIXdohII%2BYTiPfEjef9ZdUTSn3yg1Go2m%2BM4dwJ%2FWwNWZOdvvzRXJV76UzkbP4Fgg3Y2OsqXq3VjxN1HG0gQsSPFs%2BiJ081epX6Er3r%2F1S6LUWcOH56i5WADlYZnrQyiQiT1xMkXkYZuGQF6wEOVADFwFcsMZu9UfDYnhbPhG9lBvgj90uP282FdVqKWnYY1Wf%2BT9vFIkgNpSCLtguCHdGS2RRy5rnH9O6xa1303Re9O8fDWNBIbeNvHYZc%2B5Za9CW3hqUSOtGDialdif2CpSLa62IrrJrKo%2BXAbf35bMja9nnoCviBrrNAfURiBQdRgwM9mfX%2Fk7kk3DSvfzi%2FtumPdVPNJpaZI8acRP4%2FdWw4QTOkCvj7p4bRF0LLsiRkGBEtUVr4GahuMOyh6MQGOqUByFpUna95YAMLJ11qpKIVKuRHmsRjGHVuNZOkJ4JPrFj3jxCIojzjSQVna%2Bb%2FRi4Z%2F9pw5acvBSV36guPlQYDk%2FxadaIW8JoLHUbXzieOuDVC72vYEE0wzwsnJa31ZMvRP0aFG5CCSAtG3lpc6TAwz4fjqzfQ%2BEAXRZy%2BkxDSOUdAm6VnA69bpUJ46Zdbb8UZYy5fUPRDhdueGV8FUhV0q1MpWetK&X-Amz-Signature=9ac92bc9806fcb06a7c57e95f4c3c6352a98a254a0a010e628de1301f00647fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
