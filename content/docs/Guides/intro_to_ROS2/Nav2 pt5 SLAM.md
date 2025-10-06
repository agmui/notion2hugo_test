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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=cd3c224a27824ac89dbd4a9b0af885850678982e3a0019e05a581ba074521f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=763a0b12520ff1e4135a333142c0f750ea48bb76f25edd0beef55ec9c6009e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=3744bd4a7fd25e6a16808d593dbdadbb8ebf90557dd6f34ad027ea5ff068be27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=6fa97891b302c1b5975b527bd402870f7149349f76cc97ce45e85d37210e0bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=f0963da6426d509106c4bfd668afb86357e6ceef4be0ab8a66bd933a248911bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=8bf32b208a6fdae1eddbf155debec03bb4122e2ed0dcf8a427826542bdb43bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=6d0a316a396ebccd3252781d4dd79ffae73f1605abea4a81c856a96798d4f1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=3e963e991265d583b12be7dccb59bb47950b7a80c10c24688f456aaff0c8ad3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=466057f4d6de04bf064563b491463b88215ebbeaebffb99c08f84502a4116234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=7ca4e1ae1d498763306b5586956de38a9390d9b7e6a5ead832e36303a10d3a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=96f857226fe8984556b8a70c7e73cba90ee5a47ab9607fce25e510bca1162f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=dd1cb9181a31ba4f7f6584c2c2a7cb99029fecbd863d561992f0305b00e9d7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=e5b8916d391e14e40c243c626e63764374460a840e6c956b7922813ead87653b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB4MBCO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC86lbVUNGJMi60v3J0CYhTPvRXwtuzdbljF1IXR5IhTgIhAO5vjyLtUSbnQwHtcIXF2kxlYw4RXUnzu884tXm8v%2BkjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDOpuahhh2IwWdWigq3AOSI7O3pylwjQlLPvJl4%2BrD1M5uoLotSp4EXHb9EbEWgvbpWWQwelr5O07iiOHPnDg1NpkcUfyGlKm%2BU6mK8rJ0SxkpPPdJj5pgrsYE8feT%2B1dLWSVBF1v9WDFyHhzvhXFx39k%2Bdq0ebvzN9nLWUIX6fpXwSWALAGeVr9xGhQjbc7OcMUFDHYW8L3sXtKnADbyf%2FPGCe9mNeTbVxG%2FABFS3sJeULBLkT516tkbOrT6gXRIRepbmQEXb6njZ%2FtF1VaEIwsJbGBJEuxGwpTBW%2Bub6%2Bw0pKoCsKmBQQK1YTPnSQp1vf8yKTR8nHi1ibkXiJCIBegEQuoN%2FY5K1%2Fc55FpfUTVA49A9cJk5QBhGvhGRiWj%2FRnZdmijsFw7liyitgFrlRcuuefaoCUcTn5blvGu67xd3yxDMRxRoZcskAfN1EUSoUFX0LZ5SqnWz%2F2SxNgspS7IiuraT5SAvD3lfpv85Tk4WGoj2M%2Ffuik%2FGT525TG5kodiMqUskt0%2F%2FAgK6yNyojDhVkKd64Mc86ssGcaTVL8Exe7pmFZu9%2FJNk%2FVzXqB4CMeWgBdWL0zad0zTcdYMEV4L2%2FHo2i%2BM2t0107RjoF1%2FtWrP6u8BGZLveM5jjJqT5GqiM9a11arf30WjCOlozHBjqkAW33flqu29C%2FuvhJg0%2FlRqvb3srsw5ZNOOHsR%2Fx9w8%2FVj5JMvKoeUtomrUsabA4frg2EGFHUZ8rL19x9Fl0%2B3BwjSSjCzKy1kkIT4HU5itdUtSf0KrXoFedp1bJXlsYEzVMLNRBujnMP43FLq5e0JUhT1aPa4cQsAT4quCuV%2BvQ3hPVj7h2U%2BLNdSRudii2NGvaffAc4DSPSvXyD1fXH5xIowkMj&X-Amz-Signature=78986544d4dfa98f118f4fc5ac0f0afc1c38ddf787b5f58e3c79bb5b060ff28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
