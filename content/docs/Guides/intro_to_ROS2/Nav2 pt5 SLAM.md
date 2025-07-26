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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=b11600014dd363de5ef2d3810ed032be2173349071d570296faab5c93c41b6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=9f42f3ba60cdbe23cbcf161233a1a370dba04024c216cb0011dcdc37b8d64f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=7013bdfe3d63e17dd852cba2c137ebfe26ff1aa565d358fa4fda03317c670308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=47db1648f3c4ad4023c390b3fb6f9c395bfdb87d95e463d6cfec4752ede5e8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=4ac2187d4ebc2172a7802a2ac286d5b09b934b47bde3ff8a5450a02c034216f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=92673cc5a53637e66bc185a08b71a4aebdb3a4e657f885d8e0a3c8847209637c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=3bd81da559979399e3b0645a31f9eb208bfcd14a0d71410299231732fdb97639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=90b94402ab1dc804880d66f1e0a55fc9afdae71d864ec565f17bf34efbb74874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6STP635%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnX6UF4G8iLn3mFwbqVZdkwtk8ZMaTUs0YxhEGnSB5uAiEAly8TfpIZZ4kEyP6z0XLJNygKv%2FO9QrUGNsP70W6a5Voq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHe1S9fQbo4uy13tDCrcAy0T3wL11PcBRUYifVNYipYwnY6r4ge2RjlhghAqOY0y1ZUx1vx12xFys9MjIRNOLeg9NYCjZVFADmvtJl8TdRKLHK8N0RxrYcNMw%2BLc0pVxl5UEAFCEOSVm2b1b46BuIl5btRHQi40yb2VBiTst64OaJ1SW4RRggT%2FdDqcUMTYmCle0Pz65p9JRV9fiLJ8p%2BrGVptLppaxaHkUlPt5TzMJMQk6MPMyFnHHP8ZpFHahzjVWoSX7JC0VyBy6oggfpGY32TytHHEYTs43YgBb3CkCIXRVqz7tr8%2FeQOJ%2BQTBZ2IqKm7Rv910NlmZ0kWq4Fih7xLgr7KxRe3NrjrOt%2BreVxvsDl7Wf8tF6HtjHuBOykCHDLx%2F6mqgzg%2By8V9PJ%2FzKZLUcuObCikYVWHlSyze%2Fczcs9449YDjnTdFQhzvKN%2FPybwlRj5INgD5srzynL%2ByHhBJWp%2BM%2BFlIJHp4IYgDptv4nuN2ZhuxPwCVKqRbfHAUlNhkhw7Kayko5TYGGFVgdNCB2RRkUeinesbBkNwfZEQ818qHl8pSD%2FmA9ZV66nLz%2FH%2FukoJI1eXmKo428GfQLbaxyEGQGykwfGXtxMYWcwciyxVjs9p%2BBQkmANj7LQxx2CdLC%2FZRVPXKQbBMMLikcQGOqUB0ucDaQJivV4sE1jnBgCrpZj%2F6ToCAMkWWT3r72ribE%2BHMqXAH9nwKVJw%2BvSMrE4aMyeajtAWFsjAXGSaGWbps0YWTyAAyCKW02lF1%2FUy7Hr3c2IsjKdc6szMHoT9Tn%2BIhA0TPyWsFe0CTnFXPcfgYzuaioSoCKz%2BGsa%2F6sMWIAyqTHamdUWmozAZy5pcdNEQrI7kKzT3txNp12FrNtSd8jkmz9MT&X-Amz-Signature=649b2e1722bfd805fbba517ecbbf490591b27e539a56e23963980625cc521911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
