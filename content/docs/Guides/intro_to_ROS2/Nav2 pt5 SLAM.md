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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=0cc9cf82247636dc54706647b12b2ed88a8491d1854e63e4cc6275ab8bc532e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=cd81d41d276e2109b2756165b6cd16ddeffa0aedb6c51e91c8fa384e0f7ac290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=893df990868115bd4df9f7b63418df6c08c42b134c5d03f3495a3a51fc82957d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=7385bfe1c9eba211dc26792107c1ba808d6f081c797fd3f89b407dce9c57aea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=e1ca50988e95a37b51abeff1506a5065e719e8c34df4a4b465622a82674f8730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=1da556b1ae7a678195a5f58716c2b741e24c65a9c51a464afc218c9702c0ef20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=78b843bb007f6fe254e3f92c5c5563beee3ffae42ac754c91e2a7843be5f9910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=96c1032246c9752f732f29f3aaf1d92c54634d209e07e844e94119db7fdc413b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7QEGOE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHiNgIAekL5eTEb58ewS59j0PUAvTDdNvCdpKKje%2FYNHAiAMLo6AjBk8x70ODEkACcQSWjQmZi0wIKXqLj%2FKt427rSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMamM8JZwxXpQj9hPkKtwDwb8sHH3ENAQFLijK3n0HcjWK6FKg9YQn2fo%2FMHXeRp4mSaTATIbcbMoUG614T4J%2BxJTXCPJaFHiD2tdXElAQxNcbPzJT50YEP1mbaenE1IEeMXAJuHGCLdIg6Tc1O8f6ZxJD7ZTxgHfKernBz0I6yytmd%2BJwZk4j%2B%2FbWZkNVbzGdYZAEjqlqWNrdcKj55HxN%2BuN%2FGSidBxC3ljGhmwSGzplydg23MzGfCUPCjuJ6S6agHr3b8T7fvu5v5sJSsQr6tvw5lsEsYBv0MZ5PoUIpGs60HjFHh%2BldqpP%2FaPxm5esKQvMDBy%2F7YB08pOOI%2B4Te4m7wkqpkAsyyPKfjgdgLNOZ%2FxHQihKYcwTLZxjeTs4xAJH8zQUC%2FeKnF%2BJeOJRHgkGJk1kBV0YfHTwSSzBqsz%2BopFpBIoDtVfqlKuFx7T%2F%2FXPWHhD1E4DJBxSW5texM0QFMrr%2FpFQT4eSwR5JFU0kYcXeStWq5HD3%2FhkCy64bgQ%2BtQcshJVhWUkEkr7lotoR16kD7AFg%2BiuucedUU1AQLchFniGLU%2BbBOcH9Gg6Cg7eGzq1QOsBmH0fa7rdWkeN3HgsaGJz9BjGFHOpeTiDtEkdV1P2A9%2FnRNKtCfQ3Lz8uJkyRlzShPpsbriBYw9JyMxAY6pgEXwsu4OHq8vZTocSHOGYKllJIJeRP2APrCGEK7h2Yu4jdyU3lT8Ocj8mq4rGZk2AMsmQ%2FLbD0%2BGkk6%2Bd%2F4JlzdjE8EVYi0sTUHE9olOEDB869ExfBNOH3uqEdpanxUcV6rXhBcVFPe42v6j2uaueRW2QKFsHoJfLOMzDfVury8l8GFI%2Fc%2BsN7C9d1WKdZdWZKpDXemKaoZ6ikMfh68UYHYdTtTrPYb&X-Amz-Signature=e6a7049c704acbc525884c6aacc80830d9a3cc610e680cea8619cc2df29d529d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
