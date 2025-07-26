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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=94f6ad009db893898cfdb42df437fb294294722b77a0987fdb0bf42f09c39de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=a2ec4c2b69f76f4201b00bde5144695518e20f40dc14cfc9f6b125a3d85a4032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=7dd4b61ef3cad60e1cc9ac360a27739bca0864fd47bb04cab252105269bb1673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=0a30c1bcd5cf9279ce426f9f795ca3c63e4cdf22ced184bd355ff8dc7577387b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=b37e5723d8815be5bfa7cd3f633b6c1540c2455f44673c5c53ba1ab468b16171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=22e7b1c40f49f92e620fc07aef9a4b28ab0923c1e30e074ffe07b45d58a17206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=15ecd61e9e4bbeb35cc14d1f2826216199c0234910693e42b562823e366e0b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=9e5309b9c71cafe8b758a3a1e245068348779ff5e3f4315c6cc7fe9647a4444e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICAZU7L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBkyc3SU9QkQtixKn6ey%2FeRx1a9XpGEXuUf2N89tKOsOAiEAoMvuqSJnpTCMWANlNmP6uNb%2Bd3fTZ1xe9SdkgAS4mEUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLrZNw939xEKUMb5ircA8EDCCU2J0w97n35rXXAthXiKFWDROavm1FMPqgECTm1j89qgVOs7PliF5G29Zm%2F0sbmyeR0aaqQ6BtcdE54Aff1wy6GR4AToo4PFZRli9NBQjol7CgfChKXViyRT6zoRt5vaJk2eahU8GSjh1UYyuqPK7pJGBSpBd%2BkexXemRSAEWpC26wlsXqIvDsbdMS2o7NHSSXnDzvXGmzS3TaX7QpMbG6MGntNit8S2nUjzyGII7AWc00mmPTyJWtdvUPDKZXVVp%2FcIjEDzn%2B7JUCVSWHe5gQG50gwGvG6GnAHbLlmZj5A7K71qAyNR%2BCc2SCVyawXTA%2FMgRNdQDZuXHzY4blqfAgm30rf5Rxto9rzJKsIpgVpWzLC%2Ft%2FtZynWyXr%2FMEJ8%2BjbMruPa4WU93jmTtjRx8kZY%2Fe%2FJGgldvELhV5I%2FTBY1OIeWNVHgM6BINwlJyScX%2F2h%2FS5Zhd5vSrNb47CxewIC%2BS%2Fr0HCjZcwKeWVY4%2FRGe0w%2FOkGNNXj07B%2FresGrr8frztLXkxHst1dE8Le6%2Fxf2vIyBk2FOKof7KBzJ033DlbZ%2ByzllycdHrbBrMJDsvGyrxpU%2B%2BF3T3CRANjwJDMRzEcfseXfioC7MW7U%2BXfimnwOf8yY20SqrzMNPskMQGOqUBVGh1IRsA%2FVc2LZAaZHbq5K61BrRvWH3tisHjRjCqAJySSQ540r77BZjzcluWcnt9Lb4Ll9MbIvyIVhgH3ZmVKgD2xCaYBqbRpu3Cad%2BpPfhvMzusZStiDBEMhMxy2Zig2L8QnDgw75a4TxLNoZXGQoBJ1CvXW66mHmi4lHtZe2aZ6A9ehaJv5Nm1xVy0i%2F5jo8qCBzk7Spu9Tf8M2CN%2BsqLobNVj&X-Amz-Signature=497f6be512532c1f662f71d95b362e0d32252e6323b41ecda79e5d17e5099b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
