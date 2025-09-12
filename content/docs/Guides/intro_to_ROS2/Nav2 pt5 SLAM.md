---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=0af876a862588bf47028cb51155e5475c45da3b36b89bc1277c0dbeb527cb382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=635782a5287c204f5399dc787e551ffc9973165814d440a14b19152939dbd7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=b6498ceb3c5be34b464668ba9d2fba3e1868f7fcb4b47950a8da1b1c76137352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=ea7e3d5443b5485d65035512cf4adb3e4f673585fe934c339941a41614fdd21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=add0c05933505b29704a094fea2ec42dc671ae16004288fd9543dc122fa4fe49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=a8b55537791a5c55eb1d7dca928c8ca18363051be0000e6e8ec0f1442d45b0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=d18358e814a9a83a57bee9fdff4ba2e141abe0ee2afe3f8ec7be5ae26e45d761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=bf860a397ace88beeafee56ea41a10ab4fc69f7d4eef0831d8272029cc310d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=68678865afa52dacefdc6098ed6f158a488e860ace58da30842ae261709c1f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=0b3281fa1a988bcec05696c1d1107d24f2686ad04bca4de8fb77c8de4cb08c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=a19bb3a2b1ab699b1a3b25af672a47626cf5a5f145708a9292ca28e49e818853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=17334f1d837dd2ad28821a98d335043798df4684cbd7c6c009ab241d4233c244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=6b65185dbd23891283217f681386ad32e1a71b40fa91e3cdf9a6202457e00ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7FQP74%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9fyOb3BACp%2Bacc7hGkhwQInkp5iwLF1y5%2FEGtc8hMgAiEApWyEraDvkbroNAS%2F55rVfYAuex76rUxGgp2hUq425vAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI1UwJtRfxBt7nipbCrcA9DY%2FYPo6LNOpbymYvoXVVKq8m%2B2LNwwxeSgcD00vUI1YAh5uR8EgPXz1655wwh8DXS%2FrcvTSKYqOvQKG21Y0yMdpnWJfed2OI%2FJpEy2FiyKm1SVaQdVJ7df21NBug2IcI90ryjOtjjzf60ClMz%2FHqIx95oHvZ9KUPgvaZpPAOjkHuTiFWJq8b%2FfwHGTROQBsS4Kcw7PNh0x7k8faJTwDS2uqfvjAe7kJz7eIVIg3cEYV22C8ZMpjBFczu8es0HMiQVWNelNl58wMrbY6632pTdXy3sEv44kawjHqqm2BbyjqFR4QILVm210A2QarQIwl%2BRC7IT%2BtCvDnwP%2B7BERv%2BdRAN%2Fsv%2BcrBgD0Ck%2F4mgPgW1TTH36hMaIqGp6YqPDimYYaZBp9JAPEggpjPKEN2UmPdCFh4qMRjLHuC0bsjrneXSipCNS6yaaJmukuVPRWQzcmtktC0GmvxAgnCCEewjuJm5hlNLGQEbqw3nKF%2BzqZvAqrxFMZR5P%2BuXdXrgdHLBknDj%2FckpSbNoCUhCPDopDJ%2FXJoj8RJLfIUzTIczNXe2WCNH%2FAV5kTw9MZtoWfC25TwDOK4WUmLaF%2FzIjBB1lZ6GVjIIXO%2FNqqE1Yy5lHDIWdeRMhx7hd7u8TBpMMrQjcYGOqUBpZR7rO3JvPI1FM7MbjZb%2BSLZneOMJ9sgX7q43ionlms0THNk3ZmYlQGov%2Be8UdkjzoyaH%2BrAnyoQ%2Fmv6VTFOw3axE2rcV3g4LbJIn%2BKGitBw806psf%2BYdOzKVV2RN4pgzVhse%2F9%2FQkyVpgnYS7S58sbYsAH9HO2DhOc9RcPPqj%2FFM7AudkPpwAC2rxoHqEKbNnlc1d3n9lV3wgryGtMzBzNn7Q%2F7&X-Amz-Signature=7337f296fc72ca636850908b9bfe1dc6a6c24d546f1d95e8b1c54d420dec905f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
