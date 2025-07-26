---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=3ea612791cc1358abb0edcadd216e9b97b563c836f5ca897e45bb974f66cc03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=ca67b0eb303e746ea4d0a71d27f3225955a79a2141b91450c1c234b0bfa7ca2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=e3642679624ecaff33926d40ebc1ae29416c005cbe48bb2957108eaa2383a081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=c23956694829c69c3710af0521436a79cb5c9e867e190646bd4641414b0442d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=f624c42e0268f488f9c77aafe8126d4d1904351efcd409da99fac08842ebdc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=9ce4366e0ebdfd35c758a7dfc70fa9c693009e34cf467698c7cb6f9be9750b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=c292cb367a699728ccfa2dc9e14be40ec19b1670874dc52849b9711db4b0cd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=edfedd0cac8d603d28487eb8ecb79644e9a9d2cccb54d2a51c3f23591dff6129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GDB2IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDNik2Ytd%2BFTgMSYDd5qvPcnVOMWZxfZt1OZR5fvbpEogIhAICyZTNlc4FHZS3j19QK6kbfl%2FXZHa4YykrqjcNvEMBPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxxByeHhqiWZsEPg98q3APzb2V5qpVXE%2BgQx98drAbaIzITEH8xbki4GNiKVR9rNc80afgJ03rknCJ9FJE25RU8GZ7j1sbY7jzPlMiZdxFjZL89ollu%2BuuvoQQqrIQgTitvRCrWvhJ3XDFbLEP614Gd10hXVUXSOM08sgECjE1TwZTgYiQM502ZL%2FcLaK3q8W7jAhk5SXfiPJTbyMDwF7ABvsQg5nvpcWNPnvzBIMWbFJK3nJzNDKbdjSN6w2R34bgIeZhZ7IQzgPyTS82LWw7nRJYSMTeGQbZQfaesaOQ9L%2FsSrZr%2F7L7dzD3MD1vurz2rnzxYnq43PRy1D91R03x84TkfCkDVV%2B9QDo5EVg6F0rRlA1L2DDtixnKBOshr0Y7FRuAJVN6qcafd%2Bm7aKjBl%2BF5yxpwNGGi3gwBjS8BHgj6yKgJCg%2B3kSSeoLDoze5PLoMjDtlEFv%2F954ch%2B%2BG8ModCLNTgVxietjEXBBUsb9StRf59Y1hKfMUQWIz%2BH6%2FQKY9mipZ0VhqZ2P1dbjEoPH3hSevu%2ByUJLrYNoLX1kCtF8z0uKN5eCOs1CqIKxB8QQBW9yeV0Al4Bam%2FI4oUI9HLjrVyfh5zZORvzQ5PngLa7tODAZhKBHQJBaoD9%2FasQhEa2prPX8m0%2Fr7jD3%2FpTEBjqkAaekGMTOuZrZFCK35limYuqd%2FgGa%2FprdOS7goicLFLqIG%2FbP5MDlx57bd4U2gp%2FvLqSObngwtCzFi9NHujVATY%2BR0B6dgsuh1Vr78IikJ9UYhU5WAijN4V0NGUkmqbtwYi6KbvR8uXI1GQyMC8tFc3te8bfPSVDwYbyRxdf0pl%2FXyQXn1A1eThpQi4NbDZZgjpN7MpLqKkdbq7u2ihu%2Fof8WpLlI&X-Amz-Signature=561f438668fb7def4f22069e3731319ee5700385f2ec9e724c7854a33595d9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
