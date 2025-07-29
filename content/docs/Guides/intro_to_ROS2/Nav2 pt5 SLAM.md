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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=424047c9a59f468a7dda3c0b9385c9f12c5f568df8e826fe5c9b9c201a314c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=410fb3211e4e50faf8db1c353210d871895289e028f5bde706645ab4a231d3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=1b83c657fb5d028e5a2ff305f1ddc87e7ebac47cc771e1454da01202c3264335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=edfc103494411fa80d8ebc58727309bebcb90123b0ad6e8461f8c25a4d45999f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=a757993afeeb9768b1a56ec934c0f02f0fd2d4ab04d76ca43a8bfec2989a7d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=09e159dca0fd57a57376ec7bbe909cfe1baf00b6733ec895d2834bf56e660861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=ba627f978f23eb7b710be984cde4ae81b34c3c9cecbed20836c912217ced3204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=814ab0be8f08fd4ef79bfadd51b1d65dfcf436141bf43fb1dc5b98cd48624488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMJRNS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCkuwaJaae5ed%2BhsO5W92kkvYTexh1m6YLCYaKOMst%2FJwIgdYmOyrciPul17TMh16FYzdk441%2BNveNdjJUUskzVVz8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtDu4mh3vbT1Ooz5CrcA8GkJgdU%2B%2Fc7FOYTahQmFY67Xq6JVzx%2BU4A%2BwkD1XBiOsAhiHxpGvy1BrtLYKfapCbjTen5PEDbpZMNMjN868ey1%2BFdjlCGWkUe%2BSllJUpGy8xhKgdjVJRe3i%2BfFdKzBQl%2FYzeq8DseypkkqWhgwQ03hvTUzJSGaeOrCgZkU7g5iQNvjeZedmVAQeCnV70wksYv%2BAZetwg0X04iKaxPe7IsnoeVgn9DybJr2Buove6dhe6SfdDm%2FBlBkoFn9gaR%2FnKEuW5xHfj3DXH0tTTP7ir1A8%2FvFY8zlF7SoYfl43eRwGj4Jsh8LDP%2B3Iu5P%2BWxk9zOeXrTADiM4cW2zU1WFfrOtkg1WQnnCLrv4ZHamHw4cb9EKBxYMzi1SaKLTf9a6aFcfbCxUKIkTqDHAn1iqIZNUf33icUVFCoaUrNvwnFrNwER1YABKrqoUybmW66ktan43zfGJT%2B5jeWRiWsFhdcc773qg3isCGuNXqHrrp7VbC5zKkOr2ik4J2Xw1gd%2Faf86R0uUf28hZV4NyGL1vy4fxOdfRKvm%2FxQROdscuVTtdXDXrrKQFYfiQBxQ8lG0EsT5wSVrxfuf%2BuT4hdhITElIPGkQrfWVDNfbFc1mNYU1xiqAJzMlAUUQk0PBgMKOfoMQGOqUBAK12m2R%2FMEHeCCmCGlGVFlj88rIl0wAkZ0SVs6GhxBj2CiaobwwexDQ03PIprkCCDip%2FSXt5XSedB94M9OwXPNqlz%2B8mn0BZnWkPtwEsHWN9OzbJA1uTefXGn60HAoraaUfZeTByzNhM6x5qA%2BIyWaaG%2FV4L2H9Np0att40Im8Nb01G%2BgoZFzhC%2FNbwkb3lHSRet0h0ZYRcUE4YuIYHvtJKhgUNr&X-Amz-Signature=68504918402cac8d36e02ead0c00df7829b5556fc3eef1fd9a5c1a0169d841b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
