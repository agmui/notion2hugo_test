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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=cb4d04fda22998277a620273faabe1b7c7b3b5da64229c7666c6002c3e80cc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=4e445ab5976280095483199d25ec2bb670e19212ae3fd96cbc576f22b9be488b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=ffd62b150d800d7d6148d282e433643136c044d631080ab051c9f10cda2ddd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=236d4ab35f2f4e349d657ee97c708e0d98d906947a2b05d6ae6b4079e412b335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=be097dad15cf03a0dc8d12f5f1667fdaa265452d7ada1c10eeb0a9d83ba23043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=68d57dc0d613e9389904ec05c8f333d594b84d4d04510c9a7219811dd835ecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=3fc21453f5b74ddca86073f1225d2801cecad25b6d35da7a961fc459e64532a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=f685d88d32cb74d1c09ded8c7d909ad24261414f2f9c96bbef34b10257c02d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=b4383083ced4e597bc484c6dea6fa71a9f4c9cbf640e693d9e8b7db277b04e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
