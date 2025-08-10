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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=dbf04bc89a16f1199b7a7bf9e91bba4c5e2de0d5f95c5d7eb403b9fcdcf3efa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=886a7ec3a3284d28d532c8c084f143d5f9a256bcfad5477b8a17b641fcfd0221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=ff72b6ab11edfb30060fdd6efb966663173267498e514d614bac5e813d96f83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=d914ca11831b9c17d244add5aff8c48bc70db0156eacb4a02cc772b20a8fc336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=9a98eb7cf7c69ffc875df48d3d2fd50adebaf0fdf40720f073fe27756580ef59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=96c1ca7562a52d693eb719f14634dd289a57fb35466845927222ba2b90222bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=9b29989ab33230e114e7985c089e2b5e1aec721302206c076402dc4e30adce79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=01d8a120e528dac170bdc5713891afb4a6ff9a82e29be661f66f5d98629fec58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=d322d5fc4b4aed6318b944cf207f927ab43b6bfeb5d68c9b45492b899fa08806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=963535b9e724bb8721bc18a82bc820b8bd0314bf0a7e8933341ba4a7204b2e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=321e73b1ec8372ef86fc69f800166d1d97956290734358b7bd1d250facacf1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=778b0920912d5e031bbf78ee8cb20a5c74370ad3f1e63046010d46d15224e0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=f9ef509992652a3e12d86c50d9e7bb0b55c509377f1fbfadc524a57af5d320b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXCOH7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGklCRnMqgdbQHkl5DtcdqWZU7ZWbC6zIPpODdFrcxB2AiBSzHC2dIwwIHUqHXCroZOzV8mKp%2FD4QCuaCpeWHgLTOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SCItix8d%2BhoyiVeKtwDpK%2BOxXbvorxPOl4%2FmXZ8lGzg4W1toMWrPJf1Ibc7uIDkT8e%2BwYDLJ4y%2FQF86iNUGECnr1nKrK0F24HqZvsXX11tZTBYdGVcaty3IjnqYDZEpjM4h2Q4OLpc2nyzDhx1ugaw9g1kex0Asqr2DLnY8%2BYEPcoXWXKURxav0LDGbW1AqcxICKBciOVo257ylAuJsgjvOeQXV6BesNYH4SSmdR6i5GmvG1zG1Be5Q5MeauKHfy5B%2BlrjDx69Ocls82zRdBXuGzpzTpPy%2B0JdzBMF%2BoaBSBysd%2FM4Wbp%2BwvFef1N21p8E3HWdVDuAZpDpbAZn45jfX755vf4zWCcr2yD4OdGeU9%2BMJwG%2Fdq6JO3K6IB8H1nhx8Qyogbi1aD9l3jqt31pzOKuhNDngCWNUSBkW2NtTn7BiBJzYKLgiKaRj4EKYzvPrUxNH2hfcoLCJIX8eNnhg99TeqXimxFlsFtUWBq0fmst139FowEdaOcUwv6Awm%2BkglKJ9jjtNZFsgWq%2BOqZKeSBPgsredn9FYV75M4OpzqlniG%2F%2F9IaOPnOVaOh3s6tk%2FOszeBrMCXtTb676dARPob6m1hihZbAJZ7kfZlHwDFhRuw3Di%2FmlsJBPJ3zQOQuHhm2Y%2Bxnd9zJwUwsLrjxAY6pgENOxCf3uXX2d8Q7dLUhl5UxmEJnNnogtxO4s4%2B8EDachew77bcKNMJ2haJf7mudsSB94WFlXq5lJadNmTnkNKzafMOQulKlXJmTUyTCGfzRUUoY4CBSLZKoXq1iMCOMQIEVHg%2BRg1CV009WpYbJjHrRXcxzoQoxUmMZAZkv1wDeuq21WVJD4%2FIVv2KnAJWBoceU7XVnPvxvPFpcjLTahRB1V9Tnbd3&X-Amz-Signature=a526d69ba13bcf6d527ded4cca54f33ffebecc14dd74e7a77cc351d88e0bd898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
