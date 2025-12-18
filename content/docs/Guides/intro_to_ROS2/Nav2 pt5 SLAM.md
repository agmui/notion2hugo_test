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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=33d89c4363e03444b84771193333287d143e1022cfa10ba8fb0d236595f100ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=53daa93a13d48a667253a16a4d3de22bd6294c20a3785db00af325ebfb4e3903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=57fa55aab8e461b938d12bfb66ce03147cb851f0e055fcb95373f8c39c9e623e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=9114b58afb360ae26642bda2dbd749c68a2ee30c1b10005ab4ab7aed20c16aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=645ab41d246265faa865cbb97e990e7c7faccfd881cf3bff6a34309c50d62d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=a3778dee1043d93acb5f80f8a5551e9e626fbc224d7fa7065df43613d6288c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=e93925c3af73b3e78858a1d9a2c6d006ed4bbc8a639a90b0d5dd27c504ec633c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=5fb79fcf808045d82779664a81c11d3ccec3e00ccbfdffa771d8cb9050084004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=90657703a5cafbad187903e4422fc0bb32135f4f6f1753336ab9a7ef460c2945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=67225c11e8112a46921b90d93ac12056a58d87899288bc1381c8111b53e59859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=2a139d8818ca32a5ae74b8f9f9b0e1293e243ae96726e04640a8b438a7e849b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=7fe530c8801f931a544d7604ab6ab6021da5e7bcae1c83398855b891eb232712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=3d0e27ea186d670097ad5cec36573af27f9663325560d046aa20c63115f2d30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHAWSF5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHax68uGZHe9P5B4izZkBNMyQ7SH1umKuuQ1o9dSBEoQIhAM%2BdjcfkChOt4DrwUMgMXSP3GeygW2%2FZ%2BjGRLTiKGJXsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNqfHEA9Zkpch2Foq3AOWCuqB0kMa99Lu9%2BESdTkN7ugHYNABjj0XCNhtq7Re5jc9VjJL6NudBi2sP5CG%2FkeJgVKqpue5pKP5h5ylHM5C2iVj8MECjCJb%2FQId%2F8eyPma0Y3VRfJQVqM4FHt3B20%2BAAVv58824JtRU2MnB942i0k8y7x%2F9EtqOwYeQTPxZedZ5ys8QjFzjwGFhek0gs6HGUc7%2FfNXcKAGWcjh%2Fr%2FiwTssgdcMYsshPrhFA2ElJ6bPgwm23LIheiJNU91oUPJ0HLAU%2BfInGY%2FQkIphQnl4HWYCrR503IAm2A0jCrVvEjs5YO6bn9XPEGu76Ohi5s3wRudH6AzsboEFjfa1zxLtkI2guXMC9DM00Q8dDjf%2FmTd53veo9JqrjLfP35steibuEKmln%2Bzl85vN%2B1jbprTku2%2FOtOHcog%2Fs%2Fd3DIk9SoJ38xhE90qRBiaPYTj2HzjDBzWkIfXVCl0FY0Q5ut74Ug68pf20dG1OXOIAKER1MGn1MDNeLXUJYrMeUyPh1062RzIoGfoewrLh%2FZ8g8M2jK8%2FvQvwt6U7mT0t8mSnr1s1Aoytgs6U6naQf1NU6swilFt5vY7dEtW4f4O2vk%2Ba1lCzj0%2B%2B2oJHKFBrvVB28TvpdvBQimSaKrRup6JtzC3rI3KBjqkASK9cZ6Xz1FnZiFhFELGDBLVatAzCcqIrFOa%2Bb4KdJcv5Pb2%2FIMQCEQbA%2Bq4rHLriZPyylTg914%2FagB8rPYkFraAnkTlYEJgprYDTaF0%2B0fVFPHAx6iEHl7rUuwG9CNjuAfAlRcpHBuX0iLlKqeokS9E0TaqSxwh3lEj2dPcHJwDD4ND7Ts9QncMSiJ2T%2FLjXX%2BTV7rMbYxwuqPjMUWTxL8PRvHR&X-Amz-Signature=0ac732882c913590c58cb78d5ce1ea3397e1b2a9d93780acb80f65e4e92359c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
