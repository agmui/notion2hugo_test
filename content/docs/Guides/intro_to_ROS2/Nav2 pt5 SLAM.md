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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=3bc0863a6b639502248c2c2ce71497ecc9a2b981b8558c0c2a895f82ecf457f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=aa3889d2af487160f25fc3b2bb2a739d9a90dbd2a40058de44048e0d74096b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=81162cef86c2e948f9bb4d8d81d91d1691c3c9605093c732027d4d99888e7b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=695bb114a3ccf08cf6ffb66dab14713a1f92beb77c6b087121e97b5cf5704640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=c1ac9d6ffd1fa2c49550b5f4d6558601d2f3e19165df3dcfecd1394410efb017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=9c846eb93212e1c42577efcb9f843d490bd31df4f7a3f4b09cbf4cff5f29451c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=af25d1b3fefdf4733cbd8adc4b22f9aefad76400cf3898815c397a8b9cfbe430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=fa629b1e7ed1c9b9d1200446848795feba67760b6093326bbeb033592c39956a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=316fbcc213faca856382880e0852a5cf32c17a5dd073185e6cb71a9344d88ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=a0ac6b592c6d48b8dd7c44e01a37a003857e71437c94c8c2ec589d2a3804fb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=1a920b0d15c9d7f4d9bb0afb757aa3598e5c27e317ef328ce1bef884b6b15a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=0cf17f448acb5b4677a0c3512beb22c3fb1799af3fe06a61af581799922bfa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=ec0cfe269be3f695e63e230a920d7af5cfb781dde3acfaa8617c1ef556d239c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2JY55Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bjk%2F5hvWLZUPvN7gNaAcRCjMh3ZfjZ8LBMtjR1jtTYQIgGBGOW8j7uLujot07R%2FLNqPM0uclb5akvVFZCLdd41AUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFBZHA1CiQKoqW6kyrcA1fxRrzaY7BzYszzyhmFy1U8YBvvVDgc%2FWyFGoHAWdCa1EQXkWWaWqTKX2I6A6biFsH%2FLg0BlZ0zxbRmv8fNLK39pNKd9JOZYy2pfpTkE8pDoODiaKdFNcHJiAV%2BMt%2Fv%2FBauefKJ0d3Z61sPtjyBUi4q2WTASoBFOhxP5BtGHsmdv2ppzYLPomxcfU0kATKqRF8DsjDLSghCn5PeAhmrASTywMz9AdNI%2BjrsWD7ekV6sWd12JCDYnKVHV%2BREPJTGdMip9aQgXp2CYJu3wKWk5UGTn7QWqbyvqGGFDP%2FNnCUxi1syJBtwYUh1Zq%2Bs8oaRsUVXW7GjWAxPV%2BbBjbf%2Fc2WIGUoB0982jPEwZDbi4RNkZ4xwfrS8trcZl5PxnFYKNhdJHAznY0jfrf%2FwfjhLQ0YzRrretHyw%2FGt%2BBQBWbpapG8dmiJIdCaJp2UDiFFHJwUBzIlikxrf1EaEkIBVsCS%2FY3BNHnypVa1SRDfbzGTn5nNK8I11nkyZwBUDUT42Fb6P3xrjMt1LqYvezwXjQVfazY09wdr2z5VGRaMFSa7rMUpdZ9tnKm2XiJzKxNQrfpf0CCvN3F86hjzbE1PjBJeiJSB9%2BD50dWw690Hray%2FZjgkFnkvcVUvssGKQCMNno7tMGOqUBT2V6hxonnVHaAZup6MOo1oJoDR51hMveqksWK%2Fz3cDlX3SrW%2B4m8MiKb43xD1A4Y6VdZ3yDdUz9pq6xLokD1RyL44Peq9bHBT54qKZ63ES9w9faTzC8JfIn5iTkNMWMUR%2BSGOFP6xxO%2Fj14EqocjIrkmkVPstEgIceL664wJEOqnyh6pfev7wmwgQwmiLh5UoU4Bl1NMfvaqrO06LXTt%2Fqwg1AX7&X-Amz-Signature=e69dc06d4eea0b712ec023bb928de5a9642f1f6640bdf1bc616ea9d8ac17f5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
