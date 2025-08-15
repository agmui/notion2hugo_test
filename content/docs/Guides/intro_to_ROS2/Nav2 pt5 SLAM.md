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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=1dcf246935c97697531d6fb2999653d4c919029a14711d69f0854287f47d848d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=3f0e783799e84d55bffee5a92ca6a874e7c9d4bb40ff1f95b34151fc2c6fbff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=f5796326e5dc0036aafc53c9590888c73bab6997b4a97fac9c6414769b2631bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=0c608a0c0ddf246d767bf100725b4341c946d0407d1f8768daca8709cf5a28e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=c1bf613f9e226c16d8547aec6872a3a0c5a5111fba38f36168a692151564a24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=cb34dc3d71006da404a4890da14644d6facc5cdd0d6d1352049aa29b98729bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=6bbfd0a374aca6530765066b619100d764e90bdb85b8ba93730bc85be1ead9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=cc55847dd270465b4744b04bd2600153954f1de01bec7c6e54c33686a17273d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=b252079699ab492a2cad9c793231f39dda8caa9da7f0d8922d98ce63457a7012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=72a1ec67337b5ebfcfb1d4e267dea6ec5d940b5decb8738efd88507f5f461d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=99d1a4bb76e9030144d0e85b70a241afc7510934bb47462ab149fcfeb5853d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=cd7195fa280ceb70892d16a6a796852c0f6d143b2ec6aa156e36c08c75fec888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=bb86c19f3862aec8cb7125b64781c52ebfbce6a75aa593a5a281e6ef73fa9d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UWCDYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGb3XxB6EiQ5iqWrem%2BruMMUiFJh%2FI2nJ%2F848ub97xjKAiEA1HyUdCa8uDmIHSYqngFklmwe9g8Vdpfr2GZwMwqLcfIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNZfmxwUpI1S9fSnhyrcA7UyA0F0JiHQTKIdgMBwPBFeL26zBr7T2G7ANkjCQb7LosCqXe4BZv6EjBDUf%2FNNoDyB1SXUQdKUQJgCb3u3vlWIjKS3NArCDh0XP0YrbNlM5r8pJ1Uu5e6jX3tDSZ%2BYdCPfAmfJI3ArPPZmma%2FkWbBBYGGsCODxtaW%2FZ8ja3yQrHtut%2FQp6Dk5PWvv9yi%2BXtxKVVXcmgGVdzHviP8QOaHT%2Fo%2BYKv4GpVSUhlW1Ykfn4OsNG90%2F6KnxK6TFQMvdbXDLrrxUUzyiyZgO%2BTtDi%2FMQBT41S23%2B7ay1NiYjBO4ADJ87ufIbr9w9sVHy4AUEpbibG0W55kwVFRJlRsDB%2BZWn9uFJ%2F1UqF%2BG5T%2FadEhpTehKV7oI83Bc%2F6IYs7hRrjRQY3mMrmP6pZjr0iJQxJlyjFZWL9irEj1q2PisaLq9p92egO1CLuhdWVwGDQAprgiBIvqyG1aAlx8gQVLNEjqAgDc6Th%2FKN%2BIX6gWlxyrQ2r89W5nCTb02kdkseDfMvwpN0LBnzOXaZcDvQVthA91pS6YWYX4csC%2FGbUx8K2NmhZdbdBquFMLKNuki8PS7B3yZ7cnXC7mXjigOipcbRlpV5Svtf8eueWpa1uyEjT5wxgDk0OLr1hqtMQCgJQMPei%2BsQGOqUBCuMl%2BvXemKjjYH0hGEgSbCLcIXkvbB6x9WJ5COVSyOmmcsNZ52qSkFNgHsWDSnJaraXEi0SdaOOAZmax9VqjjLvYl9RktV66DJmSH5%2BJezBYFhblNHnlynh%2FYPSB%2B%2FUiAhJ0H6LlFmxcdyLEIoa4Np5vF%2F%2FJkb3fxridoKX1ASAqez6yZ73NegDqD0Vkg2f%2BoYrcy1uJ2hhrzfUkDBcywhPpu%2BAp&X-Amz-Signature=84e7b3de65c174900a76636567f0c3732c252eba1f778546bfee3ccb654c6ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
