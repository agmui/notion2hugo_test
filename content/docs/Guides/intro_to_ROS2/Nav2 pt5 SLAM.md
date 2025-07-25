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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=43f21cfef018d572607922a8e35c0bdcc6f9f749daf0fa2119f34659a36e6a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=590c0914f417058cdf063778cdc341a34103a4e6faadeb88c0bda9add75f0c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=079358960c170c2dcdfb244cd59ccb7e734edfdef971e2aa5e72ba8866d5f332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=3802a29cd5c1607f7fdea4bb8236adb9d980b07a91c4c59edadac1ce31c6c965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=570ebebddd0f9081cdc457daf4d5a31ec32b44c7c48d94cc1b017fe58a18cf7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=5e8bc61cb047b6ca3cfeb57eb88809aeb31faeb7f61c831541c32eafe3cad7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=e23388b955031980c646c47cbce3670055596b6a6139be175c2c0c3f015d33ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=7c1b9e7d1db097f8251b502d3ef9481abbd32d1b12b81b9b707540474735fdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ6ADNR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB4icRx1D8Y364izOZYhyd7qE6FESpljuEOqrodOGBq4AiAzzm47R0%2FU6vzxbpQtPnjAtiwxlNJLQLECOpsKAjHDqCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKVdRlWbgMVpZL5oKtwDty4kn7UU0lSpnj7DJWlVwiarYmCfH686Dm2j1CwVTL%2Bqi86ym3IWA0%2B4p%2FKgW3IeFgjklr7Fp3JWG%2F%2FhzUMzims3Rn13PuHo3IYyVWJF1yfKOY8Okfs127%2B5VRLjsbfWv19Y5E5mCM%2BeQ1THysWI%2Fa96qM8GU4nsIdmKAO3AdAJXruRjMYWo8CJAy3hWHeLiHnyepN%2FBqqxOYEpOdbzYY9Z%2BucfpVG0ZfPJGG2jHPLZ01ESZyCK7UP%2BUVKV%2B%2Byskwa4Sb8rMOmwRFyyPi2fTkitHZV5kv%2BXt8wYO3Lo%2FevGiV%2FGRS29rRniDhqZvDP5B3MH9jwo8HT2NhnGdEph4aWrHKigoKh5reiPpb57QhN9fpwTKvhTtTaRp%2BkO6M%2FlyqJUz%2BlBvq2hJunuMmofIv0HwcUVhVMEQmRBT%2BXdyCCCNiUAJUXnry6%2FBDkfdcIbFb00jjhWeYbJB46W%2Fo06g5zxmnn0Y1p9fK60Vd4zZ5Co5lSdA1w4Ch%2FduBqBFdUTxRTKSBYx7yVGd6Xn5kB2LWtLVgA%2B4EyhVyvge8OnyZwYRfwE5BKVG%2BKxW6MfI2rIew9w25%2BWKln7O0LAPZxyL2rwR%2Bq663S9ass%2BRtIl4yK7ZSGkH6FMqfSg9v%2BgwtoeOxAY6pgGiItKrqQ1SP51j0ckzCgMnBg7CcyxYhZlEE4VWuqdzsENA0jIdBJOiyqWG1AzI75PbXxoN5%2FJbNpKo1If9cObuNPCImO9cmQib3IeNFGBOpYiTaQzH8OSihVHFSfyi5luqYZ02ePhjjqovCal5rIro%2BZfC10IdxHqztRX5LA8y4GtfSIEXeXI77NKctouwlIdc4jw076Nbt09zkx8ZAjmzfQE3Lywt&X-Amz-Signature=af2c82c01b7fcaca4f8194a365bc338aa5954b21bfca74c7852b2a545f623837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
