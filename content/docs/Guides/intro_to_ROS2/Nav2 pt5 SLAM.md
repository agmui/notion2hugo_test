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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=f02150012ab09cdd1be4b9988877e64a979d07b4884c697ba6ecfdfd3adad2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=040abfb39a32c933d9b4c3b8d590960230db57bdeaea9ecf21c1d2128bbe637a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=c4b1ea612b5fe2f0e8d895c4053ce3e945ba52b184a4eebe0597ec87b559790a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=60168ff5377022c72ece6ea46f0366d886ba9cbede802b09a6ad05a891408506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=21f1cece868a77eb7ce819b7230e9b5aca3de435c7386673f1418ece3f2af36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=35911f9aff21f4a30904bd6ee33f14eb584b96cdc5e14f3e174bc1b644617eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=f3d28cf891403760597d7fff4bf3911e2131577282e65995350d10440f0b3cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=174a6341cf17d3016a51f4b377799fcdfc857ab463d1f83be22d201463e3ce40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYTU7G5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDGRxtv4HwehAwBpT6lrab7uW5jKV4g7sVqEBdGtRvTHwIgdGnhO3inY042%2BWvp75hG%2BsEsJ5kbNkSAIOA%2BpkD%2BmpYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG%2FTFhHhHy4i5MKSwyrcA9pFSTGqe5qrxa%2FElT7FzKKZSkcwRqkrutfJthMAgxRx6arJAHTxeAfdILDcGIY%2BIqCm%2FKFr%2BaocZ9jnSYnOPi6RWs1yXNzuSLmD%2FCvaqUxeyjB3nrbDoO%2FuXX6ojpFOV0rWPWas5A9S1EnseEF9qB%2F6HyBuVOmAmqSFF6pGwbiImYVQ647mSoYJQnyz8rjWSEr9ALvqm2A6RW2Vs3O%2BhefL8VAqi1sEEgeW0neeRVXxabZ94xAbYUoKlUKVrOn%2FvqEGbxAlIKHh6FLaLu2XXhuUD69I35wDHv%2FHJO4j23XL7Dw9%2FXmsUtIRdgB0pFPvLmqWwQcZlKWrHE8wGMBPoHelYUy1YVmJwZC8vG10fMEHZOM3Y05IMDzWwqGqg7QnjW%2BIhkdq9mLvdaNi9EaFwBPR9L73LAMMutDof%2Fq8MKigJKHMeT9wjXHbkC%2BhgIpTCwVgKJ74X55duCiGRbjmIv5IyqB35RCmsOWqQJq5w%2BqK6pAcGHDZJlqYCE%2F8q%2FT8LAC%2BTfXUVa%2BEikwX4vyy76%2FR0fOGuC%2FDOCeVrbSTAmjEqNSqEP2ME2rMUfVYlsBtyI0HGs5N6mLq5ibxFYp2UFjRmUV%2FlXftAJjI%2B%2BrvG4ubNtzl4mr9kzK99NY2MJj4i8QGOqUBmEdKIBJbzLPh85I8AXeXLjQypIm%2B77dvffff9BuWuA2adBls5TkaZdLm6WxmbHBmdLJ%2Fzt0%2FUgMhaR%2BO3szzUvdjDCTEL9lmaY4TBDG7LXuoIVV7ebC%2FnisQKZRARNpXokjGm6toK%2F7rCtFZ6uU2A90t%2FQuFr7PitD7lUmn09hI0vZ6nMg2OQTItPY%2FlruxiDxbgJNd%2BpDrkfDBzP0gEZK6v%2F2jk&X-Amz-Signature=e9d80e829dba43c96c8daa45d761e5ee9a1d759d0099fa3761c5572bbcee6977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
