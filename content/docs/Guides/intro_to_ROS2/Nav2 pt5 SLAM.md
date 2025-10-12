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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=4cd62bd0cb4f17aaa77e32bcf00bc4e3aee03f819bfd813f3e96dfd8b17c632e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=aa9cd4ff33ef17359f4ad35806d676878123b0472b6a691a8902ff63523ae940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=f33be2cc1fa7143dd5a2a8f19a9b677b7d1b16264a79bdd9a251487a60da32c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=c1603b45076a9daa07cef2909e5e3696f4316efb16cfd3ec022675a21564195f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=2aa1dc133dbab8517d3a897d8d9b82b673cbba89c9e0ca39343bf49ca2611e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=45153651fe110eb2bb0058e9e3572525e50133ea8e5d2181519e5dfbd6db88b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=4a27865b89901d0164f4415b3385f996ef684bb7457e959df8a17cb4cf3e8fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=1041c3bb5a4f5d1d2e336d81de00bb6472ddc492627ed912bf2afcb305effbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=e4583adc2b2a0c4444e694bb9f644ad832d6a0b866ab8b08faae93a163c1fec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=6446d625335f1a3efef9b0adb1e56526e97c93995e32f13474ffc46eb32e56d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=d12d350ee7b2c861b8f85bc8f01160439eacb0f62455a5b3f332dee703ff8a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=cb911616d35d6118774d2468f64927a9547366884280ae4bd067d13efe66d84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=b8ed48ac7dcd8ae79e321eb69e1e362dc17a4720535765a7bba1dd09819b4ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZLK4LO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIELAgAABFkiIKEL24WZAvUQto7bYVUg7IchxDGXuX4fOAiEAtIVFbbTi%2BC5A3MK%2BhZl5yvNpHNDIYgwbxUr%2BfjWGELUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFuVVFgkUI5%2F8IK%2FjyrcA6o7i9WVCgQnJtr5qWoalqWSHF%2BREFPc%2F6o%2BIkNJ%2B2It8f2ew2dKIvo3OA1gK21IxlBM9Q3jp18Jix2wlBeHcoUiXWp5wTGGSK54lQPSPIE%2B523wbYHg3pGfvzip0WclnXwfW31pOv1jpnftMUEhG3Haz9okoejr2W4yb08lwy%2Bz6WHRATe0%2F80eMJoEOz7M8yzNYo4iGM4eupkYhL0d4kxTdD7cGnLwjeBNY2doH6VGv0pCQSRxQmW%2BsvBcorIPc4mBROjE8GN32QyntM0LAK4efJvuMGQ3v%2F6VFXTmMoFwMT9msU3RAuHv3d7XlIAcSnMTg51EG2v4Y3sT4fNSDgEr6KMsDR9wd9wNNMx7%2FM%2FPVe06vNn518V36IQOYTUsUviLNv8fhbB5P%2BbCVv1plbhttDbQtADkIAliLw2SwhNcKGTTdLtZ6iXYBCQMobJ%2BhD70WyH1SpSy%2Fw4WSOaCb6d7wA%2FhPSKrfhfsWRzA3E8kWsAbW1yGqc%2FJcToCQSwb54HGqpl6S2yBQ6tVwebwCj6VE4wMIZGCm7tWryJJGpkltuA6jAzh9xwl0aejWlzrmC5SjHDcR8uq%2BqOMjLBSZC5TMsVFnF2ckAdHxskCCkvMcPK2EXd%2BLJsboG5oMK25q8cGOqUBO83FLXKdUxwgEEody74PgDCEME9%2Fp%2BVGWqMgSKWL9Kr%2BmHQ1gMl5PosOsI5VvU59Nk5VqGh2WrE8bgGo23sBd%2Bce7H%2B%2B9APldvAYdoTh6Sj0UNZY1Ji8ld%2FuEenGv%2F5wa7SECuBLYVsL68mZRwNqC%2FbVTyMXQohyxH49bknRqr6vgFYT4V1%2FqJnkPNWfNkUN3gKU8r%2F5Md980DFp9l5ukqWTrW5b&X-Amz-Signature=0e5d3cae78ce811169df8f6456d6178630adf9fd8bf3854c996efa92bad19961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
