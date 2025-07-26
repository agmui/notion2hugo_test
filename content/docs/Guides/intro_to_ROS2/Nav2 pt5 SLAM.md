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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=2273ee9a62aa63a0832e28dffbb807769d6bc992b3ada7614bede7e8b3161dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=c91197a1e03d258ef436dce357359b85f44db57ba16929e7f2e60965a61418ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=edd223dedfa07a11cca5786c482d2dbda11e3df2df1f7c92baf26dd73e92be69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=18453950b1a0bd7881e47957122c3496ce9e2e7167b9f1caa14b1cc649d07056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=1dc8cbd62ba18358807c8c2896cc3195f10097b22b1b9fe95782bbfbe6138755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=6df5ff94235c1331994e60a6fb28234e2cf0b519c3044ddbca812a701894c1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=d1721fafcb13bdbbc25a6a95bdcde9530ef8bbca5e2f08706a7409f44d7a8088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=abea6ca0276e33d4baad95083cddf4678e9cd7afb274f2c98a7614b0bfd5a85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FCK7Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDaa2OY32DEQx7bPlNoMLIkxJadoASaFn43%2BQ%2BQBzjsCwIhAKSTdO62RfyKGb9iw68grwm3vgCg%2Fmw%2Fszd0N9LwqjEeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwuXcx%2B4RP1jUwmB40q3AMUx9k9w0YWZlYTxdNViL0qJcOI%2FjICX3Y221OQ8VMM%2B7SorcM8uc%2BwgVJq29aGFm389qFH7bYirEeqfG06r22OZ0qXRRDnoUIYqVaR%2Fr2XxVK%2FqRxUxA1TBkcTVSGZOBXekaegBnb2gadJN4hSFqG2vXz32BYgPG7901h4kr5WZMqkl7bjt8miBMnduyXPzmWYKLsnmESzDAeYi3KIc%2FryHSPFaGVMsZhZpD94A5LEWGJGxTWAg1q3mzndfzdv9vROuxWrwwal5Kh9fKFFjFVNWxU2o4V99smK67F7Zn9i6voSBE3PCgaWaI1Dr4WDZZpOKX%2F3P3V2PfnJDIsXE%2Bx%2BuNd1ddewaEzB2JC4sGsihxOChbo1uakRtAlIHsfH7Gbk6N4xMb5PW2dFnwtvldOKgkYNrhk4dcqPBskNT%2Fr7Fx8fItF3Bce5QnmjQN395Lbzx32wyDgb6WznLNMosahHQy1G4KbPKP5GBMRGzf5IAzDDeU5VEf2jkKipn%2FitHRXP41Pu5x6CX9E%2FI6DdaCWFodfFKAyYket7u9gbM97g7HHZl4%2F4GJnVTQ6mZq6maHi6nXZOVwRPcFfXRRazJzwr8XjJYDc%2Fd7ljyEj2vaNiB1Kv9rvYnRxeG5IZITC%2BwZPEBjqkAb6oEbKFrA3Soh%2FZUDXP2H9ci4vsVayHD0iqDPmrfNQ5XMARG4Vc8iDmWLaLT3V%2FkUcCb2hmd0C9u%2B%2FwMXFlEEywkSALHUoCq0O6dN4JxHdcfNXcsbPO%2BhpPOJT8cQ8K%2BNLZqBRT6XnZYk%2B9YwVN%2F16yc5X9s9sGDwfykhWi%2FAxZencd4upHaKUjVQz8x82fI8iUazxPyH3Tk81%2FmtctfftDduX3&X-Amz-Signature=b15b7faa4bda3d7e449dda07ab6520a00156713d8654bdb7869a435fb1718606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
