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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=61fbc94e8a6b7469d935879c21f7a6ad3fa3a7234c051ee6cd81f58e24d0c263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=d7bf64caf1283e60f46091f1b6cb3925396f1d0043c04a5b9d88f29519c0f2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=99f5a07c4df860fa1c5507993ae47dee98da1cba21158a9ba3f1c6876869c5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=1ad75cefc55fa072088af3da935a6b729d64c943634f6c491a81fcafee7a4987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=6f5c99175e193b6c2e7218050d3b53c20e4e3a3aa26b888359ffdd4b7248591b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=eb2c7f71f3c47b98483bbff4cd30652bcf99bfabfc52014df42f9a7b4a93dd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=c8cf08dce40897ffa724d4cc94807d49a2b77c0efb6b8ff5018e0132f9b8b9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=b3c66e799cfb9b8064ea3051c547ab7c4c85a6ebb4b6b5e58b2799e9696f7171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=6abcab8150848f69fac2abc39fdaa1a5bfb15c616508f18f6c69c1ccbdf04df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=0716382cd3a8437ed8261bd2a2e89fe126af232daad480982dbf196c57722ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=09081a254a032ecfef1967defa9a6d2111b9e9d84ea81180f5a9ceb748c08c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=89f75f5c322a7c4e95d0197030e6530593412f8a8dfe740b8dc8ec9a422da85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=e2917c132419b9d3a508fd28c1ff715677f0c83e8bf9f95ce986a5a3a161609f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMK4DFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlIVIKGN9%2BCTcQJ0Lm1cP8H7ZkgNk%2BU8N8ZfcEyXpYXAIhAOriZ%2F74Zyd1CZ00%2F6vFJ4yvFuFWoxFZgPMH3V%2F0UUK1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLQsfDNo%2F3d2KycMUq3AMzzV1V51RBujf8Lg%2FC1TdnxnOHv5hK3PEPQThnr92NwWlLcGTqAJbI5VeO%2BUpce7600DDG5aeXBX32C6aoF%2FqIgBw%2FQrq93kFdkzieWt13QN7QTh1KyxSd8iZtiqqTsMB%2FWquKW2QoOUObDtGCn%2BMqbPqEjq51pscI5k7tvX0cOl0Nln9phQHB75tnMVMzR0oYRiiKM32DRfizx0r%2BrKEUSC%2B5Jrx57r%2FdW5dr9%2F2C99rXukG7CaebTYuB1dqTrcj1ZynZRh4plHnRK5DvKa02FJAs%2Bc0jo3BHZDxTmriuq6gP3N9tervxbexI5FZAnWsLvaRbSK1873K4%2FdUFCbKxjtSuy5q3k1W3ljOXh6bZAu9JyLI23Evuy5BEwqghA6YPS8waJBr%2BAEKf6jwqQYXj1xVm8osKEWD5UOARFWEPkpfuK1M4ZXK3w6eWlZNTU3YSkPJo9ArHlcGylt3f1tcryrBPMAabK3nPqHAUZzN8h%2FSCGHxp8acqW7C3hSOs5F9DE%2F0xykMJ9GKHMga%2BoK3ji2vm96eTxx8nQCUfzq4quBFzMip%2BBEF1EY3hUtYTl2y7jP8DmyylDGV%2FWjyPEdWfHLJW85rA%2BjT97AAfbxYdyHNmyiLs4aVgmU3hdjCO76%2FEBjqkAQXJHQv1r8k6e3jS5ZUvW6bj49qTwMsbJY3iUboH3wwuQPbmTGkMD%2BjLDaGqxQS1bTScyiPwrMuqq4JcTCU7CE0UnTejXLmtNwTg%2Fk7C5T9iMMkb%2FYtFPeNOwBTj0QhTE%2FSVzrd5WZZvGwYttzO88Ynzq6S90SYBvT%2FX9xqEEOsfv6N2xSMZt65%2BKcxsABr8VNWutc92C8lvKiN05DJ%2F%2FlQmGn4H&X-Amz-Signature=e81753661dda0980d9e1493bf89e98711d052cc16f4ef0eebc22beefcd8d8371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
