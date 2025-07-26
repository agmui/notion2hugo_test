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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=cd0cf06cd20421e09de90e250aca1dd7773606cb52c90dcd69b880fc704550cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=3a39c7640029084dff9bd180acd685fa57175a4c09c7a8675041a58a5582b4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=f7bfee54e0e88847c9d23e066f2784ececcb3881a915933886089c26a6a39be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=12009cf7133a16d5badc7392f2acdc869a918fa778b4aae2044c387a5ed9f545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=23ba6ea453fabcb9fcfd6670fe6a9d09b454f7b676d70522b7d6ce0c7a57b6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=1ef87e7ebca0a1ee2a363501059dc732724c47199f15b6125bf3b4542704053e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=47c2daf96397bcb69cc8d884a26dcbee81296d7dacff1c18b3f0d050609c6da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=6801bcc54c5b77bd76f972b065794de4a0e652b4bc52707e679079090d3da025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32Z4465%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAKOZ%2FU3v6Qmy%2B20rO7HjPRLEIezO2rYNyr6RHdW4mAfAiEApRYrLQGLekiKKk8%2B400emjQs%2F6siy8yVXHbXIA7xbicq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNU0F9Vl7pmijaOOQSrcA9VoqBMh4gJxSDKxBlp1MC44WnhGcJzmZv7dwD6V%2BuV2Qkd34lg0uYUoug5tA%2FU%2FJdULaje%2BsSPD3ttSyiTGA7RQ0D7fAq4ls%2BSvG3KRJUPvDAriVaq0Xfso7Yfmb3FLxG7dlAqg4FxwDbFRMVO0y5Y5qmy5%2BspCRd2jBJ1pvCBWBDevkeH%2BDdAfzc8zrd2m32Xs3fArqskf4nz9ZB853dpcwblFG1p%2BN4qXW3eMJ5MrcbpN2Sm3OA1EZXTk%2FTmstnmCbpJaQ8uVIYfJRbmU7O%2BkeYIlCrH16WXdYZ9A2hP8hfqVrCDXsMh50MEIGpjdsFgQlZ7SLvXA%2BJye7hEugiqjv6uY1gyqSv3Znh2W9sQQIHPoFOaAqqkqb3oxvmoAYIhE0F84paGZpj3jRcqs91x9snBHOYU8beM9bqfBROXb%2BGSBoyzGO7POajLSepHc8%2BYNVnk0hWkoouXpCitMINt5K3xbc4wt9x1vdT1K6UQq1I1G%2FHnIweTsFQtlN%2FcuScaBS8v9lnTAhn0x9lNLM3%2Bl1lKblaMMkZ0aD5zYkjn%2FnOEWbXNZRZWUgFLaAuRiiIb47T3Rvfywv0P0BLwLlJWh1fbFETTNHSMrWD3BRiX9RWxJJWpUfpr6mGJPMJH%2FlMQGOqUBfLKEiti6KWVmhq4RZuXItXPzsex2Jm5%2B9DpMGzdTgxsGPI5YblNt7EJrHrXYNA3d18F0H5GX1bMQRxxFgKjdACz8KyRMG3QsmrTigXY7uatpH%2B4oH1BI%2FAqLwxNylLAFW5%2F%2FRl4MPUbXMF06HLtjh8pw0H2%2FqgO1fih6I%2F6Y5I5aoREiROxYYr8rDb2S%2BPxogiDh86JsvrB3rqQ3N1GLR%2FNnws0s&X-Amz-Signature=a920dc22494dd01c4b7557c69a2748ba7e303ae4b7e27a3798f51ff15834553f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
