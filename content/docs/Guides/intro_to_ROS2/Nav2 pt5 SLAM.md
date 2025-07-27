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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=cf24751049c0fc7b8b7e34dc731ffcb5c37bc1716f6faef5f21c630ef0466271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=71bfc04f05c11216f65023e5a7d2ac55167acce01bc52a1cb7cc82956beaf8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=2e6094a1ca3d719f93315d962dc25e1e40ced7decb6cece7f93298aa8fcc7b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=73cdbab50aa319e64997f607f80bc997c2381abdbaabf34db2efe181e7de551f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=acf1f9b95acbcf17f83bfae31ec9a757b11219909c68c194389ccb4e5e74db4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=befabd5ae7276abea79f6a5a0d3fccea34742b3eb0720da749d24e6d5f2fc946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=5ea4831077e40f754b5240088376a71fb5b36b463e1607284c86fd5f397de991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=2421468ab372effd027e3f8dfb1fa14487c16c3ad1e267c681af719dc0979bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYMMPCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDnpuqYq2gHxUxzExUfbKbmovOpdk7Hxxnl%2FYGpEUQyuAIhANiHKWmruGJQZLPdLsGSEIV3yri%2B8OnNcIxUeq5V4FMrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyBZ6ZVYM55gQGPwv4q3APMSaQ9q%2FAQDg%2BLHStvpJhWrNT%2FQP%2BEBbaY0MSfA4uOY2gKDHg8slNTLdFSizGl%2Bss6o62b6K2j%2B%2FnP2mX2U8oCgYRhtGpkronYCealb9R67ZBB5V7JmKi8E2iWQkt5fS2dsFrPr9Rilg%2BKFpVfZMp0%2FJ4m4tncemjemPsi7ItiOEqww7pfg6%2FOMX4JGTCHTP22IyeFkHFvoEpAER2w1j1mSdQ6YTmUDOlBwWcttplVS8jWZXAlztOT5IFJLpCL3VvNR4wZ2ROz41VYAEuh58Qa8g9LZ7u3DTrOpwzrpLANRQeo1ormqPjVlTlvPBCK0p%2BY%2Bqm%2FXFjD7tMqzYhX9OFaRnMaTxy2nAu9i1juCTRiNicWywlKuRyXb4XPErUPR7%2FEGtzFXkV9ZzYSPDXJz7gA0nZdCmmYrIjtXMoIyxMwc3lRCTiHu3RSsaG4I7ZIi0IWogBra8Vo%2B5HL3Ronw1OrkoeOfUrLHBakRrTN%2BBXMq6piHspeLd%2BtBety%2F4RJqf2OJBkDUeZNnY97zZtlhVA8P0cqeMm0gCISHyEXspm8vuDRakbMWJCKBav4N41n6gfUneo1HG6PAjqRRCVSxpXXb%2BpntiRk2OdLnlbJYV%2FPCczSDaRmYfi0TY4ACDCr1JfEBjqkAd4TvOpZa7KgILeT1oeKX%2Bdx4OzHu5h4NGh7BGkAzne3QOl328zo8J9kaGdwHjCdt6IywII07F0xJxMdvk%2FtksmXBORGNLQnjqoDfJSwv4936ePj6mdXFxOHtYSeUK2F3v%2Blcgn5zZFm0pQje17mbtWlXdNcpz7pRrsaIbOweSRSCsCpHMyA%2FwAl3MwWmICg5UxnWOvTq9dh1OPt3nbbeOPe4Abj&X-Amz-Signature=1f5f6273051dbc03f8a64d9a7f0fe1e89a60baa5f58071138b33e970f7260c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
