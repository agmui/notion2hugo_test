---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:35:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=7b0e6f4adf7c8387a46bbd1d400baa9b485c955b7868d2a9c05ccf9cd798c2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=83837f3c6b84a8da268414cd300c1e90a051b43b09e5358b580edad38c6464e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=6cca48e02d0111cc8b66878ffb09328a31b2d765dc6a011792fcb40f0f45bb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=e723fcf23fbca2f9fa1333797ea78f3d5146e02cc928d6d424e212ebe93b7f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=0b354b931604b069552e0bbae486631faaad4e0d09e81ea231d9ed7850790721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=ebdd7c1abf883cb5cacb79e731fd65e0478692ddb30ad6c89471e010eed85b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=bda7fa46f11ac9340c42fcbc991912b0df10132df161097995dc67dd5dd5667b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=6b8d987a430cb17545c37299a51ffd55f28bf3f1c08361e33441cb2b2f1dfb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBF7NFF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDBIU01EBmkrfUAVovGRq%2BLHHNXdcU4J1S%2F%2BiAihGgWnAiEA%2Bs9w0lMjOA30tO4gKvwASTWwbfPC3WYuTtBmo9lZ1goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI%2F8RqOU65QCSWgHySrcAyZy8fgJ1DQuSa198bC5nmF8oEicR7hl%2FAJXF4Xcn2cJjmNuUI6yGTinRK106mYjaony4gC8YilHGinO42iNSkLyU6PIqt2KXCf64EOq4cJJuqFzd6SJXl8VTYwH3J2KoTp1sU5KovAMQp9JoJ8qNoWwqlJNOFQLOANvEKY04Nknw6MP6cKKJFVBFn%2F5Teza%2BztnszWBlIVdRcl79kSTFDoPRuwQx8FdERVF%2FRdSTOeNK91htBn8acYKuBIuCPakt82a60nTHwdT6TMffYEyLro5twcCbu1fM1I3vt0oxYvdwpe8sVM%2BZ7LCRG0%2FrNxrCO3olfjT1RAS4AIey5u8rZhfLTXkJaIZjqJLCJCzBdgOgIsZFj8LHfnrRfJwZM7ZVzQk9cMAwy40oVDsO8%2FH8olh%2BvDKbFTVSy2idVnC8UcvtqDy72ArQII5Mkc%2FY496bZoOQv1Fk1IiMpvyVOw4CmgOxnr7XrTuA7bPxUphLdScuQvVEDpShg5QeexLLRfxSsyFQ23GTVfKxbHPNp7WQf%2FPOv3pBILWP6dzgTl0DawUffrOx5QJ2EE23gV0FQw9maC6DFcqgAy4aS62hELLSpmeRDloCW4JUn8dksmyX3tVEUevi9p4js%2Bq5Z7XMJuPisQGOqUBdzSpH9walFQglap0srfLsumzPgKMONQx0dteAASaHJ6YbwQ9pj01WbghnLpP3CYZI4OUpoglIF5MkAZd4vNFiM2p8Mk0z%2Br4RVft7TELam4Fq2lMyn%2Fqfd%2Fwk13AeFU62biEpMShi97tjhPAVFyKlOesuysgFq%2BxY91ewSHH8Zw35RWYPPPxbEzJpuxx6KPZt9qzV8s6PAl4UmRwV4IJRA6%2BtMme&X-Amz-Signature=a672f3451ee2b3b37c490a4c5e1fcd5b42c10586c13520d673494bcb6ca4d4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
