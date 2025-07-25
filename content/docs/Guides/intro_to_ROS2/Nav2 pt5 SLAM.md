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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=ae412af8b7b841460b5f783e0f001b6913925500ab871b4542117cc544bd06bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=aca041f164e79bfd8e354a3f3ea95eda1d644a684fb55b2bd7b6291b770c359b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=8b13c29fc1ae0e95c681329bc315a090170354d2938d6c8a4feb85610fe0b3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=24f3b2161b00c61d591fcb146e86bec72724d009dfe3e82f69f0adf75d3a2aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=51dde20bae6b38637fd3010a96edceee62c80323d6d2126f93939e7426cea175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=024cadb0ad39aea91e911153881a919b6c339e56e9c1668904cc2f094fb51d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=851905e982dcc8a1fa166db85c83829f69fcf61c23b9da1601133d2222fa0583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=f06bd5730cfa0149a04ec8d5a8bd799ad2c69853ee945476a2781d5e5d5094d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4WP5TN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7NkobZ9FoPduyFCLkwRpRGacB2B6uf%2FMt%2BrSBpuWrJgIhALSnDvDdfgiQWrlpi6k%2BgYVHUWaOojlANvL2N37Yb5%2BMKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrNlz8c3WOOq0yhWYq3APTQ2HXWET9kNYJ%2BmSBsW03U%2FzSzwVRs14BchW9lSLyvjFhGLsGdqXL1ABLyJEeal70bUwPVIjzFRPAft%2Fu84M4Jkr%2FcI%2BAgRIIDxN8ONP3kSbTuC8hcnZKEL%2BOtkpt6sIQKzzsrJXL2cIxGAmYc9ryVnknx%2FU6SU2QyqMxLcyAP1gL9yZxH93%2BMVrbNF4yri5teh8jF%2BVCcdXjf1fBaUfbi4ucBc%2FCTvNt2KAeyelEhsxrVZKDqOvk%2FTilhXqUwjJ%2Bb2an5mtBR43ypHn6H0CMp%2Fafs6%2F4CKGA8KH9ltSOaf%2FFxu9utl4M2%2FNcdrqvyZLcjoQNpQz2uK792%2BTX9gjvcHjRz59ZAMKw3GpqqyNiJjKI5E9y6FFrbtXrI0SxshyuJ6F1ebqKRPjE%2BCLQVAHQFdjx97N9RIEtXGVrLFuAAstZiy4jqCJ3azGfGs7gd%2BE549ysc9wcWdgKoWktsZA591bVZtECT4nzCSGMTs6IuN%2FO4MIYUwegVa64KmkZRkMfLOdVrpXCBsaHXraymsTrmrjtI2K07XOWPlECFbK9%2B1HRrXKC7%2BeNkf0BqyEUgZEHFBdzmyGQyGf4kuj04lM%2FmeGAvKOj8hLLB0MrqsgYm7LkIato%2F1A63BhjBDC90Y%2FEBjqkAYmY3U9tkkRsoEDngD%2FL1uCILk2UkiTVZ8HJHMjnMUwSw%2BEr0l7lNv5gnaYPF4IAXI8WD8NyXTNwLZluDLrK0AovEaB97lIfM2qam1eFhAegO2gDzA7Zf4s7w7TKDRZvUljMGcJUSXcdKy698YnQuNx%2Fr7yJGjrqeYL%2FbUyfhHfoHCMk2%2FGh4W9EUnhqdGHu5GzOa7azvBvHa%2F9wcVrTNFj8hG8O&X-Amz-Signature=6cc723887239ef5650e9b91e57857db88b1b2494b95b481af3c392922eb156bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
