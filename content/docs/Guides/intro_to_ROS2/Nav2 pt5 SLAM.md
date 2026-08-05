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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=e4a5ddeb5b80ca70b220dbdfa7c995c06f7e1804517cb1d7fc531c7d3f3d3ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=fa0c094227fedce720afdcd37c4143845c0a43536d4b8033d39a741fe60994cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=20c25f72935fa317305fb928879f2d5c86d06c72917ce9c0ab3a5fbc4e8a87c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=2a0532bc835d9cb6e55b7b2f82b7697a79c509240e048afc6af588837f0e9c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=456c9f48d6d24f02d6e47ac1e98696b5733abd49e793f32e514bff8c33e3f31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=ae912a68660dbdabf63474b9dc65fd49a60969a0b988e0e6b76751315db82142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=f7670c771d5286c54efbedd8f050e6c7fcd05da2855c53fb70e591a643436b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=a421cb38f9e3d0d4a56261bc61a50809b192b8ff96a2d839749fc0e5260a901b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=593e2d15ba0dfdcaa78b5a7054bce1f77f6e3f3a0e0354442d5d9d7424123e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=ff21f064bf0a8411b54c18e6417609c62f76e92b3ed999f61ddb628f6eaa3854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=be75d0c2e4ae9c70157a250f4a4c6fafcf2b705162951e989f0741ebe519a7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=40b455066925058c5b2963ae9308c7b1ce43d31a45229a0d3de2c2f2958d599b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=27bdc6f4f1d3a496c3976cdf1616e52c239a5c581f6ef36986cdbcd9ea28ba9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFGDAOB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC1XlPLOwuxZZRWZmbziyF38zbQwezdxwK0PQBRjIadsgIgW40IfzQgfpe0wThkuCC3H0gdR9WIiDeAnevdu0Qy5Poq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOS%2FKPkQxS%2FwrZeqUSrcAzUfKcNa4OXlKm6SRFlN3pGD0CAYOLtMYJYUtOYoB4y0Kuoah61bW06HDir5QxErkS%2BS9LzczLA1%2FYbVW%2FQHMrDgFqJa%2BlufOhllMpH5pIHSsVWmkNrrhD2g3A1YeKWh49KnfzCCXb4ZDYbK5b0vHaHxIe59In7bTYkiG9vSyYc%2FBSbTEkFujIBJTTY12Fj3mQ1Y%2FwwdITSEUK%2BKyMgktuipD%2By0XEFD%2FIBZSaQm0nqeQHpORT64c26urnhblL3ldaOCJUwCUzh2USjrtnexKe1vaaG1jlRjaVvCSnQuAJpkxccM8hCzv63NNeXDprkv6L00eBnmMRiVl3r9ZUQWGzYmN2lRqrmpmo1LBRW8A7zethoP%2BUCyXFUdKQTRNrxiaKJ%2FaT1MrpI3h8aB%2BvPytIRUfwGjFHupmEHAUQztSP7%2BaeT%2Bj%2BEttk73tbFOPopsBgrXv8zEDwORf%2B8ls0LFH1Yvxfenq6E3DqC57zyr%2FBqv%2FF2DwxNZO8K4KQA5eIG%2FySYEAcDtUISAkZ5m5j5D6bVNTXLM8dfU4fmSe6N%2FhM5cJnl4Vwm3TcjFTNj3XiNrTh53buuSfnIhdM%2BgS2SXK2Fs1cfzc7tTIASpVhfW5H1UusP8dVyY2Gz40FKjMJWVytMGOqUB71zNd7iMZgWM6cmu0gptyeVxiV%2BhIufq4i0srfA6Q23DTdEPqFHDyvHjgPQTzxsOWcyfw5DUabppSKbNK0wkSkpk6RGYpCdEtEwERM4mqwh3SNsHKB%2BmlGkp2SX69ATmNUkjhUJmn201y7OrZuy%2Fyldmtog2S7cZwCzDVh7AuhUtYOj7YV28RtJ0A8C6%2BxRLqaEdx3JgfalRNOj0snv%2FDvuu0A03&X-Amz-Signature=10803c6c0e91fad261c5945ae9a982519cca9fd6b144af1f1dce95e290aebcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
