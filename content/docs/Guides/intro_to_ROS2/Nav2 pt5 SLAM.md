---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=16fe4a888cb641896dafa51dc850602f3ab37b07e0c5b72a671796948973a7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=85b286f3b845c5db8c2baf2b7e7c2af74e22ddfc1ac2bd7b4f8a1c3cafea3b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=64e541825fa44d6b3df9026c89f4a55a35940ce27d340c4da7b6a0b21d4bf701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=c420770b3cb5ab6dabed0ad33bc3029c9c323174c65ee4736f56ac853867b7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=62ed3352c1b6860245a7ecd19d3c84fdb4718baae209ffbbaefdc19c9dc5a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=1cbd12ea977742eb84af0e1e2a6e65e3eb082118cbd5abdf13e3db6bbff50fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=be285e8bf0564bb07b07210202b213bf64b0b304072114dc10872ec72af2ff8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=32df2e0f70cce08b7851130470a4638d76ea6436459aaf9cdc172be78c8c2e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=3cad872e72009296c3dd63127d7650c15d338e7039c3a4416f319bae6e7c4771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=411c4823cfe703ffe4288cb431b3f1051ec5ac4ffef90d1c06b2befdb016aa68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=86dfeb55baae96cebc5f01b3b22f1f9166386f5482ee7124366b0aa96b45d320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=0f3d33348828c07609c86c0cdaeb0e3d5d970a4337e72089e4fc06c751772c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=da75f0fa84175d5dba8c8580f0907fda3bb51cb9a3ce926600ced3e47abd7512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TWV2N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9D1Qv2ZepdkAgJotaHkG2s6hp5269%2Bg4LlrrHPfZJdAiB11VidZqpoGOHAdir%2Fa7NBCp2c79Wl%2FrNj6vA9kNpMGCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9t%2FEqO00LgOBYMAVKtwDrauYBSRwar%2BX86TxAN%2FoNjAyohK3MGUrwM98nfYpOdUk%2BVi6PH7sbIPmFiKIM4xAfXkUDli4V30MgVpPnSbD%2B%2F9jsjQpqO33uBmheqKq27ftkTPa1tbfpHpSvPLR4fapLNgWwM7bLC2BWIODyuYn3bhwl0uwOG5ThQ6Tb0BAXdAQLnfQEO4QDX%2BjN1iWg7VPdj1WDChfWNuITDkqJAfz716%2FqU%2B%2FSWfLzj924nsf7VGta9LZ5TTh9%2B%2F4TdGf2aIVZK6gdLw1ZGVAsFF55UpXQMQvLp7a6Cwn4TPI1jLrioYFFTpMww%2Fq6%2B88I%2FtocnaNxhRWMqozKHrHsaCL%2FhTLRLn7PLKLuPV8xrvIgBLdb73ihbvJ9Er1zUNNgSxebsbdoWgE332bY8Oep%2BARh59Q%2B32i1Xw9QWQ2E2hYidMFqEAPJxpGKFFeoF7%2FbTakskinJzqV1y%2BxjRTMub32h55tcVM1Eu0Mi5VM13XqdFjhlEm66vB7kD%2F4lT%2BDV0xGXDnyrWi283rxzwgwscplh8R1n8fsrjxboRHs%2BWvBObFHX32oS6p3VlxcRFrupXFv0Pi7wl3TZa7XZ6JneNBCDlhJ4UfzF3%2BYBawwzTEukF05ll%2Biin9O9%2BYYgwrrDGcwtfWrxAY6pgHEnBKWMONEK4UT1V%2FyL1YPc1WQg5sfWrrTaQYququPMAmDFBlrrywixFDX%2FHjNd4fyBgsVgo7j8OQnEIyjiMbacix5cV3Pv%2BSBBkxeXAbAw%2BuHq0bfXwmy%2BB15IEvaDTJVlvZAK6b2gC68QioFfJ2dyeUf%2BAti2c5nbxGVqXuFnxzQQ4slw9PRYXcKxchZ361bk3W08Rf3bqwGaZKeFyfyYC%2BOyAb2&X-Amz-Signature=ac3b5a5b742c5a6102e7c75f4fdcf4b0c1d205626777debabd64c9ed8e8c3379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
