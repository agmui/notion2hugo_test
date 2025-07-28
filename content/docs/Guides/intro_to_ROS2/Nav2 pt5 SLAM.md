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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=fc719543d6b684bb10e773a2fdd9436bbe49ff594d5157a520b65bed442d6a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=d3080f13eb466244bf031ca1c4eb4ef077914814490f30f31aec1a95f1ebfe5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=fc87e51a6f46f46303494314125efc9f0419ebb53fbe3af9a2dc756637adc4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=b93c12cde74a48c434f2a2319906ef8d9669bd83b69b3a3dc88fecf8781e3673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=4bad47112659045b2fe9b3afddd22ab5aa4862a937e074ffb0ae19f5bb33e083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=ea9d1a7f1907411e6595a21f9c6d7f8e96fe5d7a44d9d7e743ca9c1e3fb709ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=80809188f32a6f14b11bfaefea153af0a2103b4e64d226e84d251807f2936903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=433652dc01e2209947e9f121e1c8aec08ade177aca76f177340b95aac342e0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLOX25P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAFhOT%2FEtnLucNVnJ4BS53g2NTrQgLMGHt8YjEJPvRCRAiBGAa7%2FTx9KYQFnpqGElNSOj7Dn4pJE8Gse%2BsDDXpiuKCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0rOHnEurT8WwIPXyKtwDzcZHorGOmNMm2U7imXSlCfIfHj3IUUoxz6exlK3cLjgxUrfTiph17oPiyA8yvy692jyODoGeM4HgBwEsUzUcjZ4D1z9q%2B%2BA%2BbxWzPANCzodp4mAW9GlXY67fhCtaCFvpG9ijAvk0x%2BHWaFtQuiJ4mKCz9p6r6NvLeGPK1jin7QxlMx3Xl4aXqyUIWOEUYcY0AQfWe8MQ9mhx5L8kB2WIXjQapwFsPUfneWBl0bS3xbp8Tah2aaZ46EzDPysEsPPHU3PC3acLMynppLu6sGhMoJwZcTKbB4kF2Q1mc5FXSp6lRe1fy%2FR%2BPhuniXbGlOgFXrEdAXZ1R1Gr32FtEBC%2FD9gZw0k13xW7EZjVmGY6iAvuuLwafX1mHVPBQx6nRch5KRTkMtjrJPEnpLiW%2BalfMHpxec336tw3AXbZIfl%2BhRv9%2BopXnkVgoecW0uROMk64JE4X44o04stKvB5Fzzp8NIGBv1jQZCdWjga6VchQPEtNDqxGj3eCmaNy%2BND9V5NqnJ%2BUjqwtIowJH2zyq6OWn3GbIavCpdN%2Bzx8G9kZ1Ag2t8cx4d2oy4N6eWmRCzLvIAY2cva9lHPjkiqqLXmw3qLKciFNYlrH7E6usUrUA%2B87D2UZP%2BgV9Fulvv2YwyZObxAY6pgH9e%2B8SAO4CoiyTwgHgakITWjeQheLHy%2FVHLNTpNXGEqut0q90RLOpoFE4cfgKNPmZU%2B%2FzYGegMfzmq7qAM%2B1NGBvYwzAA1Bay1CPWP5Mdn1ol36tNWdMsI5aPRcYDiDOB3mbT20rsPW0Rz51vw%2BmulVnCB9o%2FVb9YIbTTv7G2FX8fFDYf6F%2FO2eugZ43x27Kp6eb%2FMyAmD5odneovwhW8sMX1ylPvU&X-Amz-Signature=1717fcd57ee70a3347b34d937f46bf5612b2ecb616352e2c0fa51dac6ccc501f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
